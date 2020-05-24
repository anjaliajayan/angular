(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-registration-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/point-sales-management/registration/registration.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/point-sales-management/registration/registration.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3><span class=\"update-header\">List of Registrations</span></h3>\r\n<div class=\"ui fluid container\">\r\n    <div class=\"outer-basic\">\r\n        <div class=\"outer-basicForm\">\r\n            <div class=\"ui form\">\r\n                <div class=\"user-table-list b2c-list-user-table\">\r\n                    <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='registrations'>\r\n                        <ngx-datatable-column name=\"Company Name\" prop=\"company_name\">\r\n                        </ngx-datatable-column>\r\n                        <ngx-datatable-column name=\"Address\" prop=\"company_address\">\r\n                        </ngx-datatable-column>\r\n                        <ngx-datatable-column name=\"Mobile\" prop=\"company_mobile\">\r\n                        </ngx-datatable-column>\r\n                        <ngx-datatable-column name=\"Contact Person\" prop=\"first_name\">\r\n                        </ngx-datatable-column>\r\n                        <ngx-datatable-column name=\"Action\">\r\n                            <ng-template let-value=\"value\" let-row=\"row\" ngx-datatable-cell-template>\r\n                                <a class=\"nav-link edit\" (click)=\"viewUser(row,'custom-modal-1')\" title=\"View Details\">\r\n                                    <i class=\"icon\">\r\n                    <i class=\"eye icon corporate_input__placeholder-icon cal\"></i>\r\n                                    </i>\r\n                                </a>\r\n                                &nbsp;\r\n                                <a class=\"nav-link edit\" (click)=\"deleteUser(row)\" title=\"Delete User\">\r\n                                    <i class=\"trash alternate icon corporate_input__placeholder-icon call\">\r\n                    <!-- <img src=\"./../../../../assets/icons/delete-button.png\"\r\n                      class=\"corporate_input__placeholder-icon call\" /> -->\r\n                  </i>\r\n                                </a>\r\n                            </ng-template>\r\n                        </ngx-datatable-column>\r\n                    </ngx-datatable>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <jw-modal id=\"custom-modal-1\" class=\"register-modal\">\r\n        <div class=\"ui\" *ngIf=\"showDetailModal\">\r\n            <i class=\"close icon\" (click)=\"closeModal('custom-modal-1');\"></i>\r\n            <div class=\"header title\">\r\n                <b>{{getInfo.company_name}}</b> details\r\n            </div>\r\n            <div class=\"ui fluid container\">\r\n                <div class=\"form-inner\">\r\n                    <h4 class=\"ui  header\"><span class=\"basic-header\">AGENCY DETAILS</span></h4>\r\n                    <div class=\"field\">\r\n                        <table class=\"ui celled table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Zipcode</th>\r\n                                    <th>Address</th>\r\n                                    <th>Mobile</th>\r\n                                    <th>Phone</th>\r\n                                    <th>Country</th>\r\n                                    <th>Currency</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>\r\n                                        {{getInfo.zip_code}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.company_address}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.company_mobile}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.company_phone}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.country_id}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.currency_id}}\r\n                                    </td>\r\n                            </tbody>\r\n                        </table>\r\n                        <table class=\"ui celled table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Username</th>\r\n                                    <th>Password</th>\r\n                                    <th>Designation</th>\r\n                                    <th>Email</th>\r\n                                    <th>City</th>\r\n                                    <th>Time Zone</th>\r\n                                    <th>Website</th>\r\n                                    <th>Logo</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>\r\n                                        {{getInfo.username}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.password}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.designation}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.customer_email}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.city_id}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.time_zone}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.website}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.logo}}\r\n                                    </td>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"field\">\r\n                    <hr>\r\n                </div>\r\n                <div class=\"form-inner\">\r\n                    <h4 class=\"ui header cust_info_head\"><span class=\"basic-header\">CUSTOMER INFORMATION</span></h4>\r\n                    <div class=\"field\">\r\n                        <table class=\"ui celled table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>First Name</th>\r\n                                    <th>Last Name</th>\r\n                                    <th>Username</th>\r\n                                    <th>Password</th>\r\n                                    <th>Designation</th>\r\n                                    <th>Email</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>\r\n                                        {{getInfo.first_name}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.last_name}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.username}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.password}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.designation}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.customer_email}}\r\n                                    </td>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                    <div class=\"field\">\r\n                        <table class=\"ui celled table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th></th>\r\n                                    <th>Name</th>\r\n                                    <th>Email</th>\r\n                                    <th>Phone</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td><span class=\"bold\">Accounts</span></td>\r\n                                    <td>\r\n                                        {{getInfo.contact_accounts_name}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.contact_accounts_email}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.contact_accounts_phone}}\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td><span class=\"bold\">Reservations/Operations</span></td>\r\n                                    <td>\r\n                                        {{getInfo.contact_operations_name}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.contact_operations_email}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.contact_operations_phone}}\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td><span class=\"bold\">Management</span></td>\r\n                                    <td>\r\n                                        {{getInfo.contact_managment_name}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.contact_managment_email}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.contact_managment_phone}}\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"actions bookings_btn-panel\">\r\n                <div class=\"ui reset deny button\" (click)=\"closeModal('custom-modal-1');\">\r\n                    Close\r\n                </div>\r\n                <div class=\"ui primary button\">\r\n                    Create New Agent\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </jw-modal>");

/***/ }),

/***/ "./src/app/layout/point-sales-management/registration/registration-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/point-sales-management/registration/registration-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: RegistrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationRoutingModule", function() { return RegistrationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration.component */ "./src/app/layout/point-sales-management/registration/registration.component.ts");




const routes = [
    { path: '', component: _registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"] }
];
let RegistrationRoutingModule = class RegistrationRoutingModule {
};
RegistrationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RegistrationRoutingModule);



/***/ }),

/***/ "./src/app/layout/point-sales-management/registration/registration.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/point-sales-management/registration/registration.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".update-header {\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n  margin-left: 24px;\n}\n\n.ui.fluid.container {\n  padding: 24px !important;\n}\n\n.outer-basic {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n}\n\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n}\n\n.icon {\n  opacity: 1;\n  z-index: 100;\n}\n\n.icon .corporate_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.icon .corporate_input__placeholder-icon.cal {\n  width: 0px;\n  margin-top: 10px;\n  font-size: 13px;\n}\n\n.icon .corporate_input__placeholder-icon.call {\n  width: 15px;\n  margin-top: 10px;\n  margin-left: 7px;\n}\n\n.close.icon {\n  float: right;\n  cursor: pointer;\n}\n\n.ui.celled.table {\n  margin-bottom: 18px;\n}\n\nhr {\n  margin-top: 32px;\n}\n\n.register-modal .cust_info_head {\n  margin-top: 24px;\n}\n\n.header.title {\n  padding: 8px 24px 0px;\n  font-size: 16px;\n  line-height: 15px;\n  color: #1B1F26;\n  text-transform: capitalize;\n}\n\n.actions {\n  padding: 0px 24px;\n  text-align: right;\n  margin-bottom: 24px;\n}\n\n.actions .ui.reset.deny.button {\n  float: left;\n}\n\n.ui.table thead th,\n.ui.table .bold {\n  font-weight: 600 !important;\n}\n\n@media (max-width: 1440px) {\n  .update-header {\n    margin-left: 24px;\n  }\n\n  .ui.fluid .outer-basic .outer-basicForm {\n    padding: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BvaW50LXNhbGVzLW1hbmFnZW1lbnQvcmVnaXN0cmF0aW9uL0U6XFxCZWxhbFxccHJvamVjdHNcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxccG9pbnQtc2FsZXMtbWFuYWdlbWVudFxccmVnaXN0cmF0aW9uXFxyZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9wb2ludC1zYWxlcy1tYW5hZ2VtZW50L3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0VSOztBRERRO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0daOztBRERRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNHWjs7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURHSTtFQUNJLGdCQUFBO0FDQVI7O0FESUE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUlBLG1CQUFBO0FDSko7O0FEQ0k7RUFDSSxXQUFBO0FDQ1I7O0FES0k7O0VBRUksMkJBQUE7QUNGUjs7QURNQTtFQUNJO0lBQ0ksaUJBQUE7RUNITjs7RURLRTtJQUNJLFlBQUE7RUNGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3BvaW50LXNhbGVzLW1hbmFnZW1lbnQvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGRhdGUtaGVhZGVyIHtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbn1cclxuXHJcbi51aS5mbHVpZC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMjRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljRm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIC5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICAmLmNhbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5jYWxsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY2xvc2UuaWNvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi51aS5jZWxsZWQudGFibGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxufVxyXG5cclxuaHIge1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxufVxyXG5cclxuLnJlZ2lzdGVyLW1vZGFsIHtcclxuICAgIC5jdXN0X2luZm9faGVhZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgIH1cclxufVxyXG5cclxuLmhlYWRlci50aXRsZSB7XHJcbiAgICBwYWRkaW5nOiA4cHggMjRweCAwcHg7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIGNvbG9yOiAjMUIxRjI2O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbi5hY3Rpb25zIHtcclxuICAgIHBhZGRpbmc6IDBweCAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAudWkucmVzZXQuZGVueS5idXR0b24ge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxufVxyXG5cclxuLnVpLnRhYmxlIHtcclxuICAgIHRoZWFkIHRoLFxyXG4gICAgLmJvbGQge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgLnVwZGF0ZS1oZWFkZXIge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG4gICAgfVxyXG4gICAgLnVpLmZsdWlkIC5vdXRlci1iYXNpYyAub3V0ZXItYmFzaWNGb3JtIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbn0iLCIudXBkYXRlLWhlYWRlciB7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW4tbGVmdDogMjRweDtcbn1cblxuLnVpLmZsdWlkLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDI0cHggIWltcG9ydGFudDtcbn1cblxuLm91dGVyLWJhc2ljIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm94LXNoYWRvdzogM3B4IDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5vdXRlci1iYXNpY0Zvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uaWNvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5pY29uIC5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xuICB3aWR0aDogMjRweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLmljb24gLmNvcnBvcmF0ZV9pbnB1dF9fcGxhY2Vob2xkZXItaWNvbi5jYWwge1xuICB3aWR0aDogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uaWNvbiAuY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbGwge1xuICB3aWR0aDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbn1cblxuLmNsb3NlLmljb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnVpLmNlbGxlZC50YWJsZSB7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG59XG5cbmhyIHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cblxuLnJlZ2lzdGVyLW1vZGFsIC5jdXN0X2luZm9faGVhZCB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbi5oZWFkZXIudGl0bGUge1xuICBwYWRkaW5nOiA4cHggMjRweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIGNvbG9yOiAjMUIxRjI2O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmFjdGlvbnMge1xuICBwYWRkaW5nOiAwcHggMjRweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4uYWN0aW9ucyAudWkucmVzZXQuZGVueS5idXR0b24ge1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnVpLnRhYmxlIHRoZWFkIHRoLFxuLnVpLnRhYmxlIC5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC51cGRhdGUtaGVhZGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcbiAgfVxuXG4gIC51aS5mbHVpZCAub3V0ZXItYmFzaWMgLm91dGVyLWJhc2ljRm9ybSB7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/point-sales-management/registration/registration.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/point-sales-management/registration/registration.component.ts ***!
  \**************************************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/registration.service */ "./src/app/shared/services/registration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_layout_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/layout/_modal */ "./src/app/layout/_modal/index.ts");







let RegistrationComponent = class RegistrationComponent {
    constructor(registrationService, router, toastr, modalService) {
        this.registrationService = registrationService;
        this.router = router;
        this.toastr = toastr;
        this.modalService = modalService;
        this.limit = 15;
        this.pageIndex = 1;
        this.registrations = [];
        this.totalRegistration = 0;
        this.pages = 0;
        this.filterParams = {
            page: 0,
        };
        this.showDetailModal = false;
    }
    ngOnInit() {
        this.getList(this.filterParams);
    }
    getList(filterParams) {
        this.registrationService.getList(filterParams).subscribe((result) => {
            if (result.status) {
                if (result.result.total > 0) {
                    this.registrations = result.result.data;
                    this.totalRegistration = result.result.total;
                }
                else {
                    this.toastr.info(`There is no data available to display`, `${result.message}`, {
                        timeOut: 2000,
                        progressBar: false,
                        positionClass: 'toast-bottom-right'
                    });
                }
            }
            else {
                this.toastr.error(`${result.message}`, `${result.message}`, {
                    timeOut: 10000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    }
    viewUser(valObj, modalId) {
        this.registrationService.getUser(valObj.registration_id).subscribe((result) => {
            if (result.status) {
                if (result.result.length != 0) {
                    this.getInfo = result.result;
                    this.showDetailModal = true;
                    this.modalService.open(modalId);
                }
                else {
                    this.toastr.info(`There is no data available`, `${result.message}`, {
                        timeOut: 2000,
                        progressBar: false,
                        positionClass: 'toast-bottom-right'
                    });
                }
            }
            else {
                this.toastr.error(`${result.message}`, `${result.message}`, {
                    timeOut: 2000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    }
    deleteUser(valObj) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                // delete record api
                this.registrationService.deleteUser({ id: valObj.registration_id }).subscribe((result) => {
                    if (result.status) {
                        this.toastr.success(`${result.message}`, `${result.message}`, {
                            timeOut: 10000,
                            progressBar: false,
                            positionClass: 'toast-bottom-right'
                        });
                        this.getList(this.filterParams);
                    }
                    else {
                        this.toastr.info(`${result.message}`, `${result.message}`, {
                            timeOut: 10000,
                            progressBar: false,
                            positionClass: 'toast-bottom-right'
                        });
                    }
                });
            }
        });
    }
    ngAfterViewInit() {
        $(document).ready(function () {
            $('.menu .item').tab();
            $('.ui.checkbox').checkbox('attach events', '.toggle.button');
            $('.ui.dropdown').dropdown();
            // $('.ui.modal')
            //   .modal('show')
            //   ;
        });
    }
    closeModal(id) {
        this.modalService.close(id);
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: src_app_shared_services_registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: src_app_layout_modal__WEBPACK_IMPORTED_MODULE_6__["ModalService"] }
];
RegistrationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/point-sales-management/registration/registration.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./registration.component.scss */ "./src/app/layout/point-sales-management/registration/registration.component.scss")).default]
    })
], RegistrationComponent);



/***/ }),

/***/ "./src/app/layout/point-sales-management/registration/registration.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/point-sales-management/registration/registration.module.ts ***!
  \***********************************************************************************/
/*! exports provided: RegistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationModule", function() { return RegistrationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration.component */ "./src/app/layout/point-sales-management/registration/registration.component.ts");
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration-routing.module */ "./src/app/layout/point-sales-management/registration/registration-routing.module.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-moment */ "./node_modules/ngx-moment/__ivy_ngcc__/fesm2015/ngx-moment.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_modal */ "./src/app/layout/_modal/index.ts");
/* harmony import */ var src_app_access_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/access.module */ "./src/app/access.module.ts");









let RegistrationModule = class RegistrationModule {
};
RegistrationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"]],
        imports: [
            _registration_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegistrationRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"],
            ngx_moment__WEBPACK_IMPORTED_MODULE_6__["MomentModule"],
            _modal__WEBPACK_IMPORTED_MODULE_7__["ModalModule"],
            src_app_access_module__WEBPACK_IMPORTED_MODULE_8__["ApplicationAccess"]
        ]
    })
], RegistrationModule);



/***/ }),

/***/ "./src/app/shared/services/registration.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/registration.service.ts ***!
  \*********************************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




let RegistrationService = class RegistrationService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverURL;
    }
    // Get All users role list
    getList(filterData) {
        return this.http.get(`${this.url}/api/registration-list`, filterData);
    }
    // Get User role Details
    getUser(id) {
        return this.http.get(`${this.url}/api/registration-view/${id}`);
    }
    // Delete user role
    deleteUser(data) {
        return this.http.post(`${this.url}/api/registration-delete/`, data);
    }
};
RegistrationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
RegistrationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], RegistrationService);



/***/ })

}]);
//# sourceMappingURL=registration-registration-module-es2016.js.map