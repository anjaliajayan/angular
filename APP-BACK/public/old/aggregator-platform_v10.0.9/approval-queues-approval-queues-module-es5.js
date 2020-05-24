function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["approval-queues-approval-queues-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/corporates/approval-queues/approval-queues.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/corporates/approval-queues/approval-queues.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutCorporatesApprovalQueuesApprovalQueuesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"corporate_outer\">\r\n  <div class=\"corporate_outer__que\">\r\n    <h3 class=\"aproval_que\">Approval Queues</h3>\r\n  </div>\r\n  <div class=\"ui top attached tabular menu\">\r\n    <div class=\"active item corporate_que__tabOne\" [class.active]=\"activeTab && tabName=='first-tab'\"\r\n      (click)=\"activateTab('first-tab')\"><span>All Requests</span></div>\r\n    <div class=\"item corporate_que__tabTwo\" [class.active]=\"activeTab && tabName=='second-tab'\"\r\n      (click)=\"activateTab('second-tab')\">Approved Request</div>\r\n    <div class=\"item corporate_que__tabThree\" [class.active]=\"activeTab && tabName=='third-tab'\"\r\n      (click)=\"activateTab('third-tab')\">Ticketed</div>\r\n    <div class=\"item corporate_que__tabFour\" [class.active]=\"activeTab && tabName=='fourth-tab'\"\r\n      (click)=\"activateTab('fourth-tab')\">Offline Booking</div>\r\n    <div class=\"item corporate_que__tabFive\" [class.active]=\"activeTab && tabName=='five-tab'\"\r\n      (click)=\"activateTab('five-tab')\">Cost Saving</div>\r\n  </div>\r\n  <div class=\"ui bottom attached active tab segment\" [class.active]=\"activeTab && tabName=='first-tab'\">\r\n    <div class=\"ui fluid container\">\r\n      <div class=\"approval_que_wrapper\">\r\n        <div class=\"ui form\">\r\n          <div class=\"six fields\">\r\n            <div class=\"three wide field\">\r\n              <input type=\"text\" name=\"requestId\" placeholder=\"Request ID/ Booking ReferenceID\">\r\n            </div>\r\n            <div class=\"three wide field\">\r\n              <input type=\"text\" name=\"employeeId\" placeholder=\"Employee ID\">\r\n            </div>\r\n            <div class=\"three wide field\">\r\n              <input type=\"text\" name=\"passengerNmae\" placeholder=\"Passenger(first name)\">\r\n            </div>\r\n            <div class=\"three wide field\">\r\n              <div class=\"ui selection dropdown\">\r\n                <input type=\"hidden\" name=\"organisation\">\r\n                <i class=\"dropdown icon\"></i>\r\n                <div class=\"default text\">Organisation</div>\r\n                <div class=\"menu\">\r\n                  <div class=\"item\" data-value=\"1\">-----</div>\r\n                  <div class=\"item\" data-value=\"0\">-----</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"three wide field\">\r\n              <input type=\"text\" name=\"startDate\" class=\"start-date\" placeholder=\"Start Date\" />\r\n              <i class=\"icon\">\r\n                <img src=\"./../../../../assets/icons/calendar.svg\" class=\"corporate_input__placeholder-icon cal\" />\r\n              </i>\r\n            </div>\r\n            <div class=\"three wide field\">\r\n              <input type=\"text\" name=\"endDate\" class=\"end-date\" placeholder=\"End Date\" />\r\n              <i class=\"icon\">\r\n                <img src=\"./../../../../assets/icons/calendar.svg\" class=\"corporate_input__placeholder-icon cal\" />\r\n              </i>\r\n            </div>\r\n          </div>\r\n          <div class=\"six fields\">\r\n            <div class=\"three wide field\">\r\n              <div class=\"ui selection dropdown\">\r\n                <input type=\"hidden\" name=\"status\">\r\n                <i class=\"dropdown icon\"></i>\r\n                <div class=\"default text\">Status</div>\r\n                <div class=\"menu\">\r\n                  <div class=\"item\" data-value=\"1\">Active</div>\r\n                  <div class=\"item\" data-value=\"0\">Inactive</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"three wide field\">\r\n              <div class=\"ui selection dropdown\">\r\n                <input type=\"hidden\" name=\"status\">\r\n                <i class=\"dropdown icon\"></i>\r\n                <div class=\"default text\">All products</div>\r\n                <div class=\"menu\">\r\n                  <div class=\"item\" data-value=\"1\">-----</div>\r\n                  <div class=\"item\" data-value=\"0\">----</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"five wide field\">\r\n              <button class=\"ui button allReq_search\">\r\n                <span class=\"allReq_text\">Search</span>\r\n              </button>\r\n              <button class=\"ui button allReq_reset\">\r\n                <span class=\"allReq_text\">Reset</span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"user-table-list b2c-list-user-table\">\r\n          <table class=\"ui stackable celled table\">\r\n            <thead>\r\n              <tr class=\"center aligned\">\r\n                <th>S/No</th>\r\n                <th>Booking Date</th>\r\n                <th>Booking Reference</th>\r\n                <th>Employee ID</th>\r\n                <th>Pasenger Name</th>\r\n                <th>Booking Creator</th>\r\n                <th>Department Name</th>\r\n                <th>Approval History</th>\r\n                <th>Product</th>\r\n                <th>Status</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr class=\"center aligned\">\r\n                <td data-label=\"s/no\">----</td>\r\n                <td data-label=\"bookingDate\">----</td>\r\n                <td data-label=\"bookingReference\">------</td>\r\n                <td data-label=\"employeeId\">------</td>\r\n                <td data-label=\"passengerName\">------</td>\r\n                <td data-label=\"bookingCreator\">-------</td>\r\n                <td data-label=\"deptName\">-------</td>\r\n                <td data-label=\"approvalHistory\"><a href=\"url\">View</a></td>\r\n                <td data-label=\"product\">-------</td>\r\n                <td data-label=\"status\"><span class=\"approved_text\">Approved</span></td>\r\n              </tr>\r\n              <tr class=\"center aligned\">\r\n                <td data-label=\"s/no\">----</td>\r\n                <td data-label=\"bookingDate\">----</td>\r\n                <td data-label=\"bookingReference\">------</td>\r\n                <td data-label=\"employeeId\">------</td>\r\n                <td data-label=\"passengerName\">------</td>\r\n                <td data-label=\"bookingCreator\">-------</td>\r\n                <td data-label=\"deptName\">-------</td>\r\n                <td data-label=\"approvalHistory\"><a href=\"url\">View</a></td>\r\n                <td data-label=\"product\">-------</td>\r\n                <td data-label=\"status\"><span class=\"pending_text\">Pending</span></td>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr>\r\n                <th colspan=\"18\">\r\n                  <div class=\"ui right floated pagination menu\">\r\n                    <a class=\"icon item\"><i class=\"left chevron icon\"></i></a>\r\n                    <a class=\"item\">1</a>\r\n                    <a class=\"item\">2</a>\r\n                    <a class=\"item\">3</a>\r\n                    <a class=\"item\">4</a>\r\n                    <a class=\"icon item\"><i class=\"right chevron icon\"></i></a>\r\n                  </div>\r\n                </th>\r\n              </tr>\r\n            </tfoot>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui bottom attached tab segment\" [class.active]=\"activeTab && tabName=='second-tab'\">\r\n    <div class=\"ui fluid container\">\r\n      <div class=\"approval_req_wrapper\">\r\n        <div class=\"ui form\">\r\n          <div class=\"six fields\">\r\n            <div class=\"three wide field\">\r\n              <input type=\"text\" name=\"requestId\" placeholder=\"Request ID/ Booking ReferenceID\">\r\n            </div>\r\n            <div class=\"three wide field\">\r\n              <input type=\"text\" name=\"employeeId\" placeholder=\"Employee ID\">\r\n            </div>\r\n            <div class=\"three wide field\">\r\n              <input type=\"text\" name=\"passengerNmae\" placeholder=\"Passenger(first name)\">\r\n            </div>\r\n            <div class=\"three wide field\">\r\n              <div class=\"ui selection dropdown\">\r\n                <input type=\"hidden\" name=\"organisation\">\r\n                <i class=\"dropdown icon\"></i>\r\n                <div class=\"default text\">Organisation</div>\r\n                <div class=\"menu\">\r\n                  <div class=\"item\" data-value=\"1\">-----</div>\r\n                  <div class=\"item\" data-value=\"0\">-----</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"three wide field\">\r\n              <input type=\"text\" name=\"startDate\" class=\"start-date\" placeholder=\"Start Date\" />\r\n              <i class=\"icon\">\r\n                <img src=\"./../../../../assets/icons/calendar.svg\" class=\"corporate_input__placeholder-icon cal\" />\r\n              </i>\r\n            </div>\r\n            <div class=\"three wide field\">\r\n              <input type=\"text\" name=\"endDate\" class=\"end-date\" placeholder=\"End Date\" />\r\n              <i class=\"icon\">\r\n                <img src=\"./../../../../assets/icons/calendar.svg\" class=\"corporate_input__placeholder-icon cal\" />\r\n              </i>\r\n            </div>\r\n          </div>\r\n          <div class=\"six fields\">\r\n            <div class=\"three wide field\">\r\n              <div class=\"ui selection dropdown\">\r\n                <input type=\"hidden\" name=\"products\">\r\n                <i class=\"dropdown icon\"></i>\r\n                <div class=\"default text\">All products</div>\r\n                <div class=\"menu\">\r\n                  <div class=\"item\" data-value=\"1\">-----</div>\r\n                  <div class=\"item\" data-value=\"0\">----</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"five wide field\">\r\n              <button class=\"ui button allReq_search\">\r\n                <span class=\"allReq_text\">Search</span>\r\n              </button>\r\n              <button class=\"ui button allReq_reset\">\r\n                <span class=\"allReq_text\">Reset</span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"user-table-list b2c-list-user-table\">\r\n          <table class=\"ui stackable celled table\">\r\n            <thead>\r\n              <tr class=\"center aligned\">\r\n                <th>S/No</th>\r\n                <th>Booking Date</th>\r\n                <th>Booking Reference</th>\r\n                <th>Employee ID</th>\r\n                <th>Pasenger Name</th>\r\n                <th>Booking Creator</th>\r\n                <th>Department Name</th>\r\n                <th>Approval History</th>\r\n                <th>Product</th>\r\n                <th>Status</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr class=\"center aligned\">\r\n                <td data-label=\"s/no\">----</td>\r\n                <td data-label=\"bookingDate\">----</td>\r\n                <td data-label=\"bookingReference\">------</td>\r\n                <td data-label=\"employeeId\">------</td>\r\n                <td data-label=\"passengerName\">------</td>\r\n                <td data-label=\"bookingCreator\">-------</td>\r\n                <td data-label=\"deptName\">-------</td>\r\n                <td data-label=\"approvalHistory\"><a href=\"url\">View</a></td>\r\n                <td data-label=\"product\">-------</td>\r\n                <td data-label=\"status\"><span class=\"approved_text\">Approved</span></td>\r\n              </tr>\r\n              <tr class=\"center aligned\">\r\n                <td data-label=\"s/no\">----</td>\r\n                <td data-label=\"bookingDate\">----</td>\r\n                <td data-label=\"bookingReference\">------</td>\r\n                <td data-label=\"employeeId\">------</td>\r\n                <td data-label=\"passengerName\">------</td>\r\n                <td data-label=\"bookingCreator\">-------</td>\r\n                <td data-label=\"deptName\">-------</td>\r\n                <td data-label=\"approvalHistory\"><a href=\"url\">View</a></td>\r\n                <td data-label=\"product\">-------</td>\r\n                <td data-label=\"status\"><span class=\"pending_text\">Pending</span></td>\r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr>\r\n                <th colspan=\"18\">\r\n                  <div class=\"ui right floated pagination menu\">\r\n                    <a class=\"icon item\"><i class=\"left chevron icon\"></i></a>\r\n                    <a class=\"item\">1</a>\r\n                    <a class=\"item\">2</a>\r\n                    <a class=\"item\">3</a>\r\n                    <a class=\"item\">4</a>\r\n                    <a class=\"icon item\"><i class=\"right chevron icon\"></i></a>\r\n                  </div>\r\n                </th>\r\n              </tr>\r\n            </tfoot>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui bottom attached tab segment\" [class.active]=\"activeTab && tabName=='third-tab'\">\r\n    <div class=\"ui fluid container\">\r\n      <div class=\"ui form\">\r\n        <div class=\"six fields\">\r\n          <div class=\"three wide field\">\r\n            <input type=\"text\" name=\"tripId\" placeholder=\"Trip ID/ Booking Reference    \">\r\n          </div>\r\n          <div class=\"three wide field\">\r\n            <input type=\"text\" name=\"employeeId\" placeholder=\"Employee ID\">\r\n          </div>\r\n          <div class=\"three wide field\">\r\n            <input type=\"text\" name=\"passengerNmae\" placeholder=\"Passenger(first name)\">\r\n          </div>\r\n          <div class=\"three wide field\">\r\n            <div class=\"ui selection dropdown\">\r\n              <input type=\"hidden\" name=\"organisation\">\r\n              <i class=\"dropdown icon\"></i>\r\n              <div class=\"default text\">Organisation</div>\r\n              <div class=\"menu\">\r\n                <div class=\"item\" data-value=\"1\">-----</div>\r\n                <div class=\"item\" data-value=\"0\">-----</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"three wide field\">\r\n            <div class=\"ui selection dropdown\">\r\n              <input type=\"hidden\" name=\"all\">\r\n              <i class=\"dropdown icon\"></i>\r\n              <div class=\"default text\">All</div>\r\n              <div class=\"menu\">\r\n                <div class=\"item\" data-value=\"1\">-----</div>\r\n                <div class=\"item\" data-value=\"0\">-----</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"six fields\">\r\n\r\n          <div class=\"three wide field\">\r\n            <input type=\"text\" name=\"startDate\" class=\"start-date\" placeholder=\"Start Date\" />\r\n            <i class=\"icon\">\r\n              <img src=\"./../../../../assets/icons/calendar.svg\" class=\"corporate_input__placeholder-icon cal\" />\r\n            </i>\r\n          </div>\r\n          <div class=\"three wide field\">\r\n            <input type=\"text\" name=\"endDate\" class=\"end-date\" placeholder=\"End Date\" />\r\n            <i class=\"icon\">\r\n              <img src=\"./../../../../assets/icons/calendar.svg\" class=\"corporate_input__placeholder-icon cal\" />\r\n            </i>\r\n          </div>\r\n          <div class=\"five wide field\">\r\n            <button class=\"ui button allReq_search\">\r\n              <span class=\"allReq_text\">Search</span>\r\n            </button>\r\n            <button class=\"ui button allReq_reset\">\r\n              <span class=\"allReq_text\">Reset</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"user-table-list b2c-list-user-table\">\r\n        <table class=\"ui stackable celled table\">\r\n          <thead>\r\n            <tr class=\"center aligned\">\r\n              <th>S/No</th>\r\n              <th>Trip ID</th>\r\n              <th>Tour Code Name</th>\r\n              <th>Booking Date</th>\r\n              <th>Booking Reference</th>\r\n              <th>Employee ID</th>\r\n              <th>Request Creator</th>\r\n              <th>In policy /out of policy</th>\r\n              <th>Department</th>\r\n              <th>Approval History</th>\r\n              <th>Amount</th>\r\n              <th>Product</th>\r\n              <th>Booking Status</th>\r\n              <th>View</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr class=\"center aligned\">\r\n              <td data-label=\"s/no\">----</td>\r\n              <td data-label=\"tripId\">----</td>\r\n              <td data-label=\"tourCodeName\">------</td>\r\n              <td data-label=\"bookingDate\">------</td>\r\n              <td data-label=\"bookingReference\">------</td>\r\n              <td data-label=\"employeeID\">-------</td>\r\n              <td data-label=\"requestCreator\">-------</td>\r\n              <td data-label=\"inpolicy\">-------</td>\r\n              <td data-label=\"department\">-------</td>\r\n              <td data-label=\"approvalHistory\">------</td>\r\n              <td data-label=\"amount\">-------</td>\r\n              <td data-label=\"product\">-------</td>\r\n              <td data-label=\"bookingStatus\"><span class=\"approved_text\">Hold</span></td>\r\n              <td data-label=\"view\"><a href=\"url\">View</a></td>\r\n            </tr>\r\n            <tr class=\"center aligned\">\r\n              <td data-label=\"s/no\">----</td>\r\n              <td data-label=\"tripId\">----</td>\r\n              <td data-label=\"tourCodeName\">------</td>\r\n              <td data-label=\"bookingDate\">------</td>\r\n              <td data-label=\"bookingReference\">------</td>\r\n              <td data-label=\"employeeID\">-------</td>\r\n              <td data-label=\"requestCreator\">-------</td>\r\n              <td data-label=\"inpolicy\">-------</td>\r\n              <td data-label=\"department\">-------</td>\r\n              <td data-label=\"approvalHistory\"></td>\r\n              <td data-label=\"amount\">-------</td>\r\n              <td data-label=\"product\">-------</td>\r\n              <td data-label=\"bookingStatus\"><span class=\"approved_text\">Hold</span></td>\r\n              <td data-label=\"view\"><a href=\"url\">View</a></td>\r\n            </tr>\r\n          </tbody>\r\n          <tfoot>\r\n            <tr>\r\n              <th colspan=\"18\">\r\n                <div class=\"ui right floated pagination menu\">\r\n                  <a class=\"icon item\"><i class=\"left chevron icon\"></i></a>\r\n                  <a class=\"item\">1</a>\r\n                  <a class=\"item\">2</a>\r\n                  <a class=\"item\">3</a>\r\n                  <a class=\"item\">4</a>\r\n                  <a class=\"icon item\"><i class=\"right chevron icon\"></i></a>\r\n                </div>\r\n              </th>\r\n            </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui bottom attached tab segment\" [class.active]=\"activeTab && tabName=='fourth-tab'\">\r\n    <div class=\"ui fluid container\">\r\n      <div class=\"user-table-list b2c-list-user-table\">\r\n        <table class=\"ui stackable celled table\">\r\n          <thead>\r\n            <tr class=\"center aligned\">\r\n              <th>S/No</th>\r\n              <th>Name</th>\r\n              <th>Employee Name</th>\r\n              <th>Nationality</th>\r\n              <th>Booking Reference</th>\r\n              <th>Employee ID</th>\r\n              <th>Company/ Department</th>\r\n              <th>Details</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr class=\"center aligned\">\r\n              <td data-label=\"s/no\">----</td>\r\n              <td data-label=\"name\">----</td>\r\n              <td data-label=\"employeeName\">------</td>\r\n              <td data-label=\"nationality\">------</td>\r\n              <td data-label=\"bookingReference\">------</td>\r\n              <td data-label=\"employeeID\">-------</td>\r\n              <td data-label=\"companyDepartment\">-------</td>\r\n              <td data-label=\"details\"><a href=\"url\">View</a></td>\r\n            </tr>\r\n            <tr class=\"center aligned\">\r\n              <td data-label=\"s/no\">----</td>\r\n              <td data-label=\"name\">----</td>\r\n              <td data-label=\"employeeName\">------</td>\r\n              <td data-label=\"nationality\">------</td>\r\n              <td data-label=\"bookingReference\">------</td>\r\n              <td data-label=\"employeeID\">-------</td>\r\n              <td data-label=\"companyDepartment\">-------</td>\r\n              <td data-label=\"details\"><a href=\"url\">View</a></td>\r\n            </tr>\r\n          </tbody>\r\n          <tfoot>\r\n            <tr>\r\n              <th colspan=\"18\">\r\n                <div class=\"ui right floated pagination menu\">\r\n                  <a class=\"icon item\"><i class=\"left chevron icon\"></i></a>\r\n                  <a class=\"item\">1</a>\r\n                  <a class=\"item\">2</a>\r\n                  <a class=\"item\">3</a>\r\n                  <a class=\"item\">4</a>\r\n                  <a class=\"icon item\"><i class=\"right chevron icon\"></i></a>\r\n                </div>\r\n              </th>\r\n            </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui bottom attached tab segment\" [class.active]=\"activeTab && tabName=='five-tab'\">\r\n    <div class=\"ui fluid container\">\r\n      <div class=\"ui form\">\r\n        <div class=\"six fields\">\r\n          <div class=\"three wide field\">\r\n            <input type=\"text\" name=\"startDate\" class=\"start-date\" placeholder=\"Start Date\" />\r\n            <i class=\"icon\">\r\n              <img src=\"./../../../../assets/icons/calendar.svg\" class=\"corporate_input__placeholder-icon cal\" />\r\n            </i>\r\n          </div>\r\n          <div class=\"three wide field\">\r\n            <input type=\"text\" name=\"endDate\" class=\"end-date\" placeholder=\"End Date\" />\r\n            <i class=\"icon\">\r\n              <img src=\"./../../../../assets/icons/calendar.svg\" class=\"corporate_input__placeholder-icon cal\" />\r\n            </i>\r\n          </div>\r\n          <div class=\"three wide field\">\r\n            <div class=\"ui selection dropdown\">\r\n              <input type=\"hidden\" name=\"corporate\">\r\n              <i class=\"dropdown icon\"></i>\r\n              <div class=\"default text\">Corporate</div>\r\n              <div class=\"menu\">\r\n                <div class=\"item\" data-value=\"1\">-----</div>\r\n                <div class=\"item\" data-value=\"0\">-----</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"three wide field\">\r\n            <div class=\"ui selection dropdown\">\r\n              <input type=\"hidden\" name=\"staff\">\r\n              <i class=\"dropdown icon\"></i>\r\n              <div class=\"default text\">Staff</div>\r\n              <div class=\"menu\">\r\n                <div class=\"item\" data-value=\"1\">-----</div>\r\n                <div class=\"item\" data-value=\"0\">-----</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"three wide field\">\r\n            <div class=\"ui selection dropdown\">\r\n              <input type=\"hidden\" name=\"all\">\r\n              <i class=\"dropdown icon\"></i>\r\n              <div class=\"default text\">All</div>\r\n              <div class=\"menu\">\r\n                <div class=\"item\" data-value=\"1\">-----</div>\r\n                <div class=\"item\" data-value=\"0\">-----</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"five wide field\">\r\n            <button class=\"ui button allReq_search\">\r\n              <span class=\"allReq_text\">Search</span>\r\n            </button>\r\n            <button class=\"ui button allReq_reset\">\r\n              <span class=\"allReq_text\">Reset</span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./src/app/layout/corporates/approval-queues/approval-queues-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/layout/corporates/approval-queues/approval-queues-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: ApprovalQueuesRoutingModule */

  /***/
  function srcAppLayoutCorporatesApprovalQueuesApprovalQueuesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApprovalQueuesRoutingModule", function () {
      return ApprovalQueuesRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _approval_queues_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./approval-queues.component */
    "./src/app/layout/corporates/approval-queues/approval-queues.component.ts");
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
      component: _approval_queues_component__WEBPACK_IMPORTED_MODULE_1__["ApprovalQueuesComponent"]
    }];

    var ApprovalQueuesRoutingModule = function ApprovalQueuesRoutingModule() {
      _classCallCheck(this, ApprovalQueuesRoutingModule);
    };

    ApprovalQueuesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], ApprovalQueuesRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/corporates/approval-queues/approval-queues.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/layout/corporates/approval-queues/approval-queues.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutCorporatesApprovalQueuesApprovalQueuesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".corporate_outer {\n  margin: 0px 20px 0px 15px;\n}\n\n.aproval_que {\n  margin: 0;\n  color: #4F4F4F;\n  font-size: 20px;\n  font-weight: 200;\n  line-height: 22px;\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\n.allReq_search {\n  border-radius: 3px;\n  background-color: #3867B1;\n  max-height: 35px;\n  width: 94px;\n}\n\n.allReq_reset {\n  border-radius: 3px;\n  background-color: #4F4F4F;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n  max-height: 35px;\n  width: 94px;\n}\n\n.allReq_text {\n  color: #FFF;\n  font-family: Helvetica;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.corporate_input__placeholder-icon {\n  position: relative;\n  width: 18px;\n  bottom: 28px;\n  left: 9px;\n}\n\n.start-date,\n.end-date {\n  text-indent: 17px;\n}\n\n.ui.form .three.wide.field {\n  max-height: 33px;\n}\n\n.approved_text {\n  color: #FFF;\n  width: 63px;\n  font-family: Helvetica;\n  background-color: #3867B1;\n  padding: 5px;\n}\n\n.pending_text {\n  color: #FFF;\n  width: 63px;\n  font-family: Helvetica;\n  background-color: #BDBDBD;\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvcnBvcmF0ZXMvYXBwcm92YWwtcXVldWVzL0U6XFxCZWxhbFxccHJvamVjdHNcXGFnZ3JlZ2F0b3ItZnJvbnRlbmQvc3JjXFxhcHBcXGxheW91dFxcY29ycG9yYXRlc1xcYXBwcm92YWwtcXVldWVzXFxhcHByb3ZhbC1xdWV1ZXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dC9jb3Jwb3JhdGVzL2FwcHJvdmFsLXF1ZXVlcy9hcHByb3ZhbC1xdWV1ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBa0IseUJBQUE7QUNFbEI7O0FEQUE7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDR0Y7O0FEQUE7RUFDRSxnQkFBQTtBQ0dGOztBREFBO0VBQ0Usa0NBQUE7RUFDQSx3Q0FBQTtBQ0dGOztBREFBO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0FDR0Y7O0FEQUE7RUFBYyw0Q0FBQTtBQ0lkOztBREZBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0tGOztBREZBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlGQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDS0Y7O0FERkE7RUFDSSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDS0o7O0FERkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0tGOztBREZBOztFQUNXLGlCQUFBO0FDTVg7O0FESkE7RUFDRSxnQkFBQTtBQ09GOztBREpBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ09KOztBREpBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvcnBvcmF0ZXMvYXBwcm92YWwtcXVldWVzL2FwcHJvdmFsLXF1ZXVlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb3Jwb3JhdGVfb3V0ZXIge21hcmdpbjogMHB4IDIwcHggMHB4IDE1cHg7fVxyXG5cclxuLmFwcm92YWxfcXVlIHtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICM0RjRGNEY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbn1cclxuXHJcbi51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLm1lbnU+Lml0ZW0ge1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yODU3MTQyOXJlbSAwIDAgMDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udWkuYm90dG9tLmF0dGFjaGVkLmFjdGl2ZS50YWIuc2VnbWVudCB7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTdweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTdweDtcclxufVxyXG5cclxuLnRhYi5zZWdtZW50IHtib3gtc2hhZG93OiAzcHggM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC40KTt9XHJcblxyXG4uYWxsUmVxX3NlYXJjaCB7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XHJcbiAgbWF4LWhlaWdodDogMzVweDtcclxuICB3aWR0aDogOTRweDtcclxufVxyXG5cclxuLmFsbFJlcV9yZXNldCB7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0RjRGNEY7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIG1heC1oZWlnaHQ6IDM1cHg7XHJcbiAgd2lkdGg6IDk0cHg7XHJcbn1cclxuXHJcbi5hbGxSZXFfdGV4dCB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMThweDtcclxuICBib3R0b206IDI4cHg7XHJcbiAgbGVmdDogOXB4O1xyXG59XHJcblxyXG4uc3RhcnQtZGF0ZSxcclxuLmVuZC1kYXRlIHt0ZXh0LWluZGVudDogMTdweDt9XHJcblxyXG4udWkuZm9ybSAudGhyZWUud2lkZS5maWVsZCB7XHJcbiAgbWF4LWhlaWdodDogMzNweDtcclxufVxyXG5cclxuLmFwcHJvdmVkX3RleHQge1xyXG4gICAgY29sb3I6I0ZGRjtcclxuICAgIHdpZHRoOiA2M3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODY3QjE7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5wZW5kaW5nX3RleHQge1xyXG4gICAgY29sb3I6I0ZGRjtcclxuICAgIHdpZHRoOiA2M3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNCREJEQkQ7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuIiwiLmNvcnBvcmF0ZV9vdXRlciB7XG4gIG1hcmdpbjogMHB4IDIwcHggMHB4IDE1cHg7XG59XG5cbi5hcHJvdmFsX3F1ZSB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59XG5cbi51aS50b3AuYXR0YWNoZWQudGFidWxhci5tZW51IHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cblxuLnVpLnRvcC5hdHRhY2hlZC5tZW51ID4gLml0ZW0ge1xuICBib3JkZXItcmFkaXVzOiAwLjI4NTcxNDI5cmVtIDAgMCAwO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xufVxuXG4udWkuYm90dG9tLmF0dGFjaGVkLmFjdGl2ZS50YWIuc2VnbWVudCB7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE3cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTdweDtcbn1cblxuLnRhYi5zZWdtZW50IHtcbiAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5hbGxSZXFfc2VhcmNoIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xuICBtYXgtaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogOTRweDtcbn1cblxuLmFsbFJlcV9yZXNldCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRGNEY0RjtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBtYXgtaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogOTRweDtcbn1cblxuLmFsbFJlcV90ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvcnBvcmF0ZV9pbnB1dF9fcGxhY2Vob2xkZXItaWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDE4cHg7XG4gIGJvdHRvbTogMjhweDtcbiAgbGVmdDogOXB4O1xufVxuXG4uc3RhcnQtZGF0ZSxcbi5lbmQtZGF0ZSB7XG4gIHRleHQtaW5kZW50OiAxN3B4O1xufVxuXG4udWkuZm9ybSAudGhyZWUud2lkZS5maWVsZCB7XG4gIG1heC1oZWlnaHQ6IDMzcHg7XG59XG5cbi5hcHByb3ZlZF90ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIHdpZHRoOiA2M3B4O1xuICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5wZW5kaW5nX3RleHQge1xuICBjb2xvcjogI0ZGRjtcbiAgd2lkdGg6IDYzcHg7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCREJEQkQ7XG4gIHBhZGRpbmc6IDVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/layout/corporates/approval-queues/approval-queues.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/layout/corporates/approval-queues/approval-queues.component.ts ***!
    \********************************************************************************/

  /*! exports provided: ApprovalQueuesComponent */

  /***/
  function srcAppLayoutCorporatesApprovalQueuesApprovalQueuesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApprovalQueuesComponent", function () {
      return ApprovalQueuesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ApprovalQueuesComponent =
    /*#__PURE__*/
    function () {
      function ApprovalQueuesComponent() {
        _classCallCheck(this, ApprovalQueuesComponent);

        this.activeTab = true;
        this.tabName = "first-tab";
      }

      _createClass(ApprovalQueuesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          $(document).ready(function () {
            $('.menu .item').tab();
            $('.ui.dropdown').dropdown();
            $(function () {
              $('input[name="startDate"],input[name="endDate"]').daterangepicker({
                singleDatePicker: true,
                showDropdowns: true,
                minYear: 1901,
                maxYear: parseInt(moment().format('YYYY'), 10)
              }, function (start, end, label) {
                var years = moment().diff(start, 'years');
              });
            });
          });
        }
      }, {
        key: "activateTab",
        value: function activateTab(name) {
          switch (name) {
            case 'first-tab':
              this.activeTab = true;
              this.tabName = name;
              break;

            case 'second-tab':
              this.activeTab = true;
              this.tabName = name;
              break;

            case 'third-tab':
              this.activeTab = true;
              this.tabName = name;
              break;

            case 'fourth-tab':
              this.activeTab = true;
              this.tabName = name;
              break;

            case 'five-tab':
              this.activeTab = true;
              this.tabName = name;
              break;

            default:
              this.activeTab = true;
              this.tabName = name;
              break;
          }
        }
      }]);

      return ApprovalQueuesComponent;
    }();

    ApprovalQueuesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-approval-queues',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./approval-queues.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/corporates/approval-queues/approval-queues.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./approval-queues.component.scss */
      "./src/app/layout/corporates/approval-queues/approval-queues.component.scss")).default]
    })], ApprovalQueuesComponent);
    /***/
  },

  /***/
  "./src/app/layout/corporates/approval-queues/approval-queues.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/layout/corporates/approval-queues/approval-queues.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: ApprovalQueuesModule */

  /***/
  function srcAppLayoutCorporatesApprovalQueuesApprovalQueuesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApprovalQueuesModule", function () {
      return ApprovalQueuesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _approval_queues_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./approval-queues.component */
    "./src/app/layout/corporates/approval-queues/approval-queues.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _approval_queues_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./approval-queues-routing.module */
    "./src/app/layout/corporates/approval-queues/approval-queues-routing.module.ts");

    var ApprovalQueuesModule = function ApprovalQueuesModule() {
      _classCallCheck(this, ApprovalQueuesModule);
    };

    ApprovalQueuesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_approval_queues_component__WEBPACK_IMPORTED_MODULE_1__["ApprovalQueuesComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _approval_queues_routing_module__WEBPACK_IMPORTED_MODULE_4__["ApprovalQueuesRoutingModule"]]
    })], ApprovalQueuesModule);
    /***/
  }
}]);
//# sourceMappingURL=approval-queues-approval-queues-module-es5.js.map