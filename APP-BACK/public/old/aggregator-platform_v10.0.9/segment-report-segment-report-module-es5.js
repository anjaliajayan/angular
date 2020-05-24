function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["segment-report-segment-report-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/segment-report/segment-report.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/segment-report/segment-report.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutReportSegmentReportSegmentReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui top attached tabular menu \">\r\n  <div class=\"item \" data-tab=\"first\" routerLink=\"/report/booking-report\">\r\n    Booking\r\n  </div>\r\n  <div class=\"item active\" data-tab=\"second\" routerLink=\"/report/segment-report\">Segment</div>\r\n  <div class=\"item\" data-tab=\"third\" routerLink=\"/report/mis-report\">MIS</div>\r\n  <div class=\"item\" data-tab=\"fourth\" routerLink=\"/report/search-log-report\">Search Log</div>\r\n  <div class=\"item\" data-tab=\"fifth\" routerLink=\"/report/audit-report\">Audit Trail Log</div>\r\n  <div class=\"item\" data-tab=\"sixth\" routerLink=\"/report/ticket-report\">Ticket</div>\r\n  <div class=\"item\" data-tab=\"seventh\" routerLink=\"/report/dynamic-report\">Dynamic Report</div>\r\n</div>\r\n<div class=\"ui bottom attached tab segment active tabContent-block\" data-tab=\"second\">\r\n  <div class=\"ui segment\">\r\n    <div class=\"ui fluid container\">\r\n      <div class=\"outer-basics\">\r\n        <form [formGroup]=\"segmentReportForm\" (ngSubmit)=\"segmentViewReport()\" class=\"ui form report-form\">\r\n          <div class=\"field\">\r\n            <div class=\"outer-basicForm\">\r\n              <div class=\"form-inner\">\r\n                <div class=\"fields first-field\">\r\n                  <!-- <div class=\"one wide field\"></div> -->\r\n                  <!-- <div class=\"three wide field\" [ngClass]=\"{'error': ((submitted && f.selectDeparture.errors) && f.selectDeparture.errors.required) }\"> -->\r\n                  <div class=\"five wide field seg-field\">\r\n                    <label>Departure\r\n                      <i class=\"fa fa-exclamation-circle tooltip\">\r\n                        <span class=\"tooltiptext\">\r\n                          Comma-separated list of airport code e.g. DXB, JED, LHR .Default ALL will be selected.\r\n                        </span>\r\n                      </i>\r\n                    </label>\r\n                    <select class=\"ui fluid search dropdownTwo multiple_search\" formControlName=\"selectDeparture\"\r\n                      multiple=''>\r\n                      <option class=\"item\" *ngFor=\"let departure of departures\" value=\"{{departure.AirportCode}}\">\r\n                        {{departure.AirportCode}}</option>\r\n                    </select>\r\n                  </div>\r\n                  <!-- <div class=\"three wide field\" [ngClass]=\"{'error': ((submitted && f.selectArrival.errors) && f.selectArrival.errors.required) }\"> -->\r\n                  <div class=\"five wide field seg-field\">\r\n                    <label>Arrival\r\n                      <i class=\"fa fa-exclamation-circle tooltip\">\r\n                        <span class=\"tooltiptext\">\r\n                          Comma-separated list of airport code e.g. DXB, JED, LHR .Default ALL will be selected.\r\n                        </span>\r\n                      </i>\r\n                    </label>\r\n                    <select class=\"ui fluid search dropdownThree multiple_search\" formControlName=\"selectArrival\"\r\n                      multiple=''>\r\n                      <option class=\"item\" *ngFor=\"let arrival of arrivals\" value=\"{{arrival.AirportCode}}\">\r\n                        {{arrival.AirportCode}}</option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"six wide field prod-field\"\r\n                    [ngClass]=\"{'error': ((submitted && f.selectAirline.errors) && f.selectAirline.errors.required) }\">\r\n                    <label>Airline<span class=\"mandatory\">*</span></label>\r\n                    <select class=\"ui fluid search dropdown\" formControlName=\"selectAirline\" required>\r\n                      <option value=\"\">Airlines</option>\r\n                      <option class=\"item\" *ngFor=\"let airline of airlines\" value=\"{{airline.name}}\">{{airline.name}}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"fields last-field\">\r\n                  <!-- <div class=\"one wide field\"></div> -->\r\n                  <div class=\"five wide field bookings_pickers\"\r\n                    [ngClass]=\"{'error': ((submitted && f.segmentStartDate.errors) && f.segmentStartDate.errors.required) }\">\r\n                    <label>Start Date<span class=\"mandatory\">*</span></label>\r\n                    <div class=\"ui left icon input\">\r\n                      <input type=\"text\" placeholder=\"Start Date\" formControlName=\"segmentStartDate\"\r\n                        name=\"segmentStartDate\" value=\"\" required />\r\n                      <i class=\"icon\">\r\n                        <img src=\"./../../../../assets/icons/calendar.svg\"\r\n                          class=\"bookings_input__placeholder-icon cal\" />\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"five wide field bookings_pickers\"\r\n                    [ngClass]=\"{'error': ((submitted && f.segmentEndDate.errors) && f.segmentEndDate.errors.required) }\">\r\n                    <label>End Date<span class=\"mandatory\">*</span></label>\r\n                    <div class=\"ui left icon input\">\r\n                      <input type=\"text\" placeholder=\"Start Date\" formControlName=\"segmentEndDate\" name=\"segmentEndDate\"\r\n                        value=\"\" required />\r\n                      <i class=\"icon\">\r\n                        <img src=\"./../../../../assets/icons/calendar.svg\"\r\n                          class=\"bookings_input__placeholder-icon cal\" />\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"six wide field btn-wrapper\">\r\n                    <div class=\"bookings_btn-panel\">\r\n                      <button class=\"ui primary reset button\" (click)=\"resetReport()\" title=\"Reset\">\r\n                        <i class=\"undo icon\"></i>\r\n                      </button>\r\n                      <button class=\"ui primary  button\">\r\n                        View Report\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <div class=\"result-block\" *ngIf=\"bookingsLoader\">\r\n          <div class=\"ui segment b2c-list-user-table__segment-loader\" *ngIf=\"bookingsLoader\">\r\n            <div class=\"ui active inverted dimmer\">\r\n              <div class=\"ui text loader\">Loading Report ...</div>\r\n            </div>\r\n            <p></p>\r\n          </div>\r\n        </div>\r\n        <div *ngIf=\"showSegmentReport\" class=\"fields agent-name-booking\">\r\n          <!-- <p>{{booking.name}}</p> -->\r\n          <div class=\"eight wide field ui small header\">Segment Log</div>\r\n          <!-- <div class=\"ui divider\"></div> -->\r\n          <!-- <div class=\"eight wide field bookings_btn-panel\">\r\n                        <button class=\"ui export button\" (click)=\"exportData()\" *ngIf=\"showSegmentReport\" title=\"Export\">\r\n                            Export\r\n                        </button>\r\n                    </div> -->\r\n        </div>\r\n        <div class=\"result-block\" *ngIf=\"showSegmentReport\">\r\n          <div class=\"user-table-list b2c-list-user-table\" *ngIf=\"showSegmentReport\">\r\n            <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n              [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='NewSegment' [sortType]=\"'multi'\" [reorderable]=\"true\"\r\n              [sorts]=\"[{prop: 'id', dir: 'desc'}]\">\r\n              <ngx-datatable-column name=\"Booked Date\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  {{row.trip_detail.booking.created |  date: 'dd/MM/yyyy'}}\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Departure Date\" prop=\"segment_departure_date\">\r\n                <ng-template ngx-datatable-cell-template let-value=\"value\">{{value | date: 'dd/MM/yyyy'}}\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Arrival Date\" prop=\"segment_arrival_date\">\r\n                <ng-template ngx-datatable-cell-template let-value=\"value\">{{value | date: 'dd/MM/yyyy'}}\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Departure Airport\" prop=\"segment_departure_airport_name\">\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Arrival Airport\" prop=\"segment_arrival_airport_name\">\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Operating Airline Name\" prop=\"segment_operating_airline_name\">\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Operating Airline Number\" prop=\"segment_operating_flight_number\">\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Marketing Airline Name\" prop=\"segment_marketing_airline_name\">\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Marketing Airline Number\" prop=\"segment_marketing_flight_number\">\r\n              </ngx-datatable-column>\r\n            </ngx-datatable>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/layout/report/segment-report/segment-report-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/layout/report/segment-report/segment-report-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: SegmentReportRoutingModule */

  /***/
  function srcAppLayoutReportSegmentReportSegmentReportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SegmentReportRoutingModule", function () {
      return SegmentReportRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _segment_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./segment-report.component */
    "./src/app/layout/report/segment-report/segment-report.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _segment_report_component__WEBPACK_IMPORTED_MODULE_1__["SegmentReportComponent"]
    }];

    var SegmentReportRoutingModule = function SegmentReportRoutingModule() {
      _classCallCheck(this, SegmentReportRoutingModule);
    };

    SegmentReportRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], SegmentReportRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/report/segment-report/segment-report.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/layout/report/segment-report/segment-report.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutReportSegmentReportSegmentReportComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bookings_btn-panel {\n  padding: 20px 2px;\n}\n\n.bookings_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n\n.bookings_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n\n.bookings_pickers .input .icon {\n  opacity: 1;\n  z-index: 1;\n}\n\n.bookings_pickers .input .icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.bookings_pickers .input .icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n\n.bookings_pickers .input .search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.bookings_pickers .input .search.dropdown .search {\n  margin-left: 42px !important;\n}\n\n.bookings_pickers .input .search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n\n.user-table-list.b2c-list-user-table {\n  margin-top: 16px;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.segment-report-header {\n  position: relative;\n  left: 32%;\n  color: #0000007a;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 200;\n}\n\n.outer-basic {\n  margin-top: 32px;\n}\n\n.b2c-list-user-table__segment-loader {\n  height: 450px;\n  background-color: white !important;\n  border: 0;\n  box-shadow: none;\n}\n\n.b2c-list-user-table__segment-loader .ui.inverted.dimmer {\n  background-color: transparent !important;\n}\n\n.b2c-list-user-table__segment-loader .eye-icon {\n  font-size: 12px;\n  color: #3867b1;\n}\n\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 160px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 10px;\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: 0px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.agent-name-booking {\n  margin: auto 24px !important;\n}\n\n.agent-name-booking .eight.wide.field {\n  padding: 0px;\n}\n\n.agent-name-booking .eight.wide.field button {\n  margin-right: 0px;\n}\n\n.five.wide.field {\n  padding-bottom: 16px;\n}\n\n.ui.attached.segment.tabContent-block .ui.segment .report-form {\n  background: #fff;\n  padding: 24px;\n  margin: 24px;\n  box-shadow: 0px 2px 6px rgba(6, 40, 98, 0.1) !important;\n  border-radius: 4.96141px;\n}\n\n.ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child {\n  margin-bottom: 0px;\n}\n\n.ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child .five.wide.field {\n  padding-bottom: 0px;\n}\n\n.ui.top.attached.tabular.menu {\n  margin: 24px 0px;\n}\n\n.bookings_btn-panel button {\n  margin: 0px 6px;\n}\n\n@media (max-width: 1030px) {\n  .ui.form .last-field {\n    display: block;\n  }\n  .ui.form .last-field .bookings_pickers {\n    display: inline-block;\n  }\n  .ui.form .last-field .btn-wrapper {\n    width: 100% !important;\n    display: block;\n    text-align: right;\n  }\n}\n\n@media (max-width: 1030px) and (min-width: 768px) {\n  .ui.form .last-field .bookings_pickers {\n    width: 50% !important;\n  }\n}\n\n@media (max-width: 800px) {\n  .ui.top.attached.tabular.menu {\n    display: block;\n  }\n  .ui.top.attached.tabular.menu .item {\n    padding: 12px 0px;\n  }\n}\n\n@media (max-width: 767px) {\n  .ui.attached.segment.tabContent-block .ui.segment .report-form {\n    margin: 0px;\n  }\n  .ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child {\n    margin-bottom: 0px;\n  }\n  .ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child .bookings_pickers:first-child {\n    padding-top: 16px;\n  }\n  .ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child .five.wide.field {\n    padding-bottom: 16px;\n  }\n}\n\n@media (max-width: 480px) {\n  .ui.attached.segment.tabContent-block .ui.segment .report-form {\n    margin: 0px;\n    padding: 16px;\n  }\n}\n\n@media (max-width: 320px) {\n  .ui.form .fields .btn-wrapper .bookings_btn-panel {\n    padding: 8px 0px 0px 20px;\n  }\n  .ui.form .fields .btn-wrapper .bookings_btn-panel .primary.button {\n    margin-right: 0px;\n  }\n  .ui.form .fields .btn-wrapper .bookings_btn-panel .reset.button {\n    min-width: 54px !important;\n    margin-bottom: 12px;\n    margin-right: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3JlcG9ydC9zZWdtZW50LXJlcG9ydC9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHJlcG9ydFxcc2VnbWVudC1yZXBvcnRcXHNlZ21lbnQtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcmVwb3J0L3NlZ21lbnQtcmVwb3J0L3NlZ21lbnQtcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjs7QURHSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBUjs7QURFSTtFQUNJLHdCQUFBO0VBQ0EsMENBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDQVI7O0FERUk7RUFDSSxVQUFBO0VBQ0EsVUFBQTtBQ0FSOztBRENRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNDWjs7QURBWTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0VoQjs7QURFSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQ0FSOztBRENRO0VBQ0ksNEJBQUE7QUNDWjs7QURDUTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0FDQ1o7O0FESUE7RUFDSSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksNENBQUE7QUNESjs7QURJQTtFQUNJLGdCQUFBO0FDREo7O0FESUE7RUFDSSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUNESjs7QURJQTtFQUNJLGtDQUFBO0VBQ0Esd0NBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0RKOztBREVJO0VBQ0ksd0NBQUE7QUNBUjs7QURFSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDQVI7O0FESUE7RUFDSSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUNESjs7QURJQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElBO0VBQ0ksbUJBQUE7QUNESjs7QURJQTtFQUNJLDRCQUFBO0FDREo7O0FERUk7RUFDSSxZQUFBO0FDQVI7O0FEQ1E7RUFDSSxpQkFBQTtBQ0NaOztBRElBO0VBQ0Usb0JBQUE7QUNERjs7QURJQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1REFBQTtFQUNBLHdCQUFBO0FDREo7O0FERUk7RUFDSSxrQkFBQTtBQ0FSOztBRENRO0VBQ0ksbUJBQUE7QUNDWjs7QURJQTtFQUNJLGdCQUFBO0FDREo7O0FES0k7RUFDSSxlQUFBO0FDRlI7O0FETUE7RUFFUTtJQUNJLGNBQUE7RUNKVjtFREtVO0lBQ0kscUJBQUE7RUNIZDtFREtVO0lBQ0ksc0JBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUNIZDtBQUNGOztBRFFBO0VBR1k7SUFDRyxxQkFBQTtFQ1JiO0FBQ0Y7O0FEYUE7RUFDSTtJQUNJLGNBQUE7RUNYTjtFRFlNO0lBQ0ksaUJBQUE7RUNWVjtBQUNGOztBRGNBO0VBQ0k7SUFDSSxXQUFBO0VDWk47RURhTTtJQUNJLGtCQUFBO0VDWFY7RURZVTtJQUNJLGlCQUFBO0VDVmQ7RURZVTtJQUNJLG9CQUFBO0VDVmQ7QUFDRjs7QURlQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGFBQUE7RUNiTjtBQUNGOztBRGdCQTtFQUlnQjtJQUNJLHlCQUFBO0VDakJsQjtFRGtCa0I7SUFDSSxpQkFBQTtFQ2hCdEI7RURrQmtCO0lBQ0ksMEJBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0VDaEJ0QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3JlcG9ydC9zZWdtZW50LXJlcG9ydC9zZWdtZW50LXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib29raW5nc19idG4tcGFuZWwge1xyXG4gICAgcGFkZGluZzogMjBweCAycHg7XHJcbn1cclxuXHJcbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCB7XHJcbiAgICAmLmJvb2tpbmdzX2RhdGVwaWNrZXIge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMzhweFxyXG4gICAgfVxyXG4gICAgLnVpLmJhc2ljLmZsb2F0aW5nLmJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE1MiwgMTUyLCAxNTIsIDAuNikgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgICB9XHJcbiAgICAuaWNvbiB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgICAgICYuY2FsIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zZWFyY2guZHJvcGRvd24ge1xyXG4gICAgICAgIHdpZHRoOiAyMThweDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQycHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlZmF1bHQudGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAwIDAgMzhweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnVzZXItdGFibGUtbGlzdC5iMmMtbGlzdC11c2VyLXRhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi50YWIuc2VnbWVudCB7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLnVpLmJvdHRvbS5hdHRhY2hlZC5hY3RpdmUudGFiLnNlZ21lbnQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQubWVudT4uaXRlbSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjg1NzE0MjlyZW0gMCAwIDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VnbWVudC1yZXBvcnQtaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDMyJTtcclxuICAgIGNvbG9yOiAjMDAwMDAwN2E7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWMge1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxufVxyXG5cclxuLmIyYy1saXN0LXVzZXItdGFibGVfX3NlZ21lbnQtbG9hZGVyIHtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIC51aS5pbnZlcnRlZC5kaW1tZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZXllLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzM4NjdiMTtcclxuICAgIH1cclxufVxyXG5cclxuLnVpLmZvcm0gLmZpZWxkPmxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgIGNvbG9yOiAjMTgxQjIwO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDhweDtcclxufVxyXG5cclxuLnRvb2x0aXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3R0b206IDEwMCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLmFnZW50LW5hbWUtYm9va2luZyB7XHJcbiAgICBtYXJnaW46IGF1dG8gMjRweCAhaW1wb3J0YW50O1xyXG4gICAgLmVpZ2h0LndpZGUuZmllbGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5maXZlLndpZGUuZmllbGQge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4udWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXBvcnQtZm9ybSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIG1hcmdpbjogMjRweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoNiwgNDAsIDk4LCAwLjEpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0Ljk2MTQxcHg7XHJcbiAgICAuZmllbGRzOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAuZml2ZS53aWRlLmZpZWxkIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcclxuICAgIG1hcmdpbjogMjRweCAwcHg7XHJcbn1cclxuXHJcbi5ib29raW5nc19idG4tcGFuZWwge1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDBweCA2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDMwcHgpIHtcclxuICAgIC51aS5mb3JtIHtcclxuICAgICAgICAubGFzdC1maWVsZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAuYm9va2luZ3NfcGlja2VycyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0bi13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAzMHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC51aS5mb3JtIHtcclxuICAgICAgICAubGFzdC1maWVsZCB7XHJcbiAgICAgICAgICAgIC5ib29raW5nc19waWNrZXJzIHtcclxuICAgICAgICAgICAgICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAuaXRlbSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAudWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXBvcnQtZm9ybSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgLmZpZWxkczpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAuYm9va2luZ3NfcGlja2VyczpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZml2ZS53aWRlLmZpZWxkIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC51aS5hdHRhY2hlZC5zZWdtZW50LnRhYkNvbnRlbnQtYmxvY2sgLnVpLnNlZ21lbnQgLnJlcG9ydC1mb3JtIHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAgIC51aS5mb3JtIHtcclxuICAgICAgICAuZmllbGRzIHtcclxuICAgICAgICAgICAgLmJ0bi13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgIC5ib29raW5nc19idG4tcGFuZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAwcHggMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLnByaW1hcnkuYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXNldC5idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDU0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmJvb2tpbmdzX2J0bi1wYW5lbCB7XG4gIHBhZGRpbmc6IDIwcHggMnB4O1xufVxuXG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQuYm9va2luZ3NfZGF0ZXBpY2tlciB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIG1heC13aWR0aDogMTM4cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnVpLmJhc2ljLmZsb2F0aW5nLmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYmEoMTUyLCAxNTIsIDE1MiwgMC42KSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5pY29uIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xuICB3aWR0aDogMjRweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbi5jYWwge1xuICB3aWR0aDogMThweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuc2VhcmNoLmRyb3Bkb3duIHtcbiAgd2lkdGg6IDIxOHB4O1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5zZWFyY2guZHJvcGRvd24gLnNlYXJjaCB7XG4gIG1hcmdpbi1sZWZ0OiA0MnB4ICFpbXBvcnRhbnQ7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnNlYXJjaC5kcm9wZG93biAuZGVmYXVsdC50ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogOHB4IDAgMCAzOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi51c2VyLXRhYmxlLWxpc3QuYjJjLWxpc3QtdXNlci10YWJsZSB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi50YWIuc2VnbWVudCB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi51aS5ib3R0b20uYXR0YWNoZWQuYWN0aXZlLnRhYi5zZWdtZW50IHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxN3B4O1xufVxuXG4udWkudG9wLmF0dGFjaGVkLm1lbnUgPiAuaXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjg1NzE0MjlyZW0gMCAwIDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWdtZW50LXJlcG9ydC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDMyJTtcbiAgY29sb3I6ICMwMDAwMDA3YTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi5vdXRlci1iYXNpYyB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5iMmMtbGlzdC11c2VyLXRhYmxlX19zZWdtZW50LWxvYWRlciB7XG4gIGhlaWdodDogNDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5iMmMtbGlzdC11c2VyLXRhYmxlX19zZWdtZW50LWxvYWRlciAudWkuaW52ZXJ0ZWQuZGltbWVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5iMmMtbGlzdC11c2VyLXRhYmxlX19zZWdtZW50LWxvYWRlciAuZXllLWljb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMzg2N2IxO1xufVxuXG4udWkuZm9ybSAuZmllbGQgPiBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIGNvbG9yOiAjMTgxQjIwO1xuICBtYXJnaW46IDBweCAwcHggOHB4O1xufVxuXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpZHRoOiAxNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGJvdHRvbTogMTAwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4uYWdlbnQtbmFtZS1ib29raW5nIHtcbiAgbWFyZ2luOiBhdXRvIDI0cHggIWltcG9ydGFudDtcbn1cbi5hZ2VudC1uYW1lLWJvb2tpbmcgLmVpZ2h0LndpZGUuZmllbGQge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uYWdlbnQtbmFtZS1ib29raW5nIC5laWdodC53aWRlLmZpZWxkIGJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4uZml2ZS53aWRlLmZpZWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5cbi51aS5hdHRhY2hlZC5zZWdtZW50LnRhYkNvbnRlbnQtYmxvY2sgLnVpLnNlZ21lbnQgLnJlcG9ydC1mb3JtIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMjRweDtcbiAgbWFyZ2luOiAyNHB4O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDYsIDQwLCA5OCwgMC4xKSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0Ljk2MTQxcHg7XG59XG4udWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXBvcnQtZm9ybSAuZmllbGRzOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4udWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXBvcnQtZm9ybSAuZmllbGRzOmxhc3QtY2hpbGQgLmZpdmUud2lkZS5maWVsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcbiAgbWFyZ2luOiAyNHB4IDBweDtcbn1cblxuLmJvb2tpbmdzX2J0bi1wYW5lbCBidXR0b24ge1xuICBtYXJnaW46IDBweCA2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDMwcHgpIHtcbiAgLnVpLmZvcm0gLmxhc3QtZmllbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC51aS5mb3JtIC5sYXN0LWZpZWxkIC5ib29raW5nc19waWNrZXJzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLnVpLmZvcm0gLmxhc3QtZmllbGQgLmJ0bi13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAzMHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnVpLmZvcm0gLmxhc3QtZmllbGQgLmJvb2tpbmdzX3BpY2tlcnMge1xuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAudWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSAuaXRlbSB7XG4gICAgcGFkZGluZzogMTJweCAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAudWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXBvcnQtZm9ybSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgLnVpLmF0dGFjaGVkLnNlZ21lbnQudGFiQ29udGVudC1ibG9jayAudWkuc2VnbWVudCAucmVwb3J0LWZvcm0gLmZpZWxkczpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgLnVpLmF0dGFjaGVkLnNlZ21lbnQudGFiQ29udGVudC1ibG9jayAudWkuc2VnbWVudCAucmVwb3J0LWZvcm0gLmZpZWxkczpsYXN0LWNoaWxkIC5ib29raW5nc19waWNrZXJzOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgfVxuICAudWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXBvcnQtZm9ybSAuZmllbGRzOmxhc3QtY2hpbGQgLmZpdmUud2lkZS5maWVsZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAudWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXBvcnQtZm9ybSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC51aS5mb3JtIC5maWVsZHMgLmJ0bi13cmFwcGVyIC5ib29raW5nc19idG4tcGFuZWwge1xuICAgIHBhZGRpbmc6IDhweCAwcHggMHB4IDIwcHg7XG4gIH1cbiAgLnVpLmZvcm0gLmZpZWxkcyAuYnRuLXdyYXBwZXIgLmJvb2tpbmdzX2J0bi1wYW5lbCAucHJpbWFyeS5idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG4gIC51aS5mb3JtIC5maWVsZHMgLmJ0bi13cmFwcGVyIC5ib29raW5nc19idG4tcGFuZWwgLnJlc2V0LmJ1dHRvbiB7XG4gICAgbWluLXdpZHRoOiA1NHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/report/segment-report/segment-report.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/layout/report/segment-report/segment-report.component.ts ***!
    \**************************************************************************/

  /*! exports provided: SegmentReportComponent */

  /***/
  function srcAppLayoutReportSegmentReportSegmentReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SegmentReportComponent", function () {
      return SegmentReportComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/report/report.service */
    "./src/app/shared/services/report/report.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/common.service */
    "./src/app/shared/services/common.service.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../../../environments/environment */
    "./src/environments/environment.ts");

    var SegmentReportComponent =
    /*#__PURE__*/
    function () {
      function SegmentReportComponent(fb, commonService, newReportService, toastr) {
        var _this = this;

        _classCallCheck(this, SegmentReportComponent);

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

        this.fetchAllAirportDetails = function () {
          _this.bookingsLoader = true;

          _this.newReportService.GetAllAirportCode().subscribe(function (res) {
            if (res.status) {
              _this.bookingsLoader = false;
              _this.departures = res.result;
              _this.arrivals = res.result;
            } else {
              _this.toastr.error("".concat(res.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        };

        this.segmentViewReport = function () {
          _this.bookingsLoader = true;
          _this.submitted = true;

          if (_this.segmentReportForm.invalid) {
            return;
          }

          _this.newSegmentReportObj.departures = _this.segmentReportForm.get('selectDeparture').value;
          _this.newSegmentReportObj.arrivals = _this.segmentReportForm.get('selectArrival').value;
          _this.newSegmentReportObj.airline = _this.segmentReportForm.get('selectAirline').value;
          _this.newSegmentReportObj.start_date = _this.segmentReportForm.get('segmentStartDate').value;
          _this.newSegmentReportObj.end_date = _this.segmentReportForm.get('segmentEndDate').value;

          _this.newReportService.GetSearchedSegmentReports(_this.newSegmentReportObj).subscribe(function (results) {
            if (results.status) {
              _this.bookingsLoader = false;

              if (results.result.length != 0) {
                _this.NewSegment = results.result;
                _this.showSegmentReport = true;
              } else {
                _this.bookingsLoader = false;

                _this.toastr.info("There is no data to display", "", {
                  timeOut: 2000,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });
              }
            } else {
              _this.bookingsLoader = false;

              _this.toastr.error("".concat(results.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        };

        this.resetReport = function () {
          _this.bookingsLoader = false;

          _this.segmentReportForm.reset();

          $(".ui.dropdown").dropdown("clear");
          _this.showSegmentReport = false;
        };
      } // convenience getter for easy access to form fields


      _createClass(SegmentReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fetchAllAirlines();
          this.fetchAllAirportDetails();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          $(document).ready(function () {
            $('.menu .item').tab();
            $('.ui.dropdown').dropdown();
            $('.dropdownTwo').dropdown({
              placeholder: 'choose Departures'
            });
            $('.dropdownThree').dropdown({
              placeholder: 'choose Arrivals'
            });
          });
          this.loadEndDate();
          this.loadStartDate();
          $(document).ready(function () {
            this._globals = localStorage.getItem('_globals');
            var token = JSON.parse(this._globals).token;
            $('.multiple_search').dropdown({
              type: 'category',
              minCharacters: 2,
              maxCharacters: 3,
              responseAsync: true,
              apiSettings: {
                url: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].serverURL + '/api/get-airports-cache/{query}',
                beforeXHR: function beforeXHR(xhr) {
                  xhr.setRequestHeader('Authorization', token);
                  return xhr;
                },
                onResponse: function onResponse(response) {
                  var result = {
                    success: true,
                    results: []
                  };
                  $.each(response.result, function (index, item) {
                    result['results'].push({
                      name: item.AirportCode,
                      value: item.AirportCode
                    });
                  });
                  return result;
                }
              }
            });
          });
        }
      }, {
        key: "loadStartDate",
        value: function loadStartDate() {
          var scope = this;
          $(function () {
            $('input[name="segmentStartDate"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1901,
              startDate: moment(),
              autoUpdateInput: false
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.segmentReportForm.get('segmentStartDate').setValue(moment(start).format('DD-MM-YYYY'));
            });
          });
        }
      }, {
        key: "loadEndDate",
        value: function loadEndDate() {
          var scope = this;
          $(function () {
            $('input[name="segmentEndDate"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1901,
              startDate: moment(),
              // minDate: moment(),
              autoUpdateInput: false
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.segmentReportForm.get('segmentEndDate').setValue(moment(start).format('DD-MM-YYYY'));
            });
          });
        }
      }, {
        key: "fetchAllAirlines",
        value: function fetchAllAirlines(limit, pageIndex) {
          var _this2 = this;

          this.bookingsLoader = true;
          this.commonService.getAirlines().subscribe(function (result) {
            if (result.type == 'data') {
              _this2.bookingsLoader = false;
              _this2.airlines = result.airlines;
            } else {
              _this2.toastr.error("".concat(result.msg), "".concat(result.msg), {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.segmentReportForm.controls;
        }
      }]);

      return SegmentReportComponent;
    }();

    SegmentReportComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
      }, {
        type: src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    SegmentReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-segment-report',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./segment-report.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/segment-report/segment-report.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./segment-report.component.scss */
      "./src/app/layout/report/segment-report/segment-report.component.scss")).default]
    })], SegmentReportComponent);
    /***/
  },

  /***/
  "./src/app/layout/report/segment-report/segment-report.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/layout/report/segment-report/segment-report.module.ts ***!
    \***********************************************************************/

  /*! exports provided: SegmentReportModule */

  /***/
  function srcAppLayoutReportSegmentReportSegmentReportModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SegmentReportModule", function () {
      return SegmentReportModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _segment_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./segment-report.component */
    "./src/app/layout/report/segment-report/segment-report.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var _segment_report_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./segment-report-routing.module */
    "./src/app/layout/report/segment-report/segment-report-routing.module.ts");

    var SegmentReportModule = function SegmentReportModule() {
      _classCallCheck(this, SegmentReportModule);
    };

    SegmentReportModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_segment_report_component__WEBPACK_IMPORTED_MODULE_3__["SegmentReportComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"], _segment_report_routing_module__WEBPACK_IMPORTED_MODULE_6__["SegmentReportRoutingModule"]]
    })], SegmentReportModule);
    /***/
  }
}]);
//# sourceMappingURL=segment-report-segment-report-module-es5.js.map