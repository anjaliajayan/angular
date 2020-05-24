(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/search/search.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/search/search.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./src/app/layout/search/search-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/search/search-routing.module.ts ***!
  \********************************************************/
/*! exports provided: SearchRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchRoutingModule", function() { return SearchRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.component */ "./src/app/layout/search/search.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        component: _search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"],
        children: [
            { path: '', redirectTo: 'flights', pathMatch: 'prefix' },
            { path: 'flights', loadChildren: () => Promise.all(/*! import() | flights-flights-module */[__webpack_require__.e("default~airline-deals-airline-deals-module~audit-report-audit-report-module~booking-report-booking-r~d6069c4c"), __webpack_require__.e("default~airline-deals-airline-deals-module~create-user-create-user-module~currency-configuration-cur~ba44a2d1"), __webpack_require__.e("default~activities-activities-module~booking-report-booking-report-module~bookings-bookings-module~e~58a6e317"), __webpack_require__.e("default~airline-deals-airline-deals-module~cars-cars-module~create-user-create-user-module~edit-user~81786207"), __webpack_require__.e("default~cars-cars-module~create-user-create-user-module~edit-user-edit-user-module~flights-flights-m~3781d070"), __webpack_require__.e("default~cars-cars-module~dashboard-dashboard-module~flights-flights-module"), __webpack_require__.e("default~cars-cars-module~flights-flights-module~point-sales-management-point-sales-management-module"), __webpack_require__.e("default~bookings-bookings-module~flights-flights-module~seat-map-seat-map-module"), __webpack_require__.e("default~cars-cars-module~flights-flights-module"), __webpack_require__.e("common"), __webpack_require__.e("flights-flights-module")]).then(__webpack_require__.bind(null, /*! ./flights/flights.module */ "./src/app/layout/search/flights/flights.module.ts")).then(m => m.FlightsModule) },
            { path: 'activities', loadChildren: () => Promise.all(/*! import() | activities-activities-module */[__webpack_require__.e("default~activities-activities-module~booking-report-booking-report-module~bookings-bookings-module~e~58a6e317"), __webpack_require__.e("default~activities-activities-module~hotels-hotels-module~layout-search-hotels-hotels-module"), __webpack_require__.e("activities-activities-module")]).then(__webpack_require__.bind(null, /*! ./activities/activities.module */ "./src/app/layout/search/activities/activities.module.ts")).then(m => m.ActivitiesModule) },
            { path: 'cars', loadChildren: () => Promise.all(/*! import() | cars-cars-module */[__webpack_require__.e("default~airline-deals-airline-deals-module~cars-cars-module~create-user-create-user-module~edit-user~81786207"), __webpack_require__.e("default~cars-cars-module~create-user-create-user-module~edit-user-edit-user-module~flights-flights-m~3781d070"), __webpack_require__.e("default~cars-cars-module~dashboard-dashboard-module~flights-flights-module"), __webpack_require__.e("default~cars-cars-module~flights-flights-module~point-sales-management-point-sales-management-module"), __webpack_require__.e("default~cars-cars-module~flights-flights-module"), __webpack_require__.e("cars-cars-module")]).then(__webpack_require__.bind(null, /*! ./cars/cars.module */ "./src/app/layout/search/cars/cars.module.ts")).then(m => m.CarsModule) },
            { path: 'holidays', loadChildren: () => __webpack_require__.e(/*! import() | holidays-holidays-module */ "holidays-holidays-module").then(__webpack_require__.bind(null, /*! ./holidays/holidays.module */ "./src/app/layout/search/holidays/holidays.module.ts")).then(m => m.HolidaysModule) },
            { path: 'hotels', loadChildren: () => Promise.all(/*! import() | hotels-hotels-module */[__webpack_require__.e("default~activities-activities-module~booking-report-booking-report-module~bookings-bookings-module~e~58a6e317"), __webpack_require__.e("default~activities-activities-module~hotels-hotels-module~layout-search-hotels-hotels-module"), __webpack_require__.e("default~hotels-hotels-module~layout-search-hotels-hotels-module")]).then(__webpack_require__.bind(null, /*! ./hotels/hotels.module */ "./src/app/layout/search/hotels/hotels.module.ts")).then(m => m.HotelsModule) },
            { path: 'insurances', loadChildren: () => Promise.all(/*! import() | insurances-insurances-module */[__webpack_require__.e("default~airline-deals-airline-deals-module~audit-report-audit-report-module~booking-report-booking-r~d6069c4c"), __webpack_require__.e("insurances-insurances-module")]).then(__webpack_require__.bind(null, /*! ./insurances/insurances.module */ "./src/app/layout/search/insurances/insurances.module.ts")).then(m => m.InsurancesModule) },
            { path: 'transfers', loadChildren: () => __webpack_require__.e(/*! import() | transfers-transfers-module */ "transfers-transfers-module").then(__webpack_require__.bind(null, /*! ./transfers/transfers.module */ "./src/app/layout/search/transfers/transfers.module.ts")).then(m => m.TransfersModule) },
            { path: 'seat-map', loadChildren: () => Promise.all(/*! import() | seat-map-seat-map-module */[__webpack_require__.e("default~activities-activities-module~booking-report-booking-report-module~bookings-bookings-module~e~58a6e317"), __webpack_require__.e("default~bookings-bookings-module~flights-flights-module~seat-map-seat-map-module")]).then(__webpack_require__.bind(null, /*! ./seat-map/seat-map.module */ "./src/app/layout/search/seat-map/seat-map.module.ts")).then(m => m.SeatMapModule) },
        ]
    }
];
let SearchRoutingModule = class SearchRoutingModule {
};
SearchRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], SearchRoutingModule);



/***/ }),

/***/ "./src/app/layout/search/search.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/search/search.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/layout/search/search.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/search/search.component.ts ***!
  \***************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SearchComponent = class SearchComponent {
    constructor() { }
    ngOnInit() {
    }
};
SearchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/search/search.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search.component.scss */ "./src/app/layout/search/search.component.scss")).default]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/layout/search/search.module.ts":
/*!************************************************!*\
  !*** ./src/app/layout/search/search.module.ts ***!
  \************************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.component */ "./src/app/layout/search/search.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _search_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-routing.module */ "./src/app/layout/search/search-routing.module.ts");







let SearchModule = class SearchModule {
};
SearchModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_search_component__WEBPACK_IMPORTED_MODULE_1__["SearchComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _search_routing_module__WEBPACK_IMPORTED_MODULE_6__["SearchRoutingModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"]
        ]
    })
], SearchModule);



/***/ })

}]);
//# sourceMappingURL=search-search-module-es2016.js.map