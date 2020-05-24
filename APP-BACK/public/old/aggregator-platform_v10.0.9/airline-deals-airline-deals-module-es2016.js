(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["airline-deals-airline-deals-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/airline-deals/airline-deals.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/airline-deals/airline-deals.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"outer animated fadeIn\">\r\n  <div class=\"outer__airline-list\">\r\n    <h3 class=\"air-title\">Airline Deals</h3>\r\n  </div>\r\n  <div class=\"ui top attached tabular menu\">\r\n    <div class=\"active item tourCode_title\" [class.active]=\"activeTab && tabName=='first-tab'\"\r\n      (click)=\"activateTab('first-tab')\"><span>Tour Code/ Deal code</span></div>\r\n    <div class=\"item commision_title\" [class.active]=\"activeTab && tabName=='second-tab'\"\r\n      (click)=\"activateTab('second-tab')\">Commission</div>\r\n      <div class=\"item commision_title\" [class.active]=\"activeTab && tabName=='third-tab'\"\r\n      (click)=\"activateTab('third-tab')\">Airline Routes</div>\r\n  </div>\r\n  <div class=\"ui bottom attached active tab segment tabContent-block\" [class.active]=\"activeTab && tabName=='first-tab'\">\r\n    <app-tourcode></app-tourcode>\r\n  </div>\r\n  <div class=\"ui bottom attached tab segment tabContent-block\" [class.active]=\"activeTab && tabName=='second-tab'\">\r\n    <app-commission></app-commission>\r\n  </div>\r\n  <div class=\"ui bottom attached tab segment tabContent-block\" [class.active]=\"activeTab && tabName=='third-tab'\">\r\n    <app-airline-routes></app-airline-routes>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/airline-deals/airline-routes/airline-routes.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/airline-deals/airline-routes/airline-routes.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui fluid container\">\r\n  <div class=\"ui form\" [ngClass]=\"{'list-code-ui': (showListCode) }\">\r\n    <div class=\"ui segment\">\r\n      <div class=\"two fields search-section\">\r\n        <div class=\"eight wide field\" *ngIf=\"showAddCode\">\r\n          <h4 class=\"ui header main_head\">Airline Routes</h4>\r\n        </div>\r\n        <div class=\"eight wide field bookings_btn-panel\" [ngClass]=\"{'list-code': (showListCode) }\">\r\n          <button class=\"ui primary button tourCode_btn\" tabindex=\"0\" (click)=\"onClickAddCode()\" *ngIf=\"showAddCode\">\r\n            Add Airline Routes\r\n          </button>\r\n          <a href=\"javascript:void(0)\" class=\"ui goto_list tourCode_btn\" tabindex=\"0\" (click)=\"onClickListCode()\"\r\n            *ngIf=\"showListCode\">\r\n            <span class=\"\">\r\n              <img src=\"../../../../../assets/icons/goto_link_arrow.svg\" class=\"goto-link\" />\r\n              Goto List Airline Routes\r\n            </span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"result-block\" [ngClass]=\"{'list-code-block': (showListCode) }\">\r\n        <div class=\"user-table-list b2c-list-user-table\" *ngIf=\"showAddCode\">\r\n          <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n            [rowHeight]=\"'auto'\" [rows]='allAirlineRoutes'\r\n            [externalPaging]=\"true\" [count]=\"totalCount\" [offset]=\"offset\" (page)=\"pageCallback($event)\">\r\n            <!-- <ngx-datatable-column name=\"User ID\" prop=\"created_by\">\r\n                            </ngx-datatable-column> -->\r\n\r\n            <ngx-datatable-column name=\"Trip Type\" prop=\"trip_type\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Origin\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <div *ngFor=\"let rows of row.origin\">\r\n                  {{rows.text}}\r\n                </div>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Destination\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <div *ngFor=\"let rows of row.destination\">\r\n                  {{rows.text}}\r\n                </div>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Preferred Airline\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <div *ngFor=\"let rows of row.routes\">\r\n                  {{rows.name}}\r\n                </div>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Created\" prop=\"created\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\">{{value | date: 'dd/MM/yyyy'}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Status\" prop=\"is_active\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\r\n                <span *ngIf=\"value == true\" (click)=\"statusToggle(row)\">\r\n                  <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>\r\n                  <!-- <i class=\"icon\">\r\n                    <img src=\"./.././../../../assets/icons/checkmark.png\"\r\n                      class=\"bookings_input__placeholder-icon cal\" />\r\n                  </i> -->\r\n                </span>\r\n                <span *ngIf=\"value == false\" (click)=\"statusToggle(row)\">\r\n                  <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                  <!-- <i class=\"icon\">\r\n                    <img src=\"./.././../../../assets/icons/cross.png\" class=\"bookings_input__placeholder-icon call\" />\r\n                  </i> -->\r\n                </span>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Edit\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template let-value=\"value\">\r\n                <span class=\"action\" title=\"Edit user\" (click)=\"editAirlineRoutes(row)\">\r\n                  <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n                  <!-- <i class=\"icon\">\r\n                    <img src=\"./../../../../../assets/icons/edit.png\" class=\"bookings_input__placeholder-icon cal\" />\r\n                  </i> -->\r\n                </span>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Delete\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template let-value=\"value\">\r\n                <ng-container *ngIf=\"row.is_deleted == 0\">\r\n                  <span class=\"action\" title=\"Delete\">\r\n                    <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    <!-- <i class=\"icon\" (click)=\"deleteAirlineRoutes(row)\">\r\n                      <img src=\"./../../../../../assets/icons/delete-button.png\"\r\n                        class=\"bookings_input__placeholder-icon cal\" />\r\n                    </i> -->\r\n                  </span>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"row.is_deleted == 1\">\r\n                  <span class=\"action\" title=\"Delete\">\r\n                    ---\r\n                  </span>\r\n                </ng-container>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n          </ngx-datatable>\r\n        </div>\r\n        <div class=\"listCodeWrapper\" *ngIf=\"showListCode\">\r\n          <form class=\"ui form\" #Form=\"ngForm\" [formGroup]=\"addAirlineRoutesForm\">\r\n            <div class=\"six fields\">\r\n              <div class=\"five wide field\">\r\n                <label>Organisations</label>\r\n                <select class=\"ui fluid search dropdown6\" formControlName=\"organisation_id\" name=\"organisation_id\">\r\n                  <option class=\"item\" *ngFor=\"let organisation of allPos\" value=\"{{organisation.organisation_id}}\">\r\n                    {{organisation.name}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Supplier</label>\r\n                <select class=\"ui fluid search dropdown2 multiple_search\" formControlName=\"supplier\" name=\"supplier\"\r\n                  multiple=\"\">\r\n                  <option class=\"item\" *ngFor=\"let supplier of suppliers\" value=\"{{supplier.name}}\">\r\n                    {{supplier.name}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Trip Type</label>\r\n                <select class=\"ui fluid search dropdown\" formControlName=\"trip_type\">\r\n                  <option class=\"item\" value=\"\">Trip Type</option>\r\n                  <option class=\"item\" value=\"All\">All</option>\r\n                  <option class=\"item\" value=\"One way\">One way</option>\r\n                  <option class=\"item\" value=\"Round Trip\">Round Trip</option>\r\n                  <option class=\"item\" value=\"Multi Trip\">Multi Trip</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <!-- <h3>You can add multiple tourcodes from here on clicking add more button</h3> -->\r\n            <div class=\"ui segment detail-segment\">\r\n              <div class=\"six fields\">\r\n                <div class=\"five wide field\" [ngClass]=\"{ 'is-invalid': isSubmitted && f.origin.errors }\">\r\n                  <label>\r\n                    Origin Airport\r\n                    <i class=\"fa fa-exclamation-circle tooltip\">\r\n                      <span class=\"tooltiptext\">\r\n                        Comma-separated list of airport code e.g. DXB, JED, LHR (Upper Case Only). Default ALL will be\r\n                        selected.\r\n                      </span>\r\n                    </i>\r\n                  </label>\r\n                  <select class=\"ui fluid search dropdown4 multiple_search\" formControlName=\"origin\" required\r\n                    multiple=\"\">\r\n                    <option class=\"item\" *ngFor=\"let org of origins\" value=\"{{org.AirportCode}}\">\r\n                      {{org.AirportCode}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"five wide field\" [ngClass]=\"{ 'is-invalid': isSubmitted && f.destination.errors }\">\r\n                  <label>\r\n                    Destination Airport\r\n                    <i class=\"fa fa-exclamation-circle tooltip\">\r\n                      <span class=\"tooltiptext\">\r\n                        Comma-separated list of airport code e.g. DXB, JED, LHR (Upper Case Only). Default ALL will be\r\n                        selected.\r\n                      </span>\r\n                    </i>\r\n                  </label>\r\n                  <select class=\"ui fluid search dropdown5 multiple_search\" formControlName=\"destination\" required\r\n                    multiple=\"\">\r\n                    <option class=\"item\" *ngFor=\"let dest of destinations\" value=\"{{dest.AirportCode}}\">\r\n                      {{dest.AirportCode}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"six fields\"> -->\r\n                <!-- <div class=\"six wide field\">\r\n                  <label>\r\n                    Airline\r\n                    <i class=\"fa fa-exclamation-circle tooltip\">\r\n                      <span class=\"tooltiptext\">\r\n                        Comma-separated list of class services e.g. N or N, Q, K (Upper Case Only). Default ALL will be\r\n                        selected.\r\n                      </span>\r\n                    </i>\r\n                  </label>\r\n                  <select class=\"ui fluid search dropdown3\" formControlName=\"airline\" name=\"airline\">\r\n                    <option class=\"item\" *ngFor=\"let airline of airlines\" value=\"{{airline.name}}\">{{airline.name}}\r\n                    </option>\r\n                  </select>\r\n                </div> -->\r\n              <!-- </div> -->\r\n              <div class=\"fields\">\r\n                <div class=\"six wide field input-tagbased mb-0\">\r\n                  <label>Preferred Airlines</label>\r\n                  <mat-form-field style=\"width: 100%;top: -10px;\" class=\"example-chip-list\">\r\n                    <mat-chip-list #chipList>\r\n                      <mat-chip *ngFor=\"let val of this.addAirlineRoutesForm.value.routes\" [selectable]=\"selectable\"\r\n                        [removable]=\"removable\" (removed)=\"remove(val,1)\">\r\n                        {{val.name |uppercase}}\r\n                        <mat-icon matChipRemove *ngIf=\"removable\">x</mat-icon>\r\n                      </mat-chip>\r\n                    </mat-chip-list>\r\n                    <input [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n                      [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event,1)\">\r\n                    <mat-error>Atleast 1 name need to be added</mat-error>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n            <div class=\"bookings_btn-panel save-btn-block\" *ngIf=\"showListCode\">\r\n              <button class=\"ui primary button tourCode_btn fluid\" *ngIf=\"showSaveBtn\" (click)=\"saveAirlineRoutes()\">\r\n                <span class=\"tourCode_text\">Save</span>\r\n              </button>\r\n              <button class=\"ui primary button tourCode_btn fluid\" *ngIf=\"!showSaveBtn\" (click)=\"updateAirlineRoutes()\">\r\n                <span class=\"tourCode_text\">Update</span>\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/airline-deals/commission/commission.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/airline-deals/commission/commission.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui fluid container\">\r\n  <div class=\"ui form\" [ngClass]=\"{'list-code-ui': (showListCommision) }\">\r\n    <div class=\"ui segment\">\r\n      <div class=\"two fields search-section\">\r\n        <div class=\"eight wide field\" *ngIf=\"showAddCommision\">\r\n          <h4 class=\"ui header main_head\">Commission</h4>\r\n        </div>\r\n        <div class=\"eight wide field bookings_btn-panel\" [ngClass]=\"{'list-code': (showListCommision) }\">\r\n          <button class=\"ui primary button addTogg_btn\" tabindex=\"0\" (click)=\"onAddCommision()\"\r\n            *ngIf=\"showAddCommision\">\r\n            Add Commission\r\n          </button>\r\n          <a href=\"javascript:void(0)\" class=\"ui goto_list addTogg_btn\" tabindex=\"0\" (click)=\"onListCommission()\"\r\n            *ngIf=\"showListCommision\">\r\n            <span class=\"\">\r\n              <img src=\"../../../../../assets/icons/goto_link_arrow.svg\" class=\"goto-link\" />\r\n              Goto List Commission\r\n            </span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"result-block\" [ngClass]=\"{'list-code-block': (showAddCommision) }\">\r\n        <div class=\"user-table-list b2c-list-user-table\" *ngIf=\"showAddCommision\">\r\n          <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n            [rowHeight]=\"'auto'\" [rows]='NewAirlineCommission' [externalPaging]=\"true\" [count]=\"totalCount\" [offset]=\"offset\"\r\n            (page)=\"pageCallback($event)\">\r\n            <ngx-datatable-column name=\"Airline\" prop=\"airline\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Trip Type\" prop=\"trip_type\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Cabin Class\" prop=\"cabin_class\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Suppier\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <div *ngFor=\"let rows of row.supplier\">\r\n                  {{rows}}\r\n                </div>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Origin\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <div *ngFor=\"let rows of row.orgin\">\r\n                  {{rows.text}}\r\n                </div>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Destination\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <div *ngFor=\"let rows of row.destination\">\r\n                  {{rows.text}}\r\n                </div>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"RBD\" prop=\"rbd\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <ng-container *ngFor=\"let rows of row.rbd; let in = index;\">\r\n                  {{rows.text}} {{((row.rbd.length - in)\r\n                                    < row.rbd.length)? ',': ''}} </ng-container>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Sale Start Date\" prop=\"sale_start_date\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Sale End Date\" prop=\"sale_end_date\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Travel Start Date\" prop=\"travel_start_date\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Travel End Date\" prop=\"travel_end_date\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Created\" prop=\"created\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\">{{value | date: 'dd/MM/yyyy'}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Status\" prop=\"is_active\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\r\n                <span *ngIf=\"value == true\" (click)=\"statusToggle(row)\">\r\n                  <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>\r\n                  <!-- <i class=\"icon\">\r\n                    <img src=\"./../../../../../assets/icons/checkmark.png\"\r\n                      class=\"bookings_input__placeholder-icon cal\" />\r\n                  </i> -->\r\n                </span>\r\n                <span *ngIf=\"value == false\" (click)=\"statusToggle(row)\">\r\n                  <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                  <!-- <i class=\"icon\">\r\n                    <img src=\"./.././../../../assets/icons/cross.png\" class=\"bookings_input__placeholder-icon call\" />\r\n                  </i> -->\r\n                </span>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Edit\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template let-value=\"value\">\r\n                <span class=\"action\" (click)=\"editCommission(row)\">\r\n                  <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n                  <!-- <i class=\"icon\">\r\n                    <img src=\"./../../../../../assets/icons/edit.png\" class=\"bookings_input__placeholder-icon cal\" />\r\n                  </i> -->\r\n                </span>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Delete\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template let-value=\"value\">\r\n                <span class=\"action\" (click)=\"deleteCommission(row)\" title=\"Delete User\">\r\n                  <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                  <!-- <i class=\"icon\">\r\n                    <img src=\"./../../../../../assets/icons/delete-button.png\"\r\n                      class=\"bookings_input__placeholder-icon cal\" />\r\n                  </i> -->\r\n                </span>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n          </ngx-datatable>\r\n        </div>\r\n        <div class=\"listCodeWrapper\" *ngIf=\"showListCommision\">\r\n          <form class=\"ui form\" #Form=\"ngForm\" [formGroup]=\"newAddCommissionForm\">\r\n            <div class=\"six fields\">\r\n              <div class=\"five wide field\"\r\n                [ngClass]=\"{'error': ((submitted && fc.airline.errors) && fc.airline.errors.required)}\">\r\n                <label>Airline</label>\r\n                <select class=\"ui fluid search dropdown3\" formControlName=\"airline\" required name=\"airline\">\r\n                  <option class=\"item\" *ngFor=\"let airline of airlines\" value=\"{{airline.name}}\">{{airline.name}}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Select Supplier</label>\r\n                <select class=\"ui fluid search dropdown2 multiple_search\" formControlName=\"supplier\" name=\"supplier\"\r\n                  multiple=''>\r\n                  <option class=\"item\" *ngFor=\"let supplier of suppliers\" value=\"{{supplier.name}}\">\r\n                    {{supplier.name}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Cabin Class</label>\r\n                <select class=\"ui fluid search dropdown\" formControlName=\"cabin_class\" name=\"cabin_class\" required>\r\n                  <option class=\"item\" value=\"\">Cabin Class</option>\r\n                  <option class=\"item\" value=\"All\">All</option>\r\n                  <option class=\"item\" value=\"Economy/Coach\">Economy/Coach</option>\r\n                  <option class=\"item\" value=\"First Class\">First Class</option>\r\n                  <option class=\"item\" value=\"Bussiness\">Bussiness </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"six fields\">\r\n              <div class=\"five wide field\">\r\n                <label>Trip Type</label>\r\n                <select class=\"ui fluid search dropdown\" formControlName=\"trip_type\" name=\"trip_type\" required>\r\n                  <option class=\"item\" value=\"\">Trip Type</option>\r\n                  <option class=\"item\" value=\"All\">All</option>\r\n                  <option class=\"item\" value=\"One way\">One way</option>\r\n                  <option class=\"item\" value=\"Round Trip\">Round Trip</option>\r\n                  <option class=\"item\" value=\"Multi Trip\">Multi Trip</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Airline Commission<span class=\"mandatory\">*</span></label>\r\n                <input type=\"number\" name=\"commission\" placeholder=\"Airline Commission\" formControlName=\"commission\" value=\"\"\r\n                  required>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Commission Mode</label>\r\n                <select class=\"ui fluid selection dropdown\" formControlName=\"commissionmode\">\r\n                  <option value=\"\" selected hidden disabled>Commission Mode</option>\r\n                  <option value=\"by_percentage\">Percentage</option>\r\n                  <option value=\"by_amount\">Amount</option>\r\n                </select>\r\n                <!-- <input type=\"number\" name=\"commissionmode\" placeholder=\"Commission Mode\" formControlName=\"commissionmode\" required> -->\r\n              </div>\r\n            </div>\r\n            <div class=\"ui segment detail-segment\">\r\n              <div class=\"six fields\">\r\n                <div class=\"five wide field\">\r\n                  <label>\r\n                    Origin Airport\r\n                    <i class=\"fa fa-exclamation-circle tooltip\">\r\n                      <span class=\"tooltiptext\">\r\n                        Comma-separated list of airport code e.g. DXB, JED, LHR (Upper Case Only). Default ALL will be\r\n                        selected.\r\n                      </span>\r\n                    </i>\r\n                  </label>\r\n                  <select class=\"ui fluid search dropdown4 multiple_search\" formControlName=\"orgin\" name=\"orgin\"\r\n                    required multiple=\"\">\r\n                    <option value=\"\">Origin Airport </option>\r\n                    <option class=\"item\" *ngFor=\"let origin of origins\" value=\"{{origin.AirportCode}}\">\r\n                      {{origin.AirportCode}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"five wide field\">\r\n                  <label>\r\n                    Destination Airport\r\n                    <i class=\"fa fa-exclamation-circle tooltip\">\r\n                      <span class=\"tooltiptext\">\r\n                        Comma-separated list of airport code e.g. DXB, JED, LHR (Upper Case Only). Default ALL will be\r\n                        selected.\r\n                      </span>\r\n                    </i>\r\n                  </label>\r\n                  <select class=\"ui fluid search dropdown4 multiple_search\" formControlName=\"destination\"\r\n                    name=\"destination\" required multiple=\"\">\r\n                    <option value=\"\">Destination Airport </option>\r\n                    <option class=\"item\" *ngFor=\"let origin1 of origins\" value=\"{{origin1.AirportCode}}\">\r\n                      {{origin1.AirportCode}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"five wide field\">\r\n                  <label>\r\n                    RBD\r\n                    <i class=\"fa fa-exclamation-circle tooltip\">\r\n                      <span class=\"tooltiptext\">\r\n                        Comma-separated list of class of services e.g. N or N , Q , K (Upper Case Only). Default ALL\r\n                        will be selected.\r\n                      </span>\r\n                    </i>\r\n                  </label>\r\n                  <select name=\"rbd\" multiple=\"\" formControlName=\"rbd\"\r\n                    class=\"ui search fluid dropdown1 multiple_search\">\r\n                    <option class=\"item\" *ngFor=\"let rbd of rbdArrayList\" value=\"{{rbd}}\">\r\n                      {{rbd}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"six fields\">\r\n                <div class=\"five wide field bookings_pickers \">\r\n                  <label>Sale Start Date</label>\r\n                  <div class=\"ui left icon input\">\r\n                    <input type=\"text\" placeholder=\"sale start date\" formControlName=\"sale_start_date\"\r\n                      name=\"sale_start_date\" value=\"\" required />\r\n                    <i class=\"icon\">\r\n                      <img src=\"./../../../../assets/icons/calendar.svg\"\r\n                        class=\"bookings_input__placeholder-icon calender\" />\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"five wide field bookings_pickers \">\r\n                  <label>Sale End Date</label>\r\n                  <div class=\"ui left icon input \">\r\n                    <input type=\"text\" placeholder=\"sale start date\" formControlName=\"sale_end_date\"\r\n                      name=\"sale_end_date\" value=\"\" required />\r\n                    <i class=\"icon\">\r\n                      <img src=\"./../../../../assets/icons/calendar.svg\"\r\n                        class=\"bookings_input__placeholder-icon calender\" />\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"six fields\">\r\n                <div class=\"five wide field bookings_pickers \">\r\n                  <label>Travel Start Date</label>\r\n                  <div class=\"ui left icon input \">\r\n                    <input type=\"text\" placeholder=\"travel start date\" formControlName=\"travel_start_date\"\r\n                      name=\"travel_start_date\" value=\"\" required />\r\n                    <i class=\"icon\">\r\n                      <img src=\"./../../../../assets/icons/calendar.svg\"\r\n                        class=\"bookings_input__placeholder-icon calender\" />\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"five wide field bookings_pickers \">\r\n                  <label>Travel End Date</label>\r\n                  <div class=\"ui left icon input \">\r\n                    <input type=\"text\" placeholder=\"travel end date\" formControlName=\"travel_end_date\"\r\n                      name=\"travel_end_date\" value=\"\" required />\r\n                    <i class=\"icon\">\r\n                      <img src=\"./../../../../assets/icons/calendar.svg\"\r\n                        class=\"bookings_input__placeholder-icon calender\" />\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n                <!--future use-->\r\n                <!-- <div class=\"three wide field\">\r\n                    <button class=\"ui button tourCode_btn fluid\" (click)=\"addMultipleCommissions()\"\r\n                    *ngIf=\"i==(newAddCommissionForm.get('commissions')['controls'].length-1)\">\r\n                    <span class=\"tourCode_text\">Add</span>\r\n                    </button>\r\n                    <button class=\"ui button tourCode_btn fluid\" *ngIf=\"i!=0\">\r\n                    <span class=\"tourCode_text\">Edit</span>\r\n                    </button>\r\n                    <button class=\"ui button tourCode_btn fluid\" *ngIf=\"i!=0\" tabindex=\"0\" (click)=\"removeCommission(i)\">\r\n                    <span class=\"tourCode_text\">Del</span>\r\n                    </button>\r\n                </div> -->\r\n                <!--future use-->\r\n              </div>\r\n            </div>\r\n            <div class=\"bookings_btn-panel save-btn-block\" *ngIf=\"showListCommision\">\r\n              <button class=\"ui primary button commissionCode_btn fluid\" *ngIf=\"showSaveBtn\" (click)=\"addCommission()\">\r\n                <span class=\"tourCode_text\">Save</span>\r\n              </button>\r\n              <button class=\"ui primary button commissionCode_btn fluid\" *ngIf=\"!showSaveBtn\"\r\n                (click)=\"updateCommission()\">\r\n                <span class=\"tourCode_text\">Update</span>\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/airline-deals/tourcode/tourcode.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/airline-deals/tourcode/tourcode.component.html ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui fluid container\">\r\n  <div class=\"ui form\" [ngClass]=\"{'list-code-ui': (showListCode) }\">\r\n    <div class=\"ui segment\">\r\n      <div class=\"two fields search-section\">\r\n        <div class=\"eight wide field\" *ngIf=\"showAddCode\">\r\n          <h4 class=\"ui header main_head\">Tour Code / Deal Code</h4>\r\n        </div>\r\n        <div class=\"eight wide field bookings_btn-panel\" [ngClass]=\"{'list-code': (showListCode) }\">\r\n          <button class=\"ui primary button tourCode_btn\" tabindex=\"0\" (click)=\"onClickAddCode()\" *ngIf=\"showAddCode\">\r\n            Add Tour Code\r\n          </button>\r\n          <a href=\"javascript:void(0)\" class=\"ui goto_list tourCode_btn\" tabindex=\"0\" (click)=\"onClickListCode()\"\r\n            *ngIf=\"showListCode\">\r\n            <span class=\"\">\r\n              <img src=\"../../../../../assets/icons/goto_link_arrow.svg\" class=\"goto-link\" />\r\n              Goto List Tour Codes\r\n            </span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"result-block\" [ngClass]=\"{'list-code-block': (showListCode) }\">\r\n        <div class=\"user-table-list b2c-list-user-table\" *ngIf=\"showAddCode\">\r\n          <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n            [rowHeight]=\"'auto'\" [rows]='NewAirlineDeals'\r\n            [externalPaging]=\"true\" [count]=\"totalCount\" [offset]=\"offset\"  (page)=\"pageCallback($event)\">\r\n            <!-- <ngx-datatable-column name=\"User ID\" prop=\"created_by\">\r\n                          </ngx-datatable-column> -->\r\n            <ngx-datatable-column name=\"Tourcode Name\" prop=\"tourcode_name\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Airline\" prop=\"airline\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Trip Type\" prop=\"trip_type\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Code Type\" prop=\"code_type\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Cabin Type\" prop=\"cabin_class\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Supplier\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <div *ngFor=\"let rows of row.supplier\">\r\n                  {{rows}}\r\n                </div>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Origin\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <div *ngFor=\"let rows of row.orgin\">\r\n                  {{rows.text}}\r\n                </div>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Destination\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <div *ngFor=\"let rows of row.destination\">\r\n                  {{rows.text}}\r\n                </div>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Tour Code\" prop=\"tourcode\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"RBD\" prop=\"rbd\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                <ng-container *ngIf=\"row.rbd\">\r\n                  <ng-container *ngFor=\"let rows of row.rbd; let in = index;\">\r\n                    {{rows.text}} {{((row.rbd.length - in)\r\n                                      < row.rbd.length)? ',': ''}} </ng-container>\r\n                </ng-container>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Sale Start Date\" prop=\"sale_start_date\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\">{{value}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Sale End Date\" prop=\"sale_end_date\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\">{{value}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Travel Start Date\" prop=\"travel_start_date\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\">{{value}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Travel End Date\" prop=\"travel_end_date\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\">{{value}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Created\" prop=\"created\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\">{{value}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Status\" prop=\"is_active\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\r\n                <span *ngIf=\"value == true\" (click)=\"statusToggle(row)\">\r\n                  <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>\r\n                  <!-- <i class=\"icon\">\r\n                    <img src=\"./.././../../../assets/icons/checkmark.png\"\r\n                      class=\"bookings_input__placeholder-icon cal\" />\r\n                  </i> -->\r\n                </span>\r\n                <span *ngIf=\"value == false\" (click)=\"statusToggle(row)\">\r\n                  <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                  <!-- <i class=\"icon\">\r\n                    <img src=\"./.././../../../assets/icons/cross.png\" class=\"bookings_input__placeholder-icon call\" />\r\n                  </i> -->\r\n                </span>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Edit\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template let-value=\"value\">\r\n                <span class=\"action\" title=\"Edit user\" (click)=\"editTourCode(row)\">\r\n                  <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n                  <!-- <i class=\"icon\">\r\n                    <img src=\"./../../../../../assets/icons/edit.png\" class=\"bookings_input__placeholder-icon cal\" />\r\n                  </i> -->\r\n                </span>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Delete\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template let-value=\"value\">\r\n                <ng-container *ngIf=\"row.is_deleted == 0\">\r\n                  <span class=\"action\" title=\"Delete\">\r\n                    <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    <!-- <i class=\"icon\" (click)=\"deleteTourCode(row)\">\r\n                      <img src=\"./../../../../../assets/icons/delete-button.png\"\r\n                        class=\"bookings_input__placeholder-icon cal\" />\r\n                    </i> -->\r\n                  </span>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"row.is_deleted == 1\">\r\n                  <span class=\"action\" title=\"Delete\">\r\n                    ---\r\n                  </span>\r\n                </ng-container>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n          </ngx-datatable>\r\n        </div>\r\n        <div class=\"listCodeWrapper\" *ngIf=\"showListCode\">\r\n          <form class=\"ui form\" #Form=\"ngForm\" [formGroup]=\"newAddTourCodeForm\">\r\n            <div class=\"six fields\">\r\n              <div class=\"five wide field\">\r\n                <label>Supplier</label>\r\n                <select class=\"ui fluid search dropdown2 multiple_search\" formControlName=\"supplier\" name=\"supplier\"\r\n                  required multiple=\"\">\r\n                  <option class=\"item\" *ngFor=\"let supplier of suppliers\" value=\"{{supplier.name}}\">\r\n                    {{supplier.name}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Airline</label>\r\n                <select class=\"ui fluid search dropdown3\" formControlName=\"airline\" name=\"airline\" required>\r\n                  <option class=\"item\" *ngFor=\"let airline of airlines\" value=\"{{airline.name}}\">{{airline.name}}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Cabin Class</label>\r\n                <select class=\"ui fluid search dropdown\" formControlName=\"cabin_class\" required>\r\n                  <option class=\"item\" value=\"\">Cabin Class</option>\r\n                  <option class=\"item\" value=\"All\">All</option>\r\n                  <option class=\"item\" value=\"Economy/Coach\">Economy/Coach</option>\r\n                  <option class=\"item\" value=\"First Class\">First Class</option>\r\n                  <option class=\"item\" value=\"Bussiness\">Bussiness </option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"six fields\">\r\n              <div class=\"five wide field\">\r\n                <label>Trip Type</label>\r\n                <select class=\"ui fluid search dropdown\" formControlName=\"trip_type\" required>\r\n                  <option class=\"item\" value=\"\">Trip Type</option>\r\n                  <option class=\"item\" value=\"All\">All</option>\r\n                  <option class=\"item\" value=\"One way\">One way</option>\r\n                  <option class=\"item\" value=\"Round Trip\">Round Trip</option>\r\n                  <option class=\"item\" value=\"Multi Trip\">Multi Trip</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Code Type</label>\r\n                <select class=\"ui fluid search dropdown\" formControlName=\"code_type\" required>\r\n                  <option class=\"item\" value=\"\">Code Type</option>\r\n                  <option class=\"item\" value=\"Account Code\">Account Code</option>\r\n                  <option class=\"item\" value=\"Nego Fare\">Nego Fare</option>\r\n                  <option class=\"item\" value=\"Military Fares\">Military Fares</option>\r\n                </select>\r\n              </div>\r\n              <!--if account code is selected a new field for entering code-->\r\n              <!-- <div class=\"six wide field\">\r\n                <label>Acconut Code</label>\r\n                <input type=\"number\" name=\"airline_commission\" placeholder=\"Airline Commission\"\r\n                  formControlName=\"airline_commission\" required>\r\n              </div> -->\r\n            </div>\r\n            <div class=\"six fields\">\r\n              <div class=\"five wide field\">\r\n                <label>Tourcode Apply Type</label>\r\n                <select class=\"ui fluid search dropdown\" formControlName=\"apply_type\" required>\r\n                  <option class=\"item\" value=\"\">Tour code Apply Type</option>\r\n                  <option class=\"item\" value=\"4\">Search</option>\r\n                  <option class=\"item\" value=\"3\">Ticketing</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Tourcode Name<span class=\"mandatory\">*</span></label>\r\n                <input type=\"text\" name=\"tourcode_name\" formControlName=\"tourcode_name\" placeholder=\"Tour code name\"\r\n                  required>\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <label>Tourcode<span class=\"mandatory\">*</span></label>\r\n                <input type=\"text\" name=\"tourcode\" placeholder=\"Tour code\" formControlName=\"tourcode\" required>\r\n              </div>\r\n            </div>\r\n            <!-- <h3>You can add multiple tourcodes from here on clicking add more button</h3> -->\r\n            <div class=\"ui segment detail-segment\">\r\n              <div class=\"six fields\">\r\n                <div class=\"five wide field\">\r\n                  <label>\r\n                    Origin Airport\r\n                    <i class=\"fa fa-exclamation-circle tooltip\">\r\n                      <span class=\"tooltiptext\">\r\n                        Comma-separated list of airport code e.g. DXB, JED, LHR (Upper Case Only). Default ALL will be\r\n                        selected.\r\n                      </span>\r\n                    </i>\r\n                  </label>\r\n                  <select class=\"ui fluid search dropdown4 multiple_search\" formControlName=\"orgin\" required\r\n                    multiple=\"\">\r\n                    <option class=\"item\" *ngFor=\"let dest of destinations\" value=\"{{dest.AirportCode}}\">\r\n                      {{dest.AirportCode}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"five wide field\">\r\n                  <label>\r\n                    Destination Airport\r\n                    <i class=\"fa fa-exclamation-circle tooltip\">\r\n                      <span class=\"tooltiptext\">\r\n                        Comma-separated list of airport code e.g. DXB, JED, LHR (Upper Case Only). Default ALL will be\r\n                        selected.\r\n                      </span>\r\n                    </i>\r\n                  </label>\r\n                  <select class=\"ui fluid search dropdown4 multiple_search\" formControlName=\"destination\" required\r\n                    multiple=\"\">\r\n                    <option class=\"item\" *ngFor=\"let dest of destinations\" value=\"{{dest.AirportCode}}\">\r\n                      {{dest.AirportCode}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"six fields\">\r\n                <div class=\"five wide field\">\r\n                  <label>\r\n                    RBD\r\n                    <i class=\"fa fa-exclamation-circle tooltip\">\r\n                      <span class=\"tooltiptext\">\r\n                        Comma-separated list of class of services e.g. N or N , Q , K (Upper Case Only). Default ALL\r\n                        will be selected.\r\n                      </span>\r\n                    </i>\r\n                  </label>\r\n                  <!-- <input type=\"text\" name=\"rbd\" formControlName=\"rbd\" placeholder=\"RBD\"> -->\r\n                  <select name=\"rbd\" multiple=\"\" formControlName=\"rbd\"\r\n                    class=\"ui search fluid dropdown1 multiple_search\">\r\n                    <!-- <option>RBD</option> -->\r\n                    <option class=\"item\" *ngFor=\"let rbd of rbdArrayList\" value=\"{{rbd}}\">\r\n                      {{rbd}}\r\n                    </option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"six fields\">\r\n                <div class=\"five wide field\">\r\n                  <label>Airline Commission</label>\r\n                  <input type=\"number\" name=\"airline_commission\" placeholder=\"Airline Commission\"\r\n                    formControlName=\"airline_commission\" required>\r\n                </div>\r\n                <div class=\"five wide field\">\r\n                  <label>Commission Mode</label>\r\n                  <select class=\"ui fluid selection dropdown\" formControlName=\"tour_commission\">\r\n                    <option value=\"\" selected hidden disabled>Commission Mode</option>\r\n                    <option value=\"by_percentage\">Percentage</option>\r\n                    <option value=\"by_amount\">Amount</option>\r\n                  </select>\r\n                  <!-- <input type=\"number\" name=\"tour_commission\" placeholder=\"Commission Mode\" formControlName=\"tour_commission\" required> -->\r\n                </div>\r\n                <div class=\"five wide field\">\r\n                  <label>Shared Commission (in %)</label>\r\n                  <input type=\"number\" name=\"sharedCommision\" formControlName=\"shared_commission\"\r\n                    placeholder=\"Shared Commission (%)\">\r\n                </div>\r\n              </div>\r\n              <div class=\"six fields\">\r\n                <div class=\"five wide field bookings_pickers \">\r\n                  <label>Sale Start Date</label>\r\n                  <div class=\"ui left icon input \">\r\n                    <input type=\"text\" placeholder=\"sale start date\" formControlName=\"sale_start_date\"\r\n                      name=\"sale_start_date\" value=\"\" required />\r\n                    <i class=\"icon\">\r\n                      <img src=\"./../../../../assets/icons/calendar.svg\"\r\n                        class=\"bookings_input__placeholder-icon calender\" />\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"five wide field bookings_pickers \">\r\n                  <label>Sale End Date</label>\r\n                  <div class=\"ui left icon input \">\r\n                    <input type=\"text\" placeholder=\"sale end date\" formControlName=\"sale_end_date\" name=\"sale_end_date\"\r\n                      value=\"\" required />\r\n                    <i class=\"icon\">\r\n                      <img src=\"./../../../../assets/icons/calendar.svg\"\r\n                        class=\"bookings_input__placeholder-icon calender\" />\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"six fields\">\r\n                <div class=\"five wide field bookings_pickers \">\r\n                  <label>Travel Outbound Start Date</label>\r\n                  <div class=\"ui left icon input\">\r\n                    <input type=\"text\" placeholder=\"Travel Start date\" formControlName=\"travel_start_date\"\r\n                      name=\"travel_start_date\" value=\"\" required />\r\n                    <i class=\"icon\">\r\n                      <img src=\"./../../../../assets/icons/calendar.svg\"\r\n                        class=\"bookings_input__placeholder-icon calender\" />\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n                <div class=\"five wide field bookings_pickers \">\r\n                  <label>Travel Outbound End Date</label>\r\n                  <div class=\"ui left icon input \">\r\n                    <input type=\"text\" placeholder=\"travel end date\" formControlName=\"travel_end_date\"\r\n                      name=\"travel_end_date\" value=\"\" required />\r\n                    <i class=\"icon\">\r\n                      <img src=\"./../../../../assets/icons/calendar.svg\"\r\n                        class=\"bookings_input__placeholder-icon calender\" />\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n                <!--future use-->\r\n                <!-- <div class=\"three wide field\">\r\n                                  <button class=\"ui button tourCode_btn fluid\" (click)=\"addMultipleTour()\"\r\n                                  *ngIf=\"i==(newAddTourCodeForm.get('codes')['controls'].length-1)\">\r\n                                  <span class=\"tourCode_text\">Add</span>\r\n                                  </button>\r\n                                  <button class=\"ui button tourCode_btn fluid\" *ngIf=\"i!=0\">\r\n                                  <span class=\"tourCode_text\">Edit</span>\r\n                                  </button>\r\n                                  <button class=\"ui button tourCode_btn fluid\" *ngIf=\"i!=0\" tabindex=\"0\" (click)=\"removeTour(i)\">\r\n                                  <span class=\"tourCode_text\">Del</span>\r\n                                  </button>\r\n                              </div> -->\r\n                <!--future use-->\r\n              </div>\r\n            </div>\r\n            <div class=\"bookings_btn-panel save-btn-block\" *ngIf=\"showListCode\">\r\n              <button class=\"ui primary button tourCode_btn fluid\" *ngIf=\"showSaveBtn\" (click)=\"saveTourCode()\">\r\n                <span class=\"tourCode_text\">Save</span>\r\n              </button>\r\n              <button class=\"ui primary button tourCode_btn fluid\" *ngIf=\"!showSaveBtn\" (click)=\"updateTourCode()\">\r\n                <span class=\"tourCode_text\">Update</span>\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/layout/setup-configuration/airline-deals/airline-deals-routing.module.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/airline-deals/airline-deals-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: AirlineDealsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineDealsRoutingModule", function() { return AirlineDealsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _airline_deals_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./airline-deals.component */ "./src/app/layout/setup-configuration/airline-deals/airline-deals.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: '', component: _airline_deals_component__WEBPACK_IMPORTED_MODULE_1__["AirlineDealsComponent"] }
];
let AirlineDealsRoutingModule = class AirlineDealsRoutingModule {
};
AirlineDealsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AirlineDealsRoutingModule);



/***/ }),

/***/ "./src/app/layout/setup-configuration/airline-deals/airline-deals.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/airline-deals/airline-deals.component.scss ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ui.top.attached.tabular.menu {\n  margin: 24px 24px !important;\n  padding: 0px !important;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\n.air_title {\n  margin: 0;\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n}\n\n.ui.tabular.menu .active.item span {\n  font-weight: 600 !important;\n}\n\n.outer .air-title {\n  margin-left: 24px;\n  font-style: normal;\n  font-weight: 700 !important;\n  font-size: 20px;\n  line-height: 23px;\n  color: #181B20;\n}\n\n.align_table {\n  margin: 24px !important;\n  padding: 24px !important;\n}\n\n@media (max-width: 1440px) {\n  .outer .air-title {\n    margin-left: 24px;\n  }\n}\n\n@media (max-width: 1280px) {\n  .outer .air-title {\n    margin-left: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vYWlybGluZS1kZWFscy9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHNldHVwLWNvbmZpZ3VyYXRpb25cXGFpcmxpbmUtZGVhbHNcXGFpcmxpbmUtZGVhbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zZXR1cC1jb25maWd1cmF0aW9uL2FpcmxpbmUtZGVhbHMvYWlybGluZS1kZWFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNPLDRCQUFBO0VBQ0EsdUJBQUE7QUNDUDs7QURFQTtFQUNJLGtDQUFBO0VBQ0Esd0NBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQ0NKOztBREVBO0VBQ0ksNENBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLDJCQUFBO0FDQ0o7O0FESUk7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDRFI7O0FES0E7RUFDSSx1QkFBQTtFQUNBLHdCQUFBO0FDRko7O0FES0E7RUFDSTtJQUNJLGlCQUFBO0VDRk47QUFDRjs7QURLQTtFQUNJO0lBQ0ksaUJBQUE7RUNITjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vYWlybGluZS1kZWFscy9haXJsaW5lLWRlYWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xyXG4gICAgICAgbWFyZ2luOiAyNHB4IDI0cHggICFpbXBvcnRhbnQ7XHJcbiAgICAgICBwYWRkaW5nOjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLm1lbnU+Lml0ZW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI4NTcxNDI5cmVtIDAgMCAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLmJvdHRvbS5hdHRhY2hlZC5hY3RpdmUudGFiLnNlZ21lbnQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbn1cclxuXHJcbi50YWIuc2VnbWVudCB7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuLmFpcl90aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxufVxyXG5cclxuLnVpLnRhYnVsYXIubWVudSAuYWN0aXZlLml0ZW0gc3BhbiB7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vdXRlciB7XHJcbiAgICAvLyBtYXJnaW46IDBweCAyMHB4IDBweCAxNXB4O1xyXG4gICAgLmFpci10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICAgICAgY29sb3I6ICMxODFCMjA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hbGlnbl90YWJsZXtcclxuICAgIG1hcmdpbjoyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIC5vdXRlciAuYWlyLXRpdGxlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjRweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgLm91dGVyIC5haXItdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgfVxyXG59ICIsIi51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcbiAgbWFyZ2luOiAyNHB4IDI0cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi51aS50b3AuYXR0YWNoZWQubWVudSA+IC5pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yODU3MTQyOXJlbSAwIDAgMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLnVpLmJvdHRvbS5hdHRhY2hlZC5hY3RpdmUudGFiLnNlZ21lbnQge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XG59XG5cbi50YWIuc2VnbWVudCB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4uYWlyX3RpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cblxuLnVpLnRhYnVsYXIubWVudSAuYWN0aXZlLml0ZW0gc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn1cblxuLm91dGVyIC5haXItdGl0bGUge1xuICBtYXJnaW4tbGVmdDogMjRweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGNvbG9yOiAjMTgxQjIwO1xufVxuXG4uYWxpZ25fdGFibGUge1xuICBtYXJnaW46IDI0cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjRweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5vdXRlciAuYWlyLXRpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAub3V0ZXIgLmFpci10aXRsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/layout/setup-configuration/airline-deals/airline-deals.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/airline-deals/airline-deals.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AirlineDealsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineDealsComponent", function() { return AirlineDealsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");



let AirlineDealsComponent = class AirlineDealsComponent {
    constructor() {
        this.activeTab = true;
        this.tabName = "first-tab";
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL;
    }
    ngOnInit() { }
    activateTab(name) {
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
};
AirlineDealsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-airline-deals',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./airline-deals.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/airline-deals/airline-deals.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./airline-deals.component.scss */ "./src/app/layout/setup-configuration/airline-deals/airline-deals.component.scss")).default]
    })
], AirlineDealsComponent);



/***/ }),

/***/ "./src/app/layout/setup-configuration/airline-deals/airline-deals.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/airline-deals/airline-deals.module.ts ***!
  \**********************************************************************************/
/*! exports provided: AirlineDealsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineDealsModule", function() { return AirlineDealsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _airline_deals_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./airline-deals.component */ "./src/app/layout/setup-configuration/airline-deals/airline-deals.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-moment */ "./node_modules/ngx-moment/__ivy_ngcc__/fesm2015/ngx-moment.js");
/* harmony import */ var _airline_deals_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./airline-deals-routing.module */ "./src/app/layout/setup-configuration/airline-deals/airline-deals-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tourcode_tourcode_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tourcode/tourcode.component */ "./src/app/layout/setup-configuration/airline-deals/tourcode/tourcode.component.ts");
/* harmony import */ var _commission_commission_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./commission/commission.component */ "./src/app/layout/setup-configuration/airline-deals/commission/commission.component.ts");
/* harmony import */ var src_app_access_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/access.module */ "./src/app/access.module.ts");
/* harmony import */ var _airline_routes_airline_routes_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./airline-routes/airline-routes.component */ "./src/app/layout/setup-configuration/airline-deals/airline-routes/airline-routes.component.ts");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");



















let AirlineDealsModule = class AirlineDealsModule {
};
AirlineDealsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_airline_deals_component__WEBPACK_IMPORTED_MODULE_1__["AirlineDealsComponent"], _tourcode_tourcode_component__WEBPACK_IMPORTED_MODULE_8__["TourcodeComponent"], _commission_commission_component__WEBPACK_IMPORTED_MODULE_9__["CommissionComponent"], _airline_routes_airline_routes_component__WEBPACK_IMPORTED_MODULE_11__["AirlineRoutesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _airline_deals_routing_module__WEBPACK_IMPORTED_MODULE_6__["AirlineDealsRoutingModule"],
            ngx_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            src_app_access_module__WEBPACK_IMPORTED_MODULE_10__["ApplicationAccess"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"]
        ],
        providers: []
    })
], AirlineDealsModule);



/***/ }),

/***/ "./src/app/layout/setup-configuration/airline-deals/airline-routes/airline-routes.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/airline-deals/airline-routes/airline-routes.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".outer {\n  margin: 0px 20px 0px 15px;\n}\n\n.airline_title {\n  margin: 0;\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #E0E0E0;\n}\n\n.tourCode_text,\n.addTogg_text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.goto_list {\n  background-color: transparent;\n  box-shadow: none;\n  border: none;\n  color: #181B20;\n  font-size: 14px;\n}\n\n.goto_list span {\n  color: #181B20;\n}\n\n.goto-link {\n  position: relative;\n  top: 8px;\n}\n\n.corporate_input__placeholder-icon {\n  position: relative;\n  width: 18px;\n  bottom: 28px;\n  left: 9px;\n}\n\n.b2c-list-user-table {\n  overflow-x: auto;\n}\n\n.b2c-list-user-table .ui.table {\n  width: calc(100% + 540px);\n}\n\n.date-field {\n  text-indent: 17px;\n}\n\n.ui.form .search-section {\n  padding: 0px;\n  margin: 0px 24px;\n}\n\n.ui.form .search-section .eight.wide.field {\n  padding: 0px;\n  margin-bottom: 0px;\n}\n\n.ui.form .search-section .list-code {\n  margin-left: 0px;\n}\n\n.icon {\n  opacity: 1;\n  z-index: 100;\n}\n\n.icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.icon .bookings_input__placeholder-icon.cal {\n  width: 16px;\n  margin-top: 0px;\n}\n\n.icon .bookings_input__placeholder-icon.call {\n  width: 10px;\n  margin-top: 0px;\n}\n\n.icon .bookings_input__placeholder-icon.calender {\n  width: 18px;\n  margin-top: 10px;\n}\n\n.bookings_pickers .input {\n  z-index: 0;\n}\n\n.bookings_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n\n.bookings_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n\n.bookings_pickers .input .search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.bookings_pickers .input .search.dropdown .search {\n  margin-left: 42px !important;\n}\n\n.bookings_pickers .input .search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n\n.ui.segment {\n  margin-bottom: 60px;\n}\n\n.search-section {\n  padding: 0px 30px;\n  text-align: right;\n}\n\n.search-section .eight.wide.field .main_head {\n  text-align: left;\n  font-weight: 500 !important;\n  font-size: 13px;\n  line-height: 15px;\n  color: #1B1F26;\n}\n\n.search-section .list-code {\n  text-align: left;\n  margin: 0 auto 20px;\n  padding-left: 0px;\n}\n\n.listCodeWrapper {\n  padding: 0px;\n}\n\n.listCodeWrapper > .ui.form {\n  padding: 20px 8px;\n}\n\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n\n.ui.form .three.wide.field,\n.ui.form .field > .checkbox-field,\n.ui.form .five.wide.field,\n.ui.form .six.wide.field,\n.ui.form .eight.wide.field,\n.four.wide.field {\n  margin-bottom: 12px;\n}\n\n.detail-segment {\n  padding: 0;\n  margin-top: 0;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 160px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 10px;\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: 0px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.list-code-block {\n  margin: 24px;\n}\n\n.ui.form .eight.wide.field.list-code {\n  width: 1100px !important;\n}\n\n.listCodeWrapper .ui.form {\n  padding: 12px 0px 0px !important;\n}\n\n.result-block {\n  padding-bottom: 72px !important;\n}\n\n.save-btn-block {\n  position: relative;\n  top: 32px;\n  right: -24px;\n}\n\n.save-btn-block button {\n  float: right;\n  margin-right: 24px;\n  margin-top: -32px;\n}\n\n.ui.form.list-code-ui .search-section {\n  margin-bottom: 24px;\n}\n\n@media (max-width: 1440px) {\n  .outer .air-title {\n    margin-left: 24px;\n  }\n\n  .ui.form {\n    padding: 30px 0px;\n  }\n  .ui.form .tourCode_btn {\n    margin-right: 0px;\n  }\n  .ui.form .bookings_btn-panel.list-code {\n    padding-left: 0px;\n  }\n  .ui.form .save-btn-block {\n    right: 28px;\n  }\n  .ui.form .save-btn-block button {\n    right: -4px;\n  }\n}\n\n@media (max-width: 1280px) {\n  .outer .air-title {\n    margin-left: 20px;\n  }\n\n  .result-block {\n    width: auto;\n    margin: 20px;\n  }\n\n  .listCodeWrapper {\n    padding: 0px 10px;\n  }\n\n  .ui.form .save-btn-block {\n    right: 164px;\n  }\n}\n\n.example-chip-list {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vYWlybGluZS1kZWFscy9haXJsaW5lLXJvdXRlcy9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHNldHVwLWNvbmZpZ3VyYXRpb25cXGFpcmxpbmUtZGVhbHNcXGFpcmxpbmUtcm91dGVzXFxhaXJsaW5lLXJvdXRlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vYWlybGluZS1kZWFscy9haXJsaW5lLXJvdXRlcy9haXJsaW5lLXJvdXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0NBQUE7RUFDQSx3Q0FBQTtBQ0NKOztBREVBO0VBQ0ksK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSw0Q0FBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7O0VBRUksV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREFJO0VBQ0ksY0FBQTtBQ0VSOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURBSTtFQUNJLHlCQUFBO0FDRVI7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBRElJO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FDRFI7O0FERVE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNBWjs7QURFUTtFQUNJLGdCQUFBO0FDQVo7O0FES0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ0ZKOztBREdJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNEUjs7QURFUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDQVo7O0FERVE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0FaOztBREVRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDQVo7O0FES0E7RUFDSSxVQUFBO0FDRko7O0FER0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDRFI7O0FER0k7RUFDSSx3QkFBQTtFQUNBLDBDQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQ0RSOztBRGVJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FDYlI7O0FEY1E7RUFDSSw0QkFBQTtBQ1paOztBRGNRO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7QUNaWjs7QURpQkE7RUFDSSxtQkFBQTtBQ2RKOztBRGlCQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUNkSjs7QURlSTtFQUNJLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDYlI7O0FEZUk7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNiUjs7QURpQkE7RUFDSSxZQUFBO0FDZEo7O0FEZUk7RUFDSSxpQkFBQTtBQ2JSOztBRGlCQTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ2RKOztBRGlCQTs7Ozs7O0VBTUksbUJBQUE7QUNkSjs7QURpQkE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtBQ2RKOztBRGlCQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7QUNkSjs7QURrQkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNmSjs7QURrQkE7RUFDSSxtQkFBQTtBQ2ZKOztBRGtCQTtFQUNJLFlBQUE7QUNmSjs7QURrQkE7RUFDSSx3QkFBQTtBQ2ZKOztBRGtCQTtFQUNJLGdDQUFBO0FDZko7O0FEa0JBO0VBQ0ksK0JBQUE7QUNmSjs7QURrQkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDZko7O0FEZ0JJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNkUjs7QURtQkk7RUFDSSxtQkFBQTtBQ2hCUjs7QURvQkE7RUFDSTtJQUNJLGlCQUFBO0VDakJOOztFRG1CRTtJQUNJLGlCQUFBO0VDaEJOO0VEaUJNO0lBQ0ksaUJBQUE7RUNmVjtFRGlCTTtJQUNJLGlCQUFBO0VDZlY7RURpQk07SUFDSSxXQUFBO0VDZlY7RURnQlU7SUFDSSxXQUFBO0VDZGQ7QUFDRjs7QURtQkE7RUFDSTtJQUNJLGlCQUFBO0VDakJOOztFRG1CRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VDaEJOOztFRGtCRTtJQUNJLGlCQUFBO0VDZk47O0VEa0JNO0lBQ0ksWUFBQTtFQ2ZWO0FBQ0Y7O0FEbUJBO0VBQ0ksV0FBQTtBQ2pCSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zZXR1cC1jb25maWd1cmF0aW9uL2FpcmxpbmUtZGVhbHMvYWlybGluZS1yb3V0ZXMvYWlybGluZS1yb3V0ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXIge1xyXG4gICAgbWFyZ2luOiAwcHggMjBweCAwcHggMTVweDtcclxufVxyXG5cclxuLmFpcmxpbmVfdGl0bGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQubWVudT4uaXRlbSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjg1NzE0MjlyZW0gMCAwIDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udWkuYm90dG9tLmF0dGFjaGVkLmFjdGl2ZS50YWIuc2VnbWVudCB7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxN3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTdweDtcclxufVxyXG5cclxuLnRhYi5zZWdtZW50IHtcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNFMEUwRTA7XHJcbn1cclxuXHJcbi50b3VyQ29kZV90ZXh0LFxyXG4uYWRkVG9nZ190ZXh0IHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZ290b19saXN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjMTgxQjIwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICMxODFCMjA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5nb3RvLWxpbmsge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBib3R0b206IDI4cHg7XHJcbiAgICBsZWZ0OiA5cHg7XHJcbn1cclxuXHJcbi5iMmMtbGlzdC11c2VyLXRhYmxlIHtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAudWkudGFibGUge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgKyA1NDBweCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kYXRlLWZpZWxkIHtcclxuICAgIHRleHQtaW5kZW50OiAxN3B4O1xyXG59XHJcblxyXG4udWkuZm9ybSB7XHJcbiAgICAvLyBwYWRkaW5nOiAyNHB4IDBweDtcclxuICAgIC5zZWFyY2gtc2VjdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDI0cHg7XHJcbiAgICAgICAgLmVpZ2h0LndpZGUuZmllbGQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxpc3QtY29kZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgJi5jYWwge1xyXG4gICAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmNhbGwge1xyXG4gICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmNhbGVuZGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQge1xyXG4gICAgei1pbmRleDogMDtcclxuICAgICYuYm9va2luZ3NfZGF0ZXBpY2tlciB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEzOHB4XHJcbiAgICB9XHJcbiAgICAudWkuYmFzaWMuZmxvYXRpbmcuYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMTUyLCAxNTIsIDE1MiwgMC42KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTFweDtcclxuICAgIH1cclxuICAgIC8vIC5pY29uIHtcclxuICAgIC8vICAgb3BhY2l0eTogMTtcclxuICAgIC8vICAgei1pbmRleDowO1xyXG4gICAgLy8gICAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgLy8gICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgLy8gICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIC8vICAgICAmLmNhbCB7XHJcbiAgICAvLyAgICAgICB3aWR0aDogMThweDtcclxuICAgIC8vICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbiAgICAuc2VhcmNoLmRyb3Bkb3duIHtcclxuICAgICAgICB3aWR0aDogMjE4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgLnNlYXJjaCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZWZhdWx0LnRleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMCAwIDM4cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS5zZWdtZW50IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAwcHggMzBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgLmVpZ2h0LndpZGUuZmllbGQgLm1haW5faGVhZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMUIxRjI2O1xyXG4gICAgfVxyXG4gICAgLmxpc3QtY29kZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubGlzdENvZGVXcmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgID4udWkuZm9ybSB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCA4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS5mb3JtIC5maWVsZD5sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICBjb2xvcjogIzE4MUIyMDtcclxuICAgIG1hcmdpbjogMHB4IDBweCA4cHg7XHJcbn1cclxuXHJcbi51aS5mb3JtIC50aHJlZS53aWRlLmZpZWxkLFxyXG4udWkuZm9ybSAuZmllbGQ+LmNoZWNrYm94LWZpZWxkLFxyXG4udWkuZm9ybSAuZml2ZS53aWRlLmZpZWxkLFxyXG4udWkuZm9ybSAuc2l4LndpZGUuZmllbGQsXHJcbi51aS5mb3JtIC5laWdodC53aWRlLmZpZWxkLFxyXG4uZm91ci53aWRlLmZpZWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi5kZXRhaWwtc2VnbWVudCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLnRvb2x0aXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLy8gZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3R0b206IDEwMCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLmxpc3QtY29kZS1ibG9jayB7XHJcbiAgICBtYXJnaW46IDI0cHg7XHJcbn1cclxuXHJcbi51aS5mb3JtIC5laWdodC53aWRlLmZpZWxkLmxpc3QtY29kZSB7XHJcbiAgICB3aWR0aDogMTEwMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5saXN0Q29kZVdyYXBwZXIgLnVpLmZvcm0ge1xyXG4gICAgcGFkZGluZzogMTJweCAwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZXN1bHQtYmxvY2sge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDcycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNhdmUtYnRuLWJsb2NrIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMzJweDtcclxuICAgIHJpZ2h0OiAtMjRweDtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMzJweDtcclxuICAgIH1cclxufVxyXG5cclxuLnVpLmZvcm0ubGlzdC1jb2RlLXVpIHtcclxuICAgIC5zZWFyY2gtc2VjdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgLm91dGVyIC5haXItdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG4gICAgfVxyXG4gICAgLnVpLmZvcm0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMHB4O1xyXG4gICAgICAgIC50b3VyQ29kZV9idG4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDsgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuYm9va2luZ3NfYnRuLXBhbmVsLmxpc3QtY29kZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2F2ZS1idG4tYmxvY2sge1xyXG4gICAgICAgICAgICByaWdodDogMjhweDtcclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAub3V0ZXIgLmFpci10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAucmVzdWx0LWJsb2NrIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICB9XHJcbiAgICAubGlzdENvZGVXcmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nOjBweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnVpLmZvcm0ge1xyXG4gICAgICAgIC5zYXZlLWJ0bi1ibG9jayB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxNjRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gXHJcblxyXG4uZXhhbXBsZS1jaGlwLWxpc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSIsIi5vdXRlciB7XG4gIG1hcmdpbjogMHB4IDIwcHggMHB4IDE1cHg7XG59XG5cbi5haXJsaW5lX3RpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cblxuLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4udWkudG9wLmF0dGFjaGVkLm1lbnUgPiAuaXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjg1NzE0MjlyZW0gMCAwIDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi51aS5ib3R0b20uYXR0YWNoZWQuYWN0aXZlLnRhYi5zZWdtZW50IHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxN3B4O1xufVxuXG4udGFiLnNlZ21lbnQge1xuICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuaHIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjRTBFMEUwO1xufVxuXG4udG91ckNvZGVfdGV4dCxcbi5hZGRUb2dnX3RleHQge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdvdG9fbGlzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMTgxQjIwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZ290b19saXN0IHNwYW4ge1xuICBjb2xvcjogIzE4MUIyMDtcbn1cblxuLmdvdG8tbGluayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA4cHg7XG59XG5cbi5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxOHB4O1xuICBib3R0b206IDI4cHg7XG4gIGxlZnQ6IDlweDtcbn1cblxuLmIyYy1saXN0LXVzZXItdGFibGUge1xuICBvdmVyZmxvdy14OiBhdXRvO1xufVxuLmIyYy1saXN0LXVzZXItdGFibGUgLnVpLnRhYmxlIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDU0MHB4KTtcbn1cblxuLmRhdGUtZmllbGQge1xuICB0ZXh0LWluZGVudDogMTdweDtcbn1cblxuLnVpLmZvcm0gLnNlYXJjaC1zZWN0aW9uIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweCAyNHB4O1xufVxuLnVpLmZvcm0gLnNlYXJjaC1zZWN0aW9uIC5laWdodC53aWRlLmZpZWxkIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4udWkuZm9ybSAuc2VhcmNoLXNlY3Rpb24gLmxpc3QtY29kZSB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi5pY29uIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTAwO1xufVxuLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcbiAgd2lkdGg6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbi5jYWwge1xuICB3aWR0aDogMTZweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbGwge1xuICB3aWR0aDogMTBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbGVuZGVyIHtcbiAgd2lkdGg6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCB7XG4gIHotaW5kZXg6IDA7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQuYm9va2luZ3NfZGF0ZXBpY2tlciB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIG1heC13aWR0aDogMTM4cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnVpLmJhc2ljLmZsb2F0aW5nLmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYmEoMTUyLCAxNTIsIDE1MiwgMC42KSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5zZWFyY2guZHJvcGRvd24ge1xuICB3aWR0aDogMjE4cHg7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnNlYXJjaC5kcm9wZG93biAuc2VhcmNoIHtcbiAgbWFyZ2luLWxlZnQ6IDQycHggIWltcG9ydGFudDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuc2VhcmNoLmRyb3Bkb3duIC5kZWZhdWx0LnRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHggMCAwIDM4cHggIWltcG9ydGFudDtcbn1cblxuLnVpLnNlZ21lbnQge1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuXG4uc2VhcmNoLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAwcHggMzBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uc2VhcmNoLXNlY3Rpb24gLmVpZ2h0LndpZGUuZmllbGQgLm1haW5faGVhZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgY29sb3I6ICMxQjFGMjY7XG59XG4uc2VhcmNoLXNlY3Rpb24gLmxpc3QtY29kZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMCBhdXRvIDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4ubGlzdENvZGVXcmFwcGVyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLmxpc3RDb2RlV3JhcHBlciA+IC51aS5mb3JtIHtcbiAgcGFkZGluZzogMjBweCA4cHg7XG59XG5cbi51aS5mb3JtIC5maWVsZCA+IGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgY29sb3I6ICMxODFCMjA7XG4gIG1hcmdpbjogMHB4IDBweCA4cHg7XG59XG5cbi51aS5mb3JtIC50aHJlZS53aWRlLmZpZWxkLFxuLnVpLmZvcm0gLmZpZWxkID4gLmNoZWNrYm94LWZpZWxkLFxuLnVpLmZvcm0gLmZpdmUud2lkZS5maWVsZCxcbi51aS5mb3JtIC5zaXgud2lkZS5maWVsZCxcbi51aS5mb3JtIC5laWdodC53aWRlLmZpZWxkLFxuLmZvdXIud2lkZS5maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5kZXRhaWwtc2VnbWVudCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG59XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDE2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgYm90dG9tOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5saXN0LWNvZGUtYmxvY2sge1xuICBtYXJnaW46IDI0cHg7XG59XG5cbi51aS5mb3JtIC5laWdodC53aWRlLmZpZWxkLmxpc3QtY29kZSB7XG4gIHdpZHRoOiAxMTAwcHggIWltcG9ydGFudDtcbn1cblxuLmxpc3RDb2RlV3JhcHBlciAudWkuZm9ybSB7XG4gIHBhZGRpbmc6IDEycHggMHB4IDBweCAhaW1wb3J0YW50O1xufVxuXG4ucmVzdWx0LWJsb2NrIHtcbiAgcGFkZGluZy1ib3R0b206IDcycHggIWltcG9ydGFudDtcbn1cblxuLnNhdmUtYnRuLWJsb2NrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDMycHg7XG4gIHJpZ2h0OiAtMjRweDtcbn1cbi5zYXZlLWJ0bi1ibG9jayBidXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMjRweDtcbiAgbWFyZ2luLXRvcDogLTMycHg7XG59XG5cbi51aS5mb3JtLmxpc3QtY29kZS11aSAuc2VhcmNoLXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5vdXRlciAuYWlyLXRpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcbiAgfVxuXG4gIC51aS5mb3JtIHtcbiAgICBwYWRkaW5nOiAzMHB4IDBweDtcbiAgfVxuICAudWkuZm9ybSAudG91ckNvZGVfYnRuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgfVxuICAudWkuZm9ybSAuYm9va2luZ3NfYnRuLXBhbmVsLmxpc3QtY29kZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIH1cbiAgLnVpLmZvcm0gLnNhdmUtYnRuLWJsb2NrIHtcbiAgICByaWdodDogMjhweDtcbiAgfVxuICAudWkuZm9ybSAuc2F2ZS1idG4tYmxvY2sgYnV0dG9uIHtcbiAgICByaWdodDogLTRweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAub3V0ZXIgLmFpci10aXRsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cblxuICAucmVzdWx0LWJsb2NrIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW46IDIwcHg7XG4gIH1cblxuICAubGlzdENvZGVXcmFwcGVyIHtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgfVxuXG4gIC51aS5mb3JtIC5zYXZlLWJ0bi1ibG9jayB7XG4gICAgcmlnaHQ6IDE2NHB4O1xuICB9XG59XG4uZXhhbXBsZS1jaGlwLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/layout/setup-configuration/airline-deals/airline-routes/airline-routes.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/airline-deals/airline-routes/airline-routes.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AirlineRoutesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirlineRoutesComponent", function() { return AirlineRoutesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/setup-config/setup-config.service */ "./src/app/shared/services/setup-config/setup-config.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/report/report.service */ "./src/app/shared/services/report/report.service.ts");
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");









let AirlineRoutesComponent = class AirlineRoutesComponent {
    constructor(fb, AirlineDealService, toastr, reportService, commonService) {
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
            page: this.offset,
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
        this.fetchAllAirportDetails = () => {
            this.commonService.getAirportsList()
                .subscribe((res) => {
                if (res.status) {
                    this.origins = res.result;
                    this.destinations = res.result;
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
    }
    ngOnInit() {
        this.initForm();
        this.fetchAllPOS({ limit: 1500 });
        this.fetchAllSuppliers();
        this.fetchAllAirportDetails();
        this.getAllAirlines();
        this.fetchAllAirlineRoutes(this.filterParams);
    }
    ngAfterViewInit() { this.loadConfig(); }
    get f() { return this.addAirlineRoutesForm.controls; }
    initForm() {
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
    onClickAddCode() {
        this.loadConfig();
        this.showAddCode = false;
        this.showListCode = true;
        this.showSaveBtn = true;
    }
    onClickListCode() {
        this.loadConfig();
        // this.addAirlineRoutesForm.reset();
        this.showAddCode = true;
        this.showListCode = false;
    }
    fetchAllSuppliers() {
        this.commonService.getSupplierList().subscribe((res) => {
            if (res.type == 'data') {
                this.suppliers = res.listData;
            }
            else {
                this.toastr.error(`${res.message}`, ``, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    }
    fetchAllPOS(params) {
        this.AirlineDealService.fetchAllPointofSale(params)
            .subscribe((res) => {
            if (res.status) {
                this.allPos = res.result.data;
            }
        }, err => {
            console.log('erer ', err);
        });
    }
    getAllAirlines() {
        this.commonService.getAirlines().subscribe((result) => {
            if (result.type == 'data') {
                this.airlines = result.airlines;
            }
            else {
                this.toastr.error(`${result.message}`, ``, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    }
    saveAirlineRoutes() {
        this.isSubmitted = true;
        if (this.addAirlineRoutesForm.invalid) {
            this.toastr.error(`Please fill Mandatory Fieilds`, ``, {
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
        this.AirlineDealService.addAirlineRoutes(this.addAirlineRoutesForm.value).subscribe((result) => {
            if (result.status) {
                this.toastr.success(`${result.message}`, ``, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
                this.fetchAllAirlineRoutes(this.filterParams);
                this.resetForm();
            }
            else {
                this.toastr.error(`${result.message}`, ``, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    }
    deleteAirlineRoutes(valObj) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                this.AirlineDealService.deleteAirlineRoutes({ routes_id: valObj.routes_id }).subscribe((result) => {
                    if (result.status) {
                        this.toastr.success(`${result.message}`, ``, {
                            timeOut: 1000,
                            progressBar: false,
                            positionClass: 'toast-bottom-right'
                        });
                        this.fetchAllAirlineRoutes(this.filterParams);
                    }
                    else {
                        this.toastr.error(`${result.message}`, ``, {
                            timeOut: 1000,
                            progressBar: false,
                            positionClass: 'toast-bottom-right'
                        });
                        // this.fetchAllAirlineDeals();
                    }
                });
            }
        });
    }
    editAirlineRoutes(valObj) {
        valObj.destination.forEach(element => {
            this.destArr.push(element.text);
        });
        valObj.origin.forEach(element => {
            this.orgArr.push(element.text);
        });
        valObj.routes.forEach(element => {
            this.pref_arr.push({ name: element.name });
        });
        valObj.supplier.forEach(element => {
            this.suppliers.push(element);
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
    updateAirlineRoutes() {
        this.addAirlineRoutesForm.patchValue({
            mode: "Update",
            routes_id: this.addAirlineRoutesForm.value.routes_id
        });
        this.AirlineDealService.getUpdateAirlineRoutes(this.addAirlineRoutesForm.value).subscribe((result) => {
            if (result.status) {
                this.toastr.success(`${result.message}`, ``, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
                this.fetchAllAirlineRoutes(this.filterParams);
            }
            else {
                this.toastr.error(`${result.message}`, ``, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
            // this.fetchAllAirlineDeals();
            this.resetForm();
        });
    }
    resetForm() {
        this.addAirlineRoutesForm.reset();
        this.onClickListCode();
    }
    loadConfig() {
        var scope = this;
        $(document).ready(function () {
            $('.menu .item').tab();
            $('.ui.dropdown').dropdown();
            $('.dropdown1').dropdown({ placeholder: "RBD", });
            $('.dropdown2').dropdown({ placeholder: "Choose suppliers", });
            $('.dropdown6').dropdown({ placeholder: "Choose Organisations", });
            $('.dropdown3').dropdown({ placeholder: "Choose airlines", });
            $('.dropdown4').dropdown({ placeholder: "Choose origin airports", });
            $('.dropdown5').dropdown({ placeholder: "Choose Destination airports", });
        });
    }
    statusToggle(data) {
        this.toggleObj.id = data.routes_id;
        this.toggleObj.status = data.is_active;
        this.toggleObj.table = "routes";
        console.log("data::::", data);
        this.AirlineDealService.onStatusToggle(this.toggleObj)
            .subscribe((res) => {
            if (res.status) {
                this.fetchAllAirlineRoutes(this.filterParams);
            }
            else {
                this.toastr.error(`${res.message}`, `${res.message}`, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    }
    fetchAllAirlineRoutes(filterParams) {
        this.AirlineDealService.getAllAirlineRoutes(this.filterParams).subscribe((result) => {
            if (result.status) {
                this.totalCount = result.result.total;
                this.offset = result.result.page;
                result.result.data.map(ele => {
                    if (ele.origin) {
                        ele.origin = JSON.parse(ele.origin);
                    }
                    if (ele.destination) {
                        ele.destination = JSON.parse(ele.destination);
                    }
                    if (ele.routes) {
                        ele.routes = JSON.parse(ele.routes);
                    }
                    // if (ele.supplier) {
                    //   ele.supplier = JSON.parse(ele.supplier);
                    // }
                });
                this.allAirlineRoutes = result.result.data;
            }
            else {
                this.toastr.error(`${result.message}`, ``, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    }
    add(event, chk) {
        const input = event.input;
        const value = event.value.toUpperCase();
        if ((value || '').trim()) {
            if (chk == 1)
                this.addAirlineRoutesForm.value.routes.push(({ name: value.trim() }));
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    remove(val, chk) {
        const index1 = this.addAirlineRoutesForm.value.routes.indexOf(val);
        if (true) {
            if (chk == 1)
                this.addAirlineRoutesForm.value.routes.splice(index1, 1);
        }
    }
    pageCallback(event) {
        let offset = event.offset;
        this.airlineForm.page = offset;
        this.fetchAllAirlineRoutes(this.filterParams);
    }
};
AirlineRoutesComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_3__["SetupConfigService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_5__["ReportService"] },
    { type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
];
AirlineRoutesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-airline-routes',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./airline-routes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/airline-deals/airline-routes/airline-routes.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./airline-routes.component.scss */ "./src/app/layout/setup-configuration/airline-deals/airline-routes/airline-routes.component.scss")).default]
    })
], AirlineRoutesComponent);



/***/ }),

/***/ "./src/app/layout/setup-configuration/airline-deals/commission/commission.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/airline-deals/commission/commission.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".outer {\n  margin: 0px 20px 0px 15px;\n}\n\n.airline_title {\n  margin: 0;\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #E0E0E0;\n}\n\n.tourCode_btn,\n.addTogg_btn {\n  border-radius: 3px;\n  width: auto !important;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.tourCode_text,\n.addTogg_text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.goto_list {\n  background-color: transparent;\n  box-shadow: none;\n  border: none;\n  color: #181B20;\n  font-size: 14px;\n}\n\n.goto_list span {\n  color: #181B20;\n}\n\n.goto-link {\n  position: relative;\n  top: 8px;\n}\n\n.corporate_input__placeholder-icon {\n  position: relative;\n  width: 18px;\n  bottom: 28px;\n  left: 9px;\n}\n\n.b2c-list-user-table {\n  overflow-x: auto;\n}\n\n.b2c-list-user-table .ui.table {\n  width: calc(100% + 540px);\n}\n\n.date-field {\n  text-indent: 17px;\n}\n\n.ui.form {\n  padding: 0px 24px;\n}\n\n.ui.form .search-section {\n  padding: 0px;\n  margin-bottom: 24px;\n}\n\n.icon {\n  opacity: 1;\n  z-index: 100;\n}\n\n.icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.icon .bookings_input__placeholder-icon.cal {\n  width: 16px;\n  margin-top: 0px;\n}\n\n.icon .bookings_input__placeholder-icon.call {\n  width: 10px;\n  margin-top: 0px;\n}\n\n.icon .bookings_input__placeholder-icon.calender {\n  width: 18px !important;\n  margin-top: 10px !important;\n}\n\nbutton.ui.button.commissionCode_btn.fluid {\n  background: #3867b1;\n}\n\n.bookings_pickers .input {\n  z-index: 0;\n}\n\n.bookings_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n\n.bookings_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n\n.bookings_pickers .input .icon {\n  opacity: 1;\n  z-index: 0;\n}\n\n.bookings_pickers .input .icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.bookings_pickers .input .icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n\n.bookings_pickers .input .search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.bookings_pickers .input .search.dropdown .search {\n  margin-left: 42px !important;\n}\n\n.bookings_pickers .input .search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n\n.search-section {\n  padding-bottom: 30px;\n}\n\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n\n.ui.form .three.wide.field,\n.ui.form .field > .checkbox-field,\n.ui.form .five.wide.field,\n.ui.form .six.wide.field,\n.four.wide.field {\n  margin-bottom: 12px;\n}\n\n.detail-segment {\n  padding: 0;\n  margin-top: 0;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 160px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 10px;\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: 0px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.listCodeWrapper {\n  padding: 0px;\n}\n\n.listCodeWrapper > .ui.form {\n  padding: 20px 8px;\n}\n\n.ui.segment {\n  margin-bottom: 60px;\n}\n\n.search-section {\n  padding: 0px 0px 8px 6px;\n  text-align: right;\n}\n\n.search-section .eight.wide.field .main_head {\n  text-align: left;\n  font-weight: 500 !important;\n  font-size: 13px;\n  line-height: 15px;\n  color: #1B1F26;\n}\n\n.search-section .list-code {\n  text-align: left;\n  margin: 0 auto 20px;\n  padding-left: 0px;\n}\n\n.search-section button {\n  margin-right: 0px;\n}\n\n.list-code-block {\n  width: 100%;\n  margin: 0;\n}\n\n.ui.form .eight.wide.field.list-code {\n  margin-left: 24px;\n}\n\n.listCodeWrapper .ui.form {\n  padding: 12px 0px 0px !important;\n}\n\n.result-block {\n  padding-bottom: 72px !important;\n}\n\n.save-btn-block {\n  position: relative;\n  top: 32px;\n  right: -24px;\n}\n\n.save-btn-block button {\n  float: right;\n  margin-right: 24px;\n  margin-top: -32px;\n  position: relative;\n}\n\n.ui.form.list-code-ui .search-section {\n  margin-bottom: 24px;\n}\n\n@media (max-width: 1440px) {\n  .outer .air-title {\n    margin-left: 24px;\n  }\n\n  .result-block {\n    width: auto;\n    margin: 24px;\n  }\n\n  .ui.form {\n    padding: 30px 0px;\n  }\n  .ui.form .tourCode_btn {\n    margin-right: 0px;\n  }\n  .ui.form .bookings_btn-panel.list-code {\n    padding-left: 0px;\n  }\n  .ui.form .search-section {\n    margin: 0px 20px;\n  }\n  .ui.form .search-section .eight.wide.field {\n    padding-left: 0px;\n  }\n  .ui.form .eight.wide.field.list-code {\n    width: auto;\n    margin: 0px;\n  }\n\n  .save-btn-block {\n    right: 16px;\n    top: 36px;\n  }\n\n  .list-code-block {\n    width: auto;\n    margin: 24px;\n  }\n}\n\n@media (max-width: 1280px) {\n  .outer .air-title {\n    margin-left: 20px;\n  }\n\n  .result-block {\n    width: auto;\n    margin: 20px;\n  }\n\n  .listCodeWrapper {\n    padding: 0px 10px;\n  }\n\n  .save-btn-block {\n    right: 38px;\n    top: 30px;\n  }\n  .save-btn-block button {\n    right: 120px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vYWlybGluZS1kZWFscy9jb21taXNzaW9uL0U6XFxCZWxhbFxccHJvamVjdHNcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcc2V0dXAtY29uZmlndXJhdGlvblxcYWlybGluZS1kZWFsc1xcY29tbWlzc2lvblxcY29tbWlzc2lvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vYWlybGluZS1kZWFscy9jb21taXNzaW9uL2NvbW1pc3Npb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGtDQUFBO0VBQ0Esd0NBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQ0NKOztBREVBO0VBQ0ksNENBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBOztFQUVJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlGQUFBO0FDQ0o7O0FERUE7O0VBRUksV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREFJO0VBQ0ksY0FBQTtBQ0VSOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURBSTtFQUNJLHlCQUFBO0FDRVI7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURBSTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQ0VSOztBREVBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNDSjs7QURBSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDRVI7O0FERFE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0daOztBRERRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNHWjs7QUREUTtFQUNJLHNCQUFBO0VBQ0EsMkJBQUE7QUNHWjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0FDQ0o7O0FEQUk7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FDRVI7O0FEQUk7RUFDSSx3QkFBQTtFQUNBLDBDQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQ0VSOztBREFJO0VBQ0ksVUFBQTtFQUNBLFVBQUE7QUNFUjs7QUREUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDR1o7O0FERlk7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNJaEI7O0FEQUk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUNFUjs7QUREUTtFQUNJLDRCQUFBO0FDR1o7O0FERFE7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtBQ0daOztBREVBO0VBQ0ksb0JBQUE7QUNDSjs7QURFQTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBOzs7OztFQUtJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQ0NKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksWUFBQTtBQ0FKOztBRENJO0VBQ0ksaUJBQUE7QUNDUjs7QURHQTtFQUNJLG1CQUFBO0FDQUo7O0FER0E7RUFDSSx3QkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FEQ0k7RUFDSSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NSOztBRENJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxpQkFBQTtBQ0NSOztBREdBO0VBQ0ksV0FBQTtFQUNBLFNBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxnQ0FBQTtBQ0FKOztBREdBO0VBQ0ksK0JBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUNBSjs7QURDSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDUjs7QURJSTtFQUNJLG1CQUFBO0FDRFI7O0FES0E7RUFDSTtJQUNJLGlCQUFBO0VDRk47O0VESUU7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQ0ROOztFREdFO0lBQ0ksaUJBQUE7RUNBTjtFRENNO0lBQ0ksaUJBQUE7RUNDVjtFRENNO0lBQ0ksaUJBQUE7RUNDVjtFRENNO0lBQ0ksZ0JBQUE7RUNDVjtFREFVO0lBQ0ksaUJBQUE7RUNFZDtFRENNO0lBQ0ksV0FBQTtJQUNBLFdBQUE7RUNDVjs7RURFRTtJQUNJLFdBQUE7SUFDQSxTQUFBO0VDQ047O0VEQ0U7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQ0VOO0FBQ0Y7O0FEQ0E7RUFDSTtJQUNJLGlCQUFBO0VDQ047O0VEQ0U7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQ0VOOztFREFFO0lBQ0ksaUJBQUE7RUNHTjs7RURERTtJQUNJLFdBQUE7SUFDQSxTQUFBO0VDSU47RURITTtJQUNJLFlBQUE7RUNLVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vYWlybGluZS1kZWFscy9jb21taXNzaW9uL2NvbW1pc3Npb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXIge1xyXG4gICAgbWFyZ2luOiAwcHggMjBweCAwcHggMTVweDtcclxufVxyXG5cclxuLmFpcmxpbmVfdGl0bGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQubWVudT4uaXRlbSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjg1NzE0MjlyZW0gMCAwIDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udWkuYm90dG9tLmF0dGFjaGVkLmFjdGl2ZS50YWIuc2VnbWVudCB7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxN3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTdweDtcclxufVxyXG5cclxuLnRhYi5zZWdtZW50IHtcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNFMEUwRTA7XHJcbn1cclxuXHJcbi50b3VyQ29kZV9idG4sXHJcbi5hZGRUb2dnX2J0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLnRvdXJDb2RlX3RleHQsXHJcbi5hZGRUb2dnX3RleHQge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5nb3RvX2xpc3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICMxODFCMjA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogIzE4MUIyMDtcclxuICAgIH1cclxufVxyXG5cclxuLmdvdG8tbGluayB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDhweDtcclxufVxyXG5cclxuLmNvcnBvcmF0ZV9pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGJvdHRvbTogMjhweDtcclxuICAgIGxlZnQ6IDlweDtcclxufVxyXG5cclxuLmIyYy1saXN0LXVzZXItdGFibGUge1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIC51aS50YWJsZSB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDU0MHB4KTtcclxuICAgIH1cclxufVxyXG5cclxuLmRhdGUtZmllbGQge1xyXG4gICAgdGV4dC1pbmRlbnQ6IDE3cHg7XHJcbn1cclxuXHJcbi51aS5mb3JtIHtcclxuICAgIHBhZGRpbmc6IDBweCAyNHB4O1xyXG4gICAgLnNlYXJjaC1zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxuICAgIH1cclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgICYuY2FsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5jYWxsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5jYWxlbmRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmJ1dHRvbi51aS5idXR0b24uY29tbWlzc2lvbkNvZGVfYnRuLmZsdWlkIHtcclxuICAgIGJhY2tncm91bmQ6ICMzODY3YjE7XHJcbn1cclxuXHJcbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCB7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgJi5ib29raW5nc19kYXRlcGlja2VyIHtcclxuICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTM4cHhcclxuICAgIH1cclxuICAgIC51aS5iYXNpYy5mbG9hdGluZy5idXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogcmdiYSgxNTIsIDE1MiwgMTUyLCAwLjYpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4gICAgfVxyXG4gICAgLmljb24ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgei1pbmRleDogMDtcclxuICAgICAgICAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgICAgICAmLmNhbCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLmRyb3Bkb3duIHtcclxuICAgICAgICB3aWR0aDogMjE4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgLnNlYXJjaCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZWZhdWx0LnRleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMCAwIDM4cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnVpLmZvcm0gLmZpZWxkPmxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgIGNvbG9yOiAjMTgxQjIwO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDhweDtcclxufVxyXG5cclxuLnVpLmZvcm0gLnRocmVlLndpZGUuZmllbGQsXHJcbi51aS5mb3JtIC5maWVsZD4uY2hlY2tib3gtZmllbGQsXHJcbi51aS5mb3JtIC5maXZlLndpZGUuZmllbGQsXHJcbi51aS5mb3JtIC5zaXgud2lkZS5maWVsZCxcclxuLmZvdXIud2lkZS5maWVsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG59XHJcblxyXG4uZGV0YWlsLXNlZ21lbnQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC8vIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYm90dG9tOiAxMDAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5saXN0Q29kZVdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgPi51aS5mb3JtIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDhweDtcclxuICAgIH1cclxufVxyXG5cclxuLnVpLnNlZ21lbnQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuLnNlYXJjaC1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDBweCAwcHggOHB4IDZweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgLmVpZ2h0LndpZGUuZmllbGQgLm1haW5faGVhZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMUIxRjI2O1xyXG4gICAgfVxyXG4gICAgLmxpc3QtY29kZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgfVxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmxpc3QtY29kZS1ibG9jayB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnVpLmZvcm0gLmVpZ2h0LndpZGUuZmllbGQubGlzdC1jb2RlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG59XHJcblxyXG4ubGlzdENvZGVXcmFwcGVyIC51aS5mb3JtIHtcclxuICAgIHBhZGRpbmc6IDEycHggMHB4IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmVzdWx0LWJsb2NrIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA3MnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zYXZlLWJ0bi1ibG9jayB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDMycHg7XHJcbiAgICByaWdodDogLTI0cHg7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTMycHg7XHJcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS5mb3JtLmxpc3QtY29kZS11aSB7XHJcbiAgICAuc2VhcmNoLXNlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHsgXHJcbiAgICAub3V0ZXIgLmFpci10aXRsZSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XHJcbiAgICB9XHJcbiAgICAucmVzdWx0LWJsb2NrIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBtYXJnaW46IDI0cHg7XHJcbiAgICB9XHJcbiAgICAudWkuZm9ybSB7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAwcHg7XHJcbiAgICAgICAgLnRvdXJDb2RlX2J0biB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4OyAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib29raW5nc19idG4tcGFuZWwubGlzdC1jb2RlIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWFyY2gtc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDIwcHg7XHJcbiAgICAgICAgICAgIC5laWdodC53aWRlLmZpZWxkIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5laWdodC53aWRlLmZpZWxkLmxpc3QtY29kZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2F2ZS1idG4tYmxvY2sge1xyXG4gICAgICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgICAgIHRvcDogMzZweDtcclxuICAgIH1cclxuICAgIC5saXN0LWNvZGUtYmxvY2sge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogMjRweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgLm91dGVyIC5haXItdGl0bGUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnJlc3VsdC1ibG9jayB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmxpc3RDb2RlV3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZzowcHggMTBweDtcclxuICAgIH1cclxuICAgIC5zYXZlLWJ0bi1ibG9jayB7XHJcbiAgICAgICAgcmlnaHQ6IDM4cHg7XHJcbiAgICAgICAgdG9wOiAzMHB4O1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0gIiwiLm91dGVyIHtcbiAgbWFyZ2luOiAwcHggMjBweCAwcHggMTVweDtcbn1cblxuLmFpcmxpbmVfdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi51aS50b3AuYXR0YWNoZWQubWVudSA+IC5pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yODU3MTQyOXJlbSAwIDAgMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLnVpLmJvdHRvbS5hdHRhY2hlZC5hY3RpdmUudGFiLnNlZ21lbnQge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XG59XG5cbi50YWIuc2VnbWVudCB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG5ociB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNFMEUwRTA7XG59XG5cbi50b3VyQ29kZV9idG4sXG4uYWRkVG9nZ19idG4ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnRvdXJDb2RlX3RleHQsXG4uYWRkVG9nZ190ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5nb3RvX2xpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzE4MUIyMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmdvdG9fbGlzdCBzcGFuIHtcbiAgY29sb3I6ICMxODFCMjA7XG59XG5cbi5nb3RvLWxpbmsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogOHB4O1xufVxuXG4uY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMThweDtcbiAgYm90dG9tOiAyOHB4O1xuICBsZWZ0OiA5cHg7XG59XG5cbi5iMmMtbGlzdC11c2VyLXRhYmxlIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cbi5iMmMtbGlzdC11c2VyLXRhYmxlIC51aS50YWJsZSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyA1NDBweCk7XG59XG5cbi5kYXRlLWZpZWxkIHtcbiAgdGV4dC1pbmRlbnQ6IDE3cHg7XG59XG5cbi51aS5mb3JtIHtcbiAgcGFkZGluZzogMHB4IDI0cHg7XG59XG4udWkuZm9ybSAuc2VhcmNoLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi5pY29uIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTAwO1xufVxuLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcbiAgd2lkdGg6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbi5jYWwge1xuICB3aWR0aDogMTZweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbGwge1xuICB3aWR0aDogMTBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbGVuZGVyIHtcbiAgd2lkdGg6IDE4cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuXG5idXR0b24udWkuYnV0dG9uLmNvbW1pc3Npb25Db2RlX2J0bi5mbHVpZCB7XG4gIGJhY2tncm91bmQ6ICMzODY3YjE7XG59XG5cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCB7XG4gIHotaW5kZXg6IDA7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQuYm9va2luZ3NfZGF0ZXBpY2tlciB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIG1heC13aWR0aDogMTM4cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnVpLmJhc2ljLmZsb2F0aW5nLmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYmEoMTUyLCAxNTIsIDE1MiwgMC42KSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5pY29uIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xuICB3aWR0aDogMjRweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbi5jYWwge1xuICB3aWR0aDogMThweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuc2VhcmNoLmRyb3Bkb3duIHtcbiAgd2lkdGg6IDIxOHB4O1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5zZWFyY2guZHJvcGRvd24gLnNlYXJjaCB7XG4gIG1hcmdpbi1sZWZ0OiA0MnB4ICFpbXBvcnRhbnQ7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnNlYXJjaC5kcm9wZG93biAuZGVmYXVsdC50ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogOHB4IDAgMCAzOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2gtc2VjdGlvbiB7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4udWkuZm9ybSAuZmllbGQgPiBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIGNvbG9yOiAjMTgxQjIwO1xuICBtYXJnaW46IDBweCAwcHggOHB4O1xufVxuXG4udWkuZm9ybSAudGhyZWUud2lkZS5maWVsZCxcbi51aS5mb3JtIC5maWVsZCA+IC5jaGVja2JveC1maWVsZCxcbi51aS5mb3JtIC5maXZlLndpZGUuZmllbGQsXG4udWkuZm9ybSAuc2l4LndpZGUuZmllbGQsXG4uZm91ci53aWRlLmZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmRldGFpbC1zZWdtZW50IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogMTYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBib3R0b206IDEwMCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmxpc3RDb2RlV3JhcHBlciB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5saXN0Q29kZVdyYXBwZXIgPiAudWkuZm9ybSB7XG4gIHBhZGRpbmc6IDIwcHggOHB4O1xufVxuXG4udWkuc2VnbWVudCB7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG5cbi5zZWFyY2gtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDBweCAwcHggOHB4IDZweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uc2VhcmNoLXNlY3Rpb24gLmVpZ2h0LndpZGUuZmllbGQgLm1haW5faGVhZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgY29sb3I6ICMxQjFGMjY7XG59XG4uc2VhcmNoLXNlY3Rpb24gLmxpc3QtY29kZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMCBhdXRvIDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuLnNlYXJjaC1zZWN0aW9uIGJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4ubGlzdC1jb2RlLWJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cblxuLnVpLmZvcm0gLmVpZ2h0LndpZGUuZmllbGQubGlzdC1jb2RlIHtcbiAgbWFyZ2luLWxlZnQ6IDI0cHg7XG59XG5cbi5saXN0Q29kZVdyYXBwZXIgLnVpLmZvcm0ge1xuICBwYWRkaW5nOiAxMnB4IDBweCAwcHggIWltcG9ydGFudDtcbn1cblxuLnJlc3VsdC1ibG9jayB7XG4gIHBhZGRpbmctYm90dG9tOiA3MnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zYXZlLWJ0bi1ibG9jayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzMnB4O1xuICByaWdodDogLTI0cHg7XG59XG4uc2F2ZS1idG4tYmxvY2sgYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gIG1hcmdpbi10b3A6IC0zMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi51aS5mb3JtLmxpc3QtY29kZS11aSAuc2VhcmNoLXNlY3Rpb24ge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5vdXRlciAuYWlyLXRpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogMjRweDtcbiAgfVxuXG4gIC5yZXN1bHQtYmxvY2sge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogMjRweDtcbiAgfVxuXG4gIC51aS5mb3JtIHtcbiAgICBwYWRkaW5nOiAzMHB4IDBweDtcbiAgfVxuICAudWkuZm9ybSAudG91ckNvZGVfYnRuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgfVxuICAudWkuZm9ybSAuYm9va2luZ3NfYnRuLXBhbmVsLmxpc3QtY29kZSB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIH1cbiAgLnVpLmZvcm0gLnNlYXJjaC1zZWN0aW9uIHtcbiAgICBtYXJnaW46IDBweCAyMHB4O1xuICB9XG4gIC51aS5mb3JtIC5zZWFyY2gtc2VjdGlvbiAuZWlnaHQud2lkZS5maWVsZCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIH1cbiAgLnVpLmZvcm0gLmVpZ2h0LndpZGUuZmllbGQubGlzdC1jb2RlIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW46IDBweDtcbiAgfVxuXG4gIC5zYXZlLWJ0bi1ibG9jayB7XG4gICAgcmlnaHQ6IDE2cHg7XG4gICAgdG9wOiAzNnB4O1xuICB9XG5cbiAgLmxpc3QtY29kZS1ibG9jayB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiAyNHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5vdXRlciAuYWlyLXRpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuXG4gIC5yZXN1bHQtYmxvY2sge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxuXG4gIC5saXN0Q29kZVdyYXBwZXIge1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICB9XG5cbiAgLnNhdmUtYnRuLWJsb2NrIHtcbiAgICByaWdodDogMzhweDtcbiAgICB0b3A6IDMwcHg7XG4gIH1cbiAgLnNhdmUtYnRuLWJsb2NrIGJ1dHRvbiB7XG4gICAgcmlnaHQ6IDEyMHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/setup-configuration/airline-deals/commission/commission.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/airline-deals/commission/commission.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: CommissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommissionComponent", function() { return CommissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/setup-config/setup-config.service */ "./src/app/shared/services/setup-config/setup-config.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/report/report.service */ "./src/app/shared/services/report/report.service.ts");
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/utils/common */ "./src/app/shared/utils/common.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../../environments/environment */ "./src/environments/environment.ts");










let CommissionComponent = class CommissionComponent {
    constructor(fb, AirlineDealService, toastr, reportService, commonService) {
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
            page: this.offset,
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
        this.fetchAllAirportDetails = () => {
            this.commonService.getAirportsList()
                .subscribe((res) => {
                if (res.status) {
                    this.origins = res.result;
                    this.destinations = res.result;
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
        this.addCommission = () => {
            this.newAddCommissionForm.patchValue({
                mode: "Add",
                commission_id: ''
            });
            this.AirlineDealService.addCommission(this.newAddCommissionForm.value).subscribe((result) => {
                if (result.status) {
                    this.toastr.error(`${result.message}`, ``, {
                        timeOut: 1000,
                        progressBar: false,
                        positionClass: 'toast-bottom-right'
                    });
                    this.fetchAllAirlineCommissions(this.filterParams);
                    this.resetForm();
                }
                else {
                    this.toastr.success(`${result.message}`, ``, {
                        timeOut: 1000,
                        progressBar: false,
                        positionClass: 'toast-bottom-right'
                    });
                }
            });
        };
    }
    onAddCommision() {
        this.loadConfig();
        this.loadSaleEndDate();
        this.loadSaleStartDate();
        this.loadTravelStartDate();
        this.loadTravelEndDate();
        this.showAddCommision = false;
        this.showListCommision = true;
    }
    fetchAllSuppliers() {
        this.reportService.GetAllSuppliers().subscribe((res) => {
            if (res.status) {
                this.suppliers = res.result.filter(data => data.name !== "");
            }
            else {
                this.toastr.error(`${res.message}`, ``, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    }
    fetchAllAirlines() {
        this.commonService.getAirlines().subscribe((result) => {
            if (result.type == 'data') {
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
    fetchAllAirlineCommissions(filterParams) {
        this.AirlineDealService.GetAllAirCommissions(this.filterParams)
            .subscribe((res) => {
            if (res.status) {
                this.totalCount = res.result.total;
                this.offset = res.result.page;
                res.result.data.map(ele => {
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
                this.NewAirlineCommission = res.result.data;
            }
            else {
                this.toastr.error(`${res.message}`, ``, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    }
    onListCommission() {
        this.loadConfig();
        this.showAddCommision = true;
        this.showListCommision = false;
    }
    get fc() { return this.newAddCommissionForm.controls; }
    editCommission(valObj) {
        let airlineCommission = JSON.parse(valObj.rbd_commission).commission;
        let commissionMode = JSON.parse(valObj.rbd_commission).commissionmode;
        valObj.rbd.forEach(element => {
            this.rbdArr.push(element.text);
        });
        valObj.destination.forEach(element => {
            this.destArr.push(element.text);
        });
        valObj.orgin.forEach(element => {
            this.orgArr.push(element.text);
        });
        this.loadConfig();
        this.showAddCommision = false;
        this.showSaveBtn = false;
        this.showListCommision = true;
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
    updateCommission() {
        this.newAddCommissionForm.patchValue({
            mode: "Update"
        });
        let commission_id = this.newAddCommissionForm.value.commission_id;
        this.AirlineDealService.getUpdateCommission(commission_id, this.newAddCommissionForm.value).subscribe((result) => {
            if (result.status) {
                this.toastr.success(`${result.message}`, ``, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
                this.fetchAllAirlineCommissions(this.filterParams);
                this.resetForm();
            }
            else {
                this.toastr.error(`${result.message}`, ``, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    }
    deleteCommission(valObj) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                this.AirlineDealService.deleteCommission(valObj.commission_id).subscribe((result) => {
                    console.log("result:::", result);
                    if (result.type == 'error') {
                        this.toastr.error(`${result.msg}`, ``, {
                            timeOut: 1000,
                            progressBar: false,
                            positionClass: 'toast-bottom-right'
                        });
                    }
                    else {
                        this.toastr.success(`${result.msg}`, ``, {
                            timeOut: 1000,
                            progressBar: false,
                            positionClass: 'toast-bottom-right'
                        });
                        this.fetchAllAirlineCommissions(this.filterParams);
                    }
                });
            }
        });
    }
    ngOnInit() {
        this.fetchAllAirlineCommissions(this.filterParams);
        this.fetchAllSuppliers();
        this.fetchAllAirportDetails();
        this.rbdArrayList = src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_7__["rbdArrayList"];
        this.fetchAllAirlines();
        this.loadConfig();
    }
    ngAfterViewInit() {
        this.loadConfig();
        this.loadSaleEndDate();
        this.loadSaleStartDate();
        this.loadTravelStartDate();
        this.loadTravelEndDate();
    }
    loadConfig() {
        var scope = this;
        $(document).ready(function () {
            $('.menu .item').tab();
            $('.ui.dropdown').dropdown();
            $('.dropdown1').dropdown({ placeholder: "RBD", });
            $('.dropdown2').dropdown({ placeholder: "Choose suppliers", });
            $('.dropdown3').dropdown({ placeholder: "Choose airlines", });
            $('.dropdown4').dropdown({ placeholder: "Choose origin airports", });
            $('.dropdown5').dropdown({ placeholder: "Choose Destination airports", });
        });
        $(document).ready(function () {
            this._globals = localStorage.getItem('_globals');
            let token = JSON.parse(this._globals).token;
            $('.ui.dropdown4').dropdown({
                type: 'category',
                minCharacters: 2,
                maxCharacters: 3,
                responseAsync: true,
                apiSettings: {
                    url: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].serverURL + '/api/get-airports-cache/{query}',
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
    loadSaleStartDate() {
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
    loadSaleEndDate() {
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
    loadTravelStartDate() {
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
    loadTravelEndDate() {
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
    resetForm() {
        this.newAddCommissionForm.reset();
        this.onListCommission();
    }
    pageCallback(event) {
        let offset = event.offset;
        this.commissionForm.page = offset;
        this.fetchAllAirlineCommissions(this.filterParams);
    }
    statusToggle(data) {
        this.toggleObj.id = data.commission_id;
        this.toggleObj.status = data.is_active;
        this.toggleObj.table = "commissions";
        this.AirlineDealService.onStatusToggle(this.toggleObj)
            .subscribe((res) => {
            if (res.status == 200) {
                this.fetchAllAirlineCommissions(this.filterParams);
            }
            else {
                this.toastr.error(`${res.msg}`, `${res.msg}`, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    }
};
CommissionComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_3__["SetupConfigService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_5__["ReportService"] },
    { type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
];
CommissionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-commission',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./commission.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/airline-deals/commission/commission.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./commission.component.scss */ "./src/app/layout/setup-configuration/airline-deals/commission/commission.component.scss")).default]
    })
], CommissionComponent);



/***/ }),

/***/ "./src/app/layout/setup-configuration/airline-deals/tourcode/tourcode.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/airline-deals/tourcode/tourcode.component.scss ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".outer {\n  margin: 0px 20px 0px 15px;\n}\n\n.airline_title {\n  margin: 0;\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #E0E0E0;\n}\n\n.tourCode_text,\n.addTogg_text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.goto_list {\n  background-color: transparent;\n  box-shadow: none;\n  border: none;\n  color: #181B20;\n  font-size: 14px;\n}\n\n.goto_list span {\n  color: #181B20;\n}\n\n.goto-link {\n  position: relative;\n  top: 8px;\n}\n\n.corporate_input__placeholder-icon {\n  position: relative;\n  width: 18px;\n  bottom: 28px;\n  left: 9px;\n}\n\n.b2c-list-user-table {\n  overflow-x: auto;\n}\n\n.b2c-list-user-table .ui.table {\n  width: calc(100% + 540px);\n}\n\n.date-field {\n  text-indent: 17px;\n}\n\n.icon {\n  opacity: 1;\n  z-index: 100;\n}\n\n.icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.icon .bookings_input__placeholder-icon.cal {\n  width: 16px;\n  margin-top: 0px;\n}\n\n.icon .bookings_input__placeholder-icon.call {\n  width: 10px;\n  margin-top: 0px;\n}\n\n.icon .bookings_input__placeholder-icon.calender {\n  width: 18px;\n  margin-top: 10px;\n}\n\n.bookings_pickers .input {\n  z-index: 0;\n}\n\n.bookings_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n\n.bookings_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n\n.bookings_pickers .input .search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.bookings_pickers .input .search.dropdown .search {\n  margin-left: 42px !important;\n}\n\n.bookings_pickers .input .search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n\n.ui.segment {\n  margin-bottom: 60px;\n}\n\n.detail-segment {\n  margin-bottom: 0px;\n}\n\n.search-section {\n  padding: 0px 30px;\n  text-align: right;\n}\n\n.search-section .eight.wide.field .main_head {\n  text-align: left;\n  font-weight: 500 !important;\n  font-size: 13px;\n  line-height: 15px;\n  color: #1B1F26;\n}\n\n.search-section .list-code {\n  text-align: left;\n  margin: 0 auto 20px;\n  padding-left: 0px;\n}\n\n.listCodeWrapper {\n  padding: 0px;\n}\n\n.listCodeWrapper > .ui.form {\n  padding: 20px 8px;\n}\n\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n\n.ui.form .three.wide.field,\n.ui.form .field > .checkbox-field,\n.ui.form .five.wide.field,\n.ui.form .six.wide.field,\n.ui.form .eight.wide.field,\n.four.wide.field {\n  margin-bottom: 12px;\n}\n\n.ui.form .search-section .eight.wide.field {\n  margin-bottom: 0px;\n  padding: 0px;\n}\n\n.ui.form.list-code-ui .search-section {\n  margin-bottom: 24px;\n}\n\n.detail-segment {\n  padding: 0;\n  margin-top: 0;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 160px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 10px;\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: 0px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.list-code-block {\n  margin: 24px;\n}\n\n.ui.form .eight.wide.field.list-code {\n  margin-left: 0px;\n}\n\n.listCodeWrapper .ui.form {\n  padding: 12px 0px 0px !important;\n}\n\n.result-block {\n  padding-bottom: 72px !important;\n}\n\n.save-btn-block {\n  margin: 0 auto;\n  position: relative;\n  top: 32px;\n  right: -8px;\n}\n\n.save-btn-block button {\n  position: absolute;\n  right: -16px;\n  margin-right: 24px;\n  margin-top: -32px;\n}\n\n@media (max-width: 1440px) {\n  .outer .air-title {\n    margin-left: 24px;\n  }\n\n  .ui.form {\n    padding: 24px 0px;\n  }\n  .ui.form .tourCode_btn {\n    margin-right: 0px;\n  }\n  .ui.form .bookings_btn-panel.list-code {\n    padding-left: 0px;\n  }\n  .ui.form .save-btn-block button {\n    right: -4px;\n  }\n  .ui.form .eight.wide.field.list-code {\n    width: auto;\n    margin: 0px;\n  }\n\n  .list-code-block {\n    width: auto;\n    margin: 24px;\n  }\n}\n\n@media (max-width: 1280px) {\n  .outer .air-title {\n    margin-left: 20px;\n  }\n\n  .result-block {\n    width: auto;\n    margin: 20px;\n  }\n\n  .listCodeWrapper {\n    padding: 0px 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vYWlybGluZS1kZWFscy90b3VyY29kZS9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHNldHVwLWNvbmZpZ3VyYXRpb25cXGFpcmxpbmUtZGVhbHNcXHRvdXJjb2RlXFx0b3VyY29kZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vYWlybGluZS1kZWFscy90b3VyY29kZS90b3VyY29kZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0NBQUE7RUFDQSx3Q0FBQTtBQ0NKOztBREVBO0VBQ0ksK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSw0Q0FBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7O0VBRUksV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksNkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREFJO0VBQ0ksY0FBQTtBQ0VSOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURBSTtFQUNJLHlCQUFBO0FDRVI7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBRE1BO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNISjs7QURJSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDRlI7O0FER1E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0RaOztBREdRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNEWjs7QURHUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0RaOztBRE1BO0VBQ0ksVUFBQTtBQ0hKOztBRElJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ0ZSOztBRElJO0VBQ0ksd0JBQUE7RUFDQSwwQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUNGUjs7QURnQkk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUNkUjs7QURlUTtFQUNJLDRCQUFBO0FDYlo7O0FEZVE7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtBQ2JaOztBRGtCQTtFQUNJLG1CQUFBO0FDZko7O0FEa0JBO0VBQ0ksa0JBQUE7QUNmSjs7QURrQkE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDZko7O0FEZ0JJO0VBQ0ksZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNkUjs7QURnQkk7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNkUjs7QURrQkE7RUFDSSxZQUFBO0FDZko7O0FEZ0JJO0VBQ0ksaUJBQUE7QUNkUjs7QURrQkE7RUFDSSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNmSjs7QURrQkE7Ozs7OztFQU1JLG1CQUFBO0FDZko7O0FEa0JBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FDZko7O0FEbUJJO0VBQ0ksbUJBQUE7QUNoQlI7O0FEb0JBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7QUNqQko7O0FEb0JBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQ2pCSjs7QURxQkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUNsQko7O0FEcUJBO0VBQ0ksbUJBQUE7QUNsQko7O0FEcUJBO0VBRUksWUFBQTtBQ25CSjs7QURzQkE7RUFFSSxnQkFBQTtBQ3BCSjs7QUR1QkE7RUFDSSxnQ0FBQTtBQ3BCSjs7QUR1QkE7RUFDSSwrQkFBQTtBQ3BCSjs7QUR1QkE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ3BCSjs7QURxQkk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDbkJSOztBRHVCQTtFQUNJO0lBQ0ksaUJBQUE7RUNwQk47O0VEc0JFO0lBQ0ksaUJBQUE7RUNuQk47RURvQk07SUFDSSxpQkFBQTtFQ2xCVjtFRG9CTTtJQUNJLGlCQUFBO0VDbEJWO0VEcUJVO0lBQ0ksV0FBQTtFQ25CZDtFRHNCTTtJQUNJLFdBQUE7SUFDQSxXQUFBO0VDcEJWOztFRHVCRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VDcEJOO0FBQ0Y7O0FEdUJBO0VBQ0k7SUFDSSxpQkFBQTtFQ3JCTjs7RUR1QkU7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQ3BCTjs7RURzQkU7SUFDSSxpQkFBQTtFQ25CTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vYWlybGluZS1kZWFscy90b3VyY29kZS90b3VyY29kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlciB7XHJcbiAgICBtYXJnaW46IDBweCAyMHB4IDBweCAxNXB4O1xyXG59XHJcblxyXG4uYWlybGluZV90aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxufVxyXG5cclxuLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLnVpLnRvcC5hdHRhY2hlZC5tZW51Pi5pdGVtIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yODU3MTQyOXJlbSAwIDAgMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51aS5ib3R0b20uYXR0YWNoZWQuYWN0aXZlLnRhYi5zZWdtZW50IHtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE3cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTdweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxN3B4O1xyXG59XHJcblxyXG4udGFiLnNlZ21lbnQge1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgI0UwRTBFMDtcclxufVxyXG5cclxuLnRvdXJDb2RlX3RleHQsXHJcbi5hZGRUb2dnX3RleHQge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5nb3RvX2xpc3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICMxODFCMjA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogIzE4MUIyMDtcclxuICAgIH1cclxufVxyXG5cclxuLmdvdG8tbGluayB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDhweDtcclxufVxyXG5cclxuLmNvcnBvcmF0ZV9pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGJvdHRvbTogMjhweDtcclxuICAgIGxlZnQ6IDlweDtcclxufVxyXG5cclxuLmIyYy1saXN0LXVzZXItdGFibGUge1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIC51aS50YWJsZSB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDU0MHB4KTtcclxuICAgIH1cclxufVxyXG5cclxuLmRhdGUtZmllbGQge1xyXG4gICAgdGV4dC1pbmRlbnQ6IDE3cHg7XHJcbn1cclxuXHJcbi8vIC51aS5mb3JtIHtcclxuLy8gICAgIHBhZGRpbmc6IDI0cHggMHB4O1xyXG4vLyB9XHJcblxyXG4uaWNvbiB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgJi5jYWwge1xyXG4gICAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmNhbGwge1xyXG4gICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmNhbGVuZGVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQge1xyXG4gICAgei1pbmRleDogMDtcclxuICAgICYuYm9va2luZ3NfZGF0ZXBpY2tlciB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEzOHB4XHJcbiAgICB9XHJcbiAgICAudWkuYmFzaWMuZmxvYXRpbmcuYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMTUyLCAxNTIsIDE1MiwgMC42KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTFweDtcclxuICAgIH1cclxuICAgIC8vIC5pY29uIHtcclxuICAgIC8vICAgb3BhY2l0eTogMTtcclxuICAgIC8vICAgei1pbmRleDowO1xyXG4gICAgLy8gICAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgLy8gICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgLy8gICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgIC8vICAgICAmLmNhbCB7XHJcbiAgICAvLyAgICAgICB3aWR0aDogMThweDtcclxuICAgIC8vICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9XHJcbiAgICAuc2VhcmNoLmRyb3Bkb3duIHtcclxuICAgICAgICB3aWR0aDogMjE4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgLnNlYXJjaCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZWZhdWx0LnRleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMCAwIDM4cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS5zZWdtZW50IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbn1cclxuXHJcbi5kZXRhaWwtc2VnbWVudCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAwcHggMzBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgLmVpZ2h0LndpZGUuZmllbGQgLm1haW5faGVhZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMUIxRjI2O1xyXG4gICAgfVxyXG4gICAgLmxpc3QtY29kZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubGlzdENvZGVXcmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgID4udWkuZm9ybSB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweCA4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS5mb3JtIC5maWVsZD5sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICBjb2xvcjogIzE4MUIyMDtcclxuICAgIG1hcmdpbjogMHB4IDBweCA4cHg7XHJcbn1cclxuXHJcbi51aS5mb3JtIC50aHJlZS53aWRlLmZpZWxkLFxyXG4udWkuZm9ybSAuZmllbGQ+LmNoZWNrYm94LWZpZWxkLFxyXG4udWkuZm9ybSAuZml2ZS53aWRlLmZpZWxkLFxyXG4udWkuZm9ybSAuc2l4LndpZGUuZmllbGQsXHJcbi51aS5mb3JtIC5laWdodC53aWRlLmZpZWxkLFxyXG4uZm91ci53aWRlLmZpZWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi51aS5mb3JtIC5zZWFyY2gtc2VjdGlvbiAuZWlnaHQud2lkZS5maWVsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi51aS5mb3JtLmxpc3QtY29kZS11aSB7XHJcbiAgICAuc2VhcmNoLXNlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kZXRhaWwtc2VnbWVudCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufVxyXG5cclxuLnRvb2x0aXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLy8gZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3R0b206IDEwMCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLmxpc3QtY29kZS1ibG9jayB7XHJcbiAgICAvLyB3aWR0aDogMTEwMHB4O1xyXG4gICAgbWFyZ2luOiAyNHB4O1xyXG59XHJcblxyXG4udWkuZm9ybSAuZWlnaHQud2lkZS5maWVsZC5saXN0LWNvZGUge1xyXG4gICAgLy8gd2lkdGg6IDExMDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLmxpc3RDb2RlV3JhcHBlciAudWkuZm9ybSB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDBweCAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnJlc3VsdC1ibG9jayB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNzJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2F2ZS1idG4tYmxvY2sge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDMycHg7XHJcbiAgICByaWdodDogLThweDtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAtMTZweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTMycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIC5vdXRlciAuYWlyLXRpdGxlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjRweDtcclxuICAgIH1cclxuICAgIC51aS5mb3JtIHtcclxuICAgICAgICBwYWRkaW5nOiAyNHB4IDBweDtcclxuICAgICAgICAudG91ckNvZGVfYnRuIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7ICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJvb2tpbmdzX2J0bi1wYW5lbC5saXN0LWNvZGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNhdmUtYnRuLWJsb2NrIHtcclxuICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAtNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5laWdodC53aWRlLmZpZWxkLmxpc3QtY29kZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubGlzdC1jb2RlLWJsb2NrIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBtYXJnaW46IDI0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIC5vdXRlciAuYWlyLXRpdGxlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuICAgIC5yZXN1bHQtYmxvY2sge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgIH1cclxuICAgIC5saXN0Q29kZVdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6MHB4IDEwcHg7XHJcbiAgICB9XHJcbn0gIiwiLm91dGVyIHtcbiAgbWFyZ2luOiAwcHggMjBweCAwcHggMTVweDtcbn1cblxuLmFpcmxpbmVfdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi51aS50b3AuYXR0YWNoZWQubWVudSA+IC5pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yODU3MTQyOXJlbSAwIDAgMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLnVpLmJvdHRvbS5hdHRhY2hlZC5hY3RpdmUudGFiLnNlZ21lbnQge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XG59XG5cbi50YWIuc2VnbWVudCB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG5ociB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNFMEUwRTA7XG59XG5cbi50b3VyQ29kZV90ZXh0LFxuLmFkZFRvZ2dfdGV4dCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ290b19saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMxODFCMjA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5nb3RvX2xpc3Qgc3BhbiB7XG4gIGNvbG9yOiAjMTgxQjIwO1xufVxuXG4uZ290by1saW5rIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDhweDtcbn1cblxuLmNvcnBvcmF0ZV9pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE4cHg7XG4gIGJvdHRvbTogMjhweDtcbiAgbGVmdDogOXB4O1xufVxuXG4uYjJjLWxpc3QtdXNlci10YWJsZSB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG4uYjJjLWxpc3QtdXNlci10YWJsZSAudWkudGFibGUge1xuICB3aWR0aDogY2FsYygxMDAlICsgNTQwcHgpO1xufVxuXG4uZGF0ZS1maWVsZCB7XG4gIHRleHQtaW5kZW50OiAxN3B4O1xufVxuXG4uaWNvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4uaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsIHtcbiAgd2lkdGg6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbi5jYWxsIHtcbiAgd2lkdGg6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbi5jYWxlbmRlciB7XG4gIHdpZHRoOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQge1xuICB6LWluZGV4OiAwO1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0LmJvb2tpbmdzX2RhdGVwaWNrZXIge1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBtYXgtd2lkdGg6IDEzOHB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC51aS5iYXNpYy5mbG9hdGluZy5idXR0b24ge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiByZ2JhKDE1MiwgMTUyLCAxNTIsIDAuNikgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTFweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuc2VhcmNoLmRyb3Bkb3duIHtcbiAgd2lkdGg6IDIxOHB4O1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5zZWFyY2guZHJvcGRvd24gLnNlYXJjaCB7XG4gIG1hcmdpbi1sZWZ0OiA0MnB4ICFpbXBvcnRhbnQ7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnNlYXJjaC5kcm9wZG93biAuZGVmYXVsdC50ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogOHB4IDAgMCAzOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi51aS5zZWdtZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbn1cblxuLmRldGFpbC1zZWdtZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4uc2VhcmNoLXNlY3Rpb24ge1xuICBwYWRkaW5nOiAwcHggMzBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uc2VhcmNoLXNlY3Rpb24gLmVpZ2h0LndpZGUuZmllbGQgLm1haW5faGVhZCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgY29sb3I6ICMxQjFGMjY7XG59XG4uc2VhcmNoLXNlY3Rpb24gLmxpc3QtY29kZSB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbjogMCBhdXRvIDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4ubGlzdENvZGVXcmFwcGVyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLmxpc3RDb2RlV3JhcHBlciA+IC51aS5mb3JtIHtcbiAgcGFkZGluZzogMjBweCA4cHg7XG59XG5cbi51aS5mb3JtIC5maWVsZCA+IGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgY29sb3I6ICMxODFCMjA7XG4gIG1hcmdpbjogMHB4IDBweCA4cHg7XG59XG5cbi51aS5mb3JtIC50aHJlZS53aWRlLmZpZWxkLFxuLnVpLmZvcm0gLmZpZWxkID4gLmNoZWNrYm94LWZpZWxkLFxuLnVpLmZvcm0gLmZpdmUud2lkZS5maWVsZCxcbi51aS5mb3JtIC5zaXgud2lkZS5maWVsZCxcbi51aS5mb3JtIC5laWdodC53aWRlLmZpZWxkLFxuLmZvdXIud2lkZS5maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi51aS5mb3JtIC5zZWFyY2gtc2VjdGlvbiAuZWlnaHQud2lkZS5maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4udWkuZm9ybS5saXN0LWNvZGUtdWkgLnNlYXJjaC1zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLmRldGFpbC1zZWdtZW50IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogMTYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBib3R0b206IDEwMCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLmxpc3QtY29kZS1ibG9jayB7XG4gIG1hcmdpbjogMjRweDtcbn1cblxuLnVpLmZvcm0gLmVpZ2h0LndpZGUuZmllbGQubGlzdC1jb2RlIHtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLmxpc3RDb2RlV3JhcHBlciAudWkuZm9ybSB7XG4gIHBhZGRpbmc6IDEycHggMHB4IDBweCAhaW1wb3J0YW50O1xufVxuXG4ucmVzdWx0LWJsb2NrIHtcbiAgcGFkZGluZy1ib3R0b206IDcycHggIWltcG9ydGFudDtcbn1cblxuLnNhdmUtYnRuLWJsb2NrIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzMnB4O1xuICByaWdodDogLThweDtcbn1cbi5zYXZlLWJ0bi1ibG9jayBidXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMTZweDtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICBtYXJnaW4tdG9wOiAtMzJweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAub3V0ZXIgLmFpci10aXRsZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gIH1cblxuICAudWkuZm9ybSB7XG4gICAgcGFkZGluZzogMjRweCAwcHg7XG4gIH1cbiAgLnVpLmZvcm0gLnRvdXJDb2RlX2J0biB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIH1cbiAgLnVpLmZvcm0gLmJvb2tpbmdzX2J0bi1wYW5lbC5saXN0LWNvZGUge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICB9XG4gIC51aS5mb3JtIC5zYXZlLWJ0bi1ibG9jayBidXR0b24ge1xuICAgIHJpZ2h0OiAtNHB4O1xuICB9XG4gIC51aS5mb3JtIC5laWdodC53aWRlLmZpZWxkLmxpc3QtY29kZSB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cblxuICAubGlzdC1jb2RlLWJsb2NrIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW46IDI0cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgLm91dGVyIC5haXItdGl0bGUge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG5cbiAgLnJlc3VsdC1ibG9jayB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiAyMHB4O1xuICB9XG5cbiAgLmxpc3RDb2RlV3JhcHBlciB7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/layout/setup-configuration/airline-deals/tourcode/tourcode.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/airline-deals/tourcode/tourcode.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: TourcodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TourcodeComponent", function() { return TourcodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/setup-config/setup-config.service */ "./src/app/shared/services/setup-config/setup-config.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/report/report.service */ "./src/app/shared/services/report/report.service.ts");
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/utils/common */ "./src/app/shared/utils/common.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../../../../environments/environment */ "./src/environments/environment.ts");










let TourcodeComponent = class TourcodeComponent {
    constructor(fb, AirlineDealService, toastr, reportService, commonService) {
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
            page: this.offset,
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
        this.fetchAllAirportDetails = () => {
            this.commonService.getAirportsList()
                .subscribe((res) => {
                if (res.status) {
                    // this.origins = res.result;
                    this.destinations = res.result;
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
    }
    ngOnInit() {
        this.fetchAllAirlineDeals(this.filterParams);
        // this.fetchAllAirportDetails();
        this.rbdArrayList = src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_7__["rbdArrayList"];
        this.fetchAllAirlines();
        this.fetchAllSuppliers();
        this.searchAirport();
    }
    ngAfterViewInit() {
        this.loadConfig();
        this.loadSaleEndDate();
        this.loadSaleStartDate();
        this.loadTravelStartDate();
        this.loadTravelEndDate();
    }
    fetchAllAirlineDeals(filterParams) {
        this.AirlineDealService.GetAllAirlines(this.filterParams)
            .subscribe((res) => {
            if (res.status) {
                this.totalCount = res.result.total;
                this.offset = res.result.page;
                res.result.data.map(ele => {
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
                this.NewAirlineDeals = res.result.data;
            }
            else {
                this.toastr.error(`${res.message}`, `${res.message}`, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    }
    onClickAddCode() {
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
    onClickListCode() {
        this.loadConfig();
        this.newAddTourCodeForm.reset();
        this.showAddCode = true;
        this.showListCode = false;
    }
    fetchAllSuppliers() {
        this.commonService.getSupplierList().subscribe((res) => {
            if (res.type != 'error') {
                this.suppliers = res.listData;
            }
            else {
                this.toastr.error(`${res.msg}`, `${res.msg}`, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    }
    fetchAllAirlines() {
        this.commonService.getAirlines().subscribe((result) => {
            if (result.type == 'data') {
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
    loadSaleStartDate() {
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
    loadSaleEndDate() {
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
    loadTravelStartDate() {
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
    loadTravelEndDate() {
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
    saveTourCode() {
        this.newAddTourCodeForm.patchValue({
            mode: "Add",
            tourcode_id: ""
        });
        this.AirlineDealService.addTourCodeSupplier(this.newAddTourCodeForm.value).subscribe((result) => {
            if (result.status) {
                this.toastr.success(`${result.message}`, ``, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
                this.fetchAllAirlineDeals(this.filterParams);
                this.resetForm();
            }
            else {
                this.toastr.error(`${result.message}`, ``, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    }
    pageCallback(event) {
        let offset = event.offset;
        this.filterParams.page = offset;
        this.fetchAllAirlineDeals(this.filterParams);
    }
    deleteTourCode(valObj) {
        let tourcode_id = {};
        tourcode_id = { tourcode_id: valObj.tourcode_id };
        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                this.AirlineDealService.deleteTourcode(tourcode_id).subscribe((result) => {
                    if (result.status) {
                        this.toastr.success(`${result.message}`, ``, {
                            timeOut: 1000,
                            progressBar: false,
                            positionClass: 'toast-bottom-right'
                        });
                    }
                    else {
                        this.toastr.error(`${result.message}`, ``, {
                            timeOut: 1000,
                            progressBar: false,
                            positionClass: 'toast-bottom-right'
                        });
                        this.fetchAllAirlineDeals(this.filterParams);
                    }
                });
            }
        });
    }
    editTourCode(valObj) {
        let airlineCommission = JSON.parse(valObj.rbd_commission).commission;
        let commissionMode = JSON.parse(valObj.rbd_commission).commissionmode;
        let sharedCommission = JSON.parse(valObj.rbd_commission).sharedcommission;
        console.log("valObj:typeof::", typeof valObj.rbd);
        valObj.rbd.forEach(element => {
            this.rbdArr.push(element.text);
        });
        valObj.destination.forEach(element => {
            this.destArr.push(element.text);
        });
        valObj.orgin.forEach(element => {
            this.orgArr.push(element.text);
        });
        this.loadConfig();
        this.showSaveBtn = false;
        this.showAddCode = false;
        this.showListCode = true;
        const uniqueOrgArr = new Set(this.orgArr);
        const uniqueDesArr = new Set(this.destArr);
        const uniqueRbdArr = new Set(this.rbdArr);
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
            orgin: [...uniqueOrgArr],
            destination: [...uniqueDesArr],
            rbd: [...uniqueRbdArr],
            airline_commission: airlineCommission,
            shared_commission: sharedCommission,
            tour_commission: commissionMode,
            sale_start_date: valObj.sale_start_date,
            sale_end_date: valObj.sale_end_date,
            travel_start_date: valObj.travel_end_date,
            travel_end_date: valObj.travel_start_date
        });
    }
    updateTourCode() {
        this.newAddTourCodeForm.patchValue({
            mode: "Update"
        });
        // console.log(this.newAddTourCodeForm.value);
        //     return;
        let tourcode_id = this.newAddTourCodeForm.value.tourcode_id;
        this.AirlineDealService.getUpdateTourCode(tourcode_id, this.newAddTourCodeForm.value).subscribe((result) => {
            if (result.status) {
                this.toastr.error(`${result.message}`, ``, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
            else {
                this.toastr.success(`${result.message}`, ``, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
            this.fetchAllAirlineDeals(this.filterParams);
            this.resetForm();
        });
    }
    resetForm() {
        this.newAddTourCodeForm.reset();
        this.onClickListCode();
    }
    loadConfig() {
        var scope = this;
        // $(document).ready(function () {
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
            $('.dropdown1').dropdown({ placeholder: "RBD", });
            $('.dropdown2').dropdown({ placeholder: "Choose suppliers", });
            $('.dropdown3').dropdown({ placeholder: "Choose airlines", });
            $('.dropdown4').dropdown({ placeholder: "Choose origin airports", });
            $('.dropdown5').dropdown({ placeholder: "Choose Destination airports", });
            this._globals = localStorage.getItem('_globals');
            let token = JSON.parse(this._globals).token;
            $('.ui.dropdown4').dropdown({
                type: 'category',
                minCharacters: 2,
                maxCharacters: 3,
                responseAsync: true,
                apiSettings: {
                    url: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].serverURL + '/api/get-airports-cache/{query}',
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
    statusToggle(data) {
        this.toggleObj.id = data.tourcode_id;
        this.toggleObj.status = data.is_active;
        this.toggleObj.table = "tourcodes";
        this.AirlineDealService.onStatusToggle(this.toggleObj)
            .subscribe((res) => {
            if (res.status == 200) {
                this.fetchAllAirlineDeals(this.filterParams);
            }
            else {
                this.toastr.error(`${res.msg}`, `${res.msg}`, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    }
    searchAirport() {
    }
};
TourcodeComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_3__["SetupConfigService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: src_app_shared_services_report_report_service__WEBPACK_IMPORTED_MODULE_5__["ReportService"] },
    { type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
];
TourcodeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tourcode',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tourcode.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/airline-deals/tourcode/tourcode.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tourcode.component.scss */ "./src/app/layout/setup-configuration/airline-deals/tourcode/tourcode.component.scss")).default]
    })
], TourcodeComponent);



/***/ })

}]);
//# sourceMappingURL=airline-deals-airline-deals-module-es2016.js.map