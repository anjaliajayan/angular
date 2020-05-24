function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-group-profile-new-group-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile.component.html":
  /*!*******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile.component.html ***!
    \*******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutProfileManagementCreateNewProfileNewGroupProfileNewGroupProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3><span class=\"booking-header\">New Group Profile</span></h3>\r\n<div class=\"ui fluid container\">\r\n  <div class=\"ui grid container stepper-grid\" #tab>\r\n    <div class=\"five wide column stepper-grid_step _active\" id=\"group\" (click)=\"setActiveTab('group')\">\r\n      <div class=\"stepper-grid_step__step-icon\">\r\n        <div>\r\n          <div class=\"image _group\"></div>\r\n        </div>\r\n        <label>Group Data</label>\r\n      </div>\r\n      <div class=\"stepper-grid_step__step-border\">\r\n        <hr />\r\n      </div>\r\n    </div>\r\n    <div class=\"five wide column stepper-grid_step\" id=\"member\" (click)=\"setActiveTab('member')\">\r\n      <div class=\"stepper-grid_step__step-icon\">\r\n        <div>\r\n          <div class=\"image _member\"></div>\r\n        </div>\r\n        <label>Member Data</label>\r\n      </div>\r\n      <div class=\"stepper-grid_step__step-border\">\r\n        <hr />\r\n      </div>\r\n    </div>\r\n    <div class=\"three wide column stepper-grid_step\" id=\"remarks\" (click)=\"setActiveTab('remarks')\">\r\n      <div class=\"stepper-grid_step__step-icon\">\r\n        <div>\r\n          <div class=\"image _remarks\"></div>\r\n        </div>\r\n        <label>Remarks</label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <form [formGroup]=\"newGroupProfileForm\" class=\"ui form\" #tabContent>\r\n    <div id=\"group-content\" class=\"stepper-grid-content animated fadeIn _active\">\r\n      <div class=\"outer-basic\">\r\n        <div class=\"outer-basicForm\">\r\n          <div class=\"ui form-inner grid\">\r\n            <div class=\"sixteen wide column\">\r\n              <h4>Group Data</h4>\r\n            </div>\r\n            <div class=\"sixteen wide column\">\r\n              <label>General Info</label>\r\n            </div>\r\n            <div class=\"ui sixteen wide column grid\">\r\n              <div class=\"two wide column\">\r\n                <input type=\"text\" name=\"groupName\" formControlName=\"group_name\" value=\"\" placeholder=\"Group Name\">\r\n              </div>\r\n              <div class=\"four wide column\">\r\n                <input type=\"text\" name=\"groupDescription\" formControlName=\"group_description\" value=\"\"\r\n                  placeholder=\"Group Description\">\r\n              </div>\r\n              <div class=\"four wide column\">\r\n                <input type=\"text\" name=\"groupIndex\" formControlName=\"group_index\" value=\"\" placeholder=\"Group Index\">\r\n              </div>\r\n              <div class=\"four wide column\">\r\n                <div class=\"ui fluid search selection dropdown\">\r\n                  <input type=\"hidden\" name=\"languages\" formControlName=\"languages\" value=\"\">\r\n                  <i class=\"dropdown icon\"></i>\r\n                  <div class=\"default text\">Languages</div>\r\n                  <div class=\"menu\">\r\n                    <div class=\"item\" (click)=\"setDropDownType('Arabic', 'languages')\">Arabic</div>\r\n                    <div class=\"item\" (click)=\"setDropDownType('English', 'languages')\">English</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui sixteen wide column grid\">\r\n                <div formArrayName=\"number\"\r\n                  *ngFor=\"let numberD of newGroupProfileForm.get('number')['controls']; let nIndex = index\">\r\n                  <div [formGroupName]=\"nIndex\" class=\"ui sixteen wide column grid\">\r\n                    <div class=\"three wide column newAgency_topAlign\">\r\n                      <div class=\"ui checkbox\">\r\n                        <input type=\"checkbox\" name=\"prefered\" formControlName=\"preferedHome\" value=\"\">\r\n                        <label>Preferred</label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"two wide column\">\r\n                      <div class=\"ui fluid search selection dropdown\">\r\n                        <input type=\"hidden\" name=\"home\" formControlName=\"home\" value=\"\">\r\n                        <i class=\"dropdown icon\"></i>\r\n                        <div class=\"default text\">Home</div>\r\n                        <div class=\"menu\">\r\n                          <div class=\"item\" (click)=\"setDropDownType('Home 1', 'home')\">Home 1</div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('Home 2', 'home')\">Home 2</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"four wide column\">\r\n                      <input type=\"text\" name=\"number\" formControlName=\"number\" value=\"\" placeholder=\"Number\">\r\n                    </div>\r\n                    <div class=\"five wide column\">\r\n                      <input type=\"text\" name=\"number_comment\" formControlName=\"number_comment\" value=\"\"\r\n                        placeholder=\"Comment\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"sixteen wide column\">\r\n                  <div class=\"ui primary button\" (click)=\"addMoreNumber()\">Add Number +</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui sixteen wide column grid\">\r\n                <div formArrayName=\"email\"\r\n                  *ngFor=\"let emailD of newGroupProfileForm.get('email')['controls'];let eIndex = index\">\r\n                  <div [formGroupName]=\"eIndex\" class=\"ui sixteen wide column grid\">\r\n                    <div class=\"three wide column newAgency_topAlign\">\r\n                      <div class=\"ui checkbox \">\r\n                        <input type=\"checkbox\" name=\"prefered\" formControlName=\"preferedOfficial\" value=\"\">\r\n                        <label>Prefered</label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"two wide column\">\r\n                      <div class=\"ui fluid search selection dropdown\">\r\n                        <input type=\"hidden\" name=\"office\" formControlName=\"Official\" value=\"\">\r\n                        <i class=\"dropdown icon\"></i>\r\n                        <div class=\"default text\">Official</div>\r\n                        <div class=\"menu\">\r\n                          <div class=\"item\" (click)=\"setDropDownType('Official 1', 'Official')\">\r\n                            Official 1</div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('Official 1', 'Official')\">\r\n                            Official 2</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"four wide column\">\r\n                      <input type=\"text\" name=\"emailAddress\" formControlName=\"emailAddress\" value=\"\"\r\n                        placeholder=\"Email Address\">\r\n                    </div>\r\n                    <div class=\"five wide column\">\r\n                      <input type=\"text\" name=\"comment\" formControlName=\"emailAddress_comment\" value=\"\"\r\n                        placeholder=\"Comment\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"sixteen wide column\">\r\n                  <div class=\"ui primary button\" (click)=\"addMoreEmail()\">Add Email +</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui sixteen wide column grid\">\r\n                <div formArrayName=\"address\" class=\"sixteen wide column\"\r\n                  *ngFor=\"let addressD of newGroupProfileForm.get('address')['controls']; let aIndex = index\">\r\n                  <div [formGroupName]=\"aIndex\" class=\"ui sixteen wide column grid\">\r\n                    <div class=\"three wide column newAgency_topAlign\">\r\n                      <div class=\"ui checkbox \">\r\n                        <input type=\"checkbox\" name=\"prefered\" formControlName=\"preferedAddress\" value=\"\">\r\n                        <label>Preferred</label>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"two wide column\">\r\n                      <div class=\"ui fluid search selection dropdown\">\r\n                        <input type=\"hidden\" name=\"office\" formControlName=\"addressList\" value=\"\">\r\n                        <i class=\"dropdown icon\"></i>\r\n                        <div class=\"default text\">Office</div>\r\n                        <div class=\"menu\">\r\n                          <div class=\"item\" (click)=\"setDropDownType('Office 1', 'addressList')\">\r\n                            Office 1</div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('Office 2', 'addressList')\">\r\n                            Office 2</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"five wide column\">\r\n                      <input type=\"text\" name=\"address\" formControlName=\"address\" value=\"\" placeholder=\"Address\">\r\n                    </div>\r\n                    <div class=\"three wide column\">\r\n                      <input type=\"text\" name=\"street\" formControlName=\"street\" value=\"\" placeholder=\"Street\">\r\n                    </div>\r\n                    <div class=\"three wide column\">\r\n                      <input type=\"text\" name=\"city\" formControlName=\"city\" value=\"\" placeholder=\"City\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui sixteen wide column grid\">\r\n                    <div class=\"three wide column\">\r\n                      <div class=\"ui checkbox \">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"three wide column\">\r\n                    </div>\r\n                    <div class=\"two wide column\">\r\n                      <input type=\"text\" name=\"state\" formControlName=\"state\" value=\"\" placeholder=\"Region/State\">\r\n                    </div>\r\n                    <div class=\"three wide column\">\r\n                      <input type=\"text\" name=\"postalCode\" formControlName=\"postalCode\" value=\"\"\r\n                        placeholder=\"Postal Code\">\r\n                    </div>\r\n                    <div class=\"three wide column\">\r\n                      <div class=\"ui fluid search selection dropdown\">\r\n                        <input type=\"hidden\" name=\"country\" formControlName=\"countryList\" value=\"\">\r\n                        <i class=\"dropdown icon\"></i>\r\n                        <div class=\"default text\">Country</div>\r\n                        <div class=\"menu\">\r\n                          <div class=\"item\" (click)=\"setDropDownType('USA', 'countryList')\">\r\n                            USA</div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('UAE', 'countryList')\">\r\n                            UAE</div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('Australia', 'countryList')\">\r\n                            Australia</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"three wide column\">\r\n                      <input type=\"text\" name=\"company\" formControlName=\"company\" value=\"\" placeholder=\"Company\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"ui sixteen wide column grid\">\r\n                    <div class=\"five wide column\">\r\n                      <input type=\"text\" name=\"comment\" formControlName=\"address_comment\" value=\"\"\r\n                        placeholder=\"Comment\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"sixteen wide column\">\r\n                  <div class=\"ui primary button\" (click)=\"addMoreAddress()\">Add Address +</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <button class=\"ui primary  button\" (click)=\"updateNewGroupProfile();\">\r\n            Update Profile\r\n          </button> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Agency Info</h4>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"two wide field\">\r\n                <input type=\"text\" name=\"responsibleOffice\" formControlName=\"responsible_office\" value=\"\"\r\n                  placeholder=\"Responsible Office\">\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <input type=\"text\" name=\"deptContactName\" formControlName=\"department_contact_name\" value=\"\"\r\n                  placeholder=\"Department Contact Name\">\r\n              </div>\r\n              <div class=\"five wide field\">\r\n                <input type=\"text\" name=\"agentContactName\" formControlName=\"agent_contact_name\" value=\"\"\r\n                  placeholder=\"Agent Contact Name\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"member-content\" class=\"stepper-grid-content animated fadeIn\">\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"ui form form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Members Data</h4>\r\n            </div><br>\r\n            <div class=\"fields\">\r\n              <label>Group Members</label>\r\n            </div>\r\n            <div class=\"ui sixteen wide column grid\">\r\n              <div class=\"two wide column newAgency_topAlign\">\r\n                <label>Member 1</label>\r\n              </div>\r\n              <div class=\"sixteen wide column newAgency_topAlign\">\r\n                <div class=\"ui checkbox\">\r\n                  <input type=\"checkbox\" formControlName=\"member1\" value=\"\" name=\"explosionIndicator\">\r\n                  <label>Main Contact</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <br />\r\n            <div formArrayName=\"group_members\" class=\"ui sixteen wide column grid\">\r\n              <div\r\n                *ngFor=\"let group_membersD of newGroupProfileForm.get('group_members')['controls'];let gIndex = index\">\r\n                <div [formGroupName]=\"gIndex\" class=\"ui sixteen wide column grid\">\r\n                  <div class=\"three wide column\">\r\n                    <input type=\"text\" name=\"recordLocator\" placeholder=\"Record Locator\">\r\n                  </div>\r\n                  <div class=\"three wide column\">\r\n                    <input type=\"text\" name=\"firstName\" placeholder=\"First Name\">\r\n                  </div>\r\n                  <div class=\"three wide column\">\r\n                    <input type=\"text\" name=\"lastName\" placeholder=\"Last Name\">\r\n                  </div>\r\n                  <div class=\"three wide column\">\r\n                    <input type=\"text\" name=\"dob\" placeholder=\"DOB(DD MM YYYY)\">\r\n                  </div>\r\n                  <div class=\"ui sixteen wide column grid\">\r\n                    <div class=\"five wide column\">\r\n                      <input type=\"text\" name=\"telephone\" placeholder=\"Telephone\">\r\n                    </div>\r\n                    <div class=\"five wide column\">\r\n                      <input type=\"text\" name=\"email\" placeholder=\"Email\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"sixteen wide column\">\r\n                <div class=\"ui primary button\" (click)=\"addMoreGroup_members()\">\r\n                  Add Member +\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div id=\"remarks-content\" class=\"stepper-grid-content animated fadeIn\">\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Remarks</h4>\r\n            </div>\r\n            <div formArrayName=\"remarks\">\r\n              <div *ngFor=\"let remarksD of newGroupProfileForm.get('remarks')['controls']; let remarksIndex = index\">\r\n                <div [formGroupName]=\"remarksIndex\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"three wide field\">\r\n                      <div class=\"ui fluid search selection dropdown\">\r\n                        <input type=\"hidden\" formControlName=\"remark_type\" value=\"\" name=\"remarkType\">\r\n                        <i class=\"dropdown icon\"></i>\r\n                        <div class=\"default text\">Remark Type</div>\r\n                        <div class=\"menu\">\r\n                          <div class=\"item\" (click)=\"setDropDownType('Type 1', 'remark_type')\">\r\n                            Type 1</div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('Type 2', 'remark_type')\">\r\n                            Type 2</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"three wide field \">\r\n                      <div class=\"ui fluid search selection dropdown\">\r\n                        <input type=\"hidden\" formControlName=\"remark_category\" value=\"\" name=\"category\">\r\n                        <i class=\"dropdown icon\"></i>\r\n                        <div class=\"default text\">Category</div>\r\n                        <div class=\"menu\">\r\n                          <div class=\"item\" (click)=\"setDropDownType('Category 1', 'remark_category')\">Category\r\n                            1</div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('Category 2', 'remark_category')\">Category\r\n                            2</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"six wide field \">\r\n                      <textarea type=\"text\" name=\"remark\" formControlName=\"remark\" value=\"\" placeholder=\"Remark\"\r\n                        rows=\"4\" cols=\"50\"></textarea>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui sixteen wide column grid\">\r\n              <div class=\"ui primary button btn-sticky\" (click)=\"addMoreRemarks()\">\r\n                Add Remarks +\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Profile Notes</h4>\r\n            </div>\r\n            <div formArrayName=\"profile_notes\">\r\n              <div\r\n                *ngFor=\"let profile_notesD of newGroupProfileForm.get('profile_notes')['controls']; let notesIndex = index\">\r\n                <div [formGroupName]=\"notesIndex\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"three wide field\">\r\n                      <div class=\"ui fluid search selection dropdown\">\r\n                        <input type=\"hidden\" formControlName=\"profile_notes_category\" value=\"\" name=\"category\">\r\n                        <i class=\"dropdown icon\"></i>\r\n                        <div class=\"default text\">Category</div>\r\n                        <div class=\"menu\">\r\n                          <div class=\"item\" (click)=\"setDropDownType('Category 1', 'profile_notes_category')\">\r\n                            Category 1</div>\r\n                          <div class=\"item\" (click)=\"setDropDownType('Category 1', 'profile_notes_category')\">\r\n                            Category 2</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"five wide field \">\r\n                      <input type=\"text\" name=\"information\" formControlName=\"profile_notes_information\" value=\"\"\r\n                        placeholder=\"Information\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui primary button btn-sticky\" (click)=\"addMoreProfile_notes()\">\r\n                Add Profile Note +\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Priority Lines 1</h4>\r\n            </div>\r\n            <!-- <div class=\"fields\"> -->\r\n            <div formArrayName=\"priority_lines1\">\r\n              <div\r\n                *ngFor=\"let priority_lines1D of newGroupProfileForm.get('priority_lines1')['controls']; let priorityIndex1 = index\">\r\n                <div [formGroupName]=\"priorityIndex1\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"five wide field \">\r\n                      <input type=\"text\" name=\"information\" formControlName=\"priorityInformation1\" value=\"\"\r\n                        placeholder=\"\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui primary button btn-sticky\" (click)=\"addMorePriority_lines1()\">\r\n                Add Priority Line +\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Priority Lines 2</h4>\r\n            </div>\r\n            <!-- <div class=\"fields\"> -->\r\n            <div formArrayName=\"priority_lines2\">\r\n              <div\r\n                *ngFor=\"let priority_lines2D of newGroupProfileForm.get('priority_lines2')['controls']; let priorityIndex2 = index\">\r\n                <div [formGroupName]=\"priorityIndex2\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"five wide field \">\r\n                      <input type=\"text\" name=\"information\" formControlName=\"priorityInformation2\" value=\"\"\r\n                        placeholder=\"\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"ui primary button btn-sticky m-auto\" (click)=\"addMorePriority_lines2()\">\r\n              Add Priority Line +\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"outer-basic outer-basic_secondary mtb\">\r\n        <div class=\"outer-basicForm_secondary\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <h4>Follow Up</h4>\r\n            </div>\r\n            <!-- <div class=\"fields\"> -->\r\n            <div formArrayName=\"follow_up\">\r\n              <div\r\n                *ngFor=\"let follow_upD of newGroupProfileForm.get('follow_up')['controls']; let follow_upIndex = index\">\r\n                <div [formGroupName]=\"follow_upIndex\">\r\n                  <div class=\"fields\">\r\n                    <div class=\"three wide field \">\r\n                      <input type=\"text\" name=\"date\" formControlName=\"followUpDate\" value=\"\"\r\n                        placeholder=\"Date (DDMMYYYY)\">\r\n                    </div>\r\n                    <div class=\"three wide field \">\r\n                      <input type=\"text\" name=\"action\" formControlName=\"followUpAction\" value=\"\" placeholder=\"Action\">\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"ui primary button btn-sticky\" (click)=\"addMoreFollow_up()\">\r\n                Add Follow Up +\r\n              </div>\r\n            </div>\r\n            <!-- </div> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"ui sixteen wide column grid\">\r\n        <button type=\"button\" class=\"ui positive button m-auto\" (click)=\"createNewGroupProfile()\">\r\n          Save\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile-routing.module.ts":
  /*!********************************************************************************************************************!*\
    !*** ./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile-routing.module.ts ***!
    \********************************************************************************************************************/

  /*! exports provided: NewGroupProfileRoutingModule */

  /***/
  function srcAppLayoutProfileManagementCreateNewProfileNewGroupProfileNewGroupProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewGroupProfileRoutingModule", function () {
      return NewGroupProfileRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _new_group_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./new-group-profile.component */
    "./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile.component.ts");
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
      component: _new_group_profile_component__WEBPACK_IMPORTED_MODULE_1__["NewGroupProfileComponent"]
    }];

    var NewGroupProfileRoutingModule = function NewGroupProfileRoutingModule() {
      _classCallCheck(this, NewGroupProfileRoutingModule);
    };

    NewGroupProfileRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], NewGroupProfileRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile.component.scss":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile.component.scss ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutProfileManagementCreateNewProfileNewGroupProfileNewGroupProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".stepper-grid {\n  margin-top: 30px;\n  margin-bottom: 30px;\n}\n.stepper-grid .stepper-grid_step {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  opacity: 0.6;\n  cursor: pointer;\n}\n.stepper-grid .stepper-grid_step._active {\n  opacity: 1;\n  -webkit-transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div {\n  background-color: #062862;\n  border: 0;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div div.image {\n  background-color: white;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon div:hover {\n  border: 2px solid #A6B1C3;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-icon label {\n  border: 0;\n  background-color: #062862;\n  color: white;\n}\n.stepper-grid .stepper-grid_step._active .stepper-grid_step__step-border hr {\n  border-bottom: 2px solid #062862;\n}\n.stepper-grid .stepper-grid_step._activated {\n  opacity: 1;\n  -webkit-transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n  transition: opacity 1s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div {\n  background-color: #437ADA;\n  border: 0;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div div.image {\n  background-color: white;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon div:hover {\n  border: 2px solid #A6B1C3;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-icon label {\n  border: 0;\n  background-color: #437ADA;\n  color: white;\n}\n.stepper-grid .stepper-grid_step._activated .stepper-grid_step__step-border hr {\n  border-bottom: 2px solid #437ADA;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div {\n  background-color: transparent;\n  border: 2px solid #A6B1C3;\n  color: white;\n  width: 45px;\n  height: 45px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 50%;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon label {\n  width: 100px;\n  height: auto;\n  line-height: 24px;\n  text-align: center;\n  background-color: transparent;\n  border: 2px solid #A6B1C3;\n  margin-top: 15px;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 600 !important;\n  font-size: 13px;\n  color: #A6B1C3;\n  border-radius: 8px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon label._last {\n  width: 150px;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-border {\n  width: 100%;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-border hr {\n  margin-top: -24px;\n  width: 100%;\n  height: 2px;\n  background: none;\n  border-bottom: 2px solid #A6B1C3;\n}\n.stepper-grid-content {\n  display: none;\n}\n.stepper-grid-content._active {\n  display: block;\n}\n.checkbox_label {\n  height: 13px !important;\n  color: #828282 !important;\n  font-family: Ubuntu !important;\n  font-size: 12px !important;\n  font-weight: 300 !important;\n}\n.booking-header {\n  color: #4F4F4F;\n  font-family: Helvetica;\n  font-size: 20px;\n  font-weight: 300;\n  line-height: 22px;\n  margin-left: 22px;\n}\n.outer-basic {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n  padding: 15px;\n}\n.bookings_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n.bookings_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n.bookings_pickers .input .icon {\n  opacity: 1;\n  z-index: 100;\n}\n.bookings_pickers .input .icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n.bookings_pickers .input .icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n.bookings_pickers .input .search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.bookings_pickers .input .search.dropdown .search {\n  margin-left: 42px !important;\n}\n.bookings_pickers .input .search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n.bookings_btn-panel .secondary {\n  width: 135.64px;\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n.bookings_btn-panel .primary {\n  width: 135.64px;\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n.trailing_button {\n  position: absolute;\n  right: 0;\n}\n.newAgency_topAlign {\n  padding-bottom: 15px;\n}\ntd {\n  color: #4F4F4F;\n  font-family: Helvetica;\n  font-size: 10px;\n  line-height: 11px;\n  text-align: center;\n}\nth {\n  color: #4F4F4F;\n  font-family: Helvetica;\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 11px;\n  text-align: center;\n}\n.confirm {\n  width: 63px;\n}\n.recConfirm {\n  height: 18px;\n  width: 62px;\n  background-color: #72D44F;\n  color: white;\n  padding-top: 0.5vh;\n}\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n.field input::-webkit-input-placeholder {\n  font-size: 12px;\n}\n.field input::-moz-placeholder {\n  font-size: 12px;\n}\n.field input::-ms-input-placeholder {\n  font-size: 12px;\n}\n.field input::placeholder {\n  font-size: 12px;\n}\n.outer-basic_secondary {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n}\n.outer-basicForm_secondary {\n  width: 100%;\n  height: auto;\n  padding: 15px;\n}\n.right_links {\n  position: absolute;\n  right: 0;\n  padding-top: 1vh;\n  padding-right: 8vh;\n}\n.outer-basic_tertiary {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-bottom-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\n.outer-basicForm_tertiary {\n  width: 100%;\n  height: auto;\n  padding: 50px;\n}\nhr {\n  box-sizing: border-box;\n  height: 1px;\n  border: 0.5px solid #E0E0E0;\n}\n.dropdown .text {\n  font-size: 12px;\n}\n.bookings_btn-panel.trailing_button {\n  margin-right: 44px;\n}\n.ui.fluid.container {\n  padding: 28px;\n}\n.right_links {\n  padding-top: 1vh;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image {\n  width: 22px;\n  margin: 0 auto;\n  background-color: #A6B1C3;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._member {\n  -webkit-mask: url('personal.svg') no-repeat center;\n  mask: url('personal.svg') no-repeat center;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._group {\n  -webkit-mask: url('group.svg') no-repeat center;\n  mask: url('group.svg') no-repeat center;\n}\n.stepper-grid .stepper-grid_step .stepper-grid_step__step-icon div div.image._remarks {\n  -webkit-mask: url('remarks.svg') no-repeat center;\n  mask: url('remarks.svg') no-repeat center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LWdyb3VwLXByb2ZpbGUvRTpcXEJlbGFsXFxwcm9qZWN0c1xcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGNvbW9uLXN0eWxlc1xcc3RlcHBlci5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcHJvZmlsZS1tYW5hZ2VtZW50L2NyZWF0ZS1uZXctcHJvZmlsZS9uZXctZ3JvdXAtcHJvZmlsZS9uZXctZ3JvdXAtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LWdyb3VwLXByb2ZpbGUvRTpcXEJlbGFsXFxwcm9qZWN0c1xcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGNvbW9uLXN0eWxlc1xcZGVzaWduLXBhbGV0dGUuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LWdyb3VwLXByb2ZpbGUvRTpcXEJlbGFsXFxwcm9qZWN0c1xcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxwcm9maWxlLW1hbmFnZW1lbnRcXGNyZWF0ZS1uZXctcHJvZmlsZVxcbmV3LWdyb3VwLXByb2ZpbGVcXG5ldy1ncm91cC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcHJvZmlsZS1tYW5hZ2VtZW50L2NyZWF0ZS1uZXctcHJvZmlsZS9uZXctZ3JvdXAtcHJvZmlsZS9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcY29tb24tc3R5bGVzXFxtaXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0o7QURDSTtFQUNFLFVBQUE7RUFDQSxrRUFBQTtFQUFBLDBEQUFBO0FDQ047QURFUTtFQUNFLHlCRWRRO0VGZVIsU0FBQTtBQ0FWO0FERVU7RUFDRSx1QkFBQTtBQ0FaO0FER1U7RUFDRSx5QkFBQTtBQ0RaO0FES1E7RUFDRSxTQUFBO0VBQ0EseUJFNUJRO0VGNkJSLFlBQUE7QUNIVjtBRFFRO0VBQ0UsZ0NBQUE7QUNOVjtBRFdJO0VBQ0UsVUFBQTtFQUNBLGtFQUFBO0VBQUEsMERBQUE7QUNUTjtBRFlRO0VBQ0UseUJFaERNO0VGaUROLFNBQUE7QUNWVjtBRFlVO0VBQ0UsdUJBQUE7QUNWWjtBRGFVO0VBQ0UseUJBQUE7QUNYWjtBRGVRO0VBQ0UsU0FBQTtFQUNBLHlCRTlETTtFRitETixZQUFBO0FDYlY7QURrQlE7RUFDRSxnQ0FBQTtBQ2hCVjtBRHFCSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNuQk47QURxQk07RUFDRSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtCQUFBO0FDbkJSO0FEc0JNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUNFekVNO0VGMEVOLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGNFcEdVO0VGcUdWLGtCRWhGZ0I7QUQ0RHhCO0FEc0JRO0VBQ0UsWUFBQTtBQ3BCVjtBRHlCSTtFQUNFLFdBQUE7QUN2Qk47QUR5Qk07RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQ3ZCUjtBRDZCQTtFQUNFLGFBQUE7QUMxQkY7QUQ0QkU7RUFDRSxjQUFBO0FDMUJKO0FFcEdBO0VBQ0UsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtBRnVHRjtBRXBHQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUZ1R0Y7QUVwR0E7RUFDRSxzQkFBQTtFQUNBLDRDQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBRnVHRjtBRXBHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBRnVHRjtBRWxHRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUZxR0o7QUVsR0U7RUFDRSx3QkFBQTtFQUNBLDBDQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBRm9HSjtBRWpHRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0FGbUdKO0FFakdJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUZtR047QUVqR007RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUZtR1I7QUU5RkU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsOEJBQUE7QUZnR0o7QUU5Rkk7RUFDRSw0QkFBQTtBRmdHTjtBRTdGSTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0FGK0ZOO0FFekZFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpRkFBQTtBRjRGSjtBRXpGRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUZBQUE7QUYyRko7QUV0RkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUZ5RkY7QUV0RkE7RUFDRSxvQkFBQTtBRnlGRjtBRXJGQTtFQUNFLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FGd0ZGO0FFckZBO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBRndGRjtBRXJGQTtFQUNFLFdBQUE7QUZ3RkY7QUVyRkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FGd0ZGO0FFckZBO0VBQ0UsNENBQUE7QUZ3RkY7QUVwRkE7RUFDRSxlQUFBO0FGdUZGO0FFeEZBO0VBQ0UsZUFBQTtBRnVGRjtBRXhGQTtFQUNFLGVBQUE7QUZ1RkY7QUV4RkE7RUFDRSxlQUFBO0FGdUZGO0FFbkZBO0VBQ0Usc0JBQUE7RUFDQSw0Q0FBQTtBRnNGRjtBRW5GQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBRnNGRjtBRW5GQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUZzRkY7QUVuRkE7RUFDRSxzQkFBQTtFQUNBLDRDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBRnNGRjtBRW5GQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBRnNGRjtBRW5GQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLDJCQUFBO0FGc0ZGO0FFbkZBO0VBQ0UsZUFBQTtBRnNGRjtBRW5GQTtFQUNFLGtCQUFBO0FGc0ZGO0FFbkZBO0VBQ0UsYUFBQTtBRnNGRjtBRW5GQTtFQUNFLGdCQUFBO0FGc0ZGO0FFbEZFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSx5QkR6TWM7QUQ4UmxCO0FFbkZJO0VDcEtGLGtEQUFBO0VBQ0EsMENBQUE7QUgwUEY7QUVuRkk7RUN4S0YsK0NBQUE7RUFDQSx1Q0FBQTtBSDhQRjtBRW5GSTtFQzVLRixpREFBQTtFQUNBLHlDQUFBO0FIa1FGIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9jcmVhdGUtbmV3LXByb2ZpbGUvbmV3LWdyb3VwLXByb2ZpbGUvbmV3LWdyb3VwLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RlcHBlci1ncmlkIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gIC5zdGVwcGVyLWdyaWRfc3RlcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG9wYWNpdHk6IC42O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICYuX2FjdGl2ZSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XHJcblxyXG4gICAgICAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiB7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkZWVwLWJsdWUtY29sb3I7XHJcbiAgICAgICAgICBib3JkZXI6IDA7XHJcblxyXG4gICAgICAgICAgZGl2LmltYWdlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGVlcC1ibHVlLWNvbG9yO1xyXG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciB7XHJcbiAgICAgICAgaHIge1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRkZWVwLWJsdWUtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJi5fYWN0aXZhdGVkIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBjdWJpYy1iZXppZXIoMC4wNzUsIDAuODIsIDAuMTY1LCAxKTtcclxuXHJcbiAgICAgIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIHtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XHJcbiAgICAgICAgICBib3JkZXI6IDA7XHJcblxyXG4gICAgICAgICAgZGl2LmltYWdlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYWJlbCB7XHJcbiAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1ib3JkZXIge1xyXG4gICAgICAgIGhyIHtcclxuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICBkaXYge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICRzZWNvbmRhcnktY29sb3I7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHdpZHRoOiA0NXB4O1xyXG4gICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsYWJlbCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAkYm9yZGVyLXJhZGl1cy1wcmltYXJ5O1xyXG5cclxuICAgICAgICAmLl9sYXN0IHtcclxuICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtYm9yZGVyIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICBociB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTI0cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnN0ZXBwZXItZ3JpZC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG5cclxuICAmLl9hY3RpdmUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcbiIsIi5zdGVwcGVyLWdyaWQge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvcGFjaXR5OiAwLjY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmUge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGN1YmljLWJlemllcigwLjA3NSwgMC44MiwgMC4xNjUsIDEpO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2ZSAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDYyODYyO1xuICBib3JkZXI6IDA7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZlIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiBkaXYuaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmUgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2OmhvdmVyIHtcbiAgYm9yZGVyOiAycHggc29saWQgI0E2QjFDMztcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmUgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gbGFiZWwge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjI4NjI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmUgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWJvcmRlciBociB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMDYyODYyO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2YXRlZCB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSk7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcC5fYWN0aXZhdGVkIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MzdBREE7XG4gIGJvcmRlcjogMDtcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwLl9hY3RpdmF0ZWQgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IGRpdi5pbWFnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2YXRlZCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXY6aG92ZXIge1xuICBib3JkZXI6IDJweCBzb2xpZCAjQTZCMUMzO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2YXRlZCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBsYWJlbCB7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzN0FEQTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAuX2FjdGl2YXRlZCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtYm9yZGVyIGhyIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM0MzdBREE7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAycHggc29saWQgI0E2QjFDMztcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogNDVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBsYWJlbCB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAycHggc29saWQgI0E2QjFDMztcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogI0E2QjFDMztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gbGFiZWwuX2xhc3Qge1xuICB3aWR0aDogMTUwcHg7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtYm9yZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtYm9yZGVyIGhyIHtcbiAgbWFyZ2luLXRvcDogLTI0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNBNkIxQzM7XG59XG5cbi5zdGVwcGVyLWdyaWQtY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uc3RlcHBlci1ncmlkLWNvbnRlbnQuX2FjdGl2ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY2hlY2tib3hfbGFiZWwge1xuICBoZWlnaHQ6IDEzcHggIWltcG9ydGFudDtcbiAgY29sb3I6ICM4MjgyODIgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFVidW50dSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xufVxuXG4uYm9va2luZy1oZWFkZXIge1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luLWxlZnQ6IDIycHg7XG59XG5cbi5vdXRlci1iYXNpYyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbn1cblxuLm91dGVyLWJhc2ljRm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dC5ib29raW5nc19kYXRlcGlja2VyIHtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgbWF4LXdpZHRoOiAxMzhweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAudWkuYmFzaWMuZmxvYXRpbmcuYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogcmdiYSgxNTIsIDE1MiwgMTUyLCAwLjYpICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDExcHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLmljb24ge1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxMDA7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcbiAgd2lkdGg6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsIHtcbiAgd2lkdGg6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnNlYXJjaC5kcm9wZG93biB7XG4gIHdpZHRoOiAyMThweDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuc2VhcmNoLmRyb3Bkb3duIC5zZWFyY2gge1xuICBtYXJnaW4tbGVmdDogNDJweCAhaW1wb3J0YW50O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5zZWFyY2guZHJvcGRvd24gLmRlZmF1bHQudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDhweCAwIDAgMzhweCAhaW1wb3J0YW50O1xufVxuXG4uYm9va2luZ3NfYnRuLXBhbmVsIC5zZWNvbmRhcnkge1xuICB3aWR0aDogMTM1LjY0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRGNEY0RjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLmJvb2tpbmdzX2J0bi1wYW5lbCAucHJpbWFyeSB7XG4gIHdpZHRoOiAxMzUuNjRweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi50cmFpbGluZ19idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubmV3QWdlbmN5X3RvcEFsaWduIHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbnRkIHtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDExcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxudGgge1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29uZmlybSB7XG4gIHdpZHRoOiA2M3B4O1xufVxuXG4ucmVjQ29uZmlybSB7XG4gIGhlaWdodDogMThweDtcbiAgd2lkdGg6IDYycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MkQ0NEY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy10b3A6IDAuNXZoO1xufVxuXG4udGFiLnNlZ21lbnQge1xuICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cblxuLmZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm91dGVyLWJhc2ljX3NlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4ub3V0ZXItYmFzaWNGb3JtX3NlY29uZGFyeSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5yaWdodF9saW5rcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmctdG9wOiAxdmg7XG4gIHBhZGRpbmctcmlnaHQ6IDh2aDtcbn1cblxuLm91dGVyLWJhc2ljX3RlcnRpYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm94LXNoYWRvdzogM3B4IDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xufVxuXG4ub3V0ZXItYmFzaWNGb3JtX3RlcnRpYXJ5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogNTBweDtcbn1cblxuaHIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDFweDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjRTBFMEUwO1xufVxuXG4uZHJvcGRvd24gLnRleHQge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5ib29raW5nc19idG4tcGFuZWwudHJhaWxpbmdfYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiA0NHB4O1xufVxuXG4udWkuZmx1aWQuY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjhweDtcbn1cblxuLnJpZ2h0X2xpbmtzIHtcbiAgcGFkZGluZy10b3A6IDF2aDtcbn1cblxuLnN0ZXBwZXItZ3JpZCAuc3RlcHBlci1ncmlkX3N0ZXAgLnN0ZXBwZXItZ3JpZF9zdGVwX19zdGVwLWljb24gZGl2IGRpdi5pbWFnZSB7XG4gIHdpZHRoOiAyMnB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0E2QjFDMztcbn1cbi5zdGVwcGVyLWdyaWQgLnN0ZXBwZXItZ3JpZF9zdGVwIC5zdGVwcGVyLWdyaWRfc3RlcF9fc3RlcC1pY29uIGRpdiBkaXYuaW1hZ2UuX21lbWJlciB7XG4gIC13ZWJraXQtbWFzazogdXJsKFwiLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3BlcnNvbmFsLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICBtYXNrOiB1cmwoXCIuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcGVyc29uYWwuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYgZGl2LmltYWdlLl9ncm91cCB7XG4gIC13ZWJraXQtbWFzazogdXJsKFwiLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL2dyb3VwLnN2Z1wiKSBuby1yZXBlYXQgY2VudGVyO1xuICBtYXNrOiB1cmwoXCIuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvZ3JvdXAuc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG59XG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYgZGl2LmltYWdlLl9yZW1hcmtzIHtcbiAgLXdlYmtpdC1tYXNrOiB1cmwoXCIuLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcmVtYXJrcy5zdmdcIikgbm8tcmVwZWF0IGNlbnRlcjtcbiAgbWFzazogdXJsKFwiLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL3JlbWFya3Muc3ZnXCIpIG5vLXJlcGVhdCBjZW50ZXI7XG59IiwiJHByaW1hcnktY29sb3I6ICM0MzdBREE7XHJcbiRzZWNvbmRhcnktY29sb3I6ICNBNkIxQzM7XHJcbiRkZWVwLWJsdWUtY29sb3I6ICMwNjI4NjI7XHJcbiRsaWdodC1zbW9rZS1jb2xvcjogI2U1ZTVlNTtcclxuJHZvaWxhLWdyZWVuOiAjODRCQzZBO1xyXG4kcHVyZS13aGl0ZTogd2hpdGU7XHJcbiRmYXVsdC1jb2xvcjogI0RFNzk3OTtcclxuJHdhcm5pbmctY29sb3I6ICNFQ0MwNEU7XHJcbiRzdWNjZXNzLWNvbG9yOiAjNzNCMjVEO1xyXG5cclxuJGJvZHktYmFzZTogI0Y2RjlGQztcclxuJGNvcnBvcmF0ZS1ibHVlLWJhc2U6ICM0NTY3QUM7XHJcblxyXG4kY29udGFpbmVyLWJhc2U6IHdoaXRlO1xyXG4kY29udGFpbmVyLWJhc2Utc2hhZG93OiAwcHggMnB4IDZweCByZ2JhKDYsIDQwLCA5OCwgMC4xKTtcclxuJGNvbnRhaW5lci1kcm9wZG93bnMtc2hhZG93OiAwcHggOHB4IDE0cHggcmdiYSgwLCA1OCwgMTY0LCAuMik7XHJcblxyXG4kcHJpbWFyeS1zaGFkb3c6IDBweCA0LjgzcHggMTZweCByZ2JhKDY3LCAxMjIsIDIxOCwgLjUpO1xyXG4kbGlnaHQtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDU4LCAxNjQsIC4yNSk7XHJcbiRmYWRlZC1zaGFkb3c6IDBweCA0cHggNnB4IHJnYmEoMTY3LCAxNzMsIDE4MiwgLjIpO1xyXG4kbGlnaHQtZXh0ZW5kZWQtc2hhZG93OiAwcHggNHB4IDZweCByZ2JhKDAsIDU4LCAxNjQsIC4yNSk7XHJcblxyXG4kYm9yZGVyLXJhZGl1cy1wcmltYXJ5OiA4cHg7XHJcbiRib3JkZXItcmFkaXVzLXNlY29uZGFyeTogNnB4O1xyXG5cclxuJGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuJGZvbnQtd2VpZ2h0LW5vcm1hbDogNDAwO1xyXG5cclxuJHRvYXN0LWluZm8tY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xyXG4kdG9hc3QtaW5mby1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgxMTEsIDAsIDAsIC4yKTtcclxuXHJcbiR0b2FzdC1lcnJvci1jb2xvcjogJGZhdWx0LWNvbG9yO1xyXG4kdG9hc3QtZXJyb3Itc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMTExLCAwLCAwLCAuMik7XHJcblxyXG4kdG9hc3Qtd2FybmluZy1jb2xvcjogJHdhcm5pbmctY29sb3I7XHJcbiR0b2FzdC13YXJuaW5nLXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDE3NywgMTI3LCAwLCAuMik7XHJcblxyXG4kdG9hc3Qtc3VjY2Vzcy1jb2xvcjogJHN1Y2Nlc3MtY29sb3I7XHJcbiR0b2FzdC1zdWNjZXNzLXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDM0LCAxMzAsIDAsIC4yKTtcclxuIiwiQGltcG9ydCBcIi4vLi4vLi4vLi4vLi4vLi4vY29tb24tc3R5bGVzL2NvbW1vbi5zY3NzXCI7XHJcblxyXG4uY2hlY2tib3hfbGFiZWwge1xyXG4gIGhlaWdodDogMTNweCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjODI4MjgyICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IFVidW50dSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvb2tpbmctaGVhZGVyIHtcclxuICBjb2xvcjogIzRGNEY0RjtcclxuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMnB4O1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgYm94LXNoYWRvdzogM3B4IDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljRm9ybSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbn1cclxuXHJcbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCB7XHJcblxyXG4gICYuYm9va2luZ3NfZGF0ZXBpY2tlciB7XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMzhweFxyXG4gIH1cclxuXHJcbiAgLnVpLmJhc2ljLmZsb2F0aW5nLmJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogcmdiYSgxNTIsIDE1MiwgMTUyLCAwLjYpICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogMzAwICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTFweDtcclxuICB9XHJcblxyXG4gIC5pY29uIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB6LWluZGV4OiAxMDA7XHJcblxyXG4gICAgLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDZweDtcclxuXHJcbiAgICAgICYuY2FsIHtcclxuICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLmRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAyMThweDtcclxuICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuXHJcbiAgICAuc2VhcmNoIHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDQycHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVmYXVsdC50ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZzogOHB4IDAgMCAzOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYm9va2luZ3NfYnRuLXBhbmVsIHtcclxuICAuc2Vjb25kYXJ5IHtcclxuICAgIHdpZHRoOiAxMzUuNjRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0RjRGNEY7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgfVxyXG5cclxuICAucHJpbWFyeSB7XHJcbiAgICB3aWR0aDogMTM1LjY0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi50cmFpbGluZ19idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxufVxyXG5cclxuLm5ld0FnZW5jeV90b3BBbGlnbiB7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcblxyXG59XHJcblxyXG50ZCB7XHJcbiAgY29sb3I6ICM0RjRGNEY7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50aCB7XHJcbiAgY29sb3I6ICM0RjRGNEY7XHJcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMTFweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb25maXJtIHtcclxuICB3aWR0aDogNjNweDtcclxufVxyXG5cclxuLnJlY0NvbmZpcm0ge1xyXG4gIGhlaWdodDogMThweDtcclxuICB3aWR0aDogNjJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzJENDRGO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nLXRvcDogLjV2aDtcclxufVxyXG5cclxuLnRhYi5zZWdtZW50IHtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuXHJcbi5maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuXHJcbi5vdXRlci1iYXNpY19zZWNvbmRhcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgYm94LXNoYWRvdzogM3B4IDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpY0Zvcm1fc2Vjb25kYXJ5IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMTVweDtcclxufVxyXG5cclxuLnJpZ2h0X2xpbmtzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgcGFkZGluZy10b3A6IDF2aDtcclxuICBwYWRkaW5nLXJpZ2h0OiA4dmg7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpY190ZXJ0aWFyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4ub3V0ZXItYmFzaWNGb3JtX3RlcnRpYXJ5IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogNTBweDtcclxufVxyXG5cclxuaHIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCAjRTBFMEUwO1xyXG59XHJcblxyXG4uZHJvcGRvd24gLnRleHQge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmJvb2tpbmdzX2J0bi1wYW5lbC50cmFpbGluZ19idXR0b24ge1xyXG4gIG1hcmdpbi1yaWdodDogNDRweDtcclxufVxyXG5cclxuLnVpLmZsdWlkLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMjhweDtcclxufVxyXG5cclxuLnJpZ2h0X2xpbmtzIHtcclxuICBwYWRkaW5nLXRvcDogMXZoO1xyXG59XHJcblxyXG4uc3RlcHBlci1ncmlkIC5zdGVwcGVyLWdyaWRfc3RlcCAuc3RlcHBlci1ncmlkX3N0ZXBfX3N0ZXAtaWNvbiBkaXYge1xyXG4gIGRpdi5pbWFnZSB7XHJcbiAgICB3aWR0aDogMjJweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuXHJcbiAgICAmLl9tZW1iZXIge1xyXG4gICAgICBAaW5jbHVkZSBtYXNrLXN2Zy1kaXYoJy4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9wZXJzb25hbC5zdmcnKTtcclxuICAgIH1cclxuXHJcbiAgICAmLl9ncm91cCB7XHJcbiAgICAgIEBpbmNsdWRlIG1hc2stc3ZnLWRpdignLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvaW1nL2dyb3VwLnN2ZycpO1xyXG4gICAgfVxyXG5cclxuICAgICYuX3JlbWFya3Mge1xyXG4gICAgICBAaW5jbHVkZSBtYXNrLXN2Zy1kaXYoJy4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9yZW1hcmtzLnN2ZycpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJAbWl4aW4gcGxhY2Vob2xkZXIge1xyXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICAmOi1tb3otcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gICAgQGNvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWl4aW4gY29sb3Itb3BhY2l0eSgkY29sb3IsICRvcGFjaXR5OiAwLjMpIHtcclxuICBiYWNrZ3JvdW5kOiAkY29sb3I7XHJcbiAgLyogVGhlIEZhbGxiYWNrICovXHJcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3IsICRvcGFjaXR5KTtcclxufVxyXG5cclxuQG1peGluIGhpZGVOdW1iZXJGaWVsZEFycm93cyB7XHJcblxyXG4gIC8qIENocm9tZSwgU2FmYXJpLCBFZGdlLCBPcGVyYSAqL1xyXG4gIGlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxyXG4gIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgLyogRmlyZWZveCAqL1xyXG4gIGlucHV0W3R5cGU9bnVtYmVyXSB7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuQG1peGluIG1hc2stc3ZnLWRpdigkaW1nKSB7XHJcbiAgLXdlYmtpdC1tYXNrOiB1cmwoJGltZykgbm8tcmVwZWF0IGNlbnRlcjtcclxuICBtYXNrOiB1cmwoJGltZykgbm8tcmVwZWF0IGNlbnRlcjtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile.component.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile.component.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: NewGroupProfileComponent */

  /***/
  function srcAppLayoutProfileManagementCreateNewProfileNewGroupProfileNewGroupProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewGroupProfileComponent", function () {
      return NewGroupProfileComponent;
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

    var NewGroupProfileComponent =
    /*#__PURE__*/
    function () {
      function NewGroupProfileComponent(route, ProfileManagementService, fb) {
        var _this = this;

        _classCallCheck(this, NewGroupProfileComponent);

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
          follow_up: this.fb.array([this.fb.group(this.initFollow_up())])
        });

        this.createNewGroupProfile = function () {
          _this.newGroupProfileObj.group_profile_id = _this.newGroupProfileId;
          _this.newGroupProfileObj.organisation_id = "";
          _this.newGroupProfileObj.created = "";
          _this.newGroupProfileObj.group_name = _this.newGroupProfileForm.get('group_name').value;
          _this.newGroupProfileObj.group_description = _this.newGroupProfileForm.get('group_description').value;
          _this.newGroupProfileObj.group_index = _this.newGroupProfileForm.get('group_index').value;
          _this.newGroupProfileObj.languages = _this.newGroupProfileForm.get('languages').value;
          _this.newGroupProfileObj.number = JSON.stringify(_this.newGroupProfileForm.get('number').value);
          _this.newGroupProfileObj.email = JSON.stringify(_this.newGroupProfileForm.get('email').value);
          _this.newGroupProfileObj.address = JSON.stringify(_this.newGroupProfileForm.get('address').value);
          _this.newGroupProfileObj.responsible_office = _this.newGroupProfileForm.get('responsible_office').value;
          _this.newGroupProfileObj.department_contact_name = _this.newGroupProfileForm.get('department_contact_name').value;
          _this.newGroupProfileObj.agent_contact_name = _this.newGroupProfileForm.get('agent_contact_name').value;
          _this.newGroupProfileObj.member1 = _this.newGroupProfileForm.get('member1').value;
          _this.newGroupProfileObj.group_members = JSON.stringify(_this.newGroupProfileForm.get('group_members').value);
          _this.newGroupProfileObj.remarks = JSON.stringify(_this.newGroupProfileForm.get('remarks').value);
          _this.newGroupProfileObj.profile_notes = JSON.stringify(_this.newGroupProfileForm.get('profile_notes').value);
          _this.newGroupProfileObj.priority_lines1 = JSON.stringify(_this.newGroupProfileForm.get('priority_lines1').value);
          _this.newGroupProfileObj.priority_lines2 = JSON.stringify(_this.newGroupProfileForm.get('priority_lines2').value);
          _this.newGroupProfileObj.follow_up = JSON.stringify(_this.newGroupProfileForm.get('follow_up').value);
          console.log("You shall not pass", _this.newGroupProfileObj);

          _this.ProfileManagementService.NewGroupProfile(_this.newGroupProfileObj).subscribe(function (results) {
            console.log(results);
          });
        };

        this.updateNewGroupProfile = function () {
          _this.newGroupProfileObj.group_profile_id = _this.groupProfileId;
          _this.newGroupProfileObj.organisation_id = "";
          _this.newGroupProfileObj.created = "";
          _this.newGroupProfileObj.group_name = _this.newGroupProfileForm.get('group_name').value;
          _this.newGroupProfileObj.group_description = _this.newGroupProfileForm.get('group_description').value;
          _this.newGroupProfileObj.group_index = _this.newGroupProfileForm.get('group_index').value;
          _this.newGroupProfileObj.languages = _this.newGroupProfileForm.get('languages').value;
          _this.newGroupProfileObj.number = JSON.stringify(_this.newGroupProfileForm.get('number').value);
          _this.newGroupProfileObj.email = JSON.stringify(_this.newGroupProfileForm.get('email').value);
          _this.newGroupProfileObj.address = JSON.stringify(_this.newGroupProfileForm.get('address').value);
          _this.newGroupProfileObj.responsible_office = _this.newGroupProfileForm.get('responsible_office').value;
          _this.newGroupProfileObj.department_contact_name = _this.newGroupProfileForm.get('department_contact_name').value;
          _this.newGroupProfileObj.agent_contact_name = _this.newGroupProfileForm.get('agent_contact_name').value;
          _this.newGroupProfileObj.member1 = _this.newGroupProfileForm.get('member1').value;
          _this.newGroupProfileObj.group_members = JSON.stringify(_this.newGroupProfileForm.get('group_members').value);
          _this.newGroupProfileObj.remarks = JSON.stringify(_this.newGroupProfileForm.get('remarks').value);
          _this.newGroupProfileObj.profile_notes = JSON.stringify(_this.newGroupProfileForm.get('profile_notes').value);
          _this.newGroupProfileObj.priority_lines1 = JSON.stringify(_this.newGroupProfileForm.get('priority_lines1').value);
          _this.newGroupProfileObj.priority_lines2 = JSON.stringify(_this.newGroupProfileForm.get('priority_lines2').value);
          _this.newGroupProfileObj.follow_up = JSON.stringify(_this.newGroupProfileForm.get('follow_up').value);
          console.log("You shall not pass", _this.newGroupProfileObj);

          _this.ProfileManagementService.UpdateGroupProfile(_this.groupProfileId, _this.newGroupProfileObj).subscribe(function (results) {
            console.log(results);
          });
        };

        var uniqueProfileID = Math.random().toString(36).substring(7);
        console.log(uniqueProfileID);
        this.newGroupProfileId = uniqueProfileID + "Amedius";
        this.route.queryParams.subscribe(function (params) {
          console.log(params);
          _this.groupProfileId = params.group_profile_id;

          _this.newGroupProfileForm.patchValue({
            group_profile_id: params.group_profile_id,
            organisation_id: params.organisation_id,
            group_name: params.group_name,
            group_description: params.group_description,
            group_index: params.group_index,
            languages: params.languages,
            responsible_office: params.responsible_office,
            department_contact_name: params.department_contact_name,
            agent_contact_name: params.agent_contact_name,
            member1: params.member1
          });

          var number = _this.parsingArrayParams(params.number, _this.number);

          var email = _this.parsingArrayParams(params.email, _this.email);

          var address = _this.parsingArrayParams(params.address, _this.address);

          var groupMembers = _this.parsingArrayParams(params.group_members, _this.group_members);

          var remarks = _this.parsingArrayParams(params.remarks, _this.remarks);

          var profileNotes = _this.parsingArrayParams(params.profile_notes, _this.profile_notes);

          var priorityLines1 = _this.parsingArrayParams(params.priority_lines1, _this.priority_lines1);

          var priorityLines2 = _this.parsingArrayParams(params.priority_lines2, _this.priority_lines2);

          var followUp = _this.parsingArrayParams(params.follow_up, _this.follow_up);
        });
      }

      _createClass(NewGroupProfileComponent, [{
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
        key: "initEmail",
        value: function initEmail() {
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
        key: "initGroup_members",
        value: function initGroup_members() {
          return {
            group_name: [''],
            group_description: [''],
            group_index: [''],
            languages: ['']
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
        key: "initProfile_notes",
        value: function initProfile_notes() {
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
        key: "addMoreNumber",
        value: function addMoreNumber() {
          this.number.push(this.fb.group(this.initNumber()));
        }
      }, {
        key: "addMoreEmail",
        value: function addMoreEmail() {
          this.email.push(this.fb.group(this.initEmail()));
        }
      }, {
        key: "addMoreAddress",
        value: function addMoreAddress() {
          this.address.push(this.fb.group(this.initAddress()));
        }
      }, {
        key: "addMoreGroup_members",
        value: function addMoreGroup_members() {
          this.group_members.push(this.fb.group(this.initGroup_members()));
        }
      }, {
        key: "addMoreRemarks",
        value: function addMoreRemarks() {
          this.remarks.push(this.fb.group(this.initRemarks()));
        }
      }, {
        key: "addMoreProfile_notes",
        value: function addMoreProfile_notes() {
          this.profile_notes.push(this.fb.group(this.initProfile_notes()));
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
        key: "setDropDownType",
        value: function setDropDownType(value, type) {
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
      }, {
        key: "number",
        get: function get() {
          return this.newGroupProfileForm.get('number');
        }
      }, {
        key: "email",
        get: function get() {
          return this.newGroupProfileForm.get('email');
        }
      }, {
        key: "address",
        get: function get() {
          return this.newGroupProfileForm.get('address');
        }
      }, {
        key: "group_members",
        get: function get() {
          return this.newGroupProfileForm.get('group_members');
        }
      }, {
        key: "remarks",
        get: function get() {
          return this.newGroupProfileForm.get('remarks');
        }
      }, {
        key: "profile_notes",
        get: function get() {
          return this.newGroupProfileForm.get('profile_notes');
        }
      }, {
        key: "priority_lines1",
        get: function get() {
          return this.newGroupProfileForm.get('priority_lines1');
        }
      }, {
        key: "priority_lines2",
        get: function get() {
          return this.newGroupProfileForm.get('priority_lines2');
        }
      }, {
        key: "follow_up",
        get: function get() {
          return this.newGroupProfileForm.get('follow_up');
        }
      }]);

      return NewGroupProfileComponent;
    }();

    NewGroupProfileComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _shared_services_profile_management_profile_management_service__WEBPACK_IMPORTED_MODULE_1__["ProfileManagementService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tab', {
      static: false
    })], NewGroupProfileComponent.prototype, "tab", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('tabContent', {
      static: false
    })], NewGroupProfileComponent.prototype, "tabContent", void 0);
    NewGroupProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-new-group-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./new-group-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./new-group-profile.component.scss */
      "./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile.component.scss")).default, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./../create-new-profile.component.scss */
      "./src/app/layout/profile-management/create-new-profile/create-new-profile.component.scss")).default]
    })], NewGroupProfileComponent);
    /***/
  },

  /***/
  "./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile.module.ts":
  /*!************************************************************************************************************!*\
    !*** ./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile.module.ts ***!
    \************************************************************************************************************/

  /*! exports provided: NewGroupProfileModule */

  /***/
  function srcAppLayoutProfileManagementCreateNewProfileNewGroupProfileNewGroupProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewGroupProfileModule", function () {
      return NewGroupProfileModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _new_group_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./new-group-profile.component */
    "./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile.component.ts");
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


    var _new_group_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./new-group-profile-routing.module */
    "./src/app/layout/profile-management/create-new-profile/new-group-profile/new-group-profile-routing.module.ts");

    var NewGroupProfileModule = function NewGroupProfileModule() {
      _classCallCheck(this, NewGroupProfileModule);
    };

    NewGroupProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_new_group_profile_component__WEBPACK_IMPORTED_MODULE_1__["NewGroupProfileComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _new_group_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewGroupProfileRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
    })], NewGroupProfileModule);
    /***/
  }
}]);
//# sourceMappingURL=new-group-profile-new-group-profile-module-es5.js.map