function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["point-sales-management-point-sales-management-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/point-sales-management/point-sales-management.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/point-sales-management/point-sales-management.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutPointSalesManagementPointSalesManagementComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./src/app/layout/point-sales-management/point-sales-management-routing.module.ts":
  /*!****************************************************************************************!*\
    !*** ./src/app/layout/point-sales-management/point-sales-management-routing.module.ts ***!
    \****************************************************************************************/

  /*! exports provided: PointSalesManagementRoutingModule */

  /***/
  function srcAppLayoutPointSalesManagementPointSalesManagementRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PointSalesManagementRoutingModule", function () {
      return PointSalesManagementRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _point_sales_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./point-sales-management.component */
    "./src/app/layout/point-sales-management/point-sales-management.component.ts");
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
      component: _point_sales_management_component__WEBPACK_IMPORTED_MODULE_1__["PointSalesManagementComponent"],
      children: [{
        path: '',
        redirectTo: 'add-point-sale',
        pathMatch: 'prefix'
      }, {
        path: 'registration',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | registration-registration-module */
          [__webpack_require__.e("default~airline-deals-airline-deals-module~audit-report-audit-report-module~booking-report-booking-r~d6069c4c"), __webpack_require__.e("default~airline-deals-airline-deals-module~create-user-create-user-module~currency-configuration-cur~ba44a2d1"), __webpack_require__.e("default~activities-activities-module~booking-report-booking-report-module~bookings-bookings-module~e~58a6e317"), __webpack_require__.e("registration-registration-module")]).then(__webpack_require__.bind(null,
          /*! ./registration/registration.module */
          "./src/app/layout/point-sales-management/registration/registration.module.ts")).then(function (m) {
            return m.RegistrationModule;
          });
        }
      }]
    }];

    var PointSalesManagementRoutingModule = function PointSalesManagementRoutingModule() {
      _classCallCheck(this, PointSalesManagementRoutingModule);
    };

    PointSalesManagementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], PointSalesManagementRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/point-sales-management/point-sales-management.component.scss":
  /*!*************************************************************************************!*\
    !*** ./src/app/layout/point-sales-management/point-sales-management.component.scss ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutPointSalesManagementPointSalesManagementComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wb2ludC1zYWxlcy1tYW5hZ2VtZW50L3BvaW50LXNhbGVzLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/layout/point-sales-management/point-sales-management.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/layout/point-sales-management/point-sales-management.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: PointSalesManagementComponent */

  /***/
  function srcAppLayoutPointSalesManagementPointSalesManagementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PointSalesManagementComponent", function () {
      return PointSalesManagementComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PointSalesManagementComponent =
    /*#__PURE__*/
    function () {
      function PointSalesManagementComponent() {
        _classCallCheck(this, PointSalesManagementComponent);
      }

      _createClass(PointSalesManagementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PointSalesManagementComponent;
    }();

    PointSalesManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-point-sales-management',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./point-sales-management.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/point-sales-management/point-sales-management.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./point-sales-management.component.scss */
      "./src/app/layout/point-sales-management/point-sales-management.component.scss")).default]
    })], PointSalesManagementComponent);
    /***/
  },

  /***/
  "./src/app/layout/point-sales-management/point-sales-management.module.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/layout/point-sales-management/point-sales-management.module.ts ***!
    \********************************************************************************/

  /*! exports provided: PointSalesManagementModule */

  /***/
  function srcAppLayoutPointSalesManagementPointSalesManagementModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PointSalesManagementModule", function () {
      return PointSalesManagementModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _point_sales_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./point-sales-management.component */
    "./src/app/layout/point-sales-management/point-sales-management.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _point_sales_management_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./point-sales-management-routing.module */
    "./src/app/layout/point-sales-management/point-sales-management-routing.module.ts");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var PointSalesManagementModule = function PointSalesManagementModule() {
      _classCallCheck(this, PointSalesManagementModule);
    };

    PointSalesManagementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_point_sales_management_component__WEBPACK_IMPORTED_MODULE_1__["PointSalesManagementComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _point_sales_management_routing_module__WEBPACK_IMPORTED_MODULE_4__["PointSalesManagementRoutingModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_6__["MatChipsModule"]]
    })], PointSalesManagementModule);
    /***/
  }
}]);
//# sourceMappingURL=point-sales-management-point-sales-management-module-es5.js.map