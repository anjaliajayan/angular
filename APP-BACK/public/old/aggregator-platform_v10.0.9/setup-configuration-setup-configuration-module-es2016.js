(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["setup-configuration-setup-configuration-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/setup-configuration.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/setup-configuration.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./src/app/layout/setup-configuration/setup-configuration-routing.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/setup-configuration-routing.module.ts ***!
  \**********************************************************************************/
/*! exports provided: SetupConfigurationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupConfigurationRoutingModule", function() { return SetupConfigurationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _setup_configuration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setup-configuration.component */ "./src/app/layout/setup-configuration/setup-configuration.component.ts");




const routes = [
    {
        path: '',
        component: _setup_configuration_component__WEBPACK_IMPORTED_MODULE_3__["SetupConfigurationComponent"],
        children: [
            { path: '', redirectTo: 'airline-deals', pathMatch: 'prefix' },
            { path: 'airline-deals', loadChildren: () => Promise.all(/*! import() | airline-deals-airline-deals-module */[__webpack_require__.e("default~airline-deals-airline-deals-module~audit-report-audit-report-module~booking-report-booking-r~d6069c4c"), __webpack_require__.e("default~airline-deals-airline-deals-module~create-user-create-user-module~currency-configuration-cur~ba44a2d1"), __webpack_require__.e("default~airline-deals-airline-deals-module~cars-cars-module~create-user-create-user-module~edit-user~81786207"), __webpack_require__.e("default~airline-deals-airline-deals-module~markup-configuration-markup-configuration-module~point-sa~8888bed2"), __webpack_require__.e("common"), __webpack_require__.e("airline-deals-airline-deals-module")]).then(__webpack_require__.bind(null, /*! ./airline-deals/airline-deals.module */ "./src/app/layout/setup-configuration/airline-deals/airline-deals.module.ts")).then(m => m.AirlineDealsModule) },
            { path: 'content-management', loadChildren: () => Promise.all(/*! import() | content-management-content-management-module */[__webpack_require__.e("default~airline-deals-airline-deals-module~audit-report-audit-report-module~booking-report-booking-r~d6069c4c"), __webpack_require__.e("common"), __webpack_require__.e("content-management-content-management-module")]).then(__webpack_require__.bind(null, /*! ./content-management/content-management.module */ "./src/app/layout/setup-configuration/content-management/content-management.module.ts")).then(m => m.ContentManagementModule) },
            { path: 'currency-configuration', loadChildren: () => Promise.all(/*! import() | currency-configuration-currency-configuration-module */[__webpack_require__.e("default~airline-deals-airline-deals-module~audit-report-audit-report-module~booking-report-booking-r~d6069c4c"), __webpack_require__.e("default~airline-deals-airline-deals-module~create-user-create-user-module~currency-configuration-cur~ba44a2d1"), __webpack_require__.e("common"), __webpack_require__.e("currency-configuration-currency-configuration-module")]).then(__webpack_require__.bind(null, /*! ./currency-configuration/currency-configuration.module */ "./src/app/layout/setup-configuration/currency-configuration/currency-configuration.module.ts")).then(m => m.CurrencyConfigurationModule) },
            { path: 'email-templates', loadChildren: () => Promise.all(/*! import() | email-templates-email-templates-module */[__webpack_require__.e("default~airline-deals-airline-deals-module~audit-report-audit-report-module~booking-report-booking-r~d6069c4c"), __webpack_require__.e("default~activities-activities-module~booking-report-booking-report-module~bookings-bookings-module~e~58a6e317"), __webpack_require__.e("common"), __webpack_require__.e("email-templates-email-templates-module")]).then(__webpack_require__.bind(null, /*! ./email-templates/email-templates.module */ "./src/app/layout/setup-configuration/email-templates/email-templates.module.ts")).then(m => m.EmailTemplatesModule) },
            { path: 'markup-configuration', loadChildren: () => Promise.all(/*! import() | markup-configuration-markup-configuration-module */[__webpack_require__.e("default~airline-deals-airline-deals-module~audit-report-audit-report-module~booking-report-booking-r~d6069c4c"), __webpack_require__.e("default~airline-deals-airline-deals-module~create-user-create-user-module~currency-configuration-cur~ba44a2d1"), __webpack_require__.e("default~airline-deals-airline-deals-module~cars-cars-module~create-user-create-user-module~edit-user~81786207"), __webpack_require__.e("default~airline-deals-airline-deals-module~markup-configuration-markup-configuration-module~point-sa~8888bed2"), __webpack_require__.e("common"), __webpack_require__.e("markup-configuration-markup-configuration-module")]).then(__webpack_require__.bind(null, /*! ./markup-configuration/markup-configuration.module */ "./src/app/layout/setup-configuration/markup-configuration/markup-configuration.module.ts")).then(m => m.MarkupConfigurationModule) },
            { path: 'promotion-content', loadChildren: () => __webpack_require__.e(/*! import() | promotion-content-promotion-content-module */ "promotion-content-promotion-content-module").then(__webpack_require__.bind(null, /*! ./promotion-content/promotion-content.module */ "./src/app/layout/setup-configuration/promotion-content/promotion-content.module.ts")).then(m => m.PromotionContentModule) },
            { path: 'supplier', loadChildren: () => Promise.all(/*! import() | supplier-supplier-module */[__webpack_require__.e("default~airline-deals-airline-deals-module~audit-report-audit-report-module~booking-report-booking-r~d6069c4c"), __webpack_require__.e("common"), __webpack_require__.e("supplier-supplier-module")]).then(__webpack_require__.bind(null, /*! ./supplier/supplier.module */ "./src/app/layout/setup-configuration/supplier/supplier.module.ts")).then(m => m.SupplierModule) },
            { path: 'edit-supplier/:id', loadChildren: () => Promise.all(/*! import() | supplier-edit-supplier-edit-module */[__webpack_require__.e("common"), __webpack_require__.e("supplier-edit-supplier-edit-module")]).then(__webpack_require__.bind(null, /*! ./supplier-edit/supplier-edit.module */ "./src/app/layout/setup-configuration/supplier-edit/supplier-edit.module.ts")).then(m => m.SupplierEditModule) },
            { path: 'roles', loadChildren: () => Promise.all(/*! import() | roles-roles-module */[__webpack_require__.e("default~airline-deals-airline-deals-module~create-user-create-user-module~currency-configuration-cur~ba44a2d1"), __webpack_require__.e("roles-roles-module")]).then(__webpack_require__.bind(null, /*! ./roles/roles.module */ "./src/app/layout/setup-configuration/roles/roles.module.ts")).then(m => m.RolesModule) }
        ]
    }
];
let SetupConfigurationRoutingModule = class SetupConfigurationRoutingModule {
};
SetupConfigurationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], SetupConfigurationRoutingModule);



/***/ }),

/***/ "./src/app/layout/setup-configuration/setup-configuration.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/setup-configuration.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zZXR1cC1jb25maWd1cmF0aW9uL3NldHVwLWNvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/layout/setup-configuration/setup-configuration.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/setup-configuration.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SetupConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupConfigurationComponent", function() { return SetupConfigurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SetupConfigurationComponent = class SetupConfigurationComponent {
    constructor() { }
    ngOnInit() {
    }
    ngAfterViewInit() {
        $('.menu .item').tab();
        $('.ui.dropdown').dropdown();
    }
};
SetupConfigurationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setup-configuration',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./setup-configuration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/setup-configuration.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./setup-configuration.component.scss */ "./src/app/layout/setup-configuration/setup-configuration.component.scss")).default]
    })
], SetupConfigurationComponent);



/***/ }),

/***/ "./src/app/layout/setup-configuration/setup-configuration.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/setup-configuration.module.ts ***!
  \**************************************************************************/
/*! exports provided: SetupConfigurationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupConfigurationModule", function() { return SetupConfigurationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _setup_configuration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setup-configuration.component */ "./src/app/layout/setup-configuration/setup-configuration.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _setup_configuration_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setup-configuration-routing.module */ "./src/app/layout/setup-configuration/setup-configuration-routing.module.ts");





let SetupConfigurationModule = class SetupConfigurationModule {
};
SetupConfigurationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_setup_configuration_component__WEBPACK_IMPORTED_MODULE_1__["SetupConfigurationComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _setup_configuration_routing_module__WEBPACK_IMPORTED_MODULE_4__["SetupConfigurationRoutingModule"],
        ]
    })
], SetupConfigurationModule);



/***/ })

}]);
//# sourceMappingURL=setup-configuration-setup-configuration-module-es2016.js.map