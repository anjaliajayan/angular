(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roles-roles-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/roles/create-role/create-role.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/roles/create-role/create-role.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3><span class=\"update-header\">Create Role</span></h3>\r\n\r\n<div class=\"ui fluid container\">\r\n    <div class=\"eight wide field\">    </div>\r\n    <div class=\"eight wide field bookings_btn-panel text-right\">\r\n        <a class=\"ui primary button roleActionButton\" routerLink=\"../\">\r\n            <span class=\"tourCode_text\">List Roles</span>\r\n        </a>\r\n    </div>\r\n    <div class=\"outer-basic\">\r\n        \r\n        <div class=\"outer-basicForm\">\r\n            <div class=\"ui form\">\r\n\r\n            <div class=\"email-list b2c-list-user-table\">\r\n\r\n                <form [formGroup]=\"rolePermissionForm\" (ngSubmit)=\"btnSubmitHandler()\">\r\n\r\n                    <div class=\"ui grid\">\r\n\r\n                        <div class=\"four wide column\">\r\n                            <div class=\"field\">\r\n                                <label>Role Name <small *ngIf=\"isSubmitted && gfc.name.errors \">*</small></label>\r\n                                <input type=\"text\" placeholder=\"Role Name\" formControlName=\"name\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"four wide column\">\r\n                            <div class=\"field\">\r\n                                <label>Roel Code <small *ngIf=\"isSubmitted && gfc.code.errors \">*</small></label>\r\n                                <input type=\"text\" placeholder=\"Role Name\" formControlName=\"code\">\r\n                            </div>\r\n                        </div>\r\n                        \r\n                        <div class=\"sixteen wide column\" *ngFor=\"let allPermission of allPermissions; let i = index;\">\r\n                            <h3 class=\"ui header\">{{ allPermission.name }}</h3>\r\n\r\n                            <div class=\"ui card\" style=\"width:100%;\">\r\n                                <div class=\"content\">\r\n                                    <div class=\"description\">\r\n                                        <div class=\"ui grid\">\r\n                                            <div class=\"three wide column\" *ngFor=\"let permissionKey of allPermission.permissions; let j = index;\">\r\n                                                <div class=\"ui checkbox\">\r\n                                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"check-{{ i }}{{ j }}\" [formControlName]=\"permissionKey.allow[0]\">\r\n                                                    <label for=\"check-{{ i }}{{ j }}\">{{ permissionKey.name }}</label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                      </div>\r\n            \r\n                    <div class=\"mt-2 text-right\">\r\n                        <button type=\"submit\" class=\"ui primary button\">Create Role</button>\r\n                    </div>\r\n            \r\n                </form>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/roles/edit-role/edit-role.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/roles/edit-role/edit-role.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3><span class=\"update-header\">Update Role</span></h3>\r\n\r\n<div class=\"ui fluid container\">\r\n    <div class=\"eight wide field\">    </div>\r\n    <div class=\"eight wide field bookings_btn-panel text-right\">\r\n        <a class=\"ui primary button roleActionButton\" routerLink=\"../../list\">\r\n            <span class=\"tourCode_text\">List Roles</span>\r\n        </a>\r\n    </div>\r\n    <div class=\"outer-basic\">\r\n        \r\n        <div class=\"outer-basicForm\">\r\n            <div class=\"ui form\">\r\n\r\n            <div class=\"email-list b2c-list-user-table\">\r\n\r\n                <form [formGroup]=\"rolePermissionForm\" (ngSubmit)=\"btnSubmitHandler()\">\r\n\r\n                    <div class=\"ui grid\">\r\n\r\n                        <div class=\"four wide column\">\r\n                            <div class=\"field\">\r\n                                <label>Role Name <small *ngIf=\"isSubmitted && gfc.name.errors \">*</small></label>\r\n                                <input type=\"text\" placeholder=\"Role Name\" formControlName=\"name\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"four wide column\">\r\n                            <div class=\"field\">\r\n                                <label>Roel Code <small *ngIf=\"isSubmitted && gfc.code.errors \">*</small></label>\r\n                                <input type=\"text\" placeholder=\"Role Name\" formControlName=\"code\">\r\n                            </div>\r\n                        </div>\r\n                        \r\n                        <div class=\"sixteen wide column\" *ngFor=\"let allPermission of allPermissions; let i = index;\">\r\n                            <h3 class=\"ui header\">{{ allPermission.name }}</h3>\r\n\r\n                            <div class=\"ui card\" style=\"width:100%;\">\r\n                                <div class=\"content\">\r\n                                    <div class=\"description\">\r\n                                        <div class=\"ui grid\">\r\n                                            <div class=\"three wide column\" *ngFor=\"let permissionKey of allPermission.permissions; let j = index;\">\r\n                                                <div class=\"ui checkbox\">\r\n                                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"check-{{ i }}{{ j }}\" [formControlName]=\"permissionKey.allow[0]\">\r\n                                                    <label for=\"check-{{ i }}{{ j }}\">{{ permissionKey.name }}</label>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                      </div>\r\n            \r\n                    <div class=\"mt-2 text-right\">\r\n                        <button type=\"submit\" class=\"ui primary button\">Update Role</button>\r\n                    </div>\r\n            \r\n                </form>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/roles/roles.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/roles/roles.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ngx-ui-loader></ngx-ui-loader>\r\n<div class=\"outer-segment animated fadeIn\">\r\n    <div class=\"markup_list\">\r\n        <div class=\"ui grid\">\r\n            <div class=\"sixteen wide column row\">\r\n                <div class=\"eight wide column\">\r\n                    <h3 class=\"markup_title\">Roles </h3>\r\n                </div>\r\n                <div class=\"eight wide column text-right bookings_btn-panel\">\r\n                    <a class=\"ui primary button roleActionButton\" routerLink=\"create\">\r\n                        <span class=\"tourCode_text\">Create Role</span>\r\n                    </a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n <div class=\"ui bottom attached active tab segment tabContent-block\" data-tab=\"first\">\r\n        <div class=\"result-block\">\r\n            \r\n            <table class=\"ui celled table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Code</th>\r\n                        <th>Role</th>\r\n                        <th width=\"220\">&nbsp;</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n\r\n                    <tr *ngFor=\"let role of roles;\">\r\n                    <td data-label=\"Code\">{{ role.code }}</td>\r\n                    <td data-label=\"Name\">{{ role.name }}</td>\r\n                    \r\n                    <td data-label=\"Name\" class=\"text-center\">\r\n                        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\r\n                            <a class=\"ui primary button\"  [routerLink]=\"['edit', role.role_id]\" routerLinkActive=\"router-link-active\"><i class=\"fa fa-edit\"></i></a>\r\n                            <button (click)=\"delete(role.role_id)\" class=\"ui red button\"><i class=\"fa fa-trash\"></i></button>\r\n                        </div>\r\n                    </td>\r\n                    </tr>\r\n\r\n                </tbody>\r\n        \r\n            </table>\r\n            \r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/layout/setup-configuration/roles/create-role/create-role.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/roles/create-role/create-role.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".update-header {\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n  margin-left: 30px;\n}\n\n.ui.fluid.container {\n  padding: 25px;\n}\n\n.outer-basic {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n}\n\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n  padding: 30px 15px;\n}\n\n.basic-header {\n  font-family: \"Roboto\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vcm9sZXMvY3JlYXRlLXJvbGUvRTpcXEJlbGFsXFxwcm9qZWN0c1xcYWdncmVnYXRvci1mcm9udGVuZC9zcmNcXGFwcFxcbGF5b3V0XFxzZXR1cC1jb25maWd1cmF0aW9uXFxyb2xlc1xcY3JlYXRlLXJvbGVcXGNyZWF0ZS1yb2xlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvc2V0dXAtY29uZmlndXJhdGlvbi9yb2xlcy9jcmVhdGUtcm9sZS9jcmVhdGUtcm9sZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0FDQ0o7O0FERUE7RUFDSSxzQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFQTtFQUNJLGlDQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvc2V0dXAtY29uZmlndXJhdGlvbi9yb2xlcy9jcmVhdGUtcm9sZS9jcmVhdGUtcm9sZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGRhdGUtaGVhZGVyIHtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi51aS5mbHVpZC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMjVweDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpY0Zvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAzMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5iYXNpYy1oZWFkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59IiwiLnVwZGF0ZS1oZWFkZXIge1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi51aS5mbHVpZC5jb250YWluZXIge1xuICBwYWRkaW5nOiAyNXB4O1xufVxuXG4ub3V0ZXItYmFzaWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLm91dGVyLWJhc2ljRm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDMwcHggMTVweDtcbn1cblxuLmJhc2ljLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/layout/setup-configuration/roles/create-role/create-role.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/roles/create-role/create-role.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CreateRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRoleComponent", function() { return CreateRoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _permissions_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../permissions.json */ "./src/app/layout/setup-configuration/roles/permissions.json");
var _permissions_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../permissions.json */ "./src/app/layout/setup-configuration/roles/permissions.json", 1);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_setup_config_roles_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/setup-config/roles-config.service */ "./src/app/shared/services/setup-config/roles-config.service.ts");







let CreateRoleComponent = class CreateRoleComponent {
    constructor(_fb, toastr, roleService, router) {
        this._fb = _fb;
        this.toastr = toastr;
        this.roleService = roleService;
        this.router = router;
        this.allPermissions = _permissions_json__WEBPACK_IMPORTED_MODULE_4__;
        this.isSubmitted = false;
    }
    ngOnInit() {
        this.createRolePermissionForm();
    }
    btnSubmitHandler() {
        this.isSubmitted = true;
        if (this.rolePermissionForm.invalid) {
            this.toasterMessage('error', 'Role Name & code is required.');
            return;
        }
        const mapped = Object.keys(this.gfc).map(key => ({ name: key, data: this.gfc[key], endpoint: this.gfc[key].value }));
        let prmsn = [];
        mapped.forEach(cp => {
            const v = !!cp.data.value;
            const k = cp.name;
            if (k == 'name' || k == 'code') { }
            else {
                prmsn.push({ [k]: v });
            }
        });
        const data = {
            name: this.gfc.name.value,
            code: this.gfc.code.value,
            permissions: prmsn
        };
        this.roleService.addRole(data).subscribe((r) => {
            if (r.status) {
                this.toasterMessage('success', r.message);
                this.rolePermissionForm.reset();
                this.router.navigateByUrl('setup-configuration/roles');
            }
            else {
                this.toasterMessage('error', r.message);
            }
        });
    }
    createRolePermissionForm() {
        this.rolePermissionForm = this._fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            code: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.createPermissions();
    }
    createPermissions() {
        for (let formModule of this.allPermissions) {
            for (let formModuleKey of formModule.permissions) {
                const dsKey = formModuleKey.allow[0];
                this.rolePermissionForm.addControl(dsKey, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false));
            }
        }
    }
    get gfc() { return this.rolePermissionForm.controls; }
    toasterMessage(type = 'success', message) {
        if (type == 'success') {
            this.toastr.success(message, 'Success !', {
                disableTimeOut: false,
                progressBar: false,
                positionClass: 'toast-bottom-right'
            });
        }
        else if (type == 'error') {
            this.toastr.error(message, 'Server Error !', {
                disableTimeOut: false,
                progressBar: false,
                positionClass: 'toast-bottom-right'
            });
        }
        else {
            this.toastr.info(message, 'Information !', {
                disableTimeOut: false,
                progressBar: false,
                positionClass: 'toast-bottom-right'
            });
        }
    }
};
CreateRoleComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: src_app_shared_services_setup_config_roles_config_service__WEBPACK_IMPORTED_MODULE_6__["SetupConfigRoleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CreateRoleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-role',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./create-role.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/roles/create-role/create-role.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./create-role.component.scss */ "./src/app/layout/setup-configuration/roles/create-role/create-role.component.scss")).default]
    })
], CreateRoleComponent);



/***/ }),

/***/ "./src/app/layout/setup-configuration/roles/edit-role/edit-role.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/roles/edit-role/edit-role.component.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".update-header {\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n  margin-left: 30px;\n}\n\n.ui.fluid.container {\n  padding: 25px;\n}\n\n.outer-basic {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n}\n\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n  padding: 30px 15px;\n}\n\n.basic-header {\n  font-family: \"Roboto\", sans-serif;\n}\n\n.ui.primary.button.roleActionButton {\n  position: relative;\n  top: -40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vcm9sZXMvZWRpdC1yb2xlL0U6XFxCZWxhbFxccHJvamVjdHNcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcc2V0dXAtY29uZmlndXJhdGlvblxccm9sZXNcXGVkaXQtcm9sZVxcZWRpdC1yb2xlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvc2V0dXAtY29uZmlndXJhdGlvbi9yb2xlcy9lZGl0LXJvbGUvZWRpdC1yb2xlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURFQTtFQUNJLHNCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksaUNBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vcm9sZXMvZWRpdC1yb2xlL2VkaXQtcm9sZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGRhdGUtaGVhZGVyIHtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi51aS5mbHVpZC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMjVweDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpY0Zvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAzMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5iYXNpYy1oZWFkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4udWkucHJpbWFyeS5idXR0b24ucm9sZUFjdGlvbkJ1dHRvbntcclxuICAgIHBvc2l0aW9uIDpyZWxhdGl2ZTtcclxuICAgIHRvcDotNDBweDtcclxufSIsIi51cGRhdGUtaGVhZGVyIHtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1hcmdpbi1sZWZ0OiAzMHB4O1xufVxuXG4udWkuZmx1aWQuY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjVweDtcbn1cblxuLm91dGVyLWJhc2ljIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgYm94LXNoYWRvdzogM3B4IDFweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5vdXRlci1iYXNpY0Zvcm0ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAzMHB4IDE1cHg7XG59XG5cbi5iYXNpYy1oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLnVpLnByaW1hcnkuYnV0dG9uLnJvbGVBY3Rpb25CdXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTQwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/layout/setup-configuration/roles/edit-role/edit-role.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/roles/edit-role/edit-role.component.ts ***!
  \***********************************************************************************/
/*! exports provided: EditRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRoleComponent", function() { return EditRoleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _permissions_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../permissions.json */ "./src/app/layout/setup-configuration/roles/permissions.json");
var _permissions_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../permissions.json */ "./src/app/layout/setup-configuration/roles/permissions.json", 1);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_setup_config_roles_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/setup-config/roles-config.service */ "./src/app/shared/services/setup-config/roles-config.service.ts");







let EditRoleComponent = class EditRoleComponent {
    constructor(_fb, toastr, roleService, router, activatedRole) {
        this._fb = _fb;
        this.toastr = toastr;
        this.roleService = roleService;
        this.router = router;
        this.activatedRole = activatedRole;
        this.allPermissions = _permissions_json__WEBPACK_IMPORTED_MODULE_4__;
        this.isSubmitted = false;
        this.selectedRoleId = null;
        this.selectedRole = null;
    }
    ngOnInit() {
        this.createRolePermissionForm(null, null, null);
        this.selectedRoleId = this.activatedRole.snapshot.params.id;
        this.roleService.getRole(this.selectedRoleId).subscribe((r) => {
            if (r.status) {
                this.selectedRole = r.data;
                this.createRolePermissionForm(r.data.code, r.data.name, r.data.permissions);
            }
            else {
                this.toasterMessage('error', 'Role Name & code is required.');
            }
        });
    }
    btnSubmitHandler() {
        this.isSubmitted = true;
        if (this.rolePermissionForm.invalid) {
            this.toasterMessage('error', 'Role Name & code is required.');
            return;
        }
        const mapped = Object.keys(this.gfc).map(key => ({ name: key, data: this.gfc[key], endpoint: this.gfc[key].value }));
        let prmsn = [];
        mapped.forEach(cp => {
            const v = !!cp.data.value;
            const k = cp.name;
            if (k == 'name' || k == 'code') { }
            else {
                prmsn.push({ [k]: v });
            }
        });
        const data = {
            name: this.gfc.name.value,
            code: this.gfc.code.value,
            permissions: prmsn
        };
        this.roleService.updateRole(this.selectedRoleId, data).subscribe((r) => {
            if (r.status) {
                this.toasterMessage('success', r.msg);
                this.rolePermissionForm.reset();
                this.router.navigateByUrl('setup-configuration/roles');
            }
            else {
                this.toasterMessage('error', r.message);
            }
        });
    }
    createRolePermissionForm(code, name, permissions) {
        this.rolePermissionForm = this._fb.group({
            name: [name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            code: [code, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.createPermissions(permissions);
    }
    createPermissions(permissions) {
        permissions = JSON.parse(permissions);
        for (let formModule of this.allPermissions) {
            for (let formModuleKey of formModule.permissions) {
                let isAllowed = false;
                const dsKey = formModuleKey.allow[0];
                if (permissions) {
                    isAllowed = permissions.filter(elem => elem.hasOwnProperty(dsKey))[0] || false;
                }
                this.rolePermissionForm.addControl(dsKey, new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](isAllowed[dsKey]));
            }
        }
    }
    get gfc() { return this.rolePermissionForm.controls; }
    toasterMessage(type = 'success', message) {
        if (type == 'success') {
            this.toastr.success(message, 'Success !', {
                disableTimeOut: false,
                progressBar: false,
                positionClass: 'toast-bottom-right'
            });
        }
        else if (type == 'error') {
            this.toastr.error(message, 'Server Error !', {
                disableTimeOut: false,
                progressBar: false,
                positionClass: 'toast-bottom-right'
            });
        }
        else {
            this.toastr.info(message, 'Information !', {
                disableTimeOut: false,
                progressBar: false,
                positionClass: 'toast-bottom-right'
            });
        }
    }
};
EditRoleComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] },
    { type: src_app_shared_services_setup_config_roles_config_service__WEBPACK_IMPORTED_MODULE_6__["SetupConfigRoleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
EditRoleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-role',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-role.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/roles/edit-role/edit-role.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-role.component.scss */ "./src/app/layout/setup-configuration/roles/edit-role/edit-role.component.scss")).default]
    })
], EditRoleComponent);



/***/ }),

/***/ "./src/app/layout/setup-configuration/roles/permissions.json":
/*!*******************************************************************!*\
  !*** ./src/app/layout/setup-configuration/roles/permissions.json ***!
  \*******************************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"name\":\"Users\",\"permissions\":[{\"name\":\"List Users\",\"allow\":[\"listUsers\",\"users\"]},{\"name\":\"Create New User\",\"allow\":[\"create-new-user\",\"users/new\"]},{\"name\":\"Update User\",\"allow\":[\"update-user\",\"users\"]},{\"name\":\"Fetch user information\",\"allow\":[\"fetch-new-user\",\"users\"]},{\"name\":\"Update My Profile\",\"allow\":[\"logedin-user-info\",\"user-role-management/update-profile\"]},{\"name\":\"Permissions\",\"allow\":[\"fetch-new-user\",\"users/permissions\"]}]},{\"name\":\"Point of Sale Management\",\"permissions\":[{\"name\":\"List All POS\",\"allow\":[\"organization/pos-list\",\"point-sales-management/list-point-sale\"]},{\"name\":\"Add Point of Sale\",\"allow\":[\"organization/create-agency\",\"point-sales-management/add-point-sale/pos-info\"]},{\"name\":\"Update Point of Sale\",\"allow\":[\"organization/update-agency\",\"point-sales-management/add-point-sale/pos-edit\"]},{\"name\":\"Fetch POS Information\",\"allow\":[\"organization/fetch-pos\",\"btn-edit\"]},{\"name\":\"Delete POS\",\"allow\":[\"organization/delete-pos\",\"btn-delete\"]},{\"name\":\"List Registrations\",\"allow\":[\"registration-list\",\"point-sales-management/registration\"]}]},{\"name\":\"Setup/Configurations\",\"permissions\":[{\"name\":\"List All Group/Seasonality\",\"allow\":[\"fetch-all-sales\",\"setup-configuration/markup-configuration\"]},{\"name\":\"Add/Udate Group/Seasonality\",\"allow\":[\"add-sale\",\"setup-configuration/markup-configuration\"]},{\"name\":\"Search Group/Seasonality\",\"allow\":[\"search-sales\",\"setup-configuration/markup-configuration\"]},{\"name\":\"Delete Group/Seasonality\",\"allow\":[\"delete-sale\",\"setup-configuration/markup-configuration\"]},{\"name\":\"List All Markup Rules\",\"allow\":[\"fetch-all-markups\",\"setup-configuration/markup-configuration\"]},{\"name\":\"Add/Udate Markup Rules\",\"allow\":[\"add-markup\",\"setup-configuration/markup-configuration\"]},{\"name\":\"Search Markup Rules\",\"allow\":[\"search-markups\",\"setup-configuration/markup-configuration\"]},{\"name\":\"Delete Markup Rules\",\"allow\":[\"delete-markup\",\"setup-configuration/markup-configuration\"]},{\"name\":\"List All Roles\",\"allow\":[\"roles/list\",\"setup-configuration/roles\"]},{\"name\":\"Add/Udate Roles\",\"allow\":[\"roles/add\",\"setup-configuration/roles\"]},{\"name\":\"Fetch Roles Information\",\"allow\":[\"roles/get\",\"setup-configuration/roles\"]},{\"name\":\"Delete Roles\",\"allow\":[\"roles/delete\",\"setup-configuration/roles\"]},{\"name\":\"List All Tour Codes\",\"allow\":[\"fetch-all-tourcodes\",\"setup-configuration/airline-deals\"]},{\"name\":\"Add Tour Code\",\"allow\":[\"create-new-tourcode\",\"setup-configuration/airline-deals\"]},{\"name\":\"Udate Tour Code\",\"allow\":[\"update-tourcode\",\"setup-configuration/airline-deals\"]},{\"name\":\"Fetch Tour Code Information\",\"allow\":[\"fetch-tourcode\",\"setup-configuration/airline-deals\"]},{\"name\":\"Delete Tour Code\",\"allow\":[\"remove-tourcode\",\"setup-configuration/airline-deals\"]},{\"name\":\"List All Tour Commissions\",\"allow\":[\"fetch-all-commissions\",\"setup-configuration/airline-deals\"]},{\"name\":\"Add Tour Commission\",\"allow\":[\"create-new-commission\",\"setup-configuration/airline-deals\"]},{\"name\":\"Udate Tour Commission\",\"allow\":[\"update-commission\",\"setup-configuration/airline-deals\"]},{\"name\":\"Fetch Tour Commission Information\",\"allow\":[\"fetch-commission\",\"setup-configuration/airline-deals\"]},{\"name\":\"Delete Tour Commission\",\"allow\":[\"remove-commission\",\"setup-configuration/airline-deals\"]},{\"name\":\"List All Tour Routes\",\"allow\":[\"fetch-all-routes\",\"setup-configuration/airline-deals\"]},{\"name\":\"Add Tour Route\",\"allow\":[\"create-new-routes\",\"setup-configuration/airline-deals\"]},{\"name\":\"Udate Tour Route\",\"allow\":[\"update-routes\",\"setup-configuration/airline-deals\"]},{\"name\":\"Fetch Tour Route Information\",\"allow\":[\"fetch-routes\",\"setup-configuration/airline-deals\"]},{\"name\":\"Delete Tour Route\",\"allow\":[\"remove-routes\",\"setup-configuration/airline-deals\"]},{\"name\":\"List All Suppliers\",\"allow\":[\"read-all-supplier\",\"setup-configuration/supplier\"]},{\"name\":\"Udate Supplier\",\"allow\":[\"update-supplier\",\"setup-configuration/edit-supplier\"]},{\"name\":\"List All Currencies\",\"allow\":[\"fetch-all-currency\",\"setup-configuration/currency-configuration\"]},{\"name\":\"Add Currency\",\"allow\":[\"create-new-currency\",\"setup-configuration/currency-configuration\"]},{\"name\":\"Udate Currency\",\"allow\":[\"update-currency\",\"setup-configuration/currency-configuration\"]},{\"name\":\"Fetch Currency Information\",\"allow\":[\"fetch-currency\",\"setup-configuration/currency-configuration\"]},{\"name\":\"Delete Currency\",\"allow\":[\"remove-currency\",\"setup-configuration/currency-configuration\"]},{\"name\":\"List All Email Templates\",\"allow\":[\"fetch-all-email-template\",\"setup-configuration/email-templates\"]},{\"name\":\"Udate Email Templates\",\"allow\":[\"update-email-template\",\"setup-configuration/email-templates\"]},{\"name\":\"Fetch Email Templates Information\",\"allow\":[\"fetch-email-template\",\"setup-configuration/email-templates\"]}]},{\"name\":\"Bookings\",\"permissions\":[{\"name\":\"List All Bookings\",\"allow\":[\"fetch-all-bookings\",\"bookings\"]},{\"name\":\"Export Bookings\",\"allow\":[\"export-bookings\",\"bookings\"]}]},{\"name\":\"Accounts\",\"permissions\":[{\"name\":\"List All Transactions\",\"allow\":[\"transaction-list\",\"accounts/transactions\"]},{\"name\":\"Export Transactions\",\"allow\":[\"export-transaction\",\"accounts/transactions\"]},{\"name\":\"Add Agent Transaction\",\"allow\":[\"make-agent-transaction\",\"accounts/transactions\"]},{\"name\":\"List All Top UP\",\"allow\":[\"get-topup-list\",\"accounts/transactions\"]},{\"name\":\"Fetch Top UP\",\"allow\":[\"get-topup-view\",\"accounts/transactions\"]},{\"name\":\"Update Top UP\",\"allow\":[\"update-topup-request\",\"accounts/transactions\"]},{\"name\":\"List All Floating Deposit\",\"allow\":[\"get-floating-deposit-list\",\"accounts/transactions\"]},{\"name\":\"Fetch Floating Deposit\",\"allow\":[\"get-topup-view\",\"accounts/transactions\"]},{\"name\":\"Update Top UP\",\"allow\":[\"update-topup-request\",\"accounts/transactions\"]}]},{\"name\":\"Report\",\"permissions\":[{\"name\":\"List All Bookings\",\"allow\":[\"fetch-all-bookings\",\"report/booking-report\"]},{\"name\":\"Search Bookings\",\"allow\":[\"search-bookings-by-organisation\",\"report/booking-report\"]},{\"name\":\"Export Booking Report\",\"allow\":[\"export-booking-report\",\"report/booking-report\"]},{\"name\":\"Search Segments\",\"allow\":[\"search-segments\",\"report/segment-report\"]},{\"name\":\"MIS (Count Platform)\",\"allow\":[\"Flight-Search-Log/count\",\"report/mis-report\"]},{\"name\":\"MIS (Monthly Wise)\",\"allow\":[\"Flight-Search-Log/monthlwise\",\"report/mis-report\"]},{\"name\":\"Search Log\",\"allow\":[\"fetch-all-Flight-Search-Log\",\"report/search-log-report\"]},{\"name\":\"List All Audit Trail Log\",\"allow\":[\"fetch-all-Audit-Trail\",\"report/audit-report\"]},{\"name\":\"Search Audit Trail Log\",\"allow\":[\"get-audit-trails\",\"report/audit-report\"]},{\"name\":\"Ticket Log\",\"allow\":[\"search-tickets-new\",\"report/ticket-report\"]},{\"name\":\"Dynamic Report\",\"allow\":[\"dynamic-report-data\",\"report/dynamic-report\"]}]},{\"name\":\"Flight\",\"permissions\":[{\"name\":\"Search\",\"allow\":[\"flights-search\",\"search/flights\"]},{\"name\":\"Book\",\"allow\":[\"flight-booking\",\"search/flights\"]},{\"name\":\"Ticket\",\"allow\":[\"flight-ticket\",\"search/flights\"]},{\"name\":\"Cancel\",\"allow\":[\"flight-cancel\",\"search/flights\"]},{\"name\":\"Amend\",\"allow\":[\"flight-amend\",\"search/flights\"]},{\"name\":\"Refund\",\"allow\":[\"flight-refund\",\"search/flights\"]},{\"name\":\"Markup\",\"allow\":[\"flight-markup\",\"search/flights\"]}]},{\"name\":\"Hotels\",\"permissions\":[{\"name\":\"Search\",\"allow\":[\"hotel-search\",\"search/hotels\"]},{\"name\":\"Book\",\"allow\":[\"hotel-room-book\",\"search/hotels\"]},{\"name\":\"Details\",\"allow\":[\"hotel-room-details\",\"search/hotels\"]},{\"name\":\"Cancel\",\"allow\":[\"hotel-booking-cancel\",\"search/hotels\"]}]},{\"name\":\"Cars\",\"permissions\":[{\"name\":\"Search\",\"allow\":[\"car-search\",\"search/cars\"]}]},{\"name\":\"Extras\",\"permissions\":[{\"name\":\"Fetch All Organization\",\"allow\":[\"fetch-all-organization\",\"users\"]},{\"name\":\"Roles List\",\"allow\":[\"roles/list\",\"users\"]},{\"name\":\"Fetch Supplier List\",\"allow\":[\"fetch-all-supplier\",\"report/booking-report\"]},{\"name\":\"Countries List\",\"allow\":[\"get-country\",\"users\"]},{\"name\":\"Toggle Status\",\"allow\":[\"toggle-status\",\"report/booking-report\"]},{\"name\":\"Currency List\",\"allow\":[\"get-currency-list\",\"accounts/transactions\"]},{\"name\":\"List Airport\",\"allow\":[\"get-airports-cache\",\"report/segment-report\"]},{\"name\":\"List Airlines\",\"allow\":[\"get-airlines-list\",\"report/segment-report\"]}]}]");

/***/ }),

/***/ "./src/app/layout/setup-configuration/roles/roles-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/roles/roles-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: RolesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesRoutingModule", function() { return RolesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _roles_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roles.component */ "./src/app/layout/setup-configuration/roles/roles.component.ts");
/* harmony import */ var _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-role/create-role.component */ "./src/app/layout/setup-configuration/roles/create-role/create-role.component.ts");
/* harmony import */ var _edit_role_edit_role_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-role/edit-role.component */ "./src/app/layout/setup-configuration/roles/edit-role/edit-role.component.ts");






const routes = [
    { path: '', component: _roles_component__WEBPACK_IMPORTED_MODULE_3__["RolesComponent"] },
    { path: 'list', redirectTo: '', pathMatch: 'prefix' },
    // { path: 'list', component: RolesComponent },
    { path: 'create', component: _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_4__["CreateRoleComponent"] },
    { path: 'edit/:id', component: _edit_role_edit_role_component__WEBPACK_IMPORTED_MODULE_5__["EditRoleComponent"] },
];
let RolesRoutingModule = class RolesRoutingModule {
};
RolesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], RolesRoutingModule);



/***/ }),

/***/ "./src/app/layout/setup-configuration/roles/roles.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/layout/setup-configuration/roles/roles.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n.action {\n  display: inline-block;\n}\n.action .icon {\n  width: 16px;\n  margin: 0px 10px;\n  cursor: pointer;\n}\n.action .icon img {\n  width: 16px;\n}\n.roleActionButton {\n  border-radius: 3px;\n  background-color: #3867B1;\n}\n.roleActionButton span {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n.goto_list {\n  background-color: transparent;\n  box-shadow: none;\n  border: none;\n  color: #181B20;\n  font-size: 14px;\n}\n.goto_list span {\n  color: #181B20;\n}\n.goto-link {\n  position: relative;\n  top: 8px;\n}\n.mar-right-15 {\n  margin-right: 15px;\n}\n.mar-top-15 {\n  margin-top: 15px;\n}\n.permission-block {\n  margin-top: 15px;\n  display: block;\n}\n.padd-left-15 {\n  padding-left: 15px;\n}\n.showOnlyParent {\n  width: 136px;\n  float: left;\n  padding-bottom: 8px;\n}\n.action .icon.edit_icon {\n  margin: 0px;\n}\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n  padding-left: 0px;\n}\n.ui.form .three.wide.field,\n.ui.form .field > .checkbox-field {\n  margin-bottom: 16px;\n}\n.search-section {\n  padding-bottom: 30px;\n}\n.outer-segment {\n  margin: 0px;\n}\n.outer-segment .markup_list {\n  padding: 0px 24px;\n}\n.outer-segment .markup_list .markup_title {\n  margin: 0;\n  font-style: normal;\n  font-weight: 700 !important;\n  font-size: 20px;\n  line-height: 23px;\n  color: #181B20;\n}\ni.icon {\n  margin-top: 24px;\n}\n.role-perm-label {\n  display: block;\n  width: 100%;\n}\n.role-perm-block {\n  border: 1px solid #DADCE0;\n  box-sizing: border-box;\n  border-radius: 10px;\n  margin: 8px;\n}\n.role-perm-block i.icon {\n  margin-top: 0px;\n}\n.role-perm-block .pos_access-rights {\n  color: rgba(24, 27, 32, 0.7);\n  font-size: 13px;\n}\n.role-perm-block .pos_access-rights.head {\n  color: #181B20;\n  font-weight: 500 !important;\n  padding-bottom: 25px;\n}\n.role-perm-block .ui.checkbox label:before {\n  border-radius: 50%;\n  width: 15px;\n  height: 15px;\n}\n.role-perm-block .ui.checkbox label:after {\n  left: -1px;\n}\n.role-perm-block .ui.checkbox input:checked ~ label span {\n  color: #181B20;\n}\n.role-perm-block .ui.checkbox input:checked ~ label:before {\n  border: none;\n}\n.role-perm-block .ui.checkbox input:checked ~ .box:before {\n  border: none;\n}\n.role-perm-block .ui.checkbox.inner-checkbox label:after {\n  font-size: 10px;\n}\n.role-perm-block .ui.checkbox.inner-checkbox input:checked ~ label:before {\n  background: #437ADA;\n}\n.role-perm-block .ui.checkbox.inner-checkbox input:checked ~ label:after {\n  color: #fff;\n}\n.role-perm-block .ui.checkbox.inner-checkbox input:checked ~ .box:after {\n  color: #fff;\n}\n.role-perm-block .ui.checkbox.outer-checkbox {\n  width: 100%;\n}\n.role-perm-block .ui.checkbox.outer-checkbox label i.icon {\n  cursor: pointer;\n  float: right;\n}\n.role-perm-block .ui.checkbox.outer-checkbox input:checked ~ label .pos_access-rights.head {\n  color: #181B20;\n  font-weight: 700 !important;\n}\n.role-perm-block .ui.checkbox.outer-checkbox input:checked ~ label:before, .role-perm-block .ui.checkbox.outer-checkbox input:checked ~ .box:before {\n  border: 1px solid rgba(6, 40, 98, 0.3);\n}\n.role-perm-block .ui.checkbox.outer-checkbox input:checked ~ .box:after, .role-perm-block .ui.checkbox.outer-checkbox input:checked ~ label:after {\n  content: \"•\";\n  font-size: 36px;\n  top: -5px;\n  color: #1B61DD;\n}\n.mt-12 {\n  margin: 12px;\n}\n.ui.segment {\n  margin-bottom: 60px;\n}\n.search-section {\n  padding: 0px 30px;\n  text-align: right;\n}\n.search-section .eight.wide.field .main_head {\n  text-align: left;\n  font-weight: 500 !important;\n  font-size: 13px;\n  line-height: 15px;\n  color: #1B1F26;\n}\n.search-section .list-code {\n  text-align: left;\n  padding: 0px !important;\n}\n.save-btn-block {\n  text-align: right;\n  position: relative;\n  top: 96px;\n  right: -24px;\n}\n.save-btn-block .ui.reset.button.tourCode_btn {\n  margin-right: 14px;\n}\n.child-container {\n  display: inline-block;\n  min-width: 188px;\n}\n.child-obj-block {\n  border: 1px solid #DADCE0;\n  box-sizing: border-box;\n  border-radius: 10px;\n  margin: 8px;\n  padding: 8px;\n  max-width: 94px;\n}\n.child-obj-block .ui.checkbox {\n  display: block;\n  padding: 8px;\n}\n.ui.red.button {\n  position: relative;\n  top: 3px;\n  left: 8px;\n}\n.ui.primary.button {\n  min-width: auto;\n}\n@media (max-width: 1440px) {\n  .bookings_btn-panel .roleActionButton {\n    margin-right: 0px;\n    margin-top: 24px;\n  }\n\n  .search-section .eight.wide.field {\n    padding: 0px;\n  }\n\n  .child-container {\n    min-width: auto;\n  }\n\n  .save-btn-block {\n    right: -30px;\n  }\n}\n@media (max-width: 1280px) {\n  .save-btn-block {\n    right: -22px;\n  }\n}\n.bookings_btn-panel .primary.button {\n  margin-top: 24px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vcm9sZXMvcm9sZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zZXR1cC1jb25maWd1cmF0aW9uL3JvbGVzL0U6XFxCZWxhbFxccHJvamVjdHNcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcc2V0dXAtY29uZmlndXJhdGlvblxccm9sZXNcXHJvbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLHFCQUFBO0FERUo7QUNESTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QURHUjtBQ0ZRO0VBQ0ksV0FBQTtBRElaO0FDQ0E7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FERUo7QUNESTtFQUNJLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QURHUjtBQ0NBO0VBQ0ksNkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBREVKO0FDREk7RUFDSSxjQUFBO0FER1I7QUNDQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtBREVKO0FDQ0E7RUFDSSxrQkFBQTtBREVKO0FDQ0E7RUFDSSxnQkFBQTtBREVKO0FDQ0E7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QURFSjtBQ0NBO0VBQ0ksa0JBQUE7QURFSjtBQ0NBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBREVKO0FDS0E7RUFDSSxXQUFBO0FERko7QUNLQTtFQUNJLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FERko7QUNLQTs7RUFFSSxtQkFBQTtBREZKO0FDS0E7RUFDSSxvQkFBQTtBREZKO0FDS0E7RUFDSSxXQUFBO0FERko7QUNHSTtFQUNJLGlCQUFBO0FERFI7QUNFUTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBREFaO0FDS0E7RUFDSSxnQkFBQTtBREZKO0FDS0E7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBREZKO0FDS0E7RUFDSSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FERko7QUNJSTtFQUNJLGVBQUE7QURGUjtBQ0lJO0VBQ0ksNEJBQUE7RUFDQSxlQUFBO0FERlI7QUNHUTtFQUNJLGNBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0FERFo7QUNNWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QURKaEI7QUNNWTtFQUNJLFVBQUE7QURKaEI7QUNRWTtFQUNJLGNBQUE7QUROaEI7QUNRWTtFQUNJLFlBQUE7QUROaEI7QUNTUTtFQUNJLFlBQUE7QURQWjtBQ1lZO0VBQ0ksZUFBQTtBRFZoQjtBQ2NZO0VBQ0ksbUJBQUE7QURaaEI7QUNjWTtFQUNJLFdBQUE7QURaaEI7QUNnQlk7RUFDSSxXQUFBO0FEZGhCO0FDa0JJO0VBQ0ksV0FBQTtBRGhCUjtBQ2tCWTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FEaEJoQjtBQ29CWTtFQUNJLGNBQUE7RUFDQSwyQkFBQTtBRGxCaEI7QUNxQlE7RUFDSSxzQ0FBQTtBRG5CWjtBQ3FCUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QURuQlo7QUN3QkE7RUFDSSxZQUFBO0FEckJKO0FDd0JBO0VBQ0ksbUJBQUE7QURyQko7QUN3QkE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FEckJKO0FDc0JJO0VBQ0ksZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QURwQlI7QUNzQkk7RUFDSSxnQkFBQTtFQUNBLHVCQUFBO0FEcEJSO0FDd0JBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FEckJKO0FDc0JJO0VBQ0ksa0JBQUE7QURwQlI7QUN3QkE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0FEckJKO0FDd0JBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FEckJKO0FDc0JJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QURwQlI7QUN3QkE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FEckJKO0FDd0JBO0VBQ0ksZUFBQTtBRHJCSjtBQ3dCQTtFQUVRO0lBQ0ksaUJBQUE7SUFDQSxnQkFBQTtFRHRCVjs7RUMwQk07SUFDSSxZQUFBO0VEdkJWOztFQzBCRTtJQUNJLGVBQUE7RUR2Qk47O0VDeUJFO0lBQ0ksWUFBQTtFRHRCTjtBQUNGO0FDeUJBO0VBQ0k7SUFDSSxZQUFBO0VEdkJOO0FBQ0Y7QUMwQkE7RUFDSSwyQkFBQTtBRHhCSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zZXR1cC1jb25maWd1cmF0aW9uL3JvbGVzL3JvbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmFjdGlvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5hY3Rpb24gLmljb24ge1xuICB3aWR0aDogMTZweDtcbiAgbWFyZ2luOiAwcHggMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmFjdGlvbiAuaWNvbiBpbWcge1xuICB3aWR0aDogMTZweDtcbn1cblxuLnJvbGVBY3Rpb25CdXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XG59XG4ucm9sZUFjdGlvbkJ1dHRvbiBzcGFuIHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5nb3RvX2xpc3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzE4MUIyMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmdvdG9fbGlzdCBzcGFuIHtcbiAgY29sb3I6ICMxODFCMjA7XG59XG5cbi5nb3RvLWxpbmsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogOHB4O1xufVxuXG4ubWFyLXJpZ2h0LTE1IHtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4ubWFyLXRvcC0xNSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5wZXJtaXNzaW9uLWJsb2NrIHtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wYWRkLWxlZnQtMTUge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi5zaG93T25seVBhcmVudCB7XG4gIHdpZHRoOiAxMzZweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5cbi5hY3Rpb24gLmljb24uZWRpdF9pY29uIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi51aS5mb3JtIC5maWVsZCA+IGxhYmVsIHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMTNweDtcbiAgY29sb3I6ICMxODFCMjA7XG4gIG1hcmdpbjogMHB4IDBweCA4cHg7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4udWkuZm9ybSAudGhyZWUud2lkZS5maWVsZCxcbi51aS5mb3JtIC5maWVsZCA+IC5jaGVja2JveC1maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5zZWFyY2gtc2VjdGlvbiB7XG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xufVxuXG4ub3V0ZXItc2VnbWVudCB7XG4gIG1hcmdpbjogMHB4O1xufVxuLm91dGVyLXNlZ21lbnQgLm1hcmt1cF9saXN0IHtcbiAgcGFkZGluZzogMHB4IDI0cHg7XG59XG4ub3V0ZXItc2VnbWVudCAubWFya3VwX2xpc3QgLm1hcmt1cF90aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDIzcHg7XG4gIGNvbG9yOiAjMTgxQjIwO1xufVxuXG5pLmljb24ge1xuICBtYXJnaW4tdG9wOiAyNHB4O1xufVxuXG4ucm9sZS1wZXJtLWxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucm9sZS1wZXJtLWJsb2NrIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0RBRENFMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiA4cHg7XG59XG4ucm9sZS1wZXJtLWJsb2NrIGkuaWNvbiB7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cbi5yb2xlLXBlcm0tYmxvY2sgLnBvc19hY2Nlc3MtcmlnaHRzIHtcbiAgY29sb3I6IHJnYmEoMjQsIDI3LCAzMiwgMC43KTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnJvbGUtcGVybS1ibG9jayAucG9zX2FjY2Vzcy1yaWdodHMuaGVhZCB7XG4gIGNvbG9yOiAjMTgxQjIwO1xuICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiAyNXB4O1xufVxuLnJvbGUtcGVybS1ibG9jayAudWkuY2hlY2tib3ggbGFiZWw6YmVmb3JlIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xufVxuLnJvbGUtcGVybS1ibG9jayAudWkuY2hlY2tib3ggbGFiZWw6YWZ0ZXIge1xuICBsZWZ0OiAtMXB4O1xufVxuLnJvbGUtcGVybS1ibG9jayAudWkuY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHNwYW4ge1xuICBjb2xvcjogIzE4MUIyMDtcbn1cbi5yb2xlLXBlcm0tYmxvY2sgLnVpLmNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpiZWZvcmUge1xuICBib3JkZXI6IG5vbmU7XG59XG4ucm9sZS1wZXJtLWJsb2NrIC51aS5jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmJveDpiZWZvcmUge1xuICBib3JkZXI6IG5vbmU7XG59XG4ucm9sZS1wZXJtLWJsb2NrIC51aS5jaGVja2JveC5pbm5lci1jaGVja2JveCBsYWJlbDphZnRlciB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5yb2xlLXBlcm0tYmxvY2sgLnVpLmNoZWNrYm94LmlubmVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjNDM3QURBO1xufVxuLnJvbGUtcGVybS1ibG9jayAudWkuY2hlY2tib3guaW5uZXItY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmFmdGVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ucm9sZS1wZXJtLWJsb2NrIC51aS5jaGVja2JveC5pbm5lci1jaGVja2JveCBpbnB1dDpjaGVja2VkIH4gLmJveDphZnRlciB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLnJvbGUtcGVybS1ibG9jayAudWkuY2hlY2tib3gub3V0ZXItY2hlY2tib3gge1xuICB3aWR0aDogMTAwJTtcbn1cbi5yb2xlLXBlcm0tYmxvY2sgLnVpLmNoZWNrYm94Lm91dGVyLWNoZWNrYm94IGxhYmVsIGkuaWNvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLnJvbGUtcGVybS1ibG9jayAudWkuY2hlY2tib3gub3V0ZXItY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIC5wb3NfYWNjZXNzLXJpZ2h0cy5oZWFkIHtcbiAgY29sb3I6ICMxODFCMjA7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbn1cbi5yb2xlLXBlcm0tYmxvY2sgLnVpLmNoZWNrYm94Lm91dGVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpiZWZvcmUsIC5yb2xlLXBlcm0tYmxvY2sgLnVpLmNoZWNrYm94Lm91dGVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiAuYm94OmJlZm9yZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNiwgNDAsIDk4LCAwLjMpO1xufVxuLnJvbGUtcGVybS1ibG9jayAudWkuY2hlY2tib3gub3V0ZXItY2hlY2tib3ggaW5wdXQ6Y2hlY2tlZCB+IC5ib3g6YWZ0ZXIsIC5yb2xlLXBlcm0tYmxvY2sgLnVpLmNoZWNrYm94Lm91dGVyLWNoZWNrYm94IGlucHV0OmNoZWNrZWQgfiBsYWJlbDphZnRlciB7XG4gIGNvbnRlbnQ6IFwi4oCiXCI7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgdG9wOiAtNXB4O1xuICBjb2xvcjogIzFCNjFERDtcbn1cblxuLm10LTEyIHtcbiAgbWFyZ2luOiAxMnB4O1xufVxuXG4udWkuc2VnbWVudCB7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG5cbi5zZWFyY2gtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDBweCAzMHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5zZWFyY2gtc2VjdGlvbiAuZWlnaHQud2lkZS5maWVsZCAubWFpbl9oZWFkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBjb2xvcjogIzFCMUYyNjtcbn1cbi5zZWFyY2gtc2VjdGlvbiAubGlzdC1jb2RlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zYXZlLWJ0bi1ibG9jayB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogOTZweDtcbiAgcmlnaHQ6IC0yNHB4O1xufVxuLnNhdmUtYnRuLWJsb2NrIC51aS5yZXNldC5idXR0b24udG91ckNvZGVfYnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xufVxuXG4uY2hpbGQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtaW4td2lkdGg6IDE4OHB4O1xufVxuXG4uY2hpbGQtb2JqLWJsb2NrIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0RBRENFMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiA4cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWF4LXdpZHRoOiA5NHB4O1xufVxuLmNoaWxkLW9iai1ibG9jayAudWkuY2hlY2tib3gge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogOHB4O1xufVxuXG4udWkucmVkLmJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAzcHg7XG4gIGxlZnQ6IDhweDtcbn1cblxuLnVpLnByaW1hcnkuYnV0dG9uIHtcbiAgbWluLXdpZHRoOiBhdXRvO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XG4gIC5ib29raW5nc19idG4tcGFuZWwgLnJvbGVBY3Rpb25CdXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gIH1cblxuICAuc2VhcmNoLXNlY3Rpb24gLmVpZ2h0LndpZGUuZmllbGQge1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuXG4gIC5jaGlsZC1jb250YWluZXIge1xuICAgIG1pbi13aWR0aDogYXV0bztcbiAgfVxuXG4gIC5zYXZlLWJ0bi1ibG9jayB7XG4gICAgcmlnaHQ6IC0zMHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5zYXZlLWJ0bi1ibG9jayB7XG4gICAgcmlnaHQ6IC0yMnB4O1xuICB9XG59XG4uYm9va2luZ3NfYnRuLXBhbmVsIC5wcmltYXJ5LmJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDI0cHggIWltcG9ydGFudDtcbn0iLCIuYWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC5pY29uIHtcclxuICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICBtYXJnaW46IDBweCAxMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5yb2xlQWN0aW9uQnV0dG9uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZ290b19saXN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjMTgxQjIwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICMxODFCMjA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5nb3RvLWxpbmsge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA4cHg7XHJcbn1cclxuXHJcbi5tYXItcmlnaHQtMTUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4ubWFyLXRvcC0xNSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4ucGVybWlzc2lvbi1ibG9jayB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5wYWRkLWxlZnQtMTUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uc2hvd09ubHlQYXJlbnQge1xyXG4gICAgd2lkdGg6IDEzNnB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG59XHJcblxyXG4vLyAudWkuYm90dG9tLmF0dGFjaGVkLnRhYiB7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuXHJcbi5hY3Rpb24gLmljb24uZWRpdF9pY29uIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4udWkuZm9ybSAuZmllbGQ+bGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgY29sb3I6ICMxODFCMjA7XHJcbiAgICBtYXJnaW46IDBweCAwcHggOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi51aS5mb3JtIC50aHJlZS53aWRlLmZpZWxkLFxyXG4udWkuZm9ybSAuZmllbGQ+LmNoZWNrYm94LWZpZWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLm91dGVyLXNlZ21lbnQge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICAubWFya3VwX2xpc3Qge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAyNHB4O1xyXG4gICAgICAgIC5tYXJrdXBfdGl0bGUge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyM3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzE4MUIyMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmkuaWNvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG59XHJcblxyXG4ucm9sZS1wZXJtLWxhYmVsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5yb2xlLXBlcm0tYmxvY2sge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0RBRENFMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luOiA4cHg7XHJcblxyXG4gICAgaS5pY29uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgICAucG9zX2FjY2Vzcy1yaWdodHMge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDI0LCAyNywgMzIsIDAuNyk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICYuaGVhZCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTgxQjIwO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC51aS5jaGVja2JveCB7XHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IC0xcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQ6Y2hlY2tlZH5sYWJlbCB7XHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxODFCMjA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0OmNoZWNrZWR+LmJveDpiZWZvcmUge1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfSBcclxuICAgIC51aS5jaGVja2JveC5pbm5lci1jaGVja2JveCB7XHJcbiAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dDpjaGVja2VkfmxhYmVsIHtcclxuICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzQzN0FEQTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0OmNoZWNrZWR+LmJveCB7XHJcbiAgICAgICAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudWkuY2hlY2tib3gub3V0ZXItY2hlY2tib3gge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgaS5pY29uIHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpbnB1dDpjaGVja2VkfmxhYmVsIHtcclxuICAgICAgICAgICAgLnBvc19hY2Nlc3MtcmlnaHRzLmhlYWQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxODFCMjA7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQ6Y2hlY2tlZH5sYWJlbDpiZWZvcmUsIGlucHV0OmNoZWNrZWR+LmJveDpiZWZvcmUge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDYsIDQwLCA5OCwgMC4zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXQ6Y2hlY2tlZH4uYm94OmFmdGVyLCBpbnB1dDpjaGVja2VkfmxhYmVsOmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJ1xcMjAyMic7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgICAgdG9wOiAtNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzFCNjFERDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tdC0xMiB7XHJcbiAgICBtYXJnaW46IDEycHg7XHJcbn1cclxuXHJcbi51aS5zZWdtZW50IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAwcHggMzBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgLmVpZ2h0LndpZGUuZmllbGQgLm1haW5faGVhZCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMUIxRjI2O1xyXG4gICAgfVxyXG4gICAgLmxpc3QtY29kZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLnNhdmUtYnRuLWJsb2NrIHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiA5NnB4O1xyXG4gICAgcmlnaHQ6IC0yNHB4O1xyXG4gICAgLnVpLnJlc2V0LmJ1dHRvbi50b3VyQ29kZV9idG4ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTRweDtcclxuICAgIH1cclxufVxyXG5cclxuLmNoaWxkLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtaW4td2lkdGg6IDE4OHB4O1xyXG59XHJcblxyXG4uY2hpbGQtb2JqLWJsb2NrIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEQURDRTA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgbWF4LXdpZHRoOiA5NHB4O1xyXG4gICAgLnVpLmNoZWNrYm94IHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi51aS5yZWQuYnV0dG9ue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAzcHg7XHJcbiAgICBsZWZ0OiA4cHg7XHJcbn1cclxuXHJcbi51aS5wcmltYXJ5LmJ1dHRvbntcclxuICAgIG1pbi13aWR0aDphdXRvO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICAuYm9va2luZ3NfYnRuLXBhbmVsIHtcclxuICAgICAgICAucm9sZUFjdGlvbkJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNHB4XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1zZWN0aW9uIHtcclxuICAgICAgICAuZWlnaHQud2lkZS5maWVsZCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2hpbGQtY29udGFpbmVyIHtcclxuICAgICAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuc2F2ZS1idG4tYmxvY2sge1xyXG4gICAgICAgIHJpZ2h0OiAtMzBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgLnNhdmUtYnRuLWJsb2NrIHtcclxuICAgICAgICByaWdodDogLTIycHg7XHJcbiAgICB9XHJcbn0gXHJcblxyXG4uYm9va2luZ3NfYnRuLXBhbmVsIC5wcmltYXJ5LmJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOjI0cHggIWltcG9ydGFudDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/layout/setup-configuration/roles/roles.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/setup-configuration/roles/roles.component.ts ***!
  \*********************************************************************/
/*! exports provided: RolesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesComponent", function() { return RolesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var src_app_shared_services_setup_config_roles_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/setup-config/roles-config.service */ "./src/app/shared/services/setup-config/roles-config.service.ts");





let RolesComponent = class RolesComponent {
    constructor(roleService, toastr) {
        this.roleService = roleService;
        this.toastr = toastr;
        this.loading = false;
    }
    ngOnInit() {
        this.fetchRoles();
    }
    fetchRoles() {
        this.loading = true;
        this.roleService.getRoles().subscribe((res) => {
            this.roles = res.data;
        }, (err) => {
            this.toasterMessage('error', err);
        });
    }
    delete(role) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(result => {
            if (result.value) {
                this.roleService.deleteRole(role).subscribe((r) => {
                    if (r.status) {
                        this.roles.filter(function (value, index, arr) {
                            if (role === value['role_id']) {
                                arr.splice(index, 1);
                            }
                        });
                        this.toasterMessage('success', 'Role deleted successfully');
                    }
                    else {
                        this.toasterMessage('error', r.msg);
                    }
                }, (err) => {
                    this.toasterMessage('error', err);
                });
            }
        });
    }
    toasterMessage(type = 'success', message) {
        if (type == 'success') {
            this.toastr.success(message, 'Success !', {
                disableTimeOut: false,
                progressBar: false,
                positionClass: 'toast-bottom-right'
            });
        }
        else if (type == 'error') {
            this.toastr.error(message, 'Server Error !', {
                disableTimeOut: false,
                progressBar: false,
                positionClass: 'toast-bottom-right'
            });
        }
        else {
            this.toastr.info(message, 'Information !', {
                disableTimeOut: false,
                progressBar: false,
                positionClass: 'toast-bottom-right'
            });
        }
    }
};
RolesComponent.ctorParameters = () => [
    { type: src_app_shared_services_setup_config_roles_config_service__WEBPACK_IMPORTED_MODULE_4__["SetupConfigRoleService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }
];
RolesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-roles',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./roles.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/roles/roles.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./roles.component.scss */ "./src/app/layout/setup-configuration/roles/roles.component.scss")).default]
    })
], RolesComponent);



/***/ }),

/***/ "./src/app/layout/setup-configuration/roles/roles.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/setup-configuration/roles/roles.module.ts ***!
  \******************************************************************/
/*! exports provided: RolesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesModule", function() { return RolesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ui-loader */ "./node_modules/ngx-ui-loader/__ivy_ngcc__/fesm2015/ngx-ui-loader.js");
/* harmony import */ var _roles_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roles-routing.module */ "./src/app/layout/setup-configuration/roles/roles-routing.module.ts");
/* harmony import */ var _roles_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roles.component */ "./src/app/layout/setup-configuration/roles/roles.component.ts");
/* harmony import */ var _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-role/create-role.component */ "./src/app/layout/setup-configuration/roles/create-role/create-role.component.ts");
/* harmony import */ var _edit_role_edit_role_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-role/edit-role.component */ "./src/app/layout/setup-configuration/roles/edit-role/edit-role.component.ts");









let RolesModule = class RolesModule {
};
RolesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_roles_component__WEBPACK_IMPORTED_MODULE_6__["RolesComponent"], _create_role_create_role_component__WEBPACK_IMPORTED_MODULE_7__["CreateRoleComponent"], _edit_role_edit_role_component__WEBPACK_IMPORTED_MODULE_8__["EditRoleComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _roles_routing_module__WEBPACK_IMPORTED_MODULE_5__["RolesRoutingModule"],
            ngx_ui_loader__WEBPACK_IMPORTED_MODULE_4__["NgxUiLoaderModule"]
        ]
    })
], RolesModule);



/***/ }),

/***/ "./src/app/shared/services/setup-config/roles-config.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/setup-config/roles-config.service.ts ***!
  \**********************************************************************/
/*! exports provided: SetupConfigRoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupConfigRoleService", function() { return SetupConfigRoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let SetupConfigRoleService = class SetupConfigRoleService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL;
        this.pager = {};
        this.pageOfItems = [];
        // Http Headers
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    // GET ALL Roles create by me
    getRoles() {
        return this.http.get(`${this.url}/api/roles/list`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    addRole(formData) {
        return this.http.post(`${this.url}/api/roles/add`, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    getRole(role_id) {
        return this.http.get(`${this.url}/api/roles/get/${role_id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    updateRole(role_id, formData) {
        return this.http.put(`${this.url}/api/roles/update/${role_id}`, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    deleteRole(role_id) {
        return this.http.post(`${this.url}/api/roles/delete/${role_id}`, "")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // Error handling
    errorHandl(error) {
        let errorMessage = '';
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
SetupConfigRoleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
SetupConfigRoleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SetupConfigRoleService);



/***/ })

}]);
//# sourceMappingURL=roles-roles-module-es2016.js.map