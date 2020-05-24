function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["booking-report-booking-report-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/booking-report/booking-report.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/booking-report/booking-report.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutReportBookingReportBookingReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui top attached tabular menu \">\r\n    <!-- <div *appCanAccess=\"['reports', 'bookingRep','']\" class=\"item active\" data-tab=\"first\" -->\r\n    <div class=\"item active\" data-tab=\"first\" routerLink=\"/report/booking-report\">\r\n        Booking\r\n    </div>\r\n    <!-- <div *appCanAccess=\"['reports', 'segment','']\" class=\"item\" data-tab=\"second\" routerLink=\"/report/segment-report\"> -->\r\n    <div class=\"item\" data-tab=\"second\" routerLink=\"/report/segment-report\">\r\n        Segment</div>\r\n    <!-- <div *appCanAccess=\"['reports', 'mis','']\" class=\"item\" data-tab=\"third\" routerLink=\"/report/mis-report\">MIS</div> -->\r\n    <div class=\"item\" data-tab=\"third\" routerLink=\"/report/mis-report\">MIS</div>\r\n    <!--   \r\n  <div *appCanAccess=\"['reports', 'searchLog','']\" class=\"item\" data-tab=\"fourth\"routerLink=\"/report/search-log-report\">Search Log</div> -->\r\n    <div class=\"item\" data-tab=\"fourth\" routerLink=\"/report/search-log-report\">Search Log</div>\r\n    <!-- <div *appCanAccess=\"['reports', 'auditTrial','']\" class=\"item\" data-tab=\"fifth\" routerLink=\"/report/audit-report\">Audit Trail Log</div> -->\r\n    <div class=\"item\" data-tab=\"fifth\" routerLink=\"/report/audit-report\">Audit Trail Log</div>\r\n    <!-- <div *appCanAccess=\"['reports', 'ticket','']\" class=\"item\" data-tab=\"sixth\" routerLink=\"/report/ticket-report\">Ticket\r\n  </div> -->\r\n    <div class=\"item\" data-tab=\"sixth\" routerLink=\"/report/ticket-report\">Ticket\r\n    </div>\r\n    <!-- <div *appCanAccess=\"['reports', 'dynamicReport','']\" class=\"item\" data-tab=\"seventh\"\r\n    routerLink=\"/report/dynamic-report\">Dynamic Report</div> -->\r\n    <div class=\"item\" data-tab=\"seventh\" routerLink=\"/report/dynamic-report\">Dynamic Report</div>\r\n</div>\r\n<div class=\"ui bottom attached tab segment active tabContent-block\" data-tab=\"first\">\r\n    <div class=\"ui segment\">\r\n        <div class=\"ui fluid container\">\r\n            <div class=\"outer-forms booking\">\r\n                <form [formGroup]=\"bookingReportForm\" (ngSubmit)=\"viewReport()\" class=\"ui form report-form\">\r\n                    <div class=\"field\">\r\n                        <div class=\"fields\">\r\n                            <!-- <div class=\"one wide field\"></div> -->\r\n                            <div class=\"six wide field\">\r\n                                <label>Choose Agent</label>\r\n                                <select class=\"ui fluid search dropdownOne multiple_search\" formControlName=\"selectAgent\" multiple=\"\">\r\n                                  <option class=\"item\" *ngFor=\"let agent of agents\" value=\"{{agent.agent_code}}\">{{agent.name}}</option>\r\n                                </select>\r\n                            </div>\r\n                            <!--future use-->\r\n                            <!-- <div class=\"four wide field\">\r\n                              <select class=\"ui fluid search dropdown\" formControlName=\"selectProduct\">\r\n                                <option value=\"\">Choose Products</option>\r\n                                <option class=\"item\" *ngFor=\"let product of products\" value=\"{{product}}\">{{product}}</option>\r\n                              </select>\r\n                            </div> -->\r\n\r\n                            <div class=\"five wide field\" [ngClass]=\"{'error': ((submitted && f.selectProduct.errors) && f.selectProduct.errors.required) }\">\r\n                                <label>Choose Product<span class=\"mandatory\">*</span></label>\r\n                                <select class=\"ui fluid search dropdown\" formControlName=\"selectProduct\" required>\r\n                                  <option value=\"\">Choose Product</option>\r\n                                  <option class=\"item\" value=\"flights\">Flights</option>\r\n                                  <option class=\"item\" value=\"cars\">Cars</option>\r\n                                  <option class=\"item\" value=\"hotel\">Hotel</option>\r\n                                  <option class=\"item\" value=\"insurance\">Insurance</option>\r\n                                  <option class=\"item\" value=\"transfer\">Transfer</option>\r\n                                  <option class=\"item\" value=\"activity\">Activity</option>\r\n                                  <!-- <option class=\"item\" value=\"cruises\">cruises</option> -->\r\n                         \r\n                                </select>\r\n                            </div>\r\n                            <div class=\"five wide field\">\r\n                                <label>Choose Supplier</label>\r\n                                <select class=\"ui fluid search dropdown\" formControlName=\"selectSupplier\">\r\n                                  <!-- <option value=\"\">Choose Supplier</option> -->\r\n                                  <option value=\"\" selected disabled>Choose Supplier</option>\r\n                                  <option class=\"item\" *ngFor=\"let supplier of suppliers\" value=\"{{supplier.supplier_id}}\">\r\n                                    {{supplier.name}}</option>\r\n                                </select>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"fields last-field\">\r\n                            <!-- <div class=\"one wide field\"></div> -->\r\n                            <div class=\"six wide field bookings_pickers \" [ngClass]=\"{'error': ((submitted && f.bookingStartDate.errors) && f.bookingStartDate.errors.required) }\">\r\n                                <label>Start Date<span class=\"mandatory\">*</span></label>\r\n                                <div class=\"ui left icon input\">\r\n                                    <input type=\"text\" placeholder=\"Start Date\" formControlName=\"bookingStartDate\" name=\"bookingStartDate\" value=\"\" required />\r\n                                    <i class=\"icon\">\r\n                                        <i class=\"fa fa-calendar-o bookings_input__placeholder-icon cal\" aria-hidden=\"true\"></i>\r\n                                        <!-- <img src=\"./../../../../assets/icons/calendar.svg\" class=\"bookings_input__placeholder-icon cal\" /> -->\r\n                                    </i>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"five wide field bookings_pickers\" [ngClass]=\"{'error': ((submitted && f.bookingEndDate.errors) && f.bookingEndDate.errors.required) }\">\r\n                                <label>End Date<span class=\"mandatory\">*</span></label>\r\n                                <div class=\"ui left icon input\">\r\n                                    <input type=\"text\" placeholder=\"End Date\" formControlName=\"bookingEndDate\" name=\"bookingEndDate\" value=\"\" required />\r\n                                    <i class=\"icon\">\r\n                                        <!-- <img src=\"./../../../../assets/icons/calendar.svg\" class=\"bookings_input__placeholder-icon cal\" /> -->\r\n                                        <i class=\"fa fa-calendar-o bookings_input__placeholder-icon cal\" aria-hidden=\"true\"></i>\r\n                                    </i>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"five wide field btn-wrapper\">\r\n                                <div class=\"bookings_btn-panel\">\r\n                                    <button class=\"ui primary reset button\" (click)=\"resetReport()\" title=\"Reset\">\r\n                                        <i class=\"undo icon\"></i>\r\n                                    </button>\r\n                                    <button class=\"ui primary button\">\r\n                                        View Report\r\n                                    </button>\r\n                                    <!-- <div class=\"download-img\" title=\"Export\" (click)=\"exportData()\">\r\n                                        <img class=\"ui image download-img_icon\" src=\"./../../../../assets/img/download.png\" />\r\n                                    </div> -->\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <!-- <div class=\"fields btn-field\">\r\n                            <div class=\"bookings_btn-panel\">\r\n                                <button class=\"ui primary reset button\" (click)=\"resetReport()\" title=\"Reset\">\r\n                                  <i class=\"undo icon\"></i>\r\n                                </button>\r\n                                <button class=\"ui primary button\">\r\n                                  View Report\r\n                                </button>\r\n                                <div class=\"download-img\" title=\"Export\" (click)=\"exportData()\" *ngIf=\"showDynamicReport\">\r\n                                    <img class=\"ui image download-img_icon\" src=\"./../../../../assets/img/download.png\" />\r\n                                </div>\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                </form>\r\n                <div class=\"ui segment b2c-list-user-table__segment-loader\" *ngIf=\"bookingsLoader\">\r\n                    <div class=\"ui active inverted dimmer\">\r\n                        <div class=\"ui text loader\">Loading Report ...</div>\r\n                    </div>\r\n                    <p></p>\r\n                </div>\r\n                <ng-container *ngFor=\"let booking of allBookings; let index = i;\">\r\n                    <ng-container *ngIf=\"booking.bookings.length\">\r\n                        <div *ngIf=\"showDynamicReport\" class=\"fields agent-name-booking\">\r\n                            <!-- <p>{{booking.name}}</p> -->\r\n                            <div class=\"eight wide field ui small header\">{{booking.name}}</div>\r\n                            <!-- <div class=\"ui divider\"></div> -->\r\n                            <div class=\"eight wide field bookings_btn-panel\">\r\n                                <button class=\"ui export button\" (click)=\"exportData()\" *ngIf=\"showDynamicReport\" title=\"Export\">\r\n                                    Export\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"result-block\">\r\n                            <div class=\"user-table-list b2c-list-user-table\" *ngIf=\"showDynamicReport\">\r\n                                <ngx-datatable #table{i} class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='booking.bookings' [sortType]=\"'multi'\" [reorderable]=\"true\" [sorts]=\"[{prop: 'id', dir: 'desc'}]\">\r\n                                    <ngx-datatable-column name=\"Product\">\r\n                                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                            <div *ngIf=\"row.has_flight == 1\">Flights</div>\r\n                                        </ng-template>\r\n                                    </ngx-datatable-column>\r\n                                    <ngx-datatable-column name=\"Agent Code\" prop=\"agent_code\">\r\n                                    </ngx-datatable-column>\r\n                                    <ngx-datatable-column name=\"Trip ID\">\r\n                                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                            <div (click)=\"getBookingRefereceDetails(row,'custom-modal-booking')\"><a>{{row.trip_id}}</a></div>\r\n                                        </ng-template>\r\n                                    </ngx-datatable-column>\r\n                                    <ngx-datatable-column name=\"Supplier\" prop=\"suppliers\">\r\n                                    </ngx-datatable-column>\r\n                                    <ngx-datatable-column name=\"Supplier Conf No\" prop=\"pnr_no\">\r\n                                    </ngx-datatable-column>\r\n                                    <ngx-datatable-column name=\"Supplier Amount\">\r\n                                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                            {{row.supplier_price |number : '1.2-2'}}         \r\n                                    </ng-template>\r\n                                    </ngx-datatable-column>\r\n                                    <ngx-datatable-column name=\"Commission Amount\">\r\n                                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                            <div *ngIf=\"row.commission != null || row.commission != [] \">\r\n                                                {{row.commission}}\r\n                                            </div>\r\n                                            <div *ngIf=\"row.commission != null || row.commission != [] \">\r\n                                                0.00\r\n                                            </div>\r\n                                        </ng-template>\r\n                                    </ngx-datatable-column>\r\n                                    <ngx-datatable-column name=\"Sale Amount\">\r\n                                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                                {{row.amount |number : '1.2-2'}}         \r\n                                        </ng-template>\r\n                                    </ngx-datatable-column>\r\n                                    <ngx-datatable-column name=\"Tax\">\r\n                                        <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                                            <div *ngIf=\"row.tax != null || row.tax != [] \">\r\n                                                {{row.tax}}\r\n                                            </div>\r\n                                            <div *ngIf=\"(row.tax == null || row.tax == []) \">\r\n                                                ---\r\n                                            </div>\r\n                                        </ng-template>\r\n                                    </ngx-datatable-column>\r\n                                    <ngx-datatable-column name=\"Booking Status\">\r\n                                        <ng-template let-value=\"value\" let-row=\"row\" ngx-datatable-cell-template>\r\n                                            <div class=\"recConfirm {{row.booking_status |lowercase}}\">{{row.booking_status}}</div>\r\n                                        </ng-template>\r\n                                    </ngx-datatable-column>\r\n                                    <ngx-datatable-column name=\"Booked Date\" prop=\"created\">\r\n                                        <ng-template ngx-datatable-cell-template let-value=\"value\">{{value | date: 'dd/MM/yyyy'}}\r\n                                        </ng-template>\r\n                                    </ngx-datatable-column>\r\n                                </ngx-datatable>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <jw-modal id=\"custom-modal-booking\" class=\"report-booking-modal\">\r\n        <div class=\"ui\" *ngIf=\"showDetailModal\">\r\n            <div class=\"header\">\r\n            </div>\r\n            <div class=\"ui fluid container\">\r\n                <div class=\"form-inner\">\r\n                    <h4 class=\"ui  header\"><span class=\"basic-header head\">BOOKING INFORMATIONS</span></h4>\r\n                    <i class=\"close icon\" (click)=\"closeModal('custom-modal-booking');\"></i>\r\n                </div>\r\n                <!-- <div class=\"field\">\r\n                    <hr>\r\n                </div> -->\r\n                <div class=\"form-inner\">\r\n                    <div class=\"field\">\r\n                        <table class=\"ui celled table\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Trip ID</th>\r\n                                    <th>Ticket Number</th>\r\n                                    <th>Lead Name</th>\r\n                                    <th>Departure Airport</th>\r\n                                    <th>Arrival Airport</th>\r\n                                    <th>Service Name</th>\r\n                                    <th>Departure Date</th>\r\n                                    <th>Arrival Date</th>\r\n                                    <th>Board Type</th>\r\n                                    <th>Staff/User</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let data of newFilteredData;\">\r\n                                    <td>\r\n                                        <span *ngIf=\"data.trip_id\">{{data.trip_id}}</span>\r\n                                        <span *ngIf=\"!data.trip_id\">---</span>\r\n                                    </td>\r\n                                    <td>\r\n                                        <span *ngIf=\"data.ticket_number\">{{data.ticket_number}}</span>\r\n                                        <span *ngIf=\"!data.ticket_number\">---</span>\r\n                                    </td>\r\n                                    <td>\r\n                                        <span *ngIf=\"getInfo.passenger_detail\">\r\n                      {{getInfo.passenger_detail.pax_first_name + ' ' + getInfo.passenger_detail.pax_middle_name + ' ' + getInfo.passenger_detail.pax_last_name}}\r\n                    </span>\r\n                                        <span *ngIf=\"!getInfo.passenger_detail\">---</span>\r\n                                    </td>\r\n                                    <td>\r\n                                        <span *ngIf=\"getInfo.trip_detail.trip_departure_airport_name!=null;else departure\">\r\n                      {{getInfo.trip_detail.trip_departure_airport_name}}\r\n                    </span>\r\n                                        <ng-template #departure>\r\n                                            no data\r\n                                        </ng-template>\r\n                                    </td>\r\n                                    <td>\r\n                                        <span *ngIf=\"getInfo.trip_detail.trip_arrival_airport_name!=null;else arrival\">\r\n                      {{getInfo.trip_detail.trip_arrival_airport_name}}\r\n                    </span>\r\n                                        <ng-template #arrival>\r\n                                            no data\r\n                                        </ng-template>\r\n                                    </td>\r\n                                    <td>\r\n                                        {{data.service_name}}\r\n                                    </td>\r\n                                    <td>\r\n                                        <span *ngIf=\"getInfo.trip_detail.trip_departure_date!=null;else departure\">\r\n                      {{getInfo.trip_detail.trip_departure_date}}\r\n                    </span>\r\n                                    </td>\r\n                                    <td>\r\n                                        <span *ngIf=\"getInfo.trip_detail.trip_arrival_date!=null;else arrival\">\r\n                      {{getInfo.trip_detail.trip_arrival_date}}\r\n                    </span>\r\n                                    </td>\r\n                                    <td>\r\n                                        <span *ngIf=\"data.trip_detail\">  {{getInfo.trip_detail.segment_detail.segment_seatingClass}}</span>\r\n                                        <span *ngIf=\"!data.trip_detail\">---</span>\r\n                                    </td>\r\n                                    <td>\r\n                                        <span *ngIf=\"getInfo.user!=null ;else departure\">\r\n                      {{getInfo.user.username}}</span>\r\n                                    </td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <h4 class=\"ui  header\" *ngIf=\"showEMDtable\"><span class=\"basic-header head\">EMD INFORMATIONS</span>\r\n                        </h4>\r\n                        <h4 class=\"ui  header\" *ngIf=\"!showEMDtable\"><span class=\"basic-header\">NOT AVAILABLE EMD\r\n                INFORMATIONS</span>\r\n                        </h4>\r\n                        <table class=\"ui celled table\" *ngIf=\"showEMDtable\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>EMD NUMBER</th>\r\n                                    <th>REASON FOR INSURANCE SUBCODE</th>\r\n                                    <th>REMARKS</th>\r\n                                    <th>AMOUNT</th>\r\n                                    <th>CODE</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let emdDetail of emdDetails\">\r\n                                    <td>{{emdDetail.emd_number}}</td>\r\n                                    <td>{{emdDetail.reason_for_issuance_subcode}}</td>\r\n                                    <td>{{emdDetail.remarks}}</td>\r\n                                    <td>{{emdDetail.amount}}</td>\r\n                                    <td>{{emdDetail.code}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </jw-modal>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/layout/report/booking-report/booking-report-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/layout/report/booking-report/booking-report-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: BookingReportRoutingModule */

  /***/
  function srcAppLayoutReportBookingReportBookingReportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingReportRoutingModule", function () {
      return BookingReportRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _booking_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./booking-report.component */
    "./src/app/layout/report/booking-report/booking-report.component.ts");
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
      component: _booking_report_component__WEBPACK_IMPORTED_MODULE_1__["BookingReportComponent"]
    }];

    var BookingReportRoutingModule = function BookingReportRoutingModule() {
      _classCallCheck(this, BookingReportRoutingModule);
    };

    BookingReportRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], BookingReportRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/report/booking-report/booking-report.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/layout/report/booking-report/booking-report.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutReportBookingReportBookingReportComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bookings_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n.bookings_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n.bookings_pickers .input .icon {\n  opacity: 1;\n  z-index: 1;\n}\n.bookings_pickers .input .icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n.bookings_pickers .input .icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n.bookings_pickers .input .search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.bookings_pickers .input .search.dropdown .search {\n  margin-left: 42px !important;\n}\n.bookings_pickers .input .search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n.ui.top.attached.tabular.menu {\n  margin: 24px 0px;\n}\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n.booking-report-header {\n  position: relative;\n  left: 32%;\n  color: #0000007a;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 200;\n}\n.outer-form.booking {\n  margin-top: 40px;\n}\n.recConfirm {\n  height: 18px;\n  width: 62px;\n  margin: 0;\n  background-color: #72D44F;\n  color: white;\n  font-size: 11px;\n  text-align: center;\n  line-height: 18px;\n  border-radius: 12px;\n}\n.recConfirm.hold {\n  background-color: #dec66b;\n}\n.recConfirm.void {\n  background-color: #797979;\n}\n.recConfirm.cancel {\n  background-color: #b13838;\n}\n.recConfirm.refund {\n  background-color: #3867B1;\n}\n.recConfirm.failed {\n  background-color: #b13838;\n}\n.b2c-list-user-table__segment-loader {\n  height: 450px;\n  background-color: white !important;\n  border: 0;\n  box-shadow: none;\n}\n.b2c-list-user-table__segment-loader .ui.inverted.dimmer {\n  background-color: transparent !important;\n}\n.b2c-list-user-table__segment-loader .eye-icon {\n  font-size: 12px;\n  color: #3867b1;\n}\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n.bookings_btn-panel {\n  padding: 20px 2px;\n}\n.eight.field.bookings_btn-panel {\n  padding: 0px;\n  text-align: right;\n}\n.agent-name-booking {\n  margin: auto 24px !important;\n}\n.agent-name-booking .eight.wide.field {\n  padding: 0px;\n}\n.agent-name-booking .eight.wide.field button {\n  margin-right: 0px;\n}\n.five.wide.field, .six.wide.field {\n  padding-bottom: 16px;\n}\n.ui.attached.segment.tabContent-block .ui.segment .report-form {\n  background: #fff;\n  padding: 0px;\n  margin: 24px;\n  border-radius: 4.96141px;\n}\n.ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child {\n  margin-bottom: 0px;\n}\n.ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child .five.wide.field {\n  padding-bottom: 0px;\n}\n.bookings_btn-panel button {\n  margin: 0px 6px;\n}\n@media (max-width: 1030px) {\n  .ui.form .last-field {\n    display: block;\n  }\n  .ui.form .last-field .bookings_pickers {\n    display: inline-block;\n  }\n  .ui.form .last-field .btn-wrapper {\n    width: 100% !important;\n    display: block;\n    text-align: right;\n  }\n}\n@media (max-width: 1030px) and (min-width: 768px) {\n  .ui.form .last-field .bookings_pickers {\n    width: 50% !important;\n  }\n}\n@media (max-width: 800px) {\n  .ui.top.attached.tabular.menu {\n    display: block;\n  }\n  .ui.top.attached.tabular.menu .item {\n    padding: 12px 0px;\n  }\n}\n@media (max-width: 767px) {\n  .ui.attached.segment.tabContent-block .ui.segment .report-form {\n    margin: 0px;\n  }\n}\n@media (max-width: 480px) {\n  .ui.attached.segment.tabContent-block .ui.segment .report-form {\n    margin: 0px;\n    padding: 16px;\n  }\n}\n@media (max-width: 320px) {\n  .ui.form .fields .btn-wrapper .bookings_btn-panel {\n    padding: 20px 0px;\n  }\n  .ui.form .fields .btn-wrapper .bookings_btn-panel .primary.button {\n    margin-right: 0px;\n  }\n  .ui.form .fields .btn-wrapper .bookings_btn-panel .reset.button {\n    min-width: 54px !important;\n    margin-bottom: 12px;\n    margin-right: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3JlcG9ydC9ib29raW5nLXJlcG9ydC9FOlxcQmVsYWxcXHByb2plY3RzXFxwcm9kdWN0aW9uLWJ1aWxkXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHJlcG9ydFxcYm9va2luZy1yZXBvcnRcXGJvb2tpbmctcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcmVwb3J0L2Jvb2tpbmctcmVwb3J0L2Jvb2tpbmctcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0FSO0FERUk7RUFDSSx3QkFBQTtFQUNBLDBDQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQ0FSO0FERUk7RUFDSSxVQUFBO0VBQ0EsVUFBQTtBQ0FSO0FEQ1E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0NaO0FEQVk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNFaEI7QURFSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQ0FSO0FEQ1E7RUFDSSw0QkFBQTtBQ0NaO0FEQ1E7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtBQ0NaO0FEZ0JBO0VBQ0ksNENBQUE7QUNiSjtBRGdCQTtFQUNJLGdCQUFBO0FDYko7QURzQkE7RUFDSSxrQ0FBQTtFQUNBLHdDQUFBO0FDbkJKO0FEc0JBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FDbkJKO0FEc0JBO0VBQ0ksZ0JBQUE7QUNuQko7QURzQkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDbkJKO0FEb0JJO0VBQ0kseUJBQUE7QUNsQlI7QURvQkk7RUFDSSx5QkFBQTtBQ2xCUjtBRG9CSTtFQUNJLHlCQUFBO0FDbEJSO0FEb0JJO0VBQ0kseUJBQUE7QUNsQlI7QURvQkk7RUFDSSx5QkFBQTtBQ2xCUjtBRHNCQTtFQUNJLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ25CSjtBRG9CSTtFQUNJLHdDQUFBO0FDbEJSO0FEb0JJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNsQlI7QURzQkE7RUFDSSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNuQko7QURzQkE7RUFDSSxpQkFBQTtBQ25CSjtBRHNCQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ25CSjtBRHNCQTtFQUNJLDRCQUFBO0FDbkJKO0FEb0JJO0VBQ0ksWUFBQTtBQ2xCUjtBRG1CUTtFQUNJLGlCQUFBO0FDakJaO0FEc0JBO0VBQ0Usb0JBQUE7QUNuQkY7QURzQkE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsd0JBQUE7QUNwQko7QURxQkk7RUFDSSxrQkFBQTtBQ25CUjtBRG9CUTtFQUNJLG1CQUFBO0FDbEJaO0FEd0JJO0VBQ0ksZUFBQTtBQ3JCUjtBRHlCQTtFQUVRO0lBQ0ksY0FBQTtFQ3ZCVjtFRHdCVTtJQUNJLHFCQUFBO0VDdEJkO0VEd0JVO0lBQ0ksc0JBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUN0QmQ7QUFDRjtBRDJCQTtFQUdZO0lBQ0cscUJBQUE7RUMzQmI7QUFDRjtBRGdDQTtFQUNJO0lBQ0ksY0FBQTtFQzlCTjtFRCtCTTtJQUNJLGlCQUFBO0VDN0JWO0FBQ0Y7QURxQ0E7RUFDSTtJQUNJLFdBQUE7RUNuQ047QUFDRjtBRHNDQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGFBQUE7RUNwQ047QUFDRjtBRHVDQTtFQUlnQjtJQUNJLGlCQUFBO0VDeENsQjtFRHlDa0I7SUFDSSxpQkFBQTtFQ3ZDdEI7RUR5Q2tCO0lBQ0ksMEJBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0VDdkN0QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3JlcG9ydC9ib29raW5nLXJlcG9ydC9ib29raW5nLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib29raW5nc19waWNrZXJzIC5pbnB1dCB7XHJcbiAgICAmLmJvb2tpbmdzX2RhdGVwaWNrZXIge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMzhweFxyXG4gICAgfVxyXG4gICAgLnVpLmJhc2ljLmZsb2F0aW5nLmJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE1MiwgMTUyLCAxNTIsIDAuNikgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgICB9XHJcbiAgICAuaWNvbiB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgICAgICYuY2FsIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zZWFyY2guZHJvcGRvd24ge1xyXG4gICAgICAgIHdpZHRoOiAyMThweDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQycHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlZmF1bHQudGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAwIDAgMzhweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gLnVzZXItdGFibGUtbGlzdC5iMmMtbGlzdC11c2VyLXRhYmxlIHtcclxuLy8gICAgIG1hcmdpbi10b3A6IDQ2cHg7XHJcbi8vIH1cclxuXHJcbi8vIC5hZ2VudC1uYW1lLWJvb2tpbmcge1xyXG4gICAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gbGVmdDogNDIlO1xyXG4gICAgLy8gcmlnaHQ6IDBweDtcclxuICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuLy8gfVxyXG5cclxuLnRhYi5zZWdtZW50IHtcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XHJcbiAgICBtYXJnaW46IDI0cHggMHB4O1xyXG59XHJcblxyXG4vLyAudWkuYm90dG9tLmF0dGFjaGVkLmFjdGl2ZS50YWIuc2VnbWVudCB7XHJcbi8vICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxN3B4O1xyXG4vLyAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbi8vICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTdweDtcclxuLy8gfVxyXG5cclxuLnVpLnRvcC5hdHRhY2hlZC5tZW51Pi5pdGVtIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yODU3MTQyOXJlbSAwIDAgMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib29raW5nLXJlcG9ydC1oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMzIlO1xyXG4gICAgY29sb3I6ICMwMDAwMDA3YTtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuXHJcbi5vdXRlci1mb3JtLmJvb2tpbmcge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLnJlY0NvbmZpcm0ge1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgd2lkdGg6IDYycHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzJENDRGO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgJi5ob2xkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVjNjZiO1xyXG4gICAgfVxyXG4gICAgJi52b2lkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk3OTc5O1xyXG4gICAgfVxyXG4gICAgJi5jYW5jZWwge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiMTM4Mzg7XHJcbiAgICB9XHJcbiAgICAmLnJlZnVuZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcclxuICAgIH1cclxuICAgICYuZmFpbGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjEzODM4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYjJjLWxpc3QtdXNlci10YWJsZV9fc2VnbWVudC1sb2FkZXIge1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgLnVpLmludmVydGVkLmRpbW1lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5leWUtaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMzg2N2IxO1xyXG4gICAgfVxyXG59XHJcblxyXG4udWkuZm9ybSAuZmllbGQ+bGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgY29sb3I6ICMxODFCMjA7XHJcbiAgICBtYXJnaW46IDBweCAwcHggOHB4O1xyXG59XHJcblxyXG4uYm9va2luZ3NfYnRuLXBhbmVsIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMnB4O1xyXG59XHJcblxyXG4uZWlnaHQuZmllbGQuYm9va2luZ3NfYnRuLXBhbmVsIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYWdlbnQtbmFtZS1ib29raW5nIHtcclxuICAgIG1hcmdpbjogYXV0byAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAuZWlnaHQud2lkZS5maWVsZCB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZpdmUud2lkZS5maWVsZCwgLnNpeC53aWRlLmZpZWxkIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLnVpLmF0dGFjaGVkLnNlZ21lbnQudGFiQ29udGVudC1ibG9jayAudWkuc2VnbWVudCAucmVwb3J0LWZvcm0ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIG1hcmdpbjogMjRweDtcclxuICAgIC8vIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoNiwgNDAsIDk4LCAwLjEpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0Ljk2MTQxcHg7XHJcbiAgICAuZmllbGRzOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAuZml2ZS53aWRlLmZpZWxkIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ib29raW5nc19idG4tcGFuZWwge1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDBweCA2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDMwcHgpIHtcclxuICAgIC51aS5mb3JtIHtcclxuICAgICAgICAubGFzdC1maWVsZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAuYm9va2luZ3NfcGlja2VycyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ0bi13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAzMHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC51aS5mb3JtIHtcclxuICAgICAgICAubGFzdC1maWVsZCB7XHJcbiAgICAgICAgICAgIC5ib29raW5nc19waWNrZXJzIHtcclxuICAgICAgICAgICAgICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAgIC51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAuaXRlbSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMHB4O1xyXG4gICAgICAgICAgICAvLyB3aWR0aDogOTQlO1xyXG4gICAgICAgICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAudWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXBvcnQtZm9ybSB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLnVpLmF0dGFjaGVkLnNlZ21lbnQudGFiQ29udGVudC1ibG9jayAudWkuc2VnbWVudCAucmVwb3J0LWZvcm0ge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAgLnVpLmZvcm0ge1xyXG4gICAgICAgIC5maWVsZHMge1xyXG4gICAgICAgICAgICAuYnRuLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgLmJvb2tpbmdzX2J0bi1wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLnByaW1hcnkuYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXNldC5idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDU0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0LmJvb2tpbmdzX2RhdGVwaWNrZXIge1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBtYXgtd2lkdGg6IDEzOHB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC51aS5iYXNpYy5mbG9hdGluZy5idXR0b24ge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiByZ2JhKDE1MiwgMTUyLCAxNTIsIDAuNikgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTFweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuaWNvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDE7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcbiAgd2lkdGg6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsIHtcbiAgd2lkdGg6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnNlYXJjaC5kcm9wZG93biB7XG4gIHdpZHRoOiAyMThweDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuc2VhcmNoLmRyb3Bkb3duIC5zZWFyY2gge1xuICBtYXJnaW4tbGVmdDogNDJweCAhaW1wb3J0YW50O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5zZWFyY2guZHJvcGRvd24gLmRlZmF1bHQudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDhweCAwIDAgMzhweCAhaW1wb3J0YW50O1xufVxuXG4udGFiLnNlZ21lbnQge1xuICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xuICBtYXJnaW46IDI0cHggMHB4O1xufVxuXG4udWkudG9wLmF0dGFjaGVkLm1lbnUgPiAuaXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjg1NzE0MjlyZW0gMCAwIDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib29raW5nLXJlcG9ydC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDMyJTtcbiAgY29sb3I6ICMwMDAwMDA3YTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi5vdXRlci1mb3JtLmJvb2tpbmcge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4ucmVjQ29uZmlybSB7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDYycHg7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcyRDQ0RjtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDExcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG4ucmVjQ29uZmlybS5ob2xkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RlYzY2Yjtcbn1cbi5yZWNDb25maXJtLnZvaWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk3OTc5O1xufVxuLnJlY0NvbmZpcm0uY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IxMzgzODtcbn1cbi5yZWNDb25maXJtLnJlZnVuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XG59XG4ucmVjQ29uZmlybS5mYWlsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjEzODM4O1xufVxuXG4uYjJjLWxpc3QtdXNlci10YWJsZV9fc2VnbWVudC1sb2FkZXIge1xuICBoZWlnaHQ6IDQ1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uYjJjLWxpc3QtdXNlci10YWJsZV9fc2VnbWVudC1sb2FkZXIgLnVpLmludmVydGVkLmRpbW1lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4uYjJjLWxpc3QtdXNlci10YWJsZV9fc2VnbWVudC1sb2FkZXIgLmV5ZS1pY29uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzM4NjdiMTtcbn1cblxuLnVpLmZvcm0gLmZpZWxkID4gbGFiZWwge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBjb2xvcjogIzE4MUIyMDtcbiAgbWFyZ2luOiAwcHggMHB4IDhweDtcbn1cblxuLmJvb2tpbmdzX2J0bi1wYW5lbCB7XG4gIHBhZGRpbmc6IDIwcHggMnB4O1xufVxuXG4uZWlnaHQuZmllbGQuYm9va2luZ3NfYnRuLXBhbmVsIHtcbiAgcGFkZGluZzogMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmFnZW50LW5hbWUtYm9va2luZyB7XG4gIG1hcmdpbjogYXV0byAyNHB4ICFpbXBvcnRhbnQ7XG59XG4uYWdlbnQtbmFtZS1ib29raW5nIC5laWdodC53aWRlLmZpZWxkIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLmFnZW50LW5hbWUtYm9va2luZyAuZWlnaHQud2lkZS5maWVsZCBidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmZpdmUud2lkZS5maWVsZCwgLnNpeC53aWRlLmZpZWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5cbi51aS5hdHRhY2hlZC5zZWdtZW50LnRhYkNvbnRlbnQtYmxvY2sgLnVpLnNlZ21lbnQgLnJlcG9ydC1mb3JtIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDQuOTYxNDFweDtcbn1cbi51aS5hdHRhY2hlZC5zZWdtZW50LnRhYkNvbnRlbnQtYmxvY2sgLnVpLnNlZ21lbnQgLnJlcG9ydC1mb3JtIC5maWVsZHM6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi51aS5hdHRhY2hlZC5zZWdtZW50LnRhYkNvbnRlbnQtYmxvY2sgLnVpLnNlZ21lbnQgLnJlcG9ydC1mb3JtIC5maWVsZHM6bGFzdC1jaGlsZCAuZml2ZS53aWRlLmZpZWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLmJvb2tpbmdzX2J0bi1wYW5lbCBidXR0b24ge1xuICBtYXJnaW46IDBweCA2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDMwcHgpIHtcbiAgLnVpLmZvcm0gLmxhc3QtZmllbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC51aS5mb3JtIC5sYXN0LWZpZWxkIC5ib29raW5nc19waWNrZXJzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLnVpLmZvcm0gLmxhc3QtZmllbGQgLmJ0bi13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAzMHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnVpLmZvcm0gLmxhc3QtZmllbGQgLmJvb2tpbmdzX3BpY2tlcnMge1xuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAudWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSAuaXRlbSB7XG4gICAgcGFkZGluZzogMTJweCAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAudWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXBvcnQtZm9ybSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAudWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXBvcnQtZm9ybSB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC51aS5mb3JtIC5maWVsZHMgLmJ0bi13cmFwcGVyIC5ib29raW5nc19idG4tcGFuZWwge1xuICAgIHBhZGRpbmc6IDIwcHggMHB4O1xuICB9XG4gIC51aS5mb3JtIC5maWVsZHMgLmJ0bi13cmFwcGVyIC5ib29raW5nc19idG4tcGFuZWwgLnByaW1hcnkuYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgfVxuICAudWkuZm9ybSAuZmllbGRzIC5idG4td3JhcHBlciAuYm9va2luZ3NfYnRuLXBhbmVsIC5yZXNldC5idXR0b24ge1xuICAgIG1pbi13aWR0aDogNTRweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/report/booking-report/booking-report.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/layout/report/booking-report/booking-report.component.ts ***!
    \**************************************************************************/

  /*! exports provided: BookingReportComponent */

  /***/
  function srcAppLayoutReportBookingReportBookingReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingReportComponent", function () {
      return BookingReportComponent;
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


    var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../_modal */
    "./src/app/layout/_modal/index.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/excel.service */
    "./src/app/shared/services/excel.service.ts");

    var BookingReportComponent = /*#__PURE__*/function () {
      function BookingReportComponent(fb, ReportService, modalService, toastr, excelService) {
        var _this = this;

        _classCallCheck(this, BookingReportComponent);

        this.fb = fb;
        this.ReportService = ReportService;
        this.modalService = modalService;
        this.toastr = toastr;
        this.excelService = excelService;
        this.agents = [];
        this.products = [];
        this.suppliers = [];
        this.newBookingReportObj = {};
        this.showDynamicReport = false;
        this.disable = true;
        this.dropdownSettings = {};
        this.FilteredBookingReport = [];
        this.allBookings = [];
        this.reports = [];
        this.newFilteredData = [];
        this.tickets = [];
        this.supplierNames = [];
        this.emdDetails = [];
        this.submitted = false;
        this.showDetailModal = false;
        this.bookingsLoader = false;
        this.bookingReportForm = this.fb.group({
          selectAgent: [''],
          selectProduct: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          selectSupplier: [''],
          bookingStartDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          bookingEndDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });

        this.viewReport = function () {
          _this.bookingsLoader = true;
          _this.submitted = true;

          if (_this.bookingReportForm.invalid) {
            _this.bookingsLoader = false;
            return;
          }

          _this.showDynamicReport = true;
          _this.newBookingReportObj.agent_codes = _this.bookingReportForm.get('selectAgent').value;
          _this.newBookingReportObj.product = _this.bookingReportForm.get('selectProduct').value;
          _this.newBookingReportObj.supplier_id = _this.bookingReportForm.get('selectSupplier').value;
          _this.newBookingReportObj.start_date = _this.bookingReportForm.get('bookingStartDate').value;
          _this.newBookingReportObj.end_date = _this.bookingReportForm.get('bookingEndDate').value;

          _this.ReportService.searchReportBooking(_this.newBookingReportObj).subscribe(function (results) {
            if (results.type == 'data') {
              _this.bookingsLoader = false;

              if (results.Data.length != 0) {
                _this.allBookings = results.Data;
              } else {
                _this.bookingsLoader = false;

                _this.toastr.info("Sorry!!", "There is no data available to display", {
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

        this.resetReport = function () {
          _this.bookingReportForm.reset();

          $(".ui.dropdown").dropdown("clear");
          _this.showDynamicReport = false;
          _this.bookingsLoader = false;
        }; // Multiple selection 


        this.dropdownSettings = {
          singleSelection: false,
          idField: 'sub_code',
          textField: 'commercial_name',
          selectAllText: 'Select All',
          unSelectAllText: 'UnSelect All',
          itemsShowLimit: 3,
          allowSearchFilter: true
        };
      } // convenience getter for easy access to form fields


      _createClass(BookingReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fetchAllAgents();
          this.fetchAllProducts();
          this.fetchAllSuppliers();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          $(document).ready(function () {
            $('.menu .item').tab();
            $('.ui.dropdown').dropdown();
            $('.dropdownOne').dropdown({
              placeholder: 'Choose agents'
            });
          });
          this.loadEndDate();
          this.loadStartDate();
        }
      }, {
        key: "loadStartDate",
        value: function loadStartDate() {
          var scope = this;
          $(function () {
            $('input[name="bookingStartDate"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1980,
              startDate: moment(),
              maxDate: moment(),
              autoUpdateInput: false
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.bookingReportForm.get('bookingStartDate').setValue(moment(start).format('YYYY-MM-DD'));
            });
          });
        }
      }, {
        key: "loadEndDate",
        value: function loadEndDate() {
          var scope = this;
          $(function () {
            $('input[name="bookingEndDate"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1901,
              startDate: moment(),
              // minDate: moment(),
              autoUpdateInput: false
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.bookingReportForm.get('bookingEndDate').setValue(moment(start).format('YYYY-MM-DD'));
            });
          });
        }
      }, {
        key: "fetchAllAgents",
        value: function fetchAllAgents() {
          var _this2 = this;

          this.bookingsLoader = true;
          this.ReportService.GetAllAgents().subscribe(function (res) {
            if (res.type != 'error') {
              if (res.Organization.length != 0) {
                _this2.agents = res.Organization;
                _this2.bookingsLoader = false;
              } else {
                _this2.bookingsLoader = false;

                _this2.toastr.info("There is no agents available", "", {
                  timeOut: 1000,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });
              }
            } else {
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
        value: function fetchAllProducts() {
          var _this3 = this;

          this.bookingsLoader = true;
          this.ReportService.GetAllProducts().subscribe(function (res) {
            if (res.type != 'error') {
              _this3.bookingsLoader = false;

              if (res.Data.length != 0) {
                var dataoutput = res.Data;
                var keys = Object.keys(res.Data);

                for (var i = 0; i < keys.length; i++) {
                  var key = keys[i];
                  if (dataoutput[key] == 1) _this3.products.push(key);
                }
              } else {
                _this3.bookingsLoader = false;

                _this3.toastr.info("There is no products available ", "", {
                  timeOut: 1000,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });
              }
            } else {
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
          this.ReportService.GetAllSuppliers().subscribe(function (res) {
            if (res.status) {
              _this4.bookingsLoader = false;

              if (res.result.length != 0) {
                _this4.suppliers = res.result.filter(function (data) {
                  return data.name !== "";
                });
                _this4.suppliers = res.result;
              } else {
                _this4.bookingsLoader = false;

                _this4.toastr.info("There is no suppliers", "", {
                  timeOut: 1000,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });
              }
            } else {
              _this4.toastr.error("".concat(res.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "getBookingRefereceDetails",
        value: function getBookingRefereceDetails(valObj, modalId) {
          var _this5 = this;

          this.ReportService.getFlightBookingDetails(valObj.trip_id).subscribe(function (result) {
            if (result.type != 'error') {
              _this5.getInfo = result;
              _this5.newFilteredData = result.bookings_flights;

              if (_this5.newFilteredData.length) {
                _this5.newFilteredData.map(function (filterdEle, key) {
                  if (result.bookings_flights[key] != null) {
                    filterdEle.service_name = result.bookings_flights[key].supplier.name;
                    filterdEle.trip_id = result.trip_id;

                    if (result.bookings_flights[key].flight_tickets[key] != null) {
                      filterdEle.ticket_number = result.bookings_flights[key].flight_tickets[key].ticket_number;
                    }
                  }
                });
              }

              _this5.showDetailModal = true;

              _this5.modalService.open(modalId);
            } else {
              _this5.toastr.error("".concat(result.msg), "".concat(result.msg), {
                timeOut: 10000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "closeModal",
        value: function closeModal(id) {
          this.modalService.close(id);
        }
      }, {
        key: "exportData",
        value: function exportData() {
          var _this6 = this;

          console.log(this.newBookingReportObj);
          this.ReportService.exportBooking(this.newBookingReportObj).subscribe(function (result) {
            if (result.type != 'error') {
              _this6.excelService.exportAsExcelFile(result.data, 'bookings');
            } else {
              _this6.toastr.error("".concat(result.msg), "".concat(result.msg), {
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
          return this.bookingReportForm.controls;
        }
      }]);

      return BookingReportComponent;
    }();

    BookingReportComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"]
      }, {
        type: _modal__WEBPACK_IMPORTED_MODULE_4__["ModalService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_6__["ExcelService"]
      }];
    };

    BookingReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-booking-report',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./booking-report.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/booking-report/booking-report.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./booking-report.component.scss */
      "./src/app/layout/report/booking-report/booking-report.component.scss"))["default"]]
    })], BookingReportComponent);
    /***/
  },

  /***/
  "./src/app/layout/report/booking-report/booking-report.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/layout/report/booking-report/booking-report.module.ts ***!
    \***********************************************************************/

  /*! exports provided: BookingReportModule */

  /***/
  function srcAppLayoutReportBookingReportBookingReportModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingReportModule", function () {
      return BookingReportModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _booking_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./booking-report.component */
    "./src/app/layout/report/booking-report/booking-report.component.ts");
    /* harmony import */


    var src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/report/report.service */
    "./src/app/shared/services/report/report.service.ts");
    /* harmony import */


    var _booking_report_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./booking-report-routing.module */
    "./src/app/layout/report/booking-report/booking-report-routing.module.ts");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var _modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../_modal */
    "./src/app/layout/_modal/index.ts");
    /* harmony import */


    var src_app_access_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/access.module */
    "./src/app/access.module.ts");
    /* harmony import */


    var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/services/excel.service */
    "./src/app/shared/services/excel.service.ts");

    var BookingReportModule = /*#__PURE__*/function () {
      function BookingReportModule(reportService) {
        _classCallCheck(this, BookingReportModule);

        this.reportService = reportService;
      }

      _createClass(BookingReportModule, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BookingReportModule;
    }();

    BookingReportModule.ctorParameters = function () {
      return [{
        type: src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_5__["ReportService"]
      }];
    };

    BookingReportModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_booking_report_component__WEBPACK_IMPORTED_MODULE_4__["BookingReportComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_7__["NgxDatatableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _booking_report_routing_module__WEBPACK_IMPORTED_MODULE_6__["BookingReportRoutingModule"], _modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"], src_app_access_module__WEBPACK_IMPORTED_MODULE_9__["ApplicationAccess"]],
      providers: [src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_10__["ExcelService"]]
    })], BookingReportModule);
    /***/
  }
}]);
//# sourceMappingURL=booking-report-booking-report-module-es5.js.map