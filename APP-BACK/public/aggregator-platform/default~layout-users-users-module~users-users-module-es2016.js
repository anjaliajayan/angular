(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layout-users-users-module~users-users-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/users/user-edit/user-edit.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/users/user-edit/user-edit.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui fluid container\">\r\n  <div class=\"ui grid\">\r\n    <div class=\"sixteen wide column row\">\r\n      <div class=\"eight wide column\">\r\n        <h3><span class=\"update-header\">Update User</span></h3>\r\n      </div>\r\n      <div class=\"eight wide column bookings_btn-panel text-right\">\r\n        <a class=\"ui primary button roleActionButton\" routerLink=\"../../\">\r\n          <span class=\"tourCode_text\">List Users</span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"outer-basic\">\r\n    <div class=\"outer-basicForm\">\r\n      <div class=\"ui form\">\r\n        <div class=\"email-list b2c-list-user-table\">\r\n          <form [formGroup]=\"editUserForm\" (submit)=\"btnSubmitHandler()\" autocomplete=\"off\">\r\n            <div class=\"ui grid\">\r\n              <div class=\"eleven wide column\">\r\n                <div class=\"shadow-sm p-5 mb-5 bg-white rounded\">\r\n                  <div class=\"ui grid\">\r\n                    <div class=\"three wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">Salutation</label>\r\n                        <select class=\"ui dropdown fluid\" formControlName=\"salute\">\r\n                          <!-- [selected]=\"salute==userData.salute\" -->\r\n                          <option value=\"\" selected disabled>Select</option>\r\n                          <option *ngFor=\"let saluteName of saluteNames\" value=\"{{ saluteName }}\">{{ saluteName }}\r\n                          </option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"six wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">First Name <small *ngIf=\"formIsSubmitted && gfc.first_name.errors\"\r\n                            class=\"text-danger\">required</small></label>\r\n                        <input type=\"text\" formControlName=\"first_name\" />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"six wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">Last Name <small *ngIf=\"formIsSubmitted && gfc.last_name.errors\"\r\n                            class=\"text-danger\">required</small></label>\r\n                        <input type=\"text\" name=\"\" formControlName=\"last_name\" />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui grid\">\r\n                    <div class=\"five wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">Contact Number <small *ngIf=\"formIsSubmitted && gfc.mobile.errors\"\r\n                            class=\"text-danger\">required</small></label>\r\n                        <input type=\"text\" id=\"\" formControlName=\"mobile\" placeholder=\"Contact number\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"five wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">Initial</label>\r\n                        <input type=\"text\" id=\"\" formControlName=\"initial\" placeholder=\"Enter initial\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"four wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">Gender <small *ngIf=\"formIsSubmitted && gfc.sex.errors\"\r\n                            class=\"text-danger\">required</small></label>\r\n                        <select class=\"ui dropdown fluid\" formControlName=\"sex\">\r\n                          <option value=\"\">Gender</option>\r\n                          <option value=\"male\">Male</option>\r\n                          <option value=\"female\">Female</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"five wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">Status <small *ngIf=\"formIsSubmitted && gfc.status.errors\"\r\n                            class=\"text-danger\">required</small></label>\r\n                        <select class=\"ui dropdown fluid\" formControlName=\"status\">\r\n                          <option value=\"\" disabled selected>Status</option>\r\n                          <option *ngFor=\"let status of statusRow\" value=\"{{ status.id }}\">{{ status.value }}</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"five wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"inputAddress\">Address</label>\r\n                        <input type=\"text\" id=\"inputAddress\" placeholder=\"1234 Main St\" formControlName=\"address1\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"five wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"inputAddress2\">Address 2</label>\r\n                        <input type=\"text\" id=\"inputAddress2\" placeholder=\"Apartment, studio, or floor\"\r\n                          formControlName=\"address2\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"five wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">Country <small *ngIf=\"formIsSubmitted && gfc.country_id.errors\"\r\n                            class=\"text-danger\">required</small></label>\r\n                        <select class=\"ui dropdown fluid\" formControlName=\"country_id\">\r\n                          <option value=\"\">Select</option>\r\n                          <option *ngFor=\"let country of countries\" [value]=\"country.country_id\">{{country.country }}\r\n                          </option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"five wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">POS <small *ngIf=\"formIsSubmitted && gfc.country_id.errors\"\r\n                            class=\"text-danger\">required</small></label>\r\n                        <select class=\"ui dropdown fluid\" formControlName=\"organisation_id\">\r\n                          <option value=\"\">Select</option>\r\n                          <option *ngFor=\"let organization of organizations\" [value]=\"organization.organisation_id\">\r\n                            {{ organization.name  }}</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"five wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">POS Branch<small *ngIf=\"formIsSubmitted && gfc.branch_id.errors\"\r\n                            class=\"text-danger\">required</small></label>\r\n                        <select class=\"ui dropdown fluid\" formControlName=\"branch_id\">\r\n                          <option value=\"\">Select Branch</option>\r\n                          <option value=\"{{ organizationBranche.id }}\"\r\n                            *ngFor=\"let organizationBranche of organizationBranches\">{{ organizationBranche.name }}\r\n                          </option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"five wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">Role <small *ngIf=\"formIsSubmitted && gfc.role_id.errors\"\r\n                            class=\"text-danger\">required</small></label>\r\n                        <select class=\"ui dropdown fluid\" formControlName=\"role_id\">\r\n                          <option value=\"\">Select</option>\r\n                          <option *ngFor=\"let userRole of userRoles\" [value]=\"userRole.role_id\">{{ userRole.name }}\r\n                          </option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"five wide column\">\r\n                <div class=\"ui grid\">\r\n                  <div class=\"twelve wide column\">\r\n                    <div class=\"field\">\r\n                      <label for=\"\">Username <small *ngIf=\"formIsSubmitted && gfc.username.errors\"\r\n                          class=\"text-danger\">required</small></label>\r\n                      <input type=\"email\" id=\"\" formControlName=\"username\" placeholder=\"User name\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"twelve wide column\">\r\n                    <div class=\"field\">\r\n                      <label for=\"\">Email <small *ngIf=\"formIsSubmitted && gfc.email.errors\" class=\"text-danger\">a valid\r\n                          email is required</small></label>\r\n                      <input type=\"email\" id=\"\" formControlName=\"email\" placeholder=\"Email address\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"twelve wide column\">\r\n                    <div class=\"field\">\r\n                      <label for=\"\">Password </label>\r\n                      <input type=\"password\" id=\"\" placeholder=\"Password\" formControlName=\"password\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"twelve wide column\">\r\n                    <div class=\"field\">\r\n                      <label for=\"\">Confirm Password </label>\r\n                      <input type=\"password\" id=\"\" placeholder=\"Password\" formControlName=\"cpassword\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"text-right\">\r\n              <button type=\"submit\" class=\"ui primary button\">Save User</button>\r\n              <button (click)=\"cancel()\" class=\"ui button\">Cancel</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/users/user-new/user-new.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/users/user-new/user-new.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui fluid container\">\r\n  <div class=\"ui grid\">\r\n    <div class=\"sixteen wide column row\">\r\n      <div class=\"eight wide column\">\r\n        <h3><span class=\"update-header\">New User</span></h3>  \r\n      </div>\r\n      <div class=\"eight wide column bookings_btn-panel text-right\">\r\n        <a class=\"ui primary button roleActionButton\" routerLink=\"../\">\r\n          <span class=\"tourCode_text\">List Users</span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"outer-basic\">\r\n    <div class=\"outer-basicForm\">\r\n      <div class=\"ui form\">\r\n        <div class=\"email-list b2c-list-user-table\">\r\n          <form [formGroup]=\"newUserForm\" (submit)=\"btnSubmitHandler()\" autocomplete=\"off\">\r\n            <div class=\"ui grid main-wrapper\">\r\n              <div class=\"eleven wide column outer-wrapper\">\r\n                <div class=\"shadow-sm p-5 mb-5 bg-white rounded\">\r\n                  <div class=\"ui grid first-wrapper\">\r\n                    <div class=\"three wide column second-wrapper\">\r\n                      <!-- <div class=\"field\">\r\n                        <label for=\"\">Salutation<span class=\"mandatory\">*</span></label>\r\n                        <select class=\"ui dropdown fluid\" formControlName=\"saluation\">\r\n                          <option *ngFor=\"let saluteName of saluteNames\" value=\"{{ saluteName }}\">{{ saluteName }}</option>\r\n                        </select>\r\n                      </div> -->\r\n                      <div class=\"three wide column second-wrapper\">\r\n                        <label>Title</label>\r\n                        <select class=\"ui fluid dropdown\" formControlName=\"saluation\">\r\n                          <option value=\"Mr.\">Mr.</option>\r\n                          <option value=\"Master\">Master</option>\r\n                          <option value=\"Mrs.\">Mrs.</option>\r\n                          <option value=\"Miss\">Miss</option>\r\n                          <option value=\"Ms.\">Ms.</option>\r\n                          <option value=\"Dr.\">Dr.</option>\r\n                          <!-- <option *ngFor=\"let salute of saluteNames\" value=\"{{salute}}\">{{salute}}</option> -->    \r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"six wide column second-wrapper\">\r\n                      <div class=\"field\"   [ngClass]=\"{'is-invalid': formIsSubmitted && gfc.first_name.errors}\">\r\n                        <label for=\"\">First Name<span class=\"mandatory\">*</span></label>\r\n                        <input type=\"text\" formControlName=\"first_name\"  placeholder=\"Firstname\"/>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"six wide column second-wrapper\">\r\n                      <div class=\"field\"   [ngClass]=\"{'is-invalid': formIsSubmitted && gfc.last_name.errors}\">\r\n                        <label for=\"\">Last Name <span class=\"mandatory\">*</span></label>\r\n                        <input type=\"text\" name=\"\" formControlName=\"last_name\" placeholder=\"Last Name\"/>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui grid personal-wrapper\">\r\n                    <div class=\"five wide column field-wrapper\">\r\n                      <div class=\"field\" [ngClass]=\"{'is-invalid': formIsSubmitted && gfc.mobile.errors}\">\r\n                        <label for=\"\">Contact Number<span class=\"mandatory\">*</span></label>\r\n                        <input type=\"number\" id=\"\" formControlName=\"mobile\" placeholder=\"Contact number\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"five wide column field-wrapper\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">Initial</label>\r\n                        <input type=\"text\" id=\"\" formControlName=\"initial\" placeholder=\"Enter initial\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"four wide column field-wrapper\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">Gender</label>\r\n                        <select class=\"ui dropdown fluid\" formControlName=\"sex\">\r\n                          <option value=\"male\">Male</option>\r\n                          <option value=\"female\">Female</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"five wide column field-wrapper\">\r\n                      <div class=\"field\" [ngClass]=\"{'is-invalid': formIsSubmitted && gfc.is_active.errors}\">\r\n                        <label for=\"\">Status<span class=\"mandatory\">*</span></label>\r\n                        <select class=\"ui dropdown fluid\" formControlName=\"is_active\">\r\n                          <option value=\"1\">Active</option>\r\n                          <option value=\"0\">Inactive</option>\r\n                          <!-- <option *ngFor=\"let status of statusRow\" value=\"{{ status.id }}\">{{ status.value }}</option> -->\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"five wide column field-wrapper\">\r\n                      <div class=\"field\">\r\n                        <label for=\"inputAddress\">Address</label>\r\n                        <input type=\"text\" id=\"inputAddress\" placeholder=\"1234 Main St\" formControlName=\"address_1\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"five wide column field-wrapper\">\r\n                      <div class=\"field\">\r\n                        <label for=\"inputAddress2\">Address 2</label>\r\n                        <input type=\"text\" id=\"inputAddress2\" placeholder=\"Apartment, studio, or floor\"\r\n                          formControlName=\"address_2\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"five wide column field-wrapper\">\r\n                      <div class=\"field\" [ngClass]=\"{'is-invalid': formIsSubmitted && gfc.country_id.errors}\">\r\n                        <label for=\"\">Country<span class=\"mandatory\">*</span></label>\r\n                        <select class=\"ui dropdown fluid search\" formControlName=\"country_id\" required>\r\n                          <option value=\"\">Select</option>\r\n                          <option *ngFor=\"let country of countries\" [value]=\"country.country_id\">{{ country.country }}\r\n                          </option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"five wide column field-wrapper\">\r\n                      <div class=\"field\"  [ngClass]=\"{'is-invalid': formIsSubmitted && gfc.organisation_id.errors}\">\r\n                        <label for=\"\">POS<span class=\"mandatory\">*</span></label>\r\n                        <select class=\"ui dropdown fluid search\" formControlName=\"organisation_id\" (change)=\"getOrgBranches($event.target.value)\" required>\r\n                          <option value=\"\">Select</option>\r\n                          <option *ngFor=\"let organization of organizations\" [value]=\"organization.organisation_id\">\r\n                            {{ organization.name  }}</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"five wide column field-wrapper\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">POS Branch</label>\r\n                        <select class=\"ui dropdown fluid search\" formControlName=\"branch_id\">\r\n                          <option value=\"\">Select Branch</option>\r\n                          <option value=\"{{ branch.id }}\" *ngFor=\"let branch of branches\">{{ branch.name }}</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"five wide column field-wrapper\">\r\n                      <div class=\"field\"  [ngClass]=\"{'is-invalid': formIsSubmitted && gfc.role_id.errors}\">\r\n                        <label for=\"\">Role<span class=\"mandatory\">*</span></label>\r\n                        <select class=\"ui dropdown fluid\" formControlName=\"role_id\">\r\n                          <option value=\"\">Select</option>\r\n                          <option *ngFor=\"let userRole of userRoles\" [value]=\"userRole.role_id\">{{ userRole.name }}\r\n                          </option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"five wide column inner-wrapper\">\r\n                <div class=\"ui grid user-wrapper\">\r\n                  <div class=\"twelve wide column login-wrapper\">\r\n                    <div class=\"field\" [ngClass]=\"{'is-invalid': formIsSubmitted && gfc.username.errors}\" >\r\n                      <label for=\"\">Username <span class=\"mandatory\">*</span></label>\r\n                      <input type=\"text\" id=\"\" formControlName=\"username\" placeholder=\"User name\">\r\n                      <div *ngIf=\"gfc.username.errors\" class=\"invalid-feedback\">\r\n                        <div class=\"validations\" *ngIf=\"gfc.username.errors.pattern\">\r\n                        Username must be a Alphanumeric \r\n                        </div>\r\n                      </div>\r\n                    </div>                 \r\n                  </div>\r\n                  <div class=\"twelve wide column login-wrapper\">\r\n                    <div class=\"field\"  [ngClass]=\"{'is-invalid': formIsSubmitted && gfc.email.errors}\" >\r\n                      <label for=\"\">Email<span class=\"mandatory\">*</span> </label>\r\n                      <input type=\"email\" id=\"\" formControlName=\"email\" placeholder=\"Email address\">\r\n                      <div *ngIf=\"gfc.email.errors\" class=\"invalid-feedback\">\r\n                        <div class=\"validations\" *ngIf=\"gfc.email.errors.pattern\">\r\n                          Email must be a valid email address\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"twelve wide column login-wrapper\">\r\n                    <div class=\"field\"  [ngClass]=\"{'is-invalid': formIsSubmitted && gfc.password.errors}\">\r\n                      <label for=\"\">Password <span class=\"mandatory\">*</span></label>\r\n                      <input type=\"password\" id=\"\" placeholder=\"Password\" formControlName=\"password\" name=\"password\" (change)=\"validatePassword()\">\r\n                      <div *ngIf=\"gfc.password.errors\" class=\"invalid-feedback\">\r\n                        <!-- <div class=\"validations\"  *ngIf=\"gfc.password.errors.required\">Password is required</div> -->\r\n                        <div class=\"validations\"  *ngIf=\"gfc.password.errors.pattern\">Password must be valid</div>\r\n                    </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"twelve wide column login-wrapper\">\r\n                    <div class=\"field\"  [ngClass]=\"{'is-invalid': formIsSubmitted && gfc.cpassword.errors}\" >\r\n                      <label for=\"\">Confirm Password <span class=\"mandatory\">*</span></label>\r\n                      <input type=\"password\" id=\"\" placeholder=\"Password\" formControlName=\"cpassword\" name=\"cpassword\" (change)=\"validatePassword()\">\r\n                      <div *ngIf=\"gfc.cpassword.invalid && (gfc.cpassword.dirty || gfc.cpassword.touched)\" class=\"validations\">\r\n                        <div class=\"validations\" *ngIf=\"gfc.cpassword.errors.required\">\r\n                          Confirm Password is required\r\n                        </div>\r\n                        <div class=\"validations\" *ngIf=\"gfc.cpassword.errors.unmatched\">\r\n                          Password is not matching\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"btn-wrapper\">\r\n             <button type=\"submit\" class=\"ui primary button\">Save User</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/users/user-targets/user-targets.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/users/user-targets/user-targets.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"ui fluid container\">\r\n  <div class=\"ui grid\">\r\n    <div class=\"sixteen wide column row\">\r\n      <div class=\"eight wide column\">\r\n        <h3><span class=\"update-header\">Set User Targets</span></h3>\r\n      </div>\r\n      <div class=\"eight wide column bookings_btn-panel text-right\">\r\n        <a class=\"ui primary button roleActionButton\" routerLink=\"../../\"><span class=\"tourCode_text\">List\r\n            Users</span></a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"outer-basic\">\r\n    <div class=\"outer-basicForm\">\r\n      <div class=\"ui form\">\r\n        <div class=\"email-list b2c-list-user-table\">\r\n          <form [formGroup]=\"userTargetForm\" autocomplete=\"off\">\r\n            <div class=\"ui grid\">\r\n              <div class=\"sixteen wide column\" formArrayName=\"targets\"\r\n                *ngFor=\"let item of userTargetForm.get('targets').controls; let i = index;\">\r\n                <div class=\"ui grid\" [formGroupName]=\"i\">\r\n                  <div class=\"three wide column\">\r\n                    <div class=\"field\">\r\n                      <label for=\"inputAddress2\">Year</label>\r\n                      <select class=\"ui dropdown fluid\" formControlName=\"year\" name='year'\r\n                        (change)=\"selectYear($event.target.value)\">\r\n                        <option *ngFor=\"let year of yearsList;\" [value]=\"year\">{{ year }}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"three wide column\">\r\n                    <div class=\"field\">\r\n                      <label for=\"inputAddress2\">Month</label>\r\n                      <select class=\"ui dropdown fluid\" formControlName=\"month\" name=\"month\">\r\n                        <option *ngFor=\"let month of months;\" [value]=\"month.id\">{{ month.name }}</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"three wide column\">\r\n                    <div class=\"field\">\r\n                      <label for=\"inputAddress2\">Target Amount</label>\r\n                      <input type=\"text\" class=\"ui dropdown fluid\" placeholder=\"Target Amount\" formControlName=\"amount\"\r\n                        name=\"amount\">\r\n                    </div>\r\n                  </div>\r\n                  <!-- <div class=\"four wide column\">\r\n                  <br>\r\n                  <button (click)=\"btnAddTarget()\" class=\"ui button \"><i class=\"fa fa-plus\"></i></button>\r\n                  <button (click)=\"btnRemoveTarget()\" class=\"ui button \"><i class=\"fa fa-minus\"></i></button>\r\n                </div> -->\r\n                  <div class=\"four wide field  column\">\r\n                    <button class=\"ui button add-btn\" *ngIf=\"i!=0\" tabindex=\"0\" (click)=\"btnRemoveTarget(i)\"><i\r\n                        class=\"fa fa-minus\"></i></button>\r\n                    <button class=\"ui button add-btn\" (click)=\"btnAddTarget()\"\r\n                      *ngIf=\"i==(userTargetForm.get('targets')['controls'].length-1)\"><i\r\n                        class=\"fa fa-plus\"></i></button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui grid\">\r\n              <div class=\"sixteen wide column row\">\r\n                <div class=\"sixteen wide column text-right\">\r\n                  <button type=\"button\" (click)=\"btnSubmitHandler()\" class=\"ui button primary\">Save Targets</button>\r\n                  <button (click)=\"cancel()\" class=\"ui button\">Cancel</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/users/users.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/users/users.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3><span class=\"update-header\">List of Users</span></h3>\r\n\r\n<!-- organizationTypes -->\r\n<div class=\"ui fluid container\">\r\n  <div class=\"outer-basic\">\r\n    <div class=\"outer-basicForm\">\r\n      <!-- <form (ngSubmit)=\"searchFormSubmit()\" class=\"ui form search-field-wrapper\" [formGroup]=\"searchUserForm\">\r\n        <div class=\"four fields main-wrapper\">\r\n          <div class=\"three wide field outer-wrapper\">\r\n            <select class=\"ui fluid dropdown2\" formControlName=\"corporate_type\">\r\n     \r\n           <option *ngFor=\"let item of organizations\" value=\"{{item.organisation_id}}\">{{item.name}} </option>\r\n            </select>\r\n          </div>\r\n          <div class=\"three wide field outer-wrapper\">\r\n            <input type=\"text\" placeholder=\"Office Name/Office Id\" formControlName=\"nameAndOfficeId\">\r\n \r\n          </div>\r\n          <div class=\"eight wide field inner-wrapper\">\r\n            <button class=\"ui button filter_btn\">\r\n              <span class=\"filter_list\">Search</span>\r\n            </button>\r\n            <button class=\"ui button filter_btn_reset\" (click)=\"searchUserForm.reset({})\">\r\n              <span class=\"filter_list\">Reset</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"three wide field text-right mb-1 inner-wrapper\">\r\n            <button (click)=\"addNewUser()\" class=\"ui button primary\">Add new User</button>\r\n          </div>\r\n        </div>\r\n      </form> -->\r\n\r\n<!-- \r\n      <table class=\"ui celled table\">\r\n        <thead class=\"table-head\">\r\n          <tr>\r\n            <th>Organisation</th>\r\n            <th>Role</th>\r\n            <th>Name</th>\r\n            <th>Username</th>\r\n            <th>Email</th>\r\n            <th>Contact Info</th>\r\n            <th width=\"120\">&nbsp;</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tr *ngFor=\"let user of users; let i = index\">\r\n          <td calss=\"table-body word-wrapper\">\r\n            <span class=\"head-name\">Organisation:</span>\r\n            <span>{{ user.organisation ? user.organisation.name : null }}</span>\r\n          </td>\r\n          <td class=\"word-wrapper\"><span class=\"head-name\">Role:</span>\r\n            <span *ngIf=\"user.admin\">Admin</span>\r\n            <span *ngIf=\"user.agent\">Agent</span>\r\n          </td>\r\n          <td class=\"word-wrapper\">\r\n            <span class=\"head-name\">Name</span>\r\n            <span>{{ user.first_name }} {{ user.last_name }}</span></td>\r\n            <td class=\"word-wrapper\">\r\n              <span class=\"head-name\">Username</span>\r\n              <span>{{ user.username }}</span></td>\r\n          <td class=\"word-wrapper\">\r\n            <span class=\"head-name\">Email</span>\r\n            <span>{{ user.email }}</span></td>\r\n          <td class=\"word-wrapper\">\r\n            <span class=\"head-name \">Contact-Info</span>\r\n            <span>{{ user.mobile }}</span></td>\r\n          <td class=\"text-center item-wrapper\">\r\n            <div class=\"ui buttons\">\r\n              <a {{value |date: 'dd/MM/yyyy h:mm a'}}class=\"ui button\"><i\r\n                  class=\"fa fa-edit\"></i></a>\r\n              <a class=\"ui button\" [routerLink]=\"['targets', user.users_id]\" routerLinkActive=\"router-link-active\"><i\r\n                  class=\"fa fa-dollar\"></i></a>\r\n              <button class=\"ui button\"><i class=\"fa fa-trash\"></i></button>\r\n            </div>\r\n\r\n          </td>\r\n        </tr>\r\n\r\n      </table> -->\r\n\r\n      <div class=\"currency-list b2c-list-user-table user-table-list\">\r\n        <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n          [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='usersList'  [reorderable]=\"true\"\r\n          [externalPaging]=\"true\" [count]=\"totalListOfUsers\" \r\n          [sorts]=\"[{prop: 'from', dir: 'desc'}]\"  (page)=\"pageCallback($event)\">\r\n          <ngx-datatable-column name=\"Organisation\" prop=\"organisation\">\r\n            <ng-template ngx-datatable-cell-template let-value=\"value\">{{value.name}}</ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Name\" prop=\"first_name\">\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Username\" prop=\"username\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              <span title=\"Username\" class=\"email\">\r\n                {{row.username}}\r\n              </span>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Date&Time Created\" prop=\"created\">\r\n            <ng-template ngx-datatable-cell-template let-value=\"value\">{{value |date: 'dd/MM/yyyy h:mm a'}}</ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Email\" prop=\"email\">\r\n            <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n              <span class=\"nav-link edit email\" (click)=\"viewUser(row)\" title=\"Preview User\">\r\n                {{row.email}}\r\n                <!-- <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> -->\r\n              </span>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Agent Code\" prop=\"agent_code\">\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Status\" prop=\"is_active\">\r\n            <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\r\n              <span *ngIf=\"value == 1\" (click)=\"statusToggle(row)\">\r\n                <i class=\"fa fa-check-circle\" aria-hidden=\"true\"></i>\r\n                <!-- <i class=\"icon\" title=\"click to deactivate\">\r\n                  <img src=\"./../../../../../assets/icons/checkmark.png\"\r\n                    class=\"bookings_input__placeholder-icon cal\" />\r\n                </i> -->\r\n              </span>\r\n              <span *ngIf=\"value != 1\" (click)=\"statusToggle(row)\">\r\n                <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\r\n                <!-- <i class=\"icon\" title=\"click to activate\">\r\n                  <img src=\"./../../../../../assets/icons/cross.png\" class=\"bookings_input__placeholder-icon call\" />\r\n                </i> -->\r\n              </span>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Action\">\r\n            <ng-template let-value=\"value\" let-row=\"row\" ngx-datatable-cell-template>\r\n              <a  [routerLink]=\"['targets', row.users_id]\" routerLinkActive=\"router-link-active\" title=\"Target User\">\r\n                <i class=\"fa fa-dollar\"></i>\r\n              </a>\r\n              &nbsp;\r\n              <a [routerLink]=\"['edit', row.users_id]\" routerLinkActive=\"router-link-active\" title=\"Edit User\">\r\n                <i class=\"fa fa-edit\"></i>\r\n              </a>\r\n              &nbsp;\r\n              <a class=\"nav-link edit\" (click)=\"deleteUser(row)\" title=\"Delete User\">\r\n                <i class=\"fa fa-trash\"></i>\r\n              </a>\r\n            </ng-template>\r\n          </ngx-datatable-column>\r\n        </ngx-datatable>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/layout/users/user-edit/user-edit.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/layout/users/user-edit/user-edit.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".update-header {\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n}\n\n.ui.fluid.container {\n  padding: 24px;\n}\n\n.outer-basic {\n  padding: 24px;\n  background: #fff;\n  box-shadow: 0 0px 3px rgba(60, 64, 67, 0.3), 0 4px 8px 2px rgba(60, 64, 67, 0.15);\n  border-radius: 4.96141px;\n  margin-top: 24px;\n}\n\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n}\n\n.filter_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.filter_btn_reset {\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.filter_list {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.icon {\n  opacity: 1;\n  z-index: 100;\n}\n\n.icon .corporate_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.icon .corporate_input__placeholder-icon.cal {\n  width: 0px;\n  margin-top: 10px;\n  font-size: 13px;\n}\n\n.icon .corporate_input__placeholder-icon.call {\n  width: 15px;\n  margin-top: 10px;\n  margin-left: 7px;\n}\n\n.icon .corporate_input__placeholder-icon.calll {\n  width: 20px;\n  margin-top: 10px;\n}\n\n.icon .corporate_input__placeholder-icon.ico {\n  width: 15px;\n  margin-top: 10px;\n}\n\n.search-field-wrapper {\n  padding-bottom: 32px;\n}\n\n.text-danger {\n  color: red;\n}\n\n.ui.grid h3 {\n  margin-top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3VzZXJzL3VzZXItZWRpdC9FOlxcQmVsYWxcXHByb2plY3RzXFxwcm9kdWN0aW9uLWJ1aWxkXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHVzZXJzXFx1c2VyLWVkaXRcXHVzZXItZWRpdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3VzZXJzL3VzZXItZWRpdC91c2VyLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlGQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpRkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlGQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREFJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNFUjs7QUREUTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNHWjs7QUREUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDR1o7O0FERFE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNHWjs7QUREUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0daOztBREVBO0VBQ0ksb0JBQUE7QUNDSjs7QURHQTtFQUNJLFVBQUE7QUNBSjs7QURHQTtFQUNJLDBCQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvdXNlcnMvdXNlci1lZGl0L3VzZXItZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGRhdGUtaGVhZGVyIHtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG59XHJcblxyXG4udWkuZmx1aWQuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpYyB7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMHB4IDNweCByZ2JhKDYwLCA2NCwgNjcsIDAuMyksIDAgNHB4IDhweCAycHggcmdiYSg2MCwgNjQsIDY3LCAwLjE1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQuOTYxNDFweDtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpY0Zvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5maWx0ZXJfYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5maWx0ZXJfYnRuX3Jlc2V0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0RjRGNEY7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5maWx0ZXJfbGlzdCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIC5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICAmLmNhbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5jYWxsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuY2FsbGwge1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5pY28ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtZmllbGQtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcclxufVxyXG5cclxuXHJcbi50ZXh0LWRhbmdlciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4udWkuZ3JpZCBoMyB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHggIWltcG9ydGFudDtcclxufSIsIi51cGRhdGUtaGVhZGVyIHtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi51aS5mbHVpZC5jb250YWluZXIge1xuICBwYWRkaW5nOiAyNHB4O1xufVxuXG4ub3V0ZXItYmFzaWMge1xuICBwYWRkaW5nOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDBweCAzcHggcmdiYSg2MCwgNjQsIDY3LCAwLjMpLCAwIDRweCA4cHggMnB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDQuOTYxNDFweDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cblxuLm91dGVyLWJhc2ljRm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5maWx0ZXJfYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5maWx0ZXJfYnRuX3Jlc2V0IHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0RjRGO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5maWx0ZXJfbGlzdCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5pY29uIC5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xuICB3aWR0aDogMjRweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLmljb24gLmNvcnBvcmF0ZV9pbnB1dF9fcGxhY2Vob2xkZXItaWNvbi5jYWwge1xuICB3aWR0aDogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uaWNvbiAuY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbGwge1xuICB3aWR0aDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbn1cbi5pY29uIC5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsbGwge1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5pY29uIC5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uaWNvIHtcbiAgd2lkdGg6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zZWFyY2gtZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xufVxuXG4udGV4dC1kYW5nZXIge1xuICBjb2xvcjogcmVkO1xufVxuXG4udWkuZ3JpZCBoMyB7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/layout/users/user-edit/user-edit.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/users/user-edit/user-edit.component.ts ***!
  \***************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/utils/common */ "./src/app/shared/utils/common.ts");








let UserEditComponent = class UserEditComponent {
    constructor(activeRoute, router, _fb, userService, commonService, toastr) {
        this.activeRoute = activeRoute;
        this.router = router;
        this._fb = _fb;
        this.userService = userService;
        this.commonService = commonService;
        this.toastr = toastr;
        this.formIsSubmitted = false;
        this.displayTargets = false;
        this.displayPermissions = false;
        this.saluteNames = _shared_utils_common__WEBPACK_IMPORTED_MODULE_7__["saluteNames"];
        this.statusRow = _shared_utils_common__WEBPACK_IMPORTED_MODULE_7__["statusRow"];
        this.userId = 0;
        this.userData = {};
        this.userRoles = [];
        this.organizations = [];
        this.organizationBranches = [];
        this.branches = [];
        this.countries = [];
    }
    ngOnInit() {
        this.editUserForm = this.createUserForm(null);
        this.userId = this.activeRoute.snapshot.params.id;
        this.getUser(this.userId);
        this.getCountries();
        this.getRoles();
        this.getOrganizations();
    }
    ngAfterViewInit() {
        $(document).ready(function () {
            $('.ui.dropdown').dropdown();
        });
    }
    btnSubmitHandler() {
        this.formIsSubmitted = true;
        if (this.editUserForm.invalid) {
            this.buildError('Please fill all the required fields.');
            return;
        }
        const data = {
            id: this.userId,
            salute: this.gfc.salute.value,
            first_name: this.gfc.first_name.value,
            last_name: this.gfc.last_name.value,
            sex: this.gfc.gender.value,
            password: this.gfc.password.value,
            initial: this.gfc.initial.value,
            mobile: this.gfc.contact.value,
            email: this.gfc.email.value,
            username: this.gfc.username.value,
            address_1: this.gfc.address1.value,
            address_2: this.gfc.address2.value,
            country_id: this.gfc.country_id.value,
            organisation_id: this.gfc.organisation_id.value || 0,
            selected_permissions: '',
            skills: '',
            is_active: this.gfc.status.value,
            role_id: this.gfc.role_id.value,
            branch_id: this.gfc.branch_id.value,
        };
        this.userService.updateUser(data).subscribe(r => {
            if (r.status) {
                this.displayTargets = true;
                this.userData = r.data;
                this.formIsSubmitted = false;
                this.toastr.success('Profile updated successfully.', 'Success !', {
                    disableTimeOut: false,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
                this.router.navigate(['users']);
            }
            else {
                // this.buildError(r.msg)
                this.toastr.error(`${r.message}`, ``, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        }, (apiError) => {
            this.buildError(apiError.error.message);
        });
    }
    createUserForm(userData) {
        console.log("userdata::::", userData);
        return this._fb.group({
            salute: [userData ? userData.salute : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            first_name: [userData ? userData.first_name : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            last_name: [userData ? userData.last_name : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            role_id: [userData ? userData.role_id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mobile: [userData ? userData.mobile : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            initial: [userData ? userData.initial : null],
            sex: [userData ? userData.sex : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            status: [userData ? userData.is_active : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address_1: [userData ? userData.address_1 : null],
            address_2: [userData ? userData.address_2 : null],
            country_id: [userData ? userData.country_id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            organisation_id: [userData ? userData.organisation_id : null],
            branch_id: [userData ? userData.branch_id : null],
            username: [userData ? userData.username : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [userData ? userData.email : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            cpassword: [null,],
        }, {
            validator: this.passwordMatchValidator
        });
    }
    get gfc() { return this.editUserForm.controls; }
    ;
    passwordMatchValidator(control) {
        const password = control.get('password').value; // get password from our password form control
        const confirmPassword = control.get('cpassword').value; // get password from our confirmPassword form control
        // compare is the password math
        if (password !== confirmPassword) {
            // if they don't match, set an error in our confirmPassword form control
            control.get('cpassword').setErrors({ NoPassswordMatch: true });
        }
    }
    buildError(message) {
        this.toastr.error(message, 'Server Error !', {
            disableTimeOut: false,
            progressBar: false,
            positionClass: 'toast-bottom-right'
        });
    }
    getUser(userId) {
        this.userService.fetchUser(userId).subscribe(r => {
            if (r.status == 200) {
                this.userData = r.data;
                this.getOrgBranches(this.userData.organisation_id);
                this.editUserForm = this.createUserForm(this.userData);
                // console.log(this.userData)
            }
            else {
                this.buildError(r.msg);
            }
        }, (apiError) => {
            this.buildError(apiError.error.message);
        });
    }
    getCountries() {
        this.commonService.getCountryList().subscribe((result) => {
            this.countries = result.countries;
        });
    }
    getRoles() {
        this.userService.fetchRoles().subscribe(r => {
            if (r.status == 200) {
                this.userRoles = r.data;
            }
            else {
                this.buildError(r.msg);
            }
        }, (apiError) => {
            this.buildError(apiError.error.message);
        });
    }
    getOrganizations() {
        this.userService.fetchOrganizations().subscribe(r => {
            if (r.status == 200) {
                // console.log(r.Organization);
                // r.Organization.forEach( org => {
                //   this.organizations.push(org);
                //   org.branches.forEach( (branch, i) => {
                //     this.branches[org.organisation_id].push(branch);
                //   })
                // })
                this.organizations = r.Organization;
            }
            else {
                this.buildError(r.msg);
            }
        }, (apiError) => {
            this.buildError(apiError.error.message);
        });
    }
    getOrgBranches(id) {
        this.organizationBranches = null;
        this.commonService.getOrgBranches(id).subscribe((r) => {
            if (r.type == 'data') {
                this.organizationBranches = r.Organization;
            }
        });
    }
    loadTargets() {
        this.router.navigate(['users/targets', this.userId]);
    }
    loadPermission() {
        this.router.navigate(['users/permissions', this.userId]);
    }
    cancel() {
        this.router.navigateByUrl('users');
    }
};
UserEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }
];
UserEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/users/user-edit/user-edit.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-edit.component.scss */ "./src/app/layout/users/user-edit/user-edit.component.scss")).default]
    })
], UserEditComponent);



/***/ }),

/***/ "./src/app/layout/users/user-new/user-new.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/users/user-new/user-new.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".update-header {\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 400;\n  line-height: 22px;\n}\n\n.ui.fluid.container {\n  padding: 24px;\n}\n\n.outer-basic {\n  padding: 24px;\n  background: #fff;\n  box-shadow: 0 0px 3px rgba(60, 64, 67, 0.3), 0 4px 8px 2px rgba(60, 64, 67, 0.15);\n  border-radius: 4.96141px;\n  margin-top: 24px;\n}\n\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n}\n\n.basic-header {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.text-danger {\n  color: red;\n}\n\n.btn-wrapper {\n  text-align: right;\n  margin-top: 24px;\n}\n\n.ui.grid h3 {\n  margin-top: 0px !important;\n}\n\n@media (max-width: 1280px) {\n  .ui.form .ui.grid .personal-wrapper {\n    display: block;\n  }\n  .ui.form .ui.grid .field-wrapper {\n    display: inline-block;\n    width: 33.3% !important;\n  }\n}\n\n@media (max-width: 1220px) {\n  .ui.form .ui.grid .personal-wrapper {\n    display: block;\n  }\n  .ui.form .ui.grid .field-wrapper {\n    display: inline-block;\n    width: 48.3% !important;\n  }\n  .ui.form .ui.grid .user-wrapper {\n    display: block;\n  }\n  .ui.form .ui.grid .login-wrapper {\n    display: inline-block;\n    width: 100% !important;\n  }\n}\n\n@media (max-width: 850px) {\n  .ui.form .main-wrapper {\n    display: block;\n  }\n  .ui.form .outer-wrapper {\n    display: block;\n    width: 100% !important;\n  }\n  .ui.form .inner-wrapper {\n    display: block;\n    width: 100% !important;\n  }\n}\n\n@media (max-width: 700px) {\n  .ui.form .main-wrapper {\n    display: block;\n  }\n  .ui.form .outer-wrapper {\n    display: block;\n    width: 100% !important;\n  }\n  .ui.form .inner-wrapper {\n    display: block;\n    width: 100% !important;\n  }\n  .ui.form .ui.grid .first-wrapper {\n    display: block;\n  }\n  .ui.form .ui.grid .second-wrapper {\n    display: inline-block;\n    width: 100% !important;\n  }\n  .ui.form .ui.grid .personal-wrapper {\n    display: block;\n  }\n  .ui.form .ui.grid .field-wrapper {\n    display: inline-block;\n    width: 100% !important;\n  }\n  .ui.form .ui.grid .user-wrapper {\n    display: block;\n  }\n  .ui.form .ui.grid .login-wrapper {\n    display: inline-block;\n    width: 100% !important;\n  }\n}\n\n.validations {\n  color: red;\n  font-size: x-small;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3VzZXJzL3VzZXItbmV3L0U6XFxCZWxhbFxccHJvamVjdHNcXHByb2R1Y3Rpb24tYnVpbGRcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcdXNlcnNcXHVzZXItbmV3XFx1c2VyLW5ldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3VzZXJzL3VzZXItbmV3L3VzZXItbmV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpRkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0o7O0FERUE7RUFDSSxpQ0FBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKOztBRE9BO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0pKOztBRE9BO0VBQ0ksMEJBQUE7QUNKSjs7QURPQTtFQUlRO0lBQ0ksY0FBQTtFQ1BWO0VEU1E7SUFDSSxxQkFBQTtJQUNBLHVCQUFBO0VDUFo7QUFDRjs7QURhQTtFQUlRO0lBQ0ksY0FBQTtFQ2RWO0VEZ0JRO0lBQ0kscUJBQUE7SUFDQSx1QkFBQTtFQ2RaO0VEZ0JRO0lBQ0UsY0FBQTtFQ2RWO0VEZ0JRO0lBQ0UscUJBQUE7SUFDRSxzQkFBQTtFQ2RaO0FBQ0Y7O0FEbUJBO0VBRVE7SUFDSSxjQUFBO0VDbEJWO0VEb0JNO0lBQ0ksY0FBQTtJQUNBLHNCQUFBO0VDbEJWO0VEb0JNO0lBQ0ksY0FBQTtJQUNBLHNCQUFBO0VDbEJWO0FBQ0Y7O0FEdUJBO0VBR1E7SUFDSSxjQUFBO0VDdkJWO0VEeUJNO0lBQ0ksY0FBQTtJQUNBLHNCQUFBO0VDdkJWO0VEeUJNO0lBQ0ksY0FBQTtJQUNBLHNCQUFBO0VDdkJWO0VEMEJVO0lBQ0ksY0FBQTtFQ3hCZDtFRDBCWTtJQUNJLHFCQUFBO0lBQ0Esc0JBQUE7RUN4QmhCO0VEMEJTO0lBQ0MsY0FBQTtFQ3hCVjtFRDBCUTtJQUNJLHFCQUFBO0lBQ0Esc0JBQUE7RUN4Qlo7RUQwQlE7SUFDRSxjQUFBO0VDeEJWO0VEMEJRO0lBQ0UscUJBQUE7SUFDRSxzQkFBQTtFQ3hCWjtBQUNGOztBRDZCQTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQzNCSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC91c2Vycy91c2VyLW5ldy91c2VyLW5ldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGRhdGUtaGVhZGVyIHtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG59XHJcblxyXG4udWkuZmx1aWQuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpYyB7XHJcbiAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJveC1zaGFkb3c6IDAgMHB4IDNweCByZ2JhKDYwLCA2NCwgNjcsIDAuMyksIDAgNHB4IDhweCAycHggcmdiYSg2MCwgNjQsIDY3LCAwLjE1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQuOTYxNDFweDtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpY0Zvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5iYXNpYy1oZWFkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udGV4dC1kYW5nZXIge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLy8gLnVpLnByaW1hcnkucm9sZUFjdGlvbkJ1dHRvbi5idXR0b24ge1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgdG9wOiAtNDBweDtcclxuLy8gfVxyXG5cclxuLmJ0bi13cmFwcGVyIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxufVxyXG5cclxuLnVpLmdyaWQgaDMge1xyXG4gICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjEyODBweClcclxue1xyXG4gICAgLnVpLmZvcm17XHJcbiAgICAgICAgLnVpLmdyaWR7XHJcbiAgICAgICAgLnBlcnNvbmFsLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZmllbGQtd3JhcHBlcntcclxuICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICB3aWR0aDozMy4zJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjEyMjBweClcclxue1xyXG4gICAgLnVpLmZvcm17XHJcbiAgICAgICAgLnVpLmdyaWR7XHJcbiAgICAgICAgLnBlcnNvbmFsLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuZmllbGQtd3JhcHBlcntcclxuICAgICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICB3aWR0aDo0OC4zJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnVzZXItd3JhcHBlcntcclxuICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5sb2dpbi13cmFwcGVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOjg1MHB4KXtcclxuICAgIC51aS5mb3Jte1xyXG4gICAgICAgIC5tYWluLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vdXRlci13cmFwcGVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbm5lci13cmFwcGVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlICAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOjcwMHB4KVxyXG57XHJcbiAgICAudWkuZm9ybXtcclxuICAgICAgICAubWFpbi13cmFwcGVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3V0ZXItd3JhcHBlcntcclxuICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5uZXItd3JhcHBlcntcclxuICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudWkuZ3JpZHtcclxuICAgICAgICAgICAgLmZpcnN0LXdyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAuc2Vjb25kLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICB3aWR0aDoxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIC5wZXJzb25hbC13cmFwcGVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgIC5maWVsZC13cmFwcGVye1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC51c2VyLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubG9naW4td3JhcHBlcntcclxuICAgICAgICAgICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnZhbGlkYXRpb25zIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbn0iLCIudXBkYXRlLWhlYWRlciB7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xufVxuXG4udWkuZmx1aWQuY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjRweDtcbn1cblxuLm91dGVyLWJhc2ljIHtcbiAgcGFkZGluZzogMjRweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAwcHggM3B4IHJnYmEoNjAsIDY0LCA2NywgMC4zKSwgMCA0cHggOHB4IDJweCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpO1xuICBib3JkZXItcmFkaXVzOiA0Ljk2MTQxcHg7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbi5vdXRlci1iYXNpY0Zvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uYmFzaWMtaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi50ZXh0LWRhbmdlciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5idG4td3JhcHBlciB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4udWkuZ3JpZCBoMyB7XG4gIG1hcmdpbi10b3A6IDBweCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC51aS5mb3JtIC51aS5ncmlkIC5wZXJzb25hbC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAudWkuZm9ybSAudWkuZ3JpZCAuZmllbGQtd3JhcHBlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAzMy4zJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gIC51aS5mb3JtIC51aS5ncmlkIC5wZXJzb25hbC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAudWkuZm9ybSAudWkuZ3JpZCAuZmllbGQtd3JhcHBlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiA0OC4zJSAhaW1wb3J0YW50O1xuICB9XG4gIC51aS5mb3JtIC51aS5ncmlkIC51c2VyLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC51aS5mb3JtIC51aS5ncmlkIC5sb2dpbi13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIC51aS5mb3JtIC5tYWluLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC51aS5mb3JtIC5vdXRlci13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC51aS5mb3JtIC5pbm5lci13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgLnVpLmZvcm0gLm1haW4td3JhcHBlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnVpLmZvcm0gLm91dGVyLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnVpLmZvcm0gLmlubmVyLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnVpLmZvcm0gLnVpLmdyaWQgLmZpcnN0LXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC51aS5mb3JtIC51aS5ncmlkIC5zZWNvbmQtd3JhcHBlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnVpLmZvcm0gLnVpLmdyaWQgLnBlcnNvbmFsLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIC51aS5mb3JtIC51aS5ncmlkIC5maWVsZC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuICAudWkuZm9ybSAudWkuZ3JpZCAudXNlci13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICAudWkuZm9ybSAudWkuZ3JpZCAubG9naW4td3JhcHBlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi52YWxpZGF0aW9ucyB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/layout/users/user-new/user-new.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/users/user-new/user-new.component.ts ***!
  \*************************************************************/
/*! exports provided: UserNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserNewComponent", function() { return UserNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/utils/common */ "./src/app/shared/utils/common.ts");
/* harmony import */ var src_app_shared_services_pos_service_pos_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/pos-service/pos-service */ "./src/app/shared/services/pos-service/pos-service.ts");









let UserNewComponent = class UserNewComponent {
    constructor(router, _fb, userService, commonService, toastr, posService) {
        this.router = router;
        this._fb = _fb;
        this.userService = userService;
        this.commonService = commonService;
        this.toastr = toastr;
        this.posService = posService;
        this.userRoles = [];
        this.organizations = [];
        this.organizationBranches = [];
        this.countries = [];
        this.branches = [];
        this.formIsSubmitted = false;
        this.saluteNames = _shared_utils_common__WEBPACK_IMPORTED_MODULE_7__["saluteNames"];
        this.statusRow = _shared_utils_common__WEBPACK_IMPORTED_MODULE_7__["statusRow"];
    }
    ngOnInit() {
        this.newUserForm = this.createUserForm();
        this.getCountries();
        this.getRoles();
        this.getOrganizations();
    }
    ngAfterViewInit() {
        $(document).ready(function () {
            ($('.ui.dropdown')).dropdown();
        });
    }
    btnSubmitHandler() {
        this.formIsSubmitted = true;
        if (this.newUserForm.invalid) {
            return;
        }
        // const data = {
        //   saluation: this.gfc.saluation.value,
        //   first_name: this.gfc.first_name.value,
        //   last_name: this.gfc.last_name.value,
        //   sex: this.gfc.gender.value,
        //   password: this.gfc.password.value,
        //   initial: this.gfc.initial.value,
        //   mobile: this.gfc.contact.value,
        //   email: this.gfc.email.value,
        //   username: this.gfc.username.value,
        //   address_1: this.gfc.address1.value,
        //   address_2: this.gfc.address2.value,
        //   country_id: this.gfc.country_id.value,
        //   organisation_id: this.gfc.organisation_id.value || 0,
        //   selected_permissions: '',
        //   skills: '',
        //   is_active: this.gfc.status.value,
        //   role_id: this.gfc.role_id.value,
        //   branch_id: this.gfc.branch_id.value,
        // };
        this.userService.createUser(this.newUserForm.value).subscribe(r => {
            if (r.status) {
                this.toastr.success(r.msg, '', {
                    disableTimeOut: false,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
                this.formIsSubmitted = false;
                this.router.navigate(['users']);
            }
            else {
                // this.buildError(r.msg);
                this.toastr.error(`${r.message}`, ``, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        }, (apiError) => {
            this.buildError(apiError.error.message);
        });
    }
    createUserForm() {
        return this._fb.group({
            saluation: ['Mr.'],
            first_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            last_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            role_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mobile: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            initial: [null],
            sex: [''],
            is_active: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address_1: [null],
            address_2: [null],
            country_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            organisation_id: ['', null],
            username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9]+$')]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9._&%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            // password: [null, [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&]{6,}$')]],
            cpassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            branch_id: [null],
        }, {
            validator: this.passwordMatchValidator
        });
    }
    get gfc() { return this.newUserForm.controls; }
    ;
    get password() { return this.newUserForm.get('password'); }
    get cpassword() { return this.newUserForm.get('cpassword'); }
    passwordMatchValidator(control) {
        const password = control.get('password').value; // get password from our password form control
        const confirmPassword = control.get('cpassword').value; // get password from our confirmPassword form control
        // compare is the password math
        if (password !== confirmPassword) {
            // if they don't match, set an error in our confirmPassword form control
            control.get('cpassword').setErrors({ NoPassswordMatch: true });
        }
    }
    getCountries() {
        this.commonService.getCountryList().subscribe((result) => {
            this.countries = result.countries;
        });
    }
    getRoles() {
        this.userService.fetchRoles().subscribe(r => {
            if (r.status == 200) {
                this.userRoles = r.data;
            }
            else {
                this.buildError(r.msg);
            }
        }, (apiError) => {
            this.buildError(apiError.error.message);
        });
    }
    getOrganizations() {
        this.userService.fetchOrganizations().subscribe(r => {
            if (r.status == 200) {
                this.organizations = r.Organization;
            }
            else {
                this.buildError(r.msg);
            }
        }, (apiError) => {
            this.buildError(apiError.error.message);
        });
    }
    getOrgBranches(id) {
        this.posService.fetchAllBranches(id).subscribe((result) => {
            if (result.status) {
                this.branches = result.result.data;
            }
            else {
                this.toastr.error(`${result.message}`, ``, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-top-right'
                });
            }
        });
    }
    validatePassword() {
        const { password, cpassword } = this;
        if (!cpassword.dirty) {
            return;
        }
        const hasError = password.value !== cpassword.value;
        if (cpassword.errors) {
            if (hasError) {
                cpassword.errors.unmatched = true;
            }
            else {
                delete cpassword.errors.unmatched;
                if (Object.keys(cpassword.errors).length === 0) {
                    cpassword.setErrors(null);
                }
            }
        }
        else if (hasError) {
            cpassword.setErrors({ unmatched: true });
        }
    }
    buildError(message) {
        this.toastr.error(message, 'Server Error !', {
            disableTimeOut: false,
            progressBar: false,
            positionClass: 'toast-bottom-right'
        });
    }
};
UserNewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] },
    { type: src_app_shared_services_pos_service_pos_service__WEBPACK_IMPORTED_MODULE_8__["PosService"] }
];
UserNewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-new',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-new.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/users/user-new/user-new.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-new.component.scss */ "./src/app/layout/users/user-new/user-new.component.scss")).default]
    })
], UserNewComponent);



/***/ }),

/***/ "./src/app/layout/users/user-targets/user-targets.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/layout/users/user-targets/user-targets.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".update-header {\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n}\n\n.ui.fluid.container {\n  padding: 25px;\n}\n\n.outer-basic {\n  background: #fff;\n  padding: 24px;\n  margin: 24px 0px;\n  box-shadow: 0 1px 3px rgba(60, 64, 67, 0.3), 0 4px 8px 3px rgba(60, 64, 67, 0.15) !important;\n  border-radius: 4.96141px;\n}\n\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n}\n\n.basic-header {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.text-danger {\n  color: red;\n}\n\n.ui.button.add-btn {\n  margin-top: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3VzZXJzL3VzZXItdGFyZ2V0cy9FOlxcQmVsYWxcXHByb2plY3RzXFxwcm9kdWN0aW9uLWJ1aWxkXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHVzZXJzXFx1c2VyLXRhcmdldHNcXHVzZXItdGFyZ2V0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3VzZXJzL3VzZXItdGFyZ2V0cy91c2VyLXRhcmdldHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURHQTtFQUNJLGFBQUE7QUNBSjs7QURHQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEZBQUE7RUFDQSx3QkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNBSjs7QURJQTtFQUNJLGlDQUFBO0FDREo7O0FESUE7RUFDSSxVQUFBO0FDREo7O0FESUE7RUFDSSxnQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3VzZXJzL3VzZXItdGFyZ2V0cy91c2VyLXRhcmdldHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBkYXRlLWhlYWRlciB7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4udWkuZmx1aWQuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpYyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMjRweDtcclxuICAgIG1hcmdpbjogMjRweCAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSg2MCwgNjQsIDY3LCAwLjMpLCAwIDRweCA4cHggM3B4IHJnYmEoNjAsIDY0LCA2NywgMC4xNSkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQuOTYxNDFweDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljRm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC8vIHBhZGRpbmc6IDMwcHggMTVweDtcclxufVxyXG5cclxuLmJhc2ljLWhlYWRlciB7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi50ZXh0LWRhbmdlciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4udWkuYnV0dG9uLmFkZC1idG4ge1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxufSIsIi51cGRhdGUtaGVhZGVyIHtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi51aS5mbHVpZC5jb250YWluZXIge1xuICBwYWRkaW5nOiAyNXB4O1xufVxuXG4ub3V0ZXItYmFzaWMge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAyNHB4O1xuICBtYXJnaW46IDI0cHggMHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSg2MCwgNjQsIDY3LCAwLjMpLCAwIDRweCA4cHggM3B4IHJnYmEoNjAsIDY0LCA2NywgMC4xNSkgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNC45NjE0MXB4O1xufVxuXG4ub3V0ZXItYmFzaWNGb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmJhc2ljLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG4udGV4dC1kYW5nZXIge1xuICBjb2xvcjogcmVkO1xufVxuXG4udWkuYnV0dG9uLmFkZC1idG4ge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/layout/users/user-targets/user-targets.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/users/user-targets/user-targets.component.ts ***!
  \*********************************************************************/
/*! exports provided: UserTargetsComponent, Month */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTargetsComponent", function() { return UserTargetsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Month", function() { return Month; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");






let UserTargetsComponent = class UserTargetsComponent {
    constructor(_fb, userService, toastr, activatedRoute, router) {
        this._fb = _fb;
        this.userService = userService;
        this.toastr = toastr;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.months = [];
        this.monthSplice = [];
        this.userId = 0;
        this.yearsList = [];
        this.monthsList = [
            new Month(1, 'January'),
            new Month(2, 'February'),
            new Month(3, 'March'),
            new Month(4, 'April'),
            new Month(5, 'May'),
            new Month(6, 'June'),
            new Month(7, 'July'),
            new Month(8, 'August'),
            new Month(9, 'September'),
            new Month(10, 'October'),
            new Month(11, 'November'),
            new Month(12, 'December')
        ];
        this.currentYear = new Date().getFullYear();
        this.currentMonth = new Date().getMonth() + 1;
    }
    ngOnInit() {
        this.userId = this.activatedRoute.snapshot.params.id;
        this.getUser(this.userId);
        this.userTargetForm = this._fb.group({
            targets: this._fb.array([this.createUserTargetForm()])
        });
        for (let y = this.currentYear; y <= (this.currentYear + 5); y++) {
            this.yearsList.push(y);
        }
        this.months = this.monthsList;
    }
    get getTargetArray() {
        return this.userTargetForm.get('targets');
    }
    getUser(userId) {
        this.userService.fetchUser(userId).subscribe(r => {
            if (r.status == 200) {
                let target_amount = JSON.parse(r.data.target_amount);
                if (target_amount) {
                    this.getTargetArray.removeAt(0);
                    target_amount.forEach((x) => {
                        this.getTargetArray.push(this._fb.group(x));
                    });
                }
                else {
                    target_amount.forEach((x) => {
                        this.getTargetArray.push(this._fb.group(x));
                    });
                }
            }
            else {
                this.buildError(r.msg);
            }
        }, (apiError) => {
            this.buildError(apiError.error.message);
        });
    }
    btnSubmitHandler() {
        const targets = JSON.stringify({
            user_id: this.activatedRoute.snapshot.params.id,
            targets: this.userTargetForm.value.targets
        });
        this.userService.saveTargets(targets).subscribe(r => {
            if (r.status) {
                this.toastr.success(r.message, 'Success !', {
                    disableTimeOut: false,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
                this.router.navigate(['/users']);
            }
            else {
                this.buildError(r.msg);
            }
        }, (apiError) => {
            this.buildError(apiError.error.message);
        });
        console.log(targets);
        return false;
    }
    createUserTargetForm() {
        return this._fb.group({
            year: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            month: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    btnAddTarget() {
        this.getTargetArray.push(this.createUserTargetForm());
    }
    btnRemoveTarget(index) {
        if (index > 0)
            this.getTargetArray.removeAt(index);
    }
    get gfc() { return this.userTargetForm.controls; }
    ;
    buildError(message) {
        this.toastr.error(message, 'Server Error !', {
            disableTimeOut: false,
            progressBar: false,
            positionClass: 'toast-bottom-right'
        });
    }
    selectYear(event) {
        if (event == this.currentYear) {
            this.monthSplice = this.monthsList;
            this.months = this.monthSplice.slice(this.currentMonth - 1, 12);
        }
        else {
            this.months = this.monthsList;
        }
    }
    cancel() {
        this.router.navigateByUrl('users');
    }
};
UserTargetsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UserTargetsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-targets',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-targets.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/users/user-targets/user-targets.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-targets.component.scss */ "./src/app/layout/users/user-targets/user-targets.component.scss")).default]
    })
], UserTargetsComponent);

class Month {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}


/***/ }),

/***/ "./src/app/layout/users/users-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/layout/users/users-routing.module.ts ***!
  \******************************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users.component */ "./src/app/layout/users/users.component.ts");
/* harmony import */ var _user_new_user_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-new/user-new.component */ "./src/app/layout/users/user-new/user-new.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/layout/users/user-edit/user-edit.component.ts");
/* harmony import */ var _user_targets_user_targets_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-targets/user-targets.component */ "./src/app/layout/users/user-targets/user-targets.component.ts");







const routes = [
    {
        path: '',
        component: _users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
    },
    {
        path: 'new',
        component: _user_new_user_new_component__WEBPACK_IMPORTED_MODULE_4__["UserNewComponent"],
    },
    {
        path: 'edit/:id',
        component: _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_5__["UserEditComponent"],
    },
    {
        path: 'targets/:id',
        component: _user_targets_user_targets_component__WEBPACK_IMPORTED_MODULE_6__["UserTargetsComponent"],
    },
];
let UsersRoutingModule = class UsersRoutingModule {
};
UsersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UsersRoutingModule);



/***/ }),

/***/ "./src/app/layout/users/users.component.scss":
/*!***************************************************!*\
  !*** ./src/app/layout/users/users.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".update-header {\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n  margin-left: 24px;\n}\n\nh3 {\n  margin-top: 24px;\n}\n\n.ui.fluid.container {\n  padding: 24px !important;\n}\n\n.outer-basic {\n  padding: 24px;\n  background: #fff;\n  box-shadow: 0 0px 3px rgba(60, 64, 67, 0.3), 0 4px 8px 2px rgba(60, 64, 67, 0.15);\n  border-radius: 4.96141px;\n}\n\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n}\n\n.filter_btn {\n  border-radius: 3px;\n  background-color: #437ADA;\n  margin-right: 12px;\n}\n\n.filter_btn_reset {\n  border-radius: 3px;\n  background-color: #cacbcd;\n}\n\n.filter_list {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.icon {\n  opacity: 1;\n  z-index: 100;\n}\n\n.icon .corporate_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.icon .corporate_input__placeholder-icon.cal {\n  width: 0px;\n  margin-top: 10px;\n  font-size: 13px;\n}\n\n.icon .corporate_input__placeholder-icon.call {\n  width: 15px;\n  margin-top: 10px;\n  margin-left: 7px;\n}\n\n.icon .corporate_input__placeholder-icon.calll {\n  width: 20px;\n  margin-top: 10px;\n}\n\n.icon .corporate_input__placeholder-icon.ico {\n  width: 15px;\n  margin-top: 10px;\n}\n\n.search-field-wrapper {\n  padding-bottom: 12px;\n}\n\n.ui.table.thead.th {\n  font-style: #4f4f4f !important;\n}\n\n.ui.table {\n  font-size: 12px !important;\n}\n\n@media (min-width: 1070px) {\n  td span.head-name {\n    display: none;\n  }\n}\n\n@media (max-width: 1070px) {\n  .ui.table:not(.unstackable) {\n    padding: 0;\n    width: 100%;\n  }\n  .ui.table:not(.unstackable) thead, .ui.table:not(.unstackable) tbody {\n    display: inline-block !important;\n    width: 50% !important;\n  }\n  .ui.table:not(.unstackable) thead {\n    border-right: 1px solid rgba(0, 0, 0, 0.1);\n  }\n  .ui.table:not(.unstackable) tr {\n    padding-top: 1em;\n    padding-bottom: 1em;\n    box-shadow: none !important;\n  }\n  .ui.table:not(.unstackable) tr, .ui.table:not(.unstackable) tr > td, .ui.table:not(.unstackable) tr > th {\n    width: auto !important;\n    display: block !important;\n  }\n  .ui.table:not(.unstackable) tr > td, .ui.table:not(.unstackable) tr > th {\n    background: 0 0;\n    border: none !important;\n    padding: 0.25em 0.75em !important;\n    box-shadow: none !important;\n  }\n  .ui.table:not(.unstackable) td span.head-name {\n    display: inline;\n    font-weight: 700;\n    margin-right: 8px;\n  }\n  .ui.table:not(.unstackable) thead {\n    display: none !important;\n  }\n  .ui.table:not(.unstackable) td.item-wrapper {\n    text-align: left !important;\n  }\n\n  .ui.form .main-wrapper {\n    display: block;\n  }\n  .ui.form .outer-wrapper {\n    display: inline-flex;\n    width: 50% !important;\n    margin-bottom: 10px;\n  }\n  .ui.form .inner-wrapper {\n    display: inline-block;\n    width: 100% !important;\n  }\n}\n\n@media (min-width: 415px) {\n  td span.head-name {\n    display: none;\n  }\n}\n\n@media (max-width: 415px) {\n  .ui.table:not(.unstackable) tbody {\n    width: 100% !important;\n  }\n  .ui.table:not(.unstackable) tbody tr td span {\n    display: inline-block;\n    width: 50% !important;\n  }\n  .ui.table:not(.unstackable) tbody tr td span:first-child {\n    font-weight: 700;\n  }\n  .ui.table:not(.unstackable) thead {\n    display: none !important;\n  }\n  .ui.table:not(.unstackable) thead {\n    display: none !important;\n  }\n  .ui.table:not(.unstackable) td.word-wrapper {\n    word-break: break-word;\n  }\n  .ui.table:not(.unstackable) td.item-wrapper {\n    text-align: left !important;\n  }\n\n  .ui.form .main-wrapper {\n    display: block;\n  }\n  .ui.form .outer-wrapper {\n    display: inline-flex;\n    width: 50% !important;\n    margin-bottom: 10px;\n  }\n  .ui.form .inner-wrapper {\n    display: inline-flex;\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3VzZXJzL0U6XFxCZWxhbFxccHJvamVjdHNcXHByb2R1Y3Rpb24tYnVpbGRcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcdXNlcnNcXHVzZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpRkFBQTtFQUNBLHdCQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ0FKOztBRENJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNDUjs7QURBUTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNFWjs7QURBUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDRVo7O0FEQVE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNFWjs7QURBUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0VaOztBREdBO0VBQ0ksb0JBQUE7QUNBSjs7QURJSTtFQUNJLDhCQUFBO0FDRFI7O0FES0k7RUFDSSwwQkFBQTtBQ0ZSOztBREtJO0VBRVE7SUFDSSxhQUFBO0VDSGQ7QUFDRjs7QURPRztFQUVFO0lBQ0csVUFBQTtJQUNBLFdBQUE7RUNOTjtFRE9NO0lBQ0ksZ0NBQUE7SUFDQSxxQkFBQTtFQ0xWO0VET007SUFDSSwwQ0FBQTtFQ0xWO0VET007SUFDSSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EsMkJBQUE7RUNMVjtFRE9NO0lBQ0ksc0JBQUE7SUFDQSx5QkFBQTtFQ0xWO0VET007SUFDSSxlQUFBO0lBQ0EsdUJBQUE7SUFDQSxpQ0FBQTtJQUNBLDJCQUFBO0VDTFY7RURRVTtJQUNJLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0VDTmQ7RURTTTtJQUNJLHdCQUFBO0VDUFY7RURVTTtJQUNJLDJCQUFBO0VDUlY7O0VEYU07SUFDSSxjQUFBO0VDVlY7RURZTTtJQUVJLG9CQUFBO0lBQ0EscUJBQUE7SUFDQSxtQkFBQTtFQ1hWO0VEYU07SUFDSSxxQkFBQTtJQUNBLHNCQUFBO0VDWFY7QUFDRjs7QURlQTtFQUVRO0lBQ0ksYUFBQTtFQ2RWO0FBQ0Y7O0FEa0JBO0VBRVE7SUFDSSxzQkFBQTtFQ2pCVjtFRGtCVTtJQUNJLHFCQUFBO0lBQ0EscUJBQUE7RUNoQmQ7RURrQlU7SUFDSSxnQkFBQTtFQ2hCZDtFRG1CTTtJQUNJLHdCQUFBO0VDakJWO0VEcURLO0lBQ0ksd0JBQUE7RUNuRFQ7RURzREs7SUFDSSxzQkFBQTtFQ3BEVDtFRHVESztJQUNJLDJCQUFBO0VDckRUOztFRDBESztJQUNJLGNBQUE7RUN2RFQ7RUR5REs7SUFFSSxvQkFBQTtJQUNBLHFCQUFBO0lBQ0EsbUJBQUE7RUN4RFQ7RUQwREs7SUFDSSxvQkFBQTtJQUNBLHNCQUFBO0VDeERUO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBkYXRlLWhlYWRlciB7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG59XHJcblxyXG4udWkuZmx1aWQuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDI0cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljIHtcclxuICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAwcHggM3B4IHJnYmEoNjAsIDY0LCA2NywgMC4zKSwgMCA0cHggOHB4IDJweCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNC45NjE0MXB4O1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWNGb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgLy8gcGFkZGluZzogNTBweDtcclxufVxyXG5cclxuLmZpbHRlcl9idG4ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQzN0FEQTtcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxufVxyXG5cclxuLmZpbHRlcl9idG5fcmVzZXQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojY2FjYmNkO1xyXG59XHJcblxyXG4uZmlsdGVyX2xpc3Qge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAuY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgJi5jYWwge1xyXG4gICAgICAgICAgICB3aWR0aDogMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuY2FsbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmNhbGxsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuaWNvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2VhcmNoLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcblxyXG4gICAgLnVpLnRhYmxlLnRoZWFkLnRoe1xyXG4gICAgICAgIGZvbnQtc3R5bGU6ICM0ZjRmNGYgICFpbXBvcnRhbnQ7XHJcbiAgICAgICB9XHJcblxyXG4gICAgXHJcbiAgICAudWkudGFibGV7XHJcbiAgICAgICAgZm9udC1zaXplOjEycHggIWltcG9ydGFudDtcclxuICAgICAgIH1cclxuXHJcbiAgICBAbWVkaWEobWluLXdpZHRoOjEwNzBweCl7XHJcbiAgICAgICAgdGQge1xyXG4gICAgICAgICAgICBzcGFuLmhlYWQtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgQG1lZGlhKG1heC13aWR0aDoxMDcwcHgpe1xyXG5cclxuICAgICAudWkudGFibGU6bm90KC51bnN0YWNrYWJsZSkge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGhlYWQsIHRib2R5IHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhlYWQge1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDFlbTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ciwgdHI+dGQsIHRyPnRoIHtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHI+dGQsIHRyPnRoIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogMCAwO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgcGFkZGluZzogLjI1ZW0gLjc1ZW0gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZCB7XHJcbiAgICAgICAgICAgIHNwYW4uaGVhZC1uYW1lIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGVhZCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRkLml0ZW0td3JhcHBlcntcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgXHJcbiAgICAudWkuZm9ybXtcclxuICAgICAgICAubWFpbi13cmFwcGVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAub3V0ZXItd3JhcHBlcntcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbm5lci13cmFwcGVye1xyXG4gICAgICAgICAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDo0MTVweCl7XHJcbiAgICB0ZCB7XHJcbiAgICAgICAgc3Bhbi5oZWFkLW5hbWUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDo0MTVweCl7XHJcbiAgIC51aS50YWJsZTpub3QoLnVuc3RhY2thYmxlKSB7XHJcbiAgICAgICAgdGJvZHkge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB0ciB0ZCBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ciB0ZCBzcGFuOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhlYWQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAvLyAudWkudGFibGU6bm90KC51bnN0YWNrYWJsZSkge1xyXG4gICAgLy8gICAgcGFkZGluZzogMDtcclxuICAgIC8vICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gICAgbWFyZ2luLWxlZnQ6IC04cHg7XHJcbiAgICAvLyAgICB0aGVhZCwgdGJvZHkge1xyXG4gICAgLy8gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xyXG4gICAgLy8gICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuICAgIC8vICAgIH1cclxuICAgIC8vICAgIHRoZWFkIHtcclxuICAgIC8vICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAvLyAgICB9XHJcbiAgICAvLyAgICB0ciB7XHJcbiAgICAvLyAgICAgICAgcGFkZGluZy10b3A6IDFlbTtcclxuICAgIC8vICAgICAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gICAgLy8gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIC8vICAgIH1cclxuICAgIC8vICAgIHRyLCB0cj50ZCwgdHI+dGgge1xyXG4gICAgLy8gICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAvLyAgICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIC8vICAgIH1cclxuICAgIC8vICAgIHRyPnRkLCB0cj50aCB7XHJcbiAgICAvLyAgICAgICAgYmFja2dyb3VuZDogMCAwO1xyXG4gICAgLy8gICAgICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLy8gICAgICAgIHBhZGRpbmc6IC4yNWVtIC43NWVtICFpbXBvcnRhbnQ7XHJcbiAgICAvLyAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgLy8gICAgfVxyXG4gICAgLy8gICAgdGQge1xyXG4gICAgLy8gICAgICAgIHNwYW4uaGVhZC1uYW1lIHtcclxuICAgIC8vICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgLy8gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgLy8gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIC8vICAgICAgICB9XHJcbiAgICAvLyAgICB9XHJcbiAgICAgICB0aGVhZCB7XHJcbiAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgfVxyXG5cclxuICAgICAgIHRkLndvcmQtd3JhcHBlcntcclxuICAgICAgICAgICB3b3JkLWJyZWFrOmJyZWFrLXdvcmQ7XHJcbiAgICAgICB9XHJcblxyXG4gICAgICAgdGQuaXRlbS13cmFwcGVye1xyXG4gICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcclxuICAgICAgIH1cclxuICAgfVxyXG4gIFxyXG4gICAudWkuZm9ybXtcclxuICAgICAgIC5tYWluLXdyYXBwZXJ7XHJcbiAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgIH1cclxuICAgICAgIC5vdXRlci13cmFwcGVye1xyXG5cclxuICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgIH1cclxuICAgICAgIC5pbm5lci13cmFwcGVye1xyXG4gICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgd2lkdGg6MTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgfVxyXG4gICB9XHJcbn0iLCIudXBkYXRlLWhlYWRlciB7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW4tbGVmdDogMjRweDtcbn1cblxuaDMge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4udWkuZmx1aWQuY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjRweCAhaW1wb3J0YW50O1xufVxuXG4ub3V0ZXItYmFzaWMge1xuICBwYWRkaW5nOiAyNHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDBweCAzcHggcmdiYSg2MCwgNjQsIDY3LCAwLjMpLCAwIDRweCA4cHggMnB4IHJnYmEoNjAsIDY0LCA2NywgMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDQuOTYxNDFweDtcbn1cblxuLm91dGVyLWJhc2ljRm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5maWx0ZXJfYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM3QURBO1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG59XG5cbi5maWx0ZXJfYnRuX3Jlc2V0IHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2FjYmNkO1xufVxuXG4uZmlsdGVyX2xpc3Qge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmljb24ge1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxMDA7XG59XG4uaWNvbiAuY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcbiAgd2lkdGg6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5pY29uIC5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsIHtcbiAgd2lkdGg6IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLmljb24gLmNvcnBvcmF0ZV9pbnB1dF9fcGxhY2Vob2xkZXItaWNvbi5jYWxsIHtcbiAgd2lkdGg6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiA3cHg7XG59XG4uaWNvbiAuY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbGxsIHtcbiAgd2lkdGg6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uaWNvbiAuY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmljbyB7XG4gIHdpZHRoOiAxNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uc2VhcmNoLWZpZWxkLXdyYXBwZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbn1cblxuLnVpLnRhYmxlLnRoZWFkLnRoIHtcbiAgZm9udC1zdHlsZTogIzRmNGY0ZiAhaW1wb3J0YW50O1xufVxuXG4udWkudGFibGUge1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwNzBweCkge1xuICB0ZCBzcGFuLmhlYWQtbmFtZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEwNzBweCkge1xuICAudWkudGFibGU6bm90KC51bnN0YWNrYWJsZSkge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnVpLnRhYmxlOm5vdCgudW5zdGFja2FibGUpIHRoZWFkLCAudWkudGFibGU6bm90KC51bnN0YWNrYWJsZSkgdGJvZHkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jayAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgfVxuICAudWkudGFibGU6bm90KC51bnN0YWNrYWJsZSkgdGhlYWQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxuICAudWkudGFibGU6bm90KC51bnN0YWNrYWJsZSkgdHIge1xuICAgIHBhZGRpbmctdG9wOiAxZW07XG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnVpLnRhYmxlOm5vdCgudW5zdGFja2FibGUpIHRyLCAudWkudGFibGU6bm90KC51bnN0YWNrYWJsZSkgdHIgPiB0ZCwgLnVpLnRhYmxlOm5vdCgudW5zdGFja2FibGUpIHRyID4gdGgge1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgfVxuICAudWkudGFibGU6bm90KC51bnN0YWNrYWJsZSkgdHIgPiB0ZCwgLnVpLnRhYmxlOm5vdCgudW5zdGFja2FibGUpIHRyID4gdGgge1xuICAgIGJhY2tncm91bmQ6IDAgMDtcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMC43NWVtICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC51aS50YWJsZTpub3QoLnVuc3RhY2thYmxlKSB0ZCBzcGFuLmhlYWQtbmFtZSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIH1cbiAgLnVpLnRhYmxlOm5vdCgudW5zdGFja2FibGUpIHRoZWFkIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgLnVpLnRhYmxlOm5vdCgudW5zdGFja2FibGUpIHRkLml0ZW0td3JhcHBlciB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnVpLmZvcm0gLm1haW4td3JhcHBlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnVpLmZvcm0gLm91dGVyLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC51aS5mb3JtIC5pbm5lci13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDQxNXB4KSB7XG4gIHRkIHNwYW4uaGVhZC1uYW1lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDE1cHgpIHtcbiAgLnVpLnRhYmxlOm5vdCgudW5zdGFja2FibGUpIHRib2R5IHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG4gIC51aS50YWJsZTpub3QoLnVuc3RhY2thYmxlKSB0Ym9keSB0ciB0ZCBzcGFuIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xuICB9XG4gIC51aS50YWJsZTpub3QoLnVuc3RhY2thYmxlKSB0Ym9keSB0ciB0ZCBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG4gIC51aS50YWJsZTpub3QoLnVuc3RhY2thYmxlKSB0aGVhZCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC51aS50YWJsZTpub3QoLnVuc3RhY2thYmxlKSB0aGVhZCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIC51aS50YWJsZTpub3QoLnVuc3RhY2thYmxlKSB0ZC53b3JkLXdyYXBwZXIge1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gIH1cbiAgLnVpLnRhYmxlOm5vdCgudW5zdGFja2FibGUpIHRkLml0ZW0td3JhcHBlciB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnVpLmZvcm0gLm1haW4td3JhcHBlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLnVpLmZvcm0gLm91dGVyLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG4gIC51aS5mb3JtIC5pbm5lci13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/users/users.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/users/users.component.ts ***!
  \*************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/user.service */ "./src/app/shared/services/user.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/common.service */ "./src/app/shared/services/common.service.ts");








let UsersComponent = class UsersComponent {
    constructor(router, _fb, userService, toastr, commonService) {
        this.router = router;
        this._fb = _fb;
        this.userService = userService;
        this.toastr = toastr;
        this.commonService = commonService;
        this.formIsSubmitted = false;
        this.users = [];
        this.totalCount = 0;
        this.pages = 0;
        this.offset = 0;
        this.offsetEvent = {
            page: this.offset
        };
        this.pageUser = 0;
        this.userPage = 0;
        this.userConfigForm = {
            page: this.pageUser
        };
        this.toggleObj = {};
        this.totalListOfUsers = 0;
        this.usersList = [];
        this.organizations = [];
    }
    ngOnInit() {
        this.createSearchUserForm();
        this.fetchAllsUsers();
        this.organizationList();
    }
    ngAfterViewInit() {
        $(document).ready(function () {
            $('.ui.dropdown').dropdown();
            $('.dropdown2').dropdown({ placeholder: 'Choose Organisation' });
        });
    }
    fetchAllsUsers() {
        this.userService.GetAllUsers(this.userConfigForm)
            .subscribe((res) => {
            if (res.status) {
                this.totalListOfUsers = res.result.total;
                this.userPage = res.result.page;
                this.usersList = res.result.data;
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
    organizationList() {
        this.commonService.getOrganizationList().subscribe((result) => {
            this.organizations = result.listData.filter(data => data.name != null);
            this.organizations = this.organizations.filter(data => data.name !== "");
        });
    }
    searchFormSubmit() {
        this.formIsSubmitted = true;
        console.log("searchUserForm::::::::::", this.searchUserForm.value);
        // this.filterParams.page = 0;
        // this.filterParams.organisation_id = this.filterForm.value.organisation_id;
        // const usernameAndAgentCode = this.filterForm.value.usernameAndAgentCode.trim();
        // this.filterParams.usernameAndAgentCode = usernameAndAgentCode;
        // this.getUsers(this.filterParams);
        // if( !this.searchUserForm.valid ) {
        //   return ;
        // }
        // const data = {
        //   search: this.gfc.corporate_type.value,
        //   name: this.gfc.nameAndOfficeId.value,
        // }
        // this.formIsSubmitted = false;
        // return ;
    }
    addNewUser() {
        return this.router.navigateByUrl('users/new');
    }
    createSearchUserForm() {
        this.searchUserForm = this._fb.group({
            corporate_type: ['all'],
            nameAndOfficeId: ['']
        });
    }
    get gfc() { return this.searchUserForm.controls; }
    ;
    statusToggle(data) {
        this.toggleObj.id = data.users_id;
        this.toggleObj.status = data.is_active;
        this.toggleObj.table = "users";
        this.userService.onStatusToggle(this.toggleObj)
            .subscribe((res) => {
            if (res.status == 200) {
                this.fetchAllsUsers();
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
    deleteUser(valObj) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                this.userService.deleteUser(valObj.users_id).subscribe((result) => {
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
                        this.fetchAllsUsers();
                    }
                });
            }
        });
    }
    pageCallback(event) {
        let offset = event.offset;
        this.userConfigForm.page = offset;
        this.fetchAllsUsers();
    }
};
UsersComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] }
];
UsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/users/users.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./users.component.scss */ "./src/app/layout/users/users.component.scss")).default]
    })
], UsersComponent);



/***/ }),

/***/ "./src/app/layout/users/users.module.ts":
/*!**********************************************!*\
  !*** ./src/app/layout/users/users.module.ts ***!
  \**********************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/layout/users/users-routing.module.ts");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users.component */ "./src/app/layout/users/users.component.ts");
/* harmony import */ var _user_new_user_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-new/user-new.component */ "./src/app/layout/users/user-new/user-new.component.ts");
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-edit/user-edit.component */ "./src/app/layout/users/user-edit/user-edit.component.ts");
/* harmony import */ var _user_targets_user_targets_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-targets/user-targets.component */ "./src/app/layout/users/user-targets/user-targets.component.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");










let UsersModule = class UsersModule {
};
UsersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"], _user_new_user_new_component__WEBPACK_IMPORTED_MODULE_6__["UserNewComponent"], _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__["UserEditComponent"], _user_targets_user_targets_component__WEBPACK_IMPORTED_MODULE_8__["UserTargetsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _users_routing_module__WEBPACK_IMPORTED_MODULE_4__["UsersRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_9__["NgxDatatableModule"],
        ]
    })
], UsersModule);



/***/ }),

/***/ "./src/app/shared/services/pos-service/pos-service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/pos-service/pos-service.ts ***!
  \************************************************************/
/*! exports provided: PosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosService", function() { return PosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




let PosService = class PosService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverURL;
    }
    createNewPosUsingBasicInfo(data) {
        return this.http.post(`${this.url}/api/pos/create-pos`, data);
    }
    getPosDetails(id) {
        return this.http.get(`${this.url}/api/pos/fetch-pos/${id}`);
    }
    updatePosDetails(data) {
        return this.http.post(`${this.url}/api/pos/update-pos`, data);
    }
    getAllActiveSuppliers() {
        return this.http.get(`${this.url}/api/get-all-suppliers`);
    }
    createBranch(data) {
        return this.http.post(`${this.url}/api/branches/create`, data);
    }
    fetchAllBranches(id) {
        return this.http.get(`${this.url}/api/branches/organisation/${id}`);
    }
    deleteBranch(id) {
        return this.http.post(`${this.url}/api/branches/delete`, id);
    }
    editbranch(id) {
        return this.http.get(`${this.url}/api/branches/get/${id}`);
    }
    updateBranch(data) {
        return this.http.post(`${this.url}/api/branches/update`, data);
    }
};
PosService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
PosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], PosService);



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");





let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverURL;
    }
    createUser(data) {
        return this.http.post(`${this.apiUrl}/api/create-new-user`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return result;
        })));
    }
    updateUser(data) {
        return this.http.put(`${this.apiUrl}/api/update-user`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return result;
        })));
    }
    fetchUser(id) {
        return this.http.get(`${this.apiUrl}/api/fetch-new-user/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return result;
        })));
    }
    fetchUsers(data) {
        return this.http.post(`${this.apiUrl}/api/fetch-all-users`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return result;
        })));
    }
    fetchRoles() {
        return this.http.get(`${this.apiUrl}/api/roles/list`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return result;
        })));
    }
    fetchOrganizations() {
        return this.http.get(`${this.apiUrl}/api/fetch-all-organization`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return result;
        })));
    }
    savePermissions(data) {
        return this.http.post(`${this.apiUrl}/api/users/permission`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return result;
        })));
    }
    fetchPermissions() {
        return this.http.get(`${this.apiUrl}/api/users/permissions`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return result;
        })));
    }
    saveTargets(data) {
        return this.http.post(`${this.apiUrl}/api/users/target`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return result;
        })));
    }
    // Get All users role list
    GetAllUsers(searchData) {
        return this.http.post(`${this.apiUrl}/api/fetch-all-users`, searchData);
    }
    onStatusToggle(data) {
        return this.http.post(`${this.apiUrl}/api/toggle-status`, data);
    }
    // Delete user role
    deleteUser(id) {
        return this.http.delete(`${this.apiUrl}/api/remove-user/${id}`);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ })

}]);
//# sourceMappingURL=default~layout-users-users-module~users-users-module-es2016.js.map