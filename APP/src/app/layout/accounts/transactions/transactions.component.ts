import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { TransactionsService } from 'src/app/shared/services/accounts/transactions.service';
import { Transaction } from "src/app/shared/models/transaction.interface";
import { Topup } from "src/app/shared/models/topup.interface";
import { paymentType } from "src/app/shared/utils/common";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ModalService } from '../../_modal';
import { CommonService } from 'src/app/shared/services/common.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { isRequireOrgOrTripId } from 'src/app/shared/utils/CustomAsyncValidators';
import { ExcelService } from 'src/app/shared/services/excel.service';

declare const $: any;

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {
  filterTransactionForm: FormGroup;
  updateTopupForm: FormGroup;
  paymentType = paymentType;
  corporateTransactionForm: FormGroup;
  agentTransactionForm: FormGroup;
  available_dep:number;
  currencyCode:any;
  depost:any;
  constructor(
    private transactionsService: TransactionsService,
    private router: Router,
    private toastr: ToastrService,
    private modalService: ModalService,
    private commonService: CommonService,
    private fb: FormBuilder,
    private excelService: ExcelService) { }

  limit: number = 10;
  page: number = 0;
  pageTopup: number = 0;
  pageFloat: number = 0;
  transactions: Array<Transaction[]> = [];
  totalTransaction: number = 0;
  totalTopup: number = 0;
  totalFloating: number = 0;
  totalBookings: number = 0;
  exportTransactionData: any = [];
  staffList: any = [];
  agentDetails: any = {};

  offsetTransaction: number = 0;
  offsetTopup: number = 0;
  offsetFloating: number = 0;
  filterParams: any = {
    page: this.page,
  }
  filterTopupParams: any = {
    page: this.pageTopup,
  }
  filterFloatingParams: any = {
    page: this.pageFloat,
  }

  agentAndCorporates: any;
  toptupList: Array<Topup[]> = [];
  floatingDepositList: Array<Topup[]> = [];
  showDetailModal: Boolean = false;
  getInfo: any;
  currencies: any = [];
  submitted: any = false;
  submittedCorp: any = false;
  submittedAgent: any = false;
  staffProfileList: any = [];
  childCoporates: any = [];
  showAgentModal: Boolean = false;
  showCorporateModal: Boolean = false;
  childAgents: any = [];
  organisationAccount: any = [];
  showFloatingDeposit: Boolean = false;

  ngOnInit() {
    this.filterTransactionForm = this.fb.group({
      trip_id: [''],
      payment_type: ['all'],
      organisation_id: ['all'],
      start_date: [''],
      end_date: ['']
    })

    this.updateTopupForm = this.fb.group({
      bank_charge_currency: ['', [Validators.required]],
      bank_charge: ['', [Validators.required]],
      topup_status: ['', [Validators.required]],
      organisation_id: [''],
      topup_id: [''],
      payment_amount: ['']
    })

    this.corporateTransactionForm = this.fb.group({
      organisation_id: ['', [Validators.required]],
      staff_id: ['', [Validators.required]],
      payment_type: ['deposit', [Validators.required]],
      transaction_type: ['credit', [Validators.required]],
      amount: ['', [Validators.required]],
      available_deposit: [''],
      transaction_comments: ['', [Validators.required]],
      currency_id: ['']
    })

    this.agentTransactionForm = this.fb.group({
      selectType: ['1'],
      organisation_id: [''],
      trip_id: [''],
      payment_type: ['deposit', [Validators.required]],
      transaction_type: ['credit', [Validators.required]],
      amount: ['', [Validators.required]],
      available_deposit: [''],
      transaction_comments: ['', [Validators.required]],
      currency_id: ['']
    }, {
      validator: isRequireOrgOrTripId('selectType', 'organisation_id', 'trip_id')
    })

    this.getList(this.filterParams);
    this.getTopupList(this.filterTopupParams);
    this.getFloatingDepositList(this.filterFloatingParams);
    this.agentAndCorporateList();
    this.getOrganisationAccountData();

  }

  get f() { return this.updateTopupForm.controls; }
  get fc() { return this.corporateTransactionForm.controls; }
  get fa() { return this.agentTransactionForm.controls; }

  agentAndCorporateList() {
    this.commonService.getSelfAgentsList().subscribe((result: any) => {
      if (result.type != 'error') {
        this.agentAndCorporates = result.listData.filter(data => data.name !== null);
        this.agentAndCorporates = this.agentAndCorporates.filter(data => data.name !== "");
      } else {
        this.toastr.error(`${result.msg}`, `${result.msg}`, {
          timeOut: 10000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      }
    });
  }

  getOrganisationAccountData() {
    this.transactionsService.getOrganisationAccount().subscribe((result: any) => {
      if (result.type != 'error') {
        if(result.data !=null)

        this.organisationAccount = result.data;
        this.available_dep=this.organisationAccount.organisation_account.available_deposit    
        this.depost = parseFloat(this.organisationAccount.organisation_account.available_deposit).toFixed(2);
        this.currencyCode=this.organisationAccount.currency.code;
        if(this.depost === undefined ) {
          this.depost = '';
        }
        if(this.currencyCode === undefined) {
          this.currencyCode = '';
        }
      } else {
        this.toastr.error(`${result.msg}`, `${result.msg}`, {
          timeOut: 10000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      }
    });
  }
  
  filterData() {
    let form = this.filterTransactionForm.value;
    form.page = 0;
    this.getList(form);
  }

  getList(filterParams: any) {
    this.transactionsService.getList(filterParams).subscribe((result: any) => {
      if (result.status) {
        if(result.result.data.length !=0){
          this.transactions = result.result.data;
      
          this.totalTransaction = result.result.total;
          this.offsetTransaction = result.result.page;
        }else{
          this.toastr.info(`sorry! Data not available to display`, ``, {
            timeOut: 1000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
        }
  
      } else {
        this.toastr.error(`${result.message}`, `${result.message}`, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      }
    })
  }
  // get topup list
  getTopupList(filterData: any) {
    this.transactionsService.getTopUplist(filterData).subscribe((result: any) => {
      if (result.status) {
        this.toptupList = result.result.data;
        this.totalTopup = result.result.total;
        this.offsetTopup = result.result.page;
      } else {
        this.toastr.error(`${result.message}`, `${result.message}`, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      }
    });
  }


  getCurrencyList() {
    this.commonService.getCurrencyList().subscribe((result: any) => {
      if (result.type != 'error') {
        if (result.currencies.length != 0) {
          this.currencies = result.currencies;
        }
        else {
          this.toastr.info(`There is no data available to display`, ``, {
            timeOut: 1000,
            progressBar: false,

            positionClass: 'toast-bottom-right'
          });
        }
      } else {
        this.toastr.error(`${result.msg}`, `${result.msg}`, {
          timeOut: 1000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
      }
    });
  }

  editTopup(valObj: any, modalId: any, checkType: any) {
    this.transactionsService.getTopup(valObj.topup_id).subscribe((result: any) => {
      if (result.type != 'error') {
        this.getInfo = result.data;
        this.showDetailModal = true;
        if (checkType == 1) {
          this.getInfo.isFloatingDeposit = 0;
          this.updateTopupForm.patchValue({ topup_id: this.getInfo.topup_id, organisation_id: this.getInfo.organization_id, payment_amount: this.getInfo.payment_amount })
          this.getCurrencyList();
        } else {
          this.getInfo.isFloatingDeposit = 1;
        }
        this.modalService.open(modalId);
      } else {
        this.toastr.error(`${result.msg}`, `${result.msg}`, {
          timeOut: 10000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
      }
    })
  }

  updateTopupRequest(modalId: any) {
    this.submitted = true;
    if (this.updateTopupForm.invalid) {
      return;
    }
    this.transactionsService.updateTopup(this.updateTopupForm.value).subscribe((result: any) => {

      if (result.type != 'error') {
        this.getInfo = result.data;
        this.showDetailModal = false;
        this.modalService.close(modalId);
        // hit search api so that edit button will disable
        this.getList(this.filterParams);
      } else {
        this.toastr.error(`${result.msg}`, `${result.msg}`, {
          timeOut: 10000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
      }
    })
  }

  // Create payment
  openModal(modalId: any) {
    if (modalId == 'agent-transaction') {
      this.agentTransactionForm.patchValue({
        selectType: "1"
      });
      this.showCorporateModal = false;
      this.showAgentModal = true;
      this.getChildAgent();
      this.modalService.open(modalId)

    } else {
      this.showAgentModal = false;
      this.showCorporateModal = true;
      this.getChildCoporates();

      this.modalService.open(modalId)
    }
  }

  getChildCoporates() {
    this.commonService.getChildCoporatesList().subscribe((result: any) => {
      this.childCoporates = result.listData.filter(data => data.name !== null);
      this.childCoporates = this.childCoporates.filter(data => data.name !== "");
    })
  }
  getChildAgent() {
    this.commonService.getChildAgentList().subscribe((result: any) => {
      this.childAgents = result.listData.filter(data => data.name !== null);
      this.childAgents = this.childAgents.filter(data => data.name !=="");
    })
  }

  getTransactionDetails(event: any) {
    if (event.target.value) {
      let orgId = event.target.value;
      this.commonService.getTransactionDetailByAgent(orgId).subscribe((result: any) => {
        if (result.type == 'data') {
          this.agentDetails.currency = result.listData.currency;
          if (this.showAgentModal) {
            this.agentTransactionForm.patchValue({
              currency_id: result.listData.currency_id,
              available_deposit: result.listData.currency + ' ' + result.listData.available_deposit
            })
          } else {
            this.getStaffListByCorp(orgId);
            this.corporateTransactionForm.patchValue({
              currency_id: result.listData.currency_id
            })
          }
        }
      })
    }
  }

  getStaffListByCorp(orgId: any) {
    if (orgId) {
      this.commonService.getStaffProfileList(orgId).subscribe((result: any) => {
        if (result.type == 'data') {
          this.staffList = result.listData; //its in corporate section
        } else {
          this.staffList = [];
        }
      });
    } else {
      this.staffList = [];
    }
  }

  submitAgentTransaction(modalId) {

    this.submittedAgent = true;
    if (this.agentTransactionForm.invalid) {
      return;
    }
    this.transactionsService.addAgentTransaction(this.agentTransactionForm.value).subscribe((result: any) => {

      if (result.type == 'data') {
        this.getInfo = result.data;
        this.showAgentModal = false;
        this.modalService.close(modalId);
        this.submittedAgent = false;
        this.agentTransactionForm.reset();
        this.toastr.info(`${result.msg}`, `${result.msg}`, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
        this.getList(this.filterParams);
      } else {
        this.toastr.error(`${result.msg}`, `${result.msg}`, {
          timeOut: 1000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
      }
    })
  }

  updateTopupsubmitCorporateTransactionRequest(modalId: any) {
    this.submittedCorp = true;
    if (this.corporateTransactionForm.invalid) {
      return;
    }
    this.transactionsService.makeCorpTransaction(this.corporateTransactionForm.value).subscribe((result: any) => {
   
      if (result.type != 'error') {
        this.showDetailModal = false;
        this.submittedCorp = false;
        this.modalService.close(modalId);
      } else {
        this.toastr.error(`${result.msg}`, `${result.msg}`, {
          timeOut: 1000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
      }
    })
  }

  pageCallback(event: any) {
    let offset = event.offset;
    let form = this.filterTransactionForm.value;
    this.filterParams.page = offset;
    this.getList(this.filterParams);
  }

  pageTopCallback(event: any) {
    let offset = event.offset;
    this.filterTopupParams.page = offset;
    this.getTopupList(this.filterTopupParams);
  }

  pageFloatingCallback(event: any) {
    let offset = event.offset;
    this.filterFloatingParams.page = offset;
    this.getFloatingDepositList(this.filterFloatingParams);
  }

  getFloatingDepositList(filterData: any) {
    this.transactionsService.getFloatingDepositList(filterData).subscribe((result: any) => {
      if (result.type != 'error') {
        this.floatingDepositList = result.result.data;
        this.totalFloating = result.result.total;
        this.offsetFloating = result.result.page;
      } else {
        this.toastr.error(`${result.msg}`, `${result.msg}`, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      }
    });
  }

  ngAfterViewInit() {
    var scope = this;
    $(document).ready(function () {
      $('.menu .item').tab();
      $('.ui.dropdown').dropdown();
      $(function () {
        $('input[name="start_date"]').daterangepicker({
          singleDatePicker: true,
          showDropdowns: true,
          minYear: 1901,
          startDate: moment().subtract(90, 'day'),
          autoUpdateInput: false,
          maxYear: parseInt(moment().format('YYYY'), 10)
        }, function (start, end, label) {
          var years = moment().diff(start, 'years');
          scope.filterTransactionForm.patchValue({ 'start_date': moment(start).format('DD/MM/YYYY') });
        });
        $('input[name="end_date"]').daterangepicker({
          singleDatePicker: true,
          showDropdowns: true,
          minYear: 1901,
          startDate: moment().subtract(90, 'day'),
          autoUpdateInput: false,
          maxYear: parseInt(moment().format('YYYY'), 10)
        }, function (start, end, label) {
          var years = moment().diff(start, 'years');
          scope.filterTransactionForm.patchValue({ 'end_date': moment(start).format('DD/MM/YYYY') });
        });
      });
    });
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  exportData() {
    this.transactionsService.exportTransaction(this.filterTransactionForm.value).subscribe((result: any) => {
      if (result.type != 'error') {
        this.exportTransactionData = result.data;
        this.excelService.exportAsExcelFile(this.exportTransactionData, 'transactions');
      } else {
        this.toastr.error(`${result.msg}`, `${result.msg}`, {
          timeOut: 1000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
      }
    });
  }

  filterFormReset() {
    this.filterTransactionForm.patchValue({
      trip_id: '',
      start_date: '',
      end_date: '',
      payment_type: 'all',
      organisation_id: 'all'
    })
    $('.ui.dropdown').dropdown();
  }

  submitCorporateTransaction(str) {

  }

}