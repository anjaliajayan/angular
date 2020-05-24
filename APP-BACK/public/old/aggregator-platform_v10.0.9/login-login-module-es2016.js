(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui grid login-grid\">\r\n  <div class=\"sixteen wide column login-grid_content\">\r\n    <div class=\"ui centered container\">\r\n      <div class=\"ui one column centered grid\">\r\n        <div class=\"five wide column animated fadeIn\">\r\n\r\n          <!-- !showOTP ||  -->\r\n          <form class=\"ui form card arora-card text-center\" [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" *ngIf=\"showLogin\"> \r\n            <div class=\"content\">\r\n              <img src=\"./../../assets/img/tpconnects-logo-blue.svg\" class=\"login-grid_content__logo\" />\r\n              <div class=\"field\"\r\n                [class.error]=\"authErr || loginForm.controls['username'].errors?.required === true && loginForm.controls.username.touched\">\r\n                <input type=\"text\" name=\"username\" required formControlName=\"username\" placeholder=\"Username\">\r\n              </div>\r\n              <div class=\"field\"\r\n                [class.error]=\"authErr || loginForm.controls['password'].errors?.required === true && loginForm.controls.password.touched\">\r\n                <input type=\"password\" name=\"password\" required formControlName=\"password\" placeholder=\"Password\">\r\n              </div>\r\n              <div class=\"field\">\r\n                <div class=\"ui checkbox\">\r\n                  <input type=\"checkbox\" tabindex=\"0\" formControlName=\"rememberMe\" (click)=\"clickEvent()\"\r\n                    [ngClass]=\"status ? 'true' : 'false'\">\r\n                  <label>Remember me</label>\r\n                </div>\r\n              </div>\r\n              <button class=\"ui secondary button\" [class.loading]=\"loginLoader\" [disabled]=\"loginLoader\" type=\"submit\">Submit</button>\r\n              <div class=\"col-12 text-right\">\r\n                <span (click)=\"resetPasswordForm()\"><a>Reset Password</a></span>\r\n              </div>\r\n            </div>\r\n          </form>\r\n\r\n\r\n          <form class=\"ui form card otp-card arora-card animated fadeIn text-center\" [formGroup]=\"otpForm\"\r\n            *ngIf=\"showOTP\">\r\n            <div class=\"content\">\r\n              <img src=\"./../../assets/img/tpconnects-logo-blue.svg\" class=\"login-grid_content__logo\" />\r\n              <p class=\"ui header\">OTP Verification</p>\r\n              <p>We've sent you an email for your One-Time-Pin (OTP). Kindly Verify your OTP.</p>\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                  <div class=\"from-group\"\r\n                    [class.error]=\"otpForm.controls['otp'].errors?.required === true && otpForm.controls['otp'].touched\">\r\n                    <input type=\"password\" min=\"0\" name=\"otp\" max=\"6\" formControlName=\"otp\" placeholder=\"\"\r\n                      class=\"form-control\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <button type=\"button\" class=\"ui secondary button\" [class.loading]=\"otpLoader\" [disabled]=\"otpLoader\" (click)=\"verifyOTP()\">Verify</button>\r\n                </div>\r\n                <div class=\"col-12 text-right\">\r\n                  <span (click)=\"resentOtp()\"><a>Resent OTP</a></span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n\r\n          <form class=\"ui form card otp-card arora-card animated fadeIn text-center\" [formGroup]=\"passwordForm\" *ngIf=\"showPassword\">\r\n            <div class=\"content\">\r\n              <img src=\"./../../assets/img/tpconnects-logo-blue.svg\" class=\"login-grid_content__logo\" />\r\n              <p class=\"ui header\">Rest Password</p>\r\n              <p>Enter your username / email to get reset password instruction.</p>\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                  <!-- <small *ngIf=\"passwordFormSubmitted && gspf.usernamemail.errors\" class=\"text-danger\">required</small> -->\r\n                  <div class=\"from-group\">\r\n                    <input type=\"text\" formControlName=\"usernamemail\" placeholder=\"\" class=\"form-control\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <button type=\"button\" class=\"ui secondary button\" [class.loading]=\"otpLoader\" [disabled]=\"otpLoader\" (click)=\"btnSendPasswordHandler()\">Send Password</button>\r\n                </div>\r\n                <div class=\"col-12 text-right\">\r\n                  <span (click)=\"backLogin()\"><a>Back to Login</a></span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n\r\n\r\n        </div>\r\n        <img src=\"./../../assets/img/planes-illus.svg\" class=\"login-grid_content__placeholder-img animated fadeInUp\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ui modal login-modal\">\r\n  <i class=\"close icon\"></i>\r\n  <div class=\"header\">\r\n    Verify OTP\r\n  </div>\r\n  <div class=\"description\">\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] }
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], LoginRoutingModule);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".stepper-grid {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n.stepper-grid .stepper-grid_step {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  opacity: 0.6;\n  cursor: pointer;\n}\n.stepper-grid .stepper-grid_step._active {\n  opacity: 1;\n  -webkit-transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div {\n  background-color: #062862;\n  border: 0;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div div.image {\n  background-color: white;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div:hover {\n  border: 2px solid #A6B1C3;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon label {\n  border: 0;\n  background-color: #062862;\n  color: white;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-border hr {\n  border-bottom: 2px solid #062862;\n}\n.stepper-grid .stepper-grid_step._activated {\n  opacity: 1;\n  -webkit-transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div {\n  background-color: #437ADA;\n  border: 0;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div div.image {\n  background-color: white;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div:hover {\n  border: 2px solid #A6B1C3;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon label {\n  border: 0;\n  background-color: #437ADA;\n  color: white;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-border hr {\n  border-bottom: 2px solid #437ADA;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div {\n  background-color: transparent;\n  border: 2px solid #A6B1C3;\n  color: white;\n  width: 45px;\n  height: 45px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 50%;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon label {\n  width: 100px;\n  height: auto;\n  line-height: 24px;\n  text-align: center;\n  background-color: transparent;\n  border: 2px solid #A6B1C3;\n  margin-top: 15px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 600 !important;\n  font-size: 13px;\n  color: #A6B1C3;\n  border-radius: 8px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon label._last {\n  width: 150px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-border {\n  width: 100%;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-border hr {\n  margin-top: -24px;\n  width: 100%;\n  height: 2px;\n  background: none;\n  border-bottom: 2px solid #A6B1C3;\n}\n.stepper-grid-content {\n  display: none;\n}\n.stepper-grid-content._active {\n  display: block;\n}\n.login-grid {\n  height: calc(100vh + 30px);\n  overflow: hidden;\n  background-color: #062862;\n  background-color: linear-gradient(360deg, #3964AE -12.16%, #062862 104.55%);\n  background-image: url('pattern-bg.svg');\n  background-repeat: repeat;\n  background-position: center;\n}\n.login-grid .login-grid_content {\n  position: relative;\n}\n.login-grid .login-grid_content .five.wide.column {\n  position: relative;\n  z-index: 1000000;\n}\n.login-grid .login-grid_content form {\n  text-align: center;\n  margin-top: 130px;\n}\n.login-grid .login-grid_content form .ui.checkbox {\n  margin: 8px 0;\n}\n.login-grid .login-grid_content form .ui.checkbox .box:before,\n.login-grid .login-grid_content form .ui.checkbox label:before {\n  border: 2px solid #437ADA;\n}\n.login-grid .login-grid_content form.arora-card {\n  padding-left: 18px !important;\n  padding-right: 18px !important;\n}\n.login-grid .login-grid_content form.arora-card.otp-card .button {\n  margin-top: 20px;\n}\n.login-grid .login-grid_content form.arora-card .ui.header {\n  color: #062862;\n  font-weight: 600 !important;\n}\n.login-grid .login-grid_content form.arora-card p {\n  color: rgba(6, 40, 98, 0.5);\n}\n.login-grid .login-grid_content form input {\n  border: 0 !important;\n  background-color: rgba(67, 122, 218, 0.15);\n}\n.login-grid .login-grid_content form input:first-child {\n  margin-top: 14px;\n}\n.login-grid .login-grid_content form input::-webkit-input-placeholder {\n  font-weight: 400 !important;\n  text-align: left;\n  color: #062862;\n  opacity: 0.5;\n}\n.login-grid .login-grid_content form input:-moz-placeholder {\n  font-weight: 400 !important;\n  text-align: left;\n  color: #062862;\n  opacity: 0.5;\n}\n.login-grid .login-grid_content form input::-moz-placeholder {\n  font-weight: 400 !important;\n  text-align: left;\n  color: #062862;\n  opacity: 0.5;\n}\n.login-grid .login-grid_content form input:-ms-input-placeholder {\n  font-weight: 400 !important;\n  text-align: left;\n  color: #062862;\n  opacity: 0.5;\n}\n.login-grid .login-grid_content form .ui.button {\n  background-color: #437ADA !important;\n  min-width: 100% !important;\n}\n.login-grid .login-grid_content form .login-grid_content__title {\n  font-size: 28px;\n  font-weight: 300;\n}\n.login-grid .login-grid_content form .login-grid_content__logo {\n  padding: 0 16px 15px;\n  margin-bottom: 15px;\n  width: 100%;\n  height: auto;\n}\n.login-grid .login-grid_content form label,\n.login-grid .login-grid_content form .field {\n  font-weight: 400 !important;\n  text-align: left;\n  color: #A6B1C3;\n}\n.login-grid .login-grid_content form button {\n  width: 100%;\n  max-width: 133px;\n  border-radius: 50px;\n  font-weight: 300;\n}\n.login-grid .login-grid_content .login-grid_content__placeholder-img {\n  position: fixed;\n  bottom: 0px;\n  z-index: 0;\n  width: 100%;\n  max-width: calc(100% - 400px);\n  height: auto;\n}\n.login-grid .login-grid_bg-color {\n  background-color: #3867B1;\n  position: relative;\n}\n@keyframes flickerAnimation {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes flickerAnimation {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.login-grid .login-grid_bg-color .animate-flicker {\n  -webkit-animation: flickerAnimation 4s infinite;\n  animation: flickerAnimation 4s infinite;\n}\n.login-grid .login-grid_bg-color .login-grid_pattern {\n  width: 100%;\n  max-width: 552px;\n  display: block;\n  margin: 0 auto;\n}\n.login-grid .login-grid_bg-color .login-grid_pattern:first-child {\n  margin-top: 60px;\n}\n.login-grid .login-grid_bg-color .login-grid_logo {\n  position: absolute;\n  right: 42px;\n  bottom: 42px;\n  z-index: 10;\n  width: 100%;\n  max-width: 160px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRTpcXEJlbGFsXFxwcm9qZWN0c1xcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGNvbW9uLXN0eWxlc1xcc3RlcHBlci5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vRTpcXEJlbGFsXFxwcm9qZWN0c1xcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGNvbW9uLXN0eWxlc1xcZGVzaWduLXBhbGV0dGUuc2NzcyIsInNyYy9hcHAvbG9naW4vRTpcXEJlbGFsXFxwcm9qZWN0c1xcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcY29tb24tc3R5bGVzXFxtaXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0o7QURDSTtFQUNFLFVBQUE7RUFDQSxrRUFBQTtFQUFBLDBEQUFBO0FDQ047QURFUTtFQUNFLHlCRWRRO0VGZVIsU0FBQTtBQ0FWO0FERVU7RUFDRSx1QkFBQTtBQ0FaO0FER1U7RUFDRSx5QkFBQTtBQ0RaO0FES1E7RUFDRSxTQUFBO0VBQ0EseUJFNUJRO0VGNkJSLFlBQUE7QUNIVjtBRFFRO0VBQ0UsZ0NBQUE7QUNOVjtBRFdJO0VBQ0UsVUFBQTtFQUNBLGtFQUFBO0VBQUEsMERBQUE7QUNUTjtBRFlRO0VBQ0UseUJFaERNO0VGaUROLFNBQUE7QUNWVjtBRFlVO0VBQ0UsdUJBQUE7QUNWWjtBRGFVO0VBQ0UseUJBQUE7QUNYWjtBRGVRO0VBQ0UsU0FBQTtFQUNBLHlCRTlETTtFRitETixZQUFBO0FDYlY7QURr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QUE7RUFDQSxnQkFBQTtBRnFGTiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0ZXBwZXItZ3JpZCB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICAuc3RlcHBlci1ncmlkX3N0ZXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAuNjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmLl9hY3RpdmUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG5cclxuICAgICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24ge1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGVlcC1ibHVlLWNvbG9yO1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG5cclxuICAgICAgICAgIGRpdi5pbWFnZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRlZXAtYmx1ZS1jb2xvcjtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIge1xyXG4gICAgICAgIGhyIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkZGVlcC1ibHVlLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuX2FjdGl2YXRlZCB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XHJcblxyXG4gICAgICAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiB7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG5cclxuICAgICAgICAgIGRpdi5pbWFnZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtYm9yZGVyIHtcclxuICAgICAgICBociB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgZGl2IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtcHJpbWFyeTtcclxuXHJcbiAgICAgICAgJi5fbGFzdCB7XHJcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgaHIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0yNHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zdGVwcGVyLWdyaWQtY29udGVudCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgJi5fYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG4iLCIuc3RlcHBlci1ncmlkIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3BhY2l0eTogMC42O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmUgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2Mjg2MjtcbiAgYm9yZGVyOiAwO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYgZGl2LmltYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdjpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBNkIxQzM7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGxhYmVsIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYyODYyO1xuICBjb2xvcjogd2hpdGU7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIgaHIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA2Mjg2Mjtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2YXRlZCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM3QURBO1xuICBib3JkZXI6IDA7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiBkaXYuaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2OmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0E2QjFDMztcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gbGFiZWwge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzdBREE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciBociB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNDM3QURBO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBNkIxQzM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gbGFiZWwge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBNkIxQzM7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNBNkIxQzM7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGxhYmVsLl9sYXN0IHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciBociB7XG4gIG1hcmdpbi10b3A6IC0yNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQTZCMUMzO1xufVxuXG4uc3RlcHBlci1ncmlkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnN0ZXBwZXItZ3JpZC1jb250ZW50Ll9hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmxvZ2luLWdyaWQge1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggKyAzMHB4KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2Mjg2MjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgIzM5NjRBRSAtMTIuMTYlLCAjMDYyODYyIDEwNC41NSUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLy4uLy4uL2Fzc2V0cy9pbWcvcGF0dGVybi1iZy5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5sb2dpbi1ncmlkIC5sb2dpbi1ncmlkX2NvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubG9naW4tZ3JpZCAubG9naW4tZ3JpZF9jb250ZW50IC5maXZlLndpZGUuY29sdW1uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDAwMDAwO1xufVxuLmxvZ2luLWdyaWQgLmxvZ2luLWdyaWRfY29udGVudCBmb3JtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMzBweDtcbn1cbi5sb2dpbi1ncmlkIC5sb2dpbi1ncmlkX2NvbnRlbnQgZm9ybSAudWkuY2hlY2tib3gge1xuICBtYXJnaW46IDhweCAwO1xufVxuLmxvZ2luLWdyaWQgLmxvZ2luLWdyaWRfY29udGVudCBmb3JtIC51aS5jaGVja2JveCAuYm94OmJlZm9yZSxcbi5sb2dpbi1ncmlkIC5sb2dpbi1ncmlkX2NvbnRlbnQgZm9ybSAudWkuY2hlY2tib3ggbGFiZWw6YmVmb3JlIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzQzN0FEQTtcbn1cbi5sb2dpbi1ncmlkIC5sb2dpbi1ncmlkX2NvbnRlbnQgZm9ybS5hcm9yYS1jYXJkIHtcbiAgcGFkZGluZy1sZWZ0OiAxOHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctcmlnaHQ6IDE4cHggIWltcG9ydGFudDtcbn1cbi5sb2dpbi1ncmlkIC5sb2dpbi1ncmlkX2NvbnRlbnQgZm9ybS5hcm9yYS1jYXJkLm90cC1jYXJkIC5idXR0b24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmxvZ2luLWdyaWQgLmxvZ2luLWdyaWRfY29udGVudCBmb3JtLmFyb3JhLWNhcmQgLnVpLmhlYWRlciB7XG4gIGNvbG9yOiAjMDYyODYyO1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tZ3JpZCAubG9naW4tZ3JpZF9jb250ZW50IGZvcm0uYXJvcmEtY2FyZCBwIHtcbiAgY29sb3I6IHJnYmEoNiwgNDAsIDk4LCAwLjUpO1xufVxuLmxvZ2luLWdyaWQgLmxvZ2luLWdyaWRfY29udGVudCBmb3JtIGlucHV0IHtcbiAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjcsIDEyMiwgMjE4LCAwLjE1KTtcbn1cbi5sb2dpbi1ncmlkIC5sb2dpbi1ncmlkX2NvbnRlbnQgZm9ybSBpbnB1dDpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG59XG4ubG9naW4tZ3JpZCAubG9naW4tZ3JpZF9jb250ZW50IGZvcm0gaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMDYyODYyO1xuICBvcGFjaXR5OiAwLjU7XG59XG4ubG9naW4tZ3JpZCAubG9naW4tZ3JpZF9jb250ZW50IGZvcm0gaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMwNjI4NjI7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5sb2dpbi1ncmlkIC5sb2dpbi1ncmlkX2NvbnRlbnQgZm9ybSBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICMwNjI4NjI7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5sb2dpbi1ncmlkIC5sb2dpbi1ncmlkX2NvbnRlbnQgZm9ybSBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMDYyODYyO1xuICBvcGFjaXR5OiAwLjU7XG59XG4ubG9naW4tZ3JpZCAubG9naW4tZ3JpZF9jb250ZW50IGZvcm0gLnVpLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzdBREEgIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tZ3JpZCAubG9naW4tZ3JpZF9jb250ZW50IGZvcm0gLmxvZ2luLWdyaWRfY29udGVudF9fdGl0bGUge1xuICBmb250LXNpemU6IDI4cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ubG9naW4tZ3JpZCAubG9naW4tZ3JpZF9jb250ZW50IGZvcm0gLmxvZ2luLWdyaWRfY29udGVudF9fbG9nbyB7XG4gIHBhZGRpbmc6IDAgMTZweCAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmxvZ2luLWdyaWQgLmxvZ2luLWdyaWRfY29udGVudCBmb3JtIGxhYmVsLFxuLmxvZ2luLWdyaWQgLmxvZ2luLWdyaWRfY29udGVudCBmb3JtIC5maWVsZCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICNBNkIxQzM7XG59XG4ubG9naW4tZ3JpZCAubG9naW4tZ3JpZF9jb250ZW50IGZvcm0gYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTMzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4ubG9naW4tZ3JpZCAubG9naW4tZ3JpZF9jb250ZW50IC5sb2dpbi1ncmlkX2NvbnRlbnRfX3BsYWNlaG9sZGVyLWltZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIHotaW5kZXg6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDQwMHB4KTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLmxvZ2luLWdyaWQgLmxvZ2luLWdyaWRfYmctY29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5Aa2V5ZnJhbWVzIGZsaWNrZXJBbmltYXRpb24ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1MCUge1xuICAgIG9wYWNpdHk6IDAuMjU7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQC1vLWtleWZyYW1lcyBmbGlja2VyQW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjI1O1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkAtbW96LWtleWZyYW1lcyBmbGlja2VyQW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjI1O1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBmbGlja2VyQW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjI1O1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbi5sb2dpbi1ncmlkIC5sb2dpbi1ncmlkX2JnLWNvbG9yIC5hbmltYXRlLWZsaWNrZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbjogZmxpY2tlckFuaW1hdGlvbiA0cyBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IGZsaWNrZXJBbmltYXRpb24gNHMgaW5maW5pdGU7XG4gIC1vLWFuaW1hdGlvbjogZmxpY2tlckFuaW1hdGlvbiA0cyBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBmbGlja2VyQW5pbWF0aW9uIDRzIGluZmluaXRlO1xufVxuLmxvZ2luLWdyaWQgLmxvZ2luLWdyaWRfYmctY29sb3IgLmxvZ2luLWdyaWRfcGF0dGVybiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDU1MnB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4ubG9naW4tZ3JpZCAubG9naW4tZ3JpZF9iZy1jb2xvciAubG9naW4tZ3JpZF9wYXR0ZXJuOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cbi5sb2dpbi1ncmlkIC5sb2dpbi1ncmlkX2JnLWNvbG9yIC5sb2dpbi1ncmlkX2xvZ28ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA0MnB4O1xuICBib3R0b206IDQycHg7XG4gIHotaW5kZXg6IDEwO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxNjBweDtcbn0iLCIkcHJpbWFyeS1jb2xvcjogIzQzN0FEQTtcclxuJHNlY29uZGFyeS1jb2xvcjogI0E2QjFDMztcclxuJGRlZXAtYmx1ZS1jb2xvcjogIzA2Mjg2MjtcclxuJGxpZ2h0LXNtb2tlLWNvbG9yOiAjZTVlNWU1O1xyXG4kdm9pbGEtZ3JlZW46ICM4NEJDNkE7XHJcbiRwdXJlLXdoaXRlOiB3aGl0ZTtcclxuJGZhdWx0LWNvbG9yOiAjREU3OTc5O1xyXG4kd2FybmluZy1jb2xvcjogI0VDQzA0RTtcclxuJHN1Y2Nlc3MtY29sb3I6ICM3M0IyNUQ7XHJcblxyXG4kYm9keS1iYXNlOiAjRjZGOUZDO1xyXG4kY29ycG9yYXRlLWJsdWUtYmFzZTogIzQ1NjdBQztcclxuXHJcbiRjb250YWluZXItYmFzZTogd2hpdGU7XHJcbiRjb250YWluZXItYmFzZS1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoNiwgNDAsIDk4LCAwLjEpO1xyXG4kY29udGFpbmVyLWRyb3Bkb3ducy1zaGFkb3c6IDBweCA4cHggMTRweCByZ2JhKDAsIDU4LCAxNjQsIC4yKTtcclxuXHJcbiRwcmltYXJ5LXNoYWRvdzogMHB4IDQuODNweCAxNnB4IHJnYmEoNjcsIDEyMiwgMjE4LCAuNSk7XHJcbiRsaWdodC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgNTgsIDE2NCwgLjI1KTtcclxuJGZhZGVkLXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgxNjcsIDE3MywgMTgyLCAuMik7XHJcbiRsaWdodC1leHRlbmRlZC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgNTgsIDE2NCwgLjI1KTtcclxuXHJcbiRib3JkZXItcmFkaXVzLXByaW1hcnk6IDhweDtcclxuJGJvcmRlci1yYWRpdXMtc2Vjb25kYXJ5OiA2cHg7XHJcblxyXG4kZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XHJcblxyXG4kdG9hc3QtaW5mby1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiR0b2FzdC1pbmZvLXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDExMSwgMCwgMCwgLjIpO1xyXG5cclxuJHRvYXN0LWVycm9yLWNvbG9yOiAkZmF1bHQtY29sb3I7XHJcbiR0b2FzdC1lcnJvci1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxMTEsIDAsIDAsIC4yKTtcclxuXHJcbiR0b2FzdC13YXJuaW5nLWNvbG9yOiAkd2FybmluZy1jb2xvcjtcclxuJHRvYXN0LXdhcm5pbmctc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTc3LCAxMjcsIDAsIC4yKTtcclxuXHJcbiR0b2FzdC1zdWNjZXNzLWNvbG9yOiAkc3VjY2Vzcy1jb2xvcjtcclxuJHRvYXN0LXN1Y2Nlc3Mtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMzQsIDEzMCwgMCwgLjIpO1xyXG4iLCJAaW1wb3J0IFwiLi8uLi8uLi9jb21vbi1zdHlsZXMvY29tbW9uLnNjc3NcIjtcclxuXHJcbi5sb2dpbi1ncmlkIHtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggKyAzMHB4KTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRkZWVwLWJsdWUtY29sb3I7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgIzM5NjRBRSAtMTIuMTYlLCAjMDYyODYyIDEwNC41NSUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi8uLi8uLi9hc3NldHMvaW1nL3BhdHRlcm4tYmcuc3ZnJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcblxyXG4gIC5sb2dpbi1ncmlkX2NvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC5maXZlLndpZGUuY29sdW1uIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB6LWluZGV4OiAxMDAwMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIGZvcm0ge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEzMHB4O1xyXG5cclxuICAgICAgLnVpLmNoZWNrYm94IHtcclxuICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudWkuY2hlY2tib3ggLmJveDpiZWZvcmUsXHJcbiAgICAgIC51aS5jaGVja2JveCBsYWJlbDpiZWZvcmUge1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLmFyb3JhLWNhcmQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMThweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE4cHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgJi5vdHAtY2FyZCB7XHJcbiAgICAgICAgICAuYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51aS5oZWFkZXIge1xyXG4gICAgICAgICAgY29sb3I6ICRkZWVwLWJsdWUtY29sb3I7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKCRjb2xvcjogJGRlZXAtYmx1ZS1jb2xvciwgJGFscGhhOiAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICRwcmltYXJ5LWNvbG9yLCAkYWxwaGE6IC4xNSk7XHJcblxyXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTRweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIHBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBjb2xvcjogJGRlZXAtYmx1ZS1jb2xvcjtcclxuICAgICAgICAgIG9wYWNpdHk6IC41O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnVpLmJ1dHRvbiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3IgIWltcG9ydGFudDtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmxvZ2luLWdyaWRfY29udGVudF9fdGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubG9naW4tZ3JpZF9jb250ZW50X19sb2dvIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDE2cHggMTVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgfVxyXG5cclxuICAgICAgbGFiZWwsXHJcbiAgICAgIC5maWVsZCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMzNweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubG9naW4tZ3JpZF9jb250ZW50X19wbGFjZWhvbGRlci1pbWcge1xyXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICB6LWluZGV4OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA0MDBweCk7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sb2dpbi1ncmlkX2JnLWNvbG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG5cclxuICAgIEBrZXlmcmFtZXMgZmxpY2tlckFuaW1hdGlvbiB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICA1MCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMjU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBALW8ta2V5ZnJhbWVzIGZsaWNrZXJBbmltYXRpb24ge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgNTAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjI1O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQC1tb3ota2V5ZnJhbWVzIGZsaWNrZXJBbmltYXRpb24ge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgNTAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjI1O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIGZsaWNrZXJBbmltYXRpb24ge1xyXG4gICAgICAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgNTAlIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjI1O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAxMDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFuaW1hdGUtZmxpY2tlciB7XHJcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmbGlja2VyQW5pbWF0aW9uIDRzIGluZmluaXRlO1xyXG4gICAgICAtbW96LWFuaW1hdGlvbjogZmxpY2tlckFuaW1hdGlvbiA0cyBpbmZpbml0ZTtcclxuICAgICAgLW8tYW5pbWF0aW9uOiBmbGlja2VyQW5pbWF0aW9uIDRzIGluZmluaXRlO1xyXG4gICAgICBhbmltYXRpb246IGZsaWNrZXJBbmltYXRpb24gNHMgaW5maW5pdGU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ2luLWdyaWRfcGF0dGVybiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDU1MnB4O1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxvZ2luLWdyaWRfbG9nbyB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgcmlnaHQ6IDQycHg7XHJcbiAgICAgIGJvdHRvbTogNDJweDtcclxuICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDE2MHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gcGxhY2Vob2xkZXIge1xyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICAmOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gY29sb3Itb3BhY2l0eSgkY29sb3IsICRvcGFjaXR5OiAwLjMpIHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3I7XHJcbiAgLyogVGhlIEZhbGxiYWNrICovXHJcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3IsICRvcGFjaXR5KTtcclxufVxyXG5cclxuQG1peGluIGhpZGVOdW1iZXJGaWVsZEFycm93cyB7XHJcblxyXG4gIC8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xyXG4gIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG4gIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLyogRmlyZWZveCAqL1xyXG4gIGlucHV0W3R5cGU9bnVtYmVyXSB7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1hc2stc3ZnLWRpdigkaW1nKSB7XHJcbiAgLXdlYmtpdC1tYXNrOiB1cmwoJGltZykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICBtYXNrOiB1cmwoJGltZykgbm8tcmVwZWF0IGNlbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_utils_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/utils/common */ "./src/app/shared/utils/common.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/ngx-cookie-service.js");








let LoginComponent = class LoginComponent {
    constructor(router, _fb, loginService, toastr, cookieService) {
        this.router = router;
        this._fb = _fb;
        this.loginService = loginService;
        this.toastr = toastr;
        this.cookieService = cookieService;
        this.status = false;
        this.loginForm = this._fb.group({
            username: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            rememberMe: this.status
        });
        this.passwordForm = this._fb.group({
            usernamemail: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.showLogin = true;
        this.showPassword = false;
        this.passwordFormSubmitted = false;
        this.loginLoader = false;
        this.otpLoader = false;
        this.authErr = false;
        this.showOTP = false;
        this.otpForm = this._fb.group({
            otp: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    }
    ngOnInit() {
        // this.remember();
    }
    login() {
        this.authErr = false;
        this.loginLoader = true;
        let authPayload = {
            username: this.loginForm.get("username").value,
            password: this.loginForm.get("password").value,
            rememberMe: this.loginForm.get("rememberMe").value || false,
        };
        if (this.loginForm.status == "VALID") {
            this.loginService.signin(authPayload).subscribe((res) => {
                if (res && res.status === 200) {
                    console.log("--------");
                    this.globals = Object(_shared_utils_common__WEBPACK_IMPORTED_MODULE_6__["prepareGlobals"])();
                    this.globals.setUsernamePasswordCombinationMatch(res.body.auth);
                    Object(_shared_utils_common__WEBPACK_IMPORTED_MODULE_6__["saveGlobals"])(this.globals);
                    // if(res.body.otp =="1"){
                    // this.showOTP = false;
                    // this.loginLoader = false;
                    // return this.router.navigateByUrl("/dashboard");
                    // }else{
                    // this.showOTP = true;
                    // this.loginLoader = false;
                    // }
                    this.showLogin = false;
                    this.showOTP = true;
                    this.loginLoader = false;
                }
                else {
                    this.toastr.info(`Oops! ${res.statusText}`, 'Unable to login', {
                        disableTimeOut: false,
                        progressBar: false,
                        positionClass: 'toast-bottom-right'
                    });
                    this.authErr = true;
                    this.loginForm.reset();
                    this.loginLoader = false;
                    this.showLogin = true;
                }
            }, err => {
                this.toastr.info(`Oops! Something bad happened at our end because ${err}`, 'Unable to login', {
                    disableTimeOut: false,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
                this.loginForm.reset();
                this.loginLoader = false;
                this.showLogin = true;
            });
        }
        else {
            this.showLogin = true;
            this.authErr = true;
            this.loginLoader = false;
            this.toastr.info(`Oops! Please fill in the required details.`, 'Missing Details', {
                progressBar: false,
                positionClass: 'toast-bottom-right'
            });
        }
    }
    remember() {
        this.loginService.rememberMe().subscribe((res) => {
            if (res.status == 200) {
                this.router.navigate(["/dashboard"]);
            }
        });
    } //for remember me call
    clickEvent() {
        this.status = !this.status;
    }
    verifyOTP() {
        this.otpLoader = true;
        let otpPayload = {
            otp: this.otpForm.get("otp").value,
            authStatus: true,
            username: this.loginForm.get("username").value
        };
        if (this.otpForm.status == "VALID") {
            this.loginService.verifyOTP(otpPayload).subscribe((res) => {
                if (res.status == 200) {
                    this.otpForm.reset();
                    this.otpLoader = false;
                    this.router.navigate(['/dashboard']).then(nav => {
                        console.log('nav', nav); // true if navigation is successful
                    }, err => {
                        console.log('err', err); // when there's an error
                    });
                }
                else {
                    // this.showOTP = false;
                    this.toastr.info(`Oops! ${res.body.msg}`, 'Unable to verify OTP', {
                        disableTimeOut: false,
                        progressBar: false,
                        positionClass: 'toast-bottom-right'
                    });
                    this.otpForm.reset();
                    this.otpLoader = false;
                }
            }, err => {
                $(document).ready(function () {
                    $(".login-modal").modal("hide");
                });
                this.toastr.info(`Oops! Something bad happened at our end because ${err}`, 'Unable to verify OTP', {
                    disableTimeOut: false,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
                this.otpForm.reset();
                this.otpLoader = false;
            });
        }
        else {
            this.otpLoader = false;
            this.toastr.info(`Oops! Please fill in the OTP.`, 'Empty OTP', {
                disableTimeOut: false,
                progressBar: false,
                positionClass: 'toast-bottom-right'
            });
        }
    }
    resentOtp() {
        let otpPayload = {
            username: this.loginForm.get("username").value
        };
        console.log("resentOTP", otpPayload);
        this.loginService.resentOTP(otpPayload).subscribe((result) => {
            console.log("----", result);
            if (result.type != 'error') {
                console.log(result);
                this.toastr.success(`${result.msg}`, `${result.msg}`, {
                    timeOut: 10000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
            else {
                this.toastr.error(`${result.msg}`, `${result.msg}`, {
                    timeOut: 10000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    }
    backLogin() {
        this.showLogin = true;
        this.showPassword = false;
    }
    resetPasswordForm() {
        this.showLogin = false;
        this.showPassword = true;
        this.showOTP = false;
        this.loginLoader = false;
    }
    btnSendPasswordHandler() {
        this.passwordFormSubmitted = true;
        if (this.passwordForm.invalid) {
            return;
        }
        const data = {
            email: this.gspf().usernamemail.value
        };
        this.loginService.sendPassword(data).subscribe(r => {
            this.passwordForm.reset();
            if (r.status) {
                this.toastr.success(r.message, r.message, {
                    timeOut: 10000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
            else {
                this.toastr.error(r.message, 'Error'), {
                    timeOut: 10000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                };
            }
        }, (apiError) => {
            this.toastr.error(apiError.error.message, 'Error'), {
                timeOut: 10000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
            };
        });
    }
    gspf() {
        return this.passwordForm.controls;
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _shared_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-login",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






let LoginModule = class LoginModule {
};
LoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]
    })
], LoginModule);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2016.js.map