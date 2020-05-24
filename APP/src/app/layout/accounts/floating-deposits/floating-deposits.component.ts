import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';
import { CommonService } from 'src/app/shared/services/common.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TransactionsService } from 'src/app/shared/services/accounts/transactions.service';
import { Topup } from "src/app/shared/models/topup.interface";

declare const $: any;

@Component({
  selector: 'app-floating-deposits',
  templateUrl: './floating-deposits.component.html',
  styleUrls: ['./floating-deposits.component.scss']
})
// "organization_id" => $user['organisation_id'],
// "user_id" 	  	  => $user_id,
// "created_date" => $currentdate,
// "supplier_details" => json_encode(array('supplier-key'=>$request['supplier-key'],'supplier-name'=>$request['supplier-name']))

export class FloatingDepositsComponent implements OnInit {
  addFloatingForm: FormGroup;
  topupSubtype = ['Bank Transfer','Cash Deposit','Cheque Deposit','Credit Card'];
  constructor(private commonService: CommonService, private router: Router,
    private toastr: ToastrService, private fb: FormBuilder, private transactionsService: TransactionsService, private activeRoute: ActivatedRoute) {

    let topup_id = this.activeRoute.snapshot.params.id;
    this.addFloatingForm = this.fb.group({
      supplier_data: ['', [Validators.required]],
      agency_iata_num: ['',[Validators.pattern('[0-9]*')]],
      agency_name: [''],
      agency_country: [''],
      agency_currency: [''],
      topup_type: ['Deposit'],
      topup_subtype: ['', [Validators.required]],
      topup_purpose: ['Regular Topup'],
      available_balance: [''],
      request_no: ['',[Validators.pattern('[0-9]*')]],
      request_initiator: [''],
      bank_name: [''],
      bank_account_no: [''],
      payment_date: ['', [Validators.required]],
      payment_currency: ['', [Validators.required]],
      payment_amount: ['', [Validators.required,Validators.pattern('[0-9]*')]],
      payment_type: ['Credit'],
      attachment: [''],
      topup_status: [''],
      bank_charge: [''],
      bank_charge_currency: ['']
    })
  }

  currencies: any = [];
  submitted: any = false;
  getInfo = [];
  organisationAccount: any = [];
  suppliers: any = [];
  public imagePath;
  imgURL: any;

  public message: string;

  ngOnInit() {
    this.getCurrencyList();
    this.getOrganisationAccountData();
    this.getFloatingSupplierList();
  }

  get f() { return this.addFloatingForm.controls; }

  getCurrencyList() {
    this.commonService.getCurrencyList().subscribe((result: any) => {
      this.currencies = result.currencies;
    });
  }
  getFloatingSupplierList() {
    this.commonService.getFloatingSupplierList().subscribe((result: any) => {
      if (result.type == 'data') {
        this.suppliers = result.listData;
        console.log("suppliers:::::::",this.suppliers)
        // this.suppliers.map((ele, key) => {
        //   // if (key == '66') {
        //   //   ele.supplier = 'TPConnects Flights';
        //   // } else if (key == '65') {
        //   //   ele.supplier = 'Toursworld Hotels';
        //   // } else {
        //   //   ele.supplier = 'TPConnects '+ele.supplier;
        //   // }
        // })
      } else {
        this.toastr.error(`${result.msg}`, `${result.msg}`, {
          timeOut: 10000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
        this.suppliers = [];
      }

    });
  }
  getOrganisationAccountData() {
    this.transactionsService.getOrganisationAccount().subscribe((result: any) => {
      if (result.type != 'error') {
        this.organisationAccount = result.data;
        console.log("78::::::::", this.organisationAccount)


        this.addFloatingForm.patchValue({
          agency_name: this.organisationAccount.name,
          available_balance: this.organisationAccount['organisation_account.available_deposit'],
          agency_country: this.organisationAccount['country.name'],
          agency_currency: this.organisationAccount['currency.code'],
          bank_name: this.organisationAccount['currency.code'],
          bank_account_no: this.organisationAccount['currency.code'],
        })
        console.log("78::::::::", this.addFloatingForm.value)
      } else {
        this.toastr.error(`${result.msg}`, `${result.msg}`, {
          timeOut: 10000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
      }
    });
  }

  submitAddFloating() {
    this.submitted = true;
    if (this.addFloatingForm.invalid) {
      return;
    }
    this.transactionsService.addFloatingRequest(this.addFloatingForm.value).subscribe((result: any) => {
      if (result.type != 'error') {
        this.toastr.success(`${result.msg}`, `${result.msg}`, {
          timeOut: 1000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });

        this.router.navigate(["accounts/transactions"]);
      } else {
        this.toastr.error(`${result.msg}`, `${result.msg}`, {
          timeOut: 10000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
      }
    })
  }

  preview(files) {
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
      this.addFloatingForm.patchValue({ attachment: this.imgURL })
    }

  }

  ngAfterViewInit() {
    var scope = this;
    $(document).ready(function () {
      $('.ui.dropdown').dropdown();
      $('input[name="payment_date"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        // startDate: moment().format('YYYY-MM-DD'),
        autoUpdateInput: false,
        maxYear: parseInt(moment().format('YYYY'), 10)
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.addFloatingForm.patchValue({ 'payment_date': moment(start).format('YYYY-MM-DD') });
      });

    })
  }
  get payment_amount() {
    return this.addFloatingForm.get('payment_amount');
  }
  get agency_iata_num() {
    return this.addFloatingForm.get('agency_iata_num');
  }
  get request_no() {
    return this.addFloatingForm.get('request_no');
  }
}
