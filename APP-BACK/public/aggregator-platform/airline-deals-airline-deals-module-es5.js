function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["airline-deals-airline-deals-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/airline-deals/airline-deals.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/airline-deals/airline-deals.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSetupConfigurationAirlineDealsAirlineDealsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"outer animated fadeIn\">\r\n  <div class=\"outer__airline-list\">\r\n    <h3 class=\"air-title\">Airline Deals</h3>\r\n  </div>\r\n  <div class=\"ui top attached tabular menu\">\r\n    <div class=\"active item tourCode_title\" [class.active]=\"activeTab && tabName=='first-tab'\"\r\n      (click)=\"activateTab('first-tab')\"><span>Tour Code/ Deal code</span></div>\r\n    <div class=\"item commision_title\" [class.active]=\"activeTab && tabName=='second-tab'\"\r\n      (click)=\"activateTab('second-tab')\">Commission</div>\r\n      <div class=\"item commision_title\" [class.active]=\"activeTab && tabName=='third-tab'\"\r\n      (click)=\"activateTab('third-tab')\">Airline Routes</div>\r\n  </div>\r\n  <div class=\"ui bottom attached active tab segment tabContent-block\" [class.active]=\"activeTab && tabName=='first-tab'\">\r\n    <app-tourcode></app-tourcode>\r\n  </div>\r\n  <div class=\"ui bottom attached tab segment tabContent-block\" [class.active]=\"activeTab && tabName=='second-tab'\">\r\n    <app-commission></app-commission>\r\n  </div>\r\n  <div class=\"ui bottom attached tab segment tabContent-block\" [class.active]=\"activeTab && tabName=='third-tab'\">\r\n    <app-airline-routes></app-airline-routes>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/airline-deals/airline-routes/airline-routes.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/airline-deals/airline-routes/airline-routes.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSetupConfigurationAirlineDealsAirlineRoutesAirlineRoutesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui fluid container\">\r\n  <div class=\"ui form\" [ngClass]=\"{'list-code-ui': (showListCode) }\">\r\n    <div class=\"ui segment\">\r\n      <div class=\"two fields search-section\">\r\n        <div class=\"eight wide field\" *ngIf=\"showAddCode\">\r\n          <h4 class=\"ui header main_head\">Airline Routes</h4>\r\n        </div>\r\n        <div class=\"eight wide field bookings_btn-panel\" [ngClass]=\"{'list-code': (showListCode) }\">\r\n          <button class=\"ui primary button tourCode_btn\" tabindex=\"0\" (click)=\"onClickAddCode()\" *ngIf=\"showAddCode\">\r\n            Add Airline Routes\r\n          </button>\r\n          <a href=\"javascript:void(0)\" class=\"ui goto_list tourCode_btn\" tabindex=\"0\" (click)=\"onClickListCode()\"\r\n            *ngIf=\"showListCode\">\r\n            <span class=\"\">\r\n              <!-- <img src=\"../../../../../assets/icons/goto_link_arrow.svg\" class=\"goto-link\" /> -->\r\n              <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\r\n              Go to List Airline Routes\r\n            </span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"result-block\" [ngClass]=\"{'list-code-block': (showListCode) }\">\r\n        <div class=\"user-table-list b2c-list-user-table\" *ngIf=\"showAddCode\">\r\n          <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n            [rowHeight]=\"'auto'\" [rows]='allAirlineRoutes'\r\n            [externalPaging]=\"true\" [count]=\"totalCount\" [offset]=\"offset\" (page)=\"pageCallback($event)\">\r\n            <!-- <ngx-datatable-column name=\"User ID\" prop=\"created_by\">\r\n                            </ngx-datatable-column> -->\r\n\r\n            <ngx-datatable-column name=\"Trip Type\" prop=\"trip_type\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Origin\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <div *ngFor=\"let rows of row.origin\">\r\n                  {{rows.text}}\r\n                </div>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Destination\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <div *ngFor=\"let rows of row.destination\">\r\n                  {{rows.text}}\r\n                </div>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Preferred Airline\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <div *ngFor=\"let rows of row.routes\">\r\n                  {{rows.name}}\r\n                </div>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Created\" prop=\"created\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\">{{value | date: 'dd/MM/yyyy'}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Status\" prop=\"is_active\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\r\n                <span *ngIf=\"value == true\" (click)=\"statusToggle(row)\">\r\n                  <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>\r\n                  <!-- <i class=\"icon\">\r\n                    <img src=\"./.././../../../assets/icons/checkmark.png\"\r\n                      class=\"bookings_input__placeholder-icon cal\" />\r\n                  </i> -->\r\n                </span>\r\n                <span *ngIf=\"value == false\" (click)=\"statusToggle(row)\">\r\n                  <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                  <!-- <i class=\"icon\">\r\n                    <img src=\"./.././../../../assets/icons/cross.png\" class=\"bookings_input__placeholder-icon call\" />\r\n                  </i> -->\r\n                </span>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Edit\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template let-value=\"value\">\r\n                <span class=\"action\" title=\"Edit Details\" (click)=\"editAirlineRoutes(row)\">\r\n                  <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n                  <!-- <i class=\"icon\">\r\n                    <img src=\"./../../../../../assets/icons/edit.png\" class=\"bookings_input__placeholder-icon cal\" />\r\n                  </i> -->\r\n                </span>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Delete\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template let-value=\"value\">\r\n                <ng-container *ngIf=\"row.is_deleted == 0\">\r\n                  <span class=\"action\" title=\"Delete Details\">\r\n                    <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    <!-- <i class=\"icon\" (click)=\"deleteAirlineRoutes(row)\">\r\n                      <img src=\"./../../../../../assets/icons/delete-button.png\"\r\n                        class=\"bookings_input__placeholder-icon cal\" />\r\n                    </i> -->\r\n                  </span>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"row.is_deleted == 1\">\r\n                  <span class=\"action\" title=\"Delete\">\r\n                    ---\r\n                  </span>\r\n                </ng-container>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n          </ngx-datatable>\r\n        </div>\r\n        <div class=\"listCodeWrapper\" *ngIf=\"showListCode\">\r\n          <form class=\"ui form\" #Form=\"ngForm\" [formGroup]=\"addAirlineRoutesForm\">\r\n            <div class=\"six fields list-head-block\">\r\n              <div class=\"six wide field\">\r\n                <label>Organisations</label>\r\n                <select class=\"ui fluid search dropdown6\" formControlName=\"organisation_id\" name=\"organisation_id\">\r\n                  <option class=\"item\" *ngFor=\"let organisation of allPos\" value=\"{{organisation.organisation_id}}\">\r\n                    {{organisation.name}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Supplier</label>\r\n                <select class=\"ui fluid search dropdown2 multiple_search\" formControlName=\"supplier\" name=\"supplier\"\r\n                  multiple=\"\">\r\n                  <option class=\"item\" *ngFor=\"let supplier of suppliers\" value=\"{{supplier.name}}\">\r\n                    {{supplier.name}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Trip Type</label>\r\n                <select class=\"ui fluid search dropdown\" formControlName=\"trip_type\">\r\n                  <option class=\"item\" value=\"\">Trip Type</option>\r\n                  <option class=\"item\" value=\"All\">All</option>\r\n                  <option class=\"item\" value=\"One way\">One way</option>\r\n                  <option class=\"item\" value=\"Round Trip\">Round Trip</option>\r\n                  <option class=\"item\" value=\"Multi Trip\">Multi Trip</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <!-- <h3>You can add multiple tourcodes from here on clicking add more button</h3> -->\r\n            <div class=\"ui segment detail-segment\">\r\n              <div class=\"six fields\">\r\n                <div class=\"six wide field\" [ngClass]=\"{ 'is-invalid': isSubmitted && f.origin.errors }\">\r\n                  <label>\r\n                    Origin Airport\r\n                    <i class=\"fa fa-exclamation-circle tooltip\">\r\n                      <span class=\"tooltiptext\">\r\n                        Comma-separated list of airport code e.g. DXB, JED, LHR (Upper Case Only). Default ALL will be\r\n                        selected.\r\n                      </span>\r\n                    </i>\r\n                  </label>\r\n                  <select class=\"ui fluid search dropdown4 multiple_search\" formControlName=\"origin\" required\r\n                    multiple=\"\">\r\n                    <option class=\"item\" *ngFor=\"let org of origins\" value=\"{{org.AirportCode}}\">\r\n                      {{org.AirportCode}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"six wide field\" [ngClass]=\"{ 'is-invalid': isSubmitted && f.destination.errors }\">\r\n                  <label>\r\n                    Destination Airport\r\n                    <i class=\"fa fa-exclamation-circle tooltip\">\r\n                      <span class=\"tooltiptext\">\r\n                        Comma-separated list of airport code e.g. DXB, JED, LHR (Upper Case Only). Default ALL will be\r\n                        selected.\r\n                      </span>\r\n                    </i>\r\n                  </label>\r\n                  <select class=\"ui fluid search dropdown5 multiple_search\" formControlName=\"destination\" required\r\n                    multiple=\"\">\r\n                    <option class=\"item\" *ngFor=\"let dest of destinations\" value=\"{{dest.AirportCode}}\">\r\n                      {{dest.AirportCode}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"six fields\"> -->\r\n                <!-- <div class=\"six wide field\">\r\n                  <label>\r\n                    Airline\r\n                    <i class=\"fa fa-exclamation-circle tooltip\">\r\n                      <span class=\"tooltiptext\">\r\n                        Comma-separated list of class services e.g. N or N, Q, K (Upper Case Only). Default ALL will be\r\n                        selected.\r\n                      </span>\r\n                    </i>\r\n                  </label>\r\n                  <select class=\"ui fluid search dropdown3\" formControlName=\"airline\" name=\"airline\">\r\n                    <option class=\"item\" *ngFor=\"let airline of airlines\" value=\"{{airline.name}}\">{{airline.name}}\r\n                    </option>\r\n                  </select>\r\n                </div> -->\r\n              <!-- </div> -->\r\n              <div class=\"fields\">\r\n                <div class=\"six wide field input-tagbased mb-0 pref-airline-field\">\r\n                  <label>Preferred Airlines</label>\r\n                  <mat-form-field style=\"width: 100%;top: -10px;\" class=\"example-chip-list\">\r\n                    <mat-chip-list #chipList>\r\n                      <mat-chip *ngFor=\"let val of this.addAirlineRoutesForm.value.routes\" [selectable]=\"selectable\"\r\n                        [removable]=\"removable\" (removed)=\"remove(val,1)\">\r\n                        {{val.name |uppercase}}\r\n                        <mat-icon matChipRemove *ngIf=\"removable\">x</mat-icon>\r\n                      </mat-chip>\r\n                    </mat-chip-list>\r\n                    <input [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                      [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event,1)\">\r\n                    <mat-error>Atleast 1 name need to be added</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n            <div class=\"bookings_btn-panel save-btn-block\" *ngIf=\"showListCode\">\r\n              <button class=\"ui primary button tourCode_btn fluid\" *ngIf=\"showSaveBtn\" (click)=\"saveAirlineRoutes()\">\r\n                <span class=\"tourCode_text\">Save</span>\r\n              </button>\r\n              <button class=\"ui primary button tourCode_btn fluid\" *ngIf=\"!showSaveBtn\" (click)=\"updateAirlineRoutes()\">\r\n                <span class=\"tourCode_text\">Update</span>\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/airline-deals/commission/commission.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/airline-deals/commission/commission.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSetupConfigurationAirlineDealsCommissionCommissionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui fluid container\">\r\n  <div class=\"ui form\" [ngClass]=\"{'list-code-ui': (showListCommision) }\">\r\n    <div class=\"ui segment\">\r\n      <div class=\"two fields search-section\">\r\n        <div class=\"eight wide field\" *ngIf=\"showAddCommision\">\r\n          <h4 class=\"ui header main_head\">Commission</h4>\r\n        </div>\r\n        <div class=\"eight wide field bookings_btn-panel\" [ngClass]=\"{'list-code': (showListCommision) }\">\r\n          <button class=\"ui primary button addTogg_btn\" tabindex=\"0\" (click)=\"onAddCommision()\"\r\n            *ngIf=\"showAddCommision\">\r\n            Add Commission\r\n          </button>\r\n          <a href=\"javascript:void(0)\" class=\"ui goto_list addTogg_btn\" tabindex=\"0\" (click)=\"onListCommission()\"\r\n            *ngIf=\"showListCommision\">\r\n            <span class=\"\">\r\n              <!-- <img src=\"../../../../../assets/icons/goto_link_arrow.svg\" class=\"goto-link\" /> -->\r\n              <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\r\n              Go to List Commission\r\n            </span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"result-block\" [ngClass]=\"{'list-code-block': (showAddCommision) }\">\r\n        <div class=\"user-table-list b2c-list-user-table\" *ngIf=\"showAddCommision\">\r\n          <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n            [rowHeight]=\"'auto'\" [rows]='NewAirlineCommission' [externalPaging]=\"true\" [count]=\"totalCount\" [offset]=\"offset\"\r\n            (page)=\"pageCallback($event)\">\r\n            <ngx-datatable-column name=\"Airline\" prop=\"airline\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Trip Type\" prop=\"trip_type\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Cabin Class\" prop=\"cabin_class\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Suppier\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <div *ngFor=\"let rows of row.supplier\">\r\n                  {{rows}}\r\n                </div>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Origin\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <div *ngFor=\"let rows of row.orgin\">\r\n                  {{rows.text}}\r\n                </div>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Destination\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <div *ngFor=\"let rows of row.destination\">\r\n                  {{rows.text}}\r\n                </div>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"RBD\" prop=\"rbd\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <ng-container *ngFor=\"let rows of row.rbd; let in = index;\">\r\n                  {{rows.text}} {{((row.rbd.length - in)\r\n                                    < row.rbd.length)? ',': ''}} </ng-container>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Sale Start Date\" prop=\"sale_start_date\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Sale End Date\" prop=\"sale_end_date\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Travel Start Date\" prop=\"travel_start_date\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Travel End Date\" prop=\"travel_end_date\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Created\" prop=\"created\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\">{{value | date: 'dd/MM/yyyy'}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Status\" prop=\"is_active\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\r\n                <span *ngIf=\"value == true\" (click)=\"statusToggle(row)\">\r\n                  <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>\r\n                  <!-- <i class=\"icon\">\r\n                    <img src=\"./../../../../../assets/icons/checkmark.png\"\r\n                      class=\"bookings_input__placeholder-icon cal\" />\r\n                  </i> -->\r\n                </span>\r\n                <span *ngIf=\"value == false\" (click)=\"statusToggle(row)\">\r\n                  <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                  <!-- <i class=\"icon\">\r\n                    <img src=\"./.././../../../assets/icons/cross.png\" class=\"bookings_input__placeholder-icon call\" />\r\n                  </i> -->\r\n                </span>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Edit\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template let-value=\"value\">\r\n                <span class=\"action\" (click)=\"editCommission(row)\" title=\"Edit Details\">\r\n                  <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n                  <!-- <i class=\"icon\">\r\n                    <img src=\"./../../../../../assets/icons/edit.png\" class=\"bookings_input__placeholder-icon cal\" />\r\n                  </i> -->\r\n                </span>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Delete\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template let-value=\"value\">\r\n                <span class=\"action\" (click)=\"deleteCommission(row)\" title=\"Delete Details\">\r\n                  <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                  <!-- <i class=\"icon\">\r\n                    <img src=\"./../../../../../assets/icons/delete-button.png\"\r\n                      class=\"bookings_input__placeholder-icon cal\" />\r\n                  </i> -->\r\n                </span>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n          </ngx-datatable>\r\n        </div>\r\n        <div class=\"listCodeWrapper\" *ngIf=\"showListCommision\">\r\n          <form class=\"ui form\" #Form=\"ngForm\" [formGroup]=\"newAddCommissionForm\">\r\n            <div class=\"six fields\">\r\n              <div class=\"five wide field\"\r\n                [ngClass]=\"{'error': ((submitted && fc.airline.errors) && fc.airline.errors.required)}\">\r\n                <label>Airline</label>\r\n                <select class=\"ui fluid search dropdown3\" formControlName=\"airline\" required name=\"airline\">\r\n                  <option class=\"item\" *ngFor=\"let airline of airlines\" value=\"{{airline.name}}\">{{airline.name}}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Cabin Class</label>\r\n                <select class=\"ui fluid search dropdown\" formControlName=\"cabin_class\" name=\"cabin_class\" required>\r\n                  <option class=\"item\" value=\"\">Cabin Class</option>\r\n                  <option class=\"item\" value=\"All\">All</option>\r\n                  <option class=\"item\" value=\"Economy/Coach\">Economy/Coach</option>\r\n                  <option class=\"item\" value=\"First Class\">First Class</option>\r\n                  <option class=\"item\" value=\"Bussiness\">Bussiness </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"six wide field\">\r\n                <label>Select Supplier</label>\r\n                <select class=\"ui fluid search dropdown2 multiple_search\" formControlName=\"supplier\" name=\"supplier\"\r\n                  multiple=''>\r\n                  <option class=\"item\" *ngFor=\"let supplier of suppliers\" value=\"{{supplier.name}}\">\r\n                    {{supplier.name}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"six fields\">\r\n              <div class=\"five wide field\">\r\n                <label>Trip Type</label>\r\n                <select class=\"ui fluid search dropdown\" formControlName=\"trip_type\" name=\"trip_type\" required>\r\n                  <option class=\"item\" value=\"\">Trip Type</option>\r\n                  <option class=\"item\" value=\"All\">All</option>\r\n                  <option class=\"item\" value=\"One way\">One way</option>\r\n                  <option class=\"item\" value=\"Round Trip\">Round Trip</option>\r\n                  <option class=\"item\" value=\"Multi Trip\">Multi Trip</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Airline Commission<span class=\"mandatory\">*</span></label>\r\n                <input type=\"number\" name=\"commission\" placeholder=\"Airline Commission\" formControlName=\"commission\" value=\"\"\r\n                  required>\r\n              </div>\r\n              <div class=\"six wide field\">\r\n                <label>Commission Mode</label>\r\n                <select class=\"ui fluid selection dropdown\" formControlName=\"commissionmode\">\r\n                  <option value=\"\" selected hidden disabled>Commission Mode</option>\r\n                  <option value=\"by_percentage\">Percentage</option>\r\n                  <option value=\"by_amount\">Amount</option>\r\n                </select>\r\n                <!-- <input type=\"number\" name=\"commissionmode\" placeholder=\"Commission Mode\" formControlName=\"commissionmode\" required> -->\r\n              </div>\r\n            </div>\r\n            <div class=\"ui segment detail-segment\">\r\n              <div class=\"six fields\">\r\n                <div class=\"five wide field\">\r\n                  <label>\r\n                    Origin Airport\r\n                    <i class=\"fa fa-exclamation-circle tooltip\">\r\n                      <span class=\"tooltiptext\">\r\n                        Comma-separated list of airport code e.g. DXB, JED, LHR (Upper Case Only). Default ALL will be\r\n                        selected.\r\n                      </span>\r\n                    </i>\r\n                  </label>\r\n                  <select class=\"ui fluid search dropdown4 multiple_search\" formControlName=\"orgin\" name=\"orgin\"\r\n                    required multiple=\"\">\r\n                    <option value=\"\">Origin Airport </option>\r\n                    <option class=\"item\" *ngFor=\"let origin of origins\" value=\"{{origin.AirportCode}}\">\r\n                      {{origin.AirportCode}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"five wide field\">\r\n                  <label>\r\n                    Destination Airport\r\n                    <i class=\"fa fa-exclamation-circle tooltip\">\r\n                      <span class=\"tooltiptext\">\r\n                        Comma-separated list of airport code e.g. DXB, JED, LHR (Upper Case Only). Default ALL will be\r\n                        selected.\r\n                      </span>\r\n                    </i>\r\n                  </label>\r\n                  <select class=\"ui fluid search dropdown4 multiple_search\" formControlName=\"destination\"\r\n                    name=\"destination\" required multiple=\"\">\r\n                    <option value=\"\">Destination Airport </option>\r\n                    <option class=\"item\" *ngFor=\"let origin1 of origins\" value=\"{{origin1.AirportCode}}\">\r\n                      {{origin1.AirportCode}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"six wide field\">\r\n                  <label>\r\n                    RBD\r\n                    <i class=\"fa fa-exclamation-circle tooltip\">\r\n                      <span class=\"tooltiptext\">\r\n                        Comma-separated list of class of services e.g. N or N , Q , K (Upper Case Only). Default ALL\r\n                        will be selected.\r\n                      </span>\r\n                    </i>\r\n                  </label>\r\n                  <select name=\"rbd\" multiple=\"\" formControlName=\"rbd\"\r\n                    class=\"ui search fluid dropdown1 multiple_search\">\r\n                    <option class=\"item\" *ngFor=\"let rbd of rbdArrayList\" value=\"{{rbd}}\">\r\n                      {{rbd}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"six fields\">\r\n                <div class=\"five wide field bookings_pickers \">\r\n                  <label>Sale Start Date</label>\r\n                  <div class=\"ui left icon input\">\r\n                    <input type=\"text\" placeholder=\"sale start date\" formControlName=\"sale_start_date\"\r\n                      name=\"sale_start_date\" value=\"\" required />\r\n                    <i class=\"icon\">\r\n                      <!-- <img src=\"./../../../../assets/icons/calendar.svg\"\r\n                        class=\"bookings_input__placeholder-icon calender\" /> -->\r\n                        <i class=\"fa fa-calendar-o bookings_input__placeholder-icon cal\" aria-hidden=\"true\"></i>\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"five wide field bookings_pickers \">\r\n                  <label>Sale End Date</label>\r\n                  <div class=\"ui left icon input \">\r\n                    <input type=\"text\" placeholder=\"sale start date\" formControlName=\"sale_end_date\"\r\n                      name=\"sale_end_date\" value=\"\" required />\r\n                    <i class=\"icon\">\r\n                      <!-- <img src=\"./../../../../assets/icons/calendar.svg\"\r\n                        class=\"bookings_input__placeholder-icon calender\" /> -->\r\n                    <i class=\"fa fa-calendar-o bookings_input__placeholder-icon cal\" aria-hidden=\"true\"></i>\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"six fields\">\r\n                <div class=\"five wide field bookings_pickers \">\r\n                  <label>Travel Start Date</label>\r\n                  <div class=\"ui left icon input \">\r\n                    <input type=\"text\" placeholder=\"travel start date\" formControlName=\"travel_start_date\"\r\n                      name=\"travel_start_date\" value=\"\" required />\r\n                    <i class=\"icon\">\r\n                      <!-- <img src=\"./../../../../assets/icons/calendar.svg\"\r\n                        class=\"bookings_input__placeholder-icon calender\" /> -->\r\n                    <i class=\"fa fa-calendar-o bookings_input__placeholder-icon cal\" aria-hidden=\"true\"></i>\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"five wide field bookings_pickers \">\r\n                  <label>Travel End Date</label>\r\n                  <div class=\"ui left icon input \">\r\n                    <input type=\"text\" placeholder=\"travel end date\" formControlName=\"travel_end_date\"\r\n                      name=\"travel_end_date\" value=\"\" required />\r\n                    <i class=\"icon\">\r\n                      <!-- <img src=\"./../../../../assets/icons/calendar.svg\"\r\n                        class=\"bookings_input__placeholder-icon calender\" /> -->\r\n                    <i class=\"fa fa-calendar-o bookings_input__placeholder-icon cal\" aria-hidden=\"true\"></i>\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n                <!--future use-->\r\n                <!-- <div class=\"three wide field\">\r\n                    <button class=\"ui button tourCode_btn fluid\" (click)=\"addMultipleCommissions()\"\r\n                    *ngIf=\"i==(newAddCommissionForm.get('commissions')['controls'].length-1)\">\r\n                    <span class=\"tourCode_text\">Add</span>\r\n                    </button>\r\n                    <button class=\"ui button tourCode_btn fluid\" *ngIf=\"i!=0\">\r\n                    <span class=\"tourCode_text\">Edit</span>\r\n                    </button>\r\n                    <button class=\"ui button tourCode_btn fluid\" *ngIf=\"i!=0\" tabindex=\"0\" (click)=\"removeCommission(i)\">\r\n                    <span class=\"tourCode_text\">Del</span>\r\n                    </button>\r\n                </div> -->\r\n                <!--future use-->\r\n              </div>\r\n            </div>\r\n            <div class=\"bookings_btn-panel save-btn-block\" *ngIf=\"showListCommision\">\r\n              <button class=\"ui primary button commissionCode_btn fluid\" *ngIf=\"showSaveBtn\" (click)=\"addCommission()\">\r\n                <span class=\"tourCode_text\">Save</span>\r\n              </button>\r\n              <button class=\"ui primary button commissionCode_btn fluid\" *ngIf=\"!showSaveBtn\"\r\n                (click)=\"updateCommission()\">\r\n                <span class=\"tourCode_text\">Update</span>\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/airline-deals/tourcode/tourcode.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/airline-deals/tourcode/tourcode.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSetupConfigurationAirlineDealsTourcodeTourcodeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui fluid container\">\r\n  <div class=\"ui form\" [ngClass]=\"{'list-code-ui': (showListCode) }\">\r\n    <div class=\"ui segment\">\r\n      <div class=\"two fields search-section\">\r\n        <div class=\"eight wide field\" *ngIf=\"showAddCode\">\r\n          <h4 class=\"ui header main_head\">Tour Code / Deal Code</h4>\r\n        </div>\r\n        <div class=\"eight wide field bookings_btn-panel\" [ngClass]=\"{'list-code': (showListCode) }\">\r\n          <button class=\"ui primary button tourCode_btn\" tabindex=\"0\" (click)=\"onClickAddCode()\" *ngIf=\"showAddCode\">\r\n            Add Tour Code\r\n          </button>\r\n          <a href=\"javascript:void(0)\" class=\"ui goto_list tourCode_btn\" tabindex=\"0\" (click)=\"onClickListCode()\"\r\n            *ngIf=\"showListCode\">\r\n            <span class=\"\">\r\n              <!-- <img src=\"../../../../../assets/icons/goto_link_arrow.svg\" class=\"goto-link\" /> -->\r\n              <i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i>\r\n              Go to List Tour Codes\r\n            </span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"result-block\" [ngClass]=\"{'list-code-block': (showListCode) }\">\r\n        <div class=\"user-table-list b2c-list-user-table\" *ngIf=\"showAddCode\">\r\n          <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n            [rowHeight]=\"'auto'\" [rows]='NewAirlineDeals'\r\n            [externalPaging]=\"true\" [count]=\"totalCount\" [offset]=\"offset\"  (page)=\"pageCallback($event)\">\r\n            <!-- <ngx-datatable-column name=\"User ID\" prop=\"created_by\">\r\n                          </ngx-datatable-column> -->\r\n            <ngx-datatable-column name=\"Tourcode Name\" prop=\"tourcode_name\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Airline\" prop=\"airline\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Trip Type\" prop=\"trip_type\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Code Type\" prop=\"code_type\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Cabin Type\" prop=\"cabin_class\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Supplier\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <div *ngFor=\"let rows of row.supplier\">\r\n                  {{rows}}\r\n                </div>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Origin\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <div *ngFor=\"let rows of row.orgin\">\r\n                  {{rows.text}}\r\n                </div>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Destination\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <div *ngFor=\"let rows of row.destination\">\r\n                  {{rows.text}}\r\n                </div>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Tour Code\" prop=\"tourcode\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"RBD\" prop=\"rbd\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <ng-container *ngIf=\"row.rbd\">\r\n                  <ng-container *ngFor=\"let rows of row.rbd; let in = index;\">\r\n                    {{rows.text}} {{((row.rbd.length - in)\r\n                                      < row.rbd.length)? ',': ''}} </ng-container>\r\n                </ng-container>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Sale Start Date\" prop=\"sale_start_date\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\">{{value}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Sale End Date\" prop=\"sale_end_date\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\">{{value}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Travel Start Date\" prop=\"travel_start_date\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\">{{value}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Travel End Date\" prop=\"travel_end_date\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\">{{value}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Created\" prop=\"created\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\">{{value}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Status\" prop=\"is_active\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\r\n                <span *ngIf=\"value == true\" (click)=\"statusToggle(row)\">\r\n                  <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>\r\n                  <!-- <i class=\"icon\">\r\n                    <img src=\"./.././../../../assets/icons/checkmark.png\"\r\n                      class=\"bookings_input__placeholder-icon cal\" />\r\n                  </i> -->\r\n                </span>\r\n                <span *ngIf=\"value == false\" (click)=\"statusToggle(row)\">\r\n                  <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                  <!-- <i class=\"icon\">\r\n                    <img src=\"./.././../../../assets/icons/cross.png\" class=\"bookings_input__placeholder-icon call\" />\r\n                  </i> -->\r\n                </span>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Edit\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template let-value=\"value\">\r\n                <span class=\"action\" title=\"Edit Details\" (click)=\"editTourCode(row)\">\r\n                  <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n                  <!-- <i class=\"icon\">\r\n                    <img src=\"./../../../../../assets/icons/edit.png\" class=\"bookings_input__placeholder-icon cal\" />\r\n                  </i> -->\r\n                </span>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Delete\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template let-value=\"value\">\r\n                <ng-container *ngIf=\"row.is_deleted == 0\">\r\n                  <span class=\"action\" title=\"Delete\">\r\n                    <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    <!-- <i class=\"icon\" (click)=\"deleteTourCode(row)\">\r\n                      <img src=\"./../../../../../assets/icons/delete-button.png\"\r\n                        class=\"bookings_input__placeholder-icon cal\" />\r\n                    </i> -->\r\n                  </span>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"row.is_deleted == 1\">\r\n                  <span class=\"action\" title=\"Delete\">\r\n                    ---\r\n                  </span>\r\n                </ng-container>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n          </ngx-datatable>\r\n        </div>\r\n        <div class=\"listCodeWrapper\" *ngIf=\"showListCode\">\r\n          <form class=\"ui form\" #Form=\"ngForm\" [formGroup]=\"newAddTourCodeForm\">\r\n            <div class=\"six fields\">\r\n              <div class=\"five wide field\">\r\n                <label>Supplier</label>\r\n                <select class=\"ui fluid search dropdown2 multiple_search\" formControlName=\"supplier\" name=\"supplier\"\r\n                  required multiple=\"\">\r\n                  <option class=\"item\" *ngFor=\"let supplier of suppliers\" value=\"{{supplier.name}}\">\r\n                    {{supplier.name}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Airline</label>\r\n                <select class=\"ui fluid search dropdown3\" formControlName=\"airline\" name=\"airline\" required>\r\n                  <option class=\"item\" *ngFor=\"let airline of airlines\" value=\"{{airline.name}}\">{{airline.name}}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Cabin Class</label>\r\n                <select class=\"ui fluid search dropdown\" formControlName=\"cabin_class\" required>\r\n                  <option class=\"item\" value=\"\">Cabin Class</option>\r\n                  <option class=\"item\" value=\"All\">All</option>\r\n                  <option class=\"item\" value=\"Economy/Coach\">Economy/Coach</option>\r\n                  <option class=\"item\" value=\"First Class\">First Class</option>\r\n                  <option class=\"item\" value=\"Bussiness\">Bussiness </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"six fields\">\r\n              <div class=\"five wide field\">\r\n                <label>Trip Type</label>\r\n                <select class=\"ui fluid search dropdown\" formControlName=\"trip_type\" required>\r\n                  <option class=\"item\" value=\"\">Trip Type</option>\r\n                  <option class=\"item\" value=\"All\">All</option>\r\n                  <option class=\"item\" value=\"One way\">One way</option>\r\n                  <option class=\"item\" value=\"Round Trip\">Round Trip</option>\r\n                  <option class=\"item\" value=\"Multi Trip\">Multi Trip</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Code Type</label>\r\n                <select class=\"ui fluid search dropdown\" formControlName=\"code_type\" required>\r\n                  <option class=\"item\" value=\"\">Code Type</option>\r\n                  <option class=\"item\" value=\"Account Code\">Account Code</option>\r\n                  <option class=\"item\" value=\"Nego Fare\">Nego Fare</option>\r\n                  <option class=\"item\" value=\"Military Fares\">Military Fares</option>\r\n                </select>\r\n              </div>\r\n              <!--if account code is selected a new field for entering code-->\r\n              <!-- <div class=\"six wide field\">\r\n                <label>Acconut Code</label>\r\n                <input type=\"number\" name=\"airline_commission\" placeholder=\"Airline Commission\"\r\n                  formControlName=\"airline_commission\" required>\r\n              </div> -->\r\n            </div>\r\n            <div class=\"six fields\">\r\n              <div class=\"five wide field\">\r\n                <label>Tourcode Apply Type</label>\r\n                <select class=\"ui fluid search dropdown\" formControlName=\"apply_type\" required>\r\n                  <option class=\"item\" value=\"\">Tour code Apply Type</option>\r\n                  <option class=\"item\" value=\"4\">Search</option>\r\n                  <option class=\"item\" value=\"3\">Ticketing</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Tourcode Name<span class=\"mandatory\">*</span></label>\r\n                <input type=\"text\" name=\"tourcode_name\" formControlName=\"tourcode_name\" placeholder=\"Tour code name\"\r\n                  required>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Tourcode<span class=\"mandatory\">*</span></label>\r\n                <input type=\"text\" name=\"tourcode\" placeholder=\"Tour code\" formControlName=\"tourcode\" required>\r\n              </div>\r\n            </div>\r\n            <!-- <h3>You can add multiple tourcodes from here on clicking add more button</h3> -->\r\n            <div class=\"ui segment detail-segment\">\r\n              <div class=\"six fields\">\r\n                <div class=\"five wide field\">\r\n                  <label>\r\n                    Origin Airport\r\n                    <i class=\"fa fa-exclamation-circle tooltip\">\r\n                      <span class=\"tooltiptext\">\r\n                        Comma-separated list of airport code e.g. DXB, JED, LHR (Upper Case Only). Default ALL will be\r\n                        selected.\r\n                      </span>\r\n                    </i>\r\n                  </label>\r\n                  <select class=\"ui fluid search dropdown4 multiple_search\" formControlName=\"orgin\" required\r\n                    multiple=\"\">\r\n                    <option class=\"item\" *ngFor=\"let dest of destinations\" value=\"{{dest.AirportCode}}\">\r\n                      {{dest.AirportCode}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"five wide field\">\r\n                  <label>\r\n                    Destination Airport\r\n                    <i class=\"fa fa-exclamation-circle tooltip\">\r\n                      <span class=\"tooltiptext\">\r\n                        Comma-separated list of airport code e.g. DXB, JED, LHR (Upper Case Only). Default ALL will be\r\n                        selected.\r\n                      </span>\r\n                    </i>\r\n                  </label>\r\n                  <select class=\"ui fluid search dropdown4 multiple_search\" formControlName=\"destination\" required\r\n                    multiple=\"\">\r\n                    <option class=\"item\" *ngFor=\"let dest of destinations\" value=\"{{dest.AirportCode}}\">\r\n                      {{dest.AirportCode}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"six fields\">\r\n                <div class=\"five wide field\">\r\n                  <label>\r\n                    RBD\r\n                    <i class=\"fa fa-exclamation-circle tooltip\">\r\n                      <span class=\"tooltiptext\">\r\n                        Comma-separated list of class of services e.g. N or N , Q , K (Upper Case Only). Default ALL\r\n                        will be selected.\r\n                      </span>\r\n                    </i>\r\n                  </label>\r\n                  <!-- <input type=\"text\" name=\"rbd\" formControlName=\"rbd\" placeholder=\"RBD\"> -->\r\n                  <select name=\"rbd\" multiple=\"\" formControlName=\"rbd\"\r\n                    class=\"ui search fluid dropdown1 multiple_search\">\r\n                    <!-- <option>RBD</option> -->\r\n                    <option class=\"item\" *ngFor=\"let rbd of rbdArrayList\" value=\"{{rbd}}\">\r\n                      {{rbd}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"six fields\">\r\n                <div class=\"five wide field\">\r\n                  <label>Airline Commission</label>\r\n                  <input type=\"number\" name=\"airline_commission\" placeholder=\"Airline Commission\"\r\n                    formControlName=\"airline_commission\" required>\r\n                </div>\r\n                <div class=\"five wide field\">\r\n                  <label>Commission Mode</label>\r\n                  <select class=\"ui fluid selection dropdown\" formControlName=\"tour_commission\">\r\n                    <option value=\"\" selected hidden disabled>Commission Mode</option>\r\n                    <option value=\"by_percentage\">Percentage</option>\r\n                    <option value=\"by_amount\">Amount</option>\r\n                  </select>\r\n                  <!-- <input type=\"number\" name=\"tour_commission\" placeholder=\"Commission Mode\" formControlName=\"tour_commission\" required> -->\r\n                </div>\r\n                <div class=\"five wide field\">\r\n                  <label>Shared Commission (in %)</label>\r\n                  <input type=\"number\" name=\"sharedCommision\" formControlName=\"shared_commission\"\r\n                    placeholder=\"Shared Commission (%)\">\r\n                </div>\r\n              </div>\r\n              <div class=\"six fields\">\r\n                <label>Sale Validity</label>\r\n              </div>\r\n              <div class=\"six fields\">\r\n                <div class=\"five wide field bookings_pickers \">\r\n                  <label>From</label>\r\n                  <div class=\"ui left icon input \">\r\n                    <input type=\"text\" placeholder=\"sale start date\" formControlName=\"sale_start_date\"\r\n                      name=\"sale_start_date\" value=\"\" required />\r\n                    <i class=\"icon\">\r\n                      <!-- <img src=\"./../../../../assets/icons/calendar.svg\"\r\n                        class=\"bookings_input__placeholder-icon calender\" /> -->\r\n                        <i class=\"fa fa-calendar-o bookings_input__placeholder-icon cal\" aria-hidden=\"true\"></i>\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"five wide field bookings_pickers \">\r\n                  <label>To</label>\r\n                  <div class=\"ui left icon input \">\r\n                    <input type=\"text\" placeholder=\"sale end date\" formControlName=\"sale_end_date\" name=\"sale_end_date\"\r\n                      value=\"\" required />\r\n                    <i class=\"icon\">\r\n                      <!-- <img src=\"./../../../../assets/icons/calendar.svg\"\r\n                        class=\"bookings_input__placeholder-icon calender\" /> -->\r\n                        <i class=\"fa fa-calendar-o bookings_input__placeholder-icon cal\" aria-hidden=\"true\"></i>\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"six fields\">\r\n                <label>Travel Validity</label>\r\n              </div>\r\n              <div class=\"six fields\">\r\n                <div class=\"five wide field bookings_pickers \">\r\n                  <label>From</label>\r\n                  <div class=\"ui left icon input\">\r\n                    <input type=\"text\" placeholder=\"Travel Start date\" formControlName=\"travel_start_date\"\r\n                      name=\"travel_start_date\" value=\"\" required />\r\n                    <i class=\"icon\">\r\n                      <!-- <img src=\"./../../../../assets/icons/calendar.svg\"\r\n                        class=\"bookings_input__placeholder-icon calender\" /> -->\r\n                    <i class=\"fa fa-calendar-o bookings_input__placeholder-icon cal\" aria-hidden=\"true\"></i>\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"five wide field bookings_pickers \">\r\n                  <label>To</label>\r\n                  <div class=\"ui left icon input \">\r\n                    <input type=\"text\" placeholder=\"travel end date\" formControlName=\"travel_end_date\"\r\n                      name=\"travel_end_date\" value=\"\" required />\r\n                    <i class=\"icon\">\r\n                      <!-- <img src=\"./../../../../assets/icons/calendar.svg\"\r\n                        class=\"bookings_input__placeholder-icon calender\" /> -->\r\n                    <i class=\"fa fa-calendar-o bookings_input__placeholder-icon cal\" aria-hidden=\"true\"></i>\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n                <!--future use-->\r\n                <!-- <div class=\"three wide field\">\r\n                                  <button class=\"ui button tourCode_btn fluid\" (click)=\"addMultipleTour()\"\r\n                                  *ngIf=\"i==(newAddTourCodeForm.get('codes')['controls'].length-1)\">\r\n                                  <span class=\"tourCode_text\">Add</span>\r\n                                  </button>\r\n                                  <button class=\"ui button tourCode_btn fluid\" *ngIf=\"i!=0\">\r\n                                  <span class=\"tourCode_text\">Edit</span>\r\n                                  </button>\r\n                                  <button class=\"ui button tourCode_btn fluid\" *ngIf=\"i!=0\" tabindex=\"0\" (click)=\"removeTour(i)\">\r\n                                  <span class=\"tourCode_text\">Del</span>\r\n                                  </button>\r\n                              </div> -->\r\n                <!--future use-->\r\n              </div>\r\n            </div>\r\n            <div class=\"bookings_btn-panel save-btn-block\" *ngIf=\"showListCode\">\r\n              <button class=\"ui primary button tourCode_btn fluid\" *ngIf=\"showSaveBtn\" (click)=\"saveTourCode()\">\r\n                <span class=\"tourCode_text\">Save</span>\r\n              </button>\r\n              <button class=\"ui primary button tourCode_btn fluid\" *ngIf=\"!showSaveBtn\" (click)=\"updateTourCode()\">\r\n                <span class=\"tourCode_text\">Update</span>\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/layout/setup-configuration/airline-deals/airline-deals-routing.module.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/layout/setup-configuration/airline-deals/airline-deals-routing.module.ts ***!
    \******************************************************************************************/

  /*! exports provided: AirlineDealsRoutingModule */

  /***/
  function srcAppLayoutSetupConfigurationAirlineDealsAirlineDealsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AirlineDealsRoutingModule", function () {
      return AirlineDealsRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _airline_deals_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./airline-deals.component */
    "./src/app/layout/setup-configuration/airline-deals/airline-deals.component.ts");
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
      component: _airline_deals_component__WEBPACK_IMPORTED_MODULE_1__["AirlineDealsComponent"]
    }];

    var AirlineDealsRoutingModule = function AirlineDealsRoutingModule() {
      _classCallCheck(this, AirlineDealsRoutingModule);
    };

    AirlineDealsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], AirlineDealsRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/setup-configuration/airline-deals/airline-deals.component.scss":
  /*!***************************************************************************************!*\
    !*** ./src/app/layout/setup-configuration/airline-deals/airline-deals.component.scss ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSetupConfigurationAirlineDealsAirlineDealsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ui.top.attached.tabular.menu {\n  margin: 24px 24px !important;\n  padding: 0px !important;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\n.air_title {\n  margin: 0;\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n}\n\n.ui.tabular.menu .active.item span {\n  font-weight: 600 !important;\n}\n\nh3 {\n  margin-top: 24px !important;\n}\n\n.outer .air-title {\n  margin-left: 24px;\n  font-style: normal;\n  font-weight: 400 !important;\n  font-size: 20px;\n  line-height: 23px;\n  color: #4F4F4F;\n}\n\n.align_table {\n  margin: 24px !important;\n  padding: 24px !important;\n}\n\n@media (max-width: 1440px) {\n  .outer .air-title {\n    margin-left: 24px;\n  }\n}\n\n@media (max-width: 1280px) {\n  .outer .air-title {\n    margin-left: 20px;\n  }\n}\n\n@media (max-width: 580px) {\n  .ui.top.attached.tabular.menu {\n    display: block;\n    width: auto !important;\n  }\n  .ui.top.attached.tabular.menu .item {\n    padding: 12px 0px;\n  }\n  .ui.top.attached.tabular.menu .search-section .eight.wide.field .main_head {\n    margin-bottom: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vYWlybGluZS1kZWFscy9FOlxcQmVsYWxcXHByb2plY3RzXFxwcm9kdWN0aW9uLWJ1aWxkXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHNldHVwLWNvbmZpZ3VyYXRpb25cXGFpcmxpbmUtZGVhbHNcXGFpcmxpbmUtZGVhbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zZXR1cC1jb25maWd1cmF0aW9uL2FpcmxpbmUtZGVhbHMvYWlybGluZS1kZWFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNPLDRCQUFBO0VBQ0EsdUJBQUE7QUNDUDs7QURFQTtFQUNJLGtDQUFBO0VBQ0Esd0NBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQ0NKOztBREVBO0VBQ0ksNENBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSwyQkFBQTtBQ0NKOztBRElJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0RSOztBREtBO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtBQ0ZKOztBREtBO0VBQ0k7SUFDSSxpQkFBQTtFQ0ZOO0FBQ0Y7O0FES0E7RUFDSTtJQUNJLGlCQUFBO0VDSE47QUFDRjs7QURNQTtFQUNJO0lBQ0ksY0FBQTtJQUNBLHNCQUFBO0VDSk47RURLTTtJQUNJLGlCQUFBO0VDSFY7RURLTTtJQUNJLG1CQUFBO0VDSFY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zZXR1cC1jb25maWd1cmF0aW9uL2FpcmxpbmUtZGVhbHMvYWlybGluZS1kZWFscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcclxuICAgICAgIG1hcmdpbjogMjRweCAyNHB4ICAhaW1wb3J0YW50O1xyXG4gICAgICAgcGFkZGluZzowcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLnRvcC5hdHRhY2hlZC5tZW51Pi5pdGVtIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yODU3MTQyOXJlbSAwIDAgMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51aS5ib3R0b20uYXR0YWNoZWQuYWN0aXZlLnRhYi5zZWdtZW50IHtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE3cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTdweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxN3B4O1xyXG59XHJcblxyXG4udGFiLnNlZ21lbnQge1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi5haXJfdGl0bGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi51aS50YWJ1bGFyLm1lbnUgLmFjdGl2ZS5pdGVtIHNwYW4ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vdXRlciB7XHJcbiAgICAvLyBtYXJnaW46IDBweCAyMHB4IDBweCAxNXB4O1xyXG4gICAgLmFpci10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgY29sb3I6IzRGNEY0RjtcclxuICAgIH1cclxufVxyXG5cclxuLmFsaWduX3RhYmxle1xyXG4gICAgbWFyZ2luOjI0cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDI0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgLm91dGVyIC5haXItdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAub3V0ZXIgLmFpci10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcbn0gXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcclxuICAgIC51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIC5pdGVtIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTJweCAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWFyY2gtc2VjdGlvbiAuZWlnaHQud2lkZS5maWVsZCAubWFpbl9oZWFkIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIudWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XG4gIG1hcmdpbjogMjRweCAyNHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udWkudG9wLmF0dGFjaGVkLm1lbnUgPiAuaXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjg1NzE0MjlyZW0gMCAwIDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi51aS5ib3R0b20uYXR0YWNoZWQuYWN0aXZlLnRhYi5zZWdtZW50IHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxN3B4O1xufVxuXG4udGFiLnNlZ21lbnQge1xuICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLmFpcl90aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi51aS50YWJ1bGFyLm1lbnUgLmFjdGl2ZS5pdGVtIHNwYW4ge1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG59XG5cbmgzIHtcbiAgbWFyZ2luLXRvcDogMjRweCAhaW1wb3J0YW50O1xufVxuXG4ub3V0ZXIgLmFpci10aXRsZSB7XG4gIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgY29sb3I6ICM0RjRGNEY7XG59XG5cbi5hbGlnbl90YWJsZSB7XG4gIG1hcmdpbjogMjRweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLm91dGVyIC5haXItdGl0bGUge1xuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5vdXRlciAuYWlyLXRpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICB9XG4gIC51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IC5pdGVtIHtcbiAgICBwYWRkaW5nOiAxMnB4IDBweDtcbiAgfVxuICAudWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSAuc2VhcmNoLXNlY3Rpb24gLmVpZ2h0LndpZGUuZmllbGQgLm1haW5faGVhZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/setup-configuration/airline-deals/airline-deals.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/layout/setup-configuration/airline-deals/airline-deals.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: AirlineDealsComponent */

  /***/
  function srcAppLayoutSetupConfigurationAirlineDealsAirlineDealsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AirlineDealsComponent", function () {
      return AirlineDealsComponent;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../../environments/environment */
    "./src/environments/environment.ts");

    var AirlineDealsComponent = /*#__PURE__*/function () {
      function AirlineDealsComponent() {
        _classCallCheck(this, AirlineDealsComponent);

        this.activeTab = true;
        this.tabName = "first-tab";
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL;
      }

      _createClass(AirlineDealsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "activateTab",
        value: function activateTab(name) {
          switch (name) {
            case 'first-tab':
              this.activeTab = true;
              this.tabName = name;
              break;

            case 'second-tab':
              this.activeTab = true;
              this.tabName = name;
              break;

            case 'third-tab':
              this.activeTab = true;
              this.tabName = name;
              break;

            default:
              this.activeTab = true;
              this.tabName = name;
              break;
          }
        }
      }]);

      return AirlineDealsComponent;
    }();

    AirlineDealsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-airline-deals',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./airline-deals.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/airline-deals/airline-deals.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./airline-deals.component.scss */
      "./src/app/layout/setup-configuration/airline-deals/airline-deals.component.scss"))["default"]]
    })], AirlineDealsComponent);
    /***/
  },

  /***/
  "./src/app/layout/setup-configuration/airline-deals/airline-deals.module.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/layout/setup-configuration/airline-deals/airline-deals.module.ts ***!
    \**********************************************************************************/

  /*! exports provided: AirlineDealsModule */

  /***/
  function srcAppLayoutSetupConfigurationAirlineDealsAirlineDealsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AirlineDealsModule", function () {
      return AirlineDealsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _airline_deals_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./airline-deals.component */
    "./src/app/layout/setup-configuration/airline-deals/airline-deals.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var _airline_deals_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./airline-deals-routing.module */
    "./src/app/layout/setup-configuration/airline-deals/airline-deals-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _tourcode_tourcode_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tourcode/tourcode.component */
    "./src/app/layout/setup-configuration/airline-deals/tourcode/tourcode.component.ts");
    /* harmony import */


    var _commission_commission_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./commission/commission.component */
    "./src/app/layout/setup-configuration/airline-deals/commission/commission.component.ts");
    /* harmony import */


    var src_app_access_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/access.module */
    "./src/app/access.module.ts");
    /* harmony import */


    var _airline_routes_airline_routes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./airline-routes/airline-routes.component */
    "./src/app/layout/setup-configuration/airline-deals/airline-routes/airline-routes.component.ts");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");

    var AirlineDealsModule = function AirlineDealsModule() {
      _classCallCheck(this, AirlineDealsModule);
    };

    AirlineDealsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_airline_deals_component__WEBPACK_IMPORTED_MODULE_1__["AirlineDealsComponent"], _tourcode_tourcode_component__WEBPACK_IMPORTED_MODULE_7__["TourcodeComponent"], _commission_commission_component__WEBPACK_IMPORTED_MODULE_8__["CommissionComponent"], _airline_routes_airline_routes_component__WEBPACK_IMPORTED_MODULE_10__["AirlineRoutesComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _airline_deals_routing_module__WEBPACK_IMPORTED_MODULE_5__["AirlineDealsRoutingModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], src_app_access_module__WEBPACK_IMPORTED_MODULE_9__["ApplicationAccess"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatNativeDateModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_17__["MatAutocompleteModule"]],
      providers: []
    })], AirlineDealsModule);
    /***/
  },

  /***/
  "./src/app/layout/setup-configuration/airline-deals/airline-routes/airline-routes.component.scss":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/layout/setup-configuration/airline-deals/airline-routes/airline-routes.component.scss ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSetupConfigurationAirlineDealsAirlineRoutesAirlineRoutesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".outer {\n  margin: 0px 20px 0px 15px;\n}\n\n.airline_title {\n  margin: 0;\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #E0E0E0;\n}\n\n.tourCode_text,\n.addTogg_text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.goto_list {\n  background-color: transparent;\n  box-shadow: none;\n  border: none;\n  color: #181B20;\n  font-size: 14px;\n}\n\n.goto_list span {\n  color: #181B20;\n}\n\n.goto-link {\n  position: relative;\n  top: 8px;\n}\n\n.corporate_input__placeholder-icon {\n  position: relative;\n  width: 18px;\n  bottom: 28px;\n  left: 9px;\n}\n\n.b2c-list-user-table {\n  overflow-x: auto;\n}\n\n.b2c-list-user-table .ui.table {\n  width: calc(100% + 540px);\n}\n\n.date-field {\n  text-indent: 17px;\n}\n\n.ui.form .search-section {\n  padding: 0px;\n  margin: 0px 24px;\n}\n\n.ui.form .search-section .eight.wide.field {\n  padding: 0px;\n  margin-bottom: 0px;\n}\n\n.ui.form .search-section .list-code {\n  margin-left: 0px;\n}\n\n.icon {\n  opacity: 1;\n  z-index: 100;\n}\n\n.icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.icon .bookings_input__placeholder-icon.cal {\n  width: 16px;\n  margin-top: 0px;\n}\n\n.icon .bookings_input__placeholder-icon.call {\n  width: 10px;\n  margin-top: 0px;\n}\n\n.icon .bookings_input__placeholder-icon.calender {\n  width: 18px;\n  margin-top: 10px;\n}\n\n.bookings_pickers .input {\n  z-index: 0;\n}\n\n.bookings_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n\n.bookings_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n\n.bookings_pickers .input .search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.bookings_pickers .input .search.dropdown .search {\n  margin-left: 42px !important;\n}\n\n.bookings_pickers .input .search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n\n.search-section {\n  padding: 0px 30px;\n  text-align: right;\n}\n\n.search-section .eight.wide.field .main_head {\n  text-align: left;\n  font-weight: 500 !important;\n  font-size: 13px;\n  line-height: 15px;\n  color: #1B1F26;\n}\n\n.search-section .list-code {\n  text-align: left;\n  margin: 0 auto 20px;\n  padding-left: 0px;\n}\n\n.listCodeWrapper {\n  padding: 0px;\n}\n\n.listCodeWrapper > .ui.form {\n  padding: 20px 8px;\n}\n\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n\n.ui.form .three.wide.field,\n.ui.form .field > .checkbox-field,\n.ui.form .five.wide.field,\n.ui.form .six.wide.field,\n.ui.form .eight.wide.field,\n.four.wide.field {\n  margin-bottom: 12px;\n}\n\n.detail-segment {\n  padding: 0;\n  margin-top: 0;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 160px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 10px;\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: 0px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.list-code-block {\n  margin: 24px;\n  padding-bottom: 48px;\n}\n\n.ui.form .eight.wide.field.list-code {\n  width: 1100px !important;\n}\n\n.listCodeWrapper .ui.form {\n  padding: 12px 0px 0px !important;\n}\n\n.save-btn-block button {\n  float: right;\n}\n\n.ui.form.list-code-ui .search-section {\n  margin-bottom: 24px;\n}\n\n.example-chip-list {\n  width: 100%;\n}\n\n@media (max-width: 1440px) {\n  .outer .air-title {\n    margin-left: 24px;\n  }\n\n  .ui.form .tourCode_btn {\n    margin-right: 0px;\n  }\n  .ui.form .bookings_btn-panel.list-code {\n    padding-left: 0px;\n  }\n}\n\n@media (max-width: 1280px) {\n  .outer .air-title {\n    margin-left: 20px;\n  }\n\n  .result-block {\n    width: auto;\n    margin: 20px;\n  }\n\n  .listCodeWrapper {\n    padding: 0px 10px;\n  }\n}\n\n@media (max-width: 860px) and (min-width: 767px) {\n  .ui.form .list-head-block .five.wide.field {\n    width: 33.25% !important;\n  }\n  .ui.form .ui.segment.detail-segment .five.wide.field, .ui.form .ui.segment.detail-segment .six.wide.field {\n    width: 50% !important;\n  }\n  .ui.form .list-code-block {\n    padding-bottom: 40px;\n  }\n\n  .ui.attached.segment.tabContent-block .ui.segment form {\n    margin-bottom: 0 !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .ui.container {\n    margin: 0px !important;\n  }\n\n  .search-section .eight.wide.field .main_head {\n    margin-bottom: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vYWlybGluZS1kZWFscy9haXJsaW5lLXJvdXRlcy9FOlxcQmVsYWxcXHByb2plY3RzXFxwcm9kdWN0aW9uLWJ1aWxkXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHNldHVwLWNvbmZpZ3VyYXRpb25cXGFpcmxpbmUtZGVhbHNcXGFpcmxpbmUtcm91dGVzXFxhaXJsaW5lLXJvdXRlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vYWlybGluZS1kZWFscy9haXJsaW5lLXJvdXRlcy9haXJsaW5lLXJvdXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0NBQUE7RUFDQSx3Q0FBQTtBQ0NKOztBREVBO0VBQ0ksK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSw0Q0FBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7O0VBRUksV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREFJO0VBQ0ksY0FBQTtBQ0VSOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURBSTtFQUNJLHlCQUFBO0FDRVI7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBRElJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDRFI7O0FERVE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNBWjs7QURFUTtFQUNJLGdCQUFBO0FDQVo7O0FES0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREdJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNEUjs7QURFUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDQVo7O0FERVE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0FaOztBREVRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDQVo7O0FES0E7RUFDSSxVQUFBO0FDRko7O0FER0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDRFI7O0FER0k7RUFDSSx3QkFBQTtFQUNBLDBDQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQ0RSOztBRGVJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FDYlI7O0FEY1E7RUFDSSw0QkFBQTtBQ1paOztBRGNRO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7QUNaWjs7QURpQkE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDZEo7O0FEZUk7RUFDSSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ2JSOztBRGVJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDYlI7O0FEaUJBO0VBQ0ksWUFBQTtBQ2RKOztBRGVJO0VBQ0ksaUJBQUE7QUNiUjs7QURpQkE7RUFDSSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNkSjs7QURpQkE7Ozs7OztFQU1JLG1CQUFBO0FDZEo7O0FEaUJBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7QUNkSjs7QURpQkE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FDZEo7O0FEa0JBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDZko7O0FEa0JBO0VBQ0ksbUJBQUE7QUNmSjs7QURrQkE7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7QUNmSjs7QURrQkE7RUFDSSx3QkFBQTtBQ2ZKOztBRGtCQTtFQUNJLGdDQUFBO0FDZko7O0FEdUJJO0VBQ0ksWUFBQTtBQ3BCUjs7QUR5Qkk7RUFDSSxtQkFBQTtBQ3RCUjs7QUQwQkE7RUFDSSxXQUFBO0FDdkJKOztBRDBCQTtFQUNJO0lBQ0ksaUJBQUE7RUN2Qk47O0VEMEJNO0lBQ0ksaUJBQUE7RUN2QlY7RUR5Qk07SUFDSSxpQkFBQTtFQ3ZCVjtBQUNGOztBRDJCQTtFQUNJO0lBQ0ksaUJBQUE7RUN6Qk47O0VEMkJFO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUN4Qk47O0VEMEJFO0lBQ0ksaUJBQUE7RUN2Qk47QUFDRjs7QUQwQkE7RUFHWTtJQUNJLHdCQUFBO0VDMUJkO0VEOEJVO0lBQ0kscUJBQUE7RUM1QmQ7RUQrQk07SUFDSSxvQkFBQTtFQzdCVjs7RURnQ0U7SUFDSSwyQkFBQTtFQzdCTjtBQUNGOztBRGdDQTtFQUNJO0lBQ0ksc0JBQUE7RUM5Qk47O0VEaUNNO0lBQ0ksbUJBQUE7RUM5QlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zZXR1cC1jb25maWd1cmF0aW9uL2FpcmxpbmUtZGVhbHMvYWlybGluZS1yb3V0ZXMvYWlybGluZS1yb3V0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXIge1xyXG4gICAgbWFyZ2luOiAwcHggMjBweCAwcHggMTVweDtcclxufVxyXG5cclxuLmFpcmxpbmVfdGl0bGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQubWVudT4uaXRlbSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjg1NzE0MjlyZW0gMCAwIDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udWkuYm90dG9tLmF0dGFjaGVkLmFjdGl2ZS50YWIuc2VnbWVudCB7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxN3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTdweDtcclxufVxyXG5cclxuLnRhYi5zZWdtZW50IHtcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNFMEUwRTA7XHJcbn1cclxuXHJcbi50b3VyQ29kZV90ZXh0LFxyXG4uYWRkVG9nZ190ZXh0IHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ290b19saXN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjMTgxQjIwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICMxODFCMjA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5nb3RvLWxpbmsge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBib3R0b206IDI4cHg7XHJcbiAgICBsZWZ0OiA5cHg7XHJcbn1cclxuXHJcbi5iMmMtbGlzdC11c2VyLXRhYmxlIHtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAudWkudGFibGUge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyA1NDBweCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kYXRlLWZpZWxkIHtcclxuICAgIHRleHQtaW5kZW50OiAxN3B4O1xyXG59XHJcblxyXG4udWkuZm9ybSB7XHJcbiAgICAvLyBwYWRkaW5nOiAyNHB4IDBweDtcclxuICAgIC5zZWFyY2gtc2VjdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDI0cHg7XHJcbiAgICAgICAgLmVpZ2h0LndpZGUuZmllbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpc3QtY29kZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgJi5jYWwge1xyXG4gICAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmNhbGwge1xyXG4gICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmNhbGVuZGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQge1xyXG4gICAgei1pbmRleDogMDtcclxuICAgICYuYm9va2luZ3NfZGF0ZXBpY2tlciB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEzOHB4XHJcbiAgICB9XHJcbiAgICAudWkuYmFzaWMuZmxvYXRpbmcuYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMTUyLCAxNTIsIDE1MiwgMC42KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTFweDtcclxuICAgIH1cclxuICAgIC8vIC5pY29uIHtcclxuICAgIC8vICAgb3BhY2l0eTogMTtcclxuICAgIC8vICAgei1pbmRleDowO1xyXG4gICAgLy8gICAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgLy8gICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgLy8gICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIC8vICAgICAmLmNhbCB7XHJcbiAgICAvLyAgICAgICB3aWR0aDogMThweDtcclxuICAgIC8vICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbiAgICAuc2VhcmNoLmRyb3Bkb3duIHtcclxuICAgICAgICB3aWR0aDogMjE4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgLnNlYXJjaCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZWZhdWx0LnRleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMCAwIDM4cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAwcHggMzBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgLmVpZ2h0LndpZGUuZmllbGQgLm1haW5faGVhZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMUIxRjI2O1xyXG4gICAgfVxyXG4gICAgLmxpc3QtY29kZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubGlzdENvZGVXcmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgID4udWkuZm9ybSB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCA4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS5mb3JtIC5maWVsZD5sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICBjb2xvcjogIzE4MUIyMDtcclxuICAgIG1hcmdpbjogMHB4IDBweCA4cHg7XHJcbn1cclxuXHJcbi51aS5mb3JtIC50aHJlZS53aWRlLmZpZWxkLFxyXG4udWkuZm9ybSAuZmllbGQ+LmNoZWNrYm94LWZpZWxkLFxyXG4udWkuZm9ybSAuZml2ZS53aWRlLmZpZWxkLFxyXG4udWkuZm9ybSAuc2l4LndpZGUuZmllbGQsXHJcbi51aS5mb3JtIC5laWdodC53aWRlLmZpZWxkLFxyXG4uZm91ci53aWRlLmZpZWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi5kZXRhaWwtc2VnbWVudCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLnRvb2x0aXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLy8gZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3R0b206IDEwMCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLmxpc3QtY29kZS1ibG9jayB7XHJcbiAgICBtYXJnaW46IDI0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNDhweDtcclxufVxyXG5cclxuLnVpLmZvcm0gLmVpZ2h0LndpZGUuZmllbGQubGlzdC1jb2RlIHtcclxuICAgIHdpZHRoOiAxMTAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxpc3RDb2RlV3JhcHBlciAudWkuZm9ybSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDBweCAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlc3VsdC1ibG9jayB7XHJcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogNzJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2F2ZS1idG4tYmxvY2sge1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS5mb3JtLmxpc3QtY29kZS11aSB7XHJcbiAgICAuc2VhcmNoLXNlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5leGFtcGxlLWNoaXAtbGlzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgLm91dGVyIC5haXItdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG4gICAgfVxyXG4gICAgLnVpLmZvcm0ge1xyXG4gICAgICAgIC50b3VyQ29kZV9idG4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDsgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuYm9va2luZ3NfYnRuLXBhbmVsLmxpc3QtY29kZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgLm91dGVyIC5haXItdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnJlc3VsdC1ibG9jayB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmxpc3RDb2RlV3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZzowcHggMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDg2MHB4KSBhbmQgKG1pbi13aWR0aDogNzY3cHgpIHtcclxuICAgIC51aS5mb3JtIHtcclxuICAgICAgICAubGlzdC1oZWFkLWJsb2NrIHtcclxuICAgICAgICAgICAgLmZpdmUud2lkZS5maWVsZCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzMuMjUlIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudWkuc2VnbWVudC5kZXRhaWwtc2VnbWVudCB7XHJcbiAgICAgICAgICAgIC5maXZlLndpZGUuZmllbGQsIC5zaXgud2lkZS5maWVsZCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpc3QtY29kZS1ibG9jayB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC51aS5hdHRhY2hlZC5zZWdtZW50LnRhYkNvbnRlbnQtYmxvY2sgLnVpLnNlZ21lbnQgZm9ybSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC51aS5jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLXNlY3Rpb24ge1xyXG4gICAgICAgIC5laWdodC53aWRlLmZpZWxkIC5tYWluX2hlYWQge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5vdXRlciB7XG4gIG1hcmdpbjogMHB4IDIwcHggMHB4IDE1cHg7XG59XG5cbi5haXJsaW5lX3RpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cblxuLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4udWkudG9wLmF0dGFjaGVkLm1lbnUgPiAuaXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjg1NzE0MjlyZW0gMCAwIDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi51aS5ib3R0b20uYXR0YWNoZWQuYWN0aXZlLnRhYi5zZWdtZW50IHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxN3B4O1xufVxuXG4udGFiLnNlZ21lbnQge1xuICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuaHIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjRTBFMEUwO1xufVxuXG4udG91ckNvZGVfdGV4dCxcbi5hZGRUb2dnX3RleHQge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdvdG9fbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMTgxQjIwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZ290b19saXN0IHNwYW4ge1xuICBjb2xvcjogIzE4MUIyMDtcbn1cblxuLmdvdG8tbGluayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA4cHg7XG59XG5cbi5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxOHB4O1xuICBib3R0b206IDI4cHg7XG4gIGxlZnQ6IDlweDtcbn1cblxuLmIyYy1saXN0LXVzZXItdGFibGUge1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuLmIyYy1saXN0LXVzZXItdGFibGUgLnVpLnRhYmxlIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDU0MHB4KTtcbn1cblxuLmRhdGUtZmllbGQge1xuICB0ZXh0LWluZGVudDogMTdweDtcbn1cblxuLnVpLmZvcm0gLnNlYXJjaC1zZWN0aW9uIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweCAyNHB4O1xufVxuLnVpLmZvcm0gLnNlYXJjaC1zZWN0aW9uIC5laWdodC53aWRlLmZpZWxkIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4udWkuZm9ybSAuc2VhcmNoLXNlY3Rpb24gLmxpc3QtY29kZSB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5pY29uIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTAwO1xufVxuLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcbiAgd2lkdGg6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbi5jYWwge1xuICB3aWR0aDogMTZweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbGwge1xuICB3aWR0aDogMTBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbGVuZGVyIHtcbiAgd2lkdGg6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCB7XG4gIHotaW5kZXg6IDA7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQuYm9va2luZ3NfZGF0ZXBpY2tlciB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIG1heC13aWR0aDogMTM4cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnVpLmJhc2ljLmZsb2F0aW5nLmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYmEoMTUyLCAxNTIsIDE1MiwgMC42KSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5zZWFyY2guZHJvcGRvd24ge1xuICB3aWR0aDogMjE4cHg7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnNlYXJjaC5kcm9wZG93biAuc2VhcmNoIHtcbiAgbWFyZ2luLWxlZnQ6IDQycHggIWltcG9ydGFudDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuc2VhcmNoLmRyb3Bkb3duIC5kZWZhdWx0LnRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHggMCAwIDM4cHggIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaC1zZWN0aW9uIHtcbiAgcGFkZGluZzogMHB4IDMwcHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLnNlYXJjaC1zZWN0aW9uIC5laWdodC53aWRlLmZpZWxkIC5tYWluX2hlYWQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIGNvbG9yOiAjMUIxRjI2O1xufVxuLnNlYXJjaC1zZWN0aW9uIC5saXN0LWNvZGUge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDAgYXV0byAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuLmxpc3RDb2RlV3JhcHBlciB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5saXN0Q29kZVdyYXBwZXIgPiAudWkuZm9ybSB7XG4gIHBhZGRpbmc6IDIwcHggOHB4O1xufVxuXG4udWkuZm9ybSAuZmllbGQgPiBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIGNvbG9yOiAjMTgxQjIwO1xuICBtYXJnaW46IDBweCAwcHggOHB4O1xufVxuXG4udWkuZm9ybSAudGhyZWUud2lkZS5maWVsZCxcbi51aS5mb3JtIC5maWVsZCA+IC5jaGVja2JveC1maWVsZCxcbi51aS5mb3JtIC5maXZlLndpZGUuZmllbGQsXG4udWkuZm9ybSAuc2l4LndpZGUuZmllbGQsXG4udWkuZm9ybSAuZWlnaHQud2lkZS5maWVsZCxcbi5mb3VyLndpZGUuZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4uZGV0YWlsLXNlZ21lbnQge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpZHRoOiAxNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGJvdHRvbTogMTAwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4ubGlzdC1jb2RlLWJsb2NrIHtcbiAgbWFyZ2luOiAyNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNDhweDtcbn1cblxuLnVpLmZvcm0gLmVpZ2h0LndpZGUuZmllbGQubGlzdC1jb2RlIHtcbiAgd2lkdGg6IDExMDBweCAhaW1wb3J0YW50O1xufVxuXG4ubGlzdENvZGVXcmFwcGVyIC51aS5mb3JtIHtcbiAgcGFkZGluZzogMTJweCAwcHggMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zYXZlLWJ0bi1ibG9jayBidXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi51aS5mb3JtLmxpc3QtY29kZS11aSAuc2VhcmNoLXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4uZXhhbXBsZS1jaGlwLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAub3V0ZXIgLmFpci10aXRsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIH1cblxuICAudWkuZm9ybSAudG91ckNvZGVfYnRuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgfVxuICAudWkuZm9ybSAuYm9va2luZ3NfYnRuLXBhbmVsLmxpc3QtY29kZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgLm91dGVyIC5haXItdGl0bGUge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG5cbiAgLnJlc3VsdC1ibG9jayB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiAyMHB4O1xuICB9XG5cbiAgLmxpc3RDb2RlV3JhcHBlciB7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4NjBweCkgYW5kIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gIC51aS5mb3JtIC5saXN0LWhlYWQtYmxvY2sgLmZpdmUud2lkZS5maWVsZCB7XG4gICAgd2lkdGg6IDMzLjI1JSAhaW1wb3J0YW50O1xuICB9XG4gIC51aS5mb3JtIC51aS5zZWdtZW50LmRldGFpbC1zZWdtZW50IC5maXZlLndpZGUuZmllbGQsIC51aS5mb3JtIC51aS5zZWdtZW50LmRldGFpbC1zZWdtZW50IC5zaXgud2lkZS5maWVsZCB7XG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICB9XG4gIC51aS5mb3JtIC5saXN0LWNvZGUtYmxvY2sge1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICB9XG5cbiAgLnVpLmF0dGFjaGVkLnNlZ21lbnQudGFiQ29udGVudC1ibG9jayAudWkuc2VnbWVudCBmb3JtIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAudWkuY29udGFpbmVyIHtcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNlYXJjaC1zZWN0aW9uIC5laWdodC53aWRlLmZpZWxkIC5tYWluX2hlYWQge1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/setup-configuration/airline-deals/airline-routes/airline-routes.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/layout/setup-configuration/airline-deals/airline-routes/airline-routes.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: AirlineRoutesComponent */

  /***/
  function srcAppLayoutSetupConfigurationAirlineDealsAirlineRoutesAirlineRoutesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AirlineRoutesComponent", function () {
      return AirlineRoutesComponent;
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


    var src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/setup-config/setup-config.service */
    "./src/app/shared/services/setup-config/setup-config.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/report/report.service */
    "./src/app/shared/services/report/report.service.ts");
    /* harmony import */


    var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/common.service */
    "./src/app/shared/services/common.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");

    var AirlineRoutesComponent = /*#__PURE__*/function () {
      function AirlineRoutesComponent(fb, AirlineDealService, toastr, reportService, commonService) {
        var _this = this;

        _classCallCheck(this, AirlineRoutesComponent);

        this.fb = fb;
        this.AirlineDealService = AirlineDealService;
        this.toastr = toastr;
        this.reportService = reportService;
        this.commonService = commonService;
        this.showAddCode = true;
        this.showListCode = false;
        this.showSaveBtn = true;
        this.limit = 15;
        this.pageIndex = 1;
        this.pageAirline = 0;
        this.allAirlineRoutes = [];
        this.allPos = [];
        this.totalAirlineDeals = 0;
        this.pages = 0;
        this.airlines = [];
        this.suppliers = [];
        this.origins = [];
        this.destinations = [];
        this.rbdArrayList = [];
        this.airlineForm = {
          page: this.pageAirline
        };
        this.offset = 0;
        this.totalCount = 0;
        this.filterParams = {
          page: this.offset
        };
        this.totalAirlineRoutes = 0;
        this.airlinePage = 0;
        this.rbdArr = [];
        this.destArr = [];
        this.orgArr = [];
        this.pref_arr = [];
        this.supplierArr = [];
        this.toggleObj = {};
        this.isSubmitted = false;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__["COMMA"]];
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;

        this.fetchAllAirportDetails = function () {
          _this.commonService.getAirportsList().subscribe(function (res) {
            if (res.status) {
              _this.origins = res.result;
              _this.destinations = res.result;
            } else {
              _this.toastr.error("".concat(res.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        };
      }

      _createClass(AirlineRoutesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initForm();
          this.fetchAllPOS({
            limit: 1500
          });
          this.fetchAllSuppliers();
          this.fetchAllAirportDetails();
          this.getAllAirlines();
          this.fetchAllAirlineRoutes(this.filterParams);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.loadConfig();
        }
      }, {
        key: "initForm",
        value: function initForm() {
          this.addAirlineRoutesForm = this.fb.group({
            routes_id: [''],
            organisation_id: [''],
            supplier: [''],
            trip_type: [''],
            origin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            destination: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            routes: [[]],
            mode: ['']
          });
        }
      }, {
        key: "onClickAddCode",
        value: function onClickAddCode() {
          this.loadConfig();
          this.showAddCode = false;
          this.showListCode = true;
          this.showSaveBtn = true;
        }
      }, {
        key: "onClickListCode",
        value: function onClickListCode() {
          this.loadConfig(); // this.addAirlineRoutesForm.reset();

          this.showAddCode = true;
          this.showListCode = false;
        }
      }, {
        key: "fetchAllSuppliers",
        value: function fetchAllSuppliers() {
          var _this2 = this;

          this.commonService.getSupplierList().subscribe(function (res) {
            if (res.type == 'data') {
              _this2.suppliers = res.listData;
            } else {
              _this2.toastr.error("".concat(res.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "fetchAllPOS",
        value: function fetchAllPOS(params) {
          var _this3 = this;

          this.AirlineDealService.fetchAllPointofSale(params).subscribe(function (res) {
            if (res.status) {
              _this3.allPos = res.result.data;
            }
          }, function (err) {
            console.log('erer ', err);
          });
        }
      }, {
        key: "getAllAirlines",
        value: function getAllAirlines() {
          var _this4 = this;

          this.commonService.getAirlines().subscribe(function (result) {
            if (result.type == 'data') {
              _this4.airlines = result.airlines;
            } else {
              _this4.toastr.error("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "saveAirlineRoutes",
        value: function saveAirlineRoutes() {
          var _this5 = this;

          this.isSubmitted = true;

          if (this.addAirlineRoutesForm.invalid) {
            this.toastr.error("Please fill Mandatory Fieilds", "", {
              timeOut: 1000,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });
            return;
          }

          this.addAirlineRoutesForm.patchValue({
            mode: "Add",
            routes_id: ''
          });
          this.AirlineDealService.addAirlineRoutes(this.addAirlineRoutesForm.value).subscribe(function (result) {
            if (result.status) {
              _this5.toastr.success("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });

              _this5.fetchAllAirlineRoutes(_this5.filterParams);

              _this5.resetForm();
            } else {
              _this5.toastr.error("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "deleteAirlineRoutes",
        value: function deleteAirlineRoutes(valObj) {
          var _this6 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(function (result) {
            if (result.value) {
              _this6.AirlineDealService.deleteAirlineRoutes({
                routes_id: valObj.routes_id
              }).subscribe(function (result) {
                if (result.status) {
                  _this6.toastr.success("".concat(result.message), "", {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                  });

                  _this6.fetchAllAirlineRoutes(_this6.filterParams);
                } else {
                  _this6.toastr.error("".concat(result.message), "", {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                  }); // this.fetchAllAirlineDeals();

                }
              });
            }
          });
        }
      }, {
        key: "editAirlineRoutes",
        value: function editAirlineRoutes(valObj) {
          var _this7 = this;

          valObj.destination.forEach(function (element) {
            _this7.destArr.push(element.text);
          });
          valObj.origin.forEach(function (element) {
            _this7.orgArr.push(element.text);
          });
          valObj.routes.forEach(function (element) {
            _this7.pref_arr.push({
              name: element.name
            });
          });
          valObj.supplier.forEach(function (element) {
            _this7.suppliers.push(element);
          });
          this.loadConfig();
          this.showSaveBtn = false;
          this.showAddCode = false;
          this.showListCode = true;
          this.addAirlineRoutesForm.patchValue({
            organisation_id: valObj.organisation_id,
            origin: this.orgArr,
            destination: this.destArr,
            routes: this.pref_arr,
            supplier: this.suppliers,
            trip_type: valObj.trip_type,
            routes_id: valObj.routes_id
          });
        }
      }, {
        key: "updateAirlineRoutes",
        value: function updateAirlineRoutes() {
          var _this8 = this;

          this.addAirlineRoutesForm.patchValue({
            mode: "Update",
            routes_id: this.addAirlineRoutesForm.value.routes_id
          });
          this.AirlineDealService.getUpdateAirlineRoutes(this.addAirlineRoutesForm.value).subscribe(function (result) {
            if (result.status) {
              _this8.toastr.success("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });

              _this8.fetchAllAirlineRoutes(_this8.filterParams);
            } else {
              _this8.toastr.error("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            } // this.fetchAllAirlineDeals();


            _this8.resetForm();
          });
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          this.addAirlineRoutesForm.reset();
          this.onClickListCode();
        }
      }, {
        key: "loadConfig",
        value: function loadConfig() {
          var scope = this;
          $(document).ready(function () {
            $('.menu .item').tab();
            $('.ui.dropdown').dropdown();
            $('.dropdown1').dropdown({
              placeholder: "RBD"
            });
            $('.dropdown2').dropdown({
              placeholder: "Choose suppliers"
            });
            $('.dropdown6').dropdown({
              placeholder: "Choose Organisations"
            });
            $('.dropdown3').dropdown({
              placeholder: "Choose airlines"
            });
            $('.dropdown4').dropdown({
              placeholder: "Choose origin airports"
            });
            $('.dropdown5').dropdown({
              placeholder: "Choose Destination airports"
            });
          });
        }
      }, {
        key: "statusToggle",
        value: function statusToggle(data) {
          var _this9 = this;

          this.toggleObj.id = data.routes_id;
          this.toggleObj.status = data.is_active;
          this.toggleObj.table = "routes";
          console.log("data::::", data);
          this.AirlineDealService.onStatusToggle(this.toggleObj).subscribe(function (res) {
            if (res.status) {
              _this9.fetchAllAirlineRoutes(_this9.filterParams);
            } else {
              _this9.toastr.error("".concat(res.message), "".concat(res.message), {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "fetchAllAirlineRoutes",
        value: function fetchAllAirlineRoutes(filterParams) {
          var _this10 = this;

          this.AirlineDealService.getAllAirlineRoutes(this.filterParams).subscribe(function (result) {
            if (result.status) {
              _this10.totalCount = result.result.total;
              _this10.offset = result.result.page;
              result.result.data.map(function (ele) {
                if (ele.origin) {
                  ele.origin = JSON.parse(ele.origin);
                }

                if (ele.destination) {
                  ele.destination = JSON.parse(ele.destination);
                }

                if (ele.routes) {
                  ele.routes = JSON.parse(ele.routes);
                } // if (ele.supplier) {
                //   ele.supplier = JSON.parse(ele.supplier);
                // }

              });
              _this10.allAirlineRoutes = result.result.data;
            } else {
              _this10.toastr.error("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "add",
        value: function add(event, chk) {
          var input = event.input;
          var value = event.value.toUpperCase();

          if ((value || '').trim()) {
            if (chk == 1) this.addAirlineRoutesForm.value.routes.push({
              name: value.trim()
            });
          } // Reset the input value


          if (input) {
            input.value = '';
          }
        }
      }, {
        key: "remove",
        value: function remove(val, chk) {
          var index1 = this.addAirlineRoutesForm.value.routes.indexOf(val);

          if (true) {
            if (chk == 1) this.addAirlineRoutesForm.value.routes.splice(index1, 1);
          }
        }
      }, {
        key: "pageCallback",
        value: function pageCallback(event) {
          var offset = event.offset;
          this.airlineForm.page = offset;
          this.fetchAllAirlineRoutes(this.filterParams);
        }
      }, {
        key: "f",
        get: function get() {
          return this.addAirlineRoutesForm.controls;
        }
      }]);

      return AirlineRoutesComponent;
    }();

    AirlineRoutesComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_3__["SetupConfigService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_5__["ReportService"]
      }, {
        type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
      }];
    };

    AirlineRoutesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-airline-routes',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./airline-routes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/airline-deals/airline-routes/airline-routes.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./airline-routes.component.scss */
      "./src/app/layout/setup-configuration/airline-deals/airline-routes/airline-routes.component.scss"))["default"]]
    })], AirlineRoutesComponent);
    /***/
  },

  /***/
  "./src/app/layout/setup-configuration/airline-deals/commission/commission.component.scss":
  /*!***********************************************************************************************!*\
    !*** ./src/app/layout/setup-configuration/airline-deals/commission/commission.component.scss ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSetupConfigurationAirlineDealsCommissionCommissionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".outer {\n  margin: 0px 20px 0px 15px;\n}\n\n.airline_title {\n  margin: 0;\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #E0E0E0;\n}\n\n.tourCode_btn,\n.addTogg_btn {\n  border-radius: 3px;\n  width: auto !important;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.tourCode_text,\n.addTogg_text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.goto_list {\n  background-color: transparent;\n  box-shadow: none;\n  border: none;\n  color: #181B20;\n  font-size: 14px;\n}\n\n.goto_list span {\n  color: #181B20;\n}\n\n.goto-link {\n  position: relative;\n  top: 8px;\n}\n\n.corporate_input__placeholder-icon {\n  position: relative;\n  width: 18px;\n  bottom: 28px;\n  left: 9px;\n}\n\n.b2c-list-user-table {\n  overflow-x: auto;\n}\n\n.b2c-list-user-table .ui.table {\n  width: calc(100% + 540px);\n}\n\n.date-field {\n  text-indent: 17px;\n}\n\n.ui.form {\n  padding: 0px 24px;\n}\n\n.ui.form .search-section {\n  padding: 0px;\n  margin-bottom: 24px;\n}\n\n.ui.form.list-code-ui {\n  padding: 0px;\n}\n\n.ui.form.list-code-ui .search-section {\n  margin-bottom: 0px !important;\n}\n\n.ui.form.list-code-ui .result-block {\n  padding-bottom: 40px;\n}\n\n.icon {\n  opacity: 1;\n  z-index: 1;\n}\n\n.icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.icon .bookings_input__placeholder-icon.cal {\n  width: 16px;\n  margin-top: 0px;\n}\n\n.icon .bookings_input__placeholder-icon.call {\n  width: 10px;\n  margin-top: 0px;\n}\n\n.icon .bookings_input__placeholder-icon.calender {\n  width: 18px !important;\n  margin-top: 10px !important;\n}\n\nbutton.ui.button.commissionCode_btn.fluid {\n  background: #3867b1;\n}\n\n.bookings_pickers .input {\n  z-index: 0;\n}\n\n.bookings_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n\n.bookings_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n\n.bookings_pickers .input .icon {\n  opacity: 1;\n  z-index: 0;\n}\n\n.bookings_pickers .input .icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.bookings_pickers .input .icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n\n.bookings_pickers .input .search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.bookings_pickers .input .search.dropdown .search {\n  margin-left: 42px !important;\n}\n\n.bookings_pickers .input .search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n\n.search-section {\n  padding-bottom: 30px;\n}\n\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n\n.ui.form .three.wide.field,\n.ui.form .field > .checkbox-field,\n.ui.form .five.wide.field,\n.ui.form .six.wide.field,\n.four.wide.field {\n  margin-bottom: 12px;\n}\n\n.detail-segment {\n  padding: 0;\n  margin-top: 0;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 160px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 10px;\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: 0px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.listCodeWrapper {\n  padding: 0px;\n}\n\n.listCodeWrapper > .ui.form {\n  padding: 20px 8px;\n}\n\n.search-section {\n  padding: 0px 0px 8px 6px;\n  text-align: right;\n}\n\n.search-section .eight.wide.field .main_head {\n  text-align: left;\n  font-weight: 500 !important;\n  font-size: 13px;\n  line-height: 15px;\n  color: #1B1F26;\n}\n\n.search-section .list-code {\n  text-align: left;\n  margin: 0 auto 20px;\n  padding-left: 0px;\n}\n\n.search-section button {\n  margin-right: 0px;\n}\n\n.list-code-block {\n  width: 100%;\n  margin: 0;\n  padding-bottom: 70px;\n}\n\n.ui.form .eight.wide.field.list-code {\n  margin-left: 24px;\n}\n\n.listCodeWrapper .ui.form {\n  padding: 12px 0px 0px !important;\n}\n\n.save-btn-block button {\n  float: right;\n}\n\n.ui.form.list-code-ui .search-section {\n  margin-bottom: 24px;\n}\n\n.ui.icon.input > i.icon {\n  opacity: 1;\n  z-index: 1;\n  top: 0px;\n}\n\n@media (max-width: 1440px) {\n  .outer .air-title {\n    margin-left: 24px;\n  }\n\n  .result-block {\n    width: auto;\n    margin: 24px;\n  }\n\n  .ui.form {\n    padding: 0px;\n  }\n  .ui.form .tourCode_btn {\n    margin-right: 0px;\n  }\n  .ui.form .bookings_btn-panel.list-code {\n    padding-left: 0px;\n  }\n  .ui.form .search-section {\n    margin: 0px 20px;\n  }\n  .ui.form .search-section .eight.wide.field {\n    padding-left: 0px;\n  }\n  .ui.form .eight.wide.field.list-code {\n    width: auto;\n    margin: 0px;\n  }\n\n  .save-btn-block {\n    right: 16px;\n    top: 36px;\n  }\n\n  .list-code-block {\n    width: auto;\n    margin: 24px;\n  }\n}\n\n@media (max-width: 1280px) {\n  .outer .air-title {\n    margin-left: 20px;\n  }\n\n  .result-block {\n    width: auto;\n    margin: 20px;\n  }\n\n  .listCodeWrapper {\n    padding: 0px 10px;\n  }\n\n  .save-btn-block {\n    right: 38px;\n    top: 30px;\n  }\n}\n\n@media (max-width: 767px) {\n  .ui.form .search-section .eight.wide.field {\n    margin-bottom: 0px;\n  }\n\n  .ui.container {\n    margin: 0px !important;\n  }\n\n  .result-block {\n    padding-bottom: 80px;\n  }\n  .result-block .ui.segment {\n    margin-bottom: 16px;\n  }\n  .result-block .save-btn-block {\n    right: -20px;\n  }\n\n  .search-section .eight.wide.field .main_head {\n    margin-bottom: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vYWlybGluZS1kZWFscy9jb21taXNzaW9uL0U6XFxCZWxhbFxccHJvamVjdHNcXHByb2R1Y3Rpb24tYnVpbGRcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcc2V0dXAtY29uZmlndXJhdGlvblxcYWlybGluZS1kZWFsc1xcY29tbWlzc2lvblxcY29tbWlzc2lvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vYWlybGluZS1kZWFscy9jb21taXNzaW9uL2NvbW1pc3Npb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGtDQUFBO0VBQ0Esd0NBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQ0NKOztBREVBO0VBQ0ksNENBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBOztFQUVJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlGQUFBO0FDQ0o7O0FERUE7O0VBRUksV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREFJO0VBQ0ksY0FBQTtBQ0VSOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURBSTtFQUNJLHlCQUFBO0FDRVI7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURBSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQ0VSOztBREVBO0VBQ0ksWUFBQTtBQ0NKOztBREFJO0VBQ0ksNkJBQUE7QUNFUjs7QURBSTtFQUNJLG9CQUFBO0FDRVI7O0FERUE7RUFDSSxVQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREFJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNFUjs7QUREUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDR1o7O0FERFE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0daOztBRERRO0VBQ0ksc0JBQUE7RUFDQSwyQkFBQTtBQ0daOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURBSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNFUjs7QURBSTtFQUNJLHdCQUFBO0VBQ0EsMENBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDRVI7O0FEQUk7RUFDSSxVQUFBO0VBQ0EsVUFBQTtBQ0VSOztBRERRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNHWjs7QURGWTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0loQjs7QURBSTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQ0VSOztBRERRO0VBQ0ksNEJBQUE7QUNHWjs7QUREUTtFQUNJLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0FDR1o7O0FERUE7RUFDSSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7Ozs7O0VBS0ksbUJBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FDQ0o7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0FDQUo7O0FER0E7RUFDSSxZQUFBO0FDQUo7O0FEQ0k7RUFDSSxpQkFBQTtBQ0NSOztBREdBO0VBQ0ksd0JBQUE7RUFDQSxpQkFBQTtBQ0FKOztBRENJO0VBQ0ksZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDUjs7QURDSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ0NSOztBRENJO0VBQ0ksaUJBQUE7QUNDUjs7QURHQTtFQUNJLFdBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxnQ0FBQTtBQ0FKOztBRFFJO0VBQ0ksWUFBQTtBQ0xSOztBRFVJO0VBQ0ksbUJBQUE7QUNQUjs7QURXQTtFQUNJLFVBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQ1JKOztBRFdBO0VBQ0k7SUFDSSxpQkFBQTtFQ1JOOztFRFVFO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUNQTjs7RURTRTtJQUNJLFlBQUE7RUNOTjtFRE9NO0lBQ0ksaUJBQUE7RUNMVjtFRE9NO0lBQ0ksaUJBQUE7RUNMVjtFRE9NO0lBQ0ksZ0JBQUE7RUNMVjtFRE1VO0lBQ0ksaUJBQUE7RUNKZDtFRE9NO0lBQ0ksV0FBQTtJQUNBLFdBQUE7RUNMVjs7RURRRTtJQUNJLFdBQUE7SUFDQSxTQUFBO0VDTE47O0VET0U7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQ0pOO0FBQ0Y7O0FET0E7RUFDSTtJQUNJLGlCQUFBO0VDTE47O0VET0U7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQ0pOOztFRE1FO0lBQ0ksaUJBQUE7RUNITjs7RURLRTtJQUNJLFdBQUE7SUFDQSxTQUFBO0VDRk47QUFDRjs7QURLQTtFQUdZO0lBQ0ksa0JBQUE7RUNMZDs7RURTRTtJQUNJLHNCQUFBO0VDTk47O0VEUUU7SUFDSSxvQkFBQTtFQ0xOO0VETU07SUFDSSxtQkFBQTtFQ0pWO0VETU07SUFDSSxZQUFBO0VDSlY7O0VEUU07SUFDSSxtQkFBQTtFQ0xWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc2V0dXAtY29uZmlndXJhdGlvbi9haXJsaW5lLWRlYWxzL2NvbW1pc3Npb24vY29tbWlzc2lvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlciB7XHJcbiAgICBtYXJnaW46IDBweCAyMHB4IDBweCAxNXB4O1xyXG59XHJcblxyXG4uYWlybGluZV90aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxufVxyXG5cclxuLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLnVpLnRvcC5hdHRhY2hlZC5tZW51Pi5pdGVtIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yODU3MTQyOXJlbSAwIDAgMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51aS5ib3R0b20uYXR0YWNoZWQuYWN0aXZlLnRhYi5zZWdtZW50IHtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE3cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTdweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxN3B4O1xyXG59XHJcblxyXG4udGFiLnNlZ21lbnQge1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgI0UwRTBFMDtcclxufVxyXG5cclxuLnRvdXJDb2RlX2J0bixcclxuLmFkZFRvZ2dfYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4udG91ckNvZGVfdGV4dCxcclxuLmFkZFRvZ2dfdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdvdG9fbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogIzE4MUIyMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAjMTgxQjIwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZ290by1saW5rIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogOHB4O1xyXG59XHJcblxyXG4uY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgYm90dG9tOiAyOHB4O1xyXG4gICAgbGVmdDogOXB4O1xyXG59XHJcblxyXG4uYjJjLWxpc3QtdXNlci10YWJsZSB7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgLnVpLnRhYmxlIHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgNTQwcHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZGF0ZS1maWVsZCB7XHJcbiAgICB0ZXh0LWluZGVudDogMTdweDtcclxufVxyXG5cclxuLnVpLmZvcm0ge1xyXG4gICAgcGFkZGluZzogMHB4IDI0cHg7XHJcbiAgICAuc2VhcmNoLXNlY3Rpb24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udWkuZm9ybS5saXN0LWNvZGUtdWkge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgLnNlYXJjaC1zZWN0aW9uIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5yZXN1bHQtYmxvY2sge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgICYuY2FsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5jYWxsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5jYWxlbmRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmJ1dHRvbi51aS5idXR0b24uY29tbWlzc2lvbkNvZGVfYnRuLmZsdWlkIHtcclxuICAgIGJhY2tncm91bmQ6ICMzODY3YjE7XHJcbn1cclxuXHJcbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCB7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgJi5ib29raW5nc19kYXRlcGlja2VyIHtcclxuICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTM4cHhcclxuICAgIH1cclxuICAgIC51aS5iYXNpYy5mbG9hdGluZy5idXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogcmdiYSgxNTIsIDE1MiwgMTUyLCAwLjYpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4gICAgfVxyXG4gICAgLmljb24ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgICAgICAmLmNhbCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLmRyb3Bkb3duIHtcclxuICAgICAgICB3aWR0aDogMjE4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgLnNlYXJjaCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZWZhdWx0LnRleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMCAwIDM4cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnVpLmZvcm0gLmZpZWxkPmxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgIGNvbG9yOiAjMTgxQjIwO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDhweDtcclxufVxyXG5cclxuLnVpLmZvcm0gLnRocmVlLndpZGUuZmllbGQsXHJcbi51aS5mb3JtIC5maWVsZD4uY2hlY2tib3gtZmllbGQsXHJcbi51aS5mb3JtIC5maXZlLndpZGUuZmllbGQsXHJcbi51aS5mb3JtIC5zaXgud2lkZS5maWVsZCxcclxuLmZvdXIud2lkZS5maWVsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcblxyXG4uZGV0YWlsLXNlZ21lbnQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC8vIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYm90dG9tOiAxMDAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5saXN0Q29kZVdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgPi51aS5mb3JtIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDhweDtcclxuICAgIH1cclxufVxyXG5cclxuLnNlYXJjaC1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggOHB4IDZweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgLmVpZ2h0LndpZGUuZmllbGQgLm1haW5faGVhZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMUIxRjI2O1xyXG4gICAgfVxyXG4gICAgLmxpc3QtY29kZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgfVxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmxpc3QtY29kZS1ibG9jayB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmctYm90dG9tOjcwcHhcclxufVxyXG5cclxuLnVpLmZvcm0gLmVpZ2h0LndpZGUuZmllbGQubGlzdC1jb2RlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG59XHJcblxyXG4ubGlzdENvZGVXcmFwcGVyIC51aS5mb3JtIHtcclxuICAgIHBhZGRpbmc6IDEycHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVzdWx0LWJsb2NrIHtcclxuICAgIC8vIHBhZGRpbmctYm90dG9tOiA3MnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zYXZlLWJ0bi1ibG9jayB7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxufVxyXG5cclxuLnVpLmZvcm0ubGlzdC1jb2RlLXVpIHtcclxuICAgIC5zZWFyY2gtc2VjdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIH1cclxufVxyXG5cclxuLnVpLmljb24uaW5wdXQ+aS5pY29uIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgdG9wOiAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHsgXHJcbiAgICAub3V0ZXIgLmFpci10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbiAgICB9XHJcbiAgICAucmVzdWx0LWJsb2NrIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBtYXJnaW46IDI0cHg7XHJcbiAgICB9XHJcbiAgICAudWkuZm9ybSB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIC50b3VyQ29kZV9idG4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDsgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuYm9va2luZ3NfYnRuLXBhbmVsLmxpc3QtY29kZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoLXNlY3Rpb24ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCAyMHB4O1xyXG4gICAgICAgICAgICAuZWlnaHQud2lkZS5maWVsZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZWlnaHQud2lkZS5maWVsZC5saXN0LWNvZGUge1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNhdmUtYnRuLWJsb2NrIHtcclxuICAgICAgICByaWdodDogMTZweDtcclxuICAgICAgICB0b3A6IDM2cHg7XHJcbiAgICB9XHJcbiAgICAubGlzdC1jb2RlLWJsb2NrIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBtYXJnaW46IDI0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIC5vdXRlciAuYWlyLXRpdGxlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuICAgIC5yZXN1bHQtYmxvY2sge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgIH1cclxuICAgIC5saXN0Q29kZVdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6MHB4IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuc2F2ZS1idG4tYmxvY2sge1xyXG4gICAgICAgIHJpZ2h0OiAzOHB4O1xyXG4gICAgICAgIHRvcDogMzBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgICAudWkuZm9ybSB7XHJcbiAgICAgICAgLnNlYXJjaC1zZWN0aW9uIHtcclxuICAgICAgICAgICAgLmVpZ2h0LndpZGUuZmllbGQge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnVpLmNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5yZXN1bHQtYmxvY2sge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gICAgICAgIC51aS5zZWdtZW50IHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNhdmUtYnRuLWJsb2NrIHtcclxuICAgICAgICAgICAgcmlnaHQ6IC0yMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zZWFyY2gtc2VjdGlvbiB7XHJcbiAgICAgICAgLmVpZ2h0LndpZGUuZmllbGQgLm1haW5faGVhZCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLm91dGVyIHtcbiAgbWFyZ2luOiAwcHggMjBweCAwcHggMTVweDtcbn1cblxuLmFpcmxpbmVfdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi51aS50b3AuYXR0YWNoZWQubWVudSA+IC5pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yODU3MTQyOXJlbSAwIDAgMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLnVpLmJvdHRvbS5hdHRhY2hlZC5hY3RpdmUudGFiLnNlZ21lbnQge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XG59XG5cbi50YWIuc2VnbWVudCB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG5ociB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNFMEUwRTA7XG59XG5cbi50b3VyQ29kZV9idG4sXG4uYWRkVG9nZ19idG4ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnRvdXJDb2RlX3RleHQsXG4uYWRkVG9nZ190ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5nb3RvX2xpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzE4MUIyMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmdvdG9fbGlzdCBzcGFuIHtcbiAgY29sb3I6ICMxODFCMjA7XG59XG5cbi5nb3RvLWxpbmsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogOHB4O1xufVxuXG4uY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMThweDtcbiAgYm90dG9tOiAyOHB4O1xuICBsZWZ0OiA5cHg7XG59XG5cbi5iMmMtbGlzdC11c2VyLXRhYmxlIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cbi5iMmMtbGlzdC11c2VyLXRhYmxlIC51aS50YWJsZSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA1NDBweCk7XG59XG5cbi5kYXRlLWZpZWxkIHtcbiAgdGV4dC1pbmRlbnQ6IDE3cHg7XG59XG5cbi51aS5mb3JtIHtcbiAgcGFkZGluZzogMHB4IDI0cHg7XG59XG4udWkuZm9ybSAuc2VhcmNoLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi51aS5mb3JtLmxpc3QtY29kZS11aSB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi51aS5mb3JtLmxpc3QtY29kZS11aSAuc2VhcmNoLXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAwcHggIWltcG9ydGFudDtcbn1cbi51aS5mb3JtLmxpc3QtY29kZS11aSAucmVzdWx0LWJsb2NrIHtcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG5cbi5pY29uIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTtcbn1cbi5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4uaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsIHtcbiAgd2lkdGg6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbi5jYWxsIHtcbiAgd2lkdGg6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbi5jYWxlbmRlciB7XG4gIHdpZHRoOiAxOHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcbn1cblxuYnV0dG9uLnVpLmJ1dHRvbi5jb21taXNzaW9uQ29kZV9idG4uZmx1aWQge1xuICBiYWNrZ3JvdW5kOiAjMzg2N2IxO1xufVxuXG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQge1xuICB6LWluZGV4OiAwO1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0LmJvb2tpbmdzX2RhdGVwaWNrZXIge1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBtYXgtd2lkdGg6IDEzOHB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC51aS5iYXNpYy5mbG9hdGluZy5idXR0b24ge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiByZ2JhKDE1MiwgMTUyLCAxNTIsIDAuNikgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTFweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuaWNvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDA7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcbiAgd2lkdGg6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsIHtcbiAgd2lkdGg6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnNlYXJjaC5kcm9wZG93biB7XG4gIHdpZHRoOiAyMThweDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuc2VhcmNoLmRyb3Bkb3duIC5zZWFyY2gge1xuICBtYXJnaW4tbGVmdDogNDJweCAhaW1wb3J0YW50O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5zZWFyY2guZHJvcGRvd24gLmRlZmF1bHQudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDhweCAwIDAgMzhweCAhaW1wb3J0YW50O1xufVxuXG4uc2VhcmNoLXNlY3Rpb24ge1xuICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLnVpLmZvcm0gLmZpZWxkID4gbGFiZWwge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBjb2xvcjogIzE4MUIyMDtcbiAgbWFyZ2luOiAwcHggMHB4IDhweDtcbn1cblxuLnVpLmZvcm0gLnRocmVlLndpZGUuZmllbGQsXG4udWkuZm9ybSAuZmllbGQgPiAuY2hlY2tib3gtZmllbGQsXG4udWkuZm9ybSAuZml2ZS53aWRlLmZpZWxkLFxuLnVpLmZvcm0gLnNpeC53aWRlLmZpZWxkLFxuLmZvdXIud2lkZS5maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5kZXRhaWwtc2VnbWVudCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDE2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgYm90dG9tOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5saXN0Q29kZVdyYXBwZXIge1xuICBwYWRkaW5nOiAwcHg7XG59XG4ubGlzdENvZGVXcmFwcGVyID4gLnVpLmZvcm0ge1xuICBwYWRkaW5nOiAyMHB4IDhweDtcbn1cblxuLnNlYXJjaC1zZWN0aW9uIHtcbiAgcGFkZGluZzogMHB4IDBweCA4cHggNnB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5zZWFyY2gtc2VjdGlvbiAuZWlnaHQud2lkZS5maWVsZCAubWFpbl9oZWFkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBjb2xvcjogIzFCMUYyNjtcbn1cbi5zZWFyY2gtc2VjdGlvbiAubGlzdC1jb2RlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwIGF1dG8gMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG4uc2VhcmNoLXNlY3Rpb24gYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbi5saXN0LWNvZGUtYmxvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogNzBweDtcbn1cblxuLnVpLmZvcm0gLmVpZ2h0LndpZGUuZmllbGQubGlzdC1jb2RlIHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG59XG5cbi5saXN0Q29kZVdyYXBwZXIgLnVpLmZvcm0ge1xuICBwYWRkaW5nOiAxMnB4IDBweCAwcHggIWltcG9ydGFudDtcbn1cblxuLnNhdmUtYnRuLWJsb2NrIGJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnVpLmZvcm0ubGlzdC1jb2RlLXVpIC5zZWFyY2gtc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi51aS5pY29uLmlucHV0ID4gaS5pY29uIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiAwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLm91dGVyIC5haXItdGl0bGUge1xuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICB9XG5cbiAgLnJlc3VsdC1ibG9jayB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiAyNHB4O1xuICB9XG5cbiAgLnVpLmZvcm0ge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICAudWkuZm9ybSAudG91ckNvZGVfYnRuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgfVxuICAudWkuZm9ybSAuYm9va2luZ3NfYnRuLXBhbmVsLmxpc3QtY29kZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIH1cbiAgLnVpLmZvcm0gLnNlYXJjaC1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDBweCAyMHB4O1xuICB9XG4gIC51aS5mb3JtIC5zZWFyY2gtc2VjdGlvbiAuZWlnaHQud2lkZS5maWVsZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIH1cbiAgLnVpLmZvcm0gLmVpZ2h0LndpZGUuZmllbGQubGlzdC1jb2RlIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuXG4gIC5zYXZlLWJ0bi1ibG9jayB7XG4gICAgcmlnaHQ6IDE2cHg7XG4gICAgdG9wOiAzNnB4O1xuICB9XG5cbiAgLmxpc3QtY29kZS1ibG9jayB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiAyNHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5vdXRlciAuYWlyLXRpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuXG4gIC5yZXN1bHQtYmxvY2sge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxuXG4gIC5saXN0Q29kZVdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICB9XG5cbiAgLnNhdmUtYnRuLWJsb2NrIHtcbiAgICByaWdodDogMzhweDtcbiAgICB0b3A6IDMwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAudWkuZm9ybSAuc2VhcmNoLXNlY3Rpb24gLmVpZ2h0LndpZGUuZmllbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgfVxuXG4gIC51aS5jb250YWluZXIge1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAucmVzdWx0LWJsb2NrIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcbiAgfVxuICAucmVzdWx0LWJsb2NrIC51aS5zZWdtZW50IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG4gIC5yZXN1bHQtYmxvY2sgLnNhdmUtYnRuLWJsb2NrIHtcbiAgICByaWdodDogLTIwcHg7XG4gIH1cblxuICAuc2VhcmNoLXNlY3Rpb24gLmVpZ2h0LndpZGUuZmllbGQgLm1haW5faGVhZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/setup-configuration/airline-deals/commission/commission.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/layout/setup-configuration/airline-deals/commission/commission.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: CommissionComponent */

  /***/
  function srcAppLayoutSetupConfigurationAirlineDealsCommissionCommissionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommissionComponent", function () {
      return CommissionComponent;
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


    var src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/setup-config/setup-config.service */
    "./src/app/shared/services/setup-config/setup-config.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/report/report.service */
    "./src/app/shared/services/report/report.service.ts");
    /* harmony import */


    var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/common.service */
    "./src/app/shared/services/common.service.ts");
    /* harmony import */


    var src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/utils/common */
    "./src/app/shared/utils/common.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../../../../../environments/environment */
    "./src/environments/environment.ts");

    var CommissionComponent = /*#__PURE__*/function () {
      function CommissionComponent(fb, AirlineDealService, toastr, reportService, commonService) {
        var _this11 = this;

        _classCallCheck(this, CommissionComponent);

        this.fb = fb;
        this.AirlineDealService = AirlineDealService;
        this.toastr = toastr;
        this.reportService = reportService;
        this.commonService = commonService;
        this.submitted = false;
        this.showAddCommision = true;
        this.showListCommision = false;
        this.NewAirlineCommission = [];
        this.totalAirlineCommissions = 0;
        this.pageCommission = 0;
        this.airlines = [];
        this.suppliers = [];
        this.origins = [];
        this.destinations = [];
        this.rbdArrayList = [];
        this.limit = 15;
        this.pageIndex = 1;
        this.pages = 0;
        this.showSaveBtn = true;
        this.commissionForm = {
          page: this.pageCommission
        };
        this.offset = 0;
        this.totalCount = 0;
        this.filterParams = {
          page: this.offset
        };
        this.commissionPage = 0;
        this.rbdArr = [];
        this.destArr = [];
        this.orgArr = [];
        this.supplierArr = [];
        this.toggleObj = {};
        this.newAddCommissionForm = this.fb.group({
          commission_id: [''],
          supplier: [''],
          airline: [''],
          trip_type: [''],
          cabin_class: [''],
          commission: [''],
          commissionmode: [''],
          orgin: [''],
          destination: [''],
          sale_start_date: [''],
          sale_end_date: [''],
          travel_start_date: [''],
          travel_end_date: [''],
          rbd: [''],
          mode: ['']
        });

        this.fetchAllAirportDetails = function () {
          _this11.commonService.getAirportsList().subscribe(function (res) {
            if (res.status) {
              _this11.origins = res.result;
              _this11.destinations = res.result;
            } else {
              _this11.toastr.error("".concat(res.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        };

        this.addCommission = function () {
          _this11.newAddCommissionForm.patchValue({
            mode: "Add",
            commission_id: ''
          });

          _this11.AirlineDealService.addCommission(_this11.newAddCommissionForm.value).subscribe(function (result) {
            if (result.status) {
              _this11.toastr.error("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });

              _this11.fetchAllAirlineCommissions(_this11.filterParams);

              _this11.resetForm();
            } else {
              _this11.toastr.success("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        };
      }

      _createClass(CommissionComponent, [{
        key: "onAddCommision",
        value: function onAddCommision() {
          this.loadConfig();
          this.loadSaleEndDate();
          this.loadSaleStartDate();
          this.loadTravelStartDate();
          this.loadTravelEndDate();
          this.showAddCommision = false;
          this.showListCommision = true;
        }
      }, {
        key: "fetchAllSuppliers",
        value: function fetchAllSuppliers() {
          var _this12 = this;

          this.reportService.GetAllSuppliers().subscribe(function (res) {
            if (res.status) {
              _this12.suppliers = res.result.filter(function (data) {
                return data.name !== "";
              });
            } else {
              _this12.toastr.error("".concat(res.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "fetchAllAirlines",
        value: function fetchAllAirlines() {
          var _this13 = this;

          this.commonService.getAirlines().subscribe(function (result) {
            if (result.type == 'data') {
              _this13.airlines = result.airlines;
            } else {
              _this13.toastr.error("".concat(result.msg), "".concat(result.msg), {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "fetchAllAirlineCommissions",
        value: function fetchAllAirlineCommissions(filterParams) {
          var _this14 = this;

          this.AirlineDealService.GetAllAirCommissions(this.filterParams).subscribe(function (res) {
            if (res.status) {
              _this14.totalCount = res.result.total;
              _this14.offset = res.result.page;
              res.result.data.map(function (ele) {
                if (ele.orgin) {
                  ele.orgin = JSON.parse(ele.orgin);
                }

                if (ele.destination) {
                  ele.destination = JSON.parse(ele.destination);
                }

                if (ele.rbd) {
                  ele.rbd = JSON.parse(ele.rbd);
                }

                if (ele.supplier) {
                  ele.supplier = JSON.parse(ele.supplier);
                }
              });
              _this14.NewAirlineCommission = res.result.data;
            } else {
              _this14.toastr.error("".concat(res.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "onListCommission",
        value: function onListCommission() {
          this.loadConfig();
          this.showAddCommision = true;
          this.showListCommision = false;
        }
      }, {
        key: "editCommission",
        value: function editCommission(valObj) {
          var _this15 = this;

          var airlineCommission = JSON.parse(valObj.rbd_commission).commission;
          var commissionMode = JSON.parse(valObj.rbd_commission).commissionmode;
          valObj.rbd.forEach(function (element) {
            _this15.rbdArr.push(element.text);
          });
          valObj.destination.forEach(function (element) {
            _this15.destArr.push(element.text);
          });
          valObj.orgin.forEach(function (element) {
            _this15.orgArr.push(element.text);
          });
          this.loadConfig();
          this.showAddCommision = false;
          this.showSaveBtn = false;
          this.showListCommision = true;
          console.log("supplier:::::::", valObj.supplier);
          this.newAddCommissionForm.patchValue({
            commission_id: valObj.commission_id,
            airline: valObj.airline,
            supplier: valObj.supplier,
            tourcode: valObj.tourcode,
            trip_type: valObj.trip_type,
            code_type: valObj.code_type,
            cabin_class: valObj.cabin_class,
            tourcode_name: valObj.tourcode_name,
            apply_type: valObj.apply_type,
            commission: airlineCommission,
            commissionmode: commissionMode,
            orgin: this.orgArr,
            destination: this.destArr,
            rbd: this.rbdArr,
            sale_start_date: valObj.sale_start_date,
            sale_end_date: valObj.sale_end_date,
            travel_start_date: valObj.travel_end_date,
            travel_end_date: valObj.travel_start_date
          });
        }
      }, {
        key: "updateCommission",
        value: function updateCommission() {
          var _this16 = this;

          this.newAddCommissionForm.patchValue({
            mode: "Update"
          });
          var commission_id = this.newAddCommissionForm.value.commission_id;
          this.AirlineDealService.getUpdateCommission(commission_id, this.newAddCommissionForm.value).subscribe(function (result) {
            if (result.status) {
              _this16.toastr.success("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });

              _this16.fetchAllAirlineCommissions(_this16.filterParams);

              _this16.resetForm();
            } else {
              _this16.toastr.error("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "deleteCommission",
        value: function deleteCommission(valObj) {
          var _this17 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(function (result) {
            if (result.value) {
              _this17.AirlineDealService.deleteCommission(valObj.commission_id).subscribe(function (result) {
                console.log("result:::", result);

                if (result.type == 'error') {
                  _this17.toastr.error("".concat(result.msg), "", {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                  });
                } else {
                  _this17.toastr.success("".concat(result.msg), "", {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                  });

                  _this17.fetchAllAirlineCommissions(_this17.filterParams);
                }
              });
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fetchAllAirlineCommissions(this.filterParams);
          this.fetchAllSuppliers();
          this.fetchAllAirportDetails();
          this.rbdArrayList = src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_7__["rbdArrayList"];
          this.fetchAllAirlines();
          this.loadConfig();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.loadConfig();
          this.loadSaleEndDate();
          this.loadSaleStartDate();
          this.loadTravelStartDate();
          this.loadTravelEndDate();
        }
      }, {
        key: "loadConfig",
        value: function loadConfig() {
          var scope = this;
          $(document).ready(function () {
            $('.menu .item').tab();
            $('.ui.dropdown').dropdown();
            $('.dropdown1').dropdown({
              placeholder: "RBD"
            });
            $('.dropdown2').dropdown({
              placeholder: "Choose suppliers"
            });
            $('.dropdown3').dropdown({
              placeholder: "Choose airlines"
            });
            $('.dropdown4').dropdown({
              placeholder: "Choose origin airports"
            });
            $('.dropdown5').dropdown({
              placeholder: "Choose Destination airports"
            });
          });
          $(document).ready(function () {
            this._globals = localStorage.getItem('_globals');
            var token = JSON.parse(this._globals).token;
            $('.ui.dropdown4').dropdown({
              type: 'category',
              minCharacters: 2,
              maxCharacters: 3,
              responseAsync: true,
              apiSettings: {
                url: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].serverURL + '/api/get-airports-cache/{query}',
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
        key: "loadSaleStartDate",
        value: function loadSaleStartDate() {
          var scope = this;
          $(function () {
            $('input[name="sale_start_date"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1980,
              startDate: moment().subtract(90, 'day'),
              autoUpdateInput: false,
              maxYear: parseInt(moment().format('YYYY'), 10)
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.newAddCommissionForm.get('sale_start_date').setValue(moment(start).format('DD-MM-YYYY'));
            });
          });
        }
      }, {
        key: "loadSaleEndDate",
        value: function loadSaleEndDate() {
          var scope = this;
          $(function () {
            $('input[name="sale_end_date"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1901,
              startDate: moment(),
              minDate: moment(),
              autoUpdateInput: false,
              maxYear: parseInt(moment().format('YYYY'), 10)
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.newAddCommissionForm.get('sale_end_date').setValue(moment(start).format('DD-MM-YYYY'));
            });
          });
        }
      }, {
        key: "loadTravelStartDate",
        value: function loadTravelStartDate() {
          var scope = this;
          $(function () {
            $('input[name="travel_start_date"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1980,
              startDate: moment().subtract(90, 'day'),
              autoUpdateInput: false,
              maxYear: parseInt(moment().format('YYYY'), 10)
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.newAddCommissionForm.get('travel_start_date').setValue(moment(start).format('DD-MM-YYYY'));
            });
          });
        }
      }, {
        key: "loadTravelEndDate",
        value: function loadTravelEndDate() {
          var scope = this;
          $(function () {
            $('input[name="travel_end_date"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1901,
              startDate: moment(),
              minDate: moment(),
              autoUpdateInput: false,
              maxYear: parseInt(moment().format('YYYY'), 10)
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.newAddCommissionForm.get('travel_end_date').setValue(moment(start).format('DD-MM-YYYY'));
            });
          });
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          this.newAddCommissionForm.reset();
          this.onListCommission();
        }
      }, {
        key: "pageCallback",
        value: function pageCallback(event) {
          var offset = event.offset;
          this.commissionForm.page = offset;
          this.fetchAllAirlineCommissions(this.filterParams);
        }
      }, {
        key: "statusToggle",
        value: function statusToggle(data) {
          var _this18 = this;

          this.toggleObj.id = data.commission_id;
          this.toggleObj.status = data.is_active;
          this.toggleObj.table = "commissions";
          this.AirlineDealService.onStatusToggle(this.toggleObj).subscribe(function (res) {
            if (res.status == 200) {
              _this18.fetchAllAirlineCommissions(_this18.filterParams);
            } else {
              _this18.toastr.error("".concat(res.msg), "".concat(res.msg), {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "fc",
        get: function get() {
          return this.newAddCommissionForm.controls;
        }
      }]);

      return CommissionComponent;
    }();

    CommissionComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_3__["SetupConfigService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_5__["ReportService"]
      }, {
        type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
      }];
    };

    CommissionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-commission',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./commission.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/airline-deals/commission/commission.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./commission.component.scss */
      "./src/app/layout/setup-configuration/airline-deals/commission/commission.component.scss"))["default"]]
    })], CommissionComponent);
    /***/
  },

  /***/
  "./src/app/layout/setup-configuration/airline-deals/tourcode/tourcode.component.scss":
  /*!*******************************************************************************************!*\
    !*** ./src/app/layout/setup-configuration/airline-deals/tourcode/tourcode.component.scss ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSetupConfigurationAirlineDealsTourcodeTourcodeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".outer {\n  margin: 0px 20px 0px 15px;\n}\n\n.airline_title {\n  margin: 0;\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #E0E0E0;\n}\n\n.tourCode_text,\n.addTogg_text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.goto_list {\n  background-color: transparent;\n  box-shadow: none;\n  border: none;\n  color: #181B20;\n  font-size: 14px;\n}\n\n.goto_list span {\n  color: #181B20;\n}\n\n.goto-link {\n  position: relative;\n  top: 8px;\n}\n\n.corporate_input__placeholder-icon {\n  position: relative;\n  width: 18px;\n  bottom: 28px;\n  left: 9px;\n}\n\n.b2c-list-user-table {\n  overflow-x: auto;\n}\n\n.b2c-list-user-table .ui.table {\n  width: calc(100% + 540px);\n}\n\n.date-field {\n  text-indent: 17px;\n}\n\n.ui.icon.input > i.icon {\n  opacity: 1;\n  z-index: 1;\n  top: 10px;\n}\n\n.ui.icon.input > i.icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.ui.icon.input > i.icon .bookings_input__placeholder-icon.cal {\n  width: 16px;\n  margin-top: 0px;\n}\n\n.ui.icon.input > i.icon .bookings_input__placeholder-icon.call {\n  width: 10px;\n  margin-top: 0px;\n}\n\n.ui.icon.input > i.icon .bookings_input__placeholder-icon.calender {\n  width: 18px;\n  margin-top: 10px;\n}\n\n.bookings_pickers .input {\n  z-index: 0;\n}\n\n.bookings_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n\n.bookings_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n\n.bookings_pickers .input .search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.bookings_pickers .input .search.dropdown .search {\n  margin-left: 42px !important;\n}\n\n.bookings_pickers .input .search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n\n.detail-segment {\n  margin-bottom: 0px;\n}\n\n.search-section {\n  padding: 0px 30px;\n  text-align: right;\n}\n\n.search-section .eight.wide.field .main_head {\n  text-align: left;\n  font-weight: 500 !important;\n  font-size: 13px;\n  line-height: 15px;\n  color: #1B1F26;\n}\n\n.search-section .list-code {\n  text-align: left;\n  margin: 0 auto 20px;\n  padding-left: 0px;\n}\n\n.listCodeWrapper {\n  padding: 0px;\n}\n\n.listCodeWrapper > .ui.form {\n  padding: 20px 8px;\n}\n\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n\n.ui.form .three.wide.field,\n.ui.form .field > .checkbox-field,\n.ui.form .five.wide.field,\n.ui.form .six.wide.field,\n.ui.form .eight.wide.field,\n.four.wide.field {\n  margin-bottom: 12px;\n}\n\n.ui.form .search-section .eight.wide.field {\n  margin-bottom: 0px;\n  padding: 0px;\n}\n\n.ui.form.list-code-ui .search-section {\n  margin-bottom: 24px;\n}\n\n.detail-segment {\n  padding: 0;\n  margin-top: 0;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 160px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 10px;\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: 0px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.list-code-block {\n  margin: 24px;\n  padding-bottom: 48px;\n}\n\n.ui.form .eight.wide.field.list-code {\n  margin-left: 0px;\n}\n\n.listCodeWrapper .ui.form {\n  padding: 12px 0px 0px !important;\n}\n\n.save-btn-block button {\n  float: right;\n}\n\n@media (max-width: 1440px) {\n  .outer .air-title {\n    margin-left: 24px;\n  }\n\n  .ui.form .tourCode_btn {\n    margin-right: 0px;\n  }\n  .ui.form .bookings_btn-panel.list-code {\n    padding-left: 0px;\n  }\n  .ui.form .eight.wide.field.list-code {\n    width: auto;\n    margin: 0px;\n  }\n\n  .list-code-block {\n    width: auto;\n    margin: 24px;\n  }\n}\n\n@media (max-width: 1280px) {\n  .outer .air-title {\n    margin-left: 20px;\n  }\n\n  .result-block {\n    width: auto;\n    margin: 20px;\n  }\n\n  .listCodeWrapper {\n    padding: 0px 10px;\n  }\n}\n\n@media (max-width: 767px) {\n  .ui.container {\n    margin: 0px !important;\n  }\n\n  .search-section .eight.wide.field .main_head {\n    margin-bottom: 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vYWlybGluZS1kZWFscy90b3VyY29kZS9FOlxcQmVsYWxcXHByb2plY3RzXFxwcm9kdWN0aW9uLWJ1aWxkXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHNldHVwLWNvbmZpZ3VyYXRpb25cXGFpcmxpbmUtZGVhbHNcXHRvdXJjb2RlXFx0b3VyY29kZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vYWlybGluZS1kZWFscy90b3VyY29kZS90b3VyY29kZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0NBQUE7RUFDQSx3Q0FBQTtBQ0NKOztBREVBO0VBQ0ksK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSw0Q0FBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7O0VBRUksV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREFJO0VBQ0ksY0FBQTtBQ0VSOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURBSTtFQUNJLHlCQUFBO0FDRVI7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBRE1BO0VBQ0ksVUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDSEo7O0FESUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0ZSOztBREdRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNEWjs7QURHUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDRFo7O0FER1E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNEWjs7QURNQTtFQUNJLFVBQUE7QUNISjs7QURJSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUNGUjs7QURJSTtFQUNJLHdCQUFBO0VBQ0EsMENBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDRlI7O0FEZ0JJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FDZFI7O0FEZVE7RUFDSSw0QkFBQTtBQ2JaOztBRGVRO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7QUNiWjs7QURrQkE7RUFDSSxrQkFBQTtBQ2ZKOztBRGtCQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNmSjs7QURnQkk7RUFDSSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ2RSOztBRGdCSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ2RSOztBRGtCQTtFQUNJLFlBQUE7QUNmSjs7QURnQkk7RUFDSSxpQkFBQTtBQ2RSOztBRGtCQTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ2ZKOztBRGtCQTs7Ozs7O0VBTUksbUJBQUE7QUNmSjs7QURrQkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNmSjs7QURtQkk7RUFDSSxtQkFBQTtBQ2hCUjs7QURvQkE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtBQ2pCSjs7QURvQkE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FDakJKOztBRHFCQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ2xCSjs7QURxQkE7RUFDSSxtQkFBQTtBQ2xCSjs7QURxQkE7RUFFSSxZQUFBO0VBQ0Esb0JBQUE7QUNuQko7O0FEc0JBO0VBRUksZ0JBQUE7QUNwQko7O0FEdUJBO0VBQ0ksZ0NBQUE7QUNwQko7O0FENEJJO0VBQ0ksWUFBQTtBQ3pCUjs7QUQ2QkE7RUFDSTtJQUNJLGlCQUFBO0VDMUJOOztFRDZCTTtJQUNJLGlCQUFBO0VDMUJWO0VENEJNO0lBQ0ksaUJBQUE7RUMxQlY7RUQ0Qk07SUFDSSxXQUFBO0lBQ0EsV0FBQTtFQzFCVjs7RUQ2QkU7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQzFCTjtBQUNGOztBRDZCQTtFQUNJO0lBQ0ksaUJBQUE7RUMzQk47O0VENkJFO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUMxQk47O0VENEJFO0lBQ0ksaUJBQUE7RUN6Qk47QUFDRjs7QUQ0QkE7RUFDSTtJQUNJLHNCQUFBO0VDMUJOOztFRDZCTTtJQUNJLG1CQUFBO0VDMUJWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc2V0dXAtY29uZmlndXJhdGlvbi9haXJsaW5lLWRlYWxzL3RvdXJjb2RlL3RvdXJjb2RlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGVyIHtcclxuICAgIG1hcmdpbjogMHB4IDIwcHggMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5haXJsaW5lX3RpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLm1lbnU+Lml0ZW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI4NTcxNDI5cmVtIDAgMCAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLmJvdHRvbS5hdHRhY2hlZC5hY3RpdmUudGFiLnNlZ21lbnQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbn1cclxuXHJcbi50YWIuc2VnbWVudCB7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjRTBFMEUwO1xyXG59XHJcblxyXG4udG91ckNvZGVfdGV4dCxcclxuLmFkZFRvZ2dfdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmdvdG9fbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogIzE4MUIyMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAjMTgxQjIwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZ290by1saW5rIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogOHB4O1xyXG59XHJcblxyXG4uY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgYm90dG9tOiAyOHB4O1xyXG4gICAgbGVmdDogOXB4O1xyXG59XHJcblxyXG4uYjJjLWxpc3QtdXNlci10YWJsZSB7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgLnVpLnRhYmxlIHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlICsgNTQwcHgpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZGF0ZS1maWVsZCB7XHJcbiAgICB0ZXh0LWluZGVudDogMTdweDtcclxufVxyXG5cclxuLy8gLnVpLmZvcm0ge1xyXG4vLyAgICAgcGFkZGluZzogMjRweCAwcHg7XHJcbi8vIH1cclxuXHJcbi51aS5pY29uLmlucHV0PmkuaWNvbiB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgICYuY2FsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5jYWxsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5jYWxlbmRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IHtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICAmLmJvb2tpbmdzX2RhdGVwaWNrZXIge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMzhweFxyXG4gICAgfVxyXG4gICAgLnVpLmJhc2ljLmZsb2F0aW5nLmJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE1MiwgMTUyLCAxNTIsIDAuNikgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgICB9XHJcbiAgICAvLyAuaWNvbiB7XHJcbiAgICAvLyAgIG9wYWNpdHk6IDE7XHJcbiAgICAvLyAgIHotaW5kZXg6MDtcclxuICAgIC8vICAgLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuICAgIC8vICAgICB3aWR0aDogMjRweDtcclxuICAgIC8vICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAvLyAgICAgJi5jYWwge1xyXG4gICAgLy8gICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAvLyAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfVxyXG4gICAgLy8gfVxyXG4gICAgLnNlYXJjaC5kcm9wZG93biB7XHJcbiAgICAgICAgd2lkdGg6IDIxOHB4O1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIC5zZWFyY2gge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNDJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVmYXVsdC50ZXh0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDAgMCAzOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZGV0YWlsLXNlZ21lbnQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMHB4IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIC5laWdodC53aWRlLmZpZWxkIC5tYWluX2hlYWQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgICBjb2xvcjogIzFCMUYyNjtcclxuICAgIH1cclxuICAgIC5saXN0LWNvZGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmxpc3RDb2RlV3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICA+LnVpLmZvcm0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udWkuZm9ybSAuZmllbGQ+bGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgY29sb3I6ICMxODFCMjA7XHJcbiAgICBtYXJnaW46IDBweCAwcHggOHB4O1xyXG59XHJcblxyXG4udWkuZm9ybSAudGhyZWUud2lkZS5maWVsZCxcclxuLnVpLmZvcm0gLmZpZWxkPi5jaGVja2JveC1maWVsZCxcclxuLnVpLmZvcm0gLmZpdmUud2lkZS5maWVsZCxcclxuLnVpLmZvcm0gLnNpeC53aWRlLmZpZWxkLFxyXG4udWkuZm9ybSAuZWlnaHQud2lkZS5maWVsZCxcclxuLmZvdXIud2lkZS5maWVsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcblxyXG4udWkuZm9ybSAuc2VhcmNoLXNlY3Rpb24gLmVpZ2h0LndpZGUuZmllbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4udWkuZm9ybS5saXN0LWNvZGUtdWkge1xyXG4gICAgLnNlYXJjaC1zZWN0aW9uIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZGV0YWlsLXNlZ21lbnQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC8vIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYm90dG9tOiAxMDAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5saXN0LWNvZGUtYmxvY2sge1xyXG4gICAgLy8gd2lkdGg6IDExMDBweDtcclxuICAgIG1hcmdpbjogMjRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0OHB4O1xyXG59XHJcblxyXG4udWkuZm9ybSAuZWlnaHQud2lkZS5maWVsZC5saXN0LWNvZGUge1xyXG4gICAgLy8gd2lkdGg6IDExMDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLmxpc3RDb2RlV3JhcHBlciAudWkuZm9ybSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDBweCAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlc3VsdC1ibG9jayB7XHJcbi8vICAgICBwYWRkaW5nLWJvdHRvbTogNzJweCAhaW1wb3J0YW50O1xyXG4gfVxyXG5cclxuLnNhdmUtYnRuLWJsb2NrIHtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICAub3V0ZXIgLmFpci10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbiAgICB9XHJcbiAgICAudWkuZm9ybSB7XHJcbiAgICAgICAgLnRvdXJDb2RlX2J0biB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4OyAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib29raW5nc19idG4tcGFuZWwubGlzdC1jb2RlIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5laWdodC53aWRlLmZpZWxkLmxpc3QtY29kZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubGlzdC1jb2RlLWJsb2NrIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBtYXJnaW46IDI0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIC5vdXRlciAuYWlyLXRpdGxlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuICAgIC5yZXN1bHQtYmxvY2sge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgIH1cclxuICAgIC5saXN0Q29kZVdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6MHB4IDEwcHg7XHJcbiAgICB9XHJcbn0gXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC51aS5jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLXNlY3Rpb24ge1xyXG4gICAgICAgIC5laWdodC53aWRlLmZpZWxkIC5tYWluX2hlYWQge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5vdXRlciB7XG4gIG1hcmdpbjogMHB4IDIwcHggMHB4IDE1cHg7XG59XG5cbi5haXJsaW5lX3RpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cblxuLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4udWkudG9wLmF0dGFjaGVkLm1lbnUgPiAuaXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjg1NzE0MjlyZW0gMCAwIDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi51aS5ib3R0b20uYXR0YWNoZWQuYWN0aXZlLnRhYi5zZWdtZW50IHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxN3B4O1xufVxuXG4udGFiLnNlZ21lbnQge1xuICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuaHIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjRTBFMEUwO1xufVxuXG4udG91ckNvZGVfdGV4dCxcbi5hZGRUb2dnX3RleHQge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdvdG9fbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMTgxQjIwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZ290b19saXN0IHNwYW4ge1xuICBjb2xvcjogIzE4MUIyMDtcbn1cblxuLmdvdG8tbGluayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA4cHg7XG59XG5cbi5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxOHB4O1xuICBib3R0b206IDI4cHg7XG4gIGxlZnQ6IDlweDtcbn1cblxuLmIyYy1saXN0LXVzZXItdGFibGUge1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuLmIyYy1saXN0LXVzZXItdGFibGUgLnVpLnRhYmxlIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDU0MHB4KTtcbn1cblxuLmRhdGUtZmllbGQge1xuICB0ZXh0LWluZGVudDogMTdweDtcbn1cblxuLnVpLmljb24uaW5wdXQgPiBpLmljb24ge1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxO1xuICB0b3A6IDEwcHg7XG59XG4udWkuaWNvbi5pbnB1dCA+IGkuaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xuICB3aWR0aDogMjRweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLnVpLmljb24uaW5wdXQgPiBpLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbCB7XG4gIHdpZHRoOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4udWkuaWNvbi5pbnB1dCA+IGkuaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsbCB7XG4gIHdpZHRoOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4udWkuaWNvbi5pbnB1dCA+IGkuaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsZW5kZXIge1xuICB3aWR0aDogMThweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IHtcbiAgei1pbmRleDogMDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dC5ib29raW5nc19kYXRlcGlja2VyIHtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgbWF4LXdpZHRoOiAxMzhweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAudWkuYmFzaWMuZmxvYXRpbmcuYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogcmdiYSgxNTIsIDE1MiwgMTUyLCAwLjYpICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDExcHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnNlYXJjaC5kcm9wZG93biB7XG4gIHdpZHRoOiAyMThweDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuc2VhcmNoLmRyb3Bkb3duIC5zZWFyY2gge1xuICBtYXJnaW4tbGVmdDogNDJweCAhaW1wb3J0YW50O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5zZWFyY2guZHJvcGRvd24gLmRlZmF1bHQudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDhweCAwIDAgMzhweCAhaW1wb3J0YW50O1xufVxuXG4uZGV0YWlsLXNlZ21lbnQge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5zZWFyY2gtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDBweCAzMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5zZWFyY2gtc2VjdGlvbiAuZWlnaHQud2lkZS5maWVsZCAubWFpbl9oZWFkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBjb2xvcjogIzFCMUYyNjtcbn1cbi5zZWFyY2gtc2VjdGlvbiAubGlzdC1jb2RlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luOiAwIGF1dG8gMjBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5saXN0Q29kZVdyYXBwZXIge1xuICBwYWRkaW5nOiAwcHg7XG59XG4ubGlzdENvZGVXcmFwcGVyID4gLnVpLmZvcm0ge1xuICBwYWRkaW5nOiAyMHB4IDhweDtcbn1cblxuLnVpLmZvcm0gLmZpZWxkID4gbGFiZWwge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBjb2xvcjogIzE4MUIyMDtcbiAgbWFyZ2luOiAwcHggMHB4IDhweDtcbn1cblxuLnVpLmZvcm0gLnRocmVlLndpZGUuZmllbGQsXG4udWkuZm9ybSAuZmllbGQgPiAuY2hlY2tib3gtZmllbGQsXG4udWkuZm9ybSAuZml2ZS53aWRlLmZpZWxkLFxuLnVpLmZvcm0gLnNpeC53aWRlLmZpZWxkLFxuLnVpLmZvcm0gLmVpZ2h0LndpZGUuZmllbGQsXG4uZm91ci53aWRlLmZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLnVpLmZvcm0gLnNlYXJjaC1zZWN0aW9uIC5laWdodC53aWRlLmZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi51aS5mb3JtLmxpc3QtY29kZS11aSAuc2VhcmNoLXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4uZGV0YWlsLXNlZ21lbnQge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpZHRoOiAxNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGJvdHRvbTogMTAwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4ubGlzdC1jb2RlLWJsb2NrIHtcbiAgbWFyZ2luOiAyNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNDhweDtcbn1cblxuLnVpLmZvcm0gLmVpZ2h0LndpZGUuZmllbGQubGlzdC1jb2RlIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmxpc3RDb2RlV3JhcHBlciAudWkuZm9ybSB7XG4gIHBhZGRpbmc6IDEycHggMHB4IDBweCAhaW1wb3J0YW50O1xufVxuXG4uc2F2ZS1idG4tYmxvY2sgYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5vdXRlciAuYWlyLXRpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcbiAgfVxuXG4gIC51aS5mb3JtIC50b3VyQ29kZV9idG4ge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICB9XG4gIC51aS5mb3JtIC5ib29raW5nc19idG4tcGFuZWwubGlzdC1jb2RlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgfVxuICAudWkuZm9ybSAuZWlnaHQud2lkZS5maWVsZC5saXN0LWNvZGUge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogMHB4O1xuICB9XG5cbiAgLmxpc3QtY29kZS1ibG9jayB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiAyNHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5vdXRlciAuYWlyLXRpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuXG4gIC5yZXN1bHQtYmxvY2sge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxuXG4gIC5saXN0Q29kZVdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnVpLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5zZWFyY2gtc2VjdGlvbiAuZWlnaHQud2lkZS5maWVsZCAubWFpbl9oZWFkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/layout/setup-configuration/airline-deals/tourcode/tourcode.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/layout/setup-configuration/airline-deals/tourcode/tourcode.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: TourcodeComponent */

  /***/
  function srcAppLayoutSetupConfigurationAirlineDealsTourcodeTourcodeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TourcodeComponent", function () {
      return TourcodeComponent;
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


    var src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/setup-config/setup-config.service */
    "./src/app/shared/services/setup-config/setup-config.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/report/report.service */
    "./src/app/shared/services/report/report.service.ts");
    /* harmony import */


    var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/common.service */
    "./src/app/shared/services/common.service.ts");
    /* harmony import */


    var src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/utils/common */
    "./src/app/shared/utils/common.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../../../../../environments/environment */
    "./src/environments/environment.ts");

    var TourcodeComponent = /*#__PURE__*/function () {
      function TourcodeComponent(fb, AirlineDealService, toastr, reportService, commonService) {
        var _this19 = this;

        _classCallCheck(this, TourcodeComponent);

        this.fb = fb;
        this.AirlineDealService = AirlineDealService;
        this.toastr = toastr;
        this.reportService = reportService;
        this.commonService = commonService;
        this.showAddCode = true;
        this.showListCode = false;
        this.showSaveBtn = true;
        this.limit = 15;
        this.pageIndex = 1;
        this.pageAirline = 0;
        this.NewAirlineDeals = [];
        this.totalAirlineDeals = 0;
        this.pages = 0;
        this.airlines = [];
        this.suppliers = [];
        this.origins = [];
        this.destinations = [];
        this.rbdArrayList = [];
        this.airlineForm = {
          page: this.pageAirline
        };
        this.offset = 0;
        this.totalCount = 0;
        this.filterParams = {
          page: this.offset
        };
        this.airlinePage = 0;
        this.rbdArr = [];
        this.destArr = [];
        this.orgArr = [];
        this.supplierArr = [];
        this.toggleObj = {};
        this.newAddTourCodeForm = this.fb.group({
          tourcode_id: [''],
          airline: [''],
          supplier: [''],
          tourcode: [''],
          trip_type: [''],
          code_type: [''],
          cabin_class: [''],
          tourcode_name: [''],
          apply_type: [''],
          orgin: [''],
          destination: [''],
          rbd: [''],
          airline_commission: [''],
          shared_commission: [''],
          tour_commission: [''],
          sale_start_date: [''],
          sale_end_date: [''],
          travel_start_date: [''],
          travel_end_date: [''],
          mode: ['']
        });

        this.fetchAllAirportDetails = function () {
          _this19.commonService.getAirportsList().subscribe(function (res) {
            if (res.status) {
              // this.origins = res.result;
              _this19.destinations = res.result;
            } else {
              _this19.toastr.error("".concat(res.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        };
      }

      _createClass(TourcodeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fetchAllAirlineDeals(this.filterParams); // this.fetchAllAirportDetails();

          this.rbdArrayList = src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_7__["rbdArrayList"];
          this.fetchAllAirlines();
          this.fetchAllSuppliers();
          this.searchAirport();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.loadConfig();
          this.loadSaleEndDate();
          this.loadSaleStartDate();
          this.loadTravelStartDate();
          this.loadTravelEndDate();
        }
      }, {
        key: "fetchAllAirlineDeals",
        value: function fetchAllAirlineDeals(filterParams) {
          var _this20 = this;

          this.AirlineDealService.GetAllAirlines(this.filterParams).subscribe(function (res) {
            if (res.status) {
              _this20.totalCount = res.result.total;
              _this20.offset = res.result.page;
              res.result.data.map(function (ele) {
                if (ele.orgin) {
                  ele.orgin = JSON.parse(ele.orgin);
                }

                if (ele.destination) {
                  ele.destination = JSON.parse(ele.destination);
                }

                if (ele.rbd) {
                  ele.rbd = JSON.parse(ele.rbd);
                }

                if (ele.supplier) {
                  ele.supplier = JSON.parse(ele.supplier);
                }
              });
              _this20.NewAirlineDeals = res.result.data;
            } else {
              _this20.toastr.error("".concat(res.message), "".concat(res.message), {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "onClickAddCode",
        value: function onClickAddCode() {
          this.loadConfig();
          this.loadSaleEndDate();
          this.loadSaleStartDate();
          this.loadTravelStartDate();
          this.loadTravelEndDate();
          this.showAddCode = false;
          this.showListCode = true;
          this.showSaveBtn = true;
          this.newAddTourCodeForm.reset();
        }
      }, {
        key: "onClickListCode",
        value: function onClickListCode() {
          this.loadConfig();
          this.newAddTourCodeForm.reset();
          this.showAddCode = true;
          this.showListCode = false;
        }
      }, {
        key: "fetchAllSuppliers",
        value: function fetchAllSuppliers() {
          var _this21 = this;

          this.commonService.getSupplierList().subscribe(function (res) {
            if (res.type != 'error') {
              _this21.suppliers = res.listData;
            } else {
              _this21.toastr.error("".concat(res.msg), "".concat(res.msg), {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "fetchAllAirlines",
        value: function fetchAllAirlines() {
          var _this22 = this;

          this.commonService.getAirlines().subscribe(function (result) {
            if (result.type == 'data') {
              _this22.airlines = result.airlines;
            } else {
              _this22.toastr.error("".concat(result.msg), "".concat(result.msg), {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "loadSaleStartDate",
        value: function loadSaleStartDate() {
          var scope = this;
          $(function () {
            $('input[name="sale_start_date"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1980,
              startDate: moment().subtract(90, 'day'),
              autoUpdateInput: false,
              maxYear: parseInt(moment().format('YYYY'), 10)
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.newAddTourCodeForm.get('sale_start_date').setValue(moment(start).format('DD/MM/YYYY'));
            });
          });
        }
      }, {
        key: "loadSaleEndDate",
        value: function loadSaleEndDate() {
          var scope = this;
          $(function () {
            $('input[name="sale_end_date"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1901,
              startDate: moment().subtract(90, 'day'),
              autoUpdateInput: false,
              maxYear: parseInt(moment().format('YYYY'), 10)
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.newAddTourCodeForm.get('sale_end_date').setValue(moment(start).format('DD/MM/YYYY'));
            });
          });
        }
      }, {
        key: "loadTravelStartDate",
        value: function loadTravelStartDate() {
          var scope = this;
          $(function () {
            $('input[name="travel_start_date"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1980,
              startDate: moment().subtract(90, 'day'),
              autoUpdateInput: false,
              maxYear: parseInt(moment().format('YYYY'), 10)
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.newAddTourCodeForm.get('travel_start_date').setValue(moment(start).format('DD/MM/YYYY'));
            });
          });
        }
      }, {
        key: "loadTravelEndDate",
        value: function loadTravelEndDate() {
          var scope = this;
          $(function () {
            $('input[name="travel_end_date"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1901,
              startDate: moment().subtract(90, 'day'),
              autoUpdateInput: false,
              maxYear: parseInt(moment().format('YYYY'), 10)
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.newAddTourCodeForm.get('travel_end_date').setValue(moment(start).format('DD/MM/YYYY'));
            });
          });
        }
      }, {
        key: "saveTourCode",
        value: function saveTourCode() {
          var _this23 = this;

          this.newAddTourCodeForm.patchValue({
            mode: "Add",
            tourcode_id: ""
          });
          this.AirlineDealService.addTourCodeSupplier(this.newAddTourCodeForm.value).subscribe(function (result) {
            if (result.status) {
              _this23.toastr.success("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });

              _this23.fetchAllAirlineDeals(_this23.filterParams);

              _this23.resetForm();
            } else {
              _this23.toastr.error("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "pageCallback",
        value: function pageCallback(event) {
          var offset = event.offset;
          this.filterParams.page = offset;
          this.fetchAllAirlineDeals(this.filterParams);
        }
      }, {
        key: "deleteTourCode",
        value: function deleteTourCode(valObj) {
          var _this24 = this;

          var tourcode_id = {};
          tourcode_id = {
            tourcode_id: valObj.tourcode_id
          };
          sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(function (result) {
            if (result.value) {
              _this24.AirlineDealService.deleteTourcode(tourcode_id).subscribe(function (result) {
                if (result.status) {
                  _this24.toastr.success("".concat(result.message), "", {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                  });
                } else {
                  _this24.toastr.error("".concat(result.message), "", {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                  });

                  _this24.fetchAllAirlineDeals(_this24.filterParams);
                }
              });
            }
          });
        }
      }, {
        key: "editTourCode",
        value: function editTourCode(valObj) {
          var _this25 = this;

          var airlineCommission = JSON.parse(valObj.rbd_commission).commission;
          var commissionMode = JSON.parse(valObj.rbd_commission).commissionmode;
          var sharedCommission = JSON.parse(valObj.rbd_commission).sharedcommission;
          console.log("valObj:typeof::", typeof valObj.rbd);
          valObj.rbd.forEach(function (element) {
            _this25.rbdArr.push(element.text);
          });
          valObj.destination.forEach(function (element) {
            _this25.destArr.push(element.text);
          });
          valObj.orgin.forEach(function (element) {
            _this25.orgArr.push(element.text);
          });
          this.loadConfig();
          this.showSaveBtn = false;
          this.showAddCode = false;
          this.showListCode = true;
          var uniqueOrgArr = new Set(this.orgArr);
          var uniqueDesArr = new Set(this.destArr);
          var uniqueRbdArr = new Set(this.rbdArr);
          this.newAddTourCodeForm.patchValue({
            tourcode_id: valObj.tourcode_id,
            airline: valObj.airline,
            supplier: valObj.supplier,
            tourcode: valObj.tourcode,
            trip_type: valObj.trip_type,
            code_type: valObj.code_type,
            cabin_class: valObj.cabin_class,
            tourcode_name: valObj.tourcode_name,
            apply_type: valObj.apply_type,
            orgin: _toConsumableArray(uniqueOrgArr),
            destination: _toConsumableArray(uniqueDesArr),
            rbd: _toConsumableArray(uniqueRbdArr),
            airline_commission: airlineCommission,
            shared_commission: sharedCommission,
            tour_commission: commissionMode,
            sale_start_date: valObj.sale_start_date,
            sale_end_date: valObj.sale_end_date,
            travel_start_date: valObj.travel_end_date,
            travel_end_date: valObj.travel_start_date
          });
        }
      }, {
        key: "updateTourCode",
        value: function updateTourCode() {
          var _this26 = this;

          this.newAddTourCodeForm.patchValue({
            mode: "Update"
          }); // console.log(this.newAddTourCodeForm.value);
          //     return;

          var tourcode_id = this.newAddTourCodeForm.value.tourcode_id;
          this.AirlineDealService.getUpdateTourCode(tourcode_id, this.newAddTourCodeForm.value).subscribe(function (result) {
            if (result.status) {
              _this26.toastr.success("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            } else {
              _this26.toastr.error("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }

            _this26.fetchAllAirlineDeals(_this26.filterParams);

            _this26.resetForm();
          });
        }
      }, {
        key: "resetForm",
        value: function resetForm() {
          this.newAddTourCodeForm.reset();
          this.onClickListCode();
        }
      }, {
        key: "loadConfig",
        value: function loadConfig() {
          var scope = this; // $(document).ready(function () {
          //   $('.menu .item').tab();
          //   $('.ui.dropdown').dropdown();
          //   $('.dropdown1').dropdown({ placeholder: "RBD", });
          //   $('.dropdown2').dropdown({ placeholder: "Choose suppliers", });
          //   $('.dropdown3').dropdown({ placeholder: "Choose airlines", });
          //   $('.dropdown4').dropdown({ placeholder: "Choose origin airports", });
          //   $('.dropdown5').dropdown({ placeholder: "Choose Destination airports", });
          // });

          $(document).ready(function () {
            $('.menu .item').tab();
            $('.ui.dropdown').dropdown();
            $('.dropdown1').dropdown({
              placeholder: "RBD"
            });
            $('.dropdown2').dropdown({
              placeholder: "Choose suppliers"
            });
            $('.dropdown3').dropdown({
              placeholder: "Choose airlines"
            });
            $('.dropdown4').dropdown({
              placeholder: "Choose origin airports"
            });
            $('.dropdown5').dropdown({
              placeholder: "Choose Destination airports"
            });
            this._globals = localStorage.getItem('_globals');
            var token = JSON.parse(this._globals).token;
            $('.ui.dropdown4').dropdown({
              type: 'category',
              minCharacters: 2,
              maxCharacters: 3,
              responseAsync: true,
              apiSettings: {
                url: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].serverURL + '/api/get-airports-cache/{query}',
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
        key: "statusToggle",
        value: function statusToggle(data) {
          var _this27 = this;

          this.toggleObj.id = data.tourcode_id;
          this.toggleObj.status = data.is_active;
          this.toggleObj.table = "tourcodes";
          this.AirlineDealService.onStatusToggle(this.toggleObj).subscribe(function (res) {
            if (res.status == 200) {
              _this27.fetchAllAirlineDeals(_this27.filterParams);
            } else {
              _this27.toastr.error("".concat(res.msg), "".concat(res.msg), {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "searchAirport",
        value: function searchAirport() {}
      }]);

      return TourcodeComponent;
    }();

    TourcodeComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_3__["SetupConfigService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_5__["ReportService"]
      }, {
        type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
      }];
    };

    TourcodeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tourcode',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./tourcode.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/airline-deals/tourcode/tourcode.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./tourcode.component.scss */
      "./src/app/layout/setup-configuration/airline-deals/tourcode/tourcode.component.scss"))["default"]]
    })], TourcodeComponent);
    /***/
  }
}]);
//# sourceMappingURL=airline-deals-airline-deals-module-es5.js.map