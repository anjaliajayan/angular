(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["accounts-accounts-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/accounts/accounts.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/accounts/accounts.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./src/app/layout/accounts/accounts-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/accounts/accounts-routing.module.ts ***!
  \************************************************************/
/*! exports provided: AccountsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsRoutingModule", function() { return AccountsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _accounts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accounts.component */ "./src/app/layout/accounts/accounts.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _accounts_component__WEBPACK_IMPORTED_MODULE_1__["AccountsComponent"],
        children: [
            { path: '', redirectTo: 'floating-deposits', pathMatch: 'prefix' },
            { path: 'floating-deposits', loadChildren: () => __webpack_require__.e(/*! import() | floating-deposits-floating-deposits-module */ "floating-deposits-floating-deposits-module").then(__webpack_require__.bind(null, /*! ./floating-deposits/floating-deposits.module */ "./src/app/layout/accounts/floating-deposits/floating-deposits.module.ts")).then(m => m.FloatingDepositsModule) },
            { path: 'iur', loadChildren: () => __webpack_require__.e(/*! import() | iur-iur-module */ "iur-iur-module").then(__webpack_require__.bind(null, /*! ./iur/iur.module */ "./src/app/layout/accounts/iur/iur.module.ts")).then(m => m.IurModule) },
            { path: 'transactions', loadChildren: () => Promise.all(/*! import() | transactions-transactions-module */[__webpack_require__.e("default~airline-deals-airline-deals-module~audit-report-audit-report-module~booking-report-booking-r~c369235f"), __webpack_require__.e("default~booking-report-booking-report-module~bookings-bookings-module~email-templates-email-template~4a04f70a"), __webpack_require__.e("default~booking-report-booking-report-module~bookings-bookings-module~dynamic-report-dynamic-report-~09342fdb"), __webpack_require__.e("common"), __webpack_require__.e("transactions-transactions-module")]).then(__webpack_require__.bind(null, /*! ./transactions/transactions.module */ "./src/app/layout/accounts/transactions/transactions.module.ts")).then(m => m.TransactionsModule) },
        ]
    }
];
let AccountsRoutingModule = class AccountsRoutingModule {
};
AccountsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AccountsRoutingModule);



/***/ }),

/***/ "./src/app/layout/accounts/accounts.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/accounts/accounts.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hY2NvdW50cy9hY2NvdW50cy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/layout/accounts/accounts.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/accounts/accounts.component.ts ***!
  \*******************************************************/
/*! exports provided: AccountsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsComponent", function() { return AccountsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_accounts_transactions_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/accounts/transactions.service */ "./src/app/shared/services/accounts/transactions.service.ts");



let AccountsComponent = class AccountsComponent {
    constructor(transactionsService) {
        this.transactionsService = transactionsService;
    }
    ngOnInit() {
    }
};
AccountsComponent.ctorParameters = () => [
    { type: src_app_shared_services_accounts_transactions_service__WEBPACK_IMPORTED_MODULE_2__["TransactionsService"] }
];
AccountsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accounts',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./accounts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/accounts/accounts.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./accounts.component.scss */ "./src/app/layout/accounts/accounts.component.scss")).default]
    })
], AccountsComponent);



/***/ }),

/***/ "./src/app/layout/accounts/accounts.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/accounts/accounts.module.ts ***!
  \****************************************************/
/*! exports provided: AccountsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountsModule", function() { return AccountsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _accounts_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accounts-routing.module */ "./src/app/layout/accounts/accounts-routing.module.ts");
/* harmony import */ var _accounts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accounts.component */ "./src/app/layout/accounts/accounts.component.ts");





let AccountsModule = class AccountsModule {
};
AccountsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_accounts_component__WEBPACK_IMPORTED_MODULE_4__["AccountsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _accounts_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountsRoutingModule"]
        ]
    })
], AccountsModule);



/***/ }),

/***/ "./src/app/shared/services/accounts/transactions.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/services/accounts/transactions.service.ts ***!
  \******************************************************************/
/*! exports provided: TransactionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionsService", function() { return TransactionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




let TransactionsService = class TransactionsService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverURL;
    }
    // Get All users role list
    getList(filterData) {
        return this.http.post(`${this.url}/api/transaction-list`, filterData);
    }
    // Get User role Details
    getTransaction(id) {
        return this.http.get(`${this.url}/api/transaction-view/${id}`);
    }
    getTopUplist(filterData) {
        return this.http.post(`${this.url}/api/get-topup-list`, filterData);
    }
    // Get User role Details
    getTopup(id) {
        return this.http.get(`${this.url}/api/get-topup-view/${id}`);
    }
    updateTopup(formData) {
        return this.http.post(`${this.url}/api/update-topup-request`, formData);
    }
    getFloatingDepositList(formData) {
        return this.http.post(`${this.url}/api/get-floating-deposit-list`, formData);
    }
    addFloatingRequest(formData) {
        return this.http.post(`${this.url}/api/add-floating-deposit`, formData);
    }
    makeCorpTransaction(formData) {
        return this.http.post(`${this.url}/api/make-corporate-transaction`, formData);
    }
    addAgentTransaction(formData) {
        return this.http.post(`${this.url}/api/make-agent-transaction`, formData);
    }
    getOrganisationAccount() {
        return this.http.get(`${this.url}/api/get-self-organisation-account`);
    }
    exportTransaction(formData) {
        return this.http.post(`${this.url}/api/export-transaction`, formData);
    }
};
TransactionsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
TransactionsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], TransactionsService);



/***/ })

}]);
//# sourceMappingURL=accounts-accounts-module-es2016.js.map