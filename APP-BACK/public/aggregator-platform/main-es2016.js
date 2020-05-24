(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ngx-ui-loader></ngx-ui-loader>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/access.module.ts":
/*!**********************************!*\
  !*** ./src/app/access.module.ts ***!
  \**********************************/
/*! exports provided: ApplicationAccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationAccess", function() { return ApplicationAccess; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_utils_access_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/utils/access.helper */ "./src/app/shared/utils/access.helper.ts");



let ApplicationAccess = class ApplicationAccess {
};
ApplicationAccess = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
        // dep modules
        ],
        declarations: [
            _shared_utils_access_helper__WEBPACK_IMPORTED_MODULE_2__["CanAccessDirective"]
        ],
        exports: [
            _shared_utils_access_helper__WEBPACK_IMPORTED_MODULE_2__["CanAccessDirective"]
        ]
    })
], ApplicationAccess);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _shared_guards_common_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/guards/common.guard */ "./src/app/shared/guards/common.guard.ts");





const routes = [
    // { path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule), canActivate: [AuthGuard] },
    {
        path: "",
        loadChildren: () => Promise.all(/*! import() | layout-layout-module */[__webpack_require__.e("common"), __webpack_require__.e("layout-layout-module")]).then(__webpack_require__.bind(null, /*! ./layout/layout.module */ "./src/app/layout/layout.module.ts")).then(m => m.LayoutModule),
        canActivate: [_shared_guards_common_guard__WEBPACK_IMPORTED_MODULE_4__["CommonGuard"]]
        // canLoad: [CommonGuard]
    },
    {
        path: "login",
        loadChildren: () => __webpack_require__.e(/*! import() | login-login-module */ "login-login-module").then(__webpack_require__.bind(null, /*! ./login/login.module */ "./src/app/login/login.module.ts")).then(m => m.LoginModule),
        canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: "signup",
        loadChildren: () => __webpack_require__.e(/*! import() | signup-signup-module */ "signup-signup-module").then(__webpack_require__.bind(null, /*! ./signup/signup.module */ "./src/app/signup/signup.module.ts")).then(m => m.SignupModule),
        canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: "error",
        loadChildren: () => __webpack_require__.e(/*! import() | server-error-server-error-module */ "server-error-server-error-module").then(__webpack_require__.bind(null, /*! ./server-error/server-error.module */ "./src/app/server-error/server-error.module.ts")).then(m => m.ServerErrorModule)
    },
    {
        path: "access-denied",
        loadChildren: () => __webpack_require__.e(/*! import() | access-denied-access-denied-module */ "access-denied-access-denied-module").then(__webpack_require__.bind(null, /*! ./access-denied/access-denied.module */ "./src/app/access-denied/access-denied.module.ts")).then(m => m.AccessDeniedModule)
    },
    {
        path: "not-found",
        loadChildren: () => __webpack_require__.e(/*! import() | not-found-not-found-module */ "not-found-not-found-module").then(__webpack_require__.bind(null, /*! ./not-found/not-found.module */ "./src/app/not-found/not-found.module.ts")).then(m => m.NotFoundModule)
    },
    {
        path: 'users-list',
        loadChildren: () => Promise.all(/*! import() | layout-users-users-module */[__webpack_require__.e("default~airline-deals-airline-deals-module~audit-report-audit-report-module~booking-report-booking-r~c369235f"), __webpack_require__.e("default~airline-deals-airline-deals-module~create-user-create-user-module~currency-configuration-cur~471cd285"), __webpack_require__.e("default~layout-users-users-module~users-users-module"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./layout/users/users.module */ "./src/app/layout/users/users.module.ts")).then(m => m.UsersModule),
        canActivate: [_shared__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
    },
    {
        path: 'pos',
        loadChildren: () => Promise.all(/*! import() | layout-pos-pos-module */[__webpack_require__.e("default~airline-deals-airline-deals-module~audit-report-audit-report-module~booking-report-booking-r~c369235f"), __webpack_require__.e("default~airline-deals-airline-deals-module~create-user-create-user-module~currency-configuration-cur~471cd285"), __webpack_require__.e("default~layout-pos-pos-module~pos-pos-module"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./layout/pos/pos.module */ "./src/app/layout/pos/pos.module.ts")).then(m => m.PosModule)
    },
    {
        path: 'hotels',
        loadChildren: () => Promise.all(/*! import() | layout-search-hotels-hotels-module */[__webpack_require__.e("default~booking-report-booking-report-module~bookings-bookings-module~email-templates-email-template~4a04f70a"), __webpack_require__.e("default~activities-activities-module~hotels-hotels-module~layout-search-hotels-hotels-module"), __webpack_require__.e("default~hotels-hotels-module~layout-search-hotels-hotels-module"), __webpack_require__.e("default~layout-search-hotels-hotels-module~search-search-module"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./layout/search/hotels/hotels.module */ "./src/app/layout/search/hotels/hotels.module.ts")).then(m => m.HotelsModule)
    },
    {
        path: 'roles',
        loadChildren: () => Promise.all(/*! import() | layout-setup-configuration-roles-roles-module */[__webpack_require__.e("default~airline-deals-airline-deals-module~create-user-create-user-module~currency-configuration-cur~471cd285"), __webpack_require__.e("roles-roles-module")]).then(__webpack_require__.bind(null, /*! ./layout/setup-configuration/roles/roles.module */ "./src/app/layout/setup-configuration/roles/roles.module.ts")).then(m => m.RolesModule)
    }
    // { path: '**', redirectTo: 'not-found' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { onSameUrlNavigation: 'reload' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        declarations: []
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_services_user_service_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/user.service.js */ "./src/app/shared/services/user.service.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");




//import { CookieService } from 'ngx-cookie-service';
//import { environment } from '../environments/environment';

let AppComponent = class AppComponent {
    // findMe: any = null;  
    // allowMe: any = false;  
    //cookieValue = 'UNKNOWN';
    constructor(/*private cookieService: CookieService,*/ router, userService, toastr) {
        // this.userService.fetchPermissions().subscribe(r => {
        //   this.userPermissions = JSON.parse(r.result);
        //   // console.log(JSON.parse(r.result));
        // });
        this.router = router;
        this.userService = userService;
        this.toastr = toastr;
        this.title = 'aggregator-platform';
        this.userPermissions = null;
        // this.router.events.subscribe(event => {
        //   // if (event instanceof RoutesRecognized) {
        //   //   let path = event.url.substr(1);
        //   //   const pathSplit = path.split('/');
        //   //   const getId = parseInt(pathSplit.slice(-1).pop());
        //   //   if( getId >= 0 ) {
        //   //     // console.log('getID', getId);
        //   //     path = path.replace(`/${getId}`, '');
        //   //   }
        //   //   console.log('navigated to:', path);
        //   //   // console.log('route state', event.state);
        //   // }
        //   if (event instanceof NavigationEnd) {
        //     let path = event.url.substr(1);
        //     const pathSplit = path.split('/');
        //     const getId = parseInt(pathSplit.slice(-1).pop());
        //     if (getId >= 0) {
        //       path = path.replace(`/${getId}`, '');
        //     }
        //     console.log('navigated to:', path);
        //     const userPermissionsObj = [...this.userPermissions];
        //     const allPermissions = (data as any).default;
        //     let findMe = null;
        //     allPermissions.forEach(element => {
        //       (element.permissions).forEach(elem => {
        //         // console.log('elem found', _.indexOf(elem.allow, path), path, elem.allow);
        //         if (_.indexOf(elem.allow, path) !== -1) {
        //           findMe = elem.allow;
        //         }
        //       });
        //     });
        //     // console.log('isAllowed', findMe);
        //     let allowMe = false;
        //     if (findMe) {
        //       userPermissionsObj.filter(letMeIn => {
        //         // console.log('letMeIn', letMeIn);
        //         // console.log('this.allowMe', findMe, letMeIn, letMeIn[findMe[0]]);
        //         if (letMeIn[findMe[0]]) {
        //           allowMe = true;
        //         }
        //       })
        //     }
        //     // console.log('allow me', allowMe );
        //     if (!allowMe) {
        //       // localStorage.clear();
        //       // $('.ui.labeled.sidebar').sidebar({dimPage: false,closable: false}).sidebar('hide');
        //       // this.router.navigate(["login"]);
        //       this.toastr.error('Not Allowerd', 'Forbidden !', {
        //         disableTimeOut: false,
        //         progressBar: false,
        //         positionClass: 'toast-bottom-right'
        //       });
        //     }
        //   }
        // });
    }
    ngOnInit() {
        //let cookieName = 'aggregator-' + environment.hostname;
        //this.cookieValue = this.cookieService.get(cookieName);
        //console.log("Cookie [" + cookieName + " : " + this.cookieValue + "]");
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _shared_services_user_service_js__WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/loader */ "./src/app/shared/loader/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var ckeditor4_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ckeditor4-angular */ "./node_modules/ckeditor4-angular/__ivy_ngcc__/fesm2015/ckeditor4-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _shared_guards_security_interceptor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/guards/security.interceptor */ "./src/app/shared/guards/security.interceptor.ts");
/* harmony import */ var _shared_guards_token_interceptor__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/guards/token.interceptor */ "./src/app/shared/guards/token.interceptor.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _access_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./access.module */ "./src/app/access.module.ts");
/* harmony import */ var _shared_services_search_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/services/search.service */ "./src/app/shared/services/search.service.ts");
/* harmony import */ var _shared_utils_globals__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/utils/globals */ "./src/app/shared/utils/globals.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/__ivy_ngcc__/fesm2015/router-store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _core_effects__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./core/effects */ "./src/app/core/effects/index.ts");



















//import { MatChipsModule } from '@angular/material/chips';

//import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';


// import { NgxUiLoaderModule, NgxUiLoaderHttpModule } from  'ngx-ui-loader';






// const config: SocketIoConfig = {
//   url: environment.socketURL,
//   options: {}
// }
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
            ckeditor4_angular__WEBPACK_IMPORTED_MODULE_11__["CKEditorModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_13__["DragDropModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"].forRoot({
                preventDuplicates: true,
                closeButton: true,
                positionClass: 'toast-bottom-right'
            }),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"].register("./ngsw-worker.js", {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].production
            }),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"].register('./ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].production }),
            _access_module__WEBPACK_IMPORTED_MODULE_17__["ApplicationAccess"],
            _shared_loader__WEBPACK_IMPORTED_MODULE_1__["CoreModule"],
            //MatChipsModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_16__["ToastrModule"].forRoot({}),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_8__["ServiceWorkerModule"].register('./ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].production }),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_22__["StoreModule"].forRoot(_reducers__WEBPACK_IMPORTED_MODULE_26__["ROOT_REDUCERS"], {
                metaReducers: _reducers__WEBPACK_IMPORTED_MODULE_26__["metaReducers"],
                runtimeChecks: {
                // strictStateImmutability: true,
                // strictActionImmutability: true,
                // strictStateSerializability: true,
                // strictActionSerializability: true
                }
            }),
            /**
             * @ngrx/router-store keeps router state up-to-date in the store.
             */
            _ngrx_router_store__WEBPACK_IMPORTED_MODULE_24__["StoreRouterConnectingModule"].forRoot(),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_25__["StoreDevtoolsModule"].instrument({
                name: 'NgRx TPConnects - Aggregator Platform',
                logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_21__["environment"].production
            }),
            /**
             * EffectsModule.forRoot() is imported once in the root module and
             * sets up the effects class to be initialized immediately when the
             * application starts.
             *
             * See: https://ngrx.io/guide/effects#registering-root-effects
             */
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_23__["EffectsModule"].forRoot([_core_effects__WEBPACK_IMPORTED_MODULE_27__["UserEffects"], _core_effects__WEBPACK_IMPORTED_MODULE_27__["RouterEffects"]]),
        ],
        providers: [
            _shared_utils_globals__WEBPACK_IMPORTED_MODULE_19__["Globals"],
            _shared__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_20__["CookieService"],
            _shared_services_search_service__WEBPACK_IMPORTED_MODULE_18__["SearchService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                useClass: _shared_guards_token_interceptor__WEBPACK_IMPORTED_MODULE_15__["TokenInterceptor"],
                multi: true
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"],
                useClass: _shared_guards_security_interceptor__WEBPACK_IMPORTED_MODULE_14__["SecurityInterceptor"],
                multi: true
            },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/actions/index.ts":
/*!***************************************!*\
  !*** ./src/app/core/actions/index.ts ***!
  \***************************************/
/*! exports provided: LayoutActions, UserActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _layout_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.actions */ "./src/app/core/actions/layout.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "LayoutActions", function() { return _layout_actions__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.actions */ "./src/app/core/actions/user.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "UserActions", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_2__; });






/***/ }),

/***/ "./src/app/core/actions/layout.actions.ts":
/*!************************************************!*\
  !*** ./src/app/core/actions/layout.actions.ts ***!
  \************************************************/
/*! exports provided: openSidenav, closeSidenav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openSidenav", function() { return openSidenav; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSidenav", function() { return closeSidenav; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");


const openSidenav = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Layout] Open Sidenav');
const closeSidenav = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[Layout] Close Sidenav');


/***/ }),

/***/ "./src/app/core/actions/user.actions.ts":
/*!**********************************************!*\
  !*** ./src/app/core/actions/user.actions.ts ***!
  \**********************************************/
/*! exports provided: idleTimeout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idleTimeout", function() { return idleTimeout; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");


const idleTimeout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createAction"])('[User] Idle Timeout');


/***/ }),

/***/ "./src/app/core/effects/index.ts":
/*!***************************************!*\
  !*** ./src/app/core/effects/index.ts ***!
  \***************************************/
/*! exports provided: UserEffects, RouterEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.effects */ "./src/app/core/effects/user.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserEffects", function() { return _user_effects__WEBPACK_IMPORTED_MODULE_1__["UserEffects"]; });

/* harmony import */ var _router_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router.effects */ "./src/app/core/effects/router.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterEffects", function() { return _router_effects__WEBPACK_IMPORTED_MODULE_2__["RouterEffects"]; });






/***/ }),

/***/ "./src/app/core/effects/router.effects.ts":
/*!************************************************!*\
  !*** ./src/app/core/effects/router.effects.ts ***!
  \************************************************/
/*! exports provided: RouterEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterEffects", function() { return RouterEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");






let RouterEffects = class RouterEffects {
    constructor(router, titleService, activatedRoute) {
        this.router = router;
        this.titleService = titleService;
        this.activatedRoute = activatedRoute;
        this.updateTitle$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["createEffect"])(() => this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => {
            let route = this.activatedRoute;
            while (route.firstChild)
                route = route.firstChild;
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(route => route.data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => `TPConnects - Aggregator Platform`), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(title => this.titleService.setTitle(title))), {
            dispatch: false
        });
    }
};
RouterEffects.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
RouterEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], RouterEffects);



/***/ }),

/***/ "./src/app/core/effects/user.effects.ts":
/*!**********************************************!*\
  !*** ./src/app/core/effects/user.effects.ts ***!
  \**********************************************/
/*! exports provided: UserEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEffects", function() { return UserEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./src/app/core/actions/index.ts");






let UserEffects = class UserEffects {
    constructor() {
        this.clicks$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'click');
        this.keys$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'keydown');
        this.mouse$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'mousemove');
        this.idle$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(this.clicks$, this.keys$, this.mouse$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMapTo"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["timer"])(5 * 60 * 1000)), // 5 minute inactivity timeout
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => _actions__WEBPACK_IMPORTED_MODULE_5__["UserActions"].idleTimeout())));
    }
};
UserEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], UserEffects);



/***/ }),

/***/ "./src/app/reducers/flight-search.actions.ts":
/*!***************************************************!*\
  !*** ./src/app/reducers/flight-search.actions.ts ***!
  \***************************************************/
/*! exports provided: FlightSearchActionTypes, FlightSearchAction, LoadFlightSearchResult, FlightSearchResultError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightSearchActionTypes", function() { return FlightSearchActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightSearchAction", function() { return FlightSearchAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadFlightSearchResult", function() { return LoadFlightSearchResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightSearchResultError", function() { return FlightSearchResultError; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var FlightSearchActionTypes;
(function (FlightSearchActionTypes) {
    FlightSearchActionTypes["LoadFlightSearchResult"] = "[FlightSearch] Result";
    FlightSearchActionTypes["FlightSearchResultError"] = "[FlightSearch] Error";
})(FlightSearchActionTypes || (FlightSearchActionTypes = {}));
class FlightSearchAction {
}
class LoadFlightSearchResult {
    constructor(payload) {
        this.payload = payload;
        this.type = FlightSearchActionTypes.LoadFlightSearchResult;
    }
}
class FlightSearchResultError {
    constructor(payload) {
        this.payload = payload;
        this.type = FlightSearchActionTypes.FlightSearchResultError;
    }
}


/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: flightSearchReducer, ROOT_REDUCERS, selectFlightSearchData, selectFlightSearchError, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flightSearchReducer", function() { return flightSearchReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROOT_REDUCERS", function() { return ROOT_REDUCERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFlightSearchData", function() { return selectFlightSearchData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFlightSearchError", function() { return selectFlightSearchError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _flight_search_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flight-search.actions */ "./src/app/reducers/flight-search.actions.ts");



const initialFlightSearchState = {
    data: null,
    error: null
};
function flightSearchReducer(state = initialFlightSearchState, action) {
    switch (action.type) {
        case _flight_search_actions__WEBPACK_IMPORTED_MODULE_2__["FlightSearchActionTypes"].LoadFlightSearchResult:
            // let index = 10;
            // action.payload.data.response.result.FlightOffer = action.payload.data.response.result.FlightOffer[10]
            // action.payload.data.response.result.OffersGroup = action.payload.data.response.result.OffersGroup[10]
            return {
                data: action.payload.data,
                error: null
            };
        case _flight_search_actions__WEBPACK_IMPORTED_MODULE_2__["FlightSearchActionTypes"].FlightSearchResultError:
            return {
                data: null,
                error: action.payload.error
            };
        default:
            return state;
    }
}
const ROOT_REDUCERS = {
    stateFlightSearch: flightSearchReducer
};
const selectFlightSearchData = (state) => state.stateFlightSearch.data;
const selectFlightSearchError = (state) => state.stateFlightSearch.error;
const metaReducers = !_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? [] : [];


/***/ }),

/***/ "./src/app/shared/guards/auth.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/guards/auth.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let AuthGuard = class AuthGuard {
    constructor(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    canActivate() {
        if (this.loginService.isAuthenticated()) {
            this.router.navigate(["/dashboard"]);
        }
        return !this.loginService.isAuthenticated();
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/shared/guards/common.guard.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/guards/common.guard.ts ***!
  \***********************************************/
/*! exports provided: CommonGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonGuard", function() { return CommonGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ "./src/app/shared/services/login.service.ts");




let CommonGuard = class CommonGuard {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    canActivate() {
        return this.canLoad();
    }
    canLoad() {
        if (!this.loginService.isAuthenticated()) {
            this.router.navigate(["/login"]);
            console.log('navigate to login from guard');
        }
        return this.loginService.isAuthenticated();
    }
};
CommonGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
CommonGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], CommonGuard);



/***/ }),

/***/ "./src/app/shared/guards/index.ts":
/*!****************************************!*\
  !*** ./src/app/shared/guards/index.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.guard */ "./src/app/shared/guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]; });





/***/ }),

/***/ "./src/app/shared/guards/security.interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/guards/security.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: SecurityInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityInterceptor", function() { return SecurityInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/login.service */ "./src/app/shared/services/login.service.ts");




let SecurityInterceptor = class SecurityInterceptor {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    intercept(request, next) {
        if (!this.loginService.isAuthenticated()) {
            this.router.navigate(["/login"]);
        }
        return next.handle(request);
    }
};
SecurityInterceptor.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
SecurityInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SecurityInterceptor);



/***/ }),

/***/ "./src/app/shared/guards/skip.interceptor.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/guards/skip.interceptor.ts ***!
  \***************************************************/
/*! exports provided: InterceptorSkip, InterceptorSkipHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorSkip", function() { return InterceptorSkip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterceptorSkipHeader", function() { return InterceptorSkipHeader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");


const InterceptorSkip = 'X-Skip-Interceptor';
const InterceptorSkipHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
});


/***/ }),

/***/ "./src/app/shared/guards/token.interceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/guards/token.interceptor.ts ***!
  \****************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/login.service */ "./src/app/shared/services/login.service.ts");
/* harmony import */ var _skip_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./skip.interceptor */ "./src/app/shared/guards/skip.interceptor.ts");








let TokenInterceptor = class TokenInterceptor {
    constructor(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.isRefreshing = false;
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
    }
    intercept(request, next) {
        if (request.headers && request.headers.has(_skip_interceptor__WEBPACK_IMPORTED_MODULE_7__["InterceptorSkip"])) {
            console.log(request);
            const headers = request.headers.delete(_skip_interceptor__WEBPACK_IMPORTED_MODULE_7__["InterceptorSkip"]);
            request = this.addToken(request, '', true, headers);
            // return next.handle(request.clone({ headers }));
        }
        else {
            let _token = this.loginService.getToken();
            if (_token) {
                request = this.addToken(request, _token, false);
            }
            // console.log()
            // console.log('╔══════════════════════════════════════════════════════════════════╗')
            // console.log('║ shared/guards/token.interceptor : Authorization added to request ║')
            // console.log('╚══════════════════════════════════════════════════════════════════╝')
            // console.log()
            // return next.handle(request).pipe(
            //   tap(
            //     (event: HttpEvent<any>) => {
            //       if (event instanceof HttpResponse) {
            //         // do stuff with response if you want
            //       }
            //     },
            //     (err: any) => {
            //       if (err instanceof HttpErrorResponse) {
            //         if (err.status === 401) {
            //           // redirect to the login route
            //           this.router.navigateByUrl("/dashboard");
            //         }
            //       }
            //     }
            //   )
            // );
        }
        // return next.handle(request).pipe(
        //   tap(
        //     (event: HttpEvent<any>) => {
        //       if (event instanceof HttpResponse) {
        //         // do stuff with response if you want
        //       }
        //     },
        //     (err: any) => {
        //       if (err instanceof HttpErrorResponse) {
        //         if (err.status === 401) {
        //           return this.handle401Error(request, next);
        //           // redirect to the login route
        //           // this.router.navigateByUrl("/dashboard");
        //         } else {
        //           return throwError(err);
        //         }
        //       }
        //     }
        //   )
        // );
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(err => {
            if (err instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && err.status === 401) {
                return this.handle401Error(request, next);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(err);
            }
        }));
    }
    handle401Error(request, next) {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);
            return this.loginService.refreshToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(({ token }) => {
                this.isRefreshing = false;
                this.refreshTokenSubject.next(token);
                return next.handle(this.addToken(request, token));
            }));
        }
        else {
            return this.refreshTokenSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(token => token != null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(jwt => {
                return next.handle(this.addToken(request, jwt));
            }));
        }
    }
    addToken(request, token, isAdded = false, headers) {
        return request.clone(!isAdded
            ? {
                setHeaders: {
                    'Content-Type': 'application/json; charset=utf-8',
                    'Accept': 'application/json',
                    'Authorization': token
                }
            }
            : {
                headers
            });
    }
};
TokenInterceptor.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"] }
];
TokenInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], TokenInterceptor);



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedPipesModule, AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/shared-pipes.module */ "./src/app/shared/pipes/shared-pipes.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedPipesModule", function() { return _pipes_shared_pipes_module__WEBPACK_IMPORTED_MODULE_1__["SharedPipesModule"]; });

/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards */ "./src/app/shared/guards/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _guards__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]; });






/***/ }),

/***/ "./src/app/shared/loader/index.ts":
/*!****************************************!*\
  !*** ./src/app/shared/loader/index.ts ***!
  \****************************************/
/*! exports provided: CoreModule, LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loader.service */ "./src/app/shared/loader/loader.service.ts");
/* harmony import */ var _loader_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader.interceptor */ "./src/app/shared/loader/loader.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return _loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]; });






let CoreModule = class CoreModule {
};
CoreModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [
            _loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"],
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                useClass: _loader_interceptor__WEBPACK_IMPORTED_MODULE_4__["LoaderInterceptor"],
                multi: true
            }
        ]
    })
], CoreModule);




/***/ }),

/***/ "./src/app/shared/loader/loader.interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/loader/loader.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: LoaderInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function() { return LoaderInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader.service */ "./src/app/shared/loader/loader.service.ts");





let LoaderInterceptor = class LoaderInterceptor {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.requests = [];
    }
    removeRequest(req) {
        const i = this.requests.indexOf(req);
        if (i >= 0) {
            this.requests.splice(i, 1);
        }
        this.loaderService.isLoading.next(this.requests.length > 0);
    }
    intercept(req, next) {
        // this.requests.push(req);
        // this.loaderService.isLoading.next(true);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].create(observer => {
            const subscription = next.handle(req)
                .subscribe(event => {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                    this.removeRequest(req);
                    observer.next(event);
                }
            }, err => { this.removeRequest(req); observer.error(err); }, () => { this.removeRequest(req); observer.complete(); });
            // teardown logic in case of cancelled requests
            return () => {
                this.removeRequest(req);
                subscription.unsubscribe();
            };
        });
    }
};
LoaderInterceptor.ctorParameters = () => [
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }
];
LoaderInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LoaderInterceptor);



/***/ }),

/***/ "./src/app/shared/loader/loader.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/loader/loader.service.ts ***!
  \*************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let LoaderService = class LoaderService {
    constructor() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
};
LoaderService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LoaderService);



/***/ }),

/***/ "./src/app/shared/pipes/shared-pipes.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/shared-pipes.module.ts ***!
  \*****************************************************/
/*! exports provided: SharedPipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedPipesModule", function() { return SharedPipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



let SharedPipesModule = class SharedPipesModule {
};
SharedPipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        declarations: []
    })
], SharedPipesModule);



/***/ }),

/***/ "./src/app/shared/services/login.service.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/services/login.service.ts ***!
  \**************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _guards_skip_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../guards/skip.interceptor */ "./src/app/shared/guards/skip.interceptor.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/common */ "./src/app/shared/utils/common.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/__ivy_ngcc__/fesm2015/ngx-cookie-service.js");












let LoginService = class LoginService {
    constructor(http, router, cookieService) {
        this.http = http;
        this.router = router;
        this.cookieService = cookieService;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].serverURL;
        this.authStatus = false;
        this.jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_4__["JwtHelperService"]();
        this.cookieName = 'aggregator-' + _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].hostname;
    }
    signin(authPayload) {
        return this.http.post(`${this.url}/api/sign-in`, authPayload, {
            withCredentials: true,
            observe: 'response',
            headers: _guards_skip_interceptor__WEBPACK_IMPORTED_MODULE_7__["InterceptorSkipHeader"]
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(response => this.doLoginUser(response)), 
        // mapTo(v => v),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])((error) => {
            return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_5__["of"])(error);
        }));
    }
    // verifyOTP(otpPayload) {
    //   return this.http.post(`${this.url}/api/verify-otp`, otpPayload, {
    //     withCredentials: true,
    //     observe: 'response',
    //     headers: InterceptorSkipHeader
    //   });
    // }
    verifyOTP(otpPayload) {
        return this.http
            .post(`${this.url}/api/verify-otp`, otpPayload, {
            withCredentials: true,
            observe: 'response',
            headers: _guards_skip_interceptor__WEBPACK_IMPORTED_MODULE_7__["InterceptorSkipHeader"],
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(response => this.doLoginUser(response)), 
        // mapTo(v => v),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(error => {
            console.error(error);
            return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_5__["of"])(false);
        }));
    }
    logout() {
        return this.http
            .post(`${this.url}/logout`, {
            refreshToken: this.getRefreshToken()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(() => this.doLogoutUser()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mapTo"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(error => {
            console.error(error);
            return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_5__["of"])(false);
        }));
    }
    doLoginUser(response) {
        if (response.body && response.body.status === 200) {
            if (response.body.otp == 1 || response.body.verify == true) {
                this.storeTokens({
                    token: response.body.token,
                    refreshToken: response.body.refreshToken
                });
            }
            else {
            }
        }
    }
    doLogoutUser() {
        this.removeTokens();
        this.removeSensitiveData();
    }
    storeTokens({ token, refreshToken }) {
        this.globals = Object(_utils_common__WEBPACK_IMPORTED_MODULE_9__["prepareGlobals"])();
        this.globals.init(token, refreshToken);
        Object(_utils_common__WEBPACK_IMPORTED_MODULE_9__["saveGlobals"])(this.globals);
    }
    removeTokens() {
        this.globals = Object(_utils_common__WEBPACK_IMPORTED_MODULE_9__["prepareGlobals"])();
        this.globals.setToken('');
        this.globals.setRefreshToken('');
        Object(_utils_common__WEBPACK_IMPORTED_MODULE_9__["saveGlobals"])(this.globals);
    }
    /**
     * FEQ - Remove Sensitive Data
     */
    removeSensitiveData() {
        this.removeBookingInfo();
    }
    getBookingInfo() {
        this.booking = Object(_utils_common__WEBPACK_IMPORTED_MODULE_9__["prepareBooking"])();
        return this.booking.getUserBookingInfo();
    }
    removeBookingInfo() {
        this.booking = Object(_utils_common__WEBPACK_IMPORTED_MODULE_9__["prepareBooking"])();
        this.booking.setUserBookingInfo(null);
        Object(_utils_common__WEBPACK_IMPORTED_MODULE_9__["saveBooking"])(this.booking);
    }
    isAuthenticated() {
        let cookieValue = this.cookieService.get(this.cookieName);
        if (cookieValue === '') {
            // return false;
        }
        this.cookieService.set(this.cookieName, cookieValue, 3600000, "/", _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].hostname, false, 'None');
        return !!this.getToken();
    }
    getToken() {
        this.globals = Object(_utils_common__WEBPACK_IMPORTED_MODULE_9__["prepareGlobals"])();
        return this.globals.getToken();
    }
    auth() {
        return this.http.get(`${this.url}/api/auth`);
    }
    refreshToken() {
        return this.http
            .post(`${this.url}/api/refresh`, {
            refreshToken: this.getRefreshToken(),
            user: this.getUser()
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(({ token }) => {
            this.storeToken(token);
        }));
    }
    getUser() {
        this.globals = Object(_utils_common__WEBPACK_IMPORTED_MODULE_9__["prepareGlobals"])();
        return this.globals.getUser();
    }
    storeToken(_token) {
        this.globals = Object(_utils_common__WEBPACK_IMPORTED_MODULE_9__["prepareGlobals"])();
        this.globals.setToken(_token);
        Object(_utils_common__WEBPACK_IMPORTED_MODULE_9__["saveGlobals"])(this.globals);
    }
    getRefreshToken() {
        this.globals = Object(_utils_common__WEBPACK_IMPORTED_MODULE_9__["prepareGlobals"])();
        return this.globals.getRefreshToken();
    }
    resentOTP(data) {
        return this.http.post(`${this.url}/api/resend-otp`, data);
    }
    rememberMe() {
        return this.http.post(`${this.url}/api/check-remember-me`, {
            rememberme_token: Object(_utils_common__WEBPACK_IMPORTED_MODULE_9__["getCookie"])('remembermeToken')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(response => this.doLoginUser(response)), 
        // mapTo(v => v),
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(error => {
            //  alert(error.error);
            return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_5__["of"])(false);
        }));
    }
    sendPassword(data) {
        return this.http.post(`${this.url}/api/send_password`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return result;
        })));
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_10__["CookieService"] }
];
LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/shared/services/search.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/search.service.ts ***!
  \***************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let SearchService = class SearchService {
    constructor() {
        this.searchSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.searchedData = this.searchSource.asObservable();
    }
    feedSearchData(formData) {
        this.searchSource.next(formData);
    }
};
SearchService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], SearchService);



/***/ }),

/***/ "./src/app/shared/services/user-role.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/user-role.service.ts ***!
  \******************************************************/
/*! exports provided: UserRoleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoleService", function() { return UserRoleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let UserRoleService = class UserRoleService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].serverURL;
    }
    // get logedin user info
    getLogedInUser() {
        return this.http.get(`${this.url}/api/logedin-user-info`);
    }
    // Modify LogedIn User
    updateLogedInUser(formData) {
        return this.http.post(`${this.url}/api/update-logedin-user`, formData);
    }
    // match old password
    matchOldPassword(passowrd) {
        return this.http.post(`${this.url}/api/match-old-password`, passowrd);
    }
    // check existing email 
    isUniqueEmail(email) {
        return this.http.post(`${this.url}/api/check-unique-email/` + email, email);
    }
    //check existing username
    isUniqueUsername(userName) {
        return this.http.post(`${this.url}/api/check-unique-userName/` + userName, userName);
    }
    // Get All users role list
    getList(searchData) {
        return this.http.post(`${this.url}/api/fetch-all-users`, searchData);
    }
    // Export All users list
    exportUser(searchData) {
        return this.http.post(`${this.url}/api/export-users`, searchData);
    }
    // Add New User role
    addBusinessUser(formData) {
        console.log("---formData-formData", formData);
        return this.http.post(`${this.url}/api/create-new-user`, formData, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': "application/json; charset=UTF-8"
            })
        });
    }
    addAdminUser(formData) {
        console.log("---formData-formData", formData);
        return this.http.post(`${this.url}/api/create-admin-user`, formData, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': "application/json; charset=UTF-8"
            })
        });
    }
    addCorporateUser(formData) {
        console.log("---formData-formData", formData);
        return this.http.post(`${this.url}/api/create-corporate-user`, formData, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                'Content-Type': "application/json; charset=UTF-8"
            })
        });
    }
    // Get User role Details
    getUser(id) {
        return this.http.get(`${this.url}/api/fetch-new-user/${id}`);
    }
    // Modify User role
    updateUser(formData) {
        return this.http.put(`${this.url}/api/update-user`, formData);
    }
    // Delete user role
    deleteUser(id) {
        return this.http.delete(`${this.url}/api/remove-user/${id}`);
    }
    getRolePermissions(agentId) {
        return this.http.get(`${this.url}/api/get-role-permissions/${agentId}`);
    }
    getBookings(formData) {
        return this.http.post(`${this.url}/api/get-user-bookings`, formData);
    }
    getPermissions() {
        return this.http.get(`${this.url}/api/organization/fetch-permissions`);
    }
    getRolePermissionsNew(agentId) {
        return this.http.get(`${this.url}/api/organization/fetch-permissions-by-org/${agentId}`);
    }
    getMyPermissions() {
        return this.http.get(`${this.url}/api/organization/fetch-my-permissions`);
    }
    getAdminPermissions(org_id) {
        return this.http.get(`${this.url}/api/organization/fetch-admin-permissions/${org_id}`);
    }
    onStatusToggle(data) {
        return this.http.post(`${this.url}/api/toggle-status`, data);
    }
    getNewRolePermissions() {
        if (this.permissionData) {
            console.log("--show permissionData");
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(this.permissionData);
        }
        else if (this.observablePermission) {
            console.log("--show observablePermission");
            return this.observablePermission;
        }
        else {
            console.log("--call-api");
            this.observablePermission = this.http.get(`${this.url}/api/organization/fetch-my-permissions`, {
                observe: 'response'
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(response => {
                this.observablePermission = null;
                if (response.status === 400) {
                    return 'Request failed.';
                }
                else if (response.status === 200) {
                    this.permissionData = response.body;
                    return this.permissionData;
                }
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["share"])());
            return this.observablePermission;
        }
    }
};
UserRoleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
UserRoleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], UserRoleService);



/***/ }),

/***/ "./src/app/shared/services/user.service.js":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.js ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");





let UserService = class UserService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].serverURL;
    }
    createUser(data) {
        return this.http.post(`${this.apiUrl}/api/create-new-user`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return result;
        })));
    }
    updateUser(data) {
        return this.http.put(`${this.apiUrl}/api/update-user`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return result;
        })));
    }
    fetchUser(id) {
        return this.http.get(`${this.apiUrl}/api/fetch-new-user/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return result;
        })));
    }
    fetchUsers(data) {
        return this.http.post(`${this.apiUrl}/api/fetch-all-users`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return result;
        })));
    }
    fetchRoles() {
        return this.http.get(`${this.apiUrl}/api/roles/list`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return result;
        })));
    }
    fetchOrganizations() {
        return this.http.get(`${this.apiUrl}/api/fetch-all-organization`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return result;
        })));
    }
    savePermissions(data) {
        return this.http.post(`${this.apiUrl}/api/users/permission`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return result;
        })));
    }
    fetchPermissions() {
        return this.http.get(`${this.apiUrl}/api/users/permissions`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return result;
        })));
    }
    saveTargets(data) {
        return this.http.post(`${this.apiUrl}/api/users/target`, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return result;
        })));
    }
    // Get All users role list
    GetAllUsers(searchData) {
        return this.http.post(`${this.apiUrl}/api/fetch-all-users`, searchData);
    }
    onStatusToggle(data) {
        return this.http.post(`${this.apiUrl}/api/toggle-status`, data);
    }
    // Delete user role
    deleteUser(id) {
        return this.http.delete(`${this.apiUrl}/api/remove-user/${id}`);
    }
};
UserService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "./src/app/shared/utils/access.helper.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/utils/access.helper.ts ***!
  \***********************************************/
/*! exports provided: CanAccessDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanAccessDirective", function() { return CanAccessDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_user_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user-role.service */ "./src/app/shared/services/user-role.service.ts");

//get user permissions and set array of permisssions


let CanAccessDirective = class CanAccessDirective {
    constructor(templateRef, viewContainer, userRoleService) {
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.userRoleService = userRoleService;
        //
        // private currentPermissions = JSON.parse(localStorage.getItem(PERMISSIONS));
        this.permArr = [];
        this.currenOrg = {
            "dashboard": {
                "display": "Dashboard",
                "allowed": 1,
                "accessType": [
                    { "allowed": 1, "display": "Search", "name": "search" },
                    { "allowed": 1, "display": "Booking Info", "name": "bookingInfo" },
                    { "allowed": 1, "display": "Revenue", "name": "revenue" },
                    { "allowed": 1, "display": "Margin", "name": "margin" }
                ]
            },
            "search": {
                "display": "Search",
                "allowed": 1,
                "accessType": [
                    {
                        "allowed": 1,
                        "display": "Flights",
                        "name": "flight",
                        "accessType": [
                            { "allowed": 1, "display": "List", "name": "list" },
                            { "allowed": 1, "display": "Add", "name": "add" },
                            { "allowed": 1, "display": "Edit", "name": "edit" },
                            { "allowed": 1, "display": "Export", "name": "export" }
                        ]
                    }
                ]
            },
            "booking": {
                "display": "Book",
                "allowed": 1,
                "accessType": [
                    { "allowed": 1, "display": "Export", "name": "export" },
                    { "allowed": 1, "display": "View Deails", "name": "view" },
                    { "allowed": 1, "display": "Cancel", "name": "cancel" },
                    { "allowed": 1, "display": "Void", "name": "void" },
                    { "allowed": 1, "display": "Amend", "name": "amend" },
                    { "allowed": 1, "display": "Reshop", "name": "reshop" },
                    { "allowed": 1, "display": "Re Issue", "name": "reissue" },
                    { "allowed": 1, "display": "Book Ticket", "name": "issueTicket" },
                    { "allowed": 1, "display": "Voucher", "name": "voucher" },
                    { "allowed": 1, "display": "Print Invoice without price", "name": "printWithoutPrice" },
                    { "allowed": 1, "display": "Print Invoice", "name": "printBill" },
                ]
            },
            "pos": {
                "display": "Point of Sale",
                "allowed": 1,
                "accessType": [
                    { "allowed": 1, "display": "List", "name": "list" },
                    { "allowed": 1, "display": "Add", "name": "add" },
                    { "allowed": 1, "display": "Edit", "name": "edit" },
                    { "allowed": 1, "display": "Export", "name": "export" },
                    { "allowed": 1, "display": "Delete", "name": "delete" }
                ]
            },
            "user": {
                "display": "User Role Management",
                "allowed": 1,
                "accessType": [
                    { "allowed": 1, "display": "List", "name": "list" },
                    { "allowed": 1, "display": "Add", "name": "add" },
                    { "allowed": 1, "display": "Edit", "name": "edit" },
                    { "allowed": 1, "display": "Update self profile", "name": "updateProfile" },
                    { "allowed": 1, "display": "Export", "name": "export" },
                    { "allowed": 1, "display": "Delete", "name": "delete" }
                ]
            },
            "setting": {
                "display": "Setup & Configuration",
                "allowed": 1,
                "accessType": [
                    {
                        "allowed": 1,
                        "display": "Markup Configuration",
                        "name": "markup",
                        "accessType": [
                            { "allowed": 1, "display": "List", "name": "list" },
                            { "allowed": 1, "display": "Add", "name": "add" },
                            { "allowed": 1, "display": "Edit", "name": "edit" },
                            { "allowed": 1, "display": "Delete", "name": "delete" }
                        ]
                    },
                    {
                        "allowed": 1,
                        "display": "Roles",
                        "name": "role",
                        "accessType": [
                            { "allowed": 1, "display": "List", "name": "list" },
                            { "allowed": 1, "display": "Add", "name": "add" },
                            { "allowed": 1, "display": "Edit", "name": "edit" },
                            { "allowed": 1, "display": "Delete", "name": "delete" }
                        ]
                    },
                    {
                        "display": "Tour Code",
                        "allowed": 1,
                        "name": "tourcode",
                        "accessType": [
                            { "allowed": 1, "display": "List", "name": "list" },
                            { "allowed": 1, "display": "Add", "name": "add" },
                            { "allowed": 1, "display": "Edit", "name": "edit" },
                            { "allowed": 1, "display": "Delete", "name": "delete" }
                        ]
                    },
                    {
                        "name": "commissions",
                        "display": "Comissions",
                        "allowed": 1,
                        "accessType": [
                            { "allowed": 1, "display": "List", "name": "list" },
                            { "allowed": 1, "display": "Add", "name": "add" },
                            { "allowed": 1, "display": "Edit", "name": "edit" },
                            { "allowed": 1, "display": "Delete", "name": "delete" }
                        ]
                    },
                    {
                        "allowed": 1,
                        "display": "Supplier",
                        "name": "supplier",
                        "accessType": [
                            { "allowed": 1, "display": "List", "name": "list" },
                            { "allowed": 1, "display": "Add", "name": "add" },
                            { "allowed": 1, "display": "Edit", "name": "edit" },
                            { "allowed": 1, "display": "Delete", "name": "delete" }
                        ]
                    },
                    {
                        "allowed": 1,
                        "display": "Currency Configuration",
                        "name": "currencyConfig",
                        "accessType": [
                            { "allowed": 1, "display": "List", "name": "list" },
                            { "allowed": 1, "display": "Add", "name": "add" },
                            { "allowed": 1, "display": "Edit", "name": "edit" },
                            { "allowed": 1, "display": "Delete", "name": "delete" }
                        ]
                    },
                    {
                        "allowed": 1,
                        "display": "Email Templates",
                        "name": "emailTemplate",
                        "accessType": [
                            { "allowed": 1, "display": "List", "name": "list" },
                            { "allowed": 1, "display": "Add", "name": "add" },
                            { "allowed": 1, "display": "Edit", "name": "edit" },
                            { "allowed": 1, "display": "Delete", "name": "delete" }
                        ]
                    }
                ]
            },
            "account": {
                "display": "Accounts",
                "allowed": 1,
                "accessType": [
                    {
                        "allowed": 1,
                        "display": "Transactions",
                        "name": "transaction",
                        "accessType": [
                            { "allowed": 1, "display": "List", "name": "list" },
                            { "allowed": 1, "display": "Add", "name": "add" },
                            { "allowed": 1, "display": "Edit", "name": "edit" },
                            { "allowed": 1, "display": "Delete", "name": "delete" }
                        ]
                    },
                    {
                        "allowed": 1,
                        "display": "Topup",
                        "name": "topup",
                        "accessType": [
                            { "allowed": 1, "display": "List", "name": "list" },
                            { "allowed": 1, "display": "Add", "name": "add" },
                            { "allowed": 0, "display": "Edit", "name": "edit" },
                            { "allowed": 1, "display": "Delete", "name": "delete" }
                        ]
                    },
                    {
                        "allowed": 1,
                        "display": "Floating Deposit",
                        "name": "floating",
                        "accessType": [
                            { "allowed": 1, "display": "List", "name": "list" },
                            { "allowed": 1, "display": "Add", "name": "add" },
                            { "allowed": 0, "display": "Edit", "name": "edit" },
                            { "allowed": 1, "display": "Delete", "name": "delete" }
                        ]
                    }
                ]
            },
            "profile": {
                "display": "Profile Management",
                "allowed": 1,
                "accessType": [
                    {
                        "allowed": 1,
                        "display": "Traveller Profile",
                        "name": "travellerProf",
                        "accessType": [
                            { "allowed": 1, "display": "List", "name": "list" },
                            { "allowed": 1, "display": "Add", "name": "add" },
                            { "allowed": 1, "display": "Edit", "name": "edit" },
                            { "allowed": 1, "display": "Delete", "name": "delete" }
                        ]
                    },
                    {
                        "allowed": 1,
                        "display": "Group Profile",
                        "name": "groupProf",
                        "accessType": [
                            { "allowed": 1, "display": "List", "name": "list" },
                            { "allowed": 1, "display": "Add", "name": "add" },
                            { "allowed": 1, "display": "Edit", "name": "edit" },
                            { "allowed": 1, "display": "Delete", "name": "delete" }
                        ]
                    },
                    {
                        "allowed": 1,
                        "display": "Agency Profile",
                        "name": "agencyProf",
                        "accessType": [
                            { "allowed": 1, "display": "List", "name": "list" },
                            { "allowed": 1, "display": "Add", "name": "add" },
                            { "allowed": 1, "display": "Edit", "name": "edit" },
                            { "allowed": 1, "display": "Delete", "name": "delete" }
                        ]
                    },
                    {
                        "allowed": 1,
                        "display": "Company Profile",
                        "name": "companyProf",
                        "accessType": [
                            { "allowed": 1, "display": "List", "name": "list" },
                            { "allowed": 1, "display": "Add", "name": "add" },
                            { "allowed": 1, "display": "Edit", "name": "edit" },
                            { "allowed": 1, "display": "Delete", "name": "delete" }
                        ]
                    }
                ]
            },
            "reports": {
                "display": "Reports",
                "allowed": 1,
                "accessType": [
                    {
                        "allowed": 1,
                        "display": "Booking",
                        "name": "bookingRep",
                        "accessType": [
                            { "allowed": 1, "display": "Export Reports", "name": "export" }
                        ]
                    },
                    {
                        "allowed": 1,
                        "display": "Segment",
                        "name": "segment",
                        "accessType": [
                            { "allowed": 1, "display": "Export Reports", "name": "export" }
                        ]
                    },
                    {
                        "allowed": 1,
                        "display": "MIS",
                        "name": "mis",
                        "accessType": [
                            { "allowed": 1, "display": "Export Reports", "name": "export" }
                        ]
                    },
                    {
                        "allowed": 1,
                        "display": "Search Log",
                        "name": "searchLog",
                        "accessType": [
                            { "allowed": 1, "display": "Export Reports", "name": "export" }
                        ]
                    },
                    {
                        "allowed": 1,
                        "display": "Audit Trail Log",
                        "name": "auditTrial",
                        "accessType": [
                            { "allowed": 1, "display": "Export Reports", "name": "export" }
                        ]
                    },
                    {
                        "allowed": 1,
                        "display": "Ticket",
                        "name": "ticket",
                        "accessType": [
                            { "allowed": 1, "display": "Export Reports", "name": "export" }
                        ]
                    },
                    {
                        "allowed": 1,
                        "display": "Dynamic Report",
                        "name": "dynamicReport",
                        "accessType": [
                            { "allowed": 1, "display": "Export Reports", "name": "export" }
                        ]
                    }
                ]
            },
            "help": {
                "display": "Help",
                "allowed": 1
            }
        };
    }
    ngOnInit() {
        this.getPermissions();
    }
    getPermissions() {
        this.userRoleService.getNewRolePermissions().subscribe((response) => {
            console.log("---result", response);
            this.currenOrg = response.myRole;
            this.applyPermission();
        });
    }
    returnIfExists(menu, subMenu, action) {
        let obj = this.currenOrg[menu];
        var subMenuIndex = obj.accessType.findIndex(el => el.name === subMenu);
        if (subMenuIndex != -1) {
            if (obj.accessType[subMenuIndex].allowed) {
                if (!action) {
                    return true;
                }
                var childIndex = obj.accessType[subMenuIndex].accessType.findIndex(el => el.name === action);
                if (childIndex != -1) {
                    if (obj.accessType[childIndex].accessType[childIndex].allowed) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
    applyPermission() {
        let menu = this.appCanAccess[0];
        let subMenu = this.appCanAccess[1];
        let action = this.appCanAccess[2];
        console.log("this.currenOrg[menu]", this.currenOrg[menu]);
        if (this.currenOrg[menu] != undefined) {
            if (!this.currenOrg[menu].allowed) {
                this.viewContainer.clear();
            }
            else {
                if (!subMenu && action) {
                    var checkKey = this.currenOrg[menu].accessType.findIndex(el => el.name === action);
                    if (checkKey != -1) {
                        this.viewContainer.createEmbeddedView(this.templateRef);
                    }
                    else {
                        this.viewContainer.clear();
                    }
                }
                else if (!subMenu && !action) {
                    if (this.currenOrg[menu].allowed) {
                        this.viewContainer.createEmbeddedView(this.templateRef);
                    }
                    else {
                        this.viewContainer.clear();
                    }
                }
                else {
                    if (this.returnIfExists(menu, subMenu, action)) {
                        this.viewContainer.createEmbeddedView(this.templateRef);
                    }
                    else {
                        this.viewContainer.clear();
                    }
                }
            }
        }
        else {
            // if any key not defined then dont show
            this.viewContainer.clear();
            // this.viewContainer.createEmbeddedView(this.templateRef);
        }
    }
};
CanAccessDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] },
    { type: _services_user_role_service__WEBPACK_IMPORTED_MODULE_2__["UserRoleService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("appCanAccess")
], CanAccessDirective.prototype, "appCanAccess", void 0);
CanAccessDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "[appCanAccess]"
    })
], CanAccessDirective);



/***/ }),

/***/ "./src/app/shared/utils/booking.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/utils/booking.ts ***!
  \*****************************************/
/*! exports provided: Booking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Booking", function() { return Booking; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ts_serializer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts-serializer */ "./node_modules/ts-serializer/dist/ts-serializer.js");
/* harmony import */ var ts_serializer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ts_serializer__WEBPACK_IMPORTED_MODULE_2__);

/**
 * Booking class to be accessed from the whole application.
 * It is initiated after the login and destroyed after logout.
 *
 * @author Taleb DAHAN
 * @version 1.0
 */


let Booking = class Booking extends ts_serializer__WEBPACK_IMPORTED_MODULE_2__["Serializable"] {
    init() { }
    getUserBookingInfo() {
        return this.userBookingInfo;
    }
    setUserBookingInfo(_bookingInfo) {
        this.userBookingInfo = _bookingInfo;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ts_serializer__WEBPACK_IMPORTED_MODULE_2__["SerializeProperty"])({ map: 'userBookingInfo' })
], Booking.prototype, "userBookingInfo", void 0);
Booking = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ts_serializer__WEBPACK_IMPORTED_MODULE_2__["Serialize"])({}),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], Booking);



/***/ }),

/***/ "./src/app/shared/utils/common.ts":
/*!****************************************!*\
  !*** ./src/app/shared/utils/common.ts ***!
  \****************************************/
/*! exports provided: saluteNames, statusRow, preferedService, organizationTypes, bookingStatus, topupSubtype, paymentType, rbdArrayList, prepareGlobals, saveGlobals, prepareBooking, saveBooking, getCookie, commonGetCabinType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saluteNames", function() { return saluteNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusRow", function() { return statusRow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preferedService", function() { return preferedService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "organizationTypes", function() { return organizationTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookingStatus", function() { return bookingStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topupSubtype", function() { return topupSubtype; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentType", function() { return paymentType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rbdArrayList", function() { return rbdArrayList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareGlobals", function() { return prepareGlobals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveGlobals", function() { return saveGlobals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareBooking", function() { return prepareBooking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveBooking", function() { return saveBooking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonGetCabinType", function() { return commonGetCabinType; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./src/app/shared/utils/type.ts");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globals */ "./src/app/shared/utils/globals.ts");
/* harmony import */ var _booking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking */ "./src/app/shared/utils/booking.ts");




const saluteNames = ['Mr.', 'Master', 'Mrs.', 'Miss', 'Ms.', 'Dr.'];
const statusRow = [{ id: 0, value: "Inactive" }, { id: 1, value: "Active" }];
const preferedService = [{ id: 1, value: "Filghts" }, { id: 1, value: "Hotels" }, { id: 1, value: "Insurance" }, { id: 1, value: "Office Request" }];
/*export const seatPreference = [
    "WINDOW SEAT",
    "MIDDLE SEAT",
    "AISLE SEAT",
    "BULKHEAD SEAT",
    "BASINET SEAT",
    "EXIT ROW SEAT"
];

export const hotelLoyalty = [
    { key: "Starwood_Preferred_Guest", value: "Starwood Preferred Guest" },
    { key: "Wyndham_Rewards", value: "Wyndham Rewards" },
    { key: "World_of_Hyatt", value: "World of Hyatt" },
    { key: "Hilton_Honors", value: "Hilton Honors" },
    { key: "Le_Club_AccorHotels", value: "Le Club AccorHotels" },
    { key: "Marriott_Rewards", value: "Marriott Rewards" },
    { key: "IHG_Rewards", value: "IHG Rewards" },
    { key: "Best_Western_Rewards", value: "Best Western Rewards" },
    { key: "Choice_Privileges", value: "Choice Privileges" },
    { key: "Club_Carlson", value: "Club Carlson" }];

export const preferredClass = [
    { key: 'Y', value: "Economy/Coach" },
    { key: 'F', value: "First Class" },
    { key: 'C', value: "Business" },
    { key: 'W', value: "Premium Economy" }
]*/
const organizationTypes = ['Agent', 'Corporate', 'B2C', 'Mobile'];
const bookingStatus = ['Cancel', 'Confirm', 'Draft', 'Hold', 'Partial', 'Void'];
const topupSubtype = ['Bank Transfer', 'Cash Deposit', 'Cheque Deposit', 'Credit Card'];
const paymentType = ['credit', 'debit'];
const rbdArrayList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
function prepareGlobals() {
    let _globalsString = JSON.parse(localStorage.getItem(_type__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE_GLOBALS"]));
    let _globals = new _globals__WEBPACK_IMPORTED_MODULE_2__["Globals"]();
    if (_globalsString !== null) {
        _globals.deserialize(_globalsString);
    }
    return _globals;
}
function saveGlobals(_globals) {
    localStorage.setItem(_type__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE_GLOBALS"], JSON.stringify(_globals.serialize()));
}
function prepareBooking() {
    let _bookingString = JSON.parse(localStorage.getItem(_type__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE_BOOKING"]));
    let _booking = new _booking__WEBPACK_IMPORTED_MODULE_3__["Booking"]();
    if (_bookingString !== null) {
        _booking.deserialize(_bookingString);
    }
    return _booking;
}
function saveBooking(_booking) {
    localStorage.setItem(_type__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE_BOOKING"], JSON.stringify(_booking.serialize()));
}
function getCookie(cname) {
    var name = cname + "=";
    var exp = new Date(new Date().getTime());
    console.log("get cookie----1----", document.cookie);
    document.cookie = 'ExpirationCookieTest=1; expires=' + exp.toUTCString();
    console.log("get cookie----2----", document.cookie);
    var decodedCookie = decodeURIComponent(document.cookie);
    console.log("Cookie Value : ===================", decodedCookie);
    var ca = decodedCookie.split(';');
    console.log("FFFFFFFFFFFFFFFFFFFFFFFFFFFF", ca);
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
function commonGetCabinType(code) {
    switch (code) {
        case 'Y':
            return "Economy/Coach";
        case 'F':
            return "First Class";
        case 'W':
            return "Premium Economy";
        case 'O':
            return "Euro Traveller";
        case 'I':
            return "Club World";
        case 'B':
        case 'E':
        case 'G':
        case 'H':
        case 'K':
        case 'L':
        case 'M':
        case 'N':
        case 'Q':
        case 'R':
        case 'S':
        case 'T':
        case 'U':
        case 'V':
        case 'X':
        case 'Y':
            return "Economy";
        case 'C':
        case 'D':
        case 'J':
        case 'P':
            return "Business";
        case 'A':
        case 'R':
        case 'Z':
            return "First";
        default:
            return "All";
    }
}


/***/ }),

/***/ "./src/app/shared/utils/globals.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/utils/globals.ts ***!
  \*****************************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ts_serializer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ts-serializer */ "./node_modules/ts-serializer/dist/ts-serializer.js");
/* harmony import */ var ts_serializer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ts_serializer__WEBPACK_IMPORTED_MODULE_3__);

/**
 * Global class to be accessed from the whole application.
 * It is initiated after the login and destroyed after logout.
 *
 * @author Taleb DAHAN
 * @version 1.0
 */



let Globals = class Globals extends ts_serializer__WEBPACK_IMPORTED_MODULE_3__["Serializable"] {
    init(_token, _refreshToken) {
        this.token = _token;
        this.refreshToken = _refreshToken;
        // let tmp = jwt_decode(_token) as any;
        // user = tmp.user;
    }
    getToken() {
        return this.token;
    }
    setToken(_token) {
        this.token = _token;
    }
    getRefreshToken() {
        return this.refreshToken;
    }
    setRefreshToken(_refreshToken) {
        this.refreshToken = _refreshToken;
    }
    isUsernamePasswordCombinationMatch() {
        return this.usernamePasswordCombinationMatch;
    }
    setUsernamePasswordCombinationMatch(_auth) {
        this.usernamePasswordCombinationMatch = _auth;
    }
    getUser() {
        let tmp = jwt_decode__WEBPACK_IMPORTED_MODULE_2__(this.token);
        return tmp.user;
    }
    getUserUsername() {
        return this.getUser().username;
    }
    getUserEmail() {
        return this.getUser().email;
    }
    getUserAgentCode() {
        return this.getUser().agent_code;
    }
    getUserAgent() {
        return this.getUser().agent;
    }
    getUserAdmin() {
        return this.getUser().admin;
    }
    getUserPermissions() {
        return this.getUser().permissions;
    }
    getOrganisationID() {
        return this.getUser().organisation_id;
    }
    getOrganisationCreditLimit() {
        return this.getUser().organisation.credit_limit;
    }
    getOrganisationCurrecyCode() {
        return this.getUser().organisation.currency_id;
    }
    getCurrencyCode() {
        return this.getUser().organisation.currency.code;
    }
    getCurrencyDecimal() {
        return this.getUser().organisation.currency.currency_decimal.decimal;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ts_serializer__WEBPACK_IMPORTED_MODULE_3__["SerializeProperty"])({ map: 'token' })
], Globals.prototype, "token", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ts_serializer__WEBPACK_IMPORTED_MODULE_3__["SerializeProperty"])({ map: 'refreshToken' })
], Globals.prototype, "refreshToken", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ts_serializer__WEBPACK_IMPORTED_MODULE_3__["SerializeProperty"])({ map: 'usernamePasswordCombinationMatch' })
], Globals.prototype, "usernamePasswordCombinationMatch", void 0);
Globals = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ts_serializer__WEBPACK_IMPORTED_MODULE_3__["Serialize"])({}),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], Globals);



/***/ }),

/***/ "./src/app/shared/utils/type.ts":
/*!**************************************!*\
  !*** ./src/app/shared/utils/type.ts ***!
  \**************************************/
/*! exports provided: LOCAL_STORAGE_GLOBALS, LOCAL_STORAGE_BOOKING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STORAGE_GLOBALS", function() { return LOCAL_STORAGE_GLOBALS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_STORAGE_BOOKING", function() { return LOCAL_STORAGE_BOOKING; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const LOCAL_STORAGE_GLOBALS = "_globals";
const LOCAL_STORAGE_BOOKING = "_booking";
/*
export const JWT_TOKEN = "_athTk";
export const JWT_REFRESH_TOKEN = "_athTk_R";
export const USERNAME = "_unm";
export const EMAIL = "_uEmail";
export const AGENT_CODE = "_agtCde";
export const ADMIN = "_adm";
export const PERMISSIONS = "_perm";
export const ORGANISATION_ID = "_orgId";
export const ORGANISATION_DEFAULT_AIRPORT_CODE = "_orgDefaultAirportCode";
export const AGENT = "_agt";
export const ORGANISATION_AGENT = "_orgAgent";
export const ORGANISATION_API_KEY = "_orgApiKey";
export const ORGANISATION_SECRET_KEY = "_orgSecretKey";
export const BOOKING_INFO = "_bookingInfo";
*/ 


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
let serverURL;
if (typeof window != undefined && window.location.origin == 'http://localhost:4200') {
    serverURL = 'http://localhost:5000';
}
else {
    serverURL = typeof window != undefined && window.location.origin;
}
const environment = {
    production: false,
    hostname: 'localhost',
    herokuServerURL: typeof window != undefined && window.location.origin,
    serverURL: serverURL,
    socketURL: 'http://localhost:3000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Belal\projects\production-build\aggregator-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2016.js.map