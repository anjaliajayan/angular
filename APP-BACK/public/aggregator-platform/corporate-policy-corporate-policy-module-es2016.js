(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["corporate-policy-corporate-policy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/corporates/corporate-policy/corporate-policy.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/corporates/corporate-policy/corporate-policy.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3><span class=\"update-header\">My Bookings</span></h3>\r\n<div class=\"ui fluid container\">\r\n  <div class=\"outer-basic\">\r\n    <div class=\"outer-corporate_form\">\r\n      <div class=\"ui form\">\r\n        <div class=\"fields\">\r\n          <div class=\"three field\">\r\n            <input type=\"text\" placeholder=\"Policy Code\" required>\r\n          </div>\r\n          <div class=\"three field\">\r\n            <input type=\"text\" placeholder=\"Policy\" required>\r\n          </div>\r\n          <div class=\"three field\">\r\n            <div class=\"ui selection dropdown\">\r\n              <input type=\"hidden\" name=\"status\">\r\n              <i class=\"dropdown icon\"></i>\r\n              <div class=\"default text\">Status</div>\r\n              <div class=\"menu\">\r\n                <div class=\"item\" data-value=\"1\">Active</div>\r\n                <div class=\"item\" data-value=\"0\">Inactive</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"three wide field\">\r\n            <button class=\"ui button corporate_add__btn\" tabindex=\"0\">\r\n              <span class=\"corporate_add__text\">ADD</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"email-list b2c-list-user-table\">\r\n          <table class=\"ui stackable celled table\">\r\n            <thead>\r\n              <tr class=\"center aligned\">\r\n                <th>S/no</th>\r\n                <th>Policy Code</th>\r\n                <th>Policy</th>\r\n                <th>Status</th>\r\n                <th>Edit</th>\r\n                <th>Delete</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr class=\"center aligned\">\r\n                <td data-label=\"s/no\">1</td>\r\n                <td data-label=\"policyCode\">ABC</td>\r\n                <td data-label=\"policy\">454</td>\r\n                <td data-label=\"status\"><i class=\"icon\"><img class=\"flights_input__placeholder-icon\"\r\n                      src=\"./../../../../assets/img/check-mark.png\" /></i></td>\r\n                <td data-label=\"edit\">\r\n                  <i class=\"icon\"><img class=\"flights_input__placeholder-icon\"\r\n                      src=\"./../../../../assets/img/edit.png\" /></i>\r\n                </td>\r\n                <td data-label=\"Delete\">\r\n                  <i class=\"icon\"><img class=\"flights_input__placeholder-icon\"\r\n                      src=\"./../../../../assets/img/delete-button.png\" /></i>\r\n                </td>\r\n              </tr>\r\n              <tr class=\"center aligned\">\r\n                <td data-label=\"s/no\">2</td>\r\n                <td data-label=\"policyCode\">ABC</td>\r\n                <td data-label=\"policy\">454</td>\r\n                <td data-label=\"status\"><i class=\"icon\"><img class=\"flights_input__placeholder-icon\"\r\n                      src=\"./../../../../assets/img/check-mark.png\" /></i></td>\r\n                <td data-label=\"edit\">\r\n                  <i class=\"icon\"><img class=\"flights_input__placeholder-icon\"\r\n                      src=\"./../../../../assets/img/edit.png\" /></i>\r\n                </td>\r\n                <td data-label=\"Delete\">\r\n                  <i class=\"icon\"><img class=\"flights_input__placeholder-icon\"\r\n                      src=\"./../../../../assets/img/delete-button.png\" /></i>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr>\r\n                <th colspan=\"10\">\r\n                  <div class=\"ui right floated pagination menu\">\r\n                    <a class=\"icon item\"><i class=\"left chevron icon\"></i></a>\r\n                    <a class=\"item\">1</a>\r\n                    <a class=\"item\">2</a>\r\n                    <a class=\"item\">3</a>\r\n                    <a class=\"item\">4</a>\r\n                    <a class=\"icon item\"><i class=\"right chevron icon\"></i></a>\r\n                  </div>\r\n                </th>\r\n              </tr>\r\n            </tfoot>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n");

/***/ }),

/***/ "./src/app/layout/corporates/corporate-policy/corporate-policy-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/corporates/corporate-policy/corporate-policy-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: CorporatePolicyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporatePolicyRoutingModule", function() { return CorporatePolicyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _corporate_policy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./corporate-policy.component */ "./src/app/layout/corporates/corporate-policy/corporate-policy.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: '', component: _corporate_policy_component__WEBPACK_IMPORTED_MODULE_1__["CorporatePolicyComponent"] }
];
let CorporatePolicyRoutingModule = class CorporatePolicyRoutingModule {
};
CorporatePolicyRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], CorporatePolicyRoutingModule);



/***/ }),

/***/ "./src/app/layout/corporates/corporate-policy/corporate-policy.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/layout/corporates/corporate-policy/corporate-policy.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".update-header {\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n  margin-left: 30px;\n}\n\n.ui.fluid.container {\n  padding: 25px;\n}\n\n.outer-basic {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n}\n\n.outer-corporate_form {\n  width: 100%;\n  height: auto;\n  padding: 50px;\n}\n\n.corporate_add__btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.corporate_add__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvcnBvcmF0ZXMvY29ycG9yYXRlLXBvbGljeS9FOlxcQmVsYWxcXHByb2plY3RzXFxwcm9kdWN0aW9uLWJ1aWxkXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXGNvcnBvcmF0ZXNcXGNvcnBvcmF0ZS1wb2xpY3lcXGNvcnBvcmF0ZS1wb2xpY3kuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9jb3Jwb3JhdGVzL2NvcnBvcmF0ZS1wb2xpY3kvY29ycG9yYXRlLXBvbGljeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlGQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY29ycG9yYXRlcy9jb3Jwb3JhdGUtcG9saWN5L2NvcnBvcmF0ZS1wb2xpY3kuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBkYXRlLWhlYWRlciB7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4udWkuZmx1aWQuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpYyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ub3V0ZXItY29ycG9yYXRlX2Zvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG59XHJcblxyXG4uY29ycG9yYXRlX2FkZF9fYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5jb3Jwb3JhdGVfYWRkX190ZXh0IHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59IiwiLnVwZGF0ZS1oZWFkZXIge1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi51aS5mbHVpZC5jb250YWluZXIge1xuICBwYWRkaW5nOiAyNXB4O1xufVxuXG4ub3V0ZXItYmFzaWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLm91dGVyLWNvcnBvcmF0ZV9mb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogNTBweDtcbn1cblxuLmNvcnBvcmF0ZV9hZGRfX2J0biB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uY29ycG9yYXRlX2FkZF9fdGV4dCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/layout/corporates/corporate-policy/corporate-policy.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/corporates/corporate-policy/corporate-policy.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CorporatePolicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporatePolicyComponent", function() { return CorporatePolicyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CorporatePolicyComponent = class CorporatePolicyComponent {
    constructor() { }
    ngOnInit() {
    }
    ngAfterViewInit() {
        $(document).ready(function () {
            $('.menu .item').tab();
            $('.ui.dropdown').dropdown();
        });
    }
};
CorporatePolicyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-corporate-policy',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./corporate-policy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/corporates/corporate-policy/corporate-policy.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./corporate-policy.component.scss */ "./src/app/layout/corporates/corporate-policy/corporate-policy.component.scss")).default]
    })
], CorporatePolicyComponent);



/***/ }),

/***/ "./src/app/layout/corporates/corporate-policy/corporate-policy.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/corporates/corporate-policy/corporate-policy.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CorporatePolicyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporatePolicyModule", function() { return CorporatePolicyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _corporate_policy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./corporate-policy.component */ "./src/app/layout/corporates/corporate-policy/corporate-policy.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _corporate_policy_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./corporate-policy-routing.module */ "./src/app/layout/corporates/corporate-policy/corporate-policy-routing.module.ts");





let CorporatePolicyModule = class CorporatePolicyModule {
};
CorporatePolicyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_corporate_policy_component__WEBPACK_IMPORTED_MODULE_1__["CorporatePolicyComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _corporate_policy_routing_module__WEBPACK_IMPORTED_MODULE_4__["CorporatePolicyRoutingModule"]
        ]
    })
], CorporatePolicyModule);



/***/ })

}]);
//# sourceMappingURL=corporate-policy-corporate-policy-module-es2016.js.map