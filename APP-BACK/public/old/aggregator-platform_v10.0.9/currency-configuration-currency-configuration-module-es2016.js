(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["currency-configuration-currency-configuration-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/currency-configuration/currency-configuration.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/currency-configuration/currency-configuration.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui form header-block\">\r\n  <div class=\"five fields\">\r\n    <div class=\"eight wide field\">\r\n      <h3><span class=\"update-header\">List Currencies</span></h3>\r\n    </div>\r\n    <div class=\"eight wide field bookings_btn-panel add_btn\"  *ngIf=\"hideAddCurrecy\">\r\n      <button class=\"ui primary button searchCurrency_btn\" tabindex=\"0\" (click)=\"addCurrency()\">\r\n        <span class=\"search_text\">+Add</span>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"ui fluid container\">\r\n  <div class=\"outer-basic result-block\">\r\n    <div class=\"outer-basicForm\">\r\n      <form class=\"ui form\" [formGroup]=\"currencyForm\">\r\n        <div class=\"ui segment\" *ngIf=\"showAddCurrency\">\r\n          <h4 class=\"ui header\"></h4>\r\n          <div class=\"five fields\">\r\n            <div class=\"three wide field\">\r\n              <label>From</label>\r\n              <input type=\"text\" placeholder=\"From\" formControlName=\"from\" name=\"from\">\r\n              <div class=\"validations\" *ngIf=\"from.errors?.minlength\">\r\n                Above field must be fixed 3 characters long.\r\n              </div>\r\n              <div class=\"validations\" *ngIf=\"from.errors?.maxlength\">\r\n                Above field must be fixed 3 characters long.\r\n              </div>\r\n              <div class=\"validations\" *ngIf=\"from.errors?.pattern\">\r\n                Above field must be strictly uppercase.\r\n              </div>\r\n            </div>\r\n            <div class=\"three wide field\">\r\n              <label>To</label>\r\n              <input type=\"text\" placeholder=\"To\" formControlName=\"to\" name=\"to\">\r\n              <div class=\"validations\" *ngIf=\"to.errors?.minlength\">\r\n                Above field must be fixed 3 characters long.\r\n              </div>\r\n              <div class=\"validations\" *ngIf=\"to.errors?.maxlength\">\r\n                Above field must be fixed 3 characters long.\r\n              </div>\r\n              <div class=\"validations\" *ngIf=\"to.errors?.pattern\">\r\n                Above field must be strictly uppercase.\r\n              </div>\r\n            </div>\r\n            <div class=\"three wide field\">\r\n              <label>Exchange</label>\r\n              <input type=\"number\" placeholder=\"Exchange\" formControlName=\"value\" name=\"value\" required>\r\n            </div>\r\n            <div class=\"five wide field bookings_btn-panel\">\r\n                <button class=\"ui button reset addCurrency_btn\" tabindex=\"0\" title=\"Reset\" (click)=\"resetForm()\">\r\n                  <span class=\"search_text\"><i class=\"undo icon\"></i></span>\r\n                </button>\r\n                <button class=\"ui button reset addCurrency_btn\" tabindex=\"0\" title=\"Cancel\" (click)=\"cancelCurrency()\">\r\n                  <span class=\"search_text\">Cancel</span>\r\n                </button>\r\n                <button class=\"ui primary button addCurrency_btn save_update\" *ngIf=\"!showUpdate\" tabindex=\"0\"\r\n                  title=\"Save currency\" (click)=\"saveCurrency()\">\r\n                  <span class=\"search_text\">Save</span>\r\n                </button>\r\n                <button class=\"ui primary button addCurrency_btn save_update\" *ngIf=\"showUpdate\" tabindex=\"0\"\r\n                  title=\"Save currency\" (click)=\"updateCurrency()\">\r\n                  <span class=\"search_text\">Update</span>\r\n                </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui segment\" *ngIf=\"hideAddCurrecy\">\r\n          \r\n          <!-- <div class=\"four fields\">\r\n            <div class=\"three wide field\">\r\n              <input type=\"text\" placeholder=\"Type to filter the name column...\" (keyup)=\"updateFilter($event)\" />\r\n            </div>\r\n            <div class=\"seven wide field\">\r\n              <button class=\"ui button searchCurrency_btn\" tabindex=\"0\">\r\n                <span class=\"search_text\"><i class=\"search icon\"></i></span>\r\n              </button>\r\n            </div>\r\n          </div> -->\r\n          <div class=\"currency-list b2c-list-user-table\">\r\n            <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n              [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='NewListOfCurrencies' [sortType]=\"'multi'\" [reorderable]=\"true\"\r\n              [externalPaging]=\"true\" [count]=\"totalListOfCurrencies\" [offset]=\"currencyPage\"\r\n              [sorts]=\"[{prop: 'from', dir: 'desc'}]\" (page)=\"pageCallback($event)\">\r\n              <ngx-datatable-column name=\"From\" prop=\"from\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  <div>{{row.converter[0].from}}</div>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"To\" prop=\"to\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  <div>{{row.converter[0].to}}</div>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Exchange\" prop=\"value\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  <div>{{row.converter[0].value}}</div>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Action\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template let-value=\"value\">\r\n                  <span (click)=\"editCurrency( row )\" class=\"action\" title=\"Edit user\">\r\n                    <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n                    <!-- <i class=\"icon\">\r\n                      <img src=\"./../../../../../assets/icons/edit.png\" class=\"bookings_input__placeholder-icon cal\" />\r\n                    </i> -->\r\n                  </span>\r\n                  <span (click)=\"deleteCurrecy( row )\" class=\"action\" title=\"Delete User\">\r\n                    <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    <!-- <i class=\"icon\">\r\n                      <img src=\"./../../../../../assets/icons/delete-button.png\"\r\n                        class=\"bookings_input__placeholder-icon cal\" />\r\n                    </i> -->\r\n                  </span>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n            </ngx-datatable>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/layout/setup-configuration/currency-configuration/currency-configuration-routing.module.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/currency-configuration/currency-configuration-routing.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: CurrencyConfigurationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyConfigurationRoutingModule", function() { return CurrencyConfigurationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _currency_configuration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency-configuration.component */ "./src/app/layout/setup-configuration/currency-configuration/currency-configuration.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: '', component: _currency_configuration_component__WEBPACK_IMPORTED_MODULE_1__["CurrencyConfigurationComponent"] }
];
let CurrencyConfigurationRoutingModule = class CurrencyConfigurationRoutingModule {
};
CurrencyConfigurationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], CurrencyConfigurationRoutingModule);



/***/ }),

/***/ "./src/app/layout/setup-configuration/currency-configuration/currency-configuration.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/currency-configuration/currency-configuration.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".update-header {\n  margin-left: 24px;\n  font-style: normal;\n  font-weight: 700 !important;\n  font-size: 20px;\n  line-height: 23px;\n  color: #181B20;\n}\n\n.ui.fluid.container {\n  padding: 25px;\n}\n\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n  padding: 30px 15px;\n}\n\n.basic-header {\n  font-family: \"Roboto\", sans-serif;\n}\n\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #E0E0E0;\n}\n\n.update_btn {\n  box-sizing: border-box;\n  border-radius: 3px;\n  background-color: #3867b1;\n  border: 1px solid #FFF;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n  padding-right: 35px;\n  margin-top: 15px;\n}\n\n.update_text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  padding-left: 10px;\n}\n\n.field input::-webkit-input-placeholder {\n  font-size: 14px;\n}\n\n.field input::-moz-placeholder {\n  font-size: 14px;\n}\n\n.field input::-ms-input-placeholder {\n  font-size: 14px;\n}\n\n.field input::placeholder {\n  font-size: 14px;\n}\n\n.dropdown .text {\n  font-size: 12px;\n}\n\n.search_text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.addCurrency_btn {\n  margin-top: 20px;\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n  margin: 20px 12px 20px 0px;\n}\n\n.icon {\n  opacity: 1;\n  z-index: 100;\n}\n\n.icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.icon .bookings_input__placeholder-icon.cal {\n  width: 16px;\n  margin-top: 0px;\n}\n\n.icon .bookings_input__placeholder-icon.call {\n  width: 18px;\n  margin-top: 0px;\n}\n\nspan.action {\n  display: inline-block;\n  margin: 0px 5px;\n  font-weight: bold;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.validations {\n  color: red;\n  font-size: 12px;\n}\n\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n\n.btn-block button {\n  float: right;\n  margin-right: 12px;\n}\n\n.ui.fluid.container {\n  padding: 0px !important;\n  background: none;\n}\n\n.ui.fluid.container .outer-basicForm {\n  padding: 0px;\n}\n\n.ui.fluid.container .bookings_btn-panel.add_btn {\n  text-align: right;\n  margin-bottom: 24px;\n}\n\n.header-block .bookings_btn-panel.add_btn {\n  text-align: right;\n  margin: 24px 24px 0px 0px;\n}\n\n.result-block .outer-basicForm {\n  padding: 0px;\n}\n\n.result-block .outer-basicForm .ui.segment {\n  padding: 0px;\n}\n\n@media (max-width: 1440px) {\n  .update-header {\n    margin-left: 24px;\n  }\n}\n\n@media (max-width: 1280px) {\n  .update-header {\n    margin-left: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vY3VycmVuY3ktY29uZmlndXJhdGlvbi9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHNldHVwLWNvbmZpZ3VyYXRpb25cXGN1cnJlbmN5LWNvbmZpZ3VyYXRpb25cXGN1cnJlbmN5LWNvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zZXR1cC1jb25maWd1cmF0aW9uL2N1cnJlbmN5LWNvbmZpZ3VyYXRpb24vY3VycmVuY3ktY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGlDQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUZBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERkE7RUFDSSxlQUFBO0FDQ0o7O0FERkE7RUFDSSxlQUFBO0FDQ0o7O0FERkE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpRkFBQTtFQUNBLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREFJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNFUjs7QUREUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDR1o7O0FERFE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0daOztBREVBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURZSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ1RSOztBRGFBO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtBQ1ZKOztBRFdJO0VBQ0ksWUFBQTtBQ1RSOztBRFdJO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQ1RSOztBRGNJO0VBQ0csaUJBQUE7RUFDQSx5QkFBQTtBQ1hQOztBRGlCSTtFQUNJLFlBQUE7QUNkUjs7QURlUTtFQUNJLFlBQUE7QUNiWjs7QURrQkE7RUFDSTtJQUNJLGlCQUFBO0VDZk47QUFDRjs7QURrQkE7RUFDSTtJQUNJLGlCQUFBO0VDaEJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc2V0dXAtY29uZmlndXJhdGlvbi9jdXJyZW5jeS1jb25maWd1cmF0aW9uL2N1cnJlbmN5LWNvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBkYXRlLWhlYWRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgY29sb3I6ICMxODFCMjA7XHJcbn1cclxuXHJcbi51aS5mbHVpZC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMjVweDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljRm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDMwcHggMTVweDtcclxufVxyXG5cclxuLmJhc2ljLWhlYWRlciB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgI0UwRTBFMDtcclxufVxyXG5cclxuLnVwZGF0ZV9idG4ge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODY3YjE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkZGO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgcGFkZGluZy1yaWdodDogMzVweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi51cGRhdGVfdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLmZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5kcm9wZG93biAudGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5zZWFyY2hfdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZEN1cnJlbmN5X2J0biB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIG1hcmdpbjogMjBweCAxMnB4IDIwcHggMHB4O1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgJi5jYWwge1xyXG4gICAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmNhbGwge1xyXG4gICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuc3Bhbi5hY3Rpb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwcHggNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnZhbGlkYXRpb25zIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi51aS5mb3JtIC5maWVsZD5sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICBjb2xvcjogIzE4MUIyMDtcclxuICAgIG1hcmdpbjogMHB4IDBweCA4cHg7XHJcbn1cclxuXHJcbi8vIC51aS5mb3JtIC50aHJlZS53aWRlLmZpZWxkLFxyXG4vLyAudWkuZm9ybSAuZmllbGQ+LmNoZWNrYm94LWZpZWxkIHtcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5zYXZlX3VwZGF0ZSB7XHJcbi8vICAgICBmbG9hdDogcmlnaHQ7XHJcbi8vIH1cclxuXHJcbi5idG4tYmxvY2sge1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udWkuZmx1aWQuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIC5vdXRlci1iYXNpY0Zvcm0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuICAgIC5ib29raW5nc19idG4tcGFuZWwuYWRkX2J0biB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIH1cclxufVxyXG5cclxuLmhlYWRlci1ibG9jayB7XHJcbiAgICAuYm9va2luZ3NfYnRuLXBhbmVsLmFkZF9idG4ge1xyXG4gICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICBtYXJnaW46IDI0cHggMjRweCAwcHggMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmVzdWx0LWJsb2NrIHtcclxuXHJcbiAgICAub3V0ZXItYmFzaWNGb3JtIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgLnVpLnNlZ21lbnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICAudXBkYXRlLWhlYWRlciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIC51cGRhdGUtaGVhZGVyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxufSAgICIsIi51cGRhdGUtaGVhZGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBjb2xvcjogIzE4MUIyMDtcbn1cblxuLnVpLmZsdWlkLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5vdXRlci1iYXNpY0Zvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAzMHB4IDE1cHg7XG59XG5cbi5iYXNpYy1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuaHIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjRTBFMEUwO1xufVxuXG4udXBkYXRlX2J0biB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdiMTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGRjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4udXBkYXRlX3RleHQge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRyb3Bkb3duIC50ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uc2VhcmNoX3RleHQge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFkZEN1cnJlbmN5X2J0biB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBtYXJnaW46IDIwcHggMTJweCAyMHB4IDBweDtcbn1cblxuLmljb24ge1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxMDA7XG59XG4uaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xuICB3aWR0aDogMjRweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbCB7XG4gIHdpZHRoOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4uaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsbCB7XG4gIHdpZHRoOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbnNwYW4uYWN0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDBweCA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udmFsaWRhdGlvbnMge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi51aS5mb3JtIC5maWVsZCA+IGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgY29sb3I6ICMxODFCMjA7XG4gIG1hcmdpbjogMHB4IDBweCA4cHg7XG59XG5cbi5idG4tYmxvY2sgYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi51aS5mbHVpZC5jb250YWluZXIge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi51aS5mbHVpZC5jb250YWluZXIgLm91dGVyLWJhc2ljRm9ybSB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi51aS5mbHVpZC5jb250YWluZXIgLmJvb2tpbmdzX2J0bi1wYW5lbC5hZGRfYnRuIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi5oZWFkZXItYmxvY2sgLmJvb2tpbmdzX2J0bi1wYW5lbC5hZGRfYnRuIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbjogMjRweCAyNHB4IDBweCAwcHg7XG59XG5cbi5yZXN1bHQtYmxvY2sgLm91dGVyLWJhc2ljRm9ybSB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5yZXN1bHQtYmxvY2sgLm91dGVyLWJhc2ljRm9ybSAudWkuc2VnbWVudCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAudXBkYXRlLWhlYWRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgLnVwZGF0ZS1oZWFkZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/setup-configuration/currency-configuration/currency-configuration.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/currency-configuration/currency-configuration.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CurrencyConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyConfigurationComponent", function() { return CurrencyConfigurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/setup-config/setup-config.service */ "./src/app/shared/services/setup-config/setup-config.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let CurrencyConfigurationComponent = class CurrencyConfigurationComponent {
    constructor(fb, currencyService, toastr) {
        this.fb = fb;
        this.currencyService = currencyService;
        this.toastr = toastr;
        this.limit = 15;
        this.pageIndex = 1;
        this.NewListOfCurrencies = [];
        this.showAddCurrency = false;
        this.hideAddCurrecy = true;
        this.showUpdate = false;
        this.totalListOfCurrencies = 0;
        this.pages = 0;
        this.pageCurrency = 0;
        this.currencyPage = 0;
        this.currencyConfigForm = {
            page: this.pageCurrency
        };
        this.currencyForm = this.fb.group({
            converter_id: [''],
            from: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[A-Z]*'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(3)]],
            to: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[A-Z]*'),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(3)]],
            value: ['']
        });
    }
    ngOnInit() {
        console.log("--------", this.currencyForm.value);
        this.fetchAllListOfCurrencies();
    }
    addCurrency() {
        this.showAddCurrency = true;
        this.hideAddCurrecy = false;
        this.showUpdate = false;
        this.resetForm();
    }
    cancelCurrency() {
        this.showAddCurrency = false;
        this.hideAddCurrecy = true;
    }
    saveCurrency() {
        console.log("--------", this.currencyForm.value);
        if (this.currencyForm.invalid) {
            return;
        }
        console.log("--------", this.currencyForm.value);
        this.currencyService.addCurrency(this.currencyForm.value).subscribe((result) => {
            console.log(result.msg);
            if (result.type == 'error') {
                this.toastr.error(`${result.msg}`, ``, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
            else {
                if (result.msg == "Record already exists.") {
                    this.toastr.warning(`${result.msg}`, ``, {
                        timeOut: 1000,
                        progressBar: false,
                        positionClass: 'toast-bottom-right'
                    });
                }
                else {
                    this.toastr.success(`${result.msg}`, ``, {
                        timeOut: 1000,
                        progressBar: false,
                        positionClass: 'toast-bottom-right'
                    });
                }
                this.showAddCurrency = false;
                this.hideAddCurrecy = true;
                this.fetchAllListOfCurrencies();
                this.resetForm();
            }
        });
    }
    fetchAllListOfCurrencies() {
        this.currencyService.GetAllCurrencies(this.currencyConfigForm)
            .subscribe((res) => {
            if (res.status == 200) {
                this.totalListOfCurrencies = res.totalResult;
                this.currencyPage = res.page;
                res.data.map((ele) => {
                    ele.converter = Object.values(JSON.parse(ele.currency));
                });
                this.NewListOfCurrencies = res.data;
            }
            else {
                this.toastr.error(`${res.msg}`, `${res.msg}`, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    }
    editCurrency(valObj) {
        this.showAddCurrency = true;
        this.hideAddCurrecy = false;
        this.showUpdate = true;
        this.currencyForm.patchValue({
            converter_id: valObj.converter_id,
            from: valObj.converter[0].from,
            to: valObj.converter[0].to,
            value: valObj.converter[0].value
        });
    }
    updateCurrency() {
        if (this.currencyForm.invalid) {
            return;
        }
        let converter_id = this.currencyForm.value.converter_id;
        this.currencyService.getUpdateCurrency(converter_id, this.currencyForm.value).subscribe((result) => {
            if (result.type == 'error') {
                this.toastr.error(`${result.msg}`, ``, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
            else {
                if (result.msg == "Record already exists.") {
                    this.toastr.warning(`${result.msg}`, ``, {
                        timeOut: 1000,
                        progressBar: false,
                        positionClass: 'toast-bottom-right'
                    });
                }
                else {
                    this.toastr.success(`${result.msg}`, ``, {
                        timeOut: 1000,
                        progressBar: false,
                        positionClass: 'toast-bottom-right'
                    });
                }
            }
            this.showAddCurrency = false;
            this.hideAddCurrecy = true;
            this.fetchAllListOfCurrencies();
            this.resetForm();
        });
    }
    deleteCurrecy(valObj) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                this.currencyService.deleteCurrency(valObj.converter_id).subscribe((result) => {
                    if (result.type == 'error') {
                        this.toastr.error(`${result.msg}`, ``, {
                            timeOut: 1000,
                            progressBar: false,
                            positionClass: 'toast-bottom-right'
                        });
                    }
                    else {
                        this.toastr.success(`${result.msg}`, ``, {
                            timeOut: 1000,
                            progressBar: false,
                            positionClass: 'toast-bottom-right'
                        });
                        this.fetchAllListOfCurrencies();
                    }
                });
            }
        });
    }
    resetForm() {
        this.currencyForm.reset();
    }
    get from() {
        return this.currencyForm.get('from');
    }
    get to() {
        return this.currencyForm.get('to');
    }
    pageCallback(event) {
        let offset = event.offset;
        this.currencyConfigForm.page = offset;
        this.fetchAllListOfCurrencies();
    }
};
CurrencyConfigurationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_2__["SetupConfigService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
CurrencyConfigurationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-currency-configuration',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./currency-configuration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/currency-configuration/currency-configuration.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./currency-configuration.component.scss */ "./src/app/layout/setup-configuration/currency-configuration/currency-configuration.component.scss")).default]
    })
], CurrencyConfigurationComponent);



/***/ }),

/***/ "./src/app/layout/setup-configuration/currency-configuration/currency-configuration.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/currency-configuration/currency-configuration.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: CurrencyConfigurationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyConfigurationModule", function() { return CurrencyConfigurationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _currency_configuration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency-configuration.component */ "./src/app/layout/setup-configuration/currency-configuration/currency-configuration.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-moment */ "./node_modules/ngx-moment/__ivy_ngcc__/fesm2015/ngx-moment.js");
/* harmony import */ var _currency_configuration_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./currency-configuration-routing.module */ "./src/app/layout/setup-configuration/currency-configuration/currency-configuration-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_access_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/access.module */ "./src/app/access.module.ts");









let CurrencyConfigurationModule = class CurrencyConfigurationModule {
};
CurrencyConfigurationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_currency_configuration_component__WEBPACK_IMPORTED_MODULE_1__["CurrencyConfigurationComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"],
            ngx_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"],
            _currency_configuration_routing_module__WEBPACK_IMPORTED_MODULE_6__["CurrencyConfigurationRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            src_app_access_module__WEBPACK_IMPORTED_MODULE_8__["ApplicationAccess"]
        ]
    })
], CurrencyConfigurationModule);



/***/ })

}]);
//# sourceMappingURL=currency-configuration-currency-configuration-module-es2016.js.map