(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-user-edit-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user-role-management/edit-user/edit-user.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user-role-management/edit-user/edit-user.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"outer-segment\">\r\n  <div class=\"user\">\r\n    <h3 class=\"user_title\">Edit User</h3>\r\n  </div>\r\n  <div class=\"ui top attached tabular menu\">\r\n    <div class=\"active item create_tab_title\" data-tab=\"first\">Update B2B User</div>\r\n    <!-- <div class=\"item corporate_staff\" data-tab=\"second\">Update Corporate Staff</div> -->\r\n  </div>\r\n  <div class=\"ui bottom attached active tab segment tabContent-block\" data-tab=\"first\">\r\n    <!-- b2b_basic_form  --- removed this class form form -->\r\n    <div class=\" result-block\">\r\n      <form [formGroup]=\"editBusinessForm\" autocomplete=\"off\" (ngSubmit)=\"updateBussiessUser()\" class=\"ui form \">\r\n        <div class=\"ui fluid container\">\r\n          <div class=\"outer-form\">\r\n            <!-- <h4 class=\"ui header\">Basic Information</h4> -->\r\n            <div class=\"field\">\r\n              <div class=\"five fields\">\r\n                <div class=\"two wide field\">\r\n                  <label>Title</label>\r\n                  <select formControlName=\"salute\">\r\n                    <option *ngFor=\"let salute of saluteNames\" value=\"{{salute}}\">{{salute}}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"six wide field\"\r\n                  [ngClass]=\"{'error': ((submitted && f.first_name.errors) && f.first_name.errors.required) }\">\r\n                  <label>First Name<span class=\"mandatory\">*</span></label>\r\n                  <input type=\"text\" formControlName=\"first_name\" placeholder=\"First Name\">\r\n                  <div\r\n                    *ngIf=\"editBusinessForm.controls['first_name'].invalid && (editBusinessForm.controls['first_name'].dirty || editBusinessForm.controls['first_name'].touched) \"\r\n                    [ngClass]=\"{'error': ( editBusinessForm.controls.first_name.status == 'INVALID')}\">\r\n                    <!-- <div *ngIf=\"editBusinessForm.controls['first_name'].errors.required\"\r\n                                          [appValidation]=\"{label:'error', placeholder:'First Name', control: editBusinessForm.controls['first_name']}\">\r\n                                        </div> -->\r\n                  </div>\r\n                </div>\r\n                <div class=\"six wide field\"\r\n                  [ngClass]=\"{'error': ((submitted && f.last_name.errors) && f.last_name.errors.required) }\">\r\n                  <label>Last Name<span class=\"mandatory\">*</span></label>\r\n                  <input type=\"text\" formControlName=\"last_name\" placeholder=\"Last Name\">\r\n                  <div\r\n                    *ngIf=\"editBusinessForm.controls['last_name'].invalid && (editBusinessForm.controls['last_name'].dirty || editBusinessForm.controls['last_name'].touched) \"\r\n                    [ngClass]=\"{'error': ( editBusinessForm.controls.last_name.status == 'INVALID')}\">\r\n                    <!-- <div *ngIf=\"editBusinessForm.controls['last_name'].errors.required\"\r\n                                            [appValidation]=\"{label:'error', placeholder:'Last Name', control: editBusinessForm.controls['last_name']}\">\r\n                                          </div> -->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"field\">\r\n              <div class=\"five fields\">\r\n                <div class=\"six wide field\">\r\n                  <label>Email<span class=\"mandatory\">*</span></label>\r\n                  <input type=\"email\" formControlName=\"email\" placeholder=\"Email\" class=\"email\">\r\n                </div>\r\n                <div class=\"six wide field\"\r\n                  [ngClass]=\"{'error': ((submitted && f.mobile.errors) && f.mobile.errors.required) }\">\r\n                  <label>Contact Number<span class=\"mandatory\">*</span></label>\r\n                  <input type=\"text\" formControlName=\"mobile\" placeholder=\"Contact number\">\r\n                  <div\r\n                    *ngIf=\"editBusinessForm.controls['mobile'].invalid && (editBusinessForm.controls['mobile'].dirty || editBusinessForm.controls['mobile'].touched) \"\r\n                    [ngClass]=\"{'error': ( editBusinessForm.controls.mobile.status == 'INVALID')}\">\r\n                    <!-- <div *ngIf=\"editBusinessForm.controls['mobile'].errors.required\"\r\n                                              [appValidation]=\"{label:'error', placeholder:'Contact Number', control: editBusinessForm.controls['mobile']}\">\r\n                                            </div> -->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"field\">\r\n              <div class=\"fields\">\r\n                <div class=\"six wide field\">\r\n                  <label>Initials</label>\r\n                  <input type=\"text\" formControlName=\"initial\" placeholder=\"Initials(EX:BIN)\">\r\n                </div>\r\n                <div class=\"six wide field sexRadio\">\r\n                  <div class=\"ui radio checkbox\">\r\n                    <input type=\"radio\" id=\"male\" value=\"male\" name=\"sex\" formControlName=\"sex\" class=\"hidden\">\r\n                    <label>Male</label>\r\n                  </div>\r\n\r\n                  <div class=\"ui radio checkbox\">\r\n                    <input type=\"radio\" id=\"female\" value=\"female\" name=\"sex\" formControlName=\"sex\" class=\"hidden\">\r\n                    <label>Female</label>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"field\">\r\n                          <hr>\r\n                      </div> -->\r\n            <!-- <h4 class=\"ui header\">Address Information</h4> -->\r\n            <div class=\"field\">\r\n              <!-- <label>Name</label> -->\r\n              <div class=\"five fields\">\r\n                <div class=\"six wide field\"\r\n                  [ngClass]=\"{'error': ((submitted && f.address_1.errors) && f.address_1.errors.required) }\">\r\n                  <label>Address 1<span class=\"mandatory\">*</span></label>\r\n                  <input type=\"text\" name=\"address_1\" formControlName=\"address_1\" placeholder=\"Address 1\">\r\n                  <div\r\n                    *ngIf=\"editBusinessForm.controls['address_1'].invalid && (editBusinessForm.controls['address_1'].dirty || editBusinessForm.controls['address_1'].touched) \"\r\n                    [ngClass]=\"{'error': ( editBusinessForm.controls.address_1.status == 'INVALID')}\">\r\n                    <!-- <div *ngIf=\"editBusinessForm.controls['address_1'].errors.required\"\r\n                      [appValidation]=\"{label:'error', placeholder:'Address', control: editBusinessForm.controls['address_1']}\">\r\n                    </div> -->\r\n                  </div>\r\n                </div>\r\n                <div class=\"six wide field\">\r\n                  <label>Address 2</label>\r\n                  <input type=\"text\" name=\"address_2\" formControlName=\"address_2\" placeholder=\"Address 2\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"field\">\r\n              <div class=\"five fields\">\r\n                <div class=\"six wide field\"\r\n                  [ngClass]=\"{'error': ((submitted && f.country_id.errors) && f.country_id.errors.required) }\">\r\n                  <label>Country</label>\r\n                  <select class=\"ui search dropdown\" formControlName=\"country_id\">\r\n                    <option *ngFor=\"let country of countries; let i = index\"\r\n                      value=\"{{country['country_id'] > 0 ? country['country_id'] : 0}}\">\r\n                      {{ country['country'] }}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"field\">\r\n                          <hr>\r\n                      </div> -->\r\n            <!-- <h4 class=\"ui header\">Login Information</h4> -->\r\n            <div class=\"field\">\r\n              <div class=\"five fields\">\r\n                <div class=\"six wide field\">\r\n                  <label>Username<span class=\"mandatory\">*</span></label>\r\n                  <input type=\"text\" formControlName=\"username\" placeholder=\"Username\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"field\">\r\n              <div class=\"five fields\">\r\n                <div class=\"six wide field\"\r\n                  [ngClass]=\"{'error': ((submitted && f.password.errors) && f.password.errors.required) }\">\r\n                  <label>\r\n                    Password<span class=\"mandatory\">*</span>\r\n                    <i class=\"fa fa-exclamation-circle tooltip\">\r\n                      <span class=\"tooltiptext\">\r\n                        Password should be atleast 8 characters. Contain atleast 1 number, 1 capital letter, 1 lower case\r\n                        letter and 1 special character!\r\n                      </span>\r\n                    </i>\r\n                  </label>\r\n                  <input type=\"password\" name=\"password\" formControlName=\"password\" (keyup)=\"validatePassword()\"\r\n                    (change)=\"validatePassword()\" placeholder=\"Password\">\r\n                </div>\r\n                <div class=\"six wide field\"\r\n                  [ngClass]=\"{'error': ((submitted && f.password_confirmation.errors) && ( f.password_confirmation.errors.required || f.password_confirmation.errors.unmatched) ) }\">\r\n                  <label>Confirm Password<span class=\"mandatory\">*</span></label>\r\n                  <input type=\"password\" formControlName=\"password_confirmation\" (keyup)=\"validatePassword()\"\r\n                    (change)=\"validatePassword()\" placeholder=\"Confirm Password\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"field\">\r\n              <div class=\"five fields\">\r\n                <div class=\"six wide field\">\r\n                  <label>Agent</label>\r\n                  <input type=\"text\" value=\"{{userInfo.orgName}}\" disabled>\r\n                </div>\r\n                <div class=\"six wide field\">\r\n                  <label>Status</label>\r\n                  <!-- <option *ngFor=\"let status of statusRow\" value=\"{{status.id}}\">{{status.value}}</option> -->\r\n                  <select placeholder=\"Status\" formControlName=\"is_active\" class=\"ui fluid dropdown\">\r\n                    <!-- <option value=\"\"> Status </option> -->\r\n                    <option value=\"1\">Active</option>\r\n                    <option value=\"0\">InActive</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"field\">\r\n                          <hr>\r\n                      </div> -->\r\n            <!-- skills  -->\r\n            <div class=\"field\">\r\n              <div class=\"six fields\" [formGroup]=\"skillGroup\"\r\n                *ngFor=\"let skillGroup of editBusinessForm.get('skills')['controls'];let i = index;\">\r\n                <div class=\"four wide field\">\r\n                  <label>Year</label>\r\n                  <select class=\"ui fluid dropdown\" formControlName=\"year\">\r\n                    <option value=\"\">Year</option>\r\n                    <option *ngFor=\"let year of yearList\" value=\"{{year}}\">{{year}}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"four wide field\">\r\n                  <label>Month</label>\r\n                  <select class=\"ui fluid dropdown\" formControlName=\"month\">\r\n                    <option value=\"\">Month</option>\r\n                    <option value=\"1\">January</option>\r\n                    <option value=\"2\">February</option>\r\n                    <option value=\"3\">March</option>\r\n                    <option value=\"4\">April</option>\r\n                    <option value=\"5\">May</option>\r\n                    <option value=\"6\">June</option>\r\n                    <option value=\"7\">July</option>\r\n                    <option value=\"8\">August</option>\r\n                    <option value=\"9\">September</option>\r\n                    <option value=\"10\">October</option>\r\n                    <option value=\"11\">November</option>\r\n                    <option value=\"12\">December</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"four wide field\">\r\n                  <label>Amount</label>\r\n                  <input type=\"number\" formControlName=\"target_amount\" placeholder=\"Target Amount\">\r\n                </div>\r\n                <div class=\"newAgency_topAlign\" title=\"Click to add more\" (click)=\"addSkill()\"\r\n                  *ngIf=\"i==(editBusinessForm.get('skills')['controls'].length-1)\">\r\n                  <i class=\"icon\">\r\n                    <img src=\"./../../../../../assets/icons/add_icon.png\" />\r\n                  </i>\r\n                </div>\r\n                <div class=\"newAgency_topAlign\" title=\"Click to remove this\" *ngIf=\"i!=0\" tabindex=\"0\"\r\n                  (click)=\"removeSkill(i)\">\r\n                  <i class=\"icon\">\r\n                    <img src=\"./../../../../../assets/icons/remove_icon.png\" />\r\n                  </i>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"field\">\r\n                          <hr>\r\n                      </div> -->\r\n            <!-- <h4 class=\"ui header\">Role Permission</h4> -->\r\n            <div class=\"field\">\r\n              <div class=\"fields\">\r\n                  <!-- <div class=\"ui grid field\" *ngIf=\"rolePermissions && rolePermissions.keys\">\r\n                    <div *ngFor=\"let key of rolePermissions.keys\" class=\"sixteen wide column\">\r\n                        <div class=\"ui checkbox mar-right-15px \">\r\n                            <input type=\"checkbox\" name=\"search\" id=\"{{key}}\"  [checked]=\"rolePermissions['data'][key].checked\" (change)=\"checkAllChild($event,rolePermissions['data'][key])\" >\r\n                            <label for=\"{{key}}\"><span class=\"pos_access-rights\">{{ rolePermissions['data'][key].name }}</span></label>\r\n                        </div>\r\n                        <div [hidden]=\"!rolePermissions['data'][key].checked\" class=\"padd-left-15\">\r\n                            <div *ngFor=\"let accessObj of rolePermissions['data'][key].accessType; let idx = index\" class=\"ui checkbox mar-right-15 mar-top-15\">\r\n                                <input type=\"checkbox\" id=\"test-{{idx}}-{{accessObj.name}}\" name=\"search\" [checked]=\"accessObj.checked\" (change)=\"checkChild($event,accessObj)\" >\r\n                                <label for=\"test-{{idx}}-{{accessObj.name}}\"><span class=\"pos_access-rights\">{{ accessObj.display }}</span></label>\r\n                            </div>\r\n                        </div>\r\n                      </div>\r\n                  </div> -->\r\n                  <div class=\"ui grid field edit-role-block\" *ngIf=\"rolePermissions && rolePermissions.keys\">\r\n                    <label class=\"role-perm-label\">Role Permission</label>\r\n                    <div *ngFor=\"let key of rolePermissions.keys\" class=\"seven wide column role-perm-block\">\r\n                      <div class=\"ui checkbox mar-right-15px outer-checkbox\">\r\n                        <input type=\"checkbox\" name=\"search\" id=\"{{key}}\" [checked]=\"rolePermissions['data'][key].checked\"\r\n                          (change)=\"checkAllChild($event,rolePermissions['data'][key])\">\r\n                        <label for=\"{{key}}\"><span\r\n                            class=\"pos_access-rights head\">{{ rolePermissions['data'][key].display }}</span>\r\n                            <i *ngIf=\"!rolePermissions['data'][key].checked\" class=\"level down alternate icon role-head\"></i>\r\n                            <i *ngIf=\"rolePermissions['data'][key].checked\" class=\"level up alternate icon role-head\"></i>\r\n                          </label>\r\n                      </div>\r\n                      <div [hidden]=\"!rolePermissions['data'][key].checked\" class=\"padd-left-15 mt-12\">\r\n                        <ng-container *ngFor=\"let accessObj of rolePermissions['data'][key].accessType; let idx = index;\">\r\n                          <div [ngClass]=\"{'showOnlyParent': (!accessObj.accessType.length)}\"\r\n                            [ngClass]=\"{'ui grid field': (accessObj.accessType.length)}\" class=\"child-container\">\r\n                            <div [ngClass]=\"{'sixteen wide column': (accessObj.accessType.length)}\">\r\n                              <div class=\"ui checkbox mar-right-15 mar-top-15 inner-checkbox\">\r\n                                <input type=\"checkbox\" id=\"test-{{idx}}-{{ rolePermissions['data'][key].display }}\"\r\n                                  name=\"search\" [checked]=\"accessObj.checked\" (change)=\"checkChild($event,accessObj, true)\">\r\n                                <label for=\"test-{{idx}}-{{ rolePermissions['data'][key].display }}\"><span\r\n                                    class=\"pos_access-rights\">{{ accessObj.display }}</span>\r\n                                    <i *ngIf=\"accessObj.accessType.length && !accessObj.checked\"\r\n                                        class=\"level down alternate icon\"></i>\r\n                                    <i *ngIf=\"accessObj.accessType.length && accessObj.checked\"\r\n                                        class=\"level up alternate icon\"></i>\r\n                                  </label>\r\n                                <!--  -->\r\n                                <div [hidden]=\"!accessObj.checked\" [ngClass]=\"{'child-obj-block': (accessObj.accessType.length && accessObj.checked) }\">\r\n                                  <div class=\"\">\r\n                                    <div *ngFor=\"let childObj of accessObj.accessType; let cdx = index\"\r\n                                      class=\"ui checkbox mar-right-15 mar-top-15\">\r\n                                      <input type=\"checkbox\" id=\"test-{{cdx}}-chld-{{accessObj.display}}\" name=\"search\"\r\n                                        [checked]=\"childObj.checked\" (change)=\"checkChild($event,childObj)\">\r\n                                      <label for=\"test-{{cdx}}-chld-{{accessObj.display}}\"><span\r\n                                          class=\"pos_access-rights\">{{ childObj.display }}</span></label>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </ng-container>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"bookings_btn-panel save-btn-block\">\r\n          <button class=\"ui primary button create_btn\" tabindex=\"0\">\r\n            <span class=\"create_text\">Update</span>\r\n          </button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui bottom attached tab segment\" data-tab=\"second\">\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/layout/user-role-management/edit-user/edit-user-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/user-role-management/edit-user/edit-user-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: EditUserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserRoutingModule", function() { return EditUserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _edit_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-user.component */ "./src/app/layout/user-role-management/edit-user/edit-user.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: '', component: _edit_user_component__WEBPACK_IMPORTED_MODULE_1__["EditUserComponent"] }
];
let EditUserRoutingModule = class EditUserRoutingModule {
};
EditUserRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], EditUserRoutingModule);



/***/ }),

/***/ "./src/app/layout/user-role-management/edit-user/edit-user.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/layout/user-role-management/edit-user/edit-user.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.outer-segment {\n  margin: 0px;\n  -webkit-margin-after: 180px;\n          margin-block-end: 180px;\n}\n.user {\n  padding: 0px 32px;\n}\n.user_title {\n  margin: 0;\n  font-style: normal;\n  font-weight: 400 !important;\n  font-size: 20px;\n  line-height: 23px;\n  color: #4F4F4F;\n}\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n.ui.header {\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 15px;\n}\n.five.wide.field.gender_check {\n  margin-top: 10px;\n}\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n.create_tab_title.corporate_staff {\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n.outer-form,\n.outer_corpForm {\n  box-sizing: border-box;\n  border-radius: 5px;\n  padding: 15px;\n}\n.ui.form.b2b_basic_form,\n.ui.form.corp_form {\n  margin: 17px 23px 25px 22px;\n}\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #E0E0E0;\n}\n.add_btn {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  margin: 20px;\n  font-weight: 500;\n  line-height: 15px;\n}\ninput {\n  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.2);\n}\n.field input::-webkit-input-placeholder {\n  font-size: 12px;\n}\n.field input::-moz-placeholder {\n  font-size: 12px;\n}\n.field input::-ms-input-placeholder {\n  font-size: 12px;\n}\n.field input::placeholder {\n  font-size: 12px;\n}\n.dropdown .text {\n  font-size: 12px;\n}\n.create_btn {\n  box-sizing: border-box;\n  border-radius: 3px;\n  background-color: #3867b1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n  padding-right: 35px;\n  position: relative;\n  right: 30px;\n  bottom: 104px;\n}\n.create_text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 15px;\n  padding-left: 10px;\n}\n.corporate_input__placeholder-icon {\n  position: relative;\n  width: 18px;\n  bottom: 28px;\n  left: 9px;\n}\ndiv.upload {\n  box-sizing: border-box;\n  height: 15px;\n  width: 123px;\n  border-radius: 3px;\n  background-color: #FFF;\n  border: 0.5px solid #808080;\n  margin-top: -25px;\n  box-shadow: 0 0.25px 0.1px 0 rgba(0, 0, 0, 0.5);\n}\ndiv.upload input {\n  display: block !important;\n  width: 123px !important;\n  height: 15px !important;\n  opacity: 0 !important;\n  overflow: hidden !important;\n}\n.no_choosen {\n  height: 10px;\n  width: 46px;\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 9px;\n  position: relative;\n  left: 132px;\n  bottom: 20px;\n  line-height: 10px;\n}\n.file_choose {\n  position: relative;\n  left: 31px;\n  bottom: 10px;\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 9px;\n  line-height: 10px;\n}\n.issue_date {\n  text-indent: 17px;\n}\n.countryListUser {\n  padding: 0px !important;\n}\n.superTArr {\n  margin-left: 10px;\n}\n.sexRadio {\n  padding: 9px;\n}\n.sexRadio .radio {\n  margin-right: 5px;\n  margin-top: 22px;\n}\n.menu_permission {\n  margin-right: 100px;\n  padding: 10px;\n}\n.btn-delete {\n  border-radius: 3px;\n  background-color: #e21717;\n}\n.btn-add {\n  border-radius: 3px;\n  background-color: #3867B1;\n}\n.permission-block {\n  margin-top: 15px;\n  display: block;\n}\n.padd-left-15 {\n  padding-left: 15px;\n}\n.newAgency_topAlign {\n  padding-top: 1vh;\n}\n.mar-right-15 {\n  margin-right: 15px;\n}\n.mar-top-15 {\n  margin-top: 15px;\n}\n.showOnlyParent {\n  width: 120px;\n  float: left;\n}\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n.ui.form .three.wide.field {\n  margin-bottom: 16px;\n}\ni.icon {\n  margin-top: 24px;\n}\n.tooltip {\n  position: relative;\n  display: inline-block;\n  float: right;\n}\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 160px;\n  background-color: rgba(0, 0, 0, 0.8);\n  color: #fff;\n  text-align: left;\n  border-radius: 6px;\n  padding: 10px;\n  position: absolute;\n  z-index: 1;\n  bottom: 100%;\n  left: 50%;\n  margin-left: -160px;\n}\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n.result-block {\n  width: 1100px;\n  margin: 32px auto;\n}\n.ui.form .six.wide.field, .ui.form .four.wide.field {\n  margin-bottom: 16px;\n}\n.save-btn-block {\n  width: 1100px;\n  margin: 0 auto;\n  position: relative;\n  top: 140px;\n  right: 10px;\n}\n.save-btn-block button {\n  float: right;\n  margin-right: 0px;\n  margin-top: 20px;\n}\n.ui.grid.field.edit-role-block {\n  padding-left: 0px;\n}\n.role-perm-label {\n  display: block;\n  width: 100%;\n}\n.role-perm-block {\n  border: 1px solid #DADCE0;\n  box-sizing: border-box;\n  border-radius: 10px;\n  margin: 8px;\n}\n.role-perm-block i.icon {\n  margin-top: 0px;\n}\n.role-perm-block .pos_access-rights {\n  color: rgba(24, 27, 32, 0.7);\n  font-size: 13px;\n}\n.role-perm-block .pos_access-rights.head {\n  color: #181B20;\n  font-weight: 500 !important;\n  padding-bottom: 25px;\n}\n.role-perm-block .ui.checkbox label:before {\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n}\n.role-perm-block .ui.checkbox label:after {\n  left: -1px;\n}\n.role-perm-block .ui.checkbox input:checked ~ label span {\n  color: #181B20;\n}\n.role-perm-block .ui.checkbox input:checked ~ label:before {\n  border: none;\n}\n.role-perm-block .ui.checkbox input:checked ~ .box:before {\n  border: none;\n}\n.role-perm-block .ui.checkbox.inner-checkbox label:after {\n  font-size: 10px;\n}\n.role-perm-block .ui.checkbox.inner-checkbox input:checked ~ label:before {\n  background: #437ADA;\n}\n.role-perm-block .ui.checkbox.inner-checkbox input:checked ~ label:after {\n  color: #fff;\n}\n.role-perm-block .ui.checkbox.inner-checkbox input:checked ~ .box:after {\n  color: #fff;\n}\n.role-perm-block .ui.checkbox.outer-checkbox {\n  width: 100%;\n}\n.role-perm-block .ui.checkbox.outer-checkbox label i.icon {\n  cursor: pointer;\n  float: right;\n}\n.role-perm-block .ui.checkbox.outer-checkbox input:checked ~ label .pos_access-rights.head {\n  color: #181B20;\n  font-weight: 700 !important;\n}\n.role-perm-block .ui.checkbox.outer-checkbox input:checked ~ label:before, .role-perm-block .ui.checkbox.outer-checkbox input:checked ~ .box:before {\n  border: 1px solid rgba(6, 40, 98, 0.3);\n}\n.role-perm-block .ui.checkbox.outer-checkbox input:checked ~ .box:after, .role-perm-block .ui.checkbox.outer-checkbox input:checked ~ label:after {\n  content: \"•\";\n  font-size: 36px;\n  top: -5px;\n  color: #1B61DD;\n}\n.mt-12 {\n  margin: 12px;\n}\n.child-container {\n  display: inline-block;\n  min-width: 180px;\n}\n.child-obj-block {\n  border: 1px solid #DADCE0;\n  box-sizing: border-box;\n  border-radius: 10px;\n  margin: 8px;\n  padding: 8px;\n  max-width: 94px;\n}\n.child-obj-block .ui.checkbox {\n  display: block;\n  padding: 8px;\n}\n@media (max-width: 1440px) {\n  .result-block {\n    width: auto;\n    margin: 24px;\n  }\n\n  .user {\n    padding-left: 24px;\n  }\n\n  .save-btn-block {\n    width: auto;\n    right: -58px;\n  }\n}\n@media (max-width: 1280px) {\n  .result-block {\n    margin: 20px;\n  }\n\n  .user {\n    padding-left: 20px;\n  }\n\n  .save-btn-block {\n    width: auto;\n    right: -48px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3VzZXItcm9sZS1tYW5hZ2VtZW50L2VkaXQtdXNlci9lZGl0LXVzZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC91c2VyLXJvbGUtbWFuYWdlbWVudC9lZGl0LXVzZXIvRTpcXEJlbGFsXFxwcm9qZWN0c1xccHJvZHVjdGlvbi1idWlsZFxcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFx1c2VyLXJvbGUtbWFuYWdlbWVudFxcZWRpdC11c2VyXFxlZGl0LXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0ksV0FBQTtFQUNBLDJCQUFBO1VBQUEsdUJBQUE7QURFSjtBQ0NBO0VBQ0UsaUJBQUE7QURFRjtBQ0NBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FERUo7QUNDQTtFQUNJLGdCQUFBO0FERUo7QUNDQTtFQUNJLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FERUo7QUNDQTtFQUNJLGdCQUFBO0FERUo7QUNDQTtFQUNJLGtDQUFBO0VBQ0Esd0NBQUE7QURFSjtBQ0NBO0VBQ0ksK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FERUo7QUNDQTtFQUNJLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURFSjtBQ0NBO0VBQ0ksNENBQUE7QURFSjtBQ0NBOztFQUVJLHNCQUFBO0VBQ0Esa0JBQUE7RUFHQSxhQUFBO0FEQUo7QUNHQTs7RUFFSSwyQkFBQTtBREFKO0FDR0E7RUFDSSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QURBSjtBQ0dBO0VBQ0ksV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FEQUo7QUNHQTtFQUNJLGdEQUFBO0FEQUo7QUNHQTtFQUNJLGVBQUE7QURBSjtBQ0RBO0VBQ0ksZUFBQTtBREFKO0FDREE7RUFDSSxlQUFBO0FEQUo7QUNEQTtFQUNJLGVBQUE7QURBSjtBQ0dBO0VBQ0ksZUFBQTtBREFKO0FDR0E7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFFQSxpRkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBRERKO0FDSUE7RUFDSSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FEREo7QUNJQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FEREo7QUNJQTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLCtDQUFBO0FEREo7QUNJQTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QURESjtBQ0lBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FEREo7QUNJQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QURESjtBQ0lBO0VBQ0ksaUJBQUE7QURESjtBQ0lBO0VBQ0ksdUJBQUE7QURESjtBQ0lBO0VBQ0ksaUJBQUE7QURESjtBQ0lBO0VBQ0ksWUFBQTtBRERKO0FDSUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FEREo7QUNJQTtFQUNJLG1CQUFBO0VBQ0EsYUFBQTtBRERKO0FDSUE7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FEREo7QUNJQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7QURESjtBQ0lBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0FEREo7QUNJQTtFQUNJLGtCQUFBO0FEREo7QUNJQTtFQUNJLGdCQUFBO0FEREo7QUNJQTtFQUNJLGtCQUFBO0FEREo7QUNJQTtFQUNJLGdCQUFBO0FEREo7QUNJQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FEREo7QUNJQTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBRERKO0FDSUE7RUFDSSxtQkFBQTtBRERKO0FDSUE7RUFDSSxnQkFBQTtBRERKO0FDSUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBRERKO0FDSUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QURESjtBQ0lBO0VBQ0ksbUJBQUE7QURESjtBQ0lBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FEREo7QUNJQTtFQUNJLG1CQUFBO0FEREo7QUNJQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBRERKO0FDRUk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBREFSO0FDSUE7RUFDSSxpQkFBQTtBRERKO0FDSUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBRERKO0FDSUE7RUFJSSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FESko7QUNGSTtFQUNJLGVBQUE7QURJUjtBQ0VJO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0FEQVI7QUNDUTtFQUNJLGNBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FEQ1o7QUNJWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURGaEI7QUNJWTtFQUNJLFVBQUE7QURGaEI7QUNNWTtFQUNJLGNBQUE7QURKaEI7QUNNWTtFQUNJLFlBQUE7QURKaEI7QUNPUTtFQUNJLFlBQUE7QURMWjtBQ1VZO0VBQ0ksZUFBQTtBRFJoQjtBQ1lZO0VBQ0ksbUJBQUE7QURWaEI7QUNZWTtFQUNJLFdBQUE7QURWaEI7QUNjWTtFQUNJLFdBQUE7QURaaEI7QUNnQkk7RUFDSSxXQUFBO0FEZFI7QUNnQlk7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBRGRoQjtBQ2tCWTtFQUNJLGNBQUE7RUFDQSwyQkFBQTtBRGhCaEI7QUNtQlE7RUFDSSxzQ0FBQTtBRGpCWjtBQ21CUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QURqQlo7QUNzQkE7RUFDSSxZQUFBO0FEbkJKO0FDc0JBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtBRG5CSjtBQ3NCQTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBRG5CSjtBQ29CSTtFQUNJLGNBQUE7RUFDQSxZQUFBO0FEbEJSO0FDc0JBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFRG5CTjs7RUNxQkU7SUFDSSxrQkFBQTtFRGxCTjs7RUNvQkU7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFRGpCTjtBQUNGO0FDb0JBO0VBQ0k7SUFDSSxZQUFBO0VEbEJOOztFQ29CRTtJQUNJLGtCQUFBO0VEakJOOztFQ21CRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VEaEJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvdXNlci1yb2xlLW1hbmFnZW1lbnQvZWRpdC11c2VyL2VkaXQtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5vdXRlci1zZWdtZW50IHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDE4MHB4O1xufVxuXG4udXNlciB7XG4gIHBhZGRpbmc6IDBweCAzMnB4O1xufVxuXG4udXNlcl90aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGNvbG9yOiAjNEY0RjRGO1xufVxuXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi51aS5oZWFkZXIge1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG59XG5cbi5maXZlLndpZGUuZmllbGQuZ2VuZGVyX2NoZWNrIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnVpLnRvcC5hdHRhY2hlZC5tZW51ID4gLml0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwLjI4NTcxNDI5cmVtIDAgMCAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xufVxuXG4udWkuYm90dG9tLmF0dGFjaGVkLmFjdGl2ZS50YWIuc2VnbWVudCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE3cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTdweDtcbn1cblxuLmNyZWF0ZV90YWJfdGl0bGUuY29ycG9yYXRlX3N0YWZmIHtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YWIuc2VnbWVudCB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4ub3V0ZXItZm9ybSxcbi5vdXRlcl9jb3JwRm9ybSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLnVpLmZvcm0uYjJiX2Jhc2ljX2Zvcm0sXG4udWkuZm9ybS5jb3JwX2Zvcm0ge1xuICBtYXJnaW46IDE3cHggMjNweCAyNXB4IDIycHg7XG59XG5cbmhyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGJvcmRlcjogMC41cHggc29saWQgI0UwRTBFMDtcbn1cblxuLmFkZF9idG4ge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbn1cblxuaW5wdXQge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5kcm9wZG93biAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNyZWF0ZV9idG4ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODY3YjE7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMzBweDtcbiAgYm90dG9tOiAxMDRweDtcbn1cblxuLmNyZWF0ZV90ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxOHB4O1xuICBib3R0b206IDI4cHg7XG4gIGxlZnQ6IDlweDtcbn1cblxuZGl2LnVwbG9hZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDEyM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJvcmRlcjogMC41cHggc29saWQgIzgwODA4MDtcbiAgbWFyZ2luLXRvcDogLTI1cHg7XG4gIGJveC1zaGFkb3c6IDAgMC4yNXB4IDAuMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG5kaXYudXBsb2FkIGlucHV0IHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEyM3B4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLm5vX2Nob29zZW4ge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiA0NnB4O1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDEzMnB4O1xuICBib3R0b206IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xufVxuXG4uZmlsZV9jaG9vc2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDMxcHg7XG4gIGJvdHRvbTogMTBweDtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDlweDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG59XG5cbi5pc3N1ZV9kYXRlIHtcbiAgdGV4dC1pbmRlbnQ6IDE3cHg7XG59XG5cbi5jb3VudHJ5TGlzdFVzZXIge1xuICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cblxuLnN1cGVyVEFyciB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uc2V4UmFkaW8ge1xuICBwYWRkaW5nOiA5cHg7XG59XG5cbi5zZXhSYWRpbyAucmFkaW8ge1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgbWFyZ2luLXRvcDogMjJweDtcbn1cblxuLm1lbnVfcGVybWlzc2lvbiB7XG4gIG1hcmdpbi1yaWdodDogMTAwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5idG4tZGVsZXRlIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIxNzE3O1xufVxuXG4uYnRuLWFkZCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbn1cblxuLnBlcm1pc3Npb24tYmxvY2sge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnBhZGQtbGVmdC0xNSB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLm5ld0FnZW5jeV90b3BBbGlnbiB7XG4gIHBhZGRpbmctdG9wOiAxdmg7XG59XG5cbi5tYXItcmlnaHQtMTUge1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbi5tYXItdG9wLTE1IHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbn1cblxuLnNob3dPbmx5UGFyZW50IHtcbiAgd2lkdGg6IDEyMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnVpLmZvcm0gLmZpZWxkID4gbGFiZWwge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBjb2xvcjogIzE4MUIyMDtcbiAgbWFyZ2luOiAwcHggMHB4IDhweDtcbn1cblxuLnVpLmZvcm0gLnRocmVlLndpZGUuZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG5pLmljb24ge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDE2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgYm90dG9tOiAxMDAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTYwcHg7XG59XG5cbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5yZXN1bHQtYmxvY2sge1xuICB3aWR0aDogMTEwMHB4O1xuICBtYXJnaW46IDMycHggYXV0bztcbn1cblxuLnVpLmZvcm0gLnNpeC53aWRlLmZpZWxkLCAudWkuZm9ybSAuZm91ci53aWRlLmZpZWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcbn1cblxuLnNhdmUtYnRuLWJsb2NrIHtcbiAgd2lkdGg6IDExMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAxNDBweDtcbiAgcmlnaHQ6IDEwcHg7XG59XG4uc2F2ZS1idG4tYmxvY2sgYnV0dG9uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnVpLmdyaWQuZmllbGQuZWRpdC1yb2xlLWJsb2NrIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5yb2xlLXBlcm0tbGFiZWwge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yb2xlLXBlcm0tYmxvY2sge1xuICBib3JkZXI6IDFweCBzb2xpZCAjREFEQ0UwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDhweDtcbn1cbi5yb2xlLXBlcm0tYmxvY2sgaS5pY29uIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuLnJvbGUtcGVybS1ibG9jayAucG9zX2FjY2Vzcy1yaWdodHMge1xuICBjb2xvcjogcmdiYSgyNCwgMjcsIDMyLCAwLjcpO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ucm9sZS1wZXJtLWJsb2NrIC5wb3NfYWNjZXNzLXJpZ2h0cy5oZWFkIHtcbiAgY29sb3I6ICMxODFCMjA7XG4gIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG59XG4ucm9sZS1wZXJtLWJsb2NrIC51aS5jaGVja2JveCBsYWJlbDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG59XG4ucm9sZS1wZXJtLWJsb2NrIC51aS5jaGVja2JveCBsYWJlbDphZnRlciB7XG4gIGxlZnQ6IC0xcHg7XG59XG4ucm9sZS1wZXJtLWJsb2NrIC51aS5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gbGFiZWwgc3BhbiB7XG4gIGNvbG9yOiAjMTgxQjIwO1xufVxuLnJvbGUtcGVybS1ibG9jayAudWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmJlZm9yZSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5yb2xlLXBlcm0tYmxvY2sgLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuYm94OmJlZm9yZSB7XG4gIGJvcmRlcjogbm9uZTtcbn1cbi5yb2xlLXBlcm0tYmxvY2sgLnVpLmNoZWNrYm94LmlubmVyLWNoZWNrYm94IGxhYmVsOmFmdGVyIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLnJvbGUtcGVybS1ibG9jayAudWkuY2hlY2tib3guaW5uZXItY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmJlZm9yZSB7XG4gIGJhY2tncm91bmQ6ICM0MzdBREE7XG59XG4ucm9sZS1wZXJtLWJsb2NrIC51aS5jaGVja2JveC5pbm5lci1jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YWZ0ZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5yb2xlLXBlcm0tYmxvY2sgLnVpLmNoZWNrYm94LmlubmVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuYm94OmFmdGVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ucm9sZS1wZXJtLWJsb2NrIC51aS5jaGVja2JveC5vdXRlci1jaGVja2JveCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnJvbGUtcGVybS1ibG9jayAudWkuY2hlY2tib3gub3V0ZXItY2hlY2tib3ggbGFiZWwgaS5pY29uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbG9hdDogcmlnaHQ7XG59XG4ucm9sZS1wZXJtLWJsb2NrIC51aS5jaGVja2JveC5vdXRlci1jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gbGFiZWwgLnBvc19hY2Nlc3MtcmlnaHRzLmhlYWQge1xuICBjb2xvcjogIzE4MUIyMDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xufVxuLnJvbGUtcGVybS1ibG9jayAudWkuY2hlY2tib3gub3V0ZXItY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmJlZm9yZSwgLnJvbGUtcGVybS1ibG9jayAudWkuY2hlY2tib3gub3V0ZXItY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5ib3g6YmVmb3JlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2LCA0MCwgOTgsIDAuMyk7XG59XG4ucm9sZS1wZXJtLWJsb2NrIC51aS5jaGVja2JveC5vdXRlci1jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmJveDphZnRlciwgLnJvbGUtcGVybS1ibG9jayAudWkuY2hlY2tib3gub3V0ZXItY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmFmdGVyIHtcbiAgY29udGVudDogXCLigKJcIjtcbiAgZm9udC1zaXplOiAzNnB4O1xuICB0b3A6IC01cHg7XG4gIGNvbG9yOiAjMUI2MUREO1xufVxuXG4ubXQtMTIge1xuICBtYXJnaW46IDEycHg7XG59XG5cbi5jaGlsZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1pbi13aWR0aDogMTgwcHg7XG59XG5cbi5jaGlsZC1vYmotYmxvY2sge1xuICBib3JkZXI6IDFweCBzb2xpZCAjREFEQ0UwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW46IDhweDtcbiAgcGFkZGluZzogOHB4O1xuICBtYXgtd2lkdGg6IDk0cHg7XG59XG4uY2hpbGQtb2JqLWJsb2NrIC51aS5jaGVja2JveCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLnJlc3VsdC1ibG9jayB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWFyZ2luOiAyNHB4O1xuICB9XG5cbiAgLnVzZXIge1xuICAgIHBhZGRpbmctbGVmdDogMjRweDtcbiAgfVxuXG4gIC5zYXZlLWJ0bi1ibG9jayB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgcmlnaHQ6IC01OHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5yZXN1bHQtYmxvY2sge1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxuXG4gIC51c2VyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIH1cblxuICAuc2F2ZS1idG4tYmxvY2sge1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHJpZ2h0OiAtNDhweDtcbiAgfVxufSIsIi5vdXRlci1zZWdtZW50IHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMTgwcHg7XHJcbn1cclxuXHJcbi51c2VyIHtcclxuICBwYWRkaW5nOiAwcHggMzJweDtcclxufVxyXG5cclxuLnVzZXJfdGl0bGUge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIzcHg7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxufVxyXG5cclxuLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG5cclxuLnVpLmhlYWRlciB7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxufVxyXG5cclxuLmZpdmUud2lkZS5maWVsZC5nZW5kZXJfY2hlY2sge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLnVpLnRvcC5hdHRhY2hlZC5tZW51Pi5pdGVtIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yODU3MTQyOXJlbSAwIDAgMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51aS5ib3R0b20uYXR0YWNoZWQuYWN0aXZlLnRhYi5zZWdtZW50IHtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE3cHg7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTdweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxN3B4O1xyXG59XHJcblxyXG4uY3JlYXRlX3RhYl90aXRsZS5jb3Jwb3JhdGVfc3RhZmYge1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXJcclxufVxyXG5cclxuLnRhYi5zZWdtZW50IHtcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4ub3V0ZXItZm9ybSxcclxuLm91dGVyX2NvcnBGb3JtIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvLyBib3JkZXI6IDAuNXB4IHNvbGlkICM4MDgwODA7XHJcbiAgICAvLyBtYXJnaW46IDQ1cHggMzJweCAxMTFweCAyNXB4O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLnVpLmZvcm0uYjJiX2Jhc2ljX2Zvcm0sXHJcbi51aS5mb3JtLmNvcnBfZm9ybSB7XHJcbiAgICBtYXJnaW46IDE3cHggMjNweCAyNXB4IDIycHg7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgI0UwRTBFMDtcclxufVxyXG5cclxuLmFkZF9idG4ge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLmZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5kcm9wZG93biAudGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5jcmVhdGVfYnRuIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N2IxO1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgI0ZGRjtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICByaWdodDogMzBweDtcclxuICAgIGJvdHRvbTogMTA0cHg7XHJcbn1cclxuXHJcbi5jcmVhdGVfdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLmNvcnBvcmF0ZV9pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIGJvdHRvbTogMjhweDtcclxuICAgIGxlZnQ6IDlweDtcclxufVxyXG5cclxuZGl2LnVwbG9hZCB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgd2lkdGg6IDEyM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIGJvcmRlcjogMC41cHggc29saWQgIzgwODA4MDtcclxuICAgIG1hcmdpbi10b3A6IC0yNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjI1cHggMC4xcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbn1cclxuXHJcbmRpdi51cGxvYWQgaW5wdXQge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxMjNweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ub19jaG9vc2VuIHtcclxuICAgIGhlaWdodDogMTBweDtcclxuICAgIHdpZHRoOiA0NnB4O1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDEzMnB4O1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5maWxlX2Nob29zZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAzMXB4O1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uaXNzdWVfZGF0ZSB7XHJcbiAgICB0ZXh0LWluZGVudDogMTdweDtcclxufVxyXG5cclxuLmNvdW50cnlMaXN0VXNlciB7XHJcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnN1cGVyVEFyciB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLnNleFJhZGlvIHtcclxuICAgIHBhZGRpbmc6IDlweDtcclxufVxyXG5cclxuLnNleFJhZGlvIC5yYWRpbyB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbn1cclxuXHJcbi5tZW51X3Blcm1pc3Npb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5idG4tZGVsZXRlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDIzLCAyMyk7XHJcbn1cclxuXHJcbi5idG4tYWRkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XHJcbn1cclxuXHJcbi5wZXJtaXNzaW9uLWJsb2NrIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnBhZGQtbGVmdC0xNSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5uZXdBZ2VuY3lfdG9wQWxpZ24ge1xyXG4gICAgcGFkZGluZy10b3A6IDF2aDtcclxufVxyXG5cclxuLm1hci1yaWdodC0xNSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5tYXItdG9wLTE1IHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5zaG93T25seVBhcmVudCB7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnVpLmZvcm0gLmZpZWxkPmxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTNweDtcclxuICAgIGNvbG9yOiAjMTgxQjIwO1xyXG4gICAgbWFyZ2luOiAwcHggMHB4IDhweDtcclxufVxyXG5cclxuLnVpLmZvcm0gLnRocmVlLndpZGUuZmllbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuaS5pY29uIHtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbn1cclxuXHJcbi50b29sdGlwIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYm90dG9tOiAxMDAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNjBweDtcclxufVxyXG5cclxuLnRvb2x0aXA6aG92ZXIgLnRvb2x0aXB0ZXh0IHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi5yZXN1bHQtYmxvY2sge1xyXG4gICAgd2lkdGg6IDExMDBweDtcclxuICAgIG1hcmdpbjogMzJweCBhdXRvO1xyXG59XHJcblxyXG4udWkuZm9ybSAuc2l4LndpZGUuZmllbGQsIC51aS5mb3JtIC5mb3VyLndpZGUuZmllbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLnNhdmUtYnRuLWJsb2NrIHtcclxuICAgIHdpZHRoOiAxMTAwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMTQwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS5ncmlkLmZpZWxkLmVkaXQtcm9sZS1ibG9jayB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLnJvbGUtcGVybS1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucm9sZS1wZXJtLWJsb2NrIHtcclxuICAgIGkuaWNvbiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RBRENFMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcbiAgICAucG9zX2FjY2Vzcy1yaWdodHMge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI0LCAyNywgMzIsIDAuNyk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICYuaGVhZCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTgxQjIwO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC51aS5jaGVja2JveCB7XHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0xcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQ6Y2hlY2tlZH5sYWJlbCB7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxODFCMjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0OmNoZWNrZWR+LmJveDpiZWZvcmUge1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuICAgIC51aS5jaGVja2JveC5pbm5lci1jaGVja2JveCB7XHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dDpjaGVja2VkfmxhYmVsIHtcclxuICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzQzN0FEQTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0OmNoZWNrZWR+LmJveCB7XHJcbiAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudWkuY2hlY2tib3gub3V0ZXItY2hlY2tib3gge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgaS5pY29uIHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dDpjaGVja2VkfmxhYmVsIHtcclxuICAgICAgICAgICAgLnBvc19hY2Nlc3MtcmlnaHRzLmhlYWQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxODFCMjA7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQ6Y2hlY2tlZH5sYWJlbDpiZWZvcmUsIGlucHV0OmNoZWNrZWR+LmJveDpiZWZvcmUge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDYsIDQwLCA5OCwgMC4zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQ6Y2hlY2tlZH4uYm94OmFmdGVyLCBpbnB1dDpjaGVja2VkfmxhYmVsOmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJ1xcMjAyMic7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgICAgdG9wOiAtNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzFCNjFERDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tdC0xMiB7XHJcbiAgICBtYXJnaW46IDEycHg7XHJcbn1cclxuXHJcbi5jaGlsZC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWluLXdpZHRoOiAxODBweDtcclxufVxyXG5cclxuLmNoaWxkLW9iai1ibG9jayB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjREFEQ0UwO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBtYXJnaW46IDhweDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICAgIG1heC13aWR0aDogOTRweDtcclxuICAgIC51aS5jaGVja2JveCB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICAucmVzdWx0LWJsb2NrIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBtYXJnaW46IDI0cHg7XHJcbiAgICB9XHJcbiAgICAudXNlciB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xyXG4gICAgfVxyXG4gICAgLnNhdmUtYnRuLWJsb2NrIHtcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICByaWdodDogLTU4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcclxuICAgIC5yZXN1bHQtYmxvY2sge1xyXG4gICAgICAgIG1hcmdpbjogMjBweDtcclxuICAgIH1cclxuICAgIC51c2VyIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuc2F2ZS1idG4tYmxvY2sge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIHJpZ2h0OiAtNDhweDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/layout/user-role-management/edit-user/edit-user.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/layout/user-role-management/edit-user/edit-user.component.ts ***!
  \******************************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_user_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/user-role.service */ "./src/app/shared/services/user-role.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _shared_utils_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/utils/common */ "./src/app/shared/utils/common.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");








let EditUserComponent = class EditUserComponent {
    constructor(activeRoute, toastr, userRoleService, formBuilder, commonService, router) {
        this.activeRoute = activeRoute;
        this.toastr = toastr;
        this.userRoleService = userRoleService;
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.router = router;
        this.submitted = false;
        this.countries = [];
        this.saluteNames = _shared_utils_common__WEBPACK_IMPORTED_MODULE_6__["saluteNames"];
        this.statusRow = _shared_utils_common__WEBPACK_IMPORTED_MODULE_6__["statusRow"];
        this.rolePermissions = [];
        this.userInfo = {};
        // get user id
        let userId = this.activeRoute.snapshot.params.id;
        // Get country list
        this.getUserInfo(userId);
        const selectAllControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](false);
        // business user form
        this.editBusinessForm = this.formBuilder.group({
            id: [''],
            salute: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            first_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            last_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            sex: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            initial: [''],
            mobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            email: [{ value: this.userInfo.email, disabled: true }],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password_confirmation: [''],
            username: [{ value: this.userInfo.username, disabled: true }],
            address_1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            address_2: [''],
            country_id: [this.userInfo.country_id, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            menu_permission: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArray"]([]),
            selected_permissions: [''],
            organisation_id: [''],
            is_active: [this.userInfo.is_active],
            selectAll: selectAllControl,
            skills: this.formBuilder.array([
            //this.getSkillFormGroup()
            ])
        });
    }
    // convenience getter for easy access to form fields
    get f() { return this.editBusinessForm.controls; }
    get password() { return this.editBusinessForm.get('password'); }
    get password_confirmation() { return this.editBusinessForm.get('password_confirmation'); }
    ngOnInit() {
        this.countryList();
        this.agentsList();
        this.getYearList();
        this.onChanges();
    }
    // get current logedin user info and update profile
    getUserInfo(userId) {
        this.userRoleService.getUser(userId).subscribe((result) => {
            if (result.type != 'error') {
                this.userInfo = result.data;
                const { salute, first_name, last_name, initial, email, address_1, address_2, country_id, mobile, username, organisation_id, menu_permission, sex, is_active, target_amount } = this.userInfo;
                this.editBusinessForm.patchValue({
                    id: userId,
                    salute,
                    initial,
                    first_name,
                    last_name,
                    email,
                    address_1,
                    address_2,
                    country_id,
                    mobile,
                    username,
                    organisation_id,
                    // is_active:this.userInfo.is_active,
                    is_active,
                    sex,
                });
                let targetAmountArray = JSON.parse(this.userInfo.target_amount);
                if (targetAmountArray) {
                    for (let line = 0; line < targetAmountArray.length; line++) {
                        this.skill.push(this.formBuilder.group(targetAmountArray[line]));
                    }
                }
                else {
                    this.addSkill();
                }
                // set role and permissions
                // this.getSettings();
                this.rolePermissions = {
                    data: JSON.parse(menu_permission),
                    keys: Object.keys(JSON.parse(menu_permission))
                };
            }
            else {
                this.toastr.error(`${result.msg}`, `${result.msg}`, {
                    timeOut: 1000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
                this.router.navigate(['user-role-management/list-user']);
            }
        });
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
        return this.editBusinessForm.get('skills');
    }
    addSkill() {
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
        // this.editBusinessForm.get('selectAll').valueChanges.subscribe(bool => {
        //   this.editBusinessForm
        //     .get('menu_permission')
        //     .patchValue(Array(this.rolePermissions.length).fill(bool), { emitEvent: false });
        // });
        // Subscribe to changes on the preference checkboxes
        // this.editBusinessForm.get('menu_permission').valueChanges.subscribe(val => {
        //   const allSelected = val.every(bool => bool);
        //   if (this.editBusinessForm.get('selectAll').value !== allSelected) {
        //     this.editBusinessForm.get('selectAll').patchValue(allSelected, { emitEvent: false });
        //   }
        // });
    }
    // get country list
    countryList() {
        this.commonService.getCountryList().subscribe((result) => {
            this.countries = result.countries;
        });
    }
    // get agents
    agentsList() {
        this.commonService.getAgentsList().subscribe((result) => {
            this.agents = result.listData;
        });
    }
    getSettings() {
        let permArr = { "name": ['RolePermissions'] };
        let existsPerm;
        existsPerm = JSON.parse(this.userInfo.menu_permission);
        this.commonService.getSettingList(permArr).subscribe((result) => {
            this.settings = result.listData;
            var rolesObj = JSON.parse(result.listData.find(list => list.name == 'RolePermissions').value);
            this.rolePermissions = Object.entries(rolesObj).map(([key, value]) => ({ key, value }));
            this.rolePermissions.forEach((element, i) => {
                let trueFalse = false;
                let keyOfRole = element.key;
                if (typeof existsPerm[keyOfRole] != undefined) {
                    if (existsPerm[keyOfRole] == 1) {
                        trueFalse = true;
                    }
                }
                const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](trueFalse);
                this.editBusinessForm.controls.menu_permission.push(control);
            });
        });
    }
    updateBussiessUser() {
        this.submitted = true;
        // console.log("--this.editBusinessForm", this.editBusinessForm)
        if (this.editBusinessForm.invalid) {
            return;
        }
        // Filter out the unselected ids of role permissions
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
        let updateForm;
        updateForm = this.editBusinessForm.value;
        updateForm.selected_permissions = this.rolePermissions.data;
        this.userRoleService.updateUser(updateForm).subscribe((result) => {
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
    validatePassword() {
        const { password, password_confirmation } = this;
        if (!password_confirmation.dirty && !password.dirty) {
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
    ngAfterViewInit() {
        var scope = this;
        $(document).ready(function () {
            ($('.menu .item')).tab();
            ($('.ui.checkbox')).checkbox();
            ($('.ui.dropdown')).dropdown();
        });
        // console.log("this.rolePermissions");
        // console.log(this.rolePermissions);
    }
};
EditUserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
    { type: src_app_shared_services_user_role_service__WEBPACK_IMPORTED_MODULE_2__["UserRoleService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
EditUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-user',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user-role-management/edit-user/edit-user.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-user.component.scss */ "./src/app/layout/user-role-management/edit-user/edit-user.component.scss")).default]
    })
], EditUserComponent);



/***/ }),

/***/ "./src/app/layout/user-role-management/edit-user/edit-user.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/user-role-management/edit-user/edit-user.module.ts ***!
  \***************************************************************************/
/*! exports provided: EditUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserModule", function() { return EditUserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _edit_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-user.component */ "./src/app/layout/user-role-management/edit-user/edit-user.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _edit_user_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit-user-routing.module */ "./src/app/layout/user-role-management/edit-user/edit-user-routing.module.ts");










let EditUserModule = class EditUserModule {
};
EditUserModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_edit_user_component__WEBPACK_IMPORTED_MODULE_1__["EditUserComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _edit_user_routing_module__WEBPACK_IMPORTED_MODULE_9__["EditUserRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"]
        ]
    })
], EditUserModule);



/***/ })

}]);
//# sourceMappingURL=edit-user-edit-user-module-es2016.js.map