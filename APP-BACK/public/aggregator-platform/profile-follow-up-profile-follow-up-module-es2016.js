(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-follow-up-profile-follow-up-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/profile-follow-up/profile-follow-up.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/profile-follow-up/profile-follow-up.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<h3><span class=\"booking-header\">Follow Up</span></h3>\r\n<div class=\"ui fluid container\">\r\n    <div class=\"outer-basic\">\r\n        <div class=\"outer-basicForm\">\r\n            <form class=\"ui form\" autocomplete=\"off\">\r\n                <div class=\"form-inner\">\r\n\r\n                    <div class=\"user-table-list b2c-list-user-table\">\r\n                        <table class=\"ui stackable celled table\">\r\n                            <thead>\r\n                                <tr class=\"center aligned\">\r\n                                    <th>Record Locator</th>\r\n                                    <th>Name</th>\r\n                                    <th>Type</th>\r\n                                    <th>Date</th>\r\n                                    <th>Action</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <!-- <tr class=\"center aligned\">\r\n                                    <td data-label=\"s/no\">01</td>\r\n                                    <td data-label=\"tripId\">TSS4678D19915</td>\r\n                                    <td data-label=\"agentReference\">Tester-B2C</td>\r\n                                    <td data-label=\"bookedBy\">Global Tour</td>\r\n                                    <td data-label=\"bookedDate\">11/09/2019</td>\r\n                                    <td data-label=\"paymentType\">Paid by Credit</td>\r\n                                    <td data-label=\"amount\">AED 2,215.00</td>\r\n                                    <td data-label=\"product\">icon</td>\r\n                                    <td data-label=\"delete\">SABRE</td>\r\n                                    <td data-label=\"confirmed\" class=\"confirm\">\r\n                                        <div class=\"recConfirm\">Confirmed</div>\r\n                                    </td>\r\n                                    <td data-label=\"view\"><a [routerLink]=\"['']\">View</a></td>\r\n                                </tr>\r\n                                <tr class=\"center aligned\">\r\n                                    <td data-label=\"s/no\">02</td>\r\n                                    <td data-label=\"tripId\">TSS4678D19915</td>\r\n                                    <td data-label=\"agentReference\">Tester-B2C</td>\r\n                                    <td data-label=\"bookedBy\">Global Tour</td>\r\n                                    <td data-label=\"bookedDate\">11/09/2019</td>\r\n                                    <td data-label=\"paymentType\">Paid by Credit</td>\r\n                                    <td data-label=\"amount\">AED 2,215.00</td>\r\n                                    <td data-label=\"product\">icon</td>\r\n                                    <td data-label=\"delete\">SABRE</td>\r\n                                    <td data-label=\"confirmed\" class=\"confirm\">\r\n                                        <div class=\"recConfirm\">Confirmed</div>\r\n                                    </td>\r\n                                    <td data-label=\"view\"><a [routerLink]=\"['']\">View</a></td>\r\n                                </tr>\r\n                                <tr class=\"center aligned\">\r\n                                    <td data-label=\"s/no\">03</td>\r\n                                    <td data-label=\"tripId\">TSS4678D19915</td>\r\n                                    <td data-label=\"agentReference\">Tester-B2C</td>\r\n                                    <td data-label=\"bookedBy\">Global Tour</td>\r\n                                    <td data-label=\"bookedDate\">11/09/2019</td>\r\n                                    <td data-label=\"paymentType\">Paid by Credit</td>\r\n                                    <td data-label=\"amount\">AED 2,215.00</td>\r\n                                    <td data-label=\"product\">icon</td>\r\n                                    <td data-label=\"delete\">SABRE</td>\r\n                                    <td data-label=\"confirmed\" class=\"confirm\">\r\n                                        <div class=\"recConfirm\">Confirmed</div>\r\n                                    </td>\r\n                                    <td data-label=\"view\"><a [routerLink]=\"['']\">View</a></td>\r\n                                </tr> -->\r\n                            </tbody>\r\n                            <tfoot>\r\n                                <tr>\r\n                                    <th colspan=\"11\">\r\n                                        <!-- <div class=\"ui right floated pagination menu\">\r\n                                            <a class=\"icon item\"><i class=\"left chevron icon\"></i></a>\r\n                                            <a class=\"item\">1</a>\r\n                                            <a class=\"item\">2</a>\r\n                                            <a class=\"item\">3</a>\r\n                                            <a class=\"item\">4</a>\r\n                                            <a class=\"icon item\"><i class=\"right chevron icon\"></i></a>\r\n                                        </div> -->\r\n                                    </th>\r\n                                </tr>\r\n                            </tfoot>\r\n                        </table>\r\n                        <div class=\"bookings_btn-panel\">\r\n                            <!-- <button class=\"ui primary  button\">\r\n                                    Search\r\n                                </button>\r\n                                <button class=\"ui secondary  button\">\r\n                                    Reset\r\n                                </button> -->\r\n                            <button class=\"ui primary button \">\r\n                                Refresh\r\n                            </button>\r\n                            <button ng-disabled class=\"ui secondary button \">\r\n                                Open Profile\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./src/app/layout/profile-management/profile-follow-up/profile-follow-up-routing.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/profile-management/profile-follow-up/profile-follow-up-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: ProfileFollowUpRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFollowUpRoutingModule", function() { return ProfileFollowUpRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _profile_follow_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-follow-up.component */ "./src/app/layout/profile-management/profile-follow-up/profile-follow-up.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    { path: '', component: _profile_follow_up_component__WEBPACK_IMPORTED_MODULE_1__["ProfileFollowUpComponent"] }
];
let ProfileFollowUpRoutingModule = class ProfileFollowUpRoutingModule {
};
ProfileFollowUpRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], ProfileFollowUpRoutingModule);



/***/ }),

/***/ "./src/app/layout/profile-management/profile-follow-up/profile-follow-up.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/profile-management/profile-follow-up/profile-follow-up.component.scss ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".booking-header {\n  color: #4F4F4F;\n  font-family: Helvetica;\n  font-size: 20px;\n  font-weight: 300;\n  line-height: 22px;\n  margin-left: 22px;\n}\n\n.outer-basic {\n  background-color: #FFF;\n  box-shadow: 3px 1px 4px 0 rgba(0, 0, 0, 0.4);\n  border-radius: 20px;\n}\n\n.outer-basicForm {\n  width: 100%;\n  height: auto;\n  padding: 50px;\n}\n\n.bookings_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n\n.bookings_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n\n.bookings_pickers .input .icon {\n  opacity: 1;\n  z-index: 100;\n}\n\n.bookings_pickers .input .icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.bookings_pickers .input .icon .bookings_input__placeholder-icon.cal {\n  width: 18px;\n  margin-top: 10px;\n}\n\n.bookings_pickers .input .search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.bookings_pickers .input .search.dropdown .search {\n  margin-left: 42px !important;\n}\n\n.bookings_pickers .input .search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n\n.bookings_btn-panel {\n  position: absolute;\n  right: 0;\n}\n\n.bookings_btn-panel .secondary {\n  width: 135.64px;\n  border-radius: 3px;\n}\n\n.bookings_btn-panel .primary {\n  width: 135.64px;\n  border-radius: 3px;\n  background-color: #3867B1;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n}\n\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #E0E0E0;\n}\n\ntd {\n  color: #4F4F4F;\n  font-family: Helvetica;\n  font-size: 10px;\n  line-height: 11px;\n  text-align: center;\n}\n\nth {\n  color: #4F4F4F;\n  font-family: Helvetica;\n  font-size: 10px;\n  font-weight: 500;\n  line-height: 11px;\n  text-align: center;\n}\n\n.confirm {\n  width: 63px;\n}\n\n.recConfirm {\n  height: 18px;\n  width: 62px;\n  background-color: #72D44F;\n  color: white;\n  padding-top: 0.5vh;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\n.field input::-webkit-input-placeholder {\n  font-size: 12px;\n}\n\n.field input::-moz-placeholder {\n  font-size: 12px;\n}\n\n.field input::-ms-input-placeholder {\n  font-size: 12px;\n}\n\n.field input::placeholder {\n  font-size: 12px;\n}\n\n.dropdown .text {\n  font-size: 12px;\n}\n\n.ui.fluid.container {\n  padding: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3Byb2ZpbGUtbWFuYWdlbWVudC9wcm9maWxlLWZvbGxvdy11cC9FOlxcQmVsYWxcXHByb2plY3RzXFxwcm9kdWN0aW9uLWJ1aWxkXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXHByb2ZpbGUtbWFuYWdlbWVudFxccHJvZmlsZS1mb2xsb3ctdXBcXHByb2ZpbGUtZm9sbG93LXVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvcHJvZmlsZS1tYW5hZ2VtZW50L3Byb2ZpbGUtZm9sbG93LXVwL3Byb2ZpbGUtZm9sbG93LXVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksc0JBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0FDRUo7O0FEQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNHSjs7QURFSTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDTjs7QURFSTtFQUNFLHdCQUFBO0VBQ0EsMENBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDQU47O0FER0k7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQ0ROOztBREVNO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNBUjs7QURFUTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ0FWOztBREtJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FDSE47O0FES007RUFBVSw0QkFBQTtBQ0ZoQjs7QURHTTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdDQUFBO0FDRFI7O0FETUU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUNISjs7QURJSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQ0ZOOztBREtJO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpRkFBQTtBQ0hOOztBRFFBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FDTEo7O0FEUUU7RUFDRSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0xKOztBRFFFO0VBQ0UsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0xKOztBRE9BO0VBQ1EsV0FBQTtBQ0pSOztBRE1BO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0hKOztBREtFO0VBQWMsNENBQUE7QUNEaEI7O0FESUE7RUFBNEIsZUFBQTtBQ0E1Qjs7QURBQTtFQUE0QixlQUFBO0FDQTVCOztBREFBO0VBQTRCLGVBQUE7QUNBNUI7O0FEQUE7RUFBNEIsZUFBQTtBQ0E1Qjs7QURDQTtFQUFrQixlQUFBO0FDR2xCOztBREZBO0VBQW9CLGFBQUE7QUNNcEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvcHJvZmlsZS1tYW5hZ2VtZW50L3Byb2ZpbGUtZm9sbG93LXVwL3Byb2ZpbGUtZm9sbG93LXVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvb2tpbmctaGVhZGVye1xyXG4gICAgY29sb3I6ICM0RjRGNEY7XHJcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIycHg7XHJcbn1cclxuLm91dGVyLWJhc2lje1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICAgIGJveC1zaGFkb3c6IDNweCAxcHggNHB4IDAgcmdiYSgwLDAsMCwwLjQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4ub3V0ZXItYmFzaWNGb3Jte1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbn1cclxuXHJcbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCB7XHJcblxyXG4gICAgJi5ib29raW5nc19kYXRlcGlja2VyIHsgXHJcbiAgICAgIG1pbi13aWR0aDogMTIwcHg7XHJcbiAgICAgIG1heC13aWR0aDogMTM4cHhcclxuICAgIH1cclxuXHJcbiAgICAudWkuYmFzaWMuZmxvYXRpbmcuYnV0dG9uIHtcclxuICAgICAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogcmdiYSgxNTIsIDE1MiwgMTUyLCAwLjYpIWltcG9ydGFudDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTFweDtcclxuICAgIH1cclxuXHJcbiAgICAuaWNvbiB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7IFxyXG5cclxuICAgICAgICAmLmNhbCB7IFxyXG4gICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zZWFyY2guZHJvcGRvd24ge1xyXG4gICAgICB3aWR0aDogMjE4cHg7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcblxyXG4gICAgICAuc2VhcmNoIHsgbWFyZ2luLWxlZnQ6IDQycHggIWltcG9ydGFudDsgfVxyXG4gICAgICAuZGVmYXVsdC50ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDAgMCAzOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5ib29raW5nc19idG4tcGFuZWx7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIC5zZWNvbmRhcnkge1xyXG4gICAgICB3aWR0aDogMTM1LjY0cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJpbWFyeSB7XHJcbiAgICAgIHdpZHRoOiAxMzUuNjRweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xyXG4gICAgICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLDAsMCwwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBcclxuaHIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjRTBFMEUwO1xyXG59XHJcblxyXG4gIHRkIHtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgdGh7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4uY29uZmlybXtcclxuICAgICAgICB3aWR0aDogNjNweDtcclxufVxyXG4ucmVjQ29uZmlybXtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIHdpZHRoOiA2MnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcyRDQ0RjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctdG9wOiAuNXZoO1xyXG59XHJcbiAgLnRhYi5zZWdtZW50IHtib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwwLDAsMC40KTt9XHJcblxyXG5cclxuLmZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7IGZvbnQtc2l6ZTogMTJweDsgfVxyXG4uZHJvcGRvd24gLnRleHQgeyBmb250LXNpemU6IDEycHg7IH1cclxuLnVpLmZsdWlkLmNvbnRhaW5lcntwYWRkaW5nOiAyOHB4O31cclxuIiwiLmJvb2tpbmctaGVhZGVyIHtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIG1hcmdpbi1sZWZ0OiAyMnB4O1xufVxuXG4ub3V0ZXItYmFzaWMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICBib3gtc2hhZG93OiAzcHggMXB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cblxuLm91dGVyLWJhc2ljRm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDUwcHg7XG59XG5cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dC5ib29raW5nc19kYXRlcGlja2VyIHtcbiAgbWluLXdpZHRoOiAxMjBweDtcbiAgbWF4LXdpZHRoOiAxMzhweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAudWkuYmFzaWMuZmxvYXRpbmcuYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogcmdiYSgxNTIsIDE1MiwgMTUyLCAwLjYpICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDAgIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDExcHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLmljb24ge1xuICBvcGFjaXR5OiAxO1xuICB6LWluZGV4OiAxMDA7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcbiAgd2lkdGg6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsIHtcbiAgd2lkdGg6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnNlYXJjaC5kcm9wZG93biB7XG4gIHdpZHRoOiAyMThweDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuc2VhcmNoLmRyb3Bkb3duIC5zZWFyY2gge1xuICBtYXJnaW4tbGVmdDogNDJweCAhaW1wb3J0YW50O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5zZWFyY2guZHJvcGRvd24gLmRlZmF1bHQudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDhweCAwIDAgMzhweCAhaW1wb3J0YW50O1xufVxuXG4uYm9va2luZ3NfYnRuLXBhbmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbn1cbi5ib29raW5nc19idG4tcGFuZWwgLnNlY29uZGFyeSB7XG4gIHdpZHRoOiAxMzUuNjRweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuLmJvb2tpbmdzX2J0bi1wYW5lbCAucHJpbWFyeSB7XG4gIHdpZHRoOiAxMzUuNjRweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbmhyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGJvcmRlcjogMC41cHggc29saWQgI0UwRTBFMDtcbn1cblxudGQge1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMTFweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG50aCB7XG4gIGNvbG9yOiAjNEY0RjRGO1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb25maXJtIHtcbiAgd2lkdGg6IDYzcHg7XG59XG5cbi5yZWNDb25maXJtIHtcbiAgaGVpZ2h0OiAxOHB4O1xuICB3aWR0aDogNjJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcyRDQ0RjtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nLXRvcDogMC41dmg7XG59XG5cbi50YWIuc2VnbWVudCB7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggNHB4IDAgcmdiYSgwLCAwLCAwLCAwLjQpO1xufVxuXG4uZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZHJvcGRvd24gLnRleHQge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi51aS5mbHVpZC5jb250YWluZXIge1xuICBwYWRkaW5nOiAyOHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/layout/profile-management/profile-follow-up/profile-follow-up.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/profile-management/profile-follow-up/profile-follow-up.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ProfileFollowUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFollowUpComponent", function() { return ProfileFollowUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ProfileFollowUpComponent = class ProfileFollowUpComponent {
    constructor() {
        this.flag = true;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        $('.menu .item').tab();
        $('.ui.dropdown').dropdown();
    }
};
ProfileFollowUpComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-follow-up',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-follow-up.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/profile-management/profile-follow-up/profile-follow-up.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-follow-up.component.scss */ "./src/app/layout/profile-management/profile-follow-up/profile-follow-up.component.scss")).default]
    })
], ProfileFollowUpComponent);



/***/ }),

/***/ "./src/app/layout/profile-management/profile-follow-up/profile-follow-up.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/profile-management/profile-follow-up/profile-follow-up.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ProfileFollowUpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFollowUpModule", function() { return ProfileFollowUpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _profile_follow_up_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-follow-up.component */ "./src/app/layout/profile-management/profile-follow-up/profile-follow-up.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _profile_follow_up_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile-follow-up-routing.module */ "./src/app/layout/profile-management/profile-follow-up/profile-follow-up-routing.module.ts");





let ProfileFollowUpModule = class ProfileFollowUpModule {
};
ProfileFollowUpModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_profile_follow_up_component__WEBPACK_IMPORTED_MODULE_1__["ProfileFollowUpComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _profile_follow_up_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProfileFollowUpRoutingModule"]
        ]
    })
], ProfileFollowUpModule);



/***/ })

}]);
//# sourceMappingURL=profile-follow-up-profile-follow-up-module-es2016.js.map