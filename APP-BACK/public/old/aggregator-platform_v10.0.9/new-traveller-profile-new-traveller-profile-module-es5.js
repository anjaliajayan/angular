function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-traveller-profile-new-traveller-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/create-new-profile/new-traveller-profile/new-traveller-profile.component.html":
  /*!***************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/create-new-profile/new-traveller-profile/new-traveller-profile.component.html ***!
    \***************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutProfileManagementCreateNewProfileNewTravellerProfileNewTravellerProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3><span class=\"booking-header\">New Traveller Profile</span></h3>\r\n<div class=\"ui fluid container\">\r\n  <div class=\"ui grid container stepper-grid\" #tab>\r\n    <div class=\"three wide column stepper-grid_step _active\" id=\"user\" (click)=\"setActiveTab('user')\">\r\n      <div class=\"stepper-grid_step__step-icon\">\r\n        <div>\r\n          <div class=\"image _user\"></div>\r\n        </div>\r\n        <label>Personal</label>\r\n      </div>\r\n      <div class=\"stepper-grid_step__step-border\">\r\n        <hr />\r\n      </div>\r\n    </div>\r\n    <div class=\"three wide column stepper-grid_step\" id=\"travel\" (click)=\"setActiveTab('travel')\">\r\n      <div class=\"stepper-grid_step__step-icon\">\r\n        <div>\r\n          <div class=\"image _travel\"></div>\r\n        </div>\r\n        <label>Travel</label>\r\n      </div>\r\n      <div class=\"stepper-grid_step__step-border\">\r\n        <hr />\r\n      </div>\r\n    </div>\r\n    <div class=\"three wide column stepper-grid_step\" id=\"payment\" (click)=\"setActiveTab('payment')\">\r\n      <div class=\"stepper-grid_step__step-icon\">\r\n        <div>\r\n          <div class=\"image _payment\"></div>\r\n        </div>\r\n        <label>Payment</label>\r\n      </div>\r\n      <div class=\"stepper-grid_step__step-border\">\r\n        <hr />\r\n      </div>\r\n    </div>\r\n    <div class=\"three wide column stepper-grid_step\" id=\"remarks\" (click)=\"setActiveTab('remarks')\">\r\n      <div class=\"stepper-grid_step__step-icon\">\r\n        <div>\r\n          <div class=\"image _remarks\"></div>\r\n        </div>\r\n        <label>Remarks</label>\r\n      </div>\r\n      <div class=\"stepper-grid_step__step-border\">\r\n        <hr />\r\n      </div>\r\n    </div>\r\n    <div class=\"three wide column stepper-grid_step\" id=\"airline\" (click)=\"setActiveTab('airline')\">\r\n      <div class=\"stepper-grid_step__step-icon\">\r\n        <div>\r\n          <div class=\"image _airline\"></div>\r\n        </div>\r\n        <label class=\"_last\">Airline Preferences</label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <form [formGroup]=\"newTravellerProfileForm\" class=\"ui form\" #tabContent>\r\n    <div id=\"user-content\" class=\"stepper-grid-content animated fadeIn _active\">\r\n      <div class=\"outer-basic\">\r\n        <div class=\"outer-basicForm\">\r\n          <div class=\"ui form-inner grid\">\r\n            <div class=\"ui sixteen wide column grid\">\r\n              <h4>General Info</h4>\r\n            </div>\r\n            <div class=\"ui sixteen wide column grid\">\r\n              <div class=\"one wide column\">\r\n                <label>Salutation</label>\r\n                <div class=\"ui fluid search selection dropdown\">\r\n                  <input type=\"hidden\" name=\"salutation\" formControlName=\"salutation\" value=\"\">\r\n                  <i class=\"dropdown icon\"></i>\r\n                  <div class=\"default text\"></div>\r\n                  <div class=\"menu\">\r\n                    <div class=\"item\" (click)=\"setDropDownType('Mr', 'salutation')\">Mr</div>\r\n                    <div class=\"item\" (click)=\"setDropDownType('Ms', 'salutation')\">Ms</div>\r\n                    <div class=\"item\" (click)=\"setDropDownType('Mrs','salutation')\">Mrs</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"three wide column\">\r\n                <label>First Name</label>\r\n                <input type=\"text\" name=\"firstName\" formControlName=\"first_name\" placeholder=\"First Name*\" value=\"\">\r\n              </div>\r\n              <div class=\"three wide column\">\r\n                <label>Last Name</label>\r\n                <input type=\"text\" name=\"lastName\" formControlName=\"last_name\" placeholder=\"Last Name*\" value=\"\">\r\n              </div>\r\n              <div class=\"three wide column\"></div>\r\n              <div class=\"four wide column\">\r\n                <div class=\"sixteen wide column\">\r\n                  <label>Gender</label>\r\n                </div>\r\n                <div class=\"sixteen wide column\">\r\n                  <div class=\"ui radio checkbox\">\r\n                    <input type=\"radio\" name=\"radio\" checked=\"checked\">\r\n                    <label>Male</label>\r\n                  </div>\r\n                  <div class=\"ui radio checkbox\">\r\n                    <input type=\"radio\" name=\"radio\">\r\n                    <label>Female</label>\r\n                  </div>\r\n                  <div class=\"ui radio checkbox\">\r\n                    <input type=\"radio\" name=\"radio\">\r\n                    <label>Other</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui sixteen wide column grid\">\r\n              <div class=\"two wide column\">\r\n                <label>Date of Birth</label>\r\n                <div class=\"ui fluid selection dropdown\">\r\n                  <input type=\"hidden\" name=\"gender\">\r\n                  <i class=\"dropdown icon\"></i>\r\n                  <div class=\"default text\"></div>\r\n                  <div class=\"menu\">\r\n                    <div class=\"item\" data-value=\"\">1</div>\r\n                    <div class=\"item\" data-value=\"\">2</div>\r\n                    <div class=\"item\" data-value=\"\">3</div>\r\n                    <div class=\"item\" data-value=\"\">4</div>\r\n                    <div class=\"item\" data-value=\"\">5</div>\r\n                    <div class=\"item\" data-value=\"\">6</div>\r\n                    <div class=\"item\" data-value=\"\">7</div>\r\n                    <div class=\"item\" data-value=\"\">8</div>\r\n                    <div class=\"item\" data-value=\"\">9</div>\r\n                    <div class=\"item\" data-value=\"0\">10</div>\r\n                    <div class=\"item\" data-value=\"0\">11</div>\r\n                    <div class=\"item\" data-value=\"0\">12</div>\r\n                    <div class=\"item\" data-value=\"0\">13</div>\r\n                    <div class=\"item\" data-value=\"0\">14</div>\r\n                    <div class=\"item\" data-value=\"0\">15</div>\r\n                    <div class=\"item\" data-value=\"0\">16</div>\r\n                    <div class=\"item\" data-value=\"0\">17</div>\r\n                    <div class=\"item\" data-value=\"0\">18</div>\r\n                    <div class=\"item\" data-value=\"0\">19</div>\r\n                    <div class=\"item\" data-value=\"0\">20</div>\r\n                    <div class=\"item\" data-value=\"0\">21</div>\r\n                    <div class=\"item\" data-value=\"0\">22</div>\r\n                    <div class=\"item\" data-value=\"0\">23</div>\r\n                    <div class=\"item\" data-value=\"0\">24</div>\r\n                    <div class=\"item\" data-value=\"0\">25</div>\r\n                    <div class=\"item\" data-value=\"0\">26</div>\r\n                    <div class=\"item\" data-value=\"0\">27</div>\r\n                    <div class=\"item\" data-value=\"0\">28</div>\r\n                    <div class=\"item\" data-value=\"0\">29</div>\r\n                    <div class=\"item\" data-value=\"0\">30</div>\r\n                    <div class=\"item\" data-value=\"0\">31</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"three wide column\">\r\n                <label>&nbsp;</label>\r\n                <div class=\"ui fluid selection dropdown\">\r\n                  <input type=\"hidden\" name=\"gender\">\r\n                  <i class=\"dropdown icon\"></i>\r\n                  <div class=\"default text\"></div>\r\n                  <div class=\"menu\">\r\n                    <div class=\"item\" data-value=\"1\">January</div>\r\n                    <div class=\"item\" data-value=\"0\">February</div>\r\n                    <div class=\"item\" data-value=\"0\">March</div>\r\n                    <div class=\"item\" data-value=\"0\">April</div>\r\n                    <div class=\"item\" data-value=\"0\">May</div>\r\n                    <div class=\"item\" data-value=\"0\">June</div>\r\n                    <div class=\"item\" data-value=\"0\">Jul</div>\r\n                    <div class=\"item\" data-value=\"0\">August</div>\r\n                    <div class=\"item\" data-value=\"0\">September</div>\r\n                    <div class=\"item\" data-value=\"0\">October</div>\r\n                    <div class=\"item\" data-value=\"0\">November</div>\r\n                    <div class=\"item\" data-value=\"0\">December</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"two wide column\">\r\n                <label>&nbsp;</label>\r\n                <div class=\"ui fluid selection dropdown\">\r\n                  <input type=\"hidden\" name=\"gender\">\r\n                  <i class=\"dropdown icon\"></i>\r\n                  <div class=\"default text\"></div>\r\n                  <div class=\"menu\">\r\n                    <div class=\"item\" data-value=\"1\">1950</div>\r\n                    <div class=\"item\" data-value=\"0\">1951</div>\r\n                    <div class=\"item\" data-value=\"0\">1952</div>\r\n                    <div class=\"item\" data-value=\"0\">1953</div>\r\n                    <div class=\"item\" data-value=\"0\">1954</div>\r\n                    <div class=\"item\" data-value=\"0\">1955</div>\r\n                    <div class=\"item\" data-value=\"0\">1956</div>\r\n                    <div class=\"item\" data-value=\"0\">1957</div>\r\n                    <div class=\"item\" data-value=\"0\">1958</div>\r\n                    <div class=\"item\" data-value=\"0\">1959</div>\r\n                    <div class=\"item\" data-value=\"0\">1960</div>\r\n                    <div class=\"item\" data-value=\"0\">1961</div>\r\n                    <div class=\"item\" data-value=\"0\">1962</div>\r\n                    <div class=\"item\" data-value=\"0\">1963</div>\r\n                    <div class=\"item\" data-value=\"0\">1964</div>\r\n                    <div class=\"item\" data-value=\"0\">1965</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"two wide column ml\">\r\n                <label>Marital Status</label>\r\n                <div class=\"ui fluid search selection dropdown\">\r\n                  <input type=\"hidden\" name=\"marritalStatus\" formControlName=\"marital_status\" value=\"\">\r\n                  <i class=\"dropdown icon\"></i>\r\n                  <div class=\"default text\">Marital Status</div>\r\n                  <div class=\"menu\">\r\n                    <div class=\"item\" (click)=\"setDropDownType('Married', 'marital_status')\">Married\r\n                    </div>\r\n                    <div class=\"item\" (click)=\"setDropDownType('Single', 'marital_status')\">Single\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"two wide column mr\">\r\n                <label>No. of Children</label>\r\n                <input type=\"text\" name=\"noOfChildren\" formControlName=\"noOfChildren_family\" value=\"\"\r\n                  placeholder=\"Number Of Children\">\r\n              </div>\r\n              <div class=\"two wide column\">\r\n                <label>Language</label>\r\n                <div class=\"ui fluid search selection dropdown\">\r\n                  <input type=\"hidden\" name=\"language\" formControlName=\"languages\" value=\"\">\r\n                  <i class=\"dropdown icon\"></i>\r\n                  <div class=\"default text\">Language</div>\r\n                  <div class=\"menu\">\r\n                    <div class=\"item\" (click)=\"setDropDownType('Arabic', 'languages')\">Arabic\r\n                    </div>\r\n                    <div class=\"item\" (click)=\"setDropDownType('English', 'languages')\">English\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"two wide column\">\r\n                <label>Nationality</label>\r\n                <div class=\"ui fluid search selection dropdown\">\r\n                  <input type=\"hidden\" name=\"nationality\" formControlName=\"nationality\" value=\"\">\r\n                  <i class=\"dropdown icon\"></i>\r\n                  <div class=\"default text\">Nationality</div>\r\n                  <div class=\"menu\">\r\n                    <div class=\"item\" (click)=\"setDropDownType('USA', 'nationality')\">USA</div>\r\n                    <div class=\"item\" (click)=\"setDropDownType('UAE', 'nationality')\">UAE</div>\r\n                    <div class=\"item\" (click)=\"setDropDownType('Australia', 'nationality')\">Australia\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui sixteen wide column grid\">\r\n              <div class=\"four wide column\">\r\n                <div formArrayName=\"number_details\" class=\"phone-grid\">\r\n                  <div\r\n                    *ngFor=\"let numberD of newTravellerProfileForm.get('number_details')['controls']; let nIndex = index\">\r\n                    <div [formGroupName]=\"nIndex\" class=\"ui four wide column grid\">\r\n                      <label>Number</label>\r\n                      <div class=\"ui sixteen wide column grid\">\r\n                        <div class=\"ui checkbox two wide column\">\r\n                          <input type=\"checkbox\" name=\"prefered\" formControlName=\"preferedOfficial\" value=\"\">\r\n                          <div class=\"ui rating\" data-max-rating=\"1\"></div>\r\n                        </div>\r\n                        <div class=\"ui fluid search selection dropdown ten wide column\">\r\n                          <input type=\"hidden\" name=\"home\" formControlName=\"home\" value=\"\">\r\n                          <i class=\"dropdown icon\"></i>\r\n                          <div class=\"default text\">Home</div>\r\n                          <div class=\"menu\">\r\n                            <div class=\"item\" (click)=\"setDropDownType('Home 1', 'home')\">Home 1</div>\r\n                            <div class=\"item\" (click)=\"setDropDownType('Home 2', 'home')\">Home 2</div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"ui sixteen wide column grid\">\r\n                        <div class=\"ui checkbox two wide column\">\r\n                          <input type=\"checkbox\" name=\"prefered\" formControlName=\"preferedOfficial\" value=\"\">\r\n                          <div class=\"ui rating\" data-max-rating=\"1\"></div>\r\n                        </div>\r\n                        <input type=\"text\" class=\"ten wide column\" name=\"number\" formControlName=\"number\" value=\"\"\r\n                          placeholder=\"Number\">\r\n                      </div>\r\n                      <div class=\"ui sixteen wide column grid\">\r\n                        <div class=\"ui checkbox two wide column\">\r\n                          <input type=\"checkbox\" name=\"prefered\" formControlName=\"preferedOfficial\" value=\"\">\r\n                          <div class=\"ui rating\" data-max-rating=\"1\"></div>\r\n                        </div>\r\n                        <input type=\"text\" class=\"ten wide column\" name=\"number_comment\"\r\n                          formControlName=\"number_comment\" value=\"\" placeholder=\"Comment\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"ui sixteen wide column grid\">\r\n                      <div class=\"ui primary button\" (click)=\"addMoreNumbers()\">\r\n                        + Add Number\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"one wide column\">&nbsp;</div>\r\n              <div class=\"four wide column\">\r\n                <div formArrayName=\"add_email\" class=\"email-grid\">\r\n                  <div *ngFor=\"let emailD of newTravellerProfileForm.get('add_email')['controls']; let eIndex = index\">\r\n                    <div [formGroupName]=\"eIndex\" class=\"ui four wide column gird\">\r\n                      <label>Email</label>\r\n                      <div class=\"ui sixteen wide column grid\">\r\n                        <div class=\"newAgency_topAlign\">\r\n                          <div class=\"ui checkbox\">\r\n                            <input type=\"checkbox\" name=\"prefered\" formControlName=\"preferedOfficial\" value=\"\">\r\n                            <div class=\"ui rating\" data-max-rating=\"1\"></div>\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"ui fluid search selection dropdown ten wide column\">\r\n                          <input type=\"hidden\" name=\"office\" formControlName=\"Official\" value=\"\">\r\n                          <i class=\"dropdown icon\"></i>\r\n                          <div class=\"default text\">Official</div>\r\n                          <div class=\"menu\">\r\n                            <div class=\"item\" (click)=\"setDropDownType('Official 1', 'Official')\">\r\n                              Official 1\r\n                            </div>\r\n                            <div class=\"item\" (click)=\"setDropDownType('Official 2', 'Official')\">\r\n                              Official 2\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"ui sixteen wide column grid\">\r\n                        <div class=\"newAgency_topAlign\">\r\n                          <div class=\"ui checkbox\">\r\n                            <input type=\"checkbox\" name=\"prefered\" formControlName=\"preferedOfficial\" value=\"\">\r\n                            <div class=\"ui rating\" data-max-rating=\"1\"></div>\r\n                          </div>\r\n                        </div>\r\n                        <input type=\"text\" class=\"ten wide column\" name=\"emailAddress\" formControlName=\"emailAddress\"\r\n                          value=\"\" placeholder=\"Email Address\">\r\n                      </div>\r\n                      <div class=\"ui sixteen wide column grid\">\r\n                        <div class=\"newAgency_topAlign\">\r\n                          <div class=\"ui checkbox\">\r\n                            <input type=\"checkbox\" name=\"prefered\" formControlName=\"preferedOfficial\" value=\"\">\r\n                            <div class=\"ui rating\" data-max-rating=\"1\"></div>\r\n                          </div>\r\n                        </div>\r\n                        <input type=\"text\" class=\"ten wide column\" name=\"comment\" formControlName=\"emailAddress_comment\"\r\n                          value=\"\" placeholder=\"Comment\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui sixteen wide column grid\">\r\n                    <div class=\"ui primary button\" (click)=\"addMoreEmail()\">\r\n                      Add Email +\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"one wide column\">&nbsp;</div>\r\n              <div class=\"ui five wide column grid\">\r\n                <div class=\"eight wide column\">\r\n                  <label>Customer Index</label>\r\n                  <input type=\"text\" name=\"customerIndex\" formControlName=\"customerIndex\" value=\"\"\r\n                    placeholder=\"Customer Index\">\r\n                </div>\r\n                <div class=\"eight wide column\">\r\n                  <label>Customer Status</label>\r\n                  <div class=\"ui fluid search selection dropdown\">\r\n                    <input type=\"hidden\" name=\"customerStatus\" formControlName=\"customer_status\" value=\"\">\r\n                    <i class=\"dropdown icon\"></i>\r\n                    <div class=\"default text\">Customer Status</div>\r\n                    <div class=\"menu\">\r\n                      <div class=\"item\" (click)=\"setDropDownType('Contact Planned', 'customer_status')\">\r\n                        Contact planned\r\n                      </div>\r\n                      <div class=\"item\" (click)=\"setDropDownType('Lost Customer', 'customer_status')\">Lost\r\n                        Customer\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"eight wide column\">\r\n                  <label>Passenger Type</label>\r\n                  <input type=\"text\" name=\"passengerType\" formControlName=\"passengerType\" value=\"\"\r\n                    placeholder=\"Passenger Type*\">\r\n                </div>\r\n                <div class=\"eight wide column\">\r\n                  <label>Company Name</label>\r\n                  <input type=\"text\" name=\"companyName\" formControlName=\"companyName\" value=\"\"\r\n                    placeholder=\"Company Name\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"ui form-inner grid\">\r\n            <div class=\"sixteen wide column\">x\r\n              <h4>Office Address</h4>\r\n            </div>\r\n            <div class=\"ui sixteen wide column grid\">\r\n              <div class=\"five wide column\">\r\n                <input type=\"text\" name=\"jobTitle\" formControlName=\"jobTitle\" value=\"\" placeholder=\"Job Title\">\r\n              </div>\r\n              <div class=\"five wide column\">\r\n                <div class=\"ui fluid search selection dropdown\">\r\n                  <input type=\"hidden\" name=\"travellerCategory\" formControlName=\"category\" value=\"\">\r\n                  <i class=\"dropdown icon\"></i>\r\n                  <div class=\"default text\">Traveller Category</div>\r\n                  <div class=\"menu\">\r\n                    <div class=\"item\" (click)=\"setDropDownType('Category 1', 'category')\">Category 1\r\n                    </div>\r\n                    <div class=\"item\" (click)=\"setDropDownType('Category 2', 'category')\">Category 2\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div formArrayName=\"address_details\" class=\"sixteen wide column\">\r\n              <div\r\n                *ngFor=\"let addressD of newTravellerProfileForm.get('address_details')['controls']; let aIndex = index\">\r\n                <div [formGroupName]=\"aIndex\" class=\"ui sixteen wide column grid animated fadeInDown\">\r\n                  <div class=\"two wide column\">\r\n                    <div class=\"ui fluid search selection dropdown\">\r\n                      <input type=\"hidden\" name=\"office\" formControlName=\"addressList\" value=\"\">\r\n                      <i class=\"dropdown icon\"></i>\r\n                      <div class=\"default text\">Office</div>\r\n                      <div class=\"menu\">\r\n                        <div class=\"item\" (click)=\"setDropDownType('Office 1', 'addressList')\">\r\n                          Office 1</div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Office 2', 'addressList')\">\r\n                          Office 2</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"five wide column\">\r\n                    <input type=\"text\" name=\"address\" formControlName=\"address\" value=\"\" placeholder=\"Address\">\r\n                  </div>\r\n                  <div class=\"three wide column\">\r\n                    <input type=\"text\" name=\"street\" formControlName=\"street\" value=\"\" placeholder=\"Street\">\r\n                  </div>\r\n                  <div class=\"three wide column\">\r\n                    <input type=\"text\" name=\"city\" formControlName=\"city\" value=\"\" placeholder=\"City\">\r\n                  </div>\r\n                  <div class=\"two wide column\">\r\n                    <input type=\"text\" name=\"state\" formControlName=\"state\" value=\"\" placeholder=\"Region/State\">\r\n                  </div>\r\n                  <div class=\"three wide column\">\r\n                    <input type=\"text\" name=\"postalCode\" formControlName=\"postalCode\" value=\"\"\r\n                      placeholder=\"Postal Code\">\r\n                  </div>\r\n                  <div class=\"three wide column\">\r\n                    <div class=\"ui fluid search selection dropdown\">\r\n                      <input type=\"hidden\" name=\"country\" formControlName=\"countryList\" value=\"\">\r\n                      <i class=\"dropdown icon\"></i>\r\n                      <div class=\"default text\">Country</div>\r\n                      <div class=\"menu\">\r\n                        <div class=\"item\" (click)=\"setDropDownType('USA', 'countryList')\">\r\n                          USA</div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('UAE', 'countryList')\">\r\n                          UAE</div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Australia', 'countryList')\">\r\n                          Australia</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"three wide column\">\r\n                    <input type=\"text\" name=\"company\" formControlName=\"company\" value=\"\" placeholder=\"Company\">\r\n                  </div>\r\n                  <div class=\"five wide column\">\r\n                    <input type=\"text\" name=\"comment\" formControlName=\"address_comment\" value=\"\" placeholder=\"Comment\">\r\n                  </div>\r\n                  <div class=\"sixteen wide column\">\r\n                    <div class=\"ui primary button btn-sticky\" (click)=\"addMoreAddress()\">\r\n                      Add Address +\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Agency Info</h4>\r\n            </div>\r\n            <div formArrayName=\"agency_office\">\r\n              <div\r\n                *ngFor=\"let agency_officeD of newTravellerProfileForm.get('agency_office')['controls']; let agIndex = index\">\r\n                <div [formGroupName]=\"agIndex\" class=\"fields\">\r\n                  <div class=\"three wide field\">\r\n                    <input type=\"text\" name=\"responsibleOffice\" formControlName=\"responsibleOffice_agency\" value=\"\"\r\n                      placeholder=\"Responsible Office\">\r\n                  </div>\r\n                  <div class=\"five wide field\">\r\n                    <input type=\"text\" name=\"deptContactName\" formControlName=\"deptContactName_agency\" value=\"\"\r\n                      placeholder=\"Department Contact Name\">\r\n                  </div>\r\n                  <div class=\"four wide field\">\r\n                    <input type=\"text\" name=\"agentContactName\" formControlName=\"agentContactName_agency\" value=\"\"\r\n                      placeholder=\"Agent Contact Name\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"ui sixteen wide column\">\r\n              <h4>Customer Numbers</h4>\r\n            </div>\r\n            <div formArrayName=\"customers\">\r\n              <div class=\"ui sixteen wide column\"\r\n                *ngFor=\"let customerD of newTravellerProfileForm.get('customers')['controls']; let cIndex = index\">\r\n                <div [formGroupName]=\"cIndex\" class=\"ui sixteen wide column grid\">\r\n                  <div class=\"two wide column\">\r\n                    <input type=\"text\" name=\"noOfChildren\" formControlName=\"customer_number\" value=\"\"\r\n                      placeholder=\"Number\">\r\n                  </div>\r\n                  <div class=\"two wide column\">\r\n                    <div class=\"ui fluid search selection dropdown\">\r\n                      <input type=\"hidden\" name=\"customer_type\" formControlName=\"customer_type\" value=\"\">\r\n                      <i class=\"dropdown icon\"></i>\r\n                      <div class=\"default text\">Type</div>\r\n                      <div class=\"menu\">\r\n                        <div class=\"item\" (click)=\"setDropDownType('Customer Type 1', 'customer_type')\">Customer\r\n                          Type 1</div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Customer Type 2', 'customer_type')\">Customer\r\n                          Type 2</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"four wide column\">\r\n                    <input type=\"text\" name=\"description\" formControlName=\"description_customer\" value=\"\"\r\n                      placeholder=\"Description\">\r\n                  </div>\r\n                  <div class=\"three wide column\">\r\n                    <input type=\"text\" name=\"validFrom\" formControlName=\"validForm_customer\" value=\"\"\r\n                      placeholder=\"Valid from(DD MM YYYY)\">\r\n                  </div>\r\n                  <div class=\"three wide column\">\r\n                    <input type=\"text\" name=\"validUntil\" formControlName=\"validUntil_customer\" value=\"\"\r\n                      placeholder=\"Valid Until(DD MM YYYY)\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui primary button btn-sticky\" (click)=\"addMoreCustomers()\">\r\n                Add Customers +\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui form-inner grid\">\r\n        <div class=\"ui sixteen wide column text-right\">\r\n          <button class=\"ui primary button\" (click)=\"setActiveTab('travel')\">Continue</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"travel-content\" class=\"stepper-grid-content animated fadeIn\">\r\n      <div class=\"outer-basic outer-basic_secondary\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Travel Data</h4>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"five wide field\">\r\n                <label class=\"label-text\">Miscellaneous Ticketing</label>\r\n                <div formArrayName=\"misc_ticketing\">\r\n                  <div\r\n                    *ngFor=\"let misc_ticketingD of newTravellerProfileForm.get('misc_ticketing')['controls']; let miscIndex = index\">\r\n                    <div [formGroupName]=\"miscIndex\" class=\"fields\">\r\n                      <div class=\"ten wide field\">\r\n                        <input type=\"text\" name=\"text\" formControlName=\"miscellaneous_text\" value=\"\" placeholder=\"Text\">\r\n                      </div>\r\n                      <div class=\"ten wide field\">\r\n                        <input type=\"text\" name=\"provider\" formControlName=\"miscellaneous_provider\" value=\"\"\r\n                          placeholder=\"Provider\">\r\n                      </div>\r\n                      <div class=\"newAgency_topAlign\" *ngIf=\"miscIndex > 0\" (click)=\"removeMisc_ticketing(miscIndex)\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                        </i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"sixteen wide column\">\r\n                    <button class=\"ui primary button\" (click)=\"addMoremisc_ticketing()\">\r\n                      Add More +\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"four wide field\"></div>\r\n              <div class=\"five wide field\">\r\n                <label class=\"label-text\">Tour Code</label>\r\n                <div formArrayName=\"tour_code\">\r\n                  <div\r\n                    *ngFor=\"let tour_codeD of newTravellerProfileForm.get('tour_code')['controls']; let tourIndex = index\">\r\n                    <div [formGroupName]=\"tourIndex\" class=\"fields\">\r\n                      <div class=\"ten wide field\">\r\n                        <input type=\"text\" name=\"text\" formControlName=\"tourCode_text\" value=\"\" placeholder=\"Text\">\r\n                      </div>\r\n                      <div class=\"ten wide field\">\r\n                        <input type=\"text\" name=\"provider\" formControlName=\"tourCode_provider\" value=\"\"\r\n                          placeholder=\"Provider\">\r\n                      </div>\r\n                      <div class=\"newAgency_topAlign\" *ngIf=\"tourIndex > 0\" (click)=\"removeTour_code(tourIndex)\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                        </i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <button class=\"ui primary button\" (click)=\"addMoreTour_code()\">\r\n                    Add More +\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"five wide field\">\r\n                <label class=\"label-text\">Ticketing Arrangement</label>\r\n                <div formArrayName=\"ticketing_arrangements\">\r\n                  <div\r\n                    *ngFor=\"let ticketing_arrangementsD of newTravellerProfileForm.get('ticketing_arrangements')['controls']; let ticketIndex = index\">\r\n                    <div [formGroupName]=\"ticketIndex\" class=\"fields\">\r\n                      <div class=\"ten wide field\">\r\n                        <input type=\"text\" name=\"text\" formControlName=\"ticketingArrangement_provider\" value=\"\"\r\n                          placeholder=\"Provider\">\r\n                      </div>\r\n                      <div class=\"newAgency_topAlign\" *ngIf=\"ticketIndex > 0\"\r\n                        (click)=\"removeTicketingArrangement(ticketIndex)\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                        </i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <button class=\"ui primary button\" (click)=\"addMoreTicketing_arrangements()\">\r\n                    Add More +\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"four wide field\"></div>\r\n              <div class=\"five wide field\">\r\n                <label class=\"label-text\">Validating Carrier</label>\r\n                <div formArrayName=\"validating_carrier\">\r\n                  <div\r\n                    *ngFor=\"let validating_carrierD of newTravellerProfileForm.get('validating_carrier')['controls']; let validatingIndex = index\">\r\n                    <div [formGroupName]=\"validatingIndex\" class=\"fields\">\r\n                      <div class=\"ten wide field\">\r\n                        <input type=\"text\" name=\"text\" formControlName=\"validatingCarrier_provider\" value=\"\"\r\n                          placeholder=\"Provider\">\r\n                      </div>\r\n                      <div class=\"newAgency_topAlign\" *ngIf=\"validatingIndex > 0\"\r\n                        (click)=\"removeValidatingCarrier(validatingIndex)\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                        </i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <button class=\"ui primary button\" (click)=\"addMoreValidatingCarrier()\">\r\n                    Add More +\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"five wide field\">\r\n                <label class=\"label-text\">Original Issue</label>\r\n                <div formArrayName=\"original_issue\">\r\n                  <div\r\n                    *ngFor=\"let original_issueD of newTravellerProfileForm.get('original_issue')['controls']; let originalIndex = index\">\r\n                    <div [formGroupName]=\"originalIndex\" class=\"fields\">\r\n                      <input type=\"text\" name=\"text\" formControlName=\"originalIssue_text\" value=\"\" placeholder=\"\">\r\n                      <div class=\"newAgency_topAlign\" *ngIf=\"originalIndex > 0\"\r\n                        (click)=\"removeOriginal_issue(originalIndex)\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                        </i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <button class=\"ui primary button\" (click)=\"addMoreOriginal_issue()\">\r\n                    Add More +\r\n                  </button>\r\n                </div>\r\n              </div>\r\n              <div class=\"four wide field\"></div>\r\n              <div class=\"five wide field\">\r\n                <label class=\"label-text\">Shadow Destination</label>\r\n                <input type=\"text\" name=\"text\" formControlName=\"shadow_destination\" value=\"\" placeholder=\"\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Keywords</h4>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div formArrayName=\"keywords\" class=\"field\">\r\n                <div\r\n                  *ngFor=\"let keywordsD of newTravellerProfileForm.get('keywords')['controls']; let keyIndex = index\">\r\n                  <div [formGroupName]=\"keyIndex\" class=\"fields\">\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"keyword\" formControlName=\"keywords\" value=\"\" placeholder=\"Keyword\">\r\n                    </div>\r\n                    <div class=\"four wide field \">\r\n                      <input type=\"text\" name=\"airline\" formControlName=\"airline\" value=\"\" placeholder=\"Airline\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"keywordText\" formControlName=\"keywordText\" value=\"\"\r\n                        placeholder=\"Keyword Text\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"statusCode\" formControlName=\"statusCode\" value=\"\"\r\n                        placeholder=\"Status Code\">\r\n                    </div>\r\n                    <div class=\"three wide field\">\r\n                      <input type=\"text\" name=\"numberParty\" formControlName=\"numberParty\" value=\"\"\r\n                        placeholder=\"Number In Party\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Travel Management</h4>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"four wide field\">\r\n                <input type=\"text\" name=\"serviceLevelAgreement\" formControlName=\"travel_management\" value=\"\"\r\n                  placeholder=\"Service Level Agreement\">\r\n              </div>\r\n              <div class=\"two wide field\">\r\n              </div>\r\n              <div class=\"six wide field\">\r\n                <label class=\"label-text\">Fare Types</label><br>\r\n                <div class=\"ui checkbox\" value=\"\">\r\n                  <label class=\"checkbox_label\">Electronic Ticketing airlines</label><br>\r\n                  <label class=\"checkbox_label\">Phone Reservation Authorization</label><br>\r\n                  <label class=\"checkbox_label\">Prepaid Override Authorization</label><br>\r\n                  <label class=\"checkbox_label\">Prepaid Ticket Authorization</label><br>\r\n                  <label class=\"checkbox_label\">Travel Request Requirement</label><br>\r\n                  <label class=\"checkbox_label\">Trip approval Requirement</label><br>\r\n                  <label class=\"checkbox_label\">Visa Issuance Authorization</label><br>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui form-inner grid\">\r\n        <div class=\"ui sixteen wide column text-right\">\r\n          <button class=\"ui primary button\" (click)=\"setActiveTab('payment')\">Continue</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"payment-content\" class=\"stepper-grid-content animated fadeIn\">\r\n      <div class=\"outer-basic outer-basic_secondary\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Payment Data</h4>\r\n            </div><br>\r\n            <div class=\"fields\">\r\n              <label>Bank Accounts</label>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"two wide field\">\r\n                <input type=\"text\" name=\"code\" formControlName=\"bank_code\" value=\"\" placeholder=\"Code\">\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <input type=\"text\" name=\"name\" formControlName=\"bank_name\" value=\"\" placeholder=\"Name\">\r\n              </div>\r\n              <div class=\"three wide field\">\r\n                <input type=\"text\" name=\"bankAccountNumber\" formControlName=\"bank_number\" value=\"\" placeholder=\"Number\">\r\n              </div>\r\n              <div class=\"three wide field\">\r\n                <input type=\"text\" name=\"city\" value=\"\" placeholder=\"City\">\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"two wide field\">\r\n              </div>\r\n              <div class=\"five wide field\">\r\n              </div>\r\n              <div class=\"three wide field\">\r\n                <input type=\"text\" name=\"validFrom\" formControlName=\"bank_valid_from\" value=\"\"\r\n                  placeholder=\"Valid From(DDMMYYYY)\">\r\n              </div>\r\n              <div class=\"three wide field\">\r\n                <input type=\"text\" name=\"validUntil\" formControlName=\"bank_valid_to\" value=\"\"\r\n                  placeholder=\"Valid Until(DDMMYYYY)\">\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"two wide field\">\r\n              </div>\r\n              <div class=\"five wide field\">\r\n              </div>\r\n              <div class=\"three wide field\">\r\n                <div class=\"ui checkbox \">\r\n                  <input type=\"checkbox\" name=\"directDebitAuthorized\">\r\n                  <label class=\"checkbox_label\">Direct Debit Authorized</label>\r\n                </div>\r\n              </div>\r\n              <div class=\"three wide field\">\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"five wide field\">\r\n                <div formArrayName=\"forms_of_payment\">\r\n                  <div\r\n                    *ngFor=\"let forms_of_paymentD of newTravellerProfileForm.get('forms_of_payment')['controls']; let payIndex = index\">\r\n                    <div [formGroupName]=\"payIndex\" class=\"fields\">\r\n                      <input type=\"text\" name=\"formOfPayment\" formControlName=\"forms_of_payment\" value=\"\"\r\n                        placeholder=\"Form Of Payment\">\r\n                      <div class=\"newAgency_topAlign\" *ngIf=\"payIndex > 0\" (click)=\"removeForms_of_payment(payIndex)\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                        </i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui primary button\" (click)=\"addMoreForms_of_payment()\">\r\n                    Add More +\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"four wide field\"></div>\r\n              <div class=\"five wide field \">\r\n                <div formArrayName=\"endorsements\">\r\n                  <div\r\n                    *ngFor=\"let endorsementsD of newTravellerProfileForm.get('endorsements')['controls']; let eIndex = index\">\r\n                    <div [formGroupName]=\"eIndex\" class=\"fields\">\r\n                      <input type=\"text\" name=\"endorsement\" formControlName=\"endorsements\" value=\"\"\r\n                        placeholder=\"Endorsement\">\r\n                      <div class=\"newAgency_topAlign\" *ngIf=\"eIndex > 0\" (click)=\"removeEndorsements(eIndex)\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                        </i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui primary button\" (click)=\"addMoreEndorsements()\">\r\n                    Add More +\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"five wide field\">\r\n                <div formArrayName=\"fare_price_override\">\r\n                  <div\r\n                    *ngFor=\"let fare_price_overrideD of newTravellerProfileForm.get('fare_price_override')['controls']; let overrideIndex = index\">\r\n                    <div [formGroupName]=\"overrideIndex\" class=\"fields\">\r\n                      <input type=\"text\" name=\"fairPriceOverride\" formControlName=\"fare_price_override\" value=\"\"\r\n                        placeholder=\"Fair Price Override\">\r\n                      <div class=\"newAgency_topAlign\" *ngIf=\"overrideIndex > 0\"\r\n                        (click)=\"removeFair_price_override(overrideIndex)\">\r\n                        <i class=\"icon\">\r\n                          <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                        </i>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui primary button\" (click)=\"addMoreFair_price_override()\">\r\n                    Add More +\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"four wide field\"></div>\r\n              <div class=\"five wide field \">\r\n                <input type=\"text\" name=\"discount\" formControlName=\"discount\" value=\"\" placeholder=\"Discount\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui primary button btn-sticky\">Add Bank Account +</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Commissions</h4>\r\n            </div>\r\n            <div class=\"ui grid\">\r\n              <div formArrayName=\"commission\" class=\"sixteen wide column\">\r\n                <div\r\n                  *ngFor=\"let commissionD of newTravellerProfileForm.get('commission')['controls']; let comIndex = index\">\r\n                  <div [formGroupName]=\"comIndex\" class=\"ui grid\">\r\n                    <div class=\"five wide column\">\r\n                      <input type=\"text\" name=\"text\" formControlName=\"commisionText\" value=\"\" placeholder=\"Text\">\r\n                    </div>\r\n                    <div class=\"five wide column \">\r\n                      <input type=\"text\" name=\"providerCode\" formControlName=\"commisionProvideCode\" value=\"\"\r\n                        placeholder=\"Provider Code\">\r\n                    </div>\r\n                    <div class=\"newAgency_topAlign\" *ngIf=\"comIndex > 0\" (click)=\"removeComission(comIndex)\">\r\n                      <i class=\"icon\">\r\n                        <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <br>\r\n                <div class=\"ui primary button btn-sticky\" (click)=\"addMoreComission()\">\r\n                  Add Commission +\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Accounting</h4>\r\n            </div>\r\n            <div formArrayName=\"accounting\">\r\n              <div\r\n                *ngFor=\"let accountingD of newTravellerProfileForm.get('accounting')['controls']; let accIndex = index\">\r\n                <div [formGroupName]=\"accIndex\" class=\"ui grid\">\r\n                  <div class=\"ui sixteen wide column grid\">\r\n                    <div class=\"four wide column\">\r\n                      <input type=\"text\" name=\"accountNumber\" formControlName=\"accountNumber\" value=\"\"\r\n                        placeholder=\"Account Number\">\r\n                    </div>\r\n                    <div class=\"four wide column \">\r\n                      <input type=\"text\" name=\"costCentre\" formControlName=\"accountCostCentre\" value=\"\"\r\n                        placeholder=\"Cost Centre\">\r\n                    </div>\r\n                    <div class=\"four wide column \">\r\n                      <input type=\"text\" name=\"iataNumber\" formControlName=\"accountIataNumber\" value=\"\"\r\n                        placeholder=\"IATA Number\">\r\n                    </div>\r\n                    <div class=\"four wide column \">\r\n                      <input type=\"text\" name=\"clientReference\" formControlName=\"accountClientReference\" value=\"\"\r\n                        placeholder=\"Client Reference\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui sixteen wide column grid\">\r\n                    <div class=\"four wide column\">\r\n                      <input type=\"text\" name=\"gstTaxName\" formControlName=\"accountGstTaxName\" value=\"\"\r\n                        placeholder=\"GST Tax Name\">\r\n                    </div>\r\n                    <div class=\"four wide column \">\r\n                      <input type=\"text\" name=\"gstTaxNumber\" formControlName=\"accountGetTaxNumber\" value=\"\"\r\n                        placeholder=\"GST Tax Number\">\r\n                    </div>\r\n                    <div class=\"four wide column \">\r\n                      <input type=\"text\" name=\"gstTaxAddress\" formControlName=\"accountGstTaxAddress\" value=\"\"\r\n                        placeholder=\"GST Tax Address\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui primary button btn-sticky\" (click)=\"addMoreAccounting()\">Add Accounting +</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui form-inner grid\">\r\n        <div class=\"ui sixteen wide column text-right\">\r\n          <button class=\"ui primary button\" (click)=\"setActiveTab('remarks')\">Continue</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"remarks-content\" class=\"stepper-grid-content animated fadeIn\">\r\n      <div class=\"outer-basic outer-basic_secondary\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Remarks</h4>\r\n            </div>\r\n            <div formArrayName=\"remarks\">\r\n              <div\r\n                *ngFor=\"let remarksD of newTravellerProfileForm.get('remarks')['controls']; let remarksIndex = index\">\r\n                <div [formGroupName]=\"remarksIndex\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"three wide field\">\r\n                      <div class=\"ui fluid search selection dropdown\">\r\n                        <input type=\"hidden\" formControlName=\"remark_type\" value=\"\" name=\"remarkType\">\r\n                        <i class=\"dropdown icon\"></i>\r\n                        <div class=\"default text\">Remark Type</div>\r\n                        <div class=\"menu\">\r\n                          <div class=\"item\" (click)=\"setDropDownType('Confidential', 'remark_type')\">\r\n                            Confidential</div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('General', 'remark_type')\">\r\n                            General</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"three wide field \">\r\n                      <div class=\"ui fluid search selection dropdown\">\r\n                        <input type=\"hidden\" formControlName=\"remark_category\" value=\"\" name=\"category\">\r\n                        <i class=\"dropdown icon\"></i>\r\n                        <div class=\"default text\">Category</div>\r\n                        <div class=\"menu\">\r\n                          <div class=\"item\" (click)=\"setDropDownType('Account', 'remark_category')\">A</div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('B', 'remark_category')\">B\r\n                          </div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('C', 'remark_category')\">C\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"six wide field \">\r\n                      <textarea type=\"text\" name=\"remark\" formControlName=\"remark\" value=\"\" placeholder=\"Remark\"\r\n                        rows=\"4\" cols=\"50\"></textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui primary button btn-sticky\" (click)=\"addMoreRemarks()\">\r\n            Add Remark +\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Profile Notes</h4>\r\n            </div>\r\n            <div formArrayName=\"profile_notes\">\r\n              <div\r\n                *ngFor=\"let profile_notesD of newTravellerProfileForm.get('profile_notes')['controls']; let notesIndex = index\">\r\n                <div [formGroupName]=\"notesIndex\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"three wide field\">\r\n                      <div class=\"ui fluid search selection dropdown\">\r\n                        <input type=\"hidden\" formControlName=\"profile_notes_category\" value=\"\" name=\"category\">\r\n                        <i class=\"dropdown icon\"></i>\r\n                        <div class=\"default text\">Category</div>\r\n                        <div class=\"menu\">\r\n                          <div class=\"item\" data-value=\"category1\">Category 1</div>\r\n                          <div class=\"item\" data-value=\"category2\">Category 2</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"five wide field \">\r\n                      <input type=\"text\" name=\"information\" formControlName=\"profile_notes_information\" value=\"\"\r\n                        placeholder=\"Information\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui primary button btn-sticky\" (click)=\"addMoreProfileNotes()\">\r\n                    Add Profile Note +\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Priority Lines</h4>\r\n            </div>\r\n            <div formArrayName=\"priority_lines\">\r\n              <div\r\n                *ngFor=\"let priority_linesD of newTravellerProfileForm.get('priority_lines')['controls']; let priorityIndex1 = index\">\r\n                <div [formGroupName]=\"priorityIndex1\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"five wide field \">\r\n                      <input type=\"text\" name=\"information\" formControlName=\"priorityInformation1\" value=\"\"\r\n                        placeholder=\"\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui primary button btn-sticky\" (click)=\"addMorePriorityLines()\">\r\n              Add Priority Line +\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Follow Up</h4>\r\n            </div>\r\n            <div formArrayName=\"follow_up\">\r\n              <div\r\n                *ngFor=\"let follow_upD of newTravellerProfileForm.get('follow_up')['controls']; let follow_upIndex = index\">\r\n                <div [formGroupName]=\"follow_upIndex\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"three wide field \">\r\n                      <input type=\"text\" name=\"date\" formControlName=\"followUpDate\" value=\"\"\r\n                        placeholder=\"Date (DDMMYYYY)\">\r\n                    </div>\r\n                    <div class=\"three wide field \">\r\n                      <input type=\"text\" name=\"action\" formControlName=\"followUpAction\" value=\"\" placeholder=\"Action\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui primary button btn-sticky\" (click)=\"addMoreFollowUp()\">\r\n              Add Follow Up +\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui form-inner grid\">\r\n        <div class=\"ui sixteen wide column text-right\">\r\n          <button class=\"ui primary button\" (click)=\"setActiveTab('airline')\">Continue</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"airline-content\" class=\"stepper-grid-content animated fadeIn\">\r\n      <div class=\"outer-basic outer-basic_secondary\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Airline Preferences</h4>\r\n            </div>\r\n            <div formArrayName=\"airline_preferrences\">\r\n              <div\r\n                *ngFor=\"let airline_preferrencesD of newTravellerProfileForm.get('airline_preferrences')['controls']; let apIndex = index\">\r\n                <div [formGroupName]=\"apIndex\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"five wide field \">\r\n                      <input type=\"text\" name=\"information\" formControlName=\"prefered_airline\" value=\"\"\r\n                        placeholder=\"Prefered Airline\">\r\n                    </div>\r\n                    <div class=\"newAgency_topAlign\" *ngIf=\"apIndex > 0\" (click)=\"removeAirlinePreference(apIndex)\">\r\n                      <i class=\"icon\">\r\n                        <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                      </i>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui primary button btn-sticky\" (click)=\"addMoreAirlinePreferences()\">\r\n                Add More +\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Frequent Flyers</h4>\r\n            </div>\r\n            <div formArrayName=\"frequent_flyers\">\r\n              <div\r\n                *ngFor=\"let frequent_flyersD of newTravellerProfileForm.get('frequent_flyers')['controls']; let ffIndex = index\">\r\n                <div [formGroupName]=\"ffIndex\" class=\"fields\">\r\n                  <div class=\"five wide field \">\r\n                    <input type=\"text\" name=\"frequent_flyers_airCode\" placeholder=\"Airline Code\"\r\n                      formControlName=\"frequent_flyers_airCode\" value=\"\">\r\n                  </div>\r\n                  <div class=\"five wide field \">\r\n                    <input type=\"text\" name=\"frequent_flyers_number\" placeholder=\"Number\"\r\n                      formControlName=\"frequent_flyers_number\" value=\"\">\r\n                  </div>\r\n                  <div class=\"five wide field \">\r\n                    <input type=\"text\" name=\"frequent_flyers_partnerAirCode\" placeholder=\"Partner Airline Code\"\r\n                      formControlName=\"frequent_flyers_partnerAirCode\" value=\"\">\r\n                  </div>\r\n                  <div class=\"newAgency_topAlign\" *ngIf=\"ffIndex > 0\" (click)=\"removeFrequentFlyers(ffIndex)\">\r\n                    <i class=\"icon\">\r\n                      <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui primary button btn-sticky\" (click)=\"addMoreFrequentFlyers()\">\r\n                Add More +\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Special Needs</h4>\r\n            </div>\r\n            <div formArrayName=\"special_needs\">\r\n              <div\r\n                *ngFor=\"let special_needsD of newTravellerProfileForm.get('special_needs')['controls'];let spIndex = index\">\r\n                <div [formGroupName]=\"spIndex\" class=\"fields\">\r\n                  <div class=\"three wide field newAgency_topAlign\">\r\n                    <div class=\"ui checkbox \">\r\n                      <input type=\"checkbox\" name=\"explosionIndicator\" formControlName=\"explosionIndicator\" value=\"\">\r\n                      <label>Explosion Indicator</label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"two wide field\">\r\n                    <div class=\"ui fluid search selection dropdown\">\r\n                      <input type=\"hidden\" name=\"type\" formControlName=\"specialNeedsType\" value=\"\">\r\n                      <i class=\"dropdown icon\"></i>\r\n                      <div class=\"default text\">Type</div>\r\n                      <div class=\"menu\">\r\n                        <div class=\"item\" (click)=\"setDropDownType('Type 1', 'specialNeedsType')\">\r\n                          Type 1</div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Type 2', 'specialNeedsType')\">\r\n                          Type 2</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"three wide field\">\r\n                    <div class=\"ui fluid search selection dropdown\">\r\n                      <input type=\"hidden\" name=\"description\" formControlName=\"specialNeedsDesc\" value=\"\">\r\n                      <i class=\"dropdown icon\"></i>\r\n                      <div class=\"default text\">Description</div>\r\n                      <div class=\"menu\">\r\n                        <div class=\"item\" (click)=\"setDropDownType('Description 1', 'specialNeedsDesc')\">\r\n                          Description 1</div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Description 2', 'specialNeedsDesc')\">\r\n                          Description 2</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"three wide field\">\r\n                    <input type=\"text\" name=\"freeText\" placeholder=\"Free Text\" formControlName=\"specialNeedsFreeText\"\r\n                      value=\"\">\r\n                  </div>\r\n                  <div class=\"three wide field\">\r\n                    <input type=\"text\" name=\"airlineCode\" placeholder=\"Airline Code\"\r\n                      formControlName=\"specialNeedsAirlineCode\" value=\"\">\r\n                  </div>\r\n                  <div class=\"three wide field\">\r\n                    <div class=\"ui fluid search selection dropdown\">\r\n                      <input type=\"hidden\" name=\"flightType\" formControlName=\"specialNeedsFlightType\" value=\"\">\r\n                      <i class=\"dropdown icon\"></i>\r\n                      <div class=\"default text\">Flight Type</div>\r\n                      <div class=\"menu\">\r\n                        <div class=\"item\" (click)=\"setDropDownType('Description 2', 'specialNeedsDesc')\">Type 1\r\n                        </div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Description 2', 'specialNeedsDesc')\">Type 2\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"newAgency_topAlign\" *ngIf=\"spIndex > 0\" (click)=\"removeSpecialNeeds(spIndex)\">\r\n                    <i class=\"icon\">\r\n                      <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui primary button btn-sticky\" (click)=\"addMoreSpecialNeeds()\">\r\n                Add More +\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Seating Preference</h4>\r\n            </div>\r\n            <div formArrayName=\"seating_preferences\">\r\n              <div\r\n                *ngFor=\"let seating_preferencesD of newTravellerProfileForm.get('seating_preferences')['controls']; let spIndex = index\">\r\n                <div [formGroupName]=\"spIndex\" class=\"fields\">\r\n                  <div class=\"five wide field \">\r\n                    <div class=\"ui fluid search selection dropdown\">\r\n                      <input type=\"hidden\" name=\"seating_preference\" formControlName=\"seating_preference\" value=\"\">\r\n                      <i class=\"dropdown icon\"></i>\r\n                      <div class=\"default text\">Preference</div>\r\n                      <div class=\"menu\">\r\n                        <div class=\"item\" (click)=\"setDropDownType('Type 1', 'seating_preference')\">\r\n                          Type 1\r\n                        </div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Type 2', 'seating_preference')\">\r\n                          Type 2\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"five wide field \">\r\n                    <div class=\"ui fluid search selection dropdown\">\r\n                      <input type=\"hidden\" name=\"flight_type\" formControlName=\"flight_type\" value=\"\">\r\n                      <i class=\"dropdown icon\"></i>\r\n                      <div class=\"default text\">Flight Type</div>\r\n                      <div class=\"menu\">\r\n                        <div class=\"item\" (click)=\"setDropDownType('Type 1', 'flight_type')\">\r\n                          Type 1\r\n                        </div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Type 2', 'flight_type')\">\r\n                          Type 2\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"newAgency_topAlign\" *ngIf=\"spIndex > 0\" (click)=\"removeSeatingPreference(spIndex)\">\r\n                    <i class=\"icon\">\r\n                      <img src=\"./../../../../../assets/icons/remove-button.svg\" />\r\n                    </i>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui primary button btn-sticky\" (click)=\"addMoreSeatingPreference()\">\r\n                Add More +\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Travel Management</h4>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"three wide field\">\r\n                <input type=\"text\" name=\"home_airport\" placeholder=\"Default Home Airport\" formControlName=\"home_airport\"\r\n                  value=\"\">\r\n              </div>\r\n              <div class=\"three wide field\">\r\n                <input type=\"text\" name=\"arrival_airport\" placeholder=\"Default Arrival Airport\"\r\n                  formControlName=\"arrival_airport\" value=\"\">\r\n              </div>\r\n              <div class=\"three wide field\">\r\n                <input type=\"text\" name=\"delivery_method\" placeholder=\"Delivery Method\"\r\n                  formControlName=\"delivery_method\" value=\"\">\r\n              </div>\r\n              <div class=\"three wide field\">\r\n                <input type=\"text\" name=\"delivery_time\" placeholder=\"Delivery Time\" formControlName=\"delivery_time\"\r\n                  value=\"\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"ui form-inner grid\">\r\n        <div class=\"ui sixteen wide column text-right\">\r\n          <button class=\"ui positive button\" (click)=\"createNewTravellerProfile()\">Save</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/layout/profile-management/create-new-profile/new-traveller-profile/new-traveller-profile-routing.module.ts":
  /*!****************************************************************************************************************************!*\
    !*** ./src/app/layout/profile-management/create-new-profile/new-traveller-profile/new-traveller-profile-routing.module.ts ***!
    \****************************************************************************************************************************/

  /*! exports provided: NewTravellerProfileRoutingModule */

  /***/
  function srcAppLayoutProfileManagementCreateNewProfileNewTravellerProfileNewTravellerProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewTravellerProfileRoutingModule", function () {
      return NewTravellerProfileRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _new_traveller_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./new-traveller-profile.component */
    "./src/app/layout/profile-management/create-new-profile/new-traveller-profile/new-traveller-profile.component.ts");
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
      component: _new_traveller_profile_component__WEBPACK_IMPORTED_MODULE_1__["NewTravellerProfileComponent"]
    }];

    var NewTravellerProfileRoutingModule = function NewTravellerProfileRoutingModule() {
      _classCallCheck(this, NewTravellerProfileRoutingModule);
    };

    NewTravellerProfileRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], NewTravellerProfileRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/profile-management/create-new-profile/new-traveller-profile/new-traveller-profile.component.scss":
  /*!*************************************************************************************************************************!*\
    !*** ./src/app/layout/profile-management/create-new-profile/new-traveller-profile/new-traveller-profile.component.scss ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutProfileManagementCreateNewProfileNewTravellerProfileNewTravellerProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".stepper-grid {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n.stepper-grid .stepper-grid_step {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  opacity: 0.6;\n  cursor: pointer;\n}\n.stepper-grid .stepper-grid_step._active {\n  opacity: 1;\n  -webkit-transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div {\n  background-color: #062862;\n  border: 0;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div div.image {\n  background-color: white;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div:hover {\n  border: 2px solid #A6B1C3;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon label {\n  border: 0;\n  background-color: #062862;\n  color: white;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-border hr {\n  border-bottom: 2px solid #062862;\n}\n.stepper-grid .stepper-grid_step._activated {\n  opacity: 1;\n  -webkit-transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div {\n  background-color: #437ADA;\n  border: 0;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div div.image {\n  background-color: white;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div:hover {\n  border: 2px solid #A6B1C3;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon label {\n  border: 0;\n  background-color: #437ADA;\n  color: white;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-border hr {\n  border-bottom: 2px solid #437ADA;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div {\n  background-color: transparent;\n  border: 2px solid #A6B1C3;\n  color: white;\n  width: 45px;\n  height: 45px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 50%;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon label {\n  width: 100px;\n  height: auto;\n  line-height: 24px;\n  text-align: center;\n  background-color: transparent;\n  border: 2px solid #A6B1C3;\n  margin-top: 15px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 600 !important;\n  font-size: 13px;\n  color: #A6B1C3;\n  border-radius: 8px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon label._last {\n  width: 150px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-border {\n  width: 100%;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-border hr {\n  margin-top: -24px;\n  width: 100%;\n  height: 2px;\n  background: none;\n  border-bottom: 2px solid #A6B1C3;\n}\n.stepper-grid-content {\n  display: none;\n}\n.stepper-grid-content._active {\n  display: block;\n}\n.ui.grid + .grid {\n  margin-top: 0;\n}\nh3 span {\n  font-weight: 600 !important;\n  font-family: \"Roboto\", sans-serif;\n  color: rgba(6, 40, 98, 0.8);\n}\n.checkbox_label {\n  height: 13px !important;\n  color: #828282 !important;\n  font-family: Ubuntu !important;\n  font-size: 12px !important;\n  font-weight: 300 !important;\n}\nh4 {\n  font-weight: 600 !important;\n  font-family: \"Roboto\", sans-serif;\n  color: rgba(6, 40, 98, 0.8);\n  font-size: 18px;\n}\nlabel {\n  display: block;\n  font-weight: 600 !important;\n  font-family: \"Roboto\", sans-serif !important;\n  color: rgba(6, 40, 98, 0.6);\n  font-size: 14px;\n  margin-bottom: 15px;\n}\nlabel.label-text {\n  font-family: \"Roboto\", sans-serif !important;\n  color: rgba(6, 40, 98, 0.6) !important;\n}\n.ui.radio.checkbox label {\n  font-weight: 600 !important;\n  font-family: \"Roboto\", sans-serif;\n  color: rgba(6, 40, 98, 0.5);\n  font-size: 14px;\n  margin-right: 18px;\n}\n.ui.form input[type=text],\ninput {\n  background-color: rgba(67, 122, 218, 0.15) !important;\n  border-color: transparent !important;\n  padding: 8px 15px !important;\n  margin-top: 6px;\n}\n.ui.form input[type=text]::-webkit-input-placeholder,\ninput::-webkit-input-placeholder {\n  font-family: \"Roboto\", sans-serif;\n  color: rgba(67, 122, 218, 0.65) !important;\n  font-weight: 600 !important;\n  font-size: 12px;\n}\n.ui.form input[type=text]:-moz-placeholder,\ninput:-moz-placeholder {\n  font-family: \"Roboto\", sans-serif;\n  color: rgba(67, 122, 218, 0.65) !important;\n  font-weight: 600 !important;\n  font-size: 12px;\n}\n.ui.form input[type=text]::-moz-placeholder,\ninput::-moz-placeholder {\n  font-family: \"Roboto\", sans-serif;\n  color: rgba(67, 122, 218, 0.65) !important;\n  font-weight: 600 !important;\n  font-size: 12px;\n}\n.ui.form input[type=text]:-ms-input-placeholder,\ninput:-ms-input-placeholder {\n  font-family: \"Roboto\", sans-serif;\n  color: rgba(67, 122, 218, 0.65) !important;\n  font-weight: 600 !important;\n  font-size: 12px;\n}\n.mtb {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n.ml {\n  margin-left: 20px;\n}\n.mr {\n  margin-right: 20px;\n}\n.booking-header {\n  color: #4F4F4F;\n  font-family: Helvetica;\n  font-size: 20px;\n  font-weight: 300;\n  line-height: 22px;\n  margin-left: 22px;\n}\n.booking-header {\n  color: #4F4F4F;\n  font-family: Helvetica;\n  font-size: 20px;\n  font-weight: 300;\n  line-height: 22px;\n  margin-left: 22px;\n}\n.outer-basic {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n  padding: 50px;\n}\n.bookings_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n.bookings_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n.bookings_pickers .input .icon {\n  opacity: 1;\n  z-index: 100;\n}\n.bookings_pickers .input .icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n.bookings_pickers .input .icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n.stepper-grid-content {\n  display: none;\n}\n.stepper-grid-content._active {\n  display: block;\n}\nf .outer-basic {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  padding-top: 15px !important;\n}\n.search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.search.dropdown .search {\n  margin-left: 42px !important;\n}\n.search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n.bookings_btn-panel {\n  margin-right: 30px;\n}\n.bookings_btn-panel .secondary {\n  width: 135.64px;\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n.bookings_btn-panel .primary {\n  width: 135.64px;\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n.trailing_button {\n  position: absolute;\n  right: 0;\n}\n.newAgency_topAlign {\n  padding-top: 1vh;\n}\ntd {\n  color: #4F4F4F;\n  font-family: Helvetica;\n  font-size: 10px;\n  line-height: 11px;\n  text-align: center;\n}\nth {\n  color: #4F4F4F;\n  font-family: Helvetica;\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 11px;\n  text-align: center;\n}\n.confirm {\n  width: 63px;\n}\n.recConfirm {\n  height: 18px;\n  width: 62px;\n  background-color: #72D44F;\n  color: white;\n  padding-top: 0.5vh;\n}\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n.field input::-webkit-input-placeholder {\n  font-size: 12px;\n}\n.field input::-moz-placeholder {\n  font-size: 12px;\n}\n.field input::-ms-input-placeholder {\n  font-size: 12px;\n}\n.field input::placeholder {\n  font-size: 12px;\n}\n.outer-basic_secondary {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n}\n.outer-basicForm_secondary {\n  width: 100%;\n  height: auto;\n  padding: 50px;\n}\n.right_links {\n  position: absolute;\n  right: 0;\n  padding-top: 1vh;\n  padding-right: 8vh;\n}\n.outer-basic_tertiary {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\n.outer-basicForm_tertiary {\n  width: 100%;\n  height: auto;\n  padding: 50px;\n}\nhr {\n  box-sizing: border-box;\n  height: 1px;\n  border: 0.5px solid #E0E0E0;\n}\n.dropdown .text {\n  font-size: 12px;\n}\n.bookings_btn-panel.trailing_button {\n  margin-right: 45px;\n}\n.ui.fluid.container {\n  padding: 28px;\n}\n.ui.button {\n  margin-left: 42px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image {\n  margin: 0 auto;\n  background-color: #A6B1C3;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._travel {\n  -webkit-mask: url('travel.svg') no-repeat center;\n  mask: url('travel.svg') no-repeat center;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._user {\n  -webkit-mask: url('personal.svg') no-repeat center;\n  mask: url('personal.svg') no-repeat center;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._payment {\n  -webkit-mask: url('payment.svg') no-repeat center;\n  mask: url('payment.svg') no-repeat center;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._remarks {\n  -webkit-mask: url('remarks.svg') no-repeat center;\n  mask: url('remarks.svg') no-repeat center;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._airline {\n  -webkit-mask: url('airline-preferences.svg') no-repeat center;\n  mask: url('airline-preferences.svg') no-repeat center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LXRyYXZlbGxlci1wcm9maWxlL0U6XFxCZWxhbFxccHJvamVjdHNcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxjb21vbi1zdHlsZXNcXHN0ZXBwZXIuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LXRyYXZlbGxlci1wcm9maWxlL25ldy10cmF2ZWxsZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LXRyYXZlbGxlci1wcm9maWxlL0U6XFxCZWxhbFxccHJvamVjdHNcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxjb21vbi1zdHlsZXNcXGRlc2lnbi1wYWxldHRlLnNjc3MiLCJzcmMvYXBwL2xheW91dC9wcm9maWxlLW1hbmFnZW1lbnQvY3JlYXRlLW5ldy1wcm9maWxlL25ldy10cmF2ZWxsZXItcHJvZmlsZS9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHByb2ZpbGUtbWFuYWdlbWVudFxcY3JlYXRlLW5ldy1wcm9maWxlXFxuZXctdHJhdmVsbGVyLXByb2ZpbGVcXG5ldy10cmF2ZWxsZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LXRyYXZlbGxlci1wcm9maWxlL0U6XFxCZWxhbFxccHJvamVjdHNcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxjb21vbi1zdHlsZXNcXG1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDSjtBRENJO0VBQ0UsVUFBQTtFQUNBLGtFQUFBO0VBQUEsMERBQUE7QUNDTjtBREVRO0VBQ0UseUJFZFE7RUZlUixTQUFBO0FDQVY7QURFVTtFQUNFLHVCQUFBO0FDQVo7QURHVTtFQUNFLHlCQUFBO0FDRFo7QURLUTtFQUNFLFNBQUE7RUFDQSx5QkU1QlE7RUY2QlIsWUFBQTtBQ0hWO0FEUVE7RUFDRSxnQ0FBQTtBQ05WO0FEV0k7RUFDRSxVQUFBO0VBQ0Esa0VBQUE7RUFBQSwwREFBQTtBQ1ROO0FEWVE7RUFDRSx5QkVoRE07RUZpRE4sU0FBQTtBQ1ZWO0FEWVU7RUFDRSx1QkFBQTtBQ1ZaO0FEYVU7RUFDRSx5QkFBQTtBQ1haO0FEZVE7RUFDRSxTQUFBO0VBQ0EseUJFOURNO0VGK0ROLFlBQUE7QUNiVjtBRGtCUTtFQUNFLGdDQUFBO0FDaEJWO0FEcUJJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ25CTjtBRHFCTTtFQUNFLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0JBQUE7QUNuQlI7QURzQk07RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0V6RU07RUYwRU4sMkJBQUE7RUFDQSxlQUFBO0VBQ0EsY0VwR1U7RUZxR1Ysa0JFaEZnQjtBRDREeEI7QURzQlE7RUFDRSxZQUFBO0FDcEJWO0FEeUJJO0VBQ0UsV0FBQTtBQ3ZCTjtBRHlCTTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FDdkJSO0FENkJBO0VBQ0UsYUFBQTtBQzFCRjtBRDRCRTtFQUNFLGNBQUE7QUMxQko7QUVwR0E7RUFDRSxhQUFBO0FGdUdGO0FFcEdBO0VBQ0UsMkJBQUE7RUFDQSxpQ0RpQlk7RUNoQlosMkJBQUE7QUZ1R0Y7QUVuR0E7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FGc0dGO0FFbkdBO0VBQ0UsMkJBQUE7RUFDQSxpQ0RFWTtFQ0RaLDJCQUFBO0VBQ0EsZUFBQTtBRnNHRjtBRW5HQTtFQUNFLGNBQUE7RUFDQSwyQkFBQTtFQUNBLDRDQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUZzR0Y7QUVuR0E7RUFDRSw0Q0FBQTtFQUNBLHNDQUFBO0FGc0dGO0FFbkdBO0VBQ0UsMkJBQUE7RUFDQSxpQ0RuQlk7RUNvQlosMkJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUZzR0Y7QUVuR0E7O0VBRUUscURBQUE7RUFDQSxvQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsZUFBQTtBRnNHRjtBRzVKRTs7RUR5REUsaUNEakNVO0VDa0NWLDBDQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FGdUdKO0FHL0pFOztFRHFERSxpQ0RqQ1U7RUNrQ1YsMENBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUY4R0o7QUdsS0U7O0VEaURFLGlDRGpDVTtFQ2tDViwwQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBRnFISjtBR3JLRTs7RUQ2Q0UsaUNEakNVO0VDa0NWLDBDQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FGNEhKO0FFeEhBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBRjJIRjtBRXhIQTtFQUNFLGlCQUFBO0FGMkhGO0FFeEhBO0VBQ0Usa0JBQUE7QUYySEY7QUV4SEE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FGMkhGO0FFeEhBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBRjJIRjtBRXhIQTtFQUNFLHNCQUFBO0VBQ0EsNENBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FGMkhGO0FFeEhBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FGMkhGO0FFdEhFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBRnlISjtBRXRIRTtFQUNFLHdCQUFBO0VBQ0EsMENBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FGd0hKO0FFckhFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUZ1SEo7QUVySEk7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBRnVITjtBRXJITTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBRnVIUjtBRWpIQTtFQUNFLGFBQUE7QUZvSEY7QUVsSEU7RUFDRSxjQUFBO0FGb0hKO0FFaEhBO0VBQ0Usc0JBQUE7RUFDQSw0Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBRm1IRjtBRWhIRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBRm1ISjtBRWpISTtFQUNFLDRCQUFBO0FGbUhOO0FFaEhJO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7QUZrSE47QUU5R0E7RUFDRSxrQkFBQTtBRmlIRjtBRS9HRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUZBQUE7QUZpSEo7QUU5R0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlGQUFBO0FGZ0hKO0FFM0dBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FGOEdGO0FFM0dBO0VBQ0UsZ0JBQUE7QUY4R0Y7QUUzR0E7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRjhHRjtBRTNHQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUY4R0Y7QUUzR0E7RUFDRSxXQUFBO0FGOEdGO0FFM0dBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRjhHRjtBRTNHQTtFQUNFLDRDQUFBO0FGOEdGO0FFM0dBO0VBQ0UsZUFBQTtBRjhHRjtBRS9HQTtFQUNFLGVBQUE7QUY4R0Y7QUUvR0E7RUFDRSxlQUFBO0FGOEdGO0FFL0dBO0VBQ0UsZUFBQTtBRjhHRjtBRTFHQTtFQUNFLHNCQUFBO0VBQ0EsNENBQUE7QUY2R0Y7QUUxR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUY2R0Y7QUUxR0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FGNkdGO0FFMUdBO0VBQ0Usc0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUY2R0Y7QUUxR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUY2R0Y7QUUxR0E7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBRjZHRjtBRTFHQTtFQUNFLGVBQUE7QUY2R0Y7QUUxR0E7RUFDRSxrQkFBQTtBRjZHRjtBRTFHQTtFQUNFLGFBQUE7QUY2R0Y7QUUxR0E7RUFDRSxpQkFBQTtBRjZHRjtBRXhHRTtFQUNFLGNBQUE7RUFDQSx5QkR0U2M7QURpWmxCO0FFekdJO0VDalFGLGdEQUFBO0VBQ0Esd0NBQUE7QUg2V0Y7QUV6R0k7RUNyUUYsa0RBQUE7RUFDQSwwQ0FBQTtBSGlYRjtBRXpHSTtFQ3pRRixpREFBQTtFQUNBLHlDQUFBO0FIcVhGO0FFekdJO0VDN1FGLGlEQUFBO0VBQ0EseUNBQUE7QUh5WEY7QUV6R0k7RUNqUkYsNkRBQUE7RUFDQSxxREFBQTtBSDZYRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wcm9maWxlLW1hbmFnZW1lbnQvY3JlYXRlLW5ldy1wcm9maWxlL25ldy10cmF2ZWxsZXItcHJvZmlsZS9uZXctdHJhdmVsbGVyLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RlcHBlci1ncmlkIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gIC5zdGVwcGVyLWdyaWRfc3RlcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG9wYWNpdHk6IC42O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICYuX2FjdGl2ZSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XHJcblxyXG4gICAgICAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiB7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkZWVwLWJsdWUtY29sb3I7XHJcbiAgICAgICAgICBib3JkZXI6IDA7XHJcblxyXG4gICAgICAgICAgZGl2LmltYWdlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGVlcC1ibHVlLWNvbG9yO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciB7XHJcbiAgICAgICAgaHIge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRkZWVwLWJsdWUtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5fYWN0aXZhdGVkIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxuXHJcbiAgICAgIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIHtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgICBib3JkZXI6IDA7XHJcblxyXG4gICAgICAgICAgZGl2LmltYWdlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIge1xyXG4gICAgICAgIGhyIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICBkaXYge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsYWJlbCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1wcmltYXJ5O1xyXG5cclxuICAgICAgICAmLl9sYXN0IHtcclxuICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtYm9yZGVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICBociB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTI0cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnN0ZXBwZXItZ3JpZC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAmLl9hY3RpdmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcbiIsIi5zdGVwcGVyLWdyaWQge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvcGFjaXR5OiAwLjY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYyODYyO1xuICBib3JkZXI6IDA7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiBkaXYuaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmUgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2OmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0E2QjFDMztcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmUgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gbGFiZWwge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjI4NjI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmUgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciBociB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDYyODYyO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2YXRlZCB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzdBREE7XG4gIGJvcmRlcjogMDtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IGRpdi5pbWFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2YXRlZCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXY6aG92ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjQTZCMUMzO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2YXRlZCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBsYWJlbCB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzN0FEQTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2YXRlZCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtYm9yZGVyIGhyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0MzdBREE7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAycHggc29saWQgI0E2QjFDMztcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBsYWJlbCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAycHggc29saWQgI0E2QjFDMztcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI0E2QjFDMztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gbGFiZWwuX2xhc3Qge1xuICB3aWR0aDogMTUwcHg7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtYm9yZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtYm9yZGVyIGhyIHtcbiAgbWFyZ2luLXRvcDogLTI0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNBNkIxQzM7XG59XG5cbi5zdGVwcGVyLWdyaWQtY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc3RlcHBlci1ncmlkLWNvbnRlbnQuX2FjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udWkuZ3JpZCArIC5ncmlkIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuaDMgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiByZ2JhKDYsIDQwLCA5OCwgMC44KTtcbn1cblxuLmNoZWNrYm94X2xhYmVsIHtcbiAgaGVpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjODI4MjgyICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBVYnVudHUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcbn1cblxuaDQge1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogcmdiYSg2LCA0MCwgOTgsIDAuOCk7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBjb2xvcjogcmdiYSg2LCA0MCwgOTgsIDAuNik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxubGFiZWwubGFiZWwtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiByZ2JhKDYsIDQwLCA5OCwgMC42KSAhaW1wb3J0YW50O1xufVxuXG4udWkucmFkaW8uY2hlY2tib3ggbGFiZWwge1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogcmdiYSg2LCA0MCwgOTgsIDAuNSk7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xufVxuXG4udWkuZm9ybSBpbnB1dFt0eXBlPXRleHRdLFxuaW5wdXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY3LCAxMjIsIDIxOCwgMC4xNSkgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHggMTVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4udWkuZm9ybSBpbnB1dFt0eXBlPXRleHRdOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLFxuaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHJnYmEoNjcsIDEyMiwgMjE4LCAwLjY1KSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi51aS5mb3JtIGlucHV0W3R5cGU9dGV4dF06LW1vei1wbGFjZWhvbGRlcixcbmlucHV0Oi1tb3otcGxhY2Vob2xkZXIge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHJnYmEoNjcsIDEyMiwgMjE4LCAwLjY1KSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi51aS5mb3JtIGlucHV0W3R5cGU9dGV4dF06Oi1tb3otcGxhY2Vob2xkZXIsXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBjb2xvcjogcmdiYSg2NywgMTIyLCAyMTgsIDAuNjUpICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnVpLmZvcm0gaW5wdXRbdHlwZT10ZXh0XTotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHJnYmEoNjcsIDEyMiwgMjE4LCAwLjY1KSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm10YiB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5tbCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ubXIge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5ib29raW5nLWhlYWRlciB7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW4tbGVmdDogMjJweDtcbn1cblxuLmJvb2tpbmctaGVhZGVyIHtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1hcmdpbi1sZWZ0OiAyMnB4O1xufVxuXG4ub3V0ZXItYmFzaWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG59XG5cbi5vdXRlci1iYXNpY0Zvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiA1MHB4O1xufVxuXG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQuYm9va2luZ3NfZGF0ZXBpY2tlciB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIG1heC13aWR0aDogMTM4cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnVpLmJhc2ljLmZsb2F0aW5nLmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYmEoMTUyLCAxNTIsIDE1MiwgMC42KSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5pY29uIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTAwO1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbCB7XG4gIHdpZHRoOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc3RlcHBlci1ncmlkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnN0ZXBwZXItZ3JpZC1jb250ZW50Ll9hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuZiAub3V0ZXItYmFzaWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zZWFyY2guZHJvcGRvd24ge1xuICB3aWR0aDogMjE4cHg7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG59XG4uc2VhcmNoLmRyb3Bkb3duIC5zZWFyY2gge1xuICBtYXJnaW4tbGVmdDogNDJweCAhaW1wb3J0YW50O1xufVxuLnNlYXJjaC5kcm9wZG93biAuZGVmYXVsdC50ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogOHB4IDAgMCAzOHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5ib29raW5nc19idG4tcGFuZWwge1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG4uYm9va2luZ3NfYnRuLXBhbmVsIC5zZWNvbmRhcnkge1xuICB3aWR0aDogMTM1LjY0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRGNEY0RjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLmJvb2tpbmdzX2J0bi1wYW5lbCAucHJpbWFyeSB7XG4gIHdpZHRoOiAxMzUuNjRweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi50cmFpbGluZ19idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubmV3QWdlbmN5X3RvcEFsaWduIHtcbiAgcGFkZGluZy10b3A6IDF2aDtcbn1cblxudGQge1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50aCB7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb25maXJtIHtcbiAgd2lkdGg6IDYzcHg7XG59XG5cbi5yZWNDb25maXJtIHtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogNjJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcyRDQ0RjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMC41dmg7XG59XG5cbi50YWIuc2VnbWVudCB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4uZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ub3V0ZXItYmFzaWNfc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm94LXNoYWRvdzogM3B4IDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5vdXRlci1iYXNpY0Zvcm1fc2Vjb25kYXJ5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogNTBweDtcbn1cblxuLnJpZ2h0X2xpbmtzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgcGFkZGluZy10b3A6IDF2aDtcbiAgcGFkZGluZy1yaWdodDogOHZoO1xufVxuXG4ub3V0ZXItYmFzaWNfdGVydGlhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG59XG5cbi5vdXRlci1iYXNpY0Zvcm1fdGVydGlhcnkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiA1MHB4O1xufVxuXG5ociB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNFMEUwRTA7XG59XG5cbi5kcm9wZG93biAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmJvb2tpbmdzX2J0bi1wYW5lbC50cmFpbGluZ19idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDQ1cHg7XG59XG5cbi51aS5mbHVpZC5jb250YWluZXIge1xuICBwYWRkaW5nOiAyOHB4O1xufVxuXG4udWkuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDQycHg7XG59XG5cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiBkaXYuaW1hZ2Uge1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E2QjFDMztcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiBkaXYuaW1hZ2UuX3RyYXZlbCB7XG4gIC13ZWJraXQtbWFzazogdXJsKFwiLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3RyYXZlbC5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgbWFzazogdXJsKFwiLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3RyYXZlbC5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiBkaXYuaW1hZ2UuX3VzZXIge1xuICAtd2Via2l0LW1hc2s6IHVybChcIi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9wZXJzb25hbC5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgbWFzazogdXJsKFwiLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3BlcnNvbmFsLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IGRpdi5pbWFnZS5fcGF5bWVudCB7XG4gIC13ZWJraXQtbWFzazogdXJsKFwiLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3BheW1lbnQuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG4gIG1hc2s6IHVybChcIi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9wYXltZW50LnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IGRpdi5pbWFnZS5fcmVtYXJrcyB7XG4gIC13ZWJraXQtbWFzazogdXJsKFwiLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3JlbWFya3Muc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG4gIG1hc2s6IHVybChcIi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9yZW1hcmtzLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IGRpdi5pbWFnZS5fYWlybGluZSB7XG4gIC13ZWJraXQtbWFzazogdXJsKFwiLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL2FpcmxpbmUtcHJlZmVyZW5jZXMuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG4gIG1hc2s6IHVybChcIi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9haXJsaW5lLXByZWZlcmVuY2VzLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xufSIsIiRwcmltYXJ5LWNvbG9yOiAjNDM3QURBO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjQTZCMUMzO1xyXG4kZGVlcC1ibHVlLWNvbG9yOiAjMDYyODYyO1xyXG4kbGlnaHQtc21va2UtY29sb3I6ICNlNWU1ZTU7XHJcbiR2b2lsYS1ncmVlbjogIzg0QkM2QTtcclxuJHB1cmUtd2hpdGU6IHdoaXRlO1xyXG4kZmF1bHQtY29sb3I6ICNERTc5Nzk7XHJcbiR3YXJuaW5nLWNvbG9yOiAjRUNDMDRFO1xyXG4kc3VjY2Vzcy1jb2xvcjogIzczQjI1RDtcclxuXHJcbiRib2R5LWJhc2U6ICNGNkY5RkM7XHJcbiRjb3Jwb3JhdGUtYmx1ZS1iYXNlOiAjNDU2N0FDO1xyXG5cclxuJGNvbnRhaW5lci1iYXNlOiB3aGl0ZTtcclxuJGNvbnRhaW5lci1iYXNlLXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSg2LCA0MCwgOTgsIDAuMSk7XHJcbiRjb250YWluZXItZHJvcGRvd25zLXNoYWRvdzogMHB4IDhweCAxNHB4IHJnYmEoMCwgNTgsIDE2NCwgLjIpO1xyXG5cclxuJHByaW1hcnktc2hhZG93OiAwcHggNC44M3B4IDE2cHggcmdiYSg2NywgMTIyLCAyMTgsIC41KTtcclxuJGxpZ2h0LXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgwLCA1OCwgMTY0LCAuMjUpO1xyXG4kZmFkZWQtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDE2NywgMTczLCAxODIsIC4yKTtcclxuJGxpZ2h0LWV4dGVuZGVkLXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgwLCA1OCwgMTY0LCAuMjUpO1xyXG5cclxuJGJvcmRlci1yYWRpdXMtcHJpbWFyeTogOHB4O1xyXG4kYm9yZGVyLXJhZGl1cy1zZWNvbmRhcnk6IDZweDtcclxuXHJcbiRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiRmb250LXdlaWdodC1ub3JtYWw6IDQwMDtcclxuXHJcbiR0b2FzdC1pbmZvLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuJHRvYXN0LWluZm8tc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTExLCAwLCAwLCAuMik7XHJcblxyXG4kdG9hc3QtZXJyb3ItY29sb3I6ICRmYXVsdC1jb2xvcjtcclxuJHRvYXN0LWVycm9yLXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDExMSwgMCwgMCwgLjIpO1xyXG5cclxuJHRvYXN0LXdhcm5pbmctY29sb3I6ICR3YXJuaW5nLWNvbG9yO1xyXG4kdG9hc3Qtd2FybmluZy1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxNzcsIDEyNywgMCwgLjIpO1xyXG5cclxuJHRvYXN0LXN1Y2Nlc3MtY29sb3I6ICRzdWNjZXNzLWNvbG9yO1xyXG4kdG9hc3Qtc3VjY2Vzcy1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgzNCwgMTMwLCAwLCAuMik7XHJcbiIsIkBpbXBvcnQgXCIuLy4uLy4uLy4uLy4uLy4uL2NvbW9uLXN0eWxlcy9jb21tb24uc2Nzc1wiO1xyXG5cclxuLnVpLmdyaWQrLmdyaWQge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbn1cclxuXHJcbmgzIHNwYW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xyXG4gIGNvbG9yOiByZ2JhKCRkZWVwLWJsdWUtY29sb3IsIC44KTtcclxufVxyXG5cclxuXHJcbi5jaGVja2JveF9sYWJlbCB7XHJcbiAgaGVpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM4MjgyODIgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogVWJ1bnR1ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5oNCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XHJcbiAgY29sb3I6IHJnYmEoJGRlZXAtYmx1ZS1jb2xvciwgLjgpO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHJnYmEoJGRlZXAtYmx1ZS1jb2xvciwgLjYpO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59XHJcblxyXG5sYWJlbC5sYWJlbC10ZXh0IHtcclxuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHJnYmEoJGRlZXAtYmx1ZS1jb2xvciwgLjYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51aS5yYWRpby5jaGVja2JveCBsYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XHJcbiAgY29sb3I6IHJnYmEoJGRlZXAtYmx1ZS1jb2xvciwgLjUpO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi51aS5mb3JtIGlucHV0W3R5cGU9dGV4dF0sXHJcbmlucHV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRwcmltYXJ5LWNvbG9yLCAuMTUpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDhweCAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG5cclxuICBAaW5jbHVkZSBwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xyXG4gICAgY29sb3I6IHJnYmEoJHByaW1hcnktY29sb3IsIC42NSkgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbn1cclxuXHJcbi5tdGIge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLm1sIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuLm1yIHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5ib29raW5nLWhlYWRlciB7XHJcbiAgY29sb3I6ICM0RjRGNEY7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBtYXJnaW4tbGVmdDogMjJweDtcclxufVxyXG5cclxuLmJvb2tpbmctaGVhZGVyIHtcclxuICBjb2xvcjogIzRGNEY0RjtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMnB4O1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgYm94LXNoYWRvdzogM3B4IDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljRm9ybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbn1cclxuXHJcbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCB7XHJcblxyXG4gICYuYm9va2luZ3NfZGF0ZXBpY2tlciB7XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMzhweFxyXG4gIH1cclxuXHJcbiAgLnVpLmJhc2ljLmZsb2F0aW5nLmJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogcmdiYSgxNTIsIDE1MiwgMTUyLCAwLjYpICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTFweDtcclxuICB9XHJcblxyXG4gIC5pY29uIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcblxyXG4gICAgLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuXHJcbiAgICAgICYuY2FsIHtcclxuICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc3RlcHBlci1ncmlkLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICYuX2FjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuXHJcbmYgLm91dGVyLWJhc2ljIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZy10b3A6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuICAuc2VhcmNoLmRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAyMThweDtcclxuICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAuc2VhcmNoIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDQycHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVmYXVsdC50ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZzogOHB4IDAgMCAzOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLmJvb2tpbmdzX2J0bi1wYW5lbCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG5cclxuICAuc2Vjb25kYXJ5IHtcclxuICAgIHdpZHRoOiAxMzUuNjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0RjRGNEY7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgfVxyXG5cclxuICAucHJpbWFyeSB7XHJcbiAgICB3aWR0aDogMTM1LjY0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi50cmFpbGluZ19idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLm5ld0FnZW5jeV90b3BBbGlnbiB7XHJcbiAgcGFkZGluZy10b3A6IDF2aDtcclxufVxyXG5cclxudGQge1xyXG4gIGNvbG9yOiAjNEY0RjRGO1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxudGgge1xyXG4gIGNvbG9yOiAjNEY0RjRGO1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY29uZmlybSB7XHJcbiAgd2lkdGg6IDYzcHg7XHJcbn1cclxuXHJcbi5yZWNDb25maXJtIHtcclxuICBoZWlnaHQ6IDE4cHg7XHJcbiAgd2lkdGg6IDYycHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcyRDQ0RjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZy10b3A6IC41dmg7XHJcbn1cclxuXHJcbi50YWIuc2VnbWVudCB7XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi5maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuXHJcbi5vdXRlci1iYXNpY19zZWNvbmRhcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgYm94LXNoYWRvdzogM3B4IDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpY0Zvcm1fc2Vjb25kYXJ5IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogNTBweDtcclxufVxyXG5cclxuLnJpZ2h0X2xpbmtzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcGFkZGluZy10b3A6IDF2aDtcclxuICBwYWRkaW5nLXJpZ2h0OiA4dmg7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpY190ZXJ0aWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWNGb3JtX3RlcnRpYXJ5IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogNTBweDtcclxufVxyXG5cclxuaHIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjRTBFMEUwO1xyXG59XHJcblxyXG4uZHJvcGRvd24gLnRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmJvb2tpbmdzX2J0bi1wYW5lbC50cmFpbGluZ19idXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogNDVweDtcclxufVxyXG5cclxuLnVpLmZsdWlkLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMjhweDtcclxufVxyXG5cclxuLnVpLmJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQycHg7XHJcbn1cclxuXHJcblxyXG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYge1xyXG4gIGRpdi5pbWFnZSB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcblxyXG4gICAgJi5fdHJhdmVsIHtcclxuICAgICAgQGluY2x1ZGUgbWFzay1zdmctZGl2KCcuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvdHJhdmVsLnN2ZycpO1xyXG4gICAgfVxyXG5cclxuICAgICYuX3VzZXIge1xyXG4gICAgICBAaW5jbHVkZSBtYXNrLXN2Zy1kaXYoJy4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9wZXJzb25hbC5zdmcnKTtcclxuICAgIH1cclxuXHJcbiAgICAmLl9wYXltZW50IHtcclxuICAgICAgQGluY2x1ZGUgbWFzay1zdmctZGl2KCcuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcGF5bWVudC5zdmcnKTtcclxuICAgIH1cclxuXHJcbiAgICAmLl9yZW1hcmtzIHtcclxuICAgICAgQGluY2x1ZGUgbWFzay1zdmctZGl2KCcuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcmVtYXJrcy5zdmcnKTtcclxuICAgIH1cclxuXHJcbiAgICAmLl9haXJsaW5lIHtcclxuICAgICAgQGluY2x1ZGUgbWFzay1zdmctZGl2KCcuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYWlybGluZS1wcmVmZXJlbmNlcy5zdmcnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiQG1peGluIHBsYWNlaG9sZGVyIHtcclxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgJjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcblxyXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIGNvbG9yLW9wYWNpdHkoJGNvbG9yLCAkb3BhY2l0eTogMC4zKSB7XHJcbiAgYmFja2dyb3VuZDogJGNvbG9yO1xyXG4gIC8qIFRoZSBGYWxsYmFjayAqL1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yLCAkb3BhY2l0eSk7XHJcbn1cclxuXHJcbkBtaXhpbiBoaWRlTnVtYmVyRmllbGRBcnJvd3Mge1xyXG5cclxuICAvKiBDaHJvbWUsIFNhZmFyaSwgRWRnZSwgT3BlcmEgKi9cclxuICBpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuICBpbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC8qIEZpcmVmb3ggKi9cclxuICBpbnB1dFt0eXBlPW51bWJlcl0ge1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBtYXNrLXN2Zy1kaXYoJGltZykge1xyXG4gIC13ZWJraXQtbWFzazogdXJsKCRpbWcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbiAgbWFzazogdXJsKCRpbWcpIG5vLXJlcGVhdCBjZW50ZXI7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/layout/profile-management/create-new-profile/new-traveller-profile/new-traveller-profile.component.ts":
  /*!***********************************************************************************************************************!*\
    !*** ./src/app/layout/profile-management/create-new-profile/new-traveller-profile/new-traveller-profile.component.ts ***!
    \***********************************************************************************************************************/

  /*! exports provided: NewTravellerProfileComponent */

  /***/
  function srcAppLayoutProfileManagementCreateNewProfileNewTravellerProfileNewTravellerProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewTravellerProfileComponent", function () {
      return NewTravellerProfileComponent;
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

    var NewTravellerProfileComponent =
    /*#__PURE__*/
    function () {
      function NewTravellerProfileComponent(route, ProfileManagementService, fb, el) {
        var _this = this;

        _classCallCheck(this, NewTravellerProfileComponent);

        this.route = route;
        this.ProfileManagementService = ProfileManagementService;
        this.fb = fb;
        this.el = el;
        this.newTravellerProfileObj = {};
        this.newTravellerProfileForm = this.fb.group({
          salutation: [''],
          first_name: [''],
          last_name: [''],
          dob: [''],
          gender: [''],
          customerIndex: [''],
          customer_status: [''],
          passengerType: [''],
          companyName: [''],
          languages: [''],
          nationality: [''],
          number_details: this.fb.array([this.fb.group(this.initNumberDetails())]),
          add_email: this.fb.array([this.fb.group(this.initAddEmail())]),
          address_details: this.fb.array([this.fb.group(this.initAddress())]),
          jobTitle: [''],
          category: [''],
          marital_status: [''],
          noOfChildren_family: [''],
          customers: this.fb.array([this.fb.group(this.initCustomer())]),
          //agency has to be changed
          agency_office: this.fb.array([this.fb.group(this.initAgency())]),
          agency_contact_name: {},
          misc_ticketing: this.fb.array([this.fb.group(this.initMisc_ticketing())]),
          ticketing_arrangements: this.fb.array([this.fb.group(this.initTicketing_arrangements())]),
          original_issue: this.fb.array([this.fb.group(this.initOriginalIssue())]),
          tour_code: this.fb.array([this.fb.group(this.initTour_code())]),
          validating_carrier: this.fb.array([this.fb.group(this.initValidatingCarrier())]),
          shadow_destination: [''],
          keywords: this.fb.array([this.fb.group(this.initKeywords())]),
          travel_management: [''],
          fare_types: [''],
          //change the datatype start 
          bank_code: [''],
          bank_name: [''],
          bank_number: [''],
          bank_valid_from: [''],
          bank_valid_to: [''],
          direct_debit_authorized: [''],
          //change the datatype stop
          forms_of_payment: this.fb.array([this.fb.group(this.initForms_of_payment())]),
          fare_price_override: this.fb.array([this.fb.group(this.initFare_price_override())]),
          endorsements: this.fb.array([this.fb.group(this.initEndorsements())]),
          discount: [''],
          commission: this.fb.array([this.fb.group(this.initComission())]),
          accounting: this.fb.array([this.fb.group(this.initAccounting())]),
          remarks: this.fb.array([this.fb.group(this.initRemarks())]),
          profile_notes: this.fb.array([this.fb.group(this.initProfile_Notes())]),
          priority_lines: this.fb.array([this.fb.group(this.initPriority_lines())]),
          follow_up: this.fb.array([this.fb.group(this.initFollow_up())]),
          special_needs: this.fb.array([this.fb.group(this.initSpecial_needs())]),
          frequent_flyers: this.fb.array([this.fb.group(this.initFrequentFlyers())]),
          seating_preferences: this.fb.array([this.fb.group(this.initSeatingPreference())]),
          home_airport: [''],
          arrival_airport: [''],
          delivery_method: [''],
          delivery_time: [''],
          airline_preferrences: this.fb.array([this.fb.group(this.initAirlinePreference())]),
          created: [''] //date

        });

        this.createNewTravellerProfile = function () {
          _this.newTravellerProfileObj.created = ""; //this.newTravellerProfileObj.id = "5";

          _this.newTravellerProfileObj.traveller_profile_id = _this.newTravellerProfileId; //ask Praveen

          _this.newTravellerProfileObj.organisation_id = "12"; // this.newReportForm.get('roleSearch').setValue(value);
          // this.newReportObj.roleSearch = this.newReportForm.get('roleSearch').value;
          //this.newTravellerProfileForm.get("salutaion").setValue(value);

          _this.newTravellerProfileObj.salutation = _this.newTravellerProfileForm.get('salutation').value;
          _this.newTravellerProfileObj.first_name = _this.newTravellerProfileForm.get('first_name').value;
          _this.newTravellerProfileObj.last_name = _this.newTravellerProfileForm.get('last_name').value;
          _this.newTravellerProfileObj.dob = _this.newTravellerProfileForm.get('dob').value;
          _this.newTravellerProfileObj.gender = _this.newTravellerProfileForm.get('gender').value;
          _this.newTravellerProfileObj.customerIndex = _this.newTravellerProfileForm.get('customerIndex').value;
          _this.newTravellerProfileObj.customer_status = _this.newTravellerProfileForm.get('customer_status').value;
          _this.newTravellerProfileObj.passenger_type = _this.newTravellerProfileForm.get('passengerType').value;
          _this.newTravellerProfileObj.company_name = _this.newTravellerProfileForm.get('companyName').value;
          _this.newTravellerProfileObj.languages = _this.newTravellerProfileForm.get('languages').value;
          _this.newTravellerProfileObj.nationality = _this.newTravellerProfileForm.get('nationality').value;
          _this.newTravellerProfileObj.number_details = JSON.stringify(_this.newTravellerProfileForm.get('number_details').value);
          _this.newTravellerProfileObj.add_email = JSON.stringify(_this.newTravellerProfileForm.get('add_email').value);
          _this.newTravellerProfileObj.address_details = JSON.stringify(_this.newTravellerProfileForm.get('address_details').value);
          _this.newTravellerProfileObj.job_title = _this.newTravellerProfileForm.get('jobTitle').value;
          _this.newTravellerProfileObj.category = _this.newTravellerProfileForm.get('category').value;
          _this.newTravellerProfileObj.marital_status = _this.newTravellerProfileForm.get('marital_status').value;
          _this.newTravellerProfileObj.no_children = _this.newTravellerProfileForm.get('noOfChildren_family').value;
          _this.newTravellerProfileObj.customers = ""; //this.newTravellerProfileObj.customers = this.newTravellerProfileForm.get('customers').value;

          _this.newTravellerProfileObj.agency_office = JSON.stringify(_this.newTravellerProfileForm.get('agency_office').value);
          _this.newTravellerProfileObj.agency_contact_name = JSON.stringify(_this.newTravellerProfileForm.get('agency_contact_name').value);
          _this.newTravellerProfileObj.misc_ticketing = JSON.stringify(_this.newTravellerProfileForm.get('misc_ticketing').value);
          _this.newTravellerProfileObj.ticketing_arrangements = JSON.stringify(_this.newTravellerProfileForm.get('ticketing_arrangements').value);
          _this.newTravellerProfileObj.original_issue = JSON.stringify(_this.newTravellerProfileForm.get('original_issue').value);
          _this.newTravellerProfileObj.tour_code = JSON.stringify(_this.newTravellerProfileForm.get('tour_code').value);
          _this.newTravellerProfileObj.validating_carrier = JSON.stringify(_this.newTravellerProfileForm.get('validating_carrier').value);
          _this.newTravellerProfileObj.shadow_destination = _this.newTravellerProfileForm.get('shadow_destination').value;
          _this.newTravellerProfileObj.keywords = JSON.stringify(_this.newTravellerProfileForm.get('keywords').value);
          _this.newTravellerProfileObj.travel_management = _this.newTravellerProfileForm.get('travel_management').value;
          _this.newTravellerProfileObj.fare_types = _this.newTravellerProfileForm.get('fare_types').value;
          _this.newTravellerProfileObj.bank_code = _this.newTravellerProfileForm.get('bank_code').value;
          _this.newTravellerProfileObj.bank_name = _this.newTravellerProfileForm.get('bank_name').value;
          _this.newTravellerProfileObj.bank_number = _this.newTravellerProfileForm.get('bank_number').value;
          _this.newTravellerProfileObj.bank_valid_from = _this.newTravellerProfileForm.get('bank_valid_from').value;
          _this.newTravellerProfileObj.bank_valid_to = _this.newTravellerProfileForm.get('bank_valid_to').value;
          _this.newTravellerProfileObj.direct_debit_authorized = _this.newTravellerProfileForm.get('direct_debit_authorized').value;
          _this.newTravellerProfileObj.forms_of_payment = JSON.stringify(_this.newTravellerProfileForm.get('forms_of_payment').value);
          _this.newTravellerProfileObj.fare_price_override = JSON.stringify(_this.newTravellerProfileForm.get('fare_price_override').value);
          _this.newTravellerProfileObj.endorsements = JSON.stringify(_this.newTravellerProfileForm.get('endorsements').value);
          _this.newTravellerProfileObj.discount = _this.newTravellerProfileForm.get('discount').value;
          _this.newTravellerProfileObj.commission = JSON.stringify(_this.newTravellerProfileForm.get('commission').value);
          _this.newTravellerProfileObj.accounting = JSON.stringify(_this.newTravellerProfileForm.get('accounting').value);
          _this.newTravellerProfileObj.remarks = JSON.stringify(_this.newTravellerProfileForm.get('remarks').value);
          _this.newTravellerProfileObj.profile_notes = JSON.stringify(_this.newTravellerProfileForm.get('profile_notes').value);
          _this.newTravellerProfileObj.priority_lines = JSON.stringify(_this.newTravellerProfileForm.get('priority_lines').value);
          _this.newTravellerProfileObj.follow_up = JSON.stringify(_this.newTravellerProfileForm.get('follow_up').value);
          _this.newTravellerProfileObj.special_needs = JSON.stringify(_this.newTravellerProfileForm.get('special_needs').value);
          _this.newTravellerProfileObj.frequent_flyers = JSON.stringify(_this.newTravellerProfileForm.get('frequent_flyers').value);
          _this.newTravellerProfileObj.seating_preferences = JSON.stringify(_this.newTravellerProfileForm.get('seating_preferences').value);
          _this.newTravellerProfileObj.home_airport = _this.newTravellerProfileForm.get('home_airport').value;
          _this.newTravellerProfileObj.arrival_airport = _this.newTravellerProfileForm.get('arrival_airport').value;
          _this.newTravellerProfileObj.delivery_method = _this.newTravellerProfileForm.get('delivery_method').value;
          _this.newTravellerProfileObj.delivery_time = _this.newTravellerProfileForm.get('delivery_time').value;
          _this.newTravellerProfileObj.airline_preferrences = JSON.stringify(_this.newTravellerProfileForm.get('airline_preferrences').value);
          console.log("You shall not pass", _this.newTravellerProfileObj);

          _this.ProfileManagementService.NewTravellerProfile(_this.newTravellerProfileObj).subscribe(function (results) {
            console.log(results);
          });
        };

        var uniqueProfileID = Math.random().toString(36).substring(7);
        console.log(uniqueProfileID);
        this.newTravellerProfileId = uniqueProfileID + "Amedius"; //alert(this.newTravellerProfileId);

        this.route.queryParams.subscribe(function (params) {
          console.log(params);
          _this.travellerProfileId = params.traveller_profile_id;

          _this.newTravellerProfileForm.patchValue({
            salutation: params.salutation,
            first_name: params.first_name,
            last_name: params.last_name,
            dob: params.dob,
            gender: params.gender,
            customerIndex: params.customerIndex,
            customer_status: params.customer_status,
            passengerType: params.passengerType,
            companyName: params.companyName,
            languages: params.languages,
            nationality: params.nationality,
            jobTitle: params.jobTitle,
            category: params.category,
            marital_status: params.marital_status,
            noOfChildren_family: params.noOfChildren_family,
            //agency_contact_name: {},
            shadow_destination: params.shadow_destination,
            travel_management: params.travel_management,
            fare_types: params.fare_types,
            bank_code: params.bank_code,
            bank_name: params.bank_name,
            bank_number: params.bank_number,
            bank_valid_from: params.bank_valid,
            bank_valid_to: params.bank_valid_to,
            direct_debit_authorized: params.direct_debit_authorized,
            discount: params.discount,
            home_airport: params.home_airport,
            arrival_airport: params.arrival_airport,
            delivery_method: params.delivery_time,
            delivery_time: params.delivery_time,
            created: params.created
          });

          var numberDetails = _this.parsingArrayParams(params.number_details, _this.number_details);

          var addEmail = _this.parsingArrayParams(params.add_email, _this.add_email);

          var addressDetails = _this.parsingArrayParams(params.address_details, _this.address_details);

          var customer = _this.parsingArrayParams(params.customers, _this.customers);

          var agencyOffice = _this.parsingArrayParams(params.agency_office, _this.agency_office);

          var miscTicketing = _this.parsingArrayParams(params.misc_ticketing, _this.misc_ticketing);

          var ticketingArrangements = _this.parsingArrayParams(params.ticketing_arrangements, _this.ticketing_arrangements);

          var originalIssue = _this.parsingArrayParams(params.original_issue, _this.original_issue);

          var tourCode = _this.parsingArrayParams(params.tour_code, _this.tour_code);

          var validatingCarrier = _this.parsingArrayParams(params.validating_carrier, _this.validating_carrier);

          var keywords = _this.parsingArrayParams(params.keywords, _this.keywords);

          var formOfPayments = _this.parsingArrayParams(params.forms_of_payment, _this.forms_of_payment);

          var farePriceOverride = _this.parsingArrayParams(params.fare_price_override, _this.fare_price_override);

          var endorsements = _this.parsingArrayParams(params.endorsements, _this.endorsements);

          var commision = _this.parsingArrayParams(params.commision, _this.commission);

          var accounting = _this.parsingArrayParams(params.accounting, _this.accounting);

          var remarks = _this.parsingArrayParams(params.remarks, _this.remarks);

          var profileNotes = _this.parsingArrayParams(params.profile_notes, _this.profile_notes);

          var priorityLines = _this.parsingArrayParams(params.priority_lines, _this.priority_lines);

          var followUp = _this.parsingArrayParams(params.follow_up, _this.follow_up);

          var specialNeeds = _this.parsingArrayParams(params.special_needs, _this.special_needs);

          var frequentFlyers = _this.parsingArrayParams(params.frequent_flyers, _this.frequent_flyers);

          var seatingPreference = _this.parsingArrayParams(params.seating_preferences, _this.seating_preferences);

          var airlinePreference = _this.parsingArrayParams(params.airline_preferrences, _this.airline_preferrences);
        });
        $(document).ready(function () {
          $('.ui.rating').rating();
        });
      }

      _createClass(NewTravellerProfileComponent, [{
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
        key: "initNumberDetails",
        value: function initNumberDetails() {
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
        key: "initCustomer",
        value: function initCustomer() {
          return {
            customer_number: [''],
            customer_type: [''],
            description_customer: [''],
            validForm_customer: [''],
            validUntil_customer: ['']
          };
        }
      }, {
        key: "initAgency",
        value: function initAgency() {
          return {
            responsibleOffice_agency: [''],
            deptContactName_agency: [''],
            agentContactName_agency: ['']
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
        key: "initTicketing_arrangements",
        value: function initTicketing_arrangements() {
          return {
            ticketingArrangement_provider: [''],
            validatingCarrier_provider: ['']
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
        key: "initPriority_lines",
        value: function initPriority_lines() {
          return {
            priorityInformation1: [''],
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
        key: "initFrequentFlyers",
        value: function initFrequentFlyers() {
          return {
            frequent_flyers_airCode: [''],
            frequent_flyers_number: [''],
            frequent_flyers_partnerAirCode: ['']
          };
        }
      }, {
        key: "initSeatingPreference",
        value: function initSeatingPreference() {
          return {
            seating_preference: [''],
            flight_type: ['']
          };
        }
      }, {
        key: "initAirlinePreference",
        value: function initAirlinePreference() {
          return {
            prefered_airline: ['']
          };
        }
      }, {
        key: "addMoreNumbers",
        value: function addMoreNumbers() {
          this.number_details.push(this.fb.group(this.initNumberDetails()));
        } // removeNumbers(index): void {
        //   this.number_details.removeAt(index);
        // }

      }, {
        key: "addMoreEmail",
        value: function addMoreEmail() {
          this.add_email.push(this.fb.group(this.initAddEmail()));
        }
      }, {
        key: "addMoreAddress",
        value: function addMoreAddress() {
          this.address_details.push(this.fb.group(this.initAddress()));
        }
      }, {
        key: "addMoreCustomers",
        value: function addMoreCustomers() {
          this.customers.push(this.fb.group(this.initCustomer()));
        }
      }, {
        key: "addMoreAgency",
        value: function addMoreAgency() {
          this.agency_office.push(this.fb.group(this.initAgency()));
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
        key: "removeTicketingArrangement",
        value: function removeTicketingArrangement(index) {
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
        key: "removeOriginal_issue",
        value: function removeOriginal_issue(index) {
          this.original_issue.removeAt(index);
        }
      }, {
        key: "addMoreTour_code",
        value: function addMoreTour_code() {
          this.tour_code.push(this.fb.group(this.initTour_code()));
        }
      }, {
        key: "removeTour_code",
        value: function removeTour_code(index) {
          this.tour_code.removeAt(index);
        }
      }, {
        key: "addMoreKeywords",
        value: function addMoreKeywords() {
          this.keywords.push(this.fb.group(this.initKeywords()));
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
        key: "addMorePriorityLines",
        value: function addMorePriorityLines() {
          this.priority_lines.push(this.fb.group(this.initPriority_lines()));
        }
      }, {
        key: "addMoreFollowUp",
        value: function addMoreFollowUp() {
          this.follow_up.push(this.fb.group(this.initFollow_up()));
        }
      }, {
        key: "addMoreSeatingPreference",
        value: function addMoreSeatingPreference() {
          this.seating_preferences.push(this.fb.group(this.initSeatingPreference()));
        }
      }, {
        key: "removeSeatingPreference",
        value: function removeSeatingPreference(index) {
          this.seating_preferences.removeAt(index);
        }
      }, {
        key: "addMoreAirlinePreferences",
        value: function addMoreAirlinePreferences() {
          this.airline_preferrences.push(this.fb.group(this.initAirlinePreference()));
        }
      }, {
        key: "removeAirlinePreference",
        value: function removeAirlinePreference(index) {
          this.airline_preferrences.removeAt(index);
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
        key: "addMoreFrequentFlyers",
        value: function addMoreFrequentFlyers() {
          this.frequent_flyers.push(this.fb.group(this.initFrequentFlyers()));
        }
      }, {
        key: "removeFrequentFlyers",
        value: function removeFrequentFlyers(index) {
          this.frequent_flyers.removeAt(index);
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
        key: "UpdateTravellerProfile",
        value: function UpdateTravellerProfile() {
          //alert(this.travellerProfileId);
          this.newTravellerProfileObj.created = ""; //this.newTravellerProfileObj.id = "5";

          this.newTravellerProfileObj.traveller_profile_id = this.travellerProfileId;
          this.newTravellerProfileObj.organisation_id = "12";
          this.newTravellerProfileObj.salutation = this.newTravellerProfileForm.get('salutation').value;
          this.newTravellerProfileObj.first_name = this.newTravellerProfileForm.get('first_name').value;
          this.newTravellerProfileObj.last_name = this.newTravellerProfileForm.get('last_name').value;
          this.newTravellerProfileObj.dob = this.newTravellerProfileForm.get('dob').value;
          this.newTravellerProfileObj.gender = this.newTravellerProfileForm.get('gender').value;
          this.newTravellerProfileObj.customerIndex = this.newTravellerProfileForm.get('customerIndex').value;
          this.newTravellerProfileObj.customer_status = this.newTravellerProfileForm.get('customer_status').value;
          this.newTravellerProfileObj.passenger_type = this.newTravellerProfileForm.get('passengerType').value;
          this.newTravellerProfileObj.company_name = this.newTravellerProfileForm.get('companyName').value;
          this.newTravellerProfileObj.languages = this.newTravellerProfileForm.get('languages').value;
          this.newTravellerProfileObj.nationality = this.newTravellerProfileForm.get('nationality').value;
          this.newTravellerProfileObj.number_details = JSON.stringify(this.newTravellerProfileForm.get('number_details').value);
          this.newTravellerProfileObj.add_email = JSON.stringify(this.newTravellerProfileForm.get('add_email').value);
          this.newTravellerProfileObj.address_details = JSON.stringify(this.newTravellerProfileForm.get('address_details').value);
          this.newTravellerProfileObj.job_title = this.newTravellerProfileForm.get('jobTitle').value;
          this.newTravellerProfileObj.category = this.newTravellerProfileForm.get('category').value;
          this.newTravellerProfileObj.marital_status = this.newTravellerProfileForm.get('marital_status').value;
          this.newTravellerProfileObj.no_children = this.newTravellerProfileForm.get('noOfChildren_family').value;
          this.newTravellerProfileObj.customers = ""; //this.newTravellerProfileObj.customers = this.newTravellerProfileForm.get('customers').value;

          this.newTravellerProfileObj.agency_office = JSON.stringify(this.newTravellerProfileForm.get('agency_office').value);
          this.newTravellerProfileObj.agency_contact_name = JSON.stringify(this.newTravellerProfileForm.get('agency_contact_name').value);
          this.newTravellerProfileObj.misc_ticketing = JSON.stringify(this.newTravellerProfileForm.get('misc_ticketing').value);
          this.newTravellerProfileObj.ticketing_arrangements = JSON.stringify(this.newTravellerProfileForm.get('ticketing_arrangements').value);
          this.newTravellerProfileObj.original_issue = JSON.stringify(this.newTravellerProfileForm.get('original_issue').value);
          this.newTravellerProfileObj.tour_code = JSON.stringify(this.newTravellerProfileForm.get('tour_code').value);
          this.newTravellerProfileObj.validating_carrier = JSON.stringify(this.newTravellerProfileForm.get('validating_carrier').value);
          this.newTravellerProfileObj.shadow_destination = this.newTravellerProfileForm.get('shadow_destination').value;
          this.newTravellerProfileObj.keywords = JSON.stringify(this.newTravellerProfileForm.get('keywords').value);
          this.newTravellerProfileObj.travel_management = this.newTravellerProfileForm.get('travel_management').value;
          this.newTravellerProfileObj.fare_types = this.newTravellerProfileForm.get('fare_types').value;
          this.newTravellerProfileObj.bank_code = this.newTravellerProfileForm.get('bank_code').value;
          this.newTravellerProfileObj.bank_name = this.newTravellerProfileForm.get('bank_name').value;
          this.newTravellerProfileObj.bank_number = this.newTravellerProfileForm.get('bank_number').value;
          this.newTravellerProfileObj.bank_valid_from = this.newTravellerProfileForm.get('bank_valid_from').value;
          this.newTravellerProfileObj.bank_valid_to = this.newTravellerProfileForm.get('bank_valid_to').value;
          this.newTravellerProfileObj.direct_debit_authorized = this.newTravellerProfileForm.get('direct_debit_authorized').value;
          this.newTravellerProfileObj.forms_of_payment = JSON.stringify(this.newTravellerProfileForm.get('forms_of_payment').value);
          this.newTravellerProfileObj.fare_price_override = JSON.stringify(this.newTravellerProfileForm.get('fare_price_override').value);
          this.newTravellerProfileObj.endorsements = JSON.stringify(this.newTravellerProfileForm.get('endorsements').value);
          this.newTravellerProfileObj.discount = this.newTravellerProfileForm.get('discount').value;
          this.newTravellerProfileObj.commission = JSON.stringify(this.newTravellerProfileForm.get('commission').value);
          this.newTravellerProfileObj.accounting = JSON.stringify(this.newTravellerProfileForm.get('accounting').value);
          this.newTravellerProfileObj.remarks = JSON.stringify(this.newTravellerProfileForm.get('remarks').value);
          this.newTravellerProfileObj.profile_notes = JSON.stringify(this.newTravellerProfileForm.get('profile_notes').value);
          this.newTravellerProfileObj.priority_lines = JSON.stringify(this.newTravellerProfileForm.get('priority_lines').value);
          this.newTravellerProfileObj.follow_up = JSON.stringify(this.newTravellerProfileForm.get('follow_up').value);
          this.newTravellerProfileObj.special_needs = JSON.stringify(this.newTravellerProfileForm.get('special_needs').value);
          this.newTravellerProfileObj.frequent_flyers = JSON.stringify(this.newTravellerProfileForm.get('frequent_flyers').value);
          this.newTravellerProfileObj.seating_preferences = JSON.stringify(this.newTravellerProfileForm.get('seating_preferences').value);
          this.newTravellerProfileObj.home_airport = this.newTravellerProfileForm.get('home_airport').value;
          this.newTravellerProfileObj.arrival_airport = this.newTravellerProfileForm.get('arrival_airport').value;
          this.newTravellerProfileObj.delivery_method = this.newTravellerProfileForm.get('delivery_method').value;
          this.newTravellerProfileObj.delivery_time = this.newTravellerProfileForm.get('delivery_time').value;
          this.newTravellerProfileObj.airline_preferrences = JSON.stringify(this.newTravellerProfileForm.get('airline_preferrences').value);
          console.log("You shall not pass", this.newTravellerProfileObj);
          console.log(this.travellerProfileId);
          this.ProfileManagementService.UpdateTravellerProfile(this.travellerProfileId, this.newTravellerProfileObj).subscribe(function (results) {
            console.log(results);
          });
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
          console.log(this.el.nativeElement);
          window.document.querySelector('.scrollable-pusher').scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }, {
        key: "setDropDownType",
        value: function setDropDownType(value, type) {
          switch (type) {
            case 'salutation':
              this.newTravellerProfileForm.get('salutation').setValue(value);
              break;

            case 'gender':
              this.newTravellerProfileForm.get('gender').setValue(value);
              break;

            case 'customer_status':
              this.newTravellerProfileForm.get('customer_status').setValue(value);
              break;

            case 'languages':
              this.newTravellerProfileForm.get('languages').setValue(value);
              break;

            case 'nationality':
              this.newTravellerProfileForm.get('nationality').setValue(value);
              break;

            case 'home':
              this.newTravellerProfileForm.get('home').setValue(value);
              break;

            case 'Official':
              this.newTravellerProfileForm.get('Official').setValue(value);
              break;

            case 'addressList':
              this.newTravellerProfileForm.get('addressList').setValue(value);
              break;

            case 'countryList':
              this.newTravellerProfileForm.get('countryList').setValue(value);
              break;

            case 'category':
              this.newTravellerProfileForm.get('category').setValue(value);
              break;

            case 'marital_status':
              this.newTravellerProfileForm.get('marital_status').setValue(value);
              break;

            case 'customer_type':
              this.newTravellerProfileForm.get('customer_type').setValue(value);
              break;

            case 'remark_type':
              this.newTravellerProfileForm.get('remark_type').setValue(value);
              break;

            case 'remark_category':
              this.newTravellerProfileForm.get('remark_category').setValue(value);
              break;
          }
        }
      }, {
        key: "airline_preferrences",
        get: function get() {
          return this.newTravellerProfileForm.get('airline_preferrences');
        }
      }, {
        key: "frequent_flyers",
        get: function get() {
          return this.newTravellerProfileForm.get('frequent_flyers');
        }
      }, {
        key: "special_needs",
        get: function get() {
          return this.newTravellerProfileForm.get('special_needs');
        }
      }, {
        key: "seating_preferences",
        get: function get() {
          return this.newTravellerProfileForm.get('seating_preferences');
        }
      }, {
        key: "number_details",
        get: function get() {
          return this.newTravellerProfileForm.get('number_details');
        }
      }, {
        key: "add_email",
        get: function get() {
          return this.newTravellerProfileForm.get('add_email');
        }
      }, {
        key: "address_details",
        get: function get() {
          return this.newTravellerProfileForm.get('address_details');
        }
      }, {
        key: "customers",
        get: function get() {
          return this.newTravellerProfileForm.get('customers');
        }
      }, {
        key: "agency_office",
        get: function get() {
          return this.newTravellerProfileForm.get('agency_office');
        }
      }, {
        key: "misc_ticketing",
        get: function get() {
          return this.newTravellerProfileForm.get('misc_ticketing');
        }
      }, {
        key: "ticketing_arrangements",
        get: function get() {
          return this.newTravellerProfileForm.get('ticketing_arrangements');
        }
      }, {
        key: "validating_carrier",
        get: function get() {
          return this.newTravellerProfileForm.get('validating_carrier');
        }
      }, {
        key: "tour_code",
        get: function get() {
          return this.newTravellerProfileForm.get('tour_code');
        }
      }, {
        key: "original_issue",
        get: function get() {
          return this.newTravellerProfileForm.get('original_issue');
        }
      }, {
        key: "keywords",
        get: function get() {
          return this.newTravellerProfileForm.get('keywords');
        }
      }, {
        key: "forms_of_payment",
        get: function get() {
          return this.newTravellerProfileForm.get('forms_of_payment');
        }
      }, {
        key: "fare_price_override",
        get: function get() {
          return this.newTravellerProfileForm.get('fare_price_override');
        }
      }, {
        key: "endorsements",
        get: function get() {
          return this.newTravellerProfileForm.get('endorsements');
        }
      }, {
        key: "commission",
        get: function get() {
          return this.newTravellerProfileForm.get('commission');
        }
      }, {
        key: "accounting",
        get: function get() {
          return this.newTravellerProfileForm.get('accounting');
        }
      }, {
        key: "remarks",
        get: function get() {
          return this.newTravellerProfileForm.get('remarks');
        }
      }, {
        key: "profile_notes",
        get: function get() {
          return this.newTravellerProfileForm.get('profile_notes');
        }
      }, {
        key: "priority_lines",
        get: function get() {
          return this.newTravellerProfileForm.get('priority_lines');
        }
      }, {
        key: "follow_up",
        get: function get() {
          return this.newTravellerProfileForm.get('follow_up');
        }
      }]);

      return NewTravellerProfileComponent;
    }();

    NewTravellerProfileComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _shared_services_profile_management_profile_management_service__WEBPACK_IMPORTED_MODULE_1__["ProfileManagementService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tab', {
      static: false
    })], NewTravellerProfileComponent.prototype, "tab", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tabContent', {
      static: false
    })], NewTravellerProfileComponent.prototype, "tabContent", void 0);
    NewTravellerProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-new-traveller-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./new-traveller-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/create-new-profile/new-traveller-profile/new-traveller-profile.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./new-traveller-profile.component.scss */
      "./src/app/layout/profile-management/create-new-profile/new-traveller-profile/new-traveller-profile.component.scss")).default]
    })], NewTravellerProfileComponent);
    /***/
  },

  /***/
  "./src/app/layout/profile-management/create-new-profile/new-traveller-profile/new-traveller-profile.module.ts":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/layout/profile-management/create-new-profile/new-traveller-profile/new-traveller-profile.module.ts ***!
    \********************************************************************************************************************/

  /*! exports provided: NewTravellerProfileModule */

  /***/
  function srcAppLayoutProfileManagementCreateNewProfileNewTravellerProfileNewTravellerProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewTravellerProfileModule", function () {
      return NewTravellerProfileModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _new_traveller_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./new-traveller-profile.component */
    "./src/app/layout/profile-management/create-new-profile/new-traveller-profile/new-traveller-profile.component.ts");
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


    var _new_traveller_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./new-traveller-profile-routing.module */
    "./src/app/layout/profile-management/create-new-profile/new-traveller-profile/new-traveller-profile-routing.module.ts");

    var NewTravellerProfileModule = function NewTravellerProfileModule() {
      _classCallCheck(this, NewTravellerProfileModule);
    };

    NewTravellerProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_new_traveller_profile_component__WEBPACK_IMPORTED_MODULE_1__["NewTravellerProfileComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _new_traveller_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewTravellerProfileRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
    })], NewTravellerProfileModule);
    /***/
  }
}]);
//# sourceMappingURL=new-traveller-profile-new-traveller-profile-module-es5.js.map