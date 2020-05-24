function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-management-profile-management-module"], {
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


    __webpack_exports__["default"] = "<h3 class=\"booking-header\">New Traveller Profile</h3>\r\n<div class=\"ui fluid container scrolling\">\r\n  <div class=\"ui grid container move stepper-grid scrolling stepper-wrapper-grid\" #tab>\r\n    <div class=\"three wide column stepper-grid_step stepper-wrapper scrolling\" (click)=\"generatePersonal()\">\r\n      <div class=\"stepper-grid_step__step-icon\">\r\n        <div>\r\n          <div class=\"image _user\"></div>\r\n        </div>\r\n        <label class=\"bground\">\r\n          Personal<br>\r\n          Traveller Details\r\n        </label>\r\n      </div>\r\n      <div class=\"stepper-grid_step__step-border\">\r\n        <hr />\r\n      </div>\r\n    </div>\r\n    <div class=\"three wide column stepper-grid_step stepper-wrapper\" (click)=\"generateDocuments()\">\r\n      <div class=\"stepper-grid_step__step-icon\">\r\n        <div>\r\n          <div class=\"image _payment\"></div>\r\n        </div>\r\n        <label class=\"bground\">Documents<br>\r\n          Details\r\n        </label>\r\n      </div>\r\n      <div class=\"stepper-grid_step__step-border\">\r\n        <hr />\r\n      </div>\r\n    </div>\r\n    <div class=\"three wide column stepper-grid_step stepper-wrapper\" *ngIf=\"showCompanyid\" (click)=\"generateCompany()\">\r\n      <div class=\"stepper-grid_step__step-icon\">\r\n        <div>\r\n          <div class=\"image _remarks\"></div>\r\n        </div>\r\n        <label class=\"background\">Company Details</label>\r\n      </div>\r\n      <div class=\"stepper-grid_step__step-border\">\r\n        <hr />\r\n      </div>\r\n    </div>\r\n    <div class=\"three wide column stepper-grid_step stepper-wrapper\" (click)=\"generatePreference()\">\r\n      <!-- <a href=\"#DivIdToScroll\" pageScroll > -->\r\n      <div class=\"stepper-grid_step__step-icon \">\r\n        <div>\r\n          <div class=\"image _airline\"></div>\r\n        </div>\r\n        <label class=\"bground\"> Preferences<br>Traveller Service </label>\r\n      </div>\r\n      <!-- </a> -->\r\n      <div class=\"stepper-grid_step__step-border\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <form #f=\"ngForm\" autocomplete=\"off\"[formGroup]=\"newTravellerProfileForm\" class=\"ui form\">\r\n    <div id=\"user-content\" class=\"stepper-grid-content animated fadeIn _active\">\r\n      <div class=\"outer-basic\">\r\n        <div class=\"outer-basicForm\">\r\n          <div class=\"ui form-inner grid \">\r\n            <div class=\"ui sixteen wide column grid \" id=\"personal\">\r\n              <h4>Traveller Details</h4>\r\n            </div>\r\n            <div class=\"ui sixteen wide column grid info-block\">\r\n              <div class=\"ui grid p-0\">\r\n                <div class=\"sixteen wide column row\">\r\n                  <div class=\"two wide column title-traveller\">\r\n                    <div class=\"three wide column second-wrapper\"   [ngClass]=\"{'is-invalid': isSubmitted && gfc.salutation.invalid}\">\r\n                      <label>Title<span class=\"mandatory\">*</span></label>\r\n                      <select class=\"ui fluid dropdown\" formControlName=\"salutation\" name=\"salutation\">\r\n                        <option value=\"\">Title</option>\r\n                        <option value=\"Mr.\">Mr.</option>\r\n                        <option value=\"Master\">Master</option>\r\n                        <option value=\"Mrs.\">Mrs.</option>\r\n                        <option value=\"Miss\">Miss</option>\r\n                        <option value=\"Ms.\">Ms.</option>\r\n                        <option value=\"Dr.\">Dr.</option>  \r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"five wide column\"  [ngClass]=\"{'is-invalid': isSubmitted && gfc.first_name.invalid}\">\r\n                    <label class=\"profile-label\">First name<span class=\"mandatory\">*</span></label>\r\n                    <input type=\"text\" class=\"text-colour\" formControlName=\"first_name\" name=\"first_name\"\r\n                      placeholder=\"First Name\" required>\r\n                      <!-- <div *ngIf=\"isSubmitted && gfc.first_name.invalid\" class=\"invalid-feedback\">\r\n                        <div class=\"validations\" *ngIf=\"gfc.first_name.invalid\">\r\n                          First name required.\r\n                        </div>\r\n                      </div> -->\r\n                  </div>\r\n                  <div class=\"four wide column\" >\r\n                    <label class=\"profile-label\">middle name</label>\r\n                    <input type=\"text\" class=\"text-colour\" formControlName=\"middle_name\" name=\"middle_name\"\r\n                      placeholder=\"Middle Name\">\r\n                      <!-- <div *ngIf=\"isSubmitted && gfc.first_name.invalid\" class=\"invalid-feedback\">\r\n                        <div class=\"validations\" *ngIf=\"gfc.first_name.invalid\">\r\n                          Middle name required.\r\n                        </div>\r\n                      </div> -->\r\n                  </div>\r\n                  <div class=\"five wide column\"  [ngClass]=\"{'is-invalid': isSubmitted && gfc.last_name.invalid}\">\r\n                    <label class=\"profile-label\">Last name<span class=\"mandatory\">*</span></label>\r\n                  <input type=\"text\" class=\"text-colour\" placeholder=\"Last Name\" formControlName=\"last_name\"\r\n                    name=\"last_name\" required>\r\n                    <!-- <div *ngIf=\"isSubmitted && gfc.last_name.invalid\" class=\"invalid-feedback\">\r\n                      <div class=\"validations\" *ngIf=\"gfc.last_name.invalid\">\r\n                        Last name required.\r\n                      </div>\r\n                    </div> -->\r\n                  </div>\r\n                </div>\r\n                <div class=\"sixteen wide column row\">\r\n                  <div class=\"four wide column radio-block\" >\r\n                    <label class=\"profile-label\">Gender<span class=\"mandatory\">*</span>\r\n                     </label>\r\n                    <div class=\"sixteen wide column\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.gender.invalid}\">\r\n                      <div class=\"ui radio checkbox\">\r\n                        <input type=\"radio\" formControlName=\"gender\" value=\"Male\" name=\"gender\">\r\n                        <label class=\"gender-label\">Male</label>\r\n                      </div>\r\n                      <div class=\"ui radio checkbox\">\r\n                        <input type=\"radio\" formControlName=\"gender\" name=\"gender\" value=\"Female\">\r\n                        <label class=\"gender-label\">Female</label>\r\n                      </div>\r\n                      <div class=\"ui radio checkbox\">\r\n                        <input type=\"radio\" formControlName=\"gender\" name=\"gender\" value=\"Other\">\r\n                        <label class=\"gender-label\">Other</label>\r\n                      </div>\r\n                      <div *ngIf=\"isSubmitted && gfc.gender.invalid\" class=\"invalid-feedback\">\r\n                        <div class=\"validations\" *ngIf=\"gfc.gender.invalid\">\r\n                          Gender required.\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"four wide column check-block\">\r\n                    <label class=\"profile-label\">Corporate</label>\r\n                    <div class=\"ui  checkbox\">\r\n                      <input type=\"checkbox\" name=\"corporate\" formControlName=\"corporate\"  (change)=showCompany()>\r\n                      <label class=\"gender-label\">Corporate (Yes/No) </label>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"four wide column\"  [ngClass]=\"{'is-invalid': isSubmitted && gfc.a_dob.invalid}\">\r\n                    <label class=\"profile-label \">Date Of Birth<span class=\"mandatory\">*</span></label>\r\n                    <div class=\"ui left icon input reduce-size\"\r\n                      [ngClass]=\"{'error': ((submitted && f.a_dob.errors) && f.a_dob.errors.required) }\">\r\n                      <i class=\"icon \">\r\n                        <img src=\"./../../../../assets/icons/calendar.svg\" class=\"down\" />\r\n                      </i>\r\n                      <input type=\"text\" formControlName=\"a_dob\" class=\"start-form\" placeholder=\"Date of Birth\"\r\n                        autocomplete=\"off\" name=\"a_dob\" />\r\n                    </div>\r\n                    <!-- <div *ngIf=\"isSubmitted && gfc.a_dob.invalid\" class=\"invalid-feedback\">\r\n                      <div class=\"validations\" *ngIf=\"gfc.a_dob.invalid\">\r\n                        Dob required.\r\n                      </div>\r\n                    </div> -->\r\n                  </div>\r\n                  <div class=\"four wide column\">\r\n                    <label class=\"profile-label\">Marital Status</label>\r\n                    <div class=\"ui fluid  selection dropdown\" >\r\n                      <input type=\"hidden\" formControlName=\"marital_status\" name=\"marital_status\" value=\"marital_status\">\r\n                      <i class=\"dropdown icon\"></i>\r\n                      <div class=\"default text\">Marital Status</div>\r\n                      <div class=\"menu\">\r\n                        <div class=\"item\" (click)=\"setDropDownType('Married', 'marital_status')\">Married\r\n                        </div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Single', 'marital_status')\">Single\r\n                        </div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Other', 'marital_status')\">Other\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"sixteen wide column row\">\r\n                  <div class=\"four wide column \" [ngClass]=\"{'is-invalid': isSubmitted && gfc.nationality.invalid}\">\r\n                    <label class=\"profile-label\">Nationality<span class=\"mandatory\">*</span></label>\r\n                    <!-- <div class=\"ui fluid  selection dropdown\">\r\n                      <input type=\"hidden\" formControlName=\"nationality\" name=\"nationality\" value=\"nationality\"\r\n                        name=\"nationality\">\r\n                      <i class=\"dropdown icon\"></i>\r\n                      <div class=\"default text\">Nationality</div>\r\n                      <div class=\"menu\">\r\n                        <div class=\"item\" (click)=\"setDropDownType('Indian', 'nationality')\">Indian</div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Pakistani', 'nationality')\">Pakistani</div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Emirati', 'nationality')\">Emirati</div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Filipino', 'nationality')\">Filipino\r\n                        </div>\r\n                      </div>\r\n                    </div> -->\r\n                    <select class=\"ui fluid search dropdown\" formControlName=\"nationality\" name=\"nationality\">\r\n                      <option value=\"\"> Country </option>\r\n                      <option *ngFor=\"let country of countries\" value=\"{{country.country_id}}\"> {{country.country}} </option>\r\n                    </select>\r\n\r\n                    <!-- <div *ngIf=\"isSubmitted && gfc.nationality.invalid\" class=\"invalid-feedback\">\r\n                      <div class=\"validations\" *ngIf=\"gfc.nationality.invalid\">\r\n                        Nationality required.\r\n                      </div>\r\n                    </div> -->\r\n                  </div>\r\n                  <div class=\"four wide column \" [ngClass]=\"{'is-invalid': isSubmitted && gfc.passenger_type.invalid}\">\r\n                    <label class=\"profile-label \">Pax Type<span class=\"mandatory\">*</span></label>\r\n                    <div class=\"ui fluid  selection dropdown \">\r\n                      <input type=\"hidden\" formControlName=\"passenger_type\" name=\"passenger_type\" value=\"passenger_type\" required>\r\n                      <i class=\"dropdown icon\"></i>\r\n                      <div class=\"default text\">Pax Type</div>\r\n                      <div class=\"menu\">\r\n                        <div class=\"item\" (click)=\"setDropDownType('Adult', 'passenger_type')\">Adult\r\n                        </div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Child', 'passenger_type')\">Child\r\n                        </div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('Infant', 'passenger_type')\">Infant\r\n                        </div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('YTH', 'passenger_type')\">YTH\r\n                        </div>\r\n                        <div class=\"item\" (click)=\"setDropDownType('ITX', 'passenger_type')\">ITX\r\n                        </div>\r\n                      </div>\r\n  \r\n                    </div>\r\n                    <!-- <div *ngIf=\"isSubmitted && gfc.passenger_type.invalid\" class=\"invalid-feedback\">\r\n                      <div class=\"validations\" *ngIf=\"gfc.passenger_type.invalid\">\r\n                        Passenger Type required.\r\n                      </div>\r\n                    </div> -->\r\n                  </div>\r\n                  <div class=\"four wide column addrr-block\">\r\n                    <label class=\"profile-label\">Phone number</label>\r\n                    <!-- <picture>\r\n                      <source media=\"(min-width: )\" srcset=\"\">\r\n                      <img src=\"\" alt=\"\">\r\n                    </picture> -->\r\n                    <div class=\"ui input fluid adr\">\r\n                      <input type=\"number\" formControlName=\"country_code\" placeholder=\"code\" name=\"country_code\" class=\"phone-code\">\r\n                      <input type=\"number\" formControlName=\"mobile_number\" name=\"mobile_number\" placeholder=\"Mobile\" class=\"phone-no\">\r\n                    </div>\r\n                    <div class=\"ui input fluid\">\r\n                      <input type=\"number\" formControlName=\"country_code\" placeholder=\"code\"  name=\"country_code\" class=\"phone-code\">\r\n                      <input type=\"number\" formControlName=\"emergency_contact\" name=\"emergency_contact\" placeholder=\"Emergency\" class=\"phone-no\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"four wide column addrr-block\">\r\n                    <label class=\"profile-label\">Email<span class=\"mandatory\">*</span></label>\r\n                    <div class=\"ui input fluid adr\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.email_address1.errors}\">\r\n                      <input type=\"text\" formControlName=\"email_address1\"  name=\"email_address1\" placeholder=\"Email Address 1\" class=\"email\" required>  \r\n                    </div>\r\n                    <div *ngIf=\"gfc.email_address1.errors\" class=\"invalid-feedback\">\r\n                      <div class=\"validations phone-valid\" *ngIf=\"gfc.email_address1.errors.pattern\">\r\n                        Email must be a valid email address\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"ui input fluid\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.email_address2.errors}\">\r\n                      <input type=\"text\" formControlName=\"email_address2\" name=\"email_address2\" placeholder=\"emailAddress 2\">  \r\n                    </div>\r\n                    <div *ngIf=\"gfc.email_address2.errors\" class=\"invalid-feedback\">\r\n                      <div class=\"validations\" *ngIf=\"gfc.email_address2.errors.pattern\">\r\n                        Email must be a valid email address\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"sixteen wide column row\">\r\n                  <div class=\"four wide column addrr-block\">\r\n                    <label class=\"profile-label\">Address</label>\r\n                    <div class=\"ui input fluid adr\">\r\n                      <input type=\"text\" formControlName=\"address\" name=\"address\" placeholder=\"Address\">\r\n                    </div>\r\n                    <div class=\"ui input fluid\">\r\n                      <input type=\"number\" formControlName=\"postal_code\" name=\"postal_code\" placeholder=\"P.O Box\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"four wide column addrr-block\">\r\n                    <label class=\"profile-label\">State</label>\r\n                    <div class=\"ui input fluid adr\">\r\n                      <input type=\"text\" placeholder=\"state\" formControlName=\"state\" value=\"state\" name=\"state\">\r\n                    </div>\r\n                    <div class=\"ui input fluid\">\r\n                      <input type=\"text\" formControlName=\"street\" name=\"street\" placeholder=\"Street\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"four wide column addrr-block\">\r\n                    <label class=\"profile-label\">Country</label>\r\n                    <div class=\"ui input fluid adr\">\r\n                      <select class=\"ui fluid search dropdown\" formControlName=\"country_id\" (change)=\"passCountryId($event.target.value)\">\r\n                        <option value=\"\"> Country </option>\r\n                        <option *ngFor=\"let country of countries\" value=\"{{country.country_id}}\"> {{country.country}} </option>\r\n                      </select>\r\n                    </div>\r\n                    <div class=\"ui input fluid renew-city\">\r\n                      <select class=\"ui fluid search dropdown text-colour\" formControlName=\"city_id\">\r\n                        <option value=\"\"> City </option>\r\n                        <option *ngFor=\"let city of cities\" value=\"{{city.city_id}}\">{{city.name}}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <!-- <div class=\"ui sixteen wide column grid\">\r\n\r\n              <div class=\"three wide column\">\r\n                <label class=\"profile-label\">Address</label>\r\n                <div class=\"ui sixteen wide column grid resize\">\r\n\r\n\r\n                  <input type=\"text\" class=\"ten wide column adjust\" formControlName=\"address\" name=\"address\"\r\n                    placeholder=\"Address\">\r\n                </div>\r\n                <div class=\"ui sixteen wide column grid renew \">\r\n\r\n                  <input type=\"number\" class=\"ten wide column adjust \" formControlName=\"postal_code\" name=\"postal_code\"\r\n                    placeholder=\"P.O Box\">\r\n\r\n                </div>\r\n\r\n              </div> -->\r\n\r\n              <!-- <div class=\"two wide column\"></div> -->\r\n\r\n\r\n              <!-- <div class=\"four wide field\"\r\n              [ngClass]=\"{'error': (isSubmitted && officeAddressForm['controls'].officeAddress['controls'].contact_country_id.status == 'INVALID')}\">\r\n              <label>Country</label>\r\n              <select class=\"ui fluid search dropdown\" formControlName=\"contact_country_id\"\r\n                (change)=\"passCountryId($event.target.value)\">\r\n                <option value=\"\"> Country </option>\r\n                <option *ngFor=\"let country of countries\" value=\"{{country.country_id}}\"> {{country.country}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n            <div class=\"four wide field\"\r\n              [ngClass]=\"{'error': (isSubmitted && officeAddressForm['controls'].officeAddress['controls'].city_id.status == 'INVALID')}\">\r\n              <label>City</label>\r\n              <select class=\"ui fluid search dropdown\" formControlName=\"city_id\">\r\n    \r\n                <option *ngFor=\"let city of cities\" value=\"{{city.city_id}}\">{{city.name}}</option>\r\n              </select>\r\n            </div> -->\r\n              <!-- <div class=\"two wide column bring-left\">\r\n\r\n                <label class=\"profile-label\">State</label> -->\r\n                <!-- <select class=\"ui fluid search dropdown\" formControlName=\"contact_country_id\"\r\n                (change)=\"passCountryId($event.target.value)\">\r\n                <option value=\"\"> Country </option>\r\n                <option *ngFor=\"let country of countries\" value=\"{{country.country_id}}\"> {{country.country}}\r\n                </option>\r\n              </select> -->\r\n\r\n\r\n                <!-- <input type=\"text\" placeholder=\"state\" formControlName=\"state\" class=\"text-colour\" value=\"state\"\r\n                  name=\"state\">\r\n\r\n                <div class=\"ui sixteen wide column grid renew \">\r\n\r\n\r\n                  <input type=\"text\" formControlName=\"street\" class=\"grid-width\" name=\"street\" placeholder=\"Street\">\r\n\r\n\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <div class=\"one wide column\"></div>\r\n\r\n              <div class=\"three wide column \">\r\n                <label class=\"profile-label\">Country</label>\r\n\r\n                <select class=\"ui fluid search dropdown text-colour\" formControlName=\"country_id\"\r\n                  (change)=\"passCountryId($event.target.value)\">\r\n                  <option value=\"\"> Country </option>\r\n                  <option *ngFor=\"let country of countries\" value=\"{{country.country_id}}\"> {{country.country}}\r\n                  </option>\r\n                </select>\r\n\r\n\r\n\r\n                <div class=\"ui sixteen wide column grid renew renew-city\">\r\n\r\n                  <select class=\"ui fluid search dropdown text-colour\" formControlName=\"city_id\">\r\n                    <option value=\"\"> City </option>\r\n                    <option *ngFor=\"let city of cities\" value=\"{{city.city_id}}\">{{city.name}}</option>\r\n                  </select>\r\n                </div>\r\n              </div> -->\r\n              <!-- <div class=\"two wide column\"></div> -->\r\n\r\n            <!-- </div> -->\r\n\r\n\r\n            <!-- <div class=\"ui sixteen wide column grid pull-down  \"> -->\r\n              <!-- <div class=\"ui grid\">\r\n                <div class=\"sixteen wide column row\">\r\n                  <div class=\"eight wide column\">\r\n                    \r\n              <label class=\"profile-label\">Phone Number<span class=\"mandatory\">*</span></label>\r\n                    <div class=\"ui grid\">\r\n                      <div class=\"sixteen wide column row\">\r\n                        \r\n\r\n              <div class=\"four wide column\">\r\n\r\n                <div class=\"ui twelve wide column grid resize\" >\r\n\r\n                  <input type=\"text\" formControlName=\"country_code\" placeholder=\"code\" class=\"element-set\"\r\n                    name=\"country_code\">\r\n                </div>\r\n                \r\n                <div class=\"ui sixteen wide column grid renew \" >\r\n\r\n                  <input type=\"text\" formControlName=\"country_code\" placeholder=\"code\" class=\"element-set\"\r\n                    name=\"country_code\">\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <div class=\"eight wide column\">\r\n\r\n\r\n                <div class=\"ui sixteen wide column grid resize\" >\r\n\r\n\r\n                  <input type=\"number\" class=\"ten wide column adjust assign_left\" formControlName=\"mobile_number\"\r\n                    name=\"mobile_number\" placeholder=\"Mobile\">\r\n\r\n                </div>\r\n               \r\n                <div class=\"ui sixteen wide column grid renew \">\r\n\r\n                  <input type=\"number\" class=\"ten wide column adjust assign_left \" formControlName=\"emergency_contact\"\r\n                    name=\"emergency_contact\" placeholder=\"Emergency\">\r\n\r\n                </div>\r\n\r\n              </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"eight wide column\">\r\n          \r\n                    <label class=\"profile-label\">Email<span class=\"mandatory\">*</span></label>\r\n                    <div class=\"ui grid\">\r\n                      <div class=\"sixteen wide column row\">\r\n                        <div class=\"eight wide column \">\r\n          \r\n                          <div class=\"ui sixteen wide column grid resize\"\r\n                            [ngClass]=\"{'is-invalid': isSubmitted && gfc.email_address1.errors}\">\r\n          \r\n                            <input type=\"text\" class=\"ten wide column adjust\" formControlName=\"email_address1\"\r\n                              name=\"email_address1\" placeholder=\"Email Address 1\">\r\n                            <div *ngIf=\"isSubmitted && gfc.email_address1.errors\" class=\"invalid-feedback\">\r\n                              <div class=\"validations\" *ngIf=\"gfc.email_address1.errors.pattern\">\r\n                                Email must be a valid email address\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"ui sixteen wide column grid renew \"\r\n                            [ngClass]=\"{'is-invalid': isSubmitted && gfc.email_address2.errors}\">\r\n          \r\n                            <input type=\"text\" class=\"ten wide column adjust\" formControlName=\"email_address2\"\r\n                              name=\"email_address2\" placeholder=\"emailAddress 2\">\r\n                            <div *ngIf=\"isSubmitted && gfc.email_address2.errors\" class=\"invalid-feedback\">\r\n                              <div class=\"validations\" *ngIf=\"gfc.email_address2.errors.pattern\">\r\n                                Email must be a valid email address\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n          \r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n\r\n              <!-- <div class=\"two wide column\"></div> -->\r\n\r\n              <!-- <div class=\"four wide field\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.email.errors}\">\r\n                <label>Email<span class=\"mandatory\">*</span></label>\r\n                <input type=\"email\" name=\"email\" formControlName=\"email\" value=\"\" placeholder=\"Email*\">\r\n                <div *ngIf=\"isSubmitted && gfc.email.errors\" class=\"invalid-feedback\">\r\n                  <div class=\"validations\" *ngIf=\"gfc.email.errors.pattern\">\r\n                    Email must be a valid email address\r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n<!-- \r\n              <div class=\"one wide column\"></div>\r\n\r\n\r\n\r\n\r\n              <div class=\"two wide column\"></div> -->\r\n\r\n\r\n            <!-- </div> -->\r\n\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <div class=\"outer-basic outer-basic_secondary mtb\" id=\"goToDocuments\">\r\n        <div class=\"outer-basicForm\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields doc-head\">\r\n              <h4>Document Details</h4>\r\n            </div>\r\n            <div class=\"ui grid\">\r\n              <div class=\"sixteen wide column row\">\r\n                <div class=\"two wide column \">\r\n                  <label class=\"profile-label\">Document Type</label>\r\n                  <input type=\"text\" name=\"nationalID_doc\" formControlName=\"nationalID_doc\" value=\"National ID\" disabled>\r\n                  <!-- <div class=\"ui fluid  selection dropdown\">\r\n                    <input type=\"hidden\" formControlName=\"document1\" name=\"document1\" class=\"dropdown-resize\">\r\n                    <i class=\"dropdown icon\"></i>\r\n                    <div class=\"default text\">Document Type</div>\r\n                    <div class=\"menu\">\r\n                      <div class=\"item\" (click)=\"setDropDownType('nationalId','document1')\">National Id</div>\r\n                    </div>\r\n                  </div> -->\r\n                </div>\r\n                <div class=\"three wide column doc-head\">\r\n                  <label class=\"profile-label\">Document Number</label>\r\n                  <input type=\"text\" name=\"national_id\" formControlName=\"national_id\" placeholder=\"Document Number\">\r\n                </div>\r\n                <div class=\"two wide column\">\r\n                  <label class=\"profile-label\">Issue Date</label>\r\n                  <div class=\"ui left icon input fluid\"\r\n                    [ngClass]=\"{'error': ((submitted && f.a_issueDate.errors) && f.a_issueDate.errors.required) }\">\r\n                    <i class=\"icon \">\r\n                      <img src=\"./../../../../assets/icons/calendar.svg\" class=\"down\" />\r\n                    </i>\r\n                    <input type=\"text\" name=\"national_id_issueDate\" autocomplete=\"off\"\r\n                      formControlName=\"national_id_issueDate\" class=\"start-form\" placeholder=\"Issue Date\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"two wide column\">\r\n                  <label class=\"profile-label\">Expiry Date</label>\r\n                  <div class=\"ui left icon input fluid\"\r\n                    [ngClass]=\"{'error': ((submitted && f.national_id_expiryDate.errors) && f.national_id_expiryDate.errors.required) }\">\r\n                    <i class=\"icon \">\r\n                      <img src=\"./../../../../assets/icons/calendar.svg\" class=\"down\" />\r\n                    </i>\r\n                    <input type=\"text\" autocomplete=\"off\" autocomplete=\"off\" name=\"national_id_expiryDate\"\r\n                      formControlName=\"national_id_expiryDate\" class=\"start-form\" placeholder=\"Expiry Date\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"two wide column\">\r\n                  <label class=\"profile-label\">Place of Issue</label>\r\n                  <input type=\"text\" name=\"national_id_placeofissue\" formControlName=\"national_id_placeofissue\"\r\n                    class=\"padding_in\" placeholder=\"Place of Issue\" autocomplete=\"off\" value=\"\">\r\n                </div>\r\n                <div class=\"three wide column \">\r\n                  <label for=\"imageFile\" class=\"profile-label\">Document Detail</label>\r\n                  <input #imageFile type=\"file\" id=\"imageFile\" accept='image/*'\r\n                    (change)=\"uploadImage(imageFile.files,'imageFile')\" />\r\n                </div>\r\n                <div class=\"two wide column\">\r\n                  <label class=\"profile-label\"></label>\r\n                  <!-- <input type=\"file\"   accept=\"image/*\" > -->\r\n                  <a class=\"nav-link edit\" (click)=\"viewUser('custom-modal-1')\" title=\"View Details\">\r\n                    <div class=\"ui primary button  allign-left\">\r\n                      View\r\n                    </div>\r\n                  </a>\r\n                  <jw-modal id=\"custom-modal-1\" class=\"register-modal\">\r\n                    <i class=\"close icon push-right\" (click)=\"closeModal('custom-modal-1');\"></i>\r\n                    <div class=\"ui\" *ngIf=\"showDetailModal\">\r\n                      <img src=\"{{ newTravellerProfileForm.controls.image1.value }}\" style=\"width: 95%;\" />\r\n                    </div>\r\n                  </jw-modal>\r\n                </div>\r\n              </div>\r\n              <div class=\"sixteen wide column row\">\r\n                <div class=\"two wide column \">\r\n                  <label class=\"profile-label\">Document Type</label>\r\n                  <input type=\"text\" name=\"passport_doc\" formControlName=\"passport_doc\" value=\"Passport ID\" disabled>\r\n                  <!-- <div class=\"ui fluid  selection dropdown\">\r\n                    <input type=\"hidden\" formControlName=\"document2\" name=\"document2\" class=\"dropdown-resize\" value=\"\">\r\n                    <i class=\"dropdown icon\"></i>\r\n                    <div class=\"default text\">Document Type</div>\r\n                    <div class=\"menu\">\r\n                      <div class=\"item\" (click)=\"setDropDownType('Passport', 'document2')\">Passport</div>\r\n                    </div>\r\n                  </div> -->\r\n                </div>\r\n                <div class=\"three wide column\">\r\n                  <label class=\"profile-label\">Document Number</label>\r\n                  <input type=\"text\" formControlName=\"passport\" name=\"passport\" placeholder=\"Document Number\" value=\"\">\r\n                </div>\r\n                <div class=\"two wide column\">\r\n                  <label class=\"profile-label\">Issue Date</label>\r\n                  <div class=\"ui left icon input\"\r\n                    [ngClass]=\"{'error': ((submitted && f.passport_issueDate.errors) && f.passport_issueDate.errors.required) }\">\r\n                    <i class=\"icon \">\r\n                      <img src=\"./../../../../assets/icons/calendar.svg\" class=\"down\" />\r\n                    </i>\r\n                    <input type=\"text\" name=\"passport_issueDate\" autocomplete=\"off\" formControlName=\"passport_issueDate\"\r\n                      class=\"start-form\" placeholder=\"Issue Date\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"two wide column\">\r\n                  <label class=\"profile-label\">Expiry Date</label>\r\n                  <div class=\"ui left icon input\"\r\n                    [ngClass]=\"{'error': ((submitted && f.passport_expiryDate.errors) && f.passport_expiryDate.errors.required) }\">\r\n                    <i class=\"icon \">\r\n                      <img src=\"./../../../../assets/icons/calendar.svg\" class=\"down\" />\r\n                    </i>\r\n                    <input type=\"text\" autocomplete=\"off\" name=\"passport_expiryDate\" formControlName=\"passport_expiryDate\"\r\n                      class=\"start-form\" placeholder=\"Expiry Date\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"two wide column\">\r\n                  <label class=\"profile-label\">Place of Issue</label>\r\n                  <input type=\"text\" name=\"passport_placeofissue\" formControlName=\"passport_placeofissue\"\r\n                    placeholder=\"Place of Issue\" class=\"padding_in\" value=\"\">\r\n                </div>\r\n                <div class=\"three wide column \">\r\n                  <label for=\"imageFile2\" class=\"profile-label\">Document Detail</label>\r\n                  <input #imageFile2 type=\"file\" id=\"imageFile2\" accept='image/*'\r\n                    (change)=\"uploadImage2(imageFile2.files,'imageFile2')\" />\r\n                </div>\r\n                <div class=\"two wide column\">\r\n                  <label class=\"profile-label\"></label>\r\n                  <!-- <input type=\"file\"   accept=\"image/*\" > -->\r\n                  <a class=\"nav-link edit\" (click)=\"viewUser('custom-modal-2')\" title=\"View Details\">\r\n                    <div class=\"ui primary button  allign-left\">\r\n                      View\r\n                    </div>\r\n                  </a>\r\n                  <jw-modal id=\"custom-modal-2\" class=\"register-modal\">\r\n                    <i class=\"close icon push-right\" (click)=\"closeModal('custom-modal-2');\"></i>\r\n                    <div class=\"ui\" *ngIf=\"showDetailModal\">\r\n                      <img src=\"{{ newTravellerProfileForm.controls.image2.value }}\" style=\"width: 95%;\" />\r\n                    </div>\r\n                  </jw-modal>\r\n                </div>\r\n              </div>\r\n              <div class=\"sixteen wide column row\">\r\n                <div class=\"two wide column \">\r\n                  <label class=\"profile-label\">Document Type</label>\r\n                  <input type=\"text\" name=\"driving_doc\" formControlName=\"driving_doc\" value=\"Driving ID\" disabled>\r\n                  <!-- <div class=\"ui fluid  selection dropdown\">\r\n                    <input type=\"hidden\" formControlName=\"document3\" name=\"document3\" class=\"dropdown-resize\" value=\"\">\r\n                    <i class=\"dropdown icon\"></i>\r\n                    <div class=\"default text\">Document Type</div>\r\n                    <div class=\"menu\">\r\n                      <div class=\"item\" (click)=\"setDropDownType('licence', 'document3')\">Driving Licence</div>\r\n                    </div>\r\n                  </div> -->\r\n                </div>\r\n                <div class=\"three wide column\">\r\n                  <label class=\"profile-label\">Document Number</label>\r\n                  <input type=\"text\" formControlName=\"driving_licence\" name=\"driving_licence\" placeholder=\"Document Number\"\r\n                    value=\"\">\r\n                </div>\r\n                <div class=\"two wide column\">\r\n                  <label class=\"profile-label\">Issue Date</label>\r\n                  <div class=\"ui left icon input\"\r\n                    [ngClass]=\"{'error': ((submitted && f.driving_licence_issueDate.errors) && f.driving_licence_issueDate.errors.required) }\">\r\n                    <i class=\"icon \">\r\n                      <img src=\"./../../../../assets/icons/calendar.svg\" class=\"down\" />\r\n                    </i>\r\n                    <input type=\"text\" autocomplete=\"off\" name=\"driving_licence_issueDate\"\r\n                      formControlName=\"driving_licence_issueDate\" class=\"start-form\" placeholder=\"Issue Date\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"two wide column\">\r\n                  <label class=\"profile-label\">Expiry Date</label>\r\n                  <div class=\"ui left icon input\"\r\n                    [ngClass]=\"{'error': ((submitted && f.driving_licence_expiryDate.errors) && f.driving_licence_expiryDate.errors.required) }\">\r\n                    <i class=\"icon \">\r\n                      <img src=\"./../../../../assets/icons/calendar.svg\" class=\"down\" />\r\n                    </i>\r\n                    <input type=\"text\" autocomplete=\"off\" name=\"driving_licence_expiryDate\"\r\n                      formControlName=\"driving_licence_expiryDate\" class=\"start-form\" placeholder=\"Expiry Date\" />\r\n                  </div>\r\n                </div>\r\n                <div class=\"two wide column\">\r\n                  <label class=\"profile-label\">Place of Issue</label>\r\n                  <input type=\"text\" name=\"driving_licence_placeofissue\" formControlName=\"driving_licence_placeofissue\"\r\n                    placeholder=\"Place of Issue\" class=\"padding_in\" value=\"\">\r\n                </div>\r\n                <div class=\"three wide column \">\r\n                  <label for=\"imageFile3\" class=\"profile-label\">Document Detail</label>\r\n                  <input #imageFile3 type=\"file\" id=\"imageFile3\" accept='image/*'\r\n                    (change)=\"uploadImage3(imageFile3.files,'imageFile3')\" />\r\n                </div>\r\n                <div class=\"two wide column\">\r\n                  <label class=\"profile-label\"></label>\r\n                  <!-- <input type=\"file\"   accept=\"image/*\" > -->\r\n                  <a class=\"nav-link edit\" (click)=\"viewUser('custom-modal-3')\" title=\"View Details\">\r\n                    <div class=\"ui primary button  allign-left\">\r\n                      View\r\n                    </div>\r\n                  </a>\r\n                  <jw-modal id=\"custom-modal-3\" class=\"register-modal\">\r\n                    <i class=\"close icon push-right\" (click)=\"closeModal('custom-modal-3');\"></i>\r\n                    <div class=\"ui\" *ngIf=\"showDetailModal\">\r\n                      <img src=\"{{ newTravellerProfileForm.controls.image3.value }}\" style=\"width: 95%;\" />\r\n                    </div>\r\n                  </jw-modal>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"outer-basic outer-basic_secondary mtb\" *ngIf=\"showCompanyid\" id=\"company\">\r\n        <div class=\"outer-basicForm\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields doc-head\">\r\n              <h4>Company Details</h4>\r\n            </div>\r\n            <div class=\"ui grid \">\r\n              <div class=\"sixteen wide column row\">\r\n                <div class=\"four wide column\">\r\n                  <label class=\"profile-label\">Company Name</label>\r\n                  <div class=\"ui input fluid\">\r\n                    <input type=\"text\" name=\"company_name\" formControlName=\"company_name\" placeholder=\"Company Name\" value=\"\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"four wide column\">\r\n                  <label class=\"profile-label\">Designation</label>\r\n                  <div class=\"ui input fluid\">\r\n                    <input type=\"text\" name=\"designation\" formControlName=\"designation\" placeholder=\"Designation\" value=\"\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"four wide column \">\r\n                  <label class=\"profile-label\">Employee Id</label>\r\n                  <div class=\"ui input fluid\">\r\n                    <input type=\"text\" name=\"employeeId\" formControlName=\"employeeId\" placeholder=\"Employee Id\" value=\"\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"four wide column\">\r\n                  <label class=\"profile-label\">Traveller Remarks</label>\r\n                  <div class=\"ui input fluid\">\r\n                    <input type=\"text\" name=\"traveller_remarks\" formControlName=\"traveller_remarks\" placeholder=\"Traveller Remarks\" value=\"\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"sixteen wide column row\">\r\n                <div class=\"four wide column\">\r\n                  <label class=\"profile-label\">Department</label>\r\n                  <div class=\"ui input fluid\">\r\n                    <input type=\"text\" name=\"department\" formControlName=\"department\" placeholder=\"Department\" value=\"\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"four wide column\">\r\n                  <label class=\"profile-label\">Company Number</label>\r\n                  <div class=\"ui input fluid\">\r\n                    <input type=\"text\" name=\"company_number\" formControlName=\"company_number\" placeholder=\"Company Number\" value=\"\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"four wide column\">\r\n                  <label class=\"profile-label\">Company EmailId</label>\r\n                  <div class=\"ui input fluid\">\r\n                    <input type=\"text\" name=\"company_emailid\" formControlName=\"company_emailid\" placeholder=\"Company EmailId\" value=\"\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"four wide column\">\r\n                  <label class=\"profile-label\">Other Remarks</label>\r\n                  <div class=\"ui input fluid\">\r\n                    <input type=\"text\" name=\"other_remarks\" formControlName=\"other_remarks\" placeholder=\"Other Remarks\" value=\"\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"sixteen wide column row\">\r\n                <div class=\"four wide column\">\r\n                  <label class=\"profile-label\">Company Address</label>\r\n                  <input type=\"text\" name=\"company_address\" formControlName=\"company_address\" placeholder=\"Company Address\" value=\"\">\r\n                </div>\r\n                <div class=\"four wide column\">\r\n                  <label class=\"profile-label\">Traveller Type</label>\r\n                  <input type=\"text\" name=\"traveller_type\" placeholder=\"Traveller Type\" formControlName=\"traveller_type\" value=\"\">\r\n                </div>\r\n                <div class=\"four wide column\">\r\n                  <label class=\"profile-label\">Corporate code</label>\r\n                  <div formArrayName=\"corporate_code\">\r\n                    <div *ngFor=\"let numberD of newTravellerProfileForm.get('corporate_code')['controls']; let nIndex = index\">\r\n                      <div [formGroupName]=\"nIndex\" class=\"ui grid\">\r\n                        <div class=\"sixteen wide column row\">\r\n                          <div class=\"fourteen wide column\">\r\n                            <input type=\"text\" name=\"corporate_code\" formControlName=\"corporate_code\"\r\n                              placeholder=\"Corporate code\" value=\"\">\r\n                          </div>\r\n                          <div class=\"two wide column\">\r\n                            <i class=\"icon\"><img class=\"bookings_input__placeholder-icon keep_right\"\r\n                                src=\"./../../../../assets/img/add-icon.png\"  *ngIf=\"nIndex==(newTravellerProfileForm.get('corporate_code')['controls'].length-1)\" (click)=\"addCorporateCode()\" /></i>\r\n      \r\n                            <i class=\"icon\"><img class=\"bookings_input__placeholder-icon resize-left\"\r\n                                src=\"./../../../../assets/img/delete-button.png\" *ngIf=\"nIndex != 0\" tabindex=\"0\"\r\n                                (click)=\"removeItem(i)\" /></i>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <!-- <div class=\"ui sixteen wide column row grid\"> -->\r\n                      <!-- <div class=\"ui secondary  button allign-left\" (click)=\"removeCorporateCode()\">\r\n                    Delete\r\n                  </div> -->\r\n                    <!-- </div> -->\r\n                  </div>\r\n                </div>\r\n                <div class=\"four wide column\">\r\n                  <label class=\"profile-label\">Corporate Profile Id</label>\r\n                  <div formArrayName=\"corporate_profileid\">\r\n                    <div *ngFor=\"let numberD of newTravellerProfileForm.get('corporate_profileid')['controls']; let nIndex = index\">\r\n                      <div [formGroupName]=\"nIndex\" class=\"ui grid\">\r\n                        <div class=\"sixteen wide column row\">\r\n                          <div class=\"fourteen wide column\">\r\n                            <input type=\"text\" name=\"corporate_profileid\" formControlName=\"corporate_profileid\"\r\n                              placeholder=\"Corporate Id\" value=\"\">\r\n                          </div>\r\n                          <div class=\"two wide column\">\r\n                            <i class=\"icon\"><img class=\"bookings_input__placeholder-icon keep_right\"\r\n                                src=\"./../../../../assets/img/add-icon.png\"  *ngIf=\"nIndex==(newTravellerProfileForm.get('corporate_profileid')['controls'].length-1)\" (click)=\"addCorporateCode()\" /></i>\r\n                            <i class=\"icon\"><img class=\"bookings_input__placeholder-icon resize-left\"  \r\n                                src=\"./../../../../assets/img/delete-button.png\"  *ngIf=\"nIndex != 0\"tabindex=\"0\" (click)=\"removeItem(i)\"\r\n                                /></i>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"sixteen wide column row\">\r\n                <div class=\"four wide column\">\r\n                  <label class=\"profile-label\">Supplier Id</label>\r\n                  <div formArrayName=\"corporate_supplierid\">\r\n                    <div *ngFor=\"let numberD of newTravellerProfileForm.get('corporate_supplierid')['controls']; let nIndex = index\">\r\n                      <div [formGroupName]=\"nIndex\" class=\"ui grid\">\r\n                        <div class=\"sixteen wide column row\">\r\n                          <div class=\"fourteen wide column\">\r\n                            <input type=\"text\" name=\"corporate_supplierid\" formControlName=\"corporate_supplierid\"\r\n                              placeholder=\"Supplier Id\" value=\"\">\r\n                          </div>\r\n                          <div class=\"two wide column\">\r\n                            <i class=\"icon\"><img class=\"bookings_input__placeholder-icon keep_right\" *ngIf=\"nIndex==(newTravellerProfileForm.get('corporate_supplierid')['controls'].length-1)\"\r\n                                src=\"./../../../../assets/img/add-icon.png\" (click)=\"addCorporateCode()\" /></i>\r\n                            <i class=\"icon\"><img class=\"bookings_input__placeholder-icon resize-left\"\r\n                                src=\"./../../../../assets/img/delete-button.png\" *ngIf=\"nIndex!=0\" tabindex=\"0\" (click)=\"removeItem(i)\"\r\n                                /></i>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\" id=\"DivIdToScroll\">\r\n        <div class=\"outer-basicForm\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields doc-head\">\r\n              <h4>Preferences</h4>\r\n            </div>\r\n            <div class=\"fields doc-head\">\r\n              <h4>Airlines</h4>\r\n            </div>\r\n            <div class=\"ui grid\">\r\n              <div class=\"sixteen wide column row\">\r\n                <div class=\"four wide column \">\r\n                  <label class=\"profile-label\">Cabin Class</label>\r\n                  <div class=\"ui fluid  selection dropdown\">\r\n                    <input type=\"hidden\" name=\"cabin_class\" formControlName=\"cabin_class\" value=\"\">\r\n                    <i class=\"dropdown icon\"></i>\r\n                    <div class=\"default text\">Cabin Class</div>\r\n                    <div class=\"menu\">\r\n                      <div class=\"item\" (click)=\"setDropDownType('First Class', 'cabin_class')\">First Class</div>\r\n                      <div class=\"item\" (click)=\"setDropDownType('Business Class', 'cabin_class')\">Business Class</div>\r\n                      <div class=\"item\" (click)=\"setDropDownType('Economy', 'cabin_class')\">Economy\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"four wide column\">\r\n                  <label class=\"profile-label\">Meal Type</label>\r\n                  <div class=\"ui fluid  selection dropdown\">\r\n                    <input type=\"hidden\" name=\"meal_type\" formControlName=\"meal_type\" value=\"\">\r\n                    <i class=\"dropdown icon\"></i>\r\n                    <div class=\"default text\">Meal Type</div>\r\n                    <div class=\"menu\">\r\n                      <div class=\"item\" (click)=\"setDropDownType('Non-Veg', 'meal_type')\">Non-Veg</div>\r\n                      <div class=\"item\" (click)=\"setDropDownType('Veg', 'meal_type')\">Veg</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"four wide column\">\r\n                  <label class=\"profile-label\">Seat Preference</label>\r\n                  <div class=\"ui fluid  selection dropdown\">\r\n                    <input type=\"hidden\" name=\"seat_preference\" formControlName=\"seat_preference\" value=\"\">\r\n                    <i class=\"dropdown icon\"></i>\r\n                    <div class=\"default text\">Seat Type</div>\r\n                    <div class=\"menu\">\r\n                      <div class=\"item\" (click)=\"setDropDownType('window', 'seat_preference')\">Window</div>\r\n                      <div class=\"item\" (click)=\"setDropDownType('middle', 'seat_preference')\">Middle</div>\r\n                      <div class=\"item\" (click)=\"setDropDownType('asile', 'seat_preference')\">Aisle</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"four wide column flyer-block\">\r\n                  <div formArrayName=\"airlinePreferences\"  *ngFor=\"let airPreference of newTravellerProfileForm.get('airlinePreferences')['controls']; let ind = index\">\r\n                    <div [formGroupName]=\"ind\">\r\n                      <label class=\"flights_label label-align\">Preferred airline</label>\r\n                      <select formControlName=\"airlinePreference\" class=\"ui dropdownThree width-full multiple_search\" multiple=\"\">\r\n                        <!-- <option value=\"\">Preferred Airline</option> -->\r\n                        <option class=\"item\" *ngFor=\"let elem of airlinesArr; let i = index;\" value=\"{{elem.value}}\">\r\n                          {{elem.name}}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"sixteen wide column row\">\r\n                <!-- <div class=\"four wide column flyer-block\"> -->\r\n                  <!-- <div class=\"ui one column centered grid\">\r\n                    <div class=\"column\"> -->\r\n                      <!-- <div class=\"ui fluid  selection dropdown\" (click)=\"showAirlines()\">\r\n                        <input type=\"hidden\">\r\n                        <i class=\"dropdown icon\"></i>\r\n                        <div class=\"default text\">Frequent Flyer</div>\r\n                      </div> -->\r\n                    <!-- </div>\r\n                  </div> -->\r\n                <!-- </div> -->\r\n                <div class=\"sixteen wide column add-airline\"> <!-- *ngIf=\"showAddAirlines\"-->\r\n                  <label class=\"profile-label\">Frequent Flyer</label>\r\n                  <div formArrayName=\"airline_details\">\r\n                    <div *ngFor=\"let numberD of newTravellerProfileForm.get('airline_details')['controls']; let nIndex = index\">\r\n                      <div [formGroupName]=\"nIndex\" class=\"ui grid\">\r\n                        <div class=\"sixteen wide column row\">\r\n                          <div class=\"four wide column\">\r\n                              <!-- <label class=\"flights_label label-align\">Preferred airline</label>\r\n                                  <select formControlName=\"airlinePreference\"\r\n                                      class=\"ui dropdown width-full multiple_search\" multiple=\"\">\r\n                                      <option value=\"\">Preferred Airline</option>\r\n                                      <option class=\"item\" *ngFor=\"let elem of airlinesArr; let i = index;\"\r\n                                          value=\"{{elem.value}}\">{{elem.name}}</option>\r\n                                  </select> -->\r\n                              <select class=\"ui fluid search dropdown\" formControlName=\"airline_option\">\r\n                                <option value=\"\"> Airline </option>\r\n                                <option class=\"item\" *ngFor=\"let elem of airlinesArr; let i = index;\"\r\n                                  value=\"{{elem.value}}\">{{elem.name}}</option>\r\n                              </select>\r\n                          </div>\r\n                          <div class=\"four wide column\">\r\n                            <input type=\"text\" name=\"frequent_flyersoption\" formControlName=\"frequent_flyersoption\" placeholder=\"Frequent Flyer\" value=\"\">\r\n                          </div>\r\n                          <div class=\"eight wide column\">\r\n                            <div class=\"ui primary button align-left-block\" (click)=\"addMoreAirlines()\">\r\n                              Add\r\n                            </div>\r\n                            <div class=\"ui secondary  button align-left-block\" (click)=\"removeMoreAirlines(nIndex)\" *ngIf=\"nIndex!=0\" tabindex=\"0\">\r\n                              Delete\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"two column centered row\">\r\n                    <div class=\"column\">\r\n                    </div>\r\n                    <div class=\"column\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n              <!-- <div class=\"three wide column\" formArrayName=\"airlinePreferences\"\r\n                *ngFor=\"let airPreference of flightSearchForm.get('airlinePreferences')['controls']; let ind = index\">\r\n                <div [formGroupName]=\"ind\">\r\n                  <label class=\"flights_label label-align\">Preferred airline</label>\r\n                  <select formControlName=\"airlinePreference\" class=\"ui dropdown width-full multiple_search\"\r\n                    multiple=\"\">\r\n                    <option value=\"\">Preferred Airline</option>\r\n                    <option class=\"item\" *ngFor=\"let elem of airlinesArr; let i = index;\" value=\"{{elem.value}}\">\r\n                      {{elem.name}}</option>\r\n                  </select>\r\n                </div>\r\n              </div> -->\r\n              <!-- <div class=\"five wide column \">\r\n                <label class=\"profile-label\">Frequent Flyer</label> -->\r\n                <!-- <div class=\"three wide column\" formArrayName=\"airlinePreferences\"\r\n                *ngFor=\"let airPreference of newTravellerProfileForm.get('airlinePreferences')['controls']; let ind = index\">\r\n                <div [formGroupName]=\"ind\">\r\n                  <label class=\"flights_label label-align\">Preferred airline</label>\r\n                  <select   (change)=\"searchAirline($event.target.value)\" formControlName=\"airlinePreference\" class=\"ui dropdown width-full multiple_search\"\r\n                    multiple=\"\">\r\n                    <option value=\"\">Preferred Airline</option>\r\n                    <option class=\"item\" *ngFor=\"let elem of airlinesArr; let i = index;\" value=\"{{elem.value}}\">\r\n                      {{elem.name}}</option>\r\n                  </select>\r\n                </div>\r\n              </div> -->\r\n\r\n            <!-- <div class=\"ui sixteen wide column grid \"> -->\r\n\r\n              <!-- <div class=\"ui one column centered grid\">\r\n\r\n                  <div class=\"column\">\r\n\r\n                    <div class=\"ui fluid  selection dropdown\" (click)=\"showAirlines()\">\r\n                      <input type=\"hidden\">\r\n                      <i class=\"dropdown icon\"></i>\r\n                      <div class=\"default text\">Add Preferred Airlines</div>\r\n\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"ui sixteen wide column row grid\" *ngIf=\"showAddAirlines\">\r\n\r\n\r\n                    <div formArrayName=\"airline_details\" class=\"width_format\">\r\n                      <div\r\n                        *ngFor=\"let numberD of newTravellerProfileForm.get('airline_details')['controls']; let nIndex = index\">\r\n                        <div [formGroupName]=\"nIndex\">\r\n                          <div class=\"ui sixteen wide column row grid\">\r\n                            <div class=\"eight wide column\">\r\n\r\n                              <div class=\"three wide column\">\r\n\r\n                                <input type=\"text\" name=\"airline_option\" class=\"element-width\"\r\n                                  formControlName=\"airline_option\" placeholder=\"Airline\" value=\"\">\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"eight wide column\">\r\n                              <div class=\"three wide column\">\r\n\r\n                                <input type=\"text\" name=\"frequent_flyersoption\" formControlName=\"frequent_flyersoption\"\r\n                                  placeholder=\"Frequent Flyer\" class=\"element-width\" value=\"\">\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"two column centered row\">\r\n\r\n                      <div class=\"column\">\r\n                        <div class=\"ui primary button allign-left\" (click)=\"addMoreAirlines()\">\r\n                          Add\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"column\">\r\n                        <div class=\"ui secondary  button allign-left\" (click)=\"removeMoreAirlines()\">\r\n                          Delete\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div> -->\r\n\r\n\r\n            <!-- </div> -->\r\n\r\n\r\n            \r\n            <div class=\"fields\">\r\n              <h4 class=\"hotel\">Hotels</h4>\r\n            </div>\r\n            <div class=\"ui grid\">\r\n              <div class=\"sixteen wide column row\">\r\n                <div class=\"four wide column\">\r\n                  <label class=\"profile-label\">Classification</label>\r\n                  <div class=\"ui fluid  selection dropdown\">\r\n                    <input type=\"hidden\" name=\"classification\" formControlName=\"classification\" value=\"\">\r\n                    <i class=\"dropdown icon\"></i>\r\n                    <div class=\"default text\">Classification</div>\r\n                    <div class=\"menu\">\r\n                      <div class=\"item\" (click)=\"setDropDownType('Five Star', 'classification')\">Five Star</div>\r\n                      <div class=\"item\" (click)=\"setDropDownType('Four Star', 'classification')\">Four Star</div>\r\n                      <div class=\"item\" (click)=\"setDropDownType('Three Star', 'classification')\">Three Star</div>\r\n                      <div class=\"item\" (click)=\"setDropDownType('Two Star', 'classification')\">Two Star</div>\r\n                      <div class=\"item\" (click)=\"setDropDownType('One Star ', 'classification')\">One Star</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"four wide column\">\r\n                  <label class=\"profile-label\">Meal Type</label>\r\n                  <div class=\"ui fluid  selection dropdown\">\r\n                    <input type=\"hidden\" name=\"meal_type2\" formControlName=\"meal_type2\" value=\"\">\r\n                    <i class=\"dropdown icon\"></i>\r\n                    <div class=\"default text\">Meal Type</div>\r\n                    <div class=\"menu\">\r\n                      <div class=\"item\" (click)=\"setDropDownType('Non-Veg', 'meal_type2')\">Non-Veg</div>\r\n                      <div class=\"item\" (click)=\"setDropDownType('Veg', 'meal_type2')\">Veg</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"sixteen wide column row\">\r\n                <div class=\"sixteen wide column text-right bookings_btn-panel\">\r\n                  <button class=\"ui primary button pnr-button\" type=\"submit\" *ngIf=\"showProfileId\" (click)=\"onSubmit()\">\r\n                    Save\r\n                  </button>\r\n                  <button class=\"ui primary button pnr-button\" type=\"submit\" *ngIf=\"!showProfileId\" (click)=\"updateTravllerProfile()\">Update</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n\r\n\r\n\r\n            <!-- <div class=\"ui sixteen wide column grid info-block\">\r\n              <div class=\"sixteen wide column row\">\r\n                <div class=\"one wide column\">\r\n                  <label class=\"profile-label\">Title<span class=\"mandatory\">*</span></label>\r\n                  <div class=\"ui fluid search dropdown \">\r\n                    <input type=\"hidden\" formControlName=\"salutation\" name=\"salutation\" value=\"salutation\">\r\n                    <i class=\"dropdown icon\"></i>\r\n                    <div class=\"default text\"></div>\r\n                    <div class=\"menu\">\r\n                      <div class=\"item\" (click)=\"setDropDownType('Mr', 'salutation')\">Mr</div>\r\n                      <div class=\"item\" (click)=\"setDropDownType('Ms', 'salutation')\">Ms</div>\r\n                      <div class=\"item\" (click)=\"setDropDownType('Mrs','salutation')\">Mrs</div>\r\n                      <div class=\"item\" (click)=\"setDropDownType('Miss','salutation')\">Miss</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"two wide column \"  [ngClass]=\"{'is-invalid': isSubmitted && gfc.first_name.invalid}\">\r\n                  <label class=\"profile-label\">First name<span class=\"mandatory\">*</span></label>\r\n                  <input type=\"text\" class=\"text-colour\" formControlName=\"first_name\" name=\"first_name\"\r\n                    placeholder=\"First Name\">\r\n                    <div *ngIf=\"isSubmitted && gfc.first_name.invalid\" class=\"invalid-feedback\">\r\n                      <div class=\"validations\" *ngIf=\"gfc.first_name.invalid\">\r\n                        First name required.\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"two wide column\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.last_name.invalid}\"></div>\r\n                <div class=\"two wide column\">\r\n                  <label class=\"profile-label\">Last name<span class=\"mandatory\">*</span></label>\r\n                  <input type=\"text\" class=\"text-colour\" placeholder=\"Last Name\" formControlName=\"last_name\"\r\n                    name=\"last_name\">\r\n                    <div *ngIf=\"isSubmitted && gfc.last_name.invalid\" class=\"invalid-feedback\">\r\n                      <div class=\"validations\" *ngIf=\"gfc.last_name.invalid\">\r\n                        Last name required.\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"two wide column\"></div>\r\n                <div class=\"three wide column\" [ngClass]=\"{'is-invalid': isSubmitted && gfc.gender.invalid}\">\r\n                  <label class=\"profile-label\">Gender<span class=\"mandatory\">*</span>\r\n                   </label>\r\n                  <div class=\"sixteen wide column\">\r\n                    <div class=\"ui radio checkbox\">\r\n                      <input type=\"radio\" formControlName=\"gender\" value=\"Male\" name=\"gender\">\r\n                      <label class=\"gender-label\">Male</label>\r\n                    </div>\r\n                    <div class=\"ui radio checkbox\">\r\n                      <input type=\"radio\" formControlName=\"gender\" name=\"gender\" value=\"Female\">\r\n                      <label class=\"gender-label\">Female</label>\r\n                    </div>\r\n                    <div class=\"ui radio checkbox\">\r\n                      <input type=\"radio\" formControlName=\"gender\" name=\"gender\" value=\"Other\">\r\n                      <label class=\"gender-label\">Other</label>\r\n                    </div>\r\n                    <div *ngIf=\"isSubmitted && gfc.gender.invalid\" class=\"invalid-feedback\">\r\n                      <div class=\"validations\" *ngIf=\"gfc.gender.invalid\">\r\n                        Gender required.\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"one wide column\"></div>\r\n                <div class=\"two wide column \">\r\n                  <label class=\"profile-label\">Corporate</label>\r\n                  <div class=\"ui  checkbox\">\r\n                    <input type=\"checkbox\" name=\"corporate\" formControlName=\"corporate\"  (change)=showCompany()>\r\n                    <label class=\"gender-label\">Corporate (Yes/No) </label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div> -->\r\n            <!-- <div class=\"ui sixteen wide column grid info-block\">\r\n              <div class=\"sixteen wide column row\">\r\n                <div class=\"three wide column \" [ngClass]=\"{'is-invalid': isSubmitted && gfc.a_dob.invalid}\">\r\n                  <label class=\"profile-label \">Date Of Birth<span class=\"mandatory\">*</span></label>\r\n                  <div class=\"ui left icon input reduce-size\"\r\n                    [ngClass]=\"{'error': ((submitted && f.a_dob.errors) && f.a_dob.errors.required) }\">\r\n                    <i class=\"icon \">\r\n                      <img src=\"./../../../../assets/icons/calendar.svg\" class=\"down\" />\r\n                    </i>\r\n                    <input type=\"text\" formControlName=\"a_dob\" class=\"start-form\" placeholder=\"Date of Birth\"\r\n                      autocomplete=\"off\" name=\"a_dob\" />\r\n                  </div>\r\n                  <div *ngIf=\"isSubmitted && gfc.a_dob.invalid\" class=\"invalid-feedback\">\r\n                    <div class=\"validations\" *ngIf=\"gfc.a_dob.invalid\">\r\n                      Dob required.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"two wide column \">\r\n                </div>\r\n                <div class=\"two wide column \">\r\n                  <label class=\"profile-label\">Marital Status</label>\r\n                  <div class=\"ui fluid  selection dropdown \">\r\n                    <input type=\"hidden\" formControlName=\"marital_status\" name=\"marital_status\" value=\"marital_status\"\r\n                      name=\"marital_status\">\r\n                    <i class=\"dropdown icon\"></i>\r\n                    <div class=\"default text\">Marital Status</div>\r\n                    <div class=\"menu\">\r\n                      <div class=\"item\" (click)=\"setDropDownType('Married', 'marital_status')\">Married\r\n                      </div>\r\n                      <div class=\"item\" (click)=\"setDropDownType('Single', 'marital_status')\">Single\r\n                      </div>\r\n                      <div class=\"item\" (click)=\"setDropDownType('Other', 'marital_status')\">Other\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"two wide column \">\r\n                </div>\r\n                <div class=\"two wide column \" [ngClass]=\"{'is-invalid': isSubmitted && gfc.nationality.invalid}\">\r\n                  <label class=\"profile-label\">Nationality<span class=\"mandatory\">*</span></label>\r\n                  <div class=\"ui fluid  selection dropdown\">\r\n                    <input type=\"hidden\" formControlName=\"nationality\" name=\"nationality\" value=\"nationality\"\r\n                      name=\"nationality\">\r\n                    <i class=\"dropdown icon\"></i>\r\n                    <div class=\"default text\">Nationality</div>\r\n                    <div class=\"menu\">\r\n                      <div class=\"item\" (click)=\"setDropDownType('Indian', 'nationality')\">Indian</div>\r\n                      <div class=\"item\" (click)=\"setDropDownType('Pakistani', 'nationality')\">Pakistani</div>\r\n                      <div class=\"item\" (click)=\"setDropDownType('Emirati', 'nationality')\">Emirati</div>\r\n                      <div class=\"item\" (click)=\"setDropDownType('Filipino', 'nationality')\">Filipino\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div *ngIf=\"isSubmitted && gfc.nationality.invalid\" class=\"invalid-feedback\">\r\n                    <div class=\"validations\" *ngIf=\"gfc.nationality.invalid\">\r\n                      Nationality required.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"two wide column \"></div>\r\n                <div class=\"two wide column \" [ngClass]=\"{'is-invalid': isSubmitted && gfc.passenger_type.invalid}\">\r\n                  <label class=\"profile-label \">Pax Type<span class=\"mandatory\">*</span></label>\r\n                  <div class=\"ui fluid  selection dropdown \">\r\n                    <input type=\"hidden\" formControlName=\"passenger_type\" name=\"passenger_type\" value=\"passenger_type\">\r\n                    <i class=\"dropdown icon\"></i>\r\n                    <div class=\"default text\">Pax Type</div>\r\n                    <div class=\"menu\">\r\n                      <div class=\"item\" (click)=\"setDropDownType('Adult', 'passenger_type')\">Adult\r\n                      </div>\r\n                      <div class=\"item\" (click)=\"setDropDownType('Child', 'passenger_type')\">Child\r\n                      </div>\r\n                      <div class=\"item\" (click)=\"setDropDownType('Infant', 'passenger_type')\">Infant\r\n                      </div>\r\n                      <div class=\"item\" (click)=\"setDropDownType('YTH', 'passenger_type')\">YTH\r\n                      </div>\r\n                      <div class=\"item\" (click)=\"setDropDownType('ITX', 'passenger_type')\">ITX\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n                  <div *ngIf=\"isSubmitted && gfc.passenger_type.invalid\" class=\"invalid-feedback\">\r\n                    <div class=\"validations\" *ngIf=\"gfc.passenger_type.invalid\">\r\n                      Passenger Type required.\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n            </div> -->\r\n            <!-- <div class=\"ui sixteen wide column grid\">\r\n              <div class=\"ui grid\">\r\n                <div class=\"sixteen wide column row\">\r\n                  <div class=\"three wide column row\">\r\n                    <label class=\"profile-label\">Address</label>\r\n                    <input type=\"text\" class=\"ten wide column adjust\" formControlName=\"address\" name=\"address\"\r\n                    placeholder=\"Address\">\r\n                  </div>\r\n                  <div class=\"three wide column row\">\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div> -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/profile-management.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/profile-management.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutProfileManagementProfileManagementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n";
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


    __webpack_exports__["default"] = ".stepper-grid {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n.stepper-grid .stepper-grid_step {\n  display: flex;\n  align-items: center;\n  opacity: 0.6;\n  cursor: pointer;\n}\n.stepper-grid .stepper-grid_step._active {\n  opacity: 1;\n  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div {\n  background-color: #062862;\n  border: 0;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div div.image {\n  background-color: white;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div:hover {\n  border: 2px solid #A6B1C3;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon label {\n  border: 0;\n  background-color: #062862;\n  color: white;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-border hr {\n  border-bottom: 2px solid #062862;\n}\n.stepper-grid .stepper-grid_step._activated {\n  opacity: 1;\n  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div {\n  background-color: #437ADA;\n  border: 0;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div div.image {\n  background-color: white;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div:hover {\n  border: 2px solid #A6B1C3;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon label {\n  border: 0;\n  background-color: #437ADA;\n  color: white;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-border hr {\n  border-bottom: 2px solid #437ADA;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div {\n  background-color: transparent;\n  border: 2px solid #A6B1C3;\n  color: white;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  border-radius: 50%;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon label {\n  width: 100px;\n  height: auto;\n  line-height: 24px;\n  text-align: center;\n  background-color: transparent;\n  border: 2px solid #A6B1C3;\n  margin-top: 15px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 600 !important;\n  font-size: 13px;\n  color: #A6B1C3;\n  border-radius: 8px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon label._last {\n  width: 150px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-border {\n  width: 100%;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-border hr {\n  margin-top: -24px;\n  width: 100%;\n  height: 2px;\n  background: none;\n  border-bottom: 2px solid #A6B1C3;\n}\n.stepper-grid-content {\n  display: none;\n}\n.stepper-grid-content._active {\n  display: block;\n}\n.ui.grid + .grid {\n  margin-top: 0;\n}\nh3 span {\n  font-weight: 600 !important;\n  font-family: \"Roboto\", sans-serif;\n  color: rgba(6, 40, 98, 0.8);\n}\n.checkbox_label {\n  height: 13px !important;\n  color: #828282 !important;\n  font-family: Ubuntu !important;\n  font-size: 12px !important;\n  font-weight: 300 !important;\n}\nh4 {\n  font-weight: 400 !important;\n  font-family: \"Roboto\", sans-serif;\n  color: rgba(79, 79, 79, 0.9);\n  font-size: 18px;\n  padding-left: 9px !important;\n}\nlabel {\n  display: block;\n  font-weight: 400 !important;\n  font-family: \"Roboto\", sans-serif !important;\n  color: rgba(6, 40, 98, 0.6);\n  font-size: 14px;\n  margin-bottom: 8px;\n}\nlabel.label-text {\n  font-family: \"Roboto\", sans-serif !important;\n  color: rgba(6, 40, 98, 0.6) !important;\n}\n.ui.radio.checkbox label {\n  font-weight: 400 !important;\n  font-family: \"Roboto\", sans-serif;\n  color: rgba(6, 40, 98, 0.5);\n  font-size: 14px;\n  margin-right: 18px;\n}\n.radio-block .ui.checkbox input:checked ~ .box:before, .radio-block .ui.checkbox input:checked ~ label:before {\n  border-color: #4567AC;\n}\n.radio-block .ui.radio.checkbox .box:before, .radio-block .ui.radio.checkbox label:before, .radio-block .ui.radio.checkbox .box:after, .radio-block .ui.radio.checkbox label:after, .radio-block .ui.checkbox input[type=radio] {\n  top: -2px;\n}\n.radio-block .ui.checkbox input:checked ~ .box:after, .radio-block .ui.checkbox input:checked ~ label:after {\n  color: #4567AC;\n  background-color: #4567AC;\n}\n.check-block .ui.checkbox .box:before, .check-block .ui.checkbox label:before {\n  top: -2px;\n}\n.check-block .ui.checkbox input:checked ~ .box:after, .check-block .ui.checkbox input:checked ~ label:after {\n  color: #4567AC;\n}\n.check-block .ui.checkbox input:checked ~ .box:before, .check-block .ui.checkbox input:checked ~ label:before {\n  border-color: #4567AC;\n}\n.ui.form input[type=text],\ninput {\n  padding: 8px 15px !important;\n}\n.mtb {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n.ml {\n  margin-left: 20px;\n}\n.mr {\n  margin-right: 20px;\n}\n.booking-header {\n  color: #4F4F4F;\n  font-family: Helvetica;\n  font-size: 20px;\n  font-weight: 300;\n  line-height: 22px;\n  margin-left: 22px;\n}\n.outer-basic {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n  padding: 0px;\n}\n.bookings_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n.bookings_pickers .input .ui.column.grid > input.move-left {\n  margin-left: 20px !important;\n}\n.bookings_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n.bookings_pickers .input .icon {\n  opacity: 1;\n  z-index: 100;\n}\n.bookings_pickers .input .icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n.bookings_pickers .input .icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n.bground {\n  background-color: transparent !important;\n  border: 2px solid #A6B1C3 !important;\n  cursor: pointer;\n}\n.stepper-grid-content {\n  display: none;\n}\n.stepper-grid-content._active {\n  display: block;\n}\nf .outer-basic {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  padding-top: 15px !important;\n}\n.search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.search.dropdown .search {\n  margin-left: 42px !important;\n}\n.search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n.search.dropdown.title-dropdown .default.text {\n  margin-right: auto !important;\n  padding: 0px 14px !important;\n  top: -2px;\n}\n.trailing_button {\n  position: absolute;\n  right: 0;\n}\n.newAgency_topAlign {\n  padding-top: 1vh;\n}\ntd {\n  color: #4F4F4F;\n  font-family: Helvetica;\n  font-size: 10px;\n  line-height: 11px;\n  text-align: center;\n}\nth {\n  color: #4F4F4F;\n  font-family: Helvetica;\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 11px;\n  text-align: center;\n}\n.confirm {\n  width: 63px;\n}\n.recConfirm {\n  height: 18px;\n  width: 62px;\n  background-color: #72D44F;\n  color: white;\n  padding-top: 0.5vh;\n}\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n.field input::-webkit-input-placeholder {\n  font-size: 12px;\n}\n.field input::-moz-placeholder {\n  font-size: 12px;\n}\n.field input::-ms-input-placeholder {\n  font-size: 12px;\n}\n.field input::placeholder {\n  font-size: 12px;\n}\n.outer-basic_secondary {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n}\n.outer-basicForm_secondary {\n  width: 100%;\n  height: auto;\n  padding: 50px;\n}\n.right_links {\n  position: absolute;\n  right: 0;\n  padding-top: 1vh;\n  padding-right: 8vh;\n}\n.outer-basic_tertiary {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\n.outer-basicForm_tertiary {\n  width: 100%;\n  height: auto;\n  padding: 50px;\n}\nhr {\n  box-sizing: border-box;\n  height: 1px;\n  border: 0.5px solid #E0E0E0;\n}\n.dropdown .text {\n  font-size: 12px;\n}\n.bookings_btn-panel.trailing_button {\n  margin-right: 45px;\n}\n.ui.fluid.container {\n  padding: 28px;\n}\n.ui.selection.dropdown {\n  margin-left: 349px;\n  border: 1px solid #437ADA;\n  box-sizing: border-box;\n  border-radius: 5.12155px;\n}\n.gender-label {\n  font-family: Work Sans;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 10px;\n  line-height: 12px;\n  color: #122A58;\n}\n.ui.search.dropdown {\n  margin-right: 394px !important;\n  border: 1px solid #437ADA;\n  box-sizing: border-box;\n  border-radius: 5.12155px;\n  width: 100%;\n}\n.dropdown-data {\n  font-family: Work Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 10.2431px;\n  line-height: 12px;\n  color: #062862;\n}\n.profile-label {\n  font-family: Work Sans;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 9px;\n  opacity: 0.8;\n}\n.ui.button {\n  margin-left: 42px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image {\n  margin: 0 auto;\n  background-color: #A6B1C3;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._travel {\n  -webkit-mask: url('travel.svg') no-repeat center;\n  mask: url('travel.svg') no-repeat center;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._user {\n  -webkit-mask: url('personal.svg') no-repeat center;\n  mask: url('personal.svg') no-repeat center;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._payment {\n  -webkit-mask: url('payment.svg') no-repeat center;\n  mask: url('payment.svg') no-repeat center;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._remarks {\n  -webkit-mask: url('remarks.svg') no-repeat center;\n  mask: url('remarks.svg') no-repeat center;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._airline {\n  -webkit-mask: url('airline-preferences.svg') no-repeat center;\n  mask: url('airline-preferences.svg') no-repeat center;\n}\n.ui.fluid.selection.dropdown {\n  margin-left: 0px;\n}\n.ui.fluid .outer-basic .outer-basicForm {\n  padding: 0px;\n}\n.ui.grid.info-block {\n  margin: 0px;\n}\n.ui.grid.info-block .ui.search.dropdown > input.search {\n  padding: 8px 14px;\n}\n.ui.grid.info-block .ui.search.dropdown .menu {\n  width: 100%;\n}\n.ui.grid.info-block .ui.search.dropdown .dropdown.icon {\n  position: relative;\n  top: 14px;\n  right: 14px;\n}\n.ui.grid.info-block .ui.search.dropdown > input.search {\n  padding: 8px 14px;\n}\n.ui.column.grid > input.adjust {\n  width: 77.5% !important;\n}\n.resize {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  margin-left: 1.5px;\n}\n.renew {\n  margin-top: 1rem !important;\n  margin-left: 2px !important;\n}\n.reform {\n  margin-top: 30px;\n  height: 30px !important;\n}\n.adjust {\n  width: 0% !important;\n}\n.scrolling {\n  scroll-behavior: smooth !important;\n}\n.width_adjust {\n  width: 100% !important;\n}\n.ui.search.dropdown.flow-size {\n  margin-right: 0% !important;\n  width: 70% !important;\n}\n.ui.search.dropdown.flow-size > input.search {\n  padding: 2px 1px;\n}\n.ui.search.dropdown.flow-size .dropdown.icon {\n  position: relative;\n  top: 14px;\n  right: 14px;\n}\n.ui.search.dropdown.flow-size .menu {\n  width: 100%;\n}\n.assign-left {\n  margin-left: 11px !important;\n}\n.pull-left {\n  margin-left: -80px !important;\n}\n.define-width {\n  width: 50% !important;\n}\n.apply-width {\n  width: 40% !important;\n}\n.pull-right {\n  margin-right: -20px !important;\n}\n.ui.column.grid > .pull-down {\n  margin-top: 33px !important;\n}\n.form-left {\n  margin-left: 0px !important;\n}\n.ui.button > .bring-down {\n  margin-bottom: -60px;\n}\n.push-right {\n  margin-left: 1360px !important;\n}\n.push-left {\n  position: absolute !important;\n}\n.bring-left {\n  margin-left: 18px !important;\n}\n.bring-right {\n  margin-left: 18px !important;\n}\n.indent {\n  margin: 0px;\n}\n.align.front {\n  margin-right: 50px !important;\n}\n.ui.form input.element-width {\n  width: 100% !important;\n}\n.ui.form input.element-set {\n  width: 100% !important;\n  padding: 0.67857143em 1em !important;\n}\n.ui.form input.grid-width {\n  width: 92% !important;\n}\n.ui.form input.text-colour {\n  width: 100% !important;\n}\n.ui.form input.start-form {\n  padding-right: 1em !important;\n  padding-left: 2.67142857em !important;\n}\n.validations {\n  color: red;\n  font-size: x-small;\n}\n.ui.form input.padding_in {\n  padding-right: 1em !important;\n}\n.ui.search.dropdown input.default.text {\n  padding: 0 !important;\n}\n.reduce-size {\n  width: 100% !important;\n}\n.width_format {\n  width: 120% !important;\n}\n.allign-down {\n  margin-top: 11px !important;\n}\n.down {\n  margin-top: 11px !important;\n}\n.bring-down {\n  margin-top: 13px !important;\n  width: 80% !important;\n}\n.move {\n  margin-top: 0px !important;\n  margin-right: auto !important;\n  justify-content: center;\n}\n.keep_right {\n  position: relative;\n  top: 10px;\n  left: 0px;\n}\n.box-size {\n  width: 30% !important;\n}\n.allign-left {\n  margin-left: 0px !important;\n  margin-top: 19px !important;\n  padding-top: 12px;\n}\n.align-left-block {\n  margin: 0px 12px 12px 12px !important;\n  padding-top: 12px;\n}\n.form-down {\n  margin-top: 19px !important;\n}\n.fix-down {\n  margin-top: 32px !important;\n}\n.assign_right {\n  margin-left: 1% !important;\n  width: 100% !important;\n}\n.assign_left {\n  margin-left: -10px !important;\n}\n.padding_left {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 0 !important;\n}\n.resize-left {\n  margin-top: 9px !important;\n  margin-left: 20px !important;\n  width: 16px !important;\n}\n.pull-down {\n  margin-top: 25px !important;\n}\n.addrr-block div.ui.input.adr {\n  margin-bottom: 16px;\n}\n.addrr-block div.validations.phone-valid {\n  position: relative;\n  top: -12px;\n}\n.ui.input .phone-code {\n  border-top-right-radius: 0px !important;\n  border-bottom-right-radius: 0px !important;\n  max-width: 32% !important;\n}\n.ui.input .phone-code:active, .ui.input .phone-code:focus {\n  border-color: rgba(6, 40, 98, 0.2) !important;\n  border-width: 1px !important;\n  min-width: 7em !important;\n}\n.ui.input .phone-no {\n  border-top-left-radius: 0px !important;\n  border-bottom-left-radius: 0px !important;\n  border-left: none !important;\n}\n.ui.input .phone-no:active, .ui.input .phone-no:focus {\n  border-color: rgba(6, 40, 98, 0.2) !important;\n  border-width: 1px !important;\n}\n.p-0 {\n  padding: 0px;\n}\n#personal {\n  padding-bottom: 6px;\n}\n.airline-custom {\n  margin-top: 26px;\n}\nh4.hotel {\n  margin-top: 24px;\n}\n.stepper-grid.stepper-wrapper-grid .stepper-grid_step.stepper-wrapper {\n  cursor: default;\n}\n.stepper-grid.stepper-wrapper-grid .stepper-grid_step.stepper-wrapper .stepper-grid_step__step-icon {\n  cursor: pointer;\n}\n.stepper-grid.stepper-wrapper-grid .stepper-grid_step.stepper-wrapper .stepper-grid_step__step-icon label {\n  cursor: pointer;\n}\n@media (min-width: 1680px) {\n  .ui.grid > .column.row > [class*=\"four wide\"].column, .ui.grid > .row > [class*=\"four wide\"].column {\n    width: 20% !important;\n  }\n\n  .ui.grid > .column.row > [class*=\"five wide\"].column, .ui.grid > .row > [class*=\"five wide\"].column {\n    width: 27.25% !important;\n  }\n}\n@media (max-width: 1564px) {\n  .ui.grid > .column.row > [class*=\"two wide\"].column, .ui.grid > .row > [class*=\"two wide\"].column {\n    width: 15% !important;\n  }\n}\n@media (max-width: 1354px) {\n  .ui.grid > .column.row > [class*=\"two wide\"].column, .ui.grid > .row > [class*=\"two wide\"].column {\n    width: 20% !important;\n    margin-bottom: 12px;\n  }\n}\n@media (max-width: 1280px) {\n  .ui.grid > .column.row > [class*=\"two wide\"].column, .ui.grid > .row > [class*=\"two wide\"].column {\n    width: 19.5% !important;\n  }\n\n  .ui.grid > .column.row > [class*=\"five wide\"].column, .ui.grid > .row > [class*=\"five wide\"].column {\n    width: 27.75% !important;\n  }\n}\n@media (max-width: 1120px) {\n  .ui.grid > .column.row > [class*=\"two wide\"].column, .ui.grid > .row > [class*=\"two wide\"].column {\n    width: 23.5% !important;\n  }\n\n  .ui.grid > .column.row > [class*=\"three wide\"].column, .ui.grid > .row > [class*=\"three wide\"].column {\n    width: 28.75% !important;\n  }\n\n  .ui.grid > .column.row > [class*=\"four wide\"].column, .ui.grid > .row > [class*=\"four wide\"].column {\n    width: 33.25% !important;\n    margin-bottom: 12px;\n  }\n}\n@media (max-width: 810px) {\n  .ui.grid > .column.row > [class*=\"two wide\"].column, .ui.grid > .row > [class*=\"two wide\"].column {\n    width: 35.5% !important;\n  }\n\n  .ui.grid > .column.row > [class*=\"six wide\"].column.add-airline, .ui.grid > .row > [class*=\"six wide\"].column.add-airline {\n    width: 50% !important;\n  }\n}\n@media (max-width: 767px) {\n  .ui.grid > .column.row > [class*=\"four wide\"].column, .ui.grid > .row > [class*=\"four wide\"].column,\n.ui.grid > .column.row > [class*=\"five wide\"].column, .ui.grid > .row > [class*=\"five wide\"].column {\n    width: 50% !important;\n  }\n\n  .ui.grid > .column.row > [class*=\"six wide\"].column.add-airline, .ui.grid > .row > [class*=\"six wide\"].column.add-airline {\n    width: 100% !important;\n  }\n\n  h3 + .ui.fluid.container {\n    padding: 20px 8px 28px !important;\n  }\n  h3 + .ui.fluid.container .outer-basic {\n    padding: 24px 12px !important;\n  }\n}\n@media (max-width: 630px) {\n  .ui.grid > .column.row > [class*=\"four wide\"].column, .ui.grid > .row > [class*=\"four wide\"].column,\n.ui.grid > .column.row > [class*=\"five wide\"].column, .ui.grid > .row > [class*=\"five wide\"].column,\n.ui.grid > .column.row > [class*=\"two wide\"].column, .ui.grid > .row > [class*=\"two wide\"].column,\n.ui.grid > .column.row > [class*=\"three wide\"].column, .ui.grid > .row > [class*=\"three wide\"].column {\n    width: 100% !important;\n  }\n\n  .ui.grid .title-traveller .ui.search.dropdown {\n    width: 50% !important;\n  }\n  .ui.grid .doc-head {\n    margin-bottom: 12px;\n  }\n\n  .ui.form .fields.doc-head {\n    margin-bottom: 12px;\n  }\n}\n@media (max-width: 380px) {\n  .ui.input .phone-code {\n    min-width: 60px !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LXRyYXZlbGxlci1wcm9maWxlL0U6XFxCZWxhbFxccHJvamVjdHNcXHByb2R1Y3Rpb24tYnVpbGRcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxjb21vbi1zdHlsZXNcXHN0ZXBwZXIuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LXRyYXZlbGxlci1wcm9maWxlL25ldy10cmF2ZWxsZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LXRyYXZlbGxlci1wcm9maWxlL0U6XFxCZWxhbFxccHJvamVjdHNcXHByb2R1Y3Rpb24tYnVpbGRcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxjb21vbi1zdHlsZXNcXGRlc2lnbi1wYWxldHRlLnNjc3MiLCJzcmMvYXBwL2xheW91dC9wcm9maWxlLW1hbmFnZW1lbnQvY3JlYXRlLW5ldy1wcm9maWxlL25ldy10cmF2ZWxsZXItcHJvZmlsZS9FOlxcQmVsYWxcXHByb2plY3RzXFxwcm9kdWN0aW9uLWJ1aWxkXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHByb2ZpbGUtbWFuYWdlbWVudFxcY3JlYXRlLW5ldy1wcm9maWxlXFxuZXctdHJhdmVsbGVyLXByb2ZpbGVcXG5ldy10cmF2ZWxsZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LXRyYXZlbGxlci1wcm9maWxlL0U6XFxCZWxhbFxccHJvamVjdHNcXHByb2R1Y3Rpb24tYnVpbGRcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxjb21vbi1zdHlsZXNcXG1peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ0NKO0FEQ0k7RUFDRSxVQUFBO0VBQ0EsMERBQUE7QUNDTjtBREVRO0VBQ0UseUJFZFE7RUZlUixTQUFBO0FDQVY7QURFVTtFQUNFLHVCQUFBO0FDQVo7QURHVTtFQUNFLHlCQUFBO0FDRFo7QURLUTtFQUNFLFNBQUE7RUFDQSx5QkU1QlE7RUY2QlIsWUFBQTtBQ0hWO0FEUVE7RUFDRSxnQ0FBQTtBQ05WO0FEV0k7RUFDRSxVQUFBO0VBQ0EsMERBQUE7QUNUTjtBRFlRO0VBQ0UseUJFaERNO0VGaUROLFNBQUE7QUNWVjtBRFlVO0VBQ0UsdUJBQUE7QUNWWjtBRGFVO0VBQ0UseUJBQUE7QUNYWjtBRGVRO0VBQ0UsU0FBQTtFQUNBLHlCRTlETTtFRitETixZQUFBO0FDYlY7QURrQlE7RUFDRSxnQ0FBQTtBQ2hCVjtBRHFCSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDbkJOO0FEcUJNO0VBQ0UsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDbkJSO0FEc0JNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNFekVNO0VGMEVOLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGNFcEdVO0VGcUdWLGtCRWhGZ0I7QUQ0RHhCO0FEc0JRO0VBQ0UsWUFBQTtBQ3BCVjtBRHlCSTtFQUNFLFdBQUE7QUN2Qk47QUR5Qk07RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQ3ZCUjtBRDZCQTtFQUNFLGFBQUE7QUMxQkY7QUQ0QkU7RUFDRSxjQUFBO0FDMUJKO0FFcEdBO0VBQ0UsYUFBQTtBRnVHRjtBRXBHQTtFQUNFLDJCQUFBO0VBQ0EsaUNEaUJZO0VDaEJaLDJCQUFBO0FGdUdGO0FFbkdBO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBRnNHRjtBRW5HQTtFQUNFLDJCQUFBO0VBQ0EsaUNERVk7RUNEWiw0QkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBRnNHRjtBRW5HQTtFQUNFLGNBQUE7RUFDQSwyQkFBQTtFQUNBLDRDQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUZzR0Y7QUVuR0E7RUFDRSw0Q0FBQTtFQUNBLHNDQUFBO0FGc0dGO0FFbkdBO0VBQ0UsMkJBQUE7RUFDQSxpQ0RwQlk7RUNxQlosMkJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUZzR0Y7QUVsR0U7RUFDRSxxQkFBQTtBRnFHSjtBRWxHRTtFQUNFLFNBQUE7QUZvR0o7QUVqR0U7RUFDRSxjQUFBO0VBQ0EseUJBQUE7QUZtR0o7QUU5RkU7RUFDRSxTQUFBO0FGaUdKO0FFL0ZFO0VBQ0UsY0FBQTtBRmlHSjtBRS9GRTtFQUNFLHFCQUFBO0FGaUdKO0FFN0ZBOztFQUdFLDRCQUFBO0FGK0ZGO0FFekZBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBRjRGRjtBRXpGQTtFQUNFLGlCQUFBO0FGNEZGO0FFekZBO0VBQ0Usa0JBQUE7QUY0RkY7QUV6RkE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FGNEZGO0FFekZBO0VBQ0Usc0JBQUE7RUFDQSw0Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUY0RkY7QUV6RkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUY0RkY7QUV2RkU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FGMEZKO0FFdkZFO0VBRUEsNEJBQUE7QUZ3RkY7QUVwRkU7RUFDRSx3QkFBQTtFQUNBLDBDQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBRnNGSjtBRW5GRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FGcUZKO0FFbkZJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUZxRk47QUVuRk07RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUZxRlI7QUUvRUE7RUFFQSx3Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtBRmlGQTtBRTlFQTtFQUNFLGFBQUE7QUZpRkY7QUVoRkU7RUFDRSxjQUFBO0FGa0ZKO0FFOUVBO0VBQ0Usc0JBQUE7RUFDQSw0Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBRmlGRjtBRTlFRTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBRmlGSjtBRS9FSTtFQUNFLDRCQUFBO0FGaUZOO0FFOUVJO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7QUZnRk47QUU3RU07RUFDRSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsU0FBQTtBRitFUjtBRTFFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBRjZFRjtBRTFFQTtFQUNFLGdCQUFBO0FGNkVGO0FFMUVBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUY2RUY7QUUxRUE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FGNkVGO0FFeEVBO0VBQ0UsV0FBQTtBRjJFRjtBRXhFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUYyRUY7QUV4RUE7RUFDRSw0Q0FBQTtBRjJFRjtBRXhFQTtFQUNFLGVBQUE7QUYyRUY7QUU1RUE7RUFDRSxlQUFBO0FGMkVGO0FFNUVBO0VBQ0UsZUFBQTtBRjJFRjtBRTVFQTtFQUNFLGVBQUE7QUYyRUY7QUV2RUE7RUFDRSxzQkFBQTtFQUNBLDRDQUFBO0FGMEVGO0FFdkVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FGMEVGO0FFdkVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRjBFRjtBRXZFQTtFQUNFLHNCQUFBO0VBQ0EsNENBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0FGMEVGO0FFdkVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FGMEVGO0FFdkVBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7QUYwRUY7QUV2RUE7RUFDRSxlQUFBO0FGMEVGO0FFdkVBO0VBQ0Usa0JBQUE7QUYwRUY7QUV2RUE7RUFDRSxhQUFBO0FGMEVGO0FFckVBO0VBRUUsa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUZ1RUY7QUVuRUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FGc0VBO0FFaEVBO0VBQ0UsOEJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0FGbUVGO0FFakVBO0VBRUEsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7QUZrRUE7QUVoRUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBS0EsWUFBQTtBRitEQTtBRTVEQTtFQUNFLGlCQUFBO0FGK0RGO0FFMURFO0VBQ0UsY0FBQTtFQUNBLHlCRHpXYztBRHNhbEI7QUUzREk7RUNwVUYsZ0RBQUE7RUFDQSx3Q0FBQTtBSGtZRjtBRTNESTtFQ3hVRixrREFBQTtFQUNBLDBDQUFBO0FIc1lGO0FFM0RJO0VDNVVGLGlEQUFBO0VBQ0EseUNBQUE7QUgwWUY7QUUzREk7RUNoVkYsaURBQUE7RUFDQSx5Q0FBQTtBSDhZRjtBRTNESTtFQ3BWRiw2REFBQTtFQUNBLHFEQUFBO0FIa1pGO0FFekRBO0VBQ0EsZ0JBQUE7QUY0REE7QUV6REE7RUFDRSxZQUFBO0FGNERGO0FFekRBO0VBQ0UsV0FBQTtBRjRERjtBRTFESTtFQUNFLGlCQUFBO0FGNEROO0FFMURJO0VBQ0UsV0FBQTtBRjRETjtBRTFESTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUY0RE47QUV6REU7RUFDSSxpQkFBQTtBRjJETjtBRXREQTtFQUNJLHVCQUFBO0FGeURKO0FFdERBO0VBRUUsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUZ3REY7QUVyREE7RUFFRSwyQkFBQTtFQUNBLDJCQUFBO0FGdURGO0FFckRBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtBRndERjtBRXJEQTtFQUNFLG9CQUFBO0FGd0RGO0FFckRBO0VBQ0Usa0NBQUE7QUZ3REY7QUVyREE7RUFFRSxzQkFBQTtBRnVERjtBRXBEQTtFQUVBLDJCQUFBO0VBQ0EscUJBQUE7QUZzREE7QUVyREE7RUFDQSxnQkFBQTtBRnVEQTtBRXJEQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUZ1REY7QUVyREE7RUFDRSxXQUFBO0FGdURGO0FFbkRBO0VBQ0UsNEJBQUE7QUZzREY7QUVuREE7RUFFRSw2QkFBQTtBRnFERjtBRW5EQTtFQUVFLHFCQUFBO0FGcURGO0FFbERBO0VBRUUscUJBQUE7QUZvREY7QUVqREE7RUFFRSw4QkFBQTtBRm1ERjtBRTlDQTtFQUNFLDJCQUFBO0FGaURGO0FFOUNBO0VBQ0UsMkJBQUE7QUZpREY7QUU3Q0E7RUFFRSxvQkFBQTtBRitDRjtBRTVDQTtFQUVFLDhCQUFBO0FGOENGO0FFNUNBO0VBRUUsNkJBQUE7QUY4Q0Y7QUUzQ0E7RUFDRSw0QkFBQTtBRjhDRjtBRTFDQTtFQUNFLDRCQUFBO0FGNkNGO0FFMUNBO0VBRUUsV0FBQTtBRjRDRjtBRXZDQTtFQUNFLDZCQUFBO0FGMENGO0FFdENFO0VBRUEsc0JBQUE7QUZ3Q0Y7QUVuQ0U7RUFFQSxzQkFBQTtFQUNBLG9DQUFBO0FGcUNGO0FFaENFO0VBRUEscUJBQUE7QUZrQ0Y7QUU1QkU7RUFFQSxzQkFBQTtBRjhCRjtBRXpCRTtFQUVFLDZCQUFBO0VBQ0EscUNBQUE7QUYyQko7QUV0QkE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUZ5QkY7QUVyQkU7RUFFRSw2QkFBQTtBRnVCSjtBRWpCRztFQUNDLHFCQUFBO0FGb0JKO0FFZkU7RUFFRSxzQkFBQTtBRmlCSjtBRWRFO0VBQ0Usc0JBQUE7QUZpQko7QUViQTtFQUVFLDJCQUFBO0FGZUY7QUViQTtFQUVFLDJCQUFBO0FGZUY7QUVaQTtFQUVFLDJCQUFBO0VBQ0EscUJBQUE7QUZjRjtBRVhBO0VBRUEsMEJBQUE7RUFDQSw2QkFBQTtFQUNJLHVCQUFBO0FGYUo7QUVWQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7QUZhRjtBRVhBO0VBRUUscUJBQUE7QUZhRjtBRVZBO0VBRUUsMkJBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FGWUY7QUVUQTtFQUNFLHFDQUFBO0VBQ0EsaUJBQUE7QUZZRjtBRVRBO0VBQ0EsMkJBQUE7QUZZQTtBRVRBO0VBRUUsMkJBQUE7QUZXRjtBRVJBO0VBRUUsMEJBQUE7RUFDQSxzQkFBQTtBRlVGO0FFUkE7RUFFRSw2QkFBQTtBRlVGO0FFUEE7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBRlVGO0FFUEE7RUFFRSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUZTRjtBRU5BO0VBRUUsMkJBQUE7QUZRRjtBRUpFO0VBQ0UsbUJBQUE7QUZPSjtBRUxFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0FGT0o7QUVIQTtFQUNFLHVDQUFBO0VBQ0EsMENBQUE7RUFDQSx5QkFBQTtBRk1GO0FFTEU7RUFDSSw2Q0FBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7QUZPTjtBRUhBO0VBQ0Usc0NBQUE7RUFDQSx5Q0FBQTtFQUNBLDRCQUFBO0FGTUY7QUVMRTtFQUNJLDZDQUFBO0VBQ0EsNEJBQUE7QUZPTjtBRUhBO0VBQ0UsWUFBQTtBRk1GO0FFSEE7RUFDRSxtQkFBQTtBRk1GO0FFSEE7RUFDRSxnQkFBQTtBRk1GO0FFSEE7RUFDRSxnQkFBQTtBRk1GO0FFRkk7RUFDSSxlQUFBO0FGS1I7QUVKUTtFQUNJLGVBQUE7QUZNWjtBRUxZO0VBQ0ksZUFBQTtBRk9oQjtBRURBO0VBQ0U7SUFDRSxxQkFBQTtFRklGOztFRUZBO0lBQ0Usd0JBQUE7RUZLRjtBQUNGO0FFRkE7RUFDRTtJQUNFLHFCQUFBO0VGSUY7QUFDRjtBRURBO0VBQ0U7SUFDRSxxQkFBQTtJQUNBLG1CQUFBO0VGR0Y7QUFDRjtBRUFBO0VBQ0U7SUFDRSx1QkFBQTtFRkVGOztFRUFBO0lBQ0Usd0JBQUE7RUZHRjtBQUNGO0FFQUE7RUFDRTtJQUNFLHVCQUFBO0VGRUY7O0VFQUE7SUFDRSx3QkFBQTtFRkdGOztFRURBO0lBQ0Usd0JBQUE7SUFDQSxtQkFBQTtFRklGO0FBQ0Y7QUVEQTtFQUNFO0lBQ0UsdUJBQUE7RUZHRjs7RUVEQTtJQUNFLHFCQUFBO0VGSUY7QUFDRjtBRURBO0VBQ0U7O0lBRUUscUJBQUE7RUZHRjs7RUVEQTtJQUNFLHNCQUFBO0VGSUY7O0VFRkE7SUFDRSxpQ0FBQTtFRktGO0VFSkU7SUFDRSw2QkFBQTtFRk1KO0FBQ0Y7QUVGQTtFQUNFOzs7O0lBSUUsc0JBQUE7RUZJRjs7RUVBSTtJQUNFLHFCQUFBO0VGR047RUVBRTtJQUNFLG1CQUFBO0VGRUo7O0VFQ0E7SUFDRSxtQkFBQTtFRkVGO0FBQ0Y7QUVDQTtFQUNFO0lBQ0UsMEJBQUE7RUZDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LXRyYXZlbGxlci1wcm9maWxlL25ldy10cmF2ZWxsZXItcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGVwcGVyLWdyaWQge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgLnN0ZXBwZXItZ3JpZF9zdGVwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgb3BhY2l0eTogLjY7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgJi5fYWN0aXZlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxuXHJcbiAgICAgIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIHtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRlZXAtYmx1ZS1jb2xvcjtcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuXHJcbiAgICAgICAgICBkaXYuaW1hZ2Uge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkZWVwLWJsdWUtY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtYm9yZGVyIHtcclxuICAgICAgICBociB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJGRlZXAtYmx1ZS1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLl9hY3RpdmF0ZWQge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG5cclxuICAgICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24ge1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuXHJcbiAgICAgICAgICBkaXYuaW1hZ2Uge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciB7XHJcbiAgICAgICAgaHIge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzLXByaW1hcnk7XHJcblxyXG4gICAgICAgICYuX2xhc3Qge1xyXG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIGhyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMjRweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc3RlcHBlci1ncmlkLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gICYuX2FjdGl2ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbn1cclxuIiwiLnN0ZXBwZXItZ3JpZCB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjI4NjI7XG4gIGJvcmRlcjogMDtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmUgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IGRpdi5pbWFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXY6aG92ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjQTZCMUMzO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBsYWJlbCB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2Mjg2MjtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtYm9yZGVyIGhyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICMwNjI4NjI7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzN0FEQTtcbiAgYm9yZGVyOiAwO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2YXRlZCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYgZGl2LmltYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdjpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBNkIxQzM7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGxhYmVsIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM3QURBO1xuICBjb2xvcjogd2hpdGU7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIgaHIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzQzN0FEQTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAjQTZCMUMzO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiA0NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGxhYmVsIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDJweCBzb2xpZCAjQTZCMUMzO1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjQTZCMUMzO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBsYWJlbC5fbGFzdCB7XG4gIHdpZHRoOiAxNTBweDtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIge1xuICB3aWR0aDogMTAwJTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIgaHIge1xuICBtYXJnaW4tdG9wOiAtMjRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0E2QjFDMztcbn1cblxuLnN0ZXBwZXItZ3JpZC1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zdGVwcGVyLWdyaWQtY29udGVudC5fYWN0aXZlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi51aS5ncmlkICsgLmdyaWQge1xuICBtYXJnaW4tdG9wOiAwO1xufVxuXG5oMyBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6IHJnYmEoNiwgNDAsIDk4LCAwLjgpO1xufVxuXG4uY2hlY2tib3hfbGFiZWwge1xuICBoZWlnaHQ6IDEzcHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM4MjgyODIgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFVidW50dSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xufVxuXG5oNCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiByZ2JhKDc5LCA3OSwgNzksIDAuOSk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgcGFkZGluZy1sZWZ0OiA5cHggIWltcG9ydGFudDtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBjb2xvcjogcmdiYSg2LCA0MCwgOTgsIDAuNik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5sYWJlbC5sYWJlbC10ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYmEoNiwgNDAsIDk4LCAwLjYpICFpbXBvcnRhbnQ7XG59XG5cbi51aS5yYWRpby5jaGVja2JveCBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiByZ2JhKDYsIDQwLCA5OCwgMC41KTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG59XG5cbi5yYWRpby1ibG9jayAudWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5ib3g6YmVmb3JlLCAucmFkaW8tYmxvY2sgLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpiZWZvcmUge1xuICBib3JkZXItY29sb3I6ICM0NTY3QUM7XG59XG4ucmFkaW8tYmxvY2sgLnVpLnJhZGlvLmNoZWNrYm94IC5ib3g6YmVmb3JlLCAucmFkaW8tYmxvY2sgLnVpLnJhZGlvLmNoZWNrYm94IGxhYmVsOmJlZm9yZSwgLnJhZGlvLWJsb2NrIC51aS5yYWRpby5jaGVja2JveCAuYm94OmFmdGVyLCAucmFkaW8tYmxvY2sgLnVpLnJhZGlvLmNoZWNrYm94IGxhYmVsOmFmdGVyLCAucmFkaW8tYmxvY2sgLnVpLmNoZWNrYm94IGlucHV0W3R5cGU9cmFkaW9dIHtcbiAgdG9wOiAtMnB4O1xufVxuLnJhZGlvLWJsb2NrIC51aS5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmJveDphZnRlciwgLnJhZGlvLWJsb2NrIC51aS5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YWZ0ZXIge1xuICBjb2xvcjogIzQ1NjdBQztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NjdBQztcbn1cblxuLmNoZWNrLWJsb2NrIC51aS5jaGVja2JveCAuYm94OmJlZm9yZSwgLmNoZWNrLWJsb2NrIC51aS5jaGVja2JveCBsYWJlbDpiZWZvcmUge1xuICB0b3A6IC0ycHg7XG59XG4uY2hlY2stYmxvY2sgLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuYm94OmFmdGVyLCAuY2hlY2stYmxvY2sgLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbDphZnRlciB7XG4gIGNvbG9yOiAjNDU2N0FDO1xufVxuLmNoZWNrLWJsb2NrIC51aS5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmJveDpiZWZvcmUsIC5jaGVjay1ibG9jayAudWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmJlZm9yZSB7XG4gIGJvcmRlci1jb2xvcjogIzQ1NjdBQztcbn1cblxuLnVpLmZvcm0gaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0IHtcbiAgcGFkZGluZzogOHB4IDE1cHggIWltcG9ydGFudDtcbn1cblxuLm10YiB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5tbCB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4ubXIge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5ib29raW5nLWhlYWRlciB7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW4tbGVmdDogMjJweDtcbn1cblxuLm91dGVyLWJhc2ljIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm94LXNoYWRvdzogM3B4IDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xufVxuXG4ub3V0ZXItYmFzaWNGb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQuYm9va2luZ3NfZGF0ZXBpY2tlciB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIG1heC13aWR0aDogMTM4cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnVpLmNvbHVtbi5ncmlkID4gaW5wdXQubW92ZS1sZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAudWkuYmFzaWMuZmxvYXRpbmcuYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogcmdiYSgxNTIsIDE1MiwgMTUyLCAwLjYpICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDExcHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLmljb24ge1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxMDA7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcbiAgd2lkdGg6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsIHtcbiAgd2lkdGg6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5iZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAycHggc29saWQgI0E2QjFDMyAhaW1wb3J0YW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zdGVwcGVyLWdyaWQtY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc3RlcHBlci1ncmlkLWNvbnRlbnQuX2FjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5mIC5vdXRlci1iYXNpYyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgcGFkZGluZy10b3A6IDE1cHggIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaC5kcm9wZG93biB7XG4gIHdpZHRoOiAyMThweDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbn1cbi5zZWFyY2guZHJvcGRvd24gLnNlYXJjaCB7XG4gIG1hcmdpbi1sZWZ0OiA0MnB4ICFpbXBvcnRhbnQ7XG59XG4uc2VhcmNoLmRyb3Bkb3duIC5kZWZhdWx0LnRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHggMCAwIDM4cHggIWltcG9ydGFudDtcbn1cbi5zZWFyY2guZHJvcGRvd24udGl0bGUtZHJvcGRvd24gLmRlZmF1bHQudGV4dCB7XG4gIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwcHggMTRweCAhaW1wb3J0YW50O1xuICB0b3A6IC0ycHg7XG59XG5cbi50cmFpbGluZ19idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubmV3QWdlbmN5X3RvcEFsaWduIHtcbiAgcGFkZGluZy10b3A6IDF2aDtcbn1cblxudGQge1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50aCB7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb25maXJtIHtcbiAgd2lkdGg6IDYzcHg7XG59XG5cbi5yZWNDb25maXJtIHtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogNjJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcyRDQ0RjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMC41dmg7XG59XG5cbi50YWIuc2VnbWVudCB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4uZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ub3V0ZXItYmFzaWNfc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm94LXNoYWRvdzogM3B4IDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5vdXRlci1iYXNpY0Zvcm1fc2Vjb25kYXJ5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogNTBweDtcbn1cblxuLnJpZ2h0X2xpbmtzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgcGFkZGluZy10b3A6IDF2aDtcbiAgcGFkZGluZy1yaWdodDogOHZoO1xufVxuXG4ub3V0ZXItYmFzaWNfdGVydGlhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG59XG5cbi5vdXRlci1iYXNpY0Zvcm1fdGVydGlhcnkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiA1MHB4O1xufVxuXG5ociB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkICNFMEUwRTA7XG59XG5cbi5kcm9wZG93biAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmJvb2tpbmdzX2J0bi1wYW5lbC50cmFpbGluZ19idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDQ1cHg7XG59XG5cbi51aS5mbHVpZC5jb250YWluZXIge1xuICBwYWRkaW5nOiAyOHB4O1xufVxuXG4udWkuc2VsZWN0aW9uLmRyb3Bkb3duIHtcbiAgbWFyZ2luLWxlZnQ6IDM0OXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDM3QURBO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA1LjEyMTU1cHg7XG59XG5cbi5nZW5kZXItbGFiZWwge1xuICBmb250LWZhbWlseTogV29yayBTYW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDEycHg7XG4gIGNvbG9yOiAjMTIyQTU4O1xufVxuXG4udWkuc2VhcmNoLmRyb3Bkb3duIHtcbiAgbWFyZ2luLXJpZ2h0OiAzOTRweCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNDM3QURBO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA1LjEyMTU1cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZHJvcGRvd24tZGF0YSB7XG4gIGZvbnQtZmFtaWx5OiBXb3JrIFNhbnM7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMC4yNDMxcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMnB4O1xuICBjb2xvcjogIzA2Mjg2Mjtcbn1cblxuLnByb2ZpbGUtbGFiZWwge1xuICBmb250LWZhbWlseTogV29yayBTYW5zO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBvcGFjaXR5OiAwLjg7XG59XG5cbi51aS5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNDJweDtcbn1cblxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IGRpdi5pbWFnZSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTZCMUMzO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IGRpdi5pbWFnZS5fdHJhdmVsIHtcbiAgLXdlYmtpdC1tYXNrOiB1cmwoXCIuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvdHJhdmVsLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICBtYXNrOiB1cmwoXCIuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvdHJhdmVsLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IGRpdi5pbWFnZS5fdXNlciB7XG4gIC13ZWJraXQtbWFzazogdXJsKFwiLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3BlcnNvbmFsLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICBtYXNrOiB1cmwoXCIuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcGVyc29uYWwuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYgZGl2LmltYWdlLl9wYXltZW50IHtcbiAgLXdlYmtpdC1tYXNrOiB1cmwoXCIuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcGF5bWVudC5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgbWFzazogdXJsKFwiLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3BheW1lbnQuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYgZGl2LmltYWdlLl9yZW1hcmtzIHtcbiAgLXdlYmtpdC1tYXNrOiB1cmwoXCIuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcmVtYXJrcy5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgbWFzazogdXJsKFwiLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3JlbWFya3Muc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYgZGl2LmltYWdlLl9haXJsaW5lIHtcbiAgLXdlYmtpdC1tYXNrOiB1cmwoXCIuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYWlybGluZS1wcmVmZXJlbmNlcy5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgbWFzazogdXJsKFwiLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL2FpcmxpbmUtcHJlZmVyZW5jZXMuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG59XG5cbi51aS5mbHVpZC5zZWxlY3Rpb24uZHJvcGRvd24ge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuXG4udWkuZmx1aWQgLm91dGVyLWJhc2ljIC5vdXRlci1iYXNpY0Zvcm0ge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi51aS5ncmlkLmluZm8tYmxvY2sge1xuICBtYXJnaW46IDBweDtcbn1cbi51aS5ncmlkLmluZm8tYmxvY2sgLnVpLnNlYXJjaC5kcm9wZG93biA+IGlucHV0LnNlYXJjaCB7XG4gIHBhZGRpbmc6IDhweCAxNHB4O1xufVxuLnVpLmdyaWQuaW5mby1ibG9jayAudWkuc2VhcmNoLmRyb3Bkb3duIC5tZW51IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4udWkuZ3JpZC5pbmZvLWJsb2NrIC51aS5zZWFyY2guZHJvcGRvd24gLmRyb3Bkb3duLmljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTRweDtcbiAgcmlnaHQ6IDE0cHg7XG59XG4udWkuZ3JpZC5pbmZvLWJsb2NrIC51aS5zZWFyY2guZHJvcGRvd24gPiBpbnB1dC5zZWFyY2gge1xuICBwYWRkaW5nOiA4cHggMTRweDtcbn1cblxuLnVpLmNvbHVtbi5ncmlkID4gaW5wdXQuYWRqdXN0IHtcbiAgd2lkdGg6IDc3LjUlICFpbXBvcnRhbnQ7XG59XG5cbi5yZXNpemUge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgbWFyZ2luLWxlZnQ6IDEuNXB4O1xufVxuXG4ucmVuZXcge1xuICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAycHggIWltcG9ydGFudDtcbn1cblxuLnJlZm9ybSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xufVxuXG4uYWRqdXN0IHtcbiAgd2lkdGg6IDAlICFpbXBvcnRhbnQ7XG59XG5cbi5zY3JvbGxpbmcge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aCAhaW1wb3J0YW50O1xufVxuXG4ud2lkdGhfYWRqdXN0IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLnVpLnNlYXJjaC5kcm9wZG93bi5mbG93LXNpemUge1xuICBtYXJnaW4tcmlnaHQ6IDAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA3MCUgIWltcG9ydGFudDtcbn1cbi51aS5zZWFyY2guZHJvcGRvd24uZmxvdy1zaXplID4gaW5wdXQuc2VhcmNoIHtcbiAgcGFkZGluZzogMnB4IDFweDtcbn1cbi51aS5zZWFyY2guZHJvcGRvd24uZmxvdy1zaXplIC5kcm9wZG93bi5pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDE0cHg7XG4gIHJpZ2h0OiAxNHB4O1xufVxuLnVpLnNlYXJjaC5kcm9wZG93bi5mbG93LXNpemUgLm1lbnUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmFzc2lnbi1sZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IDExcHggIWltcG9ydGFudDtcbn1cblxuLnB1bGwtbGVmdCB7XG4gIG1hcmdpbi1sZWZ0OiAtODBweCAhaW1wb3J0YW50O1xufVxuXG4uZGVmaW5lLXdpZHRoIHtcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xufVxuXG4uYXBwbHktd2lkdGgge1xuICB3aWR0aDogNDAlICFpbXBvcnRhbnQ7XG59XG5cbi5wdWxsLXJpZ2h0IHtcbiAgbWFyZ2luLXJpZ2h0OiAtMjBweCAhaW1wb3J0YW50O1xufVxuXG4udWkuY29sdW1uLmdyaWQgPiAucHVsbC1kb3duIHtcbiAgbWFyZ2luLXRvcDogMzNweCAhaW1wb3J0YW50O1xufVxuXG4uZm9ybS1sZWZ0IHtcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udWkuYnV0dG9uID4gLmJyaW5nLWRvd24ge1xuICBtYXJnaW4tYm90dG9tOiAtNjBweDtcbn1cblxuLnB1c2gtcmlnaHQge1xuICBtYXJnaW4tbGVmdDogMTM2MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wdXNoLWxlZnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbn1cblxuLmJyaW5nLWxlZnQge1xuICBtYXJnaW4tbGVmdDogMThweCAhaW1wb3J0YW50O1xufVxuXG4uYnJpbmctcmlnaHQge1xuICBtYXJnaW4tbGVmdDogMThweCAhaW1wb3J0YW50O1xufVxuXG4uaW5kZW50IHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5hbGlnbi5mcm9udCB7XG4gIG1hcmdpbi1yaWdodDogNTBweCAhaW1wb3J0YW50O1xufVxuXG4udWkuZm9ybSBpbnB1dC5lbGVtZW50LXdpZHRoIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLnVpLmZvcm0gaW5wdXQuZWxlbWVudC1zZXQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwLjY3ODU3MTQzZW0gMWVtICFpbXBvcnRhbnQ7XG59XG5cbi51aS5mb3JtIGlucHV0LmdyaWQtd2lkdGgge1xuICB3aWR0aDogOTIlICFpbXBvcnRhbnQ7XG59XG5cbi51aS5mb3JtIGlucHV0LnRleHQtY29sb3VyIHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLnVpLmZvcm0gaW5wdXQuc3RhcnQtZm9ybSB7XG4gIHBhZGRpbmctcmlnaHQ6IDFlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDIuNjcxNDI4NTdlbSAhaW1wb3J0YW50O1xufVxuXG4udmFsaWRhdGlvbnMge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IHgtc21hbGw7XG59XG5cbi51aS5mb3JtIGlucHV0LnBhZGRpbmdfaW4ge1xuICBwYWRkaW5nLXJpZ2h0OiAxZW0gIWltcG9ydGFudDtcbn1cblxuLnVpLnNlYXJjaC5kcm9wZG93biBpbnB1dC5kZWZhdWx0LnRleHQge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5yZWR1Y2Utc2l6ZSB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi53aWR0aF9mb3JtYXQge1xuICB3aWR0aDogMTIwJSAhaW1wb3J0YW50O1xufVxuXG4uYWxsaWduLWRvd24ge1xuICBtYXJnaW4tdG9wOiAxMXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5kb3duIHtcbiAgbWFyZ2luLXRvcDogMTFweCAhaW1wb3J0YW50O1xufVxuXG4uYnJpbmctZG93biB7XG4gIG1hcmdpbi10b3A6IDEzcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xufVxuXG4ubW92ZSB7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5rZWVwX3JpZ2h0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDBweDtcbn1cblxuLmJveC1zaXplIHtcbiAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xufVxuXG4uYWxsaWduLWxlZnQge1xuICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDE5cHggIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDEycHg7XG59XG5cbi5hbGlnbi1sZWZ0LWJsb2NrIHtcbiAgbWFyZ2luOiAwcHggMTJweCAxMnB4IDEycHggIWltcG9ydGFudDtcbiAgcGFkZGluZy10b3A6IDEycHg7XG59XG5cbi5mb3JtLWRvd24ge1xuICBtYXJnaW4tdG9wOiAxOXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5maXgtZG93biB7XG4gIG1hcmdpbi10b3A6IDMycHggIWltcG9ydGFudDtcbn1cblxuLmFzc2lnbl9yaWdodCB7XG4gIG1hcmdpbi1sZWZ0OiAxJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uYXNzaWduX2xlZnQge1xuICBtYXJnaW4tbGVmdDogLTEwcHggIWltcG9ydGFudDtcbn1cblxuLnBhZGRpbmdfbGVmdCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLnJlc2l6ZS1sZWZ0IHtcbiAgbWFyZ2luLXRvcDogOXB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxNnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wdWxsLWRvd24ge1xuICBtYXJnaW4tdG9wOiAyNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hZGRyci1ibG9jayBkaXYudWkuaW5wdXQuYWRyIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5hZGRyci1ibG9jayBkaXYudmFsaWRhdGlvbnMucGhvbmUtdmFsaWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEycHg7XG59XG5cbi51aS5pbnB1dCAucGhvbmUtY29kZSB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuICBtYXgtd2lkdGg6IDMyJSAhaW1wb3J0YW50O1xufVxuLnVpLmlucHV0IC5waG9uZS1jb2RlOmFjdGl2ZSwgLnVpLmlucHV0IC5waG9uZS1jb2RlOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDYsIDQwLCA5OCwgMC4yKSAhaW1wb3J0YW50O1xuICBib3JkZXItd2lkdGg6IDFweCAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDdlbSAhaW1wb3J0YW50O1xufVxuXG4udWkuaW5wdXQgLnBob25lLW5vIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xufVxuLnVpLmlucHV0IC5waG9uZS1ubzphY3RpdmUsIC51aS5pbnB1dCAucGhvbmUtbm86Zm9jdXMge1xuICBib3JkZXItY29sb3I6IHJnYmEoNiwgNDAsIDk4LCAwLjIpICFpbXBvcnRhbnQ7XG4gIGJvcmRlci13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wLTAge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbiNwZXJzb25hbCB7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XG59XG5cbi5haXJsaW5lLWN1c3RvbSB7XG4gIG1hcmdpbi10b3A6IDI2cHg7XG59XG5cbmg0LmhvdGVsIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cblxuLnN0ZXBwZXItZ3JpZC5zdGVwcGVyLXdyYXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuc3RlcHBlci13cmFwcGVyIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuLnN0ZXBwZXItZ3JpZC5zdGVwcGVyLXdyYXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuc3RlcHBlci13cmFwcGVyIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnN0ZXBwZXItZ3JpZC5zdGVwcGVyLXdyYXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuc3RlcHBlci13cmFwcGVyIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGxhYmVsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTY4MHB4KSB7XG4gIC51aS5ncmlkID4gLmNvbHVtbi5yb3cgPiBbY2xhc3MqPVwiZm91ciB3aWRlXCJdLmNvbHVtbiwgLnVpLmdyaWQgPiAucm93ID4gW2NsYXNzKj1cImZvdXIgd2lkZVwiXS5jb2x1bW4ge1xuICAgIHdpZHRoOiAyMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC51aS5ncmlkID4gLmNvbHVtbi5yb3cgPiBbY2xhc3MqPVwiZml2ZSB3aWRlXCJdLmNvbHVtbiwgLnVpLmdyaWQgPiAucm93ID4gW2NsYXNzKj1cImZpdmUgd2lkZVwiXS5jb2x1bW4ge1xuICAgIHdpZHRoOiAyNy4yNSUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDE1NjRweCkge1xuICAudWkuZ3JpZCA+IC5jb2x1bW4ucm93ID4gW2NsYXNzKj1cInR3byB3aWRlXCJdLmNvbHVtbiwgLnVpLmdyaWQgPiAucm93ID4gW2NsYXNzKj1cInR3byB3aWRlXCJdLmNvbHVtbiB7XG4gICAgd2lkdGg6IDE1JSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTM1NHB4KSB7XG4gIC51aS5ncmlkID4gLmNvbHVtbi5yb3cgPiBbY2xhc3MqPVwidHdvIHdpZGVcIl0uY29sdW1uLCAudWkuZ3JpZCA+IC5yb3cgPiBbY2xhc3MqPVwidHdvIHdpZGVcIl0uY29sdW1uIHtcbiAgICB3aWR0aDogMjAlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAudWkuZ3JpZCA+IC5jb2x1bW4ucm93ID4gW2NsYXNzKj1cInR3byB3aWRlXCJdLmNvbHVtbiwgLnVpLmdyaWQgPiAucm93ID4gW2NsYXNzKj1cInR3byB3aWRlXCJdLmNvbHVtbiB7XG4gICAgd2lkdGg6IDE5LjUlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudWkuZ3JpZCA+IC5jb2x1bW4ucm93ID4gW2NsYXNzKj1cImZpdmUgd2lkZVwiXS5jb2x1bW4sIC51aS5ncmlkID4gLnJvdyA+IFtjbGFzcyo9XCJmaXZlIHdpZGVcIl0uY29sdW1uIHtcbiAgICB3aWR0aDogMjcuNzUlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTIwcHgpIHtcbiAgLnVpLmdyaWQgPiAuY29sdW1uLnJvdyA+IFtjbGFzcyo9XCJ0d28gd2lkZVwiXS5jb2x1bW4sIC51aS5ncmlkID4gLnJvdyA+IFtjbGFzcyo9XCJ0d28gd2lkZVwiXS5jb2x1bW4ge1xuICAgIHdpZHRoOiAyMy41JSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnVpLmdyaWQgPiAuY29sdW1uLnJvdyA+IFtjbGFzcyo9XCJ0aHJlZSB3aWRlXCJdLmNvbHVtbiwgLnVpLmdyaWQgPiAucm93ID4gW2NsYXNzKj1cInRocmVlIHdpZGVcIl0uY29sdW1uIHtcbiAgICB3aWR0aDogMjguNzUlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudWkuZ3JpZCA+IC5jb2x1bW4ucm93ID4gW2NsYXNzKj1cImZvdXIgd2lkZVwiXS5jb2x1bW4sIC51aS5ncmlkID4gLnJvdyA+IFtjbGFzcyo9XCJmb3VyIHdpZGVcIl0uY29sdW1uIHtcbiAgICB3aWR0aDogMzMuMjUlICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDgxMHB4KSB7XG4gIC51aS5ncmlkID4gLmNvbHVtbi5yb3cgPiBbY2xhc3MqPVwidHdvIHdpZGVcIl0uY29sdW1uLCAudWkuZ3JpZCA+IC5yb3cgPiBbY2xhc3MqPVwidHdvIHdpZGVcIl0uY29sdW1uIHtcbiAgICB3aWR0aDogMzUuNSUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC51aS5ncmlkID4gLmNvbHVtbi5yb3cgPiBbY2xhc3MqPVwic2l4IHdpZGVcIl0uY29sdW1uLmFkZC1haXJsaW5lLCAudWkuZ3JpZCA+IC5yb3cgPiBbY2xhc3MqPVwic2l4IHdpZGVcIl0uY29sdW1uLmFkZC1haXJsaW5lIHtcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAudWkuZ3JpZCA+IC5jb2x1bW4ucm93ID4gW2NsYXNzKj1cImZvdXIgd2lkZVwiXS5jb2x1bW4sIC51aS5ncmlkID4gLnJvdyA+IFtjbGFzcyo9XCJmb3VyIHdpZGVcIl0uY29sdW1uLFxuLnVpLmdyaWQgPiAuY29sdW1uLnJvdyA+IFtjbGFzcyo9XCJmaXZlIHdpZGVcIl0uY29sdW1uLCAudWkuZ3JpZCA+IC5yb3cgPiBbY2xhc3MqPVwiZml2ZSB3aWRlXCJdLmNvbHVtbiB7XG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnVpLmdyaWQgPiAuY29sdW1uLnJvdyA+IFtjbGFzcyo9XCJzaXggd2lkZVwiXS5jb2x1bW4uYWRkLWFpcmxpbmUsIC51aS5ncmlkID4gLnJvdyA+IFtjbGFzcyo9XCJzaXggd2lkZVwiXS5jb2x1bW4uYWRkLWFpcmxpbmUge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICBoMyArIC51aS5mbHVpZC5jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDIwcHggOHB4IDI4cHggIWltcG9ydGFudDtcbiAgfVxuICBoMyArIC51aS5mbHVpZC5jb250YWluZXIgLm91dGVyLWJhc2ljIHtcbiAgICBwYWRkaW5nOiAyNHB4IDEycHggIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDYzMHB4KSB7XG4gIC51aS5ncmlkID4gLmNvbHVtbi5yb3cgPiBbY2xhc3MqPVwiZm91ciB3aWRlXCJdLmNvbHVtbiwgLnVpLmdyaWQgPiAucm93ID4gW2NsYXNzKj1cImZvdXIgd2lkZVwiXS5jb2x1bW4sXG4udWkuZ3JpZCA+IC5jb2x1bW4ucm93ID4gW2NsYXNzKj1cImZpdmUgd2lkZVwiXS5jb2x1bW4sIC51aS5ncmlkID4gLnJvdyA+IFtjbGFzcyo9XCJmaXZlIHdpZGVcIl0uY29sdW1uLFxuLnVpLmdyaWQgPiAuY29sdW1uLnJvdyA+IFtjbGFzcyo9XCJ0d28gd2lkZVwiXS5jb2x1bW4sIC51aS5ncmlkID4gLnJvdyA+IFtjbGFzcyo9XCJ0d28gd2lkZVwiXS5jb2x1bW4sXG4udWkuZ3JpZCA+IC5jb2x1bW4ucm93ID4gW2NsYXNzKj1cInRocmVlIHdpZGVcIl0uY29sdW1uLCAudWkuZ3JpZCA+IC5yb3cgPiBbY2xhc3MqPVwidGhyZWUgd2lkZVwiXS5jb2x1bW4ge1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudWkuZ3JpZCAudGl0bGUtdHJhdmVsbGVyIC51aS5zZWFyY2guZHJvcGRvd24ge1xuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgfVxuICAudWkuZ3JpZCAuZG9jLWhlYWQge1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gIH1cblxuICAudWkuZm9ybSAuZmllbGRzLmRvYy1oZWFkIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzgwcHgpIHtcbiAgLnVpLmlucHV0IC5waG9uZS1jb2RlIHtcbiAgICBtaW4td2lkdGg6IDYwcHggIWltcG9ydGFudDtcbiAgfVxufSIsIiRwcmltYXJ5LWNvbG9yOiAjNDM3QURBO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjQTZCMUMzO1xyXG4kZGVlcC1ibHVlLWNvbG9yOiAjMDYyODYyO1xyXG4kbGlnaHQtc21va2UtY29sb3I6ICNlNWU1ZTU7XHJcbiR2b2lsYS1ncmVlbjogIzg0QkM2QTtcclxuJHB1cmUtd2hpdGU6IHdoaXRlO1xyXG4kZmF1bHQtY29sb3I6ICNERTc5Nzk7XHJcbiR3YXJuaW5nLWNvbG9yOiAjRUNDMDRFO1xyXG4kc3VjY2Vzcy1jb2xvcjogIzczQjI1RDtcclxuXHJcbiRib2R5LWJhc2U6ICNmZmY7XHJcbiRjb3Jwb3JhdGUtYmx1ZS1iYXNlOiAjNDU2N0FDO1xyXG5cclxuJGNvbnRhaW5lci1iYXNlOiB3aGl0ZTtcclxuJGNvbnRhaW5lci1iYXNlLXNoYWRvdzogMCAwcHggM3B4IHJnYmEoNjAsIDY0LCA2NywgMC4zKSwgMCA0cHggOHB4IDJweCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpO1xyXG4kY29udGFpbmVyLWRyb3Bkb3ducy1zaGFkb3c6IDBweCA4cHggMTRweCByZ2JhKDAsIDU4LCAxNjQsIC4yKTtcclxuXHJcbiRwcmltYXJ5LXNoYWRvdzogMHB4IDQuODNweCAxNnB4IHJnYmEoNjcsIDEyMiwgMjE4LCAuNSk7XHJcbiRsaWdodC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgNTgsIDE2NCwgLjI1KTtcclxuJGZhZGVkLXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgxNjcsIDE3MywgMTgyLCAuMik7XHJcbiRsaWdodC1leHRlbmRlZC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgNTgsIDE2NCwgLjI1KTtcclxuXHJcbiRib3JkZXItcmFkaXVzLXByaW1hcnk6IDhweDtcclxuJGJvcmRlci1yYWRpdXMtc2Vjb25kYXJ5OiA2cHg7XHJcblxyXG4kZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XHJcblxyXG4kdG9hc3QtaW5mby1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiR0b2FzdC1pbmZvLXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDExMSwgMCwgMCwgLjIpO1xyXG5cclxuJHRvYXN0LWVycm9yLWNvbG9yOiAkZmF1bHQtY29sb3I7XHJcbiR0b2FzdC1lcnJvci1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxMTEsIDAsIDAsIC4yKTtcclxuXHJcbiR0b2FzdC13YXJuaW5nLWNvbG9yOiAkd2FybmluZy1jb2xvcjtcclxuJHRvYXN0LXdhcm5pbmctc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTc3LCAxMjcsIDAsIC4yKTtcclxuXHJcbiR0b2FzdC1zdWNjZXNzLWNvbG9yOiAkc3VjY2Vzcy1jb2xvcjtcclxuJHRvYXN0LXN1Y2Nlc3Mtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMzQsIDEzMCwgMCwgLjIpO1xyXG4iLCJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi8uLi9jb21vbi1zdHlsZXMvY29tbW9uLnNjc3NcIjtcclxuXHJcbi51aS5ncmlkKy5ncmlkIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG59XHJcblxyXG5oMyBzcGFuIHtcclxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcclxuICBjb2xvcjogcmdiYSgkZGVlcC1ibHVlLWNvbG9yLCAuOCk7XHJcbn1cclxuXHJcblxyXG4uY2hlY2tib3hfbGFiZWwge1xyXG4gIGhlaWdodDogMTNweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjODI4MjgyICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IFVidW50dSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuaDQge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xyXG4gIGNvbG9yOiByZ2JhKDc5LCA3OSwgNzksIDAuOSk7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmctbGVmdDogOXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiByZ2JhKCRkZWVwLWJsdWUtY29sb3IsIC42KTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG5sYWJlbC5sYWJlbC10ZXh0IHtcclxuICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHJnYmEoJGRlZXAtYmx1ZS1jb2xvciwgLjYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51aS5yYWRpby5jaGVja2JveCBsYWJlbCB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XHJcbiAgY29sb3I6IHJnYmEoJGRlZXAtYmx1ZS1jb2xvciwgLjUpO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5yYWRpby1ibG9jayB7XHJcbiAgLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWR+LmJveDpiZWZvcmUsIC51aS5jaGVja2JveCBpbnB1dDpjaGVja2VkfmxhYmVsOmJlZm9yZSB7XHJcbiAgICBib3JkZXItY29sb3I6ICM0NTY3QUM7XHJcbiAgfVxyXG5cclxuICAudWkucmFkaW8uY2hlY2tib3ggLmJveDpiZWZvcmUsIC51aS5yYWRpby5jaGVja2JveCBsYWJlbDpiZWZvcmUsIC51aS5yYWRpby5jaGVja2JveCAuYm94OmFmdGVyLCAudWkucmFkaW8uY2hlY2tib3ggbGFiZWw6YWZ0ZXIsIC51aS5jaGVja2JveCBpbnB1dFt0eXBlPXJhZGlvXSB7XHJcbiAgICB0b3A6IC0ycHg7XHJcbiAgfVxyXG5cclxuICAudWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZH4uYm94OmFmdGVyLCAudWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZH5sYWJlbDphZnRlciB7XHJcbiAgICBjb2xvcjogIzQ1NjdBQztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTY3QUM7XHJcbiAgfVxyXG59XHJcblxyXG4uY2hlY2stYmxvY2sge1xyXG4gIC51aS5jaGVja2JveCAuYm94OmJlZm9yZSwgLnVpLmNoZWNrYm94IGxhYmVsOmJlZm9yZSB7XHJcbiAgICB0b3A6IC0ycHg7XHJcbiAgfVxyXG4gIC51aS5jaGVja2JveCBpbnB1dDpjaGVja2Vkfi5ib3g6YWZ0ZXIsIC51aS5jaGVja2JveCBpbnB1dDpjaGVja2VkfmxhYmVsOmFmdGVyIHtcclxuICAgIGNvbG9yOiAjNDU2N0FDO1xyXG4gIH1cclxuICAudWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZH4uYm94OmJlZm9yZSwgLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWR+bGFiZWw6YmVmb3JlIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzQ1NjdBQztcclxuICB9XHJcbn1cclxuXHJcbi51aS5mb3JtIGlucHV0W3R5cGU9dGV4dF0sXHJcbmlucHV0IHtcclxuIFxyXG4gIHBhZGRpbmc6IDhweCAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgLy8gd2lkdGg6IDcyJSAhaW1wb3J0YW50O1xyXG5cclxuICBcclxufVxyXG5cclxuLm10YiB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4ubWwge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4ubXIge1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLmJvb2tpbmctaGVhZGVyIHtcclxuICBjb2xvcjogIzRGNEY0RjtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMnB4O1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgYm94LXNoYWRvdzogM3B4IDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljRm9ybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IHtcclxuXHJcbiAgJi5ib29raW5nc19kYXRlcGlja2VyIHtcclxuICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEzOHB4XHJcbiAgfVxyXG5cclxuICAudWkuY29sdW1uLmdyaWQ+aW5wdXQubW92ZS1sZWZ0XHJcbntcclxuICBtYXJnaW4tbGVmdDoyMHB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4gIC51aS5iYXNpYy5mbG9hdGluZy5idXR0b24ge1xyXG4gICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHJnYmEoMTUyLCAxNTIsIDE1MiwgMC42KSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgfVxyXG5cclxuICAuaWNvbiB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG5cclxuICAgIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XHJcbiAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcblxyXG4gICAgICAmLmNhbCB7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmJncm91bmR7XHJcblxyXG5iYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbmJvcmRlcjogMnB4IHNvbGlkICNBNkIxQzMgIWltcG9ydGFudDtcclxuY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuXHJcbi5zdGVwcGVyLWdyaWQtY29udGVudCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICAmLl9hY3RpdmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcblxyXG5mIC5vdXRlci1iYXNpYyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiAgLnNlYXJjaC5kcm9wZG93biB7XHJcbiAgICB3aWR0aDogMjE4cHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDA7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgLnNlYXJjaCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA0MnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmRlZmF1bHQudGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAwIDAgMzhweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgJi50aXRsZS1kcm9wZG93biB7XHJcbiAgICAgIC5kZWZhdWx0LnRleHQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgdG9wOiAtMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLnRyYWlsaW5nX2J1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4ubmV3QWdlbmN5X3RvcEFsaWduIHtcclxuICBwYWRkaW5nLXRvcDogMXZoO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgY29sb3I6ICM0RjRGNEY7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50aCB7XHJcbiAgY29sb3I6ICM0RjRGNEY7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMTFweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5cclxuLmNvbmZpcm0ge1xyXG4gIHdpZHRoOiA2M3B4O1xyXG59XHJcblxyXG4ucmVjQ29uZmlybSB7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIHdpZHRoOiA2MnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MkQ0NEY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctdG9wOiAuNXZoO1xyXG59XHJcblxyXG4udGFiLnNlZ21lbnQge1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4uZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcblxyXG4ub3V0ZXItYmFzaWNfc2Vjb25kYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWNGb3JtX3NlY29uZGFyeSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbn1cclxuXHJcbi5yaWdodF9saW5rcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHBhZGRpbmctdG9wOiAxdmg7XHJcbiAgcGFkZGluZy1yaWdodDogOHZoO1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWNfdGVydGlhcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgYm94LXNoYWRvdzogM3B4IDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljRm9ybV90ZXJ0aWFyeSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbn1cclxuXHJcbmhyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJvcmRlcjogMC41cHggc29saWQgI0UwRTBFMDtcclxufVxyXG5cclxuLmRyb3Bkb3duIC50ZXh0IHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5ib29raW5nc19idG4tcGFuZWwudHJhaWxpbmdfYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcbi51aS5mbHVpZC5jb250YWluZXIge1xyXG4gIHBhZGRpbmc6IDI4cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLnVpLnNlbGVjdGlvbi5kcm9wZG93bntcclxuXHJcbiAgbWFyZ2luLWxlZnQ6IDM0OXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0MzdBREE7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA1LjEyMTU1cHg7XHJcbn1cclxuXHJcblxyXG4uZ2VuZGVyLWxhYmVse1xyXG5mb250LWZhbWlseTogV29yayBTYW5zO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtd2VpZ2h0OiA1MDA7XHJcbmZvbnQtc2l6ZTogMTBweDtcclxubGluZS1oZWlnaHQ6IDEycHg7XHJcbmNvbG9yOiAjMTIyQTU4O1xyXG5cclxufVxyXG5cclxuXHJcblxyXG4udWkuc2VhcmNoLmRyb3Bkb3due1xyXG4gIG1hcmdpbi1yaWdodDogMzk0cHggIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjNDM3QURBO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNS4xMjE1NXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5kcm9wZG93bi1kYXRhe1xyXG5cclxuZm9udC1mYW1pbHk6IFdvcmsgU2FucztcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogNjAwO1xyXG5mb250LXNpemU6IDEwLjI0MzFweDtcclxubGluZS1oZWlnaHQ6IDEycHg7XHJcblxyXG5jb2xvcjogIzA2Mjg2MjtcclxufVxyXG4ucHJvZmlsZS1sYWJlbHtcclxuZm9udC1mYW1pbHk6IFdvcmsgU2FucztcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogNjAwO1xyXG5mb250LXNpemU6IDlweDtcclxuXHJcblxyXG5cclxuXHJcbm9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLnVpLmJ1dHRvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDQycHg7XHJcbn1cclxuXHJcblxyXG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYge1xyXG4gIGRpdi5pbWFnZSB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcblxyXG4gICAgJi5fdHJhdmVsIHtcclxuICAgICAgQGluY2x1ZGUgbWFzay1zdmctZGl2KCcuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvdHJhdmVsLnN2ZycpO1xyXG4gICAgfVxyXG5cclxuICAgICYuX3VzZXIge1xyXG4gICAgICBAaW5jbHVkZSBtYXNrLXN2Zy1kaXYoJy4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9wZXJzb25hbC5zdmcnKTtcclxuICAgIH1cclxuXHJcbiAgICAmLl9wYXltZW50IHtcclxuICAgICAgQGluY2x1ZGUgbWFzay1zdmctZGl2KCcuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcGF5bWVudC5zdmcnKTtcclxuICAgIH1cclxuXHJcbiAgICAmLl9yZW1hcmtzIHtcclxuICAgICAgQGluY2x1ZGUgbWFzay1zdmctZGl2KCcuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcmVtYXJrcy5zdmcnKTtcclxuICAgIH1cclxuXHJcbiAgICAmLl9haXJsaW5lIHtcclxuICAgICAgQGluY2x1ZGUgbWFzay1zdmctZGl2KCcuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvYWlybGluZS1wcmVmZXJlbmNlcy5zdmcnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi51aS5mbHVpZC5zZWxlY3Rpb24uZHJvcGRvd257XHJcbm1hcmdpbi1sZWZ0OjBweFxyXG5cclxufVxyXG4udWkuZmx1aWQgLm91dGVyLWJhc2ljIC5vdXRlci1iYXNpY0Zvcm0ge1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLnVpLmdyaWQuaW5mby1ibG9jayB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgLnVpLnNlYXJjaC5kcm9wZG93biB7XHJcbiAgICAmID4gaW5wdXQuc2VhcmNoIHtcclxuICAgICAgcGFkZGluZzogOHB4IDE0cHg7XHJcbiAgICB9XHJcbiAgICAubWVudSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmRyb3Bkb3duLmljb24ge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHRvcDogMTRweDtcclxuICAgICAgcmlnaHQ6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC51aS5zZWFyY2guZHJvcGRvd24gPiBpbnB1dC5zZWFyY2gge1xyXG4gICAgICBwYWRkaW5nOiA4cHggMTRweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4udWkuY29sdW1uLmdyaWQgPiBpbnB1dC5hZGp1c3R7ICBcclxuICAgIHdpZHRoOjc3LjUlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZXNpemV7XHJcblxyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEuNXB4O1xyXG59XHJcblxyXG4ucmVuZXd7XHJcblxyXG4gIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJlZm9ybXtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWRqdXN0e1xyXG4gIHdpZHRoOjAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zY3JvbGxpbmd7XHJcbiAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGggIWltcG9ydGFudDtcclxufVxyXG5cclxuLndpZHRoX2FkanVzdHtcclxuXHJcbiAgd2lkdGg6MTAwJSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51aS5zZWFyY2guZHJvcGRvd24uZmxvdy1zaXplIHtcclxuXHJcbm1hcmdpbi1yaWdodDogMCUgIWltcG9ydGFudDtcclxud2lkdGg6IDcwJSAhaW1wb3J0YW50O1xyXG4mPmlucHV0LnNlYXJjaCB7XHJcbnBhZGRpbmc6IDJweCAxcHg7XHJcbn1cclxuLmRyb3Bkb3duLmljb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDE0cHg7XHJcbiAgcmlnaHQ6IDE0cHg7XHJcbn1cclxuLm1lbnUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbn1cclxuXHJcbi5hc3NpZ24tbGVmdHtcclxuICBtYXJnaW4tbGVmdDoxMXB4ICAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4ucHVsbC1sZWZ0IHtcclxuXHJcbiAgbWFyZ2luLWxlZnQ6LTgwcHggIWltcG9ydGFudDtcclxufVxyXG4uZGVmaW5lLXdpZHRoe1xyXG5cclxuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hcHBseS13aWR0aHtcclxuXHJcbiAgd2lkdGg6IDQwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucHVsbC1yaWdodHtcclxuXHJcbiAgbWFyZ2luLXJpZ2h0Oi0yMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLnVpLmNvbHVtbi5ncmlkPi5wdWxsLWRvd257XHJcbiAgbWFyZ2luLXRvcDogMzNweCAhaW1wb3J0YW50XHJcbn1cclxuXHJcbi5mb3JtLWxlZnR7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50XHJcbn1cclxuXHJcblxyXG4udWkuYnV0dG9uPi5icmluZy1kb3due1xyXG5cclxuICBtYXJnaW4tYm90dG9tOi02MHB4IDtcclxufVxyXG5cclxuLnB1c2gtcmlnaHR7XHJcblxyXG4gIG1hcmdpbi1sZWZ0OiAxMzYwcHggIWltcG9ydGFudDtcclxufVxyXG4ucHVzaC1sZWZ0e1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJyaW5nLWxlZnR7XHJcbiAgbWFyZ2luLWxlZnQ6MThweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLmJyaW5nLXJpZ2h0e1xyXG4gIG1hcmdpbi1sZWZ0OjE4cHggIWltcG9ydGFudDtcclxuIFxyXG59XHJcbi5pbmRlbnR7XHJcblxyXG4gIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5hbGlnbi5mcm9udHtcclxuICBtYXJnaW4tcmlnaHQ6NTBweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4udWkuZm9ybSB7XHJcbiAgaW5wdXQuZWxlbWVudC13aWR0aHtcclxuXHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi51aS5mb3JtIHtcclxuICBpbnB1dC5lbGVtZW50LXNldHtcclxuXHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAuNjc4NTcxNDNlbSAxZW0gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi51aS5mb3JtIHtcclxuICBpbnB1dC5ncmlkLXdpZHRoe1xyXG5cclxuICB3aWR0aDogOTIlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnVpLmZvcm0ge1xyXG4gIGlucHV0LnRleHQtY29sb3Vye1xyXG5cclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnVpLmZvcm0ge1xyXG4gIGlucHV0LnN0YXJ0LWZvcm17XHJcblxyXG4gICAgcGFkZGluZy1yaWdodDogMWVtICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNjcxNDI4NTdlbSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnZhbGlkYXRpb25zIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxufVxyXG5cclxuLnVpLmZvcm0ge1xyXG4gIGlucHV0LnBhZGRpbmdfaW57XHJcblxyXG4gICAgcGFkZGluZy1yaWdodDogMWVtICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICB9XHJcbn1cclxuXHJcbi51aS5zZWFyY2guZHJvcGRvd24ge1xyXG4gICBpbnB1dC5kZWZhdWx0LnRleHQge1xyXG4gICAgcGFkZGluZzowICFpbXBvcnRhbnQgO1xyXG4gICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLnJlZHVjZS1zaXple1xyXG5cclxuICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudCA7XHJcbiAgfVxyXG5cclxuICAud2lkdGhfZm9ybWF0e1xyXG4gICAgd2lkdGg6MTIwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcblxyXG4uYWxsaWduLWRvd257XHJcblxyXG4gIG1hcmdpbi10b3A6IDExcHggIWltcG9ydGFudDtcclxufVxyXG4uZG93biB7XHJcbiAgXHJcbiAgbWFyZ2luLXRvcDogMTFweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnJpbmctZG93bntcclxuXHJcbiAgbWFyZ2luLXRvcDogMTNweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOjgwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW92ZXtcclxuXHJcbm1hcmdpbi10b3A6MHB4ICFpbXBvcnRhbnQ7XHJcbm1hcmdpbi1yaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5rZWVwX3JpZ2h0e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDEwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG59XHJcbi5ib3gtc2l6ZXtcclxuXHJcbiAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWxsaWduLWxlZnR7XHJcblxyXG4gIG1hcmdpbi1sZWZ0OjBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDE5cHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxufVxyXG5cclxuLmFsaWduLWxlZnQtYmxvY2sge1xyXG4gIG1hcmdpbjogMHB4IDEycHggMTJweCAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbn1cclxuXHJcbi5mb3JtLWRvd257XHJcbm1hcmdpbi10b3A6IDE5cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpeC1kb3due1xyXG5cclxuICBtYXJnaW4tdG9wOjMycHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFzc2lnbl9yaWdodHtcclxuXHJcbiAgbWFyZ2luLWxlZnQ6MSUgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbi5hc3NpZ25fbGVmdHtcclxuXHJcbiAgbWFyZ2luLWxlZnQ6LTEwcHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGFkZGluZ19sZWZ0e1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yZXNpemUtbGVmdHtcclxuXHJcbiAgbWFyZ2luLXRvcDogOXB4ICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6MjBweCAgIWltcG9ydGFudDtcclxuICB3aWR0aDoxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wdWxsLWRvd257XHJcblxyXG4gIG1hcmdpbi10b3A6MjVweCAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFkZHJyLWJsb2NrIHtcclxuICBkaXYudWkuaW5wdXQuYWRyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgfVxyXG4gIGRpdi52YWxpZGF0aW9ucy5waG9uZS12YWxpZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0xMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLnVpLmlucHV0IC5waG9uZS1jb2RlIHtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweCAhaW1wb3J0YW50O1xyXG4gIG1heC13aWR0aDogMzIlICFpbXBvcnRhbnQ7XHJcbiAgJjphY3RpdmUsICY6Zm9jdXMge1xyXG4gICAgICBib3JkZXItY29sb3I6IHJnYmEoNiwgNDAsIDk4LCAwLjIpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci13aWR0aDogMXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIG1pbi13aWR0aDogN2VtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4udWkuaW5wdXQgLnBob25lLW5vIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHggIWltcG9ydGFudDtcclxuICBib3JkZXItbGVmdDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICY6YWN0aXZlLCAmOmZvY3VzIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDYsIDQwLCA5OCwgMC4yKSAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXItd2lkdGg6IDFweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLnAtMCB7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4jcGVyc29uYWwge1xyXG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbn1cclxuXHJcbi5haXJsaW5lLWN1c3RvbSB7XHJcbiAgbWFyZ2luLXRvcDogMjZweDtcclxufVxyXG5cclxuaDQuaG90ZWwge1xyXG4gIG1hcmdpbi10b3A6IDI0cHg7XHJcbn1cclxuXHJcbi5zdGVwcGVyLWdyaWQuc3RlcHBlci13cmFwcGVyLWdyaWQge1xyXG4gICAgLnN0ZXBwZXItZ3JpZF9zdGVwLnN0ZXBwZXItd3JhcHBlciB7XHJcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgICAgIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxNjgwcHgpIHtcclxuICAudWkuZ3JpZD4uY29sdW1uLnJvdz5bY2xhc3MqPVwiZm91ciB3aWRlXCJdLmNvbHVtbiwgLnVpLmdyaWQ+LnJvdz5bY2xhc3MqPVwiZm91ciB3aWRlXCJdLmNvbHVtbiB7XHJcbiAgICB3aWR0aDogMjAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC51aS5ncmlkPi5jb2x1bW4ucm93PltjbGFzcyo9XCJmaXZlIHdpZGVcIl0uY29sdW1uLCAudWkuZ3JpZD4ucm93PltjbGFzcyo9XCJmaXZlIHdpZGVcIl0uY29sdW1uIHtcclxuICAgIHdpZHRoOiAyNy4yNSUhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE1NjRweCkge1xyXG4gIC51aS5ncmlkPi5jb2x1bW4ucm93PltjbGFzcyo9XCJ0d28gd2lkZVwiXS5jb2x1bW4sIC51aS5ncmlkPi5yb3c+W2NsYXNzKj1cInR3byB3aWRlXCJdLmNvbHVtbiB7XHJcbiAgICB3aWR0aDogMTUlIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMzU0cHgpIHtcclxuICAudWkuZ3JpZD4uY29sdW1uLnJvdz5bY2xhc3MqPVwidHdvIHdpZGVcIl0uY29sdW1uLCAudWkuZ3JpZD4ucm93PltjbGFzcyo9XCJ0d28gd2lkZVwiXS5jb2x1bW4ge1xyXG4gICAgd2lkdGg6IDIwJSFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gIC51aS5ncmlkPi5jb2x1bW4ucm93PltjbGFzcyo9XCJ0d28gd2lkZVwiXS5jb2x1bW4sIC51aS5ncmlkPi5yb3c+W2NsYXNzKj1cInR3byB3aWRlXCJdLmNvbHVtbiB7XHJcbiAgICB3aWR0aDogMTkuNSUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnVpLmdyaWQ+LmNvbHVtbi5yb3c+W2NsYXNzKj1cImZpdmUgd2lkZVwiXS5jb2x1bW4sIC51aS5ncmlkPi5yb3c+W2NsYXNzKj1cImZpdmUgd2lkZVwiXS5jb2x1bW4ge1xyXG4gICAgd2lkdGg6IDI3Ljc1JSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTEyMHB4KSB7XHJcbiAgLnVpLmdyaWQ+LmNvbHVtbi5yb3c+W2NsYXNzKj1cInR3byB3aWRlXCJdLmNvbHVtbiwgLnVpLmdyaWQ+LnJvdz5bY2xhc3MqPVwidHdvIHdpZGVcIl0uY29sdW1uIHtcclxuICAgIHdpZHRoOiAyMy41JSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAudWkuZ3JpZD4uY29sdW1uLnJvdz5bY2xhc3MqPVwidGhyZWUgd2lkZVwiXS5jb2x1bW4sIC51aS5ncmlkPi5yb3c+W2NsYXNzKj1cInRocmVlIHdpZGVcIl0uY29sdW1uIHtcclxuICAgIHdpZHRoOiAyOC43NSUhaW1wb3J0YW50O1xyXG4gIH1cclxuICAudWkuZ3JpZD4uY29sdW1uLnJvdz5bY2xhc3MqPVwiZm91ciB3aWRlXCJdLmNvbHVtbiwgLnVpLmdyaWQ+LnJvdz5bY2xhc3MqPVwiZm91ciB3aWRlXCJdLmNvbHVtbiB7XHJcbiAgICB3aWR0aDogMzMuMjUlIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODEwcHgpIHtcclxuICAudWkuZ3JpZD4uY29sdW1uLnJvdz5bY2xhc3MqPVwidHdvIHdpZGVcIl0uY29sdW1uLCAudWkuZ3JpZD4ucm93PltjbGFzcyo9XCJ0d28gd2lkZVwiXS5jb2x1bW4ge1xyXG4gICAgd2lkdGg6IDM1LjUlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC51aS5ncmlkPi5jb2x1bW4ucm93PltjbGFzcyo9XCJzaXggd2lkZVwiXS5jb2x1bW4uYWRkLWFpcmxpbmUsIC51aS5ncmlkPi5yb3c+W2NsYXNzKj1cInNpeCB3aWRlXCJdLmNvbHVtbi5hZGQtYWlybGluZSB7XHJcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAudWkuZ3JpZD4uY29sdW1uLnJvdz5bY2xhc3MqPVwiZm91ciB3aWRlXCJdLmNvbHVtbiwgLnVpLmdyaWQ+LnJvdz5bY2xhc3MqPVwiZm91ciB3aWRlXCJdLmNvbHVtbixcclxuICAudWkuZ3JpZD4uY29sdW1uLnJvdz5bY2xhc3MqPVwiZml2ZSB3aWRlXCJdLmNvbHVtbiwgLnVpLmdyaWQ+LnJvdz5bY2xhc3MqPVwiZml2ZSB3aWRlXCJdLmNvbHVtbiB7XHJcbiAgICB3aWR0aDogNTAlIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnVpLmdyaWQ+LmNvbHVtbi5yb3c+W2NsYXNzKj1cInNpeCB3aWRlXCJdLmNvbHVtbi5hZGQtYWlybGluZSwgLnVpLmdyaWQ+LnJvdz5bY2xhc3MqPVwic2l4IHdpZGVcIl0uY29sdW1uLmFkZC1haXJsaW5lIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIGgzICsgLnVpLmZsdWlkLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDhweCAyOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAub3V0ZXItYmFzaWMge1xyXG4gICAgICBwYWRkaW5nOiAyNHB4IDEycHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA2MzBweCkge1xyXG4gIC51aS5ncmlkPi5jb2x1bW4ucm93PltjbGFzcyo9XCJmb3VyIHdpZGVcIl0uY29sdW1uLCAudWkuZ3JpZD4ucm93PltjbGFzcyo9XCJmb3VyIHdpZGVcIl0uY29sdW1uLFxyXG4gIC51aS5ncmlkPi5jb2x1bW4ucm93PltjbGFzcyo9XCJmaXZlIHdpZGVcIl0uY29sdW1uLCAudWkuZ3JpZD4ucm93PltjbGFzcyo9XCJmaXZlIHdpZGVcIl0uY29sdW1uLFxyXG4gIC51aS5ncmlkPi5jb2x1bW4ucm93PltjbGFzcyo9XCJ0d28gd2lkZVwiXS5jb2x1bW4sIC51aS5ncmlkPi5yb3c+W2NsYXNzKj1cInR3byB3aWRlXCJdLmNvbHVtbixcclxuICAudWkuZ3JpZD4uY29sdW1uLnJvdz5bY2xhc3MqPVwidGhyZWUgd2lkZVwiXS5jb2x1bW4sIC51aS5ncmlkPi5yb3c+W2NsYXNzKj1cInRocmVlIHdpZGVcIl0uY29sdW1uIHtcclxuICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnVpLmdyaWQge1xyXG4gICAgLnRpdGxlLXRyYXZlbGxlciB7XHJcbiAgICAgIC51aS5zZWFyY2guZHJvcGRvd24ge1xyXG4gICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmRvYy1oZWFkIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnVpLmZvcm0gLmZpZWxkcy5kb2MtaGVhZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM4MHB4KSB7XHJcbiAgLnVpLmlucHV0IC5waG9uZS1jb2RlIHtcclxuICAgIG1pbi13aWR0aDogNjBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufSIsIkBtaXhpbiBwbGFjZWhvbGRlciB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcblxyXG4gICY6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcblxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjb2xvci1vcGFjaXR5KCRjb2xvciwgJG9wYWNpdHk6IDAuMykge1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvcjtcclxuICAvKiBUaGUgRmFsbGJhY2sgKi9cclxuICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvciwgJG9wYWNpdHkpO1xyXG59XHJcblxyXG5AbWl4aW4gaGlkZU51bWJlckZpZWxkQXJyb3dzIHtcclxuXHJcbiAgLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXHJcbiAgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbiAgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAvKiBGaXJlZm94ICovXHJcbiAgaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWFzay1zdmctZGl2KCRpbWcpIHtcclxuICAtd2Via2l0LW1hc2s6IHVybCgkaW1nKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gIG1hc2s6IHVybCgkaW1nKSBuby1yZXBlYXQgY2VudGVyO1xyXG59XHJcbiJdfQ== */";
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
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/services/common.service */
    "./src/app/shared/services/common.service.ts");
    /* harmony import */


    var src_app_layout_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/layout/_modal */
    "./src/app/layout/_modal/index.ts");

    var NewTravellerProfileComponent = /*#__PURE__*/function () {
      function NewTravellerProfileComponent(router, CommonService, route, ProfileManagementService, toastr, fb, el, modalService, activeRoute) {
        _classCallCheck(this, NewTravellerProfileComponent);

        // let uniqueProfileID = Math.random().toString(36).substring(7);
        // this.newTravellerProfileId = uniqueProfileID;
        this.router = router;
        this.CommonService = CommonService;
        this.route = route;
        this.ProfileManagementService = ProfileManagementService;
        this.toastr = toastr;
        this.fb = fb;
        this.el = el;
        this.modalService = modalService;
        this.activeRoute = activeRoute;
        this.newTravellerProfileObj = {};
        this.countries = [];
        this.cities = [];
        this.airlinesArr = [];
        this.sendDataToParent = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.showAddAirlines = false;
        this.showAddHotels = false;
        this.showCompanyid = false;
        this.showDeleteIcon = false;
        this.showProfileId = false;
        this.completeURL = window.location.origin;
        this.isSubmitted = false;
        this.newTravellerProfileForm = this.fb.group({
          id: [''],
          salutation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          middle_name: [''],
          last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          a_dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          status: [''],
          gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          marital_status: [''],
          nationality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          passengerType: [''],
          address: [''],
          list_country: [''],
          postal_code: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*')],
          state: [''],
          city_id: [''],
          street: [''],
          mobile_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*')],
          emergency_contact: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[0-9]*')],
          email_address1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          email_address2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          relationship: [''],
          associate_profile: [''],
          document1: [''],
          image1: [''],
          document2: [''],
          image2: [''],
          document3: [''],
          image3: [''],
          national_id: [''],
          passport: [''],
          driving_licence: [''],
          national_id_issueDate: [''],
          national_id_expiryDate: [''],
          passport_issueDate: [''],
          passport_expiryDate: [''],
          driving_licence_issueDate: [''],
          driving_licence_expiryDate: [''],
          national_id_placeofissue: [''],
          passport_placeofissue: [''],
          driving_licence_placeofissue: [''],
          passenger_type: [''],
          company_name: [''],
          designation: [''],
          traveller_type: [''],
          company_emailid: [''],
          traveller_remarks: [''],
          other_remarks: [''],
          company_address: [''],
          employeeId: [''],
          department: [''],
          company_number: [''],
          cabin_class: [''],
          meal_type: [''],
          meal_type2: [''],
          classification: [''],
          corporate: [''],
          country_id: [''],
          seat_preference: [''],
          country_code: [''],
          airline_id: [''],
          airline_details: this.fb.array([this.fb.group(this.initAirlineDetails())]),
          corporate_code: this.fb.array([this.fb.group(this.initCorporateCode())]),
          airlinePreferences: this.fb.array([this.initAirlinePreferences()]),
          corporate_profileid: this.fb.array([this.fb.group(this.initCorporateProfileId())]),
          corporate_supplierid: this.fb.array([this.fb.group(this.initCorporateSupplierId())]),
          nationalID_doc: ['National ID'],
          passport_doc: ['Passport ID'],
          driving_doc: ['Driving License']
        });
        this.showDetailModal = false; // this.route.queryParams.subscribe(params => {
        //   this.newTravellerProfileForm.patchValue({
        //     profile_id:params.profile_id,
        //     salutation: params.salutation,
        //     first_name: params.first_name,
        //     status:0,
        //     last_name: params.last_name,
        //     a_dob: params.a_dob,
        //     gender: params.gender,
        //     passengerType: params.passengerType,
        //     companyName: params.companyName,
        //     marital_status: params.marital_status,
        //     nationality: params.nationality,
        //     address: params.address,
        //     dob: params.dob,
        //     list_country: params.list_country,
        //     postal_code: params.postal_code,
        //     state: params.state,
        //     city_id: params.city_id,
        //     street: params.street,
        //     mobile_number: params.mobile_number,
        //     emergency_contact: params.emergency_contact,
        //     email_address1: params.email_address1,
        //     email_address2: params.email_address2,
        //     relationship: params.relationship,
        //     associate_profile: params.associate_profile,
        //     document1: params.document1,
        //     document2: params.document2,
        //     document3: params.document3,
        //     national_id: params.national_id,
        //     image1: params.image1,
        //     passport: params.passport,
        //     image2: params.image2,
        //     driving_licence: params.driving_licence,
        //     image3: params.image3,
        //     national_id_issueDate: params.national_id_issueDate,
        //     national_id_expiryDate: params.national_id_expiryDate,
        //     passport_issueDate: params.passport_issueDate,
        //     passport_expiryDate: params.passport_expiryDate,
        //     driving_licence_issueDate: params.driving_licence_issueDate,
        //     driving_licence_expiryDate: params.driving_licence_expiryDate,
        //     national_id_placeofissue: params.national_id_placeofissue,
        //     passport_placeofissue: params.passport_placeofissue,
        //     driving_licence_placeofissue: params.driving_licence_placeofissue,
        //     passenger_type: params.passenger_type,
        //     company_name: params.company_name,
        //     designation: params.designation,
        //     traveller_type: params.traveller_type,
        //     company_emailid: params.company_emailid,
        //     traveller_remarks: params.traveller_remarks,
        //     other_remarks: params.other_remarks,
        //     company_address: params.company_address,
        //     employeeId: params.employeeId,
        //     department: params.department,
        //     company_number: params.company_number,
        //     cabin_class: params.cabin_class,
        //     meal_type: params.meal_type,
        //     meal_type2: params.meal_type2,
        //     classification: params.classification,
        //     airline_details:params.airline_details,
        //     corporate: params.corporate,
        //     corporate_code: params.corporate_code,
        //     airlinePreference: params.airlinePreference,
        //     seat_preference:params.seat_preference,
        //     country_code:params.country_code,
        //     corporate_profileid:params.corporate_profileid,
        //     corporate_supplierid:params.corporate_supplierid,
        //     country_id:params.country_id
        //   });
        //   let airlineDetails = this.parsingArrayParams(params.airline_details, this.airline_details);
        //   let corporateCode = this.parsingArrayParams(params.corporate_code, this.corporate_code);
        //   let corporate_profileid = this.parsingArrayParams(params.corporate_profileid, this.corporate_profileid);
        //   let corporate_supplierid = this.parsingArrayParams(params.corporate_supplierid, this.corporate_supplierid);
        // });

        $(document).ready(function () {
          $('.ui.rating').rating();
        });
      }

      _createClass(NewTravellerProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.profileID = this.activeRoute.snapshot.params.id;
          this.fetchTravellerProfile(this.profileID);
          this.getCountries();
          this.searchAirline();
          this.showSaveButton();
          this.getTargetFormGroup();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          $('.menu .item').tab();
          this.loadEndDate();
          this.loadStartDate();
          $('checkbox').checkbox();
          $(document).ready(function () {
            $('.ui.dropdown').dropdown();
            $('.ui.dropdown').dropdown('refresh');
            $('.dropdownThree').dropdown({
              placeholder: 'Preferred airline'
            });
            $('.ui.checkbox').checkbox();
          });
        }
      }, {
        key: "parsingArrayParams",
        value: function parsingArrayParams(value, parameter) {
          var _this = this;

          if (value && value.length > 0) {
            var array = JSON.parse(value);

            if (array && array.length > 0) {
              array.map(function (item, index) {
                parameter.removeAt(0);
                console.log(item);
                parameter.push(_this.fb.group(item));
                return parameter;
              });
            } else {
              console.log('There is something wrong with the passing of arrays');
            }
          }
        }
      }, {
        key: "uploadImage",
        value: function uploadImage(files, field) {
          var _this2 = this;

          var file_size = files[0].size;
          console.log("file_size::::", file_size);
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
            _this2.CommonService.uploadImagetoAWS(reader.result).subscribe(function (result) {
              if (field == 'imageFile') {
                _this2.newTravellerProfileForm.patchValue({
                  image1: result.image
                });
              }
            }, function (err) {
              _this2.toastr.error("Error uploading image, Try any other image", "Error ", {
                timeOut: 5000,
                progressBar: false,
                positionClass: 'toast-top-right'
              });
            });
          };
        }
      }, {
        key: "uploadImage2",
        value: function uploadImage2(files, field) {
          var _this3 = this;

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
            _this3.CommonService.uploadImagetoAWS(reader.result).subscribe(function (result) {
              if (field == 'imageFile2') {
                _this3.newTravellerProfileForm.patchValue({
                  image2: result.image
                });
              }
            }, function (err) {
              _this3.toastr.error("Error uploading image, Try any other image", "Error ", {
                timeOut: 5000,
                progressBar: false,
                positionClass: 'toast-top-right'
              });
            });
          };
        }
      }, {
        key: "uploadImage3",
        value: function uploadImage3(files, field) {
          var _this4 = this;

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
            _this4.CommonService.uploadImagetoAWS(reader.result).subscribe(function (result) {
              if (field == 'imageFile3') {
                _this4.newTravellerProfileForm.patchValue({
                  image3: result.image
                });
              }
            }, function (err) {
              _this4.toastr.error("Error uploading image, Try any other image", "Error ", {
                timeOut: 5000,
                progressBar: false,
                positionClass: 'toast-top-right'
              });
            });
          };
        }
      }, {
        key: "viewUser",
        value: function viewUser(modalId) {
          this.showDetailModal = true; // window.location.href = '{{ newTravellerProfileForm.controls.image1.value }}';
          //href="{{ newTravellerProfileForm.controls.image1.value }}"

          this.modalService.open(modalId);
        }
      }, {
        key: "closeModal",
        value: function closeModal(modalId) {
          this.modalService.close(modalId);
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          var _this5 = this;

          this.CommonService.getCountryList().subscribe(function (result) {
            _this5.countries = result.countries;
          });
        }
      }, {
        key: "searchAirline",
        value: function searchAirline() {
          var _this6 = this;

          this.CommonService.getAirlines().subscribe(function (_result) {
            _this6.airlinesArr = _result.airlines;
          });
        }
      }, {
        key: "passCountryId",
        value: function passCountryId(val) {
          var _this7 = this;

          $(".renew-city .text").text('');
          $(".renew-city .text").addClass('default');
          $(".renew-city .default.text").text('City');
          this.CommonService.getCityList(val).subscribe(function (result) {
            _this7.cities = result.cities;
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(data) {
          var _this8 = this;

          console.log("this.newTravellerProfileForm::::::::", this.newTravellerProfileForm.value);
          this.isSubmitted = true;

          if (this.newTravellerProfileForm.invalid) {
            this.toastr.warning("Please fill all mandatory fields", "Error ", {
              timeOut: 10000,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });
            return;
          }

          this.ProfileManagementService.NewTravellerProfile(data).subscribe(function (result) {
            if (result.status == 200) {
              console.log("traveller prfile saved data::", result.traveller);
              _this8.newTravellerResp = result.traveller;

              _this8.toastr.success("".concat(result.msg), " ", {
                timeOut: 10000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });

              _this8.router.navigate(['/profile-management/retrieve-profile']);
            } else {
              _this8.toastr.error("".concat(result.msg), " ", {
                timeOut: 10000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "showAirlines",
        value: function showAirlines() {
          this.showAddAirlines = !this.showAddAirlines;
        }
      }, {
        key: "showHotels",
        value: function showHotels() {
          this.showAddHotels = !this.showAddHotels;
        }
      }, {
        key: "showCompany",
        value: function showCompany() {
          this.showCompanyid = !this.showCompanyid;
        }
      }, {
        key: "showSaveButton",
        value: function showSaveButton() {
          // this.profileID = this.activeRoute.snapshot.params.id;
          if (this.profileID === null || this.profileID === undefined) {
            this.showProfileId = !this.showProfileId;
          }
        }
      }, {
        key: "initAirlinePreferences",
        value: function initAirlinePreferences() {
          return this.fb.group({
            airlinePreference: ""
          });
        }
      }, {
        key: "initAirlineDetails",
        value: function initAirlineDetails() {
          return {
            airline_option: [''],
            frequent_flyersoption: ['']
          };
        }
      }, {
        key: "initCorporateCode",
        value: function initCorporateCode() {
          return {
            corporate_code: ['']
          };
        }
      }, {
        key: "initCorporateProfileId",
        value: function initCorporateProfileId() {
          return {
            corporate_profileid: ['']
          };
        }
      }, {
        key: "initCorporateSupplierId",
        value: function initCorporateSupplierId() {
          return {
            corporate_supplierid: ['']
          };
        }
      }, {
        key: "initHotelDetails",
        value: function initHotelDetails() {
          return {
            airline_option2: [''],
            frequent_flyersoption2: ['']
          };
        }
      }, {
        key: "loadStartDate",
        value: function loadStartDate() {
          var scope = this;
          $(function () {
            $('input[name="a_dob"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              // minYear: 1901,
              // startDate: moment(),
              maxDate: moment()
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.newTravellerProfileForm.get('a_dob').setValue(moment(start).format('DD-MM-YYYY'));
            });
          });
          var scope = this;
          $(function () {
            $('input[name="national_id_issueDate"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1901,
              startDate: moment(),
              maxDate: moment(),
              autoUpdateInput: false
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.newTravellerProfileForm.get('national_id_issueDate').setValue(moment(start).format('DD-MM-YYYY'));
            });
          });
          var scope = this;
          $(function () {
            $('input[name="passport_issueDate"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1901,
              startDate: moment(),
              maxDate: moment(),
              autoUpdateInput: false
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.newTravellerProfileForm.get('passport_issueDate').setValue(moment(start).format('DD-MM-YYYY'));
            });
          });
          var scope = this;
          $(function () {
            $('input[name="driving_licence_issueDate"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1901,
              startDate: moment(),
              maxDate: moment(),
              autoUpdateInput: false
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.newTravellerProfileForm.get('driving_licence_issueDate').setValue(moment(start).format('DD-MM-YYYY'));
            });
          });
        }
      }, {
        key: "loadEndDate",
        value: function loadEndDate() {
          var scope = this;
          $(function () {
            $('input[name="national_id_expiryDate"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1901,
              startDate: moment(),
              minDate: moment(),
              autoUpdateInput: false
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.newTravellerProfileForm.get('national_id_expiryDate').setValue(moment(start).format('DD-MM-YYYY'));
            });
          });
          var scope = this;
          $(function () {
            $('input[name="passport_expiryDate"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1901,
              startDate: moment(),
              minDate: moment(),
              autoUpdateInput: false
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.newTravellerProfileForm.get('passport_expiryDate').setValue(moment(start).format('DD-MM-YYYY'));
            });
          });
          var scope = this;
          $(function () {
            $('input[name="driving_licence_expiryDate"]').daterangepicker({
              singleDatePicker: true,
              showDropdowns: true,
              minYear: 1901,
              startDate: moment(),
              minDate: moment(),
              autoUpdateInput: false
            }, function (start, end, label) {
              var years = moment().diff(start, 'years');
              scope.newTravellerProfileForm.get('driving_licence_expiryDate').setValue(moment(start).format('DD-MM-YYYY'));
            });
          });
        }
      }, {
        key: "removeMoreAirlines",
        value: function removeMoreAirlines(index) {
          if (index > 0) this.airline_details.removeAt(index);
        }
      }, {
        key: "addMoreAirlines",
        value: function addMoreAirlines() {
          this.airline_details.push(this.fb.group(this.initAirlineDetails()));
        }
      }, {
        key: "addCorporateCode",
        value: function addCorporateCode() {
          this.corporate_code.push(this.fb.group(this.initCorporateCode()));
          this.corporate_profileid.push(this.fb.group(this.initCorporateProfileId()));
          this.corporate_supplierid.push(this.fb.group(this.initCorporateSupplierId()));
        }
      }, {
        key: "removeItem",
        value: function removeItem(index) {
          this.corporate_code.removeAt(index);
          this.corporate_profileid.removeAt(index);
          this.corporate_supplierid.removeAt(index);
        }
      }, {
        key: "removeCorporateCode",
        value: function removeCorporateCode(index) {
          this.getItemArray.removeAt(index); // if (index > 0) this.getItemArray.removeAt(index);

          console.log("dfsdfsfdfsd");
        }
      }, {
        key: "delInput",
        value: function delInput(index) {
          var arrayControl = this.newTravellerProfileForm.controls['corporate_code'];
          arrayControl.removeAt(index);
        }
      }, {
        key: "getTargetFormGroup",
        value: function getTargetFormGroup() {
          return this.fb.group({
            corporate_code: [null]
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
        key: "generatePreference",
        value: function generatePreference() {
          window.location.href = window.location.href.split('#')[0] + '#DivIdToScroll';
        }
      }, {
        key: "generateCompany",
        value: function generateCompany() {
          window.location.href = window.location.href.split('#')[0] + '#company';
        }
      }, {
        key: "generateDocuments",
        value: function generateDocuments() {
          window.location.href = window.location.href.split('#')[0] + '#goToDocuments';
        }
      }, {
        key: "generatePersonal",
        value: function generatePersonal() {
          window.location.href = window.location.href.split('#')[0] + '#personal';
        }
      }, {
        key: "setDropDownType",
        value: function setDropDownType(value, type) {
          switch (type) {
            case 'gender':
              this.newTravellerProfileForm.get('gender').setValue(value);
              break;

            case 'nationality':
              this.newTravellerProfileForm.get('nationality').setValue(value);
              console.log(this.newTravellerProfileForm.get('nationality').setValue(value));
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

            case 'list_country':
              this.newTravellerProfileForm.get('list_country').setValue(value);
              break;

            case 'relationship':
              this.newTravellerProfileForm.get('relationship').setValue(value);
              break;

            case 'document1':
              this.newTravellerProfileForm.get('document1').setValue(value);
              console.log(this.newTravellerProfileForm.get('document1').setValue(value));
              break;

            case 'document2':
              this.newTravellerProfileForm.get('document2').setValue(value);
              break;

            case 'document3':
              this.newTravellerProfileForm.get('document3').setValue(value);
              break;

            case 'marital_status':
              this.newTravellerProfileForm.get('marital_status').setValue(value);
              break;

            case 'passenger_type':
              this.newTravellerProfileForm.get('passenger_type').setValue(value);
              break;

            case 'traveller_type':
              this.newTravellerProfileForm.get('traveller_type').setValue(value);
              break;

            case 'cabin_class':
              this.newTravellerProfileForm.get('cabin_class').setValue(value);
              break;

            case 'classification':
              this.newTravellerProfileForm.get('classification').setValue(value);
              break;

            case 'meal_type':
              this.newTravellerProfileForm.get('meal_type').setValue(value);
              break;

            case 'meal_type2':
              this.newTravellerProfileForm.get('meal_type2').setValue(value);
              break;

            case 'airline_option':
              this.newTravellerProfileForm.get('airline_option').setValue(value);
              break;

            case 'airline_option2':
              this.newTravellerProfileForm.get('airline_option2').setValue(value);
              break;

            case 'frequent_flyersoption':
              this.newTravellerProfileForm.get('frequent_flyersoption').setValue(value);
              break;

            case 'frequent_flyersoption2':
              this.newTravellerProfileForm.get('frequent_flyersoption2').setValue(value);
              break;

            case 'seat_preference':
              this.newTravellerProfileForm.get('seat_preference').setValue(value);
              break;

            case 'airlinePreference':
              this.newTravellerProfileObj.airlinePreference = this.newTravellerProfileForm.get('airlinePreferences').value;
              break;
          }
        }
      }, {
        key: "updateTravllerProfile",
        value: function updateTravllerProfile() {
          var _this9 = this;

          this.newTravellerProfileForm.patchValue({
            id: this.profileID
          });
          console.log(this.newTravellerProfileForm.value);
          this.ProfileManagementService.updateProfile(this.newTravellerProfileForm.value).subscribe(function (result) {
            if (result.status) {
              _this9.toastr.success("".concat(result.msg), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-top-right'
              });

              _this9.router.navigate(['/profile-management/retrieve-profile/']);
            } else {
              _this9.toastr.error("".concat(result.msg), "", {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-top-right'
              });
            }
          });
        }
      }, {
        key: "fetchTravellerProfile",
        value: function fetchTravellerProfile(profile_id) {
          var _this10 = this;

          this.ProfileManagementService.GetTravellerById(profile_id).subscribe(function (result) {
            console.log(result);

            if (result.status) {
              _this10.newTravellerProfileObj = result.traveller;
              console.log("result.traveller::::::", _this10.newTravellerProfileObj.salutation);

              _this10.newTravellerProfileForm.patchValue({
                profile_id: _this10.newTravellerProfileObj.profile_id,
                salutation: 'Master',
                first_name: _this10.newTravellerProfileObj.first_name,
                status: 0,
                last_name: _this10.newTravellerProfileObj.last_name,
                a_dob: _this10.newTravellerProfileObj.a_dob,
                gender: _this10.newTravellerProfileObj.gender,
                passengerType: _this10.newTravellerProfileObj.passengerType,
                companyName: _this10.newTravellerProfileObj.companyName,
                marital_status: _this10.newTravellerProfileObj.marital_status,
                nationality: _this10.newTravellerProfileObj.nationality,
                address: _this10.newTravellerProfileObj.address,
                dob: _this10.newTravellerProfileObj.dob,
                list_country: _this10.newTravellerProfileObj.list_country,
                postal_code: _this10.newTravellerProfileObj.postal_code,
                state: _this10.newTravellerProfileObj.state,
                city_id: _this10.newTravellerProfileObj.city_id,
                street: _this10.newTravellerProfileObj.street,
                mobile_number: _this10.newTravellerProfileObj.mobile_number,
                emergency_contact: _this10.newTravellerProfileObj.emergency_contact,
                email_address1: _this10.newTravellerProfileObj.email_address1,
                email_address2: _this10.newTravellerProfileObj.email_address2,
                relationship: _this10.newTravellerProfileObj.relationship,
                associate_profile: _this10.newTravellerProfileObj.associate_profile,
                document1: _this10.newTravellerProfileObj.document1,
                document2: _this10.newTravellerProfileObj.document2,
                document3: _this10.newTravellerProfileObj.document3,
                national_id: _this10.newTravellerProfileObj.national_id,
                image1: _this10.newTravellerProfileObj.image1,
                passport: _this10.newTravellerProfileObj.passport,
                image2: _this10.newTravellerProfileObj.image2,
                driving_licence: _this10.newTravellerProfileObj.driving_licence,
                image3: _this10.newTravellerProfileObj.image3,
                national_id_issueDate: _this10.newTravellerProfileObj.national_id_issueDate,
                national_id_expiryDate: _this10.newTravellerProfileObj.national_id_expiryDate,
                passport_issueDate: _this10.newTravellerProfileObj.passport_issueDate,
                passport_expiryDate: _this10.newTravellerProfileObj.passport_expiryDate,
                driving_licence_issueDate: _this10.newTravellerProfileObj.driving_licence_issueDate,
                driving_licence_expiryDate: _this10.newTravellerProfileObj.driving_licence_expiryDate,
                national_id_placeofissue: _this10.newTravellerProfileObj.national_id_placeofissue,
                passport_placeofissue: _this10.newTravellerProfileObj.passport_placeofissue,
                driving_licence_placeofissue: _this10.newTravellerProfileObj.driving_licence_placeofissue,
                passenger_type: _this10.newTravellerProfileObj.passenger_type,
                company_name: _this10.newTravellerProfileObj.company_name,
                designation: _this10.newTravellerProfileObj.designation,
                traveller_type: _this10.newTravellerProfileObj.traveller_type,
                company_emailid: _this10.newTravellerProfileObj.company_emailid,
                traveller_remarks: _this10.newTravellerProfileObj.traveller_remarks,
                other_remarks: _this10.newTravellerProfileObj.other_remarks,
                company_address: _this10.newTravellerProfileObj.company_address,
                employeeId: _this10.newTravellerProfileObj.employeeId,
                department: _this10.newTravellerProfileObj.department,
                company_number: _this10.newTravellerProfileObj.company_number,
                cabin_class: _this10.newTravellerProfileObj.cabin_class,
                meal_type: _this10.newTravellerProfileObj.meal_type,
                meal_type2: _this10.newTravellerProfileObj.meal_type2,
                classification: _this10.newTravellerProfileObj.classification,
                airline_details: _this10.newTravellerProfileObj.airline_details,
                corporate_code: _this10.newTravellerProfileObj.corporate_code,
                corporate: _this10.newTravellerProfileObj.corporate,
                country_id: _this10.newTravellerProfileObj.country_id,
                seat_preference: _this10.newTravellerProfileObj.seat_preference,
                country_code: _this10.newTravellerProfileObj.country_code,
                airline_id: _this10.newTravellerProfileObj.airline_id,
                corporate_profileid: _this10.newTravellerProfileObj.corporate_profileid,
                corporate_supplierid: _this10.newTravellerProfileObj.corporate_supplierid,
                airlinePreference: _this10.newTravellerProfileObj.airlinePreference
              });

              _this10.ngAfterViewInit();
            }
          });
        }
      }, {
        key: "gfc",
        get: function get() {
          return this.newTravellerProfileForm.controls;
        }
      }, {
        key: "airline_details",
        get: function get() {
          return this.newTravellerProfileForm.get('airline_details');
        }
      }, {
        key: "corporate_code",
        get: function get() {
          return this.newTravellerProfileForm.get('corporate_code');
        }
      }, {
        key: "airlinePreference",
        get: function get() {
          return this.newTravellerProfileForm.get('airlinePreference');
        }
      }, {
        key: "corporate_profileid",
        get: function get() {
          return this.newTravellerProfileForm.get('corporate_profileid');
        }
      }, {
        key: "corporate_supplierid",
        get: function get() {
          return this.newTravellerProfileForm.get('corporate_supplierid');
        }
      }, {
        key: "getItemArray",
        get: function get() {
          return this.newTravellerProfileForm.get('corporate_code');
        }
      }]);

      return NewTravellerProfileComponent;
    }();

    NewTravellerProfileComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _shared_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _shared_services_profile_management_profile_management_service__WEBPACK_IMPORTED_MODULE_1__["ProfileManagementService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: src_app_layout_modal__WEBPACK_IMPORTED_MODULE_7__["ModalService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()], NewTravellerProfileComponent.prototype, "sendDataToParent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tab', {
      "static": false
    })], NewTravellerProfileComponent.prototype, "tab", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tabContent', {
      "static": false
    })], NewTravellerProfileComponent.prototype, "tabContent", void 0);
    NewTravellerProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-new-traveller-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./new-traveller-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/create-new-profile/new-traveller-profile/new-traveller-profile.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./new-traveller-profile.component.scss */
      "./src/app/layout/profile-management/create-new-profile/new-traveller-profile/new-traveller-profile.component.scss"))["default"]]
    })], NewTravellerProfileComponent);
    /***/
  },

  /***/
  "./src/app/layout/profile-management/profile-management-routing.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/layout/profile-management/profile-management-routing.module.ts ***!
    \********************************************************************************/

  /*! exports provided: ProfileManagementRoutingModule */

  /***/
  function srcAppLayoutProfileManagementProfileManagementRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileManagementRoutingModule", function () {
      return ProfileManagementRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _profile_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./profile-management.component */
    "./src/app/layout/profile-management/profile-management.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _create_new_profile_new_traveller_profile_new_traveller_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./create-new-profile/new-traveller-profile/new-traveller-profile.component */
    "./src/app/layout/profile-management/create-new-profile/new-traveller-profile/new-traveller-profile.component.ts");

    var routes = [{
      path: '',
      component: _profile_management_component__WEBPACK_IMPORTED_MODULE_1__["ProfileManagementComponent"],
      children: [{
        path: '',
        redirectTo: 'create-new-profile',
        pathMatch: 'prefix'
      }, {
        path: 'create-new-profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | create-new-profile-create-new-profile-module */
          "create-new-profile-create-new-profile-module").then(__webpack_require__.bind(null,
          /*! ./create-new-profile/create-new-profile.module */
          "./src/app/layout/profile-management/create-new-profile/create-new-profile.module.ts")).then(function (m) {
            return m.CreateNewProfileModule;
          });
        }
      }, {
        path: 'profile-follow-up',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | profile-follow-up-profile-follow-up-module */
          "profile-follow-up-profile-follow-up-module").then(__webpack_require__.bind(null,
          /*! ./profile-follow-up/profile-follow-up.module */
          "./src/app/layout/profile-management/profile-follow-up/profile-follow-up.module.ts")).then(function (m) {
            return m.ProfileFollowUpModule;
          });
        }
      }, {
        path: 'retrieve-profile',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | retrieve-profile-retrieve-profile-module */
          [__webpack_require__.e("default~airline-deals-airline-deals-module~audit-report-audit-report-module~booking-report-booking-r~c369235f"), __webpack_require__.e("default~airline-deals-airline-deals-module~create-user-create-user-module~currency-configuration-cur~471cd285"), __webpack_require__.e("retrieve-profile-retrieve-profile-module")]).then(__webpack_require__.bind(null,
          /*! ./retrieve-profile/retrieve-profile.module */
          "./src/app/layout/profile-management/retrieve-profile/retrieve-profile.module.ts")).then(function (m) {
            return m.RetrieveProfileModule;
          });
        }
      }, {
        path: 'search-profile',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | search-profile-search-profile-module */
          [__webpack_require__.e("default~airline-deals-airline-deals-module~audit-report-audit-report-module~booking-report-booking-r~c369235f"), __webpack_require__.e("search-profile-search-profile-module")]).then(__webpack_require__.bind(null,
          /*! ./search-profile/search-profile.module */
          "./src/app/layout/profile-management/search-profile/search-profile.module.ts")).then(function (m) {
            return m.SearchProfileModule;
          });
        }
      }]
    }, {
      path: 'create-new-profile/:id',
      component: _create_new_profile_new_traveller_profile_new_traveller_profile_component__WEBPACK_IMPORTED_MODULE_4__["NewTravellerProfileComponent"]
    }];

    var ProfileManagementRoutingModule = function ProfileManagementRoutingModule() {
      _classCallCheck(this, ProfileManagementRoutingModule);
    };

    ProfileManagementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], ProfileManagementRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/profile-management/profile-management.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/layout/profile-management/profile-management.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutProfileManagementProfileManagementComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wcm9maWxlLW1hbmFnZW1lbnQvcHJvZmlsZS1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/layout/profile-management/profile-management.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/layout/profile-management/profile-management.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ProfileManagementComponent */

  /***/
  function srcAppLayoutProfileManagementProfileManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileManagementComponent", function () {
      return ProfileManagementComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ProfileManagementComponent = /*#__PURE__*/function () {
      function ProfileManagementComponent() {
        _classCallCheck(this, ProfileManagementComponent);
      }

      _createClass(ProfileManagementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileManagementComponent;
    }();

    ProfileManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile-management',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile-management.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/profile-management.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile-management.component.scss */
      "./src/app/layout/profile-management/profile-management.component.scss"))["default"]]
    })], ProfileManagementComponent);
    /***/
  },

  /***/
  "./src/app/layout/profile-management/profile-management.module.ts":
  /*!************************************************************************!*\
    !*** ./src/app/layout/profile-management/profile-management.module.ts ***!
    \************************************************************************/

  /*! exports provided: ProfileManagementModule */

  /***/
  function srcAppLayoutProfileManagementProfileManagementModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileManagementModule", function () {
      return ProfileManagementModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _profile_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./profile-management.component */
    "./src/app/layout/profile-management/profile-management.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _profile_management_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./profile-management-routing.module */
    "./src/app/layout/profile-management/profile-management-routing.module.ts");

    var ProfileManagementModule = function ProfileManagementModule() {
      _classCallCheck(this, ProfileManagementModule);
    };

    ProfileManagementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_profile_management_component__WEBPACK_IMPORTED_MODULE_1__["ProfileManagementComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _profile_management_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProfileManagementRoutingModule"]]
    })], ProfileManagementModule);
    /***/
  }
}]);
//# sourceMappingURL=profile-management-profile-management-module-es5.js.map