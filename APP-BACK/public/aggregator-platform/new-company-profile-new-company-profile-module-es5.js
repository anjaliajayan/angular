function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-company-profile-new-company-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile.component.html":
  /*!***********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile.component.html ***!
    \***********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutProfileManagementCreateNewProfileNewCompanyProfileNewCompanyProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3><span class=\"booking-header\">New Company Profile</span></h3>\r\n<div class=\"ui fluid container\">\r\n  <div class=\"ui grid container stepper-grid\" #tab>\r\n    <div class=\"four wide column stepper-grid_step _active\" id=\"group\" (click)=\"setActiveTab('group')\">\r\n      <div class=\"stepper-grid_step__step-icon\">\r\n        <div>\r\n          <div class=\"image _group\"></div>\r\n        </div>\r\n        <label>Group Data</label>\r\n      </div>\r\n      <div class=\"stepper-grid_step__step-border\">\r\n        <hr />\r\n      </div>\r\n    </div>\r\n    <div class=\"four wide column stepper-grid_step\" id=\"travel\" (click)=\"setActiveTab('travel')\">\r\n      <div class=\"stepper-grid_step__step-icon\">\r\n        <div>\r\n          <div class=\"image _travel\"></div>\r\n        </div>\r\n        <label>Travel</label>\r\n      </div>\r\n      <div class=\"stepper-grid_step__step-border\">\r\n        <hr />\r\n      </div>\r\n    </div>\r\n    <div class=\"four wide column stepper-grid_step\" id=\"payment\" (click)=\"setActiveTab('payment')\">\r\n      <div class=\"stepper-grid_step__step-icon\">\r\n        <div>\r\n          <div class=\"image _payment\"></div>\r\n        </div>\r\n        <label>Payment</label>\r\n      </div>\r\n      <div class=\"stepper-grid_step__step-border\">\r\n        <hr />\r\n      </div>\r\n    </div>\r\n    <div class=\"four wide column stepper-grid_step\" id=\"remarks\" (click)=\"setActiveTab('remarks')\">\r\n      <div class=\"stepper-grid_step__step-icon\">\r\n        <div>\r\n          <div class=\"image _remarks\"></div>\r\n        </div>\r\n        <label>Remarks</label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <form class=\"ui form\" autocomplete=\"off\"[formGroup]=\"newCompanyProfileForm\" #tabContent>\r\n    <div id=\"group-content\" class=\"stepper-grid-content animated fadeIn _active\">\r\n      <div class=\"outer-basic mtb\">\r\n        <div class=\"outer-basicForm\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Group Data</h4>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <label>General Info</label>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"two wide field\">\r\n                <input type=\"text\" name=\"groupName\" formControlName=\"group_name\" value=\"\" placeholder=\"Group Name\">\r\n              </div>\r\n              <div class=\"four wide field\">\r\n                <input type=\"text\" name=\"groupDescription\" formControlName=\"group_description\" value=\"\"\r\n                  placeholder=\"Group Description\">\r\n              </div>\r\n              <div class=\"four wide field\">\r\n                <input type=\"text\" name=\"groupIndex\" formControlName=\"group_index\" value=\"\" placeholder=\"Group Index\">\r\n              </div>\r\n              <div class=\"four wide field\">\r\n                <div class=\"ui fluid search selection dropdown\">\r\n                  <input type=\"hidden\" name=\"languages\" formControlName=\"languages\" value=\"\">\r\n                  <i class=\"dropdown icon\"></i>\r\n                  <div class=\"default text\">Languages</div>\r\n                  <div class=\"menu\">\r\n                    <div class=\"item\" (click)=\"setDropDownType('Arabic', 'languages')\">Arabic</div>\r\n                    <div class=\"item\" (click)=\"setDropDownType('English', 'languages')\">English</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui sixteen wide column grid\">\r\n              <button class=\"ui primary button btn-sticky\" (click)=\"updateNewCompanyProfile();\">\r\n                Update Profile +\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic mtb\">\r\n        <div class=\"outer-basicForm\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <label>Number Info</label>\r\n            </div>\r\n            <div formArrayName=\"number\">\r\n              <div *ngFor=\"let numberD of newCompanyProfileForm.get('number')['controls'];let nIndex = index\">\r\n                <div [formGroupName]=\"nIndex\" class=\"fields\">\r\n                  <div class=\"field\">\r\n                    <div class=\"three wide field newAgency_topAlign\">\r\n                      <div class=\"ui checkbox\">\r\n                        <input type=\"checkbox\" name=\"prefered\" formControlName=\"preferedHome\" value=\"\">\r\n                        <label>Prefered</label>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"two wide field\">\r\n                    <div class=\"ui fluid search selection dropdown\">\r\n                      <input type=\"hidden\" name=\"home\" formControlName=\"home\" value=\"\">\r\n                      <i class=\"dropdown icon\"></i>\r\n                      <div class=\"default text\">Home</div>\r\n                      <div class=\"menu\">\r\n                        <div class=\"item\" (click)=\"setDropDownType('Home1', 'home')\">Home 1</div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Home2', 'home')\">Home 2</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"four wide field\">\r\n                    <input type=\"text\" name=\"number\" formControlName=\"number\" value=\"\" placeholder=\"Number\">\r\n                  </div>\r\n                  <div class=\"five wide field\">\r\n                    <input type=\"text\" name=\"number_comment\" formControlName=\"number_comment\" value=\"\"\r\n                      placeholder=\"Comment\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"field\">\r\n              <div class=\"ui primary button btn-sticky\" (click)=\"addMoreNumbers()\">\r\n                Add Number +\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic mtb\">\r\n        <div class=\"outer-basicForm\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <label>Email Info</label>\r\n            </div>\r\n            <div formArrayName=\"email\">\r\n              <div *ngFor=\"let emailD of newCompanyProfileForm.get('email')['controls'];let eIndex = index\">\r\n                <div [formGroupName]=\"eIndex\" class=\"fields\">\r\n                  <div class=\"field\">\r\n                    <div class=\"three wide field newAgency_topAlign\">\r\n                      <div class=\"ui checkbox \">\r\n                        <input type=\"checkbox\" name=\"prefered\" formControlName=\"preferedOfficial\" value=\"\">\r\n                        <label>Prefered</label>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"two wide field\">\r\n                    <div class=\"ui fluid search selection dropdown\">\r\n                      <input type=\"hidden\" name=\"office\" formControlName=\"Official\" value=\"\">\r\n                      <i class=\"dropdown icon\"></i>\r\n                      <div class=\"default text\">Official</div>\r\n                      <div class=\"menu\">\r\n                        <div class=\"item\" (click)=\"setDropDownType('Official 1', 'Official')\">\r\n                          Official 1</div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Official 1', 'Official')\">\r\n                          Official 2</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"four wide field\">\r\n                    <input type=\"text\" name=\"emailAddress\" formControlName=\"emailAddress\" value=\"\"\r\n                      placeholder=\"Email Address\">\r\n                  </div>\r\n                  <div class=\"five wide field\">\r\n                    <input type=\"text\" name=\"comment\" formControlName=\"emailAddress_comment\" value=\"\"\r\n                      placeholder=\"Comment\">\r\n                  </div>\r\n                  <div class=\"ui primary button btn-sticky\" (click)=\"addMoreEmail()\">\r\n                    Add Email +\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic mtb\">\r\n        <div class=\"outer-basicForm\">\r\n          <div class=\"fields\">\r\n            <label>Address Info</label>\r\n          </div>\r\n          <div class=\"form-inner\">\r\n            <div formArrayName=\"address\">\r\n              <div *ngFor=\"let addressD of newCompanyProfileForm.get('address')['controls']; let aIndex = index\">\r\n                <div [formGroupName]=\"aIndex\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"field\">\r\n                      <div class=\"three wide field newAgency_topAlign\">\r\n                        <div class=\"ui checkbox \">\r\n                          <input type=\"checkbox\" name=\"prefered\" formControlName=\"preferedAddress\" value=\"\">\r\n                          <label>Prefered</label>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"two wide field\">\r\n                      <div class=\"ui fluid search selection dropdown\">\r\n                        <input type=\"hidden\" name=\"office\" formControlName=\"addressList\" value=\"\">\r\n                        <i class=\"dropdown icon\"></i>\r\n                        <div class=\"default text\">Office</div>\r\n                        <div class=\"menu\">\r\n                          <div class=\"item\" (click)=\"setDropDownType('Office 1', 'addressList')\">\r\n                            Office 1</div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('Office 2', 'addressList')\">\r\n                            Office 2</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"five wide field\">\r\n                      <input type=\"text\" name=\"address\" formControlName=\"address\" value=\"\" placeholder=\"Address\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"street\" formControlName=\"street\" value=\"\" placeholder=\"Street\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"city\" formControlName=\"city\" value=\"\" placeholder=\"City\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"fields\">\r\n                    <div class=\"field\">\r\n                      <div class=\"three wide field\">\r\n                        <div class=\"ui checkbox \">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                    </div>\r\n                    <div class=\"two wide field\">\r\n                      <input type=\"text\" name=\"state\" formControlName=\"state\" value=\"\" placeholder=\"Region/State\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"postalCode\" formControlName=\"postalCode\" value=\"\"\r\n                        placeholder=\"Postal Code\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <div class=\"ui fluid search selection dropdown\">\r\n                        <input type=\"hidden\" name=\"country\" formControlName=\"countryList\" value=\"\">\r\n                        <i class=\"dropdown icon\"></i>\r\n                        <div class=\"default text\">Country</div>\r\n                        <div class=\"menu\">\r\n                          <div class=\"item\" (click)=\"setDropDownType('USA', 'countryList')\">\r\n                            USA</div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('UAE', 'countryList')\">\r\n                            UAE</div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('Australia', 'countryList')\">\r\n                            Australia</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"company\" formControlName=\"company\" value=\"\" placeholder=\"Company\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"fields\">\r\n                    <div class=\"field\">\r\n                      <div class=\"three wide field\">\r\n                        <div class=\"ui checkbox \">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                    </div>\r\n                    <div class=\"five wide field\">\r\n                      <input type=\"text\" name=\"comment\" formControlName=\"address_comment\" value=\"\"\r\n                        placeholder=\"Comment\">\r\n                    </div>\r\n                    <div class=\"ui primary button btn-sticky\" (click)=\"addMoreAddress()\">\r\n                      Add Address +\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"travel-content\" class=\"stepper-grid-content animated fadeIn\">\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Travel Data</h4>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <label>Special Needs</label>\r\n            </div>\r\n            <div formArrayName=\"special_needs\">\r\n              <div\r\n                *ngFor=\"let special_needsD of newCompanyProfileForm.get('special_needs')['controls'];let spIndex = index\">\r\n                <div [formGroupName]=\"spIndex\" class=\"fields\">\r\n                  <div class=\"three wide field newAgency_topAlign\">\r\n                    <div class=\"ui checkbox \">\r\n                      <input type=\"checkbox\" name=\"explosionIndicator\" formControlName=\"explosionIndicator\" value=\"\">\r\n                      <label>Explosion Indicator</label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"two wide field\">\r\n                    <div class=\"ui fluid search selection dropdown\">\r\n                      <input type=\"hidden\" name=\"type\" formControlName=\"specialNeedsType\" value=\"\">\r\n                      <i class=\"dropdown icon\"></i>\r\n                      <div class=\"default text\">Type</div>\r\n                      <div class=\"menu\">\r\n                        <div class=\"item\" (click)=\"setDropDownType('Type 1', 'specialNeedsType')\">\r\n                          Type 1</div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Type 2', 'specialNeedsType')\">\r\n                          Type 2</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"three wide field\">\r\n                    <div class=\"ui fluid search selection dropdown\">\r\n                      <input type=\"hidden\" name=\"description\" formControlName=\"specialNeedsDesc\" value=\"\">\r\n                      <i class=\"dropdown icon\"></i>\r\n                      <div class=\"default text\">Description</div>\r\n                      <div class=\"menu\">\r\n                        <div class=\"item\" (click)=\"setDropDownType('Description 1', 'specialNeedsDesc')\">\r\n                          Description 1</div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Description 2', 'specialNeedsDesc')\">\r\n                          Description 2</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"three wide field\">\r\n                    <input type=\"text\" name=\"freeText\" placeholder=\"Free Text\" formControlName=\"specialNeedsFreeText\"\r\n                      value=\"\">\r\n                  </div>\r\n                  <div class=\"three wide field\">\r\n                    <input type=\"text\" name=\"airlineCode\" placeholder=\"Airline Code\"\r\n                      formControlName=\"specialNeedsAirlineCode\" value=\"\">\r\n                  </div>\r\n                  <div class=\"three wide field\">\r\n                    <div class=\"ui fluid search selection dropdown\">\r\n                      <input type=\"hidden\" name=\"flightType\" formControlName=\"specialNeedsFlightType\" value=\"\">\r\n                      <i class=\"dropdown icon\"></i>\r\n                      <div class=\"default text\">Flight Type</div>\r\n                      <div class=\"menu\">\r\n                        <div class=\"item\" (click)=\"setDropDownType('Description 2', 'specialNeedsDesc')\">Type 1\r\n                        </div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Description 2', 'specialNeedsDesc')\">Type 2\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"newAgency_topAlign\" *ngIf=\"spIndex > 0\" (click)=\"removeSpecialNeeds(spIndex)\">\r\n                    <i class=\"icon\">\r\n                      <img src=\"./../../../../../assets/img/remove-button.svg\" />\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui primary button btn-sticky\" (click)=\"addMoreSpecialNeeds()\">\r\n                Add More +\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <div class=\"five wide field\">\r\n                <h4>Miscellaneous Ticketing</h4>\r\n              </div>\r\n              <div class=\"four wide field\"></div>\r\n              <div class=\"five wide field\">\r\n                <label>Tour Code</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div formArrayName=\"miscellaneous_ticketing\">\r\n                <div\r\n                  *ngFor=\"let misc_ticketingD of newCompanyProfileForm.get('miscellaneous_ticketing')['controls']; let miscIndex = index\">\r\n                  <div [formGroupName]=\"miscIndex\" class=\"fields\">\r\n                    <div class=\"six wide field\">\r\n                      <input type=\"text\" name=\"text\" placeholder=\"Text\" formControlName=\"miscellaneous_text\" value=\"\">\r\n                    </div>\r\n                    <div class=\"six wide field\">\r\n                      <input type=\"text\" name=\"provider\" placeholder=\"Provider\" formControlName=\"miscellaneous_provider\"\r\n                        value=\"\">\r\n                    </div>\r\n                    <div class=\"newAgency_topAlign\" *ngIf=\"miscIndex > 0\" (click)=\"removeMisc_ticketing(miscIndex)\">\r\n                      <i class=\"icon\">\r\n                        <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ui primary button\" (click)=\"addMoremisc_ticketing()\">\r\n                  Add More +\r\n                </div>\r\n              </div>\r\n              <div class=\"three wide field\"></div>\r\n              <div formArrayName=\"tour_code\">\r\n                <div\r\n                  *ngFor=\"let tour_codeD of newCompanyProfileForm.get('tour_code')['controls']; let tourIndex = index\">\r\n                  <div [formGroupName]=\"tourIndex\" class=\"fields\">\r\n                    <div class=\"six wide field\">\r\n                      <input type=\"text\" name=\"text\" formControlName=\"tourCode_text\" placeholder=\"Text\">\r\n                    </div>\r\n                    <div class=\"six wide field\">\r\n                      <input type=\"text\" name=\"provider\" formControlName=\"tourCode_provider\" placeholder=\"Provider\">\r\n                    </div>\r\n                    <div class=\"newAgency_topAlign\" *ngIf=\"tourIndex > 0\" (click)=\"removeTourCode(tourIndex)\">\r\n                      <i class=\"icon\">\r\n                        <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"ui primary button\" (click)=\"addMoreTour_code()\">\r\n                  Add More +\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"five wide field\">\r\n                <label>Ticketing Arrangement</label>\r\n              </div>\r\n              <div class=\"four wide field\"></div>\r\n              <div class=\"five wide field\">\r\n                <label>Validating Carrier</label>\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"six wide field\">\r\n                <div formArrayName=\"ticketing_arrangement\">\r\n                  <div\r\n                    *ngFor=\"let ticketing_arrangementsD of newCompanyProfileForm.get('ticketing_arrangement')['controls']; let ticketIndex = index\">\r\n                    <div [formGroupName]=\"ticketIndex\" class=\"fields\">\r\n                      <div class=\"five wide field\">\r\n                        <input type=\"text\" name=\"text\" formControlName=\"ticketingArrangement_provider\"\r\n                          placeholder=\"Provider\">\r\n                      </div>\r\n                      <div class=\"newAgency_topAlign\" *ngIf=\"ticketIndex > 0\"\r\n                        (click)=\"removeTicketing_arrangement(ticketIndex)\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                        </i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui primary button\" (click)=\"addMoreTicketing_arrangements()\">\r\n                    Add More +\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"three wide field\">\r\n              </div>\r\n              <div class=\"six wide field\">\r\n                <div formArrayName=\"validating_carrier\">\r\n                  <div\r\n                    *ngFor=\"let validating_carrierD of newCompanyProfileForm.get('validating_carrier')['controls']; let validatingIndex = index\">\r\n                    <div [formGroupName]=\"validatingIndex\" class=\"fields\">\r\n                      <div class=\"five wide field\">\r\n                        <input type=\"text\" name=\"text\" placeholder=\"Provider\">\r\n                      </div>\r\n                      <div class=\"newAgency_topAlign\" *ngIf=\"validatingIndex > 0\"\r\n                        (click)=\"removeValidatingCarrier(validatingIndex)\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                        </i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui primary button\" (click)=\"addMoreValidatingCarrier()\">\r\n                    Add More +\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"five wide field\">\r\n                <h4>Original Issue</h4>\r\n              </div>\r\n              <div class=\"four wide field\"></div>\r\n              <div class=\"five wide field\">\r\n                <h4>Shadow Destination</h4>\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"seven wide field\">\r\n                <div formArrayName=\"original_issue\">\r\n                  <div\r\n                    *ngFor=\"let original_issueD of newCompanyProfileForm.get('original_issue')['controls']; let originalIndex = index\">\r\n                    <div [formGroupName]=\"originalIndex\" class=\"fields\">\r\n                      <div class=\"six wide field\">\r\n                        <input type=\"text\" name=\"text\" placeholder=\"\">\r\n                      </div>\r\n                      <div class=\"newAgency_topAlign\" *ngIf=\"originalIndex > 0\"\r\n                        (click)=\"removeOriginalIssues(originalIndex)\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                        </i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui primary button\" (click)=\"addMoreOriginal_issue()\">\r\n                    Add More +\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"three wide field\">\r\n              </div>\r\n              <div class=\"three wide field\"></div>\r\n              <div class=\"three wide field\">\r\n                <input type=\"text\" name=\"text\" placeholder=\"\">\r\n              </div>\r\n              <div class=\"three wide field\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Keywords</h4>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div formArrayName=\"keywords\">\r\n                <div *ngFor=\"let keywordsD of newCompanyProfileForm.get('keywords')['controls']; let keyIndex = index\">\r\n                  <div [formGroupName]=\"keyIndex\" class=\"fields\">\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"keyword\" placeholder=\"Keyword\" formControlName=\"keywords\" value=\"\">\r\n                    </div>\r\n                    <div class=\"three wide field \">\r\n                      <input type=\"text\" name=\"airline\" placeholder=\"Airline\" formControlName=\"airline\" value=\"\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"keywordtText\" placeholder=\"Keyword Text\" formControlName=\"keywordText\"\r\n                        value=\"\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"statusCode\" placeholder=\"Status Code\" formControlName=\"statusCode\"\r\n                        value=\"\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"numberParty\" placeholder=\"Number In Party\" formControlName=\"numberParty\"\r\n                        value=\"\">\r\n                    </div>\r\n                    <div class=\"newAgency_topAlign\" *ngIf=\"keyIndex > 0\" (click)=\"removeKeywords(keyIndex)\">\r\n                      <i class=\"icon\">\r\n                        <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"field\">\r\n              <div class=\"ui primary button btn-sticky\" (click)=\"addMoreKeywords()\">\r\n                Add More +\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Travel Management</h4>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"four wide field\">\r\n                <input type=\"text\" name=\"defaultHomeAirport\" placeholder=\"Default Home Airport\"\r\n                  formControlName=\"default_home_airport\" value=\"\">\r\n              </div>\r\n              <div class=\"four wide field \">\r\n                <input type=\"text\" name=\"defaultArrivalAirport\" placeholder=\"Default Arrival Airport\"\r\n                  formControlName=\"default_arrival_ariport\" value=\"\">\r\n              </div>\r\n              <div class=\"four wide field \">\r\n                <input type=\"text\" name=\"depContactName\" placeholder=\"Dep. Contact Name\"\r\n                  formControlName=\"dep_contact_name\" value=\"\">\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"four wide field\">\r\n                <input type=\"text\" name=\"agentContactName\" placeholder=\"Agent Contact Name\"\r\n                  formControlName=\"agent_contact_name\" value=\"\">\r\n              </div>\r\n              <div class=\"four wide field \">\r\n                <div class=\"ui fluid search selection dropdown\">\r\n                  <input type=\"hidden\" name=\"deliveryMethod\" formControlName=\"delivery_method\" value=\"\">\r\n                  <i class=\"dropdown icon\"></i>\r\n                  <div class=\"default text\">Delivery Method</div>\r\n                  <div class=\"menu\">\r\n                    <div class=\"item\" (click)=\"setDropDownType('Method 1', 'delivery_method')\">Method 1\r\n                    </div>\r\n                    <div class=\"item\" (click)=\"setDropDownType('Method 2', 'delivery_method')\">Method 2\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"payment-content\" class=\"stepper-grid-content animated fadeIn\">\r\n      <div class=\"outer-basic outer-basic_secondary\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h3><b>Payment Data</b></h3>\r\n            </div><br>\r\n            <div class=\"fields\">\r\n              <h4>Bank Accounts</h4>\r\n              <div class=\"ui primary button btn-sticky\" (click)=\"addBankAccount()\">\r\n                Add Bank Account +\r\n              </div>\r\n            </div>\r\n            <div formArrayName=\"bank_accounts\">\r\n              <div\r\n                *ngFor=\"let bank_accountsD of newCompanyProfileForm.get('bank_accounts')['controls']; let bank_accountsIndex = index\">\r\n                <div [formGroupName]=\"bank_accountsIndex\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"two wide field\">\r\n                      <input type=\"text\" name=\"code\" formControlName=\"bank_code\" value=\"\" placeholder=\"Code\">\r\n                    </div>\r\n                    <div class=\"five wide field\">\r\n                      <input type=\"text\" name=\"name\" formControlName=\"bank_name\" value=\"\" placeholder=\"Name\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"bankAccountNumber\" formControlName=\"bank_number\" value=\"\"\r\n                        placeholder=\"Number\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"city\" value=\"\" formControlName=\"bank_city\" value=\"\" placeholder=\"City\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"fields\">\r\n                    <div class=\"two wide field\">\r\n                    </div>\r\n                    <div class=\"five wide field\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"validFrom\" formControlName=\"bank_valid_from\" value=\"\"\r\n                        placeholder=\"Valid From(DDMMYYYY)\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"validUntil\" formControlName=\"bank_valid_to\" value=\"\"\r\n                        placeholder=\"Valid Until(DDMMYYYY)\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"fields\">\r\n                    <div class=\"two wide field\">\r\n                    </div>\r\n                    <div class=\"five wide field\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <div class=\"ui checkbox \">\r\n                        <input type=\"checkbox\" name=\"directDebitAuthorized\">\r\n                        <label class=\"checkbox_label\">Direct Debit Authorized</label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"field\">\r\n              <hr>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"five wide field\">\r\n                <div formArrayName=\"forms_of_payment\">\r\n                  <div\r\n                    *ngFor=\"let forms_of_paymentD of newCompanyProfileForm.get('forms_of_payment')['controls']; let payIndex = index\">\r\n                    <div [formGroupName]=\"payIndex\" class=\"fields\">\r\n                      <input type=\"text\" name=\"formOfPayment\" formControlName=\"forms_of_payment\" value=\"\"\r\n                        placeholder=\"Form Of Payment\">\r\n                      <div class=\"newAgency_topAlign\" (click)=\"addMoreForms_of_payment()\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/add_icon.png\" />\r\n                        </i>\r\n                      </div>\r\n                      <div class=\"newAgency_topAlign\" (click)=\"removeForm_of_payment(-1)\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                        </i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"four wide field\"></div>\r\n              <div class=\"five wide field \">\r\n                <div formArrayName=\"endorsements\">\r\n                  <div\r\n                    *ngFor=\"let endorsementsD of newCompanyProfileForm.get('endorsements')['controls']; let eIndex = index\">\r\n                    <div [formGroupName]=\"eIndex\" class=\"fields\">\r\n                      <input type=\"text\" name=\"endorsement\" formControlName=\"endorsements\" value=\"\"\r\n                        placeholder=\"Endorsement\">\r\n                      <div class=\"newAgency_topAlign\" (click)=\"addMoreEndorsements()\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/add_icon.png\" />\r\n                        </i>\r\n                      </div>\r\n                      <div class=\"newAgency_topAlign\" (click)=\"removeEndorsements(eIndex)\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                        </i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"field\">\r\n              <hr>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"five wide field\">\r\n                <div formArrayName=\"fare_price_override\">\r\n                  <div\r\n                    *ngFor=\"let fare_price_overrideD of newCompanyProfileForm.get('fare_price_override')['controls']; let overrideIndex = index\">\r\n                    <div [formGroupName]=\"overrideIndex\" class=\"fields\">\r\n                      <input type=\"text\" name=\"fairPriceOverride\" formControlName=\"fare_price_override\" value=\"\"\r\n                        placeholder=\"Fair Price Override\">\r\n                      <div class=\"newAgency_topAlign\" (click)=\"addMoreFair_price_override()\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/add_icon.png\" />\r\n                        </i>\r\n                      </div>\r\n                      <div class=\"newAgency_topAlign\" (click)=\"removeEndorsements(overrideIndex)\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                        </i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"four wide field\"></div>\r\n              <div class=\"five wide field \">\r\n                <input type=\"text\" name=\"discount\" formControlName=\"discounts\" value=\"\" placeholder=\"Discount\">\r\n              </div>\r\n            </div>\r\n            <div class=\"field\">\r\n              <hr>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <h4>Commision</h4>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"four wide field\">\r\n                <div formArrayName=\"commissions\">\r\n                  <div\r\n                    *ngFor=\"let commissionD of newCompanyProfileForm.get('commissions')['controls']; let comIndex = index\">\r\n                    <div [formGroupName]=\"comIndex\" class=\"fields\">\r\n                      <div class=\"three wide field\">\r\n                        <input type=\"text\" name=\"text\" formControlName=\"commisionText\" value=\"\" placeholder=\"Text\">\r\n                      </div>\r\n                      <div class=\"three wide field \">\r\n                        <input type=\"text\" name=\"providerCode\" formControlName=\"commisionProvideCode\" value=\"\"\r\n                          placeholder=\"Provider Code\">\r\n                      </div>\r\n                      <div class=\"newAgency_topAlign\" (click)=\"addMoreComission()\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/add_icon.png\" />\r\n                        </i>\r\n                      </div>\r\n                      <div class=\"newAgency_topAlign\" (click)=\"removeComission(comIndex)\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                        </i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"field\">\r\n              <hr>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <h4>Accounting</h4>\r\n            </div>\r\n            <div formArrayName=\"accounting\">\r\n              <div\r\n                *ngFor=\"let accountingD of newCompanyProfileForm.get('accounting')['controls']; let accIndex = index\">\r\n                <div [formGroupName]=\"accIndex\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"four wide field\">\r\n                      <input type=\"text\" name=\"accountNumber\" formControlName=\"accountNumber\" value=\"\"\r\n                        placeholder=\"Account Number\">\r\n                    </div>\r\n                    <div class=\"four wide field \">\r\n                      <input type=\"text\" name=\"costCentre\" formControlName=\"accountCostCentre\" value=\"\"\r\n                        placeholder=\"Cost Centre\">\r\n                    </div>\r\n                    <div class=\"four wide field \">\r\n                      <input type=\"text\" name=\"iataNumber\" formControlName=\"accountIataNumber\" value=\"\"\r\n                        placeholder=\"IATA Number\">\r\n                    </div>\r\n                    <div class=\"four wide field \">\r\n                      <input type=\"text\" name=\"clientReference\" formControlName=\"accountClientReference\" value=\"\"\r\n                        placeholder=\"Client Reference\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"fields\">\r\n                    <div class=\"four wide field\">\r\n                      <input type=\"text\" name=\"gstTaxName\" formControlName=\"accountGstTaxName\" value=\"\"\r\n                        placeholder=\"GST Tax Name\">\r\n                    </div>\r\n                    <div class=\"four wide field \">\r\n                      <input type=\"text\" name=\"gstTaxNumber\" formControlName=\"accountGetTaxNumber\" value=\"\"\r\n                        placeholder=\"GST Tax Number\">\r\n                    </div>\r\n                    <div class=\"four wide field \">\r\n                      <input type=\"text\" name=\"gstTaxAddress\" formControlName=\"accountGstTaxAddress\" value=\"\"\r\n                        placeholder=\"GST Tax Address\">\r\n                    </div>\r\n                    <div class=\"ui primary button btn-sticky\" (click)=\"addMoreAccounting()\">\r\n                      Add Accounting +\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"remarks-content\" class=\"stepper-grid-content animated fadeIn\">\r\n      <div class=\"outer-basic outer-basic_secondary\">\r\n        <div class=\"outer-basic_tertiary\">\r\n          <div class=\"outer-basicForm_tertiary\">\r\n            <div class=\"form-inner\">\r\n              <div class=\"fields\">\r\n                <h3><b>Remarks</b></h3>\r\n              </div><br>\r\n              <div class=\"fields\">\r\n                <h4>Remarks</h4>\r\n                <div class=\"ui primary button btn-sticky\" (click)=\"addMoreRemarks()\">\r\n                  Add Remark +\r\n                </div>\r\n              </div>\r\n              <div formArrayName=\"remarks\">\r\n                <div\r\n                  *ngFor=\"let remarksD of newCompanyProfileForm.get('remarks')['controls']; let remarksIndex = index\">\r\n                  <div [formGroupName]=\"remarksIndex\">\r\n                    <div class=\"fields\">\r\n                      <div class=\"three wide field\">\r\n                        <div class=\"ui fluid search selection dropdown\">\r\n                          <input type=\"hidden\" formControlName=\"remark_type\" value=\"\" name=\"remarkType\">\r\n                          <i class=\"dropdown icon\"></i>\r\n                          <div class=\"default text\">Remark Type</div>\r\n                          <div class=\"menu\">\r\n                            <div class=\"item\" data-value=\"remarkType1\">Type 1</div>\r\n                            <div class=\"item\" data-value=\"remarkType2\">Type 2</div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"three wide field \">\r\n                        <div class=\"ui fluid search selection dropdown\">\r\n                          <input type=\"hidden\" formControlName=\"remark_category\" value=\"\" name=\"category\">\r\n                          <i class=\"dropdown icon\"></i>\r\n                          <div class=\"default text\">Category</div>\r\n                          <div class=\"menu\">\r\n                            <div class=\"item\" data-value=\"category1\">Category 1</div>\r\n                            <div class=\"item\" data-value=\"category2\">Category 2</div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"six wide field \">\r\n                        <textarea type=\"text\" name=\"remark\" formControlName=\"remark\" value=\"\" placeholder=\"Remark\"\r\n                          rows=\"4\" cols=\"50\"></textarea>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"field\">\r\n                <hr>\r\n              </div>\r\n              <div class=\"fields\">\r\n                <h4>Profile Notes</h4>\r\n              </div>\r\n              <div formArrayName=\"profile_notes\">\r\n                <div\r\n                  *ngFor=\"let profile_notesD of newCompanyProfileForm.get('profile_notes')['controls']; let notesIndex = index\">\r\n                  <div [formGroupName]=\"notesIndex\">\r\n                    <div class=\"fields\">\r\n                      <div class=\"three wide field\">\r\n                        <div class=\"ui fluid search selection dropdown\">\r\n                          <input type=\"hidden\" formControlName=\"profile_notes_category\" value=\"\" name=\"category\">\r\n                          <i class=\"dropdown icon\"></i>\r\n                          <div class=\"default text\">Category</div>\r\n                          <div class=\"menu\">\r\n                            <div class=\"item\" data-value=\"category1\">Category 1</div>\r\n                            <div class=\"item\" data-value=\"category2\">Category 2</div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"five wide field \">\r\n                        <input type=\"text\" name=\"information\" formControlName=\"profile_notes_information\" value=\"\"\r\n                          placeholder=\"Information\">\r\n                      </div>\r\n                      <div class=\"ui primary button btn-sticky\" (click)=\"addMoreProfileNotes()\">\r\n                        Add Profile Note +\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"field\">\r\n                <hr>\r\n              </div>\r\n              <div class=\"fields\">\r\n                <h4>Priority Lines</h4>\r\n              </div>\r\n              <!-- <div class=\"fields\"> -->\r\n              <div formArrayName=\"priority_lines1\">\r\n                <div\r\n                  *ngFor=\"let priority_lines1D of newCompanyProfileForm.get('priority_lines1')['controls']; let priorityIndex1 = index\">\r\n                  <div [formGroupName]=\"priorityIndex1\">\r\n                    <div class=\"fields\">\r\n                      <div class=\"five wide field \">\r\n                        <input type=\"text\" name=\"information\" formControlName=\"priorityInformation1\" value=\"\"\r\n                          placeholder=\"\">\r\n                      </div>\r\n                      <div class=\"ui primary button btn-sticky\" (click)=\"addMorePriority_lines1()\">\r\n                        Add Priority Line +\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- </div> -->\r\n              <div class=\"field\">\r\n                <hr>\r\n              </div>\r\n              <div class=\"fields\">\r\n                <h4>Priority Lines</h4>\r\n              </div>\r\n              <!-- <div class=\"fields\"> -->\r\n              <div formArrayName=\"priority_lines2\">\r\n                <div\r\n                  *ngFor=\"let priority_lines2D of newCompanyProfileForm.get('priority_lines2')['controls']; let priorityIndex2 = index\">\r\n                  <div [formGroupName]=\"priorityIndex2\">\r\n                    <div class=\"fields\">\r\n                      <div class=\"five wide field \">\r\n                        <input type=\"text\" name=\"information\" formControlName=\"priorityInformation2\" value=\"\"\r\n                          placeholder=\"\">\r\n                      </div>\r\n                      <div class=\"ui primary button btn-sticky\" (click)=\"addMorePriority_lines2()\">\r\n                        Add Priority Line +\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- </div> -->\r\n              <div class=\"field\">\r\n                <hr>\r\n              </div>\r\n              <div class=\"fields\">\r\n                <h4>Follow Up</h4>\r\n              </div>\r\n              <!-- <div class=\"fields\"> -->\r\n              <div formArrayName=\"follow_up\">\r\n                <div\r\n                  *ngFor=\"let follow_upD of newCompanyProfileForm.get('follow_up')['controls']; let follow_upIndex = index\">\r\n                  <div [formGroupName]=\"follow_upIndex\">\r\n                    <div class=\"fields\">\r\n                      <div class=\"three wide field \">\r\n                        <input type=\"text\" name=\"date\" formControlName=\"followUpDate\" value=\"\"\r\n                          placeholder=\"Date (DDMMYYYY)\">\r\n                      </div>\r\n                      <div class=\"three wide field \">\r\n                        <input type=\"text\" name=\"action\" formControlName=\"followUpAction\" value=\"\" placeholder=\"Action\">\r\n                      </div>\r\n                      <div class=\"ui primary button btn-sticky\" (click)=\"addMoreFollow_up()\">\r\n                        Add Follow Up +\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <!-- </div> -->\r\n              <br>\r\n              <div class=\"bookings_btn-panel trailing_button\">\r\n                <button class=\"ui secondary  button\">\r\n                  Save\r\n                </button>\r\n                <button type=\"button\" class=\"ui primary  button\" (click)=\"createNewCompanyProfile()\">\r\n                  Submit\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile-routing.module.ts":
  /*!************************************************************************************************************************!*\
    !*** ./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile-routing.module.ts ***!
    \************************************************************************************************************************/

  /*! exports provided: NewCompanyProfileRoutingModule */

  /***/
  function srcAppLayoutProfileManagementCreateNewProfileNewCompanyProfileNewCompanyProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewCompanyProfileRoutingModule", function () {
      return NewCompanyProfileRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _new_company_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./new-company-profile.component */
    "./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile.component.ts");
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
      component: _new_company_profile_component__WEBPACK_IMPORTED_MODULE_1__["NewCompanyProfileComponent"]
    }];

    var NewCompanyProfileRoutingModule = function NewCompanyProfileRoutingModule() {
      _classCallCheck(this, NewCompanyProfileRoutingModule);
    };

    NewCompanyProfileRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], NewCompanyProfileRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile.component.scss":
  /*!*********************************************************************************************************************!*\
    !*** ./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile.component.scss ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutProfileManagementCreateNewProfileNewCompanyProfileNewCompanyProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".stepper-grid {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n.stepper-grid .stepper-grid_step {\n  display: flex;\n  align-items: center;\n  opacity: 0.6;\n  cursor: pointer;\n}\n.stepper-grid .stepper-grid_step._active {\n  opacity: 1;\n  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div {\n  background-color: #062862;\n  border: 0;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div div.image {\n  background-color: white;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div:hover {\n  border: 2px solid #A6B1C3;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon label {\n  border: 0;\n  background-color: #062862;\n  color: white;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-border hr {\n  border-bottom: 2px solid #062862;\n}\n.stepper-grid .stepper-grid_step._activated {\n  opacity: 1;\n  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div {\n  background-color: #437ADA;\n  border: 0;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div div.image {\n  background-color: white;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div:hover {\n  border: 2px solid #A6B1C3;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon label {\n  border: 0;\n  background-color: #437ADA;\n  color: white;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-border hr {\n  border-bottom: 2px solid #437ADA;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div {\n  background-color: transparent;\n  border: 2px solid #A6B1C3;\n  color: white;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  border-radius: 50%;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon label {\n  width: 100px;\n  height: auto;\n  line-height: 24px;\n  text-align: center;\n  background-color: transparent;\n  border: 2px solid #A6B1C3;\n  margin-top: 15px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 600 !important;\n  font-size: 13px;\n  color: #A6B1C3;\n  border-radius: 8px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon label._last {\n  width: 150px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-border {\n  width: 100%;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-border hr {\n  margin-top: -24px;\n  width: 100%;\n  height: 2px;\n  background: none;\n  border-bottom: 2px solid #A6B1C3;\n}\n.stepper-grid-content {\n  display: none;\n}\n.stepper-grid-content._active {\n  display: block;\n}\n.checkbox_label {\n  height: 13px !important;\n  color: #828282 !important;\n  font-family: Ubuntu !important;\n  font-size: 12px !important;\n  font-weight: 300 !important;\n}\n.booking-header {\n  color: #4F4F4F;\n  font-family: Helvetica;\n  font-size: 20px;\n  font-weight: 300;\n  line-height: 22px;\n  margin-left: 22px;\n}\n.outer-basic {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n  padding: 15px;\n}\n.bookings_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n.bookings_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n.bookings_pickers .input .icon {\n  opacity: 1;\n  z-index: 100;\n}\n.bookings_pickers .input .icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n.bookings_pickers .input .icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n.bookings_pickers .input .search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.bookings_pickers .input .search.dropdown .search {\n  margin-left: 42px !important;\n}\n.bookings_pickers .input .search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n.bookings_btn-panel .secondary {\n  width: 135.64px;\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n.bookings_btn-panel .primary {\n  width: 135.64px;\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n.trailing_button {\n  position: absolute;\n  right: 0;\n}\n.newAgency_topAlign {\n  height: 35px !important;\n}\ntd {\n  color: #4F4F4F;\n  font-family: Helvetica;\n  font-size: 10px;\n  line-height: 11px;\n  text-align: center;\n}\nth {\n  color: #4F4F4F;\n  font-family: Helvetica;\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 11px;\n  text-align: center;\n}\n.confirm {\n  width: 63px;\n}\n.recConfirm {\n  height: 18px;\n  width: 62px;\n  background-color: #72D44F;\n  color: white;\n  padding-top: 0.5vh;\n}\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n.field input::-webkit-input-placeholder {\n  font-size: 12px;\n}\n.field input::-moz-placeholder {\n  font-size: 12px;\n}\n.field input::-ms-input-placeholder {\n  font-size: 12px;\n}\n.field input::placeholder {\n  font-size: 12px;\n}\n.outer-basic_secondary {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n}\n.outer-basicForm_secondary {\n  width: 100%;\n  height: auto;\n  padding: 15px;\n}\n.right_links {\n  position: absolute;\n  right: 0;\n  padding-top: 1vh;\n  padding-right: 8vh;\n}\n.outer-basic_tertiary {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\n.outer-basicForm_tertiary {\n  width: 100%;\n  height: auto;\n  padding: 50px;\n}\nhr {\n  box-sizing: border-box;\n  height: 1px;\n  border: 0.5px solid #E0E0E0;\n}\n.dropdown .text {\n  font-size: 12px;\n}\n.bookings_btn-panel.trailing_button {\n  margin-right: 45px;\n}\n.right_links {\n  padding-top: 1vh;\n}\n.ui.fluid.container {\n  padding: 28px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image {\n  width: 22px;\n  margin: 0 auto;\n  background-color: #A6B1C3;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._group {\n  -webkit-mask: url('group.svg') no-repeat center;\n  mask: url('group.svg') no-repeat center;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._travel {\n  -webkit-mask: url('travel.svg') no-repeat center;\n  mask: url('travel.svg') no-repeat center;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._payment {\n  -webkit-mask: url('payment.svg') no-repeat center;\n  mask: url('payment.svg') no-repeat center;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._remarks {\n  -webkit-mask: url('remarks.svg') no-repeat center;\n  mask: url('remarks.svg') no-repeat center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LWNvbXBhbnktcHJvZmlsZS9FOlxcQmVsYWxcXHByb2plY3RzXFxwcm9kdWN0aW9uLWJ1aWxkXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcY29tb24tc3R5bGVzXFxzdGVwcGVyLnNjc3MiLCJzcmMvYXBwL2xheW91dC9wcm9maWxlLW1hbmFnZW1lbnQvY3JlYXRlLW5ldy1wcm9maWxlL25ldy1jb21wYW55LXByb2ZpbGUvbmV3LWNvbXBhbnktcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LWNvbXBhbnktcHJvZmlsZS9FOlxcQmVsYWxcXHByb2plY3RzXFxwcm9kdWN0aW9uLWJ1aWxkXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcY29tb24tc3R5bGVzXFxkZXNpZ24tcGFsZXR0ZS5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcHJvZmlsZS1tYW5hZ2VtZW50L2NyZWF0ZS1uZXctcHJvZmlsZS9uZXctY29tcGFueS1wcm9maWxlL0U6XFxCZWxhbFxccHJvamVjdHNcXHByb2R1Y3Rpb24tYnVpbGRcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxccHJvZmlsZS1tYW5hZ2VtZW50XFxjcmVhdGUtbmV3LXByb2ZpbGVcXG5ldy1jb21wYW55LXByb2ZpbGVcXG5ldy1jb21wYW55LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9wcm9maWxlLW1hbmFnZW1lbnQvY3JlYXRlLW5ldy1wcm9maWxlL25ldy1jb21wYW55LXByb2ZpbGUvRTpcXEJlbGFsXFxwcm9qZWN0c1xccHJvZHVjdGlvbi1idWlsZFxcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGNvbW9uLXN0eWxlc1xcbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0o7QURDSTtFQUNFLFVBQUE7RUFDQSwwREFBQTtBQ0NOO0FERVE7RUFDRSx5QkVkUTtFRmVSLFNBQUE7QUNBVjtBREVVO0VBQ0UsdUJBQUE7QUNBWjtBREdVO0VBQ0UseUJBQUE7QUNEWjtBREtRO0VBQ0UsU0FBQTtFQUNBLHlCRTVCUTtFRjZCUixZQUFBO0FDSFY7QURRUTtFQUNFLGdDQUFBO0FDTlY7QURXSTtFQUNFLFVBQUE7RUFDQSwwREFBQTtBQ1ROO0FEWVE7RUFDRSx5QkVoRE07RUZpRE4sU0FBQTtBQ1ZWO0FEWVU7RUFDRSx1QkFBQTtBQ1ZaO0FEYVU7RUFDRSx5QkFBQTtBQ1haO0FEZVE7RUFDRSxTQUFBO0VBQ0EseUJFOURNO0VGK0ROLFlBQUE7QUNiVjtBRGtCUTtFQUNFLGdDQUFBO0FDaEJWO0FEcUJJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNuQk47QURxQk07RUFDRSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNuQlI7QURzQk07RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0V6RU07RUYwRU4sMkJBQUE7RUFDQSxlQUFBO0VBQ0EsY0VwR1U7RUZxR1Ysa0JFaEZnQjtBRDREeEI7QURzQlE7RUFDRSxZQUFBO0FDcEJWO0FEeUJJO0VBQ0UsV0FBQTtBQ3ZCTjtBRHlCTTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FDdkJSO0FENkJBO0VBQ0UsYUFBQTtBQzFCRjtBRDRCRTtFQUNFLGNBQUE7QUMxQko7QUVwR0E7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FGdUdGO0FFcEdBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRnVHRjtBRXBHQTtFQUNFLHNCQUFBO0VBQ0EsNENBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FGdUdGO0FFcEdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FGdUdGO0FFbEdFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBRnFHSjtBRWxHRTtFQUNFLHdCQUFBO0VBQ0EsMENBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FGb0dKO0FFakdFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUZtR0o7QUVqR0k7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBRm1HTjtBRWpHTTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBRm1HUjtBRTlGRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBRmdHSjtBRTlGSTtFQUNFLDRCQUFBO0FGZ0dOO0FFN0ZJO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7QUYrRk47QUV6RkU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlGQUFBO0FGNEZKO0FFekZFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpRkFBQTtBRjJGSjtBRXRGQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBRnlGRjtBRXRGQTtFQUNFLHVCQUFBO0FGeUZGO0FFdEZBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUZ5RkY7QUV0RkE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FGeUZGO0FFdEZBO0VBQ0UsV0FBQTtBRnlGRjtBRXRGQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUZ5RkY7QUV0RkE7RUFDRSw0Q0FBQTtBRnlGRjtBRXJGQTtFQUNFLGVBQUE7QUZ3RkY7QUV6RkE7RUFDRSxlQUFBO0FGd0ZGO0FFekZBO0VBQ0UsZUFBQTtBRndGRjtBRXpGQTtFQUNFLGVBQUE7QUZ3RkY7QUVwRkE7RUFDRSxzQkFBQTtFQUNBLDRDQUFBO0FGdUZGO0FFcEZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FGdUZGO0FFcEZBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRnVGRjtBRXBGQTtFQUNFLHNCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FGdUZGO0FFcEZBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FGdUZGO0FFcEZBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUZ1RkY7QUVwRkE7RUFDRSxlQUFBO0FGdUZGO0FFcEZBO0VBQ0Usa0JBQUE7QUZ1RkY7QUVwRkE7RUFDRSxnQkFBQTtBRnVGRjtBRXBGQTtFQUNFLGFBQUE7QUZ1RkY7QUVuRkU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHlCRHhNYztBRDhSbEI7QUVwRkk7RUNuS0YsK0NBQUE7RUFDQSx1Q0FBQTtBSDBQRjtBRXBGSTtFQ3ZLRixnREFBQTtFQUNBLHdDQUFBO0FIOFBGO0FFcEZJO0VDM0tGLGlEQUFBO0VBQ0EseUNBQUE7QUhrUUY7QUVwRkk7RUMvS0YsaURBQUE7RUFDQSx5Q0FBQTtBSHNRRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wcm9maWxlLW1hbmFnZW1lbnQvY3JlYXRlLW5ldy1wcm9maWxlL25ldy1jb21wYW55LXByb2ZpbGUvbmV3LWNvbXBhbnktcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGVwcGVyLWdyaWQge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgLnN0ZXBwZXItZ3JpZF9zdGVwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3BhY2l0eTogLjY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJi5fYWN0aXZlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxuXHJcbiAgICAgIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIHtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRlZXAtYmx1ZS1jb2xvcjtcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuXHJcbiAgICAgICAgICBkaXYuaW1hZ2Uge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkZWVwLWJsdWUtY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtYm9yZGVyIHtcclxuICAgICAgICBociB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGRlZXAtYmx1ZS1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLl9hY3RpdmF0ZWQge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG5cclxuICAgICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24ge1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuXHJcbiAgICAgICAgICBkaXYuaW1hZ2Uge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciB7XHJcbiAgICAgICAgaHIge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXByaW1hcnk7XHJcblxyXG4gICAgICAgICYuX2xhc3Qge1xyXG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIGhyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMjRweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc3RlcHBlci1ncmlkLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICYuX2FjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuIiwiLnN0ZXBwZXItZ3JpZCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjI4NjI7XG4gIGJvcmRlcjogMDtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmUgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IGRpdi5pbWFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXY6aG92ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjQTZCMUMzO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBsYWJlbCB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2Mjg2MjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtYm9yZGVyIGhyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNjI4NjI7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzN0FEQTtcbiAgYm9yZGVyOiAwO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2YXRlZCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYgZGl2LmltYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdjpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBNkIxQzM7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGxhYmVsIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM3QURBO1xuICBjb2xvcjogd2hpdGU7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIgaHIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzQzN0FEQTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAjQTZCMUMzO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGxhYmVsIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAjQTZCMUMzO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjQTZCMUMzO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBsYWJlbC5fbGFzdCB7XG4gIHdpZHRoOiAxNTBweDtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIgaHIge1xuICBtYXJnaW4tdG9wOiAtMjRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0E2QjFDMztcbn1cblxuLnN0ZXBwZXItZ3JpZC1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zdGVwcGVyLWdyaWQtY29udGVudC5fYWN0aXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jaGVja2JveF9sYWJlbCB7XG4gIGhlaWdodDogMTNweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzgyODI4MiAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogVWJ1bnR1ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XG59XG5cbi5ib29raW5nLWhlYWRlciB7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW4tbGVmdDogMjJweDtcbn1cblxuLm91dGVyLWJhc2ljIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm94LXNoYWRvdzogM3B4IDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xufVxuXG4ub3V0ZXItYmFzaWNGb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0LmJvb2tpbmdzX2RhdGVwaWNrZXIge1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBtYXgtd2lkdGg6IDEzOHB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC51aS5iYXNpYy5mbG9hdGluZy5idXR0b24ge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiByZ2JhKDE1MiwgMTUyLCAxNTIsIDAuNikgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTFweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuaWNvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xuICB3aWR0aDogMjRweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbi5jYWwge1xuICB3aWR0aDogMThweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuc2VhcmNoLmRyb3Bkb3duIHtcbiAgd2lkdGg6IDIxOHB4O1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5zZWFyY2guZHJvcGRvd24gLnNlYXJjaCB7XG4gIG1hcmdpbi1sZWZ0OiA0MnB4ICFpbXBvcnRhbnQ7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnNlYXJjaC5kcm9wZG93biAuZGVmYXVsdC50ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogOHB4IDAgMCAzOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib29raW5nc19idG4tcGFuZWwgLnNlY29uZGFyeSB7XG4gIHdpZHRoOiAxMzUuNjRweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0RjRGO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4uYm9va2luZ3NfYnRuLXBhbmVsIC5wcmltYXJ5IHtcbiAgd2lkdGg6IDEzNS42NHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLnRyYWlsaW5nX2J1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG59XG5cbi5uZXdBZ2VuY3lfdG9wQWxpZ24ge1xuICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcbn1cblxudGQge1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50aCB7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb25maXJtIHtcbiAgd2lkdGg6IDYzcHg7XG59XG5cbi5yZWNDb25maXJtIHtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogNjJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcyRDQ0RjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMC41dmg7XG59XG5cbi50YWIuc2VnbWVudCB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4uZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ub3V0ZXItYmFzaWNfc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm94LXNoYWRvdzogM3B4IDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5vdXRlci1iYXNpY0Zvcm1fc2Vjb25kYXJ5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLnJpZ2h0X2xpbmtzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgcGFkZGluZy10b3A6IDF2aDtcbiAgcGFkZGluZy1yaWdodDogOHZoO1xufVxuXG4ub3V0ZXItYmFzaWNfdGVydGlhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG59XG5cbi5vdXRlci1iYXNpY0Zvcm1fdGVydGlhcnkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiA1MHB4O1xufVxuXG5ociB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNFMEUwRTA7XG59XG5cbi5kcm9wZG93biAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmJvb2tpbmdzX2J0bi1wYW5lbC50cmFpbGluZ19idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDQ1cHg7XG59XG5cbi5yaWdodF9saW5rcyB7XG4gIHBhZGRpbmctdG9wOiAxdmg7XG59XG5cbi51aS5mbHVpZC5jb250YWluZXIge1xuICBwYWRkaW5nOiAyOHB4O1xufVxuXG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYgZGl2LmltYWdlIHtcbiAgd2lkdGg6IDIycHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTZCMUMzO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IGRpdi5pbWFnZS5fZ3JvdXAge1xuICAtd2Via2l0LW1hc2s6IHVybChcIi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9ncm91cC5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgbWFzazogdXJsKFwiLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL2dyb3VwLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IGRpdi5pbWFnZS5fdHJhdmVsIHtcbiAgLXdlYmtpdC1tYXNrOiB1cmwoXCIuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvdHJhdmVsLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICBtYXNrOiB1cmwoXCIuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvdHJhdmVsLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IGRpdi5pbWFnZS5fcGF5bWVudCB7XG4gIC13ZWJraXQtbWFzazogdXJsKFwiLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3BheW1lbnQuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG4gIG1hc2s6IHVybChcIi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9wYXltZW50LnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IGRpdi5pbWFnZS5fcmVtYXJrcyB7XG4gIC13ZWJraXQtbWFzazogdXJsKFwiLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3JlbWFya3Muc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG4gIG1hc2s6IHVybChcIi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9yZW1hcmtzLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xufSIsIiRwcmltYXJ5LWNvbG9yOiAjNDM3QURBO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjQTZCMUMzO1xyXG4kZGVlcC1ibHVlLWNvbG9yOiAjMDYyODYyO1xyXG4kbGlnaHQtc21va2UtY29sb3I6ICNlNWU1ZTU7XHJcbiR2b2lsYS1ncmVlbjogIzg0QkM2QTtcclxuJHB1cmUtd2hpdGU6IHdoaXRlO1xyXG4kZmF1bHQtY29sb3I6ICNERTc5Nzk7XHJcbiR3YXJuaW5nLWNvbG9yOiAjRUNDMDRFO1xyXG4kc3VjY2Vzcy1jb2xvcjogIzczQjI1RDtcclxuXHJcbiRib2R5LWJhc2U6ICNmZmY7XHJcbiRjb3Jwb3JhdGUtYmx1ZS1iYXNlOiAjNDU2N0FDO1xyXG5cclxuJGNvbnRhaW5lci1iYXNlOiB3aGl0ZTtcclxuJGNvbnRhaW5lci1iYXNlLXNoYWRvdzogMCAwcHggM3B4IHJnYmEoNjAsIDY0LCA2NywgMC4zKSwgMCA0cHggOHB4IDJweCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpO1xyXG4kY29udGFpbmVyLWRyb3Bkb3ducy1zaGFkb3c6IDBweCA4cHggMTRweCByZ2JhKDAsIDU4LCAxNjQsIC4yKTtcclxuXHJcbiRwcmltYXJ5LXNoYWRvdzogMHB4IDQuODNweCAxNnB4IHJnYmEoNjcsIDEyMiwgMjE4LCAuNSk7XHJcbiRsaWdodC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgNTgsIDE2NCwgLjI1KTtcclxuJGZhZGVkLXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgxNjcsIDE3MywgMTgyLCAuMik7XHJcbiRsaWdodC1leHRlbmRlZC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgNTgsIDE2NCwgLjI1KTtcclxuXHJcbiRib3JkZXItcmFkaXVzLXByaW1hcnk6IDhweDtcclxuJGJvcmRlci1yYWRpdXMtc2Vjb25kYXJ5OiA2cHg7XHJcblxyXG4kZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XHJcblxyXG4kdG9hc3QtaW5mby1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiR0b2FzdC1pbmZvLXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDExMSwgMCwgMCwgLjIpO1xyXG5cclxuJHRvYXN0LWVycm9yLWNvbG9yOiAkZmF1bHQtY29sb3I7XHJcbiR0b2FzdC1lcnJvci1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxMTEsIDAsIDAsIC4yKTtcclxuXHJcbiR0b2FzdC13YXJuaW5nLWNvbG9yOiAkd2FybmluZy1jb2xvcjtcclxuJHRvYXN0LXdhcm5pbmctc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTc3LCAxMjcsIDAsIC4yKTtcclxuXHJcbiR0b2FzdC1zdWNjZXNzLWNvbG9yOiAkc3VjY2Vzcy1jb2xvcjtcclxuJHRvYXN0LXN1Y2Nlc3Mtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMzQsIDEzMCwgMCwgLjIpO1xyXG4iLCJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi8uLi9jb21vbi1zdHlsZXMvY29tbW9uLnNjc3NcIjtcclxuXHJcbi5jaGVja2JveF9sYWJlbCB7XHJcbiAgaGVpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM4MjgyODIgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogVWJ1bnR1ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9va2luZy1oZWFkZXIge1xyXG4gIGNvbG9yOiAjNEY0RjRGO1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIycHg7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpYyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWNGb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IHtcclxuXHJcbiAgJi5ib29raW5nc19kYXRlcGlja2VyIHtcclxuICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEzOHB4XHJcbiAgfVxyXG5cclxuICAudWkuYmFzaWMuZmxvYXRpbmcuYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiByZ2JhKDE1MiwgMTUyLCAxNTIsIDAuNikgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4gIH1cclxuXHJcbiAgLmljb24ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuXHJcbiAgICAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgICB3aWR0aDogMjRweDtcclxuICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG5cclxuICAgICAgJi5jYWwge1xyXG4gICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWFyY2guZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDIxOHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG5cclxuICAgIC5zZWFyY2gge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNDJweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZWZhdWx0LnRleHQge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nOiA4cHggMCAwIDM4cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ib29raW5nc19idG4tcGFuZWwge1xyXG4gIC5zZWNvbmRhcnkge1xyXG4gICAgd2lkdGg6IDEzNS42NHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRGNEY0RjtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB9XHJcblxyXG4gIC5wcmltYXJ5IHtcclxuICAgIHdpZHRoOiAxMzUuNjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLnRyYWlsaW5nX2J1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4ubmV3QWdlbmN5X3RvcEFsaWduIHtcclxuICBoZWlnaHQ6IDM1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxudGQge1xyXG4gIGNvbG9yOiAjNEY0RjRGO1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGgge1xyXG4gIGNvbG9yOiAjNEY0RjRGO1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29uZmlybSB7XHJcbiAgd2lkdGg6IDYzcHg7XHJcbn1cclxuXHJcbi5yZWNDb25maXJtIHtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgd2lkdGg6IDYycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcyRDQ0RjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy10b3A6IC41dmg7XHJcbn1cclxuXHJcbi50YWIuc2VnbWVudCB7XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcblxyXG4uZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcblxyXG4ub3V0ZXItYmFzaWNfc2Vjb25kYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWNGb3JtX3NlY29uZGFyeSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5yaWdodF9saW5rcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBhZGRpbmctdG9wOiAxdmg7XHJcbiAgcGFkZGluZy1yaWdodDogOHZoO1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWNfdGVydGlhcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgYm94LXNoYWRvdzogM3B4IDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljRm9ybV90ZXJ0aWFyeSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbn1cclxuXHJcbmhyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJvcmRlcjogMC41cHggc29saWQgI0UwRTBFMDtcclxufVxyXG5cclxuLmRyb3Bkb3duIC50ZXh0IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5ib29raW5nc19idG4tcGFuZWwudHJhaWxpbmdfYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcbi5yaWdodF9saW5rcyB7XHJcbiAgcGFkZGluZy10b3A6IDF2aDtcclxufVxyXG5cclxuLnVpLmZsdWlkLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMjhweDtcclxufVxyXG5cclxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IHtcclxuICBkaXYuaW1hZ2Uge1xyXG4gICAgd2lkdGg6IDIycHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcblxyXG4gICAgJi5fZ3JvdXAge1xyXG4gICAgICBAaW5jbHVkZSBtYXNrLXN2Zy1kaXYoJy4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9ncm91cC5zdmcnKTtcclxuICAgIH1cclxuXHJcbiAgICAmLl90cmF2ZWwge1xyXG4gICAgICBAaW5jbHVkZSBtYXNrLXN2Zy1kaXYoJy4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy90cmF2ZWwuc3ZnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5fcGF5bWVudCB7XHJcbiAgICAgIEBpbmNsdWRlIG1hc2stc3ZnLWRpdignLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3BheW1lbnQuc3ZnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5fcmVtYXJrcyB7XHJcbiAgICAgIEBpbmNsdWRlIG1hc2stc3ZnLWRpdignLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3JlbWFya3Muc3ZnJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBtaXhpbiBwbGFjZWhvbGRlciB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcblxyXG4gICY6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcblxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjb2xvci1vcGFjaXR5KCRjb2xvciwgJG9wYWNpdHk6IDAuMykge1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvcjtcclxuICAvKiBUaGUgRmFsbGJhY2sgKi9cclxuICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvciwgJG9wYWNpdHkpO1xyXG59XHJcblxyXG5AbWl4aW4gaGlkZU51bWJlckZpZWxkQXJyb3dzIHtcclxuXHJcbiAgLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXHJcbiAgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbiAgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAvKiBGaXJlZm94ICovXHJcbiAgaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWFzay1zdmctZGl2KCRpbWcpIHtcclxuICAtd2Via2l0LW1hc2s6IHVybCgkaW1nKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gIG1hc2s6IHVybCgkaW1nKSBuby1yZXBlYXQgY2VudGVyO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile.component.ts":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile.component.ts ***!
    \*******************************************************************************************************************/

  /*! exports provided: NewCompanyProfileComponent */

  /***/
  function srcAppLayoutProfileManagementCreateNewProfileNewCompanyProfileNewCompanyProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewCompanyProfileComponent", function () {
      return NewCompanyProfileComponent;
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

    var NewCompanyProfileComponent = /*#__PURE__*/function () {
      function NewCompanyProfileComponent(route, ProfileManagementService, fb) {
        var _this = this;

        _classCallCheck(this, NewCompanyProfileComponent);

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
          follow_up: this.fb.array([this.fb.group(this.initFollow_up())])
        });

        this.createNewCompanyProfile = function () {
          _this.newCompanyProfileObj.company_profile_id = _this.newCompanyProfileId;
          _this.newCompanyProfileObj.organisation_id = "";
          _this.newCompanyProfileObj.group_name = _this.newCompanyProfileForm.get('group_name').value;
          _this.newCompanyProfileObj.group_description = _this.newCompanyProfileForm.get('group_description').value;
          _this.newCompanyProfileObj.group_index = _this.newCompanyProfileForm.get('group_index').value;
          _this.newCompanyProfileObj.languages = _this.newCompanyProfileForm.get('languages').value;
          _this.newCompanyProfileObj.home = _this.newCompanyProfileForm.get('home').value;
          _this.newCompanyProfileObj.number = JSON.stringify(_this.newCompanyProfileForm.get('number').value);
          _this.newCompanyProfileObj.email = JSON.stringify(_this.newCompanyProfileForm.get('email').value);
          _this.newCompanyProfileObj.address = JSON.stringify(_this.newCompanyProfileForm.get('address').value);
          _this.newCompanyProfileObj.special_needs = JSON.stringify(_this.newCompanyProfileForm.get('special_needs').value);
          _this.newCompanyProfileObj.miscellaneous_ticketing = JSON.stringify(_this.newCompanyProfileForm.get('miscellaneous_ticketing').value);
          _this.newCompanyProfileObj.tour_code = JSON.stringify(_this.newCompanyProfileForm.get('tour_code').value);
          _this.newCompanyProfileObj.ticketing_arrangement = JSON.stringify(_this.newCompanyProfileForm.get('ticketing_arrangement').value);
          _this.newCompanyProfileObj.validating_carrier = JSON.stringify(_this.newCompanyProfileForm.get('validating_carrier').value);
          _this.newCompanyProfileObj.original_issue = JSON.stringify(_this.newCompanyProfileForm.get('original_issue').value); //here

          _this.newCompanyProfileObj.shadow_destination = _this.newCompanyProfileForm.get('shadow_destination').value;
          _this.newCompanyProfileObj.keywords = JSON.stringify(_this.newCompanyProfileForm.get('keywords').value);
          _this.newCompanyProfileObj.default_home_airport = _this.newCompanyProfileForm.get('default_home_airport').value;
          _this.newCompanyProfileObj.default_arrival_ariport = _this.newCompanyProfileForm.get('default_arrival_ariport').value;
          _this.newCompanyProfileObj.dep_contact_name = _this.newCompanyProfileForm.get('dep_contact_name').value;
          _this.newCompanyProfileObj.agent_contact_name = _this.newCompanyProfileForm.get('agent_contact_name').value;
          _this.newCompanyProfileObj.delivery_method = _this.newCompanyProfileForm.get('delivery_method').value;
          _this.newCompanyProfileObj.policy_override_authorization = _this.newCompanyProfileForm.get('policy_override_authorization').value;
          _this.newCompanyProfileObj.prepaid_ticket_authorization = _this.newCompanyProfileForm.get('prepaid_ticket_authorization').value;
          _this.newCompanyProfileObj.bank_accounts = JSON.stringify(_this.newCompanyProfileForm.get('bank_accounts').value);
          _this.newCompanyProfileObj.direct_debit_authorized = _this.newCompanyProfileForm.get('direct_debit_authorized').value;
          _this.newCompanyProfileObj.forms_of_payment = JSON.stringify(_this.newCompanyProfileForm.get('forms_of_payment').value); //this.newCompanyProfileObj.fare_price_override = JSON.stringify(this.newCompanyProfileForm.get('responsible_office').value);

          _this.newCompanyProfileObj.endorsements = JSON.stringify(_this.newCompanyProfileForm.get('endorsements').value);
          _this.newCompanyProfileObj.discounts = _this.newCompanyProfileForm.get('discounts').value;
          _this.newCompanyProfileObj.commissions = JSON.stringify(_this.newCompanyProfileForm.get('commissions').value);
          _this.newCompanyProfileObj.accounting = JSON.stringify(_this.newCompanyProfileForm.get('accounting').value);
          _this.newCompanyProfileObj.remarks = JSON.stringify(_this.newCompanyProfileForm.get('remarks').value);
          _this.newCompanyProfileObj.profile_notes = JSON.stringify(_this.newCompanyProfileForm.get('profile_notes').value);
          _this.newCompanyProfileObj.priority_lines1 = JSON.stringify(_this.newCompanyProfileForm.get('priority_lines1').value);
          _this.newCompanyProfileObj.priority_lines2 = JSON.stringify(_this.newCompanyProfileForm.get('priority_lines2').value);
          _this.newCompanyProfileObj.follow_up = JSON.stringify(_this.newCompanyProfileForm.get('follow_up').value);
          console.log("You shall not pass-----", _this.newCompanyProfileObj.value);

          _this.ProfileManagementService.NewCompanyProfile(_this.newCompanyProfileObj).subscribe(function (results) {
            console.log(results);
          });
        };

        this.updateNewCompanyProfile = function () {
          _this.newCompanyProfileObj.company_profile_id = _this.companyProfileId;
          _this.newCompanyProfileObj.organisation_id = "";
          _this.newCompanyProfileObj.group_name = _this.newCompanyProfileForm.get('group_name').value;
          _this.newCompanyProfileObj.group_description = _this.newCompanyProfileForm.get('group_description').value;
          _this.newCompanyProfileObj.group_index = _this.newCompanyProfileForm.get('group_index').value;
          _this.newCompanyProfileObj.languages = _this.newCompanyProfileForm.get('languages').value;
          _this.newCompanyProfileObj.number = JSON.stringify(_this.newCompanyProfileForm.get('number').value);
          _this.newCompanyProfileObj.email = JSON.stringify(_this.newCompanyProfileForm.get('email').value);
          _this.newCompanyProfileObj.address = JSON.stringify(_this.newCompanyProfileForm.get('address').value);
          _this.newCompanyProfileObj.special_needs = JSON.stringify(_this.newCompanyProfileForm.get('special_needs').value);
          _this.newCompanyProfileObj.miscellaneous_ticketing = JSON.stringify(_this.newCompanyProfileForm.get('miscellaneous_ticketing').value);
          _this.newCompanyProfileObj.tour_code = JSON.stringify(_this.newCompanyProfileForm.get('tour_code').value);
          _this.newCompanyProfileObj.ticketing_arrangement = JSON.stringify(_this.newCompanyProfileForm.get('ticketing_arrangement').value);
          _this.newCompanyProfileObj.validating_carrier = JSON.stringify(_this.newCompanyProfileForm.get('validating_carrier').value);
          _this.newCompanyProfileObj.original_issue = JSON.stringify(_this.newCompanyProfileForm.get('original_issue').value); //here

          _this.newCompanyProfileObj.shadow_destination = _this.newCompanyProfileForm.get('shadow_destination').value;
          _this.newCompanyProfileObj.keywords = JSON.stringify(_this.newCompanyProfileForm.get('keywords').value);
          _this.newCompanyProfileObj.default_home_airport = _this.newCompanyProfileForm.get('default_home_airport').value;
          _this.newCompanyProfileObj.default_arrival_ariport = _this.newCompanyProfileForm.get('default_arrival_ariport').value;
          _this.newCompanyProfileObj.dep_contact_name = _this.newCompanyProfileForm.get('dep_contact_name').value;
          _this.newCompanyProfileObj.agent_contact_name = _this.newCompanyProfileForm.get('agent_contact_name').value;
          _this.newCompanyProfileObj.delivery_method = _this.newCompanyProfileForm.get('delivery_method').value;
          _this.newCompanyProfileObj.policy_override_authorization = _this.newCompanyProfileForm.get('policy_override_authorization').value;
          _this.newCompanyProfileObj.prepaid_ticket_authorization = _this.newCompanyProfileForm.get('prepaid_ticket_authorization').value;
          _this.newCompanyProfileObj.bank_accounts = JSON.stringify(_this.newCompanyProfileForm.get('bank_accounts').value);
          _this.newCompanyProfileObj.direct_debit_authorized = _this.newCompanyProfileForm.get('direct_debit_authorized').value;
          _this.newCompanyProfileObj.forms_of_payment = JSON.stringify(_this.newCompanyProfileForm.get('forms_of_payment').value); //this.newCompanyProfileObj.fare_price_override = JSON.stringify(this.newCompanyProfileForm.get('responsible_office').value);

          _this.newCompanyProfileObj.endorsements = JSON.stringify(_this.newCompanyProfileForm.get('endorsements').value);
          _this.newCompanyProfileObj.discounts = _this.newCompanyProfileForm.get('discounts').value;
          _this.newCompanyProfileObj.commissions = JSON.stringify(_this.newCompanyProfileForm.get('commissions').value);
          _this.newCompanyProfileObj.accounting = JSON.stringify(_this.newCompanyProfileForm.get('accounting').value);
          _this.newCompanyProfileObj.remarks = JSON.stringify(_this.newCompanyProfileForm.get('remarks').value);
          _this.newCompanyProfileObj.profile_notes = JSON.stringify(_this.newCompanyProfileForm.get('profile_notes').value);
          _this.newCompanyProfileObj.priority_lines1 = JSON.stringify(_this.newCompanyProfileForm.get('priority_lines1').value);
          _this.newCompanyProfileObj.priority_lines2 = JSON.stringify(_this.newCompanyProfileForm.get('priority_lines2').value);
          _this.newCompanyProfileObj.follow_up = JSON.stringify(_this.newCompanyProfileForm.get('follow_up').value);
          console.log("You shall not pass", _this.newCompanyProfileObj);

          _this.ProfileManagementService.UpdateCompanyProfile(_this.companyProfileId, _this.newCompanyProfileObj).subscribe(function (results) {
            console.log(results);
          });
        };

        var uniqueProfileID = Math.random().toString(36).substring(7);
        console.log(uniqueProfileID);
        this.newCompanyProfileId = uniqueProfileID + "Amedius";
        this.route.queryParams.subscribe(function (params) {
          console.log(params);
          _this.companyProfileId = params.company_profile_id;

          _this.newCompanyProfileForm.patchValue({
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
            discounts: params.discounts
          });

          var number = _this.parsingArrayParams(params.number, _this.number);

          var email = _this.parsingArrayParams(params.email, _this.email);

          var address = _this.parsingArrayParams(params.address, _this.address);

          var specialNeeds = _this.parsingArrayParams(params.special_needs, _this.special_needs);

          var miscellaneousTicketing = _this.parsingArrayParams(params.misc_ticketing, _this.misc_ticketing);

          var tourCode = _this.parsingArrayParams(params.tour_code, _this.tour_code);

          var ticketingArrangememt = _this.parsingArrayParams(params.ticketing_arrangement, _this.ticketing_arrangements);

          var originalIssue = _this.parsingArrayParams(params.original_issue, _this.original_issue);

          var keywords = _this.parsingArrayParams(params.keywords, _this.keywords);

          var bankAccounts = _this.parsingArrayParams(params.bank_accounts, _this.bank_accounts);

          var formsOfPayment = _this.parsingArrayParams(params.forms_of_payment, _this.forms_of_payment);

          var farePriceOverride = _this.parsingArrayParams(params.fare_price_override, _this.fare_price_override);

          var endorsements = _this.parsingArrayParams(params.endorsements, _this.endorsements);

          var commission = _this.parsingArrayParams(params.commission, _this.commission);

          var accounting = _this.parsingArrayParams(params.accounting, _this.accounting);

          var remarks = _this.parsingArrayParams(params.remarks, _this.remarks);

          var profileNotes = _this.parsingArrayParams(params.profile_notes, _this.profile_notes);

          var priority_lines1 = _this.parsingArrayParams(params.priority_lines1, _this.priority_lines1);

          var priorityLines2 = _this.parsingArrayParams(params.priority_lines2, _this.priority_lines2);

          var followUP = _this.parsingArrayParams(params.follow_up, _this.follow_up);
        });
      }

      _createClass(NewCompanyProfileComponent, [{
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
        key: "initSpecial_needs",
        value: function initSpecial_needs() {
          return {
            explosionIndicator: [''],
            specialNeedsType: [''],
            specialNeedsDesc: [''],
            specialNeedsFreeText: [''],
            specialNeedsAirlineCode: [''],
            specialNeedsFlightType: ['']
          };
        }
      }, {
        key: "initMisc_ticketing",
        value: function initMisc_ticketing() {
          return {
            miscellaneous_text: [''],
            miscellaneous_provider: ['']
          };
        }
      }, {
        key: "initTour_code",
        value: function initTour_code() {
          return {
            tourCode_text: [''],
            tourCode_provider: ['']
          };
        }
      }, {
        key: "initTicketing_arrangements",
        value: function initTicketing_arrangements() {
          return {
            ticketingArrangement_provider: [''],
            validatingCarrier_provider: ['']
          };
        }
      }, {
        key: "initValidatingCarrier",
        value: function initValidatingCarrier() {
          return {
            validatingCarrier_provider: ['']
          };
        }
      }, {
        key: "initOriginalIssue",
        value: function initOriginalIssue() {
          return {
            originalIssue_text: ['']
          };
        }
      }, {
        key: "initKeywords",
        value: function initKeywords() {
          return {
            keywords: [''],
            airline: [''],
            keywordText: [''],
            statusCode: [''],
            numberParty: ['']
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
        key: "initComission",
        value: function initComission() {
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
        //   this.number_details.removeAt(index);
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
        key: "addMoreSpecialNeeds",
        value: function addMoreSpecialNeeds() {
          this.special_needs.push(this.fb.group(this.initSpecial_needs()));
        }
      }, {
        key: "removeSpecialNeeds",
        value: function removeSpecialNeeds(index) {
          this.special_needs.removeAt(index);
        }
      }, {
        key: "addMoremisc_ticketing",
        value: function addMoremisc_ticketing() {
          this.misc_ticketing.push(this.fb.group(this.initMisc_ticketing()));
        }
      }, {
        key: "removeMisc_ticketing",
        value: function removeMisc_ticketing(index) {
          this.misc_ticketing.removeAt(index);
        }
      }, {
        key: "addMoreTicketing_arrangements",
        value: function addMoreTicketing_arrangements() {
          this.ticketing_arrangements.push(this.fb.group(this.initTicketing_arrangements()));
        }
      }, {
        key: "removeTicketing_arrangement",
        value: function removeTicketing_arrangement(index) {
          this.ticketing_arrangements.removeAt(index);
        }
      }, {
        key: "addMoreValidatingCarrier",
        value: function addMoreValidatingCarrier() {
          this.validating_carrier.push(this.fb.group(this.initValidatingCarrier()));
        }
      }, {
        key: "removeValidatingCarrier",
        value: function removeValidatingCarrier(index) {
          this.validating_carrier.removeAt(index);
        }
      }, {
        key: "addMoreOriginal_issue",
        value: function addMoreOriginal_issue() {
          this.original_issue.push(this.fb.group(this.initOriginalIssue()));
        }
      }, {
        key: "removeOriginalIssues",
        value: function removeOriginalIssues(index) {
          this.original_issue.removeAt(index);
        }
      }, {
        key: "addMoreTour_code",
        value: function addMoreTour_code() {
          this.tour_code.push(this.fb.group(this.initTour_code()));
        }
      }, {
        key: "removeTourCode",
        value: function removeTourCode(index) {
          this.tour_code.removeAt(index);
        }
      }, {
        key: "addMoreKeywords",
        value: function addMoreKeywords() {
          this.keywords.push(this.fb.group(this.initKeywords()));
        }
      }, {
        key: "removeKeywords",
        value: function removeKeywords(index) {
          this.keywords.removeAt(index);
        }
      }, {
        key: "addMoreForms_of_payment",
        value: function addMoreForms_of_payment() {
          this.forms_of_payment.push(this.fb.group(this.initForms_of_payment()));
        }
      }, {
        key: "removeForm_of_payment",
        value: function removeForm_of_payment(index) {
          this.forms_of_payment.removeAt(index);
        }
      }, {
        key: "addMoreFair_price_override",
        value: function addMoreFair_price_override() {
          this.fare_price_override.push(this.fb.group(this.initFare_price_override()));
        }
      }, {
        key: "removeFair_price_override",
        value: function removeFair_price_override() {
          this.fare_price_override;
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
          this.commission.push(this.fb.group(this.initComission()));
        }
      }, {
        key: "removeComission",
        value: function removeComission(index) {
          this.commission.removeAt(index);
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
          $('.menu .item').tab();
          $('.ui.dropdown').dropdown();
        }
      }, {
        key: "setDropDownType",
        value: function setDropDownType(value, type) {
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
      }, {
        key: "number",
        get: function get() {
          return this.newCompanyProfileForm.get('number');
        }
      }, {
        key: "email",
        get: function get() {
          return this.newCompanyProfileForm.get('email');
        }
      }, {
        key: "address",
        get: function get() {
          return this.newCompanyProfileForm.get('address');
        }
      }, {
        key: "special_needs",
        get: function get() {
          return this.newCompanyProfileForm.get('special_needs');
        }
      }, {
        key: "misc_ticketing",
        get: function get() {
          return this.newCompanyProfileForm.get('miscellaneous_ticketing');
        }
      }, {
        key: "ticketing_arrangements",
        get: function get() {
          return this.newCompanyProfileForm.get('ticketing_arrangement');
        }
      }, {
        key: "validating_carrier",
        get: function get() {
          return this.newCompanyProfileForm.get('validating_carrier');
        }
      }, {
        key: "tour_code",
        get: function get() {
          return this.newCompanyProfileForm.get('tour_code');
        }
      }, {
        key: "original_issue",
        get: function get() {
          return this.newCompanyProfileForm.get('original_issue');
        }
      }, {
        key: "keywords",
        get: function get() {
          return this.newCompanyProfileForm.get('keywords');
        }
      }, {
        key: "bank_accounts",
        get: function get() {
          return this.newCompanyProfileForm.get('bank_accounts');
        }
      }, {
        key: "forms_of_payment",
        get: function get() {
          return this.newCompanyProfileForm.get('forms_of_payment');
        }
      }, {
        key: "fare_price_override",
        get: function get() {
          return this.newCompanyProfileForm.get('fare_price_override');
        }
      }, {
        key: "endorsements",
        get: function get() {
          return this.newCompanyProfileForm.get('endorsements');
        }
      }, {
        key: "commission",
        get: function get() {
          return this.newCompanyProfileForm.get('commissions');
        }
      }, {
        key: "accounting",
        get: function get() {
          return this.newCompanyProfileForm.get('accounting');
        }
      }, {
        key: "remarks",
        get: function get() {
          return this.newCompanyProfileForm.get('remarks');
        }
      }, {
        key: "profile_notes",
        get: function get() {
          return this.newCompanyProfileForm.get('profile_notes');
        }
      }, {
        key: "priority_lines1",
        get: function get() {
          return this.newCompanyProfileForm.get('priority_lines1');
        }
      }, {
        key: "priority_lines2",
        get: function get() {
          return this.newCompanyProfileForm.get('priority_lines2');
        }
      }, {
        key: "follow_up",
        get: function get() {
          return this.newCompanyProfileForm.get('follow_up');
        }
      }]);

      return NewCompanyProfileComponent;
    }();

    NewCompanyProfileComponent.ctorParameters = function () {
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
    })], NewCompanyProfileComponent.prototype, "tab", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tabContent', {
      "static": false
    })], NewCompanyProfileComponent.prototype, "tabContent", void 0);
    NewCompanyProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-new-company-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./new-company-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./new-company-profile.component.scss */
      "./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile.component.scss"))["default"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./../create-new-profile.component.scss */
      "./src/app/layout/profile-management/create-new-profile/create-new-profile.component.scss"))["default"]]
    })], NewCompanyProfileComponent);
    /***/
  },

  /***/
  "./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile.module.ts":
  /*!****************************************************************************************************************!*\
    !*** ./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile.module.ts ***!
    \****************************************************************************************************************/

  /*! exports provided: NewCompanyProfileModule */

  /***/
  function srcAppLayoutProfileManagementCreateNewProfileNewCompanyProfileNewCompanyProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewCompanyProfileModule", function () {
      return NewCompanyProfileModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _new_company_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./new-company-profile.component */
    "./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile.component.ts");
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


    var _new_company_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./new-company-profile-routing.module */
    "./src/app/layout/profile-management/create-new-profile/new-company-profile/new-company-profile-routing.module.ts");

    var NewCompanyProfileModule = function NewCompanyProfileModule() {
      _classCallCheck(this, NewCompanyProfileModule);
    };

    NewCompanyProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_new_company_profile_component__WEBPACK_IMPORTED_MODULE_1__["NewCompanyProfileComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _new_company_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewCompanyProfileRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
    })], NewCompanyProfileModule);
    /***/
  }
}]);
//# sourceMappingURL=new-company-profile-new-company-profile-module-es5.js.map