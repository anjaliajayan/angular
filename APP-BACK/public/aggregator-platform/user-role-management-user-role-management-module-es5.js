function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-role-management-user-role-management-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user-role-management/user-role-management.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user-role-management/user-role-management.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutUserRoleManagementUserRoleManagementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./src/app/layout/user-role-management/user-role-management-routing.module.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/layout/user-role-management/user-role-management-routing.module.ts ***!
    \************************************************************************************/

  /*! exports provided: UserRoleManagementRoutingModule */

  /***/
  function srcAppLayoutUserRoleManagementUserRoleManagementRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRoleManagementRoutingModule", function () {
      return UserRoleManagementRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _user_role_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user-role-management.component */
    "./src/app/layout/user-role-management/user-role-management.component.ts");
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
      component: _user_role_management_component__WEBPACK_IMPORTED_MODULE_1__["UserRoleManagementComponent"],
      children: [{
        path: '',
        redirectTo: 'create-user',
        pathMatch: 'prefix'
      }, {
        path: 'create-user',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | create-user-create-user-module */
          [__webpack_require__.e("default~airline-deals-airline-deals-module~create-user-create-user-module~currency-configuration-cur~471cd285"), __webpack_require__.e("default~airline-deals-airline-deals-module~create-user-create-user-module~edit-user-edit-user-module~9e5ec5fc"), __webpack_require__.e("default~cars-cars-module~create-user-create-user-module~edit-user-edit-user-module~flights-flights-m~3781d070"), __webpack_require__.e("create-user-create-user-module")]).then(__webpack_require__.bind(null,
          /*! ./create-user/create-user.module */
          "./src/app/layout/user-role-management/create-user/create-user.module.ts")).then(function (m) {
            return m.CreateUserModule;
          });
        }
      }, {
        path: 'list-user',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | list-user-list-user-module */
          [__webpack_require__.e("default~airline-deals-airline-deals-module~audit-report-audit-report-module~booking-report-booking-r~c369235f"), __webpack_require__.e("default~airline-deals-airline-deals-module~create-user-create-user-module~currency-configuration-cur~471cd285"), __webpack_require__.e("default~booking-report-booking-report-module~bookings-bookings-module~dynamic-report-dynamic-report-~09342fdb"), __webpack_require__.e("common"), __webpack_require__.e("list-user-list-user-module")]).then(__webpack_require__.bind(null,
          /*! ./list-user/list-user.module */
          "./src/app/layout/user-role-management/list-user/list-user.module.ts")).then(function (m) {
            return m.ListUserModule;
          });
        }
      }, {
        path: 'edit-user/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | edit-user-edit-user-module */
          [__webpack_require__.e("default~airline-deals-airline-deals-module~create-user-create-user-module~edit-user-edit-user-module~9e5ec5fc"), __webpack_require__.e("default~cars-cars-module~create-user-create-user-module~edit-user-edit-user-module~flights-flights-m~3781d070"), __webpack_require__.e("edit-user-edit-user-module")]).then(__webpack_require__.bind(null,
          /*! ./edit-user/edit-user.module */
          "./src/app/layout/user-role-management/edit-user/edit-user.module.ts")).then(function (m) {
            return m.EditUserModule;
          });
        }
      }, {
        path: 'view-user/:id',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | view-user-view-user-module */
          [__webpack_require__.e("default~mis-report-mis-report-module~view-user-view-user-module"), __webpack_require__.e("view-user-view-user-module")]).then(__webpack_require__.bind(null,
          /*! ./view-user/view-user.module */
          "./src/app/layout/user-role-management/view-user/view-user.module.ts")).then(function (m) {
            return m.ViewUserModule;
          });
        }
      }, {
        path: 'update-profile',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | update-profile-update-profile-module */
          [__webpack_require__.e("default~airline-deals-airline-deals-module~create-user-create-user-module~edit-user-edit-user-module~9e5ec5fc"), __webpack_require__.e("default~cars-cars-module~create-user-create-user-module~edit-user-edit-user-module~flights-flights-m~3781d070"), __webpack_require__.e("update-profile-update-profile-module")]).then(__webpack_require__.bind(null,
          /*! ./update-profile/update-profile.module */
          "./src/app/layout/user-role-management/update-profile/update-profile.module.ts")).then(function (m) {
            return m.UpdateProfileModule;
          });
        }
      }]
    }];

    var UserRoleManagementRoutingModule = function UserRoleManagementRoutingModule() {
      _classCallCheck(this, UserRoleManagementRoutingModule);
    };

    UserRoleManagementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], UserRoleManagementRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/user-role-management/user-role-management.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/layout/user-role-management/user-role-management.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutUserRoleManagementUserRoleManagementComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC91c2VyLXJvbGUtbWFuYWdlbWVudC91c2VyLXJvbGUtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/layout/user-role-management/user-role-management.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/layout/user-role-management/user-role-management.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: UserRoleManagementComponent */

  /***/
  function srcAppLayoutUserRoleManagementUserRoleManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRoleManagementComponent", function () {
      return UserRoleManagementComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var UserRoleManagementComponent = /*#__PURE__*/function () {
      function UserRoleManagementComponent() {
        _classCallCheck(this, UserRoleManagementComponent);
      }

      _createClass(UserRoleManagementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UserRoleManagementComponent;
    }();

    UserRoleManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-role-management',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./user-role-management.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/user-role-management/user-role-management.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./user-role-management.component.scss */
      "./src/app/layout/user-role-management/user-role-management.component.scss"))["default"]]
    })], UserRoleManagementComponent);
    /***/
  },

  /***/
  "./src/app/layout/user-role-management/user-role-management.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/layout/user-role-management/user-role-management.module.ts ***!
    \****************************************************************************/

  /*! exports provided: UserRoleManagementModule */

  /***/
  function srcAppLayoutUserRoleManagementUserRoleManagementModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRoleManagementModule", function () {
      return UserRoleManagementModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _user_role_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user-role-management.component */
    "./src/app/layout/user-role-management/user-role-management.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _user_role_management_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./user-role-management-routing.module */
    "./src/app/layout/user-role-management/user-role-management-routing.module.ts");

    var UserRoleManagementModule = function UserRoleManagementModule() {
      _classCallCheck(this, UserRoleManagementModule);
    };

    UserRoleManagementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_user_role_management_component__WEBPACK_IMPORTED_MODULE_1__["UserRoleManagementComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _user_role_management_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserRoleManagementRoutingModule"]]
    })], UserRoleManagementModule);
    /***/
  }
}]);
//# sourceMappingURL=user-role-management-user-role-management-module-es5.js.map