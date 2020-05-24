(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-company-profile-new-company-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile.component.html":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile.component.html ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3><span class=\"booking-header\">New Company Profile</span></h3>\r\n<div class=\"ui fluid container\">\r\n  <div class=\"ui grid container stepper-grid\" #tab>\r\n    <div class=\"four wide column stepper-grid_step _active\" id=\"group\" (click)=\"setActiveTab('group')\">\r\n      <div class=\"stepper-grid_step__step-icon\">\r\n        <div>\r\n          <div class=\"image _group\"></div>\r\n        </div>\r\n        <label>Group Data</label>\r\n      </div>\r\n      <div class=\"stepper-grid_step__step-border\">\r\n        <hr />\r\n      </div>\r\n    </div>\r\n    <div class=\"four wide column stepper-grid_step\" id=\"travel\" (click)=\"setActiveTab('travel')\">\r\n      <div class=\"stepper-grid_step__step-icon\">\r\n        <div>\r\n          <div class=\"image _travel\"></div>\r\n        </div>\r\n        <label>Travel</label>\r\n      </div>\r\n      <div class=\"stepper-grid_step__step-border\">\r\n        <hr />\r\n      </div>\r\n    </div>\r\n    <div class=\"four wide column stepper-grid_step\" id=\"payment\" (click)=\"setActiveTab('payment')\">\r\n      <div class=\"stepper-grid_step__step-icon\">\r\n        <div>\r\n          <div class=\"image _payment\"></div>\r\n        </div>\r\n        <label>Payment</label>\r\n      </div>\r\n      <div class=\"stepper-grid_step__step-border\">\r\n        <hr />\r\n      </div>\r\n    </div>\r\n    <div class=\"four wide column stepper-grid_step\" id=\"remarks\" (click)=\"setActiveTab('remarks')\">\r\n      <div class=\"stepper-grid_step__step-icon\">\r\n        <div>\r\n          <div class=\"image _remarks\"></div>\r\n        </div>\r\n        <label>Remarks</label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <form class=\"ui form\" [formGroup]=\"newCompanyProfileForm\" #tabContent>\r\n    <div id=\"group-content\" class=\"stepper-grid-content animated fadeIn _active\">\r\n      <div class=\"outer-basic mtb\">\r\n        <div class=\"outer-basicForm\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Group Data</h4>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <label>General Info</label>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"two wide field\">\r\n                <input type=\"text\" name=\"groupName\" formControlName=\"group_name\" value=\"\" placeholder=\"Group Name\">\r\n              </div>\r\n              <div class=\"four wide field\">\r\n                <input type=\"text\" name=\"groupDescription\" formControlName=\"group_description\" value=\"\"\r\n                  placeholder=\"Group Description\">\r\n              </div>\r\n              <div class=\"four wide field\">\r\n                <input type=\"text\" name=\"groupIndex\" formControlName=\"group_index\" value=\"\" placeholder=\"Group Index\">\r\n              </div>\r\n              <div class=\"four wide field\">\r\n                <div class=\"ui fluid search selection dropdown\">\r\n                  <input type=\"hidden\" name=\"languages\" formControlName=\"languages\" value=\"\">\r\n                  <i class=\"dropdown icon\"></i>\r\n                  <div class=\"default text\">Languages</div>\r\n                  <div class=\"menu\">\r\n                    <div class=\"item\" (click)=\"setDropDownType('Arabic', 'languages')\">Arabic</div>\r\n                    <div class=\"item\" (click)=\"setDropDownType('English', 'languages')\">English</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui sixteen wide column grid\">\r\n              <button class=\"ui primary button btn-sticky\" (click)=\"updateNewCompanyProfile();\">\r\n                Update Profile +\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic mtb\">\r\n        <div class=\"outer-basicForm\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <label>Number Info</label>\r\n            </div>\r\n            <div formArrayName=\"number\">\r\n              <div *ngFor=\"let numberD of newCompanyProfileForm.get('number')['controls'];let nIndex = index\">\r\n                <div [formGroupName]=\"nIndex\" class=\"fields\">\r\n                  <div class=\"field\">\r\n                    <div class=\"three wide field newAgency_topAlign\">\r\n                      <div class=\"ui checkbox\">\r\n                        <input type=\"checkbox\" name=\"prefered\" formControlName=\"preferedHome\" value=\"\">\r\n                        <label>Prefered</label>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"two wide field\">\r\n                    <div class=\"ui fluid search selection dropdown\">\r\n                      <input type=\"hidden\" name=\"home\" formControlName=\"home\" value=\"\">\r\n                      <i class=\"dropdown icon\"></i>\r\n                      <div class=\"default text\">Home</div>\r\n                      <div class=\"menu\">\r\n                        <div class=\"item\" (click)=\"setDropDownType('Home1', 'home')\">Home 1</div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Home2', 'home')\">Home 2</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"four wide field\">\r\n                    <input type=\"text\" name=\"number\" formControlName=\"number\" value=\"\" placeholder=\"Number\">\r\n                  </div>\r\n                  <div class=\"five wide field\">\r\n                    <input type=\"text\" name=\"number_comment\" formControlName=\"number_comment\" value=\"\"\r\n                      placeholder=\"Comment\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"field\">\r\n              <div class=\"ui primary button btn-sticky\" (click)=\"addMoreNumbers()\">\r\n                Add Number +\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic mtb\">\r\n        <div class=\"outer-basicForm\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <label>Email Info</label>\r\n            </div>\r\n            <div formArrayName=\"email\">\r\n              <div *ngFor=\"let emailD of newCompanyProfileForm.get('email')['controls'];let eIndex = index\">\r\n                <div [formGroupName]=\"eIndex\" class=\"fields\">\r\n                  <div class=\"field\">\r\n                    <div class=\"three wide field newAgency_topAlign\">\r\n                      <div class=\"ui checkbox \">\r\n                        <input type=\"checkbox\" name=\"prefered\" formControlName=\"preferedOfficial\" value=\"\">\r\n                        <label>Prefered</label>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"two wide field\">\r\n                    <div class=\"ui fluid search selection dropdown\">\r\n                      <input type=\"hidden\" name=\"office\" formControlName=\"Official\" value=\"\">\r\n                      <i class=\"dropdown icon\"></i>\r\n                      <div class=\"default text\">Official</div>\r\n                      <div class=\"menu\">\r\n                        <div class=\"item\" (click)=\"setDropDownType('Official 1', 'Official')\">\r\n                          Official 1</div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Official 1', 'Official')\">\r\n                          Official 2</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"four wide field\">\r\n                    <input type=\"text\" name=\"emailAddress\" formControlName=\"emailAddress\" value=\"\"\r\n                      placeholder=\"Email Address\">\r\n                  </div>\r\n                  <div class=\"five wide field\">\r\n                    <input type=\"text\" name=\"comment\" formControlName=\"emailAddress_comment\" value=\"\"\r\n                      placeholder=\"Comment\">\r\n                  </div>\r\n                  <div class=\"ui primary button btn-sticky\" (click)=\"addMoreEmail()\">\r\n                    Add Email +\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic mtb\">\r\n        <div class=\"outer-basicForm\">\r\n          <div class=\"fields\">\r\n            <label>Address Info</label>\r\n          </div>\r\n          <div class=\"form-inner\">\r\n            <div formArrayName=\"address\">\r\n              <div *ngFor=\"let addressD of newCompanyProfileForm.get('address')['controls']; let aIndex = index\">\r\n                <div [formGroupName]=\"aIndex\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"field\">\r\n                      <div class=\"three wide field newAgency_topAlign\">\r\n                        <div class=\"ui checkbox \">\r\n                          <input type=\"checkbox\" name=\"prefered\" formControlName=\"preferedAddress\" value=\"\">\r\n                          <label>Prefered</label>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"two wide field\">\r\n                      <div class=\"ui fluid search selection dropdown\">\r\n                        <input type=\"hidden\" name=\"office\" formControlName=\"addressList\" value=\"\">\r\n                        <i class=\"dropdown icon\"></i>\r\n                        <div class=\"default text\">Office</div>\r\n                        <div class=\"menu\">\r\n                          <div class=\"item\" (click)=\"setDropDownType('Office 1', 'addressList')\">\r\n                            Office 1</div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('Office 2', 'addressList')\">\r\n                            Office 2</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"five wide field\">\r\n                      <input type=\"text\" name=\"address\" formControlName=\"address\" value=\"\" placeholder=\"Address\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"street\" formControlName=\"street\" value=\"\" placeholder=\"Street\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"city\" formControlName=\"city\" value=\"\" placeholder=\"City\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"fields\">\r\n                    <div class=\"field\">\r\n                      <div class=\"three wide field\">\r\n                        <div class=\"ui checkbox \">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                    </div>\r\n                    <div class=\"two wide field\">\r\n                      <input type=\"text\" name=\"state\" formControlName=\"state\" value=\"\" placeholder=\"Region/State\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"postalCode\" formControlName=\"postalCode\" value=\"\"\r\n                        placeholder=\"Postal Code\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <div class=\"ui fluid search selection dropdown\">\r\n                        <input type=\"hidden\" name=\"country\" formControlName=\"countryList\" value=\"\">\r\n                        <i class=\"dropdown icon\"></i>\r\n                        <div class=\"default text\">Country</div>\r\n                        <div class=\"menu\">\r\n                          <div class=\"item\" (click)=\"setDropDownType('USA', 'countryList')\">\r\n                            USA</div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('UAE', 'countryList')\">\r\n                            UAE</div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('Australia', 'countryList')\">\r\n                            Australia</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"company\" formControlName=\"company\" value=\"\" placeholder=\"Company\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"fields\">\r\n                    <div class=\"field\">\r\n                      <div class=\"three wide field\">\r\n                        <div class=\"ui checkbox \">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                    </div>\r\n                    <div class=\"five wide field\">\r\n                      <input type=\"text\" name=\"comment\" formControlName=\"address_comment\" value=\"\"\r\n                        placeholder=\"Comment\">\r\n                    </div>\r\n                    <div class=\"ui primary button btn-sticky\" (click)=\"addMoreAddress()\">\r\n                      Add Address +\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"travel-content\" class=\"stepper-grid-content animated fadeIn\">\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Travel Data</h4>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <label>Special Needs</label>\r\n            </div>\r\n            <div formArrayName=\"special_needs\">\r\n              <div\r\n                *ngFor=\"let special_needsD of newCompanyProfileForm.get('special_needs')['controls'];let spIndex = index\">\r\n                <div [formGroupName]=\"spIndex\" class=\"fields\">\r\n                  <div class=\"three wide field newAgency_topAlign\">\r\n                    <div class=\"ui checkbox \">\r\n                      <input type=\"checkbox\" name=\"explosionIndicator\" formControlName=\"explosionIndicator\" value=\"\">\r\n                      <label>Explosion Indicator</label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"two wide field\">\r\n                    <div class=\"ui fluid search selection dropdown\">\r\n                      <input type=\"hidden\" name=\"type\" formControlName=\"specialNeedsType\" value=\"\">\r\n                      <i class=\"dropdown icon\"></i>\r\n                      <div class=\"default text\">Type</div>\r\n                      <div class=\"menu\">\r\n                        <div class=\"item\" (click)=\"setDropDownType('Type 1', 'specialNeedsType')\">\r\n                          Type 1</div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Type 2', 'specialNeedsType')\">\r\n                          Type 2</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"three wide field\">\r\n                    <div class=\"ui fluid search selection dropdown\">\r\n                      <input type=\"hidden\" name=\"description\" formControlName=\"specialNeedsDesc\" value=\"\">\r\n                      <i class=\"dropdown icon\"></i>\r\n                      <div class=\"default text\">Description</div>\r\n                      <div class=\"menu\">\r\n                        <div class=\"item\" (click)=\"setDropDownType('Description 1', 'specialNeedsDesc')\">\r\n                          Description 1</div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Description 2', 'specialNeedsDesc')\">\r\n                          Description 2</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"three wide field\">\r\n                    <input type=\"text\" name=\"freeText\" placeholder=\"Free Text\" formControlName=\"specialNeedsFreeText\"\r\n                      value=\"\">\r\n                  </div>\r\n                  <div class=\"three wide field\">\r\n                    <input type=\"text\" name=\"airlineCode\" placeholder=\"Airline Code\"\r\n                      formControlName=\"specialNeedsAirlineCode\" value=\"\">\r\n                  </div>\r\n                  <div class=\"three wide field\">\r\n                    <div class=\"ui fluid search selection dropdown\">\r\n                      <input type=\"hidden\" name=\"flightType\" formControlName=\"specialNeedsFlightType\" value=\"\">\r\n                      <i class=\"dropdown icon\"></i>\r\n                      <div class=\"default text\">Flight Type</div>\r\n                      <div class=\"menu\">\r\n                        <div class=\"item\" (click)=\"setDropDownType('Description 2', 'specialNeedsDesc')\">Type 1\r\n                        </div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Description 2', 'specialNeedsDesc')\">Type 2\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"newAgency_topAlign\" *ngIf=\"spIndex > 0\" (click)=\"removeSpecialNeeds(spIndex)\">\r\n                    <i class=\"icon\">\r\n                      <img src=\"./../../../../../assets/img/remove-button.svg\" />\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui primary button btn-sticky\" (click)=\"addMoreSpecialNeeds()\">\r\n                Add More +\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <div class=\"five wide field\">\r\n                <h4>Miscellaneous Ticketing</h4>\r\n              </div>\r\n              <div class=\"four wide field\"></div>\r\n              <div class=\"five wide field\">\r\n                <label>Tour Code</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div formArrayName=\"miscellaneous_ticketing\">\r\n                <div\r\n                  *ngFor=\"let misc_ticketingD of newCompanyProfileForm.get('miscellaneous_ticketing')['controls']; let miscIndex = index\">\r\n                  <div [formGroupName]=\"miscIndex\" class=\"fields\">\r\n                    <div class=\"six wide field\">\r\n                      <input type=\"text\" name=\"text\" placeholder=\"Text\" formControlName=\"miscellaneous_text\" value=\"\">\r\n                    </div>\r\n                    <div class=\"six wide field\">\r\n                      <input type=\"text\" name=\"provider\" placeholder=\"Provider\" formControlName=\"miscellaneous_provider\"\r\n                        value=\"\">\r\n                    </div>\r\n                    <div class=\"newAgency_topAlign\" *ngIf=\"miscIndex > 0\" (click)=\"removeMisc_ticketing(miscIndex)\">\r\n                      <i class=\"icon\">\r\n                        <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ui primary button\" (click)=\"addMoremisc_ticketing()\">\r\n                  Add More +\r\n                </div>\r\n              </div>\r\n              <div class=\"three wide field\"></div>\r\n              <div formArrayName=\"tour_code\">\r\n                <div\r\n                  *ngFor=\"let tour_codeD of newCompanyProfileForm.get('tour_code')['controls']; let tourIndex = index\">\r\n                  <div [formGroupName]=\"tourIndex\" class=\"fields\">\r\n                    <div class=\"six wide field\">\r\n                      <input type=\"text\" name=\"text\" formControlName=\"tourCode_text\" placeholder=\"Text\">\r\n                    </div>\r\n                    <div class=\"six wide field\">\r\n                      <input type=\"text\" name=\"provider\" formControlName=\"tourCode_provider\" placeholder=\"Provider\">\r\n                    </div>\r\n                    <div class=\"newAgency_topAlign\" *ngIf=\"tourIndex > 0\" (click)=\"removeTourCode(tourIndex)\">\r\n                      <i class=\"icon\">\r\n                        <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ui primary button\" (click)=\"addMoreTour_code()\">\r\n                  Add More +\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"five wide field\">\r\n                <label>Ticketing Arrangement</label>\r\n              </div>\r\n              <div class=\"four wide field\"></div>\r\n              <div class=\"five wide field\">\r\n                <label>Validating Carrier</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"six wide field\">\r\n                <div formArrayName=\"ticketing_arrangement\">\r\n                  <div\r\n                    *ngFor=\"let ticketing_arrangementsD of newCompanyProfileForm.get('ticketing_arrangement')['controls']; let ticketIndex = index\">\r\n                    <div [formGroupName]=\"ticketIndex\" class=\"fields\">\r\n                      <div class=\"five wide field\">\r\n                        <input type=\"text\" name=\"text\" formControlName=\"ticketingArrangement_provider\"\r\n                          placeholder=\"Provider\">\r\n                      </div>\r\n                      <div class=\"newAgency_topAlign\" *ngIf=\"ticketIndex > 0\"\r\n                        (click)=\"removeTicketing_arrangement(ticketIndex)\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                        </i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui primary button\" (click)=\"addMoreTicketing_arrangements()\">\r\n                    Add More +\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"three wide field\">\r\n              </div>\r\n              <div class=\"six wide field\">\r\n                <div formArrayName=\"validating_carrier\">\r\n                  <div\r\n                    *ngFor=\"let validating_carrierD of newCompanyProfileForm.get('validating_carrier')['controls']; let validatingIndex = index\">\r\n                    <div [formGroupName]=\"validatingIndex\" class=\"fields\">\r\n                      <div class=\"five wide field\">\r\n                        <input type=\"text\" name=\"text\" placeholder=\"Provider\">\r\n                      </div>\r\n                      <div class=\"newAgency_topAlign\" *ngIf=\"validatingIndex > 0\"\r\n                        (click)=\"removeValidatingCarrier(validatingIndex)\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                        </i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui primary button\" (click)=\"addMoreValidatingCarrier()\">\r\n                    Add More +\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"five wide field\">\r\n                <h4>Original Issue</h4>\r\n              </div>\r\n              <div class=\"four wide field\"></div>\r\n              <div class=\"five wide field\">\r\n                <h4>Shadow Destination</h4>\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"seven wide field\">\r\n                <div formArrayName=\"original_issue\">\r\n                  <div\r\n                    *ngFor=\"let original_issueD of newCompanyProfileForm.get('original_issue')['controls']; let originalIndex = index\">\r\n                    <div [formGroupName]=\"originalIndex\" class=\"fields\">\r\n                      <div class=\"six wide field\">\r\n                        <input type=\"text\" name=\"text\" placeholder=\"\">\r\n                      </div>\r\n                      <div class=\"newAgency_topAlign\" *ngIf=\"originalIndex > 0\"\r\n                        (click)=\"removeOriginalIssues(originalIndex)\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                        </i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui primary button\" (click)=\"addMoreOriginal_issue()\">\r\n                    Add More +\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"three wide field\">\r\n              </div>\r\n              <div class=\"three wide field\"></div>\r\n              <div class=\"three wide field\">\r\n                <input type=\"text\" name=\"text\" placeholder=\"\">\r\n              </div>\r\n              <div class=\"three wide field\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Keywords</h4>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div formArrayName=\"keywords\">\r\n                <div *ngFor=\"let keywordsD of newCompanyProfileForm.get('keywords')['controls']; let keyIndex = index\">\r\n                  <div [formGroupName]=\"keyIndex\" class=\"fields\">\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"keyword\" placeholder=\"Keyword\" formControlName=\"keywords\" value=\"\">\r\n                    </div>\r\n                    <div class=\"three wide field \">\r\n                      <input type=\"text\" name=\"airline\" placeholder=\"Airline\" formControlName=\"airline\" value=\"\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"keywordtText\" placeholder=\"Keyword Text\" formControlName=\"keywordText\"\r\n                        value=\"\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"statusCode\" placeholder=\"Status Code\" formControlName=\"statusCode\"\r\n                        value=\"\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"numberParty\" placeholder=\"Number In Party\" formControlName=\"numberParty\"\r\n                        value=\"\">\r\n                    </div>\r\n                    <div class=\"newAgency_topAlign\" *ngIf=\"keyIndex > 0\" (click)=\"removeKeywords(keyIndex)\">\r\n                      <i class=\"icon\">\r\n                        <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"field\">\r\n              <div class=\"ui primary button btn-sticky\" (click)=\"addMoreKeywords()\">\r\n                Add More +\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Travel Management</h4>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"four wide field\">\r\n                <input type=\"text\" name=\"defaultHomeAirport\" placeholder=\"Default Home Airport\"\r\n                  formControlName=\"default_home_airport\" value=\"\">\r\n              </div>\r\n              <div class=\"four wide field \">\r\n                <input type=\"text\" name=\"defaultArrivalAirport\" placeholder=\"Default Arrival Airport\"\r\n                  formControlName=\"default_arrival_ariport\" value=\"\">\r\n              </div>\r\n              <div class=\"four wide field \">\r\n                <input type=\"text\" name=\"depContactName\" placeholder=\"Dep. Contact Name\"\r\n                  formControlName=\"dep_contact_name\" value=\"\">\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"four wide field\">\r\n                <input type=\"text\" name=\"agentContactName\" placeholder=\"Agent Contact Name\"\r\n                  formControlName=\"agent_contact_name\" value=\"\">\r\n              </div>\r\n              <div class=\"four wide field \">\r\n                <div class=\"ui fluid search selection dropdown\">\r\n                  <input type=\"hidden\" name=\"deliveryMethod\" formControlName=\"delivery_method\" value=\"\">\r\n                  <i class=\"dropdown icon\"></i>\r\n                  <div class=\"default text\">Delivery Method</div>\r\n                  <div class=\"menu\">\r\n                    <div class=\"item\" (click)=\"setDropDownType('Method 1', 'delivery_method')\">Method 1\r\n                    </div>\r\n                    <div class=\"item\" (click)=\"setDropDownType('Method 2', 'delivery_method')\">Method 2\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"payment-content\" class=\"stepper-grid-content animated fadeIn\">\r\n      <div class=\"outer-basic outer-basic_secondary\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h3><b>Payment Data</b></h3>\r\n            </div><br>\r\n            <div class=\"fields\">\r\n              <h4>Bank Accounts</h4>\r\n              <div class=\"ui primary button btn-sticky\" (click)=\"addBankAccount()\">\r\n                Add Bank Account +\r\n              </div>\r\n            </div>\r\n            <div formArrayName=\"bank_accounts\">\r\n              <div\r\n                *ngFor=\"let bank_accountsD of newCompanyProfileForm.get('bank_accounts')['controls']; let bank_accountsIndex = index\">\r\n                <div [formGroupName]=\"bank_accountsIndex\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"two wide field\">\r\n                      <input type=\"text\" name=\"code\" formControlName=\"bank_code\" value=\"\" placeholder=\"Code\">\r\n                    </div>\r\n                    <div class=\"five wide field\">\r\n                      <input type=\"text\" name=\"name\" formControlName=\"bank_name\" value=\"\" placeholder=\"Name\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"bankAccountNumber\" formControlName=\"bank_number\" value=\"\"\r\n                        placeholder=\"Number\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"city\" value=\"\" formControlName=\"bank_city\" value=\"\" placeholder=\"City\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"fields\">\r\n                    <div class=\"two wide field\">\r\n                    </div>\r\n                    <div class=\"five wide field\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"validFrom\" formControlName=\"bank_valid_from\" value=\"\"\r\n                        placeholder=\"Valid From(DDMMYYYY)\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"validUntil\" formControlName=\"bank_valid_to\" value=\"\"\r\n                        placeholder=\"Valid Until(DDMMYYYY)\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"fields\">\r\n                    <div class=\"two wide field\">\r\n                    </div>\r\n                    <div class=\"five wide field\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <div class=\"ui checkbox \">\r\n                        <input type=\"checkbox\" name=\"directDebitAuthorized\">\r\n                        <label class=\"checkbox_label\">Direct Debit Authorized</label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"field\">\r\n              <hr>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"five wide field\">\r\n                <div formArrayName=\"forms_of_payment\">\r\n                  <div\r\n                    *ngFor=\"let forms_of_paymentD of newCompanyProfileForm.get('forms_of_payment')['controls']; let payIndex = index\">\r\n                    <div [formGroupName]=\"payIndex\" class=\"fields\">\r\n                      <input type=\"text\" name=\"formOfPayment\" formControlName=\"forms_of_payment\" value=\"\"\r\n                        placeholder=\"Form Of Payment\">\r\n                      <div class=\"newAgency_topAlign\" (click)=\"addMoreForms_of_payment()\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/add_icon.png\" />\r\n                        </i>\r\n                      </div>\r\n                      <div class=\"newAgency_topAlign\" (click)=\"removeForm_of_payment(-1)\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                        </i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"four wide field\"></div>\r\n              <div class=\"five wide field \">\r\n                <div formArrayName=\"endorsements\">\r\n                  <div\r\n                    *ngFor=\"let endorsementsD of newCompanyProfileForm.get('endorsements')['controls']; let eIndex = index\">\r\n                    <div [formGroupName]=\"eIndex\" class=\"fields\">\r\n                      <input type=\"text\" name=\"endorsement\" formControlName=\"endorsements\" value=\"\"\r\n                        placeholder=\"Endorsement\">\r\n                      <div class=\"newAgency_topAlign\" (click)=\"addMoreEndorsements()\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/add_icon.png\" />\r\n                        </i>\r\n                      </div>\r\n                      <div class=\"newAgency_topAlign\" (click)=\"removeEndorsements(eIndex)\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                        </i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"field\">\r\n              <hr>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"five wide field\">\r\n                <div formArrayName=\"fare_price_override\">\r\n                  <div\r\n                    *ngFor=\"let fare_price_overrideD of newCompanyProfileForm.get('fare_price_override')['controls']; let overrideIndex = index\">\r\n                    <div [formGroupName]=\"overrideIndex\" class=\"fields\">\r\n                      <input type=\"text\" name=\"fairPriceOverride\" formControlName=\"fare_price_override\" value=\"\"\r\n                        placeholder=\"Fair Price Override\">\r\n                      <div class=\"newAgency_topAlign\" (click)=\"addMoreFair_price_override()\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/add_icon.png\" />\r\n                        </i>\r\n                      </div>\r\n                      <div class=\"newAgency_topAlign\" (click)=\"removeEndorsements(overrideIndex)\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                        </i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"four wide field\"></div>\r\n              <div class=\"five wide field \">\r\n                <input type=\"text\" name=\"discount\" formControlName=\"discounts\" value=\"\" placeholder=\"Discount\">\r\n              </div>\r\n            </div>\r\n            <div class=\"field\">\r\n              <hr>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <h4>Commision</h4>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"four wide field\">\r\n                <div formArrayName=\"commissions\">\r\n                  <div\r\n                    *ngFor=\"let commissionD of newCompanyProfileForm.get('commissions')['controls']; let comIndex = index\">\r\n                    <div [formGroupName]=\"comIndex\" class=\"fields\">\r\n                      <div class=\"three wide field\">\r\n                        <input type=\"text\" name=\"text\" formControlName=\"commisionText\" value=\"\" placeholder=\"Text\">\r\n                      </div>\r\n                      <div class=\"three wide field \">\r\n                        <input type=\"text\" name=\"providerCode\" formControlName=\"commisionProvideCode\" value=\"\"\r\n                          placeholder=\"Provider Code\">\r\n                      </div>\r\n                      <div class=\"newAgency_topAlign\" (click)=\"addMoreComission()\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/add_icon.png\" />\r\n                        </i>\r\n                      </div>\r\n                      <div class=\"newAgency_topAlign\" (click)=\"removeComission(comIndex)\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                        </i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"field\">\r\n              <hr>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <h4>Accounting</h4>\r\n            </div>\r\n            <div formArrayName=\"accounting\">\r\n              <div\r\n                *ngFor=\"let accountingD of newCompanyProfileForm.get('accounting')['controls']; let accIndex = index\">\r\n                <div [formGroupName]=\"accIndex\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"four wide field\">\r\n                      <input type=\"text\" name=\"accountNumber\" formControlName=\"accountNumber\" value=\"\"\r\n                        placeholder=\"Account Number\">\r\n                    </div>\r\n                    <div class=\"four wide field \">\r\n                      <input type=\"text\" name=\"costCentre\" formControlName=\"accountCostCentre\" value=\"\"\r\n                        placeholder=\"Cost Centre\">\r\n                    </div>\r\n                    <div class=\"four wide field \">\r\n                      <input type=\"text\" name=\"iataNumber\" formControlName=\"accountIataNumber\" value=\"\"\r\n                        placeholder=\"IATA Number\">\r\n                    </div>\r\n                    <div class=\"four wide field \">\r\n                      <input type=\"text\" name=\"clientReference\" formControlName=\"accountClientReference\" value=\"\"\r\n                        placeholder=\"Client Reference\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"fields\">\r\n                    <div class=\"four wide field\">\r\n                      <input type=\"text\" name=\"gstTaxName\" formControlName=\"accountGstTaxName\" value=\"\"\r\n                        placeholder=\"GST Tax Name\">\r\n                    </div>\r\n                    <div class=\"four wide field \">\r\n                      <input type=\"text\" name=\"gstTaxNumber\" formControlName=\"accountGetTaxNumber\" value=\"\"\r\n                        placeholder=\"GST Tax Number\">\r\n                    </div>\r\n                    <div class=\"four wide field \">\r\n                      <input type=\"text\" name=\"gstTaxAddress\" formControlName=\"accountGstTaxAddress\" value=\"\"\r\n                        placeholder=\"GST Tax Address\">\r\n                    </div>\r\n                    <div class=\"ui primary button btn-sticky\" (click)=\"addMoreAccounting()\">\r\n                      Add Accounting +\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"remarks-content\" class=\"stepper-grid-content animated fadeIn\">\r\n      <div class=\"outer-basic outer-basic_secondary\">\r\n        <div class=\"outer-basic_tertiary\">\r\n          <div class=\"outer-basicForm_tertiary\">\r\n            <div class=\"form-inner\">\r\n              <div class=\"fields\">\r\n                <h3><b>Remarks</b></h3>\r\n              </div><br>\r\n              <div class=\"fields\">\r\n                <h4>Remarks</h4>\r\n                <div class=\"ui primary button btn-sticky\" (click)=\"addMoreRemarks()\">\r\n                  Add Remark +\r\n                </div>\r\n              </div>\r\n              <div formArrayName=\"remarks\">\r\n                <div\r\n                  *ngFor=\"let remarksD of newCompanyProfileForm.get('remarks')['controls']; let remarksIndex = index\">\r\n                  <div [formGroupName]=\"remarksIndex\">\r\n                    <div class=\"fields\">\r\n                      <div class=\"three wide field\">\r\n                        <div class=\"ui fluid search selection dropdown\">\r\n                          <input type=\"hidden\" formControlName=\"remark_type\" value=\"\" name=\"remarkType\">\r\n                          <i class=\"dropdown icon\"></i>\r\n                          <div class=\"default text\">Remark Type</div>\r\n                          <div class=\"menu\">\r\n                            <div class=\"item\" data-value=\"remarkType1\">Type 1</div>\r\n                            <div class=\"item\" data-value=\"remarkType2\">Type 2</div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"three wide field \">\r\n                        <div class=\"ui fluid search selection dropdown\">\r\n                          <input type=\"hidden\" formControlName=\"remark_category\" value=\"\" name=\"category\">\r\n                          <i class=\"dropdown icon\"></i>\r\n                          <div class=\"default text\">Category</div>\r\n                          <div class=\"menu\">\r\n                            <div class=\"item\" data-value=\"category1\">Category 1</div>\r\n                            <div class=\"item\" data-value=\"category2\">Category 2</div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"six wide field \">\r\n                        <textarea type=\"text\" name=\"remark\" formControlName=\"remark\" value=\"\" placeholder=\"Remark\"\r\n                          rows=\"4\" cols=\"50\"></textarea>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"field\">\r\n                <hr>\r\n              </div>\r\n              <div class=\"fields\">\r\n                <h4>Profile Notes</h4>\r\n              </div>\r\n              <div formArrayName=\"profile_notes\">\r\n                <div\r\n                  *ngFor=\"let profile_notesD of newCompanyProfileForm.get('profile_notes')['controls']; let notesIndex = index\">\r\n                  <div [formGroupName]=\"notesIndex\">\r\n                    <div class=\"fields\">\r\n                      <div class=\"three wide field\">\r\n                        <div class=\"ui fluid search selection dropdown\">\r\n                          <input type=\"hidden\" formControlName=\"profile_notes_category\" value=\"\" name=\"category\">\r\n                          <i class=\"dropdown icon\"></i>\r\n                          <div class=\"default text\">Category</div>\r\n                          <div class=\"menu\">\r\n                            <div class=\"item\" data-value=\"category1\">Category 1</div>\r\n                            <div class=\"item\" data-value=\"category2\">Category 2</div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"five wide field \">\r\n                        <input type=\"text\" name=\"information\" formControlName=\"profile_notes_information\" value=\"\"\r\n                          placeholder=\"Information\">\r\n                      </div>\r\n                      <div class=\"ui primary button btn-sticky\" (click)=\"addMoreProfileNotes()\">\r\n                        Add Profile Note +\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"field\">\r\n                <hr>\r\n              </div>\r\n              <div class=\"fields\">\r\n                <h4>Priority Lines</h4>\r\n              </div>\r\n              <!-- <div class=\"fields\"> -->\r\n              <div formArrayName=\"priority_lines1\">\r\n                <div\r\n                  *ngFor=\"let priority_lines1D of newCompanyProfileForm.get('priority_lines1')['controls']; let priorityIndex1 = index\">\r\n                  <div [formGroupName]=\"priorityIndex1\">\r\n                    <div class=\"fields\">\r\n                      <div class=\"five wide field \">\r\n                        <input type=\"text\" name=\"information\" formControlName=\"priorityInformation1\" value=\"\"\r\n                          placeholder=\"\">\r\n                      </div>\r\n                      <div class=\"ui primary button btn-sticky\" (click)=\"addMorePriority_lines1()\">\r\n                        Add Priority Line +\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- </div> -->\r\n              <div class=\"field\">\r\n                <hr>\r\n              </div>\r\n              <div class=\"fields\">\r\n                <h4>Priority Lines</h4>\r\n              </div>\r\n              <!-- <div class=\"fields\"> -->\r\n              <div formArrayName=\"priority_lines2\">\r\n                <div\r\n                  *ngFor=\"let priority_lines2D of newCompanyProfileForm.get('priority_lines2')['controls']; let priorityIndex2 = index\">\r\n                  <div [formGroupName]=\"priorityIndex2\">\r\n                    <div class=\"fields\">\r\n                      <div class=\"five wide field \">\r\n                        <input type=\"text\" name=\"information\" formControlName=\"priorityInformation2\" value=\"\"\r\n                          placeholder=\"\">\r\n                      </div>\r\n                      <div class=\"ui primary button btn-sticky\" (click)=\"addMorePriority_lines2()\">\r\n                        Add Priority Line +\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- </div> -->\r\n              <div class=\"field\">\r\n                <hr>\r\n              </div>\r\n              <div class=\"fields\">\r\n                <h4>Follow Up</h4>\r\n              </div>\r\n              <!-- <div class=\"fields\"> -->\r\n              <div formArrayName=\"follow_up\">\r\n                <div\r\n                  *ngFor=\"let follow_upD of newCompanyProfileForm.get('follow_up')['controls']; let follow_upIndex = index\">\r\n                  <div [formGroupName]=\"follow_upIndex\">\r\n                    <div class=\"fields\">\r\n                      <div class=\"three wide field \">\r\n                        <input type=\"text\" name=\"date\" formControlName=\"followUpDate\" value=\"\"\r\n                          placeholder=\"Date (DDMMYYYY)\">\r\n                      </div>\r\n                      <div class=\"three wide field \">\r\n                        <input type=\"text\" name=\"action\" formControlName=\"followUpAction\" value=\"\" placeholder=\"Action\">\r\n                      </div>\r\n                      <div class=\"ui primary button btn-sticky\" (click)=\"addMoreFollow_up()\">\r\n                        Add Follow Up +\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- </div> -->\r\n              <br>\r\n              <div class=\"bookings_btn-panel trailing_button\">\r\n                <button class=\"ui secondary  button\">\r\n                  Save\r\n                </button>\r\n                <button type=\"button\" class=\"ui primary  button\" (click)=\"createNewCompanyProfile()\">\r\n                  Submit\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile-routing.module.ts":
/*!************************************************************************************************************************!*\
  !*** ./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile-routing.module.ts ***!
  \************************************************************************************************************************/
/*! exports provided: NewCompanyProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCompanyProfileRoutingModule", function() { return NewCompanyProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _new_company_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-company-profile.component */ "./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: '', component: _new_company_profile_component__WEBPACK_IMPORTED_MODULE_1__["NewCompanyProfileComponent"] }
];
let NewCompanyProfileRoutingModule = class NewCompanyProfileRoutingModule {
};
NewCompanyProfileRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], NewCompanyProfileRoutingModule);



/***/ }),

/***/ "./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile.component.scss ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".stepper-grid {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n.stepper-grid .stepper-grid_step {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  opacity: 0.6;\n  cursor: pointer;\n}\n.stepper-grid .stepper-grid_step._active {\n  opacity: 1;\n  -webkit-transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div {\n  background-color: #062862;\n  border: 0;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div div.image {\n  background-color: white;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div:hover {\n  border: 2px solid #A6B1C3;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon label {\n  border: 0;\n  background-color: #062862;\n  color: white;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-border hr {\n  border-bottom: 2px solid #062862;\n}\n.stepper-grid .stepper-grid_step._activated {\n  opacity: 1;\n  -webkit-transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div {\n  background-color: #437ADA;\n  border: 0;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div div.image {\n  background-color: white;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div:hover {\n  border: 2px solid #A6B1C3;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon label {\n  border: 0;\n  background-color: #437ADA;\n  color: white;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-border hr {\n  border-bottom: 2px solid #437ADA;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div {\n  background-color: transparent;\n  border: 2px solid #A6B1C3;\n  color: white;\n  width: 45px;\n  height: 45px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 50%;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon label {\n  width: 100px;\n  height: auto;\n  line-height: 24px;\n  text-align: center;\n  background-color: transparent;\n  border: 2px solid #A6B1C3;\n  margin-top: 15px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 600 !important;\n  font-size: 13px;\n  color: #A6B1C3;\n  border-radius: 8px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon label._last {\n  width: 150px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-border {\n  width: 100%;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-border hr {\n  margin-top: -24px;\n  width: 100%;\n  height: 2px;\n  background: none;\n  border-bottom: 2px solid #A6B1C3;\n}\n.stepper-grid-content {\n  display: none;\n}\n.stepper-grid-content._active {\n  display: block;\n}\n.checkbox_label {\n  height: 13px !important;\n  color: #828282 !important;\n  font-family: Ubuntu !important;\n  font-size: 12px !important;\n  font-weight: 300 !important;\n}\n.booking-header {\n  color: #4F4F4F;\n  font-family: Helvetica;\n  font-size: 20px;\n  font-weight: 300;\n  line-height: 22px;\n  margin-left: 22px;\n}\n.outer-basic {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n  padding: 15px;\n}\n.bookings_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n.bookings_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n.bookings_pickers .input .icon {\n  opacity: 1;\n  z-index: 100;\n}\n.bookings_pickers .input .icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n.bookings_pickers .input .icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n.bookings_pickers .input .search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.bookings_pickers .input .search.dropdown .search {\n  margin-left: 42px !important;\n}\n.bookings_pickers .input .search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n.bookings_btn-panel .secondary {\n  width: 135.64px;\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n.bookings_btn-panel .primary {\n  width: 135.64px;\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n.trailing_button {\n  position: absolute;\n  right: 0;\n}\n.newAgency_topAlign {\n  height: 35px !important;\n}\ntd {\n  color: #4F4F4F;\n  font-family: Helvetica;\n  font-size: 10px;\n  line-height: 11px;\n  text-align: center;\n}\nth {\n  color: #4F4F4F;\n  font-family: Helvetica;\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 11px;\n  text-align: center;\n}\n.confirm {\n  width: 63px;\n}\n.recConfirm {\n  height: 18px;\n  width: 62px;\n  background-color: #72D44F;\n  color: white;\n  padding-top: 0.5vh;\n}\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n.field input::-webkit-input-placeholder {\n  font-size: 12px;\n}\n.field input::-moz-placeholder {\n  font-size: 12px;\n}\n.field input::-ms-input-placeholder {\n  font-size: 12px;\n}\n.field input::placeholder {\n  font-size: 12px;\n}\n.outer-basic_secondary {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n}\n.outer-basicForm_secondary {\n  width: 100%;\n  height: auto;\n  padding: 15px;\n}\n.right_links {\n  position: absolute;\n  right: 0;\n  padding-top: 1vh;\n  padding-right: 8vh;\n}\n.outer-basic_tertiary {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\n.outer-basicForm_tertiary {\n  width: 100%;\n  height: auto;\n  padding: 50px;\n}\nhr {\n  box-sizing: border-box;\n  height: 1px;\n  border: 0.5px solid #E0E0E0;\n}\n.dropdown .text {\n  font-size: 12px;\n}\n.bookings_btn-panel.trailing_button {\n  margin-right: 45px;\n}\n.right_links {\n  padding-top: 1vh;\n}\n.ui.fluid.container {\n  padding: 28px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image {\n  width: 22px;\n  margin: 0 auto;\n  background-color: #A6B1C3;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._group {\n  -webkit-mask: url('group.svg') no-repeat center;\n  mask: url('group.svg') no-repeat center;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._travel {\n  -webkit-mask: url('travel.svg') no-repeat center;\n  mask: url('travel.svg') no-repeat center;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._payment {\n  -webkit-mask: url('payment.svg') no-repeat center;\n  mask: url('payment.svg') no-repeat center;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._remarks {\n  -webkit-mask: url('remarks.svg') no-repeat center;\n  mask: url('remarks.svg') no-repeat center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LWNvbXBhbnktcHJvZmlsZS9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcY29tb24tc3R5bGVzXFxzdGVwcGVyLnNjc3MiLCJzcmMvYXBwL2xheW91dC9wcm9maWxlLW1hbmFnZW1lbnQvY3JlYXRlLW5ldy1wcm9maWxlL25ldy1jb21wYW55LXByb2ZpbGUvbmV3LWNvbXBhbnktcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LWNvbXBhbnktcHJvZmlsZS9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcY29tb24tc3R5bGVzXFxkZXNpZ24tcGFsZXR0ZS5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcHJvZmlsZS1tYW5hZ2VtZW50L2NyZWF0ZS1uZXctcHJvZmlsZS9uZXctY29tcGFueS1wcm9maWxlL0U6XFxCZWxhbFxccHJvamVjdHNcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxccHJvZmlsZS1tYW5hZ2VtZW50XFxjcmVhdGUtbmV3LXByb2ZpbGVcXG5ldy1jb21wYW55LXByb2ZpbGVcXG5ldy1jb21wYW55LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9wcm9maWxlLW1hbmFnZW1lbnQvY3JlYXRlLW5ldy1wcm9maWxlL25ldy1jb21wYW55LXByb2ZpbGUvRTpcXEJlbGFsXFxwcm9qZWN0c1xcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGNvbW9uLXN0eWxlc1xcbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ0k7RUFDRSxVQUFBO0VBQ0Esa0VBQUE7RUFBQSwwREFBQTtBQ0NOO0FERVE7RUFDRSx5QkVkUTtFRmVSLFNBQUE7QUNBVjtBREVVO0VBQ0UsdUJBQUE7QUNBWjtBREdVO0VBQ0UseUJBQUE7QUNEWjtBREtRO0VBQ0UsU0FBQTtFQUNBLHlCRTVCUTtFRjZCUixZQUFBO0FDSFY7QURRUTtFQUNFLGdDQUFBO0FDTlY7QURXSTtFQUNFLFVBQUE7RUFDQSxrRUFBQTtFQUFBLDBEQUFBO0FDVE47QURZUTtFQUNFLHlCRWhETTtFRmlETixTQUFBO0FDVlY7QURZVTtFQUNFLHVCQUFBO0FDVlo7QURhVTtFQUNFLHlCQUFBO0FDWFo7QURlUTtFQUNFLFNBQUE7RUFDQSx5QkU5RE07RUYrRE4sWUFBQTtBQ2JWO0FEa0JRO0VBQ0UsZ0NBQUE7QUNoQlY7QURxQkk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDbkJOO0FEcUJNO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtBQ25CUjtBRHNCTTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlDRXpFTTtFRjBFTiwyQkFBQTtFQUNBLGVBQUE7RUFDQSxjRXBHVTtFRnFHVixrQkVoRmdCO0FENER4QjtBRHNCUTtFQUNFLFlBQUE7QUNwQlY7QUR5Qkk7RUFDRSxXQUFBO0FDdkJOO0FEeUJNO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUN2QlI7QUQ2QkE7RUFDRSxhQUFBO0FDMUJGO0FENEJFO0VBQ0UsY0FBQTtBQzFCSjtBRXBHQTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUZ1R0Y7QUVwR0E7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FGdUdGO0FFcEdBO0VBQ0Usc0JBQUE7RUFDQSw0Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUZ1R0Y7QUVwR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUZ1R0Y7QUVsR0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FGcUdKO0FFbEdFO0VBQ0Usd0JBQUE7RUFDQSwwQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUZvR0o7QUVqR0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBRm1HSjtBRWpHSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FGbUdOO0FFakdNO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FGbUdSO0FFOUZFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FGZ0dKO0FFOUZJO0VBQ0UsNEJBQUE7QUZnR047QUU3Rkk7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtBRitGTjtBRXpGRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUZBQUE7QUY0Rko7QUV6RkU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlGQUFBO0FGMkZKO0FFdEZBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FGeUZGO0FFdEZBO0VBQ0UsdUJBQUE7QUZ5RkY7QUV0RkE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRnlGRjtBRXRGQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUZ5RkY7QUV0RkE7RUFDRSxXQUFBO0FGeUZGO0FFdEZBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRnlGRjtBRXRGQTtFQUNFLDRDQUFBO0FGeUZGO0FFckZBO0VBQ0UsZUFBQTtBRndGRjtBRXpGQTtFQUNFLGVBQUE7QUZ3RkY7QUV6RkE7RUFDRSxlQUFBO0FGd0ZGO0FFekZBO0VBQ0UsZUFBQTtBRndGRjtBRXBGQTtFQUNFLHNCQUFBO0VBQ0EsNENBQUE7QUZ1RkY7QUVwRkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUZ1RkY7QUVwRkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FGdUZGO0FFcEZBO0VBQ0Usc0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUZ1RkY7QUVwRkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUZ1RkY7QUVwRkE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBRnVGRjtBRXBGQTtFQUNFLGVBQUE7QUZ1RkY7QUVwRkE7RUFDRSxrQkFBQTtBRnVGRjtBRXBGQTtFQUNFLGdCQUFBO0FGdUZGO0FFcEZBO0VBQ0UsYUFBQTtBRnVGRjtBRW5GRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJEeE1jO0FEOFJsQjtBRXBGSTtFQ25LRiwrQ0FBQTtFQUNBLHVDQUFBO0FIMFBGO0FFcEZJO0VDdktGLGdEQUFBO0VBQ0Esd0NBQUE7QUg4UEY7QUVwRkk7RUMzS0YsaURBQUE7RUFDQSx5Q0FBQTtBSGtRRjtBRXBGSTtFQy9LRixpREFBQTtFQUNBLHlDQUFBO0FIc1FGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LWNvbXBhbnktcHJvZmlsZS9uZXctY29tcGFueS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0ZXBwZXItZ3JpZCB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICAuc3RlcHBlci1ncmlkX3N0ZXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAuNjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmLl9hY3RpdmUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG5cclxuICAgICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24ge1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGVlcC1ibHVlLWNvbG9yO1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG5cclxuICAgICAgICAgIGRpdi5pbWFnZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRlZXAtYmx1ZS1jb2xvcjtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIge1xyXG4gICAgICAgIGhyIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkZGVlcC1ibHVlLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuX2FjdGl2YXRlZCB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XHJcblxyXG4gICAgICAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiB7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG5cclxuICAgICAgICAgIGRpdi5pbWFnZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtYm9yZGVyIHtcclxuICAgICAgICBociB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgZGl2IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtcHJpbWFyeTtcclxuXHJcbiAgICAgICAgJi5fbGFzdCB7XHJcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgaHIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0yNHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zdGVwcGVyLWdyaWQtY29udGVudCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgJi5fYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG4iLCIuc3RlcHBlci1ncmlkIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3BhY2l0eTogMC42O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmUgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2Mjg2MjtcbiAgYm9yZGVyOiAwO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYgZGl2LmltYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdjpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBNkIxQzM7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGxhYmVsIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYyODYyO1xuICBjb2xvcjogd2hpdGU7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIgaHIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA2Mjg2Mjtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2YXRlZCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM3QURBO1xuICBib3JkZXI6IDA7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiBkaXYuaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2OmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0E2QjFDMztcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gbGFiZWwge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzdBREE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciBociB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNDM3QURBO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBNkIxQzM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gbGFiZWwge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBNkIxQzM7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNBNkIxQzM7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGxhYmVsLl9sYXN0IHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciBociB7XG4gIG1hcmdpbi10b3A6IC0yNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQTZCMUMzO1xufVxuXG4uc3RlcHBlci1ncmlkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnN0ZXBwZXItZ3JpZC1jb250ZW50Ll9hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNoZWNrYm94X2xhYmVsIHtcbiAgaGVpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjODI4MjgyICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBVYnVudHUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcbn1cblxuLmJvb2tpbmctaGVhZGVyIHtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1hcmdpbi1sZWZ0OiAyMnB4O1xufVxuXG4ub3V0ZXItYmFzaWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG59XG5cbi5vdXRlci1iYXNpY0Zvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQuYm9va2luZ3NfZGF0ZXBpY2tlciB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIG1heC13aWR0aDogMTM4cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnVpLmJhc2ljLmZsb2F0aW5nLmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYmEoMTUyLCAxNTIsIDE1MiwgMC42KSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5pY29uIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTAwO1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbCB7XG4gIHdpZHRoOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5zZWFyY2guZHJvcGRvd24ge1xuICB3aWR0aDogMjE4cHg7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnNlYXJjaC5kcm9wZG93biAuc2VhcmNoIHtcbiAgbWFyZ2luLWxlZnQ6IDQycHggIWltcG9ydGFudDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuc2VhcmNoLmRyb3Bkb3duIC5kZWZhdWx0LnRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHggMCAwIDM4cHggIWltcG9ydGFudDtcbn1cblxuLmJvb2tpbmdzX2J0bi1wYW5lbCAuc2Vjb25kYXJ5IHtcbiAgd2lkdGg6IDEzNS42NHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RjRGNEY7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5ib29raW5nc19idG4tcGFuZWwgLnByaW1hcnkge1xuICB3aWR0aDogMTM1LjY0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4udHJhaWxpbmdfYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn1cblxuLm5ld0FnZW5jeV90b3BBbGlnbiB7XG4gIGhlaWdodDogMzVweCAhaW1wb3J0YW50O1xufVxuXG50ZCB7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRoIHtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDExcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbmZpcm0ge1xuICB3aWR0aDogNjNweDtcbn1cblxuLnJlY0NvbmZpcm0ge1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiA2MnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzJENDRGO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAwLjV2aDtcbn1cblxuLnRhYi5zZWdtZW50IHtcbiAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5vdXRlci1iYXNpY19zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLm91dGVyLWJhc2ljRm9ybV9zZWNvbmRhcnkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ucmlnaHRfbGlua3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogMXZoO1xuICBwYWRkaW5nLXJpZ2h0OiA4dmg7XG59XG5cbi5vdXRlci1iYXNpY190ZXJ0aWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbn1cblxuLm91dGVyLWJhc2ljRm9ybV90ZXJ0aWFyeSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDUwcHg7XG59XG5cbmhyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlcjogMC41cHggc29saWQgI0UwRTBFMDtcbn1cblxuLmRyb3Bkb3duIC50ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYm9va2luZ3NfYnRuLXBhbmVsLnRyYWlsaW5nX2J1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogNDVweDtcbn1cblxuLnJpZ2h0X2xpbmtzIHtcbiAgcGFkZGluZy10b3A6IDF2aDtcbn1cblxuLnVpLmZsdWlkLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDI4cHg7XG59XG5cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiBkaXYuaW1hZ2Uge1xuICB3aWR0aDogMjJweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNBNkIxQzM7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYgZGl2LmltYWdlLl9ncm91cCB7XG4gIC13ZWJraXQtbWFzazogdXJsKFwiLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL2dyb3VwLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICBtYXNrOiB1cmwoXCIuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvZ3JvdXAuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYgZGl2LmltYWdlLl90cmF2ZWwge1xuICAtd2Via2l0LW1hc2s6IHVybChcIi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy90cmF2ZWwuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG4gIG1hc2s6IHVybChcIi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy90cmF2ZWwuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYgZGl2LmltYWdlLl9wYXltZW50IHtcbiAgLXdlYmtpdC1tYXNrOiB1cmwoXCIuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcGF5bWVudC5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgbWFzazogdXJsKFwiLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3BheW1lbnQuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYgZGl2LmltYWdlLl9yZW1hcmtzIHtcbiAgLXdlYmtpdC1tYXNrOiB1cmwoXCIuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcmVtYXJrcy5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgbWFzazogdXJsKFwiLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3JlbWFya3Muc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG59IiwiJHByaW1hcnktY29sb3I6ICM0MzdBREE7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNBNkIxQzM7XHJcbiRkZWVwLWJsdWUtY29sb3I6ICMwNjI4NjI7XHJcbiRsaWdodC1zbW9rZS1jb2xvcjogI2U1ZTVlNTtcclxuJHZvaWxhLWdyZWVuOiAjODRCQzZBO1xyXG4kcHVyZS13aGl0ZTogd2hpdGU7XHJcbiRmYXVsdC1jb2xvcjogI0RFNzk3OTtcclxuJHdhcm5pbmctY29sb3I6ICNFQ0MwNEU7XHJcbiRzdWNjZXNzLWNvbG9yOiAjNzNCMjVEO1xyXG5cclxuJGJvZHktYmFzZTogI0Y2RjlGQztcclxuJGNvcnBvcmF0ZS1ibHVlLWJhc2U6ICM0NTY3QUM7XHJcblxyXG4kY29udGFpbmVyLWJhc2U6IHdoaXRlO1xyXG4kY29udGFpbmVyLWJhc2Utc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDYsIDQwLCA5OCwgMC4xKTtcclxuJGNvbnRhaW5lci1kcm9wZG93bnMtc2hhZG93OiAwcHggOHB4IDE0cHggcmdiYSgwLCA1OCwgMTY0LCAuMik7XHJcblxyXG4kcHJpbWFyeS1zaGFkb3c6IDBweCA0LjgzcHggMTZweCByZ2JhKDY3LCAxMjIsIDIxOCwgLjUpO1xyXG4kbGlnaHQtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDU4LCAxNjQsIC4yNSk7XHJcbiRmYWRlZC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMTY3LCAxNzMsIDE4MiwgLjIpO1xyXG4kbGlnaHQtZXh0ZW5kZWQtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDU4LCAxNjQsIC4yNSk7XHJcblxyXG4kYm9yZGVyLXJhZGl1cy1wcmltYXJ5OiA4cHg7XHJcbiRib3JkZXItcmFkaXVzLXNlY29uZGFyeTogNnB4O1xyXG5cclxuJGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xyXG5cclxuJHRvYXN0LWluZm8tY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4kdG9hc3QtaW5mby1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxMTEsIDAsIDAsIC4yKTtcclxuXHJcbiR0b2FzdC1lcnJvci1jb2xvcjogJGZhdWx0LWNvbG9yO1xyXG4kdG9hc3QtZXJyb3Itc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTExLCAwLCAwLCAuMik7XHJcblxyXG4kdG9hc3Qtd2FybmluZy1jb2xvcjogJHdhcm5pbmctY29sb3I7XHJcbiR0b2FzdC13YXJuaW5nLXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDE3NywgMTI3LCAwLCAuMik7XHJcblxyXG4kdG9hc3Qtc3VjY2Vzcy1jb2xvcjogJHN1Y2Nlc3MtY29sb3I7XHJcbiR0b2FzdC1zdWNjZXNzLXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDM0LCAxMzAsIDAsIC4yKTtcclxuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vLi4vY29tb24tc3R5bGVzL2NvbW1vbi5zY3NzXCI7XHJcblxyXG4uY2hlY2tib3hfbGFiZWwge1xyXG4gIGhlaWdodDogMTNweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjODI4MjgyICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IFVidW50dSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvb2tpbmctaGVhZGVyIHtcclxuICBjb2xvcjogIzRGNEY0RjtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMnB4O1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgYm94LXNoYWRvdzogM3B4IDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljRm9ybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCB7XHJcblxyXG4gICYuYm9va2luZ3NfZGF0ZXBpY2tlciB7XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMzhweFxyXG4gIH1cclxuXHJcbiAgLnVpLmJhc2ljLmZsb2F0aW5nLmJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogcmdiYSgxNTIsIDE1MiwgMTUyLCAwLjYpICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTFweDtcclxuICB9XHJcblxyXG4gIC5pY29uIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcblxyXG4gICAgLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuXHJcbiAgICAgICYuY2FsIHtcclxuICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLmRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAyMThweDtcclxuICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAuc2VhcmNoIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDQycHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVmYXVsdC50ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZzogOHB4IDAgMCAzOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYm9va2luZ3NfYnRuLXBhbmVsIHtcclxuICAuc2Vjb25kYXJ5IHtcclxuICAgIHdpZHRoOiAxMzUuNjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0RjRGNEY7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgfVxyXG5cclxuICAucHJpbWFyeSB7XHJcbiAgICB3aWR0aDogMTM1LjY0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi50cmFpbGluZ19idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLm5ld0FnZW5jeV90b3BBbGlnbiB7XHJcbiAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRkIHtcclxuICBjb2xvcjogIzRGNEY0RjtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBsaW5lLWhlaWdodDogMTFweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRoIHtcclxuICBjb2xvcjogIzRGNEY0RjtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbmZpcm0ge1xyXG4gIHdpZHRoOiA2M3B4O1xyXG59XHJcblxyXG4ucmVjQ29uZmlybSB7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIHdpZHRoOiA2MnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MkQ0NEY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctdG9wOiAuNXZoO1xyXG59XHJcblxyXG4udGFiLnNlZ21lbnQge1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG5cclxuLmZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5cclxuLm91dGVyLWJhc2ljX3NlY29uZGFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljRm9ybV9zZWNvbmRhcnkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4ucmlnaHRfbGlua3Mge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBwYWRkaW5nLXRvcDogMXZoO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDh2aDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljX3RlcnRpYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpY0Zvcm1fdGVydGlhcnkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiA1MHB4O1xyXG59XHJcblxyXG5ociB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBoZWlnaHQ6IDFweDtcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkICNFMEUwRTA7XHJcbn1cclxuXHJcbi5kcm9wZG93biAudGV4dCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYm9va2luZ3NfYnRuLXBhbmVsLnRyYWlsaW5nX2J1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0NXB4O1xyXG59XHJcblxyXG4ucmlnaHRfbGlua3Mge1xyXG4gIHBhZGRpbmctdG9wOiAxdmg7XHJcbn1cclxuXHJcbi51aS5mbHVpZC5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDI4cHg7XHJcbn1cclxuXHJcbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiB7XHJcbiAgZGl2LmltYWdlIHtcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG5cclxuICAgICYuX2dyb3VwIHtcclxuICAgICAgQGluY2x1ZGUgbWFzay1zdmctZGl2KCcuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvZ3JvdXAuc3ZnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5fdHJhdmVsIHtcclxuICAgICAgQGluY2x1ZGUgbWFzay1zdmctZGl2KCcuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvdHJhdmVsLnN2ZycpO1xyXG4gICAgfVxyXG5cclxuICAgICYuX3BheW1lbnQge1xyXG4gICAgICBAaW5jbHVkZSBtYXNrLXN2Zy1kaXYoJy4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9wYXltZW50LnN2ZycpO1xyXG4gICAgfVxyXG5cclxuICAgICYuX3JlbWFya3Mge1xyXG4gICAgICBAaW5jbHVkZSBtYXNrLXN2Zy1kaXYoJy4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9yZW1hcmtzLnN2ZycpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gcGxhY2Vob2xkZXIge1xyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICAmOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gY29sb3Itb3BhY2l0eSgkY29sb3IsICRvcGFjaXR5OiAwLjMpIHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3I7XHJcbiAgLyogVGhlIEZhbGxiYWNrICovXHJcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3IsICRvcGFjaXR5KTtcclxufVxyXG5cclxuQG1peGluIGhpZGVOdW1iZXJGaWVsZEFycm93cyB7XHJcblxyXG4gIC8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xyXG4gIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG4gIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLyogRmlyZWZveCAqL1xyXG4gIGlucHV0W3R5cGU9bnVtYmVyXSB7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1hc2stc3ZnLWRpdigkaW1nKSB7XHJcbiAgLXdlYmtpdC1tYXNrOiB1cmwoJGltZykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICBtYXNrOiB1cmwoJGltZykgbm8tcmVwZWF0IGNlbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: NewCompanyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCompanyProfileComponent", function() { return NewCompanyProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_profile_management_profile_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../shared/services/profile-management/profile-management.service */ "./src/app/shared/services/profile-management/profile-management.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let NewCompanyProfileComponent = class NewCompanyProfileComponent {
    constructor(route, ProfileManagementService, fb) {
        this.route = route;
        this.ProfileManagementService = ProfileManagementService;
        this.fb = fb;
        this.newCompanyProfileObj = {};
        this.newCompanyProfileForm = this.fb.group({
            company_profile_id: [''],
            organisation_id: [''],
            group_name: [''],
            group_description: [''],
            group_index: [''],
            languages: [''],
            home: [''],
            Official: [''],
            addressList: [''],
            countryList: [''],
            specialNeedsType: [''],
            specialNeedsDesc: [''],
            number: this.fb.array([this.fb.group(this.initNumber())]),
            email: this.fb.array([this.fb.group(this.initAddEmail())]),
            address: this.fb.array([this.fb.group(this.initAddress())]),
            special_needs: this.fb.array([this.fb.group(this.initSpecial_needs())]),
            miscellaneous_ticketing: this.fb.array([this.fb.group(this.initMisc_ticketing())]),
            tour_code: this.fb.array([this.fb.group(this.initTour_code())]),
            ticketing_arrangement: this.fb.array([this.fb.group(this.initTicketing_arrangements())]),
            validating_carrier: this.fb.array([this.fb.group(this.initValidatingCarrier())]),
            original_issue: this.fb.array([this.fb.group(this.initOriginalIssue())]),
            shadow_destination: [''],
            keywords: this.fb.array([this.fb.group(this.initKeywords())]),
            default_home_airport: [''],
            default_arrival_ariport: [''],
            dep_contact_name: [''],
            agent_contact_name: [''],
            delivery_method: [''],
            policy_override_authorization: [''],
            prepaid_ticket_authorization: [''],
            bank_accounts: this.fb.array([this.fb.group(this.initBank_accounts())]),
            direct_debit_authorized: [''],
            forms_of_payment: this.fb.array([this.fb.group(this.initForms_of_payment())]),
            fare_price_override: this.fb.array([this.fb.group(this.initFare_price_override())]),
            endorsements: this.fb.array([this.fb.group(this.initEndorsements())]),
            discounts: [''],
            commissions: this.fb.array([this.fb.group(this.initComission())]),
            accounting: this.fb.array([this.fb.group(this.initAccounting())]),
            remarks: this.fb.array([this.fb.group(this.initRemarks())]),
            profile_notes: this.fb.array([this.fb.group(this.initProfile_Notes())]),
            priority_lines1: this.fb.array([this.fb.group(this.initPriority_lines1())]),
            priority_lines2: this.fb.array([this.fb.group(this.initPriority_lines2())]),
            follow_up: this.fb.array([this.fb.group(this.initFollow_up())]),
        });
        this.createNewCompanyProfile = () => {
            this.newCompanyProfileObj.company_profile_id = this.newCompanyProfileId;
            this.newCompanyProfileObj.organisation_id = "";
            this.newCompanyProfileObj.group_name = this.newCompanyProfileForm.get('group_name').value;
            this.newCompanyProfileObj.group_description = this.newCompanyProfileForm.get('group_description').value;
            this.newCompanyProfileObj.group_index = this.newCompanyProfileForm.get('group_index').value;
            this.newCompanyProfileObj.languages = this.newCompanyProfileForm.get('languages').value;
            this.newCompanyProfileObj.home = this.newCompanyProfileForm.get('home').value;
            this.newCompanyProfileObj.number = JSON.stringify(this.newCompanyProfileForm.get('number').value);
            this.newCompanyProfileObj.email = JSON.stringify(this.newCompanyProfileForm.get('email').value);
            this.newCompanyProfileObj.address = JSON.stringify(this.newCompanyProfileForm.get('address').value);
            this.newCompanyProfileObj.special_needs = JSON.stringify(this.newCompanyProfileForm.get('special_needs').value);
            this.newCompanyProfileObj.miscellaneous_ticketing = JSON.stringify(this.newCompanyProfileForm.get('miscellaneous_ticketing').value);
            this.newCompanyProfileObj.tour_code = JSON.stringify(this.newCompanyProfileForm.get('tour_code').value);
            this.newCompanyProfileObj.ticketing_arrangement = JSON.stringify(this.newCompanyProfileForm.get('ticketing_arrangement').value);
            this.newCompanyProfileObj.validating_carrier = JSON.stringify(this.newCompanyProfileForm.get('validating_carrier').value);
            this.newCompanyProfileObj.original_issue = JSON.stringify(this.newCompanyProfileForm.get('original_issue').value); //here
            this.newCompanyProfileObj.shadow_destination = this.newCompanyProfileForm.get('shadow_destination').value;
            this.newCompanyProfileObj.keywords = JSON.stringify(this.newCompanyProfileForm.get('keywords').value);
            this.newCompanyProfileObj.default_home_airport = this.newCompanyProfileForm.get('default_home_airport').value;
            this.newCompanyProfileObj.default_arrival_ariport = this.newCompanyProfileForm.get('default_arrival_ariport').value;
            this.newCompanyProfileObj.dep_contact_name = this.newCompanyProfileForm.get('dep_contact_name').value;
            this.newCompanyProfileObj.agent_contact_name = this.newCompanyProfileForm.get('agent_contact_name').value;
            this.newCompanyProfileObj.delivery_method = this.newCompanyProfileForm.get('delivery_method').value;
            this.newCompanyProfileObj.policy_override_authorization = this.newCompanyProfileForm.get('policy_override_authorization').value;
            this.newCompanyProfileObj.prepaid_ticket_authorization = this.newCompanyProfileForm.get('prepaid_ticket_authorization').value;
            this.newCompanyProfileObj.bank_accounts = JSON.stringify(this.newCompanyProfileForm.get('bank_accounts').value);
            this.newCompanyProfileObj.direct_debit_authorized = this.newCompanyProfileForm.get('direct_debit_authorized').value;
            this.newCompanyProfileObj.forms_of_payment = JSON.stringify(this.newCompanyProfileForm.get('forms_of_payment').value);
            //this.newCompanyProfileObj.fare_price_override = JSON.stringify(this.newCompanyProfileForm.get('responsible_office').value);
            this.newCompanyProfileObj.endorsements = JSON.stringify(this.newCompanyProfileForm.get('endorsements').value);
            this.newCompanyProfileObj.discounts = this.newCompanyProfileForm.get('discounts').value;
            this.newCompanyProfileObj.commissions = JSON.stringify(this.newCompanyProfileForm.get('commissions').value);
            this.newCompanyProfileObj.accounting = JSON.stringify(this.newCompanyProfileForm.get('accounting').value);
            this.newCompanyProfileObj.remarks = JSON.stringify(this.newCompanyProfileForm.get('remarks').value);
            this.newCompanyProfileObj.profile_notes = JSON.stringify(this.newCompanyProfileForm.get('profile_notes').value);
            this.newCompanyProfileObj.priority_lines1 = JSON.stringify(this.newCompanyProfileForm.get('priority_lines1').value);
            this.newCompanyProfileObj.priority_lines2 = JSON.stringify(this.newCompanyProfileForm.get('priority_lines2').value);
            this.newCompanyProfileObj.follow_up = JSON.stringify(this.newCompanyProfileForm.get('follow_up').value);
            console.log("You shall not pass-----", this.newCompanyProfileObj.value);
            this.ProfileManagementService.NewCompanyProfile(this.newCompanyProfileObj).subscribe((results) => {
                console.log(results);
            });
        };
        this.updateNewCompanyProfile = () => {
            this.newCompanyProfileObj.company_profile_id = this.companyProfileId;
            this.newCompanyProfileObj.organisation_id = "";
            this.newCompanyProfileObj.group_name = this.newCompanyProfileForm.get('group_name').value;
            this.newCompanyProfileObj.group_description = this.newCompanyProfileForm.get('group_description').value;
            this.newCompanyProfileObj.group_index = this.newCompanyProfileForm.get('group_index').value;
            this.newCompanyProfileObj.languages = this.newCompanyProfileForm.get('languages').value;
            this.newCompanyProfileObj.number = JSON.stringify(this.newCompanyProfileForm.get('number').value);
            this.newCompanyProfileObj.email = JSON.stringify(this.newCompanyProfileForm.get('email').value);
            this.newCompanyProfileObj.address = JSON.stringify(this.newCompanyProfileForm.get('address').value);
            this.newCompanyProfileObj.special_needs = JSON.stringify(this.newCompanyProfileForm.get('special_needs').value);
            this.newCompanyProfileObj.miscellaneous_ticketing = JSON.stringify(this.newCompanyProfileForm.get('miscellaneous_ticketing').value);
            this.newCompanyProfileObj.tour_code = JSON.stringify(this.newCompanyProfileForm.get('tour_code').value);
            this.newCompanyProfileObj.ticketing_arrangement = JSON.stringify(this.newCompanyProfileForm.get('ticketing_arrangement').value);
            this.newCompanyProfileObj.validating_carrier = JSON.stringify(this.newCompanyProfileForm.get('validating_carrier').value);
            this.newCompanyProfileObj.original_issue = JSON.stringify(this.newCompanyProfileForm.get('original_issue').value); //here
            this.newCompanyProfileObj.shadow_destination = this.newCompanyProfileForm.get('shadow_destination').value;
            this.newCompanyProfileObj.keywords = JSON.stringify(this.newCompanyProfileForm.get('keywords').value);
            this.newCompanyProfileObj.default_home_airport = this.newCompanyProfileForm.get('default_home_airport').value;
            this.newCompanyProfileObj.default_arrival_ariport = this.newCompanyProfileForm.get('default_arrival_ariport').value;
            this.newCompanyProfileObj.dep_contact_name = this.newCompanyProfileForm.get('dep_contact_name').value;
            this.newCompanyProfileObj.agent_contact_name = this.newCompanyProfileForm.get('agent_contact_name').value;
            this.newCompanyProfileObj.delivery_method = this.newCompanyProfileForm.get('delivery_method').value;
            this.newCompanyProfileObj.policy_override_authorization = this.newCompanyProfileForm.get('policy_override_authorization').value;
            this.newCompanyProfileObj.prepaid_ticket_authorization = this.newCompanyProfileForm.get('prepaid_ticket_authorization').value;
            this.newCompanyProfileObj.bank_accounts = JSON.stringify(this.newCompanyProfileForm.get('bank_accounts').value);
            this.newCompanyProfileObj.direct_debit_authorized = this.newCompanyProfileForm.get('direct_debit_authorized').value;
            this.newCompanyProfileObj.forms_of_payment = JSON.stringify(this.newCompanyProfileForm.get('forms_of_payment').value);
            //this.newCompanyProfileObj.fare_price_override = JSON.stringify(this.newCompanyProfileForm.get('responsible_office').value);
            this.newCompanyProfileObj.endorsements = JSON.stringify(this.newCompanyProfileForm.get('endorsements').value);
            this.newCompanyProfileObj.discounts = this.newCompanyProfileForm.get('discounts').value;
            this.newCompanyProfileObj.commissions = JSON.stringify(this.newCompanyProfileForm.get('commissions').value);
            this.newCompanyProfileObj.accounting = JSON.stringify(this.newCompanyProfileForm.get('accounting').value);
            this.newCompanyProfileObj.remarks = JSON.stringify(this.newCompanyProfileForm.get('remarks').value);
            this.newCompanyProfileObj.profile_notes = JSON.stringify(this.newCompanyProfileForm.get('profile_notes').value);
            this.newCompanyProfileObj.priority_lines1 = JSON.stringify(this.newCompanyProfileForm.get('priority_lines1').value);
            this.newCompanyProfileObj.priority_lines2 = JSON.stringify(this.newCompanyProfileForm.get('priority_lines2').value);
            this.newCompanyProfileObj.follow_up = JSON.stringify(this.newCompanyProfileForm.get('follow_up').value);
            console.log("You shall not pass", this.newCompanyProfileObj);
            this.ProfileManagementService.UpdateCompanyProfile(this.companyProfileId, this.newCompanyProfileObj).subscribe((results) => {
                console.log(results);
            });
        };
        let uniqueProfileID = Math.random().toString(36).substring(7);
        console.log(uniqueProfileID);
        this.newCompanyProfileId = uniqueProfileID + "Amedius";
        this.route.queryParams.subscribe(params => {
            console.log(params);
            this.companyProfileId = params.company_profile_id;
            this.newCompanyProfileForm.patchValue({
                company_profile_id: params.company_profile_id,
                organisation_id: params.organisation_id,
                group_name: params.group_name,
                group_description: params.group_description,
                group_index: params.group_index,
                languages: params.languages,
                shadow_destination: params.shadow_destination,
                default_home_airport: params.default_home_airport,
                default_arrival_ariport: params.default_arrival_ariport,
                dep_contact_name: params.dep_contact_name,
                agent_contact_name: params.agent_contact_name,
                delivery_method: params.delivery_method,
                policy_override_authorization: params.policy_override_authorization,
                prepaid_ticket_authorization: params.prepaid_ticket_authorization,
                direct_debit_authorized: params.direct_debit_authorized,
                discounts: params.discounts,
            });
            let number = this.parsingArrayParams(params.number, this.number);
            let email = this.parsingArrayParams(params.email, this.email);
            let address = this.parsingArrayParams(params.address, this.address);
            let specialNeeds = this.parsingArrayParams(params.special_needs, this.special_needs);
            let miscellaneousTicketing = this.parsingArrayParams(params.misc_ticketing, this.misc_ticketing);
            let tourCode = this.parsingArrayParams(params.tour_code, this.tour_code);
            let ticketingArrangememt = this.parsingArrayParams(params.ticketing_arrangement, this.ticketing_arrangements);
            let originalIssue = this.parsingArrayParams(params.original_issue, this.original_issue);
            let keywords = this.parsingArrayParams(params.keywords, this.keywords);
            let bankAccounts = this.parsingArrayParams(params.bank_accounts, this.bank_accounts);
            let formsOfPayment = this.parsingArrayParams(params.forms_of_payment, this.forms_of_payment);
            let farePriceOverride = this.parsingArrayParams(params.fare_price_override, this.fare_price_override);
            let endorsements = this.parsingArrayParams(params.endorsements, this.endorsements);
            let commission = this.parsingArrayParams(params.commission, this.commission);
            let accounting = this.parsingArrayParams(params.accounting, this.accounting);
            let remarks = this.parsingArrayParams(params.remarks, this.remarks);
            let profileNotes = this.parsingArrayParams(params.profile_notes, this.profile_notes);
            let priority_lines1 = this.parsingArrayParams(params.priority_lines1, this.priority_lines1);
            let priorityLines2 = this.parsingArrayParams(params.priority_lines2, this.priority_lines2);
            let followUP = this.parsingArrayParams(params.follow_up, this.follow_up);
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
    initSpecial_needs() {
        return {
            explosionIndicator: [''],
            specialNeedsType: [''],
            specialNeedsDesc: [''],
            specialNeedsFreeText: [''],
            specialNeedsAirlineCode: [''],
            specialNeedsFlightType: ['']
        };
    }
    initMisc_ticketing() {
        return {
            miscellaneous_text: [''],
            miscellaneous_provider: ['']
        };
    }
    initTour_code() {
        return {
            tourCode_text: [''],
            tourCode_provider: ['']
        };
    }
    initTicketing_arrangements() {
        return {
            ticketingArrangement_provider: [''],
            validatingCarrier_provider: ['']
        };
    }
    initValidatingCarrier() {
        return {
            validatingCarrier_provider: ['']
        };
    }
    initOriginalIssue() {
        return {
            originalIssue_text: ['']
        };
    }
    initKeywords() {
        return {
            keywords: [''],
            airline: [''],
            keywordText: [''],
            statusCode: [''],
            numberParty: ['']
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
    initComission() {
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
        return this.newCompanyProfileForm.get('number');
    }
    get email() {
        return this.newCompanyProfileForm.get('email');
    }
    get address() {
        return this.newCompanyProfileForm.get('address');
    }
    get special_needs() {
        return this.newCompanyProfileForm.get('special_needs');
    }
    get misc_ticketing() {
        return this.newCompanyProfileForm.get('miscellaneous_ticketing');
    }
    get ticketing_arrangements() {
        return this.newCompanyProfileForm.get('ticketing_arrangement');
    }
    get validating_carrier() {
        return this.newCompanyProfileForm.get('validating_carrier');
    }
    get tour_code() {
        return this.newCompanyProfileForm.get('tour_code');
    }
    get original_issue() {
        return this.newCompanyProfileForm.get('original_issue');
    }
    get keywords() {
        return this.newCompanyProfileForm.get('keywords');
    }
    get bank_accounts() {
        return this.newCompanyProfileForm.get('bank_accounts');
    }
    get forms_of_payment() {
        return this.newCompanyProfileForm.get('forms_of_payment');
    }
    get fare_price_override() {
        return this.newCompanyProfileForm.get('fare_price_override');
    }
    get endorsements() {
        return this.newCompanyProfileForm.get('endorsements');
    }
    get commission() {
        return this.newCompanyProfileForm.get('commissions');
    }
    get accounting() {
        return this.newCompanyProfileForm.get('accounting');
    }
    get remarks() {
        return this.newCompanyProfileForm.get('remarks');
    }
    get profile_notes() {
        return this.newCompanyProfileForm.get('profile_notes');
    }
    get priority_lines1() {
        return this.newCompanyProfileForm.get('priority_lines1');
    }
    get priority_lines2() {
        return this.newCompanyProfileForm.get('priority_lines2');
    }
    get follow_up() {
        return this.newCompanyProfileForm.get('follow_up');
    }
    addMoreNumbers() {
        this.number.push(this.fb.group(this.initNumber()));
    }
    // removeNumbers(index): void {
    //   this.number_details.removeAt(index);
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
    addMoreSpecialNeeds() {
        this.special_needs.push(this.fb.group(this.initSpecial_needs()));
    }
    removeSpecialNeeds(index) {
        this.special_needs.removeAt(index);
    }
    addMoremisc_ticketing() {
        this.misc_ticketing.push(this.fb.group(this.initMisc_ticketing()));
    }
    removeMisc_ticketing(index) {
        this.misc_ticketing.removeAt(index);
    }
    addMoreTicketing_arrangements() {
        this.ticketing_arrangements.push(this.fb.group(this.initTicketing_arrangements()));
    }
    removeTicketing_arrangement(index) {
        this.ticketing_arrangements.removeAt(index);
    }
    addMoreValidatingCarrier() {
        this.validating_carrier.push(this.fb.group(this.initValidatingCarrier()));
    }
    removeValidatingCarrier(index) {
        this.validating_carrier.removeAt(index);
    }
    addMoreOriginal_issue() {
        this.original_issue.push(this.fb.group(this.initOriginalIssue()));
    }
    removeOriginalIssues(index) {
        this.original_issue.removeAt(index);
    }
    addMoreTour_code() {
        this.tour_code.push(this.fb.group(this.initTour_code()));
    }
    removeTourCode(index) {
        this.tour_code.removeAt(index);
    }
    addMoreKeywords() {
        this.keywords.push(this.fb.group(this.initKeywords()));
    }
    removeKeywords(index) {
        this.keywords.removeAt(index);
    }
    addMoreForms_of_payment() {
        this.forms_of_payment.push(this.fb.group(this.initForms_of_payment()));
    }
    removeForm_of_payment(index) {
        this.forms_of_payment.removeAt(index);
    }
    addMoreFair_price_override() {
        this.fare_price_override.push(this.fb.group(this.initFare_price_override()));
    }
    removeFair_price_override() {
        this.fare_price_override;
    }
    addMoreEndorsements() {
        this.endorsements.push(this.fb.group(this.initEndorsements()));
    }
    removeEndorsements(index) {
        this.endorsements.removeAt(index);
    }
    addMoreComission() {
        this.commission.push(this.fb.group(this.initComission()));
    }
    removeComission(index) {
        this.commission.removeAt(index);
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
        $('.menu .item').tab();
        $('.ui.dropdown').dropdown();
    }
    setDropDownType(value, type) {
        switch (type) {
            case 'languages':
                this.newCompanyProfileForm.get('languages').setValue(value);
                break;
            case 'home':
                this.newCompanyProfileForm.get('home').setValue(value);
                break;
            case 'Official':
                this.newCompanyProfileForm.get('Official').setValue(value);
                break;
            case 'addressList':
                this.newCompanyProfileForm.get('addressList').setValue(value);
                break;
            case 'countryList':
                this.newCompanyProfileForm.get('countryList').setValue(value);
                break;
            case 'specialNeedsType':
                this.newCompanyProfileForm.get('specialNeedsType').setValue(value);
                break;
            case 'specialNeedsDesc':
                this.newCompanyProfileForm.get('specialNeedsDesc').setValue(value);
                break;
            case 'specialNeedsFlightType':
                this.newCompanyProfileForm.get('specialNeedsFlightType').setValue(value);
                break;
            case 'remark_type':
                this.newCompanyProfileForm.get('remark_type').setValue(value);
                break;
            case 'remark_category':
                this.newCompanyProfileForm.get('remark_category').setValue(value);
                break;
            case 'delivery_method':
                this.newCompanyProfileForm.get('delivery_method').setValue(value);
                break;
            case 'profile_notes_category':
                this.newCompanyProfileForm.get('profile_notes_category').setValue(value);
                break;
        }
    }
};
NewCompanyProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _shared_services_profile_management_profile_management_service__WEBPACK_IMPORTED_MODULE_1__["ProfileManagementService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tab', { static: false })
], NewCompanyProfileComponent.prototype, "tab", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tabContent', { static: false })
], NewCompanyProfileComponent.prototype, "tabContent", void 0);
NewCompanyProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-new-company-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-company-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-company-profile.component.scss */ "./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile.component.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./../create-new-profile.component.scss */ "./src/app/layout/profile-management/create-new-profile/create-new-profile.component.scss")).default]
    })
], NewCompanyProfileComponent);



/***/ }),

/***/ "./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile.module.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile.module.ts ***!
  \****************************************************************************************************************/
/*! exports provided: NewCompanyProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewCompanyProfileModule", function() { return NewCompanyProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _new_company_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-company-profile.component */ "./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _new_company_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-company-profile-routing.module */ "./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile-routing.module.ts");






let NewCompanyProfileModule = class NewCompanyProfileModule {
};
NewCompanyProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_new_company_profile_component__WEBPACK_IMPORTED_MODULE_1__["NewCompanyProfileComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _new_company_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewCompanyProfileRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]
    })
], NewCompanyProfileModule);



/***/ })

}]);
//# sourceMappingURL=new-company-profile-new-company-profile-module-es2016.js.map