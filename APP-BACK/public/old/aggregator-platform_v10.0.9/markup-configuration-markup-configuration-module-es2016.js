(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["markup-configuration-markup-configuration-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/markup-configuration/mark/addmarkup/addmarkup.component.html":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/markup-configuration/mark/addmarkup/addmarkup.component.html ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"outer-form\">\r\n  <form class=\"ui form pos_basic_form\" [formGroup]=\"addMarkupForm\">\r\n    <div class=\"ui form pos_basic_form\">\r\n      <!-- <h4 class=\"ui header\">Add New Markup Rules</h4> -->\r\n      <div class=\"fields\">\r\n        <div class=\"six wide field\"\r\n          [ngClass]=\"{'error': (isSubmitted && addMarkupForm.controls.title.status == 'INVALID')}\">\r\n          <label>Markup Title</label>\r\n          <input type=\"text\" formControlName=\"title\" placeholder=\"Markup Title\">\r\n        </div>\r\n        <div class=\"six wide field\"\r\n          [ngClass]=\"{'error': (isSubmitted && addMarkupForm.controls.priority.status == 'INVALID')}\">\r\n          <label>Priority</label>\r\n          <select class=\"ui fluid selection dropdown\" formControlName=\"priority\">\r\n            <option value=\"\" selected>Priority</option>\r\n            <option value=\"1\">1</option>\r\n            <option value=\"2\">2</option>\r\n            <option value=\"3\">3</option>\r\n            <option value=\"4\">4</option>\r\n            <option value=\"5\">5</option>\r\n            <option value=\"6\">6</option>\r\n            <option value=\"7\">7</option>\r\n            <option value=\"8\">8</option>\r\n            <option value=\"9\">9</option>\r\n            <option value=\"10\">10</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"fields\">\r\n        <div class=\"six wide field\"\r\n          [ngClass]=\"{'error': (isSubmitted && addMarkupForm.controls.is_active.status == 'INVALID')}\">\r\n          <label>Status</label>\r\n          <select class=\"ui fluid selection dropdown\" formControlName=\"is_active\">\r\n            <option value=\"\" selected>Status</option>\r\n            <option value=\"1\">Active</option>\r\n            <option value=\"0\">InActive</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"six wide field\"\r\n          [ngClass]=\"{'error': (isSubmitted && addMarkupForm.controls.sale_id.status == 'INVALID')}\">\r\n          <label>Sales Configuration</label>\r\n          <select class=\"ui dropdown fluid search selection dropdown-group\" formControlName=\"sale_id\"\r\n            (change)=\"groupChanged($event.target.value)\">\r\n            <option value=\"\">Select Group</option>\r\n            <option *ngFor=\"let group of allGroups\" value=\"{{group.sale_id}}\"> {{group.name}} </option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"fields\">\r\n        <div class=\"six wide field\"\r\n          [ngClass]=\"{'error': (isSubmitted && addMarkupForm.controls.supplier_id.status == 'INVALID')}\">\r\n          <label>Supplier<span class=\"mandatory\">*</span></label>\r\n          <select class=\"ui fluid search selection dropdown\" formControlName=\"supplier_id\"\r\n            (change)=\"supplierChanged($event.target.value)\">\r\n            <option value=\"\" selected>Select Supplier</option>\r\n            <option *ngFor=\"let supplier of filteredSuppliers\" value=\"{{ supplier.supplier_id }}\"> {{supplier.name}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"ui fitted divider\"></div> -->\r\n      <!-- *ngIf=\"showEditions('flight')\"  -->\r\n      <div class=\"markup-block\" formGroupName=\"flightsMarkup\" *ngIf=\"addMarkupForm.controls.flightsMarkup\">\r\n        <!-- <h4 class=\"ui header\">Flights Markup Rules -->\r\n        <!-- {{ addMarkupForm.controls.flightsMarkup.calculation_basis }} -->\r\n        <!-- </h4> -->\r\n        <div class=\"fields\">\r\n          <div class=\"six wide field\"\r\n            [ngClass]=\"{'error': (isSubmitted && addMarkupForm.controls.flightsMarkup['controls'].calculation_basis.status == 'INVALID')}\">\r\n            <label>Calculation Basis</label>\r\n            <select class=\"ui fluid selection dropdown\" formControlName=\"calculation_basis\"\r\n              (change)=\"makeJqueryFields()\">\r\n              <option value=\"\" selected disabled hidden>Calculation Basis</option>\r\n              <option value=\"per_person\">By Person</option>\r\n              <option value=\"by_airline\">By Airline</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"six wide field\"\r\n            [ngClass]=\"{'error': (isSubmitted && addMarkupForm.controls.flightsMarkup['controls'].calculation_type.status == 'INVALID')}\">\r\n            <label>Calculation Type</label>\r\n            <select class=\"ui fluid selection dropdown\" formControlName=\"calculation_type\">\r\n              <!-- <option value=\"\" selected>Status</option> -->\r\n              <option value=\"\" selected disabled hidden>Calculation Type</option>\r\n              <option value=\"far_base\">Base Amount</option>\r\n              <option value=\"far_total\">Total</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"fields\">\r\n          <div class=\"six wide field\"\r\n            [ngClass]=\"{'error': (isSubmitted && addMarkupForm.controls.flightsMarkup['controls'].markup.status == 'INVALID')}\">\r\n            <label>Markup</label>\r\n            <input type=\"number\" name=\"markup\" placeholder=\"Markup Value\" formControlName=\"markup\">\r\n          </div>\r\n          <div class=\"six wide field\"\r\n            [ngClass]=\"{'error': (isSubmitted && addMarkupForm.controls.flightsMarkup['controls'].markup_mode.status == 'INVALID')}\">\r\n            <label>Markup Mode</label>\r\n            <select class=\"ui fluid selection dropdown\" formControlName=\"markup_mode\">\r\n              <option value=\"\" selected disabled hidden>Markup Mode</option>\r\n              <!-- <option value=\"\" selected>Status</option> -->\r\n              <option value=\"by_percentage\">Percentage</option>\r\n              <option value=\"by_amount\">Amount</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"fields\">\r\n          <div class=\"six wide field field-inline\">\r\n            <label class=\"checkbox-field\">Pax Type (s)</label>\r\n            <div class=\"four wide field\">\r\n              <div class=\"ui checkbox\">\r\n                <input type=\"checkbox\" formControlName=\"is_adult\">\r\n                <label>Adult</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"four wide field\">\r\n              <div class=\"ui checkbox\">\r\n                <input type=\"checkbox\" formControlName=\"is_child\">\r\n                <label>Child</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"four wide field\">\r\n              <div class=\"ui checkbox\">\r\n                <input type=\"checkbox\" formControlName=\"is_infant\">\r\n                <label>Infant</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"four wide field \">\r\n              <div class=\"ui checkbox\">\r\n                <input type=\"checkbox\" formControlName=\"is_all\">\r\n                <label>All</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"\" *ngIf=\"addMarkupForm.controls.flightsMarkup['controls'].calculation_basis.value == 'by_airline'\">\r\n          <!-- <h4 class=\"ui header\">\r\n                        Apply specific search or itinerary scenario ( If this markup rule applies to flight search or itinerary, please specify. Otherwise this rule will apply to the whole content source )\r\n                    </h4> -->\r\n          <div class=\"fields\">\r\n            <div class=\"six wide field input-tagbased mb-0\">\r\n              <label>Origin Airport</label>\r\n              <select class=\"ui fluid search dropdown\" formControlName=\"org_airport\" multiple=\"\">\r\n                <option *ngFor=\"let airport of airports\" value=\"{{airport.AirportCode}}\"> {{ airport.AirportCode }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n            <div class=\"six wide field input-tagbased mb-0\">\r\n              <label>Destination Airport</label>\r\n              <select class=\"ui fluid search dropdown\" formControlName=\"dest_airport\" multiple=\"\">\r\n                <option *ngFor=\"let airport of airports\" value=\"{{airport.AirportCode}}\"> {{ airport.AirportCode }}\r\n                </option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"fields\">\r\n            <div class=\"six wide field input-tagbased mb-0\">\r\n              <label>Marketing Careers</label>\r\n              <mat-form-field style=\"width: 100%;top: -10px;\">\r\n                <mat-chip-list #chipList3>\r\n                  <mat-chip\r\n                    *ngFor=\"let val of addMarkupForm.controls.flightsMarkup['controls'].marketing_carriers.value\"\r\n                    [selectable]=\"selectable\" [removable]=\"removable\" (removed)=\"remove(val,3)\">\r\n                    {{val.name}}\r\n                    <mat-icon matChipRemove *ngIf=\"removable\">x</mat-icon>\r\n                  </mat-chip>\r\n                </mat-chip-list>\r\n                <input placeholder=\"Marketing Careers\" [matChipInputFor]=\"chipList3\"\r\n                  [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\"\r\n                  (matChipInputTokenEnd)=\"add($event,3)\">\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <!-- \r\n                  <h4 class=\"ui header\"> \r\n                    Apply specific search or itinerary scenario ( If this markup rule applies to flight search or itinerary, please specify. Otherwise this rule will apply to the whole content source ) \r\n                  </h4> -->\r\n          <div class=\"fields\">\r\n            <div class=\"six wide field input-tagbased mb-0\">\r\n              <label>Service Classes</label>\r\n              <mat-form-field style=\"width: 100%; top: -10px;\">\r\n                <mat-chip-list #chipList4>\r\n                  <mat-chip *ngFor=\"let val of addMarkupForm.controls.flightsMarkup['controls'].service_class.value\"\r\n                    [selectable]=\"selectable\" [removable]=\"removable\" (removed)=\"remove(val,4)\">\r\n                    {{val.name}}\r\n                    <mat-icon matChipRemove *ngIf=\"removable\">x</mat-icon>\r\n                  </mat-chip>\r\n                </mat-chip-list>\r\n                <input placeholder=\"Service Classes\" class=\"input_mat\" [matChipInputFor]=\"chipList4\"\r\n                  [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\"\r\n                  (matChipInputTokenEnd)=\"add($event,4)\">\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"six wide field\">\r\n              <label>Trip Type</label>\r\n              <select class=\"ui fluid selection dropdown\" formControlName=\"itinerary_type\">\r\n                <option value=\"\" selected disabled hidden>Trip Type</option>\r\n                <option value=\"oneway\">One Way</option>\r\n                <option value=\"roundtrip\">Round Trip</option>\r\n                <option value=\"both\">Both</option>\r\n              </select>\r\n            </div>\r\n            <!-- </div> -->\r\n            <!-- <div class=\"ui fitted divider\"></div> -->\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"ui fitted divider\"></div> -->\r\n      </div>\r\n      <div class=\"markup-block\" *ngIf=\"addMarkupForm.controls.hotelsMarkup\" formGroupName=\"hotelsMarkup\">\r\n        <h4 class=\"ui header\">Hotel Markup Rules</h4>\r\n        <div class=\"fields\">\r\n          <div class=\"three wide field\">\r\n            <input type=\"number\" name=\"markup\" placeholder=\"Markup Value\" formControlName=\"markup\">\r\n          </div>\r\n          <div class=\"three wide field\">\r\n            <select class=\"ui fluid selection dropdown\" formControlName=\"markup_mode\">\r\n              <option value=\"by_percentage\">Percentage</option>\r\n              <option value=\"by_amount\">Amount</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"three wide field\"\r\n            [hidden]=\"addMarkupForm.controls.hotelsMarkup['controls'].markup_mode.value == 'by_amount'\">\r\n            <input type=\"number\" name=\"minMarkup\" placeholder=\"Minimum Markup\" formControlName=\"min_markup\">\r\n          </div>\r\n          <div class=\"three wide field\"\r\n            [hidden]=\"addMarkupForm.controls.hotelsMarkup['controls'].markup_mode.value == 'by_amount'\">\r\n            <input type=\"number\" name=\"maxMarkup\" placeholder=\"Maximum Markup\" formControlName=\"max_markup\">\r\n          </div>\r\n        </div>\r\n        <div class=\"ui fitted divider\"></div>\r\n      </div>\r\n      <div class=\"markup-block\" *ngIf=\"addMarkupForm.controls.activitiesMarkup\" formGroupName=\"activitiesMarkup\">\r\n        <h4 class=\"ui header\">Activities Markup Rules</h4>\r\n        <div class=\"fields\">\r\n          <div class=\"three wide field\">\r\n            <input type=\"number\" name=\"markup\" placeholder=\"Markup Value\" formControlName=\"markup\">\r\n          </div>\r\n          <div class=\"three wide field\">\r\n            <select class=\"ui fluid selection dropdown\" formControlName=\"markup_mode\">\r\n              <option value=\"by_percentage\">Percentage</option>\r\n              <option value=\"by_amount\">Amount</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"three wide field\"\r\n            [hidden]=\"addMarkupForm.controls.activitiesMarkup['controls'].markup_mode.value == 'by_amount'\">\r\n            <input type=\"number\" name=\"minMarkup\" placeholder=\"Minimum Markup\" formControlName=\"min_markup\">\r\n          </div>\r\n          <div class=\"three wide field\"\r\n            [hidden]=\"addMarkupForm.controls.activitiesMarkup['controls'].markup_mode.value == 'by_amount'\">\r\n            <input type=\"number\" name=\"maxMarkup\" placeholder=\"Maximum Markup\" formControlName=\"max_markup\">\r\n          </div>\r\n        </div>\r\n        <div class=\"ui fitted divider\"></div>\r\n      </div>\r\n      <div class=\"markup-block\" *ngIf=\"addMarkupForm.controls.carsMarkup\" formGroupName=\"carsMarkup\">\r\n        <h4 class=\"ui header\">Cars Markup Rules</h4>\r\n        <div class=\"fields\">\r\n          <div class=\"three wide field\">\r\n            <input type=\"number\" name=\"markup\" placeholder=\"Markup Value\" formControlName=\"markup\">\r\n          </div>\r\n          <div class=\"three wide field\">\r\n            <select class=\"ui fluid selection dropdown\" formControlName=\"markup_mode\">\r\n              <option value=\"by_percentage\">Percentage</option>\r\n              <option value=\"by_amount\">Amount</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"three wide field\"\r\n            [hidden]=\"addMarkupForm.controls.carsMarkup['controls'].markup_mode.value == 'by_amount'\">\r\n            <input type=\"number\" name=\"minMarkup\" placeholder=\"Minimum Markup\" formControlName=\"min_markup\">\r\n          </div>\r\n          <div class=\"three wide field\"\r\n            [hidden]=\"addMarkupForm.controls.carsMarkup['controls'].markup_mode.value == 'by_amount'\">\r\n            <input type=\"number\" name=\"maxMarkup\" placeholder=\"Maximum Markup\" formControlName=\"max_markup\">\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"ui fitted divider\"></div>\r\n      </div>\r\n      <div class=\"markup-block\" *ngIf=\"addMarkupForm.controls.transfersMarkup\" formGroupName=\"transfersMarkup\">\r\n        <h4 class=\"ui header\">Transfer Markup Rules</h4>\r\n        <div class=\"fields\">\r\n          <div class=\"three wide field\">\r\n            <input type=\"number\" name=\"markup\" placeholder=\"Markup Value\" formControlName=\"markup\">\r\n          </div>\r\n          <div class=\"three wide field\">\r\n            <select class=\"ui fluid selection dropdown\" formControlName=\"markup_mode\">\r\n              <option value=\"by_percentage\">Percentage</option>\r\n              <option value=\"by_amount\">Amount</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"three wide field\"\r\n            [hidden]=\"addMarkupForm.controls.transfersMarkup['controls'].markup_mode.value == 'by_amount'\">\r\n            <input type=\"number\" name=\"minMarkup\" placeholder=\"Minimum Markup\" formControlName=\"min_markup\">\r\n          </div>\r\n          <div class=\"three wide field\"\r\n            [hidden]=\"addMarkupForm.controls.transfersMarkup['controls'].markup_mode.value == 'by_amount'\">\r\n            <input type=\"number\" name=\"maxMarkup\" placeholder=\"Maximum Markup\" formControlName=\"max_markup\">\r\n          </div>\r\n        </div>\r\n        <div class=\"ui fitted divider\"></div>\r\n      </div>\r\n      <div class=\"markup-block\" *ngIf=\"addMarkupForm.controls.insurancesMarkup\" formGroupName=\"insurancesMarkup\">\r\n        <h4 class=\"ui header\">Insurance Markup Rules</h4>\r\n        <div class=\"fields\">\r\n          <div class=\"three wide field\">\r\n            <input type=\"number\" name=\"markup\" placeholder=\"Markup Value\" formControlName=\"markup\">\r\n          </div>\r\n          <div class=\"three wide field\">\r\n            <select class=\"ui fluid selection dropdown\" formControlName=\"markup_mode\">\r\n              <option value=\"by_percentage\">Percentage</option>\r\n              <option value=\"by_amount\">Amount</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"three wide field\"\r\n            [hidden]=\"addMarkupForm.controls.insurancesMarkup['controls'].markup_mode.value == 'by_amount'\">\r\n            <input type=\"number\" name=\"minMarkup\" placeholder=\"Minimum Markup\" formControlName=\"min_markup\">\r\n          </div>\r\n          <div class=\"three wide field\"\r\n            [hidden]=\"addMarkupForm.controls.insurancesMarkup['controls'].markup_mode.value == 'by_amount'\">\r\n            <input type=\"number\" name=\"maxMarkup\" placeholder=\"Maximum Markup\" formControlName=\"max_markup\">\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"ui fitted divider\"></div>\r\n      </div>\r\n      <div class=\"markup-block\" *ngIf=\"addMarkupForm.controls.cruisesMarkup\" formGroupName=\"cruisesMarkup\">\r\n        <h4 class=\"ui header\">Cruises Markup Rules</h4>\r\n        <div class=\"fields\">\r\n          <div class=\"three wide field\">\r\n            <input type=\"number\" name=\"markup\" placeholder=\"Markup Value\" formControlName=\"markup\">\r\n          </div>\r\n          <div class=\"three wide field\">\r\n            <select class=\"ui fluid selection dropdown\" formControlName=\"markup_mode\">\r\n              <option value=\"by_percentage\">Percentage</option>\r\n              <option value=\"by_amount\">Amount</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"three wide field\"\r\n            [hidden]=\"addMarkupForm.controls.cruisesMarkup['controls'].markup_mode.value == 'by_amount'\">\r\n            <input type=\"number\" name=\"minMarkup\" placeholder=\"Minimum Markup\" formControlName=\"min_markup\">\r\n          </div>\r\n          <div class=\"three wide field\"\r\n            [hidden]=\"addMarkupForm.controls.cruisesMarkup['controls'].markup_mode.value == 'by_amount'\">\r\n            <input type=\"number\" name=\"maxMarkup\" placeholder=\"Maximum Markup\" formControlName=\"max_markup\">\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"ui fitted divider\"></div>\r\n      </div>\r\n      <!-- <div class=\"markup-block\" *ngIf=\"showEditions('holiday')\" formGroupName=\"holidaysMarkup\">\r\n        <h4 class=\"ui header\">Holidays Markup Rules</h4>\r\n        <div class=\"fields\">\r\n          <div class=\"three wide field\">\r\n            <input type=\"number\" name=\"markup\" placeholder=\"Markup Value\" formControlName=\"markup\">\r\n          </div>\r\n          <div class=\"three wide field\">\r\n            <select class=\"ui fluid selection dropdown\" formControlName=\"markup_mode\">\r\n              <option value=\"by_percentage\">Percentage</option>\r\n              <option value=\"by_amount\">Amount</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"three wide field\"\r\n            [hidden]=\"addMarkupForm.controls.holidaysMarkup.controls.markup_mode.value == 'by_amount'\">\r\n            <input type=\"number\" name=\"minMarkup\" placeholder=\"Minimum Markup\" formControlName=\"min_markup\">\r\n          </div>\r\n          <div class=\"three wide field\"\r\n            [hidden]=\"addMarkupForm.controls.holidaysMarkup.controls.markup_mode.value == 'by_amount'\">\r\n            <input type=\"number\" name=\"maxMarkup\" placeholder=\"Maximum Markup\" formControlName=\"max_markup\">\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"ui fitted divider\"></div>\r\n      </div> -->\r\n    </div>\r\n    <!-- <div class=\"pos_btn-panel\">\r\n      <button mat-button class=\"ui secondary  button\">\r\n        Cancel\r\n      </button>\r\n      <button mat-button matStepperNext class=\"ui primary  button\">\r\n        Save And Next\r\n      </button>\r\n    </div> -->\r\n    <div class=\"bookings_btn-panel group_save-btn save-btn-block\">\r\n      <button class=\"ui primary button commissionCode_btn fluid\" type=\"submit\" (click)=\"addMark(null)\"\r\n        *ngIf=\"showSaveButton\">\r\n        <span class=\"tourCode_text\">Save</span>\r\n      </button>\r\n      <!-- <button class=\"ui button commissionCode_btn fluid\">\r\n                    <span class=\"tourCode_text\">Reset</span>\r\n                </button> -->\r\n      <button class=\"ui primary button commissionCode_btn fluid\" (click)=\"onUpdateMarkup(null)\"\r\n        *ngIf=\"showUpdateButton\">\r\n        <span class=\"tourCode_text\">Update</span>\r\n      </button>\r\n    </div>\r\n  </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/markup-configuration/mark/mark.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/markup-configuration/mark/mark.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui fluid container\">\r\n  <form class=\"ui form\" name=\"form\" #f=\"ngForm\" novalidate>\r\n    <div [ngClass]=\"{'head-search-block': (showAddMarkupForm) }\">\r\n      <div class=\"fields search-section\" [ngClass]=\"{'list-search-block': (showAddMarkupForm) }\">\r\n        <div class=\"four wide field bookings_btn-panel\">\r\n          <button class=\"ui primary button filterMarkUp_btn\" tabindex=\"0\" (click)=\"onClickAddNewMarkup(true)\"\r\n            *ngIf=\"showListMarkup\">\r\n            <span class=\"filterMarkUp_list\">Add New Markup</span>\r\n          </button>\r\n          <a href=\"javascript:void(0)\" class=\"ui filterMarkUp_btn goto_list\" tabindex=\"0\" (click)=\"onClickListMarkup()\"\r\n            *ngIf=\"showAddMarkupForm\">\r\n            <span class=\"\">\r\n              <img src=\"../../../../../assets/icons/goto_link_arrow.svg\" class=\"goto-link\" />\r\n              Goto List Markup\r\n            </span>\r\n          </a>\r\n        </div>\r\n        <div class=\"twelve wide field search-btn-block\" *ngIf=\"showListMarkup\">\r\n          <!-- <div class=\"ten wide field\"> -->\r\n          <input type=\"text\" placeholder=\"Markup Name\" [(ngModel)]=\"searchObject.markupname\" name=\"markupname\">\r\n          <!-- </div> -->\r\n          <div class=\"bookings_btn-panel\">\r\n            <button (click)=\"searchChange()\" class=\"ui primary button addNewGroup_btn\" tabindex=\"0\">\r\n              <span class=\"addNewGroup-text\"> Search </span>\r\n            </button>\r\n            <button (click)=\"resetFilter()\" class=\"ui reset button addNewGroup_btn\" tabindex=\"0\">\r\n              <span class=\"addNewGroup-text\"> Reset </span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"list-markup result-block\" *ngIf=\"showAddMarkupForm\"\r\n      [ngClass]=\"{'list-code-block': (showAddMarkupForm) }\">\r\n      <app-add-markup [groupId]=\"groupId\" [groupData]=\"groups\" [supplierData]=\"allSuppliers\" [flag]='flag'\r\n        [mark]=\"markupRow\" [flagEdit]='flagEdit' (dataToParent)=\"eventFromChild($event)\"></app-add-markup>\r\n    </div>\r\n    <div class=\"list-markup result-block\" *ngIf=\"showListMarkup\">\r\n      <!-- <div class=\"field\">\r\n        <div class=\"five fields\">\r\n        </div>\r\n      </div> -->\r\n      <div class=\"user-table-list b2c-list-user-table\" *ngIf=\"showListMarkup\">\r\n        <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n          [rowHeight]=\"'auto'\" [rows]='filteredMarkupsList' [count]=\"totalCount\" [offset]=\"offset\"\r\n          [externalPaging]=\"true\" (page)=\"pageCallback($event)\" [sorts]=\"[{prop: 'created', dir: 'desc'}]\">\r\n          <ngx-datatable-column name=\"Group Name\" prop=\"sale\">\r\n            <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n              {{ value.name }}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Markup Name\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template let-value=\"value\">\r\n              <ng-container *ngIf=\"row.title && row.title !=null; then showTitle; else noTitle\">\r\n              </ng-container>\r\n              <ng-template #showTitle>\r\n                {{row.title}}\r\n              </ng-template>\r\n              <ng-template #noTitle>\r\n                ---\r\n              </ng-template>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Markup id\" prop=\"markup_id\">\r\n            <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n              {{ value}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <!-- <ngx-datatable-column name=\"Created\" prop=\"created\">\r\n            <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n              {{ value | amDateFormat:'LL'}}\r\n            </ng-template>\r\n          </ngx-datatable-column> -->\r\n          <ngx-datatable-column name=\"Mark up Value\" prop=\"markup_flight\">\r\n            <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n              <ng-container *ngIf=\"value.markup_mode=='by_percentage'; then showPer; else noPer\">\r\n              </ng-container>\r\n              <ng-template #showPer>\r\n                {{ value.markup}}%\r\n              </ng-template>\r\n              <ng-template #noPer>\r\n                {{ value.markup}}\r\n              </ng-template>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Preference\" prop=\"priority\">\r\n            <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n              <span *ngIf=\"value == 1\"> Inherit </span>\r\n              <span *ngIf=\"value != 1\"> Override </span>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Sale Type\" prop=\"sale\">\r\n            <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n              <span *ngIf=\"value.is_stop_sale == 1\"> Stop Sale </span>\r\n              <span *ngIf=\"value.is_free_sale == 1\"> Free Sale </span>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <!-- <ngx-datatable-column name=\"Sale Start Date\" prop=\"sale\">\r\n            <ng-template ngx-datatable-cell-template let-value=\"value\">{{value.start_date | amDateFormat:'LL'}}\r\n            </ng-template>\r\n          </ngx-datatable-column> -->\r\n          <!-- <ngx-datatable-column name=\"Sale End Date\" prop=\"end_date\">\r\n            <ng-template ngx-datatable-cell-template let-value=\"value\">{{value.end_date | amDateFormat:'LL'}}\r\n            </ng-template>\r\n          </ngx-datatable-column> -->\r\n          <ngx-datatable-column name=\"Status\" prop=\"is_active\">\r\n            <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\r\n              <span *ngIf=\"value == 1\" title=\"Active\" (click)=\"statusToggle(row)\">\r\n                <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>\r\n                <!-- <i class=\"icon\" title=\"click to deactivate\">\r\n                  <img src=\"./../../../../../assets/icons/checkmark.png\" class=\"bookings_input__placeholder-icon cal\" />\r\n                </i> -->\r\n              </span>\r\n              <span *ngIf=\"value != 1\" title=\"Inactive\" (click)=\"statusToggle(row)\">\r\n                <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                <!-- <i class=\"icon\" title=\"click to activate\">\r\n                  <img src=\"./../../../../../assets/icons/cross.png\" class=\"bookings_input__placeholder-icon cal\" />\r\n                </i> -->\r\n              </span>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Created\" prop=\"created\">\r\n            <ng-template ngx-datatable-cell-template let-value=\"value\">{{value | date: 'dd/MM/yyyy'}}</ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Actions\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template let-value=\"value\">\r\n              <span (click)=\"editMark( row )\" class=\"action\" title=\"Edit User\">\r\n                <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n                <!-- <i class=\"icon\">\r\n                  <img src=\"./../../../../../assets/icons/edit.png\" class=\"bookings_input__placeholder-icon cal\" />\r\n                </i> -->\r\n              </span>\r\n              <span (click)=\"deleteMark( row )\" class=\"action\" title=\"Delete\">\r\n                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                <!-- <i class=\"icon\">\r\n                  <img src=\"./../../../../../assets/icons/delete-button.png\"\r\n                    class=\"bookings_input__placeholder-icon cal\" />\r\n                </i> -->\r\n              </span>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <!-- <ngx-datatable-column name=\"view\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template let-value=\"value\">\r\n              <span  class=\"action\" title=\"Edit User\">\r\n                <i class=\"icon\">\r\n                  <img src=\"./../../../../../assets/icons/add_icon.png\" class=\"bookings_input__placeholder-icon cal\" />\r\n                </i>\r\n              </span>\r\n         \r\n            </ng-template>\r\n          </ngx-datatable-column> -->\r\n        </ngx-datatable>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/markup-configuration/markup-configuration.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/markup-configuration/markup-configuration.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"outer-segment animated fadeIn\">\r\n    <div class=\"markup_list title-block\">\r\n        <h3 class=\"markup_title title\">Mark Up Configurations</h3>\r\n    </div>\r\n    <div class=\"ui top attached tabular menu\">\r\n        <div id=\"tab-1\" class=\"active item create_b2b_title\" data-tab=\"first\" >Group / Seasonality</div>\r\n        <div id=\"tab-2\" class=\"item corporate_staff_list\" data-tab=\"second\">Markup Rules</div>\r\n    </div>\r\n    <div class=\"ui bottom attached active tab segment tabContent-block\" data-tab=\"first\">\r\n        <app-sale></app-sale>\r\n    </div>\r\n    <div class=\"ui bottom attached tab segment tabContent-block\" data-tab=\"second\">\r\n        <app-mark [allSuppliers]=\"allSuppliers\" [allGroups]=\"NewGroupSeasonality\" [sale_id]=\"saleIdClicked\" [showListMarkup]=\"showListMarkup\" [showAddMarkupForm]=\"showAddMarkupForm\"></app-mark>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/markup-configuration/sale/addgroup/addgroup.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/markup-configuration/sale/addgroup/addgroup.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"outer-form\">\r\n  <form class=\"ui form pos_basic_form\" [formGroup]=\"addGroupForm\">\r\n    <!-- <h4 class=\"ui header\">Create Group for Markup</h4> -->\r\n    <div class=\"field\">\r\n      <div class=\"five fields\">\r\n        <div class=\"six wide field\"\r\n          [ngClass]=\"{'error': (isSubmitted && addGroupForm.controls.name.status == 'INVALID')}\">\r\n          <label>Group/Seasonality Name<span class=\"mandatory\">*</span></label>\r\n          <input type=\"text\" formControlName=\"name\" value=\"\" name=\"groupSeasonName\" placeholder=\"Group / Seasonality Name\"  >\r\n        </div>\r\n        <div class=\"six wide field\"\r\n          [ngClass]=\"{'error': (isSubmitted && addGroupForm.controls.organisation_id.status == 'INVALID')}\">\r\n          <label>POS</label>\r\n         <select placeholder=\"Select POS\" id=\"pos\" class=\"ui dropdownThree fluid search multiple_search\" value=\"\" formControlName=\"organisation_id\"\r\n            multiple=\"\" name=\"organisation_id\">     \r\n            <option value=\"\" disabled selected>Select one category </option>\r\n            <option *ngFor=\"let org of allPos\" value=\"{{org.organisation_id}}\"> {{org.name}} </option>\r\n          </select>\r\n        </div> \r\n      </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <div class=\"five fields\">\r\n        <div class=\"six wide field\"\r\n          [ngClass]=\"{'error': (isSubmitted && addGroupForm.controls.is_active.status == 'INVALID')}\">\r\n          <label>Status</label>\r\n          <select placeholder=\"Status\" class=\"ui fluid  dropdown\" id=\"dropdown-pos\" formControlName=\"is_active\" value=\"\" >\r\n            <option value=\"\"> Status </option>\r\n            <option value=\"1\">Active</option>\r\n            <option value=\"0\">InActive</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"six wide field\"\r\n          [ngClass]=\"{'error': (isSubmitted && addGroupForm.controls.preference.status == 'INVALID')}\">\r\n          <label>Preference<span class=\"mandatory\">*</span></label>\r\n          <select palceholder=\"Preference\" class=\"ui fluid  dropdown\" id=\"dropdown-preference\"\r\n            formControlName=\"preference\" value=\"\" >\r\n            <option value=\"\"> Preference </option>\r\n            <option value=\"override\">Override</option>\r\n            <option value=\"inherit\">Inherit</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <div class=\"five fields\">\r\n        <div class=\"two wide field sale_check\">\r\n          <div class=\"ui checkbox\">\r\n            <input type=\"radio\" value=\"freesale\" name=\"freesale\" formControlName=\"sale_type\">\r\n            <label for=\"freesale\">Free Sale</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"two wide field sale_check\">\r\n          <div class=\"ui checkbox\">\r\n            <input type=\"radio\" value=\"stopsale\" name=\"stopsale\" formControlName=\"sale_type\">\r\n            <label for=\"stopsale\">Stop Sale</label>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"two wide field sale_check\">\r\n          <div class=\"ui radio\">\r\n            <input type=\"radio\" value=\"freesale\" formControlName=\"sale_type\">\r\n            <label>Free Sale</label>\r\n          </div>\r\n        </div>\r\n        <div class=\"two wide field sale_check\">\r\n          <div class=\"ui radio\">\r\n            <input type=\"radio\" value=\"stopsale\" formControlName=\"sale_type\">\r\n            <label>Stop Sale</label>\r\n          </div>\r\n        </div> -->\r\n        <!-- <div class=\"three wide field\"  [hidden]=\"addGroupForm.controls.sale_type && addGroupForm.controls.sale_type.value == 'freesale'\">\r\n            <input  type=\"text\" class=\"date_field\"  formControlName=\"start_date\" name=\"start_date\" />\r\n            <i class=\"icon\">\r\n              <img src=\"./../../../../assets/icons/calendar.svg\" class=\"corporate_input__placeholder-icon cal\" />\r\n            </i>\r\n          </div> -->\r\n      </div>\r\n    </div>\r\n    <div class=\"field\">\r\n      <div class=\"five fields\">\r\n        <div class=\"six wide field bookings_pickers \"\r\n          [hidden]=\"addGroupForm.controls.sale_type && addGroupForm.controls.sale_type.value == 'freesale'\">\r\n          <label>Sale Start Date</label>\r\n          <div class=\"ui left icon input \">\r\n            <input type=\"text\" placeholder=\"Start Date\" formControlName=\"start_date\" name=\"start_date\" value=\"\" />\r\n            <i class=\"icon\">\r\n              <img src=\"./../../../../assets/icons/calendar.svg\" class=\"bookings_input__placeholder-icon cal\" />\r\n            </i>\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"three wide field\"  [hidden]=\"addGroupForm.controls.sale_type && addGroupForm.controls.sale_type.value == 'freesale'\">\r\n            <input type=\"text\" class=\"date_field\"  placeholder=\"End date\" formControlName=\"end_date\" name=\"end_date\" />\r\n            <i class=\"icon\">\r\n              <img src=\"./../../../../assets/icons/calendar.svg\" class=\"corporate_input__placeholder-icon cal\" />\r\n            </i>\r\n          </div>     -->\r\n        <div class=\"six wide field bookings_pickers \"\r\n          [hidden]=\"addGroupForm.controls.sale_type && addGroupForm.controls.sale_type.value == 'freesale'\">\r\n          <label>Sale End Date</label>\r\n          <div class=\"ui left icon input \">\r\n            <input type=\"text\" placeholder=\"End Date\" formControlName=\"end_date\" name=\"end_date\" value=\"\" required />\r\n            <i class=\"icon\">\r\n              <img src=\"./../../../../assets/icons/calendar.svg\" class=\"bookings_input__placeholder-icon cal\" />\r\n            </i>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"ui fitted divider\"></div> -->\r\n    <h4 class=\"ui header\">Assign Products</h4>\r\n    <div class=\"field\">\r\n      <div class=\"inline fields assign_prod\">\r\n        <div class=\"field\">\r\n          <div class=\"ui checkbox\">\r\n            <input type=\"checkbox\" name=\"flights\" checked=\"checked\" formControlName=\"is_flight\">\r\n            <label for=\"flights\"><span class=\"pos_product_check\">Flights</span></label>\r\n          </div>\r\n        </div>\r\n        <div class=\"field\">\r\n            <div class=\"ui checkbox\">\r\n              <input type=\"checkbox\" name=\"hotels\" formControlName=\"is_hotel\">\r\n              <label for=\"hotels\"><span class=\"pos_product_check\">Hotels</span></label>\r\n            </div>\r\n          </div>\r\n          <div class=\"field\">\r\n            <div class=\"ui  checkbox\">\r\n              <input type=\"checkbox\" name=\"cars\" formControlName=\"is_car\">\r\n              <label for=\"cars\"><span class=\"pos_product_check\">Cars</span></label>\r\n            </div>\r\n          </div>\r\n          <div class=\"field\">\r\n            <div class=\"ui checkbox\">\r\n              <input type=\"checkbox\" name=\"transfers\" formControlName=\"is_transfers\">\r\n              <label for=\"transfers\"><span class=\"pos_product_check\">Transfers</span></label>\r\n            </div>\r\n          </div>\r\n          <div class=\"field\">\r\n            <div class=\"ui checkbox\">\r\n              <input type=\"checkbox\" name=\"activities\" formControlName=\"is_activities\">\r\n              <label for=\"activities\"><span class=\"pos_product_check\">Activities</span></label>\r\n            </div>\r\n          </div>\r\n          <div class=\"field\">\r\n            <div class=\"ui checkbox\">\r\n              <input type=\"checkbox\" name=\"insurances\" formControlName=\"is_insurance\">\r\n              <label for=\"insurances\"><span class=\"pos_product_check\">Insurances</span></label>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"field\">\r\n            <div class=\"ui checkbox\">\r\n              <input type=\"checkbox\" name=\"cruises\" formControlName=\"is_cruises\">\r\n              <label for=\"cruises\"><span class=\"pos_product_check\">Cruises</span></label>\r\n            </div>\r\n          </div> -->\r\n      </div>\r\n    </div>\r\n    <div class=\"pos_btn-panel field\">\r\n      <!-- <p>\r\n          Real-time data: {{ addGroupForm.value | json }}\r\n      </p> -->\r\n      <!-- <button mat-button class=\"ui secondary  button\">\r\n        Assign Office To existing\r\n      </button> -->\r\n      <!-- <button mat-button matStepperNext class=\"ui primary  button\">\r\n        Save And Next\r\n      </button> -->\r\n      <!-- <button mat-button class=\"ui primary  button\" type=\"submit\" >Save</button>\r\n      <button class=\"ui button commissionCode_btn fluid\"  (click)=\"onUpdateGroup()\">\r\n          <span class=\"tourCode_text\">Update</span>\r\n        </button>\r\n    </div> -->\r\n        <div class=\"bookings_btn-panel save-btn-block\">\r\n          <button class=\"ui primary button commissionCode_btn fluid\" type=\"submit\" (click)=\"addGroup(null)\" *ngIf=\"showSaveButton\">\r\n            <span class=\"tourCode_text\">Save</span>\r\n          </button>\r\n          <button class=\"ui primary button commissionCode_btn fluid\" (click)=\"onUpdateGroup(null)\" *ngIf=\"showUpdateButton\">\r\n            <span class=\"tourCode_text\">Update</span>\r\n          </button>\r\n        </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/markup-configuration/sale/sale.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/markup-configuration/sale/sale.component.html ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui fluid container\">\r\n  <form class=\"ui form\" name=\"form\" #f=\"ngForm\" novalidate>\r\n    <div [ngClass]=\"{'head-search-block': (showAddGroupForm) }\">\r\n      <div class=\"fields search-section\" [ngClass]=\"{'list-search-block': (showAddGroupForm) }\">\r\n        <div class=\"four wide field bookings_btn-panel add-btn\">\r\n          <button class=\"ui primary button filterMarkUp_btn\" tabindex=\"0\" (click)=\"onClickAddNewGroup(true)\" *ngIf=\"showListForm\">\r\n            <span class=\"filterMarkUp_list\">Add New Groups</span>\r\n          </button>\r\n          <a href=\"javascript:void(0)\" class=\"ui filterMarkUp_btn goto_list\" tabindex=\"0\" (click)=\"onClickListGroup()\"\r\n            *ngIf=\"showAddGroupForm\">\r\n            <span class=\"\">\r\n              <img src=\"../../../../../assets/icons/goto_link_arrow.svg\" class=\"goto-link\" />\r\n              Goto List Group\r\n            </span>\r\n          </a>\r\n        </div>\r\n        <div class=\"twelve wide field search-btn-block\" *ngIf=\"showListForm\">\r\n          <!-- <div class=\"two wide field\"></div> -->\r\n          <!-- <div class=\"six wide field input_field\"> -->\r\n            <input type=\"text\" placeholder=\"Group / Seasonality Name\" [(ngModel)]=\"searchObject.groupname\"\r\n            name=\"groupname\" />\r\n          <!-- </div> -->\r\n          <div class=\"bookings_btn-panel\">\r\n            <button (click)=\"searchChange()\" class=\"ui primary button addNewGroup_btn\" tabindex=\"0\">\r\n              <span class=\"addNewGroup-text\">Search </span>\r\n            </button>\r\n            <button (click)=\"resetFilter()\" class=\"ui reset button addNewGroup_btn\" tabindex=\"0\">\r\n              <span class=\"addNewGroup-text\"> Reset</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"list-group result-block\" *ngIf=\"showAddGroupForm\" [ngClass]=\"{'list-code-block': (showAddGroupForm) }\">\r\n      <app-add-group [change]=\"groupRow\" [flag]=\"flag\" [flgEdit]=\"flgEdit\" (sendDataToParent)=\"eventFromChild($event)\">\r\n      </app-add-group>\r\n    </div>\r\n    <div class=\"list-group result-block\" *ngIf=\"showListForm\">\r\n      <div class=\"user-table-list b2c-list-user-table\">\r\n        <ngx-datatable #table class=\"table\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n          [rowHeight]=\"'auto'\" [rows]=\"FilteredGroups\" [count]=\"totalCount\" [offset]=\"offset\" [externalPaging]=\"true\" (page)=\"pageCallback($event)\" [sorts]=\"[{prop: 'created', dir: 'desc'}]\">\r\n          <!-- <ngx-datatable-column name=\"Sale ID\" prop=\"sale_id\">\r\n          </ngx-datatable-column> -->\r\n          <ngx-datatable-column name=\"Group name\" prop=\"name\">\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Organisation\" prop=\"organisation\">\r\n            <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n              <span *ngIf=\"!value\">---</span>\r\n              <span *ngIf=\"value\">{{value}}</span>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <!-- <ngx-datatable-column name=\"Add Markup\" prop=\"markup_id\">\r\n                    <ng-template let-row=\"row\"  ngx-datatable-cell-template let-value=\"value\">\r\n                      <div class=\"center\">\r\n                        <div class=\"addMarkUp\" (click)=\"addMarkupingroup(row)\">\r\n                          Add\r\n                        </div>\r\n                      </div>\r\n                      \r\n                    </ng-template>\r\n                </ngx-datatable-column> -->\r\n          <ngx-datatable-column name=\"Preference\" prop=\"preference\">\r\n            <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n             <span>{{value}}</span>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Date\" prop=\"created\" >\r\n            <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n              <span>{{value | date:'short'}}</span>\r\n             </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Sale Type\" prop=\"is_stop_sale, is_free_sale\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template let-value=\"value\">\r\n              <span *ngIf=\"row.is_stop_sale == 1\"> Stop Sale </span>\r\n              <span *ngIf=\"row.is_free_sale == 1\"> Free Sale </span>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Status\" prop=\"is_active\">\r\n            <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\r\n              <span *ngIf=\"value == 1\" title=\"Active\" (click)=\"statusToggle(row)\">\r\n                <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>\r\n                <!-- <i class=\"icon\"  title=\"click to deactivate\">\r\n                  <img src=\"./../../../../../assets/icons/checkmark.png\" class=\"bookings_input__placeholder-icon cal\" />\r\n                </i> -->\r\n              </span>\r\n              <span *ngIf=\"value != 1\" title=\"click to activate\" (click)=\"statusToggle(row)\">\r\n                <!-- <img src=\"./../../../../../assets/icons/cross.png\" class=\"bookings_input__placeholder-icon cal\" /> -->\r\n                <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n              </span>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Actions\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template let-value=\"value\">\r\n              <span (click)=\"editGroup(row)\" class=\"action\" title=\"Edit user\">\r\n                <!-- <i class=\"icon\">\r\n                  <img src=\"./../../../../../assets/icons/edit.png\" class=\"bookings_input__placeholder-icon cal\" />\r\n                </i> -->\r\n                <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n              </span>\r\n              <span (click)=\"deleteGroup(row)\" class=\"action\" title=\"Delete User\">\r\n                <!-- <i class=\"icon\">\r\n                  <img src=\"./../../../../../assets/icons/delete-button.png\"\r\n                    class=\"bookings_input__placeholder-icon cal\" /> </i> -->\r\n                    <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                  </span>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n        </ngx-datatable>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/layout/setup-configuration/markup-configuration/mark/addmarkup/addmarkup.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/markup-configuration/mark/addmarkup/addmarkup.component.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".outer {\n  margin: 0px 20px 0px 15px;\n}\n\n.outer__add-pos__title {\n  margin: 0;\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #E0E0E0;\n}\n\n.tourCode_btn,\n.addTogg_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n}\n\n.tourCode_text,\n.addTogg_text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.corporate_input__placeholder-icon {\n  position: relative;\n  width: 18px;\n  bottom: 28px;\n  left: 9px;\n}\n\ndiv.upload {\n  box-sizing: border-box;\n  height: 15px;\n  width: 123px;\n  border-radius: 3px;\n  background-color: #FFF;\n  border: 0.5px solid #808080;\n  box-shadow: 0 0.25px 0.1px 0 rgba(0, 0, 0, 0.5);\n}\n\ndiv.upload input {\n  display: block !important;\n  width: 123px !important;\n  height: 15px !important;\n  opacity: 0 !important;\n  overflow: hidden !important;\n}\n\n.file_choose {\n  position: relative;\n  left: 27px;\n  bottom: 6px;\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 9px;\n  line-height: 10px;\n}\n\n.uploadinImg_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n}\n\n.uploadinImg_btn__text,\n.save-next_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 12px;\n}\n\n.file_table__img {\n  border: none;\n  background-color: #dfeafb5e;\n}\n\n.save-next_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.field input::-webkit-input-placeholder {\n  font-size: 14px;\n}\n\n.field input::-moz-placeholder {\n  font-size: 14px;\n}\n\n.field input::-ms-input-placeholder {\n  font-size: 14px;\n}\n\n.field input::placeholder,\n.input_mat {\n  font-size: 14px;\n}\n\n.ui.pointing.secondary.menu {\n  border: none;\n}\n\n.item.stepper__progress {\n  width: 167px;\n}\n\n.tab.segment.stepper__segment-outline {\n  border: none;\n  box-shadow: none;\n}\n\n.office-info_icon {\n  position: relative;\n  top: 20px;\n  right: 85px;\n}\n\n.pos_access-rights {\n  color: #828282;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 11px;\n  line-height: 12px;\n}\n\n.cancel_btn {\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.cancel_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.issue_date {\n  text-indent: 17px;\n}\n\n.wide.field.sale_check {\n  margin-top: 10px;\n}\n\n.assign_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.assign_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 15px;\n}\n\n.circleIcon {\n  height: 20px;\n  width: 20px;\n  background-color: #0D801C;\n  border-radius: 50%;\n  display: inline-block;\n  margin-top: 6px;\n}\n\n.plusIcon {\n  color: #FFF;\n  font-size: 17px;\n  font-weight: 100;\n  line-height: 28px;\n  text-align: center;\n  margin-left: 0px;\n  margin-top: -3px;\n}\n\n::ng-deep.mat-step-icon-content {\n  height: 19px;\n  width: 19px;\n  color: #C8C8C8;\n  background-color: #C8C8C8;\n  border-radius: 50%;\n}\n\n::ng-deep.mat-step-icon-state-number.mat-step-icon.mat-step-icon-selected {\n  border: 1px solid #3867B1;\n}\n\n::ng-deep.mat-horizontal-stepper-header-container {\n  width: 40%;\n}\n\n::ng-deep.mat-step-label {\n  color: #3867b1;\n}\n\n.pos_btn-panel {\n  position: initial;\n  right: 68px;\n  bottom: 97px;\n  text-align: right;\n}\n\n.pos_btn-panel .secondary {\n  width: 104.87px;\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.pos_btn-panel .primary {\n  width: 124.87px;\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.field-inline .field {\n  display: inline-block;\n}\n\n.markup-block {\n  margin-top: 50px;\n}\n\n.right.floated.two.wide.column.group_save-btn {\n  display: -webkit-box;\n  display: flex;\n}\n\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n\n.ui.form .three.wide.field,\n.ui.form .field > .checkbox-field,\n.ui.form .six.wide.field {\n  margin-bottom: 16px;\n}\n\n.ui.form .six.wide.field.mb-0 {\n  margin-bottom: 0px;\n}\n\n.mat-form-field-wrapper {\n  padding-bottom: 0px;\n}\n\n::ng-deep .mat-form-field-underline {\n  display: none;\n}\n\n::ng-deep.mat-form-field-appearance-legacy .mat-form-field-wrapper {\n  padding-bottom: 0px;\n}\n\n.save-btn-block {\n  position: relative;\n  top: 32px;\n  right: -24px;\n}\n\n.save-btn-block button {\n  float: right;\n  margin-right: 10px;\n  margin-top: -50px;\n}\n\n@media (max-width: 1440px) {\n  .ui.form .tourCode_btn {\n    margin-right: 0px;\n  }\n  .ui.form .bookings_btn-panel.list-code {\n    padding-left: 0px;\n  }\n  .ui.form .save-btn-block {\n    width: auto;\n    margin: 0px auto;\n    position: relative;\n    top: 24px;\n    right: -16px;\n  }\n}\n\n@media (max-width: 1280px) {\n  .result-block {\n    width: auto;\n    margin: 20px;\n  }\n\n  .listCodeWrapper {\n    padding: 0px 10px;\n  }\n\n  .save-btn-block button {\n    right: 120px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vbWFya3VwLWNvbmZpZ3VyYXRpb24vbWFyay9hZGRtYXJrdXAvRTpcXEJlbGFsXFxwcm9qZWN0c1xcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxzZXR1cC1jb25maWd1cmF0aW9uXFxtYXJrdXAtY29uZmlndXJhdGlvblxcbWFya1xcYWRkbWFya3VwXFxhZGRtYXJrdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zZXR1cC1jb25maWd1cmF0aW9uL21hcmt1cC1jb25maWd1cmF0aW9uL21hcmsvYWRkbWFya3VwL2FkZG1hcmt1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0NBQUE7RUFDQSx3Q0FBQTtBQ0NKOztBREVBO0VBQ0ksK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSw0Q0FBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7O0VBRUksa0JBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBOztFQUVJLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDQ0o7O0FEWUE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0NBQUE7QUNUSjs7QURZQTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUNUSjs7QURZQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNUSjs7QURZQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7QUNUSjs7QURZQTs7RUFFSSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ1RKOztBRFlBO0VBQ0ksWUFBQTtFQUNBLDJCQUFBO0FDVEo7O0FEWUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUZBQUE7QUNUSjs7QURZQTtFQUVJLGVBQUE7QUNUSjs7QURPQTtFQUVJLGVBQUE7QUNUSjs7QURPQTtFQUVJLGVBQUE7QUNUSjs7QURPQTs7RUFFSSxlQUFBO0FDVEo7O0FEWUE7RUFDSSxZQUFBO0FDVEo7O0FEWUE7RUFDSSxZQUFBO0FDVEo7O0FEWUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNUSjs7QURZQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNUSjs7QURZQTtFQUNJLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1RKOztBRFlBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlGQUFBO0FDVEo7O0FEWUE7RUFDSSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDVEo7O0FEWUE7RUFDSSxpQkFBQTtBQ1RKOztBRFlBO0VBQ0ksZ0JBQUE7QUNUSjs7QURZQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpRkFBQTtBQ1RKOztBRFlBO0VBQ0ksV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNUSjs7QURZQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBQ1RKOztBRFlBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDVEo7O0FEWUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDVEo7O0FEWUE7RUFDSSx5QkFBQTtBQ1RKOztBRFlBO0VBQ0ksVUFBQTtBQ1RKOztBRFlBO0VBQ0ksY0FBQTtBQ1RKOztBRFlBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDVEo7O0FEVUk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlGQUFBO0FDUlI7O0FEVUk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlGQUFBO0FDUlI7O0FEWUE7RUFDSSxxQkFBQTtBQ1RKOztBRFlBO0VBQ0ksZ0JBQUE7QUNUSjs7QURZQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtBQ1RKOztBRFlBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDVEo7O0FEWUE7OztFQUdJLG1CQUFBO0FDVEo7O0FEV0E7RUFDSSxrQkFBQTtBQ1JKOztBRFdBO0VBQ0ksbUJBQUE7QUNSSjs7QURXQTtFQUNJLGFBQUE7QUNSSjs7QURXQTtFQUNJLG1CQUFBO0FDUko7O0FEV0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDUko7O0FEU0k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ1BSOztBRFdBO0VBRVE7SUFDSSxpQkFBQTtFQ1RWO0VEV007SUFDSSxpQkFBQTtFQ1RWO0VEV007SUFDSSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLFNBQUE7SUFDQSxZQUFBO0VDVFY7QUFDRjs7QURhQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUNYTjs7RURhRTtJQUNJLGlCQUFBO0VDVk47O0VEYU07SUFDSSxZQUFBO0VDVlY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zZXR1cC1jb25maWd1cmF0aW9uL21hcmt1cC1jb25maWd1cmF0aW9uL21hcmsvYWRkbWFya3VwL2FkZG1hcmt1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlciB7XHJcbiAgICBtYXJnaW46IDBweCAyMHB4IDBweCAxNXB4O1xyXG59XHJcblxyXG4ub3V0ZXJfX2FkZC1wb3NfX3RpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLm1lbnU+Lml0ZW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI4NTcxNDI5cmVtIDAgMCAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLmJvdHRvbS5hdHRhY2hlZC5hY3RpdmUudGFiLnNlZ21lbnQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbn1cclxuXHJcbi50YWIuc2VnbWVudCB7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjRTBFMEUwO1xyXG59XHJcblxyXG4udG91ckNvZGVfYnRuLFxyXG4uYWRkVG9nZ19idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcclxufVxyXG5cclxuLnRvdXJDb2RlX3RleHQsXHJcbi5hZGRUb2dnX3RleHQge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBib3R0b206IDI4cHg7XHJcbiAgICBsZWZ0OiA5cHg7XHJcbn1cclxuXHJcbi8vIC5vdXRlci1mb3JtLFxyXG4vLyAub3V0ZXJfY29ycEZvcm0ge1xyXG4vLyAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICAgIGJvcmRlcjogMC41cHggc29saWQgIzgwODA4MDtcclxuLy8gICAgIG1hcmdpbjogNDVweCAzMnB4IDExMXB4IDI1cHg7XHJcbi8vIH1cclxuLy8gLnVpLmZvcm0ucG9zX2Jhc2ljX2Zvcm0ge1xyXG4vLyAgICAgbWFyZ2luOiAxN3B4IDIzcHggMjVweCAyMnB4O1xyXG4vLyB9XHJcbmRpdi51cGxvYWQge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHdpZHRoOiAxMjNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICM4MDgwODA7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuMjVweCAwLjFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuZGl2LnVwbG9hZCBpbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEyM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpbGVfY2hvb3NlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDI3cHg7XHJcbiAgICBib3R0b206IDZweDtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxufVxyXG5cclxuLnVwbG9hZGluSW1nX2J0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xyXG59XHJcblxyXG4udXBsb2FkaW5JbWdfYnRuX190ZXh0LFxyXG4uc2F2ZS1uZXh0X2J0bl9fdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTJweDtcclxufVxyXG5cclxuLmZpbGVfdGFibGVfX2ltZyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlYWZiNWU7XHJcbn1cclxuXHJcbi5zYXZlLW5leHRfYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIsXHJcbi5pbnB1dF9tYXQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4udWkucG9pbnRpbmcuc2Vjb25kYXJ5Lm1lbnUge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uaXRlbS5zdGVwcGVyX19wcm9ncmVzcyB7XHJcbiAgICB3aWR0aDogMTY3cHg7XHJcbn1cclxuXHJcbi50YWIuc2VnbWVudC5zdGVwcGVyX19zZWdtZW50LW91dGxpbmUge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLm9mZmljZS1pbmZvX2ljb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDg1cHg7XHJcbn1cclxuXHJcbi5wb3NfYWNjZXNzLXJpZ2h0cyB7XHJcbiAgICBjb2xvcjogIzgyODI4MjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4uY2FuY2VsX2J0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0RjRGO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uY2FuY2VsX2J0bl9fdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmlzc3VlX2RhdGUge1xyXG4gICAgdGV4dC1pbmRlbnQ6IDE3cHg7XHJcbn1cclxuXHJcbi53aWRlLmZpZWxkLnNhbGVfY2hlY2sge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmFzc2lnbl9idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmFzc2lnbl9idG5fX3RleHQge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5jaXJjbGVJY29uIHtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBEODAxQztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG5cclxuLnBsdXNJY29uIHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IC0zcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgd2lkdGg6IDE5cHg7XHJcbiAgICBjb2xvcjogI0M4QzhDODtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDOEM4Qzg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLXN0YXRlLW51bWJlci5tYXQtc3RlcC1pY29uLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM4NjdCMTtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNDAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LXN0ZXAtbGFiZWwge1xyXG4gICAgY29sb3I6ICMzODY3YjE7XHJcbn1cclxuXHJcbi5wb3NfYnRuLXBhbmVsIHtcclxuICAgIHBvc2l0aW9uOiBpbml0aWFsO1xyXG4gICAgcmlnaHQ6IDY4cHg7XHJcbiAgICBib3R0b206IDk3cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIC5zZWNvbmRhcnkge1xyXG4gICAgICAgIHdpZHRoOiAxMDQuODdweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRGNEY0RjtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB9XHJcbiAgICAucHJpbWFyeSB7XHJcbiAgICAgICAgd2lkdGg6IDEyNC44N3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIH1cclxufVxyXG5cclxuLmZpZWxkLWlubGluZSAuZmllbGQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4ubWFya3VwLWJsb2NrIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5yaWdodC5mbG9hdGVkLnR3by53aWRlLmNvbHVtbi5ncm91cF9zYXZlLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4udWkuZm9ybSAuZmllbGQ+bGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgY29sb3I6ICMxODFCMjA7XHJcbiAgICBtYXJnaW46IDBweCAwcHggOHB4O1xyXG59XHJcblxyXG4udWkuZm9ybSAudGhyZWUud2lkZS5maWVsZCxcclxuLnVpLmZvcm0gLmZpZWxkPi5jaGVja2JveC1maWVsZCxcclxuLnVpLmZvcm0gLnNpeC53aWRlLmZpZWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuLnVpLmZvcm0gLnNpeC53aWRlLmZpZWxkLm1iLTAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuLnNhdmUtYnRuLWJsb2NrIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMzJweDtcclxuICAgIHJpZ2h0OiAtMjRweDtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgLnVpLmZvcm0ge1xyXG4gICAgICAgIC50b3VyQ29kZV9idG4ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDsgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuYm9va2luZ3NfYnRuLXBhbmVsLmxpc3QtY29kZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2F2ZS1idG4tYmxvY2sge1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0bztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IDI0cHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAtMTZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIC5yZXN1bHQtYmxvY2sge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgIH1cclxuICAgIC5saXN0Q29kZVdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6MHB4IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuc2F2ZS1idG4tYmxvY2sge1xyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMjBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIub3V0ZXIge1xuICBtYXJnaW46IDBweCAyMHB4IDBweCAxNXB4O1xufVxuXG4ub3V0ZXJfX2FkZC1wb3NfX3RpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cblxuLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4udWkudG9wLmF0dGFjaGVkLm1lbnUgPiAuaXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjg1NzE0MjlyZW0gMCAwIDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi51aS5ib3R0b20uYXR0YWNoZWQuYWN0aXZlLnRhYi5zZWdtZW50IHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxN3B4O1xufVxuXG4udGFiLnNlZ21lbnQge1xuICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuaHIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjRTBFMEUwO1xufVxuXG4udG91ckNvZGVfYnRuLFxuLmFkZFRvZ2dfYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xufVxuXG4udG91ckNvZGVfdGV4dCxcbi5hZGRUb2dnX3RleHQge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvcnBvcmF0ZV9pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE4cHg7XG4gIGJvdHRvbTogMjhweDtcbiAgbGVmdDogOXB4O1xufVxuXG5kaXYudXBsb2FkIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTIzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjODA4MDgwO1xuICBib3gtc2hhZG93OiAwIDAuMjVweCAwLjFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuZGl2LnVwbG9hZCBpbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMjNweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5maWxlX2Nob29zZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMjdweDtcbiAgYm90dG9tOiA2cHg7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xufVxuXG4udXBsb2FkaW5JbWdfYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xufVxuXG4udXBsb2FkaW5JbWdfYnRuX190ZXh0LFxuLnNhdmUtbmV4dF9idG5fX3RleHQge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG5cbi5maWxlX3RhYmxlX19pbWcge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmVhZmI1ZTtcbn1cblxuLnNhdmUtbmV4dF9idG4ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmZpZWxkIGlucHV0OjpwbGFjZWhvbGRlcixcbi5pbnB1dF9tYXQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi51aS5wb2ludGluZy5zZWNvbmRhcnkubWVudSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLml0ZW0uc3RlcHBlcl9fcHJvZ3Jlc3Mge1xuICB3aWR0aDogMTY3cHg7XG59XG5cbi50YWIuc2VnbWVudC5zdGVwcGVyX19zZWdtZW50LW91dGxpbmUge1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5vZmZpY2UtaW5mb19pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiA4NXB4O1xufVxuXG4ucG9zX2FjY2Vzcy1yaWdodHMge1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG5cbi5jYW5jZWxfYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0RjRGO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5jYW5jZWxfYnRuX190ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pc3N1ZV9kYXRlIHtcbiAgdGV4dC1pbmRlbnQ6IDE3cHg7XG59XG5cbi53aWRlLmZpZWxkLnNhbGVfY2hlY2sge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYXNzaWduX2J0biB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uYXNzaWduX2J0bl9fdGV4dCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbn1cblxuLmNpcmNsZUljb24ge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQ4MDFDO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4ucGx1c0ljb24ge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tdG9wOiAtM3B4O1xufVxuXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1jb250ZW50IHtcbiAgaGVpZ2h0OiAxOXB4O1xuICB3aWR0aDogMTlweDtcbiAgY29sb3I6ICNDOEM4Qzg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDOEM4Qzg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24tc3RhdGUtbnVtYmVyLm1hdC1zdGVwLWljb24ubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzODY3QjE7XG59XG5cbjo6bmctZGVlcC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlci1jb250YWluZXIge1xuICB3aWR0aDogNDAlO1xufVxuXG46Om5nLWRlZXAubWF0LXN0ZXAtbGFiZWwge1xuICBjb2xvcjogIzM4NjdiMTtcbn1cblxuLnBvc19idG4tcGFuZWwge1xuICBwb3NpdGlvbjogaW5pdGlhbDtcbiAgcmlnaHQ6IDY4cHg7XG4gIGJvdHRvbTogOTdweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4ucG9zX2J0bi1wYW5lbCAuc2Vjb25kYXJ5IHtcbiAgd2lkdGg6IDEwNC44N3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RjRGNEY7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5wb3NfYnRuLXBhbmVsIC5wcmltYXJ5IHtcbiAgd2lkdGg6IDEyNC44N3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmZpZWxkLWlubGluZSAuZmllbGQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5tYXJrdXAtYmxvY2sge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ucmlnaHQuZmxvYXRlZC50d28ud2lkZS5jb2x1bW4uZ3JvdXBfc2F2ZS1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udWkuZm9ybSAuZmllbGQgPiBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIGNvbG9yOiAjMTgxQjIwO1xuICBtYXJnaW46IDBweCAwcHggOHB4O1xufVxuXG4udWkuZm9ybSAudGhyZWUud2lkZS5maWVsZCxcbi51aS5mb3JtIC5maWVsZCA+IC5jaGVja2JveC1maWVsZCxcbi51aS5mb3JtIC5zaXgud2lkZS5maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi51aS5mb3JtIC5zaXgud2lkZS5maWVsZC5tYi0wIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLnNhdmUtYnRuLWJsb2NrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDMycHg7XG4gIHJpZ2h0OiAtMjRweDtcbn1cbi5zYXZlLWJ0bi1ibG9jayBidXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLnVpLmZvcm0gLnRvdXJDb2RlX2J0biB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIH1cbiAgLnVpLmZvcm0gLmJvb2tpbmdzX2J0bi1wYW5lbC5saXN0LWNvZGUge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICB9XG4gIC51aS5mb3JtIC5zYXZlLWJ0bi1ibG9jayB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAyNHB4O1xuICAgIHJpZ2h0OiAtMTZweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAucmVzdWx0LWJsb2NrIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW46IDIwcHg7XG4gIH1cblxuICAubGlzdENvZGVXcmFwcGVyIHtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgfVxuXG4gIC5zYXZlLWJ0bi1ibG9jayBidXR0b24ge1xuICAgIHJpZ2h0OiAxMjBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/layout/setup-configuration/markup-configuration/mark/addmarkup/addmarkup.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/markup-configuration/mark/addmarkup/addmarkup.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: AddMarkupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMarkupComponent", function() { return AddMarkupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/setup-config/setup-config.service */ "./src/app/shared/services/setup-config/setup-config.service.ts");
/* harmony import */ var src_app_shared_services_pointsale_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/pointsale.service */ "./src/app/shared/services/pointsale.service.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/common.service */ "./src/app/shared/services/common.service.ts");








let AddMarkupComponent = class AddMarkupComponent {
    constructor(MarkupConfigurationService, posService, _formBuilder, toastr, CommonService) {
        this.MarkupConfigurationService = MarkupConfigurationService;
        this.posService = posService;
        this._formBuilder = _formBuilder;
        this.toastr = toastr;
        this.CommonService = CommonService;
        this.allSuppliers = [];
        this.filteredSuppliers = [];
        this.allGroups = [];
        this.isSubmitted = false;
        this.orgArr = [];
        this.destArr = [];
        this.carrierArr = [];
        this.serviceArr = [];
        this.pax = [];
        this.airports = [];
        this.filterGroup = {
            limit: 1500,
        };
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataToParent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // for chips
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__["COMMA"]];
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        // for chips
        this.suppliersList = [];
        this.getAirportDetails = () => {
            this.CommonService.getAirportsList()
                .subscribe((res) => {
                if (res.status) {
                    this.airports = res.result;
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
        this.initMarkupForm();
        this.fetchAllGroups(this.filterGroup);
        this.fetchAllSuppliers({});
        this.onEditMarkUpRow(this.row);
        this.getAirportDetails();
        if (this.flagOnAdd == true && this.flagOnEdit == false) {
            this.showSaveButton = true;
            this.showUpdateButton = false;
            this.fetchAllGroups(this.filterGroup);
            this.addMarkupForm.reset();
        }
        else {
            this.showUpdateButton = true;
            this.showSaveButton = false;
        }
    }
    initMarkupForm() {
        this.addMarkupForm = this._formBuilder.group({
            supplier_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            sale_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            is_active: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            priority: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            markup_id: [''],
            markup_flight_id: ['']
        });
    }
    addFlightMarkupFormGroup() {
        this.addMarkupForm.addControl('flightsMarkup', this._formBuilder.group({
            markup_mode: [''],
            markup: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            calculation_basis: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            calculation_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            itinerary_type: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            orgin_airport: [[]],
            destination_airport: [[]],
            marketing_carriers: [[]],
            service_class: [[]],
            is_adult: [''],
            is_infant: [''],
            is_child: [''],
            is_all: [''],
            markup_id: [''],
            markup_flight_id: [''],
            pax_types: [''],
            org_airport: [''],
            dest_airport: [''],
            mode: ['']
        }));
        this.makeJqueryFields();
    }
    removeFlightMarkupFormGroup() {
        this.addMarkupForm.removeControl('flightsMarkup');
    }
    addHotelMarkupFormGroup() {
        this.addMarkupForm.addControl('hotelsMarkup', this._formBuilder.group({
            markup_hotel_id: [''],
            markup: [''],
            markup_mode: [''],
            min_markup: [''],
            max_markup: ['']
        }));
        this.makeJqueryFields();
    }
    removeHotelMarkupFormGroup() {
        this.addMarkupForm.removeControl('hotelsMarkup');
    }
    addActivitiesMarkupFormGroup() {
        this.addMarkupForm.addControl('activitiesMarkup', this._formBuilder.group({
            markup_activitie_id: [''],
            markup: [''],
            markup_mode: [''],
            min_markup: [''],
            max_markup: ['']
        }));
        this.makeJqueryFields();
    }
    removeActivitiesMarkupFormGroup() {
        this.addMarkupForm.removeControl('activitiesMarkup');
    }
    addCarsMarkupFormGroup() {
        this.addMarkupForm.addControl('carsMarkup', this._formBuilder.group({
            markup_car_id: [''],
            markup: [''],
            markup_mode: [''],
            min_markup: [''],
            max_markup: ['']
        }));
        this.makeJqueryFields();
    }
    removeCarsMarkupFormGroup() {
        this.addMarkupForm.removeControl('carsMarkup');
    }
    addTransfersMarkupFormGroup() {
        this.addMarkupForm.addControl('transfersMarkup', this._formBuilder.group({
            markup_transfer_id: [''],
            markup: [''],
            markup_mode: [''],
            min_markup: [''],
            max_markup: ['']
        }));
        this.makeJqueryFields();
    }
    removeTransfersMarkupFormGroup() {
        this.addMarkupForm.removeControl('transfersMarkup');
    }
    addInsuranceMarkupFormGroup() {
        this.addMarkupForm.addControl('insurancesMarkup', this._formBuilder.group({
            markup_insurance_id: [''],
            markup: [''],
            markup_mode: [''],
            min_markup: [''],
            max_markup: ['']
        }));
        this.makeJqueryFields();
    }
    removeInsuranceMarkupFormGroup() {
        this.addMarkupForm.removeControl('insurancesMarkup');
    }
    addCruisesMarkupFormGroup() {
        this.addMarkupForm.addControl('cruisesMarkup', this._formBuilder.group({
            markup_cruise_id: [''],
            markup: [''],
            markup_mode: [''],
            min_markup: [''],
            max_markup: ['']
        }));
        this.makeJqueryFields();
    }
    removeCruisesMarkupFormGroup() {
        this.addMarkupForm.removeControl('cruisesMarkup');
    }
    addMark(data) {
        this.isSubmitted = true;
        var flightsData = {};
        var hotelsData = {};
        var activityData = {};
        var transfersData = {};
        var carsData = {};
        var cruisesData = {};
        var insurancesData = {};
        if (this.addMarkupForm.controls.flightsMarkup) {
            flightsData = this.addMarkupForm.controls.flightsMarkup.value;
            flightsData = this.convertFlightsData(flightsData);
        }
        else {
            flightsData = '';
        }
        if (this.addMarkupForm.controls.hotelsMarkup)
            hotelsData = this.addMarkupForm.controls.hotelsMarkup.value || false;
        if (this.addMarkupForm.controls.activitiesMarkup)
            activityData = this.addMarkupForm.controls.activitiesMarkup.value || false;
        if (this.addMarkupForm.controls.transfersMarkup)
            transfersData = this.addMarkupForm.controls.transfersMarkup.value || false;
        if (this.addMarkupForm.controls.carsMarkup)
            carsData = this.addMarkupForm.controls.carsMarkup.value || false;
        if (this.addMarkupForm.controls.cruisesMarkup)
            cruisesData = this.addMarkupForm.controls.cruisesMarkup.value || false;
        if (this.addMarkupForm.controls.insurancesMarkup)
            insurancesData = this.addMarkupForm.controls.insurancesMarkup.value || false;
        this.MarkupConfigurationService.AddMarkup({
            markup: {
                supplier_id: this.addMarkupForm.controls.supplier_id.value,
                sale_id: this.addMarkupForm.controls.sale_id.value,
                title: this.addMarkupForm.controls.title.value,
                is_active: this.addMarkupForm.controls.is_active.value,
                priority: this.addMarkupForm.controls.priority.value,
                markup_id: '',
                mode: "Add"
            },
            editions: {
                hotels: hotelsData,
                flights: flightsData,
                activities: activityData,
                cars: carsData,
                transfers: transfersData,
                insurances: insurancesData,
                cruises: cruisesData,
            }
        })
            .subscribe((res) => {
            if (res.status) {
                var markup = res.result;
                this.dataToParent.emit(data);
                this.toastr.success(`${res.message}`, `Success `, {
                    timeOut: 10000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
                this.change.emit({ component: 'markup', action: 'add', markup: markup });
            }
            else {
                this.toastr.error(`${res.message}`, ` `, {
                    timeOut: 10000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    }
    fetchAllSuppliers(params) {
        this.MarkupConfigurationService.FetchAllSuppliers(params)
            .subscribe((res) => {
            if (res.status) {
                this.allSuppliers = res.result;
                this.filteredSuppliers = this.allSuppliers;
            }
        }, err => {
            console.log('erer ', err);
        });
    }
    fetchAllGroups(filterGroup) {
        this.MarkupConfigurationService.GetAllGroups(this.filterGroup)
            .subscribe((res) => {
            if (res.status) {
                var myArray = res.result.data.filter(function (obj) {
                    return obj.status != 1;
                });
                this.allGroups = myArray;
                console.log("===fetchAllGroups====", this.allGroups);
            }
        }, err => {
            console.log('erer ', err);
        });
    }
    groupChanged(sale_id) {
        var suppliers = this.allSuppliers;
        this.addMarkupForm.patchValue({ supplier_id: '' });
        this.makeJqueryFields();
        var saleObj = this.allGroups.filter(obj => obj['sale_id'] == Number(sale_id));
        if (saleObj.length) {
            var tmpSale = saleObj[0];
            var filteredSuppliers = suppliers.filter(obj => {
                if (tmpSale['is_activities'] && !obj.is_activities)
                    return false;
                if (tmpSale['is_flight'] && !obj.is_flight)
                    return false;
                if (tmpSale['is_car'] && !obj.is_car)
                    return false;
                if (tmpSale['is_cruises'] && !obj.is_cruises)
                    return false;
                if (tmpSale['is_holidays'] && !obj.is_holidays)
                    return false;
                if (tmpSale['is_hotel'] && !obj.is_hotel)
                    return false;
                if (tmpSale['is_insurance'] && !obj.is_insurance)
                    return false;
                if (tmpSale['is_transfers'] && !obj.is_transfers)
                    return false;
                if (tmpSale['is_visa'] && !obj.is_visa)
                    return false;
                return true;
            });
            this.filteredSuppliers = filteredSuppliers;
            return;
        }
    }
    supplierChanged(supplier_id) {
        var sale_id = this.addMarkupForm.controls.sale_id.value;
        if (supplier_id && sale_id) {
            var saleObj_filter = this.allGroups.filter(obj => obj['sale_id'] == Number(sale_id));
            var supplierObj_filter = this.allSuppliers.filter(obj => obj['supplier_id'] == Number(supplier_id));
            if (saleObj_filter.length && supplierObj_filter.length) {
                var saleObj = saleObj_filter[0];
                var supplierObj = supplierObj_filter[0];
                if (saleObj['is_flight'] && supplierObj.is_flight) {
                    this.addFlightMarkupFormGroup();
                }
                else {
                    this.addMarkupForm.removeControl('flightsMarkup');
                }
                if (saleObj['is_hotel'] && supplierObj.is_hotel) {
                    this.addHotelMarkupFormGroup();
                }
                else {
                    this.addMarkupForm.removeControl('hotelsMarkup');
                }
                if (saleObj['is_car'] && supplierObj.is_car) {
                    this.addCarsMarkupFormGroup();
                }
                else {
                    this.addMarkupForm.removeControl('carsMarkup');
                }
                if (saleObj['is_activities'] && supplierObj.is_activities) {
                    this.addActivitiesMarkupFormGroup();
                }
                else {
                    this.addMarkupForm.removeControl('activitiesMarkup');
                }
                if (saleObj['is_transfers'] && supplierObj.is_transfers) {
                    this.addTransfersMarkupFormGroup();
                }
                else {
                    this.addMarkupForm.removeControl('transfersMarkup');
                }
                if (saleObj['is_cruises'] && supplierObj.is_cruises) {
                    this.addCruisesMarkupFormGroup();
                }
                else {
                    this.addMarkupForm.removeControl('cruisesMarkup');
                }
                if (saleObj['is_insurance'] && supplierObj.is_insurance) {
                    this.addInsuranceMarkupFormGroup();
                }
                else {
                    this.addMarkupForm.removeControl('insurancesMarkup');
                }
            }
        }
    }
    // showEditions(block) {
    //   var supplier = this.addMarkupForm.controls.supplier_id.value;
    //   var sale = this.addMarkupForm.controls.sale_id.value;
    //   if (supplier != '-1' && sale != '-1') {
    //     var tmp_sale_id = sale;
    //     var tmp_supplier_id = supplier;
    //     var saleObj = this.allGroups.filter(obj => obj['sale_id'] == Number(tmp_sale_id))
    //     var supplierObj = this.allSuppliers.filter(obj => obj.supplier_id == Number(tmp_supplier_id))
    //     if (saleObj.length > 0 && supplierObj.length > 0) {
    //       if (block == 'flight' && saleObj[0]['is_flight'] && supplierObj[0].is_flight)
    //       return true;
    //       if (block == 'hotel' && saleObj[0]['is_hotel'] && supplierObj[0].is_hotel)
    //         return true;
    //       // if (block == 'holiday' && saleObj[0]['is_holidays'] && supplierObj[0].is_holidays)
    //       //   return true;    
    //       if (block == 'activity' && saleObj[0]['is_activities'] && supplierObj[0].is_activities)
    //         return true;
    //       if (block == 'car' && saleObj[0]['is_car'] && supplierObj[0].is_car)
    //         return true;
    //       if (block == 'transfer' && saleObj[0]['is_transfers'] && supplierObj[0].is_transfers)
    //         return true;
    //       if (block == 'insurance' && saleObj[0]['is_insurance'] && supplierObj[0].is_insurance)
    //         return true;
    //       if (block == 'cruise' && saleObj[0]['is_cruises'] && supplierObj[0].is_cruises)
    //         return true;
    //     }
    //     return false;
    //   }
    //   return false;
    // }
    add(event, chk) {
        const input = event.input;
        const value = event.value;
        if ((value || '').trim()) {
            if (chk == 1)
                this.addMarkupForm.controls.flightsMarkup.value.orgin_airport.push({ name: value.trim() });
            if (chk == 2)
                this.addMarkupForm.controls.flightsMarkup.value.destination_airport.push({ name: value.trim() });
            if (chk == 3)
                this.addMarkupForm.controls.flightsMarkup.value.marketing_carriers.push({ name: value.trim() });
            if (chk == 4)
                this.addMarkupForm.controls.flightsMarkup.value.service_class.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    }
    remove(val, chk) {
        const index1 = this.addMarkupForm.controls.flightsMarkup.value.orgin_airport.indexOf(val);
        const index2 = this.addMarkupForm.controls.flightsMarkup.value.destination_airport.indexOf(val);
        const index3 = this.addMarkupForm.controls.flightsMarkup.value.marketing_carriers.indexOf(val);
        const index4 = this.addMarkupForm.controls.flightsMarkup.value.service_class.indexOf(val);
        if (true) {
            if (chk == 1)
                this.addMarkupForm.controls.flightsMarkup.value.orgin_airport.splice(index1, 1);
            if (chk == 2)
                this.addMarkupForm.controls.flightsMarkup.value.destination_airport.splice(index2, 1);
            if (chk == 3)
                this.addMarkupForm.controls.flightsMarkup.value.marketing_carriers.splice(index3, 1);
            if (chk == 4)
                this.addMarkupForm.controls.flightsMarkup.value.service_class.splice(index4, 1);
        }
    }
    convertFlightsData(flightsData) {
        if (flightsData != '')
            var tmp = Object.assign({}, flightsData);
        tmp.orgin_airport = (tmp.orgin_airport.map(obj => obj.name)).join();
        tmp.destination_airport = (tmp.destination_airport.map(obj => obj.name)).join();
        tmp.marketing_carriers = (tmp.marketing_carriers.map(obj => obj.name)).join();
        tmp.service_class = (tmp.service_class.map(obj => obj.name)).join();
        if (tmp.is_all)
            tmp.pax_types = 'ALL';
        else {
            var tmp_pax_types = '';
            if (tmp.is_child)
                tmp_pax_types += 'CHD,';
            if (tmp.is_adult)
                tmp_pax_types += 'ADT,';
            if (tmp.is_infant)
                tmp_pax_types += 'INF,';
            if (tmp_pax_types.length > 0)
                tmp_pax_types = tmp_pax_types.substring(0, tmp_pax_types.length - 1);
            tmp.pax_types = tmp_pax_types;
        }
        return tmp;
    }
    ngAfterViewInit() {
        let THIS = this;
        THIS.makeJqueryFields();
    }
    makeJqueryFields() {
        $('.ui.dropdown-group').dropdown();
        $('.ui.dropdown').dropdown();
        $(document).ready(function () {
            $('.ui.dropdown-group').dropdown();
            $('.ui.dropdown').dropdown();
        });
    }
    onEditMarkUpRow(group) {
        if (group.length != 0) {
            this.supplierId = group.supplier_id;
            this.saleId = group.sale_id;
            if (group.markup_flight != null) {
                let tmp = group.markup_flight.pax_types.split(",");
                if (tmp.length) {
                    this.is_all = false;
                    this.is_child = false;
                    this.is_infant = false;
                    this.is_adult = false;
                    tmp.forEach(element => {
                        if (element == 'ALL') {
                            this.is_all = true;
                            this.is_child = true;
                            this.is_infant = true;
                            this.is_adult = true;
                        }
                        else {
                            this.is_all = false;
                            if (element == 'CHD') {
                                this.is_child = true;
                            }
                            if (element == 'INF') {
                                this.is_infant = true;
                            }
                            if (element == 'ADT') {
                                this.is_adult = true;
                            }
                        }
                    });
                }
                if (group.markup_flight.orgin_airport != null) {
                    let txt = group.markup_flight.orgin_airport;
                    txt = txt.split(',');
                    txt.forEach(element => {
                        this.orgArr.push({ name: element });
                    });
                }
                if (group.markup_flight.destination_airport != null) {
                    let txt = group.markup_flight.destination_airport;
                    txt = txt.split(',');
                    txt.forEach(element => {
                        this.destArr.push({ name: element });
                    });
                }
                if (group.markup_flight.marketing_carriers != null) {
                    let txt = group.markup_flight.marketing_carriers;
                    txt = txt.split(',');
                    txt.forEach(element => {
                        this.carrierArr.push({ name: element });
                    });
                }
                if (group.markup_flight.service_class != null) {
                    let txt = group.markup_flight.service_class;
                    txt = txt.split(',');
                    txt.forEach(element => {
                        this.serviceArr.push({ name: element });
                    });
                }
            }
            if (this.supplierId && this.saleId) {
                this.groupChanged(this.saleId);
                this.supplierChanged(this.supplierId);
                var saleObj_filter = this.allGroupdatas.filter(obj => obj['sale_id'] == Number(this.saleId));
                if (this.allSupplierDatas.length != 0) {
                    var supplierObj_filter = this.allSupplierDatas.filter(obj => obj['supplier_id'] == Number(this.supplierId));
                }
                if (saleObj_filter.length && supplierObj_filter.length) {
                    var saleObj = saleObj_filter[0];
                    var supplierObj = supplierObj_filter[0];
                    if (group.markup_flight != null)
                        if (saleObj['is_flight'] && supplierObj.is_flight) {
                            this.addFlightMarkupFormGroup();
                            this.addMarkupForm.controls.flightsMarkup.patchValue({
                                markup_mode: group.markup_flight.markup_mode || "",
                                markup: group.markup_flight.markup || "",
                                calculation_basis: group.markup_flight.calculation_basis || "",
                                calculation_type: group.markup_flight.calculation_type || "",
                                itinerary_type: group.markup_flight.itinerary_type || "",
                                orgin_airport: this.orgArr || "",
                                destination_airport: this.destArr || "",
                                marketing_carriers: this.carrierArr || "",
                                service_class: this.serviceArr || "",
                                is_adult: this.is_adult || "",
                                is_infant: this.is_infant || "",
                                is_child: this.is_child || "",
                                is_all: this.is_all || "",
                                markup_id: group.markup_flight.markup_id || "",
                                markup_flight_id: group.markup_flight.markup_flight_id || "",
                                pax_types: group.markup_flight.pax_types || ""
                            });
                        }
                        else {
                            this.addMarkupForm.removeControl('flightsMarkup');
                        }
                    if (group.markup_hotel != null)
                        if (saleObj['is_hotel'] && supplierObj.is_hotel) {
                            this.addHotelMarkupFormGroup();
                            this.addMarkupForm.controls.hotelsMarkup.patchValue({
                                markup_hotel_id: group.markup_hotel.markup_hotel_id,
                                markup_mode: group.markup_hotel.markup_mode,
                                markup: group.markup_hotel.markup,
                                min_markup: group.markup_hotel.min_markup,
                                max_markup: group.markup_hotel.max_markup
                            });
                        }
                        else {
                            this.addMarkupForm.removeControl('hotelsMarkup');
                        }
                    if (group.markup_activity != null)
                        if (saleObj['is_activities'] && supplierObj.is_activities) {
                            this.addActivitiesMarkupFormGroup();
                            this.addMarkupForm.controls.activitiesMarkup.patchValue({
                                markup_activitie_id: group.markup_activity.markup_activitie_id,
                                markup_mode: group.markup_activity.markup_mode,
                                markup: group.markup_activity.markup,
                                min_markup: group.markup_activity.min_markup,
                                max_markup: group.markup_activity.max_markup
                            });
                        }
                        else {
                            this.addMarkupForm.removeControl('activitiesMarkup');
                        }
                    if (group.markup_car != null)
                        if (saleObj['is_car'] && supplierObj.is_car) {
                            this.addCarsMarkupFormGroup();
                            this.addMarkupForm.controls.carsMarkup.patchValue({
                                markup_car_id: group.markup_car.markup_car_id,
                                markup_mode: group.markup_car.markup_mode,
                                markup: group.markup_car.markup,
                                min_markup: group.markup_car.min_markup,
                                max_markup: group.markup_car.max_markup
                            });
                        }
                        else {
                            this.addMarkupForm.removeControl('carsMarkup');
                        }
                    if (group.markup_transfer != null)
                        if (saleObj['is_transfers'] && supplierObj.is_transfers) {
                            this.addTransfersMarkupFormGroup();
                            this.addMarkupForm.controls.transfersMarkup.patchValue({
                                markup_transfer_id: group.markup_transfer.markup_transfer_id,
                                markup_mode: group.markup_transfer.markup_mode,
                                markup: group.markup_transfer.markup,
                                min_markup: group.markup_transfer.min_markup,
                                max_markup: group.markup_transfer.max_markup
                            });
                        }
                        else {
                            this.addMarkupForm.removeControl('transfersMarkup');
                        }
                    if (group.markup_insurance != null)
                        if (saleObj['is_insurance'] && supplierObj.is_insurance) {
                            this.addInsuranceMarkupFormGroup();
                            this.addMarkupForm.controls.insurancesMarkup.patchValue({
                                markup_insurance_id: group.markup_insurance.markup_insurance_id,
                                markup_mode: group.markup_insurance.markup_mode,
                                markup: group.markup_insurance.markup,
                                min_markup: group.markup_insurance.min_markup,
                                max_markup: group.markup_insurance.max_markup
                            });
                        }
                        else {
                            this.addMarkupForm.removeControl('insurancesMarkup');
                        }
                    if (group.markup_cruise != null)
                        if (saleObj['is_cruises'] && supplierObj.is_cruises) {
                            this.addCruisesMarkupFormGroup();
                            this.addMarkupForm.controls.cruisesMarkup.patchValue({
                                markup_cruise_id: group.cruisesMarkup.markup_cruise_id,
                                markup_mode: group.markup_cruise.markup_mode,
                                markup: group.markup_cruise.markup,
                                min_markup: group.markup_cruise.min_markup,
                                max_markup: group.markup_cruise.max_markup
                            });
                        }
                        else {
                            this.addMarkupForm.removeControl('cruisesMarkup');
                        }
                }
            }
            this.addMarkupForm.patchValue({
                supplier_id: group.supplier_id,
                sale_id: group.sale_id,
                title: group.title,
                is_active: group.is_active,
                priority: group.priority,
                markup_id: group.markup_id,
                markup_flight_id: (group.markup_flight != null) ? group.markup_flight.markup_flight_id : ""
            });
        }
    }
    onUpdateMarkup(data) {
        this.isSubmitted = true;
        var flightsData = {};
        var hotelsData = {};
        var activityData = {};
        var transfersData = {};
        var carsData = {};
        var cruisesData = {};
        var insurancesData = {};
        if (this.addMarkupForm.controls.flightsMarkup) {
            flightsData = this.addMarkupForm.controls.flightsMarkup.value;
            flightsData = this.convertFlightsData(flightsData);
        }
        else {
            flightsData = '';
        }
        if (this.addMarkupForm.controls.hotelsMarkup)
            hotelsData = this.addMarkupForm.controls.hotelsMarkup.value || false;
        if (this.addMarkupForm.controls.activitiesMarkup)
            activityData = this.addMarkupForm.controls.activitiesMarkup.value || false;
        if (this.addMarkupForm.controls.transfersMarkup)
            transfersData = this.addMarkupForm.controls.transfersMarkup.value || false;
        if (this.addMarkupForm.controls.carsMarkup)
            carsData = this.addMarkupForm.controls.carsMarkup.value || false;
        console.log("carsdata---", carsData);
        if (this.addMarkupForm.controls.cruisesMarkup)
            cruisesData = this.addMarkupForm.controls.cruisesMarkup.value || false;
        if (this.addMarkupForm.controls.insurancesMarkup)
            insurancesData = this.addMarkupForm.controls.insurancesMarkup.value || false;
        this.MarkupConfigurationService.editMarkup({
            markup: {
                supplier_id: this.addMarkupForm.controls.supplier_id.value,
                sale_id: this.addMarkupForm.controls.sale_id.value,
                title: this.addMarkupForm.controls.title.value,
                is_active: this.addMarkupForm.controls.is_active.value,
                priority: this.addMarkupForm.controls.priority.value,
                markup_id: this.addMarkupForm.value.markup_id,
                mode: "Update"
            },
            editions: {
                hotels: hotelsData,
                flights: flightsData,
                activities: activityData,
                cars: carsData,
                transfers: transfersData,
                insurances: insurancesData,
                cruises: cruisesData,
            }
        })
            .subscribe((res) => {
            if (res.status) {
                var markup = res.result;
                this.dataToParent.emit(data);
                this.toastr.success(`${res.message}`, `Success `, {
                    timeOut: 10000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
                this.change.emit({ component: 'markup', action: 'update', markup: markup });
            }
            else {
                this.toastr.error(`${res.message}`, ` `, {
                    timeOut: 10000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        }, err => {
            console.log('er ', err);
        });
    }
};
AddMarkupComponent.ctorParameters = () => [
    { type: src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_4__["SetupConfigService"] },
    { type: src_app_shared_services_pointsale_service__WEBPACK_IMPORTED_MODULE_5__["POSService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] },
    { type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AddMarkupComponent.prototype, "groupId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AddMarkupComponent.prototype, "change", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AddMarkupComponent.prototype, "dataToParent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('mark')
], AddMarkupComponent.prototype, "row", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('groupData')
], AddMarkupComponent.prototype, "allGroupdatas", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('supplierData')
], AddMarkupComponent.prototype, "allSupplierDatas", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('flag')
], AddMarkupComponent.prototype, "flagOnAdd", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('flagEdit')
], AddMarkupComponent.prototype, "flagOnEdit", void 0);
AddMarkupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-markup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addmarkup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/markup-configuration/mark/addmarkup/addmarkup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addmarkup.component.scss */ "./src/app/layout/setup-configuration/markup-configuration/mark/addmarkup/addmarkup.component.scss")).default]
    })
], AddMarkupComponent);



/***/ }),

/***/ "./src/app/layout/setup-configuration/markup-configuration/mark/mark.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/markup-configuration/mark/mark.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".outer-segment {\n  margin: 0px 20px 0px 15px;\n}\n\n.markup_title {\n  margin: 0;\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #E0E0E0;\n}\n\n.filterMarkUp_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.goto_list {\n  background-color: transparent;\n  box-shadow: none;\n  border: none;\n  color: #181B20;\n  font-size: 14px;\n}\n\n.filterMarkUp_list {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n  white-space: nowrap;\n}\n\n.addNewGroup-text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.addMarkUp {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 11px;\n  text-align: center;\n  position: relative;\n  left: 35px;\n  bottom: 5px;\n}\n\n.corporate_input__placeholder-icon {\n  position: relative;\n  width: 18px;\n  bottom: 28px;\n  left: 9px;\n}\n\n.date-field {\n  text-indent: 17px;\n}\n\n.save-apply_text,\n.addNewGroup-text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.addMarkUp {\n  display: inline-block;\n  color: #333 !important;\n  padding: 3px 10px;\n  bottom: 0px;\n  position: inherit !important;\n  cursor: pointer;\n  font-weight: bold !important;\n  border-radius: 3px;\n  box-shadow: 0px 0px 6px 0px grey;\n  border: 1px solid grey;\n}\n\n.markup-block {\n  margin-top: 50px;\n}\n\n.right {\n  text-align: right;\n}\n\n.field-inline .field {\n  display: inline-block;\n}\n\nspan.action {\n  display: inline-block;\n  margin: 0px 5px;\n  font-weight: bold;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\nmat-chip {\n  margin-bottom: 12px;\n}\n\n.icon {\n  opacity: 1;\n  z-index: 100;\n}\n\n.icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.icon .bookings_input__placeholder-icon.cal {\n  width: 14px;\n  margin-top: 0px;\n  margin-left: 15px;\n}\n\n.field-inline_label {\n  margin-bottom: 15px;\n}\n\n.matForm {\n  width: 100%;\n}\n\n.chip-list {\n  margin-top: 12px;\n}\n\n.goto-link {\n  position: relative;\n  top: 8px;\n}\n\n.search-section {\n  padding: 0px 32px;\n}\n\n.search-section.list-search-block {\n  margin: 0;\n  width: 1100px !important;\n  padding-left: 0px;\n}\n\n.search-section.list-search-block .bookings_btn-panel {\n  padding-left: 0px;\n  padding-bottom: 20px;\n}\n\n.search-section .search-btn-block input {\n  width: 30%;\n  margin-right: 12px;\n}\n\n.search-btn-block {\n  text-align: right;\n}\n\n.search-btn-block div {\n  display: inline-block;\n}\n\n.search-btn-block .six.wide.field {\n  position: relative;\n  top: 0px;\n  width: 100% !important;\n}\n\n.search-btn-block .six.wide.field .reset.button {\n  margin-right: 0px;\n}\n\n.ui.primary.addNewGroup_btn {\n  top: 8px;\n}\n\n.list-code-block {\n  margin: 24px;\n  margin-bottom: 48px;\n}\n\n.head-search-block {\n  padding: 0px 24px;\n}\n\n.ui.primary.addNewGroup_btn {\n  top: 8px;\n  margin-right: 12px;\n  margin-top: 8px;\n}\n\n.ui.form {\n  margin-bottom: 200px;\n}\n\n.ui.form .search-section {\n  margin-bottom: 0px;\n  margin-top: 24px;\n}\n\n.ui.form .search-section div {\n  padding: 0px;\n}\n\n.ui.form .list-search-block {\n  margin-top: 20px;\n}\n\n@media (max-width: 1440px) {\n  .list-code-block {\n    width: auto;\n    margin: 24px;\n  }\n}\n\n@media (max-width: 1280px) {\n  .head-search-block {\n    padding: 0px 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vbWFya3VwLWNvbmZpZ3VyYXRpb24vbWFyay9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHNldHVwLWNvbmZpZ3VyYXRpb25cXG1hcmt1cC1jb25maWd1cmF0aW9uXFxtYXJrXFxtYXJrLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvc2V0dXAtY29uZmlndXJhdGlvbi9tYXJrdXAtY29uZmlndXJhdGlvbi9tYXJrL21hcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGtDQUFBO0VBQ0Esd0NBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQ0NKOztBREVBO0VBQ0ksNENBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlGQUFBO0FDQ0o7O0FERUE7RUFDSSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTs7RUFFSSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQkFBQTtBQ0NKOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNDSjs7QURBSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDRVI7O0FERFE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDR1o7O0FERUE7RUFDSSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBQ0NKOztBREdBO0VBQ0ksaUJBQUE7QUNBSjs7QURDSTtFQUNJLFNBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0FDQ1I7O0FEQVE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FDRVo7O0FERVE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUNBWjs7QURLQTtFQUNJLGlCQUFBO0FDRko7O0FER0k7RUFDSSxxQkFBQTtBQ0RSOztBREdJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0Esc0JBQUE7QUNEUjs7QURFUTtFQUNJLGlCQUFBO0FDQVo7O0FES0E7RUFDSSxRQUFBO0FDRko7O0FES0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUNGSjs7QURLQTtFQUNJLGlCQUFBO0FDRko7O0FES0E7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRko7O0FES0E7RUFDSSxvQkFBQTtBQ0ZKOztBREdJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ0RSOztBREVRO0VBQ0ksWUFBQTtBQ0FaOztBREdJO0VBQ0ksZ0JBQUE7QUNEUjs7QURLQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUNGTjtBQUNGOztBRFFBO0VBQ0k7SUFDSSxpQkFBQTtFQ05OO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc2V0dXAtY29uZmlndXJhdGlvbi9tYXJrdXAtY29uZmlndXJhdGlvbi9tYXJrL21hcmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXItc2VnbWVudCB7XHJcbiAgICBtYXJnaW46IDBweCAyMHB4IDBweCAxNXB4O1xyXG59XHJcblxyXG4ubWFya3VwX3RpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLm1lbnU+Lml0ZW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI4NTcxNDI5cmVtIDAgMCAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLmJvdHRvbS5hdHRhY2hlZC5hY3RpdmUudGFiLnNlZ21lbnQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbn1cclxuXHJcbi50YWIuc2VnbWVudCB7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjRTBFMEUwO1xyXG59XHJcblxyXG4uZmlsdGVyTWFya1VwX2J0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uZ290b19saXN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjMTgxQjIwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZmlsdGVyTWFya1VwX2xpc3Qge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcblxyXG4uYWRkTmV3R3JvdXAtdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZE1hcmtVcCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDM1cHg7XHJcbiAgICBib3R0b206IDVweDtcclxufVxyXG5cclxuLmNvcnBvcmF0ZV9pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGJvdHRvbTogMjhweDtcclxuICAgIGxlZnQ6IDlweDtcclxufVxyXG5cclxuLmRhdGUtZmllbGQge1xyXG4gICAgdGV4dC1pbmRlbnQ6IDE3cHg7XHJcbn1cclxuXHJcbi5zYXZlLWFwcGx5X3RleHQsXHJcbi5hZGROZXdHcm91cC10ZXh0IHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWRkTWFya1VwIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAjMzMzICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgcG9zaXRpb246IGluaGVyaXQgIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDZweCAwcHggZ3JleTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XHJcbn1cclxuXHJcbi5tYXJrdXAtYmxvY2sge1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uZmllbGQtaW5saW5lIC5maWVsZCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbnNwYW4uYWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMHB4IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbm1hdC1jaGlwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICAmLmNhbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZpZWxkLWlubGluZV9sYWJlbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4ubWF0Rm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNoaXAtbGlzdCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG59XHJcblxyXG4uZ290by1saW5rIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogOHB4O1xyXG59XHJcblxyXG5cclxuLnNlYXJjaC1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDBweCAzMnB4O1xyXG4gICAgJi5saXN0LXNlYXJjaC1ibG9jayB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMTAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICAuYm9va2luZ3NfYnRuLXBhbmVsIHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zZWFyY2gtYnRuLWJsb2NrIHtcclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtYnRuLWJsb2NrIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZGl2IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiAgICAuc2l4LndpZGUuZmllbGQge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC5yZXNldC5idXR0b24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS5wcmltYXJ5LmFkZE5ld0dyb3VwX2J0biB7XHJcbiAgICB0b3A6IDhweDtcclxufVxyXG5cclxuLmxpc3QtY29kZS1ibG9jayB7XHJcbiAgICBtYXJnaW46IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xyXG59XHJcblxyXG4uaGVhZC1zZWFyY2gtYmxvY2sge1xyXG4gICAgcGFkZGluZzogMHB4IDI0cHg7XHJcbn1cclxuXHJcbi51aS5wcmltYXJ5LmFkZE5ld0dyb3VwX2J0biB7XHJcbiAgICB0b3A6IDhweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIG1hcmdpbi10b3A6OHB4XHJcbn1cclxuXHJcbi51aS5mb3JtIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xyXG4gICAgLnNlYXJjaC1zZWN0aW9uIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxpc3Qtc2VhcmNoLWJsb2NrIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICAubGlzdC1jb2RlLWJsb2NrIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBtYXJnaW46IDI0cHg7XHJcbiAgICB9XHJcbiAgICAvLyAubGlzdC1ncm91cC5yZXN1bHQtYmxvY2subGlzdC1jb2RlLWJsb2NrIHtcclxuICAgIC8vICAgICBtYXJnaW4tYm90dG9tOiAyMDBweCAhaW1wb3J0YW50O1xyXG4gICAgLy8gfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAuaGVhZC1zZWFyY2gtYmxvY2sge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAyMHB4O1xyXG4gICAgfVxyXG59IiwiLm91dGVyLXNlZ21lbnQge1xuICBtYXJnaW46IDBweCAyMHB4IDBweCAxNXB4O1xufVxuXG4ubWFya3VwX3RpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cblxuLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4udWkudG9wLmF0dGFjaGVkLm1lbnUgPiAuaXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjg1NzE0MjlyZW0gMCAwIDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi51aS5ib3R0b20uYXR0YWNoZWQuYWN0aXZlLnRhYi5zZWdtZW50IHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxN3B4O1xufVxuXG4udGFiLnNlZ21lbnQge1xuICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuaHIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjRTBFMEUwO1xufVxuXG4uZmlsdGVyTWFya1VwX2J0biB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uZ290b19saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMxODFCMjA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZpbHRlck1hcmtVcF9saXN0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5hZGROZXdHcm91cC10ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hZGRNYXJrVXAge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDExcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAzNXB4O1xuICBib3R0b206IDVweDtcbn1cblxuLmNvcnBvcmF0ZV9pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE4cHg7XG4gIGJvdHRvbTogMjhweDtcbiAgbGVmdDogOXB4O1xufVxuXG4uZGF0ZS1maWVsZCB7XG4gIHRleHQtaW5kZW50OiAxN3B4O1xufVxuXG4uc2F2ZS1hcHBseV90ZXh0LFxuLmFkZE5ld0dyb3VwLXRleHQge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFkZE1hcmtVcCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggMHB4IGdyZXk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG59XG5cbi5tYXJrdXAtYmxvY2sge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xufVxuXG4ucmlnaHQge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmZpZWxkLWlubGluZSAuZmllbGQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbnNwYW4uYWN0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDBweCA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5tYXQtY2hpcCB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5pY29uIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTAwO1xufVxuLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcbiAgd2lkdGg6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbi5jYWwge1xuICB3aWR0aDogMTRweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLmZpZWxkLWlubGluZV9sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5tYXRGb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jaGlwLWxpc3Qge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuXG4uZ290by1saW5rIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDhweDtcbn1cblxuLnNlYXJjaC1zZWN0aW9uIHtcbiAgcGFkZGluZzogMHB4IDMycHg7XG59XG4uc2VhcmNoLXNlY3Rpb24ubGlzdC1zZWFyY2gtYmxvY2sge1xuICBtYXJnaW46IDA7XG4gIHdpZHRoOiAxMTAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG4uc2VhcmNoLXNlY3Rpb24ubGlzdC1zZWFyY2gtYmxvY2sgLmJvb2tpbmdzX2J0bi1wYW5lbCB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cbi5zZWFyY2gtc2VjdGlvbiAuc2VhcmNoLWJ0bi1ibG9jayBpbnB1dCB7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLnNlYXJjaC1idG4tYmxvY2sge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5zZWFyY2gtYnRuLWJsb2NrIGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5zZWFyY2gtYnRuLWJsb2NrIC5zaXgud2lkZS5maWVsZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAwcHg7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uc2VhcmNoLWJ0bi1ibG9jayAuc2l4LndpZGUuZmllbGQgLnJlc2V0LmJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4udWkucHJpbWFyeS5hZGROZXdHcm91cF9idG4ge1xuICB0b3A6IDhweDtcbn1cblxuLmxpc3QtY29kZS1ibG9jayB7XG4gIG1hcmdpbjogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogNDhweDtcbn1cblxuLmhlYWQtc2VhcmNoLWJsb2NrIHtcbiAgcGFkZGluZzogMHB4IDI0cHg7XG59XG5cbi51aS5wcmltYXJ5LmFkZE5ld0dyb3VwX2J0biB7XG4gIHRvcDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLnVpLmZvcm0ge1xuICBtYXJnaW4tYm90dG9tOiAyMDBweDtcbn1cbi51aS5mb3JtIC5zZWFyY2gtc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbi51aS5mb3JtIC5zZWFyY2gtc2VjdGlvbiBkaXYge1xuICBwYWRkaW5nOiAwcHg7XG59XG4udWkuZm9ybSAubGlzdC1zZWFyY2gtYmxvY2sge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5saXN0LWNvZGUtYmxvY2sge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogMjRweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAuaGVhZC1zZWFyY2gtYmxvY2sge1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/setup-configuration/markup-configuration/mark/mark.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/markup-configuration/mark/mark.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkComponent", function() { return MarkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/setup-config/setup-config.service */ "./src/app/shared/services/setup-config/setup-config.service.ts");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");






let MarkComponent = class MarkComponent {
    constructor(MarkupConfigurationService, toastr) {
        this.MarkupConfigurationService = MarkupConfigurationService;
        this.toastr = toastr;
        this.markupsList = [];
        this.filteredMarkupsList = [];
        this.showListMarkup = true;
        this.showAddMarkupForm = false;
        this.filteredSuppliers = [];
        this.errMsg = '';
        this.searchObject = { markupname: '' };
        // for mat-chips
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.markupRow = [];
        this.groups = [];
        this.toggleObj = {};
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_4__["COMMA"]];
        this.offset = 0;
        this.totalCount = 0;
        this.filterParams = {
            title: null,
            page: this.offset,
        };
        this.filterGroup = {
            limit: 1500,
        };
        // for mat-chips
        this.filterPagination = false;
        this.onClickAddNewMarkup = (params) => {
            this.flag = params;
            this.flagEdit = false;
            this.showAddMarkupForm = true;
            this.showListMarkup = false;
            this.makeJqueryFields();
            this.fetchAllGroups(this.filterGroup);
        };
        this.onClickListMarkup = () => {
            this.flag = false;
            this.flagEdit = false;
            this.showListMarkup = true;
            this.showAddMarkupForm = false;
        };
    }
    ngOnInit() {
        this.fetchAllMarkups(this.filterParams);
        this.fetchAllSuppliers({});
        this.fetchAllGroups(this.filterGroup);
    }
    fetchAllSuppliers(params) {
        this.MarkupConfigurationService.FetchAllSuppliers(params)
            .subscribe((res) => {
            if (res.status) {
                this.allSuppliers = res.result;
                this.filteredSuppliers = this.allSuppliers;
            }
        }, err => {
            console.log('erer ', err);
        });
    }
    // Functions for watching if anychange comes for @Input  
    ngOnChanges(changes) {
        var keys = Object.keys(changes);
        if (keys.indexOf('sale_id') >= 0) {
        }
    }
    searchChange() {
        this.filterPagination = true;
        var search = this.searchObject;
        this.filterParams.title = search.markupname;
        this.MarkupConfigurationService.searchMarkupByName(this.filterParams)
            .subscribe((res) => {
            if (res.status) {
                this.filteredMarkupsList = res.result.data;
                this.totalCount = res.result.total;
                this.offset = res.result.page;
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
    editMark(groupVal) {
        this.makeJqueryFields();
        this.markupRow = groupVal;
        this.flag = false;
        this.flagEdit = true;
        this.showAddMarkupForm = true;
        this.showListMarkup = false;
        this.fetchAllGroups(this.filterGroup);
    }
    fetchAllGroups(filterGroup) {
        this.MarkupConfigurationService.GetAllGroups(this.filterGroup)
            .subscribe((res) => {
            if (res.status) {
                var myArray = res.result.data.filter(function (obj) {
                    return obj.status != 1;
                });
                this.allGroups = myArray;
                this.groups = this.allGroups;
            }
        }, err => {
            console.log('erer ', err);
        });
    }
    deleteMark(markup) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                this.MarkupConfigurationService.deleteMarkup(markup.markup_id)
                    .subscribe((res) => {
                    if (res.status) {
                        this.toastr.success(`${res.message}`, ``, {
                            timeOut: 1000,
                            progressBar: false,
                            positionClass: 'toast-bottom-right'
                        });
                        this.fetchAllMarkups(this.filterParams);
                        // this.searchChange(this.filterParams)
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
        });
    }
    fetchAllMarkups(filterParams) {
        this.MarkupConfigurationService.GetAllMarkups(this.filterParams)
            .subscribe((res) => {
            if (res.status) {
                this.markupsList = res.result.data;
                this.filteredMarkupsList = res.result.data;
                this.totalCount = res.result.total;
                this.offset = res.result.page;
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
    ngAfterViewInit() {
        // $('.ui.dropdown').dropdown({
        //   allowAdditions: true,
        // });
    }
    makeJqueryFields() {
        var scope = this;
        $(document).ready(function () {
            // console.log('btns added')
            $('.dropdown-supplier').dropdown({ placeholder: 'Select Supplier' });
            $('.dropdown-group').dropdown({ placeholder: 'Select Group' });
            $('.tagsinput').dropdown({ placeholder: 'Select Origin Airport' });
        });
    }
    eventFromChild(data) {
        this.showAddMarkupForm = false;
        this.showListMarkup = true;
        this.fetchAllMarkups(this.filterParams);
    }
    resetFilter() {
        this.searchObject.markupname = "";
        this.fetchAllMarkups(this.filterParams);
    }
    statusToggle(data) {
        this.toggleObj.id = data.markup_id;
        this.toggleObj.status = data.is_active;
        this.toggleObj.table = "markup";
        this.MarkupConfigurationService.onStatusToggle(this.toggleObj)
            .subscribe((res) => {
            if (res.status == 200) {
                this.fetchAllMarkups(this.filterParams);
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
    pageCallback(event) {
        let offset = event.offset;
        this.filterParams.page = offset;
        this.filterPagination ? this.searchChange() : this.fetchAllMarkups(this.filterParams);
    }
};
MarkComponent.ctorParameters = () => [
    { type: src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_3__["SetupConfigService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MarkComponent.prototype, "sale_id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MarkComponent.prototype, "allGroups", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MarkComponent.prototype, "allSuppliers", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MarkComponent.prototype, "showListMarkup", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MarkComponent.prototype, "showAddMarkupForm", void 0);
MarkComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mark',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mark.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/markup-configuration/mark/mark.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mark.component.scss */ "./src/app/layout/setup-configuration/markup-configuration/mark/mark.component.scss")).default]
    })
], MarkComponent);



/***/ }),

/***/ "./src/app/layout/setup-configuration/markup-configuration/markup-configuration-routing.module.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/markup-configuration/markup-configuration-routing.module.ts ***!
  \********************************************************************************************************/
/*! exports provided: MarkupConfigurationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkupConfigurationRoutingModule", function() { return MarkupConfigurationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _markup_configuration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./markup-configuration.component */ "./src/app/layout/setup-configuration/markup-configuration/markup-configuration.component.ts");




const routes = [
    { path: '', component: _markup_configuration_component__WEBPACK_IMPORTED_MODULE_3__["MarkupConfigurationComponent"] }
];
let MarkupConfigurationRoutingModule = class MarkupConfigurationRoutingModule {
};
MarkupConfigurationRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MarkupConfigurationRoutingModule);



/***/ }),

/***/ "./src/app/layout/setup-configuration/markup-configuration/markup-configuration.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/markup-configuration/markup-configuration.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".outer-segment {\n  margin: 0px;\n}\n\n.markup_list {\n  padding: 0px 24px;\n}\n\n.markup_title {\n  margin: 0;\n  font-style: normal;\n  font-weight: 700 !important;\n  font-size: 20px;\n  line-height: 23px;\n  color: #181B20;\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 24px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #E0E0E0;\n}\n\n.filterMarkUp_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.filterMarkUp_list {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.addNewGroup_btn {\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.addNewGroup-text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.addMarkUp {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 11px;\n  text-align: center;\n  position: relative;\n  left: 35px;\n  bottom: 5px;\n}\n\n.corporate_input__placeholder-icon {\n  position: relative;\n  width: 18px;\n  bottom: 28px;\n  left: 9px;\n}\n\n.date-field {\n  text-indent: 17px;\n}\n\n.save-apply_btn,\n.addNewGroup_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.save-apply_text,\n.addNewGroup-text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.addMarkUp {\n  display: inline-block;\n  color: #333 !important;\n  padding: 3px 10px;\n  bottom: 0px;\n  position: inherit !important;\n  cursor: pointer;\n  font-weight: bold !important;\n  border-radius: 3px;\n  box-shadow: 0px 0px 6px 0px grey;\n  border: 1px solid grey;\n}\n\n@media (max-width: 1440px) {\n  .markup_list {\n    margin-left: 24px;\n    padding: 0px;\n  }\n}\n\n@media (max-width: 1280px) {\n  .markup_list {\n    margin-left: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vbWFya3VwLWNvbmZpZ3VyYXRpb24vRTpcXEJlbGFsXFxwcm9qZWN0c1xcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxzZXR1cC1jb25maWd1cmF0aW9uXFxtYXJrdXAtY29uZmlndXJhdGlvblxcbWFya3VwLWNvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zZXR1cC1jb25maWd1cmF0aW9uL21hcmt1cC1jb25maWd1cmF0aW9uL21hcmt1cC1jb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGtDQUFBO0VBQ0Esd0NBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQ0NKOztBREVBO0VBQ0ksNENBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlGQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUZBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTs7RUFFSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUZBQUE7QUNDSjs7QURFQTs7RUFFSSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0ksaUJBQUE7SUFDQSxZQUFBO0VDQ047QUFDRjs7QURFQTtFQUNJO0lBQ0ksaUJBQUE7RUNBTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vbWFya3VwLWNvbmZpZ3VyYXRpb24vbWFya3VwLWNvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXItc2VnbWVudCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLm1hcmt1cF9saXN0IHtcclxuICAgIHBhZGRpbmc6IDBweCAyNHB4O1xyXG59XHJcblxyXG4ubWFya3VwX3RpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgY29sb3I6ICMxODFCMjA7XHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQubWVudT4uaXRlbSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjg1NzE0MjlyZW0gMCAwIDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udWkuYm90dG9tLmF0dGFjaGVkLmFjdGl2ZS50YWIuc2VnbWVudCB7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxN3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTdweDtcclxufVxyXG5cclxuLnRhYi5zZWdtZW50IHtcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNFMEUwRTA7XHJcbn1cclxuXHJcbi5maWx0ZXJNYXJrVXBfYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5maWx0ZXJNYXJrVXBfbGlzdCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZE5ld0dyb3VwX2J0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0RjRGO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uYWRkTmV3R3JvdXAtdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZE1hcmtVcCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTFweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDM1cHg7XHJcbiAgICBib3R0b206IDVweDtcclxufVxyXG5cclxuLmNvcnBvcmF0ZV9pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGJvdHRvbTogMjhweDtcclxuICAgIGxlZnQ6IDlweDtcclxufVxyXG5cclxuLmRhdGUtZmllbGQge1xyXG4gICAgdGV4dC1pbmRlbnQ6IDE3cHg7XHJcbn1cclxuXHJcbi5zYXZlLWFwcGx5X2J0bixcclxuLmFkZE5ld0dyb3VwX2J0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uc2F2ZS1hcHBseV90ZXh0LFxyXG4uYWRkTmV3R3JvdXAtdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZE1hcmtVcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHBvc2l0aW9uOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggMHB4IGdyZXk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICAubWFya3VwX2xpc3Qge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgLm1hcmt1cF9saXN0IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxufSAiLCIub3V0ZXItc2VnbWVudCB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ubWFya3VwX2xpc3Qge1xuICBwYWRkaW5nOiAwcHggMjRweDtcbn1cblxuLm1hcmt1cF90aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGNvbG9yOiAjMTgxQjIwO1xufVxuXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbi51aS50b3AuYXR0YWNoZWQubWVudSA+IC5pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yODU3MTQyOXJlbSAwIDAgMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLnVpLmJvdHRvbS5hdHRhY2hlZC5hY3RpdmUudGFiLnNlZ21lbnQge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XG59XG5cbi50YWIuc2VnbWVudCB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG5ociB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNFMEUwRTA7XG59XG5cbi5maWx0ZXJNYXJrVXBfYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5maWx0ZXJNYXJrVXBfbGlzdCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWRkTmV3R3JvdXBfYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0RjRGO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5hZGROZXdHcm91cC10ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hZGRNYXJrVXAge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDExcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAzNXB4O1xuICBib3R0b206IDVweDtcbn1cblxuLmNvcnBvcmF0ZV9pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE4cHg7XG4gIGJvdHRvbTogMjhweDtcbiAgbGVmdDogOXB4O1xufVxuXG4uZGF0ZS1maWVsZCB7XG4gIHRleHQtaW5kZW50OiAxN3B4O1xufVxuXG4uc2F2ZS1hcHBseV9idG4sXG4uYWRkTmV3R3JvdXBfYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5zYXZlLWFwcGx5X3RleHQsXG4uYWRkTmV3R3JvdXAtdGV4dCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWRkTWFya1VwIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogIzMzMyAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAzcHggMTBweDtcbiAgYm90dG9tOiAwcHg7XG4gIHBvc2l0aW9uOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDZweCAwcHggZ3JleTtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAubWFya3VwX2xpc3Qge1xuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAubWFya3VwX2xpc3Qge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/setup-configuration/markup-configuration/markup-configuration.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/markup-configuration/markup-configuration.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: MarkupConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkupConfigurationComponent", function() { return MarkupConfigurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/setup-config/setup-config.service */ "./src/app/shared/services/setup-config/setup-config.service.ts");
/* harmony import */ var src_app_shared_services_pointsale_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/pointsale.service */ "./src/app/shared/services/pointsale.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");





let MarkupConfigurationComponent = class MarkupConfigurationComponent {
    constructor(MarkupConfigurationService, posService, toastr) {
        this.MarkupConfigurationService = MarkupConfigurationService;
        this.posService = posService;
        this.toastr = toastr;
        this.showListForm = true;
        this.showAddGroupForm = false;
        this.showListMarkup = true;
        this.showAddMarkupForm = false;
        this.allPos = [];
        this.allSuppliers = [];
        this.NewGroupSeasonality = [];
        this.filteredGroupSeasonality = [];
        this.saleIdClicked = '-1';
        this.offset = 0;
        this.totalCount = 0;
        this.filterParams = {
            page: this.offset,
        };
        // this.addMarkupObject.
    }
    ngOnInit() {
        this.fetchAllGroups(this.filterParams);
        // this.fetchAllPOS({});
        this.fetchAllSuppliers({});
    }
    fetchAllGroups(filterParams) {
        this.MarkupConfigurationService.GetAllGroups(filterParams)
            .subscribe((res) => {
            if (res.status) {
                this.NewGroupSeasonality = res.result.data;
                this.totalCount = res.result.total;
                this.offset = res.result.page;
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
        this.posService.fetchAllPointofSale(params)
            .subscribe((res) => {
            if (res.status) {
                this.allPos = res.result.data;
                // this.addGroupSeasonalityObject.organisation_id = Number(this.allPos[0].organisation_id);   
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
    fetchAllSuppliers(params) {
        this.MarkupConfigurationService.GetAllSuppliers(params)
            .subscribe((res) => {
            if (res.status) {
                this.allSuppliers = res.result;
                // console.log('all sup ', this.allSuppliers)
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
    addMarkupingroup(row) {
        this.saleIdClicked = row.sale_id;
        this.showAddMarkupForm = true;
        this.showListMarkup = false;
        $('#tab-2').click();
    }
    ngAfterViewInit() {
        $(document).ready(function () {
            $('.menu .item').tab();
            $('.ui.dropdown').dropdown();
            // $('#tab-2').click();
        });
    }
    pageCallback(event) {
        let offset = event.offset;
        this.filterParams.page = offset;
        this.fetchAllGroups(this.filterParams);
    }
};
MarkupConfigurationComponent.ctorParameters = () => [
    { type: src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_2__["SetupConfigService"] },
    { type: src_app_shared_services_pointsale_service__WEBPACK_IMPORTED_MODULE_3__["POSService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
MarkupConfigurationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-markup-configuration',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./markup-configuration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/markup-configuration/markup-configuration.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./markup-configuration.component.scss */ "./src/app/layout/setup-configuration/markup-configuration/markup-configuration.component.scss")).default]
    })
], MarkupConfigurationComponent);



/***/ }),

/***/ "./src/app/layout/setup-configuration/markup-configuration/markup-configuration.module.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/markup-configuration/markup-configuration.module.ts ***!
  \************************************************************************************************/
/*! exports provided: MarkupConfigurationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkupConfigurationModule", function() { return MarkupConfigurationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-moment */ "./node_modules/ngx-moment/__ivy_ngcc__/fesm2015/ngx-moment.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _markup_configuration_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./markup-configuration-routing.module */ "./src/app/layout/setup-configuration/markup-configuration/markup-configuration-routing.module.ts");
/* harmony import */ var _markup_configuration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./markup-configuration.component */ "./src/app/layout/setup-configuration/markup-configuration/markup-configuration.component.ts");
/* harmony import */ var _mark_mark_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mark/mark.component */ "./src/app/layout/setup-configuration/markup-configuration/mark/mark.component.ts");
/* harmony import */ var _sale_sale_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sale/sale.component */ "./src/app/layout/setup-configuration/markup-configuration/sale/sale.component.ts");
/* harmony import */ var _sale_addgroup_addgroup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sale/addgroup/addgroup.component */ "./src/app/layout/setup-configuration/markup-configuration/sale/addgroup/addgroup.component.ts");
/* harmony import */ var _mark_addmarkup_addmarkup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mark/addmarkup/addmarkup.component */ "./src/app/layout/setup-configuration/markup-configuration/mark/addmarkup/addmarkup.component.ts");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");




















let MarkupConfigurationModule = class MarkupConfigurationModule {
};
MarkupConfigurationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_markup_configuration_component__WEBPACK_IMPORTED_MODULE_7__["MarkupConfigurationComponent"], _mark_mark_component__WEBPACK_IMPORTED_MODULE_8__["MarkComponent"], _sale_sale_component__WEBPACK_IMPORTED_MODULE_9__["SaleComponent"], _sale_addgroup_addgroup_component__WEBPACK_IMPORTED_MODULE_10__["AddGroupComponent"], _mark_addmarkup_addmarkup_component__WEBPACK_IMPORTED_MODULE_11__["AddMarkupComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _markup_configuration_routing_module__WEBPACK_IMPORTED_MODULE_6__["MarkupConfigurationRoutingModule"],
            ngx_moment__WEBPACK_IMPORTED_MODULE_4__["MomentModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["NgxDatatableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatNativeDateModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"]
        ]
    })
], MarkupConfigurationModule);



/***/ }),

/***/ "./src/app/layout/setup-configuration/markup-configuration/sale/addgroup/addgroup.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/markup-configuration/sale/addgroup/addgroup.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".outer {\n  margin: 0px 20px 0px 15px;\n}\n\n.outer__add-pos__title {\n  margin: 0;\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #E0E0E0;\n}\n\n.tourCode_btn,\n.addTogg_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n}\n\n.tourCode_text,\n.addTogg_text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.corporate_input__placeholder-icon {\n  position: relative;\n  width: 18px;\n  bottom: 28px;\n  left: 9px;\n}\n\ndiv.upload {\n  box-sizing: border-box;\n  height: 15px;\n  width: 123px;\n  border-radius: 3px;\n  background-color: #FFF;\n  border: 0.5px solid #808080;\n  box-shadow: 0 0.25px 0.1px 0 rgba(0, 0, 0, 0.5);\n}\n\ndiv.upload input {\n  display: block !important;\n  width: 123px !important;\n  height: 15px !important;\n  opacity: 0 !important;\n  overflow: hidden !important;\n}\n\n.file_choose {\n  position: relative;\n  left: 27px;\n  bottom: 6px;\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 9px;\n  line-height: 10px;\n}\n\n.uploadinImg_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n}\n\n.uploadinImg_btn__text,\n.save-next_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 12px;\n}\n\n.file_table__img {\n  border: none;\n  background-color: #dfeafb5e;\n}\n\n.save-next_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.field input::-webkit-input-placeholder {\n  font-size: 14px;\n}\n\n.field input::-moz-placeholder {\n  font-size: 14px;\n}\n\n.field input::-ms-input-placeholder {\n  font-size: 14px;\n}\n\n.field input::placeholder {\n  font-size: 14px;\n}\n\n.ui.pointing.secondary.menu {\n  border: none;\n}\n\n.item.stepper__progress {\n  width: 167px;\n}\n\n.tab.segment.stepper__segment-outline {\n  border: none;\n  box-shadow: none;\n}\n\n.office-info_icon {\n  position: relative;\n  top: 20px;\n  right: 85px;\n}\n\n.pos_access-rights {\n  color: #828282;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 11px;\n  line-height: 12px;\n}\n\n.cancel_btn {\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.cancel_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.date_field {\n  text-indent: 17px;\n}\n\n.assign_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.assign_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 15px;\n}\n\n.circleIcon {\n  height: 20px;\n  width: 20px;\n  background-color: #0D801C;\n  border-radius: 50%;\n  display: inline-block;\n  margin-top: 6px;\n}\n\n.plusIcon {\n  color: #FFF;\n  font-size: 17px;\n  font-weight: 100;\n  line-height: 28px;\n  text-align: center;\n  margin-left: 0px;\n  margin-top: -3px;\n}\n\n::ng-deep.mat-step-icon-content {\n  height: 19px;\n  width: 19px;\n  color: #C8C8C8;\n  background-color: #C8C8C8;\n  border-radius: 50%;\n}\n\n::ng-deep.mat-step-icon-state-number.mat-step-icon.mat-step-icon-selected {\n  border: 1px solid #3867B1;\n}\n\n::ng-deep.mat-horizontal-stepper-header-container {\n  width: 40%;\n}\n\n::ng-deep.mat-step-label {\n  color: #3867b1;\n}\n\n.pos_btn-panel {\n  right: 68px;\n  text-align: right;\n  bottom: 97px;\n}\n\n.pos_btn-panel .secondary {\n  width: 104.87px;\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.pos_btn-panel .primary {\n  width: 124.87px;\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.icon {\n  opacity: 1;\n  z-index: 1;\n}\n\n.icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.icon .bookings_input__placeholder-icon.cal {\n  width: 16px;\n}\n\n.icon .bookings_input__placeholder-icon.call {\n  width: 10px;\n  margin-top: 10px;\n}\n\n.right.floated.two.wide.column.group_save-btn {\n  display: -webkit-box;\n  display: flex;\n}\n\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n\n.ui.form .three.wide.field,\n.ui.form .field > .checkbox-field {\n  margin-bottom: 16px;\n}\n\n.wide.field.sale_check {\n  margin-top: 12px;\n}\n\n.wide.field.sale_check label {\n  position: relative;\n  top: -14px;\n  left: 0px;\n}\n\ninput:placeholder {\n  font-size: 14px;\n}\n\ninput:placeholder {\n  font-size: 14px;\n}\n\n.ui.form .eight.wide.field {\n  margin-bottom: 16px;\n}\n\n.save-btn-block {\n  position: relative;\n  top: 32px;\n  right: -24px;\n}\n\n.save-btn-block button {\n  float: right;\n  margin-right: 10px;\n  margin-top: -50px;\n}\n\n.sale_check input, .assign_prod input {\n  position: relative;\n  top: 7px;\n  left: 0px;\n}\n\n.sale_check .ui.checkbox .box:before, .sale_check .ui.checkbox label:before, .assign_prod .ui.checkbox .box:before, .assign_prod .ui.checkbox label:before {\n  border-radius: 50%;\n}\n\n.sale_check .ui.checkbox input:checked ~ label:before, .assign_prod .ui.checkbox input:checked ~ label:before {\n  border: 1px solid #3867b1;\n}\n\n.sale_check .ui.checkbox input:checked ~ label, .assign_prod .ui.checkbox input:checked ~ label {\n  color: #3867b1;\n}\n\n.sale_check .ui.checkbox input:checked ~ label:after, .assign_prod .ui.checkbox input:checked ~ label:after {\n  color: #3867b1;\n}\n\n.sale_check .ui.checkbox label:after, .assign_prod .ui.checkbox label:after {\n  font-size: 12px;\n  top: 1px;\n}\n\n.assign_prod input {\n  top: 17px;\n}\n\n.field:first-child {\n  margin-bottom: 24px;\n}\n\n@media (max-width: 1440px) {\n  .result-block {\n    width: auto;\n    margin: 24px;\n  }\n\n  .ui.form {\n    padding: 30px 0px;\n  }\n  .ui.form .tourCode_btn {\n    margin-right: 0px;\n  }\n  .ui.form .bookings_btn-panel.list-code {\n    padding-left: 0px;\n  }\n  .ui.form .save-btn-block {\n    width: auto;\n    margin: 0px auto;\n    position: relative;\n    top: 60px;\n    right: -16px;\n  }\n}\n\n@media (max-width: 1280px) {\n  .listCodeWrapper {\n    padding: 0px 10px;\n  }\n\n  .save-btn-block button {\n    right: 120px;\n  }\n\n  .outer-segment {\n    margin-bottom: 200px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vbWFya3VwLWNvbmZpZ3VyYXRpb24vc2FsZS9hZGRncm91cC9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHNldHVwLWNvbmZpZ3VyYXRpb25cXG1hcmt1cC1jb25maWd1cmF0aW9uXFxzYWxlXFxhZGRncm91cFxcYWRkZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zZXR1cC1jb25maWd1cmF0aW9uL21hcmt1cC1jb25maWd1cmF0aW9uL3NhbGUvYWRkZ3JvdXAvYWRkZ3JvdXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGtDQUFBO0VBQ0Esd0NBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQ0NKOztBREVBO0VBQ0ksNENBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBOztFQUVJLGtCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTs7RUFFSSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0NKOztBRFNBO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLCtDQUFBO0FDTko7O0FEU0E7RUFDSSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FDTko7O0FEU0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDTko7O0FEU0E7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FDTko7O0FEU0E7O0VBRUksV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNOSjs7QURTQTtFQUNJLFlBQUE7RUFDQSwyQkFBQTtBQ05KOztBRFNBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlGQUFBO0FDTko7O0FEU0E7RUFDSSxlQUFBO0FDTko7O0FES0E7RUFDSSxlQUFBO0FDTko7O0FES0E7RUFDSSxlQUFBO0FDTko7O0FES0E7RUFDSSxlQUFBO0FDTko7O0FEU0E7RUFDSSxZQUFBO0FDTko7O0FEU0E7RUFDSSxZQUFBO0FDTko7O0FEU0E7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNOSjs7QURTQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNOSjs7QURTQTtFQUNJLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ05KOztBRFNBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlGQUFBO0FDTko7O0FEU0E7RUFDSSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDTko7O0FEU0E7RUFDSSxpQkFBQTtBQ05KOztBRFNBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlGQUFBO0FDTko7O0FEU0E7RUFDSSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ05KOztBRFNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FDTko7O0FEU0E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNOSjs7QURTQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNOSjs7QURTQTtFQUNJLHlCQUFBO0FDTko7O0FEU0E7RUFDSSxVQUFBO0FDTko7O0FEU0E7RUFDSSxjQUFBO0FDTko7O0FEU0E7RUFFSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FDUEo7O0FEUUk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlGQUFBO0FDTlI7O0FEUUk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlGQUFBO0FDTlI7O0FEVUE7RUFDSSxVQUFBO0VBQ0EsVUFBQTtBQ1BKOztBRFFJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNOUjs7QURPUTtFQUNJLFdBQUE7QUNMWjs7QURPUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0xaOztBRFVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0FDUEo7O0FEVUE7RUFDSSxpQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNQSjs7QURVQTs7RUFFSSxtQkFBQTtBQ1BKOztBRFVBO0VBQ0ksZ0JBQUE7QUNQSjs7QURRSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNOUjs7QURXSTtFQUNJLGVBQUE7QUNSUjs7QURhSTtFQUNJLGVBQUE7QUNWUjs7QURlSTtFQUNJLG1CQUFBO0FDWlI7O0FEZ0JBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ2JKOztBRGNJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNaUjs7QURpQkk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDZFI7O0FEZ0JJO0VBQ0ksa0JBQUE7QUNkUjs7QURnQkk7RUFDSSx5QkFBQTtBQ2RSOztBRGdCSTtFQUNJLGNBQUE7QUNkUjs7QURlUTtFQUNJLGNBQUE7QUNiWjs7QURnQkk7RUFDSSxlQUFBO0VBQ0EsUUFBQTtBQ2RSOztBRG1CSTtFQUNJLFNBQUE7QUNoQlI7O0FEb0JBO0VBQ0ksbUJBQUE7QUNqQko7O0FEb0JBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQ2pCTjs7RURtQkU7SUFDSSxpQkFBQTtFQ2hCTjtFRGlCTTtJQUNJLGlCQUFBO0VDZlY7RURpQk07SUFDSSxpQkFBQTtFQ2ZWO0VEaUJNO0lBQ0ksV0FBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtFQ2ZWO0FBQ0Y7O0FEbUJBO0VBQ0k7SUFDSSxpQkFBQTtFQ2pCTjs7RURvQk07SUFDSSxZQUFBO0VDakJWOztFRG9CRTtJQUNJLG9CQUFBO0VDakJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc2V0dXAtY29uZmlndXJhdGlvbi9tYXJrdXAtY29uZmlndXJhdGlvbi9zYWxlL2FkZGdyb3VwL2FkZGdyb3VwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGVyIHtcclxuICAgIG1hcmdpbjogMHB4IDIwcHggMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5vdXRlcl9fYWRkLXBvc19fdGl0bGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQubWVudT4uaXRlbSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjg1NzE0MjlyZW0gMCAwIDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udWkuYm90dG9tLmF0dGFjaGVkLmFjdGl2ZS50YWIuc2VnbWVudCB7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxN3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTdweDtcclxufVxyXG5cclxuLnRhYi5zZWdtZW50IHtcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNFMEUwRTA7XHJcbn1cclxuXHJcbi50b3VyQ29kZV9idG4sXHJcbi5hZGRUb2dnX2J0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xyXG59XHJcblxyXG4udG91ckNvZGVfdGV4dCxcclxuLmFkZFRvZ2dfdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvcnBvcmF0ZV9pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGJvdHRvbTogMjhweDtcclxuICAgIGxlZnQ6IDlweDtcclxufVxyXG5cclxuLy8gLm91dGVyLWZvcm0sLm91dGVyX2NvcnBGb3JtIHtcclxuLy8gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICM4MDgwODA7XHJcbi8vICAgICBtYXJnaW46IDQ1cHggMzJweCAxMTFweCAyNXB4O1xyXG4vLyB9XHJcbi8vIC51aS5mb3JtLnBvc19iYXNpY19mb3JtIHttYXJnaW46IDE3cHggMjNweCAyNXB4IDIycHg7fVxyXG5kaXYudXBsb2FkIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTIzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjODA4MDgwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjI1cHggMC4xcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbmRpdi51cGxvYWQgaW5wdXQge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMjNweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWxlX2Nob29zZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAyN3B4O1xyXG4gICAgYm90dG9tOiA2cHg7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi51cGxvYWRpbkltZ19idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcclxufVxyXG5cclxuLnVwbG9hZGluSW1nX2J0bl9fdGV4dCxcclxuLnNhdmUtbmV4dF9idG5fX3RleHQge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi5maWxlX3RhYmxlX19pbWcge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZWFmYjVlO1xyXG59XHJcblxyXG4uc2F2ZS1uZXh0X2J0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnVpLnBvaW50aW5nLnNlY29uZGFyeS5tZW51IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLml0ZW0uc3RlcHBlcl9fcHJvZ3Jlc3Mge1xyXG4gICAgd2lkdGg6IDE2N3B4O1xyXG59XHJcblxyXG4udGFiLnNlZ21lbnQuc3RlcHBlcl9fc2VnbWVudC1vdXRsaW5lIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5vZmZpY2UtaW5mb19pY29uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiA4NXB4O1xyXG59XHJcblxyXG4ucG9zX2FjY2Vzcy1yaWdodHMge1xyXG4gICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTJweDtcclxufVxyXG5cclxuLmNhbmNlbF9idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRGNEY0RjtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmNhbmNlbF9idG5fX3RleHQge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kYXRlX2ZpZWxkIHtcclxuICAgIHRleHQtaW5kZW50OiAxN3B4O1xyXG59XHJcblxyXG4uYXNzaWduX2J0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uYXNzaWduX2J0bl9fdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxufVxyXG5cclxuLmNpcmNsZUljb24ge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQ4MDFDO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG59XHJcblxyXG4ucGx1c0ljb24ge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTNweDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24tY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICB3aWR0aDogMTlweDtcclxuICAgIGNvbG9yOiAjQzhDOEM4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M4QzhDODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24tc3RhdGUtbnVtYmVyLm1hdC1zdGVwLWljb24ubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg2N0IxO1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtc3RlcC1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzM4NjdiMTtcclxufVxyXG5cclxuLnBvc19idG4tcGFuZWwge1xyXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDY4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGJvdHRvbTogOTdweDtcclxuICAgIC5zZWNvbmRhcnkge1xyXG4gICAgICAgIHdpZHRoOiAxMDQuODdweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRGNEY0RjtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB9XHJcbiAgICAucHJpbWFyeSB7XHJcbiAgICAgICAgd2lkdGg6IDEyNC44N3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIH1cclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICAmLmNhbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmNhbGwge1xyXG4gICAgICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yaWdodC5mbG9hdGVkLnR3by53aWRlLmNvbHVtbi5ncm91cF9zYXZlLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4udWkuZm9ybSAuZmllbGQ+bGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgY29sb3I6ICMxODFCMjA7XHJcbiAgICBtYXJnaW46IDBweCAwcHggOHB4O1xyXG59XHJcblxyXG4udWkuZm9ybSAudGhyZWUud2lkZS5maWVsZCxcclxuLnVpLmZvcm0gLmZpZWxkPi5jaGVja2JveC1maWVsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4ud2lkZS5maWVsZC5zYWxlX2NoZWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogLTE0cHg7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICAmOnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgICY6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxufVxyXG5cclxuLnVpLmZvcm0ge1xyXG4gICAgLmVpZ2h0LndpZGUuZmllbGQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zYXZlLWJ0bi1ibG9jayB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDMycHg7XHJcbiAgICByaWdodDogLTI0cHg7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zYWxlX2NoZWNrLCAuYXNzaWduX3Byb2Qge1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDdweDtcclxuICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICB9XHJcbiAgICAudWkuY2hlY2tib3ggLmJveDpiZWZvcmUsIC51aS5jaGVja2JveCBsYWJlbDpiZWZvcmUge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICAgIC51aS5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YmVmb3JlIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg2N2IxO1xyXG4gICAgfVxyXG4gICAgLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbCB7XHJcbiAgICAgICAgY29sb3I6ICMzODY3YjE7XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzg2N2IxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC51aS5jaGVja2JveCBsYWJlbDphZnRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIHRvcDogMXB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYXNzaWduX3Byb2Qge1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIHRvcDogMTdweDtcclxuICAgIH1cclxufVxyXG5cclxuLmZpZWxkOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIC5yZXN1bHQtYmxvY2sge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogMjRweDtcclxuICAgIH1cclxuICAgIC51aS5mb3JtIHtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4IDBweDtcclxuICAgICAgICAudG91ckNvZGVfYnRuIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7ICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJvb2tpbmdzX2J0bi1wYW5lbC5saXN0LWNvZGUge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNhdmUtYnRuLWJsb2NrIHtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IGF1dG87XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiA2MHB4O1xyXG4gICAgICAgICAgICByaWdodDogLTE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAubGlzdENvZGVXcmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nOjBweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLnNhdmUtYnRuLWJsb2NrIHtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICByaWdodDogMTIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm91dGVyLXNlZ21lbnQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xyXG4gICAgfVxyXG59IiwiLm91dGVyIHtcbiAgbWFyZ2luOiAwcHggMjBweCAwcHggMTVweDtcbn1cblxuLm91dGVyX19hZGQtcG9zX190aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLnVpLnRvcC5hdHRhY2hlZC5tZW51ID4gLml0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwLjI4NTcxNDI5cmVtIDAgMCAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xufVxuXG4udWkuYm90dG9tLmF0dGFjaGVkLmFjdGl2ZS50YWIuc2VnbWVudCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE3cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTdweDtcbn1cblxuLnRhYi5zZWdtZW50IHtcbiAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbmhyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGJvcmRlcjogMC41cHggc29saWQgI0UwRTBFMDtcbn1cblxuLnRvdXJDb2RlX2J0bixcbi5hZGRUb2dnX2J0biB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbn1cblxuLnRvdXJDb2RlX3RleHQsXG4uYWRkVG9nZ190ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxOHB4O1xuICBib3R0b206IDI4cHg7XG4gIGxlZnQ6IDlweDtcbn1cblxuZGl2LnVwbG9hZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDEyM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJvcmRlcjogMC41cHggc29saWQgIzgwODA4MDtcbiAgYm94LXNoYWRvdzogMCAwLjI1cHggMC4xcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbmRpdi51cGxvYWQgaW5wdXQge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB3aWR0aDogMTIzcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4uZmlsZV9jaG9vc2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDI3cHg7XG4gIGJvdHRvbTogNnB4O1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBsaW5lLWhlaWdodDogMTBweDtcbn1cblxuLnVwbG9hZGluSW1nX2J0biB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbn1cblxuLnVwbG9hZGluSW1nX2J0bl9fdGV4dCxcbi5zYXZlLW5leHRfYnRuX190ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xufVxuXG4uZmlsZV90YWJsZV9faW1nIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlYWZiNWU7XG59XG5cbi5zYXZlLW5leHRfYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi51aS5wb2ludGluZy5zZWNvbmRhcnkubWVudSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLml0ZW0uc3RlcHBlcl9fcHJvZ3Jlc3Mge1xuICB3aWR0aDogMTY3cHg7XG59XG5cbi50YWIuc2VnbWVudC5zdGVwcGVyX19zZWdtZW50LW91dGxpbmUge1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5vZmZpY2UtaW5mb19pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiA4NXB4O1xufVxuXG4ucG9zX2FjY2Vzcy1yaWdodHMge1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG5cbi5jYW5jZWxfYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0RjRGO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5jYW5jZWxfYnRuX190ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kYXRlX2ZpZWxkIHtcbiAgdGV4dC1pbmRlbnQ6IDE3cHg7XG59XG5cbi5hc3NpZ25fYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5hc3NpZ25fYnRuX190ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xufVxuXG4uY2lyY2xlSWNvbiB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwRDgwMUM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5wbHVzSWNvbiB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi10b3A6IC0zcHg7XG59XG5cbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLWNvbnRlbnQge1xuICBoZWlnaHQ6IDE5cHg7XG4gIHdpZHRoOiAxOXB4O1xuICBjb2xvcjogI0M4QzhDODtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M4QzhDODtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1udW1iZXIubWF0LXN0ZXAtaWNvbi5tYXQtc3RlcC1pY29uLXNlbGVjdGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM4NjdCMTtcbn1cblxuOjpuZy1kZWVwLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MCU7XG59XG5cbjo6bmctZGVlcC5tYXQtc3RlcC1sYWJlbCB7XG4gIGNvbG9yOiAjMzg2N2IxO1xufVxuXG4ucG9zX2J0bi1wYW5lbCB7XG4gIHJpZ2h0OiA2OHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgYm90dG9tOiA5N3B4O1xufVxuLnBvc19idG4tcGFuZWwgLnNlY29uZGFyeSB7XG4gIHdpZHRoOiAxMDQuODdweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0RjRGO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4ucG9zX2J0bi1wYW5lbCAucHJpbWFyeSB7XG4gIHdpZHRoOiAxMjQuODdweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5pY29uIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTtcbn1cbi5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4uaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsIHtcbiAgd2lkdGg6IDE2cHg7XG59XG4uaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsbCB7XG4gIHdpZHRoOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucmlnaHQuZmxvYXRlZC50d28ud2lkZS5jb2x1bW4uZ3JvdXBfc2F2ZS1idG4ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4udWkuZm9ybSAuZmllbGQgPiBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIGNvbG9yOiAjMTgxQjIwO1xuICBtYXJnaW46IDBweCAwcHggOHB4O1xufVxuXG4udWkuZm9ybSAudGhyZWUud2lkZS5maWVsZCxcbi51aS5mb3JtIC5maWVsZCA+IC5jaGVja2JveC1maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi53aWRlLmZpZWxkLnNhbGVfY2hlY2sge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufVxuLndpZGUuZmllbGQuc2FsZV9jaGVjayBsYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTRweDtcbiAgbGVmdDogMHB4O1xufVxuXG5pbnB1dDpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuaW5wdXQ6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi51aS5mb3JtIC5laWdodC53aWRlLmZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnNhdmUtYnRuLWJsb2NrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDMycHg7XG4gIHJpZ2h0OiAtMjRweDtcbn1cbi5zYXZlLWJ0bi1ibG9jayBidXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgbWFyZ2luLXRvcDogLTUwcHg7XG59XG5cbi5zYWxlX2NoZWNrIGlucHV0LCAuYXNzaWduX3Byb2QgaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogN3B4O1xuICBsZWZ0OiAwcHg7XG59XG4uc2FsZV9jaGVjayAudWkuY2hlY2tib3ggLmJveDpiZWZvcmUsIC5zYWxlX2NoZWNrIC51aS5jaGVja2JveCBsYWJlbDpiZWZvcmUsIC5hc3NpZ25fcHJvZCAudWkuY2hlY2tib3ggLmJveDpiZWZvcmUsIC5hc3NpZ25fcHJvZCAudWkuY2hlY2tib3ggbGFiZWw6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnNhbGVfY2hlY2sgLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpiZWZvcmUsIC5hc3NpZ25fcHJvZCAudWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmJlZm9yZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzODY3YjE7XG59XG4uc2FsZV9jaGVjayAudWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsLCAuYXNzaWduX3Byb2QgLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbCB7XG4gIGNvbG9yOiAjMzg2N2IxO1xufVxuLnNhbGVfY2hlY2sgLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbDphZnRlciwgLmFzc2lnbl9wcm9kIC51aS5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YWZ0ZXIge1xuICBjb2xvcjogIzM4NjdiMTtcbn1cbi5zYWxlX2NoZWNrIC51aS5jaGVja2JveCBsYWJlbDphZnRlciwgLmFzc2lnbl9wcm9kIC51aS5jaGVja2JveCBsYWJlbDphZnRlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdG9wOiAxcHg7XG59XG5cbi5hc3NpZ25fcHJvZCBpbnB1dCB7XG4gIHRvcDogMTdweDtcbn1cblxuLmZpZWxkOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAucmVzdWx0LWJsb2NrIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW46IDI0cHg7XG4gIH1cblxuICAudWkuZm9ybSB7XG4gICAgcGFkZGluZzogMzBweCAwcHg7XG4gIH1cbiAgLnVpLmZvcm0gLnRvdXJDb2RlX2J0biB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIH1cbiAgLnVpLmZvcm0gLmJvb2tpbmdzX2J0bi1wYW5lbC5saXN0LWNvZGUge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICB9XG4gIC51aS5mb3JtIC5zYXZlLWJ0bi1ibG9jayB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiAwcHggYXV0bztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA2MHB4O1xuICAgIHJpZ2h0OiAtMTZweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAubGlzdENvZGVXcmFwcGVyIHtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgfVxuXG4gIC5zYXZlLWJ0bi1ibG9jayBidXR0b24ge1xuICAgIHJpZ2h0OiAxMjBweDtcbiAgfVxuXG4gIC5vdXRlci1zZWdtZW50IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMDBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/layout/setup-configuration/markup-configuration/sale/addgroup/addgroup.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/markup-configuration/sale/addgroup/addgroup.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: AddGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGroupComponent", function() { return AddGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/setup-config/setup-config.service */ "./src/app/shared/services/setup-config/setup-config.service.ts");
/* harmony import */ var src_app_shared_services_pointsale_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/pointsale.service */ "./src/app/shared/services/pointsale.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




// import Swal from 'sweetalert2';



let AddGroupComponent = class AddGroupComponent {
    constructor(MarkupConfigurationService, posService, _formBuilder, toastr) {
        this.MarkupConfigurationService = MarkupConfigurationService;
        this.posService = posService;
        this._formBuilder = _formBuilder;
        this.toastr = toastr;
        this.allPos = [];
        this.isSubmitted = false;
        this.orgArr = [];
        this.sendDataToParent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.initGroupForm();
    }
    ngOnInit() {
        this.fetchAllPOS({ limit: 1500, page: 0 });
        this.onEditRow(this.editRow);
        if (this.flagDet == true && this.flgEditDet == false) {
            this.showSaveButton = true;
            this.showUpdateButton = false;
            this.addGroupForm.reset();
        }
        else {
            this.showUpdateButton = true;
            this.showSaveButton = false;
        }
    }
    initGroupForm() {
        this.addGroupForm = this._formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            organisation_id: [[], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            is_active: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            preference: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            start_date: [''],
            end_date: [''],
            is_stop_sale: [''],
            is_free_sale: [''],
            sale_type: [''],
            is_flight: [false],
            is_hotel: [false],
            is_car: [false],
            is_transfers: [false],
            is_activities: [false],
            is_insurance: [false],
            is_cruises: [false],
            sale_id: [''],
            mode: ['']
        });
    }
    addGroup(event) {
        this.isSubmitted = true;
        this.addGroupForm.patchValue({
            name: this.addGroupForm.value.name,
            organisation_id: this.addGroupForm.value.organisation_id,
            is_active: this.addGroupForm.value.is_active,
            preference: this.addGroupForm.value.preference,
            start_date: this.addGroupForm.value.start_date ? this.addGroupForm.value.start_date : "",
            end_date: this.addGroupForm.value.end_date ? this.addGroupForm.value.end_date : "",
            is_stop_sale: this.addGroupForm.value.is_stop_sale ? this.addGroupForm.value.is_stop_sale : "",
            is_free_sale: this.addGroupForm.value.is_free_sale ? this.addGroupForm.value.is_free_sale : "",
            // sale_type:this.addGroupForm.value.sale_type?this.addGroupForm.value.sale_type:"",
            is_flight: this.addGroupForm.value.is_flight ? this.addGroupForm.value.is_flight : false,
            is_hotel: this.addGroupForm.value.is_hotel ? this.addGroupForm.value.is_hotel : false,
            is_car: this.addGroupForm.value.end_date ? this.addGroupForm.value.is_car : false,
            is_transfers: this.addGroupForm.value.is_transfers ? this.addGroupForm.value.is_transfers : false,
            is_activities: this.addGroupForm.value.is_activities ? this.addGroupForm.value.is_activities : false,
            is_insurance: this.addGroupForm.value.is_insurance ? this.addGroupForm.value.is_insurance : false,
            is_cruises: this.addGroupForm.value.is_cruises ? this.addGroupForm.value.is_cruises : false,
            // sale_id:this.addGroupForm.value.sale_id?this.addGroupForm.value.sale_id:"",
            mode: "Add",
        });
        var formParams = Object.assign({}, this.addGroupForm.value);
        if (formParams.sale_type == 'freesale') {
            formParams.is_stop_sale = false;
            formParams.is_free_sale = true;
        }
        else {
            formParams.is_stop_sale = true;
            formParams.is_free_sale = false;
        }
        this.MarkupConfigurationService.AddGroup(formParams)
            .subscribe((res) => {
            if (res.status == true) {
                var group = res.Sale;
                this.sendDataToParent.emit(event);
                this.toastr.success(`Group added...!!!`, `Success `, {
                    timeOut: 10000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
            else {
                if ((formParams.name || formParams.organisation_id || formParams.is_active || formParams.preference) === null) {
                    this.toastr.error(`Fill the mandatory fields`, `Error `, {
                        timeOut: 10000,
                        progressBar: false,
                        positionClass: 'toast-bottom-right'
                    });
                }
                else {
                    this.toastr.error(`Something bad happened at our end.`, `Error `, {
                        timeOut: 10000,
                        progressBar: false,
                        positionClass: 'toast-bottom-right'
                    });
                }
            }
        }, err => {
            console.log('erer ', err);
            this.toastr.success(`Something bad happened at our end. ${err}`, `Error `, {
                timeOut: 10000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
            });
        });
    }
    fetchAllPOS(data) {
        this.posService.fetchAllPointofSale(data)
            .subscribe((res) => {
            if (res.status) {
                this.allPos = res.result.data;
            }
        }, err => {
            console.log('erer ', err);
        });
    }
    resetAddGroupForm() {
        // this.addGroupForm.patchValue({
        //   name: '',
        //   organisation_id: [],
        //   is_active: '',
        //   preference: '',
        //   start_date: moment(),
        //   end_date: moment(),
        //   sale_type: 'stopsale',
        //   is_flight: true,
        //   is_hotel: false,
        //   is_car: false,
        //   is_transfers: false,
        //   is_activities: false,
        //   is_insurance: false,
        //   is_cruises: false
        // })
        // this.ngAfterViewInit();
    }
    ngAfterViewInit() {
        let THIS = this;
        THIS.makeJqueryFields();
        var scope = this;
        this.loadStartDate();
        this.loadEndDate();
    }
    loadStartDate() {
        var scope = this;
        $(function () {
            $('input[name="start_date"]').daterangepicker({
                singleDatePicker: true,
                showDropdowns: true,
                minYear: 1980,
                startDate: moment().subtract(90, 'day'),
                autoUpdateInput: false,
                maxYear: parseInt(moment().format('YYYY'), 10)
            }, function (start, end, label) {
                var years = moment().diff(start, 'years');
                scope.addGroupForm.get('start_date').setValue(moment(start).format('YYYY-MM-DD'));
            });
        });
    }
    loadEndDate() {
        var scope = this;
        $(function () {
            $('input[name="end_date"]').daterangepicker({
                singleDatePicker: true,
                showDropdowns: true,
                minYear: 1901,
                startDate: moment(),
                minDate: moment(),
                autoUpdateInput: false,
                maxYear: parseInt(moment().format('YYYY'), 10)
            }, function (start, end, label) {
                var years = moment().diff(start, 'years');
                scope.addGroupForm.get('end_date').setValue(moment(start).format('YYYY-MM-DD'));
            });
        });
    }
    onEditRow(group) {
        let endDate;
        let startDate;
        let is_flight;
        if (group.is_active != 0) {
            this.is_active = "1";
        }
        else {
            this.is_active = "0";
        }
        if (group.preference != null) {
            this.preference = group.preference;
        }
        if (group.organisation_id != null) {
            let txt = group.organisation_id;
            txt = txt.split(',');
            txt.forEach(element => {
                this.orgArr.push(element);
            });
        }
        if ((group.is_free_sale == 0) && (group.is_stop_sale == 1)) {
            this.saleType = "stopsale";
            if (group.end_date != null || group.end_date != "") {
                endDate = group.end_date;
                endDate = endDate.split('T');
                endDate = endDate[0];
            }
            if (group.start_date != null || group.start_date != "") {
                startDate = group.start_date;
                startDate = startDate.split('T');
                startDate = startDate[0];
            }
        }
        if ((group.is_free_sale == 1) && (group.is_stop_sale == 0)) {
            this.saleType = "freesale";
            endDate = "";
            startDate = "";
        }
        this.addGroupForm.patchValue({
            name: group.name,
            organisation_id: this.orgArr,
            is_active: this.is_active,
            preference: this.preference,
            start_date: startDate,
            end_date: endDate,
            is_stop_sale: this.stopSale,
            is_free_sale: this.freeSale,
            is_flight: group.is_flight == 0 ? false : true,
            is_hotel: group.is_hotel == 0 ? false : true,
            is_car: group.is_car == 0 ? false : true,
            is_transfers: group.is_transfers == 0 ? false : true,
            is_activities: group.is_activities == 0 ? false : true,
            is_insurance: group.is_insurance == 0 ? false : true,
            is_cruises: group.is_cruises == 0 ? false : true,
            sale_type: this.saleType,
            sale_id: group.sale_id,
            mode: "Update"
        });
        // this.makeJqueryFields();
    }
    onUpdateGroup(data) {
        var formParams = Object.assign({}, this.addGroupForm.value);
        if (formParams.sale_type == 'freesale') {
            formParams.is_stop_sale = false;
            formParams.is_free_sale = true;
        }
        else {
            formParams.is_stop_sale = true;
            formParams.is_free_sale = false;
        }
        this.MarkupConfigurationService.editGroup(formParams)
            .subscribe((res) => {
            if (res.status) {
                this.sendDataToParent.emit(data);
                this.toastr.success(`Group updateddddddddddd...!!!`, `Success `, {
                    timeOut: 10000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
            else {
                this.toastr.error(`Something bad happened at our end.`, `Error `, {
                    timeOut: 10000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        }, err => {
            console.log('erer ', err);
            this.toastr.success(`Something bad happened at our end. ${err}`, `Error `, {
                timeOut: 10000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
            });
        });
    }
    resetForm() {
        this.addGroupForm.reset();
    }
    makeJqueryFields() {
        $(document).ready(function () {
            this._globals = localStorage.getItem('_globals');
            let token = JSON.parse(this._globals).token;
            $('.dropdownThree').dropdown('refresh');
            $('.dropdownThree').dropdown({ placeholder: 'Select POS' });
            $('.ui.dropdownThree').dropdown({
                type: 'category',
                responseAsync: true,
                apiSettings: {
                    url: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].serverURL + '/api/organization/fetch-pos/{query}',
                    beforeXHR: function (xhr) {
                        xhr.setRequestHeader('Authorization', token);
                        return xhr;
                    },
                    onResponse: function (response) {
                        const result = { success: true, results: [] };
                        $.each(response.result, function (index, item) {
                            result['results'].push({
                                name: item.name,
                                value: item.organisation_id
                            });
                        });
                        return result;
                    },
                },
            });
        });
    }
};
AddGroupComponent.ctorParameters = () => [
    { type: src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_2__["SetupConfigService"] },
    { type: src_app_shared_services_pointsale_service__WEBPACK_IMPORTED_MODULE_3__["POSService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AddGroupComponent.prototype, "sendDataToParent", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('change')
], AddGroupComponent.prototype, "editRow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('flag')
], AddGroupComponent.prototype, "flagDet", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('flgEdit')
], AddGroupComponent.prototype, "flgEditDet", void 0);
AddGroupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-group',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addgroup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/markup-configuration/sale/addgroup/addgroup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addgroup.component.scss */ "./src/app/layout/setup-configuration/markup-configuration/sale/addgroup/addgroup.component.scss")).default]
    })
], AddGroupComponent);



/***/ }),

/***/ "./src/app/layout/setup-configuration/markup-configuration/sale/sale.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/markup-configuration/sale/sale.component.scss ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".outer-segment {\n  margin: 0px 20px 0px 15px;\n}\n\n.markup_title {\n  margin: 0;\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #E0E0E0;\n}\n\n.filterMarkUp_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.goto_list {\n  background-color: transparent;\n  box-shadow: none;\n  border: none;\n  color: #181B20;\n  font-size: 14px;\n}\n\n.filterMarkUp_list {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.addNewGroup-text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.addMarkUp {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 11px;\n  text-align: center;\n  position: relative;\n  left: 35px;\n  bottom: 5px;\n}\n\n.corporate_input__placeholder-icon {\n  position: relative;\n  width: 18px;\n  bottom: 28px;\n  left: 9px;\n}\n\n.date-field {\n  text-indent: 17px;\n}\n\n.save-apply_text,\n.addNewGroup-text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.addMarkUp {\n  display: inline-block;\n  color: #333 !important;\n  padding: 3px 10px;\n  bottom: 0px;\n  position: inherit !important;\n  cursor: pointer;\n  font-weight: bold !important;\n  border-radius: 3px;\n  box-shadow: 0px 0px 6px 0px grey;\n  border: 1px solid grey;\n}\n\nspan.action {\n  display: inline-block;\n  margin: 0px 5px;\n  font-weight: bold;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.pages a {\n  border: 1px solid grey;\n}\n\n.date_picker_custom .dp_icon {\n  margin-top: -40px !important;\n  right: 28px;\n  display: grid;\n}\n\n.alert.alert-danger {\n  color: #ff0000ad;\n  margin-left: 20px;\n  margin-top: 5px;\n}\n\n.icon {\n  opacity: 1;\n  z-index: 100;\n}\n\n.icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.icon .bookings_input__placeholder-icon.cal {\n  width: 16px;\n  margin-top: 10px;\n}\n\n.icon .bookings_input__placeholder-icon.call {\n  width: 18px;\n  margin-top: 10px;\n}\n\n.text_field {\n  padding-left: 30px;\n}\n\n.goto-link {\n  position: relative;\n  top: 8px;\n}\n\n.ui.form .search-section {\n  margin: 24px;\n}\n\n.ui.form .search-section div {\n  padding: 0px;\n}\n\n.ui.form .search-section .add-btn {\n  position: relative;\n}\n\n.ui.form .search-section.list-search-block {\n  margin: 0;\n  width: 1100px !important;\n  padding-left: 0px;\n}\n\n.ui.form .search-section.list-search-block .bookings_btn-panel {\n  padding-left: 0px;\n  padding-top: 20px;\n}\n\n.ui.form .search-section .ui.reset.button {\n  margin-right: 0px;\n}\n\n.search-btn-block {\n  text-align: right;\n}\n\n.search-btn-block input {\n  width: 30%;\n  margin-right: 12px;\n}\n\n.search-btn-block div {\n  display: inline-block;\n}\n\n.search-btn-block .field.input_field {\n  position: relative;\n  top: -8px;\n}\n\n.ui.primary.addNewGroup_btn {\n  top: 8px;\n  margin-right: 12px;\n}\n\n.list-code-block {\n  margin: 24px;\n  margin-bottom: 200px;\n}\n\n.head-search-block {\n  padding: 0px 24px;\n}\n\n@media (max-width: 1440px) {\n  .list-code-block {\n    width: auto;\n    margin: 24px;\n  }\n\n  .search-section .wide.field {\n    padding: 0px;\n  }\n\n  .list-group.result-block.list-code-block {\n    margin-bottom: 200px !important;\n  }\n}\n\n@media (max-width: 1280px) {\n  .head-search-block {\n    padding: 0px 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vbWFya3VwLWNvbmZpZ3VyYXRpb24vc2FsZS9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHNldHVwLWNvbmZpZ3VyYXRpb25cXG1hcmt1cC1jb25maWd1cmF0aW9uXFxzYWxlXFxzYWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvc2V0dXAtY29uZmlndXJhdGlvbi9tYXJrdXAtY29uZmlndXJhdGlvbi9zYWxlL3NhbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0NBQUE7RUFDQSx3Q0FBQTtBQ0NKOztBREVBO0VBQ0ksK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSw0Q0FBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUZBQUE7QUNDSjs7QURFQTtFQUNJLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTs7RUFFSSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksNEJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0VSOztBRERRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDR1o7O0FEQVE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNFWjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7QUNBSjs7QURJSTtFQVFJLFlBQUE7QUNSUjs7QURDUTtFQUNJLFlBQUE7QUNDWjs7QURDUTtFQUNJLGtCQUFBO0FDQ1o7O0FER1E7RUFDSSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQkFBQTtBQ0RaOztBREVZO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0FoQjs7QURXUTtFQUNJLGlCQUFBO0FDVFo7O0FEY0E7RUFDSSxpQkFBQTtBQ1hKOztBRFlJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FDVlI7O0FEWUk7RUFDSSxxQkFBQTtBQ1ZSOztBRFlJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0FDVlI7O0FEY0E7RUFDSSxRQUFBO0VBQ0Esa0JBQUE7QUNYSjs7QURjQTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtBQ1hKOztBRGNBO0VBQ0ksaUJBQUE7QUNYSjs7QURxQkE7RUFDSTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VDbEJOOztFRHFCTTtJQUNJLFlBQUE7RUNsQlY7O0VEcUJFO0lBQ0ksK0JBQUE7RUNsQk47QUFDRjs7QURxQkE7RUFDSTtJQUNJLGlCQUFBO0VDbkJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc2V0dXAtY29uZmlndXJhdGlvbi9tYXJrdXAtY29uZmlndXJhdGlvbi9zYWxlL3NhbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXItc2VnbWVudCB7XHJcbiAgICBtYXJnaW46IDBweCAyMHB4IDBweCAxNXB4O1xyXG59XHJcblxyXG4ubWFya3VwX3RpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG59ICAgXHJcblxyXG4udWkudG9wLmF0dGFjaGVkLm1lbnU+Lml0ZW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI4NTcxNDI5cmVtIDAgMCAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLmJvdHRvbS5hdHRhY2hlZC5hY3RpdmUudGFiLnNlZ21lbnQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbn1cclxuXHJcbi50YWIuc2VnbWVudCB7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjRTBFMEUwO1xyXG59XHJcblxyXG4uZmlsdGVyTWFya1VwX2J0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uZ290b19saXN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjMTgxQjIwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZmlsdGVyTWFya1VwX2xpc3Qge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hZGROZXdHcm91cC10ZXh0IHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYWRkTWFya1VwIHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMzVweDtcclxuICAgIGJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgYm90dG9tOiAyOHB4O1xyXG4gICAgbGVmdDogOXB4O1xyXG59XHJcblxyXG4uZGF0ZS1maWVsZCB7XHJcbiAgICB0ZXh0LWluZGVudDogMTdweDtcclxufVxyXG5cclxuLnNhdmUtYXBwbHlfdGV4dCxcclxuLmFkZE5ld0dyb3VwLXRleHQge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hZGRNYXJrVXAge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNnB4IDBweCBncmV5O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxufVxyXG5cclxuc3Bhbi5hY3Rpb24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAwcHggNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBhZ2VzIGEge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcclxufVxyXG5cclxuLmRhdGVfcGlja2VyX2N1c3RvbSAuZHBfaWNvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNDBweCAhaW1wb3J0YW50O1xyXG4gICAgcmlnaHQ6IDI4cHg7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG59XHJcblxyXG4uYWxlcnQuYWxlcnQtZGFuZ2VyIHtcclxuICAgIGNvbG9yOiAjZmYwMDAwYWQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgICYuY2FsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAmLmNhbGwge1xyXG4gICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50ZXh0X2ZpZWxkIHtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweFxyXG59XHJcblxyXG4uZ290by1saW5rIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogOHB4O1xyXG59XHJcblxyXG4udWkuZm9ybSB7XHJcbiAgICAuc2VhcmNoLXNlY3Rpb24ge1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFkZC1idG4ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIC8vIHRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWFyZ2luOiAyNHB4O1xyXG4gICAgICAgICYubGlzdC1zZWFyY2gtYmxvY2sge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMTAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgIC5ib29raW5nc19idG4tcGFuZWwge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyAuc2VhcmNoLWJ0bi1ibG9jayB7XHJcbiAgICAgICAgLy8gICAgIC50ZW4ud2lkZS5maWVsZCB7XHJcbiAgICAgICAgLy8gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgLy8gICAgICAgICByaWdodDogMTMlO1xyXG4gICAgICAgIC8vICAgICAgICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8vICAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLnVpLnJlc2V0LmJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNlYXJjaC1idG4tYmxvY2sge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICB9XHJcbiAgICBkaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIC5maWVsZC5pbnB1dF9maWVsZCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogLThweDtcclxuICAgIH1cclxufVxyXG5cclxuLnVpLnByaW1hcnkuYWRkTmV3R3JvdXBfYnRuIHtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4ubGlzdC1jb2RlLWJsb2NrIHtcclxuICAgIG1hcmdpbjogMjRweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xyXG59XHJcblxyXG4uaGVhZC1zZWFyY2gtYmxvY2sge1xyXG4gICAgcGFkZGluZzogMHB4IDI0cHg7XHJcbn1cclxuXHJcbi8vIEBtZWRpYSAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuLy8gICAgIC51aS5mb3JtIC5zZWFyY2gtYnRuLWJsb2NrIHtcclxuLy8gICAgICAgICB3aWR0aDogNjQlICFpbXBvcnRhbnQ7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICAubGlzdC1jb2RlLWJsb2NrIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBtYXJnaW46IDI0cHg7XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLXNlY3Rpb24ge1xyXG4gICAgICAgIC53aWRlLmZpZWxkIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5saXN0LWdyb3VwLnJlc3VsdC1ibG9jay5saXN0LWNvZGUtYmxvY2sge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIC5oZWFkLXNlYXJjaC1ibG9jayB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICB9XHJcbn0iLCIub3V0ZXItc2VnbWVudCB7XG4gIG1hcmdpbjogMHB4IDIwcHggMHB4IDE1cHg7XG59XG5cbi5tYXJrdXBfdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4udWkudG9wLmF0dGFjaGVkLm1lbnUgPiAuaXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjg1NzE0MjlyZW0gMCAwIDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi51aS5ib3R0b20uYXR0YWNoZWQuYWN0aXZlLnRhYi5zZWdtZW50IHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxN3B4O1xufVxuXG4udGFiLnNlZ21lbnQge1xuICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuaHIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjRTBFMEUwO1xufVxuXG4uZmlsdGVyTWFya1VwX2J0biB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uZ290b19saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMxODFCMjA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmZpbHRlck1hcmtVcF9saXN0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hZGROZXdHcm91cC10ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hZGRNYXJrVXAge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDExcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAzNXB4O1xuICBib3R0b206IDVweDtcbn1cblxuLmNvcnBvcmF0ZV9pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE4cHg7XG4gIGJvdHRvbTogMjhweDtcbiAgbGVmdDogOXB4O1xufVxuXG4uZGF0ZS1maWVsZCB7XG4gIHRleHQtaW5kZW50OiAxN3B4O1xufVxuXG4uc2F2ZS1hcHBseV90ZXh0LFxuLmFkZE5ld0dyb3VwLXRleHQge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFkZE1hcmtVcCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6ICMzMzMgIWltcG9ydGFudDtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIGJvdHRvbTogMHB4O1xuICBwb3NpdGlvbjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggMHB4IGdyZXk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG59XG5cbnNwYW4uYWN0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDBweCA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucGFnZXMgYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG59XG5cbi5kYXRlX3BpY2tlcl9jdXN0b20gLmRwX2ljb24ge1xuICBtYXJnaW4tdG9wOiAtNDBweCAhaW1wb3J0YW50O1xuICByaWdodDogMjhweDtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuLmFsZXJ0LmFsZXJ0LWRhbmdlciB7XG4gIGNvbG9yOiAjZmYwMDAwYWQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5pY29uIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTAwO1xufVxuLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcbiAgd2lkdGg6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbi5jYWwge1xuICB3aWR0aDogMTZweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbi5jYWxsIHtcbiAgd2lkdGg6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi50ZXh0X2ZpZWxkIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4uZ290by1saW5rIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDhweDtcbn1cblxuLnVpLmZvcm0gLnNlYXJjaC1zZWN0aW9uIHtcbiAgbWFyZ2luOiAyNHB4O1xufVxuLnVpLmZvcm0gLnNlYXJjaC1zZWN0aW9uIGRpdiB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi51aS5mb3JtIC5zZWFyY2gtc2VjdGlvbiAuYWRkLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi51aS5mb3JtIC5zZWFyY2gtc2VjdGlvbi5saXN0LXNlYXJjaC1ibG9jayB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDExMDBweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cbi51aS5mb3JtIC5zZWFyY2gtc2VjdGlvbi5saXN0LXNlYXJjaC1ibG9jayAuYm9va2luZ3NfYnRuLXBhbmVsIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLnVpLmZvcm0gLnNlYXJjaC1zZWN0aW9uIC51aS5yZXNldC5idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLnNlYXJjaC1idG4tYmxvY2sge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5zZWFyY2gtYnRuLWJsb2NrIGlucHV0IHtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuLnNlYXJjaC1idG4tYmxvY2sgZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnNlYXJjaC1idG4tYmxvY2sgLmZpZWxkLmlucHV0X2ZpZWxkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC04cHg7XG59XG5cbi51aS5wcmltYXJ5LmFkZE5ld0dyb3VwX2J0biB7XG4gIHRvcDogOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5saXN0LWNvZGUtYmxvY2sge1xuICBtYXJnaW46IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwMHB4O1xufVxuXG4uaGVhZC1zZWFyY2gtYmxvY2sge1xuICBwYWRkaW5nOiAwcHggMjRweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAubGlzdC1jb2RlLWJsb2NrIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW46IDI0cHg7XG4gIH1cblxuICAuc2VhcmNoLXNlY3Rpb24gLndpZGUuZmllbGQge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuXG4gIC5saXN0LWdyb3VwLnJlc3VsdC1ibG9jay5saXN0LWNvZGUtYmxvY2sge1xuICAgIG1hcmdpbi1ib3R0b206IDIwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgLmhlYWQtc2VhcmNoLWJsb2NrIHtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/layout/setup-configuration/markup-configuration/sale/sale.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/markup-configuration/sale/sale.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SaleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleComponent", function() { return SaleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/setup-config/setup-config.service */ "./src/app/shared/services/setup-config/setup-config.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_shared_services_pointsale_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/pointsale.service */ "./src/app/shared/services/pointsale.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");






let SaleComponent = class SaleComponent {
    constructor(MarkupConfigurationService, posService, toastr) {
        this.MarkupConfigurationService = MarkupConfigurationService;
        this.posService = posService;
        this.toastr = toastr;
        this.errMsg = '';
        this.showListForm = true;
        this.showAddGroupForm = false;
        this.allPos = [];
        this.NewGroupSeasonality = [];
        this.FilteredGroups = [];
        this.FilteredGroupsArr = [];
        this.searchObject = {
            groupname: ''
        };
        this.toggleObj = {};
        this.searchObject1 = {};
        this.groupRow = [];
        this.offset = 0;
        this.totalCount = 0;
        this.filterParams = {
            name: null,
            page: this.offset,
        };
        this.filterPagination = false;
        this.onClickAddNewGroup = (val) => {
            this.flag = val;
            this.flgEdit = false;
            this.showListForm = false;
            this.showAddGroupForm = true;
            this.makeJqueryFields();
        };
        this.onClickListGroup = () => {
            this.showListForm = true;
            this.showAddGroupForm = false;
            this.flag = false;
            this.flgEdit = false;
        };
    }
    ngOnInit() {
        this.fetchAllGroups(this.filterParams);
        // this.fetchAllPOS({});
    }
    searchChange() {
        this.filterPagination = true;
        var search = this.searchObject;
        this.filterParams.name = search.groupname;
        this.MarkupConfigurationService.searchGroupByName(this.filterParams)
            .subscribe((res) => {
            if (res.status) {
                var myArray = res.result.data.filter(function (obj) {
                    return obj.status != 1;
                });
                this.FilteredGroups = myArray;
                this.totalCount = res.result.total;
                this.offset = res.result.page;
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
    editGroup(group) {
        this.makeJqueryFields();
        this.groupRow = group;
        this.flgEdit = false;
        this.showListForm = false;
        this.showAddGroupForm = true;
    }
    deleteGroup(group) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                this.MarkupConfigurationService.deleteGroup(group.sale_id).subscribe((result) => {
                    if (result.type == 'error') {
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
                        this.fetchAllGroups(this.filterParams);
                        ;
                    }
                });
            }
        });
    }
    mapOrganisationIds(organisation_id) {
        var pos = this.allPos;
        var output = [];
        try {
            if (organisation_id) {
                var org_Arr = organisation_id.split(',');
                for (let ii = 0; ii < org_Arr.length; ii++) {
                    const org_obj = org_Arr[ii];
                    if (org_obj && org_obj != '') {
                        var tmpres = pos.filter(obj => obj.organisation_id == org_obj);
                        if (tmpres.length > 0) {
                            output.push(String(tmpres[0].organisation_id));
                        }
                    }
                }
                return output;
            }
            return [];
        }
        catch (error) {
            console.log('er ', error);
            return [];
        }
    }
    fetchAllGroups(filterParams) {
        this.MarkupConfigurationService.GetAllGroups(filterParams).subscribe((res) => {
            if (res.status) {
                var myArray = res.result.data.filter(function (obj) {
                    return obj.status != 1;
                });
                this.FilteredGroups = myArray;
                this.totalCount = res.result.total;
                this.offset = res.result.page;
            }
            else {
                this.toastr.error(`${res.message}`, ``, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-top-right'
                });
            }
        });
    }
    onItemSelect(event) {
        console.log(event);
    }
    onSelectAll(event) {
        console.log(event);
    }
    ngAfterViewInit() {
        let THIS = this;
        THIS.makeJqueryFields();
    }
    makeJqueryFields() {
        $(document).ready(function () {
            $('.ui .dropdown').dropdown();
            $('.dropdown').dropdown({ placeholder: 'Select POS' });
        });
    }
    resetFilter() {
        this.searchObject.groupname = "";
        this.fetchAllGroups(this.filterParams);
        ;
    }
    eventFromChild(data) {
        this.showListForm = true;
        this.showAddGroupForm = false;
        this.fetchAllGroups(this.filterParams);
    }
    statusToggle(data) {
        this.toggleObj.id = data.sale_id;
        this.toggleObj.status = data.is_active;
        this.toggleObj.table = "sale";
        this.MarkupConfigurationService.onStatusToggle(this.toggleObj)
            .subscribe((res) => {
            if (res.status) {
                this.fetchAllGroups(this.filterParams);
                ;
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
    pageCallback(event) {
        let offset = event.offset;
        this.filterParams.page = offset;
        this.filterPagination ? this.searchChange() : this.fetchAllGroups(this.filterParams);
    }
};
SaleComponent.ctorParameters = () => [
    { type: src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_2__["SetupConfigService"] },
    { type: src_app_shared_services_pointsale_service__WEBPACK_IMPORTED_MODULE_4__["POSService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
SaleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sale',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./sale.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/markup-configuration/sale/sale.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./sale.component.scss */ "./src/app/layout/setup-configuration/markup-configuration/sale/sale.component.scss")).default]
    })
], SaleComponent);



/***/ })

}]);
//# sourceMappingURL=markup-configuration-markup-configuration-module-es2016.js.map