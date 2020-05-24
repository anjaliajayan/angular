function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/dashboard/components/graphs/graphs.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/dashboard/components/graphs/graphs.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutDashboardComponentsGraphsGraphsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui cards grid\">\r\n  <div class=\"card seven wide column bookings-card animated fadeIn\">\r\n    <div class=\"ui active inverted dimmer\" *ngIf=\"bookingsLoader\">\r\n      <div class=\"ui text loader\">Loading</div>\r\n    </div>\r\n    <div class=\"content\">\r\n      <div class=\"header\">\r\n        <span>Bookings Information</span>\r\n        <!-- {{ bookings | json }} -->\r\n      </div>\r\n      <div class=\"description mt-2\">\r\n        <div class=\"ui grid\">\r\n          <div class=\"three wide column\">\r\n            <p>Flights</p>\r\n          </div>\r\n          <div class=\"eleven wide column\">\r\n\r\n            <div class=\"ui indicating progress warning progress-bar _01\" [attr.data-value]=\"bookings.flights\"\r\n              [attr.data-total]=\"bookings.total\" id=\"flights-pb\">\r\n              <div class=\"bar\" [ngStyle]=\"{'width':getWidth(bookings.total, bookings.flights)}\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"two wide column text-left\">\r\n            <p>{{bookings.flights}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui grid\">\r\n          <div class=\"three wide column\">\r\n            <p>Hotels</p>\r\n          </div>\r\n          <div class=\"eleven wide column\">\r\n            <div class=\"ui indicating progress warning progress-bar _02\" [attr.data-value]=\"bookings.hotels\"\r\n              [attr.data-total]=\"bookings.total\" id=\"hotels-pb\">\r\n              <div class=\"bar\" [ngStyle]=\"{'width':getWidth(bookings.total, bookings.hotels)}\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"two wide column text-left\">\r\n            <p>{{bookings.hotels}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui grid\">\r\n          <div class=\"three wide column\">\r\n            <p>Insurance</p>\r\n          </div>\r\n          <div class=\"eleven wide column\">\r\n            <div class=\"ui indicating progress warning progress-bar _03\" [attr.data-value]=\"bookings.insurance\"\r\n              [attr.data-total]=\"bookings.total\" id=\"insurances-pb\">\r\n              <div class=\"bar\" [ngStyle]=\"{'width':getWidth(bookings.total, bookings.insurance)}\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"two wide column text-left\">\r\n            <p>{{bookings.insurance}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui grid\">\r\n          <div class=\"three wide column\">\r\n            <p>Activites</p>\r\n          </div>\r\n          <div class=\"eleven wide column\">\r\n            <div class=\"ui indicating progress progress-bar _04\" [attr.data-value]=\"bookings.activities\"\r\n              [attr.data-total]=\"bookings.total\" id=\"activities-pb\">\r\n              <div class=\"bar\" [ngStyle]=\"{'width':getWidth(bookings.total, bookings.activities)}\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"two wide column text-left\">\r\n            <p>{{bookings.activities}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui grid\">\r\n          <div class=\"three wide column pr-0\">\r\n            <p>Car Hire</p>\r\n          </div>\r\n          <div class=\"eleven wide column\">\r\n            <div class=\"ui indicating progress progress-bar _05\" [attr.data-value]=\"bookings.carHire\"\r\n              [attr.data-total]=\"bookings.total\" id=\"hire-pb\">\r\n              <div class=\"bar\" [ngStyle]=\"{'width':getWidth(bookings.total, bookings.carHire)}\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"two wide column text-left\">\r\n            <p>{{bookings.carHire}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui grid\">\r\n          <div class=\"three wide column\">\r\n            <p>Transfers</p>\r\n          </div>\r\n          <div class=\"eleven wide column\">\r\n            <div class=\"ui indicating progress warning progress-bar _06\" [attr.data-value]=\"bookings.transfers\"\r\n              [attr.data-total]=\"bookings.total\" id=\"transfers-pb\">\r\n              <div class=\"bar\" [ngStyle]=\"{'width':getWidth(bookings.total, bookings.transfers)}\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"two wide column text-left\">\r\n            <p>{{bookings.transfers}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui grid\">\r\n          <div class=\"three wide column pr-0\">\r\n            <p>Holidays</p>\r\n          </div>\r\n          <div class=\"eleven wide column\">\r\n            <div class=\"ui indicating progress warning progress-bar _07\" [attr.data-value]=\"bookings.holidays\"\r\n              [attr.data-total]=\"bookings.total\" id=\"holidays-pb\">\r\n              <div class=\"bar\" [ngStyle]=\"{'width':getWidth(bookings.total, bookings.holidays)}\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"two wide column text-left\">\r\n            <p>{{bookings.holidays}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card seven wide column performance-card animated fadeIn delay-1s\">\r\n    <div class=\"ui active inverted dimmer\" *ngIf=\"organisationLoader\">\r\n      <div class=\"ui text loader\">Loading</div>\r\n    </div>\r\n    <div class=\"content\">\r\n      <div class=\"header\">\r\n        <div class=\"ui grid\">\r\n          <span class=\"sixteen wide column\">Performance </span>\r\n\r\n          <!-- <span class=\"four wide column\">\r\n              <div class=\"ui form\">\r\n                <div class=\"grouped fields\">\r\n                  <div class=\"field\">\r\n                    <div class=\"ui slider checkbox\">\r\n                      <input type=\"checkbox\" name=\"throughput\" (change)=\"performance_type = !performance_type; displayPerformanceChart()\">\r\n                      <span >Margin</span><label>Sales</label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </span> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"description mt-2\">\r\n        <div class=\"ct-performance-chart\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<!--\r\n  <div class=\"card seven wide column performance-card animated fadeIn delay-2s\">\r\n    <div class=\"ui active inverted dimmer\" *ngIf=\"organisationLoader\">\r\n      <div class=\"ui text loader\">Loading</div>\r\n    </div>\r\n    <div class=\"content\">\r\n      <div class=\"header\">\r\n        <div class=\"ui grid\">\r\n          <span class=\"sixteen wide column\">Margin </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"description mt-2\">\r\n        <div class=\"ct-margin-chart\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n-->\r\n  <div class=\"card seven wide column performance-card animated fadeIn delay-2s cardmargin\">\r\n    <div class=\"ui active inverted dimmer\" *ngIf=\"organisationLoader\">\r\n      <div class=\"ui text loader\">Loading</div>\r\n    </div>\r\n    <div class=\"content\">\r\n      <div class=\"header\">\r\n        <div class=\"ui grid\">\r\n          <span class=\"sixteen wide column\">Tickets & Search Logs </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"description mt-2\">\r\n        <div class=\"ct-logs-chart\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card seven wide column performance-card animated fadeIn delay-3s cardmargin\">\r\n    <div class=\"ui active inverted dimmer\" *ngIf=\"organisationLoader\">\r\n      <div class=\"ui text loader\">Loading</div>\r\n    </div>\r\n    <div class=\"content\">\r\n      <div class=\"header\">\r\n        <div class=\"ui grid\">\r\n          <span class=\"sixteen wide column\">Preset </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"description mt-2\" style=\"width: 50%; float: left;\">\r\n        <div class=\"ct-chart\"></div>\r\n      </div>\r\n      <div style=\"float: left; width: 50%;\">\r\n        <table class=\"ui very  basic table\" style=\"width: 100%;\">\r\n          <thead class=\"full-width\">\r\n            <tr class=\"center aligned\">\r\n              <th>Active</th>\r\n              <th>Inactive</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr class=\"center aligned\">\r\n              <td> {{ presetInfo.active + 10 }} </td>\r\n              <td> {{ presetInfo.inactive }} </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div style=\"clear: both;\" ></div>\r\n      <hr />\r\n      <table class=\"ui very  basic table\" style=\"width: 100%;\">\r\n        <thead class=\"full-width\">\r\n          <tr class=\"center aligned\">\r\n            <th>Total no. of Subagents</th>\r\n            <th>Total no. of Corporates</th>\r\n            <th>Total no. of Websites</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr class=\"center aligned\">\r\n            <td> {{ presetInfo.subagents }} </td>\r\n            <td> {{ presetInfo.corporates }} </td>\r\n            <td> {{ presetInfo.websites }} </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/dashboard/dashboard.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/dashboard/dashboard.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"page-wrapper\">\r\n    <!-- <p class=\"page-wrapper_title\">Dashboard</p> -->\r\n    <div class=\"ui fluid container\">\r\n        <div class=\"\">\r\n            <div class=\"\">\r\n                <form class=\"ui form\" [formGroup]=\"dForm\" (ngSubmit)=\"submitForm()\">\r\n                    <div class=\"form-inner\">\r\n                        <div class=\"fields\">\r\n                            <div class=\"three wide field d_date_pickers\">\r\n                                <label for=\"period_from\" class=\"label\">Period From</label>\r\n                                <div class=\"ui left icon input\">\r\n                                    <input type=\"text\" id=\"period_from\" name=\"period_from\" formControlName=\"period_from\" placeholder=\"Period From\" value=\"\" />\r\n                                    <i class=\"icon\">\r\n                    <img src=\"./../../../../assets/icons/calendar.svg\" class=\"bookings_input__placeholder-icon cal\" />\r\n                  </i>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"three wide field d_date_pickers\">\r\n                                <label for=\"period_to\" class=\"label\">Period To</label>\r\n                                <div class=\"ui left icon input\">\r\n                                    <input type=\"text\" id=\"period_to\" name=\"period_to\" formControlName=\"period_to\" placeholder=\"Period To\" />\r\n                                    <i class=\"icon\">\r\n                    <img src=\"./../../../../assets/icons/calendar.svg\" class=\"bookings_input__placeholder-icon cal\" />\r\n                  </i>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"three wide field\">\r\n                                <label for=\"pos\">Point Of Sale</label>\r\n                                <select id=\"pos\" class=\"ui fluid  dropdown\" formControlName=\"pos\">\r\n                  <option value=\"-1\">All</option>\r\n                  <option *ngFor=\"let obj of pos\" value=\"{{obj.value}}\">{{obj.name}}</option>\r\n                </select>\r\n                            </div>\r\n                            <div class=\"three wide field\">\r\n                                <label for=\"product\">Product</label>\r\n                                <select id=\"product\" class=\"ui fluid  dropdown\" formControlName=\"producttype\">\r\n                  <option value=\"-1\">All</option>\r\n                  <option *ngFor=\"let obj of products\" value=\"{{obj.value}}\">{{obj.name}}</option>\r\n                </select>\r\n                            </div>\r\n                            <!-- <div class=\"three wide field\">\r\n                <label for=\"organization_id\">Organization ID</label>\r\n                <select id=\"organization_id\" class=\"ui fluid search dropdown\" formControlName=\"organization_id\">\r\n                  <option value=\"-1\">All</option>\r\n                  <option *ngFor=\"let organization of filteredOrganizations\" value=\"{{ organization.organisation_id }}\">\r\n                    {{ organization.name }}</option>\r\n                </select>\r\n              </div> -->\r\n                            <div class=\"three wide field\" *ngIf=\"dForm.value.organization_id && users.length > 0\">\r\n                                <label for=\"user_id\">User ID</label>\r\n                                <select id=\"user_id\" class=\"ui fluid search dropdown\" formControlName=\"agent_code\">\r\n                  <option value=\"-1\">All</option>\r\n                  <option *ngFor=\"let user of users\" value=\"{{ user.agent_code }}\">{{ user.first_name }}\r\n                    {{ user.last_name }}</option>\r\n                </select>\r\n                            </div>\r\n                            <div class=\"three wide field bookings_btn-panel\">\r\n                                <button class=\"ui primary  button\">\r\n                  Search\r\n                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- <br> -->\r\n    <app-graphs *ngIf=\"isSubmitted\" [bookings]=\"bookings\" [performanceInfo]=\"performance\" [marginInfo]=\"margin\" [presetInfo]=\"presetInfo\" [bookingsLoader]=\"bookingsLoader\" [organisationLoader]=\"organisationLoader\">\r\n    </app-graphs>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/layout/dashboard/components/graphs/graphs.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/layout/dashboard/components/graphs/graphs.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutDashboardComponentsGraphsGraphsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".stepper-grid {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n.stepper-grid .stepper-grid_step {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  opacity: 0.6;\n  cursor: pointer;\n}\n.stepper-grid .stepper-grid_step._active {\n  opacity: 1;\n  -webkit-transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div {\n  background-color: #062862;\n  border: 0;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div div.image {\n  background-color: white;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div:hover {\n  border: 2px solid #A6B1C3;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon label {\n  border: 0;\n  background-color: #062862;\n  color: white;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-border hr {\n  border-bottom: 2px solid #062862;\n}\n.stepper-grid .stepper-grid_step._activated {\n  opacity: 1;\n  -webkit-transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div {\n  background-color: #437ADA;\n  border: 0;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div div.image {\n  background-color: white;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div:hover {\n  border: 2px solid #A6B1C3;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon label {\n  border: 0;\n  background-color: #437ADA;\n  color: white;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-border hr {\n  border-bottom: 2px solid #437ADA;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div {\n  background-color: transparent;\n  border: 2px solid #A6B1C3;\n  color: white;\n  width: 45px;\n  height: 45px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 50%;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon label {\n  width: 100px;\n  height: auto;\n  line-height: 24px;\n  text-align: center;\n  background-color: transparent;\n  border: 2px solid #A6B1C3;\n  margin-top: 15px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 600 !important;\n  font-size: 13px;\n  color: #A6B1C3;\n  border-radius: 8px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon label._last {\n  width: 150px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-border {\n  width: 100%;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-border hr {\n  margin-top: -24px;\n  width: 100%;\n  height: 2px;\n  background: none;\n  border-bottom: 2px solid #A6B1C3;\n}\n.stepper-grid-content {\n  display: none;\n}\n.stepper-grid-content._active {\n  display: block;\n}\n.bookings-card,\n.floating-card,\n.packages-card,\n.performance-card {\n  width: 100% !important;\n  border-radius: 8px !important;\n  box-shadow: 0px 2px 6px rgba(6, 40, 98, 0.1) !important;\n  padding: 6px 10px !important;\n}\n.bookings-card .header span,\n.floating-card .header span,\n.packages-card .header span,\n.performance-card .header span {\n  font-weight: 400 !important;\n  font-size: 20px;\n  color: #4F4F4F;\n}\n.bookings-card .header .bookings-card_m-dropdown,\n.floating-card .header .bookings-card_m-dropdown,\n.packages-card .header .bookings-card_m-dropdown,\n.performance-card .header .bookings-card_m-dropdown {\n  font-weight: 300;\n  font-size: 12px;\n  float: right;\n}\n.bookings-card .description.mt-2,\n.floating-card .description.mt-2,\n.packages-card .description.mt-2,\n.performance-card .description.mt-2 {\n  margin: 26px 0 12px !important;\n}\n.bookings-card .description.mt-2 .three p,\n.floating-card .description.mt-2 .three p,\n.packages-card .description.mt-2 .three p,\n.performance-card .description.mt-2 .three p {\n  color: #4F4F4F;\n  font-family: Ubuntu, Arial, Helvetica, sans-serif;\n}\n.bookings-card .description.mt-2 .two p,\n.floating-card .description.mt-2 .two p,\n.packages-card .description.mt-2 .two p,\n.performance-card .description.mt-2 .two p {\n  color: #828282;\n  font-family: Ubuntu, Arial, Helvetica, sans-serif;\n  font-size: 15px;\n}\n.bookings-card .progress-bar,\n.floating-card .progress-bar,\n.packages-card .progress-bar,\n.performance-card .progress-bar {\n  margin-top: 3px;\n  margin-bottom: 0;\n  height: 13px;\n  border-radius: 50px;\n}\n.bookings-card .progress-bar .bar,\n.floating-card .progress-bar .bar,\n.packages-card .progress-bar .bar,\n.performance-card .progress-bar .bar {\n  height: 13px;\n  border-radius: 50px;\n}\n.bookings-card .progress-bar._01 .bar,\n.floating-card .progress-bar._01 .bar,\n.packages-card .progress-bar._01 .bar,\n.performance-card .progress-bar._01 .bar {\n  background-color: #F9B253 !important;\n}\n.bookings-card .progress-bar._02 .bar,\n.floating-card .progress-bar._02 .bar,\n.packages-card .progress-bar._02 .bar,\n.performance-card .progress-bar._02 .bar {\n  background-color: #FA9917 !important;\n}\n.bookings-card .progress-bar._03 .bar,\n.floating-card .progress-bar._03 .bar,\n.packages-card .progress-bar._03 .bar,\n.performance-card .progress-bar._03 .bar {\n  background-color: #FF5F58 !important;\n}\n.bookings-card .progress-bar._04 .bar,\n.floating-card .progress-bar._04 .bar,\n.packages-card .progress-bar._04 .bar,\n.performance-card .progress-bar._04 .bar {\n  background-color: #DF427F !important;\n}\n.bookings-card .progress-bar._05 .bar,\n.floating-card .progress-bar._05 .bar,\n.packages-card .progress-bar._05 .bar,\n.performance-card .progress-bar._05 .bar {\n  background-color: #CA976B !important;\n}\n.bookings-card .progress-bar._06 .bar,\n.floating-card .progress-bar._06 .bar,\n.packages-card .progress-bar._06 .bar,\n.performance-card .progress-bar._06 .bar {\n  background-color: #4AA657 !important;\n}\n.bookings-card .progress-bar._07 .bar,\n.floating-card .progress-bar._07 .bar,\n.packages-card .progress-bar._07 .bar,\n.performance-card .progress-bar._07 .bar {\n  background-color: #5D9AC1 !important;\n}\n.bookings-card .ui.grid > .column:not(.row) {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.floating-card table th {\n  font-weight: 500;\n  padding-top: 12px !important;\n}\n.floating-card th,\n.floating-card td {\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  line-height: 13px;\n}\n.packages-card {\n  padding: 0 !important;\n}\n.packages-card .charts-grid {\n  position: relative;\n  margin-top: 30px;\n  height: 152px;\n}\n.packages-card .charts-grid .ct-chart {\n  height: auto;\n  max-height: 145px !important;\n}\n.packages-card .charts-grid .ct-chart .ct-series-a .ct-slice-donut-solid .colorchange {\n  fill: #4ba658 !important;\n}\n.packages-card .charts-grid .ct-chart .ct-series-b .ct-slice-donut-solid .colorchange {\n  fill: #91d69b !important;\n}\n.packages-card .charts-grid .placeholder-chart {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  top: 48%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  height: 72px;\n  width: 72px;\n  border-radius: 50%;\n  background-color: #FFF;\n  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.27);\n}\n.packages-card .charts-grid .placeholder-chart .placeholder-chart_title {\n  margin-top: 15px;\n  font-family: Ubuntu, Arial, Helvetica, sans-serif;\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 13px;\n  text-align: center;\n}\n.packages-card .charts-grid .placeholder-chart .placeholder-chart_label {\n  font-family: Ubuntu, Arial, Helvetica, sans-serif;\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 13px;\n  text-align: center;\n}\n.packages-card .placeholder-chart-grid {\n  width: 166px;\n  display: block;\n  margin: 22px auto 32px;\n}\n.packages-card .placeholder-chart-grid .eight {\n  padding: 0 15px;\n  border-left: 3px solid #4f4f4f;\n}\n.packages-card .placeholder-chart-grid .eight.active {\n  border-color: #F38220 !important;\n}\n.packages-card .placeholder-chart-grid span {\n  display: block;\n  color: #4F4F4F;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 13px;\n}\n.packages-card .placeholder-chart-grid p {\n  color: #4F4F4F;\n  font-size: 22px;\n  line-height: 25px;\n}\n.packages-card .bg-indicators {\n  padding: 0;\n  margin: 0;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  background-color: #3867B1;\n  text-align: center;\n  overflow: hidden;\n}\n.packages-card .bg-indicators .sixteen {\n  padding: 15px 15px 18px !important;\n  width: 100%;\n  border-bottom: 1px solid white;\n}\n.packages-card .bg-indicators .sixteen:first-child {\n  padding-top: 30px !important;\n}\n.packages-card .bg-indicators .sixteen:last-child {\n  border: 0;\n}\n.packages-card .bg-indicators span p {\n  color: #FFF;\n  font-size: 10px;\n  text-align: center;\n  line-height: 12px;\n}\n.packages-card .bg-indicators p {\n  color: white;\n  font-size: 26px;\n  font-weight: 800;\n}\n.performance-card {\n  height: auto;\n}\n.performance-card .field {\n  margin-top: 0 !important;\n}\n.performance-card .field .ui.slider.checkbox label,\n.performance-card .field .ui.slider.checkbox span {\n  display: inline;\n  font-size: 12px;\n  font-weight: 300;\n  color: #4F4F4F;\n}\n.performance-card .field .ui.slider.checkbox span {\n  margin-right: 12px;\n}\n.performance-card .field .ui.slider.checkbox .box:before,\n.performance-card .field .ui.slider.checkbox label:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  border: none !important;\n  left: 0;\n  z-index: 1;\n  top: 2px;\n  background-color: rgba(0, 0, 0, 0.05);\n  width: 3.5rem;\n  height: 10px;\n  -webkit-transform: none;\n          transform: none;\n  border-radius: 500rem;\n  -webkit-transition: background 0.3s ease;\n  transition: background 0.3s ease;\n}\n.performance-card .field .ui.slider.checkbox input {\n  left: 39px;\n}\n.performance-card .ct-performance-chart {\n  height: 280px;\n  margin-bottom: 0;\n}\n.logs-card .ct-productivity-chart {\n  height: 280px;\n}\n.menu {\n  max-height: 300px;\n  overflow-y: scroll;\n}\n.dropdown {\n  text-transform: capitalize;\n}\n#dateShow {\n  font-weight: normal;\n}\n#dateShow-productivity {\n  font-weight: normal;\n}\ntable thead tr th {\n  font-weight: 500;\n  font-size: 12px;\n}\n.ui.cards .cardmargin {\n  margin: 5px 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9jb21wb25lbnRzL2dyYXBocy9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcY29tb24tc3R5bGVzXFxzdGVwcGVyLnNjc3MiLCJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvY29tcG9uZW50cy9ncmFwaHMvZ3JhcGhzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvZGFzaGJvYXJkL2NvbXBvbmVudHMvZ3JhcGhzL0U6XFxCZWxhbFxccHJvamVjdHNcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxjb21vbi1zdHlsZXNcXGRlc2lnbi1wYWxldHRlLnNjc3MiLCJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvY29tcG9uZW50cy9ncmFwaHMvRTpcXEJlbGFsXFxwcm9qZWN0c1xcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxkYXNoYm9hcmRcXGNvbXBvbmVudHNcXGdyYXBoc1xcZ3JhcGhzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDSjtBRENJO0VBQ0UsVUFBQTtFQUNBLGtFQUFBO0VBQUEsMERBQUE7QUNDTjtBREVRO0VBQ0UseUJFZFE7RUZlUixTQUFBO0FDQVY7QURFVTtFQUNFLHVCQUFBO0FDQVo7QURHVTtFQUNFLHlCQUFBO0FDRFo7QURLUTtFQUNFLFNBQUE7RUFDQSx5QkU1QlE7RUY2QlIsWUFBQTtBQ0hWO0FEUVE7RUFDRSxnQ0FBQTtBQ05WO0FEV0k7RUFDRSxVQUFBO0VBQ0Esa0VBQUE7RUFBQSwwREFBQTtBQ1ROO0FEWVE7RUFDRSx5QkVoRE07RUZpRE4sU0FBQTtBQ1ZWO0FEWVU7RUFDRSx1QkFBQTtBQ1ZaO0FEYVU7RUFDRSx5QkFBQTtBQ1haO0FEZVE7RUFDRSxTQUFBO0VBQ0EseUJFOURNO0VGK0ROLFlBQUE7QUNiVjtBRGtCUTtFQUNFLGdDQUFBO0FDaEJWO0FEcUJJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ25CTjtBRHFCTTtFQUNFLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7QUNuQlI7QURzQk07RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0V6RU07RUYwRU4sMkJBQUE7RUFDQSxlQUFBO0VBQ0EsY0VwR1U7RUZxR1Ysa0JFaEZnQjtBRDREeEI7QURzQlE7RUFDRSxZQUFBO0FDcEJWO0FEeUJJO0VBQ0UsV0FBQTtBQ3ZCTjtBRHlCTTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FDdkJSO0FENkJBO0VBQ0UsYUFBQTtBQzFCRjtBRDRCRTtFQUNFLGNBQUE7QUMxQko7QUVyR0E7Ozs7RUFJSSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdURBQUE7RUFDQSw0QkFBQTtBRndHSjtBRXZHSTs7OztFQUNJLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUY0R1I7QUV6R1E7Ozs7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FGOEdaO0FFM0dJOzs7O0VBQ0ksOEJBQUE7QUZnSFI7QUUvR1E7Ozs7RUFDSSxjQUFBO0VBQ0EsaURBQUE7QUZvSFo7QUVsSFE7Ozs7RUFDSSxjQUFBO0VBQ0EsaURBQUE7RUFDQSxlQUFBO0FGdUhaO0FFcEhJOzs7O0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FGeUhSO0FFeEhROzs7O0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0FGNkhaO0FFM0hROzs7O0VBQ0ksb0NBQUE7QUZnSVo7QUU5SFE7Ozs7RUFDSSxvQ0FBQTtBRm1JWjtBRWpJUTs7OztFQUNJLG9DQUFBO0FGc0laO0FFcElROzs7O0VBQ0ksb0NBQUE7QUZ5SVo7QUV2SVE7Ozs7RUFDSSxvQ0FBQTtBRjRJWjtBRTFJUTs7OztFQUNJLG9DQUFBO0FGK0laO0FFN0lROzs7O0VBQ0ksb0NBQUE7QUZrSlo7QUU1SUk7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FGK0lSO0FFMUlJO0VBQ0ksZ0JBQUE7RUFDQSw0QkFBQTtBRjZJUjtBRTNJSTs7RUFFSSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUY2SVI7QUV6SUE7RUFDSSxxQkFBQTtBRjRJSjtBRTNJSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FGNklSO0FFNUlRO0VBQ0ksWUFBQTtFQUNBLDRCQUFBO0FGOElaO0FFM0lvQjtFQUNJLHdCQUFBO0FGNkl4QjtBRXRJb0I7RUFDSSx3QkFBQTtBRndJeEI7QUVuSVE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLFFBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNENBQUE7QUZxSVo7QUVwSVk7RUFDSSxnQkFBQTtFQUNBLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRnNJaEI7QUVwSVk7RUFDSSxpREFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUZzSWhCO0FFbElJO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBRm9JUjtBRW5JUTtFQUNJLGVBQUE7RUFDQSw4QkFBQTtBRnFJWjtBRXBJWTtFQUNJLGdDQUFBO0FGc0loQjtBRW5JUTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUZxSVo7QUVuSVE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FGcUlaO0FFbElJO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FGb0lSO0FFbklRO0VBQ0ksa0NBQUE7RUFDQSxXQUFBO0VBQ0EsOEJBQUE7QUZxSVo7QUVwSVk7RUFDSSw0QkFBQTtBRnNJaEI7QUVwSVk7RUFDSSxTQUFBO0FGc0loQjtBRW5JUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBRnFJWjtBRW5JUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUZxSVo7QUVoSUE7RUFDSSxZQUFBO0FGbUlKO0FFbElJO0VBQ0ksd0JBQUE7QUZvSVI7QUVsSVk7O0VBRUksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUZvSWhCO0FFbElZO0VBQ0ksa0JBQUE7QUZvSWhCO0FFaklROztFQUVJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLHFDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtVQUFBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHdDQUFBO0VBQUEsZ0NBQUE7QUZtSVo7QUVqSVE7RUFDSSxVQUFBO0FGbUlaO0FFaElJO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FGa0lSO0FFN0hJO0VBQ0ksYUFBQTtBRmdJUjtBRTVIQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUYrSEo7QUU1SEE7RUFDSSwwQkFBQTtBRitISjtBRTVIQTtFQUNJLG1CQUFBO0FGK0hKO0FFNUhBO0VBQ0ksbUJBQUE7QUYrSEo7QUU1SEE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUYrSEo7QUUzSEM7RUFDRyxpQkFBQTtBRjhISiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvY29tcG9uZW50cy9ncmFwaHMvZ3JhcGhzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0ZXBwZXItZ3JpZCB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICAuc3RlcHBlci1ncmlkX3N0ZXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAuNjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmLl9hY3RpdmUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG5cclxuICAgICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24ge1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGVlcC1ibHVlLWNvbG9yO1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG5cclxuICAgICAgICAgIGRpdi5pbWFnZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRlZXAtYmx1ZS1jb2xvcjtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIge1xyXG4gICAgICAgIGhyIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkZGVlcC1ibHVlLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuX2FjdGl2YXRlZCB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XHJcblxyXG4gICAgICAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiB7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG5cclxuICAgICAgICAgIGRpdi5pbWFnZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtYm9yZGVyIHtcclxuICAgICAgICBociB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgZGl2IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtcHJpbWFyeTtcclxuXHJcbiAgICAgICAgJi5fbGFzdCB7XHJcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgaHIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0yNHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zdGVwcGVyLWdyaWQtY29udGVudCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgJi5fYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG4iLCIuc3RlcHBlci1ncmlkIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3BhY2l0eTogMC42O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmUgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2Mjg2MjtcbiAgYm9yZGVyOiAwO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYgZGl2LmltYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdjpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBNkIxQzM7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGxhYmVsIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYyODYyO1xuICBjb2xvcjogd2hpdGU7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIgaHIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA2Mjg2Mjtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2YXRlZCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM3QURBO1xuICBib3JkZXI6IDA7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiBkaXYuaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2OmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0E2QjFDMztcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gbGFiZWwge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzdBREE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciBociB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNDM3QURBO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBNkIxQzM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gbGFiZWwge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBNkIxQzM7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNBNkIxQzM7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGxhYmVsLl9sYXN0IHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciBociB7XG4gIG1hcmdpbi10b3A6IC0yNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQTZCMUMzO1xufVxuXG4uc3RlcHBlci1ncmlkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnN0ZXBwZXItZ3JpZC1jb250ZW50Ll9hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmJvb2tpbmdzLWNhcmQsXG4uZmxvYXRpbmctY2FyZCxcbi5wYWNrYWdlcy1jYXJkLFxuLnBlcmZvcm1hbmNlLWNhcmQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSg2LCA0MCwgOTgsIDAuMSkgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNnB4IDEwcHggIWltcG9ydGFudDtcbn1cbi5ib29raW5ncy1jYXJkIC5oZWFkZXIgc3Bhbixcbi5mbG9hdGluZy1jYXJkIC5oZWFkZXIgc3Bhbixcbi5wYWNrYWdlcy1jYXJkIC5oZWFkZXIgc3Bhbixcbi5wZXJmb3JtYW5jZS1jYXJkIC5oZWFkZXIgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzRGNEY0Rjtcbn1cbi5ib29raW5ncy1jYXJkIC5oZWFkZXIgLmJvb2tpbmdzLWNhcmRfbS1kcm9wZG93bixcbi5mbG9hdGluZy1jYXJkIC5oZWFkZXIgLmJvb2tpbmdzLWNhcmRfbS1kcm9wZG93bixcbi5wYWNrYWdlcy1jYXJkIC5oZWFkZXIgLmJvb2tpbmdzLWNhcmRfbS1kcm9wZG93bixcbi5wZXJmb3JtYW5jZS1jYXJkIC5oZWFkZXIgLmJvb2tpbmdzLWNhcmRfbS1kcm9wZG93biB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmJvb2tpbmdzLWNhcmQgLmRlc2NyaXB0aW9uLm10LTIsXG4uZmxvYXRpbmctY2FyZCAuZGVzY3JpcHRpb24ubXQtMixcbi5wYWNrYWdlcy1jYXJkIC5kZXNjcmlwdGlvbi5tdC0yLFxuLnBlcmZvcm1hbmNlLWNhcmQgLmRlc2NyaXB0aW9uLm10LTIge1xuICBtYXJnaW46IDI2cHggMCAxMnB4ICFpbXBvcnRhbnQ7XG59XG4uYm9va2luZ3MtY2FyZCAuZGVzY3JpcHRpb24ubXQtMiAudGhyZWUgcCxcbi5mbG9hdGluZy1jYXJkIC5kZXNjcmlwdGlvbi5tdC0yIC50aHJlZSBwLFxuLnBhY2thZ2VzLWNhcmQgLmRlc2NyaXB0aW9uLm10LTIgLnRocmVlIHAsXG4ucGVyZm9ybWFuY2UtY2FyZCAuZGVzY3JpcHRpb24ubXQtMiAudGhyZWUgcCB7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LWZhbWlseTogVWJ1bnR1LCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuLmJvb2tpbmdzLWNhcmQgLmRlc2NyaXB0aW9uLm10LTIgLnR3byBwLFxuLmZsb2F0aW5nLWNhcmQgLmRlc2NyaXB0aW9uLm10LTIgLnR3byBwLFxuLnBhY2thZ2VzLWNhcmQgLmRlc2NyaXB0aW9uLm10LTIgLnR3byBwLFxuLnBlcmZvcm1hbmNlLWNhcmQgLmRlc2NyaXB0aW9uLm10LTIgLnR3byBwIHtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtZmFtaWx5OiBVYnVudHUsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5ib29raW5ncy1jYXJkIC5wcm9ncmVzcy1iYXIsXG4uZmxvYXRpbmctY2FyZCAucHJvZ3Jlc3MtYmFyLFxuLnBhY2thZ2VzLWNhcmQgLnByb2dyZXNzLWJhcixcbi5wZXJmb3JtYW5jZS1jYXJkIC5wcm9ncmVzcy1iYXIge1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGhlaWdodDogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbi5ib29raW5ncy1jYXJkIC5wcm9ncmVzcy1iYXIgLmJhcixcbi5mbG9hdGluZy1jYXJkIC5wcm9ncmVzcy1iYXIgLmJhcixcbi5wYWNrYWdlcy1jYXJkIC5wcm9ncmVzcy1iYXIgLmJhcixcbi5wZXJmb3JtYW5jZS1jYXJkIC5wcm9ncmVzcy1iYXIgLmJhciB7XG4gIGhlaWdodDogMTNweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbi5ib29raW5ncy1jYXJkIC5wcm9ncmVzcy1iYXIuXzAxIC5iYXIsXG4uZmxvYXRpbmctY2FyZCAucHJvZ3Jlc3MtYmFyLl8wMSAuYmFyLFxuLnBhY2thZ2VzLWNhcmQgLnByb2dyZXNzLWJhci5fMDEgLmJhcixcbi5wZXJmb3JtYW5jZS1jYXJkIC5wcm9ncmVzcy1iYXIuXzAxIC5iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlCMjUzICFpbXBvcnRhbnQ7XG59XG4uYm9va2luZ3MtY2FyZCAucHJvZ3Jlc3MtYmFyLl8wMiAuYmFyLFxuLmZsb2F0aW5nLWNhcmQgLnByb2dyZXNzLWJhci5fMDIgLmJhcixcbi5wYWNrYWdlcy1jYXJkIC5wcm9ncmVzcy1iYXIuXzAyIC5iYXIsXG4ucGVyZm9ybWFuY2UtY2FyZCAucHJvZ3Jlc3MtYmFyLl8wMiAuYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZBOTkxNyAhaW1wb3J0YW50O1xufVxuLmJvb2tpbmdzLWNhcmQgLnByb2dyZXNzLWJhci5fMDMgLmJhcixcbi5mbG9hdGluZy1jYXJkIC5wcm9ncmVzcy1iYXIuXzAzIC5iYXIsXG4ucGFja2FnZXMtY2FyZCAucHJvZ3Jlc3MtYmFyLl8wMyAuYmFyLFxuLnBlcmZvcm1hbmNlLWNhcmQgLnByb2dyZXNzLWJhci5fMDMgLmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjVGNTggIWltcG9ydGFudDtcbn1cbi5ib29raW5ncy1jYXJkIC5wcm9ncmVzcy1iYXIuXzA0IC5iYXIsXG4uZmxvYXRpbmctY2FyZCAucHJvZ3Jlc3MtYmFyLl8wNCAuYmFyLFxuLnBhY2thZ2VzLWNhcmQgLnByb2dyZXNzLWJhci5fMDQgLmJhcixcbi5wZXJmb3JtYW5jZS1jYXJkIC5wcm9ncmVzcy1iYXIuXzA0IC5iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREY0MjdGICFpbXBvcnRhbnQ7XG59XG4uYm9va2luZ3MtY2FyZCAucHJvZ3Jlc3MtYmFyLl8wNSAuYmFyLFxuLmZsb2F0aW5nLWNhcmQgLnByb2dyZXNzLWJhci5fMDUgLmJhcixcbi5wYWNrYWdlcy1jYXJkIC5wcm9ncmVzcy1iYXIuXzA1IC5iYXIsXG4ucGVyZm9ybWFuY2UtY2FyZCAucHJvZ3Jlc3MtYmFyLl8wNSAuYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NBOTc2QiAhaW1wb3J0YW50O1xufVxuLmJvb2tpbmdzLWNhcmQgLnByb2dyZXNzLWJhci5fMDYgLmJhcixcbi5mbG9hdGluZy1jYXJkIC5wcm9ncmVzcy1iYXIuXzA2IC5iYXIsXG4ucGFja2FnZXMtY2FyZCAucHJvZ3Jlc3MtYmFyLl8wNiAuYmFyLFxuLnBlcmZvcm1hbmNlLWNhcmQgLnByb2dyZXNzLWJhci5fMDYgLmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0QUE2NTcgIWltcG9ydGFudDtcbn1cbi5ib29raW5ncy1jYXJkIC5wcm9ncmVzcy1iYXIuXzA3IC5iYXIsXG4uZmxvYXRpbmctY2FyZCAucHJvZ3Jlc3MtYmFyLl8wNyAuYmFyLFxuLnBhY2thZ2VzLWNhcmQgLnByb2dyZXNzLWJhci5fMDcgLmJhcixcbi5wZXJmb3JtYW5jZS1jYXJkIC5wcm9ncmVzcy1iYXIuXzA3IC5iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUQ5QUMxICFpbXBvcnRhbnQ7XG59XG5cbi5ib29raW5ncy1jYXJkIC51aS5ncmlkID4gLmNvbHVtbjpub3QoLnJvdykge1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xufVxuXG4uZmxvYXRpbmctY2FyZCB0YWJsZSB0aCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmctdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG4uZmxvYXRpbmctY2FyZCB0aCxcbi5mbG9hdGluZy1jYXJkIHRkIHtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xufVxuXG4ucGFja2FnZXMtY2FyZCB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cbi5wYWNrYWdlcy1jYXJkIC5jaGFydHMtZ3JpZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgaGVpZ2h0OiAxNTJweDtcbn1cbi5wYWNrYWdlcy1jYXJkIC5jaGFydHMtZ3JpZCAuY3QtY2hhcnQge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDE0NXB4ICFpbXBvcnRhbnQ7XG59XG4ucGFja2FnZXMtY2FyZCAuY2hhcnRzLWdyaWQgLmN0LWNoYXJ0IC5jdC1zZXJpZXMtYSAuY3Qtc2xpY2UtZG9udXQtc29saWQgLmNvbG9yY2hhbmdlIHtcbiAgZmlsbDogIzRiYTY1OCAhaW1wb3J0YW50O1xufVxuLnBhY2thZ2VzLWNhcmQgLmNoYXJ0cy1ncmlkIC5jdC1jaGFydCAuY3Qtc2VyaWVzLWIgLmN0LXNsaWNlLWRvbnV0LXNvbGlkIC5jb2xvcmNoYW5nZSB7XG4gIGZpbGw6ICM5MWQ2OWIgIWltcG9ydGFudDtcbn1cbi5wYWNrYWdlcy1jYXJkIC5jaGFydHMtZ3JpZCAucGxhY2Vob2xkZXItY2hhcnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdG9wOiA0OCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgaGVpZ2h0OiA3MnB4O1xuICB3aWR0aDogNzJweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjI3KTtcbn1cbi5wYWNrYWdlcy1jYXJkIC5jaGFydHMtZ3JpZCAucGxhY2Vob2xkZXItY2hhcnQgLnBsYWNlaG9sZGVyLWNoYXJ0X3RpdGxlIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZm9udC1mYW1pbHk6IFVidW50dSwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBhY2thZ2VzLWNhcmQgLmNoYXJ0cy1ncmlkIC5wbGFjZWhvbGRlci1jaGFydCAucGxhY2Vob2xkZXItY2hhcnRfbGFiZWwge1xuICBmb250LWZhbWlseTogVWJ1bnR1LCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ucGFja2FnZXMtY2FyZCAucGxhY2Vob2xkZXItY2hhcnQtZ3JpZCB7XG4gIHdpZHRoOiAxNjZweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogMjJweCBhdXRvIDMycHg7XG59XG4ucGFja2FnZXMtY2FyZCAucGxhY2Vob2xkZXItY2hhcnQtZ3JpZCAuZWlnaHQge1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzRmNGY0Zjtcbn1cbi5wYWNrYWdlcy1jYXJkIC5wbGFjZWhvbGRlci1jaGFydC1ncmlkIC5laWdodC5hY3RpdmUge1xuICBib3JkZXItY29sb3I6ICNGMzgyMjAgIWltcG9ydGFudDtcbn1cbi5wYWNrYWdlcy1jYXJkIC5wbGFjZWhvbGRlci1jaGFydC1ncmlkIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG59XG4ucGFja2FnZXMtY2FyZCAucGxhY2Vob2xkZXItY2hhcnQtZ3JpZCBwIHtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG4ucGFja2FnZXMtY2FyZCAuYmctaW5kaWNhdG9ycyB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ucGFja2FnZXMtY2FyZCAuYmctaW5kaWNhdG9ycyAuc2l4dGVlbiB7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxOHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgd2hpdGU7XG59XG4ucGFja2FnZXMtY2FyZCAuYmctaW5kaWNhdG9ycyAuc2l4dGVlbjpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG59XG4ucGFja2FnZXMtY2FyZCAuYmctaW5kaWNhdG9ycyAuc2l4dGVlbjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyOiAwO1xufVxuLnBhY2thZ2VzLWNhcmQgLmJnLWluZGljYXRvcnMgc3BhbiBwIHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMTJweDtcbn1cbi5wYWNrYWdlcy1jYXJkIC5iZy1pbmRpY2F0b3JzIHAge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbn1cblxuLnBlcmZvcm1hbmNlLWNhcmQge1xuICBoZWlnaHQ6IGF1dG87XG59XG4ucGVyZm9ybWFuY2UtY2FyZCAuZmllbGQge1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59XG4ucGVyZm9ybWFuY2UtY2FyZCAuZmllbGQgLnVpLnNsaWRlci5jaGVja2JveCBsYWJlbCxcbi5wZXJmb3JtYW5jZS1jYXJkIC5maWVsZCAudWkuc2xpZGVyLmNoZWNrYm94IHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgY29sb3I6ICM0RjRGNEY7XG59XG4ucGVyZm9ybWFuY2UtY2FyZCAuZmllbGQgLnVpLnNsaWRlci5jaGVja2JveCBzcGFuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuLnBlcmZvcm1hbmNlLWNhcmQgLmZpZWxkIC51aS5zbGlkZXIuY2hlY2tib3ggLmJveDpiZWZvcmUsXG4ucGVyZm9ybWFuY2UtY2FyZCAuZmllbGQgLnVpLnNsaWRlci5jaGVja2JveCBsYWJlbDpiZWZvcmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIHdpZHRoOiAzLjVyZW07XG4gIGhlaWdodDogMTBweDtcbiAgdHJhbnNmb3JtOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MDByZW07XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcyBlYXNlO1xufVxuLnBlcmZvcm1hbmNlLWNhcmQgLmZpZWxkIC51aS5zbGlkZXIuY2hlY2tib3ggaW5wdXQge1xuICBsZWZ0OiAzOXB4O1xufVxuLnBlcmZvcm1hbmNlLWNhcmQgLmN0LXBlcmZvcm1hbmNlLWNoYXJ0IHtcbiAgaGVpZ2h0OiAyODBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmxvZ3MtY2FyZCAuY3QtcHJvZHVjdGl2aXR5LWNoYXJ0IHtcbiAgaGVpZ2h0OiAyODBweDtcbn1cblxuLm1lbnUge1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4uZHJvcGRvd24ge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuI2RhdGVTaG93IHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuI2RhdGVTaG93LXByb2R1Y3Rpdml0eSB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbnRhYmxlIHRoZWFkIHRyIHRoIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udWkuY2FyZHMgLmNhcmRtYXJnaW4ge1xuICBtYXJnaW46IDVweCAwLjVlbTtcbn0iLCIkcHJpbWFyeS1jb2xvcjogIzQzN0FEQTtcclxuJHNlY29uZGFyeS1jb2xvcjogI0E2QjFDMztcclxuJGRlZXAtYmx1ZS1jb2xvcjogIzA2Mjg2MjtcclxuJGxpZ2h0LXNtb2tlLWNvbG9yOiAjZTVlNWU1O1xyXG4kdm9pbGEtZ3JlZW46ICM4NEJDNkE7XHJcbiRwdXJlLXdoaXRlOiB3aGl0ZTtcclxuJGZhdWx0LWNvbG9yOiAjREU3OTc5O1xyXG4kd2FybmluZy1jb2xvcjogI0VDQzA0RTtcclxuJHN1Y2Nlc3MtY29sb3I6ICM3M0IyNUQ7XHJcblxyXG4kYm9keS1iYXNlOiAjRjZGOUZDO1xyXG4kY29ycG9yYXRlLWJsdWUtYmFzZTogIzQ1NjdBQztcclxuXHJcbiRjb250YWluZXItYmFzZTogd2hpdGU7XHJcbiRjb250YWluZXItYmFzZS1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoNiwgNDAsIDk4LCAwLjEpO1xyXG4kY29udGFpbmVyLWRyb3Bkb3ducy1zaGFkb3c6IDBweCA4cHggMTRweCByZ2JhKDAsIDU4LCAxNjQsIC4yKTtcclxuXHJcbiRwcmltYXJ5LXNoYWRvdzogMHB4IDQuODNweCAxNnB4IHJnYmEoNjcsIDEyMiwgMjE4LCAuNSk7XHJcbiRsaWdodC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgNTgsIDE2NCwgLjI1KTtcclxuJGZhZGVkLXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgxNjcsIDE3MywgMTgyLCAuMik7XHJcbiRsaWdodC1leHRlbmRlZC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgNTgsIDE2NCwgLjI1KTtcclxuXHJcbiRib3JkZXItcmFkaXVzLXByaW1hcnk6IDhweDtcclxuJGJvcmRlci1yYWRpdXMtc2Vjb25kYXJ5OiA2cHg7XHJcblxyXG4kZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XHJcblxyXG4kdG9hc3QtaW5mby1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiR0b2FzdC1pbmZvLXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDExMSwgMCwgMCwgLjIpO1xyXG5cclxuJHRvYXN0LWVycm9yLWNvbG9yOiAkZmF1bHQtY29sb3I7XHJcbiR0b2FzdC1lcnJvci1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxMTEsIDAsIDAsIC4yKTtcclxuXHJcbiR0b2FzdC13YXJuaW5nLWNvbG9yOiAkd2FybmluZy1jb2xvcjtcclxuJHRvYXN0LXdhcm5pbmctc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTc3LCAxMjcsIDAsIC4yKTtcclxuXHJcbiR0b2FzdC1zdWNjZXNzLWNvbG9yOiAkc3VjY2Vzcy1jb2xvcjtcclxuJHRvYXN0LXN1Y2Nlc3Mtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMzQsIDEzMCwgMCwgLjIpO1xyXG4iLCJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi8uLi9jb21vbi1zdHlsZXMvY29tbW9uLnNjc3NcIjtcclxuLmJvb2tpbmdzLWNhcmQsXHJcbi5mbG9hdGluZy1jYXJkLFxyXG4ucGFja2FnZXMtY2FyZCxcclxuLnBlcmZvcm1hbmNlLWNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXByaW1hcnkgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6ICRjb250YWluZXItYmFzZS1zaGFkb3cgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDZweCAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAuaGVhZGVyIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICAuYm9va2luZ3MtY2FyZF9tLWRyb3Bkb3duIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRlc2NyaXB0aW9uLm10LTIge1xyXG4gICAgICAgIG1hcmdpbjogMjZweCAwIDEycHggIWltcG9ydGFudDtcclxuICAgICAgICAudGhyZWUgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogVWJ1bnR1LCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudHdvIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFVidW50dSwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcm9ncmVzcy1iYXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgIGhlaWdodDogMTNweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIC5iYXIge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuXzAxIC5iYXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlCMjUzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuXzAyIC5iYXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkE5OTE3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuXzAzIC5iYXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY1RjU4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuXzA0IC5iYXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREY0MjdGICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuXzA1IC5iYXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0E5NzZCICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuXzA2IC5iYXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEFBNjU3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuXzA3IC5iYXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNUQ5QUMxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYm9va2luZ3MtY2FyZCB7XHJcbiAgICAudWkuZ3JpZD4uY29sdW1uOm5vdCgucm93KSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDRweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmxvYXRpbmctY2FyZCB7XHJcbiAgICB0YWJsZSB0aCB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgdGgsXHJcbiAgICB0ZCB7XHJcbiAgICAgICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgIH1cclxufVxyXG5cclxuLnBhY2thZ2VzLWNhcmQge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gICAgLmNoYXJ0cy1ncmlkIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MnB4O1xyXG4gICAgICAgIC5jdC1jaGFydCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTQ1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLmN0LXNlcmllcy1he1xyXG4gICAgICAgICAgICAgICAgLmN0LXNsaWNlLWRvbnV0LXNvbGlke1xyXG4gICAgICAgICAgICAgICAgICAgIC5jb2xvcmNoYW5nZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDojNGJhNjU4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY3Qtc2VyaWVzLWJ7XHJcbiAgICAgICAgICAgICAgICAuY3Qtc2xpY2UtZG9udXQtc29saWR7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbG9yY2hhbmdle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjOTFkNjliICAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucGxhY2Vob2xkZXItY2hhcnQge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgdG9wOiA0OCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNzJweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDVweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjI3KTtcclxuICAgICAgICAgICAgLnBsYWNlaG9sZGVyLWNoYXJ0X3RpdGxlIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogVWJ1bnR1LCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wbGFjZWhvbGRlci1jaGFydF9sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogVWJ1bnR1LCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnBsYWNlaG9sZGVyLWNoYXJ0LWdyaWQge1xyXG4gICAgICAgIHdpZHRoOiAxNjZweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IDIycHggYXV0byAzMnB4O1xyXG4gICAgICAgIC5laWdodCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjNGY0ZjRmO1xyXG4gICAgICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNGMzgyMjAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJnLWluZGljYXRvcnMge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgLnNpeHRlZW4ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDE1cHggMThweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucGVyZm9ybWFuY2UtY2FyZCB7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAuZmllbGQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAudWkuc2xpZGVyLmNoZWNrYm94IHtcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51aS5zbGlkZXIuY2hlY2tib3ggLmJveDpiZWZvcmUsXHJcbiAgICAgICAgLnVpLnNsaWRlci5jaGVja2JveCBsYWJlbDpiZWZvcmUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgIHRvcDogMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4wNSk7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzLjVyZW07XHJcbiAgICAgICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MDByZW07XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgLjNzIGVhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC51aS5zbGlkZXIuY2hlY2tib3ggaW5wdXQge1xyXG4gICAgICAgICAgICBsZWZ0OiAzOXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jdC1wZXJmb3JtYW5jZS1jaGFydCB7XHJcbiAgICAgICAgaGVpZ2h0OiAyODBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubG9ncy1jYXJkIHtcclxuICAgIC5jdC1wcm9kdWN0aXZpdHktY2hhcnQge1xyXG4gICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsXHJcbn1cclxuXHJcbi5kcm9wZG93biB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuI2RhdGVTaG93IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbiNkYXRlU2hvdy1wcm9kdWN0aXZpdHkge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxudGFibGUgdGhlYWQgdHIgdGgge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnVpLmNhcmRze1xyXG4gLmNhcmRtYXJnaW57XHJcbiAgICBtYXJnaW46NXB4IDAuNWVtO1xyXG4gIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/dashboard/components/graphs/graphs.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/layout/dashboard/components/graphs/graphs.component.ts ***!
    \************************************************************************/

  /*! exports provided: GraphsComponent */

  /***/
  function srcAppLayoutDashboardComponentsGraphsGraphsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraphsComponent", function () {
      return GraphsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../shared/services/dashboard.service */
    "./src/app/shared/services/dashboard.service.ts");
    /* harmony import */


    var _shared_services_pointsale_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../shared/services/pointsale.service */
    "./src/app/shared/services/pointsale.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);

    var GraphsComponent =
    /*#__PURE__*/
    function () {
      function GraphsComponent(dashboardService, posService) {
        _classCallCheck(this, GraphsComponent);

        this.dashboardService = dashboardService;
        this.posService = posService;
        this.bookingsLoader = true;
        this.organisationLoader = true;
        this.performance_type = false; // presetInfo: any = {
        //   active: 0,
        //   inactive: 0,
        //   subagents: 0,
        //   total: 0,
        //   websites: 0,
        //   corporates: 0
        // }

        this.flightsInfo = {
          keys: [],
          searches: [],
          tickets: []
        };
      }

      _createClass(GraphsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // this.dashboardService.fetchBookingsInformation({})
          // .subscribe((res:any) => {
          //   if(res.status == 200) {
          //     this.bookingsInfo = res.bookings_info;
          //   }
          // }, err => {
          //   Swal.fire('Oops', `Something bad happened at our end. ${err}`, 'error');
          // })
          // this.dashboardService.fetchPresetInformation({})
          // .subscribe((res:any) => {
          //   if(res.status == 200) {
          //     this.presetInfo = res.Stats;
          //     this.displayPresetCharts();
          //   }
          // }, err => {
          //   Swal.fire('Oops', `Something bad happened at our end. ${err}`, 'error');
          // })
          this.dashboardService.fetchFlightInformation().subscribe(function (res) {
            if (res.status == 200) {
              _this.flightsInfo = res.Stats;

              _this.displaySearchLogChart();
            }
          }, function (err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Oops', "Something bad happened at our end. ".concat(err), 'error');
          }); // this.posService.fetchAllPointofSale()
          // .subscribe((res:any) => {
          //   if(res.status == 200) {
          //     this.POS = res.POS;
          //   }
          // }, err => {
          //   Swal.fire('Oops', `Something bad happened at our end. ${err}`, 'error');
          // })
          // this.fetchProductivityChartData(null);
          // this.fetchPerformanceChartData(null);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var scope = this;
          this.displayPerformanceChart(); // this.displayPresetChart();
          // this.displayPresetCharts();

          this.displayProductivityChart(); // this.displaySearchLogChart();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var bookings = changes.bookings;
          var performanceInfo = changes.performanceInfo;
          var marginInfo = changes.marginInfo;
          var presetInfo = changes.presetInfo;

          if (bookings) {
            console.log('boking update');
            this.displayBookingBars(bookings.firstChange);
          }

          if (performanceInfo) {
            this.displayPerformanceChart();
          }

          if (presetInfo) {
            console.log("presetInfo changes", presetInfo);
            this.displayPresetCharts();
          }

          if (marginInfo) {
            // if(!marginInfo.firstChange)
            this.displayProductivityChart();
          }
        } // Bookings

      }, {
        key: "displayBookingBars",
        value: function displayBookingBars(firstTime) {
          var bookings = this.bookings;
          var keys = Object.keys(bookings);

          for (var index = 0; index < keys.length; index++) {
            var element = keys[index];
            if (bookings.total < bookings[element]) bookings.total = bookings[element];
          }

          this.bookings.total = bookings.total + 100;
        } // not using

      }, {
        key: "displayPresetChart",
        value: function displayPresetChart() {
          var chart = new Chartist.Pie('.ct-charts', {
            series: [40, 60],
            labels: [1, 2]
          }, {
            donut: true,
            donutWidth: 28,
            showLabel: false
          });
          chart.on('draw', function (data) {
            if (data.type === 'slice') {
              // Get the total path length in order to use for dash array animation
              var pathLength = data.element._node.getTotalLength(); // Set a dasharray that matches the path length as prerequisite to animate dashoffset


              data.element.attr({
                'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
              }); // Create animation definition while also assigning an ID to the animation for later sync usage

              var animationDefinition = {
                'stroke-dashoffset': {
                  id: 'anim' + data.index,
                  dur: 1000,
                  from: -pathLength + 'px',
                  to: '0px',
                  easing: Chartist.Svg.Easing.easeOutQuint,
                  // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
                  fill: 'freeze'
                }
              }; // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation

              if (data.index !== 0) {
                animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
              } // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us


              data.element.attr({
                'stroke-dashoffset': -pathLength + 'px'
              }); // We can't use guided mode as the animations need to rely on setting begin manually
              // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate

              data.element.animate(animationDefinition, false);
            }
          });
        } // Preset

      }, {
        key: "displayPresetCharts",
        value: function displayPresetCharts() {
          console.log("presetInfo", this.presetInfo);
          var chart = new Chartist.Pie('.ct-chart', {
            labels: ['Subagents', 'Websites', 'Corporates', 'Active', 'Inactive'],
            series: [{
              "name": "Active",
              "data": this.presetInfo.active + 5
            }, {
              "name": "Inactive",
              "data": this.presetInfo.inactive + 10
            }]
          }, {
            donut: true,
            donutWidth: 30,
            donutSolid: true,
            startAngle: 270,
            showLabel: false,
            showArea: true
          });
          chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
              data.element.animate({
                d: {
                  begin: 2000 * data.index,
                  dur: 2000,
                  from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                  to: data.path.clone().stringify(),
                  easing: Chartist.Svg.Easing.easeOutQuint
                }
              });
            }
          });
        } // not using

      }, {
        key: "displayProductivityChart",
        value: function displayProductivityChart() {
          var data = this.marginInfo;
          var chart = new Chartist.Line('.ct-margin-chart', {
            labels: data.tags,
            series: [data.margin]
          }, {
            low: 0,
            showArea: true,
            showPoint: false,
            fullWidth: true
          });
          chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
              data.element.animate({
                d: {
                  begin: 2000 * data.index,
                  dur: 2000,
                  from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                  to: data.path.clone().stringify(),
                  easing: Chartist.Svg.Easing.easeOutQuint
                }
              });
            }
          });
        } // Performance

      }, {
        key: "displayPerformanceChart",
        value: function displayPerformanceChart() {
          var series = [];
          var data = this.performanceInfo;
          console.log('Perforamce info is => ', data);

          if (this.performance_type) {
            series = [data.supplier_price, data.markup_price, data.total_achieved];
          } else {
            series = [data.total_achieved];
          } // return ;


          var barChart = new Chartist.Bar('.ct-performance-chart', {
            labels: data.tags,
            series: series
          }, {
            seriesBarDistance: 10,
            axisX: {
              offset: 60
            },
            axisY: {
              offset: 80,
              labelInterpolationFnc: function labelInterpolationFnc(value) {
                return value;
              },
              scaleMinSpace: 15
            }
          });
        } // Tickets & Search Logs

      }, {
        key: "displaySearchLogChart",
        value: function displaySearchLogChart() {
          var chart = new Chartist.Line('.ct-logs-chart', {
            labels: this.flightsInfo.keys,
            series: [this.flightsInfo.searches, this.flightsInfo.tickets]
          }, {
            low: 0,
            showArea: true,
            // showPoint: false,
            fullWidth: true
          });
          chart.on('draw', function (data) {
            if (data.type === 'line' || data.type === 'area') {
              data.element.animate({
                d: {
                  begin: 2000 * data.index,
                  dur: 2000,
                  from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                  to: data.path.clone().stringify(),
                  easing: Chartist.Svg.Easing.easeOutQuint
                }
              });
            }
          });
        }
      }, {
        key: "getWidth",
        value: function getWidth(total, present) {
          var perc = present / total * 100;
          return perc + '%';
        }
      }]);

      return GraphsComponent;
    }();

    GraphsComponent.ctorParameters = function () {
      return [{
        type: _shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]
      }, {
        type: _shared_services_pointsale_service__WEBPACK_IMPORTED_MODULE_2__["POSService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], GraphsComponent.prototype, "bookings", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], GraphsComponent.prototype, "presetInfo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], GraphsComponent.prototype, "performanceInfo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()], GraphsComponent.prototype, "marginInfo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])("bookingsLoader")], GraphsComponent.prototype, "bookingsLoader", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])("organisationLoader")], GraphsComponent.prototype, "organisationLoader", void 0);
    GraphsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-graphs',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./graphs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/dashboard/components/graphs/graphs.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./graphs.component.scss */
      "./src/app/layout/dashboard/components/graphs/graphs.component.scss")).default]
    })], GraphsComponent);
    /***/
  },

  /***/
  "./src/app/layout/dashboard/dashboard-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/layout/dashboard/dashboard-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: DashboardRoutingModule */

  /***/
  function srcAppLayoutDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
      return DashboardRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/layout/dashboard/dashboard.component.ts");

    var routes = [{
      path: '',
      component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }];

    var DashboardRoutingModule = function DashboardRoutingModule() {
      _classCallCheck(this, DashboardRoutingModule);
    };

    DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/dashboard/dashboard.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/layout/dashboard/dashboard.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".page-wrapper {\n  margin-top: 24px;\n  padding: 0 24px 28px;\n}\n.page-wrapper .page-wrapper_title {\n  margin: 0;\n  padding: 0 0 28px;\n  color: #4f4f4f;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 20px;\n  font-weight: 300;\n  line-height: 22px;\n}\n.ui.form .fields {\n  margin-bottom: 24px;\n}\n.outer-basic {\n  background-color: #fff;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n}\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n  padding: 50px;\n}\n.d_date_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n.d_date_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n.d_date_pickers .input .icon {\n  opacity: 1;\n  z-index: 1;\n}\n.d_date_pickers .input .icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n.d_date_pickers .input .icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n.d_date_pickers .input .search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.d_date_pickers .input .search.dropdown .search {\n  margin-left: 42px !important;\n}\n.d_date_pickers .input .search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n.bookings_btn-panel button {\n  position: absolute;\n  bottom: 2px;\n  right: 66px;\n  width: 135px;\n  border-radius: 3px;\n  background-color: #3867B1;\n  margin-right: 222px;\n}\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  line-height: 17px;\n  font-weight: 500;\n}\n.ui.left.icon.input {\n  top: 3px;\n}\n.label {\n  margin-bottom: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7QUNDSjtBREFJO0VBQ0ksU0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFUjtBREVBO0VBQ0ksbUJBQUE7QUNDSjtBREVBO0VBQ0ksc0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FDQ0o7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NKO0FER0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDQVI7QURFSTtFQUNJLHdCQUFBO0VBQ0EsMENBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDQVI7QURFSTtFQUNJLFVBQUE7RUFDQSxVQUFBO0FDQVI7QURDUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDQ1o7QURBWTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0VoQjtBREVJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FDQVI7QURDUTtFQUNJLDRCQUFBO0FDQ1o7QURDUTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0FDQ1o7QURLSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDRlI7QURPQTtFQUNJLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNKSjtBRE9BO0VBQ0ksUUFBQTtBQ0pKO0FET0E7RUFDSSw2QkFBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS13cmFwcGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICBwYWRkaW5nOiAwIDI0cHggMjhweDtcclxuICAgIC5wYWdlLXdyYXBwZXJfdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMjhweDtcclxuICAgICAgICBjb2xvcjogIzRmNGY0ZjtcclxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS5mb3JtIC5maWVsZHMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpY0Zvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG59XHJcblxyXG4uZF9kYXRlX3BpY2tlcnMgLmlucHV0IHtcclxuICAgICYuYm9va2luZ3NfZGF0ZXBpY2tlciB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEzOHB4O1xyXG4gICAgfVxyXG4gICAgLnVpLmJhc2ljLmZsb2F0aW5nLmJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE1MiwgMTUyLCAxNTIsIDAuNikgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgICB9XHJcbiAgICAuaWNvbiB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgICAgICYuY2FsIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zZWFyY2guZHJvcGRvd24ge1xyXG4gICAgICAgIHdpZHRoOiAyMThweDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQycHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlZmF1bHQudGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAwIDAgMzhweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJvb2tpbmdzX2J0bi1wYW5lbCB7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDJweDtcclxuICAgICAgICByaWdodDogNjZweDtcclxuICAgICAgICB3aWR0aDogMTM1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMjJweDtcclxuICAgICAgICAvLyBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS5mb3JtIC5maWVsZD5sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi51aS5sZWZ0Lmljb24uaW5wdXR7XHJcbiAgICB0b3A6M3B4O1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn0iLCIucGFnZS13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgcGFkZGluZzogMCAyNHB4IDI4cHg7XG59XG4ucGFnZS13cmFwcGVyIC5wYWdlLXdyYXBwZXJfdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMCAyOHB4O1xuICBjb2xvcjogIzRmNGY0ZjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi51aS5mb3JtIC5maWVsZHMge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4ub3V0ZXItYmFzaWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLm91dGVyLWJhc2ljRm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDUwcHg7XG59XG5cbi5kX2RhdGVfcGlja2VycyAuaW5wdXQuYm9va2luZ3NfZGF0ZXBpY2tlciB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIG1heC13aWR0aDogMTM4cHg7XG59XG4uZF9kYXRlX3BpY2tlcnMgLmlucHV0IC51aS5iYXNpYy5mbG9hdGluZy5idXR0b24ge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiByZ2JhKDE1MiwgMTUyLCAxNTIsIDAuNikgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTFweDtcbn1cbi5kX2RhdGVfcGlja2VycyAuaW5wdXQgLmljb24ge1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxO1xufVxuLmRfZGF0ZV9waWNrZXJzIC5pbnB1dCAuaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xuICB3aWR0aDogMjRweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLmRfZGF0ZV9waWNrZXJzIC5pbnB1dCAuaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsIHtcbiAgd2lkdGg6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uZF9kYXRlX3BpY2tlcnMgLmlucHV0IC5zZWFyY2guZHJvcGRvd24ge1xuICB3aWR0aDogMjE4cHg7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG59XG4uZF9kYXRlX3BpY2tlcnMgLmlucHV0IC5zZWFyY2guZHJvcGRvd24gLnNlYXJjaCB7XG4gIG1hcmdpbi1sZWZ0OiA0MnB4ICFpbXBvcnRhbnQ7XG59XG4uZF9kYXRlX3BpY2tlcnMgLmlucHV0IC5zZWFyY2guZHJvcGRvd24gLmRlZmF1bHQudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDhweCAwIDAgMzhweCAhaW1wb3J0YW50O1xufVxuXG4uYm9va2luZ3NfYnRuLXBhbmVsIGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAycHg7XG4gIHJpZ2h0OiA2NnB4O1xuICB3aWR0aDogMTM1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbiAgbWFyZ2luLXJpZ2h0OiAyMjJweDtcbn1cblxuLnVpLmZvcm0gLmZpZWxkID4gbGFiZWwge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnVpLmxlZnQuaWNvbi5pbnB1dCB7XG4gIHRvcDogM3B4O1xufVxuXG4ubGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/dashboard/dashboard.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/layout/dashboard/dashboard.component.ts ***!
    \*********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppLayoutDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
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


    var src_app_shared_services_organization_organization_h_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/organization/organization-h.service */
    "./src/app/shared/services/organization/organization-h.service.ts");
    /* harmony import */


    var src_app_shared_services_user_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/user.services */
    "./src/app/shared/services/user.services.ts");
    /* harmony import */


    var src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/dashboard.service */
    "./src/app/shared/services/dashboard.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(fb, orgService, userService, dashboardService, toastr) {
        var _this2 = this;

        _classCallCheck(this, DashboardComponent);

        this.fb = fb;
        this.orgService = orgService;
        this.userService = userService;
        this.dashboardService = dashboardService;
        this.toastr = toastr;
        this.isSubmitted = true;
        this.bookingsLoader = false;
        this.organisationLoader = false;
        this.organizations = [];
        this.users = [];
        this.pos = [{
          name: 'Agent',
          value: 'Agent'
        }, {
          name: 'Corporate',
          value: 'Corporate'
        }, {
          name: 'Client',
          value: 'Client'
        }, {
          name: 'B2C',
          value: 'B2C'
        }, {
          name: 'API',
          value: 'API'
        }, {
          name: 'Mobile',
          value: 'Mobile'
        }];
        this.products = [{
          name: 'Flights',
          value: 'has_flight'
        }, {
          name: 'Hotels',
          value: 'has_hotel'
        }, {
          name: 'Insurance',
          value: 'has_insurance'
        }, {
          name: 'Cars',
          value: 'has_car'
        }, {
          name: 'Transfers',
          value: 'has_transfers'
        }, {
          name: 'Activities',
          value: 'has_activities'
        }, {
          name: 'Insurances',
          value: 'has_insurance'
        }, {
          name: 'Cruises',
          value: 'has_cruises'
        }, {
          name: 'Holidays',
          value: 'has_holiday'
        }];
        this.filteredOrganizations = []; // starts variables 

        this.performance = {
          markup_price: [],
          supplier_price: [],
          tags: [],
          total_achieved: []
        };
        this.margin = {
          margin: [],
          tags: []
        };
        this.bookings = {
          "total": 0,
          "flights": 0,
          "hotels": 0,
          "insurance": 0,
          "activities": 0,
          "carHire": 0,
          "transfers": 0,
          "holidays": 0,
          "cruise": 0
        };
        this.presetInfo = {
          "subagents": 0,
          "websites": 0,
          "corporates": 0,
          "total": 0,
          "active": 0,
          "inactive": 0
        };
        this.dForm = this.fb.group({
          period_from: [''],
          period_to: [''],
          pos: ['-1'],
          producttype: ['-1'],
          organization_id: ['-1'],
          // user_id: [''],
          agent_code: ['-1']
        });
        this.dForm.get('organization_id').valueChanges.subscribe(function (val) {
          _this2.getUserList(val);

          _this2.dForm.patchValue({
            agent_code: '-1'
          });
        });
        this.dForm.get('pos').valueChanges.subscribe(function (val) {
          _this2.filterOrganisationsByPOS(val);

          _this2.dForm.patchValue({
            organization_id: '-1',
            agent_code: '-1'
          });
        });
        this.getOrganizationList();
      }

      _createClass(DashboardComponent, [{
        key: "getOrganizationList",
        value: function getOrganizationList() {
          var _this3 = this;

          this.orgService.GetAllOrganization().subscribe(function (result) {
            return _this3.organizations = result.Organization, _this3.filteredOrganizations = result.Organization;
          });
        }
      }, {
        key: "getUserList",
        value: function getUserList() {
          var _this4 = this;

          var orgID = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          this.userService.getAllUsersByOrganizationId(orgID).subscribe(function (result) {
            console.log('user ', result);

            if (result.users && result.users.length > 0) {
              _this4.users = result.users;
              setTimeout(_this4.initDropDowns, 2000);
            }
          });
        }
      }, {
        key: "filterOrganisationsByPOS",
        value: function filterOrganisationsByPOS(pos) {
          if (!pos) return;
          var filtered = [];

          for (var ind = 0; ind < this.organizations.length; ind++) {
            var element = this.organizations[ind];
            if (element.corporate_type == pos) filtered.push(element);
          }

          this.filteredOrganizations = filtered;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.submitForm();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this5 = this;

          this.initDropDowns();
          $(document).ready(function () {
            $(function () {
              $('input[name="period_from"]').daterangepicker({
                singleDatePicker: true,
                showDropdowns: true,
                startDate: moment().subtract("1", "years"),
                locale: {
                  format: 'DD/MM/YYYY'
                },
                autoUpdateInput: false
              }, function (start) {
                _this5.dForm.patchValue({
                  period_from: moment(start).format('DD/MM/YYYY')
                });
              });
              $('input[name="period_to"]').daterangepicker({
                singleDatePicker: true,
                showDropdowns: true,
                startDate: moment(),
                locale: {
                  format: 'DD/MM/YYYY'
                },
                autoUpdateInput: false
              }, function (start) {
                _this5.dForm.patchValue({
                  period_to: moment(start).format('DD/MM/YYYY')
                });
              });
            });
          });
        }
      }, {
        key: "initDropDowns",
        value: function initDropDowns() {
          $('.ui.dropdown').dropdown();
        }
      }, {
        key: "calculateMarginfromPerformance",
        value: function calculateMarginfromPerformance() {
          var performance = this.performance;
          var output = {
            tags: performance.tags,
            margin: []
          };

          for (var ind = 0; ind < performance.markup_price.length; ind++) {
            var elementMarkupPrice = performance.markup_price[ind];
            var elementSupplierPrice = performance.supplier_price[ind];
            output.margin.push(Number(elementMarkupPrice) - Number(elementSupplierPrice));
          }

          this.margin = output;
          console.log('margin ', this.margin);
        }
      }, {
        key: "submitForm",
        value: function submitForm() {
          var _this6 = this;

          this.bookingsLoader = true;
          this.organisationLoader = true;
          var params = this.dForm.value;
          this.dashboardService.fetchPerformaceInformation(params).subscribe(function (res) {
            if (res.status == 200) {
              _this6.performance = res.Stats;

              _this6.calculateMarginfromPerformance();

              _this6.organisationLoader = false;
            }
          }, function (err) {
            _this6.toastr.info('Oops! We\'re unable to retrieve performance information.', 'No Performance Info', {
              timeOut: 10000,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });

            _this6.organisationLoader = false;
          });
          this.dashboardService.fetchBookingsInformation(params).subscribe(function (res) {
            if (res.status == 200) {
              _this6.bookings = res.Stats;
              _this6.bookings.total = 0;
              _this6.bookingsLoader = false;
            }
          }, function (err) {
            _this6.toastr.info('Oops! We\'re unable to retrieve bookings information.', 'No Bookings Info', {
              timeOut: 10000,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });

            _this6.bookingsLoader = false;
          });
          this.dashboardService.fetchPresetInformation(params).subscribe(function (res) {
            if (res.status == 200) {
              _this6.presetInfo = res.Stats;
              console.log("res =========================", _this6.presetInfo);
              _this6.bookingsLoader = false;
            }
          }, function (err) {
            _this6.toastr.info('Oops! We\'re unable to retrieve bookings information.', 'No Presets Info', {
              timeOut: 10000,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });

            _this6.bookingsLoader = false;
          }); // this.dashboardService.fetchProductivityInformation( params )
          // .subscribe((res:any)=>{
          //   if(res.status == 200){
          //     console.log('Productivity result ', res.Stats)
          //   }
          // }, err => {
          //   Swal.fire('Oops', `Something bad happened at our end. ${err}`, 'error');
          // })

          this.isSubmitted = true;
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_shared_services_organization_organization_h_service__WEBPACK_IMPORTED_MODULE_3__["OrganizationHService"]
      }, {
        type: src_app_shared_services_user_services__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: src_app_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_5__["DashboardService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
      }];
    };

    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/dashboard/dashboard.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/layout/dashboard/dashboard.component.scss")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/layout/dashboard/dashboard.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/layout/dashboard/dashboard.module.ts ***!
    \******************************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppLayoutDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../shared/services/dashboard.service */
    "./src/app/shared/services/dashboard.service.ts");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/layout/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/layout/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _components_graphs_graphs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/graphs/graphs.component */
    "./src/app/layout/dashboard/components/graphs/graphs.component.ts");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_components_graphs_graphs_component__WEBPACK_IMPORTED_MODULE_6__["GraphsComponent"], _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["DashboardRoutingModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]],
      providers: [_shared_services_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]]
    })], DashboardModule);
    /***/
  },

  /***/
  "./src/app/shared/services/dashboard.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/services/dashboard.service.ts ***!
    \******************************************************/

  /*! exports provided: DashboardService */

  /***/
  function srcAppSharedServicesDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return DashboardService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DashboardService =
    /*#__PURE__*/
    function () {
      function DashboardService(http) {
        _classCallCheck(this, DashboardService);

        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverURL;
      }

      _createClass(DashboardService, [{
        key: "fetchBookingsInformation",
        value: function fetchBookingsInformation(params) {
          return this.http.get("".concat(this.url, "/api/fetch-bookings-information?").concat(this.serialize(params)));
        }
      }, {
        key: "fetchPresetInformation",
        value: function fetchPresetInformation(params) {
          return this.http.get("".concat(this.url, "/api/fetch-preset-information?").concat(this.serialize(params)));
        }
      }, {
        key: "fetchFlightInformation",
        value: function fetchFlightInformation(airport) {
          return this.http.get("".concat(this.url, "/api/fetch-flights-information?month=8"));
        }
      }, {
        key: "fetchProductivityInformation",
        value: function fetchProductivityInformation(params) {
          return this.http.get("".concat(this.url, "/api/fetch-productivity-information?").concat(this.serialize(params)));
        }
      }, {
        key: "fetchPerformaceInformation",
        value: function fetchPerformaceInformation(params) {
          return this.http.get("".concat(this.url, "/api/fetch-performance-information?").concat(this.serialize(params)));
        }
      }, {
        key: "serialize",
        value: function serialize(obj) {
          var str = [];

          for (var p in obj) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          }

          return str.join("&");
        }
      }]);

      return DashboardService;
    }();

    DashboardService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    DashboardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], DashboardService);
    /***/
  },

  /***/
  "./src/app/shared/services/organization/organization-h.service.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shared/services/organization/organization-h.service.ts ***!
    \************************************************************************/

  /*! exports provided: OrganizationHService */

  /***/
  function srcAppSharedServicesOrganizationOrganizationHServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrganizationHService", function () {
      return OrganizationHService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var OrganizationHService =
    /*#__PURE__*/
    function () {
      function OrganizationHService(http) {
        _classCallCheck(this, OrganizationHService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL; // Http Headers

        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            "Content-Type": "application/json"
          })
        };
      }

      _createClass(OrganizationHService, [{
        key: "fetchOrganizationDetails",
        value: function fetchOrganizationDetails(id) {
          return this.http.get("".concat(this.url, "/api/fetch-organization-details?hierarchy_id=") + id, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        }
      }, {
        key: "CreateOrganization",
        value: function CreateOrganization(data) {
          return this.http.post("".concat(this.url, "/api/create-organization"), data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        }
      }, {
        key: "UpdateOrganization",
        value: function UpdateOrganization(data) {
          return this.http.post("".concat(this.url, "/api/update-organization"), data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } //Fetch all organization

      }, {
        key: "GetAllOrganization",
        value: function GetAllOrganization(tourID, limit, pageIndex) {
          return this.http.get("".concat(this.url, "/api/fetch-all-organization"), {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } //Fetch all organization

      }, {
        key: "GetAllOrganizationHierarchy",
        value: function GetAllOrganizationHierarchy(tourID, limit, pageIndex) {
          return this.http.get("".concat(this.url, "/api/fetch-all-Hierarchy")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } //update Organization Hierarchy

      }, {
        key: "UpdateOrganizationHierarchy",
        value: function UpdateOrganizationHierarchy(data) {
          return this.http.post("".concat(this.url, "/api/update-organization-heirarchy"), JSON.stringify(data), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        }
      }, {
        key: "CreateOrganizationHierarchy",
        value: function CreateOrganizationHierarchy(data) {
          return this.http.post("".concat(this.url, "/api/create-organization-hierarchy"), JSON.stringify(data), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        }
      }, {
        key: "fetchActiveSuppliers",
        value: function fetchActiveSuppliers() {
          return this.http.get("".concat(this.url, "/api/fetch_supplier_pos"), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        }
      }, {
        key: "updateOrganizationSupplier",
        value: function updateOrganizationSupplier(data) {
          return this.http.post("".concat(this.url, "/api/organization_vat"), JSON.stringify(data), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        }
      }, {
        key: "updateOrganizationVat",
        value: function updateOrganizationVat(data) {
          return this.http.post("".concat(this.url, "/api/update_supplier_pos"), JSON.stringify(data), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } // Error handling

      }, {
        key: "errorHandl",
        value: function errorHandl(error) {
          var errorMessage = "";

          if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
          } else {
            // Get server-side error
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
          }

          console.log(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
        }
      }]);

      return OrganizationHService;
    }();

    OrganizationHService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    OrganizationHService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], OrganizationHService);
    /***/
  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map