(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-management-profile-management-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/profile-management.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/profile-management.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./src/app/layout/profile-management/profile-management-routing.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/layout/profile-management/profile-management-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: ProfileManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileManagementRoutingModule", function() { return ProfileManagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _profile_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-management.component */ "./src/app/layout/profile-management/profile-management.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _profile_management_component__WEBPACK_IMPORTED_MODULE_1__["ProfileManagementComponent"],
        children: [
            { path: '', redirectTo: 'create-new-profile', pathMatch: 'prefix' },
            { path: 'create-new-profile', loadChildren: () => __webpack_require__.e(/*! import() | create-new-profile-create-new-profile-module */ "create-new-profile-create-new-profile-module").then(__webpack_require__.bind(null, /*! ./create-new-profile/create-new-profile.module */ "./src/app/layout/profile-management/create-new-profile/create-new-profile.module.ts")).then(m => m.CreateNewProfileModule) },
            { path: 'profile-follow-up', loadChildren: () => __webpack_require__.e(/*! import() | profile-follow-up-profile-follow-up-module */ "profile-follow-up-profile-follow-up-module").then(__webpack_require__.bind(null, /*! ./profile-follow-up/profile-follow-up.module */ "./src/app/layout/profile-management/profile-follow-up/profile-follow-up.module.ts")).then(m => m.ProfileFollowUpModule) },
            { path: 'retrieve-profile', loadChildren: () => Promise.all(/*! import() | retrieve-profile-retrieve-profile-module */[__webpack_require__.e("default~airline-deals-airline-deals-module~audit-report-audit-report-module~booking-report-booking-r~d6069c4c"), __webpack_require__.e("default~airline-deals-airline-deals-module~create-user-create-user-module~currency-configuration-cur~ba44a2d1"), __webpack_require__.e("common"), __webpack_require__.e("retrieve-profile-retrieve-profile-module")]).then(__webpack_require__.bind(null, /*! ./retrieve-profile/retrieve-profile.module */ "./src/app/layout/profile-management/retrieve-profile/retrieve-profile.module.ts")).then(m => m.RetrieveProfileModule) },
            { path: 'search-profile', loadChildren: () => __webpack_require__.e(/*! import() | search-profile-search-profile-module */ "search-profile-search-profile-module").then(__webpack_require__.bind(null, /*! ./search-profile/search-profile.module */ "./src/app/layout/profile-management/search-profile/search-profile.module.ts")).then(m => m.SearchProfileModule) }
        ]
    }
];
let ProfileManagementRoutingModule = class ProfileManagementRoutingModule {
};
ProfileManagementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], ProfileManagementRoutingModule);



/***/ }),

/***/ "./src/app/layout/profile-management/profile-management.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/profile-management/profile-management.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wcm9maWxlLW1hbmFnZW1lbnQvcHJvZmlsZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/layout/profile-management/profile-management.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/profile-management/profile-management.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProfileManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileManagementComponent", function() { return ProfileManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ProfileManagementComponent = class ProfileManagementComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProfileManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-management',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/profile-management.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-management.component.scss */ "./src/app/layout/profile-management/profile-management.component.scss")).default]
    })
], ProfileManagementComponent);



/***/ }),

/***/ "./src/app/layout/profile-management/profile-management.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/profile-management/profile-management.module.ts ***!
  \************************************************************************/
/*! exports provided: ProfileManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileManagementModule", function() { return ProfileManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _profile_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-management.component */ "./src/app/layout/profile-management/profile-management.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _profile_management_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-management-routing.module */ "./src/app/layout/profile-management/profile-management-routing.module.ts");





let ProfileManagementModule = class ProfileManagementModule {
};
ProfileManagementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_profile_management_component__WEBPACK_IMPORTED_MODULE_1__["ProfileManagementComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _profile_management_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProfileManagementRoutingModule"]
        ]
    })
], ProfileManagementModule);



/***/ })

}]);
//# sourceMappingURL=profile-management-profile-management-module-es2016.js.map