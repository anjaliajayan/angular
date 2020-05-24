(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-group-profile-new-group-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile.component.html":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile.component.html ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3><span class=\"booking-header\">New Group Profile</span></h3>\r\n<div class=\"ui fluid container\">\r\n  <div class=\"ui grid container stepper-grid\" #tab>\r\n    <div class=\"five wide column stepper-grid_step _active\" id=\"group\" (click)=\"setActiveTab('group')\">\r\n      <div class=\"stepper-grid_step__step-icon\">\r\n        <div>\r\n          <div class=\"image _group\"></div>\r\n        </div>\r\n        <label>Group Data</label>\r\n      </div>\r\n      <div class=\"stepper-grid_step__step-border\">\r\n        <hr />\r\n      </div>\r\n    </div>\r\n    <div class=\"five wide column stepper-grid_step\" id=\"member\" (click)=\"setActiveTab('member')\">\r\n      <div class=\"stepper-grid_step__step-icon\">\r\n        <div>\r\n          <div class=\"image _member\"></div>\r\n        </div>\r\n        <label>Member Data</label>\r\n      </div>\r\n      <div class=\"stepper-grid_step__step-border\">\r\n        <hr />\r\n      </div>\r\n    </div>\r\n    <div class=\"three wide column stepper-grid_step\" id=\"remarks\" (click)=\"setActiveTab('remarks')\">\r\n      <div class=\"stepper-grid_step__step-icon\">\r\n        <div>\r\n          <div class=\"image _remarks\"></div>\r\n        </div>\r\n        <label>Remarks</label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <form [formGroup]=\"newGroupProfileForm\" autocomplete=\"off\" class=\"ui form\" #tabContent>\r\n    <div id=\"group-content\" class=\"stepper-grid-content animated fadeIn _active\">\r\n      <div class=\"outer-basic\">\r\n        <div class=\"outer-basicForm\">\r\n          <div class=\"ui form-inner grid\">\r\n            <div class=\"sixteen wide column\">\r\n              <h4>Group Data</h4>\r\n            </div>\r\n            <div class=\"sixteen wide column\">\r\n              <label>General Info</label>\r\n            </div>\r\n            <div class=\"ui sixteen wide column grid\">\r\n              <div class=\"two wide column\">\r\n                <input type=\"text\" name=\"groupName\" formControlName=\"group_name\" value=\"\" placeholder=\"Group Name\">\r\n              </div>\r\n              <div class=\"four wide column\">\r\n                <input type=\"text\" name=\"groupDescription\" formControlName=\"group_description\" value=\"\"\r\n                  placeholder=\"Group Description\">\r\n              </div>\r\n              <div class=\"four wide column\">\r\n                <input type=\"text\" name=\"groupIndex\" formControlName=\"group_index\" value=\"\" placeholder=\"Group Index\">\r\n              </div>\r\n              <div class=\"four wide column\">\r\n                <div class=\"ui fluid search selection dropdown\">\r\n                  <input type=\"hidden\" name=\"languages\" formControlName=\"languages\" value=\"\">\r\n                  <i class=\"dropdown icon\"></i>\r\n                  <div class=\"default text\">Languages</div>\r\n                  <div class=\"menu\">\r\n                    <div class=\"item\" (click)=\"setDropDownType('Arabic', 'languages')\">Arabic</div>\r\n                    <div class=\"item\" (click)=\"setDropDownType('English', 'languages')\">English</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui sixteen wide column grid\">\r\n                <div formArrayName=\"number\"\r\n                  *ngFor=\"let numberD of newGroupProfileForm.get('number')['controls']; let nIndex = index\">\r\n                  <div [formGroupName]=\"nIndex\" class=\"ui sixteen wide column grid\">\r\n                    <div class=\"three wide column newAgency_topAlign\">\r\n                      <div class=\"ui checkbox\">\r\n                        <input type=\"checkbox\" name=\"prefered\" formControlName=\"preferedHome\" value=\"\">\r\n                        <label>Preferred</label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"two wide column\">\r\n                      <div class=\"ui fluid search selection dropdown\">\r\n                        <input type=\"hidden\" name=\"home\" formControlName=\"home\" value=\"\">\r\n                        <i class=\"dropdown icon\"></i>\r\n                        <div class=\"default text\">Home</div>\r\n                        <div class=\"menu\">\r\n                          <div class=\"item\" (click)=\"setDropDownType('Home 1', 'home')\">Home 1</div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('Home 2', 'home')\">Home 2</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"four wide column\">\r\n                      <input type=\"text\" name=\"number\" formControlName=\"number\" value=\"\" placeholder=\"Number\">\r\n                    </div>\r\n                    <div class=\"five wide column\">\r\n                      <input type=\"text\" name=\"number_comment\" formControlName=\"number_comment\" value=\"\"\r\n                        placeholder=\"Comment\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"sixteen wide column\">\r\n                  <div class=\"ui primary button\" (click)=\"addMoreNumber()\">Add Number +</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui sixteen wide column grid\">\r\n                <div formArrayName=\"email\"\r\n                  *ngFor=\"let emailD of newGroupProfileForm.get('email')['controls'];let eIndex = index\">\r\n                  <div [formGroupName]=\"eIndex\" class=\"ui sixteen wide column grid\">\r\n                    <div class=\"three wide column newAgency_topAlign\">\r\n                      <div class=\"ui checkbox \">\r\n                        <input type=\"checkbox\" name=\"prefered\" formControlName=\"preferedOfficial\" value=\"\">\r\n                        <label>Prefered</label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"two wide column\">\r\n                      <div class=\"ui fluid search selection dropdown\">\r\n                        <input type=\"hidden\" name=\"office\" formControlName=\"Official\" value=\"\">\r\n                        <i class=\"dropdown icon\"></i>\r\n                        <div class=\"default text\">Official</div>\r\n                        <div class=\"menu\">\r\n                          <div class=\"item\" (click)=\"setDropDownType('Official 1', 'Official')\">\r\n                            Official 1</div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('Official 1', 'Official')\">\r\n                            Official 2</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"four wide column\">\r\n                      <input type=\"text\" name=\"emailAddress\" formControlName=\"emailAddress\" value=\"\"\r\n                        placeholder=\"Email Address\">\r\n                    </div>\r\n                    <div class=\"five wide column\">\r\n                      <input type=\"text\" name=\"comment\" formControlName=\"emailAddress_comment\" value=\"\"\r\n                        placeholder=\"Comment\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"sixteen wide column\">\r\n                  <div class=\"ui primary button\" (click)=\"addMoreEmail()\">Add Email +</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui sixteen wide column grid\">\r\n                <div formArrayName=\"address\" class=\"sixteen wide column\"\r\n                  *ngFor=\"let addressD of newGroupProfileForm.get('address')['controls']; let aIndex = index\">\r\n                  <div [formGroupName]=\"aIndex\" class=\"ui sixteen wide column grid\">\r\n                    <div class=\"three wide column newAgency_topAlign\">\r\n                      <div class=\"ui checkbox \">\r\n                        <input type=\"checkbox\" name=\"prefered\" formControlName=\"preferedAddress\" value=\"\">\r\n                        <label>Preferred</label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"two wide column\">\r\n                      <div class=\"ui fluid search selection dropdown\">\r\n                        <input type=\"hidden\" name=\"office\" formControlName=\"addressList\" value=\"\">\r\n                        <i class=\"dropdown icon\"></i>\r\n                        <div class=\"default text\">Office</div>\r\n                        <div class=\"menu\">\r\n                          <div class=\"item\" (click)=\"setDropDownType('Office 1', 'addressList')\">\r\n                            Office 1</div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('Office 2', 'addressList')\">\r\n                            Office 2</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"five wide column\">\r\n                      <input type=\"text\" name=\"address\" formControlName=\"address\" value=\"\" placeholder=\"Address\">\r\n                    </div>\r\n                    <div class=\"three wide column\">\r\n                      <input type=\"text\" name=\"street\" formControlName=\"street\" value=\"\" placeholder=\"Street\">\r\n                    </div>\r\n                    <div class=\"three wide column\">\r\n                      <input type=\"text\" name=\"city\" formControlName=\"city\" value=\"\" placeholder=\"City\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui sixteen wide column grid\">\r\n                    <div class=\"three wide column\">\r\n                      <div class=\"ui checkbox \">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"three wide column\">\r\n                    </div>\r\n                    <div class=\"two wide column\">\r\n                      <input type=\"text\" name=\"state\" formControlName=\"state\" value=\"\" placeholder=\"Region/State\">\r\n                    </div>\r\n                    <div class=\"three wide column\">\r\n                      <input type=\"text\" name=\"postalCode\" formControlName=\"postalCode\" value=\"\"\r\n                        placeholder=\"Postal Code\">\r\n                    </div>\r\n                    <div class=\"three wide column\">\r\n                      <div class=\"ui fluid search selection dropdown\">\r\n                        <input type=\"hidden\" name=\"country\" formControlName=\"countryList\" value=\"\">\r\n                        <i class=\"dropdown icon\"></i>\r\n                        <div class=\"default text\">Country</div>\r\n                        <div class=\"menu\">\r\n                          <div class=\"item\" (click)=\"setDropDownType('USA', 'countryList')\">\r\n                            USA</div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('UAE', 'countryList')\">\r\n                            UAE</div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('Australia', 'countryList')\">\r\n                            Australia</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"three wide column\">\r\n                      <input type=\"text\" name=\"company\" formControlName=\"company\" value=\"\" placeholder=\"Company\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui sixteen wide column grid\">\r\n                    <div class=\"five wide column\">\r\n                      <input type=\"text\" name=\"comment\" formControlName=\"address_comment\" value=\"\"\r\n                        placeholder=\"Comment\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"sixteen wide column\">\r\n                  <div class=\"ui primary button\" (click)=\"addMoreAddress()\">Add Address +</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <button class=\"ui primary  button\" (click)=\"updateNewGroupProfile();\">\r\n            Update Profile\r\n          </button> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Agency Info</h4>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"two wide field\">\r\n                <input type=\"text\" name=\"responsibleOffice\" formControlName=\"responsible_office\" value=\"\"\r\n                  placeholder=\"Responsible Office\">\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <input type=\"text\" name=\"deptContactName\" formControlName=\"department_contact_name\" value=\"\"\r\n                  placeholder=\"Department Contact Name\">\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <input type=\"text\" name=\"agentContactName\" formControlName=\"agent_contact_name\" value=\"\"\r\n                  placeholder=\"Agent Contact Name\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"member-content\" class=\"stepper-grid-content animated fadeIn\">\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"ui form form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Members Data</h4>\r\n            </div><br>\r\n            <div class=\"fields\">\r\n              <label>Group Members</label>\r\n            </div>\r\n            <div class=\"ui sixteen wide column grid\">\r\n              <div class=\"two wide column newAgency_topAlign\">\r\n                <label>Member 1</label>\r\n              </div>\r\n              <div class=\"sixteen wide column newAgency_topAlign\">\r\n                <div class=\"ui checkbox\">\r\n                  <input type=\"checkbox\" formControlName=\"member1\" value=\"\" name=\"explosionIndicator\">\r\n                  <label>Main Contact</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <br />\r\n            <div formArrayName=\"group_members\" class=\"ui sixteen wide column grid\">\r\n              <div\r\n                *ngFor=\"let group_membersD of newGroupProfileForm.get('group_members')['controls'];let gIndex = index\">\r\n                <div [formGroupName]=\"gIndex\" class=\"ui sixteen wide column grid\">\r\n                  <div class=\"three wide column\">\r\n                    <input type=\"text\" name=\"recordLocator\" placeholder=\"Record Locator\">\r\n                  </div>\r\n                  <div class=\"three wide column\">\r\n                    <input type=\"text\" name=\"firstName\" placeholder=\"First Name\">\r\n                  </div>\r\n                  <div class=\"three wide column\">\r\n                    <input type=\"text\" name=\"lastName\" placeholder=\"Last Name\">\r\n                  </div>\r\n                  <div class=\"three wide column\">\r\n                    <input type=\"text\" name=\"dob\" placeholder=\"DOB(DD MM YYYY)\">\r\n                  </div>\r\n                  <div class=\"ui sixteen wide column grid\">\r\n                    <div class=\"five wide column\">\r\n                      <input type=\"text\" name=\"telephone\" placeholder=\"Telephone\">\r\n                    </div>\r\n                    <div class=\"five wide column\">\r\n                      <input type=\"text\" name=\"email\" placeholder=\"Email\", class=\"email\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"sixteen wide column\">\r\n                <div class=\"ui primary button\" (click)=\"addMoreGroup_members()\">\r\n                  Add Member +\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"remarks-content\" class=\"stepper-grid-content animated fadeIn\">\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Remarks</h4>\r\n            </div>\r\n            <div formArrayName=\"remarks\">\r\n              <div *ngFor=\"let remarksD of newGroupProfileForm.get('remarks')['controls']; let remarksIndex = index\">\r\n                <div [formGroupName]=\"remarksIndex\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"three wide field\">\r\n                      <div class=\"ui fluid search selection dropdown\">\r\n                        <input type=\"hidden\" formControlName=\"remark_type\" value=\"\" name=\"remarkType\">\r\n                        <i class=\"dropdown icon\"></i>\r\n                        <div class=\"default text\">Remark Type</div>\r\n                        <div class=\"menu\">\r\n                          <div class=\"item\" (click)=\"setDropDownType('Type 1', 'remark_type')\">\r\n                            Type 1</div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('Type 2', 'remark_type')\">\r\n                            Type 2</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"three wide field \">\r\n                      <div class=\"ui fluid search selection dropdown\">\r\n                        <input type=\"hidden\" formControlName=\"remark_category\" value=\"\" name=\"category\">\r\n                        <i class=\"dropdown icon\"></i>\r\n                        <div class=\"default text\">Category</div>\r\n                        <div class=\"menu\">\r\n                          <div class=\"item\" (click)=\"setDropDownType('Category 1', 'remark_category')\">Category\r\n                            1</div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('Category 2', 'remark_category')\">Category\r\n                            2</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"six wide field \">\r\n                      <textarea type=\"text\" name=\"remark\" formControlName=\"remark\" value=\"\" placeholder=\"Remark\"\r\n                        rows=\"4\" cols=\"50\"></textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui sixteen wide column grid\">\r\n              <div class=\"ui primary button btn-sticky\" (click)=\"addMoreRemarks()\">\r\n                Add Remarks +\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Profile Notes</h4>\r\n            </div>\r\n            <div formArrayName=\"profile_notes\">\r\n              <div\r\n                *ngFor=\"let profile_notesD of newGroupProfileForm.get('profile_notes')['controls']; let notesIndex = index\">\r\n                <div [formGroupName]=\"notesIndex\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"three wide field\">\r\n                      <div class=\"ui fluid search selection dropdown\">\r\n                        <input type=\"hidden\" formControlName=\"profile_notes_category\" value=\"\" name=\"category\">\r\n                        <i class=\"dropdown icon\"></i>\r\n                        <div class=\"default text\">Category</div>\r\n                        <div class=\"menu\">\r\n                          <div class=\"item\" (click)=\"setDropDownType('Category 1', 'profile_notes_category')\">\r\n                            Category 1</div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('Category 1', 'profile_notes_category')\">\r\n                            Category 2</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"five wide field \">\r\n                      <input type=\"text\" name=\"information\" formControlName=\"profile_notes_information\" value=\"\"\r\n                        placeholder=\"Information\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui primary button btn-sticky\" (click)=\"addMoreProfile_notes()\">\r\n                Add Profile Note +\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Priority Lines 1</h4>\r\n            </div>\r\n            <!-- <div class=\"fields\"> -->\r\n            <div formArrayName=\"priority_lines1\">\r\n              <div\r\n                *ngFor=\"let priority_lines1D of newGroupProfileForm.get('priority_lines1')['controls']; let priorityIndex1 = index\">\r\n                <div [formGroupName]=\"priorityIndex1\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"five wide field \">\r\n                      <input type=\"text\" name=\"information\" formControlName=\"priorityInformation1\" value=\"\"\r\n                        placeholder=\"\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui primary button btn-sticky\" (click)=\"addMorePriority_lines1()\">\r\n                Add Priority Line +\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Priority Lines 2</h4>\r\n            </div>\r\n            <!-- <div class=\"fields\"> -->\r\n            <div formArrayName=\"priority_lines2\">\r\n              <div\r\n                *ngFor=\"let priority_lines2D of newGroupProfileForm.get('priority_lines2')['controls']; let priorityIndex2 = index\">\r\n                <div [formGroupName]=\"priorityIndex2\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"five wide field \">\r\n                      <input type=\"text\" name=\"information\" formControlName=\"priorityInformation2\" value=\"\"\r\n                        placeholder=\"\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui primary button btn-sticky m-auto\" (click)=\"addMorePriority_lines2()\">\r\n              Add Priority Line +\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Follow Up</h4>\r\n            </div>\r\n            <!-- <div class=\"fields\"> -->\r\n            <div formArrayName=\"follow_up\">\r\n              <div\r\n                *ngFor=\"let follow_upD of newGroupProfileForm.get('follow_up')['controls']; let follow_upIndex = index\">\r\n                <div [formGroupName]=\"follow_upIndex\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"three wide field \">\r\n                      <input type=\"text\" name=\"date\" formControlName=\"followUpDate\" value=\"\"\r\n                        placeholder=\"Date (DDMMYYYY)\">\r\n                    </div>\r\n                    <div class=\"three wide field \">\r\n                      <input type=\"text\" name=\"action\" formControlName=\"followUpAction\" value=\"\" placeholder=\"Action\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui primary button btn-sticky\" (click)=\"addMoreFollow_up()\">\r\n                Add Follow Up +\r\n              </div>\r\n            </div>\r\n            <!-- </div> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"ui sixteen wide column grid\">\r\n        <button type=\"button\" class=\"ui positive button m-auto\" (click)=\"createNewGroupProfile()\">\r\n          Save\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile-routing.module.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile-routing.module.ts ***!
  \********************************************************************************************************************/
/*! exports provided: NewGroupProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewGroupProfileRoutingModule", function() { return NewGroupProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _new_group_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-group-profile.component */ "./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: '', component: _new_group_profile_component__WEBPACK_IMPORTED_MODULE_1__["NewGroupProfileComponent"] }
];
let NewGroupProfileRoutingModule = class NewGroupProfileRoutingModule {
};
NewGroupProfileRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], NewGroupProfileRoutingModule);



/***/ }),

/***/ "./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile.component.scss":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile.component.scss ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".stepper-grid {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n.stepper-grid .stepper-grid_step {\n  display: flex;\n  align-items: center;\n  opacity: 0.6;\n  cursor: pointer;\n}\n.stepper-grid .stepper-grid_step._active {\n  opacity: 1;\n  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div {\n  background-color: #062862;\n  border: 0;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div div.image {\n  background-color: white;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div:hover {\n  border: 2px solid #A6B1C3;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon label {\n  border: 0;\n  background-color: #062862;\n  color: white;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-border hr {\n  border-bottom: 2px solid #062862;\n}\n.stepper-grid .stepper-grid_step._activated {\n  opacity: 1;\n  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div {\n  background-color: #437ADA;\n  border: 0;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div div.image {\n  background-color: white;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div:hover {\n  border: 2px solid #A6B1C3;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon label {\n  border: 0;\n  background-color: #437ADA;\n  color: white;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-border hr {\n  border-bottom: 2px solid #437ADA;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div {\n  background-color: transparent;\n  border: 2px solid #A6B1C3;\n  color: white;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  align-items: center;\n  border-radius: 50%;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon label {\n  width: 100px;\n  height: auto;\n  line-height: 24px;\n  text-align: center;\n  background-color: transparent;\n  border: 2px solid #A6B1C3;\n  margin-top: 15px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 600 !important;\n  font-size: 13px;\n  color: #A6B1C3;\n  border-radius: 8px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon label._last {\n  width: 150px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-border {\n  width: 100%;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-border hr {\n  margin-top: -24px;\n  width: 100%;\n  height: 2px;\n  background: none;\n  border-bottom: 2px solid #A6B1C3;\n}\n.stepper-grid-content {\n  display: none;\n}\n.stepper-grid-content._active {\n  display: block;\n}\n.checkbox_label {\n  height: 13px !important;\n  color: #828282 !important;\n  font-family: Ubuntu !important;\n  font-size: 12px !important;\n  font-weight: 300 !important;\n}\n.booking-header {\n  color: #4F4F4F;\n  font-family: Helvetica;\n  font-size: 20px;\n  font-weight: 300;\n  line-height: 22px;\n  margin-left: 22px;\n}\n.outer-basic {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n  padding: 15px;\n}\n.bookings_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n.bookings_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n.bookings_pickers .input .icon {\n  opacity: 1;\n  z-index: 100;\n}\n.bookings_pickers .input .icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n.bookings_pickers .input .icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n.bookings_pickers .input .search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.bookings_pickers .input .search.dropdown .search {\n  margin-left: 42px !important;\n}\n.bookings_pickers .input .search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n.bookings_btn-panel .secondary {\n  width: 135.64px;\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n.bookings_btn-panel .primary {\n  width: 135.64px;\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n.trailing_button {\n  position: absolute;\n  right: 0;\n}\n.newAgency_topAlign {\n  padding-bottom: 15px;\n}\ntd {\n  color: #4F4F4F;\n  font-family: Helvetica;\n  font-size: 10px;\n  line-height: 11px;\n  text-align: center;\n}\nth {\n  color: #4F4F4F;\n  font-family: Helvetica;\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 11px;\n  text-align: center;\n}\n.confirm {\n  width: 63px;\n}\n.recConfirm {\n  height: 18px;\n  width: 62px;\n  background-color: #72D44F;\n  color: white;\n  padding-top: 0.5vh;\n}\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n.field input::-webkit-input-placeholder {\n  font-size: 12px;\n}\n.field input::-moz-placeholder {\n  font-size: 12px;\n}\n.field input::-ms-input-placeholder {\n  font-size: 12px;\n}\n.field input::placeholder {\n  font-size: 12px;\n}\n.outer-basic_secondary {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n}\n.outer-basicForm_secondary {\n  width: 100%;\n  height: auto;\n  padding: 15px;\n}\n.right_links {\n  position: absolute;\n  right: 0;\n  padding-top: 1vh;\n  padding-right: 8vh;\n}\n.outer-basic_tertiary {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\n.outer-basicForm_tertiary {\n  width: 100%;\n  height: auto;\n  padding: 50px;\n}\nhr {\n  box-sizing: border-box;\n  height: 1px;\n  border: 0.5px solid #E0E0E0;\n}\n.dropdown .text {\n  font-size: 12px;\n}\n.bookings_btn-panel.trailing_button {\n  margin-right: 44px;\n}\n.ui.fluid.container {\n  padding: 28px;\n}\n.right_links {\n  padding-top: 1vh;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image {\n  width: 22px;\n  margin: 0 auto;\n  background-color: #A6B1C3;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._member {\n  -webkit-mask: url('personal.svg') no-repeat center;\n  mask: url('personal.svg') no-repeat center;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._group {\n  -webkit-mask: url('group.svg') no-repeat center;\n  mask: url('group.svg') no-repeat center;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._remarks {\n  -webkit-mask: url('remarks.svg') no-repeat center;\n  mask: url('remarks.svg') no-repeat center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LWdyb3VwLXByb2ZpbGUvRTpcXEJlbGFsXFxwcm9qZWN0c1xccHJvZHVjdGlvbi1idWlsZFxcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGNvbW9uLXN0eWxlc1xcc3RlcHBlci5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcHJvZmlsZS1tYW5hZ2VtZW50L2NyZWF0ZS1uZXctcHJvZmlsZS9uZXctZ3JvdXAtcHJvZmlsZS9uZXctZ3JvdXAtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LWdyb3VwLXByb2ZpbGUvRTpcXEJlbGFsXFxwcm9qZWN0c1xccHJvZHVjdGlvbi1idWlsZFxcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGNvbW9uLXN0eWxlc1xcZGVzaWduLXBhbGV0dGUuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LWdyb3VwLXByb2ZpbGUvRTpcXEJlbGFsXFxwcm9qZWN0c1xccHJvZHVjdGlvbi1idWlsZFxcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxwcm9maWxlLW1hbmFnZW1lbnRcXGNyZWF0ZS1uZXctcHJvZmlsZVxcbmV3LWdyb3VwLXByb2ZpbGVcXG5ldy1ncm91cC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcHJvZmlsZS1tYW5hZ2VtZW50L2NyZWF0ZS1uZXctcHJvZmlsZS9uZXctZ3JvdXAtcHJvZmlsZS9FOlxcQmVsYWxcXHByb2plY3RzXFxwcm9kdWN0aW9uLWJ1aWxkXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcY29tb24tc3R5bGVzXFxtaXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNDSjtBRENJO0VBQ0UsVUFBQTtFQUNBLDBEQUFBO0FDQ047QURFUTtFQUNFLHlCRWRRO0VGZVIsU0FBQTtBQ0FWO0FERVU7RUFDRSx1QkFBQTtBQ0FaO0FER1U7RUFDRSx5QkFBQTtBQ0RaO0FES1E7RUFDRSxTQUFBO0VBQ0EseUJFNUJRO0VGNkJSLFlBQUE7QUNIVjtBRFFRO0VBQ0UsZ0NBQUE7QUNOVjtBRFdJO0VBQ0UsVUFBQTtFQUNBLDBEQUFBO0FDVE47QURZUTtFQUNFLHlCRWhETTtFRmlETixTQUFBO0FDVlY7QURZVTtFQUNFLHVCQUFBO0FDVlo7QURhVTtFQUNFLHlCQUFBO0FDWFo7QURlUTtFQUNFLFNBQUE7RUFDQSx5QkU5RE07RUYrRE4sWUFBQTtBQ2JWO0FEa0JRO0VBQ0UsZ0NBQUE7QUNoQlY7QURxQkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ25CTjtBRHFCTTtFQUNFLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ25CUjtBRHNCTTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlDRXpFTTtFRjBFTiwyQkFBQTtFQUNBLGVBQUE7RUFDQSxjRXBHVTtFRnFHVixrQkVoRmdCO0FENER4QjtBRHNCUTtFQUNFLFlBQUE7QUNwQlY7QUR5Qkk7RUFDRSxXQUFBO0FDdkJOO0FEeUJNO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUN2QlI7QUQ2QkE7RUFDRSxhQUFBO0FDMUJGO0FENEJFO0VBQ0UsY0FBQTtBQzFCSjtBRXBHQTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUZ1R0Y7QUVwR0E7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FGdUdGO0FFcEdBO0VBQ0Usc0JBQUE7RUFDQSw0Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUZ1R0Y7QUVwR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUZ1R0Y7QUVsR0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FGcUdKO0FFbEdFO0VBQ0Usd0JBQUE7RUFDQSwwQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUZvR0o7QUVqR0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBRm1HSjtBRWpHSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FGbUdOO0FFakdNO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0FGbUdSO0FFOUZFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FGZ0dKO0FFOUZJO0VBQ0UsNEJBQUE7QUZnR047QUU3Rkk7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtBRitGTjtBRXpGRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUZBQUE7QUY0Rko7QUV6RkU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlGQUFBO0FGMkZKO0FFdEZBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FGeUZGO0FFdEZBO0VBQ0Usb0JBQUE7QUZ5RkY7QUVyRkE7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRndGRjtBRXJGQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUZ3RkY7QUVyRkE7RUFDRSxXQUFBO0FGd0ZGO0FFckZBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBRndGRjtBRXJGQTtFQUNFLDRDQUFBO0FGd0ZGO0FFcEZBO0VBQ0UsZUFBQTtBRnVGRjtBRXhGQTtFQUNFLGVBQUE7QUZ1RkY7QUV4RkE7RUFDRSxlQUFBO0FGdUZGO0FFeEZBO0VBQ0UsZUFBQTtBRnVGRjtBRW5GQTtFQUNFLHNCQUFBO0VBQ0EsNENBQUE7QUZzRkY7QUVuRkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUZzRkY7QUVuRkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FGc0ZGO0FFbkZBO0VBQ0Usc0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUZzRkY7QUVuRkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUZzRkY7QUVuRkE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtBRnNGRjtBRW5GQTtFQUNFLGVBQUE7QUZzRkY7QUVuRkE7RUFDRSxrQkFBQTtBRnNGRjtBRW5GQTtFQUNFLGFBQUE7QUZzRkY7QUVuRkE7RUFDRSxnQkFBQTtBRnNGRjtBRWxGRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EseUJEek1jO0FEOFJsQjtBRW5GSTtFQ3BLRixrREFBQTtFQUNBLDBDQUFBO0FIMFBGO0FFbkZJO0VDeEtGLCtDQUFBO0VBQ0EsdUNBQUE7QUg4UEY7QUVuRkk7RUM1S0YsaURBQUE7RUFDQSx5Q0FBQTtBSGtRRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wcm9maWxlLW1hbmFnZW1lbnQvY3JlYXRlLW5ldy1wcm9maWxlL25ldy1ncm91cC1wcm9maWxlL25ldy1ncm91cC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0ZXBwZXItZ3JpZCB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICAuc3RlcHBlci1ncmlkX3N0ZXAge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBvcGFjaXR5OiAuNjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAmLl9hY3RpdmUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xyXG5cclxuICAgICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24ge1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGVlcC1ibHVlLWNvbG9yO1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG5cclxuICAgICAgICAgIGRpdi5pbWFnZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRlZXAtYmx1ZS1jb2xvcjtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIge1xyXG4gICAgICAgIGhyIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkZGVlcC1ibHVlLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYuX2FjdGl2YXRlZCB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XHJcblxyXG4gICAgICAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiB7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG5cclxuICAgICAgICAgIGRpdi5pbWFnZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtYm9yZGVyIHtcclxuICAgICAgICBociB7XHJcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgZGl2IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB3aWR0aDogNDVweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGFiZWwge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtcHJpbWFyeTtcclxuXHJcbiAgICAgICAgJi5fbGFzdCB7XHJcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgaHIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0yNHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zdGVwcGVyLWdyaWQtY29udGVudCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgJi5fYWN0aXZlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxufVxyXG4iLCIuc3RlcHBlci1ncmlkIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3BhY2l0eTogMC42O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmUgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA2Mjg2MjtcbiAgYm9yZGVyOiAwO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYgZGl2LmltYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdjpob3ZlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBNkIxQzM7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGxhYmVsIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYyODYyO1xuICBjb2xvcjogd2hpdGU7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIgaHIge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzA2Mjg2Mjtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2YXRlZCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDM3QURBO1xuICBib3JkZXI6IDA7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiBkaXYuaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2OmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0E2QjFDMztcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gbGFiZWwge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzdBREE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciBociB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNDM3QURBO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBNkIxQzM7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDQ1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gbGFiZWwge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNBNkIxQzM7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNBNkIxQzM7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGxhYmVsLl9sYXN0IHtcbiAgd2lkdGg6IDE1MHB4O1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciBociB7XG4gIG1hcmdpbi10b3A6IC0yNHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjQTZCMUMzO1xufVxuXG4uc3RlcHBlci1ncmlkLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnN0ZXBwZXItZ3JpZC1jb250ZW50Ll9hY3RpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNoZWNrYm94X2xhYmVsIHtcbiAgaGVpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjODI4MjgyICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBVYnVudHUgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcbn1cblxuLmJvb2tpbmctaGVhZGVyIHtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1hcmdpbi1sZWZ0OiAyMnB4O1xufVxuXG4ub3V0ZXItYmFzaWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG59XG5cbi5vdXRlci1iYXNpY0Zvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQuYm9va2luZ3NfZGF0ZXBpY2tlciB7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIG1heC13aWR0aDogMTM4cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnVpLmJhc2ljLmZsb2F0aW5nLmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgY29sb3I6IHJnYmEoMTUyLCAxNTIsIDE1MiwgMC42KSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5pY29uIHtcbiAgb3BhY2l0eTogMTtcbiAgei1pbmRleDogMTAwO1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uLmNhbCB7XG4gIHdpZHRoOiAxOHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5zZWFyY2guZHJvcGRvd24ge1xuICB3aWR0aDogMjE4cHg7XG4gIGJvcmRlci1yaWdodDogMDtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnNlYXJjaC5kcm9wZG93biAuc2VhcmNoIHtcbiAgbWFyZ2luLWxlZnQ6IDQycHggIWltcG9ydGFudDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuc2VhcmNoLmRyb3Bkb3duIC5kZWZhdWx0LnRleHQge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA4cHggMCAwIDM4cHggIWltcG9ydGFudDtcbn1cblxuLmJvb2tpbmdzX2J0bi1wYW5lbCAuc2Vjb25kYXJ5IHtcbiAgd2lkdGg6IDEzNS42NHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0RjRGNEY7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi5ib29raW5nc19idG4tcGFuZWwgLnByaW1hcnkge1xuICB3aWR0aDogMTM1LjY0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4udHJhaWxpbmdfYnV0dG9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn1cblxuLm5ld0FnZW5jeV90b3BBbGlnbiB7XG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xufVxuXG50ZCB7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnRoIHtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDExcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbmZpcm0ge1xuICB3aWR0aDogNjNweDtcbn1cblxuLnJlY0NvbmZpcm0ge1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiA2MnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzJENDRGO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctdG9wOiAwLjV2aDtcbn1cblxuLnRhYi5zZWdtZW50IHtcbiAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5vdXRlci1iYXNpY19zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLm91dGVyLWJhc2ljRm9ybV9zZWNvbmRhcnkge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ucmlnaHRfbGlua3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogMXZoO1xuICBwYWRkaW5nLXJpZ2h0OiA4dmg7XG59XG5cbi5vdXRlci1iYXNpY190ZXJ0aWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMjBweDtcbn1cblxuLm91dGVyLWJhc2ljRm9ybV90ZXJ0aWFyeSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDUwcHg7XG59XG5cbmhyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlcjogMC41cHggc29saWQgI0UwRTBFMDtcbn1cblxuLmRyb3Bkb3duIC50ZXh0IHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uYm9va2luZ3NfYnRuLXBhbmVsLnRyYWlsaW5nX2J1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogNDRweDtcbn1cblxuLnVpLmZsdWlkLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDI4cHg7XG59XG5cbi5yaWdodF9saW5rcyB7XG4gIHBhZGRpbmctdG9wOiAxdmg7XG59XG5cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiBkaXYuaW1hZ2Uge1xuICB3aWR0aDogMjJweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNBNkIxQzM7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYgZGl2LmltYWdlLl9tZW1iZXIge1xuICAtd2Via2l0LW1hc2s6IHVybChcIi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9wZXJzb25hbC5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgbWFzazogdXJsKFwiLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3BlcnNvbmFsLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IGRpdi5pbWFnZS5fZ3JvdXAge1xuICAtd2Via2l0LW1hc2s6IHVybChcIi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9ncm91cC5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgbWFzazogdXJsKFwiLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL2dyb3VwLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IGRpdi5pbWFnZS5fcmVtYXJrcyB7XG4gIC13ZWJraXQtbWFzazogdXJsKFwiLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3JlbWFya3Muc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG4gIG1hc2s6IHVybChcIi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9yZW1hcmtzLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xufSIsIiRwcmltYXJ5LWNvbG9yOiAjNDM3QURBO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjQTZCMUMzO1xyXG4kZGVlcC1ibHVlLWNvbG9yOiAjMDYyODYyO1xyXG4kbGlnaHQtc21va2UtY29sb3I6ICNlNWU1ZTU7XHJcbiR2b2lsYS1ncmVlbjogIzg0QkM2QTtcclxuJHB1cmUtd2hpdGU6IHdoaXRlO1xyXG4kZmF1bHQtY29sb3I6ICNERTc5Nzk7XHJcbiR3YXJuaW5nLWNvbG9yOiAjRUNDMDRFO1xyXG4kc3VjY2Vzcy1jb2xvcjogIzczQjI1RDtcclxuXHJcbiRib2R5LWJhc2U6ICNmZmY7XHJcbiRjb3Jwb3JhdGUtYmx1ZS1iYXNlOiAjNDU2N0FDO1xyXG5cclxuJGNvbnRhaW5lci1iYXNlOiB3aGl0ZTtcclxuJGNvbnRhaW5lci1iYXNlLXNoYWRvdzogMCAwcHggM3B4IHJnYmEoNjAsIDY0LCA2NywgMC4zKSwgMCA0cHggOHB4IDJweCByZ2JhKDYwLCA2NCwgNjcsIDAuMTUpO1xyXG4kY29udGFpbmVyLWRyb3Bkb3ducy1zaGFkb3c6IDBweCA4cHggMTRweCByZ2JhKDAsIDU4LCAxNjQsIC4yKTtcclxuXHJcbiRwcmltYXJ5LXNoYWRvdzogMHB4IDQuODNweCAxNnB4IHJnYmEoNjcsIDEyMiwgMjE4LCAuNSk7XHJcbiRsaWdodC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgNTgsIDE2NCwgLjI1KTtcclxuJGZhZGVkLXNoYWRvdzogMHB4IDRweCA2cHggcmdiYSgxNjcsIDE3MywgMTgyLCAuMik7XHJcbiRsaWdodC1leHRlbmRlZC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMCwgNTgsIDE2NCwgLjI1KTtcclxuXHJcbiRib3JkZXItcmFkaXVzLXByaW1hcnk6IDhweDtcclxuJGJvcmRlci1yYWRpdXMtc2Vjb25kYXJ5OiA2cHg7XHJcblxyXG4kZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4kZm9udC13ZWlnaHQtbm9ybWFsOiA0MDA7XHJcblxyXG4kdG9hc3QtaW5mby1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiR0b2FzdC1pbmZvLXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDExMSwgMCwgMCwgLjIpO1xyXG5cclxuJHRvYXN0LWVycm9yLWNvbG9yOiAkZmF1bHQtY29sb3I7XHJcbiR0b2FzdC1lcnJvci1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxMTEsIDAsIDAsIC4yKTtcclxuXHJcbiR0b2FzdC13YXJuaW5nLWNvbG9yOiAkd2FybmluZy1jb2xvcjtcclxuJHRvYXN0LXdhcm5pbmctc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTc3LCAxMjcsIDAsIC4yKTtcclxuXHJcbiR0b2FzdC1zdWNjZXNzLWNvbG9yOiAkc3VjY2Vzcy1jb2xvcjtcclxuJHRvYXN0LXN1Y2Nlc3Mtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMzQsIDEzMCwgMCwgLjIpO1xyXG4iLCJAaW1wb3J0IFwiLi8uLi8uLi8uLi8uLi8uLi9jb21vbi1zdHlsZXMvY29tbW9uLnNjc3NcIjtcclxuXHJcbi5jaGVja2JveF9sYWJlbCB7XHJcbiAgaGVpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM4MjgyODIgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogVWJ1bnR1ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9va2luZy1oZWFkZXIge1xyXG4gIGNvbG9yOiAjNEY0RjRGO1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIycHg7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpYyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWNGb3JtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IHtcclxuXHJcbiAgJi5ib29raW5nc19kYXRlcGlja2VyIHtcclxuICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEzOHB4XHJcbiAgfVxyXG5cclxuICAudWkuYmFzaWMuZmxvYXRpbmcuYnV0dG9uIHtcclxuICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiByZ2JhKDE1MiwgMTUyLCAxNTIsIDAuNikgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4gIH1cclxuXHJcbiAgLmljb24ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuXHJcbiAgICAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgICB3aWR0aDogMjRweDtcclxuICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG5cclxuICAgICAgJi5jYWwge1xyXG4gICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zZWFyY2guZHJvcGRvd24ge1xyXG4gICAgd2lkdGg6IDIxOHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG5cclxuICAgIC5zZWFyY2gge1xyXG4gICAgICBtYXJnaW4tbGVmdDogNDJweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZWZhdWx0LnRleHQge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICBwYWRkaW5nOiA4cHggMCAwIDM4cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5ib29raW5nc19idG4tcGFuZWwge1xyXG4gIC5zZWNvbmRhcnkge1xyXG4gICAgd2lkdGg6IDEzNS42NHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRGNEY0RjtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB9XHJcblxyXG4gIC5wcmltYXJ5IHtcclxuICAgIHdpZHRoOiAxMzUuNjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLnRyYWlsaW5nX2J1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4ubmV3QWdlbmN5X3RvcEFsaWduIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuXHJcbn1cclxuXHJcbnRkIHtcclxuICBjb2xvcjogIzRGNEY0RjtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBsaW5lLWhlaWdodDogMTFweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRoIHtcclxuICBjb2xvcjogIzRGNEY0RjtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbmZpcm0ge1xyXG4gIHdpZHRoOiA2M3B4O1xyXG59XHJcblxyXG4ucmVjQ29uZmlybSB7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIHdpZHRoOiA2MnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM3MkQ0NEY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmctdG9wOiAuNXZoO1xyXG59XHJcblxyXG4udGFiLnNlZ21lbnQge1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG5cclxuLmZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG5cclxuLm91dGVyLWJhc2ljX3NlY29uZGFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljRm9ybV9zZWNvbmRhcnkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiAxNXB4O1xyXG59XHJcblxyXG4ucmlnaHRfbGlua3Mge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBwYWRkaW5nLXRvcDogMXZoO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDh2aDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljX3RlcnRpYXJ5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpY0Zvcm1fdGVydGlhcnkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBwYWRkaW5nOiA1MHB4O1xyXG59XHJcblxyXG5ociB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBoZWlnaHQ6IDFweDtcclxuICBib3JkZXI6IDAuNXB4IHNvbGlkICNFMEUwRTA7XHJcbn1cclxuXHJcbi5kcm9wZG93biAudGV4dCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYm9va2luZ3NfYnRuLXBhbmVsLnRyYWlsaW5nX2J1dHRvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0NHB4O1xyXG59XHJcblxyXG4udWkuZmx1aWQuY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAyOHB4O1xyXG59XHJcblxyXG4ucmlnaHRfbGlua3Mge1xyXG4gIHBhZGRpbmctdG9wOiAxdmg7XHJcbn1cclxuXHJcbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiB7XHJcbiAgZGl2LmltYWdlIHtcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG5cclxuICAgICYuX21lbWJlciB7XHJcbiAgICAgIEBpbmNsdWRlIG1hc2stc3ZnLWRpdignLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3BlcnNvbmFsLnN2ZycpO1xyXG4gICAgfVxyXG5cclxuICAgICYuX2dyb3VwIHtcclxuICAgICAgQGluY2x1ZGUgbWFzay1zdmctZGl2KCcuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvZ3JvdXAuc3ZnJyk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5fcmVtYXJrcyB7XHJcbiAgICAgIEBpbmNsdWRlIG1hc2stc3ZnLWRpdignLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3JlbWFya3Muc3ZnJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIkBtaXhpbiBwbGFjZWhvbGRlciB7XHJcbiAgJjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcblxyXG4gICY6LW1vei1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcblxyXG4gICY6Oi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICAmOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICBAY29udGVudDtcclxuICB9XHJcbn1cclxuXHJcbkBtaXhpbiBjb2xvci1vcGFjaXR5KCRjb2xvciwgJG9wYWNpdHk6IDAuMykge1xyXG4gIGJhY2tncm91bmQ6ICRjb2xvcjtcclxuICAvKiBUaGUgRmFsbGJhY2sgKi9cclxuICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvciwgJG9wYWNpdHkpO1xyXG59XHJcblxyXG5AbWl4aW4gaGlkZU51bWJlckZpZWxkQXJyb3dzIHtcclxuXHJcbiAgLyogQ2hyb21lLCBTYWZhcmksIEVkZ2UsIE9wZXJhICovXHJcbiAgaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXHJcbiAgaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAvKiBGaXJlZm94ICovXHJcbiAgaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gbWFzay1zdmctZGl2KCRpbWcpIHtcclxuICAtd2Via2l0LW1hc2s6IHVybCgkaW1nKSBuby1yZXBlYXQgY2VudGVyO1xyXG4gIG1hc2s6IHVybCgkaW1nKSBuby1yZXBlYXQgY2VudGVyO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: NewGroupProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewGroupProfileComponent", function() { return NewGroupProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_profile_management_profile_management_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../shared/services/profile-management/profile-management.service */ "./src/app/shared/services/profile-management/profile-management.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





let NewGroupProfileComponent = class NewGroupProfileComponent {
    constructor(route, ProfileManagementService, fb) {
        this.route = route;
        this.ProfileManagementService = ProfileManagementService;
        this.fb = fb;
        this.newGroupProfileObj = {};
        this.newGroupProfileForm = this.fb.group({
            group_profile_id: [''],
            organisation_id: [''],
            group_name: [''],
            group_description: [''],
            group_index: [''],
            languages: [''],
            number: this.fb.array([this.fb.group(this.initNumber())]),
            email: this.fb.array([this.fb.group(this.initEmail())]),
            address: this.fb.array([this.fb.group(this.initAddress())]),
            responsible_office: [''],
            department_contact_name: [''],
            agent_contact_name: [''],
            member1: [''],
            group_members: this.fb.array([this.fb.group(this.initGroup_members())]),
            remarks: this.fb.array([this.fb.group(this.initRemarks())]),
            profile_notes: this.fb.array([this.fb.group(this.initProfile_notes())]),
            priority_lines1: this.fb.array([this.fb.group(this.initPriority_lines1())]),
            priority_lines2: this.fb.array([this.fb.group(this.initPriority_lines2())]),
            follow_up: this.fb.array([this.fb.group(this.initFollow_up())]),
        });
        this.createNewGroupProfile = () => {
            this.newGroupProfileObj.group_profile_id = this.newGroupProfileId;
            this.newGroupProfileObj.organisation_id = "";
            this.newGroupProfileObj.created = "";
            this.newGroupProfileObj.group_name = this.newGroupProfileForm.get('group_name').value;
            this.newGroupProfileObj.group_description = this.newGroupProfileForm.get('group_description').value;
            this.newGroupProfileObj.group_index = this.newGroupProfileForm.get('group_index').value;
            this.newGroupProfileObj.languages = this.newGroupProfileForm.get('languages').value;
            this.newGroupProfileObj.number = JSON.stringify(this.newGroupProfileForm.get('number').value);
            this.newGroupProfileObj.email = JSON.stringify(this.newGroupProfileForm.get('email').value);
            this.newGroupProfileObj.address = JSON.stringify(this.newGroupProfileForm.get('address').value);
            this.newGroupProfileObj.responsible_office = this.newGroupProfileForm.get('responsible_office').value;
            this.newGroupProfileObj.department_contact_name = this.newGroupProfileForm.get('department_contact_name').value;
            this.newGroupProfileObj.agent_contact_name = this.newGroupProfileForm.get('agent_contact_name').value;
            this.newGroupProfileObj.member1 = this.newGroupProfileForm.get('member1').value;
            this.newGroupProfileObj.group_members = JSON.stringify(this.newGroupProfileForm.get('group_members').value);
            this.newGroupProfileObj.remarks = JSON.stringify(this.newGroupProfileForm.get('remarks').value);
            this.newGroupProfileObj.profile_notes = JSON.stringify(this.newGroupProfileForm.get('profile_notes').value);
            this.newGroupProfileObj.priority_lines1 = JSON.stringify(this.newGroupProfileForm.get('priority_lines1').value);
            this.newGroupProfileObj.priority_lines2 = JSON.stringify(this.newGroupProfileForm.get('priority_lines2').value);
            this.newGroupProfileObj.follow_up = JSON.stringify(this.newGroupProfileForm.get('follow_up').value);
            console.log("You shall not pass", this.newGroupProfileObj);
            this.ProfileManagementService.NewGroupProfile(this.newGroupProfileObj).subscribe((results) => {
                console.log(results);
            });
        };
        this.updateNewGroupProfile = () => {
            this.newGroupProfileObj.group_profile_id = this.groupProfileId;
            this.newGroupProfileObj.organisation_id = "";
            this.newGroupProfileObj.created = "";
            this.newGroupProfileObj.group_name = this.newGroupProfileForm.get('group_name').value;
            this.newGroupProfileObj.group_description = this.newGroupProfileForm.get('group_description').value;
            this.newGroupProfileObj.group_index = this.newGroupProfileForm.get('group_index').value;
            this.newGroupProfileObj.languages = this.newGroupProfileForm.get('languages').value;
            this.newGroupProfileObj.number = JSON.stringify(this.newGroupProfileForm.get('number').value);
            this.newGroupProfileObj.email = JSON.stringify(this.newGroupProfileForm.get('email').value);
            this.newGroupProfileObj.address = JSON.stringify(this.newGroupProfileForm.get('address').value);
            this.newGroupProfileObj.responsible_office = this.newGroupProfileForm.get('responsible_office').value;
            this.newGroupProfileObj.department_contact_name = this.newGroupProfileForm.get('department_contact_name').value;
            this.newGroupProfileObj.agent_contact_name = this.newGroupProfileForm.get('agent_contact_name').value;
            this.newGroupProfileObj.member1 = this.newGroupProfileForm.get('member1').value;
            this.newGroupProfileObj.group_members = JSON.stringify(this.newGroupProfileForm.get('group_members').value);
            this.newGroupProfileObj.remarks = JSON.stringify(this.newGroupProfileForm.get('remarks').value);
            this.newGroupProfileObj.profile_notes = JSON.stringify(this.newGroupProfileForm.get('profile_notes').value);
            this.newGroupProfileObj.priority_lines1 = JSON.stringify(this.newGroupProfileForm.get('priority_lines1').value);
            this.newGroupProfileObj.priority_lines2 = JSON.stringify(this.newGroupProfileForm.get('priority_lines2').value);
            this.newGroupProfileObj.follow_up = JSON.stringify(this.newGroupProfileForm.get('follow_up').value);
            console.log("You shall not pass", this.newGroupProfileObj);
            this.ProfileManagementService.UpdateGroupProfile(this.groupProfileId, this.newGroupProfileObj).subscribe((results) => {
                console.log(results);
            });
        };
        let uniqueProfileID = Math.random().toString(36).substring(7);
        console.log(uniqueProfileID);
        this.newGroupProfileId = uniqueProfileID + "Amedius";
        this.route.queryParams.subscribe(params => {
            console.log(params);
            this.groupProfileId = params.group_profile_id;
            this.newGroupProfileForm.patchValue({
                group_profile_id: params.group_profile_id,
                organisation_id: params.organisation_id,
                group_name: params.group_name,
                group_description: params.group_description,
                group_index: params.group_index,
                languages: params.languages,
                responsible_office: params.responsible_office,
                department_contact_name: params.department_contact_name,
                agent_contact_name: params.agent_contact_name,
                member1: params.member1,
            });
            let number = this.parsingArrayParams(params.number, this.number);
            let email = this.parsingArrayParams(params.email, this.email);
            let address = this.parsingArrayParams(params.address, this.address);
            let groupMembers = this.parsingArrayParams(params.group_members, this.group_members);
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
    initNumber() {
        return {
            preferedHome: [''],
            home: [''],
            number: [''],
            number_comment: ['']
        };
    }
    initEmail() {
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
    initGroup_members() {
        return {
            group_name: [''],
            group_description: [''],
            group_index: [''],
            languages: ['']
        };
    }
    initRemarks() {
        return {
            remark_type: [''],
            remark_category: [''],
            remark: ['']
        };
    }
    initProfile_notes() {
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
        return this.newGroupProfileForm.get('number');
    }
    get email() {
        return this.newGroupProfileForm.get('email');
    }
    get address() {
        return this.newGroupProfileForm.get('address');
    }
    get group_members() {
        return this.newGroupProfileForm.get('group_members');
    }
    get remarks() {
        return this.newGroupProfileForm.get('remarks');
    }
    get profile_notes() {
        return this.newGroupProfileForm.get('profile_notes');
    }
    get priority_lines1() {
        return this.newGroupProfileForm.get('priority_lines1');
    }
    get priority_lines2() {
        return this.newGroupProfileForm.get('priority_lines2');
    }
    get follow_up() {
        return this.newGroupProfileForm.get('follow_up');
    }
    addMoreNumber() {
        this.number.push(this.fb.group(this.initNumber()));
    }
    addMoreEmail() {
        this.email.push(this.fb.group(this.initEmail()));
    }
    addMoreAddress() {
        this.address.push(this.fb.group(this.initAddress()));
    }
    addMoreGroup_members() {
        this.group_members.push(this.fb.group(this.initGroup_members()));
    }
    addMoreRemarks() {
        this.remarks.push(this.fb.group(this.initRemarks()));
    }
    addMoreProfile_notes() {
        this.profile_notes.push(this.fb.group(this.initProfile_notes()));
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
    setDropDownType(value, type) {
        switch (type) {
            case 'languages':
                this.newGroupProfileForm.get('languages').setValue(value);
                break;
            case 'home':
                this.newGroupProfileForm.get('home').setValue(value);
                break;
            case 'Official':
                this.newGroupProfileForm.get('Official').setValue(value);
                break;
            case 'addressList':
                this.newGroupProfileForm.get('addressList').setValue(value);
                break;
            case 'countryList':
                this.newGroupProfileForm.get('countryList').setValue(value);
                break;
            case 'remark_type':
                this.newGroupProfileForm.get('remark_type').setValue(value);
                break;
            case 'remark_category':
                this.newGroupProfileForm.get('remark_category').setValue(value);
                break;
            case 'profile_notes_category':
                this.newGroupProfileForm.get('profile_notes_category').setValue(value);
                break;
        }
    }
};
NewGroupProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _shared_services_profile_management_profile_management_service__WEBPACK_IMPORTED_MODULE_1__["ProfileManagementService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tab', { static: false })
], NewGroupProfileComponent.prototype, "tab", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tabContent', { static: false })
], NewGroupProfileComponent.prototype, "tabContent", void 0);
NewGroupProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-new-group-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-group-profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-group-profile.component.scss */ "./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile.component.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./../create-new-profile.component.scss */ "./src/app/layout/profile-management/create-new-profile/create-new-profile.component.scss")).default]
    })
], NewGroupProfileComponent);



/***/ }),

/***/ "./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile.module.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile.module.ts ***!
  \************************************************************************************************************/
/*! exports provided: NewGroupProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewGroupProfileModule", function() { return NewGroupProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _new_group_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-group-profile.component */ "./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _new_group_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-group-profile-routing.module */ "./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile-routing.module.ts");






let NewGroupProfileModule = class NewGroupProfileModule {
};
NewGroupProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_new_group_profile_component__WEBPACK_IMPORTED_MODULE_1__["NewGroupProfileComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _new_group_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewGroupProfileRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]
    })
], NewGroupProfileModule);



/***/ })

}]);
//# sourceMappingURL=new-group-profile-new-group-profile-module-es2016.js.map