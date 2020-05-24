(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["content-management-content-management-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/content-management/content-management.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/content-management/content-management.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3><span class=\"update-header\">Feature Hotel Listing</span></h3>\r\n<div class=\"ui fluid container\">\r\n  <div class=\"outer-basic\">\r\n    <div class=\"outer-basicForm\">\r\n      <div class=\"ui form\">\r\n        <div class=\"email-list b2c-list-user-table\">\r\n          <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\"\r\n          [footerHeight]=\"50\" [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='NewListOfHotels'\r\n          [sortType]=\"'multi'\" [reorderable]=\"true\" [sorts]=\"[{prop: 'id', dir: 'desc'}]\">\r\n          <ngx-datatable-column name=\"Hotel Name\" prop=\"hotel_name\">         \r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Check-In\" prop=\"hotel_name\">\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Check-Out\" prop=\"hotel_name\">\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Room Decription\" prop=\"room_description\">\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"No of Rooms\" prop=\"hotel_name\">\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Markup Price\" prop=\"markup_price\">\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Supplier Price\" prop=\"supplier_price\">\r\n          </ngx-datatable-column>\r\n          <ngx-datatable-column name=\"Supplier Code\" prop=\"supplier_code\">\r\n          </ngx-datatable-column>\r\n          <!-- for delete -->\r\n          <!-- <ngx-datatable-column name=\"Delete\" prop=\"created\">\r\n          </ngx-datatable-column> -->\r\n      </ngx-datatable>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n");

/***/ }),

/***/ "./src/app/layout/setup-configuration/content-management/content-management-routing.module.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/content-management/content-management-routing.module.ts ***!
  \****************************************************************************************************/
/*! exports provided: ContentManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentManagementRoutingModule", function() { return ContentManagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _content_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-management.component */ "./src/app/layout/setup-configuration/content-management/content-management.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: '', component: _content_management_component__WEBPACK_IMPORTED_MODULE_1__["ContentManagementComponent"] }
];
let ContentManagementRoutingModule = class ContentManagementRoutingModule {
};
ContentManagementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], ContentManagementRoutingModule);



/***/ }),

/***/ "./src/app/layout/setup-configuration/content-management/content-management.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/content-management/content-management.component.scss ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".update-header {\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n  margin-left: 30px;\n}\n\n.ui.fluid.container {\n  padding: 25px;\n}\n\n.outer-basic {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n}\n\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n  padding: 30px 15px;\n}\n\n.basic-header {\n  font-family: \"Roboto\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vY29udGVudC1tYW5hZ2VtZW50L0U6XFxCZWxhbFxccHJvamVjdHNcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcc2V0dXAtY29uZmlndXJhdGlvblxcY29udGVudC1tYW5hZ2VtZW50XFxjb250ZW50LW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9zZXR1cC1jb25maWd1cmF0aW9uL2NvbnRlbnQtbWFuYWdlbWVudC9jb250ZW50LW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxpQ0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3NldHVwLWNvbmZpZ3VyYXRpb24vY29udGVudC1tYW5hZ2VtZW50L2NvbnRlbnQtbWFuYWdlbWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi51cGRhdGUtaGVhZGVyIHtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi51aS5mbHVpZC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMjVweDtcclxufVxyXG5cclxuLm91dGVyLWJhc2ljIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5vdXRlci1iYXNpY0Zvcm0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAzMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5iYXNpYy1oZWFkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59IiwiLnVwZGF0ZS1oZWFkZXIge1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogMjAwO1xuICBsaW5lLWhlaWdodDogMjJweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG5cbi51aS5mbHVpZC5jb250YWluZXIge1xuICBwYWRkaW5nOiAyNXB4O1xufVxuXG4ub3V0ZXItYmFzaWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLm91dGVyLWJhc2ljRm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDMwcHggMTVweDtcbn1cblxuLmJhc2ljLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/layout/setup-configuration/content-management/content-management.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/content-management/content-management.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ContentManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentManagementComponent", function() { return ContentManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/setup-config/setup-config.service */ "./src/app/shared/services/setup-config/setup-config.service.ts");



let ContentManagementComponent = class ContentManagementComponent {
    constructor(ListOfHotelService) {
        this.ListOfHotelService = ListOfHotelService;
        this.limit = 15;
        this.pageIndex = 1;
        this.NewListOfHotels = [];
        this.totalListOfHotels = 0;
        this.pages = 0;
    }
    ngOnInit() {
        this.fetchAllListOfHotels(this.limit, this.pageIndex);
    }
    fetchAllListOfHotels(limit, pageIndex) {
        this.ListOfHotelService.GetAllHotels(0, limit, pageIndex)
            .subscribe((res) => {
            if (res.status == 200) {
                this.totalListOfHotels = res.contentsMng;
                this.pages = this.totalListOfHotels / this.limit;
                this.NewListOfHotels = res.contentsMng;
                console.log("Check this data airline tourcodes" + this.totalListOfHotels);
                console.log("This is the response" + res);
            }
        });
    }
};
ContentManagementComponent.ctorParameters = () => [
    { type: src_app_shared_services_setup_config_setup_config_service__WEBPACK_IMPORTED_MODULE_2__["SetupConfigService"] }
];
ContentManagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-content-management',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./content-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/setup-configuration/content-management/content-management.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./content-management.component.scss */ "./src/app/layout/setup-configuration/content-management/content-management.component.scss")).default]
    })
], ContentManagementComponent);



/***/ }),

/***/ "./src/app/layout/setup-configuration/content-management/content-management.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/setup-configuration/content-management/content-management.module.ts ***!
  \********************************************************************************************/
/*! exports provided: ContentManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentManagementModule", function() { return ContentManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _content_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-management.component */ "./src/app/layout/setup-configuration/content-management/content-management.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-moment */ "./node_modules/ngx-moment/__ivy_ngcc__/fesm2015/ngx-moment.js");
/* harmony import */ var _content_management_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content-management-routing.module */ "./src/app/layout/setup-configuration/content-management/content-management-routing.module.ts");







let ContentManagementModule = class ContentManagementModule {
};
ContentManagementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_content_management_component__WEBPACK_IMPORTED_MODULE_1__["ContentManagementComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_4__["NgxDatatableModule"],
            ngx_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"],
            _content_management_routing_module__WEBPACK_IMPORTED_MODULE_6__["ContentManagementRoutingModule"]
        ]
    })
], ContentManagementModule);



/***/ })

}]);
//# sourceMappingURL=content-management-content-management-module-es2016.js.map