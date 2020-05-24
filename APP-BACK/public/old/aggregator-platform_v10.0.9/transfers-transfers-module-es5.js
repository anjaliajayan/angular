function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transfers-transfers-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/search/transfers/transfers.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/search/transfers/transfers.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSearchTransfersTransfersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>transfers works!</p>\r\n";
    /***/
  },

  /***/
  "./src/app/layout/search/transfers/transfers-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/layout/search/transfers/transfers-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: TransfersRoutingModule */

  /***/
  function srcAppLayoutSearchTransfersTransfersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransfersRoutingModule", function () {
      return TransfersRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _transfers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./transfers.component */
    "./src/app/layout/search/transfers/transfers.component.ts");

    var routes = [{
      path: '',
      component: _transfers_component__WEBPACK_IMPORTED_MODULE_3__["TransfersComponent"]
    }];

    var TransfersRoutingModule = function TransfersRoutingModule() {
      _classCallCheck(this, TransfersRoutingModule);
    };

    TransfersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TransfersRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/search/transfers/transfers.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/layout/search/transfers/transfers.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSearchTransfersTransfersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zZWFyY2gvdHJhbnNmZXJzL3RyYW5zZmVycy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/layout/search/transfers/transfers.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/layout/search/transfers/transfers.component.ts ***!
    \****************************************************************/

  /*! exports provided: TransfersComponent */

  /***/
  function srcAppLayoutSearchTransfersTransfersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransfersComponent", function () {
      return TransfersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TransfersComponent =
    /*#__PURE__*/
    function () {
      function TransfersComponent() {
        _classCallCheck(this, TransfersComponent);
      }

      _createClass(TransfersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TransfersComponent;
    }();

    TransfersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-transfers',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./transfers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/search/transfers/transfers.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./transfers.component.scss */
      "./src/app/layout/search/transfers/transfers.component.scss")).default]
    })], TransfersComponent);
    /***/
  },

  /***/
  "./src/app/layout/search/transfers/transfers.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/layout/search/transfers/transfers.module.ts ***!
    \*************************************************************/

  /*! exports provided: TransfersModule */

  /***/
  function srcAppLayoutSearchTransfersTransfersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransfersModule", function () {
      return TransfersModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _transfers_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./transfers-routing.module */
    "./src/app/layout/search/transfers/transfers-routing.module.ts");
    /* harmony import */


    var _transfers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./transfers.component */
    "./src/app/layout/search/transfers/transfers.component.ts");

    var TransfersModule = function TransfersModule() {
      _classCallCheck(this, TransfersModule);
    };

    TransfersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_transfers_component__WEBPACK_IMPORTED_MODULE_4__["TransfersComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _transfers_routing_module__WEBPACK_IMPORTED_MODULE_3__["TransfersRoutingModule"]]
    })], TransfersModule);
    /***/
  }
}]);
//# sourceMappingURL=transfers-transfers-module-es5.js.map