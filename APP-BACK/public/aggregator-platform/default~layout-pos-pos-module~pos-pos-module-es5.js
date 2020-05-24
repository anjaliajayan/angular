function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layout-pos-pos-module~pos-pos-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/active-suppliers/active-suppliers.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/active-suppliers/active-suppliers.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutPosActiveSuppliersActiveSuppliersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-pos-edit-button></app-pos-edit-button>\r\n<div class=\"ui segment\">\r\n  <h4 class=\"ui header spacing main-head\">Suppliers</h4>\r\n  <h5 class=\"ui header spacing header_align head\">Flights</h5>\r\n  <form [formGroup]=\"suppiersForm\" autocomplete=\"off\" (ngSubmit)=\"submitActiveSuppliers()\">\r\n    <div class=\"sixteen wide column\">\r\n      <div formArrayName=\"active_suppliers_flights\">\r\n        <div class=\"ui six column grid suppliers fields spacing\" *ngFor=\"let item1 of supplierFlights; let i = index;\"\r\n          style=\"display: inline-flex;\">\r\n          <div class=\"three wide field\" [formGroupName]=\"0\">\r\n            <div class=\"ui checkbox\">\r\n              <input type=\"checkbox\" name=\"{{item1.is_flight}}\" [checked]=\"item1.is_flight\"\r\n                formControlName=\"{{item1.active_name}}\">\r\n              <label>{{item1.active_name}}</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui six column grid suppliers fields spacing\" style=\"display: inline-flex;\">\r\n          <div class=\"three wide field\">\r\n            <div class=\"ui checkbox\">\r\n              <input type=\"checkbox\" name=\"all\"  (change)=\"checkAllFlightsuppliers()\">\r\n              <label>All</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <h5 class=\"ui header spacing head\">Hotel</h5>\r\n    <div class=\"sixteen wide column\">\r\n      <div formArrayName=\"active_suppliers_hotels\">\r\n        <div class=\"ui six column grid suppliers fields spacing\" *ngFor=\"let item of supplierHotel; let i = index;\"\r\n          style=\"display: inline-flex;\">\r\n          <div class=\"three wide field\" [formGroupName]=\"0\">\r\n            <div class=\"ui checkbox\">\r\n              <input type=\"checkbox\" name=\"{{item.is_hotel}}\" [checked]=\"item.is_hotel\"\r\n                formControlName=\"{{item.active_name}}\">\r\n              <label>{{item.active_name}}</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui six column grid suppliers fields spacing\" style=\"display: inline-flex;\">\r\n          <div class=\"three wide field\">\r\n            <div class=\"ui checkbox\">\r\n              <input type=\"checkbox\" name=\"all\" (change)=\"checkAllHotelsuppliers()\">\r\n              <label>All</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <br>\r\n    <h5 class=\"ui header spacing head\">Car</h5>\r\n    <div class=\"sixteen wide column\">\r\n      <div formArrayName=\"active_suppliers_cars\">\r\n        <div class=\"ui six column grid suppliers fields spacing\" *ngFor=\"let item2 of supplierCar; let i = index;\"\r\n          style=\"display: inline-flex;\">\r\n          <div class=\"three wide field\" [formGroupName]=\"0\">\r\n            <div class=\"ui checkbox\">\r\n              <input type=\"checkbox\" name=\"{{item2.is_car}}\" [checked]=\"item2.is_car\"\r\n                formControlName=\"{{item2.active_name}}\">\r\n              <label>{{item2.active_name}}</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui six column grid suppliers fields spacing\" style=\"display: inline-flex;\">\r\n          <div class=\"three wide field\">\r\n            <div class=\"ui checkbox\">\r\n              <input type=\"checkbox\" name=\"all\" (change)=\"checkAllCarsuppliers()\">\r\n              <label>All</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <br>\r\n    <h5 class=\"ui header spacing head\">Insurance</h5>\r\n    <div class=\"sixteen wide column\">\r\n      <div formArrayName=\"active_suppliers_insurance\">\r\n        <div class=\"ui six column grid suppliers fields spacing\" *ngFor=\"let item3 of supplierInsurance; let n = index;\"\r\n          style=\"display: inline-flex;\">\r\n          <div class=\"three wide field\" [formGroupName]=\"0\">\r\n            <div class=\"ui checkbox\">\r\n              <input type=\"checkbox\" name=\"{{item3.is_insurance}}\" [checked]=\"item3.is_insurance\"\r\n                formControlName=\"{{item3.active_name}}\">\r\n              <label>{{item3.active_name}}</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui six column grid suppliers fields spacing\" style=\"display: inline-flex;\">\r\n          <div class=\"three wide field\">\r\n            <div class=\"ui checkbox\">\r\n              <input type=\"checkbox\" name=\"all\" (change)=\"checkAllInsurancesuppliers()\">\r\n              <label>All</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <br>\r\n    <h5 class=\"ui header spacing head\">Activities</h5>\r\n    <div class=\"sixteen wide column\">\r\n      <div formArrayName=\"active_suppliers_activities\">\r\n        <div class=\"ui six column grid suppliers fields spacing\" *ngFor=\"let item4 of supplierActivity; let i = index;\"\r\n          style=\"display: inline-flex;\">\r\n          <div>\r\n            <div class=\"three wide field\" [formGroupName]=\"0\">\r\n              <div class=\"ui checkbox\">\r\n                <input type=\"checkbox\" name=\"{{item4.is_activities}}\" [checked]=\"item4.is_activities\"\r\n                  formControlName=\"{{item4.active_name}}\">\r\n                <label>{{item4.active_name}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui six column grid suppliers fields spacing\" style=\"display: inline-flex;\">\r\n          <div class=\"three wide field\">\r\n            <div class=\"ui checkbox\">\r\n              <input type=\"checkbox\" name=\"all\" (change)=\"checkAllActivitysuppliers()\">\r\n              <label>All</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div class=\"four wide field buttonStyle\">\r\n          <button class=\"ui button primary button_align\" type=\"submit\">Save</button>\r\n          <button class=\"ui button reset button_align\" (click)=\"cancelSupplier()\">Cancel</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/airline-rbd/airline-rbd.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/airline-rbd/airline-rbd.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutPosAirlineRbdAirlineRbdComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-pos-edit-button></app-pos-edit-button>\r\n<div class=\"ui segment\">\r\n  <div class=\"outer-form\">\r\n    <form class=\"ui form pos_basic_form\" [formGroup]=\"airlineRBDForm\" (ngSubmit)=\"saveAirlineRBD()\">\r\n      <!-- Airline RBD part -->\r\n      <!-- <div class=\"ui fitted divider\"></div> -->\r\n      <h4 class=\"ui header spacing\">Airline RBD</h4>\r\n      <div class=\"fields spacing\" formGroupName=\"pos_rbd\">\r\n        <div class=\"four wide field branch\">\r\n          <label> Economy </label>\r\n          <select name=\"rbd\" multiple=\"\" formControlName=\"economy_rbd\" class=\"ui search fluid dropdown multiple_search\">\r\n            <option class=\"item\" *ngFor=\"let rbd of rbdArrayList\" value=\"{{rbd}}\">\r\n              {{rbd}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"four wide field branch\">\r\n          <label> Premium Economy </label>\r\n          <select name=\"rbd\" multiple=\"\" formControlName=\"pre_economy_rbd\"\r\n            class=\"ui search fluid dropdown multiple_search\">\r\n            <option class=\"item\" *ngFor=\"let rbd of rbdArrayList\" value=\"{{rbd}}\">\r\n              {{rbd}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"four wide field branch\">\r\n          <label> Buisness </label>\r\n          <select name=\"rbd\" multiple=\"\" formControlName=\"bussiness_rbd\"\r\n            class=\"ui search fluid dropdown multiple_search\">\r\n            <option class=\"item\" *ngFor=\"let rbd of rbdArrayList\" value=\"{{rbd}}\">\r\n              {{rbd}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"four wide field branch\">\r\n          <label> First </label>\r\n          <select name=\"rbd\" multiple=\"\" formControlName=\"first_rbd\" class=\"ui search fluid dropdown multiple_search\">\r\n            <option class=\"item\" *ngFor=\"let rbd of rbdArrayList\" value=\"{{rbd}}\">\r\n              {{rbd}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"four wide field button1 buttondiv\">\r\n          <button class=\"ui button primary button_align\" type=\"submit\">Save</button>\r\n          <button class=\"ui button reset button_align\" (click)=\"cancelRBDPage()\">Cancel</button>\r\n        </div>\r\n      </div>\r\n    \r\n    </form>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/basic-info/basic-info.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/basic-info/basic-info.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutPosBasicInfoBasicInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"outer-form\">\r\n  <form class=\"ui form pos_basic_form\" autocomplete=\"off\"  [formGroup]=\"posBasicInfoForm\" (ngSubmit)=\"savePosBasicInfo()\">\r\n    <h4 class=\"ui header spacing ui-basic-header\">Basic Information</h4>\r\n    <div class=\"field spacing\">\r\n      <div class=\"ui four column grid fields custom-columns\">\r\n        <div class=\"four wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.corporate_type.errors}\">\r\n          <label>Business Type<span class=\"mandatory\">*</span></label>\r\n          <select class=\"ui fluid dropdown\" formControlName=\"corporate_type\">\r\n            <option value=\"Agent\"> Sub Agent / Branch Office </option>\r\n            <option value=\"B2C\"> B2C </option>\r\n            <option value=\"API\"> API OUT </option>\r\n            <option value=\"Mobile\">Mobile</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"four wide field\" *ngIf=\"posBasicInfoForm.controls.domain_url\"\r\n          [ngClass]=\"{'is-invalid': isSubmitted && gfc.domain_url.errors}\">\r\n          <label>Domain Name</label>\r\n          <input type=\"text\" name=\"domain_url\" formControlName=\"domain_url\" value=\"\" placeholder=\"B2C Domain Name\">\r\n        </div>\r\n        <div class=\"four wide field\" *ngIf=\"posBasicInfoForm.controls.name\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.name.errors}\">\r\n          \r\n          <label>Office Name<span class=\"mandatory\">*</span></label>\r\n          <input type=\"text\" name=\"name\" formControlName=\"name\" value=\"\" placeholder=\"Office Name\">\r\n        </div>\r\n        <div class=\"four wide field\">\r\n          <label>Agent code</label>\r\n          <input type=\"text\" name=\"agent_code\" formControlName=\"agent_code\" value=\"\" placeholder=\"Agent Code\">\r\n          <div *ngIf=\"gfc.agent_code.errors\" class=\"invalid-feedback\">\r\n            <div class=\"validations\" *ngIf=\"gfc.agent_code.errors.pattern\">\r\n             Please enter only numeric values\r\n            </div>\r\n            <!-- <div class=\"validations\" *ngIf=\"gfc.agent_code.errors.minLength\">\r\n              Please enter minimum 8 length character\r\n             </div> -->\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"four wide field\">\r\n          <label>Branch Code</label>\r\n          <input type=\"text\" name=\"branch_code\" formControlName=\"associated_office\" value=\"\" placeholder=\"Branch Code\">\r\n        </div> -->\r\n        <div class=\"four wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.email.errors}\">\r\n          <label>Email<span class=\"mandatory\">*</span></label>\r\n          <input type=\"email\" name=\"email\" formControlName=\"email\" value=\"\" placeholder=\"Email\" class=\"email\">\r\n          <div *ngIf=\"gfc.email.errors\" class=\"invalid-feedback\">\r\n            <div class=\"validations\" *ngIf=\"gfc.email.errors.pattern\">\r\n              Email must be a valid email address\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"four wide field\">\r\n          <label>Contact Number</label>\r\n          <input type=\"number\" name=\"contact\" formControlName=\"contact\" value=\"\" placeholder=\"Contact Number\">\r\n        </div>\r\n        <div class=\"four wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.payment_gateway.errors}\">\r\n          <label>Payment Gateway<span class=\"mandatory\">*</span></label>\r\n          <select class=\"ui fluid dropdown\" formControlName=\"payment_gateway\">\r\n            <option value=\"\"> Payment Gateway </option>\r\n            <option value=\"1\"> Yes </option>\r\n            <option value=\"0\"> No </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"four wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.currency_id.errors}\">\r\n          <label>Operating Currency<span class=\"mandatory\">*</span></label>\r\n          <select class=\"ui fluid search dropdown\" formControlName=\"currency_id\">\r\n            <option value=\"\"> Operating Currency </option>\r\n            <option *ngFor=\"let currency of currencies\" value=\"{{currency.code}}\"> {{currency.name}} </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"four wide field\" *ngIf=\"posBasicInfoForm.controls.credit_limit\"  [ngClass]=\"{'is-invalid': isSubmitted && gfc.credit_limit.errors}\">\r\n          <label class=\"inline-label\">Credit Limit<span class=\"mandatory\">*</span>\r\n            <i class=\"fa fa-exclamation-circle tooltip\">\r\n              <span class=\"tooltiptext\">\r\n                The Maximum amount permitted for the Ofiice to do Transactions\r\n              </span>\r\n            </i></label>\r\n          <span class=\"unlimited\"></span>\r\n          <input type=\"text\" name=\"credit_limit\" formControlName=\"credit_limit\" value=\"\" placeholder=\"Credit Limit\" class=\"credit-limit\"\r\n            required>\r\n            <div *ngIf=\"gfc.credit_limit.errors\" class=\"invalid-feedback\">\r\n              <div class=\"validations\" *ngIf=\"gfc.credit_limit.errors.pattern\">\r\n               Please enter only numeric values\r\n              </div>\r\n            </div>\r\n        </div>\r\n        <!--from shared module countrylist-->\r\n        <!-- <div class=\"four wide field\">\r\n          <app-country-list></app-country-list>\r\n        </div>   -->\r\n        <!--from shared module countrylist-->\r\n        <div class=\"four wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.country_id.errors}\">\r\n          <label>Operating Country<span class=\"mandatory\">*</span></label>\r\n          <select class=\"ui fluid search dropdown\" formControlName=\"country_id\">\r\n            <option value=\"\"> Operating Country</option>\r\n            <option *ngFor=\"let country of countries\" value=\"{{country.country_id}}\">{{country.country}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"four wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.timezone_id.errors}\">\r\n          <label>Operating Time Zone<span class=\"mandatory\">*</span></label>\r\n          <select class=\"ui fluid search dropdown\" formControlName=\"timezone_id\">\r\n            <option value=\"\"> Operating Time Zone</option>\r\n            <option *ngFor=\"let timezone of timezones\" value=\"{{timezone.timezone_id}}\">\r\n              {{ timezone.timezone_value }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"four wide field\">\r\n          <label>Tax Number\r\n            <i class=\"fa fa-exclamation-circle tooltip\">\r\n              <span class=\"tooltiptext\">\r\n                GST / VAT in Invoice\r\n              </span>\r\n            </i></label>\r\n          <input type=\"text\" name=\"business_id\" formControlName=\"business_id\" value=\"\" placeholder=\"Tax Number\">\r\n        </div>\r\n        <div class=\"four wide field\" *ngIf=\"posBasicInfoForm.controls.numberOfUsers\" \r\n        [ngClass]=\"{'is-invalid': isSubmitted && gfc.numberOfUsers.errors}\">\r\n          <label>Number of Users<span class=\"mandatory\">*</span>\r\n            <i class=\"fa fa-exclamation-circle tooltip\">\r\n              <span class=\"tooltiptext\">\r\n                Maximum number of Users allowed for the office\r\n              </span>\r\n            </i></label>\r\n          <input type=\"text\" name=\"numberOfUsers\" formControlName=\"numberOfUsers\" value=\"\" placeholder=\"No of Users\">\r\n          <div *ngIf=\"gfc.numberOfUsers.errors\" class=\"invalid-feedback\">\r\n            <div class=\"validations\" *ngIf=\"gfc.numberOfUsers.errors.pattern\">\r\n             Please enter only numeric values\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"four wide field\">\r\n          <label>IATA Number</label>\r\n          <input type=\"text\" name=\"iata_no\" formControlName=\"iata_no\" value=\"\" placeholder=\"IATA Number\">\r\n        </div>\r\n      </div>\r\n      <div class=\"ui grid spacing margin-bottom-15\">\r\n        <div class=\"eight wide column tax-section gridstyle\">\r\n          <div class=\"ui segment\">\r\n            <h4 class=\"ui header\">Airline TAX in Percentage</h4>\r\n            <div class=\"ui grid\">\r\n              <div class=\"eight wide column gridstyle2\">\r\n                <div class=\"ui segment tax_block\">\r\n                  <p>Domestic : </p>\r\n                  <div class=\"sixteen wide field\">\r\n                    <label>Tax Code</label>\r\n                    <input type=\"text\" formControlName=\"domestictTaxCode\" value=\"\" placeholder=\"Tax Code\">\r\n                  </div>\r\n                  <div class=\"sixteen wide field\">\r\n                    <label>Tax in Percentage</label>\r\n                    <input type=\"text\" formControlName=\"domestictTaxPercentage\" value=\"\"\r\n                      placeholder=\"Tax in Percentage\">\r\n                  </div>\r\n                  <div class=\"sixteen wide field\">\r\n                    <label>Currency</label>\r\n                    <select class=\"ui fluid search dropdown\" formControlName=\"domestictTaxCurrency\">\r\n                      <option value=\"\"> Select Currency</option>\r\n                      <option *ngFor=\"let currency of currencies\" value=\"{{currency.currency_id}}\"> {{ currency.name }}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"sixteen wide field\">\r\n                    <label> Add Airport </label>\r\n                    <select class=\"ui dropdownThree fluid search multiple_search\" id=\"airports\"\r\n                      formControlName=\"domestictTaxAirport\" multiple=\"\" name=\"domestictTaxAirport\" value=\"\">\r\n                      <option value=\"\" disabled selected>Select one category </option>\r\n                      <option *ngFor=\"let airport of airports\" value=\"{{airport.AirportCode}}\">\r\n                        {{ airport.AirportCode }}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"eight wide column gridstyle1\">\r\n                <div class=\"ui segment tax_block\">\r\n                  <p>International : </p>\r\n                  <div class=\"sixteen wide field\">\r\n                    <label>Tax in Percentage</label>\r\n                    <input type=\"text\" formControlName=\"internationalTaxPercentage\" value=\"\"\r\n                      placeholder=\"Tax in Percentage\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"eight wide column tax-section gridstyle3\">\r\n          <div class=\"ui segment\">\r\n            <h4 class=\"ui header\">Non Airline TAX in Percentage</h4>\r\n            <div class=\"ui grid\">\r\n              <div class=\"sixteen wide column\">\r\n                <div class=\"ui segment tax_block\">\r\n                  <p>Non Airline : </p>\r\n                  <div class=\"sixteen wide field\">\r\n                    <label>Tax in Percentage</label>\r\n                    <input type=\"number\" formControlName=\"nonAirlineTax\" value=\"\" placeholder=\"Tax in Percentage\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui grid margin-bottom-15 card-section\">\r\n          <div class=\"eight wide column gridstyle4\">\r\n            <div class=\"ui segment tax-section\">\r\n              <h4 class=\"ui header payment-header \">Card Details</h4>\r\n              <div class=\"ui grid\">\r\n                <div class=\"nine wide field\">\r\n                  <div class=\" ui segment bg-grey\">\r\n                    <p class=\"ui checkbox\">\r\n                      <input type=\"checkbox\" formControlName=\"amexCard\">\r\n                      <label>Credit/Debit Card </label>\r\n                    </p>\r\n                    <div class=\"ui grid\" *ngIf=\"posBasicInfoForm.controls.amexCard && posBasicInfoForm.controls.amexCard.value\">\r\n                      <div class=\"sixteen wide column\">\r\n                        <div class=\"ui \">\r\n                          <!-- <p>Amex Card Details : </p> -->\r\n                          <div *ngIf=\"posBasicInfoForm.controls.amex_card\" formGroupName=\"amex_card\"\r\n                            class=\"cardDetails\">\r\n                            <div class=\"fields one\">\r\n                              <div class=\"sixteen wide field\">\r\n                                <input type=\"text\" formControlName=\"cardHolderName\" placeholder=\"Card Holders Name\">\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"fields two\">\r\n                              <div class=\"seven wide field\">\r\n                                <select class=\"ui fluid dropdown\" formControlName=\"cardHolderType\">\r\n                                  <option value=\"\"> Card Type </option>\r\n                                  <option value=\"Visa\"> Amex Card </option>\r\n                                  <option value=\"Visa\"> Visa </option>\r\n                                  <option value=\"MasterCard\"> Master Card </option>\r\n                                  <option value=\"AmericanExpress\"> American Express </option>\r\n                                </select>\r\n                              </div>\r\n                              <div class=\"nine wide field\">\r\n                                <input type=\"text\" formControlName=\"cardnumber\" value=\"\" placeholder=\"Card Number\">\r\n                              </div>\r\n\r\n                            </div>\r\n                            <div class=\"fields three\">\r\n                              <div class=\"six wide field\">\r\n                                <select class=\"ui fluid dropdown\" formControlName=\"cardExpMonth\">\r\n                                  <option value=\"\"> Exp. Month </option>\r\n                                  <option value=\"01\"> Jan (01) </option>\r\n                                  <option value=\"02\"> Feb (02) </option>\r\n                                  <option value=\"03\"> Mar (03) </option>\r\n                                  <option value=\"04\"> Apr (04) </option>\r\n                                  <option value=\"05\"> May (05) </option>\r\n                                  <option value=\"06\"> Jun (06) </option>\r\n                                  <option value=\"07\"> Jul (07) </option>\r\n                                  <option value=\"08\"> Aug (08) </option>\r\n                                  <option value=\"09\"> Sep (09) </option>\r\n                                  <option value=\"10\"> Oct (10) </option>\r\n                                  <option value=\"11\"> Nov (11) </option>\r\n                                  <option value=\"12\"> Dec (12) </option>\r\n                                </select>\r\n                              </div>\r\n                              <div class=\"six wide field\">\r\n                                <select class=\"ui fluid dropdown\" formControlName=\"cardExpYear\">\r\n                                  <option value=\"\"> Exp. Year </option>\r\n                                  <option value=\"19\"> 2019 </option>\r\n                                  <option value=\"20\"> 2020 </option>\r\n                                  <option value=\"21\"> 2021 </option>\r\n                                  <option value=\"22\"> 2022 </option>\r\n                                  <option value=\"23\"> 2023 </option>\r\n                                  <option value=\"24\"> 2024 </option>\r\n                                  <option value=\"25\"> 2025 </option>\r\n                                  <option value=\"26\"> 2026 </option>\r\n                                  <option value=\"27\"> 2027 </option>\r\n                                  <option value=\"28\"> 2028 </option>\r\n                                  <option value=\"29\"> 2029 </option>\r\n                                </select>\r\n                              </div>\r\n                              <div class=\"four wide field\">\r\n                                <input type=\"text\" formControlName=\"cardcvv\" value=\"\" placeholder=\"CVV\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"seven wide field\">\r\n                  <div class=\" ui segment bg-grey\">\r\n                    <p class=\"ui checkbox\">\r\n                      <input type=\"checkbox\" formControlName=\"queue\">\r\n                      <label>Queue </label>\r\n                    </p>\r\n                    <div class=\"ui grid\" *ngIf=\"posBasicInfoForm.controls.queue_service && posBasicInfoForm.controls.queue_service.value\"\r\n                      class=\"cardDetails\">\r\n                      <div class=\"sixteen wide column\">\r\n                        <div class=\"ui \">\r\n                          <!-- <p>Amex Card Details : </p> -->\r\n                          <div *ngIf=\"posBasicInfoForm.controls.queue_service\" formGroupName=\"queue_service\">\r\n                            <div class=\"fields one\">\r\n                              <div class=\"sixteen wide field\">\r\n                                <input type=\"text\" formControlName=\"queue1\" placeholder=\"\">\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"fields one\">\r\n                              <div class=\"sixteen wide field\">\r\n                                <input type=\"text\" formControlName=\"queue2\" placeholder=\"\">\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"fields one\">\r\n                              <div class=\"sixteen wide field\">\r\n                                <input type=\"text\" formControlName=\"queue3\" placeholder=\"\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"eight wide column\">\r\n            <div [hidden]=\"posBasicInfoForm.controls.corporate_type.value != 'Agent'\" class=\"ui segment tax-section\"\r\n              formGroupName=\"pos_negofares\">\r\n              <h4 class=\"ui header payment-header\">Fare Preference for Nego Fares</h4>\r\n              <div class=\"ui grid cardDetails\">\r\n                <div class=\"eight wide field fare fare1\">\r\n                \r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"all\" value=\"all\"  [checked]=\"isChecked\"  (change)=\"checkAllnego()\">\r\n                    <label>All</label>\r\n                  </div>\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"publishedAndPrivate\"\r\n                      value=\"759 758 70J ||Published and Private Fares\">\r\n                    <label>Published and Private Fares</label>\r\n                  </div>\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"publishedOnly\" value=\"759 70J||publishedOnly\">\r\n                    <label>Published Only</label>\r\n                  </div>\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"tourOperatorSemiDeffered\"\r\n                      value=\"759 758 ||Tour Operator Semi Deferred\">\r\n                    <label>Tour Operator Semi Deferred</label>   \r\n                  </div>\r\n                </div>\r\n                <div class=\"eight wide field fare fare1\">\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"tourOperatorDeffered\"\r\n                      value=\"759 758 ||Tour Operator Deferred\">\r\n                    <label>Tour Operator Deferred</label>\r\n                  </div>  \r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"bulkContract\" value=\"759 758||Contract Bulk\">\r\n                    <label>Contract Bulk</label>\r\n                  </div>\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"privateOnly\" value=\"759 758||privateOnly\">\r\n                    <label>Private Only</label>\r\n                  </div>\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"marine\" value=\"759 758||Marine\">\r\n                    <label>Marine</label>\r\n                  </div>\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"humanitarian\" value=\"759 758||Humanitarian\">\r\n                    <label>Humanitarian</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"pos_btn-panel spacing bookings_btn-panel\">\r\n        <button class=\"ui button primary button align\" type=\"submit\">Save</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/branding-info/branding-info.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/branding-info/branding-info.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutPosBrandingInfoBrandingInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-pos-edit-button></app-pos-edit-button>\r\n<div class=\"outer-form branding-info-form\">\r\n    <form class=\"ui form pos_basic_form\" [formGroup]=\"brandingInfoForm\" (ngSubmit)=\"storeBrandingInfo()\">\r\n      <br> \r\n      <!-- Branding information part, IMAGE uploads -->\r\n      <h4 class=\"ui header spacing\">Branding Informations</h4>\r\n      <span class=\"dim-footer span1\">(Only .jpeg , .jpg files allowed and maximum size: 5 MB)</span>\r\n      <div class=\"field spacing\">\r\n        <div class=\"three fields\">\r\n          <div class=\"four wide field brand\">\r\n            <div class=\"ui\">\r\n              <label class=\"ui transparent margin-right-20\">Office Logo</label>\r\n              <input type=\"file\" #office_logo class=\"inputfile\" id=\"officeLogo\"\r\n                (change)=\"uploadImage(office_logo.files, 'officeLogo')\" />\r\n              <label for=\"officeLogo\" class=\"ui primary button brand_buttons\">\r\n                <i class=\"ui upload icon\"></i>\r\n                Upload image\r\n              </label>\r\n              <img *ngIf=\"brandingInfoForm.controls.image_website.value\" class=\"branding-pic\"\r\n                [src]=\"brandingInfoForm.controls.image_website.value\" id=\"logoImg\">\r\n            </div>\r\n          </div>\r\n          <div class=\"four wide field brand\">\r\n            <div class=\"ui\">\r\n              <label class=\"ui transparent margin-right-20\">Branding Invoice</label>\r\n              <input type=\"file\" #branding_invoice class=\"inputfile\" id=\"brandingInvoice\"\r\n                (change)=\"uploadImage(branding_invoice.files, 'brandingInvoice')\" />\r\n              <label for=\"brandingInvoice\" class=\"ui primary button brand_buttons\">\r\n                <i class=\"ui upload icon\"></i>\r\n                Upload image\r\n              </label>\r\n              <img *ngIf=\"brandingInfoForm.controls.image_invoice.value\" class=\"branding-pic\"\r\n                [src]=\"brandingInfoForm.controls.image_invoice.value\" id=\"brandingImg\">\r\n            </div>\r\n          </div>\r\n          <div class=\"four wide field brand\">\r\n            <div class=\"ui\">\r\n              <label class=\"ui transparent margin-right-20\">Branding Signature</label>\r\n              <input type=\"file\" #brandingSignature class=\"inputfile\" id=\"brandingSignature\"\r\n                (change)=\"uploadImage(brandingSignature.files, 'brandingSignature')\" />\r\n              <label for=\"brandingSignature\" class=\"ui primary button brand_buttons\">\r\n                <i class=\"ui upload icon\"></i>\r\n                Upload image\r\n              </label>\r\n              <img *ngIf=\"brandingInfoForm.controls.image_email.value\" class=\"branding-pic\"\r\n                [src]=\"brandingInfoForm.controls.image_email.value\" id=\"brandingSignatureImg\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Office documents part , PDF uploads -->\r\n      <div\r\n        [hidden]=\"corporate_type == 'B2C' || corporate_type == 'Mobile'\"\r\n        class=\"ui fitted divider\"></div>\r\n      <h4 [hidden]=\"corporate_type == 'B2C' || corporate_type == 'Mobile'\"\r\n        class=\"ui header spacing\">Office Documents\r\n        <i class=\"fa fa-exclamation-circle tooltip\">\r\n          <span class=\"tooltiptext\">\r\n            Contracts, Licence\r\n          </span>\r\n        </i></h4>\r\n      <span\r\n        [hidden]=\"corporate_type== 'B2C' || corporate_type == 'Mobile'\" [ngClass]=\"{'hide': corporate_type== 'B2C' || corporate_type == 'Mobile'}\"\r\n        class=\"dim-footer span1\"> (Only .pdf files allowed and maximum size: 5 MB)</span>\r\n      <div\r\n        [hidden]=\"corporate_type == 'B2C' || corporate_type == 'Mobile'\"\r\n        class=\"field spacing\">\r\n        <div class=\"three fields\">\r\n          <div class=\"four wide field brand\">\r\n            <div class=\"ui\">\r\n              <label class=\"ui transparent margin-right-20\">Agent Upload 1</label>\r\n              <input type=\"file\" #pdf_file1 class=\"inputfile\" id=\"agentupload1\"\r\n                (change)=\"uploadPDF(pdf_file1.files, 'image_file1')\" />\r\n              <label for=\"agentupload1\" class=\"ui primary button brand_buttons\">\r\n                <i class=\"ui upload icon\"></i>\r\n                Upload File\r\n              </label>\r\n              <a class=\"uploaded-document\" *ngIf=\"brandingInfoForm.controls.image_file1.value != ''\"\r\n                href=\"{{ brandingInfoForm.controls.image_file1.value }}\" target=\"_blank\"></a>\r\n            </div>\r\n          </div>\r\n          <div class=\"four wide field brand\">\r\n            <div class=\"ui\">\r\n              <label class=\"ui transparent margin-right-20\">Agent Upload 2</label>\r\n              <input type=\"file\" #pdf_file2 class=\"inputfile\" id=\"agentupload2\"\r\n                (change)=\"uploadPDF(pdf_file2.files, 'image_file2')\" />\r\n              <label for=\"agentupload2\" class=\"ui primary button  brand_buttons\">\r\n                <i class=\"ui upload icon\"></i>\r\n                Upload File\r\n              </label>\r\n              <a class=\"uploaded-document\" *ngIf=\"brandingInfoForm.controls.image_file2.value != ''\"\r\n                href=\"{{ brandingInfoForm.controls.image_file2.value }}\" target=\"_blank\"></a>\r\n            </div>\r\n          </div>\r\n          <div class=\"four wide field brand\">\r\n            <div class=\"ui\">\r\n              <label class=\"ui transparent margin-right-20\">Agent Upload 3</label>\r\n              <input type=\"file\" #pdf_file3 class=\"inputfile\" id=\"agentupload3\"\r\n                (change)=\"uploadPDF(pdf_file3.files, 'image_file3')\" />\r\n              <label for=\"agentupload3\" class=\"ui primary button brand_buttons\">\r\n                <i class=\"ui upload icon\"></i>\r\n                Upload File\r\n              </label>\r\n              <a class=\"uploaded-document\" *ngIf=\"brandingInfoForm.controls.image_file3.value != ''\"\r\n                href=\"{{ brandingInfoForm.controls.image_file3.value }}\" target=\"_blank\"></a>\r\n            </div>\r\n          </div>\r\n          <div class=\"four wide field brand\">\r\n            <div class=\"ui\">\r\n              <label class=\"ui transparent margin-right-20\">Agent Upload 4</label>\r\n              <input type=\"file\" #pdf_file4 class=\"inputfile\" id=\"agentupload4\"\r\n                (change)=\"uploadPDF(pdf_file4.files, 'image_file4')\" />\r\n              <label for=\"agentupload4\" class=\"ui primary button brand_buttons\">\r\n                <i class=\"ui upload icon\"></i>\r\n                Upload File\r\n              </label>\r\n              <a class=\"uploaded-document\" *ngIf=\"brandingInfoForm.controls.image_file4.value != ''\"\r\n                href=\"{{ brandingInfoForm.controls.image_file4.value }}\" target=\"_blank\"></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui fitted divider\"></div>\r\n      <!-- Text area for company notes part -->\r\n      <h4 class=\"ui header spacing note-head\">Company Notes\r\n        <i class=\"fa fa-exclamation-circle tooltip\">\r\n          <span class=\"tooltiptext\">\r\n            Additional info about the Office\r\n          </span>\r\n        </i></h4>\r\n      <div class=\"field spacing\">\r\n        <div class=\"one fields\">\r\n          <div class=\"nine wide field notes-section\"\r\n            [ngClass]=\"{'error': (isSubmitted && brandingInfoForm.controls.terms_conditions.status == 'INVALID')}\">\r\n            <textarea rows=\"2\" formControlName=\"terms_conditions\"></textarea>\r\n          </div>\r\n        </div>\r\n        <div class=\"bookings_btn-panel buttonstyle button1\">\r\n          <button mat-button class=\"ui button primary button_align\" type=\"submit\">Save</button>\r\n          <button mat-button class=\"ui button reset button_align\" (click)=\"cancelBranding()\">Cancel</button>\r\n        </div>\r\n      </div>\r\n      <!-- Form buttons Update, Cancel etc part -->\r\n   \r\n    </form>\r\n  </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/monthly-target/monthly-target.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/monthly-target/monthly-target.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutPosMonthlyTargetMonthlyTargetComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-pos-edit-button></app-pos-edit-button>\r\n<div class=\"ui segment\">\r\n<div class=\"outer-form\">\r\n  <form class=\"ui form pos_basic_form\" autocomplete=\"off\" [formGroup]=\"monthlyTargetForm\" (ngSubmit)=\"storeMonthlyTarget()\">\r\n    <br>\r\n    <!-- Monthly target part -->\r\n    <h4 class=\"ui header spacing\">Monthly Target </h4>\r\n    <div class=\"field spacing\" formArrayName=\"monthlyTarget\"\r\n      *ngFor=\"let item of monthlyTargetForm.get('monthlyTarget')['controls']; let i = index;\">\r\n      <div [formGroupName]=\"i\">\r\n        <div class=\"ui twelve column grid fields custom-columns\">\r\n          <div class=\"two wide field\">\r\n            <label>Year</label>\r\n            <select class=\"ui dropdownyear fluid\" formControlName=\"year\" name='year' (change)=\"selectYear($event.target.value)\">\r\n            \r\n              <option *ngFor=\"let year of yearsList;\" [value]=\"year\" >{{ year }}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"two wide field\">\r\n            <label>Month</label>\r\n            <select class=\"ui dropdownMonth fluid\" formControlName=\"month\" name=\"month\" >\r\n              <option *ngFor=\"let month of months;\" [value]=\"month.id\">{{ month.name }}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"two wide field\">\r\n            <label>Flights</label>\r\n            <input type=\"number\" formControlName=\"flight_stats\" placeholder=\"Flights Target\">\r\n          </div>\r\n          <div class=\"two wide field\">\r\n            <label>Hotels</label>\r\n            <input type=\"number\" formControlName=\"hotel_stats\" placeholder=\"Hotel Target\">\r\n          </div>\r\n          <div class=\"two wide field\">\r\n            <label>Car Hire</label>\r\n            <input type=\"number\" formControlName=\"car_stats\" placeholder=\"Car Target\">\r\n          </div>\r\n          <div class=\"two wide field\">\r\n            <label>Insurance</label>\r\n            <input type=\"number\" formControlName=\"insurance_stats\" placeholder=\"Insurance Target\">\r\n          </div>\r\n          <div class=\"four wide field  fourwide_button \">\r\n            <button class=\"ui primary reset button add_btn\" *ngIf=\"i!=0\" tabindex=\"0\"\r\n              (click)=\"removeItem(i)\">Delete</button>\r\n            <button class=\"ui primary button add_btn\" (click)=\"addItem()\"\r\n              *ngIf=\"i==(monthlyTargetForm.get('monthlyTarget')['controls'].length-1)\">Add</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Form buttons Update, Cancel etc part -->\r\n    <div class=\"pos_btn-panel spacing\">\r\n      <button mat-button class=\"ui right floated button reset\" (click)=\"cancelMonthlyTarget()\">Cancel</button>\r\n      <button mat-button class=\"ui right floated button primary\" type=\"submit\">Save</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/pos-basic-edit/pos-basic-edit.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/pos-basic-edit/pos-basic-edit.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutPosPosBasicEditPosBasicEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-pos-edit-button></app-pos-edit-button>\r\n<div class=\"outer-form\">\r\n  <form class=\"ui form pos_basic_form\" autocomplete=\"off\" [formGroup]=\"posBasicInfoForm\" [ngClass]=\"{'edit_form': posBasicInfoForm.controls.corporate_type.value != 'Agent'}\">\r\n    <h4 class=\"ui header spacing ui-basic-header\">Basic Information</h4>\r\n    <div class=\"field spacing\">\r\n      <div class=\"ui four column grid fields custom-columns\">\r\n        <div class=\"four wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.corporate_type.errors}\">\r\n          <label>Business Type<span class=\"mandatory\">*</span></label>\r\n          <select class=\"ui fluid dropdown\" formControlName=\"corporate_type\" disabled>\r\n            <option value=\"B2C\"> B2C </option>\r\n            <option value=\"Agent\"> Sub Agent / Branch Office </option>\r\n            <option value=\"API\"> API OUT </option>\r\n            <option value=\"Mobile\">Mobile</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"four wide field\" *ngIf=\"posBasicInfoForm.controls.domain_url\"\r\n          [ngClass]=\"{'is-invalid': isSubmitted && gfc.domain_url.errors}\">\r\n          <label>Domain Name</label>\r\n          <input type=\"text\" name=\"domain_url\" formControlName=\"domain_url\" value=\"\" placeholder=\"B2C Domain Name\">\r\n        </div>\r\n        <div class=\"four wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.name.errors}\">\r\n          <label>Office Name<span class=\"mandatory\">*</span></label>\r\n          <input type=\"text\" name=\"name\" formControlName=\"name\" value=\"\" placeholder=\"Office Name\">\r\n        </div>\r\n        <div class=\"four wide field\">\r\n          <label>Agent code</label>\r\n          <input type=\"text\" name=\"agent_code\" formControlName=\"agent_code\" value=\"\" placeholder=\"Agent Code\" disabled>\r\n          <div *ngIf=\"gfc.agent_code.errors\" class=\"invalid-feedback\">\r\n            <div class=\"validations\" *ngIf=\"gfc.agent_code.errors.pattern\">\r\n             Please enter only numeric values\r\n            </div>\r\n            <!-- <div class=\"validations\" *ngIf=\"gfc.agent_code.errors.minLength\">\r\n              Please enter minimum 8 length character\r\n             </div> -->\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"four wide field\">\r\n          <label>Branch Code</label>\r\n          <input type=\"text\" name=\"branch_code\" formControlName=\"associated_office\" value=\"\" placeholder=\"Branch Code\">\r\n        </div> -->\r\n        <div class=\"four wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.email.errors}\">\r\n          <label>Email<span class=\"mandatory\">*</span></label>\r\n          <input type=\"email\" name=\"email\" formControlName=\"email\" value=\"\" placeholder=\"Email\" class=\"email\" required>\r\n          <div *ngIf=\"gfc.email.errors\" class=\"invalid-feedback\">\r\n            <div class=\"validations\" *ngIf=\"gfc.email.errors.pattern\">\r\n              Email must be a valid email address\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"four wide field\">\r\n          <label>Contact Number</label>\r\n          <input type=\"number\" name=\"contact\" formControlName=\"contact\" value=\"\" placeholder=\"Contact number\">\r\n        </div>\r\n        <div class=\"four wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.payment_gateway.errors}\">\r\n          <label>Payment Gateway<span class=\"mandatory\">*</span></label>\r\n          <select class=\"ui fluid dropdown\" formControlName=\"payment_gateway\">\r\n            <option value=\"\"> Payment Gateway </option>\r\n            <option value=\"1\"> Yes </option>\r\n            <option value=\"0\"> No </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"four wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.currency_id.errors}\">\r\n          <label>Operating Currency<span class=\"mandatory\">*</span></label>\r\n          <select class=\"ui fluid search dropdown\" formControlName=\"currency_id\">\r\n            <option value=\"\"> Operating Currency </option>\r\n            <option *ngFor=\"let currency of currencies\" value=\"{{currency.code}}\"> {{currency.name}} </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"four wide field\" *ngIf=\"posBasicInfoForm.controls.credit_limit\">\r\n          <label class=\"inline-label\">Credit Limit<span class=\"mandatory\">*</span>\r\n            <i class=\"fa fa-exclamation-circle tooltip\">\r\n              <span class=\"tooltiptext\">\r\n                The Maximum amount permitted for the Ofiice to do Transactions\r\n              </span>\r\n            </i></label>\r\n          <span class=\"unlimited\"></span>\r\n          <input type=\"text\" name=\"credit_limit\" formControlName=\"credit_limit\" value=\"\" placeholder=\"Credit Limit\" class=\"credit-limit\"\r\n            disabled>\r\n        </div>\r\n        <div class=\"four wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.country_id.errors}\">\r\n          <label>Operating Country<span class=\"mandatory\">*</span></label>\r\n          <select class=\"ui fluid search dropdown\" formControlName=\"country_id\">\r\n            <option value=\"\"> Operating Country</option>\r\n            <option *ngFor=\"let country of countries\" value=\"{{country.country_id}}\">{{country.country}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"four wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.timezone_id.errors}\">\r\n          <label>Operating Time Zone<span class=\"mandatory\">*</span></label>\r\n          <select class=\"ui fluid search dropdown\" formControlName=\"timezone_id\">\r\n            <option value=\"\"> Operating Time Zone</option>\r\n            <option *ngFor=\"let timezone of timezones\" value=\"{{timezone.timezone_id}}\">\r\n              {{ timezone.timezone_value }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"four wide field\">\r\n          <label>Tax Number\r\n            <i class=\"fa fa-exclamation-circle tooltip\">\r\n              <span class=\"tooltiptext\">\r\n                GST / VAT in Invoice\r\n              </span>\r\n            </i></label>\r\n          <input type=\"text\" name=\"business_id\" formControlName=\"business_id\" value=\"\" placeholder=\"Tax Number\">\r\n        </div>\r\n        <div class=\"four wide field\" *ngIf=\"posBasicInfoForm.controls.numberOfUser\">\r\n          <label>Number of Users<span class=\"mandatory\">*</span>\r\n            <i class=\"fa fa-exclamation-circle tooltip\">\r\n              <span class=\"tooltiptext\">\r\n                Maximum number of Users allowed for the office\r\n              </span>\r\n            </i></label>\r\n          <input type=\"text\" name=\"numberOfUsers\" formControlName=\"numberOfUsers\" value=\"\"  placeholder=\"No of Users\" required>\r\n          <div *ngIf=\"gfc.numberOfUsers.errors\" class=\"invalid-feedback\">\r\n            <div class=\"validations\" *ngIf=\"gfc.numberOfUsers.errors.pattern\">\r\n             Please enter only numeric values\r\n            </div>\r\n            <!-- <div class=\"validations\" *ngIf=\"gfc.agent_code.errors.minLength\">\r\n              Please enter minimum 8 length character\r\n             </div> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"four wide field\">\r\n          <label>IATA Number</label>\r\n          <input type=\"text\" name=\"iata_no\" formControlName=\"iata_no\" value=\"\" placeholder=\"IATA Number\">\r\n        </div>\r\n      </div>\r\n      <div class=\"ui grid margin-bottom-15\">\r\n        <div class=\"eight wide column tax-section gridstyle\">\r\n          <div class=\"ui segment\">\r\n            <h4 class=\"ui header\">Airline TAX in Percentage</h4>\r\n            <div class=\"ui grid\">\r\n              <div class=\"eight wide column gridstyle2\">\r\n                <div class=\"ui segment tax_block\">\r\n                  <p>Domestic : </p>\r\n                  <div class=\"sixteen wide field\">\r\n                    <label>Tax Code</label>\r\n                    <input type=\"text\" formControlName=\"domestictTaxCode\" value=\"\" placeholder=\"Tax Code\">\r\n                  </div>\r\n                  <div class=\"sixteen wide field\">\r\n                    <label>Tax in Percentage</label>\r\n                    <input type=\"text\" formControlName=\"domestictTaxPercentage\" value=\"\"\r\n                      placeholder=\"Tax in Percentage\">\r\n                  </div>\r\n                  <div class=\"sixteen wide field\">\r\n                    <label>Currency</label>\r\n                    <select class=\"ui fluid search dropdown\" formControlName=\"domestictTaxCurrency\">\r\n                      <option value=\"\"> Select Currency</option>\r\n                      <option *ngFor=\"let currency of currencies\" value=\"{{currency.currency_id}}\"> {{ currency.name }}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"sixteen wide field\">\r\n                    <label> Add Airport </label>\r\n                    <select class=\"ui dropdownThree fluid search multiple_search\" id=\"airports\"\r\n                      formControlName=\"domestictTaxAirport\" multiple=\"\" name=\"domestictTaxAirport\" value=\"\">\r\n                      <option value=\"\" selected>Select one category </option>\r\n                      <option  class=\"item\"  *ngFor=\"let airport of airports\" value=\"{{airport.AirportCode}}\">\r\n                        {{ airport.AirportCode }}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"eight wide column gridstyle1\">\r\n                <div class=\"ui segment tax_block\">\r\n                  <p>International : </p>\r\n                  <div class=\"sixteen wide field\">\r\n                    <label>Tax in Percentage</label>\r\n                    <input type=\"text\" formControlName=\"internationalTaxPercentage\" value=\"\"\r\n                      placeholder=\"Tax in Percentage\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"eight wide column tax-section gridstyle3\">\r\n          <div class=\"ui segment\">\r\n            <h4 class=\"ui header\">Non Airline TAX in Percentage</h4>\r\n            <div class=\"ui grid\">\r\n              <div class=\"sixteen wide column\">\r\n                <div class=\"ui segment tax_block\">\r\n                  <p>Non Airline : </p>\r\n                  <div class=\"sixteen wide field\">\r\n                    <label>Tax in Percentage</label>\r\n                    <input type=\"number\" formControlName=\"nonAirlineTax\" value=\"\" placeholder=\"Tax in Percentage\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui grid margin-bottom-15 card-section\">\r\n          <div class=\"eight wide column gridstyle4\">\r\n            <div class=\"ui segment tax-section\">\r\n              <h4 class=\"ui header payment-header\">Choose Payment</h4>\r\n              <div class=\"ui grid\">\r\n                <div class=\"nine wide field\">\r\n                  <div class=\" ui segment bg-grey\">\r\n                    <p class=\"ui checkbox\">\r\n                      <input type=\"checkbox\" formControlName=\"amexCard\">\r\n                      <label>Credit/Debit Card </label>\r\n                    </p>\r\n                    <div class=\"ui grid\"\r\n                      *ngIf=\"posBasicInfoForm.controls.amexCard && posBasicInfoForm.controls.amexCard.value\">\r\n                      <div class=\"sixteen wide column\">\r\n                        <div class=\"ui \">\r\n                          <!-- <p>Amex Card Details : </p> -->\r\n                          <div *ngIf=\"posBasicInfoForm.controls.amex_card\" formGroupName=\"amex_card\"\r\n                            class=\"cardDetails\">\r\n                            <div class=\"fields one\">\r\n                              <div class=\"sixteen wide field\"\r\n                                [ngClass]=\"{'error': (isSubmitted && posBasicInfoForm['controls'].amex_card['controls'].cardHolderName.status == 'INVALID')}\">\r\n                                <input type=\"text\" formControlName=\"cardHolderName\" placeholder=\"Card Holders Name\">\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"fields two\">\r\n                              <div class=\"seven wide field\"\r\n                                [ngClass]=\"{'error': (isSubmitted && posBasicInfoForm['controls'].amex_card['controls'].cardHolderType.status == 'INVALID')}\">\r\n                                <select class=\"ui fluid dropdown\" formControlName=\"cardHolderType\">\r\n                                  <option value=\"\"> Card Type </option>\r\n                                  <option value=\"Visa\"> Amex Card </option>\r\n                                  <option value=\"Visa\"> Visa </option>\r\n                                  <option value=\"MasterCard\"> Master Card </option>\r\n                                  <option value=\"AmericanExpress\"> Amercian Express </option>\r\n                                </select>\r\n                              </div>\r\n                              <div class=\"nine wide field\"\r\n                                [ngClass]=\"{'error': (isSubmitted && posBasicInfoForm['controls'].amex_card['controls'].cardnumber.status == 'INVALID')}\">\r\n                                <input type=\"text\" formControlName=\"cardnumber\" value=\"\" placeholder=\"Card Number\">\r\n                              </div>\r\n\r\n                            </div>\r\n                            <div class=\"fields three\">\r\n                              <div class=\"six wide field\"\r\n                                [ngClass]=\"{'error': (isSubmitted && posBasicInfoForm['controls'].amex_card['controls'].cardExpMonth.status == 'INVALID')}\">\r\n                                <select class=\"ui fluid dropdown\" formControlName=\"cardExpMonth\">\r\n                                  <option value=\"\"> Exp. Month </option>\r\n                                  <option value=\"01\"> Jan (01) </option>\r\n                                  <option value=\"02\"> Feb (02) </option>\r\n                                  <option value=\"03\"> Mar (03) </option>\r\n                                  <option value=\"04\"> Apr (04) </option>\r\n                                  <option value=\"05\"> May (05) </option>\r\n                                  <option value=\"06\"> Jun (06) </option>\r\n                                  <option value=\"07\"> Jul (07) </option>\r\n                                  <option value=\"08\"> Aug (08) </option>\r\n                                  <option value=\"09\"> Sep (09) </option>\r\n                                  <option value=\"10\"> Oct (10) </option>\r\n                                  <option value=\"11\"> Nov (11) </option>\r\n                                  <option value=\"12\"> Dec (12) </option>\r\n                                </select>\r\n                              </div>\r\n                              <div class=\"six wide field\"\r\n                                [ngClass]=\"{'error': (isSubmitted && posBasicInfoForm['controls'].amex_card['controls'].cardExpYear.status == 'INVALID')}\">\r\n                                <select class=\"ui fluid dropdown\" formControlName=\"cardExpYear\">\r\n                                  <option value=\"\"> Exp. Year </option>\r\n                                  <option value=\"19\"> 2019 </option>\r\n                                  <option value=\"20\"> 2020 </option>\r\n                                  <option value=\"21\"> 2021 </option>\r\n                                  <option value=\"22\"> 2022 </option>\r\n                                  <option value=\"23\"> 2023 </option>\r\n                                  <option value=\"24\"> 2024 </option>\r\n                                  <option value=\"25\"> 2025 </option>\r\n                                  <option value=\"26\"> 2026 </option>\r\n                                  <option value=\"27\"> 2027 </option>\r\n                                  <option value=\"28\"> 2028 </option>\r\n                                  <option value=\"29\"> 2029 </option>\r\n                                </select>\r\n                              </div>\r\n                              <div class=\"four wide field\"\r\n                                [ngClass]=\"{'error': (isSubmitted && posBasicInfoForm['controls'].amex_card['controls'].cardcvv.status == 'INVALID')}\">\r\n                                <input type=\"text\" formControlName=\"cardcvv\" value=\"\" placeholder=\"CVV\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"seven wide field\">\r\n                  <div class=\" ui segment bg-grey\">\r\n                    <p class=\"ui checkbox\">\r\n                      <input type=\"checkbox\" formControlName=\"queue\">\r\n                      <label>Queue </label>\r\n                    </p>\r\n                    <div class=\"ui grid\"\r\n                      *ngIf=\"posBasicInfoForm.controls.queue_service && posBasicInfoForm.controls.queue_service.value\"\r\n                      class=\"cardDetails\">\r\n                      <div class=\"sixteen wide column\">\r\n                        <div class=\"ui \">\r\n                          <!-- <p>Amex Card Details : </p> -->\r\n                          <div *ngIf=\"posBasicInfoForm.controls.queue_service\" formGroupName=\"queue_service\">\r\n                            <div class=\"fields one\">\r\n                              <div class=\"sixteen wide field\"\r\n                                [ngClass]=\"{'error': (isSubmitted && posBasicInfoForm['controls'].queues['controls'].queue1.status == 'INVALID')}\">\r\n                                <input type=\"text\" formControlName=\"queue1\" placeholder=\"\">\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"fields one\">\r\n                              <div class=\"sixteen wide field\"\r\n                                [ngClass]=\"{'error': (isSubmitted && posBasicInfoForm['controls'].queues['controls'].queue2.status == 'INVALID')}\">\r\n                                <input type=\"text\" formControlName=\"queue2\" placeholder=\"\">\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"fields one\">\r\n                              <div class=\"sixteen wide field\"\r\n                                [ngClass]=\"{'error': (isSubmitted && posBasicInfoForm['controls'].queues['controls'].queue3.status == 'INVALID')}\">\r\n                                <input type=\"text\" formControlName=\"queue3\" placeholder=\"\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"eight wide column gridstyle\">\r\n            <div [hidden]=\"posBasicInfoForm.controls.corporate_type.value != 'Agent'\" class=\"ui segment tax-section\"\r\n              formGroupName=\"pos_negofares\">\r\n              <h4 class=\"ui header payment-header\">Fare Preference for Nego Fares</h4>\r\n              <div class=\"ui grid cardDetails\">\r\n                <div class=\"eight wide field fare fare1\">\r\n                \r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"all\" value=\"all\"  [checked]=\"isChecked\"  (change)=\"checkAllnego()\">\r\n                    <label>All</label>\r\n                  </div>\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"publishedAndPrivate\"\r\n                      value=\"759 758 70J ||Published and Private Fares\">\r\n                    <label>Published and Private Fares</label>\r\n                  </div>\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"publishedOnly\" value=\"759 70J||publishedOnly\">\r\n                    <label>Published Only</label>\r\n                  </div>\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"tourOperatorSemiDeffered\"\r\n                      value=\"759 758 ||Tour Operator Semi Deferred\">\r\n                    <label>Tour Operator Semi Deferred</label>   \r\n                  </div>\r\n                </div>\r\n                <div class=\"eight wide field fare fare1\">\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"tourOperatorDeffered\"\r\n                      value=\"759 758 ||Tour Operator Deferred\">\r\n                    <label>Tour Operator Deferred</label>\r\n                  </div>  \r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"bulkContract\" value=\"759 758||Contract Bulk\">\r\n                    <label>Contract Bulk</label>\r\n                  </div>\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"privateOnly\" value=\"759 758||privateOnly\">\r\n                    <label>Private Only</label>\r\n                  </div>\r\n                  <!-- <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"privateAdult\"\r\n                      value=\"759 758||Private Fare Adult\">\r\n                    <label>Private Adult</label>\r\n                  </div> -->\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"marine\" value=\"759 758||Marine\">\r\n                    <label>Marine</label>\r\n                  </div>\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"humanitarian\" value=\"759 758||Humanitarian\">\r\n                    <label>Humanitarian</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"pos_btn-panel bookings_btn-panel\">\r\n              <button class=\"ui button primary button align\" type=\"submit\" (click)=\"updatePosBasicInfo()\" \r\n                [ngClass]=\"{'align-pos-btn': posBasicInfoForm.controls.corporate_type.value != 'Agent'}\">Update POS</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>   \r\n    </div>\r\n  </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/pos-branch/pos-branch.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/pos-branch/pos-branch.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutPosPosBranchPosBranchComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-pos-edit-button></app-pos-edit-button>\r\n\r\n<div class=\"outer-segment\">\r\n  <!-- <h3 class=\"booking-header booking_comp\">Branches</h3> -->\r\n  <div class=\"outer-basic animated fadeIn\">\r\n    <div class=\"outer-basicForm\">\r\n      <div class=\"ui segment\">\r\n        <form class=\"ui form pos_basic_form\" autocomplete=\"off\" [formGroup]=\"branchForm\">\r\n          <!-- Office address part -->\r\n          <h4 class=\"ui header spacing\">Branch Details</h4>\r\n          <div class=\"field spacing\">\r\n            <div class=\"ui four column grid fields custom-columns\">\r\n              <div class=\"three wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.name.errors}\">\r\n                <label>Branch Name<span class=\"mandatory\">*</span></label>\r\n                <input type=\"text\" name=\"name\" formControlName=\"name\" placeholder=\"Branch Name\" required>\r\n              </div>\r\n              <div class=\"three wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.branch_code.errors}\">\r\n                <label>Branch Code<span class=\"mandatory\">*</span></label>\r\n                <input type=\"text\" name=\"branch_code\" formControlName=\"branch_code\" value=\"\" placeholder=\"Branch Code\"\r\n                  required>\r\n                <div *ngIf=\"gfc.branch_code.errors\" class=\"invalid-feedback\">\r\n                  <div class=\"validations\" *ngIf=\"gfc.branch_code.errors.pattern\">\r\n                    Branch code must be alphanumeric\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"three wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.email.errors}\">\r\n                <label>Email<span class=\"mandatory\">*</span></label>\r\n                <input type=\"text\" formControlName=\"email\" placeholder=\"Email\" name=\"email\" class=\"email\" required>\r\n                <div *ngIf=\"gfc.email.errors\" class=\"invalid-feedback\">\r\n                  <div class=\"validations\" *ngIf=\"gfc.email.errors.pattern\">\r\n                    Email must be a valid email\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"three wide field\">\r\n                <label>Address 1</label>\r\n                <input type=\"text\" formControlName=\"address_1\" placeholder=\"Address1\" name=\"address_1\">\r\n              </div>\r\n              <div class=\"three wide field\">\r\n                <label>Address 2</label>\r\n                <input type=\"text\" formControlName=\"address_2\" placeholder=\"Address2\">\r\n              </div>\r\n            </div>\r\n            <div class=\"ui four column grid fields\">\r\n              <div class=\"sixteen wide field text-right bookings-btn_panel\">\r\n                <button mat-button class=\"ui button primary button_align\" *ngIf=\"!showUpdate\" type=\"submit\"  (click)=\"saveBraches()\">Save</button>\r\n                <button mat-button class=\"ui button primary button_align\" (click)=\"updateBranch()\" *ngIf=\"showUpdate\">Update</button>\r\n                <button mat-button class=\"ui button reset button_align\" (click)=\"cancelOfficeDetails()\">Cancel</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"pos_btn-panel spacing\">\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"user-table-list b2c-list-user-table result-block\">\r\n        <ngx-datatable #table class=\"table\" [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n          [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]=\"branchesdata\" [sortType]=\"'multi'\" [reorderable]=\"true\"\r\n          [sorts]=\"[{ prop: 'id', dir: 'desc' }]\">\r\n          <!-- <ngx-datatable-column name=\"Id\" prop=\"id\">\r\n          </ngx-datatable-column> -->\r\n          <ngx-datatable-column name=\"Branch Name\" prop=\"name\">\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Branch Code\" prop=\"branch_code\">\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Email\" prop=\"email\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              <span title=\"Email\" class=\"email\">\r\n                {{row.email}}\r\n              </span>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Address 1\" prop=\"address_1\">\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Address 2\" prop=\"address_2\">\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Date\" prop=\"created_at\">\r\n            <ng-template ngx-datatable-cell-template let-value=\"value\">{{value |date: 'dd/MM/yyyy h:mm a'}}\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Delete\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template let-value=\"value\">\r\n              <ng-container>\r\n                <span class=\"action\" title=\"Delete\">\r\n                  <i class=\"fa fa-trash-o\" aria-hidden=\"true\" (click)=\"deleteTourCode(row)\"></i>\r\n                </span>\r\n              </ng-container>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"Edit\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template let-value=\"value\">\r\n              <ng-container>\r\n                <span class=\"action\" title=\"Delete\">\r\n                  <i class=\"fa fa-edit\" aria-hidden=\"true\" (click)=\"editbranch(row)\"></i>\r\n                </span>\r\n              </ng-container>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n        </ngx-datatable>\r\n      </div>\r\n      <!-- <div class=\"ui grid\">\r\n        <div class=\"sixteen wide column row\">\r\n          <div class=\"sixteen wide column text-right btn-wrap\">\r\n            <button class=\"ui button primary button_align\" (click)=\"createBranch()\">ADD</button>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/pos-edit-button/pos-edit-button.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/pos-edit-button/pos-edit-button.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutPosPosEditButtonPosEditButtonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"ui clearing segment pos-basic-edit-btn bookings_btn-panel text-right\">\r\n    <div class=\"ui button primary tab_margin branch2 button-wrapper\" [routerLink]=\"['/pos/branch-info/',organisationId]\" routerLinkActive=\"active\">\r\n        Branch\r\n    </div> \r\n    <div class=\"ui button primary tab_margin branch2 button-wrapper\" [routerLink]=\"['/pos/office-address/',organisationId]\" routerLinkActive=\"active\">\r\n        Office Address\r\n    </div>\r\n    <div class=\"ui button primary tab_margin branch2 button-wrapper\" [routerLink]=\"['/pos/branding-info/',organisationId]\" routerLinkActive=\"active\">\r\n        Branding informations\r\n    </div>\r\n    <div class=\"ui button primary tab_margin branch2 button-wrapper\" [routerLink]=\"['/pos/monthly-target/',organisationId]\" routerLinkActive=\"active\">\r\n        Monthly Target\r\n    </div>\r\n    <div class=\"ui button primary tab_margin branch2 button-wrapper\" [routerLink]=\"['/pos/active-suppliers/',organisationId]\" routerLinkActive=\"active\">\r\n        Suppliers\r\n    </div>\r\n    <div class=\"ui button primary tab_margin branch2 button-wrapper\" [routerLink]=\"['/pos/airline-rbd/',organisationId]\" routerLinkActive=\"active\">\r\n        Airline RBD\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/pos-office-details/pos-office-details.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/pos-office-details/pos-office-details.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutPosPosOfficeDetailsPosOfficeDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-pos-edit-button></app-pos-edit-button>\r\n<div class=\"outer-form\">\r\n    <form class=\"ui form pos_basic_form\"  autocomplete=\"off\"[formGroup]=\"officeAddressForm\" (ngSubmit)=\"storeOfficeAddress()\">\r\n      <!-- Office address part -->\r\n      <h4 class=\"ui header spacing\">Office Address</h4>\r\n      <div class=\"field spacing\">\r\n        <div class=\"ui four column grid fields custom-columns\">\r\n          <div class=\"four wide field\">\r\n            <label>Office Name</label>\r\n            <input type=\"text\" name=\"contact_person_name\" formControlName=\"contact_person_name\" placeholder=\"Office Name\">\r\n          </div>\r\n          <div class=\"four wide field\">\r\n            <label>Mobile Number</label>\r\n            <input type=\"number\" formControlName=\"contact_mobile_number\" name=\"contact_mobile_number\"\r\n              placeholder=\"Mobile Number\">\r\n          </div>\r\n          <div class=\"four wide field\">\r\n            <label>Email</label>\r\n            <input type=\"email\" formControlName=\"contact_person_email\" placeholder=\"Email ID\">\r\n            <!-- <div *ngIf=\"contact_person_email.invalid && (contact_person_email.dirty || contact_person_email.touched)\"\r\n              class=\"validations\">\r\n              <div class=\"validations\" *ngIf=\"contact_person_email.errors?.pattern\">\r\n                Email must be a valid email address\r\n              </div>\r\n            </div> -->\r\n          </div>\r\n          <div class=\"four wide field\"\r\n            [ngClass]=\"{'error': (isSubmitted && officeAddressForm['controls'].officeAddress['controls'].address_1.status == 'INVALID')}\">\r\n            <label>Address 1</label>\r\n            <input type=\"text\" formControlName=\"address_1\" placeholder=\"Address1\">\r\n          </div>\r\n          <div class=\"four wide field\"\r\n            [ngClass]=\"{'error': (isSubmitted && officeAddressForm['controls'].officeAddress['controls'].address_2.status == 'INVALID')}\">\r\n            <label>Address 2</label>\r\n            <input type=\"text\" formControlName=\"address_2\" placeholder=\"Address2\">\r\n          </div>\r\n          <div class=\"four wide field\"\r\n            [ngClass]=\"{'error': (isSubmitted && officeAddressForm['controls'].officeAddress['controls'].contact_country_id.status == 'INVALID')}\">\r\n            <label>Country</label>\r\n            <select class=\"ui fluid search dropdown\" formControlName=\"contact_country_id\"\r\n              (change)=\"passCountryId($event.target.value)\">\r\n              <option value=\"\"> Country </option>\r\n              <option *ngFor=\"let country of countries\" value=\"{{country.country_id}}\"> {{country.country}}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"four wide field\"\r\n            [ngClass]=\"{'error': (isSubmitted && officeAddressForm['controls'].officeAddress['controls'].city_id.status == 'INVALID')}\">\r\n            <label>City</label>\r\n            <select class=\"ui fluid search dropdown\" formControlName=\"city_id\">\r\n  \r\n              <option *ngFor=\"let city of cities\" value=\"{{city.city_id}}\">{{city.name}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"four wide field\"\r\n            [ngClass]=\"{'error': (isSubmitted && officeAddressForm['controls'].officeAddress['controls'].state_province.status == 'INVALID')}\">\r\n            <label>State/Province</label>\r\n            <input type=\"text\" formControlName=\"state_province\" placeholder=\"State / Province\">\r\n          </div>\r\n          <div class=\"four wide field\"\r\n            [ngClass]=\"{'error': (isSubmitted && officeAddressForm['controls'].officeAddress['controls'].zip.status == 'INVALID')}\">\r\n            <label>Zip Code</label>\r\n            <input type=\"text\" formControlName=\"zip\" placeholder=\"Zip code\">\r\n            <!-- <div *ngIf=\"zip.invalid && (zip.dirty || zip.touched)\" class=\"validations\">\r\n              <div class=\"validations\" *ngIf=\"zip.errors?.pattern\">\r\n                Zip code must be a valid number\r\n              </div>\r\n            </div> -->\r\n          </div>\r\n  \r\n        </div>\r\n        <div class=\"buttonstyle\">\r\n        <button mat-button class=\"ui button primary button_align\" type=\"submit\">Save</button>\r\n        <button mat-button class=\"ui button reset button_align\" (click)=\"cancelOfficeDetails()\">Cancel</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"pos_btn-panel spacing\">\r\n \r\n      </div>\r\n    </form>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/pos-read/pos-read.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/pos-read/pos-read.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutPosPosReadPosReadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3><span class=\"update-header\">List of Office(s)</span></h3>\r\n<!-- organizationTypes -->\r\n<div class=\"ui fluid container\">\r\n  <div class=\"outer-basic\">\r\n    <div class=\"outer-basicForm\">\r\n      <form [formGroup]=\"filterForm\" autocomplete=\"off\" (ngSubmit)=\"filterFormSubmit()\" class=\"ui form search-field-wrapper\">\r\n        <div class=\"four fields\">\r\n          <div class=\"two wide field main-wrapper\">\r\n            <label>Organisation Type</label>\r\n            <select class=\"ui fluid dropdown1\" formControlName=\"corporate_type\">\r\n              <option value=\"all\">All</option>\r\n              <option value=\"Agent\">Agent</option>\r\n              <!-- <option value=\"Corporate\">Corporate</option> -->\r\n              <option value=\"B2C\">B2C</option>\r\n              <option value=\"Mobile\">Mobile</option>\r\n              <!-- <option *ngFor=\"let orgType of organizationTypes;\" value=\"{{orgType}}\">\r\n                {{orgType}}</option> -->\r\n            </select>\r\n          </div>\r\n          <div class=\"three wide field main-wrapper\">\r\n            <label>Office Name/Office Id</label>\r\n            <input type=\"text\" placeholder=\"Office Name/Office Id\" formControlName=\"nameAndOfficeId\">\r\n          </div>\r\n          <div class=\"eight wide field bookings_btn-panel main-wrapper button-wrapper\">\r\n            <button class=\"ui primary button filter_btn\">\r\n              <span class=\"filter_list\">Search</span>\r\n            </button>\r\n            <button class=\"ui reset button filter_btn_reset\" (click)=\"resetFilterPos()\">\r\n              <span class=\"filter_list\">Reset</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      \r\n      <div class=\"user-table-list b2c-list-user-table\">\r\n      <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n        [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='pointOfSales' [sortType]=\"'multi'\" [reorderable]=\"true\"\r\n        [sorts]=\"[{prop: 'registration_id', dir: 'desc'}]\">\r\n        <ngx-datatable-column name=\"Sl No\" prop=\"id\">\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Office ID\" prop=\"agent_code\">\r\n          <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n            <span *ngIf=\"value\">{{value}}</span>\r\n            <span *ngIf=\"!value\">---</span>\r\n          </ng-template>   \r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Office Name\" prop=\"name\">\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Office Type\" prop=\"corporate_type\">\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Credit Limit\" prop=\"credit_limit\">\r\n          <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n            <span *ngIf=\"value\">{{value}}</span>\r\n            <span *ngIf=\"!value\">---</span>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Email\" prop=\"email\" [cellClass]=\"'my-custom-cell'\" [headerClass]=\"'my-custom-cell'\">\r\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n            <span *ngIf=\"row.email\" title=\"Preview POS\" class=\"email\">\r\n              {{row.email}}\r\n              <!-- <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> -->\r\n            </span>\r\n            <span *ngIf=\"!row.email\">---</span>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Contact\" prop=\"contact\">\r\n          <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n            <span *ngIf=\"value\">{{value}}</span>\r\n            <span *ngIf=\"!value\">---</span>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Created\" prop=\"created\">\r\n          <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n            <span *ngIf=\"value\">{{value}}</span>\r\n            <span *ngIf=\"!value\">---</span>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"status\" prop=\"is_active\">\r\n          <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\r\n            <span *ngIf=\"value == 1\" (click)=\"statusToggle(row)\">\r\n              <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>\r\n              <!-- <i class=\"icon\" title=\"click to deactivate\">\r\n                <img src=\"./../../../../../assets/icons/checkmark.png\" class=\"corporate_input__placeholder-icon call\" />\r\n              </i> -->\r\n            </span> \r\n            <span *ngIf=\"value != 1\" (click)=\"statusToggle(row)\">\r\n              <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n              <!-- <i class=\"icon\" title=\"click to activate\">\r\n                <img src=\"./../../../../../assets/icons/cross.png\" class=\"corporate_input__placeholder-icon call\" />\r\n              </i> -->\r\n            </span>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- <ngx-datatable-column name=\"Org Status\" prop=\"hierarchy_id\">\r\n        </ngx-datatable-column> -->\r\n        <ngx-datatable-column name=\"Action\">\r\n          <ng-template let-value=\"value\" let-row=\"row\" ngx-datatable-cell-template>\r\n            <a class=\"nav-link edit\" title=\"Edit Details\" (click)=\"viewPOSPage(row)\">\r\n              <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n              <!-- <i class=\"icon\">\r\n                <img src=\"./../../../../assets/icons/edit.png\" class=\"corporate_input__placeholder-icon call\" />\r\n              </i> -->\r\n            </a>\r\n            &nbsp;\r\n            <a class=\"nav-link edit\" (click)=\"deleteUser(row)\" title=\"Delete Details\">\r\n              <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n              <!-- <i class=\"icon\">\r\n                <img src=\"./../../../../assets/icons/delete-button.png\"\r\n                  class=\"corporate_input__placeholder-icon call\" />\r\n              </i> -->\r\n            </a>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n      </ngx-datatable>  \r\n      </div>   \r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/pos.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/pos.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutPosPosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./src/app/layout/pos/active-suppliers/active-suppliers.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/layout/pos/active-suppliers/active-suppliers.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutPosActiveSuppliersActiveSuppliersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ui.suppliers {\n  width: 200px;\n}\n\n.ui.header {\n  padding-left: 24px !important;\n  padding-top: 24px !important;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 20px;\n  line-height: 23px;\n  color: #4F4F4F;\n}\n\n.ui.header.head {\n  padding-left: 0px !important;\n  font-size: 18px;\n  font-weight: 400;\n}\n\nh4.ui.header {\n  padding-top: 0px !important;\n  padding-left: 0px !important;\n}\n\n.ui.segment {\n  margin: 24px !important;\n  padding: 24px !important;\n  background: #fff;\n  box-shadow: 0 0px 3px rgba(60, 64, 67, 0.3), 0 4px 8px 2px rgba(60, 64, 67, 0.15);\n  border-radius: 4.96141px;\n}\n\n.button_align {\n  margin-top: -25px;\n}\n\n.header_align {\n  margin-top: -24px !important;\n}\n\n.ui.checkbox {\n  padding-bottom: 10px;\n  margin: 5px;\n}\n\n.ui.checkbox label:before {\n  width: 15px;\n  height: 15px;\n}\n\n.ui.checkbox label:after {\n  font-size: 10px;\n  top: 0px;\n  left: -1px;\n}\n\n.ui.checkbox input:checked ~ label:before {\n  border: 1px solid #3867b1;\n}\n\n.ui.checkbox input:checked ~ label:after {\n  color: #3867b1 !important;\n}\n\n.buttonStyle {\n  text-align: right;\n  margin-top: 30px;\n}\n\n.ui.button.primary.button_align {\n  margin-right: 12px;\n}\n\n@media (max-width: 991) {\n  .buttonStyle {\n    text-align: right;\n    margin-top: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Bvcy9hY3RpdmUtc3VwcGxpZXJzL0U6XFxCZWxhbFxccHJvamVjdHNcXHByb2R1Y3Rpb24tYnVpbGRcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxccG9zXFxhY3RpdmUtc3VwcGxpZXJzXFxhY3RpdmUtc3VwcGxpZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcG9zL2FjdGl2ZS1zdXBwbGllcnMvYWN0aXZlLXN1cHBsaWVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURDQztFQUNHLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRERJO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNHUjs7QURBQTtFQUNJLDJCQUFBO0VBQ0EsNEJBQUE7QUNHSjs7QUREQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlGQUFBO0VBQ0Esd0JBQUE7QUNJSjs7QUREQTtFQUNJLGlCQUFBO0FDSUo7O0FEREE7RUFDSSw0QkFBQTtBQ0lKOztBRERBO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0FDSUo7O0FERlE7RUFFSSxXQUFBO0VBQ0EsWUFBQTtBQ0daOztBRERRO0VBQ0ksZUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FDR1o7O0FERVE7RUFDSSx5QkFBQTtBQ0FaOztBREVRO0VBQ0kseUJBQUE7QUNBWjs7QURLQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNGSjs7QURLQTtFQUNJLGtCQUFBO0FDRko7O0FES0E7RUFDSTtJQUNJLGlCQUFBO0lBQ0EsZ0JBQUE7RUNGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3Bvcy9hY3RpdmUtc3VwcGxpZXJzL2FjdGl2ZS1zdXBwbGllcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWkuc3VwcGxpZXJze1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gfVxyXG4gLnVpLmhlYWRlcntcclxuICAgIHBhZGRpbmctbGVmdDogMjRweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDI0cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgJi5oZWFkIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG59XHJcbmg0LnVpLmhlYWRlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi51aS5zZWdtZW50e1xyXG4gICAgbWFyZ2luOjI0cHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6MjRweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMHB4IDNweCByZ2JhKDYwLCA2NCwgNjcsIDAuMyksIDAgNHB4IDhweCAycHggcmdiYSg2MCwgNjQsIDY3LCAwLjE1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQuOTYxNDFweDtcclxufVxyXG5cclxuLmJ1dHRvbl9hbGlnbntcclxuICAgIG1hcmdpbi10b3A6LTI1cHg7XHJcbn1cclxuXHJcbi5oZWFkZXJfYWxpZ257XHJcbiAgICBtYXJnaW4tdG9wOiAtMjRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udWkuY2hlY2tib3gge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAtMXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlucHV0OmNoZWNrZWR+bGFiZWwge1xyXG4gICAgICAgIC8vIGNvbG9yOiAjMzg2N2IxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg2N2IxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICMzODY3YjEgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idXR0b25TdHlsZXtcclxuICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOjMwcHg7XHJcbn1cclxuXHJcbi51aS5idXR0b24ucHJpbWFyeS5idXR0b25fYWxpZ24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjk5MSl7XHJcbiAgICAuYnV0dG9uU3R5bGV7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpyaWdodDtcclxuICAgICAgICBtYXJnaW4tdG9wOjMwcHg7XHJcbiAgICB9XHJcbn0iLCIudWkuc3VwcGxpZXJzIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4udWkuaGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjNweDtcbiAgY29sb3I6ICM0RjRGNEY7XG59XG4udWkuaGVhZGVyLmhlYWQge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbmg0LnVpLmhlYWRlciB7XG4gIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cblxuLnVpLnNlZ21lbnQge1xuICBtYXJnaW46IDI0cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjRweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDBweCAzcHggcmdiYSg2MCwgNjQsIDY3LCAwLjMpLCAwIDRweCA4cHggMnB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDQuOTYxNDFweDtcbn1cblxuLmJ1dHRvbl9hbGlnbiB7XG4gIG1hcmdpbi10b3A6IC0yNXB4O1xufVxuXG4uaGVhZGVyX2FsaWduIHtcbiAgbWFyZ2luLXRvcDogLTI0cHggIWltcG9ydGFudDtcbn1cblxuLnVpLmNoZWNrYm94IHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIG1hcmdpbjogNXB4O1xufVxuLnVpLmNoZWNrYm94IGxhYmVsOmJlZm9yZSB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG59XG4udWkuY2hlY2tib3ggbGFiZWw6YWZ0ZXIge1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAtMXB4O1xufVxuLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpiZWZvcmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzg2N2IxO1xufVxuLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbDphZnRlciB7XG4gIGNvbG9yOiAjMzg2N2IxICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b25TdHlsZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4udWkuYnV0dG9uLnByaW1hcnkuYnV0dG9uX2FsaWduIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxKSB7XG4gIC5idXR0b25TdHlsZSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/pos/active-suppliers/active-suppliers.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/layout/pos/active-suppliers/active-suppliers.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ActiveSuppliersComponent */

  /***/
  function srcAppLayoutPosActiveSuppliersActiveSuppliersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActiveSuppliersComponent", function () {
      return ActiveSuppliersComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_pos_service_pos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/pos-service/pos-service */
    "./src/app/shared/services/pos-service/pos-service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var ActiveSuppliersComponent = /*#__PURE__*/function () {
      function ActiveSuppliersComponent(fb, router, activeRoute, posService, toastr) {
        _classCallCheck(this, ActiveSuppliersComponent);

        this.fb = fb;
        this.router = router;
        this.activeRoute = activeRoute;
        this.posService = posService;
        this.toastr = toastr;
        this.supplierFlights = [];
        this.supplierHotel = [];
        this.supplierCar = [];
        this.supplierInsurance = [];
        this.supplierActivity = [];
        this.isChecked_f = false;
        this.isChecked_in = false;
        this.isChecked_h = false;
        this.isChecked_c = false;
        this.isChecked_ac = false;
        this.suppliersCheck = {};
      }

      _createClass(ActiveSuppliersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.organisation_ID = this.activeRoute.snapshot.params.id;
          this.getOrganisationInfo(this.organisation_ID);
          this.getAllsuppliers();
          this.suppiersForm = this.fb.group({
            active_suppliers_flights: this.fb.array([]),
            active_suppliers_hotels: this.fb.array([]),
            active_suppliers_cars: this.fb.array([]),
            active_suppliers_insurance: this.fb.array([]),
            active_suppliers_activities: this.fb.array([])
          });
        }
      }, {
        key: "getOrganisationInfo",
        value: function getOrganisationInfo(organisation_ID) {
          var _this = this;

          this.posService.getPosDetails(organisation_ID).subscribe(function (result) {
            if (result.status) {
              _this.posInfo = result.result;
              _this.flights = JSON.parse(result.result.active_suppliers).active_suppliers_flights;

              _this.flights.forEach(function (x) {
                _this.active_suppliers_flights.push(_this.fb.group(x));
              });

              var hotels = JSON.parse(result.result.active_suppliers).active_suppliers_hotels;
              hotels.forEach(function (x) {
                _this.active_suppliers_hotels.push(_this.fb.group(x));
              });
              var cars = JSON.parse(result.result.active_suppliers).active_suppliers_cars;
              cars.forEach(function (x) {
                _this.active_suppliers_cars.push(_this.fb.group(x));
              });
              var insurances = JSON.parse(result.result.active_suppliers).active_suppliers_insurance;
              insurances.forEach(function (x) {
                _this.active_suppliers_insurance.push(_this.fb.group(x));
              });
              var activities = JSON.parse(result.result.active_suppliers).active_suppliers_activities;
              activities.forEach(function (x) {
                _this.active_suppliers_activities.push(_this.fb.group(x));
              });
            }
          });
        }
      }, {
        key: "getAllsuppliers",
        value: function getAllsuppliers() {
          var _this2 = this;

          this.posService.getAllActiveSuppliers().subscribe(function (result) {
            _this2.suppliers = result.result;
            _this2.supplierFlights = _this2.suppliers.filter(function (e) {
              return e.is_flight;
            }).map(function (e) {
              return {
                active_name: e.name
              };
            });
            console.log(_this2.supplierFlights);
            _this2.supplierHotel = _this2.suppliers.filter(function (e) {
              return e.is_hotel;
            }).map(function (e) {
              return {
                active_name: e.name
              };
            });
            _this2.supplierCar = _this2.suppliers.filter(function (e) {
              return e.is_car;
            }).map(function (e) {
              return {
                active_name: e.name
              };
            });
            _this2.supplierActivity = _this2.suppliers.filter(function (e) {
              return e.is_activities;
            }).map(function (e) {
              return {
                active_name: e.name
              };
            });
            _this2.supplierInsurance = _this2.suppliers.filter(function (e) {
              return e.is_insurance;
            }).map(function (e) {
              return {
                active_name: e.name
              };
            });
            _this2.supplierInsurance = _this2.suppliers.filter(function (e) {
              return e.is_insurance;
            }).map(function (e) {
              return {
                active_name: e.name
              };
            });

            if (_this2.supplierFlights.length) {
              _this2.active_suppliers_flights.push(_this2.fb.group({}));

              var FormGroup = _this2.active_suppliers_flights.get('0');

              _this2.supplierFlights.forEach(function (e) {
                FormGroup.addControl(e.active_name, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](e.is_flight == null ? false : true));
              });
            }

            if (_this2.supplierHotel.length) {
              _this2.active_suppliers_hotels.push(_this2.fb.group({}));

              var _FormGroup = _this2.active_suppliers_hotels.get('0');

              _this2.supplierHotel.forEach(function (e) {
                _FormGroup.addControl(e.active_name, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](e.is_hotel == null ? false : true));
              });
            }

            if (_this2.supplierCar.length) {
              _this2.active_suppliers_cars.push(_this2.fb.group({}));

              var _FormGroup2 = _this2.active_suppliers_cars.get('0');

              _this2.supplierCar.forEach(function (e) {
                _FormGroup2.addControl(e.active_name, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](e.is_car == null ? false : true));
              });
            }

            if (_this2.supplierActivity.length) {
              _this2.active_suppliers_activities.push(_this2.fb.group({}));

              var _FormGroup3 = _this2.active_suppliers_activities.get('0');

              _this2.supplierActivity.forEach(function (e) {
                _FormGroup3.addControl(e.active_name, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](e.is_activities == null ? false : true));
              });
            }

            if (_this2.supplierInsurance.length) {
              _this2.active_suppliers_insurance.push(_this2.fb.group({}));

              var _FormGroup4 = _this2.active_suppliers_insurance.get('0');

              _this2.supplierInsurance.forEach(function (e) {
                _FormGroup4.addControl(e.active_name, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](e.is_insurance == null ? false : true));
              });
            }
          });
        }
      }, {
        key: "submitActiveSuppliers",
        value: function submitActiveSuppliers() {
          var _this3 = this;

          this.posService.updatePosDetails({
            organisation_id: this.organisation_ID,
            name: this.posInfo.name,
            email: this.posInfo.email,
            country_id: this.posInfo.country_id,
            contact: this.posInfo.contact,
            address_1: this.posInfo.address_1,
            address_2: this.posInfo.address_2,
            city_id: this.posInfo.city_id,
            state_province: this.posInfo.state_province,
            payment_gateway: this.posInfo.payment_gateway,
            currency_id: this.posInfo.currency_id,
            timezone_id: this.posInfo.timezone_id,
            numberOfUsers: this.posInfo.numberOfUsers,
            credit_limit: this.posInfo.credit_limit,
            zip: this.posInfo.zip,
            contact_country_id: this.posInfo.contact_country_id,
            corporate_type: this.posInfo.corporate_type,
            active_suppliers: this.suppiersForm.value,
            tab: 'suppliers'
          }).subscribe(function (result) {
            if (result.status) {
              _this3.toastr.success("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });

              _this3.router.navigate(['/pos/basic-edit/' + _this3.organisation_ID]);
            } else {
              _this3.toastr.error("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "cancelSupplier",
        value: function cancelSupplier() {
          this.router.navigate(['/pos/basic-edit/', this.organisation_ID]);
        }
      }, {
        key: "checkAllInsurancesuppliers",
        value: function checkAllInsurancesuppliers(event) {
          this.isChecked_in = !this.isChecked_in;
          var checked = this.isChecked_in;
          var FormGroup = this.active_suppliers_insurance.get('0');
          this.supplierInsurance.forEach(function (e) {
            FormGroup.get(e.active_name).setValue(checked);
          });
        }
      }, {
        key: "checkAllFlightsuppliers",
        value: function checkAllFlightsuppliers() {
          this.isChecked_f = !this.isChecked_f;
          var checked = this.isChecked_f;
          var FormGroup = this.active_suppliers_flights.get('0');
          var FormGroupp = this.active_suppliers_flights.get('1');
          this.supplierFlights.forEach(function (e) {
            FormGroup.get(e.active_name).setValue(checked); // FormGroupp.get(e.is).setValue(checked);
          });
          this.supplierFlights.map(function (e) {
            FormGroupp.get(e.is_all_flight).setValue(checked);
          });
        }
      }, {
        key: "checkAllHotelsuppliers",
        value: function checkAllHotelsuppliers() {
          this.isChecked_h = !this.isChecked_h;
          var checked = this.isChecked_h;
          var FormGroup = this.active_suppliers_hotels.get('0');
          this.supplierHotel.forEach(function (e) {
            FormGroup.get(e.active_name).setValue(checked);
          });
        }
      }, {
        key: "checkAllCarsuppliers",
        value: function checkAllCarsuppliers() {
          this.isChecked_c = !this.isChecked_c;
          var checked = this.isChecked_c;
          var FormGroup = this.active_suppliers_cars.get('0');
          this.supplierCar.forEach(function (e) {
            FormGroup.get(e.active_name).setValue(checked);
          });
        }
      }, {
        key: "checkAllActivitysuppliers",
        value: function checkAllActivitysuppliers() {
          this.isChecked_ac = !this.isChecked_ac;
          var checked = this.isChecked_ac;
          var FormGroup = this.active_suppliers_activities.get('0');
          this.supplierActivity.forEach(function (e) {
            FormGroup.get(e.active_name).setValue(checked);
          });
        }
      }, {
        key: "active_suppliers_flights",
        get: function get() {
          return this.suppiersForm.get('active_suppliers_flights');
        }
      }, {
        key: "active_suppliers_hotels",
        get: function get() {
          return this.suppiersForm.get('active_suppliers_hotels');
        }
      }, {
        key: "active_suppliers_cars",
        get: function get() {
          return this.suppiersForm.get('active_suppliers_cars');
        }
      }, {
        key: "active_suppliers_activities",
        get: function get() {
          return this.suppiersForm.get('active_suppliers_activities');
        }
      }, {
        key: "active_suppliers_insurance",
        get: function get() {
          return this.suppiersForm.get('active_suppliers_insurance');
        }
      }]);

      return ActiveSuppliersComponent;
    }();

    ActiveSuppliersComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_shared_services_pos_service_pos_service__WEBPACK_IMPORTED_MODULE_4__["PosService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }];
    };

    ActiveSuppliersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-active-suppliers',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./active-suppliers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/active-suppliers/active-suppliers.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./active-suppliers.component.scss */
      "./src/app/layout/pos/active-suppliers/active-suppliers.component.scss"))["default"]]
    })], ActiveSuppliersComponent);
    /***/
  },

  /***/
  "./src/app/layout/pos/airline-rbd/airline-rbd.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/layout/pos/airline-rbd/airline-rbd.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutPosAirlineRbdAirlineRbdComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ui.form.pos_basic_form {\n  background: #fff;\n  box-shadow: 0 0px 3px rgba(60, 64, 67, 0.3), 0 4px 8px 2px rgba(60, 64, 67, 0.15);\n  border-radius: 4.96141px;\n  padding: 24px;\n  padding-bottom: 2px !important;\n}\n\n.ui.header {\n  font-size: 18px;\n  font-weight: 400;\n  color: #4F4F4F;\n}\n\n.ui.segment {\n  margin: 24px;\n  padding: 0px !important;\n}\n\n.button_align {\n  margin-top: 22px;\n  margin-right: 12px;\n}\n\n@media (max-width: 1024px) {\n  .ui.form .form-inner .fields {\n    display: block;\n  }\n  .ui.form .form-inner .fields .branch {\n    display: inline-block;\n    width: 16.6% !important;\n  }\n  .ui.form .form-inner .fields .buttondiv {\n    display: block;\n    width: 100% !important;\n    text-align: right;\n  }\n  .ui.form .fields.spacing .button1 {\n    display: inline-flex;\n    margin-right: 12px;\n  }\n}\n\n@media (max-width: 991px) {\n  .ui.form .form-inner .fields {\n    display: block;\n  }\n  .ui.form .form-inner .fields .branch {\n    display: inline-block;\n    width: 16.6% !important;\n  }\n  .ui.form .form-inner .fields .buttondiv {\n    display: block;\n    width: 100% !important;\n    text-align: right;\n    margin-top: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Bvcy9haXJsaW5lLXJiZC9FOlxcQmVsYWxcXHByb2plY3RzXFxwcm9kdWN0aW9uLWJ1aWxkXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHBvc1xcYWlybGluZS1yYmRcXGFpcmxpbmUtcmJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcG9zL2FpcmxpbmUtcmJkL2FpcmxpbmUtcmJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7RUFDQSxpRkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDQUo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDREo7O0FESUE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7QUNESjs7QURLQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNGSjs7QURLQTtFQUdZO0lBQ0ksY0FBQTtFQ0pkO0VES2M7SUFDSSxxQkFBQTtJQUNBLHVCQUFBO0VDSGxCO0VES2M7SUFDSSxjQUFBO0lBQ0Esc0JBQUE7SUFDQSxpQkFBQTtFQ0hsQjtFRFNVO0lBQ0Esb0JBQUE7SUFDQSxrQkFBQTtFQ1BWO0FBQ0Y7O0FEWUE7RUFHWTtJQUNJLGNBQUE7RUNaZDtFRGFjO0lBQ0kscUJBQUE7SUFDQSx1QkFBQTtFQ1hsQjtFRGFjO0lBQ0ksY0FBQTtJQUNBLHNCQUFBO0lBQ0EsaUJBQUE7SUFDQSxnQkFBQTtFQ1hsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3Bvcy9haXJsaW5lLXJiZC9haXJsaW5lLXJiZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS5mb3JtLnBvc19iYXNpY19mb3JtIHtcclxuICAgIC8vIHBhZGRpbmc6IDE3cHggMHB4IDI1cHggMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMHB4IDNweCByZ2JhKDYwLCA2NCwgNjcsIDAuMyksIDAgNHB4IDhweCAycHggcmdiYSg2MCwgNjQsIDY3LCAwLjE1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQuOTYxNDFweDtcclxuICAgIHBhZGRpbmc6MjRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudFxyXG4gICAgLy8gbWF4LXdpZHRoOiAxMjAwcHg7XHJcbn1cclxuXHJcbi51aS5oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjNEY0RjRGXHJcbn1cclxuXHJcbi51aS5zZWdtZW50e1xyXG4gICAgbWFyZ2luOjI0cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5idXR0b25fYWxpZ257XHJcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjEwMjRweCl7XHJcbiAgICAudWkuZm9ybXtcclxuICAgICAgICAuZm9ybS1pbm5lcntcclxuICAgICAgICAgICAgLmZpZWxkc3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgLmJyYW5jaHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2LjYlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJ1dHRvbmRpdntcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5maWVsZHMuc3BhY2luZ3tcclxuICAgICAgICAgICAgLmJ1dHRvbjF7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo5OTFweCl7XHJcbiAgICAudWkuZm9ybXtcclxuICAgICAgICAuZm9ybS1pbm5lcntcclxuICAgICAgICAgICAgLmZpZWxkc3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgLmJyYW5jaHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2LjYlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJ1dHRvbmRpdntcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDozMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLnVpLmZvcm0ucG9zX2Jhc2ljX2Zvcm0ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDBweCAzcHggcmdiYSg2MCwgNjQsIDY3LCAwLjMpLCAwIDRweCA4cHggMnB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDQuOTYxNDFweDtcbiAgcGFkZGluZzogMjRweDtcbiAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xufVxuXG4udWkuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzRGNEY0Rjtcbn1cblxuLnVpLnNlZ21lbnQge1xuICBtYXJnaW46IDI0cHg7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uX2FsaWduIHtcbiAgbWFyZ2luLXRvcDogMjJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XG4gIC51aS5mb3JtIC5mb3JtLWlubmVyIC5maWVsZHMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC51aS5mb3JtIC5mb3JtLWlubmVyIC5maWVsZHMgLmJyYW5jaCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxNi42JSAhaW1wb3J0YW50O1xuICB9XG4gIC51aS5mb3JtIC5mb3JtLWlubmVyIC5maWVsZHMgLmJ1dHRvbmRpdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuICAudWkuZm9ybSAuZmllbGRzLnNwYWNpbmcgLmJ1dHRvbjEge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC51aS5mb3JtIC5mb3JtLWlubmVyIC5maWVsZHMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC51aS5mb3JtIC5mb3JtLWlubmVyIC5maWVsZHMgLmJyYW5jaCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxNi42JSAhaW1wb3J0YW50O1xuICB9XG4gIC51aS5mb3JtIC5mb3JtLWlubmVyIC5maWVsZHMgLmJ1dHRvbmRpdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/layout/pos/airline-rbd/airline-rbd.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/layout/pos/airline-rbd/airline-rbd.component.ts ***!
    \*****************************************************************/

  /*! exports provided: AirlineRbdComponent */

  /***/
  function srcAppLayoutPosAirlineRbdAirlineRbdComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AirlineRbdComponent", function () {
      return AirlineRbdComponent;
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


    var src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/utils/common */
    "./src/app/shared/utils/common.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_pos_service_pos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/pos-service/pos-service */
    "./src/app/shared/services/pos-service/pos-service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var AirlineRbdComponent = /*#__PURE__*/function () {
      function AirlineRbdComponent(fb, activeRoute, posService, toastr, router) {
        _classCallCheck(this, AirlineRbdComponent);

        this.fb = fb;
        this.activeRoute = activeRoute;
        this.posService = posService;
        this.toastr = toastr;
        this.router = router;
        this.rbdArrayList = [];
        this.posInfo = {};
      }

      _createClass(AirlineRbdComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.airlineRBDForm = this.fb.group({
            organisation_id: [''],
            pos_rbd: this.fb.group({
              economy_rbd: [[]],
              pre_economy_rbd: [[]],
              bussiness_rbd: [[]],
              first_rbd: [[]]
            }),
            tab: ['rbd']
          });
          this.organisation_ID = this.activeRoute.snapshot.params.id;
          this.getOrganisationInfo(this.organisation_ID);
          this.rbdArrayList = src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_3__["rbdArrayList"];
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          $(document).ready(function () {
            $('.ui.dropdown').dropdown();
            $('.ui.dropdown').dropdown('refresh');
            $('.ui.checkbox').checkbox();
          });
        }
      }, {
        key: "getOrganisationInfo",
        value: function getOrganisationInfo(organisation_ID) {
          var _this4 = this;

          this.posService.getPosDetails(organisation_ID).subscribe(function (result) {
            if (result.status) _this4.posInfo = result.result;

            _this4.airlineRBDForm.patchValue({
              organisation_id: _this4.posInfo.organisation_id,
              pos_rbd: _this4.getRBDFields(_this4.posInfo.pos_rbd)
            });

            _this4.ngAfterViewInit();
          });
        }
      }, {
        key: "getRBDFields",
        value: function getRBDFields(pos_rbd) {
          if (!pos_rbd) return [];

          try {
            var rbds = JSON.parse(pos_rbd);
            console.log("rbds???", rbds);
            return {
              economy_rbd: rbds.economy_rbd,
              pre_economy_rbd: rbds.pre_economy_rbd,
              bussiness_rbd: rbds.bussiness_rbd,
              first_rbd: rbds.first_rbd
            };
          } catch (error) {
            console.log('er ', error);
            return {
              economy_rbd: [],
              pre_economy_rbd: [],
              bussiness_rbd: [],
              first_rbd: []
            };
          }
        }
      }, {
        key: "saveAirlineRBD",
        value: function saveAirlineRBD() {
          var _this5 = this;

          this.posService.updatePosDetails(this.airlineRBDForm.value).subscribe(function (result) {
            if (result.status) {
              _this5.toastr.success("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });

              _this5.router.navigate(['/pos/basic-edit/' + _this5.organisation_ID]);
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
        key: "cancelRBDPage",
        value: function cancelRBDPage() {
          this.router.navigate(['/pos/basic-edit/', this.organisation_ID]);
        }
      }]);

      return AirlineRbdComponent;
    }();

    AirlineRbdComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: src_app_shared_services_pos_service_pos_service__WEBPACK_IMPORTED_MODULE_5__["PosService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    AirlineRbdComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-airline-rbd',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./airline-rbd.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/airline-rbd/airline-rbd.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./airline-rbd.component.scss */
      "./src/app/layout/pos/airline-rbd/airline-rbd.component.scss"))["default"]]
    })], AirlineRbdComponent);
    /***/
  },

  /***/
  "./src/app/layout/pos/basic-info/basic-info.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/layout/pos/basic-info/basic-info.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutPosBasicInfoBasicInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".outer {\n  margin: 0px 20px 0px 15px;\n}\n\n.amexCard {\n  background-color: gainsboro !important;\n}\n\n.farePreferencestable {\n  border-top: 0px !important;\n}\n\n.outer__add-pos__title {\n  margin: 0;\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #E0E0E0;\n}\n\n.tourCode_btn,\n.addTogg_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n}\n\n.tourCode_text,\n.addTogg_text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.corporate_input__placeholder-icon {\n  position: relative;\n  width: 18px;\n  bottom: 28px;\n  left: 9px;\n}\n\n.ui.form.pos_basic_form {\n  padding: 24px;\n  background: #fff;\n  box-shadow: 0 0px 3px rgba(60, 64, 67, 0.3), 0 4px 8px 2px rgba(60, 64, 67, 0.15);\n  border-radius: 4.96141px;\n  margin: 24px 24px 80px;\n}\n\ndiv.upload {\n  box-sizing: border-box;\n  height: 15px;\n  width: 123px;\n  border-radius: 3px;\n  background-color: #FFF;\n  border: 0.5px solid #808080;\n  box-shadow: 0 0.25px 0.1px 0 rgba(0, 0, 0, 0.5);\n}\n\ndiv.upload input {\n  display: block !important;\n  width: 123px !important;\n  height: 15px !important;\n  opacity: 0 !important;\n  overflow: hidden !important;\n}\n\n.file_choose {\n  position: relative;\n  left: 27px;\n  bottom: 6px;\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 9px;\n  line-height: 10px;\n}\n\n.uploadinImg_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n}\n\n.uploadinImg_btn__text,\n.save-next_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 12px;\n}\n\n.file_table__img {\n  border: none;\n  background-color: #dfeafb5e;\n}\n\n.save-next_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.field input::-webkit-input-placeholder {\n  font-size: 14px;\n}\n\n.field input::-moz-placeholder {\n  font-size: 14px;\n}\n\n.field input::-ms-input-placeholder {\n  font-size: 14px;\n}\n\n.field input::placeholder {\n  font-size: 14px;\n}\n\n.ui.pointing.secondary.menu {\n  border: none;\n}\n\n.item.stepper__progress {\n  width: 167px;\n}\n\n.tab.segment.stepper__segment-outline {\n  border: none;\n  box-shadow: none;\n}\n\n.office-info_icon {\n  position: relative;\n  top: 20px;\n  right: 85px;\n}\n\n.pos_access-rights {\n  color: #828282;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 11px;\n  line-height: 12px;\n}\n\n.cancel_btn {\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.cancel_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.issue_date {\n  text-indent: 17px;\n}\n\n.wide.field.sale_check {\n  margin-top: 10px;\n}\n\n.assign_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.assign_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n}\n\n.circleIcon {\n  height: 20px;\n  width: 20px;\n  background-color: #0D801C;\n  border-radius: 50%;\n  display: inline-block;\n  margin-top: 6px;\n}\n\n.plusIcon {\n  color: #FFF;\n  font-size: 17px;\n  font-weight: 100;\n  line-height: 28px;\n  text-align: center;\n  margin-left: 0px;\n  margin-top: -3px;\n}\n\n::ng-deep.mat-step-icon-content {\n  height: 19px;\n  width: 19px;\n  color: #C8C8C8;\n  background-color: #C8C8C8;\n  border-radius: 50%;\n}\n\n::ng-deep.mat-step-header:hover,\n::ng-deep.cdk-keyboard-focused,\n::ng-deep.cdk-program-focused {\n  background-color: transparent !important;\n}\n\n::ng-deep.mat-step-icon {\n  border: 1px solid rgba(0, 0, 0, 0.24);\n  background: transparent !important;\n}\n\n::ng-deep.mat-step-icon-state-number.mat-step-icon.mat-step-icon-selected {\n  border: 2px solid #3867B1;\n  background: transparent;\n}\n\n::ng-deep.mat-step-icon-state-number.mat-step-icon.mat-step-icon-selected .ng-star-inserted {\n  color: #3867B1;\n}\n\n::ng-deep.mat-step-icon-content {\n  background-color: transparent;\n}\n\n::ng-deep.mat-horizontal-stepper-header-container {\n  background: #ffff;\n  width: 100%;\n  padding: 0px 30%;\n  margin-top: 32px;\n}\n\n::ng-deep.mat-icon {\n  display: none !important;\n}\n\n::ng-deep.mat-step-icon-selected,\n::ng-deep.mat-step-icon-state-done,\n::ng-deep.mat-step-icon-state-edit {\n  background-color: transparent !important;\n}\n\n::ng-deep.mat-step-label {\n  color: #3867b1;\n}\n\n::ng-deep.mat-horizontal-content-container {\n  margin-top: 32px;\n}\n\n.pos_btn-panel {\n  padding-bottom: 20px;\n  margin-bottom: 40px;\n}\n\n.pos_btn-panel .secondary {\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.pos_btn-panel .primary {\n  float: right;\n  width: auto !important;\n  border-radius: 5.12155px !important;\n  background-color: #3867B1;\n  min-width: auto;\n}\n\n.pos_btn-panel .primary:hover {\n  background-color: #cacbcd !important;\n  box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34, 36, 38, 0.15) inset !important;\n  color: rgba(0, 0, 0, 0.8) !important;\n}\n\n.segment p {\n  padding-bottom: 10px;\n}\n\n.bg-grey {\n  background: #d1dade;\n}\n\n.example-chip-list {\n  width: 100%;\n  border: 0px solid grey !important;\n}\n\n.mat-chip-input {\n  border: 0px !important;\n  background: transparent !important;\n}\n\n.inputfile {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.transparent,\n.transparent:hover {\n  background: none;\n}\n\n.center {\n  text-align: center;\n}\n\n.margin-right-20 {\n  margin-right: 20px;\n}\n\n.margin-bottom-15 {\n  margin-bottom: 15px;\n}\n\n.dim-footer {\n  color: #c3c3c3;\n  display: block;\n  font-size: 12px;\n  margin-top: 10px;\n  cursor: inherit;\n  position: relative;\n  top: -20px;\n  left: 24px;\n}\n\n.mat-chip {\n  margin: 0px 4px !important;\n}\n\n.branding-pic {\n  align-items: center;\n  height: 150px;\n}\n\n.mat-standard-chip .mat-chip-remove.mat-icon {\n  width: 13px !important;\n  height: 13px !important;\n  font-size: 13px !important;\n}\n\n.custom-columns .field {\n  margin-bottom: 15px !important;\n}\n\n.uploaded-document {\n  display: block;\n}\n\n.validations {\n  color: red;\n  font-size: x-small;\n}\n\n.unlimited {\n  float: right;\n  font-size: x-small;\n}\n\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n\n.ui.form .three.wide.field {\n  margin-bottom: 16px;\n}\n\n.inline-label {\n  display: inline !important;\n}\n\n.ui.header {\n  font-size: 18px;\n  font-weight: 400;\n  margin-bottom: 24px;\n}\n\n.ui.header.note-head {\n  margin-bottom: 12px;\n}\n\n.ui.header.basic-info-header {\n  margin-top: 20px;\n}\n\n.pos_basic_form .tax-section {\n  padding: 0px;\n}\n\n.pos_basic_form .tax_block {\n  border: 1px solid #D4D6DC;\n  border-radius: 5.12155px;\n  min-height: 390px;\n}\n\n.pos_basic_form .tax_block p {\n  padding-bottom: 24px;\n}\n\n::ng-deep.mat-form-field-underline {\n  display: none;\n}\n\n::ng-deep.mat-chip-list-wrapper {\n  margin: 0px !important;\n  position: relative !important;\n  top: -16px !important;\n}\n\n.payment-header {\n  margin-top: 12px !important;\n}\n\n.ui.checkbox {\n  padding-bottom: 10px;\n  margin: 5px;\n  display: block;\n  cursor: pointer;\n  pointer-events: auto;\n}\n\n.ui.checkbox label:before {\n  width: 15px;\n  height: 15px;\n  top: 1px;\n  left: 1px;\n}\n\n.ui.checkbox label:after {\n  font-size: 12px;\n  top: 1px;\n}\n\n.ui.checkbox input:checked ~ label {\n  cursor: pointer;\n  pointer-events: auto;\n}\n\n.ui.checkbox input:checked ~ label:before {\n  border: 1px solid #3867b1;\n}\n\n.ui.checkbox input:checked ~ label:after {\n  color: #3867b1;\n}\n\n.ui.segment.bg-grey {\n  margin-top: 12px;\n  background: transparent;\n  border: 1px solid #D4D6DC;\n}\n\n.ui.segment.bg-grey .ui.checkbox {\n  padding-bottom: 0px;\n  cursor: pointer;\n  pointer-events: auto;\n}\n\n.cardDetails {\n  margin-top: 15px;\n}\n\n.ui.fitted.divider {\n  margin: 30px 0px;\n}\n\n.ui.primary.button.brand_buttons {\n  background: rgba(67, 122, 218, 0.05) !important;\n  border: 1px dashed #437ADA !important;\n  color: #437ADA;\n  box-shadow: none !important;\n}\n\n.ui.primary.button.brand_buttons i.icon {\n  color: #437ADA;\n}\n\n.button.align {\n  margin-bottom: 25px;\n  margin-right: 25px;\n}\n\n.ui.primary.button.add_btn {\n  border: 1px solid #437ADA;\n  box-sizing: border-box;\n  border-radius: 7.24448px !important;\n  background: transparent !important;\n  color: #437ADA !important;\n  box-shadow: none !important;\n  margin-top: 22px;\n  width: auto !important;\n  min-width: auto;\n}\n\n.ui.primary.button.add_btn.reset {\n  border: 1px solid #4F4F4F;\n  color: #4F4F4F !important;\n}\n\n.notes-section textarea {\n  min-height: 60px;\n  height: auto !important;\n}\n\n.ui.transparent.margin-right-20 {\n  display: block;\n  margin-bottom: 10px;\n}\n\n.ui.grid.card-section {\n  width: 100%;\n}\n\n.ui.header {\n  color: #4F4F4F;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n  margin-left: 8px;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 160px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 10px;\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: 0px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.pos_btn-panel.spacing button {\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n}\n\n@media (max-width: 1280px) {\n  .card-section .eight.wide.column {\n    width: 100% !important;\n  }\n}\n\n@media (max-width: 1200px) and (min-width: 1024px) {\n  .ui.grid .gridstyle {\n    width: 100% !important;\n  }\n}\n\n@media (max-width: 1024px) and (min-width: 768px) {\n  .ui.grid .gridstyle {\n    width: 100% !important;\n  }\n}\n\n@media (max-width: 1009px) and (min-width: 808px) {\n  .ui.form .four.wide.field {\n    width: 33% !important;\n  }\n}\n\n@media (max-width: 807px) and (min-width: 768px) {\n  .ui.form .four.wide.field {\n    width: 50% !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .ui.grid .gridstyle {\n    width: 100% !important;\n  }\n  .ui.grid .gridstyle1 {\n    width: 100% !important;\n  }\n  .ui.grid .eight.wide.column .gridstyle2 {\n    width: 100% !important;\n  }\n  .ui.grid .gridstyle3 {\n    width: 100% !important;\n  }\n  .ui.grid .gridstyle4 {\n    width: 100% !important;\n  }\n}\n\n@media (max-width: 440px) and (min-width: 320px) {\n  .ui.form .nine.wide.field {\n    display: block;\n    width: 100% !important;\n  }\n  .ui.form .seven.wide.field {\n    display: block;\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Bvcy9iYXNpYy1pbmZvL0U6XFxCZWxhbFxccHJvamVjdHNcXHByb2R1Y3Rpb24tYnVpbGRcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxccG9zXFxiYXNpYy1pbmZvXFxiYXNpYy1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcG9zL2Jhc2ljLWluZm8vYmFzaWMtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQ0FBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQ0FBQTtFQUNBLHdDQUFBO0FDQ0o7O0FERUE7RUFDSSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURFQTtFQUNJLDRDQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTs7RUFFSSxrQkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7O0VBRUksV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNDSjs7QURTQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlGQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtBQ05KOztBRFVBO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLCtDQUFBO0FDUEo7O0FEVUE7RUFDSSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJB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UTtJQUNJLHNCQUFBO0VDaERWO0FBQ0Y7O0FEb0RBO0VBRVE7SUFDQSxxQkFBQTtFQ25ETjtBQUNGOztBRHVEQTtFQUVRO0lBQ0EscUJBQUE7RUN0RE47QUFDRjs7QUQwREE7RUFFUTtJQUNJLHNCQUFBO0VDekRWO0VEMkRNO0lBQ0ksc0JBQUE7RUN6RFY7RUQ0RFM7SUFDSSxzQkFBQTtFQzFEYjtFRDZETTtJQUNJLHNCQUFBO0VDM0RWO0VENkRNO0lBQ0ksc0JBQUE7RUMzRFY7QUFDRjs7QUQrREE7RUFFUTtJQUNJLGNBQUE7SUFDQSxzQkFBQTtFQzlEVjtFRGdFTTtJQUNJLGNBQUE7SUFDQSxzQkFBQTtFQzlEVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3Bvcy9iYXNpYy1pbmZvL2Jhc2ljLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXIge1xyXG4gICAgbWFyZ2luOiAwcHggMjBweCAwcHggMTVweDtcclxufVxyXG5cclxuLmFtZXhDYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmFyZVByZWZlcmVuY2VzdGFibGUge1xyXG4gICAgYm9yZGVyLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vdXRlcl9fYWRkLXBvc19fdGl0bGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQubWVudT4uaXRlbSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjg1NzE0MjlyZW0gMCAwIDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udWkuYm90dG9tLmF0dGFjaGVkLmFjdGl2ZS50YWIuc2VnbWVudCB7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxN3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTdweDtcclxufVxyXG5cclxuLnRhYi5zZWdtZW50IHtcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNFMEUwRTA7XHJcbn1cclxuXHJcbi50b3VyQ29kZV9idG4sXHJcbi5hZGRUb2dnX2J0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xyXG59XHJcblxyXG4udG91ckNvZGVfdGV4dCxcclxuLmFkZFRvZ2dfdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvcnBvcmF0ZV9pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGJvdHRvbTogMjhweDtcclxuICAgIGxlZnQ6IDlweDtcclxufVxyXG5cclxuLy8gLm91dGVyLWZvcm0sXHJcbi8vIC5vdXRlcl9jb3JwRm9ybSB7XHJcbi8vICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjODA4MDgwO1xyXG4vLyAgICAgbWFyZ2luOiA0NXB4IDMycHggMTExcHggMjVweDtcclxuLy8gfVxyXG4udWkuZm9ybS5wb3NfYmFzaWNfZm9ybSB7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMHB4IDNweCByZ2JhKDYwLCA2NCwgNjcsIDAuMyksIDAgNHB4IDhweCAycHggcmdiYSg2MCwgNjQsIDY3LCAwLjE1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQuOTYxNDFweDtcclxuICAgIG1hcmdpbjogMjRweCAyNHB4IDgwcHg7XHJcbiAgICAvLyBtYXgtd2lkdGg6IDEyMDBweDtcclxufVxyXG5cclxuZGl2LnVwbG9hZCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDEyM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgIzgwODA4MDtcclxuICAgIGJveC1zaGFkb3c6IDAgMC4yNXB4IDAuMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG5kaXYudXBsb2FkIGlucHV0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTIzcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmlsZV9jaG9vc2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMjdweDtcclxuICAgIGJvdHRvbTogNnB4O1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udXBsb2FkaW5JbWdfYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XHJcbn1cclxuXHJcbi51cGxvYWRpbkltZ19idG5fX3RleHQsXHJcbi5zYXZlLW5leHRfYnRuX190ZXh0IHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4uZmlsZV90YWJsZV9faW1nIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmVhZmI1ZTtcclxufVxyXG5cclxuLnNhdmUtbmV4dF9idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi51aS5wb2ludGluZy5zZWNvbmRhcnkubWVudSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5pdGVtLnN0ZXBwZXJfX3Byb2dyZXNzIHtcclxuICAgIHdpZHRoOiAxNjdweDtcclxufVxyXG5cclxuLnRhYi5zZWdtZW50LnN0ZXBwZXJfX3NlZ21lbnQtb3V0bGluZSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4ub2ZmaWNlLWluZm9faWNvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICByaWdodDogODVweDtcclxufVxyXG5cclxuLnBvc19hY2Nlc3MtcmlnaHRzIHtcclxuICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi5jYW5jZWxfYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0RjRGNEY7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5jYW5jZWxfYnRuX190ZXh0IHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaXNzdWVfZGF0ZSB7XHJcbiAgICB0ZXh0LWluZGVudDogMTdweDtcclxufVxyXG5cclxuLndpZGUuZmllbGQuc2FsZV9jaGVjayB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uYXNzaWduX2J0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uYXNzaWduX2J0bl9fdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxufVxyXG5cclxuLmNpcmNsZUljb24ge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQ4MDFDO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG59XHJcblxyXG4ucGx1c0ljb24ge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTNweDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24tY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICB3aWR0aDogMTlweDtcclxuICAgIGNvbG9yOiAjQzhDOEM4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M4QzhDODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1zdGVwLWhlYWRlcjpob3ZlcixcclxuIDo6bmctZGVlcC5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcclxuIDo6bmctZGVlcC5jZGstcHJvZ3JhbS1mb2N1c2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjI0KTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLXN0YXRlLW51bWJlci5tYXQtc3RlcC1pY29uLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzM4NjdCMTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLm5nLXN0YXItaW5zZXJ0ZWQge1xyXG4gICAgICAgIGNvbG9yOiAjMzg2N0IxO1xyXG4gICAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4vLyA6Om5nLWRlZXAubmctc3Rhci1pbnNlcnRlZCB7XHJcbi8vICAgICBwYWRkaW5nOiAwIDZweDtcclxuLy8gfVxyXG5cclxuOjpuZy1kZWVwLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICAvLyB3aWR0aDogNDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDBweCAzMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LWljb24ge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcclxuIDo6bmctZGVlcC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXHJcbiA6Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtc3RlcC1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzM4NjdiMTtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1ob3Jpem9udGFsLWNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIC8vIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG59XHJcblxyXG4ucG9zX2J0bi1wYW5lbCB7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyByaWdodDogNjhweDtcclxuICAgIC8vIGJvdHRvbTogOTdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIC5zZWNvbmRhcnkge1xyXG4gICAgICAgIC8vIHdpZHRoOiAxMDQuODdweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRGNEY0RjtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB9XHJcbiAgICAucHJpbWFyeSB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDEyNC44N3B4O1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUuMTIxNTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XHJcbiAgICAgICAgLy8gYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjYmNkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCB0cmFuc3BhcmVudCBpbnNldCwgMCAwIDAgMCByZ2JhKDM0LCAzNiwgMzgsIC4xNSkgaW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2VnbWVudCBwIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYmctZ3JleSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDFkYWRlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jaGlwLWxpc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCBncmV5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtY2hpcC1pbnB1dCB7XHJcbiAgICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlucHV0ZmlsZSB7XHJcbiAgICB3aWR0aDogMC4xcHg7XHJcbiAgICBoZWlnaHQ6IDAuMXB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLnRyYW5zcGFyZW50LFxyXG4udHJhbnNwYXJlbnQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXJnaW4tcmlnaHQtMjAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ubWFyZ2luLWJvdHRvbS0xNSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uZGltLWZvb3RlciB7XHJcbiAgICBjb2xvcjogI2MzYzNjMztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGN1cnNvcjogaW5oZXJpdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTIwcHg7XHJcbiAgICBsZWZ0OiAyNHB4O1xyXG59XHJcblxyXG4ubWF0LWNoaXAge1xyXG4gICAgbWFyZ2luOiAwcHggNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5icmFuZGluZy1waWMge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbn1cclxuXHJcbi5tYXQtc3RhbmRhcmQtY2hpcCAubWF0LWNoaXAtcmVtb3ZlLm1hdC1pY29uIHtcclxuICAgIHdpZHRoOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEzcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VzdG9tLWNvbHVtbnMgLmZpZWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVwbG9hZGVkLWRvY3VtZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udmFsaWRhdGlvbnMge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxufVxyXG5cclxuLnVubGltaXRlZCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbn1cclxuXHJcbi51aS5mb3JtIC5maWVsZD5sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICBjb2xvcjogIzE4MUIyMDtcclxuICAgIG1hcmdpbjogMHB4IDBweCA4cHg7XHJcbn1cclxuXHJcbi51aS5mb3JtIC50aHJlZS53aWRlLmZpZWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5pbmxpbmUtbGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51aS5oZWFkZXIge1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICBmb250LXdlaWdodDo0MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgJi5ub3RlLWhlYWQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICB9XHJcbiAgICAmLmJhc2ljLWluZm8taGVhZGVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucG9zX2Jhc2ljX2Zvcm0ge1xyXG4gICAgLnRheC1zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbiAgICAudGF4X2Jsb2NrIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRDRENkRDO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUuMTIxNTVweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzOTBweDtcclxuICAgICAgICAvLyBtYXgtaGVpZ2h0OiAzOTBweDtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtY2hpcC1saXN0LXdyYXBwZXIge1xyXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiAtMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGF5bWVudC1oZWFkZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udWkuY2hlY2tib3gge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICAgIGxhYmVsIHtcclxuICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgIC8vICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICB0b3A6IDFweDtcclxuICAgICAgICAgbGVmdDogMXB4O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgdG9wOiAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5wdXQ6Y2hlY2tlZH5sYWJlbCB7XHJcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg2N2IxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICMzODY3YjE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udWkuc2VnbWVudC5iZy1ncmV5IHtcclxuICAgIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNENEQ2REM7XHJcbiAgICAudWkuY2hlY2tib3gge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkRGV0YWlscyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4vLyAuc3BhY2luZyB7XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDIycHg7XHJcbi8vICAgICBwYWRkaW5nLXJpZ2h0OiAyMnB4O1xyXG4vLyB9XHJcblxyXG4udWkuZml0dGVkLmRpdmlkZXIge1xyXG4gICAgbWFyZ2luOiAzMHB4IDBweDtcclxufVxyXG5cclxuLnVpLnByaW1hcnkuYnV0dG9uLmJyYW5kX2J1dHRvbnMge1xyXG4gICAgLy8gaGVpZ2h0OiA4MnB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg2NywgMTIyLCAyMTgsIDAuMDUpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBkYXNoZWQgIzQzN0FEQSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM0MzdBREE7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBwYWRkaW5nLXRvcDogMThweDtcclxuICAgIC8vIG1pbi13aWR0aDogYXV0bztcclxuICAgIGkuaWNvbiB7XHJcbiAgICAgICAgLy8gZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgLy8gbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgLy8gbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICBjb2xvcjogIzQzN0FEQTtcclxuICAgIH1cclxufVxyXG5cclxuLmJ1dHRvbi5hbGlnbntcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi51aS5wcmltYXJ5LmJ1dHRvbi5hZGRfYnRuIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0MzdBREE7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNy4yNDQ0OHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM0MzdBREEgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4udWkucHJpbWFyeS5idXR0b24uYWRkX2J0bi5yZXNldCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNEY0RjRGO1xyXG4gICAgY29sb3I6ICM0RjRGNEYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vdGVzLXNlY3Rpb24ge1xyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS50cmFuc3BhcmVudC5tYXJnaW4tcmlnaHQtMjAge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4udWkuZ3JpZC5jYXJkLXNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi51aS5oZWFkZXJ7XHJcbiAgICBjb2xvcjogIzRGNEY0RlxyXG59XHJcblxyXG4udG9vbHRpcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvLyBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3R0b206IDEwMCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLnBvc19idG4tcGFuZWwuc3BhY2luZyB7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAuY2FyZC1zZWN0aW9uIHtcclxuICAgICAgICAuZWlnaHQud2lkZS5jb2x1bW4ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgICAgICAgICAudWkuZ3JpZHtcclxuICAgICAgICAgICAgICAuZ3JpZHN0eWxle1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6MTAyNHB4KSBhbmQgKG1pbi13aWR0aDo3NjhweCkge1xyXG4gICAgLnVpLmdyaWR7XHJcbiAgICAgICAgLmdyaWRzdHlsZXtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6MTAwOXB4KSBhbmQgKG1pbi13aWR0aDo4MDhweCkge1xyXG4gICAgLnVpLmZvcm0ge1xyXG4gICAgICAgIC5mb3VyLndpZGUuZmllbGQge1xyXG4gICAgICAgIHdpZHRoOiAzMyUhaW1wb3J0YW50O1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjgwN3B4KSBhbmQgKG1pbi13aWR0aDo3NjhweCkge1xyXG4gICAgLnVpLmZvcm0ge1xyXG4gICAgICAgIC5mb3VyLndpZGUuZmllbGQge1xyXG4gICAgICAgIHdpZHRoOiA1MCUhaW1wb3J0YW50O1xyXG4gICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjdweCkge1xyXG4gICAgLnVpLmdyaWR7XHJcbiAgICAgICAgLmdyaWRzdHlsZXtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmdyaWRzdHlsZTF7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5laWdodC53aWRlLmNvbHVtbntcclxuICAgICAgICAgICAuZ3JpZHN0eWxlMntcclxuICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ncmlkc3R5bGUze1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZ3JpZHN0eWxlNHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjQ0MHB4KSBhbmQgKG1pbi13aWR0aDozMjBweCkge1xyXG4gICAgLnVpLmZvcm17XHJcbiAgICAgICAgLm5pbmUud2lkZS5maWVsZHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7IFxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2V2ZW4ud2lkZS5maWVsZHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIEBtZWRpYShtYXgtd2lkdGg6Mzc1cHgpIGFuZCAobWluLXdpZHRoOjMyMHB4KSB7XHJcbi8vICAgICAudWkuZm9ybSB7XHJcbi8vICAgICAgICAgLmZvdXIud2lkZS5maWVsZCB7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG4vLyAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5cclxuIiwiLm91dGVyIHtcbiAgbWFyZ2luOiAwcHggMjBweCAwcHggMTVweDtcbn1cblxuLmFtZXhDYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvICFpbXBvcnRhbnQ7XG59XG5cbi5mYXJlUHJlZmVyZW5jZXN0YWJsZSB7XG4gIGJvcmRlci10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ub3V0ZXJfX2FkZC1wb3NfX3RpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cblxuLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4udWkudG9wLmF0dGFjaGVkLm1lbnUgPiAuaXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjg1NzE0MjlyZW0gMCAwIDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi51aS5ib3R0b20uYXR0YWNoZWQuYWN0aXZlLnRhYi5zZWdtZW50IHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxN3B4O1xufVxuXG4udGFiLnNlZ21lbnQge1xuICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuaHIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjRTBFMEUwO1xufVxuXG4udG91ckNvZGVfYnRuLFxuLmFkZFRvZ2dfYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xufVxuXG4udG91ckNvZGVfdGV4dCxcbi5hZGRUb2dnX3RleHQge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvcnBvcmF0ZV9pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE4cHg7XG4gIGJvdHRvbTogMjhweDtcbiAgbGVmdDogOXB4O1xufVxuXG4udWkuZm9ybS5wb3NfYmFzaWNfZm9ybSB7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDNweCByZ2JhKDYwLCA2NCwgNjcsIDAuMyksIDAgNHB4IDhweCAycHggcmdiYSg2MCwgNjQsIDY3LCAwLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogNC45NjE0MXB4O1xuICBtYXJnaW46IDI0cHggMjRweCA4MHB4O1xufVxuXG5kaXYudXBsb2FkIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTIzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjODA4MDgwO1xuICBib3gtc2hhZG93OiAwIDAuMjVweCAwLjFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuZGl2LnVwbG9hZCBpbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMjNweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5maWxlX2Nob29zZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMjdweDtcbiAgYm90dG9tOiA2cHg7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xufVxuXG4udXBsb2FkaW5JbWdfYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xufVxuXG4udXBsb2FkaW5JbWdfYnRuX190ZXh0LFxuLnNhdmUtbmV4dF9idG5fX3RleHQge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG5cbi5maWxlX3RhYmxlX19pbWcge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmVhZmI1ZTtcbn1cblxuLnNhdmUtbmV4dF9idG4ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnVpLnBvaW50aW5nLnNlY29uZGFyeS5tZW51IHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uaXRlbS5zdGVwcGVyX19wcm9ncmVzcyB7XG4gIHdpZHRoOiAxNjdweDtcbn1cblxuLnRhYi5zZWdtZW50LnN0ZXBwZXJfX3NlZ21lbnQtb3V0bGluZSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLm9mZmljZS1pbmZvX2ljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDg1cHg7XG59XG5cbi5wb3NfYWNjZXNzLXJpZ2h0cyB7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbn1cblxuLmNhbmNlbF9idG4ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RjRGNEY7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmNhbmNlbF9idG5fX3RleHQge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlzc3VlX2RhdGUge1xuICB0ZXh0LWluZGVudDogMTdweDtcbn1cblxuLndpZGUuZmllbGQuc2FsZV9jaGVjayB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5hc3NpZ25fYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5hc3NpZ25fYnRuX190ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xufVxuXG4uY2lyY2xlSWNvbiB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwRDgwMUM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5wbHVzSWNvbiB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi10b3A6IC0zcHg7XG59XG5cbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLWNvbnRlbnQge1xuICBoZWlnaHQ6IDE5cHg7XG4gIHdpZHRoOiAxOXB4O1xuICBjb2xvcjogI0M4QzhDODtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M4QzhDODtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG46Om5nLWRlZXAubWF0LXN0ZXAtaGVhZGVyOmhvdmVyLFxuOjpuZy1kZWVwLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuOjpuZy1kZWVwLmNkay1wcm9ncmFtLWZvY3VzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLXN0YXRlLW51bWJlci5tYXQtc3RlcC1pY29uLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMzg2N0IxO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLXN0YXRlLW51bWJlci5tYXQtc3RlcC1pY29uLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQgLm5nLXN0YXItaW5zZXJ0ZWQge1xuICBjb2xvcjogIzM4NjdCMTtcbn1cblxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24tY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG46Om5nLWRlZXAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXItY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHggMzAlO1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuXG46Om5nLWRlZXAubWF0LWljb24ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLFxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LXN0ZXAtbGFiZWwge1xuICBjb2xvcjogIzM4NjdiMTtcbn1cblxuOjpuZy1kZWVwLm1hdC1ob3Jpem9udGFsLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cblxuLnBvc19idG4tcGFuZWwge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5wb3NfYnRuLXBhbmVsIC5zZWNvbmRhcnkge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RjRGNEY7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5wb3NfYnRuLXBhbmVsIC5wcmltYXJ5IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1LjEyMTU1cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbiAgbWluLXdpZHRoOiBhdXRvO1xufVxuLnBvc19idG4tcGFuZWwgLnByaW1hcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjYmNkICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCB0cmFuc3BhcmVudCBpbnNldCwgMCAwIDAgMCByZ2JhKDM0LCAzNiwgMzgsIDAuMTUpIGluc2V0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLnNlZ21lbnQgcCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uYmctZ3JleSB7XG4gIGJhY2tncm91bmQ6ICNkMWRhZGU7XG59XG5cbi5leGFtcGxlLWNoaXAtbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDBweCBzb2xpZCBncmV5ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY2hpcC1pbnB1dCB7XG4gIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dGZpbGUge1xuICB3aWR0aDogMC4xcHg7XG4gIGhlaWdodDogMC4xcHg7XG4gIG9wYWNpdHk6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG59XG5cbi50cmFuc3BhcmVudCxcbi50cmFuc3BhcmVudDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXJnaW4tcmlnaHQtMjAge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5tYXJnaW4tYm90dG9tLTE1IHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmRpbS1mb290ZXIge1xuICBjb2xvcjogI2MzYzNjMztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY3Vyc29yOiBpbmhlcml0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIwcHg7XG4gIGxlZnQ6IDI0cHg7XG59XG5cbi5tYXQtY2hpcCB7XG4gIG1hcmdpbjogMHB4IDRweCAhaW1wb3J0YW50O1xufVxuXG4uYnJhbmRpbmctcGljIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLm1hdC1zdGFuZGFyZC1jaGlwIC5tYXQtY2hpcC1yZW1vdmUubWF0LWljb24ge1xuICB3aWR0aDogMTNweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEzcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tY29sdW1ucyAuZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi51cGxvYWRlZC1kb2N1bWVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udmFsaWRhdGlvbnMge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IHgtc21hbGw7XG59XG5cbi51bmxpbWl0ZWQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcbn1cblxuLnVpLmZvcm0gLmZpZWxkID4gbGFiZWwge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBjb2xvcjogIzE4MUIyMDtcbiAgbWFyZ2luOiAwcHggMHB4IDhweDtcbn1cblxuLnVpLmZvcm0gLnRocmVlLndpZGUuZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uaW5saW5lLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG59XG5cbi51aS5oZWFkZXIge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG4udWkuaGVhZGVyLm5vdGUtaGVhZCB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4udWkuaGVhZGVyLmJhc2ljLWluZm8taGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnBvc19iYXNpY19mb3JtIC50YXgtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5wb3NfYmFzaWNfZm9ybSAudGF4X2Jsb2NrIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q0RDZEQztcbiAgYm9yZGVyLXJhZGl1czogNS4xMjE1NXB4O1xuICBtaW4taGVpZ2h0OiAzOTBweDtcbn1cbi5wb3NfYmFzaWNfZm9ybSAudGF4X2Jsb2NrIHAge1xuICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbn1cblxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjo6bmctZGVlcC5tYXQtY2hpcC1saXN0LXdyYXBwZXIge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgdG9wOiAtMTZweCAhaW1wb3J0YW50O1xufVxuXG4ucGF5bWVudC1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi51aS5jaGVja2JveCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBtYXJnaW46IDVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG4udWkuY2hlY2tib3ggbGFiZWw6YmVmb3JlIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgdG9wOiAxcHg7XG4gIGxlZnQ6IDFweDtcbn1cbi51aS5jaGVja2JveCBsYWJlbDphZnRlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdG9wOiAxcHg7XG59XG4udWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cbi51aS5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YmVmb3JlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM4NjdiMTtcbn1cbi51aS5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YWZ0ZXIge1xuICBjb2xvcjogIzM4NjdiMTtcbn1cblxuLnVpLnNlZ21lbnQuYmctZ3JleSB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDRENkRDO1xufVxuLnVpLnNlZ21lbnQuYmctZ3JleSAudWkuY2hlY2tib3gge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4uY2FyZERldGFpbHMge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4udWkuZml0dGVkLmRpdmlkZXIge1xuICBtYXJnaW46IDMwcHggMHB4O1xufVxuXG4udWkucHJpbWFyeS5idXR0b24uYnJhbmRfYnV0dG9ucyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNjcsIDEyMiwgMjE4LCAwLjA1KSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBkYXNoZWQgIzQzN0FEQSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzQzN0FEQTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuLnVpLnByaW1hcnkuYnV0dG9uLmJyYW5kX2J1dHRvbnMgaS5pY29uIHtcbiAgY29sb3I6ICM0MzdBREE7XG59XG5cbi5idXR0b24uYWxpZ24ge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG59XG5cbi51aS5wcmltYXJ5LmJ1dHRvbi5hZGRfYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQzN0FEQTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNy4yNDQ0OHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDM3QURBICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMjJweDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiBhdXRvO1xufVxuXG4udWkucHJpbWFyeS5idXR0b24uYWRkX2J0bi5yZXNldCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0RjRGNEY7XG4gIGNvbG9yOiAjNEY0RjRGICFpbXBvcnRhbnQ7XG59XG5cbi5ub3Rlcy1zZWN0aW9uIHRleHRhcmVhIHtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi51aS50cmFuc3BhcmVudC5tYXJnaW4tcmlnaHQtMjAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnVpLmdyaWQuY2FyZC1zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi51aS5oZWFkZXIge1xuICBjb2xvcjogIzRGNEY0Rjtcbn1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogMTYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBib3R0b206IDEwMCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnBvc19idG4tcGFuZWwuc3BhY2luZyBidXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogMHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5jYXJkLXNlY3Rpb24gLmVpZ2h0LndpZGUuY29sdW1uIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC51aS5ncmlkIC5ncmlkc3R5bGUge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAudWkuZ3JpZCAuZ3JpZHN0eWxlIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAwOXB4KSBhbmQgKG1pbi13aWR0aDogODA4cHgpIHtcbiAgLnVpLmZvcm0gLmZvdXIud2lkZS5maWVsZCB7XG4gICAgd2lkdGg6IDMzJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogODA3cHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAudWkuZm9ybSAuZm91ci53aWRlLmZpZWxkIHtcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAudWkuZ3JpZCAuZ3JpZHN0eWxlIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC51aS5ncmlkIC5ncmlkc3R5bGUxIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC51aS5ncmlkIC5laWdodC53aWRlLmNvbHVtbiAuZ3JpZHN0eWxlMiB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICAudWkuZ3JpZCAuZ3JpZHN0eWxlMyB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICAudWkuZ3JpZCAuZ3JpZHN0eWxlNCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ0MHB4KSBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgLnVpLmZvcm0gLm5pbmUud2lkZS5maWVsZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICAudWkuZm9ybSAuc2V2ZW4ud2lkZS5maWVsZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/pos/basic-info/basic-info.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/layout/pos/basic-info/basic-info.component.ts ***!
    \***************************************************************/

  /*! exports provided: BasicInfoComponent */

  /***/
  function srcAppLayoutPosBasicInfoBasicInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicInfoComponent", function () {
      return BasicInfoComponent;
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


    var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/common.service */
    "./src/app/shared/services/common.service.ts");
    /* harmony import */


    var src_app_shared_services_pos_service_pos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/pos-service/pos-service */
    "./src/app/shared/services/pos-service/pos-service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var BasicInfoComponent = /*#__PURE__*/function () {
      function BasicInfoComponent(fb, commonService, posService, toastr, activeRoute, router) {
        var _this6 = this;

        _classCallCheck(this, BasicInfoComponent);

        this.fb = fb;
        this.commonService = commonService;
        this.posService = posService;
        this.toastr = toastr;
        this.activeRoute = activeRoute;
        this.router = router;
        this.countries = [];
        this.currencies = [];
        this.timezones = [];
        this.airports = [];
        this.isSubmitted = false;
        this.isChecked = false;
        this.nego = {};

        this.getAirportDetails = function () {
          _this6.commonService.getAirportsList().subscribe(function (res) {
            if (res.status) {
              _this6.airports = res.result;
            } else {
              _this6.toastr.error("".concat(res.msg), "".concat(res.msg), {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        };
      }

      _createClass(BasicInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.parentID = this.activeRoute.snapshot.params.id ? this.activeRoute.snapshot.params.id : '';
          this.initInfoForm();
          this.getCountries();
          this.getCurrencies();
          this.getTimeZones();
          this.getAirportDetails();
          this.setFormAsAgent();
        }
      }, {
        key: "initInfoForm",
        value: function initInfoForm() {
          var _this7 = this;

          this.posBasicInfoForm = this.fb.group({
            parent_id: this.parentID,
            corporate_type: ['Agent', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            domain_url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            country_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            timezone_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            payment_gateway: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            currency_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9._&%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            agent_code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')]],
            associated_office: [''],
            contact: [''],
            credit_limit: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')]],
            business_id: [''],
            numberOfUsers: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')]],
            iata_no: [''],
            domestictTaxCode: [''],
            domestictTaxPercentage: [''],
            domestictTaxCurrency: [''],
            domestictTaxAirport: [''],
            amexCard: [false, []],
            queue: [false, []],
            internationalTaxPercentage: [''],
            nonAirlineTax: [''],
            pos_negofares: this.fb.group({
              tourOperatorDeffered: [false],
              bulkContract: [false],
              marine: [false],
              tourOperatorSemiDeffered: [false],
              humanitarian: [false],
              publishedOnly: [false],
              privateOnly: [false],
              publishedAndPrivate: [false],
              all: [false]
            })
          });
          this.posBasicInfoForm.get('corporate_type').valueChanges.subscribe(function (val) {
            if (val == 'Agent') {
              _this7.setFormAsAgent();
            }

            if (val == 'B2C') {
              _this7.setFormAsB2C();
            }

            if (val == 'API') {
              _this7.setFormAsApiOut();
            }

            if (val == 'Mobile') {
              _this7.setFormAsMobile();
            }
          });
          this.posBasicInfoForm.get('amexCard').valueChanges.subscribe(function (val) {
            if (val && val == true) {
              _this7.posBasicInfoForm.addControl('amex_card', _this7.fb.group({
                cardHolderName: [null],
                cardHolderType: [null],
                cardnumber: [null],
                cardExpMonth: [null],
                cardExpYear: [null],
                cardcvv: [null]
              }));

              _this7.ngAfterViewInit();
            } else {
              _this7.posBasicInfoForm.removeControl('amex_card');
            }
          });
          this.posBasicInfoForm.get('queue').valueChanges.subscribe(function (val) {
            if (val && val == true) {
              _this7.posBasicInfoForm.addControl('queue_service', _this7.fb.group({
                queue1: [null],
                queue2: [null],
                queue3: [null]
              }));

              _this7.ngAfterViewInit();
            } else {
              _this7.posBasicInfoForm.removeControl('queue_service');
            }
          });
        }
      }, {
        key: "setFormAsAgent",
        value: function setFormAsAgent() {
          this.posBasicInfoForm.addControl('credit_limit', this.fb.control(''));
          this.posBasicInfoForm.addControl('numberOfUsers', this.fb.control(''));
          this.posBasicInfoForm.removeControl('domain_url');
        }
      }, {
        key: "setFormAsB2C",
        value: function setFormAsB2C() {
          this.posBasicInfoForm.addControl('domain_url', this.fb.control(''));
          this.posBasicInfoForm.removeControl('credit_limit');
          this.posBasicInfoForm.removeControl('numberOfUsers');
        }
      }, {
        key: "setFormAsMobile",
        value: function setFormAsMobile() {
          this.posBasicInfoForm.removeControl('credit_limit');
          this.posBasicInfoForm.removeControl('numberOfUsers');
          this.posBasicInfoForm.removeControl('domain_url');
        }
      }, {
        key: "setFormAsApiOut",
        value: function setFormAsApiOut() {
          this.posBasicInfoForm.addControl('credit_limit', this.fb.control(''));
          this.posBasicInfoForm.addControl('numberOfUsers', this.fb.control(''));
          this.posBasicInfoForm.removeControl('domain_url');
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          $('.ui.dropdown').dropdown();
          $('.dropdownThree').dropdown({
            placeholder: "Choose Airport"
          }); //     $(document).ready(function () {
          //       $('.ui.dropdown').dropdown();
          //       $('.ui.dropdown').dropdown('refresh');
          //       $('.ui.checkbox').checkbox();
          //       $('.ui.dropdownThree').dropdown();
          //  console.log("resulyttttttt")
          //       $(document).ready(function () {
          //         this._globals=localStorage.getItem('_globals');
          //         let token=JSON.parse(this._globals).token;
          //         $('.dropdownThree').dropdown({
          //           type: 'category',
          //           minCharacters : 2,
          //           maxCharacters : 3,
          //           responseAsync: true,
          //           apiSettings: {
          //             url: environment.serverURL + '/api/get-airports-cache/{query}',
          //             beforeXHR: function (xhr) {
          //               xhr.setRequestHeader('Authorization',token);
          //               return xhr;
          //             },
          //             onResponse: function (response) {
          //               const result = { success: true, results: [] };
          //               $.each(response.result, function (index, item) {
          //                 result['results'].push({
          //                   AirportCode: item.AirportCode, 
          //                   // value: item.AirportCode
          //                 })
          //               });
          //               return result;
          //             },
          //           },
          //         });
          //       });
          //     });
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          var _this8 = this;

          this.commonService.getCountryList().subscribe(function (result) {
            _this8.countries = result.countries;
          });
        }
      }, {
        key: "getCurrencies",
        value: function getCurrencies() {
          var _this9 = this;

          this.commonService.getCurrencyList().subscribe(function (result) {
            _this9.currencies = result.currencies;
          });
        }
      }, {
        key: "getTimeZones",
        value: function getTimeZones() {
          var _this10 = this;

          this.commonService.getTimeZones().subscribe(function (result) {
            _this10.timezones = result.timeZones;
          });
        }
      }, {
        key: "savePosBasicInfo",
        value: function savePosBasicInfo() {
          var _this11 = this;

          this.isSubmitted = true;

          if (this.posBasicInfoForm.invalid) {
            this.toastr.warning("Please fill all mandatory fields", "Error ", {
              timeOut: 10000,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });
            return;
          }

          this.posService.createNewPosUsingBasicInfo(this.posBasicInfoForm.value).subscribe(function (result) {
            if (result.status) {
              _this11.toastr.success("".concat(result.message), " ", {
                timeOut: 10000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });

              _this11.router.navigate(['/pos/pos-read/']);
            } else {
              _this11.toastr.error("".concat(result.message), " ", {
                timeOut: 10000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "checkAllnego",
        value: function checkAllnego() {
          this.isChecked = !this.isChecked;

          if (this.isChecked == true) {
            this.nego = {
              "tourOperatorDeffered": true,
              "bulkContract": true,
              "marine": true,
              "tourOperatorSemiDeffered": true,
              "publishedAndPrivate": true,
              "humanitarian": true,
              "publishedOnly": true,
              "privateOnly": true
            };
            this.posBasicInfoForm.patchValue({
              pos_negofares: this.nego
            });
          } else {
            this.nego = {
              "tourOperatorDeffered": false,
              "bulkContract": false,
              "marine": false,
              "tourOperatorSemiDeffered": false,
              "publishedAndPrivate": false,
              "humanitarian": false,
              "publishedOnly": false,
              "privateOnly": false
            };
            this.posBasicInfoForm.patchValue({
              pos_negofares: this.nego
            });
          }
        }
      }, {
        key: "gfc",
        get: function get() {
          return this.posBasicInfoForm.controls;
        }
      }]);

      return BasicInfoComponent;
    }();

    BasicInfoComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: src_app_shared_services_pos_service_pos_service__WEBPACK_IMPORTED_MODULE_4__["PosService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    BasicInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-basic-info',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./basic-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/basic-info/basic-info.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./basic-info.component.scss */
      "./src/app/layout/pos/basic-info/basic-info.component.scss"))["default"]]
    })], BasicInfoComponent);
    /***/
  },

  /***/
  "./src/app/layout/pos/branding-info/branding-info.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/layout/pos/branding-info/branding-info.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutPosBrandingInfoBrandingInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".outer {\n  margin: 0px 20px 0px 15px;\n}\n\n.amexCard {\n  background-color: gainsboro !important;\n}\n\n.farePreferencestable {\n  border-top: 0px !important;\n}\n\n.outer__add-pos__title {\n  margin: 0;\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #E0E0E0;\n}\n\n.tourCode_btn,\n.addTogg_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n}\n\n.tourCode_text,\n.addTogg_text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.corporate_input__placeholder-icon {\n  position: relative;\n  width: 18px;\n  bottom: 28px;\n  left: 9px;\n}\n\n.ui.form.pos_basic_form {\n  background: #fff;\n  box-shadow: 0 0px 3px rgba(60, 64, 67, 0.3), 0 4px 8px 2px rgba(60, 64, 67, 0.15);\n  border-radius: 4.96141px;\n  margin: 24px;\n}\n\ndiv.upload {\n  box-sizing: border-box;\n  height: 15px;\n  width: 123px;\n  border-radius: 3px;\n  background-color: #FFF;\n  border: 0.5px solid #808080;\n  box-shadow: 0 0.25px 0.1px 0 rgba(0, 0, 0, 0.5);\n}\n\ndiv.upload input {\n  display: block !important;\n  width: 123px !important;\n  height: 15px !important;\n  opacity: 0 !important;\n  overflow: hidden !important;\n}\n\n.file_choose {\n  position: relative;\n  left: 27px;\n  bottom: 6px;\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 9px;\n  line-height: 10px;\n}\n\n.uploadinImg_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n}\n\n.uploadinImg_btn__text,\n.save-next_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 12px;\n}\n\n.file_table__img {\n  border: none;\n  background-color: #dfeafb5e;\n}\n\n.save-next_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.field input::-webkit-input-placeholder {\n  font-size: 14px;\n}\n\n.field input::-moz-placeholder {\n  font-size: 14px;\n}\n\n.field input::-ms-input-placeholder {\n  font-size: 14px;\n}\n\n.field input::placeholder {\n  font-size: 14px;\n}\n\n.ui.pointing.secondary.menu {\n  border: none;\n}\n\n.item.stepper__progress {\n  width: 167px;\n}\n\n.tab.segment.stepper__segment-outline {\n  border: none;\n  box-shadow: none;\n}\n\n.office-info_icon {\n  position: relative;\n  top: 20px;\n  right: 85px;\n}\n\n.pos_access-rights {\n  color: #828282;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 11px;\n  line-height: 12px;\n}\n\n.cancel_btn {\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.cancel_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.issue_date {\n  text-indent: 17px;\n}\n\n.wide.field.sale_check {\n  margin-top: 10px;\n}\n\n.assign_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.assign_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n}\n\n.circleIcon {\n  height: 20px;\n  width: 20px;\n  background-color: #0D801C;\n  border-radius: 50%;\n  display: inline-block;\n  margin-top: 6px;\n}\n\n.plusIcon {\n  color: #FFF;\n  font-size: 17px;\n  font-weight: 100;\n  line-height: 28px;\n  text-align: center;\n  margin-left: 0px;\n  margin-top: -3px;\n}\n\n::ng-deep.mat-step-icon-content {\n  height: 19px;\n  width: 19px;\n  color: #C8C8C8;\n  background-color: #C8C8C8;\n  border-radius: 50%;\n}\n\n::ng-deep.mat-step-header:hover,\n::ng-deep.cdk-keyboard-focused,\n::ng-deep.cdk-program-focused {\n  background-color: transparent !important;\n}\n\n::ng-deep.mat-step-icon {\n  border: 1px solid rgba(0, 0, 0, 0.24);\n  background: transparent !important;\n}\n\n::ng-deep.mat-step-icon-state-number.mat-step-icon.mat-step-icon-selected {\n  border: 2px solid #3867B1;\n  background: transparent;\n}\n\n::ng-deep.mat-step-icon-state-number.mat-step-icon.mat-step-icon-selected .ng-star-inserted {\n  color: #3867B1;\n}\n\n::ng-deep.mat-step-icon-content {\n  background-color: transparent;\n}\n\n::ng-deep.ng-star-inserted {\n  padding: 0 6px;\n}\n\n::ng-deep.mat-horizontal-stepper-header-container {\n  background: #ffff;\n  width: 100%;\n  padding: 0px 30%;\n  margin-top: 32px;\n}\n\n::ng-deep.mat-icon {\n  display: none !important;\n}\n\n::ng-deep.mat-step-icon-selected,\n::ng-deep.mat-step-icon-state-done,\n::ng-deep.mat-step-icon-state-edit {\n  background-color: transparent !important;\n}\n\n::ng-deep.mat-step-label {\n  color: #3867b1;\n}\n\n::ng-deep.mat-horizontal-content-container {\n  margin-top: 32px;\n}\n\n.pos_btn-panel {\n  padding-bottom: 20px;\n  margin-bottom: 40px;\n}\n\n.pos_btn-panel .secondary {\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.pos_btn-panel .primary {\n  float: right;\n  width: auto !important;\n  border-radius: 5.12155px !important;\n  background-color: #437ADA;\n  color: #fff;\n  min-width: auto;\n}\n\n.pos_btn-panel .primary:hover {\n  background-color: #cacbcd !important;\n  box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34, 36, 38, 0.15) inset !important;\n  color: rgba(0, 0, 0, 0.8) !important;\n}\n\n.segment p {\n  padding-bottom: 10px;\n}\n\n.bg-grey {\n  background: #d1dade;\n}\n\n.example-chip-list {\n  width: 100%;\n  border: 0px solid grey !important;\n}\n\n.mat-chip-input {\n  border: 0px !important;\n  background: transparent !important;\n}\n\n.inputfile {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.transparent,\n.transparent:hover {\n  background: none;\n}\n\n.center {\n  text-align: center;\n}\n\n.margin-right-20 {\n  margin-right: 20px;\n}\n\n.margin-bottom-15 {\n  margin-bottom: 15px;\n}\n\n.dim-footer {\n  color: #c3c3c3;\n  display: block;\n  font-size: 12px;\n  margin-top: 10px;\n  cursor: inherit;\n  position: relative;\n  top: -20px;\n  left: 24px;\n}\n\n.mat-chip {\n  margin: 0px 4px !important;\n}\n\n.branding-pic {\n  align-items: center;\n  height: auto;\n  width: 90%;\n  margin-top: 10px;\n}\n\n.mat-standard-chip .mat-chip-remove.mat-icon {\n  width: 13px !important;\n  height: 13px !important;\n  font-size: 13px !important;\n}\n\n.custom-columns .field {\n  margin-bottom: 15px !important;\n}\n\n.uploaded-document {\n  display: block;\n}\n\n.validations {\n  color: red;\n  font-size: x-small;\n}\n\n.unlimited {\n  float: right;\n  font-size: x-small;\n}\n\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n\n.ui.form .three.wide.field {\n  margin-bottom: 16px;\n}\n\n.inline-label {\n  display: inline !important;\n}\n\n.ui.header {\n  margin: 24px 0px;\n  margin-top: 0px !important;\n  font-size: 20px;\n  font-weight: 400;\n  color: #4F4F4F !important;\n}\n\n.ui.header.note-head {\n  margin-bottom: 12px;\n}\n\n.ui.header.basic-info-header {\n  margin-top: 20px;\n}\n\n.pos_basic_form .tax-section {\n  padding: 0px;\n}\n\n.pos_basic_form .tax_block {\n  border: 1px solid #D4D6DC;\n  border-radius: 5.12155px;\n  min-height: 390px;\n}\n\n.pos_basic_form .tax_block p {\n  padding-bottom: 24px;\n}\n\n.bookings_btn-panel .ui.button {\n  margin-right: 12px;\n}\n\n::ng-deep.mat-form-field-underline {\n  display: none;\n}\n\n::ng-deep.mat-chip-list-wrapper {\n  margin: 0px !important;\n  position: relative !important;\n  top: -16px !important;\n}\n\n.payment-header {\n  margin-top: 12px !important;\n}\n\n.ui.checkbox {\n  padding-bottom: 10px;\n}\n\n.ui.checkbox label:before {\n  border-radius: 20px;\n}\n\n.ui.checkbox label:after {\n  font-size: 12px;\n  top: 1px;\n}\n\n.ui.checkbox input:checked ~ label:before {\n  border: 1px solid #3867b1;\n}\n\n.ui.checkbox input:checked ~ label:after {\n  color: #3867b1;\n}\n\n.ui.segment.bg-grey {\n  margin-top: 12px;\n  background: transparent;\n  border: 1px solid #D4D6DC;\n}\n\n.ui.segment.bg-grey .ui.checkbox {\n  padding-bottom: 0px;\n}\n\n.cardDetails {\n  margin-top: 15px;\n}\n\n.spacing {\n  padding-left: 22px;\n  padding-right: 22px;\n}\n\n.ui.fitted.divider {\n  margin: 30px 0px;\n}\n\n.ui.primary.button.brand_buttons {\n  background: rgba(67, 122, 218, 0.05) !important;\n  border: 1px dashed #437ADA !important;\n  color: #437ADA;\n  box-shadow: none !important;\n}\n\n.ui.primary.button.brand_buttons i.icon {\n  color: #437ADA;\n}\n\n.ui.primary.button.add_btn {\n  border: 1px solid #437ADA;\n  box-sizing: border-box;\n  border-radius: 7.24448px !important;\n  background: transparent !important;\n  color: #437ADA !important;\n  box-shadow: none !important;\n  margin-top: 22px;\n  width: auto !important;\n  min-width: auto;\n}\n\n.ui.primary.button.add_btn.reset {\n  border: 1px solid #4F4F4F;\n  color: #4F4F4F !important;\n}\n\n.notes-section textarea {\n  min-height: 60px;\n  height: auto !important;\n}\n\n.ui.transparent.margin-right-20 {\n  display: block;\n  margin-bottom: 10px;\n}\n\n.ui.grid.card-section {\n  width: 100%;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n  margin-left: 8px;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 160px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 10px;\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: 0px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.outer-form {\n  margin-bottom: 80px;\n}\n\n.pos_btn-panel.spacing button {\n  position: absolute;\n  right: 0px;\n  bottom: -64px;\n}\n\n.button_align {\n  margin-top: -30px;\n}\n\n.buttonstyle {\n  text-align: right;\n  padding-bottom: 15px;\n}\n\n.hide {\n  display: none;\n}\n\n.branding-info-form input[type=file], .branding-info-form .ui.form input[type=file] {\n  max-width: 25% !important;\n}\n\n@media (max-width: 991px) {\n  .buttonstyle {\n    text-align: right;\n  }\n}\n\n@media (max-width: 767px) {\n  .button1 {\n    padding-top: 20px;\n    text-align: left;\n  }\n}\n\n@media (max-width: 410px) and (min-width: 320px) {\n  .ui.form .dim-footer {\n    width: 50% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Bvcy9icmFuZGluZy1pbmZvL0U6XFxCZWxhbFxccHJvamVjdHNcXHByb2R1Y3Rpb24tYnVpbGRcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxccG9zXFxicmFuZGluZy1pbmZvXFxicmFuZGluZy1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcG9zL2JyYW5kaW5nLWluZm8vYnJhbmRpbmctaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQ0FBQTtBQ0NGOztBREVBO0VBQ0UsMEJBQUE7QUNDRjs7QURFQTtFQUNFLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQ0FBQTtFQUNBLHdDQUFBO0FDQ0Y7O0FERUE7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURFQTtFQUNFLDRDQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUNDRjs7QURFQTs7RUFFRSxrQkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7O0VBRUUsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNDRjs7QURTQTtFQUVFLGdCQUFBO0VBQ0EsaUZBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUNQRjs7QURXQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQ0FBQTtBQ1JGOztBRFdBO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtFQUNB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Ujs7QUR3REE7RUFDSTtJQUNJLGlCQUFBO0VDckROO0FBQ0Y7O0FEd0RBO0VBQ0U7SUFDRSxpQkFBQTtJQUNBLGdCQUFBO0VDdERGO0FBQ0Y7O0FEeURBO0VBRUk7SUFDRSxxQkFBQTtFQ3hESjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3Bvcy9icmFuZGluZy1pbmZvL2JyYW5kaW5nLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXIge1xyXG4gIG1hcmdpbjogMHB4IDIwcHggMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5hbWV4Q2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mYXJlUHJlZmVyZW5jZXN0YWJsZSB7XHJcbiAgYm9yZGVyLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vdXRlcl9fYWRkLXBvc19fdGl0bGUge1xyXG4gIG1hcmdpbjogMDtcclxuICBjb2xvcjogIzRGNEY0RjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxufVxyXG5cclxuLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQubWVudT4uaXRlbSB7XHJcbiAgYm9yZGVyLXJhZGl1czogLjI4NTcxNDI5cmVtIDAgMCAwO1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51aS5ib3R0b20uYXR0YWNoZWQuYWN0aXZlLnRhYi5zZWdtZW50IHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxN3B4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxN3B4O1xyXG59XHJcblxyXG4udGFiLnNlZ21lbnQge1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG5ociB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkICNFMEUwRTA7XHJcbn1cclxuXHJcbi50b3VyQ29kZV9idG4sXHJcbi5hZGRUb2dnX2J0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XHJcbn1cclxuXHJcbi50b3VyQ29kZV90ZXh0LFxyXG4uYWRkVG9nZ190ZXh0IHtcclxuICBjb2xvcjogI0ZGRjtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgYm90dG9tOiAyOHB4O1xyXG4gIGxlZnQ6IDlweDtcclxufVxyXG5cclxuLy8gLm91dGVyLWZvcm0sXHJcbi8vIC5vdXRlcl9jb3JwRm9ybSB7XHJcbi8vICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjODA4MDgwO1xyXG4vLyAgICAgbWFyZ2luOiA0NXB4IDMycHggMTExcHggMjVweDtcclxuLy8gfVxyXG4udWkuZm9ybS5wb3NfYmFzaWNfZm9ybSB7XHJcbiAgLy8gcGFkZGluZzogMHB4IDBweCAyNXB4IDBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMHB4IDNweCByZ2JhKDYwLCA2NCwgNjcsIDAuMyksIDAgNHB4IDhweCAycHggcmdiYSg2MCwgNjQsIDY3LCAwLjE1KTtcclxuICBib3JkZXItcmFkaXVzOiA0Ljk2MTQxcHg7XHJcbiAgbWFyZ2luOiAyNHB4O1xyXG4gIC8vIG1heC13aWR0aDogMTIwMHB4O1xyXG59XHJcblxyXG5kaXYudXBsb2FkIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGhlaWdodDogMTVweDtcclxuICB3aWR0aDogMTIzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjODA4MDgwO1xyXG4gIGJveC1zaGFkb3c6IDAgMC4yNXB4IDAuMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG5kaXYudXBsb2FkIGlucHV0IHtcclxuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAxMjNweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcclxuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWxlX2Nob29zZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDI3cHg7XHJcbiAgYm90dG9tOiA2cHg7XHJcbiAgY29sb3I6ICM0RjRGNEY7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udXBsb2FkaW5JbWdfYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcclxufVxyXG5cclxuLnVwbG9hZGluSW1nX2J0bl9fdGV4dCxcclxuLnNhdmUtbmV4dF9idG5fX3RleHQge1xyXG4gIGNvbG9yOiAjRkZGO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMTJweDtcclxufVxyXG5cclxuLmZpbGVfdGFibGVfX2ltZyB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmVhZmI1ZTtcclxufVxyXG5cclxuLnNhdmUtbmV4dF9idG4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4udWkucG9pbnRpbmcuc2Vjb25kYXJ5Lm1lbnUge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLml0ZW0uc3RlcHBlcl9fcHJvZ3Jlc3Mge1xyXG4gIHdpZHRoOiAxNjdweDtcclxufVxyXG5cclxuLnRhYi5zZWdtZW50LnN0ZXBwZXJfX3NlZ21lbnQtb3V0bGluZSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5vZmZpY2UtaW5mb19pY29uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAyMHB4O1xyXG4gIHJpZ2h0OiA4NXB4O1xyXG59XHJcblxyXG4ucG9zX2FjY2Vzcy1yaWdodHMge1xyXG4gIGNvbG9yOiAjODI4MjgyO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi5jYW5jZWxfYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRGNEY0RjtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5jYW5jZWxfYnRuX190ZXh0IHtcclxuICBjb2xvcjogI0ZGRjtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaXNzdWVfZGF0ZSB7XHJcbiAgdGV4dC1pbmRlbnQ6IDE3cHg7XHJcbn1cclxuXHJcbi53aWRlLmZpZWxkLnNhbGVfY2hlY2sge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5hc3NpZ25fYnRuIHtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5hc3NpZ25fYnRuX190ZXh0IHtcclxuICBjb2xvcjogI0ZGRjtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5jaXJjbGVJY29uIHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBEODAxQztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG5cclxuLnBsdXNJY29uIHtcclxuICBjb2xvcjogI0ZGRjtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICBsaW5lLWhlaWdodDogMjhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBtYXJnaW4tdG9wOiAtM3B4O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1jb250ZW50IHtcclxuICBoZWlnaHQ6IDE5cHg7XHJcbiAgd2lkdGg6IDE5cHg7XHJcbiAgY29sb3I6ICNDOEM4Qzg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M4QzhDODtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtc3RlcC1oZWFkZXI6aG92ZXIsXHJcbjo6bmctZGVlcC5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcclxuOjpuZy1kZWVwLmNkay1wcm9ncmFtLWZvY3VzZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4yNCk7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24tc3RhdGUtbnVtYmVyLm1hdC1zdGVwLWljb24ubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzM4NjdCMTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgLm5nLXN0YXItaW5zZXJ0ZWQge1xyXG4gICAgY29sb3I6ICMzODY3QjE7XHJcbiAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm5nLXN0YXItaW5zZXJ0ZWQge1xyXG4gIHBhZGRpbmc6IDAgNnB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXItY29udGFpbmVyIHtcclxuICAvLyB3aWR0aDogNDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDBweCAzMCU7XHJcbiAgbWFyZ2luLXRvcDogMzJweDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1pY29uIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLFxyXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1kb25lLFxyXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LXN0ZXAtbGFiZWwge1xyXG4gIGNvbG9yOiAjMzg2N2IxO1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LWhvcml6b250YWwtY29udGVudC1jb250YWluZXIge1xyXG4gIC8vIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgbWFyZ2luLXRvcDogMzJweDtcclxufVxyXG5cclxuLnBvc19idG4tcGFuZWwge1xyXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyByaWdodDogNjhweDtcclxuICAvLyBib3R0b206IDk3cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuXHJcbiAgLnNlY29uZGFyeSB7XHJcbiAgICAvLyB3aWR0aDogMTA0Ljg3cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0RjRGO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIH1cclxuXHJcbiAgLnByaW1hcnkge1xyXG4gICAgLy8gd2lkdGg6IDEyNC44N3B4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUuMTIxNTVweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzN0FEQTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgLy8gYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IGF1dG87XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWNiY2QgIWltcG9ydGFudDtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHRyYW5zcGFyZW50IGluc2V0LCAwIDAgMCAwIHJnYmEoMzQsIDM2LCAzOCwgLjE1KSBpbnNldCAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuOCkgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zZWdtZW50IHAge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYmctZ3JleSB7XHJcbiAgYmFja2dyb3VuZDogI2QxZGFkZTtcclxufVxyXG5cclxuLmV4YW1wbGUtY2hpcC1saXN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDBweCBzb2xpZCBncmV5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtY2hpcC1pbnB1dCB7XHJcbiAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXRmaWxlIHtcclxuICB3aWR0aDogMC4xcHg7XHJcbiAgaGVpZ2h0OiAwLjFweDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4udHJhbnNwYXJlbnQsXHJcbi50cmFuc3BhcmVudDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWFyZ2luLXJpZ2h0LTIwIHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5tYXJnaW4tYm90dG9tLTE1IHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uZGltLWZvb3RlciB7XHJcbiAgY29sb3I6ICNjM2MzYzM7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgY3Vyc29yOiBpbmhlcml0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0yMHB4O1xyXG4gIGxlZnQ6IDI0cHg7XHJcbn1cclxuXHJcbi5tYXQtY2hpcCB7XHJcbiAgbWFyZ2luOiAwcHggNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5icmFuZGluZy1waWMge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLm1hdC1zdGFuZGFyZC1jaGlwIC5tYXQtY2hpcC1yZW1vdmUubWF0LWljb24ge1xyXG4gIHdpZHRoOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20tY29sdW1ucyAuZmllbGQge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVwbG9hZGVkLWRvY3VtZW50IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnZhbGlkYXRpb25zIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxufVxyXG5cclxuLnVubGltaXRlZCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxufVxyXG5cclxuLnVpLmZvcm0gLmZpZWxkPmxhYmVsIHtcclxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gIGNvbG9yOiAjMTgxQjIwO1xyXG4gIG1hcmdpbjogMHB4IDBweCA4cHg7XHJcbn1cclxuXHJcbi51aS5mb3JtIC50aHJlZS53aWRlLmZpZWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4uaW5saW5lLWxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLmhlYWRlciB7XHJcbiAgbWFyZ2luOiAyNHB4IDBweDtcclxuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogIzRGNEY0RiAhaW1wb3J0YW50O1xyXG5cclxuICAmLm5vdGUtaGVhZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgJi5iYXNpYy1pbmZvLWhlYWRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnBvc19iYXNpY19mb3JtIHtcclxuICAudGF4LXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gIH1cclxuXHJcbiAgLnRheF9ibG9jayB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDRENkRDO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNS4xMjE1NXB4O1xyXG4gICAgbWluLWhlaWdodDogMzkwcHg7XHJcblxyXG4gICAgLy8gbWF4LWhlaWdodDogMzkwcHg7XHJcbiAgICBwIHtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYm9va2luZ3NfYnRuLXBhbmVsIHtcclxuICAudWkuYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtY2hpcC1saXN0LXdyYXBwZXIge1xyXG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgdG9wOiAtMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGF5bWVudC1oZWFkZXIge1xyXG4gIG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLmNoZWNrYm94IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuXHJcbiAgbGFiZWwge1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIHRvcDogMXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5wdXQ6Y2hlY2tlZH5sYWJlbCB7XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODY3YjE7XHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIGNvbG9yOiAjMzg2N2IxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnVpLnNlZ21lbnQuYmctZ3JleSB7XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRDRENkRDO1xyXG5cclxuICAudWkuY2hlY2tib3gge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJkRGV0YWlscyB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLnNwYWNpbmcge1xyXG4gIHBhZGRpbmctbGVmdDogMjJweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyMnB4O1xyXG59XHJcblxyXG4udWkuZml0dGVkLmRpdmlkZXIge1xyXG4gIG1hcmdpbjogMzBweCAwcHg7XHJcbn1cclxuXHJcbi51aS5wcmltYXJ5LmJ1dHRvbi5icmFuZF9idXR0b25zIHtcclxuICAvLyBoZWlnaHQ6IDgycHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg2NywgMTIyLCAyMTgsIDAuMDUpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggZGFzaGVkICM0MzdBREEgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzQzN0FEQTtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcblxyXG4gIC8vIHBhZGRpbmctdG9wOiAxOHB4O1xyXG4gIC8vIG1pbi13aWR0aDogYXV0bztcclxuICBpLmljb24ge1xyXG4gICAgLy8gZGlzcGxheTogYmxvY2s7XHJcbiAgICAvLyBtYXJnaW46IDAgYXV0bztcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICBjb2xvcjogIzQzN0FEQTtcclxuICB9XHJcbn1cclxuXHJcbi51aS5wcmltYXJ5LmJ1dHRvbi5hZGRfYnRuIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNDM3QURBO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNy4yNDQ0OHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzQzN0FEQSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgbWluLXdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4udWkucHJpbWFyeS5idXR0b24uYWRkX2J0bi5yZXNldCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzRGNEY0RjtcclxuICBjb2xvcjogIzRGNEY0RiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubm90ZXMtc2VjdGlvbiB7XHJcbiAgdGV4dGFyZWEge1xyXG4gICAgbWluLWhlaWdodDogNjBweDtcclxuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnVpLnRyYW5zcGFyZW50Lm1hcmdpbi1yaWdodC0yMCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnVpLmdyaWQuY2FyZC1zZWN0aW9uIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRvb2x0aXAge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgLy8gZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIHdpZHRoOiAxNjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxuICBib3R0b206IDEwMCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLm91dGVyLWZvcm0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbn1cclxuXHJcbi5wb3NfYnRuLXBhbmVsLnNwYWNpbmcge1xyXG4gIGJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgYm90dG9tOiAtNjRweDtcclxuICB9XHJcbn1cclxuXHJcbi5idXR0b25fYWxpZ24ge1xyXG4gIG1hcmdpbi10b3A6IC0zMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uc3R5bGUge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uaGlkZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmJyYW5kaW5nLWluZm8tZm9ybSB7XHJcbiAgICBpbnB1dFt0eXBlPVwiZmlsZVwiXSwgLnVpLmZvcm0gaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xyXG4gICAgICAgIG1heC13aWR0aDogMjUlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjk5MXB4KXtcclxuICAgIC5idXR0b25zdHlsZXtcclxuICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgLmJ1dHRvbjEge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo0MTBweCkgYW5kIChtaW4td2lkdGg6MzIwcHgpIHtcclxuICAudWkuZm9ybSB7XHJcbiAgICAuZGltLWZvb3RlciB7XHJcbiAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIEBtZWRpYShtYXgtd2lkdGg6OTkxcHgpe1xyXG4vLyAgICAgLnVpLmZvcm17XHJcbi8vICAgICAgICAgLmZvcm0taW5uZXJ7XHJcbi8vICAgICAgICAgICAgIC5maWVsZHN7XHJcbi8vICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgICAgICAgICAgICAgLmJyYW5ke1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuLy8gICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICAuYnV0dG9uc3R5bGV7XHJcbi8vICAgICAgICAgdGV4dC1hbGlnbjpyaWdodDtcclxuLy8gICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuLy8gICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbiIsIi5vdXRlciB7XG4gIG1hcmdpbjogMHB4IDIwcHggMHB4IDE1cHg7XG59XG5cbi5hbWV4Q2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybyAhaW1wb3J0YW50O1xufVxuXG4uZmFyZVByZWZlcmVuY2VzdGFibGUge1xuICBib3JkZXItdG9wOiAwcHggIWltcG9ydGFudDtcbn1cblxuLm91dGVyX19hZGQtcG9zX190aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLnVpLnRvcC5hdHRhY2hlZC5tZW51ID4gLml0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwLjI4NTcxNDI5cmVtIDAgMCAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xufVxuXG4udWkuYm90dG9tLmF0dGFjaGVkLmFjdGl2ZS50YWIuc2VnbWVudCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE3cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTdweDtcbn1cblxuLnRhYi5zZWdtZW50IHtcbiAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbmhyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGJvcmRlcjogMC41cHggc29saWQgI0UwRTBFMDtcbn1cblxuLnRvdXJDb2RlX2J0bixcbi5hZGRUb2dnX2J0biB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbn1cblxuLnRvdXJDb2RlX3RleHQsXG4uYWRkVG9nZ190ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxOHB4O1xuICBib3R0b206IDI4cHg7XG4gIGxlZnQ6IDlweDtcbn1cblxuLnVpLmZvcm0ucG9zX2Jhc2ljX2Zvcm0ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDBweCAzcHggcmdiYSg2MCwgNjQsIDY3LCAwLjMpLCAwIDRweCA4cHggMnB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDQuOTYxNDFweDtcbiAgbWFyZ2luOiAyNHB4O1xufVxuXG5kaXYudXBsb2FkIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTIzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjODA4MDgwO1xuICBib3gtc2hhZG93OiAwIDAuMjVweCAwLjFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuZGl2LnVwbG9hZCBpbnB1dCB7XG4gIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMjNweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi5maWxlX2Nob29zZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMjdweDtcbiAgYm90dG9tOiA2cHg7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA5cHg7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xufVxuXG4udXBsb2FkaW5JbWdfYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xufVxuXG4udXBsb2FkaW5JbWdfYnRuX190ZXh0LFxuLnNhdmUtbmV4dF9idG5fX3RleHQge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG5cbi5maWxlX3RhYmxlX19pbWcge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZmVhZmI1ZTtcbn1cblxuLnNhdmUtbmV4dF9idG4ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnVpLnBvaW50aW5nLnNlY29uZGFyeS5tZW51IHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uaXRlbS5zdGVwcGVyX19wcm9ncmVzcyB7XG4gIHdpZHRoOiAxNjdweDtcbn1cblxuLnRhYi5zZWdtZW50LnN0ZXBwZXJfX3NlZ21lbnQtb3V0bGluZSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLm9mZmljZS1pbmZvX2ljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMjBweDtcbiAgcmlnaHQ6IDg1cHg7XG59XG5cbi5wb3NfYWNjZXNzLXJpZ2h0cyB7XG4gIGNvbG9yOiAjODI4MjgyO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBsaW5lLWhlaWdodDogMTJweDtcbn1cblxuLmNhbmNlbF9idG4ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RjRGNEY7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmNhbmNlbF9idG5fX3RleHQge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmlzc3VlX2RhdGUge1xuICB0ZXh0LWluZGVudDogMTdweDtcbn1cblxuLndpZGUuZmllbGQuc2FsZV9jaGVjayB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5hc3NpZ25fYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5hc3NpZ25fYnRuX190ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xufVxuXG4uY2lyY2xlSWNvbiB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwRDgwMUM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG5cbi5wbHVzSWNvbiB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIG1hcmdpbi10b3A6IC0zcHg7XG59XG5cbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLWNvbnRlbnQge1xuICBoZWlnaHQ6IDE5cHg7XG4gIHdpZHRoOiAxOXB4O1xuICBjb2xvcjogI0M4QzhDODtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0M4QzhDODtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG46Om5nLWRlZXAubWF0LXN0ZXAtaGVhZGVyOmhvdmVyLFxuOjpuZy1kZWVwLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuOjpuZy1kZWVwLmNkay1wcm9ncmFtLWZvY3VzZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLXN0YXRlLW51bWJlci5tYXQtc3RlcC1pY29uLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMzg2N0IxO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLXN0YXRlLW51bWJlci5tYXQtc3RlcC1pY29uLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQgLm5nLXN0YXItaW5zZXJ0ZWQge1xuICBjb2xvcjogIzM4NjdCMTtcbn1cblxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24tY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG46Om5nLWRlZXAubmctc3Rhci1pbnNlcnRlZCB7XG4gIHBhZGRpbmc6IDAgNnB4O1xufVxuXG46Om5nLWRlZXAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXItY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmY7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwcHggMzAlO1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuXG46Om5nLWRlZXAubWF0LWljb24ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLFxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LXN0ZXAtbGFiZWwge1xuICBjb2xvcjogIzM4NjdiMTtcbn1cblxuOjpuZy1kZWVwLm1hdC1ob3Jpem9udGFsLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cblxuLnBvc19idG4tcGFuZWwge1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbi5wb3NfYnRuLXBhbmVsIC5zZWNvbmRhcnkge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RjRGNEY7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5wb3NfYnRuLXBhbmVsIC5wcmltYXJ5IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1LjEyMTU1cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzN0FEQTtcbiAgY29sb3I6ICNmZmY7XG4gIG1pbi13aWR0aDogYXV0bztcbn1cbi5wb3NfYnRuLXBhbmVsIC5wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhY2JjZCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggdHJhbnNwYXJlbnQgaW5zZXQsIDAgMCAwIDAgcmdiYSgzNCwgMzYsIDM4LCAwLjE1KSBpbnNldCAhaW1wb3J0YW50O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5zZWdtZW50IHAge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmJnLWdyZXkge1xuICBiYWNrZ3JvdW5kOiAjZDFkYWRlO1xufVxuXG4uZXhhbXBsZS1jaGlwLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwcHggc29saWQgZ3JleSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWNoaXAtaW5wdXQge1xuICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXRmaWxlIHtcbiAgd2lkdGg6IDAuMXB4O1xuICBoZWlnaHQ6IDAuMXB4O1xuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4udHJhbnNwYXJlbnQsXG4udHJhbnNwYXJlbnQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFyZ2luLXJpZ2h0LTIwIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ubWFyZ2luLWJvdHRvbS0xNSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5kaW0tZm9vdGVyIHtcbiAgY29sb3I6ICNjM2MzYzM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGN1cnNvcjogaW5oZXJpdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAyNHB4O1xufVxuXG4ubWF0LWNoaXAge1xuICBtYXJnaW46IDBweCA0cHggIWltcG9ydGFudDtcbn1cblxuLmJyYW5kaW5nLXBpYyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLm1hdC1zdGFuZGFyZC1jaGlwIC5tYXQtY2hpcC1yZW1vdmUubWF0LWljb24ge1xuICB3aWR0aDogMTNweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEzcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tY29sdW1ucyAuZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi51cGxvYWRlZC1kb2N1bWVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udmFsaWRhdGlvbnMge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IHgtc21hbGw7XG59XG5cbi51bmxpbWl0ZWQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcbn1cblxuLnVpLmZvcm0gLmZpZWxkID4gbGFiZWwge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBjb2xvcjogIzE4MUIyMDtcbiAgbWFyZ2luOiAwcHggMHB4IDhweDtcbn1cblxuLnVpLmZvcm0gLnRocmVlLndpZGUuZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uaW5saW5lLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG59XG5cbi51aS5oZWFkZXIge1xuICBtYXJnaW46IDI0cHggMHB4O1xuICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzRGNEY0RiAhaW1wb3J0YW50O1xufVxuLnVpLmhlYWRlci5ub3RlLWhlYWQge1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuLnVpLmhlYWRlci5iYXNpYy1pbmZvLWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5wb3NfYmFzaWNfZm9ybSAudGF4LXNlY3Rpb24ge1xuICBwYWRkaW5nOiAwcHg7XG59XG4ucG9zX2Jhc2ljX2Zvcm0gLnRheF9ibG9jayB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNENEQ2REM7XG4gIGJvcmRlci1yYWRpdXM6IDUuMTIxNTVweDtcbiAgbWluLWhlaWdodDogMzkwcHg7XG59XG4ucG9zX2Jhc2ljX2Zvcm0gLnRheF9ibG9jayBwIHtcbiAgcGFkZGluZy1ib3R0b206IDI0cHg7XG59XG5cbi5ib29raW5nc19idG4tcGFuZWwgLnVpLmJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjo6bmctZGVlcC5tYXQtY2hpcC1saXN0LXdyYXBwZXIge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgdG9wOiAtMTZweCAhaW1wb3J0YW50O1xufVxuXG4ucGF5bWVudC1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi51aS5jaGVja2JveCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLnVpLmNoZWNrYm94IGxhYmVsOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4udWkuY2hlY2tib3ggbGFiZWw6YWZ0ZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRvcDogMXB4O1xufVxuLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpiZWZvcmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzg2N2IxO1xufVxuLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbDphZnRlciB7XG4gIGNvbG9yOiAjMzg2N2IxO1xufVxuXG4udWkuc2VnbWVudC5iZy1ncmV5IHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNENEQ2REM7XG59XG4udWkuc2VnbWVudC5iZy1ncmV5IC51aS5jaGVja2JveCB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5jYXJkRGV0YWlscyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5zcGFjaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAyMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMnB4O1xufVxuXG4udWkuZml0dGVkLmRpdmlkZXIge1xuICBtYXJnaW46IDMwcHggMHB4O1xufVxuXG4udWkucHJpbWFyeS5idXR0b24uYnJhbmRfYnV0dG9ucyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNjcsIDEyMiwgMjE4LCAwLjA1KSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBkYXNoZWQgIzQzN0FEQSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzQzN0FEQTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuLnVpLnByaW1hcnkuYnV0dG9uLmJyYW5kX2J1dHRvbnMgaS5pY29uIHtcbiAgY29sb3I6ICM0MzdBREE7XG59XG5cbi51aS5wcmltYXJ5LmJ1dHRvbi5hZGRfYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQzN0FEQTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNy4yNDQ0OHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDM3QURBICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMjJweDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiBhdXRvO1xufVxuXG4udWkucHJpbWFyeS5idXR0b24uYWRkX2J0bi5yZXNldCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0RjRGNEY7XG4gIGNvbG9yOiAjNEY0RjRGICFpbXBvcnRhbnQ7XG59XG5cbi5ub3Rlcy1zZWN0aW9uIHRleHRhcmVhIHtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi51aS50cmFuc3BhcmVudC5tYXJnaW4tcmlnaHQtMjAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnVpLmdyaWQuY2FyZC1zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDE2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgYm90dG9tOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5vdXRlci1mb3JtIHtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbn1cblxuLnBvc19idG4tcGFuZWwuc3BhY2luZyBidXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogLTY0cHg7XG59XG5cbi5idXR0b25fYWxpZ24ge1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cblxuLmJ1dHRvbnN0eWxlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG4uaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5icmFuZGluZy1pbmZvLWZvcm0gaW5wdXRbdHlwZT1maWxlXSwgLmJyYW5kaW5nLWluZm8tZm9ybSAudWkuZm9ybSBpbnB1dFt0eXBlPWZpbGVdIHtcbiAgbWF4LXdpZHRoOiAyNSUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5idXR0b25zdHlsZSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYnV0dG9uMSB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQxMHB4KSBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgLnVpLmZvcm0gLmRpbS1mb290ZXIge1xuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/pos/branding-info/branding-info.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/layout/pos/branding-info/branding-info.component.ts ***!
    \*********************************************************************/

  /*! exports provided: BrandingInfoComponent */

  /***/
  function srcAppLayoutPosBrandingInfoBrandingInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BrandingInfoComponent", function () {
      return BrandingInfoComponent;
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


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/common.service */
    "./src/app/shared/services/common.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_pos_service_pos_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/pos-service/pos-service */
    "./src/app/shared/services/pos-service/pos-service.ts");

    var BrandingInfoComponent = /*#__PURE__*/function () {
      function BrandingInfoComponent(fb, toastr, CommonService, activeRoute, posService, router) {
        _classCallCheck(this, BrandingInfoComponent);

        this.fb = fb;
        this.toastr = toastr;
        this.CommonService = CommonService;
        this.activeRoute = activeRoute;
        this.posService = posService;
        this.router = router;
        this.isSubmitted = false;
        this.posInfo = {};
      }

      _createClass(BrandingInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.brandingInfoForm = this.fb.group({
            organisation_id: [''],
            corporate_type: [''],
            image_website: [''],
            image_invoice: [''],
            image_email: [''],
            image_file1: [''],
            image_file2: [''],
            image_file3: [''],
            image_file4: [''],
            terms_conditions: [''],
            tab: ['branding']
          });
          this.organisation_ID = this.activeRoute.snapshot.params.id;
          this.getOrganisationInfo(this.organisation_ID);
        }
      }, {
        key: "storeBrandingInfo",
        value: function storeBrandingInfo() {
          var _this12 = this;

          this.posService.updatePosDetails(this.brandingInfoForm.value).subscribe(function (result) {
            if (result.status) {
              _this12.toastr.success("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-top-right'
              });

              _this12.router.navigate(['/pos/basic-edit/' + _this12.organisation_ID]);
            } else {
              _this12.toastr.error("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-top-right'
              });
            }
          });
        }
      }, {
        key: "uploadImage",
        value: function uploadImage(files, field) {
          var _this13 = this;

          var mimeType = files[0].type;
          var file_size = files[0].size;

          if (file_size > 5e+6) {
            this.toastr.error("File size should not be more than 5 MB", "Error ", {
              timeOut: 5000,
              progressBar: false,
              positionClass: 'toast-top-right'
            });
            return;
          }

          if (mimeType.match(/image\/*/) == null) {
            this.toastr.error("Invalid image format", "Error ", {
              timeOut: 5000,
              progressBar: false,
              positionClass: 'toast-top-right'
            });
            return;
          }

          var reader = new FileReader();
          reader.readAsDataURL(files[0]);

          reader.onload = function (_event) {
            _this13.CommonService.uploadImagetoAWS(reader.result).subscribe(function (result) {
              if (field == 'officeLogo') {
                _this13.brandingInfoForm.patchValue({
                  image_website: result.image
                });
              }

              if (field == 'brandingInvoice') {
                _this13.brandingInfoForm.patchValue({
                  image_invoice: result.image
                });
              }

              if (field == 'brandingSignature') {
                _this13.brandingInfoForm.patchValue({
                  image_email: result.image
                });
              }
            }, function (err) {
              _this13.toastr.error("Error uploading image, Try any other image", "Error ", {
                timeOut: 5000,
                progressBar: false,
                positionClass: 'toast-top-right'
              });
            });
          };
        }
      }, {
        key: "uploadPDF",
        value: function uploadPDF(files, field) {
          var _this14 = this;

          if (files.length === 0) return;
          var mimeType = files[0].type;
          var file_size = files[0].size;

          if (file_size > 5e+6) {
            this.toastr.error("File size should not be more than 5 MB", "Error ", {
              timeOut: 5000,
              progressBar: false,
              positionClass: 'toast-top-right'
            });
            return;
          }

          if (mimeType.match(/pdf\/*/) == null) {
            this.toastr.error("Invalid File format", "Error ", {
              timeOut: 5000,
              progressBar: false,
              positionClass: 'toast-top-right'
            });
            return;
          }

          var reader = new FileReader();
          reader.readAsDataURL(files[0]);

          reader.onload = function (_event) {
            _this14.CommonService.uploadPDFtoAWS(reader.result).subscribe(function (result) {
              if (field == 'image_file1') {
                _this14.brandingInfoForm.patchValue({
                  image_file1: result.pdf
                });
              }

              if (field == 'image_file2') {
                _this14.brandingInfoForm.patchValue({
                  image_file2: result.pdf
                });
              }

              if (field == 'image_file3') {
                _this14.brandingInfoForm.patchValue({
                  image_file3: result.pdf
                });
              }

              if (field == 'image_file4') {
                _this14.brandingInfoForm.patchValue({
                  image_file4: result.pdf
                });
              }
            }, function (err) {
              console.log('erer ', err);
            });
          };
        }
      }, {
        key: "getOrganisationInfo",
        value: function getOrganisationInfo(organisation_ID) {
          var _this15 = this;

          this.posService.getPosDetails(organisation_ID).subscribe(function (result) {
            if (result.status) {
              _this15.posInfo = result.result;
              if (_this15.posInfo.corporate_type && _this15.posInfo.corporate_type != null && _this15.posInfo.corporate_type != '') _this15.corporate_type = _this15.posInfo.corporate_type;

              _this15.brandingInfoForm.patchValue({
                organisation_id: _this15.organisation_ID,
                corporate_type: _this15.posInfo.corporate_type,
                image_website: _this15.posInfo.image_website,
                image_invoice: _this15.posInfo.image_invoice,
                image_email: _this15.posInfo.image_email,
                image_file1: _this15.posInfo.image_file1,
                image_file2: _this15.posInfo.image_file2,
                image_file3: _this15.posInfo.image_file3,
                image_file4: _this15.posInfo.image_file4,
                terms_conditions: _this15.posInfo.terms_conditions
              }); // this.ngAfterViewInit();

            }
          });
        }
      }, {
        key: "cancelBranding",
        value: function cancelBranding() {
          this.router.navigate(['/pos/basic-edit/', this.organisation_ID]);
        }
      }]);

      return BrandingInfoComponent;
    }();

    BrandingInfoComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: src_app_shared_services_pos_service_pos_service__WEBPACK_IMPORTED_MODULE_6__["PosService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    BrandingInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-branding-info',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./branding-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/branding-info/branding-info.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./branding-info.component.scss */
      "./src/app/layout/pos/branding-info/branding-info.component.scss"))["default"]]
    })], BrandingInfoComponent);
    /***/
  },

  /***/
  "./src/app/layout/pos/monthly-target/monthly-target.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/layout/pos/monthly-target/monthly-target.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutPosMonthlyTargetMonthlyTargetComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ui.segment {\n  margin: 0px 24px 24px !important;\n  box-shadow: 0 0px 3px rgba(60, 64, 67, 0.3), 0 4px 8px 2px rgba(60, 64, 67, 0.15);\n}\n\n.ui.form.pos_basic_form {\n  margin-bottom: 80px;\n  margin-top: -37px;\n}\n\n.ui.primary.button {\n  margin-top: 35px;\n  margin-right: 12px;\n}\n\n.ui.reset.button {\n  margin-top: 35px;\n  margin-right: 12px;\n}\n\n.ui.reset.button.add_btn, .ui.primary.button.add_btn {\n  margin-top: 35px;\n}\n\n.button_align {\n  margin-bottom: 20px;\n}\n\n.fourwide_button {\n  margin-top: -12px !important;\n}\n\n.pos_btn-panel .ui.button {\n  margin-top: 20px;\n}\n\n.ui.header {\n  font-size: 20px;\n  font-weight: 400;\n  color: #4F4F4F !important;\n}\n\n@media (max-width: 991) {\n  .ui.form.fields {\n    display: flex !important;\n    width: 100% !important;\n  }\n\n  .ui.form.two.wide.field {\n    display: inline-flex;\n    width: 16.6% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Bvcy9tb250aGx5LXRhcmdldC9FOlxcQmVsYWxcXHByb2plY3RzXFxwcm9kdWN0aW9uLWJ1aWxkXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHBvc1xcbW9udGhseS10YXJnZXRcXG1vbnRobHktdGFyZ2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcG9zL21vbnRobHktdGFyZ2V0L21vbnRobHktdGFyZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0NBQUE7RUFDQSxpRkFBQTtBQ0FKOztBREdBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7QUNBSjs7QURHQTtFQUNJLG1CQUFBO0FDQUo7O0FER0E7RUFDSSw0QkFBQTtBQ0FKOztBRElJO0VBQ0ksZ0JBQUE7QUNEUjs7QURLQTtFQUNHLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDRkg7O0FES0E7RUFDSTtJQUNJLHdCQUFBO0lBQ0Esc0JBQUE7RUNGTjs7RURJRTtJQUNJLG9CQUFBO0lBQ0EsdUJBQUE7RUNETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3Bvcy9tb250aGx5LXRhcmdldC9tb250aGx5LXRhcmdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS5zZWdtZW50e1xyXG4gICAgLy8gbWFyZ2luOjI0cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMHB4IDI0cHggMjRweCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCAwcHggM3B4IHJnYmEoNjAsIDY0LCA2NywgMC4zKSwgMCA0cHggOHB4IDJweCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpO1xyXG59XHJcblxyXG4udWkuZm9ybS5wb3NfYmFzaWNfZm9ybXtcclxuICBtYXJnaW4tYm90dG9tOjgwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTM3cHg7XHJcbn1cclxuXHJcbi51aS5wcmltYXJ5LmJ1dHRvbntcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi51aS5yZXNldC5idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMzVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxufVxyXG5cclxuLnVpLnJlc2V0LmJ1dHRvbi5hZGRfYnRuLCAudWkucHJpbWFyeS5idXR0b24uYWRkX2J0biB7XHJcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xyXG59XHJcblxyXG4uYnV0dG9uX2FsaWdue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmZvdXJ3aWRlX2J1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOi0xMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wb3NfYnRuLXBhbmVsIHtcclxuICAgIC51aS5idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS5oZWFkZXJ7XHJcbiAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICBmb250LXdlaWdodDo0MDA7XHJcbiAgIGNvbG9yOiAjNEY0RjRGICFpbXBvcnRhbnRcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo5OTEpe1xyXG4gICAgLnVpLmZvcm0uZmllbGRzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC51aS5mb3JtLnR3by53aWRlLmZpZWxke1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxNi42JSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn0iLCIudWkuc2VnbWVudCB7XG4gIG1hcmdpbjogMHB4IDI0cHggMjRweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDBweCAzcHggcmdiYSg2MCwgNjQsIDY3LCAwLjMpLCAwIDRweCA4cHggMnB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNSk7XG59XG5cbi51aS5mb3JtLnBvc19iYXNpY19mb3JtIHtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgbWFyZ2luLXRvcDogLTM3cHg7XG59XG5cbi51aS5wcmltYXJ5LmJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLnVpLnJlc2V0LmJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuLnVpLnJlc2V0LmJ1dHRvbi5hZGRfYnRuLCAudWkucHJpbWFyeS5idXR0b24uYWRkX2J0biB7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG59XG5cbi5idXR0b25fYWxpZ24ge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZm91cndpZGVfYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogLTEycHggIWltcG9ydGFudDtcbn1cblxuLnBvc19idG4tcGFuZWwgLnVpLmJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi51aS5oZWFkZXIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjNEY0RjRGICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEpIHtcbiAgLnVpLmZvcm0uZmllbGRzIHtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC51aS5mb3JtLnR3by53aWRlLmZpZWxkIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB3aWR0aDogMTYuNiUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/pos/monthly-target/monthly-target.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/layout/pos/monthly-target/monthly-target.component.ts ***!
    \***********************************************************************/

  /*! exports provided: MonthlyTargetComponent, Month */

  /***/
  function srcAppLayoutPosMonthlyTargetMonthlyTargetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonthlyTargetComponent", function () {
      return MonthlyTargetComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Month", function () {
      return Month;
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


    var src_app_shared_services_pos_service_pos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/pos-service/pos-service */
    "./src/app/shared/services/pos-service/pos-service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MonthlyTargetComponent = /*#__PURE__*/function () {
      function MonthlyTargetComponent(fb, posService, toastr, activeRoute, router) {
        _classCallCheck(this, MonthlyTargetComponent);

        this.fb = fb;
        this.posService = posService;
        this.toastr = toastr;
        this.activeRoute = activeRoute;
        this.router = router;
        this.posInfo = {};
        this.yearsList = [];
        this.monthsList = [new Month(1, 'January'), new Month(2, 'February'), new Month(3, 'March'), new Month(4, 'April'), new Month(5, 'May'), new Month(6, 'June'), new Month(7, 'July'), new Month(8, 'August'), new Month(9, 'September'), new Month(10, 'October'), new Month(11, 'November'), new Month(12, 'December')];
        this.months = [];
        this.monthSplice = [];
        this.currentYear = new Date().getFullYear();
        this.currentMonth = new Date().getMonth() + 1;
      }

      _createClass(MonthlyTargetComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.organisation_ID = this.activeRoute.snapshot.params.id;
          this.getOrganisationInfo(this.organisation_ID);
          this.monthlyTargetForm = this.fb.group({
            organisation_id: this.organisation_ID,
            monthlyTarget: this.fb.array([this.getTargetFormGroup()]),
            tab: ['target']
          });

          for (var y = this.currentYear; y <= this.currentYear + 5; y++) {
            this.yearsList.push(y);
          }

          this.months = this.monthsList;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.makeJQuery();
        }
      }, {
        key: "getTargetFormGroup",
        value: function getTargetFormGroup() {
          return this.fb.group({
            year: [''],
            month: [''],
            flight_stats: [null],
            hotel_stats: [null],
            insurance_stats: [null],
            car_stats: [null]
          });
        }
      }, {
        key: "addItem",
        value: function addItem() {
          this.makeJQuery();
          this.getItemArray.push(this.getTargetFormGroup());
        }
      }, {
        key: "removeItem",
        value: function removeItem(index) {
          if (index > 0) this.getItemArray.removeAt(index);
        }
      }, {
        key: "storeMonthlyTarget",
        value: function storeMonthlyTarget() {
          var _this16 = this;

          this.posService.updatePosDetails(JSON.stringify(this.monthlyTargetForm.value)).subscribe(function (result) {
            if (result.status) {
              _this16.toastr.success("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-top-right'
              });

              _this16.router.navigate(['/pos/basic-edit/' + _this16.organisation_ID]);
            } else {
              _this16.toastr.error("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-top-right'
              });
            }
          });
        }
      }, {
        key: "makeJQuery",
        value: function makeJQuery() {
          $('.ui.dropdown').dropdown();
          $(document).ready(function () {
            $('.ui.dropdown').dropdown();
            $('.ui.dropdown').dropdown('refresh');
            $('.ui.checkbox').checkbox();
            $('.ui.dropdownThree').dropdown();
            $('.dropdownyear').dropdown({
              placeholder: "Year"
            });
            $('.dropdownMonth').dropdown({
              placeholder: "Month"
            });
          });
        }
      }, {
        key: "getOrganisationInfo",
        value: function getOrganisationInfo(organisation_ID) {
          var _this17 = this;

          this.posService.getPosDetails(organisation_ID).subscribe(function (result) {
            if (result.status) _this17.posInfo = result.result;
            var organisation_stats = JSON.parse(_this17.posInfo.organisation_stats);

            _this17.monthlyTargetForm.patchValue({
              organisation_id: _this17.organisation_ID
            });

            if (organisation_stats) {
              _this17.getItemArray.removeAt(0);

              organisation_stats.forEach(function (x) {
                _this17.getItemArray.push(_this17.fb.group(x));
              });
            } else {
              organisation_stats.forEach(function (x) {
                _this17.getItemArray.push(_this17.fb.group(x));
              });
            }

            _this17.ngAfterViewInit();
          });
        }
      }, {
        key: "cancelMonthlyTarget",
        value: function cancelMonthlyTarget() {
          this.router.navigate(['/pos/basic-edit/', this.organisation_ID]);
        }
      }, {
        key: "selectYear",
        value: function selectYear(event) {
          console.log(event);

          if (event == this.currentYear) {
            this.monthSplice = this.monthsList;
            this.months = this.monthSplice.slice(this.currentMonth - 1, 12);
          } else {
            this.months = this.monthsList;
          }
        }
      }, {
        key: "getItemArray",
        get: function get() {
          return this.monthlyTargetForm.get('monthlyTarget');
        }
      }]);

      return MonthlyTargetComponent;
    }();

    MonthlyTargetComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_shared_services_pos_service_pos_service__WEBPACK_IMPORTED_MODULE_3__["PosService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    MonthlyTargetComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-monthly-target',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./monthly-target.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/monthly-target/monthly-target.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./monthly-target.component.scss */
      "./src/app/layout/pos/monthly-target/monthly-target.component.scss"))["default"]]
    })], MonthlyTargetComponent);

    var Month = function Month(id, name) {
      _classCallCheck(this, Month);

      this.id = id;
      this.name = name;
    };
    /***/

  },

  /***/
  "./src/app/layout/pos/pos-basic-edit/pos-basic-edit.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/layout/pos/pos-basic-edit/pos-basic-edit.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutPosPosBasicEditPosBasicEditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".outer {\n  margin: 0px 20px 0px 15px;\n}\n\n.amexCard {\n  background-color: gainsboro !important;\n}\n\n.farePreferencestable {\n  border-top: 0px !important;\n}\n\n.outer__add-pos__title {\n  margin: 0;\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #E0E0E0;\n}\n\n.tourCode_btn,\n.addTogg_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n}\n\n.tourCode_text,\n.addTogg_text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.corporate_input__placeholder-icon {\n  position: relative;\n  width: 18px;\n  bottom: 28px;\n  left: 9px;\n}\n\n.ui.form.pos_basic_form {\n  padding: 24px 0px 0px 0px;\n  background: #fff;\n  box-shadow: 0 0px 3px rgba(60, 64, 67, 0.3), 0 4px 8px 2px rgba(60, 64, 67, 0.15);\n  border-radius: 4.96141px;\n  margin: 24px 24px 80px;\n}\n\n.ui.form.pos_basic_form.edit_form {\n  padding: 24px 0px;\n}\n\ndiv.upload {\n  box-sizing: border-box;\n  height: 15px;\n  width: 123px;\n  border-radius: 3px;\n  background-color: #FFF;\n  border: 0.5px solid #808080;\n  box-shadow: 0 0.25px 0.1px 0 rgba(0, 0, 0, 0.5);\n}\n\ndiv.upload input {\n  display: block !important;\n  width: 123px !important;\n  height: 15px !important;\n  opacity: 0 !important;\n  overflow: hidden !important;\n}\n\n.file_choose {\n  position: relative;\n  left: 27px;\n  bottom: 6px;\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 9px;\n  line-height: 10px;\n}\n\n.uploadinImg_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n}\n\n.uploadinImg_btn__text,\n.save-next_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 12px;\n}\n\n.file_table__img {\n  border: none;\n  background-color: #dfeafb5e;\n}\n\n.save-next_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.field input::-webkit-input-placeholder {\n  font-size: 14px;\n}\n\n.field input::-moz-placeholder {\n  font-size: 14px;\n}\n\n.field input::-ms-input-placeholder {\n  font-size: 14px;\n}\n\n.field input::placeholder {\n  font-size: 14px;\n}\n\n.ui.pointing.secondary.menu {\n  border: none;\n}\n\n.item.stepper__progress {\n  width: 167px;\n}\n\n.tab.segment.stepper__segment-outline {\n  border: none;\n  box-shadow: none;\n}\n\n.office-info_icon {\n  position: relative;\n  top: 20px;\n  right: 85px;\n}\n\n.pos_access-rights {\n  color: #828282;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 11px;\n  line-height: 12px;\n}\n\n.cancel_btn {\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.cancel_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.issue_date {\n  text-indent: 17px;\n}\n\n.wide.field.sale_check {\n  margin-top: 10px;\n}\n\n.assign_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.assign_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n}\n\n.circleIcon {\n  height: 20px;\n  width: 20px;\n  background-color: #0D801C;\n  border-radius: 50%;\n  display: inline-block;\n  margin-top: 6px;\n}\n\n.plusIcon {\n  color: #FFF;\n  font-size: 17px;\n  font-weight: 100;\n  line-height: 28px;\n  text-align: center;\n  margin-left: 0px;\n  margin-top: -3px;\n}\n\n::ng-deep.mat-step-icon-content {\n  height: 19px;\n  width: 19px;\n  color: #C8C8C8;\n  background-color: #C8C8C8;\n  border-radius: 50%;\n}\n\n::ng-deep.mat-step-header:hover,\n::ng-deep.cdk-keyboard-focused,\n::ng-deep.cdk-program-focused {\n  background-color: transparent !important;\n}\n\n::ng-deep.mat-step-icon {\n  border: 1px solid rgba(0, 0, 0, 0.24);\n  background: transparent !important;\n}\n\n::ng-deep.mat-step-icon-state-number.mat-step-icon.mat-step-icon-selected {\n  border: 2px solid #3867B1;\n  background: transparent;\n}\n\n::ng-deep.mat-step-icon-state-number.mat-step-icon.mat-step-icon-selected .ng-star-inserted {\n  color: #3867B1;\n}\n\n::ng-deep.mat-step-icon-content {\n  background-color: transparent;\n}\n\n::ng-deep.ng-star-inserted {\n  padding: 0 6px;\n}\n\n::ng-deep.mat-horizontal-stepper-header-container {\n  background: #ffff;\n  width: 100%;\n  padding: 0px 30%;\n  margin-top: 32px;\n}\n\n::ng-deep.mat-icon {\n  display: none !important;\n}\n\n::ng-deep.mat-step-icon-selected,\n::ng-deep.mat-step-icon-state-done,\n::ng-deep.mat-step-icon-state-edit {\n  background-color: transparent !important;\n}\n\n::ng-deep.mat-step-label {\n  color: #3867b1;\n}\n\n::ng-deep.mat-horizontal-content-container {\n  margin-top: 32px;\n}\n\n.pos_btn-panel {\n  padding-bottom: 20px;\n  margin-bottom: 40px;\n}\n\n.pos_btn-panel .secondary {\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.pos_btn-panel .primary {\n  float: right;\n  width: auto !important;\n  border-radius: 5px !important;\n  background-color: #3867B1;\n  min-width: auto;\n  position: relative;\n  right: -24px;\n}\n\n.pos_btn-panel .primary:hover {\n  background-color: #cacbcd !important;\n  box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34, 36, 38, 0.15) inset !important;\n  color: rgba(0, 0, 0, 0.8) !important;\n}\n\n.segment p {\n  padding-bottom: 10px;\n}\n\n.bg-grey {\n  background: #d1dade;\n}\n\n.example-chip-list {\n  width: 100%;\n  border: 0px solid grey !important;\n}\n\n.mat-chip-input {\n  border: 0px !important;\n  background: transparent !important;\n}\n\n.inputfile {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.transparent,\n.transparent:hover {\n  background: none;\n}\n\n.center {\n  text-align: center;\n}\n\n.margin-right-20 {\n  margin-right: 20px;\n}\n\n.margin-bottom-15 {\n  margin-bottom: 15px;\n}\n\n.dim-footer {\n  color: #c3c3c3;\n  display: block;\n  font-size: 12px;\n  margin-top: 10px;\n  cursor: inherit;\n  position: relative;\n  top: -20px;\n  left: 24px;\n}\n\n.mat-chip {\n  margin: 0px 4px !important;\n}\n\n.branding-pic {\n  align-items: center;\n  height: 150px;\n}\n\n.mat-standard-chip .mat-chip-remove.mat-icon {\n  width: 13px !important;\n  height: 13px !important;\n  font-size: 13px !important;\n}\n\n.custom-columns .field {\n  margin-bottom: 15px !important;\n}\n\n.uploaded-document {\n  display: block;\n}\n\n.validations {\n  color: red;\n  font-size: x-small;\n}\n\n.unlimited {\n  float: right;\n  font-size: x-small;\n}\n\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n\n.ui.form .three.wide.field {\n  margin-bottom: 16px;\n}\n\n.inline-label {\n  display: inline !important;\n}\n\n.ui.header {\n  font-size: 18px;\n  font-weight: 400;\n  margin-bottom: 24px;\n}\n\n.ui.header.note-head {\n  margin-bottom: 12px;\n}\n\n.ui.header.basic-info-header {\n  margin-top: 20px;\n}\n\n.pos_basic_form .tax-section {\n  padding: 0px;\n}\n\n.pos_basic_form .tax_block {\n  border: 1px solid #D4D6DC;\n  border-radius: 5.12155px;\n  min-height: 390px;\n}\n\n.pos_basic_form .tax_block p {\n  padding-bottom: 24px;\n}\n\n::ng-deep.mat-form-field-underline {\n  display: none;\n}\n\n::ng-deep.mat-chip-list-wrapper {\n  margin: 0px !important;\n  position: relative !important;\n  top: -16px !important;\n}\n\n.payment-header {\n  margin-top: 12px !important;\n}\n\n.ui.checkbox {\n  padding-bottom: 10px;\n  margin: 5px;\n  display: block;\n}\n\n.ui.checkbox label:before {\n  width: 15px;\n  height: 15px;\n  top: 1px;\n  left: 1px;\n}\n\n.ui.checkbox label:after {\n  font-size: 12px;\n  top: 1px;\n}\n\n.ui.checkbox input:checked ~ label:before {\n  border: 1px solid #3867b1;\n}\n\n.ui.checkbox input:checked ~ label:after {\n  color: #3867b1 !important;\n}\n\n.ui.segment.bg-grey {\n  margin-top: 12px;\n  background: transparent;\n  border: 1px solid #D4D6DC;\n}\n\n.ui.segment.bg-grey .ui.checkbox {\n  padding-bottom: 0px;\n}\n\n.cardDetails {\n  margin-top: 15px;\n}\n\n.spacing {\n  padding-left: 22px;\n  padding-right: 22px;\n}\n\n.ui.fitted.divider {\n  margin: 30px 0px;\n}\n\n.ui.primary.button.brand_buttons {\n  background: rgba(67, 122, 218, 0.05) !important;\n  border: 1px dashed #437ADA !important;\n  color: #437ADA;\n  box-shadow: none !important;\n}\n\n.ui.primary.button.brand_buttons i.icon {\n  color: #437ADA;\n}\n\n.ui.primary.button.add_btn {\n  border: 1px solid #437ADA;\n  box-sizing: border-box;\n  border-radius: 7.24448px !important;\n  background: transparent !important;\n  color: #437ADA !important;\n  box-shadow: none !important;\n  margin-top: 22px;\n  width: auto !important;\n  min-width: auto;\n}\n\n.ui.primary.button.add_btn.reset {\n  border: 1px solid #4F4F4F;\n  color: #4F4F4F !important;\n}\n\n.notes-section textarea {\n  min-height: 60px;\n  height: auto !important;\n}\n\n.ui.transparent.margin-right-20 {\n  display: block;\n  margin-bottom: 10px;\n}\n\n.ui.grid.card-section {\n  width: 100%;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n  margin-left: 8px;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 160px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 10px;\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: 0px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.pos_btn-panel.spacing button {\n  position: absolute;\n  right: 0px;\n  bottom: -40px;\n}\n\n.ui.clearing.segment {\n  margin: 0px 6px !important;\n  background: none !important;\n}\n\n.tab_margin {\n  margin: 8px !important;\n  padding: 12px !important;\n}\n\n.ui.form .disabled.field, .ui.form .disabled.fields .field, .ui.form .field :disabled {\n  border: 1px solid rgba(159, 162, 167, 0.2) !important;\n}\n\n.align-pos-btn {\n  top: 108px;\n}\n\n@media (max-width: 1280px) {\n  .card-section .eight.wide.column {\n    width: 100% !important;\n  }\n}\n\n@media (max-width: 1200px) and (min-width: 1024px) {\n  .ui.grid .gridstyle {\n    width: 100% !important;\n  }\n}\n\n@media (max-width: 1024px) and (min-width: 768px) {\n  .ui.grid .gridstyle {\n    width: 100% !important;\n  }\n}\n\n@media (max-width: 1024px) and (min-width: 767px) {\n  .ui.grid .fare {\n    width: 71% !important;\n  }\n}\n\n@media (max-width: 768px) {\n  .ui.grid .fare {\n    width: 100% !important;\n  }\n\n  .tab1 {\n    padding-right: 55px;\n  }\n\n  .ui.clearing.segment .branch1 {\n    float: left;\n  }\n}\n\n@media (max-width: 1009px) and (min-width: 808px) {\n  .ui.form .four.wide.field {\n    width: 33% !important;\n  }\n}\n\n@media (max-width: 807px) and (min-width: 768px) {\n  .ui.form .four.wide.field {\n    width: 50% !important;\n  }\n  .ui.form .eight.wide.field .fare1 {\n    width: 100% !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .ui.grid .gridstyle {\n    width: 100% !important;\n  }\n  .ui.grid .gridstyle1 {\n    width: 100% !important;\n  }\n  .ui.grid .eight.wide.column .gridstyle2 {\n    width: 100% !important;\n  }\n  .ui.grid .gridstyle3 {\n    width: 100% !important;\n  }\n  .ui.grid .gridstyle4 {\n    width: 100% !important;\n  }\n}\n\n@media (max-width: 440px) and (min-width: 320px) {\n  .ui.form .nine.wide.field {\n    display: block;\n    width: 100% !important;\n  }\n  .ui.form .seven.wide.field {\n    display: block;\n    width: 100% !important;\n  }\n}\n\n@media (max-width: 440px) and (min-width: 320px) {\n  .ui.grid .fare {\n    width: 100% !important;\n  }\n}\n\n@media (max-width: 425px) {\n  .ui.clearing.segment .branch2 {\n    display: block;\n    width: 100% !important;\n    float: none;\n    margin-left: 0px !important;\n    margin-bottom: 16px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Bvcy9wb3MtYmFzaWMtZWRpdC9FOlxcQmVsYWxcXHByb2plY3RzXFxwcm9kdWN0aW9uLWJ1aWxkXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHBvc1xccG9zLWJhc2ljLWVkaXRcXHBvcy1iYXNpYy1lZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcG9zL3Bvcy1iYXNpYy1lZGl0L3Bvcy1iYXNpYy1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLHNDQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGtDQUFBO0VBQ0Esd0NBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQ0NKOztBREVBO0VBQ0ksNENBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBOztFQUVJLGtCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTs7RUFFSSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0NKOztBRFNBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlGQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtBQ05KOztBRFVBO0VBQ0ksaUJBQUE7QUNQSjs7QURVQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQ0FB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O0VBRVE7SUFDSSxzQkFBQTtFQ3BDVjtBQUNGOztBRHlDQTtFQUVNO0lBQ0ksc0JBQUE7RUN4Q1I7QUFDRjs7QUQ0Q0E7RUFFQTtJQUNJLHNCQUFBO0VDM0NGO0FBQ0Y7O0FEK0NBO0VBRVE7SUFDRSxxQkFBQTtFQzlDUjtBQUNGOztBRGtEQTtFQUVRO0lBQ0Usc0JBQUE7RUNqRFI7O0VEb0RFO0lBQ0ksbUJBQUE7RUNqRE47O0VEb0RNO0lBQ0ksV0FBQTtFQ2pEVjtBQUNGOztBRHFEQTtFQUVBO0lBQ0EscUJBQUE7RUNwREU7QUFDRjs7QUR3REE7RUFFQTtJQUNBLHFCQUFBO0VDdkRFO0VEMERVO0lBQ0Usc0JBQUE7RUN4RFo7QUFDRjs7QUQ2REE7RUFFQTtJQUNJLHNCQUFBO0VDNURGO0VEOERGO0lBQ0ksc0JBQUE7RUM1REY7RUQrREM7SUFDSSxzQkFBQTtFQzdETDtFRGdFRjtJQUNJLHNCQUFBO0VDOURGO0VEZ0VGO0lBQ0ksc0JBQUE7RUM5REY7QUFDRjs7QURrRUE7RUFFQTtJQUNJLGNBQUE7SUFDQSxzQkFBQTtFQ2pFRjtFRG1FRjtJQUNJLGNBQUE7SUFDQSxzQkFBQTtFQ2pFRjtBQUNGOztBRHFFQTtFQUVZO0lBQ0Usc0JBQUE7RUNwRVo7QUFDRjs7QUR5RUE7RUFFUTtJQUNJLGNBQUE7SUFDQSxzQkFBQTtJQUNBLFdBQUE7SUFDQSwyQkFBQTtJQUNBLDhCQUFBO0VDeEVWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcG9zL3Bvcy1iYXNpYy1lZGl0L3Bvcy1iYXNpYy1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGVyIHtcclxuICAgIG1hcmdpbjogMHB4IDIwcHggMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5hbWV4Q2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZhcmVQcmVmZXJlbmNlc3RhYmxlIHtcclxuICAgIGJvcmRlci10b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub3V0ZXJfX2FkZC1wb3NfX3RpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLm1lbnU+Lml0ZW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI4NTcxNDI5cmVtIDAgMCAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLmJvdHRvbS5hdHRhY2hlZC5hY3RpdmUudGFiLnNlZ21lbnQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbn1cclxuXHJcbi50YWIuc2VnbWVudCB7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjRTBFMEUwO1xyXG59XHJcblxyXG4udG91ckNvZGVfYnRuLFxyXG4uYWRkVG9nZ19idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcclxufVxyXG5cclxuLnRvdXJDb2RlX3RleHQsXHJcbi5hZGRUb2dnX3RleHQge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBib3R0b206IDI4cHg7XHJcbiAgICBsZWZ0OiA5cHg7XHJcbn1cclxuXHJcbi8vIC5vdXRlci1mb3JtLFxyXG4vLyAub3V0ZXJfY29ycEZvcm0ge1xyXG4vLyAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICAgIGJvcmRlcjogMC41cHggc29saWQgIzgwODA4MDtcclxuLy8gICAgIG1hcmdpbjogNDVweCAzMnB4IDExMXB4IDI1cHg7XHJcbi8vIH1cclxuLnVpLmZvcm0ucG9zX2Jhc2ljX2Zvcm0ge1xyXG4gICAgcGFkZGluZzogMjRweCAwcHggMHB4IDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDBweCAzcHggcmdiYSg2MCwgNjQsIDY3LCAwLjMpLCAwIDRweCA4cHggMnB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0Ljk2MTQxcHg7XHJcbiAgICBtYXJnaW46IDI0cHggMjRweCA4MHB4O1xyXG4gICAgLy8gbWF4LXdpZHRoOiAxMjAwcHg7XHJcbn1cclxuXHJcbi51aS5mb3JtLnBvc19iYXNpY19mb3JtLmVkaXRfZm9ybSB7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDBweDtcclxufVxyXG5cclxuZGl2LnVwbG9hZCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDEyM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgIzgwODA4MDtcclxuICAgIGJveC1zaGFkb3c6IDAgMC4yNXB4IDAuMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG5kaXYudXBsb2FkIGlucHV0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTIzcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmlsZV9jaG9vc2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMjdweDtcclxuICAgIGJvdHRvbTogNnB4O1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udXBsb2FkaW5JbWdfYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XHJcbn1cclxuXHJcbi51cGxvYWRpbkltZ19idG5fX3RleHQsXHJcbi5zYXZlLW5leHRfYnRuX190ZXh0IHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4uZmlsZV90YWJsZV9faW1nIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmVhZmI1ZTtcclxufVxyXG5cclxuLnNhdmUtbmV4dF9idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi51aS5wb2ludGluZy5zZWNvbmRhcnkubWVudSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5pdGVtLnN0ZXBwZXJfX3Byb2dyZXNzIHtcclxuICAgIHdpZHRoOiAxNjdweDtcclxufVxyXG5cclxuLnRhYi5zZWdtZW50LnN0ZXBwZXJfX3NlZ21lbnQtb3V0bGluZSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4ub2ZmaWNlLWluZm9faWNvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICByaWdodDogODVweDtcclxufVxyXG5cclxuLnBvc19hY2Nlc3MtcmlnaHRzIHtcclxuICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi5jYW5jZWxfYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0RjRGNEY7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5jYW5jZWxfYnRuX190ZXh0IHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaXNzdWVfZGF0ZSB7XHJcbiAgICB0ZXh0LWluZGVudDogMTdweDtcclxufVxyXG5cclxuLndpZGUuZmllbGQuc2FsZV9jaGVjayB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uYXNzaWduX2J0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uYXNzaWduX2J0bl9fdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxufVxyXG5cclxuLmNpcmNsZUljb24ge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQ4MDFDO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG59XHJcblxyXG4ucGx1c0ljb24ge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTNweDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24tY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICB3aWR0aDogMTlweDtcclxuICAgIGNvbG9yOiAjQzhDOEM4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M4QzhDODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1zdGVwLWhlYWRlcjpob3ZlcixcclxuIDo6bmctZGVlcC5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcclxuIDo6bmctZGVlcC5jZGstcHJvZ3JhbS1mb2N1c2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjI0KTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLXN0YXRlLW51bWJlci5tYXQtc3RlcC1pY29uLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzM4NjdCMTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLm5nLXN0YXItaW5zZXJ0ZWQge1xyXG4gICAgICAgIGNvbG9yOiAjMzg2N0IxO1xyXG4gICAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAubmctc3Rhci1pbnNlcnRlZCB7XHJcbiAgICBwYWRkaW5nOiAwIDZweDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICAvLyB3aWR0aDogNDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDBweCAzMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LWljb24ge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcclxuIDo6bmctZGVlcC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXHJcbiA6Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtc3RlcC1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzM4NjdiMTtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1ob3Jpem9udGFsLWNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIC8vIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG59XHJcblxyXG4ucG9zX2J0bi1wYW5lbCB7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyByaWdodDogNjhweDtcclxuICAgIC8vIGJvdHRvbTogOTdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIC5zZWNvbmRhcnkge1xyXG4gICAgICAgIC8vIHdpZHRoOiAxMDQuODdweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRGNEY0RjtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB9XHJcbiAgICAucHJpbWFyeSB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDEyNC44N3B4O1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XHJcbiAgICAgICAgLy8gYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICByaWdodDogLTI0cHg7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWNiY2QgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHRyYW5zcGFyZW50IGluc2V0LCAwIDAgMCAwIHJnYmEoMzQsIDM2LCAzOCwgLjE1KSBpbnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuOCkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWdtZW50IHAge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5iZy1ncmV5IHtcclxuICAgIGJhY2tncm91bmQ6ICNkMWRhZGU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNoaXAtbGlzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkIGdyZXkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1jaGlwLWlucHV0IHtcclxuICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXRmaWxlIHtcclxuICAgIHdpZHRoOiAwLjFweDtcclxuICAgIGhlaWdodDogMC4xcHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4udHJhbnNwYXJlbnQsXHJcbi50cmFuc3BhcmVudDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hcmdpbi1yaWdodC0yMCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5tYXJnaW4tYm90dG9tLTE1IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5kaW0tZm9vdGVyIHtcclxuICAgIGNvbG9yOiAjYzNjM2MzO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBpbmhlcml0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMjBweDtcclxuICAgIGxlZnQ6IDI0cHg7XHJcbn1cclxuXHJcbi5tYXQtY2hpcCB7XHJcbiAgICBtYXJnaW46IDBweCA0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJyYW5kaW5nLXBpYyB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLm1hdC1zdGFuZGFyZC1jaGlwIC5tYXQtY2hpcC1yZW1vdmUubWF0LWljb24ge1xyXG4gICAgd2lkdGg6IDEzcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20tY29sdW1ucyAuZmllbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udXBsb2FkZWQtZG9jdW1lbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi52YWxpZGF0aW9ucyB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG59XHJcblxyXG4udW5saW1pdGVkIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxufVxyXG5cclxuLnVpLmZvcm0gLmZpZWxkPmxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgIGNvbG9yOiAjMTgxQjIwO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDhweDtcclxufVxyXG5cclxuLnVpLmZvcm0gLnRocmVlLndpZGUuZmllbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLmlubGluZS1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLmhlYWRlciB7XHJcbiAgICBmb250LXNpemU6MThweDtcclxuICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICAmLm5vdGUtaGVhZCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIH1cclxuICAgICYuYmFzaWMtaW5mby1oZWFkZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wb3NfYmFzaWNfZm9ybSB7XHJcbiAgICAudGF4LXNlY3Rpb24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuICAgIC50YXhfYmxvY2sge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNENEQ2REM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNS4xMjE1NXB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM5MHB4O1xyXG4gICAgICAgIC8vIG1heC1oZWlnaHQ6IDM5MHB4O1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1jaGlwLWxpc3Qtd3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IC0xNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYXltZW50LWhlYWRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51aS5jaGVja2JveCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAvLyAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgdG9wOiAxcHg7XHJcbiAgICAgICAgbGVmdDogMXB4O1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgdG9wOiAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5wdXQ6Y2hlY2tlZH5sYWJlbCB7XHJcbiAgICAgICAgLy8gY29sb3I6ICMzODY3YjEgIWltcG9ydGFudDtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODY3YjE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzM4NjdiMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnVpLnNlZ21lbnQuYmctZ3JleSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDRENkRDO1xyXG4gICAgLnVpLmNoZWNrYm94IHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZERldGFpbHMge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLnNwYWNpbmcge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjJweDtcclxufVxyXG5cclxuLnVpLmZpdHRlZC5kaXZpZGVyIHtcclxuICAgIG1hcmdpbjogMzBweCAwcHg7XHJcbn1cclxuXHJcbi51aS5wcmltYXJ5LmJ1dHRvbi5icmFuZF9idXR0b25zIHtcclxuICAgIC8vIGhlaWdodDogODJweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNjcsIDEyMiwgMjE4LCAwLjA1KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICM0MzdBREEgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNDM3QURBO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDE4cHg7XHJcbiAgICAvLyBtaW4td2lkdGg6IGF1dG87XHJcbiAgICBpLmljb24ge1xyXG4gICAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIC8vIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM0MzdBREE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS5wcmltYXJ5LmJ1dHRvbi5hZGRfYnRuIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0MzdBREE7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNy4yNDQ0OHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM0MzdBREEgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4udWkucHJpbWFyeS5idXR0b24uYWRkX2J0bi5yZXNldCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNEY0RjRGO1xyXG4gICAgY29sb3I6ICM0RjRGNEYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vdGVzLXNlY3Rpb24ge1xyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS50cmFuc3BhcmVudC5tYXJnaW4tcmlnaHQtMjAge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4udWkuZ3JpZC5jYXJkLXNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC8vIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJvdHRvbTogMTAwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4ucG9zX2J0bi1wYW5lbC5zcGFjaW5nIHtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgYm90dG9tOiAtNDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLnVpLmNsZWFyaW5nLnNlZ21lbnR7XHJcbiAgICBtYXJnaW46IDBweCA2cHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYl9tYXJnaW57XHJcbiAgICBtYXJnaW46IDhweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzoxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51aS5mb3JtIC5kaXNhYmxlZC5maWVsZCwgLnVpLmZvcm0gLmRpc2FibGVkLmZpZWxkcyAuZmllbGQsIC51aS5mb3JtIC5maWVsZCA6ZGlzYWJsZWR7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMTU5LCAxNjIsIDE2NywgMC4yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWxpZ24tcG9zLWJ0biB7XHJcbiAgICB0b3A6IDEwOHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAuY2FyZC1zZWN0aW9uIHtcclxuICAgICAgICAuZWlnaHQud2lkZS5jb2x1bW4ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC51aS5ncmlke1xyXG4gICAgICAuZ3JpZHN0eWxle1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDoxMDI0cHgpIGFuZCAobWluLXdpZHRoOjc2OHB4KSB7XHJcbi51aS5ncmlke1xyXG4uZ3JpZHN0eWxle1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjEwMjRweCkgYW5kIChtaW4td2lkdGg6NzY3cHgpe1xyXG4gICAgLnVpLmdyaWR7XHJcbiAgICAgICAgLmZhcmV7XHJcbiAgICAgICAgICB3aWR0aDogNzElICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgXHJcbn0gXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjhweCl7XHJcbiAgICAudWkuZ3JpZHtcclxuICAgICAgICAuZmFyZXtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgXHJcbiAgICAudGFiMXtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OjU1cHg7XHJcbiAgICB9XHJcbiAgICAudWkuY2xlYXJpbmcuc2VnbWVudHtcclxuICAgICAgICAuYnJhbmNoMXtcclxuICAgICAgICAgICAgZmxvYXQ6bGVmdFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4gICBcclxuQG1lZGlhKG1heC13aWR0aDoxMDA5cHgpIGFuZCAobWluLXdpZHRoOjgwOHB4KSB7XHJcbi51aS5mb3JtIHtcclxuLmZvdXIud2lkZS5maWVsZCB7XHJcbndpZHRoOiAzMyUhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo4MDdweCkgYW5kIChtaW4td2lkdGg6NzY4cHgpIHtcclxuLnVpLmZvcm0ge1xyXG4uZm91ci53aWRlLmZpZWxkIHtcclxud2lkdGg6IDUwJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5laWdodC53aWRlLmZpZWxkIHtcclxuICAgICAgICAgICAgLmZhcmUxe1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcclxuICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KSB7XHJcbi51aS5ncmlke1xyXG4uZ3JpZHN0eWxle1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4uZ3JpZHN0eWxlMXtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmVpZ2h0LndpZGUuY29sdW1ue1xyXG4gICAuZ3JpZHN0eWxlMntcclxuICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxufVxyXG4uZ3JpZHN0eWxlM3tcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmdyaWRzdHlsZTR7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICB9XHJcbiAgICB9ICAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjQ0MHB4KSBhbmQgKG1pbi13aWR0aDozMjBweCkge1xyXG4udWkuZm9ybXtcclxuLm5pbmUud2lkZS5maWVsZHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgXHJcbn1cclxuLnNldmVuLndpZGUuZmllbGR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7IFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NDQwcHgpIGFuZCAobWluLXdpZHRoOjMyMHB4KXtcclxuICAgIC51aS5ncmlke1xyXG4gICAgICAgICAgICAuZmFyZXtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo0MjVweCkge1xyXG4gICAgLnVpLmNsZWFyaW5nLnNlZ21lbnR7XHJcbiAgICAgICAgLmJyYW5jaDJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLm91dGVyIHtcbiAgbWFyZ2luOiAwcHggMjBweCAwcHggMTVweDtcbn1cblxuLmFtZXhDYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvICFpbXBvcnRhbnQ7XG59XG5cbi5mYXJlUHJlZmVyZW5jZXN0YWJsZSB7XG4gIGJvcmRlci10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ub3V0ZXJfX2FkZC1wb3NfX3RpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cblxuLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4udWkudG9wLmF0dGFjaGVkLm1lbnUgPiAuaXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjg1NzE0MjlyZW0gMCAwIDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi51aS5ib3R0b20uYXR0YWNoZWQuYWN0aXZlLnRhYi5zZWdtZW50IHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxN3B4O1xufVxuXG4udGFiLnNlZ21lbnQge1xuICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuaHIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjRTBFMEUwO1xufVxuXG4udG91ckNvZGVfYnRuLFxuLmFkZFRvZ2dfYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xufVxuXG4udG91ckNvZGVfdGV4dCxcbi5hZGRUb2dnX3RleHQge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvcnBvcmF0ZV9pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE4cHg7XG4gIGJvdHRvbTogMjhweDtcbiAgbGVmdDogOXB4O1xufVxuXG4udWkuZm9ybS5wb3NfYmFzaWNfZm9ybSB7XG4gIHBhZGRpbmc6IDI0cHggMHB4IDBweCAwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDNweCByZ2JhKDYwLCA2NCwgNjcsIDAuMyksIDAgNHB4IDhweCAycHggcmdiYSg2MCwgNjQsIDY3LCAwLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogNC45NjE0MXB4O1xuICBtYXJnaW46IDI0cHggMjRweCA4MHB4O1xufVxuXG4udWkuZm9ybS5wb3NfYmFzaWNfZm9ybS5lZGl0X2Zvcm0ge1xuICBwYWRkaW5nOiAyNHB4IDBweDtcbn1cblxuZGl2LnVwbG9hZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDEyM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJvcmRlcjogMC41cHggc29saWQgIzgwODA4MDtcbiAgYm94LXNoYWRvdzogMCAwLjI1cHggMC4xcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbmRpdi51cGxvYWQgaW5wdXQge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB3aWR0aDogMTIzcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4uZmlsZV9jaG9vc2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDI3cHg7XG4gIGJvdHRvbTogNnB4O1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBsaW5lLWhlaWdodDogMTBweDtcbn1cblxuLnVwbG9hZGluSW1nX2J0biB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbn1cblxuLnVwbG9hZGluSW1nX2J0bl9fdGV4dCxcbi5zYXZlLW5leHRfYnRuX190ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xufVxuXG4uZmlsZV90YWJsZV9faW1nIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlYWZiNWU7XG59XG5cbi5zYXZlLW5leHRfYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi51aS5wb2ludGluZy5zZWNvbmRhcnkubWVudSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLml0ZW0uc3RlcHBlcl9fcHJvZ3Jlc3Mge1xuICB3aWR0aDogMTY3cHg7XG59XG5cbi50YWIuc2VnbWVudC5zdGVwcGVyX19zZWdtZW50LW91dGxpbmUge1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5vZmZpY2UtaW5mb19pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiA4NXB4O1xufVxuXG4ucG9zX2FjY2Vzcy1yaWdodHMge1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG5cbi5jYW5jZWxfYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0RjRGO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5jYW5jZWxfYnRuX190ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pc3N1ZV9kYXRlIHtcbiAgdGV4dC1pbmRlbnQ6IDE3cHg7XG59XG5cbi53aWRlLmZpZWxkLnNhbGVfY2hlY2sge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYXNzaWduX2J0biB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uYXNzaWduX2J0bl9fdGV4dCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbn1cblxuLmNpcmNsZUljb24ge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQ4MDFDO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4ucGx1c0ljb24ge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tdG9wOiAtM3B4O1xufVxuXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1jb250ZW50IHtcbiAgaGVpZ2h0OiAxOXB4O1xuICB3aWR0aDogMTlweDtcbiAgY29sb3I6ICNDOEM4Qzg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDOEM4Qzg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuOjpuZy1kZWVwLm1hdC1zdGVwLWhlYWRlcjpob3Zlcixcbjo6bmctZGVlcC5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbjo6bmctZGVlcC5jZGstcHJvZ3JhbS1mb2N1c2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24ge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1udW1iZXIubWF0LXN0ZXAtaWNvbi5tYXQtc3RlcC1pY29uLXNlbGVjdGVkIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzM4NjdCMTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1udW1iZXIubWF0LXN0ZXAtaWNvbi5tYXQtc3RlcC1pY29uLXNlbGVjdGVkIC5uZy1zdGFyLWluc2VydGVkIHtcbiAgY29sb3I6ICMzODY3QjE7XG59XG5cbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuOjpuZy1kZWVwLm5nLXN0YXItaW5zZXJ0ZWQge1xuICBwYWRkaW5nOiAwIDZweDtcbn1cblxuOjpuZy1kZWVwLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4IDMwJTtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cblxuOjpuZy1kZWVwLm1hdC1pY29uIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1zdGVwLWxhYmVsIHtcbiAgY29sb3I6ICMzODY3YjE7XG59XG5cbjo6bmctZGVlcC5tYXQtaG9yaXpvbnRhbC1jb250ZW50LWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5wb3NfYnRuLXBhbmVsIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4ucG9zX2J0bi1wYW5lbCAuc2Vjb25kYXJ5IHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0RjRGO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4ucG9zX2J0bi1wYW5lbCAucHJpbWFyeSB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XG4gIG1pbi13aWR0aDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogLTI0cHg7XG59XG4ucG9zX2J0bi1wYW5lbCAucHJpbWFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYWNiY2QgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHRyYW5zcGFyZW50IGluc2V0LCAwIDAgMCAwIHJnYmEoMzQsIDM2LCAzOCwgMC4xNSkgaW5zZXQgIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KSAhaW1wb3J0YW50O1xufVxuXG4uc2VnbWVudCBwIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5iZy1ncmV5IHtcbiAgYmFja2dyb3VuZDogI2QxZGFkZTtcbn1cblxuLmV4YW1wbGUtY2hpcC1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMHB4IHNvbGlkIGdyZXkgIWltcG9ydGFudDtcbn1cblxuLm1hdC1jaGlwLWlucHV0IHtcbiAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLmlucHV0ZmlsZSB7XG4gIHdpZHRoOiAwLjFweDtcbiAgaGVpZ2h0OiAwLjFweDtcbiAgb3BhY2l0eTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLnRyYW5zcGFyZW50LFxuLnRyYW5zcGFyZW50OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hcmdpbi1yaWdodC0yMCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLm1hcmdpbi1ib3R0b20tMTUge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZGltLWZvb3RlciB7XG4gIGNvbG9yOiAjYzNjM2MzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjdXJzb3I6IGluaGVyaXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjBweDtcbiAgbGVmdDogMjRweDtcbn1cblxuLm1hdC1jaGlwIHtcbiAgbWFyZ2luOiAwcHggNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5icmFuZGluZy1waWMge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4ubWF0LXN0YW5kYXJkLWNoaXAgLm1hdC1jaGlwLXJlbW92ZS5tYXQtaWNvbiB7XG4gIHdpZHRoOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTNweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1jb2x1bW5zIC5maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbn1cblxuLnVwbG9hZGVkLWRvY3VtZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi52YWxpZGF0aW9ucyB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcbn1cblxuLnVubGltaXRlZCB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xufVxuXG4udWkuZm9ybSAuZmllbGQgPiBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIGNvbG9yOiAjMTgxQjIwO1xuICBtYXJnaW46IDBweCAwcHggOHB4O1xufVxuXG4udWkuZm9ybSAudGhyZWUud2lkZS5maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5pbmxpbmUtbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbn1cblxuLnVpLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi51aS5oZWFkZXIubm90ZS1oZWFkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi51aS5oZWFkZXIuYmFzaWMtaW5mby1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucG9zX2Jhc2ljX2Zvcm0gLnRheC1zZWN0aW9uIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLnBvc19iYXNpY19mb3JtIC50YXhfYmxvY2sge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDRENkRDO1xuICBib3JkZXItcmFkaXVzOiA1LjEyMTU1cHg7XG4gIG1pbi1oZWlnaHQ6IDM5MHB4O1xufVxuLnBvc19iYXNpY19mb3JtIC50YXhfYmxvY2sgcCB7XG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuOjpuZy1kZWVwLm1hdC1jaGlwLWxpc3Qtd3JhcHBlciB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICB0b3A6IC0xNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wYXltZW50LWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcbn1cblxuLnVpLmNoZWNrYm94IHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIG1hcmdpbjogNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi51aS5jaGVja2JveCBsYWJlbDpiZWZvcmUge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICB0b3A6IDFweDtcbiAgbGVmdDogMXB4O1xufVxuLnVpLmNoZWNrYm94IGxhYmVsOmFmdGVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0b3A6IDFweDtcbn1cbi51aS5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YmVmb3JlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM4NjdiMTtcbn1cbi51aS5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YWZ0ZXIge1xuICBjb2xvcjogIzM4NjdiMSAhaW1wb3J0YW50O1xufVxuXG4udWkuc2VnbWVudC5iZy1ncmV5IHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNENEQ2REM7XG59XG4udWkuc2VnbWVudC5iZy1ncmV5IC51aS5jaGVja2JveCB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5jYXJkRGV0YWlscyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5zcGFjaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAyMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMnB4O1xufVxuXG4udWkuZml0dGVkLmRpdmlkZXIge1xuICBtYXJnaW46IDMwcHggMHB4O1xufVxuXG4udWkucHJpbWFyeS5idXR0b24uYnJhbmRfYnV0dG9ucyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNjcsIDEyMiwgMjE4LCAwLjA1KSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBkYXNoZWQgIzQzN0FEQSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzQzN0FEQTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuLnVpLnByaW1hcnkuYnV0dG9uLmJyYW5kX2J1dHRvbnMgaS5pY29uIHtcbiAgY29sb3I6ICM0MzdBREE7XG59XG5cbi51aS5wcmltYXJ5LmJ1dHRvbi5hZGRfYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQzN0FEQTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNy4yNDQ0OHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDM3QURBICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMjJweDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiBhdXRvO1xufVxuXG4udWkucHJpbWFyeS5idXR0b24uYWRkX2J0bi5yZXNldCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0RjRGNEY7XG4gIGNvbG9yOiAjNEY0RjRGICFpbXBvcnRhbnQ7XG59XG5cbi5ub3Rlcy1zZWN0aW9uIHRleHRhcmVhIHtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi51aS50cmFuc3BhcmVudC5tYXJnaW4tcmlnaHQtMjAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnVpLmdyaWQuY2FyZC1zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDE2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgYm90dG9tOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5wb3NfYnRuLXBhbmVsLnNwYWNpbmcgYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICBib3R0b206IC00MHB4O1xufVxuXG4udWkuY2xlYXJpbmcuc2VnbWVudCB7XG4gIG1hcmdpbjogMHB4IDZweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi50YWJfbWFyZ2luIHtcbiAgbWFyZ2luOiA4cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTJweCAhaW1wb3J0YW50O1xufVxuXG4udWkuZm9ybSAuZGlzYWJsZWQuZmllbGQsIC51aS5mb3JtIC5kaXNhYmxlZC5maWVsZHMgLmZpZWxkLCAudWkuZm9ybSAuZmllbGQgOmRpc2FibGVkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNTksIDE2MiwgMTY3LCAwLjIpICFpbXBvcnRhbnQ7XG59XG5cbi5hbGlnbi1wb3MtYnRuIHtcbiAgdG9wOiAxMDhweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAuY2FyZC1zZWN0aW9uIC5laWdodC53aWRlLmNvbHVtbiB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAudWkuZ3JpZCAuZ3JpZHN0eWxlIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnVpLmdyaWQgLmdyaWRzdHlsZSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChtaW4td2lkdGg6IDc2N3B4KSB7XG4gIC51aS5ncmlkIC5mYXJlIHtcbiAgICB3aWR0aDogNzElICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudWkuZ3JpZCAuZmFyZSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC50YWIxIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1NXB4O1xuICB9XG5cbiAgLnVpLmNsZWFyaW5nLnNlZ21lbnQgLmJyYW5jaDEge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAwOXB4KSBhbmQgKG1pbi13aWR0aDogODA4cHgpIHtcbiAgLnVpLmZvcm0gLmZvdXIud2lkZS5maWVsZCB7XG4gICAgd2lkdGg6IDMzJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogODA3cHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAudWkuZm9ybSAuZm91ci53aWRlLmZpZWxkIHtcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnVpLmZvcm0gLmVpZ2h0LndpZGUuZmllbGQgLmZhcmUxIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnVpLmdyaWQgLmdyaWRzdHlsZSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICAudWkuZ3JpZCAuZ3JpZHN0eWxlMSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICAudWkuZ3JpZCAuZWlnaHQud2lkZS5jb2x1bW4gLmdyaWRzdHlsZTIge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnVpLmdyaWQgLmdyaWRzdHlsZTMge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnVpLmdyaWQgLmdyaWRzdHlsZTQge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NDBweCkgYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC51aS5mb3JtIC5uaW5lLndpZGUuZmllbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnVpLmZvcm0gLnNldmVuLndpZGUuZmllbGQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0NDBweCkgYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC51aS5ncmlkIC5mYXJlIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDI1cHgpIHtcbiAgLnVpLmNsZWFyaW5nLnNlZ21lbnQgLmJyYW5jaDIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/pos/pos-basic-edit/pos-basic-edit.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/layout/pos/pos-basic-edit/pos-basic-edit.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PosBasicEditComponent */

  /***/
  function srcAppLayoutPosPosBasicEditPosBasicEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PosBasicEditComponent", function () {
      return PosBasicEditComponent;
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


    var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/common.service */
    "./src/app/shared/services/common.service.ts");
    /* harmony import */


    var src_app_shared_services_pos_service_pos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/pos-service/pos-service */
    "./src/app/shared/services/pos-service/pos-service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PosBasicEditComponent = /*#__PURE__*/function () {
      function PosBasicEditComponent(fb, commonService, posService, toastr, router, activeRoute) {
        var _this18 = this;

        _classCallCheck(this, PosBasicEditComponent);

        this.fb = fb;
        this.commonService = commonService;
        this.posService = posService;
        this.toastr = toastr;
        this.router = router;
        this.activeRoute = activeRoute;
        this.countries = [];
        this.currencies = [];
        this.timezones = [];
        this.airports = [];
        this.isSubmitted = false;
        this.posInfo = {};
        this.isChecked = false;
        this.nego = {};
        this.destAirport = [];

        this.getAirportDetails = function () {
          _this18.commonService.getAirportsList().subscribe(function (res) {
            if (res.status) {
              _this18.airports = res.result;
            } else {
              _this18.toastr.error("".concat(res.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        };
      }

      _createClass(PosBasicEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.organisation_ID = this.activeRoute.snapshot.params.id;
          this.getOrganisationInfo(this.organisation_ID);
          this.initInfoForm();
          this.getCountries();
          this.getCurrencies();
          this.getTimeZones();
          this.getAirportDetails();
        }
      }, {
        key: "initInfoForm",
        value: function initInfoForm() {
          var _this19 = this;

          this.posBasicInfoForm = this.fb.group({
            organisation_id: [''],
            corporate_type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            domain_url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            country_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            timezone_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            payment_gateway: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            currency_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            agent_code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')]],
            associated_office: [''],
            contact: [''],
            credit_limit: [''],
            business_id: [''],
            numberOfUsers: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')]],
            iata_no: [''],
            domestictTaxCode: [''],
            domestictTaxPercentage: [''],
            domestictTaxCurrency: [''],
            domestictTaxAirport: [[]],
            amexCard: [false, []],
            queue: [false, []],
            internationalTaxPercentage: [''],
            nonAirlineTax: [''],
            tab: ['basic'],
            pos_negofares: this.fb.group({
              tourOperatorDeffered: [],
              bulkContract: [],
              marine: [],
              tourOperatorSemiDeffered: [],
              humanitarian: [],
              publishedOnly: [],
              privateOnly: [],
              publishedAndPrivate: [''],
              all: []
            }),
            contact_person_name: [''],
            contact_mobile_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')],
            contact_person_email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
            address_1: [''],
            address_2: [''],
            city_id: [''],
            state_province: [''],
            zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')],
            contact_country_id: [''],
            active_suppliers: ['']
          });
          this.posBasicInfoForm.get('corporate_type').valueChanges.subscribe(function (val) {
            if (val == 'Agent') {
              _this19.setFormAsAgent();
            }

            if (val == 'B2C') {
              _this19.setFormAsB2C();
            }

            if (val == 'API') {
              _this19.setFormAsApiOut();
            }

            if (val == 'Mobile') {
              _this19.setFormAsMobile();
            }
          });
          this.posBasicInfoForm.get('amexCard').valueChanges.subscribe(function (val) {
            if (val && val == true) {
              _this19.posBasicInfoForm.addControl('amex_card', _this19.fb.group({
                cardHolderName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                cardHolderType: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                cardnumber: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                cardExpMonth: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                cardExpYear: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                cardcvv: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
              }));

              _this19.ngAfterViewInit();
            } else {
              _this19.posBasicInfoForm.removeControl('amex_card');
            }
          });
          this.posBasicInfoForm.get('queue').valueChanges.subscribe(function (val) {
            if (val && val == true) {
              _this19.posBasicInfoForm.addControl('queue_service', _this19.fb.group({
                queue1: [null],
                queue2: [null],
                queue3: [null]
              }));

              _this19.ngAfterViewInit();
            } else {
              _this19.posBasicInfoForm.removeControl('queue_service');
            }
          });
        }
      }, {
        key: "setFormAsAgent",
        value: function setFormAsAgent() {
          this.posBasicInfoForm.addControl('credit_limit', this.fb.control(''));
          this.posBasicInfoForm.addControl('numberOfUsers', this.fb.control(''));
          this.posBasicInfoForm.removeControl('domain_url');
        }
      }, {
        key: "setFormAsB2C",
        value: function setFormAsB2C() {
          this.posBasicInfoForm.addControl('domain_url', this.fb.control(''));
          this.posBasicInfoForm.removeControl('credit_limit');
          this.posBasicInfoForm.removeControl('numberOfUsers');
        }
      }, {
        key: "setFormAsMobile",
        value: function setFormAsMobile() {
          this.posBasicInfoForm.removeControl('credit_limit');
          this.posBasicInfoForm.removeControl('numberOfUsers');
          this.posBasicInfoForm.removeControl('domain_url');
        }
      }, {
        key: "setFormAsApiOut",
        value: function setFormAsApiOut() {
          this.posBasicInfoForm.addControl('credit_limit', this.fb.control(''));
          this.posBasicInfoForm.addControl('numberOfUsers', this.fb.control(''));
          this.posBasicInfoForm.removeControl('domain_url');
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          $('.ui.dropdown').dropdown();
          $('.ui.dropdownThree').dropdown('refresh'); // $(document).ready(function () {
          //   $('.ui.dropdown').dropdown();
          //   $('.ui.checkbox').checkbox();
          //   $('.ui.dropdownThree').dropdown();
          //   $(document).ready(function () {
          //     this._globals = localStorage.getItem('_globals');
          //     let token = JSON.parse(this._globals).token;
          //     $('.dropdownThree').dropdown({
          //       type: 'category',
          //       minCharacters: 2,
          //       maxCharacters: 3,
          //       responseAsync: true,
          //       apiSettings: {
          //         url: environment.serverURL + '/api/get-airports-cache/{query}',
          //         beforeXHR: function (xhr) {
          //           xhr.setRequestHeader('Authorization', token);
          //           return xhr;
          //         },
          //         onResponse: function (response) {
          //           const result = { success: true, results: [] };
          //           $.each(response.result, function (index, item) {
          //             result['results'].push({
          //               name: item.AirportCode,
          //               value: item.AirportCode
          //             })
          //           });
          //           console.log("res:::::",result)
          //           return result;
          //         },
          //       },
          //     });
          //   });
          // })
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          var _this20 = this;

          this.commonService.getCountryList().subscribe(function (result) {
            _this20.countries = result.countries;
          });
        }
      }, {
        key: "getCurrencies",
        value: function getCurrencies() {
          var _this21 = this;

          this.commonService.getCurrencyList().subscribe(function (result) {
            _this21.currencies = result.currencies;
          });
        }
      }, {
        key: "getTimeZones",
        value: function getTimeZones() {
          var _this22 = this;

          this.commonService.getTimeZones().subscribe(function (result) {
            _this22.timezones = result.timeZones;
          });
        }
      }, {
        key: "getOrganisationInfo",
        value: function getOrganisationInfo(organisation_ID) {
          var _this23 = this;

          this.posService.getPosDetails(organisation_ID).subscribe(function (result) {
            if (result.status) {
              _this23.posInfo = result.result;
              if (_this23.posInfo.corporate_type && _this23.posInfo.corporate_type != null && _this23.posInfo.corporate_type != '') // this.disableCorporateChange = true;
                if (_this23.posInfo.corporate_type == 'Agent') _this23.setFormAsAgent();
              if (_this23.posInfo.corporate_type == 'B2C') _this23.setFormAsB2C();
              if (_this23.posInfo.corporate_type == 'API') _this23.setFormAsApiOut();
              if (_this23.posInfo.corporate_type == 'Mobile') _this23.setFormAsMobile();

              if (_this23.posInfo.queue_service) {
                _this23.posBasicInfoForm.patchValue({
                  queue: true
                });
              }

              if (_this23.posInfo.amex_card) {
                _this23.posBasicInfoForm.patchValue({
                  amexCard: true
                });
              }

              var numberOfUsers = _this23.posInfo.numberOfUsers;

              _this23.posBasicInfoForm.patchValue({
                organisation_id: _this23.posInfo.organisation_id,
                agent_code: _this23.posInfo.agent_code,
                corporate_type: _this23.posInfo.corporate_type,
                domain_url: _this23.posInfo.domain_url,
                name: _this23.posInfo.name,
                associated_office: _this23.posInfo.associated_office,
                email: _this23.posInfo.email,
                contact: _this23.posInfo.contact,
                payment_gateway: _this23.posInfo.payment_gateway,
                currency_id: _this23.posInfo.currency_id,
                credit_limit: _this23.posInfo.credit_limit,
                country_id: _this23.posInfo.country_id,
                timezone_id: _this23.posInfo.timezone_id,
                business_id: _this23.posInfo.business_id,
                numberOfUsers: numberOfUsers,
                iata_no: _this23.posInfo.iata_no,
                domestictTaxCode: _this23.posInfo.domestictTaxCode,
                domestictTaxPercentage: _this23.posInfo.domestictTaxPercentage,
                domestictTaxCurrency: _this23.posInfo.domestictTaxCurrency,
                domestictTaxAirport: JSON.parse(_this23.posInfo.domestictTaxAirport),
                internationalTaxPercentage: _this23.posInfo.internationalTaxPercentage,
                nonAirlineTax: _this23.posInfo.nonAirlineTax,
                queues: _this23.posInfo.queue_service ? JSON.parse(_this23.posInfo.queue_service) : {},
                amexCardDetails: _this23.posInfo.amex_card ? JSON.parse(_this23.posInfo.amex_card) : {},
                pos_negofares: _this23.posInfo.pos_negofares ? JSON.parse(_this23.posInfo.pos_negofares) : {},
                terms_conditions: _this23.posInfo.terms_conditions,
                address_1: _this23.posInfo.address_1 != null ? _this23.posInfo.address_1 : '',
                address_2: _this23.posInfo.address_2 != null ? _this23.posInfo.address_2 : '',
                city_id: _this23.posInfo.city_id != null ? _this23.posInfo.city_id : '',
                state_province: _this23.posInfo.state_province != null ? _this23.posInfo.state_province : '',
                zip: _this23.posInfo.zip != null ? _this23.posInfo.zip : '',
                contact_country_id: _this23.posInfo.contact_country_id != null ? _this23.posInfo.contact_country_id : '',
                active_suppliers: _this23.posInfo.active_suppliers != "null" ? JSON.parse(_this23.posInfo.active_suppliers) : ''
              });

              _this23.ngAfterViewInit();
            }
          });
        }
      }, {
        key: "updatePosBasicInfo",
        value: function updatePosBasicInfo() {
          var _this24 = this;

          this.posBasicInfoForm.patchValue({
            organisation_id: this.posInfo.organisation_id
          });
          this.posService.updatePosDetails(this.posBasicInfoForm.value).subscribe(function (result) {
            if (result.status) {
              _this24.toastr.success("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-top-right'
              });

              _this24.router.navigate(['/pos/pos-read/']);
            } else {
              _this24.toastr.error("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-top-right'
              });
            }
          });
        }
      }, {
        key: "checkAllnego",
        value: function checkAllnego() {
          this.isChecked = !this.isChecked;

          if (this.isChecked == true) {
            this.nego = {
              "tourOperatorDeffered": true,
              "bulkContract": true,
              "marine": true,
              "tourOperatorSemiDeffered": true,
              "publishedAndPrivate": true,
              "humanitarian": true,
              "publishedOnly": true,
              "privateOnly": true
            };
            this.posBasicInfoForm.patchValue({
              pos_negofares: this.nego
            });
          } else {
            this.nego = {
              "tourOperatorDeffered": false,
              "bulkContract": false,
              "marine": false,
              "tourOperatorSemiDeffered": false,
              "publishedAndPrivate": false,
              "humanitarian": false,
              "publishedOnly": false,
              "privateOnly": false
            };
            this.posBasicInfoForm.patchValue({
              pos_negofares: this.nego
            });
          }
        }
      }, {
        key: "gfc",
        get: function get() {
          return this.posBasicInfoForm.controls;
        }
      }]);

      return PosBasicEditComponent;
    }();

    PosBasicEditComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]
      }, {
        type: src_app_shared_services_pos_service_pos_service__WEBPACK_IMPORTED_MODULE_4__["PosService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]
      }];
    };

    PosBasicEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pos-basic-edit',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pos-basic-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/pos-basic-edit/pos-basic-edit.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pos-basic-edit.component.scss */
      "./src/app/layout/pos/pos-basic-edit/pos-basic-edit.component.scss"))["default"]]
    })], PosBasicEditComponent);
    /***/
  },

  /***/
  "./src/app/layout/pos/pos-branch/pos-branch.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/layout/pos/pos-branch/pos-branch.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutPosPosBranchPosBranchComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".stepper-grid {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n.stepper-grid .stepper-grid_step {\n  display: flex;\n  align-items: center;\n  opacity: 0.6;\n  cursor: pointer;\n}\n.stepper-grid .stepper-grid_step._active {\n  opacity: 1;\n  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div {\n  background-color: #062862;\n  border: 0;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div div.image {\n  background-color: white;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div:hover {\n  border: 2px solid #A6B1C3;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon label {\n  border: 0;\n  background-color: #062862;\n  color: white;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-border hr {\n  border-bottom: 2px solid #062862;\n}\n.stepper-grid .stepper-grid_step._activated {\n  opacity: 1;\n  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div {\n  background-color: #437ADA;\n  border: 0;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div div.image {\n  background-color: white;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div:hover {\n  border: 2px solid #A6B1C3;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon label {\n  border: 0;\n  background-color: #437ADA;\n  color: white;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-border hr {\n  border-bottom: 2px solid #437ADA;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div {\n  background-color: transparent;\n  border: 2px solid #A6B1C3;\n  color: white;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  border-radius: 50%;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon label {\n  width: 100px;\n  height: auto;\n  line-height: 24px;\n  text-align: center;\n  background-color: transparent;\n  border: 2px solid #A6B1C3;\n  margin-top: 15px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 600 !important;\n  font-size: 13px;\n  color: #A6B1C3;\n  border-radius: 8px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon label._last {\n  width: 150px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-border {\n  width: 100%;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-border hr {\n  margin-top: -24px;\n  width: 100%;\n  height: 2px;\n  background: none;\n  border-bottom: 2px solid #A6B1C3;\n}\n.stepper-grid-content {\n  display: none;\n}\n.stepper-grid-content._active {\n  display: block;\n}\n.outer-basic {\n  padding-bottom: 5px !important;\n}\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n  padding: 0px !important;\n}\n.ui.header {\n  margin: 0px;\n  padding-bottom: 24px;\n  font-size: 18px;\n  font-weight: 400;\n}\n.outer-basic h3.booking-header {\n  margin: 0;\n  color: #4F4F4F;\n  font-size: 10px;\n  font-weight: 400;\n  line-height: 22px;\n  margin-bottom: 25px;\n}\n.form-inner {\n  padding: 0px;\n}\nlabel {\n  color: rgba(6, 40, 98, 0.5) !important;\n  font-weight: 600 !important;\n  text-transform: uppercase;\n}\n.trip-fields input {\n  background-color: #fff !important;\n  border-radius: 5.12155px !important;\n}\n.trip-fields input::-webkit-input-placeholder {\n  font-weight: 600 !important;\n  color: #062862;\n  font-size: 13px !important;\n}\n.trip-fields input:-moz-placeholder {\n  font-weight: 600 !important;\n  color: #062862;\n  font-size: 13px !important;\n}\n.trip-fields input::-moz-placeholder {\n  font-weight: 600 !important;\n  color: #062862;\n  font-size: 13px !important;\n}\n.trip-fields input:-ms-input-placeholder {\n  font-weight: 600 !important;\n  color: #062862;\n  font-size: 13px !important;\n}\n.bookings_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n.bookings_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n.bookings_pickers .input .icon {\n  opacity: 1;\n  z-index: 100;\n}\n.bookings_pickers .input .icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n.bookings_pickers .input .icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n.bookings_pickers .input .search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.bookings_pickers .input .search.dropdown .search {\n  margin-left: 42px !important;\n}\n.bookings_pickers .input .search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n.bookings_btn-panel {\n  padding: 20px 2px;\n}\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #e0e0e0;\n}\ntd {\n  color: #4f4f4f;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 10px;\n  line-height: 11px;\n  text-align: center;\n}\ndiv .confirm {\n  width: 63px;\n}\ndiv .confirm {\n  width: 63px;\n}\ndiv .recConfirm {\n  height: 18px;\n  width: 62px;\n  background-color: #c4f0b4;\n  color: #426f32;\n  font-size: 11px;\n  text-align: center;\n  line-height: 18px;\n  border-radius: 6px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 600;\n}\ndiv .recConfirm.hold {\n  background-color: #f5e29b;\n  color: #6a5b1e;\n}\ndiv .recConfirm.void {\n  background-color: #e6e6e6;\n  color: #606060;\n}\ndiv .recConfirm.cancel {\n  background-color: #ff957c;\n  color: #7b301e;\n}\ndiv .recConfirm.refund {\n  background-color: #77acff;\n  color: #082e6a;\n}\ndiv .recConfirm.failed {\n  background-color: #ff9595;\n  color: #660a0a;\n}\ndiv .tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\ndiv .field input::-webkit-input-placeholder {\n  font-size: 12px;\n}\ndiv .field input::-moz-placeholder {\n  font-size: 12px;\n}\ndiv .field input::-ms-input-placeholder {\n  font-size: 12px;\n}\ndiv .field input::placeholder {\n  font-size: 12px;\n}\ndiv .dropdown .text {\n  font-size: 12px;\n}\ndiv .eye-icon {\n  font-size: 12px;\n  width: 30px;\n  height: auto;\n  border-radius: 6px;\n  display: block;\n}\ndiv .eye-icon:hover {\n  cursor: pointer;\n}\ndiv .b2c-list-user-table__segment-loader {\n  height: 450px;\n  background-color: white !important;\n  border: 0;\n  box-shadow: none;\n}\ndiv .b2c-list-user-table__segment-loader .ui.inverted.dimmer {\n  background-color: white !important;\n}\ndiv .b2c-list-user-table__segment-loader .eye-icon {\n  font-size: 12px;\n  color: #3867b1;\n}\n.ui.segment.b2c-list-user-table__segment-loader {\n  background-color: white;\n  border: 0;\n  box-shadow: none;\n  height: 450px;\n}\n.ui.segment.b2c-list-user-table__segment-loader .ui.active.dimmer {\n  background-color: white !important;\n}\n.validations {\n  color: red;\n  font-size: x-small;\n}\n.download-img {\n  display: inline-block !important;\n  padding-top: 18px;\n  cursor: pointer;\n}\n.download-img .download-img_icon {\n  width: 25px;\n  margin-left: 20px;\n}\n.outer-basic form {\n  background: #fff;\n  padding: 0px;\n  margin: 0px 24px 24px;\n}\n.ui.form .eight.field.bookings_btn-panel {\n  padding: 0px;\n  text-align: right;\n}\n.agent-name-booking {\n  margin: auto 24px !important;\n}\n.agent-name-booking .eight.wide.field {\n  padding: 0px;\n}\n.agent-name-booking .eight.wide.field button {\n  margin-right: 0px;\n}\n.icon {\n  opacity: 1;\n  z-index: 100;\n}\n.icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n.icon .bookings_input__placeholder-icon.cal {\n  width: 16px;\n  margin-top: 0px;\n}\n.icon .bookings_input__placeholder-icon.call {\n  width: 10px;\n  margin-top: 0px;\n}\n.icon .bookings_input__placeholder-icon.calender {\n  width: 18px;\n  margin-top: 10px;\n}\n.btn-wrap {\n  margin: 0 24px;\n}\n@media (max-width: 1440px) {\n  .booking-header.booking_comp {\n    padding: 40px 24px 0px !important;\n  }\n\n  .ui.fluid .outer-basic .outer-basicForm .ui.form .booking-search-panel {\n    width: 92%;\n    padding: 0px;\n  }\n\n  .agent-name-booking {\n    margin: 0px 24px !important;\n  }\n}\n@media (max-width: 1280px) {\n  .booking-header.booking_comp {\n    padding: 40px 20px 0px !important;\n  }\n\n  .ui.fluid .outer-basic .outer-basicForm .ui.form .booking-search-panel {\n    width: 100%;\n    padding: 0px;\n  }\n\n  .agent-name-booking {\n    margin: 0px 20px !important;\n  }\n}\n@media (max-width: 991px) {\n  .ui.form .form-inner .fields {\n    display: block;\n  }\n  .ui.form .form-inner .fields .branch {\n    display: inline-block;\n    width: 33.3% !important;\n  }\n  .ui.form .form-inner .fields .buttondiv {\n    display: block;\n    width: 100% !important;\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Bvcy9wb3MtYnJhbmNoL0U6XFxCZWxhbFxccHJvamVjdHNcXHByb2R1Y3Rpb24tYnVpbGRcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxjb21vbi1zdHlsZXNcXHN0ZXBwZXIuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3Bvcy9wb3MtYnJhbmNoL3Bvcy1icmFuY2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9wb3MvcG9zLWJyYW5jaC9FOlxcQmVsYWxcXHByb2plY3RzXFxwcm9kdWN0aW9uLWJ1aWxkXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcY29tb24tc3R5bGVzXFxkZXNpZ24tcGFsZXR0ZS5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcG9zL3Bvcy1icmFuY2gvRTpcXEJlbGFsXFxwcm9qZWN0c1xccHJvZHVjdGlvbi1idWlsZFxcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxwb3NcXHBvcy1icmFuY2hcXHBvcy1icmFuY2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9wb3MvcG9zLWJyYW5jaC9FOlxcQmVsYWxcXHByb2plY3RzXFxwcm9kdWN0aW9uLWJ1aWxkXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcY29tb24tc3R5bGVzXFxtaXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDSjtBRENJO0VBQ0UsVUFBQTtFQUNBLDBEQUFBO0FDQ047QURFUTtFQUNFLHlCRWRRO0VGZVIsU0FBQTtBQ0FWO0FERVU7RUFDRSx1QkFBQTtBQ0FaO0FER1U7RUFDRSx5QkFBQTtBQ0RaO0FES1E7RUFDRSxTQUFBO0VBQ0EseUJFNUJRO0VGNkJSLFlBQUE7QUNIVjtBRFFRO0VBQ0UsZ0NBQUE7QUNOVjtBRFdJO0VBQ0UsVUFBQTtF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RTVGQTtFQUNJO0lBQ0ksaUNBQUE7RUYrRk47O0VFN0ZFO0lBQ0ksVUFBQTtJQUNBLFlBQUE7RUZnR047O0VFOUZFO0lBQ0ksMkJBQUE7RUZpR047QUFDRjtBRTlGQTtFQUNJO0lBQ0ksaUNBQUE7RUZnR047O0VFOUZFO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RUZpR047O0VFL0ZFO0lBQ0ksMkJBQUE7RUZrR047QUFDRjtBRS9GQTtFQUdZO0lBQ0ksY0FBQTtFRitGZDtFRTlGYztJQUNJLHFCQUFBO0lBQ0EsdUJBQUE7RUZnR2xCO0VFOUZjO0lBQ0ksY0FBQTtJQUNBLHNCQUFBO0lBQ0EsaUJBQUE7RUZnR2xCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcG9zL3Bvcy1icmFuY2gvcG9zLWJyYW5jaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGVwcGVyLWdyaWQge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgLnN0ZXBwZXItZ3JpZF9zdGVwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3BhY2l0eTogLjY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJi5fYWN0aXZlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxuXHJcbiAgICAgIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIHtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRlZXAtYmx1ZS1jb2xvcjtcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuXHJcbiAgICAgICAgICBkaXYuaW1hZ2Uge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkZWVwLWJsdWUtY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtYm9yZGVyIHtcclxuICAgICAgICBociB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGRlZXAtYmx1ZS1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLl9hY3RpdmF0ZWQge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG5cclxuICAgICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24ge1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuXHJcbiAgICAgICAgICBkaXYuaW1hZ2Uge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciB7XHJcbiAgICAgICAgaHIge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXByaW1hcnk7XHJcblxyXG4gICAgICAgICYuX2xhc3Qge1xyXG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIGhyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMjRweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc3RlcHBlci1ncmlkLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICYuX2FjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuIiwiLnN0ZXBwZXItZ3JpZCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjI4NjI7XG4gIGJvcmRlcjogMDtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmUgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IGRpdi5pbWFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXY6aG92ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjQTZCMUMzO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBsYWJlbCB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2Mjg2MjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtYm9yZGVyIGhyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNjI4NjI7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzN0FEQTtcbiAgYm9yZGVyOiAwO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2YXRlZCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYgZGl2LmltYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdjpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBNkIxQzM7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGxhYmVsIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM3QURBO1xuICBjb2xvcjogd2hpdGU7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIgaHIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzQzN0FEQTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAjQTZCMUMzO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGxhYmVsIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAjQTZCMUMzO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjQTZCMUMzO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBsYWJlbC5fbGFzdCB7XG4gIHdpZHRoOiAxNTBweDtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIgaHIge1xuICBtYXJnaW4tdG9wOiAtMjRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0E2QjFDMztcbn1cblxuLnN0ZXBwZXItZ3JpZC1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zdGVwcGVyLWdyaWQtY29udGVudC5fYWN0aXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5vdXRlci1iYXNpYyB7XG4gIHBhZGRpbmctYm90dG9tOiA1cHggIWltcG9ydGFudDtcbn1cblxuLm91dGVyLWJhc2ljRm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udWkuaGVhZGVyIHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5vdXRlci1iYXNpYyBoMy5ib29raW5nLWhlYWRlciB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG5cbi5mb3JtLWlubmVyIHtcbiAgcGFkZGluZzogMHB4O1xufVxuXG5sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDYsIDQwLCA5OCwgMC41KSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi50cmlwLWZpZWxkcyBpbnB1dCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNS4xMjE1NXB4ICFpbXBvcnRhbnQ7XG59XG4udHJpcC1maWVsZHMgaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDYyODYyO1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbn1cbi50cmlwLWZpZWxkcyBpbnB1dDotbW96LXBsYWNlaG9sZGVyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzA2Mjg2MjtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG59XG4udHJpcC1maWVsZHMgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDYyODYyO1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbn1cbi50cmlwLWZpZWxkcyBpbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDYyODYyO1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbn1cblxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0LmJvb2tpbmdzX2RhdGVwaWNrZXIge1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBtYXgtd2lkdGg6IDEzOHB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC51aS5iYXNpYy5mbG9hdGluZy5idXR0b24ge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiByZ2JhKDE1MiwgMTUyLCAxNTIsIDAuNikgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTFweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuaWNvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xuICB3aWR0aDogMjRweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbi5jYWwge1xuICB3aWR0aDogMThweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuc2VhcmNoLmRyb3Bkb3duIHtcbiAgd2lkdGg6IDIxOHB4O1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5zZWFyY2guZHJvcGRvd24gLnNlYXJjaCB7XG4gIG1hcmdpbi1sZWZ0OiA0MnB4ICFpbXBvcnRhbnQ7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnNlYXJjaC5kcm9wZG93biAuZGVmYXVsdC50ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogOHB4IDAgMCAzOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib29raW5nc19idG4tcGFuZWwge1xuICBwYWRkaW5nOiAyMHB4IDJweDtcbn1cblxuaHIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZTBlMGUwO1xufVxuXG50ZCB7XG4gIGNvbG9yOiAjNGY0ZjRmO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5kaXYgLmNvbmZpcm0ge1xuICB3aWR0aDogNjNweDtcbn1cbmRpdiAuY29uZmlybSB7XG4gIHdpZHRoOiA2M3B4O1xufVxuZGl2IC5yZWNDb25maXJtIHtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogNjJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M0ZjBiNDtcbiAgY29sb3I6ICM0MjZmMzI7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmRpdiAucmVjQ29uZmlybS5ob2xkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZTI5YjtcbiAgY29sb3I6ICM2YTViMWU7XG59XG5kaXYgLnJlY0NvbmZpcm0udm9pZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG4gIGNvbG9yOiAjNjA2MDYwO1xufVxuZGl2IC5yZWNDb25maXJtLmNhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjk1N2M7XG4gIGNvbG9yOiAjN2IzMDFlO1xufVxuZGl2IC5yZWNDb25maXJtLnJlZnVuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3N2FjZmY7XG4gIGNvbG9yOiAjMDgyZTZhO1xufVxuZGl2IC5yZWNDb25maXJtLmZhaWxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjk1OTU7XG4gIGNvbG9yOiAjNjYwYTBhO1xufVxuZGl2IC50YWIuc2VnbWVudCB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuZGl2IC5maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5kaXYgLmRyb3Bkb3duIC50ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuZGl2IC5leWUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmRpdiAuZXllLWljb246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5kaXYgLmIyYy1saXN0LXVzZXItdGFibGVfX3NlZ21lbnQtbG9hZGVyIHtcbiAgaGVpZ2h0OiA0NTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuZGl2IC5iMmMtbGlzdC11c2VyLXRhYmxlX19zZWdtZW50LWxvYWRlciAudWkuaW52ZXJ0ZWQuZGltbWVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbmRpdiAuYjJjLWxpc3QtdXNlci10YWJsZV9fc2VnbWVudC1sb2FkZXIgLmV5ZS1pY29uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzM4NjdiMTtcbn1cblxuLnVpLnNlZ21lbnQuYjJjLWxpc3QtdXNlci10YWJsZV9fc2VnbWVudC1sb2FkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAwO1xuICBib3gtc2hhZG93OiBub25lO1xuICBoZWlnaHQ6IDQ1MHB4O1xufVxuLnVpLnNlZ21lbnQuYjJjLWxpc3QtdXNlci10YWJsZV9fc2VnbWVudC1sb2FkZXIgLnVpLmFjdGl2ZS5kaW1tZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4udmFsaWRhdGlvbnMge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IHgtc21hbGw7XG59XG5cbi5kb3dubG9hZC1pbWcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kb3dubG9hZC1pbWcgLmRvd25sb2FkLWltZ19pY29uIHtcbiAgd2lkdGg6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ub3V0ZXItYmFzaWMgZm9ybSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHggMjRweCAyNHB4O1xufVxuXG4udWkuZm9ybSAuZWlnaHQuZmllbGQuYm9va2luZ3NfYnRuLXBhbmVsIHtcbiAgcGFkZGluZzogMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmFnZW50LW5hbWUtYm9va2luZyB7XG4gIG1hcmdpbjogYXV0byAyNHB4ICFpbXBvcnRhbnQ7XG59XG4uYWdlbnQtbmFtZS1ib29raW5nIC5laWdodC53aWRlLmZpZWxkIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLmFnZW50LW5hbWUtYm9va2luZyAuZWlnaHQud2lkZS5maWVsZCBidXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cblxuLmljb24ge1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxMDA7XG59XG4uaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xuICB3aWR0aDogMjRweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbCB7XG4gIHdpZHRoOiAxNnB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4uaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsbCB7XG4gIHdpZHRoOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG4uaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsZW5kZXIge1xuICB3aWR0aDogMThweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmJ0bi13cmFwIHtcbiAgbWFyZ2luOiAwIDI0cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLmJvb2tpbmctaGVhZGVyLmJvb2tpbmdfY29tcCB7XG4gICAgcGFkZGluZzogNDBweCAyNHB4IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnVpLmZsdWlkIC5vdXRlci1iYXNpYyAub3V0ZXItYmFzaWNGb3JtIC51aS5mb3JtIC5ib29raW5nLXNlYXJjaC1wYW5lbCB7XG4gICAgd2lkdGg6IDkyJTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cblxuICAuYWdlbnQtbmFtZS1ib29raW5nIHtcbiAgICBtYXJnaW46IDBweCAyNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgLmJvb2tpbmctaGVhZGVyLmJvb2tpbmdfY29tcCB7XG4gICAgcGFkZGluZzogNDBweCAyMHB4IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnVpLmZsdWlkIC5vdXRlci1iYXNpYyAub3V0ZXItYmFzaWNGb3JtIC51aS5mb3JtIC5ib29raW5nLXNlYXJjaC1wYW5lbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG5cbiAgLmFnZW50LW5hbWUtYm9va2luZyB7XG4gICAgbWFyZ2luOiAwcHggMjBweCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnVpLmZvcm0gLmZvcm0taW5uZXIgLmZpZWxkcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnVpLmZvcm0gLmZvcm0taW5uZXIgLmZpZWxkcyAuYnJhbmNoIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDMzLjMlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnVpLmZvcm0gLmZvcm0taW5uZXIgLmZpZWxkcyAuYnV0dG9uZGl2IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59IiwiJHByaW1hcnktY29sb3I6ICM0MzdBREE7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNBNkIxQzM7XHJcbiRkZWVwLWJsdWUtY29sb3I6ICMwNjI4NjI7XHJcbiRsaWdodC1zbW9rZS1jb2xvcjogI2U1ZTVlNTtcclxuJHZvaWxhLWdyZWVuOiAjODRCQzZBO1xyXG4kcHVyZS13aGl0ZTogd2hpdGU7XHJcbiRmYXVsdC1jb2xvcjogI0RFNzk3OTtcclxuJHdhcm5pbmctY29sb3I6ICNFQ0MwNEU7XHJcbiRzdWNjZXNzLWNvbG9yOiAjNzNCMjVEO1xyXG5cclxuJGJvZHktYmFzZTogI2ZmZjtcclxuJGNvcnBvcmF0ZS1ibHVlLWJhc2U6ICM0NTY3QUM7XHJcblxyXG4kY29udGFpbmVyLWJhc2U6IHdoaXRlO1xyXG4kY29udGFpbmVyLWJhc2Utc2hhZG93OiAwIDBweCAzcHggcmdiYSg2MCwgNjQsIDY3LCAwLjMpLCAwIDRweCA4cHggMnB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNSk7XHJcbiRjb250YWluZXItZHJvcGRvd25zLXNoYWRvdzogMHB4IDhweCAxNHB4IHJnYmEoMCwgNTgsIDE2NCwgLjIpO1xyXG5cclxuJHByaW1hcnktc2hhZG93OiAwcHggNC44M3B4IDE2cHggcmdiYSg2NywgMTIyLCAyMTgsIC41KTtcclxuJGxpZ2h0LXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgwLCA1OCwgMTY0LCAuMjUpO1xyXG4kZmFkZWQtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDE2NywgMTczLCAxODIsIC4yKTtcclxuJGxpZ2h0LWV4dGVuZGVkLXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgwLCA1OCwgMTY0LCAuMjUpO1xyXG5cclxuJGJvcmRlci1yYWRpdXMtcHJpbWFyeTogOHB4O1xyXG4kYm9yZGVyLXJhZGl1cy1zZWNvbmRhcnk6IDZweDtcclxuXHJcbiRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiRmb250LXdlaWdodC1ub3JtYWw6IDQwMDtcclxuXHJcbiR0b2FzdC1pbmZvLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuJHRvYXN0LWluZm8tc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTExLCAwLCAwLCAuMik7XHJcblxyXG4kdG9hc3QtZXJyb3ItY29sb3I6ICRmYXVsdC1jb2xvcjtcclxuJHRvYXN0LWVycm9yLXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDExMSwgMCwgMCwgLjIpO1xyXG5cclxuJHRvYXN0LXdhcm5pbmctY29sb3I6ICR3YXJuaW5nLWNvbG9yO1xyXG4kdG9hc3Qtd2FybmluZy1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxNzcsIDEyNywgMCwgLjIpO1xyXG5cclxuJHRvYXN0LXN1Y2Nlc3MtY29sb3I6ICRzdWNjZXNzLWNvbG9yO1xyXG4kdG9hc3Qtc3VjY2Vzcy1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgzNCwgMTMwLCAwLCAuMik7XHJcbiIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uL2NvbW9uLXN0eWxlcy9jb21tb24uc2Nzc1wiO1xyXG4ub3V0ZXItYmFzaWMge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWNGb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51aS5oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpYyBoMy5ib29raW5nLWhlYWRlciB7XHJcbiAgICAvLyBmb250LXNpemU6IDI4cHg7XHJcbiAgICAvLyBjb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAvLyBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAzNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbn1cclxuXHJcbi5mb3JtLWlubmVyIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgY29sb3I6IHJnYmEoJGNvbG9yOiAkZGVlcC1ibHVlLWNvbG9yLCAkYWxwaGE6IC41KSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnRyaXAtZmllbGRzIHtcclxuICAgIGlucHV0IHtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogJHByaW1hcnktY29sb3IsICRhbHBoYTogLjE4KTtcclxuICAgICAgICAvLyBib3JkZXI6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNS4xMjE1NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgQGluY2x1ZGUgcGxhY2Vob2xkZXIge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkZGVlcC1ibHVlLWNvbG9yO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCB7XHJcbiAgICAmLmJvb2tpbmdzX2RhdGVwaWNrZXIge1xyXG4gICAgICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMzhweDtcclxuICAgIH1cclxuICAgIC51aS5iYXNpYy5mbG9hdGluZy5idXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogcmdiYSgxNTIsIDE1MiwgMTUyLCAwLjYpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4gICAgfVxyXG4gICAgLmljb24ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgICAgICYuY2FsIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zZWFyY2guZHJvcGRvd24ge1xyXG4gICAgICAgIHdpZHRoOiAyMThweDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQycHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRlZmF1bHQudGV4dCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAwIDAgMzhweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJvb2tpbmdzX2J0bi1wYW5lbCB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDJweDtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZTBlMGUwO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgICBjb2xvcjogIzRmNGY0ZjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5kaXYge1xyXG4gICAgLmNvbmZpcm0ge1xyXG4gICAgICAgIHdpZHRoOiA2M3B4O1xyXG4gICAgfVxyXG4gICAgLmNvbmZpcm0ge1xyXG4gICAgICAgIHdpZHRoOiA2M3B4O1xyXG4gICAgfVxyXG4gICAgLnJlY0NvbmZpcm0ge1xyXG4gICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICB3aWR0aDogNjJweDtcclxuICAgICAgICAvLyBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRmMGI0O1xyXG4gICAgICAgIGNvbG9yOiAjNDI2ZjMyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtc2Vjb25kYXJ5O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICYuaG9sZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWUyOWI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNmE1YjFlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLnZvaWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2O1xyXG4gICAgICAgICAgICBjb2xvcjogIzYwNjA2MDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5jYW5jZWwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5NTdjO1xyXG4gICAgICAgICAgICBjb2xvcjogIzdiMzAxZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5yZWZ1bmQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdhY2ZmO1xyXG4gICAgICAgICAgICBjb2xvcjogIzA4MmU2YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5mYWlsZWQge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY5NTk1O1xyXG4gICAgICAgICAgICBjb2xvcjogIzY2MGEwYTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGFiLnNlZ21lbnQge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgfVxyXG4gICAgLmZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgLmRyb3Bkb3duIC50ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICAuZXllLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAvLyBib3gtc2hhZG93OiAkbGlnaHQtZXh0ZW5kZWQtc2hhZG93O1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zZWNvbmRhcnk7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6ICRwcmltYXJ5LXNoYWRvdztcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAvLyB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC44cyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYjJjLWxpc3QtdXNlci10YWJsZV9fc2VnbWVudC1sb2FkZXIge1xyXG4gICAgICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAudWkuaW52ZXJ0ZWQuZGltbWVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmV5ZS1pY29uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzM4NjdiMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS5zZWdtZW50LmIyYy1saXN0LXVzZXItdGFibGVfX3NlZ21lbnQtbG9hZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgICAudWkuYWN0aXZlLmRpbW1lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnZhbGlkYXRpb25zIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbn1cclxuXHJcbi5kb3dubG9hZC1pbWcge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMThweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC5kb3dubG9hZC1pbWdfaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpYyB7XHJcbiAgICBmb3JtIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBtYXJnaW46IDBweCAyNHB4IDI0cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS5mb3JtIC5laWdodC5maWVsZC5ib29raW5nc19idG4tcGFuZWwge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5hZ2VudC1uYW1lLWJvb2tpbmcge1xyXG4gICAgbWFyZ2luOiBhdXRvIDI0cHggIWltcG9ydGFudDtcclxuICAgIC5laWdodC53aWRlLmZpZWxkIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5pY29uIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICAmLmNhbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuY2FsbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuY2FsZW5kZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC5idXR0b25fYWxpZ257XHJcbi8vICAgICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4vLyB9XHJcblxyXG4uYnRuLXdyYXAge1xyXG4gICAgbWFyZ2luOiAwIDI0cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIC5ib29raW5nLWhlYWRlci5ib29raW5nX2NvbXAge1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMjRweCAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC51aS5mbHVpZCAub3V0ZXItYmFzaWMgLm91dGVyLWJhc2ljRm9ybSAudWkuZm9ybSAuYm9va2luZy1zZWFyY2gtcGFuZWwge1xyXG4gICAgICAgIHdpZHRoOiA5MiU7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgfVxyXG4gICAgLmFnZW50LW5hbWUtYm9va2luZyB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMjRweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAuYm9va2luZy1oZWFkZXIuYm9va2luZ19jb21wIHtcclxuICAgICAgICBwYWRkaW5nOiA0MHB4IDIwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAudWkuZmx1aWQgLm91dGVyLWJhc2ljIC5vdXRlci1iYXNpY0Zvcm0gLnVpLmZvcm0gLmJvb2tpbmctc2VhcmNoLXBhbmVsIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuYWdlbnQtbmFtZS1ib29raW5nIHtcclxuICAgICAgICBtYXJnaW46IDBweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6OTkxcHgpe1xyXG4gICAgLnVpLmZvcm17XHJcbiAgICAgICAgLmZvcm0taW5uZXJ7XHJcbiAgICAgICAgICAgIC5maWVsZHN7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIC5icmFuY2h7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5idXR0b25kaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiQG1peGluIHBsYWNlaG9sZGVyIHtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcblxyXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGNvbG9yLW9wYWNpdHkoJGNvbG9yLCAkb3BhY2l0eTogMC4zKSB7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yO1xyXG4gIC8qIFRoZSBGYWxsYmFjayAqL1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLCAkb3BhY2l0eSk7XHJcbn1cclxuXHJcbkBtaXhpbiBoaWRlTnVtYmVyRmllbGRBcnJvd3Mge1xyXG5cclxuICAvKiBDaHJvbWUsIFNhZmFyaSwgRWRnZSwgT3BlcmEgKi9cclxuICBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuICBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC8qIEZpcmVmb3ggKi9cclxuICBpbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtYXNrLXN2Zy1kaXYoJGltZykge1xyXG4gIC13ZWJraXQtbWFzazogdXJsKCRpbWcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgbWFzazogdXJsKCRpbWcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/layout/pos/pos-branch/pos-branch.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/layout/pos/pos-branch/pos-branch.component.ts ***!
    \***************************************************************/

  /*! exports provided: PosBranchComponent */

  /***/
  function srcAppLayoutPosPosBranchPosBranchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PosBranchComponent", function () {
      return PosBranchComponent;
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


    var src_app_shared_services_pos_service_pos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/pos-service/pos-service */
    "./src/app/shared/services/pos-service/pos-service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);

    var PosBranchComponent = /*#__PURE__*/function () {
      function PosBranchComponent(fb, posService, toastr, router, activeRoute) {
        _classCallCheck(this, PosBranchComponent);

        this.fb = fb;
        this.posService = posService;
        this.toastr = toastr;
        this.router = router;
        this.activeRoute = activeRoute;
        this.branchesdata = [];
        this.isSubmitted = false;
        this.showUpdate = false;
      }

      _createClass(PosBranchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.organisation_ID = this.activeRoute.snapshot.params.id;
          this.branchForm = this.fb.group({
            organisation_id: this.organisation_ID,
            id: [''],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9._&%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            branch_code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9]+$')]],
            address_1: [''],
            address_2: [''],
            tab: ['branch']
          });
          this.fetchAllBranches();
        }
      }, {
        key: "fetchAllBranches",
        value: function fetchAllBranches() {
          var _this25 = this;

          this.posService.fetchAllBranches(this.organisation_ID).subscribe(function (result) {
            if (result.status) {
              _this25.branchesdata = result.result.data;
            } else {
              _this25.toastr.error("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-top-right'
              });
            }
          });
        }
      }, {
        key: "saveBraches",
        value: function saveBraches() {
          var _this26 = this;

          this.isSubmitted = true;

          if (this.branchForm.invalid) {
            this.toastr.warning("Please fill all mandatory fields", "Error ", {
              timeOut: 10000,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });
            return;
          }

          this.posService.createBranch(this.branchForm.value).subscribe(function (result) {
            if (result.status) {
              _this26.toastr.success("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-top-right'
              });

              _this26.fetchAllBranches();

              _this26.branchForm.reset();

              _this26.branchForm.patchValue({
                organisation_id: _this26.organisation_ID,
                tab: 'branch'
              });
            } else {
              _this26.toastr.error("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-top-right'
              });
            }
          });
        }
      }, {
        key: "deleteTourCode",
        value: function deleteTourCode(row) {
          var _this27 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(function (result) {
            if (result.value) {
              _this27.posService.deleteBranch({
                "id": row.id
              }).subscribe(function (result) {
                if (result.status == false) {
                  _this27.toastr.error("".concat(result.message), "", {
                    timeOut: 10000,
                    progressBar: false,
                    positionClass: 'toast-top-right'
                  });
                } else {
                  _this27.toastr.success("".concat(result.message), "", {
                    timeOut: 10000,
                    progressBar: false,
                    positionClass: 'toast-top-right'
                  });

                  _this27.fetchAllBranches();
                }
              });
            }
          });
        }
      }, {
        key: "cancelOfficeDetails",
        value: function cancelOfficeDetails() {
          this.router.navigate(['/pos/basic-edit/', this.organisation_ID]);
        }
      }, {
        key: "createBranch",
        value: function createBranch() {
          this.router.navigate(['/pos/branch-add/', this.organisation_ID]);
        }
      }, {
        key: "editbranch",
        value: function editbranch(data) {
          var _this28 = this;

          this.posService.editbranch(data.id).subscribe(function (result) {
            if (result.status) {
              _this28.showUpdate = true;

              _this28.branchForm.patchValue({
                organisation_id: _this28.organisation_ID,
                id: data.id,
                name: result.result.name,
                email: result.result.email,
                branch_code: result.result.branch_code,
                address_1: result.result.address_1,
                address_2: result.result.address_2,
                tab: 'branch'
              });
            }
          });
        }
      }, {
        key: "updateBranch",
        value: function updateBranch() {
          var _this29 = this;

          this.isSubmitted = true;

          if (this.branchForm.invalid) {
            this.toastr.warning("Please fill all mandatory fields", "Error ", {
              timeOut: 10000,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });
            return;
          }

          this.posService.updateBranch(this.branchForm.value).subscribe(function (result) {
            if (result.status) {
              _this29.toastr.success("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-top-right'
              });

              _this29.fetchAllBranches();

              _this29.branchForm.reset();

              _this29.branchForm.patchValue({
                organisation_id: _this29.organisation_ID,
                tab: 'branch'
              });

              _this29.showUpdate = false;
            } else {
              _this29.toastr.error("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-top-right'
              });
            }
          });
        }
      }, {
        key: "gfc",
        get: function get() {
          return this.branchForm.controls;
        }
      }]);

      return PosBranchComponent;
    }();

    PosBranchComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_shared_services_pos_service_pos_service__WEBPACK_IMPORTED_MODULE_3__["PosService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    PosBranchComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pos-branch',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pos-branch.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/pos-branch/pos-branch.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pos-branch.component.scss */
      "./src/app/layout/pos/pos-branch/pos-branch.component.scss"))["default"]]
    })], PosBranchComponent);
    /***/
  },

  /***/
  "./src/app/layout/pos/pos-edit-button/pos-edit-button.component.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/layout/pos/pos-edit-button/pos-edit-button.component.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutPosPosEditButtonPosEditButtonComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".pos-basic-edit-btn .ui.primary.button {\n  height: auto !important;\n  margin-left: 12px;\n}\n.pos-basic-edit-btn .ui.primary.button:hover, .pos-basic-edit-btn .ui.primary.button:active, .pos-basic-edit-btn .ui.primary.button:focus, .pos-basic-edit-btn .ui.primary.button.active {\n  color: rgba(0, 0, 0, 0.6) !important;\n  background: #e0e1e2 !important;\n}\n.ui.clearing.segment {\n  margin: 12px 6px !important;\n  background: none !important;\n}\n@media (max-width: 991px) {\n  .pos-basic-edit-btn .button-wrapper {\n    height: auto !important;\n    margin-left: 8px;\n    width: 30% !important;\n    margin-bottom: 12px;\n    margin-right: 8px;\n    float: left;\n  }\n}\n@media (max-width: 649px) {\n  .pos-basic-edit-btn .button-wrapper {\n    height: auto !important;\n    margin-left: 8px;\n    width: 29% !important;\n    margin-bottom: 12px;\n    margin-right: 8px;\n    float: left;\n  }\n}\n@media (max-width: 623px) {\n  .pos-basic-edit-btn .button-wrapper {\n    height: auto !important;\n    margin-left: 8px;\n    width: 30% !important;\n    margin-bottom: 12px;\n    margin-right: 8px;\n    float: left;\n  }\n}\n@media (max-width: 603px) {\n  .pos-basic-edit-btn .button-wrapper {\n    height: auto !important;\n    margin-left: 8px;\n    width: 45% !important;\n    margin-bottom: 12px;\n    margin-right: 8px;\n    float: left;\n  }\n}\n@media (max-width: 449px) {\n  .pos-basic-edit-btn .button-wrapper {\n    height: auto !important;\n    margin-left: 8px;\n    width: 100% !important;\n    margin-bottom: 12px;\n    margin-right: 8px;\n    float: left;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Bvcy9wb3MtZWRpdC1idXR0b24vRTpcXEJlbGFsXFxwcm9qZWN0c1xccHJvZHVjdGlvbi1idWlsZFxcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxwb3NcXHBvcy1lZGl0LWJ1dHRvblxccG9zLWVkaXQtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcG9zL3Bvcy1lZGl0LWJ1dHRvbi9wb3MtZWRpdC1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSx1QkFBQTtFQUNBLGlCQUFBO0FDQVI7QURDUTtFQUNJLG9DQUFBO0VBQ0EsOEJBQUE7QUNDWjtBRElBO0VBQ0ksMkJBQUE7RUFDQSwyQkFBQTtBQ0RKO0FESUE7RUFFSTtJQUNJLHVCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxxQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0VDRk47QUFDRjtBRE1BO0VBRU87SUFDSSx1QkFBQTtJQUNBLGdCQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtFQ0xUO0FBQ0Y7QURTRztFQUVJO0lBQ0ksdUJBQUE7SUFDQSxnQkFBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7RUNSVDtBQUNGO0FEWUc7RUFFSTtJQUNJLHVCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxxQkFBQTtJQUNBLG1CQUFBO0lBQ0EsaUJBQUE7SUFDQSxXQUFBO0VDWFQ7QUFDRjtBRGVHO0VBRUk7SUFDSSx1QkFBQTtJQUNBLGdCQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtFQ2RUO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcG9zL3Bvcy1lZGl0LWJ1dHRvbi9wb3MtZWRpdC1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zLWJhc2ljLWVkaXQtYnRuIHtcclxuICAgIC51aS5wcmltYXJ5LmJ1dHRvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgJjpob3ZlciwgJjphY3RpdmUsICY6Zm9jdXMsICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjYpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlMGUxZTIgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS5jbGVhcmluZy5zZWdtZW50IHtcclxuICAgIG1hcmdpbjogMTJweCA2cHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo5OTFweCl7XHJcbiAucG9zLWJhc2ljLWVkaXQtYnRuIHtcclxuICAgIC5idXR0b24td3JhcHBlcntcclxuICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjY0OXB4KXtcclxuICAgIC5wb3MtYmFzaWMtZWRpdC1idG4ge1xyXG4gICAgICAgLmJ1dHRvbi13cmFwcGVye1xyXG4gICAgICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgd2lkdGg6IDI5JSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgIH1cclxuICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIEBtZWRpYShtYXgtd2lkdGg6NjIzcHgpe1xyXG4gICAgLnBvcy1iYXNpYy1lZGl0LWJ0biB7XHJcbiAgICAgICAuYnV0dG9uLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgfVxyXG4gICAgIH1cclxuICAgfVxyXG5cclxuICAgQG1lZGlhKG1heC13aWR0aDo2MDNweCl7XHJcbiAgICAucG9zLWJhc2ljLWVkaXQtYnRuIHtcclxuICAgICAgIC5idXR0b24td3JhcHBlcntcclxuICAgICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgICAgIHdpZHRoOiA0NSUgIWltcG9ydGFudDtcclxuICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICB9XHJcbiAgICAgfVxyXG4gICB9XHJcblxyXG4gICBAbWVkaWEobWF4LXdpZHRoOjQ0OXB4KXtcclxuICAgIC5wb3MtYmFzaWMtZWRpdC1idG4ge1xyXG4gICAgICAgLmJ1dHRvbi13cmFwcGVye1xyXG4gICAgICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICB9XHJcbiAgICAgfVxyXG4gICB9IiwiLnBvcy1iYXNpYy1lZGl0LWJ0biAudWkucHJpbWFyeS5idXR0b24ge1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG4ucG9zLWJhc2ljLWVkaXQtYnRuIC51aS5wcmltYXJ5LmJ1dHRvbjpob3ZlciwgLnBvcy1iYXNpYy1lZGl0LWJ0biAudWkucHJpbWFyeS5idXR0b246YWN0aXZlLCAucG9zLWJhc2ljLWVkaXQtYnRuIC51aS5wcmltYXJ5LmJ1dHRvbjpmb2N1cywgLnBvcy1iYXNpYy1lZGl0LWJ0biAudWkucHJpbWFyeS5idXR0b24uYWN0aXZlIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiAjZTBlMWUyICFpbXBvcnRhbnQ7XG59XG5cbi51aS5jbGVhcmluZy5zZWdtZW50IHtcbiAgbWFyZ2luOiAxMnB4IDZweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTFweCkge1xuICAucG9zLWJhc2ljLWVkaXQtYnRuIC5idXR0b24td3JhcHBlciB7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICB3aWR0aDogMzAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY0OXB4KSB7XG4gIC5wb3MtYmFzaWMtZWRpdC1idG4gLmJ1dHRvbi13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIHdpZHRoOiAyOSUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjIzcHgpIHtcbiAgLnBvcy1iYXNpYy1lZGl0LWJ0biAuYnV0dG9uLXdyYXBwZXIge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2MDNweCkge1xuICAucG9zLWJhc2ljLWVkaXQtYnRuIC5idXR0b24td3JhcHBlciB7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICB3aWR0aDogNDUlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ0OXB4KSB7XG4gIC5wb3MtYmFzaWMtZWRpdC1idG4gLmJ1dHRvbi13cmFwcGVyIHtcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/pos/pos-edit-button/pos-edit-button.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/layout/pos/pos-edit-button/pos-edit-button.component.ts ***!
    \*************************************************************************/

  /*! exports provided: PosEditButtonComponent */

  /***/
  function srcAppLayoutPosPosEditButtonPosEditButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PosEditButtonComponent", function () {
      return PosEditButtonComponent;
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

    var PosEditButtonComponent = /*#__PURE__*/function () {
      function PosEditButtonComponent(router, activeRoute) {
        _classCallCheck(this, PosEditButtonComponent);

        this.router = router;
        this.activeRoute = activeRoute;
        this.activeTab = false;
      }

      _createClass(PosEditButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.organisationId = this.activeRoute.snapshot.params.id;
        }
      }, {
        key: "loadBranchInfo",
        value: function loadBranchInfo() {
          this.router.navigate(['/pos/branch-info/', this.organisationId]);
        }
      }, {
        key: "loadOfficeAddressInfo",
        value: function loadOfficeAddressInfo() {
          this.router.navigate(['/pos/office-address/', this.organisationId]);
        }
      }, {
        key: "loadBrandingInfo",
        value: function loadBrandingInfo() {
          this.router.navigate(['/pos/branding-info/', this.organisationId]);
        }
      }, {
        key: "loadMonthlyTarget",
        value: function loadMonthlyTarget() {
          this.router.navigate(['/pos/monthly-target/', this.organisationId]);
        }
      }, {
        key: "loadSuppliers",
        value: function loadSuppliers() {
          this.router.navigate(['/pos/active-suppliers/', this.organisationId]);
        }
      }, {
        key: "loadAirlineRBD",
        value: function loadAirlineRBD() {
          this.router.navigate(['/pos/airline-rbd/', this.organisationId]);
        }
      }, {
        key: "activateTab",
        value: function activateTab(name) {
          switch (name) {
            case 'branch-tab':
              this.activeTab = true;
              this.tabName = name;
              break;

            case 'office-tab':
              this.activeTab = true;
              this.tabName = name;
              break;

            case 'branding-tab':
              this.activeTab = true;
              this.tabName = name;
              break;

            case 'monthly-tab':
              this.activeTab = true;
              this.tabName = name;
              break;

            case 'suppliers-tab':
              this.activeTab = true;
              this.tabName = name;
              break;

            case 'airline-tab':
              this.activeTab = true;
              this.tabName = name;
              break;

            default:
              this.activeTab = false;
              this.tabName = '';
              break;
          }
        }
      }]);

      return PosEditButtonComponent;
    }();

    PosEditButtonComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    PosEditButtonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pos-edit-button',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pos-edit-button.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/pos-edit-button/pos-edit-button.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pos-edit-button.component.scss */
      "./src/app/layout/pos/pos-edit-button/pos-edit-button.component.scss"))["default"]]
    })], PosEditButtonComponent);
    /***/
  },

  /***/
  "./src/app/layout/pos/pos-office-details/pos-office-details.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/layout/pos/pos-office-details/pos-office-details.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutPosPosOfficeDetailsPosOfficeDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".outer {\n  margin: 0px 20px 0px 15px;\n}\n\n.amexCard {\n  background-color: gainsboro !important;\n}\n\n.farePreferencestable {\n  border-top: 0px !important;\n}\n\n.outer__add-pos__title {\n  margin: 0;\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #E0E0E0;\n}\n\n.tourCode_btn,\n.addTogg_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n}\n\n.tourCode_text,\n.addTogg_text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.corporate_input__placeholder-icon {\n  position: relative;\n  width: 18px;\n  bottom: 28px;\n  left: 9px;\n}\n\n.ui.form.pos_basic_form {\n  background: #fff;\n  box-shadow: 0 0px 3px rgba(60, 64, 67, 0.3), 0 4px 8px 2px rgba(60, 64, 67, 0.15);\n  border-radius: 4.96141px;\n  margin: 0px 24px 24px;\n}\n\ndiv.upload {\n  box-sizing: border-box;\n  height: 15px;\n  width: 123px;\n  border-radius: 3px;\n  background-color: #FFF;\n  border: 0.5px solid #808080;\n  box-shadow: 0 0.25px 0.1px 0 rgba(0, 0, 0, 0.5);\n}\n\ndiv.upload input {\n  display: block !important;\n  width: 123px !important;\n  height: 15px !important;\n  opacity: 0 !important;\n  overflow: hidden !important;\n}\n\n.file_choose {\n  position: relative;\n  left: 27px;\n  bottom: 6px;\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 9px;\n  line-height: 10px;\n}\n\n.uploadinImg_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n}\n\n.uploadinImg_btn__text,\n.save-next_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 12px;\n}\n\n.file_table__img {\n  border: none;\n  background-color: #dfeafb5e;\n}\n\n.save-next_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.field input::-webkit-input-placeholder {\n  font-size: 14px;\n}\n\n.field input::-moz-placeholder {\n  font-size: 14px;\n}\n\n.field input::-ms-input-placeholder {\n  font-size: 14px;\n}\n\n.field input::placeholder {\n  font-size: 14px;\n}\n\n.ui.pointing.secondary.menu {\n  border: none;\n}\n\n.item.stepper__progress {\n  width: 167px;\n}\n\n.tab.segment.stepper__segment-outline {\n  border: none;\n  box-shadow: none;\n}\n\n.office-info_icon {\n  position: relative;\n  top: 20px;\n  right: 85px;\n}\n\n.pos_access-rights {\n  color: #828282;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 11px;\n  line-height: 12px;\n}\n\n.cancel_btn {\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.cancel_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.issue_date {\n  text-indent: 17px;\n}\n\n.wide.field.sale_check {\n  margin-top: 10px;\n}\n\n.assign_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.assign_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n}\n\n.circleIcon {\n  height: 20px;\n  width: 20px;\n  background-color: #0D801C;\n  border-radius: 50%;\n  display: inline-block;\n  margin-top: 6px;\n}\n\n.plusIcon {\n  color: #FFF;\n  font-size: 17px;\n  font-weight: 100;\n  line-height: 28px;\n  text-align: center;\n  margin-left: 0px;\n  margin-top: -3px;\n}\n\n::ng-deep.mat-step-icon-content {\n  height: 19px;\n  width: 19px;\n  color: #C8C8C8;\n  background-color: #C8C8C8;\n  border-radius: 50%;\n}\n\n::ng-deep.mat-step-header:hover,\n::ng-deep.cdk-keyboard-focused,\n::ng-deep.cdk-program-focused {\n  background-color: transparent !important;\n}\n\n::ng-deep.mat-step-icon {\n  border: 1px solid rgba(0, 0, 0, 0.24);\n  background: transparent !important;\n}\n\n::ng-deep.mat-step-icon-state-number.mat-step-icon.mat-step-icon-selected {\n  border: 2px solid #3867B1;\n  background: transparent;\n}\n\n::ng-deep.mat-step-icon-state-number.mat-step-icon.mat-step-icon-selected .ng-star-inserted {\n  color: #3867B1;\n}\n\n::ng-deep.mat-step-icon-content {\n  background-color: transparent;\n}\n\n::ng-deep.ng-star-inserted {\n  padding: 0 6px;\n}\n\n::ng-deep.mat-horizontal-stepper-header-container {\n  background: #ffff;\n  width: 100%;\n  padding: 0px 30%;\n  margin-top: 32px;\n}\n\n::ng-deep.mat-icon {\n  display: none !important;\n}\n\n::ng-deep.mat-step-icon-selected,\n::ng-deep.mat-step-icon-state-done,\n::ng-deep.mat-step-icon-state-edit {\n  background-color: transparent !important;\n}\n\n::ng-deep.mat-step-label {\n  color: #3867b1;\n}\n\n::ng-deep.mat-horizontal-content-container {\n  margin-top: 32px;\n}\n\n.pos_btn-panel {\n  padding-bottom: 20px;\n  margin-bottom: 40px;\n}\n\n.pos_btn-panel .secondary {\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.pos_btn-panel .primary {\n  float: right;\n  width: auto !important;\n  border-radius: 5.12155px !important;\n  background-color: #437ADA;\n  color: #fff;\n  min-width: auto;\n}\n\n.pos_btn-panel .primary:hover {\n  background-color: #cacbcd !important;\n  box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34, 36, 38, 0.15) inset !important;\n  color: rgba(0, 0, 0, 0.8) !important;\n}\n\n.segment p {\n  padding-bottom: 10px;\n}\n\n.bg-grey {\n  background: #d1dade;\n}\n\n.example-chip-list {\n  width: 100%;\n  border: 0px solid grey !important;\n}\n\n.mat-chip-input {\n  border: 0px !important;\n  background: transparent !important;\n}\n\n.inputfile {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.transparent,\n.transparent:hover {\n  background: none;\n}\n\n.center {\n  text-align: center;\n}\n\n.margin-right-20 {\n  margin-right: 20px;\n}\n\n.margin-bottom-15 {\n  margin-bottom: 15px;\n}\n\n.dim-footer {\n  color: #c3c3c3;\n  display: block;\n  font-size: 12px;\n  margin-top: 10px;\n  cursor: inherit;\n  position: relative;\n  top: -20px;\n  left: 24px;\n}\n\n.mat-chip {\n  margin: 0px 4px !important;\n}\n\n.branding-pic {\n  align-items: center;\n  height: 150px;\n}\n\n.mat-standard-chip .mat-chip-remove.mat-icon {\n  width: 13px !important;\n  height: 13px !important;\n  font-size: 13px !important;\n}\n\n.custom-columns .field {\n  margin-bottom: 15px !important;\n}\n\n.uploaded-document {\n  display: block;\n}\n\n.validations {\n  color: red;\n  font-size: x-small;\n}\n\n.unlimited {\n  float: right;\n  font-size: x-small;\n}\n\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n\n.ui.form .three.wide.field {\n  margin-bottom: 16px;\n}\n\n.inline-label {\n  display: inline !important;\n}\n\n.ui.header {\n  margin: 0px;\n  padding-top: 14px;\n  padding-bottom: 24px;\n  font-size: 18px;\n  font-weight: 400;\n}\n\n.ui.header.note-head {\n  margin-bottom: 12px;\n}\n\n.ui.header.basic-info-header {\n  margin-top: 20px;\n}\n\n.pos_basic_form .tax-section {\n  padding: 0px;\n}\n\n.pos_basic_form .tax_block {\n  border: 1px solid #D4D6DC;\n  border-radius: 5.12155px;\n  min-height: 390px;\n}\n\n.pos_basic_form .tax_block p {\n  padding-bottom: 24px;\n}\n\n::ng-deep.mat-form-field-underline {\n  display: none;\n}\n\n::ng-deep.mat-chip-list-wrapper {\n  margin: 0px !important;\n  position: relative !important;\n  top: -16px !important;\n}\n\n.payment-header {\n  margin-top: 12px !important;\n}\n\n.ui.checkbox {\n  padding-bottom: 10px;\n}\n\n.ui.checkbox label:before {\n  width: 15px;\n  height: 15px;\n  top: 1px;\n  left: 1px;\n}\n\n.ui.checkbox label:after {\n  font-size: 12px;\n  top: 1px;\n}\n\n.ui.checkbox input:checked ~ label:before {\n  border: 1px solid #3867b1;\n}\n\n.ui.checkbox input:checked ~ label:after {\n  color: #3867b1;\n}\n\n.ui.segment.bg-grey {\n  margin-top: 12px;\n  background: transparent;\n  border: 1px solid #D4D6DC;\n}\n\n.ui.segment.bg-grey .ui.checkbox {\n  padding-bottom: 0px;\n}\n\n.cardDetails {\n  margin-top: 15px;\n}\n\n.spacing {\n  padding-left: 22px;\n  padding-right: 22px;\n}\n\n.ui.fitted.divider {\n  margin: 30px 0px;\n}\n\n.ui.primary.button.brand_buttons {\n  background: rgba(67, 122, 218, 0.05) !important;\n  border: 1px dashed #437ADA !important;\n  color: #437ADA;\n  box-shadow: none !important;\n}\n\n.ui.primary.button.brand_buttons i.icon {\n  color: #437ADA;\n}\n\n.ui.primary.button.add_btn {\n  border: 1px solid #437ADA;\n  box-sizing: border-box;\n  border-radius: 7.24448px !important;\n  background: transparent !important;\n  color: #437ADA !important;\n  box-shadow: none !important;\n  margin-top: 22px;\n  width: auto !important;\n  min-width: auto;\n}\n\n.ui.primary.button.add_btn.reset {\n  border: 1px solid #4F4F4F;\n  color: #4F4F4F !important;\n}\n\n.notes-section textarea {\n  min-height: 60px;\n  height: auto !important;\n}\n\n.ui.transparent.margin-right-20 {\n  display: block;\n  margin-bottom: 10px;\n}\n\n.ui.grid.card-section {\n  width: 100%;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n  margin-left: 8px;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 160px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 10px;\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: 0px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.outer-form {\n  margin-bottom: 80px;\n}\n\n.pos_btn-panel.spacing button {\n  position: absolute;\n  right: 0px;\n  bottom: -64px;\n  text-align: right;\n}\n\n.button_align {\n  margin-top: -30px;\n}\n\n.buttonstyle {\n  text-align: right;\n}\n\n.buttonstyle button:first-child {\n  margin-right: 12px;\n}\n\n@media (max-width: 991px) {\n  .buttonstyle {\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Bvcy9wb3Mtb2ZmaWNlLWRldGFpbHMvRTpcXEJlbGFsXFxwcm9qZWN0c1xccHJvZHVjdGlvbi1idWlsZFxcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxwb3NcXHBvcy1vZmZpY2UtZGV0YWlsc1xccG9zLW9mZmljZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcG9zL3Bvcy1vZmZpY2UtZGV0YWlscy9wb3Mtb2ZmaWNlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksc0NBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0NBQUE7RUFDQSx3Q0FBQTtBQ0NKOztBREVBO0VBQ0ksK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSw0Q0FBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7O0VBRUksa0JBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBOztFQUVJLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDQ0o7O0FEU0E7RUFFSSxnQkFBQTtFQUNBLGlGQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtBQ1BKOztBRFdBO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLCtDQUFBO0FDUko7O0FEV0E7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QkFBQTtFQ25DTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3Bvcy9wb3Mtb2ZmaWNlLWRldGFpbHMvcG9zLW9mZmljZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGVyIHtcclxuICAgIG1hcmdpbjogMHB4IDIwcHggMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5hbWV4Q2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZhcmVQcmVmZXJlbmNlc3RhYmxlIHtcclxuICAgIGJvcmRlci10b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub3V0ZXJfX2FkZC1wb3NfX3RpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLm1lbnU+Lml0ZW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI4NTcxNDI5cmVtIDAgMCAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLmJvdHRvbS5hdHRhY2hlZC5hY3RpdmUudGFiLnNlZ21lbnQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbn1cclxuXHJcbi50YWIuc2VnbWVudCB7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjRTBFMEUwO1xyXG59XHJcblxyXG4udG91ckNvZGVfYnRuLFxyXG4uYWRkVG9nZ19idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcclxufVxyXG5cclxuLnRvdXJDb2RlX3RleHQsXHJcbi5hZGRUb2dnX3RleHQge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBib3R0b206IDI4cHg7XHJcbiAgICBsZWZ0OiA5cHg7XHJcbn1cclxuXHJcbi8vIC5vdXRlci1mb3JtLFxyXG4vLyAub3V0ZXJfY29ycEZvcm0ge1xyXG4vLyAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICAgIGJvcmRlcjogMC41cHggc29saWQgIzgwODA4MDtcclxuLy8gICAgIG1hcmdpbjogNDVweCAzMnB4IDExMXB4IDI1cHg7XHJcbi8vIH1cclxuLnVpLmZvcm0ucG9zX2Jhc2ljX2Zvcm0ge1xyXG4gICAgLy8gcGFkZGluZzogMHB4IDBweCAyNXB4IDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwIDBweCAzcHggcmdiYSg2MCwgNjQsIDY3LCAwLjMpLCAwIDRweCA4cHggMnB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0Ljk2MTQxcHg7XHJcbiAgICBtYXJnaW46IDBweCAyNHB4IDI0cHg7XHJcbiAgICAvLyBtYXgtd2lkdGg6IDEyMDBweDtcclxufVxyXG5cclxuZGl2LnVwbG9hZCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDEyM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgIzgwODA4MDtcclxuICAgIGJveC1zaGFkb3c6IDAgMC4yNXB4IDAuMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG5kaXYudXBsb2FkIGlucHV0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTIzcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmlsZV9jaG9vc2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMjdweDtcclxuICAgIGJvdHRvbTogNnB4O1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udXBsb2FkaW5JbWdfYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XHJcbn1cclxuXHJcbi51cGxvYWRpbkltZ19idG5fX3RleHQsXHJcbi5zYXZlLW5leHRfYnRuX190ZXh0IHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4uZmlsZV90YWJsZV9faW1nIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZmVhZmI1ZTtcclxufVxyXG5cclxuLnNhdmUtbmV4dF9idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi51aS5wb2ludGluZy5zZWNvbmRhcnkubWVudSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5pdGVtLnN0ZXBwZXJfX3Byb2dyZXNzIHtcclxuICAgIHdpZHRoOiAxNjdweDtcclxufVxyXG5cclxuLnRhYi5zZWdtZW50LnN0ZXBwZXJfX3NlZ21lbnQtb3V0bGluZSB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4ub2ZmaWNlLWluZm9faWNvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDIwcHg7XHJcbiAgICByaWdodDogODVweDtcclxufVxyXG5cclxuLnBvc19hY2Nlc3MtcmlnaHRzIHtcclxuICAgIGNvbG9yOiAjODI4MjgyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi5jYW5jZWxfYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0RjRGNEY7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5jYW5jZWxfYnRuX190ZXh0IHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaXNzdWVfZGF0ZSB7XHJcbiAgICB0ZXh0LWluZGVudDogMTdweDtcclxufVxyXG5cclxuLndpZGUuZmllbGQuc2FsZV9jaGVjayB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uYXNzaWduX2J0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uYXNzaWduX2J0bl9fdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxufVxyXG5cclxuLmNpcmNsZUljb24ge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQ4MDFDO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogNnB4O1xyXG59XHJcblxyXG4ucGx1c0ljb24ge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTNweDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24tY29udGVudCB7XHJcbiAgICBoZWlnaHQ6IDE5cHg7XHJcbiAgICB3aWR0aDogMTlweDtcclxuICAgIGNvbG9yOiAjQzhDOEM4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0M4QzhDODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1zdGVwLWhlYWRlcjpob3ZlcixcclxuIDo6bmctZGVlcC5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcclxuIDo6bmctZGVlcC5jZGstcHJvZ3JhbS1mb2N1c2VkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjI0KTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLXN0YXRlLW51bWJlci5tYXQtc3RlcC1pY29uLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzM4NjdCMTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLm5nLXN0YXItaW5zZXJ0ZWQge1xyXG4gICAgICAgIGNvbG9yOiAjMzg2N0IxO1xyXG4gICAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAubmctc3Rhci1pbnNlcnRlZCB7XHJcbiAgICBwYWRkaW5nOiAwIDZweDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyLWNvbnRhaW5lciB7XHJcbiAgICAvLyB3aWR0aDogNDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDBweCAzMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LWljb24ge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcclxuIDo6bmctZGVlcC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXHJcbiA6Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtc3RlcC1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzM4NjdiMTtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1ob3Jpem9udGFsLWNvbnRlbnQtY29udGFpbmVyIHtcclxuICAgIC8vIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG59XHJcblxyXG4ucG9zX2J0bi1wYW5lbCB7XHJcbiAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAvLyByaWdodDogNjhweDtcclxuICAgIC8vIGJvdHRvbTogOTdweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIC5zZWNvbmRhcnkge1xyXG4gICAgICAgIC8vIHdpZHRoOiAxMDQuODdweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRGNEY0RjtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB9XHJcbiAgICAucHJpbWFyeSB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDEyNC44N3B4O1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUuMTIxNTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzdBREE7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgLy8gYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjYmNkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCB0cmFuc3BhcmVudCBpbnNldCwgMCAwIDAgMCByZ2JhKDM0LCAzNiwgMzgsIC4xNSkgaW5zZXQgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2VnbWVudCBwIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYmctZ3JleSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDFkYWRlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jaGlwLWxpc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDBweCBzb2xpZCBncmV5ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtY2hpcC1pbnB1dCB7XHJcbiAgICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmlucHV0ZmlsZSB7XHJcbiAgICB3aWR0aDogMC4xcHg7XHJcbiAgICBoZWlnaHQ6IDAuMXB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLnRyYW5zcGFyZW50LFxyXG4udHJhbnNwYXJlbnQ6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYXJnaW4tcmlnaHQtMjAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ubWFyZ2luLWJvdHRvbS0xNSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG4uZGltLWZvb3RlciB7XHJcbiAgICBjb2xvcjogI2MzYzNjMztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGN1cnNvcjogaW5oZXJpdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTIwcHg7XHJcbiAgICBsZWZ0OiAyNHB4O1xyXG59XHJcblxyXG4ubWF0LWNoaXAge1xyXG4gICAgbWFyZ2luOiAwcHggNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5icmFuZGluZy1waWMge1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbn1cclxuXHJcbi5tYXQtc3RhbmRhcmQtY2hpcCAubWF0LWNoaXAtcmVtb3ZlLm1hdC1pY29uIHtcclxuICAgIHdpZHRoOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEzcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VzdG9tLWNvbHVtbnMgLmZpZWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVwbG9hZGVkLWRvY3VtZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udmFsaWRhdGlvbnMge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxufVxyXG5cclxuLnVubGltaXRlZCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbn1cclxuXHJcbi51aS5mb3JtIC5maWVsZD5sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICBjb2xvcjogIzE4MUIyMDtcclxuICAgIG1hcmdpbjogMHB4IDBweCA4cHg7XHJcbn1cclxuXHJcbi51aS5mb3JtIC50aHJlZS53aWRlLmZpZWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5pbmxpbmUtbGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51aS5oZWFkZXIge1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI0cHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgJi5ub3RlLWhlYWQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICB9XHJcbiAgICAmLmJhc2ljLWluZm8taGVhZGVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4OyAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4ucG9zX2Jhc2ljX2Zvcm0ge1xyXG4gICAgLnRheC1zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbiAgICAudGF4X2Jsb2NrIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRDRENkRDO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUuMTIxNTVweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzOTBweDtcclxuICAgICAgICAvLyBtYXgtaGVpZ2h0OiAzOTBweDtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtY2hpcC1saXN0LXdyYXBwZXIge1xyXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiAtMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGF5bWVudC1oZWFkZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udWkuY2hlY2tib3gge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICB0b3A6IDFweDtcclxuICAgICAgICAgICAgbGVmdDogMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB0b3A6IDFweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnB1dDpjaGVja2VkfmxhYmVsIHtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODY3YjE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzM4NjdiMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS5zZWdtZW50LmJnLWdyZXkge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q0RDZEQztcclxuICAgIC51aS5jaGVja2JveCB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmREZXRhaWxzIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5zcGFjaW5nIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjJweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi51aS5maXR0ZWQuZGl2aWRlciB7XHJcbiAgICBtYXJnaW46IDMwcHggMHB4O1xyXG59XHJcblxyXG4udWkucHJpbWFyeS5idXR0b24uYnJhbmRfYnV0dG9ucyB7XHJcbiAgICAvLyBoZWlnaHQ6IDgycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDY3LCAxMjIsIDIxOCwgMC4wNSkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjNDM3QURBICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzQzN0FEQTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC8vIHBhZGRpbmctdG9wOiAxOHB4O1xyXG4gICAgLy8gbWluLXdpZHRoOiBhdXRvO1xyXG4gICAgaS5pY29uIHtcclxuICAgICAgICAvLyBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAvLyBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjNDM3QURBO1xyXG4gICAgfVxyXG59XHJcblxyXG4udWkucHJpbWFyeS5idXR0b24uYWRkX2J0biB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDM3QURBO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDcuMjQ0NDhweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNDM3QURBICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogYXV0bztcclxufVxyXG5cclxuLnVpLnByaW1hcnkuYnV0dG9uLmFkZF9idG4ucmVzZXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzRGNEY0RjtcclxuICAgIGNvbG9yOiAjNEY0RjRGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ub3Rlcy1zZWN0aW9uIHtcclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4udWkudHJhbnNwYXJlbnQubWFyZ2luLXJpZ2h0LTIwIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnVpLmdyaWQuY2FyZC1zZWN0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udG9vbHRpcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvLyBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3R0b206IDEwMCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLm91dGVyLWZvcm0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogODBweDtcclxufVxyXG5cclxuLnBvc19idG4tcGFuZWwuc3BhY2luZyB7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgIGJvdHRvbTogLTY0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpyaWdodDtcclxuICAgIH1cclxufVxyXG5cclxuLmJ1dHRvbl9hbGlnbntcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uc3R5bGV7XHJcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgYnV0dG9uOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHhcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo5OTFweCl7XHJcbiAgICAuYnV0dG9uc3R5bGV7XHJcbiAgICAgICAgdGV4dC1hbGlnbjpyaWdodDtcclxuICAgIH1cclxufVxyXG5cclxuIiwiLm91dGVyIHtcbiAgbWFyZ2luOiAwcHggMjBweCAwcHggMTVweDtcbn1cblxuLmFtZXhDYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvICFpbXBvcnRhbnQ7XG59XG5cbi5mYXJlUHJlZmVyZW5jZXN0YWJsZSB7XG4gIGJvcmRlci10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ub3V0ZXJfX2FkZC1wb3NfX3RpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBsaW5lLWhlaWdodDogMjJweDtcbn1cblxuLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4udWkudG9wLmF0dGFjaGVkLm1lbnUgPiAuaXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjg1NzE0MjlyZW0gMCAwIDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi51aS5ib3R0b20uYXR0YWNoZWQuYWN0aXZlLnRhYi5zZWdtZW50IHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxN3B4O1xufVxuXG4udGFiLnNlZ21lbnQge1xuICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuaHIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjRTBFMEUwO1xufVxuXG4udG91ckNvZGVfYnRuLFxuLmFkZFRvZ2dfYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xufVxuXG4udG91ckNvZGVfdGV4dCxcbi5hZGRUb2dnX3RleHQge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvcnBvcmF0ZV9pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE4cHg7XG4gIGJvdHRvbTogMjhweDtcbiAgbGVmdDogOXB4O1xufVxuXG4udWkuZm9ybS5wb3NfYmFzaWNfZm9ybSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDNweCByZ2JhKDYwLCA2NCwgNjcsIDAuMyksIDAgNHB4IDhweCAycHggcmdiYSg2MCwgNjQsIDY3LCAwLjE1KTtcbiAgYm9yZGVyLXJhZGl1czogNC45NjE0MXB4O1xuICBtYXJnaW46IDBweCAyNHB4IDI0cHg7XG59XG5cbmRpdi51cGxvYWQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxMjNweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICM4MDgwODA7XG4gIGJveC1zaGFkb3c6IDAgMC4yNXB4IDAuMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG5kaXYudXBsb2FkIGlucHV0IHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEyM3B4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLmZpbGVfY2hvb3NlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAyN3B4O1xuICBib3R0b206IDZweDtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDlweDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG59XG5cbi51cGxvYWRpbkltZ19idG4ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XG59XG5cbi51cGxvYWRpbkltZ19idG5fX3RleHQsXG4uc2F2ZS1uZXh0X2J0bl9fdGV4dCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTJweDtcbn1cblxuLmZpbGVfdGFibGVfX2ltZyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RmZWFmYjVlO1xufVxuXG4uc2F2ZS1uZXh0X2J0biB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4udWkucG9pbnRpbmcuc2Vjb25kYXJ5Lm1lbnUge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5pdGVtLnN0ZXBwZXJfX3Byb2dyZXNzIHtcbiAgd2lkdGg6IDE2N3B4O1xufVxuXG4udGFiLnNlZ21lbnQuc3RlcHBlcl9fc2VnbWVudC1vdXRsaW5lIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ub2ZmaWNlLWluZm9faWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogODVweDtcbn1cblxuLnBvc19hY2Nlc3MtcmlnaHRzIHtcbiAgY29sb3I6ICM4MjgyODI7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDExcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xufVxuXG4uY2FuY2VsX2J0biB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRGNEY0RjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uY2FuY2VsX2J0bl9fdGV4dCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaXNzdWVfZGF0ZSB7XG4gIHRleHQtaW5kZW50OiAxN3B4O1xufVxuXG4ud2lkZS5maWVsZC5zYWxlX2NoZWNrIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmFzc2lnbl9idG4ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmFzc2lnbl9idG5fX3RleHQge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG59XG5cbi5jaXJjbGVJY29uIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBEODAxQztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLnBsdXNJY29uIHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXRvcDogLTNweDtcbn1cblxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24tY29udGVudCB7XG4gIGhlaWdodDogMTlweDtcbiAgd2lkdGg6IDE5cHg7XG4gIGNvbG9yOiAjQzhDOEM4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhDOEM4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbjo6bmctZGVlcC5tYXQtc3RlcC1oZWFkZXI6aG92ZXIsXG46Om5nLWRlZXAuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG46Om5nLWRlZXAuY2RrLXByb2dyYW0tZm9jdXNlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI0KTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24tc3RhdGUtbnVtYmVyLm1hdC1zdGVwLWljb24ubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMzODY3QjE7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24tc3RhdGUtbnVtYmVyLm1hdC1zdGVwLWljb24ubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCAubmctc3Rhci1pbnNlcnRlZCB7XG4gIGNvbG9yOiAjMzg2N0IxO1xufVxuXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbjo6bmctZGVlcC5uZy1zdGFyLWluc2VydGVkIHtcbiAgcGFkZGluZzogMCA2cHg7XG59XG5cbjo6bmctZGVlcC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZmZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDBweCAzMCU7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbjo6bmctZGVlcC5tYXQtaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1kb25lLFxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcC5tYXQtc3RlcC1sYWJlbCB7XG4gIGNvbG9yOiAjMzg2N2IxO1xufVxuXG46Om5nLWRlZXAubWF0LWhvcml6b250YWwtY29udGVudC1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuXG4ucG9zX2J0bi1wYW5lbCB7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLnBvc19idG4tcGFuZWwgLnNlY29uZGFyeSB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRGNEY0RjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLnBvc19idG4tcGFuZWwgLnByaW1hcnkge1xuICBmbG9hdDogcmlnaHQ7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUuMTIxNTVweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM3QURBO1xuICBjb2xvcjogI2ZmZjtcbiAgbWluLXdpZHRoOiBhdXRvO1xufVxuLnBvc19idG4tcGFuZWwgLnByaW1hcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjYmNkICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCB0cmFuc3BhcmVudCBpbnNldCwgMCAwIDAgMCByZ2JhKDM0LCAzNiwgMzgsIDAuMTUpIGluc2V0ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCkgIWltcG9ydGFudDtcbn1cblxuLnNlZ21lbnQgcCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuXG4uYmctZ3JleSB7XG4gIGJhY2tncm91bmQ6ICNkMWRhZGU7XG59XG5cbi5leGFtcGxlLWNoaXAtbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDBweCBzb2xpZCBncmV5ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY2hpcC1pbnB1dCB7XG4gIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbi5pbnB1dGZpbGUge1xuICB3aWR0aDogMC4xcHg7XG4gIGhlaWdodDogMC4xcHg7XG4gIG9wYWNpdHk6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogLTE7XG59XG5cbi50cmFuc3BhcmVudCxcbi50cmFuc3BhcmVudDpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXJnaW4tcmlnaHQtMjAge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5tYXJnaW4tYm90dG9tLTE1IHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLmRpbS1mb290ZXIge1xuICBjb2xvcjogI2MzYzNjMztcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY3Vyc29yOiBpbmhlcml0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTIwcHg7XG4gIGxlZnQ6IDI0cHg7XG59XG5cbi5tYXQtY2hpcCB7XG4gIG1hcmdpbjogMHB4IDRweCAhaW1wb3J0YW50O1xufVxuXG4uYnJhbmRpbmctcGljIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cblxuLm1hdC1zdGFuZGFyZC1jaGlwIC5tYXQtY2hpcC1yZW1vdmUubWF0LWljb24ge1xuICB3aWR0aDogMTNweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDEzcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XG59XG5cbi5jdXN0b20tY29sdW1ucyAuZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi51cGxvYWRlZC1kb2N1bWVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udmFsaWRhdGlvbnMge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IHgtc21hbGw7XG59XG5cbi51bmxpbWl0ZWQge1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcbn1cblxuLnVpLmZvcm0gLmZpZWxkID4gbGFiZWwge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBjb2xvcjogIzE4MUIyMDtcbiAgbWFyZ2luOiAwcHggMHB4IDhweDtcbn1cblxuLnVpLmZvcm0gLnRocmVlLndpZGUuZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uaW5saW5lLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XG59XG5cbi51aS5oZWFkZXIge1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4udWkuaGVhZGVyLm5vdGUtaGVhZCB7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4udWkuaGVhZGVyLmJhc2ljLWluZm8taGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnBvc19iYXNpY19mb3JtIC50YXgtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5wb3NfYmFzaWNfZm9ybSAudGF4X2Jsb2NrIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q0RDZEQztcbiAgYm9yZGVyLXJhZGl1czogNS4xMjE1NXB4O1xuICBtaW4taGVpZ2h0OiAzOTBweDtcbn1cbi5wb3NfYmFzaWNfZm9ybSAudGF4X2Jsb2NrIHAge1xuICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbn1cblxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbjo6bmctZGVlcC5tYXQtY2hpcC1saXN0LXdyYXBwZXIge1xuICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmUgIWltcG9ydGFudDtcbiAgdG9wOiAtMTZweCAhaW1wb3J0YW50O1xufVxuXG4ucGF5bWVudC1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi51aS5jaGVja2JveCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xufVxuLnVpLmNoZWNrYm94IGxhYmVsOmJlZm9yZSB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIHRvcDogMXB4O1xuICBsZWZ0OiAxcHg7XG59XG4udWkuY2hlY2tib3ggbGFiZWw6YWZ0ZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRvcDogMXB4O1xufVxuLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpiZWZvcmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzg2N2IxO1xufVxuLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbDphZnRlciB7XG4gIGNvbG9yOiAjMzg2N2IxO1xufVxuXG4udWkuc2VnbWVudC5iZy1ncmV5IHtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNENEQ2REM7XG59XG4udWkuc2VnbWVudC5iZy1ncmV5IC51aS5jaGVja2JveCB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5jYXJkRGV0YWlscyB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5zcGFjaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAyMnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMnB4O1xufVxuXG4udWkuZml0dGVkLmRpdmlkZXIge1xuICBtYXJnaW46IDMwcHggMHB4O1xufVxuXG4udWkucHJpbWFyeS5idXR0b24uYnJhbmRfYnV0dG9ucyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNjcsIDEyMiwgMjE4LCAwLjA1KSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBkYXNoZWQgIzQzN0FEQSAhaW1wb3J0YW50O1xuICBjb2xvcjogIzQzN0FEQTtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuLnVpLnByaW1hcnkuYnV0dG9uLmJyYW5kX2J1dHRvbnMgaS5pY29uIHtcbiAgY29sb3I6ICM0MzdBREE7XG59XG5cbi51aS5wcmltYXJ5LmJ1dHRvbi5hZGRfYnRuIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzQzN0FEQTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNy4yNDQ0OHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDM3QURBICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMjJweDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgbWluLXdpZHRoOiBhdXRvO1xufVxuXG4udWkucHJpbWFyeS5idXR0b24uYWRkX2J0bi5yZXNldCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0RjRGNEY7XG4gIGNvbG9yOiAjNEY0RjRGICFpbXBvcnRhbnQ7XG59XG5cbi5ub3Rlcy1zZWN0aW9uIHRleHRhcmVhIHtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi51aS50cmFuc3BhcmVudC5tYXJnaW4tcmlnaHQtMjAge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnVpLmdyaWQuY2FyZC1zZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDE2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgYm90dG9tOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5vdXRlci1mb3JtIHtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbn1cblxuLnBvc19idG4tcGFuZWwuc3BhY2luZyBidXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwcHg7XG4gIGJvdHRvbTogLTY0cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4uYnV0dG9uX2FsaWduIHtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG5cbi5idXR0b25zdHlsZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmJ1dHRvbnN0eWxlIGJ1dHRvbjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMTJweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5idXR0b25zdHlsZSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/pos/pos-office-details/pos-office-details.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/layout/pos/pos-office-details/pos-office-details.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: PosOfficeDetailsComponent */

  /***/
  function srcAppLayoutPosPosOfficeDetailsPosOfficeDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PosOfficeDetailsComponent", function () {
      return PosOfficeDetailsComponent;
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


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var src_app_shared_services_pos_service_pos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/pos-service/pos-service */
    "./src/app/shared/services/pos-service/pos-service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/common.service */
    "./src/app/shared/services/common.service.ts");

    var PosOfficeDetailsComponent = /*#__PURE__*/function () {
      function PosOfficeDetailsComponent(fb, toastr, posService, router, activeRoute, CommonService) {
        _classCallCheck(this, PosOfficeDetailsComponent);

        this.fb = fb;
        this.toastr = toastr;
        this.posService = posService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.CommonService = CommonService;
        this.isSubmitted = false;
        this.countries = [];
        this.cities = [];
        this.posInfo = {};
        this.initInfoForm();
      }

      _createClass(PosOfficeDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCountries();
          this.organisation_ID = this.activeRoute.snapshot.params.id;
          this.getOrganisationInfo(this.organisation_ID);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          $(document).ready(function () {
            $('.ui.dropdown').dropdown();
            $('.ui.dropdown').dropdown('refresh');
            $('.ui.checkbox').checkbox();
          });
        }
      }, {
        key: "initInfoForm",
        value: function initInfoForm() {
          this.officeAddressForm = this.fb.group({
            organisation_id: [''],
            payment_gateway: [''],
            currency_id: [''],
            numberOfUsers: [''],
            credit_limit: [''],
            name: [''],
            email: [''],
            country_id: [''],
            contact: [''],
            corporate_type: [''],
            timezone_id: [''],
            active_suppliers: [''],
            contact_person_name: [''],
            contact_mobile_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')],
            contact_person_email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
            address_1: [''],
            address_2: [''],
            city_id: [''],
            state_province: [''],
            zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]*')],
            contact_country_id: [''],
            tab: ['address']
          });
        }
      }, {
        key: "getOrganisationInfo",
        value: function getOrganisationInfo(organisation_ID) {
          var _this30 = this;

          this.posService.getPosDetails(organisation_ID).subscribe(function (result) {
            if (result.status) _this30.posInfo = result.result;

            _this30.officeAddressForm.patchValue({
              organisation_id: _this30.organisation_ID,
              name: _this30.posInfo.name,
              email: _this30.posInfo.email,
              country_id: _this30.posInfo.country_id,
              currency_id: _this30.posInfo.currency_id,
              numberOfUsers: _this30.posInfo.numberOfUsers,
              credit_limit: _this30.posInfo.credit_limit,
              contact: _this30.posInfo.contact,
              payment_gateway: _this30.posInfo.payment_gateway,
              corporate_type: _this30.posInfo.corporate_type,
              timezone_id: _this30.posInfo.timezone_id,
              active_suppliers: JSON.parse(_this30.posInfo.active_suppliers),
              contact_person_name: _this30.posInfo.contact_person_name,
              contact_mobile_number: _this30.posInfo.contact_mobile_number,
              contact_person_email: _this30.posInfo.contact_person_email,
              address_1: _this30.posInfo.address_1,
              address_2: _this30.posInfo.address_2,
              city_id: _this30.posInfo.city_id,
              state_province: _this30.posInfo.state_province,
              zip: _this30.posInfo.zip,
              contact_country_id: _this30.posInfo.contact_country_id,
              currency: _this30.posInfo.currency_id
            });

            _this30.ngAfterViewInit();
          });
        }
      }, {
        key: "reset",
        value: function reset() {
          this.officeAddressForm.reset();
        }
      }, {
        key: "storeOfficeAddress",
        value: function storeOfficeAddress() {
          var _this31 = this;

          this.posService.updatePosDetails(this.officeAddressForm.value).subscribe(function (res) {
            if (res.status) {
              _this31.toastr.success("".concat(res.message), "Error ", {
                timeOut: 1000,
                progressBar: true,
                progressAnimation: 'decreasing',
                positionClass: 'toast-top-right'
              });

              _this31.router.navigate(['/pos/basic-edit/' + _this31.organisation_ID]);
            } else {
              _this31.toastr.error("".concat(res.message), "Success ", {
                timeOut: 1000,
                progressBar: true,
                progressAnimation: 'decreasing',
                positionClass: 'toast-top-right'
              });
            }
          });
          return;
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          var _this32 = this;

          this.CommonService.getCountryList().subscribe(function (result) {
            _this32.countries = result.countries;
          });
        }
      }, {
        key: "passCountryId",
        value: function passCountryId(val) {
          var _this33 = this;

          this.CommonService.getCityList(val).subscribe(function (result) {
            _this33.cities = result.cities;
          });
        }
      }, {
        key: "cancelOfficeDetails",
        value: function cancelOfficeDetails() {
          this.router.navigate(['/pos/basic-edit/', this.organisation_ID]);
        }
      }]);

      return PosOfficeDetailsComponent;
    }();

    PosOfficeDetailsComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: src_app_shared_services_pos_service_pos_service__WEBPACK_IMPORTED_MODULE_4__["PosService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
      }];
    };

    PosOfficeDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pos-office-details',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pos-office-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/pos-office-details/pos-office-details.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pos-office-details.component.scss */
      "./src/app/layout/pos/pos-office-details/pos-office-details.component.scss"))["default"]]
    })], PosOfficeDetailsComponent);
    /***/
  },

  /***/
  "./src/app/layout/pos/pos-read/pos-read.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/layout/pos/pos-read/pos-read.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutPosPosReadPosReadComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h3 {\n  margin-top: 24px;\n}\n\n.update-header {\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n  margin-left: 30px;\n}\n\n.ui.fluid.container {\n  padding: 24px !important;\n}\n\n.outer-basic {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n}\n\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n}\n\n.filter_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.filter_btn_reset {\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.filter_list {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.icon {\n  opacity: 1;\n  z-index: 100;\n}\n\n.icon .corporate_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.icon .corporate_input__placeholder-icon.cal {\n  width: 0px;\n  margin-top: 10px;\n  font-size: 13px;\n}\n\n.icon .corporate_input__placeholder-icon.call {\n  width: 15px;\n  margin-top: 0px;\n  margin-left: 7px;\n}\n\n.icon .corporate_input__placeholder-icon.calll {\n  width: 20px;\n  margin-top: 10px;\n}\n\n.icon .corporate_input__placeholder-icon.ico {\n  width: 15px;\n  margin-top: 10px;\n}\n\n.search-field-wrapper {\n  padding-bottom: 24px;\n}\n\n.bookings_btn-panel button {\n  margin: 22px 8px 0px;\n}\n\n@media (max-width: 1440px) {\n  .ui.fluid .outer-basic .outer-basicForm {\n    padding: 0px;\n  }\n}\n\n@media (max-width: 1280px) {\n  .ui.form .main-wrapper {\n    display: block;\n    width: 100% !important;\n  }\n}\n\n@media (max-width: 768px) {\n  .ui.form .main-wrapper {\n    display: block;\n    width: 100% !important;\n  }\n}\n\n@media (max-width: 337px) {\n  .ui.form .button-wrapper {\n    display: grid;\n  }\n}\n\n@media (max-width: 375px) and (min-width: 320px) {\n  .bookings_btn-panel .primary.button {\n    margin-bottom: 5px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Bvcy9wb3MtcmVhZC9FOlxcQmVsYWxcXHByb2plY3RzXFxwcm9kdWN0aW9uLWJ1aWxkXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHBvc1xccG9zLXJlYWRcXHBvcy1yZWFkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcG9zL3Bvcy1yZWFkL3Bvcy1yZWFkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSx3QkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlGQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUZBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0VSOztBRERRO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0daOztBRERRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0daOztBRERRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDR1o7O0FERFE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNHWjs7QURFQTtFQUNJLG9CQUFBO0FDQ0o7O0FER0k7RUFDSSxvQkFBQTtBQ0FSOztBRElBO0VBQ0k7SUFDSSxZQUFBO0VDRE47QUFDRjs7QURJQTtFQUVJO0lBQ0ksY0FBQTtJQUNBLHNCQUFBO0VDSE47QUFDRjs7QURPQTtFQUVJO0lBQ0ksY0FBQTtJQUNBLHNCQUFBO0VDTk47QUFDRjs7QURVQTtFQUVRO0lBQ0EsYUFBQTtFQ1ROO0FBQ0Y7O0FEYUE7RUFDQTtJQUNJLDZCQUFBO0VDWEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wb3MvcG9zLXJlYWQvcG9zLXJlYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG59XHJcblxyXG4udXBkYXRlLWhlYWRlciB7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4udWkuZmx1aWQuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDI0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpY0Zvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5maWx0ZXJfYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5maWx0ZXJfYnRuX3Jlc2V0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0RjRGNEY7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5maWx0ZXJfbGlzdCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIC5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICAmLmNhbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5jYWxsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5jYWxsbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmljbyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNlYXJjaC1maWVsZC13cmFwcGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4uYm9va2luZ3NfYnRuLXBhbmVsIHtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAyMnB4IDhweCAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIC51aS5mbHVpZCAub3V0ZXItYmFzaWMgLm91dGVyLWJhc2ljRm9ybSB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjEyODBweCl7XHJcbiAgICAudWkuZm9ybXtcclxuICAgIC5tYWluLXdyYXBwZXJ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KXtcclxuICAudWkuZm9ybXtcclxuICAgIC5tYWluLXdyYXBwZXJ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6MzM3cHgpe1xyXG4gICAgLnVpLmZvcm17XHJcbiAgICAgICAgLmJ1dHRvbi13cmFwcGVye1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzc1cHgpIGFuZCAobWluLXdpZHRoOiAzMjBweCl7XHJcbi5ib29raW5nc19idG4tcGFuZWwgLnByaW1hcnkuYnV0dG9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufSIsImgzIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cblxuLnVwZGF0ZS1oZWFkZXIge1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi51aS5mbHVpZC5jb250YWluZXIge1xuICBwYWRkaW5nOiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5vdXRlci1iYXNpYyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ub3V0ZXItYmFzaWNGb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmZpbHRlcl9idG4ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmZpbHRlcl9idG5fcmVzZXQge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RjRGNEY7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmZpbHRlcl9saXN0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pY29uIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTAwO1xufVxuLmljb24gLmNvcnBvcmF0ZV9pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4uaWNvbiAuY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbCB7XG4gIHdpZHRoOiAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5pY29uIC5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsbCB7XG4gIHdpZHRoOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG59XG4uaWNvbiAuY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbGxsIHtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uaWNvbiAuY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmljbyB7XG4gIHdpZHRoOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc2VhcmNoLWZpZWxkLXdyYXBwZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbn1cblxuLmJvb2tpbmdzX2J0bi1wYW5lbCBidXR0b24ge1xuICBtYXJnaW46IDIycHggOHB4IDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAudWkuZmx1aWQgLm91dGVyLWJhc2ljIC5vdXRlci1iYXNpY0Zvcm0ge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAudWkuZm9ybSAubWFpbi13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnVpLmZvcm0gLm1haW4td3JhcHBlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDMzN3B4KSB7XG4gIC51aS5mb3JtIC5idXR0b24td3JhcHBlciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KSBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgLmJvb2tpbmdzX2J0bi1wYW5lbCAucHJpbWFyeS5idXR0b24ge1xuICAgIG1hcmdpbi1ib3R0b206IDVweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/layout/pos/pos-read/pos-read.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/layout/pos/pos-read/pos-read.component.ts ***!
    \***********************************************************/

  /*! exports provided: PosReadComponent */

  /***/
  function srcAppLayoutPosPosReadPosReadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PosReadComponent", function () {
      return PosReadComponent;
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


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var src_app_shared_services_point_of_sale_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/point-of-sale.service */
    "./src/app/shared/services/point-of-sale.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/utils/common */
    "./src/app/shared/utils/common.ts");

    var PosReadComponent = /*#__PURE__*/function () {
      function PosReadComponent(pointOfSaleService, router, toastr, fb) {
        _classCallCheck(this, PosReadComponent);

        this.pointOfSaleService = pointOfSaleService;
        this.router = router;
        this.toastr = toastr;
        this.fb = fb;
        this.organizationTypes = src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_7__["organizationTypes"];
        this.limit = 15;
        this.pageIndex = 1;
        this.pointOfSales = [];
        this.totalPos = 0;
        this.pages = 0;
        this.filterParams = {
          limit: 1500,
          page: 0,
          corporate_type: '',
          nameAndOfficeId: ''
        };
        this.toggleObj = {};
        this.filterForm = this.fb.group({
          corporate_type: [''],
          nameAndOfficeId: ['']
        });
      }

      _createClass(PosReadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getList(this.filterParams);
        }
      }, {
        key: "getList",
        value: function getList(filterParams) {
          var _this34 = this;

          this.pointOfSaleService.getList(filterParams).subscribe(function (result) {
            if (result.result.data) result.result.data.map(function (value, key) {
              value.id = key + 1;
            });
            _this34.pointOfSales = result.result.data;
            _this34.totalPos = result.total;
          });
        }
      }, {
        key: "filterFormSubmit",
        value: function filterFormSubmit() {
          this.filterParams.corporate_type = this.filterForm.value.corporate_type;
          this.filterParams.nameAndOfficeId = this.filterForm.value.nameAndOfficeId;
          this.getList(this.filterParams);
        }
      }, {
        key: "viewUser",
        value: function viewUser(valObj) {
          this.router.navigate(['basic-edit/' + valObj.organisation_id]);
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(valObj) {
          var _this35 = this;

          sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(function (result) {
            if (result.value) {
              // delete record api
              _this35.pointOfSaleService.deletePos(valObj.organisation_id).subscribe(function (result) {
                if (result.status == false) {
                  _this35.toastr.error("".concat(result.message), "", {
                    timeOut: 10000,
                    progressBar: false,
                    positionClass: 'toast-top-right'
                  });
                } else {
                  _this35.toastr.success("".concat(result.message), "", {
                    timeOut: 10000,
                    progressBar: false,
                    positionClass: 'toast-top-right'
                  });

                  _this35.getList(_this35.filterParams);
                }
              });
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          $(document).ready(function () {
            $('.menu .item').tab();
            $('.ui.checkbox').checkbox('attach events', '.toggle.button');
            $('.ui.dropdown').dropdown();
            $('.dropdown1').dropdown({
              placeholder: 'Organisation Type '
            });
          });
        }
      }, {
        key: "viewPOSPage",
        value: function viewPOSPage(valObj) {
          var navigationExtras = {
            queryParams: valObj
          };
          this.router.navigate(['/pos/basic-edit/' + valObj.organisation_id]);
        }
      }, {
        key: "statusToggle",
        value: function statusToggle(data) {
          var _this36 = this;

          this.toggleObj.id = data.organisation_id;
          this.toggleObj.status = data.is_active;
          this.toggleObj.table = "organisation";
          this.pointOfSaleService.onStatusToggle(this.toggleObj).subscribe(function (res) {
            if (res.status == 200) {
              _this36.getList(_this36.filterParams);
            } else {
              _this36.toastr.error("".concat(res.msg), "".concat(res.msg), {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-top-right'
              });
            }
          });
        }
      }, {
        key: "resetFilterPos",
        value: function resetFilterPos() {
          this.filterForm.reset();
          $('.ui.dropdown').dropdown('clear');
        }
      }]);

      return PosReadComponent;
    }();

    PosReadComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_point_of_sale_service__WEBPACK_IMPORTED_MODULE_4__["PointOfSaleService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }];
    };

    PosReadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pos-read',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pos-read.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/pos-read/pos-read.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pos-read.component.scss */
      "./src/app/layout/pos/pos-read/pos-read.component.scss"))["default"]]
    })], PosReadComponent);
    /***/
  },

  /***/
  "./src/app/layout/pos/pos-routing.module.ts":
  /*!**************************************************!*\
    !*** ./src/app/layout/pos/pos-routing.module.ts ***!
    \**************************************************/

  /*! exports provided: AddPosRoutingModule */

  /***/
  function srcAppLayoutPosPosRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPosRoutingModule", function () {
      return AddPosRoutingModule;
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


    var _basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-info/basic-info.component */
    "./src/app/layout/pos/basic-info/basic-info.component.ts");
    /* harmony import */


    var _airline_rbd_airline_rbd_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./airline-rbd/airline-rbd.component */
    "./src/app/layout/pos/airline-rbd/airline-rbd.component.ts");
    /* harmony import */


    var _pos_basic_edit_pos_basic_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pos-basic-edit/pos-basic-edit.component */
    "./src/app/layout/pos/pos-basic-edit/pos-basic-edit.component.ts");
    /* harmony import */


    var _branding_info_branding_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./branding-info/branding-info.component */
    "./src/app/layout/pos/branding-info/branding-info.component.ts");
    /* harmony import */


    var _monthly_target_monthly_target_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./monthly-target/monthly-target.component */
    "./src/app/layout/pos/monthly-target/monthly-target.component.ts");
    /* harmony import */


    var _active_suppliers_active_suppliers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./active-suppliers/active-suppliers.component */
    "./src/app/layout/pos/active-suppliers/active-suppliers.component.ts");
    /* harmony import */


    var _pos_read_pos_read_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pos-read/pos-read.component */
    "./src/app/layout/pos/pos-read/pos-read.component.ts");
    /* harmony import */


    var _pos_office_details_pos_office_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pos-office-details/pos-office-details.component */
    "./src/app/layout/pos/pos-office-details/pos-office-details.component.ts");
    /* harmony import */


    var _pos_branch_pos_branch_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pos-branch/pos-branch.component */
    "./src/app/layout/pos/pos-branch/pos-branch.component.ts"); // import { PosOfficeDetailsComponent } from './pos-office-details/pos-office-details.component';


    var routes = [{
      path: '',
      redirectTo: 'basic-info',
      pathMatch: 'prefix'
    }, {
      path: 'basic-info',
      component: _basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_3__["BasicInfoComponent"]
    }, {
      path: 'branch-add/:id',
      component: _basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_3__["BasicInfoComponent"]
    }, {
      path: 'airline-rbd/:id',
      component: _airline_rbd_airline_rbd_component__WEBPACK_IMPORTED_MODULE_4__["AirlineRbdComponent"]
    }, {
      path: 'basic-edit/:id',
      component: _pos_basic_edit_pos_basic_edit_component__WEBPACK_IMPORTED_MODULE_5__["PosBasicEditComponent"]
    }, {
      path: 'office-address/:id',
      component: _pos_office_details_pos_office_details_component__WEBPACK_IMPORTED_MODULE_10__["PosOfficeDetailsComponent"]
    }, {
      path: 'branding-info/:id',
      component: _branding_info_branding_info_component__WEBPACK_IMPORTED_MODULE_6__["BrandingInfoComponent"]
    }, {
      path: 'monthly-target/:id',
      component: _monthly_target_monthly_target_component__WEBPACK_IMPORTED_MODULE_7__["MonthlyTargetComponent"]
    }, {
      path: 'active-suppliers/:id',
      component: _active_suppliers_active_suppliers_component__WEBPACK_IMPORTED_MODULE_8__["ActiveSuppliersComponent"]
    }, {
      path: 'branch-info/:id',
      component: _pos_branch_pos_branch_component__WEBPACK_IMPORTED_MODULE_11__["PosBranchComponent"]
    }, {
      path: 'pos-read',
      component: _pos_read_pos_read_component__WEBPACK_IMPORTED_MODULE_9__["PosReadComponent"]
    }];

    var AddPosRoutingModule = function AddPosRoutingModule() {
      _classCallCheck(this, AddPosRoutingModule);
    };

    AddPosRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddPosRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/pos/pos.component.scss":
  /*!***********************************************!*\
    !*** ./src/app/layout/pos/pos.component.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutPosPosComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wb3MvcG9zLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/layout/pos/pos.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/layout/pos/pos.component.ts ***!
    \*********************************************/

  /*! exports provided: PosComponent */

  /***/
  function srcAppLayoutPosPosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PosComponent", function () {
      return PosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PosComponent = /*#__PURE__*/function () {
      function PosComponent() {
        _classCallCheck(this, PosComponent);
      }

      _createClass(PosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PosComponent;
    }();

    PosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pos',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./pos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/pos.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pos.component.scss */
      "./src/app/layout/pos/pos.component.scss"))["default"]]
    })], PosComponent);
    /***/
  },

  /***/
  "./src/app/layout/pos/pos.module.ts":
  /*!******************************************!*\
    !*** ./src/app/layout/pos/pos.module.ts ***!
    \******************************************/

  /*! exports provided: PosModule */

  /***/
  function srcAppLayoutPosPosModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PosModule", function () {
      return PosModule;
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


    var _basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic-info/basic-info.component */
    "./src/app/layout/pos/basic-info/basic-info.component.ts");
    /* harmony import */


    var _pos_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pos-routing.module */
    "./src/app/layout/pos/pos-routing.module.ts");
    /* harmony import */


    var _pos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pos.component */
    "./src/app/layout/pos/pos.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _airline_rbd_airline_rbd_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./airline-rbd/airline-rbd.component */
    "./src/app/layout/pos/airline-rbd/airline-rbd.component.ts");
    /* harmony import */


    var _pos_basic_edit_pos_basic_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pos-basic-edit/pos-basic-edit.component */
    "./src/app/layout/pos/pos-basic-edit/pos-basic-edit.component.ts");
    /* harmony import */


    var _pos_office_details_pos_office_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pos-office-details/pos-office-details.component */
    "./src/app/layout/pos/pos-office-details/pos-office-details.component.ts");
    /* harmony import */


    var _branding_info_branding_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./branding-info/branding-info.component */
    "./src/app/layout/pos/branding-info/branding-info.component.ts");
    /* harmony import */


    var _monthly_target_monthly_target_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./monthly-target/monthly-target.component */
    "./src/app/layout/pos/monthly-target/monthly-target.component.ts");
    /* harmony import */


    var _active_suppliers_active_suppliers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./active-suppliers/active-suppliers.component */
    "./src/app/layout/pos/active-suppliers/active-suppliers.component.ts");
    /* harmony import */


    var _pos_read_pos_read_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pos-read/pos-read.component */
    "./src/app/layout/pos/pos-read/pos-read.component.ts");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var _pos_branch_pos_branch_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./pos-branch/pos-branch.component */
    "./src/app/layout/pos/pos-branch/pos-branch.component.ts");
    /* harmony import */


    var _country_list_country_list_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../country-list/country-list.module */
    "./src/app/layout/country-list/country-list.module.ts");
    /* harmony import */


    var _pos_edit_button_pos_edit_button_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pos-edit-button/pos-edit-button.component */
    "./src/app/layout/pos/pos-edit-button/pos-edit-button.component.ts");

    var PosModule = function PosModule() {
      _classCallCheck(this, PosModule);
    };

    PosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pos_component__WEBPACK_IMPORTED_MODULE_5__["PosComponent"], _basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_3__["BasicInfoComponent"], _airline_rbd_airline_rbd_component__WEBPACK_IMPORTED_MODULE_7__["AirlineRbdComponent"], _pos_basic_edit_pos_basic_edit_component__WEBPACK_IMPORTED_MODULE_8__["PosBasicEditComponent"], _pos_office_details_pos_office_details_component__WEBPACK_IMPORTED_MODULE_9__["PosOfficeDetailsComponent"], _branding_info_branding_info_component__WEBPACK_IMPORTED_MODULE_10__["BrandingInfoComponent"], _monthly_target_monthly_target_component__WEBPACK_IMPORTED_MODULE_11__["MonthlyTargetComponent"], _active_suppliers_active_suppliers_component__WEBPACK_IMPORTED_MODULE_12__["ActiveSuppliersComponent"], _pos_read_pos_read_component__WEBPACK_IMPORTED_MODULE_13__["PosReadComponent"], _pos_branch_pos_branch_component__WEBPACK_IMPORTED_MODULE_15__["PosBranchComponent"], _pos_edit_button_pos_edit_button_component__WEBPACK_IMPORTED_MODULE_17__["PosEditButtonComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _pos_routing_module__WEBPACK_IMPORTED_MODULE_4__["AddPosRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_14__["NgxDatatableModule"], _country_list_country_list_module__WEBPACK_IMPORTED_MODULE_16__["CountryListModule"]]
    })], PosModule);
    /***/
  },

  /***/
  "./src/app/shared/services/point-of-sale.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/services/point-of-sale.service.ts ***!
    \**********************************************************/

  /*! exports provided: PointOfSaleService */

  /***/
  function srcAppSharedServicesPointOfSaleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PointOfSaleService", function () {
      return PointOfSaleService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var PointOfSaleService = /*#__PURE__*/function () {
      function PointOfSaleService(http) {
        _classCallCheck(this, PointOfSaleService);

        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverURL;
      } // Get All users role list


      _createClass(PointOfSaleService, [{
        key: "getList",
        value: function getList(filterData) {
          return this.http.post("".concat(this.url, "/api/pos-list"), filterData);
        } // Get User role Details

      }, {
        key: "getPos",
        value: function getPos(id) {
          return this.http.get("".concat(this.url, "/api/pos-view/").concat(id));
        } // Delete pos role

      }, {
        key: "deletePos",
        value: function deletePos(id) {
          return this.http.post("".concat(this.url, "/api/organization/delete-pos/").concat(id), "");
        }
      }, {
        key: "onStatusToggle",
        value: function onStatusToggle(data) {
          return this.http.post("".concat(this.url, "/api/toggle-status"), data);
        }
      }]);

      return PointOfSaleService;
    }();

    PointOfSaleService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    PointOfSaleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], PointOfSaleService);
    /***/
  },

  /***/
  "./src/app/shared/services/pos-service/pos-service.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/services/pos-service/pos-service.ts ***!
    \************************************************************/

  /*! exports provided: PosService */

  /***/
  function srcAppSharedServicesPosServicePosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PosService", function () {
      return PosService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var PosService = /*#__PURE__*/function () {
      function PosService(http) {
        _classCallCheck(this, PosService);

        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverURL;
      }

      _createClass(PosService, [{
        key: "createNewPosUsingBasicInfo",
        value: function createNewPosUsingBasicInfo(data) {
          return this.http.post("".concat(this.url, "/api/pos/create-pos"), data);
        }
      }, {
        key: "getPosDetails",
        value: function getPosDetails(id) {
          return this.http.get("".concat(this.url, "/api/pos/fetch-pos/").concat(id));
        }
      }, {
        key: "updatePosDetails",
        value: function updatePosDetails(data) {
          return this.http.post("".concat(this.url, "/api/pos/update-pos"), data);
        }
      }, {
        key: "getAllActiveSuppliers",
        value: function getAllActiveSuppliers() {
          return this.http.get("".concat(this.url, "/api/get-all-suppliers"));
        }
      }, {
        key: "createBranch",
        value: function createBranch(data) {
          return this.http.post("".concat(this.url, "/api/branches/create"), data);
        }
      }, {
        key: "fetchAllBranches",
        value: function fetchAllBranches(id) {
          return this.http.get("".concat(this.url, "/api/branches/organisation/").concat(id));
        }
      }, {
        key: "deleteBranch",
        value: function deleteBranch(id) {
          return this.http.post("".concat(this.url, "/api/branches/delete"), id);
        }
      }, {
        key: "editbranch",
        value: function editbranch(id) {
          return this.http.get("".concat(this.url, "/api/branches/get/").concat(id));
        }
      }, {
        key: "updateBranch",
        value: function updateBranch(data) {
          return this.http.post("".concat(this.url, "/api/branches/update"), data);
        }
      }]);

      return PosService;
    }();

    PosService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    PosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], PosService);
    /***/
  }
}]);
//# sourceMappingURL=default~layout-pos-pos-module~pos-pos-module-es5.js.map