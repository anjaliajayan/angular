function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-agency-profile-new-agency-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile.component.html":
  /*!*********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile.component.html ***!
    \*********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutProfileManagementCreateNewProfileNewAgencyProfileNewAgencyProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3><span class=\"booking-header\">New Agency Profile</span></h3>\r\n<div class=\"ui fluid container\">\r\n  <div class=\"ui grid container stepper-grid\" #tab>\r\n    <div class=\"five wide column stepper-grid_step _active\" id=\"member\" (click)=\"setActiveTab('member')\">\r\n      <div class=\"stepper-grid_step__step-icon\">\r\n        <div>\r\n          <div class=\"image _member\"></div>\r\n        </div>\r\n        <label>Personal Info</label>\r\n      </div>\r\n      <div class=\"stepper-grid_step__step-border\">\r\n        <hr />\r\n      </div>\r\n    </div>\r\n    <div class=\"five wide column stepper-grid_step\" id=\"payment\" (click)=\"setActiveTab('payment')\">\r\n      <div class=\"stepper-grid_step__step-icon\">\r\n        <div>\r\n          <div class=\"image _payment\"></div>\r\n        </div>\r\n        <label>Payment</label>\r\n      </div>\r\n      <div class=\"stepper-grid_step__step-border\">\r\n        <hr />\r\n      </div>\r\n    </div>\r\n    <div class=\"three wide column stepper-grid_step\" id=\"remarks\" (click)=\"setActiveTab('remarks')\">\r\n      <div class=\"stepper-grid_step__step-icon\">\r\n        <div>\r\n          <div class=\"image _remarks\"></div>\r\n        </div>\r\n        <label>Remarks</label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <form class=\"ui form\" autocomplete=\"off\" [formGroup]=\"newAgencyProfileForm\" #tabContent>\r\n    <div id=\"member-content\" class=\"stepper-grid-content animated fadeIn _active\">\r\n      <div class=\"outer-basic\">\r\n        <div class=\"outer-basicForm\">\r\n          <div class=\"ui grid form-inner\">\r\n            <div class=\"sixteen wide column\">\r\n              <h4>Personal</h4>\r\n            </div>\r\n            <div class=\"sixteen wide column\">\r\n              <label>Agency Info</label>\r\n            </div>\r\n            <div class=\"ui sixteen wide column grid\">\r\n              <div class=\"two wide column\">\r\n                <input type=\"text\" name=\"reponsibleOffice\" formControlName=\"responsible_office\" value=\"\"\r\n                  placeholder=\"Responsible Office\">\r\n              </div>\r\n              <div class=\"four wide column\">\r\n                <input type=\"text\" name=\"deptContactName\" formControlName=\"department_contact_name\" value=\"\"\r\n                  placeholder=\"Department Contact Name\">\r\n              </div>\r\n              <div class=\"four wide column\">\r\n                <input type=\"text\" name=\"agentContactName\" formControlName=\"agent_contact_name\" value=\"\"\r\n                  placeholder=\"Agent Contact Name\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div formArrayName=\"number\">\r\n            <div *ngFor=\"let numberD of newAgencyProfileForm.get('number')['controls'];let nIndex = index\">\r\n              <div [formGroupName]=\"nIndex\" class=\"ui sixteen wide column grid\">\r\n                <div class=\"three wide column newAgency_topAlign\">\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" name=\"prefered\" formControlName=\"preferedHome\" value=\"\">\r\n                    <label>Prefered</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"two wide column\">\r\n                  <div class=\"ui fluid search selection dropdown\">\r\n                    <input type=\"hidden\" name=\"home\" formControlName=\"home\" value=\"\">\r\n                    <i class=\"dropdown icon\"></i>\r\n                    <div class=\"default text\">Home</div>\r\n                    <div class=\"menu\">\r\n                      <div class=\"item\" (click)=\"setDropDownType('Home 1', 'home')\">Home 1</div>\r\n                      <div class=\"item\" (click)=\"setDropDownType('Home 2', 'home')\">Home 2</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"four wide column\">\r\n                  <input type=\"text\" name=\"number\" formControlName=\"number\" value=\"\" placeholder=\"Number\">\r\n                </div>\r\n                <div class=\"five wide column\">\r\n                  <input type=\"text\" name=\"number_comment\" formControlName=\"number_comment\" value=\"\"\r\n                    placeholder=\"Comment\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"sixteen wide column\">\r\n            <button class=\"ui primary  button btn-sticky\" (click)=\"addMoreNumbers()\">\r\n              Add Number +\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic mtb\">\r\n        <div class=\"outer-basicForm\">\r\n          <div class=\"sixteen wide column\">\r\n            <label>Email Info</label>\r\n          </div>\r\n          <div formArrayName=\"email\">\r\n            <div *ngFor=\"let emailD of newAgencyProfileForm.get('email')['controls']; let eIndex = index\">\r\n              <div [formGroupName]=\"eIndex\" class=\"ui sixteen wide column grid\">\r\n                <div class=\"three wide column newAgency_topAlign\">\r\n                  <div class=\"ui checkbox \">\r\n                    <input type=\"checkbox\" name=\"prefered\" formControlName=\"preferedOfficial\">\r\n                    <label>Prefered</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"two wide column\">\r\n                  <div class=\"ui fluid search selection dropdown\">\r\n                    <input type=\"hidden\" name=\"office\" formControlName=\"Official\" value=\"\">\r\n                    <i class=\"dropdown icon\"></i>\r\n                    <div class=\"default text\">Official</div>\r\n                    <div class=\"menu\">\r\n                      <div class=\"item\" (click)=\"setDropDownType('Official 1', 'Official')\">Official 1</div>\r\n                      <div class=\"item\" (click)=\"setDropDownType('Official 1', 'Official')\">Official 2</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"four wide column\">\r\n                  <input type=\"text\" name=\"emailAddress\" formControlName=\"emailAddress\" value=\"\"\r\n                    placeholder=\"Email Address\">\r\n                </div>\r\n                <div class=\"five wide column\">\r\n                  <input type=\"text\" name=\"comment\" formControlName=\"emailAddress_comment\" value=\"\"\r\n                    placeholder=\"Comment\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui primary button btn-sticky\" (click)=\"addMoreEmail()\">\r\n              Add Email +\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic mtb\">\r\n        <div class=\"outer-basicForm\">\r\n          <div class=\"sixteen wide column\">\r\n            <label>Address Info</label>\r\n          </div>\r\n          <div formArrayName=\"address\">\r\n            <div *ngFor=\"let addressD of newAgencyProfileForm.get('address')['controls']; let aIndex = index\">\r\n              <div [formGroupName]=\"aIndex\">\r\n                <div class=\"fields\">\r\n                  <div class=\"field\">\r\n                    <div class=\"three wide field newAgency_topAlign\">\r\n                      <div class=\"ui checkbox \">\r\n                        <input type=\"checkbox\" name=\"prefered\" formControlName=\"preferedAddress\" value=\"\">\r\n                        <label>Prefered</label>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"two wide field\">\r\n                    <div class=\"ui fluid search selection dropdown\">\r\n                      <input type=\"hidden\" name=\"office\" formControlName=\"addressList\" value=\"\">\r\n                      <i class=\"dropdown icon\"></i>\r\n                      <div class=\"default text\">Office</div>\r\n                      <div class=\"menu\">\r\n                        <div class=\"item\" (click)=\"setDropDownType('Office 1', 'addressList')\">\r\n                          Office 1</div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Office 2', 'addressList')\">\r\n                          Office 2</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"five wide field\">\r\n                    <input type=\"text\" name=\"address\" formControlName=\"address\" value=\"\" placeholder=\"Address\">\r\n                  </div>\r\n                  <div class=\"three wide field\">\r\n                    <input type=\"text\" name=\"street\" formControlName=\"street\" value=\"\" placeholder=\"Street\">\r\n                  </div>\r\n                  <div class=\"three wide field\">\r\n                    <input type=\"text\" name=\"city\" formControlName=\"city\" value=\"\" placeholder=\"City\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"fields\">\r\n                  <div class=\"field\">\r\n                    <div class=\"three wide field\">\r\n                      <div class=\"ui checkbox \">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"three wide field\">\r\n                  </div>\r\n                  <div class=\"two wide field\">\r\n                    <input type=\"text\" name=\"state\" formControlName=\"state\" value=\"\" placeholder=\"Region/State\">\r\n                  </div>\r\n                  <div class=\"three wide field\">\r\n                    <input type=\"text\" name=\"postalCode\" formControlName=\"postalCode\" value=\"\"\r\n                      placeholder=\"Postal Code\">\r\n                  </div>\r\n                  <div class=\"three wide field\">\r\n                    <div class=\"ui fluid search selection dropdown\">\r\n                      <input type=\"hidden\" name=\"country\" formControlName=\"countryList\" value=\"\">\r\n                      <i class=\"dropdown icon\"></i>\r\n                      <div class=\"default text\">Country</div>\r\n                      <div class=\"menu\">\r\n                        <div class=\"item\" (click)=\"setDropDownType('USA', 'countryList')\">\r\n                          USA</div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('UAE', 'countryList')\">\r\n                          UAE</div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Australia', 'countryList')\">\r\n                          Australia</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"three wide field\">\r\n                    <input type=\"text\" name=\"company\" formControlName=\"company\" value=\"\" placeholder=\"Company\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"fields\">\r\n                  <div class=\"field\">\r\n                    <div class=\"three wide field\">\r\n                      <div class=\"ui checkbox \">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"three wide field\">\r\n                  </div>\r\n                  <div class=\"five wide field\">\r\n                    <input type=\"text\" name=\"comment\" formControlName=\"address_comment\" value=\"\" placeholder=\"Comment\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui primary button btn-sticky\" (click)=\"addMoreAddress()\">\r\n              Add Address +\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"payment-content\" class=\"stepper-grid-content animated fadeIn\">\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Payment Data</h4>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <label>Bank Accounts</label>\r\n            </div>\r\n            <div formArrayName=\"bank_accounts\">\r\n              <div\r\n                *ngFor=\"let bank_accountsD of newAgencyProfileForm.get('bank_accounts')['controls']; let bank_accountsIndex = index\">\r\n                <div [formGroupName]=\"bank_accountsIndex\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"two wide field\">\r\n                      <input type=\"text\" name=\"code\" formControlName=\"bank_code\" value=\"\" placeholder=\"Code\">\r\n                    </div>\r\n                    <div class=\"five wide field\">\r\n                      <input type=\"text\" name=\"name\" formControlName=\"bank_name\" value=\"\" placeholder=\"Name\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"bankAccountNumber\" formControlName=\"bank_number\" value=\"\"\r\n                        placeholder=\"Number\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"city\" value=\"\" formControlName=\"bank_city\" value=\"\" placeholder=\"City\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"fields\">\r\n                    <div class=\"two wide field\">\r\n                    </div>\r\n                    <div class=\"five wide field\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"validFrom\" formControlName=\"bank_valid_from\" value=\"\"\r\n                        placeholder=\"Valid From(DD MM YYYY)\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"validUntil\" formControlName=\"bank_valid_to\" value=\"\"\r\n                        placeholder=\"Valid Until(DD MM YYYY)\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"fields\">\r\n                    <div class=\"two wide field\">\r\n                    </div>\r\n                    <div class=\"five wide field\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <div class=\"ui checkbox \">\r\n                        <input type=\"checkbox\" name=\"directDebitAuthorized\">\r\n                        <label class=\"checkbox_label\">Direct Debit Authorized</label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"five wide field\">\r\n                <div class=\"ui primary button\" (click)=\"addBankAccount()\">\r\n                  Add Bank Account +\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"five wide field\">\r\n                <div formArrayName=\"forms_of_payment\">\r\n                  <div\r\n                    *ngFor=\"let forms_of_paymentD of newAgencyProfileForm.get('forms_of_payment')['controls']; let payIndex = index\">\r\n                    <div [formGroupName]=\"payIndex\" class=\"fields\">\r\n                      <input type=\"text\" name=\"formOfPayment\" formControlName=\"forms_of_payment\" value=\"\"\r\n                        placeholder=\"Form Of Payment\">\r\n                      <div class=\"newAgency_topAlign\" *ngIf=\"payIndex > 0\" (click)=\"removeForms_of_payment(payIndex)\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                        </i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ui primary button\" (click)=\"addMoreForms_of_payment()\">\r\n                  Add More +\r\n                </div>\r\n              </div>\r\n              <div class=\"four wide field\"></div>\r\n              <div class=\"five wide field \">\r\n                <div formArrayName=\"endorsements\">\r\n                  <div\r\n                    *ngFor=\"let endorsementsD of newAgencyProfileForm.get('endorsements')['controls']; let eIndex = index\">\r\n                    <div [formGroupName]=\"eIndex\" class=\"fields\">\r\n                      <input type=\"text\" name=\"endorsement\" formControlName=\"endorsements\" value=\"\"\r\n                        placeholder=\"Endorsement\">\r\n                      <div class=\"newAgency_topAlign\" *ngIf=\"eIndex > 0\" (click)=\"removeEndorsements(eIndex)\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                        </i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui primary button\" (click)=\"addMoreEndorsements()\">\r\n                    Add More +\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"five wide field\">\r\n                <div formArrayName=\"fare_price_override\">\r\n                  <div\r\n                    *ngFor=\"let fare_price_overrideD of newAgencyProfileForm.get('fare_price_override')['controls']; let overrideIndex = index\">\r\n                    <div [formGroupName]=\"overrideIndex\" class=\"fields\">\r\n                      <input type=\"text\" name=\"fairPriceOverride\" formControlName=\"fare_price_override\" value=\"\"\r\n                        placeholder=\"Fair Price Override\">\r\n                      <div class=\"newAgency_topAlign\" *ngIf=\"overrideIndex > 0\"\r\n                        (click)=\"removeFair_price_override(overrideIndex)\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                        </i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui primary button\" (click)=\"addMoreFair_price_override()\">\r\n                    Add More +\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"four wide field\"></div>\r\n              <div class=\"five wide field \">\r\n                <input type=\"text\" name=\"discount\" formControlName=\"discounts\" value=\"\" placeholder=\"Discount\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Commission</h4>\r\n            </div>\r\n            <div class=\"ui sixteen wide column grid\">\r\n              <div formArrayName=\"commissions\" class=\"sixteen wide column\">\r\n                <div\r\n                  *ngFor=\"let commissionD of newAgencyProfileForm.get('commissions')['controls']; let comIndex = index\">\r\n                  <div [formGroupName]=\"comIndex\" class=\"ui sixteen wide column grid\">\r\n                    <div class=\"five wide column\">\r\n                      <input type=\"text\" name=\"text\" formControlName=\"commisionText\" value=\"\" placeholder=\"Text\">\r\n                    </div>\r\n                    <div class=\"five wide column \">\r\n                      <input type=\"text\" name=\"providerCode\" formControlName=\"commisionProvideCode\" value=\"\"\r\n                        placeholder=\"Provider Code\">\r\n                    </div>\r\n                    <div class=\"newAgency_topAlign\" *ngIf=\"comIndex > 0\" (click)=\"removeComission(comIndex)\">\r\n                      <i class=\"icon\">\r\n                        <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ui primary button btn-sticky\" (click)=\"addMoreComission()\">\r\n                  Add More +\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Accounting</h4>\r\n            </div>\r\n            <div formArrayName=\"accounting\">\r\n              <div *ngFor=\"let accountingD of newAgencyProfileForm.get('accounting')['controls']; let accIndex = index\">\r\n                <div [formGroupName]=\"accIndex\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"four wide field\">\r\n                      <input type=\"text\" name=\"accountNumber\" formControlName=\"accountNumber\" value=\"\"\r\n                        placeholder=\"Account Number\">\r\n                    </div>\r\n                    <div class=\"four wide field \">\r\n                      <input type=\"text\" name=\"costCentre\" formControlName=\"accountCostCentre\" value=\"\"\r\n                        placeholder=\"Cost Centre\">\r\n                    </div>\r\n                    <div class=\"four wide field \">\r\n                      <input type=\"text\" name=\"iataNumber\" formControlName=\"accountIataNumber\" value=\"\"\r\n                        placeholder=\"IATA Number\">\r\n                    </div>\r\n                    <div class=\"four wide field \">\r\n                      <input type=\"text\" name=\"clientReference\" formControlName=\"accountClientReference\" value=\"\"\r\n                        placeholder=\"Client Reference\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"fields\">\r\n                    <div class=\"four wide field\">\r\n                      <input type=\"text\" name=\"gstTaxName\" formControlName=\"accountGstTaxName\" value=\"\"\r\n                        placeholder=\"GST Tax Name\">\r\n                    </div>\r\n                    <div class=\"four wide field \">\r\n                      <input type=\"text\" name=\"gstTaxNumber\" formControlName=\"accountGetTaxNumber\" value=\"\"\r\n                        placeholder=\"GST Tax Number\">\r\n                    </div>\r\n                    <div class=\"four wide field \">\r\n                      <input type=\"text\" name=\"gstTaxAddress\" formControlName=\"accountGstTaxAddress\" value=\"\"\r\n                        placeholder=\"GST Tax Address\">\r\n                    </div>\r\n                    <div class=\"ui primary button btn-sticky\" (click)=\"addMoreAccounting()\">\r\n                      Add Accounting +\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"remarks-content\" class=\"stepper-grid-content animated fadeIn\">\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Remarks</h4>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <label>Remarks</label>\r\n            </div>\r\n            <div formArrayName=\"remarks\">\r\n              <div *ngFor=\"let remarksD of newAgencyProfileForm.get('remarks')['controls']; let remarksIndex = index\">\r\n                <div [formGroupName]=\"remarksIndex\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"three wide field\">\r\n                      <div class=\"ui fluid search selection dropdown\">\r\n                        <input type=\"hidden\" formControlName=\"remark_type\" value=\"\" name=\"remarkType\">\r\n                        <i class=\"dropdown icon\"></i>\r\n                        <div class=\"default text\">Remark Type</div>\r\n                        <div class=\"menu\">\r\n                          <div class=\"item\" (click)=\"setDropDownType('Type 1', 'remark_type')\">Type 1</div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('Type 2', 'remark_type')\">Type 2</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"three wide field \">\r\n                      <div class=\"ui fluid search selection dropdown\">\r\n                        <input type=\"hidden\" formControlName=\"remark_category\" value=\"\" name=\"category\">\r\n                        <i class=\"dropdown icon\"></i>\r\n                        <div class=\"default text\">Category</div>\r\n                        <div class=\"menu\">\r\n                          <div class=\"item\" (click)=\"setDropDownType('Category 1', 'remark_category')\">Category 1</div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('Category 2', 'remark_category')\">Category 2</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"six wide field \">\r\n                      <textarea type=\"text\" name=\"remark\" formControlName=\"remark\" value=\"\" placeholder=\"Remark\"\r\n                        rows=\"4\" cols=\"50\"></textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui primary button btn-sticky\" (click)=\"addMoreNumbers()\">\r\n              Add Remark +\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Profile Notes</h4>\r\n            </div>\r\n            <div formArrayName=\"profile_notes\">\r\n              <div\r\n                *ngFor=\"let profile_notesD of newAgencyProfileForm.get('profile_notes')['controls']; let notesIndex = index\">\r\n                <div [formGroupName]=\"notesIndex\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"three wide field\">\r\n                      <div class=\"ui fluid search selection dropdown\">\r\n                        <input type=\"hidden\" formControlName=\"profile_notes_category\" value=\"\" name=\"category\">\r\n                        <i class=\"dropdown icon\"></i>\r\n                        <div class=\"default text\">Category</div>\r\n                        <div class=\"menu\">\r\n                          <div class=\"item\" (click)=\"setDropDownType('Category 1', 'profile_notes_category')\">Category 1\r\n                          </div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('Category 1', 'profile_notes_category')\">Category 2\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"five wide field \">\r\n                      <input type=\"text\" name=\"information\" formControlName=\"profile_notes_information\" value=\"\"\r\n                        placeholder=\"Information\">\r\n                    </div>\r\n                    <div class=\"ui primary button btn-sticky\" (click)=\"addMoreProfileNotes()\">\r\n                      Add Profile Note +\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Priority Lines 1</h4>\r\n            </div>\r\n            <div formArrayName=\"priority_lines1\">\r\n              <div\r\n                *ngFor=\"let priority_lines1D of newAgencyProfileForm.get('priority_lines1')['controls']; let priorityIndex1 = index\">\r\n                <div [formGroupName]=\"priorityIndex1\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"five wide field \">\r\n                      <input type=\"text\" name=\"information\" formControlName=\"priorityInformation1\" value=\"\"\r\n                        placeholder=\"\">\r\n                    </div>\r\n                    <div class=\"ui primary button btn-sticky\" (click)=\"addMorePriority_lines1()\">\r\n                      Add Priority Line +\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Priority Lines 2</h4>\r\n            </div>\r\n            <!-- <div class=\"fields\"> -->\r\n            <div formArrayName=\"priority_lines2\">\r\n              <div\r\n                *ngFor=\"let priority_lines2D of newAgencyProfileForm.get('priority_lines2')['controls']; let priorityIndex2 = index\">\r\n                <div [formGroupName]=\"priorityIndex2\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"five wide field \">\r\n                      <input type=\"text\" name=\"information\" formControlName=\"priorityInformation2\" value=\"\"\r\n                        placeholder=\"\">\r\n                    </div>\r\n                    <div class=\"ui primary button btn-sticky\" (click)=\"addMorePriority_lines2()\">\r\n                      Add Priority Line +\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- </div> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Follow Up</h4>\r\n            </div>\r\n            <div formArrayName=\"follow_up\">\r\n              <div\r\n                *ngFor=\"let follow_upD of newAgencyProfileForm.get('follow_up')['controls']; let follow_upIndex = index\">\r\n                <div [formGroupName]=\"follow_upIndex\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"three wide field \">\r\n                      <input type=\"text\" name=\"date\" formControlName=\"followUpDate\" value=\"\"\r\n                        placeholder=\"Date (DDMMYYYY)\">\r\n                    </div>\r\n                    <div class=\"three wide field \">\r\n                      <input type=\"text\" name=\"action\" formControlName=\"followUpAction\" value=\"\" placeholder=\"Action\">\r\n                    </div>\r\n                    <div class=\"ui primary button btn-sticky\" (click)=\"addMoreFollow_up()\">\r\n                      Add Follow Up +\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"ui sixteen wide column grid\">\r\n        <div class=\"sixteen wide column text-right\">\r\n          <button type=\"button\" class=\"ui positive button m-auto\" (click)=\"createNewAgencyProfile()\">\r\n            Save\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile-routing.module.ts":
  /*!**********************************************************************************************************************!*\
    !*** ./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile-routing.module.ts ***!
    \**********************************************************************************************************************/

  /*! exports provided: NewAgencyProfileRoutingModule */

  /***/
  function srcAppLayoutProfileManagementCreateNewProfileNewAgencyProfileNewAgencyProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewAgencyProfileRoutingModule", function () {
      return NewAgencyProfileRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _new_agency_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./new-agency-profile.component */
    "./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile.component.ts");
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
      component: _new_agency_profile_component__WEBPACK_IMPORTED_MODULE_1__["NewAgencyProfileComponent"]
    }];

    var NewAgencyProfileRoutingModule = function NewAgencyProfileRoutingModule() {
      _classCallCheck(this, NewAgencyProfileRoutingModule);
    };

    NewAgencyProfileRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], NewAgencyProfileRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile.component.scss":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile.component.scss ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutProfileManagementCreateNewProfileNewAgencyProfileNewAgencyProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".stepper-grid {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n.stepper-grid .stepper-grid_step {\n  display: flex;\n  align-items: center;\n  opacity: 0.6;\n  cursor: pointer;\n}\n.stepper-grid .stepper-grid_step._active {\n  opacity: 1;\n  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div {\n  background-color: #062862;\n  border: 0;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div div.image {\n  background-color: white;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div:hover {\n  border: 2px solid #A6B1C3;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon label {\n  border: 0;\n  background-color: #062862;\n  color: white;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-border hr {\n  border-bottom: 2px solid #062862;\n}\n.stepper-grid .stepper-grid_step._activated {\n  opacity: 1;\n  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div {\n  background-color: #437ADA;\n  border: 0;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div div.image {\n  background-color: white;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div:hover {\n  border: 2px solid #A6B1C3;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon label {\n  border: 0;\n  background-color: #437ADA;\n  color: white;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-border hr {\n  border-bottom: 2px solid #437ADA;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div {\n  background-color: transparent;\n  border: 2px solid #A6B1C3;\n  color: white;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  border-radius: 50%;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon label {\n  width: 100px;\n  height: auto;\n  line-height: 24px;\n  text-align: center;\n  background-color: transparent;\n  border: 2px solid #A6B1C3;\n  margin-top: 15px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 600 !important;\n  font-size: 13px;\n  color: #A6B1C3;\n  border-radius: 8px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon label._last {\n  width: 150px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-border {\n  width: 100%;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-border hr {\n  margin-top: -24px;\n  width: 100%;\n  height: 2px;\n  background: none;\n  border-bottom: 2px solid #A6B1C3;\n}\n.stepper-grid-content {\n  display: none;\n}\n.stepper-grid-content._active {\n  display: block;\n}\n.checkbox_label {\n  height: 13px !important;\n  color: #828282 !important;\n  font-family: Ubuntu !important;\n  font-size: 12px !important;\n  font-weight: 300 !important;\n}\n.booking-header {\n  color: #4F4F4F;\n  font-family: Helvetica;\n  font-size: 20px;\n  font-weight: 300;\n  line-height: 22px;\n  margin-left: 22px;\n}\n.outer-basic {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n  padding: 15px;\n}\n.bookings_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n.bookings_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n.bookings_pickers .input .icon {\n  opacity: 1;\n  z-index: 100;\n}\n.bookings_pickers .input .icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n.bookings_pickers .input .icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n.bookings_pickers .input .search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.bookings_pickers .input .search.dropdown .search {\n  margin-left: 42px !important;\n}\n.bookings_pickers .input .search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n.bookings_btn-panel .secondary {\n  width: 135.64px;\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n.bookings_btn-panel .primary {\n  width: 135.64px;\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n.trailing_button {\n  position: absolute;\n  right: 0;\n}\n.newAgency_topAlign {\n  padding-top: 1vh;\n}\ntd {\n  color: #4F4F4F;\n  font-family: Helvetica;\n  font-size: 10px;\n  line-height: 11px;\n  text-align: center;\n}\nth {\n  color: #4F4F4F;\n  font-family: Helvetica;\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 11px;\n  text-align: center;\n}\n.confirm {\n  width: 63px;\n}\n.recConfirm {\n  height: 18px;\n  width: 62px;\n  background-color: #72D44F;\n  color: white;\n  padding-top: 0.5vh;\n}\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n.field input::-webkit-input-placeholder {\n  font-size: 12px;\n}\n.field input::-moz-placeholder {\n  font-size: 12px;\n}\n.field input::-ms-input-placeholder {\n  font-size: 12px;\n}\n.field input::placeholder {\n  font-size: 12px;\n}\n.outer-basic_secondary {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n}\n.outer-basicForm_secondary {\n  width: 100%;\n  height: auto;\n  padding: 15px;\n}\n.right_links {\n  position: absolute;\n  right: 0;\n  padding-top: 1vh;\n  padding-right: 8vh;\n  color: #3867B1;\n  font-family: Ubuntu;\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 12px;\n}\n.outer-basic_tertiary {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\n.outer-basicForm_tertiary {\n  width: 100%;\n  height: auto;\n  padding: 50px;\n}\nhr {\n  box-sizing: border-box;\n  height: 1px;\n  border: 0.5px solid #E0E0E0;\n}\n.dropdown .text {\n  font-size: 12px;\n}\n.bookings_btn-panel.trailing_button {\n  margin-right: 45px;\n}\n.ui.fluid.container {\n  padding: 28px;\n}\n.right_links {\n  padding-top: 1vh;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image {\n  width: 22px;\n  margin: 0 auto;\n  background-color: #A6B1C3;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._member {\n  -webkit-mask: url('personal.svg') no-repeat center;\n  mask: url('personal.svg') no-repeat center;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._payment {\n  -webkit-mask: url('payment.svg') no-repeat center;\n  mask: url('payment.svg') no-repeat center;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._remarks {\n  -webkit-mask: url('remarks.svg') no-repeat center;\n  mask: url('remarks.svg') no-repeat center;\n}\n.stepper-grid {\n  padding-left: 100px;\n}\n.mtb {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n.ml {\n  margin-left: 20px;\n}\n.mr {\n  margin-right: 20px;\n}\n.ui.form input[type=text],\ninput {\n  margin-top: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LWFnZW5jeS1wcm9maWxlL0U6XFxCZWxhbFxccHJvamVjdHNcXHByb2R1Y3Rpb24tYnVpbGRcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxjb21vbi1zdHlsZXNcXHN0ZXBwZXIuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LWFnZW5jeS1wcm9maWxlL25ldy1hZ2VuY3ktcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LWFnZW5jeS1wcm9maWxlL0U6XFxCZWxhbFxccHJvamVjdHNcXHByb2R1Y3Rpb24tYnVpbGRcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxjb21vbi1zdHlsZXNcXGRlc2lnbi1wYWxldHRlLnNjc3MiLCJzcmMvYXBwL2xheW91dC9wcm9maWxlLW1hbmFnZW1lbnQvY3JlYXRlLW5ldy1wcm9maWxlL25ldy1hZ2VuY3ktcHJvZmlsZS9FOlxcQmVsYWxcXHByb2plY3RzXFxwcm9kdWN0aW9uLWJ1aWxkXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHByb2ZpbGUtbWFuYWdlbWVudFxcY3JlYXRlLW5ldy1wcm9maWxlXFxuZXctYWdlbmN5LXByb2ZpbGVcXG5ldy1hZ2VuY3ktcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LWFnZW5jeS1wcm9maWxlL0U6XFxCZWxhbFxccHJvamVjdHNcXHByb2R1Y3Rpb24tYnVpbGRcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxjb21vbi1zdHlsZXNcXG1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ0k7RUFDRSxVQUFBO0VBQ0EsMERBQUE7QUNDTjtBREVRO0VBQ0UseUJFZFE7RUZlUixTQUFBO0FDQVY7QURFVTtFQUNFLHVCQUFBO0FDQVo7QURHVTtFQUNFLHlCQUFBO0FDRFo7QURLUTtFQUNFLFNBQUE7RUFDQSx5QkU1QlE7RUY2QlIsWUFBQTtBQ0hWO0FEUVE7RUFDRSxnQ0FBQTtBQ05WO0FEV0k7RUFDRSxVQUFBO0VBQ0EsMERBQUE7QUNUTjtBRFlRO0VBQ0UseUJFaERNO0VGaUROLFNBQUE7QUNWVjtBRFlVO0VBQ0UsdUJBQUE7QUNWWjtBRGFVO0VBQ0UseUJBQUE7QUNYWjtBRGVRO0VBQ0UsU0FBQTtFQUNBLHlCRTlETTtFRitETixZQUFBO0FDYlY7QURrQlE7RUFDRSxnQ0FBQTtBQ2hCVjtBRHFCSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDbkJOO0FEcUJNO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDbkJSO0FEc0JNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNFekVNO0VGMEVOLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGNFcEdVO0VGcUdWLGtCRWhGZ0I7QUQ0RHhCO0FEc0JRO0VBQ0UsWUFBQTtBQ3BCVjtBRHlCSTtFQUNFLFdBQUE7QUN2Qk47QUR5Qk07RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQ3ZCUjtBRDZCQTtFQUNFLGFBQUE7QUMxQkY7QUQ0QkU7RUFDRSxjQUFBO0FDMUJKO0FFcEdBO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBRnVHRjtBRXBHQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUZ1R0Y7QUVwR0E7RUFDRSxzQkFBQTtFQUNBLDRDQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBRnVHRjtBRXBHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBRnVHRjtBRWxHRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUZxR0o7QUVsR0U7RUFDRSx3QkFBQTtFQUNBLDBDQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBRm9HSjtBRWpHRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FGbUdKO0FFakdJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUZtR047QUVqR007RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUZtR1I7QUU5RkU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUZnR0o7QUU5Rkk7RUFDRSw0QkFBQTtBRmdHTjtBRTdGSTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0FGK0ZOO0FFekZFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpRkFBQTtBRjRGSjtBRXpGRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUZBQUE7QUYyRko7QUV0RkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUZ5RkY7QUV0RkE7RUFDRSxnQkFBQTtBRnlGRjtBRXRGQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FGeUZGO0FFdEZBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRnlGRjtBRXRGQTtFQUNFLFdBQUE7QUZ5RkY7QUV0RkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FGeUZGO0FFdEZBO0VBQ0UsNENBQUE7QUZ5RkY7QUVyRkE7RUFDRSxlQUFBO0FGd0ZGO0FFekZBO0VBQ0UsZUFBQTtBRndGRjtBRXpGQTtFQUNFLGVBQUE7QUZ3RkY7QUV6RkE7RUFDRSxlQUFBO0FGd0ZGO0FFcEZBO0VBQ0Usc0JBQUE7RUFDQSw0Q0FBQTtBRnVGRjtBRXBGQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBRnVGRjtBRXBGQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRnVGRjtBRXBGQTtFQUNFLHNCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FGdUZGO0FFcEZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FGdUZGO0FFcEZBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUZ1RkY7QUVwRkE7RUFDRSxlQUFBO0FGdUZGO0FFcEZBO0VBQ0Usa0JBQUE7QUZ1RkY7QUVwRkE7RUFDRSxhQUFBO0FGdUZGO0FFcEZBO0VBQ0UsZ0JBQUE7QUZ1RkY7QUVuRkU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCRDdNYztBRG1TbEI7QUVwRkk7RUN4S0Ysa0RBQUE7RUFDQSwwQ0FBQTtBSCtQRjtBRXBGSTtFQzVLRixpREFBQTtFQUNBLHlDQUFBO0FIbVFGO0FFcEZJO0VDaExGLGlEQUFBO0VBQ0EseUNBQUE7QUh1UUY7QUVsRkE7RUFDRSxtQkFBQTtBRnFGRjtBRWpGQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUZvRkY7QUVqRkE7RUFDRSxpQkFBQTtBRm9GRjtBRWpGQTtFQUNFLGtCQUFBO0FGb0ZGO0FFakZBOztFQUVFLHdCQUFBO0FGb0ZGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LWFnZW5jeS1wcm9maWxlL25ldy1hZ2VuY3ktcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGVwcGVyLWdyaWQge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgLnN0ZXBwZXItZ3JpZF9zdGVwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3BhY2l0eTogLjY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJi5fYWN0aXZlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxuXHJcbiAgICAgIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIHtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRlZXAtYmx1ZS1jb2xvcjtcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuXHJcbiAgICAgICAgICBkaXYuaW1hZ2Uge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkZWVwLWJsdWUtY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtYm9yZGVyIHtcclxuICAgICAgICBociB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGRlZXAtYmx1ZS1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLl9hY3RpdmF0ZWQge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG5cclxuICAgICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24ge1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuXHJcbiAgICAgICAgICBkaXYuaW1hZ2Uge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciB7XHJcbiAgICAgICAgaHIge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXByaW1hcnk7XHJcblxyXG4gICAgICAgICYuX2xhc3Qge1xyXG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIGhyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMjRweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc3RlcHBlci1ncmlkLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICYuX2FjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuIiwiLnN0ZXBwZXItZ3JpZCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjI4NjI7XG4gIGJvcmRlcjogMDtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmUgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IGRpdi5pbWFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXY6aG92ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjQTZCMUMzO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBsYWJlbCB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2Mjg2MjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtYm9yZGVyIGhyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNjI4NjI7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzN0FEQTtcbiAgYm9yZGVyOiAwO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2YXRlZCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYgZGl2LmltYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdjpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBNkIxQzM7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGxhYmVsIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM3QURBO1xuICBjb2xvcjogd2hpdGU7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIgaHIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzQzN0FEQTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAjQTZCMUMzO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGxhYmVsIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAjQTZCMUMzO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjQTZCMUMzO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBsYWJlbC5fbGFzdCB7XG4gIHdpZHRoOiAxNTBweDtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIgaHIge1xuICBtYXJnaW4tdG9wOiAtMjRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0E2QjFDMztcbn1cblxuLnN0ZXBwZXItZ3JpZC1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zdGVwcGVyLWdyaWQtY29udGVudC5fYWN0aXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jaGVja2JveF9sYWJlbCB7XG4gIGhlaWdodDogMTNweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzgyODI4MiAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogVWJ1bnR1ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XG59XG5cbi5ib29raW5nLWhlYWRlciB7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW4tbGVmdDogMjJweDtcbn1cblxuLm91dGVyLWJhc2ljIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm94LXNoYWRvdzogM3B4IDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xufVxuXG4ub3V0ZXItYmFzaWNGb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0LmJvb2tpbmdzX2RhdGVwaWNrZXIge1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBtYXgtd2lkdGg6IDEzOHB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC51aS5iYXNpYy5mbG9hdGluZy5idXR0b24ge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiByZ2JhKDE1MiwgMTUyLCAxNTIsIDAuNikgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTFweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuaWNvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xuICB3aWR0aDogMjRweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbi5jYWwge1xuICB3aWR0aDogMThweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuc2VhcmNoLmRyb3Bkb3duIHtcbiAgd2lkdGg6IDIxOHB4O1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5zZWFyY2guZHJvcGRvd24gLnNlYXJjaCB7XG4gIG1hcmdpbi1sZWZ0OiA0MnB4ICFpbXBvcnRhbnQ7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnNlYXJjaC5kcm9wZG93biAuZGVmYXVsdC50ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogOHB4IDAgMCAzOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib29raW5nc19idG4tcGFuZWwgLnNlY29uZGFyeSB7XG4gIHdpZHRoOiAxMzUuNjRweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0RjRGO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4uYm9va2luZ3NfYnRuLXBhbmVsIC5wcmltYXJ5IHtcbiAgd2lkdGg6IDEzNS42NHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnRyYWlsaW5nX2J1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59XG5cbi5uZXdBZ2VuY3lfdG9wQWxpZ24ge1xuICBwYWRkaW5nLXRvcDogMXZoO1xufVxuXG50ZCB7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRoIHtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDExcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbmZpcm0ge1xuICB3aWR0aDogNjNweDtcbn1cblxuLnJlY0NvbmZpcm0ge1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiA2MnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzJENDRGO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAwLjV2aDtcbn1cblxuLnRhYi5zZWdtZW50IHtcbiAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5vdXRlci1iYXNpY19zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLm91dGVyLWJhc2ljRm9ybV9zZWNvbmRhcnkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ucmlnaHRfbGlua3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogMXZoO1xuICBwYWRkaW5nLXJpZ2h0OiA4dmg7XG4gIGNvbG9yOiAjMzg2N0IxO1xuICBmb250LWZhbWlseTogVWJ1bnR1O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xufVxuXG4ub3V0ZXItYmFzaWNfdGVydGlhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG59XG5cbi5vdXRlci1iYXNpY0Zvcm1fdGVydGlhcnkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiA1MHB4O1xufVxuXG5ociB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNFMEUwRTA7XG59XG5cbi5kcm9wZG93biAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmJvb2tpbmdzX2J0bi1wYW5lbC50cmFpbGluZ19idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDQ1cHg7XG59XG5cbi51aS5mbHVpZC5jb250YWluZXIge1xuICBwYWRkaW5nOiAyOHB4O1xufVxuXG4ucmlnaHRfbGlua3Mge1xuICBwYWRkaW5nLXRvcDogMXZoO1xufVxuXG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYgZGl2LmltYWdlIHtcbiAgd2lkdGg6IDIycHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTZCMUMzO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IGRpdi5pbWFnZS5fbWVtYmVyIHtcbiAgLXdlYmtpdC1tYXNrOiB1cmwoXCIuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcGVyc29uYWwuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG4gIG1hc2s6IHVybChcIi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9wZXJzb25hbC5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiBkaXYuaW1hZ2UuX3BheW1lbnQge1xuICAtd2Via2l0LW1hc2s6IHVybChcIi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9wYXltZW50LnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICBtYXNrOiB1cmwoXCIuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcGF5bWVudC5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiBkaXYuaW1hZ2UuX3JlbWFya3Mge1xuICAtd2Via2l0LW1hc2s6IHVybChcIi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9yZW1hcmtzLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICBtYXNrOiB1cmwoXCIuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcmVtYXJrcy5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbn1cblxuLnN0ZXBwZXItZ3JpZCB7XG4gIHBhZGRpbmctbGVmdDogMTAwcHg7XG59XG5cbi5tdGIge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ubWwge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn1cblxuLm1yIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4udWkuZm9ybSBpbnB1dFt0eXBlPXRleHRdLFxuaW5wdXQge1xuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG59IiwiJHByaW1hcnktY29sb3I6ICM0MzdBREE7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNBNkIxQzM7XHJcbiRkZWVwLWJsdWUtY29sb3I6ICMwNjI4NjI7XHJcbiRsaWdodC1zbW9rZS1jb2xvcjogI2U1ZTVlNTtcclxuJHZvaWxhLWdyZWVuOiAjODRCQzZBO1xyXG4kcHVyZS13aGl0ZTogd2hpdGU7XHJcbiRmYXVsdC1jb2xvcjogI0RFNzk3OTtcclxuJHdhcm5pbmctY29sb3I6ICNFQ0MwNEU7XHJcbiRzdWNjZXNzLWNvbG9yOiAjNzNCMjVEO1xyXG5cclxuJGJvZHktYmFzZTogI2ZmZjtcclxuJGNvcnBvcmF0ZS1ibHVlLWJhc2U6ICM0NTY3QUM7XHJcblxyXG4kY29udGFpbmVyLWJhc2U6IHdoaXRlO1xyXG4kY29udGFpbmVyLWJhc2Utc2hhZG93OiAwIDBweCAzcHggcmdiYSg2MCwgNjQsIDY3LCAwLjMpLCAwIDRweCA4cHggMnB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNSk7XHJcbiRjb250YWluZXItZHJvcGRvd25zLXNoYWRvdzogMHB4IDhweCAxNHB4IHJnYmEoMCwgNTgsIDE2NCwgLjIpO1xyXG5cclxuJHByaW1hcnktc2hhZG93OiAwcHggNC44M3B4IDE2cHggcmdiYSg2NywgMTIyLCAyMTgsIC41KTtcclxuJGxpZ2h0LXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgwLCA1OCwgMTY0LCAuMjUpO1xyXG4kZmFkZWQtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDE2NywgMTczLCAxODIsIC4yKTtcclxuJGxpZ2h0LWV4dGVuZGVkLXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgwLCA1OCwgMTY0LCAuMjUpO1xyXG5cclxuJGJvcmRlci1yYWRpdXMtcHJpbWFyeTogOHB4O1xyXG4kYm9yZGVyLXJhZGl1cy1zZWNvbmRhcnk6IDZweDtcclxuXHJcbiRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiRmb250LXdlaWdodC1ub3JtYWw6IDQwMDtcclxuXHJcbiR0b2FzdC1pbmZvLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuJHRvYXN0LWluZm8tc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTExLCAwLCAwLCAuMik7XHJcblxyXG4kdG9hc3QtZXJyb3ItY29sb3I6ICRmYXVsdC1jb2xvcjtcclxuJHRvYXN0LWVycm9yLXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDExMSwgMCwgMCwgLjIpO1xyXG5cclxuJHRvYXN0LXdhcm5pbmctY29sb3I6ICR3YXJuaW5nLWNvbG9yO1xyXG4kdG9hc3Qtd2FybmluZy1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxNzcsIDEyNywgMCwgLjIpO1xyXG5cclxuJHRvYXN0LXN1Y2Nlc3MtY29sb3I6ICRzdWNjZXNzLWNvbG9yO1xyXG4kdG9hc3Qtc3VjY2Vzcy1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgzNCwgMTMwLCAwLCAuMik7XHJcbiIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uLy4uL2NvbW9uLXN0eWxlcy9jb21tb24uc2Nzc1wiO1xyXG5cclxuLmNoZWNrYm94X2xhYmVsIHtcclxuICBoZWlnaHQ6IDEzcHggIWltcG9ydGFudDtcclxuICBjb2xvcjogIzgyODI4MiAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBVYnVudHUgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib29raW5nLWhlYWRlciB7XHJcbiAgY29sb3I6ICM0RjRGNEY7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBtYXJnaW4tbGVmdDogMjJweDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpY0Zvcm0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQge1xyXG5cclxuICAmLmJvb2tpbmdzX2RhdGVwaWNrZXIge1xyXG4gICAgbWluLXdpZHRoOiAxMjBweDtcclxuICAgIG1heC13aWR0aDogMTM4cHhcclxuICB9XHJcblxyXG4gIC51aS5iYXNpYy5mbG9hdGluZy5idXR0b24ge1xyXG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHJnYmEoMTUyLCAxNTIsIDE1MiwgMC42KSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgfVxyXG5cclxuICAuaWNvbiB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG5cclxuICAgIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XHJcbiAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcblxyXG4gICAgICAmLmNhbCB7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlYXJjaC5kcm9wZG93biB7XHJcbiAgICB3aWR0aDogMjE4cHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgLnNlYXJjaCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlZmF1bHQudGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAwIDAgMzhweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJvb2tpbmdzX2J0bi1wYW5lbCB7XHJcbiAgLnNlY29uZGFyeSB7XHJcbiAgICB3aWR0aDogMTM1LjY0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0RjRGO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIH1cclxuXHJcbiAgLnByaW1hcnkge1xyXG4gICAgd2lkdGg6IDEzNS42NHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB9XHJcblxyXG59XHJcblxyXG4udHJhaWxpbmdfYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5uZXdBZ2VuY3lfdG9wQWxpZ24ge1xyXG4gIHBhZGRpbmctdG9wOiAxdmg7XHJcbn1cclxuXHJcbnRkIHtcclxuICBjb2xvcjogIzRGNEY0RjtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBsaW5lLWhlaWdodDogMTFweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRoIHtcclxuICBjb2xvcjogIzRGNEY0RjtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbmZpcm0ge1xyXG4gIHdpZHRoOiA2M3B4O1xyXG59XHJcblxyXG4ucmVjQ29uZmlybSB7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIHdpZHRoOiA2MnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MkQ0NEY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctdG9wOiAuNXZoO1xyXG59XHJcblxyXG4udGFiLnNlZ21lbnQge1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG5cclxuLmZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5cclxuLm91dGVyLWJhc2ljX3NlY29uZGFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljRm9ybV9zZWNvbmRhcnkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4ucmlnaHRfbGlua3Mge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBwYWRkaW5nLXRvcDogMXZoO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDh2aDtcclxuICBjb2xvcjogIzM4NjdCMTtcclxuICBmb250LWZhbWlseTogVWJ1bnR1O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWNfdGVydGlhcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgYm94LXNoYWRvdzogM3B4IDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljRm9ybV90ZXJ0aWFyeSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbn1cclxuXHJcbmhyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJvcmRlcjogMC41cHggc29saWQgI0UwRTBFMDtcclxufVxyXG5cclxuLmRyb3Bkb3duIC50ZXh0IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5ib29raW5nc19idG4tcGFuZWwudHJhaWxpbmdfYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcbi51aS5mbHVpZC5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDI4cHg7XHJcbn1cclxuXHJcbi5yaWdodF9saW5rcyB7XHJcbiAgcGFkZGluZy10b3A6IDF2aDtcclxufVxyXG5cclxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IHtcclxuICBkaXYuaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcblxyXG4gICAgJi5fbWVtYmVyIHtcclxuICAgICAgQGluY2x1ZGUgbWFzay1zdmctZGl2KCcuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcGVyc29uYWwuc3ZnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5fcGF5bWVudCB7XHJcbiAgICAgIEBpbmNsdWRlIG1hc2stc3ZnLWRpdignLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3BheW1lbnQuc3ZnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5fcmVtYXJrcyB7XHJcbiAgICAgIEBpbmNsdWRlIG1hc2stc3ZnLWRpdignLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3JlbWFya3Muc3ZnJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc3RlcHBlci1ncmlkIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwMHB4O1xyXG59XHJcblxyXG5cclxuLm10YiB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4ubWwge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ubXIge1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLnVpLmZvcm0gaW5wdXRbdHlwZT10ZXh0XSxcclxuaW5wdXQge1xyXG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcclxufVxyXG4iLCJAbWl4aW4gcGxhY2Vob2xkZXIge1xyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICAmOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gY29sb3Itb3BhY2l0eSgkY29sb3IsICRvcGFjaXR5OiAwLjMpIHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3I7XHJcbiAgLyogVGhlIEZhbGxiYWNrICovXHJcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3IsICRvcGFjaXR5KTtcclxufVxyXG5cclxuQG1peGluIGhpZGVOdW1iZXJGaWVsZEFycm93cyB7XHJcblxyXG4gIC8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xyXG4gIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG4gIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLyogRmlyZWZveCAqL1xyXG4gIGlucHV0W3R5cGU9bnVtYmVyXSB7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1hc2stc3ZnLWRpdigkaW1nKSB7XHJcbiAgLXdlYmtpdC1tYXNrOiB1cmwoJGltZykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICBtYXNrOiB1cmwoJGltZykgbm8tcmVwZWF0IGNlbnRlcjtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile.component.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile.component.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: NewAgencyProfileComponent */

  /***/
  function srcAppLayoutProfileManagementCreateNewProfileNewAgencyProfileNewAgencyProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewAgencyProfileComponent", function () {
      return NewAgencyProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _shared_services_profile_management_profile_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../../shared/services/profile-management/profile-management.service */
    "./src/app/shared/services/profile-management/profile-management.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NewAgencyProfileComponent = /*#__PURE__*/function () {
      function NewAgencyProfileComponent(route, ProfileManagementService, fb) {
        var _this = this;

        _classCallCheck(this, NewAgencyProfileComponent);

        this.route = route;
        this.ProfileManagementService = ProfileManagementService;
        this.fb = fb;
        this.newAgencyProfileObj = {};
        this.newAgencyProfileForm = this.fb.group({
          agency_profile_id: [''],
          organisation_id: [''],
          responsible_office: [''],
          department_contact_name: [''],
          agent_contact_name: [''],
          home: [''],
          Official: [''],
          addressList: [''],
          number: this.fb.array([this.fb.group(this.initNumber())]),
          email: this.fb.array([this.fb.group(this.initAddEmail())]),
          address: this.fb.array([this.fb.group(this.initAddress())]),
          bank_accounts: this.fb.array([this.fb.group(this.initBank_accounts())]),
          direct_debit_authorized: [''],
          forms_of_payment: this.fb.array([this.fb.group(this.initForms_of_payment())]),
          fare_price_override: this.fb.array([this.fb.group(this.initFare_price_override())]),
          endorsements: this.fb.array([this.fb.group(this.initEndorsements())]),
          discounts: [''],
          commissions: this.fb.array([this.fb.group(this.initComissions())]),
          accounting: this.fb.array([this.fb.group(this.initAccounting())]),
          remarks: this.fb.array([this.fb.group(this.initRemarks())]),
          profile_notes: this.fb.array([this.fb.group(this.initProfile_Notes())]),
          priority_lines1: this.fb.array([this.fb.group(this.initPriority_lines1())]),
          priority_lines2: this.fb.array([this.fb.group(this.initPriority_lines2())]),
          follow_up: this.fb.array([this.fb.group(this.initFollow_up())])
        });

        this.createNewAgencyProfile = function () {
          _this.newAgencyProfileObj.agency_profile_id = _this.newAgencyProfileId;
          _this.newAgencyProfileObj.organisation_id = "";
          _this.newAgencyProfileObj.created = "";
          _this.newAgencyProfileObj.responsible_office = _this.newAgencyProfileForm.get('responsible_office').value;
          _this.newAgencyProfileObj.department_contact_name = _this.newAgencyProfileForm.get('department_contact_name').value;
          _this.newAgencyProfileObj.agent_contact_name = _this.newAgencyProfileForm.get('agent_contact_name').value;
          _this.newAgencyProfileObj.number = JSON.stringify(_this.newAgencyProfileForm.get('number').value);
          _this.newAgencyProfileObj.home = _this.newAgencyProfileForm.get('home').value;
          _this.newAgencyProfileObj.email = JSON.stringify(_this.newAgencyProfileForm.get('email').value);
          _this.newAgencyProfileObj.address = JSON.stringify(_this.newAgencyProfileForm.get('address').value);
          _this.newAgencyProfileObj.bank_accounts = JSON.stringify(_this.newAgencyProfileForm.get('bank_accounts').value);
          _this.newAgencyProfileObj.direct_debit_authorized = _this.newAgencyProfileForm.get('direct_debit_authorized').value;
          _this.newAgencyProfileObj.forms_of_payment = JSON.stringify(_this.newAgencyProfileForm.get('forms_of_payment').value);
          _this.newAgencyProfileObj.fare_price_override = JSON.stringify(_this.newAgencyProfileForm.get('fare_price_override').value);
          _this.newAgencyProfileObj.endorsements = JSON.stringify(_this.newAgencyProfileForm.get('endorsements').value);
          _this.newAgencyProfileObj.discounts = _this.newAgencyProfileForm.get('discounts').value;
          _this.newAgencyProfileObj.commissions = JSON.stringify(_this.newAgencyProfileForm.get('commissions').value);
          _this.newAgencyProfileObj.accounting = JSON.stringify(_this.newAgencyProfileForm.get('accounting').value);
          _this.newAgencyProfileObj.remarks = JSON.stringify(_this.newAgencyProfileForm.get('remarks').value);
          _this.newAgencyProfileObj.profile_notes = JSON.stringify(_this.newAgencyProfileForm.get('profile_notes').value);
          _this.newAgencyProfileObj.priority_lines1 = JSON.stringify(_this.newAgencyProfileForm.get('priority_lines1').value);
          _this.newAgencyProfileObj.priority_lines2 = JSON.stringify(_this.newAgencyProfileForm.get('priority_lines2').value);
          _this.newAgencyProfileObj.follow_up = JSON.stringify(_this.newAgencyProfileForm.get('follow_up').value);
          console.log("You shall not pass", _this.newAgencyProfileObj);

          _this.ProfileManagementService.NewAgencyProfile(_this.newAgencyProfileObj).subscribe(function (results) {
            console.log(results);
          });
        };

        this.updateNewAgencyProfile = function () {
          _this.newAgencyProfileObj.agency_profile_id = _this.agencyProfileId;
          _this.newAgencyProfileObj.organisation_id = "";
          _this.newAgencyProfileObj.created = "";
          _this.newAgencyProfileObj.responsible_office = _this.newAgencyProfileForm.get('responsible_office').value;
          _this.newAgencyProfileObj.department_contact_name = _this.newAgencyProfileForm.get('department_contact_name').value;
          _this.newAgencyProfileObj.agent_contact_name = _this.newAgencyProfileForm.get('agent_contact_name').value;
          _this.newAgencyProfileObj.number = JSON.stringify(_this.newAgencyProfileForm.get('number').value);
          _this.newAgencyProfileObj.email = JSON.stringify(_this.newAgencyProfileForm.get('email').value);
          _this.newAgencyProfileObj.address = JSON.stringify(_this.newAgencyProfileForm.get('address').value);
          _this.newAgencyProfileObj.bank_accounts = JSON.stringify(_this.newAgencyProfileForm.get('bank_accounts').value);
          _this.newAgencyProfileObj.direct_debit_authorized = _this.newAgencyProfileForm.get('direct_debit_authorized').value;
          _this.newAgencyProfileObj.forms_of_payment = JSON.stringify(_this.newAgencyProfileForm.get('forms_of_payment').value);
          _this.newAgencyProfileObj.fare_price_override = JSON.stringify(_this.newAgencyProfileForm.get('fare_price_override').value);
          _this.newAgencyProfileObj.endorsements = JSON.stringify(_this.newAgencyProfileForm.get('endorsements').value);
          _this.newAgencyProfileObj.discounts = _this.newAgencyProfileForm.get('discounts').value;
          _this.newAgencyProfileObj.commissions = JSON.stringify(_this.newAgencyProfileForm.get('commissions').value);
          _this.newAgencyProfileObj.accounting = JSON.stringify(_this.newAgencyProfileForm.get('accounting').value);
          _this.newAgencyProfileObj.remarks = JSON.stringify(_this.newAgencyProfileForm.get('remarks').value);
          _this.newAgencyProfileObj.profile_notes = JSON.stringify(_this.newAgencyProfileForm.get('profile_notes').value);
          _this.newAgencyProfileObj.priority_lines1 = JSON.stringify(_this.newAgencyProfileForm.get('priority_lines1').value);
          _this.newAgencyProfileObj.priority_lines2 = JSON.stringify(_this.newAgencyProfileForm.get('priority_lines2').value);
          _this.newAgencyProfileObj.follow_up = JSON.stringify(_this.newAgencyProfileForm.get('follow_up').value);
          console.log("You shall not pass", _this.newAgencyProfileObj);

          _this.ProfileManagementService.UpdateAgencyProfile(_this.agencyProfileId, _this.newAgencyProfileObj).subscribe(function (results) {
            console.log(results);
          });
        };

        var uniqueProfileID = Math.random().toString(36).substring(7);
        console.log(uniqueProfileID);
        this.newAgencyProfileId = uniqueProfileID + "Amedius";
        this.route.queryParams.subscribe(function (params) {
          console.log(params);
          _this.agencyProfileId = params.agency_profile_id; //alert(this.agencyProfileId);

          _this.newAgencyProfileForm.patchValue({
            agency_profile_id: params.agency_profile_id,
            organisation_id: params.organisation_id,
            responsible_office: params.responsible_office,
            department_contact_name: params.department_contact_name,
            agent_contact_name: params.agent_contact_name,
            direct_debit_authorized: params.direct_debit_authorized,
            discounts: params.discounts
          });

          var number = _this.parsingArrayParams(params.number, _this.number);

          var email = _this.parsingArrayParams(params.email, _this.email);

          var address = _this.parsingArrayParams(params.address, _this.address);

          var formsOfPayment = _this.parsingArrayParams(params.forms_of_payment, _this.forms_of_payment);

          var farePriceOverride = _this.parsingArrayParams(params.farePriceOverride, _this.fare_price_override);

          var endorsements = _this.parsingArrayParams(params.endorsements, _this.endorsements);

          var commissions = _this.parsingArrayParams(params.commission, _this.commissions);

          var accounting = _this.parsingArrayParams(params.accounting, _this.accounting);

          var remarks = _this.parsingArrayParams(params.remarks, _this.remarks);

          var profileNotes = _this.parsingArrayParams(params.profile_notes, _this.profile_notes);

          var priorityLines1 = _this.parsingArrayParams(params.priority_lines1, _this.priority_lines1);

          var priorityLines2 = _this.parsingArrayParams(params.priority_lines2, _this.priority_lines2);

          var followUp = _this.parsingArrayParams(params.follow_up, _this.follow_up);
        });
      }

      _createClass(NewAgencyProfileComponent, [{
        key: "parsingArrayParams",
        value: function parsingArrayParams(value, parameter) {
          var _this2 = this;

          if (value && value.length > 0) {
            var array = JSON.parse(value);

            if (array && array.length > 0) {
              array.map(function (item, index) {
                parameter.removeAt(0);
                console.log(item);
                parameter.push(_this2.fb.group(item));
                return parameter;
              });
            } else {
              console.log("There is something wrong with the passing of arrays");
            }
          }
        }
      }, {
        key: "setActiveTab",
        value: function setActiveTab(label) {
          var tab = this.tab.nativeElement.querySelectorAll(".stepper-grid .stepper-grid_step");
          var content = this.tabContent.nativeElement.querySelectorAll(".stepper-grid-content");
          tab.forEach(function (el) {
            if (el.classList.contains('_active')) {
              el.classList.remove('_active');
              el.classList.add('_activated');
            }
          });
          content.forEach(function (el) {
            if (el.classList.contains('_active')) {
              el.classList.remove('_active');
            }
          });
          this.tab.nativeElement.querySelector("#".concat(label)).classList.add('_active');
          this.tabContent.nativeElement.querySelector("#".concat(label, "-content")).classList.add('_active');
          window.document.querySelector('.scrollable-pusher').scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }, {
        key: "initNumber",
        value: function initNumber() {
          return {
            preferedHome: [''],
            home: [''],
            number: [''],
            number_comment: ['']
          };
        }
      }, {
        key: "initAddEmail",
        value: function initAddEmail() {
          return {
            preferedOfficial: [''],
            Official: [''],
            emailAddress: [''],
            emailAddress_comment: ['']
          };
        }
      }, {
        key: "initAddress",
        value: function initAddress() {
          return {
            preferedAddress: [''],
            addressList: [''],
            address: [''],
            street: [''],
            city: [''],
            state: [''],
            postalCode: [''],
            countryList: [''],
            company: [''],
            address_comment: []
          };
        }
      }, {
        key: "initBank_accounts",
        value: function initBank_accounts() {
          return {
            bank_code: [''],
            bank_name: [''],
            bank_number: [''],
            bank_city: [''],
            bank_valid_from: [''],
            bank_valid_to: ['']
          };
        }
      }, {
        key: "initForms_of_payment",
        value: function initForms_of_payment() {
          return {
            forms_of_payment: ['']
          };
        }
      }, {
        key: "initFare_price_override",
        value: function initFare_price_override() {
          return {
            fare_price_override: ['']
          };
        }
      }, {
        key: "initEndorsements",
        value: function initEndorsements() {
          return {
            endorsements: ['']
          };
        }
      }, {
        key: "initComissions",
        value: function initComissions() {
          return {
            commisionText: [''],
            commisionProvideCode: ['']
          };
        }
      }, {
        key: "initAccounting",
        value: function initAccounting() {
          return {
            accountNumber: [''],
            accountCostCentre: [''],
            accountIataNumber: [''],
            accountClientReference: [''],
            accountGstTaxName: [''],
            accountGetTaxNumber: [''],
            accountGstTaxAddress: ['']
          };
        }
      }, {
        key: "initRemarks",
        value: function initRemarks() {
          return {
            remark_type: [''],
            remark_category: [''],
            remark: ['']
          };
        }
      }, {
        key: "initProfile_Notes",
        value: function initProfile_Notes() {
          return {
            profile_notes_category: [''],
            profile_notes_information: ['']
          };
        }
      }, {
        key: "initPriority_lines1",
        value: function initPriority_lines1() {
          return {
            priorityInformation1: ['']
          };
        }
      }, {
        key: "initPriority_lines2",
        value: function initPriority_lines2() {
          return {
            priorityInformation2: ['']
          };
        }
      }, {
        key: "initFollow_up",
        value: function initFollow_up() {
          return {
            followUpDate: [''],
            followUpAction: ['']
          };
        }
      }, {
        key: "addMoreNumbers",
        value: function addMoreNumbers() {
          this.number.push(this.fb.group(this.initNumber()));
        } // removeNumbers(index): void {
        //   this.number.removeAt(index);
        // }

      }, {
        key: "addMoreEmail",
        value: function addMoreEmail() {
          this.email.push(this.fb.group(this.initAddEmail()));
        }
      }, {
        key: "addMoreAddress",
        value: function addMoreAddress() {
          this.address.push(this.fb.group(this.initAddress()));
        }
      }, {
        key: "addBankAccount",
        value: function addBankAccount() {
          this.bank_accounts.push(this.fb.group(this.initBank_accounts()));
        }
      }, {
        key: "addMoreForms_of_payment",
        value: function addMoreForms_of_payment() {
          this.forms_of_payment.push(this.fb.group(this.initForms_of_payment()));
        }
      }, {
        key: "removeForms_of_payment",
        value: function removeForms_of_payment(index) {
          this.forms_of_payment.removeAt(index);
        }
      }, {
        key: "addMoreFair_price_override",
        value: function addMoreFair_price_override() {
          this.fare_price_override.push(this.fb.group(this.initFare_price_override()));
        }
      }, {
        key: "removeFair_price_override",
        value: function removeFair_price_override(index) {
          this.fare_price_override.removeAt(index);
        }
      }, {
        key: "addMoreEndorsements",
        value: function addMoreEndorsements() {
          this.endorsements.push(this.fb.group(this.initEndorsements()));
        }
      }, {
        key: "removeEndorsements",
        value: function removeEndorsements(index) {
          this.endorsements.removeAt(index);
        }
      }, {
        key: "addMoreComission",
        value: function addMoreComission() {
          this.commissions.push(this.fb.group(this.initComissions()));
        }
      }, {
        key: "removeComission",
        value: function removeComission(index) {
          this.commissions.removeAt(index);
        }
      }, {
        key: "addMoreAccounting",
        value: function addMoreAccounting() {
          this.accounting.push(this.fb.group(this.initAccounting()));
        }
      }, {
        key: "addMoreRemarks",
        value: function addMoreRemarks() {
          this.remarks.push(this.fb.group(this.initRemarks()));
        }
      }, {
        key: "addMoreProfileNotes",
        value: function addMoreProfileNotes() {
          this.profile_notes.push(this.fb.group(this.initProfile_Notes()));
        }
      }, {
        key: "addMorePriority_lines1",
        value: function addMorePriority_lines1() {
          this.priority_lines1.push(this.fb.group(this.initPriority_lines1()));
        }
      }, {
        key: "addMorePriority_lines2",
        value: function addMorePriority_lines2() {
          this.priority_lines2.push(this.fb.group(this.initPriority_lines2()));
        }
      }, {
        key: "addMoreFollow_up",
        value: function addMoreFollow_up() {
          this.follow_up.push(this.fb.group(this.initFollow_up()));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          $(document).ready(function () {
            $('.menu .item').tab();
            $('.ui.dropdown').dropdown();
            $('.ui.checkbox').checkbox();
          });
        }
      }, {
        key: "setDropDownType",
        value: function setDropDownType(value, type) {
          switch (type) {
            case 'profile_notes_category':
              this.newAgencyProfileForm.get('profile_notes_category').setValue(value);
              break;

            case 'Official':
              this.newAgencyProfileForm.get('Official').setValue(value);
              break;

            case 'addressList':
              this.newAgencyProfileForm.get('addressList').setValue(value);
              break;

            case 'home':
              this.newAgencyProfileForm.get('home').setValue(value);
              break;

            case 'remark_type':
              this.newAgencyProfileForm.get('remark_type').setValue(value);
              break;

            case 'remark_category':
              this.newAgencyProfileForm.get('remark_category').setValue(value);
              break;

            case 'profile_notes_information':
              this.newAgencyProfileForm.get('profile_notes_information').setValue(value);
              break;
          }
        }
      }, {
        key: "number",
        get: function get() {
          return this.newAgencyProfileForm.get('number');
        }
      }, {
        key: "email",
        get: function get() {
          return this.newAgencyProfileForm.get('email');
        }
      }, {
        key: "address",
        get: function get() {
          return this.newAgencyProfileForm.get('address');
        }
      }, {
        key: "bank_accounts",
        get: function get() {
          return this.newAgencyProfileForm.get('bank_accounts');
        }
      }, {
        key: "forms_of_payment",
        get: function get() {
          return this.newAgencyProfileForm.get('forms_of_payment');
        }
      }, {
        key: "fare_price_override",
        get: function get() {
          return this.newAgencyProfileForm.get('fare_price_override');
        }
      }, {
        key: "endorsements",
        get: function get() {
          return this.newAgencyProfileForm.get('endorsements');
        }
      }, {
        key: "commissions",
        get: function get() {
          return this.newAgencyProfileForm.get('commissions');
        }
      }, {
        key: "accounting",
        get: function get() {
          return this.newAgencyProfileForm.get('accounting');
        }
      }, {
        key: "remarks",
        get: function get() {
          return this.newAgencyProfileForm.get('remarks');
        }
      }, {
        key: "profile_notes",
        get: function get() {
          return this.newAgencyProfileForm.get('profile_notes');
        }
      }, {
        key: "priority_lines1",
        get: function get() {
          return this.newAgencyProfileForm.get('priority_lines1');
        }
      }, {
        key: "priority_lines2",
        get: function get() {
          return this.newAgencyProfileForm.get('priority_lines2');
        }
      }, {
        key: "follow_up",
        get: function get() {
          return this.newAgencyProfileForm.get('follow_up');
        }
      }]);

      return NewAgencyProfileComponent;
    }();

    NewAgencyProfileComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _shared_services_profile_management_profile_management_service__WEBPACK_IMPORTED_MODULE_1__["ProfileManagementService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tab', {
      "static": false
    })], NewAgencyProfileComponent.prototype, "tab", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tabContent', {
      "static": false
    })], NewAgencyProfileComponent.prototype, "tabContent", void 0);
    NewAgencyProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-new-agency-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./new-agency-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./new-agency-profile.component.scss */
      "./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile.component.scss"))["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./../create-new-profile.component.scss */
      "./src/app/layout/profile-management/create-new-profile/create-new-profile.component.scss"))["default"]]
    })], NewAgencyProfileComponent);
    /***/
  },

  /***/
  "./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile.module.ts":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile.module.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: NewAgencyProfileModule */

  /***/
  function srcAppLayoutProfileManagementCreateNewProfileNewAgencyProfileNewAgencyProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewAgencyProfileModule", function () {
      return NewAgencyProfileModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _new_agency_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./new-agency-profile.component */
    "./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _new_agency_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./new-agency-profile-routing.module */
    "./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile-routing.module.ts");

    var NewAgencyProfileModule = function NewAgencyProfileModule() {
      _classCallCheck(this, NewAgencyProfileModule);
    };

    NewAgencyProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_new_agency_profile_component__WEBPACK_IMPORTED_MODULE_1__["NewAgencyProfileComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _new_agency_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewAgencyProfileRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
    })], NewAgencyProfileModule);
    /***/
  }
}]);
//# sourceMappingURL=new-agency-profile-new-agency-profile-module-es5.js.map