function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["holidays-holidays-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/search/holidays/holidays.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/search/holidays/holidays.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutSearchHolidaysHolidaysComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>holidays works!</p>\r\n";
    /***/
  },

  /***/
  "./src/app/layout/search/holidays/holidays-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/layout/search/holidays/holidays-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: HolidaysRoutingModule */

  /***/
  function srcAppLayoutSearchHolidaysHolidaysRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HolidaysRoutingModule", function () {
      return HolidaysRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _holidays_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./holidays.component */
    "./src/app/layout/search/holidays/holidays.component.ts");
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
      component: _holidays_component__WEBPACK_IMPORTED_MODULE_1__["HolidaysComponent"]
    }];

    var HolidaysRoutingModule = function HolidaysRoutingModule() {
      _classCallCheck(this, HolidaysRoutingModule);
    };

    HolidaysRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], HolidaysRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/search/holidays/holidays.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/layout/search/holidays/holidays.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutSearchHolidaysHolidaysComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zZWFyY2gvaG9saWRheXMvaG9saWRheXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layout/search/holidays/holidays.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/layout/search/holidays/holidays.component.ts ***!
    \**************************************************************/

  /*! exports provided: HolidaysComponent */

  /***/
  function srcAppLayoutSearchHolidaysHolidaysComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HolidaysComponent", function () {
      return HolidaysComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HolidaysComponent =
    /*#__PURE__*/
    function () {
      function HolidaysComponent() {
        _classCallCheck(this, HolidaysComponent);
      }

      _createClass(HolidaysComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HolidaysComponent;
    }();

    HolidaysComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-holidays',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./holidays.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/search/holidays/holidays.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./holidays.component.scss */
      "./src/app/layout/search/holidays/holidays.component.scss")).default]
    })], HolidaysComponent);
    /***/
  },

  /***/
  "./src/app/layout/search/holidays/holidays.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/layout/search/holidays/holidays.module.ts ***!
    \***********************************************************/

  /*! exports provided: HolidaysModule */

  /***/
  function srcAppLayoutSearchHolidaysHolidaysModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HolidaysModule", function () {
      return HolidaysModule;
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


    var _holidays_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./holidays-routing.module */
    "./src/app/layout/search/holidays/holidays-routing.module.ts");
    /* harmony import */


    var _holidays_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./holidays.component */
    "./src/app/layout/search/holidays/holidays.component.ts");

    var HolidaysModule = function HolidaysModule() {
      _classCallCheck(this, HolidaysModule);
    };

    HolidaysModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_holidays_component__WEBPACK_IMPORTED_MODULE_4__["HolidaysComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _holidays_routing_module__WEBPACK_IMPORTED_MODULE_3__["HolidaysRoutingModule"]]
    })], HolidaysModule);
    /***/
  }
}]);
//# sourceMappingURL=holidays-holidays-module-es5.js.map