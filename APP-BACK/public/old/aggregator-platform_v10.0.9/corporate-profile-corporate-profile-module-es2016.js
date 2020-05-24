(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["corporate-profile-corporate-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/corporates/corporate-profile/corporate-profile.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/corporates/corporate-profile/corporate-profile.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3><span class=\"update-header\">My Bookings</span></h3>\r\n<div class=\"ui fluid container\">\r\n  <div class=\"outer-basic\">\r\n    <div class=\"outer-basicForm\">\r\n      <div class=\"ui form\">\r\n        <div class=\"fields\">\r\n          <div class=\"three field\">\r\n            <input type=\"text\" placeholder=\"Company Name\" required>\r\n          </div>\r\n          <div class=\"three field\">\r\n            <input type=\"text\" placeholder=\"Company Code\" required>\r\n          </div>\r\n          <div class=\"three field\">\r\n            <input type=\"text\" placeholder=\"Bussiness Unit\" required>\r\n          </div>\r\n          <div class=\"three field\">\r\n            <div class=\"ui selection dropdown\">\r\n              <input type=\"hidden\" name=\"airline\">\r\n              <i class=\"dropdown icon\"></i>\r\n              <div class=\"default text\">Corporate</div>\r\n              <div class=\"menu\">\r\n                <div class=\"item\" data-value=\"1\">-----</div>\r\n                <div class=\"item\" data-value=\"0\">-----</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"three wide field\">\r\n            <button class=\"ui button corporate_add__btn\" tabindex=\"0\">\r\n              <span class=\"corporate_add__text\">ADD</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"email-list b2c-list-user-table\">\r\n          <table class=\"ui stackable celled table\">\r\n            <thead>\r\n              <tr class=\"center aligned\">\r\n                <th>S/no</th>\r\n                <th>Company Name</th>\r\n                <th>Company Code</th>\r\n                <th>Bussiness unit</th>\r\n                <th>Organisation</th>\r\n                <th>Edit</th>\r\n                <th>Delete</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr class=\"center aligned\">\r\n                <td data-label=\"s/no\">1</td>\r\n                <td data-label=\"companyName\">ABC</td>\r\n                <td data-label=\"companyCode\">454</td>\r\n                <td data-label=\"bussinessUnit\">657</td>\r\n                <td data-label=\"Organisation\">Airline</td>\r\n                <td data-label=\"edit\">\r\n                  <i class=\"icon\"><img class=\"flights_input__placeholder-icon\"\r\n                      src=\"./../../../../assets/img/edit.png\" /></i>\r\n                </td>\r\n                <td data-label=\"Delete\">\r\n                  <i class=\"icon\"><img class=\"flights_input__placeholder-icon\"\r\n                      src=\"./../../../../assets/img/delete-button.png\" /></i>\r\n                </td>\r\n              </tr>\r\n              <tr class=\"center aligned\">\r\n                <td data-label=\"s/no\">2</td>\r\n                <td data-label=\"companyName\">ABC</td>\r\n                <td data-label=\"companyCode\">454</td>\r\n                <td data-label=\"bussinessUnit\">657</td>\r\n                <td data-label=\"Organisation\">Airline</td>\r\n                <td data-label=\"edit\">\r\n                  <i class=\"icon\"><img class=\"flights_input__placeholder-icon\"\r\n                      src=\"./../../../../assets/img/edit.png\" /></i>\r\n                </td>\r\n                <td data-label=\"Delete\">\r\n                  <i class=\"icon\"><img class=\"flights_input__placeholder-icon\"\r\n                      src=\"./../../../../assets/img/delete-button.png\" /></i>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr>\r\n                <th colspan=\"10\">\r\n                  <div class=\"ui right floated pagination menu\">\r\n                    <a class=\"icon item\"><i class=\"left chevron icon\"></i></a>\r\n                    <a class=\"item\">1</a>\r\n                    <a class=\"item\">2</a>\r\n                    <a class=\"item\">3</a>\r\n                    <a class=\"item\">4</a>\r\n                    <a class=\"icon item\"><i class=\"right chevron icon\"></i></a>\r\n                  </div>\r\n                </th>\r\n              </tr>\r\n            </tfoot>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n");

/***/ }),

/***/ "./src/app/layout/corporates/corporate-profile/corporate-profile-routing.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/corporates/corporate-profile/corporate-profile-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: CorporateProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporateProfileRoutingModule", function() { return CorporateProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _corporate_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./corporate-profile.component */ "./src/app/layout/corporates/corporate-profile/corporate-profile.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: '', component: _corporate_profile_component__WEBPACK_IMPORTED_MODULE_1__["CorporateProfileComponent"] }
];
let CorporateProfileRoutingModule = class CorporateProfileRoutingModule {
};
CorporateProfileRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], CorporateProfileRoutingModule);



/***/ }),

/***/ "./src/app/layout/corporates/corporate-profile/corporate-profile.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/layout/corporates/corporate-profile/corporate-profile.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".update-header {\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n  margin-left: 30px;\n}\n\n.ui.fluid.container {\n  padding: 25px;\n}\n\n.outer-basic {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n}\n\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n  padding: 50px;\n}\n\n.corporate_add__btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.corporate_add__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvcnBvcmF0ZXMvY29ycG9yYXRlLXByb2ZpbGUvRTpcXEJlbGFsXFxwcm9qZWN0c1xcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxjb3Jwb3JhdGVzXFxjb3Jwb3JhdGUtcHJvZmlsZVxcY29ycG9yYXRlLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9jb3Jwb3JhdGVzL2NvcnBvcmF0ZS1wcm9maWxlL2NvcnBvcmF0ZS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUZBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb3Jwb3JhdGVzL2NvcnBvcmF0ZS1wcm9maWxlL2NvcnBvcmF0ZS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwZGF0ZS1oZWFkZXIge1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuLnVpLmZsdWlkLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljRm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbn1cclxuXHJcbi5jb3Jwb3JhdGVfYWRkX19idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmNvcnBvcmF0ZV9hZGRfX3RleHQge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCIudXBkYXRlLWhlYWRlciB7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLnVpLmZsdWlkLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5vdXRlci1iYXNpYyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ub3V0ZXItYmFzaWNGb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogNTBweDtcbn1cblxuLmNvcnBvcmF0ZV9hZGRfX2J0biB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uY29ycG9yYXRlX2FkZF9fdGV4dCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/layout/corporates/corporate-profile/corporate-profile.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/layout/corporates/corporate-profile/corporate-profile.component.ts ***!
  \************************************************************************************/
/*! exports provided: CorporateProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporateProfileComponent", function() { return CorporateProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CorporateProfileComponent = class CorporateProfileComponent {
    constructor() { }
    ngOnInit() {
    }
    ngAfterViewInit() {
        $(document).ready(function () {
            $('.menu .item').tab();
            $('.ui.dropdown').dropdown();
            $('.ui.checkbox').checkbox();
        });
    }
};
CorporateProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-corporate-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./corporate-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/corporates/corporate-profile/corporate-profile.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./corporate-profile.component.scss */ "./src/app/layout/corporates/corporate-profile/corporate-profile.component.scss")).default]
    })
], CorporateProfileComponent);



/***/ }),

/***/ "./src/app/layout/corporates/corporate-profile/corporate-profile.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/layout/corporates/corporate-profile/corporate-profile.module.ts ***!
  \*********************************************************************************/
/*! exports provided: CorporateProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporateProfileModule", function() { return CorporateProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _corporate_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./corporate-profile-routing.module */ "./src/app/layout/corporates/corporate-profile/corporate-profile-routing.module.ts");
/* harmony import */ var _corporate_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./corporate-profile.component */ "./src/app/layout/corporates/corporate-profile/corporate-profile.component.ts");





let CorporateProfileModule = class CorporateProfileModule {
};
CorporateProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_corporate_profile_component__WEBPACK_IMPORTED_MODULE_4__["CorporateProfileComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _corporate_profile_routing_module__WEBPACK_IMPORTED_MODULE_3__["CorporateProfileRoutingModule"]
        ]
    })
], CorporateProfileModule);



/***/ })

}]);
//# sourceMappingURL=corporate-profile-corporate-profile-module-es2016.js.map