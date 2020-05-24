function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["view-user-view-user-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user-role-management/view-user/view-user.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user-role-management/view-user/view-user.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutUserRoleManagementViewUserViewUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui fluid container\">\r\n  <h3><span class=\"update-header\">View User</span></h3>\r\n</div>\r\n<div class=\"ui equal width grid \">\r\n  <div class=\"six wide tablet eight wide computer column\">\r\n    <div class=\"ui fluid container\">\r\n      <div class=\"outer-basic\">\r\n        <div class=\"outer-basicForm\">\r\n          <div class=\"form-inner\">\r\n            <h4 class=\"ui  header\"><span class=\"basic-header\">Basic Information</span></h4>\r\n            <div class=\"ui form \">\r\n              <div class=\"field\">\r\n                <div class=\"five fields\">\r\n                  <div class=\"three wide field\">\r\n                    <label>Username</label>\r\n                  </div>\r\n                  <div class=\"six wide field\">\r\n                    {{userInfo.username}}\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"field\">\r\n                <div class=\"three fields\">\r\n                  <div class=\"three wide field\">\r\n                    <label>First Name</label>\r\n                  </div>\r\n                  <div class=\"six wide field\">\r\n                    {{userInfo.first_name}}\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"field\">\r\n                <div class=\"three fields\">\r\n                  <div class=\"three wide field\">\r\n                    <label>Last Name</label>\r\n                  </div>\r\n                  <div class=\"six wide field\">\r\n                    {{userInfo.last_name}}\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"field\">\r\n                <div class=\"three fields\">\r\n                  <div class=\"three wide field\">\r\n                    <label>Email</label>\r\n                  </div>\r\n                  <div class=\"six wide field\">\r\n                    {{userInfo.email}}\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"field\">\r\n                <div class=\"three fields\">\r\n                  <div class=\"three wide field\">\r\n                    <label>Mobile</label>\r\n                  </div>\r\n                  <div class=\"six wide field\">\r\n                    {{userInfo.mobile}}\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"field\">\r\n                <div class=\"three fields\">\r\n                  <div class=\"three wide field\">\r\n                    <label>Created</label>\r\n                  </div>\r\n                  <div class=\"six wide field\">\r\n                    {{userInfo.created}}\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"field\" *ngIf=\"userInfo.address_1\">\r\n                <div class=\"two fields\">\r\n                  <div class=\"three wide field\">\r\n                    <label>Address</label>\r\n                  </div>\r\n                  <div class=\"six wide field\">\r\n                    {{userInfo.address_1}}\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"field\" *ngIf=\"userInfo.address_2\">\r\n                <div class=\"two fields\">\r\n                  <div class=\"three wide field\">\r\n                    <label>Address </label>\r\n                  </div>\r\n                  <div class=\"six wide field\">\r\n                    {{userInfo.address_2}}\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"field\">\r\n              <hr>\r\n            </div> -->\r\n            <h4 class=\"ui  header\"><span class=\"basic-header\">Target Amounts</span></h4>\r\n            <div class=\"field\">\r\n              <table class=\"ui celled table\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Year</th>\r\n                    <th>Month</th>\r\n                    <th>Target Amount</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <ng-container *ngFor=\"let target of targetAmountArray;let i = index;\">\r\n                    <tr *ngIf=\"target.year && target.month && target.target_amount\">\r\n                      <td>\r\n                        {{target.year}}\r\n                      </td>\r\n                      <td>\r\n                        {{target.month}}\r\n                      </td>\r\n                      <td>\r\n                        {{target.target_amount}}\r\n                      </td>\r\n                  </ng-container>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <!-- <br>\r\n          <br>\r\n          <br>\r\n          <br>\r\n          <br>\r\n          <br>\r\n          <br>\r\n          <br>\r\n          <br> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"six wide tablet eight wide computer column\">\r\n    <div class=\"ui fluid container\">\r\n      <div class=\"outer-basic\">\r\n        <div class=\"outer-basicForm\">\r\n          <div class=\"form-inner report-section\">\r\n            <h4 class=\"ui header\"><span class=\"basic-header\">Pie Report</span></h4>\r\n            <form [formGroup]=\"filterForm\" class=\"ui form \">\r\n              <div class=\"field\">\r\n                <div class=\"two fields\">\r\n                  <div class=\"six wide field\">\r\n                    <label>Days</label>\r\n                    <div class=\"one fields\" *ngFor=\"let item of filterTypes; let i=index\">\r\n                      <input type=\"radio\" id=\"item-{{i}}\" formControlName=\"filterDays\" (change)=\"filterData()\"\r\n                        value=\"{{item.id}}\">\r\n                      <label for=\"item-{{i}}\">{{item.name}}</label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"six wide field\">\r\n                    <label>Product</label>\r\n                    <select class=\"ui fluid  dropdown\" name=\"product_id\" (change)=\"filterData()\"\r\n                      formControlName=\"product_id\">\r\n                      <option value=\"\" selected>Products Bookings</option>\r\n                      <option *ngFor=\"let product of activeProducts\">{{product.key}}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"field\">\r\n                <div id=\"pieChart\">\r\n                  <img class=\"loaderChart\" src=\"https://i.imgur.com/fXUIBfi.gif\" alt=\"Chart will Render Here...\" />\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/layout/user-role-management/view-user/view-user-routing.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/layout/user-role-management/view-user/view-user-routing.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: ViewUserRoutingModule */

  /***/
  function srcAppLayoutUserRoleManagementViewUserViewUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewUserRoutingModule", function () {
      return ViewUserRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _view_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./view-user.component */
    "./src/app/layout/user-role-management/view-user/view-user.component.ts");
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
      component: _view_user_component__WEBPACK_IMPORTED_MODULE_1__["ViewUserComponent"]
    }];

    var ViewUserRoutingModule = function ViewUserRoutingModule() {
      _classCallCheck(this, ViewUserRoutingModule);
    };

    ViewUserRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], ViewUserRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/user-role-management/view-user/view-user.component.scss":
  /*!********************************************************************************!*\
    !*** ./src/app/layout/user-role-management/view-user/view-user.component.scss ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutUserRoleManagementViewUserViewUserComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ui.fluid.container {\n  padding: 0 25px;\n}\n\n.update-header {\n  display: block;\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n  margin-bottom: 24px;\n}\n\n.outer-basic {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n}\n\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n  padding: 50px;\n}\n\n.basic-header {\n  font-family: \"Roboto\", sans-serif;\n}\n\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #E0E0E0;\n}\n\n.update_btn {\n  box-sizing: border-box;\n  border-radius: 3px;\n  background-color: #3867b1;\n  border: 1px solid #FFF;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n  padding-right: 35px;\n  margin-top: 15px;\n}\n\n.update_text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  padding-left: 10px;\n}\n\n.field input::-webkit-input-placeholder {\n  font-size: 12px;\n}\n\n.field input::-moz-placeholder {\n  font-size: 12px;\n}\n\n.field input::-ms-input-placeholder {\n  font-size: 12px;\n}\n\n.field input::placeholder {\n  font-size: 12px;\n}\n\n.dropdown .text {\n  font-size: 12px;\n}\n\n.countryListUser {\n  padding: 0px !important;\n}\n\n#pieChart {\n  height: 370px;\n  width: 100%;\n}\n\n.report-section input {\n  height: auto;\n  min-height: 21px;\n  margin-right: 8px;\n  margin-left: 10px;\n  cursor: pointer;\n}\n\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20 !important;\n  margin: 0px 0px 8px;\n}\n\n.outer-basic {\n  min-height: 620px;\n}\n\n.ui.header {\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 600 !important;\n  line-height: 15px;\n  margin-bottom: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3VzZXItcm9sZS1tYW5hZ2VtZW50L3ZpZXctdXNlci9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHVzZXItcm9sZS1tYW5hZ2VtZW50XFx2aWV3LXVzZXJcXHZpZXctdXNlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3VzZXItcm9sZS1tYW5hZ2VtZW50L3ZpZXctdXNlci92aWV3LXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxpQ0FBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlGQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREZBO0VBQ0ksZUFBQTtBQ0NKOztBREZBO0VBQ0ksZUFBQTtBQ0NKOztBREZBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0ksdUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDQ0o7O0FER0k7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0FSOztBRElBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7QUNESjs7QURJQTtFQUNJLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC91c2VyLXJvbGUtbWFuYWdlbWVudC92aWV3LXVzZXIvdmlldy11c2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLmZsdWlkLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwIDI1cHg7XHJcbn1cclxuXHJcbi51cGRhdGUtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljRm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbn1cclxuXHJcbi5iYXNpYy1oZWFkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNFMEUwRTA7XHJcbn1cclxuXHJcbi51cGRhdGVfYnRuIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N2IxO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZGRjtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4udXBkYXRlX3RleHQge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24gLnRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uY291bnRyeUxpc3RVc2VyIHtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jcGllQ2hhcnQge1xyXG4gICAgaGVpZ2h0OiAzNzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucmVwb3J0LXNlY3Rpb24ge1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtaW4taGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLnVpLmZvcm0gLmZpZWxkPmxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgIGNvbG9yOiAjMTgxQjIwICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDBweCAwcHggOHB4O1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWMge1xyXG4gICAgbWluLWhlaWdodDogNjIwcHg7XHJcbn1cclxuXHJcbi51aS5oZWFkZXIge1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbn0iLCIudWkuZmx1aWQuY29udGFpbmVyIHtcbiAgcGFkZGluZzogMCAyNXB4O1xufVxuXG4udXBkYXRlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLm91dGVyLWJhc2ljIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm94LXNoYWRvdzogM3B4IDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5vdXRlci1iYXNpY0Zvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiA1MHB4O1xufVxuXG4uYmFzaWMtaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbmhyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGJvcmRlcjogMC41cHggc29saWQgI0UwRTBFMDtcbn1cblxuLnVwZGF0ZV9idG4ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODY3YjE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRkY7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnVwZGF0ZV90ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5kcm9wZG93biAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNvdW50cnlMaXN0VXNlciB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4jcGllQ2hhcnQge1xuICBoZWlnaHQ6IDM3MHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJlcG9ydC1zZWN0aW9uIGlucHV0IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtaW4taGVpZ2h0OiAyMXB4O1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnVpLmZvcm0gLmZpZWxkID4gbGFiZWwge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBjb2xvcjogIzE4MUIyMCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDBweCAwcHggOHB4O1xufVxuXG4ub3V0ZXItYmFzaWMge1xuICBtaW4taGVpZ2h0OiA2MjBweDtcbn1cblxuLnVpLmhlYWRlciB7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/user-role-management/view-user/view-user.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/layout/user-role-management/view-user/view-user.component.ts ***!
    \******************************************************************************/

  /*! exports provided: ViewUserComponent */

  /***/
  function srcAppLayoutUserRoleManagementViewUserViewUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewUserComponent", function () {
      return ViewUserComponent;
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


    var src_app_shared_services_user_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/user-role.service */
    "./src/app/shared/services/user-role.service.ts");
    /* harmony import */


    var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/common.service */
    "./src/app/shared/services/common.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_assets_vendor_canvasjs_canvasjs_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/assets/vendor/canvasjs/canvasjs.min.js */
    "./src/assets/vendor/canvasjs/canvasjs.min.js");
    /* harmony import */


    var src_assets_vendor_canvasjs_canvasjs_min_js__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(src_assets_vendor_canvasjs_canvasjs_min_js__WEBPACK_IMPORTED_MODULE_7__);

    var ViewUserComponent =
    /*#__PURE__*/
    function () {
      function ViewUserComponent(fb, userRoleService, activeRoute, router, toastr, commonService) {
        _classCallCheck(this, ViewUserComponent);

        this.fb = fb;
        this.userRoleService = userRoleService;
        this.activeRoute = activeRoute;
        this.router = router;
        this.toastr = toastr;
        this.commonService = commonService;
        this.userInfo = {};
        this.activeProducts = {};
        this.targetAmountArray = [];
        this.filterTypes = [{
          id: 1,
          name: 'Day'
        }, {
          id: 6,
          name: 'Week'
        }, {
          id: 30,
          name: 'Month'
        }, {
          id: 365,
          name: 'Year'
        }];

        this.renderPieChar = function (dataInfo) {
          var pieChart = new src_assets_vendor_canvasjs_canvasjs_min_js__WEBPACK_IMPORTED_MODULE_7__["Chart"]("pieChart", {
            animationEnabled: true,
            exportEnabled: true,
            title: '',
            data: [{
              type: "doughnut",
              startAngle: 60,
              innerRadius: 60,
              indexLabelFontSize: 17,
              indexLabel: "{label} - #percent%",
              toolTipContent: "<b>{label}:</b> {y} (#percent%)",
              dataPoints: dataInfo
            }]
          });
          pieChart.render();
        };

        this.filterForm = this.fb.group({
          filterDays: ['1'],
          product_id: [''],
          users_id: ['']
        });
      }

      _createClass(ViewUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // get user id
          this.getSettings();
          var userId = this.activeRoute.snapshot.params.id;
          this.filterForm.patchValue({
            users_id: userId
          });
          this.getUserInfo(userId);
          this.filterData();
          var barChart = new src_assets_vendor_canvasjs_canvasjs_min_js__WEBPACK_IMPORTED_MODULE_7__["Chart"]("barChart", {
            animationEnabled: true,
            exportEnabled: true,
            title: {
              text: "Bar Report",
              horizontalAlign: "left"
            },
            data: [{
              type: "doughnut",
              startAngle: 60,
              innerRadius: 60,
              indexLabelFontSize: 17,
              indexLabel: "{label} - #percent%",
              toolTipContent: "<b>{label}:</b> {y} (#percent%)",
              dataPoints: [{
                y: 34,
                label: "hotel"
              }, {
                y: 3,
                label: "flight"
              }, {
                y: 7,
                label: "activities"
              }, {
                y: 45,
                label: "car"
              }, {
                y: 7,
                label: "transfers"
              }, {
                y: 6,
                label: "insurance"
              }, {
                y: 23,
                label: "visa"
              }, {
                y: 3,
                label: "cruise"
              }]
            }]
          });
          barChart.render();
        }
      }, {
        key: "getSettings",
        value: function getSettings() {
          var _this = this;

          var permArr = {
            "name": ['ActiveProducts']
          };
          this.commonService.getSettingList(permArr).subscribe(function (result) {
            var activeProductsData = JSON.parse(result.listData.find(function (list) {
              return list.name == 'ActiveProducts';
            }).value);
            var keyValue = Object.entries(activeProductsData).map(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  key = _ref2[0],
                  value = _ref2[1];

              return {
                key: key,
                value: value
              };
            });
            _this.activeProducts = keyValue.filter(function (o) {
              return Object.keys(o).some(function (k) {
                return o.value == 1;
              });
            });
            console.log("--this.activeProducts", _this.activeProducts);
          });
        } // ActiveProducts
        // get current logedin user info and update profile

      }, {
        key: "getUserInfo",
        value: function getUserInfo(userId) {
          var _this2 = this;

          this.userRoleService.getUser(userId).subscribe(function (result) {
            if (result.type != 'error') {
              _this2.userInfo = result.data;
              console.log("---this.userInfo-----", _this2.userInfo);
              _this2.targetAmountArray = JSON.parse(_this2.userInfo.target_amount);
              console.log("---targetAmountArray", _this2.targetAmountArray);
            } else {
              _this2.toastr.error("".concat(result.msg), "".concat(result.msg), {
                timeOut: 10000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });

              _this2.router.navigate(['user-role-management/list-user']);
            }
          });
        }
      }, {
        key: "filterData",
        value: function filterData() {
          var _this3 = this;

          this.userRoleService.getBookings(this.filterForm.value).subscribe(function (result) {
            console.log("result", result.data);

            if (result.type == 'data') {
              _this3.renderPieChar(result.data);
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          $(document).ready(function () {
            $('.ui.dropdown').dropdown();
            $('.test.checkbox').checkbox('attach events', '.toggle.button');
          });
        }
      }]);

      return ViewUserComponent;
    }();

    ViewUserComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_shared_services_user_role_service__WEBPACK_IMPORTED_MODULE_3__["UserRoleService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
      }, {
        type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }];
    };

    ViewUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-user',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./view-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user-role-management/view-user/view-user.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./view-user.component.scss */
      "./src/app/layout/user-role-management/view-user/view-user.component.scss")).default]
    })], ViewUserComponent);
    /***/
  },

  /***/
  "./src/app/layout/user-role-management/view-user/view-user.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/layout/user-role-management/view-user/view-user.module.ts ***!
    \***************************************************************************/

  /*! exports provided: ViewUserModule */

  /***/
  function srcAppLayoutUserRoleManagementViewUserViewUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewUserModule", function () {
      return ViewUserModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _view_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./view-user.component */
    "./src/app/layout/user-role-management/view-user/view-user.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _view_user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./view-user-routing.module */
    "./src/app/layout/user-role-management/view-user/view-user-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var ViewUserModule = function ViewUserModule() {
      _classCallCheck(this, ViewUserModule);
    };

    ViewUserModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_view_user_component__WEBPACK_IMPORTED_MODULE_1__["ViewUserComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _view_user_routing_module__WEBPACK_IMPORTED_MODULE_4__["ViewUserRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]]
    })], ViewUserModule);
    /***/
  }
}]);
//# sourceMappingURL=view-user-view-user-module-es5.js.map