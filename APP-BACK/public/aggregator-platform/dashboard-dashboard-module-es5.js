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


    __webpack_exports__["default"] = "<div class=\"ui cards grid outer-wrapper\">\r\n  <div class=\"sixteen wide column row\">\r\n  <div class=\"Notifications\">\r\n    <h4 class=\"allHeadings h4Styles\">\r\n      <span class=\"semi-bold\">Report Alert</span>\r\n    </h4>\r\n   </div>\r\n  </div>\r\n  <div class=\"sixteen wide column row inner-wrapper\">\r\n      <div class=\"card seven wide column bookings-card animated fadeIn card-wrapper schedule box-one\">\r\n        <div class=\"content\">\r\n          <div class=\"header\">Schedule notification</div>\r\n          <!-- <i class=\"fa pull-right\" style=\"background-color: rgb(7, 121, 173);\"></i> -->\r\n              <div class=\"icon-card\">\r\n                <svg width=\"30px\" height=\"34px\" viewBox=\"0 0 50 54\" class=\"bell\">\r\n                  <path d=\"M1.13063517,45.0453694 C1.88439195,45.7991262 2.80138269,46.1760046 3.82399539,46.1760046 L17.2955975,46.1760046 C17.2955975,48.331653 18.0493543,50.110423 19.5592683,51.6179365 C21.0667819,53.1254501 22.8983629,53.8816074 25.0012002,53.8816074 C27.1544481,53.8816074 28.9332181,53.1254501 30.4431322,51.6179365 C31.9506457,50.110423 32.7044025,48.331653 32.7044025,46.1760046 L46.1760046,46.1760046 C47.1986173,46.1760046 48.115608,45.7991262 48.8693648,45.0453694 C49.6231216,44.2892122 50,43.3746219 50,42.3496087 C46.1760046,39.1185367 43.3194104,35.1313073 41.379807,30.3879207 C39.4402036,25.6469346 38.4704018,20.6370925 38.4704018,15.408805 C38.4704018,12.0697105 37.5006001,9.48197225 35.6138077,7.54236881 C33.6742042,5.54995439 31.033655,4.41931922 27.6945605,3.98722934 C27.8553939,3.66316194 27.9106054,3.28628355 27.9106054,2.90940516 C27.9106054,2.10043689 27.639349,1.40189159 27.0488262,0.86177925 C26.5087138,0.268855922 25.807768,0 25.0012002,0 C24.192232,0 23.5464977,0.268855922 23.0063853,0.86177925 C22.413462,1.40189159 22.1446061,2.10043689 22.1446061,2.90940516 C22.1446061,3.28628355 22.1974171,3.66316194 22.360651,3.98722934 C19.019156,4.41931922 16.3786068,5.54995439 14.4390033,7.54236881 C12.4993999,9.48197225 11.5295982,12.0697105 11.5295982,15.408805 C11.5295982,20.6370925 10.5597964,25.6469346 8.620193,30.3879207 C6.68058956,35.1313073 3.82399539,39.1185367 0,42.3496087 C0,43.3746219 0.376878391,44.2892122 1.13063517,45.0453694 L1.13063517,45.0453694 Z M20.2050026,45.6911037 C20.52907,45.6911037 20.6899035,45.8519372 20.6899035,46.1760046 C20.6899035,47.3618513 21.1195929,48.384464 21.9837726,49.1934322 C22.7903404,50.0552115 23.8153536,50.4873014 25.0012002,50.4873014 C25.3228672,50.4873014 25.4861011,50.6481348 25.4861011,50.9722022 C25.4861011,51.2938691 25.3228672,51.4571031 25.0012002,51.4571031 C23.5464977,51.4571031 22.3054395,50.9169907 21.2828268,49.894378 C20.2578136,48.8693648 19.7201018,47.6307072 19.7201018,46.1760046 C19.7201018,45.8519372 19.8809352,45.6911037 20.2050026,45.6911037 L20.2050026,45.6911037 Z\"></path>\r\n                </svg>\r\n              </div>\r\n              <p class=\"allparagraph\">\r\n                <a class=\"allparagraph\" target=\"_blank\">0 Schedule Change\r\n                 <!-- <app-payment-list></app-payment-list> -->\r\n                </a>\r\n              </p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"card seven wide column bookings-card animated fadeIn card-wrapper schedule box-two\">\r\n        <div class=\"content\">\r\n          <div class=\"header\">Payment notification</div>\r\n          <!-- <i class=\"fa pull-right\" style=\"background-color: rgb(7, 121, 173);\"></i> -->\r\n              <div class=\"icon-card\">\r\n                <svg width=\"30px\" height=\"34px\" viewBox=\"0 0 50 54\" class=\"bell\">\r\n                  <path d=\"M1.13063517,45.0453694 C1.88439195,45.7991262 2.80138269,46.1760046 3.82399539,46.1760046 L17.2955975,46.1760046 C17.2955975,48.331653 18.0493543,50.110423 19.5592683,51.6179365 C21.0667819,53.1254501 22.8983629,53.8816074 25.0012002,53.8816074 C27.1544481,53.8816074 28.9332181,53.1254501 30.4431322,51.6179365 C31.9506457,50.110423 32.7044025,48.331653 32.7044025,46.1760046 L46.1760046,46.1760046 C47.1986173,46.1760046 48.115608,45.7991262 48.8693648,45.0453694 C49.6231216,44.2892122 50,43.3746219 50,42.3496087 C46.1760046,39.1185367 43.3194104,35.1313073 41.379807,30.3879207 C39.4402036,25.6469346 38.4704018,20.6370925 38.4704018,15.408805 C38.4704018,12.0697105 37.5006001,9.48197225 35.6138077,7.54236881 C33.6742042,5.54995439 31.033655,4.41931922 27.6945605,3.98722934 C27.8553939,3.66316194 27.9106054,3.28628355 27.9106054,2.90940516 C27.9106054,2.10043689 27.639349,1.40189159 27.0488262,0.86177925 C26.5087138,0.268855922 25.807768,0 25.0012002,0 C24.192232,0 23.5464977,0.268855922 23.0063853,0.86177925 C22.413462,1.40189159 22.1446061,2.10043689 22.1446061,2.90940516 C22.1446061,3.28628355 22.1974171,3.66316194 22.360651,3.98722934 C19.019156,4.41931922 16.3786068,5.54995439 14.4390033,7.54236881 C12.4993999,9.48197225 11.5295982,12.0697105 11.5295982,15.408805 C11.5295982,20.6370925 10.5597964,25.6469346 8.620193,30.3879207 C6.68058956,35.1313073 3.82399539,39.1185367 0,42.3496087 C0,43.3746219 0.376878391,44.2892122 1.13063517,45.0453694 L1.13063517,45.0453694 Z M20.2050026,45.6911037 C20.52907,45.6911037 20.6899035,45.8519372 20.6899035,46.1760046 C20.6899035,47.3618513 21.1195929,48.384464 21.9837726,49.1934322 C22.7903404,50.0552115 23.8153536,50.4873014 25.0012002,50.4873014 C25.3228672,50.4873014 25.4861011,50.6481348 25.4861011,50.9722022 C25.4861011,51.2938691 25.3228672,51.4571031 25.0012002,51.4571031 C23.5464977,51.4571031 22.3054395,50.9169907 21.2828268,49.894378 C20.2578136,48.8693648 19.7201018,47.6307072 19.7201018,46.1760046 C19.7201018,45.8519372 19.8809352,45.6911037 20.2050026,45.6911037 L20.2050026,45.6911037 Z\"></path>\r\n                </svg>\r\n              </div>\r\n              <p class=\"allparagraph\">\r\n              <a class=\"allparagraph\" target=\"_blank\">0 Payments</a>\r\n             </p>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"card seven wide column bookings-card animated fadeIn card-wrapper\">\r\n    <div class=\"ui active inverted dimmer\" *ngIf=\"bookingsLoader\">\r\n      <div class=\"ui text loader\">Loading</div>\r\n    </div>\r\n    <div class=\"content\">\r\n      <div class=\"header\">\r\n        <span>Bookings Information</span>\r\n        <!-- {{ bookings | json }} -->\r\n      </div>\r\n      <div class=\"description mt-2\">\r\n        <div class=\"ui grid\">\r\n          <div class=\"three wide column\">\r\n            <p>Flights</p>\r\n          </div>\r\n          <div class=\"eleven wide column\">\r\n\r\n            <div class=\"ui indicating progress warning progress-bar _01\" [attr.data-value]=\"bookings.flights\"\r\n              [attr.data-total]=\"bookings.total\" id=\"flights-pb\">\r\n              <div class=\"bar\" [ngStyle]=\"{'width':getWidth(bookings.total, bookings.flights)}\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"two wide column text-left\">\r\n            <p>{{bookings.flights}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui grid\">\r\n          <div class=\"three wide column\">\r\n            <p>Hotels</p>\r\n          </div>\r\n          <div class=\"eleven wide column\">\r\n            <div class=\"ui indicating progress warning progress-bar _02\" [attr.data-value]=\"bookings.hotels\"\r\n              [attr.data-total]=\"bookings.total\" id=\"hotels-pb\">\r\n              <div class=\"bar\" [ngStyle]=\"{'width':getWidth(bookings.total, bookings.hotels)}\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"two wide column text-left\">\r\n            <p>{{bookings.hotels}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui grid\">\r\n          <div class=\"three wide column\">\r\n            <p>Insurance</p>\r\n          </div>\r\n          <div class=\"eleven wide column\">\r\n            <div class=\"ui indicating progress warning progress-bar _03\" [attr.data-value]=\"bookings.insurance\"\r\n              [attr.data-total]=\"bookings.total\" id=\"insurances-pb\">\r\n              <div class=\"bar\" [ngStyle]=\"{'width':getWidth(bookings.total, bookings.insurance)}\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"two wide column text-left\">\r\n            <p>{{bookings.insurance}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui grid\">\r\n          <div class=\"three wide column\">\r\n            <p>Activites</p>\r\n          </div>\r\n          <div class=\"eleven wide column\">\r\n            <div class=\"ui indicating progress progress-bar _04\" [attr.data-value]=\"bookings.activities\"\r\n              [attr.data-total]=\"bookings.total\" id=\"activities-pb\">\r\n              <div class=\"bar\" [ngStyle]=\"{'width':getWidth(bookings.total, bookings.activities)}\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"two wide column text-left\">\r\n            <p>{{bookings.activities}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui grid\">\r\n          <div class=\"three wide column pr-0\">\r\n            <p>Car Hire</p>\r\n          </div>\r\n          <div class=\"eleven wide column\">\r\n            <div class=\"ui indicating progress progress-bar _05\" [attr.data-value]=\"bookings.carHire\"\r\n              [attr.data-total]=\"bookings.total\" id=\"hire-pb\">\r\n              <div class=\"bar\" [ngStyle]=\"{'width':getWidth(bookings.total, bookings.carHire)}\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"two wide column text-left\">\r\n            <p>{{bookings.carHire}}</p>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"ui grid\">\r\n          <div class=\"three wide column\">\r\n            <p>Transfers</p>\r\n          </div>\r\n          <div class=\"eleven wide column\">\r\n            <div class=\"ui indicating progress warning progress-bar _06\" [attr.data-value]=\"bookings.transfers\"\r\n              [attr.data-total]=\"bookings.total\" id=\"transfers-pb\">\r\n              <div class=\"bar\" [ngStyle]=\"{'width':getWidth(bookings.total, bookings.transfers)}\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"two wide column text-left\">\r\n            <p>{{bookings.transfers}}</p>\r\n          </div>\r\n        </div> -->\r\n        <!-- <div class=\"ui grid\">\r\n          <div class=\"three wide column pr-0\">\r\n            <p>Holidays</p>\r\n          </div>\r\n          <div class=\"eleven wide column\">\r\n            <div class=\"ui indicating progress warning progress-bar _07\" [attr.data-value]=\"bookings.holidays\"\r\n              [attr.data-total]=\"bookings.total\" id=\"holidays-pb\">\r\n              <div class=\"bar\" [ngStyle]=\"{'width':getWidth(bookings.total, bookings.holidays)}\"></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"two wide column text-left\">\r\n            <p>{{bookings.holidays}}</p>\r\n          </div>\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card seven wide column performance-card animated fadeIn delay-1s card-wrapper\">\r\n    <div class=\"ui active inverted dimmer\" *ngIf=\"organisationLoader\">\r\n      <div class=\"ui text loader\">Loading</div>\r\n    </div>\r\n    <div class=\"content\">\r\n      <div class=\"header\">\r\n        <div class=\"ui grid\">\r\n          <span class=\"sixteen wide column\">Performance </span>\r\n\r\n          <!-- <span class=\"four wide column\">\r\n              <div class=\"ui form\">\r\n                <div class=\"grouped fields\">\r\n                  <div class=\"field\">\r\n                    <div class=\"ui slider checkbox\">\r\n                      <input type=\"checkbox\" name=\"throughput\" (change)=\"performance_type = !performance_type; displayPerformanceChart()\">\r\n                      <span >Margin</span><label>Sales</label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </span> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"description mt-2\">\r\n        <div class=\"ct-performance-chart\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<!--\r\n  <div class=\"card seven wide column performance-card animated fadeIn delay-2s\">\r\n    <div class=\"ui active inverted dimmer\" *ngIf=\"organisationLoader\">\r\n      <div class=\"ui text loader\">Loading</div>\r\n    </div>\r\n    <div class=\"content\">\r\n      <div class=\"header\">\r\n        <div class=\"ui grid\">\r\n          <span class=\"sixteen wide column\">Margin </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"description mt-2\">\r\n        <div class=\"ct-margin-chart\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n-->\r\n  <div class=\"card seven wide column performance-card animated fadeIn delay-2s cardmargin card-wrapper\">\r\n    <div class=\"ui active inverted dimmer\" *ngIf=\"organisationLoader\">\r\n      <div class=\"ui text loader\">Loading</div>\r\n    </div>\r\n    <div class=\"content\">\r\n      <div class=\"header\">\r\n        <div class=\"ui grid\">\r\n          <span class=\"sixteen wide column\">Tickets & Search Logs </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"description mt-2\">\r\n        <div class=\"ct-logs-chart\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card seven wide column performance-card animated fadeIn delay-3s cardmargin card-wrapper\">\r\n    <div class=\"ui active inverted dimmer\" *ngIf=\"organisationLoader\">\r\n      <div class=\"ui text loader\">Loading</div>\r\n    </div>\r\n    <div class=\"content\">\r\n      <div class=\"header\">\r\n        <div class=\"ui grid\">\r\n          <span class=\"sixteen wide column\">Point of Sale </span>\r\n        </div>\r\n      </div>\r\n      <div class=\"description mt-2\" style=\"width: 50%; float: left;\">\r\n        <div class=\"ct-chart\"></div>\r\n      </div>\r\n      <div style=\"float: left; width: 50%;\">\r\n        <table class=\"ui very  basic table\" style=\"width: 100%;\">\r\n          <thead class=\"full-width\">\r\n            <tr class=\"center aligned\">\r\n              <th>Active</th>\r\n              <th>Inactive</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr class=\"center aligned\">\r\n              <td> {{ presetInfo.active + 10 }} </td>\r\n              <td> {{ presetInfo.inactive }} </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <div style=\"clear: both;\" ></div>\r\n      <hr />\r\n      <table class=\"ui very  basic table\" style=\"width: 100%;\">\r\n        <thead class=\"full-width\">\r\n          <tr class=\"center aligned\">\r\n            <th>Total no. of Subagents</th>\r\n            <th>Total no. of Corporates</th>\r\n            <th>Total no. of Websites</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr class=\"center aligned\">\r\n            <td> {{ presetInfo.subagents }} </td>\r\n            <td> {{ presetInfo.corporates }} </td>\r\n            <td> {{ presetInfo.websites }} </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
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


    __webpack_exports__["default"] = "<div class=\"page-wrapper\">\r\n  <!-- <p class=\"page-wrapper_title\">Dashboard</p> -->\r\n  <div class=\"ui fluid container\">\r\n    <div class=\"\">\r\n      <div class=\"\">\r\n        <form class=\"ui form\" autocomplete=\"off\" [formGroup]=\"dForm\" (ngSubmit)=\"submitForm()\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <div class=\"three wide field d_date_pickers outer-wrapper main-wrapper\">\r\n                <label for=\"period_from\" class=\"label\"></label>\r\n                <div class=\"ui left icon input\">\r\n                  <input type=\"text\" id=\"period_from\" name=\"period_from\" formControlName=\"period_from\"\r\n                    placeholder=\"Period From\" value=\"\" />\r\n                  <i class=\"icon\">\r\n                    <i class=\"fa fa-calendar-o bookings_input__placeholder-icon cal\" aria-hidden=\"true\"></i>\r\n                  </i>\r\n                </div>\r\n              </div>\r\n              <div class=\"three wide field d_date_pickers outer-wrapper  main-wrapper\">\r\n                <label for=\"period_to\" class=\"label\"></label>\r\n                <div class=\"ui left icon input\">\r\n                  <input type=\"text\" id=\"period_to\" name=\"period_to\" formControlName=\"period_to\"\r\n                    placeholder=\"Period To\" />\r\n                  <i class=\"icon\">\r\n                    <i class=\"fa fa-calendar-o bookings_input__placeholder-icon cal\" aria-hidden=\"true\"></i>\r\n                  </i>\r\n                </div>\r\n              </div>\r\n              <div class=\"three wide field outer-wrapper  main-wrapper\">\r\n                <label for=\"pos\"></label>\r\n                <select id=\"pos\" class=\"ui fluid  dropdown\" formControlName=\"pos\" placeholder=\"Point of sale\">\r\n                  <option value=\"\">Point of sale</option>\r\n                  <option value=\"-1\">All</option>\r\n                  <option *ngFor=\"let obj of pos\" value=\"{{obj.value}}\">{{obj.name}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"three wide field outer-wrapper  main-wrapper\">\r\n                <label for=\"product\"></label>\r\n                <select id=\"product\" class=\"ui fluid  dropdown\" formControlName=\"producttype\">\r\n                  <option value=\"\">Product</option>\r\n                  <option value=\"-1\">All</option>\r\n                  <option *ngFor=\"let obj of products\" value=\"{{obj.value}}\">{{obj.name}}</option>\r\n                </select>\r\n              </div>\r\n              <!-- <div class=\"three wide field\">\r\n                <label for=\"organization_id\">Organization ID</label>\r\n                <select id=\"organization_id\" class=\"ui fluid search dropdown\" formControlName=\"organization_id\">\r\n                  <option value=\"-1\">All</option>\r\n                  <option *ngFor=\"let organization of filteredOrganizations\" value=\"{{ organization.organisation_id }}\">\r\n                    {{ organization.name }}</option>\r\n                </select>\r\n              </div> -->\r\n              <div class=\"three wide field\" *ngIf=\"dForm.value.organization_id && users.length > 0\">\r\n                <label for=\"user_id\">User ID</label>\r\n                <select id=\"user_id\" class=\"ui fluid search dropdown\" formControlName=\"agent_code\">\r\n                  <option value=\"-1\">All</option>\r\n                  <option *ngFor=\"let user of users\" value=\"{{ user.agent_code }}\">{{ user.first_name }}\r\n                    {{ user.last_name }}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"three wide field bookings_btn-panel\">\r\n                <button class=\"ui primary  button\">\r\n                  Search\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- <br> -->\r\n  <app-graphs *ngIf=\"isSubmitted\" [bookings]=\"bookings\" [performanceInfo]=\"performance\" [marginInfo]=\"margin\"\r\n    [presetInfo]=\"presetInfo\" [bookingsLoader]=\"bookingsLoader\" [organisationLoader]=\"organisationLoader\">\r\n  </app-graphs>\r\n</div>\r\n";
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


    __webpack_exports__["default"] = ".stepper-grid {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n.stepper-grid .stepper-grid_step {\n  display: flex;\n  align-items: center;\n  opacity: 0.6;\n  cursor: pointer;\n}\n.stepper-grid .stepper-grid_step._active {\n  opacity: 1;\n  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div {\n  background-color: #062862;\n  border: 0;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div div.image {\n  background-color: white;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div:hover {\n  border: 2px solid #A6B1C3;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon label {\n  border: 0;\n  background-color: #062862;\n  color: white;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-border hr {\n  border-bottom: 2px solid #062862;\n}\n.stepper-grid .stepper-grid_step._activated {\n  opacity: 1;\n  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div {\n  background-color: #437ADA;\n  border: 0;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div div.image {\n  background-color: white;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div:hover {\n  border: 2px solid #A6B1C3;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon label {\n  border: 0;\n  background-color: #437ADA;\n  color: white;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-border hr {\n  border-bottom: 2px solid #437ADA;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div {\n  background-color: transparent;\n  border: 2px solid #A6B1C3;\n  color: white;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  border-radius: 50%;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon label {\n  width: 100px;\n  height: auto;\n  line-height: 24px;\n  text-align: center;\n  background-color: transparent;\n  border: 2px solid #A6B1C3;\n  margin-top: 15px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 600 !important;\n  font-size: 13px;\n  color: #A6B1C3;\n  border-radius: 8px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon label._last {\n  width: 150px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-border {\n  width: 100%;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-border hr {\n  margin-top: -24px;\n  width: 100%;\n  height: 2px;\n  background: none;\n  border-bottom: 2px solid #A6B1C3;\n}\n.stepper-grid-content {\n  display: none;\n}\n.stepper-grid-content._active {\n  display: block;\n}\n.bookings-card,\n.floating-card,\n.packages-card,\n.performance-card {\n  width: 100% !important;\n  border-radius: 8px !important;\n  box-shadow: 0 0px 3px rgba(60, 64, 67, 0.3), 0 4px 8px 2px rgba(60, 64, 67, 0.15) !important;\n  padding: 6px 10px !important;\n}\n.bookings-card .header span,\n.floating-card .header span,\n.packages-card .header span,\n.performance-card .header span {\n  font-weight: 400 !important;\n  font-size: 18px;\n  color: #4F4F4F;\n}\n.bookings-card .header .bookings-card_m-dropdown,\n.floating-card .header .bookings-card_m-dropdown,\n.packages-card .header .bookings-card_m-dropdown,\n.performance-card .header .bookings-card_m-dropdown {\n  font-weight: 300;\n  font-size: 12px;\n  float: right;\n}\n.bookings-card .description.mt-2,\n.floating-card .description.mt-2,\n.packages-card .description.mt-2,\n.performance-card .description.mt-2 {\n  margin: 26px 0 12px !important;\n}\n.bookings-card .description.mt-2 .three p,\n.floating-card .description.mt-2 .three p,\n.packages-card .description.mt-2 .three p,\n.performance-card .description.mt-2 .three p {\n  color: #4F4F4F;\n  font-family: Ubuntu, Arial, Helvetica, sans-serif;\n}\n.bookings-card .description.mt-2 .two p,\n.floating-card .description.mt-2 .two p,\n.packages-card .description.mt-2 .two p,\n.performance-card .description.mt-2 .two p {\n  color: #828282;\n  font-family: Ubuntu, Arial, Helvetica, sans-serif;\n  font-size: 15px;\n}\n.bookings-card .progress-bar,\n.floating-card .progress-bar,\n.packages-card .progress-bar,\n.performance-card .progress-bar {\n  margin-top: 3px;\n  margin-bottom: 0;\n  height: 13px;\n  border-radius: 50px;\n}\n.bookings-card .progress-bar .bar,\n.floating-card .progress-bar .bar,\n.packages-card .progress-bar .bar,\n.performance-card .progress-bar .bar {\n  height: 13px;\n  border-radius: 50px;\n}\n.bookings-card .progress-bar._01 .bar,\n.floating-card .progress-bar._01 .bar,\n.packages-card .progress-bar._01 .bar,\n.performance-card .progress-bar._01 .bar {\n  background-color: #F9B253 !important;\n}\n.bookings-card .progress-bar._02 .bar,\n.floating-card .progress-bar._02 .bar,\n.packages-card .progress-bar._02 .bar,\n.performance-card .progress-bar._02 .bar {\n  background-color: #FA9917 !important;\n}\n.bookings-card .progress-bar._03 .bar,\n.floating-card .progress-bar._03 .bar,\n.packages-card .progress-bar._03 .bar,\n.performance-card .progress-bar._03 .bar {\n  background-color: #FF5F58 !important;\n}\n.bookings-card .progress-bar._04 .bar,\n.floating-card .progress-bar._04 .bar,\n.packages-card .progress-bar._04 .bar,\n.performance-card .progress-bar._04 .bar {\n  background-color: #DF427F !important;\n}\n.bookings-card .progress-bar._05 .bar,\n.floating-card .progress-bar._05 .bar,\n.packages-card .progress-bar._05 .bar,\n.performance-card .progress-bar._05 .bar {\n  background-color: #CA976B !important;\n}\n.bookings-card .progress-bar._06 .bar,\n.floating-card .progress-bar._06 .bar,\n.packages-card .progress-bar._06 .bar,\n.performance-card .progress-bar._06 .bar {\n  background-color: #4AA657 !important;\n}\n.bookings-card .progress-bar._07 .bar,\n.floating-card .progress-bar._07 .bar,\n.packages-card .progress-bar._07 .bar,\n.performance-card .progress-bar._07 .bar {\n  background-color: #5D9AC1 !important;\n}\n.bookings-card .ui.grid > .column:not(.row) {\n  padding-top: 4px;\n  padding-bottom: 4px;\n}\n.floating-card table th {\n  font-weight: 500;\n  padding-top: 12px !important;\n}\n.floating-card th,\n.floating-card td {\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 12px;\n  line-height: 13px;\n}\n.packages-card {\n  padding: 0 !important;\n}\n.packages-card .charts-grid {\n  position: relative;\n  margin-top: 30px;\n  height: 152px;\n}\n.packages-card .charts-grid .ct-chart {\n  height: auto;\n  max-height: 145px !important;\n}\n.packages-card .charts-grid .ct-chart .ct-series-a .ct-slice-donut-solid .colorchange {\n  fill: #4ba658 !important;\n}\n.packages-card .charts-grid .ct-chart .ct-series-b .ct-slice-donut-solid .colorchange {\n  fill: #91d69b !important;\n}\n.packages-card .charts-grid .placeholder-chart {\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  top: 48%;\n  transform: translateY(-50%);\n  height: 72px;\n  width: 72px;\n  border-radius: 50%;\n  background-color: #FFF;\n  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.27);\n}\n.packages-card .charts-grid .placeholder-chart .placeholder-chart_title {\n  margin-top: 15px;\n  font-family: Ubuntu, Arial, Helvetica, sans-serif;\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 13px;\n  text-align: center;\n}\n.packages-card .charts-grid .placeholder-chart .placeholder-chart_label {\n  font-family: Ubuntu, Arial, Helvetica, sans-serif;\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 13px;\n  text-align: center;\n}\n.packages-card .placeholder-chart-grid {\n  width: 166px;\n  display: block;\n  margin: 22px auto 32px;\n}\n.packages-card .placeholder-chart-grid .eight {\n  padding: 0 15px;\n  border-left: 3px solid #4f4f4f;\n}\n.packages-card .placeholder-chart-grid .eight.active {\n  border-color: #F38220 !important;\n}\n.packages-card .placeholder-chart-grid span {\n  display: block;\n  color: #4F4F4F;\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 13px;\n}\n.packages-card .placeholder-chart-grid p {\n  color: #4F4F4F;\n  font-size: 22px;\n  line-height: 25px;\n}\n.packages-card .bg-indicators {\n  padding: 0;\n  margin: 0;\n  border-top-right-radius: 20px;\n  border-bottom-right-radius: 20px;\n  background-color: #3867B1;\n  text-align: center;\n  overflow: hidden;\n}\n.packages-card .bg-indicators .sixteen {\n  padding: 15px 15px 18px !important;\n  width: 100%;\n  border-bottom: 1px solid white;\n}\n.packages-card .bg-indicators .sixteen:first-child {\n  padding-top: 30px !important;\n}\n.packages-card .bg-indicators .sixteen:last-child {\n  border: 0;\n}\n.packages-card .bg-indicators span p {\n  color: #FFF;\n  font-size: 10px;\n  text-align: center;\n  line-height: 12px;\n}\n.packages-card .bg-indicators p {\n  color: white;\n  font-size: 26px;\n  font-weight: 800;\n}\n.performance-card {\n  height: auto;\n}\n.performance-card .field {\n  margin-top: 0 !important;\n}\n.performance-card .field .ui.slider.checkbox label,\n.performance-card .field .ui.slider.checkbox span {\n  display: inline;\n  font-size: 12px;\n  font-weight: 300;\n  color: #4F4F4F;\n}\n.performance-card .field .ui.slider.checkbox span {\n  margin-right: 12px;\n}\n.performance-card .field .ui.slider.checkbox .box:before,\n.performance-card .field .ui.slider.checkbox label:before {\n  display: block;\n  position: absolute;\n  content: \"\";\n  border: none !important;\n  left: 0;\n  z-index: 1;\n  top: 2px;\n  background-color: rgba(0, 0, 0, 0.05);\n  width: 3.5rem;\n  height: 10px;\n  transform: none;\n  border-radius: 500rem;\n  transition: background 0.3s ease;\n}\n.performance-card .field .ui.slider.checkbox input {\n  left: 39px;\n}\n.performance-card .ct-performance-chart {\n  height: 280px;\n  margin-bottom: 0;\n}\n.logs-card .ct-productivity-chart {\n  height: 280px;\n}\n.menu {\n  max-height: 300px;\n  overflow-y: scroll;\n}\n.dropdown {\n  text-transform: capitalize;\n}\n#dateShow {\n  font-weight: normal;\n}\n#dateShow-productivity {\n  font-weight: normal;\n}\ntable thead tr th {\n  font-weight: 500;\n  font-size: 12px;\n}\n.ui.cards .cardmargin {\n  margin: 5px 0.5em;\n}\n.h4Styles {\n  font-size: 18px !important;\n}\n.allHeadings {\n  margin: 6px 0 !important;\n  font-family: \"Roboto\" !important;\n  font-weight: 300 !important;\n  color: #505458 !important;\n}\n.ui.grid .inner-wrapper {\n  padding-top: 0px !important;\n  padding-bottom: 6px !important;\n}\n.notifications {\n  background-color: #1B1E24;\n  padding-bottom: 6px !important;\n  display: block;\n  float: left;\n  left: 0;\n  margin: 0 10px 0 0;\n  padding-top: 5px;\n  position: relative;\n}\n.schedule {\n  margin: 6px;\n  min-height: 200px;\n  color: #FFF;\n}\n.allparagraph {\n  color: #fff;\n  font-size: 24px;\n  margin-top: 30px;\n}\n.box-one {\n  background: #0288d1;\n  border-radius: 2px;\n  color: #fff;\n  box-shadow: 0 6px 20px 0 rgba(38, 198, 218, 0.5);\n}\n.box-two {\n  background: #43a047;\n  border-radius: 2px;\n  color: #fff;\n  box-shadow: 0 6px 20px 0 rgba(77, 182, 172, 0.5);\n}\n.bell {\n  position: absolute;\n  top: 13px;\n  right: 29px;\n  fill: #fff;\n  -webkit-animation: ring 4.7s ease infinite;\n  -webkit-transform-origin: 50% 0px;\n  -moz-animation: ring 4.7s ease infinite;\n  -moz-transform-origin: 50% 0px;\n  animation: ring 4.7s ease infinite;\n  transform-origin: 50% 0px;\n}\n@-webkit-keyframes ring {\n  0% {\n    -webkit-transform: rotateZ(0);\n  }\n  1% {\n    -webkit-transform: rotateZ(30deg);\n  }\n  3% {\n    -webkit-transform: rotateZ(-28deg);\n  }\n  5% {\n    -webkit-transform: rotateZ(34deg);\n  }\n  7% {\n    -webkit-transform: rotateZ(-32deg);\n  }\n  9% {\n    -webkit-transform: rotateZ(30deg);\n  }\n  11% {\n    -webkit-transform: rotateZ(-28deg);\n  }\n  13% {\n    -webkit-transform: rotateZ(26deg);\n  }\n  15% {\n    -webkit-transform: rotateZ(-24deg);\n  }\n  17% {\n    -webkit-transform: rotateZ(22deg);\n  }\n  19% {\n    -webkit-transform: rotateZ(-20deg);\n  }\n  21% {\n    -webkit-transform: rotateZ(18deg);\n  }\n  23% {\n    -webkit-transform: rotateZ(-16deg);\n  }\n  25% {\n    -webkit-transform: rotateZ(14deg);\n  }\n  27% {\n    -webkit-transform: rotateZ(-12deg);\n  }\n  29% {\n    -webkit-transform: rotateZ(10deg);\n  }\n  31% {\n    -webkit-transform: rotateZ(-8deg);\n  }\n  33% {\n    -webkit-transform: rotateZ(6deg);\n  }\n  35% {\n    -webkit-transform: rotateZ(-4deg);\n  }\n  37% {\n    -webkit-transform: rotateZ(2deg);\n  }\n  39% {\n    -webkit-transform: rotateZ(-1deg);\n  }\n  41% {\n    -webkit-transform: rotateZ(1deg);\n  }\n  43% {\n    -webkit-transform: rotateZ(0);\n  }\n  100% {\n    -webkit-transform: rotateZ(0);\n  }\n}\n@keyframes ring {\n  0% {\n    transform: rotate(0);\n  }\n  1% {\n    transform: rotate(30deg);\n  }\n  3% {\n    transform: rotate(-28deg);\n  }\n  5% {\n    transform: rotate(34deg);\n  }\n  7% {\n    transform: rotate(-32deg);\n  }\n  9% {\n    transform: rotate(30deg);\n  }\n  11% {\n    transform: rotate(-28deg);\n  }\n  13% {\n    transform: rotate(26deg);\n  }\n  15% {\n    transform: rotate(-24deg);\n  }\n  17% {\n    transform: rotate(22deg);\n  }\n  19% {\n    transform: rotate(-20deg);\n  }\n  21% {\n    transform: rotate(18deg);\n  }\n  23% {\n    transform: rotate(-16deg);\n  }\n  25% {\n    transform: rotate(14deg);\n  }\n  27% {\n    transform: rotate(-12deg);\n  }\n  29% {\n    transform: rotate(10deg);\n  }\n  31% {\n    transform: rotate(-8deg);\n  }\n  33% {\n    transform: rotate(6deg);\n  }\n  35% {\n    transform: rotate(-4deg);\n  }\n  37% {\n    transform: rotate(2deg);\n  }\n  39% {\n    transform: rotate(-1deg);\n  }\n  41% {\n    transform: rotate(1deg);\n  }\n  43% {\n    transform: rotate(0);\n  }\n  100% {\n    transform: rotate(0);\n  }\n}\n@media (max-width: 1754px) {\n  .ui.cards.grid .card-wrapper {\n    width: 48% !important;\n  }\n}\n@media (max-width: 1200px) {\n  .outer-wrapper {\n    margin-bottom: 20px;\n  }\n\n  .ui.cards.grid .card-wrapper {\n    width: 47.75% !important;\n  }\n}\n@media (max-width: 767px) {\n  .ui.cards.grid .card-wrapper {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9jb21wb25lbnRzL2dyYXBocy9FOlxcQmVsYWxcXHByb2plY3RzXFxwcm9kdWN0aW9uLWJ1aWxkXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcY29tb24tc3R5bGVzXFxzdGVwcGVyLnNjc3MiLCJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvY29tcG9uZW50cy9ncmFwaHMvZ3JhcGhzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvZGFzaGJvYXJkL2NvbXBvbmVudHMvZ3JhcGhzL0U6XFxCZWxhbFxccHJvamVjdHNcXHByb2R1Y3Rpb24tYnVpbGRcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxjb21vbi1zdHlsZXNcXGRlc2lnbi1wYWxldHRlLnNjc3MiLCJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvY29tcG9uZW50cy9ncmFwaHMvRTpcXEJlbGFsXFxwcm9qZWN0c1xccHJvZHVjdGlvbi1idWlsZFxcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxkYXNoYm9hcmRcXGNvbXBvbmVudHNcXGdyYXBoc1xcZ3JhcGhzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ0k7RUFDRSxVQUFBO0VBQ0EsMERBQUE7QUNDTjtBREVRO0VBQ0UseUJFZFE7RUZlUixTQUFBO0FDQVY7QURFVTtFQUNFLHVCQUFBO0FDQVo7QURHVTtFQUNFLHlCQUFBO0FDRFo7QURLUTtFQUNFLFNBQUE7RUFDQSx5QkU1QlE7RUY2QlIsWUFBQTtBQ0hWO0FEUVE7RUFDRSxnQ0FBQTtBQ05WO0FEV0k7RUFDRSxVQUFBO0VBQ0EsMERBQUE7QUNUTjtBRFlRO0VBQ0UseUJFaERNO0VGaUROLFNBQUE7QUNWVjtBRFlVO0VBQ0UsdUJBQUE7QUNWWjtBRGFVO0VBQ0UseUJBQUE7QUNYWjtBRGVRO0VBQ0UsU0FBQTtFQUNBLHlCRTlETTtFRitETixZQUFBO0FDYlY7QURrQlE7RUFDRSxnQ0FBQTtBQ2hCVjtBRHFCSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDbkJOO0FEcUJNO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDbkJSO0FEc0JNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNFekVNO0VGMEVOLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGNFcEdVO0VGcUdWLGtCRWhGZ0I7QUQ0RHhCO0FEc0JRO0VBQ0UsWUFBQTtBQ3BCVjtBRHlCSTtFQUNFLFdBQUE7QUN2Qk47QUR5Qk07RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQ3ZCUjtBRDZCQTtFQUNFLGFBQUE7QUMxQkY7QUQ0QkU7RUFDRSxjQUFBO0FDMUJKO0FFckdBOzs7O0VBSUksc0JBQUE7RUFDQSw2QkFBQTtFQUNBLDRGQUFBO0VBQ0EsNEJBQUE7QUZ3R0o7QUV2R0k7Ozs7RUFDSSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FGNEdSO0FFekdROzs7O0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBRjhHWjtBRTNHSTs7OztFQUNJLDhCQUFBO0FGZ0hSO0FFL0dROzs7O0VBQ0ksY0FBQTtFQUNBLGlEQUFBO0FGb0haO0FFbEhROzs7O0VBQ0ksY0FBQTtFQUNBLGlEQUFBO0VBQ0EsZUFBQTtBRnVIWjtBRXBISTs7OztFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBRnlIUjtBRXhIUTs7OztFQUNJLFlBQUE7RUFDQSxtQkFBQTtBRjZIWjtBRTNIUTs7OztFQUNJLG9DQUFBO0FGZ0laO0FFOUhROzs7O0VBQ0ksb0NBQUE7QUZtSVo7QUVqSVE7Ozs7RUFDSSxvQ0FBQTtBRnNJWjtBRXBJUTs7OztFQUNJLG9DQUFBO0FGeUlaO0FFdklROzs7O0VBQ0ksb0NBQUE7QUY0SVo7QUUxSVE7Ozs7RUFDSSxvQ0FBQTtBRitJWjtBRTdJUTs7OztFQUNJLG9DQUFBO0FGa0paO0FFNUlJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBRitJUjtBRTFJSTtFQUNJLGdCQUFBO0VBQ0EsNEJBQUE7QUY2SVI7QUUzSUk7O0VBRUksY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FGNklSO0FFeklBO0VBQ0kscUJBQUE7QUY0SUo7QUUzSUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBRjZJUjtBRTVJUTtFQUNJLFlBQUE7RUFDQSw0QkFBQTtBRjhJWjtBRTNJb0I7RUFDSSx3QkFBQTtBRjZJeEI7QUV0SW9CO0VBQ0ksd0JBQUE7QUZ3SXhCO0FFbklRO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0Q0FBQTtBRnFJWjtBRXBJWTtFQUNJLGdCQUFBO0VBQ0EsaURBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FGc0loQjtBRXBJWTtFQUNJLGlEQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRnNJaEI7QUVsSUk7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FGb0lSO0FFbklRO0VBQ0ksZUFBQTtFQUNBLDhCQUFBO0FGcUlaO0FFcElZO0VBQ0ksZ0NBQUE7QUZzSWhCO0FFbklRO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRnFJWjtBRW5JUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUZxSVo7QUVsSUk7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUZvSVI7QUVuSVE7RUFDSSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtBRnFJWjtBRXBJWTtFQUNJLDRCQUFBO0FGc0loQjtBRXBJWTtFQUNJLFNBQUE7QUZzSWhCO0FFbklRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FGcUlaO0FFbklRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRnFJWjtBRWhJQTtFQUNJLFlBQUE7QUZtSUo7QUVsSUk7RUFDSSx3QkFBQTtBRm9JUjtBRWxJWTs7RUFFSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRm9JaEI7QUVsSVk7RUFDSSxrQkFBQTtBRm9JaEI7QUVqSVE7O0VBRUksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EscUNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGdDQUFBO0FGbUlaO0FFaklRO0VBQ0ksVUFBQTtBRm1JWjtBRWhJSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBRmtJUjtBRTdISTtFQUNJLGFBQUE7QUZnSVI7QUU1SEE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0FGK0hKO0FFNUhBO0VBQ0ksMEJBQUE7QUYrSEo7QUU1SEE7RUFDSSxtQkFBQTtBRitISjtBRTVIQTtFQUNJLG1CQUFBO0FGK0hKO0FFNUhBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FGK0hKO0FFM0hDO0VBQ0csaUJBQUE7QUY4SEo7QUUxSEE7RUFDSSwwQkFBQTtBRjZISjtBRTNIRTtFQUNFLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0FGOEhKO0FFMUhBO0VBQ0csMkJBQUE7RUFDQSw4QkFBQTtBRjZISDtBRXpIQTtFQUNJLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUY0SEo7QUV6SEE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FGNEhKO0FFekhBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRjRISjtBRXpIQTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0RBQUE7QUY0SEo7QUV6SEE7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdEQUFBO0FGNEhKO0FFekhBO0VBUUksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsdUNBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7QUZxSEo7QUVsSEE7RUFDSTtJQUFLLDZCQUFBO0VGc0hQO0VFckhFO0lBQUssaUNBQUE7RUZ3SFA7RUV2SEU7SUFBSyxrQ0FBQTtFRjBIUDtFRXpIRTtJQUFLLGlDQUFBO0VGNEhQO0VFM0hFO0lBQUssa0NBQUE7RUY4SFA7RUU3SEU7SUFBSyxpQ0FBQTtFRmdJUDtFRS9IRTtJQUFNLGtDQUFBO0VGa0lSO0VFaklFO0lBQU0saUNBQUE7RUZvSVI7RUVuSUU7SUFBTSxrQ0FBQTtFRnNJUjtFRXJJRTtJQUFNLGlDQUFBO0VGd0lSO0VFdklFO0lBQU0sa0NBQUE7RUYwSVI7RUV6SUU7SUFBTSxpQ0FBQTtFRjRJUjtFRTNJRTtJQUFNLGtDQUFBO0VGOElSO0VFN0lFO0lBQU0saUNBQUE7RUZnSlI7RUUvSUU7SUFBTSxrQ0FBQTtFRmtKUjtFRWpKRTtJQUFNLGlDQUFBO0VGb0pSO0VFbkpFO0lBQU0saUNBQUE7RUZzSlI7RUVySkU7SUFBTSxnQ0FBQTtFRndKUjtFRXZKRTtJQUFNLGlDQUFBO0VGMEpSO0VFekpFO0lBQU0sZ0NBQUE7RUY0SlI7RUUzSkU7SUFBTSxpQ0FBQTtFRjhKUjtFRTdKRTtJQUFNLGdDQUFBO0VGZ0tSO0VFOUpFO0lBQU0sNkJBQUE7RUZpS1I7RUVoS0U7SUFBTyw2QkFBQTtFRm1LVDtBQUNGO0FFcklFO0VBQ0U7SUFBSyxvQkFBQTtFRmtOUDtFRWpORTtJQUFLLHdCQUFBO0VGb05QO0VFbk5FO0lBQUsseUJBQUE7RUZzTlA7RUVyTkU7SUFBSyx3QkFBQTtFRndOUDtFRXZORTtJQUFLLHlCQUFBO0VGME5QO0VFek5FO0lBQUssd0JBQUE7RUY0TlA7RUUzTkU7SUFBTSx5QkFBQTtFRjhOUjtFRTdORTtJQUFNLHdCQUFBO0VGZ09SO0VFL05FO0lBQU0seUJBQUE7RUZrT1I7RUVqT0U7SUFBTSx3QkFBQTtFRm9PUjtFRW5PRTtJQUFNLHlCQUFBO0VGc09SO0VFck9FO0lBQU0sd0JBQUE7RUZ3T1I7RUV2T0U7SUFBTSx5QkFBQTtFRjBPUjtFRXpPRTtJQUFNLHdCQUFBO0VGNE9SO0VFM09FO0lBQU0seUJBQUE7RUY4T1I7RUU3T0U7SUFBTSx3QkFBQTtFRmdQUjtFRS9PRTtJQUFNLHdCQUFBO0VGa1BSO0VFalBFO0lBQU0sdUJBQUE7RUZvUFI7RUVuUEU7SUFBTSx3QkFBQTtFRnNQUjtFRXJQRTtJQUFNLHVCQUFBO0VGd1BSO0VFdlBFO0lBQU0sd0JBQUE7RUYwUFI7RUV6UEU7SUFBTSx1QkFBQTtFRjRQUjtFRTFQRTtJQUFNLG9CQUFBO0VGNlBSO0VFNVBFO0lBQU8sb0JBQUE7RUYrUFQ7QUFDRjtBRTdQQTtFQUVRO0lBQ0kscUJBQUE7RUY4UFY7QUFDRjtBRTFQQTtFQUNJO0lBQ0ksbUJBQUE7RUY0UE47O0VFelBNO0lBQ0ksd0JBQUE7RUY0UFY7QUFDRjtBRWhQQTtFQUVRO0lBQ0ksc0JBQUE7RUZpUFY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvY29tcG9uZW50cy9ncmFwaHMvZ3JhcGhzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0ZXBwZXItZ3JpZCB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICAuc3RlcHBlci1ncmlkX3N0ZXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAuNjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmLl9hY3RpdmUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG5cclxuICAgICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24ge1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGVlcC1ibHVlLWNvbG9yO1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG5cclxuICAgICAgICAgIGRpdi5pbWFnZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRlZXAtYmx1ZS1jb2xvcjtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIge1xyXG4gICAgICAgIGhyIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkZGVlcC1ibHVlLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuX2FjdGl2YXRlZCB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XHJcblxyXG4gICAgICAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiB7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG5cclxuICAgICAgICAgIGRpdi5pbWFnZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtYm9yZGVyIHtcclxuICAgICAgICBociB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgZGl2IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtcHJpbWFyeTtcclxuXHJcbiAgICAgICAgJi5fbGFzdCB7XHJcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgaHIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0yNHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zdGVwcGVyLWdyaWQtY29udGVudCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgJi5fYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG4iLCIuc3RlcHBlci1ncmlkIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3BhY2l0eTogMC42O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmUgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2Mjg2MjtcbiAgYm9yZGVyOiAwO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYgZGl2LmltYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdjpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBNkIxQzM7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGxhYmVsIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYyODYyO1xuICBjb2xvcjogd2hpdGU7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIgaHIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA2Mjg2Mjtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2YXRlZCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM3QURBO1xuICBib3JkZXI6IDA7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiBkaXYuaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2OmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0E2QjFDMztcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gbGFiZWwge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzdBREE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciBociB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNDM3QURBO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBNkIxQzM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gbGFiZWwge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBNkIxQzM7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNBNkIxQzM7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGxhYmVsLl9sYXN0IHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciBociB7XG4gIG1hcmdpbi10b3A6IC0yNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQTZCMUMzO1xufVxuXG4uc3RlcHBlci1ncmlkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnN0ZXBwZXItZ3JpZC1jb250ZW50Ll9hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmJvb2tpbmdzLWNhcmQsXG4uZmxvYXRpbmctY2FyZCxcbi5wYWNrYWdlcy1jYXJkLFxuLnBlcmZvcm1hbmNlLWNhcmQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAwcHggM3B4IHJnYmEoNjAsIDY0LCA2NywgMC4zKSwgMCA0cHggOHB4IDJweCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDZweCAxMHB4ICFpbXBvcnRhbnQ7XG59XG4uYm9va2luZ3MtY2FyZCAuaGVhZGVyIHNwYW4sXG4uZmxvYXRpbmctY2FyZCAuaGVhZGVyIHNwYW4sXG4ucGFja2FnZXMtY2FyZCAuaGVhZGVyIHNwYW4sXG4ucGVyZm9ybWFuY2UtY2FyZCAuaGVhZGVyIHNwYW4ge1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM0RjRGNEY7XG59XG4uYm9va2luZ3MtY2FyZCAuaGVhZGVyIC5ib29raW5ncy1jYXJkX20tZHJvcGRvd24sXG4uZmxvYXRpbmctY2FyZCAuaGVhZGVyIC5ib29raW5ncy1jYXJkX20tZHJvcGRvd24sXG4ucGFja2FnZXMtY2FyZCAuaGVhZGVyIC5ib29raW5ncy1jYXJkX20tZHJvcGRvd24sXG4ucGVyZm9ybWFuY2UtY2FyZCAuaGVhZGVyIC5ib29raW5ncy1jYXJkX20tZHJvcGRvd24ge1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5ib29raW5ncy1jYXJkIC5kZXNjcmlwdGlvbi5tdC0yLFxuLmZsb2F0aW5nLWNhcmQgLmRlc2NyaXB0aW9uLm10LTIsXG4ucGFja2FnZXMtY2FyZCAuZGVzY3JpcHRpb24ubXQtMixcbi5wZXJmb3JtYW5jZS1jYXJkIC5kZXNjcmlwdGlvbi5tdC0yIHtcbiAgbWFyZ2luOiAyNnB4IDAgMTJweCAhaW1wb3J0YW50O1xufVxuLmJvb2tpbmdzLWNhcmQgLmRlc2NyaXB0aW9uLm10LTIgLnRocmVlIHAsXG4uZmxvYXRpbmctY2FyZCAuZGVzY3JpcHRpb24ubXQtMiAudGhyZWUgcCxcbi5wYWNrYWdlcy1jYXJkIC5kZXNjcmlwdGlvbi5tdC0yIC50aHJlZSBwLFxuLnBlcmZvcm1hbmNlLWNhcmQgLmRlc2NyaXB0aW9uLm10LTIgLnRocmVlIHAge1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1mYW1pbHk6IFVidW50dSwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cbi5ib29raW5ncy1jYXJkIC5kZXNjcmlwdGlvbi5tdC0yIC50d28gcCxcbi5mbG9hdGluZy1jYXJkIC5kZXNjcmlwdGlvbi5tdC0yIC50d28gcCxcbi5wYWNrYWdlcy1jYXJkIC5kZXNjcmlwdGlvbi5tdC0yIC50d28gcCxcbi5wZXJmb3JtYW5jZS1jYXJkIC5kZXNjcmlwdGlvbi5tdC0yIC50d28gcCB7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LWZhbWlseTogVWJ1bnR1LCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4uYm9va2luZ3MtY2FyZCAucHJvZ3Jlc3MtYmFyLFxuLmZsb2F0aW5nLWNhcmQgLnByb2dyZXNzLWJhcixcbi5wYWNrYWdlcy1jYXJkIC5wcm9ncmVzcy1iYXIsXG4ucGVyZm9ybWFuY2UtY2FyZCAucHJvZ3Jlc3MtYmFyIHtcbiAgbWFyZ2luLXRvcDogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4uYm9va2luZ3MtY2FyZCAucHJvZ3Jlc3MtYmFyIC5iYXIsXG4uZmxvYXRpbmctY2FyZCAucHJvZ3Jlc3MtYmFyIC5iYXIsXG4ucGFja2FnZXMtY2FyZCAucHJvZ3Jlc3MtYmFyIC5iYXIsXG4ucGVyZm9ybWFuY2UtY2FyZCAucHJvZ3Jlc3MtYmFyIC5iYXIge1xuICBoZWlnaHQ6IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG4uYm9va2luZ3MtY2FyZCAucHJvZ3Jlc3MtYmFyLl8wMSAuYmFyLFxuLmZsb2F0aW5nLWNhcmQgLnByb2dyZXNzLWJhci5fMDEgLmJhcixcbi5wYWNrYWdlcy1jYXJkIC5wcm9ncmVzcy1iYXIuXzAxIC5iYXIsXG4ucGVyZm9ybWFuY2UtY2FyZCAucHJvZ3Jlc3MtYmFyLl8wMSAuYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y5QjI1MyAhaW1wb3J0YW50O1xufVxuLmJvb2tpbmdzLWNhcmQgLnByb2dyZXNzLWJhci5fMDIgLmJhcixcbi5mbG9hdGluZy1jYXJkIC5wcm9ncmVzcy1iYXIuXzAyIC5iYXIsXG4ucGFja2FnZXMtY2FyZCAucHJvZ3Jlc3MtYmFyLl8wMiAuYmFyLFxuLnBlcmZvcm1hbmNlLWNhcmQgLnByb2dyZXNzLWJhci5fMDIgLmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGQTk5MTcgIWltcG9ydGFudDtcbn1cbi5ib29raW5ncy1jYXJkIC5wcm9ncmVzcy1iYXIuXzAzIC5iYXIsXG4uZmxvYXRpbmctY2FyZCAucHJvZ3Jlc3MtYmFyLl8wMyAuYmFyLFxuLnBhY2thZ2VzLWNhcmQgLnByb2dyZXNzLWJhci5fMDMgLmJhcixcbi5wZXJmb3JtYW5jZS1jYXJkIC5wcm9ncmVzcy1iYXIuXzAzIC5iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY1RjU4ICFpbXBvcnRhbnQ7XG59XG4uYm9va2luZ3MtY2FyZCAucHJvZ3Jlc3MtYmFyLl8wNCAuYmFyLFxuLmZsb2F0aW5nLWNhcmQgLnByb2dyZXNzLWJhci5fMDQgLmJhcixcbi5wYWNrYWdlcy1jYXJkIC5wcm9ncmVzcy1iYXIuXzA0IC5iYXIsXG4ucGVyZm9ybWFuY2UtY2FyZCAucHJvZ3Jlc3MtYmFyLl8wNCAuYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RGNDI3RiAhaW1wb3J0YW50O1xufVxuLmJvb2tpbmdzLWNhcmQgLnByb2dyZXNzLWJhci5fMDUgLmJhcixcbi5mbG9hdGluZy1jYXJkIC5wcm9ncmVzcy1iYXIuXzA1IC5iYXIsXG4ucGFja2FnZXMtY2FyZCAucHJvZ3Jlc3MtYmFyLl8wNSAuYmFyLFxuLnBlcmZvcm1hbmNlLWNhcmQgLnByb2dyZXNzLWJhci5fMDUgLmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDQTk3NkIgIWltcG9ydGFudDtcbn1cbi5ib29raW5ncy1jYXJkIC5wcm9ncmVzcy1iYXIuXzA2IC5iYXIsXG4uZmxvYXRpbmctY2FyZCAucHJvZ3Jlc3MtYmFyLl8wNiAuYmFyLFxuLnBhY2thZ2VzLWNhcmQgLnByb2dyZXNzLWJhci5fMDYgLmJhcixcbi5wZXJmb3JtYW5jZS1jYXJkIC5wcm9ncmVzcy1iYXIuXzA2IC5iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEFBNjU3ICFpbXBvcnRhbnQ7XG59XG4uYm9va2luZ3MtY2FyZCAucHJvZ3Jlc3MtYmFyLl8wNyAuYmFyLFxuLmZsb2F0aW5nLWNhcmQgLnByb2dyZXNzLWJhci5fMDcgLmJhcixcbi5wYWNrYWdlcy1jYXJkIC5wcm9ncmVzcy1iYXIuXzA3IC5iYXIsXG4ucGVyZm9ybWFuY2UtY2FyZCAucHJvZ3Jlc3MtYmFyLl8wNyAuYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVEOUFDMSAhaW1wb3J0YW50O1xufVxuXG4uYm9va2luZ3MtY2FyZCAudWkuZ3JpZCA+IC5jb2x1bW46bm90KC5yb3cpIHtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgcGFkZGluZy1ib3R0b206IDRweDtcbn1cblxuLmZsb2F0aW5nLWNhcmQgdGFibGUgdGgge1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nLXRvcDogMTJweCAhaW1wb3J0YW50O1xufVxuLmZsb2F0aW5nLWNhcmQgdGgsXG4uZmxvYXRpbmctY2FyZCB0ZCB7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbn1cblxuLnBhY2thZ2VzLWNhcmQge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG4ucGFja2FnZXMtY2FyZCAuY2hhcnRzLWdyaWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGhlaWdodDogMTUycHg7XG59XG4ucGFja2FnZXMtY2FyZCAuY2hhcnRzLWdyaWQgLmN0LWNoYXJ0IHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiAxNDVweCAhaW1wb3J0YW50O1xufVxuLnBhY2thZ2VzLWNhcmQgLmNoYXJ0cy1ncmlkIC5jdC1jaGFydCAuY3Qtc2VyaWVzLWEgLmN0LXNsaWNlLWRvbnV0LXNvbGlkIC5jb2xvcmNoYW5nZSB7XG4gIGZpbGw6ICM0YmE2NTggIWltcG9ydGFudDtcbn1cbi5wYWNrYWdlcy1jYXJkIC5jaGFydHMtZ3JpZCAuY3QtY2hhcnQgLmN0LXNlcmllcy1iIC5jdC1zbGljZS1kb251dC1zb2xpZCAuY29sb3JjaGFuZ2Uge1xuICBmaWxsOiAjOTFkNjliICFpbXBvcnRhbnQ7XG59XG4ucGFja2FnZXMtY2FyZCAuY2hhcnRzLWdyaWQgLnBsYWNlaG9sZGVyLWNoYXJ0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRvcDogNDglO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGhlaWdodDogNzJweDtcbiAgd2lkdGg6IDcycHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yNyk7XG59XG4ucGFja2FnZXMtY2FyZCAuY2hhcnRzLWdyaWQgLnBsYWNlaG9sZGVyLWNoYXJ0IC5wbGFjZWhvbGRlci1jaGFydF90aXRsZSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBVYnVudHUsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wYWNrYWdlcy1jYXJkIC5jaGFydHMtZ3JpZCAucGxhY2Vob2xkZXItY2hhcnQgLnBsYWNlaG9sZGVyLWNoYXJ0X2xhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFVidW50dSwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnBhY2thZ2VzLWNhcmQgLnBsYWNlaG9sZGVyLWNoYXJ0LWdyaWQge1xuICB3aWR0aDogMTY2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDIycHggYXV0byAzMnB4O1xufVxuLnBhY2thZ2VzLWNhcmQgLnBsYWNlaG9sZGVyLWNoYXJ0LWdyaWQgLmVpZ2h0IHtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICM0ZjRmNGY7XG59XG4ucGFja2FnZXMtY2FyZCAucGxhY2Vob2xkZXItY2hhcnQtZ3JpZCAuZWlnaHQuYWN0aXZlIHtcbiAgYm9yZGVyLWNvbG9yOiAjRjM4MjIwICFpbXBvcnRhbnQ7XG59XG4ucGFja2FnZXMtY2FyZCAucGxhY2Vob2xkZXItY2hhcnQtZ3JpZCBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xufVxuLnBhY2thZ2VzLWNhcmQgLnBsYWNlaG9sZGVyLWNoYXJ0LWdyaWQgcCB7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LXNpemU6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuLnBhY2thZ2VzLWNhcmQgLmJnLWluZGljYXRvcnMge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnBhY2thZ2VzLWNhcmQgLmJnLWluZGljYXRvcnMgLnNpeHRlZW4ge1xuICBwYWRkaW5nOiAxNXB4IDE1cHggMThweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xufVxuLnBhY2thZ2VzLWNhcmQgLmJnLWluZGljYXRvcnMgLnNpeHRlZW46Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xufVxuLnBhY2thZ2VzLWNhcmQgLmJnLWluZGljYXRvcnMgLnNpeHRlZW46bGFzdC1jaGlsZCB7XG4gIGJvcmRlcjogMDtcbn1cbi5wYWNrYWdlcy1jYXJkIC5iZy1pbmRpY2F0b3JzIHNwYW4gcCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG4ucGFja2FnZXMtY2FyZCAuYmctaW5kaWNhdG9ycyBwIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5wZXJmb3JtYW5jZS1jYXJkIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLnBlcmZvcm1hbmNlLWNhcmQgLmZpZWxkIHtcbiAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xufVxuLnBlcmZvcm1hbmNlLWNhcmQgLmZpZWxkIC51aS5zbGlkZXIuY2hlY2tib3ggbGFiZWwsXG4ucGVyZm9ybWFuY2UtY2FyZCAuZmllbGQgLnVpLnNsaWRlci5jaGVja2JveCBzcGFuIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjNEY0RjRGO1xufVxuLnBlcmZvcm1hbmNlLWNhcmQgLmZpZWxkIC51aS5zbGlkZXIuY2hlY2tib3ggc3BhbiB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cbi5wZXJmb3JtYW5jZS1jYXJkIC5maWVsZCAudWkuc2xpZGVyLmNoZWNrYm94IC5ib3g6YmVmb3JlLFxuLnBlcmZvcm1hbmNlLWNhcmQgLmZpZWxkIC51aS5zbGlkZXIuY2hlY2tib3ggbGFiZWw6YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29udGVudDogXCJcIjtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDE7XG4gIHRvcDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB3aWR0aDogMy41cmVtO1xuICBoZWlnaHQ6IDEwcHg7XG4gIHRyYW5zZm9ybTogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNTAwcmVtO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3MgZWFzZTtcbn1cbi5wZXJmb3JtYW5jZS1jYXJkIC5maWVsZCAudWkuc2xpZGVyLmNoZWNrYm94IGlucHV0IHtcbiAgbGVmdDogMzlweDtcbn1cbi5wZXJmb3JtYW5jZS1jYXJkIC5jdC1wZXJmb3JtYW5jZS1jaGFydCB7XG4gIGhlaWdodDogMjgwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5sb2dzLWNhcmQgLmN0LXByb2R1Y3Rpdml0eS1jaGFydCB7XG4gIGhlaWdodDogMjgwcHg7XG59XG5cbi5tZW51IHtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmRyb3Bkb3duIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbiNkYXRlU2hvdyB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbiNkYXRlU2hvdy1wcm9kdWN0aXZpdHkge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG50YWJsZSB0aGVhZCB0ciB0aCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnVpLmNhcmRzIC5jYXJkbWFyZ2luIHtcbiAgbWFyZ2luOiA1cHggMC41ZW07XG59XG5cbi5oNFN0eWxlcyB7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xufVxuXG4uYWxsSGVhZGluZ3Mge1xuICBtYXJnaW46IDZweCAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICM1MDU0NTggIWltcG9ydGFudDtcbn1cblxuLnVpLmdyaWQgLmlubmVyLXdyYXBwZXIge1xuICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA2cHggIWltcG9ydGFudDtcbn1cblxuLm5vdGlmaWNhdGlvbnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUIxRTI0O1xuICBwYWRkaW5nLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgbGVmdDogMDtcbiAgbWFyZ2luOiAwIDEwcHggMCAwO1xuICBwYWRkaW5nLXRvcDogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zY2hlZHVsZSB7XG4gIG1hcmdpbjogNnB4O1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi5hbGxwYXJhZ3JhcGgge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4uYm94LW9uZSB7XG4gIGJhY2tncm91bmQ6ICMwMjg4ZDE7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgNnB4IDIwcHggMCByZ2JhKDM4LCAxOTgsIDIxOCwgMC41KTtcbn1cblxuLmJveC10d28ge1xuICBiYWNrZ3JvdW5kOiAjNDNhMDQ3O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDZweCAyMHB4IDAgcmdiYSg3NywgMTgyLCAxNzIsIDAuNSk7XG59XG5cbi5iZWxsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEzcHg7XG4gIHJpZ2h0OiAyOXB4O1xuICBmaWxsOiAjZmZmO1xuICAtd2Via2l0LWFuaW1hdGlvbjogcmluZyA0LjdzIGVhc2UgaW5maW5pdGU7XG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDBweDtcbiAgLW1vei1hbmltYXRpb246IHJpbmcgNC43cyBlYXNlIGluZmluaXRlO1xuICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAwcHg7XG4gIGFuaW1hdGlvbjogcmluZyA0LjdzIGVhc2UgaW5maW5pdGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwcHg7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyByaW5nIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDApO1xuICB9XG4gIDElIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigzMGRlZyk7XG4gIH1cbiAgMyUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKC0yOGRlZyk7XG4gIH1cbiAgNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDM0ZGVnKTtcbiAgfVxuICA3JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooLTMyZGVnKTtcbiAgfVxuICA5JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMzBkZWcpO1xuICB9XG4gIDExJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooLTI4ZGVnKTtcbiAgfVxuICAxMyUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDI2ZGVnKTtcbiAgfVxuICAxNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKC0yNGRlZyk7XG4gIH1cbiAgMTclIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigyMmRlZyk7XG4gIH1cbiAgMTklIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigtMjBkZWcpO1xuICB9XG4gIDIxJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMThkZWcpO1xuICB9XG4gIDIzJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooLTE2ZGVnKTtcbiAgfVxuICAyNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDE0ZGVnKTtcbiAgfVxuICAyNyUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKC0xMmRlZyk7XG4gIH1cbiAgMjklIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigxMGRlZyk7XG4gIH1cbiAgMzElIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigtOGRlZyk7XG4gIH1cbiAgMzMlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWig2ZGVnKTtcbiAgfVxuICAzNSUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKC00ZGVnKTtcbiAgfVxuICAzNyUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDJkZWcpO1xuICB9XG4gIDM5JSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooLTFkZWcpO1xuICB9XG4gIDQxJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMWRlZyk7XG4gIH1cbiAgNDMlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigwKTtcbiAgfVxufVxuQC1tb3ota2V5ZnJhbWVzIHJpbmcge1xuICAwJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICAxJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gIH1cbiAgMyUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTI4ZGVnKTtcbiAgfVxuICA1JSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNGRlZyk7XG4gIH1cbiAgNyUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTMyZGVnKTtcbiAgfVxuICA5JSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gIH1cbiAgMTElIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0yOGRlZyk7XG4gIH1cbiAgMTMlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI2ZGVnKTtcbiAgfVxuICAxNSUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTI0ZGVnKTtcbiAgfVxuICAxNyUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjJkZWcpO1xuICB9XG4gIDE5JSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpO1xuICB9XG4gIDIxJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxOGRlZyk7XG4gIH1cbiAgMjMlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0xNmRlZyk7XG4gIH1cbiAgMjUlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE0ZGVnKTtcbiAgfVxuICAyNyUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTEyZGVnKTtcbiAgfVxuICAyOSUge1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xuICB9XG4gIDMxJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZyk7XG4gIH1cbiAgMzMlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDZkZWcpO1xuICB9XG4gIDM1JSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNGRlZyk7XG4gIH1cbiAgMzclIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDJkZWcpO1xuICB9XG4gIDM5JSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMWRlZyk7XG4gIH1cbiAgNDElIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDFkZWcpO1xuICB9XG4gIDQzJSB7XG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgfVxuICAxMDAlIHtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJpbmcge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIH1cbiAgMSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcbiAgfVxuICAzJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTI4ZGVnKTtcbiAgfVxuICA1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzRkZWcpO1xuICB9XG4gIDclIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzJkZWcpO1xuICB9XG4gIDklIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gIH1cbiAgMTElIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjhkZWcpO1xuICB9XG4gIDEzJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjZkZWcpO1xuICB9XG4gIDE1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTI0ZGVnKTtcbiAgfVxuICAxNyUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDIyZGVnKTtcbiAgfVxuICAxOSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yMGRlZyk7XG4gIH1cbiAgMjElIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxOGRlZyk7XG4gIH1cbiAgMjMlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTZkZWcpO1xuICB9XG4gIDI1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTRkZWcpO1xuICB9XG4gIDI3JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTEyZGVnKTtcbiAgfVxuICAyOSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbiAgfVxuICAzMSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC04ZGVnKTtcbiAgfVxuICAzMyUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDZkZWcpO1xuICB9XG4gIDM1JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTRkZWcpO1xuICB9XG4gIDM3JSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMmRlZyk7XG4gIH1cbiAgMzklIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMWRlZyk7XG4gIH1cbiAgNDElIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxZGVnKTtcbiAgfVxuICA0MyUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTc1NHB4KSB7XG4gIC51aS5jYXJkcy5ncmlkIC5jYXJkLXdyYXBwZXIge1xuICAgIHdpZHRoOiA0OCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAub3V0ZXItd3JhcHBlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG4gIC51aS5jYXJkcy5ncmlkIC5jYXJkLXdyYXBwZXIge1xuICAgIHdpZHRoOiA0Ny43NSUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC51aS5jYXJkcy5ncmlkIC5jYXJkLXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn0iLCIkcHJpbWFyeS1jb2xvcjogIzQzN0FEQTtcclxuJHNlY29uZGFyeS1jb2xvcjogI0E2QjFDMztcclxuJGRlZXAtYmx1ZS1jb2xvcjogIzA2Mjg2MjtcclxuJGxpZ2h0LXNtb2tlLWNvbG9yOiAjZTVlNWU1O1xyXG4kdm9pbGEtZ3JlZW46ICM4NEJDNkE7XHJcbiRwdXJlLXdoaXRlOiB3aGl0ZTtcclxuJGZhdWx0LWNvbG9yOiAjREU3OTc5O1xyXG4kd2FybmluZy1jb2xvcjogI0VDQzA0RTtcclxuJHN1Y2Nlc3MtY29sb3I6ICM3M0IyNUQ7XHJcblxyXG4kYm9keS1iYXNlOiAjZmZmO1xyXG4kY29ycG9yYXRlLWJsdWUtYmFzZTogIzQ1NjdBQztcclxuXHJcbiRjb250YWluZXItYmFzZTogd2hpdGU7XHJcbiRjb250YWluZXItYmFzZS1zaGFkb3c6IDAgMHB4IDNweCByZ2JhKDYwLCA2NCwgNjcsIDAuMyksIDAgNHB4IDhweCAycHggcmdiYSg2MCwgNjQsIDY3LCAwLjE1KTtcclxuJGNvbnRhaW5lci1kcm9wZG93bnMtc2hhZG93OiAwcHggOHB4IDE0cHggcmdiYSgwLCA1OCwgMTY0LCAuMik7XHJcblxyXG4kcHJpbWFyeS1zaGFkb3c6IDBweCA0LjgzcHggMTZweCByZ2JhKDY3LCAxMjIsIDIxOCwgLjUpO1xyXG4kbGlnaHQtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDU4LCAxNjQsIC4yNSk7XHJcbiRmYWRlZC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMTY3LCAxNzMsIDE4MiwgLjIpO1xyXG4kbGlnaHQtZXh0ZW5kZWQtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDU4LCAxNjQsIC4yNSk7XHJcblxyXG4kYm9yZGVyLXJhZGl1cy1wcmltYXJ5OiA4cHg7XHJcbiRib3JkZXItcmFkaXVzLXNlY29uZGFyeTogNnB4O1xyXG5cclxuJGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xyXG5cclxuJHRvYXN0LWluZm8tY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4kdG9hc3QtaW5mby1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxMTEsIDAsIDAsIC4yKTtcclxuXHJcbiR0b2FzdC1lcnJvci1jb2xvcjogJGZhdWx0LWNvbG9yO1xyXG4kdG9hc3QtZXJyb3Itc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTExLCAwLCAwLCAuMik7XHJcblxyXG4kdG9hc3Qtd2FybmluZy1jb2xvcjogJHdhcm5pbmctY29sb3I7XHJcbiR0b2FzdC13YXJuaW5nLXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDE3NywgMTI3LCAwLCAuMik7XHJcblxyXG4kdG9hc3Qtc3VjY2Vzcy1jb2xvcjogJHN1Y2Nlc3MtY29sb3I7XHJcbiR0b2FzdC1zdWNjZXNzLXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDM0LCAxMzAsIDAsIC4yKTtcclxuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vLi4vY29tb24tc3R5bGVzL2NvbW1vbi5zY3NzXCI7XHJcbi5ib29raW5ncy1jYXJkLFxyXG4uZmxvYXRpbmctY2FyZCxcclxuLnBhY2thZ2VzLWNhcmQsXHJcbi5wZXJmb3JtYW5jZS1jYXJkIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1wcmltYXJ5ICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAkY29udGFpbmVyLWJhc2Utc2hhZG93ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA2cHggMTBweCAhaW1wb3J0YW50O1xyXG4gICAgLmhlYWRlciBzcGFuIHtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgfVxyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgLmJvb2tpbmdzLWNhcmRfbS1kcm9wZG93biB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kZXNjcmlwdGlvbi5tdC0yIHtcclxuICAgICAgICBtYXJnaW46IDI2cHggMCAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLnRocmVlIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFVidW50dSwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnR3byBwIHtcclxuICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBVYnVudHUsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucHJvZ3Jlc3MtYmFyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAuYmFyIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLl8wMSAuYmFyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5QjI1MyAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLl8wMiAuYmFyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZBOTkxNyAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLl8wMyAuYmFyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNUY1OCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLl8wNCAuYmFyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0RGNDI3RiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLl8wNSAuYmFyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0NBOTc2QiAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLl8wNiAuYmFyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRBQTY1NyAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLl8wNyAuYmFyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVEOUFDMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJvb2tpbmdzLWNhcmQge1xyXG4gICAgLnVpLmdyaWQ+LmNvbHVtbjpub3QoLnJvdykge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuICAgIH1cclxufVxyXG5cclxuLmZsb2F0aW5nLWNhcmQge1xyXG4gICAgdGFibGUgdGgge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIHRoLFxyXG4gICAgdGQge1xyXG4gICAgICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wYWNrYWdlcy1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgIC5jaGFydHMtZ3JpZCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTJweDtcclxuICAgICAgICAuY3QtY2hhcnQge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE0NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC5jdC1zZXJpZXMtYXtcclxuICAgICAgICAgICAgICAgIC5jdC1zbGljZS1kb251dC1zb2xpZHtcclxuICAgICAgICAgICAgICAgICAgICAuY29sb3JjaGFuZ2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IzRiYTY1OCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmN0LXNlcmllcy1ie1xyXG4gICAgICAgICAgICAgICAgLmN0LXNsaWNlLWRvbnV0LXNvbGlke1xyXG4gICAgICAgICAgICAgICAgICAgIC5jb2xvcmNoYW5nZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogIzkxZDY5YiAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnBsYWNlaG9sZGVyLWNoYXJ0IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIHRvcDogNDglO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDcycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCA1cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4yNyk7XHJcbiAgICAgICAgICAgIC5wbGFjZWhvbGRlci1jaGFydF90aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFVidW50dSwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucGxhY2Vob2xkZXItY2hhcnRfbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFVidW50dSwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wbGFjZWhvbGRlci1jaGFydC1ncmlkIHtcclxuICAgICAgICB3aWR0aDogMTY2cHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAyMnB4IGF1dG8gMzJweDtcclxuICAgICAgICAuZWlnaHQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzRmNGY0ZjtcclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjRjM4MjIwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5iZy1pbmRpY2F0b3JzIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIC5zaXh0ZWVuIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweCAxNXB4IDE4cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbiBwIHtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnBlcmZvcm1hbmNlLWNhcmQge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLmZpZWxkIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLnVpLnNsaWRlci5jaGVja2JveCB7XHJcbiAgICAgICAgICAgIGxhYmVsLFxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudWkuc2xpZGVyLmNoZWNrYm94IC5ib3g6YmVmb3JlLFxyXG4gICAgICAgIC51aS5zbGlkZXIuY2hlY2tib3ggbGFiZWw6YmVmb3JlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICB0b3A6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG4gICAgICAgICAgICB3aWR0aDogMy41cmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAwcmVtO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIC4zcyBlYXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudWkuc2xpZGVyLmNoZWNrYm94IGlucHV0IHtcclxuICAgICAgICAgICAgbGVmdDogMzlweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY3QtcGVyZm9ybWFuY2UtY2hhcnQge1xyXG4gICAgICAgIGhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxufVxyXG5cclxuLmxvZ3MtY2FyZCB7XHJcbiAgICAuY3QtcHJvZHVjdGl2aXR5LWNoYXJ0IHtcclxuICAgICAgICBoZWlnaHQ6IDI4MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbFxyXG59XHJcblxyXG4uZHJvcGRvd24ge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuXHJcbiNkYXRlU2hvdyB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4jZGF0ZVNob3ctcHJvZHVjdGl2aXR5IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbnRhYmxlIHRoZWFkIHRyIHRoIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi51aS5jYXJkc3tcclxuIC5jYXJkbWFyZ2lue1xyXG4gICAgbWFyZ2luOjVweCAwLjVlbTtcclxuICB9XHJcbn1cclxuXHJcbi5oNFN0eWxlcyB7XHJcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmFsbEhlYWRpbmdzIHtcclxuICAgIG1hcmdpbjogNnB4IDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzUwNTQ1OCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbi51aS5ncmlke1xyXG4uaW5uZXItd3JhcHBlcntcclxuICAgcGFkZGluZy10b3A6MHB4ICFpbXBvcnRhbnQ7XHJcbiAgIHBhZGRpbmctYm90dG9tOjZweCAhaW1wb3J0YW50O1xyXG4gfVxyXG59XHJcblxyXG4ubm90aWZpY2F0aW9ucyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUIxRTI0O1xyXG4gICAgcGFkZGluZy1ib3R0b206NnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbjogMCAxMHB4IDAgMDtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zY2hlZHVsZXtcclxuICAgIG1hcmdpbjo2cHg7XHJcbiAgICBtaW4taGVpZ2h0OjIwMHB4O1xyXG4gICAgY29sb3I6I0ZGRjtcclxufVxyXG5cclxuLmFsbHBhcmFncmFwaHtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgICBmb250LXNpemU6MjRweDtcclxuICAgIG1hcmdpbi10b3A6MzBweDtcclxufVxyXG5cclxuLmJveC1vbmUge1xyXG4gICAgYmFja2dyb3VuZDogIzAyODhkMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCA2cHggMjBweCAwIHJnYmEoMzgsIDE5OCwgMjE4LCAwLjUpO1xyXG59XHJcblxyXG4uYm94LXR3byB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDNhMDQ3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAyMHB4IDAgcmdiYSg3NywgMTgyLCAxNzIsIDAuNSk7XHJcbn1cclxuXHJcbi5iZWxsIHtcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIHRvcDogMTNweDtcclxuICAgIC8vIHJpZ2h0OiAyOXB4O1xyXG4gICAgLy8gZmlsbDogI2ZmZjtcclxuICAgIC8vIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwO1xyXG4gICAgLy8gYW5pbWF0aW9uOiBzaGFrZSAyLjVzIGVhc2UgaW5maW5pdGU7XHJcblxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxM3B4O1xyXG4gICAgcmlnaHQ6IDI5cHg7XHJcbiAgICBmaWxsOiAjZmZmO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHJpbmcgNC43cyBlYXNlIGluZmluaXRlO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMHB4O1xyXG4gICAgLW1vei1hbmltYXRpb246IHJpbmcgNC43cyBlYXNlIGluZmluaXRlO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMHB4O1xyXG4gICAgYW5pbWF0aW9uOiByaW5nIDQuN3MgZWFzZSBpbmZpbml0ZTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwcHg7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyByaW5nIHtcclxuICAgIDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMCk7IH1cclxuICAgIDElIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMzBkZWcpOyB9XHJcbiAgICAzJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKC0yOGRlZyk7IH1cclxuICAgIDUlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMzRkZWcpOyB9XHJcbiAgICA3JSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKC0zMmRlZyk7IH1cclxuICAgIDklIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMzBkZWcpOyB9XHJcbiAgICAxMSUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigtMjhkZWcpOyB9XHJcbiAgICAxMyUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigyNmRlZyk7IH1cclxuICAgIDE1JSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKC0yNGRlZyk7IH1cclxuICAgIDE3JSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDIyZGVnKTsgfVxyXG4gICAgMTklIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooLTIwZGVnKTsgfVxyXG4gICAgMjElIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMThkZWcpOyB9XHJcbiAgICAyMyUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigtMTZkZWcpOyB9XHJcbiAgICAyNSUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigxNGRlZyk7IH1cclxuICAgIDI3JSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKC0xMmRlZyk7IH1cclxuICAgIDI5JSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVaKDEwZGVnKTsgfVxyXG4gICAgMzElIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooLThkZWcpOyB9XHJcbiAgICAzMyUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWig2ZGVnKTsgfVxyXG4gICAgMzUlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooLTRkZWcpOyB9XHJcbiAgICAzNyUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigyZGVnKTsgfVxyXG4gICAgMzklIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooLTFkZWcpOyB9XHJcbiAgICA0MSUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigxZGVnKTsgfVxyXG4gIFxyXG4gICAgNDMlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVooMCk7IH1cclxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWigwKTsgfVxyXG4gIH1cclxuICBcclxuICBALW1vei1rZXlmcmFtZXMgcmluZyB7XHJcbiAgICAwJSB7IC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMCk7IH1cclxuICAgIDElIHsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7IH1cclxuICAgIDMlIHsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMjhkZWcpOyB9XHJcbiAgICA1JSB7IC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzRkZWcpOyB9XHJcbiAgICA3JSB7IC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTMyZGVnKTsgfVxyXG4gICAgOSUgeyAtbW96LXRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTsgfVxyXG4gICAgMTElIHsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMjhkZWcpOyB9XHJcbiAgICAxMyUgeyAtbW96LXRyYW5zZm9ybTogcm90YXRlKDI2ZGVnKTsgfVxyXG4gICAgMTUlIHsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMjRkZWcpOyB9XHJcbiAgICAxNyUgeyAtbW96LXRyYW5zZm9ybTogcm90YXRlKDIyZGVnKTsgfVxyXG4gICAgMTklIHsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMjBkZWcpOyB9XHJcbiAgICAyMSUgeyAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE4ZGVnKTsgfVxyXG4gICAgMjMlIHsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMTZkZWcpOyB9XHJcbiAgICAyNSUgeyAtbW96LXRyYW5zZm9ybTogcm90YXRlKDE0ZGVnKTsgfVxyXG4gICAgMjclIHsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtMTJkZWcpOyB9XHJcbiAgICAyOSUgeyAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTsgfVxyXG4gICAgMzElIHsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtOGRlZyk7IH1cclxuICAgIDMzJSB7IC1tb3otdHJhbnNmb3JtOiByb3RhdGUoNmRlZyk7IH1cclxuICAgIDM1JSB7IC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTRkZWcpOyB9XHJcbiAgICAzNyUgeyAtbW96LXRyYW5zZm9ybTogcm90YXRlKDJkZWcpOyB9XHJcbiAgICAzOSUgeyAtbW96LXRyYW5zZm9ybTogcm90YXRlKC0xZGVnKTsgfVxyXG4gICAgNDElIHsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxZGVnKTsgfVxyXG4gIFxyXG4gICAgNDMlIHsgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfVxyXG4gICAgMTAwJSB7IC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMCk7IH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyByaW5nIHtcclxuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMCk7IH1cclxuICAgIDElIHsgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpOyB9XHJcbiAgICAzJSB7IHRyYW5zZm9ybTogcm90YXRlKC0yOGRlZyk7IH1cclxuICAgIDUlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzRkZWcpOyB9XHJcbiAgICA3JSB7IHRyYW5zZm9ybTogcm90YXRlKC0zMmRlZyk7IH1cclxuICAgIDklIHsgdHJhbnNmb3JtOiByb3RhdGUoMzBkZWcpOyB9XHJcbiAgICAxMSUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtMjhkZWcpOyB9XHJcbiAgICAxMyUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgyNmRlZyk7IH1cclxuICAgIDE1JSB7IHRyYW5zZm9ybTogcm90YXRlKC0yNGRlZyk7IH1cclxuICAgIDE3JSB7IHRyYW5zZm9ybTogcm90YXRlKDIyZGVnKTsgfVxyXG4gICAgMTklIHsgdHJhbnNmb3JtOiByb3RhdGUoLTIwZGVnKTsgfVxyXG4gICAgMjElIHsgdHJhbnNmb3JtOiByb3RhdGUoMThkZWcpOyB9XHJcbiAgICAyMyUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgtMTZkZWcpOyB9XHJcbiAgICAyNSUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgxNGRlZyk7IH1cclxuICAgIDI3JSB7IHRyYW5zZm9ybTogcm90YXRlKC0xMmRlZyk7IH1cclxuICAgIDI5JSB7IHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTsgfVxyXG4gICAgMzElIHsgdHJhbnNmb3JtOiByb3RhdGUoLThkZWcpOyB9XHJcbiAgICAzMyUgeyB0cmFuc2Zvcm06IHJvdGF0ZSg2ZGVnKTsgfVxyXG4gICAgMzUlIHsgdHJhbnNmb3JtOiByb3RhdGUoLTRkZWcpOyB9XHJcbiAgICAzNyUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgyZGVnKTsgfVxyXG4gICAgMzklIHsgdHJhbnNmb3JtOiByb3RhdGUoLTFkZWcpOyB9XHJcbiAgICA0MSUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgxZGVnKTsgfVxyXG4gIFxyXG4gICAgNDMlIHsgdHJhbnNmb3JtOiByb3RhdGUoMCk7IH1cclxuICAgIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwKTsgfVxyXG4gIH1cclxuICBcclxuQG1lZGlhKG1heC13aWR0aDoxNzU0cHgpe1xyXG4gICAgLnVpLmNhcmRzLmdyaWR7XHJcbiAgICAgICAgLmNhcmQtd3JhcHBlcntcclxuICAgICAgICAgICAgd2lkdGg6NDglICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgXHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6MTIwMHB4KXtcclxuICAgIC5vdXRlci13cmFwcGVye1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MjBweDtcclxuICAgIH1cclxuICAgIC51aS5jYXJkcy5ncmlke1xyXG4gICAgICAgIC5jYXJkLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOjQ3Ljc1JSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH0gIFxyXG59XHJcblxyXG4vLyBAbWVkaWEobWF4LXdpZHRoOjk5MXB4KXtcclxuLy8gICAgIC51aS5jYXJkcy5ncmlke1xyXG4vLyAgICAgICAgIC5jYXJkLXdyYXBwZXJ7XHJcbi8vICAgICAgICAgICAgIHdpZHRoOjUwJSAhaW1wb3J0YW50O1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH0gIFxyXG4vLyB9XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgIC51aS5jYXJkcy5ncmlke1xyXG4gICAgICAgIC5jYXJkLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9ICBcclxufSJdfQ== */";
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


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);

    var GraphsComponent = /*#__PURE__*/function () {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/dashboard/components/graphs/graphs.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./graphs.component.scss */
      "./src/app/layout/dashboard/components/graphs/graphs.component.scss"))["default"]]
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


    __webpack_exports__["default"] = ".page-wrapper {\n  margin-top: 24px;\n  padding: 0 24px 28px;\n}\n.page-wrapper .page-wrapper_title {\n  margin: 0;\n  padding: 0 0 28px;\n  color: #4f4f4f;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 20px;\n  font-weight: 300;\n  line-height: 22px;\n}\n.ui.form .fields {\n  margin-bottom: 24px;\n}\n.outer-basic {\n  background-color: #fff;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n}\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n  padding: 50px;\n}\n.d_date_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n.d_date_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n.d_date_pickers .input .icon {\n  opacity: 1;\n  z-index: 1;\n}\n.d_date_pickers .input .icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n.d_date_pickers .input .icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n.d_date_pickers .input .search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.d_date_pickers .input .search.dropdown .search {\n  margin-left: 42px !important;\n}\n.d_date_pickers .input .search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n.bookings_btn-panel button {\n  margin-top: 6px;\n  height: auto !important;\n  margin-left: 9px;\n}\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 15px;\n  line-height: 17px;\n  font-weight: 500;\n}\n.ui.left.icon.input {\n  top: 3px;\n}\n.label {\n  margin-bottom: 0px !important;\n}\n.ui.form .fields .outer-wrapper {\n  width: 20.75% !important;\n}\n@media (max-width: 767px) {\n  .main-wrapper {\n    margin-bottom: 16px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Rhc2hib2FyZC9FOlxcQmVsYWxcXHByb2plY3RzXFxwcm9kdWN0aW9uLWJ1aWxkXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7QUNDSjtBREFJO0VBQ0ksU0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNFUjtBREVBO0VBQ0ksbUJBQUE7QUNDSjtBREVBO0VBQ0ksc0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FDQ0o7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0NKO0FER0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDQVI7QURFSTtFQUNJLHdCQUFBO0VBQ0EsMENBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDQVI7QURFSTtFQUNJLFVBQUE7RUFDQSxVQUFBO0FDQVI7QURDUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDQ1o7QURBWTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0VoQjtBREVJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FDQVI7QURDUTtFQUNJLDRCQUFBO0FDQ1o7QURDUTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0FDQ1o7QURLSTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDRlI7QURPQTtFQUNJLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNKSjtBRE9BO0VBQ0ksUUFBQTtBQ0pKO0FET0E7RUFDSSw2QkFBQTtBQ0pKO0FEU1E7RUFDSSx3QkFBQTtBQ05aO0FEV0E7RUFDSTtJQUNJLDhCQUFBO0VDUk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2Utd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgcGFkZGluZzogMCAyNHB4IDI4cHg7XHJcbiAgICAucGFnZS13cmFwcGVyX3RpdGxlIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDI4cHg7XHJcbiAgICAgICAgY29sb3I6ICM0ZjRmNGY7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udWkuZm9ybSAuZmllbGRzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpYyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWNGb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogNTBweDtcclxufVxyXG5cclxuLmRfZGF0ZV9waWNrZXJzIC5pbnB1dCB7XHJcbiAgICAmLmJvb2tpbmdzX2RhdGVwaWNrZXIge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMzhweDtcclxuICAgIH1cclxuICAgIC51aS5iYXNpYy5mbG9hdGluZy5idXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogcmdiYSgxNTIsIDE1MiwgMTUyLCAwLjYpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4gICAgfVxyXG4gICAgLmljb24ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgICAgICAmLmNhbCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLmRyb3Bkb3duIHtcclxuICAgICAgICB3aWR0aDogMjE4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgLnNlYXJjaCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZWZhdWx0LnRleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMCAwIDM4cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ib29raW5nc19idG4tcGFuZWwge1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDlweDtcclxuICAgICAgICAvLyBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS5mb3JtIC5maWVsZD5sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi51aS5sZWZ0Lmljb24uaW5wdXR7XHJcbiAgICB0b3A6M3B4O1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51aS5mb3Jte1xyXG4gICAgLmZpZWxkc3tcclxuICAgICAgICAub3V0ZXItd3JhcHBlcntcclxuICAgICAgICAgICAgd2lkdGg6MjAuNzUlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjc2N3B4KXtcclxuICAgIC5tYWluLXdyYXBwZXJ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbToxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuIiwiLnBhZ2Utd3JhcHBlciB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG4gIHBhZGRpbmc6IDAgMjRweCAyOHB4O1xufVxuLnBhZ2Utd3JhcHBlciAucGFnZS13cmFwcGVyX3RpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAgMjhweDtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4udWkuZm9ybSAuZmllbGRzIHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLm91dGVyLWJhc2ljIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogM3B4IDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5vdXRlci1iYXNpY0Zvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiA1MHB4O1xufVxuXG4uZF9kYXRlX3BpY2tlcnMgLmlucHV0LmJvb2tpbmdzX2RhdGVwaWNrZXIge1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBtYXgtd2lkdGg6IDEzOHB4O1xufVxuLmRfZGF0ZV9waWNrZXJzIC5pbnB1dCAudWkuYmFzaWMuZmxvYXRpbmcuYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogcmdiYSgxNTIsIDE1MiwgMTUyLCAwLjYpICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDExcHg7XG59XG4uZF9kYXRlX3BpY2tlcnMgLmlucHV0IC5pY29uIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTtcbn1cbi5kX2RhdGVfcGlja2VycyAuaW5wdXQgLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcbiAgd2lkdGg6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5kX2RhdGVfcGlja2VycyAuaW5wdXQgLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbCB7XG4gIHdpZHRoOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmRfZGF0ZV9waWNrZXJzIC5pbnB1dCAuc2VhcmNoLmRyb3Bkb3duIHtcbiAgd2lkdGg6IDIxOHB4O1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xufVxuLmRfZGF0ZV9waWNrZXJzIC5pbnB1dCAuc2VhcmNoLmRyb3Bkb3duIC5zZWFyY2gge1xuICBtYXJnaW4tbGVmdDogNDJweCAhaW1wb3J0YW50O1xufVxuLmRfZGF0ZV9waWNrZXJzIC5pbnB1dCAuc2VhcmNoLmRyb3Bkb3duIC5kZWZhdWx0LnRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHggMCAwIDM4cHggIWltcG9ydGFudDtcbn1cblxuLmJvb2tpbmdzX2J0bi1wYW5lbCBidXR0b24ge1xuICBtYXJnaW4tdG9wOiA2cHg7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogOXB4O1xufVxuXG4udWkuZm9ybSAuZmllbGQgPiBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udWkubGVmdC5pY29uLmlucHV0IHtcbiAgdG9wOiAzcHg7XG59XG5cbi5sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDBweCAhaW1wb3J0YW50O1xufVxuXG4udWkuZm9ybSAuZmllbGRzIC5vdXRlci13cmFwcGVyIHtcbiAgd2lkdGg6IDIwLjc1JSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLm1haW4td3JhcHBlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */";
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

    var DashboardComponent = /*#__PURE__*/function () {
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
          }, function (err) {// this.toastr.info('Oops! We\'re unable to retrieve bookings information.', 'No Presets Info', {
            //   timeOut: 10000,
            //   progressBar: false,
            //   positionClass: 'toast-bottom-right'
            // });
            // this.bookingsLoader = false;
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/dashboard/dashboard.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/layout/dashboard/dashboard.component.scss"))["default"]]
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

    var DashboardService = /*#__PURE__*/function () {
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

    var OrganizationHService = /*#__PURE__*/function () {
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