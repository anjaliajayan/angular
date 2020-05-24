import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable()
export class SecurityInterceptor implements HttpInterceptor {

  constructor(private router: Router, private loginService: LoginService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.loginService.isAuthenticated()) {
      this.router.navigate(["/login"]);
    }
    return next.handle(request);
  }
}
