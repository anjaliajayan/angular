function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["audit-report-audit-report-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/audit-report/audit-report.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/audit-report/audit-report.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutReportAuditReportAuditReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui top attached tabular menu \">\r\n  <div class=\"item\" data-tab=\"first\" routerLink=\"/report/booking-report\">\r\n    Booking\r\n  </div>\r\n  <div class=\"item\" data-tab=\"second\" routerLink=\"/report/segment-report\">Segment</div>\r\n  <div class=\"item\" data-tab=\"third\" routerLink=\"/report/mis-report\">MIS</div>\r\n  <div class=\"item\" data-tab=\"fourth\" routerLink=\"/report/search-log-report\">Search Log</div>\r\n  <div class=\"item active\" data-tab=\"fifth\" routerLink=\"/report/audit-report\">Audit Trail Log</div>\r\n  <div class=\"item\" data-tab=\"sixth\" routerLink=\"/report/ticket-report\">Ticket</div>\r\n  <div class=\"item\" data-tab=\"seventh\" routerLink=\"/report/dynamic-report\">Dynamic Report</div>\r\n</div>\r\n<div class=\"ui bottom attached tab segment tabContent-block active\" data-tab=\"fifth\">\r\n  <div class=\"ui segment\">\r\n    <div class=\"ui fluid container\">\r\n      <div class=\"outer-basics\">\r\n        <form #Form=\"ngForm\" [formGroup]=\"auditTrailForm\" (ngSubmit)=\"auditReportView()\" class=\"ui form report-form\">\r\n          <div class=\"field\">\r\n            <div class=\"outer-basicForm\">\r\n              <div class=\"form-inner\">\r\n                <div class=\"fields\">\r\n                  <!-- <div class=\"one wide field\"></div> -->\r\n                  <div class=\"five wide field\">\r\n                    <label>Platform</label>\r\n                    <select class=\"ui fluid search dropdown\" formControlName=\"selectPlatform\">\r\n                      <option value=\"\">Platform</option>\r\n                      <option value=\"\">Platform</option>\r\n                      <option class=\"item\" *ngFor=\"let platform of platforms\" value=\"{{platform}}\">{{platform}}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"five wide field\">\r\n                    <label>Module</label>\r\n                    <select class=\"ui fluid search dropdown\" formControlName=\"selectModule\">\r\n                      <option value=\"\">Module</option>\r\n                      <option class=\"item\" *ngFor=\"let module of modules\" value=\"{{module}}\">{{module}}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"six wide field\">\r\n                    <label>Events</label>\r\n                    <select class=\"ui fluid search dropdown\" formControlName=\"selectEvent\">\r\n                      <option value=\"\">Events</option>\r\n                      <option class=\"item\" *ngFor=\"let event of events\" value=\"{{event}}\">{{event}}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"fields last-field\">\r\n                  <!-- <div class=\"one wide field\"></div> -->\r\n                  <div class=\"five wide field bookings_pickers\"\r\n                    [ngClass]=\"{'error': ((submitted && f.auditStartDate.errors) && f.auditStartDate.errors.required) }\">\r\n                    <label>Start Date<span class=\"mandatory\">*</span></label>\r\n                    <div class=\"ui left icon input\">\r\n                      <input type=\"text\" placeholder=\"Start Date\" formControlName=\"auditStartDate\" name=\"auditStartDate\"\r\n                        value=\"\" required />\r\n                      <i class=\"icon\">\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"five wide field bookings_pickers\"\r\n                    [ngClass]=\"{'error': ((submitted && f.auditEndDate.errors) && f.auditEndDate.errors.required) }\">\r\n                    <label>End Date<span class=\"mandatory\">*</span></label>\r\n                    <div class=\"ui left icon input\">\r\n                      <input type=\"text\" placeholder=\"End Date\" formControlName=\"auditEndDate\" name=\"auditEndDate\"\r\n                        value=\"\" required />\r\n                      <i class=\"icon\">\r\n                        <i class=\"fa fa-calendar-o bookings_input__placeholder-icon cal\" aria-hidden=\"true\"></i>\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"six wide field btn-wrapper\">\r\n                    <div class=\"bookings_btn-panel\">\r\n                      <button class=\"ui primary reset button\" (click)=\"reset()\" title=\"Reset\">\r\n                        <i class=\"undo icon\"></i>\r\n                      </button>\r\n                      <button class=\"ui primary  button\">\r\n                        Search\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <div class=\"fields agent-name-booking\" *ngIf=\"showAuditReportTable\">\r\n          <div class=\"eight wide field ui small header\">Audit Log</div>\r\n          <!-- <div class=\"ui divider\"></div> -->\r\n          <!-- <div class=\"eight wide field bookings_btn-panel\">\r\n            <button class=\"ui export button\" title=\"Export\">\r\n              Export\r\n            </button>\r\n          </div> -->\r\n        </div>\r\n        <div class=\"result-block\" *ngIf=\"showAuditReportTable\">\r\n          <div class=\"user-table-list b2c-list-user-table\" *ngIf=\"showAuditReportTable\">\r\n            <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n              [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='NewAuditTrail' [sortType]=\"'multi'\" [reorderable]=\"true\"\r\n              [sorts]=\"[{prop: 'created_at', dir: 'desc'}]\">\r\n              <!-- <ngx-datatable-column name=\"User ID\" prop=\"user_id\">\r\n              </ngx-datatable-column> -->\r\n              <ngx-datatable-column name=\"IP Address\" prop=\"browser_ip\">\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Platform\" prop=\"platform\">\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Module\" prop=\"module\">\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Event\" prop=\"event\">\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Description\" prop=\"description\">\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Date\" prop=\"created_at\">\r\n                <ng-template ngx-datatable-cell-template let-value=\"value\">{{value | date: 'dd/MM/yyyy'}}\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n            </ngx-datatable>\r\n          </div>\r\n        </div>\r\n        <div class=\"result-block\" *ngIf=\"bookingsLoader\">\r\n          <div class=\"ui segment b2c-list-user-table__segment-loader\" *ngIf=\"bookingsLoader\">\r\n            <div class=\"ui active inverted dimmer\">\r\n              <div class=\"ui text loader\">Loading Report ...</div>\r\n            </div>\r\n            <p></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/layout/report/audit-report/audit-report-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/layout/report/audit-report/audit-report-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: AuditReportRoutingModule */

  /***/
  function srcAppLayoutReportAuditReportAuditReportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuditReportRoutingModule", function () {
      return AuditReportRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _audit_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./audit-report.component */
    "./src/app/layout/report/audit-report/audit-report.component.ts");
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
      component: _audit_report_component__WEBPACK_IMPORTED_MODULE_1__["AuditReportComponent"]
    }];

    var AuditReportRoutingModule = function AuditReportRoutingModule() {
      _classCallCheck(this, AuditReportRoutingModule);
    };

    AuditReportRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], AuditReportRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/report/audit-report/audit-report.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/layout/report/audit-report/audit-report.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutReportAuditReportAuditReportComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bookings_btn-panel {\n  padding: 20px 2px;\n}\n\n.bookings_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n\n.bookings_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n\n.bookings_pickers .input .icon {\n  opacity: 1;\n  z-index: 1;\n}\n\n.bookings_pickers .input .icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.bookings_pickers .input .icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n\n.bookings_pickers .input .search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.bookings_pickers .input .search.dropdown .search {\n  margin-left: 42px !important;\n}\n\n.bookings_pickers .input .search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n\n.user-table-list.b2c-list-user-table {\n  margin-top: 16px;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.audit-trail-header {\n  position: relative;\n  left: 32%;\n  color: #0000007a;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 200;\n}\n\n.b2c-list-user-table__segment-loader {\n  height: 450px;\n  background-color: white !important;\n  border: 0;\n  box-shadow: none;\n  margin-top: 10px;\n}\n\n.b2c-list-user-table__segment-loader .ui.inverted.dimmer {\n  background-color: white !important;\n}\n\n.b2c-list-user-table__segment-loader .eye-icon {\n  font-size: 12px;\n  color: #3867b1;\n}\n\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n\n.eight.field.bookings_btn-panel {\n  padding: 0px;\n  text-align: right;\n}\n\n.agent-name-booking {\n  margin: auto 24px !important;\n}\n\n.agent-name-booking .eight.wide.field {\n  padding: 0px;\n}\n\n.agent-name-booking .eight.wide.field button {\n  margin-right: 0px;\n}\n\n.five.wide.field {\n  padding-bottom: 16px;\n}\n\n.ui.attached.segment.tabContent-block .ui.segment .report-form {\n  background: #fff;\n  padding: 0px;\n  margin: 24px;\n  border-radius: 4.96141px;\n}\n\n.ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child {\n  margin-bottom: 0px;\n}\n\n.ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child .five.wide.field {\n  padding-bottom: 0px;\n}\n\n.ui.top.attached.tabular.menu {\n  margin: 24px 0px;\n}\n\n.bookings_btn-panel button {\n  margin: 0px 6px;\n}\n\n@media (max-width: 1030px) {\n  .ui.form .last-field {\n    display: block;\n  }\n  .ui.form .last-field .bookings_pickers {\n    display: inline-block;\n  }\n  .ui.form .last-field .btn-wrapper {\n    width: 100% !important;\n    display: block;\n    text-align: right;\n  }\n}\n\n@media (max-width: 1030px) and (min-width: 768px) {\n  .ui.form .last-field .bookings_pickers {\n    width: 50% !important;\n  }\n}\n\n@media (max-width: 800px) {\n  .ui.top.attached.tabular.menu {\n    display: block;\n  }\n  .ui.top.attached.tabular.menu .item {\n    padding: 12px 0px;\n  }\n}\n\n@media (max-width: 767px) {\n  .ui.attached.segment.tabContent-block .ui.segment .report-form {\n    margin: 0px;\n  }\n  .ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child {\n    margin-bottom: 0px;\n  }\n  .ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child .bookings_pickers:first-child {\n    padding-top: 16px;\n  }\n  .ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child .five.wide.field {\n    padding-bottom: 16px;\n  }\n  .ui.attached.segment.tabContent-block .ui.segment .agent-name-booking {\n    margin: 0px !important;\n  }\n  .ui.attached.segment.tabContent-block .ui.segment .result-block {\n    margin: 20px 0px !important;\n  }\n}\n\n@media (max-width: 480px) {\n  .ui.attached.segment.tabContent-block .ui.segment .report-form {\n    margin: 20px 0px;\n    padding: 16px;\n  }\n}\n\n@media (max-width: 320px) {\n  .ui.form .fields .btn-wrapper .bookings_btn-panel {\n    padding: 20px 0px;\n  }\n  .ui.form .fields .btn-wrapper .bookings_btn-panel .primary.button {\n    margin-right: 0px;\n  }\n  .ui.form .fields .btn-wrapper .bookings_btn-panel .reset.button {\n    min-width: 54px !important;\n    margin-bottom: 12px;\n    margin-right: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3JlcG9ydC9hdWRpdC1yZXBvcnQvRTpcXEJlbGFsXFxwcm9qZWN0c1xccHJvZHVjdGlvbi1idWlsZFxcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxyZXBvcnRcXGF1ZGl0LXJlcG9ydFxcYXVkaXQtcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcmVwb3J0L2F1ZGl0LXJlcG9ydC9hdWRpdC1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtBQ0NKOztBREdJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0FSOztBREVJO0VBQ0ksd0JBQUE7RUFDQSwwQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUNBUjs7QURFSTtFQUNJLFVBQUE7RUFDQSxVQUFBO0FDQVI7O0FEQ1E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0NaOztBREFZO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDRWhCOztBREVJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FDQVI7O0FEQ1E7RUFDSSw0QkFBQTtBQ0NaOztBRENRO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7QUNDWjs7QURJQTtFQUNJLGdCQUFBO0FDREo7O0FESUE7RUFDSSw0Q0FBQTtBQ0RKOztBRElBO0VBQ0ksZ0JBQUE7QUNESjs7QURJQTtFQUNJLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQ0RKOztBRElBO0VBQ0ksa0NBQUE7RUFDQSx3Q0FBQTtBQ0RKOztBRElBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0FDREo7O0FET0E7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0pKOztBREtJO0VBQ0ksa0NBQUE7QUNIUjs7QURLSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDSFI7O0FET0E7RUFDSSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNKSjs7QURPQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ0pKOztBRE9BO0VBQ0ksNEJBQUE7QUNKSjs7QURLSTtFQUNJLFlBQUE7QUNIUjs7QURJUTtFQUNJLGlCQUFBO0FDRlo7O0FET0E7RUFDRSxvQkFBQTtBQ0pGOztBRE9BO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUVBLHdCQUFBO0FDTEo7O0FETUk7RUFDSSxrQkFBQTtBQ0pSOztBREtRO0VBQ0ksbUJBQUE7QUNIWjs7QURRQTtFQUNJLGdCQUFBO0FDTEo7O0FEU0k7RUFDSSxlQUFBO0FDTlI7O0FEVUE7RUFFUTtJQUNJLGNBQUE7RUNSVjtFRFNVO0lBQ0kscUJBQUE7RUNQZDtFRFNVO0lBQ0ksc0JBQUE7SUFDQSxjQUFBO0lBQ0EsaUJBQUE7RUNQZDtBQUNGOztBRFlBO0VBR1k7SUFDRyxxQkFBQTtFQ1piO0FBQ0Y7O0FEaUJBO0VBQ0k7SUFDSSxjQUFBO0VDZk47RURnQk07SUFDSSxpQkFBQTtFQ2RWO0FBQ0Y7O0FEa0JBO0VBRVE7SUFDSSxXQUFBO0VDakJWO0VEa0JVO0lBQ0ksa0JBQUE7RUNoQmQ7RURpQmM7SUFDSSxpQkFBQTtFQ2ZsQjtFRGlCYztJQUNJLG9CQUFBO0VDZmxCO0VEbUJNO0lBQ0ksc0JBQUE7RUNqQlY7RURtQk07SUFDSSwyQkFBQTtFQ2pCVjtBQUNGOztBRHFCQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxhQUFBO0VDbkJOO0FBQ0Y7O0FEc0JBO0VBSWdCO0lBQ0ksaUJBQUE7RUN2QmxCO0VEd0JrQjtJQUNJLGlCQUFBO0VDdEJ0QjtFRHdCa0I7SUFDSSwwQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7RUN0QnRCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcmVwb3J0L2F1ZGl0LXJlcG9ydC9hdWRpdC1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9va2luZ3NfYnRuLXBhbmVsIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMnB4O1xyXG59XHJcblxyXG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQge1xyXG4gICAgJi5ib29raW5nc19kYXRlcGlja2VyIHtcclxuICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTM4cHhcclxuICAgIH1cclxuICAgIC51aS5iYXNpYy5mbG9hdGluZy5idXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogcmdiYSgxNTIsIDE1MiwgMTUyLCAwLjYpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4gICAgfVxyXG4gICAgLmljb24ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgICAgICAmLmNhbCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLmRyb3Bkb3duIHtcclxuICAgICAgICB3aWR0aDogMjE4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgLnNlYXJjaCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZWZhdWx0LnRleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMCAwIDM4cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi51c2VyLXRhYmxlLWxpc3QuYjJjLWxpc3QtdXNlci10YWJsZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcblxyXG4udGFiLnNlZ21lbnQge1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi51aS5ib3R0b20uYXR0YWNoZWQuYWN0aXZlLnRhYi5zZWdtZW50IHtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE3cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTdweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxN3B4O1xyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLm1lbnU+Lml0ZW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI4NTcxNDI5cmVtIDAgMCAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmF1ZGl0LXRyYWlsLWhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAzMiU7XHJcbiAgICBjb2xvcjogIzAwMDAwMDdhO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG5cclxuLy8gLnVpLmZsdWlkLmNvbnRhaW5lciB7XHJcbi8vICAgICBwYWRkaW5nOiAyOHB4O1xyXG4vLyB9XHJcbi5iMmMtbGlzdC11c2VyLXRhYmxlX19zZWdtZW50LWxvYWRlciB7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgLnVpLmludmVydGVkLmRpbW1lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5leWUtaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMzg2N2IxO1xyXG4gICAgfVxyXG59XHJcblxyXG4udWkuZm9ybSAuZmllbGQ+bGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgY29sb3I6ICMxODFCMjA7XHJcbiAgICBtYXJnaW46IDBweCAwcHggOHB4O1xyXG59XHJcblxyXG4uZWlnaHQuZmllbGQuYm9va2luZ3NfYnRuLXBhbmVsIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uYWdlbnQtbmFtZS1ib29raW5nIHtcclxuICAgIG1hcmdpbjogYXV0byAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAuZWlnaHQud2lkZS5maWVsZCB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZpdmUud2lkZS5maWVsZCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi51aS5hdHRhY2hlZC5zZWdtZW50LnRhYkNvbnRlbnQtYmxvY2sgLnVpLnNlZ21lbnQgLnJlcG9ydC1mb3JtIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBtYXJnaW46IDI0cHg7XHJcbiAgICAvLyBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDYsIDQwLCA5OCwgMC4xKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNC45NjE0MXB4O1xyXG4gICAgLmZpZWxkczpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgLmZpdmUud2lkZS5maWVsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XHJcbiAgICBtYXJnaW46IDI0cHggMHB4O1xyXG59XHJcblxyXG4uYm9va2luZ3NfYnRuLXBhbmVsIHtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAzMHB4KSB7XHJcbiAgICAudWkuZm9ybSB7XHJcbiAgICAgICAgLmxhc3QtZmllbGQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgLmJvb2tpbmdzX3BpY2tlcnMge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5idG4td3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMzBweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAudWkuZm9ybSB7XHJcbiAgICAgICAgLmxhc3QtZmllbGQge1xyXG4gICAgICAgICAgICAuYm9va2luZ3NfcGlja2VycyB7XHJcbiAgICAgICAgICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgICAudWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgLml0ZW0ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLnVpLmF0dGFjaGVkLnNlZ21lbnQudGFiQ29udGVudC1ibG9jayAudWkuc2VnbWVudCB7XHJcbiAgICAgICAgLnJlcG9ydC1mb3JtIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgIC5maWVsZHM6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAuYm9va2luZ3NfcGlja2VyczpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZml2ZS53aWRlLmZpZWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYWdlbnQtbmFtZS1ib29raW5nIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlc3VsdC1ibG9jayB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjBweCAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLnVpLmF0dGFjaGVkLnNlZ21lbnQudGFiQ29udGVudC1ibG9jayAudWkuc2VnbWVudCAucmVwb3J0LWZvcm0ge1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTZweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICAudWkuZm9ybSB7XHJcbiAgICAgICAgLmZpZWxkcyB7XHJcbiAgICAgICAgICAgIC5idG4td3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAuYm9va2luZ3NfYnRuLXBhbmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAucHJpbWFyeS5idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnJlc2V0LmJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIuYm9va2luZ3NfYnRuLXBhbmVsIHtcbiAgcGFkZGluZzogMjBweCAycHg7XG59XG5cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dC5ib29raW5nc19kYXRlcGlja2VyIHtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgbWF4LXdpZHRoOiAxMzhweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAudWkuYmFzaWMuZmxvYXRpbmcuYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogcmdiYSgxNTIsIDE1MiwgMTUyLCAwLjYpICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDExcHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLmljb24ge1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxO1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbCB7XG4gIHdpZHRoOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5zZWFyY2guZHJvcGRvd24ge1xuICB3aWR0aDogMjE4cHg7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnNlYXJjaC5kcm9wZG93biAuc2VhcmNoIHtcbiAgbWFyZ2luLWxlZnQ6IDQycHggIWltcG9ydGFudDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuc2VhcmNoLmRyb3Bkb3duIC5kZWZhdWx0LnRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHggMCAwIDM4cHggIWltcG9ydGFudDtcbn1cblxuLnVzZXItdGFibGUtbGlzdC5iMmMtbGlzdC11c2VyLXRhYmxlIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLnRhYi5zZWdtZW50IHtcbiAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLnVpLmJvdHRvbS5hdHRhY2hlZC5hY3RpdmUudGFiLnNlZ21lbnQge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XG59XG5cbi51aS50b3AuYXR0YWNoZWQubWVudSA+IC5pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yODU3MTQyOXJlbSAwIDAgMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLmF1ZGl0LXRyYWlsLWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMzIlO1xuICBjb2xvcjogIzAwMDAwMDdhO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuLmIyYy1saXN0LXVzZXItdGFibGVfX3NlZ21lbnQtbG9hZGVyIHtcbiAgaGVpZ2h0OiA0NTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmIyYy1saXN0LXVzZXItdGFibGVfX3NlZ21lbnQtbG9hZGVyIC51aS5pbnZlcnRlZC5kaW1tZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuLmIyYy1saXN0LXVzZXItdGFibGVfX3NlZ21lbnQtbG9hZGVyIC5leWUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMzODY3YjE7XG59XG5cbi51aS5mb3JtIC5maWVsZCA+IGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgY29sb3I6ICMxODFCMjA7XG4gIG1hcmdpbjogMHB4IDBweCA4cHg7XG59XG5cbi5laWdodC5maWVsZC5ib29raW5nc19idG4tcGFuZWwge1xuICBwYWRkaW5nOiAwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYWdlbnQtbmFtZS1ib29raW5nIHtcbiAgbWFyZ2luOiBhdXRvIDI0cHggIWltcG9ydGFudDtcbn1cbi5hZ2VudC1uYW1lLWJvb2tpbmcgLmVpZ2h0LndpZGUuZmllbGQge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uYWdlbnQtbmFtZS1ib29raW5nIC5laWdodC53aWRlLmZpZWxkIGJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4uZml2ZS53aWRlLmZpZWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XG59XG5cbi51aS5hdHRhY2hlZC5zZWdtZW50LnRhYkNvbnRlbnQtYmxvY2sgLnVpLnNlZ21lbnQgLnJlcG9ydC1mb3JtIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDQuOTYxNDFweDtcbn1cbi51aS5hdHRhY2hlZC5zZWdtZW50LnRhYkNvbnRlbnQtYmxvY2sgLnVpLnNlZ21lbnQgLnJlcG9ydC1mb3JtIC5maWVsZHM6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi51aS5hdHRhY2hlZC5zZWdtZW50LnRhYkNvbnRlbnQtYmxvY2sgLnVpLnNlZ21lbnQgLnJlcG9ydC1mb3JtIC5maWVsZHM6bGFzdC1jaGlsZCAuZml2ZS53aWRlLmZpZWxkIHtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xuICBtYXJnaW46IDI0cHggMHB4O1xufVxuXG4uYm9va2luZ3NfYnRuLXBhbmVsIGJ1dHRvbiB7XG4gIG1hcmdpbjogMHB4IDZweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMzBweCkge1xuICAudWkuZm9ybSAubGFzdC1maWVsZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnVpLmZvcm0gLmxhc3QtZmllbGQgLmJvb2tpbmdzX3BpY2tlcnMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAudWkuZm9ybSAubGFzdC1maWVsZCAuYnRuLXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDMwcHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAudWkuZm9ybSAubGFzdC1maWVsZCAuYm9va2luZ3NfcGlja2VycyB7XG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IC5pdGVtIHtcbiAgICBwYWRkaW5nOiAxMnB4IDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC51aS5hdHRhY2hlZC5zZWdtZW50LnRhYkNvbnRlbnQtYmxvY2sgLnVpLnNlZ21lbnQgLnJlcG9ydC1mb3JtIHtcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuICAudWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXBvcnQtZm9ybSAuZmllbGRzOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuICAudWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXBvcnQtZm9ybSAuZmllbGRzOmxhc3QtY2hpbGQgLmJvb2tpbmdzX3BpY2tlcnM6Zmlyc3QtY2hpbGQge1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICB9XG4gIC51aS5hdHRhY2hlZC5zZWdtZW50LnRhYkNvbnRlbnQtYmxvY2sgLnVpLnNlZ21lbnQgLnJlcG9ydC1mb3JtIC5maWVsZHM6bGFzdC1jaGlsZCAuZml2ZS53aWRlLmZpZWxkIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgfVxuICAudWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5hZ2VudC1uYW1lLWJvb2tpbmcge1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnVpLmF0dGFjaGVkLnNlZ21lbnQudGFiQ29udGVudC1ibG9jayAudWkuc2VnbWVudCAucmVzdWx0LWJsb2NrIHtcbiAgICBtYXJnaW46IDIwcHggMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAudWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXBvcnQtZm9ybSB7XG4gICAgbWFyZ2luOiAyMHB4IDBweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLnVpLmZvcm0gLmZpZWxkcyAuYnRuLXdyYXBwZXIgLmJvb2tpbmdzX2J0bi1wYW5lbCB7XG4gICAgcGFkZGluZzogMjBweCAwcHg7XG4gIH1cbiAgLnVpLmZvcm0gLmZpZWxkcyAuYnRuLXdyYXBwZXIgLmJvb2tpbmdzX2J0bi1wYW5lbCAucHJpbWFyeS5idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG4gIC51aS5mb3JtIC5maWVsZHMgLmJ0bi13cmFwcGVyIC5ib29raW5nc19idG4tcGFuZWwgLnJlc2V0LmJ1dHRvbiB7XG4gICAgbWluLXdpZHRoOiA1NHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/report/audit-report/audit-report.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/layout/report/audit-report/audit-report.component.ts ***!
    \**********************************************************************/

  /*! exports provided: AuditReportComponent */

  /***/
  function srcAppLayoutReportAuditReportAuditReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuditReportComponent", function () {
      return AuditReportComponent;
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

    var AuditReportComponent = /*#__PURE__*/function () {
      function AuditReportComponent(fb, newReportService, toastr) {
        var _this = this;

        _classCallCheck(this, AuditReportComponent);

        this.fb = fb;
        this.newReportService = newReportService;
        this.toastr = toastr;
        this.NewAuditTrail = [];
        this.totalAuditTrail = 0;
        this.platforms = [];
        this.modules = [];
        this.events = [];
        this.pages = 0;
        this.limit = 15;
        this.pageIndex = 1;
        this.showAuditReportTable = false;
        this.submitted = false;
        this.newAuditObj = {};
        this.bookingsLoader = false;
        this.auditTrailForm = this.fb.group({
          selectPlatform: [''],
          selectModule: [''],
          selectEvent: [''],
          auditEndDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          auditStartDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });

        this.loadStartDate = function () {
          var scope = _this;
          $(function () {
            $('input[name="auditStartDate"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1901,
              startDate: moment(),
              maxDate: moment(),
              autoUpdateInput: false
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.auditTrailForm.get('auditStartDate').setValue(moment(start).format('YYYY-MM-DD'));
            });
          });
        };

        this.loadEndDate = function () {
          var scope = _this;
          $(function () {
            $('input[name="auditEndDate"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1901,
              startDate: moment(),
              minDate: moment(),
              autoUpdateInput: false
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.auditTrailForm.get('auditEndDate').setValue(moment(start).format('YYYY-MM-DD'));
            });
          });
        };

        this.auditReportView = function () {
          _this.bookingsLoader = true;
          _this.submitted = true;

          if (_this.auditTrailForm.invalid) {
            return;
          }

          _this.newAuditObj.platform = _this.auditTrailForm.get('selectPlatform').value;
          _this.newAuditObj.module = _this.auditTrailForm.get('selectModule').value;
          _this.newAuditObj.event = _this.auditTrailForm.get('selectEvent').value;
          _this.newAuditObj.start_date = _this.auditTrailForm.get('auditStartDate').value;
          _this.newAuditObj.end_date = _this.auditTrailForm.get('auditEndDate').value;

          _this.newReportService.GetAllAuditTrail(_this.newAuditObj).subscribe(function (results) {
            if (results.status) {
              _this.bookingsLoader = false;
              _this.NewAuditTrail = results.result;

              if (results.result.length != 0) {
                _this.NewAuditTrail = results.result;
                _this.showAuditReportTable = true;
              } else {
                _this.bookingsLoader = false;

                _this.toastr.info("There is no data Available to display", "".concat(results.message), {
                  timeOut: 2000,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });
              }
            } else {
              _this.toastr.error("".concat(results.message), "", {
                timeOut: 2000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        };

        this.reset = function () {
          _this.bookingsLoader = false;

          _this.auditTrailForm.reset();

          $(".ui.dropdown").dropdown("clear");
          _this.showAuditReportTable = false;
        };
      } // convenience getter for easy access to form fields


      _createClass(AuditReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fetchAllAuditTrail();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          $(document).ready(function () {
            $('.menu .item').tab();
            $('.ui.dropdown').dropdown();
          });
          this.loadEndDate();
          this.loadStartDate();
        }
      }, {
        key: "fetchAllAuditTrail",
        value: function fetchAllAuditTrail() {
          var _this2 = this;

          this.bookingsLoader = true;
          this.newReportService.GetAllAuditTrail({
            page: 0
          }).subscribe(function (res) {
            _this2.bookingsLoader = false;
            _this2.NewAuditTrail = res.result;

            if (res.status) {
              if (res.result.length != 0) {
                res.result.forEach(function (element) {
                  if (element.platform != null) {
                    var checkplatform = _this2.platforms.findIndex(function (p) {
                      return p == element.platform;
                    });

                    var checkmodule = _this2.modules.findIndex(function (p) {
                      return p == element.module;
                    });

                    var checkevent = _this2.events.findIndex(function (p) {
                      return p == element.event;
                    });

                    if (checkplatform == -1) {
                      _this2.platforms.push(element.platform);
                    }

                    if (checkmodule == -1) {
                      _this2.modules.push(element.module);
                    }

                    if (checkevent == -1) {
                      _this2.events.push(element.event);
                    }
                  }
                });
              } else {
                _this2.bookingsLoader = false;

                _this2.toastr.info("There is no data available", "", {
                  timeOut: 5000,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });
              }
            } else {
              _this2.bookingsLoader = false;

              _this2.toastr.error("".concat(res.message), "", {
                timeOut: 5000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.auditTrailForm.controls;
        }
      }]);

      return AuditReportComponent;
    }();

    AuditReportComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    AuditReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-audit-report',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./audit-report.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/audit-report/audit-report.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./audit-report.component.scss */
      "./src/app/layout/report/audit-report/audit-report.component.scss"))["default"]]
    })], AuditReportComponent);
    /***/
  },

  /***/
  "./src/app/layout/report/audit-report/audit-report.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/layout/report/audit-report/audit-report.module.ts ***!
    \*******************************************************************/

  /*! exports provided: AuditReportModule */

  /***/
  function srcAppLayoutReportAuditReportAuditReportModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuditReportModule", function () {
      return AuditReportModule;
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


    var _audit_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./audit-report.component */
    "./src/app/layout/report/audit-report/audit-report.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var _audit_report_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./audit-report-routing.module */
    "./src/app/layout/report/audit-report/audit-report-routing.module.ts");

    var AuditReportModule = function AuditReportModule() {
      _classCallCheck(this, AuditReportModule);
    };

    AuditReportModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_audit_report_component__WEBPACK_IMPORTED_MODULE_3__["AuditReportComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"], _audit_report_routing_module__WEBPACK_IMPORTED_MODULE_6__["AuditReportRoutingModule"]]
    })], AuditReportModule);
    /***/
  }
}]);
//# sourceMappingURL=audit-report-audit-report-module-es5.js.map