(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["preset-package-preset-package-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/preset-package/preset-package.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/preset-package/preset-package.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./src/app/layout/preset-package/preset-package-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/preset-package/preset-package-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: PresetPackageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresetPackageRoutingModule", function() { return PresetPackageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _preset_package_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preset-package.component */ "./src/app/layout/preset-package/preset-package.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _preset_package_component__WEBPACK_IMPORTED_MODULE_1__["PresetPackageComponent"],
        children: [
            { path: '', redirectTo: 'create-package', pathMatch: 'prefix' },
            { path: 'create-package', loadChildren: () => __webpack_require__.e(/*! import() | create-package-create-package-module */ "create-package-create-package-module").then(__webpack_require__.bind(null, /*! ./create-package/create-package.module */ "./src/app/layout/preset-package/create-package/create-package.module.ts")).then(m => m.CreatePackageModule) },
            { path: 'list-saved-packages', loadChildren: () => __webpack_require__.e(/*! import() | list-saved-packages-list-saved-packages-module */ "list-saved-packages-list-saved-packages-module").then(__webpack_require__.bind(null, /*! ./list-saved-packages/list-saved-packages.module */ "./src/app/layout/preset-package/list-saved-packages/list-saved-packages.module.ts")).then(m => m.ListSavedPackagesModule) }
        ]
    }
];
let PresetPackageRoutingModule = class PresetPackageRoutingModule {
};
PresetPackageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], PresetPackageRoutingModule);



/***/ }),

/***/ "./src/app/layout/preset-package/preset-package.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/layout/preset-package/preset-package.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wcmVzZXQtcGFja2FnZS9wcmVzZXQtcGFja2FnZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/layout/preset-package/preset-package.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/preset-package/preset-package.component.ts ***!
  \*******************************************************************/
/*! exports provided: PresetPackageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresetPackageComponent", function() { return PresetPackageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PresetPackageComponent = class PresetPackageComponent {
    constructor() { }
    ngOnInit() {
    }
};
PresetPackageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-preset-package',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./preset-package.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/preset-package/preset-package.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./preset-package.component.scss */ "./src/app/layout/preset-package/preset-package.component.scss")).default]
    })
], PresetPackageComponent);



/***/ }),

/***/ "./src/app/layout/preset-package/preset-package.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/preset-package/preset-package.module.ts ***!
  \****************************************************************/
/*! exports provided: PresetPackageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PresetPackageModule", function() { return PresetPackageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _preset_package_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preset-package.component */ "./src/app/layout/preset-package/preset-package.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _preset_package_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./preset-package-routing.module */ "./src/app/layout/preset-package/preset-package-routing.module.ts");





let PresetPackageModule = class PresetPackageModule {
};
PresetPackageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_preset_package_component__WEBPACK_IMPORTED_MODULE_1__["PresetPackageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _preset_package_routing_module__WEBPACK_IMPORTED_MODULE_4__["PresetPackageRoutingModule"]
        ]
    })
], PresetPackageModule);



/***/ })

}]);
//# sourceMappingURL=preset-package-preset-package-module-es2016.js.map