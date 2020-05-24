(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-report-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/report.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/report.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"outer-segment\">\r\n  <div class=\"user\">\r\n    <h3 class=\"user_title\">Report</h3>\r\n  </div>\r\n  <form class=\"ui form b2b_basic_form\" autocomplete=\"off\" [formGroup]=\"newReportForm\">\r\n    <router-outlet></router-outlet>\r\n  </form>\r\n</div>");

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
            { path: 'booking-report', loadChildren: () => Promise.all(/*! import() | booking-report-booking-report-module */[__webpack_require__.e("default~airline-deals-airline-deals-module~audit-report-audit-report-module~booking-report-booking-r~c369235f"), __webpack_require__.e("default~booking-report-booking-report-module~bookings-bookings-module~email-templates-email-template~4a04f70a"), __webpack_require__.e("default~booking-report-booking-report-module~bookings-bookings-module~dynamic-report-dynamic-report-~09342fdb"), __webpack_require__.e("common"), __webpack_require__.e("booking-report-booking-report-module")]).then(__webpack_require__.bind(null, /*! ./booking-report/booking-report.module */ "./src/app/layout/report/booking-report/booking-report.module.ts")).then(m => m.BookingReportModule) },
            { path: 'segment-report', loadChildren: () => Promise.all(/*! import() | segment-report-segment-report-module */[__webpack_require__.e("default~airline-deals-airline-deals-module~audit-report-audit-report-module~booking-report-booking-r~c369235f"), __webpack_require__.e("segment-report-segment-report-module")]).then(__webpack_require__.bind(null, /*! ./segment-report/segment-report.module */ "./src/app/layout/report/segment-report/segment-report.module.ts")).then(m => m.SegmentReportModule) },
            { path: 'mis-report', loadChildren: () => Promise.all(/*! import() | mis-report-mis-report-module */[__webpack_require__.e("default~mis-report-mis-report-module~view-user-view-user-module"), __webpack_require__.e("mis-report-mis-report-module")]).then(__webpack_require__.bind(null, /*! ./mis-report/mis-report.module */ "./src/app/layout/report/mis-report/mis-report.module.ts")).then(m => m.MISReportModule) },
            { path: 'audit-report', loadChildren: () => Promise.all(/*! import() | audit-report-audit-report-module */[__webpack_require__.e("default~airline-deals-airline-deals-module~audit-report-audit-report-module~booking-report-booking-r~c369235f"), __webpack_require__.e("audit-report-audit-report-module")]).then(__webpack_require__.bind(null, /*! ./audit-report/audit-report.module */ "./src/app/layout/report/audit-report/audit-report.module.ts")).then(m => m.AuditReportModule) },
            { path: 'dynamic-report', loadChildren: () => Promise.all(/*! import() | dynamic-report-dynamic-report-module */[__webpack_require__.e("default~booking-report-booking-report-module~bookings-bookings-module~dynamic-report-dynamic-report-~09342fdb"), __webpack_require__.e("dynamic-report-dynamic-report-module")]).then(__webpack_require__.bind(null, /*! ./dynamic-report/dynamic-report.module */ "./src/app/layout/report/dynamic-report/dynamic-report.module.ts")).then(m => m.DynamicReportModule) },
            { path: 'ticket-report', loadChildren: () => Promise.all(/*! import() | ticket-report-ticket-report-module */[__webpack_require__.e("default~airline-deals-airline-deals-module~audit-report-audit-report-module~booking-report-booking-r~c369235f"), __webpack_require__.e("default~booking-report-booking-report-module~bookings-bookings-module~dynamic-report-dynamic-report-~09342fdb"), __webpack_require__.e("common"), __webpack_require__.e("ticket-report-ticket-report-module")]).then(__webpack_require__.bind(null, /*! ./ticket-report/ticket-report.module */ "./src/app/layout/report/ticket-report/ticket-report.module.ts")).then(m => m.TicketReportModule) },
            { path: 'search-log-report', loadChildren: () => Promise.all(/*! import() | search-log-report-search-log-report-module */[__webpack_require__.e("default~airline-deals-airline-deals-module~audit-report-audit-report-module~booking-report-booking-r~c369235f"), __webpack_require__.e("search-log-report-search-log-report-module")]).then(__webpack_require__.bind(null, /*! ./search-log-report/search-log-report.module */ "./src/app/layout/report/search-log-report/search-log-report.module.ts")).then(m => m.SearchLogReportModule) },
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
/* harmony default export */ __webpack_exports__["default"] = (".outer-segment {\n  margin: 0px;\n}\n\n.user {\n  padding: 0px 24px;\n}\n\n.user_title {\n  margin: 0;\n  font-style: normal;\n  font-weight: 400 !important;\n  font-size: 20px;\n  line-height: 23px;\n  color: #4F4F4F;\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\nh3 {\n  margin-top: 24px !important;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\n.outer-form,\n.outer_corpForm {\n  box-sizing: border-box;\n  border-radius: 5px;\n  margin: 45px 32px 111px 25px;\n}\n\n.outer-form.booking,\n.outer_corpForm.booking {\n  border: 0 !important;\n}\n\n@media (max-width: 1440px) {\n  .outer-segment .user {\n    padding: 0px 24px;\n  }\n}\n\n@media (max-width: 1280px) {\n  .outer-segment .user {\n    padding: 0px 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3JlcG9ydC9FOlxcQmVsYWxcXHByb2plY3RzXFxwcm9kdWN0aW9uLWJ1aWxkXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHJlcG9ydFxccmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFdBQUE7QUNBRjs7QURFQTtFQUNFLGlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNFRjs7QURDQTtFQUNFLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxrQ0FBQTtFQUNBLHdDQUFBO0FDRUY7O0FEQ0E7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUNFRjs7QURDQTtFQUNJLDJCQUFBO0FDRUo7O0FEQ0E7RUFDRSw0Q0FBQTtBQ0VGOztBRENBOztFQUVFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkFBQTtBQ0VGOztBREFFOztFQUNFLG9CQUFBO0FDR0o7O0FEQ0E7RUFFUTtJQUNJLGlCQUFBO0VDQ1Y7QUFDRjs7QURHQTtFQUVRO0lBQ0ksaUJBQUE7RUNGVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3JlcG9ydC9yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXItc2VnbWVudCB7XHJcbiAgLy8gbWFyZ2luOiAwcHggMjBweCAwcHggMTVweDtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG4udXNlciB7XHJcbiAgcGFkZGluZzogMHB4IDI0cHg7XHJcbn1cclxuLnVzZXJfdGl0bGUge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjNweDtcclxuICBjb2xvcjojNEY0RjRGO1xyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLnVpLnRvcC5hdHRhY2hlZC5tZW51Pi5pdGVtIHtcclxuICBib3JkZXItcmFkaXVzOiAuMjg1NzE0MjlyZW0gMCAwIDA7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLmJvdHRvbS5hdHRhY2hlZC5hY3RpdmUudGFiLnNlZ21lbnQge1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE3cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIG1hcmdpbi10b3A6IDI0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYi5zZWdtZW50IHtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuLm91dGVyLWZvcm0sXHJcbi5vdXRlcl9jb3JwRm9ybSB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiA0NXB4IDMycHggMTExcHggMjVweDtcclxuXHJcbiAgJi5ib29raW5nIHtcclxuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgLm91dGVyLXNlZ21lbnQge1xyXG4gICAgICAgIC51c2VyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDI0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAub3V0ZXItc2VnbWVudCB7XHJcbiAgICAgICAgLnVzZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIub3V0ZXItc2VnbWVudCB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4udXNlciB7XG4gIHBhZGRpbmc6IDBweCAyNHB4O1xufVxuXG4udXNlcl90aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGNvbG9yOiAjNEY0RjRGO1xufVxuXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi51aS50b3AuYXR0YWNoZWQubWVudSA+IC5pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yODU3MTQyOXJlbSAwIDAgMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLnVpLmJvdHRvbS5hdHRhY2hlZC5hY3RpdmUudGFiLnNlZ21lbnQge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XG59XG5cbmgzIHtcbiAgbWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xufVxuXG4udGFiLnNlZ21lbnQge1xuICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLm91dGVyLWZvcm0sXG4ub3V0ZXJfY29ycEZvcm0ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogNDVweCAzMnB4IDExMXB4IDI1cHg7XG59XG4ub3V0ZXItZm9ybS5ib29raW5nLFxuLm91dGVyX2NvcnBGb3JtLmJvb2tpbmcge1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAub3V0ZXItc2VnbWVudCAudXNlciB7XG4gICAgcGFkZGluZzogMHB4IDI0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgLm91dGVyLXNlZ21lbnQgLnVzZXIge1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICB9XG59Il19 */");

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