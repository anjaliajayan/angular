function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-registration-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/point-sales-management/registration/registration.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/point-sales-management/registration/registration.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutPointSalesManagementRegistrationRegistrationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3><span class=\"update-header\">List of Registrations</span></h3>\r\n<div class=\"ui fluid container\">\r\n    <div class=\"outer-basic\">\r\n        <div class=\"outer-basicForm\">\r\n            <div class=\"ui form\">\r\n                <div class=\"user-table-list b2c-list-user-table\">\r\n                    <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='registrations'>\r\n                        <ngx-datatable-column name=\"Company Name\" prop=\"company_name\">\r\n                        </ngx-datatable-column>\r\n                        <ngx-datatable-column name=\"Address\" prop=\"company_address\">\r\n                        </ngx-datatable-column>\r\n                        <ngx-datatable-column name=\"Mobile\" prop=\"company_mobile\">\r\n                        </ngx-datatable-column>\r\n                        <ngx-datatable-column name=\"Contact Person\" prop=\"first_name\">\r\n                        </ngx-datatable-column>\r\n                        <ngx-datatable-column name=\"Action\">\r\n                            <ng-template let-value=\"value\" let-row=\"row\" ngx-datatable-cell-template>\r\n                                <a class=\"nav-link edit\" (click)=\"viewUser(row,'custom-modal-1')\" title=\"View Details\">\r\n                                    <i class=\"icon\">\r\n                    <i class=\"eye icon corporate_input__placeholder-icon cal\"></i>\r\n                                    </i>\r\n                                </a>\r\n                                &nbsp;\r\n                                <a class=\"nav-link edit\" (click)=\"deleteUser(row)\" title=\"Delete User\">\r\n                                    <i class=\"trash alternate icon corporate_input__placeholder-icon call\">\r\n                    <!-- <img src=\"./../../../../assets/icons/delete-button.png\"\r\n                      class=\"corporate_input__placeholder-icon call\" /> -->\r\n                  </i>\r\n                                </a>\r\n                            </ng-template>\r\n                        </ngx-datatable-column>\r\n                    </ngx-datatable>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <jw-modal id=\"custom-modal-1\" class=\"register-modal\">\r\n        <div class=\"ui\" *ngIf=\"showDetailModal\">\r\n            <i class=\"close icon\" (click)=\"closeModal('custom-modal-1');\"></i>\r\n            <div class=\"header title\">\r\n                <b>{{getInfo.company_name}}</b> details\r\n            </div>\r\n            <div class=\"ui fluid container\">\r\n                <div class=\"form-inner\">\r\n                    <h4 class=\"ui  header\"><span class=\"basic-header\">AGENCY DETAILS</span></h4>\r\n                    <div class=\"field\">\r\n                        <table class=\"ui celled table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Zipcode</th>\r\n                                    <th>Address</th>\r\n                                    <th>Mobile</th>\r\n                                    <th>Phone</th>\r\n                                    <th>Country</th>\r\n                                    <th>Currency</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>\r\n                                        {{getInfo.zip_code}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.company_address}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.company_mobile}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.company_phone}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.country_id}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.currency_id}}\r\n                                    </td>\r\n                            </tbody>\r\n                        </table>\r\n                        <table class=\"ui celled table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Username</th>\r\n                                    <th>Password</th>\r\n                                    <th>Designation</th>\r\n                                    <th>Email</th>\r\n                                    <th>City</th>\r\n                                    <th>Time Zone</th>\r\n                                    <th>Website</th>\r\n                                    <th>Logo</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>\r\n                                        {{getInfo.username}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.password}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.designation}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.customer_email}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.city_id}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.time_zone}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.website}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.logo}}\r\n                                    </td>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n                <div class=\"field\">\r\n                    <hr>\r\n                </div>\r\n                <div class=\"form-inner\">\r\n                    <h4 class=\"ui header cust_info_head\"><span class=\"basic-header\">CUSTOMER INFORMATION</span></h4>\r\n                    <div class=\"field\">\r\n                        <table class=\"ui celled table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>First Name</th>\r\n                                    <th>Last Name</th>\r\n                                    <th>Username</th>\r\n                                    <th>Password</th>\r\n                                    <th>Designation</th>\r\n                                    <th>Email</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td>\r\n                                        {{getInfo.first_name}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.last_name}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.username}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.password}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.designation}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.customer_email}}\r\n                                    </td>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                    <div class=\"field\">\r\n                        <table class=\"ui celled table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th></th>\r\n                                    <th>Name</th>\r\n                                    <th>Email</th>\r\n                                    <th>Phone</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr>\r\n                                    <td><span class=\"bold\">Accounts</span></td>\r\n                                    <td>\r\n                                        {{getInfo.contact_accounts_name}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.contact_accounts_email}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.contact_accounts_phone}}\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td><span class=\"bold\">Reservations/Operations</span></td>\r\n                                    <td>\r\n                                        {{getInfo.contact_operations_name}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.contact_operations_email}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.contact_operations_phone}}\r\n                                    </td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td><span class=\"bold\">Management</span></td>\r\n                                    <td>\r\n                                        {{getInfo.contact_managment_name}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.contact_managment_email}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{getInfo.contact_managment_phone}}\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"actions bookings_btn-panel\">\r\n                <div class=\"ui reset deny button\" (click)=\"closeModal('custom-modal-1');\">\r\n                    Close\r\n                </div>\r\n                <div class=\"ui primary button\">\r\n                    Create New Agent\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </jw-modal>";
    /***/
  },

  /***/
  "./src/app/layout/point-sales-management/registration/registration-routing.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/layout/point-sales-management/registration/registration-routing.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: RegistrationRoutingModule */

  /***/
  function srcAppLayoutPointSalesManagementRegistrationRegistrationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationRoutingModule", function () {
      return RegistrationRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./registration.component */
    "./src/app/layout/point-sales-management/registration/registration.component.ts");

    var routes = [{
      path: '',
      component: _registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"]
    }];

    var RegistrationRoutingModule = function RegistrationRoutingModule() {
      _classCallCheck(this, RegistrationRoutingModule);
    };

    RegistrationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegistrationRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/point-sales-management/registration/registration.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/layout/point-sales-management/registration/registration.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutPointSalesManagementRegistrationRegistrationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".update-header {\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 22px;\n  margin-left: 24px;\n}\n\n.ui.fluid.container {\n  padding: 24px !important;\n}\n\n.outer-basic {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n}\n\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n}\n\n.icon {\n  opacity: 1;\n  z-index: 100;\n}\n\n.icon .corporate_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.icon .corporate_input__placeholder-icon.cal {\n  width: 0px;\n  margin-top: 10px;\n  font-size: 13px;\n}\n\n.icon .corporate_input__placeholder-icon.call {\n  width: 15px;\n  margin-top: 10px;\n  margin-left: 7px;\n}\n\n.close.icon {\n  float: right;\n  cursor: pointer;\n}\n\n.ui.celled.table {\n  margin-bottom: 18px;\n}\n\nhr {\n  margin-top: 32px;\n}\n\n.register-modal .cust_info_head {\n  margin-top: 24px;\n}\n\n.header.title {\n  padding: 8px 24px 0px;\n  font-size: 16px;\n  line-height: 15px;\n  color: #1B1F26;\n  text-transform: capitalize;\n}\n\n.actions {\n  padding: 0px 24px;\n  text-align: right;\n  margin-bottom: 24px;\n}\n\n.actions .ui.reset.deny.button {\n  float: left;\n}\n\n.ui.table thead th,\n.ui.table .bold {\n  font-weight: 500 !important;\n}\n\n.ui.button {\n  height: auto !important;\n}\n\n@media (max-width: 1440px) {\n  .update-header {\n    margin-left: 24px;\n  }\n\n  .ui.fluid .outer-basic .outer-basicForm {\n    padding: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3BvaW50LXNhbGVzLW1hbmFnZW1lbnQvcmVnaXN0cmF0aW9uL0U6XFxCZWxhbFxccHJvamVjdHNcXHByb2R1Y3Rpb24tYnVpbGRcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxccG9pbnQtc2FsZXMtbWFuYWdlbWVudFxccmVnaXN0cmF0aW9uXFxyZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9wb2ludC1zYWxlcy1tYW5hZ2VtZW50L3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0VSOztBRERRO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0daOztBRERRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNHWjs7QURFQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURHSTtFQUNJLGdCQUFBO0FDQVI7O0FESUE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUlBLG1CQUFBO0FDSko7O0FEQ0k7RUFDSSxXQUFBO0FDQ1I7O0FES0k7O0VBRUksMkJBQUE7QUNGUjs7QURNQTtFQUNJLHVCQUFBO0FDSEo7O0FETUE7RUFDSTtJQUNJLGlCQUFBO0VDSE47O0VES0U7SUFDSSxZQUFBO0VDRk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wb2ludC1zYWxlcy1tYW5hZ2VtZW50L3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBkYXRlLWhlYWRlciB7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG59XHJcblxyXG4udWkuZmx1aWQuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDI0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpY0Zvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAuY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgJi5jYWwge1xyXG4gICAgICAgICAgICB3aWR0aDogMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuY2FsbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmNsb3NlLmljb24ge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udWkuY2VsbGVkLnRhYmxlIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbn1cclxuXHJcbi5yZWdpc3Rlci1tb2RhbCB7XHJcbiAgICAuY3VzdF9pbmZvX2hlYWQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5oZWFkZXIudGl0bGUge1xyXG4gICAgcGFkZGluZzogOHB4IDI0cHggMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBjb2xvcjogIzFCMUYyNjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4uYWN0aW9ucyB7XHJcbiAgICBwYWRkaW5nOiAwcHggMjRweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgLnVpLnJlc2V0LmRlbnkuYnV0dG9uIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbn1cclxuXHJcbi51aS50YWJsZSB7XHJcbiAgICB0aGVhZCB0aCxcclxuICAgIC5ib2xkIHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS5idXR0b24ge1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIC51cGRhdGUtaGVhZGVyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjRweDtcclxuICAgIH1cclxuICAgIC51aS5mbHVpZCAub3V0ZXItYmFzaWMgLm91dGVyLWJhc2ljRm9ybSB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgfVxyXG59IiwiLnVwZGF0ZS1oZWFkZXIge1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG59XG5cbi51aS5mbHVpZC5jb250YWluZXIge1xuICBwYWRkaW5nOiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5vdXRlci1iYXNpYyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ub3V0ZXItYmFzaWNGb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmljb24ge1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxMDA7XG59XG4uaWNvbiAuY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcbiAgd2lkdGg6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5pY29uIC5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsIHtcbiAgd2lkdGg6IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmljb24gLmNvcnBvcmF0ZV9pbnB1dF9fcGxhY2Vob2xkZXItaWNvbi5jYWxsIHtcbiAgd2lkdGg6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG59XG5cbi5jbG9zZS5pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi51aS5jZWxsZWQudGFibGUge1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufVxuXG5ociB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5yZWdpc3Rlci1tb2RhbCAuY3VzdF9pbmZvX2hlYWQge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4uaGVhZGVyLnRpdGxlIHtcbiAgcGFkZGluZzogOHB4IDI0cHggMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBjb2xvcjogIzFCMUYyNjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5hY3Rpb25zIHtcbiAgcGFkZGluZzogMHB4IDI0cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuLmFjdGlvbnMgLnVpLnJlc2V0LmRlbnkuYnV0dG9uIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi51aS50YWJsZSB0aGVhZCB0aCxcbi51aS50YWJsZSAuYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbn1cblxuLnVpLmJ1dHRvbiB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC51cGRhdGUtaGVhZGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcbiAgfVxuXG4gIC51aS5mbHVpZCAub3V0ZXItYmFzaWMgLm91dGVyLWJhc2ljRm9ybSB7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/layout/point-sales-management/registration/registration.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/layout/point-sales-management/registration/registration.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: RegistrationComponent */

  /***/
  function srcAppLayoutPointSalesManagementRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
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


    var src_app_shared_services_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/registration.service */
    "./src/app/shared/services/registration.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_app_layout_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/layout/_modal */
    "./src/app/layout/_modal/index.ts");

    var RegistrationComponent = /*#__PURE__*/function () {
      function RegistrationComponent(registrationService, router, toastr, modalService) {
        _classCallCheck(this, RegistrationComponent);

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
          page: 0
        };
        this.showDetailModal = false;
      }

      _createClass(RegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getList(this.filterParams);
        }
      }, {
        key: "getList",
        value: function getList(filterParams) {
          var _this = this;

          this.registrationService.getList(filterParams).subscribe(function (result) {
            if (result.status) {
              if (result.result.total > 0) {
                _this.registrations = result.result.data;
                _this.totalRegistration = result.result.total;
              } else {
                _this.toastr.info("There is no data available to display", "".concat(result.message), {
                  timeOut: 2000,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });
              }
            } else {
              _this.toastr.error("".concat(result.message), "".concat(result.message), {
                timeOut: 10000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "viewUser",
        value: function viewUser(valObj, modalId) {
          var _this2 = this;

          this.registrationService.getUser(valObj.registration_id).subscribe(function (result) {
            if (result.status) {
              if (result.result.length != 0) {
                _this2.getInfo = result.result;
                _this2.showDetailModal = true;

                _this2.modalService.open(modalId);
              } else {
                _this2.toastr.info("There is no data available", "".concat(result.message), {
                  timeOut: 2000,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });
              }
            } else {
              _this2.toastr.error("".concat(result.message), "".concat(result.message), {
                timeOut: 2000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(valObj) {
          var _this3 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(function (result) {
            if (result.value) {
              // delete record api
              _this3.registrationService.deleteUser({
                id: valObj.registration_id
              }).subscribe(function (result) {
                if (result.status) {
                  _this3.toastr.success("".concat(result.message), "".concat(result.message), {
                    timeOut: 10000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                  });

                  _this3.getList(_this3.filterParams);
                } else {
                  _this3.toastr.info("".concat(result.message), "".concat(result.message), {
                    timeOut: 10000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                  });
                }
              });
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          $(document).ready(function () {
            $('.menu .item').tab();
            $('.ui.checkbox').checkbox('attach events', '.toggle.button');
            $('.ui.dropdown').dropdown(); // $('.ui.modal')
            //   .modal('show')
            //   ;
          });
        }
      }, {
        key: "closeModal",
        value: function closeModal(id) {
          this.modalService.close(id);
        }
      }]);

      return RegistrationComponent;
    }();

    RegistrationComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: src_app_layout_modal__WEBPACK_IMPORTED_MODULE_6__["ModalService"]
      }];
    };

    RegistrationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registration',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./registration.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/point-sales-management/registration/registration.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./registration.component.scss */
      "./src/app/layout/point-sales-management/registration/registration.component.scss"))["default"]]
    })], RegistrationComponent);
    /***/
  },

  /***/
  "./src/app/layout/point-sales-management/registration/registration.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/layout/point-sales-management/registration/registration.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: RegistrationModule */

  /***/
  function srcAppLayoutPointSalesManagementRegistrationRegistrationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationModule", function () {
      return RegistrationModule;
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


    var _registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./registration.component */
    "./src/app/layout/point-sales-management/registration/registration.component.ts");
    /* harmony import */


    var _registration_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./registration-routing.module */
    "./src/app/layout/point-sales-management/registration/registration-routing.module.ts");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var _modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../_modal */
    "./src/app/layout/_modal/index.ts");
    /* harmony import */


    var src_app_access_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/access.module */
    "./src/app/access.module.ts"); // import { MomentModule } from 'ngx-moment';


    var RegistrationModule = function RegistrationModule() {
      _classCallCheck(this, RegistrationModule);
    };

    RegistrationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"]],
      imports: [_registration_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegistrationRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"], _modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"], src_app_access_module__WEBPACK_IMPORTED_MODULE_7__["ApplicationAccess"]]
    })], RegistrationModule);
    /***/
  },

  /***/
  "./src/app/shared/services/registration.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/services/registration.service.ts ***!
    \*********************************************************/

  /*! exports provided: RegistrationService */

  /***/
  function srcAppSharedServicesRegistrationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationService", function () {
      return RegistrationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var RegistrationService = /*#__PURE__*/function () {
      function RegistrationService(http) {
        _classCallCheck(this, RegistrationService);

        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverURL;
      } // Get All users role list


      _createClass(RegistrationService, [{
        key: "getList",
        value: function getList(filterData) {
          return this.http.get("".concat(this.url, "/api/registration-list"), filterData);
        } // Get User role Details

      }, {
        key: "getUser",
        value: function getUser(id) {
          return this.http.get("".concat(this.url, "/api/registration-view/").concat(id));
        } // Delete user role

      }, {
        key: "deleteUser",
        value: function deleteUser(data) {
          return this.http.post("".concat(this.url, "/api/registration-delete/"), data);
        }
      }]);

      return RegistrationService;
    }();

    RegistrationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    RegistrationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], RegistrationService);
    /***/
  }
}]);
//# sourceMappingURL=registration-registration-module-es5.js.map