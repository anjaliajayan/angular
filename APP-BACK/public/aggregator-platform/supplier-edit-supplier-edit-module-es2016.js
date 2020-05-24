(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["supplier-edit-supplier-edit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/supplier-edit/supplier-edit.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/supplier-edit/supplier-edit.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui basic segment\">\r\n  <div class=\"ui fluid container\">\r\n    <h3><span class=\"update-header\">Update Supplier</span></h3>\r\n  </div>\r\n  <div class=\"ui fluid container supplier-edit\">\r\n    <div class=\"outer-basic result-block\">\r\n      <div class=\"outer-basicForm\">\r\n        <div class=\"ui\">\r\n          <form class=\"ui form\" #Form=\"ngForm\" [formGroup]=\"supplierUpdateForm\">\r\n            <div class=\"four fields\">\r\n              <div class=\"five wide field\">\r\n                <label>Supplier code</label>\r\n                <input type=\"text\" placeholder=\"Supplier code\" formControlName=\"supplier_code\" name=\"supplier_code\" disabled>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Email</label>\r\n                <input type=\"email\" placeholder=\"Email\" class=\"email\" formControlName=\"email\" name=\"email\" disabled>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Contact Number</label>\r\n                <input type=\"text\" placeholder=\"Contact number\" formControlName=\"contact\" name=\"contact\" disabled>\r\n              </div>\r\n            </div>\r\n            <div class=\"five fields\">\r\n              <div class=\"five wide field\">\r\n                <label>Select Country</label>\r\n                <select class=\"ui fluid search dropdownthree\" formControlName=\"country_id\" name=\"country_id\">\r\n                  <option class=\"item\" *ngFor=\"let country of countries\" value=\"{{country.country_id}}\">{{country.name}}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Select Organisation</label>\r\n                <select class=\"ui fluid search dropdownOne\" formControlName=\"organisation_id\" name=\"organisation_id\"\r\n                  required>\r\n                  <option class=\"item\" *ngFor=\"let agent of agents\" value=\"{{agent.agent_code}}\">{{agent.name}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Website Url</label>\r\n                <input type=\"text\" placeholder=\"Website Url\" formControlName=\"website\" name=\"website\">\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"five wide field\">\r\n                <label>Status</label>\r\n                <select class=\"ui fluid dropdownTwo \" formControlName=\"status\">\r\n                  <option *ngFor=\"let status of statusRow\" value=\"{{status.id}}\">{{status.value}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Credit Limit</label>\r\n                <div class=\"ui disabled input\">\r\n                  <input type=\"number\" placeholder=\"Credit Limit\" formControlName=\"credit_limit\" name=\"credit_limit\">\r\n                </div>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Credit Days</label>\r\n                <input type=\"number\" placeholder=\"Credit Days\" formControlName=\"credit_days\" name=\"credit_days\">\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"five wide field\">\r\n                <label>Currency</label>\r\n                <div class=\"ui disabled input\">\r\n                  <input type=\"text\" placeholder=\"Currency\" formControlName=\"currency_id\" name=\"currency_id\">\r\n                </div>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Notification Balance</label>\r\n                <div class=\"ui disabled input\">\r\n                  <input type=\"text\" placeholder=\"notification\" formControlName=\"notification\" name=\"notification\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <h4 class=\"ui header\">Supplier Products</h4>\r\n            <div class=\"ui grid\">\r\n              <div class=\"six column row\">\r\n                <div class=\"column\">\r\n                  <div class=\"ui disabled checkbox\">\r\n                    <input type=\"checkbox\" name=\"flight\" disabled>\r\n                    <label>Flight</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                  <div class=\"ui disabled checkbox\">\r\n                    <input type=\"checkbox\" name=\"hotel\" disabled>\r\n                    <label>Hotel</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                  <div class=\"ui disabled checkbox\">\r\n                    <input type=\"checkbox\" name=\"activities\" disabled>\r\n                    <label>Activities</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                  <div class=\"ui disabled checkbox\">\r\n                    <input type=\"checkbox\" name=\"car_hire\" disabled>\r\n                    <label>Car Hire</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                  <div class=\"ui disabled checkbox\">\r\n                    <input type=\"checkbox\" name=\"insurance\" disabled>\r\n                    <label>Travel Insurances</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- <h4 class=\"ui header\">After Sales Products</h4>\r\n            <div class=\"ui grid\">\r\n              <div class=\"six column row\">\r\n                <div class=\"column\">\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" name=\"reissue\" formControlName=\"reissue\">\r\n                    <label>Reissue</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                  <div class=\"ui  checkbox\">\r\n                    <input type=\"checkbox\" name=\"refund\" formControlName=\"refund\">\r\n                    <label>Refund</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                  <div class=\"ui  checkbox\">\r\n                    <input type=\"checkbox\" name=\"refund_same\" formControlName=\"refund_same\">\r\n                    <label>Refund Same Day</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                  <div class=\"ui  checkbox\">\r\n                    <input type=\"checkbox\" name=\"void_all\" formControlName=\"void_all\">\r\n                    <label>Void All</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                  <div class=\"ui disabled checkbox\">\r\n                    <input type=\"checkbox\" name=\"void_single\" formControlName=\"void_single\">\r\n                    <label>Void Single</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                  <div class=\"ui disabled checkbox\">\r\n                    <input type=\"checkbox\" name=\"split\" formControlName=\"split\">\r\n                    <label>Split</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"six column row\">\r\n                <div class=\"column\">\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" name=\"cancel\" formControlName=\"cancel\">\r\n                    <label>Cancel</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" name=\"hold\" formControlName=\"hold\">\r\n                    <label>Hold</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" name=\"reterive\" formControlName=\"reterive\">\r\n                    <label>Retrieve</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" name=\"free_service\" formControlName=\"free_service\">\r\n                    <label>Free Services</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" name=\"paid_service\" formControlName=\"paid_service\">\r\n                    <label>Paid Services</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" name=\"seats\" formControlName=\"seats\">\r\n                    <label>Seats</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"six column row\">\r\n                <div class=\"column\">\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" name=\"fare_rules\" formControlName=\"fare_rules\">\r\n                    <label>Fair rule Services</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                  <div class=\"ui disabled checkbox\">\r\n                    <input type=\"checkbox\" name=\"iata_card\" formControlName=\"iata_card\">\r\n                    <label>Iata card</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div> -->\r\n            <div class=\"bookings_btn-panel\">\r\n              <button class=\"ui primary button\" (click)=\"updateSupplier()\">Update</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/layout/setup-configuration/supplier-edit/supplier-edit-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/supplier-edit/supplier-edit-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: SupplierEditRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierEditRoutingModule", function() { return SupplierEditRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _supplier_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./supplier-edit.component */ "./src/app/layout/setup-configuration/supplier-edit/supplier-edit.component.ts");




const routes = [
    { path: '', component: _supplier_edit_component__WEBPACK_IMPORTED_MODULE_3__["SupplierEditComponent"] }
];
let SupplierEditRoutingModule = class SupplierEditRoutingModule {
};
SupplierEditRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SupplierEditRoutingModule);



/***/ }),

/***/ "./src/app/layout/setup-configuration/supplier-edit/supplier-edit.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/supplier-edit/supplier-edit.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".update-supplier {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 300;\n  line-height: 22px;\n}\n\n.update-header {\n  margin-left: 24px;\n  font-style: normal;\n  font-weight: 400 !important;\n  font-size: 20px;\n  line-height: 23px;\n  color: #4F4F4F;\n}\n\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n  padding: 0px;\n}\n\n.basic-header {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.ui .fluid.container {\n  padding: 0 25px;\n}\n\n.ui .right .floated {\n  margin-top: 1em;\n}\n\n.ui .form .fields .wide.field {\n  padding-bottom: 0.8em;\n}\n\n.ui .form .field > label {\n  font-weight: 400;\n}\n\n.ui.fluid.container {\n  padding: 0px !important;\n  background: none;\n  margin: 0;\n  margin-top: 24px;\n}\n\n.ui.fluid.container .outer-basicForm {\n  padding: 0px;\n}\n\n.ui.fluid.container .result-block {\n  padding-bottom: 72px !important;\n}\n\n.ui.fluid.container .bookings_btn-panel {\n  margin-top: 24px;\n}\n\n.ui.fluid.container .bookings_btn-panel button {\n  float: right;\n}\n\n.ui.fluid.container .ui.checkbox input:checked ~ .box:before, .ui.fluid.container .ui.checkbox input:checked ~ label:before {\n  border-color: #437ADA;\n}\n\n.ui.fluid.container .ui.checkbox input:checked ~ .box:after, .ui.fluid.container .ui.checkbox input:checked ~ label:after {\n  color: #437ADA;\n}\n\n.ui.basic.segment {\n  padding: 0px;\n  margin-bottom: 220px !important;\n}\n\n.ui.header {\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 600 !important;\n  line-height: 15px;\n  margin-bottom: 20px;\n}\n\n@media (max-width: 1440px) {\n  .update-header {\n    margin-left: 24px;\n  }\n}\n\n@media (max-width: 1280px) {\n  .update-header {\n    margin-left: 20px;\n  }\n}\n\n@media (max-width: 991px) {\n  .ui.grid > [class*=\"six column\"].row > .column {\n    width: 33% !important;\n    margin-bottom: 16px;\n  }\n}\n\n@media (max-width: 767px) {\n  .ui.grid > [class*=\"six column\"].row > .column {\n    width: 50% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vc3VwcGxpZXItZWRpdC9FOlxcQmVsYWxcXHByb2plY3RzXFxwcm9kdWN0aW9uLWJ1aWxkXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHNldHVwLWNvbmZpZ3VyYXRpb25cXHN1cHBsaWVyLWVkaXRcXHN1cHBsaWVyLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zZXR1cC1jb25maWd1cmF0aW9uL3N1cHBsaWVyLWVkaXQvc3VwcGxpZXItZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxpQ0FBQTtBQ0NKOztBREdJO0VBQ0ksZUFBQTtBQ0FSOztBREdRO0VBQ0ksZUFBQTtBQ0RaOztBRE1ZO0VBQ0kscUJBQUE7QUNKaEI7O0FET1E7RUFDSSxnQkFBQTtBQ0xaOztBRFVBO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ1BKOztBRFFJO0VBQ0ksWUFBQTtBQ05SOztBRFFJO0VBQ0ksK0JBQUE7QUNOUjs7QURRSTtFQUNJLGdCQUFBO0FDTlI7O0FET1E7RUFDSSxZQUFBO0FDTFo7O0FEUUk7RUFDSSxxQkFBQTtBQ05SOztBRFFJO0VBQ0ksY0FBQTtBQ05SOztBRFdBO0VBQ0ksWUFBQTtFQUNBLCtCQUFBO0FDUko7O0FEZUE7RUFDSSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDWko7O0FEZUE7RUFDSTtJQUNJLGlCQUFBO0VDWk47QUFDRjs7QURlQTtFQUNJO0lBQ0ksaUJBQUE7RUNiTjtBQUNGOztBRGdCQTtFQUNJO0lBQ0kscUJBQUE7SUFDQSxtQkFBQTtFQ2ROO0FBQ0Y7O0FEaUJBO0VBQ0k7SUFDSSxxQkFBQTtFQ2ZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc2V0dXAtY29uZmlndXJhdGlvbi9zdXBwbGllci1lZGl0L3N1cHBsaWVyLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBkYXRlLXN1cHBsaWVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxufVxyXG5cclxuLnVwZGF0ZS1oZWFkZXIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWNGb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4uYmFzaWMtaGVhZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnVpIHtcclxuICAgIC5mbHVpZC5jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjVweDtcclxuICAgIH1cclxuICAgIC5yaWdodCB7XHJcbiAgICAgICAgLmZsb2F0ZWQge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvcm0ge1xyXG4gICAgICAgIC5maWVsZHMge1xyXG4gICAgICAgICAgICAud2lkZS5maWVsZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC44ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmZpZWxkPmxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS5mbHVpZC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgIC5vdXRlci1iYXNpY0Zvcm0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuICAgIC5yZXN1bHQtYmxvY2sge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA3MnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYm9va2luZ3NfYnRuLXBhbmVsIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZH4uYm94OmJlZm9yZSwgLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWR+bGFiZWw6YmVmb3JlIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICM0MzdBREE7XHJcbiAgICB9XHJcbiAgICAudWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZH4uYm94OmFmdGVyLCAudWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZH5sYWJlbDphZnRlciB7XHJcbiAgICAgICAgY29sb3I6ICM0MzdBREE7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4udWkuYmFzaWMuc2VnbWVudCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMjBweCAhaW1wb3J0YW50O1xyXG4gICAgLy8gaDMge1xyXG4gICAgLy8gbWFyZ2luOiA0MHB4IGF1dG8gMHB4O1xyXG4gICAgLy8gd2lkdGg6IDExMDBweDtcclxuICAgIC8vIH1cclxufVxyXG5cclxuLnVpLmhlYWRlciB7ICAgIFxyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweFxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICAudXBkYXRlLWhlYWRlciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIC51cGRhdGUtaGVhZGVyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XHJcbiAgICAudWkuZ3JpZD5bY2xhc3MqPVwic2l4IGNvbHVtblwiXS5yb3c+LmNvbHVtbiB7XHJcbiAgICAgICAgd2lkdGg6IDMzJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAudWkuZ3JpZD5bY2xhc3MqPVwic2l4IGNvbHVtblwiXS5yb3c+LmNvbHVtbiB7XHJcbiAgICAgICAgd2lkdGg6IDUwJSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCIudXBkYXRlLXN1cHBsaWVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4udXBkYXRlLWhlYWRlciB7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgY29sb3I6ICM0RjRGNEY7XG59XG5cbi5vdXRlci1iYXNpY0Zvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5iYXNpYy1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLnVpIC5mbHVpZC5jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDI1cHg7XG59XG4udWkgLnJpZ2h0IC5mbG9hdGVkIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuLnVpIC5mb3JtIC5maWVsZHMgLndpZGUuZmllbGQge1xuICBwYWRkaW5nLWJvdHRvbTogMC44ZW07XG59XG4udWkgLmZvcm0gLmZpZWxkID4gbGFiZWwge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4udWkuZmx1aWQuY29udGFpbmVyIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbi51aS5mbHVpZC5jb250YWluZXIgLm91dGVyLWJhc2ljRm9ybSB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi51aS5mbHVpZC5jb250YWluZXIgLnJlc3VsdC1ibG9jayB7XG4gIHBhZGRpbmctYm90dG9tOiA3MnB4ICFpbXBvcnRhbnQ7XG59XG4udWkuZmx1aWQuY29udGFpbmVyIC5ib29raW5nc19idG4tcGFuZWwge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuLnVpLmZsdWlkLmNvbnRhaW5lciAuYm9va2luZ3NfYnRuLXBhbmVsIGJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi51aS5mbHVpZC5jb250YWluZXIgLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuYm94OmJlZm9yZSwgLnVpLmZsdWlkLmNvbnRhaW5lciAudWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzQzN0FEQTtcbn1cbi51aS5mbHVpZC5jb250YWluZXIgLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuYm94OmFmdGVyLCAudWkuZmx1aWQuY29udGFpbmVyIC51aS5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YWZ0ZXIge1xuICBjb2xvcjogIzQzN0FEQTtcbn1cblxuLnVpLmJhc2ljLnNlZ21lbnQge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi51aS5oZWFkZXIge1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAudXBkYXRlLWhlYWRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgLnVwZGF0ZS1oZWFkZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnVpLmdyaWQgPiBbY2xhc3MqPVwic2l4IGNvbHVtblwiXS5yb3cgPiAuY29sdW1uIHtcbiAgICB3aWR0aDogMzMlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC51aS5ncmlkID4gW2NsYXNzKj1cInNpeCBjb2x1bW5cIl0ucm93ID4gLmNvbHVtbiB7XG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/setup-configuration/supplier-edit/supplier-edit.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/supplier-edit/supplier-edit.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SupplierEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierEditComponent", function() { return SupplierEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/report/report.service */ "./src/app/shared/services/report/report.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/setup-config/setup-config.service */ "./src/app/shared/services/setup-config/setup-config.service.ts");
/* harmony import */ var _shared_utils_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/utils/common */ "./src/app/shared/utils/common.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








let SupplierEditComponent = class SupplierEditComponent {
    constructor(fb, reportService, toastr, activeRoute, supplierService, router) {
        this.fb = fb;
        this.reportService = reportService;
        this.toastr = toastr;
        this.activeRoute = activeRoute;
        this.supplierService = supplierService;
        this.router = router;
        this.agents = [];
        this.countries = [];
        this.supplierInfo = {};
        this.statusRow = _shared_utils_common__WEBPACK_IMPORTED_MODULE_6__["statusRow"];
        this.supplierUpdateForm = this.fb.group({
            id: [''],
            credit_limit: [''],
            supplier_code: [''],
            contact: [''],
            country_id: [''],
            email: [''],
            credit_days: [''],
            website: [''],
            status: [''],
            organisation_id: [''],
            currency_id: [''],
            notification: [''],
            reissue: [''],
            refund: [''],
            refund_same: [''],
            void_all: [''],
            void_single: [''],
            split: [''],
            cancel: [''],
            hold: [''],
            reterive: [''],
            free_service: [''],
            paid_service: [''],
            seats: [''],
            fare_rules: [''],
            iata_card: [''],
            is_hotel: [''],
            is_flight: [''],
            is_holidays: [''],
            is_activities: [''],
            is_car: [''],
            is_transfers: [''],
            is_visa: [''],
            is_insurance: [''],
            short_code: [''],
            supplier_id: [''],
            isHotel: [''],
            isFlight: [''],
            isHoliday: [''],
            isActivity: [''],
            isCarhire: [''],
            isTransfer: [''],
            isVisa: [''],
            isInsurance: [''],
            name: ['']
        });
        this.updateSupplier = () => {
            console.log(this.supplierUpdateForm.value);
            let supplier_id = this.supplierUpdateForm.value.id;
            console.log(supplier_id);
            let updateForm;
            updateForm = this.supplierUpdateForm.value;
            this.supplierService.updateSupplier(supplier_id, updateForm).subscribe((result) => {
                if (result.type == 'error') {
                    this.toastr.error(`${result.msg}`, `${result.msg}`, {
                        timeOut: 1000,
                        progressBar: true,
                        progressAnimation: 'decreasing',
                        positionClass: 'toast-bottom-right'
                    });
                }
                else {
                    this.toastr.info(`${result.msg}`, `${result.msg}`, {
                        timeOut: 1000,
                        progressBar: true,
                        progressAnimation: 'decreasing',
                        positionClass: 'toast-bottom-right'
                    });
                    // this.router.navigate(['user-role-management/list-user'])
                }
            });
        };
        let supplier_id = this.activeRoute.snapshot.params.id;
        // Get country list
        this.getSupplierInfo(supplier_id);
    }
    ngOnInit() {
        this.fetchAllAgents();
        this.fetchAllCountries();
    }
    ngAfterViewInit() {
        $(document).ready(function () {
            $('.ui.dropdown').dropdown();
            $('.dropdownOne').dropdown({ placeholder: 'choose Organisation' });
            $('.dropdownTwo').dropdown({ placeholder: 'choose status' });
            $('.dropdownthree').dropdown({ placeholder: 'choose Country' });
            $('.ui.dropdown').dropdown('refresh');
        });
    }
    fetchAllAgents() {
        this.reportService.GetAllAgents().subscribe((res) => {
            if (res.type != 'error') {
                if (res.Organization.length != 0) {
                    this.agents = res.Organization;
                }
                else {
                    this.toastr.info(`There is no agents available`, ``, {
                        timeOut: 1000,
                        progressBar: false,
                        positionClass: 'toast-bottom-right'
                    });
                }
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
    fetchAllCountries() {
        this.supplierService.GetAllCountries().subscribe((res) => {
            if (res.type != 'error') {
                if (res.data.length != 0) {
                    res.data.forEach(element => {
                        this.countries.push(element);
                    });
                }
                else {
                    this.toastr.info(`There is no agents available`, ``, {
                        timeOut: 1000,
                        progressBar: false,
                        positionClass: 'toast-bottom-right'
                    });
                }
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
    getSupplierInfo(supplier_id) {
        this.supplierService.getSupplier(supplier_id).subscribe((res) => {
            console.log(res.result.name);
            if (res.type != 'error') {
                this.supplierInfo = res.result;
                if (res.result.reissue != 0) {
                    this.reissue = true;
                }
                else {
                    this.reissue = false;
                }
                if (res.result.refund != 0) {
                    this.refund = true;
                }
                else {
                    this.refund = false;
                }
                if (res.result.refund_same != 0) {
                    this.refund_same = true;
                }
                else {
                    this.refund_same = false;
                }
                if (res.result.void_all != 0) {
                    this.void_all = true;
                }
                else {
                    this.void_all = false;
                }
                if (res.result.void_single != 0) {
                    this.void_single = true;
                }
                else {
                    this.void_single = false;
                }
                if (res.result.void_single != 0) {
                    this.void_single = true;
                }
                else {
                    this.void_single = false;
                }
                if (res.result.split != 0) {
                    this.split = true;
                }
                else {
                    this.split = false;
                }
                if (res.result.cancel != 0) {
                    this.cancel = true;
                }
                else {
                    this.cancel = false;
                }
                if (res.result.hold != 0) {
                    this.hold = true;
                }
                else {
                    this.hold = false;
                }
                if (res.result.reterive != 0) {
                    this.reterive = true;
                }
                else {
                    this.reterive = false;
                }
                if (res.result.free_service != 0) {
                    this.free_service = true;
                }
                else {
                    this.free_service = false;
                }
                if (res.result.paid_service != 0) {
                    this.paid_service = true;
                }
                else {
                    this.paid_service = false;
                }
                if (res.result.seats != 0) {
                    this.seats = true;
                }
                else {
                    this.seats = false;
                }
                if (res.result.fare_rules != 0) {
                    this.fare_rules = true;
                }
                else {
                    this.fare_rules = false;
                }
                if (res.result.iata_card != 0) {
                    this.iata_card = true;
                }
                else {
                    this.iata_card = false;
                }
                if (res.result.status != 0) {
                    this.status = true;
                }
                else {
                    this.status = false;
                }
                if (res.result.is_hotel != 0) {
                    this.is_hotel = true;
                }
                else {
                    this.is_hotel = false;
                }
                if (res.result.is_flight != 0) {
                    this.is_flight = true;
                }
                else {
                    this.is_flight = false;
                }
                if (res.result.is_activities != 0) {
                    this.is_activities = true;
                }
                else {
                    this.is_activities = false;
                }
                if (res.result.is_car != 0) {
                    this.is_car = true;
                }
                else {
                    this.is_car = false;
                }
                if (res.result.is_holidays != 0) {
                    this.is_holidays = true;
                }
                else {
                    this.is_holidays = false;
                }
                if (res.result.is_insurance != 0) {
                    this.is_insurance = true;
                }
                else {
                    this.is_insurance = false;
                }
                if (res.result.is_transfers != 0) {
                    this.is_transfers = true;
                }
                else {
                    this.is_transfers = false;
                }
                if (res.result.is_visa != 0) {
                    this.is_visa = true;
                }
                else {
                    this.is_visa = false;
                }
                if (res.result.short_code != null) {
                    this.short_code = res.result.short_code;
                }
                else {
                    this.short_code = "";
                }
                console.log("status", res.result.status);
                this.supplierUpdateForm.patchValue({
                    id: supplier_id,
                    website: res.result.website,
                    email: res.result.email,
                    contact: res.result.contact,
                    supplier_code: res.result.supplier_code,
                    credit_days: res.result.credit_days,
                    credit_limit: res.result.credit_limit,
                    notification: res.result.credit_limit,
                    organisation_id: res.result.organisation_id,
                    currency_id: res.currency.currency_id,
                    country_id: res.country.country_id,
                    status: this.status,
                    reissue: this.reissue,
                    refund: this.refund,
                    refund_same: this.refund_same,
                    void_all: this.void_all,
                    void_single: this.void_single,
                    split: this.split,
                    cancel: this.cancel,
                    hold: this.hold,
                    reterive: this.reterive,
                    free_service: this.free_service,
                    paid_service: this.paid_service,
                    seats: this.seats,
                    fare_rules: this.fare_rules,
                    iata_card: this.iata_card,
                    short_code: this.short_code,
                    is_hotel: this.is_hotel,
                    is_flight: this.is_flight,
                    is_holidays: this.is_holidays,
                    is_activities: this.is_activities,
                    is_car: this.is_car,
                    is_transfers: this.is_transfers,
                    is_visa: this.is_visa,
                    is_insurance: this.is_insurance,
                    supplier_id: supplier_id,
                    isHotel: this.is_hotel,
                    isFlight: this.is_flight,
                    isHoliday: this.is_holidays,
                    isActivity: this.is_activities,
                    isCarhire: this.is_car,
                    isTransfer: this.is_transfers,
                    isVisa: this.is_visa,
                    isInsurance: this.is_insurance,
                    name: ''
                });
            }
            // this.router.navigate(['user-role-management/list-user'])
        });
    }
};
SupplierEditComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_5__["SetupConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
SupplierEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-supplier-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./supplier-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/supplier-edit/supplier-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./supplier-edit.component.scss */ "./src/app/layout/setup-configuration/supplier-edit/supplier-edit.component.scss")).default]
    })
], SupplierEditComponent);



/***/ }),

/***/ "./src/app/layout/setup-configuration/supplier-edit/supplier-edit.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/supplier-edit/supplier-edit.module.ts ***!
  \**********************************************************************************/
/*! exports provided: SupplierEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupplierEditModule", function() { return SupplierEditModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _supplier_edit_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./supplier-edit-routing.module */ "./src/app/layout/setup-configuration/supplier-edit/supplier-edit-routing.module.ts");
/* harmony import */ var _supplier_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./supplier-edit.component */ "./src/app/layout/setup-configuration/supplier-edit/supplier-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






let SupplierEditModule = class SupplierEditModule {
};
SupplierEditModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_supplier_edit_component__WEBPACK_IMPORTED_MODULE_4__["SupplierEditComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _supplier_edit_routing_module__WEBPACK_IMPORTED_MODULE_3__["SupplierEditRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]
    })
], SupplierEditModule);



/***/ })

}]);
//# sourceMappingURL=supplier-edit-supplier-edit-module-es2016.js.map