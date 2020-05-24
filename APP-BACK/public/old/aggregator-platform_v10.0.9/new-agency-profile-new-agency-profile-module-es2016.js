(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-agency-profile-new-agency-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3><span class=\"booking-header\">New Agency Profile</span></h3>\r\n<div class=\"ui fluid container\">\r\n  <div class=\"ui grid container stepper-grid\" #tab>\r\n    <div class=\"five wide column stepper-grid_step _active\" id=\"member\" (click)=\"setActiveTab('member')\">\r\n      <div class=\"stepper-grid_step__step-icon\">\r\n        <div>\r\n          <div class=\"image _member\"></div>\r\n        </div>\r\n        <label>Personal Info</label>\r\n      </div>\r\n      <div class=\"stepper-grid_step__step-border\">\r\n        <hr />\r\n      </div>\r\n    </div>\r\n    <div class=\"five wide column stepper-grid_step\" id=\"payment\" (click)=\"setActiveTab('payment')\">\r\n      <div class=\"stepper-grid_step__step-icon\">\r\n        <div>\r\n          <div class=\"image _payment\"></div>\r\n        </div>\r\n        <label>Payment</label>\r\n      </div>\r\n      <div class=\"stepper-grid_step__step-border\">\r\n        <hr />\r\n      </div>\r\n    </div>\r\n    <div class=\"three wide column stepper-grid_step\" id=\"remarks\" (click)=\"setActiveTab('remarks')\">\r\n      <div class=\"stepper-grid_step__step-icon\">\r\n        <div>\r\n          <div class=\"image _remarks\"></div>\r\n        </div>\r\n        <label>Remarks</label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <form class=\"ui form\" [formGroup]=\"newAgencyProfileForm\" #tabContent>\r\n    <div id=\"member-content\" class=\"stepper-grid-content animated fadeIn _active\">\r\n      <div class=\"outer-basic\">\r\n        <div class=\"outer-basicForm\">\r\n          <div class=\"ui grid form-inner\">\r\n            <div class=\"sixteen wide column\">\r\n              <h4>Personal</h4>\r\n            </div>\r\n            <div class=\"sixteen wide column\">\r\n              <label>Agency Info</label>\r\n            </div>\r\n            <div class=\"ui sixteen wide column grid\">\r\n              <div class=\"two wide column\">\r\n                <input type=\"text\" name=\"reponsibleOffice\" formControlName=\"responsible_office\" value=\"\"\r\n                  placeholder=\"Responsible Office\">\r\n              </div>\r\n              <div class=\"four wide column\">\r\n                <input type=\"text\" name=\"deptContactName\" formControlName=\"department_contact_name\" value=\"\"\r\n                  placeholder=\"Department Contact Name\">\r\n              </div>\r\n              <div class=\"four wide column\">\r\n                <input type=\"text\" name=\"agentContactName\" formControlName=\"agent_contact_name\" value=\"\"\r\n                  placeholder=\"Agent Contact Name\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div formArrayName=\"number\">\r\n            <div *ngFor=\"let numberD of newAgencyProfileForm.get('number')['controls'];let nIndex = index\">\r\n              <div [formGroupName]=\"nIndex\" class=\"ui sixteen wide column grid\">\r\n                <div class=\"three wide column newAgency_topAlign\">\r\n                  <div class=\"ui checkbox\">\r\n                    <input type=\"checkbox\" name=\"prefered\" formControlName=\"preferedHome\" value=\"\">\r\n                    <label>Prefered</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"two wide column\">\r\n                  <div class=\"ui fluid search selection dropdown\">\r\n                    <input type=\"hidden\" name=\"home\" formControlName=\"home\" value=\"\">\r\n                    <i class=\"dropdown icon\"></i>\r\n                    <div class=\"default text\">Home</div>\r\n                    <div class=\"menu\">\r\n                      <div class=\"item\" (click)=\"setDropDownType('Home 1', 'home')\">Home 1</div>\r\n                      <div class=\"item\" (click)=\"setDropDownType('Home 2', 'home')\">Home 2</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"four wide column\">\r\n                  <input type=\"text\" name=\"number\" formControlName=\"number\" value=\"\" placeholder=\"Number\">\r\n                </div>\r\n                <div class=\"five wide column\">\r\n                  <input type=\"text\" name=\"number_comment\" formControlName=\"number_comment\" value=\"\"\r\n                    placeholder=\"Comment\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"sixteen wide column\">\r\n            <button class=\"ui primary  button btn-sticky\" (click)=\"addMoreNumbers()\">\r\n              Add Number +\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic mtb\">\r\n        <div class=\"outer-basicForm\">\r\n          <div class=\"sixteen wide column\">\r\n            <label>Email Info</label>\r\n          </div>\r\n          <div formArrayName=\"email\">\r\n            <div *ngFor=\"let emailD of newAgencyProfileForm.get('email')['controls']; let eIndex = index\">\r\n              <div [formGroupName]=\"eIndex\" class=\"ui sixteen wide column grid\">\r\n                <div class=\"three wide column newAgency_topAlign\">\r\n                  <div class=\"ui checkbox \">\r\n                    <input type=\"checkbox\" name=\"prefered\" formControlName=\"preferedOfficial\">\r\n                    <label>Prefered</label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"two wide column\">\r\n                  <div class=\"ui fluid search selection dropdown\">\r\n                    <input type=\"hidden\" name=\"office\" formControlName=\"Official\" value=\"\">\r\n                    <i class=\"dropdown icon\"></i>\r\n                    <div class=\"default text\">Official</div>\r\n                    <div class=\"menu\">\r\n                      <div class=\"item\" (click)=\"setDropDownType('Official 1', 'Official')\">Official 1</div>\r\n                      <div class=\"item\" (click)=\"setDropDownType('Official 1', 'Official')\">Official 2</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"four wide column\">\r\n                  <input type=\"text\" name=\"emailAddress\" formControlName=\"emailAddress\" value=\"\"\r\n                    placeholder=\"Email Address\">\r\n                </div>\r\n                <div class=\"five wide column\">\r\n                  <input type=\"text\" name=\"comment\" formControlName=\"emailAddress_comment\" value=\"\"\r\n                    placeholder=\"Comment\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui primary button btn-sticky\" (click)=\"addMoreEmail()\">\r\n              Add Email +\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic mtb\">\r\n        <div class=\"outer-basicForm\">\r\n          <div class=\"sixteen wide column\">\r\n            <label>Address Info</label>\r\n          </div>\r\n          <div formArrayName=\"address\">\r\n            <div *ngFor=\"let addressD of newAgencyProfileForm.get('address')['controls']; let aIndex = index\">\r\n              <div [formGroupName]=\"aIndex\">\r\n                <div class=\"fields\">\r\n                  <div class=\"field\">\r\n                    <div class=\"three wide field newAgency_topAlign\">\r\n                      <div class=\"ui checkbox \">\r\n                        <input type=\"checkbox\" name=\"prefered\" formControlName=\"preferedAddress\" value=\"\">\r\n                        <label>Prefered</label>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"two wide field\">\r\n                    <div class=\"ui fluid search selection dropdown\">\r\n                      <input type=\"hidden\" name=\"office\" formControlName=\"addressList\" value=\"\">\r\n                      <i class=\"dropdown icon\"></i>\r\n                      <div class=\"default text\">Office</div>\r\n                      <div class=\"menu\">\r\n                        <div class=\"item\" (click)=\"setDropDownType('Office 1', 'addressList')\">\r\n                          Office 1</div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Office 2', 'addressList')\">\r\n                          Office 2</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"five wide field\">\r\n                    <input type=\"text\" name=\"address\" formControlName=\"address\" value=\"\" placeholder=\"Address\">\r\n                  </div>\r\n                  <div class=\"three wide field\">\r\n                    <input type=\"text\" name=\"street\" formControlName=\"street\" value=\"\" placeholder=\"Street\">\r\n                  </div>\r\n                  <div class=\"three wide field\">\r\n                    <input type=\"text\" name=\"city\" formControlName=\"city\" value=\"\" placeholder=\"City\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"fields\">\r\n                  <div class=\"field\">\r\n                    <div class=\"three wide field\">\r\n                      <div class=\"ui checkbox \">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"three wide field\">\r\n                  </div>\r\n                  <div class=\"two wide field\">\r\n                    <input type=\"text\" name=\"state\" formControlName=\"state\" value=\"\" placeholder=\"Region/State\">\r\n                  </div>\r\n                  <div class=\"three wide field\">\r\n                    <input type=\"text\" name=\"postalCode\" formControlName=\"postalCode\" value=\"\"\r\n                      placeholder=\"Postal Code\">\r\n                  </div>\r\n                  <div class=\"three wide field\">\r\n                    <div class=\"ui fluid search selection dropdown\">\r\n                      <input type=\"hidden\" name=\"country\" formControlName=\"countryList\" value=\"\">\r\n                      <i class=\"dropdown icon\"></i>\r\n                      <div class=\"default text\">Country</div>\r\n                      <div class=\"menu\">\r\n                        <div class=\"item\" (click)=\"setDropDownType('USA', 'countryList')\">\r\n                          USA</div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('UAE', 'countryList')\">\r\n                          UAE</div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Australia', 'countryList')\">\r\n                          Australia</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"three wide field\">\r\n                    <input type=\"text\" name=\"company\" formControlName=\"company\" value=\"\" placeholder=\"Company\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"fields\">\r\n                  <div class=\"field\">\r\n                    <div class=\"three wide field\">\r\n                      <div class=\"ui checkbox \">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"three wide field\">\r\n                  </div>\r\n                  <div class=\"five wide field\">\r\n                    <input type=\"text\" name=\"comment\" formControlName=\"address_comment\" value=\"\" placeholder=\"Comment\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui primary button btn-sticky\" (click)=\"addMoreAddress()\">\r\n              Add Address +\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"payment-content\" class=\"stepper-grid-content animated fadeIn\">\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Payment Data</h4>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <label>Bank Accounts</label>\r\n            </div>\r\n            <div formArrayName=\"bank_accounts\">\r\n              <div\r\n                *ngFor=\"let bank_accountsD of newAgencyProfileForm.get('bank_accounts')['controls']; let bank_accountsIndex = index\">\r\n                <div [formGroupName]=\"bank_accountsIndex\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"two wide field\">\r\n                      <input type=\"text\" name=\"code\" formControlName=\"bank_code\" value=\"\" placeholder=\"Code\">\r\n                    </div>\r\n                    <div class=\"five wide field\">\r\n                      <input type=\"text\" name=\"name\" formControlName=\"bank_name\" value=\"\" placeholder=\"Name\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"bankAccountNumber\" formControlName=\"bank_number\" value=\"\"\r\n                        placeholder=\"Number\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"city\" value=\"\" formControlName=\"bank_city\" value=\"\" placeholder=\"City\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"fields\">\r\n                    <div class=\"two wide field\">\r\n                    </div>\r\n                    <div class=\"five wide field\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"validFrom\" formControlName=\"bank_valid_from\" value=\"\"\r\n                        placeholder=\"Valid From(DD MM YYYY)\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"validUntil\" formControlName=\"bank_valid_to\" value=\"\"\r\n                        placeholder=\"Valid Until(DD MM YYYY)\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"fields\">\r\n                    <div class=\"two wide field\">\r\n                    </div>\r\n                    <div class=\"five wide field\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <div class=\"ui checkbox \">\r\n                        <input type=\"checkbox\" name=\"directDebitAuthorized\">\r\n                        <label class=\"checkbox_label\">Direct Debit Authorized</label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"five wide field\">\r\n                <div class=\"ui primary button\" (click)=\"addBankAccount()\">\r\n                  Add Bank Account +\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"five wide field\">\r\n                <div formArrayName=\"forms_of_payment\">\r\n                  <div\r\n                    *ngFor=\"let forms_of_paymentD of newAgencyProfileForm.get('forms_of_payment')['controls']; let payIndex = index\">\r\n                    <div [formGroupName]=\"payIndex\" class=\"fields\">\r\n                      <input type=\"text\" name=\"formOfPayment\" formControlName=\"forms_of_payment\" value=\"\"\r\n                        placeholder=\"Form Of Payment\">\r\n                      <div class=\"newAgency_topAlign\" *ngIf=\"payIndex > 0\" (click)=\"removeForms_of_payment(payIndex)\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                        </i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ui primary button\" (click)=\"addMoreForms_of_payment()\">\r\n                  Add More +\r\n                </div>\r\n              </div>\r\n              <div class=\"four wide field\"></div>\r\n              <div class=\"five wide field \">\r\n                <div formArrayName=\"endorsements\">\r\n                  <div\r\n                    *ngFor=\"let endorsementsD of newAgencyProfileForm.get('endorsements')['controls']; let eIndex = index\">\r\n                    <div [formGroupName]=\"eIndex\" class=\"fields\">\r\n                      <input type=\"text\" name=\"endorsement\" formControlName=\"endorsements\" value=\"\"\r\n                        placeholder=\"Endorsement\">\r\n                      <div class=\"newAgency_topAlign\" *ngIf=\"eIndex > 0\" (click)=\"removeEndorsements(eIndex)\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                        </i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui primary button\" (click)=\"addMoreEndorsements()\">\r\n                    Add More +\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"five wide field\">\r\n                <div formArrayName=\"fare_price_override\">\r\n                  <div\r\n                    *ngFor=\"let fare_price_overrideD of newAgencyProfileForm.get('fare_price_override')['controls']; let overrideIndex = index\">\r\n                    <div [formGroupName]=\"overrideIndex\" class=\"fields\">\r\n                      <input type=\"text\" name=\"fairPriceOverride\" formControlName=\"fare_price_override\" value=\"\"\r\n                        placeholder=\"Fair Price Override\">\r\n                      <div class=\"newAgency_topAlign\" *ngIf=\"overrideIndex > 0\"\r\n                        (click)=\"removeFair_price_override(overrideIndex)\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                        </i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui primary button\" (click)=\"addMoreFair_price_override()\">\r\n                    Add More +\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"four wide field\"></div>\r\n              <div class=\"five wide field \">\r\n                <input type=\"text\" name=\"discount\" formControlName=\"discounts\" value=\"\" placeholder=\"Discount\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Commission</h4>\r\n            </div>\r\n            <div class=\"ui sixteen wide column grid\">\r\n              <div formArrayName=\"commissions\" class=\"sixteen wide column\">\r\n                <div\r\n                  *ngFor=\"let commissionD of newAgencyProfileForm.get('commissions')['controls']; let comIndex = index\">\r\n                  <div [formGroupName]=\"comIndex\" class=\"ui sixteen wide column grid\">\r\n                    <div class=\"five wide column\">\r\n                      <input type=\"text\" name=\"text\" formControlName=\"commisionText\" value=\"\" placeholder=\"Text\">\r\n                    </div>\r\n                    <div class=\"five wide column \">\r\n                      <input type=\"text\" name=\"providerCode\" formControlName=\"commisionProvideCode\" value=\"\"\r\n                        placeholder=\"Provider Code\">\r\n                    </div>\r\n                    <div class=\"newAgency_topAlign\" *ngIf=\"comIndex > 0\" (click)=\"removeComission(comIndex)\">\r\n                      <i class=\"icon\">\r\n                        <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ui primary button btn-sticky\" (click)=\"addMoreComission()\">\r\n                  Add More +\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Accounting</h4>\r\n            </div>\r\n            <div formArrayName=\"accounting\">\r\n              <div *ngFor=\"let accountingD of newAgencyProfileForm.get('accounting')['controls']; let accIndex = index\">\r\n                <div [formGroupName]=\"accIndex\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"four wide field\">\r\n                      <input type=\"text\" name=\"accountNumber\" formControlName=\"accountNumber\" value=\"\"\r\n                        placeholder=\"Account Number\">\r\n                    </div>\r\n                    <div class=\"four wide field \">\r\n                      <input type=\"text\" name=\"costCentre\" formControlName=\"accountCostCentre\" value=\"\"\r\n                        placeholder=\"Cost Centre\">\r\n                    </div>\r\n                    <div class=\"four wide field \">\r\n                      <input type=\"text\" name=\"iataNumber\" formControlName=\"accountIataNumber\" value=\"\"\r\n                        placeholder=\"IATA Number\">\r\n                    </div>\r\n                    <div class=\"four wide field \">\r\n                      <input type=\"text\" name=\"clientReference\" formControlName=\"accountClientReference\" value=\"\"\r\n                        placeholder=\"Client Reference\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"fields\">\r\n                    <div class=\"four wide field\">\r\n                      <input type=\"text\" name=\"gstTaxName\" formControlName=\"accountGstTaxName\" value=\"\"\r\n                        placeholder=\"GST Tax Name\">\r\n                    </div>\r\n                    <div class=\"four wide field \">\r\n                      <input type=\"text\" name=\"gstTaxNumber\" formControlName=\"accountGetTaxNumber\" value=\"\"\r\n                        placeholder=\"GST Tax Number\">\r\n                    </div>\r\n                    <div class=\"four wide field \">\r\n                      <input type=\"text\" name=\"gstTaxAddress\" formControlName=\"accountGstTaxAddress\" value=\"\"\r\n                        placeholder=\"GST Tax Address\">\r\n                    </div>\r\n                    <div class=\"ui primary button btn-sticky\" (click)=\"addMoreAccounting()\">\r\n                      Add Accounting +\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"remarks-content\" class=\"stepper-grid-content animated fadeIn\">\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Remarks</h4>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <label>Remarks</label>\r\n            </div>\r\n            <div formArrayName=\"remarks\">\r\n              <div *ngFor=\"let remarksD of newAgencyProfileForm.get('remarks')['controls']; let remarksIndex = index\">\r\n                <div [formGroupName]=\"remarksIndex\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"three wide field\">\r\n                      <div class=\"ui fluid search selection dropdown\">\r\n                        <input type=\"hidden\" formControlName=\"remark_type\" value=\"\" name=\"remarkType\">\r\n                        <i class=\"dropdown icon\"></i>\r\n                        <div class=\"default text\">Remark Type</div>\r\n                        <div class=\"menu\">\r\n                          <div class=\"item\" (click)=\"setDropDownType('Type 1', 'remark_type')\">Type 1</div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('Type 2', 'remark_type')\">Type 2</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"three wide field \">\r\n                      <div class=\"ui fluid search selection dropdown\">\r\n                        <input type=\"hidden\" formControlName=\"remark_category\" value=\"\" name=\"category\">\r\n                        <i class=\"dropdown icon\"></i>\r\n                        <div class=\"default text\">Category</div>\r\n                        <div class=\"menu\">\r\n                          <div class=\"item\" (click)=\"setDropDownType('Category 1', 'remark_category')\">Category 1</div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('Category 2', 'remark_category')\">Category 2</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"six wide field \">\r\n                      <textarea type=\"text\" name=\"remark\" formControlName=\"remark\" value=\"\" placeholder=\"Remark\"\r\n                        rows=\"4\" cols=\"50\"></textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui primary button btn-sticky\" (click)=\"addMoreNumbers()\">\r\n              Add Remark +\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Profile Notes</h4>\r\n            </div>\r\n            <div formArrayName=\"profile_notes\">\r\n              <div\r\n                *ngFor=\"let profile_notesD of newAgencyProfileForm.get('profile_notes')['controls']; let notesIndex = index\">\r\n                <div [formGroupName]=\"notesIndex\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"three wide field\">\r\n                      <div class=\"ui fluid search selection dropdown\">\r\n                        <input type=\"hidden\" formControlName=\"profile_notes_category\" value=\"\" name=\"category\">\r\n                        <i class=\"dropdown icon\"></i>\r\n                        <div class=\"default text\">Category</div>\r\n                        <div class=\"menu\">\r\n                          <div class=\"item\" (click)=\"setDropDownType('Category 1', 'profile_notes_category')\">Category 1\r\n                          </div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('Category 1', 'profile_notes_category')\">Category 2\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"five wide field \">\r\n                      <input type=\"text\" name=\"information\" formControlName=\"profile_notes_information\" value=\"\"\r\n                        placeholder=\"Information\">\r\n                    </div>\r\n                    <div class=\"ui primary button btn-sticky\" (click)=\"addMoreProfileNotes()\">\r\n                      Add Profile Note +\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Priority Lines 1</h4>\r\n            </div>\r\n            <div formArrayName=\"priority_lines1\">\r\n              <div\r\n                *ngFor=\"let priority_lines1D of newAgencyProfileForm.get('priority_lines1')['controls']; let priorityIndex1 = index\">\r\n                <div [formGroupName]=\"priorityIndex1\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"five wide field \">\r\n                      <input type=\"text\" name=\"information\" formControlName=\"priorityInformation1\" value=\"\"\r\n                        placeholder=\"\">\r\n                    </div>\r\n                    <div class=\"ui primary button btn-sticky\" (click)=\"addMorePriority_lines1()\">\r\n                      Add Priority Line +\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Priority Lines 2</h4>\r\n            </div>\r\n            <!-- <div class=\"fields\"> -->\r\n            <div formArrayName=\"priority_lines2\">\r\n              <div\r\n                *ngFor=\"let priority_lines2D of newAgencyProfileForm.get('priority_lines2')['controls']; let priorityIndex2 = index\">\r\n                <div [formGroupName]=\"priorityIndex2\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"five wide field \">\r\n                      <input type=\"text\" name=\"information\" formControlName=\"priorityInformation2\" value=\"\"\r\n                        placeholder=\"\">\r\n                    </div>\r\n                    <div class=\"ui primary button btn-sticky\" (click)=\"addMorePriority_lines2()\">\r\n                      Add Priority Line +\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- </div> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Follow Up</h4>\r\n            </div>\r\n            <div formArrayName=\"follow_up\">\r\n              <div\r\n                *ngFor=\"let follow_upD of newAgencyProfileForm.get('follow_up')['controls']; let follow_upIndex = index\">\r\n                <div [formGroupName]=\"follow_upIndex\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"three wide field \">\r\n                      <input type=\"text\" name=\"date\" formControlName=\"followUpDate\" value=\"\"\r\n                        placeholder=\"Date (DDMMYYYY)\">\r\n                    </div>\r\n                    <div class=\"three wide field \">\r\n                      <input type=\"text\" name=\"action\" formControlName=\"followUpAction\" value=\"\" placeholder=\"Action\">\r\n                    </div>\r\n                    <div class=\"ui primary button btn-sticky\" (click)=\"addMoreFollow_up()\">\r\n                      Add Follow Up +\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"ui sixteen wide column grid\">\r\n        <div class=\"sixteen wide column text-right\">\r\n          <button type=\"button\" class=\"ui positive button m-auto\" (click)=\"createNewAgencyProfile()\">\r\n            Save\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile-routing.module.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile-routing.module.ts ***!
  \**********************************************************************************************************************/
/*! exports provided: NewAgencyProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAgencyProfileRoutingModule", function() { return NewAgencyProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _new_agency_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-agency-profile.component */ "./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: '', component: _new_agency_profile_component__WEBPACK_IMPORTED_MODULE_1__["NewAgencyProfileComponent"] }
];
let NewAgencyProfileRoutingModule = class NewAgencyProfileRoutingModule {
};
NewAgencyProfileRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], NewAgencyProfileRoutingModule);



/***/ }),

/***/ "./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".stepper-grid {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n.stepper-grid .stepper-grid_step {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  opacity: 0.6;\n  cursor: pointer;\n}\n.stepper-grid .stepper-grid_step._active {\n  opacity: 1;\n  -webkit-transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div {\n  background-color: #062862;\n  border: 0;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div div.image {\n  background-color: white;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div:hover {\n  border: 2px solid #A6B1C3;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon label {\n  border: 0;\n  background-color: #062862;\n  color: white;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-border hr {\n  border-bottom: 2px solid #062862;\n}\n.stepper-grid .stepper-grid_step._activated {\n  opacity: 1;\n  -webkit-transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div {\n  background-color: #437ADA;\n  border: 0;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div div.image {\n  background-color: white;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div:hover {\n  border: 2px solid #A6B1C3;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon label {\n  border: 0;\n  background-color: #437ADA;\n  color: white;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-border hr {\n  border-bottom: 2px solid #437ADA;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div {\n  background-color: transparent;\n  border: 2px solid #A6B1C3;\n  color: white;\n  width: 45px;\n  height: 45px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 50%;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon label {\n  width: 100px;\n  height: auto;\n  line-height: 24px;\n  text-align: center;\n  background-color: transparent;\n  border: 2px solid #A6B1C3;\n  margin-top: 15px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 600 !important;\n  font-size: 13px;\n  color: #A6B1C3;\n  border-radius: 8px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon label._last {\n  width: 150px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-border {\n  width: 100%;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-border hr {\n  margin-top: -24px;\n  width: 100%;\n  height: 2px;\n  background: none;\n  border-bottom: 2px solid #A6B1C3;\n}\n.stepper-grid-content {\n  display: none;\n}\n.stepper-grid-content._active {\n  display: block;\n}\n.checkbox_label {\n  height: 13px !important;\n  color: #828282 !important;\n  font-family: Ubuntu !important;\n  font-size: 12px !important;\n  font-weight: 300 !important;\n}\n.booking-header {\n  color: #4F4F4F;\n  font-family: Helvetica;\n  font-size: 20px;\n  font-weight: 300;\n  line-height: 22px;\n  margin-left: 22px;\n}\n.outer-basic {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n  padding: 15px;\n}\n.bookings_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n.bookings_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n.bookings_pickers .input .icon {\n  opacity: 1;\n  z-index: 100;\n}\n.bookings_pickers .input .icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n.bookings_pickers .input .icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n.bookings_pickers .input .search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.bookings_pickers .input .search.dropdown .search {\n  margin-left: 42px !important;\n}\n.bookings_pickers .input .search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n.bookings_btn-panel .secondary {\n  width: 135.64px;\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n.bookings_btn-panel .primary {\n  width: 135.64px;\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n.trailing_button {\n  position: absolute;\n  right: 0;\n}\n.newAgency_topAlign {\n  padding-top: 1vh;\n}\ntd {\n  color: #4F4F4F;\n  font-family: Helvetica;\n  font-size: 10px;\n  line-height: 11px;\n  text-align: center;\n}\nth {\n  color: #4F4F4F;\n  font-family: Helvetica;\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 11px;\n  text-align: center;\n}\n.confirm {\n  width: 63px;\n}\n.recConfirm {\n  height: 18px;\n  width: 62px;\n  background-color: #72D44F;\n  color: white;\n  padding-top: 0.5vh;\n}\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n.field input::-webkit-input-placeholder {\n  font-size: 12px;\n}\n.field input::-moz-placeholder {\n  font-size: 12px;\n}\n.field input::-ms-input-placeholder {\n  font-size: 12px;\n}\n.field input::placeholder {\n  font-size: 12px;\n}\n.outer-basic_secondary {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n}\n.outer-basicForm_secondary {\n  width: 100%;\n  height: auto;\n  padding: 15px;\n}\n.right_links {\n  position: absolute;\n  right: 0;\n  padding-top: 1vh;\n  padding-right: 8vh;\n  color: #3867B1;\n  font-family: Ubuntu;\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 12px;\n}\n.outer-basic_tertiary {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\n.outer-basicForm_tertiary {\n  width: 100%;\n  height: auto;\n  padding: 50px;\n}\nhr {\n  box-sizing: border-box;\n  height: 1px;\n  border: 0.5px solid #E0E0E0;\n}\n.dropdown .text {\n  font-size: 12px;\n}\n.bookings_btn-panel.trailing_button {\n  margin-right: 45px;\n}\n.ui.fluid.container {\n  padding: 28px;\n}\n.right_links {\n  padding-top: 1vh;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image {\n  width: 22px;\n  margin: 0 auto;\n  background-color: #A6B1C3;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._member {\n  -webkit-mask: url('personal.svg') no-repeat center;\n  mask: url('personal.svg') no-repeat center;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._payment {\n  -webkit-mask: url('payment.svg') no-repeat center;\n  mask: url('payment.svg') no-repeat center;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._remarks {\n  -webkit-mask: url('remarks.svg') no-repeat center;\n  mask: url('remarks.svg') no-repeat center;\n}\n.stepper-grid {\n  padding-left: 100px;\n}\n.mtb {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n.ml {\n  margin-left: 20px;\n}\n.mr {\n  margin-right: 20px;\n}\n.ui.form input[type=text],\ninput {\n  margin-top: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LWFnZW5jeS1wcm9maWxlL0U6XFxCZWxhbFxccHJvamVjdHNcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxjb21vbi1zdHlsZXNcXHN0ZXBwZXIuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LWFnZW5jeS1wcm9maWxlL25ldy1hZ2VuY3ktcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LWFnZW5jeS1wcm9maWxlL0U6XFxCZWxhbFxccHJvamVjdHNcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxjb21vbi1zdHlsZXNcXGRlc2lnbi1wYWxldHRlLnNjc3MiLCJzcmMvYXBwL2xheW91dC9wcm9maWxlLW1hbmFnZW1lbnQvY3JlYXRlLW5ldy1wcm9maWxlL25ldy1hZ2VuY3ktcHJvZmlsZS9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHByb2ZpbGUtbWFuYWdlbWVudFxcY3JlYXRlLW5ldy1wcm9maWxlXFxuZXctYWdlbmN5LXByb2ZpbGVcXG5ldy1hZ2VuY3ktcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LWFnZW5jeS1wcm9maWxlL0U6XFxCZWxhbFxccHJvamVjdHNcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxjb21vbi1zdHlsZXNcXG1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDSjtBRENJO0VBQ0UsVUFBQTtFQUNBLGtFQUFBO0VBQUEsMERBQUE7QUNDTjtBREVRO0VBQ0UseUJFZFE7RUZlUixTQUFBO0FDQVY7QURFVTtFQUNFLHVCQUFBO0FDQVo7QURHVTtFQUNFLHlCQUFBO0FDRFo7QURLUTtFQUNFLFNBQUE7RUFDQSx5QkU1QlE7RUY2QlIsWUFBQTtBQ0hWO0FEUVE7RUFDRSxnQ0FBQTtBQ05WO0FEV0k7RUFDRSxVQUFBO0VBQ0Esa0VBQUE7RUFBQSwwREFBQTtBQ1ROO0FEWVE7RUFDRSx5QkVoRE07RUZpRE4sU0FBQTtBQ1ZWO0FEWVU7RUFDRSx1QkFBQTtBQ1ZaO0FEYVU7RUFDRSx5QkFBQTtBQ1haO0FEZVE7RUFDRSxTQUFBO0VBQ0EseUJFOURNO0VGK0ROLFlBQUE7QUNiVjtBRGtCUTtFQUNFLGdDQUFBO0FDaEJWO0FEcUJJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ25CTjtBRHFCTTtFQUNFLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7QUNuQlI7QURzQk07RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0V6RU07RUYwRU4sMkJBQUE7RUFDQSxlQUFBO0VBQ0EsY0VwR1U7RUZxR1Ysa0JFaEZnQjtBRDREeEI7QURzQlE7RUFDRSxZQUFBO0FDcEJWO0FEeUJJO0VBQ0UsV0FBQTtBQ3ZCTjtBRHlCTTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FDdkJSO0FENkJBO0VBQ0UsYUFBQTtBQzFCRjtBRDRCRTtFQUNFLGNBQUE7QUMxQko7QUVwR0E7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FGdUdGO0FFcEdBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRnVHRjtBRXBHQTtFQUNFLHNCQUFBO0VBQ0EsNENBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FGdUdGO0FFcEdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FGdUdGO0FFbEdFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBRnFHSjtBRWxHRTtFQUNFLHdCQUFBO0VBQ0EsMENBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FGb0dKO0FFakdFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUZtR0o7QUVqR0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBRm1HTjtBRWpHTTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBRm1HUjtBRTlGRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBRmdHSjtBRTlGSTtFQUNFLDRCQUFBO0FGZ0dOO0FFN0ZJO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7QUYrRk47QUV6RkU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlGQUFBO0FGNEZKO0FFekZFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpRkFBQTtBRjJGSjtBRXRGQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBRnlGRjtBRXRGQTtFQUNFLGdCQUFBO0FGeUZGO0FFdEZBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUZ5RkY7QUV0RkE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FGeUZGO0FFdEZBO0VBQ0UsV0FBQTtBRnlGRjtBRXRGQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUZ5RkY7QUV0RkE7RUFDRSw0Q0FBQTtBRnlGRjtBRXJGQTtFQUNFLGVBQUE7QUZ3RkY7QUV6RkE7RUFDRSxlQUFBO0FGd0ZGO0FFekZBO0VBQ0UsZUFBQTtBRndGRjtBRXpGQTtFQUNFLGVBQUE7QUZ3RkY7QUVwRkE7RUFDRSxzQkFBQTtFQUNBLDRDQUFBO0FGdUZGO0FFcEZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FGdUZGO0FFcEZBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FGdUZGO0FFcEZBO0VBQ0Usc0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUZ1RkY7QUVwRkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUZ1RkY7QUVwRkE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBRnVGRjtBRXBGQTtFQUNFLGVBQUE7QUZ1RkY7QUVwRkE7RUFDRSxrQkFBQTtBRnVGRjtBRXBGQTtFQUNFLGFBQUE7QUZ1RkY7QUVwRkE7RUFDRSxnQkFBQTtBRnVGRjtBRW5GRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJEN01jO0FEbVNsQjtBRXBGSTtFQ3hLRixrREFBQTtFQUNBLDBDQUFBO0FIK1BGO0FFcEZJO0VDNUtGLGlEQUFBO0VBQ0EseUNBQUE7QUhtUUY7QUVwRkk7RUNoTEYsaURBQUE7RUFDQSx5Q0FBQTtBSHVRRjtBRWxGQTtFQUNFLG1CQUFBO0FGcUZGO0FFakZBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBRm9GRjtBRWpGQTtFQUNFLGlCQUFBO0FGb0ZGO0FFakZBO0VBQ0Usa0JBQUE7QUZvRkY7QUVqRkE7O0VBRUUsd0JBQUE7QUZvRkYiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcHJvZmlsZS1tYW5hZ2VtZW50L2NyZWF0ZS1uZXctcHJvZmlsZS9uZXctYWdlbmN5LXByb2ZpbGUvbmV3LWFnZW5jeS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0ZXBwZXItZ3JpZCB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICAuc3RlcHBlci1ncmlkX3N0ZXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAuNjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmLl9hY3RpdmUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG5cclxuICAgICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24ge1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGVlcC1ibHVlLWNvbG9yO1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG5cclxuICAgICAgICAgIGRpdi5pbWFnZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRlZXAtYmx1ZS1jb2xvcjtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIge1xyXG4gICAgICAgIGhyIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkZGVlcC1ibHVlLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuX2FjdGl2YXRlZCB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XHJcblxyXG4gICAgICAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiB7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG5cclxuICAgICAgICAgIGRpdi5pbWFnZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtYm9yZGVyIHtcclxuICAgICAgICBociB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgZGl2IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtcHJpbWFyeTtcclxuXHJcbiAgICAgICAgJi5fbGFzdCB7XHJcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgaHIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0yNHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zdGVwcGVyLWdyaWQtY29udGVudCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgJi5fYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG4iLCIuc3RlcHBlci1ncmlkIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3BhY2l0eTogMC42O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmUgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2Mjg2MjtcbiAgYm9yZGVyOiAwO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYgZGl2LmltYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdjpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBNkIxQzM7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGxhYmVsIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYyODYyO1xuICBjb2xvcjogd2hpdGU7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIgaHIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA2Mjg2Mjtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2YXRlZCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM3QURBO1xuICBib3JkZXI6IDA7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiBkaXYuaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2OmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0E2QjFDMztcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gbGFiZWwge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzdBREE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciBociB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNDM3QURBO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBNkIxQzM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gbGFiZWwge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBNkIxQzM7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNBNkIxQzM7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGxhYmVsLl9sYXN0IHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciBociB7XG4gIG1hcmdpbi10b3A6IC0yNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQTZCMUMzO1xufVxuXG4uc3RlcHBlci1ncmlkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnN0ZXBwZXItZ3JpZC1jb250ZW50Ll9hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNoZWNrYm94X2xhYmVsIHtcbiAgaGVpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjODI4MjgyICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBVYnVudHUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcbn1cblxuLmJvb2tpbmctaGVhZGVyIHtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1hcmdpbi1sZWZ0OiAyMnB4O1xufVxuXG4ub3V0ZXItYmFzaWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG59XG5cbi5vdXRlci1iYXNpY0Zvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQuYm9va2luZ3NfZGF0ZXBpY2tlciB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIG1heC13aWR0aDogMTM4cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnVpLmJhc2ljLmZsb2F0aW5nLmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYmEoMTUyLCAxNTIsIDE1MiwgMC42KSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5pY29uIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTAwO1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbCB7XG4gIHdpZHRoOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5zZWFyY2guZHJvcGRvd24ge1xuICB3aWR0aDogMjE4cHg7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnNlYXJjaC5kcm9wZG93biAuc2VhcmNoIHtcbiAgbWFyZ2luLWxlZnQ6IDQycHggIWltcG9ydGFudDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuc2VhcmNoLmRyb3Bkb3duIC5kZWZhdWx0LnRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHggMCAwIDM4cHggIWltcG9ydGFudDtcbn1cblxuLmJvb2tpbmdzX2J0bi1wYW5lbCAuc2Vjb25kYXJ5IHtcbiAgd2lkdGg6IDEzNS42NHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RjRGNEY7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5ib29raW5nc19idG4tcGFuZWwgLnByaW1hcnkge1xuICB3aWR0aDogMTM1LjY0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4udHJhaWxpbmdfYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn1cblxuLm5ld0FnZW5jeV90b3BBbGlnbiB7XG4gIHBhZGRpbmctdG9wOiAxdmg7XG59XG5cbnRkIHtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDExcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGgge1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29uZmlybSB7XG4gIHdpZHRoOiA2M3B4O1xufVxuXG4ucmVjQ29uZmlybSB7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDYycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MkQ0NEY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDAuNXZoO1xufVxuXG4udGFiLnNlZ21lbnQge1xuICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLmZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm91dGVyLWJhc2ljX3NlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4ub3V0ZXItYmFzaWNGb3JtX3NlY29uZGFyeSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5yaWdodF9saW5rcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmctdG9wOiAxdmg7XG4gIHBhZGRpbmctcmlnaHQ6IDh2aDtcbiAgY29sb3I6ICMzODY3QjE7XG4gIGZvbnQtZmFtaWx5OiBVYnVudHU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG59XG5cbi5vdXRlci1iYXNpY190ZXJ0aWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbn1cblxuLm91dGVyLWJhc2ljRm9ybV90ZXJ0aWFyeSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDUwcHg7XG59XG5cbmhyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlcjogMC41cHggc29saWQgI0UwRTBFMDtcbn1cblxuLmRyb3Bkb3duIC50ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYm9va2luZ3NfYnRuLXBhbmVsLnRyYWlsaW5nX2J1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogNDVweDtcbn1cblxuLnVpLmZsdWlkLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDI4cHg7XG59XG5cbi5yaWdodF9saW5rcyB7XG4gIHBhZGRpbmctdG9wOiAxdmg7XG59XG5cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiBkaXYuaW1hZ2Uge1xuICB3aWR0aDogMjJweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNBNkIxQzM7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYgZGl2LmltYWdlLl9tZW1iZXIge1xuICAtd2Via2l0LW1hc2s6IHVybChcIi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9wZXJzb25hbC5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgbWFzazogdXJsKFwiLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3BlcnNvbmFsLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IGRpdi5pbWFnZS5fcGF5bWVudCB7XG4gIC13ZWJraXQtbWFzazogdXJsKFwiLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3BheW1lbnQuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG4gIG1hc2s6IHVybChcIi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9wYXltZW50LnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IGRpdi5pbWFnZS5fcmVtYXJrcyB7XG4gIC13ZWJraXQtbWFzazogdXJsKFwiLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3JlbWFya3Muc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG4gIG1hc2s6IHVybChcIi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9yZW1hcmtzLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xufVxuXG4uc3RlcHBlci1ncmlkIHtcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcbn1cblxuLm10YiB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5tbCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ubXIge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi51aS5mb3JtIGlucHV0W3R5cGU9dGV4dF0sXG5pbnB1dCB7XG4gIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbn0iLCIkcHJpbWFyeS1jb2xvcjogIzQzN0FEQTtcclxuJHNlY29uZGFyeS1jb2xvcjogI0E2QjFDMztcclxuJGRlZXAtYmx1ZS1jb2xvcjogIzA2Mjg2MjtcclxuJGxpZ2h0LXNtb2tlLWNvbG9yOiAjZTVlNWU1O1xyXG4kdm9pbGEtZ3JlZW46ICM4NEJDNkE7XHJcbiRwdXJlLXdoaXRlOiB3aGl0ZTtcclxuJGZhdWx0LWNvbG9yOiAjREU3OTc5O1xyXG4kd2FybmluZy1jb2xvcjogI0VDQzA0RTtcclxuJHN1Y2Nlc3MtY29sb3I6ICM3M0IyNUQ7XHJcblxyXG4kYm9keS1iYXNlOiAjRjZGOUZDO1xyXG4kY29ycG9yYXRlLWJsdWUtYmFzZTogIzQ1NjdBQztcclxuXHJcbiRjb250YWluZXItYmFzZTogd2hpdGU7XHJcbiRjb250YWluZXItYmFzZS1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoNiwgNDAsIDk4LCAwLjEpO1xyXG4kY29udGFpbmVyLWRyb3Bkb3ducy1zaGFkb3c6IDBweCA4cHggMTRweCByZ2JhKDAsIDU4LCAxNjQsIC4yKTtcclxuXHJcbiRwcmltYXJ5LXNoYWRvdzogMHB4IDQuODNweCAxNnB4IHJnYmEoNjcsIDEyMiwgMjE4LCAuNSk7XHJcbiRsaWdodC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgNTgsIDE2NCwgLjI1KTtcclxuJGZhZGVkLXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgxNjcsIDE3MywgMTgyLCAuMik7XHJcbiRsaWdodC1leHRlbmRlZC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgNTgsIDE2NCwgLjI1KTtcclxuXHJcbiRib3JkZXItcmFkaXVzLXByaW1hcnk6IDhweDtcclxuJGJvcmRlci1yYWRpdXMtc2Vjb25kYXJ5OiA2cHg7XHJcblxyXG4kZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XHJcblxyXG4kdG9hc3QtaW5mby1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiR0b2FzdC1pbmZvLXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDExMSwgMCwgMCwgLjIpO1xyXG5cclxuJHRvYXN0LWVycm9yLWNvbG9yOiAkZmF1bHQtY29sb3I7XHJcbiR0b2FzdC1lcnJvci1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxMTEsIDAsIDAsIC4yKTtcclxuXHJcbiR0b2FzdC13YXJuaW5nLWNvbG9yOiAkd2FybmluZy1jb2xvcjtcclxuJHRvYXN0LXdhcm5pbmctc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTc3LCAxMjcsIDAsIC4yKTtcclxuXHJcbiR0b2FzdC1zdWNjZXNzLWNvbG9yOiAkc3VjY2Vzcy1jb2xvcjtcclxuJHRvYXN0LXN1Y2Nlc3Mtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMzQsIDEzMCwgMCwgLjIpO1xyXG4iLCJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi8uLi9jb21vbi1zdHlsZXMvY29tbW9uLnNjc3NcIjtcclxuXHJcbi5jaGVja2JveF9sYWJlbCB7XHJcbiAgaGVpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM4MjgyODIgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogVWJ1bnR1ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9va2luZy1oZWFkZXIge1xyXG4gIGNvbG9yOiAjNEY0RjRGO1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIycHg7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpYyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWNGb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IHtcclxuXHJcbiAgJi5ib29raW5nc19kYXRlcGlja2VyIHtcclxuICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEzOHB4XHJcbiAgfVxyXG5cclxuICAudWkuYmFzaWMuZmxvYXRpbmcuYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiByZ2JhKDE1MiwgMTUyLCAxNTIsIDAuNikgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4gIH1cclxuXHJcbiAgLmljb24ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuXHJcbiAgICAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgICB3aWR0aDogMjRweDtcclxuICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG5cclxuICAgICAgJi5jYWwge1xyXG4gICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWFyY2guZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDIxOHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG5cclxuICAgIC5zZWFyY2gge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNDJweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZWZhdWx0LnRleHQge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nOiA4cHggMCAwIDM4cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ib29raW5nc19idG4tcGFuZWwge1xyXG4gIC5zZWNvbmRhcnkge1xyXG4gICAgd2lkdGg6IDEzNS42NHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRGNEY0RjtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB9XHJcblxyXG4gIC5wcmltYXJ5IHtcclxuICAgIHdpZHRoOiAxMzUuNjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLnRyYWlsaW5nX2J1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4ubmV3QWdlbmN5X3RvcEFsaWduIHtcclxuICBwYWRkaW5nLXRvcDogMXZoO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgY29sb3I6ICM0RjRGNEY7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50aCB7XHJcbiAgY29sb3I6ICM0RjRGNEY7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMTFweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb25maXJtIHtcclxuICB3aWR0aDogNjNweDtcclxufVxyXG5cclxuLnJlY0NvbmZpcm0ge1xyXG4gIGhlaWdodDogMThweDtcclxuICB3aWR0aDogNjJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzJENDRGO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLXRvcDogLjV2aDtcclxufVxyXG5cclxuLnRhYi5zZWdtZW50IHtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuXHJcbi5maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuXHJcbi5vdXRlci1iYXNpY19zZWNvbmRhcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgYm94LXNoYWRvdzogM3B4IDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpY0Zvcm1fc2Vjb25kYXJ5IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLnJpZ2h0X2xpbmtzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcGFkZGluZy10b3A6IDF2aDtcclxuICBwYWRkaW5nLXJpZ2h0OiA4dmg7XHJcbiAgY29sb3I6ICMzODY3QjE7XHJcbiAgZm9udC1mYW1pbHk6IFVidW50dTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsaW5lLWhlaWdodDogMTJweDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljX3RlcnRpYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpY0Zvcm1fdGVydGlhcnkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiA1MHB4O1xyXG59XHJcblxyXG5ociB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBoZWlnaHQ6IDFweDtcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkICNFMEUwRTA7XHJcbn1cclxuXHJcbi5kcm9wZG93biAudGV4dCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYm9va2luZ3NfYnRuLXBhbmVsLnRyYWlsaW5nX2J1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG4udWkuZmx1aWQuY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAyOHB4O1xyXG59XHJcblxyXG4ucmlnaHRfbGlua3Mge1xyXG4gIHBhZGRpbmctdG9wOiAxdmg7XHJcbn1cclxuXHJcbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiB7XHJcbiAgZGl2LmltYWdlIHtcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG5cclxuICAgICYuX21lbWJlciB7XHJcbiAgICAgIEBpbmNsdWRlIG1hc2stc3ZnLWRpdignLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3BlcnNvbmFsLnN2ZycpO1xyXG4gICAgfVxyXG5cclxuICAgICYuX3BheW1lbnQge1xyXG4gICAgICBAaW5jbHVkZSBtYXNrLXN2Zy1kaXYoJy4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9wYXltZW50LnN2ZycpO1xyXG4gICAgfVxyXG5cclxuICAgICYuX3JlbWFya3Mge1xyXG4gICAgICBAaW5jbHVkZSBtYXNrLXN2Zy1kaXYoJy4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9yZW1hcmtzLnN2ZycpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnN0ZXBwZXItZ3JpZCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMDBweDtcclxufVxyXG5cclxuXHJcbi5tdGIge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLm1sIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLm1yIHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi51aS5mb3JtIGlucHV0W3R5cGU9dGV4dF0sXHJcbmlucHV0IHtcclxuICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiQG1peGluIHBsYWNlaG9sZGVyIHtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcblxyXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGNvbG9yLW9wYWNpdHkoJGNvbG9yLCAkb3BhY2l0eTogMC4zKSB7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yO1xyXG4gIC8qIFRoZSBGYWxsYmFjayAqL1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLCAkb3BhY2l0eSk7XHJcbn1cclxuXHJcbkBtaXhpbiBoaWRlTnVtYmVyRmllbGRBcnJvd3Mge1xyXG5cclxuICAvKiBDaHJvbWUsIFNhZmFyaSwgRWRnZSwgT3BlcmEgKi9cclxuICBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuICBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC8qIEZpcmVmb3ggKi9cclxuICBpbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtYXNrLXN2Zy1kaXYoJGltZykge1xyXG4gIC13ZWJraXQtbWFzazogdXJsKCRpbWcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgbWFzazogdXJsKCRpbWcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: NewAgencyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAgencyProfileComponent", function() { return NewAgencyProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_profile_management_profile_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../shared/services/profile-management/profile-management.service */ "./src/app/shared/services/profile-management/profile-management.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let NewAgencyProfileComponent = class NewAgencyProfileComponent {
    constructor(route, ProfileManagementService, fb) {
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
            follow_up: this.fb.array([this.fb.group(this.initFollow_up())]),
        });
        this.createNewAgencyProfile = () => {
            this.newAgencyProfileObj.agency_profile_id = this.newAgencyProfileId;
            this.newAgencyProfileObj.organisation_id = "";
            this.newAgencyProfileObj.created = "";
            this.newAgencyProfileObj.responsible_office = this.newAgencyProfileForm.get('responsible_office').value;
            this.newAgencyProfileObj.department_contact_name = this.newAgencyProfileForm.get('department_contact_name').value;
            this.newAgencyProfileObj.agent_contact_name = this.newAgencyProfileForm.get('agent_contact_name').value;
            this.newAgencyProfileObj.number = JSON.stringify(this.newAgencyProfileForm.get('number').value);
            this.newAgencyProfileObj.home = this.newAgencyProfileForm.get('home').value;
            this.newAgencyProfileObj.email = JSON.stringify(this.newAgencyProfileForm.get('email').value);
            this.newAgencyProfileObj.address = JSON.stringify(this.newAgencyProfileForm.get('address').value);
            this.newAgencyProfileObj.bank_accounts = JSON.stringify(this.newAgencyProfileForm.get('bank_accounts').value);
            this.newAgencyProfileObj.direct_debit_authorized = this.newAgencyProfileForm.get('direct_debit_authorized').value;
            this.newAgencyProfileObj.forms_of_payment = JSON.stringify(this.newAgencyProfileForm.get('forms_of_payment').value);
            this.newAgencyProfileObj.fare_price_override = JSON.stringify(this.newAgencyProfileForm.get('fare_price_override').value);
            this.newAgencyProfileObj.endorsements = JSON.stringify(this.newAgencyProfileForm.get('endorsements').value);
            this.newAgencyProfileObj.discounts = this.newAgencyProfileForm.get('discounts').value;
            this.newAgencyProfileObj.commissions = JSON.stringify(this.newAgencyProfileForm.get('commissions').value);
            this.newAgencyProfileObj.accounting = JSON.stringify(this.newAgencyProfileForm.get('accounting').value);
            this.newAgencyProfileObj.remarks = JSON.stringify(this.newAgencyProfileForm.get('remarks').value);
            this.newAgencyProfileObj.profile_notes = JSON.stringify(this.newAgencyProfileForm.get('profile_notes').value);
            this.newAgencyProfileObj.priority_lines1 = JSON.stringify(this.newAgencyProfileForm.get('priority_lines1').value);
            this.newAgencyProfileObj.priority_lines2 = JSON.stringify(this.newAgencyProfileForm.get('priority_lines2').value);
            this.newAgencyProfileObj.follow_up = JSON.stringify(this.newAgencyProfileForm.get('follow_up').value);
            console.log("You shall not pass", this.newAgencyProfileObj);
            this.ProfileManagementService.NewAgencyProfile(this.newAgencyProfileObj).subscribe((results) => {
                console.log(results);
            });
        };
        this.updateNewAgencyProfile = () => {
            this.newAgencyProfileObj.agency_profile_id = this.agencyProfileId;
            this.newAgencyProfileObj.organisation_id = "";
            this.newAgencyProfileObj.created = "";
            this.newAgencyProfileObj.responsible_office = this.newAgencyProfileForm.get('responsible_office').value;
            this.newAgencyProfileObj.department_contact_name = this.newAgencyProfileForm.get('department_contact_name').value;
            this.newAgencyProfileObj.agent_contact_name = this.newAgencyProfileForm.get('agent_contact_name').value;
            this.newAgencyProfileObj.number = JSON.stringify(this.newAgencyProfileForm.get('number').value);
            this.newAgencyProfileObj.email = JSON.stringify(this.newAgencyProfileForm.get('email').value);
            this.newAgencyProfileObj.address = JSON.stringify(this.newAgencyProfileForm.get('address').value);
            this.newAgencyProfileObj.bank_accounts = JSON.stringify(this.newAgencyProfileForm.get('bank_accounts').value);
            this.newAgencyProfileObj.direct_debit_authorized = this.newAgencyProfileForm.get('direct_debit_authorized').value;
            this.newAgencyProfileObj.forms_of_payment = JSON.stringify(this.newAgencyProfileForm.get('forms_of_payment').value);
            this.newAgencyProfileObj.fare_price_override = JSON.stringify(this.newAgencyProfileForm.get('fare_price_override').value);
            this.newAgencyProfileObj.endorsements = JSON.stringify(this.newAgencyProfileForm.get('endorsements').value);
            this.newAgencyProfileObj.discounts = this.newAgencyProfileForm.get('discounts').value;
            this.newAgencyProfileObj.commissions = JSON.stringify(this.newAgencyProfileForm.get('commissions').value);
            this.newAgencyProfileObj.accounting = JSON.stringify(this.newAgencyProfileForm.get('accounting').value);
            this.newAgencyProfileObj.remarks = JSON.stringify(this.newAgencyProfileForm.get('remarks').value);
            this.newAgencyProfileObj.profile_notes = JSON.stringify(this.newAgencyProfileForm.get('profile_notes').value);
            this.newAgencyProfileObj.priority_lines1 = JSON.stringify(this.newAgencyProfileForm.get('priority_lines1').value);
            this.newAgencyProfileObj.priority_lines2 = JSON.stringify(this.newAgencyProfileForm.get('priority_lines2').value);
            this.newAgencyProfileObj.follow_up = JSON.stringify(this.newAgencyProfileForm.get('follow_up').value);
            console.log("You shall not pass", this.newAgencyProfileObj);
            this.ProfileManagementService.UpdateAgencyProfile(this.agencyProfileId, this.newAgencyProfileObj).subscribe((results) => {
                console.log(results);
            });
        };
        let uniqueProfileID = Math.random().toString(36).substring(7);
        console.log(uniqueProfileID);
        this.newAgencyProfileId = uniqueProfileID + "Amedius";
        this.route.queryParams.subscribe(params => {
            console.log(params);
            this.agencyProfileId = params.agency_profile_id;
            //alert(this.agencyProfileId);
            this.newAgencyProfileForm.patchValue({
                agency_profile_id: params.agency_profile_id,
                organisation_id: params.organisation_id,
                responsible_office: params.responsible_office,
                department_contact_name: params.department_contact_name,
                agent_contact_name: params.agent_contact_name,
                direct_debit_authorized: params.direct_debit_authorized,
                discounts: params.discounts,
            });
            let number = this.parsingArrayParams(params.number, this.number);
            let email = this.parsingArrayParams(params.email, this.email);
            let address = this.parsingArrayParams(params.address, this.address);
            let formsOfPayment = this.parsingArrayParams(params.forms_of_payment, this.forms_of_payment);
            let farePriceOverride = this.parsingArrayParams(params.farePriceOverride, this.fare_price_override);
            let endorsements = this.parsingArrayParams(params.endorsements, this.endorsements);
            let commissions = this.parsingArrayParams(params.commission, this.commissions);
            let accounting = this.parsingArrayParams(params.accounting, this.accounting);
            let remarks = this.parsingArrayParams(params.remarks, this.remarks);
            let profileNotes = this.parsingArrayParams(params.profile_notes, this.profile_notes);
            let priorityLines1 = this.parsingArrayParams(params.priority_lines1, this.priority_lines1);
            let priorityLines2 = this.parsingArrayParams(params.priority_lines2, this.priority_lines2);
            let followUp = this.parsingArrayParams(params.follow_up, this.follow_up);
        });
    }
    parsingArrayParams(value, parameter) {
        if (value && value.length > 0) {
            let array = JSON.parse(value);
            if (array && array.length > 0) {
                array.map((item, index) => {
                    parameter.removeAt(0);
                    console.log(item);
                    parameter.push(this.fb.group(item));
                    return parameter;
                });
            }
            else {
                console.log("There is something wrong with the passing of arrays");
            }
        }
    }
    setActiveTab(label) {
        let tab = this.tab.nativeElement.querySelectorAll(`.stepper-grid .stepper-grid_step`);
        let content = this.tabContent.nativeElement.querySelectorAll(`.stepper-grid-content`);
        tab.forEach(el => {
            if (el.classList.contains('_active')) {
                el.classList.remove('_active');
                el.classList.add('_activated');
            }
        });
        content.forEach(el => {
            if (el.classList.contains('_active')) {
                el.classList.remove('_active');
            }
        });
        this.tab.nativeElement.querySelector(`#${label}`).classList.add('_active');
        this.tabContent.nativeElement.querySelector(`#${label}-content`).classList.add('_active');
        window.document.querySelector('.scrollable-pusher').scrollTo({ top: 0, behavior: 'smooth' });
    }
    initNumber() {
        return {
            preferedHome: [''],
            home: [''],
            number: [''],
            number_comment: ['']
        };
    }
    initAddEmail() {
        return {
            preferedOfficial: [''],
            Official: [''],
            emailAddress: [''],
            emailAddress_comment: ['']
        };
    }
    initAddress() {
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
    initBank_accounts() {
        return {
            bank_code: [''],
            bank_name: [''],
            bank_number: [''],
            bank_city: [''],
            bank_valid_from: [''],
            bank_valid_to: ['']
        };
    }
    initForms_of_payment() {
        return {
            forms_of_payment: [''],
        };
    }
    initFare_price_override() {
        return {
            fare_price_override: ['']
        };
    }
    initEndorsements() {
        return {
            endorsements: ['']
        };
    }
    initComissions() {
        return {
            commisionText: [''],
            commisionProvideCode: ['']
        };
    }
    initAccounting() {
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
    initRemarks() {
        return {
            remark_type: [''],
            remark_category: [''],
            remark: ['']
        };
    }
    initProfile_Notes() {
        return {
            profile_notes_category: [''],
            profile_notes_information: ['']
        };
    }
    initPriority_lines1() {
        return {
            priorityInformation1: ['']
        };
    }
    initPriority_lines2() {
        return {
            priorityInformation2: ['']
        };
    }
    initFollow_up() {
        return {
            followUpDate: [''],
            followUpAction: ['']
        };
    }
    get number() {
        return this.newAgencyProfileForm.get('number');
    }
    get email() {
        return this.newAgencyProfileForm.get('email');
    }
    get address() {
        return this.newAgencyProfileForm.get('address');
    }
    get bank_accounts() {
        return this.newAgencyProfileForm.get('bank_accounts');
    }
    get forms_of_payment() {
        return this.newAgencyProfileForm.get('forms_of_payment');
    }
    get fare_price_override() {
        return this.newAgencyProfileForm.get('fare_price_override');
    }
    get endorsements() {
        return this.newAgencyProfileForm.get('endorsements');
    }
    get commissions() {
        return this.newAgencyProfileForm.get('commissions');
    }
    get accounting() {
        return this.newAgencyProfileForm.get('accounting');
    }
    get remarks() {
        return this.newAgencyProfileForm.get('remarks');
    }
    get profile_notes() {
        return this.newAgencyProfileForm.get('profile_notes');
    }
    get priority_lines1() {
        return this.newAgencyProfileForm.get('priority_lines1');
    }
    get priority_lines2() {
        return this.newAgencyProfileForm.get('priority_lines2');
    }
    get follow_up() {
        return this.newAgencyProfileForm.get('follow_up');
    }
    addMoreNumbers() {
        this.number.push(this.fb.group(this.initNumber()));
    }
    // removeNumbers(index): void {
    //   this.number.removeAt(index);
    // }
    addMoreEmail() {
        this.email.push(this.fb.group(this.initAddEmail()));
    }
    addMoreAddress() {
        this.address.push(this.fb.group(this.initAddress()));
    }
    addBankAccount() {
        this.bank_accounts.push(this.fb.group(this.initBank_accounts()));
    }
    addMoreForms_of_payment() {
        this.forms_of_payment.push(this.fb.group(this.initForms_of_payment()));
    }
    removeForms_of_payment(index) {
        this.forms_of_payment.removeAt(index);
    }
    addMoreFair_price_override() {
        this.fare_price_override.push(this.fb.group(this.initFare_price_override()));
    }
    removeFair_price_override(index) {
        this.fare_price_override.removeAt(index);
    }
    addMoreEndorsements() {
        this.endorsements.push(this.fb.group(this.initEndorsements()));
    }
    removeEndorsements(index) {
        this.endorsements.removeAt(index);
    }
    addMoreComission() {
        this.commissions.push(this.fb.group(this.initComissions()));
    }
    removeComission(index) {
        this.commissions.removeAt(index);
    }
    addMoreAccounting() {
        this.accounting.push(this.fb.group(this.initAccounting()));
    }
    addMoreRemarks() {
        this.remarks.push(this.fb.group(this.initRemarks()));
    }
    addMoreProfileNotes() {
        this.profile_notes.push(this.fb.group(this.initProfile_Notes()));
    }
    addMorePriority_lines1() {
        this.priority_lines1.push(this.fb.group(this.initPriority_lines1()));
    }
    addMorePriority_lines2() {
        this.priority_lines2.push(this.fb.group(this.initPriority_lines2()));
    }
    addMoreFollow_up() {
        this.follow_up.push(this.fb.group(this.initFollow_up()));
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        $(document).ready(function () {
            $('.menu .item').tab();
            $('.ui.dropdown').dropdown();
            $('.ui.checkbox').checkbox();
        });
    }
    setDropDownType(value, type) {
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
};
NewAgencyProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _shared_services_profile_management_profile_management_service__WEBPACK_IMPORTED_MODULE_1__["ProfileManagementService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tab', { static: false })
], NewAgencyProfileComponent.prototype, "tab", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tabContent', { static: false })
], NewAgencyProfileComponent.prototype, "tabContent", void 0);
NewAgencyProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-new-agency-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-agency-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-agency-profile.component.scss */ "./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile.component.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./../create-new-profile.component.scss */ "./src/app/layout/profile-management/create-new-profile/create-new-profile.component.scss")).default]
    })
], NewAgencyProfileComponent);



/***/ }),

/***/ "./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile.module.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile.module.ts ***!
  \**************************************************************************************************************/
/*! exports provided: NewAgencyProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAgencyProfileModule", function() { return NewAgencyProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _new_agency_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-agency-profile.component */ "./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _new_agency_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-agency-profile-routing.module */ "./src/app/layout/profile-management/create-new-profile/new-agency-profile/new-agency-profile-routing.module.ts");






let NewAgencyProfileModule = class NewAgencyProfileModule {
};
NewAgencyProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_new_agency_profile_component__WEBPACK_IMPORTED_MODULE_1__["NewAgencyProfileComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _new_agency_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewAgencyProfileRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]
    })
], NewAgencyProfileModule);



/***/ })

}]);
//# sourceMappingURL=new-agency-profile-new-agency-profile-module-es2016.js.map