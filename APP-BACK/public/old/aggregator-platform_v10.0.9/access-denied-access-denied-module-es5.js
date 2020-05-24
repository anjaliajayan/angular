function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["access-denied-access-denied-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/access-denied/access-denied.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/access-denied/access-denied.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAccessDeniedAccessDeniedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>access-denied works!</p>\r\n";
    /***/
  },

  /***/
  "./src/app/access-denied/access-denied-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/access-denied/access-denied-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: AccessDeniedRoutingModule */

  /***/
  function srcAppAccessDeniedAccessDeniedRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccessDeniedRoutingModule", function () {
      return AccessDeniedRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _access_denied_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./access-denied.component */
    "./src/app/access-denied/access-denied.component.ts");
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
      component: _access_denied_component__WEBPACK_IMPORTED_MODULE_1__["AccessDeniedComponent"]
    }];

    var AccessDeniedRoutingModule = function AccessDeniedRoutingModule() {
      _classCallCheck(this, AccessDeniedRoutingModule);
    };

    AccessDeniedRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], AccessDeniedRoutingModule);
    /***/
  },

  /***/
  "./src/app/access-denied/access-denied.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/access-denied/access-denied.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAccessDeniedAccessDeniedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY2Vzcy1kZW5pZWQvYWNjZXNzLWRlbmllZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/access-denied/access-denied.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/access-denied/access-denied.component.ts ***!
    \**********************************************************/

  /*! exports provided: AccessDeniedComponent */

  /***/
  function srcAppAccessDeniedAccessDeniedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccessDeniedComponent", function () {
      return AccessDeniedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AccessDeniedComponent =
    /*#__PURE__*/
    function () {
      function AccessDeniedComponent() {
        _classCallCheck(this, AccessDeniedComponent);
      }

      _createClass(AccessDeniedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AccessDeniedComponent;
    }();

    AccessDeniedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-access-denied',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./access-denied.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/access-denied/access-denied.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./access-denied.component.scss */
      "./src/app/access-denied/access-denied.component.scss")).default]
    })], AccessDeniedComponent);
    /***/
  },

  /***/
  "./src/app/access-denied/access-denied.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/access-denied/access-denied.module.ts ***!
    \*******************************************************/

  /*! exports provided: AccessDeniedModule */

  /***/
  function srcAppAccessDeniedAccessDeniedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccessDeniedModule", function () {
      return AccessDeniedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _access_denied_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./access-denied.component */
    "./src/app/access-denied/access-denied.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _access_denied_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./access-denied-routing.module */
    "./src/app/access-denied/access-denied-routing.module.ts");

    var AccessDeniedModule = function AccessDeniedModule() {
      _classCallCheck(this, AccessDeniedModule);
    };

    AccessDeniedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_access_denied_component__WEBPACK_IMPORTED_MODULE_1__["AccessDeniedComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _access_denied_routing_module__WEBPACK_IMPORTED_MODULE_4__["AccessDeniedRoutingModule"]]
    })], AccessDeniedModule);
    /***/
  }
}]);
//# sourceMappingURL=access-denied-access-denied-module-es5.js.map