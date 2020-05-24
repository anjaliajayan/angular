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


    __webpack_exports__["default"] = "<h4 class=\"ui header spacing\">Suppliers</h4>\r\n<div class=\"ui segment\">\r\n  <h5 class=\"ui header spacing header_align head\">Flights</h5>\r\n    <form [formGroup]=\"suppiersForm\" (ngSubmit)=\"submitActiveSuppliers()\">\r\n      <div class=\"sixteen wide column\">\r\n        <div formArrayName=\"active_suppliers_flights\">\r\n          <div class=\"ui six column grid suppliers fields spacing\" *ngFor=\"let item1 of supplierFlights; let i = index;\" style=\"display: inline-flex;\">\r\n            <div class=\"three wide field\"  [formGroupName]=\"0\">\r\n              <div class=\"ui checkbox\" >\r\n                <input type=\"checkbox\"  name=\"{{item1.is_flight}}\"  formControlName=\"{{item1.active_name}}\">\r\n                <label>{{item1.active_name}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <h5 class=\"ui header spacing head\">Hotel</h5>\r\n      <div class=\"sixteen wide column\">\r\n        <div formArrayName=\"active_suppliers_hotels\">\r\n          <div class=\"ui six column grid suppliers fields spacing\" *ngFor=\"let item of supplierHotel; let i = index;\" style=\"display: inline-flex;\">\r\n            <div class=\"three wide field\"  [formGroupName]=\"0\" >\r\n              <div class=\"ui checkbox\" >\r\n                <input type=\"checkbox\" name=\"{{item.is_hotel}}\"  formControlName=\"{{item.active_name}}\">\r\n                <label>{{item.active_name}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>     \r\n      <br>\r\n      <h5 class=\"ui header spacing head\">Car</h5>\r\n      <div class=\"sixteen wide column\">\r\n        <div formArrayName=\"active_suppliers_cars\">\r\n          <div class=\"ui six column grid suppliers fields spacing\" *ngFor=\"let item2 of supplierCar; let i = index;\" style=\"display: inline-flex;\">\r\n      \r\n            <div class=\"three wide field\"  [formGroupName]=\"0\" >\r\n              <div class=\"ui checkbox\" >\r\n                <input type=\"checkbox\" name=\"{{item2.is_car}}\" formControlName=\"{{item2.active_name}}\">\r\n                <label>{{item2.active_name}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <br>\r\n      <h5 class=\"ui header spacing head\">Insurance</h5>\r\n      <div class=\"sixteen wide column\">\r\n        <div formArrayName=\"active_suppliers_insurance\">\r\n          <div class=\"ui six column grid suppliers fields spacing\" *ngFor=\"let item3 of supplierInsurance; let n = index;\" style=\"display: inline-flex;\">\r\n            <div class=\"three wide field\"  [formGroupName]=\"0\" >\r\n              <div class=\"ui checkbox\" >\r\n                <input type=\"checkbox\" name=\"{{item3.is_insurance}}\"  formControlName=\"{{item3.active_name}}\" >\r\n                <label>{{item3.active_name}}</label>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <br>\r\n      <h5 class=\"ui header spacing head\">Activities</h5>\r\n      <div class=\"sixteen wide column\">\r\n        <div formArrayName=\"active_suppliers_activities\">\r\n          <div class=\"ui six column grid suppliers fields spacing\" *ngFor=\"let item4 of supplierActivity; let i = index;\" style=\"display: inline-flex;\">\r\n            <div>\r\n              <div class=\"three wide field\"  [formGroupName]=\"0\" >\r\n                <div class=\"ui checkbox\" >\r\n                  <input type=\"checkbox\" name=\"{{item4.is_activities}}\" formControlName=\"{{item4.active_name}}\" >\r\n                  <label>{{item4.active_name}}</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n         \r\n          </div>\r\n        </div>\r\n        <div>\r\n          <div class=\"four wide field buttonStyle\">\r\n            <button class=\"ui button primary button_align\" type=\"submitt\">Save</button>\r\n            <button class=\"ui button reset button_align\" type=\"submitt\">Cancel</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n</div>\r\n\r\n\r\n";
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


    __webpack_exports__["default"] = "<div class=\"ui segment\">\r\n  <div class=\"outer-form\">\r\n    <form class=\"ui form pos_basic_form\" [formGroup]=\"airlineRBDForm\" (ngSubmit)=\"saveAirlineRBD()\">\r\n      <!-- Airline RBD part -->\r\n      <!-- <div class=\"ui fitted divider\"></div> -->\r\n      <h4 class=\"ui header spacing\">Airline RBD</h4>\r\n      <div class=\"fields spacing\" formGroupName=\"pos_rbd\">\r\n        <div class=\"four wide field branch\">\r\n          <label> Economy </label>\r\n          <select name=\"rbd\" multiple=\"\" formControlName=\"economy_rbd\" class=\"ui search fluid dropdown multiple_search\">\r\n            <option class=\"item\" *ngFor=\"let rbd of rbdArrayList\" value=\"{{rbd}}\">\r\n              {{rbd}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"four wide field branch\">\r\n          <label> Premium Economy </label>\r\n          <select name=\"rbd\" multiple=\"\" formControlName=\"pre_economy_rbd\"\r\n            class=\"ui search fluid dropdown multiple_search\">\r\n            <option class=\"item\" *ngFor=\"let rbd of rbdArrayList\" value=\"{{rbd}}\">\r\n              {{rbd}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"four wide field branch\">\r\n          <label> Buisness </label>\r\n          <select name=\"rbd\" multiple=\"\" formControlName=\"bussiness_rbd\"\r\n            class=\"ui search fluid dropdown multiple_search\">\r\n            <option class=\"item\" *ngFor=\"let rbd of rbdArrayList\" value=\"{{rbd}}\">\r\n              {{rbd}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"four wide field branch\">\r\n          <label> First </label>\r\n          <select name=\"rbd\" multiple=\"\" formControlName=\"first_rbd\" class=\"ui search fluid dropdown multiple_search\">\r\n            <option class=\"item\" *ngFor=\"let rbd of rbdArrayList\" value=\"{{rbd}}\">\r\n              {{rbd}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"four wide field button1 buttondiv\">\r\n          <button class=\"ui button primary button_align\" type=\"submit\">Save</button>\r\n          <button class=\"ui button reset button_align\" type=\"submit\">Cancel</button>\r\n        </div>\r\n      </div>\r\n    \r\n    </form>\r\n  </div>\r\n</div>\r\n";
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


    __webpack_exports__["default"] = "<div class=\"outer-form\">\r\n  <form class=\"ui form pos_basic_form\" [formGroup]=\"posBasicInfoForm\" (ngSubmit)=\"savePosBasicInfo()\">\r\n    <h4 class=\"ui header spacing ui-basic-header\">Basic Information</h4>\r\n    <div class=\"field spacing\">\r\n      <div class=\"ui four column grid fields custom-columns\">\r\n        <div class=\"four wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.corporate_type.errors}\">\r\n          <label>Business Type<span class=\"mandatory\">*</span></label>\r\n          <select class=\"ui fluid dropdown\" formControlName=\"corporate_type\">\r\n            <option value=\"Agent\"> Sub Agent / Branch Office </option>\r\n            <option value=\"B2C\"> B2C </option>\r\n            <option value=\"API\"> API OUT </option>\r\n            <option value=\"Mobile\">Mobile</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"four wide field\" *ngIf=\"posBasicInfoForm.controls.domain_url\"\r\n          [ngClass]=\"{'is-invalid': isSubmitted && gfc.domain_url.errors}\">\r\n          <label>Domain Name</label>\r\n          <input type=\"text\" name=\"domain_url\" formControlName=\"domain_url\" value=\"\" placeholder=\"B2C Domain Name\">\r\n        </div>\r\n        <div class=\"four wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.name.errors}\">\r\n          <label>Office Name<span class=\"mandatory\">*</span></label>\r\n          <input type=\"text\" name=\"name\" formControlName=\"name\" value=\"\" placeholder=\"Office Name*\">\r\n        </div>\r\n        <div class=\"four wide field\">\r\n          <label>Agent code</label>\r\n          <input type=\"text\" name=\"agent_code\" formControlName=\"agent_code\" value=\"\" placeholder=\"Agent Code\">\r\n        </div>\r\n        <div class=\"four wide field\">\r\n          <label>Branch Code</label>\r\n          <input type=\"text\" name=\"branch_code\" formControlName=\"branch_code\" value=\"\" placeholder=\"Branch Code\">\r\n        </div>\r\n        <div class=\"four wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.email.errors}\">\r\n          <label>Email<span class=\"mandatory\">*</span></label>\r\n          <input type=\"email\" name=\"email\" formControlName=\"email\" value=\"\" placeholder=\"Email*\">\r\n          <div *ngIf=\"isSubmitted && gfc.email.errors\" class=\"invalid-feedback\">\r\n            <div class=\"validations\" *ngIf=\"gfc.email.errors.pattern\">\r\n              Email must be a valid email address\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"four wide field\">\r\n          <label>Contact Number</label>\r\n          <input type=\"number\" name=\"contact\" formControlName=\"contact\" value=\"\" placeholder=\"Contact Number*\">\r\n        </div>\r\n        <div class=\"four wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.payment_gateway.errors}\">\r\n          <label>Payment Gateway<span class=\"mandatory\">*</span></label>\r\n          <select class=\"ui fluid dropdown\" formControlName=\"payment_gateway\">\r\n            <option value=\"\"> Payment Gateway </option>\r\n            <option value=\"1\"> Yes </option>\r\n            <option value=\"0\"> No </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"four wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.currency_id.errors}\">\r\n          <label>Operating Currency<span class=\"mandatory\">*</span></label>\r\n          <select class=\"ui fluid search dropdown\" formControlName=\"currency_id\">\r\n            <option value=\"\"> Operating Currency </option>\r\n            <option *ngFor=\"let currency of currencies\" value=\"{{currency.currency_id}}\"> {{currency.name}} </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"four wide field\" *ngIf=\"posBasicInfoForm.controls.credit_limit\">\r\n          <label class=\"inline-label\">Credit Limit<span class=\"mandatory\">*</span>\r\n            <i class=\"fa fa-exclamation-circle tooltip\">\r\n              <span class=\"tooltiptext\">\r\n                The Maximum amount permitted for the Ofiice to do Transactions\r\n              </span>\r\n            </i></label>\r\n          <span class=\"unlimited\"></span>\r\n          <input type=\"text\" name=\"credit_limit\" formControlName=\"credit_limit\" value=\"\" placeholder=\"Credit Limit*\" class=\"credit-limit\"\r\n            required>\r\n        </div>\r\n        <!--from shared module countrylist-->\r\n        <!-- <div class=\"four wide field\">\r\n          <app-country-list></app-country-list>\r\n        </div>   -->\r\n        <!--from shared module countrylist-->\r\n        <div class=\"four wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.country_id.errors}\">\r\n          <label>Operating Country<span class=\"mandatory\">*</span></label>\r\n          <select class=\"ui fluid search dropdown\" formControlName=\"country_id\">\r\n            <option value=\"\"> Operating Country</option>\r\n            <option *ngFor=\"let country of countries\" value=\"{{country.country_id}}\">{{country.country}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"four wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.timezone_id.errors}\">\r\n          <label>Operating Time Zone<span class=\"mandatory\">*</span></label>\r\n          <select class=\"ui fluid search dropdown\" formControlName=\"timezone_id\">\r\n            <option value=\"\"> Operating Time Zone</option>\r\n            <option *ngFor=\"let timezone of timezones\" value=\"{{timezone.timezone_id}}\">\r\n              {{ timezone.timezone_value }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"four wide field\">\r\n          <label>Tax Number\r\n            <i class=\"fa fa-exclamation-circle tooltip\">\r\n              <span class=\"tooltiptext\">\r\n                GST / VAT in Invoice\r\n              </span>\r\n            </i></label>\r\n          <input type=\"text\" name=\"tax_number\" formControlName=\"tax_number\" value=\"\" placeholder=\"Tax Number\">\r\n        </div>\r\n        <div class=\"four wide field\" *ngIf=\"posBasicInfoForm.controls.numberOfUsers\">\r\n          <label>Number of Users<span class=\"mandatory\">*</span>\r\n            <i class=\"fa fa-exclamation-circle tooltip\">\r\n              <span class=\"tooltiptext\">\r\n                Maximum number of Users allowed for the office\r\n              </span>\r\n            </i></label>\r\n          <input type=\"text\" name=\"numberOfUsers\" formControlName=\"numberOfUsers\" value=\"\" placeholder=\"No of Users*\">\r\n        </div>\r\n        <div class=\"four wide field\">\r\n          <label>IATA Number</label>\r\n          <input type=\"text\" name=\"iata_no\" formControlName=\"iata_no\" value=\"\" placeholder=\"IATA Number*\">\r\n        </div>\r\n      </div>\r\n      <div class=\"ui grid spacing margin-bottom-15\">\r\n        <div class=\"eight wide column tax-section gridstyle\">\r\n          <div class=\"ui segment\">\r\n            <h4 class=\"ui header\">Airline TAX in Percentage</h4>\r\n            <div class=\"ui grid\">\r\n              <div class=\"eight wide column gridstyle2\">\r\n                <div class=\"ui segment tax_block\">\r\n                  <p>Domestic : </p>\r\n                  <div class=\"sixteen wide field\">\r\n                    <label>Tax Code</label>\r\n                    <input type=\"text\" formControlName=\"domestictTaxCode\" value=\"\" placeholder=\"Tax Code\">\r\n                  </div>\r\n                  <div class=\"sixteen wide field\">\r\n                    <label>Tax in Percentage</label>\r\n                    <input type=\"text\" formControlName=\"domestictTaxPercentage\" value=\"\"\r\n                      placeholder=\"Tax in Percentage\">\r\n                  </div>\r\n                  <div class=\"sixteen wide field\">\r\n                    <label>Currency</label>\r\n                    <select class=\"ui fluid search dropdown\" formControlName=\"domestictTaxCurrency\">\r\n                      <option value=\"\"> Select Currency</option>\r\n                      <option *ngFor=\"let currency of currencies\" value=\"{{currency.currency_id}}\"> {{ currency.name }}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"sixteen wide field\">\r\n                    <label> Add Airport </label>\r\n                    <select class=\"ui dropdownThree fluid search multiple_search\" id=\"airports\"\r\n                      formControlName=\"domestictTaxAirport\" multiple=\"\" name=\"domestictTaxAirport\" value=\"\">\r\n                      <option value=\"\" disabled selected>Select one category </option>\r\n                      <option *ngFor=\"let airport of airports\" value=\"{{airport.AirportCode}}\">\r\n                        {{ airport.AirportCode }}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"eight wide column gridstyle1\">\r\n                <div class=\"ui segment tax_block\">\r\n                  <p>International : </p>\r\n                  <div class=\"sixteen wide field\">\r\n                    <label>Tax in Percentage</label>\r\n                    <input type=\"text\" formControlName=\"internationalTaxPercentage\" value=\"\"\r\n                      placeholder=\"Tax in Percentage\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"eight wide column tax-section gridstyle3\">\r\n          <div class=\"ui segment\">\r\n            <h4 class=\"ui header\">Non Airline TAX in Percentage</h4>\r\n            <div class=\"ui grid\">\r\n              <div class=\"sixteen wide column\">\r\n                <div class=\"ui segment tax_block\">\r\n                  <p>Non Airline : </p>\r\n                  <div class=\"sixteen wide field\">\r\n                    <label>Tax in Percentage</label>\r\n                    <input type=\"number\" formControlName=\"nonAirlineTax\" value=\"\" placeholder=\"Tax in Percentage\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui grid margin-bottom-15 card-section\">\r\n          <div class=\"eight wide column gridstyle4\">\r\n            <div class=\"ui segment tax-section\">\r\n              <h4 class=\"ui header payment-header \">Choose Payment</h4>\r\n              <div class=\"ui grid\">\r\n                <div class=\"nine wide field\">\r\n                  <div class=\" ui segment bg-grey\">\r\n                    <p class=\"ui checkbox\">\r\n                      <input type=\"checkbox\" formControlName=\"amexCard\">\r\n                      <label>Amex Card </label>\r\n                    </p>\r\n                    <div class=\"ui grid\" *ngIf=\"posBasicInfoForm.controls.amexCard && posBasicInfoForm.controls.amexCard.value\">\r\n                      <div class=\"sixteen wide column\">\r\n                        <div class=\"ui \">\r\n                          <!-- <p>Amex Card Details : </p> -->\r\n                          <div *ngIf=\"posBasicInfoForm.controls.amex_card\" formGroupName=\"amex_card\"\r\n                            class=\"cardDetails\">\r\n                            <div class=\"fields one\">\r\n                              <div class=\"sixteen wide field\">\r\n                                <input type=\"text\" formControlName=\"cardHolderName\" placeholder=\"Card Holders Name*\">\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"fields two\">\r\n                              <div class=\"seven wide field\">\r\n                                <select class=\"ui fluid dropdown\" formControlName=\"cardHolderType\">\r\n                                  <option value=\"\"> Card Type </option>\r\n                                  <option value=\"Visa\"> Visa </option>\r\n                                  <option value=\"MasterCard\"> Master Card </option>\r\n                                  <option value=\"AmericanExpress\"> Amercian Express </option>\r\n                                </select>\r\n                              </div>\r\n                              <div class=\"nine wide field\">\r\n                                <input type=\"text\" formControlName=\"cardnumber\" value=\"\" placeholder=\"Card Number\">\r\n                              </div>\r\n\r\n                            </div>\r\n                            <div class=\"fields three\">\r\n                              <div class=\"six wide field\">\r\n                                <select class=\"ui fluid dropdown\" formControlName=\"cardExpMonth\">\r\n                                  <option value=\"\"> Exp. Month </option>\r\n                                  <option value=\"01\"> Jan (01) </option>\r\n                                  <option value=\"02\"> Feb (02) </option>\r\n                                  <option value=\"03\"> Mar (03) </option>\r\n                                  <option value=\"04\"> Apr (04) </option>\r\n                                  <option value=\"05\"> May (05) </option>\r\n                                  <option value=\"06\"> Jun (06) </option>\r\n                                  <option value=\"07\"> Jul (07) </option>\r\n                                  <option value=\"08\"> Aug (08) </option>\r\n                                  <option value=\"09\"> Sep (09) </option>\r\n                                  <option value=\"10\"> Oct (10) </option>\r\n                                  <option value=\"11\"> Nov (11) </option>\r\n                                  <option value=\"12\"> Dec (12) </option>\r\n                                </select>\r\n                              </div>\r\n                              <div class=\"six wide field\">\r\n                                <select class=\"ui fluid dropdown\" formControlName=\"cardExpYear\">\r\n                                  <option value=\"\"> Exp. Year </option>\r\n                                  <option value=\"19\"> 2019 </option>\r\n                                  <option value=\"20\"> 2020 </option>\r\n                                  <option value=\"21\"> 2021 </option>\r\n                                  <option value=\"22\"> 2022 </option>\r\n                                  <option value=\"23\"> 2023 </option>\r\n                                  <option value=\"24\"> 2024 </option>\r\n                                  <option value=\"25\"> 2025 </option>\r\n                                  <option value=\"26\"> 2026 </option>\r\n                                  <option value=\"27\"> 2027 </option>\r\n                                  <option value=\"28\"> 2028 </option>\r\n                                  <option value=\"29\"> 2029 </option>\r\n                                </select>\r\n                              </div>\r\n                              <div class=\"four wide field\">\r\n                                <input type=\"text\" formControlName=\"cardcvv\" value=\"\" placeholder=\"CVV\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"seven wide field\">\r\n                  <div class=\" ui segment bg-grey\">\r\n                    <p class=\"ui checkbox\">\r\n                      <input type=\"checkbox\" formControlName=\"queue\">\r\n                      <label>Queue </label>\r\n                    </p>\r\n                    <div class=\"ui grid\" *ngIf=\"posBasicInfoForm.controls.queue_service && posBasicInfoForm.controls.queue_service.value\"\r\n                      class=\"cardDetails\">\r\n                      <div class=\"sixteen wide column\">\r\n                        <div class=\"ui \">\r\n                          <!-- <p>Amex Card Details : </p> -->\r\n                          <div *ngIf=\"posBasicInfoForm.controls.queue_service\" formGroupName=\"queue_service\">\r\n                            <div class=\"fields one\">\r\n                              <div class=\"sixteen wide field\">\r\n                                <input type=\"text\" formControlName=\"queue1\" placeholder=\"\">\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"fields one\">\r\n                              <div class=\"sixteen wide field\">\r\n                                <input type=\"text\" formControlName=\"queue2\" placeholder=\"\">\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"fields one\">\r\n                              <div class=\"sixteen wide field\">\r\n                                <input type=\"text\" formControlName=\"queue3\" placeholder=\"\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"eight wide column\">\r\n            <div [hidden]=\"posBasicInfoForm.controls.corporate_type.value != 'Agent'\" class=\"ui segment tax-section\"\r\n              formGroupName=\"pos_negofares\">\r\n              <h4 class=\"ui header payment-header\">Fare Preference for Nego Fares</h4>\r\n              <div class=\"ui grid cardDetails\">\r\n                <div class=\"eight wide field\">\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"tourOperatorDeffered\"\r\n                      value=\"759 758 70J ||(Published and Private)\">\r\n                    <label>Default (Published and Private)</label>   \r\n                  </div>\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"bulkContract\" value=\"759 758||Contract Bulk\">\r\n                    <label>Contract Bulk</label>\r\n                  </div>\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"marine\" value=\"759 758||Marine\">\r\n                    <label>Marine</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"eight wide field\">\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"tourOperatorSemiDeffered\"\r\n                      value=\"759 758||Tour Operator Deferred\">\r\n                    <label>Tour Operator Deferred</label>\r\n                  </div>\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"privateAdult\"\r\n                      value=\"759 758||Private Fare Adult\">\r\n                    <label>Private Fare Adult</label>\r\n                  </div>\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"humanitarian\" value=\"759 758||Humanitarian\">\r\n                    <label>Humanitarian</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"pos_btn-panel spacing bookings_btn-panel\">\r\n        <button class=\"ui button primary button align\" type=\"submit\">Save</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n";
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


    __webpack_exports__["default"] = "<div class=\"outer-form\">\r\n    <form class=\"ui form pos_basic_form\" [formGroup]=\"brandingInfoForm\" (ngSubmit)=\"storeBrandingInfo()\">\r\n      <br> \r\n      <!-- Branding information part, IMAGE uploads -->\r\n      <h4 class=\"ui header spacing\">Branding Informations</h4>\r\n      <span class=\"dim-footer span1\">(Only .jpeg , .png files allowed and maximum size: 2,097 KB)</span>\r\n      <div class=\"field spacing\">\r\n        <div class=\"three fields\">\r\n          <div class=\"four wide field brand\">\r\n            <div class=\"ui\">\r\n              <label class=\"ui transparent margin-right-20\">Office Logo</label>\r\n              <input type=\"file\" #office_logo class=\"inputfile\" id=\"officeLogo\"\r\n                (change)=\"uploadImage(office_logo.files, 'officeLogo')\" />\r\n              <label for=\"officeLogo\" class=\"ui primary button brand_buttons\">\r\n                <i class=\"ui upload icon\"></i>\r\n                Upload image\r\n              </label>\r\n              <img *ngIf=\"brandingInfoForm.controls.image_website.value\" class=\"branding-pic\"\r\n                [src]=\"brandingInfoForm.controls.image_website.value\" id=\"logoImg\">\r\n            </div>\r\n          </div>\r\n          <div class=\"four wide field brand\">\r\n            <div class=\"ui\">\r\n              <label class=\"ui transparent margin-right-20\">Branding Invoice</label>\r\n              <input type=\"file\" #branding_invoice class=\"inputfile\" id=\"brandingInvoice\"\r\n                (change)=\"uploadImage(branding_invoice.files, 'brandingInvoice')\" />\r\n              <label for=\"brandingInvoice\" class=\"ui primary button brand_buttons\">\r\n                <i class=\"ui upload icon\"></i>\r\n                Upload image\r\n              </label>\r\n              <img *ngIf=\"brandingInfoForm.controls.image_invoice.value\" class=\"branding-pic\"\r\n                [src]=\"brandingInfoForm.controls.image_invoice.value\" id=\"brandingImg\">\r\n            </div>\r\n          </div>\r\n          <div class=\"four wide field brand\">\r\n            <div class=\"ui\">\r\n              <label class=\"ui transparent margin-right-20\">Branding Signature</label>\r\n              <input type=\"file\" #brandingSignature class=\"inputfile\" id=\"brandingSignature\"\r\n                (change)=\"uploadImage(brandingSignature.files, 'brandingSignature')\" />\r\n              <label for=\"brandingSignature\" class=\"ui primary button brand_buttons\">\r\n                <i class=\"ui upload icon\"></i>\r\n                Upload image\r\n              </label>\r\n              <img *ngIf=\"brandingInfoForm.controls.image_email.value\" class=\"branding-pic\"\r\n                [src]=\"brandingInfoForm.controls.image_email.value\" id=\"brandingSignatureImg\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Office documents part , PDF uploads -->\r\n      <div\r\n        [hidden]=\"corporate_type == 'B2C' || corporate_type == 'Mobile'\"\r\n        class=\"ui fitted divider\"></div>\r\n      <h4 [hidden]=\"corporate_type == 'B2C' || corporate_type == 'Mobile'\"\r\n        class=\"ui header spacing\">Office Documents\r\n        <i class=\"fa fa-exclamation-circle tooltip\">\r\n          <span class=\"tooltiptext\">\r\n            Contracts, Licence\r\n          </span>\r\n        </i></h4>\r\n      <span\r\n        [hidden]=\"corporate_type== 'B2C' || corporate_type == 'Mobile'\"\r\n        class=\"dim-footer span1\"> (Only .pdf files allowed and maximum size: 2,097 KB)</span>\r\n      <div\r\n        [hidden]=\"corporate_type == 'B2C' || corporate_type == 'Mobile'\"\r\n        class=\"field spacing\">\r\n        <div class=\"three fields\">\r\n          <div class=\"four wide field brand\">\r\n            <div class=\"ui\">\r\n              <label class=\"ui transparent margin-right-20\">Agent Upload 1</label>\r\n              <input type=\"file\" #pdf_file1 class=\"inputfile\" id=\"agentupload1\"\r\n                (change)=\"uploadPDF(pdf_file1.files, 'image_file1')\" />\r\n              <label for=\"agentupload1\" class=\"ui primary button brand_buttons\">\r\n                <i class=\"ui upload icon\"></i>\r\n                Upload File\r\n              </label>\r\n              <a class=\"uploaded-document\" *ngIf=\"brandingInfoForm.controls.image_file1.value != ''\"\r\n                href=\"{{ brandingInfoForm.controls.image_file1.value }}\" target=\"_blank\"></a>\r\n            </div>\r\n          </div>\r\n          <div class=\"four wide field brand\">\r\n            <div class=\"ui\">\r\n              <label class=\"ui transparent margin-right-20\">Agent Upload 2</label>\r\n              <input type=\"file\" #pdf_file2 class=\"inputfile\" id=\"agentupload2\"\r\n                (change)=\"uploadPDF(pdf_file2.files, 'image_file2')\" />\r\n              <label for=\"agentupload2\" class=\"ui primary button  brand_buttons\">\r\n                <i class=\"ui upload icon\"></i>\r\n                Upload File\r\n              </label>\r\n              <a class=\"uploaded-document\" *ngIf=\"brandingInfoForm.controls.image_file2.value != ''\"\r\n                href=\"{{ brandingInfoForm.controls.image_file2.value }}\" target=\"_blank\"></a>\r\n            </div>\r\n          </div>\r\n          <div class=\"four wide field brand\">\r\n            <div class=\"ui\">\r\n              <label class=\"ui transparent margin-right-20\">Agent Upload 3</label>\r\n              <input type=\"file\" #pdf_file3 class=\"inputfile\" id=\"agentupload3\"\r\n                (change)=\"uploadPDF(pdf_file3.files, 'image_file3')\" />\r\n              <label for=\"agentupload3\" class=\"ui primary button brand_buttons\">\r\n                <i class=\"ui upload icon\"></i>\r\n                Upload File\r\n              </label>\r\n              <a class=\"uploaded-document\" *ngIf=\"brandingInfoForm.controls.image_file3.value != ''\"\r\n                href=\"{{ brandingInfoForm.controls.image_file3.value }}\" target=\"_blank\"></a>\r\n            </div>\r\n          </div>\r\n          <div class=\"four wide field brand\">\r\n            <div class=\"ui\">\r\n              <label class=\"ui transparent margin-right-20\">Agent Upload 4</label>\r\n              <input type=\"file\" #pdf_file4 class=\"inputfile\" id=\"agentupload4\"\r\n                (change)=\"uploadPDF(pdf_file4.files, 'image_file4')\" />\r\n              <label for=\"agentupload4\" class=\"ui primary button brand_buttons\">\r\n                <i class=\"ui upload icon\"></i>\r\n                Upload File\r\n              </label>\r\n              <a class=\"uploaded-document\" *ngIf=\"brandingInfoForm.controls.image_file4.value != ''\"\r\n                href=\"{{ brandingInfoForm.controls.image_file4.value }}\" target=\"_blank\"></a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui fitted divider\"></div>\r\n      <!-- Text area for company notes part -->\r\n      <h4 class=\"ui header spacing note-head\">Company Notes\r\n        <i class=\"fa fa-exclamation-circle tooltip\">\r\n          <span class=\"tooltiptext\">\r\n            Additional info about the Office\r\n          </span>\r\n        </i></h4>\r\n      <div class=\"field spacing\">\r\n        <div class=\"one fields\">\r\n          <div class=\"nine wide field notes-section\"\r\n            [ngClass]=\"{'error': (isSubmitted && brandingInfoForm.controls.terms_conditions.status == 'INVALID')}\">\r\n            <textarea rows=\"2\" formControlName=\"terms_conditions\"></textarea>\r\n          </div>\r\n        </div>\r\n        <div class=\"bookings_btn-panel buttonstyle button1\">\r\n          <button mat-button class=\"ui button primary button_align\" type=\"submit\">Save</button>\r\n          <button mat-button class=\"ui button reset button_align\" type=\"submit\">Cancel</button>\r\n        </div>\r\n      </div>\r\n      <!-- Form buttons Update, Cancel etc part -->\r\n   \r\n    </form>\r\n  </div>\r\n";
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


    __webpack_exports__["default"] = "<div class=\"ui segment\">\r\n<div class=\"outer-form\">\r\n  <form class=\"ui form pos_basic_form\" [formGroup]=\"monthlyTargetForm\" (ngSubmit)=\"storeMonthlyTarget()\">\r\n    <br>\r\n    <!-- Monthly target part -->\r\n    <h4 class=\"ui header spacing\">Monthly Target </h4>\r\n    <div class=\"field spacing\" formArrayName=\"monthlyTarget\"\r\n      *ngFor=\"let item of monthlyTargetForm.get('monthlyTarget')['controls']; let i = index;\">\r\n      <div [formGroupName]=\"i\">\r\n        <div class=\"ui twelve column grid fields custom-columns\">\r\n          <div class=\"two wide field\">\r\n            <label>Year</label>\r\n            <select formControlName=\"year\" placeholder=\"Year\" class=\"ui fluid  dropdown\">\r\n              <option value=\"\">Year</option>\r\n              <option value=\"2019\">2019</option>\r\n              <option value=\"2020\">2020</option>\r\n              <option value=\"2021\">2021</option>\r\n              <option value=\"2022\">2022</option>\r\n              <option value=\"2023\">2023</option>\r\n              <option value=\"2024\">2024</option>\r\n              <option value=\"2025\">2025</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"two wide field\">\r\n            <label>Month</label>\r\n            <select formControlName=\"month\" class=\"ui fluid  dropdown\">\r\n              <option value=\"\">Month</option>\r\n              <option value=\"01\">Jan</option>\r\n              <option value=\"02\">Feb</option>\r\n              <option value=\"03\">Mar</option>\r\n              <option value=\"04\">Apr</option>\r\n              <option value=\"05\">May</option>\r\n              <option value=\"06\">Jun</option>\r\n              <option value=\"07\">Jul</option>\r\n              <option value=\"08\">Aug</option>\r\n              <option value=\"09\">Sep</option>\r\n              <option value=\"10\">Oct</option>\r\n              <option value=\"11\">Nov</option>\r\n              <option value=\"12\">Dec</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"two wide field\">\r\n            <label>Flights</label>\r\n            <input type=\"number\" formControlName=\"flight_stats\" placeholder=\"Flights Target\">\r\n          </div>\r\n          <div class=\"two wide field\">\r\n            <label>Hotels</label>\r\n            <input type=\"number\" formControlName=\"hotel_stats\" placeholder=\"Hotel Target\">\r\n          </div>\r\n          <div class=\"two wide field\">\r\n            <label>Car Hire</label>\r\n            <input type=\"number\" formControlName=\"car_stats\" placeholder=\"Car Target\">\r\n          </div>\r\n          <div class=\"two wide field\">\r\n            <label>Insurance</label>\r\n            <input type=\"number\" formControlName=\"insurance_stats\" placeholder=\"Insurance Target\">\r\n          </div>\r\n          <div class=\"four wide field  fourwide_button \">\r\n            <button class=\"ui primary reset button add_btn\" *ngIf=\"i!=0\" tabindex=\"0\"\r\n              (click)=\"removeItem(i)\">Delete</button>\r\n            <button class=\"ui primary button add_btn\" (click)=\"addItem()\"\r\n              *ngIf=\"i==(monthlyTargetForm.get('monthlyTarget')['controls'].length-1)\">Add</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- Form buttons Update, Cancel etc part -->\r\n    <div class=\"pos_btn-panel spacing\">\r\n      <button mat-button class=\"ui right floated button reset\" type=\"submit\">Cancel</button>\r\n      <button mat-button class=\"ui right floated button primary\" type=\"submit\">Save</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"ui clearing segment\">\r\n  <div class=\"ui right floated button primary button tab_margin branch2\" (click)=\"loadAirlineRBD()\">Airline RBD</div>\r\n  <div class=\"ui right floated button primary button tab_margin branch2\" (click)=\"loadSuppliers()\">Suppliers</div>\r\n  <div class=\"ui right floated button primary button tab_margin branch2\" (click)=\"loadMonthlyTarget()\">Monthly Target</div>\r\n  <div class=\"ui right floated button primary button tab_margin branch2\" (click)=\"loadBrandingInfo()\">Branding informations</div>\r\n  <div class=\"ui right floated button primary button tab_margin branch2\" (click)=\"loadOfficeAddressInfo()\">Office Address</div>\r\n  <div class=\"ui right floated button primary button tab_margin branch2\" (click)=\"loadBranchInfo()\">Branch</div>\r\n</div>\r\n\r\n<div class=\"outer-form\">\r\n  <form class=\"ui form pos_basic_form\" [formGroup]=\"posBasicInfoForm\" >\r\n    <h4 class=\"ui header spacing ui-basic-header\">Basic Information</h4>\r\n    <div class=\"field spacing\">\r\n      <div class=\"ui four column grid fields custom-columns\">\r\n        <div class=\"four wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.corporate_type.errors}\">\r\n          <label>Business Type<span class=\"mandatory\">*</span></label>\r\n          <select class=\"ui fluid dropdown\" formControlName=\"corporate_type\" disabled>\r\n            <option value=\"B2C\"> B2C </option>\r\n            <option value=\"Agent\"> Sub Agent / Branch Office </option>\r\n            <option value=\"API\"> API OUT </option>\r\n            <option value=\"Mobile\">Mobile</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"four wide field\" *ngIf=\"posBasicInfoForm.controls.domain_url\"\r\n          [ngClass]=\"{'is-invalid': isSubmitted && gfc.domain_url.errors}\">\r\n          <label>Domain Name</label>\r\n          <input type=\"text\" name=\"domain_url\" formControlName=\"domain_url\" value=\"\" placeholder=\"B2C Domain Name\">\r\n        </div>\r\n        <div class=\"four wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.name.errors}\">\r\n          <label>Office Name<span class=\"mandatory\">*</span></label>\r\n          <input type=\"text\" name=\"name\" formControlName=\"name\" value=\"\" placeholder=\"Office Name*\">\r\n        </div>\r\n        <div class=\"four wide field\">\r\n          <label>Agent code</label>\r\n          <input type=\"text\" name=\"agent_code\" formControlName=\"agent_code\" value=\"\" placeholder=\"Agent Code\">\r\n        </div>\r\n        <div class=\"four wide field\">\r\n          <label>Branch Code</label>\r\n          <input type=\"text\" name=\"branch_code\" formControlName=\"branch_code\" value=\"\" placeholder=\"Branch Code\">\r\n        </div>\r\n        <div class=\"four wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.email.errors}\">\r\n          <label>Email<span class=\"mandatory\">*</span></label>\r\n          <input type=\"email\" name=\"email\" formControlName=\"email\" value=\"\" placeholder=\"Email*\">\r\n          <div *ngIf=\"isSubmitted && gfc.email.errors\" class=\"invalid-feedback\">\r\n            <div class=\"validations\" *ngIf=\"gfc.email.errors.pattern\">\r\n              Email must be a valid email address\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"four wide field\">\r\n          <label>Contact Number</label>\r\n          <input type=\"number\" name=\"contact\" formControlName=\"contact\" value=\"\" placeholder=\"Contact Number*\">\r\n        </div>\r\n        <div class=\"four wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.payment_gateway.errors}\">\r\n          <label>Payment Gateway<span class=\"mandatory\">*</span></label>\r\n          <select class=\"ui fluid dropdown\" formControlName=\"payment_gateway\">\r\n            <option value=\"\"> Payment Gateway </option>\r\n            <option value=\"1\"> Yes </option>\r\n            <option value=\"0\"> No </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"four wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.currency_id.errors}\">\r\n          <label>Operating Currency<span class=\"mandatory\">*</span></label>\r\n          <select class=\"ui fluid search dropdown\" formControlName=\"currency_id\">\r\n            <option value=\"\"> Operating Currency </option>\r\n            <option *ngFor=\"let currency of currencies\" value=\"{{currency.currency_id}}\"> {{currency.name}} </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"four wide field\">\r\n          <label class=\"inline-label\">Credit Limit<span class=\"mandatory\">*</span>\r\n            <i class=\"fa fa-exclamation-circle tooltip\">\r\n              <span class=\"tooltiptext\">\r\n                The Maximum amount permitted for the Ofiice to do Transactions\r\n              </span>\r\n            </i></label>\r\n          <span class=\"unlimited\"></span>\r\n          <input type=\"text\" name=\"credit_limit\" formControlName=\"credit_limit\" value=\"\" placeholder=\"Credit Limit*\" class=\"credit-limit\"\r\n            disabled>\r\n        </div>\r\n        <div class=\"four wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.country_id.errors}\">\r\n          <label>Operating Country<span class=\"mandatory\">*</span></label>\r\n          <select class=\"ui fluid search dropdown\" formControlName=\"country_id\">\r\n            <option value=\"\"> Operating Country</option>\r\n            <option *ngFor=\"let country of countries\" value=\"{{country.country_id}}\">{{country.country}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"four wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.timezone_id.errors}\">\r\n          <label>Operating Time Zone<span class=\"mandatory\">*</span></label>\r\n          <select class=\"ui fluid search dropdown\" formControlName=\"timezone_id\">\r\n            <option value=\"\"> Operating Time Zone</option>\r\n            <option *ngFor=\"let timezone of timezones\" value=\"{{timezone.timezone_id}}\">\r\n              {{ timezone.timezone_value }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <div class=\"four wide field\">\r\n          <label>Tax Number\r\n            <i class=\"fa fa-exclamation-circle tooltip\">\r\n              <span class=\"tooltiptext\">\r\n                GST / VAT in Invoice\r\n              </span>\r\n            </i></label>\r\n          <input type=\"text\" name=\"tax_number\" formControlName=\"tax_number\" value=\"\" placeholder=\"Tax Number\">\r\n        </div>\r\n        <div class=\"four wide field\">\r\n          <label>Number of Users<span class=\"mandatory\">*</span>\r\n            <i class=\"fa fa-exclamation-circle tooltip\">\r\n              <span class=\"tooltiptext\">\r\n                Maximum number of Users allowed for the office\r\n              </span>\r\n            </i></label>\r\n          <input type=\"text\" name=\"numberOfUsers\" formControlName=\"numberOfUsers\" value=\"\"  placeholder=\"No of Users*\">\r\n        </div>\r\n        <div class=\"four wide field\">\r\n          <label>IATA Number</label>\r\n          <input type=\"text\" name=\"iata_no\" formControlName=\"iata_no\" value=\"\" placeholder=\"IATA Number*\">\r\n        </div>\r\n      </div>\r\n      <div class=\"ui grid margin-bottom-15\">\r\n        <div class=\"eight wide column tax-section gridstyle\">\r\n          <div class=\"ui segment\">\r\n            <h4 class=\"ui header\">Airline TAX in Percentage</h4>\r\n            <div class=\"ui grid\">\r\n              <div class=\"eight wide column gridstyle2\">\r\n                <div class=\"ui segment tax_block\">\r\n                  <p>Domestic : </p>\r\n                  <div class=\"sixteen wide field\">\r\n                    <label>Tax Code</label>\r\n                    <input type=\"text\" formControlName=\"domestictTaxCode\" value=\"\" placeholder=\"Tax Code\">\r\n                  </div>\r\n                  <div class=\"sixteen wide field\">\r\n                    <label>Tax in Percentage</label>\r\n                    <input type=\"text\" formControlName=\"domestictTaxPercentage\" value=\"\"\r\n                      placeholder=\"Tax in Percentage\">\r\n                  </div>\r\n                  <div class=\"sixteen wide field\">\r\n                    <label>Currency</label>\r\n                    <select class=\"ui fluid search dropdown\" formControlName=\"domestictTaxCurrency\">\r\n                      <option value=\"\"> Select Currency</option>\r\n                      <option *ngFor=\"let currency of currencies\" value=\"{{currency.currency_id}}\"> {{ currency.name }}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                  <div class=\"sixteen wide field\">\r\n                    <label> Add Airport </label>\r\n                    <select class=\"ui dropdownThree fluid search multiple_search\" id=\"airports\"\r\n                      formControlName=\"domestictTaxAirport\" multiple=\"\" name=\"domestictTaxAirport\" value=\"\">\r\n                      <option value=\"\" selected>Select one category </option>\r\n                      <option *ngFor=\"let airport of airports\" value=\"{{airport.AirportCode}}\">\r\n                        {{ airport.AirportCode }}\r\n                      </option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"eight wide column gridstyle1\">\r\n                <div class=\"ui segment tax_block\">\r\n                  <p>International : </p>\r\n                  <div class=\"sixteen wide field\">\r\n                    <label>Tax in Percentage</label>\r\n                    <input type=\"text\" formControlName=\"internationalTaxPercentage\" value=\"\"\r\n                      placeholder=\"Tax in Percentage\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"eight wide column tax-section gridstyle3\">\r\n          <div class=\"ui segment\">\r\n            <h4 class=\"ui header\">Non Airline TAX in Percentage</h4>\r\n            <div class=\"ui grid\">\r\n              <div class=\"sixteen wide column\">\r\n                <div class=\"ui segment tax_block\">\r\n                  <p>Non Airline : </p>\r\n                  <div class=\"sixteen wide field\">\r\n                    <label>Tax in Percentage</label>\r\n                    <input type=\"number\" formControlName=\"nonAirlineTax\" value=\"\" placeholder=\"Tax in Percentage\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"ui grid margin-bottom-15 card-section\">\r\n          <div class=\"eight wide column gridstyle4\">\r\n            <div class=\"ui segment tax-section\">\r\n              <h4 class=\"ui header payment-header\">Choose Payment</h4>\r\n              <div class=\"ui grid\">\r\n                <div class=\"nine wide field\">\r\n                  <div class=\" ui segment bg-grey\">\r\n                    <p class=\"ui checkbox\">\r\n                      <input type=\"checkbox\" formControlName=\"amexCard\">\r\n                      <label>Amex Card </label>\r\n                    </p>\r\n                    <div class=\"ui grid\"\r\n                      *ngIf=\"posBasicInfoForm.controls.amexCard && posBasicInfoForm.controls.amexCard.value\">\r\n                      <div class=\"sixteen wide column\">\r\n                        <div class=\"ui \">\r\n                          <!-- <p>Amex Card Details : </p> -->\r\n                          <div *ngIf=\"posBasicInfoForm.controls.amex_card\" formGroupName=\"amex_card\"\r\n                            class=\"cardDetails\">\r\n                            <div class=\"fields one\">\r\n                              <div class=\"sixteen wide field\"\r\n                                [ngClass]=\"{'error': (isSubmitted && posBasicInfoForm['controls'].amex_card['controls'].cardHolderName.status == 'INVALID')}\">\r\n                                <input type=\"text\" formControlName=\"cardHolderName\" placeholder=\"Card Holders Name*\">\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"fields two\">\r\n                              <div class=\"seven wide field\"\r\n                                [ngClass]=\"{'error': (isSubmitted && posBasicInfoForm['controls'].amex_card['controls'].cardHolderType.status == 'INVALID')}\">\r\n                                <select class=\"ui fluid dropdown\" formControlName=\"cardHolderType\">\r\n                                  <option value=\"\"> Card Type </option>\r\n                                  <option value=\"Visa\"> Visa </option>\r\n                                  <option value=\"MasterCard\"> Master Card </option>\r\n                                  <option value=\"AmericanExpress\"> Amercian Express </option>\r\n                                </select>\r\n                              </div>\r\n                              <div class=\"nine wide field\"\r\n                                [ngClass]=\"{'error': (isSubmitted && posBasicInfoForm['controls'].amex_card['controls'].cardnumber.status == 'INVALID')}\">\r\n                                <input type=\"text\" formControlName=\"cardnumber\" value=\"\" placeholder=\"Card Number\">\r\n                              </div>\r\n\r\n                            </div>\r\n                            <div class=\"fields three\">\r\n                              <div class=\"six wide field\"\r\n                                [ngClass]=\"{'error': (isSubmitted && posBasicInfoForm['controls'].amex_card['controls'].cardExpMonth.status == 'INVALID')}\">\r\n                                <select class=\"ui fluid dropdown\" formControlName=\"cardExpMonth\">\r\n                                  <option value=\"\"> Exp. Month </option>\r\n                                  <option value=\"01\"> Jan (01) </option>\r\n                                  <option value=\"02\"> Feb (02) </option>\r\n                                  <option value=\"03\"> Mar (03) </option>\r\n                                  <option value=\"04\"> Apr (04) </option>\r\n                                  <option value=\"05\"> May (05) </option>\r\n                                  <option value=\"06\"> Jun (06) </option>\r\n                                  <option value=\"07\"> Jul (07) </option>\r\n                                  <option value=\"08\"> Aug (08) </option>\r\n                                  <option value=\"09\"> Sep (09) </option>\r\n                                  <option value=\"10\"> Oct (10) </option>\r\n                                  <option value=\"11\"> Nov (11) </option>\r\n                                  <option value=\"12\"> Dec (12) </option>\r\n                                </select>\r\n                              </div>\r\n                              <div class=\"six wide field\"\r\n                                [ngClass]=\"{'error': (isSubmitted && posBasicInfoForm['controls'].amex_card['controls'].cardExpYear.status == 'INVALID')}\">\r\n                                <select class=\"ui fluid dropdown\" formControlName=\"cardExpYear\">\r\n                                  <option value=\"\"> Exp. Year </option>\r\n                                  <option value=\"19\"> 2019 </option>\r\n                                  <option value=\"20\"> 2020 </option>\r\n                                  <option value=\"21\"> 2021 </option>\r\n                                  <option value=\"22\"> 2022 </option>\r\n                                  <option value=\"23\"> 2023 </option>\r\n                                  <option value=\"24\"> 2024 </option>\r\n                                  <option value=\"25\"> 2025 </option>\r\n                                  <option value=\"26\"> 2026 </option>\r\n                                  <option value=\"27\"> 2027 </option>\r\n                                  <option value=\"28\"> 2028 </option>\r\n                                  <option value=\"29\"> 2029 </option>\r\n                                </select>\r\n                              </div>\r\n                              <div class=\"four wide field\"\r\n                                [ngClass]=\"{'error': (isSubmitted && posBasicInfoForm['controls'].amex_card['controls'].cardcvv.status == 'INVALID')}\">\r\n                                <input type=\"text\" formControlName=\"cardcvv\" value=\"\" placeholder=\"CVV\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"seven wide field\">\r\n                  <div class=\" ui segment bg-grey\">\r\n                    <p class=\"ui checkbox\">\r\n                      <input type=\"checkbox\" formControlName=\"queue\">\r\n                      <label>Queue </label>\r\n                    </p>\r\n                    <div class=\"ui grid\"\r\n                      *ngIf=\"posBasicInfoForm.controls.queue_service && posBasicInfoForm.controls.queue_service.value\"\r\n                      class=\"cardDetails\">\r\n                      <div class=\"sixteen wide column\">\r\n                        <div class=\"ui \">\r\n                          <!-- <p>Amex Card Details : </p> -->\r\n                          <div *ngIf=\"posBasicInfoForm.controls.queue_service\" formGroupName=\"queue_service\">\r\n                            <div class=\"fields one\">\r\n                              <div class=\"sixteen wide field\"\r\n                                [ngClass]=\"{'error': (isSubmitted && posBasicInfoForm['controls'].queues['controls'].queue1.status == 'INVALID')}\">\r\n                                <input type=\"text\" formControlName=\"queue1\" placeholder=\"\">\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"fields one\">\r\n                              <div class=\"sixteen wide field\"\r\n                                [ngClass]=\"{'error': (isSubmitted && posBasicInfoForm['controls'].queues['controls'].queue2.status == 'INVALID')}\">\r\n                                <input type=\"text\" formControlName=\"queue2\" placeholder=\"\">\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"fields one\">\r\n                              <div class=\"sixteen wide field\"\r\n                                [ngClass]=\"{'error': (isSubmitted && posBasicInfoForm['controls'].queues['controls'].queue3.status == 'INVALID')}\">\r\n                                <input type=\"text\" formControlName=\"queue3\" placeholder=\"\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"eight wide column gridstyle\">\r\n            <div [hidden]=\"posBasicInfoForm.controls.corporate_type.value != 'Agent'\" class=\"ui segment tax-section\"\r\n              formGroupName=\"pos_negofares\">\r\n              <h4 class=\"ui header payment-header\">Fare Preference for Nego Fares</h4>\r\n              <div class=\"ui grid cardDetails\">\r\n                <div class=\"eight wide field fare fare1\">\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"tourOperatorDeffered\"\r\n                      value=\"758-1||Leisure Fare - Tour Operator Deferred\">\r\n                    <label>Leisure Fare - Tour Operator Deferred</label>\r\n                  </div>\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"bulkContract\" value=\"758-2||Leisure Fare - Contract Bulk\">\r\n                    <label>Leisure Fare - Bulk Contract</label>\r\n                  </div>\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"marine\" value=\"758-4||Leisure Fare - Marine\">\r\n                    <label>Leisure Fare - Marine</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"eight wide field fare fare1\">\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"tourOperatorSemiDeffered\"\r\n                      value=\"758-6||Leisure Fare - Tour Operator Semi-Deferred\">\r\n                    <label>Leisure Fare - Tour Operator Semi Deferred</label>\r\n                  </div>\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"privateAdult\"\r\n                      value=\"758-3||Leisure Fare - Private Fare Adult\">\r\n                    <label>Leisure Fare - Private Adult</label>\r\n                  </div>\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" formControlName=\"humanitarian\" value=\"758-5||Leisure Fare - Humanitarian\">\r\n                    <label>Leisure Fare - Humanitarian</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"pos_btn-panel bookings_btn-panel\">\r\n              <button class=\"ui button primary button align\" type=\"submit\" (click)=\"updatePosBasicInfo()\">Update POS</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n  </form>\r\n</div>\r\n";
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


    __webpack_exports__["default"] = "<div class=\"outer-segment\">\r\n  <h3 class=\"booking-header booking_comp\">Branches</h3>\r\n  <div class=\"outer-basic animated fadeIn\">\r\n    <div class=\"outer-basicForm\">\r\n      <form class=\"ui form\" [formGroup]=\"branchForm\" (ngSubmit)=\"saveBraches()\">\r\n        <div class=\"form-inner input booking-search-panel\">\r\n          <div class=\"fields trip-fields\">\r\n            <div class=\"five wide field branch\">\r\n              <label>Name</label>\r\n              <input type=\"text\" name=\"name\" formControlName=\"name\" placeholder=\"name\" />\r\n            </div>\r\n            <div class=\"five wide field branch\">\r\n              <label>Adresss 1</label>\r\n              <input type=\"text\" name=\"adress1\" formControlName=\"address_1\" placeholder=\"adress1\" />\r\n            </div>\r\n            <div class=\"five wide field branch\">\r\n              <label>Adresss 2</label>\r\n              <input type=\"text\" name=\"adress2\" formControlName=\"address_2\" placeholder=\"adress2\" />\r\n            </div>\r\n            <div class=\"five wide field buttondiv\">\r\n              <!-- <button class=\"ui right floated button primary\" (click)=\"cancelbranch()\">Cancel</button> -->\r\n              <!-- <button class=\"ui right floated button primary\" (click)=\"cancelbranch()\">Cancel</button> -->\r\n              <button class=\"ui  button primary button_align\" type=\"submitt\">Save</button>\r\n              <button class=\"ui button reset button_align\" type=\"submitt\">Cancel</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n\r\n      <div class=\"user-table-list b2c-list-user-table result-block\">\r\n          <ngx-datatable  #table class=\"table\" [columnMode]=\"'force'\" [headerHeight]=\"50\"\r\n            [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]=\"branchesdata\" [sortType]=\"'multi'\"\r\n            [reorderable]=\"true\" [sorts]=\"[{ prop: 'id', dir: 'desc' }]\">\r\n            <ngx-datatable-column name=\"Name\" prop=\"name\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Address 1\" prop=\"address_1\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Address 2\" prop=\"address_2\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Date\" prop=\"created_at\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\">{{value |date: 'dd/MM/yyyy h:mm a'}}\r\n              </ng-template>\r\n            </ngx-datatable-column>  \r\n            <ngx-datatable-column name=\"Delete\">\r\n              <ng-template let-row=\"row\" ngx-datatable-cell-template let-value=\"value\">\r\n                <ng-container *ngIf=\"row.status == 0\">\r\n                  <span class=\"action\" title=\"Delete\">\r\n                    <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n                    <!-- <i class=\"icon\" (click)=\"deleteTourCode(row)\">\r\n                      <img src=\"./../../../../assets/icons/delete-button.png\"\r\n                        class=\"bookings_input__placeholder-icon cal\" />\r\n                    </i> -->\r\n                  </span>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"row.status == 1\">\r\n                  <span class=\"action\" title=\"Delete\">\r\n                    ---\r\n                  </span>\r\n                </ng-container>\r\n              </ng-template>\r\n            </ngx-datatable-column>  \r\n          </ngx-datatable>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"outer-form\">\r\n    <form class=\"ui form pos_basic_form\" [formGroup]=\"officeAddressForm\" (ngSubmit)=\"storeOfficeAddress()\">\r\n      <!-- Office address part -->\r\n      <h4 class=\"ui header spacing\">Office Address</h4>\r\n      <div class=\"field spacing\">\r\n        <div class=\"ui four column grid fields custom-columns\">\r\n          <div class=\"four wide field\">\r\n            <label>Office Name</label>\r\n            <input type=\"text\" name=\"contact_person_name\" formControlName=\"contact_person_name\" placeholder=\"Office Name\">\r\n          </div>\r\n          <div class=\"four wide field\">\r\n            <label>Mobile Number</label>\r\n            <input type=\"number\" formControlName=\"contact_mobile_number\" name=\"contact_mobile_number\"\r\n              placeholder=\"Mobile Number\">\r\n          </div>\r\n          <div class=\"four wide field\">\r\n            <label>Email</label>\r\n            <input type=\"email\" formControlName=\"contact_person_email\" placeholder=\"Email ID\">\r\n            <!-- <div *ngIf=\"contact_person_email.invalid && (contact_person_email.dirty || contact_person_email.touched)\"\r\n              class=\"validations\">\r\n              <div class=\"validations\" *ngIf=\"contact_person_email.errors?.pattern\">\r\n                Email must be a valid email address\r\n              </div>\r\n            </div> -->\r\n          </div>\r\n          <div class=\"four wide field\"\r\n            [ngClass]=\"{'error': (isSubmitted && officeAddressForm['controls'].officeAddress['controls'].address_1.status == 'INVALID')}\">\r\n            <label>Address 1</label>\r\n            <input type=\"text\" formControlName=\"address_1\" placeholder=\"Address1\">\r\n          </div>\r\n          <div class=\"four wide field\"\r\n            [ngClass]=\"{'error': (isSubmitted && officeAddressForm['controls'].officeAddress['controls'].address_2.status == 'INVALID')}\">\r\n            <label>Address 2</label>\r\n            <input type=\"text\" formControlName=\"address_2\" placeholder=\"Address2\">\r\n          </div>\r\n          <div class=\"four wide field\"\r\n            [ngClass]=\"{'error': (isSubmitted && officeAddressForm['controls'].officeAddress['controls'].contact_country_id.status == 'INVALID')}\">\r\n            <label>Country</label>\r\n            <select class=\"ui fluid search dropdown\" formControlName=\"contact_country_id\"\r\n              (change)=\"passCountryId($event.target.value)\">\r\n              <option value=\"\"> Country </option>\r\n              <option *ngFor=\"let country of countries\" value=\"{{country.country_id}}\"> {{country.country}}\r\n              </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"four wide field\"\r\n            [ngClass]=\"{'error': (isSubmitted && officeAddressForm['controls'].officeAddress['controls'].city_id.status == 'INVALID')}\">\r\n            <label>City</label>\r\n            <select class=\"ui fluid search dropdown\" formControlName=\"city_id\">\r\n  \r\n              <option *ngFor=\"let city of cities\" value=\"{{city.city_id}}\">{{city.name}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"four wide field\"\r\n            [ngClass]=\"{'error': (isSubmitted && officeAddressForm['controls'].officeAddress['controls'].state_province.status == 'INVALID')}\">\r\n            <label>State/Province</label>\r\n            <input type=\"text\" formControlName=\"state_province\" placeholder=\"State / Province\">\r\n          </div>\r\n          <div class=\"four wide field\"\r\n            [ngClass]=\"{'error': (isSubmitted && officeAddressForm['controls'].officeAddress['controls'].zip.status == 'INVALID')}\">\r\n            <label>Zip Code</label>\r\n            <input type=\"text\" formControlName=\"zip\" placeholder=\"Zip code\">\r\n            <!-- <div *ngIf=\"zip.invalid && (zip.dirty || zip.touched)\" class=\"validations\">\r\n              <div class=\"validations\" *ngIf=\"zip.errors?.pattern\">\r\n                Zip code must be a valid number\r\n              </div>\r\n            </div> -->\r\n          </div>\r\n  \r\n        </div>\r\n        <div class=\"buttonstyle\">\r\n        <button mat-button class=\"ui button primary button_align\" type=\"submit\">Save</button>\r\n        <button mat-button class=\"ui button reset button_align\" type=\"submit\">Cancel</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"pos_btn-panel spacing\">\r\n \r\n      </div>\r\n    </form>\r\n  </div>";
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


    __webpack_exports__["default"] = "<h3><span class=\"update-header\">List of Office(s)</span></h3>\r\n<!-- organizationTypes -->\r\n<div class=\"ui fluid container\">\r\n  <div class=\"outer-basic\">\r\n    <div class=\"outer-basicForm\">\r\n      <form [formGroup]=\"filterForm\" (ngSubmit)=\"filterFormSubmit()\" class=\"ui form search-field-wrapper\">\r\n        <div class=\"four fields\">\r\n          <div class=\"two wide field\">\r\n            <select class=\"ui fluid dropdown\" formControlName=\"corporate_type\">\r\n              <option value=\"all\">All</option>\r\n              <option *ngFor=\"let orgType of organizationTypes;\" value=\"{{orgType}}\">\r\n                {{orgType}}</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"three wide field\">\r\n            <input type=\"text\" placeholder=\"Office Name/Office Id\" formControlName=\"nameAndOfficeId\">\r\n          </div>\r\n          <div class=\"eight wide field bookings_btn-panel\">\r\n            <button class=\"ui primary button filter_btn\">\r\n              <span class=\"filter_list\">Search</span>\r\n            </button>\r\n            <button class=\"ui reset button filter_btn_reset\" (click)=\"filterForm.reset({})\">\r\n              <span class=\"filter_list\">Reset</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      \r\n      <div class=\"user-table-list b2c-list-user-table\">\r\n      <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n        [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='pointOfSales' [sortType]=\"'multi'\" [reorderable]=\"true\"\r\n        [sorts]=\"[{prop: 'registration_id', dir: 'desc'}]\">\r\n        <ngx-datatable-column name=\"Sl No\" prop=\"name\">\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Office ID\" prop=\"agent_code\">\r\n          <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n            <span *ngIf=\"value\">{{value}}</span>\r\n            <span *ngIf=\"!value\">---</span>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Office Name\" prop=\"name\">\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Office Type\" prop=\"corporate_type\">\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Credit Limit\" prop=\"credit_limit\">\r\n          <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n            <span *ngIf=\"value\">{{value}}</span>\r\n            <span *ngIf=\"!value\">---</span>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Email\" prop=\"email\">\r\n          <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n            <span *ngIf=\"row.email\" (click)=\"viewUser(row)\" title=\"Preview POS\">\r\n              {{row.email}}\r\n              <!-- <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> -->\r\n            </span>\r\n            <span *ngIf=\"!row.email\">---</span>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Contact\" prop=\"contact\">\r\n          <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n            <span *ngIf=\"value\">{{value}}</span>\r\n            <span *ngIf=\"!value\">---</span>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"Created\" prop=\"created\">\r\n          <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n            <span *ngIf=\"value\">{{value}}</span>\r\n            <span *ngIf=\"!value\">---</span>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <ngx-datatable-column name=\"status\" prop=\"is_active\">\r\n          <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\r\n            <span *ngIf=\"value == 1\" (click)=\"statusToggle(row)\">\r\n              <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>\r\n              <!-- <i class=\"icon\" title=\"click to deactivate\">\r\n                <img src=\"./../../../../../assets/icons/checkmark.png\" class=\"corporate_input__placeholder-icon call\" />\r\n              </i> -->\r\n            </span>\r\n            <span *ngIf=\"value != 1\" (click)=\"statusToggle(row)\">\r\n              <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n              <!-- <i class=\"icon\" title=\"click to activate\">\r\n                <img src=\"./../../../../../assets/icons/cross.png\" class=\"corporate_input__placeholder-icon call\" />\r\n              </i> -->\r\n            </span>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n        <!-- <ngx-datatable-column name=\"Org Status\" prop=\"hierarchy_id\">\r\n        </ngx-datatable-column> -->\r\n        <ngx-datatable-column name=\"Action\">\r\n          <ng-template let-value=\"value\" let-row=\"row\" ngx-datatable-cell-template>\r\n            <a class=\"nav-link edit\" title=\"View Details\" (click)=\"viewPOSPage(row)\">\r\n              <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n              <!-- <i class=\"icon\">\r\n                <img src=\"./../../../../assets/icons/edit.png\" class=\"corporate_input__placeholder-icon call\" />\r\n              </i> -->\r\n            </a>\r\n            &nbsp;\r\n            <a class=\"nav-link edit\" (click)=\"deleteUser(row)\" title=\"Delete User\">\r\n              <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n              <!-- <i class=\"icon\">\r\n                <img src=\"./../../../../assets/icons/delete-button.png\"\r\n                  class=\"corporate_input__placeholder-icon call\" />\r\n              </i> -->\r\n            </a>\r\n          </ng-template>\r\n        </ngx-datatable-column>\r\n      </ngx-datatable>  \r\n      </div>   \r\n    </div>\r\n  </div>\r\n</div>";
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


    __webpack_exports__["default"] = ".ui.suppliers {\n  width: 200px;\n}\n\n.ui.header {\n  padding-left: 24px !important;\n  padding-top: 24px !important;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 20px;\n  line-height: 23px;\n  color: #181B20;\n}\n\n.ui.header.head {\n  padding-left: 0px !important;\n  font-size: 18px;\n  font-weight: 400;\n}\n\n.ui.segment {\n  margin: 24px !important;\n  padding: 24px !important;\n}\n\n.button_align {\n  margin-top: -25px;\n}\n\n.header_align {\n  margin-top: -24px !important;\n}\n\n.ui.checkbox {\n  padding-bottom: 10px;\n  margin: 5px;\n}\n\n.ui.checkbox label:before {\n  border-radius: 20px;\n  width: 15px;\n  height: 15px;\n}\n\n.ui.checkbox label:after {\n  font-size: 10px;\n  top: 0px;\n  left: -1px;\n}\n\n.ui.checkbox input:checked ~ label {\n  color: #3867b1 !important;\n}\n\n.ui.checkbox input:checked ~ label:before {\n  border: 1px solid #3867b1;\n}\n\n.ui.checkbox input:checked ~ label:after {\n  color: #3867b1 !important;\n}\n\n.buttonStyle {\n  text-align: right;\n  margin-top: 30px;\n}\n\n.ui.button.primary.button_align {\n  margin-right: 12px;\n}\n\n@media (max-width: 991) {\n  .buttonStyle {\n    text-align: right;\n    margin-top: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Bvcy9hY3RpdmUtc3VwcGxpZXJzL0U6XFxCZWxhbFxccHJvamVjdHNcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxccG9zXFxhY3RpdmUtc3VwcGxpZXJzXFxhY3RpdmUtc3VwcGxpZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcG9zL2FjdGl2ZS1zdXBwbGllcnMvYWN0aXZlLXN1cHBsaWVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7QUNDSjs7QURDQTtFQUNJLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0VKOztBRERJO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNHUjs7QURBQTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7QUNHSjs7QURBQTtFQUNJLGlCQUFBO0FDR0o7O0FEQUE7RUFDSSw0QkFBQTtBQ0dKOztBREFBO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0FDR0o7O0FERFE7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDR1o7O0FERFE7RUFDSSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNHWjs7QURBSTtFQUNJLHlCQUFBO0FDRVI7O0FERFE7RUFDSSx5QkFBQTtBQ0daOztBRERRO0VBQ0kseUJBQUE7QUNHWjs7QURFQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSTtJQUNJLGlCQUFBO0lBQ0EsZ0JBQUE7RUNDTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3Bvcy9hY3RpdmUtc3VwcGxpZXJzL2FjdGl2ZS1zdXBwbGllcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWkuc3VwcGxpZXJze1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gfVxyXG4udWkuaGVhZGVye1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMjRweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgY29sb3I6ICMxODFCMjA7XHJcbiAgICAmLmhlYWQge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbn1cclxuLnVpLnNlZ21lbnR7XHJcbiAgICBtYXJnaW46MjRweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzoyNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idXR0b25fYWxpZ257XHJcbiAgICBtYXJnaW4tdG9wOi0yNXB4O1xyXG59XHJcblxyXG4uaGVhZGVyX2FsaWdue1xyXG4gICAgbWFyZ2luLXRvcDogLTI0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLmNoZWNrYm94IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBsYWJlbCB7XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgbGVmdDogLTFweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnB1dDpjaGVja2VkfmxhYmVsIHtcclxuICAgICAgICBjb2xvcjogIzM4NjdiMSAhaW1wb3J0YW50O1xyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzM4NjdiMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzg2N2IxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYnV0dG9uU3R5bGV7XHJcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDozMHB4O1xyXG59XHJcblxyXG4udWkuYnV0dG9uLnByaW1hcnkuYnV0dG9uX2FsaWduIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo5OTEpe1xyXG4gICAgLmJ1dHRvblN0eWxle1xyXG4gICAgICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDozMHB4O1xyXG4gICAgfVxyXG59IiwiLnVpLnN1cHBsaWVycyB7XG4gIHdpZHRoOiAyMDBweDtcbn1cblxuLnVpLmhlYWRlciB7XG4gIHBhZGRpbmctbGVmdDogMjRweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMjRweCAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGNvbG9yOiAjMTgxQjIwO1xufVxuLnVpLmhlYWRlci5oZWFkIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4udWkuc2VnbWVudCB7XG4gIG1hcmdpbjogMjRweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b25fYWxpZ24ge1xuICBtYXJnaW4tdG9wOiAtMjVweDtcbn1cblxuLmhlYWRlcl9hbGlnbiB7XG4gIG1hcmdpbi10b3A6IC0yNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi51aS5jaGVja2JveCB7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBtYXJnaW46IDVweDtcbn1cbi51aS5jaGVja2JveCBsYWJlbDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuLnVpLmNoZWNrYm94IGxhYmVsOmFmdGVyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICB0b3A6IDBweDtcbiAgbGVmdDogLTFweDtcbn1cbi51aS5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xuICBjb2xvcjogIzM4NjdiMSAhaW1wb3J0YW50O1xufVxuLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpiZWZvcmUge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzg2N2IxO1xufVxuLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbDphZnRlciB7XG4gIGNvbG9yOiAjMzg2N2IxICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b25TdHlsZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4udWkuYnV0dG9uLnByaW1hcnkuYnV0dG9uX2FsaWduIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxKSB7XG4gIC5idXR0b25TdHlsZSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgfVxufSJdfQ== */";
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

    var ActiveSuppliersComponent =
    /*#__PURE__*/
    function () {
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
            active_suppliers_activities: this.fb.array([]),
            tab: ['suppliers']
          });
        }
      }, {
        key: "getOrganisationInfo",
        value: function getOrganisationInfo(organisation_ID) {
          var _this = this;

          this.posService.getPosDetails(organisation_ID).subscribe(function (result) {
            if (result.status) {
              _this.posInfo = result.result;

              _this.suppiersForm.patchValue({
                organisation_id: _this.posInfo.organisation_id
              });

              var flights = JSON.parse(result.result.active_suppliers).active_suppliers_flights;
              flights.forEach(function (x) {
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
            var suppliers = result.result;
            _this2.supplierFlights = suppliers.filter(function (e) {
              return e.is_flight;
            }).map(function (e) {
              return {
                active_name: e.name
              };
            });
            _this2.supplierHotel = suppliers.filter(function (e) {
              return e.is_hotel;
            }).map(function (e) {
              return {
                active_name: e.name
              };
            });
            _this2.supplierCar = suppliers.filter(function (e) {
              return e.is_car;
            }).map(function (e) {
              return {
                active_name: e.name
              };
            });
            _this2.supplierActivity = suppliers.filter(function (e) {
              return e.is_activities;
            }).map(function (e) {
              return {
                active_name: e.name
              };
            });
            _this2.supplierInsurance = suppliers.filter(function (e) {
              return e.is_insurance;
            }).map(function (e) {
              return {
                active_name: e.name
              };
            });
            _this2.supplierInsurance = suppliers.filter(function (e) {
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
            active_suppliers: this.suppiersForm.value
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/active-suppliers/active-suppliers.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./active-suppliers.component.scss */
      "./src/app/layout/pos/active-suppliers/active-suppliers.component.scss")).default]
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


    __webpack_exports__["default"] = ".ui.form.pos_basic_form {\n  background: #fff;\n  box-shadow: 0px 2px 6px rgba(6, 40, 98, 0.05);\n  border-radius: 4.96141px;\n  padding: 24px;\n  padding-bottom: 2px !important;\n}\n\n.ui.header {\n  font-size: 18px;\n  font-weight: 400;\n}\n\n.ui.segment {\n  margin: 24px;\n  padding: 0px !important;\n}\n\n.button_align {\n  margin-top: 27px;\n  margin-right: 12px;\n}\n\n@media (max-width: 1024px) {\n  .ui.form .form-inner .fields {\n    display: block;\n  }\n  .ui.form .form-inner .fields .branch {\n    display: inline-block;\n    width: 16.6% !important;\n  }\n  .ui.form .form-inner .fields .buttondiv {\n    display: block;\n    width: 100% !important;\n    text-align: right;\n  }\n  .ui.form .fields.spacing .button1 {\n    display: -webkit-inline-box;\n    display: inline-flex;\n    margin-right: 12px;\n  }\n}\n\n@media (max-width: 991px) {\n  .ui.form .form-inner .fields {\n    display: block;\n  }\n  .ui.form .form-inner .fields .branch {\n    display: inline-block;\n    width: 16.6% !important;\n  }\n  .ui.form .form-inner .fields .buttondiv {\n    display: block;\n    width: 100% !important;\n    text-align: right;\n    margin-top: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Bvcy9haXJsaW5lLXJiZC9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHBvc1xcYWlybGluZS1yYmRcXGFpcmxpbmUtcmJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcG9zL2FpcmxpbmUtcmJkL2FpcmxpbmUtcmJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQUE7RUFDQSw2Q0FBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDQUo7O0FESUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtBQ0RKOztBREtBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ0ZKOztBREtBO0VBR1k7SUFDSSxjQUFBO0VDSmQ7RURLYztJQUNJLHFCQUFBO0lBQ0EsdUJBQUE7RUNIbEI7RURLYztJQUNJLGNBQUE7SUFDQSxzQkFBQTtJQUNBLGlCQUFBO0VDSGxCO0VEU1U7SUFDQSwyQkFBQTtJQUFBLG9CQUFBO0lBQ0Esa0JBQUE7RUNQVjtBQUNGOztBRFlBO0VBR1k7SUFDSSxjQUFBO0VDWmQ7RURhYztJQUNJLHFCQUFBO0lBQ0EsdUJBQUE7RUNYbEI7RURhYztJQUNJLGNBQUE7SUFDQSxzQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7RUNYbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wb3MvYWlybGluZS1yYmQvYWlybGluZS1yYmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWkuZm9ybS5wb3NfYmFzaWNfZm9ybSB7XHJcbiAgICAvLyBwYWRkaW5nOiAxN3B4IDBweCAyNXB4IDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDYsIDQwLCA5OCwgMC4wNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0Ljk2MTQxcHg7XHJcbiAgICBwYWRkaW5nOjI0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4ICFpbXBvcnRhbnRcclxuICAgIC8vIG1heC13aWR0aDogMTIwMHB4O1xyXG59XHJcblxyXG4udWkuaGVhZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi51aS5zZWdtZW50e1xyXG4gICAgbWFyZ2luOjI0cHg7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5idXR0b25fYWxpZ257XHJcbiAgICBtYXJnaW4tdG9wOiAyN3B4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjEwMjRweCl7XHJcbiAgICAudWkuZm9ybXtcclxuICAgICAgICAuZm9ybS1pbm5lcntcclxuICAgICAgICAgICAgLmZpZWxkc3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgLmJyYW5jaHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2LjYlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJ1dHRvbmRpdntcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5maWVsZHMuc3BhY2luZ3tcclxuICAgICAgICAgICAgLmJ1dHRvbjF7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo5OTFweCl7XHJcbiAgICAudWkuZm9ybXtcclxuICAgICAgICAuZm9ybS1pbm5lcntcclxuICAgICAgICAgICAgLmZpZWxkc3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgLmJyYW5jaHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2LjYlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmJ1dHRvbmRpdntcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDozMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLnVpLmZvcm0ucG9zX2Jhc2ljX2Zvcm0ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDYsIDQwLCA5OCwgMC4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IDQuOTYxNDFweDtcbiAgcGFkZGluZzogMjRweDtcbiAgcGFkZGluZy1ib3R0b206IDJweCAhaW1wb3J0YW50O1xufVxuXG4udWkuaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4udWkuc2VnbWVudCB7XG4gIG1hcmdpbjogMjRweDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5idXR0b25fYWxpZ24ge1xuICBtYXJnaW4tdG9wOiAyN3B4O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnVpLmZvcm0gLmZvcm0taW5uZXIgLmZpZWxkcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnVpLmZvcm0gLmZvcm0taW5uZXIgLmZpZWxkcyAuYnJhbmNoIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDE2LjYlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnVpLmZvcm0gLmZvcm0taW5uZXIgLmZpZWxkcyAuYnV0dG9uZGl2IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG4gIC51aS5mb3JtIC5maWVsZHMuc3BhY2luZyAuYnV0dG9uMSB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnVpLmZvcm0gLmZvcm0taW5uZXIgLmZpZWxkcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnVpLmZvcm0gLmZvcm0taW5uZXIgLmZpZWxkcyAuYnJhbmNoIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDE2LjYlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnVpLmZvcm0gLmZvcm0taW5uZXIgLmZpZWxkcyAuYnV0dG9uZGl2IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbn0iXX0= */";
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

    var AirlineRbdComponent =
    /*#__PURE__*/
    function () {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/airline-rbd/airline-rbd.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./airline-rbd.component.scss */
      "./src/app/layout/pos/airline-rbd/airline-rbd.component.scss")).default]
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


    __webpack_exports__["default"] = ".outer {\n  margin: 0px 20px 0px 15px;\n}\n\n.amexCard {\n  background-color: gainsboro !important;\n}\n\n.farePreferencestable {\n  border-top: 0px !important;\n}\n\n.outer__add-pos__title {\n  margin: 0;\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #E0E0E0;\n}\n\n.tourCode_btn,\n.addTogg_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n}\n\n.tourCode_text,\n.addTogg_text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.corporate_input__placeholder-icon {\n  position: relative;\n  width: 18px;\n  bottom: 28px;\n  left: 9px;\n}\n\n.ui.form.pos_basic_form {\n  padding: 24px;\n  background: #fff;\n  box-shadow: 0px 2px 6px rgba(6, 40, 98, 0.05);\n  border-radius: 4.96141px;\n  margin: 24px;\n}\n\ndiv.upload {\n  box-sizing: border-box;\n  height: 15px;\n  width: 123px;\n  border-radius: 3px;\n  background-color: #FFF;\n  border: 0.5px solid #808080;\n  box-shadow: 0 0.25px 0.1px 0 rgba(0, 0, 0, 0.5);\n}\n\ndiv.upload input {\n  display: block !important;\n  width: 123px !important;\n  height: 15px !important;\n  opacity: 0 !important;\n  overflow: hidden !important;\n}\n\n.file_choose {\n  position: relative;\n  left: 27px;\n  bottom: 6px;\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 9px;\n  line-height: 10px;\n}\n\n.uploadinImg_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n}\n\n.uploadinImg_btn__text,\n.save-next_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 12px;\n}\n\n.file_table__img {\n  border: none;\n  background-color: #dfeafb5e;\n}\n\n.save-next_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.field input::-webkit-input-placeholder {\n  font-size: 14px;\n}\n\n.field input::-moz-placeholder {\n  font-size: 14px;\n}\n\n.field input::-ms-input-placeholder {\n  font-size: 14px;\n}\n\n.field input::placeholder {\n  font-size: 14px;\n}\n\n.ui.pointing.secondary.menu {\n  border: none;\n}\n\n.item.stepper__progress {\n  width: 167px;\n}\n\n.tab.segment.stepper__segment-outline {\n  border: none;\n  box-shadow: none;\n}\n\n.office-info_icon {\n  position: relative;\n  top: 20px;\n  right: 85px;\n}\n\n.pos_access-rights {\n  color: #828282;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 11px;\n  line-height: 12px;\n}\n\n.cancel_btn {\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.cancel_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.issue_date {\n  text-indent: 17px;\n}\n\n.wide.field.sale_check {\n  margin-top: 10px;\n}\n\n.assign_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.assign_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n}\n\n.circleIcon {\n  height: 20px;\n  width: 20px;\n  background-color: #0D801C;\n  border-radius: 50%;\n  display: inline-block;\n  margin-top: 6px;\n}\n\n.plusIcon {\n  color: #FFF;\n  font-size: 17px;\n  font-weight: 100;\n  line-height: 28px;\n  text-align: center;\n  margin-left: 0px;\n  margin-top: -3px;\n}\n\n::ng-deep.mat-step-icon-content {\n  height: 19px;\n  width: 19px;\n  color: #C8C8C8;\n  background-color: #C8C8C8;\n  border-radius: 50%;\n}\n\n::ng-deep.mat-step-header:hover,\n::ng-deep.cdk-keyboard-focused,\n::ng-deep.cdk-program-focused {\n  background-color: transparent !important;\n}\n\n::ng-deep.mat-step-icon {\n  border: 1px solid rgba(0, 0, 0, 0.24);\n  background: transparent !important;\n}\n\n::ng-deep.mat-step-icon-state-number.mat-step-icon.mat-step-icon-selected {\n  border: 2px solid #3867B1;\n  background: transparent;\n}\n\n::ng-deep.mat-step-icon-state-number.mat-step-icon.mat-step-icon-selected .ng-star-inserted {\n  color: #3867B1;\n}\n\n::ng-deep.mat-step-icon-content {\n  background-color: transparent;\n}\n\n::ng-deep.mat-horizontal-stepper-header-container {\n  background: #ffff;\n  width: 100%;\n  padding: 0px 30%;\n  margin-top: 32px;\n}\n\n::ng-deep.mat-icon {\n  display: none !important;\n}\n\n::ng-deep.mat-step-icon-selected,\n::ng-deep.mat-step-icon-state-done,\n::ng-deep.mat-step-icon-state-edit {\n  background-color: transparent !important;\n}\n\n::ng-deep.mat-step-label {\n  color: #3867b1;\n}\n\n::ng-deep.mat-horizontal-content-container {\n  margin-top: 32px;\n}\n\n.pos_btn-panel {\n  padding-bottom: 20px;\n  margin-bottom: 40px;\n}\n\n.pos_btn-panel .secondary {\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.pos_btn-panel .primary {\n  float: right;\n  width: auto !important;\n  border-radius: 3px !important;\n  background-color: #3867B1;\n  min-width: auto;\n}\n\n.pos_btn-panel .primary:hover {\n  background-color: #cacbcd !important;\n  box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34, 36, 38, 0.15) inset !important;\n  color: rgba(0, 0, 0, 0.8) !important;\n}\n\n.segment p {\n  padding-bottom: 10px;\n}\n\n.bg-grey {\n  background: #d1dade;\n}\n\n.example-chip-list {\n  width: 100%;\n  border: 0px solid grey !important;\n}\n\n.mat-chip-input {\n  border: 0px !important;\n  background: transparent !important;\n}\n\n.inputfile {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.transparent,\n.transparent:hover {\n  background: none;\n}\n\n.center {\n  text-align: center;\n}\n\n.margin-right-20 {\n  margin-right: 20px;\n}\n\n.margin-bottom-15 {\n  margin-bottom: 15px;\n}\n\n.dim-footer {\n  color: #c3c3c3;\n  display: block;\n  font-size: 12px;\n  margin-top: 10px;\n  cursor: inherit;\n  position: relative;\n  top: -20px;\n  left: 24px;\n}\n\n.mat-chip {\n  margin: 0px 4px !important;\n}\n\n.branding-pic {\n  -webkit-box-align: center;\n          align-items: center;\n  height: 150px;\n}\n\n.mat-standard-chip .mat-chip-remove.mat-icon {\n  width: 13px !important;\n  height: 13px !important;\n  font-size: 13px !important;\n}\n\n.custom-columns .field {\n  margin-bottom: 15px !important;\n}\n\n.uploaded-document {\n  display: block;\n}\n\n.validations {\n  color: red;\n  font-size: x-small;\n}\n\n.unlimited {\n  float: right;\n  font-size: x-small;\n}\n\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n\n.ui.form .three.wide.field {\n  margin-bottom: 16px;\n}\n\n.inline-label {\n  display: inline !important;\n}\n\n.ui.header {\n  margin-bottom: 24px;\n}\n\n.ui.header.note-head {\n  margin-bottom: 12px;\n}\n\n.ui.header.basic-info-header {\n  margin-top: 20px;\n}\n\n.pos_basic_form .tax-section {\n  padding: 0px;\n}\n\n.pos_basic_form .tax_block {\n  border: 1px solid #D4D6DC;\n  border-radius: 5.12155px;\n  min-height: 390px;\n}\n\n.pos_basic_form .tax_block p {\n  padding-bottom: 24px;\n}\n\n::ng-deep.mat-form-field-underline {\n  display: none;\n}\n\n::ng-deep.mat-chip-list-wrapper {\n  margin: 0px !important;\n  position: relative !important;\n  top: -16px !important;\n}\n\n.payment-header {\n  margin-top: 12px !important;\n}\n\n.ui.checkbox {\n  padding-bottom: 10px;\n}\n\n.ui.checkbox label:before {\n  border-radius: 20px;\n}\n\n.ui.checkbox label:after {\n  font-size: 12px;\n  top: 1px;\n}\n\n.ui.checkbox input:checked ~ label:before {\n  border: 1px solid #3867b1;\n}\n\n.ui.checkbox input:checked ~ label:after {\n  color: #3867b1;\n}\n\n.ui.segment.bg-grey {\n  margin-top: 12px;\n  background: transparent;\n  border: 1px solid #D4D6DC;\n}\n\n.ui.segment.bg-grey .ui.checkbox {\n  padding-bottom: 0px;\n}\n\n.cardDetails {\n  margin-top: 15px;\n}\n\n.ui.fitted.divider {\n  margin: 30px 0px;\n}\n\n.ui.primary.button.brand_buttons {\n  background: rgba(67, 122, 218, 0.05) !important;\n  border: 1px dashed #437ADA !important;\n  color: #437ADA;\n  box-shadow: none !important;\n}\n\n.ui.primary.button.brand_buttons i.icon {\n  color: #437ADA;\n}\n\n.button.align {\n  margin-bottom: 25px;\n  margin-right: 25px;\n}\n\n.ui.primary.button.add_btn {\n  border: 1px solid #437ADA;\n  box-sizing: border-box;\n  border-radius: 7.24448px !important;\n  background: transparent !important;\n  color: #437ADA !important;\n  box-shadow: none !important;\n  margin-top: 22px;\n  width: auto !important;\n  min-width: auto;\n}\n\n.ui.primary.button.add_btn.reset {\n  border: 1px solid #4F4F4F;\n  color: #4F4F4F !important;\n}\n\n.notes-section textarea {\n  min-height: 60px;\n  height: auto !important;\n}\n\n.ui.transparent.margin-right-20 {\n  display: block;\n  margin-bottom: 10px;\n}\n\n.ui.grid.card-section {\n  width: 100%;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n  margin-left: 8px;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 160px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 10px;\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: 0px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.pos_btn-panel.spacing button {\n  position: absolute;\n  right: 0px;\n  bottom: 0px;\n}\n\n@media (max-width: 1200px) and (min-width: 1024px) {\n  .ui.grid .gridstyle {\n    width: 100% !important;\n  }\n}\n\n@media (max-width: 1024px) and (min-width: 768px) {\n  .ui.grid .gridstyle {\n    width: 100% !important;\n  }\n}\n\n@media (max-width: 1009px) and (min-width: 808px) {\n  .ui.form .four.wide.field {\n    width: 33% !important;\n  }\n}\n\n@media (max-width: 807px) and (min-width: 768px) {\n  .ui.form .four.wide.field {\n    width: 50% !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .ui.grid .gridstyle {\n    width: 100% !important;\n  }\n  .ui.grid .gridstyle1 {\n    width: 100% !important;\n  }\n  .ui.grid .eight.wide.column .gridstyle2 {\n    width: 100% !important;\n  }\n  .ui.grid .gridstyle3 {\n    width: 100% !important;\n  }\n  .ui.grid .gridstyle4 {\n    width: 100% !important;\n  }\n}\n\n@media (max-width: 440px) and (min-width: 320px) {\n  .ui.form .nine.wide.field {\n    display: block;\n    width: 100% !important;\n  }\n  .ui.form .seven.wide.field {\n    display: block;\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Bvcy9iYXNpYy1pbmZvL0U6XFxCZWxhbFxccHJvamVjdHNcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxccG9zXFxiYXNpYy1pbmZvXFxiYXNpYy1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcG9zL2Jhc2ljLWluZm8vYmFzaWMtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQ0FBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQ0FBQTtFQUNBLHdDQUFBO0FDQ0o7O0FERUE7RUFDSSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURFQTtFQUNJLDRDQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTs7RUFFSSxrQkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7O0VBRUksV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNDSjs7QURTQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDZDQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FDTko7O0FEVUE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0NBQUE7QUNQSjs7QURVQTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0Es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VjtBQUNGOztBRDZEQTtFQUVRO0lBQ0ksY0FBQTtJQUNBLHNCQUFBO0VDNURWO0VEOERNO0lBQ0ksY0FBQTtJQUNBLHNCQUFBO0VDNURWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcG9zL2Jhc2ljLWluZm8vYmFzaWMtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlciB7XHJcbiAgICBtYXJnaW46IDBweCAyMHB4IDBweCAxNXB4O1xyXG59XHJcblxyXG4uYW1leENhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ2FpbnNib3JvICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mYXJlUHJlZmVyZW5jZXN0YWJsZSB7XHJcbiAgICBib3JkZXItdG9wOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm91dGVyX19hZGQtcG9zX190aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxufVxyXG5cclxuLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLnVpLnRvcC5hdHRhY2hlZC5tZW51Pi5pdGVtIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yODU3MTQyOXJlbSAwIDAgMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51aS5ib3R0b20uYXR0YWNoZWQuYWN0aXZlLnRhYi5zZWdtZW50IHtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE3cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTdweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxN3B4O1xyXG59XHJcblxyXG4udGFiLnNlZ21lbnQge1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgI0UwRTBFMDtcclxufVxyXG5cclxuLnRvdXJDb2RlX2J0bixcclxuLmFkZFRvZ2dfYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XHJcbn1cclxuXHJcbi50b3VyQ29kZV90ZXh0LFxyXG4uYWRkVG9nZ190ZXh0IHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgYm90dG9tOiAyOHB4O1xyXG4gICAgbGVmdDogOXB4O1xyXG59XHJcblxyXG4vLyAub3V0ZXItZm9ybSxcclxuLy8gLm91dGVyX2NvcnBGb3JtIHtcclxuLy8gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICM4MDgwODA7XHJcbi8vICAgICBtYXJnaW46IDQ1cHggMzJweCAxMTFweCAyNXB4O1xyXG4vLyB9XHJcbi51aS5mb3JtLnBvc19iYXNpY19mb3JtIHtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSg2LCA0MCwgOTgsIDAuMDUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNC45NjE0MXB4O1xyXG4gICAgbWFyZ2luOiAyNHB4O1xyXG4gICAgLy8gbWF4LXdpZHRoOiAxMjAwcHg7XHJcbn1cclxuXHJcbmRpdi51cGxvYWQge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHdpZHRoOiAxMjNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICM4MDgwODA7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuMjVweCAwLjFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuZGl2LnVwbG9hZCBpbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEyM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpbGVfY2hvb3NlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDI3cHg7XHJcbiAgICBib3R0b206IDZweDtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxufVxyXG5cclxuLnVwbG9hZGluSW1nX2J0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xyXG59XHJcblxyXG4udXBsb2FkaW5JbWdfYnRuX190ZXh0LFxyXG4uc2F2ZS1uZXh0X2J0bl9fdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTJweDtcclxufVxyXG5cclxuLmZpbGVfdGFibGVfX2ltZyB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlYWZiNWU7XHJcbn1cclxuXHJcbi5zYXZlLW5leHRfYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4udWkucG9pbnRpbmcuc2Vjb25kYXJ5Lm1lbnUge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG4uaXRlbS5zdGVwcGVyX19wcm9ncmVzcyB7XHJcbiAgICB3aWR0aDogMTY3cHg7XHJcbn1cclxuXHJcbi50YWIuc2VnbWVudC5zdGVwcGVyX19zZWdtZW50LW91dGxpbmUge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLm9mZmljZS1pbmZvX2ljb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAyMHB4O1xyXG4gICAgcmlnaHQ6IDg1cHg7XHJcbn1cclxuXHJcbi5wb3NfYWNjZXNzLXJpZ2h0cyB7XHJcbiAgICBjb2xvcjogIzgyODI4MjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4uY2FuY2VsX2J0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0RjRGO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uY2FuY2VsX2J0bl9fdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmlzc3VlX2RhdGUge1xyXG4gICAgdGV4dC1pbmRlbnQ6IDE3cHg7XHJcbn1cclxuXHJcbi53aWRlLmZpZWxkLnNhbGVfY2hlY2sge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmFzc2lnbl9idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmFzc2lnbl9idG5fX3RleHQge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5jaXJjbGVJY29uIHtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBEODAxQztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDZweDtcclxufVxyXG5cclxuLnBsdXNJY29uIHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IC0zcHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgd2lkdGg6IDE5cHg7XHJcbiAgICBjb2xvcjogI0M4QzhDODtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNDOEM4Qzg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtc3RlcC1oZWFkZXI6aG92ZXIsXHJcbiA6Om5nLWRlZXAuY2RrLWtleWJvYXJkLWZvY3VzZWQsXHJcbiA6Om5nLWRlZXAuY2RrLXByb2dyYW0tZm9jdXNlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbiB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC4yNCk7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1udW1iZXIubWF0LXN0ZXAtaWNvbi5tYXQtc3RlcC1pY29uLXNlbGVjdGVkIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzODY3QjE7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIC5uZy1zdGFyLWluc2VydGVkIHtcclxuICAgICAgICBjb2xvcjogIzM4NjdCMTtcclxuICAgIH1cclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24tY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLy8gOjpuZy1kZWVwLm5nLXN0YXItaW5zZXJ0ZWQge1xyXG4vLyAgICAgcGFkZGluZzogMCA2cHg7XHJcbi8vIH1cclxuXHJcbjo6bmctZGVlcC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlci1jb250YWluZXIge1xyXG4gICAgLy8gd2lkdGg6IDQwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwcHggMzAlO1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1pY29uIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsXHJcbiA6Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1kb25lLFxyXG4gOjpuZy1kZWVwLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LXN0ZXAtbGFiZWwge1xyXG4gICAgY29sb3I6ICMzODY3YjE7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtaG9yaXpvbnRhbC1jb250ZW50LWNvbnRhaW5lciB7XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxufVxyXG5cclxuLnBvc19idG4tcGFuZWwge1xyXG4gICAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8gcmlnaHQ6IDY4cHg7XHJcbiAgICAvLyBib3R0b206IDk3cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAuc2Vjb25kYXJ5IHtcclxuICAgICAgICAvLyB3aWR0aDogMTA0Ljg3cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0RjRGNEY7XHJcbiAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgfVxyXG4gICAgLnByaW1hcnkge1xyXG4gICAgICAgIC8vIHdpZHRoOiAxMjQuODdweDtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xyXG4gICAgICAgIC8vIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1pbi13aWR0aDogYXV0bztcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NhY2JjZCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggdHJhbnNwYXJlbnQgaW5zZXQsIDAgMCAwIDAgcmdiYSgzNCwgMzYsIDM4LCAuMTUpIGluc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC44KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNlZ21lbnQgcCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmJnLWdyZXkge1xyXG4gICAgYmFja2dyb3VuZDogI2QxZGFkZTtcclxufVxyXG5cclxuLmV4YW1wbGUtY2hpcC1saXN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgZ3JleSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWNoaXAtaW5wdXQge1xyXG4gICAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnB1dGZpbGUge1xyXG4gICAgd2lkdGg6IDAuMXB4O1xyXG4gICAgaGVpZ2h0OiAwLjFweDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi50cmFuc3BhcmVudCxcclxuLnRyYW5zcGFyZW50OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWFyZ2luLXJpZ2h0LTIwIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLm1hcmdpbi1ib3R0b20tMTUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmRpbS1mb290ZXIge1xyXG4gICAgY29sb3I6ICNjM2MzYzM7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBjdXJzb3I6IGluaGVyaXQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0yMHB4O1xyXG4gICAgbGVmdDogMjRweDtcclxufVxyXG5cclxuLm1hdC1jaGlwIHtcclxuICAgIG1hcmdpbjogMHB4IDRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnJhbmRpbmctcGljIHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcblxyXG4ubWF0LXN0YW5kYXJkLWNoaXAgLm1hdC1jaGlwLXJlbW92ZS5tYXQtaWNvbiB7XHJcbiAgICB3aWR0aDogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmN1c3RvbS1jb2x1bW5zIC5maWVsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51cGxvYWRlZC1kb2N1bWVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnZhbGlkYXRpb25zIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbn1cclxuXHJcbi51bmxpbWl0ZWQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG59XHJcblxyXG4udWkuZm9ybSAuZmllbGQ+bGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgY29sb3I6ICMxODFCMjA7XHJcbiAgICBtYXJnaW46IDBweCAwcHggOHB4O1xyXG59XHJcblxyXG4udWkuZm9ybSAudGhyZWUud2lkZS5maWVsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4uaW5saW5lLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udWkuaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbiAgICAmLm5vdGUtaGVhZCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIH1cclxuICAgICYuYmFzaWMtaW5mby1oZWFkZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wb3NfYmFzaWNfZm9ybSB7XHJcbiAgICAudGF4LXNlY3Rpb24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuICAgIC50YXhfYmxvY2sge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNENEQ2REM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNS4xMjE1NXB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM5MHB4O1xyXG4gICAgICAgIC8vIG1heC1oZWlnaHQ6IDM5MHB4O1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1jaGlwLWxpc3Qtd3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IC0xNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYXltZW50LWhlYWRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51aS5jaGVja2JveCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHRvcDogMXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlucHV0OmNoZWNrZWR+bGFiZWwge1xyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzM4NjdiMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzg2N2IxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnVpLnNlZ21lbnQuYmctZ3JleSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDRENkRDO1xyXG4gICAgLnVpLmNoZWNrYm94IHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZERldGFpbHMge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLy8gLnNwYWNpbmcge1xyXG4vLyAgICAgcGFkZGluZy1sZWZ0OiAyMnB4O1xyXG4vLyAgICAgcGFkZGluZy1yaWdodDogMjJweDtcclxuLy8gfVxyXG5cclxuLnVpLmZpdHRlZC5kaXZpZGVyIHtcclxuICAgIG1hcmdpbjogMzBweCAwcHg7XHJcbn1cclxuXHJcbi51aS5wcmltYXJ5LmJ1dHRvbi5icmFuZF9idXR0b25zIHtcclxuICAgIC8vIGhlaWdodDogODJweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNjcsIDEyMiwgMjE4LCAwLjA1KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICM0MzdBREEgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNDM3QURBO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDE4cHg7XHJcbiAgICAvLyBtaW4td2lkdGg6IGF1dG87XHJcbiAgICBpLmljb24ge1xyXG4gICAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIC8vIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM0MzdBREE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idXR0b24uYWxpZ257XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4udWkucHJpbWFyeS5idXR0b24uYWRkX2J0biB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDM3QURBO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDcuMjQ0NDhweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNDM3QURBICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogYXV0bztcclxufVxyXG5cclxuLnVpLnByaW1hcnkuYnV0dG9uLmFkZF9idG4ucmVzZXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzRGNEY0RjtcclxuICAgIGNvbG9yOiAjNEY0RjRGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ub3Rlcy1zZWN0aW9uIHtcclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4udWkudHJhbnNwYXJlbnQubWFyZ2luLXJpZ2h0LTIwIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnVpLmdyaWQuY2FyZC1zZWN0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udG9vbHRpcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvLyBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3R0b206IDEwMCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLnBvc19idG4tcGFuZWwuc3BhY2luZyB7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAgICAgICAgIC51aS5ncmlke1xyXG4gICAgICAgICAgICAgIC5ncmlkc3R5bGV7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDoxMDI0cHgpIGFuZCAobWluLXdpZHRoOjc2OHB4KSB7XHJcbiAgICAudWkuZ3JpZHtcclxuICAgICAgICAuZ3JpZHN0eWxle1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDoxMDA5cHgpIGFuZCAobWluLXdpZHRoOjgwOHB4KSB7XHJcbiAgICAudWkuZm9ybSB7XHJcbiAgICAgICAgLmZvdXIud2lkZS5maWVsZCB7XHJcbiAgICAgICAgd2lkdGg6IDMzJSFpbXBvcnRhbnQ7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6ODA3cHgpIGFuZCAobWluLXdpZHRoOjc2OHB4KSB7XHJcbiAgICAudWkuZm9ybSB7XHJcbiAgICAgICAgLmZvdXIud2lkZS5maWVsZCB7XHJcbiAgICAgICAgd2lkdGg6IDUwJSFpbXBvcnRhbnQ7XHJcbiAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KSB7XHJcbiAgICAudWkuZ3JpZHtcclxuICAgICAgICAuZ3JpZHN0eWxle1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZ3JpZHN0eWxlMXtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmVpZ2h0LndpZGUuY29sdW1ue1xyXG4gICAgICAgICAgIC5ncmlkc3R5bGUye1xyXG4gICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmdyaWRzdHlsZTN7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ncmlkc3R5bGU0e1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NDQwcHgpIGFuZCAobWluLXdpZHRoOjMyMHB4KSB7XHJcbiAgICAudWkuZm9ybXtcclxuICAgICAgICAubmluZS53aWRlLmZpZWxke1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZXZlbi53aWRlLmZpZWxke1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLy8gQG1lZGlhKG1heC13aWR0aDozNzVweCkgYW5kIChtaW4td2lkdGg6MzIwcHgpIHtcclxuLy8gICAgIC51aS5mb3JtIHtcclxuLy8gICAgICAgICAuZm91ci53aWRlLmZpZWxkIHtcclxuLy8gICAgICAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbi8vICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcblxyXG4iLCIub3V0ZXIge1xuICBtYXJnaW46IDBweCAyMHB4IDBweCAxNXB4O1xufVxuXG4uYW1leENhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm8gIWltcG9ydGFudDtcbn1cblxuLmZhcmVQcmVmZXJlbmNlc3RhYmxlIHtcbiAgYm9yZGVyLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5vdXRlcl9fYWRkLXBvc19fdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi51aS50b3AuYXR0YWNoZWQubWVudSA+IC5pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yODU3MTQyOXJlbSAwIDAgMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLnVpLmJvdHRvbS5hdHRhY2hlZC5hY3RpdmUudGFiLnNlZ21lbnQge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XG59XG5cbi50YWIuc2VnbWVudCB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG5ociB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNFMEUwRTA7XG59XG5cbi50b3VyQ29kZV9idG4sXG4uYWRkVG9nZ19idG4ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XG59XG5cbi50b3VyQ29kZV90ZXh0LFxuLmFkZFRvZ2dfdGV4dCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMThweDtcbiAgYm90dG9tOiAyOHB4O1xuICBsZWZ0OiA5cHg7XG59XG5cbi51aS5mb3JtLnBvc19iYXNpY19mb3JtIHtcbiAgcGFkZGluZzogMjRweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSg2LCA0MCwgOTgsIDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiA0Ljk2MTQxcHg7XG4gIG1hcmdpbjogMjRweDtcbn1cblxuZGl2LnVwbG9hZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDEyM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJvcmRlcjogMC41cHggc29saWQgIzgwODA4MDtcbiAgYm94LXNoYWRvdzogMCAwLjI1cHggMC4xcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbmRpdi51cGxvYWQgaW5wdXQge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB3aWR0aDogMTIzcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4uZmlsZV9jaG9vc2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDI3cHg7XG4gIGJvdHRvbTogNnB4O1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBsaW5lLWhlaWdodDogMTBweDtcbn1cblxuLnVwbG9hZGluSW1nX2J0biB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbn1cblxuLnVwbG9hZGluSW1nX2J0bl9fdGV4dCxcbi5zYXZlLW5leHRfYnRuX190ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xufVxuXG4uZmlsZV90YWJsZV9faW1nIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlYWZiNWU7XG59XG5cbi5zYXZlLW5leHRfYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi51aS5wb2ludGluZy5zZWNvbmRhcnkubWVudSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLml0ZW0uc3RlcHBlcl9fcHJvZ3Jlc3Mge1xuICB3aWR0aDogMTY3cHg7XG59XG5cbi50YWIuc2VnbWVudC5zdGVwcGVyX19zZWdtZW50LW91dGxpbmUge1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5vZmZpY2UtaW5mb19pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiA4NXB4O1xufVxuXG4ucG9zX2FjY2Vzcy1yaWdodHMge1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG5cbi5jYW5jZWxfYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0RjRGO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5jYW5jZWxfYnRuX190ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pc3N1ZV9kYXRlIHtcbiAgdGV4dC1pbmRlbnQ6IDE3cHg7XG59XG5cbi53aWRlLmZpZWxkLnNhbGVfY2hlY2sge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYXNzaWduX2J0biB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uYXNzaWduX2J0bl9fdGV4dCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbn1cblxuLmNpcmNsZUljb24ge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQ4MDFDO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4ucGx1c0ljb24ge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tdG9wOiAtM3B4O1xufVxuXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1jb250ZW50IHtcbiAgaGVpZ2h0OiAxOXB4O1xuICB3aWR0aDogMTlweDtcbiAgY29sb3I6ICNDOEM4Qzg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDOEM4Qzg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuOjpuZy1kZWVwLm1hdC1zdGVwLWhlYWRlcjpob3Zlcixcbjo6bmctZGVlcC5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbjo6bmctZGVlcC5jZGstcHJvZ3JhbS1mb2N1c2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24ge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1udW1iZXIubWF0LXN0ZXAtaWNvbi5tYXQtc3RlcC1pY29uLXNlbGVjdGVkIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzM4NjdCMTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1udW1iZXIubWF0LXN0ZXAtaWNvbi5tYXQtc3RlcC1pY29uLXNlbGVjdGVkIC5uZy1zdGFyLWluc2VydGVkIHtcbiAgY29sb3I6ICMzODY3QjE7XG59XG5cbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4IDMwJTtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cblxuOjpuZy1kZWVwLm1hdC1pY29uIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1zdGVwLWxhYmVsIHtcbiAgY29sb3I6ICMzODY3YjE7XG59XG5cbjo6bmctZGVlcC5tYXQtaG9yaXpvbnRhbC1jb250ZW50LWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5wb3NfYnRuLXBhbmVsIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4ucG9zX2J0bi1wYW5lbCAuc2Vjb25kYXJ5IHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0RjRGO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4ucG9zX2J0bi1wYW5lbCAucHJpbWFyeSB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XG4gIG1pbi13aWR0aDogYXV0bztcbn1cbi5wb3NfYnRuLXBhbmVsIC5wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhY2JjZCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggdHJhbnNwYXJlbnQgaW5zZXQsIDAgMCAwIDAgcmdiYSgzNCwgMzYsIDM4LCAwLjE1KSBpbnNldCAhaW1wb3J0YW50O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5zZWdtZW50IHAge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmJnLWdyZXkge1xuICBiYWNrZ3JvdW5kOiAjZDFkYWRlO1xufVxuXG4uZXhhbXBsZS1jaGlwLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwcHggc29saWQgZ3JleSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWNoaXAtaW5wdXQge1xuICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXRmaWxlIHtcbiAgd2lkdGg6IDAuMXB4O1xuICBoZWlnaHQ6IDAuMXB4O1xuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4udHJhbnNwYXJlbnQsXG4udHJhbnNwYXJlbnQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFyZ2luLXJpZ2h0LTIwIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ubWFyZ2luLWJvdHRvbS0xNSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5kaW0tZm9vdGVyIHtcbiAgY29sb3I6ICNjM2MzYzM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGN1cnNvcjogaW5oZXJpdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAyNHB4O1xufVxuXG4ubWF0LWNoaXAge1xuICBtYXJnaW46IDBweCA0cHggIWltcG9ydGFudDtcbn1cblxuLmJyYW5kaW5nLXBpYyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbi5tYXQtc3RhbmRhcmQtY2hpcCAubWF0LWNoaXAtcmVtb3ZlLm1hdC1pY29uIHtcbiAgd2lkdGg6IDEzcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWNvbHVtbnMgLmZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4udXBsb2FkZWQtZG9jdW1lbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnZhbGlkYXRpb25zIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xufVxuXG4udW5saW1pdGVkIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IHgtc21hbGw7XG59XG5cbi51aS5mb3JtIC5maWVsZCA+IGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgY29sb3I6ICMxODFCMjA7XG4gIG1hcmdpbjogMHB4IDBweCA4cHg7XG59XG5cbi51aS5mb3JtIC50aHJlZS53aWRlLmZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmlubGluZS1sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xufVxuXG4udWkuaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi51aS5oZWFkZXIubm90ZS1oZWFkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi51aS5oZWFkZXIuYmFzaWMtaW5mby1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucG9zX2Jhc2ljX2Zvcm0gLnRheC1zZWN0aW9uIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLnBvc19iYXNpY19mb3JtIC50YXhfYmxvY2sge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDRENkRDO1xuICBib3JkZXItcmFkaXVzOiA1LjEyMTU1cHg7XG4gIG1pbi1oZWlnaHQ6IDM5MHB4O1xufVxuLnBvc19iYXNpY19mb3JtIC50YXhfYmxvY2sgcCB7XG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuOjpuZy1kZWVwLm1hdC1jaGlwLWxpc3Qtd3JhcHBlciB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICB0b3A6IC0xNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wYXltZW50LWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcbn1cblxuLnVpLmNoZWNrYm94IHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4udWkuY2hlY2tib3ggbGFiZWw6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi51aS5jaGVja2JveCBsYWJlbDphZnRlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdG9wOiAxcHg7XG59XG4udWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmJlZm9yZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzODY3YjE7XG59XG4udWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmFmdGVyIHtcbiAgY29sb3I6ICMzODY3YjE7XG59XG5cbi51aS5zZWdtZW50LmJnLWdyZXkge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q0RDZEQztcbn1cbi51aS5zZWdtZW50LmJnLWdyZXkgLnVpLmNoZWNrYm94IHtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLmNhcmREZXRhaWxzIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnVpLmZpdHRlZC5kaXZpZGVyIHtcbiAgbWFyZ2luOiAzMHB4IDBweDtcbn1cblxuLnVpLnByaW1hcnkuYnV0dG9uLmJyYW5kX2J1dHRvbnMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDY3LCAxMjIsIDIxOCwgMC4wNSkgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICM0MzdBREEgIWltcG9ydGFudDtcbiAgY29sb3I6ICM0MzdBREE7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbi51aS5wcmltYXJ5LmJ1dHRvbi5icmFuZF9idXR0b25zIGkuaWNvbiB7XG4gIGNvbG9yOiAjNDM3QURBO1xufVxuXG4uYnV0dG9uLmFsaWduIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xufVxuXG4udWkucHJpbWFyeS5idXR0b24uYWRkX2J0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0MzdBREE7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDcuMjQ0NDhweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzQzN0FEQSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDIycHg7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogYXV0bztcbn1cblxuLnVpLnByaW1hcnkuYnV0dG9uLmFkZF9idG4ucmVzZXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNEY0RjRGO1xuICBjb2xvcjogIzRGNEY0RiAhaW1wb3J0YW50O1xufVxuXG4ubm90ZXMtc2VjdGlvbiB0ZXh0YXJlYSB7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4udWkudHJhbnNwYXJlbnQubWFyZ2luLXJpZ2h0LTIwIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi51aS5ncmlkLmNhcmQtc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpZHRoOiAxNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGJvdHRvbTogMTAwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4ucG9zX2J0bi1wYW5lbC5zcGFjaW5nIGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiAwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjAwcHgpIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLnVpLmdyaWQgLmdyaWRzdHlsZSB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC51aS5ncmlkIC5ncmlkc3R5bGUge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDA5cHgpIGFuZCAobWluLXdpZHRoOiA4MDhweCkge1xuICAudWkuZm9ybSAuZm91ci53aWRlLmZpZWxkIHtcbiAgICB3aWR0aDogMzMlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDdweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC51aS5mb3JtIC5mb3VyLndpZGUuZmllbGQge1xuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC51aS5ncmlkIC5ncmlkc3R5bGUge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnVpLmdyaWQgLmdyaWRzdHlsZTEge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnVpLmdyaWQgLmVpZ2h0LndpZGUuY29sdW1uIC5ncmlkc3R5bGUyIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC51aS5ncmlkIC5ncmlkc3R5bGUzIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC51aS5ncmlkIC5ncmlkc3R5bGU0IHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDQwcHgpIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xuICAudWkuZm9ybSAubmluZS53aWRlLmZpZWxkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC51aS5mb3JtIC5zZXZlbi53aWRlLmZpZWxkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59Il19 */";
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

    var BasicInfoComponent =
    /*#__PURE__*/
    function () {
      function BasicInfoComponent(fb, commonService, posService, toastr, router) {
        var _this6 = this;

        _classCallCheck(this, BasicInfoComponent);

        this.fb = fb;
        this.commonService = commonService;
        this.posService = posService;
        this.toastr = toastr;
        this.router = router;
        this.countries = [];
        this.currencies = [];
        this.timezones = [];
        this.airports = [];
        this.isSubmitted = false;

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
          this.initInfoForm();
          this.getCountries();
          this.getCurrencies();
          this.getTimeZones();
          this.getAirportDetails();
        }
      }, {
        key: "initInfoForm",
        value: function initInfoForm() {
          var _this7 = this;

          this.posBasicInfoForm = this.fb.group({
            corporate_type: ['B2C', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            domain_url: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            country_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            timezone_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            payment_gateway: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            currency_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            agent_code: [''],
            branch_code: [''],
            contact: [''],
            credit_limit: [''],
            tax_number: [''],
            numberOfUsers: [''],
            iata_no: [''],
            domestictTaxCode: [''],
            domestictTaxPercentage: [''],
            domestictTaxCurrency: [''],
            domestictTaxAirport: [[]],
            amexCard: [false, []],
            queue: [false, []],
            internationalTaxPercentage: [''],
            nonAirlineTax: [''],
            pos_negofares: this.fb.group({
              tourOperatorDeffered: [false],
              bulkContract: [false],
              marine: [false],
              tourOperatorSemiDeffered: [false],
              privateAdult: [false],
              humanitarian: [false]
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
          $(document).ready(function () {
            $('.ui.dropdown').dropdown();
            $('.ui.dropdown').dropdown('refresh');
            $('.ui.checkbox').checkbox();
            $('.ui.dropdownThree').dropdown();
            $(document).ready(function () {
              this._globals = localStorage.getItem('_globals');
              var token = JSON.parse(this._globals).token;
              console.log("token::::::::", token);
              $('.dropdownThree').dropdown({
                type: 'category',
                minCharacters: 2,
                maxCharacters: 3,
                responseAsync: true,
                apiSettings: {
                  url: 'http://localhost:5000/api/get-airports-cache/{query}',
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
          });
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
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }];
    };

    BasicInfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-basic-info',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./basic-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/basic-info/basic-info.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./basic-info.component.scss */
      "./src/app/layout/pos/basic-info/basic-info.component.scss")).default]
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


    __webpack_exports__["default"] = ".outer {\n  margin: 0px 20px 0px 15px;\n}\n\n.amexCard {\n  background-color: gainsboro !important;\n}\n\n.farePreferencestable {\n  border-top: 0px !important;\n}\n\n.outer__add-pos__title {\n  margin: 0;\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #E0E0E0;\n}\n\n.tourCode_btn,\n.addTogg_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n}\n\n.tourCode_text,\n.addTogg_text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.corporate_input__placeholder-icon {\n  position: relative;\n  width: 18px;\n  bottom: 28px;\n  left: 9px;\n}\n\n.ui.form.pos_basic_form {\n  background: #fff;\n  box-shadow: 0px 2px 6px rgba(6, 40, 98, 0.05);\n  border-radius: 4.96141px;\n  margin: 24px;\n}\n\ndiv.upload {\n  box-sizing: border-box;\n  height: 15px;\n  width: 123px;\n  border-radius: 3px;\n  background-color: #FFF;\n  border: 0.5px solid #808080;\n  box-shadow: 0 0.25px 0.1px 0 rgba(0, 0, 0, 0.5);\n}\n\ndiv.upload input {\n  display: block !important;\n  width: 123px !important;\n  height: 15px !important;\n  opacity: 0 !important;\n  overflow: hidden !important;\n}\n\n.file_choose {\n  position: relative;\n  left: 27px;\n  bottom: 6px;\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 9px;\n  line-height: 10px;\n}\n\n.uploadinImg_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n}\n\n.uploadinImg_btn__text,\n.save-next_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 12px;\n}\n\n.file_table__img {\n  border: none;\n  background-color: #dfeafb5e;\n}\n\n.save-next_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.field input::-webkit-input-placeholder {\n  font-size: 14px;\n}\n\n.field input::-moz-placeholder {\n  font-size: 14px;\n}\n\n.field input::-ms-input-placeholder {\n  font-size: 14px;\n}\n\n.field input::placeholder {\n  font-size: 14px;\n}\n\n.ui.pointing.secondary.menu {\n  border: none;\n}\n\n.item.stepper__progress {\n  width: 167px;\n}\n\n.tab.segment.stepper__segment-outline {\n  border: none;\n  box-shadow: none;\n}\n\n.office-info_icon {\n  position: relative;\n  top: 20px;\n  right: 85px;\n}\n\n.pos_access-rights {\n  color: #828282;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 11px;\n  line-height: 12px;\n}\n\n.cancel_btn {\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.cancel_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.issue_date {\n  text-indent: 17px;\n}\n\n.wide.field.sale_check {\n  margin-top: 10px;\n}\n\n.assign_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.assign_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n}\n\n.circleIcon {\n  height: 20px;\n  width: 20px;\n  background-color: #0D801C;\n  border-radius: 50%;\n  display: inline-block;\n  margin-top: 6px;\n}\n\n.plusIcon {\n  color: #FFF;\n  font-size: 17px;\n  font-weight: 100;\n  line-height: 28px;\n  text-align: center;\n  margin-left: 0px;\n  margin-top: -3px;\n}\n\n::ng-deep.mat-step-icon-content {\n  height: 19px;\n  width: 19px;\n  color: #C8C8C8;\n  background-color: #C8C8C8;\n  border-radius: 50%;\n}\n\n::ng-deep.mat-step-header:hover,\n::ng-deep.cdk-keyboard-focused,\n::ng-deep.cdk-program-focused {\n  background-color: transparent !important;\n}\n\n::ng-deep.mat-step-icon {\n  border: 1px solid rgba(0, 0, 0, 0.24);\n  background: transparent !important;\n}\n\n::ng-deep.mat-step-icon-state-number.mat-step-icon.mat-step-icon-selected {\n  border: 2px solid #3867B1;\n  background: transparent;\n}\n\n::ng-deep.mat-step-icon-state-number.mat-step-icon.mat-step-icon-selected .ng-star-inserted {\n  color: #3867B1;\n}\n\n::ng-deep.mat-step-icon-content {\n  background-color: transparent;\n}\n\n::ng-deep.ng-star-inserted {\n  padding: 0 6px;\n}\n\n::ng-deep.mat-horizontal-stepper-header-container {\n  background: #ffff;\n  width: 100%;\n  padding: 0px 30%;\n  margin-top: 32px;\n}\n\n::ng-deep.mat-icon {\n  display: none !important;\n}\n\n::ng-deep.mat-step-icon-selected,\n::ng-deep.mat-step-icon-state-done,\n::ng-deep.mat-step-icon-state-edit {\n  background-color: transparent !important;\n}\n\n::ng-deep.mat-step-label {\n  color: #3867b1;\n}\n\n::ng-deep.mat-horizontal-content-container {\n  margin-top: 32px;\n}\n\n.pos_btn-panel {\n  padding-bottom: 20px;\n  margin-bottom: 40px;\n}\n\n.pos_btn-panel .secondary {\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.pos_btn-panel .primary {\n  float: right;\n  width: auto !important;\n  border-radius: 3px !important;\n  background-color: #437ADA;\n  color: #fff;\n  min-width: auto;\n}\n\n.pos_btn-panel .primary:hover {\n  background-color: #cacbcd !important;\n  box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34, 36, 38, 0.15) inset !important;\n  color: rgba(0, 0, 0, 0.8) !important;\n}\n\n.segment p {\n  padding-bottom: 10px;\n}\n\n.bg-grey {\n  background: #d1dade;\n}\n\n.example-chip-list {\n  width: 100%;\n  border: 0px solid grey !important;\n}\n\n.mat-chip-input {\n  border: 0px !important;\n  background: transparent !important;\n}\n\n.inputfile {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.transparent,\n.transparent:hover {\n  background: none;\n}\n\n.center {\n  text-align: center;\n}\n\n.margin-right-20 {\n  margin-right: 20px;\n}\n\n.margin-bottom-15 {\n  margin-bottom: 15px;\n}\n\n.dim-footer {\n  color: #c3c3c3;\n  display: block;\n  font-size: 12px;\n  margin-top: 10px;\n  cursor: inherit;\n  position: relative;\n  top: -20px;\n  left: 24px;\n}\n\n.mat-chip {\n  margin: 0px 4px !important;\n}\n\n.branding-pic {\n  -webkit-box-align: center;\n          align-items: center;\n  height: auto;\n  width: 90%;\n  margin-top: 10px;\n}\n\n.mat-standard-chip .mat-chip-remove.mat-icon {\n  width: 13px !important;\n  height: 13px !important;\n  font-size: 13px !important;\n}\n\n.custom-columns .field {\n  margin-bottom: 15px !important;\n}\n\n.uploaded-document {\n  display: block;\n}\n\n.validations {\n  color: red;\n  font-size: x-small;\n}\n\n.unlimited {\n  float: right;\n  font-size: x-small;\n}\n\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n\n.ui.form .three.wide.field {\n  margin-bottom: 16px;\n}\n\n.inline-label {\n  display: inline !important;\n}\n\n.ui.header {\n  margin: 24px 0px;\n  margin-top: 0px !important;\n  font-size: 20px;\n  font-weight: 400;\n}\n\n.ui.header.note-head {\n  margin-bottom: 12px;\n}\n\n.ui.header.basic-info-header {\n  margin-top: 20px;\n}\n\n.pos_basic_form .tax-section {\n  padding: 0px;\n}\n\n.pos_basic_form .tax_block {\n  border: 1px solid #D4D6DC;\n  border-radius: 5.12155px;\n  min-height: 390px;\n}\n\n.pos_basic_form .tax_block p {\n  padding-bottom: 24px;\n}\n\n.bookings_btn-panel .ui.button {\n  margin-right: 12px;\n}\n\n::ng-deep.mat-form-field-underline {\n  display: none;\n}\n\n::ng-deep.mat-chip-list-wrapper {\n  margin: 0px !important;\n  position: relative !important;\n  top: -16px !important;\n}\n\n.payment-header {\n  margin-top: 12px !important;\n}\n\n.ui.checkbox {\n  padding-bottom: 10px;\n}\n\n.ui.checkbox label:before {\n  border-radius: 20px;\n}\n\n.ui.checkbox label:after {\n  font-size: 12px;\n  top: 1px;\n}\n\n.ui.checkbox input:checked ~ label:before {\n  border: 1px solid #3867b1;\n}\n\n.ui.checkbox input:checked ~ label:after {\n  color: #3867b1;\n}\n\n.ui.segment.bg-grey {\n  margin-top: 12px;\n  background: transparent;\n  border: 1px solid #D4D6DC;\n}\n\n.ui.segment.bg-grey .ui.checkbox {\n  padding-bottom: 0px;\n}\n\n.cardDetails {\n  margin-top: 15px;\n}\n\n.spacing {\n  padding-left: 22px;\n  padding-right: 22px;\n}\n\n.ui.fitted.divider {\n  margin: 30px 0px;\n}\n\n.ui.primary.button.brand_buttons {\n  background: rgba(67, 122, 218, 0.05) !important;\n  border: 1px dashed #437ADA !important;\n  color: #437ADA;\n  box-shadow: none !important;\n}\n\n.ui.primary.button.brand_buttons i.icon {\n  color: #437ADA;\n}\n\n.ui.primary.button.add_btn {\n  border: 1px solid #437ADA;\n  box-sizing: border-box;\n  border-radius: 7.24448px !important;\n  background: transparent !important;\n  color: #437ADA !important;\n  box-shadow: none !important;\n  margin-top: 22px;\n  width: auto !important;\n  min-width: auto;\n}\n\n.ui.primary.button.add_btn.reset {\n  border: 1px solid #4F4F4F;\n  color: #4F4F4F !important;\n}\n\n.notes-section textarea {\n  min-height: 60px;\n  height: auto !important;\n}\n\n.ui.transparent.margin-right-20 {\n  display: block;\n  margin-bottom: 10px;\n}\n\n.ui.grid.card-section {\n  width: 100%;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n  margin-left: 8px;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 160px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 10px;\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: 0px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.outer-form {\n  margin-bottom: 80px;\n}\n\n.pos_btn-panel.spacing button {\n  position: absolute;\n  right: 0px;\n  bottom: -64px;\n}\n\n.button_align {\n  margin-top: -30px;\n}\n\n.buttonstyle {\n  text-align: right;\n  padding-bottom: 15px;\n}\n\n@media (max-width: 991px) {\n  .buttonstyle {\n    text-align: right;\n  }\n}\n\n@media (max-width: 767px) {\n  .button1 {\n    padding-top: 20px;\n    text-align: left;\n  }\n}\n\n@media (max-width: 410px) and (min-width: 320px) {\n  .ui.form .dim-footer {\n    width: 50% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Bvcy9icmFuZGluZy1pbmZvL0U6XFxCZWxhbFxccHJvamVjdHNcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxccG9zXFxicmFuZGluZy1pbmZvXFxicmFuZGluZy1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcG9zL2JyYW5kaW5nLWluZm8vYnJhbmRpbmctaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQ0FBQTtBQ0NKOztBREVBO0VBQ0ksMEJBQUE7QUNDSjs7QURFQTtFQUNJLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGdCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQ0FBQTtFQUNBLHdDQUFBO0FDQ0o7O0FERUE7RUFDSSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURFQTtFQUNJLDRDQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUNDSjs7QURFQTs7RUFFSSxrQkFBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUE7O0VBRUksV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNDSjs7QURTQTtFQUVJLGdCQUFBO0VBQ0EsNkNBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUNQSjs7QURXQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQ0FBQTtBQ1JKOztBRFdBO0VBQ0kseUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7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Q3JDRjtBQUNGOztBRHdDQTtFQUVNO0lBQ0UscUJBQUE7RUN2Q047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wb3MvYnJhbmRpbmctaW5mby9icmFuZGluZy1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGVyIHtcclxuICAgIG1hcmdpbjogMHB4IDIwcHggMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5hbWV4Q2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZhcmVQcmVmZXJlbmNlc3RhYmxlIHtcclxuICAgIGJvcmRlci10b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub3V0ZXJfX2FkZC1wb3NfX3RpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLm1lbnU+Lml0ZW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI4NTcxNDI5cmVtIDAgMCAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLmJvdHRvbS5hdHRhY2hlZC5hY3RpdmUudGFiLnNlZ21lbnQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbn1cclxuXHJcbi50YWIuc2VnbWVudCB7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjRTBFMEUwO1xyXG59XHJcblxyXG4udG91ckNvZGVfYnRuLFxyXG4uYWRkVG9nZ19idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcclxufVxyXG5cclxuLnRvdXJDb2RlX3RleHQsXHJcbi5hZGRUb2dnX3RleHQge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBib3R0b206IDI4cHg7XHJcbiAgICBsZWZ0OiA5cHg7XHJcbn1cclxuXHJcbi8vIC5vdXRlci1mb3JtLFxyXG4vLyAub3V0ZXJfY29ycEZvcm0ge1xyXG4vLyAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICAgIGJvcmRlcjogMC41cHggc29saWQgIzgwODA4MDtcclxuLy8gICAgIG1hcmdpbjogNDVweCAzMnB4IDExMXB4IDI1cHg7XHJcbi8vIH1cclxuLnVpLmZvcm0ucG9zX2Jhc2ljX2Zvcm0ge1xyXG4gICAgLy8gcGFkZGluZzogMHB4IDBweCAyNXB4IDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDYsIDQwLCA5OCwgMC4wNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0Ljk2MTQxcHg7XHJcbiAgICBtYXJnaW46MjRweDtcclxuICAgIC8vIG1heC13aWR0aDogMTIwMHB4O1xyXG59XHJcblxyXG5kaXYudXBsb2FkIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTIzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjODA4MDgwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjI1cHggMC4xcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbmRpdi51cGxvYWQgaW5wdXQge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMjNweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWxlX2Nob29zZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAyN3B4O1xyXG4gICAgYm90dG9tOiA2cHg7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi51cGxvYWRpbkltZ19idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcclxufVxyXG5cclxuLnVwbG9hZGluSW1nX2J0bl9fdGV4dCxcclxuLnNhdmUtbmV4dF9idG5fX3RleHQge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi5maWxlX3RhYmxlX19pbWcge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZWFmYjVlO1xyXG59XHJcblxyXG4uc2F2ZS1uZXh0X2J0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnVpLnBvaW50aW5nLnNlY29uZGFyeS5tZW51IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLml0ZW0uc3RlcHBlcl9fcHJvZ3Jlc3Mge1xyXG4gICAgd2lkdGg6IDE2N3B4O1xyXG59XHJcblxyXG4udGFiLnNlZ21lbnQuc3RlcHBlcl9fc2VnbWVudC1vdXRsaW5lIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5vZmZpY2UtaW5mb19pY29uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiA4NXB4O1xyXG59XHJcblxyXG4ucG9zX2FjY2Vzcy1yaWdodHMge1xyXG4gICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTJweDtcclxufVxyXG5cclxuLmNhbmNlbF9idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRGNEY0RjtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmNhbmNlbF9idG5fX3RleHQge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pc3N1ZV9kYXRlIHtcclxuICAgIHRleHQtaW5kZW50OiAxN3B4O1xyXG59XHJcblxyXG4ud2lkZS5maWVsZC5zYWxlX2NoZWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5hc3NpZ25fYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5hc3NpZ25fYnRuX190ZXh0IHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uY2lyY2xlSWNvbiB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRDgwMUM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuXHJcbi5wbHVzSWNvbiB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1jb250ZW50IHtcclxuICAgIGhlaWdodDogMTlweDtcclxuICAgIHdpZHRoOiAxOXB4O1xyXG4gICAgY29sb3I6ICNDOEM4Qzg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhDOEM4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LXN0ZXAtaGVhZGVyOmhvdmVyLFxyXG4gOjpuZy1kZWVwLmNkay1rZXlib2FyZC1mb2N1c2VkLFxyXG4gOjpuZy1kZWVwLmNkay1wcm9ncmFtLWZvY3VzZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMjQpO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24tc3RhdGUtbnVtYmVyLm1hdC1zdGVwLWljb24ubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzg2N0IxO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAubmctc3Rhci1pbnNlcnRlZCB7XHJcbiAgICAgICAgY29sb3I6ICMzODY3QjE7XHJcbiAgICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5uZy1zdGFyLWluc2VydGVkIHtcclxuICAgIHBhZGRpbmc6IDAgNnB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIC8vIHdpZHRoOiA0MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMHB4IDMwJTtcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLFxyXG4gOjpuZy1kZWVwLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcclxuIDo6bmctZGVlcC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1zdGVwLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjMzg2N2IxO1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LWhvcml6b250YWwtY29udGVudC1jb250YWluZXIge1xyXG4gICAgLy8gYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbn1cclxuXHJcbi5wb3NfYnRuLXBhbmVsIHtcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIHJpZ2h0OiA2OHB4O1xyXG4gICAgLy8gYm90dG9tOiA5N3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgLnNlY29uZGFyeSB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDEwNC44N3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0RjRGO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIH1cclxuICAgIC5wcmltYXJ5IHtcclxuICAgICAgICAvLyB3aWR0aDogMTI0Ljg3cHg7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQzN0FEQTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAvLyBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSkgIWltcG9ydGFudDtcclxuICAgICAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWNiY2QgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHRyYW5zcGFyZW50IGluc2V0LCAwIDAgMCAwIHJnYmEoMzQsIDM2LCAzOCwgLjE1KSBpbnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuOCkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWdtZW50IHAge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5iZy1ncmV5IHtcclxuICAgIGJhY2tncm91bmQ6ICNkMWRhZGU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNoaXAtbGlzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkIGdyZXkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1jaGlwLWlucHV0IHtcclxuICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXRmaWxlIHtcclxuICAgIHdpZHRoOiAwLjFweDtcclxuICAgIGhlaWdodDogMC4xcHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4udHJhbnNwYXJlbnQsXHJcbi50cmFuc3BhcmVudDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hcmdpbi1yaWdodC0yMCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5tYXJnaW4tYm90dG9tLTE1IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5kaW0tZm9vdGVyIHtcclxuICAgIGNvbG9yOiAjYzNjM2MzO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBpbmhlcml0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMjBweDtcclxuICAgIGxlZnQ6IDI0cHg7XHJcbn1cclxuXHJcbi5tYXQtY2hpcCB7XHJcbiAgICBtYXJnaW46IDBweCA0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJyYW5kaW5nLXBpYyB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5tYXQtc3RhbmRhcmQtY2hpcCAubWF0LWNoaXAtcmVtb3ZlLm1hdC1pY29uIHtcclxuICAgIHdpZHRoOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEzcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY3VzdG9tLWNvbHVtbnMgLmZpZWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVwbG9hZGVkLWRvY3VtZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udmFsaWRhdGlvbnMge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxufVxyXG5cclxuLnVubGltaXRlZCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbn1cclxuXHJcbi51aS5mb3JtIC5maWVsZD5sYWJlbCB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICBjb2xvcjogIzE4MUIyMDtcclxuICAgIG1hcmdpbjogMHB4IDBweCA4cHg7XHJcbn1cclxuXHJcbi51aS5mb3JtIC50aHJlZS53aWRlLmZpZWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5pbmxpbmUtbGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51aS5oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAyNHB4IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICYubm90ZS1oZWFkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgJi5iYXNpYy1pbmZvLWhlYWRlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDsgICBcclxuICAgIH1cclxufVxyXG5cclxuLnBvc19iYXNpY19mb3JtIHtcclxuICAgIC50YXgtc2VjdGlvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgfVxyXG4gICAgLnRheF9ibG9jayB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0Q0RDZEQztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1LjEyMTU1cHg7XHJcbiAgICAgICAgbWluLWhlaWdodDogMzkwcHg7XHJcbiAgICAgICAgLy8gbWF4LWhlaWdodDogMzkwcHg7XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJvb2tpbmdzX2J0bi1wYW5lbCB7XHJcbiAgICAudWkuYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1jaGlwLWxpc3Qtd3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IC0xNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYXltZW50LWhlYWRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51aS5jaGVja2JveCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHRvcDogMXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlucHV0OmNoZWNrZWR+bGFiZWwge1xyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzM4NjdiMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzg2N2IxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnVpLnNlZ21lbnQuYmctZ3JleSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDRENkRDO1xyXG4gICAgLnVpLmNoZWNrYm94IHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZERldGFpbHMge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLnNwYWNpbmcge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjJweDtcclxufVxyXG5cclxuLnVpLmZpdHRlZC5kaXZpZGVyIHtcclxuICAgIG1hcmdpbjogMzBweCAwcHg7XHJcbn1cclxuXHJcbi51aS5wcmltYXJ5LmJ1dHRvbi5icmFuZF9idXR0b25zIHtcclxuICAgIC8vIGhlaWdodDogODJweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNjcsIDEyMiwgMjE4LCAwLjA1KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICM0MzdBREEgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNDM3QURBO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDE4cHg7XHJcbiAgICAvLyBtaW4td2lkdGg6IGF1dG87XHJcbiAgICBpLmljb24ge1xyXG4gICAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIC8vIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM0MzdBREE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS5wcmltYXJ5LmJ1dHRvbi5hZGRfYnRuIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0MzdBREE7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNy4yNDQ0OHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM0MzdBREEgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4udWkucHJpbWFyeS5idXR0b24uYWRkX2J0bi5yZXNldCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNEY0RjRGO1xyXG4gICAgY29sb3I6ICM0RjRGNEYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vdGVzLXNlY3Rpb24ge1xyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS50cmFuc3BhcmVudC5tYXJnaW4tcmlnaHQtMjAge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4udWkuZ3JpZC5jYXJkLXNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC8vIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJvdHRvbTogMTAwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4ub3V0ZXItZm9ybSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG59XHJcblxyXG4ucG9zX2J0bi1wYW5lbC5zcGFjaW5nIHtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgYm90dG9tOiAtNjRweDtcclxuICAgIH1cclxufVxyXG5cclxuLmJ1dHRvbl9hbGlnbntcclxuICAgIG1hcmdpbi10b3A6IC0zMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uc3R5bGV7XHJcbiAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6OTkxcHgpe1xyXG4gICAgLmJ1dHRvbnN0eWxle1xyXG4gICAgICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NzY3cHgpe1xyXG4gICAgLmJ1dHRvbjF7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6NDEwcHgpIGFuZCAobWluLXdpZHRoOjMyMHB4KXtcclxuICAgIC51aS5mb3Jte1xyXG4gICAgICAuZGltLWZvb3RlcntcclxuICAgICAgICB3aWR0aDo1MCUgIWltcG9ydGFudFxyXG4gICAgIH1cclxuICAgfVxyXG59XHJcblxyXG5cclxuLy8gQG1lZGlhKG1heC13aWR0aDo5OTFweCl7XHJcbi8vICAgICAudWkuZm9ybXtcclxuLy8gICAgICAgICAuZm9ybS1pbm5lcntcclxuLy8gICAgICAgICAgICAgLmZpZWxkc3tcclxuLy8gICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgICAgICAgICAuYnJhbmR7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4vLyAgICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICAgIC5idXR0b25zdHlsZXtcclxuLy8gICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4vLyAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4vLyAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbi8vICAgICB9XHJcbi8vIH0iLCIub3V0ZXIge1xuICBtYXJnaW46IDBweCAyMHB4IDBweCAxNXB4O1xufVxuXG4uYW1leENhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm8gIWltcG9ydGFudDtcbn1cblxuLmZhcmVQcmVmZXJlbmNlc3RhYmxlIHtcbiAgYm9yZGVyLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5vdXRlcl9fYWRkLXBvc19fdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi51aS50b3AuYXR0YWNoZWQubWVudSA+IC5pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yODU3MTQyOXJlbSAwIDAgMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLnVpLmJvdHRvbS5hdHRhY2hlZC5hY3RpdmUudGFiLnNlZ21lbnQge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XG59XG5cbi50YWIuc2VnbWVudCB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG5ociB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNFMEUwRTA7XG59XG5cbi50b3VyQ29kZV9idG4sXG4uYWRkVG9nZ19idG4ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XG59XG5cbi50b3VyQ29kZV90ZXh0LFxuLmFkZFRvZ2dfdGV4dCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMThweDtcbiAgYm90dG9tOiAyOHB4O1xuICBsZWZ0OiA5cHg7XG59XG5cbi51aS5mb3JtLnBvc19iYXNpY19mb3JtIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSg2LCA0MCwgOTgsIDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiA0Ljk2MTQxcHg7XG4gIG1hcmdpbjogMjRweDtcbn1cblxuZGl2LnVwbG9hZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDEyM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJvcmRlcjogMC41cHggc29saWQgIzgwODA4MDtcbiAgYm94LXNoYWRvdzogMCAwLjI1cHggMC4xcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbmRpdi51cGxvYWQgaW5wdXQge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB3aWR0aDogMTIzcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4uZmlsZV9jaG9vc2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDI3cHg7XG4gIGJvdHRvbTogNnB4O1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBsaW5lLWhlaWdodDogMTBweDtcbn1cblxuLnVwbG9hZGluSW1nX2J0biB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbn1cblxuLnVwbG9hZGluSW1nX2J0bl9fdGV4dCxcbi5zYXZlLW5leHRfYnRuX190ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xufVxuXG4uZmlsZV90YWJsZV9faW1nIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlYWZiNWU7XG59XG5cbi5zYXZlLW5leHRfYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi51aS5wb2ludGluZy5zZWNvbmRhcnkubWVudSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLml0ZW0uc3RlcHBlcl9fcHJvZ3Jlc3Mge1xuICB3aWR0aDogMTY3cHg7XG59XG5cbi50YWIuc2VnbWVudC5zdGVwcGVyX19zZWdtZW50LW91dGxpbmUge1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5vZmZpY2UtaW5mb19pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiA4NXB4O1xufVxuXG4ucG9zX2FjY2Vzcy1yaWdodHMge1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG5cbi5jYW5jZWxfYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0RjRGO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5jYW5jZWxfYnRuX190ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pc3N1ZV9kYXRlIHtcbiAgdGV4dC1pbmRlbnQ6IDE3cHg7XG59XG5cbi53aWRlLmZpZWxkLnNhbGVfY2hlY2sge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYXNzaWduX2J0biB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uYXNzaWduX2J0bl9fdGV4dCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbn1cblxuLmNpcmNsZUljb24ge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQ4MDFDO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4ucGx1c0ljb24ge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tdG9wOiAtM3B4O1xufVxuXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1jb250ZW50IHtcbiAgaGVpZ2h0OiAxOXB4O1xuICB3aWR0aDogMTlweDtcbiAgY29sb3I6ICNDOEM4Qzg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDOEM4Qzg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuOjpuZy1kZWVwLm1hdC1zdGVwLWhlYWRlcjpob3Zlcixcbjo6bmctZGVlcC5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbjo6bmctZGVlcC5jZGstcHJvZ3JhbS1mb2N1c2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24ge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1udW1iZXIubWF0LXN0ZXAtaWNvbi5tYXQtc3RlcC1pY29uLXNlbGVjdGVkIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzM4NjdCMTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1udW1iZXIubWF0LXN0ZXAtaWNvbi5tYXQtc3RlcC1pY29uLXNlbGVjdGVkIC5uZy1zdGFyLWluc2VydGVkIHtcbiAgY29sb3I6ICMzODY3QjE7XG59XG5cbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuOjpuZy1kZWVwLm5nLXN0YXItaW5zZXJ0ZWQge1xuICBwYWRkaW5nOiAwIDZweDtcbn1cblxuOjpuZy1kZWVwLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4IDMwJTtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cblxuOjpuZy1kZWVwLm1hdC1pY29uIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1zdGVwLWxhYmVsIHtcbiAgY29sb3I6ICMzODY3YjE7XG59XG5cbjo6bmctZGVlcC5tYXQtaG9yaXpvbnRhbC1jb250ZW50LWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5wb3NfYnRuLXBhbmVsIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4ucG9zX2J0bi1wYW5lbCAuc2Vjb25kYXJ5IHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0RjRGO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4ucG9zX2J0bi1wYW5lbCAucHJpbWFyeSB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzdBREE7XG4gIGNvbG9yOiAjZmZmO1xuICBtaW4td2lkdGg6IGF1dG87XG59XG4ucG9zX2J0bi1wYW5lbCAucHJpbWFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYWNiY2QgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHRyYW5zcGFyZW50IGluc2V0LCAwIDAgMCAwIHJnYmEoMzQsIDM2LCAzOCwgMC4xNSkgaW5zZXQgIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KSAhaW1wb3J0YW50O1xufVxuXG4uc2VnbWVudCBwIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5iZy1ncmV5IHtcbiAgYmFja2dyb3VuZDogI2QxZGFkZTtcbn1cblxuLmV4YW1wbGUtY2hpcC1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMHB4IHNvbGlkIGdyZXkgIWltcG9ydGFudDtcbn1cblxuLm1hdC1jaGlwLWlucHV0IHtcbiAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLmlucHV0ZmlsZSB7XG4gIHdpZHRoOiAwLjFweDtcbiAgaGVpZ2h0OiAwLjFweDtcbiAgb3BhY2l0eTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLnRyYW5zcGFyZW50LFxuLnRyYW5zcGFyZW50OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hcmdpbi1yaWdodC0yMCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLm1hcmdpbi1ib3R0b20tMTUge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZGltLWZvb3RlciB7XG4gIGNvbG9yOiAjYzNjM2MzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjdXJzb3I6IGluaGVyaXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjBweDtcbiAgbGVmdDogMjRweDtcbn1cblxuLm1hdC1jaGlwIHtcbiAgbWFyZ2luOiAwcHggNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5icmFuZGluZy1waWMge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5tYXQtc3RhbmRhcmQtY2hpcCAubWF0LWNoaXAtcmVtb3ZlLm1hdC1pY29uIHtcbiAgd2lkdGg6IDEzcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWNvbHVtbnMgLmZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4udXBsb2FkZWQtZG9jdW1lbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnZhbGlkYXRpb25zIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xufVxuXG4udW5saW1pdGVkIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IHgtc21hbGw7XG59XG5cbi51aS5mb3JtIC5maWVsZCA+IGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgY29sb3I6ICMxODFCMjA7XG4gIG1hcmdpbjogMHB4IDBweCA4cHg7XG59XG5cbi51aS5mb3JtIC50aHJlZS53aWRlLmZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmlubGluZS1sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xufVxuXG4udWkuaGVhZGVyIHtcbiAgbWFyZ2luOiAyNHB4IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi51aS5oZWFkZXIubm90ZS1oZWFkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi51aS5oZWFkZXIuYmFzaWMtaW5mby1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucG9zX2Jhc2ljX2Zvcm0gLnRheC1zZWN0aW9uIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLnBvc19iYXNpY19mb3JtIC50YXhfYmxvY2sge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDRENkRDO1xuICBib3JkZXItcmFkaXVzOiA1LjEyMTU1cHg7XG4gIG1pbi1oZWlnaHQ6IDM5MHB4O1xufVxuLnBvc19iYXNpY19mb3JtIC50YXhfYmxvY2sgcCB7XG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xufVxuXG4uYm9va2luZ3NfYnRuLXBhbmVsIC51aS5idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG46Om5nLWRlZXAubWF0LWNoaXAtbGlzdC13cmFwcGVyIHtcbiAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gIHRvcDogLTE2cHggIWltcG9ydGFudDtcbn1cblxuLnBheW1lbnQtaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMTJweCAhaW1wb3J0YW50O1xufVxuXG4udWkuY2hlY2tib3gge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi51aS5jaGVja2JveCBsYWJlbDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuLnVpLmNoZWNrYm94IGxhYmVsOmFmdGVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0b3A6IDFweDtcbn1cbi51aS5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YmVmb3JlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM4NjdiMTtcbn1cbi51aS5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YWZ0ZXIge1xuICBjb2xvcjogIzM4NjdiMTtcbn1cblxuLnVpLnNlZ21lbnQuYmctZ3JleSB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDRENkRDO1xufVxuLnVpLnNlZ21lbnQuYmctZ3JleSAudWkuY2hlY2tib3gge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4uY2FyZERldGFpbHMge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uc3BhY2luZyB7XG4gIHBhZGRpbmctbGVmdDogMjJweDtcbiAgcGFkZGluZy1yaWdodDogMjJweDtcbn1cblxuLnVpLmZpdHRlZC5kaXZpZGVyIHtcbiAgbWFyZ2luOiAzMHB4IDBweDtcbn1cblxuLnVpLnByaW1hcnkuYnV0dG9uLmJyYW5kX2J1dHRvbnMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDY3LCAxMjIsIDIxOCwgMC4wNSkgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICM0MzdBREEgIWltcG9ydGFudDtcbiAgY29sb3I6ICM0MzdBREE7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbi51aS5wcmltYXJ5LmJ1dHRvbi5icmFuZF9idXR0b25zIGkuaWNvbiB7XG4gIGNvbG9yOiAjNDM3QURBO1xufVxuXG4udWkucHJpbWFyeS5idXR0b24uYWRkX2J0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0MzdBREE7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDcuMjQ0NDhweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzQzN0FEQSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDIycHg7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogYXV0bztcbn1cblxuLnVpLnByaW1hcnkuYnV0dG9uLmFkZF9idG4ucmVzZXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNEY0RjRGO1xuICBjb2xvcjogIzRGNEY0RiAhaW1wb3J0YW50O1xufVxuXG4ubm90ZXMtc2VjdGlvbiB0ZXh0YXJlYSB7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4udWkudHJhbnNwYXJlbnQubWFyZ2luLXJpZ2h0LTIwIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi51aS5ncmlkLmNhcmQtc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpZHRoOiAxNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGJvdHRvbTogMTAwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4ub3V0ZXItZm9ybSB7XG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XG59XG5cbi5wb3NfYnRuLXBhbmVsLnNwYWNpbmcgYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICBib3R0b206IC02NHB4O1xufVxuXG4uYnV0dG9uX2FsaWduIHtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG5cbi5idXR0b25zdHlsZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gIC5idXR0b25zdHlsZSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYnV0dG9uMSB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQxMHB4KSBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgLnVpLmZvcm0gLmRpbS1mb290ZXIge1xuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";
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

    var BrandingInfoComponent =
    /*#__PURE__*/
    function () {
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

          if (files.length === 0) return;
          var mimeType = files[0].type;

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

          console.log("file_size ======================= ", file_size);

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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/branding-info/branding-info.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./branding-info.component.scss */
      "./src/app/layout/pos/branding-info/branding-info.component.scss")).default]
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


    __webpack_exports__["default"] = ".ui.segment {\n  margin: 24px !important;\n}\n\n.ui.form.pos_basic_form {\n  margin-bottom: 80px;\n  margin-top: -37px;\n}\n\n.ui.primary.button {\n  margin-top: 35px;\n  margin-right: 12px;\n}\n\n.ui.reset.button {\n  margin-top: 35px;\n  margin-right: 12px;\n}\n\n.ui.reset.button.add_btn, .ui.primary.button.add_btn {\n  margin-top: 43px;\n}\n\n.button_align {\n  margin-bottom: 20px;\n}\n\n.fourwide_button {\n  margin-top: -12px !important;\n}\n\n.pos_btn-panel .ui.button {\n  margin-top: 20px;\n}\n\n.ui.header {\n  font-size: 20px;\n  font-weight: 400;\n}\n\n@media (max-width: 991) {\n  .ui.form.fields {\n    display: -webkit-box !important;\n    display: flex !important;\n    width: 100% !important;\n  }\n\n  .ui.form.two.wide.field {\n    display: -webkit-inline-box;\n    display: inline-flex;\n    width: 16.6% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Bvcy9tb250aGx5LXRhcmdldC9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHBvc1xcbW9udGhseS10YXJnZXRcXG1vbnRobHktdGFyZ2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcG9zL21vbnRobHktdGFyZ2V0L21vbnRobHktdGFyZ2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksdUJBQUE7QUNBSjs7QURHQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxtQkFBQTtBQ0FKOztBREdBO0VBQ0ksNEJBQUE7QUNBSjs7QURJSTtFQUNJLGdCQUFBO0FDRFI7O0FES0E7RUFDRyxlQUFBO0VBQ0EsZ0JBQUE7QUNGSDs7QURLQTtFQUNJO0lBQ0ksK0JBQUE7SUFBQSx3QkFBQTtJQUNBLHNCQUFBO0VDRk47O0VESUU7SUFDSSwyQkFBQTtJQUFBLG9CQUFBO0lBQ0EsdUJBQUE7RUNETjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3Bvcy9tb250aGx5LXRhcmdldC9tb250aGx5LXRhcmdldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51aS5zZWdtZW50e1xyXG4gICAgLy8gbWFyZ2luOjI0cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMjRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udWkuZm9ybS5wb3NfYmFzaWNfZm9ybXtcclxuICBtYXJnaW4tYm90dG9tOjgwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTM3cHg7XHJcbn1cclxuXHJcbi51aS5wcmltYXJ5LmJ1dHRvbntcclxuICAgIG1hcmdpbi10b3A6IDM1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi51aS5yZXNldC5idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMzVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxufVxyXG5cclxuLnVpLnJlc2V0LmJ1dHRvbi5hZGRfYnRuLCAudWkucHJpbWFyeS5idXR0b24uYWRkX2J0biB7XHJcbiAgICBtYXJnaW4tdG9wOiA0M3B4O1xyXG59XHJcblxyXG4uYnV0dG9uX2FsaWdue1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmZvdXJ3aWRlX2J1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOi0xMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wb3NfYnRuLXBhbmVsIHtcclxuICAgIC51aS5idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS5oZWFkZXJ7XHJcbiAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICBmb250LXdlaWdodDo0MDA7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6OTkxKXtcclxuICAgIC51aS5mb3JtLmZpZWxkcyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAudWkuZm9ybS50d28ud2lkZS5maWVsZHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICB3aWR0aDogMTYuNiUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59IiwiLnVpLnNlZ21lbnQge1xuICBtYXJnaW46IDI0cHggIWltcG9ydGFudDtcbn1cblxuLnVpLmZvcm0ucG9zX2Jhc2ljX2Zvcm0ge1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICBtYXJnaW4tdG9wOiAtMzdweDtcbn1cblxuLnVpLnByaW1hcnkuYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG4udWkucmVzZXQuYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG4udWkucmVzZXQuYnV0dG9uLmFkZF9idG4sIC51aS5wcmltYXJ5LmJ1dHRvbi5hZGRfYnRuIHtcbiAgbWFyZ2luLXRvcDogNDNweDtcbn1cblxuLmJ1dHRvbl9hbGlnbiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mb3Vyd2lkZV9idXR0b24ge1xuICBtYXJnaW4tdG9wOiAtMTJweCAhaW1wb3J0YW50O1xufVxuXG4ucG9zX2J0bi1wYW5lbCAudWkuYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnVpLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MSkge1xuICAudWkuZm9ybS5maWVsZHMge1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnVpLmZvcm0udHdvLndpZGUuZmllbGQge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHdpZHRoOiAxNi42JSAhaW1wb3J0YW50O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/layout/pos/monthly-target/monthly-target.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/layout/pos/monthly-target/monthly-target.component.ts ***!
    \***********************************************************************/

  /*! exports provided: MonthlyTargetComponent */

  /***/
  function srcAppLayoutPosMonthlyTargetMonthlyTargetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonthlyTargetComponent", function () {
      return MonthlyTargetComponent;
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

    var MonthlyTargetComponent =
    /*#__PURE__*/
    function () {
      function MonthlyTargetComponent(fb, posService, toastr, activeRoute, router) {
        _classCallCheck(this, MonthlyTargetComponent);

        this.fb = fb;
        this.posService = posService;
        this.toastr = toastr;
        this.activeRoute = activeRoute;
        this.router = router;
        this.posInfo = {};
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
            year: [null],
            month: [null],
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

            _this17.getItemArray.removeAt(0);

            organisation_stats.forEach(function (x) {
              _this17.getItemArray.push(_this17.fb.group(x));
            });

            _this17.ngAfterViewInit();
          });
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/monthly-target/monthly-target.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./monthly-target.component.scss */
      "./src/app/layout/pos/monthly-target/monthly-target.component.scss")).default]
    })], MonthlyTargetComponent);
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


    __webpack_exports__["default"] = ".outer {\n  margin: 0px 20px 0px 15px;\n}\n\n.amexCard {\n  background-color: gainsboro !important;\n}\n\n.farePreferencestable {\n  border-top: 0px !important;\n}\n\n.outer__add-pos__title {\n  margin: 0;\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #E0E0E0;\n}\n\n.tourCode_btn,\n.addTogg_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n}\n\n.tourCode_text,\n.addTogg_text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.corporate_input__placeholder-icon {\n  position: relative;\n  width: 18px;\n  bottom: 28px;\n  left: 9px;\n}\n\n.ui.form.pos_basic_form {\n  padding: 24px 0px 0px 0px;\n  background: #fff;\n  box-shadow: 0px 2px 6px rgba(6, 40, 98, 0.05);\n  border-radius: 4.96141px;\n  margin: 24px;\n}\n\ndiv.upload {\n  box-sizing: border-box;\n  height: 15px;\n  width: 123px;\n  border-radius: 3px;\n  background-color: #FFF;\n  border: 0.5px solid #808080;\n  box-shadow: 0 0.25px 0.1px 0 rgba(0, 0, 0, 0.5);\n}\n\ndiv.upload input {\n  display: block !important;\n  width: 123px !important;\n  height: 15px !important;\n  opacity: 0 !important;\n  overflow: hidden !important;\n}\n\n.file_choose {\n  position: relative;\n  left: 27px;\n  bottom: 6px;\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 9px;\n  line-height: 10px;\n}\n\n.uploadinImg_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n}\n\n.uploadinImg_btn__text,\n.save-next_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 12px;\n}\n\n.file_table__img {\n  border: none;\n  background-color: #dfeafb5e;\n}\n\n.save-next_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.field input::-webkit-input-placeholder {\n  font-size: 14px;\n}\n\n.field input::-moz-placeholder {\n  font-size: 14px;\n}\n\n.field input::-ms-input-placeholder {\n  font-size: 14px;\n}\n\n.field input::placeholder {\n  font-size: 14px;\n}\n\n.ui.pointing.secondary.menu {\n  border: none;\n}\n\n.item.stepper__progress {\n  width: 167px;\n}\n\n.tab.segment.stepper__segment-outline {\n  border: none;\n  box-shadow: none;\n}\n\n.office-info_icon {\n  position: relative;\n  top: 20px;\n  right: 85px;\n}\n\n.pos_access-rights {\n  color: #828282;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 11px;\n  line-height: 12px;\n}\n\n.cancel_btn {\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.cancel_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.issue_date {\n  text-indent: 17px;\n}\n\n.wide.field.sale_check {\n  margin-top: 10px;\n}\n\n.assign_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.assign_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n}\n\n.circleIcon {\n  height: 20px;\n  width: 20px;\n  background-color: #0D801C;\n  border-radius: 50%;\n  display: inline-block;\n  margin-top: 6px;\n}\n\n.plusIcon {\n  color: #FFF;\n  font-size: 17px;\n  font-weight: 100;\n  line-height: 28px;\n  text-align: center;\n  margin-left: 0px;\n  margin-top: -3px;\n}\n\n::ng-deep.mat-step-icon-content {\n  height: 19px;\n  width: 19px;\n  color: #C8C8C8;\n  background-color: #C8C8C8;\n  border-radius: 50%;\n}\n\n::ng-deep.mat-step-header:hover,\n::ng-deep.cdk-keyboard-focused,\n::ng-deep.cdk-program-focused {\n  background-color: transparent !important;\n}\n\n::ng-deep.mat-step-icon {\n  border: 1px solid rgba(0, 0, 0, 0.24);\n  background: transparent !important;\n}\n\n::ng-deep.mat-step-icon-state-number.mat-step-icon.mat-step-icon-selected {\n  border: 2px solid #3867B1;\n  background: transparent;\n}\n\n::ng-deep.mat-step-icon-state-number.mat-step-icon.mat-step-icon-selected .ng-star-inserted {\n  color: #3867B1;\n}\n\n::ng-deep.mat-step-icon-content {\n  background-color: transparent;\n}\n\n::ng-deep.ng-star-inserted {\n  padding: 0 6px;\n}\n\n::ng-deep.mat-horizontal-stepper-header-container {\n  background: #ffff;\n  width: 100%;\n  padding: 0px 30%;\n  margin-top: 32px;\n}\n\n::ng-deep.mat-icon {\n  display: none !important;\n}\n\n::ng-deep.mat-step-icon-selected,\n::ng-deep.mat-step-icon-state-done,\n::ng-deep.mat-step-icon-state-edit {\n  background-color: transparent !important;\n}\n\n::ng-deep.mat-step-label {\n  color: #3867b1;\n}\n\n::ng-deep.mat-horizontal-content-container {\n  margin-top: 32px;\n}\n\n.pos_btn-panel {\n  padding-bottom: 20px;\n  margin-bottom: 40px;\n}\n\n.pos_btn-panel .secondary {\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.pos_btn-panel .primary {\n  float: right;\n  width: auto !important;\n  border-radius: 3px !important;\n  background-color: #3867B1;\n  min-width: auto;\n}\n\n.pos_btn-panel .primary:hover {\n  background-color: #cacbcd !important;\n  box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34, 36, 38, 0.15) inset !important;\n  color: rgba(0, 0, 0, 0.8) !important;\n}\n\n.segment p {\n  padding-bottom: 10px;\n}\n\n.bg-grey {\n  background: #d1dade;\n}\n\n.example-chip-list {\n  width: 100%;\n  border: 0px solid grey !important;\n}\n\n.mat-chip-input {\n  border: 0px !important;\n  background: transparent !important;\n}\n\n.inputfile {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.transparent,\n.transparent:hover {\n  background: none;\n}\n\n.center {\n  text-align: center;\n}\n\n.margin-right-20 {\n  margin-right: 20px;\n}\n\n.margin-bottom-15 {\n  margin-bottom: 15px;\n}\n\n.dim-footer {\n  color: #c3c3c3;\n  display: block;\n  font-size: 12px;\n  margin-top: 10px;\n  cursor: inherit;\n  position: relative;\n  top: -20px;\n  left: 24px;\n}\n\n.mat-chip {\n  margin: 0px 4px !important;\n}\n\n.branding-pic {\n  -webkit-box-align: center;\n          align-items: center;\n  height: 150px;\n}\n\n.mat-standard-chip .mat-chip-remove.mat-icon {\n  width: 13px !important;\n  height: 13px !important;\n  font-size: 13px !important;\n}\n\n.custom-columns .field {\n  margin-bottom: 15px !important;\n}\n\n.uploaded-document {\n  display: block;\n}\n\n.validations {\n  color: red;\n  font-size: x-small;\n}\n\n.unlimited {\n  float: right;\n  font-size: x-small;\n}\n\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n\n.ui.form .three.wide.field {\n  margin-bottom: 16px;\n}\n\n.inline-label {\n  display: inline !important;\n}\n\n.ui.header {\n  margin-bottom: 24px;\n}\n\n.ui.header.note-head {\n  margin-bottom: 12px;\n}\n\n.ui.header.basic-info-header {\n  margin-top: 20px;\n}\n\n.pos_basic_form .tax-section {\n  padding: 0px;\n}\n\n.pos_basic_form .tax_block {\n  border: 1px solid #D4D6DC;\n  border-radius: 5.12155px;\n  min-height: 390px;\n}\n\n.pos_basic_form .tax_block p {\n  padding-bottom: 24px;\n}\n\n::ng-deep.mat-form-field-underline {\n  display: none;\n}\n\n::ng-deep.mat-chip-list-wrapper {\n  margin: 0px !important;\n  position: relative !important;\n  top: -16px !important;\n}\n\n.payment-header {\n  margin-top: 12px !important;\n}\n\n.ui.checkbox {\n  padding-bottom: 10px;\n  margin: 5px;\n}\n\n.ui.checkbox label:before {\n  border-radius: 20px;\n}\n\n.ui.checkbox label:after {\n  font-size: 12px;\n  top: 1px;\n}\n\n.ui.checkbox input:checked ~ label {\n  color: #3867b1 !important;\n}\n\n.ui.checkbox input:checked ~ label:before {\n  border: 1px solid #3867b1;\n}\n\n.ui.checkbox input:checked ~ label:after {\n  color: #3867b1 !important;\n}\n\n.ui.segment.bg-grey {\n  margin-top: 12px;\n  background: transparent;\n  border: 1px solid #D4D6DC;\n}\n\n.ui.segment.bg-grey .ui.checkbox {\n  padding-bottom: 0px;\n}\n\n.cardDetails {\n  margin-top: 15px;\n}\n\n.spacing {\n  padding-left: 22px;\n  padding-right: 22px;\n}\n\n.ui.fitted.divider {\n  margin: 30px 0px;\n}\n\n.ui.primary.button.brand_buttons {\n  background: rgba(67, 122, 218, 0.05) !important;\n  border: 1px dashed #437ADA !important;\n  color: #437ADA;\n  box-shadow: none !important;\n}\n\n.ui.primary.button.brand_buttons i.icon {\n  color: #437ADA;\n}\n\n.ui.primary.button.add_btn {\n  border: 1px solid #437ADA;\n  box-sizing: border-box;\n  border-radius: 7.24448px !important;\n  background: transparent !important;\n  color: #437ADA !important;\n  box-shadow: none !important;\n  margin-top: 22px;\n  width: auto !important;\n  min-width: auto;\n}\n\n.ui.primary.button.add_btn.reset {\n  border: 1px solid #4F4F4F;\n  color: #4F4F4F !important;\n}\n\n.notes-section textarea {\n  min-height: 60px;\n  height: auto !important;\n}\n\n.ui.transparent.margin-right-20 {\n  display: block;\n  margin-bottom: 10px;\n}\n\n.ui.grid.card-section {\n  width: 100%;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n  margin-left: 8px;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 160px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 10px;\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: 0px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.pos_btn-panel.spacing button {\n  position: absolute;\n  right: 0px;\n  bottom: -40px;\n}\n\n.ui.clearing.segment {\n  margin: 24px !important;\n  background: none !important;\n}\n\n.tab_margin {\n  margin: 8px !important;\n  padding: 12px !important;\n}\n\n.ui.form .disabled.field, .ui.form .disabled.fields .field, .ui.form .field :disabled {\n  border: 1px solid rgba(159, 162, 167, 0.2) !important;\n}\n\n@media (max-width: 1200px) and (min-width: 1024px) {\n  .ui.grid .gridstyle {\n    width: 100% !important;\n  }\n}\n\n@media (max-width: 1024px) and (min-width: 768px) {\n  .ui.grid .gridstyle {\n    width: 100% !important;\n  }\n}\n\n@media (max-width: 1024px) and (min-width: 767px) {\n  .ui.grid .fare {\n    width: 71% !important;\n  }\n}\n\n@media (max-width: 768px) {\n  .ui.grid .fare {\n    width: 100% !important;\n  }\n\n  .tab1 {\n    padding-right: 55px;\n  }\n\n  .ui.clearing.segment .branch1 {\n    float: left;\n  }\n}\n\n@media (max-width: 1009px) and (min-width: 808px) {\n  .ui.form .four.wide.field {\n    width: 33% !important;\n  }\n}\n\n@media (max-width: 807px) and (min-width: 768px) {\n  .ui.form .four.wide.field {\n    width: 50% !important;\n  }\n  .ui.form .eight.wide.field .fare1 {\n    width: 100% !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .ui.grid .gridstyle {\n    width: 100% !important;\n  }\n  .ui.grid .gridstyle1 {\n    width: 100% !important;\n  }\n  .ui.grid .eight.wide.column .gridstyle2 {\n    width: 100% !important;\n  }\n  .ui.grid .gridstyle3 {\n    width: 100% !important;\n  }\n  .ui.grid .gridstyle4 {\n    width: 100% !important;\n  }\n}\n\n@media (max-width: 440px) and (min-width: 320px) {\n  .ui.form .nine.wide.field {\n    display: block;\n    width: 100% !important;\n  }\n  .ui.form .seven.wide.field {\n    display: block;\n    width: 100% !important;\n  }\n}\n\n@media (max-width: 440px) and (min-width: 320px) {\n  .ui.grid .fare {\n    width: 100% !important;\n  }\n}\n\n@media (max-width: 425px) {\n  .ui.clearing.segment .branch2 {\n    display: block;\n    width: 100% !important;\n    float: none;\n    margin-left: 0px !important;\n    margin-bottom: 16px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Bvcy9wb3MtYmFzaWMtZWRpdC9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHBvc1xccG9zLWJhc2ljLWVkaXRcXHBvcy1iYXNpYy1lZGl0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcG9zL3Bvcy1iYXNpYy1lZGl0L3Bvcy1iYXNpYy1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUNDSjs7QURFQTtFQUNJLHNDQUFBO0FDQ0o7O0FERUE7RUFDSSwwQkFBQTtBQ0NKOztBREVBO0VBQ0ksU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLGtDQUFBO0VBQ0Esd0NBQUE7QUNDSjs7QURFQTtFQUNJLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQ0NKOztBREVBO0VBQ0ksNENBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQ0NKOztBREVBOztFQUVJLGtCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTs7RUFFSSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0NKOztBRFNBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDZDQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FDTko7O0FEVUE7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0NBQUE7QUNQSjs7QURVQTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1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Q0Usc0JBQUE7RUMxQ1I7O0VENkNFO0lBQ0ksbUJBQUE7RUMxQ047O0VENkNNO0lBQ0ksV0FBQTtFQzFDVjtBQUNGOztBRDhDQTtFQUVBO0lBQ0EscUJBQUE7RUM3Q0U7QUFDRjs7QURpREE7RUFFQTtJQUNBLHFCQUFBO0VDaERFO0VEbURVO0lBQ0Usc0JBQUE7RUNqRFo7QUFDRjs7QURzREE7RUFFQTtJQUNJLHNCQUFBO0VDckRGO0VEdURGO0lBQ0ksc0JBQUE7RUNyREY7RUR3REM7SUFDSSxzQkFBQTtFQ3RETDtFRHlERjtJQUNJLHNCQUFBO0VDdkRGO0VEeURGO0lBQ0ksc0JBQUE7RUN2REY7QUFDRjs7QUQyREE7RUFFQTtJQUNJLGNBQUE7SUFDQSxzQkFBQTtFQzFERjtFRDRERjtJQUNJLGNBQUE7SUFDQSxzQkFBQTtFQzFERjtBQUNGOztBRDhEQTtFQUVZO0lBQ0Usc0JBQUE7RUM3RFo7QUFDRjs7QURrRUE7RUFFUTtJQUNJLGNBQUE7SUFDQSxzQkFBQTtJQUNBLFdBQUE7SUFDQSwyQkFBQTtJQUNBLDhCQUFBO0VDakVWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcG9zL3Bvcy1iYXNpYy1lZGl0L3Bvcy1iYXNpYy1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGVyIHtcclxuICAgIG1hcmdpbjogMHB4IDIwcHggMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5hbWV4Q2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZhcmVQcmVmZXJlbmNlc3RhYmxlIHtcclxuICAgIGJvcmRlci10b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub3V0ZXJfX2FkZC1wb3NfX3RpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLm1lbnU+Lml0ZW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI4NTcxNDI5cmVtIDAgMCAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLmJvdHRvbS5hdHRhY2hlZC5hY3RpdmUudGFiLnNlZ21lbnQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbn1cclxuXHJcbi50YWIuc2VnbWVudCB7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuaHIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjRTBFMEUwO1xyXG59XHJcblxyXG4udG91ckNvZGVfYnRuLFxyXG4uYWRkVG9nZ19idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcclxufVxyXG5cclxuLnRvdXJDb2RlX3RleHQsXHJcbi5hZGRUb2dnX3RleHQge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBib3R0b206IDI4cHg7XHJcbiAgICBsZWZ0OiA5cHg7XHJcbn1cclxuXHJcbi8vIC5vdXRlci1mb3JtLFxyXG4vLyAub3V0ZXJfY29ycEZvcm0ge1xyXG4vLyAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICAgIGJvcmRlcjogMC41cHggc29saWQgIzgwODA4MDtcclxuLy8gICAgIG1hcmdpbjogNDVweCAzMnB4IDExMXB4IDI1cHg7XHJcbi8vIH1cclxuLnVpLmZvcm0ucG9zX2Jhc2ljX2Zvcm0ge1xyXG4gICAgcGFkZGluZzogMjRweCAwcHggMHB4IDBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDYsIDQwLCA5OCwgMC4wNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0Ljk2MTQxcHg7XHJcbiAgICBtYXJnaW46MjRweDtcclxuICAgIC8vIG1heC13aWR0aDogMTIwMHB4O1xyXG59XHJcblxyXG5kaXYudXBsb2FkIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTIzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjODA4MDgwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjI1cHggMC4xcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbmRpdi51cGxvYWQgaW5wdXQge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMjNweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWxlX2Nob29zZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAyN3B4O1xyXG4gICAgYm90dG9tOiA2cHg7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi51cGxvYWRpbkltZ19idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcclxufVxyXG5cclxuLnVwbG9hZGluSW1nX2J0bl9fdGV4dCxcclxuLnNhdmUtbmV4dF9idG5fX3RleHQge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi5maWxlX3RhYmxlX19pbWcge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZWFmYjVlO1xyXG59XHJcblxyXG4uc2F2ZS1uZXh0X2J0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnVpLnBvaW50aW5nLnNlY29uZGFyeS5tZW51IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLml0ZW0uc3RlcHBlcl9fcHJvZ3Jlc3Mge1xyXG4gICAgd2lkdGg6IDE2N3B4O1xyXG59XHJcblxyXG4udGFiLnNlZ21lbnQuc3RlcHBlcl9fc2VnbWVudC1vdXRsaW5lIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5vZmZpY2UtaW5mb19pY29uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiA4NXB4O1xyXG59XHJcblxyXG4ucG9zX2FjY2Vzcy1yaWdodHMge1xyXG4gICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTJweDtcclxufVxyXG5cclxuLmNhbmNlbF9idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRGNEY0RjtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmNhbmNlbF9idG5fX3RleHQge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pc3N1ZV9kYXRlIHtcclxuICAgIHRleHQtaW5kZW50OiAxN3B4O1xyXG59XHJcblxyXG4ud2lkZS5maWVsZC5zYWxlX2NoZWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5hc3NpZ25fYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5hc3NpZ25fYnRuX190ZXh0IHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uY2lyY2xlSWNvbiB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRDgwMUM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuXHJcbi5wbHVzSWNvbiB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1jb250ZW50IHtcclxuICAgIGhlaWdodDogMTlweDtcclxuICAgIHdpZHRoOiAxOXB4O1xyXG4gICAgY29sb3I6ICNDOEM4Qzg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhDOEM4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LXN0ZXAtaGVhZGVyOmhvdmVyLFxyXG4gOjpuZy1kZWVwLmNkay1rZXlib2FyZC1mb2N1c2VkLFxyXG4gOjpuZy1kZWVwLmNkay1wcm9ncmFtLWZvY3VzZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMjQpO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24tc3RhdGUtbnVtYmVyLm1hdC1zdGVwLWljb24ubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzg2N0IxO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAubmctc3Rhci1pbnNlcnRlZCB7XHJcbiAgICAgICAgY29sb3I6ICMzODY3QjE7XHJcbiAgICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5uZy1zdGFyLWluc2VydGVkIHtcclxuICAgIHBhZGRpbmc6IDAgNnB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIC8vIHdpZHRoOiA0MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMHB4IDMwJTtcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLFxyXG4gOjpuZy1kZWVwLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcclxuIDo6bmctZGVlcC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1zdGVwLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjMzg2N2IxO1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LWhvcml6b250YWwtY29udGVudC1jb250YWluZXIge1xyXG4gICAgLy8gYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbn1cclxuXHJcbi5wb3NfYnRuLXBhbmVsIHtcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIHJpZ2h0OiA2OHB4O1xyXG4gICAgLy8gYm90dG9tOiA5N3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgLnNlY29uZGFyeSB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDEwNC44N3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0RjRGO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIH1cclxuICAgIC5wcmltYXJ5IHtcclxuICAgICAgICAvLyB3aWR0aDogMTI0Ljg3cHg7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcclxuICAgICAgICAvLyBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSkgIWltcG9ydGFudDtcclxuICAgICAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWNiY2QgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHRyYW5zcGFyZW50IGluc2V0LCAwIDAgMCAwIHJnYmEoMzQsIDM2LCAzOCwgLjE1KSBpbnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuOCkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWdtZW50IHAge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5iZy1ncmV5IHtcclxuICAgIGJhY2tncm91bmQ6ICNkMWRhZGU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNoaXAtbGlzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkIGdyZXkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1jaGlwLWlucHV0IHtcclxuICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXRmaWxlIHtcclxuICAgIHdpZHRoOiAwLjFweDtcclxuICAgIGhlaWdodDogMC4xcHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4udHJhbnNwYXJlbnQsXHJcbi50cmFuc3BhcmVudDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hcmdpbi1yaWdodC0yMCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5tYXJnaW4tYm90dG9tLTE1IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5kaW0tZm9vdGVyIHtcclxuICAgIGNvbG9yOiAjYzNjM2MzO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBpbmhlcml0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMjBweDtcclxuICAgIGxlZnQ6IDI0cHg7XHJcbn1cclxuXHJcbi5tYXQtY2hpcCB7XHJcbiAgICBtYXJnaW46IDBweCA0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJyYW5kaW5nLXBpYyB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLm1hdC1zdGFuZGFyZC1jaGlwIC5tYXQtY2hpcC1yZW1vdmUubWF0LWljb24ge1xyXG4gICAgd2lkdGg6IDEzcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20tY29sdW1ucyAuZmllbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udXBsb2FkZWQtZG9jdW1lbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi52YWxpZGF0aW9ucyB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG59XHJcblxyXG4udW5saW1pdGVkIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxufVxyXG5cclxuLnVpLmZvcm0gLmZpZWxkPmxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgIGNvbG9yOiAjMTgxQjIwO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDhweDtcclxufVxyXG5cclxuLnVpLmZvcm0gLnRocmVlLndpZGUuZmllbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLmlubGluZS1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLmhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG4gICAgJi5ub3RlLWhlYWQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICB9XHJcbiAgICAmLmJhc2ljLWluZm8taGVhZGVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucG9zX2Jhc2ljX2Zvcm0ge1xyXG4gICAgLnRheC1zZWN0aW9uIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbiAgICAudGF4X2Jsb2NrIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRDRENkRDO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUuMTIxNTVweDtcclxuICAgICAgICBtaW4taGVpZ2h0OiAzOTBweDtcclxuICAgICAgICAvLyBtYXgtaGVpZ2h0OiAzOTBweDtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDI0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtY2hpcC1saXN0LXdyYXBwZXIge1xyXG4gICAgbWFyZ2luOiAwcHggIWltcG9ydGFudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgdG9wOiAtMTZweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGF5bWVudC1oZWFkZXIge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udWkuY2hlY2tib3gge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHRvcDogMXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlucHV0OmNoZWNrZWR+bGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiAjMzg2N2IxICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzg2N2IxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgY29sb3I6ICMzODY3YjEgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS5zZWdtZW50LmJnLWdyZXkge1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0Q0RDZEQztcclxuICAgIC51aS5jaGVja2JveCB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmREZXRhaWxzIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5zcGFjaW5nIHtcclxuICAgIHBhZGRpbmctbGVmdDogMjJweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi51aS5maXR0ZWQuZGl2aWRlciB7XHJcbiAgICBtYXJnaW46IDMwcHggMHB4O1xyXG59XHJcblxyXG4udWkucHJpbWFyeS5idXR0b24uYnJhbmRfYnV0dG9ucyB7XHJcbiAgICAvLyBoZWlnaHQ6IDgycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDY3LCAxMjIsIDIxOCwgMC4wNSkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjNDM3QURBICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzQzN0FEQTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC8vIHBhZGRpbmctdG9wOiAxOHB4O1xyXG4gICAgLy8gbWluLXdpZHRoOiBhdXRvO1xyXG4gICAgaS5pY29uIHtcclxuICAgICAgICAvLyBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAvLyBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjNDM3QURBO1xyXG4gICAgfVxyXG59XHJcblxyXG4udWkucHJpbWFyeS5idXR0b24uYWRkX2J0biB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDM3QURBO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDcuMjQ0NDhweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNDM3QURBICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIG1pbi13aWR0aDogYXV0bztcclxufVxyXG5cclxuLnVpLnByaW1hcnkuYnV0dG9uLmFkZF9idG4ucmVzZXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzRGNEY0RjtcclxuICAgIGNvbG9yOiAjNEY0RjRGICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ub3Rlcy1zZWN0aW9uIHtcclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4udWkudHJhbnNwYXJlbnQubWFyZ2luLXJpZ2h0LTIwIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnVpLmdyaWQuY2FyZC1zZWN0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udG9vbHRpcCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvLyBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3R0b206IDEwMCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLnBvc19idG4tcGFuZWwuc3BhY2luZyB7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgIGJvdHRvbTogLTQwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS5jbGVhcmluZy5zZWdtZW50e1xyXG4gICAgbWFyZ2luOjI0cHggIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRhYl9tYXJnaW57XHJcbiAgICBtYXJnaW46IDhweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzoxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51aS5mb3JtIC5kaXNhYmxlZC5maWVsZCwgLnVpLmZvcm0gLmRpc2FibGVkLmZpZWxkcyAuZmllbGQsIC51aS5mb3JtIC5maWVsZCA6ZGlzYWJsZWR7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHJnYmEoMTU5LCAxNjIsIDE2NywgMC4yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkgYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgLnVpLmdyaWR7XHJcbiAgICAgIC5ncmlkc3R5bGV7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjEwMjRweCkgYW5kIChtaW4td2lkdGg6NzY4cHgpIHtcclxuLnVpLmdyaWR7XHJcbi5ncmlkc3R5bGV7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6MTAyNHB4KSBhbmQgKG1pbi13aWR0aDo3NjdweCl7XHJcbiAgICAudWkuZ3JpZHtcclxuICAgICAgICAuZmFyZXtcclxuICAgICAgICAgIHdpZHRoOiA3MSUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9ICBcclxufSBcclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2OHB4KXtcclxuICAgIC51aS5ncmlke1xyXG4gICAgICAgIC5mYXJle1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9ICBcclxuICAgIC50YWIxe1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6NTVweDtcclxuICAgIH1cclxuICAgIC51aS5jbGVhcmluZy5zZWdtZW50e1xyXG4gICAgICAgIC5icmFuY2gxe1xyXG4gICAgICAgICAgICBmbG9hdDpsZWZ0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiAgIFxyXG5AbWVkaWEobWF4LXdpZHRoOjEwMDlweCkgYW5kIChtaW4td2lkdGg6ODA4cHgpIHtcclxuLnVpLmZvcm0ge1xyXG4uZm91ci53aWRlLmZpZWxkIHtcclxud2lkdGg6IDMzJSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjgwN3B4KSBhbmQgKG1pbi13aWR0aDo3NjhweCkge1xyXG4udWkuZm9ybSB7XHJcbi5mb3VyLndpZGUuZmllbGQge1xyXG53aWR0aDogNTAlIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmVpZ2h0LndpZGUuZmllbGQge1xyXG4gICAgICAgICAgICAuZmFyZTF7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpIHtcclxuLnVpLmdyaWR7XHJcbi5ncmlkc3R5bGV7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi5ncmlkc3R5bGUxe1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4uZWlnaHQud2lkZS5jb2x1bW57XHJcbiAgIC5ncmlkc3R5bGUye1xyXG4gICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgfVxyXG59XHJcbi5ncmlkc3R5bGUze1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4uZ3JpZHN0eWxlNHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgIH1cclxuICAgIH0gICBcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NDQwcHgpIGFuZCAobWluLXdpZHRoOjMyMHB4KSB7XHJcbi51aS5mb3Jte1xyXG4ubmluZS53aWRlLmZpZWxke1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyBcclxufVxyXG4uc2V2ZW4ud2lkZS5maWVsZHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo0NDBweCkgYW5kIChtaW4td2lkdGg6MzIwcHgpe1xyXG4gICAgLnVpLmdyaWR7XHJcbiAgICAgICAgICAgIC5mYXJle1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjQyNXB4KSB7XHJcbiAgICAudWkuY2xlYXJpbmcuc2VnbWVudHtcclxuICAgICAgICAuYnJhbmNoMntcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIub3V0ZXIge1xuICBtYXJnaW46IDBweCAyMHB4IDBweCAxNXB4O1xufVxuXG4uYW1leENhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm8gIWltcG9ydGFudDtcbn1cblxuLmZhcmVQcmVmZXJlbmNlc3RhYmxlIHtcbiAgYm9yZGVyLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5vdXRlcl9fYWRkLXBvc19fdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi51aS50b3AuYXR0YWNoZWQubWVudSA+IC5pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yODU3MTQyOXJlbSAwIDAgMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLnVpLmJvdHRvbS5hdHRhY2hlZC5hY3RpdmUudGFiLnNlZ21lbnQge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XG59XG5cbi50YWIuc2VnbWVudCB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG5ociB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNFMEUwRTA7XG59XG5cbi50b3VyQ29kZV9idG4sXG4uYWRkVG9nZ19idG4ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XG59XG5cbi50b3VyQ29kZV90ZXh0LFxuLmFkZFRvZ2dfdGV4dCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMThweDtcbiAgYm90dG9tOiAyOHB4O1xuICBsZWZ0OiA5cHg7XG59XG5cbi51aS5mb3JtLnBvc19iYXNpY19mb3JtIHtcbiAgcGFkZGluZzogMjRweCAwcHggMHB4IDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSg2LCA0MCwgOTgsIDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiA0Ljk2MTQxcHg7XG4gIG1hcmdpbjogMjRweDtcbn1cblxuZGl2LnVwbG9hZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDEyM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJvcmRlcjogMC41cHggc29saWQgIzgwODA4MDtcbiAgYm94LXNoYWRvdzogMCAwLjI1cHggMC4xcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbmRpdi51cGxvYWQgaW5wdXQge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB3aWR0aDogMTIzcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4uZmlsZV9jaG9vc2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDI3cHg7XG4gIGJvdHRvbTogNnB4O1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBsaW5lLWhlaWdodDogMTBweDtcbn1cblxuLnVwbG9hZGluSW1nX2J0biB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbn1cblxuLnVwbG9hZGluSW1nX2J0bl9fdGV4dCxcbi5zYXZlLW5leHRfYnRuX190ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xufVxuXG4uZmlsZV90YWJsZV9faW1nIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlYWZiNWU7XG59XG5cbi5zYXZlLW5leHRfYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi51aS5wb2ludGluZy5zZWNvbmRhcnkubWVudSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLml0ZW0uc3RlcHBlcl9fcHJvZ3Jlc3Mge1xuICB3aWR0aDogMTY3cHg7XG59XG5cbi50YWIuc2VnbWVudC5zdGVwcGVyX19zZWdtZW50LW91dGxpbmUge1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5vZmZpY2UtaW5mb19pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiA4NXB4O1xufVxuXG4ucG9zX2FjY2Vzcy1yaWdodHMge1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG5cbi5jYW5jZWxfYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0RjRGO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5jYW5jZWxfYnRuX190ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pc3N1ZV9kYXRlIHtcbiAgdGV4dC1pbmRlbnQ6IDE3cHg7XG59XG5cbi53aWRlLmZpZWxkLnNhbGVfY2hlY2sge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYXNzaWduX2J0biB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uYXNzaWduX2J0bl9fdGV4dCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbn1cblxuLmNpcmNsZUljb24ge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQ4MDFDO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4ucGx1c0ljb24ge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tdG9wOiAtM3B4O1xufVxuXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1jb250ZW50IHtcbiAgaGVpZ2h0OiAxOXB4O1xuICB3aWR0aDogMTlweDtcbiAgY29sb3I6ICNDOEM4Qzg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDOEM4Qzg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuOjpuZy1kZWVwLm1hdC1zdGVwLWhlYWRlcjpob3Zlcixcbjo6bmctZGVlcC5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbjo6bmctZGVlcC5jZGstcHJvZ3JhbS1mb2N1c2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24ge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1udW1iZXIubWF0LXN0ZXAtaWNvbi5tYXQtc3RlcC1pY29uLXNlbGVjdGVkIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzM4NjdCMTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1udW1iZXIubWF0LXN0ZXAtaWNvbi5tYXQtc3RlcC1pY29uLXNlbGVjdGVkIC5uZy1zdGFyLWluc2VydGVkIHtcbiAgY29sb3I6ICMzODY3QjE7XG59XG5cbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuOjpuZy1kZWVwLm5nLXN0YXItaW5zZXJ0ZWQge1xuICBwYWRkaW5nOiAwIDZweDtcbn1cblxuOjpuZy1kZWVwLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4IDMwJTtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cblxuOjpuZy1kZWVwLm1hdC1pY29uIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1zdGVwLWxhYmVsIHtcbiAgY29sb3I6ICMzODY3YjE7XG59XG5cbjo6bmctZGVlcC5tYXQtaG9yaXpvbnRhbC1jb250ZW50LWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5wb3NfYnRuLXBhbmVsIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4ucG9zX2J0bi1wYW5lbCAuc2Vjb25kYXJ5IHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0RjRGO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4ucG9zX2J0bi1wYW5lbCAucHJpbWFyeSB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XG4gIG1pbi13aWR0aDogYXV0bztcbn1cbi5wb3NfYnRuLXBhbmVsIC5wcmltYXJ5OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NhY2JjZCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggdHJhbnNwYXJlbnQgaW5zZXQsIDAgMCAwIDAgcmdiYSgzNCwgMzYsIDM4LCAwLjE1KSBpbnNldCAhaW1wb3J0YW50O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpICFpbXBvcnRhbnQ7XG59XG5cbi5zZWdtZW50IHAge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmJnLWdyZXkge1xuICBiYWNrZ3JvdW5kOiAjZDFkYWRlO1xufVxuXG4uZXhhbXBsZS1jaGlwLWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwcHggc29saWQgZ3JleSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWNoaXAtaW5wdXQge1xuICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG4uaW5wdXRmaWxlIHtcbiAgd2lkdGg6IDAuMXB4O1xuICBoZWlnaHQ6IDAuMXB4O1xuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4udHJhbnNwYXJlbnQsXG4udHJhbnNwYXJlbnQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWFyZ2luLXJpZ2h0LTIwIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ubWFyZ2luLWJvdHRvbS0xNSB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5kaW0tZm9vdGVyIHtcbiAgY29sb3I6ICNjM2MzYzM7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGN1cnNvcjogaW5oZXJpdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0yMHB4O1xuICBsZWZ0OiAyNHB4O1xufVxuXG4ubWF0LWNoaXAge1xuICBtYXJnaW46IDBweCA0cHggIWltcG9ydGFudDtcbn1cblxuLmJyYW5kaW5nLXBpYyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTUwcHg7XG59XG5cbi5tYXQtc3RhbmRhcmQtY2hpcCAubWF0LWNoaXAtcmVtb3ZlLm1hdC1pY29uIHtcbiAgd2lkdGg6IDEzcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufVxuXG4uY3VzdG9tLWNvbHVtbnMgLmZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xufVxuXG4udXBsb2FkZWQtZG9jdW1lbnQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnZhbGlkYXRpb25zIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xufVxuXG4udW5saW1pdGVkIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IHgtc21hbGw7XG59XG5cbi51aS5mb3JtIC5maWVsZCA+IGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgY29sb3I6ICMxODFCMjA7XG4gIG1hcmdpbjogMHB4IDBweCA4cHg7XG59XG5cbi51aS5mb3JtIC50aHJlZS53aWRlLmZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLmlubGluZS1sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xufVxuXG4udWkuaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbi51aS5oZWFkZXIubm90ZS1oZWFkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi51aS5oZWFkZXIuYmFzaWMtaW5mby1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucG9zX2Jhc2ljX2Zvcm0gLnRheC1zZWN0aW9uIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLnBvc19iYXNpY19mb3JtIC50YXhfYmxvY2sge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDRENkRDO1xuICBib3JkZXItcmFkaXVzOiA1LjEyMTU1cHg7XG4gIG1pbi1oZWlnaHQ6IDM5MHB4O1xufVxuLnBvc19iYXNpY19mb3JtIC50YXhfYmxvY2sgcCB7XG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuOjpuZy1kZWVwLm1hdC1jaGlwLWxpc3Qtd3JhcHBlciB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICB0b3A6IC0xNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wYXltZW50LWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcbn1cblxuLnVpLmNoZWNrYm94IHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIG1hcmdpbjogNXB4O1xufVxuLnVpLmNoZWNrYm94IGxhYmVsOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4udWkuY2hlY2tib3ggbGFiZWw6YWZ0ZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRvcDogMXB4O1xufVxuLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbCB7XG4gIGNvbG9yOiAjMzg2N2IxICFpbXBvcnRhbnQ7XG59XG4udWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmJlZm9yZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzODY3YjE7XG59XG4udWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmFmdGVyIHtcbiAgY29sb3I6ICMzODY3YjEgIWltcG9ydGFudDtcbn1cblxuLnVpLnNlZ21lbnQuYmctZ3JleSB7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDRENkRDO1xufVxuLnVpLnNlZ21lbnQuYmctZ3JleSAudWkuY2hlY2tib3gge1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4uY2FyZERldGFpbHMge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uc3BhY2luZyB7XG4gIHBhZGRpbmctbGVmdDogMjJweDtcbiAgcGFkZGluZy1yaWdodDogMjJweDtcbn1cblxuLnVpLmZpdHRlZC5kaXZpZGVyIHtcbiAgbWFyZ2luOiAzMHB4IDBweDtcbn1cblxuLnVpLnByaW1hcnkuYnV0dG9uLmJyYW5kX2J1dHRvbnMge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDY3LCAxMjIsIDIxOCwgMC4wNSkgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICM0MzdBREEgIWltcG9ydGFudDtcbiAgY29sb3I6ICM0MzdBREE7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbi51aS5wcmltYXJ5LmJ1dHRvbi5icmFuZF9idXR0b25zIGkuaWNvbiB7XG4gIGNvbG9yOiAjNDM3QURBO1xufVxuXG4udWkucHJpbWFyeS5idXR0b24uYWRkX2J0biB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0MzdBREE7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDcuMjQ0NDhweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzQzN0FEQSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDIycHg7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogYXV0bztcbn1cblxuLnVpLnByaW1hcnkuYnV0dG9uLmFkZF9idG4ucmVzZXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNEY0RjRGO1xuICBjb2xvcjogIzRGNEY0RiAhaW1wb3J0YW50O1xufVxuXG4ubm90ZXMtc2VjdGlvbiB0ZXh0YXJlYSB7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xufVxuXG4udWkudHJhbnNwYXJlbnQubWFyZ2luLXJpZ2h0LTIwIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi51aS5ncmlkLmNhcmQtc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpZHRoOiAxNjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGJvdHRvbTogMTAwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xufVxuXG4ucG9zX2J0bi1wYW5lbC5zcGFjaW5nIGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiAtNDBweDtcbn1cblxuLnVpLmNsZWFyaW5nLnNlZ21lbnQge1xuICBtYXJnaW46IDI0cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4udGFiX21hcmdpbiB7XG4gIG1hcmdpbjogOHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEycHggIWltcG9ydGFudDtcbn1cblxuLnVpLmZvcm0gLmRpc2FibGVkLmZpZWxkLCAudWkuZm9ybSAuZGlzYWJsZWQuZmllbGRzIC5maWVsZCwgLnVpLmZvcm0gLmZpZWxkIDpkaXNhYmxlZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTU5LCAxNjIsIDE2NywgMC4yKSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gIC51aS5ncmlkIC5ncmlkc3R5bGUge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAudWkuZ3JpZCAuZ3JpZHN0eWxlIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSBhbmQgKG1pbi13aWR0aDogNzY3cHgpIHtcbiAgLnVpLmdyaWQgLmZhcmUge1xuICAgIHdpZHRoOiA3MSUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC51aS5ncmlkIC5mYXJlIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnRhYjEge1xuICAgIHBhZGRpbmctcmlnaHQ6IDU1cHg7XG4gIH1cblxuICAudWkuY2xlYXJpbmcuc2VnbWVudCAuYnJhbmNoMSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDA5cHgpIGFuZCAobWluLXdpZHRoOiA4MDhweCkge1xuICAudWkuZm9ybSAuZm91ci53aWRlLmZpZWxkIHtcbiAgICB3aWR0aDogMzMlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDdweCkgYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC51aS5mb3JtIC5mb3VyLndpZGUuZmllbGQge1xuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgfVxuICAudWkuZm9ybSAuZWlnaHQud2lkZS5maWVsZCAuZmFyZTEge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAudWkuZ3JpZCAuZ3JpZHN0eWxlIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC51aS5ncmlkIC5ncmlkc3R5bGUxIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC51aS5ncmlkIC5laWdodC53aWRlLmNvbHVtbiAuZ3JpZHN0eWxlMiB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICAudWkuZ3JpZCAuZ3JpZHN0eWxlMyB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICAudWkuZ3JpZCAuZ3JpZHN0eWxlNCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ0MHB4KSBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgLnVpLmZvcm0gLm5pbmUud2lkZS5maWVsZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICAudWkuZm9ybSAuc2V2ZW4ud2lkZS5maWVsZCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ0MHB4KSBhbmQgKG1pbi13aWR0aDogMzIwcHgpIHtcbiAgLnVpLmdyaWQgLmZhcmUge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0MjVweCkge1xuICAudWkuY2xlYXJpbmcuc2VnbWVudCAuYnJhbmNoMiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTZweCAhaW1wb3J0YW50O1xuICB9XG59Il19 */";
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

    var PosBasicEditComponent =
    /*#__PURE__*/
    function () {
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
            agent_code: [''],
            branch_code: [''],
            contact: [''],
            credit_limit: [''],
            tax_number: [''],
            numberOfUsers: [''],
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
              tourOperatorDeffered: [false],
              bulkContract: [false],
              marine: [false],
              tourOperatorSemiDeffered: [false],
              privateAdult: [false],
              humanitarian: [false]
            })
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
          $(document).ready(function () {
            $('.ui.dropdown').dropdown();
            $('.ui.dropdown').dropdown('refresh');
            $('.ui.checkbox').checkbox();
            $('.ui.dropdownThree').dropdown();
            $(document).ready(function () {
              this._globals = localStorage.getItem('_globals');
              var token = JSON.parse(this._globals).token;
              $('.dropdownThree').dropdown({
                type: 'category',
                minCharacters: 2,
                maxCharacters: 3,
                responseAsync: true,
                apiSettings: {
                  url: 'http://localhost:5000/api/get-airports-cache/{query}',
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
          });
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
              console.log("pos info::::::::", _this23.posInfo);
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

              console.log("usersss????", _this23.posInfo.numberOfUsers);

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
                numberOfUsers: '444444',
                iata_no: _this23.posInfo.iata_no,
                domestictTaxCode: _this23.posInfo.domestictTaxCode,
                domestictTaxPercentage: _this23.posInfo.domestictTaxPercentage,
                domestictTaxCurrency: _this23.posInfo.domestictTaxCurrency,
                domestictTaxAirport: _this23.posInfo.domestictTaxAirport ? _this23.posInfo.domestictTaxAirport.split(',') : '',
                internationalTaxPercentage: _this23.posInfo.internationalTaxPercentage,
                nonAirlineTax: _this23.posInfo.nonAirlineTax,
                queues: _this23.posInfo.queue_service ? JSON.parse(_this23.posInfo.queue_service) : {},
                amexCardDetails: _this23.posInfo.amex_card ? JSON.parse(_this23.posInfo.amex_card) : {},
                negoFares: _this23.posInfo.pos_negofares ? JSON.parse(_this23.posInfo.pos_negofares) : {},
                terms_conditions: _this23.posInfo.terms_conditions
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
        key: "loadAirlineRBD",
        value: function loadAirlineRBD() {
          this.router.navigate(['/pos/airline-rbd/', this.organisation_ID]);
        }
      }, {
        key: "loadSuppliers",
        value: function loadSuppliers() {
          this.router.navigate(['/pos/active-suppliers/', this.organisation_ID]);
        }
      }, {
        key: "loadMonthlyTarget",
        value: function loadMonthlyTarget() {
          this.router.navigate(['/pos/monthly-target/', this.organisation_ID]);
        }
      }, {
        key: "loadBrandingInfo",
        value: function loadBrandingInfo() {
          this.router.navigate(['/pos/branding-info/', this.organisation_ID]);
        }
      }, {
        key: "loadOfficeAddressInfo",
        value: function loadOfficeAddressInfo() {
          this.router.navigate(['/pos/office-address/', this.organisation_ID]);
        }
      }, {
        key: "loadBranchInfo",
        value: function loadBranchInfo() {
          this.router.navigate(['/pos/branch-info/', this.organisation_ID]);
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/pos-basic-edit/pos-basic-edit.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pos-basic-edit.component.scss */
      "./src/app/layout/pos/pos-basic-edit/pos-basic-edit.component.scss")).default]
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


    __webpack_exports__["default"] = ".stepper-grid {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n.stepper-grid .stepper-grid_step {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  opacity: 0.6;\n  cursor: pointer;\n}\n.stepper-grid .stepper-grid_step._active {\n  opacity: 1;\n  -webkit-transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div {\n  background-color: #062862;\n  border: 0;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div div.image {\n  background-color: white;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div:hover {\n  border: 2px solid #A6B1C3;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon label {\n  border: 0;\n  background-color: #062862;\n  color: white;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-border hr {\n  border-bottom: 2px solid #062862;\n}\n.stepper-grid .stepper-grid_step._activated {\n  opacity: 1;\n  -webkit-transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div {\n  background-color: #437ADA;\n  border: 0;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div div.image {\n  background-color: white;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div:hover {\n  border: 2px solid #A6B1C3;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon label {\n  border: 0;\n  background-color: #437ADA;\n  color: white;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-border hr {\n  border-bottom: 2px solid #437ADA;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div {\n  background-color: transparent;\n  border: 2px solid #A6B1C3;\n  color: white;\n  width: 45px;\n  height: 45px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 50%;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon label {\n  width: 100px;\n  height: auto;\n  line-height: 24px;\n  text-align: center;\n  background-color: transparent;\n  border: 2px solid #A6B1C3;\n  margin-top: 15px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 600 !important;\n  font-size: 13px;\n  color: #A6B1C3;\n  border-radius: 8px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon label._last {\n  width: 150px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-border {\n  width: 100%;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-border hr {\n  margin-top: -24px;\n  width: 100%;\n  height: 2px;\n  background: none;\n  border-bottom: 2px solid #A6B1C3;\n}\n.stepper-grid-content {\n  display: none;\n}\n.stepper-grid-content._active {\n  display: block;\n}\n.outer-basic {\n  padding-bottom: 5px !important;\n}\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n  padding: 0px !important;\n}\n.outer-basic h3.booking-header {\n  margin: 0;\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n  margin-bottom: 25px;\n}\n.form-inner {\n  padding: 0px;\n}\nlabel {\n  color: rgba(6, 40, 98, 0.5) !important;\n  font-weight: 600 !important;\n  text-transform: uppercase;\n}\n.trip-fields input {\n  background-color: #fff !important;\n  border-radius: 5.12155px !important;\n}\n.trip-fields input::-webkit-input-placeholder {\n  font-weight: 600 !important;\n  color: #062862;\n  font-size: 13px !important;\n}\n.trip-fields input:-moz-placeholder {\n  font-weight: 600 !important;\n  color: #062862;\n  font-size: 13px !important;\n}\n.trip-fields input::-moz-placeholder {\n  font-weight: 600 !important;\n  color: #062862;\n  font-size: 13px !important;\n}\n.trip-fields input:-ms-input-placeholder {\n  font-weight: 600 !important;\n  color: #062862;\n  font-size: 13px !important;\n}\n.bookings_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n.bookings_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n.bookings_pickers .input .icon {\n  opacity: 1;\n  z-index: 100;\n}\n.bookings_pickers .input .icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n.bookings_pickers .input .icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n.bookings_pickers .input .search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.bookings_pickers .input .search.dropdown .search {\n  margin-left: 42px !important;\n}\n.bookings_pickers .input .search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n.bookings_btn-panel {\n  padding: 20px 2px;\n}\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #e0e0e0;\n}\ntd {\n  color: #4f4f4f;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 10px;\n  line-height: 11px;\n  text-align: center;\n}\ndiv .confirm {\n  width: 63px;\n}\ndiv .confirm {\n  width: 63px;\n}\ndiv .recConfirm {\n  height: 18px;\n  width: 62px;\n  background-color: #c4f0b4;\n  color: #426f32;\n  font-size: 11px;\n  text-align: center;\n  line-height: 18px;\n  border-radius: 6px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 600;\n}\ndiv .recConfirm.hold {\n  background-color: #f5e29b;\n  color: #6a5b1e;\n}\ndiv .recConfirm.void {\n  background-color: #e6e6e6;\n  color: #606060;\n}\ndiv .recConfirm.cancel {\n  background-color: #ff957c;\n  color: #7b301e;\n}\ndiv .recConfirm.refund {\n  background-color: #77acff;\n  color: #082e6a;\n}\ndiv .recConfirm.failed {\n  background-color: #ff9595;\n  color: #660a0a;\n}\ndiv .tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\ndiv .field input::-webkit-input-placeholder {\n  font-size: 12px;\n}\ndiv .field input::-moz-placeholder {\n  font-size: 12px;\n}\ndiv .field input::-ms-input-placeholder {\n  font-size: 12px;\n}\ndiv .field input::placeholder {\n  font-size: 12px;\n}\ndiv .dropdown .text {\n  font-size: 12px;\n}\ndiv .eye-icon {\n  font-size: 12px;\n  width: 30px;\n  height: auto;\n  border-radius: 6px;\n  display: block;\n}\ndiv .eye-icon:hover {\n  cursor: pointer;\n}\ndiv .b2c-list-user-table__segment-loader {\n  height: 450px;\n  background-color: white !important;\n  border: 0;\n  box-shadow: none;\n}\ndiv .b2c-list-user-table__segment-loader .ui.inverted.dimmer {\n  background-color: white !important;\n}\ndiv .b2c-list-user-table__segment-loader .eye-icon {\n  font-size: 12px;\n  color: #3867b1;\n}\n.ui.segment.b2c-list-user-table__segment-loader {\n  background-color: white;\n  border: 0;\n  box-shadow: none;\n  height: 450px;\n}\n.ui.segment.b2c-list-user-table__segment-loader .ui.active.dimmer {\n  background-color: white !important;\n}\n.download-img {\n  display: inline-block !important;\n  padding-top: 18px;\n  cursor: pointer;\n}\n.download-img .download-img_icon {\n  width: 25px;\n  margin-left: 20px;\n}\n.outer-basic form {\n  background: #fff;\n  padding: 24px;\n  margin: 24px;\n}\n.ui.form .eight.field.bookings_btn-panel {\n  padding: 0px;\n  text-align: right;\n}\n.agent-name-booking {\n  margin: auto 24px !important;\n}\n.agent-name-booking .eight.wide.field {\n  padding: 0px;\n}\n.agent-name-booking .eight.wide.field button {\n  margin-right: 0px;\n}\n@media (max-width: 1440px) {\n  .booking-header.booking_comp {\n    padding: 40px 24px 0px !important;\n  }\n\n  .ui.fluid .outer-basic .outer-basicForm .ui.form .booking-search-panel {\n    width: 92%;\n    padding: 0px;\n  }\n\n  .agent-name-booking {\n    margin: 0px 24px !important;\n  }\n}\n@media (max-width: 1280px) {\n  .booking-header.booking_comp {\n    padding: 40px 20px 0px !important;\n  }\n\n  .ui.fluid .outer-basic .outer-basicForm .ui.form .booking-search-panel {\n    width: 100%;\n    padding: 0px;\n  }\n\n  .agent-name-booking {\n    margin: 0px 20px !important;\n  }\n}\n.icon {\n  opacity: 1;\n  z-index: 100;\n}\n.icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n.icon .bookings_input__placeholder-icon.cal {\n  width: 16px;\n  margin-top: 0px;\n}\n.icon .bookings_input__placeholder-icon.call {\n  width: 10px;\n  margin-top: 0px;\n}\n.icon .bookings_input__placeholder-icon.calender {\n  width: 18px;\n  margin-top: 10px;\n}\n.button_align {\n  margin-top: 32px;\n  margin-right: 12px;\n}\n@media (max-width: 991px) {\n  .ui.form .form-inner .fields {\n    display: block;\n  }\n  .ui.form .form-inner .fields .branch {\n    display: inline-block;\n    width: 33.3% !important;\n  }\n  .ui.form .form-inner .fields .buttondiv {\n    display: block;\n    width: 100% !important;\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Bvcy9wb3MtYnJhbmNoL0U6XFxCZWxhbFxccHJvamVjdHNcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxjb21vbi1zdHlsZXNcXHN0ZXBwZXIuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3Bvcy9wb3MtYnJhbmNoL3Bvcy1icmFuY2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9wb3MvcG9zLWJyYW5jaC9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcY29tb24tc3R5bGVzXFxkZXNpZ24tcGFsZXR0ZS5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcG9zL3Bvcy1icmFuY2gvRTpcXEJlbGFsXFxwcm9qZWN0c1xcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxwb3NcXHBvcy1icmFuY2hcXHBvcy1icmFuY2guY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9wb3MvcG9zLWJyYW5jaC9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcY29tb24tc3R5bGVzXFxtaXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0o7QURDSTtFQUNFLFVBQUE7RUFDQSxrRUFBQTtFQUFBLDBEQUFBO0FDQ047QURFUTtFQUNFLHlCRWRRO0VGZVIsU0FBQTtBQ0FWO0FERVU7RUFDRSx1QkFBQTtBQ0FaO0FER1U7RUFDRSx5QkFBQTtBQ0RaO0FES1E7RUFDRSxTQUFBO0VBQ0EseUJFNUJRO0VGNkJSLFlBQUE7QUNIVjtBRFFRO0VBQ0UsZ0NBQUE7QUNOVjtBRFdJO0VBQ0UsVUFBQTtFQUNBLGtFQUFBO0VBQUEsMERBQUE7QUNUTjtBRFlRO0VBQ0UseUJF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QUFBO0FGdUdSO0FFdEdRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUZ3R1o7QUV0R1E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBRndHWjtBRXRHUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBRndHWjtBRW5HQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUZzR0o7QUVuR0E7RUFHWTtJQUNJLGNBQUE7RUZvR2Q7RUVuR2M7SUFDSSxxQkFBQTtJQUNBLHVCQUFBO0VGcUdsQjtFRW5HYztJQUNJLGNBQUE7SUFDQSxzQkFBQTtJQUNBLGlCQUFBO0VGcUdsQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3Bvcy9wb3MtYnJhbmNoL3Bvcy1icmFuY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RlcHBlci1ncmlkIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gIC5zdGVwcGVyLWdyaWRfc3RlcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG9wYWNpdHk6IC42O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICYuX2FjdGl2ZSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XHJcblxyXG4gICAgICAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiB7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkZWVwLWJsdWUtY29sb3I7XHJcbiAgICAgICAgICBib3JkZXI6IDA7XHJcblxyXG4gICAgICAgICAgZGl2LmltYWdlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGVlcC1ibHVlLWNvbG9yO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciB7XHJcbiAgICAgICAgaHIge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRkZWVwLWJsdWUtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5fYWN0aXZhdGVkIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxuXHJcbiAgICAgIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIHtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgICBib3JkZXI6IDA7XHJcblxyXG4gICAgICAgICAgZGl2LmltYWdlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIge1xyXG4gICAgICAgIGhyIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICBkaXYge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsYWJlbCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1wcmltYXJ5O1xyXG5cclxuICAgICAgICAmLl9sYXN0IHtcclxuICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtYm9yZGVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICBociB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTI0cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnN0ZXBwZXItZ3JpZC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAmLl9hY3RpdmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcbiIsIi5zdGVwcGVyLWdyaWQge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvcGFjaXR5OiAwLjY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYyODYyO1xuICBib3JkZXI6IDA7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiBkaXYuaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmUgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2OmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0E2QjFDMztcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmUgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gbGFiZWwge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjI4NjI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmUgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciBociB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDYyODYyO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2YXRlZCB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzdBREE7XG4gIGJvcmRlcjogMDtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IGRpdi5pbWFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2YXRlZCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXY6aG92ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjQTZCMUMzO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2YXRlZCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBsYWJlbCB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzN0FEQTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2YXRlZCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtYm9yZGVyIGhyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0MzdBREE7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAycHggc29saWQgI0E2QjFDMztcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBsYWJlbCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAycHggc29saWQgI0E2QjFDMztcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI0E2QjFDMztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gbGFiZWwuX2xhc3Qge1xuICB3aWR0aDogMTUwcHg7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtYm9yZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtYm9yZGVyIGhyIHtcbiAgbWFyZ2luLXRvcDogLTI0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNBNkIxQzM7XG59XG5cbi5zdGVwcGVyLWdyaWQtY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc3RlcHBlci1ncmlkLWNvbnRlbnQuX2FjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ub3V0ZXItYmFzaWMge1xuICBwYWRkaW5nLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5vdXRlci1iYXNpY0Zvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLm91dGVyLWJhc2ljIGgzLmJvb2tpbmctaGVhZGVyIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cblxuLmZvcm0taW5uZXIge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmxhYmVsIHtcbiAgY29sb3I6IHJnYmEoNiwgNDAsIDk4LCAwLjUpICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnRyaXAtZmllbGRzIGlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1LjEyMTU1cHggIWltcG9ydGFudDtcbn1cbi50cmlwLWZpZWxkcyBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwNjI4NjI7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufVxuLnRyaXAtZmllbGRzIGlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDYyODYyO1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbn1cbi50cmlwLWZpZWxkcyBpbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwNjI4NjI7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufVxuLnRyaXAtZmllbGRzIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwNjI4NjI7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufVxuXG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQuYm9va2luZ3NfZGF0ZXBpY2tlciB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIG1heC13aWR0aDogMTM4cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnVpLmJhc2ljLmZsb2F0aW5nLmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYmEoMTUyLCAxNTIsIDE1MiwgMC42KSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5pY29uIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTAwO1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbCB7XG4gIHdpZHRoOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5zZWFyY2guZHJvcGRvd24ge1xuICB3aWR0aDogMjE4cHg7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnNlYXJjaC5kcm9wZG93biAuc2VhcmNoIHtcbiAgbWFyZ2luLWxlZnQ6IDQycHggIWltcG9ydGFudDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuc2VhcmNoLmRyb3Bkb3duIC5kZWZhdWx0LnRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHggMCAwIDM4cHggIWltcG9ydGFudDtcbn1cblxuLmJvb2tpbmdzX2J0bi1wYW5lbCB7XG4gIHBhZGRpbmc6IDIwcHggMnB4O1xufVxuXG5ociB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNlMGUwZTA7XG59XG5cbnRkIHtcbiAgY29sb3I6ICM0ZjRmNGY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmRpdiAuY29uZmlybSB7XG4gIHdpZHRoOiA2M3B4O1xufVxuZGl2IC5jb25maXJtIHtcbiAgd2lkdGg6IDYzcHg7XG59XG5kaXYgLnJlY0NvbmZpcm0ge1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiA2MnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRmMGI0O1xuICBjb2xvcjogIzQyNmYzMjtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuZGl2IC5yZWNDb25maXJtLmhvbGQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVlMjliO1xuICBjb2xvcjogIzZhNWIxZTtcbn1cbmRpdiAucmVjQ29uZmlybS52b2lkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgY29sb3I6ICM2MDYwNjA7XG59XG5kaXYgLnJlY0NvbmZpcm0uY2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTU3YztcbiAgY29sb3I6ICM3YjMwMWU7XG59XG5kaXYgLnJlY0NvbmZpcm0ucmVmdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc3YWNmZjtcbiAgY29sb3I6ICMwODJlNmE7XG59XG5kaXYgLnJlY0NvbmZpcm0uZmFpbGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTU5NTtcbiAgY29sb3I6ICM2NjBhMGE7XG59XG5kaXYgLnRhYi5zZWdtZW50IHtcbiAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5kaXYgLmZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmRpdiAuZHJvcGRvd24gLnRleHQge1xuICBmb250LXNpemU6IDEycHg7XG59XG5kaXYgLmV5ZS1pY29uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuZGl2IC5leWUtaWNvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmRpdiAuYjJjLWxpc3QtdXNlci10YWJsZV9fc2VnbWVudC1sb2FkZXIge1xuICBoZWlnaHQ6IDQ1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5kaXYgLmIyYy1saXN0LXVzZXItdGFibGVfX3NlZ21lbnQtbG9hZGVyIC51aS5pbnZlcnRlZC5kaW1tZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuZGl2IC5iMmMtbGlzdC11c2VyLXRhYmxlX19zZWdtZW50LWxvYWRlciAuZXllLWljb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMzg2N2IxO1xufVxuXG4udWkuc2VnbWVudC5iMmMtbGlzdC11c2VyLXRhYmxlX19zZWdtZW50LWxvYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGhlaWdodDogNDUwcHg7XG59XG4udWkuc2VnbWVudC5iMmMtbGlzdC11c2VyLXRhYmxlX19zZWdtZW50LWxvYWRlciAudWkuYWN0aXZlLmRpbW1lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5kb3dubG9hZC1pbWcge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDE4cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kb3dubG9hZC1pbWcgLmRvd25sb2FkLWltZ19pY29uIHtcbiAgd2lkdGg6IDI1cHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ub3V0ZXItYmFzaWMgZm9ybSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDI0cHg7XG4gIG1hcmdpbjogMjRweDtcbn1cblxuLnVpLmZvcm0gLmVpZ2h0LmZpZWxkLmJvb2tpbmdzX2J0bi1wYW5lbCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5hZ2VudC1uYW1lLWJvb2tpbmcge1xuICBtYXJnaW46IGF1dG8gMjRweCAhaW1wb3J0YW50O1xufVxuLmFnZW50LW5hbWUtYm9va2luZyAuZWlnaHQud2lkZS5maWVsZCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbi5hZ2VudC1uYW1lLWJvb2tpbmcgLmVpZ2h0LndpZGUuZmllbGQgYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLmJvb2tpbmctaGVhZGVyLmJvb2tpbmdfY29tcCB7XG4gICAgcGFkZGluZzogNDBweCAyNHB4IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnVpLmZsdWlkIC5vdXRlci1iYXNpYyAub3V0ZXItYmFzaWNGb3JtIC51aS5mb3JtIC5ib29raW5nLXNlYXJjaC1wYW5lbCB7XG4gICAgd2lkdGg6IDkyJTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cblxuICAuYWdlbnQtbmFtZS1ib29raW5nIHtcbiAgICBtYXJnaW46IDBweCAyNHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgLmJvb2tpbmctaGVhZGVyLmJvb2tpbmdfY29tcCB7XG4gICAgcGFkZGluZzogNDBweCAyMHB4IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnVpLmZsdWlkIC5vdXRlci1iYXNpYyAub3V0ZXItYmFzaWNGb3JtIC51aS5mb3JtIC5ib29raW5nLXNlYXJjaC1wYW5lbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMHB4O1xuICB9XG5cbiAgLmFnZW50LW5hbWUtYm9va2luZyB7XG4gICAgbWFyZ2luOiAwcHggMjBweCAhaW1wb3J0YW50O1xuICB9XG59XG4uaWNvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4uaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsIHtcbiAgd2lkdGg6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbi5jYWxsIHtcbiAgd2lkdGg6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbi5jYWxlbmRlciB7XG4gIHdpZHRoOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYnV0dG9uX2FsaWduIHtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLnVpLmZvcm0gLmZvcm0taW5uZXIgLmZpZWxkcyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnVpLmZvcm0gLmZvcm0taW5uZXIgLmZpZWxkcyAuYnJhbmNoIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDMzLjMlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnVpLmZvcm0gLmZvcm0taW5uZXIgLmZpZWxkcyAuYnV0dG9uZGl2IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICB9XG59IiwiJHByaW1hcnktY29sb3I6ICM0MzdBREE7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNBNkIxQzM7XHJcbiRkZWVwLWJsdWUtY29sb3I6ICMwNjI4NjI7XHJcbiRsaWdodC1zbW9rZS1jb2xvcjogI2U1ZTVlNTtcclxuJHZvaWxhLWdyZWVuOiAjODRCQzZBO1xyXG4kcHVyZS13aGl0ZTogd2hpdGU7XHJcbiRmYXVsdC1jb2xvcjogI0RFNzk3OTtcclxuJHdhcm5pbmctY29sb3I6ICNFQ0MwNEU7XHJcbiRzdWNjZXNzLWNvbG9yOiAjNzNCMjVEO1xyXG5cclxuJGJvZHktYmFzZTogI0Y2RjlGQztcclxuJGNvcnBvcmF0ZS1ibHVlLWJhc2U6ICM0NTY3QUM7XHJcblxyXG4kY29udGFpbmVyLWJhc2U6IHdoaXRlO1xyXG4kY29udGFpbmVyLWJhc2Utc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDYsIDQwLCA5OCwgMC4xKTtcclxuJGNvbnRhaW5lci1kcm9wZG93bnMtc2hhZG93OiAwcHggOHB4IDE0cHggcmdiYSgwLCA1OCwgMTY0LCAuMik7XHJcblxyXG4kcHJpbWFyeS1zaGFkb3c6IDBweCA0LjgzcHggMTZweCByZ2JhKDY3LCAxMjIsIDIxOCwgLjUpO1xyXG4kbGlnaHQtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDU4LCAxNjQsIC4yNSk7XHJcbiRmYWRlZC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMTY3LCAxNzMsIDE4MiwgLjIpO1xyXG4kbGlnaHQtZXh0ZW5kZWQtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDU4LCAxNjQsIC4yNSk7XHJcblxyXG4kYm9yZGVyLXJhZGl1cy1wcmltYXJ5OiA4cHg7XHJcbiRib3JkZXItcmFkaXVzLXNlY29uZGFyeTogNnB4O1xyXG5cclxuJGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xyXG5cclxuJHRvYXN0LWluZm8tY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4kdG9hc3QtaW5mby1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxMTEsIDAsIDAsIC4yKTtcclxuXHJcbiR0b2FzdC1lcnJvci1jb2xvcjogJGZhdWx0LWNvbG9yO1xyXG4kdG9hc3QtZXJyb3Itc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTExLCAwLCAwLCAuMik7XHJcblxyXG4kdG9hc3Qtd2FybmluZy1jb2xvcjogJHdhcm5pbmctY29sb3I7XHJcbiR0b2FzdC13YXJuaW5nLXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDE3NywgMTI3LCAwLCAuMik7XHJcblxyXG4kdG9hc3Qtc3VjY2Vzcy1jb2xvcjogJHN1Y2Nlc3MtY29sb3I7XHJcbiR0b2FzdC1zdWNjZXNzLXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDM0LCAxMzAsIDAsIC4yKTtcclxuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vY29tb24tc3R5bGVzL2NvbW1vbi5zY3NzXCI7XHJcbi5vdXRlci1iYXNpYyB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpY0Zvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljIGgzLmJvb2tpbmctaGVhZGVyIHtcclxuICAgIC8vIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIC8vIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgIC8vIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDM2cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxuLmZvcm0taW5uZXIge1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBjb2xvcjogcmdiYSgkY29sb3I6ICRkZWVwLWJsdWUtY29sb3IsICRhbHBoYTogLjUpICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4udHJpcC1maWVsZHMge1xyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAkcHJpbWFyeS1jb2xvciwgJGFscGhhOiAuMTgpO1xyXG4gICAgICAgIC8vIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1LjEyMTU1cHggIWltcG9ydGFudDtcclxuICAgICAgICBAaW5jbHVkZSBwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgY29sb3I6ICRkZWVwLWJsdWUtY29sb3I7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IHtcclxuICAgICYuYm9va2luZ3NfZGF0ZXBpY2tlciB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEzOHB4O1xyXG4gICAgfVxyXG4gICAgLnVpLmJhc2ljLmZsb2F0aW5nLmJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE1MiwgMTUyLCAxNTIsIDAuNikgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgICB9XHJcbiAgICAuaWNvbiB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICAgICAgJi5jYWwge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlYXJjaC5kcm9wZG93biB7XHJcbiAgICAgICAgd2lkdGg6IDIxOHB4O1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICAgIC5zZWFyY2gge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNDJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGVmYXVsdC50ZXh0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4IDAgMCAzOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYm9va2luZ3NfYnRuLXBhbmVsIHtcclxuICAgIHBhZGRpbmc6IDIwcHggMnB4O1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNlMGUwZTA7XHJcbn1cclxuXHJcbnRkIHtcclxuICAgIGNvbG9yOiAjNGY0ZjRmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgICAuY29uZmlybSB7XHJcbiAgICAgICAgd2lkdGg6IDYzcHg7XHJcbiAgICB9XHJcbiAgICAuY29uZmlybSB7XHJcbiAgICAgICAgd2lkdGg6IDYzcHg7XHJcbiAgICB9XHJcbiAgICAucmVjQ29uZmlybSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIHdpZHRoOiA2MnB4O1xyXG4gICAgICAgIC8vIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjNGYwYjQ7XHJcbiAgICAgICAgY29sb3I6ICM0MjZmMzI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1zZWNvbmRhcnk7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgJi5ob2xkIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZTI5YjtcclxuICAgICAgICAgICAgY29sb3I6ICM2YTViMWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYudm9pZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjA2MDYwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmNhbmNlbCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjk1N2M7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjN2IzMDFlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLnJlZnVuZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3N2FjZmY7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDgyZTZhO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmZhaWxlZCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjk1OTU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjYwYTBhO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50YWIuc2VnbWVudCB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICB9XHJcbiAgICAuZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICAuZHJvcGRvd24gLnRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICAgIC5leWUtaWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIC8vIGJveC1zaGFkb3c6ICRsaWdodC1leHRlbmRlZC1zaGFkb3c7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXNlY29uZGFyeTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAvLyBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogJHByaW1hcnktc2hhZG93O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIC8vIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjhzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5iMmMtbGlzdC11c2VyLXRhYmxlX19zZWdtZW50LWxvYWRlciB7XHJcbiAgICAgICAgaGVpZ2h0OiA0NTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIC51aS5pbnZlcnRlZC5kaW1tZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZXllLWljb24ge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzg2N2IxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnVpLnNlZ21lbnQuYjJjLWxpc3QtdXNlci10YWJsZV9fc2VnbWVudC1sb2FkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxuICAgIC51aS5hY3RpdmUuZGltbWVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZG93bmxvYWQtaW1nIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDE4cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAuZG93bmxvYWQtaW1nX2ljb24ge1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ub3V0ZXItYmFzaWMge1xyXG4gICAgZm9ybSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgICAgIG1hcmdpbjogMjRweDtcclxuICAgIH1cclxufVxyXG5cclxuLnVpLmZvcm0gLmVpZ2h0LmZpZWxkLmJvb2tpbmdzX2J0bi1wYW5lbCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmFnZW50LW5hbWUtYm9va2luZyB7XHJcbiAgICBtYXJnaW46IGF1dG8gMjRweCAhaW1wb3J0YW50O1xyXG4gICAgLmVpZ2h0LndpZGUuZmllbGQge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIC5ib29raW5nLWhlYWRlci5ib29raW5nX2NvbXAge1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMjRweCAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC51aS5mbHVpZCAub3V0ZXItYmFzaWMgLm91dGVyLWJhc2ljRm9ybSAudWkuZm9ybSAuYm9va2luZy1zZWFyY2gtcGFuZWwge1xyXG4gICAgICAgIHdpZHRoOiA5MiU7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgfVxyXG4gICAgLmFnZW50LW5hbWUtYm9va2luZyB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMjRweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAuYm9va2luZy1oZWFkZXIuYm9va2luZ19jb21wIHtcclxuICAgICAgICBwYWRkaW5nOiA0MHB4IDIwcHggMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAudWkuZmx1aWQgLm91dGVyLWJhc2ljIC5vdXRlci1iYXNpY0Zvcm0gLnVpLmZvcm0gLmJvb2tpbmctc2VhcmNoLXBhbmVsIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuYWdlbnQtbmFtZS1ib29raW5nIHtcclxuICAgICAgICBtYXJnaW46IDBweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLmljb24ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgICYuY2FsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5jYWxsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5jYWxlbmRlciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJ1dHRvbl9hbGlnbntcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6OTkxcHgpe1xyXG4gICAgLnVpLmZvcm17XHJcbiAgICAgICAgLmZvcm0taW5uZXJ7XHJcbiAgICAgICAgICAgIC5maWVsZHN7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIC5icmFuY2h7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMy4zJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5idXR0b25kaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiQG1peGluIHBsYWNlaG9sZGVyIHtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcblxyXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGNvbG9yLW9wYWNpdHkoJGNvbG9yLCAkb3BhY2l0eTogMC4zKSB7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yO1xyXG4gIC8qIFRoZSBGYWxsYmFjayAqL1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLCAkb3BhY2l0eSk7XHJcbn1cclxuXHJcbkBtaXhpbiBoaWRlTnVtYmVyRmllbGRBcnJvd3Mge1xyXG5cclxuICAvKiBDaHJvbWUsIFNhZmFyaSwgRWRnZSwgT3BlcmEgKi9cclxuICBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuICBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC8qIEZpcmVmb3ggKi9cclxuICBpbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtYXNrLXN2Zy1kaXYoJGltZykge1xyXG4gIC13ZWJraXQtbWFzazogdXJsKCRpbWcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgbWFzazogdXJsKCRpbWcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbn1cclxuIl19 */";
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


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);

    var PosBranchComponent =
    /*#__PURE__*/
    function () {
      function PosBranchComponent(fb, posService, toastr, router, activeRoute) {
        _classCallCheck(this, PosBranchComponent);

        this.fb = fb;
        this.posService = posService;
        this.toastr = toastr;
        this.router = router;
        this.activeRoute = activeRoute;
        this.branchesdata = [];
      }

      _createClass(PosBranchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.organisation_ID = this.activeRoute.snapshot.params.id;
          this.branchForm = this.fb.group({
            organisation_id: this.organisation_ID,
            name: [''],
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

          this.posService.createBranch(this.branchForm.value).subscribe(function (result) {
            if (result.status) {
              _this26.toastr.success("".concat(result.message), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-top-right'
              });

              _this26.fetchAllBranches();
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
              _this27.posService.deleteBranch(row.organisation_id).subscribe(function (result) {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/pos-branch/pos-branch.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pos-branch.component.scss */
      "./src/app/layout/pos/pos-branch/pos-branch.component.scss")).default]
    })], PosBranchComponent);
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


    __webpack_exports__["default"] = ".outer {\n  margin: 0px 20px 0px 15px;\n}\n\n.amexCard {\n  background-color: gainsboro !important;\n}\n\n.farePreferencestable {\n  border-top: 0px !important;\n}\n\n.outer__add-pos__title {\n  margin: 0;\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #E0E0E0;\n}\n\n.tourCode_btn,\n.addTogg_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n}\n\n.tourCode_text,\n.addTogg_text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.corporate_input__placeholder-icon {\n  position: relative;\n  width: 18px;\n  bottom: 28px;\n  left: 9px;\n}\n\n.ui.form.pos_basic_form {\n  background: #fff;\n  box-shadow: 0px 2px 6px rgba(6, 40, 98, 0.05);\n  border-radius: 4.96141px;\n  margin: 24px;\n}\n\ndiv.upload {\n  box-sizing: border-box;\n  height: 15px;\n  width: 123px;\n  border-radius: 3px;\n  background-color: #FFF;\n  border: 0.5px solid #808080;\n  box-shadow: 0 0.25px 0.1px 0 rgba(0, 0, 0, 0.5);\n}\n\ndiv.upload input {\n  display: block !important;\n  width: 123px !important;\n  height: 15px !important;\n  opacity: 0 !important;\n  overflow: hidden !important;\n}\n\n.file_choose {\n  position: relative;\n  left: 27px;\n  bottom: 6px;\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 9px;\n  line-height: 10px;\n}\n\n.uploadinImg_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n}\n\n.uploadinImg_btn__text,\n.save-next_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 12px;\n}\n\n.file_table__img {\n  border: none;\n  background-color: #dfeafb5e;\n}\n\n.save-next_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.field input::-webkit-input-placeholder {\n  font-size: 14px;\n}\n\n.field input::-moz-placeholder {\n  font-size: 14px;\n}\n\n.field input::-ms-input-placeholder {\n  font-size: 14px;\n}\n\n.field input::placeholder {\n  font-size: 14px;\n}\n\n.ui.pointing.secondary.menu {\n  border: none;\n}\n\n.item.stepper__progress {\n  width: 167px;\n}\n\n.tab.segment.stepper__segment-outline {\n  border: none;\n  box-shadow: none;\n}\n\n.office-info_icon {\n  position: relative;\n  top: 20px;\n  right: 85px;\n}\n\n.pos_access-rights {\n  color: #828282;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 11px;\n  line-height: 12px;\n}\n\n.cancel_btn {\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.cancel_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.issue_date {\n  text-indent: 17px;\n}\n\n.wide.field.sale_check {\n  margin-top: 10px;\n}\n\n.assign_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.assign_btn__text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n}\n\n.circleIcon {\n  height: 20px;\n  width: 20px;\n  background-color: #0D801C;\n  border-radius: 50%;\n  display: inline-block;\n  margin-top: 6px;\n}\n\n.plusIcon {\n  color: #FFF;\n  font-size: 17px;\n  font-weight: 100;\n  line-height: 28px;\n  text-align: center;\n  margin-left: 0px;\n  margin-top: -3px;\n}\n\n::ng-deep.mat-step-icon-content {\n  height: 19px;\n  width: 19px;\n  color: #C8C8C8;\n  background-color: #C8C8C8;\n  border-radius: 50%;\n}\n\n::ng-deep.mat-step-header:hover,\n::ng-deep.cdk-keyboard-focused,\n::ng-deep.cdk-program-focused {\n  background-color: transparent !important;\n}\n\n::ng-deep.mat-step-icon {\n  border: 1px solid rgba(0, 0, 0, 0.24);\n  background: transparent !important;\n}\n\n::ng-deep.mat-step-icon-state-number.mat-step-icon.mat-step-icon-selected {\n  border: 2px solid #3867B1;\n  background: transparent;\n}\n\n::ng-deep.mat-step-icon-state-number.mat-step-icon.mat-step-icon-selected .ng-star-inserted {\n  color: #3867B1;\n}\n\n::ng-deep.mat-step-icon-content {\n  background-color: transparent;\n}\n\n::ng-deep.ng-star-inserted {\n  padding: 0 6px;\n}\n\n::ng-deep.mat-horizontal-stepper-header-container {\n  background: #ffff;\n  width: 100%;\n  padding: 0px 30%;\n  margin-top: 32px;\n}\n\n::ng-deep.mat-icon {\n  display: none !important;\n}\n\n::ng-deep.mat-step-icon-selected,\n::ng-deep.mat-step-icon-state-done,\n::ng-deep.mat-step-icon-state-edit {\n  background-color: transparent !important;\n}\n\n::ng-deep.mat-step-label {\n  color: #3867b1;\n}\n\n::ng-deep.mat-horizontal-content-container {\n  margin-top: 32px;\n}\n\n.pos_btn-panel {\n  padding-bottom: 20px;\n  margin-bottom: 40px;\n}\n\n.pos_btn-panel .secondary {\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.pos_btn-panel .primary {\n  float: right;\n  width: auto !important;\n  border-radius: 3px !important;\n  background-color: #437ADA;\n  color: #fff;\n  min-width: auto;\n}\n\n.pos_btn-panel .primary:hover {\n  background-color: #cacbcd !important;\n  box-shadow: 0 0 0 1px transparent inset, 0 0 0 0 rgba(34, 36, 38, 0.15) inset !important;\n  color: rgba(0, 0, 0, 0.8) !important;\n}\n\n.segment p {\n  padding-bottom: 10px;\n}\n\n.bg-grey {\n  background: #d1dade;\n}\n\n.example-chip-list {\n  width: 100%;\n  border: 0px solid grey !important;\n}\n\n.mat-chip-input {\n  border: 0px !important;\n  background: transparent !important;\n}\n\n.inputfile {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n.transparent,\n.transparent:hover {\n  background: none;\n}\n\n.center {\n  text-align: center;\n}\n\n.margin-right-20 {\n  margin-right: 20px;\n}\n\n.margin-bottom-15 {\n  margin-bottom: 15px;\n}\n\n.dim-footer {\n  color: #c3c3c3;\n  display: block;\n  font-size: 12px;\n  margin-top: 10px;\n  cursor: inherit;\n  position: relative;\n  top: -20px;\n  left: 24px;\n}\n\n.mat-chip {\n  margin: 0px 4px !important;\n}\n\n.branding-pic {\n  -webkit-box-align: center;\n          align-items: center;\n  height: 150px;\n}\n\n.mat-standard-chip .mat-chip-remove.mat-icon {\n  width: 13px !important;\n  height: 13px !important;\n  font-size: 13px !important;\n}\n\n.custom-columns .field {\n  margin-bottom: 15px !important;\n}\n\n.uploaded-document {\n  display: block;\n}\n\n.validations {\n  color: red;\n  font-size: x-small;\n}\n\n.unlimited {\n  float: right;\n  font-size: x-small;\n}\n\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n\n.ui.form .three.wide.field {\n  margin-bottom: 16px;\n}\n\n.inline-label {\n  display: inline !important;\n}\n\n.ui.header {\n  margin: 0px;\n  padding-top: 14px;\n  padding-bottom: 24px;\n  font-size: 18px;\n  font-weight: 400;\n}\n\n.ui.header.note-head {\n  margin-bottom: 12px;\n}\n\n.ui.header.basic-info-header {\n  margin-top: 20px;\n}\n\n.pos_basic_form .tax-section {\n  padding: 0px;\n}\n\n.pos_basic_form .tax_block {\n  border: 1px solid #D4D6DC;\n  border-radius: 5.12155px;\n  min-height: 390px;\n}\n\n.pos_basic_form .tax_block p {\n  padding-bottom: 24px;\n}\n\n::ng-deep.mat-form-field-underline {\n  display: none;\n}\n\n::ng-deep.mat-chip-list-wrapper {\n  margin: 0px !important;\n  position: relative !important;\n  top: -16px !important;\n}\n\n.payment-header {\n  margin-top: 12px !important;\n}\n\n.ui.checkbox {\n  padding-bottom: 10px;\n}\n\n.ui.checkbox label:before {\n  border-radius: 20px;\n}\n\n.ui.checkbox label:after {\n  font-size: 12px;\n  top: 1px;\n}\n\n.ui.checkbox input:checked ~ label:before {\n  border: 1px solid #3867b1;\n}\n\n.ui.checkbox input:checked ~ label:after {\n  color: #3867b1;\n}\n\n.ui.segment.bg-grey {\n  margin-top: 12px;\n  background: transparent;\n  border: 1px solid #D4D6DC;\n}\n\n.ui.segment.bg-grey .ui.checkbox {\n  padding-bottom: 0px;\n}\n\n.cardDetails {\n  margin-top: 15px;\n}\n\n.spacing {\n  padding-left: 22px;\n  padding-right: 22px;\n}\n\n.ui.fitted.divider {\n  margin: 30px 0px;\n}\n\n.ui.primary.button.brand_buttons {\n  background: rgba(67, 122, 218, 0.05) !important;\n  border: 1px dashed #437ADA !important;\n  color: #437ADA;\n  box-shadow: none !important;\n}\n\n.ui.primary.button.brand_buttons i.icon {\n  color: #437ADA;\n}\n\n.ui.primary.button.add_btn {\n  border: 1px solid #437ADA;\n  box-sizing: border-box;\n  border-radius: 7.24448px !important;\n  background: transparent !important;\n  color: #437ADA !important;\n  box-shadow: none !important;\n  margin-top: 22px;\n  width: auto !important;\n  min-width: auto;\n}\n\n.ui.primary.button.add_btn.reset {\n  border: 1px solid #4F4F4F;\n  color: #4F4F4F !important;\n}\n\n.notes-section textarea {\n  min-height: 60px;\n  height: auto !important;\n}\n\n.ui.transparent.margin-right-20 {\n  display: block;\n  margin-bottom: 10px;\n}\n\n.ui.grid.card-section {\n  width: 100%;\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n  margin-left: 8px;\n}\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 160px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 10px;\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: 0px;\n}\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.outer-form {\n  margin-bottom: 80px;\n}\n\n.pos_btn-panel.spacing button {\n  position: absolute;\n  right: 0px;\n  bottom: -64px;\n  text-align: right;\n}\n\n.button_align {\n  margin-top: -30px;\n}\n\n.buttonstyle {\n  text-align: right;\n}\n\n.buttonstyle button:first-child {\n  margin-right: 12px;\n}\n\n@media (max-width: 991px) {\n  .buttonstyle {\n    text-align: right;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Bvcy9wb3Mtb2ZmaWNlLWRldGFpbHMvRTpcXEJlbGFsXFxwcm9qZWN0c1xcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxwb3NcXHBvcy1vZmZpY2UtZGV0YWlsc1xccG9zLW9mZmljZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcG9zL3Bvcy1vZmZpY2UtZGV0YWlscy9wb3Mtb2ZmaWNlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksc0NBQUE7QUNDSjs7QURFQTtFQUNJLDBCQUFBO0FDQ0o7O0FERUE7RUFDSSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0NBQUE7RUFDQSx3Q0FBQTtBQ0NKOztBREVBO0VBQ0ksK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FDQ0o7O0FERUE7RUFDSSw0Q0FBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FDQ0o7O0FERUE7O0VBRUksa0JBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBOztFQUVJLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDQ0o7O0FEU0E7RUFFSSxnQkFBQTtFQUNBLDZDQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0FDUEo7O0FEV0E7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0NBQUE7QUNSSjs7QURXQTtFQUNJLHlCQUFBO0VBQ0EsdUJB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dXQvcG9zL3Bvcy1vZmZpY2UtZGV0YWlscy9wb3Mtb2ZmaWNlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3V0ZXIge1xyXG4gICAgbWFyZ2luOiAwcHggMjBweCAwcHggMTVweDtcclxufVxyXG5cclxuLmFtZXhDYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdhaW5zYm9ybyAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmFyZVByZWZlcmVuY2VzdGFibGUge1xyXG4gICAgYm9yZGVyLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vdXRlcl9fYWRkLXBvc19fdGl0bGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQubWVudT4uaXRlbSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjg1NzE0MjlyZW0gMCAwIDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udWkuYm90dG9tLmF0dGFjaGVkLmFjdGl2ZS50YWIuc2VnbWVudCB7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxN3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTdweDtcclxufVxyXG5cclxuLnRhYi5zZWdtZW50IHtcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNFMEUwRTA7XHJcbn1cclxuXHJcbi50b3VyQ29kZV9idG4sXHJcbi5hZGRUb2dnX2J0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xyXG59XHJcblxyXG4udG91ckNvZGVfdGV4dCxcclxuLmFkZFRvZ2dfdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvcnBvcmF0ZV9pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGJvdHRvbTogMjhweDtcclxuICAgIGxlZnQ6IDlweDtcclxufVxyXG5cclxuLy8gLm91dGVyLWZvcm0sXHJcbi8vIC5vdXRlcl9jb3JwRm9ybSB7XHJcbi8vICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjODA4MDgwO1xyXG4vLyAgICAgbWFyZ2luOiA0NXB4IDMycHggMTExcHggMjVweDtcclxuLy8gfVxyXG4udWkuZm9ybS5wb3NfYmFzaWNfZm9ybSB7XHJcbiAgICAvLyBwYWRkaW5nOiAwcHggMHB4IDI1cHggMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoNiwgNDAsIDk4LCAwLjA1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQuOTYxNDFweDtcclxuICAgIG1hcmdpbjogMjRweDtcclxuICAgIC8vIG1heC13aWR0aDogMTIwMHB4O1xyXG59XHJcblxyXG5kaXYudXBsb2FkIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTIzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjODA4MDgwO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjI1cHggMC4xcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbmRpdi51cGxvYWQgaW5wdXQge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMjNweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWxlX2Nob29zZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAyN3B4O1xyXG4gICAgYm90dG9tOiA2cHg7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi51cGxvYWRpbkltZ19idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcclxufVxyXG5cclxuLnVwbG9hZGluSW1nX2J0bl9fdGV4dCxcclxuLnNhdmUtbmV4dF9idG5fX3RleHQge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi5maWxlX3RhYmxlX19pbWcge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RmZWFmYjVlO1xyXG59XHJcblxyXG4uc2F2ZS1uZXh0X2J0biB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4uZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnVpLnBvaW50aW5nLnNlY29uZGFyeS5tZW51IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLml0ZW0uc3RlcHBlcl9fcHJvZ3Jlc3Mge1xyXG4gICAgd2lkdGg6IDE2N3B4O1xyXG59XHJcblxyXG4udGFiLnNlZ21lbnQuc3RlcHBlcl9fc2VnbWVudC1vdXRsaW5lIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5vZmZpY2UtaW5mb19pY29uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiA4NXB4O1xyXG59XHJcblxyXG4ucG9zX2FjY2Vzcy1yaWdodHMge1xyXG4gICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTJweDtcclxufVxyXG5cclxuLmNhbmNlbF9idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRGNEY0RjtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmNhbmNlbF9idG5fX3RleHQge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pc3N1ZV9kYXRlIHtcclxuICAgIHRleHQtaW5kZW50OiAxN3B4O1xyXG59XHJcblxyXG4ud2lkZS5maWVsZC5zYWxlX2NoZWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5hc3NpZ25fYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5hc3NpZ25fYnRuX190ZXh0IHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uY2lyY2xlSWNvbiB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwRDgwMUM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbn1cclxuXHJcbi5wbHVzSWNvbiB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtM3B4O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1jb250ZW50IHtcclxuICAgIGhlaWdodDogMTlweDtcclxuICAgIHdpZHRoOiAxOXB4O1xyXG4gICAgY29sb3I6ICNDOEM4Qzg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQzhDOEM4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LXN0ZXAtaGVhZGVyOmhvdmVyLFxyXG4gOjpuZy1kZWVwLmNkay1rZXlib2FyZC1mb2N1c2VkLFxyXG4gOjpuZy1kZWVwLmNkay1wcm9ncmFtLWZvY3VzZWQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuMjQpO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24tc3RhdGUtbnVtYmVyLm1hdC1zdGVwLWljb24ubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzg2N0IxO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAubmctc3Rhci1pbnNlcnRlZCB7XHJcbiAgICAgICAgY29sb3I6ICMzODY3QjE7XHJcbiAgICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5uZy1zdGFyLWluc2VydGVkIHtcclxuICAgIHBhZGRpbmc6IDAgNnB4O1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXItY29udGFpbmVyIHtcclxuICAgIC8vIHdpZHRoOiA0MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMHB4IDMwJTtcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLFxyXG4gOjpuZy1kZWVwLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcclxuIDo6bmctZGVlcC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1zdGVwLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjMzg2N2IxO1xyXG59XHJcblxyXG46Om5nLWRlZXAubWF0LWhvcml6b250YWwtY29udGVudC1jb250YWluZXIge1xyXG4gICAgLy8gYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbn1cclxuXHJcbi5wb3NfYnRuLXBhbmVsIHtcclxuICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIHJpZ2h0OiA2OHB4O1xyXG4gICAgLy8gYm90dG9tOiA5N3B4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgLnNlY29uZGFyeSB7XHJcbiAgICAgICAgLy8gd2lkdGg6IDEwNC44N3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0RjRGO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIH1cclxuICAgIC5wcmltYXJ5IHtcclxuICAgICAgICAvLyB3aWR0aDogMTI0Ljg3cHg7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQzN0FEQTtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAvLyBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSkgIWltcG9ydGFudDtcclxuICAgICAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjYWNiY2QgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHRyYW5zcGFyZW50IGluc2V0LCAwIDAgMCAwIHJnYmEoMzQsIDM2LCAzOCwgLjE1KSBpbnNldCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAuOCkgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWdtZW50IHAge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5iZy1ncmV5IHtcclxuICAgIGJhY2tncm91bmQ6ICNkMWRhZGU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWNoaXAtbGlzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkIGdyZXkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1jaGlwLWlucHV0IHtcclxuICAgIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaW5wdXRmaWxlIHtcclxuICAgIHdpZHRoOiAwLjFweDtcclxuICAgIGhlaWdodDogMC4xcHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4udHJhbnNwYXJlbnQsXHJcbi50cmFuc3BhcmVudDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1hcmdpbi1yaWdodC0yMCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5tYXJnaW4tYm90dG9tLTE1IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuXHJcbi5kaW0tZm9vdGVyIHtcclxuICAgIGNvbG9yOiAjYzNjM2MzO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBpbmhlcml0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMjBweDtcclxuICAgIGxlZnQ6IDI0cHg7XHJcbn1cclxuXHJcbi5tYXQtY2hpcCB7XHJcbiAgICBtYXJnaW46IDBweCA0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJyYW5kaW5nLXBpYyB7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxufVxyXG5cclxuLm1hdC1zdGFuZGFyZC1jaGlwIC5tYXQtY2hpcC1yZW1vdmUubWF0LWljb24ge1xyXG4gICAgd2lkdGg6IDEzcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTNweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jdXN0b20tY29sdW1ucyAuZmllbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udXBsb2FkZWQtZG9jdW1lbnQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi52YWxpZGF0aW9ucyB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG59XHJcblxyXG4udW5saW1pdGVkIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxufVxyXG5cclxuLnVpLmZvcm0gLmZpZWxkPmxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgIGNvbG9yOiAjMTgxQjIwO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDhweDtcclxufVxyXG5cclxuLnVpLmZvcm0gLnRocmVlLndpZGUuZmllbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLmlubGluZS1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLmhlYWRlciB7XHJcbiAgICBtYXJnaW46MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAmLm5vdGUtaGVhZCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIH1cclxuICAgICYuYmFzaWMtaW5mby1oZWFkZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7ICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi5wb3NfYmFzaWNfZm9ybSB7XHJcbiAgICAudGF4LXNlY3Rpb24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgIH1cclxuICAgIC50YXhfYmxvY2sge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNENEQ2REM7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNS4xMjE1NXB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDM5MHB4O1xyXG4gICAgICAgIC8vIG1heC1oZWlnaHQ6IDM5MHB4O1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1jaGlwLWxpc3Qtd3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDBweCAhaW1wb3J0YW50O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbiAgICB0b3A6IC0xNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYXltZW50LWhlYWRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51aS5jaGVja2JveCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGxhYmVsIHtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIHRvcDogMXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlucHV0OmNoZWNrZWR+bGFiZWwge1xyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzM4NjdiMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMzg2N2IxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnVpLnNlZ21lbnQuYmctZ3JleSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRDRENkRDO1xyXG4gICAgLnVpLmNoZWNrYm94IHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZERldGFpbHMge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLnNwYWNpbmcge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjJweDtcclxufVxyXG5cclxuLnVpLmZpdHRlZC5kaXZpZGVyIHtcclxuICAgIG1hcmdpbjogMzBweCAwcHg7XHJcbn1cclxuXHJcbi51aS5wcmltYXJ5LmJ1dHRvbi5icmFuZF9idXR0b25zIHtcclxuICAgIC8vIGhlaWdodDogODJweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNjcsIDEyMiwgMjE4LCAwLjA1KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICM0MzdBREEgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNDM3QURBO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLy8gcGFkZGluZy10b3A6IDE4cHg7XHJcbiAgICAvLyBtaW4td2lkdGg6IGF1dG87XHJcbiAgICBpLmljb24ge1xyXG4gICAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIC8vIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM0MzdBREE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS5wcmltYXJ5LmJ1dHRvbi5hZGRfYnRuIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0MzdBREE7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNy4yNDQ0OHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM0MzdBREEgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgbWluLXdpZHRoOiBhdXRvO1xyXG59XHJcblxyXG4udWkucHJpbWFyeS5idXR0b24uYWRkX2J0bi5yZXNldCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNEY0RjRGO1xyXG4gICAgY29sb3I6ICM0RjRGNEYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vdGVzLXNlY3Rpb24ge1xyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS50cmFuc3BhcmVudC5tYXJnaW4tcmlnaHQtMjAge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4udWkuZ3JpZC5jYXJkLXNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC8vIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi50b29sdGlwIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJvdHRvbTogMTAwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4ub3V0ZXItZm9ybSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG59XHJcblxyXG4ucG9zX2J0bi1wYW5lbC5zcGFjaW5nIHtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgYm90dG9tOiAtNjRweDtcclxuICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnV0dG9uX2FsaWdue1xyXG4gICAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbn1cclxuXHJcbi5idXR0b25zdHlsZXtcclxuICAgIHRleHQtYWxpZ246cmlnaHQ7XHJcbiAgICBidXR0b246Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjk5MXB4KXtcclxuICAgIC5idXR0b25zdHlsZXtcclxuICAgICAgICB0ZXh0LWFsaWduOnJpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCIub3V0ZXIge1xuICBtYXJnaW46IDBweCAyMHB4IDBweCAxNXB4O1xufVxuXG4uYW1leENhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBnYWluc2Jvcm8gIWltcG9ydGFudDtcbn1cblxuLmZhcmVQcmVmZXJlbmNlc3RhYmxlIHtcbiAgYm9yZGVyLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5vdXRlcl9fYWRkLXBvc19fdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi51aS50b3AuYXR0YWNoZWQubWVudSA+IC5pdGVtIHtcbiAgYm9yZGVyLXJhZGl1czogMC4yODU3MTQyOXJlbSAwIDAgMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLnVpLmJvdHRvbS5hdHRhY2hlZC5hY3RpdmUudGFiLnNlZ21lbnQge1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxN3B4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTdweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XG59XG5cbi50YWIuc2VnbWVudCB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG5ociB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNFMEUwRTA7XG59XG5cbi50b3VyQ29kZV9idG4sXG4uYWRkVG9nZ19idG4ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XG59XG5cbi50b3VyQ29kZV90ZXh0LFxuLmFkZFRvZ2dfdGV4dCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMThweDtcbiAgYm90dG9tOiAyOHB4O1xuICBsZWZ0OiA5cHg7XG59XG5cbi51aS5mb3JtLnBvc19iYXNpY19mb3JtIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSg2LCA0MCwgOTgsIDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiA0Ljk2MTQxcHg7XG4gIG1hcmdpbjogMjRweDtcbn1cblxuZGl2LnVwbG9hZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDEyM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJvcmRlcjogMC41cHggc29saWQgIzgwODA4MDtcbiAgYm94LXNoYWRvdzogMCAwLjI1cHggMC4xcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbmRpdi51cGxvYWQgaW5wdXQge1xuICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xuICB3aWR0aDogMTIzcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG4uZmlsZV9jaG9vc2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDI3cHg7XG4gIGJvdHRvbTogNnB4O1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBsaW5lLWhlaWdodDogMTBweDtcbn1cblxuLnVwbG9hZGluSW1nX2J0biB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbn1cblxuLnVwbG9hZGluSW1nX2J0bl9fdGV4dCxcbi5zYXZlLW5leHRfYnRuX190ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xufVxuXG4uZmlsZV90YWJsZV9faW1nIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGZlYWZiNWU7XG59XG5cbi5zYXZlLW5leHRfYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi51aS5wb2ludGluZy5zZWNvbmRhcnkubWVudSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLml0ZW0uc3RlcHBlcl9fcHJvZ3Jlc3Mge1xuICB3aWR0aDogMTY3cHg7XG59XG5cbi50YWIuc2VnbWVudC5zdGVwcGVyX19zZWdtZW50LW91dGxpbmUge1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5vZmZpY2UtaW5mb19pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDIwcHg7XG4gIHJpZ2h0OiA4NXB4O1xufVxuXG4ucG9zX2FjY2Vzcy1yaWdodHMge1xuICBjb2xvcjogIzgyODI4MjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG5cbi5jYW5jZWxfYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0RjRGO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5jYW5jZWxfYnRuX190ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pc3N1ZV9kYXRlIHtcbiAgdGV4dC1pbmRlbnQ6IDE3cHg7XG59XG5cbi53aWRlLmZpZWxkLnNhbGVfY2hlY2sge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYXNzaWduX2J0biB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uYXNzaWduX2J0bl9fdGV4dCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbn1cblxuLmNpcmNsZUljb24ge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEQ4MDFDO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuXG4ucGx1c0ljb24ge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LXdlaWdodDogMTAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBtYXJnaW4tdG9wOiAtM3B4O1xufVxuXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1jb250ZW50IHtcbiAgaGVpZ2h0OiAxOXB4O1xuICB3aWR0aDogMTlweDtcbiAgY29sb3I6ICNDOEM4Qzg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDOEM4Qzg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuOjpuZy1kZWVwLm1hdC1zdGVwLWhlYWRlcjpob3Zlcixcbjo6bmctZGVlcC5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbjo6bmctZGVlcC5jZGstcHJvZ3JhbS1mb2N1c2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1zdGVwLWljb24ge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1udW1iZXIubWF0LXN0ZXAtaWNvbi5tYXQtc3RlcC1pY29uLXNlbGVjdGVkIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzM4NjdCMTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1udW1iZXIubWF0LXN0ZXAtaWNvbi5tYXQtc3RlcC1pY29uLXNlbGVjdGVkIC5uZy1zdGFyLWluc2VydGVkIHtcbiAgY29sb3I6ICMzODY3QjE7XG59XG5cbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuOjpuZy1kZWVwLm5nLXN0YXItaW5zZXJ0ZWQge1xuICBwYWRkaW5nOiAwIDZweDtcbn1cblxuOjpuZy1kZWVwLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNmZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMHB4IDMwJTtcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cblxuOjpuZy1kZWVwLm1hdC1pY29uIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcbjo6bmctZGVlcC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXG46Om5nLWRlZXAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwLm1hdC1zdGVwLWxhYmVsIHtcbiAgY29sb3I6ICMzODY3YjE7XG59XG5cbjo6bmctZGVlcC5tYXQtaG9yaXpvbnRhbC1jb250ZW50LWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDMycHg7XG59XG5cbi5wb3NfYnRuLXBhbmVsIHtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4ucG9zX2J0bi1wYW5lbCAuc2Vjb25kYXJ5IHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0RjRGO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4ucG9zX2J0bi1wYW5lbCAucHJpbWFyeSB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzdBREE7XG4gIGNvbG9yOiAjZmZmO1xuICBtaW4td2lkdGg6IGF1dG87XG59XG4ucG9zX2J0bi1wYW5lbCAucHJpbWFyeTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYWNiY2QgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4IHRyYW5zcGFyZW50IGluc2V0LCAwIDAgMCAwIHJnYmEoMzQsIDM2LCAzOCwgMC4xNSkgaW5zZXQgIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KSAhaW1wb3J0YW50O1xufVxuXG4uc2VnbWVudCBwIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5iZy1ncmV5IHtcbiAgYmFja2dyb3VuZDogI2QxZGFkZTtcbn1cblxuLmV4YW1wbGUtY2hpcC1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMHB4IHNvbGlkIGdyZXkgIWltcG9ydGFudDtcbn1cblxuLm1hdC1jaGlwLWlucHV0IHtcbiAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuLmlucHV0ZmlsZSB7XG4gIHdpZHRoOiAwLjFweDtcbiAgaGVpZ2h0OiAwLjFweDtcbiAgb3BhY2l0eTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLnRyYW5zcGFyZW50LFxuLnRyYW5zcGFyZW50OmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLmNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1hcmdpbi1yaWdodC0yMCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLm1hcmdpbi1ib3R0b20tMTUge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4uZGltLWZvb3RlciB7XG4gIGNvbG9yOiAjYzNjM2MzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBjdXJzb3I6IGluaGVyaXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMjBweDtcbiAgbGVmdDogMjRweDtcbn1cblxuLm1hdC1jaGlwIHtcbiAgbWFyZ2luOiAwcHggNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5icmFuZGluZy1waWMge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG4ubWF0LXN0YW5kYXJkLWNoaXAgLm1hdC1jaGlwLXJlbW92ZS5tYXQtaWNvbiB7XG4gIHdpZHRoOiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTNweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbS1jb2x1bW5zIC5maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbn1cblxuLnVwbG9hZGVkLWRvY3VtZW50IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi52YWxpZGF0aW9ucyB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcbn1cblxuLnVubGltaXRlZCB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xufVxuXG4udWkuZm9ybSAuZmllbGQgPiBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIGNvbG9yOiAjMTgxQjIwO1xuICBtYXJnaW46IDBweCAwcHggOHB4O1xufVxuXG4udWkuZm9ybSAudGhyZWUud2lkZS5maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5pbmxpbmUtbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUgIWltcG9ydGFudDtcbn1cblxuLnVpLmhlYWRlciB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nLXRvcDogMTRweDtcbiAgcGFkZGluZy1ib3R0b206IDI0cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi51aS5oZWFkZXIubm90ZS1oZWFkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cbi51aS5oZWFkZXIuYmFzaWMtaW5mby1oZWFkZXIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucG9zX2Jhc2ljX2Zvcm0gLnRheC1zZWN0aW9uIHtcbiAgcGFkZGluZzogMHB4O1xufVxuLnBvc19iYXNpY19mb3JtIC50YXhfYmxvY2sge1xuICBib3JkZXI6IDFweCBzb2xpZCAjRDRENkRDO1xuICBib3JkZXItcmFkaXVzOiA1LjEyMTU1cHg7XG4gIG1pbi1oZWlnaHQ6IDM5MHB4O1xufVxuLnBvc19iYXNpY19mb3JtIC50YXhfYmxvY2sgcCB7XG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xufVxuXG46Om5nLWRlZXAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuOjpuZy1kZWVwLm1hdC1jaGlwLWxpc3Qtd3JhcHBlciB7XG4gIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xuICB0b3A6IC0xNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wYXltZW50LWhlYWRlciB7XG4gIG1hcmdpbi10b3A6IDEycHggIWltcG9ydGFudDtcbn1cblxuLnVpLmNoZWNrYm94IHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG4udWkuY2hlY2tib3ggbGFiZWw6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi51aS5jaGVja2JveCBsYWJlbDphZnRlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdG9wOiAxcHg7XG59XG4udWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmJlZm9yZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzODY3YjE7XG59XG4udWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmFmdGVyIHtcbiAgY29sb3I6ICMzODY3YjE7XG59XG5cbi51aS5zZWdtZW50LmJnLWdyZXkge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0Q0RDZEQztcbn1cbi51aS5zZWdtZW50LmJnLWdyZXkgLnVpLmNoZWNrYm94IHtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLmNhcmREZXRhaWxzIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnNwYWNpbmcge1xuICBwYWRkaW5nLWxlZnQ6IDIycHg7XG4gIHBhZGRpbmctcmlnaHQ6IDIycHg7XG59XG5cbi51aS5maXR0ZWQuZGl2aWRlciB7XG4gIG1hcmdpbjogMzBweCAwcHg7XG59XG5cbi51aS5wcmltYXJ5LmJ1dHRvbi5icmFuZF9idXR0b25zIHtcbiAgYmFja2dyb3VuZDogcmdiYSg2NywgMTIyLCAyMTgsIDAuMDUpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjNDM3QURBICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjNDM3QURBO1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4udWkucHJpbWFyeS5idXR0b24uYnJhbmRfYnV0dG9ucyBpLmljb24ge1xuICBjb2xvcjogIzQzN0FEQTtcbn1cblxuLnVpLnByaW1hcnkuYnV0dG9uLmFkZF9idG4ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDM3QURBO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA3LjI0NDQ4cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgY29sb3I6ICM0MzdBREEgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAyMnB4O1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IGF1dG87XG59XG5cbi51aS5wcmltYXJ5LmJ1dHRvbi5hZGRfYnRuLnJlc2V0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzRGNEY0RjtcbiAgY29sb3I6ICM0RjRGNEYgIWltcG9ydGFudDtcbn1cblxuLm5vdGVzLXNlY3Rpb24gdGV4dGFyZWEge1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLnVpLnRyYW5zcGFyZW50Lm1hcmdpbi1yaWdodC0yMCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4udWkuZ3JpZC5jYXJkLXNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRvb2x0aXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogMTYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBib3R0b206IDEwMCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbn1cblxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLm91dGVyLWZvcm0ge1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xufVxuXG4ucG9zX2J0bi1wYW5lbC5zcGFjaW5nIGJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgYm90dG9tOiAtNjRweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5idXR0b25fYWxpZ24ge1xuICBtYXJnaW4tdG9wOiAtMzBweDtcbn1cblxuLmJ1dHRvbnN0eWxlIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uYnV0dG9uc3R5bGUgYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxcHgpIHtcbiAgLmJ1dHRvbnN0eWxlIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxufSJdfQ== */";
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

    var PosOfficeDetailsComponent =
    /*#__PURE__*/
    function () {
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
          var _this28 = this;

          this.posService.getPosDetails(organisation_ID).subscribe(function (result) {
            if (result.status) _this28.posInfo = result.result;

            _this28.officeAddressForm.patchValue({
              organisation_id: _this28.organisation_ID,
              contact_person_name: _this28.posInfo.contact_person_name,
              contact_mobile_number: _this28.posInfo.contact_mobile_number,
              contact_person_email: _this28.posInfo.contact_person_email,
              address_1: _this28.posInfo.address_1,
              address_2: _this28.posInfo.address_2,
              city_id: _this28.posInfo.city_id,
              state_province: _this28.posInfo.state_province,
              zip: _this28.posInfo.zip,
              contact_country_id: _this28.posInfo.contact_country_id,
              currency: _this28.posInfo.currency_id
            });

            _this28.ngAfterViewInit();
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
          var _this29 = this;

          this.posService.updatePosDetails(this.officeAddressForm.value).subscribe(function (res) {
            if (res.status) {
              _this29.toastr.success("".concat(res.message), "Error ", {
                timeOut: 1000,
                progressBar: true,
                progressAnimation: 'decreasing',
                positionClass: 'toast-top-right'
              });

              _this29.router.navigate(['/pos/basic-edit/' + _this29.organisation_ID]);
            } else {
              _this29.toastr.error("".concat(res.message), "Success ", {
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
          var _this30 = this;

          this.CommonService.getCountryList().subscribe(function (result) {
            _this30.countries = result.countries;
          });
        }
      }, {
        key: "passCountryId",
        value: function passCountryId(val) {
          var _this31 = this;

          this.CommonService.getCityList(val).subscribe(function (result) {
            _this31.cities = result.cities;
          });
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/pos-office-details/pos-office-details.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pos-office-details.component.scss */
      "./src/app/layout/pos/pos-office-details/pos-office-details.component.scss")).default]
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


    __webpack_exports__["default"] = ".update-header {\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n  margin-left: 30px;\n}\n\n.ui.fluid.container {\n  padding: 24px !important;\n}\n\n.outer-basic {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n}\n\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n}\n\n.filter_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.filter_btn_reset {\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.filter_list {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.icon {\n  opacity: 1;\n  z-index: 100;\n}\n\n.icon .corporate_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.icon .corporate_input__placeholder-icon.cal {\n  width: 0px;\n  margin-top: 10px;\n  font-size: 13px;\n}\n\n.icon .corporate_input__placeholder-icon.call {\n  width: 15px;\n  margin-top: 0px;\n  margin-left: 7px;\n}\n\n.icon .corporate_input__placeholder-icon.calll {\n  width: 20px;\n  margin-top: 10px;\n}\n\n.icon .corporate_input__placeholder-icon.ico {\n  width: 15px;\n  margin-top: 10px;\n}\n\n.search-field-wrapper {\n  padding-bottom: 24px;\n}\n\n.bookings_btn-panel button {\n  margin: 0px 8px;\n  margin-top: 8px;\n}\n\n@media (max-width: 1440px) {\n  .ui.fluid .outer-basic .outer-basicForm {\n    padding: 0px;\n  }\n}\n\n@media (max-width: 768px) {\n  .ui.form .three.wide.field {\n    width: 26.75% !important;\n  }\n}\n\n@media (max-width: 375px) and (min-width: 320px) {\n  .bookings_btn-panel .primary.button {\n    margin-bottom: 5px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Bvcy9wb3MtcmVhZC9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHBvc1xccG9zLXJlYWRcXHBvcy1yZWFkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcG9zL3Bvcy1yZWFkL3Bvcy1yZWFkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUZBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpRkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNDSjs7QURBSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDRVI7O0FERFE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDR1o7O0FERFE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDR1o7O0FERFE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNHWjs7QUREUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0daOztBREVBO0VBQ0ksb0JBQUE7QUNDSjs7QURHSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0FDQVI7O0FESUE7RUFDSTtJQUNJLFlBQUE7RUNETjtBQUNGOztBRElBO0VBQ0E7SUFDSSx3QkFBQTtFQ0ZGO0FBQ0Y7O0FES0E7RUFDQTtJQUNJLDZCQUFBO0VDSEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wb3MvcG9zLXJlYWQvcG9zLXJlYWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBkYXRlLWhlYWRlciB7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4udWkuZmx1aWQuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDI0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpY0Zvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5maWx0ZXJfYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5maWx0ZXJfYnRuX3Jlc2V0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0RjRGNEY7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5maWx0ZXJfbGlzdCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIC5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICAmLmNhbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5jYWxsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5jYWxsbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmljbyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNlYXJjaC1maWVsZC13cmFwcGVyIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG4uYm9va2luZ3NfYnRuLXBhbmVsIHtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggOHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6OHB4XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIC51aS5mbHVpZCAub3V0ZXItYmFzaWMgLm91dGVyLWJhc2ljRm9ybSB7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpe1xyXG4udWkuZm9ybSAudGhyZWUud2lkZS5maWVsZCB7XHJcbiAgICB3aWR0aDogMjYuNzUlIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkgYW5kIChtaW4td2lkdGg6IDMyMHB4KXtcclxuLmJvb2tpbmdzX2J0bi1wYW5lbCAucHJpbWFyeS5idXR0b24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59IiwiLnVwZGF0ZS1oZWFkZXIge1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi51aS5mbHVpZC5jb250YWluZXIge1xuICBwYWRkaW5nOiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5vdXRlci1iYXNpYyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ub3V0ZXItYmFzaWNGb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmZpbHRlcl9idG4ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmZpbHRlcl9idG5fcmVzZXQge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RjRGNEY7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLmZpbHRlcl9saXN0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pY29uIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTAwO1xufVxuLmljb24gLmNvcnBvcmF0ZV9pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4uaWNvbiAuY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbCB7XG4gIHdpZHRoOiAwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5pY29uIC5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsbCB7XG4gIHdpZHRoOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG59XG4uaWNvbiAuY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbGxsIHtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uaWNvbiAuY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmljbyB7XG4gIHdpZHRoOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc2VhcmNoLWZpZWxkLXdyYXBwZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMjRweDtcbn1cblxuLmJvb2tpbmdzX2J0bi1wYW5lbCBidXR0b24ge1xuICBtYXJnaW46IDBweCA4cHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAudWkuZmx1aWQgLm91dGVyLWJhc2ljIC5vdXRlci1iYXNpY0Zvcm0ge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC51aS5mb3JtIC50aHJlZS53aWRlLmZpZWxkIHtcbiAgICB3aWR0aDogMjYuNzUlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzNzVweCkgYW5kIChtaW4td2lkdGg6IDMyMHB4KSB7XG4gIC5ib29raW5nc19idG4tcGFuZWwgLnByaW1hcnkuYnV0dG9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHggIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */";
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


    var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
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

    var PosReadComponent =
    /*#__PURE__*/
    function () {
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
          corporate_type: 'all',
          nameAndOfficeId: ''
        };
        this.toggleObj = {};
        this.filterForm = this.fb.group({
          corporate_type: ['all'],
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
          var _this32 = this;

          this.pointOfSaleService.getList(filterParams).subscribe(function (result) {
            _this32.pointOfSales = result.result.data;
            _this32.totalPos = result.total;
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
          var _this33 = this;

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
              _this33.pointOfSaleService.deletePos(valObj.organisation_id).subscribe(function (result) {
                if (result.status == false) {
                  _this33.toastr.error("".concat(result.message), "", {
                    timeOut: 10000,
                    progressBar: false,
                    positionClass: 'toast-top-right'
                  });
                } else {
                  _this33.toastr.success("".concat(result.message), "", {
                    timeOut: 10000,
                    progressBar: false,
                    positionClass: 'toast-top-right'
                  });

                  _this33.getList(_this33.filterParams);
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
          });
        }
      }, {
        key: "viewPOSPage",
        value: function viewPOSPage(valObj) {
          console.log(valObj);
          var navigationExtras = {
            queryParams: valObj
          };
          this.router.navigate(['/pos/basic-edit/' + valObj.organisation_id]);
        }
      }, {
        key: "statusToggle",
        value: function statusToggle(data) {
          var _this34 = this;

          this.toggleObj.id = data.organisation_id;
          this.toggleObj.status = data.is_active;
          this.toggleObj.table = "organisation";
          this.pointOfSaleService.onStatusToggle(this.toggleObj).subscribe(function (res) {
            if (res.status == 200) {
              _this34.getList(_this34.filterParams);
            } else {
              _this34.toastr.error("".concat(res.msg), "".concat(res.msg), {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-top-right'
              });
            }
          });
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/pos-read/pos-read.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pos-read.component.scss */
      "./src/app/layout/pos/pos-read/pos-read.component.scss")).default]
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

    var PosComponent =
    /*#__PURE__*/
    function () {
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/pos/pos.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./pos.component.scss */
      "./src/app/layout/pos/pos.component.scss")).default]
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

    var PosModule = function PosModule() {
      _classCallCheck(this, PosModule);
    };

    PosModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pos_component__WEBPACK_IMPORTED_MODULE_5__["PosComponent"], _basic_info_basic_info_component__WEBPACK_IMPORTED_MODULE_3__["BasicInfoComponent"], _airline_rbd_airline_rbd_component__WEBPACK_IMPORTED_MODULE_7__["AirlineRbdComponent"], _pos_basic_edit_pos_basic_edit_component__WEBPACK_IMPORTED_MODULE_8__["PosBasicEditComponent"], _pos_office_details_pos_office_details_component__WEBPACK_IMPORTED_MODULE_9__["PosOfficeDetailsComponent"], _branding_info_branding_info_component__WEBPACK_IMPORTED_MODULE_10__["BrandingInfoComponent"], _monthly_target_monthly_target_component__WEBPACK_IMPORTED_MODULE_11__["MonthlyTargetComponent"], _active_suppliers_active_suppliers_component__WEBPACK_IMPORTED_MODULE_12__["ActiveSuppliersComponent"], _pos_read_pos_read_component__WEBPACK_IMPORTED_MODULE_13__["PosReadComponent"], _pos_branch_pos_branch_component__WEBPACK_IMPORTED_MODULE_15__["PosBranchComponent"]],
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

    var PointOfSaleService =
    /*#__PURE__*/
    function () {
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

    var PosService =
    /*#__PURE__*/
    function () {
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
          console.log("data::::", data);
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
          return this.http.get("".concat(this.url, "/api/organization/branches/").concat(id));
        }
      }, {
        key: "deleteBranch",
        value: function deleteBranch(id) {
          return this.http.get("".concat(this.url, "/api/branches/delete/").concat(id));
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