(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["floating-deposits-floating-deposits-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/accounts/floating-deposits/floating-deposits.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/accounts/floating-deposits/floating-deposits.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3 class=\"booking-header\">Floating Deposits</h3>\r\n\r\n<div class=\"ui fluid container\">\r\n  <div class=\"outer-basic result-block\">\r\n    <form class=\"ui form \" [formGroup]=\"addFloatingForm\" (ngSubmit)=\"submitAddFloating()\" enctype=\"multipart/form-data\">\r\n      <div class=\"outer-basicForm\">\r\n        <!-- <h4><b>Floating Deposits Request</b></h4><br><br> -->\r\n        <div class=\"field\">\r\n          <div class=\"five fields\">\r\n            <div class=\"eight wide field\"\r\n              [ngClass]=\"{'error': ((submitted && f.supplier_data.errors) && f.supplier_data.errors.required) }\">\r\n              <label>Select Supplier<span class=\"mandatory\">*</span></label>\r\n              <select formControlName=\"supplier_data\" class=\" ui fluid search selection dropdown\">\r\n                <option value=\"\" selected>Select Supplier</option>\r\n                <option *ngFor=\"let supplier of suppliers\" value=\"{{66+'||'+supplier.supplier+'||'+supplier.currency}}\">\r\n                  {{supplier.supplier}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n            <div class=\"eight wide field\">\r\n              <label>IATA Number</label>\r\n              <input type=\"text\" name=\"agency_iata_num\" formControlName=\"agency_iata_num\" placeholder=\"IATA\">\r\n              <div class=\"validations\" *ngIf=\"agency_iata_num.errors?.pattern\">\r\n                Above field must be strictly Numeric Values.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div>\r\n          <!-- <h4 class=\"ui header\">Agency Details</h4> -->\r\n          <div class=\"field\">\r\n            <div class=\"five fields\">\r\n              <div class=\"eight wide field\">\r\n                <label>Agency Name</label>\r\n                <input type=\"text\" name=\"agencyName\" formControlName=\"agency_name\" disabled placeholder=\"Agency Name\">\r\n              </div>\r\n              <div class=\"eight wide field\">\r\n                <label>Agency Country</label>\r\n                <input type=\"text\" name=\"agencyCountry\" formControlName=\"agency_country\" disabled>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"field\">\r\n            <div class=\"five fields\">\r\n              <div class=\"eight wide field\">\r\n                <label>Available Currency</label>\r\n                <input type=\"text\" name=\"agencyCountry\" formControlName=\"agency_currency\" disabled>\r\n              </div>\r\n              <div class=\"eight wide field\">\r\n                <label>Available Balance</label>\r\n                <input type=\"text\" name=\"availableBalance\" formControlName=\"available_balance\" disabled\r\n                  placeholder=\"Available Balance\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"field\">\r\n                        <hr>\r\n                    </div> -->\r\n          <!-- <h4 class=\"ui header\">Floating Deposit Type</h4> -->\r\n          <div class=\"field\">\r\n            <!-- <label>Name</label> -->\r\n            <div class=\"fields\">\r\n              <div class=\"eight wide field\">\r\n                <label>Floating Deposit Type</label>\r\n                <input type=\"text\" name=\"agencyCountry\" formControlName=\"topup_type\" readonly>\r\n              </div>\r\n              <div class=\"eight wide field\"\r\n                [ngClass]=\"{'error': ((submitted && f.topup_subtype.errors) && f.topup_subtype.errors.required) }\">\r\n                <label>Floating Deposit Sub Type<span class=\"mandatory\">*</span></label>\r\n                <select class=\" ui fluid search selection dropdown\" formControlName=\"topup_subtype\">\r\n                  <option value=\"\" selected>Select Sub Type</option>\r\n                  <option *ngFor=\"let subT of topupSubtype\" value=\"{{subT}}\">\r\n                    {{subT}}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"field\">\r\n                    <hr>\r\n                </div> -->\r\n        <!-- <h4 class=\"ui header\">Floating Deposit Details</h4> -->\r\n        <div class=\"field\">\r\n          <div class=\"five fields\">\r\n            <div class=\"eight wide field\">\r\n              <label>Topup type</label>\r\n              <input type=\"text\" name=\"topup_purpose\" formControlName=\"topup_purpose\" readonly>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <div class=\"five fields\">\r\n            <div class=\"eight wide field\">\r\n              <label>Bank Name</label>\r\n              <input type=\"text\" name=\"bankName\" formControlName=\"bank_name\" readonly placeholder=\"Bank Name\">\r\n            </div>\r\n            <div class=\"eight wide field\">\r\n              <label>Bank Account Number</label>\r\n              <input type=\"text\" name=\"bankAccNumber\" formControlName=\"bank_account_no\" readonly\r\n                placeholder=\"Bank Account Number\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <div class=\"five fields\">\r\n            <div class=\"eight wide field bookings_pickers\"\r\n              [ngClass]=\"{'error': ((submitted && f.payment_date.errors) && f.payment_date.errors.required) }\">\r\n              <label>Payment Date<span class=\"mandatory\">*</span></label>\r\n              <div class=\"ui left icon input \">\r\n                <input type=\"text\" placeholder=\"Payment Date\" formControlName=\"payment_date\" name=\"payment_date\"\r\n                  value=\"\" />\r\n                <i class=\"icon\">\r\n                  <img src=\"./../../../../assets/icons/calendar.svg\" class=\"bookings_input__placeholder-icon cal\" />\r\n                </i>\r\n              </div>\r\n            </div>\r\n            <div class=\"eight wide field\"\r\n              [ngClass]=\"{'error': ((submitted && f.payment_currency.errors) && f.payment_currency.errors.required) }\">\r\n              <label>Payment Currency<span class=\"mandatory\">*</span></label>\r\n              <select class=\" ui fluid search selection dropdown\" formControlName=\"payment_currency\">\r\n                <option value=\"\" selected>Payment Currency</option>\r\n                <option *ngFor=\"let currency of currencies\" value=\"{{currency.code}}\">\r\n                  {{currency.code}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <div class=\"five fields\">\r\n            <div class=\"eight wide field\">\r\n              <label>Payment Type</label>\r\n              <input type=\"text\" name=\"payment_type\" formControlName=\"payment_type\" readonly placeholder=\"Payment Type\">\r\n            </div>\r\n            <div class=\"eight wide field\"\r\n              [ngClass]=\"{'error': ((submitted && f.payment_amount.errors) && f.payment_amount.errors.required) }\">\r\n              <label>Payment Amount<span class=\"mandatory\">*</span></label>\r\n              <input type=\"text\" name=\"payment_amount\" formControlName=\"payment_amount\" placeholder=\"Payment Amount\"\r\n                name=\"payment_amount\">\r\n              <div class=\"validations\" *ngIf=\"payment_amount.errors?.pattern\">\r\n                Above field must be strictly Numeric Values.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <div class=\"five fields\">\r\n            <div class=\"eight wide field\">\r\n              <label>Reference Number</label>\r\n              <input type=\"text\" name=\"request_no\" formControlName=\"request_no\" placeholder=\"Reference Number\">\r\n              <div class=\"validations\" *ngIf=\"request_no.errors?.pattern\">\r\n                Above field must be strictly Numeric Values.\r\n              </div>\r\n            </div>\r\n            <div class=\"eight wide field\">\r\n              <label>Deposited By</label>\r\n              <input type=\"text\" name=\"request_initiator\" formControlName=\"request_initiator\"\r\n                placeholder=\"Deposited By\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- <h4 class=\"ui header\">Document Reference Attachment</h4> -->\r\n        <div class=\"field\">\r\n          <div class=\"fields\">\r\n            <div class=\"eight wide field\">\r\n              <label>Document Reference</label>\r\n              <!-- <input type=\"file\" formControlName=\"attachment\"  accept=\"image/*\" > -->\r\n              <input #file type=\"file\" accept='image/*' (change)=\"preview(file.files)\" />\r\n              <img [src]=\"imgURL\" height=\"200\" *ngIf=\"imgURL\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"field\">\r\n          <div class=\"sixteen wide field bookings_btn-panel\">\r\n            <button class=\"ui primary button float-sub-btn\">\r\n              Submit\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/layout/accounts/floating-deposits/floating-deposits-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/accounts/floating-deposits/floating-deposits-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: FloatingDepositsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatingDepositsRoutingModule", function() { return FloatingDepositsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _floating_deposits_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./floating-deposits.component */ "./src/app/layout/accounts/floating-deposits/floating-deposits.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: '', component: _floating_deposits_component__WEBPACK_IMPORTED_MODULE_1__["FloatingDepositsComponent"] },
];
let FloatingDepositsRoutingModule = class FloatingDepositsRoutingModule {
};
FloatingDepositsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], FloatingDepositsRoutingModule);



/***/ }),

/***/ "./src/app/layout/accounts/floating-deposits/floating-deposits.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/layout/accounts/floating-deposits/floating-deposits.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".outer-segment {\n  margin: 0px 20px 0px 15px;\n}\n\n.user_title {\n  margin: 0;\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n\n.ui.header {\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 600 !important;\n  line-height: 15px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.create_tab_title.corporate_staff {\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\n.outer-form,\n.outer_corpForm {\n  box-sizing: border-box;\n  border-radius: 5px;\n  border: 0.5px solid #808080;\n  margin: 45px 32px 111px 25px;\n}\n\n.ui.form.b2b_basic_form,\n.ui.form.corp_form {\n  margin: 17px 23px 25px 22px;\n}\n\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #E0E0E0;\n}\n\n.add_btn {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  margin: 20px;\n  font-weight: 500;\n  line-height: 15px;\n}\n\ninput {\n  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.2);\n  font-family: Lato, \"Helvetica Neue\", Arial, Helvetica, sans-serif;\n}\n\n.field input::-webkit-input-placeholder {\n  font-size: 14px;\n}\n\n.field input::-moz-placeholder {\n  font-size: 14px;\n}\n\n.field input::-ms-input-placeholder {\n  font-size: 14px;\n}\n\n.field input::placeholder {\n  font-size: 14px;\n}\n\n.dropdown .text {\n  font-size: 12px;\n}\n\n.create_btn {\n  box-sizing: border-box;\n  border-radius: 3px;\n  background-color: #3867b1;\n  border: 1px solid #FFF;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n  padding-right: 35px;\n  position: relative;\n  right: 30px;\n  bottom: 104px;\n}\n\n.create_text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  padding-left: 10px;\n}\n\n.corporate_input__placeholder-icon {\n  position: relative;\n  width: 18px;\n  bottom: 28px;\n  left: 9px;\n}\n\ndiv.upload {\n  box-sizing: border-box;\n  height: 15px;\n  width: 123px;\n  border-radius: 3px;\n  background-color: #FFF;\n  border: 0.5px solid #808080;\n  margin-top: -25px;\n  box-shadow: 0 0.25px 0.1px 0 rgba(0, 0, 0, 0.5);\n}\n\ndiv.upload input {\n  display: block !important;\n  width: 123px !important;\n  height: 15px !important;\n  opacity: 0 !important;\n  overflow: hidden !important;\n}\n\n.no_choosen {\n  height: 10px;\n  width: 46px;\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 9px;\n  position: relative;\n  left: 132px;\n  bottom: 20px;\n  line-height: 10px;\n}\n\n.file_choose {\n  position: relative;\n  left: 31px;\n  bottom: 10px;\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 9px;\n  line-height: 10px;\n}\n\n.docuButton {\n  height: 30px;\n  width: 409px;\n  background-color: #DFEAFB;\n}\n\n.subdivbutton {\n  padding-left: 1vh;\n  padding-top: 0.5vh;\n}\n\n.docuButtonSub {\n  background-color: white;\n  width: 15vh;\n}\n\ni {\n  color: #4F4F4F;\n}\n\n.booking-header {\n  font-style: normal;\n  font-weight: 700 !important;\n  font-size: 20px;\n  line-height: 23px;\n  color: #181B20;\n  margin: 24px auto 0px;\n  padding-left: 24px;\n}\n\n.outer-basic {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n}\n\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n}\n\n.containerBox {\n  border: solid;\n  box-sizing: border-box;\n  height: 423px;\n  width: 1065px;\n  border-radius: 5px;\n  border: 0.5px solid #808080;\n}\n\nh4 {\n  height: 17px;\n  width: 223px;\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  font-weight: 500;\n  line-height: 17px;\n}\n\n.bookings_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n\n.bookings_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n\n.bookings_pickers .input .icon {\n  opacity: 1;\n  z-index: 1;\n}\n\n.bookings_pickers .input .icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.bookings_pickers .input .icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n\n.bookings_pickers .input .search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.bookings_pickers .input .search.dropdown .search {\n  margin-left: 42px !important;\n}\n\n.bookings_pickers .input .search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n\n.ui.fluid.container {\n  padding: 28px;\n}\n\n.inputfile {\n  opacity: 0;\n  overflow: hidden;\n}\n\n.validations {\n  color: red;\n  font-size: x-small;\n}\n\n.ui.form .field > label {\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 10px;\n}\n\n.field {\n  margin-bottom: 12px !important;\n}\n\n.ui.fluid.container {\n  padding: 0px !important;\n  background: none;\n}\n\n.ui.fluid.container .bookings_btn-panel {\n  text-align: right;\n  padding: 0px 24px;\n}\n\n.ui.fluid.container .bookings_btn-panel .button {\n  margin-right: 0px;\n}\n\n@media (max-width: 1440px) {\n  .booking-header {\n    padding-left: 24px;\n  }\n}\n\n@media (max-width: 1280px) {\n  .booking-header {\n    padding-left: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FjY291bnRzL2Zsb2F0aW5nLWRlcG9zaXRzL0U6XFxCZWxhbFxccHJvamVjdHNcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcYWNjb3VudHNcXGZsb2F0aW5nLWRlcG9zaXRzXFxmbG9hdGluZy1kZXBvc2l0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2FjY291bnRzL2Zsb2F0aW5nLWRlcG9zaXRzL2Zsb2F0aW5nLWRlcG9zaXRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0NBQUE7RUFDQSx3Q0FBQTtBQ0NKOztBREVBO0VBQ0ksK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSw0Q0FBQTtBQ0NKOztBREVBOztFQUVJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FDQ0o7O0FERUE7O0VBRUksMkJBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnREFBQTtFQUNBLGlFQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERkE7RUFDSSxlQUFB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b3NpdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXItc2VnbWVudCB7XHJcbiAgICBtYXJnaW46IDBweCAyMHB4IDBweCAxNXB4O1xyXG59XHJcblxyXG4udXNlcl90aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxufVxyXG5cclxuLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLnVpLmhlYWRlciB7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLm1lbnU+Lml0ZW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI4NTcxNDI5cmVtIDAgMCAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLmJvdHRvbS5hdHRhY2hlZC5hY3RpdmUudGFiLnNlZ21lbnQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbn1cclxuXHJcbi5jcmVhdGVfdGFiX3RpdGxlLmNvcnBvcmF0ZV9zdGFmZiB7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG4udGFiLnNlZ21lbnQge1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi5vdXRlci1mb3JtLFxyXG4ub3V0ZXJfY29ycEZvcm0ge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgIzgwODA4MDtcclxuICAgIG1hcmdpbjogNDVweCAzMnB4IDExMXB4IDI1cHg7XHJcbn1cclxuXHJcbi51aS5mb3JtLmIyYl9iYXNpY19mb3JtLFxyXG4udWkuZm9ybS5jb3JwX2Zvcm0ge1xyXG4gICAgbWFyZ2luOiAxN3B4IDIzcHggMjVweCAyMnB4O1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNFMEUwRTA7XHJcbn1cclxuXHJcbi5hZGRfYnRuIHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBmb250LWZhbWlseTogTGF0bywgJ0hlbHZldGljYSBOZXVlJywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5kcm9wZG93biAudGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5jcmVhdGVfYnRuIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N2IxO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZGRjtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIGJvdHRvbTogMTA0cHg7XHJcbn1cclxuXHJcbi5jcmVhdGVfdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLmNvcnBvcmF0ZV9pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGJvdHRvbTogMjhweDtcclxuICAgIGxlZnQ6IDlweDtcclxufVxyXG5cclxuZGl2LnVwbG9hZCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDEyM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgIzgwODA4MDtcclxuICAgIG1hcmdpbi10b3A6IC0yNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjI1cHggMC4xcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbmRpdi51cGxvYWQgaW5wdXQge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMjNweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ub19jaG9vc2VuIHtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHdpZHRoOiA0NnB4O1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDEzMnB4O1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5maWxlX2Nob29zZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAzMXB4O1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZG9jdUJ1dHRvbiB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB3aWR0aDogNDA5cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREZFQUZCO1xyXG59XHJcblxyXG4uc3ViZGl2YnV0dG9uIHtcclxuICAgIHBhZGRpbmctbGVmdDogMXZoO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNXZoO1xyXG59XHJcblxyXG4uZG9jdUJ1dHRvblN1YiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHdpZHRoOiAxNXZoO1xyXG59XHJcblxyXG5pIHtcclxuICAgIGNvbG9yOiAjNEY0RjRGXHJcbn1cclxuXHJcbi5ib29raW5nLWhlYWRlciB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgIGNvbG9yOiAjMTgxQjIwO1xyXG4gICAgbWFyZ2luOiAyNHB4IGF1dG8gMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljRm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmNvbnRhaW5lckJveCB7XHJcbiAgICBib3JkZXI6IHNvbGlkO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGhlaWdodDogNDIzcHg7XHJcbiAgICB3aWR0aDogMTA2NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjODA4MDgwO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICB3aWR0aDogMjIzcHg7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxufVxyXG5cclxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IHtcclxuICAgICYuYm9va2luZ3NfZGF0ZXBpY2tlciB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEzOHB4XHJcbiAgICB9XHJcbiAgICAudWkuYmFzaWMuZmxvYXRpbmcuYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMTUyLCAxNTIsIDE1MiwgMC42KSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4gICAgfVxyXG4gICAgLmljb24ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgICAgICAmLmNhbCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLmRyb3Bkb3duIHtcclxuICAgICAgICB3aWR0aDogMjE4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgLnNlYXJjaCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZWZhdWx0LnRleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMCAwIDM4cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS5mbHVpZC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMjhweDtcclxufVxyXG5cclxuLmlucHV0ZmlsZSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnZhbGlkYXRpb25zIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbn1cclxuXHJcbi51aS5mb3JtIC5maWVsZD5sYWJlbCB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICBjb2xvcjogIzE4MUIyMDtcclxuICAgIG1hcmdpbjogMHB4IDBweCAxMHB4O1xyXG59XHJcblxyXG4uZmllbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udWkuZmx1aWQuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIC8vIHdpZHRoOiAxMTAwcHg7XHJcbiAgICAvLyBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIC5ib29raW5nc19idG4tcGFuZWwge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAyNHB4O1xyXG4gICAgICAgIC5idXR0b24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIC5ib29raW5nLWhlYWRlciB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAuYm9va2luZy1oZWFkZXIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIH1cclxufSIsIi5vdXRlci1zZWdtZW50IHtcbiAgbWFyZ2luOiAwcHggMjBweCAwcHggMTVweDtcbn1cblxuLnVzZXJfdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi51aS5oZWFkZXIge1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTVweDtcbn1cblxuLnVpLnRvcC5hdHRhY2hlZC5tZW51ID4gLml0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwLjI4NTcxNDI5cmVtIDAgMCAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xufVxuXG4udWkuYm90dG9tLmF0dGFjaGVkLmFjdGl2ZS50YWIuc2VnbWVudCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE3cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTdweDtcbn1cblxuLmNyZWF0ZV90YWJfdGl0bGUuY29ycG9yYXRlX3N0YWZmIHtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YWIuc2VnbWVudCB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4ub3V0ZXItZm9ybSxcbi5vdXRlcl9jb3JwRm9ybSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjODA4MDgwO1xuICBtYXJnaW46IDQ1cHggMzJweCAxMTFweCAyNXB4O1xufVxuXG4udWkuZm9ybS5iMmJfYmFzaWNfZm9ybSxcbi51aS5mb3JtLmNvcnBfZm9ybSB7XG4gIG1hcmdpbjogMTdweCAyM3B4IDI1cHggMjJweDtcbn1cblxuaHIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjRTBFMEUwO1xufVxuXG4uYWRkX2J0biB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW46IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xufVxuXG5pbnB1dCB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgZm9udC1mYW1pbHk6IExhdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxuLmZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmRyb3Bkb3duIC50ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY3JlYXRlX2J0biB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdiMTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGRjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAzMHB4O1xuICBib3R0b206IDEwNHB4O1xufVxuXG4uY3JlYXRlX3RleHQge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmNvcnBvcmF0ZV9pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE4cHg7XG4gIGJvdHRvbTogMjhweDtcbiAgbGVmdDogOXB4O1xufVxuXG5kaXYudXBsb2FkIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTIzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjODA4MDgwO1xuICBtYXJnaW4tdG9wOiAtMjVweDtcbiAgYm94LXNoYWRvdzogMCAwLjI1cHggMC4xcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbmRpdi51cGxvYWQgaW5wdXQge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB3aWR0aDogMTIzcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4ubm9fY2hvb3NlbiB7XG4gIGhlaWdodDogMTBweDtcbiAgd2lkdGg6IDQ2cHg7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA5cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTMycHg7XG4gIGJvdHRvbTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG59XG5cbi5maWxlX2Nob29zZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMzFweDtcbiAgYm90dG9tOiAxMHB4O1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBsaW5lLWhlaWdodDogMTBweDtcbn1cblxuLmRvY3VCdXR0b24ge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiA0MDlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RGRUFGQjtcbn1cblxuLnN1YmRpdmJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMXZoO1xuICBwYWRkaW5nLXRvcDogMC41dmg7XG59XG5cbi5kb2N1QnV0dG9uU3ViIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxNXZoO1xufVxuXG5pIHtcbiAgY29sb3I6ICM0RjRGNEY7XG59XG5cbi5ib29raW5nLWhlYWRlciB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBjb2xvcjogIzE4MUIyMDtcbiAgbWFyZ2luOiAyNHB4IGF1dG8gMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG59XG5cbi5vdXRlci1iYXNpYyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ub3V0ZXItYmFzaWNGb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmNvbnRhaW5lckJveCB7XG4gIGJvcmRlcjogc29saWQ7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogNDIzcHg7XG4gIHdpZHRoOiAxMDY1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjODA4MDgwO1xufVxuXG5oNCB7XG4gIGhlaWdodDogMTdweDtcbiAgd2lkdGg6IDIyM3B4O1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG59XG5cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dC5ib29raW5nc19kYXRlcGlja2VyIHtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgbWF4LXdpZHRoOiAxMzhweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAudWkuYmFzaWMuZmxvYXRpbmcuYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogcmdiYSgxNTIsIDE1MiwgMTUyLCAwLjYpICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDExcHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLmljb24ge1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxO1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbCB7XG4gIHdpZHRoOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5zZWFyY2guZHJvcGRvd24ge1xuICB3aWR0aDogMjE4cHg7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnNlYXJjaC5kcm9wZG93biAuc2VhcmNoIHtcbiAgbWFyZ2luLWxlZnQ6IDQycHggIWltcG9ydGFudDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuc2VhcmNoLmRyb3Bkb3duIC5kZWZhdWx0LnRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHggMCAwIDM4cHggIWltcG9ydGFudDtcbn1cblxuLnVpLmZsdWlkLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDI4cHg7XG59XG5cbi5pbnB1dGZpbGUge1xuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udmFsaWRhdGlvbnMge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IHgtc21hbGw7XG59XG5cbi51aS5mb3JtIC5maWVsZCA+IGxhYmVsIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBjb2xvcjogIzE4MUIyMDtcbiAgbWFyZ2luOiAwcHggMHB4IDEwcHg7XG59XG5cbi5maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDEycHggIWltcG9ydGFudDtcbn1cblxuLnVpLmZsdWlkLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLnVpLmZsdWlkLmNvbnRhaW5lciAuYm9va2luZ3NfYnRuLXBhbmVsIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDBweCAyNHB4O1xufVxuLnVpLmZsdWlkLmNvbnRhaW5lciAuYm9va2luZ3NfYnRuLXBhbmVsIC5idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAuYm9va2luZy1oZWFkZXIge1xuICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAuYm9va2luZy1oZWFkZXIge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/layout/accounts/floating-deposits/floating-deposits.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/accounts/floating-deposits/floating-deposits.component.ts ***!
  \**********************************************************************************/
/*! exports provided: FloatingDepositsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatingDepositsComponent", function() { return FloatingDepositsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/utils/common */ "./src/app/shared/utils/common.ts");
/* harmony import */ var src_app_shared_services_accounts_transactions_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/accounts/transactions.service */ "./src/app/shared/services/accounts/transactions.service.ts");









let FloatingDepositsComponent = 
// "organization_id" => $user['organisation_id'],
// "user_id" 	  	  => $user_id,
// "created_date" => $currentdate,
// "supplier_details" => json_encode(array('supplier-key'=>$request['supplier-key'],'supplier-name'=>$request['supplier-name']))
class FloatingDepositsComponent {
    constructor(commonService, router, toastr, fb, transactionsService, activeRoute) {
        this.commonService = commonService;
        this.router = router;
        this.toastr = toastr;
        this.fb = fb;
        this.transactionsService = transactionsService;
        this.activeRoute = activeRoute;
        this.topupSubtype = src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_7__["topupSubtype"];
        this.currencies = [];
        this.submitted = false;
        this.getInfo = [];
        this.organisationAccount = [];
        this.suppliers = [];
        let topup_id = this.activeRoute.snapshot.params.id;
        this.addFloatingForm = this.fb.group({
            supplier_data: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            agency_iata_num: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]*')]],
            agency_name: [''],
            agency_country: [''],
            agency_currency: [''],
            topup_type: ['Deposit'],
            topup_subtype: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            topup_purpose: ['Regular Topup'],
            available_balance: [''],
            request_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]*')]],
            request_initiator: [''],
            bank_name: [''],
            bank_account_no: [''],
            payment_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            payment_currency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            payment_amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[0-9]*')]],
            payment_type: ['Credit'],
            attachment: [''],
            topup_status: [''],
            bank_charge: [''],
            bank_charge_currency: ['']
        });
    }
    ngOnInit() {
        // call api her for get suppliers
        this.getCurrencyList();
        this.getOrganisationAccountData();
        this.getFloatingSupplierList();
    }
    get f() { return this.addFloatingForm.controls; }
    getCurrencyList() {
        this.commonService.getCurrencyList().subscribe((result) => {
            this.currencies = result.currencies;
        });
    }
    getFloatingSupplierList() {
        this.commonService.getFloatingSupplierList().subscribe((result) => {
            if (result.type == 'data') {
                this.suppliers = result.listData;
                // this.suppliers.map((ele, key) => {
                //   // if (key == '66') {
                //   //   ele.supplier = 'TPConnects Flights';
                //   // } else if (key == '65') {
                //   //   ele.supplier = 'Toursworld Hotels';
                //   // } else {
                //   //   ele.supplier = 'TPConnects '+ele.supplier;
                //   // }
                // })
            }
            else {
                this.toastr.error(`${result.msg}`, `${result.msg}`, {
                    timeOut: 10000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
                this.suppliers = [];
            }
        });
    }
    getOrganisationAccountData() {
        this.transactionsService.getOrganisationAccount().subscribe((result) => {
            if (result.type != 'error') {
                this.organisationAccount = result.data;
                this.addFloatingForm.patchValue({
                    agency_name: this.organisationAccount.name,
                    available_balance: this.organisationAccount['organisation_account.available_deposit'],
                    agency_country: this.organisationAccount['country.name'],
                    agency_currency: this.organisationAccount['currency.code'],
                    bank_name: this.organisationAccount['currency.code'],
                    bank_account_no: this.organisationAccount['currency.code'],
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
    submitAddFloating() {
        this.submitted = true;
        if (this.addFloatingForm.invalid) {
            return;
        }
        this.transactionsService.addFloatingRequest(this.addFloatingForm.value).subscribe((result) => {
            if (result.type != 'error') {
                this.toastr.success(`${result.msg}`, `${result.msg}`, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
                this.router.navigate(["accounts/transactions"]);
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
    preview(files) {
        if (files.length === 0)
            return;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            this.message = "Only images are supported.";
            return;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
            this.imgURL = reader.result;
            this.addFloatingForm.patchValue({ attachment: this.imgURL });
        };
    }
    ngAfterViewInit() {
        var scope = this;
        $(document).ready(function () {
            $('.ui.dropdown').dropdown();
            $('input[name="payment_date"]').daterangepicker({
                singleDatePicker: true,
                showDropdowns: true,
                minYear: 1901,
                // startDate: moment().format('YYYY-MM-DD'),
                autoUpdateInput: false,
                maxYear: parseInt(moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY'), 10)
            }, function (start, end, label) {
                var years = moment__WEBPACK_IMPORTED_MODULE_2__().diff(start, 'years');
                scope.addFloatingForm.patchValue({ 'payment_date': moment__WEBPACK_IMPORTED_MODULE_2__(start).format('YYYY-MM-DD') });
            });
        });
    }
    get payment_amount() {
        return this.addFloatingForm.get('payment_amount');
    }
    get agency_iata_num() {
        return this.addFloatingForm.get('agency_iata_num');
    }
    get request_no() {
        return this.addFloatingForm.get('request_no');
    }
};
FloatingDepositsComponent.ctorParameters = () => [
    { type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_shared_services_accounts_transactions_service__WEBPACK_IMPORTED_MODULE_8__["TransactionsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
FloatingDepositsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-floating-deposits',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./floating-deposits.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/accounts/floating-deposits/floating-deposits.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./floating-deposits.component.scss */ "./src/app/layout/accounts/floating-deposits/floating-deposits.component.scss")).default]
    })
    // "organization_id" => $user['organisation_id'],
    // "user_id" 	  	  => $user_id,
    // "created_date" => $currentdate,
    // "supplier_details" => json_encode(array('supplier-key'=>$request['supplier-key'],'supplier-name'=>$request['supplier-name']))
], FloatingDepositsComponent);



/***/ }),

/***/ "./src/app/layout/accounts/floating-deposits/floating-deposits.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/accounts/floating-deposits/floating-deposits.module.ts ***!
  \*******************************************************************************/
/*! exports provided: FloatingDepositsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatingDepositsModule", function() { return FloatingDepositsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _floating_deposits_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./floating-deposits.component */ "./src/app/layout/accounts/floating-deposits/floating-deposits.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _floating_deposits_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./floating-deposits-routing.module */ "./src/app/layout/accounts/floating-deposits/floating-deposits-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






let FloatingDepositsModule = class FloatingDepositsModule {
};
FloatingDepositsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_floating_deposits_component__WEBPACK_IMPORTED_MODULE_1__["FloatingDepositsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _floating_deposits_routing_module__WEBPACK_IMPORTED_MODULE_4__["FloatingDepositsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
        ]
    })
], FloatingDepositsModule);



/***/ })

}]);
//# sourceMappingURL=floating-deposits-floating-deposits-module-es2016.js.map