function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-log-report-search-log-report-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/search-log-report/search-activity/search-activity.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/search-log-report/search-activity/search-activity.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutReportSearchLogReportSearchActivitySearchActivityComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui segment\">\r\n  <div class=\"ui fluid container search-log-container\">\r\n    <div class=\"outer-basics\">\r\n      <form [formGroup]=\"searchActivityLogForm\" (ngSubmit)=\"activitySearchLog()\"\r\n        class=\"ui form report-form\">\r\n        <div class=\"field\">\r\n          <div class=\"outer-basicForm\">\r\n            <div class=\"form-inner\">\r\n              <div class=\"fields\">\r\n                <!-- <div class=\"one wide field\"></div> -->\r\n                <div class=\"six wide field\">\r\n                  <label>Agents</label>\r\n                  <select class=\"ui fluid search dropdown\" formControlName=\"organisation_id\">\r\n                    <option value=\"\">Agents</option>\r\n                    <option class=\"item\" *ngFor=\"let orgs of orgNames\" value=\"{{orgs.organisation_id}}\">{{orgs.name}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n                <!-- <div class=\"one wide field\"></div> -->\r\n                <div class=\"five wide field bookings_pickers\"\r\n                  [ngClass]=\"{'error': ((submitted && f.start_date.errors) && f.start_date.errors.required) }\">\r\n                  <label>Start Date<span class=\"mandatory\">*</span></label>\r\n                  <div class=\"ui left icon input\">\r\n                    <input type=\"text\" placeholder=\"Start Date\" formControlName=\"start_date\" name=\"start_date\"\r\n                      value=\"\" required />\r\n                    <i class=\"icon\">\r\n                      <i class=\"fa fa-calendar-o bookings_input__placeholder-icon cal\" aria-hidden=\"true\"></i>\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"five wide field bookings_pickers\"\r\n                  [ngClass]=\"{'error': ((submitted && f.end_date.errors) && f.end_date.errors.required) }\">\r\n                  <label>End Date<span class=\"mandatory\">*</span></label>\r\n                  <div class=\"ui left icon input\">\r\n                    <input type=\"text\" placeholder=\"End Date\" formControlName=\"end_date\" name=\"end_date\" value=\"\"\r\n                      required />\r\n                    <i class=\"icon\">\r\n                      <i class=\"fa fa-calendar-o bookings_input__placeholder-icon cal\" aria-hidden=\"true\"></i>\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"fields text-right\">\r\n                <div class=\"sixteen wide field btn-wrapper\">\r\n                  <div class=\"bookings_btn-panel\">\r\n                    <button class=\"ui primary reset button\" (click)=\"reset()\" title=\"Reset\">\r\n                      <i class=\"undo icon\"></i>\r\n                    </button>\r\n                    <button class=\"ui primary  button\" type=\"submit\">\r\n                      Search\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <!-- <div class=\"fields agent-name-booking\">\r\n          <div class=\"eight wide field ui small header\">Hotel Search Log</div> -->\r\n      <!-- <div class=\"ui divider\"></div> -->\r\n      <!-- <div class=\"eight wide field bookings_btn-panel\">\r\n            <button class=\"ui export button\" title=\"Export\">\r\n              Export\r\n            </button>\r\n          </div> -->\r\n      <!-- </div> -->\r\n      <div class=\"result-block\">\r\n        <div class=\"user-table-list b2c-list-user-table\">\r\n          <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n            [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='NewActivitySearchLog' [sortType]=\"'multi'\" [reorderable]=\"true\"\r\n            [externalPaging]=\"true\" [count]=\"totalActivitySearchLog\" [offset]=\"activitySearchPage\"\r\n            [sorts]=\"[{prop: 'created', dir: 'asc'}]\" (page)=\"pageCallback($event)\">\r\n            <ngx-datatable-column name=\"AgencyName\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <span *ngIf=\"row.organisation\">\r\n                  {{row.organisation.name}}\r\n                </span>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Username\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <span *ngIf=\"row.user\">\r\n                  {{row.user.username}}\r\n                </span>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Start Date\" prop=\"startDate\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\">{{value | date: 'dd/MM/yyyy'}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"End Date\" prop=\"endDate\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\">{{value | date: 'dd/MM/yyyy'}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Adult Count\" prop=\"adultCount\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Child Count\" prop=\"childCount\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Currency\" prop=\"currency\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Date\" prop=\"created_at\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\">{{value | date: 'dd/MM/yyyy, h:mm a'}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n          </ngx-datatable>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/search-log-report/search-car/search-car.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/search-log-report/search-car/search-car.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutReportSearchLogReportSearchCarSearchCarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui segment\">\r\n    <div class=\"ui fluid container search-log-container\">\r\n      <div class=\"outer-basics\">\r\n        <form [formGroup]=\"searchCarLogForm\" (ngSubmit)=\"carSearchLog()\" class=\"ui form report-form\">\r\n          <div class=\"field\">\r\n            <div class=\"outer-basicForm\">\r\n              <div class=\"form-inner\">\r\n                <div class=\"fields\">\r\n                  <!-- <div class=\"one wide field\"></div> -->\r\n                  <div class=\"six wide field\">\r\n                    <label>Agents</label>\r\n                    <select class=\"ui fluid search dropdown\" formControlName=\"organisation_id\">\r\n                      <option value=\"\">Agents</option>             \r\n                      <option class=\"item\" *ngFor=\"let orgs of orgNames\" value=\"{{orgs.organisation_id}}\">{{orgs.name}}</option>\r\n                    </select>\r\n                  </div>\r\n                  <!-- <div class=\"one wide field\"></div> -->\r\n                  <div class=\"five wide field bookings_pickers\"\r\n                    [ngClass]=\"{'error': ((submitted && f.c_startDate.errors) && f.c_startDate.errors.required) }\">\r\n                    <label>Start Date<span class=\"mandatory\">*</span></label>\r\n                    <div class=\"ui left icon input\">\r\n                      <input type=\"text\" placeholder=\"Start Date\" formControlName=\"c_startDate\" name=\"c_startDate\"\r\n                        value=\"\" required />\r\n                      <i class=\"icon\">\r\n                        <i class=\"fa fa-calendar-o bookings_input__placeholder-icon cal\" aria-hidden=\"true\"></i>\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"five wide field bookings_pickers\"\r\n                    [ngClass]=\"{'error': ((submitted && f.c_endDate.errors) && f.c_endDate.errors.required) }\">\r\n                    <label>End Date<span class=\"mandatory\">*</span></label>\r\n                    <div class=\"ui left icon input\">\r\n                      <input type=\"text\" placeholder=\"End Date\" formControlName=\"c_endDate\" name=\"c_endDate\"\r\n                        value=\"\" required />\r\n                      <i class=\"icon\">\r\n                        <i class=\"fa fa-calendar-o bookings_input__placeholder-icon cal\" aria-hidden=\"true\"></i>\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"fields text-right\">\r\n                  <div class=\"sixteen wide field\">\r\n                    <div class=\"bookings_btn-panel btn-wrapper\">\r\n                      <button class=\"ui primary reset button\" (click)=\"reset()\" title=\"Reset\">\r\n                        <i class=\"undo icon\"></i>\r\n                      </button>\r\n                      <button class=\"ui primary  button\">\r\n                        Search\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <!-- <div class=\"fields agent-name-booking\">\r\n          <div class=\"eight wide field ui small header\">Hotel Search Log</div> -->\r\n          <!-- <div class=\"ui divider\"></div> -->\r\n          <!-- <div class=\"eight wide field bookings_btn-panel\">\r\n            <button class=\"ui export button\" title=\"Export\">\r\n              Export\r\n            </button>\r\n          </div> -->\r\n        <!-- </div> -->\r\n        <div class=\"result-block\">\r\n          <div class=\"user-table-list b2c-list-user-table\">\r\n            <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n            [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='NewCarSearchLog' [sortType]=\"'multi'\" [reorderable]=\"true\"\r\n            [externalPaging]=\"true\" [count]=\"totalCarSearchLog\" [offset]=\"carSearchPage\"\r\n            [sorts]=\"[{prop: 'created', dir: 'asc'}]\" (page)=\"pageCallback($event)\">\r\n            <ngx-datatable-column name=\"Agency Name\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <span *ngIf=\"row.organisation\">\r\n                  {{row.organisation.name}}\r\n                </span>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Username\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <span *ngIf=\"row.user\">\r\n                  {{row.user.username}}\r\n                </span>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Start Date\" prop=\"startDate\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"End Date\" prop=\"endDate\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Trip Type\" prop=\"tripType\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Pick up\" prop=\"pickUp\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Dropoff\" prop=\"dropOff\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"PickUp Location\" prop=\"pickUpLocation\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"DropOff Location\" prop=\"dropOffLocation\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Country\" prop=\"country\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Date\" prop=\"created_at\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\">{{value | date: 'short'}}\r\n                </ng-template>\r\n            </ngx-datatable-column>\r\n            </ngx-datatable>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/search-log-report/search-flight-log/search-flight-log.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/search-log-report/search-flight-log/search-flight-log.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutReportSearchLogReportSearchFlightLogSearchFlightLogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui segment\">\r\n    <div class=\"ui fluid container search-log-container\">\r\n      <div class=\"outer-basics\">\r\n        <form  [formGroup]=\"searchFlightLogForm\" (ngSubmit)=\"flightSearchLog()\" class=\"ui form report-form\">\r\n          <div class=\"field\">\r\n            <div class=\"outer-basicForm\">\r\n              <div class=\"form-inner\">\r\n                <div class=\"fields\">\r\n                  <!-- <div class=\"one wide field\"></div> -->\r\n                  <div class=\"six wide field\">\r\n                    <label>Agents</label>\r\n                    <select class=\"ui fluid search dropdown\" formControlName=\"organisation_id\">\r\n                      <option value=\"\">Agents</option>             \r\n                      <option class=\"item\" *ngFor=\"let orgs of orgNames\" value=\"{{orgs.organisation_id}}\">{{orgs.name}}</option>\r\n                    </select>\r\n                  </div>\r\n                <!-- </div>\r\n                <div class=\"fields\"> -->\r\n                  <!-- <div class=\"one wide field\"></div> -->\r\n                  <div class=\"five wide field bookings_pickers\"\r\n                    [ngClass]=\"{'error': ((submitted && f.f_startDate.errors) && f.f_startDate.errors.required) }\">\r\n                    <label>Start Date<span class=\"mandatory\">*</span></label>\r\n                    <div class=\"ui left icon input\">\r\n                      <input type=\"text\" placeholder=\"Start Date\" formControlName=\"f_startDate\" name=\"f_startDate\"\r\n                        value=\"\" required />\r\n                      <i class=\"icon\">\r\n                        <i class=\"fa fa-calendar-o bookings_input__placeholder-icon cal\" aria-hidden=\"true\"></i>\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"five wide field bookings_pickers\"\r\n                    [ngClass]=\"{'error': ((submitted && f.f_endDate.errors) && f.f_endDate.errors.required) }\">\r\n                    <label>End Date<span class=\"mandatory\">*</span></label>\r\n                    <div class=\"ui left icon input\">\r\n                      <input type=\"text\" placeholder=\"End Date\" formControlName=\"f_endDate\" name=\"f_endDate\"\r\n                        value=\"\" required />\r\n                      <i class=\"icon\">\r\n                        <i class=\"fa fa-calendar-o bookings_input__placeholder-icon cal\" aria-hidden=\"true\"></i>\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"fields text-right\">\r\n                  <div class=\"sixteen wide field btn-wrapper\">\r\n                    <div class=\"bookings_btn-panel\">\r\n                      <button class=\"ui primary reset button\" (click)=\"reset()\" title=\"Reset\">\r\n                        <i class=\"undo icon\"></i>\r\n                      </button>\r\n                      <button class=\"ui primary  button\">\r\n                        Search\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <!-- <div class=\"fields agent-name-booking\">\r\n          <div class=\"eight wide field ui small header\">Hotel Search Log</div> -->\r\n          <!-- <div class=\"ui divider\"></div> -->\r\n          <!-- <div class=\"eight wide field bookings_btn-panel\">\r\n            <button class=\"ui export button\" title=\"Export\">\r\n              Export\r\n            </button>\r\n          </div> -->\r\n        <!-- </div> -->\r\n        <div class=\"result-block\">\r\n          <div class=\"user-table-list b2c-list-user-table\">\r\n            <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n            [rowHeight]=\"'auto'\" [limit]=\"30\" [rows]='NewFlightSearchLog' [sortType]=\"'multi'\" [reorderable]=\"true\"\r\n            [externalPaging]=\"true\" [count]=\"totalFlightSearchLog\" [offset]=\"flightSearchPage\"\r\n            [sorts]=\"[{prop: 'created', dir: 'asc'}]\" (page)=\"pageCallback($event)\">\r\n            <ngx-datatable-column name=\"Agency Name\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              <span *ngIf=\"row.organisation\"></span>\r\n                {{row.organisation.name}}\r\n            </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Username\" prop=\"username\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <span title=\"Email\" class=\"email\">\r\n                  {{row.username}}\r\n                </span>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Remote Address\" prop=\"browserIp\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Platform\" prop=\"platform\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <span title=\"Email\" class=\"email\">\r\n                  {{row.platform}}\r\n                </span>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Trip type\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    {{row.stream.TripType}}\r\n                </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"No of Passengers\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    {{row.stream.TotalPassengers}}\r\n                </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Departure Location(s)\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    {{row.departure_airport_code}}\r\n                </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Arrival Location(s)\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                    {{row.arrival_airport_code}}\r\n                </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Update From\" prop=\"updateFrom\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Date\" prop=\"created_at\">\r\n                <ng-template ngx-datatable-cell-template let-value=\"value\">{{value | date: 'short'}}\r\n                </ng-template>\r\n            </ngx-datatable-column>\r\n            <!-- <ngx-datatable-column name=\"Status\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <span *ngIf=\"row.organisation.status == 1\"><i class=\"icon\">\r\n                    <img src=\"./../../../../../assets/icons/checkmark.png\" class=\"bookings_input__placeholder-icon cal\" />\r\n                    </i></span>\r\n                    <span *ngIf=\"row.organisation.status == 0\"><i class=\"icon\">\r\n                        <img src=\"./../../../../assets/icons/crossX.png\" class=\"bookings_input__placeholder-icon call\" />\r\n                    </i></span>\r\n                </ng-template>\r\n            </ngx-datatable-column> -->\r\n            </ngx-datatable>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/search-log-report/search-insurance/search-insurance.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/search-log-report/search-insurance/search-insurance.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutReportSearchLogReportSearchInsuranceSearchInsuranceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui segment\">\r\n    <div class=\"ui fluid container search-log-container\">\r\n      <div class=\"outer-basics\">\r\n        <form  [formGroup]=\"searchInsuranceLogForm\" (ngSubmit)=\"insuranceSearchLog()\" class=\"ui form report-form\">\r\n          <div class=\"field\">\r\n            <div class=\"outer-basicForm\">\r\n              <div class=\"form-inner\">\r\n                <div class=\"fields\">\r\n                  <!-- <div class=\"one wide field\"></div> -->\r\n                  <div class=\"six wide field\">\r\n                    <label>Agents</label>\r\n                    <select class=\"ui fluid search dropdown\" formControlName=\"organisation_id\">\r\n                      <option value=\"\">Agents</option>             \r\n                      <option class=\"item\" *ngFor=\"let orgs of orgNames\" value=\"{{orgs.organisation_id}}\">{{orgs.name}}</option>\r\n                    </select>\r\n                  </div>\r\n                  <!-- <div class=\"one wide field\"></div> -->\r\n                  <div class=\"five wide field bookings_pickers\"\r\n                    [ngClass]=\"{'error': ((submitted && f.startDate.errors) && f.startDate.errors.required) }\">\r\n                    <label>Start Date<span class=\"mandatory\">*</span></label>\r\n                    <div class=\"ui left icon input\">\r\n                      <input type=\"text\" placeholder=\"Start Date\" formControlName=\"startDate\" name=\"startDate\"\r\n                        value=\"\" required />\r\n                      <i class=\"icon\">\r\n                        <i class=\"fa fa-calendar-o bookings_input__placeholder-icon cal\" aria-hidden=\"true\"></i>\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"five wide field bookings_pickers\"\r\n                    [ngClass]=\"{'error': ((submitted && f.endDate.errors) && f.endDate.errors.required) }\">\r\n                    <label>End Date<span class=\"mandatory\">*</span></label>\r\n                    <div class=\"ui left icon input\">\r\n                      <input type=\"text\" placeholder=\"End Date\" formControlName=\"endDate\" name=\"endDate\"\r\n                        value=\"\" required />\r\n                      <i class=\"icon\">\r\n                        <i class=\"fa fa-calendar-o bookings_input__placeholder-icon cal\" aria-hidden=\"true\"></i>\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"fields text-right\">\r\n                  <div class=\"sixteen wide field btn-wrapper\">\r\n                    <div class=\"bookings_btn-panel\">\r\n                      <button class=\"ui primary reset button\" (click)=\"reset()\" title=\"Reset\">\r\n                        <i class=\"undo icon\"></i>\r\n                      </button>\r\n                      <button class=\"ui primary  button\">\r\n                        Search\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <!-- <div class=\"fields agent-name-booking\">\r\n          <div class=\"eight wide field ui small header\">Hotel Search Log</div> -->\r\n          <!-- <div class=\"ui divider\"></div> -->\r\n          <!-- <div class=\"eight wide field bookings_btn-panel\">\r\n            <button class=\"ui export button\" title=\"Export\">\r\n              Export\r\n            </button>\r\n          </div> -->\r\n        <!-- </div> -->\r\n        <div class=\"result-block\">\r\n          <div class=\"user-table-list b2c-list-user-table\">\r\n            <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n            [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='NewInsuranceSearchLog' [sortType]=\"'multi'\" [reorderable]=\"true\"\r\n            [externalPaging]=\"true\" [count]=\"totalInsuranceSearchLog\" [offset]=\"insuranceSearchPage\"\r\n            [sorts]=\"[{prop: 'created', dir: 'asc'}]\" (page)=\"pageCallback($event)\">\r\n            <ngx-datatable-column name=\"Agency Name\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <span *ngIf=\"row.organisation\">\r\n                  {{row.organisation.name}}\r\n                </span>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"UserName\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <span *ngIf=\"row.user\">\r\n                  {{row.user.username}}\r\n                </span>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Start Date\" prop=\"startDate\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"End Date\" prop=\"endDate\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Birth Date\" prop=\"birthDate\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Country'\" prop=\"country\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Product\" prop=\"product\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Plan\" prop=\"plan\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Benefit\" prop=\"benefit\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Date\" prop=\"created_at\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\">{{value | date: 'short'}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            </ngx-datatable>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/search-log-report/search-log-report.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/search-log-report/search-log-report.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutReportSearchLogReportSearchLogReportComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui top attached tabular menu \">\r\n    <div class=\"item\" data-tab=\"first\" routerLink=\"/report/booking-report\">\r\n        Booking\r\n    </div>\r\n    <div class=\"item\" data-tab=\"second\" routerLink=\"/report/segment-report\">Segment</div>\r\n    <div class=\"item\" data-tab=\"third\" routerLink=\"/report/mis-report\">MIS</div>\r\n    <div class=\"item active\" data-tab=\"fourth\" routerLink=\"/report/search-log-report\">Search Log</div>\r\n    <div class=\"item\" data-tab=\"fifth\" routerLink=\"/report/audit-report\">Audit Trail Log</div>\r\n    <div class=\"item\" data-tab=\"sixth\" routerLink=\"/report/ticket-report\">Ticket</div>\r\n    <div class=\"item\" data-tab=\"seventh\" routerLink=\"/report/dynamic-report\">Dynamic Report</div>\r\n</div>\r\n<div class=\"ui bottom attached tab segment tabContent-block active\" data-tab=\"fourth\">\r\n    <div class=\"ui segment\">\r\n        <div class=\"ui fluid container\">\r\n            <div class=\"outer-basics\">\r\n                <div class=\"outer-basicForm\">\r\n                    <div id=\"context1\">\r\n                        <div class=\"ui secondary menu\">                     \r\n                          <a class=\"item active\" data-tab=\"flight\">Flight</a>\r\n                          <!-- <a class=\"item\" data-tab=\"hotel\">Hotel</a> -->\r\n                          <a class=\"item\" data-tab=\"cars\">Cars</a>\r\n                          <a class=\"item\" data-tab=\"transfer\">Transfer</a> \r\n                          <a class=\"item\" data-tab=\"activity\">Activity</a>    \r\n                          <a class=\"item\" data-tab=\"insurance\">Insurance</a>          \r\n                        </div>\r\n                        <div class=\"ui tab segment active\" data-tab=\"flight\">\r\n                            <app-search-flight-log></app-search-flight-log>\r\n                        </div>\r\n                        <!-- <div class=\"ui tab segment\" data-tab=\"hotel\">\r\n                            <app-search-hotel></app-search-hotel>\r\n                        </div> -->\r\n                        <div class=\"ui tab segment\" data-tab=\"cars\">\r\n                            <app-search-car></app-search-car>\r\n                        </div>\r\n                        <div class=\"ui tab segment\" data-tab=\"transfer\">\r\n                            <app-search-transfers></app-search-transfers>     \r\n                        </div>\r\n                        <div class=\"ui tab segment\" data-tab=\"activity\">\r\n                            <app-search-activity></app-search-activity>     \r\n                        </div>\r\n                        <div class=\"ui tab segment\" data-tab=\"insurance\">\r\n                            <app-search-insurance></app-search-insurance>     \r\n                        </div>\r\n                      </div>\r\n                </div>           \r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/search-log-report/search-transfers/search-transfers.component.html":
  /*!****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/search-log-report/search-transfers/search-transfers.component.html ***!
    \****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutReportSearchLogReportSearchTransfersSearchTransfersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui segment\">\r\n    <div class=\"ui fluid container search-log-container\">\r\n      <div class=\"outer-basics\">\r\n        <form [formGroup]=\"searchTransferLogForm\" (ngSubmit)=\"transferSearchLog()\" class=\"ui form report-form\">\r\n          <div class=\"field\">\r\n            <div class=\"outer-basicForm\">\r\n              <div class=\"form-inner\">\r\n                <div class=\"fields\">\r\n                  <!-- <div class=\"one wide field\"></div> -->\r\n                  <div class=\"six wide field\">\r\n                    <label>Agents</label>\r\n                    <select class=\"ui fluid search dropdown\" formControlName=\"organisation_id\">\r\n                      <option value=\"\">Agents</option>             \r\n                      <option class=\"item\" *ngFor=\"let orgs of orgNames\" value=\"{{orgs.organisation_id}}\">{{orgs.name}}</option>\r\n                    </select>\r\n                  </div>\r\n                  <!-- <div class=\"one wide field\"></div> -->\r\n                  <div class=\"five wide field bookings_pickers\"\r\n                    [ngClass]=\"{'error': ((submitted && f.t_startDate.errors) && f.t_startDate.errors.required) }\">\r\n                    <label>Start Date<span class=\"mandatory\">*</span></label>\r\n                    <div class=\"ui left icon input\">\r\n                      <input type=\"text\" placeholder=\"Start Date\" formControlName=\"t_startDate\" name=\"t_startDate\"\r\n                        value=\"\" required />\r\n                      <i class=\"icon\">\r\n                        <i class=\"fa fa-calendar-o bookings_input__placeholder-icon cal\" aria-hidden=\"true\"></i>\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"five wide field bookings_pickers\"\r\n                    [ngClass]=\"{'error': ((submitted && f.t_endDate.errors) && f.t_endDate.errors.required) }\">\r\n                    <label>End Date<span class=\"mandatory\">*</span></label>\r\n                    <div class=\"ui left icon input\">\r\n                      <input type=\"text\" placeholder=\"End Date\" formControlName=\"t_endDate\" name=\"t_endDate\"\r\n                        value=\"\" required />\r\n                      <i class=\"icon\">\r\n                        <i class=\"fa fa-calendar-o bookings_input__placeholder-icon cal\" aria-hidden=\"true\"></i>\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"fields text-right\">\r\n                  <div class=\"sixteen wide field btn-wrapper\">\r\n                    <div class=\"bookings_btn-panel\">\r\n                      <button class=\"ui primary reset button\" (click)=\"reset()\" title=\"Reset\">\r\n                        <i class=\"undo icon\"></i>\r\n                      </button>\r\n                      <button class=\"ui primary  button\">\r\n                        Search\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <!-- <div class=\"fields agent-name-booking\">\r\n          <div class=\"eight wide field ui small header\">Hotel Search Log</div> -->\r\n          <!-- <div class=\"ui divider\"></div> -->\r\n          <!-- <div class=\"eight wide field bookings_btn-panel\">\r\n            <button class=\"ui export button\" title=\"Export\">\r\n              Export\r\n            </button>\r\n          </div> -->\r\n        <!-- </div> -->\r\n        <div class=\"result-block\">\r\n          <div class=\"user-table-list b2c-list-user-table\">\r\n            <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n            [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='NewTransferSearchLog' [sortType]=\"'multi'\" [reorderable]=\"true\"\r\n            [externalPaging]=\"true\" [count]=\"totalTransferSearchLog\" [offset]=\"transferSearchPage\"\r\n            [sorts]=\"[{prop: 'created', dir: 'asc'}]\" (page)=\"pageCallback($event)\">\r\n            <ngx-datatable-column name=\"Agency Name\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <span *ngIf=\"row.organisation\">\r\n                  {{row.organisation.name}}\r\n                </span>\r\n              </ng-template>           \r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Username\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <span *ngIf=\"row.user\">\r\n                  {{row.user.username}}\r\n                </span>\r\n              </ng-template>  \r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Start Date\" prop=\"startDate\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"End Date\" prop=\"endDate\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Trip Type\" prop=\"tripType\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Pick Up\" prop=\"pickUp\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Drop Off\" prop=\"dropOff\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Date\" prop=\"created_at\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\">{{value | date: 'short'}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            </ngx-datatable>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>";
    /***/
  },

  /***/
  "./src/app/layout/report/search-log-report/search-activity/search-activity.component.scss":
  /*!************************************************************************************************!*\
    !*** ./src/app/layout/report/search-log-report/search-activity/search-activity.component.scss ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutReportSearchLogReportSearchActivitySearchActivityComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ui.segment form.report-form {\n  background: #fff;\n  padding: 0px !important;\n  margin: 24px;\n  border-radius: 4.96141px;\n}\n\n.bookings_pickers .input i.icon img {\n  margin-top: 10px;\n}\n\n.bookings_btn-panel {\n  margin-top: 22px;\n}\n\n.bookings_btn-panel button {\n  margin: 0px 8px;\n}\n\n.ui.icon.input > i.icon {\n  opacity: 1 !important;\n  z-index: 1;\n}\n\n.ui.icon.input > i.icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.ui.icon.input > i.icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n\n@media (max-width: 767px) {\n  .search-log-container {\n    margin: 8px !important;\n  }\n  .search-log-container form.report-form, .search-log-container .result-block {\n    margin: 0px 0px 24px !important;\n  }\n\n  .six.wide.field, .five.wide.field {\n    padding-bottom: 16px;\n  }\n}\n\n@media (max-width: 320px) {\n  .ui.form .fields .btn-wrapper .bookings_btn-panel .primary.button {\n    margin-right: 0px;\n  }\n  .ui.form .fields .btn-wrapper .bookings_btn-panel .reset.button {\n    min-width: 54px !important;\n    margin-bottom: 12px;\n    margin-right: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3JlcG9ydC9zZWFyY2gtbG9nLXJlcG9ydC9zZWFyY2gtYWN0aXZpdHkvRTpcXEJlbGFsXFxwcm9qZWN0c1xccHJvZHVjdGlvbi1idWlsZFxcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxyZXBvcnRcXHNlYXJjaC1sb2ctcmVwb3J0XFxzZWFyY2gtYWN0aXZpdHlcXHNlYXJjaC1hY3Rpdml0eS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3JlcG9ydC9zZWFyY2gtbG9nLXJlcG9ydC9zZWFyY2gtYWN0aXZpdHkvc2VhcmNoLWFjdGl2aXR5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFFQSx3QkFBQTtBQ0FKOztBREtZO0VBQ0ksZ0JBQUE7QUNGaEI7O0FET0E7RUFDSSxnQkFBQTtBQ0pKOztBREtJO0VBQ0ksZUFBQTtBQ0hSOztBRE1BO0VBQ0kscUJBQUE7RUFDQSxVQUFBO0FDSEo7O0FESUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0ZSOztBREdRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDRFo7O0FETUE7RUFDSTtJQUNJLHNCQUFBO0VDSE47RURJTTtJQUNJLCtCQUFBO0VDRlY7O0VES0U7SUFDSSxvQkFBQTtFQ0ZOO0FBQ0Y7O0FES0E7RUFLb0I7SUFDSSxpQkFBQTtFQ1B0QjtFRFNrQjtJQUNJLDBCQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtFQ1B0QjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3JlcG9ydC9zZWFyY2gtbG9nLXJlcG9ydC9zZWFyY2gtYWN0aXZpdHkvc2VhcmNoLWFjdGl2aXR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLnNlZ21lbnQgZm9ybS5yZXBvcnQtZm9ybSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDI0cHg7XHJcbiAgICAvLyBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDYsIDQwLCA5OCwgMC4xKSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNC45NjE0MXB4O1xyXG59XHJcbi5ib29raW5nc19waWNrZXJzIHtcclxuICAgIC5pbnB1dCB7XHJcbiAgICAgICAgaS5pY29uIHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmJvb2tpbmdzX2J0bi1wYW5lbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDBweCA4cHg7XHJcbiAgICB9XHJcbn1cclxuLnVpLmljb24uaW5wdXQ+aS5pY29uIHtcclxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICAmLmNhbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAuc2VhcmNoLWxvZy1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbjogOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9ybS5yZXBvcnQtZm9ybSwgLnJlc3VsdC1ibG9jayB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNpeC53aWRlLmZpZWxkLCAuZml2ZS53aWRlLmZpZWxkIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICAudWkuZm9ybSB7XHJcbiAgICAgICAgLmZpZWxkcyB7XHJcbiAgICAgICAgICAgIC5idG4td3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAuYm9va2luZ3NfYnRuLXBhbmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAucHJpbWFyeS5idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnJlc2V0LmJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIudWkuc2VnbWVudCBmb3JtLnJlcG9ydC1mb3JtIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMjRweDtcbiAgYm9yZGVyLXJhZGl1czogNC45NjE0MXB4O1xufVxuXG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgaS5pY29uIGltZyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5ib29raW5nc19idG4tcGFuZWwge1xuICBtYXJnaW4tdG9wOiAyMnB4O1xufVxuLmJvb2tpbmdzX2J0bi1wYW5lbCBidXR0b24ge1xuICBtYXJnaW46IDBweCA4cHg7XG59XG5cbi51aS5pY29uLmlucHV0ID4gaS5pY29uIHtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAxO1xufVxuLnVpLmljb24uaW5wdXQgPiBpLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcbiAgd2lkdGg6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi51aS5pY29uLmlucHV0ID4gaS5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbi5jYWwge1xuICB3aWR0aDogMThweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5zZWFyY2gtbG9nLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiA4cHggIWltcG9ydGFudDtcbiAgfVxuICAuc2VhcmNoLWxvZy1jb250YWluZXIgZm9ybS5yZXBvcnQtZm9ybSwgLnNlYXJjaC1sb2ctY29udGFpbmVyIC5yZXN1bHQtYmxvY2sge1xuICAgIG1hcmdpbjogMHB4IDBweCAyNHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuc2l4LndpZGUuZmllbGQsIC5maXZlLndpZGUuZmllbGQge1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLnVpLmZvcm0gLmZpZWxkcyAuYnRuLXdyYXBwZXIgLmJvb2tpbmdzX2J0bi1wYW5lbCAucHJpbWFyeS5idXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG4gIC51aS5mb3JtIC5maWVsZHMgLmJ0bi13cmFwcGVyIC5ib29raW5nc19idG4tcGFuZWwgLnJlc2V0LmJ1dHRvbiB7XG4gICAgbWluLXdpZHRoOiA1NHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/report/search-log-report/search-activity/search-activity.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/layout/report/search-log-report/search-activity/search-activity.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: SearchActivityComponent */

  /***/
  function srcAppLayoutReportSearchLogReportSearchActivitySearchActivityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchActivityComponent", function () {
      return SearchActivityComponent;
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

    var SearchActivityComponent = /*#__PURE__*/function () {
      function SearchActivityComponent(fb, newReportService, toastr) {
        _classCallCheck(this, SearchActivityComponent);

        this.fb = fb;
        this.newReportService = newReportService;
        this.toastr = toastr;
        this.NewActivitySearchLog = [];
        this.totalActivitySearchLog = 0;
        this.submitted = false;
        this.pages = 0;
        this.orgNames = [];
        this.pageSearch = 0;
        this.searchActivityForm = {
          page: this.pageSearch
        };
        this.offset = 0;
        this.activitySearchPage = 0;
        this.filterParams = {
          page: this.offset
        };
        this.searchActivityLogForm = this.fb.group({
          organisation_id: [''],
          start_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          end_date: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          page: 0
        });
      }

      _createClass(SearchActivityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fetchAllOrgNames();
          this.fetchAllActivityLogs(this.searchActivityForm);
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
        key: "loadStartDate",
        value: function loadStartDate() {
          var scope = this;
          $(function () {
            $('input[name="start_date"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1901,
              startDate: moment(),
              autoUpdateInput: false
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.searchActivityLogForm.get('a_startDate').setValue(moment(start).format('DD/MM/YYYY'));
            });
          });
        }
      }, {
        key: "loadEndDate",
        value: function loadEndDate() {
          var scope = this;
          $(function () {
            $('input[name="end_date"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1901,
              startDate: moment(),
              minDate: moment(),
              autoUpdateInput: false
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.searchActivityLogForm.get('a_endDate').setValue(moment(start).format('DD/MM/YYYY'));
            });
          });
        }
      }, {
        key: "fetchAllOrgNames",
        value: function fetchAllOrgNames() {
          var _this = this;

          this.newReportService.GetAllOrganization().subscribe(function (res) {
            _this.orgNames = res.result.data;

            if (res.status) {
              if (res.result.length != 0) {
                _this.orgNames = res.result.data;
              } else {
                _this.toastr.info("There is no data available to display", "", {
                  timeOut: 1000,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });
              }
            } else {
              _this.toastr.error("".concat(res.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "fetchAllActivityLogs",
        value: function fetchAllActivityLogs(params) {
          var _this2 = this;

          this.newReportService.GetAllActivityLogs(params).subscribe(function (res) {
            if (res.status) {
              _this2.totalActivitySearchLog = res.totalResult;
              _this2.activitySearchPage = res.page;
              _this2.NewActivitySearchLog = res.result;
            }
          });
        }
      }, {
        key: "pageCallback",
        value: function pageCallback(event) {
          var offset = event.offset;
          this.searchActivityForm.page = offset;
          this.fetchAllActivityLogs(this.searchActivityForm);
        }
      }, {
        key: "activitySearchLog",
        value: function activitySearchLog() {
          var _this3 = this;

          this.submitted = true;

          if (this.searchActivityLogForm.invalid) {
            return;
          }

          this.newReportService.GetAllActivityLogs(this.searchActivityLogForm.value).subscribe(function (res) {
            if (res.status) {
              if (res.result.length) {
                _this3.totalActivitySearchLog = res.totalResult;
                _this3.activitySearchPage = res.page;
                _this3.NewActivitySearchLog = res.result;
              } else {
                _this3.toastr.info("There is no data Available to display", "".concat(res.message), {
                  timeOut: 2000,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });
              }
            } else {
              _this3.toastr.error("".concat(res.message), "", {
                timeOut: 2000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "reset",
        value: function reset() {
          this.searchActivityLogForm.reset();
        }
      }, {
        key: "f",
        get: function get() {
          return this.searchActivityLogForm.controls;
        }
      }]);

      return SearchActivityComponent;
    }();

    SearchActivityComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    SearchActivityComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search-activity',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./search-activity.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/search-log-report/search-activity/search-activity.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./search-activity.component.scss */
      "./src/app/layout/report/search-log-report/search-activity/search-activity.component.scss"))["default"]]
    })], SearchActivityComponent);
    /***/
  },

  /***/
  "./src/app/layout/report/search-log-report/search-car/search-car.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/layout/report/search-log-report/search-car/search-car.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutReportSearchLogReportSearchCarSearchCarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ui.segment form.report-form {\n  background: #fff;\n  padding: 0px !important;\n  margin: 24px;\n  border-radius: 4.96141px;\n}\n\n.bookings_pickers .input i.icon img {\n  margin-top: 10px;\n}\n\n.bookings_btn-panel {\n  margin-top: 22px;\n}\n\n.bookings_btn-panel button {\n  margin: 0px 8px;\n}\n\n.ui.icon.input > i.icon {\n  opacity: 1 !important;\n  z-index: 1;\n}\n\n.ui.icon.input > i.icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.ui.icon.input > i.icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n\n@media (max-width: 767px) {\n  .search-log-container {\n    margin: 8px !important;\n  }\n  .search-log-container form.report-form, .search-log-container .result-block {\n    margin: 0px 0px 24px !important;\n  }\n\n  .six.wide.field, .five.wide.field {\n    padding-bottom: 16px;\n  }\n}\n\n@media (max-width: 320px) {\n  .ui.form .fields .btn-wrapper .bookings_btn-panel .primary.button {\n    margin-right: 0px;\n  }\n  .ui.form .fields .btn-wrapper .bookings_btn-panel .reset.button {\n    min-width: 54px !important;\n    margin-bottom: 12px;\n    margin-right: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3JlcG9ydC9zZWFyY2gtbG9nLXJlcG9ydC9zZWFyY2gtY2FyL0U6XFxCZWxhbFxccHJvamVjdHNcXHByb2R1Y3Rpb24tYnVpbGRcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxccmVwb3J0XFxzZWFyY2gtbG9nLXJlcG9ydFxcc2VhcmNoLWNhclxcc2VhcmNoLWNhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3JlcG9ydC9zZWFyY2gtbG9nLXJlcG9ydC9zZWFyY2gtY2FyL3NlYXJjaC1jYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUVBLHdCQUFBO0FDQUo7O0FES1k7RUFDSSxnQkFBQTtBQ0ZoQjs7QURPQTtFQUNJLGdCQUFBO0FDSko7O0FES0k7RUFDSSxlQUFBO0FDSFI7O0FETUE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7QUNISjs7QURJSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDRlI7O0FER1E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNEWjs7QURNQTtFQUNJO0lBQ0ksc0JBQUE7RUNITjtFRElNO0lBQ0ksK0JBQUE7RUNGVjs7RURLRTtJQUNJLG9CQUFBO0VDRk47QUFDRjs7QURLQTtFQUtvQjtJQUNJLGlCQUFBO0VDUHRCO0VEU2tCO0lBQ0ksMEJBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0VDUHRCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcmVwb3J0L3NlYXJjaC1sb2ctcmVwb3J0L3NlYXJjaC1jYXIvc2VhcmNoLWNhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS5zZWdtZW50IGZvcm0ucmVwb3J0LWZvcm0ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAyNHB4O1xyXG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSg2LCA0MCwgOTgsIDAuMSkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQuOTYxNDFweDtcclxufVxyXG4uYm9va2luZ3NfcGlja2VycyB7XHJcbiAgICAuaW5wdXQge1xyXG4gICAgICAgIGkuaWNvbiB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5ib29raW5nc19idG4tcGFuZWwge1xyXG4gICAgbWFyZ2luLXRvcDogMjJweDtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggOHB4O1xyXG4gICAgfVxyXG59XHJcbi51aS5pY29uLmlucHV0PmkuaWNvbiB7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgJi5jYWwge1xyXG4gICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLnNlYXJjaC1sb2ctY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW46IDhweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvcm0ucmVwb3J0LWZvcm0sIC5yZXN1bHQtYmxvY2sge1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCAwcHggMjRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zaXgud2lkZS5maWVsZCwgLmZpdmUud2lkZS5maWVsZCB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAgLnVpLmZvcm0ge1xyXG4gICAgICAgIC5maWVsZHMge1xyXG4gICAgICAgICAgICAuYnRuLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgLmJvb2tpbmdzX2J0bi1wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnByaW1hcnkuYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXNldC5idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDU0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLnVpLnNlZ21lbnQgZm9ybS5yZXBvcnQtZm9ybSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDQuOTYxNDFweDtcbn1cblxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IGkuaWNvbiBpbWcge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYm9va2luZ3NfYnRuLXBhbmVsIHtcbiAgbWFyZ2luLXRvcDogMjJweDtcbn1cbi5ib29raW5nc19idG4tcGFuZWwgYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHggOHB4O1xufVxuXG4udWkuaWNvbi5pbnB1dCA+IGkuaWNvbiB7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgei1pbmRleDogMTtcbn1cbi51aS5pY29uLmlucHV0ID4gaS5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4udWkuaWNvbi5pbnB1dCA+IGkuaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsIHtcbiAgd2lkdGg6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc2VhcmNoLWxvZy1jb250YWluZXIge1xuICAgIG1hcmdpbjogOHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNlYXJjaC1sb2ctY29udGFpbmVyIGZvcm0ucmVwb3J0LWZvcm0sIC5zZWFyY2gtbG9nLWNvbnRhaW5lciAucmVzdWx0LWJsb2NrIHtcbiAgICBtYXJnaW46IDBweCAwcHggMjRweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNpeC53aWRlLmZpZWxkLCAuZml2ZS53aWRlLmZpZWxkIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC51aS5mb3JtIC5maWVsZHMgLmJ0bi13cmFwcGVyIC5ib29raW5nc19idG4tcGFuZWwgLnByaW1hcnkuYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgfVxuICAudWkuZm9ybSAuZmllbGRzIC5idG4td3JhcHBlciAuYm9va2luZ3NfYnRuLXBhbmVsIC5yZXNldC5idXR0b24ge1xuICAgIG1pbi13aWR0aDogNTRweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/report/search-log-report/search-car/search-car.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/layout/report/search-log-report/search-car/search-car.component.ts ***!
    \************************************************************************************/

  /*! exports provided: SearchCarComponent */

  /***/
  function srcAppLayoutReportSearchLogReportSearchCarSearchCarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchCarComponent", function () {
      return SearchCarComponent;
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

    var SearchCarComponent = /*#__PURE__*/function () {
      function SearchCarComponent(fb, newReportService, toastr) {
        var _this4 = this;

        _classCallCheck(this, SearchCarComponent);

        this.fb = fb;
        this.newReportService = newReportService;
        this.toastr = toastr;
        this.NewCarSearchLog = [];
        this.totalCarSearchLog = 0;
        this.submitted = false;
        this.pages = 0;
        this.orgNames = [];
        this.pageSearch = 0;
        this.searchCarForm = {
          page: this.pageSearch
        };
        this.carSearchPage = 0;
        this.searchCarLogForm = this.fb.group({
          organisation_id: [''],
          c_startDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          c_endDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });

        this.loadStartDate = function () {
          var scope = _this4;
          $(function () {
            $('input[name="c_startDate"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1901,
              startDate: moment(),
              maxDate: moment(),
              autoUpdateInput: false
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.searchCarLogForm.get('c_startDate').setValue(moment(start).format('DD/MM/YYYY'));
            });
          });
        };

        this.loadEndDate = function () {
          var scope = _this4;
          $(function () {
            $('input[name="c_endDate"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1901,
              startDate: moment(),
              minDate: moment(),
              autoUpdateInput: false
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.searchCarLogForm.get('c_endDate').setValue(moment(start).format('DD/MM/YYYY'));
            });
          });
        };
      }

      _createClass(SearchCarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fetchAllOrgNames();
          this.fetchAllCarLogs();
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
        key: "fetchAllOrgNames",
        value: function fetchAllOrgNames() {
          var _this5 = this;

          this.newReportService.GetAllOrganization().subscribe(function (res) {
            _this5.orgNames = res.result.data;

            if (res.status) {
              if (res.result.length != 0) {
                _this5.orgNames = res.result.data;
              } else {
                _this5.toastr.info("There is no data available to display", "", {
                  timeOut: 1000,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });
              }
            } else {
              _this5.toastr.error("".concat(res.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "fetchAllCarLogs",
        value: function fetchAllCarLogs() {
          var _this6 = this;

          this.newReportService.GetAllCarLogs(this.searchCarForm).subscribe(function (res) {
            if (res.status) {
              _this6.totalCarSearchLog = res.totalResult;
              _this6.carSearchPage = res.page;
              _this6.NewCarSearchLog = res.result;
            }
          });
        }
      }, {
        key: "pageCallback",
        value: function pageCallback(event) {
          var offset = event.offset;
          this.searchCarForm.page = offset;
          this.fetchAllCarLogs();
        }
      }, {
        key: "carSearchLog",
        value: function carSearchLog() {
          var _this7 = this;

          this.submitted = true;

          if (this.searchCarLogForm.invalid) {
            return;
          }

          this.newReportService.GetAllCarLogs(this.searchCarLogForm.value).subscribe(function (res) {
            if (res.status) {
              if (res.result.length) {
                _this7.totalCarSearchLog = res.totalResult;
                _this7.carSearchPage = res.page;
                _this7.NewCarSearchLog = res.result;
              } else {
                _this7.toastr.info("There is no data Available to display", "".concat(res.message), {
                  timeOut: 2000,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });
              }
            } else {
              _this7.NewCarSearchLog = [];

              _this7.toastr.error("".concat(res.message), "", {
                timeOut: 2000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "reset",
        value: function reset() {
          this.searchCarLogForm.reset();
        }
      }, {
        key: "f",
        get: function get() {
          return this.searchCarLogForm.controls;
        }
      }]);

      return SearchCarComponent;
    }();

    SearchCarComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    SearchCarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search-car',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./search-car.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/search-log-report/search-car/search-car.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./search-car.component.scss */
      "./src/app/layout/report/search-log-report/search-car/search-car.component.scss"))["default"]]
    })], SearchCarComponent);
    /***/
  },

  /***/
  "./src/app/layout/report/search-log-report/search-flight-log/search-flight-log.component.scss":
  /*!****************************************************************************************************!*\
    !*** ./src/app/layout/report/search-log-report/search-flight-log/search-flight-log.component.scss ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutReportSearchLogReportSearchFlightLogSearchFlightLogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ui.segment form.report-form {\n  background: #fff;\n  padding: 0px !important;\n  margin: 24px;\n  border-radius: 4.96141px;\n}\n\n.bookings_pickers .input i.icon img {\n  margin-top: 10px;\n}\n\n.bookings_btn-panel {\n  margin-top: 22px;\n}\n\n.bookings_btn-panel button {\n  margin: 0px 8px;\n}\n\n.ui.icon.input > i.icon {\n  opacity: 1 !important;\n  z-index: 1;\n}\n\n.ui.icon.input > i.icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.ui.icon.input > i.icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n\n@media (max-width: 767px) {\n  .search-log-container {\n    margin: 8px !important;\n  }\n  .search-log-container form.report-form, .search-log-container .result-block {\n    margin: 0px 0px 24px !important;\n  }\n\n  .six.wide.field, .five.wide.field {\n    padding-bottom: 16px;\n  }\n}\n\n@media (max-width: 320px) {\n  .ui.form .fields .btn-wrapper .bookings_btn-panel .primary.button {\n    margin-right: 0px;\n  }\n  .ui.form .fields .btn-wrapper .bookings_btn-panel .reset.button {\n    min-width: 54px !important;\n    margin-bottom: 12px;\n    margin-right: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3JlcG9ydC9zZWFyY2gtbG9nLXJlcG9ydC9zZWFyY2gtZmxpZ2h0LWxvZy9FOlxcQmVsYWxcXHByb2plY3RzXFxwcm9kdWN0aW9uLWJ1aWxkXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHJlcG9ydFxcc2VhcmNoLWxvZy1yZXBvcnRcXHNlYXJjaC1mbGlnaHQtbG9nXFxzZWFyY2gtZmxpZ2h0LWxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3JlcG9ydC9zZWFyY2gtbG9nLXJlcG9ydC9zZWFyY2gtZmxpZ2h0LWxvZy9zZWFyY2gtZmxpZ2h0LWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBRUEsd0JBQUE7QUNBSjs7QURLWTtFQUNJLGdCQUFBO0FDRmhCOztBRE9BO0VBQ0ksZ0JBQUE7QUNKSjs7QURLSTtFQUNJLGVBQUE7QUNIUjs7QURNQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtBQ0hKOztBRElJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNGUjs7QURHUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0RaOztBRE1BO0VBQ0k7SUFDSSxzQkFBQTtFQ0hOO0VESU07SUFDSSwrQkFBQTtFQ0ZWOztFREtFO0lBQ0ksb0JBQUE7RUNGTjtBQUNGOztBREtBO0VBS29CO0lBQ0ksaUJBQUE7RUNQdEI7RURTa0I7SUFDSSwwQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7RUNQdEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9yZXBvcnQvc2VhcmNoLWxvZy1yZXBvcnQvc2VhcmNoLWZsaWdodC1sb2cvc2VhcmNoLWZsaWdodC1sb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWkuc2VnbWVudCBmb3JtLnJlcG9ydC1mb3JtIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMjRweDtcclxuICAgIC8vIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoNiwgNDAsIDk4LCAwLjEpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0Ljk2MTQxcHg7XHJcbn1cclxuLmJvb2tpbmdzX3BpY2tlcnMge1xyXG4gICAgLmlucHV0IHtcclxuICAgICAgICBpLmljb24ge1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uYm9va2luZ3NfYnRuLXBhbmVsIHtcclxuICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDhweDtcclxuICAgIH1cclxufVxyXG4udWkuaWNvbi5pbnB1dD5pLmljb24ge1xyXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgICYuY2FsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5zZWFyY2gtbG9nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luOiA4cHggIWltcG9ydGFudDtcclxuICAgICAgICBmb3JtLnJlcG9ydC1mb3JtLCAucmVzdWx0LWJsb2NrIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggMHB4IDI0cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2l4LndpZGUuZmllbGQsIC5maXZlLndpZGUuZmllbGQge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAgIC51aS5mb3JtIHtcclxuICAgICAgICAuZmllbGRzIHtcclxuICAgICAgICAgICAgLmJ0bi13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgIC5ib29raW5nc19idG4tcGFuZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIC5wcmltYXJ5LmJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucmVzZXQuYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA1NHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi51aS5zZWdtZW50IGZvcm0ucmVwb3J0LWZvcm0ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA0Ljk2MTQxcHg7XG59XG5cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCBpLmljb24gaW1nIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmJvb2tpbmdzX2J0bi1wYW5lbCB7XG4gIG1hcmdpbi10b3A6IDIycHg7XG59XG4uYm9va2luZ3NfYnRuLXBhbmVsIGJ1dHRvbiB7XG4gIG1hcmdpbjogMHB4IDhweDtcbn1cblxuLnVpLmljb24uaW5wdXQgPiBpLmljb24ge1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDE7XG59XG4udWkuaWNvbi5pbnB1dCA+IGkuaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xuICB3aWR0aDogMjRweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLnVpLmljb24uaW5wdXQgPiBpLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbCB7XG4gIHdpZHRoOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnNlYXJjaC1sb2ctY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDhweCAhaW1wb3J0YW50O1xuICB9XG4gIC5zZWFyY2gtbG9nLWNvbnRhaW5lciBmb3JtLnJlcG9ydC1mb3JtLCAuc2VhcmNoLWxvZy1jb250YWluZXIgLnJlc3VsdC1ibG9jayB7XG4gICAgbWFyZ2luOiAwcHggMHB4IDI0cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zaXgud2lkZS5maWVsZCwgLmZpdmUud2lkZS5maWVsZCB7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xuICAudWkuZm9ybSAuZmllbGRzIC5idG4td3JhcHBlciAuYm9va2luZ3NfYnRuLXBhbmVsIC5wcmltYXJ5LmJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIH1cbiAgLnVpLmZvcm0gLmZpZWxkcyAuYnRuLXdyYXBwZXIgLmJvb2tpbmdzX2J0bi1wYW5lbCAucmVzZXQuYnV0dG9uIHtcbiAgICBtaW4td2lkdGg6IDU0cHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/layout/report/search-log-report/search-flight-log/search-flight-log.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/layout/report/search-log-report/search-flight-log/search-flight-log.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: SearchFlightLogComponent */

  /***/
  function srcAppLayoutReportSearchLogReportSearchFlightLogSearchFlightLogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchFlightLogComponent", function () {
      return SearchFlightLogComponent;
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

    var SearchFlightLogComponent = /*#__PURE__*/function () {
      function SearchFlightLogComponent(fb, newReportService, toastr) {
        var _this8 = this;

        _classCallCheck(this, SearchFlightLogComponent);

        this.fb = fb;
        this.newReportService = newReportService;
        this.toastr = toastr;
        this.NewFlightSearchLog = [];
        this.totalFlightSearchLog = 0;
        this.submitted = false;
        this.pages = 0;
        this.orgNames = [];
        this.pageSearch = 0;
        this.searchFlightForm = {
          page: this.pageSearch,
          limit: 30
        };
        this.flightSearchPage = 0;
        this.searchFlightLogForm = this.fb.group({
          organisation_id: [''],
          f_startDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          f_endDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });

        this.loadEndDate = function () {
          var scope = _this8;
          $(function () {
            $('input[name="f_endDate"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1901,
              startDate: moment(),
              minDate: moment(),
              autoUpdateInput: false
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.searchFlightLogForm.get('f_endDate').setValue(moment(start).format('DD/MM/YYYY'));
            });
          });
        };
      }

      _createClass(SearchFlightLogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fetchAllOrgNames();
          this.fetchAllFlightLogs();
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
        key: "loadStartDate",
        value: function loadStartDate() {
          var scope = this;
          $(function () {
            $('input[name="f_startDate"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1901,
              startDate: moment(),
              autoUpdateInput: false
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.searchFlightLogForm.get('f_startDate').setValue(moment(start).format('DD/MM/YYYY'));
            });
          });
        }
      }, {
        key: "fetchAllOrgNames",
        value: function fetchAllOrgNames() {
          var _this9 = this;

          this.newReportService.GetAllOrganization().subscribe(function (res) {
            _this9.orgNames = res.result.data;

            if (res.status) {
              if (res.result.length != 0) {
                _this9.orgNames = res.result.data;
              } else {
                _this9.toastr.info("There is no data available to display", "", {
                  timeOut: 1000,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });
              }
            } else {
              _this9.toastr.error("".concat(res.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "fetchAllFlightLogs",
        value: function fetchAllFlightLogs() {
          var _this10 = this;

          this.newReportService.GetAllFlightLogs(this.searchFlightForm).subscribe(function (res) {
            _this10.totalFlightSearchLog = res.totalResult;
            _this10.flightSearchPage = res.page;

            if (res.status) {
              if (res.result.length != 0) {
                res.result.map(function (ele) {
                  ele.location_details = ele.stream.LocationsDetail;

                  if (ele.location_details != null) {
                    ele.location_details.forEach(function (filteredLoc) {
                      _this10.departure_details = filteredLoc.departure;
                      _this10.arrival_details = filteredLoc.arrival;
                    });
                    ele.departure_airport_code = _this10.departure_details.airport_code;
                    ele.arrival_airport_code = _this10.arrival_details.airport_code;
                  }
                });
                _this10.NewFlightSearchLog = res.result;
              } else {
                _this10.toastr.info("There is no data Available to display", "".concat(res.message), {
                  timeOut: 2000,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });
              }
            }
          });
        }
      }, {
        key: "pageCallback",
        value: function pageCallback(event) {
          var offset = event.offset;
          this.searchFlightForm.page = offset;
          this.fetchAllFlightLogs();
        }
      }, {
        key: "flightSearchLog",
        value: function flightSearchLog() {
          var _this11 = this;

          this.submitted = true;

          if (this.searchFlightLogForm.invalid) {
            return;
          }

          this.newReportService.GetAllFlightLogs(this.searchFlightLogForm.value).subscribe(function (res) {
            if (res.status) {
              // if(res.result.length){
              //   this.totalFlightSearchLog = res.totalResult;
              //   this.flightSearchPage = res.page;
              //   this.NewFlightSearchLog = res.result;
              // }
              if (res.result.length != 0) {
                res.result.map(function (ele) {
                  ele.location_details = ele.stream.LocationsDetail;

                  if (ele.location_details != null) {
                    ele.location_details.forEach(function (filteredLoc) {
                      _this11.departure_details = filteredLoc.departure;
                      _this11.arrival_details = filteredLoc.arrival;
                    });
                    ele.departure_airport_code = _this11.departure_details.airport_code;
                    ele.arrival_airport_code = _this11.arrival_details.airport_code;
                  }
                });
                _this11.NewFlightSearchLog = res.result;
              } else {
                _this11.toastr.info("There is no data Available to display", "".concat(res.message), {
                  timeOut: 2000,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });
              }
            } else {
              _this11.toastr.error("".concat(res.message), "", {
                timeOut: 2000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "reset",
        value: function reset() {
          this.searchFlightLogForm.reset();
        }
      }, {
        key: "f",
        get: function get() {
          return this.searchFlightLogForm.controls;
        }
      }]);

      return SearchFlightLogComponent;
    }();

    SearchFlightLogComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    SearchFlightLogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search-flight-log',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./search-flight-log.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/search-log-report/search-flight-log/search-flight-log.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./search-flight-log.component.scss */
      "./src/app/layout/report/search-log-report/search-flight-log/search-flight-log.component.scss"))["default"]]
    })], SearchFlightLogComponent);
    /***/
  },

  /***/
  "./src/app/layout/report/search-log-report/search-insurance/search-insurance.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/layout/report/search-log-report/search-insurance/search-insurance.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutReportSearchLogReportSearchInsuranceSearchInsuranceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ui.segment form.report-form {\n  background: #fff;\n  padding: 0px !important;\n  margin: 24px;\n  border-radius: 4.96141px;\n}\n\n.bookings_pickers .input i.icon img {\n  margin-top: 10px;\n}\n\n.bookings_btn-panel {\n  margin-top: 22px;\n}\n\n.bookings_btn-panel button {\n  margin: 0px 8px;\n}\n\n.ui.icon.input > i.icon {\n  opacity: 1 !important;\n  z-index: 1;\n}\n\n.ui.icon.input > i.icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.ui.icon.input > i.icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n\n@media (max-width: 767px) {\n  .search-log-container {\n    margin: 8px !important;\n  }\n  .search-log-container form.report-form, .search-log-container .result-block {\n    margin: 0px 0px 24px !important;\n  }\n\n  .six.wide.field, .five.wide.field {\n    padding-bottom: 16px;\n  }\n}\n\n@media (max-width: 320px) {\n  .ui.form .fields .btn-wrapper .bookings_btn-panel .primary.button {\n    margin-right: 0px;\n  }\n  .ui.form .fields .btn-wrapper .bookings_btn-panel .reset.button {\n    min-width: 54px !important;\n    margin-bottom: 12px;\n    margin-right: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3JlcG9ydC9zZWFyY2gtbG9nLXJlcG9ydC9zZWFyY2gtaW5zdXJhbmNlL0U6XFxCZWxhbFxccHJvamVjdHNcXHByb2R1Y3Rpb24tYnVpbGRcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxccmVwb3J0XFxzZWFyY2gtbG9nLXJlcG9ydFxcc2VhcmNoLWluc3VyYW5jZVxcc2VhcmNoLWluc3VyYW5jZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3JlcG9ydC9zZWFyY2gtbG9nLXJlcG9ydC9zZWFyY2gtaW5zdXJhbmNlL3NlYXJjaC1pbnN1cmFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUVBLHdCQUFBO0FDQUo7O0FES1k7RUFDSSxnQkFBQTtBQ0ZoQjs7QURPQTtFQUNJLGdCQUFBO0FDSko7O0FES0k7RUFDSSxlQUFBO0FDSFI7O0FETUE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7QUNISjs7QURJSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDRlI7O0FER1E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNEWjs7QURNQTtFQUNJO0lBQ0ksc0JBQUE7RUNITjtFRElNO0lBQ0ksK0JBQUE7RUNGVjs7RURLRTtJQUNJLG9CQUFBO0VDRk47QUFDRjs7QURLQTtFQUtvQjtJQUNJLGlCQUFBO0VDUHRCO0VEU2tCO0lBQ0ksMEJBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0VDUHRCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcmVwb3J0L3NlYXJjaC1sb2ctcmVwb3J0L3NlYXJjaC1pbnN1cmFuY2Uvc2VhcmNoLWluc3VyYW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS5zZWdtZW50IGZvcm0ucmVwb3J0LWZvcm0ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAyNHB4O1xyXG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSg2LCA0MCwgOTgsIDAuMSkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQuOTYxNDFweDtcclxufVxyXG4uYm9va2luZ3NfcGlja2VycyB7XHJcbiAgICAuaW5wdXQge1xyXG4gICAgICAgIGkuaWNvbiB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5ib29raW5nc19idG4tcGFuZWwge1xyXG4gICAgbWFyZ2luLXRvcDogMjJweDtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggOHB4O1xyXG4gICAgfVxyXG59XHJcbi51aS5pY29uLmlucHV0PmkuaWNvbiB7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgJi5jYWwge1xyXG4gICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLnNlYXJjaC1sb2ctY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW46IDhweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvcm0ucmVwb3J0LWZvcm0sIC5yZXN1bHQtYmxvY2sge1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCAwcHggMjRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zaXgud2lkZS5maWVsZCwgLmZpdmUud2lkZS5maWVsZCB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAgLnVpLmZvcm0ge1xyXG4gICAgICAgIC5maWVsZHMge1xyXG4gICAgICAgICAgICAuYnRuLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgLmJvb2tpbmdzX2J0bi1wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnByaW1hcnkuYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXNldC5idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDU0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLnVpLnNlZ21lbnQgZm9ybS5yZXBvcnQtZm9ybSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDQuOTYxNDFweDtcbn1cblxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IGkuaWNvbiBpbWcge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYm9va2luZ3NfYnRuLXBhbmVsIHtcbiAgbWFyZ2luLXRvcDogMjJweDtcbn1cbi5ib29raW5nc19idG4tcGFuZWwgYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHggOHB4O1xufVxuXG4udWkuaWNvbi5pbnB1dCA+IGkuaWNvbiB7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgei1pbmRleDogMTtcbn1cbi51aS5pY29uLmlucHV0ID4gaS5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4udWkuaWNvbi5pbnB1dCA+IGkuaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsIHtcbiAgd2lkdGg6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc2VhcmNoLWxvZy1jb250YWluZXIge1xuICAgIG1hcmdpbjogOHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNlYXJjaC1sb2ctY29udGFpbmVyIGZvcm0ucmVwb3J0LWZvcm0sIC5zZWFyY2gtbG9nLWNvbnRhaW5lciAucmVzdWx0LWJsb2NrIHtcbiAgICBtYXJnaW46IDBweCAwcHggMjRweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNpeC53aWRlLmZpZWxkLCAuZml2ZS53aWRlLmZpZWxkIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC51aS5mb3JtIC5maWVsZHMgLmJ0bi13cmFwcGVyIC5ib29raW5nc19idG4tcGFuZWwgLnByaW1hcnkuYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgfVxuICAudWkuZm9ybSAuZmllbGRzIC5idG4td3JhcHBlciAuYm9va2luZ3NfYnRuLXBhbmVsIC5yZXNldC5idXR0b24ge1xuICAgIG1pbi13aWR0aDogNTRweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/report/search-log-report/search-insurance/search-insurance.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/layout/report/search-log-report/search-insurance/search-insurance.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: SearchInsuranceComponent */

  /***/
  function srcAppLayoutReportSearchLogReportSearchInsuranceSearchInsuranceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchInsuranceComponent", function () {
      return SearchInsuranceComponent;
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

    var SearchInsuranceComponent = /*#__PURE__*/function () {
      function SearchInsuranceComponent(fb, newReportService, toastr) {
        var _this12 = this;

        _classCallCheck(this, SearchInsuranceComponent);

        this.fb = fb;
        this.newReportService = newReportService;
        this.toastr = toastr;
        this.NewInsuranceSearchLog = [];
        this.totalInsuranceSearchLog = 0;
        this.submitted = false;
        this.pages = 0;
        this.orgNames = [];
        this.pageSearch = 0;
        this.searchInsuranceForm = {
          page: this.pageSearch
        };
        this.insuranceSearchPage = 0;
        this.searchInsuranceLogForm = this.fb.group({
          organisation_id: [''],
          startDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          endDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });

        this.loadStartDate = function () {
          var scope = _this12;
          $(function () {
            $('input[name="startDate"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1901,
              startDate: moment(),
              maxDate: moment(),
              autoUpdateInput: false
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.searchInsuranceLogForm.get('startDate').setValue(moment(start).format('DD/MM/YYYY'));
            });
          });
        };

        this.loadEndDate = function () {
          var scope = _this12;
          $(function () {
            $('input[name="endDate"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1901,
              startDate: moment(),
              minDate: moment(),
              autoUpdateInput: false
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.searchInsuranceLogForm.get('endDate').setValue(moment(start).format('DD/MM/YYYY'));
            });
          });
        };
      }

      _createClass(SearchInsuranceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fetchAllOrgNames();
          this.fetchAllInsuranceLogs();
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
        key: "fetchAllOrgNames",
        value: function fetchAllOrgNames() {
          var _this13 = this;

          this.newReportService.GetAllOrganization().subscribe(function (res) {
            _this13.orgNames = res.result.data;

            if (res.status) {
              if (res.result.length != 0) {
                _this13.orgNames = res.result.data;
              } else {
                _this13.toastr.info("There is no data available to display", "", {
                  timeOut: 1000,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });
              }
            } else {
              _this13.toastr.error("".concat(res.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "fetchAllInsuranceLogs",
        value: function fetchAllInsuranceLogs() {
          var _this14 = this;

          this.newReportService.GetAllInsuranceLogs(this.searchInsuranceForm).subscribe(function (res) {
            if (res.status) {
              _this14.totalInsuranceSearchLog = res.totalResult;
              _this14.insuranceSearchPage = res.page;
              _this14.NewInsuranceSearchLog = res.result;
            }
          });
        }
      }, {
        key: "pageCallback",
        value: function pageCallback(event) {
          var offset = event.offset;
          this.searchInsuranceForm.page = offset;
          this.fetchAllInsuranceLogs();
        }
      }, {
        key: "insuranceSearchLog",
        value: function insuranceSearchLog() {
          var _this15 = this;

          this.submitted = true;

          if (this.searchInsuranceLogForm.invalid) {
            return;
          }

          this.newReportService.GetAllInsuranceLogs(this.searchInsuranceLogForm.value).subscribe(function (res) {
            if (res.status) {
              if (res.result.length) {
                _this15.totalInsuranceSearchLog = res.totalResult;
                _this15.insuranceSearchPage = res.page;
                _this15.NewInsuranceSearchLog = res.result;
              } else {
                _this15.toastr.info("There is no data Available to display", "".concat(res.message), {
                  timeOut: 2000,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });
              }
            } else {
              _this15.toastr.error("".concat(res.message), "", {
                timeOut: 2000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "reset",
        value: function reset() {
          this.searchInsuranceLogForm.reset();
        }
      }, {
        key: "f",
        get: function get() {
          return this.searchInsuranceLogForm.controls;
        }
      }]);

      return SearchInsuranceComponent;
    }();

    SearchInsuranceComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    SearchInsuranceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search-insurance',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./search-insurance.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/search-log-report/search-insurance/search-insurance.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./search-insurance.component.scss */
      "./src/app/layout/report/search-log-report/search-insurance/search-insurance.component.scss"))["default"]]
    })], SearchInsuranceComponent);
    /***/
  },

  /***/
  "./src/app/layout/report/search-log-report/search-log-report-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/layout/report/search-log-report/search-log-report-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: SearchLogReportRoutingModule */

  /***/
  function srcAppLayoutReportSearchLogReportSearchLogReportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchLogReportRoutingModule", function () {
      return SearchLogReportRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _search_log_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./search-log-report.component */
    "./src/app/layout/report/search-log-report/search-log-report.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _search_flight_log_search_flight_log_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./search-flight-log/search-flight-log.component */
    "./src/app/layout/report/search-log-report/search-flight-log/search-flight-log.component.ts");
    /* harmony import */


    var _search_car_search_car_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./search-car/search-car.component */
    "./src/app/layout/report/search-log-report/search-car/search-car.component.ts");
    /* harmony import */


    var _search_transfers_search_transfers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./search-transfers/search-transfers.component */
    "./src/app/layout/report/search-log-report/search-transfers/search-transfers.component.ts");
    /* harmony import */


    var _search_activity_search_activity_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./search-activity/search-activity.component */
    "./src/app/layout/report/search-log-report/search-activity/search-activity.component.ts"); // import { SearchHotelComponent } from './search-hotel/search-hotel.component';


    var routes = [{
      path: '',
      component: _search_log_report_component__WEBPACK_IMPORTED_MODULE_1__["SearchLogReportComponent"],
      children: [{
        path: '',
        redirectTo: 'flight-view',
        pathMatch: 'prefix'
      }, {
        path: 'flight-view',
        component: _search_flight_log_search_flight_log_component__WEBPACK_IMPORTED_MODULE_4__["SearchFlightLogComponent"]
      }, // {path:'hotel-view',component:SearchHotelComponent},
      {
        path: 'car-view',
        component: _search_car_search_car_component__WEBPACK_IMPORTED_MODULE_5__["SearchCarComponent"]
      }, {
        path: 'transfer-view',
        component: _search_transfers_search_transfers_component__WEBPACK_IMPORTED_MODULE_6__["SearchTransfersComponent"]
      }, {
        path: 'activity-view',
        component: _search_activity_search_activity_component__WEBPACK_IMPORTED_MODULE_7__["SearchActivityComponent"]
      }]
    }];

    var SearchLogReportRoutingModule = function SearchLogReportRoutingModule() {
      _classCallCheck(this, SearchLogReportRoutingModule);
    };

    SearchLogReportRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], SearchLogReportRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/report/search-log-report/search-log-report.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/layout/report/search-log-report/search-log-report.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutReportSearchLogReportSearchLogReportComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n.ui.form .bookings_btn-panel {\n  padding: 20px 2px;\n}\n.ui.form .bookings_btn-panel .reset.button .undo.icon {\n  margin: 0px;\n}\n.bookings_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n.bookings_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n.bookings_pickers .input .icon {\n  opacity: 1;\n  z-index: 1;\n}\n.bookings_pickers .input .icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n.bookings_pickers .input .icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n.bookings_pickers .input .icon img {\n  margin-top: 12px;\n}\n.bookings_pickers .input .search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.bookings_pickers .input .search.dropdown .search {\n  margin-left: 42px !important;\n}\n.bookings_pickers .input .search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n.corporate_input__placeholder-icon {\n  position: relative;\n  width: 18px;\n  bottom: 28px;\n  left: 9px;\n}\ntable {\n  font-family: \"Roboto\", sans-serif;\n  border-collapse: collapse;\n  width: 50%;\n  margin-left: 300px;\n}\ntd,\nth {\n  border: 1px solid #dddddd;\n  text-align: left;\n  padding: 8px;\n}\nth {\n  padding: 20px;\n}\n.minimise-icon {\n  float: right;\n}\nmat-selection-list {\n  max-height: 200px;\n  overflow: auto;\n  width: 100%;\n  max-width: 300px;\n  border: 1px solid #0000001c;\n}\n.main_report-org__scroll {\n  width: 100%;\n  max-width: 300px;\n  border: 1px solid #0000001c;\n}\n.add-arrow-icon {\n  position: relative;\n  padding: 31px;\n  display: flex;\n  flex-direction: column;\n}\n.box-container {\n  width: 50%;\n  position: relative;\n  left: 20%;\n}\n.dual-list-choose-org {\n  padding: 20px;\n}\n.seven.wide.field.dual-choose {\n  margin-left: 180px;\n}\n.upper-table-form-flights {\n  display: none;\n}\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n.flight-search-header {\n  position: relative;\n  left: 32%;\n  color: #0000007a;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 200;\n}\n.icon {\n  opacity: 1;\n  z-index: 1;\n}\n.icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n.icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n.icon .bookings_input__placeholder-icon.call {\n  width: 10px;\n  margin-top: 10px;\n}\n.icon .bookings_input__placeholder-icon.calll {\n  width: 30px;\n  margin-top: 10px;\n}\n.b2c-list-user-table__segment-loader {\n  height: 450px;\n  background-color: white !important;\n  border: 0;\n  box-shadow: none;\n  margin-top: 10px;\n}\n.b2c-list-user-table__segment-loader .ui.inverted.dimmer {\n  background-color: white !important;\n}\n.b2c-list-user-table__segment-loader .eye-icon {\n  font-size: 12px;\n  color: #3867b1;\n}\n.download-img {\n  display: inline-block;\n  cursor: pointer;\n}\n.download-img img {\n  width: 24px;\n  height: 24px;\n  position: relative;\n  top: 4px;\n}\n.eight.field.bookings_btn-panel {\n  padding: 0px;\n  text-align: right;\n}\n.agent-name-booking {\n  margin: auto 24px !important;\n}\n.agent-name-booking .eight.wide.field {\n  padding: 0px;\n}\n.agent-name-booking .eight.wide.field button {\n  margin-right: 0px;\n}\n.ten.wide.field {\n  padding-bottom: 16px;\n}\n.ui.attached.segment.tabContent-block .ui.segment .report-form {\n  background: #fff;\n  padding: 24px;\n  margin: 24px;\n  box-shadow: 0px 2px 6px rgba(6, 40, 98, 0.1) !important;\n  border-radius: 4.96141px;\n}\n.ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child {\n  margin-bottom: 0px;\n}\n.ui.attached.segment.tabContent-block .ui.segment .report-form .fields:last-child .ten.wide.field {\n  padding-bottom: 0px;\n}\n.ui.top.attached.tabular.menu {\n  margin: 24px 0px;\n}\n.bookings_btn-panel button {\n  margin: 0px 6px;\n}\n.product-list {\n  list-style: none;\n}\n.product-list li {\n  padding: 12px 24px;\n  display: inline-block;\n  margin: 0px 8px;\n}\n.product-list li a {\n  color: #181B20;\n}\n.ui.secondary.menu {\n  margin: 24px;\n}\n.ui.secondary.menu a {\n  background: none;\n  border-radius: 0px;\n  text-transform: uppercase;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 13px;\n  color: rgba(51, 61, 78, 0.6);\n  border-bottom: 1px solid rgba(69, 103, 172, 0.1);\n  margin: 0px;\n  padding: 15px;\n}\n.ui.secondary.menu a.active {\n  border: none;\n  color: #333d4e;\n  border-bottom: 1px solid rgba(6, 40, 98, 0.9);\n}\n.ui.secondary.menu a:hover {\n  background: none;\n}\n.bookings_pickers i.icon img {\n  margin-top: 12px;\n}\n@media (max-width: 1030px) {\n  .ui.form .last-field {\n    display: block;\n  }\n  .ui.form .last-field .bookings_pickers {\n    display: inline-block;\n  }\n  .ui.form .last-field .btn-wrapper {\n    width: 100% !important;\n    display: block;\n    text-align: right;\n  }\n}\n@media (max-width: 1030px) and (min-width: 768px) {\n  .ui.form .last-field .bookings_pickers {\n    width: 50% !important;\n  }\n}\n@media (max-width: 800px) {\n  .ui.top.attached.tabular.menu {\n    display: block;\n  }\n  .ui.top.attached.tabular.menu .item {\n    padding: 12px 0px;\n  }\n}\n@media (max-width: 767px) {\n  .ui.attached.segment.tabContent-block .ui.segment .report-form {\n    margin: 0px;\n  }\n\n  .ui.secondary.menu {\n    margin: 24px 12px;\n  }\n}\n@media (max-width: 550px) {\n  .ui.secondary.menu {\n    display: block;\n  }\n  .ui.secondary.menu a {\n    display: inline-block;\n    width: 50%;\n  }\n}\n@media (max-width: 480px) {\n  .ui.attached.segment.tabContent-block .ui.segment .report-form {\n    margin: 0px;\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3JlcG9ydC9zZWFyY2gtbG9nLXJlcG9ydC9FOlxcQmVsYWxcXHByb2plY3RzXFxwcm9kdWN0aW9uLWJ1aWxkXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHJlcG9ydFxcc2VhcmNoLWxvZy1yZXBvcnRcXHNlYXJjaC1sb2ctcmVwb3J0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcmVwb3J0L3NlYXJjaC1sb2ctcmVwb3J0L3NlYXJjaC1sb2ctcmVwb3J0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDQVI7QURFSTtFQUNJLGlCQUFBO0FDQVI7QURFWTtFQUNJLFdBQUE7QUNBaEI7QURPSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNKUjtBRE1JO0VBQ0ksd0JBQUE7RUFDQSwwQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUNKUjtBRE1JO0VBQ0ksVUFBQTtFQUNBLFVBQUE7QUNKUjtBREtRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNIWjtBRElZO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDRmhCO0FES1E7RUFDSSxnQkFBQTtBQ0haO0FETUk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUNKUjtBREtRO0VBQ0ksNEJBQUE7QUNIWjtBREtRO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7QUNIWjtBRFFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNMSjtBRFFBO0VBQ0ksaUNBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0xKO0FEUUE7O0VBRUkseUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNMSjtBRFFBO0VBQ0ksYUFBQTtBQ0xKO0FEUUE7RUFDSSxZQUFBO0FDTEo7QURRQTtFQUNJLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FDTEo7QURRQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FDTEo7QURRQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0xKO0FEUUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FDTEo7QURRQTtFQUNJLGFBQUE7QUNMSjtBRFFBO0VBQ0ksa0JBQUE7QUNMSjtBRFFBO0VBQ0ksYUFBQTtBQ0xKO0FEUUE7RUFDSSxnQkFBQTtBQ0xKO0FEUUE7RUFDSSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUNMSjtBRFFBO0VBQ0ksa0NBQUE7RUFDQSx3Q0FBQTtBQ0xKO0FEUUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUNMSjtBRHFCQTtFQUNJLFVBQUE7RUFDQSxVQUFBO0FDbEJKO0FEbUJJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNqQlI7QURrQlE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNoQlo7QURrQlE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNoQlo7QURrQlE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNoQlo7QURxQkE7RUFDSSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ2xCSjtBRG1CSTtFQUNJLGtDQUFBO0FDakJSO0FEbUJJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNqQlI7QURxQkE7RUFDSSxxQkFBQTtFQUNBLGVBQUE7QUNsQko7QURtQkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQ2pCUjtBRHFCQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ2xCSjtBRHNCQTtFQUNJLDRCQUFBO0FDbkJKO0FEb0JJO0VBQ0ksWUFBQTtBQ2xCUjtBRG1CUTtFQUNJLGlCQUFBO0FDakJaO0FEc0JBO0VBQ0Usb0JBQUE7QUNuQkY7QURzQkE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsdURBQUE7RUFDQSx3QkFBQTtBQ25CSjtBRG9CSTtFQUNJLGtCQUFBO0FDbEJSO0FEbUJRO0VBQ0ksbUJBQUE7QUNqQlo7QURzQkE7RUFDSSxnQkFBQTtBQ25CSjtBRHVCSTtFQUNJLGVBQUE7QUNwQlI7QUR1QkE7RUFDSSxnQkFBQTtBQ3BCSjtBRHFCSTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDbkJSO0FEb0JRO0VBQ0ksY0FBQTtBQ2xCWjtBRHVCQTtFQUNJLFlBQUE7QUNwQko7QURxQkk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnREFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDbkJSO0FEb0JRO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSw2Q0FBQTtBQ2xCWjtBRG9CUTtFQUNJLGdCQUFBO0FDbEJaO0FEeUJRO0VBQ0ksZ0JBQUE7QUN0Qlo7QUQyQkE7RUFFUTtJQUNJLGNBQUE7RUN6QlY7RUQwQlU7SUFDSSxxQkFBQTtFQ3hCZDtFRDBCVTtJQUNJLHNCQUFBO0lBQ0EsY0FBQTtJQUNBLGlCQUFBO0VDeEJkO0FBQ0Y7QUQ2QkE7RUFHWTtJQUNHLHFCQUFBO0VDN0JiO0FBQ0Y7QURrQ0E7RUFDSTtJQUNJLGNBQUE7RUNoQ047RURpQ007SUFDSSxpQkFBQTtFQy9CVjtBQUNGO0FEbUNBO0VBQ0k7SUFDSSxXQUFBO0VDakNOOztFRG1DRTtJQUNJLGlCQUFBO0VDaENOO0FBQ0Y7QURtQ0E7RUFDRTtJQUNFLGNBQUE7RUNqQ0Y7RURrQ0U7SUFDRSxxQkFBQTtJQUNBLFVBQUE7RUNoQ0o7QUFDRjtBRG9DQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLGFBQUE7RUNsQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9yZXBvcnQvc2VhcmNoLWxvZy1yZXBvcnQvc2VhcmNoLWxvZy1yZXBvcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWkuZm9ybSB7IFxyXG4gICAgLmZpZWxkPmxhYmVsIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgIGNvbG9yOiAjMTgxQjIwO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDBweCA4cHg7XHJcbiAgICB9XHJcbiAgICAuYm9va2luZ3NfYnRuLXBhbmVsIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDJweDtcclxuICAgICAgICAucmVzZXQuYnV0dG9uIHtcclxuICAgICAgICAgICAgLnVuZG8uaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IHtcclxuICAgICYuYm9va2luZ3NfZGF0ZXBpY2tlciB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEzOHB4XHJcbiAgICB9XHJcbiAgICAudWkuYmFzaWMuZmxvYXRpbmcuYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMTUyLCAxNTIsIDE1MiwgMC42KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTFweDtcclxuICAgIH1cclxuICAgIC5pY29uIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICAgICAgJi5jYWwge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlYXJjaC5kcm9wZG93biB7XHJcbiAgICAgICAgd2lkdGg6IDIxOHB4O1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIC5zZWFyY2gge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNDJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVmYXVsdC50ZXh0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDAgMCAzOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgYm90dG9tOiAyOHB4O1xyXG4gICAgbGVmdDogOXB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcclxufVxyXG5cclxudGQsXHJcbnRoIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG50aCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4ubWluaW1pc2UtaWNvbiB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbm1hdC1zZWxlY3Rpb24tbGlzdCB7XHJcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDFjO1xyXG59XHJcblxyXG4ubWFpbl9yZXBvcnQtb3JnX19zY3JvbGwge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDFjO1xyXG59XHJcblxyXG4uYWRkLWFycm93LWljb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMzFweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uYm94LWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMjAlO1xyXG59XHJcblxyXG4uZHVhbC1saXN0LWNob29zZS1vcmcge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuLnNldmVuLndpZGUuZmllbGQuZHVhbC1jaG9vc2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE4MHB4O1xyXG59XHJcblxyXG4udXBwZXItdGFibGUtZm9ybS1mbGlnaHRzIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi51aS5ib3R0b20uYXR0YWNoZWQuYWN0aXZlLnRhYi5zZWdtZW50IHtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE3cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTdweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxN3B4O1xyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLm1lbnU+Lml0ZW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI4NTcxNDI5cmVtIDAgMCAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZsaWdodC1zZWFyY2gtaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDMyJTtcclxuICAgIGNvbG9yOiAjMDAwMDAwN2E7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG59XHJcblxyXG4vLyAuaWNvbiB7XHJcbi8vICAgICBvcGFjaXR5OiAxO1xyXG4vLyAgICAgei1pbmRleDogMTAwO1xyXG4vLyAgICAgLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuLy8gICAgICAgICB3aWR0aDogNjBweDtcclxuLy8gICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbi8vICAgICAgICAgJi5jYWwge1xyXG4vLyAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuLy8gICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbi5pY29uIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgJi5jYWwge1xyXG4gICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5jYWxsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuY2FsbGwge1xyXG4gICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5iMmMtbGlzdC11c2VyLXRhYmxlX19zZWdtZW50LWxvYWRlciB7XHJcbiAgICBoZWlnaHQ6IDQ1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgLnVpLmludmVydGVkLmRpbW1lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5leWUtaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMzg2N2IxO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZG93bmxvYWQtaW1nIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDRweDtcclxuICAgIH1cclxufVxyXG5cclxuLmVpZ2h0LmZpZWxkLmJvb2tpbmdzX2J0bi1wYW5lbCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5hZ2VudC1uYW1lLWJvb2tpbmcge1xyXG4gICAgbWFyZ2luOiBhdXRvIDI0cHggIWltcG9ydGFudDtcclxuICAgIC5laWdodC53aWRlLmZpZWxkIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udGVuLndpZGUuZmllbGQge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4udWkuYXR0YWNoZWQuc2VnbWVudC50YWJDb250ZW50LWJsb2NrIC51aS5zZWdtZW50IC5yZXBvcnQtZm9ybSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIG1hcmdpbjogMjRweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoNiwgNDAsIDk4LCAwLjEpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0Ljk2MTQxcHg7XHJcbiAgICAuZmllbGRzOmxhc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAudGVuLndpZGUuZmllbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xyXG4gICAgbWFyZ2luOiAyNHB4IDBweDtcclxufVxyXG5cclxuLmJvb2tpbmdzX2J0bi1wYW5lbCB7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDZweDtcclxuICAgIH1cclxufVxyXG4ucHJvZHVjdC1saXN0IHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBsaSB7XHJcbiAgICAgICAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW46IDBweCA4cHg7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTgxQjIwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnVpLnNlY29uZGFyeS5tZW51IHtcclxuICAgIG1hcmdpbjogMjRweDtcclxuICAgIGEge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDUxLCA2MSwgNzgsIDAuNik7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNjksIDEwMywgMTcyLCAwLjEpO1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzZDRlO1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg2LCA0MCwgOTgsIDAuOSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJvb2tpbmdzX3BpY2tlcnMge1xyXG4gICAgaS5pY29uIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMzBweCkge1xyXG4gICAgLnVpLmZvcm0ge1xyXG4gICAgICAgIC5sYXN0LWZpZWxkIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIC5ib29raW5nc19waWNrZXJzIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYnRuLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDMwcHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnVpLmZvcm0ge1xyXG4gICAgICAgIC5sYXN0LWZpZWxkIHtcclxuICAgICAgICAgICAgLmJvb2tpbmdzX3BpY2tlcnMge1xyXG4gICAgICAgICAgICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gICAgLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIC5pdGVtIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweCAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC51aS5hdHRhY2hlZC5zZWdtZW50LnRhYkNvbnRlbnQtYmxvY2sgLnVpLnNlZ21lbnQgLnJlcG9ydC1mb3JtIHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuICAgIC51aS5zZWNvbmRhcnkubWVudSB7XHJcbiAgICAgICAgbWFyZ2luOiAyNHB4IDEycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gIC51aS5zZWNvbmRhcnkubWVudSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGEge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC51aS5hdHRhY2hlZC5zZWdtZW50LnRhYkNvbnRlbnQtYmxvY2sgLnVpLnNlZ21lbnQgLnJlcG9ydC1mb3JtIHtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgfVxyXG59IiwiLnVpLmZvcm0gLmZpZWxkID4gbGFiZWwge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBjb2xvcjogIzE4MUIyMDtcbiAgbWFyZ2luOiAwcHggMHB4IDhweDtcbn1cbi51aS5mb3JtIC5ib29raW5nc19idG4tcGFuZWwge1xuICBwYWRkaW5nOiAyMHB4IDJweDtcbn1cbi51aS5mb3JtIC5ib29raW5nc19idG4tcGFuZWwgLnJlc2V0LmJ1dHRvbiAudW5kby5pY29uIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dC5ib29raW5nc19kYXRlcGlja2VyIHtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgbWF4LXdpZHRoOiAxMzhweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAudWkuYmFzaWMuZmxvYXRpbmcuYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogcmdiYSgxNTIsIDE1MiwgMTUyLCAwLjYpICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDExcHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLmljb24ge1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxO1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbCB7XG4gIHdpZHRoOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5pY29uIGltZyB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnNlYXJjaC5kcm9wZG93biB7XG4gIHdpZHRoOiAyMThweDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuc2VhcmNoLmRyb3Bkb3duIC5zZWFyY2gge1xuICBtYXJnaW4tbGVmdDogNDJweCAhaW1wb3J0YW50O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5zZWFyY2guZHJvcGRvd24gLmRlZmF1bHQudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDhweCAwIDAgMzhweCAhaW1wb3J0YW50O1xufVxuXG4uY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMThweDtcbiAgYm90dG9tOiAyOHB4O1xuICBsZWZ0OiA5cHg7XG59XG5cbnRhYmxlIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAzMDBweDtcbn1cblxudGQsXG50aCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxudGgge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4ubWluaW1pc2UtaWNvbiB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxubWF0LXNlbGVjdGlvbi1saXN0IHtcbiAgbWF4LWhlaWdodDogMjAwcHg7XG4gIG92ZXJmbG93OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDFjO1xufVxuXG4ubWFpbl9yZXBvcnQtb3JnX19zY3JvbGwge1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDFjO1xufVxuXG4uYWRkLWFycm93LWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDMxcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5ib3gtY29udGFpbmVyIHtcbiAgd2lkdGg6IDUwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAyMCU7XG59XG5cbi5kdWFsLWxpc3QtY2hvb3NlLW9yZyB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5zZXZlbi53aWRlLmZpZWxkLmR1YWwtY2hvb3NlIHtcbiAgbWFyZ2luLWxlZnQ6IDE4MHB4O1xufVxuXG4udXBwZXItdGFibGUtZm9ybS1mbGlnaHRzIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4udWkuYm90dG9tLmF0dGFjaGVkLmFjdGl2ZS50YWIuc2VnbWVudCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE3cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTdweDtcbn1cblxuLnVpLnRvcC5hdHRhY2hlZC5tZW51ID4gLml0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwLjI4NTcxNDI5cmVtIDAgMCAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uZmxpZ2h0LXNlYXJjaC1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDMyJTtcbiAgY29sb3I6ICMwMDAwMDA3YTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbi5pY29uIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTtcbn1cbi5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4uaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsIHtcbiAgd2lkdGg6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsbCB7XG4gIHdpZHRoOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbGxsIHtcbiAgd2lkdGg6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5iMmMtbGlzdC11c2VyLXRhYmxlX19zZWdtZW50LWxvYWRlciB7XG4gIGhlaWdodDogNDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5iMmMtbGlzdC11c2VyLXRhYmxlX19zZWdtZW50LWxvYWRlciAudWkuaW52ZXJ0ZWQuZGltbWVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5iMmMtbGlzdC11c2VyLXRhYmxlX19zZWdtZW50LWxvYWRlciAuZXllLWljb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMzg2N2IxO1xufVxuXG4uZG93bmxvYWQtaW1nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZG93bmxvYWQtaW1nIGltZyB7XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0cHg7XG59XG5cbi5laWdodC5maWVsZC5ib29raW5nc19idG4tcGFuZWwge1xuICBwYWRkaW5nOiAwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYWdlbnQtbmFtZS1ib29raW5nIHtcbiAgbWFyZ2luOiBhdXRvIDI0cHggIWltcG9ydGFudDtcbn1cbi5hZ2VudC1uYW1lLWJvb2tpbmcgLmVpZ2h0LndpZGUuZmllbGQge1xuICBwYWRkaW5nOiAwcHg7XG59XG4uYWdlbnQtbmFtZS1ib29raW5nIC5laWdodC53aWRlLmZpZWxkIGJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4udGVuLndpZGUuZmllbGQge1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbn1cblxuLnVpLmF0dGFjaGVkLnNlZ21lbnQudGFiQ29udGVudC1ibG9jayAudWkuc2VnbWVudCAucmVwb3J0LWZvcm0ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAyNHB4O1xuICBtYXJnaW46IDI0cHg7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoNiwgNDAsIDk4LCAwLjEpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDQuOTYxNDFweDtcbn1cbi51aS5hdHRhY2hlZC5zZWdtZW50LnRhYkNvbnRlbnQtYmxvY2sgLnVpLnNlZ21lbnQgLnJlcG9ydC1mb3JtIC5maWVsZHM6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi51aS5hdHRhY2hlZC5zZWdtZW50LnRhYkNvbnRlbnQtYmxvY2sgLnVpLnNlZ21lbnQgLnJlcG9ydC1mb3JtIC5maWVsZHM6bGFzdC1jaGlsZCAudGVuLndpZGUuZmllbGQge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XG4gIG1hcmdpbjogMjRweCAwcHg7XG59XG5cbi5ib29raW5nc19idG4tcGFuZWwgYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHggNnB4O1xufVxuXG4ucHJvZHVjdC1saXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5wcm9kdWN0LWxpc3QgbGkge1xuICBwYWRkaW5nOiAxMnB4IDI0cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwcHggOHB4O1xufVxuLnByb2R1Y3QtbGlzdCBsaSBhIHtcbiAgY29sb3I6ICMxODFCMjA7XG59XG5cbi51aS5zZWNvbmRhcnkubWVudSB7XG4gIG1hcmdpbjogMjRweDtcbn1cbi51aS5zZWNvbmRhcnkubWVudSBhIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIGNvbG9yOiByZ2JhKDUxLCA2MSwgNzgsIDAuNik7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDY5LCAxMDMsIDE3MiwgMC4xKTtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG4udWkuc2Vjb25kYXJ5Lm1lbnUgYS5hY3RpdmUge1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMzMzZDRlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg2LCA0MCwgOTgsIDAuOSk7XG59XG4udWkuc2Vjb25kYXJ5Lm1lbnUgYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5ib29raW5nc19waWNrZXJzIGkuaWNvbiBpbWcge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAzMHB4KSB7XG4gIC51aS5mb3JtIC5sYXN0LWZpZWxkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAudWkuZm9ybSAubGFzdC1maWVsZCAuYm9va2luZ3NfcGlja2VycyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG4gIC51aS5mb3JtIC5sYXN0LWZpZWxkIC5idG4td3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMzBweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC51aS5mb3JtIC5sYXN0LWZpZWxkIC5ib29raW5nc19waWNrZXJzIHtcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAudWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUgLml0ZW0ge1xuICAgIHBhZGRpbmc6IDEycHggMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnVpLmF0dGFjaGVkLnNlZ21lbnQudGFiQ29udGVudC1ibG9jayAudWkuc2VnbWVudCAucmVwb3J0LWZvcm0ge1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG5cbiAgLnVpLnNlY29uZGFyeS5tZW51IHtcbiAgICBtYXJnaW46IDI0cHggMTJweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gIC51aS5zZWNvbmRhcnkubWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnVpLnNlY29uZGFyeS5tZW51IGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNTAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnVpLmF0dGFjaGVkLnNlZ21lbnQudGFiQ29udGVudC1ibG9jayAudWkuc2VnbWVudCAucmVwb3J0LWZvcm0ge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/report/search-log-report/search-log-report.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/layout/report/search-log-report/search-log-report.component.ts ***!
    \********************************************************************************/

  /*! exports provided: SearchLogReportComponent */

  /***/
  function srcAppLayoutReportSearchLogReportSearchLogReportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchLogReportComponent", function () {
      return SearchLogReportComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SearchLogReportComponent = /*#__PURE__*/function () {
      function SearchLogReportComponent() {
        _classCallCheck(this, SearchLogReportComponent);
      }

      _createClass(SearchLogReportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SearchLogReportComponent;
    }();

    SearchLogReportComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search-log-report',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./search-log-report.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/search-log-report/search-log-report.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./search-log-report.component.scss */
      "./src/app/layout/report/search-log-report/search-log-report.component.scss"))["default"]]
    })], SearchLogReportComponent);
    /***/
  },

  /***/
  "./src/app/layout/report/search-log-report/search-log-report.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/layout/report/search-log-report/search-log-report.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: SearchLogReportModule */

  /***/
  function srcAppLayoutReportSearchLogReportSearchLogReportModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchLogReportModule", function () {
      return SearchLogReportModule;
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


    var _search_log_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search-log-report.component */
    "./src/app/layout/report/search-log-report/search-log-report.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var _search_log_report_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./search-log-report-routing.module */
    "./src/app/layout/report/search-log-report/search-log-report-routing.module.ts");
    /* harmony import */


    var _search_car_search_car_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./search-car/search-car.component */
    "./src/app/layout/report/search-log-report/search-car/search-car.component.ts");
    /* harmony import */


    var _search_transfers_search_transfers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./search-transfers/search-transfers.component */
    "./src/app/layout/report/search-log-report/search-transfers/search-transfers.component.ts");
    /* harmony import */


    var _search_activity_search_activity_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./search-activity/search-activity.component */
    "./src/app/layout/report/search-log-report/search-activity/search-activity.component.ts");
    /* harmony import */


    var _search_insurance_search_insurance_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./search-insurance/search-insurance.component */
    "./src/app/layout/report/search-log-report/search-insurance/search-insurance.component.ts");
    /* harmony import */


    var _search_flight_log_search_flight_log_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./search-flight-log/search-flight-log.component */
    "./src/app/layout/report/search-log-report/search-flight-log/search-flight-log.component.ts"); // import { SearchHotelComponent } from './search-hotel/search-hotel.component';


    var SearchLogReportModule = function SearchLogReportModule() {
      _classCallCheck(this, SearchLogReportModule);
    };

    SearchLogReportModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_search_log_report_component__WEBPACK_IMPORTED_MODULE_3__["SearchLogReportComponent"], _search_car_search_car_component__WEBPACK_IMPORTED_MODULE_7__["SearchCarComponent"], _search_transfers_search_transfers_component__WEBPACK_IMPORTED_MODULE_8__["SearchTransfersComponent"], _search_activity_search_activity_component__WEBPACK_IMPORTED_MODULE_9__["SearchActivityComponent"], _search_insurance_search_insurance_component__WEBPACK_IMPORTED_MODULE_10__["SearchInsuranceComponent"], _search_flight_log_search_flight_log_component__WEBPACK_IMPORTED_MODULE_11__["SearchFlightLogComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"], _search_log_report_routing_module__WEBPACK_IMPORTED_MODULE_6__["SearchLogReportRoutingModule"]]
    })], SearchLogReportModule);
    /***/
  },

  /***/
  "./src/app/layout/report/search-log-report/search-transfers/search-transfers.component.scss":
  /*!**************************************************************************************************!*\
    !*** ./src/app/layout/report/search-log-report/search-transfers/search-transfers.component.scss ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutReportSearchLogReportSearchTransfersSearchTransfersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ui.segment form.report-form {\n  background: #fff;\n  padding: 0px !important;\n  margin: 24px;\n  border-radius: 4.96141px;\n}\n\n.bookings_pickers .input i.icon img {\n  margin-top: 10px;\n}\n\n.bookings_btn-panel {\n  margin-top: 22px;\n}\n\n.bookings_btn-panel button {\n  margin: 0px 8px;\n}\n\n.ui.icon.input > i.icon {\n  opacity: 1 !important;\n  z-index: 1;\n}\n\n.ui.icon.input > i.icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.ui.icon.input > i.icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n\n@media (max-width: 767px) {\n  .search-log-container {\n    margin: 8px !important;\n  }\n  .search-log-container form.report-form, .search-log-container .result-block {\n    margin: 0px 0px 24px !important;\n  }\n\n  .six.wide.field, .five.wide.field {\n    padding-bottom: 16px;\n  }\n}\n\n@media (max-width: 320px) {\n  .ui.form .fields .btn-wrapper .bookings_btn-panel .primary.button {\n    margin-right: 0px;\n  }\n  .ui.form .fields .btn-wrapper .bookings_btn-panel .reset.button {\n    min-width: 54px !important;\n    margin-bottom: 12px;\n    margin-right: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3JlcG9ydC9zZWFyY2gtbG9nLXJlcG9ydC9zZWFyY2gtdHJhbnNmZXJzL0U6XFxCZWxhbFxccHJvamVjdHNcXHByb2R1Y3Rpb24tYnVpbGRcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxccmVwb3J0XFxzZWFyY2gtbG9nLXJlcG9ydFxcc2VhcmNoLXRyYW5zZmVyc1xcc2VhcmNoLXRyYW5zZmVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3JlcG9ydC9zZWFyY2gtbG9nLXJlcG9ydC9zZWFyY2gtdHJhbnNmZXJzL3NlYXJjaC10cmFuc2ZlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUVBLHdCQUFBO0FDQUo7O0FES1k7RUFDSSxnQkFBQTtBQ0ZoQjs7QURPQTtFQUNJLGdCQUFBO0FDSko7O0FES0k7RUFDSSxlQUFBO0FDSFI7O0FETUE7RUFDSSxxQkFBQTtFQUNBLFVBQUE7QUNISjs7QURJSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDRlI7O0FER1E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNEWjs7QURNQTtFQUNJO0lBQ0ksc0JBQUE7RUNITjtFRElNO0lBQ0ksK0JBQUE7RUNGVjs7RURLRTtJQUNJLG9CQUFBO0VDRk47QUFDRjs7QURLQTtFQUtvQjtJQUNJLGlCQUFBO0VDUHRCO0VEU2tCO0lBQ0ksMEJBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0VDUHRCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcmVwb3J0L3NlYXJjaC1sb2ctcmVwb3J0L3NlYXJjaC10cmFuc2ZlcnMvc2VhcmNoLXRyYW5zZmVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS5zZWdtZW50IGZvcm0ucmVwb3J0LWZvcm0ge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAyNHB4O1xyXG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSg2LCA0MCwgOTgsIDAuMSkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQuOTYxNDFweDtcclxufVxyXG4uYm9va2luZ3NfcGlja2VycyB7XHJcbiAgICAuaW5wdXQge1xyXG4gICAgICAgIGkuaWNvbiB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5ib29raW5nc19idG4tcGFuZWwge1xyXG4gICAgbWFyZ2luLXRvcDogMjJweDtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggOHB4O1xyXG4gICAgfVxyXG59XHJcbi51aS5pY29uLmlucHV0PmkuaWNvbiB7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgJi5jYWwge1xyXG4gICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLnNlYXJjaC1sb2ctY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW46IDhweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvcm0ucmVwb3J0LWZvcm0sIC5yZXN1bHQtYmxvY2sge1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCAwcHggMjRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zaXgud2lkZS5maWVsZCwgLmZpdmUud2lkZS5maWVsZCB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAgLnVpLmZvcm0ge1xyXG4gICAgICAgIC5maWVsZHMge1xyXG4gICAgICAgICAgICAuYnRuLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgLmJvb2tpbmdzX2J0bi1wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnByaW1hcnkuYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXNldC5idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDU0cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLnVpLnNlZ21lbnQgZm9ybS5yZXBvcnQtZm9ybSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW46IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDQuOTYxNDFweDtcbn1cblxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IGkuaWNvbiBpbWcge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYm9va2luZ3NfYnRuLXBhbmVsIHtcbiAgbWFyZ2luLXRvcDogMjJweDtcbn1cbi5ib29raW5nc19idG4tcGFuZWwgYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHggOHB4O1xufVxuXG4udWkuaWNvbi5pbnB1dCA+IGkuaWNvbiB7XG4gIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcbiAgei1pbmRleDogMTtcbn1cbi51aS5pY29uLmlucHV0ID4gaS5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4udWkuaWNvbi5pbnB1dCA+IGkuaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsIHtcbiAgd2lkdGg6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuc2VhcmNoLWxvZy1jb250YWluZXIge1xuICAgIG1hcmdpbjogOHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnNlYXJjaC1sb2ctY29udGFpbmVyIGZvcm0ucmVwb3J0LWZvcm0sIC5zZWFyY2gtbG9nLWNvbnRhaW5lciAucmVzdWx0LWJsb2NrIHtcbiAgICBtYXJnaW46IDBweCAwcHggMjRweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNpeC53aWRlLmZpZWxkLCAuZml2ZS53aWRlLmZpZWxkIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC51aS5mb3JtIC5maWVsZHMgLmJ0bi13cmFwcGVyIC5ib29raW5nc19idG4tcGFuZWwgLnByaW1hcnkuYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgfVxuICAudWkuZm9ybSAuZmllbGRzIC5idG4td3JhcHBlciAuYm9va2luZ3NfYnRuLXBhbmVsIC5yZXNldC5idXR0b24ge1xuICAgIG1pbi13aWR0aDogNTRweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/report/search-log-report/search-transfers/search-transfers.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/layout/report/search-log-report/search-transfers/search-transfers.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: SearchTransfersComponent */

  /***/
  function srcAppLayoutReportSearchLogReportSearchTransfersSearchTransfersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchTransfersComponent", function () {
      return SearchTransfersComponent;
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

    var SearchTransfersComponent = /*#__PURE__*/function () {
      function SearchTransfersComponent(fb, newReportService, toastr) {
        var _this16 = this;

        _classCallCheck(this, SearchTransfersComponent);

        this.fb = fb;
        this.newReportService = newReportService;
        this.toastr = toastr;
        this.NewTransferSearchLog = [];
        this.totalTransferSearchLog = 0;
        this.submitted = false;
        this.pages = 0;
        this.orgNames = [];
        this.pageSearch = 0;
        this.searchTransferForm = {
          page: this.pageSearch
        };
        this.transferSearchPage = 0;
        this.searchTransferLogForm = this.fb.group({
          organisation_id: [''],
          t_startDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          t_endDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });

        this.loadStartDate = function () {
          var scope = _this16;
          $(function () {
            $('input[name="t_startDate"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1901,
              startDate: moment(),
              maxDate: moment(),
              autoUpdateInput: false
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.searchTransferLogForm.get('t_startDate').setValue(moment(start).format('DD/MM/YYYY'));
            });
          });
        };

        this.loadEndDate = function () {
          var scope = _this16;
          $(function () {
            $('input[name="t_endDate"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1901,
              startDate: moment(),
              minDate: moment(),
              autoUpdateInput: false
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.searchTransferLogForm.get('t_endDate').setValue(moment(start).format('DD/MM/YYYY'));
            });
          });
        };
      }

      _createClass(SearchTransfersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fetchAllOrgNames();
          this.fetchAllTransferLogs();
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
        key: "fetchAllOrgNames",
        value: function fetchAllOrgNames() {
          var _this17 = this;

          this.newReportService.GetAllOrganization().subscribe(function (res) {
            _this17.orgNames = res.result.data;

            if (res.status) {
              if (res.result.length != 0) {
                _this17.orgNames = res.result.data;
              } else {
                _this17.toastr.info("There is no data available to display", "", {
                  timeOut: 1000,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });
              }
            } else {
              _this17.toastr.error("".concat(res.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "fetchAllTransferLogs",
        value: function fetchAllTransferLogs() {
          var _this18 = this;

          this.newReportService.GetAllTransferLogs(this.searchTransferForm).subscribe(function (res) {
            if (res.status) {
              _this18.totalTransferSearchLog = res.totalResult;
              _this18.transferSearchPage = res.page;
              _this18.NewTransferSearchLog = res.result;
            }
          });
        }
      }, {
        key: "pageCallback",
        value: function pageCallback(event) {
          var offset = event.offset;
          this.searchTransferForm.page = offset;
          this.fetchAllTransferLogs();
        }
      }, {
        key: "transferSearchLog",
        value: function transferSearchLog() {
          var _this19 = this;

          this.submitted = true;

          if (this.searchTransferLogForm.invalid) {
            return;
          }

          this.newReportService.GetAllTransferLogs(this.searchTransferLogForm.value).subscribe(function (res) {
            if (res.status) {
              if (res.result.length) {
                _this19.totalTransferSearchLog = res.totalResult;
                _this19.transferSearchPage = res.page;
                _this19.NewTransferSearchLog = res.HotelSearchLog;
              } else {
                _this19.toastr.info("There is no data Available to display", "".concat(res.message), {
                  timeOut: 2000,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });
              }
            } else {
              _this19.toastr.error("".concat(res.message), "", {
                timeOut: 2000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "reset",
        value: function reset() {
          this.searchTransferLogForm.reset();
        }
      }, {
        key: "f",
        get: function get() {
          return this.searchTransferLogForm.controls;
        }
      }]);

      return SearchTransfersComponent;
    }();

    SearchTransfersComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_3__["ReportService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    SearchTransfersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search-transfers',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./search-transfers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/report/search-log-report/search-transfers/search-transfers.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./search-transfers.component.scss */
      "./src/app/layout/report/search-log-report/search-transfers/search-transfers.component.scss"))["default"]]
    })], SearchTransfersComponent);
    /***/
  }
}]);
//# sourceMappingURL=search-log-report-search-log-report-module-es5.js.map