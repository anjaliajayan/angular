function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui grid login-grid\">\r\n  <div class=\"sixteen wide column login-grid_content\">\r\n    <div class=\"ui centered container\">\r\n      <div class=\"ui one column centered grid\">\r\n        <div class=\"five wide column animated fadeIn\">\r\n\r\n          <!-- !showOTP ||  -->\r\n          <form class=\"ui form card arora-card text-center\" [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" *ngIf=\"showLogin\"> \r\n            <div class=\"content\">\r\n              <img src=\"./../../assets/img/tpconnects-logo-blue.svg\" class=\"login-grid_content__logo\" />\r\n              <div class=\"field\"\r\n                [class.error]=\"authErr || loginForm.controls['username'].errors?.required === true && loginForm.controls.username.touched\">\r\n                <input type=\"text\" name=\"username\" required formControlName=\"username\" placeholder=\"Username\">\r\n              </div>\r\n              <div class=\"field\"\r\n                [class.error]=\"authErr || loginForm.controls['password'].errors?.required === true && loginForm.controls.password.touched\">\r\n                <input type=\"password\" name=\"password\" required formControlName=\"password\" placeholder=\"Password\">\r\n              </div>\r\n              <div class=\"field\">\r\n                <div class=\"ui checkbox\">\r\n                  <input type=\"checkbox\" tabindex=\"0\" formControlName=\"rememberMe\" (click)=\"clickEvent()\"\r\n                    [ngClass]=\"status ? 'true' : 'false'\">\r\n                  <label>Remember me</label>\r\n                </div>\r\n              </div>\r\n              <button class=\"ui secondary button\" [class.loading]=\"loginLoader\" [disabled]=\"loginLoader\" type=\"submit\">Submit</button>\r\n              <div class=\"col-12 text-right\">\r\n                <span (click)=\"resetPasswordForm()\"><a>Reset Password</a></span>\r\n              </div>\r\n            </div>\r\n          </form>\r\n\r\n\r\n          <form class=\"ui form card otp-card arora-card animated fadeIn text-center\" [formGroup]=\"otpForm\"\r\n            *ngIf=\"showOTP\">\r\n            <div class=\"content\">\r\n              <img src=\"./../../assets/img/tpconnects-logo-blue.svg\" class=\"login-grid_content__logo\" />\r\n              <p class=\"ui header\">OTP Verification</p>\r\n              <p>We've sent you an email for your One-Time-Pin (OTP). Kindly Verify your OTP.</p>\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                  <div class=\"from-group\"\r\n                    [class.error]=\"otpForm.controls['otp'].errors?.required === true && otpForm.controls['otp'].touched\">\r\n                    <input type=\"password\" min=\"0\" name=\"otp\" max=\"6\" formControlName=\"otp\" placeholder=\"\"\r\n                      class=\"form-control\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <button type=\"button\" class=\"ui secondary button\" [class.loading]=\"otpLoader\" [disabled]=\"otpLoader\" (click)=\"verifyOTP()\">Verify</button>\r\n                </div>\r\n                <div class=\"col-12 text-right\">\r\n                  <span (click)=\"resentOtp()\"><a>Resent OTP</a></span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n\r\n          <form class=\"ui form card otp-card arora-card animated fadeIn text-center\" [formGroup]=\"passwordForm\" *ngIf=\"showPassword\">\r\n            <div class=\"content\">\r\n              <img src=\"./../../assets/img/tpconnects-logo-blue.svg\" class=\"login-grid_content__logo\" />\r\n              <p class=\"ui header\">Rest Password</p>\r\n              <p>Enter your username / email to get reset password instruction.</p>\r\n              <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                  <!-- <small *ngIf=\"passwordFormSubmitted && gspf.usernamemail.errors\" class=\"text-danger\">required</small> -->\r\n                  <div class=\"from-group\">\r\n                    <input type=\"text\" formControlName=\"usernamemail\" placeholder=\"\" class=\"form-control\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-12\">\r\n                  <button type=\"button\" class=\"ui secondary button\" [class.loading]=\"otpLoader\" [disabled]=\"otpLoader\" (click)=\"btnSendPasswordHandler()\">Send Password</button>\r\n                </div>\r\n                <div class=\"col-12 text-right\">\r\n                  <span (click)=\"backLogin()\"><a>Back to Login</a></span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n\r\n\r\n        </div>\r\n        <img src=\"./../../assets/img/planes-illus.svg\" class=\"login-grid_content__placeholder-img animated fadeInUp\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"ui modal login-modal\">\r\n  <i class=\"close icon\"></i>\r\n  <div class=\"header\">\r\n    Verify OTP\r\n  </div>\r\n  <div class=\"description\">\r\n\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function () {
      return LoginRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    }];

    var LoginRoutingModule = function LoginRoutingModule() {
      _classCallCheck(this, LoginRoutingModule);
    };

    LoginRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], LoginRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.component.scss":
  /*!********************************************!*\
    !*** ./src/app/login/login.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".stepper-grid {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n.stepper-grid .stepper-grid_step {\n  display: flex;\n  align-items: center;\n  opacity: 0.6;\n  cursor: pointer;\n}\n.stepper-grid .stepper-grid_step._active {\n  opacity: 1;\n  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div {\n  background-color: #062862;\n  border: 0;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div div.image {\n  background-color: white;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div:hover {\n  border: 2px solid #A6B1C3;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon label {\n  border: 0;\n  background-color: #062862;\n  color: white;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-border hr {\n  border-bottom: 2px solid #062862;\n}\n.stepper-grid .stepper-grid_step._activated {\n  opacity: 1;\n  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div {\n  background-color: #437ADA;\n  border: 0;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div div.image {\n  background-color: white;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div:hover {\n  border: 2px solid #A6B1C3;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon label {\n  border: 0;\n  background-color: #437ADA;\n  color: white;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-border hr {\n  border-bottom: 2px solid #437ADA;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div {\n  background-color: transparent;\n  border: 2px solid #A6B1C3;\n  color: white;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  border-radius: 50%;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon label {\n  width: 100px;\n  height: auto;\n  line-height: 24px;\n  text-align: center;\n  background-color: transparent;\n  border: 2px solid #A6B1C3;\n  margin-top: 15px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 600 !important;\n  font-size: 13px;\n  color: #A6B1C3;\n  border-radius: 8px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon label._last {\n  width: 150px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-border {\n  width: 100%;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-border hr {\n  margin-top: -24px;\n  width: 100%;\n  height: 2px;\n  background: none;\n  border-bottom: 2px solid #A6B1C3;\n}\n.stepper-grid-content {\n  display: none;\n}\n.stepper-grid-content._active {\n  display: block;\n}\n.login-grid {\n  height: calc(100vh + 30px);\n  overflow: hidden;\n  background-color: #062862;\n  background-color: linear-gradient(360deg, #3964AE -12.16%, #062862 104.55%);\n  background-image: url('pattern-bg.svg');\n  background-repeat: repeat;\n  background-position: center;\n}\n.login-grid .login-grid_content {\n  position: relative;\n}\n.login-grid .login-grid_content .five.wide.column {\n  position: relative;\n  z-index: 1000000;\n}\n.login-grid .login-grid_content form {\n  text-align: center;\n  margin-top: 130px;\n}\n.login-grid .login-grid_content form .ui.checkbox {\n  margin: 8px 0;\n}\n.login-grid .login-grid_content form .ui.checkbox .box:before,\n.login-grid .login-grid_content form .ui.checkbox label:before {\n  border: 2px solid #437ADA;\n}\n.login-grid .login-grid_content form.arora-card {\n  padding-left: 18px !important;\n  padding-right: 18px !important;\n}\n.login-grid .login-grid_content form.arora-card.otp-card .button {\n  margin-top: 20px;\n}\n.login-grid .login-grid_content form.arora-card .ui.header {\n  color: #062862;\n  font-weight: 600 !important;\n}\n.login-grid .login-grid_content form.arora-card p {\n  color: rgba(6, 40, 98, 0.5);\n}\n.login-grid .login-grid_content form input {\n  border: 0 !important;\n  background-color: rgba(67, 122, 218, 0.15);\n}\n.login-grid .login-grid_content form input:first-child {\n  margin-top: 14px;\n}\n.login-grid .login-grid_content form input::-webkit-input-placeholder {\n  font-weight: 400 !important;\n  text-align: left;\n  color: #062862;\n  opacity: 0.5;\n}\n.login-grid .login-grid_content form input:-moz-placeholder {\n  font-weight: 400 !important;\n  text-align: left;\n  color: #062862;\n  opacity: 0.5;\n}\n.login-grid .login-grid_content form input::-moz-placeholder {\n  font-weight: 400 !important;\n  text-align: left;\n  color: #062862;\n  opacity: 0.5;\n}\n.login-grid .login-grid_content form input:-ms-input-placeholder {\n  font-weight: 400 !important;\n  text-align: left;\n  color: #062862;\n  opacity: 0.5;\n}\n.login-grid .login-grid_content form .ui.button {\n  background-color: #437ADA !important;\n  min-width: 100% !important;\n}\n.login-grid .login-grid_content form .login-grid_content__title {\n  font-size: 28px;\n  font-weight: 300;\n}\n.login-grid .login-grid_content form .login-grid_content__logo {\n  padding: 0 16px 15px;\n  margin-bottom: 15px;\n  width: 100%;\n  height: auto;\n}\n.login-grid .login-grid_content form label,\n.login-grid .login-grid_content form .field {\n  font-weight: 400 !important;\n  text-align: left;\n  color: #A6B1C3;\n}\n.login-grid .login-grid_content form button {\n  width: 100%;\n  max-width: 133px;\n  border-radius: 50px;\n  font-weight: 300;\n}\n.login-grid .login-grid_content .login-grid_content__placeholder-img {\n  position: fixed;\n  bottom: 0px;\n  z-index: 0;\n  width: 100%;\n  max-width: calc(100% - 400px);\n  height: auto;\n}\n.login-grid .login-grid_bg-color {\n  background-color: #3867B1;\n  position: relative;\n}\n@keyframes flickerAnimation {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@-webkit-keyframes flickerAnimation {\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.25;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.login-grid .login-grid_bg-color .animate-flicker {\n  -webkit-animation: flickerAnimation 4s infinite;\n  animation: flickerAnimation 4s infinite;\n}\n.login-grid .login-grid_bg-color .login-grid_pattern {\n  width: 100%;\n  max-width: 552px;\n  display: block;\n  margin: 0 auto;\n}\n.login-grid .login-grid_bg-color .login-grid_pattern:first-child {\n  margin-top: 60px;\n}\n.login-grid .login-grid_bg-color .login-grid_logo {\n  position: absolute;\n  right: 42px;\n  bottom: 42px;\n  z-index: 10;\n  width: 100%;\n  max-width: 160px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRTpcXEJlbGFsXFxwcm9qZWN0c1xccHJvZHVjdGlvbi1idWlsZFxcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGNvbW9uLXN0eWxlc1xcc3RlcHBlci5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vRTpcXEJlbGFsXFxwcm9qZWN0c1xccHJvZHVjdGlvbi1idWlsZFxcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGNvbW9uLXN0eWxlc1xcZGVzaWduLXBhbGV0dGUuc2NzcyIsInNyYy9hcHAvbG9naW4vRTpcXEJlbGFsXFxwcm9qZWN0c1xccHJvZHVjdGlvbi1idWlsZFxcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGFwcFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9FOlxcQmVsYWxcXHByb2plY3RzXFxwcm9kdWN0aW9uLWJ1aWxkXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcY29tb24tc3R5bGVzXFxtaXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDSjtBRENJO0VBQ0UsVUFBQTtFQUNBLDBEQUFBO0FDQ047QURFUTtFQUNFLHlCRWRRO0VGZVIsU0FBQTtBQ0FWO0FERVU7RUFDRSx1QkFBQTtBQ0FaO0FER1U7RUFDRSx5QkFBQTtBQ0RaO0FES1E7RUFDRSxTQUFBO0VBQ0EseUJFNUJRO0VGNkJSLFlBQUE7QUNIVjtBRFFRO0VBQ0UsZ0NBQUE7QUNOVjtBRFdJO0VBQ0UsVUFBQTtFQUNBLDBEQUFBO0FDVE47QURZUTtFQUNFLHlCRWhETTtFRmlETixTQUFBO0FDVlY7QURZVTtFQUNFLHVCQUFBO0FDVlo7QURhVTtFQUNFLHlCQUFBO0FDWFo7QURlUTtFQUNFLFNBQUE7RUFD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b2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGVwcGVyLWdyaWQge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgLnN0ZXBwZXItZ3JpZF9zdGVwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3BhY2l0eTogLjY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJi5fYWN0aXZlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxuXHJcbiAgICAgIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIHtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRlZXAtYmx1ZS1jb2xvcjtcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuXHJcbiAgICAgICAgICBkaXYuaW1hZ2Uge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkZWVwLWJsdWUtY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtYm9yZGVyIHtcclxuICAgICAgICBociB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGRlZXAtYmx1ZS1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLl9hY3RpdmF0ZWQge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG5cclxuICAgICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24ge1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuXHJcbiAgICAgICAgICBkaXYuaW1hZ2Uge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciB7XHJcbiAgICAgICAgaHIge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXByaW1hcnk7XHJcblxyXG4gICAgICAgICYuX2xhc3Qge1xyXG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIGhyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMjRweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc3RlcHBlci1ncmlkLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICYuX2FjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuIiwiLnN0ZXBwZXItZ3JpZCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjI4NjI7XG4gIGJvcmRlcjogMDtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmUgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IGRpdi5pbWFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXY6aG92ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjQTZCMUMzO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBsYWJlbCB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2Mjg2MjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtYm9yZGVyIGhyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNjI4NjI7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzN0FEQTtcbiAgYm9yZGVyOiAwO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2YXRlZCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYgZGl2LmltYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdjpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBNkIxQzM7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGxhYmVsIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM3QURBO1xuICBjb2xvcjogd2hpdGU7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIgaHIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzQzN0FEQTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAjQTZCMUMzO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGxhYmVsIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAjQTZCMUMzO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjQTZCMUMzO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBsYWJlbC5fbGFzdCB7XG4gIHdpZHRoOiAxNTBweDtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIgaHIge1xuICBtYXJnaW4tdG9wOiAtMjRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0E2QjFDMztcbn1cblxuLnN0ZXBwZXItZ3JpZC1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zdGVwcGVyLWdyaWQtY29udGVudC5fYWN0aXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5sb2dpbi1ncmlkIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoICsgMzBweCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjI4NjI7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsICMzOTY0QUUgLTEyLjE2JSwgIzA2Mjg2MiAxMDQuNTUlKTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi8uLi8uLi9hc3NldHMvaW1nL3BhdHRlcm4tYmcuc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ubG9naW4tZ3JpZCAubG9naW4tZ3JpZF9jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxvZ2luLWdyaWQgLmxvZ2luLWdyaWRfY29udGVudCAuZml2ZS53aWRlLmNvbHVtbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTAwMDAwMDtcbn1cbi5sb2dpbi1ncmlkIC5sb2dpbi1ncmlkX2NvbnRlbnQgZm9ybSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTMwcHg7XG59XG4ubG9naW4tZ3JpZCAubG9naW4tZ3JpZF9jb250ZW50IGZvcm0gLnVpLmNoZWNrYm94IHtcbiAgbWFyZ2luOiA4cHggMDtcbn1cbi5sb2dpbi1ncmlkIC5sb2dpbi1ncmlkX2NvbnRlbnQgZm9ybSAudWkuY2hlY2tib3ggLmJveDpiZWZvcmUsXG4ubG9naW4tZ3JpZCAubG9naW4tZ3JpZF9jb250ZW50IGZvcm0gLnVpLmNoZWNrYm94IGxhYmVsOmJlZm9yZSB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM0MzdBREE7XG59XG4ubG9naW4tZ3JpZCAubG9naW4tZ3JpZF9jb250ZW50IGZvcm0uYXJvcmEtY2FyZCB7XG4gIHBhZGRpbmctbGVmdDogMThweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXJpZ2h0OiAxOHB4ICFpbXBvcnRhbnQ7XG59XG4ubG9naW4tZ3JpZCAubG9naW4tZ3JpZF9jb250ZW50IGZvcm0uYXJvcmEtY2FyZC5vdHAtY2FyZCAuYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbi5sb2dpbi1ncmlkIC5sb2dpbi1ncmlkX2NvbnRlbnQgZm9ybS5hcm9yYS1jYXJkIC51aS5oZWFkZXIge1xuICBjb2xvcjogIzA2Mjg2MjtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xufVxuLmxvZ2luLWdyaWQgLmxvZ2luLWdyaWRfY29udGVudCBmb3JtLmFyb3JhLWNhcmQgcCB7XG4gIGNvbG9yOiByZ2JhKDYsIDQwLCA5OCwgMC41KTtcbn1cbi5sb2dpbi1ncmlkIC5sb2dpbi1ncmlkX2NvbnRlbnQgZm9ybSBpbnB1dCB7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY3LCAxMjIsIDIxOCwgMC4xNSk7XG59XG4ubG9naW4tZ3JpZCAubG9naW4tZ3JpZF9jb250ZW50IGZvcm0gaW5wdXQ6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tdG9wOiAxNHB4O1xufVxuLmxvZ2luLWdyaWQgLmxvZ2luLWdyaWRfY29udGVudCBmb3JtIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzA2Mjg2MjtcbiAgb3BhY2l0eTogMC41O1xufVxuLmxvZ2luLWdyaWQgLmxvZ2luLWdyaWRfY29udGVudCBmb3JtIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMDYyODYyO1xuICBvcGFjaXR5OiAwLjU7XG59XG4ubG9naW4tZ3JpZCAubG9naW4tZ3JpZF9jb250ZW50IGZvcm0gaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjMDYyODYyO1xuICBvcGFjaXR5OiAwLjU7XG59XG4ubG9naW4tZ3JpZCAubG9naW4tZ3JpZF9jb250ZW50IGZvcm0gaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzA2Mjg2MjtcbiAgb3BhY2l0eTogMC41O1xufVxuLmxvZ2luLWdyaWQgLmxvZ2luLWdyaWRfY29udGVudCBmb3JtIC51aS5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM3QURBICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuLmxvZ2luLWdyaWQgLmxvZ2luLWdyaWRfY29udGVudCBmb3JtIC5sb2dpbi1ncmlkX2NvbnRlbnRfX3RpdGxlIHtcbiAgZm9udC1zaXplOiAyOHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmxvZ2luLWdyaWQgLmxvZ2luLWdyaWRfY29udGVudCBmb3JtIC5sb2dpbi1ncmlkX2NvbnRlbnRfX2xvZ28ge1xuICBwYWRkaW5nOiAwIDE2cHggMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cbi5sb2dpbi1ncmlkIC5sb2dpbi1ncmlkX2NvbnRlbnQgZm9ybSBsYWJlbCxcbi5sb2dpbi1ncmlkIC5sb2dpbi1ncmlkX2NvbnRlbnQgZm9ybSAuZmllbGQge1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjQTZCMUMzO1xufVxuLmxvZ2luLWdyaWQgLmxvZ2luLWdyaWRfY29udGVudCBmb3JtIGJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEzM3B4O1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuLmxvZ2luLWdyaWQgLmxvZ2luLWdyaWRfY29udGVudCAubG9naW4tZ3JpZF9jb250ZW50X19wbGFjZWhvbGRlci1pbWcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMHB4O1xuICB6LWluZGV4OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSA0MDBweCk7XG4gIGhlaWdodDogYXV0bztcbn1cbi5sb2dpbi1ncmlkIC5sb2dpbi1ncmlkX2JnLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuQGtleWZyYW1lcyBmbGlja2VyQW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwLjI1O1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkAtby1rZXlmcmFtZXMgZmxpY2tlckFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC4yNTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5ALW1vei1rZXlmcmFtZXMgZmxpY2tlckFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC4yNTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5ALXdlYmtpdC1rZXlmcmFtZXMgZmxpY2tlckFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMC4yNTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4ubG9naW4tZ3JpZCAubG9naW4tZ3JpZF9iZy1jb2xvciAuYW5pbWF0ZS1mbGlja2VyIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZsaWNrZXJBbmltYXRpb24gNHMgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiBmbGlja2VyQW5pbWF0aW9uIDRzIGluZmluaXRlO1xuICAtby1hbmltYXRpb246IGZsaWNrZXJBbmltYXRpb24gNHMgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogZmxpY2tlckFuaW1hdGlvbiA0cyBpbmZpbml0ZTtcbn1cbi5sb2dpbi1ncmlkIC5sb2dpbi1ncmlkX2JnLWNvbG9yIC5sb2dpbi1ncmlkX3BhdHRlcm4ge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA1NTJweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLmxvZ2luLWdyaWQgLmxvZ2luLWdyaWRfYmctY29sb3IgLmxvZ2luLWdyaWRfcGF0dGVybjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG59XG4ubG9naW4tZ3JpZCAubG9naW4tZ3JpZF9iZy1jb2xvciAubG9naW4tZ3JpZF9sb2dvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNDJweDtcbiAgYm90dG9tOiA0MnB4O1xuICB6LWluZGV4OiAxMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTYwcHg7XG59IiwiJHByaW1hcnktY29sb3I6ICM0MzdBREE7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNBNkIxQzM7XHJcbiRkZWVwLWJsdWUtY29sb3I6ICMwNjI4NjI7XHJcbiRsaWdodC1zbW9rZS1jb2xvcjogI2U1ZTVlNTtcclxuJHZvaWxhLWdyZWVuOiAjODRCQzZBO1xyXG4kcHVyZS13aGl0ZTogd2hpdGU7XHJcbiRmYXVsdC1jb2xvcjogI0RFNzk3OTtcclxuJHdhcm5pbmctY29sb3I6ICNFQ0MwNEU7XHJcbiRzdWNjZXNzLWNvbG9yOiAjNzNCMjVEO1xyXG5cclxuJGJvZHktYmFzZTogI2ZmZjtcclxuJGNvcnBvcmF0ZS1ibHVlLWJhc2U6ICM0NTY3QUM7XHJcblxyXG4kY29udGFpbmVyLWJhc2U6IHdoaXRlO1xyXG4kY29udGFpbmVyLWJhc2Utc2hhZG93OiAwIDBweCAzcHggcmdiYSg2MCwgNjQsIDY3LCAwLjMpLCAwIDRweCA4cHggMnB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNSk7XHJcbiRjb250YWluZXItZHJvcGRvd25zLXNoYWRvdzogMHB4IDhweCAxNHB4IHJnYmEoMCwgNTgsIDE2NCwgLjIpO1xyXG5cclxuJHByaW1hcnktc2hhZG93OiAwcHggNC44M3B4IDE2cHggcmdiYSg2NywgMTIyLCAyMTgsIC41KTtcclxuJGxpZ2h0LXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgwLCA1OCwgMTY0LCAuMjUpO1xyXG4kZmFkZWQtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDE2NywgMTczLCAxODIsIC4yKTtcclxuJGxpZ2h0LWV4dGVuZGVkLXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgwLCA1OCwgMTY0LCAuMjUpO1xyXG5cclxuJGJvcmRlci1yYWRpdXMtcHJpbWFyeTogOHB4O1xyXG4kYm9yZGVyLXJhZGl1cy1zZWNvbmRhcnk6IDZweDtcclxuXHJcbiRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiRmb250LXdlaWdodC1ub3JtYWw6IDQwMDtcclxuXHJcbiR0b2FzdC1pbmZvLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuJHRvYXN0LWluZm8tc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTExLCAwLCAwLCAuMik7XHJcblxyXG4kdG9hc3QtZXJyb3ItY29sb3I6ICRmYXVsdC1jb2xvcjtcclxuJHRvYXN0LWVycm9yLXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDExMSwgMCwgMCwgLjIpO1xyXG5cclxuJHRvYXN0LXdhcm5pbmctY29sb3I6ICR3YXJuaW5nLWNvbG9yO1xyXG4kdG9hc3Qtd2FybmluZy1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxNzcsIDEyNywgMCwgLjIpO1xyXG5cclxuJHRvYXN0LXN1Y2Nlc3MtY29sb3I6ICRzdWNjZXNzLWNvbG9yO1xyXG4kdG9hc3Qtc3VjY2Vzcy1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgzNCwgMTMwLCAwLCAuMik7XHJcbiIsIkBpbXBvcnQgXCIuLy4uLy4uL2NvbW9uLXN0eWxlcy9jb21tb24uc2Nzc1wiO1xyXG5cclxuLmxvZ2luLWdyaWQge1xyXG4gIGhlaWdodDogY2FsYygxMDB2aCArIDMwcHgpO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRlZXAtYmx1ZS1jb2xvcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjMzk2NEFFIC0xMi4xNiUsICMwNjI4NjIgMTA0LjU1JSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLy4uLy4uL2Fzc2V0cy9pbWcvcGF0dGVybi1iZy5zdmcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuXHJcbiAgLmxvZ2luLWdyaWRfY29udGVudCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLmZpdmUud2lkZS5jb2x1bW4ge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHotaW5kZXg6IDEwMDAwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMTMwcHg7XHJcblxyXG4gICAgICAudWkuY2hlY2tib3gge1xyXG4gICAgICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC51aS5jaGVja2JveCAuYm94OmJlZm9yZSxcclxuICAgICAgLnVpLmNoZWNrYm94IGxhYmVsOmJlZm9yZSB7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHByaW1hcnktY29sb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYuYXJvcmEtY2FyZCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMThweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAmLm90cC1jYXJkIHtcclxuICAgICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnVpLmhlYWRlciB7XHJcbiAgICAgICAgICBjb2xvcjogJGRlZXAtYmx1ZS1jb2xvcjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoJGNvbG9yOiAkZGVlcC1ibHVlLWNvbG9yLCAkYWxwaGE6IC41KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogJHByaW1hcnktY29sb3IsICRhbHBoYTogLjE1KTtcclxuXHJcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxNHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGluY2x1ZGUgcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIGNvbG9yOiAkZGVlcC1ibHVlLWNvbG9yO1xyXG4gICAgICAgICAgb3BhY2l0eTogLjU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudWkuYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAubG9naW4tZ3JpZF9jb250ZW50X190aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5sb2dpbi1ncmlkX2NvbnRlbnRfX2xvZ28ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTZweCAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsYWJlbCxcclxuICAgICAgLmZpZWxkIHtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEzM3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5sb2dpbi1ncmlkX2NvbnRlbnRfX3BsYWNlaG9sZGVyLWltZyB7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDQwMHB4KTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxvZ2luLWdyaWRfYmctY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcblxyXG4gICAgQGtleWZyYW1lcyBmbGlja2VyQW5pbWF0aW9uIHtcclxuICAgICAgMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDUwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMC4yNTtcclxuICAgICAgfVxyXG5cclxuICAgICAgMTAwJSB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEAtby1rZXlmcmFtZXMgZmxpY2tlckFuaW1hdGlvbiB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICA1MCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMjU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBALW1vei1rZXlmcmFtZXMgZmxpY2tlckFuaW1hdGlvbiB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICA1MCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMjU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgZmxpY2tlckFuaW1hdGlvbiB7XHJcbiAgICAgIDAlIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcblxyXG4gICAgICA1MCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMjU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDEwMCUge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYW5pbWF0ZS1mbGlja2VyIHtcclxuICAgICAgLXdlYmtpdC1hbmltYXRpb246IGZsaWNrZXJBbmltYXRpb24gNHMgaW5maW5pdGU7XHJcbiAgICAgIC1tb3otYW5pbWF0aW9uOiBmbGlja2VyQW5pbWF0aW9uIDRzIGluZmluaXRlO1xyXG4gICAgICAtby1hbmltYXRpb246IGZsaWNrZXJBbmltYXRpb24gNHMgaW5maW5pdGU7XHJcbiAgICAgIGFuaW1hdGlvbjogZmxpY2tlckFuaW1hdGlvbiA0cyBpbmZpbml0ZTtcclxuICAgIH1cclxuXHJcbiAgICAubG9naW4tZ3JpZF9wYXR0ZXJuIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogNTUycHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubG9naW4tZ3JpZF9sb2dvIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICByaWdodDogNDJweDtcclxuICAgICAgYm90dG9tOiA0MnB4O1xyXG4gICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogMTYwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBtaXhpbiBwbGFjZWhvbGRlciB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcblxyXG4gICY6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcblxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjb2xvci1vcGFjaXR5KCRjb2xvciwgJG9wYWNpdHk6IDAuMykge1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvcjtcclxuICAvKiBUaGUgRmFsbGJhY2sgKi9cclxuICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvciwgJG9wYWNpdHkpO1xyXG59XHJcblxyXG5AbWl4aW4gaGlkZU51bWJlckZpZWxkQXJyb3dzIHtcclxuXHJcbiAgLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXHJcbiAgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbiAgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAvKiBGaXJlZm94ICovXHJcbiAgaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWFzay1zdmctZGl2KCRpbWcpIHtcclxuICAtd2Via2l0LW1hc2s6IHVybCgkaW1nKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gIG1hc2s6IHVybCgkaW1nKSBuby1yZXBlYXQgY2VudGVyO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared_services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../shared/services/login.service */
    "./src/app/shared/services/login.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _shared_utils_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/utils/common */
    "./src/app/shared/utils/common.ts");
    /* harmony import */


    var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-cookie-service */
    "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(router, _fb, loginService, toastr, cookieService) {
        _classCallCheck(this, LoginComponent);

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

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// this.remember();
        }
      }, {
        key: "login",
        value: function login() {
          var _this = this;

          this.authErr = false;
          this.loginLoader = true;
          var authPayload = {
            username: this.loginForm.get("username").value,
            password: this.loginForm.get("password").value,
            rememberMe: this.loginForm.get("rememberMe").value || false
          };

          if (this.loginForm.status == "VALID") {
            this.loginService.signin(authPayload).subscribe(function (res) {
              if (res && res.status === 200) {
                console.log("--------");
                _this.globals = Object(_shared_utils_common__WEBPACK_IMPORTED_MODULE_6__["prepareGlobals"])();

                _this.globals.setUsernamePasswordCombinationMatch(res.body.auth);

                Object(_shared_utils_common__WEBPACK_IMPORTED_MODULE_6__["saveGlobals"])(_this.globals); // if(res.body.otp =="1"){
                // this.showOTP = false;
                // this.loginLoader = false;
                // return this.router.navigateByUrl("/dashboard");
                // }else{
                // this.showOTP = true;
                // this.loginLoader = false;
                // }

                _this.showLogin = false;
                _this.showOTP = true;
                _this.loginLoader = false;
              } else {
                _this.toastr.info("Oops! ".concat(res.statusText), 'Unable to login', {
                  disableTimeOut: false,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });

                _this.authErr = true;

                _this.loginForm.reset();

                _this.loginLoader = false;
                _this.showLogin = true;
              }
            }, function (err) {
              _this.loginForm.reset();

              _this.loginLoader = false;
              _this.showLogin = true;
            });
          } else {
            this.showLogin = true;
            this.authErr = true;
            this.loginLoader = false;
            this.toastr.info("Oops! Please fill in the required details.", 'Missing Details', {
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });
          }
        }
      }, {
        key: "remember",
        value: function remember() {
          var _this2 = this;

          this.loginService.rememberMe().subscribe(function (res) {
            if (res.status == 200) {
              _this2.router.navigate(["/dashboard"]);
            }
          });
        } //for remember me call

      }, {
        key: "clickEvent",
        value: function clickEvent() {
          this.status = !this.status;
        }
      }, {
        key: "verifyOTP",
        value: function verifyOTP() {
          var _this3 = this;

          this.otpLoader = true;
          var otpPayload = {
            otp: this.otpForm.get("otp").value,
            authStatus: true,
            username: this.loginForm.get("username").value
          };

          if (this.otpForm.status == "VALID") {
            this.loginService.verifyOTP(otpPayload).subscribe(function (res) {
              if (res.status == 200) {
                _this3.otpForm.reset();

                _this3.otpLoader = false;

                _this3.router.navigate(['/dashboard']).then(function (nav) {
                  console.log('nav', nav); // true if navigation is successful
                }, function (err) {
                  console.log('err', err); // when there's an error
                });
              } else {
                // this.showOTP = false;
                _this3.toastr.info("Oops! ".concat(res.body.msg), 'Unable to verify OTP', {
                  disableTimeOut: false,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });

                _this3.otpForm.reset();

                _this3.otpLoader = false;
              }
            }, function (err) {
              $(document).ready(function () {
                $(".login-modal").modal("hide");
              });

              _this3.toastr.info("Oops! Something bad happened at our end because ".concat(err), 'Unable to verify OTP', {
                disableTimeOut: false,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });

              _this3.otpForm.reset();

              _this3.otpLoader = false;
            });
          } else {
            this.otpLoader = false;
            this.toastr.info("Oops! Please fill in the OTP.", 'Empty OTP', {
              disableTimeOut: false,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });
          }
        }
      }, {
        key: "resentOtp",
        value: function resentOtp() {
          var _this4 = this;

          var otpPayload = {
            username: this.loginForm.get("username").value
          };
          console.log("resentOTP", otpPayload);
          this.loginService.resentOTP(otpPayload).subscribe(function (result) {
            console.log("----", result);

            if (result.type != 'error') {
              console.log(result);

              _this4.toastr.success("".concat(result.msg), "".concat(result.msg), {
                timeOut: 10000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            } else {
              _this4.toastr.error("".concat(result.msg), "".concat(result.msg), {
                timeOut: 10000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "backLogin",
        value: function backLogin() {
          this.showLogin = true;
          this.showPassword = false;
        }
      }, {
        key: "resetPasswordForm",
        value: function resetPasswordForm() {
          this.showLogin = false;
          this.showPassword = true;
          this.showOTP = false;
          this.loginLoader = false;
        }
      }, {
        key: "btnSendPasswordHandler",
        value: function btnSendPasswordHandler() {
          var _this5 = this;

          this.passwordFormSubmitted = true;

          if (this.passwordForm.invalid) {
            return;
          }

          var data = {
            email: this.gspf().usernamemail.value
          };
          this.loginService.sendPassword(data).subscribe(function (r) {
            _this5.passwordForm.reset();

            if (r.status) {
              _this5.toastr.success(r.message, r.message, {
                timeOut: 10000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            } else {
              _this5.toastr.error(r.message, 'Error'), {
                timeOut: 10000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              };
            }
          }, function (apiError) {
            _this5.toastr.error(apiError.error.message, 'Error'), {
              timeOut: 10000,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            };
          });
        }
      }, {
        key: "gspf",
        value: function gspf() {
          return this.passwordForm.controls;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _shared_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
      }];
    };

    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-login",
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return LoginModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginModule = function LoginModule() {
      _classCallCheck(this, LoginModule);
    };

    LoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
    })], LoginModule);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map