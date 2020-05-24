(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["segment-report-segment-report-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/segment-report/segment-report.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/segment-report/segment-report.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui top attached tabular menu \">\r\n  <div class=\"item \" data-tab=\"first\" routerLink=\"/report/booking-report\">\r\n    Booking\r\n  </div>\r\n  <div class=\"item active\" data-tab=\"second\" routerLink=\"/report/segment-report\">Segment</div>\r\n  <div class=\"item\" data-tab=\"third\" routerLink=\"/report/mis-report\">MIS</div>\r\n  <div class=\"item\" data-tab=\"fourth\" routerLink=\"/report/search-log-report\">Search Log</div>\r\n  <div class=\"item\" data-tab=\"fifth\" routerLink=\"/report/audit-report\">Audit Trail Log</div>\r\n  <div class=\"item\" data-tab=\"sixth\" routerLink=\"/report/ticket-report\">Ticket</div>\r\n  <div class=\"item\" data-tab=\"seventh\" routerLink=\"/report/dynamic-report\">Dynamic Report</div>\r\n</div>\r\n<div class=\"ui bottom attached tab segment active tabContent-block\" data-tab=\"second\">\r\n  <div class=\"ui segment\">\r\n    <div class=\"ui fluid container\">\r\n      <div class=\"outer-basics\">\r\n        <form [formGroup]=\"segmentReportForm\" (ngSubmit)=\"segmentViewReport()\" class=\"ui form report-form\">\r\n          <div class=\"field\">\r\n            <div class=\"outer-basicForm\">\r\n              <div class=\"form-inner\">\r\n                <div class=\"fields first-field\">\r\n                  <!-- <div class=\"one wide field\"></div> -->\r\n                  <!-- <div class=\"three wide field\" [ngClass]=\"{'error': ((submitted && f.selectDeparture.errors) && f.selectDeparture.errors.required) }\"> -->\r\n                  <div class=\"five wide field seg-field\">\r\n                    <label>Departure\r\n                      <i class=\"fa fa-exclamation-circle tooltip\">\r\n                        <span class=\"tooltiptext\">\r\n                          Comma-separated list of airport code e.g. DXB, JED, LHR .Default ALL will be selected.\r\n                        </span>\r\n                      </i>\r\n                    </label>\r\n                    <select class=\"ui fluid search dropdownTwo multiple_search\" formControlName=\"selectDeparture\"\r\n                      multiple=''>\r\n                      <option class=\"item\" *ngFor=\"let departure of departures\" value=\"{{departure.AirportCode}}\">\r\n                        {{departure.AirportCode}}</option>\r\n                    </select>\r\n                  </div>\r\n                  <!-- <div class=\"three wide field\" [ngClass]=\"{'error': ((submitted && f.selectArrival.errors) && f.selectArrival.errors.required) }\"> -->\r\n                  <div class=\"five wide field seg-field\">\r\n                    <label>Arrival\r\n                      <i class=\"fa fa-exclamation-circle tooltip\">\r\n                        <span class=\"tooltiptext\">\r\n                          Comma-separated list of airport code e.g. DXB, JED, LHR .Default ALL will be selected.\r\n                        </span>\r\n                      </i>\r\n                    </label>\r\n                    <select class=\"ui fluid search dropdownThree multiple_search\" formControlName=\"selectArrival\"\r\n                      multiple=''>\r\n                      <option class=\"item\" *ngFor=\"let arrival of arrivals\" value=\"{{arrival.AirportCode}}\">\r\n                        {{arrival.AirportCode}}</option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"six wide field prod-field\"\r\n                    [ngClass]=\"{'error': ((submitted && f.selectAirline.errors) && f.selectAirline.errors.required) }\">\r\n                    <label>Airline<span class=\"mandatory\">*</span></label>\r\n                    <select class=\"ui fluid search dropdown\" formControlName=\"selectAirline\" required>\r\n                      <option value=\"\">Airlines</option>\r\n                      <option class=\"item\" *ngFor=\"let airline of airlines\" value=\"{{airline.name}}\">{{airline.name}}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"fields last-field\">\r\n                  <!-- <div class=\"one wide field\"></div> -->\r\n                  <div class=\"five wide field bookings_pickers\"\r\n                    [ngClass]=\"{'error': ((submitted && f.segmentStartDate.errors) && f.segmentStartDate.errors.required) }\">\r\n                    <label>Start Date<span class=\"mandatory\">*</span></label>\r\n                    <div class=\"ui left icon input\">\r\n                      <input type=\"text\" placeholder=\"Start Date\" formControlName=\"segmentStartDate\"\r\n                        name=\"segmentStartDate\" value=\"\" required />\r\n                      <i class=\"icon\">\r\n                        <i class=\"fa fa-calendar-o bookings_input__placeholder-icon cal\" aria-hidden=\"true\"></i>\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"five wide field bookings_pickers\"\r\n                    [ngClass]=\"{'error': ((submitted && f.segmentEndDate.errors) && f.segmentEndDate.errors.required) }\">\r\n                    <label>End Date<span class=\"mandatory\">*</span></label>\r\n                    <div class=\"ui left icon input\">\r\n                      <input type=\"text\" placeholder=\"Start Date\" formControlName=\"segmentEndDate\" name=\"segmentEndDate\"\r\n                        value=\"\" required />\r\n                      <i class=\"icon\">\r\n                        <i class=\"fa fa-calendar-o bookings_input__placeholder-icon cal\" aria-hidden=\"true\"></i>\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"six wide field btn-wrapper\">\r\n                    <div class=\"bookings_btn-panel\">\r\n                      <button class=\"ui primary reset button\" (click)=\"resetReport()\" title=\"Reset\">\r\n                        <i class=\"undo icon\"></i>\r\n                      </button>\r\n                      <button class=\"ui primary  button\">\r\n                        View Report\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <div class=\"result-block\" *ngIf=\"bookingsLoader\">\r\n          <div class=\"ui segment b2c-list-user-table__segment-loader\" *ngIf=\"bookingsLoader\">\r\n            <div class=\"ui active inverted dimmer\">\r\n              <div class=\"ui text loader\">Loading Report ...</div>\r\n            </div>\r\n            <p></p>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"showSegmentReport\" class=\"fields agent-name-booking\">\r\n          <!-- <p>{{booking.name}}</p> -->\r\n          <div class=\"eight wide field ui small header\">Segment Log</div>\r\n          <!-- <div class=\"ui divider\"></div> -->\r\n          <!-- <div class=\"eight wide field bookings_btn-panel\">\r\n                        <button class=\"ui export button\" (click)=\"exportData()\" *ngIf=\"showSegmentReport\" title=\"Export\">\r\n                            Export\r\n                        </button>\r\n                    </div> -->\r\n        </div>\r\n        <div class=\"result-block\" *ngIf=\"showSegmentReport\">\r\n          <div class=\"user-table-list b2c-list-user-table\" *ngIf=\"showSegmentReport\">\r\n            <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n              [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='NewSegment' [sortType]=\"'multi'\" [reorderable]=\"true\"\r\n              [sorts]=\"[{prop: 'id', dir: 'desc'}]\">\r\n              <ngx-datatable-column name=\"Booked Date\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  {{row.trip_detail.booking.created |  date: 'dd/MM/yyyy'}}\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Departure Date\" prop=\"segment_departure_date\">\r\n                <ng-template ngx-datatable-cell-template let-value=\"value\">{{value | date: 'dd/MM/yyyy'}}\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Arrival Date\" prop=\"segment_arrival_date\">\r\n                <ng-template ngx-datatable-cell-template let-value=\"value\">{{value | date: 'dd/MM/yyyy'}}\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Departure Airport\" prop=\"segment_departure_airport_name\">\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Arrival Airport\" prop=\"segment_arrival_airport_name\">\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Operating Airline Name\" prop=\"segment_operating_airline_name\">\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Operating Airline Number\" prop=\"segment_operating_flight_number\">\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Marketing Airline Name\" prop=\"segment_marketing_airline_name\">\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Marketing Airline Number\" prop=\"segment_marketing_flight_number\">\r\n              </ngx-datatable-column>\r\n            </ngx-datatable>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/layout/report/segment-report/segment-report-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/report/segment-report/segment-report-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: SegmentReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentReportRoutingModule", function() { return SegmentReportRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _segment_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./segment-report.component */ "./src/app/layout/report/segment-report/segment-report.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: '', component: _segment_report_component__WEBPACK_IMPORTED_MODULE_1__["SegmentReportComponent"] }
];
let SegmentReportRoutingModule = class SegmentReportRoutingModule {
};
SegmentReportRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], SegmentReportRoutingModule);



/***/ }),

/***/ "./src/app/layout/report/segment-report/segment-report.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/layout/report/segment-report/segment-report.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bookings_btn-panel {\n  padding: 20px 2px;\n}\n\n.bookings_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n\n.bookings_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n\n.bookings_pickers .input .icon {\n  opacity: 1;\n  z-index: 1;\n}\n\n.bookings_pickers .input .icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.bookings_pickers .input .icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n\n.bookings_pickers .input .search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.bookings_pickers .input .search.dropdown .search {\n  margin-left: 42px !important;\n}\n\n.bookings_pickers .input .search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n\n.user-table-list.b2c-list-user-table {\n  margin-top: 16px;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.segment-report-header {\n  position: relative;\n  left: 32%;\n  color: #0000007a;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 200;\n}\n\n.outer-basic {\n  margin-top: 32px;\n}\n\n.b2c-list-user-table__segment-loader {\n  height: 450px;\n  background-color: white !important;\n  border: 0;\n  box-shadow: none;\n}\n\n.b2c-list-user-table__segment-loader .ui.inverted.dimmer {\n  background-color: transparent !important;\n}\n\n.b2c-list-user-table__segment-loader .eye-icon {\n  font-size: 12px;\n  color: #3867b1;\n}\n\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 160px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 10px;\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: 0px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.agent-name-booking {\n  margin: auto 24px !important;\n}\n\n.agent-name-booking .eight.wide.field {\n  padding: 0px;\n}\n\n.agent-name-booking .eight.wide.field button {\n  margin-right: 0px;\n}\n\n.five.wide.field {\n  padding-bottom: 16px;\n}\n\n.ui.attached.segment.tabContent-block .ui.segment .report-form {\n  background: #fff;\n  padding: 0px;\n  margin: 24px;\n  border-radius: 4.96141px;\n}\n\n.ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child {\n  margin-bottom: 0px;\n}\n\n.ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child .five.wide.field {\n  padding-bottom: 0px;\n}\n\n.ui.top.attached.tabular.menu {\n  margin: 24px 0px;\n}\n\n.bookings_btn-panel button {\n  margin: 0px 6px;\n}\n\n@media (max-width: 1030px) {\n  .ui.form .last-field {\n    display: block;\n  }\n  .ui.form .last-field .bookings_pickers {\n    display: inline-block;\n  }\n  .ui.form .last-field .btn-wrapper {\n    width: 100% !important;\n    display: block;\n    text-align: right;\n  }\n}\n\n@media (max-width: 1030px) and (min-width: 768px) {\n  .ui.form .last-field .bookings_pickers {\n    width: 50% !important;\n  }\n}\n\n@media (max-width: 800px) {\n  .ui.top.attached.tabular.menu {\n    display: block;\n  }\n  .ui.top.attached.tabular.menu .item {\n    padding: 12px 0px;\n  }\n}\n\n@media (max-width: 767px) {\n  .ui.attached.segment.tabContent-block .ui.segment .report-form {\n    margin: 0px;\n  }\n  .ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child {\n    margin-bottom: 0px;\n  }\n  .ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child .bookings_pickers:first-child {\n    padding-top: 16px;\n  }\n  .ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child .five.wide.field {\n    padding-bottom: 16px;\n  }\n}\n\n@media (max-width: 480px) {\n  .ui.attached.segment.tabContent-block .ui.segment .report-form {\n    margin: 0px;\n    padding: 16px;\n  }\n}\n\n@media (max-width: 320px) {\n  .ui.form .fields .btn-wrapper .bookings_btn-panel {\n    padding: 8px 0px 0px 20px;\n  }\n  .ui.form .fields .btn-wrapper .bookings_btn-panel .primary.button {\n    margin-right: 0px;\n  }\n  .ui.form .fields .btn-wrapper .bookings_btn-panel .reset.button {\n    min-width: 54px !important;\n    margin-bottom: 12px;\n    margin-right: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3JlcG9ydC9zZWdtZW50LXJlcG9ydC9FOlxcQmVsYWxcXHByb2plY3RzXFxwcm9kdWN0aW9uLWJ1aWxkXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHJlcG9ydFxcc2VnbWVudC1yZXBvcnRcXHNlZ21lbnQtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcmVwb3J0L3NlZ21lbnQtcmVwb3J0L3NlZ21lbnQtcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjs7QURHSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBUjs7QURFSTtFQUNJLHdCQUFBO0VBQ0EsMENBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDQVI7O0FERUk7RUFDSSxVQUFBO0VBQ0EsVUFBQTtBQ0FSOztBRENRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNDWjs7QURBWTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0VoQjs7QURFSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQ0FSOztBRENRO0VBQ0ksNEJBQUE7QUNDWjs7QURDUTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0FDQ1o7O0FESUE7RUFDSSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksNENBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0FDREo7O0FESUE7RUFDSSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUNESjs7QURJQTtFQUNJLGtDQUFBO0VBQ0Esd0NBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0RKOztBREVJO0VBQ0ksd0NBQUE7QUNBUjs7QURFSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDQVI7O0FESUE7RUFDSSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksbUJBQUE7QUNESjs7QURJQTtFQUNJLDRCQUFBO0FDREo7O0FERUk7RUFDSSxZQUFBO0FDQVI7O0FEQ1E7RUFDSSxpQkFBQTtBQ0NaOztBRElBO0VBQ0Usb0JBQUE7QUNERjs7QURJQTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSx3QkFBQTtBQ0ZKOztBREdJO0VBQ0ksa0JBQUE7QUNEUjs7QURFUTtFQUNJLG1CQUFBO0FDQVo7O0FES0E7RUFDSSxnQkFBQTtBQ0ZKOztBRE1JO0VBQ0ksZUFBQTtBQ0hSOztBRE9BO0VBRVE7SUFDSSxjQUFBO0VDTFY7RURNVTtJQUNJLHFCQUFBO0VDSmQ7RURNVTtJQUNJLHNCQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0VDSmQ7QUFDRjs7QURTQTtFQUdZO0lBQ0cscUJBQUE7RUNUYjtBQUNGOztBRGNBO0VBQ0k7SUFDSSxjQUFBO0VDWk47RURhTTtJQUNJLGlCQUFBO0VDWFY7QUFDRjs7QURlQTtFQUNJO0lBQ0ksV0FBQTtFQ2JOO0VEY007SUFDSSxrQkFBQTtFQ1pWO0VEYVU7SUFDSSxpQkFBQTtFQ1hkO0VEYVU7SUFDSSxvQkFBQTtFQ1hkO0FBQ0Y7O0FEZ0JBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsYUFBQTtFQ2ROO0FBQ0Y7O0FEaUJBO0VBSWdCO0lBQ0kseUJBQUE7RUNsQmxCO0VEbUJrQjtJQUNJLGlCQUFBO0VDakJ0QjtFRG1Ca0I7SUFDSSwwQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7RUNqQnRCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcmVwb3J0L3NlZ21lbnQtcmVwb3J0L3NlZ21lbnQtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2tpbmdzX2J0bi1wYW5lbCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDJweDtcclxufVxyXG5cclxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IHtcclxuICAgICYuYm9va2luZ3NfZGF0ZXBpY2tlciB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEzOHB4XHJcbiAgICB9XHJcbiAgICAudWkuYmFzaWMuZmxvYXRpbmcuYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMTUyLCAxNTIsIDE1MiwgMC42KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTFweDtcclxuICAgIH1cclxuICAgIC5pY29uIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICAgICAgJi5jYWwge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlYXJjaC5kcm9wZG93biB7XHJcbiAgICAgICAgd2lkdGg6IDIxOHB4O1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIC5zZWFyY2gge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNDJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVmYXVsdC50ZXh0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDAgMCAzOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udXNlci10YWJsZS1saXN0LmIyYy1saXN0LXVzZXItdGFibGUge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxuLnRhYi5zZWdtZW50IHtcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4udWkuYm90dG9tLmF0dGFjaGVkLmFjdGl2ZS50YWIuc2VnbWVudCB7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxN3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTdweDtcclxufVxyXG5cclxuLnVpLnRvcC5hdHRhY2hlZC5tZW51Pi5pdGVtIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yODU3MTQyOXJlbSAwIDAgMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zZWdtZW50LXJlcG9ydC1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMzIlO1xyXG4gICAgY29sb3I6ICMwMDAwMDA3YTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpYyB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG59XHJcblxyXG4uYjJjLWxpc3QtdXNlci10YWJsZV9fc2VnbWVudC1sb2FkZXIge1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgLnVpLmludmVydGVkLmRpbW1lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5leWUtaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMzg2N2IxO1xyXG4gICAgfVxyXG59XHJcblxyXG4udWkuZm9ybSAuZmllbGQ+bGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgY29sb3I6ICMxODFCMjA7XHJcbiAgICBtYXJnaW46IDBweCAwcHggOHB4O1xyXG59XHJcblxyXG4udG9vbHRpcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJvdHRvbTogMTAwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4uYWdlbnQtbmFtZS1ib29raW5nIHtcclxuICAgIG1hcmdpbjogYXV0byAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAuZWlnaHQud2lkZS5maWVsZCB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZpdmUud2lkZS5maWVsZCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi51aS5hdHRhY2hlZC5zZWdtZW50LnRhYkNvbnRlbnQtYmxvY2sgLnVpLnNlZ21lbnQgLnJlcG9ydC1mb3JtIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDI0cHg7XHJcbiAgICAvLyBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDYsIDQwLCA5OCwgMC4xKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNC45NjE0MXB4O1xyXG4gICAgLmZpZWxkczpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgLmZpdmUud2lkZS5maWVsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XHJcbiAgICBtYXJnaW46IDI0cHggMHB4O1xyXG59XHJcblxyXG4uYm9va2luZ3NfYnRuLXBhbmVsIHtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAzMHB4KSB7XHJcbiAgICAudWkuZm9ybSB7XHJcbiAgICAgICAgLmxhc3QtZmllbGQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgLmJvb2tpbmdzX3BpY2tlcnMge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG4td3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMzBweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAudWkuZm9ybSB7XHJcbiAgICAgICAgLmxhc3QtZmllbGQge1xyXG4gICAgICAgICAgICAuYm9va2luZ3NfcGlja2VycyB7XHJcbiAgICAgICAgICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAudWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgLml0ZW0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLnVpLmF0dGFjaGVkLnNlZ21lbnQudGFiQ29udGVudC1ibG9jayAudWkuc2VnbWVudCAucmVwb3J0LWZvcm0ge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIC5maWVsZHM6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgLmJvb2tpbmdzX3BpY2tlcnM6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZpdmUud2lkZS5maWVsZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAudWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXBvcnQtZm9ybSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICAudWkuZm9ybSB7XHJcbiAgICAgICAgLmZpZWxkcyB7XHJcbiAgICAgICAgICAgIC5idG4td3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAuYm9va2luZ3NfYnRuLXBhbmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMHB4IDBweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC5wcmltYXJ5LmJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucmVzZXQuYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA1NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5ib29raW5nc19idG4tcGFuZWwge1xuICBwYWRkaW5nOiAyMHB4IDJweDtcbn1cblxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0LmJvb2tpbmdzX2RhdGVwaWNrZXIge1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBtYXgtd2lkdGg6IDEzOHB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC51aS5iYXNpYy5mbG9hdGluZy5idXR0b24ge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiByZ2JhKDE1MiwgMTUyLCAxNTIsIDAuNikgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTFweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuaWNvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDE7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcbiAgd2lkdGg6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsIHtcbiAgd2lkdGg6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnNlYXJjaC5kcm9wZG93biB7XG4gIHdpZHRoOiAyMThweDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuc2VhcmNoLmRyb3Bkb3duIC5zZWFyY2gge1xuICBtYXJnaW4tbGVmdDogNDJweCAhaW1wb3J0YW50O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5zZWFyY2guZHJvcGRvd24gLmRlZmF1bHQudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDhweCAwIDAgMzhweCAhaW1wb3J0YW50O1xufVxuXG4udXNlci10YWJsZS1saXN0LmIyYy1saXN0LXVzZXItdGFibGUge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4udGFiLnNlZ21lbnQge1xuICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4udWkuYm90dG9tLmF0dGFjaGVkLmFjdGl2ZS50YWIuc2VnbWVudCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE3cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTdweDtcbn1cblxuLnVpLnRvcC5hdHRhY2hlZC5tZW51ID4gLml0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwLjI4NTcxNDI5cmVtIDAgMCAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uc2VnbWVudC1yZXBvcnQtaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAzMiU7XG4gIGNvbG9yOiAjMDAwMDAwN2E7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG4ub3V0ZXItYmFzaWMge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuXG4uYjJjLWxpc3QtdXNlci10YWJsZV9fc2VnbWVudC1sb2FkZXIge1xuICBoZWlnaHQ6IDQ1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uYjJjLWxpc3QtdXNlci10YWJsZV9fc2VnbWVudC1sb2FkZXIgLnVpLmludmVydGVkLmRpbW1lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4uYjJjLWxpc3QtdXNlci10YWJsZV9fc2VnbWVudC1sb2FkZXIgLmV5ZS1pY29uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzM4NjdiMTtcbn1cblxuLnVpLmZvcm0gLmZpZWxkID4gbGFiZWwge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBjb2xvcjogIzE4MUIyMDtcbiAgbWFyZ2luOiAwcHggMHB4IDhweDtcbn1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogMTYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBib3R0b206IDEwMCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmFnZW50LW5hbWUtYm9va2luZyB7XG4gIG1hcmdpbjogYXV0byAyNHB4ICFpbXBvcnRhbnQ7XG59XG4uYWdlbnQtbmFtZS1ib29raW5nIC5laWdodC53aWRlLmZpZWxkIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLmFnZW50LW5hbWUtYm9va2luZyAuZWlnaHQud2lkZS5maWVsZCBidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmZpdmUud2lkZS5maWVsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xufVxuXG4udWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXBvcnQtZm9ybSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA0Ljk2MTQxcHg7XG59XG4udWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXBvcnQtZm9ybSAuZmllbGRzOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4udWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXBvcnQtZm9ybSAuZmllbGRzOmxhc3QtY2hpbGQgLmZpdmUud2lkZS5maWVsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcbiAgbWFyZ2luOiAyNHB4IDBweDtcbn1cblxuLmJvb2tpbmdzX2J0bi1wYW5lbCBidXR0b24ge1xuICBtYXJnaW46IDBweCA2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDMwcHgpIHtcbiAgLnVpLmZvcm0gLmxhc3QtZmllbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC51aS5mb3JtIC5sYXN0LWZpZWxkIC5ib29raW5nc19waWNrZXJzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLnVpLmZvcm0gLmxhc3QtZmllbGQgLmJ0bi13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAzMHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnVpLmZvcm0gLmxhc3QtZmllbGQgLmJvb2tpbmdzX3BpY2tlcnMge1xuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAudWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSAuaXRlbSB7XG4gICAgcGFkZGluZzogMTJweCAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAudWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXBvcnQtZm9ybSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgLnVpLmF0dGFjaGVkLnNlZ21lbnQudGFiQ29udGVudC1ibG9jayAudWkuc2VnbWVudCAucmVwb3J0LWZvcm0gLmZpZWxkczpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgLnVpLmF0dGFjaGVkLnNlZ21lbnQudGFiQ29udGVudC1ibG9jayAudWkuc2VnbWVudCAucmVwb3J0LWZvcm0gLmZpZWxkczpsYXN0LWNoaWxkIC5ib29raW5nc19waWNrZXJzOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgfVxuICAudWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXBvcnQtZm9ybSAuZmllbGRzOmxhc3QtY2hpbGQgLmZpdmUud2lkZS5maWVsZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAudWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXBvcnQtZm9ybSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC51aS5mb3JtIC5maWVsZHMgLmJ0bi13cmFwcGVyIC5ib29raW5nc19idG4tcGFuZWwge1xuICAgIHBhZGRpbmc6IDhweCAwcHggMHB4IDIwcHg7XG4gIH1cbiAgLnVpLmZvcm0gLmZpZWxkcyAuYnRuLXdyYXBwZXIgLmJvb2tpbmdzX2J0bi1wYW5lbCAucHJpbWFyeS5idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG4gIC51aS5mb3JtIC5maWVsZHMgLmJ0bi13cmFwcGVyIC5ib29raW5nc19idG4tcGFuZWwgLnJlc2V0LmJ1dHRvbiB7XG4gICAgbWluLXdpZHRoOiA1NHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/layout/report/segment-report/segment-report.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/report/segment-report/segment-report.component.ts ***!
  \**************************************************************************/
/*! exports provided: SegmentReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentReportComponent", function() { return SegmentReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/report/report.service */ "./src/app/shared/services/report/report.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");







let SegmentReportComponent = class SegmentReportComponent {
    constructor(fb, commonService, newReportService, toastr) {
        this.fb = fb;
        this.commonService = commonService;
        this.newReportService = newReportService;
        this.toastr = toastr;
        this.NewSegment = [];
        this.airlines = [];
        this.departures = [];
        this.arrivals = [];
        this.newSegmentReportObj = {};
        this.totalSegment = 0;
        this.pages = 0;
        this.limit = 15;
        this.pageIndex = 1;
        this.showSegmentReport = false;
        this.bookingsLoader = false;
        this.submitted = false;
        this.segmentReportForm = this.fb.group({
            selectDeparture: [''],
            selectArrival: [''],
            selectAirline: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            segmentStartDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            segmentEndDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.fetchAllAirportDetails = () => {
            this.bookingsLoader = true;
            this.newReportService.GetAllAirportCode()
                .subscribe((res) => {
                if (res.status) {
                    this.bookingsLoader = false;
                    this.departures = res.result;
                    this.arrivals = res.result;
                }
                else {
                    this.toastr.error(`${res.message}`, ``, {
                        timeOut: 1000,
                        progressBar: false,
                        positionClass: 'toast-bottom-right'
                    });
                }
            });
        };
        this.segmentViewReport = () => {
            this.bookingsLoader = true;
            this.submitted = true;
            if (this.segmentReportForm.invalid) {
                return;
            }
            this.newSegmentReportObj.departures = this.segmentReportForm.get('selectDeparture').value;
            this.newSegmentReportObj.arrivals = this.segmentReportForm.get('selectArrival').value;
            this.newSegmentReportObj.airline = this.segmentReportForm.get('selectAirline').value;
            this.newSegmentReportObj.start_date = this.segmentReportForm.get('segmentStartDate').value;
            this.newSegmentReportObj.end_date = this.segmentReportForm.get('segmentEndDate').value;
            this.newReportService.GetSearchedSegmentReports(this.newSegmentReportObj).subscribe((results) => {
                if (results.status) {
                    this.bookingsLoader = false;
                    if (results.result.length != 0) {
                        this.NewSegment = results.result;
                        this.showSegmentReport = true;
                    }
                    else {
                        this.bookingsLoader = false;
                        this.toastr.info(`There is no data to display`, ``, {
                            timeOut: 2000,
                            progressBar: false,
                            positionClass: 'toast-bottom-right'
                        });
                    }
                }
                else {
                    this.bookingsLoader = false;
                    this.toastr.error(`${results.message}`, ``, {
                        timeOut: 1000,
                        progressBar: false,
                        positionClass: 'toast-bottom-right'
                    });
                }
            });
        };
        this.resetReport = () => {
            this.bookingsLoader = false;
            this.segmentReportForm.reset();
            $(".ui.dropdown").dropdown("clear");
            this.showSegmentReport = false;
        };
    }
    // convenience getter for easy access to form fields
    get f() { return this.segmentReportForm.controls; }
    ngOnInit() {
        this.fetchAllAirlines();
        this.fetchAllAirportDetails();
    }
    ngAfterViewInit() {
        $(document).ready(function () {
            $('.menu .item').tab();
            $('.ui.dropdown').dropdown();
            $('.dropdownTwo').dropdown({ placeholder: 'choose Departures' });
            $('.dropdownThree').dropdown({ placeholder: 'choose Arrivals' });
        });
        this.loadEndDate();
        this.loadStartDate();
        $(document).ready(function () {
            this._globals = localStorage.getItem('_globals');
            let token = JSON.parse(this._globals).token;
            $('.multiple_search').dropdown({
                type: 'category',
                minCharacters: 2,
                maxCharacters: 3,
                responseAsync: true,
                apiSettings: {
                    url: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].serverURL + '/api/get-airports-cache/{query}',
                    beforeXHR: function (xhr) {
                        xhr.setRequestHeader('Authorization', token);
                        return xhr;
                    },
                    onResponse: function (response) {
                        const result = { success: true, results: [] };
                        $.each(response.result, function (index, item) {
                            result['results'].push({
                                name: item.AirportCode,
                                value: item.AirportCode
                            });
                        });
                        return result;
                    },
                },
            });
        });
    }
    loadStartDate() {
        var scope = this;
        $(function () {
            $('input[name="segmentStartDate"]').daterangepicker({
                singleDatePicker: true,
                showDropdowns: true,
                minYear: 1901,
                startDate: moment(),
                autoUpdateInput: false,
            }, function (start, end, label) {
                var years = moment().diff(start, 'years');
                scope.segmentReportForm.get('segmentStartDate').setValue(moment(start).format('DD-MM-YYYY'));
            });
        });
    }
    loadEndDate() {
        var scope = this;
        $(function () {
            $('input[name="segmentEndDate"]').daterangepicker({
                singleDatePicker: true,
                showDropdowns: true,
                minYear: 1901,
                startDate: moment(),
                // minDate: moment(),
                autoUpdateInput: false,
            }, function (start, end, label) {
                var years = moment().diff(start, 'years');
                scope.segmentReportForm.get('segmentEndDate').setValue(moment(start).format('DD-MM-YYYY'));
            });
        });
    }
    fetchAllAirlines(limit, pageIndex) {
        this.bookingsLoader = true;
        this.commonService.getAirlines().subscribe((result) => {
            if (result.type == 'data') {
                this.bookingsLoader = false;
                this.airlines = result.airlines;
            }
            else {
                this.toastr.error(`${result.msg}`, `${result.msg}`, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    }
};
SegmentReportComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
SegmentReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-segment-report',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./segment-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/segment-report/segment-report.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./segment-report.component.scss */ "./src/app/layout/report/segment-report/segment-report.component.scss")).default]
    })
], SegmentReportComponent);



/***/ }),

/***/ "./src/app/layout/report/segment-report/segment-report.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/report/segment-report/segment-report.module.ts ***!
  \***********************************************************************/
/*! exports provided: SegmentReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentReportModule", function() { return SegmentReportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _segment_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./segment-report.component */ "./src/app/layout/report/segment-report/segment-report.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _segment_report_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./segment-report-routing.module */ "./src/app/layout/report/segment-report/segment-report-routing.module.ts");







let SegmentReportModule = class SegmentReportModule {
};
SegmentReportModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_segment_report_component__WEBPACK_IMPORTED_MODULE_3__["SegmentReportComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"],
            _segment_report_routing_module__WEBPACK_IMPORTED_MODULE_6__["SegmentReportRoutingModule"]
        ]
    })
], SegmentReportModule);



/***/ })

}]);
//# sourceMappingURL=segment-report-segment-report-module-es2016.js.map