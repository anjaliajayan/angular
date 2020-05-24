import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { of } from 'rxjs/internal/observable/of';
import { catchError, mapTo, tap, map } from 'rxjs/operators';
import { InterceptorSkipHeader } from '../guards/skip.interceptor';
import { Tokens } from '../models/Tokens.interface';
import { environment } from './../../../environments/environment';
import { Globals } from '../utils/globals'
import { prepareGlobals, saveGlobals, prepareBooking, saveBooking } from '../utils/common';
import { Booking } from '../utils/booking';
import { CookieService } from 'ngx-cookie-service';
import { getCookie } from '../utils/common'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = environment.serverURL;
  authStatus = false;
  jwtHelper = new JwtHelperService();
  globals: Globals;
  booking: Booking;
  cookieName: string;
  constructor(private http: HttpClient, private router: Router,
    private cookieService: CookieService) {
    this.cookieName = 'aggregator-' + environment.hostname;
  }

  signin(authPayload) {
    return this.http.post(`${this.url}/api/sign-in`, authPayload, {
      withCredentials: true,
      observe: 'response',
      headers: InterceptorSkipHeader
    })
      .pipe(
        tap<any>(response => this.doLoginUser(response)),
        // mapTo(v => v),
        catchError((error: HttpErrorResponse) => {
          return of(error);
        })
      );
  }

  // verifyOTP(otpPayload) {
  //   return this.http.post(`${this.url}/api/verify-otp`, otpPayload, {
  //     withCredentials: true,
  //     observe: 'response',
  //     headers: InterceptorSkipHeader
  //   });
  // }

  verifyOTP(otpPayload) {
    return this.http
      .post(`${this.url}/api/verify-otp`, otpPayload, {
        withCredentials: true,
        observe: 'response',
        headers: InterceptorSkipHeader,
      })
      .pipe(
        tap<any>(response => this.doLoginUser(response)),
        // mapTo(v => v),
        catchError(error => {
          console.error(error);
          return of(false);
        })
      );
  }

  logout() {
    return this.http
      .post<any>(`${this.url}/logout`, {
        refreshToken: this.getRefreshToken()
      })
      .pipe(
        tap(() => this.doLogoutUser()),
        mapTo(true),
        catchError(error => {
          console.error(error);
          return of(false);
        })
      );
  }

  private doLoginUser(response: HttpResponse<any>) {

    if (response.body && response.body.status === 200) {
      if (response.body.otp == 1 || response.body.verify == true) {
        this.storeTokens({
          token: response.body.token,
          refreshToken: response.body.refreshToken
        })
      } else {

      }
    }
  }

  private doLogoutUser() {
    this.removeTokens();
    this.removeSensitiveData();
  }

  private storeTokens({ token, refreshToken }: Tokens) {
    this.globals = prepareGlobals();
    this.globals.init(token, refreshToken);
    saveGlobals(this.globals);
  }

  private removeTokens() {
    this.globals = prepareGlobals();
    this.globals.setToken('');
    this.globals.setRefreshToken('');
    saveGlobals(this.globals);
  }

  /**
   * FEQ - Remove Sensitive Data
   */
  private removeSensitiveData() {
    this.removeBookingInfo();
  }

  getBookingInfo() {
    this.booking = prepareBooking();
    return this.booking.getUserBookingInfo();
  }

  removeBookingInfo() {
    this.booking = prepareBooking();
    this.booking.setUserBookingInfo(null);
    saveBooking(this.booking);
  }

  isAuthenticated() {
    let cookieValue = this.cookieService.get(this.cookieName)
    if (cookieValue === '') {
      // return false;
    }
    this.cookieService.set(this.cookieName, cookieValue, 3600000, "/", environment.hostname, false, 'None');
    return !!this.getToken();
  }

  getToken() {
    this.globals = prepareGlobals();
    return this.globals.getToken();
  }

  auth() {
    return this.http.get(`${this.url}/api/auth`);
  }

  refreshToken() {
    return this.http
      .post<any>(`${this.url}/api/refresh`, {
        refreshToken: this.getRefreshToken(),
        user: this.getUser()
      })
      .pipe(
        tap(({ token }: Tokens) => {
          this.storeToken(token);
        })
      );
  }

  getUser() {
    this.globals = prepareGlobals();
    return this.globals.getUser();
  }

  private storeToken(_token: string): void {
    this.globals = prepareGlobals();
    this.globals.setToken(_token);
    saveGlobals(this.globals);
  }

  getRefreshToken() {
    this.globals = prepareGlobals();
    return this.globals.getRefreshToken();
  }
  resentOTP(data: any) {
    return this.http.post(`${this.url}/api/resend-otp`, data);
  }

   rememberMe() {
    return this.http.post(`${this.url}/api/check-remember-me`,{
      rememberme_token: getCookie('remembermeToken')
    })
    .pipe(
      tap<any>(response => this.doLoginUser(response)),
       // mapTo(v => v),
       catchError(error => {
        //  alert(error.error);
         return of(false);
       })
     );
  }

  sendPassword(data) {
    return this.http.post(`${this.url}/api/send_password`, data).pipe(
      tap(async (result: any) => {
        return result;
      })
    );
  }

}
