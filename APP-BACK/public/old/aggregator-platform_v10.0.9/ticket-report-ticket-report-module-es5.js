function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ticket-report-ticket-report-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/ticket-report/ticket-report.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/ticket-report/ticket-report.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutReportTicketReportTicketReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui top attached tabular menu \">\r\n  <div class=\"item \" data-tab=\"first\" routerLink=\"/report/booking-report\">\r\n    Booking\r\n  </div>\r\n  <div class=\"item \" data-tab=\"second\" routerLink=\"/report/segment-report\">Segment</div>\r\n  <div class=\"item\" data-tab=\"third\" routerLink=\"/report/mis-report\">MIS</div>\r\n  <div class=\"item\" data-tab=\"fourth\" routerLink=\"/report/search-log-report\">Search Log</div>\r\n  <div class=\"item\" data-tab=\"fifth\" routerLink=\"/report/audit-report\">Audit Trail Log</div>\r\n  <div class=\"item active\" data-tab=\"sixth\" routerLink=\"/report/ticket-report\">Ticket</div>\r\n  <div class=\"item\" data-tab=\"seventh\" routerLink=\"/report/dynamic-report\">Dynamic Report</div>\r\n\r\n</div>\r\n<div class=\"ui bottom attached tab segment tabContent-block active\" data-tab=\"sixth\">\r\n  <div class=\"ui segment\">\r\n    <div class=\"ui fluid container\">\r\n      <div class=\"outer-basics\">\r\n        <form [formGroup]=\"ticketReportForm\" (ngSubmit)=\"ticketSearch()\" class=\"ui form report-form\">\r\n          <div class=\"field\">\r\n            <div class=\"outer-basicForm\">\r\n              <div class=\"form-inner\">\r\n                <div class=\"fields\">\r\n                  <!-- <div class=\"one wide field\"></div> -->\r\n                  <div class=\"six wide field\">\r\n                    <label>Agents</label>\r\n                    <select class=\"ui fluid search dropdownFive multiple_search\" formControlName=\"agentList\"\r\n                      multiple=\"\">\r\n                      <option class=\"item\" *ngFor=\"let agent of agents\" value=\"{{agent.agent_code}}\">{{agent.name}}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"five wide field\">\r\n                    <!--futur use-->\r\n                    <!-- <select class=\"ui fluid  search dropdown\" formControlName=\"productList\">\r\n                                            <option value=\"\">Choose Products</option>\r\n                                            <option class=\"item\" *ngFor=\"let productList of productLists\" value=\"{{productList}}\">{{productList}}\r\n                                            </option>\r\n                                        </select> -->\r\n                    <label>Products</label>\r\n                    <select class=\"ui fluid search dropdown\" formControlName=\"productList\">\r\n                      <option value=\"\">Choose Products</option>\r\n                      <option class=\"item\" value=\"flights\">Flights</option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"five wide field\">\r\n                    <label>Suppliers</label>\r\n                    <select class=\"ui fluid  search dropdown\" formControlName=\"supplierList\">\r\n\r\n                      <option class=\"item\" *ngFor=\"let supplier of suppliers\" value=\"{{supplier.supplier_id}}\">\r\n                        {{supplier.name}}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"fields agent-name-booking\" *ngIf=\"showTicketReport\">\r\n                  <div class=\"eight wide field ui small header\">Ticket Log</div>\r\n                  <!-- <div class=\"ui divider\"></div> -->\r\n                  <div class=\"eight wide field bookings_btn-panel\">\r\n                    <button class=\"ui export button\" title=\"Export\" (click)=\"exportTicket()\">\r\n                      Export\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n                <div class=\"result-block\" *ngIf=\"showTicketReport\">\r\n                  <div class=\"user-table-list b2c-list-user-table\" *ngIf=\"showTicketReport\">\r\n                    <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n                      [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='NewTicketReport' [sortType]=\"'multi'\"\r\n                      [reorderable]=\"true\" [sorts]=\"[{prop: 'id', dir: 'desc'}]\">\r\n                      <!-- <ngx-datatable-column name=\"User\" prop=\"agent_code\">\r\n                                </ngx-datatable-column> -->\r\n                      <ngx-datatable-column name=\"Ticket Number\" prop=\"ticket_number\">\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column name=\"Trip Id\" prop=\"trip_id\">\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column name=\"Base Amount\" prop=\"BaseFare\">\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column name=\"Fee and Tax\" prop=\"Tax\">\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column name=\"Passenger Name\">\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                          <span *ngIf=\"row.bookings_flight.TicketContact !=null\">\r\n                            <span *ngIf=\"row.bookings_flight.TicketContact[0].Surname !=undefined\">\r\n                              {{row.bookings_flight.TicketContact[0].Surname}}\r\n                            </span>\r\n                          </span>\r\n                        </ng-template>\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column name=\"Supplier Code\">\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                          {{row.bookings_flight.supplier.name}}\r\n                        </ng-template>\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column name=\"Booking Status\">\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                          {{row.bookings_flight.booking_status}}\r\n                        </ng-template>\r\n                      </ngx-datatable-column>\r\n                      <ngx-datatable-column name=\"Booked Date\">\r\n                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                          {{row.bookings_flight.created | date: 'dd/MM/yyyy' }}\r\n                        </ng-template>\r\n                      </ngx-datatable-column>\r\n                    </ngx-datatable>\r\n                  </div>\r\n                </div>\r\n                <div class=\"fields text-right\">\r\n                  <div class=\"sixteen wide field btn-wrapper\">\r\n                    <div class=\"bookings_btn-panel\">\r\n                      <button class=\"ui primary reset button\" (click)=\"reset()\" title=\"Reset\">\r\n                        <i class=\"undo icon\"></i>\r\n                      </button>\r\n                      <button class=\"ui primary  button\">\r\n                        Search\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n        <div class=\"result-block\" *ngIf=\"bookingsLoader\">\r\n          <div class=\"ui segment b2c-list-user-table__segment-loader\" *ngIf=\"bookingsLoader\">\r\n            <div class=\"ui active inverted dimmer\">\r\n              <div class=\"ui text loader\">Loading Report...</div>\r\n            </div>\r\n            <p></p>\r\n          </div>\r\n        </div>\r\n        <div class=\"fields agent-name-booking\" *ngIf=\"showTicketReport\">\r\n          <div class=\"eight wide field ui small header\">Ticket Log</div>\r\n          <!-- <div class=\"ui divider\"></div> -->\r\n          <div class=\"eight wide field bookings_btn-panel\">\r\n            <button class=\"ui export button\" title=\"Export\">\r\n              Export\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <div class=\"result-block\" *ngIf=\"showTicketReport\">\r\n          <div class=\"user-table-list b2c-list-user-table\" *ngIf=\"showTicketReport\">\r\n            <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n              [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='NewTicketReport' [sortType]=\"'multi'\" [reorderable]=\"true\"\r\n              [sorts]=\"[{prop: 'id', dir: 'desc'}]\">\r\n              <!-- <ngx-datatable-column name=\"User\" prop=\"agent_code\">\r\n                                </ngx-datatable-column> -->\r\n              <ngx-datatable-column name=\"Ticket Number\" prop=\"ticket_number\">\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Trip Id\" prop=\"trip_id\">\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Base Amount\" prop=\"BaseFare\">\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Fee and Tax\" prop=\"Tax\">\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Passenger Name\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  <span *ngIf=\"row.bookings_flight.TicketContact\">\r\n                    <span *ngIf=\"row.bookings_flight.TicketContact[0].Surname !=null\">\r\n                      {{row.bookings_flight.TicketContact[0].Surname}}</span>\r\n                  </span>\r\n\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Supplier Code\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  {{row.bookings_flight.supplier.name}}\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Booking Status\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  {{row.bookings_flight.booking_status}}\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Booked Date\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  {{row.bookings_flight.created | date: 'dd/MM/yyyy' }}\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n            </ngx-datatable>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/layout/report/ticket-report/ticket-report-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/layout/report/ticket-report/ticket-report-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: TicketReportRoutingModule */

  /***/
  function srcAppLayoutReportTicketReportTicketReportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketReportRoutingModule", function () {
      return TicketReportRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ticket_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ticket-report.component */
    "./src/app/layout/report/ticket-report/ticket-report.component.ts");
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
      component: _ticket_report_component__WEBPACK_IMPORTED_MODULE_1__["TicketReportComponent"]
    }];

    var TicketReportRoutingModule = function TicketReportRoutingModule() {
      _classCallCheck(this, TicketReportRoutingModule);
    };

    TicketReportRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], TicketReportRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/report/ticket-report/ticket-report.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/layout/report/ticket-report/ticket-report.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutReportTicketReportTicketReportComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bookings_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n.bookings_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n.bookings_pickers .input .icon {\n  opacity: 1;\n  z-index: 1;\n}\n.bookings_pickers .input .icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n.bookings_pickers .input .icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n.bookings_pickers .input .search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.bookings_pickers .input .search.dropdown .search {\n  margin-left: 42px !important;\n}\n.bookings_pickers .input .search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n.user-table-list.b2c-list-user-table {\n  margin-top: 16px;\n}\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n.ticket-report-header {\n  position: relative;\n  left: 32%;\n  color: #0000007a;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 200;\n}\n.b2c-list-user-table__segment-loader {\n  height: 450px;\n  background-color: white !important;\n  border: 0;\n  box-shadow: none;\n}\n.b2c-list-user-table__segment-loader .ui.inverted.dimmer {\n  background-color: transparent !important;\n}\n.b2c-list-user-table__segment-loader .eye-icon {\n  font-size: 12px;\n  color: #3867b1;\n}\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n.eight.field.bookings_btn-panel {\n  padding: 0px;\n  text-align: right;\n}\n.agent-name-booking {\n  margin: auto 24px !important;\n}\n.agent-name-booking .eight.wide.field {\n  padding: 0px;\n}\n.agent-name-booking .eight.wide.field button {\n  margin-right: 0px;\n}\n.five.wide.field, .six.wide.field {\n  padding-bottom: 16px;\n}\n.ui.attached.segment.tabContent-block .ui.segment .report-form {\n  background: #fff;\n  padding: 24px;\n  margin: 24px;\n  box-shadow: 0px 2px 6px rgba(6, 40, 98, 0.1) !important;\n  border-radius: 4.96141px;\n}\n.ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child {\n  margin-bottom: 0px;\n}\n.ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child .five.wide.field {\n  padding-bottom: 0px;\n}\n.ui.top.attached.tabular.menu {\n  margin: 24px 0px;\n}\n.bookings_btn-panel button {\n  margin: 0px 6px 0px 0px;\n}\n@media (max-width: 1030px) {\n  .ui.form .last-field {\n    display: block;\n  }\n  .ui.form .last-field .bookings_pickers {\n    display: inline-block;\n  }\n  .ui.form .last-field .btn-wrapper {\n    width: 100% !important;\n    display: block;\n    text-align: right;\n  }\n}\n@media (max-width: 1030px) and (min-width: 768px) {\n  .ui.form .last-field .bookings_pickers {\n    width: 50% !important;\n  }\n}\n@media (max-width: 800px) {\n  .ui.top.attached.tabular.menu {\n    display: block;\n  }\n  .ui.top.attached.tabular.menu .item {\n    padding: 12px 0px;\n  }\n}\n@media (max-width: 767px) {\n  .ui.attached.segment.tabContent-block .ui.segment .report-form {\n    margin: 0px;\n  }\n  .ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child {\n    margin-bottom: 0px;\n  }\n  .ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child .bookings_pickers:first-child {\n    padding-top: 16px;\n  }\n  .ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child .five.wide.field {\n    padding-bottom: 16px;\n  }\n  .ui.attached.segment.tabContent-block .ui.segment .result-block {\n    margin: 20px 0px !important;\n  }\n}\n@media (max-width: 480px) {\n  .ui.attached.segment.tabContent-block .ui.segment .report-form {\n    margin: 0px;\n    padding: 16px;\n  }\n}\n@media (max-width: 320px) {\n  .ui.form .fields .btn-wrapper .bookings_btn-panel {\n    padding: 20px 0px;\n  }\n  .ui.form .fields .btn-wrapper .bookings_btn-panel .primary.button {\n    margin-right: 0px;\n  }\n  .ui.form .fields .btn-wrapper .bookings_btn-panel .reset.button {\n    min-width: 54px !important;\n    margin-bottom: 12px;\n    margin-right: 0px;\n    position: relative;\n    left: -8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3JlcG9ydC90aWNrZXQtcmVwb3J0L0U6XFxCZWxhbFxccHJvamVjdHNcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxccmVwb3J0XFx0aWNrZXQtcmVwb3J0XFx0aWNrZXQtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcmVwb3J0L3RpY2tldC1yZXBvcnQvdGlja2V0LXJlcG9ydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBREVJO0VBQ0ksd0JBQUE7RUFDQSwwQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUNBUjtBREVJO0VBQ0ksVUFBQTtFQUNBLFVBQUE7QUNBUjtBRENRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNDWjtBREFZO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDRWhCO0FERUk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUNBUjtBRENRO0VBQ0ksNEJBQUE7QUNDWjtBRENRO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7QUNDWjtBRElBO0VBQ0ksZ0JBQUE7QUNESjtBRElBO0VBQ0ksNENBQUE7QUNESjtBRElBO0VBQ0ksZ0JBQUE7QUNESjtBRElBO0VBQ0ksK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FDREo7QURJQTtFQUNJLGtDQUFBO0VBQ0Esd0NBQUE7QUNESjtBRElBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FDREo7QURPQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0pKO0FES0k7RUFDSSx3Q0FBQTtBQ0hSO0FES0k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0hSO0FET0E7RUFDSSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNKSjtBRE9BO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FDSko7QURPQTtFQUNJLDRCQUFBO0FDSko7QURLSTtFQUNJLFlBQUE7QUNIUjtBRElRO0VBQ0ksaUJBQUE7QUNGWjtBRE9BO0VBQ0Usb0JBQUE7QUNKRjtBRE9BO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVEQUFBO0VBQ0Esd0JBQUE7QUNKSjtBREtJO0VBQ0ksa0JBQUE7QUNIUjtBRElRO0VBQ0ksbUJBQUE7QUNGWjtBRE9BO0VBQ0ksZ0JBQUE7QUNKSjtBRFFJO0VBQ0ksdUJBQUE7QUNMUjtBRFNBO0VBRVE7SUFDSSxjQUFBO0VDUFY7RURRVTtJQUNJLHFCQUFBO0VDTmQ7RURRVTtJQUNJLHNCQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0VDTmQ7QUFDRjtBRFdBO0VBR1k7SUFDRyxxQkFBQTtFQ1hiO0FBQ0Y7QURnQkE7RUFDSTtJQUNJLGNBQUE7RUNkTjtFRGVNO0lBQ0ksaUJBQUE7RUNiVjtBQUNGO0FEaUJBO0VBRVE7SUFDSSxXQUFBO0VDaEJWO0VEaUJVO0lBQ0ksa0JBQUE7RUNmZDtFRGdCYztJQUNJLGlCQUFBO0VDZGxCO0VEZ0JjO0lBQ0ksb0JBQUE7RUNkbEI7RURrQk07SUFDSSwyQkFBQTtFQ2hCVjtBQUNGO0FEb0JBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsYUFBQTtFQ2xCTjtBQUNGO0FEcUJBO0VBSWdCO0lBQ0ksaUJBQUE7RUN0QmxCO0VEdUJrQjtJQUNJLGlCQUFBO0VDckJ0QjtFRHVCa0I7SUFDSSwwQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtJQUNBLFVBQUE7RUNyQnRCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcmVwb3J0L3RpY2tldC1yZXBvcnQvdGlja2V0LXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib29raW5nc19waWNrZXJzIC5pbnB1dCB7XHJcbiAgICAmLmJvb2tpbmdzX2RhdGVwaWNrZXIge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMzhweFxyXG4gICAgfVxyXG4gICAgLnVpLmJhc2ljLmZsb2F0aW5nLmJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE1MiwgMTUyLCAxNTIsIDAuNikgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgICB9XHJcbiAgICAuaWNvbiB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgICAgICYuY2FsIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zZWFyY2guZHJvcGRvd24ge1xyXG4gICAgICAgIHdpZHRoOiAyMThweDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQycHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlZmF1bHQudGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAwIDAgMzhweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnVzZXItdGFibGUtbGlzdC5iMmMtbGlzdC11c2VyLXRhYmxlIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi50YWIuc2VnbWVudCB7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLnVpLmJvdHRvbS5hdHRhY2hlZC5hY3RpdmUudGFiLnNlZ21lbnQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQubWVudT4uaXRlbSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjg1NzE0MjlyZW0gMCAwIDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGlja2V0LXJlcG9ydC1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMzIlO1xyXG4gICAgY29sb3I6ICMwMDAwMDA3YTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuXHJcbi8vIC51aS5mbHVpZC5jb250YWluZXIge1xyXG4vLyAgICAgcGFkZGluZzogMjhweDtcclxuLy8gfVxyXG4uYjJjLWxpc3QtdXNlci10YWJsZV9fc2VnbWVudC1sb2FkZXIge1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgLnVpLmludmVydGVkLmRpbW1lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5leWUtaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMzg2N2IxO1xyXG4gICAgfVxyXG59XHJcblxyXG4udWkuZm9ybSAuZmllbGQ+bGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgY29sb3I6ICMxODFCMjA7XHJcbiAgICBtYXJnaW46IDBweCAwcHggOHB4O1xyXG59XHJcblxyXG4uZWlnaHQuZmllbGQuYm9va2luZ3NfYnRuLXBhbmVsIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYWdlbnQtbmFtZS1ib29raW5nIHtcclxuICAgIG1hcmdpbjogYXV0byAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAuZWlnaHQud2lkZS5maWVsZCB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZpdmUud2lkZS5maWVsZCwgLnNpeC53aWRlLmZpZWxkIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLnVpLmF0dGFjaGVkLnNlZ21lbnQudGFiQ29udGVudC1ibG9jayAudWkuc2VnbWVudCAucmVwb3J0LWZvcm0ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICBtYXJnaW46IDI0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDYsIDQwLCA5OCwgMC4xKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNC45NjE0MXB4O1xyXG4gICAgLmZpZWxkczpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgLmZpdmUud2lkZS5maWVsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XHJcbiAgICBtYXJnaW46IDI0cHggMHB4O1xyXG59XHJcblxyXG4uYm9va2luZ3NfYnRuLXBhbmVsIHtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggNnB4IDBweCAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDMwcHgpIHtcclxuICAgIC51aS5mb3JtIHtcclxuICAgICAgICAubGFzdC1maWVsZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAuYm9va2luZ3NfcGlja2VycyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0bi13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAzMHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC51aS5mb3JtIHtcclxuICAgICAgICAubGFzdC1maWVsZCB7XHJcbiAgICAgICAgICAgIC5ib29raW5nc19waWNrZXJzIHtcclxuICAgICAgICAgICAgICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAuaXRlbSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAudWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IHtcclxuICAgICAgICAucmVwb3J0LWZvcm0ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgLmZpZWxkczpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgIC5ib29raW5nc19waWNrZXJzOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5maXZlLndpZGUuZmllbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZXN1bHQtYmxvY2sge1xyXG4gICAgICAgICAgICBtYXJnaW46IDIwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC51aS5hdHRhY2hlZC5zZWdtZW50LnRhYkNvbnRlbnQtYmxvY2sgLnVpLnNlZ21lbnQgLnJlcG9ydC1mb3JtIHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAgIC51aS5mb3JtIHtcclxuICAgICAgICAuZmllbGRzIHtcclxuICAgICAgICAgICAgLmJ0bi13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgIC5ib29raW5nc19idG4tcGFuZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC5wcmltYXJ5LmJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucmVzZXQuYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA1NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC04cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0LmJvb2tpbmdzX2RhdGVwaWNrZXIge1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBtYXgtd2lkdGg6IDEzOHB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC51aS5iYXNpYy5mbG9hdGluZy5idXR0b24ge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiByZ2JhKDE1MiwgMTUyLCAxNTIsIDAuNikgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTFweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuaWNvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDE7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcbiAgd2lkdGg6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsIHtcbiAgd2lkdGg6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnNlYXJjaC5kcm9wZG93biB7XG4gIHdpZHRoOiAyMThweDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuc2VhcmNoLmRyb3Bkb3duIC5zZWFyY2gge1xuICBtYXJnaW4tbGVmdDogNDJweCAhaW1wb3J0YW50O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5zZWFyY2guZHJvcGRvd24gLmRlZmF1bHQudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDhweCAwIDAgMzhweCAhaW1wb3J0YW50O1xufVxuXG4udXNlci10YWJsZS1saXN0LmIyYy1saXN0LXVzZXItdGFibGUge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4udGFiLnNlZ21lbnQge1xuICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4udWkuYm90dG9tLmF0dGFjaGVkLmFjdGl2ZS50YWIuc2VnbWVudCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE3cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTdweDtcbn1cblxuLnVpLnRvcC5hdHRhY2hlZC5tZW51ID4gLml0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwLjI4NTcxNDI5cmVtIDAgMCAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xufVxuXG4udGlja2V0LXJlcG9ydC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDMyJTtcbiAgY29sb3I6ICMwMDAwMDA3YTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi5iMmMtbGlzdC11c2VyLXRhYmxlX19zZWdtZW50LWxvYWRlciB7XG4gIGhlaWdodDogNDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5iMmMtbGlzdC11c2VyLXRhYmxlX19zZWdtZW50LWxvYWRlciAudWkuaW52ZXJ0ZWQuZGltbWVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi5iMmMtbGlzdC11c2VyLXRhYmxlX19zZWdtZW50LWxvYWRlciAuZXllLWljb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMzg2N2IxO1xufVxuXG4udWkuZm9ybSAuZmllbGQgPiBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIGNvbG9yOiAjMTgxQjIwO1xuICBtYXJnaW46IDBweCAwcHggOHB4O1xufVxuXG4uZWlnaHQuZmllbGQuYm9va2luZ3NfYnRuLXBhbmVsIHtcbiAgcGFkZGluZzogMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmFnZW50LW5hbWUtYm9va2luZyB7XG4gIG1hcmdpbjogYXV0byAyNHB4ICFpbXBvcnRhbnQ7XG59XG4uYWdlbnQtbmFtZS1ib29raW5nIC5laWdodC53aWRlLmZpZWxkIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLmFnZW50LW5hbWUtYm9va2luZyAuZWlnaHQud2lkZS5maWVsZCBidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmZpdmUud2lkZS5maWVsZCwgLnNpeC53aWRlLmZpZWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5cbi51aS5hdHRhY2hlZC5zZWdtZW50LnRhYkNvbnRlbnQtYmxvY2sgLnVpLnNlZ21lbnQgLnJlcG9ydC1mb3JtIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMjRweDtcbiAgbWFyZ2luOiAyNHB4O1xuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDYsIDQwLCA5OCwgMC4xKSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0Ljk2MTQxcHg7XG59XG4udWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXBvcnQtZm9ybSAuZmllbGRzOmxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4udWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXBvcnQtZm9ybSAuZmllbGRzOmxhc3QtY2hpbGQgLmZpdmUud2lkZS5maWVsZCB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcbiAgbWFyZ2luOiAyNHB4IDBweDtcbn1cblxuLmJvb2tpbmdzX2J0bi1wYW5lbCBidXR0b24ge1xuICBtYXJnaW46IDBweCA2cHggMHB4IDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMzBweCkge1xuICAudWkuZm9ybSAubGFzdC1maWVsZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnVpLmZvcm0gLmxhc3QtZmllbGQgLmJvb2tpbmdzX3BpY2tlcnMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAudWkuZm9ybSAubGFzdC1maWVsZCAuYnRuLXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDMwcHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAudWkuZm9ybSAubGFzdC1maWVsZCAuYm9va2luZ3NfcGlja2VycyB7XG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IC5pdGVtIHtcbiAgICBwYWRkaW5nOiAxMnB4IDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC51aS5hdHRhY2hlZC5zZWdtZW50LnRhYkNvbnRlbnQtYmxvY2sgLnVpLnNlZ21lbnQgLnJlcG9ydC1mb3JtIHtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuICAudWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXBvcnQtZm9ybSAuZmllbGRzOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuICAudWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXBvcnQtZm9ybSAuZmllbGRzOmxhc3QtY2hpbGQgLmJvb2tpbmdzX3BpY2tlcnM6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICB9XG4gIC51aS5hdHRhY2hlZC5zZWdtZW50LnRhYkNvbnRlbnQtYmxvY2sgLnVpLnNlZ21lbnQgLnJlcG9ydC1mb3JtIC5maWVsZHM6bGFzdC1jaGlsZCAuZml2ZS53aWRlLmZpZWxkIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgfVxuICAudWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXN1bHQtYmxvY2sge1xuICAgIG1hcmdpbjogMjBweCAwcHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC51aS5hdHRhY2hlZC5zZWdtZW50LnRhYkNvbnRlbnQtYmxvY2sgLnVpLnNlZ21lbnQgLnJlcG9ydC1mb3JtIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLnVpLmZvcm0gLmZpZWxkcyAuYnRuLXdyYXBwZXIgLmJvb2tpbmdzX2J0bi1wYW5lbCB7XG4gICAgcGFkZGluZzogMjBweCAwcHg7XG4gIH1cbiAgLnVpLmZvcm0gLmZpZWxkcyAuYnRuLXdyYXBwZXIgLmJvb2tpbmdzX2J0bi1wYW5lbCAucHJpbWFyeS5idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG4gIC51aS5mb3JtIC5maWVsZHMgLmJ0bi13cmFwcGVyIC5ib29raW5nc19idG4tcGFuZWwgLnJlc2V0LmJ1dHRvbiB7XG4gICAgbWluLXdpZHRoOiA1NHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogLThweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/report/ticket-report/ticket-report.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/layout/report/ticket-report/ticket-report.component.ts ***!
    \************************************************************************/

  /*! exports provided: TicketReportComponent */

  /***/
  function srcAppLayoutReportTicketReportTicketReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketReportComponent", function () {
      return TicketReportComponent;
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


    var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/excel.service */
    "./src/app/shared/services/excel.service.ts");

    var TicketReportComponent =
    /*#__PURE__*/
    function () {
      function TicketReportComponent(fb, reportService, toastr, excelService) {
        var _this = this;

        _classCallCheck(this, TicketReportComponent);

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

        this.ticketSearch = function () {
          _this.bookingsLoader = true;
          _this.submitted = true;

          if (_this.ticketReportForm.invalid) {
            return;
          }

          _this.showTicketReport = true;
          _this.ticketReportObj.product = _this.ticketReportForm.get('productList').value;
          _this.ticketReportObj.supplier_id = _this.ticketReportForm.get('supplierList').value;
          _this.ticketReportObj.agent_codes = _this.ticketReportForm.get('agentList').value;
          _this.ticketReportObj.start_date = _this.ticketReportForm.get('ticketStartDate').value;
          _this.ticketReportObj.end_date = _this.ticketReportForm.get('ticketEndDate').value;

          _this.reportService.searchTicketReport(_this.ticketReportObj).subscribe(function (results) {
            if (results.type == 'data') {
              _this.bookingsLoader = false;

              if (results.Data.length != 0) {
                _this.NewTicketReport = results.Data;

                _this.NewTicketReport.map(function (element, key) {
                  if (element.booking != null) {
                    element.trip_id = results.Data[key].booking.trip_id;
                  } else {
                    element.trip_id = "---";
                  }
                });

                _this.showTicketReport = true;
              } else {
                _this.bookingsLoader = false;

                _this.toastr.info("there is no data available to display", "", {
                  timeOut: 1000,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });
              }
            } else {
              _this.bookingsLoader = false;

              _this.toastr.error("".concat(results.msg), "".concat(results.msg), {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        };

        this.reset = function () {
          _this.ticketReportForm.reset();

          $(".ui.dropdown").dropdown("clear");
          _this.showTicketReport = false;
          _this.bookingsLoader = false;
        };
      } // convenience getter for easy access to form fields


      _createClass(TicketReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fetchAllAgents();
          this.fetchAllProducts(this.limit, this.pageIndex);
          this.fetchAllSuppliers();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          $(document).ready(function () {
            $('.menu .item').tab();
            $('.ui.dropdown').dropdown();
            $('.dropdownFive').dropdown({
              placeholder: 'Choose agents'
            });
          });
          this.loadStartDate();
          this.loadEndDate();
        }
      }, {
        key: "loadEndDate",
        value: function loadEndDate() {
          var scope = this;
          $(function () {
            $('input[name="ticketEndDate"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              // minDate: moment(),
              autoUpdateInput: false
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.ticketReportForm.get('ticketEndDate').setValue(moment(start).format('YYYY-MM-DD'));
            });
          });
        }
      }, {
        key: "loadStartDate",
        value: function loadStartDate() {
          var scope = this;
          $(function () {
            $('input[name="ticketStartDate"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              autoUpdateInput: false
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.ticketReportForm.get('ticketStartDate').setValue(moment(start).format('YYYY-MM-DD'));
            });
          });
        }
      }, {
        key: "fetchAllAgents",
        value: function fetchAllAgents() {
          var _this2 = this;

          this.bookingsLoader = true;
          this.reportService.GetAllAgents().subscribe(function (res) {
            if (res.type == 'data') {
              _this2.bookingsLoader = false;

              if (res.Organization.length != 0) {
                _this2.agents = res.Organization;
              } else {
                _this2.toastr.info("There is no agents to display", "".concat(res.msg), {
                  timeOut: 1000,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });
              }
            } else {
              _this2.bookingsLoader = false;

              _this2.toastr.error("".concat(res.msg), "".concat(res.msg), {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "fetchAllProducts",
        value: function fetchAllProducts(limit, pageIndex) {
          var _this3 = this;

          this.bookingsLoader = true;
          this.reportService.GetAllProducts(0, limit, pageIndex).subscribe(function (res) {
            if (res.type == 'data') {
              _this3.bookingsLoader = false;

              if (res.Data.length != 0) {
                var dataoutput = res.Data;
                var keys = Object.keys(res.Data);

                for (var i = 0; i < keys.length; i++) {
                  var key = keys[i];
                  if (dataoutput[key] == 1) _this3.productLists.push(key);
                }
              } else {
                _this3.toastr.info("There is no product to display", "".concat(res.msg), {
                  timeOut: 1000,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });
              }
            } else {
              _this3.bookingsLoader = false;

              _this3.toastr.error("".concat(res.msg), "".concat(res.msg), {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "fetchAllSuppliers",
        value: function fetchAllSuppliers() {
          var _this4 = this;

          this.bookingsLoader = true;
          this.reportService.GetAllSuppliers().subscribe(function (res) {
            if (res.status) {
              _this4.bookingsLoader = false;

              if (res.result.length != 0) {
                _this4.suppliers = res.result;
              } else {
                _this4.toastr.info("There is no suppliers available", "", {
                  timeOut: 1000,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });
              }
            } else {
              _this4.bookingsLoader = false;

              _this4.toastr.error("".concat(res.messsage), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "exportTicket",
        value: function exportTicket() {
          var _this5 = this;

          this.reportService.exportTicket(this.ticketReportObj).subscribe(function (result) {
            if (result.type != 'error') {
              _this5.excelService.exportAsExcelFile(result.Data, 'bookings');
            } else {
              _this5.toastr.error("".concat(result.message), "".concat(result.message), {
                timeOut: 10000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.ticketReportForm.controls;
        }
      }]);

      return TicketReportComponent;
    }();

    TicketReportComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_5__["ExcelService"]
      }];
    };

    TicketReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ticket-report',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ticket-report.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/ticket-report/ticket-report.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ticket-report.component.scss */
      "./src/app/layout/report/ticket-report/ticket-report.component.scss")).default]
    })], TicketReportComponent);
    /***/
  },

  /***/
  "./src/app/layout/report/ticket-report/ticket-report.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/layout/report/ticket-report/ticket-report.module.ts ***!
    \*********************************************************************/

  /*! exports provided: TicketReportModule */

  /***/
  function srcAppLayoutReportTicketReportTicketReportModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TicketReportModule", function () {
      return TicketReportModule;
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


    var _ticket_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ticket-report.component */
    "./src/app/layout/report/ticket-report/ticket-report.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var _ticket_report_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ticket-report-routing.module */
    "./src/app/layout/report/ticket-report/ticket-report-routing.module.ts");
    /* harmony import */


    var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/services/excel.service */
    "./src/app/shared/services/excel.service.ts");

    var TicketReportModule = function TicketReportModule() {
      _classCallCheck(this, TicketReportModule);
    };

    TicketReportModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_ticket_report_component__WEBPACK_IMPORTED_MODULE_3__["TicketReportComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"], _ticket_report_routing_module__WEBPACK_IMPORTED_MODULE_6__["TicketReportRoutingModule"]],
      providers: [src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_7__["ExcelService"]]
    })], TicketReportModule);
    /***/
  }
}]);
//# sourceMappingURL=ticket-report-ticket-report-module-es5.js.map