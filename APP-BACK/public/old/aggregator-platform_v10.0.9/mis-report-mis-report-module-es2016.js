(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mis-report-mis-report-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/mis-report/mis-report.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/mis-report/mis-report.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui top attached tabular menu \">\r\n  <div class=\"item \" data-tab=\"first\" routerLink=\"/report/booking-report\">\r\n    Booking\r\n  </div>\r\n  <div class=\"item \" data-tab=\"second\" routerLink=\"/report/segment-report\">Segment</div>\r\n  <div class=\"item active\" data-tab=\"third\" routerLink=\"/report/mis-report\">MIS</div>\r\n  <div class=\"item\" data-tab=\"fourth\" routerLink=\"/report/search-log-report\">Search Log</div>\r\n  <div class=\"item\" data-tab=\"fifth\" routerLink=\"/report/audit-report\">Audit Trail Log</div>\r\n  <div class=\"item\" data-tab=\"sixth\" routerLink=\"/report/ticket-report\">Ticket</div>\r\n  <div class=\"item\" data-tab=\"seventh\" routerLink=\"/report/dynamic-report\">Dynamic Report</div>\r\n</div>\r\n<div class=\"ui bottom attached tab segment tabContent-block active\" data-tab=\"third\">\r\n  <div class=\"ui segment\">\r\n    <div class=\"ui fluid container\">\r\n      <div class=\"outer-basics\">\r\n        <div class=\"outer-basicForm\">\r\n          <div class=\"form-inner result-block\">\r\n            <div id=\"chartMISPie\">\r\n            </div>\r\n            <br>\r\n            <div id=\"chartMISArea\" class=\"area-chart\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/layout/report/mis-report/mis-report-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/report/mis-report/mis-report-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: MISReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MISReportRoutingModule", function() { return MISReportRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mis_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mis-report.component */ "./src/app/layout/report/mis-report/mis-report.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: '', component: _mis_report_component__WEBPACK_IMPORTED_MODULE_1__["MISReportComponent"] }
];
let MISReportRoutingModule = class MISReportRoutingModule {
};
MISReportRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], MISReportRoutingModule);



/***/ }),

/***/ "./src/app/layout/report/mis-report/mis-report.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/layout/report/mis-report/mis-report.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.area-chart {\n  height: 370px;\n  position: relative;\n}\n\n.mis-report-header {\n  position: relative;\n  left: 32%;\n  color: #0000007a;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 200;\n}\n\n#chartMISPie {\n  height: 370px;\n  width: 100%;\n}\n\n.ui.top.attached.tabular.menu {\n  margin: 24px 0px;\n}\n\n@media (max-width: 800px) {\n  .ui.top.attached.tabular.menu {\n    display: block;\n  }\n  .ui.top.attached.tabular.menu .item {\n    padding: 12px 0px;\n  }\n}\n\n@media (max-width: 767px) {\n  .result-block {\n    margin: 8px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3JlcG9ydC9taXMtcmVwb3J0L0U6XFxCZWxhbFxccHJvamVjdHNcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxccmVwb3J0XFxtaXMtcmVwb3J0XFxtaXMtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcmVwb3J0L21pcy1yZXBvcnQvbWlzLXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRDQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQ0FBQTtFQUNBLHdDQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQ0NKOztBRE1BO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUNISjs7QURNQTtFQUNJLGdCQUFBO0FDSEo7O0FETUE7RUFDSTtJQUNJLGNBQUE7RUNITjtFRElNO0lBQ0ksaUJBQUE7RUNGVjtBQUNGOztBRE1BO0VBQ0k7SUFDSSxzQkFBQTtFQ0pOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcmVwb3J0L21pcy1yZXBvcnQvbWlzLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWIuc2VnbWVudCB7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLnVpLmJvdHRvbS5hdHRhY2hlZC5hY3RpdmUudGFiLnNlZ21lbnQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQubWVudT4uaXRlbSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjg1NzE0MjlyZW0gMCAwIDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYXJlYS1jaGFydCB7XHJcbiAgICBoZWlnaHQ6IDM3MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubWlzLXJlcG9ydC1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMzIlO1xyXG4gICAgY29sb3I6ICMwMDAwMDA3YTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuXHJcbi8vIC51aS5mbHVpZC5jb250YWluZXIge1xyXG4vLyAgICAgcGFkZGluZzogMjhweDtcclxuLy8gfVxyXG5cclxuI2NoYXJ0TUlTUGllIHtcclxuICAgIGhlaWdodDogMzcwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xyXG4gICAgbWFyZ2luOiAyNHB4IDBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAudWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgLml0ZW0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLnJlc3VsdC1ibG9jayB7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSIsIi50YWIuc2VnbWVudCB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi51aS5ib3R0b20uYXR0YWNoZWQuYWN0aXZlLnRhYi5zZWdtZW50IHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxN3B4O1xufVxuXG4udWkudG9wLmF0dGFjaGVkLm1lbnUgPiAuaXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjg1NzE0MjlyZW0gMCAwIDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hcmVhLWNoYXJ0IHtcbiAgaGVpZ2h0OiAzNzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWlzLXJlcG9ydC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDMyJTtcbiAgY29sb3I6ICMwMDAwMDA3YTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbiNjaGFydE1JU1BpZSB7XG4gIGhlaWdodDogMzcwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XG4gIG1hcmdpbjogMjRweCAwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAudWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUgLml0ZW0ge1xuICAgIHBhZGRpbmc6IDEycHggMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnJlc3VsdC1ibG9jayB7XG4gICAgbWFyZ2luOiA4cHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/layout/report/mis-report/mis-report.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/report/mis-report/mis-report.component.ts ***!
  \******************************************************************/
/*! exports provided: MISReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MISReportComponent", function() { return MISReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assets_vendor_canvasjs_canvasjs_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../assets/vendor/canvasjs/canvasjs.min.js */ "./src/assets/vendor/canvasjs/canvasjs.min.js");
/* harmony import */ var _assets_vendor_canvasjs_canvasjs_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_vendor_canvasjs_canvasjs_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_shared_services_report_report_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/report/report.service.js */ "./src/app/shared/services/report/report.service.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");





let MISReportComponent = class MISReportComponent {
    constructor(newReportService, toastr) {
        this.newReportService = newReportService;
        this.toastr = toastr;
        this.newPieObj = {};
        this.newAreaChartObj = {};
        this.renderMISPieChart = () => {
            var datapoints = [];
            var data = JSON.parse(this.newPieObj);
            for (var i in data.FlightSearchLog) {
                datapoints.push({ y: data.FlightSearchLog[i].count, name: data.FlightSearchLog[i].platform });
            }
            let pieChart = new _assets_vendor_canvasjs_canvasjs_min_js__WEBPACK_IMPORTED_MODULE_2__["Chart"]("chartMISPie", {
                theme: "light2",
                animationEnabled: true,
                exportEnabled: true,
                title: {
                    fontFamily: "Ubuntu",
                    text: "Search Log Report"
                },
                data: [{
                        type: "pie",
                        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
                        indexLabel: "{name} - #percent%",
                        dataPoints: datapoints
                    }]
            });
            pieChart.render();
        };
        this.renderMISAreaChart = () => {
            var bookingData = [];
            var searchData = [];
            var ticketData = [];
            var data = JSON.parse(this.newAreaChartObj);
            for (var i in data.FlightSearchLog.book) {
                bookingData.push({ x: data.FlightSearchLog.book[i].month, y: data.FlightSearchLog.book[i].count });
            }
            for (var i in data.FlightSearchLog.ticket) {
                ticketData.push({ x: data.FlightSearchLog.ticket[i].month, y: data.FlightSearchLog.ticket[i].count });
            }
            for (var i in data.FlightSearchLog.search) {
                searchData.push({ x: data.FlightSearchLog.search[i].month, y: data.FlightSearchLog.search[i].count });
            }
            let areaChart = new _assets_vendor_canvasjs_canvasjs_min_js__WEBPACK_IMPORTED_MODULE_2__["Chart"]("chartMISArea", {
                animationEnabled: true,
                exportEnabled: true,
                title: {
                    fontFamily: "Ubuntu",
                    text: "Current Year Search Log Report"
                },
                axisY: {
                    title: "Count"
                },
                axisX: {
                    title: "Month"
                },
                toolTip: {
                    shared: true
                },
                data: [{
                        type: "stackedArea",
                        showInLegend: true,
                        toolTipContent: "<span style=\"color:#4F81BC\"><strong>{name}: </strong></span> {y}",
                        name: "Book",
                        dataPoints: bookingData
                    },
                    {
                        type: "stackedArea",
                        name: "ticket",
                        toolTipContent: "<span style=\"color:#C0504E\"><strong>{name}: </strong></span> {y}<br><b>Total:<b> #total",
                        showInLegend: true,
                        dataPoints: ticketData
                    },
                    {
                        type: "stackedArea",
                        name: "Search",
                        toolTipContent: "<span style=\"color:#C0504E\"><strong>{name}: </strong></span> {y}<br><b>Total:<b> #total",
                        showInLegend: true,
                        dataPoints: searchData
                    },
                ]
            });
            areaChart.render();
        };
    }
    ngOnInit() {
        this.fetchAllFlightPlatforms();
        this.fetchAllMonthlyReport();
    }
    fetchAllFlightPlatforms() {
        this.newReportService.GetAllFlightPlatforms()
            .subscribe((res) => {
            if (res.status == 200) {
                if (res.FlightSearchLog.length != 0) {
                    this.newPieObj = JSON.stringify(res);
                    this.renderMISPieChart();
                }
                else {
                    this.toastr.info(`There is no data available`, ``, {
                        timeOut: 2000,
                        progressBar: false,
                        positionClass: 'toast-bottom-right'
                    });
                }
            }
            else {
                this.toastr.error(`${res.msg}`, `${res.msg}`, {
                    timeOut: 2000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    }
    fetchAllMonthlyReport() {
        this.newReportService.GetAllFlightMonthlyReport()
            .subscribe((res) => {
            if (res.status == 200) {
                this.newAreaChartObj = JSON.stringify(res);
                this.renderMISAreaChart();
            }
            else {
                this.toastr.error(`${res.msg}`, `${res.msg}`, {
                    timeOut: 2000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    }
};
MISReportComponent.ctorParameters = () => [
    { type: src_app_shared_services_report_report_service_js__WEBPACK_IMPORTED_MODULE_3__["ReportService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
MISReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mis-report',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mis-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/mis-report/mis-report.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mis-report.component.scss */ "./src/app/layout/report/mis-report/mis-report.component.scss")).default]
    })
], MISReportComponent);



/***/ }),

/***/ "./src/app/layout/report/mis-report/mis-report.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/report/mis-report/mis-report.module.ts ***!
  \***************************************************************/
/*! exports provided: MISReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MISReportModule", function() { return MISReportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _mis_report_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mis-report-routing.module */ "./src/app/layout/report/mis-report/mis-report-routing.module.ts");
/* harmony import */ var _mis_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mis-report.component */ "./src/app/layout/report/mis-report/mis-report.component.ts");





let MISReportModule = class MISReportModule {
};
MISReportModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_mis_report_component__WEBPACK_IMPORTED_MODULE_4__["MISReportComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _mis_report_routing_module__WEBPACK_IMPORTED_MODULE_3__["MISReportRoutingModule"]
        ]
    })
], MISReportModule);



/***/ }),

/***/ "./src/app/shared/services/report/report.service.js":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/report/report.service.js ***!
  \**********************************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let ReportService = class ReportService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL;
        this.pager = {};
        this.pageOfItems = [];
        // Http Headers
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    // GET ALL FLIGHTS
    GetAllFlightLogs(data) {
        return this.http.post(`${this.url}/api/fetch-all-Flight-Search-Log`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // GET ALL HOTELS
    GetAllHotelLogs(data) {
        return this.http.post(`${this.url}/api/fetch-all-Hotel-Search-Log`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // GET ALL CARS
    GetAllCarLogs(data) {
        return this.http.post(`${this.url}/api/fetch-all-Car-Search-Log`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // GET ALL ACTIVITY
    GetAllActivityLogs(data) {
        return this.http.post(`${this.url}/api/fetch-all-Activities-Search-Log`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // GET ALL TRANSFER
    GetAllTransferLogs(data) {
        return this.http.post(`${this.url}/api/fetch-all-Transfer-Search-Log`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // GET ALL INSURANCE
    GetAllInsuranceLogs(data) {
        return this.http.post(`${this.url}/api/fetch-all-Insurance-Search-Log`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // GET ALL AUDIT TRAIL
    GetAllAuditTrail(data) {
        return this.http.post(`${this.url}/api/fetch-all-Audit-Trail`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // GET ALL SEGMENTS
    GetAllSegments(tourID, limit, pageIndex) {
        return this.http.get(`${this.url}/api/fetch-all-segment-details`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    //Fetch all organization
    GetAllOrganization() {
        return this.http.get(`${this.url}/api/pos/fetch-active-pos`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    //POST
    NewDynamicPivotTable(data) {
        return this.http.post(`${this.url}/api/dynamic-report-data`, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    searchReportBooking(data) {
        return this.http.post(`${this.url}/api/search-bookings-by-organisation`, data);
    }
    //search tickets
    searchTicketReport(data) {
        return this.http.post(`${this.url}/api/search-tickets-new`, data);
    }
    // GET audit trail search
    GetAllAuditSearchReport(params) {
        var queryString = Object.keys(params).map(function (key) {
            return key + '=' + params[key];
        }).join('&');
        return this.http.get(`${this.url}/api/get-audit-trails?${queryString}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    //Fetch all agents
    GetAllAgents() {
        return this.http.get(`${this.url}/api/fetch-all-organization`, { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    //Fetch all products
    GetAllProducts(tourID, limit, pageIndex) {
        return this.http.get(`${this.url}/api/get-active-products`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    //Fetch all suppliers
    GetAllSuppliers(tourID, limit, pageIndex) {
        return this.http.get(`${this.url}/api/fetch-all-supplier`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    //Fetch all flight search platforms
    GetAllFlightPlatforms() {
        return this.http.get(`${this.url}/api/Flight-Search-Log/count`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    //Fetch all flight search platforms
    GetAllFlightMonthlyReport() {
        return this.http.get(`${this.url}/api/Flight-Search-Log/monthlwise`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    //fetch all airport details
    GetAllAirportCode() {
        return this.http.get(`${this.url}/api/get-airports-cache`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    getAllBookingDetails() {
        return this.http.get(`${this.url}/api/fetch_value/:id`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // Get User role Details
    getFlightBookingDetails(id) {
        return this.http.get(`${this.url}/api/booking/${id}`);
    }
    GetSearchedSegmentReports(params) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.url}/api/search-segments`, params, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    GetFilteredFlightSearch(params) {
        return this.http.post(`${this.url}/api/fetch-all-Flight-Search-Log`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    exportBooking(data) {
        return this.http.post(`${this.url}/api/export-booking-report`, data);
    }
    exportSearchLog(data) {
        return this.http.post(`${this.url}/api/export-search-log-report`, data);
    }
    exportTicket(data) {
        return this.http.post(`${this.url}/api/export-tickets-report`, data);
    }
    // Error handling
    errorHandl(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
    }
};
ReportService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ReportService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ReportService);

//# sourceMappingURL=report.service.js.map

/***/ })

}]);
//# sourceMappingURL=mis-report-mis-report-module-es2016.js.map