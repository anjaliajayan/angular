function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["supplier-edit-supplier-edit-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/supplier-edit/supplier-edit.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/supplier-edit/supplier-edit.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSetupConfigurationSupplierEditSupplierEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui basic segment\">\r\n  <div class=\"ui fluid container\">\r\n    <h3><span class=\"update-header\">Update Supplier</span></h3>\r\n  </div>\r\n  <div class=\"ui fluid container supplier-edit\">\r\n    <div class=\"outer-basic result-block\">\r\n      <div class=\"outer-basicForm\">\r\n        <div class=\"ui\">\r\n          <form class=\"ui form\" #Form=\"ngForm\" [formGroup]=\"supplierUpdateForm\">\r\n            <div class=\"four fields\">\r\n              <div class=\"five wide field\">\r\n                <label>Supplier code</label>\r\n                <input type=\"text\" placeholder=\"Supplier code\" formControlName=\"supplier_code\" name=\"supplier_code\" disabled>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Email</label>\r\n                <input type=\"email\" placeholder=\"Email\" formControlName=\"email\" name=\"email\" disabled>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Contact Number</label>\r\n                <input type=\"text\" placeholder=\"Contact number\" formControlName=\"contact\" name=\"contact\" disabled>\r\n              </div>\r\n            </div>\r\n            <div class=\"five fields\">\r\n              <div class=\"five wide field\">\r\n                <label>Select Country</label>\r\n                <select class=\"ui fluid search dropdownthree\" formControlName=\"country_id\" name=\"country_id\" disabled>\r\n                  <option class=\"item\" *ngFor=\"let country of countries\" value=\"{{country.country_id}}\">{{country.name}}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Select Organisation</label>\r\n                <select class=\"ui fluid search dropdownOne\" formControlName=\"organisation_id\" name=\"organisation_id\"\r\n                  required>\r\n                  <option class=\"item\" *ngFor=\"let agent of agents\" value=\"{{agent.agent_code}}\">{{agent.name}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Website Url</label>\r\n                <input type=\"text\" placeholder=\"Website Url\" formControlName=\"website\" name=\"website\">\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"five wide field\">\r\n                <label>Status</label>\r\n                <select class=\"ui fluid dropdownTwo \" formControlName=\"status\">\r\n                  <option *ngFor=\"let status of statusRow\" value=\"{{status.id}}\">{{status.value}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Credit Limit</label>\r\n                <div class=\"ui disabled input\">\r\n                  <input type=\"number\" placeholder=\"Credit Limit\" formControlName=\"credit_limit\" name=\"credit_limit\">\r\n                </div>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Credit Days</label>\r\n                <input type=\"number\" placeholder=\"Credit Days\" formControlName=\"credit_days\" name=\"credit_days\">\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"five wide field\">\r\n                <label>Currency</label>\r\n                <div class=\"ui disabled input\">\r\n                  <input type=\"text\" placeholder=\"Currency\" formControlName=\"currency_id\" name=\"currency_id\">\r\n                </div>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Notification Balance</label>\r\n                <div class=\"ui disabled input\">\r\n                  <input type=\"text\" placeholder=\"notification\" formControlName=\"notification\" name=\"notification\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <h4 class=\"ui header\">After Sales Products</h4>\r\n            <div class=\"five fields\">\r\n              <div class=\"four wide field\">\r\n              </div>\r\n            </div>\r\n            <div class=\"ui grid\">\r\n              <div class=\"six column row\">\r\n                <div class=\"column\">\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" name=\"reissue\" formControlName=\"reissue\">\r\n                    <label>Reissue</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                  <div class=\"ui  checkbox\">\r\n                    <input type=\"checkbox\" name=\"refund\" formControlName=\"refund\">\r\n                    <label>Refund</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                  <div class=\"ui  checkbox\">\r\n                    <input type=\"checkbox\" name=\"refund_same\" formControlName=\"refund_same\">\r\n                    <label>Refund Same Day</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                  <div class=\"ui  checkbox\">\r\n                    <input type=\"checkbox\" name=\"void_all\" formControlName=\"void_all\">\r\n                    <label>Void All</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                  <div class=\"ui disabled checkbox\">\r\n                    <input type=\"checkbox\" name=\"void_single\" formControlName=\"void_single\">\r\n                    <label>Void Single</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                  <div class=\"ui disabled checkbox\">\r\n                    <input type=\"checkbox\" name=\"split\" formControlName=\"split\">\r\n                    <label>Split</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"six column row\">\r\n                <div class=\"column\">\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" name=\"cancel\" formControlName=\"cancel\">\r\n                    <label>Cancel</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" name=\"hold\" formControlName=\"hold\">\r\n                    <label>Hold</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" name=\"reterive\" formControlName=\"reterive\">\r\n                    <label>Retrieve</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" name=\"free_service\" formControlName=\"free_service\">\r\n                    <label>Free Services</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" name=\"paid_service\" formControlName=\"paid_service\">\r\n                    <label>Paid Services</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" name=\"seats\" formControlName=\"seats\">\r\n                    <label>Seats</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"six column row\">\r\n                <div class=\"column\">\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" name=\"fare_rules\" formControlName=\"fare_rules\">\r\n                    <label>Fair rule Services</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"column\">\r\n                  <div class=\"ui disabled checkbox\">\r\n                    <input type=\"checkbox\" name=\"iata_card\" formControlName=\"iata_card\">\r\n                    <label>Iata card</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"bookings_btn-panel\">\r\n              <button class=\"ui primary button\" (click)=\"updateSupplier()\">Update</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/layout/setup-configuration/supplier-edit/supplier-edit-routing.module.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/layout/setup-configuration/supplier-edit/supplier-edit-routing.module.ts ***!
    \******************************************************************************************/

  /*! exports provided: SupplierEditRoutingModule */

  /***/
  function srcAppLayoutSetupConfigurationSupplierEditSupplierEditRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupplierEditRoutingModule", function () {
      return SupplierEditRoutingModule;
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


    var _supplier_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./supplier-edit.component */
    "./src/app/layout/setup-configuration/supplier-edit/supplier-edit.component.ts");

    var routes = [{
      path: '',
      component: _supplier_edit_component__WEBPACK_IMPORTED_MODULE_3__["SupplierEditComponent"]
    }];

    var SupplierEditRoutingModule = function SupplierEditRoutingModule() {
      _classCallCheck(this, SupplierEditRoutingModule);
    };

    SupplierEditRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SupplierEditRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/setup-configuration/supplier-edit/supplier-edit.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/layout/setup-configuration/supplier-edit/supplier-edit.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSetupConfigurationSupplierEditSupplierEditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".update-supplier {\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 300;\n  line-height: 22px;\n}\n\n.update-header {\n  margin-left: 24px;\n  font-style: normal;\n  font-weight: 700 !important;\n  font-size: 20px;\n  line-height: 23px;\n  color: #181B20;\n}\n\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n  padding: 0px;\n}\n\n.basic-header {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.ui .fluid.container {\n  padding: 0 25px;\n}\n\n.ui .right .floated {\n  margin-top: 1em;\n}\n\n.ui .form .fields .wide.field {\n  padding-bottom: 0.8em;\n}\n\n.ui .form .field > label {\n  font-weight: 400;\n}\n\n.ui.fluid.container {\n  padding: 0px !important;\n  background: none;\n  margin: 0;\n  margin-top: 24px;\n}\n\n.ui.fluid.container .outer-basicForm {\n  padding: 0px;\n}\n\n.ui.fluid.container .result-block {\n  padding-bottom: 72px !important;\n}\n\n.ui.fluid.container .bookings_btn-panel {\n  position: relative;\n  top: 32px;\n  right: -24px;\n}\n\n.ui.fluid.container .bookings_btn-panel button {\n  float: right;\n  margin-right: 24px;\n  margin-top: -32px;\n}\n\n.ui.fluid.container .ui.checkbox label:before {\n  border-radius: 50%;\n}\n\n.ui.fluid.container .ui.checkbox input:checked ~ .box:before, .ui.fluid.container .ui.checkbox input:checked ~ label:before {\n  border-color: #437ADA;\n}\n\n.ui.fluid.container .ui.checkbox input:checked ~ .box:after, .ui.fluid.container .ui.checkbox input:checked ~ label:after {\n  color: #437ADA;\n}\n\n.ui.basic.segment {\n  padding: 0px;\n  margin-bottom: 220px !important;\n}\n\n.ui.header {\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 600 !important;\n  line-height: 15px;\n  margin-bottom: 20px;\n}\n\n@media (max-width: 1440px) {\n  .update-header {\n    margin-left: 24px;\n  }\n}\n\n@media (max-width: 1280px) {\n  .update-header {\n    margin-left: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vc3VwcGxpZXItZWRpdC9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHNldHVwLWNvbmZpZ3VyYXRpb25cXHN1cHBsaWVyLWVkaXRcXHN1cHBsaWVyLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zZXR1cC1jb25maWd1cmF0aW9uL3N1cHBsaWVyLWVkaXQvc3VwcGxpZXItZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxpQ0FBQTtBQ0NKOztBREdJO0VBQ0ksZUFBQTtBQ0FSOztBREdRO0VBQ0ksZUFBQTtBQ0RaOztBRE1ZO0VBQ0kscUJBQUE7QUNKaEI7O0FET1E7RUFDSSxnQkFBQTtBQ0xaOztBRFVBO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ1BKOztBRFFJO0VBQ0ksWUFBQTtBQ05SOztBRFFJO0VBQ0ksK0JBQUE7QUNOUjs7QURRSTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNOUjs7QURPUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDTFo7O0FEUUk7RUFDSSxrQkFBQTtBQ05SOztBRFFJO0VBQ0kscUJBQUE7QUNOUjs7QURRSTtFQUNJLGNBQUE7QUNOUjs7QURXQTtFQUNJLFlBQUE7RUFDQSwrQkFBQTtBQ1JKOztBRGVBO0VBQ0ksY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ1pKOztBRGVBO0VBQ0k7SUFDSSxpQkFBQTtFQ1pOO0FBQ0Y7O0FEZUE7RUFDSTtJQUNJLGlCQUFBO0VDYk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zZXR1cC1jb25maWd1cmF0aW9uL3N1cHBsaWVyLWVkaXQvc3VwcGxpZXItZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGRhdGUtc3VwcGxpZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG59XHJcblxyXG4udXBkYXRlLWhlYWRlciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgY29sb3I6ICMxODFCMjA7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpY0Zvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5iYXNpYy1oZWFkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udWkge1xyXG4gICAgLmZsdWlkLmNvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogMCAyNXB4O1xyXG4gICAgfVxyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgICAuZmxvYXRlZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZm9ybSB7XHJcbiAgICAgICAgLmZpZWxkcyB7XHJcbiAgICAgICAgICAgIC53aWRlLmZpZWxkIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjhlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZmllbGQ+bGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnVpLmZsdWlkLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgLm91dGVyLWJhc2ljRm9ybSB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgfVxyXG4gICAgLnJlc3VsdC1ibG9jayB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDcycHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5ib29raW5nc19idG4tcGFuZWwge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDMycHg7XHJcbiAgICAgICAgcmlnaHQ6IC0yNHB4O1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMzJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudWkuY2hlY2tib3ggbGFiZWw6YmVmb3JlIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICAudWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZH4uYm94OmJlZm9yZSwgLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWR+bGFiZWw6YmVmb3JlIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICM0MzdBREE7XHJcbiAgICB9XHJcbiAgICAudWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZH4uYm94OmFmdGVyLCAudWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZH5sYWJlbDphZnRlciB7XHJcbiAgICAgICAgY29sb3I6ICM0MzdBREE7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4udWkuYmFzaWMuc2VnbWVudCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMjBweCAhaW1wb3J0YW50O1xyXG4gICAgLy8gaDMge1xyXG4gICAgLy8gbWFyZ2luOiA0MHB4IGF1dG8gMHB4O1xyXG4gICAgLy8gd2lkdGg6IDExMDBweDtcclxuICAgIC8vIH1cclxufVxyXG5cclxuLnVpLmhlYWRlciB7ICAgIFxyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweFxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICAudXBkYXRlLWhlYWRlciB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIC51cGRhdGUtaGVhZGVyIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxufSAiLCIudXBkYXRlLXN1cHBsaWVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4udXBkYXRlLWhlYWRlciB7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgY29sb3I6ICMxODFCMjA7XG59XG5cbi5vdXRlci1iYXNpY0Zvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5iYXNpYy1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLnVpIC5mbHVpZC5jb250YWluZXIge1xuICBwYWRkaW5nOiAwIDI1cHg7XG59XG4udWkgLnJpZ2h0IC5mbG9hdGVkIHtcbiAgbWFyZ2luLXRvcDogMWVtO1xufVxuLnVpIC5mb3JtIC5maWVsZHMgLndpZGUuZmllbGQge1xuICBwYWRkaW5nLWJvdHRvbTogMC44ZW07XG59XG4udWkgLmZvcm0gLmZpZWxkID4gbGFiZWwge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4udWkuZmx1aWQuY29udGFpbmVyIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbi51aS5mbHVpZC5jb250YWluZXIgLm91dGVyLWJhc2ljRm9ybSB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi51aS5mbHVpZC5jb250YWluZXIgLnJlc3VsdC1ibG9jayB7XG4gIHBhZGRpbmctYm90dG9tOiA3MnB4ICFpbXBvcnRhbnQ7XG59XG4udWkuZmx1aWQuY29udGFpbmVyIC5ib29raW5nc19idG4tcGFuZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMzJweDtcbiAgcmlnaHQ6IC0yNHB4O1xufVxuLnVpLmZsdWlkLmNvbnRhaW5lciAuYm9va2luZ3NfYnRuLXBhbmVsIGJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICBtYXJnaW4tdG9wOiAtMzJweDtcbn1cbi51aS5mbHVpZC5jb250YWluZXIgLnVpLmNoZWNrYm94IGxhYmVsOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi51aS5mbHVpZC5jb250YWluZXIgLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuYm94OmJlZm9yZSwgLnVpLmZsdWlkLmNvbnRhaW5lciAudWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzQzN0FEQTtcbn1cbi51aS5mbHVpZC5jb250YWluZXIgLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuYm94OmFmdGVyLCAudWkuZmx1aWQuY29udGFpbmVyIC51aS5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YWZ0ZXIge1xuICBjb2xvcjogIzQzN0FEQTtcbn1cblxuLnVpLmJhc2ljLnNlZ21lbnQge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIyMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi51aS5oZWFkZXIge1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAudXBkYXRlLWhlYWRlciB7XG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgLnVwZGF0ZS1oZWFkZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/layout/setup-configuration/supplier-edit/supplier-edit.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/layout/setup-configuration/supplier-edit/supplier-edit.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: SupplierEditComponent */

  /***/
  function srcAppLayoutSetupConfigurationSupplierEditSupplierEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupplierEditComponent", function () {
      return SupplierEditComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/report/report.service */
    "./src/app/shared/services/report/report.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/setup-config/setup-config.service */
    "./src/app/shared/services/setup-config/setup-config.service.ts");
    /* harmony import */


    var _shared_utils_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/utils/common */
    "./src/app/shared/utils/common.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SupplierEditComponent =
    /*#__PURE__*/
    function () {
      function SupplierEditComponent(fb, reportService, toastr, activeRoute, supplierService, router) {
        var _this = this;

        _classCallCheck(this, SupplierEditComponent);

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

        this.updateSupplier = function () {
          console.log(_this.supplierUpdateForm.value);
          var supplier_id = _this.supplierUpdateForm.value.id;
          console.log(supplier_id);
          var updateForm;
          updateForm = _this.supplierUpdateForm.value;

          _this.supplierService.updateSupplier(supplier_id, updateForm).subscribe(function (result) {
            if (result.type == 'error') {
              _this.toastr.error("".concat(result.msg), "".concat(result.msg), {
                timeOut: 1000,
                progressBar: true,
                progressAnimation: 'decreasing',
                positionClass: 'toast-bottom-right'
              });
            } else {
              _this.toastr.info("".concat(result.msg), "".concat(result.msg), {
                timeOut: 1000,
                progressBar: true,
                progressAnimation: 'decreasing',
                positionClass: 'toast-bottom-right'
              }); // this.router.navigate(['user-role-management/list-user'])

            }
          });
        };

        var supplier_id = this.activeRoute.snapshot.params.id; // Get country list

        this.getSupplierInfo(supplier_id);
      }

      _createClass(SupplierEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fetchAllAgents();
          this.fetchAllCountries();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          $(document).ready(function () {
            $('.ui.dropdown').dropdown();
            $('.dropdownOne').dropdown({
              placeholder: 'choose Organisation'
            });
            $('.dropdownTwo').dropdown({
              placeholder: 'choose status'
            });
            $('.dropdownthree').dropdown({
              placeholder: 'choose Country'
            });
            $('.ui.dropdown').dropdown('refresh');
          });
        }
      }, {
        key: "fetchAllAgents",
        value: function fetchAllAgents() {
          var _this2 = this;

          this.reportService.GetAllAgents().subscribe(function (res) {
            if (res.type != 'error') {
              if (res.Organization.length != 0) {
                _this2.agents = res.Organization;
              } else {
                _this2.toastr.info("There is no agents available", "", {
                  timeOut: 1000,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });
              }
            } else {
              _this2.toastr.error("".concat(res.msg), "".concat(res.msg), {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "fetchAllCountries",
        value: function fetchAllCountries() {
          var _this3 = this;

          this.supplierService.GetAllCountries().subscribe(function (res) {
            if (res.type != 'error') {
              if (res.data.length != 0) {
                res.data.forEach(function (element) {
                  _this3.countries.push(element);
                });
              } else {
                _this3.toastr.info("There is no agents available", "", {
                  timeOut: 1000,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });
              }
            } else {
              _this3.toastr.error("".concat(res.msg), "".concat(res.msg), {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "getSupplierInfo",
        value: function getSupplierInfo(supplier_id) {
          var _this4 = this;

          this.supplierService.getSupplier(supplier_id).subscribe(function (res) {
            console.log(res.result.name);

            if (res.type != 'error') {
              _this4.supplierInfo = res.result;

              if (res.result.reissue != 0) {
                _this4.reissue = true;
              } else {
                _this4.reissue = false;
              }

              if (res.result.refund != 0) {
                _this4.refund = true;
              } else {
                _this4.refund = false;
              }

              if (res.result.refund_same != 0) {
                _this4.refund_same = true;
              } else {
                _this4.refund_same = false;
              }

              if (res.result.void_all != 0) {
                _this4.void_all = true;
              } else {
                _this4.void_all = false;
              }

              if (res.result.void_single != 0) {
                _this4.void_single = true;
              } else {
                _this4.void_single = false;
              }

              if (res.result.void_single != 0) {
                _this4.void_single = true;
              } else {
                _this4.void_single = false;
              }

              if (res.result.split != 0) {
                _this4.split = true;
              } else {
                _this4.split = false;
              }

              if (res.result.cancel != 0) {
                _this4.cancel = true;
              } else {
                _this4.cancel = false;
              }

              if (res.result.hold != 0) {
                _this4.hold = true;
              } else {
                _this4.hold = false;
              }

              if (res.result.reterive != 0) {
                _this4.reterive = true;
              } else {
                _this4.reterive = false;
              }

              if (res.result.free_service != 0) {
                _this4.free_service = true;
              } else {
                _this4.free_service = false;
              }

              if (res.result.paid_service != 0) {
                _this4.paid_service = true;
              } else {
                _this4.paid_service = false;
              }

              if (res.result.seats != 0) {
                _this4.seats = true;
              } else {
                _this4.seats = false;
              }

              if (res.result.fare_rules != 0) {
                _this4.fare_rules = true;
              } else {
                _this4.fare_rules = false;
              }

              if (res.result.iata_card != 0) {
                _this4.iata_card = true;
              } else {
                _this4.iata_card = false;
              }

              if (res.result.status != 0) {
                _this4.status = true;
              } else {
                _this4.status = false;
              }

              if (res.result.is_hotel != 0) {
                _this4.is_hotel = true;
              } else {
                _this4.is_hotel = false;
              }

              if (res.result.is_flight != 0) {
                _this4.is_flight = true;
              } else {
                _this4.is_flight = false;
              }

              if (res.result.is_activities != 0) {
                _this4.is_activities = true;
              } else {
                _this4.is_activities = false;
              }

              if (res.result.is_car != 0) {
                _this4.is_car = true;
              } else {
                _this4.is_car = false;
              }

              if (res.result.is_holidays != 0) {
                _this4.is_holidays = true;
              } else {
                _this4.is_holidays = false;
              }

              if (res.result.is_insurance != 0) {
                _this4.is_insurance = true;
              } else {
                _this4.is_insurance = false;
              }

              if (res.result.is_transfers != 0) {
                _this4.is_transfers = true;
              } else {
                _this4.is_transfers = false;
              }

              if (res.result.is_visa != 0) {
                _this4.is_visa = true;
              } else {
                _this4.is_visa = false;
              }

              if (res.result.short_code != null) {
                _this4.short_code = res.result.short_code;
              } else {
                _this4.short_code = "";
              }

              console.log("status", res.result.status);

              _this4.supplierUpdateForm.patchValue({
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
                status: _this4.status,
                reissue: _this4.reissue,
                refund: _this4.refund,
                refund_same: _this4.refund_same,
                void_all: _this4.void_all,
                void_single: _this4.void_single,
                split: _this4.split,
                cancel: _this4.cancel,
                hold: _this4.hold,
                reterive: _this4.reterive,
                free_service: _this4.free_service,
                paid_service: _this4.paid_service,
                seats: _this4.seats,
                fare_rules: _this4.fare_rules,
                iata_card: _this4.iata_card,
                short_code: _this4.short_code,
                is_hotel: _this4.is_hotel,
                is_flight: _this4.is_flight,
                is_holidays: _this4.is_holidays,
                is_activities: _this4.is_activities,
                is_car: _this4.is_car,
                is_transfers: _this4.is_transfers,
                is_visa: _this4.is_visa,
                is_insurance: _this4.is_insurance,
                supplier_id: supplier_id,
                isHotel: _this4.is_hotel,
                isFlight: _this4.is_flight,
                isHoliday: _this4.is_holidays,
                isActivity: _this4.is_activities,
                isCarhire: _this4.is_car,
                isTransfer: _this4.is_transfers,
                isVisa: _this4.is_visa,
                isInsurance: _this4.is_insurance,
                name: ''
              });
            } // this.router.navigate(['user-role-management/list-user'])

          });
        }
      }]);

      return SupplierEditComponent;
    }();

    SupplierEditComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_5__["SetupConfigService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }];
    };

    SupplierEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-supplier-edit',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./supplier-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/supplier-edit/supplier-edit.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./supplier-edit.component.scss */
      "./src/app/layout/setup-configuration/supplier-edit/supplier-edit.component.scss")).default]
    })], SupplierEditComponent);
    /***/
  },

  /***/
  "./src/app/layout/setup-configuration/supplier-edit/supplier-edit.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/layout/setup-configuration/supplier-edit/supplier-edit.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: SupplierEditModule */

  /***/
  function srcAppLayoutSetupConfigurationSupplierEditSupplierEditModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupplierEditModule", function () {
      return SupplierEditModule;
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


    var _supplier_edit_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./supplier-edit-routing.module */
    "./src/app/layout/setup-configuration/supplier-edit/supplier-edit-routing.module.ts");
    /* harmony import */


    var _supplier_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./supplier-edit.component */
    "./src/app/layout/setup-configuration/supplier-edit/supplier-edit.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var SupplierEditModule = function SupplierEditModule() {
      _classCallCheck(this, SupplierEditModule);
    };

    SupplierEditModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_supplier_edit_component__WEBPACK_IMPORTED_MODULE_4__["SupplierEditComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _supplier_edit_routing_module__WEBPACK_IMPORTED_MODULE_3__["SupplierEditRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
    })], SupplierEditModule);
    /***/
  }
}]);
//# sourceMappingURL=supplier-edit-supplier-edit-module-es5.js.map