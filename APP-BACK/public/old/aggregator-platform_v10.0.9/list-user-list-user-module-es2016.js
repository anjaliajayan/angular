(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-user-list-user-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user-role-management/list-user/list-user.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user-role-management/list-user/list-user.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"outer-segment\">\r\n  <div class=\"users_list\">\r\n    <h3 class=\"user_title\">List All Users</h3>\r\n  </div>\r\n  <div class=\"ui top attached tabular menu\">\r\n    <div class=\"active item b2b_title\" data-tab=\"first\">B2B/B2C</div>\r\n  </div>\r\n  <div class=\"ui bottom attached active tab segment tabContent-block\" data-tab=\"first\">\r\n      <div class=\"ui segment\">\r\n    <div class=\"ui fluid container\">\r\n      <div class=\"ui form\">\r\n        <form [formGroup]=\"filterForm\" (ngSubmit)=\"filterFormSubmit()\" class=\"ui form \">\r\n          <div class=\"four fields search-field-section\">\r\n            <div class=\"four wide field\">\r\n              <select class=\"ui fluid search dropdown\" formControlName=\"organisation_id\">\r\n                <option value=\"all\">All Organisation</option>\r\n                <option *ngFor=\"let organization of organizations;\" value=\"{{organization.organisation_id}}\">\r\n                  <!-- {{organization.name +' - '+organization.agent_code}} -->\r\n                  {{organization.name}}\r\n                </option>\r\n              </select>\r\n            </div>\r\n            <div class=\"three wide field\">\r\n              <input type=\"text\" placeholder=\"Username/ Name/ Email/ Agent code\" formControlName=\"usernameAndAgentCode\">\r\n            </div>\r\n            <div class=\"seven wide field bookings_btn-panel\">\r\n              <button class=\"ui primary button\">\r\n                Filter UserList\r\n              </button>\r\n              <button class=\"ui secondary reset button\" (click)=\"filterFormReset()\">\r\n                Reset Filter\r\n              </button>\r\n            </div>\r\n            <div class=\"two wide field\">\r\n              <div class=\"upload_add_print\">\r\n                <div class=\"addUser_img\" title=\"Add New User\">\r\n                  <a routerLink=\"/user-role-management/create-user\"><img class=\"ui image \"\r\n                      src=\"./../../../../assets/img/add-user.png\" /></a>\r\n                </div>\r\n                <!-- <div class=\"print_img\" title=\"Export\" (click)=\"exportData()\"><img class=\"ui image\"\r\n                    src=\"./../../../../assets/img/download.png\" />\r\n                </div> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <div class=\"ui segment\">\r\n          <div class=\"two fields search-section\">\r\n            <div class=\"eight wide field\">\r\n              <h4 class=\"ui small header main_head\">User List</h4>\r\n            </div>\r\n            <div class=\"eight wide field bookings_btn-panel\">\r\n              <button class=\"ui export button\" (click)=\"exportData()\" title=\"Export\">\r\n                  Export\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\" result-block\">\r\n          <div class=\"user-table-list b2c-list-user-table user-loader\">\r\n            <div class=\"ui active inverted dimmer user-loader\" *ngIf=\"userLoader\">\r\n              <div class=\"ui text loader\">Loading Users ...</div>\r\n            </div>\r\n            <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n              [rowHeight]=\"'auto'\" [rows]='users' [sortType]=\"'multi'\" [reorderable]=\"true\" [externalPaging]=\"true\"\r\n              [count]=\"totalUsers\" [offset]=\"page\" [sorts]=\"[{prop: 'created', dir: 'desc'}]\"\r\n              (page)=\"pageCallback($event)\">\r\n              <ngx-datatable-column name=\"User Type\" prop=\"organisation\">\r\n                <ng-template ngx-datatable-cell-template let-value=\"value\">{{value.name}}</ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Name\" prop=\"first_name\">\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Username\" prop=\"username\">\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Date&Time Created\" prop=\"created\">\r\n                <ng-template ngx-datatable-cell-template let-value=\"value\">{{value | date: 'dd/MM/yyyy'}}</ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Email\" prop=\"email\">\r\n                <ng-template let-row=\"row\" ngx-datatable-cell-template>\r\n                  <a class=\"nav-link edit\" (click)=\"viewUser(row)\" title=\"Preview User\">\r\n                    {{row.email}}\r\n                    <!-- <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i> -->\r\n                  </a>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Agent Code\" prop=\"agent_code\">\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Status\" prop=\"is_active\">\r\n                <!-- <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\"  >\r\n                  <span *ngIf=\"value == 1\" (click)=\"statusToggle(row)\"><i class=\"icon\" title=\"Active\">\r\n                      <img src=\"./.././../../../assets/icons/tick.png\" class=\"bookings_input__placeholder-icon cal\" />\r\n                    </i></span>\r\n                  <span *ngIf=\"value != 1\" (click)=\"statusToggle(row)\">\r\n                    <i class=\"icon\">\r\n                      <img src=\"./.././../../../assets/icons/cross.png\" class=\"bookings_input__placeholder-icon call\" />\r\n                    </i>\r\n                  </span>\r\n                </ng-template> -->\r\n                <ng-template ngx-datatable-cell-template let-value=\"value\" let-row=\"row\">\r\n                  <span *ngIf=\"value == 1\" (click)=\"statusToggle(row)\"><i class=\"icon\" title=\"click to deactivate\">\r\n                      <img src=\"./../../../../../assets/icons/checkmark.png\"\r\n                        class=\"bookings_input__placeholder-icon cal\" />\r\n                    </i></span>\r\n                  <span *ngIf=\"value != 1\" (click)=\"statusToggle(row)\">\r\n                    <i class=\"icon\" title=\"click to activate\">\r\n                      <img src=\"./../../../../../assets/icons/cross.png\" class=\"bookings_input__placeholder-icon call\" />\r\n                    </i>\r\n                  </span>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n              <ngx-datatable-column name=\"Action\">\r\n                <ng-template let-value=\"value\" let-row=\"row\" ngx-datatable-cell-template>\r\n                  <a class=\"nav-link edit\" (click)=\"editUser(row)\" title=\"Edit User\">\r\n                    <i class=\"icon\">\r\n                      <img src=\"./../../../../../assets/icons/edit.png\" class=\"bookings_input__placeholder-icon cal\" />\r\n                    </i>\r\n                  </a>\r\n                  &nbsp;\r\n                  <a class=\"nav-link edit\" (click)=\"deleteUser(row)\" title=\"Delete User\">\r\n                    <i class=\"icon\">\r\n                      <img src=\"./../../../../../assets/icons/delete-button.png\"\r\n                        class=\"bookings_input__placeholder-icon cal\" />\r\n                    </i>\r\n                  </a>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n            </ngx-datatable>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui bottom attached tab segment tabContent-block\" data-tab=\"second\">\r\n    <div class=\"ui fluid container\">\r\n      <div class=\"ui form\">\r\n        <div class=\"four fields\">\r\n          <div class=\"four wide field\">\r\n            <select class=\"ui dropdown\">\r\n              <option value=\"\">All Corporate</option>\r\n              <option value=\"1\">-----</option>\r\n              <option value=\"0\">-----</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"three wide field\">\r\n            <input type=\"text\" placeholder=\"Username/Employee ID\">\r\n          </div>\r\n          <div class=\"three wide field\">\r\n            <button class=\"ui left floated button search_btn\" tabindex=\"0\">\r\n              <span class=\"search_text\">Search</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"four wide field\">\r\n            <div class=\"ui test small toggle checkbox staff-btn-toggle\">\r\n              <input type=\"checkbox\" name=\"public\" checked=\"checked\">\r\n              <label>Awaiting approval</label>\r\n            </div>\r\n          </div>\r\n          <div class=\"three wide field\">\r\n            <div class=\"upload_add_print\">\r\n              <div class=\"upload_img\"><img class=\"ui image\" src=\"./../../../../assets/img/upload.png\" />\r\n              </div>\r\n              <div class=\"addUser_img\"><img class=\"ui image\" src=\"./../../../../assets/img/add-user.png\" /></div>\r\n              <div class=\"print_img\"><img class=\"ui image\" src=\"./../../../../assets/img/download.png\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"user-table-list b2c-list-user-table\">\r\n          <table class=\"ui stackable celled table\">\r\n            <thead>\r\n              <tr class=\"center aligned\">\r\n                <th>S/no</th>\r\n                <th>Department</th>\r\n                <th>Name</th>\r\n                <th>Username/Employee ID</th>\r\n                <th>Email</th>\r\n                <th>Corporate</th>\r\n                <th>Register Date</th>\r\n                <th>Last Login</th>\r\n                <th>Balance</th>\r\n                <th>Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr class=\"center aligned\">\r\n                <td data-label=\"s/no\">----</td>\r\n                <td data-label=\"department\">----</td>\r\n                <td data-label=\"name\">------</td>\r\n                <td data-label=\"username\">------</td>\r\n                <td data-label=\"email\">------</td>\r\n                <td data-label=\"corporate\">-------</td>\r\n                <td data-label=\"registerDate\">-------</td>\r\n                <td data-label=\"lastLogin\">-----</td>\r\n                <td data-label=\"balance\">-----</td>\r\n                <td data-label=\"action\">\r\n                  <i class=\"icon\"><img class=\"flights_input__placeholder-icon\"\r\n                      src=\"./../../../../assets/img/edit.png\" /></i>\r\n                  <i class=\"icon\"><img class=\"flights_input__placeholder-icon\"\r\n                      src=\"./../../../../assets/img/check-mark.png\" /></i>\r\n                  <i class=\"icon\"><img class=\"flights_input__placeholder-icon\"\r\n                      src=\"./../../../../assets/img/delete-button.png\" /></i>\r\n                </td>\r\n              </tr>\r\n              <tr class=\"center aligned\">\r\n                <td data-label=\"s/no\">----</td>\r\n                <td data-label=\"department\">----</td>\r\n                <td data-label=\"name\">------</td>\r\n                <td data-label=\"username\">------</td>\r\n                <td data-label=\"email\">------</td>\r\n                <td data-label=\"corporate\">-------</td>\r\n                <td data-label=\"registerDate\">-------</td>\r\n                <td data-label=\"lastLogin\">-----</td>\r\n                <td data-label=\"balance\">-----</td>\r\n                <td data-label=\"action\">-----</td>\r\n              </tr>\r\n              <tr class=\"center aligned\">\r\n                <td data-label=\"s/no\">----</td>\r\n                <td data-label=\"department\">----</td>\r\n                <td data-label=\"name\">------</td>\r\n                <td data-label=\"username\">------</td>\r\n                <td data-label=\"email\">------</td>\r\n                <td data-label=\"corporate\">-------</td>\r\n                <td data-label=\"registerDate\">-------</td>\r\n                <td data-label=\"lastLogin\">-----</td>\r\n                <td data-label=\"balance\">-----</td>\r\n                <td data-label=\"action\">-----</td>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr>\r\n                <th colspan=\"10\">\r\n                  <div class=\"ui right floated pagination menu\">\r\n                    <a class=\"icon item\"><i class=\"left chevron icon\"></i></a>\r\n                    <a class=\"item\">1</a>\r\n                    <a class=\"item\">2</a>\r\n                    <a class=\"item\">3</a>\r\n                    <a class=\"item\">4</a>\r\n                    <a class=\"icon item\"><i class=\"right chevron icon\"></i></a>\r\n                  </div>\r\n                </th>\r\n              </tr>\r\n            </tfoot>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>");

/***/ }),

/***/ "./src/app/layout/user-role-management/list-user/list-user-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/user-role-management/list-user/list-user-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ListUserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUserRoutingModule", function() { return ListUserRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _list_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-user.component */ "./src/app/layout/user-role-management/list-user/list-user.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: '', component: _list_user_component__WEBPACK_IMPORTED_MODULE_1__["ListUserComponent"] }
];
let ListUserRoutingModule = class ListUserRoutingModule {
};
ListUserRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], ListUserRoutingModule);



/***/ }),

/***/ "./src/app/layout/user-role-management/list-user/list-user.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/layout/user-role-management/list-user/list-user.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".outer-segment {\n  margin: 0px;\n}\n\n.user_title {\n  margin: 0;\n  font-style: normal;\n  font-weight: 700 !important;\n  font-size: 20px;\n  line-height: 23px;\n  color: #181B20;\n}\n\n.users_list {\n  height: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 0px 40px;\n}\n\n.b2b_title,\n.staff_list {\n  color: #4F4F4F;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n\n.ui.header {\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 15px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.filter_list {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n}\n\n.upload_add_print {\n  margin: 12px 0px 0px 12px;\n}\n\n.print_img,\n.addUser_img {\n  margin-left: 16px;\n}\n\n.search_btn {\n  box-sizing: border-box;\n  border-radius: 3px;\n  background-color: #3867b1;\n  border: 1px solid #FFF;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n  padding-right: 35px;\n  position: relative;\n}\n\n.search_text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  padding-left: 10px;\n}\n\n.staff-btn-toggle {\n  margin: 8px 2px 0px 8px;\n}\n\n.b2c-list-user-table {\n  width: 100%;\n}\n\n.filter_btn_userList {\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\n.icon {\n  opacity: 1;\n  z-index: 100;\n}\n\n.icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.icon .bookings_input__placeholder-icon.cal {\n  width: 15px;\n  margin-top: 10px;\n}\n\n.icon .bookings_input__placeholder-icon.call {\n  width: 10px;\n  margin-top: 10px;\n}\n\n.user-loader {\n  min-height: 400px;\n  background-color: white !important;\n}\n\n.ui.form .fields.search-field-section {\n  margin-bottom: 16px;\n}\n\n.user-table-list .bookings_btn-panel {\n  text-align: right;\n  position: relative;\n  top: -30px;\n  margin-bottom: 12px;\n}\n\nform .search-field-section {\n  margin: 0 auto;\n  width: 60%;\n}\n\n.search-section {\n  padding: 0px 30px;\n  text-align: right;\n}\n\n.search-section .eight.wide.field .main_head {\n  text-align: left;\n  font-weight: 500 !important;\n  font-size: 13px;\n  line-height: 15px;\n  color: #1B1F26;\n}\n\n@media (max-width: 1440px) {\n  .result-block {\n    width: auto;\n    margin: 24px;\n  }\n\n  .user {\n    padding-left: 24px;\n  }\n\n  .save-btn-block {\n    width: auto;\n    right: -58px;\n  }\n\n  .ui.export.button {\n    margin-right: 0px;\n  }\n}\n\n@media (max-width: 1280px) {\n  .result-block {\n    margin: 20px;\n  }\n\n  .user {\n    padding-left: 20px;\n  }\n\n  .save-btn-block {\n    width: auto;\n    right: -48px;\n  }\n\n  form .search-field-section {\n    width: 82%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3VzZXItcm9sZS1tYW5hZ2VtZW50L2xpc3QtdXNlci9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHVzZXItcm9sZS1tYW5hZ2VtZW50XFxsaXN0LXVzZXJcXGxpc3QtdXNlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L3VzZXItcm9sZS1tYW5hZ2VtZW50L2xpc3QtdXNlci9saXN0LXVzZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFBO0FDQUo7O0FERUE7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBOztFQUVJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGtDQUFBO0VBQ0Esd0NBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFFSSx5QkFBQTtBQ0FKOztBREdBOztFQUVJLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlGQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksdUJBQUE7QUNBSjs7QURHQTtFQUNJLFdBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpRkFBQTtBQ0FKOztBREdBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUNBSjs7QURDSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0FDQ1I7O0FEQVE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNFWjs7QURBUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ0VaOztBREdBO0VBQ0ksaUJBQUE7RUFDQSxrQ0FBQTtBQ0FKOztBREdBO0VBQ0ksbUJBQUE7QUNBSjs7QURJSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUNEUjs7QURLQTtFQUNJLGNBQUE7RUFDQSxVQUFBO0FDRko7O0FES0E7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDRko7O0FER0k7RUFDSSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0RSOztBREtBO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQ0ZOOztFRElFO0lBQ0ksa0JBQUE7RUNETjs7RURHRTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VDQU47O0VERUU7SUFDSSxpQkFBQTtFQ0NOO0FBQ0Y7O0FERUE7RUFDSTtJQUNJLFlBQUE7RUNBTjs7RURFRTtJQUNJLGtCQUFBO0VDQ047O0VEQ0U7SUFDSSxXQUFBO0lBQ0EsWUFBQTtFQ0VOOztFREFFO0lBQ0ksVUFBQTtFQ0dOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvdXNlci1yb2xlLW1hbmFnZW1lbnQvbGlzdC11c2VyL2xpc3QtdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlci1zZWdtZW50IHtcclxuICAgIC8vIG1hcmdpbjogMHB4IDIwcHggMHB4IDE1cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4udXNlcl90aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgIGNvbG9yOiAjMTgxQjIwO1xyXG59XHJcbiAgXHJcbi51c2Vyc19saXN0IHtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMHB4IDQwcHg7XHJcbn1cclxuXHJcbi5iMmJfdGl0bGUsXHJcbi5zdGFmZl9saXN0IHtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuXHJcbi51aS5oZWFkZXIge1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQubWVudT4uaXRlbSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjg1NzE0MjlyZW0gMCAwIDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmlsdGVyX2xpc3Qge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi51cGxvYWRfYWRkX3ByaW50IHtcclxuICAgIC8vIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgbWFyZ2luOiAxMnB4IDBweCAwcHggMTJweDtcclxufVxyXG5cclxuLnByaW50X2ltZyxcclxuLmFkZFVzZXJfaW1nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG59XHJcblxyXG4uc2VhcmNoX2J0biB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdiMTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRkY7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2VhcmNoX3RleHQge1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5zdGFmZi1idG4tdG9nZ2xlIHtcclxuICAgIG1hcmdpbjogOHB4IDJweCAwcHggOHB4O1xyXG59XHJcblxyXG4uYjJjLWxpc3QtdXNlci10YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZpbHRlcl9idG5fdXNlckxpc3Qge1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgICYuY2FsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuY2FsbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnVzZXItbG9hZGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLmZvcm0gLmZpZWxkcy5zZWFyY2gtZmllbGQtc2VjdGlvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4udXNlci10YWJsZS1saXN0IHtcclxuICAgIC5ib29raW5nc19idG4tcGFuZWwge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IC0zMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZvcm0gLnNlYXJjaC1maWVsZC1zZWN0aW9uIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuLnNlYXJjaC1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDBweCAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAuZWlnaHQud2lkZS5maWVsZCAubWFpbl9oZWFkIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgY29sb3I6ICMxQjFGMjY7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIC5yZXN1bHQtYmxvY2sge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogMjRweDtcclxuICAgIH1cclxuICAgIC51c2VyIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiAgICB9XHJcbiAgICAuc2F2ZS1idG4tYmxvY2sge1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIHJpZ2h0OiAtNThweDtcclxuICAgIH1cclxuICAgIC51aS5leHBvcnQuYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgLnJlc3VsdC1ibG9jayB7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLnVzZXIge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgIH1cclxuICAgIC5zYXZlLWJ0bi1ibG9jayB7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgcmlnaHQ6IC00OHB4O1xyXG4gICAgfVxyXG4gICAgZm9ybSAuc2VhcmNoLWZpZWxkLXNlY3Rpb24ge1xyXG4gICAgICAgIHdpZHRoOiA4MiU7XHJcbiAgICB9XHJcbn0iLCIub3V0ZXItc2VnbWVudCB7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4udXNlcl90aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGNvbG9yOiAjMTgxQjIwO1xufVxuXG4udXNlcnNfbGlzdCB7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogMHB4IDQwcHg7XG59XG5cbi5iMmJfdGl0bGUsXG4uc3RhZmZfbGlzdCB7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLnVpLmhlYWRlciB7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbn1cblxuLnVpLnRvcC5hdHRhY2hlZC5tZW51ID4gLml0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwLjI4NTcxNDI5cmVtIDAgMCAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xufVxuXG4uZmlsdGVyX2xpc3Qge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG59XG5cbi51cGxvYWRfYWRkX3ByaW50IHtcbiAgbWFyZ2luOiAxMnB4IDBweCAwcHggMTJweDtcbn1cblxuLnByaW50X2ltZyxcbi5hZGRVc2VyX2ltZyB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuXG4uc2VhcmNoX2J0biB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdiMTtcbiAgYm9yZGVyOiAxcHggc29saWQgI0ZGRjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zZWFyY2hfdGV4dCB7XG4gIGNvbG9yOiAjRkZGO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uc3RhZmYtYnRuLXRvZ2dsZSB7XG4gIG1hcmdpbjogOHB4IDJweCAwcHggOHB4O1xufVxuXG4uYjJjLWxpc3QtdXNlci10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmlsdGVyX2J0bl91c2VyTGlzdCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG4uaWNvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDEwMDtcbn1cbi5pY29uIC5ib29raW5nc19pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHdpZHRoOiAyNHB4O1xuICBtYXJnaW4tdG9wOiA2cHg7XG59XG4uaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsIHtcbiAgd2lkdGg6IDE1cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsbCB7XG4gIHdpZHRoOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4udXNlci1sb2FkZXIge1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLnVpLmZvcm0gLmZpZWxkcy5zZWFyY2gtZmllbGQtc2VjdGlvbiB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi51c2VyLXRhYmxlLWxpc3QgLmJvb2tpbmdzX2J0bi1wYW5lbCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbmZvcm0gLnNlYXJjaC1maWVsZC1zZWN0aW9uIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA2MCU7XG59XG5cbi5zZWFyY2gtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDBweCAzMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5zZWFyY2gtc2VjdGlvbiAuZWlnaHQud2lkZS5maWVsZCAubWFpbl9oZWFkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBjb2xvcjogIzFCMUYyNjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICAucmVzdWx0LWJsb2NrIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBtYXJnaW46IDI0cHg7XG4gIH1cblxuICAudXNlciB7XG4gICAgcGFkZGluZy1sZWZ0OiAyNHB4O1xuICB9XG5cbiAgLnNhdmUtYnRuLWJsb2NrIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICByaWdodDogLTU4cHg7XG4gIH1cblxuICAudWkuZXhwb3J0LmJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMjgwcHgpIHtcbiAgLnJlc3VsdC1ibG9jayB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICB9XG5cbiAgLnVzZXIge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgfVxuXG4gIC5zYXZlLWJ0bi1ibG9jayB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgcmlnaHQ6IC00OHB4O1xuICB9XG5cbiAgZm9ybSAuc2VhcmNoLWZpZWxkLXNlY3Rpb24ge1xuICAgIHdpZHRoOiA4MiU7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/layout/user-role-management/list-user/list-user.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/layout/user-role-management/list-user/list-user.component.ts ***!
  \******************************************************************************/
/*! exports provided: ListUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUserComponent", function() { return ListUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_user_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/user-role.service */ "./src/app/shared/services/user-role.service.ts");
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/common.service */ "./src/app/shared/services/common.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/excel.service */ "./src/app/shared/services/excel.service.ts");









let ListUserComponent = class ListUserComponent {
    constructor(UserRoleService, commonService, router, fb, toastr, excelService) {
        this.UserRoleService = UserRoleService;
        this.commonService = commonService;
        this.router = router;
        this.fb = fb;
        this.toastr = toastr;
        this.excelService = excelService;
        this.userLoader = false;
        this.limit = 10;
        this.page = 0;
        this.users = [];
        this.organizations = [];
        this.totalUsers = 0;
        this.pages = 0;
        this.toggleObj = {};
        this.filterParams = {
            page: this.page,
            roleType: '',
            organisation_id: '',
            usernameAndAgentCode: ''
        };
        this.filterForm = this.fb.group({ organisation_id: ['all'], usernameAndAgentCode: [''] });
    }
    ngOnInit() {
        this.getUsers(this.filterParams);
        this.organizationList();
    }
    // get organization list
    organizationList() {
        this.commonService.getOrganizationList().subscribe((result) => {
            this.organizations = result.listData.filter(data => data.name != null);
            this.organizations = this.organizations.filter(data => data.name !== "");
        });
    }
    // Hit on data filtering
    filterUserRoles() {
        let filterArg = {
            page: this.page,
            roleType: String,
            organization: String,
            keyword: String,
            awatingApp: Boolean
        };
        this.getUsers(filterArg);
    }
    // get User role list
    getUsers(searchData) {
        this.userLoader = true;
        this.UserRoleService.getList(searchData).subscribe((result) => {
            if (result.type != 'error') {
                result.users.map(user => {
                    if (user.admin) {
                        user.role = 'Admin';
                    }
                    else if (user.agent) {
                        user.role = 'Agent';
                    }
                    else if (user.corporate) {
                        user.role = 'Corporate';
                    }
                    user.name = user.first_name + ' ' + user.last_name;
                });
                this.userLoader = false;
                this.users = result.users;
                this.totalUsers = result.totalUsers;
                this.page = result.page;
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Oops!', `There was an error performing the request. please try again.`, 'error');
            }
        });
    }
    resetFilter(form) {
        // filter results by organization
    }
    filterFormSubmit() {
        this.filterParams.page = 0;
        this.filterParams.organisation_id = this.filterForm.value.organisation_id;
        const usernameAndAgentCode = this.filterForm.value.usernameAndAgentCode.trim();
        this.filterParams.usernameAndAgentCode = usernameAndAgentCode;
        this.getUsers(this.filterParams);
    }
    editUser(valObj) {
        this.router.navigate(['user-role-management/edit-user/' + valObj.users_id]);
    }
    viewUser(valObj) {
        this.router.navigate(['user-role-management/view-user/' + valObj.users_id]);
    }
    deleteUser(valObj) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                // delete record api
                this.UserRoleService.deleteUser(valObj.users_id).subscribe((result) => {
                    if (result.type == 'error') {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Oops!', `${result.msg}`, 'error');
                    }
                    else {
                        // delete this.users[valObj.users_id];
                        // console.log(this.users[valObj.users_id])
                        this.users.filter(function (user, i, users) {
                            if (parseInt(user['users_id']) === parseInt(valObj.users_id)) {
                                users.splice(i, 1);
                            }
                        });
                        sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Deleted!', `${result.msg}`, 'success');
                    }
                });
                this.getUsers(this.filterParams);
            }
        });
    }
    pageCallback(event) {
        let offset = event.offset;
        this.filterParams.page = offset;
        this.getUsers(this.filterParams);
    }
    exportData() {
        this.UserRoleService.exportUser(this.filterForm.value).subscribe((result) => {
            if (result.type != 'error') {
                let exportResult = result.data;
                this.excelService.exportAsExcelFile(exportResult, 'business_users');
            }
            else {
                this.toastr.error(`${result.msg}`, `${result.msg}`, {
                    timeOut: 10000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                });
            }
        });
    }
    filterFormReset() {
        this.filterForm.patchValue({
            usernameAndAgentCode: '',
            organisation_id: 'all'
        });
        $('.ui.dropdown').dropdown();
    }
    ngAfterViewInit() {
        $(document).ready(function () {
            $('.menu .item').tab();
            $('.ui.checkbox').checkbox();
            $('.ui.dropdown').dropdown();
        });
    }
    statusToggle(data) {
        this.toggleObj.id = data.users_id;
        this.toggleObj.status = data.is_active;
        this.toggleObj.table = "users";
        this.UserRoleService.onStatusToggle(this.toggleObj)
            .subscribe((res) => {
            if (res.status == 200) {
                this.getUsers(this.filterParams);
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
};
ListUserComponent.ctorParameters = () => [
    { type: src_app_shared_services_user_role_service__WEBPACK_IMPORTED_MODULE_2__["UserRoleService"] },
    { type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] },
    { type: src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_8__["ExcelService"] }
];
ListUserComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-user',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./list-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user-role-management/list-user/list-user.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./list-user.component.scss */ "./src/app/layout/user-role-management/list-user/list-user.component.scss")).default]
    })
], ListUserComponent);



/***/ }),

/***/ "./src/app/layout/user-role-management/list-user/list-user.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/layout/user-role-management/list-user/list-user.module.ts ***!
  \***************************************************************************/
/*! exports provided: ListUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListUserModule", function() { return ListUserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _list_user_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list-user-routing.module */ "./src/app/layout/user-role-management/list-user/list-user-routing.module.ts");
/* harmony import */ var _list_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-user.component */ "./src/app/layout/user-role-management/list-user/list-user.component.ts");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-moment */ "./node_modules/ngx-moment/__ivy_ngcc__/fesm2015/ngx-moment.js");
/* harmony import */ var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/excel.service */ "./src/app/shared/services/excel.service.ts");
/* harmony import */ var src_app_access_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/access.module */ "./src/app/access.module.ts");










let ListUserModule = class ListUserModule {
};
ListUserModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_list_user_component__WEBPACK_IMPORTED_MODULE_5__["ListUserComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _list_user_routing_module__WEBPACK_IMPORTED_MODULE_4__["ListUserRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_6__["NgxDatatableModule"],
            ngx_moment__WEBPACK_IMPORTED_MODULE_7__["MomentModule"],
            src_app_access_module__WEBPACK_IMPORTED_MODULE_9__["ApplicationAccess"]
        ],
        providers: [src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_8__["ExcelService"]]
    })
], ListUserModule);



/***/ })

}]);
//# sourceMappingURL=list-user-list-user-module-es2016.js.map