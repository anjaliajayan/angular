function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/country-list/country-list.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/country-list/country-list.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutCountryListCountryListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div>\r\n    <label>Operating Country<span class=\"mandatory\">*</span></label>\r\n    <select class=\"ui fluid search dropdown\">\r\n      <option value=\"\"> Operating Country</option>\r\n      <option *ngFor=\"let country of countries\" value=\"{{country.country_id}}\">{{country.country}}</option>\r\n    </select>\r\n  </div>\r\n";
    /***/
  },

  /***/
  "./src/app/layout/country-list/country-list.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/layout/country-list/country-list.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutCountryListCountryListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb3VudHJ5LWxpc3QvY291bnRyeS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/layout/country-list/country-list.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/layout/country-list/country-list.component.ts ***!
    \***************************************************************/

  /*! exports provided: CountryListComponent */

  /***/
  function srcAppLayoutCountryListCountryListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryListComponent", function () {
      return CountryListComponent;
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


    var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/services/common.service */
    "./src/app/shared/services/common.service.ts");

    var CountryListComponent =
    /*#__PURE__*/
    function () {
      function CountryListComponent(commonService) {
        _classCallCheck(this, CountryListComponent);

        this.commonService = commonService;
        this.countries = [];
      }

      _createClass(CountryListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCountries();
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          var _this = this;

          this.commonService.getCountryList().subscribe(function (result) {
            _this.countries = result.countries;
          });
        }
      }, {
        key: "selectedCountry",
        value: function selectedCountry(data) {
          console.log(data);
        }
      }]);

      return CountryListComponent;
    }();

    CountryListComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]
      }];
    };

    CountryListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-country-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./country-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/country-list/country-list.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./country-list.component.scss */
      "./src/app/layout/country-list/country-list.component.scss")).default]
    })], CountryListComponent);
    /***/
  },

  /***/
  "./src/app/layout/country-list/country-list.module.ts":
  /*!************************************************************!*\
    !*** ./src/app/layout/country-list/country-list.module.ts ***!
    \************************************************************/

  /*! exports provided: CountryListModule */

  /***/
  function srcAppLayoutCountryListCountryListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryListModule", function () {
      return CountryListModule;
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


    var _country_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./country-list.component */
    "./src/app/layout/country-list/country-list.component.ts");
    /* harmony import */


    var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/common.service */
    "./src/app/shared/services/common.service.ts");

    var CountryListModule_1;

    var CountryListModule = CountryListModule_1 =
    /*#__PURE__*/
    function () {
      function CountryListModule() {
        _classCallCheck(this, CountryListModule);
      }

      _createClass(CountryListModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            NgModule: CountryListModule_1,
            providers: [src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]]
          };
        }
      }]);

      return CountryListModule;
    }();

    CountryListModule = CountryListModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_country_list_component__WEBPACK_IMPORTED_MODULE_3__["CountryListComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_country_list_component__WEBPACK_IMPORTED_MODULE_3__["CountryListComponent"]]
    })], CountryListModule);
    /***/
  },

  /***/
  "./src/app/shared/services/bookings.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/services/bookings.service.ts ***!
    \*****************************************************/

  /*! exports provided: BookingsService */

  /***/
  function srcAppSharedServicesBookingsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingsService", function () {
      return BookingsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var BookingsService =
    /*#__PURE__*/
    function () {
      function BookingsService(http) {
        _classCallCheck(this, BookingsService);

        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverURL;
      }

      _createClass(BookingsService, [{
        key: "fetchBookings",
        value: function fetchBookings(formData) {
          return this.http.post("".concat(this.url, "/api/fetch-all-bookings"), formData);
        } // GET ALL

      }, {
        key: "fetchBookingDetailById",
        value: function fetchBookingDetailById(id) {
          return this.http.get("".concat(this.url, "/api/fetch_value/").concat(id));
        }
      }, {
        key: "exportBooking",
        value: function exportBooking(formData) {
          return this.http.post("".concat(this.url, "/api/export-bookings"), formData);
        } // bookingVoucherPrint(trip_id){
        //   return this.http.get(`${this.url}/api/booking-voucher-print/${trip_id}`, { responseType: 'blob'});
        // }

      }, {
        key: "bookingVoucherPrint",
        value: function bookingVoucherPrint(trip_id) {
          return this.http.get("".concat(this.url, "/api/booking-voucher-print/").concat(trip_id));
        }
      }, {
        key: "bookingPrintPdf",
        value: function bookingPrintPdf(trip_id) {
          return this.http.get("".concat(this.url, "/api/booking-print-invoice/").concat(trip_id), {
            responseType: 'blob'
          });
        }
      }, {
        key: "ancillariesServiceListRequest",
        value: function ancillariesServiceListRequest(ticket) {
          return this.http.post("".concat(this.url, "/api/ancillaries-service-list"), ticket);
        }
      }]);

      return BookingsService;
    }();

    BookingsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    BookingsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], BookingsService);
    /***/
  },

  /***/
  "./src/app/shared/services/common.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/services/common.service.ts ***!
    \***************************************************/

  /*! exports provided: CommonService */

  /***/
  function srcAppSharedServicesCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonService", function () {
      return CommonService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CommonService =
    /*#__PURE__*/
    function () {
      function CommonService(http) {
        _classCallCheck(this, CommonService);

        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverURL;
      } // Get Country list


      _createClass(CommonService, [{
        key: "getCountryList",
        value: function getCountryList() {
          return this.http.get("".concat(this.url, "/api/get-country"));
        } // Get TimeZones list

      }, {
        key: "getTimeZones",
        value: function getTimeZones() {
          return this.http.get("".concat(this.url, "/api/get-timezones"));
        } // Get Cities list

      }, {
        key: "getCityList",
        value: function getCityList(id) {
          return this.http.get("".concat(this.url, "/api/get-country-city/").concat(id));
        } // get organization list

      }, {
        key: "getOrganizationList",
        value: function getOrganizationList() {
          return this.http.get("".concat(this.url, "/api/get-organization-list"));
        }
      }, {
        key: "getHierarchyByOrg",
        value: function getHierarchyByOrg(id) {
          return this.http.get("".concat(this.url, "/api/get-organization-hierarchy/").concat(id));
        } // get organization list

      }, {
        key: "getAgentsList",
        value: function getAgentsList() {
          return this.http.get("".concat(this.url, "/api/get-agents-list"));
        }
      }, {
        key: "getHierarchyByApproval",
        value: function getHierarchyByApproval(id) {
          return this.http.get("".concat(this.url, "/api/get-organization-hierarchy-by-approval/").concat(id));
        }
      }, {
        key: "getSettingList",
        value: function getSettingList(fields) {
          //console.log('╔═══════════════════════════════════════════════════╗')
          //console.log('║ shared/services/common.service.ts::getSettingList ║')
          //console.log('╚═══════════════════════════════════════════════════╝')
          return this.http.post("".concat(this.url, "/api/get-settings"), fields, {
            withCredentials: true
          });
        }
      }, {
        key: "getRficDetails",
        value: function getRficDetails() {
          return this.http.get("".concat(this.url, "/api/get-rfic-list"));
        }
      }, {
        key: "getAirlines",
        value: function getAirlines() {
          return this.http.get("".concat(this.url, "/api/get-airlines-list"));
        }
      }, {
        key: "getSupplierList",
        value: function getSupplierList() {
          return this.http.get("".concat(this.url, "/api/get-supplier-list"));
        }
      }, {
        key: "getSelfAgentsList",
        value: function getSelfAgentsList() {
          return this.http.get("".concat(this.url, "/api/get-self-agent-list"));
        }
      }, {
        key: "getCurrencyList",
        value: function getCurrencyList() {
          return this.http.get("".concat(this.url, "/api/get-currency-list"));
        }
      }, {
        key: "getStaffProfileList",
        value: function getStaffProfileList(orgId) {
          return this.http.get("".concat(this.url, "/api/get-staff-profile-list/").concat(orgId));
        }
      }, {
        key: "getChildCoporatesList",
        value: function getChildCoporatesList() {
          return this.http.get("".concat(this.url, "/api/get-self-agent-list")); // return this.http.get(`${this.url}/api/fetch-all-organization`);
        }
      }, {
        key: "getTransactionDetailByAgent",
        value: function getTransactionDetailByAgent(orgId) {
          return this.http.get("".concat(this.url, "/api/get-transaction-detail-by-agent/").concat(orgId));
        }
      }, {
        key: "getChildAgentList",
        value: function getChildAgentList() {
          return this.http.get("".concat(this.url, "/api/get-self-agent-list")); //    return this.http.get(`${this.url}/api/fetch-all-organization`);
        }
      }, {
        key: "getFloatingSupplierList",
        value: function getFloatingSupplierList() {
          return this.http.get("".concat(this.url, "/api/get-floating-supplier-list"));
        }
      }, {
        key: "getAirportsList",
        value: function getAirportsList() {
          return this.http.get("".concat(this.url, "/api/get-airports-cache"));
        }
      }, {
        key: "uploadImagetoAWS",
        value: function uploadImagetoAWS(base64Img) {
          return this.http.post("".concat(this.url, "/api/upload-image-aws"), {
            b64: base64Img
          });
        }
      }, {
        key: "uploadPDFtoAWS",
        value: function uploadPDFtoAWS(base64Pdf) {
          return this.http.post("".concat(this.url, "/api/upload-pdf-aws"), {
            b64: base64Pdf
          });
        }
      }, {
        key: "getOrgBranches",
        value: function getOrgBranches(orgId) {
          return this.http.get("".concat(this.url, "/api/organization/branches/").concat(orgId));
        }
      }]);

      return CommonService;
    }();

    CommonService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    CommonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], CommonService);
    /***/
  },

  /***/
  "./src/app/shared/services/excel.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/services/excel.service.ts ***!
    \**************************************************/

  /*! exports provided: ExcelService */

  /***/
  function srcAppSharedServicesExcelServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExcelService", function () {
      return ExcelService;
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


    var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! xlsx */
    "./node_modules/xlsx/xlsx.js");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);

    var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    var EXCEL_EXTENSION = '.xlsx';

    var ExcelService =
    /*#__PURE__*/
    function () {
      function ExcelService() {
        _classCallCheck(this, ExcelService);
      }

      _createClass(ExcelService, [{
        key: "exportAsExcelFile",
        value: function exportAsExcelFile(json, excelFileName) {
          var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(json); // console.log('worksheet',worksheet);

          var workbook = {
            Sheets: {
              'data': worksheet
            },
            SheetNames: ['data']
          };
          var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__["write"](workbook, {
            bookType: 'xlsx',
            type: 'array'
          }); //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });

          this.saveAsExcelFile(excelBuffer, excelFileName);
        }
      }, {
        key: "saveAsExcelFile",
        value: function saveAsExcelFile(buffer, fileName) {
          var data = new Blob([buffer], {
            type: EXCEL_TYPE
          });
          file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
        }
      }]);

      return ExcelService;
    }();

    ExcelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ExcelService);
    /***/
  },

  /***/
  "./src/app/shared/services/flight-search.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/services/flight-search.service.ts ***!
    \**********************************************************/

  /*! exports provided: FlightSearchService */

  /***/
  function srcAppSharedServicesFlightSearchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlightSearchService", function () {
      return FlightSearchService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FlightSearchService =
    /*#__PURE__*/
    function () {
      function FlightSearchService(http) {
        _classCallCheck(this, FlightSearchService);

        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL + '/api/flights/';
        this.url1 = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL + '/api/pos/';
        this.searchResults = {};
      }

      _createClass(FlightSearchService, [{
        key: "airportsListing",
        value: function airportsListing(airport) {
          return this.http.get("".concat(this.url, "fetch-airports"));
        }
      }, {
        key: "searchFlight",
        value: function searchFlight(searchData) {
          return this.http.post("".concat(this.url, "air-shopping"), searchData);
        }
      }, {
        key: "flightPriceRequest",
        value: function flightPriceRequest(selectedOfferData) {
          return this.http.post("".concat(this.url, "flight-price"), selectedOfferData);
        }
      }, {
        key: "fetchFareBaggageDetails",
        value: function fetchFareBaggageDetails(fareReq) {
          return this.http.post("".concat(this.url, "flight-price"), {
            farePayload: fareReq
          });
        }
        /*fetchPAXDetails(paxType?: any) {
          return this.http.get(`${this.url}all-pax-types`, {
            params: { paxType }
          });
        }*/

        /*fetchServicesGroups(type?: any) {
          return this.http.get(`${this.url}all-services-groups`, {
            params: { type }
          });
        }*/

      }, {
        key: "orderCreateRequest",
        value: function orderCreateRequest(order) {
          return this.http.post("".concat(this.url, "order-create"), order);
        }
      }, {
        key: "issueTicketRequest",
        value: function issueTicketRequest(ticket) {
          return this.http.post("".concat(this.url, "air-doc-issue"), ticket);
        }
      }, {
        key: "cancelTicketRequest",
        value: function cancelTicketRequest(ticket) {
          return this.http.get("".concat(this.url, "booking-cancel/").concat(ticket.tripId), ticket);
        }
      }, {
        key: "voidTicketRequest",
        value: function voidTicketRequest(ticket) {
          return this.http.get("".concat(this.url, "booking-void/").concat(ticket.tripId), ticket);
        }
      }, {
        key: "refundTicketRequest",
        value: function refundTicketRequest(ticket) {
          return this.http.get("".concat(this.url, "refund/").concat(ticket.tripId), ticket);
        }
      }, {
        key: "fareRulesRequest",
        value: function fareRulesRequest(fare) {
          return this.http.post("".concat(this.url, "fare-rules"), fare);
        }
      }, {
        key: "itinReissueFlight",
        value: function itinReissueFlight(initReissueData) {
          return this.http.post("".concat(this.url, "itin-reissue"), initReissueData);
        }
      }, {
        key: "itinReissueFlightRepriceOnly",
        value: function itinReissueFlightRepriceOnly(repriceData) {
          return this.http.post("".concat(this.url, "itin-reissue-reprice"), repriceData);
        }
      }, {
        key: "itinReissueFlightOrderChange",
        value: function itinReissueFlightOrderChange(repriceData) {
          return this.http.post("".concat(this.url, "itin-reissue-order-change"), repriceData);
        }
      }, {
        key: "fetchAllPos",
        value: function fetchAllPos() {
          return this.http.get("".concat(this.url1, "fetch-active-pos"));
        }
      }, {
        key: "itinReissueFlightOrderChangeDB",
        value: function itinReissueFlightOrderChangeDB(segmentListToUpdate, passengerListToUpdate, ticketListToUpdate, ticketListToCreate, ticketEmdListToCreate, bookingsListToUpdate, bookingsFlightListToUpdate) {
          return this.http.post("".concat(this.url, "itin-reissue-order-change-db"), {
            updateSegmentList: segmentListToUpdate,
            updatePassengerList: passengerListToUpdate,
            updateTicketList: ticketListToUpdate,
            createTicketList: ticketListToCreate,
            createTicketEmdList: ticketEmdListToCreate,
            updateBookingsList: bookingsListToUpdate,
            updateBookingsFlightList: bookingsFlightListToUpdate
          });
        }
      }]);

      return FlightSearchService;
    }();

    FlightSearchService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    FlightSearchService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
      providedIn: 'root'
    })], FlightSearchService);
    /***/
  },

  /***/
  "./src/app/shared/services/index.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/services/index.ts ***!
    \******************************************/

  /*! exports provided: FlightSearchService, BookingsService */

  /***/
  function srcAppSharedServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _flight_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./flight-search.service */
    "./src/app/shared/services/flight-search.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FlightSearchService", function () {
      return _flight_search_service__WEBPACK_IMPORTED_MODULE_1__["FlightSearchService"];
    });
    /* harmony import */


    var _bookings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./bookings.service */
    "./src/app/shared/services/bookings.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "BookingsService", function () {
      return _bookings_service__WEBPACK_IMPORTED_MODULE_2__["BookingsService"];
    });
    /***/

  },

  /***/
  "./src/app/shared/services/pointsale.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/services/pointsale.service.ts ***!
    \******************************************************/

  /*! exports provided: POSService */

  /***/
  function srcAppSharedServicesPointsaleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "POSService", function () {
      return POSService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var POSService =
    /*#__PURE__*/
    function () {
      function POSService(http) {
        _classCallCheck(this, POSService);

        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverURL;
      }

      _createClass(POSService, [{
        key: "fetchAllPointofSale",
        value: function fetchAllPointofSale(data) {
          return this.http.post("".concat(this.url, "/api/organization/fetch-pos"), data);
        }
      }]);

      return POSService;
    }();

    POSService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    POSService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], POSService);
    /***/
  },

  /***/
  "./src/app/shared/services/profile-management/profile-management.service.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/shared/services/profile-management/profile-management.service.ts ***!
    \**********************************************************************************/

  /*! exports provided: ProfileManagementService */

  /***/
  function srcAppSharedServicesProfileManagementProfileManagementServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileManagementService", function () {
      return ProfileManagementService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../../environments/environment */
    "./src/environments/environment.ts");

    var ProfileManagementService =
    /*#__PURE__*/
    function () {
      function ProfileManagementService(http) {
        _classCallCheck(this, ProfileManagementService);

        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].serverURL;
        this.pager = {};
        this.pageOfItems = []; // Http Headers

        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      } // POST


      _createClass(ProfileManagementService, [{
        key: "NewTravellerProfile",
        value: function NewTravellerProfile(data) {
          return this.http.post("".concat(this.url, "/api/create-new-traveller-profile"), JSON.stringify(data), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
        }
      }, {
        key: "NewGroupProfile",
        value: function NewGroupProfile(data) {
          return this.http.post("".concat(this.url, "/api/create-new-group-profile"), JSON.stringify(data), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
        }
      }, {
        key: "NewCompanyProfile",
        value: function NewCompanyProfile(data) {
          return this.http.post("".concat(this.url, "/api/create-new-company-profile"), JSON.stringify(data), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
        }
      }, {
        key: "NewAgencyProfile",
        value: function NewAgencyProfile(data) {
          return this.http.post("".concat(this.url, "/api/create-new-agency-profile"), JSON.stringify(data), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
        } // GET WITH ID

      }, {
        key: "GetTravellerById",
        value: function GetTravellerById(id) {
          return this.http.get("".concat(this.url, "/api/fetch-new-traveller-profile") + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
        } // GET ALL

      }, {
        key: "GetAllTraveller",
        value: function GetAllTraveller(travellID, limit, pageIndex) {
          return this.http.get("".concat(this.url, "/api/fetch-all-traveller-profile?page=", 1)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
        } // GET ALL

      }, {
        key: "GetAllCompanies",
        value: function GetAllCompanies(travellID, limit, pageIndex) {
          return this.http.get("".concat(this.url, "/api/fetch-all-company-profile")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
        }
      }, {
        key: "GetAllAgencies",
        value: function GetAllAgencies(travellID, limit, pageIndex) {
          return this.http.get("".concat(this.url, "/api/fetch-all-agency-profile")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
        }
      }, {
        key: "GetAllGroups",
        value: function GetAllGroups(travellID, limit, pageIndex) {
          return this.http.get("".concat(this.url, "/api/fetch-all-group-profile")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
        } // PUT

      }, {
        key: "UpdateTravellerProfile",
        value: function UpdateTravellerProfile(id, data) {
          return this.http.put("".concat(this.url, "/api/update-new-traveller-profile?traveller_profile_id=") + id, JSON.stringify(data), this.httpOptions) //return this.http.put<NewTravellerProfile>(`${this.url}/api/update-new-traveller-profile` + id, JSON.stringify(data), this.httpOptions)
          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
        }
      }, {
        key: "UpdateGroupProfile",
        value: function UpdateGroupProfile(id, data) {
          return this.http.put("".concat(this.url, "/api/update-new-group-profile?group_profile_id=") + id, JSON.stringify(data), this.httpOptions) //return this.http.put<NewTravellerProfile>(`${this.url}/api/update-new-traveller-profile` + id, JSON.stringify(data), this.httpOptions)
          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
        }
      }, {
        key: "UpdateAgencyProfile",
        value: function UpdateAgencyProfile(id, data) {
          return this.http.put("".concat(this.url, "/api/update-new-agency-profile?agency_profile_id=") + id, JSON.stringify(data), this.httpOptions) //return this.http.put<NewTravellerProfile>(`${this.url}/api/update-new-traveller-profile` + id, JSON.stringify(data), this.httpOptions)
          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
        }
      }, {
        key: "UpdateCompanyProfile",
        value: function UpdateCompanyProfile(id, data) {
          return this.http.put("".concat(this.url, "/api/update-new-company-profile?company_profile_id=") + id, JSON.stringify(data), this.httpOptions) //return this.http.put<NewTravellerProfile>(`${this.url}/api/update-new-traveller-profile` + id, JSON.stringify(data), this.httpOptions)
          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
        } // DELETE

      }, {
        key: "DeleteTravellerById",
        value: function DeleteTravellerById(id) {
          return this.http.delete("".concat(this.url, "/api/remove-traveller-profile?traveller_profile_id=") + id, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
        }
      }, {
        key: "DeleteCompanyById",
        value: function DeleteCompanyById(id) {
          return this.http.delete("".concat(this.url, "/api/remove-company-profile?company_profile_id=") + id, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
        }
      }, {
        key: "DeleteAgencyById",
        value: function DeleteAgencyById(id) {
          return this.http.delete("".concat(this.url, "/api/remove-agency-profile?agency_profile_id=") + id, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
        }
      }, {
        key: "DeleteGroupById",
        value: function DeleteGroupById(id) {
          return this.http.delete("".concat(this.url, "/api/remove-group-profile?group_profile_id=") + id, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
        }
      }, {
        key: "ReteriveProfileData",
        value: function ReteriveProfileData(options) {
          return this.http.post("".concat(this.url, "/api/retrive-all-profiles-data"), options, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
        } // Error handling

      }, {
        key: "errorHandl",
        value: function errorHandl(error) {
          var errorMessage = '';

          if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
          } else {
            // Get server-side error
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
          }

          console.log(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
        }
      }]);

      return ProfileManagementService;
    }();

    ProfileManagementService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ProfileManagementService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProfileManagementService);
    /***/
  },

  /***/
  "./src/app/shared/services/report/report.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/services/report/report.service.ts ***!
    \**********************************************************/

  /*! exports provided: ReportService */

  /***/
  function srcAppSharedServicesReportReportServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportService", function () {
      return ReportService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ReportService =
    /*#__PURE__*/
    function () {
      function ReportService(http) {
        _classCallCheck(this, ReportService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL;
        this.pager = {};
        this.pageOfItems = []; // Http Headers

        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      } // GET ALL FLIGHTS


      _createClass(ReportService, [{
        key: "GetAllFlightLogs",
        value: function GetAllFlightLogs(data) {
          return this.http.post("".concat(this.url, "/api/fetch-all-Flight-Search-Log"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } // GET ALL HOTELS

      }, {
        key: "GetAllHotelLogs",
        value: function GetAllHotelLogs(data) {
          return this.http.post("".concat(this.url, "/api/fetch-all-Hotel-Search-Log"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } // GET ALL CARS

      }, {
        key: "GetAllCarLogs",
        value: function GetAllCarLogs(data) {
          return this.http.post("".concat(this.url, "/api/fetch-all-Car-Search-Log"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } // GET ALL ACTIVITY

      }, {
        key: "GetAllActivityLogs",
        value: function GetAllActivityLogs(data) {
          return this.http.post("".concat(this.url, "/api/fetch-all-Activities-Search-Log"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } // GET ALL TRANSFER

      }, {
        key: "GetAllTransferLogs",
        value: function GetAllTransferLogs(data) {
          return this.http.post("".concat(this.url, "/api/fetch-all-Transfer-Search-Log"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } // GET ALL INSURANCE

      }, {
        key: "GetAllInsuranceLogs",
        value: function GetAllInsuranceLogs(data) {
          return this.http.post("".concat(this.url, "/api/fetch-all-Insurance-Search-Log"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } // GET ALL AUDIT TRAIL

      }, {
        key: "GetAllAuditTrail",
        value: function GetAllAuditTrail(data) {
          return this.http.post("".concat(this.url, "/api/fetch-all-Audit-Trail"), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } // GET ALL SEGMENTS

      }, {
        key: "GetAllSegments",
        value: function GetAllSegments(tourID, limit, pageIndex) {
          return this.http.get("".concat(this.url, "/api/fetch-all-segment-details")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } //Fetch all organization

      }, {
        key: "GetAllOrganization",
        value: function GetAllOrganization() {
          return this.http.get("".concat(this.url, "/api/pos/fetch-active-pos")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } //POST

      }, {
        key: "NewDynamicPivotTable",
        value: function NewDynamicPivotTable(data) {
          return this.http.post("".concat(this.url, "/api/dynamic-report-data"), data, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        }
      }, {
        key: "searchReportBooking",
        value: function searchReportBooking(data) {
          return this.http.post("".concat(this.url, "/api/search-bookings-by-organisation"), data);
        } //search tickets

      }, {
        key: "searchTicketReport",
        value: function searchTicketReport(data) {
          return this.http.post("".concat(this.url, "/api/search-tickets-new"), data);
        } // GET audit trail search

      }, {
        key: "GetAllAuditSearchReport",
        value: function GetAllAuditSearchReport(params) {
          var queryString = Object.keys(params).map(function (key) {
            return key + '=' + params[key];
          }).join('&');
          return this.http.get("".concat(this.url, "/api/get-audit-trails?").concat(queryString)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } //Fetch all agents

      }, {
        key: "GetAllAgents",
        value: function GetAllAgents() {
          return this.http.get("".concat(this.url, "/api/fetch-all-organization"), {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } //Fetch all products

      }, {
        key: "GetAllProducts",
        value: function GetAllProducts(tourID, limit, pageIndex) {
          return this.http.get("".concat(this.url, "/api/get-active-products")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } //Fetch all suppliers

      }, {
        key: "GetAllSuppliers",
        value: function GetAllSuppliers(tourID, limit, pageIndex) {
          return this.http.get("".concat(this.url, "/api/fetch-all-supplier")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } //Fetch all flight search platforms

      }, {
        key: "GetAllFlightPlatforms",
        value: function GetAllFlightPlatforms() {
          return this.http.get("".concat(this.url, "/api/Flight-Search-Log/count")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } //Fetch all flight search platforms

      }, {
        key: "GetAllFlightMonthlyReport",
        value: function GetAllFlightMonthlyReport() {
          return this.http.get("".concat(this.url, "/api/Flight-Search-Log/monthlwise")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } //fetch all airport details

      }, {
        key: "GetAllAirportCode",
        value: function GetAllAirportCode() {
          return this.http.get("".concat(this.url, "/api/get-airports-cache")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        }
      }, {
        key: "getAllBookingDetails",
        value: function getAllBookingDetails() {
          return this.http.get("".concat(this.url, "/api/fetch_value/:id")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } // Get User role Details

      }, {
        key: "getFlightBookingDetails",
        value: function getFlightBookingDetails(id) {
          return this.http.get("".concat(this.url, "/api/booking/").concat(id));
        }
      }, {
        key: "GetSearchedSegmentReports",
        value: function GetSearchedSegmentReports(params) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
          headers.append('Content-Type', 'application/json');
          return this.http.post("".concat(this.url, "/api/search-segments"), params, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        }
      }, {
        key: "GetFilteredFlightSearch",
        value: function GetFilteredFlightSearch(params) {
          return this.http.post("".concat(this.url, "/api/fetch-all-Flight-Search-Log"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        }
      }, {
        key: "exportBooking",
        value: function exportBooking(data) {
          return this.http.post("".concat(this.url, "/api/export-booking-report"), data);
        }
      }, {
        key: "exportSearchLog",
        value: function exportSearchLog(data) {
          return this.http.post("".concat(this.url, "/api/export-search-log-report"), data);
        }
      }, {
        key: "exportTicket",
        value: function exportTicket(data) {
          return this.http.post("".concat(this.url, "/api/export-tickets-report"), data);
        } // Error handling

      }, {
        key: "errorHandl",
        value: function errorHandl(error) {
          var errorMessage = '';

          if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
          } else {
            // Get server-side error
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
          }

          console.log(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
        }
      }]);

      return ReportService;
    }();

    ReportService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    ReportService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ReportService);
    /***/
  },

  /***/
  "./src/app/shared/services/setup-config/setup-config.service.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/services/setup-config/setup-config.service.ts ***!
    \**********************************************************************/

  /*! exports provided: SetupConfigService */

  /***/
  function srcAppSharedServicesSetupConfigSetupConfigServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SetupConfigService", function () {
      return SetupConfigService;
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


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var SetupConfigService =
    /*#__PURE__*/
    function () {
      function SetupConfigService(http) {
        _classCallCheck(this, SetupConfigService);

        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL;
        this.pager = {};
        this.pageOfItems = []; // Http Headers

        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      } // GET ALL


      _createClass(SetupConfigService, [{
        key: "GetAllAirlines",
        value: function GetAllAirlines(formData) {
          return this.http.post("".concat(this.url, "/api/fetch-all-tourcodes"), formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } // read all commissions

      }, {
        key: "GetAllAirCommissions",
        value: function GetAllAirCommissions(formData) {
          return this.http.post("".concat(this.url, "/api/fetch-all-commissions"), formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } // GET ALL SUPPLIERS

      }, {
        key: "FetchAllSuppliers",
        value: function FetchAllSuppliers(formData) {
          return this.http.get("".concat(this.url, "/api/fetch-all-supplier")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } // GET ALL SUPPLIERS

      }, {
        key: "GetAllSuppliers",
        value: function GetAllSuppliers(formData) {
          console.log("formData::::", formData);
          return this.http.post("".concat(this.url, "/api/read-all-supplier"), formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } // GET ALL

      }, {
        key: "GetAllHotels",
        value: function GetAllHotels(tourID, limit, pageIndex) {
          return this.http.get("".concat(this.url, "/api/fetch-all-content")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } // GET ALL

      }, {
        key: "GetAllEmails",
        value: function GetAllEmails(tourID, limit, pageIndex) {
          return this.http.get("".concat(this.url, "/api/fetch-all-email-template")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } // GET ALL

      }, {
        key: "GetAllCurrencies",
        value: function GetAllCurrencies(formData) {
          return this.http.post("".concat(this.url, "/api/fetch-all-currency"), formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } // GET ALL

      }, {
        key: "GetAllMarkups",
        value: function GetAllMarkups(params) {
          return this.http.post("".concat(this.url, "/api/fetch-all-markups"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } // GET ALL

      }, {
        key: "GetAllGroups",
        value: function GetAllGroups(params) {
          return this.http.post("".concat(this.url, "/api/fetch-all-sales"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } // Add Group/ Sale

      }, {
        key: "AddGroup",
        value: function AddGroup(params) {
          return this.http.post("".concat(this.url, "/api/add-sale"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        }
      }, {
        key: "deleteGroup",
        value: function deleteGroup(id) {
          return this.http.post("".concat(this.url, "/api/delete-sale/").concat(id), {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } // Add Markup

      }, {
        key: "AddMarkup",
        value: function AddMarkup(params) {
          return this.http.post("".concat(this.url, "/api/add-markup"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        }
      }, {
        key: "deleteMarkup",
        value: function deleteMarkup(id) {
          return this.http.post("".concat(this.url, "/api/delete-markup/").concat(id), {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        }
      }, {
        key: "getEmailInfo",
        value: function getEmailInfo(id) {
          return this.http.get("".concat(this.url, "/api/fetch-email-template/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        }
      }, {
        key: "updateTemplate",
        value: function updateTemplate(formData) {
          return this.http.post("".concat(this.url, "/api/update-email-template"), formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } // Add New tourcode

      }, {
        key: "addTourCodeSupplier",
        value: function addTourCodeSupplier(formData) {
          return this.http.post("".concat(this.url, "/api/create-new-tourcode"), formData, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'Content-Type': "application/json; charset=UTF-8"
            })
          });
        } // Delete tour code user

      }, {
        key: "deleteTourcode",
        value: function deleteTourcode(data) {
          return this.http.post("".concat(this.url, "/api/remove-tourcode"), data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'Content-Type': "application/json; charset=UTF-8"
            })
          });
        } //updating tour code user details

      }, {
        key: "getUpdateTourCode",
        value: function getUpdateTourCode(id, obj) {
          return this.http.post("".concat(this.url, "/api/update-tourcode/").concat(id), obj);
        } //create new commission

      }, {
        key: "addCommission",
        value: function addCommission(formData) {
          return this.http.post("".concat(this.url, "/api/create-new-commission"), formData, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'Content-Type': "application/json; charset=UTF-8"
            })
          });
        } //update commission  details

      }, {
        key: "getUpdateCommission",
        value: function getUpdateCommission(id, obj) {
          return this.http.post("".concat(this.url, "/api/update-commission/").concat(id), obj);
        } //delete commission

      }, {
        key: "deleteCommission",
        value: function deleteCommission(id) {
          return this.http.delete("".concat(this.url, "/api/remove-commission/").concat(id));
        }
      }, {
        key: "deleteCurrency",
        value: function deleteCurrency(id) {
          return this.http.post("".concat(this.url, "/api/remove-currency/").concat(id), "");
        }
      }, {
        key: "addCurrency",
        value: function addCurrency(formData) {
          return this.http.post("".concat(this.url, "/api/create-new-currency"), formData, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
              'Content-Type': "application/json; charset=UTF-8"
            })
          });
        }
      }, {
        key: "getUpdateCurrency",
        value: function getUpdateCurrency(id, obj) {
          return this.http.put("".concat(this.url, "/api/update-currency/").concat(id), obj);
        } //fetch all countries

      }, {
        key: "GetAllCountries",
        value: function GetAllCountries() {
          return this.http.get("".concat(this.url, "/api/get-country-list-db")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } //fetch supplier by id

      }, {
        key: "getSupplier",
        value: function getSupplier(id) {
          return this.http.get("".concat(this.url, "/api/fetch-supplier/").concat(id));
        }
      }, {
        key: "updateSupplier",
        value: function updateSupplier(id, obj) {
          return this.http.post("".concat(this.url, "/api/update-supplier/").concat(id), obj);
        }
      }, {
        key: "editGroup",
        value: function editGroup(params) {
          return this.http.post("".concat(this.url, "/api/add-sale"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        }
      }, {
        key: "editMarkup",
        value: function editMarkup(params) {
          console.log("params---------", params);
          return this.http.post("".concat(this.url, "/api/add-markup"), params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        }
      }, {
        key: "searchMarkupByName",
        value: function searchMarkupByName(data) {
          return this.http.post("".concat(this.url, "/api/search-markups"), data);
        }
      }, {
        key: "searchGroupByName",
        value: function searchGroupByName(data) {
          return this.http.post("".concat(this.url, "/api/search-sales"), data);
        }
      }, {
        key: "onStatusToggle",
        value: function onStatusToggle(data) {
          return this.http.post("".concat(this.url, "/api/toggle-status"), data);
        }
      }, {
        key: "addAirlineRoutes",
        value: function addAirlineRoutes(data) {
          return this.http.post("".concat(this.url, "/api/create-new-routes"), data);
        }
      }, {
        key: "deleteAirlineRoutes",
        value: function deleteAirlineRoutes(data) {
          return this.http.post("".concat(this.url, "/api/remove-routes"), data);
        }
      }, {
        key: "getUpdateAirlineRoutes",
        value: function getUpdateAirlineRoutes(obj) {
          return this.http.post("".concat(this.url, "/api/update-routes"), obj);
        }
      }, {
        key: "fetchAllPointofSale",
        value: function fetchAllPointofSale(data) {
          return this.http.post("".concat(this.url, "/api/pos/fetch-pos"), data);
        }
      }, {
        key: "getAllAirlineRoutes",
        value: function getAllAirlineRoutes(page) {
          return this.http.post("".concat(this.url, "/api/fetch-all-routes"), page).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
        } // Error handling

      }, {
        key: "errorHandl",
        value: function errorHandl(error) {
          var errorMessage = '';

          if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
          } else {
            // Get server-side error
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
        }
      }]);

      return SetupConfigService;
    }();

    SetupConfigService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    SetupConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SetupConfigService);
    /***/
  },

  /***/
  "./src/app/shared/utils/array.helper.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/utils/array.helper.ts ***!
    \**********************************************/

  /*! exports provided: convertToArray */

  /***/
  function srcAppSharedUtilsArrayHelperTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "convertToArray", function () {
      return convertToArray;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    function convertToArray(value) {
      var arr = [];
      if (Array.isArray(value)) return value;else arr.push(value);
      return arr;
    }
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map