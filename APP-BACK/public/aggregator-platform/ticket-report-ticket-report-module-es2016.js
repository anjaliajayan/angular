(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ticket-report-ticket-report-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/ticket-report/ticket-report.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/ticket-report/ticket-report.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui top attached tabular menu \">\r\n  <div class=\"item \" data-tab=\"first\" routerLink=\"/report/booking-report\">\r\n    Booking\r\n  </div>\r\n  <div class=\"item \" data-tab=\"second\" routerLink=\"/report/segment-report\">Segment</div>\r\n  <div class=\"item\" data-tab=\"third\" routerLink=\"/report/mis-report\">MIS</div>\r\n  <div class=\"item\" data-tab=\"fourth\" routerLink=\"/report/search-log-report\">Search Log</div>\r\n  <div class=\"item\" data-tab=\"fifth\" routerLink=\"/report/audit-report\">Audit Trail Log</div>\r\n  <div class=\"item active\" data-tab=\"sixth\" routerLink=\"/report/ticket-report\">Ticket</div>\r\n  <div class=\"item\" data-tab=\"seventh\" routerLink=\"/report/dynamic-report\">Dynamic Report</div>\r\n\r\n</div>\r\n<div class=\"ui bottom attached tab segment tabContent-block active\" data-tab=\"sixth\">\r\n  <div class=\"ui segment\">\r\n    <div class=\"ui fluid container\">\r\n      <div class=\"outer-basics\">\r\n        <form [formGroup]=\"ticketReportForm\" (ngSubmit)=\"ticketSearch()\" class=\"ui form report-form\">\r\n          <div class=\"field\">\r\n            <div class=\"outer-basicForm\">\r\n              <div class=\"form-inner\">\r\n                <div class=\"fields\">\r\n                  <!-- <div class=\"one wide field\"></div> -->\r\n                  <div class=\"six wide field\">\r\n                    <label>Agents</label>\r\n                    <select class=\"ui fluid search dropdownFive multiple_search\" formControlName=\"agentList\"\r\n                      multiple=\"\">\r\n                      <option class=\"item\" *ngFor=\"let agent of agents\" value=\"{{agent.agent_code}}\">{{agent.name}}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"five wide field\">\r\n                    <!--futur use-->\r\n                    <!-- <select class=\"ui fluid  search dropdown\" formControlName=\"productList\">\r\n                                            <option value=\"\">Choose Products</option>\r\n                                            <option class=\"item\" *ngFor=\"let productList of productLists\" value=\"{{productList}}\">{{productList}}\r\n                                            </option>\r\n                                        </select> -->\r\n                    <label>Products</label>\r\n                    <select class=\"ui fluid search dropdown\" formControlName=\"productList\">\r\n                      <option value=\"\">Choose Products</option>\r\n                      <option class=\"item\" value=\"flights\">Flights</option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"five wide field\">\r\n                    <label>Suppliers</label>\r\n                    <select class=\"ui fluid  search dropdown\" formControlName=\"supplierList\">\r\n\r\n                      <option class=\"item\" *ngFor=\"let supplier of suppliers\" value=\"{{supplier.supplier_id}}\">\r\n                        {{supplier.name}}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"fields agent-name-booking\" *ngIf=\"showTicketReport\">\r\n                  <div class=\"eight wide field ui small header\">Ticket Log</div>\r\n                  <!-- <div class=\"ui divider\"></div> -->\r\n                  <div class=\"eight wide field bookings_btn-panel\">\r\n                    <button class=\"ui export button\" title=\"Export\" (click)=\"exportTicket()\">\r\n                      Export\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"result-block\" *ngIf=\"showTicketReport\">\r\n                  <div class=\"user-table-list b2c-list-user-table\" *ngIf=\"showTicketReport\">\r\n                    <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n                      [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='NewTicketReport' [sortType]=\"'multi'\"\r\n                      [reorderable]=\"true\" [sorts]=\"[{prop: 'id', dir: 'desc'}]\">\r\n                      <!-- <ngx-datatable-column name=\"User\" prop=\"agent_code\">\r\n                                </ngx-datatable-column> -->\r\n                      <ngx-datatable-column name=\"Ticket Number\" prop=\"ticket_number\">\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column name=\"Trip Id\" prop=\"trip_id\">\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column name=\"Base Amount\" prop=\"BaseFare\">\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column name=\"Fee and Tax\" prop=\"Tax\">\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column name=\"Passenger Name\">\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                          <span *ngIf=\"row.bookings_flight.TicketContact !=null\">\r\n                            <span *ngIf=\"row.bookings_flight.TicketContact[0].Surname !=undefined\">\r\n                              {{row.bookings_flight.TicketContact[0].Surname}}\r\n                            </span>\r\n                          </span>\r\n                        </ng-template>\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column name=\"Supplier Code\">\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                          {{row.bookings_flight.supplier.name}}\r\n                        </ng-template>\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column name=\"Booking Status\">\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                          {{row.bookings_flight.booking_status}}\r\n                        </ng-template>\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column name=\"Booked Date\">\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                          {{row.bookings_flight.created | date: 'dd/MM/yyyy' }}\r\n                        </ng-template>\r\n                      </ngx-datatable-column>\r\n                    </ngx-datatable>\r\n                  </div>\r\n                </div>\r\n                <div class=\"fields text-right\">\r\n                  <div class=\"sixteen wide field btn-wrapper\">\r\n                    <div class=\"bookings_btn-panel\">\r\n                      <button class=\"ui primary reset button\" (click)=\"reset()\" title=\"Reset\">\r\n                        <i class=\"undo icon\"></i>\r\n                      </button>\r\n                      <button class=\"ui primary  button\">\r\n                        Search\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n        <div class=\"result-block\" *ngIf=\"bookingsLoader\">\r\n          <div class=\"ui segment b2c-list-user-table__segment-loader\" *ngIf=\"bookingsLoader\">\r\n            <div class=\"ui active inverted dimmer\">\r\n              <div class=\"ui text loader\">Loading Report...</div>\r\n            </div>\r\n            <p></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"fields agent-name-booking\" *ngIf=\"showTicketReport\">\r\n          <div class=\"eight wide field ui small header\">Ticket Log</div>\r\n          <!-- <div class=\"ui divider\"></div> -->\r\n          <div class=\"eight wide field bookings_btn-panel\">\r\n            <button class=\"ui export button\" title=\"Export\">\r\n              Export\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"result-block\" *ngIf=\"showTicketReport\">\r\n          <div class=\"user-table-list b2c-list-user-table\" *ngIf=\"showTicketReport\">\r\n            <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n              [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='NewTicketReport' [sortType]=\"'multi'\" [reorderable]=\"true\"\r\n              [sorts]=\"[{prop: 'id', dir: 'desc'}]\">\r\n              <!-- <ngx-datatable-column name=\"User\" prop=\"agent_code\">\r\n                                </ngx-datatable-column> -->\r\n              <ngx-datatable-column name=\"Ticket Number\" prop=\"ticket_number\">\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Trip Id\" prop=\"trip_id\">\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Base Amount\" prop=\"BaseFare\">\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Fee and Tax\" prop=\"Tax\">\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Passenger Name\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  <span *ngIf=\"row.bookings_flight.TicketContact\">\r\n                    <span *ngIf=\"row.bookings_flight.TicketContact[0].Surname !=null\">\r\n                      {{row.bookings_flight.TicketContact[0].Surname}}</span>\r\n                  </span>\r\n\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Supplier Code\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  {{row.bookings_flight.supplier.name}}\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Booking Status\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  {{row.bookings_flight.booking_status}}\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Booked Date\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  {{row.bookings_flight.created | date: 'dd/MM/yyyy' }}\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n            </ngx-datatable>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./src/app/layout/report/ticket-report/ticket-report-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/layout/report/ticket-report/ticket-report-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: TicketReportRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketReportRoutingModule", function() { return TicketReportRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ticket_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ticket-report.component */ "./src/app/layout/report/ticket-report/ticket-report.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: '', component: _ticket_report_component__WEBPACK_IMPORTED_MODULE_1__["TicketReportComponent"] }
];
let TicketReportRoutingModule = class TicketReportRoutingModule {
};
TicketReportRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], TicketReportRoutingModule);



/***/ }),

/***/ "./src/app/layout/report/ticket-report/ticket-report.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/layout/report/ticket-report/ticket-report.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bookings_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n.bookings_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n.bookings_pickers .input .icon {\n  opacity: 1;\n  z-index: 1;\n}\n.bookings_pickers .input .icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n.bookings_pickers .input .icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n.bookings_pickers .input .search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.bookings_pickers .input .search.dropdown .search {\n  margin-left: 42px !important;\n}\n.bookings_pickers .input .search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n.user-table-list.b2c-list-user-table {\n  margin-top: 16px;\n}\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n.ticket-report-header {\n  position: relative;\n  left: 32%;\n  color: #0000007a;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 200;\n}\n.b2c-list-user-table__segment-loader {\n  height: 450px;\n  background-color: white !important;\n  border: 0;\n  box-shadow: none;\n}\n.b2c-list-user-table__segment-loader .ui.inverted.dimmer {\n  background-color: transparent !important;\n}\n.b2c-list-user-table__segment-loader .eye-icon {\n  font-size: 12px;\n  color: #3867b1;\n}\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n.eight.field.bookings_btn-panel {\n  padding: 0px;\n  text-align: right;\n}\n.agent-name-booking {\n  margin: auto 24px !important;\n}\n.agent-name-booking .eight.wide.field {\n  padding: 0px;\n}\n.agent-name-booking .eight.wide.field button {\n  margin-right: 0px;\n}\n.five.wide.field, .six.wide.field {\n  padding-bottom: 16px;\n}\n.ui.attached.segment.tabContent-block .ui.segment .report-form {\n  background: #fff;\n  padding: 0px;\n  margin: 24px;\n  border-radius: 4.96141px;\n}\n.ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child {\n  margin-bottom: 0px;\n}\n.ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child .five.wide.field {\n  padding-bottom: 0px;\n}\n.ui.top.attached.tabular.menu {\n  margin: 24px 0px;\n}\n.bookings_btn-panel button {\n  margin: 0px 6px 0px 0px;\n}\n@media (max-width: 1030px) {\n  .ui.form .last-field {\n    display: block;\n  }\n  .ui.form .last-field .bookings_pickers {\n    display: inline-block;\n  }\n  .ui.form .last-field .btn-wrapper {\n    width: 100% !important;\n    display: block;\n    text-align: right;\n  }\n}\n@media (max-width: 1030px) and (min-width: 768px) {\n  .ui.form .last-field .bookings_pickers {\n    width: 50% !important;\n  }\n}\n@media (max-width: 800px) {\n  .ui.top.attached.tabular.menu {\n    display: block;\n  }\n  .ui.top.attached.tabular.menu .item {\n    padding: 12px 0px;\n  }\n}\n@media (max-width: 767px) {\n  .ui.attached.segment.tabContent-block .ui.segment .report-form {\n    margin: 0px;\n  }\n  .ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child {\n    margin-bottom: 0px;\n  }\n  .ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child .bookings_pickers:first-child {\n    padding-top: 16px;\n  }\n  .ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child .five.wide.field {\n    padding-bottom: 16px;\n  }\n  .ui.attached.segment.tabContent-block .ui.segment .result-block {\n    margin: 20px 0px !important;\n  }\n}\n@media (max-width: 480px) {\n  .ui.attached.segment.tabContent-block .ui.segment .report-form {\n    margin: 0px;\n    padding: 16px;\n  }\n}\n@media (max-width: 320px) {\n  .ui.form .fields .btn-wrapper .bookings_btn-panel {\n    padding: 20px 0px;\n  }\n  .ui.form .fields .btn-wrapper .bookings_btn-panel .primary.button {\n    margin-right: 0px;\n  }\n  .ui.form .fields .btn-wrapper .bookings_btn-panel .reset.button {\n    min-width: 54px !important;\n    margin-bottom: 12px;\n    margin-right: 0px;\n    position: relative;\n    left: -8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3JlcG9ydC90aWNrZXQtcmVwb3J0L0U6XFxCZWxhbFxccHJvamVjdHNcXHByb2R1Y3Rpb24tYnVpbGRcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxccmVwb3J0XFx0aWNrZXQtcmVwb3J0XFx0aWNrZXQtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcmVwb3J0L3RpY2tldC1yZXBvcnQvdGlja2V0LXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBREVJO0VBQ0ksd0JBQUE7RUFDQSwwQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUNBUjtBREVJO0VBQ0ksVUFBQTtFQUNBLFVBQUE7QUNBUjtBRENRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNDWjtBREFZO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDRWhCO0FERUk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUNBUjtBRENRO0VBQ0ksNEJBQUE7QUNDWjtBRENRO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7QUNDWjtBRElBO0VBQ0ksZ0JBQUE7QUNESjtBRElBO0VBQ0ksNENBQUE7QUNESjtBRElBO0VBQ0ksZ0JBQUE7QUNESjtBRElBO0VBQ0ksK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FDREo7QURJQTtFQUNJLGtDQUFBO0VBQ0Esd0NBQUE7QUNESjtBRElBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FDREo7QURPQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0pKO0FES0k7RUFDSSx3Q0FBQTtBQ0hSO0FES0k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0hSO0FET0E7RUFDSSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNKSjtBRE9BO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDSko7QURPQTtFQUNJLDRCQUFBO0FDSko7QURLSTtFQUNJLFlBQUE7QUNIUjtBRElRO0VBQ0ksaUJBQUE7QUNGWjtBRE9BO0VBQ0Usb0JBQUE7QUNKRjtBRE9BO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLHdCQUFBO0FDTEo7QURNSTtFQUNJLGtCQUFBO0FDSlI7QURLUTtFQUNJLG1CQUFBO0FDSFo7QURRQTtFQUNJLGdCQUFBO0FDTEo7QURTSTtFQUNJLHVCQUFBO0FDTlI7QURVQTtFQUVRO0lBQ0ksY0FBQTtFQ1JWO0VEU1U7SUFDSSxxQkFBQTtFQ1BkO0VEU1U7SUFDSSxzQkFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtFQ1BkO0FBQ0Y7QURZQTtFQUdZO0lBQ0cscUJBQUE7RUNaYjtBQUNGO0FEaUJBO0VBQ0k7SUFDSSxjQUFBO0VDZk47RURnQk07SUFDSSxpQkFBQTtFQ2RWO0FBQ0Y7QURrQkE7RUFFUTtJQUNJLFdBQUE7RUNqQlY7RURrQlU7SUFDSSxrQkFBQTtFQ2hCZDtFRGlCYztJQUNJLGlCQUFBO0VDZmxCO0VEaUJjO0lBQ0ksb0JBQUE7RUNmbEI7RURtQk07SUFDSSwyQkFBQTtFQ2pCVjtBQUNGO0FEcUJBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsYUFBQTtFQ25CTjtBQUNGO0FEc0JBO0VBSWdCO0lBQ0ksaUJBQUE7RUN2QmxCO0VEd0JrQjtJQUNJLGlCQUFBO0VDdEJ0QjtFRHdCa0I7SUFDSSwwQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7RUN0QnRCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcmVwb3J0L3RpY2tldC1yZXBvcnQvdGlja2V0LXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib29raW5nc19waWNrZXJzIC5pbnB1dCB7XHJcbiAgICAmLmJvb2tpbmdzX2RhdGVwaWNrZXIge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMzhweFxyXG4gICAgfVxyXG4gICAgLnVpLmJhc2ljLmZsb2F0aW5nLmJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE1MiwgMTUyLCAxNTIsIDAuNikgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgICB9XHJcbiAgICAuaWNvbiB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgICAgICYuY2FsIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zZWFyY2guZHJvcGRvd24ge1xyXG4gICAgICAgIHdpZHRoOiAyMThweDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQycHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlZmF1bHQudGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAwIDAgMzhweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnVzZXItdGFibGUtbGlzdC5iMmMtbGlzdC11c2VyLXRhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi50YWIuc2VnbWVudCB7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLnVpLmJvdHRvbS5hdHRhY2hlZC5hY3RpdmUudGFiLnNlZ21lbnQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQubWVudT4uaXRlbSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjg1NzE0MjlyZW0gMCAwIDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGlja2V0LXJlcG9ydC1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMzIlO1xyXG4gICAgY29sb3I6ICMwMDAwMDA3YTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuXHJcbi8vIC51aS5mbHVpZC5jb250YWluZXIge1xyXG4vLyAgICAgcGFkZGluZzogMjhweDtcclxuLy8gfVxyXG4uYjJjLWxpc3QtdXNlci10YWJsZV9fc2VnbWVudC1sb2FkZXIge1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgLnVpLmludmVydGVkLmRpbW1lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5leWUtaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMzg2N2IxO1xyXG4gICAgfVxyXG59XHJcblxyXG4udWkuZm9ybSAuZmllbGQ+bGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgY29sb3I6ICMxODFCMjA7XHJcbiAgICBtYXJnaW46IDBweCAwcHggOHB4O1xyXG59XHJcblxyXG4uZWlnaHQuZmllbGQuYm9va2luZ3NfYnRuLXBhbmVsIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYWdlbnQtbmFtZS1ib29raW5nIHtcclxuICAgIG1hcmdpbjogYXV0byAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAuZWlnaHQud2lkZS5maWVsZCB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZpdmUud2lkZS5maWVsZCwgLnNpeC53aWRlLmZpZWxkIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLnVpLmF0dGFjaGVkLnNlZ21lbnQudGFiQ29udGVudC1ibG9jayAudWkuc2VnbWVudCAucmVwb3J0LWZvcm0ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMjRweDtcclxuICAgIC8vIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoNiwgNDAsIDk4LCAwLjEpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0Ljk2MTQxcHg7XHJcbiAgICAuZmllbGRzOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAuZml2ZS53aWRlLmZpZWxkIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcclxuICAgIG1hcmdpbjogMjRweCAwcHg7XHJcbn1cclxuXHJcbi5ib29raW5nc19idG4tcGFuZWwge1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDBweCA2cHggMHB4IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMzBweCkge1xyXG4gICAgLnVpLmZvcm0ge1xyXG4gICAgICAgIC5sYXN0LWZpZWxkIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIC5ib29raW5nc19waWNrZXJzIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDMwcHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnVpLmZvcm0ge1xyXG4gICAgICAgIC5sYXN0LWZpZWxkIHtcclxuICAgICAgICAgICAgLmJvb2tpbmdzX3BpY2tlcnMge1xyXG4gICAgICAgICAgICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIC5pdGVtIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweCAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC51aS5hdHRhY2hlZC5zZWdtZW50LnRhYkNvbnRlbnQtYmxvY2sgLnVpLnNlZ21lbnQge1xyXG4gICAgICAgIC5yZXBvcnQtZm9ybSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICAuZmllbGRzOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgLmJvb2tpbmdzX3BpY2tlcnM6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZpdmUud2lkZS5maWVsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlc3VsdC1ibG9jayB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLnVpLmF0dGFjaGVkLnNlZ21lbnQudGFiQ29udGVudC1ibG9jayAudWkuc2VnbWVudCAucmVwb3J0LWZvcm0ge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAgLnVpLmZvcm0ge1xyXG4gICAgICAgIC5maWVsZHMge1xyXG4gICAgICAgICAgICAuYnRuLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgLmJvb2tpbmdzX2J0bi1wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLnByaW1hcnkuYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXNldC5idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDU0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLThweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuYm9va2luZ3NfcGlja2VycyAuaW5wdXQuYm9va2luZ3NfZGF0ZXBpY2tlciB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIG1heC13aWR0aDogMTM4cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnVpLmJhc2ljLmZsb2F0aW5nLmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYmEoMTUyLCAxNTIsIDE1MiwgMC42KSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5pY29uIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xuICB3aWR0aDogMjRweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbi5jYWwge1xuICB3aWR0aDogMThweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuc2VhcmNoLmRyb3Bkb3duIHtcbiAgd2lkdGg6IDIxOHB4O1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5zZWFyY2guZHJvcGRvd24gLnNlYXJjaCB7XG4gIG1hcmdpbi1sZWZ0OiA0MnB4ICFpbXBvcnRhbnQ7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnNlYXJjaC5kcm9wZG93biAuZGVmYXVsdC50ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogOHB4IDAgMCAzOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi51c2VyLXRhYmxlLWxpc3QuYjJjLWxpc3QtdXNlci10YWJsZSB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi50YWIuc2VnbWVudCB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi51aS5ib3R0b20uYXR0YWNoZWQuYWN0aXZlLnRhYi5zZWdtZW50IHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxN3B4O1xufVxuXG4udWkudG9wLmF0dGFjaGVkLm1lbnUgPiAuaXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjg1NzE0MjlyZW0gMCAwIDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi50aWNrZXQtcmVwb3J0LWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMzIlO1xuICBjb2xvcjogIzAwMDAwMDdhO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuLmIyYy1saXN0LXVzZXItdGFibGVfX3NlZ21lbnQtbG9hZGVyIHtcbiAgaGVpZ2h0OiA0NTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLmIyYy1saXN0LXVzZXItdGFibGVfX3NlZ21lbnQtbG9hZGVyIC51aS5pbnZlcnRlZC5kaW1tZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuLmIyYy1saXN0LXVzZXItdGFibGVfX3NlZ21lbnQtbG9hZGVyIC5leWUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMzODY3YjE7XG59XG5cbi51aS5mb3JtIC5maWVsZCA+IGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgY29sb3I6ICMxODFCMjA7XG4gIG1hcmdpbjogMHB4IDBweCA4cHg7XG59XG5cbi5laWdodC5maWVsZC5ib29raW5nc19idG4tcGFuZWwge1xuICBwYWRkaW5nOiAwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYWdlbnQtbmFtZS1ib29raW5nIHtcbiAgbWFyZ2luOiBhdXRvIDI0cHggIWltcG9ydGFudDtcbn1cbi5hZ2VudC1uYW1lLWJvb2tpbmcgLmVpZ2h0LndpZGUuZmllbGQge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uYWdlbnQtbmFtZS1ib29raW5nIC5laWdodC53aWRlLmZpZWxkIGJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4uZml2ZS53aWRlLmZpZWxkLCAuc2l4LndpZGUuZmllbGQge1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cblxuLnVpLmF0dGFjaGVkLnNlZ21lbnQudGFiQ29udGVudC1ibG9jayAudWkuc2VnbWVudCAucmVwb3J0LWZvcm0ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogNC45NjE0MXB4O1xufVxuLnVpLmF0dGFjaGVkLnNlZ21lbnQudGFiQ29udGVudC1ibG9jayAudWkuc2VnbWVudCAucmVwb3J0LWZvcm0gLmZpZWxkczpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLnVpLmF0dGFjaGVkLnNlZ21lbnQudGFiQ29udGVudC1ibG9jayAudWkuc2VnbWVudCAucmVwb3J0LWZvcm0gLmZpZWxkczpsYXN0LWNoaWxkIC5maXZlLndpZGUuZmllbGQge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XG4gIG1hcmdpbjogMjRweCAwcHg7XG59XG5cbi5ib29raW5nc19idG4tcGFuZWwgYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHggNnB4IDBweCAwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDMwcHgpIHtcbiAgLnVpLmZvcm0gLmxhc3QtZmllbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC51aS5mb3JtIC5sYXN0LWZpZWxkIC5ib29raW5nc19waWNrZXJzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLnVpLmZvcm0gLmxhc3QtZmllbGQgLmJ0bi13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAzMHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnVpLmZvcm0gLmxhc3QtZmllbGQgLmJvb2tpbmdzX3BpY2tlcnMge1xuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAudWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSAuaXRlbSB7XG4gICAgcGFkZGluZzogMTJweCAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAudWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXBvcnQtZm9ybSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgLnVpLmF0dGFjaGVkLnNlZ21lbnQudGFiQ29udGVudC1ibG9jayAudWkuc2VnbWVudCAucmVwb3J0LWZvcm0gLmZpZWxkczpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIH1cbiAgLnVpLmF0dGFjaGVkLnNlZ21lbnQudGFiQ29udGVudC1ibG9jayAudWkuc2VnbWVudCAucmVwb3J0LWZvcm0gLmZpZWxkczpsYXN0LWNoaWxkIC5ib29raW5nc19waWNrZXJzOmZpcnN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgfVxuICAudWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXBvcnQtZm9ybSAuZmllbGRzOmxhc3QtY2hpbGQgLmZpdmUud2lkZS5maWVsZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIH1cbiAgLnVpLmF0dGFjaGVkLnNlZ21lbnQudGFiQ29udGVudC1ibG9jayAudWkuc2VnbWVudCAucmVzdWx0LWJsb2NrIHtcbiAgICBtYXJnaW46IDIwcHggMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAudWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXBvcnQtZm9ybSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC51aS5mb3JtIC5maWVsZHMgLmJ0bi13cmFwcGVyIC5ib29raW5nc19idG4tcGFuZWwge1xuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xuICB9XG4gIC51aS5mb3JtIC5maWVsZHMgLmJ0bi13cmFwcGVyIC5ib29raW5nc19idG4tcGFuZWwgLnByaW1hcnkuYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgfVxuICAudWkuZm9ybSAuZmllbGRzIC5idG4td3JhcHBlciAuYm9va2luZ3NfYnRuLXBhbmVsIC5yZXNldC5idXR0b24ge1xuICAgIG1pbi13aWR0aDogNTRweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IC04cHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/layout/report/ticket-report/ticket-report.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/report/ticket-report/ticket-report.component.ts ***!
  \************************************************************************/
/*! exports provided: TicketReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketReportComponent", function() { return TicketReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/report/report.service */ "./src/app/shared/services/report/report.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/excel.service */ "./src/app/shared/services/excel.service.ts");






let TicketReportComponent = class TicketReportComponent {
    constructor(fb, reportService, toastr, excelService) {
        this.fb = fb;
        this.reportService = reportService;
        this.toastr = toastr;
        this.excelService = excelService;
        this.agents = [];
        this.productLists = [];
        this.suppliers = [];
        this.ticketReportObj = {};
        this.showTicketReport = false;
        this.bookingsLoader = false;
        this.submitted = false;
        this.pages = 0;
        this.limit = 15;
        this.pageIndex = 1;
        this.ticketReportForm = this.fb.group({
            agentList: [''],
            productList: [''],
            supplierList: [''],
            ticketStartDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            ticketEndDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.ticketSearch = () => {
            this.bookingsLoader = true;
            this.submitted = true;
            if (this.ticketReportForm.invalid) {
                return;
            }
            this.showTicketReport = true;
            this.ticketReportObj.product = this.ticketReportForm.get('productList').value;
            this.ticketReportObj.supplier_id = this.ticketReportForm.get('supplierList').value;
            this.ticketReportObj.agent_codes = this.ticketReportForm.get('agentList').value;
            this.ticketReportObj.start_date = this.ticketReportForm.get('ticketStartDate').value;
            this.ticketReportObj.end_date = this.ticketReportForm.get('ticketEndDate').value;
            this.reportService.searchTicketReport(this.ticketReportObj).subscribe((results) => {
                if (results.type == 'data') {
                    this.bookingsLoader = false;
                    if (results.Data.length != 0) {
                        this.NewTicketReport = results.Data;
                        this.NewTicketReport.map((element, key) => {
                            if (element.booking != null) {
                                element.trip_id = results.Data[key].booking.trip_id;
                            }
                            else {
                                element.trip_id = "---";
                            }
                        });
                        this.showTicketReport = true;
                    }
                    else {
                        this.bookingsLoader = false;
                        this.toastr.info(`there is no data available to display`, ``, {
                            timeOut: 1000,
                            progressBar: false,
                            positionClass: 'toast-bottom-right'
                        });
                    }
                }
                else {
                    this.bookingsLoader = false;
                    this.toastr.error(`${results.msg}`, `${results.msg}`, {
                        timeOut: 1000,
                        progressBar: false,
                        positionClass: 'toast-bottom-right'
                    });
                }
            });
        };
        this.reset = () => {
            this.ticketReportForm.reset();
            $(".ui.dropdown").dropdown("clear");
            this.showTicketReport = false;
            this.bookingsLoader = false;
        };
    }
    // convenience getter for easy access to form fields
    get f() { return this.ticketReportForm.controls; }
    ngOnInit() {
        this.fetchAllAgents();
        this.fetchAllProducts(this.limit, this.pageIndex);
        this.fetchAllSuppliers();
    }
    ngAfterViewInit() {
        $(document).ready(function () {
            $('.menu .item').tab();
            $('.ui.dropdown').dropdown();
            $('.dropdownFive').dropdown({ placeholder: 'Choose agents' });
        });
        this.loadStartDate();
        this.loadEndDate();
    }
    loadEndDate() {
        var scope = this;
        $(function () {
            $('input[name="ticketEndDate"]').daterangepicker({
                singleDatePicker: true,
                showDropdowns: true,
                // minDate: moment(),
                autoUpdateInput: false,
            }, function (start, end, label) {
                var years = moment().diff(start, 'years');
                scope.ticketReportForm.get('ticketEndDate').setValue(moment(start).format('YYYY-MM-DD'));
            });
        });
    }
    loadStartDate() {
        var scope = this;
        $(function () {
            $('input[name="ticketStartDate"]').daterangepicker({
                singleDatePicker: true,
                showDropdowns: true,
                autoUpdateInput: false,
            }, function (start, end, label) {
                var years = moment().diff(start, 'years');
                scope.ticketReportForm.get('ticketStartDate').setValue(moment(start).format('YYYY-MM-DD'));
            });
        });
    }
    fetchAllAgents() {
        this.bookingsLoader = true;
        this.reportService.GetAllAgents().subscribe((res) => {
            if (res.type == 'data') {
                this.bookingsLoader = false;
                if (res.Organization.length != 0) {
                    this.agents = res.Organization;
                }
                else {
                    this.toastr.info(`There is no agents to display`, `${res.msg}`, {
                        timeOut: 1000,
                        progressBar: false,
                        positionClass: 'toast-bottom-right'
                    });
                }
            }
            else {
                this.bookingsLoader = false;
                this.toastr.error(`${res.msg}`, `${res.msg}`, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    }
    fetchAllProducts(limit, pageIndex) {
        this.bookingsLoader = true;
        this.reportService.GetAllProducts(0, limit, pageIndex).subscribe((res) => {
            if (res.type == 'data') {
                this.bookingsLoader = false;
                if (res.Data.length != 0) {
                    var dataoutput = res.Data;
                    var keys = Object.keys(res.Data);
                    for (let i = 0; i < keys.length; i++) {
                        const key = keys[i];
                        if (dataoutput[key] == 1)
                            this.productLists.push(key);
                    }
                }
                else {
                    this.toastr.info(`There is no product to display`, `${res.msg}`, {
                        timeOut: 1000,
                        progressBar: false,
                        positionClass: 'toast-bottom-right'
                    });
                }
            }
            else {
                this.bookingsLoader = false;
                this.toastr.error(`${res.msg}`, `${res.msg}`, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    }
    fetchAllSuppliers() {
        this.bookingsLoader = true;
        this.reportService.GetAllSuppliers().subscribe((res) => {
            if (res.status) {
                this.bookingsLoader = false;
                if (res.result.length != 0) {
                    this.suppliers = res.result;
                }
                else {
                    this.toastr.info(`There is no suppliers available`, ``, {
                        timeOut: 1000,
                        progressBar: false,
                        positionClass: 'toast-bottom-right'
                    });
                }
            }
            else {
                this.bookingsLoader = false;
                this.toastr.error(`${res.messsage}`, ``, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    }
    exportTicket() {
        this.reportService.exportTicket(this.ticketReportObj).subscribe((result) => {
            if (result.type != 'error') {
                this.excelService.exportAsExcelFile(result.Data, 'bookings');
            }
            else {
                this.toastr.error(`${result.message}`, `${result.message}`, {
                    timeOut: 10000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    }
};
TicketReportComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_5__["ExcelService"] }
];
TicketReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ticket-report',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ticket-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/ticket-report/ticket-report.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ticket-report.component.scss */ "./src/app/layout/report/ticket-report/ticket-report.component.scss")).default]
    })
], TicketReportComponent);



/***/ }),

/***/ "./src/app/layout/report/ticket-report/ticket-report.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/report/ticket-report/ticket-report.module.ts ***!
  \*********************************************************************/
/*! exports provided: TicketReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketReportModule", function() { return TicketReportModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ticket_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ticket-report.component */ "./src/app/layout/report/ticket-report/ticket-report.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var _ticket_report_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ticket-report-routing.module */ "./src/app/layout/report/ticket-report/ticket-report-routing.module.ts");
/* harmony import */ var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/excel.service */ "./src/app/shared/services/excel.service.ts");








let TicketReportModule = class TicketReportModule {
};
TicketReportModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_ticket_report_component__WEBPACK_IMPORTED_MODULE_3__["TicketReportComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"],
            _ticket_report_routing_module__WEBPACK_IMPORTED_MODULE_6__["TicketReportRoutingModule"]
        ],
        providers: [src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExcelService"]]
    })
], TicketReportModule);



/***/ })

}]);
//# sourceMappingURL=ticket-report-ticket-report-module-es2016.js.map