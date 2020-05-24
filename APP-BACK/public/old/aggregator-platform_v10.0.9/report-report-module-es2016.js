(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-report-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/report.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/report.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"outer-segment\">\r\n  <div class=\"user\">\r\n    <h3 class=\"user_title\">Report</h3>\r\n  </div>\r\n  <form class=\"ui form b2b_basic_form\" [formGroup]=\"newReportForm\">\r\n    <router-outlet></router-outlet>\r\n  </form>\r\n</div>");

/***/ }),

/***/ "./src/app/layout/report/report-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/layout/report/report-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportRoutingModule", function() { return ReportRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report.component */ "./src/app/layout/report/report.component.ts");




const routes = [
    {
        path: '',
        component: _report_component__WEBPACK_IMPORTED_MODULE_3__["ReportComponent"],
        children: [
            { path: '', redirectTo: 'booking-report', pathMatch: 'prefix' },
            { path: 'booking-report', loadChildren: () => Promise.all(/*! import() | booking-report-booking-report-module */[__webpack_require__.e("default~airline-deals-airline-deals-module~audit-report-audit-report-module~booking-report-booking-r~d6069c4c"), __webpack_require__.e("default~activities-activities-module~booking-report-booking-report-module~bookings-bookings-module~e~58a6e317"), __webpack_require__.e("default~booking-report-booking-report-module~bookings-bookings-module~dynamic-report-dynamic-report-~09342fdb"), __webpack_require__.e("common"), __webpack_require__.e("booking-report-booking-report-module")]).then(__webpack_require__.bind(null, /*! ./booking-report/booking-report.module */ "./src/app/layout/report/booking-report/booking-report.module.ts")).then(m => m.BookingReportModule) },
            { path: 'segment-report', loadChildren: () => Promise.all(/*! import() | segment-report-segment-report-module */[__webpack_require__.e("default~airline-deals-airline-deals-module~audit-report-audit-report-module~booking-report-booking-r~d6069c4c"), __webpack_require__.e("segment-report-segment-report-module")]).then(__webpack_require__.bind(null, /*! ./segment-report/segment-report.module */ "./src/app/layout/report/segment-report/segment-report.module.ts")).then(m => m.SegmentReportModule) },
            { path: 'mis-report', loadChildren: () => Promise.all(/*! import() | mis-report-mis-report-module */[__webpack_require__.e("default~mis-report-mis-report-module~view-user-view-user-module"), __webpack_require__.e("mis-report-mis-report-module")]).then(__webpack_require__.bind(null, /*! ./mis-report/mis-report.module */ "./src/app/layout/report/mis-report/mis-report.module.ts")).then(m => m.MISReportModule) },
            { path: 'audit-report', loadChildren: () => Promise.all(/*! import() | audit-report-audit-report-module */[__webpack_require__.e("default~airline-deals-airline-deals-module~audit-report-audit-report-module~booking-report-booking-r~d6069c4c"), __webpack_require__.e("audit-report-audit-report-module")]).then(__webpack_require__.bind(null, /*! ./audit-report/audit-report.module */ "./src/app/layout/report/audit-report/audit-report.module.ts")).then(m => m.AuditReportModule) },
            { path: 'dynamic-report', loadChildren: () => Promise.all(/*! import() | dynamic-report-dynamic-report-module */[__webpack_require__.e("default~booking-report-booking-report-module~bookings-bookings-module~dynamic-report-dynamic-report-~09342fdb"), __webpack_require__.e("dynamic-report-dynamic-report-module")]).then(__webpack_require__.bind(null, /*! ./dynamic-report/dynamic-report.module */ "./src/app/layout/report/dynamic-report/dynamic-report.module.ts")).then(m => m.DynamicReportModule) },
            { path: 'ticket-report', loadChildren: () => Promise.all(/*! import() | ticket-report-ticket-report-module */[__webpack_require__.e("default~airline-deals-airline-deals-module~audit-report-audit-report-module~booking-report-booking-r~d6069c4c"), __webpack_require__.e("default~booking-report-booking-report-module~bookings-bookings-module~dynamic-report-dynamic-report-~09342fdb"), __webpack_require__.e("common"), __webpack_require__.e("ticket-report-ticket-report-module")]).then(__webpack_require__.bind(null, /*! ./ticket-report/ticket-report.module */ "./src/app/layout/report/ticket-report/ticket-report.module.ts")).then(m => m.TicketReportModule) },
            { path: 'search-log-report', loadChildren: () => Promise.all(/*! import() | search-log-report-search-log-report-module */[__webpack_require__.e("default~airline-deals-airline-deals-module~audit-report-audit-report-module~booking-report-booking-r~d6069c4c"), __webpack_require__.e("search-log-report-search-log-report-module")]).then(__webpack_require__.bind(null, /*! ./search-log-report/search-log-report.module */ "./src/app/layout/report/search-log-report/search-log-report.module.ts")).then(m => m.SearchLogReportModule) },
        ]
    }
];
let ReportRoutingModule = class ReportRoutingModule {
};
ReportRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ReportRoutingModule);



/***/ }),

/***/ "./src/app/layout/report/report.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/report/report.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".outer-segment {\n  margin: 0px;\n}\n\n.user {\n  padding: 0px 24px;\n}\n\n.user_title {\n  margin: 0;\n  font-style: normal;\n  font-weight: 700 !important;\n  font-size: 20px;\n  line-height: 23px;\n  color: #181B20;\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\n.outer-form,\n.outer_corpForm {\n  box-sizing: border-box;\n  border-radius: 5px;\n  margin: 45px 32px 111px 25px;\n}\n\n.outer-form.booking,\n.outer_corpForm.booking {\n  border: 0 !important;\n}\n\n@media (max-width: 1440px) {\n  .outer-segment .user {\n    padding: 0px 24px;\n  }\n}\n\n@media (max-width: 1280px) {\n  .outer-segment .user {\n    padding: 0px 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3JlcG9ydC9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHJlcG9ydFxccmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFdBQUE7QUNBRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNFRjs7QURDQTtFQUNFLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQ0FBQTtFQUNBLHdDQUFBO0FDRUY7O0FEQ0E7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUNFRjs7QURDQTtFQUNFLDRDQUFBO0FDRUY7O0FEQ0E7O0VBRUUsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0FDRUY7O0FEQUU7O0VBQ0Usb0JBQUE7QUNHSjs7QURDQTtFQUVRO0lBQ0ksaUJBQUE7RUNDVjtBQUNGOztBREdBO0VBRVE7SUFDSSxpQkFBQTtFQ0ZWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlci1zZWdtZW50IHtcclxuICAvLyBtYXJnaW46IDBweCAyMHB4IDBweCAxNXB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcbi51c2VyIHtcclxuICBwYWRkaW5nOiAwcHggMjRweDtcclxufVxyXG4udXNlcl90aXRsZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gIGNvbG9yOiAjMTgxQjIwO1xyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLnVpLnRvcC5hdHRhY2hlZC5tZW51Pi5pdGVtIHtcclxuICBib3JkZXItcmFkaXVzOiAuMjg1NzE0MjlyZW0gMCAwIDA7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLmJvdHRvbS5hdHRhY2hlZC5hY3RpdmUudGFiLnNlZ21lbnQge1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE3cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbn1cclxuXHJcbi50YWIuc2VnbWVudCB7XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi5vdXRlci1mb3JtLFxyXG4ub3V0ZXJfY29ycEZvcm0ge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIG1hcmdpbjogNDVweCAzMnB4IDExMXB4IDI1cHg7XHJcblxyXG4gICYuYm9va2luZyB7XHJcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIC5vdXRlci1zZWdtZW50IHtcclxuICAgICAgICAudXNlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgLm91dGVyLXNlZ21lbnQge1xyXG4gICAgICAgIC51c2VyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLm91dGVyLXNlZ21lbnQge1xuICBtYXJnaW46IDBweDtcbn1cblxuLnVzZXIge1xuICBwYWRkaW5nOiAwcHggMjRweDtcbn1cblxuLnVzZXJfdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBjb2xvcjogIzE4MUIyMDtcbn1cblxuLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4udWkudG9wLmF0dGFjaGVkLm1lbnUgPiAuaXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjg1NzE0MjlyZW0gMCAwIDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi51aS5ib3R0b20uYXR0YWNoZWQuYWN0aXZlLnRhYi5zZWdtZW50IHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxN3B4O1xufVxuXG4udGFiLnNlZ21lbnQge1xuICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLm91dGVyLWZvcm0sXG4ub3V0ZXJfY29ycEZvcm0ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogNDVweCAzMnB4IDExMXB4IDI1cHg7XG59XG4ub3V0ZXItZm9ybS5ib29raW5nLFxuLm91dGVyX2NvcnBGb3JtLmJvb2tpbmcge1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAub3V0ZXItc2VnbWVudCAudXNlciB7XG4gICAgcGFkZGluZzogMHB4IDI0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgLm91dGVyLXNlZ21lbnQgLnVzZXIge1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/report/report.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/report/report.component.ts ***!
  \***************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/report/report.service */ "./src/app/shared/services/report/report.service.ts");




let ReportComponent = class ReportComponent {
    constructor(fb, newReportService) {
        this.fb = fb;
        this.newReportService = newReportService;
        this.newReportForm = this.fb.group({
            selectTarget: ['']
        });
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        $('.menu .item').tab();
        $('.ui.dropdown').dropdown();
    }
};
ReportComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"] }
];
ReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-report',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/report.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./report.component.scss */ "./src/app/layout/report/report.component.scss")).default]
    })
], ReportComponent);



/***/ }),

/***/ "./src/app/layout/report/report.module.ts":
/*!************************************************!*\
  !*** ./src/app/layout/report/report.module.ts ***!
  \************************************************/
/*! exports provided: ReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportModule", function() { return ReportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report.component */ "./src/app/layout/report/report.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _report_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report-routing.module */ "./src/app/layout/report/report-routing.module.ts");






let ReportModule = class ReportModule {
};
ReportModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_report_component__WEBPACK_IMPORTED_MODULE_1__["ReportComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _report_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        ]
    })
], ReportModule);



/***/ })

}]);
//# sourceMappingURL=report-report-module-es2016.js.map