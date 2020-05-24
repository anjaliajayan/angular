function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transactions-transactions-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/accounts/transactions/transactions.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/accounts/transactions/transactions.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutAccountsTransactionsTransactionsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"outer-segment\">\r\n  <div class=\"user\">\r\n    <h3 class=\"user_title\">My Transactions</h3>\r\n  </div>\r\n  <div class=\"ui top attached tabular menu\">\r\n    <div class=\"active item create_tab_title\" data-tab=\"first\">Transaction\r\n    </div>\r\n    <div class=\"item corporate_staff\" data-tab=\"second\">Top Up</div>\r\n    <div class=\"item corporate_staff\" data-tab=\"third\">Floating Deposit</div>\r\n  </div>\r\n  <div class=\"ui bottom attached active tab segment tabContent-block\" data-tab=\"first\">\r\n    <div class=\"ui fluid container\">\r\n      <div class=\"outer-form result-block\">\r\n        <form class=\"ui form b2b_basic_form\" [formGroup]=\"filterTransactionForm\" (ngSubmit)=\"filterData()\">\r\n          <div class=\"field\">\r\n            <div class=\"two fields\">\r\n              <div class=\"three wide field\">\r\n                <label>Organisation Name</label>\r\n                <input type=\"text\" placeholder=\"Name\" disabled value=\"{{organisationAccount.name}}\">\r\n              </div>\r\n              <div class=\"three wide field\">\r\n                <label>Deposit A/C Balance</label>\r\n                <input type=\"text\" placeholder=\"Deposit A/C Balance\" disabled value=\"{{depost +' '+ currencyCode }}\">\r\n              </div>\r\n              <!-- <div class=\"three wide field\">\r\n                <input type=\"text\" placeholder=\"Credit A/C Balance\" disabled\r\n                  value=\"{{organisationAccount['currency.code'] +' '+ organisationAccount['organisation_account.due_credit'] }}\">\r\n              </div> -->\r\n              <!-- <div *appCanAccess=\"['account', 'topup','add']\" class=\"ui dropdown  primary button bookings_btn-panel pnr-button\"> -->\r\n              <div class=\"ui dropdown  primary button bookings_btn-panel pnr-button\">\r\n                <div class=\"text\">Add New Transaction</div>\r\n                <i class=\"dropdown icon\"></i>\r\n                <div class=\"menu\">\r\n                  <div class=\"item\" (click)=\"openModal('agent-transaction')\">Agent</div>\r\n                  <!-- <div class=\"item\" (click)=\"openModal('corporate-transaction')\">Corporate</div> -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"field\">\r\n            <hr>\r\n          </div> -->\r\n          <h4 class=\"ui header main_head\">Related Transaction</h4>\r\n          <div class=\"field\">\r\n            <div class=\"fields\">\r\n              <div class=\"three wide field\">\r\n                <label>Agent / Corporate</label>\r\n                <select class=\"ui fluid search dropdown\" formControlName=\"organisation_id\">\r\n                  <option value=\"all\">All Agent/Corporate</option>\r\n                  <option *ngFor=\"let agent of agentAndCorporates\" value=\"{{agent.organisation_id}}\">\r\n                    {{agent.name}}\r\n                  </option>\r\n                </select>\r\n              </div>\r\n              <div class=\"two wide field\">\r\n                <label>Trip ID</label>\r\n                <input type=\"text\" name=\"trip-id\" placeholder=\"Trip Id\" formControlName=\"trip_id\">\r\n              </div>\r\n              <div class=\"three wide field\">\r\n                <label>Payment Type</label>\r\n                <select class=\"ui fluid search dropdown\" formControlName=\"payment_type\">\r\n                  <option value=\"all\">Credit / Debit</option>\r\n                  <option value=\"credit\" selected>Credit</option>\r\n                  <option value=\"debit\" selected>Debit</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"two wide field bookings_pickers\">\r\n                <label>Start Date</label>\r\n                <div class=\"ui left icon input\">\r\n                  <input type=\"text\" placeholder=\"Start Date\" name=\"start_date\" formControlName=\"start_date\" />\r\n                  <i class=\"icon\">\r\n                    <img src=\"./../../../../assets/icons/calendar.svg\" class=\"bookings_input__placeholder-icon cal\" />\r\n                  </i>\r\n                </div>\r\n              </div>\r\n              <div class=\"two wide field bookings_pickers\">\r\n                <label>End Date</label>\r\n                <div class=\"ui left icon input\">\r\n                  <input type=\"text\" placeholder=\"End Date\" name=\"end_date\" formControlName=\"end_date\" />\r\n                  <i class=\"icon\">\r\n                    <img src=\"./../../../../assets/icons/calendar.svg\" class=\"bookings_input__placeholder-icon cal\" />\r\n                  </i>\r\n                </div>\r\n              </div>\r\n              <div class=\"bookings_btn-panel\">\r\n                <button class=\"ui primary  button\" type=\"submit\">\r\n                  Search\r\n                </button>\r\n                <button class=\"ui secondary reset button\" (click)=\"filterFormReset()\">\r\n                  Reset\r\n                </button>\r\n              </div>\r\n              <!-- <div class=\"download-img\" title=\"Export\" (click)=\"exportData()\"><img class=\"ui image download-img_icon\"\r\n                  src=\"./../../../../assets/img/download.png\" /></div> -->\r\n            </div>\r\n          </div>\r\n          <!-- <div class=\"field\">\r\n            <hr>\r\n          </div> -->\r\n          <div class=\"ui segment\">\r\n            <div class=\"fields\">\r\n              <div class=\"eight wide field ui small header\">Transactions Log</div>\r\n              <!-- <div class=\"ui divider\"></div> -->\r\n              <div class=\"eight wide field bookings_btn-panel\">\r\n                <button class=\"ui export button\" (click)=\"exportData()\" title=\"Export\">\r\n                  Export\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"user-table-list b2c-list-user-table\">\r\n              <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n                [rowHeight]=\"'auto'\" [rows]='transactions' [externalPaging]=\"true\" [count]=\"totalTransaction\"\r\n                [offset]=\"offsetTransaction\" (page)=\"pageCallback($event)\">\r\n                <ngx-datatable-column name=\"Agent/Corporate\" prop=\"organisation.name\">\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"Trip ID\" prop=\"trip_id\">\r\n                  <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n                    <span *ngIf=\"value\">{{value}}</span>\r\n                    <span *ngIf=\"!value\">---</span>\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"Date&Time\" prop=\"created\">\r\n                  <ng-template ngx-datatable-cell-template let-value=\"value\">{{value |date: 'dd/MM/yyyy h:mm a'}}\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"Comments\" prop=\"transaction_comments\">\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"Account Type\" prop=\"payment_type\">\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"Amount\" prop=\"amount\">\r\n                  <ng-template ngx-datatable-cell-template let-row=\"row\">\r\n                    <span *ngIf=\"row.amount && row.currency \">\r\n                      {{(row.amount | number) +\" \"+row.currency.currency_code}}\r\n                    </span>\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n                <ngx-datatable-column name=\"CR/DR\" prop=\"transaction_type\">\r\n                  <ng-template ngx-datatable-cell-template let-value=\"value\">\r\n                    <span *ngIf=\"value =='credit'\">CR</span>\r\n                    <span *ngIf=\"value =='debit'\">DR</span>\r\n                  </ng-template>\r\n                </ngx-datatable-column>\r\n              </ngx-datatable>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui bottom attached tab segment tabContent-block\" data-tab=\"second\">\r\n    <div class=\"ui fluid container\">\r\n      <div class=\"outer_corpForm result-block\">\r\n        <div class=\"user-table-list b2c-list-user-table\">\r\n          <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n            [rowHeight]=\"'auto'\" [rows]='toptupList' [sortType]=\"'multi'\" [reorderable]=\"true\" [externalPaging]=\"true\"\r\n            [count]=\"totalTopup\" [offset]=\"offsetTopup\" (page)=\"pageTopCallback($event)\">\r\n            <ngx-datatable-column name=\"IATA\" prop=\"agency_iata_num\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Agency Name\" prop=\"agency_name\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Type\" prop=\"topup_type\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Sub Type\" prop=\"topup_subtype\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Amount\" prop=\"payment_amount\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Bank Charge\" prop=\"bank_charge\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Reference\" prop=\"request_no\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Booked Date\" prop=\"created_date\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\">{{value |date: 'dd/MM/yyyy h:mm a'}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Status\">\r\n              <ng-template let-value=\"value\" let-row=\"row\" ngx-datatable-cell-template>\r\n                <div class=\"recConfirm {{(row.topup_status=='1')?'Confirm':'hold'}}\">\r\n                  {{(row.topup_status=='1')?'Confirm':'Hold'}}</div>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Action\">\r\n              <ng-template let-value=\"value\" let-row=\"row\" ngx-datatable-cell-template>\r\n                <!-- <div *appCanAccess=\"['account', 'topup', 'edit']\">\r\n                  <a *ngIf=\"row.topup_status!=1\" class=\"nav-link edit\" (click)=\"editTopup(row,'custom-modal-1',1)\"\r\n                    title=\"Edit Details\">\r\n                    <i class=\"icon\">\r\n                      <img src=\"./../../../../assets/icons/edit.png\" class=\"edit-icon-img\"\r\n                        [ngStyle]=\"{'width.px':13}\" />\r\n                    </i>\r\n                  </a>\r\n                </div> -->\r\n                <div>\r\n                  <a (click)=\"editTopup(row,'custom-modal-1',1)\" title=\"Edit Details\">\r\n                    <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\r\n                    <!-- <i class=\"icon\">\r\n                      <img src=\"./../../../../assets/icons/edit.png\" class=\"edit-icon-img\"\r\n                        [ngStyle]=\"{'width.px':13}\" />\r\n                    </i> -->\r\n                  </a>\r\n                </div>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Attachment\">\r\n              <ng-template let-value=\"value\" let-row=\"row\" ngx-datatable-cell-template>\r\n                <a class=\"nav-link edit\" target=\"__blank\" href=\"{{row.attachment}}\" *ngIf=\"row.attachment\"\r\n                  title=\"View Document\">\r\n                  <i class=\"eye icon eye-icon\"></i>\r\n                </a>\r\n                <a class=\"nav-link edit\" target=\"__blank\" href=\"{{row.attachment}}\" *ngIf=\"!row.attachment\"\r\n                  title=\"View Document\">\r\n                  ---\r\n                </a>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n          </ngx-datatable>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"ui bottom attached tab segment tabContent-block\" data-tab=\"third\">\r\n    <div class=\"ui fluid container\">\r\n      <div class=\"outer_corpForm result-block\">\r\n        <div class=\"user-table-list b2c-list-user-table\">\r\n          <ngx-datatable #table class='table' [columnMode]=\"'force'\" [headerHeight]=\"50\" [footerHeight]=\"50\"\r\n            [rowHeight]=\"'auto'\" [limit]=\"10\" [rows]='floatingDepositList' [sortType]=\"'multi'\" [reorderable]=\"true\"\r\n            [externalPaging]=\"true\" [count]=\"totalFloating\" [offset]=\"offsetFloating\"\r\n            (page)=\"pageFloatingCallback($event)\">\r\n            <ngx-datatable-column name=\"IATA\" prop=\"agency_iata_num\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Agency Name\" prop=\"agency_name\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Type\" prop=\"topup_type\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Sub Type\" prop=\"topup_subtype\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Amount\" prop=\"payment_amount\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Bank Charge\" prop=\"bank_charge\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Reference\" prop=\"request_no\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Supplier\" prop=\"request_no\">\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Booked Date\" prop=\"created_date\">\r\n              <ng-template ngx-datatable-cell-template let-value=\"value\">{{value | date: 'dd/MM/yyyy'}}\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Status\">\r\n              <ngx-datatable-column name=\"Status\">\r\n                <ng-template let-value=\"value\" let-row=\"row\" ngx-datatable-cell-template>\r\n                  <div class=\"recConfirm {{(row.topup_status=='1')?'Confirm':'hold'}}\">\r\n                    {{(row.topup_status=='1')?'Confirm':'Hold'}}</div>\r\n                </ng-template>\r\n              </ngx-datatable-column>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Action\">\r\n              <ng-template let-value=\"value\" let-row=\"row\" ngx-datatable-cell-template>\r\n                <div>\r\n                  <a (click)=\"editTopup(row,'custom-modal-1',2)\" title=\"View Details\">\r\n                    <i class=\"eye icon eye-icon\" title=\"View details\"></i>\r\n                  </a>\r\n                </div>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n            <ngx-datatable-column name=\"Attachment\">\r\n              <ng-template let-value=\"value\" let-row=\"row\" ngx-datatable-cell-template>\r\n                <a class=\"nav-link edit\" target=\"__blank\" *ngIf=\"row.attachment\" href=\"{{row.attachment}}\"\r\n                  title=\"View Attachment\">\r\n                  <i class=\"eye icon eye-icon\" title=\"View Document\"></i>\r\n                </a>\r\n                <a class=\"nav-link edit\" target=\"__blank\" *ngIf=\"!row.attachment\" title=\"View Attachment\">\r\n                  ---\r\n                </a>\r\n              </ng-template>\r\n            </ngx-datatable-column>\r\n          </ngx-datatable>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<jw-modal id=\"custom-modal-1\" class=\"topUp-custom-modal\">\r\n  <div class=\"ui\" *ngIf=\"showDetailModal\">\r\n    <i class=\"close icon\" (click)=\"closeModal('custom-modal-1');\"></i>\r\n    <div class=\"header head\">\r\n      <ng-container *ngIf=\"!getInfo.isFloatingDeposit\"><b>Top-Up Request</b></ng-container>\r\n      <ng-container *ngIf=\"getInfo.isFloatingDeposit\"><b>Floating Deposit Request</b></ng-container>\r\n    </div>\r\n    <div class=\"ui fluid container\">\r\n      <div class=\"form-inner\">\r\n        <h4 class=\"ui  header\"><span class=\"basic-header\">Agency Details</span></h4>\r\n        <div class=\"field\">\r\n          <table class=\"ui celled table\">\r\n            <thead>\r\n              <tr>\r\n                <th>IATA</th>\r\n                <th>Agency Name</th>\r\n                <th>Agency Country</th>\r\n                <th>Agency Currency</th>\r\n                <th>Top-Up Type</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>\r\n                  {{getInfo.agency_iata_num}}\r\n                </td>\r\n                <td>\r\n                  {{getInfo.agency_name}}\r\n                </td>\r\n                <td>\r\n                  {{getInfo.agency_country}}\r\n                </td>\r\n                <td>\r\n                  {{getInfo.agency_currency}}\r\n                </td>\r\n                <td>\r\n                  {{getInfo.topup_type}}\r\n                </td>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <h4 class=\"ui  header\"><span class=\"basic-header\">Top-Up Details</span></h4>\r\n        <div class=\"field\">\r\n          <table class=\"ui celled table\">\r\n            <thead>\r\n              <tr>\r\n                <th>Sub Type</th>\r\n                <th>Purpose</th>\r\n                <th>Bank Name</th>\r\n                <th>Bank Account Number</th>\r\n                <th>Payment Date</th>\r\n                <th>Payment Currency</th>\r\n                <th>Payment Type</th>\r\n                <th>Payment Amount</th>\r\n                <th>Reference Number</th>\r\n                <th>Deposited By</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>\r\n                  {{getInfo.topup_subtype}}\r\n                </td>\r\n                <td>\r\n                  {{getInfo.topup_purpose}}\r\n                </td>\r\n                <td>\r\n                  {{getInfo.bank_name}}\r\n                </td>\r\n                <td>\r\n                  {{getInfo.bank_account_no}}\r\n                </td>\r\n                <td>\r\n                  {{getInfo.payment_date}}\r\n                </td>\r\n                <td>\r\n                  {{getInfo.payment_currency}}\r\n                </td>\r\n                <td>\r\n                  {{getInfo.payment_type}}\r\n                </td>\r\n                <td>\r\n                  {{getInfo.payment_amount}}\r\n                </td>\r\n                <td>\r\n                  {{getInfo.request_no}}\r\n                </td>\r\n                <td>\r\n                  {{getInfo.request_initiator}}\r\n                </td>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <ng-container *ngIf=\"!getInfo.isFloatingDeposit\">\r\n          <h4 class=\"ui  header\"><span class=\"basic-header\">Update Topup Request</span></h4>\r\n          <form class=\"ui form\" [formGroup]=\"updateTopupForm\" (ngSubmit)=\"updateTopupRequest('custom-modal-1')\">\r\n            <div class=\"form-inner\">\r\n              <div class=\"fields\">\r\n                <div class=\"three wide field\"\r\n                  [ngClass]=\"{'error': ((submitted && f.bank_charge_currency.errors) && f.bank_charge_currency.errors.required) }\">\r\n                  <select class=\"ui fluid search dropdown\" formControlName=\"bank_charge_currency\">\r\n                    <option value=\"\" selected>Select Currency</option>\r\n                    <option *ngFor=\"let currency of currencies\" value=\"{{currency.code}}\">\r\n                      {{currency.code}}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"three wide field\"\r\n                  [ngClass]=\"{'error': ((submitted && f.bank_charge.errors) && f.bank_charge.errors.required) }\">\r\n                  <input type=\"number\" name=\"bank_charge\" formControlName=\"bank_charge\" min=\"0\"\r\n                    placeholder=\"Bank charge\">\r\n                </div>\r\n                <div class=\"three wide field\"\r\n                  [ngClass]=\"{'error': ((submitted && f.topup_status.errors) && f.topup_status.errors.required) }\">\r\n                  <select class=\"ui fluid search dropdown\" formControlName=\"topup_status\">\r\n                    <option value=\"\">Select</option>\r\n                    <option value=\"1\">Confirm</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n              <div class=\"fields\">\r\n                <div class=\"bookings_btn-panel\">\r\n                  <button class=\"ui primary  button\">\r\n                    Update\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</jw-modal>\r\n\r\n<jw-modal id=\"corporate-transaction\">\r\n  <div class=\"ui\" *ngIf=\"showCorporateModal\">\r\n    <i class=\"close icon\" (click)=\"closeModal('corporate-transaction');\"></i>\r\n    <div class=\"header\">\r\n      <b>Corporate Transaction : Make Payment</b>\r\n    </div>\r\n    <div class=\"ui fluid container\">\r\n      <div class=\"form-inner\">\r\n        <form class=\"ui form\" [formGroup]=\"corporateTransactionForm\"\r\n          (ngSubmit)=\"submitCorporateTransaction('corporate-transaction')\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <div class=\"three wide field\"\r\n                [ngClass]=\"{'error': ((submittedCorp && fc.organisation_id.errors) && fc.organisation_id.errors.required) }\">\r\n                <label>Corporate</label>\r\n                <select class=\"ui fluid search dropdown\" formControlName=\"organisation_id\"\r\n                  (change)=\"getTransactionDetails($event)\" required>\r\n                  <option value=\"\" selected>Select Corporate</option>\r\n                  <option *ngFor=\"let corp of childCoporates\" value=\"{{corp.organisation_id}}\">\r\n                    {{corp.name}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"three wide field\"\r\n                [ngClass]=\"{'error': ((submittedCorp && fc.staff_id.errors) && fc.staff_id.errors.required) }\">\r\n                <label>Staff</label>\r\n                <select class=\"ui fluid search dropdown\" formControlName=\"staff_id\"\r\n                  (change)=\"getTransactionDetails($event)\" required>\r\n                  <option value=\"\" selected>Select Staff</option>\r\n                  <option *ngFor=\"let staff of staffList\" value=\"\">\r\n                    {{staff.employee_id}}</option>\r\n                </select>\r\n              </div>\r\n              <div class=\"three wide field\">\r\n                <input type=\"number\" name=\"payment_type\" formControlName=\"payment_type\" readonly min=\"0\"\r\n                  placeholder=\"Bank charge\">\r\n              </div>\r\n              <div class=\"field sexRadio\">\r\n                <div class=\"ui radio checkbox\">\r\n                  <input type=\"radio\" id=\"credit\" value=\"credit\" name=\"transaction_type\"\r\n                    formControlName=\"transaction_type\" class=\"hidden\">\r\n                  <label for=\"credit\">Credit</label>\r\n                </div>\r\n                <div class=\"ui radio checkbox\">\r\n                  <input type=\"radio\" id=\"debit\" value=\"debit\" name=\"transaction_type\"\r\n                    formControlName=\"transaction_type\" class=\"hidden\">\r\n                  <label for=\"debit\">Debit</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"three wide field\"\r\n                [ngClass]=\"{'error': ((submittedCorp && fc.amount.errors) && fc.amount.errors.required) }\">\r\n                <label>Transaction Amount (<b\r\n                    *ngIf=\"(agentDetails && agentDetails.currency != 'undefined')\">{{agentDetails.currency}}</b>)</label>\r\n                <input type=\"number\" name=\"amount\" formControlName=\"amount\" min=\"0\"\r\n                  placeholder=\"Transaction AMount (AED)\">\r\n              </div>\r\n              <div class=\"three wide field\"\r\n                [ngClass]=\"{'error': ((submittedCorp && fc.available_deposit.errors) && fc.available_deposit.errors.required) }\">\r\n                <label>Available deposit ( Corporate )</label>\r\n                <input type=\"number\" name=\"available_deposit\" formControlName=\"available_deposit\" min=\"0\"\r\n                  placeholder=\"Available deposit\">\r\n              </div>\r\n              <div class=\"three wide field\"\r\n                [ngClass]=\"{'error': ((submittedCorp && fc.available_deposit.errors) && fc.available_deposit.errors.required) }\">\r\n                <label>Comments</label>\r\n                <textarea type=\"number\" name=\"transaction_comments\" formControlName=\"transaction_comments\" min=\"0\"\r\n                  placeholder=\"Comments\"></textarea>\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"bookings_btn-panel\">\r\n                <button class=\"ui primary  button\">\r\n                  Make Transaction\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</jw-modal>\r\n<jw-modal id=\"agent-transaction\">\r\n  <div class=\"ui\" *ngIf=\"showAgentModal\">\r\n    <i class=\"close icon\" (click)=\"closeModal('agent-transaction');\"></i>\r\n    <br>\r\n    <div class=\"header\">\r\n      <b>Agent Transaction : Make Payment</b>\r\n    </div>\r\n    <br>\r\n    <div class=\"ui fluid container\">\r\n      <div class=\"form-inner\">\r\n        <form class=\"ui form\" [formGroup]=\"agentTransactionForm\"\r\n          (ngSubmit)=\"submitAgentTransaction('agent-transaction')\">\r\n          <div class=\"form-inner\">\r\n            <div class=\"fields\">\r\n              <div class=\"sixteen wide field\">\r\n                <label>Check by Agent and Trip</label>\r\n                <div class=\"ui radio checkbox select_chkBox\">\r\n                  <input type=\"radio\" id=\"Agent\" value=\"1\" name=\"selectType\" formControlName=\"selectType\"\r\n                    class=\"hidden\">\r\n                  <label for=\"Agent\">Agent</label>\r\n                </div>&nbsp;\r\n                <div class=\"ui radio checkbox select_chkBox\">\r\n                  <input type=\"radio\" id=\"Trip\" value=\"2\" name=\"selectType\" formControlName=\"selectType\" class=\"hidden\">\r\n                  <label for=\"Trip\">Trip ID</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\" *ngIf=\"agentTransactionForm.controls.selectType.value==1\">\r\n              <div class=\"sixteen wide field\"\r\n                [ngClass]=\"{'error': ((submittedAgent && fa.organisation_id.errors) && fa.organisation_id.errors.orgIdRequire) }\">\r\n                <label>Agent</label>\r\n                <select class=\"ui fluid search dropdown\" formControlName=\"organisation_id\"\r\n                  (change)=\"getTransactionDetails($event)\">\r\n                  <option value=\"\" selected>Select Agent</option>\r\n                  <option *ngFor=\"let agent of childAgents\" value=\"{{agent.organisation_id}}\">\r\n                    {{agent.name}}</option>\r\n                </select>\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\" *ngIf=\"agentTransactionForm.controls.selectType.value==2\">\r\n              <div class=\"sixteen wide field\"\r\n                [ngClass]=\"{'error': ((submittedAgent && fa.trip_id.errors) && fa.trip_id.errors.tripIdRequire) }\">\r\n                <label>Trip Id</label>\r\n                <input type=\"text\" name=\"trip_id\" formControlName=\"trip_id\" placeholder=\"Trip Id\">\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"field sixteen wide sexRadio\">\r\n                <label>Transaction Type</label>\r\n                <div class=\"ui radio checkbox\">\r\n                  <input type=\"radio\" id=\"credit\" value=\"credit\" name=\"transaction_type\"\r\n                    formControlName=\"transaction_type\" class=\"hidden\">\r\n                  <label for=\"credit\">Credit Amount</label>\r\n                </div>\r\n                <div class=\"ui radio checkbox\">\r\n                  <input type=\"radio\" id=\"debit\" value=\"debit\" name=\"transaction_type\"\r\n                    formControlName=\"transaction_type\" class=\"hidden\">\r\n                  <label for=\"debit\">Debit Amount</label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"eight wide field\"><label>Payment Towards</label>\r\n                <input type=\"text\" name=\"payment_type\" formControlName=\"payment_type\" readonly\r\n                  placeholder=\"payment_type\">\r\n              </div>\r\n              <div class=\"eight wide field\" *ngIf=\"agentTransactionForm.controls.selectType.value==1\">\r\n                <label>Available deposit</label>\r\n                <input type=\"text\" name=\"available_deposit\" formControlName=\"available_deposit\"\r\n                  placeholder=\"Available deposit\" readonly>\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"eight wide field\"\r\n                [ngClass]=\"{'error': ((submittedAgent && fa.amount.errors) && fa.amount.errors.required) }\">\r\n                <label>Transaction Amount (<b\r\n                    *ngIf=\"(agentDetails && agentDetails.currency != 'undefined')\">{{agentDetails.currency}}</b>)</label>\r\n                <input type=\"number\" name=\"amount\" formControlName=\"amount\" min=\"0\" placeholder=\"Transaction Amount\">\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"sixteen wide field\"\r\n                [ngClass]=\"{'error': ((submittedAgent && fa.transaction_comments.errors) && fa.transaction_comments.errors.required) }\">\r\n                <label>Comments</label>\r\n                <textarea name=\"transaction_comments\" formControlName=\"transaction_comments\"\r\n                  placeholder=\"Comments\"></textarea>\r\n              </div>\r\n            </div>\r\n            <div class=\"fields\">\r\n              <div class=\"bookings_btn-panel\">\r\n                <button class=\"ui primary  button\">\r\n                  Make Transaction\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</jw-modal>";
    /***/
  },

  /***/
  "./src/app/layout/accounts/transactions/transactions-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/layout/accounts/transactions/transactions-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: TransactionsRoutingModule */

  /***/
  function srcAppLayoutAccountsTransactionsTransactionsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionsRoutingModule", function () {
      return TransactionsRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _transactions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./transactions.component */
    "./src/app/layout/accounts/transactions/transactions.component.ts");
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
      component: _transactions_component__WEBPACK_IMPORTED_MODULE_1__["TransactionsComponent"]
    }];

    var TransactionsRoutingModule = function TransactionsRoutingModule() {
      _classCallCheck(this, TransactionsRoutingModule);
    };

    TransactionsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], TransactionsRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout/accounts/transactions/transactions.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/layout/accounts/transactions/transactions.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutAccountsTransactionsTransactionsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".outer-segment {\n  margin: 0px;\n}\n\n.user {\n  padding: 0px 24px;\n}\n\n.user_title {\n  margin: 0;\n  font-style: normal;\n  font-weight: 700 !important;\n  font-size: 20px;\n  line-height: 23px;\n  color: #181B20;\n}\n\n.ui.top.attached.tabular.menu {\n  margin-top: 25px;\n}\n\n.ui.header {\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 600;\n  line-height: 15px;\n}\n\n.ui.top.attached.menu > .item {\n  border-radius: 0.28571429rem 0 0 0;\n  border-top-right-radius: 15px !important;\n}\n\n.ui.bottom.attached.active.tab.segment {\n  border-bottom-left-radius: 17px;\n  border-bottom-right-radius: 17px;\n  border-top-right-radius: 17px;\n}\n\n.create_tab_title.corporate_staff {\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  text-align: center;\n}\n\n.tab.segment {\n  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.4);\n}\n\n.outer-form,\n.outer_corpForm {\n  box-sizing: border-box;\n  border-radius: 5px;\n  margin: 24px;\n}\n\nhr {\n  box-sizing: border-box;\n  overflow: visible;\n  border: 0.5px solid #E0E0E0;\n}\n\n.add_btn {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  margin: 20px;\n  font-weight: 500;\n  line-height: 15px;\n}\n\ninput {\n  box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.2);\n}\n\n.field input::-webkit-input-placeholder {\n  font-size: 13px;\n}\n\n.field input::-moz-placeholder {\n  font-size: 13px;\n}\n\n.field input::-ms-input-placeholder {\n  font-size: 13px;\n}\n\n.field input::placeholder {\n  font-size: 13px;\n}\n\n.dropdown .text {\n  font-size: 14px;\n}\n\n.create_btn {\n  box-sizing: border-box;\n  border-radius: 3px;\n  background-color: #3867b1;\n  border: 1px solid #FFF;\n  box-shadow: inset 0 1px 34px 0 rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(0, 0, 0, 0.5);\n  padding-right: 35px;\n  position: relative;\n  right: 30px;\n  bottom: 104px;\n}\n\n.create_text {\n  color: #FFF;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 15px;\n  padding-left: 10px;\n}\n\n.corporate_input__placeholder-icon {\n  position: relative;\n  width: 18px;\n  bottom: 28px;\n  left: 9px;\n}\n\ndiv.upload {\n  box-sizing: border-box;\n  height: 15px;\n  width: 123px;\n  border-radius: 3px;\n  background-color: #FFF;\n  border: 0.5px solid #808080;\n  margin-top: -25px;\n  box-shadow: 0 0.25px 0.1px 0 rgba(0, 0, 0, 0.5);\n}\n\ndiv.upload input {\n  display: block !important;\n  width: 123px !important;\n  height: 15px !important;\n  opacity: 0 !important;\n  overflow: hidden !important;\n}\n\n.no_choosen {\n  height: 10px;\n  width: 46px;\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 9px;\n  position: relative;\n  left: 132px;\n  bottom: 20px;\n  line-height: 10px;\n}\n\n.file_choose {\n  position: relative;\n  left: 31px;\n  bottom: 10px;\n  color: #4F4F4F;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 9px;\n  line-height: 10px;\n}\n\n.bookings_btn-panel {\n  margin-top: 20px;\n  margin-left: 12px;\n}\n\n.bookings_btn-panel.pnr-button {\n  position: absolute;\n  right: 0;\n  margin-top: 0px;\n}\n\n.bookings_pickers .input.bookings_datepicker {\n  min-width: 120px;\n  max-width: 138px;\n}\n\n.bookings_pickers .input .ui.basic.floating.button {\n  padding: 10px !important;\n  color: rgba(152, 152, 152, 0.6) !important;\n  font-weight: 300 !important;\n  line-height: 11px;\n}\n\n.bookings_pickers .input .icon {\n  opacity: 1;\n  z-index: 1;\n}\n\n.bookings_pickers .input .icon .bookings_input__placeholder-icon {\n  width: 24px;\n  margin-top: 6px;\n}\n\n.bookings_pickers .input .icon .bookings_input__placeholder-icon.cal {\n  width: 16px;\n  margin-top: 10px;\n}\n\n.bookings_pickers .input .search.dropdown {\n  width: 218px;\n  border-right: 0;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n\n.bookings_pickers .input .search.dropdown .search {\n  margin-left: 42px !important;\n}\n\n.bookings_pickers .input .search.dropdown .default.text {\n  font-size: 12px;\n  margin-right: 0 !important;\n  padding: 8px 0 0 38px !important;\n}\n\n.confirm {\n  width: 70px;\n}\n\n.recConfirm {\n  line-height: 18px;\n  height: 18px;\n  width: 70px;\n  background-color: #72D44F;\n  color: white;\n  margin: 0px;\n}\n\n.recHold {\n  line-height: 18px;\n  height: 18px;\n  width: 70px;\n  background-color: #D44F4F;\n  color: white;\n}\n\n.download-img_icon {\n  width: 25px;\n}\n\n.download-img {\n  padding: 3px;\n  cursor: pointer;\n  margin: 22px;\n}\n\n.recConfirm {\n  height: 18px;\n  width: 62px;\n  margin: 0;\n  background-color: #72D44F;\n  color: white;\n  font-size: 11px;\n  text-align: center;\n  line-height: 18px;\n  border-radius: 12px;\n}\n\n.recConfirm.hold {\n  background-color: #dec66b;\n}\n\n.recConfirm.void {\n  background-color: #797979;\n}\n\n.recConfirm.cancel {\n  background-color: #b13838;\n}\n\n.recConfirm.refund {\n  background-color: #3867B1;\n}\n\n.recConfirm.failed {\n  background-color: #b13838;\n}\n\n.ui.form .field > label {\n  font-family: \"Roboto\", sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 13px;\n  line-height: 13px;\n  color: #181B20;\n  margin: 0px 0px 8px;\n}\n\n.ui.form .three.wide.field,\n.ui.form .field > .checkbox-field {\n  margin-bottom: 16px;\n}\n\n.ui.segment {\n  padding: 0px;\n  padding: 24px 0px;\n}\n\n.main_head {\n  margin-bottom: 20px;\n  font-size: 15px;\n  font-weight: 600 !important;\n}\n\n.eight.field.bookings_btn-panel {\n  padding: 0px;\n  text-align: right;\n  margin-bottom: 16px;\n}\n\n.bookings_btn-panel {\n  margin-left: 0px;\n}\n\n.bookings_btn-panel button {\n  margin: 0px 6px;\n}\n\n@media (max-width: 1440px) {\n  .outer-segment .user {\n    padding: 0px 24px;\n  }\n}\n\n@media (max-width: 1280px) {\n  .outer-segment .user {\n    padding: 0px 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FjY291bnRzL3RyYW5zYWN0aW9ucy9FOlxcQmVsYWxcXHByb2plY3RzXFxhZ2dyZWdhdG9yLWZyb250ZW5kL3NyY1xcYXBwXFxsYXlvdXRcXGFjY291bnRzXFx0cmFuc2FjdGlvbnNcXHRyYW5zYWN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2FjY291bnRzL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFBO0FDQUo7O0FER0E7RUFDRSxpQkFBQTtBQ0FGOztBREdBO0VBQ0ksU0FBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHQTtFQUNJLGtDQUFBO0VBQ0Esd0NBQUE7QUNBSjs7QURHQTtFQUNJLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQ0FKOztBREdBO0VBQ0ksY0FBQTtFQUNBLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksNENBQUE7QUNBSjs7QURHQTs7RUFFSSxzQkFBQTtFQUNBLGtCQUFBO0VBR0EsWUFBQTtBQ0ZKOztBRFVBO0VBQ0ksc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FDUEo7O0FEVUE7RUFDSSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNQSjs7QURVQTtFQUNJLGdEQUFBO0FDUEo7O0FEVUE7RUFDSSxlQUFBO0FDUEo7O0FETUE7RUFDSSxlQUFBO0FDUEo7O0FETUE7RUFDSSxlQUFBO0FDUEo7O0FETUE7RUFDSSxlQUFBO0FDUEo7O0FEVUE7RUFDSSxlQUFBO0FDUEo7O0FEVUE7RUFDSSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlGQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDUEo7O0FEVUE7RUFDSSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDUEo7O0FEVUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ1BKOztBRFVBO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0NBQUE7QUNQSjs7QURVQTtFQUNJLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUNQSjs7QURVQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ1BKOztBRFVBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ1BKOztBRFVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ1BKOztBRFFJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtBQ05SOztBRFdJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQ1JSOztBRFVJO0VBQ0ksd0JBQUE7RUFDQSwwQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUNSUjs7QURVSTtFQUNJLFVBQUE7RUFDQSxVQUFBO0FDUlI7O0FEU1E7RUFDSSxXQUFBO0VBQ0EsZUFBQTtBQ1BaOztBRFFZO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FDTmhCOztBRFVJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0FDUlI7O0FEU1E7RUFDSSw0QkFBQTtBQ1BaOztBRFNRO0VBQ0ksZUFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7QUNQWjs7QURZQTtFQUNJLFdBQUE7QUNUSjs7QURZQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFFQSxXQUFBO0FDVko7O0FEYUE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDVko7O0FEY0E7RUFDSSxXQUFBO0FDWEo7O0FEY0E7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNYSjs7QURjQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNYSjs7QURZSTtFQUNJLHlCQUFBO0FDVlI7O0FEWUk7RUFDSSx5QkFBQTtBQ1ZSOztBRFlJO0VBQ0kseUJBQUE7QUNWUjs7QURZSTtFQUNJLHlCQUFBO0FDVlI7O0FEWUk7RUFDSSx5QkFBQTtBQ1ZSOztBRGNBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDWEo7O0FEY0E7O0VBRUksbUJBQUE7QUNYSjs7QURjQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtBQ1hKOztBRGNBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7QUNYSjs7QURjQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDWEo7O0FEY0E7RUFDSSxnQkFBQTtBQ1hKOztBRFlJO0VBQ0ksZUFBQTtBQ1ZSOztBRGNBO0VBRVE7SUFDSSxpQkFBQTtFQ1pWO0FBQ0Y7O0FEZ0JBO0VBRVE7SUFDSSxpQkFBQTtFQ2ZWO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvYWNjb3VudHMvdHJhbnNhY3Rpb25zL3RyYW5zYWN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlci1zZWdtZW50IHtcclxuICAgIC8vIG1hcmdpbjogMHB4IDIwcHggMHB4IDE1cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuLnVzZXIge1xyXG4gIHBhZGRpbmc6IDBweCAyNHB4O1xyXG59XHJcblxyXG4udXNlcl90aXRsZSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgIGNvbG9yOiAjMTgxQjIwO1xyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLnRhYnVsYXIubWVudSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcblxyXG4udWkuaGVhZGVyIHtcclxuICAgIGNvbG9yOiAjNEY0RjRGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4udWkudG9wLmF0dGFjaGVkLm1lbnU+Lml0ZW0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI4NTcxNDI5cmVtIDAgMCAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVpLmJvdHRvbS5hdHRhY2hlZC5hY3RpdmUudGFiLnNlZ21lbnQge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxN3B4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE3cHg7XHJcbn1cclxuXHJcbi5jcmVhdGVfdGFiX3RpdGxlLmNvcnBvcmF0ZV9zdGFmZiB7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59XHJcblxyXG4udGFiLnNlZ21lbnQge1xyXG4gICAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbn1cclxuXHJcbi5vdXRlci1mb3JtLFxyXG4ub3V0ZXJfY29ycEZvcm0ge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICM4MDgwODA7XHJcbiAgICAvLyBtYXJnaW46IDQ1cHggMzJweCAxMTFweCAyNXB4O1xyXG4gICAgbWFyZ2luOiAyNHB4O1xyXG59XHJcblxyXG4vLyAudWkuZm9ybS5iMmJfYmFzaWNfZm9ybSxcclxuLy8gLnVpLmZvcm0uY29ycF9mb3JtIHtcclxuLy8gICAgIG1hcmdpbjogMTdweCAyM3B4IDI1cHggMjJweDtcclxuLy8gfVxyXG5cclxuaHIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjRTBFMEUwO1xyXG59XHJcblxyXG4uYWRkX2J0biB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTVweDtcclxufVxyXG5cclxuaW5wdXQge1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4uZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLmRyb3Bkb3duIC50ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNyZWF0ZV9idG4ge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODY3YjE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkZGO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMzRweCAwIHJnYmEoMCwgMCwgMCwgMC41KSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgcGFkZGluZy1yaWdodDogMzVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgYm90dG9tOiAxMDRweDtcclxufVxyXG5cclxuLmNyZWF0ZV90ZXh0IHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uY29ycG9yYXRlX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgYm90dG9tOiAyOHB4O1xyXG4gICAgbGVmdDogOXB4O1xyXG59XHJcblxyXG5kaXYudXBsb2FkIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICB3aWR0aDogMTIzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjODA4MDgwO1xyXG4gICAgbWFyZ2luLXRvcDogLTI1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuMjVweCAwLjFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcclxufVxyXG5cclxuZGl2LnVwbG9hZCBpbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEyM3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vX2Nob29zZW4ge1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDQ2cHg7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogMTMycHg7XHJcbiAgICBib3R0b206IDIwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTBweDtcclxufVxyXG5cclxuLmZpbGVfY2hvb3NlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDMxcHg7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogIzRGNEY0RjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5ib29raW5nc19idG4tcGFuZWwge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xyXG4gICAgJi5wbnItYnV0dG9uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQge1xyXG4gICAgJi5ib29raW5nc19kYXRlcGlja2VyIHtcclxuICAgICAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTM4cHhcclxuICAgIH1cclxuICAgIC51aS5iYXNpYy5mbG9hdGluZy5idXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogcmdiYSgxNTIsIDE1MiwgMTUyLCAwLjYpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4gICAgfVxyXG4gICAgLmljb24ge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xyXG4gICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgICAgICAmLmNhbCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTZweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VhcmNoLmRyb3Bkb3duIHtcclxuICAgICAgICB3aWR0aDogMjE4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgLnNlYXJjaCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZWZhdWx0LnRleHQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMCAwIDM4cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb25maXJtIHtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG59XHJcblxyXG4ucmVjQ29uZmlybSB7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGhlaWdodDogMThweDtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcyRDQ0RjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIC8vIHBhZGRpbmctdG9wOiAuNXZoO1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbi5yZWNIb2xkIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDQ0RjRGO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLy9wYWRkaW5nLXRvcDogLjV2aDtcclxufVxyXG5cclxuLmRvd25sb2FkLWltZ19pY29uIHtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG59XHJcblxyXG4uZG93bmxvYWQtaW1nIHtcclxuICAgIHBhZGRpbmc6IDNweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogMjJweDtcclxufVxyXG5cclxuLnJlY0NvbmZpcm0ge1xyXG4gICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgd2lkdGg6IDYycHg7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzJENDRGO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgJi5ob2xkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVjNjZiO1xyXG4gICAgfVxyXG4gICAgJi52b2lkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk3OTc5O1xyXG4gICAgfVxyXG4gICAgJi5jYW5jZWwge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiMTM4Mzg7XHJcbiAgICB9XHJcbiAgICAmLnJlZnVuZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NjdCMTtcclxuICAgIH1cclxuICAgICYuZmFpbGVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjEzODM4O1xyXG4gICAgfVxyXG59XHJcblxyXG4udWkuZm9ybSAuZmllbGQ+bGFiZWwge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xyXG4gICAgY29sb3I6ICMxODFCMjA7XHJcbiAgICBtYXJnaW46IDBweCAwcHggOHB4O1xyXG59XHJcblxyXG4udWkuZm9ybSAudGhyZWUud2lkZS5maWVsZCxcclxuLnVpLmZvcm0gLmZpZWxkPi5jaGVja2JveC1maWVsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG59XHJcblxyXG4udWkuc2VnbWVudCB7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDBweDtcclxufVxyXG5cclxuLm1haW5faGVhZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZWlnaHQuZmllbGQuYm9va2luZ3NfYnRuLXBhbmVsIHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTZweDtcclxufVxyXG5cclxuLmJvb2tpbmdzX2J0bi1wYW5lbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW46IDBweCA2cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIC5vdXRlci1zZWdtZW50IHtcclxuICAgICAgICAudXNlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAyNHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyODBweCkge1xyXG4gICAgLm91dGVyLXNlZ21lbnQge1xyXG4gICAgICAgIC51c2VyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLm91dGVyLXNlZ21lbnQge1xuICBtYXJnaW46IDBweDtcbn1cblxuLnVzZXIge1xuICBwYWRkaW5nOiAwcHggMjRweDtcbn1cblxuLnVzZXJfdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBjb2xvcjogIzE4MUIyMDtcbn1cblxuLnVpLnRvcC5hdHRhY2hlZC50YWJ1bGFyLm1lbnUge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuXG4udWkuaGVhZGVyIHtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xufVxuXG4udWkudG9wLmF0dGFjaGVkLm1lbnUgPiAuaXRlbSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjg1NzE0MjlyZW0gMCAwIDA7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi51aS5ib3R0b20uYXR0YWNoZWQuYWN0aXZlLnRhYi5zZWdtZW50IHtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTdweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE3cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxN3B4O1xufVxuXG4uY3JlYXRlX3RhYl90aXRsZS5jb3Jwb3JhdGVfc3RhZmYge1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRhYi5zZWdtZW50IHtcbiAgYm94LXNoYWRvdzogM3B4IDNweCA0cHggMCByZ2JhKDAsIDAsIDAsIDAuNCk7XG59XG5cbi5vdXRlci1mb3JtLFxuLm91dGVyX2NvcnBGb3JtIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDI0cHg7XG59XG5cbmhyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIGJvcmRlcjogMC41cHggc29saWQgI0UwRTBFMDtcbn1cblxuLmFkZF9idG4ge1xuICBjb2xvcjogI0ZGRjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTVweDtcbn1cblxuaW5wdXQge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbi5maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5kcm9wZG93biAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmNyZWF0ZV9idG4ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODY3YjE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNGRkY7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDM0cHggMCByZ2JhKDAsIDAsIDAsIDAuNSksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogMzBweDtcbiAgYm90dG9tOiAxMDRweDtcbn1cblxuLmNyZWF0ZV90ZXh0IHtcbiAgY29sb3I6ICNGRkY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5jb3Jwb3JhdGVfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxOHB4O1xuICBib3R0b206IDI4cHg7XG4gIGxlZnQ6IDlweDtcbn1cblxuZGl2LnVwbG9hZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTVweDtcbiAgd2lkdGg6IDEyM3B4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gIGJvcmRlcjogMC41cHggc29saWQgIzgwODA4MDtcbiAgbWFyZ2luLXRvcDogLTI1cHg7XG4gIGJveC1zaGFkb3c6IDAgMC4yNXB4IDAuMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuXG5kaXYudXBsb2FkIGlucHV0IHtcbiAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEyM3B4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAwICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuLm5vX2Nob29zZW4ge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiA0NnB4O1xuICBjb2xvcjogIzRGNEY0RjtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDEzMnB4O1xuICBib3R0b206IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAxMHB4O1xufVxuXG4uZmlsZV9jaG9vc2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDMxcHg7XG4gIGJvdHRvbTogMTBweDtcbiAgY29sb3I6ICM0RjRGNEY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDlweDtcbiAgbGluZS1oZWlnaHQ6IDEwcHg7XG59XG5cbi5ib29raW5nc19idG4tcGFuZWwge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogMTJweDtcbn1cbi5ib29raW5nc19idG4tcGFuZWwucG5yLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0LmJvb2tpbmdzX2RhdGVwaWNrZXIge1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICBtYXgtd2lkdGg6IDEzOHB4O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC51aS5iYXNpYy5mbG9hdGluZy5idXR0b24ge1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiByZ2JhKDE1MiwgMTUyLCAxNTIsIDAuNikgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDMwMCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMTFweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuaWNvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIHotaW5kZXg6IDE7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLmljb24gLmJvb2tpbmdzX2lucHV0X19wbGFjZWhvbGRlci1pY29uIHtcbiAgd2lkdGg6IDI0cHg7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuaWNvbiAuYm9va2luZ3NfaW5wdXRfX3BsYWNlaG9sZGVyLWljb24uY2FsIHtcbiAgd2lkdGg6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uYm9va2luZ3NfcGlja2VycyAuaW5wdXQgLnNlYXJjaC5kcm9wZG93biB7XG4gIHdpZHRoOiAyMThweDtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcbn1cbi5ib29raW5nc19waWNrZXJzIC5pbnB1dCAuc2VhcmNoLmRyb3Bkb3duIC5zZWFyY2gge1xuICBtYXJnaW4tbGVmdDogNDJweCAhaW1wb3J0YW50O1xufVxuLmJvb2tpbmdzX3BpY2tlcnMgLmlucHV0IC5zZWFyY2guZHJvcGRvd24gLmRlZmF1bHQudGV4dCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDhweCAwIDAgMzhweCAhaW1wb3J0YW50O1xufVxuXG4uY29uZmlybSB7XG4gIHdpZHRoOiA3MHB4O1xufVxuXG4ucmVjQ29uZmlybSB7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiA3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzJENDRGO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMHB4O1xufVxuXG4ucmVjSG9sZCB7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiA3MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDQ0RjRGO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kb3dubG9hZC1pbWdfaWNvbiB7XG4gIHdpZHRoOiAyNXB4O1xufVxuXG4uZG93bmxvYWQtaW1nIHtcbiAgcGFkZGluZzogM3B4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogMjJweDtcbn1cblxuLnJlY0NvbmZpcm0ge1xuICBoZWlnaHQ6IDE4cHg7XG4gIHdpZHRoOiA2MnB4O1xuICBtYXJnaW46IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MkQ0NEY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuLnJlY0NvbmZpcm0uaG9sZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZWM2NmI7XG59XG4ucmVjQ29uZmlybS52b2lkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc5Nzk3OTtcbn1cbi5yZWNDb25maXJtLmNhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMTM4Mzg7XG59XG4ucmVjQ29uZmlybS5yZWZ1bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg2N0IxO1xufVxuLnJlY0NvbmZpcm0uZmFpbGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IxMzgzODtcbn1cblxuLnVpLmZvcm0gLmZpZWxkID4gbGFiZWwge1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICBjb2xvcjogIzE4MUIyMDtcbiAgbWFyZ2luOiAwcHggMHB4IDhweDtcbn1cblxuLnVpLmZvcm0gLnRocmVlLndpZGUuZmllbGQsXG4udWkuZm9ybSAuZmllbGQgPiAuY2hlY2tib3gtZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xufVxuXG4udWkuc2VnbWVudCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgcGFkZGluZzogMjRweCAwcHg7XG59XG5cbi5tYWluX2hlYWQge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbn1cblxuLmVpZ2h0LmZpZWxkLmJvb2tpbmdzX2J0bi1wYW5lbCB7XG4gIHBhZGRpbmc6IDBweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG5cbi5ib29raW5nc19idG4tcGFuZWwge1xuICBtYXJnaW4tbGVmdDogMHB4O1xufVxuLmJvb2tpbmdzX2J0bi1wYW5lbCBidXR0b24ge1xuICBtYXJnaW46IDBweCA2cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiAxNDQwcHgpIHtcbiAgLm91dGVyLXNlZ21lbnQgLnVzZXIge1xuICAgIHBhZGRpbmc6IDBweCAyNHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTI4MHB4KSB7XG4gIC5vdXRlci1zZWdtZW50IC51c2VyIHtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/accounts/transactions/transactions.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/layout/accounts/transactions/transactions.component.ts ***!
    \************************************************************************/

  /*! exports provided: TransactionsComponent */

  /***/
  function srcAppLayoutAccountsTransactionsTransactionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionsComponent", function () {
      return TransactionsComponent;
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


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var src_app_shared_services_accounts_transactions_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/accounts/transactions.service */
    "./src/app/shared/services/accounts/transactions.service.ts");
    /* harmony import */


    var src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/utils/common */
    "./src/app/shared/utils/common.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../_modal */
    "./src/app/layout/_modal/index.ts");
    /* harmony import */


    var src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/services/common.service */
    "./src/app/shared/services/common.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_utils_CustomAsyncValidators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/utils/CustomAsyncValidators */
    "./src/app/shared/utils/CustomAsyncValidators.ts");
    /* harmony import */


    var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/services/excel.service */
    "./src/app/shared/services/excel.service.ts");

    var TransactionsComponent =
    /*#__PURE__*/
    function () {
      function TransactionsComponent(transactionsService, router, toastr, modalService, commonService, fb, excelService) {
        _classCallCheck(this, TransactionsComponent);

        this.transactionsService = transactionsService;
        this.router = router;
        this.toastr = toastr;
        this.modalService = modalService;
        this.commonService = commonService;
        this.fb = fb;
        this.excelService = excelService;
        this.paymentType = src_app_shared_utils_common__WEBPACK_IMPORTED_MODULE_4__["paymentType"];
        this.limit = 10;
        this.page = 0;
        this.pageTopup = 0;
        this.pageFloat = 0;
        this.transactions = [];
        this.totalTransaction = 0;
        this.totalTopup = 0;
        this.totalFloating = 0;
        this.totalBookings = 0;
        this.exportTransactionData = [];
        this.staffList = [];
        this.agentDetails = {};
        this.offsetTransaction = 0;
        this.offsetTopup = 0;
        this.offsetFloating = 0;
        this.filterParams = {
          page: this.page
        };
        this.filterTopupParams = {
          page: this.pageTopup
        };
        this.filterFloatingParams = {
          page: this.pageFloat
        };
        this.toptupList = [];
        this.floatingDepositList = [];
        this.showDetailModal = false;
        this.currencies = [];
        this.submitted = false;
        this.submittedCorp = false;
        this.submittedAgent = false;
        this.staffProfileList = [];
        this.childCoporates = [];
        this.showAgentModal = false;
        this.showCorporateModal = false;
        this.childAgents = [];
        this.organisationAccount = [];
        this.showFloatingDeposit = false;
      }

      _createClass(TransactionsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.filterTransactionForm = this.fb.group({
            trip_id: [''],
            payment_type: ['all'],
            organisation_id: ['all'],
            start_date: [''],
            end_date: ['']
          });
          this.updateTopupForm = this.fb.group({
            bank_charge_currency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
            bank_charge: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
            topup_status: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
            organisation_id: [''],
            topup_id: [''],
            payment_amount: ['']
          });
          this.corporateTransactionForm = this.fb.group({
            organisation_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
            staff_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
            payment_type: ['deposit', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
            transaction_type: ['credit', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
            available_deposit: [''],
            transaction_comments: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
            currency_id: ['']
          });
          this.agentTransactionForm = this.fb.group({
            selectType: ['1'],
            organisation_id: [''],
            trip_id: [''],
            payment_type: ['deposit', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
            transaction_type: ['credit', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
            available_deposit: [''],
            transaction_comments: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["Validators"].required]],
            currency_id: ['']
          }, {
            validator: Object(src_app_shared_utils_CustomAsyncValidators__WEBPACK_IMPORTED_MODULE_10__["isRequireOrgOrTripId"])('selectType', 'organisation_id', 'trip_id')
          });
          this.getList(this.filterParams);
          this.getTopupList(this.filterTopupParams);
          this.getFloatingDepositList(this.filterFloatingParams);
          this.agentAndCorporateList();
          this.getOrganisationAccountData();
        }
      }, {
        key: "agentAndCorporateList",
        value: function agentAndCorporateList() {
          var _this = this;

          this.commonService.getSelfAgentsList().subscribe(function (result) {
            if (result.type != 'error') {
              _this.agentAndCorporates = result.listData.filter(function (data) {
                return data.name !== null;
              });
              _this.agentAndCorporates = _this.agentAndCorporates.filter(function (data) {
                return data.name !== "";
              });
            } else {
              _this.toastr.error("".concat(result.msg), "".concat(result.msg), {
                timeOut: 10000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "getOrganisationAccountData",
        value: function getOrganisationAccountData() {
          var _this2 = this;

          this.transactionsService.getOrganisationAccount().subscribe(function (result) {
            if (result.type != 'error') {
              if (result.data != null) _this2.organisationAccount = result.data;
              _this2.available_dep = _this2.organisationAccount.organisation_account.available_deposit;
              _this2.depost = parseFloat(_this2.organisationAccount.organisation_account.available_deposit).toFixed(2);
              _this2.currencyCode = _this2.organisationAccount.currency.code;

              if (_this2.depost === undefined) {
                _this2.depost = '';
              }

              if (_this2.currencyCode === undefined) {
                _this2.currencyCode = '';
              }
            } else {
              _this2.toastr.error("".concat(result.msg), "".concat(result.msg), {
                timeOut: 10000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "filterData",
        value: function filterData() {
          var form = this.filterTransactionForm.value;
          form.page = 0;
          this.getList(form);
        }
      }, {
        key: "getList",
        value: function getList(filterParams) {
          var _this3 = this;

          this.transactionsService.getList(filterParams).subscribe(function (result) {
            if (result.status) {
              if (result.result.data.length != 0) {
                _this3.transactions = result.result.data;
                _this3.totalTransaction = result.result.total;
                _this3.offsetTransaction = result.result.page;
              } else {
                _this3.toastr.info("sorry! Data not available to display", "", {
                  timeOut: 1000,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });
              }
            } else {
              _this3.toastr.error("".concat(result.message), "".concat(result.message), {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        } // get topup list

      }, {
        key: "getTopupList",
        value: function getTopupList(filterData) {
          var _this4 = this;

          this.transactionsService.getTopUplist(filterData).subscribe(function (result) {
            if (result.status) {
              _this4.toptupList = result.result.data;
              _this4.totalTopup = result.result.total;
              _this4.offsetTopup = result.result.page;
            } else {
              _this4.toastr.error("".concat(result.message), "".concat(result.message), {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "getCurrencyList",
        value: function getCurrencyList() {
          var _this5 = this;

          this.commonService.getCurrencyList().subscribe(function (result) {
            if (result.type != 'error') {
              if (result.currencies.length != 0) {
                _this5.currencies = result.currencies;
              } else {
                _this5.toastr.info("There is no data available to display", "", {
                  timeOut: 1000,
                  progressBar: false,
                  positionClass: 'toast-bottom-right'
                });
              }
            } else {
              _this5.toastr.error("".concat(result.msg), "".concat(result.msg), {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "editTopup",
        value: function editTopup(valObj, modalId, checkType) {
          var _this6 = this;

          this.transactionsService.getTopup(valObj.topup_id).subscribe(function (result) {
            if (result.type != 'error') {
              _this6.getInfo = result.data;
              _this6.showDetailModal = true;

              if (checkType == 1) {
                _this6.getInfo.isFloatingDeposit = 0;

                _this6.updateTopupForm.patchValue({
                  topup_id: _this6.getInfo.topup_id,
                  organisation_id: _this6.getInfo.organization_id,
                  payment_amount: _this6.getInfo.payment_amount
                });

                _this6.getCurrencyList();
              } else {
                _this6.getInfo.isFloatingDeposit = 1;
              }

              _this6.modalService.open(modalId);
            } else {
              _this6.toastr.error("".concat(result.msg), "".concat(result.msg), {
                timeOut: 10000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "updateTopupRequest",
        value: function updateTopupRequest(modalId) {
          var _this7 = this;

          this.submitted = true;

          if (this.updateTopupForm.invalid) {
            return;
          }

          this.transactionsService.updateTopup(this.updateTopupForm.value).subscribe(function (result) {
            if (result.type != 'error') {
              _this7.getInfo = result.data;
              _this7.showDetailModal = false;

              _this7.modalService.close(modalId); // hit search api so that edit button will disable


              _this7.getList(_this7.filterParams);
            } else {
              _this7.toastr.error("".concat(result.msg), "".concat(result.msg), {
                timeOut: 10000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        } // Create payment

      }, {
        key: "openModal",
        value: function openModal(modalId) {
          if (modalId == 'agent-transaction') {
            this.agentTransactionForm.patchValue({
              selectType: "1"
            });
            this.showCorporateModal = false;
            this.showAgentModal = true;
            this.getChildAgent();
            this.modalService.open(modalId);
          } else {
            this.showAgentModal = false;
            this.showCorporateModal = true;
            this.getChildCoporates();
            this.modalService.open(modalId);
          }
        }
      }, {
        key: "getChildCoporates",
        value: function getChildCoporates() {
          var _this8 = this;

          this.commonService.getChildCoporatesList().subscribe(function (result) {
            _this8.childCoporates = result.listData.filter(function (data) {
              return data.name !== null;
            });
            _this8.childCoporates = _this8.childCoporates.filter(function (data) {
              return data.name !== "";
            });
          });
        }
      }, {
        key: "getChildAgent",
        value: function getChildAgent() {
          var _this9 = this;

          this.commonService.getChildAgentList().subscribe(function (result) {
            _this9.childAgents = result.listData.filter(function (data) {
              return data.name !== null;
            });
            _this9.childAgents = _this9.childAgents.filter(function (data) {
              return data.name !== "";
            });
          });
        }
      }, {
        key: "getTransactionDetails",
        value: function getTransactionDetails(event) {
          var _this10 = this;

          if (event.target.value) {
            var orgId = event.target.value;
            this.commonService.getTransactionDetailByAgent(orgId).subscribe(function (result) {
              if (result.type == 'data') {
                _this10.agentDetails.currency = result.listData.currency;

                if (_this10.showAgentModal) {
                  _this10.agentTransactionForm.patchValue({
                    currency_id: result.listData.currency_id,
                    available_deposit: result.listData.currency + ' ' + result.listData.available_deposit
                  });
                } else {
                  _this10.getStaffListByCorp(orgId);

                  _this10.corporateTransactionForm.patchValue({
                    currency_id: result.listData.currency_id
                  });
                }
              }
            });
          }
        }
      }, {
        key: "getStaffListByCorp",
        value: function getStaffListByCorp(orgId) {
          var _this11 = this;

          if (orgId) {
            this.commonService.getStaffProfileList(orgId).subscribe(function (result) {
              if (result.type == 'data') {
                _this11.staffList = result.listData; //its in corporate section
              } else {
                _this11.staffList = [];
              }
            });
          } else {
            this.staffList = [];
          }
        }
      }, {
        key: "submitAgentTransaction",
        value: function submitAgentTransaction(modalId) {
          var _this12 = this;

          this.submittedAgent = true;

          if (this.agentTransactionForm.invalid) {
            return;
          }

          this.transactionsService.addAgentTransaction(this.agentTransactionForm.value).subscribe(function (result) {
            if (result.type == 'data') {
              _this12.getInfo = result.data;
              _this12.showAgentModal = false;

              _this12.modalService.close(modalId);

              _this12.submittedAgent = false;

              _this12.agentTransactionForm.reset();

              _this12.toastr.info("".concat(result.msg), "".concat(result.msg), {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });

              _this12.getList(_this12.filterParams);
            } else {
              _this12.toastr.error("".concat(result.msg), "".concat(result.msg), {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "updateTopupsubmitCorporateTransactionRequest",
        value: function updateTopupsubmitCorporateTransactionRequest(modalId) {
          var _this13 = this;

          this.submittedCorp = true;

          if (this.corporateTransactionForm.invalid) {
            return;
          }

          this.transactionsService.makeCorpTransaction(this.corporateTransactionForm.value).subscribe(function (result) {
            if (result.type != 'error') {
              _this13.showDetailModal = false;
              _this13.submittedCorp = false;

              _this13.modalService.close(modalId);
            } else {
              _this13.toastr.error("".concat(result.msg), "".concat(result.msg), {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "pageCallback",
        value: function pageCallback(event) {
          var offset = event.offset;
          var form = this.filterTransactionForm.value;
          this.filterParams.page = offset;
          this.getList(this.filterParams);
        }
      }, {
        key: "pageTopCallback",
        value: function pageTopCallback(event) {
          var offset = event.offset;
          this.filterTopupParams.page = offset;
          this.getTopupList(this.filterTopupParams);
        }
      }, {
        key: "pageFloatingCallback",
        value: function pageFloatingCallback(event) {
          var offset = event.offset;
          this.filterFloatingParams.page = offset;
          this.getFloatingDepositList(this.filterFloatingParams);
        }
      }, {
        key: "getFloatingDepositList",
        value: function getFloatingDepositList(filterData) {
          var _this14 = this;

          this.transactionsService.getFloatingDepositList(filterData).subscribe(function (result) {
            if (result.type != 'error') {
              _this14.floatingDepositList = result.result.data;
              _this14.totalFloating = result.result.total;
              _this14.offsetFloating = result.result.page;
            } else {
              _this14.toastr.error("".concat(result.msg), "".concat(result.msg), {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var scope = this;
          $(document).ready(function () {
            $('.menu .item').tab();
            $('.ui.dropdown').dropdown();
            $(function () {
              $('input[name="start_date"]').daterangepicker({
                singleDatePicker: true,
                showDropdowns: true,
                minYear: 1901,
                startDate: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(90, 'day'),
                autoUpdateInput: false,
                maxYear: parseInt(moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY'), 10)
              }, function (start, end, label) {
                var years = moment__WEBPACK_IMPORTED_MODULE_2__().diff(start, 'years');
                scope.filterTransactionForm.patchValue({
                  'start_date': moment__WEBPACK_IMPORTED_MODULE_2__(start).format('DD/MM/YYYY')
                });
              });
              $('input[name="end_date"]').daterangepicker({
                singleDatePicker: true,
                showDropdowns: true,
                minYear: 1901,
                startDate: moment__WEBPACK_IMPORTED_MODULE_2__().subtract(90, 'day'),
                autoUpdateInput: false,
                maxYear: parseInt(moment__WEBPACK_IMPORTED_MODULE_2__().format('YYYY'), 10)
              }, function (start, end, label) {
                var years = moment__WEBPACK_IMPORTED_MODULE_2__().diff(start, 'years');
                scope.filterTransactionForm.patchValue({
                  'end_date': moment__WEBPACK_IMPORTED_MODULE_2__(start).format('DD/MM/YYYY')
                });
              });
            });
          });
        }
      }, {
        key: "closeModal",
        value: function closeModal(id) {
          this.modalService.close(id);
        }
      }, {
        key: "exportData",
        value: function exportData() {
          var _this15 = this;

          this.transactionsService.exportTransaction(this.filterTransactionForm.value).subscribe(function (result) {
            if (result.type != 'error') {
              _this15.exportTransactionData = result.data;

              _this15.excelService.exportAsExcelFile(_this15.exportTransactionData, 'transactions');
            } else {
              _this15.toastr.error("".concat(result.msg), "".concat(result.msg), {
                timeOut: 1000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
          });
        }
      }, {
        key: "filterFormReset",
        value: function filterFormReset() {
          this.filterTransactionForm.patchValue({
            trip_id: '',
            start_date: '',
            end_date: '',
            payment_type: 'all',
            organisation_id: 'all'
          });
          $('.ui.dropdown').dropdown();
        }
      }, {
        key: "submitCorporateTransaction",
        value: function submitCorporateTransaction(str) {}
      }, {
        key: "f",
        get: function get() {
          return this.updateTopupForm.controls;
        }
      }, {
        key: "fc",
        get: function get() {
          return this.corporateTransactionForm.controls;
        }
      }, {
        key: "fa",
        get: function get() {
          return this.agentTransactionForm.controls;
        }
      }]);

      return TransactionsComponent;
    }();

    TransactionsComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_accounts_transactions_service__WEBPACK_IMPORTED_MODULE_3__["TransactionsService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
      }, {
        type: _modal__WEBPACK_IMPORTED_MODULE_7__["ModalService"]
      }, {
        type: src_app_shared_services_common_service__WEBPACK_IMPORTED_MODULE_8__["CommonService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormBuilder"]
      }, {
        type: src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_11__["ExcelService"]
      }];
    };

    TransactionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-transactions',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./transactions.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/accounts/transactions/transactions.component.html")).default,
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./transactions.component.scss */
      "./src/app/layout/accounts/transactions/transactions.component.scss")).default]
    })], TransactionsComponent);
    /***/
  },

  /***/
  "./src/app/layout/accounts/transactions/transactions.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/layout/accounts/transactions/transactions.module.ts ***!
    \*********************************************************************/

  /*! exports provided: TransactionsModule */

  /***/
  function srcAppLayoutAccountsTransactionsTransactionsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionsModule", function () {
      return TransactionsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _transactions_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./transactions.component */
    "./src/app/layout/accounts/transactions/transactions.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _transactions_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./transactions-routing.module */
    "./src/app/layout/accounts/transactions/transactions-routing.module.ts");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var ngx_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-moment */
    "./node_modules/ngx-moment/__ivy_ngcc__/fesm2015/ngx-moment.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../_modal */
    "./src/app/layout/_modal/index.ts");
    /* harmony import */


    var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/services/excel.service */
    "./src/app/shared/services/excel.service.ts");
    /* harmony import */


    var src_app_access_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/access.module */
    "./src/app/access.module.ts");

    var TransactionsModule = function TransactionsModule() {
      _classCallCheck(this, TransactionsModule);
    };

    TransactionsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_transactions_component__WEBPACK_IMPORTED_MODULE_1__["TransactionsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _transactions_routing_module__WEBPACK_IMPORTED_MODULE_4__["TransactionsRoutingModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_5__["NgxDatatableModule"], ngx_moment__WEBPACK_IMPORTED_MODULE_6__["MomentModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"], src_app_access_module__WEBPACK_IMPORTED_MODULE_10__["ApplicationAccess"]],
      providers: [src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_9__["ExcelService"]]
    })], TransactionsModule);
    /***/
  },

  /***/
  "./src/app/shared/utils/CustomAsyncValidators.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/utils/CustomAsyncValidators.ts ***!
    \*******************************************************/

  /*! exports provided: isRequireOrgOrTripId, checkCurrentPassword, matchPassword */

  /***/
  function srcAppSharedUtilsCustomAsyncValidatorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isRequireOrgOrTripId", function () {
      return isRequireOrgOrTripId;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "checkCurrentPassword", function () {
      return checkCurrentPassword;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matchPassword", function () {
      return matchPassword;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var rules = {};

    function isRequireOrgOrTripId(selectType, organisation_id, trip_id) {
      return function (formGroup) {
        var org = formGroup.controls[organisation_id];
        var select = formGroup.controls[selectType];
        var trip = formGroup.controls[trip_id];

        if (org.errors && !org.errors.orgIdRequire) {
          // return if another validator has already found an error on the matchingControl
          return;
        }

        if (select.value == 1) {
          if (!org.value) {
            trip.setErrors(null);
            org.setErrors({
              orgIdRequire: true
            });
          }
        } else if (select.value == 2) {
          if (!trip.value) {
            org.setErrors(null);
            trip.setErrors({
              tripIdRequire: true
            });
          }
        } else {
          org.setErrors(null);
          trip.setErrors(null);
        }
      };
    }

    function checkCurrentPassword(oldpass, pass, con_pass) {
      return function (FormGroup) {
        var oldpassword = FormGroup.controls[oldpass];
        var password = FormGroup.controls[pass];
        var confirm_password = FormGroup.controls[con_pass];

        if (oldpassword.errors && !oldpassword.errors.oldPassWrong) {
          // return if another validator has already found an error on the matchingControl
          return;
        }

        if (oldpassword.value != '') {
          // check password from api
          if (password.value != '' || confirm_password.value != '') {
            oldpassword.setErrors({
              requireOldPass: true
            });
          } else {
            oldpassword.setErrors({
              oldPassWrong: true
            });
          }
        } else {
          oldpassword.setErrors(null);
        }
      };
    }

    function matchPassword(pass, con_pass) {
      return function (FormGroup) {
        var password = FormGroup.controls[pass];
        var confirm_password = FormGroup.controls[con_pass];

        if (confirm_password.errors && !confirm_password.errors.requireConfirm) {
          // return if another validator has already found an error on the matchingControl
          return;
        }

        if (password.value != '') {
          confirm_password.setErrors({
            requireConfirm: true
          });
        } else if (confirm_password.value != '' && password.value != confirm_password.value) {
          confirm_password.setErrors({
            passNotMatch: true
          });
        } else {
          confirm_password.setErrors(null);
        }
      };
    }
    /***/

  }
}]);
//# sourceMappingURL=transactions-transactions-module-es5.js.map