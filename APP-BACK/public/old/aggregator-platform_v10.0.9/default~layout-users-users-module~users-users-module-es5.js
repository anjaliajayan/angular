function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~layout-users-users-module~users-users-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/users/user-edit/user-edit.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/users/user-edit/user-edit.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutUsersUserEditUserEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3><span class=\"update-header\">Update User</span></h3>\r\n\r\n<div class=\"ui fluid container\">\r\n  <div class=\"eight wide field\"> </div>\r\n  <div class=\"eight wide field bookings_btn-panel text-right\">\r\n    <a class=\"ui primary button roleActionButton\" routerLink=\"../../\">\r\n      <span class=\"tourCode_text\">List Users</span>\r\n    </a>\r\n  </div>\r\n  <div class=\"outer-basic\">\r\n\r\n    <div class=\"outer-basicForm\">\r\n      <div class=\"ui form\">\r\n\r\n        <div class=\"email-list b2c-list-user-table\">\r\n\r\n          <form [formGroup]=\"editUserForm\" (submit)=\"btnSubmitHandler()\">\r\n\r\n            <div class=\"ui grid\">\r\n              <div class=\"eleven wide column\">\r\n\r\n                <div class=\"shadow-sm p-5 mb-5 bg-white rounded\">\r\n\r\n                  <div class=\"ui grid\">\r\n                    <div class=\"three wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">Salutation <small *ngIf=\"gfc.salute.errors\" class=\"text-danger\">Required.</small></label>\r\n                        <select class=\"ui dropdown fluid\" formControlName=\"salute\">  <!-- [selected]=\"salute==userData.salute\" -->\r\n                          <option *ngFor=\"let saluteName of saluteNames\" value=\"{{ saluteName }}\">{{ saluteName }}</option>\r\n                        </select>\r\n                      </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"six wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">First Name <small *ngIf=\"formIsSubmitted && gfc.first_name.errors\"\r\n                            class=\"text-danger\">required</small></label>\r\n                        <input type=\"text\" formControlName=\"first_name\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"six wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">Last Name <small *ngIf=\"formIsSubmitted && gfc.last_name.errors\"\r\n                            class=\"text-danger\">required</small></label>\r\n                        <input type=\"text\" name=\"\" formControlName=\"last_name\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                  <div class=\"ui grid\">\r\n\r\n                    <div class=\"six wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">Contact Number <small *ngIf=\"formIsSubmitted && gfc.contact.errors\"\r\n                            class=\"text-danger\">required</small></label>\r\n                        <input type=\"text\" id=\"\" formControlName=\"contact\" placeholder=\"Contact number\">\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"five wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">Initial</label>\r\n                        <input type=\"text\" id=\"\" formControlName=\"initial\" placeholder=\"Enter initial\">\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"four wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">Gender <small *ngIf=\"formIsSubmitted && gfc.gender.errors\"\r\n                            class=\"text-danger\">required</small></label>\r\n                        <select class=\"ui dropdown fluid\" formControlName=\"gender\">\r\n                          <option value=\"male\">Male</option>\r\n                          <option value=\"female\">Female</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"five wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">Status <small *ngIf=\"formIsSubmitted && gfc.status.errors\" class=\"text-danger\">required</small></label>\r\n                        <select class=\"ui dropdown fluid\" formControlName=\"status\">\r\n                          <option *ngFor=\"let status of statusRow\" value=\"{{ status.id }}\">{{ status.value }}</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"five wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"inputAddress\">Address</label>\r\n                        <input type=\"text\" id=\"inputAddress\" placeholder=\"1234 Main St\" formControlName=\"address1\">\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"five wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"inputAddress2\">Address 2</label>\r\n                        <input type=\"text\" id=\"inputAddress2\" placeholder=\"Apartment, studio, or floor\"\r\n                          formControlName=\"address2\">\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"five wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">Country <small *ngIf=\"formIsSubmitted && gfc.country_id.errors\"\r\n                            class=\"text-danger\">required</small></label>\r\n                        <select class=\"ui dropdown fluid\" formControlName=\"country_id\">\r\n                          <option value=\"\">Select</option>\r\n                          <option *ngFor=\"let country of countries\" [value]=\"country.country_id\">{{ country.name }}\r\n                          </option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"five wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">POS <small *ngIf=\"formIsSubmitted && gfc.country_id.errors\"\r\n                            class=\"text-danger\">required</small></label>\r\n                        <select class=\"ui dropdown fluid\" formControlName=\"organisation_id\">\r\n                          <option value=\"\">Select</option>\r\n                          <option *ngFor=\"let organization of organizations\" [value]=\"organization.organisation_id\">\r\n                            {{ organization.name  }}</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"five wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">POS Branch<small *ngIf=\"formIsSubmitted && gfc.branch_id.errors\" class=\"text-danger\">required</small></label>\r\n                        <select class=\"ui dropdown fluid\" formControlName=\"branch_id\">\r\n                          <option value=\"\">Select Branch</option>\r\n                          <option value=\"{{ organizationBranche.id }}\" *ngFor=\"let organizationBranche of organizationBranches\">{{ organizationBranche.name }}</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"six wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">Role <small *ngIf=\"formIsSubmitted && gfc.role_id.errors\"\r\n                            class=\"text-danger\">required</small></label>\r\n                        <select class=\"ui dropdown fluid\" formControlName=\"role_id\">\r\n                          <option value=\"\">Select</option>\r\n                          <option *ngFor=\"let userRole of userRoles\" [value]=\"userRole.role_id\">{{ userRole.name }}\r\n                          </option>\r\n                        </select>\r\n                      </div>\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"five wide column\">\r\n\r\n                <div class=\"ui grid\">\r\n                  <div class=\"twelve wide column\">\r\n                    <div class=\"field\">\r\n                      <label for=\"\">Username <small *ngIf=\"formIsSubmitted && gfc.username.errors\"\r\n                          class=\"text-danger\">required</small></label>\r\n                      <input type=\"email\" id=\"\" formControlName=\"username\" placeholder=\"User name\">\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"twelve wide column\">\r\n                    <div class=\"field\">\r\n                      <label for=\"\">Email <small *ngIf=\"formIsSubmitted && gfc.email.errors\" class=\"text-danger\">a valid\r\n                          email is required</small></label>\r\n                      <input type=\"email\" id=\"\" formControlName=\"email\" placeholder=\"Email address\">\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"twelve wide column\">\r\n                    <div class=\"field\">\r\n                      <label for=\"\">Password <small *ngIf=\"formIsSubmitted && gfc.password.errors\"\r\n                          class=\"text-danger\">required</small></label>\r\n                      <input type=\"email\" id=\"\" placeholder=\"Password\" formControlName=\"password\">\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"twelve wide column\">\r\n                    <div class=\"field\">\r\n                      <label for=\"\">Confirm Password <small *ngIf=\"formIsSubmitted && gfc.cpassword.errors\"\r\n                          class=\"text-danger\">required</small></label>\r\n                      <input type=\"email\" id=\"\" placeholder=\"Password\" formControlName=\"cpassword\">\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"twelve wide column text-right\">\r\n                    <button type=\"submit\" class=\"ui primary button\">Save User</button>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n          </form>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/users/user-new/user-new.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/users/user-new/user-new.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutUsersUserNewUserNewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3><span class=\"update-header\">New User</span></h3>\r\n\r\n<div class=\"ui fluid container\">\r\n  <div class=\"eight wide field\"> </div>\r\n  <div class=\"eight wide field bookings_btn-panel text-right\">\r\n    <a class=\"ui primary button roleActionButton\" routerLink=\"../\">\r\n      <span class=\"tourCode_text\">List Users</span>\r\n    </a>\r\n  </div>\r\n  <div class=\"outer-basic\">\r\n\r\n    <div class=\"outer-basicForm\">\r\n      <div class=\"ui form\">\r\n\r\n        <div class=\"email-list b2c-list-user-table\">\r\n\r\n          <form [formGroup]=\"newUserForm\" (submit)=\"btnSubmitHandler()\">\r\n\r\n            <div class=\"ui grid\">\r\n              <div class=\"eleven wide column\">\r\n\r\n                <div class=\"shadow-sm p-5 mb-5 bg-white rounded\">\r\n\r\n                  <div class=\"ui grid\">\r\n                    <div class=\"three wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">Salutation <small *ngIf=\"gfc.saluation.errors\" class=\"text-danger\">Required.</small></label>\r\n                        <select class=\"ui dropdown fluid\" formControlName=\"saluation\">\r\n                          <option *ngFor=\"let saluteName of saluteNames\" value=\"{{ saluteName }}\">{{ saluteName }}</option>\r\n                        </select>\r\n                      </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"six wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">First Name <small *ngIf=\"formIsSubmitted && gfc.first_name.errors\"\r\n                            class=\"text-danger\">required</small></label>\r\n                        <input type=\"text\" formControlName=\"first_name\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"six wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">Last Name <small *ngIf=\"formIsSubmitted && gfc.last_name.errors\"\r\n                            class=\"text-danger\">required</small></label>\r\n                        <input type=\"text\" name=\"\" formControlName=\"last_name\" />\r\n                      </div>\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                  <div class=\"ui grid\">\r\n\r\n                    <div class=\"six wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">Contact Number <small *ngIf=\"formIsSubmitted && gfc.contact.errors\"\r\n                            class=\"text-danger\">required</small></label>\r\n                        <input type=\"text\" id=\"\" formControlName=\"contact\" placeholder=\"Contact number\">\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"five wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">Initial</label>\r\n                        <input type=\"text\" id=\"\" formControlName=\"initial\" placeholder=\"Enter initial\">\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"four wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">Gender <small *ngIf=\"formIsSubmitted && gfc.gender.errors\"\r\n                            class=\"text-danger\">required</small></label>\r\n                        <select class=\"ui dropdown fluid\" formControlName=\"gender\">\r\n                          <option value=\"male\">Male</option>\r\n                          <option value=\"female\">Female</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"five wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">Status <small *ngIf=\"formIsSubmitted && gfc.status.errors\" class=\"text-danger\">required</small></label>\r\n                        <select class=\"ui dropdown fluid\" formControlName=\"status\">\r\n                          <option *ngFor=\"let status of statusRow\" value=\"{{ status.id }}\">{{ status.value }}</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"five wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"inputAddress\">Address</label>\r\n                        <input type=\"text\" id=\"inputAddress\" placeholder=\"1234 Main St\" formControlName=\"address1\">\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"five wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"inputAddress2\">Address 2</label>\r\n                        <input type=\"text\" id=\"inputAddress2\" placeholder=\"Apartment, studio, or floor\"\r\n                          formControlName=\"address2\">\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"five wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">Country <small *ngIf=\"formIsSubmitted && gfc.country_id.errors\"\r\n                            class=\"text-danger\">required</small></label>\r\n                        <select class=\"ui dropdown fluid\" formControlName=\"country_id\">\r\n                          <option value=\"\">Select</option>\r\n                          <option *ngFor=\"let country of countries\" [value]=\"country.country_id\">{{ country.name }}\r\n                          </option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"five wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">POS <small *ngIf=\"formIsSubmitted && gfc.country_id.errors\"\r\n                            class=\"text-danger\">required</small></label>\r\n                        <select class=\"ui dropdown fluid\" formControlName=\"organisation_id\" (change)=\"getOrgBranches($event.target.value)\">\r\n                          <option value=\"\">Select</option>\r\n                          <option *ngFor=\"let organization of organizations\" [value]=\"organization.organisation_id\">\r\n                            {{ organization.name  }}</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"five wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">POS Branch<small *ngIf=\"formIsSubmitted && gfc.branch_id.errors\" class=\"text-danger\">required</small></label>\r\n                        <select class=\"ui dropdown fluid\" formControlName=\"branch_id\">\r\n                          <option value=\"\">Select Branch</option>\r\n                          <option value=\"{{ organizationBranche.id }}\" *ngFor=\"let organizationBranche of organizationBranches\">{{ organizationBranche.name }}</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"six wide column\">\r\n                      <div class=\"field\">\r\n                        <label for=\"\">Role <small *ngIf=\"formIsSubmitted && gfc.role_id.errors\" class=\"text-danger\">required</small></label>\r\n                        <select class=\"ui dropdown fluid\" formControlName=\"role_id\">\r\n                          <option value=\"\">Select</option>\r\n                          <option *ngFor=\"let userRole of userRoles\" [value]=\"userRole.role_id\">{{ userRole.name }}\r\n                          </option>\r\n                        </select>\r\n                      </div>\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"five wide column\">\r\n\r\n                <div class=\"ui grid\">\r\n                  <div class=\"twelve wide column\">\r\n                    <div class=\"field\">\r\n                      <label for=\"\">Username <small *ngIf=\"formIsSubmitted && gfc.username.errors\"\r\n                          class=\"text-danger\">required</small></label>\r\n                      <input type=\"email\" id=\"\" formControlName=\"username\" placeholder=\"User name\">\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"twelve wide column\">\r\n                    <div class=\"field\">\r\n                      <label for=\"\">Email <small *ngIf=\"formIsSubmitted && gfc.email.errors\" class=\"text-danger\">a valid\r\n                          email is required</small></label>\r\n                      <input type=\"email\" id=\"\" formControlName=\"email\" placeholder=\"Email address\">\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"twelve wide column\">\r\n                    <div class=\"field\">\r\n                      <label for=\"\">Password <small *ngIf=\"formIsSubmitted && gfc.password.errors\"\r\n                          class=\"text-danger\">required</small></label>\r\n                      <input type=\"email\" id=\"\" placeholder=\"Password\" formControlName=\"password\">\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"twelve wide column\">\r\n                    <div class=\"field\">\r\n                      <label for=\"\">Confirm Password <small *ngIf=\"formIsSubmitted && gfc.cpassword.errors\"\r\n                          class=\"text-danger\">required</small></label>\r\n                      <input type=\"email\" id=\"\" placeholder=\"Password\" formControlName=\"cpassword\">\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- <div class=\"twelve wide column text-right\">\r\n                  </div> -->\r\n\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"btn-wrapper\">\r\n             <button type=\"submit\" class=\"ui primary button\">Save User</button>\r\n            </div>\r\n          </form>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/users/user-targets/user-targets.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/users/user-targets/user-targets.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutUsersUserTargetsUserTargetsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3><span class=\"update-header\">Set User Targets</span></h3>\r\n\r\n<div class=\"ui fluid container\">\r\n  <div class=\"eight wide field\"> </div>\r\n  <div class=\"eight wide field bookings_btn-panel text-right\">\r\n    <a class=\"ui primary button roleActionButton\" routerLink=\"../../\"><span class=\"tourCode_text\">List Users</span></a>\r\n  </div>\r\n<div class=\"outer-basic\">\r\n\r\n  <div class=\"outer-basicForm\">\r\n    <div class=\"ui form\">\r\n\r\n      <div class=\"email-list b2c-list-user-table\">\r\n\r\n        <form [formGroup]=\"userTargetForm\">\r\n\r\n          <div class=\"ui grid\">\r\n            <div class=\"sixteen wide column\" formArrayName=\"targets\" *ngFor=\"let item of userTargetForm.get['targets'].controls; let i = index;\">\r\n              \r\n              <div class=\"ui grid\" [formGroupName]=\"i\">\r\n\r\n                <div class=\"three wide column\">\r\n                  <div class=\"field\">\r\n                    <label for=\"inputAddress2\">Year</label>\r\n                    <select class=\"ui dropdown fluid\" formControlName=\"year\" name='year'>\r\n                      <option *ngFor=\"let year of yearsList;\" [value]=\"year\">{{ year }}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"three wide column\">\r\n                  <div class=\"field\">\r\n                    <label for=\"inputAddress2\">Month</label>\r\n                    <select class=\"ui dropdown fluid\" formControlName=\"month\" name=\"month\">\r\n                      <option *ngFor=\"let month of monthsList;\" [value]=\"month.id\">{{ month.name }}</option>\r\n                    </select>\r\n                  </div>\r\n                </div>\r\n                <div class=\"three wide column\">\r\n                  <div class=\"field\">\r\n                    <label for=\"inputAddress2\">Target Amount</label>\r\n                    <input type=\"text\" class=\"ui dropdown fluid\" placeholder=\"Target Amount\" formControlName=\"amount\" name=\"amount\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"four wide column\">\r\n                  <br>\r\n                  <button (click)=\"btnAddTarget()\" class=\"ui button \"><i class=\"fa fa-plus\"></i></button>\r\n                </div>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"ui grid\">\r\n            <div class=\"ten wide column text-right\">\r\n              <button type=\"button\" (click)=\"btnSubmitHandler()\" class=\"ui button primary\">Save Targets</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n\r\n      </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/users/users.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/users/users.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutUsersUsersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3><span class=\"update-header\">List of Users</span></h3>\r\n\r\n<!-- organizationTypes -->\r\n<div class=\"ui fluid container\">\r\n  <div class=\"outer-basic\">\r\n    <div class=\"outer-basicForm\">\r\n      <form (ngSubmit)=\"searchFormSubmit()\" class=\"ui form search-field-wrapper\" [formGroup]=\"searchUserForm\">\r\n        <div class=\"four fields\">\r\n          <div class=\"two wide field\">\r\n            <select class=\"ui fluid dropdown\" formControlName=\"corporate_type\">\r\n              <option value=\"all\">All</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"three wide field\">\r\n            <input type=\"text\" placeholder=\"Office Name/Office Id\" formControlName=\"nameAndOfficeId\">\r\n            <small *ngIf=\"formIsSubmitted && gfc.nameAndOfficeId.errors\" class=\"text-danger\">required</small>\r\n          </div>\r\n          <div class=\"eight wide field\">\r\n            <button class=\"ui button filter_btn\">\r\n              <span class=\"filter_list\">Search</span>\r\n            </button>\r\n            <button class=\"ui button filter_btn_reset\" (click)=\"searchUserForm.reset({})\">\r\n              <span class=\"filter_list\">Reset</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n\r\n      <div class=\"text-right mb-1\">\r\n        <button (click)=\"addNewUser()\" class=\"ui button primary\">Add new User</button>\r\n      </div>\r\n      \r\n\r\n      <table class=\"ui celled table\">\r\n        <thead>\r\n          <tr>\r\n            <th>Organisation</th>\r\n            <th>Role</th>\r\n            <th>Name</th>\r\n            <th>Email</th>\r\n            <th>Contact Info</th>\r\n            <th width=\"120\">&nbsp;</th>\r\n          </tr>\r\n        </thead>\r\n\r\n        <tr *ngFor=\"let user of users; let i = index\">\r\n          <td>{{ user.organisation ? user.organisation.name : null }}</td>\r\n          <td>\r\n            <span *ngIf=\"user.admin\">Admin</span>\r\n            <span *ngIf=\"user.agent\">Agent</span>\r\n          </td>\r\n          <td>{{ user.first_name }} {{ user.last_name }}</td>\r\n          <td>{{ user.email }}</td>\r\n          <td>{{ user.mobile }}</td>\r\n          <td class=\"text-center\">\r\n            \r\n            <div class=\"ui buttons\">\r\n              <a [routerLink]=\"['edit', user.users_id]\" routerLinkActive=\"router-link-active\" class=\"ui button\"><i class=\"fa fa-edit\"></i></a>\r\n              <a class=\"ui button\" [routerLink]=\"['targets', user.users_id]\" routerLinkActive=\"router-link-active\"><i class=\"fa fa-dollar\"></i></a>\r\n              <button class=\"ui button\"><i class=\"fa fa-trash\"></i></button>\r\n            </div>\r\n            \r\n          </td>\r\n        </tr>\r\n\r\n      </table>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/layout/users/user-edit/user-edit.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/layout/users/user-edit/user-edit.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutUsersUserEditUserEditComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".update-header {\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n  margin-left: 30px;\n}\n\n.ui.fluid.container {\n  padding: 25px;\n}\n\n.outer-basic {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n}\n\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n  padding: 50px;\n}\n\n.filter_btn {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.filter_btn_reset {\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.filter_list {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.icon {\n  opacity: 1;\n  z-index: 100;\n}\n\n.icon .corporate_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.icon .corporate_input__placeholder-icon.cal {\n  width: 0px;\n  margin-top: 10px;\n  font-size: 13px;\n}\n\n.icon .corporate_input__placeholder-icon.call {\n  width: 15px;\n  margin-top: 10px;\n  margin-left: 7px;\n}\n\n.icon .corporate_input__placeholder-icon.calll {\n  width: 20px;\n  margin-top: 10px;\n}\n\n.icon .corporate_input__placeholder-icon.ico {\n  width: 15px;\n  margin-top: 10px;\n}\n\n.search-field-wrapper {\n  padding-bottom: 32px;\n}\n\n.text-danger {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3VzZXJzL3VzZXItZWRpdC9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHVzZXJzXFx1c2VyLWVkaXRcXHVzZXItZWRpdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3VzZXJzL3VzZXItZWRpdC91c2VyLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpRkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlGQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREFJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNFUjs7QUREUTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNHWjs7QUREUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDR1o7O0FERFE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNHWjs7QUREUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0daOztBREVBO0VBQ0ksb0JBQUE7QUNDSjs7QURHQTtFQUNJLFVBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC91c2Vycy91c2VyLWVkaXQvdXNlci1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwZGF0ZS1oZWFkZXIge1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuLnVpLmZsdWlkLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljRm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbn1cclxuXHJcbi5maWx0ZXJfYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5maWx0ZXJfYnRuX3Jlc2V0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0RjRGNEY7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbi5maWx0ZXJfbGlzdCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIC5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuICAgICAgICAmLmNhbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5jYWxsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuY2FsbGwge1xyXG4gICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5pY28ge1xyXG4gICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtZmllbGQtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcclxufVxyXG5cclxuXHJcbi50ZXh0LWRhbmdlciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59IiwiLnVwZGF0ZS1oZWFkZXIge1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi51aS5mbHVpZC5jb250YWluZXIge1xuICBwYWRkaW5nOiAyNXB4O1xufVxuXG4ub3V0ZXItYmFzaWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLm91dGVyLWJhc2ljRm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDUwcHg7XG59XG5cbi5maWx0ZXJfYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5maWx0ZXJfYnRuX3Jlc2V0IHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0RjRGO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5maWx0ZXJfbGlzdCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5pY29uIC5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xuICB3aWR0aDogMjRweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLmljb24gLmNvcnBvcmF0ZV9pbnB1dF9fcGxhY2Vob2xkZXItaWNvbi5jYWwge1xuICB3aWR0aDogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uaWNvbiAuY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbGwge1xuICB3aWR0aDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbn1cbi5pY29uIC5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsbGwge1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5pY29uIC5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uaWNvIHtcbiAgd2lkdGg6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zZWFyY2gtZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xufVxuXG4udGV4dC1kYW5nZXIge1xuICBjb2xvcjogcmVkO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/users/user-edit/user-edit.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/layout/users/user-edit/user-edit.component.ts ***!
    \***************************************************************/

  /*! exports provided: UserEditComponent */

  /***/
  function srcAppLayoutUsersUserEditUserEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserEditComponent", function () {
      return UserEditComponent;
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


    var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/services/user.service */
    "./src/app/shared/services/user.service.ts");
    /* harmony import */


    var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/common.service */
    "./src/app/shared/services/common.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _shared_utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/utils/common */
    "./src/app/shared/utils/common.ts");

    var UserEditComponent =
    /*#__PURE__*/
    function () {
      function UserEditComponent(activeRoute, router, _fb, userService, commonService, toastr) {
        _classCallCheck(this, UserEditComponent);

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

      _createClass(UserEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.editUserForm = this.createUserForm(null);
          this.userId = this.activeRoute.snapshot.params.id;
          this.getUser(this.userId);
          this.getCountries();
          this.getRoles();
          this.getOrganizations();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          $(document).ready(function () {
            $('.ui.dropdown').dropdown();
          });
        }
      }, {
        key: "btnSubmitHandler",
        value: function btnSubmitHandler() {
          var _this = this;

          this.formIsSubmitted = true;

          if (this.editUserForm.invalid) {
            this.buildError('Please fill all the required fields.');
            return;
          }

          var data = {
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
            branch_id: this.gfc.branch_id.value
          };
          this.userService.updateUser(data).subscribe(function (r) {
            if (r.status == 200) {
              _this.displayTargets = true;
              _this.userData = r.data;
              _this.formIsSubmitted = false;

              _this.toastr.success('Profile updated successfully.', 'Success !', {
                disableTimeOut: false,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            } else {
              _this.buildError(r.msg);
            }
          }, function (apiError) {
            _this.buildError(apiError.error.message);
          });
        }
      }, {
        key: "createUserForm",
        value: function createUserForm(userData) {
          return this._fb.group({
            salute: [userData ? userData.salute : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            first_name: [userData ? userData.first_name : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            last_name: [userData ? userData.last_name : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            role_id: [userData ? userData.role_id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            contact: [userData ? userData.mobile : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            initial: [userData ? userData.initial : null],
            gender: [userData ? userData.sex : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            status: [userData ? userData.is_active : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address1: [userData ? userData.address_1 : null],
            address2: [userData ? userData.address_2 : null],
            country_id: [userData ? userData.country_id : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            organisation_id: [userData ? userData.organisation_id : null],
            branch_id: [userData ? userData.branch_id : null],
            username: [userData ? userData.username : null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [userData ? userData.email : null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            cpassword: [null]
          }, {
            validator: this.passwordMatchValidator
          });
        }
      }, {
        key: "passwordMatchValidator",
        value: function passwordMatchValidator(control) {
          var password = control.get('password').value; // get password from our password form control

          var confirmPassword = control.get('cpassword').value; // get password from our confirmPassword form control
          // compare is the password math

          if (password !== confirmPassword) {
            // if they don't match, set an error in our confirmPassword form control
            control.get('cpassword').setErrors({
              NoPassswordMatch: true
            });
          }
        }
      }, {
        key: "buildError",
        value: function buildError(message) {
          this.toastr.error(message, 'Server Error !', {
            disableTimeOut: false,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
        }
      }, {
        key: "getUser",
        value: function getUser(userId) {
          var _this2 = this;

          this.userService.fetchUser(userId).subscribe(function (r) {
            if (r.status == 200) {
              _this2.userData = r.data;

              _this2.getOrgBranches(_this2.userData.organisation_id);

              _this2.editUserForm = _this2.createUserForm(_this2.userData); // console.log(this.userData)
            } else {
              _this2.buildError(r.msg);
            }
          }, function (apiError) {
            _this2.buildError(apiError.error.message);
          });
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          var _this3 = this;

          this.commonService.getCountryList().subscribe(function (result) {
            _this3.countries = result.countries;
          });
        }
      }, {
        key: "getRoles",
        value: function getRoles() {
          var _this4 = this;

          this.userService.fetchRoles().subscribe(function (r) {
            if (r.status == 200) {
              _this4.userRoles = r.data;
            } else {
              _this4.buildError(r.msg);
            }
          }, function (apiError) {
            _this4.buildError(apiError.error.message);
          });
        }
      }, {
        key: "getOrganizations",
        value: function getOrganizations() {
          var _this5 = this;

          this.userService.fetchOrganizations().subscribe(function (r) {
            if (r.status == 200) {
              // console.log(r.Organization);
              // r.Organization.forEach( org => {
              //   this.organizations.push(org);
              //   org.branches.forEach( (branch, i) => {
              //     this.branches[org.organisation_id].push(branch);
              //   })
              // })
              _this5.organizations = r.Organization;
            } else {
              _this5.buildError(r.msg);
            }
          }, function (apiError) {
            _this5.buildError(apiError.error.message);
          });
        }
      }, {
        key: "getOrgBranches",
        value: function getOrgBranches(id) {
          var _this6 = this;

          this.organizationBranches = null;
          this.commonService.getOrgBranches(id).subscribe(function (r) {
            if (r.type == 'data') {
              _this6.organizationBranches = r.Organization;
            }
          });
        }
      }, {
        key: "loadTargets",
        value: function loadTargets() {
          this.router.navigate(['users/targets', this.userId]);
        }
      }, {
        key: "loadPermission",
        value: function loadPermission() {
          this.router.navigate(['users/permissions', this.userId]);
        }
      }, {
        key: "gfc",
        get: function get() {
          return this.editUserForm.controls;
        }
      }]);

      return UserEditComponent;
    }();

    UserEditComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
      }];
    };

    UserEditComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-edit',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/users/user-edit/user-edit.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user-edit.component.scss */
      "./src/app/layout/users/user-edit/user-edit.component.scss")).default]
    })], UserEditComponent);
    /***/
  },

  /***/
  "./src/app/layout/users/user-new/user-new.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/layout/users/user-new/user-new.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutUsersUserNewUserNewComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".update-header {\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n  margin-left: 30px;\n}\n\n.ui.fluid.container {\n  padding: 25px;\n}\n\n.outer-basic {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n}\n\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n  padding: 30px 15px 8px;\n}\n\n.basic-header {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.text-danger {\n  color: red;\n}\n\n.ui.primary.roleActionButton.button {\n  position: relative;\n  top: -40px;\n}\n\n.btn-wrapper {\n  text-align: right;\n  margin-top: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3VzZXJzL3VzZXItbmV3L0U6XFxCZWxhbFxccHJvamVjdHNcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcdXNlcnNcXHVzZXItbmV3XFx1c2VyLW5ldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3VzZXJzL3VzZXItbmV3L3VzZXItbmV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUNBQUE7QUNDSjs7QURFQTtFQUNJLFVBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3VzZXJzL3VzZXItbmV3L3VzZXItbmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwZGF0ZS1oZWFkZXIge1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuLnVpLmZsdWlkLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljRm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDMwcHggMTVweCA4cHg7XHJcbn1cclxuXHJcbi5iYXNpYy1oZWFkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udGV4dC1kYW5nZXIge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLnVpLnByaW1hcnkucm9sZUFjdGlvbkJ1dHRvbi5idXR0b24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtNDBweDtcclxufVxyXG5cclxuLmJ0bi13cmFwcGVyIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxufSIsIi51cGRhdGUtaGVhZGVyIHtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4udWkuZmx1aWQuY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjVweDtcbn1cblxuLm91dGVyLWJhc2ljIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm94LXNoYWRvdzogM3B4IDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5vdXRlci1iYXNpY0Zvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAzMHB4IDE1cHggOHB4O1xufVxuXG4uYmFzaWMtaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi50ZXh0LWRhbmdlciB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi51aS5wcmltYXJ5LnJvbGVBY3Rpb25CdXR0b24uYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC00MHB4O1xufVxuXG4uYnRuLXdyYXBwZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/users/user-new/user-new.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/layout/users/user-new/user-new.component.ts ***!
    \*************************************************************/

  /*! exports provided: UserNewComponent */

  /***/
  function srcAppLayoutUsersUserNewUserNewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserNewComponent", function () {
      return UserNewComponent;
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


    var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/services/user.service */
    "./src/app/shared/services/user.service.ts");
    /* harmony import */


    var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/common.service */
    "./src/app/shared/services/common.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _shared_utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/utils/common */
    "./src/app/shared/utils/common.ts");

    var UserNewComponent =
    /*#__PURE__*/
    function () {
      function UserNewComponent(router, _fb, userService, commonService, toastr) {
        _classCallCheck(this, UserNewComponent);

        this.router = router;
        this._fb = _fb;
        this.userService = userService;
        this.commonService = commonService;
        this.toastr = toastr;
        this.userRoles = [];
        this.organizations = [];
        this.organizationBranches = [];
        this.countries = [];
        this.formIsSubmitted = false;
        this.saluteNames = _shared_utils_common__WEBPACK_IMPORTED_MODULE_7__["saluteNames"];
        this.statusRow = _shared_utils_common__WEBPACK_IMPORTED_MODULE_7__["statusRow"];
      }

      _createClass(UserNewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.newUserForm = this.createUserForm();
          this.getCountries();
          this.getRoles();
          this.getOrganizations();
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          $(document).ready(function () {
            $('.ui.dropdown').dropdown();
          });
        }
      }, {
        key: "btnSubmitHandler",
        value: function btnSubmitHandler() {
          var _this7 = this;

          this.formIsSubmitted = true;

          if (this.newUserForm.invalid) {
            return;
          }

          var data = {
            salute: this.gfc.saluation.value,
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
            branch_id: this.gfc.branch_id.value
          };
          this.userService.createUser(data).subscribe(function (r) {
            if (r.status == 200) {
              _this7.toastr.success(r.msg, 'Server Error !', {
                disableTimeOut: false,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });

              _this7.formIsSubmitted = false;

              _this7.router.navigate(['users']);
            } else {
              _this7.buildError(r.msg);
            }
          }, function (apiError) {
            _this7.buildError(apiError.error.message);
          });
        }
      }, {
        key: "createUserForm",
        value: function createUserForm() {
          return this._fb.group({
            saluation: ['Mr.', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            first_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            last_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            role_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            contact: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            initial: [null],
            gender: ['male', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            status: [1, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address1: [null],
            address2: [null],
            country_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            organisation_id: ['', null],
            username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            cpassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            branch_id: [null]
          }, {
            validator: this.passwordMatchValidator
          });
        }
      }, {
        key: "passwordMatchValidator",
        value: function passwordMatchValidator(control) {
          var password = control.get('password').value; // get password from our password form control

          var confirmPassword = control.get('cpassword').value; // get password from our confirmPassword form control
          // compare is the password math

          if (password !== confirmPassword) {
            // if they don't match, set an error in our confirmPassword form control
            control.get('cpassword').setErrors({
              NoPassswordMatch: true
            });
          }
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
        key: "getRoles",
        value: function getRoles() {
          var _this9 = this;

          this.userService.fetchRoles().subscribe(function (r) {
            if (r.status == 200) {
              _this9.userRoles = r.data;
            } else {
              _this9.buildError(r.msg);
            }
          }, function (apiError) {
            _this9.buildError(apiError.error.message);
          });
        }
      }, {
        key: "getOrganizations",
        value: function getOrganizations() {
          var _this10 = this;

          this.userService.fetchOrganizations().subscribe(function (r) {
            if (r.status == 200) {
              _this10.organizations = r.Organization;
            } else {
              _this10.buildError(r.msg);
            }
          }, function (apiError) {
            _this10.buildError(apiError.error.message);
          });
        }
      }, {
        key: "getOrgBranches",
        value: function getOrgBranches(id) {
          var _this11 = this;

          this.organizationBranches = null;
          this.commonService.getOrgBranches(id).subscribe(function (r) {
            if (r.type == 'data') {
              _this11.organizationBranches = r.Organization;
            }
          });
        }
      }, {
        key: "buildError",
        value: function buildError(message) {
          this.toastr.error(message, 'Server Error !', {
            disableTimeOut: false,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
        }
      }, {
        key: "gfc",
        get: function get() {
          return this.newUserForm.controls;
        }
      }]);

      return UserNewComponent;
    }();

    UserNewComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
      }];
    };

    UserNewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-new',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user-new.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/users/user-new/user-new.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user-new.component.scss */
      "./src/app/layout/users/user-new/user-new.component.scss")).default]
    })], UserNewComponent);
    /***/
  },

  /***/
  "./src/app/layout/users/user-targets/user-targets.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/layout/users/user-targets/user-targets.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutUsersUserTargetsUserTargetsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".update-header {\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n  margin-left: 30px;\n}\n\n.ui.fluid.container {\n  padding: 25px;\n}\n\n.outer-basic {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n}\n\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n  padding: 30px 15px;\n}\n\n.basic-header {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.text-danger {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3VzZXJzL3VzZXItdGFyZ2V0cy9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHVzZXJzXFx1c2VyLXRhcmdldHNcXHVzZXItdGFyZ2V0cy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3VzZXJzL3VzZXItdGFyZ2V0cy91c2VyLXRhcmdldHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQ0FBQTtBQ0NKOztBREVBO0VBQ0ksVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3VzZXJzL3VzZXItdGFyZ2V0cy91c2VyLXRhcmdldHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXBkYXRlLWhlYWRlciB7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4udWkuZmx1aWQuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpYyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWNGb3JtIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzogMzBweCAxNXB4O1xyXG59XHJcblxyXG4uYmFzaWMtaGVhZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLnRleHQtZGFuZ2VyIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbn0iLCIudXBkYXRlLWhlYWRlciB7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLnVpLmZsdWlkLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5vdXRlci1iYXNpYyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ub3V0ZXItYmFzaWNGb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMzBweCAxNXB4O1xufVxuXG4uYmFzaWMtaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi50ZXh0LWRhbmdlciB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/layout/users/user-targets/user-targets.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/layout/users/user-targets/user-targets.component.ts ***!
    \*********************************************************************/

  /*! exports provided: UserTargetsComponent, Month */

  /***/
  function srcAppLayoutUsersUserTargetsUserTargetsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserTargetsComponent", function () {
      return UserTargetsComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/services/user.service */
    "./src/app/shared/services/user.service.ts");

    var UserTargetsComponent =
    /*#__PURE__*/
    function () {
      function UserTargetsComponent(_fb, userService, toastr, activatedRoute) {
        _classCallCheck(this, UserTargetsComponent);

        this._fb = _fb;
        this.userService = userService;
        this.toastr = toastr;
        this.activatedRoute = activatedRoute;
        this.yearsList = [];
        this.monthsList = [new Month(1, 'January'), new Month(2, 'February'), new Month(3, 'March'), new Month(4, 'April'), new Month(5, 'May'), new Month(6, 'June'), new Month(7, 'July'), new Month(8, 'August'), new Month(9, 'September'), new Month(10, 'October'), new Month(11, 'November'), new Month(12, 'December')];
        this.currentYear = new Date().getFullYear();
        this.currentMonth = new Date().getMonth() + 1;
      }

      _createClass(UserTargetsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.userTargetForm = this._fb.group({
            targets: this._fb.array([this.createUserTargetForm()])
          });

          for (var y = this.currentYear; y <= this.currentYear + 5; y++) {
            this.yearsList.push(y);
          }
        }
      }, {
        key: "btnSubmitHandler",
        value: function btnSubmitHandler() {
          var _this12 = this;

          var targets = JSON.stringify({
            user_id: this.activatedRoute.snapshot.params.id,
            targets: this.userTargetForm.value.targets
          });
          this.userService.saveTargets(targets).subscribe(function (r) {
            if (r.status) {
              _this12.toastr.success(r.message, 'Success !', {
                disableTimeOut: false,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            } else {
              _this12.buildError(r.msg);
            }
          }, function (apiError) {
            _this12.buildError(apiError.error.message);
          });
          console.log(targets);
          return false;
        }
      }, {
        key: "createUserTargetForm",
        value: function createUserTargetForm() {
          return this._fb.group({
            year: [this.currentYear, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            month: [this.currentMonth, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            amount: [500, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "btnAddTarget",
        value: function btnAddTarget() {
          this.targets = this.userTargetForm.get('targets');
          this.targets.push(this.createUserTargetForm());
        }
      }, {
        key: "buildError",
        value: function buildError(message) {
          this.toastr.error(message, 'Server Error !', {
            disableTimeOut: false,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
        }
      }, {
        key: "gfc",
        get: function get() {
          return this.userTargetForm.controls;
        }
      }]);

      return UserTargetsComponent;
    }();

    UserTargetsComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    UserTargetsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-targets',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user-targets.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/users/user-targets/user-targets.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user-targets.component.scss */
      "./src/app/layout/users/user-targets/user-targets.component.scss")).default]
    })], UserTargetsComponent);

    var Month = function Month(id, name) {
      _classCallCheck(this, Month);

      this.id = id;
      this.name = name;
    };
    /***/

  },

  /***/
  "./src/app/layout/users/users-routing.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/layout/users/users-routing.module.ts ***!
    \******************************************************/

  /*! exports provided: UsersRoutingModule */

  /***/
  function srcAppLayoutUsersUsersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function () {
      return UsersRoutingModule;
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


    var _users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./users.component */
    "./src/app/layout/users/users.component.ts");
    /* harmony import */


    var _user_new_user_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user-new/user-new.component */
    "./src/app/layout/users/user-new/user-new.component.ts");
    /* harmony import */


    var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user-edit/user-edit.component */
    "./src/app/layout/users/user-edit/user-edit.component.ts");
    /* harmony import */


    var _user_targets_user_targets_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-targets/user-targets.component */
    "./src/app/layout/users/user-targets/user-targets.component.ts");

    var routes = [{
      path: '',
      component: _users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"]
    }, {
      path: 'new',
      component: _user_new_user_new_component__WEBPACK_IMPORTED_MODULE_4__["UserNewComponent"]
    }, {
      path: 'edit/:id',
      component: _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_5__["UserEditComponent"]
    }, {
      path: 'targets/:id',
      component: _user_targets_user_targets_component__WEBPACK_IMPORTED_MODULE_6__["UserTargetsComponent"]
    }];

    var UsersRoutingModule = function UsersRoutingModule() {
      _classCallCheck(this, UsersRoutingModule);
    };

    UsersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UsersRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/users/users.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/layout/users/users.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutUsersUsersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".update-header {\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n  margin-left: 30px;\n}\n\n.ui.fluid.container {\n  padding: 25px;\n}\n\n.outer-basic {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n}\n\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n}\n\n.filter_btn {\n  border-radius: 3px;\n  background-color: #437ADA;\n  margin-top: 8px;\n}\n\n.filter_btn_reset {\n  border-radius: 3px;\n  background-color: #cacbcd;\n}\n\n.filter_list {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.icon {\n  opacity: 1;\n  z-index: 100;\n}\n\n.icon .corporate_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.icon .corporate_input__placeholder-icon.cal {\n  width: 0px;\n  margin-top: 10px;\n  font-size: 13px;\n}\n\n.icon .corporate_input__placeholder-icon.call {\n  width: 15px;\n  margin-top: 10px;\n  margin-left: 7px;\n}\n\n.icon .corporate_input__placeholder-icon.calll {\n  width: 20px;\n  margin-top: 10px;\n}\n\n.icon .corporate_input__placeholder-icon.ico {\n  width: 15px;\n  margin-top: 10px;\n}\n\n.search-field-wrapper {\n  padding-bottom: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3VzZXJzL0U6XFxCZWxhbFxccHJvamVjdHNcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcdXNlcnNcXHVzZXJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FDQUo7O0FEQ0k7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ0NSOztBREFRO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0VaOztBREFRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNFWjs7QURBUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0VaOztBREFRO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDRVo7O0FER0E7RUFDSSxvQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3VzZXJzL3VzZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwZGF0ZS1oZWFkZXIge1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuLnVpLmZsdWlkLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljRm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIC8vIHBhZGRpbmc6IDUwcHg7XHJcbn1cclxuXHJcbi5maWx0ZXJfYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzdBREE7XHJcbiAgICBtYXJnaW4tdG9wOjhweDtcclxufVxyXG5cclxuLmZpbHRlcl9idG5fcmVzZXQge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojY2FjYmNkO1xyXG59XHJcblxyXG4uZmlsdGVyX2xpc3Qge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAuY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgJi5jYWwge1xyXG4gICAgICAgICAgICB3aWR0aDogMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuY2FsbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmNhbGxsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuaWNvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2VhcmNoLWZpZWxkLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMycHg7XHJcbn0iLCIudXBkYXRlLWhlYWRlciB7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLnVpLmZsdWlkLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDI1cHg7XG59XG5cbi5vdXRlci1iYXNpYyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG4ub3V0ZXItYmFzaWNGb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLmZpbHRlcl9idG4ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzdBREE7XG4gIG1hcmdpbi10b3A6IDhweDtcbn1cblxuLmZpbHRlcl9idG5fcmVzZXQge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYWNiY2Q7XG59XG5cbi5maWx0ZXJfbGlzdCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaWNvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5pY29uIC5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xuICB3aWR0aDogMjRweDtcbiAgbWFyZ2luLXRvcDogNnB4O1xufVxuLmljb24gLmNvcnBvcmF0ZV9pbnB1dF9fcGxhY2Vob2xkZXItaWNvbi5jYWwge1xuICB3aWR0aDogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uaWNvbiAuY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbGwge1xuICB3aWR0aDogMTVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDdweDtcbn1cbi5pY29uIC5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsbGwge1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5pY29uIC5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uaWNvIHtcbiAgd2lkdGg6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zZWFyY2gtZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmctYm90dG9tOiAzMnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/users/users.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/layout/users/users.component.ts ***!
    \*************************************************/

  /*! exports provided: UsersComponent */

  /***/
  function srcAppLayoutUsersUsersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersComponent", function () {
      return UsersComponent;
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


    var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/services/user.service */
    "./src/app/shared/services/user.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var UsersComponent =
    /*#__PURE__*/
    function () {
      function UsersComponent(router, _fb, userService, toastr) {
        _classCallCheck(this, UsersComponent);

        this.router = router;
        this._fb = _fb;
        this.userService = userService;
        this.toastr = toastr;
        this.formIsSubmitted = false;
        this.users = [];
        this.offset = 0;
        this.totalCount = 0;
        this.offsetEvent = {
          page: this.offset
        };
      }

      _createClass(UsersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.createSearchUserForm();
          var data = {
            page: this.offset,
            // roleType: ,
            organisation_id: 'all',
            usernameAndAgentCode: null
          };
          this.userService.fetchUsers(data).subscribe(function (r) {
            if (r.status) {
              _this13.users = r.result.data;
              _this13.totalCount = r.result.total;
              _this13.offset = r.result.page;
            } else {
              _this13.toastr.error(r.msg, 'Server Error !', {
                disableTimeOut: false,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          }, function (apiError) {
            _this13.toastr.error("Oops! ".concat(apiError.error.message), 'Server Error!', {
              disableTimeOut: false,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });
          });
        }
      }, {
        key: "searchFormSubmit",
        value: function searchFormSubmit() {
          this.formIsSubmitted = true;

          if (!this.searchUserForm.valid) {
            return;
          }

          var data = {
            search: this.gfc.corporate_type.value,
            name: this.gfc.nameAndOfficeId.value
          };
          console.log(data);
          this.formIsSubmitted = false;
          return;
        }
      }, {
        key: "addNewUser",
        value: function addNewUser() {
          return this.router.navigateByUrl('users/new');
        }
      }, {
        key: "createSearchUserForm",
        value: function createSearchUserForm() {
          this.searchUserForm = this._fb.group({
            corporate_type: ['all'],
            nameAndOfficeId: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "gfc",
        get: function get() {
          return this.searchUserForm.controls;
        }
      }]);

      return UsersComponent;
    }();

    UsersComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }];
    };

    UsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-users',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./users.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/users/users.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./users.component.scss */
      "./src/app/layout/users/users.component.scss")).default]
    })], UsersComponent);
    /***/
  },

  /***/
  "./src/app/layout/users/users.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/layout/users/users.module.ts ***!
    \**********************************************/

  /*! exports provided: UsersModule */

  /***/
  function srcAppLayoutUsersUsersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersModule", function () {
      return UsersModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _users_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./users-routing.module */
    "./src/app/layout/users/users-routing.module.ts");
    /* harmony import */


    var _users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./users.component */
    "./src/app/layout/users/users.component.ts");
    /* harmony import */


    var _user_new_user_new_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-new/user-new.component */
    "./src/app/layout/users/user-new/user-new.component.ts");
    /* harmony import */


    var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./user-edit/user-edit.component */
    "./src/app/layout/users/user-edit/user-edit.component.ts");
    /* harmony import */


    var _user_targets_user_targets_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./user-targets/user-targets.component */
    "./src/app/layout/users/user-targets/user-targets.component.ts");

    var UsersModule = function UsersModule() {
      _classCallCheck(this, UsersModule);
    };

    UsersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"], _user_new_user_new_component__WEBPACK_IMPORTED_MODULE_6__["UserNewComponent"], _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_7__["UserEditComponent"], _user_targets_user_targets_component__WEBPACK_IMPORTED_MODULE_8__["UserTargetsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _users_routing_module__WEBPACK_IMPORTED_MODULE_4__["UsersRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
    })], UsersModule);
    /***/
  },

  /***/
  "./src/app/shared/services/user.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/services/user.service.ts ***!
    \*************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppSharedServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../../environments/environment */
    "./src/environments/environment.ts");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverURL;
      }

      _createClass(UserService, [{
        key: "createUser",
        value: function createUser(data) {
          var _this14 = this;

          return this.http.post("".concat(this.apiUrl, "/api/create-new-user"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this14, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", result);

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee);
            }));
          }));
        }
      }, {
        key: "updateUser",
        value: function updateUser(data) {
          var _this15 = this;

          return this.http.put("".concat(this.apiUrl, "/api/update-user"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      return _context2.abrupt("return", result);

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }));
        }
      }, {
        key: "fetchUser",
        value: function fetchUser(id) {
          var _this16 = this;

          return this.http.get("".concat(this.apiUrl, "/api/fetch-new-user/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this16, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      return _context3.abrupt("return", result);

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
            }));
          }));
        }
      }, {
        key: "fetchUsers",
        value: function fetchUsers(data) {
          var _this17 = this;

          return this.http.post("".concat(this.apiUrl, "/api/fetch-all-users"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this17, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee4() {
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      return _context4.abrupt("return", result);

                    case 1:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));
          }));
        }
      }, {
        key: "fetchRoles",
        value: function fetchRoles() {
          var _this18 = this;

          return this.http.get("".concat(this.apiUrl, "/api/roles/list")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this18, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      return _context5.abrupt("return", result);

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));
          }));
        }
      }, {
        key: "fetchOrganizations",
        value: function fetchOrganizations() {
          var _this19 = this;

          return this.http.get("".concat(this.apiUrl, "/api/fetch-all-organization")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this19, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee6() {
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      return _context6.abrupt("return", result);

                    case 1:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));
          }));
        }
      }, {
        key: "savePermissions",
        value: function savePermissions(data) {
          var _this20 = this;

          return this.http.post("".concat(this.apiUrl, "/api/users/permission"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this20, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee7() {
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      return _context7.abrupt("return", result);

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }));
          }));
        }
      }, {
        key: "fetchPermissions",
        value: function fetchPermissions() {
          var _this21 = this;

          return this.http.get("".concat(this.apiUrl, "/api/users/permissions")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this21, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      return _context8.abrupt("return", result);

                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8);
            }));
          }));
        }
      }, {
        key: "saveTargets",
        value: function saveTargets(data) {
          var _this22 = this;

          return this.http.post("".concat(this.apiUrl, "/api/users/target"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this22, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      return _context9.abrupt("return", result);

                    case 1:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9);
            }));
          }));
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  }
}]);
//# sourceMappingURL=default~layout-users-users-module~users-users-module-es5.js.map