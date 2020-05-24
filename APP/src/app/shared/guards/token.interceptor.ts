import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { Tokens } from '../models/Tokens.interface';
import { LoginService } from '../services/login.service';
import { InterceptorSkip } from './skip.interceptor';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  constructor(private router: Router, private loginService: LoginService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.headers && request.headers.has(InterceptorSkip)) {

console.log(request);

      const headers = request.headers.delete(InterceptorSkip);
      request = this.addToken(request, '', true, headers);
      // return next.handle(request.clone({ headers }));
    } else {
      let _token = this.loginService.getToken()
      if (_token) {
        request = this.addToken(request, _token, false);
      }
      // console.log()
      // console.log('╔══════════════════════════════════════════════════════════════════╗')
      // console.log('║ shared/guards/token.interceptor : Authorization added to request ║')
      // console.log('╚══════════════════════════════════════════════════════════════════╝')
      // console.log()

      // return next.handle(request).pipe(
      //   tap(
      //     (event: HttpEvent<any>) => {
      //       if (event instanceof HttpResponse) {
      //         // do stuff with response if you want
      //       }
      //     },
      //     (err: any) => {
      //       if (err instanceof HttpErrorResponse) {
      //         if (err.status === 401) {
      //           // redirect to the login route
      //           this.router.navigateByUrl("/dashboard");
      //         }
      //       }
      //     }
      //   )
      // );
    }
    // return next.handle(request).pipe(
    //   tap(
    //     (event: HttpEvent<any>) => {
    //       if (event instanceof HttpResponse) {
    //         // do stuff with response if you want
    //       }
    //     },
    //     (err: any) => {
    //       if (err instanceof HttpErrorResponse) {
    //         if (err.status === 401) {
    //           return this.handle401Error(request, next);
    //           // redirect to the login route
    //           // this.router.navigateByUrl("/dashboard");
    //         } else {
    //           return throwError(err);
    //         }
    //       }
    //     }
    //   )
    // );
    return next.handle(request).pipe(
      catchError(err => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          return this.handle401Error(request, next);
        } else {
          return throwError(err);
        }
      })
    );
  }
  handle401Error(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      return this.loginService.refreshToken().pipe(
        switchMap(({ token }: Tokens) => {
          this.isRefreshing = false;
          this.refreshTokenSubject.next(token);
          return next.handle(this.addToken(request, token));
        })
      );
    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token != null),
        take(1),
        switchMap(jwt => {
          return next.handle(this.addToken(request, jwt));
        })
      );
    }
  }

  addToken(
    request: HttpRequest<any>,
    token: string,
    isAdded: boolean = false,
    headers?: HttpHeaders
  ): HttpRequest<any> {
    return request.clone(
      !isAdded
        ? {
            setHeaders: {
              'Content-Type' : 'application/json; charset=utf-8',
              'Accept'       : 'application/json',
              'Authorization': token
            }
          }
        : {
            headers
          }
    );
  }
}
