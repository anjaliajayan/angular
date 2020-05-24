(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["update-profile-update-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user-role-management/update-profile/update-profile.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user-role-management/update-profile/update-profile.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui fluid container\">\r\n  <h3><span class=\"update-header\">Update Profile</span></h3>\r\n</div>\r\n<div class=\"ui fluid container\">\r\n  <div class=\"outer-basic\">\r\n    <div class=\"outer-basicForm\">\r\n      <form class=\"ui form\" [formGroup]=\"updateProfileForm\" (ngSubmit)=\"onSubmit()\">\r\n        <div class=\"form-inner\">\r\n          <!-- <h4 class=\"ui  header\"><span class=\"basic-header\">Basic Information</span></h4> -->\r\n          <div class=\"field\">\r\n            <div class=\"five fields\">\r\n              <div class=\"two wide field\">\r\n                <label>Title</label>\r\n                <select class=\"ui fluid dropdown\" formControlName=\"salute\">\r\n                  <option value=\"\" selected disabled>Select</option>\r\n                  <option *ngFor=\"let salute of saluteNames\" [selected]=\"salute==updateProfileForm.value.salute\"\r\n                    value=\"{{salute}}\">{{salute}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"four wide field\"\r\n                [ngClass]=\"{'error': ((submitted && f.first_name.errors) && f.first_name.errors.required) }\">\r\n                <label>First Name<span class=\"mandatory\">*</span></label>\r\n                <input type=\"text\" formControlName=\"first_name\" placeholder=\"First Name\">\r\n                <div *ngIf=\"first_name.invalid && (first_name.dirty || first_name.touched)\" class=\"validations\">\r\n                  <div class=\"validations\" *ngIf=\"first_name.errors?.required\">\r\n                    First Name is required\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"four wide field\"\r\n                [ngClass]=\"{'error': ((submitted && f.last_name.errors) && f.last_name.errors.required) }\">\r\n                <label>Last Name<span class=\"mandatory\">*</span></label>\r\n                <input type=\"text\" formControlName=\"last_name\" placeholder=\"Last Name\">\r\n                <div *ngIf=\"last_name.invalid && (last_name.dirty || last_name.touched)\" class=\"validations\">\r\n                  <div class=\"validations\" *ngIf=\"last_name.errors?.required\">\r\n                    Last Name is required\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"field\">\r\n            <div class=\"fields\">\r\n              <div class=\"five wide field\">\r\n                <label>Email<span class=\"mandatory\">*</span></label>\r\n                <div class=\"disabled field\">\r\n                  <input type=\"email\" formControlName=\"email\" placeholder=\"Email\" class=\"email\">\r\n                </div>\r\n              </div>\r\n              <div class=\"five wide field\"\r\n                [ngClass]=\"{'error': ((submitted && f.mobile.errors) && f.mobile.errors.required) }\">\r\n                <label>Contact Number<span class=\"mandatory\">*</span></label>\r\n                <input type=\"text\" formControlName=\"mobile\" placeholder=\"Contact number\">\r\n                <div *ngIf=\"mobile.invalid && (mobile.dirty || mobile.touched)\" class=\"validations\">\r\n                  <div class=\"validations\" *ngIf=\"mobile.errors?.pattern\">\r\n                    Contact Number must be valid\r\n                  </div>\r\n                  <div class=\"validations\" *ngIf=\"mobile.errors?.required\">\r\n                    Contact Number is required\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"field\">\r\n            <hr>\r\n          </div> -->\r\n          <div class=\"field\">\r\n            <!-- <h4 class=\"ui header\"><span class=\"basic-header\">Address Informations</span></h4> -->\r\n            <div class=\"fields\">\r\n              <div class=\"five wide field\"\r\n                [ngClass]=\"{'error': ((submitted && f.address_1.errors) && f.address_1.errors.required) }\">\r\n                <label>Address 1<span class=\"mandatory\">*</span></label>\r\n                <input type=\"text\" formControlName=\"address_1\" placeholder=\"Street Address\">\r\n                <div *ngIf=\"address_1.invalid && (address_1.dirty || address_1.touched)\" class=\"validations\">\r\n                  <div class=\"validations\" *ngIf=\"address_1.errors?.required\">\r\n                    Address is required\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Address 2</label>\r\n                <input type=\"text\" formControlName=\"address_2\" placeholder=\"Apartment Address\">\r\n              </div>\r\n              <div class=\"five wide field\"\r\n                [ngClass]=\"{'error': ((submitted && f.country_id.errors) && f.country_id.errors.required) }\">\r\n                <label>Country</label>\r\n                <select class=\"ui search dropdown\" formControlName=\"country_id\">\r\n                  <option value=\"\">Select Country </option>\r\n                  <option *ngFor=\"let option of countries; let i = index\"\r\n                    selected=\"{{(userInfo.country_id == option.Numeric_code)?'selected':''}}\"\r\n                    value=\"{{option.country_id}}\">\r\n                    {{option.country}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"field\">\r\n            <hr>\r\n          </div>\r\n          <h4 class=\"ui header\"><span class=\"basic-header\">Login Informations</span></h4> -->\r\n              <!-- </div>\r\n            <div class=\"fields\"> -->\r\n          <div class=\"field\">\r\n            <div class=\"fields\">\r\n              <div class=\"five wide field\"\r\n                [ngClass]=\"{'error': ((submitted && f.old_password.errors) && f.old_password.errors.required) }\">\r\n                <label>Old Password<span class=\"mandatory\">*</span></label>\r\n                <input type=\"password\" formControlName=\"old_password\" (keyup)=\"requiredPassword()\"\r\n                  (change)=\"requiredPassword()\" placeholder=\"Old password\">\r\n              </div>\r\n              <div class=\"five wide field\"\r\n                [ngClass]=\"{'error': ((submitted && f.password.errors) && f.password.errors.required) }\">\r\n                <label>\r\n                  New Password<span class=\"mandatory\">*</span>\r\n                  <i class=\"fa fa-exclamation-circle tooltip\">\r\n                    <span class=\"tooltiptext\">\r\n                      Password should be atleast 8 characters. Contain atleast 1 number, 1 capital letter, 1 lower case\r\n                      letter and 1 special character!\r\n                    </span>\r\n                  </i>\r\n                </label>\r\n                <input type=\"password\" name=\"password\" formControlName=\"password\" (keyup)=\"validatePassword()\"\r\n                  (change)=\"validatePassword()\" placeholder=\"New Password\">\r\n              </div>\r\n              <!-- </div>\r\n            <div class=\"fields\"> -->\r\n              <div class=\"five wide field\"\r\n                [ngClass]=\"{'error': ((submitted && f.password_confirmation.errors) && ( f.password_confirmation.errors.required || f.password_confirmation.errors.unmatched ) ) }\">\r\n                <label>Confirm Password<span class=\"mandatory\">*</span></label>\r\n                <input type=\"password\" formControlName=\"password_confirmation\" (keyup)=\"validatePassword()\"\r\n                  (change)=\"validatePassword()\" placeholder=\"Confirm Password\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"bookings_btn-panel\">\r\n            <button class=\"ui primary button\">\r\n              Update\r\n            </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/layout/user-role-management/update-profile/update-profile-routing.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/user-role-management/update-profile/update-profile-routing.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: UpdateProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfileRoutingModule", function() { return UpdateProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _update_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-profile.component */ "./src/app/layout/user-role-management/update-profile/update-profile.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: '', component: _update_profile_component__WEBPACK_IMPORTED_MODULE_1__["UpdateProfileComponent"] }
];
let UpdateProfileRoutingModule = class UpdateProfileRoutingModule {
};
UpdateProfileRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], UpdateProfileRoutingModule);



/***/ }),

/***/ "./src/app/layout/user-role-management/update-profile/update-profile.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/user-role-management/update-profile/update-profile.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".update-header {\n  display: block;\n  margin-bottom: 24px;\n  font-weight: 400 !important;\n  font-size: 20px;\n  line-height: 23px;\n  color: #4F4F4F;\n  margin: 24px;\n}\n\n.outer-basic {\n  background-color: #FFF;\n  box-shadow: 0 0px 3px rgba(60, 64, 67, 0.3), 0 4px 8px 2px rgba(60, 64, 67, 0.15);\n  border-radius: 4.96141px;\n  margin: 24px 24px 180px;\n}\n\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n}\n\n.basic-header {\n  font-family: \"Roboto\", sans-serif;\n}\n\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #E0E0E0;\n}\n\n.update_text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 15px;\n  padding-left: 10px;\n}\n\n.field input::-webkit-input-placeholder {\n  font-size: 12px;\n}\n\n.field input::-moz-placeholder {\n  font-size: 12px;\n}\n\n.field input::-ms-input-placeholder {\n  font-size: 12px;\n}\n\n.field input::placeholder {\n  font-size: 12px;\n}\n\n.dropdown .text {\n  font-size: 12px;\n}\n\n.countryListUser {\n  padding: 0px !important;\n}\n\n.validations {\n  color: red;\n  font-size: 12px;\n}\n\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20 !important;\n  margin: 0px 0px 0px;\n}\n\n.ui.form .five.wide.field, .ui.form .eight.wide.field, .ui.form .four.wide.field {\n  margin-bottom: 16px;\n}\n\ni.icon {\n  margin-top: 24px;\n}\n\n.ui.fluid .outer-basic .outer-basicForm {\n  padding: 24px 24px 70px;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n  margin-left: 8px;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 160px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 10px;\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -160px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.ui.fluid .outer-basic .outer-basicForm .ui.form .field > label {\n  color: #181B20 !important;\n}\n\n.ui.fluid.container {\n  background: none;\n}\n\n.fluid-ui {\n  padding: 24px;\n}\n\n.bookings_btn-panel {\n  position: relative;\n  top: 32px;\n  right: -24px;\n}\n\n.bookings_btn-panel button {\n  float: right;\n  margin-right: 24px;\n  margin-top: -32px;\n}\n\n.fields label {\n  padding-bottom: 8px;\n}\n\n@media (max-width: 1440px) {\n  .outer-basic {\n    width: auto;\n    margin: 24px;\n  }\n\n  .update-header {\n    margin-left: 24px;\n  }\n}\n\n@media (max-width: 1280px) {\n  .outer-basic {\n    margin: 20px;\n  }\n\n  .update-header {\n    margin-left: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3VzZXItcm9sZS1tYW5hZ2VtZW50L3VwZGF0ZS1wcm9maWxlL0U6XFxCZWxhbFxccHJvamVjdHNcXHByb2R1Y3Rpb24tYnVpbGRcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcdXNlci1yb2xlLW1hbmFnZW1lbnRcXHVwZGF0ZS1wcm9maWxlXFx1cGRhdGUtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3VzZXItcm9sZS1tYW5hZ2VtZW50L3VwZGF0ZS1wcm9maWxlL3VwZGF0ZS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksY0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0hKOztBRE1BO0VBQ0ksc0JBQUE7RUFDQSxpRkFBQTtFQUNBLHdCQUFBO0VBRUEsdUJBQUE7QUNKSjs7QURPQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDSko7O0FET0E7RUFDSSxpQ0FBQTtBQ0pKOztBRE9BO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FDSko7O0FET0E7RUFDSSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDSko7O0FET0E7RUFDSSxlQUFBO0FDSko7O0FER0E7RUFDSSxlQUFBO0FDSko7O0FER0E7RUFDSSxlQUFBO0FDSko7O0FER0E7RUFDSSxlQUFBO0FDSko7O0FET0E7RUFDSSxlQUFBO0FDSko7O0FET0E7RUFDSSx1QkFBQTtBQ0pKOztBRE9BO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUNKSjs7QURPQTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNKSjs7QURRSTtFQUNJLG1CQUFBO0FDTFI7O0FEU0E7RUFDSSxnQkFBQTtBQ05KOztBRFNBO0VBQ0ksdUJBQUE7QUNOSjs7QURVQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ1BKOztBRFVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FDUEo7O0FEVUE7RUFDSSxtQkFBQTtBQ1BKOztBRFVBO0VBQ0kseUJBQUE7QUNQSjs7QURnQkE7RUFFSSxnQkFBQTtBQ2RKOztBRDhCQTtFQUNJLGFBQUE7QUMzQko7O0FEOEJBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQzNCSjs7QUQ0Qkk7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQzFCUjs7QUQrQkk7RUFDSSxtQkFBQTtBQzVCUjs7QURnQ0E7RUFDSTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VDN0JOOztFRCtCRTtJQUNJLGlCQUFBO0VDNUJOO0FBQ0Y7O0FEK0JBO0VBQ0k7SUFDSSxZQUFBO0VDN0JOOztFRCtCRTtJQUNJLGlCQUFBO0VDNUJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvdXNlci1yb2xlLW1hbmFnZW1lbnQvdXBkYXRlLXByb2ZpbGUvdXBkYXRlLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWkuZmx1aWQuY29udGFpbmVyIHtcclxuICAgIC8vIHBhZGRpbmc6IDAgNDBweDtcclxufVxyXG5cclxuLnVwZGF0ZS1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICBjb2xvcjojNEY0RjRGO1xyXG4gICAgbWFyZ2luOiAyNHB4O1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIGJveC1zaGFkb3c6IDAgMHB4IDNweCByZ2JhKDYwLCA2NCwgNjcsIDAuMyksIDAgNHB4IDhweCAycHggcmdiYSg2MCwgNjQsIDY3LCAwLjE1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQuOTYxNDFweDtcclxuICAgIC8vIHdpZHRoOiAxMTAwcHg7XHJcbiAgICBtYXJnaW46IDI0cHggMjRweCAxODBweDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljRm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmJhc2ljLWhlYWRlciB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgI0UwRTBFMDtcclxufVxyXG5cclxuLnVwZGF0ZV90ZXh0IHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmRyb3Bkb3duIC50ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmNvdW50cnlMaXN0VXNlciB7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnZhbGlkYXRpb25zIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi51aS5mb3JtIC5maWVsZD5sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICBjb2xvcjogIzE4MUIyMCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDBweDtcclxufVxyXG5cclxuLnVpLmZvcm0ge1xyXG4gICAgLmZpdmUud2lkZS5maWVsZCwgLmVpZ2h0LndpZGUuZmllbGQsIC5mb3VyLndpZGUuZmllbGQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmkuaWNvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG59XHJcblxyXG4udWkuZmx1aWQgLm91dGVyLWJhc2ljIC5vdXRlci1iYXNpY0Zvcm0ge1xyXG4gICAgcGFkZGluZzogMjRweCAyNHB4IDcwcHg7XHJcbiAgICAvLyBtYXJnaW4tYmxvY2stZW5kOiA2MHB4O1xyXG59XHJcblxyXG4udG9vbHRpcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3R0b206IDEwMCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE2MHB4O1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLnVpLmZsdWlkIC5vdXRlci1iYXNpYyAub3V0ZXItYmFzaWNGb3JtIC51aS5mb3JtIC5maWVsZD5sYWJlbCB7XHJcbiAgICBjb2xvcjogIzE4MUIyMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vLyAuYm9va2luZ3NfYnRuLXBhbmVsIHtcclxuLy8gICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4vLyAgICAgd2lkdGg6IDExMDBweDtcclxuLy8gICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbi8vIH1cclxuXHJcbi51aS5mbHVpZC5jb250YWluZXIge1xyXG4gICAgLy8gcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgLy8gd2lkdGg6IDExMDBweDtcclxuICAgIC8vIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgLy8gLmJvb2tpbmdzX2J0bi1wYW5lbCB7XHJcbiAgICAvLyAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAvLyAgICAgcGFkZGluZzogMzJweCAwcHg7XHJcbiAgICAvLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gICAgIGJvdHRvbTogLTE0MHB4O1xyXG4gICAgLy8gICAgIHJpZ2h0OiAtNTBweDtcclxuICAgIC8vICAgICAuYnV0dG9uIHtcclxuICAgIC8vICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAvLyAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbn1cclxuXHJcbi5mbHVpZC11aXtcclxuICAgIHBhZGRpbmc6IDI0cHhcclxufVxyXG5cclxuLmJvb2tpbmdzX2J0bi1wYW5lbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDMycHg7XHJcbiAgICByaWdodDogLTI0cHg7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTMycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5maWVsZHMge1xyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIC5vdXRlci1iYXNpYyB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAyNHB4O1xyXG4gICAgfVxyXG4gICAgLnVwZGF0ZS1oZWFkZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAub3V0ZXItYmFzaWMge1xyXG4gICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgIH1cclxuICAgIC51cGRhdGUtaGVhZGVyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxufSIsIi51cGRhdGUtaGVhZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIG1hcmdpbjogMjRweDtcbn1cblxuLm91dGVyLWJhc2ljIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm94LXNoYWRvdzogMCAwcHggM3B4IHJnYmEoNjAsIDY0LCA2NywgMC4zKSwgMCA0cHggOHB4IDJweCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpO1xuICBib3JkZXItcmFkaXVzOiA0Ljk2MTQxcHg7XG4gIG1hcmdpbjogMjRweCAyNHB4IDE4MHB4O1xufVxuXG4ub3V0ZXItYmFzaWNGb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmJhc2ljLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG5ociB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNFMEUwRTA7XG59XG5cbi51cGRhdGVfdGV4dCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZHJvcGRvd24gLnRleHQge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jb3VudHJ5TGlzdFVzZXIge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnZhbGlkYXRpb25zIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udWkuZm9ybSAuZmllbGQgPiBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIGNvbG9yOiAjMTgxQjIwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMHB4IDBweCAwcHg7XG59XG5cbi51aS5mb3JtIC5maXZlLndpZGUuZmllbGQsIC51aS5mb3JtIC5laWdodC53aWRlLmZpZWxkLCAudWkuZm9ybSAuZm91ci53aWRlLmZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuaS5pY29uIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cblxuLnVpLmZsdWlkIC5vdXRlci1iYXNpYyAub3V0ZXItYmFzaWNGb3JtIHtcbiAgcGFkZGluZzogMjRweCAyNHB4IDcwcHg7XG59XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDE2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgYm90dG9tOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTYwcHg7XG59XG5cbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi51aS5mbHVpZCAub3V0ZXItYmFzaWMgLm91dGVyLWJhc2ljRm9ybSAudWkuZm9ybSAuZmllbGQgPiBsYWJlbCB7XG4gIGNvbG9yOiAjMTgxQjIwICFpbXBvcnRhbnQ7XG59XG5cbi51aS5mbHVpZC5jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uZmx1aWQtdWkge1xuICBwYWRkaW5nOiAyNHB4O1xufVxuXG4uYm9va2luZ3NfYnRuLXBhbmVsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDMycHg7XG4gIHJpZ2h0OiAtMjRweDtcbn1cbi5ib29raW5nc19idG4tcGFuZWwgYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gIG1hcmdpbi10b3A6IC0zMnB4O1xufVxuXG4uZmllbGRzIGxhYmVsIHtcbiAgcGFkZGluZy1ib3R0b206IDhweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAub3V0ZXItYmFzaWMge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogMjRweDtcbiAgfVxuXG4gIC51cGRhdGUtaGVhZGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAub3V0ZXItYmFzaWMge1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxuXG4gIC51cGRhdGUtaGVhZGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/layout/user-role-management/update-profile/update-profile.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/user-role-management/update-profile/update-profile.component.ts ***!
  \****************************************************************************************/
/*! exports provided: UpdateProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfileComponent", function() { return UpdateProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_user_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/user-role.service */ "./src/app/shared/services/user-role.service.ts");
/* harmony import */ var _shared_utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/utils/common */ "./src/app/shared/utils/common.ts");
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








let UpdateProfileComponent = class UpdateProfileComponent {
    constructor(fb, toastr, router, userRoleService, commonService) {
        this.fb = fb;
        this.toastr = toastr;
        this.router = router;
        this.userRoleService = userRoleService;
        this.commonService = commonService;
        this.submitted = false;
        this.userInfo = {};
        this.saluteNames = _shared_utils_common__WEBPACK_IMPORTED_MODULE_4__["saluteNames"];
    }
    createForm() {
        this.updateProfileForm = this.fb.group({
            salute: ['Mr.'],
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            old_password: [''],
            password: ['',],
            password_confirmation: [''],
            address_1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address_2: [''],
            country_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        }, {
        // validator: this.checkPasswords
        });
    }
    get f() { return this.updateProfileForm.controls; }
    validateEmailNotTaken(control) {
        return this.userRoleService.matchOldPassword(control.value).subscribe(resultForm => {
            console.log("---res---", resultForm);
            return resultForm ? null : { emailTaken: true };
        });
    }
    // get country list
    countryList() {
        this.commonService.getCountryList().subscribe((result) => {
            this.countries = result.countries;
        });
    }
    ngOnInit() {
        // Get country list
        this.getUserInfo();
        this.countryList();
        this.createForm();
    }
    // get current logedin user info and update profile
    getUserInfo() {
        this.userRoleService.getLogedInUser().subscribe((result) => {
            this.userInfo = result.data;
            console.log("---this.userInfo-----", this.userInfo);
            const { salute, first_name, last_name, email, address_1, address_2, country_id, mobile } = this.userInfo;
            this.updateProfileForm.patchValue({
                salute,
                first_name,
                last_name,
                email,
                address_1,
                address_2,
                country_id,
                mobile
            });
        });
    }
    //isUniqueEmail
    checkPasswords(group, userService) {
        let pass = group.get('password').value;
        let oldPass = group.get('old_password').value;
        if (oldPass != undefined && pass != undefined) {
            let confirmPass = group.get('password_confirmation').value;
            // check user old password is matched or not
            this.userRoleService.matchOldPassword(oldPass).subscribe((matchPass) => {
                console.log("---matchPass", matchPass);
            });
            return pass === confirmPass ? null : { notSame: true };
        }
        return null;
    }
    onSubmit() {
        this.submitted = true;
        if (this.updateProfileForm.invalid) {
            return;
        }
        this.userRoleService.updateLogedInUser(this.updateProfileForm.value).subscribe((result) => {
            if (result.type == 'error') {
                this.toastr.error(`${result.msg}`, `${result.msg}`, {
                    timeOut: 10000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
            else {
                this.toastr.info(`${result.msg}`, `${result.msg}`, {
                    timeOut: 10000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
                this.router.navigate(['user-role-management/list-user']);
            }
        });
    }
    get old_password() { return this.updateProfileForm.get('old_password'); }
    get password() { return this.updateProfileForm.get('password'); }
    get password_confirmation() { return this.updateProfileForm.get('password_confirmation'); }
    get first_name() { return this.updateProfileForm.get('first_name'); }
    get last_name() { return this.updateProfileForm.get('last_name'); }
    get mobile() { return this.updateProfileForm.get('mobile'); }
    get address_1() { return this.updateProfileForm.get('address_1'); }
    requiredPassword() {
        const { old_password, password, password_confirmation } = this;
        if (!old_password.dirty) {
            return;
        }
        if (old_password.value) {
            password.setErrors({ required: true });
            password_confirmation.setErrors({ required: true });
        }
        else {
            password.setErrors(null);
            password_confirmation.setErrors(null);
        }
    }
    validatePassword() {
        const { password, password_confirmation } = this;
        if (!password_confirmation.dirty) {
            return;
        }
        const hasError = password.value !== password_confirmation.value;
        if (password_confirmation.errors) {
            if (hasError) {
                password_confirmation.errors.unmatched = true;
            }
            else {
                delete password_confirmation.errors.unmatched;
                if (Object.keys(password_confirmation.errors).length === 0) {
                    password_confirmation.setErrors(null);
                }
            }
        }
        else if (hasError) {
            password_confirmation.setErrors({ unmatched: true });
        }
    }
    ngAfterViewInit() {
        $(document).ready(function () {
            $('.ui.dropdown').dropdown();
            $('.test.checkbox').checkbox('attach events', '.toggle.button');
        });
    }
};
UpdateProfileComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_shared_services_user_role_service__WEBPACK_IMPORTED_MODULE_3__["UserRoleService"] },
    { type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
];
UpdateProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./update-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user-role-management/update-profile/update-profile.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./update-profile.component.scss */ "./src/app/layout/user-role-management/update-profile/update-profile.component.scss")).default]
    })
], UpdateProfileComponent);



/***/ }),

/***/ "./src/app/layout/user-role-management/update-profile/update-profile.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/user-role-management/update-profile/update-profile.module.ts ***!
  \*************************************************************************************/
/*! exports provided: UpdateProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateProfileModule", function() { return UpdateProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _update_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-profile.component */ "./src/app/layout/user-role-management/update-profile/update-profile.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _update_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-profile-routing.module */ "./src/app/layout/user-role-management/update-profile/update-profile-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");










let UpdateProfileModule = class UpdateProfileModule {
};
UpdateProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_update_profile_component__WEBPACK_IMPORTED_MODULE_1__["UpdateProfileComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _update_profile_routing_module__WEBPACK_IMPORTED_MODULE_4__["UpdateProfileRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"]
        ]
    })
], UpdateProfileModule);



/***/ })

}]);
//# sourceMappingURL=update-profile-update-profile-module-es2016.js.map