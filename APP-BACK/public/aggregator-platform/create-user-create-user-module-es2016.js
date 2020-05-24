(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-user-create-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user-role-management/create-user/create-user.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user-role-management/create-user/create-user.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"outer-segment\">\r\n  <div class=\"user\">\r\n    <h3 class=\"user_title\">Create New User</h3>\r\n  </div>\r\n  <div class=\"ui top attached tabular menu\">\r\n    <div class=\"active item create_tab_title\" data-tab=\"first\">Create B2B User</div>\r\n  </div>\r\n  <div class=\"ui bottom attached active tab segment tabContent-block\" data-tab=\"first\">\r\n    <div class=\" result-block\">\r\n      <form [formGroup]=\"addBusinessForm\" (ngSubmit)=\"addBussiessUser()\" class=\"ui form \">\r\n        <div class=\"ui fluid container\">\r\n          <div class=\"outer-form\">\r\n            <!-- <h4 class=\"ui header\">Basic Information</h4> -->\r\n            <div class=\"field\">\r\n              <div class=\"five fields\">\r\n                <div class=\"two wide field\">\r\n                  <label>Title</label>\r\n                  <select class=\"ui fluid dropdown\" formControlName=\"salute\">\r\n                    <option value=\"\">Title</option>\r\n                    <option *ngFor=\"let salute of saluteNames\" value=\"{{salute}}\">{{salute}}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"six wide field\"\r\n                  [ngClass]=\"{'error': ((submitted && f.first_name.errors) && f.first_name.errors.required) }\">\r\n                  <label>First Name<span class=\"mandatory\">*</span></label>\r\n                  <input type=\"text\" formControlName=\"first_name\" placeholder=\"First Name\">\r\n                  <div *ngIf=\"first_name.invalid && (first_name.dirty || first_name.touched)\" class=\"validations\">\r\n                    <div class=\"validations\" *ngIf=\"first_name.errors?.required\">\r\n                      First name is required\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"six wide field\"\r\n                  [ngClass]=\"{'error': ((submitted && f.last_name.errors) && f.last_name.errors.required) }\">\r\n                  <label>Last Name<span class=\"mandatory\">*</span></label>\r\n                  <input type=\"text\" formControlName=\"last_name\" placeholder=\"Last Name\">\r\n                  <div *ngIf=\"last_name.invalid && (last_name.dirty || last_name.touched)\" class=\"validations\">\r\n                    <div class=\"validations\" *ngIf=\"last_name.errors?.required\">\r\n                      Last Name is required\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"field\">\r\n              <div class=\"five fields\">\r\n                <div class=\"six wide field\"\r\n                  [ngClass]=\"{'error': ((submitted && f.email.errors) && (f.email.errors.required || f.email.errors.email) ) }\">\r\n                  <label>Email<span class=\"mandatory\">*</span></label>\r\n                  <input type=\"text\" formControlName=\"email\" placeholder=\"Email\" class=\"email\">\r\n                  <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"validations\">\r\n                    <div class=\"validations\" *ngIf=\"email.errors?.required\">\r\n                      Email is required\r\n                    </div>\r\n                    <div class=\"validations\" *ngIf=\"email.errors?.pattern\">\r\n                      Email must be a valid email address\r\n                    </div>\r\n                  </div>\r\n                  <div\r\n                    *ngIf=\"emailCheck && !addBusinessForm.controls['email'].invalid && (!addBusinessForm.controls['email'].dirty || !addBusinessForm.controls['email'].touched)\"\r\n                    class=\"validator-msg\">\r\n                    This Email Already Exists\r\n                  </div>\r\n                </div>\r\n                <div class=\"six wide field\"\r\n                  [ngClass]=\"{'error': ((submitted && f.mobile.errors) && f.mobile.errors.required) }\">\r\n                  <label>Contact Number<span class=\"mandatory\">*</span></label>\r\n                  <input type=\"number\" formControlName=\"mobile\" placeholder=\"Contact number\">\r\n                  <div *ngIf=\"mobile.invalid && (mobile.dirty || mobile.touched)\" class=\"validations\">\r\n                    <div class=\"validations\" *ngIf=\"mobile.errors?.required\">\r\n                      Contact number is required\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"field\">\r\n              <div class=\"fields\">\r\n                <div class=\"six wide field\">\r\n                  <label>Initials</label>\r\n                  <input type=\"text\" formControlName=\"initial\" placeholder=\"Initials(EX:BIN)\">\r\n                </div>\r\n                <div class=\"field sexRadio\">\r\n                  <div class=\"ui radio checkbox\">\r\n                    <input type=\"radio\" id=\"male\" value=\"male\" name=\"sex\" formControlName=\"sex\" class=\"hidden\">\r\n                    <label>Male</label>\r\n                  </div>\r\n\r\n                  <div class=\"ui radio checkbox\">\r\n                    <input type=\"radio\" id=\"female\" value=\"female\" name=\"sex\" formControlName=\"sex\" class=\"hidden\">\r\n                    <label>Female</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"field\">\r\n              <hr>\r\n            </div> -->\r\n            <!-- <h4 class=\"ui header\">Address Information</h4> -->\r\n            <div class=\"field\">\r\n              <!-- <label>Name</label> -->\r\n              <div class=\"five fields\">\r\n                <div class=\"six wide field\"\r\n                  [ngClass]=\"{'error': ((submitted && f.address_1.errors) && f.address_1.errors.required) }\">\r\n                  <label>Address 1<span class=\"mandatory\">*</span></label>\r\n                  <input type=\"text\" name=\"address_1\" formControlName=\"address_1\" placeholder=\"Address 1\">\r\n                  <div *ngIf=\"address_1.invalid && (address_1.dirty || address_1.touched)\" class=\"validations\">\r\n                    <div class=\"validations\" *ngIf=\"address_1.errors?.required\">\r\n                      Address is required\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"six wide field\">\r\n                  <label>Address 2</label>\r\n                  <input type=\"text\" name=\"address_2\" formControlName=\"address_2\" placeholder=\"Address 2\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"field\">\r\n              <div class=\"five fields\">\r\n                <div class=\"six wide field\"\r\n                  [ngClass]=\"{'error': ((submitted && f.country_id.errors) && f.country_id.errors.required) }\">\r\n                  <label>Country</label>\r\n                  <select class=\"ui search dropdown\" formControlName=\"country_id\">\r\n                    <option value=\"\">Select Country</option>\r\n                    <option *ngFor=\"let option of countries; let i = index\" value=\"{{option.country_id}}\">\r\n                      {{option.country}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"field\">\r\n                              <hr>\r\n                            </div>\r\n                            <h4 class=\"ui header\">Login Information</h4> -->\r\n            <div class=\"field\">\r\n              <div class=\"five fields\">\r\n                <div class=\"six wide field\"\r\n                  [ngClass]=\"{'error': ((submitted && f.username.errors) && f.username.errors.required) }\">\r\n                  <label>Username<span class=\"mandatory\">*</span></label>\r\n                  <input type=\"text\" formControlName=\"username\" placeholder=\"Username\">\r\n                  <div *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"validations\">\r\n                    <div class=\"validations\" *ngIf=\"username.errors?.required\">\r\n                      username is required\r\n                    </div>\r\n                  </div>\r\n                  <div\r\n                    *ngIf=\"userCheck && !addBusinessForm.controls['username'].invalid && (!addBusinessForm.controls['username'].dirty || !addBusinessForm.controls['username'].touched)\"\r\n                    class=\"validator-msg\">\r\n                    This User Name Already Exits.\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"field\">\r\n              <div class=\"five fields\">\r\n                <div class=\"six wide field\"\r\n                  [ngClass]=\"{'error': ((submitted && f.password.errors) && f.password.errors.required) }\">\r\n                  <label>\r\n                    Password<span class=\"mandatory\">*</span>\r\n                    <i class=\"fa fa-exclamation-circle tooltip\">\r\n                      <span class=\"tooltiptext\">\r\n                          Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character\r\n                      </span>\r\n                    </i>\r\n                  </label>\r\n                  <input type=\"password\" name=\"password\" formControlName=\"password\" placeholder=\"Password\" (change)=\"validatePassword()\">\r\n                  <div *ngIf=\"f.password.invalid && (f.password.dirty || f.password.touched)\" class=\"validations\">\r\n                      <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                      <div *ngIf=\"f.password.errors.pattern\">Password must be valid</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"six wide field\"\r\n                  [ngClass]=\"{'error': ((submitted && f.password_confirmation.errors) && ( f.password_confirmation.errors.required || f.password_confirmation.errors.unmatched) ) }\">\r\n                  <label>Confirm Password<span class=\"mandatory\">*</span></label>\r\n                  <input type=\"password\" formControlName=\"password_confirmation\" (keyup)=\"validatePassword()\"\r\n                    (change)=\"validatePassword()\" placeholder=\"Confirm Password\">\r\n                  <div *ngIf=\"password_confirmation.invalid && (password_confirmation.dirty || password_confirmation.touched)\" class=\"validations\">\r\n                    <div class=\"validations\" *ngIf=\"password_confirmation.errors?.required\">\r\n                      Confirm Password is required\r\n                    </div>\r\n                    <div class=\"validations\" *ngIf=\"password_confirmation.errors?.unmatched\">\r\n                      Password is not matching\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"field\">\r\n              <div class=\"five fields\">\r\n                <div class=\"six wide field\">\r\n                  <label>Agent</label>\r\n                  <select class=\"ui fluid dropdown\" formControlName=\"organisation_id\"\r\n                    (change)=\"changePermissions($event.target.value)\">\r\n                    <option value=\"\">Select</option>\r\n                    <option *ngFor=\"let org of childOrganisations\" value=\"{{org.organisation_id}}\">{{org.name}}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"six wide field\">\r\n                  <label>Status</label>\r\n                  <select class=\"ui fluid dropdown\" placeholder=\"Status\" formControlName=\"is_active\">\r\n                    <option value=\"\">Status</option>\r\n                    <option value=\"1\">Active</option>\r\n                    <option value=\"0\">InActive</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"field\">\r\n              <hr>\r\n            </div> -->\r\n            <!-- skills  -->\r\n            <div class=\"field\">\r\n              <div class=\"three fields\" [formGroup]=\"skillGroup\"\r\n                *ngFor=\"let skillGroup of addBusinessForm.get('skills')['controls'];let i = index;\">\r\n                <div class=\"four wide field\">\r\n                  <label>Year</label>\r\n                  <select class=\"ui fluid search dropdown\" formControlName=\"year\">\r\n                    <option value=\"\">Year</option>\r\n                    <option *ngFor=\"let year of yearList\" value=\"{{year}}\">{{year}}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"four wide field\">\r\n                  <label>Month</label>\r\n                  <select class=\"ui fluid search dropdown\" formControlName=\"month\">\r\n                    <option value=\"\">Month</option>\r\n                    <option value=\"1\">January</option>\r\n                    <option value=\"2\">February</option>\r\n                    <option value=\"3\">March</option>\r\n                    <option value=\"4\">April</option>\r\n                    <option value=\"5\">May</option>\r\n                    <option value=\"6\">June</option>\r\n                    <option value=\"7\">July</option>\r\n                    <option value=\"8\">August</option>\r\n                    <option value=\"9\">September</option>\r\n                    <option value=\"10\">October</option>\r\n                    <option value=\"11\">November</option>\r\n                    <option value=\"12\">December</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"four wide field\">\r\n                  <label>Target Amount</label>\r\n                  <input type=\"number\" formControlName=\"target_amount\" placeholder=\"Target Amount\">\r\n                </div>\r\n                <div class=\"newAgency_topAlign\" title=\"Click to add more\" (click)=\"addSkill()\"\r\n                  *ngIf=\"i==(addBusinessForm.get('skills')['controls'].length-1)\">\r\n                  <i class=\"icon\">\r\n                    <img src=\"./../../../../../assets/icons/add_icon.png\" />\r\n                  </i>\r\n                </div>\r\n                <div class=\"newAgency_topAlign\" title=\"Click to remove this\" *ngIf=\"i!=0\" tabindex=\"0\"\r\n                  (click)=\"removeSkill(i)\">\r\n                  <i class=\"icon\">\r\n                    <img src=\"./../../../../../assets/icons/remove_icon.png\" />\r\n                  </i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"field\">\r\n              <hr>\r\n            </div> -->\r\n            <!-- <h4 class=\"ui header\">Role Permission</h4> -->\r\n            <div class=\"field\">\r\n              <div class=\"fields rolePermissionsShow\">\r\n                \r\n                <div class=\"ui grid field\" *ngIf=\"rolePermissions && rolePermissions.keys\">\r\n                    <label class=\"role-perm-label\">Role Permission</label>\r\n                  <div *ngFor=\"let key of rolePermissions.keys\" class=\"seven wide column role-perm-block showBorderPar\">\r\n                    <div class=\"ui checkbox mar-right-15px outer-checkbox\">\r\n                      <input type=\"checkbox\" name=\"search\" id=\"{{key}}\" [checked]=\"rolePermissions['data'][key].checked\"\r\n                        (change)=\"checkAllChild($event,rolePermissions['data'][key])\">\r\n                      <label for=\"{{key}}\"><span\r\n                          class=\"pos_access-rights head\">{{ rolePermissions['data'][key].display }}</span>\r\n                        <i *ngIf=\"!rolePermissions['data'][key].checked\" class=\"level down alternate icon role-head\"></i>\r\n                        <i *ngIf=\"rolePermissions['data'][key].checked\" class=\"level up alternate icon role-head\"></i>\r\n                      </label>\r\n                    </div>\r\n                    <div [hidden]=\"!rolePermissions['data'][key].checked\" class=\"padd-left-15 parentEle \"\r\n                      [ngClass]=\"{'childBlock': (rolePermissions['data'][key].accessType.length)}\">\r\n                      <ng-container *ngFor=\"let accessObj of rolePermissions['data'][key].accessType; let idx = index;\">\r\n                        <div [ngClass]=\"{'showOnlyParent': (!accessObj.accessType.length)}\"\r\n                          [ngClass]=\"{'ui grid field': (accessObj.accessType.length)}\" class=\"child-container\">\r\n                          <div [ngClass]=\"{'sixteen wide column showBorderChild': (accessObj.accessType.length)}\">\r\n                            <div class=\"ui checkbox mar-right-15 inner-checkbox\">\r\n                              <input type=\"checkbox\" id=\"test-{{idx}}-{{ rolePermissions['data'][key].display }}\"\r\n                                name=\"search\" [checked]=\"accessObj.checked\" (change)=\"checkChild($event,accessObj, true)\">\r\n                              <label for=\"test-{{idx}}-{{ rolePermissions['data'][key].display }}\"><span\r\n                                  class=\"pos_access-rights\">{{ accessObj.display }}</span>\r\n                                <i *ngIf=\"accessObj.accessType.length && !accessObj.checked\"\r\n                                  class=\"level down alternate icon\"></i>\r\n                                <i *ngIf=\"accessObj.accessType.length && accessObj.checked\"\r\n                                  class=\"level up alternate icon\"></i>\r\n                              </label>\r\n                              <!-- [ngClass]=\"{'childBlock': (accessObj.accessType.length)}\" -->\r\n                              <div [hidden]=\"!accessObj.checked\" [ngClass]=\"{'child-obj-block': (accessObj.accessType.length && accessObj.checked) }\"\r\n                               >\r\n                                <div class=\"\">\r\n                                  <div *ngFor=\"let childObj of accessObj.accessType; let cdx = index\"\r\n                                    class=\"ui checkbox mar-right-15 mar-top-15\">\r\n                                    <input type=\"checkbox\" id=\"test-{{cdx}}-chld-{{accessObj.display}}\" name=\"search\"\r\n                                      [checked]=\"childObj.checked\" (change)=\"checkChild($event,childObj)\">\r\n                                    <label for=\"test-{{cdx}}-chld-{{accessObj.display}}\"><span\r\n                                        class=\"pos_access-rights\">{{ childObj.display }}</span></label>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </ng-container>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"eight wide field\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"bookings_btn-panel save-btn-block\">\r\n            <button class=\"ui primary button create_btn\" tabindex=\"0\">\r\n              <span class=\"create_text\">Create</span>\r\n            </button>\r\n          </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/layout/user-role-management/create-user/create-user-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/user-role-management/create-user/create-user-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: CreateUserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserRoutingModule", function() { return CreateUserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _create_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-user.component */ "./src/app/layout/user-role-management/create-user/create-user.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: '', component: _create_user_component__WEBPACK_IMPORTED_MODULE_1__["CreateUserComponent"] }
];
let CreateUserRoutingModule = class CreateUserRoutingModule {
};
CreateUserRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], CreateUserRoutingModule);



/***/ }),

/***/ "./src/app/layout/user-role-management/create-user/create-user.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/layout/user-role-management/create-user/create-user.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.outer-segment {\n  margin: 0px;\n  -webkit-margin-after: 180px;\n          margin-block-end: 180px;\n}\n.user {\n  padding: 0px 32px;\n}\n.user_title {\n  margin: 0;\n  font-style: normal;\n  font-weight: 400 !important;\n  font-size: 20px;\n  line-height: 23px;\n  color: #4F4F4F;\n}\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n.ui.header {\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 15px;\n}\n.five.wide.field.gender_check {\n  margin-top: 10px;\n}\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n.create_tab_title.corporate_staff {\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n.outer-form,\n.outer_corpForm {\n  box-sizing: border-box;\n  border-radius: 5px;\n  margin: 28px 25px;\n  padding: 26px 24px;\n}\n.ui.form.b2b_basic_form,\n.ui.form.corp_form {\n  margin: 17px 23px 25px 22px;\n}\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #E0E0E0;\n}\n.add_btn {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  margin: 20px;\n  font-weight: 500;\n  line-height: 15px;\n}\ninput {\n  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.2);\n}\n.field input::-webkit-input-placeholder {\n  font-size: 12px;\n}\n.field input::-moz-placeholder {\n  font-size: 12px;\n}\n.field input::-ms-input-placeholder {\n  font-size: 12px;\n}\n.field input::placeholder {\n  font-size: 12px;\n}\n.dropdown .text {\n  font-size: 12px;\n}\n.create_btn {\n  box-sizing: border-box;\n  border-radius: 3px;\n  background-color: #3867b1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n  padding-right: 35px;\n  position: relative;\n  right: 30px;\n  bottom: 104px;\n}\n.create_text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 15px;\n  padding-left: 10px;\n}\n.corporate_input__placeholder-icon {\n  position: relative;\n  width: 18px;\n  bottom: 28px;\n  left: 9px;\n}\ndiv.upload {\n  box-sizing: border-box;\n  height: 15px;\n  width: 123px;\n  border-radius: 3px;\n  background-color: #FFF;\n  border: 0.5px solid #808080;\n  margin-top: -25px;\n  box-shadow: 0 0.25px 0.1px 0 rgba(0, 0, 0, 0.5);\n}\ndiv.upload input {\n  display: block !important;\n  width: 123px !important;\n  height: 15px !important;\n  opacity: 0 !important;\n  overflow: hidden !important;\n}\n.no_choosen {\n  height: 10px;\n  width: 46px;\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 9px;\n  position: relative;\n  left: 132px;\n  bottom: 20px;\n  line-height: 10px;\n}\n.file_choose {\n  position: relative;\n  left: 31px;\n  bottom: 10px;\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 9px;\n  line-height: 10px;\n}\n.issue_date {\n  text-indent: 17px;\n}\n.countryListUser {\n  padding: 0px !important;\n}\n.superTArr {\n  margin-left: 10px;\n}\n.sexRadio {\n  padding: 9px;\n}\n.sexRadio .radio {\n  margin-right: 5px;\n  margin-top: 22px;\n}\n.menu_permission {\n  margin-right: 100px;\n  padding: 10px;\n}\n.btn-delete {\n  border-radius: 3px;\n  background-color: #e21717;\n}\n.btn-add {\n  border-radius: 3px;\n  background-color: #3867B1;\n}\n.permission-block {\n  margin-top: 15px;\n  display: block;\n}\n.padd-left-15 {\n  padding-left: 15px;\n}\n.newAgency_topAlign {\n  padding-top: 1vh;\n}\n.showOnlyParent {\n  width: 120px;\n  float: left;\n}\n.rolePermissionsShow label {\n  cursor: pointer;\n}\n.rolePermissionsShow .mar-right-15 {\n  margin-right: 15px;\n  margin-bottom: 16px;\n}\n.rolePermissionsShow .mar-top-15 {\n  margin-top: 15px;\n}\n.rolePermissionsShow .showBorderPar {\n  border: 1px solid #eee;\n  margin-bottom: 10px;\n  margin-left: 0px;\n  margin-right: 18px;\n}\n.rolePermissionsShow .showBorderPar .showBorderChild {\n  padding: 0px 10px 0;\n}\n.rolePermissionsShow .parentEle {\n  margin-top: 10px;\n}\n.rolePermissionsShow .childBlock {\n  padding-left: 10px;\n  margin-top: 10px;\n  margin-left: 15px;\n}\n.validations {\n  color: red;\n  font-size: 12px;\n}\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n.ui.form .three.wide.field {\n  margin-bottom: 16px;\n}\ni.icon {\n  margin-top: 24px;\n}\n.tooltip {\n  position: relative;\n  display: inline-block;\n  float: right;\n}\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 160px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 10px;\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -160px;\n}\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n.role-perm-label {\n  display: block;\n  width: 100%;\n  padding-left: 0px;\n}\n.role-perm-block {\n  border: 1px solid #DADCE0;\n  box-sizing: border-box;\n  border-radius: 10px;\n  margin: 8px;\n}\n.role-perm-block i.icon {\n  margin-top: 0px;\n}\n.role-perm-block .pos_access-rights {\n  color: rgba(24, 27, 32, 0.7);\n  font-size: 13px;\n}\n.role-perm-block .pos_access-rights.head {\n  color: #181B20;\n  font-weight: 500 !important;\n  padding-bottom: 25px;\n}\n.role-perm-block .ui.checkbox label:before {\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n}\n.role-perm-block .ui.checkbox label:after {\n  left: -1px;\n}\n.role-perm-block .ui.checkbox input:checked ~ label span {\n  color: #181B20;\n}\n.role-perm-block .ui.checkbox input:checked ~ label:before {\n  border: none;\n}\n.role-perm-block .ui.checkbox input:checked ~ .box:before {\n  border: none;\n}\n.role-perm-block .ui.checkbox.inner-checkbox label:after {\n  font-size: 10px;\n}\n.role-perm-block .ui.checkbox.inner-checkbox input:checked ~ label:before {\n  background: #437ADA;\n}\n.role-perm-block .ui.checkbox.inner-checkbox input:checked ~ label:after {\n  color: #fff;\n}\n.role-perm-block .ui.checkbox.inner-checkbox input:checked ~ .box:after {\n  color: #fff;\n}\n.role-perm-block .ui.checkbox.outer-checkbox {\n  width: 100%;\n}\n.role-perm-block .ui.checkbox.outer-checkbox label i.icon {\n  float: right;\n}\n.role-perm-block .ui.checkbox.outer-checkbox input:checked ~ label .pos_access-rights.head {\n  color: #181B20;\n  font-weight: 700 !important;\n}\n.role-perm-block .ui.checkbox.outer-checkbox input:checked ~ label:before, .role-perm-block .ui.checkbox.outer-checkbox input:checked ~ .box:before {\n  border: 1px solid rgba(6, 40, 98, 0.3);\n}\n.role-perm-block .ui.checkbox.outer-checkbox input:checked ~ .box:after, .role-perm-block .ui.checkbox.outer-checkbox input:checked ~ label:after {\n  content: \"•\";\n  font-size: 36px;\n  top: -5px;\n  color: #1B61DD;\n}\n.result-block {\n  width: 1100px;\n  margin: 32px auto;\n}\n.ui.form .six.wide.field, .ui.form .four.wide.field {\n  margin-bottom: 16px;\n}\n.save-btn-block {\n  width: 1100px;\n  margin: 0 auto;\n  position: relative;\n  top: 140px;\n  right: 10px;\n}\n.save-btn-block button {\n  float: right;\n  margin-right: 0px;\n  margin-top: 20px;\n}\n.child-container {\n  display: inline-block;\n  min-width: 180px;\n}\n.child-obj-block {\n  border: 1px solid #DADCE0;\n  box-sizing: border-box;\n  border-radius: 10px;\n  margin: 8px;\n  padding: 8px;\n  max-width: 94px;\n}\n.child-obj-block .ui.checkbox {\n  display: block;\n  padding: 8px;\n}\n@media (max-width: 1440px) {\n  .result-block {\n    width: auto;\n    margin: 24px;\n  }\n\n  .user {\n    padding-left: 24px;\n  }\n\n  .save-btn-block {\n    width: auto;\n    right: -58px;\n  }\n}\n@media (max-width: 1280px) {\n  .result-block {\n    margin: 20px;\n  }\n\n  .user {\n    padding-left: 20px;\n  }\n\n  .save-btn-block {\n    width: auto;\n    right: -48px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3VzZXItcm9sZS1tYW5hZ2VtZW50L2NyZWF0ZS11c2VyL2NyZWF0ZS11c2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvdXNlci1yb2xlLW1hbmFnZW1lbnQvY3JlYXRlLXVzZXIvRTpcXEJlbGFsXFxwcm9qZWN0c1xccHJvZHVjdGlvbi1idWlsZFxcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFx1c2VyLXJvbGUtbWFuYWdlbWVudFxcY3JlYXRlLXVzZXJcXGNyZWF0ZS11c2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLFdBQUE7RUFDQSwyQkFBQTtVQUFBLHVCQUFBO0FERUo7QUNDQTtFQUNFLGlCQUFBO0FERUY7QUNDQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBREVKO0FDQ0E7RUFDSSxnQkFBQTtBREVKO0FDQ0E7RUFDSSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBREVKO0FDQ0E7RUFDSSxnQkFBQTtBREVKO0FDQ0E7RUFDSSxrQ0FBQTtFQUNBLHdDQUFBO0FERUo7QUNDQTtFQUNJLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBREVKO0FDQ0E7RUFDSSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FERUo7QUNDQTtFQUNJLDRDQUFBO0FERUo7QUNDQTs7RUFFSSxzQkFBQTtFQUNBLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSxrQkFBQTtBRENKO0FDRUE7O0VBRUksMkJBQUE7QURDSjtBQ0VBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FEQ0o7QUNFQTtFQUNJLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBRENKO0FDRUE7RUFDSSxnREFBQTtBRENKO0FDRUE7RUFDSSxlQUFBO0FEQ0o7QUNGQTtFQUNJLGVBQUE7QURDSjtBQ0ZBO0VBQ0ksZUFBQTtBRENKO0FDRkE7RUFDSSxlQUFBO0FEQ0o7QUNFQTtFQUNJLGVBQUE7QURDSjtBQ0VBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBRUEsaUZBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QURBSjtBQ0dBO0VBQ0ksV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBREFKO0FDR0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBREFKO0FDR0E7RUFDSSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQ0FBQTtBREFKO0FDR0E7RUFDSSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FEQUo7QUNHQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBREFKO0FDR0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FEQUo7QUNHQTtFQUNJLGlCQUFBO0FEQUo7QUNHQTtFQUNJLHVCQUFBO0FEQUo7QUNHQTtFQUNJLGlCQUFBO0FEQUo7QUNHQTtFQUNJLFlBQUE7QURBSjtBQ0dBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBREFKO0FDR0E7RUFDSSxtQkFBQTtFQUNBLGFBQUE7QURBSjtBQ0dBO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtBREFKO0FDR0E7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FEQUo7QUNHQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtBREFKO0FDR0E7RUFDSSxrQkFBQTtBREFKO0FDR0E7RUFDSSxnQkFBQTtBREFKO0FDR0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBREFKO0FDSUk7RUFDSSxlQUFBO0FERFI7QUNHSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUREUjtBQ0dJO0VBQ0ksZ0JBQUE7QUREUjtBQ0dJO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUREUjtBQ0VRO0VBRUksbUJBQUE7QUREWjtBQ0tJO0VBQ0ksZ0JBQUE7QURIUjtBQ0tJO0VBRUksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FESlI7QUNnQkE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtBRGJKO0FDZ0JBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FEYko7QUNnQkE7RUFDSSxtQkFBQTtBRGJKO0FDZ0JBO0VBQ0ksZ0JBQUE7QURiSjtBQ2dCQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FEYko7QUNnQkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QURiSjtBQ2dCQTtFQUNJLG1CQUFBO0FEYko7QUNnQkE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FEYko7QUNxQkE7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FEbEJKO0FDbUJJO0VBQ0ksZUFBQTtBRGpCUjtBQ21CSTtFQUNJLDRCQUFBO0VBQ0EsZUFBQTtBRGpCUjtBQ2tCUTtFQUNJLGNBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FEaEJaO0FDcUJZO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBRG5CaEI7QUNxQlk7RUFDSSxVQUFBO0FEbkJoQjtBQ3VCWTtFQUNJLGNBQUE7QURyQmhCO0FDdUJZO0VBQ0ksWUFBQTtBRHJCaEI7QUN3QlE7RUFDSSxZQUFBO0FEdEJaO0FDMkJZO0VBQ0ksZUFBQTtBRHpCaEI7QUM2Qlk7RUFDSSxtQkFBQTtBRDNCaEI7QUM2Qlk7RUFDSSxXQUFBO0FEM0JoQjtBQytCWTtFQUNJLFdBQUE7QUQ3QmhCO0FDaUNJO0VBQ0ksV0FBQTtBRC9CUjtBQ2lDWTtFQUNJLFlBQUE7QUQvQmhCO0FDbUNZO0VBQ0ksY0FBQTtFQUNBLDJCQUFBO0FEakNoQjtBQ29DUTtFQUNJLHNDQUFBO0FEbENaO0FDb0NRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBRGxDWjtBQ3VDQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBRHBDSjtBQ3VDQTtFQUNJLG1CQUFBO0FEcENKO0FDdUNBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FEcENKO0FDcUNJO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QURuQ1I7QUN1Q0E7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0FEcENKO0FDdUNBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FEcENKO0FDcUNJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QURuQ1I7QUN1Q0E7RUFDSTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VEcENOOztFQ3NDRTtJQUNJLGtCQUFBO0VEbkNOOztFQ3FDRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VEbENOO0FBQ0Y7QUNxQ0E7RUFDSTtJQUNJLFlBQUE7RURuQ047O0VDcUNFO0lBQ0ksa0JBQUE7RURsQ047O0VDb0NFO0lBQ0ksV0FBQTtJQUNBLFlBQUE7RURqQ047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC91c2VyLXJvbGUtbWFuYWdlbWVudC9jcmVhdGUtdXNlci9jcmVhdGUtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5vdXRlci1zZWdtZW50IHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDE4MHB4O1xufVxuXG4udXNlciB7XG4gIHBhZGRpbmc6IDBweCAzMnB4O1xufVxuXG4udXNlcl90aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGNvbG9yOiAjNEY0RjRGO1xufVxuXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi51aS5oZWFkZXIge1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG59XG5cbi5maXZlLndpZGUuZmllbGQuZ2VuZGVyX2NoZWNrIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnVpLnRvcC5hdHRhY2hlZC5tZW51ID4gLml0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwLjI4NTcxNDI5cmVtIDAgMCAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xufVxuXG4udWkuYm90dG9tLmF0dGFjaGVkLmFjdGl2ZS50YWIuc2VnbWVudCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE3cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTdweDtcbn1cblxuLmNyZWF0ZV90YWJfdGl0bGUuY29ycG9yYXRlX3N0YWZmIHtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YWIuc2VnbWVudCB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4ub3V0ZXItZm9ybSxcbi5vdXRlcl9jb3JwRm9ybSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAyOHB4IDI1cHg7XG4gIHBhZGRpbmc6IDI2cHggMjRweDtcbn1cblxuLnVpLmZvcm0uYjJiX2Jhc2ljX2Zvcm0sXG4udWkuZm9ybS5jb3JwX2Zvcm0ge1xuICBtYXJnaW46IDE3cHggMjNweCAyNXB4IDIycHg7XG59XG5cbmhyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGJvcmRlcjogMC41cHggc29saWQgI0UwRTBFMDtcbn1cblxuLmFkZF9idG4ge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbn1cblxuaW5wdXQge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5kcm9wZG93biAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNyZWF0ZV9idG4ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODY3YjE7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMzBweDtcbiAgYm90dG9tOiAxMDRweDtcbn1cblxuLmNyZWF0ZV90ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxOHB4O1xuICBib3R0b206IDI4cHg7XG4gIGxlZnQ6IDlweDtcbn1cblxuZGl2LnVwbG9hZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDEyM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJvcmRlcjogMC41cHggc29saWQgIzgwODA4MDtcbiAgbWFyZ2luLXRvcDogLTI1cHg7XG4gIGJveC1zaGFkb3c6IDAgMC4yNXB4IDAuMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG5kaXYudXBsb2FkIGlucHV0IHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEyM3B4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLm5vX2Nob29zZW4ge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiA0NnB4O1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDEzMnB4O1xuICBib3R0b206IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xufVxuXG4uZmlsZV9jaG9vc2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDMxcHg7XG4gIGJvdHRvbTogMTBweDtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDlweDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG59XG5cbi5pc3N1ZV9kYXRlIHtcbiAgdGV4dC1pbmRlbnQ6IDE3cHg7XG59XG5cbi5jb3VudHJ5TGlzdFVzZXIge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnN1cGVyVEFyciB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uc2V4UmFkaW8ge1xuICBwYWRkaW5nOiA5cHg7XG59XG5cbi5zZXhSYWRpbyAucmFkaW8ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLXRvcDogMjJweDtcbn1cblxuLm1lbnVfcGVybWlzc2lvbiB7XG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5idG4tZGVsZXRlIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIxNzE3O1xufVxuXG4uYnRuLWFkZCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbn1cblxuLnBlcm1pc3Npb24tYmxvY2sge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnBhZGQtbGVmdC0xNSB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLm5ld0FnZW5jeV90b3BBbGlnbiB7XG4gIHBhZGRpbmctdG9wOiAxdmg7XG59XG5cbi5zaG93T25seVBhcmVudCB7XG4gIHdpZHRoOiAxMjBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5yb2xlUGVybWlzc2lvbnNTaG93IGxhYmVsIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJvbGVQZXJtaXNzaW9uc1Nob3cgLm1hci1yaWdodC0xNSB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cbi5yb2xlUGVybWlzc2lvbnNTaG93IC5tYXItdG9wLTE1IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5yb2xlUGVybWlzc2lvbnNTaG93IC5zaG93Qm9yZGVyUGFyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xufVxuLnJvbGVQZXJtaXNzaW9uc1Nob3cgLnNob3dCb3JkZXJQYXIgLnNob3dCb3JkZXJDaGlsZCB7XG4gIHBhZGRpbmc6IDBweCAxMHB4IDA7XG59XG4ucm9sZVBlcm1pc3Npb25zU2hvdyAucGFyZW50RWxlIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5yb2xlUGVybWlzc2lvbnNTaG93IC5jaGlsZEJsb2NrIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLnZhbGlkYXRpb25zIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udWkuZm9ybSAuZmllbGQgPiBsYWJlbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbGluZS1oZWlnaHQ6IDEzcHg7XG4gIGNvbG9yOiAjMTgxQjIwO1xuICBtYXJnaW46IDBweCAwcHggOHB4O1xufVxuXG4udWkuZm9ybSAudGhyZWUud2lkZS5maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbmkuaWNvbiB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbi50b29sdGlwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB3aWR0aDogMTYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xuICBib3R0b206IDEwMCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IC0xNjBweDtcbn1cblxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cblxuLnJvbGUtcGVybS1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5yb2xlLXBlcm0tYmxvY2sge1xuICBib3JkZXI6IDFweCBzb2xpZCAjREFEQ0UwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDhweDtcbn1cbi5yb2xlLXBlcm0tYmxvY2sgaS5pY29uIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLnJvbGUtcGVybS1ibG9jayAucG9zX2FjY2Vzcy1yaWdodHMge1xuICBjb2xvcjogcmdiYSgyNCwgMjcsIDMyLCAwLjcpO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ucm9sZS1wZXJtLWJsb2NrIC5wb3NfYWNjZXNzLXJpZ2h0cy5oZWFkIHtcbiAgY29sb3I6ICMxODFCMjA7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG59XG4ucm9sZS1wZXJtLWJsb2NrIC51aS5jaGVja2JveCBsYWJlbDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG59XG4ucm9sZS1wZXJtLWJsb2NrIC51aS5jaGVja2JveCBsYWJlbDphZnRlciB7XG4gIGxlZnQ6IC0xcHg7XG59XG4ucm9sZS1wZXJtLWJsb2NrIC51aS5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gbGFiZWwgc3BhbiB7XG4gIGNvbG9yOiAjMTgxQjIwO1xufVxuLnJvbGUtcGVybS1ibG9jayAudWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmJlZm9yZSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5yb2xlLXBlcm0tYmxvY2sgLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuYm94OmJlZm9yZSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5yb2xlLXBlcm0tYmxvY2sgLnVpLmNoZWNrYm94LmlubmVyLWNoZWNrYm94IGxhYmVsOmFmdGVyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLnJvbGUtcGVybS1ibG9jayAudWkuY2hlY2tib3guaW5uZXItY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICM0MzdBREE7XG59XG4ucm9sZS1wZXJtLWJsb2NrIC51aS5jaGVja2JveC5pbm5lci1jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YWZ0ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5yb2xlLXBlcm0tYmxvY2sgLnVpLmNoZWNrYm94LmlubmVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuYm94OmFmdGVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ucm9sZS1wZXJtLWJsb2NrIC51aS5jaGVja2JveC5vdXRlci1jaGVja2JveCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnJvbGUtcGVybS1ibG9jayAudWkuY2hlY2tib3gub3V0ZXItY2hlY2tib3ggbGFiZWwgaS5pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnJvbGUtcGVybS1ibG9jayAudWkuY2hlY2tib3gub3V0ZXItY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIC5wb3NfYWNjZXNzLXJpZ2h0cy5oZWFkIHtcbiAgY29sb3I6ICMxODFCMjA7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbn1cbi5yb2xlLXBlcm0tYmxvY2sgLnVpLmNoZWNrYm94Lm91dGVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpiZWZvcmUsIC5yb2xlLXBlcm0tYmxvY2sgLnVpLmNoZWNrYm94Lm91dGVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuYm94OmJlZm9yZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNiwgNDAsIDk4LCAwLjMpO1xufVxuLnJvbGUtcGVybS1ibG9jayAudWkuY2hlY2tib3gub3V0ZXItY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5ib3g6YWZ0ZXIsIC5yb2xlLXBlcm0tYmxvY2sgLnVpLmNoZWNrYm94Lm91dGVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4oCiXCI7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgdG9wOiAtNXB4O1xuICBjb2xvcjogIzFCNjFERDtcbn1cblxuLnJlc3VsdC1ibG9jayB7XG4gIHdpZHRoOiAxMTAwcHg7XG4gIG1hcmdpbjogMzJweCBhdXRvO1xufVxuXG4udWkuZm9ybSAuc2l4LndpZGUuZmllbGQsIC51aS5mb3JtIC5mb3VyLndpZGUuZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4uc2F2ZS1idG4tYmxvY2sge1xuICB3aWR0aDogMTEwMHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDE0MHB4O1xuICByaWdodDogMTBweDtcbn1cbi5zYXZlLWJ0bi1ibG9jayBidXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uY2hpbGQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDE4MHB4O1xufVxuXG4uY2hpbGQtb2JqLWJsb2NrIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0RBRENFMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiA4cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWF4LXdpZHRoOiA5NHB4O1xufVxuLmNoaWxkLW9iai1ibG9jayAudWkuY2hlY2tib3gge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogOHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5yZXN1bHQtYmxvY2sge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1hcmdpbjogMjRweDtcbiAgfVxuXG4gIC51c2VyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gIH1cblxuICAuc2F2ZS1idG4tYmxvY2sge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHJpZ2h0OiAtNThweDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xuICAucmVzdWx0LWJsb2NrIHtcbiAgICBtYXJnaW46IDIwcHg7XG4gIH1cblxuICAudXNlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICB9XG5cbiAgLnNhdmUtYnRuLWJsb2NrIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICByaWdodDogLTQ4cHg7XG4gIH1cbn0iLCIub3V0ZXItc2VnbWVudCB7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIG1hcmdpbi1ibG9jay1lbmQ6IDE4MHB4O1xyXG59XHJcblxyXG4udXNlciB7XHJcbiAgcGFkZGluZzogMHB4IDMycHg7XHJcbn1cclxuXHJcbi51c2VyX3RpdGxlIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi51aS5oZWFkZXIge1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5maXZlLndpZGUuZmllbGQuZ2VuZGVyX2NoZWNrIHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQubWVudT4uaXRlbSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjg1NzE0MjlyZW0gMCAwIDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udWkuYm90dG9tLmF0dGFjaGVkLmFjdGl2ZS50YWIuc2VnbWVudCB7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxN3B4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTdweDtcclxufVxyXG5cclxuLmNyZWF0ZV90YWJfdGl0bGUuY29ycG9yYXRlX3N0YWZmIHtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbi50YWIuc2VnbWVudCB7XHJcbiAgICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuLm91dGVyLWZvcm0sXHJcbi5vdXRlcl9jb3JwRm9ybSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLy8gYm9yZGVyOiAwLjVweCBzb2xpZCAjYzdjN2M3O1xyXG4gICAgbWFyZ2luOiAyOHB4IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAyNnB4IDI0cHg7XHJcbn1cclxuXHJcbi51aS5mb3JtLmIyYl9iYXNpY19mb3JtLFxyXG4udWkuZm9ybS5jb3JwX2Zvcm0ge1xyXG4gICAgbWFyZ2luOiAxN3B4IDIzcHggMjVweCAyMnB4O1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNFMEUwRTA7XHJcbn1cclxuXHJcbi5hZGRfYnRuIHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi5maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24gLnRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uY3JlYXRlX2J0biB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdiMTtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNGRkY7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IDMwcHg7XHJcbiAgICBib3R0b206IDEwNHB4O1xyXG59XHJcblxyXG4uY3JlYXRlX3RleHQge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBib3R0b206IDI4cHg7XHJcbiAgICBsZWZ0OiA5cHg7XHJcbn1cclxuXHJcbmRpdi51cGxvYWQge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHdpZHRoOiAxMjNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkICM4MDgwODA7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMC4yNXB4IDAuMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG5kaXYudXBsb2FkIGlucHV0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTIzcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubm9fY2hvb3NlbiB7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogNDZweDtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAxMzJweDtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uZmlsZV9jaG9vc2Uge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMzFweDtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxufVxyXG5cclxuLmlzc3VlX2RhdGUge1xyXG4gICAgdGV4dC1pbmRlbnQ6IDE3cHg7XHJcbn1cclxuXHJcbi5jb3VudHJ5TGlzdFVzZXIge1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zdXBlclRBcnIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zZXhSYWRpbyB7XHJcbiAgICBwYWRkaW5nOiA5cHg7XHJcbn1cclxuXHJcbi5zZXhSYWRpbyAucmFkaW8ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMnB4O1xyXG59XHJcblxyXG4ubWVudV9wZXJtaXNzaW9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uYnRuLWRlbGV0ZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2LCAyMywgMjMpO1xyXG59XHJcblxyXG4uYnRuLWFkZCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xyXG59XHJcblxyXG4ucGVybWlzc2lvbi1ibG9jayB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5wYWRkLWxlZnQtMTUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4ubmV3QWdlbmN5X3RvcEFsaWduIHtcclxuICAgIHBhZGRpbmctdG9wOiAxdmg7XHJcbn1cclxuXHJcbi5zaG93T25seVBhcmVudCB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnJvbGVQZXJtaXNzaW9uc1Nob3cge1xyXG4gICAgbGFiZWwge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgIC5tYXItcmlnaHQtMTUge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgfVxyXG4gICAgLm1hci10b3AtMTUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuc2hvd0JvcmRlclBhciB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xyXG4gICAgICAgIC5zaG93Qm9yZGVyQ2hpbGQge1xyXG4gICAgICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweCAwO1xyXG4gICAgICAgICAgICAvLyBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wYXJlbnRFbGUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuY2hpbGRCbG9jayB7XHJcbiAgICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAvLyBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIC8vLnBhcmVudEVsZVNpbmdsZXtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAvLyBwYWRkaW5nOiAxNXB4O1xyXG4gICAgLy8gaGVpZ2h0OiA1MHB4O1xyXG4gICAgLy99XHJcbn1cclxuXHJcbi52YWxpZGF0aW9ucyB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4udWkuZm9ybSAuZmllbGQ+bGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgY29sb3I6ICMxODFCMjA7XHJcbiAgICBtYXJnaW46IDBweCAwcHggOHB4O1xyXG59XHJcblxyXG4udWkuZm9ybSAudGhyZWUud2lkZS5maWVsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG5pLmljb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxufVxyXG5cclxuLnRvb2x0aXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3R0b206IDEwMCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogLTE2MHB4O1xyXG59XHJcblxyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLnJvbGUtcGVybS1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi8vIC5yb2xlLWhlYWQge1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgdG9wOiAtMjVweDtcclxuLy8gfVxyXG5cclxuLnJvbGUtcGVybS1ibG9jayB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREFEQ0UwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIGkuaWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG4gICAgLnBvc19hY2Nlc3MtcmlnaHRzIHtcclxuICAgICAgICBjb2xvcjogcmdiYSgyNCwgMjcsIDMyLCAwLjcpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAmLmhlYWQge1xyXG4gICAgICAgICAgICBjb2xvcjogIzE4MUIyMDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudWkuY2hlY2tib3gge1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAtMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0OmNoZWNrZWR+bGFiZWwge1xyXG4gICAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTgxQjIwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dDpjaGVja2Vkfi5ib3g6YmVmb3JlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH0gXHJcbiAgICAudWkuY2hlY2tib3guaW5uZXItY2hlY2tib3gge1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQ6Y2hlY2tlZH5sYWJlbCB7XHJcbiAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM0MzdBREE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dDpjaGVja2Vkfi5ib3gge1xyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnVpLmNoZWNrYm94Lm91dGVyLWNoZWNrYm94IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICAgIGkuaWNvbiB7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQ6Y2hlY2tlZH5sYWJlbCB7XHJcbiAgICAgICAgICAgIC5wb3NfYWNjZXNzLXJpZ2h0cy5oZWFkIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTgxQjIwO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0OmNoZWNrZWR+bGFiZWw6YmVmb3JlLCBpbnB1dDpjaGVja2Vkfi5ib3g6YmVmb3JlIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2LCA0MCwgOTgsIDAuMyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0OmNoZWNrZWR+LmJveDphZnRlciwgaW5wdXQ6Y2hlY2tlZH5sYWJlbDphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdcXDIwMjInO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgIHRvcDogLTVweDtcclxuICAgICAgICAgICAgY29sb3I6ICMxQjYxREQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucmVzdWx0LWJsb2NrIHtcclxuICAgIHdpZHRoOiAxMTAwcHg7XHJcbiAgICBtYXJnaW46IDMycHggYXV0bztcclxufVxyXG5cclxuLnVpLmZvcm0gLnNpeC53aWRlLmZpZWxkLCAudWkuZm9ybSAuZm91ci53aWRlLmZpZWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5zYXZlLWJ0bi1ibG9jayB7XHJcbiAgICB3aWR0aDogMTEwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IDE0MHB4O1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2hpbGQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1pbi13aWR0aDogMTgwcHg7XHJcbn1cclxuXHJcbi5jaGlsZC1vYmotYmxvY2sge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RBRENFMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBtYXgtd2lkdGg6IDk0cHg7XHJcbiAgICAudWkuY2hlY2tib3gge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgLnJlc3VsdC1ibG9jayB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAyNHB4O1xyXG4gICAgfVxyXG4gICAgLnVzZXIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjRweDtcclxuICAgIH1cclxuICAgIC5zYXZlLWJ0bi1ibG9jayB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgcmlnaHQ6IC01OHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XHJcbiAgICAucmVzdWx0LWJsb2NrIHtcclxuICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICB9XHJcbiAgICAudXNlciB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnNhdmUtYnRuLWJsb2NrIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICByaWdodDogLTQ4cHg7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/layout/user-role-management/create-user/create-user.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/layout/user-role-management/create-user/create-user.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CreateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserComponent", function() { return CreateUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_user_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/user-role.service */ "./src/app/shared/services/user-role.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _shared_utils_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/utils/common */ "./src/app/shared/utils/common.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_organization_organization_hierarchy_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/organization/organization-hierarchy.service */ "./src/app/shared/services/organization/organization-hierarchy.service.ts");










let CreateUserComponent = class CreateUserComponent {
    constructor(cd, toastr, userRoleService, formBuilder, commonService, router, orgHierarchyService) {
        this.cd = cd;
        this.toastr = toastr;
        this.userRoleService = userRoleService;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.router = router;
        this.orgHierarchyService = orgHierarchyService;
        this.submitted = false;
        this.submittedCorp = false;
        // seatPreference: any = seatPreference;
        // hotelLoyalty: any = hotelLoyalty;
        // preferredClass: any = preferredClass;
        // saluteNames: any = saluteNames;
        // statusRow: any = statusRow;
        this.preferedService = _shared_utils_common__WEBPACK_IMPORTED_MODULE_6__["preferedService"];
        this.rolePermissions = [];
        this.preferredServiceConference = false;
        this.preferredServiceHotel = false;
        this.preferredServiceInsurances = false;
        this.emailCheck = false;
        this.userCheck = false;
        // multiple selection box
        this.dropdownSettings = {};
        this.isAdmin = false;
        // get getHierarchyLevel
        this.showHierarcy = false;
        this.isTraveler = false;
        this.globals = Object(_shared_utils_common__WEBPACK_IMPORTED_MODULE_6__["prepareGlobals"])();
        // get from storeage then 
        this.isAdmin = this.globals.getUserAdmin();
        this.currentOrgId = this.globals.getOrganisationID();
        const selectAllControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false);
        const showFlights = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false);
        const showHotels = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false);
        // business user form
        this.addBusinessForm = this.formBuilder.group({
            user_type: [1],
            salute: [''],
            first_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            last_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            sex: [''],
            initial: [''],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            // Minimum eight characters, at least one letter and one number:
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            password_confirmation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            address_1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            address_2: [''],
            country_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            menu_permission: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([]),
            selected_permissions: [''],
            organisation_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            is_active: [''],
            selectAll: selectAllControl,
            skills: this.formBuilder.array([
                this.getSkillFormGroup()
            ])
        });
        // corporate user form
        this.addCorporateForm = this.formBuilder.group({
            user_type: [2],
            salute: [''],
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            dob: [''],
            cost_center: [''],
            passport_country_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            is_active: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            corporate_id: [''],
            corporate_hierarchy: [''],
            employee_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            company_name: [''],
            business_unit: [''],
            company_code: [''],
            bussiness_unit: [''],
            uploadPhoto: [''],
            travel_arranger: [''],
            passport_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            issue_date: [''],
            expiry_date: [''],
            passport_copy: [''],
            passport_country: [''],
            prefered_services: this.formBuilder.array(this.preferedService.map(x => !1)),
            multi_flights: this.formBuilder.array([this.initMultiFlights()]),
            multi_hotels: this.formBuilder.array([this.initMultiHotels()]),
            super_travel_arranger: [''],
            profile_image: [''],
            // approval_hierarchy:this.formBuilder.array([])
            approval_hierarchy: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([]),
            checkFlights: showFlights,
            checkHotels: showHotels
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.addBusinessForm.controls; }
    get fC() { return this.addCorporateForm.controls; }
    get password() { return this.addBusinessForm.get('password'); }
    get password_confirmation() { return this.addBusinessForm.get('password_confirmation'); }
    ngOnInit() {
        this.getUserInfo();
        // Get country list
        this.countryList();
        this.getSettings();
        // this.getRficDetails();
        // this.getAirlines();
        this.getYearList();
        this.onChanges();
        this.childOrganisationsList();
        // Multiple selection 
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'sub_code',
            textField: 'commercial_name',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
    }
    // get current logedin user info and update profile
    getUserInfo() {
        this.userRoleService.getLogedInUser().subscribe((result) => {
            const { organisation_id } = result.data;
            this.addBusinessForm.patchValue({
                organisation_id
            });
        });
    }
    initMultiFlights() {
        return this.formBuilder.group({
            frequent_flyer_type: [''],
            frequent_flyer: [''],
            meal_preference: [''],
            seat_preference: ['']
        });
    }
    initMultiHotels() {
        return this.formBuilder.group({
            loyality_program: [''],
            loyality_number: ['']
        });
    }
    get multiFlights() {
        return this.addCorporateForm.get('multi_flights');
    }
    get multiHotels() {
        return this.addCorporateForm.get("multi_hotels");
    }
    addMultiFlights() {
        this.multiFlights.push(this.initMultiFlights());
    }
    addMultiHotels() {
        this.multiHotels.push(this.initMultiHotels());
    }
    removeMultiFlights(index) {
        if (index > 0)
            this.multiFlights.removeAt(index);
    }
    removeMultiHotels(index) {
        if (index > 0)
            this.multiHotels.removeAt(index);
    }
    getYearList() {
        let list = [];
        var d = new Date();
        var getFullYear = d.getFullYear();
        for (var i = getFullYear; i <= getFullYear + 10; i++) {
            list.push(i);
        }
        this.yearList = list;
    }
    // Skills start here
    get skill() {
        return this.addBusinessForm.get('skills');
    }
    addSkill() {
        let skillsArray = this.addBusinessForm.controls.skills;
        if (skillsArray.status == 'INVALID') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Oops', `Please select all required fields.`, 'error');
            return;
        }
        this.skill.push(this.getSkillFormGroup());
    }
    getSkillFormGroup() {
        return this.formBuilder.group({
            year: [''],
            month: [''],
            target_amount: ['']
        });
    }
    removeSkill(index) {
        if (index > 0)
            this.skill.removeAt(index);
    }
    onChanges() {
        // Subscribe to changes on the selectAll checkbox
        this.addBusinessForm.get('selectAll').valueChanges.subscribe(bool => {
            this.addBusinessForm
                .get('menu_permission')
                .patchValue(Array(this.rolePermissions.length).fill(bool), { emitEvent: false });
        });
        this.addCorporateForm.get('checkFlights').valueChanges.subscribe(bool => {
            if (bool) {
                // 
            }
        });
        this.addCorporateForm.get('checkHotels').valueChanges.subscribe(bool => {
            if (bool) {
                //
            }
        });
        // Subscribe to changes on the preference checkboxes
        this.addBusinessForm.get('menu_permission').valueChanges.subscribe(val => {
            const allSelected = val.every(bool => bool);
            if (this.addBusinessForm.get('selectAll').value !== allSelected) {
                this.addBusinessForm.get('selectAll').patchValue(allSelected, { emitEvent: false });
            }
        });
    }
    validatePassword() {
        const { password, password_confirmation } = this;
        if (!password_confirmation.dirty) {
            return;
        }
        const hasError = password.value !== password_confirmation.value;
        if (password_confirmation.errors) {
            if (hasError) {
                password_confirmation.errors.unmatched = true;
            }
            else {
                delete password_confirmation.errors.unmatched;
                if (Object.keys(password_confirmation.errors).length === 0) {
                    password_confirmation.setErrors(null);
                }
            }
        }
        else if (hasError) {
            password_confirmation.setErrors({ unmatched: true });
        }
    }
    // get country list
    countryList() {
        this.commonService.getCountryList().subscribe((result) => {
            this.countries = result.countries;
            console.log("this.countries::::::: ", this.countries);
        });
    }
    // get agents
    childOrganisationsList() {
        this.orgHierarchyService.GetAllOrganizationHierarchy().subscribe((result) => {
            this.childOrganisations = result.childs;
            // selected default current organization
            this.addBusinessForm.patchValue({ organisation_id: this.currentOrgId });
            this.changePermissions(this.currentOrgId);
        });
    }
    getSettings() {
        let permArr = { "name": ['ParentOrgnisation', 'DisplayField'] };
        this.commonService.getSettingList(permArr).subscribe((result) => {
            this.settings = result.listData;
            var displayField = JSON.parse(result.listData.find(list => list.name == 'DisplayField').value);
            this.preferredServiceConference = displayField.Corporate.Conference;
            this.preferredServiceHotel = displayField.Corporate.Hotel.Active;
            // this.preferredServiceInsurances = displayField.Corporate.Insurances.Active;
        });
    }
    getRficDetails() {
        this.commonService.getRficDetails().subscribe((result) => {
            this.rficDatas = result.listData;
        });
    }
    // Get airlines data from json files
    getAirlines() {
        this.commonService.getAirlines().subscribe((result) => {
            this.airlinesList = result.airlines;
        });
    }
    // On change organization get its hierarchy
    getHierarchy(event) {
        let id = event.target.value;
        this.commonService.getHierarchyByOrg(id).subscribe((result) => {
            this.organizationHierarchy = result.listData;
            this.listDataCorpBusiness = result.listDataCorpBusiness;
        });
    }
    getHierarchyLevel(event) {
        let id = event.target.value;
        this.commonService.getHierarchyByApproval(id).subscribe((result) => {
            this.organizationHierarchyTemplate = JSON.parse(JSON.stringify(result.listData.template_value));
            this.showHierarcy = true;
        });
    }
    checkSuperTravel(event) {
        if (event.target.checked) {
            return this.isTraveler = true;
        }
        return this.isTraveler = false;
    }
    // Pur username accroding to employee code
    autoCreateUsername(event) {
        let username = event.target.value;
        this.addCorporateForm.patchValue({
            username: username
        });
    }
    getBranchDetail(event) {
        let branchId = event.target.value;
        const getBranchData = this.listDataCorpBusiness.find(element => element.id = branchId);
        this.addCorporateForm.patchValue({
            company_code: getBranchData.company_code,
            business_unit: getBranchData.business_unit
        });
    }
    get demoArray() {
        return this.addBusinessForm.get('menu_permission');
    }
    // get role and permission according to agent
    changePermissions(agentId) {
        // getRolePermissions
        this.userRoleService.getRolePermissionsNew(agentId).subscribe((result) => {
            this.rolePermissions = {
                data: result.data,
                keys: Object.keys(result.data)
            };
        });
    }
    checkAllChild(event, index) {
        let trueFalse = event.target.checked;
        index.checked = trueFalse;
        if (trueFalse == false) {
            index.accessType.map((ele, ind) => {
                ele.checked = trueFalse;
                if (ele.accessType != undefined) {
                    ele.accessType.map((eleCh, ind) => {
                        eleCh.checked = trueFalse;
                    });
                }
            });
        }
    }
    checkChild(event, obj, ch) {
        let trueFalse = event.target.checked;
        obj.checked = trueFalse;
        if (ch) {
            if (obj.accessType != undefined) {
                obj.accessType.map((ele, ind) => {
                    ele.checked = trueFalse;
                });
            }
        }
    }
    addBussiessUser() {
        this.submitted = true;
        let keys = this.rolePermissions.keys;
        for (let ind = 0; ind < keys.length; ind++) {
            const _key = keys[ind];
            let obj = this.rolePermissions.data[_key];
            let trueFalse = (obj.checked) ? 1 : 0;
            obj.allowed = trueFalse;
            for (let ind2 = 0; ind2 < obj.accessType.length; ind2++) {
                const accType = obj.accessType[ind2];
                let chTrueFal = (accType.checked) ? 1 : 0;
                accType.allowed = chTrueFal;
                if (accType.accessType != undefined) {
                    for (let ind3 = 0; ind3 < accType.accessType.length; ind3++) {
                        const accTypeChl = accType.accessType[ind3];
                        let chTrueFal = (accTypeChl.checked) ? 1 : 0;
                        accTypeChl.allowed = chTrueFal;
                    }
                }
            }
        }
        if (this.addBusinessForm.invalid) {
            return;
        }
        this.addBusinessForm.patchValue({
            selected_permissions: this.rolePermissions.data
        });
        this.userRoleService.addBusinessUser(this.addBusinessForm.value).subscribe((result) => {
            if (result.type == 'error') {
                this.toastr.error(`${result.msg}`, `${result.msg}`, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
            else {
                this.toastr.info(`${result.msg}`, `${result.msg}`, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
                this.router.navigate(['user-role-management/list-user']);
            }
        });
    }
    // Submit corporated user data
    addCorporateUser() {
        this.submittedCorp = true;
        if (this.addCorporateForm.invalid) {
            return;
        }
        // const formData = new FormData();
        // formData.append('file', this.addCorporateForm.get('profile').value);
        this.userRoleService.addCorporateUser(this.addCorporateForm.value).subscribe((result) => {
            console.log("result---", result);
        });
    }
    get email() { return this.addBusinessForm.get('email'); }
    checkEmail() {
        const email = this;
        if (!email.email.dirty) {
            return;
        }
        const emailVal = email.email.value;
        this.userRoleService.isUniqueEmail(emailVal).subscribe((res) => {
            if (res.status == 400) {
                this.emailCheck = true;
            }
            else {
                this.emailCheck = false;
            }
        });
        //this.emailCheck = false;
    }
    get userName() { return this.addBusinessForm.get('username'); }
    get username() { return this.addBusinessForm.get('username'); }
    get first_name() { return this.addBusinessForm.get('first_name'); }
    get last_name() { return this.addBusinessForm.get('last_name'); }
    get mobile() { return this.addBusinessForm.get('mobile'); }
    get address_1() { return this.addBusinessForm.get('address_1'); }
    checkUser() {
        const userName = this;
        if (!userName.userName.dirty) {
            return;
        }
        const userNameVal = userName.userName.value;
        this.userRoleService.isUniqueUsername(userNameVal).subscribe((res) => {
            if (res.status == 400) {
                this.userCheck = true;
            }
            else {
                this.userCheck = false;
            }
        });
        //this.userCheck = false;
    }
    checkPasswordCorp(group) {
        let pass = group.get('password_corp').value;
        let confirmPass = group.get('confirmPassword_corp').value;
        return pass === confirmPass ? null : { notSame: true };
    }
    ngAfterViewInit() {
        var scope = this;
        $(document).ready(function () {
            $('.menu .item').tab();
            $('.ui.checkbox').checkbox();
            $('.ui.dropdown').dropdown();
            $(function () {
                $('input[name="issue_date"]').daterangepicker({
                    singleDatePicker: true,
                    showDropdowns: true,
                    minYear: 1901,
                    maxYear: parseInt(moment().format('YYYY'), 10),
                }, function (start, end, label) {
                    var years = moment().diff(start, 'years');
                    scope.addCorporateForm.patchValue({ 'issue_date': moment(start).format('YYYY-MM-DD') });
                });
                $('input[name="expiry_date"]').daterangepicker({
                    singleDatePicker: true,
                    showDropdowns: true,
                    minYear: 1901,
                    maxYear: parseInt(moment().format('YYYY'), 10),
                }, function (start, end, label) {
                    var years = moment().diff(start, 'years');
                    scope.addCorporateForm.patchValue({ 'expiry_date': moment(start).format('YYYY-MM-DD') });
                });
                $('input[name="dob"]').daterangepicker({
                    singleDatePicker: true,
                    showDropdowns: true,
                    minYear: 1901,
                    maxDate: new Date,
                    maxYear: parseInt(moment().format('YYYY'), 10)
                }, function (start, end, label) {
                    var years = moment().diff(start, 'years');
                    scope.addCorporateForm.patchValue({ 'dob': moment(start).format('YYYY-MM-DD') });
                });
                $('.multiTaginput').dropdown({
                    allowAdditions: true,
                });
                // $('.ui.dropdown').dropdown({
                //   allowAdditions: true,
                // });
                $(".checkFlights").on("change", function (event) {
                    $('.multiTaginput').dropdown({
                        allowAdditions: true,
                    });
                    $('.ui.dropdown').dropdown({
                        allowAdditions: true,
                    });
                });
            });
        });
    }
};
CreateUserComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"] },
    { type: src_app_shared_services_user_role_service__WEBPACK_IMPORTED_MODULE_2__["UserRoleService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_organization_organization_hierarchy_service__WEBPACK_IMPORTED_MODULE_9__["OrganizationHierarchyService"] }
];
CreateUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-user',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user-role-management/create-user/create-user.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-user.component.scss */ "./src/app/layout/user-role-management/create-user/create-user.component.scss")).default]
    })
], CreateUserComponent);



/***/ }),

/***/ "./src/app/layout/user-role-management/create-user/create-user.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/user-role-management/create-user/create-user.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CreateUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateUserModule", function() { return CreateUserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _create_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-user.component */ "./src/app/layout/user-role-management/create-user/create-user.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _create_user_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-user-routing.module */ "./src/app/layout/user-role-management/create-user/create-user-routing.module.ts");
/* harmony import */ var src_app_access_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/access.module */ "./src/app/access.module.ts");











let CreateUserModule = class CreateUserModule {
};
CreateUserModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_create_user_component__WEBPACK_IMPORTED_MODULE_1__["CreateUserComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _create_user_routing_module__WEBPACK_IMPORTED_MODULE_9__["CreateUserRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            src_app_access_module__WEBPACK_IMPORTED_MODULE_10__["ApplicationAccess"]
        ]
    })
], CreateUserModule);



/***/ }),

/***/ "./src/app/shared/services/organization/organization-hierarchy.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shared/services/organization/organization-hierarchy.service.ts ***!
  \********************************************************************************/
/*! exports provided: OrganizationHierarchyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationHierarchyService", function() { return OrganizationHierarchyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let OrganizationHierarchyService = class OrganizationHierarchyService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL;
        // Http Headers
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                "Content-Type": "application/json"
            })
        };
    }
    //Fetch all organization Hierarchy
    GetAllOrganizationHierarchy() {
        return this.http
            .get(`${this.url}/api/organization/fetch-childs`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    //Fetch all organization Hierarchy
    GetAllOrganizationHierarchyHierarchyWise() {
        return this.http
            .get(`${this.url}/api/organization/fetch-childs-with-hierarchy`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    //update Organization Hierarchy
    UpdateOrganizationHierarchyNotUsed(data) {
        return this.http.post(`${this.url}/api/organization/create-agency`, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    //creating new agency
    CreateOrganizationHierarchy(data) {
        return this.http.post(`${this.url}/api/organization/create-agency`, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    fetchOrganizationDetails(id) {
        return this.http.get(`${this.url}/api/organization/fetch-hierarchy-details?hierarchy_id=` + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    //checkfororganizationname
    isUniqueOrganisation(orgName) {
        return this.http.post(`${this.url}/api/check-unique-orgName/` + orgName, orgName);
    }
    getPosDetails(id) {
        return this.http.get(`${this.url}/api/organization/fetch-pos/${id}`);
    }
    updatePosDetails(data) {
        return this.http.post(`${this.url}/api/organization/update-agency`, data);
    }
    // Error handling
    errorHandl(error) {
        let errorMessage = "";
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
    }
};
OrganizationHierarchyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
OrganizationHierarchyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], OrganizationHierarchyService);



/***/ })

}]);
//# sourceMappingURL=create-user-create-user-module-es2016.js.map