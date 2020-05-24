(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/country-list/country-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/country-list/country-list.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div>\r\n    <label>Operating Country<span class=\"mandatory\">*</span></label>\r\n    <select class=\"ui fluid search dropdown\">\r\n      <option value=\"\"> Operating Country</option>\r\n      <option *ngFor=\"let country of countries\" value=\"{{country.country_id}}\">{{country.country}}</option>\r\n    </select>\r\n  </div>\r\n");

/***/ }),

/***/ "./src/app/layout/country-list/country-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/layout/country-list/country-list.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb3VudHJ5LWxpc3QvY291bnRyeS1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/layout/country-list/country-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/layout/country-list/country-list.component.ts ***!
  \***************************************************************/
/*! exports provided: CountryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryListComponent", function() { return CountryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/common.service */ "./src/app/shared/services/common.service.ts");



let CountryListComponent = class CountryListComponent {
    constructor(commonService) {
        this.commonService = commonService;
        this.countries = [];
    }
    ngOnInit() {
        this.getCountries();
    }
    getCountries() {
        this.commonService.getCountryList().subscribe((result) => {
            this.countries = result.countries;
        });
    }
    selectedCountry(data) {
        console.log(data);
    }
};
CountryListComponent.ctorParameters = () => [
    { type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"] }
];
CountryListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-country-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./country-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/country-list/country-list.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./country-list.component.scss */ "./src/app/layout/country-list/country-list.component.scss")).default]
    })
], CountryListComponent);



/***/ }),

/***/ "./src/app/layout/country-list/country-list.module.ts":
/*!************************************************************!*\
  !*** ./src/app/layout/country-list/country-list.module.ts ***!
  \************************************************************/
/*! exports provided: CountryListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryListModule", function() { return CountryListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _country_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./country-list.component */ "./src/app/layout/country-list/country-list.component.ts");
/* harmony import */ var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/common.service */ "./src/app/shared/services/common.service.ts");
var CountryListModule_1;





let CountryListModule = CountryListModule_1 = class CountryListModule {
    static forRoot() {
        return {
            NgModule: CountryListModule_1,
            providers: [src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]]
        };
    }
};
CountryListModule = CountryListModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_country_list_component__WEBPACK_IMPORTED_MODULE_3__["CountryListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        exports: [_country_list_component__WEBPACK_IMPORTED_MODULE_3__["CountryListComponent"]]
    })
], CountryListModule);



/***/ }),

/***/ "./src/app/shared/services/activity.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/activity.service.ts ***!
  \*****************************************************/
/*! exports provided: ActivitySearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivitySearchService", function() { return ActivitySearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




let ActivitySearchService = class ActivitySearchService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL;
        this.searchResults = {};
    }
    searchActivity(searchData) {
        return this.http.post(`${this.url}/api/activities`, searchData);
    }
    activityDetails(details) {
        return this.http.post(`${this.url}/api/activities/details`, details);
    }
    BlockRequest(block) {
        return this.http.post(`${this.url}/api/activities/block`, block);
    }
    orderCreateRequest(book) {
        return this.http.post(`${this.url}/api/activities/book`, book);
    }
    orderCancelRequest(cancel) {
        return this.http.post(`${this.url}/api/activities/cancel`, cancel);
    }
    orderReteriveRequest(reterive) {
        return this.http.post(`${this.url}/api/activities/orderreterive`, reterive);
    }
    activitySendVoucher(voucher) {
        return this.http.post(`${this.url}/api/activities/booking-voucher-send`, voucher);
    }
};
ActivitySearchService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ActivitySearchService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], ActivitySearchService);



/***/ }),

/***/ "./src/app/shared/services/common.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/common.service.ts ***!
  \***************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




let CommonService = class CommonService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverURL;
    }
    // Get Country list
    getCountryList() {
        return this.http.get(`${this.url}/api/get-country`);
    }
    // Get TimeZones list
    getTimeZones() {
        return this.http.get(`${this.url}/api/get-timezones`);
    }
    // Get Cities list
    getCityList(id) {
        return this.http.get(`${this.url}/api/get-country-city/${id}`);
    }
    // get organization list
    getOrganizationList() {
        return this.http.get(`${this.url}/api/get-organization-list`);
    }
    getOrganizationById(id) {
        return this.http.get(`${this.url}/api/pos/fetch-pos/${id}`);
    }
    getHierarchyByOrg(id) {
        return this.http.get(`${this.url}/api/get-organization-hierarchy/${id}`);
    }
    // get organization list
    getAgentsList() {
        return this.http.get(`${this.url}/api/get-agents-list`);
    }
    getHierarchyByApproval(id) {
        return this.http.get(`${this.url}/api/get-organization-hierarchy-by-approval/${id}`);
    }
    getSettingList(fields) {
        //console.log('╔═══════════════════════════════════════════════════╗')
        //console.log('║ shared/services/common.service.ts::getSettingList ║')
        //console.log('╚═══════════════════════════════════════════════════╝')
        return this.http.post(`${this.url}/api/get-settings`, fields, { withCredentials: true });
    }
    getRficDetails() {
        return this.http.get(`${this.url}/api/get-rfic-list`);
    }
    getAirlines() {
        return this.http.get(`${this.url}/api/get-airlines-list`);
    }
    getSupplierList() {
        return this.http.get(`${this.url}/api/get-supplier-list`);
    }
    getSelfAgentsList() {
        return this.http.get(`${this.url}/api/get-self-agent-list`);
    }
    getCurrencyList() {
        return this.http.get(`${this.url}/api/get-currency-list`);
    }
    getStaffProfileList(orgId) {
        return this.http.get(`${this.url}/api/get-staff-profile-list/${orgId}`);
    }
    getChildCoporatesList() {
        return this.http.get(`${this.url}/api/get-self-agent-list`);
        // return this.http.get(`${this.url}/api/fetch-all-organization`);
    }
    getTransactionDetailByAgent(orgId) {
        return this.http.get(`${this.url}/api/get-transaction-detail-by-agent/${orgId}`);
    }
    getChildAgentList() {
        return this.http.get(`${this.url}/api/get-self-agent-list`);
        //    return this.http.get(`${this.url}/api/fetch-all-organization`);
    }
    getFloatingSupplierList() {
        return this.http.get(`${this.url}/api/get-floating-supplier-list`);
    }
    getAirportsList() {
        return this.http.get(`${this.url}/api/get-airports-cache`);
    }
    uploadImagetoAWS(base64Img) {
        return this.http.post(`${this.url}/api/upload-image-aws`, { b64: base64Img });
    }
    uploadPDFtoAWS(base64Pdf) {
        return this.http.post(`${this.url}/api/upload-pdf-aws`, { b64: base64Pdf });
    }
    getOrgBranches(orgId) {
        return this.http.get(`${this.url}/api/organization/branches/${orgId}`);
    }
    makeTransaction(pramas) {
        return this.http.post(`${this.url}/api//make-agent-transaction`, pramas);
    }
};
CommonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
CommonService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], CommonService);



/***/ }),

/***/ "./src/app/shared/services/excel.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/excel.service.ts ***!
  \**************************************************/
/*! exports provided: ExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelService", function() { return ExcelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);




const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
let ExcelService = class ExcelService {
    constructor() { }
    exportAsExcelFile(json, excelFileName) {
        const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(json);
        // console.log('worksheet',worksheet);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    }
    saveAsExcelFile(buffer, fileName) {
        const data = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    }
};
ExcelService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ExcelService);



/***/ }),

/***/ "./src/app/shared/services/flight-search.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/flight-search.service.ts ***!
  \**********************************************************/
/*! exports provided: FlightSearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightSearchService", function() { return FlightSearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




let FlightSearchService = class FlightSearchService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL + '/api/flights/';
        this.url1 = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL + '/api/pos/';
        this.url2 = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].serverURL + '/api/';
        this.searchResults = {};
    }
    airportsListing(airport) {
        return this.http.get(`${this.url}fetch-airports`);
    }
    searchFlight(searchData) {
        return this.http.post(`${this.url}air-shopping`, searchData);
    }
    searchFlightStatic(searchData) {
        return this.http.post(`${this.url}air-shoppingStatic`, searchData);
    }
    flightPriceRequest(selectedOfferData) {
        return this.http.post(`${this.url}flight-price`, selectedOfferData);
    }
    fetchFareBaggageDetails(fareReq) {
        return this.http.post(`${this.url}flight-price`, { farePayload: fareReq });
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
    orderCreateRequest(order) {
        return this.http.post(`${this.url}order-create`, order);
    }
    orderRetrieveRequest(_tripId) {
        return this.http.get(`${this.url}order-retrieve/${_tripId}`);
    }
    issueTicketRequest(ticket) {
        return this.http.post(`${this.url}air-doc-issue`, ticket);
    }
    cancelTicketRequest(_tripId, _serviceFee) {
        return this.http.post(`${this.url}booking-cancel`, {
            tripId: _tripId,
            serviceFee: _serviceFee
        });
    }
    voidTicketRequest(tripId) {
        return this.http.get(`${this.url}booking-void/${tripId}`);
    }
    bookingRefundConfirmRequest(tripId) {
        return this.http.get(`${this.url}refund_confirm/${tripId}`);
    }
    refundTicketRequest(_tripId, amountToRefund, _serviceFee) {
        return this.http.post(`${this.url}refund`, {
            tripId: _tripId, amount: amountToRefund, serviceFee: _serviceFee
        });
    }
    fareRulesRequest(fare) {
        return this.http.post(`${this.url}fare-rules`, fare);
    }
    itinReissueFlight(initReissueData) {
        return this.http.post(`${this.url}itin-reissue`, initReissueData);
    }
    itinReissueFlightRepriceOnly(repriceData) {
        return this.http.post(`${this.url}itin-reissue-reprice`, repriceData);
    }
    itinReissueFlightOrderChange(repriceData) {
        return this.http.post(`${this.url}itin-reissue-order-change`, repriceData);
    }
    fetchAllPos() {
        return this.http.get(`${this.url1}fetch-active-pos`);
    }
    fetchAllChildPos() {
        return this.http.get(`${this.url2}get-orgranisation-child-list`);
    }
    fetchPosById(orgId) {
        return this.http.get(`${this.url2}get-orgranisation-by-id/${orgId}`);
    }
    itinReissueFlightOrderChangeDB(segmentListToUpdate, passengerListToUpdate, ticketListToUpdate, ticketListToCreate, ticketEmdListToCreate, bookingsListToUpdate, bookingsFlightListToUpdate) {
        return this.http.post(`${this.url}itin-reissue-order-change-db`, {
            updateSegmentList: segmentListToUpdate,
            updatePassengerList: passengerListToUpdate,
            updateTicketList: ticketListToUpdate,
            createTicketList: ticketListToCreate,
            createTicketEmdList: ticketEmdListToCreate,
            updateBookingsList: bookingsListToUpdate,
            updateBookingsFlightList: bookingsFlightListToUpdate
        });
    }
};
FlightSearchService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
FlightSearchService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], FlightSearchService);



/***/ }),

/***/ "./src/app/shared/services/pointsale.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/pointsale.service.ts ***!
  \******************************************************/
/*! exports provided: POSService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSService", function() { return POSService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




let POSService = class POSService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverURL;
    }
    fetchAllPointofSale(data) {
        return this.http.get(`${this.url}/api/fetch-all-organization`);
    }
};
POSService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
POSService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], POSService);



/***/ }),

/***/ "./src/app/shared/services/profile-management/profile-management.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/services/profile-management/profile-management.service.ts ***!
  \**********************************************************************************/
/*! exports provided: ProfileManagementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileManagementService", function() { return ProfileManagementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../environments/environment */ "./src/environments/environment.ts");






let ProfileManagementService = class ProfileManagementService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].serverURL;
        this.pager = {};
        this.pageOfItems = [];
        // Http Headers
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    // POST
    NewTravellerProfile(data) {
        return this.http.post(`${this.url}/api/create-new-traveller-profile`, data);
    }
    NewGroupProfile(data) {
        return this.http.post(`${this.url}/api/create-new-group-profile`, JSON.stringify(data), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
    }
    NewCompanyProfile(data) {
        return this.http.post(`${this.url}/api/create-new-company-profile`, JSON.stringify(data), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
    }
    NewAgencyProfile(data) {
        return this.http.post(`${this.url}/api/create-new-agency-profile`, JSON.stringify(data), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
    }
    profileSearch(filterData) {
        return this.http.post(`${this.url}/api/search-traveller`, filterData);
    }
    UpdateCreateProfile(data) {
        return this.http.post(`${this.url}/api/update-new-traveller-profile`, data);
    }
    // GetTravellerById(id): Observable<NewTravellerProfile> {
    //   // return this.http.get<NewTravellerProfile>(`${this.url}/api/fetch-new-traveller-profile` + id)
    //   //   .pipe(
    //   //     retry(1),
    //   //     catchError(this.errorHandl)
    //   //   )
    // }
    GetAllTraveller(travellID, limit, pageIndex) {
        return this.http.get(`${this.url}/api/fetch-all-traveller-profile`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
    }
    GetAllCompanies(travellID, limit, pageIndex) {
        return this.http.get(`${this.url}/api/fetch-all-company-profile`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
    }
    GetAllAgencies(travellID, limit, pageIndex) {
        return this.http.get(`${this.url}/api/fetch-all-agency-profile`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
    }
    GetAllGroups(travellID, limit, pageIndex) {
        return this.http.get(`${this.url}/api/fetch-all-group-profile`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
    }
    // PUT
    UpdateTravellerProfile(id, data) {
        return this.http.post(`${this.url}/api/update-new-traveller-profile?traveller_profile_id=` + id, JSON.stringify(data), this.httpOptions)
            //return this.http.put<NewTravellerProfile>(`${this.url}/api/update-new-traveller-profile` + id, JSON.stringify(data), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
    }
    updateProfile(data) {
        console.log("data::::", data);
        return this.http.post(`${this.url}/api/update-new-traveller-profile`, data);
    }
    UpdateGroupProfile(id, data) {
        return this.http.put(`${this.url}/api/update-new-group-profile?group_profile_id=` + id, JSON.stringify(data), this.httpOptions)
            //return this.http.put<NewTravellerProfile>(`${this.url}/api/update-new-traveller-profile` + id, JSON.stringify(data), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
    }
    UpdateAgencyProfile(id, data) {
        return this.http.put(`${this.url}/api/update-new-agency-profile?agency_profile_id=` + id, JSON.stringify(data), this.httpOptions)
            //return this.http.put<NewTravellerProfile>(`${this.url}/api/update-new-traveller-profile` + id, JSON.stringify(data), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
    }
    UpdateCompanyProfile(id, data) {
        return this.http.put(`${this.url}/api/update-new-company-profile?company_profile_id=` + id, JSON.stringify(data), this.httpOptions)
            //return this.http.put<NewTravellerProfile>(`${this.url}/api/update-new-traveller-profile` + id, JSON.stringify(data), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
    }
    // DELETE
    DeleteTravellerById(id) {
        return this.http.post(`${this.url}/api/remove-traveller-profile`, JSON.stringify(id), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
    }
    DeleteCompanyById(id) {
        return this.http.delete(`${this.url}/api/remove-company-profile?company_profile_id=` + id, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
    }
    DeleteAgencyById(id) {
        return this.http.delete(`${this.url}/api/remove-agency-profile?agency_profile_id=` + id, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
    }
    DeleteGroupById(id) {
        return this.http.delete(`${this.url}/api/remove-group-profile?group_profile_id=` + id, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
    }
    ReteriveProfileData(options) {
        return this.http.post(`${this.url}/api/retrive-all-profiles-data`, options, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandl));
    }
    GetTravellerById(id) {
        return this.http.get(`${this.url}/api/fetch-new-traveller-profile/${id}`);
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
ProfileManagementService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ProfileManagementService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProfileManagementService);



/***/ }),

/***/ "./src/app/shared/services/report/report.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/report/report.service.ts ***!
  \**********************************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let ReportService = class ReportService {
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
    // GET ALL FLIGHTS
    GetAllFlightLogs(data) {
        return this.http.post(`${this.url}/api/fetch-all-Flight-Search-Log`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // GET ALL HOTELS
    GetAllHotelLogs(data) {
        return this.http.post(`${this.url}/api/fetch-all-Hotel-Search-Log`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // GET ALL CARS
    GetAllCarLogs(data) {
        return this.http.post(`${this.url}/api/fetch-all-Car-Search-Log`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // GET ALL ACTIVITY
    GetAllActivityLogs(data) {
        return this.http.post(`${this.url}/api/fetch-all-Activities-Search-Log`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // GET ALL TRANSFER
    GetAllTransferLogs(data) {
        return this.http.post(`${this.url}/api/fetch-all-Transfer-Search-Log`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // GET ALL INSURANCE
    GetAllInsuranceLogs(data) {
        return this.http.post(`${this.url}/api/fetch-all-Insurance-Search-Log`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // GET ALL AUDIT TRAIL
    GetAllAuditTrail(data) {
        return this.http.post(`${this.url}/api/fetch-all-Audit-Trail`, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // GET ALL SEGMENTS
    GetAllSegments(tourID, limit, pageIndex) {
        return this.http.get(`${this.url}/api/fetch-all-segment-details`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    //Fetch all organization
    GetAllOrganization() {
        return this.http.get(`${this.url}/api/pos/fetch-active-pos`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    //POST
    NewDynamicPivotTable(data) {
        return this.http.post(`${this.url}/api/dynamic-report-data`, data, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    searchReportBooking(data) {
        return this.http.post(`${this.url}/api/search-bookings-by-organisation`, data);
    }
    //search tickets
    searchTicketReport(data) {
        return this.http.post(`${this.url}/api/search-tickets-new`, data);
    }
    // GET audit trail search
    GetAllAuditSearchReport(params) {
        var queryString = Object.keys(params).map(function (key) {
            return key + '=' + params[key];
        }).join('&');
        return this.http.get(`${this.url}/api/get-audit-trails?${queryString}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    //Fetch all agents
    GetAllAgents() {
        return this.http.get(`${this.url}/api/fetch-all-organization`, { withCredentials: true })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    //Fetch all products
    GetAllProducts(tourID, limit, pageIndex) {
        return this.http.get(`${this.url}/api/get-active-products`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    //Fetch all suppliers
    GetAllSuppliers(tourID, limit, pageIndex) {
        return this.http.get(`${this.url}/api/fetch-all-supplier`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    //Fetch all flight search platforms
    GetAllFlightPlatforms() {
        return this.http.get(`${this.url}/api/Flight-Search-Log/count`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    //Fetch all flight search platforms
    GetAllFlightMonthlyReport() {
        return this.http.get(`${this.url}/api/Flight-Search-Log/monthlwise`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    //fetch all airport details
    GetAllAirportCode() {
        return this.http.get(`${this.url}/api/get-airports-cache`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    getAllBookingDetails() {
        return this.http.get(`${this.url}/api/fetch_value/:id`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // Get User role Details
    getFlightBookingDetails(id) {
        return this.http.get(`${this.url}/api/booking/${id}`);
    }
    GetSearchedSegmentReports(params) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(`${this.url}/api/search-segments`, params, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    GetFilteredFlightSearch(params) {
        return this.http.post(`${this.url}/api/fetch-all-Flight-Search-Log`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    exportBooking(data) {
        return this.http.post(`${this.url}/api/export-booking-report`, data);
    }
    exportSearchLog(data) {
        return this.http.post(`${this.url}/api/export-search-log-report`, data);
    }
    exportTicket(data) {
        return this.http.post(`${this.url}/api/export-tickets-report`, data);
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
ReportService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ReportService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ReportService);



/***/ }),

/***/ "./src/app/shared/services/setup-config/setup-config.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/setup-config/setup-config.service.ts ***!
  \**********************************************************************/
/*! exports provided: SetupConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupConfigService", function() { return SetupConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let SetupConfigService = class SetupConfigService {
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
    // GET ALL
    GetAllAirlines(formData) {
        return this.http.post(`${this.url}/api/fetch-all-tourcodes`, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // read all commissions
    GetAllAirCommissions(formData) {
        return this.http.post(`${this.url}/api/fetch-all-commissions`, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // GET ALL SUPPLIERS
    FetchAllSuppliers(formData) {
        return this.http.get(`${this.url}/api/fetch-all-supplier`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // GET ALL SUPPLIERS
    GetAllSuppliers(formData) {
        console.log("formData::::", formData);
        return this.http.post(`${this.url}/api/read-all-supplier`, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // GET ALL
    GetAllHotels(tourID, limit, pageIndex) {
        return this.http.get(`${this.url}/api/fetch-all-content`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // GET ALL
    GetAllEmails(tourID, limit, pageIndex) {
        return this.http.get(`${this.url}/api/fetch-all-email-template`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // GET ALL
    GetAllCurrencies(formData) {
        return this.http.post(`${this.url}/api/fetch-all-currency`, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // GET ALL
    GetAllMarkups(params) {
        return this.http.post(`${this.url}/api/fetch-all-markups`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // GET ALL
    GetAllGroups(params) {
        return this.http.post(`${this.url}/api/fetch-all-sales`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // Add Group/ Sale
    AddGroup(params) {
        return this.http.post(`${this.url}/api/add-sale`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    deleteGroup(id) {
        return this.http.post(`${this.url}/api/delete-sale/${id}`, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // Add Markup
    AddMarkup(params) {
        return this.http.post(`${this.url}/api/add-markup`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    deleteMarkup(id) {
        return this.http.post(`${this.url}/api/delete-markup/${id}`, {})
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    getEmailInfo(id) {
        return this.http.get(`${this.url}/api/fetch-email-template/${id}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    updateTemplate(formData) {
        return this.http.post(`${this.url}/api/update-email-template`, formData)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    // Add New tourcode
    addTourCodeSupplier(formData) {
        return this.http.post(`${this.url}/api/create-new-tourcode`, formData, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': "application/json; charset=UTF-8"
            })
        });
    }
    // Delete tour code user
    deleteTourcode(data) {
        return this.http.post(`${this.url}/api/remove-tourcode`, data, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': "application/json; charset=UTF-8"
            })
        });
    }
    //updating tour code user details
    getUpdateTourCode(id, obj) {
        return this.http.post(`${this.url}/api/update-tourcode/${id}`, obj);
    }
    //create new commission
    addCommission(formData) {
        return this.http.post(`${this.url}/api/create-new-commission`, formData, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': "application/json; charset=UTF-8"
            })
        });
    }
    //update commission  details
    getUpdateCommission(id, obj) {
        return this.http.post(`${this.url}/api/update-commission/${id}`, obj);
    }
    //delete commission
    deleteCommission(id) {
        return this.http.delete(`${this.url}/api/remove-commission/${id}`);
    }
    deleteCurrency(id) {
        return this.http.post(`${this.url}/api/remove-currency/${id}`, "");
    }
    addCurrency(formData) {
        return this.http.post(`${this.url}/api/create-new-currency`, formData, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': "application/json; charset=UTF-8"
            })
        });
    }
    getUpdateCurrency(id, obj) {
        return this.http.put(`${this.url}/api/update-currency/${id}`, obj);
    }
    //fetch all countries
    GetAllCountries() {
        return this.http.get(`${this.url}/api/get-country-list-db`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    //fetch supplier by id
    getSupplier(id) {
        return this.http.get(`${this.url}/api/fetch-supplier/${id}`);
    }
    updateSupplier(id, obj) {
        return this.http.post(`${this.url}/api/update-supplier/${id}`, obj);
    }
    editGroup(params) {
        return this.http.post(`${this.url}/api/add-sale`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    editMarkup(params) {
        console.log("params---------", params);
        return this.http.post(`${this.url}/api/add-markup`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandl));
    }
    searchMarkupByName(data) {
        return this.http.post(`${this.url}/api/search-markups`, data);
    }
    searchGroupByName(data) {
        return this.http.post(`${this.url}/api/search-sales`, data);
    }
    onStatusToggle(data) {
        return this.http.post(`${this.url}/api/toggle-status`, data);
    }
    addAirlineRoutes(data) {
        return this.http.post(`${this.url}/api/create-new-routes`, data);
    }
    deleteAirlineRoutes(data) {
        return this.http.post(`${this.url}/api/remove-routes`, data);
    }
    getUpdateAirlineRoutes(obj) {
        return this.http.post(`${this.url}/api/update-routes`, obj);
    }
    fetchAllPointofSale(data) {
        return this.http.post(`${this.url}/api/pos/fetch-pos`, data);
    }
    searchByCurrencyData(data) {
        return this.http.post(`${this.url}/api/search-currency`, data);
    }
    getAllAirlineRoutes(page) {
        return this.http.post(`${this.url}/api/fetch-all-routes`, page)
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
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
    }
};
SetupConfigService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
SetupConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SetupConfigService);



/***/ })

}]);
//# sourceMappingURL=common-es2016.js.map