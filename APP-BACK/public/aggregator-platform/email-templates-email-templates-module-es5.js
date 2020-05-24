function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["email-templates-email-templates-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/email-templates/email-templates.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/email-templates/email-templates.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSetupConfigurationEmailTemplatesEmailTemplatesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3><span class=\"update-header\">Email templates</span></h3>\r\n<div class=\"ui fluid container\">\r\n    <div class=\"outer-basic result-block\">\r\n        <div class=\"outer-basicForm\">\r\n            <div class=\"ui form\">\r\n                <div class=\"email-list b2c-list-user-table  user-table-list\">\r\n                    <ngx-datatable #table class=\"table\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]=\"NewListOfEmails\" [sortType]=\"'multi'\" [reorderable]=\"true\" [sorts]=\"[{ prop: 'id', dir: 'desc' }]\">\r\n                        <ngx-datatable-column name=\"Name\" prop=\"email_template_name\">\r\n                        </ngx-datatable-column>\r\n                        <ngx-datatable-column name=\"Function\" prop=\"email_template_function\">\r\n                        </ngx-datatable-column>\r\n                        <ngx-datatable-column name=\"Created Date\" prop=\"created_at\">\r\n                            <ng-template ngx-datatable-cell-template let-value=\"value\">{{value | date: 'dd/MM/yyyy'}}\r\n                            </ng-template>\r\n                        </ngx-datatable-column>\r\n                        <ngx-datatable-column name=\"status\" prop=\"status\">\r\n                            <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n                                <span *ngIf=\"value == true\" title=\"Active\">\r\n                                    <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>\r\n                                    <!-- <i class=\"icon\">\r\n                                        <img src=\"./../../../../../assets/icons/checkmark.png\" class=\"bookings_input__placeholder-icon cal\" />\r\n                                    </i> -->\r\n                                </span>\r\n                                <span *ngIf=\"value != true\" title=\"Inactive\">\r\n                                    <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                                    <!-- <i class=\"icon\">\r\n                                        <img src=\"./../../../../../assets/icons/crossX.png\" class=\"bookings_input__placeholder-icon cal\" />\r\n                                    </i> -->\r\n                                </span>\r\n                            </ng-template>\r\n                        </ngx-datatable-column>\r\n                        <ngx-datatable-column name=\"Action\" prop=\"email_template_id\">\r\n                            <ng-template let-value=\"value\" ngx-datatable-cell-template>\r\n                                <a><i class=\"eye icon eye-icon\" title=\"View Template\" (click)=\"editTemplate(value, 'custom-modal-1')\"></i></a>\r\n                            </ng-template>\r\n                        </ngx-datatable-column>\r\n                    </ngx-datatable>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <jw-modal id=\"custom-modal-1\" class=\"emailTemplateModal\">\r\n        <div class=\"ui\" *ngIf=\"showDetailModal\">\r\n            <i class=\"close icon\" (click)=\"closeModal('custom-modal-1')\"></i>\r\n            <div class=\"header\">\r\n                Email Template Form\r\n            </div>\r\n            <div class=\"ui container\">\r\n                <div class=\"form-inner\">\r\n                    <form class=\"ui form\" [formGroup]=\"templateForm\" (ngSubmit)=\"updateTemplate('custom-modal-1')\">\r\n                        <div class=\"form-inner\">\r\n                            <div class=\"fields\">\r\n                                <div class=\"field\" [ngClass]=\"{\r\n                                        error:\r\n                                        submitted &&\r\n                                        f.email_template_name.errors &&\r\n                                        f.email_template_name.errors.required\r\n                                    }\">\r\n                                    <label>Email Template Name</label>\r\n                                    <input type=\"text\" name=\"email_template_name\" formControlName=\"email_template_name\" placeholder=\"Email Template Name\" />\r\n                                </div>\r\n                                <div class=\"field ckEditor-area\">\r\n                                    <ckeditor data=\"\" formControlName=\"email_template_description\"></ckeditor>\r\n                                    <div *ngIf=\"submitted &&  f.email_template_description.errors && f.email_template_description.errors.required\">\r\n                                        Please enter template description\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"fields\">\r\n                                <div class=\"bookings_btn-panel\">\r\n                                    <button class=\"ui primary  button\">\r\n                                        Update\r\n                                    </button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </jw-modal>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/layout/setup-configuration/email-templates/email-templates-routing.module.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/layout/setup-configuration/email-templates/email-templates-routing.module.ts ***!
    \**********************************************************************************************/

  /*! exports provided: EmailTemplatesRoutingModule */

  /***/
  function srcAppLayoutSetupConfigurationEmailTemplatesEmailTemplatesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailTemplatesRoutingModule", function () {
      return EmailTemplatesRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _email_templates_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./email-templates.component */
    "./src/app/layout/setup-configuration/email-templates/email-templates.component.ts");
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
      component: _email_templates_component__WEBPACK_IMPORTED_MODULE_1__["EmailTemplatesComponent"]
    }];

    var EmailTemplatesRoutingModule = function EmailTemplatesRoutingModule() {
      _classCallCheck(this, EmailTemplatesRoutingModule);
    };

    EmailTemplatesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], EmailTemplatesRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/setup-configuration/email-templates/email-templates.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/layout/setup-configuration/email-templates/email-templates.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSetupConfigurationEmailTemplatesEmailTemplatesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".update-header {\n  margin-left: 24px;\n  font-style: normal;\n  font-weight: 400 !important;\n  font-size: 20px;\n  line-height: 23px;\n  color: #4F4F4F;\n}\n\n.ui.fluid.container {\n  padding: 25px;\n}\n\n.outer-basic {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n}\n\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n  padding: 30px 15px;\n}\n\n.icon {\n  opacity: 1;\n  z-index: 100;\n}\n\n.icon .bookings_input__placeholder-icon {\n  width: 24px;\n}\n\n.icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n}\n\n.icon .bookings_input__placeholder-icon.call {\n  width: 10px;\n  margin-top: 10px;\n}\n\n.close.icon {\n  float: right;\n  cursor: pointer;\n}\n\n.form-inner .ui.form .fields {\n  display: block;\n}\n\n.form-inner .ui.form .fields .field {\n  padding: 1em 0em;\n}\n\n.form-inner .ui.form .fields input {\n  height: 38px;\n  border: none !important;\n  border: 1px solid rgba(6, 40, 98, 0.2) !important;\n  background-color: #fff;\n  border-radius: 5.12155px !important;\n  color: rgba(6, 40, 98, 0.9) !important;\n}\n\n.form-inner .ui.form .fields input::-webkit-input-placeholder {\n  color: rgba(6, 40, 98, 0.4);\n}\n\n.form-inner .ui.form .fields input::-moz-placeholder {\n  color: rgba(6, 40, 98, 0.4);\n}\n\n.form-inner .ui.form .fields input::-ms-input-placeholder {\n  color: rgba(6, 40, 98, 0.4);\n}\n\n.form-inner .ui.form .fields input::placeholder {\n  color: rgba(6, 40, 98, 0.4);\n}\n\n.form-inner .ui.form .fields input:hover {\n  border: 1px solid rgba(6, 40, 98, 0.4) !important;\n}\n\n.form-inner .ui.form .fields input:active, .form-inner .ui.form .fields input:focus {\n  border: 2px solid #437ADA !important;\n}\n\n.form-inner .ui.form .fields .bookings_btn-panel {\n  text-align: right;\n}\n\nh3 {\n  margin-top: 24px !important;\n}\n\n.header {\n  margin: 10px 24px 10px 16px;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 23px;\n  color: #4F4F4F;\n}\n\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n\n.ui.form .three.wide.field,\n.ui.form .field > .checkbox-field {\n  margin-bottom: 16px;\n}\n\n.ui.fluid.container {\n  padding: 0px !important;\n  background: none;\n}\n\n.ui.fluid.container .outer-basicForm {\n  padding: 0px;\n}\n\n@media (max-width: 1280px) {\n  .update-header {\n    margin-left: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vZW1haWwtdGVtcGxhdGVzL0U6XFxCZWxhbFxccHJvamVjdHNcXHByb2R1Y3Rpb24tYnVpbGRcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcc2V0dXAtY29uZmlndXJhdGlvblxcZW1haWwtdGVtcGxhdGVzXFxlbWFpbC10ZW1wbGF0ZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zZXR1cC1jb25maWd1cmF0aW9uL2VtYWlsLXRlbXBsYXRlcy9lbWFpbC10ZW1wbGF0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQUk7RUFDSSxXQUFBO0FDRVI7O0FEQVE7RUFDSSxXQUFBO0FDRVo7O0FEQ1E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNDWjs7QURJQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDREo7O0FES0k7RUFDSSxjQUFBO0FDRlI7O0FER1E7RUFDSSxnQkFBQTtBQ0RaOztBREdRO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0VBQ0EsaURBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0NBQUE7QUNEWjs7QURFWTtFQUNJLDJCQUFBO0FDQWhCOztBRERZO0VBQ0ksMkJBQUE7QUNBaEI7O0FERFk7RUFDSSwyQkFBQTtBQ0FoQjs7QUREWTtFQUNJLDJCQUFBO0FDQWhCOztBREVZO0VBQ0ksaURBQUE7QUNBaEI7O0FERVk7RUFFSSxvQ0FBQTtBQ0RoQjs7QURJUTtFQUNJLGlCQUFBO0FDRlo7O0FET0E7RUFDSSwyQkFBQTtBQ0pKOztBRE9BO0VBQ0ksMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNKSjs7QURPQTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0pKOztBRE9BOztFQUVJLG1CQUFBO0FDSko7O0FET0E7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0FDSko7O0FES0k7RUFDSSxZQUFBO0FDSFI7O0FET0E7RUFDSTtJQUNJLGlCQUFBO0VDSk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zZXR1cC1jb25maWd1cmF0aW9uL2VtYWlsLXRlbXBsYXRlcy9lbWFpbC10ZW1wbGF0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBkYXRlLWhlYWRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbn1cclxuXHJcbi51aS5mbHVpZC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMjVweDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpY0Zvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAzMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIC8vIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICAmLmNhbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmNhbGwge1xyXG4gICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jbG9zZS5pY29uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZvcm0taW5uZXIge1xyXG4gICAgLnVpLmZvcm0gLmZpZWxkcyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgLmZpZWxkIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMWVtIDBlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDYsIDQwLCA5OCwgMC4yKSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1LjEyMTU1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoNiwgNDAsIDk4LCAwLjkpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDYsIDQwLCA5OCwgMC40KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNiwgNDAsIDk4LCAwLjQpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjphY3RpdmUsXHJcbiAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzQzN0FEQSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib29raW5nc19idG4tcGFuZWwge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIG1hcmdpbi10b3A6IDI0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICBtYXJnaW46IDEwcHggMjRweCAxMHB4IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxufVxyXG5cclxuLnVpLmZvcm0gLmZpZWxkPmxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgIGNvbG9yOiAjMTgxQjIwO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDhweDtcclxufVxyXG5cclxuLnVpLmZvcm0gLnRocmVlLndpZGUuZmllbGQsXHJcbi51aS5mb3JtIC5maWVsZD4uY2hlY2tib3gtZmllbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLnVpLmZsdWlkLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAub3V0ZXItYmFzaWNGb3JtIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIC51cGRhdGUtaGVhZGVyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxufSIsIi51cGRhdGUtaGVhZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBjb2xvcjogIzRGNEY0Rjtcbn1cblxuLnVpLmZsdWlkLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5vdXRlci1iYXNpYyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ub3V0ZXItYmFzaWNGb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMzBweCAxNXB4O1xufVxuXG4uaWNvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xufVxuLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbCB7XG4gIHdpZHRoOiAxOHB4O1xufVxuLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbGwge1xuICB3aWR0aDogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmNsb3NlLmljb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZvcm0taW5uZXIgLnVpLmZvcm0gLmZpZWxkcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmZvcm0taW5uZXIgLnVpLmZvcm0gLmZpZWxkcyAuZmllbGQge1xuICBwYWRkaW5nOiAxZW0gMGVtO1xufVxuLmZvcm0taW5uZXIgLnVpLmZvcm0gLmZpZWxkcyBpbnB1dCB7XG4gIGhlaWdodDogMzhweDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNiwgNDAsIDk4LCAwLjIpICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUuMTIxNTVweCAhaW1wb3J0YW50O1xuICBjb2xvcjogcmdiYSg2LCA0MCwgOTgsIDAuOSkgIWltcG9ydGFudDtcbn1cbi5mb3JtLWlubmVyIC51aS5mb3JtIC5maWVsZHMgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoNiwgNDAsIDk4LCAwLjQpO1xufVxuLmZvcm0taW5uZXIgLnVpLmZvcm0gLmZpZWxkcyBpbnB1dDpob3ZlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNiwgNDAsIDk4LCAwLjQpICFpbXBvcnRhbnQ7XG59XG4uZm9ybS1pbm5lciAudWkuZm9ybSAuZmllbGRzIGlucHV0OmFjdGl2ZSwgLmZvcm0taW5uZXIgLnVpLmZvcm0gLmZpZWxkcyBpbnB1dDpmb2N1cyB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM0MzdBREEgIWltcG9ydGFudDtcbn1cbi5mb3JtLWlubmVyIC51aS5mb3JtIC5maWVsZHMgLmJvb2tpbmdzX2J0bi1wYW5lbCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5oMyB7XG4gIG1hcmdpbi10b3A6IDI0cHggIWltcG9ydGFudDtcbn1cblxuLmhlYWRlciB7XG4gIG1hcmdpbjogMTBweCAyNHB4IDEwcHggMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgY29sb3I6ICM0RjRGNEY7XG59XG5cbi51aS5mb3JtIC5maWVsZCA+IGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgY29sb3I6ICMxODFCMjA7XG4gIG1hcmdpbjogMHB4IDBweCA4cHg7XG59XG5cbi51aS5mb3JtIC50aHJlZS53aWRlLmZpZWxkLFxuLnVpLmZvcm0gLmZpZWxkID4gLmNoZWNrYm94LWZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnVpLmZsdWlkLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLnVpLmZsdWlkLmNvbnRhaW5lciAub3V0ZXItYmFzaWNGb3JtIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC51cGRhdGUtaGVhZGVyIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/setup-configuration/email-templates/email-templates.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/layout/setup-configuration/email-templates/email-templates.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: EmailTemplatesComponent */

  /***/
  function srcAppLayoutSetupConfigurationEmailTemplatesEmailTemplatesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailTemplatesComponent", function () {
      return EmailTemplatesComponent;
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


    var src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/setup-config/setup-config.service */
    "./src/app/shared/services/setup-config/setup-config.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../_modal */
    "./src/app/layout/_modal/index.ts");

    var EmailTemplatesComponent = /*#__PURE__*/function () {
      function EmailTemplatesComponent(ListOfEmailrService, fb, toastr, modalService) {
        _classCallCheck(this, EmailTemplatesComponent);

        this.ListOfEmailrService = ListOfEmailrService;
        this.fb = fb;
        this.toastr = toastr;
        this.modalService = modalService;
        this.limit = 15;
        this.pageIndex = 1;
        this.NewListOfEmails = [];
        this.totalListOfEmails = 0;
        this.pages = 0;
        this.submitted = false;
        this.showDetailModal = false;
      }

      _createClass(EmailTemplatesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fetchAllListOfEmails(this.limit, this.pageIndex);
          this.templateForm = this.fb.group({
            email_template_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            email_template_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            email_template_description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
          });
        }
      }, {
        key: "fetchAllListOfEmails",
        value: function fetchAllListOfEmails(limit, pageIndex) {
          var _this = this;

          this.ListOfEmailrService.GetAllEmails(0, limit, pageIndex).subscribe(function (res) {
            if (res.status == 200) {
              if (res.email.length != 0) {
                _this.totalListOfEmails = res.email;
                _this.pages = _this.totalListOfEmails / _this.limit;
                _this.NewListOfEmails = res.email;
              } else {
                _this.toastr.info("There is no data available to display", "", {
                  timeOut: 1000,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });
              }
            } else {
              _this.toastr.error("".concat(res.msg), "".concat(res.msg), {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "editTemplate",
        value: function editTemplate(id, modalId) {
          var _this2 = this;

          this.submitted = false;
          this.ListOfEmailrService.getEmailInfo(id).subscribe(function (result) {
            if (result.type != 'error') {
              _this2.getInfo = result.data;
              _this2.showDetailModal = true;

              _this2.templateForm.patchValue({
                email_template_id: result.data.email_template_id,
                email_template_name: result.data.email_template_name,
                email_template_description: result.data.email_template_description
              });

              _this2.modalService.open(modalId);
            } else {
              _this2.toastr.error("".concat(result.msg), "".concat(result.msg), {
                timeOut: 10000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "updateTemplate",
        value: function updateTemplate(modelId) {
          var _this3 = this;

          this.submitted = true;

          if (this.templateForm.invalid) {
            return;
          }

          this.ListOfEmailrService.updateTemplate(this.templateForm.value).subscribe(function (result) {
            if (result.type == 'error') {
              _this3.toastr.error("".concat(result.msg), "".concat(result.msg), {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            } else {
              _this3.toastr.info("".concat(result.msg), "".concat(result.msg), {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });

              _this3.fetchAllListOfEmails(_this3.limit, _this3.pageIndex);

              _this3.modalService.close(modelId);
            }
          });
        }
      }, {
        key: "closeModal",
        value: function closeModal(modalId) {
          this.modalService.close(modalId);
        }
      }, {
        key: "f",
        get: function get() {
          return this.templateForm.controls;
        }
      }]);

      return EmailTemplatesComponent;
    }();

    EmailTemplatesComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_2__["SetupConfigService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _modal__WEBPACK_IMPORTED_MODULE_5__["ModalService"]
      }];
    };

    EmailTemplatesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-email-templates',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./email-templates.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/email-templates/email-templates.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./email-templates.component.scss */
      "./src/app/layout/setup-configuration/email-templates/email-templates.component.scss"))["default"]]
    })], EmailTemplatesComponent);
    /***/
  },

  /***/
  "./src/app/layout/setup-configuration/email-templates/email-templates.module.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/layout/setup-configuration/email-templates/email-templates.module.ts ***!
    \**************************************************************************************/

  /*! exports provided: EmailTemplatesModule */

  /***/
  function srcAppLayoutSetupConfigurationEmailTemplatesEmailTemplatesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmailTemplatesModule", function () {
      return EmailTemplatesModule;
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


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var _email_templates_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./email-templates-routing.module */
    "./src/app/layout/setup-configuration/email-templates/email-templates-routing.module.ts");
    /* harmony import */


    var _email_templates_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./email-templates.component */
    "./src/app/layout/setup-configuration/email-templates/email-templates.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ckeditor4-angular */
    "./node_modules/ckeditor4-angular/__ivy_ngcc__/fesm2015/ckeditor4-angular.js");
    /* harmony import */


    var _modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../_modal */
    "./src/app/layout/_modal/index.ts");
    /* harmony import */


    var src_app_access_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/access.module */
    "./src/app/access.module.ts");

    var EmailTemplatesModule = function EmailTemplatesModule() {
      _classCallCheck(this, EmailTemplatesModule);
    };

    EmailTemplatesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_email_templates_component__WEBPACK_IMPORTED_MODULE_5__["EmailTemplatesComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"], _email_templates_routing_module__WEBPACK_IMPORTED_MODULE_4__["EmailTemplatesRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], ckeditor4_angular__WEBPACK_IMPORTED_MODULE_7__["CKEditorModule"], _modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"], src_app_access_module__WEBPACK_IMPORTED_MODULE_9__["ApplicationAccess"]]
    })], EmailTemplatesModule);
    /***/
  }
}]);
//# sourceMappingURL=email-templates-email-templates-module-es5.js.map