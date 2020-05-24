function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-client-create-client-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/create-client/create-client.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/create-client/create-client.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutCreateClientCreateClientComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./src/app/layout/create-client/create-client-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/layout/create-client/create-client-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: CreateClientRoutingModule */

  /***/
  function srcAppLayoutCreateClientCreateClientRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateClientRoutingModule", function () {
      return CreateClientRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _create_client_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./create-client.component */
    "./src/app/layout/create-client/create-client.component.ts");
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
      component: _create_client_component__WEBPACK_IMPORTED_MODULE_1__["CreateClientComponent"],
      children: [{
        path: '',
        redirectTo: 'create-new-client',
        pathMatch: 'prefix'
      }, {
        path: 'create-new-client',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | create-new-client-create-new-client-module */
          "create-new-client-create-new-client-module").then(__webpack_require__.bind(null,
          /*! ./create-new-client/create-new-client.module */
          "./src/app/layout/create-client/create-new-client/create-new-client.module.ts")).then(function (m) {
            return m.CreateNewClientModule;
          });
        }
      }, {
        path: 'list-client',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | list-client-list-client-module */
          "list-client-list-client-module").then(__webpack_require__.bind(null,
          /*! ./list-client/list-client.module */
          "./src/app/layout/create-client/list-client/list-client.module.ts")).then(function (m) {
            return m.ListClientModule;
          });
        }
      }]
    }];

    var CreateClientRoutingModule = function CreateClientRoutingModule() {
      _classCallCheck(this, CreateClientRoutingModule);
    };

    CreateClientRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], CreateClientRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/create-client/create-client.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/layout/create-client/create-client.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutCreateClientCreateClientComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jcmVhdGUtY2xpZW50L2NyZWF0ZS1jbGllbnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layout/create-client/create-client.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/layout/create-client/create-client.component.ts ***!
    \*****************************************************************/

  /*! exports provided: CreateClientComponent */

  /***/
  function srcAppLayoutCreateClientCreateClientComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateClientComponent", function () {
      return CreateClientComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CreateClientComponent =
    /*#__PURE__*/
    function () {
      function CreateClientComponent() {
        _classCallCheck(this, CreateClientComponent);
      }

      _createClass(CreateClientComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CreateClientComponent;
    }();

    CreateClientComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-client',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./create-client.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/create-client/create-client.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./create-client.component.scss */
      "./src/app/layout/create-client/create-client.component.scss")).default]
    })], CreateClientComponent);
    /***/
  },

  /***/
  "./src/app/layout/create-client/create-client.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/layout/create-client/create-client.module.ts ***!
    \**************************************************************/

  /*! exports provided: CreateClientModule */

  /***/
  function srcAppLayoutCreateClientCreateClientModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateClientModule", function () {
      return CreateClientModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _create_client_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./create-client.component */
    "./src/app/layout/create-client/create-client.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _create_client_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./create-client-routing.module */
    "./src/app/layout/create-client/create-client-routing.module.ts");

    var CreateClientModule = function CreateClientModule() {
      _classCallCheck(this, CreateClientModule);
    };

    CreateClientModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_create_client_component__WEBPACK_IMPORTED_MODULE_1__["CreateClientComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _create_client_routing_module__WEBPACK_IMPORTED_MODULE_4__["CreateClientRoutingModule"]]
    })], CreateClientModule);
    /***/
  }
}]);
//# sourceMappingURL=create-client-create-client-module-es5.js.map