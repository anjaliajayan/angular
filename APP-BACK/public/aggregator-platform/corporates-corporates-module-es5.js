function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["corporates-corporates-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/corporates/corporates.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/corporates/corporates.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutCorporatesCorporatesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./src/app/layout/corporates/corporates-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/layout/corporates/corporates-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: CorporatesRoutingModule */

  /***/
  function srcAppLayoutCorporatesCorporatesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CorporatesRoutingModule", function () {
      return CorporatesRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _corporates_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./corporates.component */
    "./src/app/layout/corporates/corporates.component.ts");
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
      component: _corporates_component__WEBPACK_IMPORTED_MODULE_1__["CorporatesComponent"],
      children: [{
        path: '',
        redirectTo: 'approval-queues',
        pathMatch: 'prefix'
      }, {
        path: 'approval-queues',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | approval-queues-approval-queues-module */
          "approval-queues-approval-queues-module").then(__webpack_require__.bind(null,
          /*! ./approval-queues/approval-queues.module */
          "./src/app/layout/corporates/approval-queues/approval-queues.module.ts")).then(function (m) {
            return m.ApprovalQueuesModule;
          });
        }
      }, {
        path: 'corporate-policy',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | corporate-policy-corporate-policy-module */
          "corporate-policy-corporate-policy-module").then(__webpack_require__.bind(null,
          /*! ./corporate-policy/corporate-policy.module */
          "./src/app/layout/corporates/corporate-policy/corporate-policy.module.ts")).then(function (m) {
            return m.CorporatePolicyModule;
          });
        }
      }, {
        path: 'corporate-profile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | corporate-profile-corporate-profile-module */
          "corporate-profile-corporate-profile-module").then(__webpack_require__.bind(null,
          /*! ./corporate-profile/corporate-profile.module */
          "./src/app/layout/corporates/corporate-profile/corporate-profile.module.ts")).then(function (m) {
            return m.CorporateProfileModule;
          });
        }
      }]
    }];

    var CorporatesRoutingModule = function CorporatesRoutingModule() {
      _classCallCheck(this, CorporatesRoutingModule);
    };

    CorporatesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], CorporatesRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/corporates/corporates.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/layout/corporates/corporates.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutCorporatesCorporatesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb3Jwb3JhdGVzL2NvcnBvcmF0ZXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layout/corporates/corporates.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/layout/corporates/corporates.component.ts ***!
    \***********************************************************/

  /*! exports provided: CorporatesComponent */

  /***/
  function srcAppLayoutCorporatesCorporatesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CorporatesComponent", function () {
      return CorporatesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CorporatesComponent = /*#__PURE__*/function () {
      function CorporatesComponent() {
        _classCallCheck(this, CorporatesComponent);
      }

      _createClass(CorporatesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CorporatesComponent;
    }();

    CorporatesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-corporates',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./corporates.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/corporates/corporates.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./corporates.component.scss */
      "./src/app/layout/corporates/corporates.component.scss"))["default"]]
    })], CorporatesComponent);
    /***/
  },

  /***/
  "./src/app/layout/corporates/corporates.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/layout/corporates/corporates.module.ts ***!
    \********************************************************/

  /*! exports provided: CorporatesModule */

  /***/
  function srcAppLayoutCorporatesCorporatesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CorporatesModule", function () {
      return CorporatesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _corporates_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./corporates.component */
    "./src/app/layout/corporates/corporates.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _corporates_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./corporates-routing.module */
    "./src/app/layout/corporates/corporates-routing.module.ts");

    var CorporatesModule = function CorporatesModule() {
      _classCallCheck(this, CorporatesModule);
    };

    CorporatesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_corporates_component__WEBPACK_IMPORTED_MODULE_1__["CorporatesComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _corporates_routing_module__WEBPACK_IMPORTED_MODULE_4__["CorporatesRoutingModule"]]
    })], CorporatesModule);
    /***/
  }
}]);
//# sourceMappingURL=corporates-corporates-module-es5.js.map