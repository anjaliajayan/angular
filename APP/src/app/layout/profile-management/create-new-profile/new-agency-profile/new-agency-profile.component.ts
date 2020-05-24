import { ProfileManagementService } from './../../../../shared/services/profile-management/profile-management.service';
import { Component, OnInit, Input, Inject, ViewChild, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Form } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
//import * as moment from 'moment';
//import { SearchResultsComponent } from './search-results/search-results.component';
import * as _ from 'lodash';
import { filter } from 'minimatch';
import { ToastrService } from 'ngx-toastr';

declare const moment: any;
declare const $: any;


@Component({
  selector: 'app-new-agency-profile',
  templateUrl: './new-agency-profile.component.html',
  styleUrls: ['./new-agency-profile.component.scss', './../create-new-profile.component.scss']
})
export class NewAgencyProfileComponent implements OnInit {

  newAgencyProfileObj: any = {};
  agencyProfileId;
  newAgencyProfileId;

  @ViewChild('tab', { static: false }) tab: ElementRef;
  @ViewChild('tabContent', { static: false }) tabContent: ElementRef;

  constructor(
    private route: ActivatedRoute,
    public ProfileManagementService: ProfileManagementService,
    private fb: FormBuilder
  ) {

    let uniqueProfileID = Math.random().toString(36).substring(7);
    console.log(uniqueProfileID);
    this.newAgencyProfileId = uniqueProfileID + "Amedius";

    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.agencyProfileId = params.agency_profile_id;
      //alert(this.agencyProfileId);
      this.newAgencyProfileForm.patchValue({
        agency_profile_id: params.agency_profile_id,
        organisation_id: params.organisation_id,
        responsible_office: params.responsible_office,
        department_contact_name: params.department_contact_name,
        agent_contact_name: params.agent_contact_name,
        direct_debit_authorized: params.direct_debit_authorized,
        discounts: params.discounts,
      });
      let number = this.parsingArrayParams(params.number, this.number);
      let email = this.parsingArrayParams(params.email, this.email);
      let address = this.parsingArrayParams(params.address, this.address);
      let formsOfPayment = this.parsingArrayParams(params.forms_of_payment, this.forms_of_payment);
      let farePriceOverride = this.parsingArrayParams(params.farePriceOverride, this.fare_price_override);
      let endorsements = this.parsingArrayParams(params.endorsements, this.endorsements);
      let commissions = this.parsingArrayParams(params.commission, this.commissions);
      let accounting = this.parsingArrayParams(params.accounting, this.accounting);
      let remarks = this.parsingArrayParams(params.remarks, this.remarks);
      let profileNotes = this.parsingArrayParams(params.profile_notes, this.profile_notes);
      let priorityLines1 = this.parsingArrayParams(params.priority_lines1, this.priority_lines1);
      let priorityLines2 = this.parsingArrayParams(params.priority_lines2, this.priority_lines2);
      let followUp = this.parsingArrayParams(params.follow_up, this.follow_up);
    });
  }

  parsingArrayParams(value, parameter) {
    if (value && value.length > 0) {
      let array = JSON.parse(value);
      if (array && array.length > 0) {
        array.map((item, index) => {
          parameter.removeAt(0);
          console.log(item);
          parameter.push(this.fb.group(item));
          return parameter;
        });
      } else {
        console.log("There is something wrong with the passing of arrays")
      }
    }
  }

  setActiveTab(label) {
    let tab = this.tab.nativeElement.querySelectorAll(`.stepper-grid .stepper-grid_step`);
    let content = this.tabContent.nativeElement.querySelectorAll(`.stepper-grid-content`);
    tab.forEach(el => {
      if (el.classList.contains('_active')) {
        el.classList.remove('_active');
        el.classList.add('_activated');
      }
    });
    content.forEach(el => {
      if (el.classList.contains('_active')) {
        el.classList.remove('_active');
      }
    });
    this.tab.nativeElement.querySelector(`#${label}`).classList.add('_active');
    this.tabContent.nativeElement.querySelector(`#${label}-content`).classList.add('_active');
    window.document.querySelector('.scrollable-pusher').scrollTo({ top: 0, behavior: 'smooth' });
  }

  newAgencyProfileForm = this.fb.group({
    agency_profile_id: [''],
    organisation_id: [''],
    responsible_office: [''],
    department_contact_name: [''],
    agent_contact_name: [''],
    home: [''],
    Official: [''],
    addressList: [''],
    number: this.fb.array([this.fb.group(this.initNumber())]),
    email: this.fb.array([this.fb.group(this.initAddEmail())]),
    address: this.fb.array([this.fb.group(this.initAddress())]),
    bank_accounts: this.fb.array([this.fb.group(this.initBank_accounts())]),
    direct_debit_authorized: [''],
    forms_of_payment: this.fb.array([this.fb.group(this.initForms_of_payment())]),
    fare_price_override: this.fb.array([this.fb.group(this.initFare_price_override())]),
    endorsements: this.fb.array([this.fb.group(this.initEndorsements())]),
    discounts: [''],
    commissions: this.fb.array([this.fb.group(this.initComissions())]),
    accounting: this.fb.array([this.fb.group(this.initAccounting())]),
    remarks: this.fb.array([this.fb.group(this.initRemarks())]),
    profile_notes: this.fb.array([this.fb.group(this.initProfile_Notes())]),
    priority_lines1: this.fb.array([this.fb.group(this.initPriority_lines1())]),
    priority_lines2: this.fb.array([this.fb.group(this.initPriority_lines2())]),
    follow_up: this.fb.array([this.fb.group(this.initFollow_up())]),
  })

  initNumber() {
    return {
      preferedHome: [''],
      home: [''],
      number: [''],
      number_comment: ['']
    }
  }

  initAddEmail() {
    return {
      preferedOfficial: [''],
      Official: [''],
      emailAddress: [''],
      emailAddress_comment: ['']
    }
  }

  initAddress() {
    return {
      preferedAddress: [''],
      addressList: [''],
      address: [''],
      street: [''],
      city: [''],
      state: [''],
      postalCode: [''],
      countryList: [''],
      company: [''],
      address_comment: []
    }
  }

  initBank_accounts() {
    return {
      bank_code: [''],
      bank_name: [''],
      bank_number: [''],
      bank_city: [''],
      bank_valid_from: [''],
      bank_valid_to: ['']
    }
  }

  initForms_of_payment() {
    return {
      forms_of_payment: [''],
    }
  }

  initFare_price_override() {
    return {
      fare_price_override: ['']
    }
  }

  initEndorsements() {
    return {
      endorsements: ['']
    }
  }

  initComissions() {
    return {
      commisionText: [''],
      commisionProvideCode: ['']
    }
  }

  initAccounting() {
    return {
      accountNumber: [''],
      accountCostCentre: [''],
      accountIataNumber: [''],
      accountClientReference: [''],
      accountGstTaxName: [''],
      accountGetTaxNumber: [''],
      accountGstTaxAddress: ['']
    }
  }

  initRemarks() {
    return {
      remark_type: [''],
      remark_category: [''],
      remark: ['']
    }
  }

  initProfile_Notes() {
    return {
      profile_notes_category: [''],
      profile_notes_information: ['']
    }
  }

  initPriority_lines1() {
    return {
      priorityInformation1: ['']
    }
  }

  initPriority_lines2() {
    return {
      priorityInformation2: ['']
    }
  }

  initFollow_up() {
    return {
      followUpDate: [''],
      followUpAction: ['']
    }
  }

  get number(): FormArray {
    return this.newAgencyProfileForm.get('number') as FormArray;
  }

  get email(): FormArray {
    return this.newAgencyProfileForm.get('email') as FormArray;
  }

  get address(): FormArray {
    return this.newAgencyProfileForm.get('address') as FormArray;
  }

  get bank_accounts(): FormArray {
    return this.newAgencyProfileForm.get('bank_accounts') as FormArray;
  }

  get forms_of_payment(): FormArray {
    return this.newAgencyProfileForm.get('forms_of_payment') as FormArray;
  }

  get fare_price_override(): FormArray {
    return this.newAgencyProfileForm.get('fare_price_override') as FormArray;
  }

  get endorsements(): FormArray {
    return this.newAgencyProfileForm.get('endorsements') as FormArray;
  }

  get commissions(): FormArray {
    return this.newAgencyProfileForm.get('commissions') as FormArray;
  }

  get accounting(): FormArray {
    return this.newAgencyProfileForm.get('accounting') as FormArray;
  }

  get remarks(): FormArray {
    return this.newAgencyProfileForm.get('remarks') as FormArray;
  }

  get profile_notes(): FormArray {
    return this.newAgencyProfileForm.get('profile_notes') as FormArray;
  }

  get priority_lines1(): FormArray {
    return this.newAgencyProfileForm.get('priority_lines1') as FormArray;
  }

  get priority_lines2(): FormArray {
    return this.newAgencyProfileForm.get('priority_lines2') as FormArray;
  }

  get follow_up(): FormArray {
    return this.newAgencyProfileForm.get('follow_up') as FormArray;
  }

  addMoreNumbers() {
    this.number.push(this.fb.group(this.initNumber()));
  }

  // removeNumbers(index): void {
  //   this.number.removeAt(index);
  // }

  addMoreEmail() {
    this.email.push(this.fb.group(this.initAddEmail()));
  }

  addMoreAddress() {
    this.address.push(this.fb.group(this.initAddress()));
  }

  addBankAccount() {
    this.bank_accounts.push(this.fb.group(this.initBank_accounts()));
  }

  addMoreForms_of_payment() {
    this.forms_of_payment.push(this.fb.group(this.initForms_of_payment()));
  }

  removeForms_of_payment(index): void {
    this.forms_of_payment.removeAt(index);
  }

  addMoreFair_price_override() {
    this.fare_price_override.push(this.fb.group(this.initFare_price_override()));
  }

  removeFair_price_override(index): void {
    this.fare_price_override.removeAt(index);
  }

  addMoreEndorsements() {
    this.endorsements.push(this.fb.group(this.initEndorsements()));
  }

  removeEndorsements(index): void {
    this.endorsements.removeAt(index);
  }

  addMoreComission() {
    this.commissions.push(this.fb.group(this.initComissions()));
  }

  removeComission(index): void {
    this.commissions.removeAt(index);
  }

  addMoreAccounting() {
    this.accounting.push(this.fb.group(this.initAccounting()));
  }

  addMoreRemarks() {
    this.remarks.push(this.fb.group(this.initRemarks()));
  }

  addMoreProfileNotes() {
    this.profile_notes.push(this.fb.group(this.initProfile_Notes()));
  }

  addMorePriority_lines1() {
    this.priority_lines1.push(this.fb.group(this.initPriority_lines1()));
  }

  addMorePriority_lines2() {
    this.priority_lines2.push(this.fb.group(this.initPriority_lines2()));
  }

  addMoreFollow_up() {
    this.follow_up.push(this.fb.group(this.initFollow_up()));
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $('.menu .item').tab();
      $('.ui.dropdown').dropdown();
      $('.ui.checkbox').checkbox();
    });
  }

  createNewAgencyProfile = () => {
    this.newAgencyProfileObj.agency_profile_id = this.newAgencyProfileId;
    this.newAgencyProfileObj.organisation_id = "";
    this.newAgencyProfileObj.created = "";
    this.newAgencyProfileObj.responsible_office = this.newAgencyProfileForm.get('responsible_office').value;
    this.newAgencyProfileObj.department_contact_name = this.newAgencyProfileForm.get('department_contact_name').value;
    this.newAgencyProfileObj.agent_contact_name = this.newAgencyProfileForm.get('agent_contact_name').value;
    this.newAgencyProfileObj.number = JSON.stringify(this.newAgencyProfileForm.get('number').value);
    this.newAgencyProfileObj.home = this.newAgencyProfileForm.get('home').value;
    this.newAgencyProfileObj.email = JSON.stringify(this.newAgencyProfileForm.get('email').value);
    this.newAgencyProfileObj.address = JSON.stringify(this.newAgencyProfileForm.get('address').value);
    this.newAgencyProfileObj.bank_accounts = JSON.stringify(this.newAgencyProfileForm.get('bank_accounts').value);
    this.newAgencyProfileObj.direct_debit_authorized = this.newAgencyProfileForm.get('direct_debit_authorized').value;
    this.newAgencyProfileObj.forms_of_payment = JSON.stringify(this.newAgencyProfileForm.get('forms_of_payment').value);
    this.newAgencyProfileObj.fare_price_override = JSON.stringify(this.newAgencyProfileForm.get('fare_price_override').value);
    this.newAgencyProfileObj.endorsements = JSON.stringify(this.newAgencyProfileForm.get('endorsements').value);
    this.newAgencyProfileObj.discounts = this.newAgencyProfileForm.get('discounts').value;
    this.newAgencyProfileObj.commissions = JSON.stringify(this.newAgencyProfileForm.get('commissions').value);
    this.newAgencyProfileObj.accounting = JSON.stringify(this.newAgencyProfileForm.get('accounting').value);
    this.newAgencyProfileObj.remarks = JSON.stringify(this.newAgencyProfileForm.get('remarks').value);
    this.newAgencyProfileObj.profile_notes = JSON.stringify(this.newAgencyProfileForm.get('profile_notes').value);
    this.newAgencyProfileObj.priority_lines1 = JSON.stringify(this.newAgencyProfileForm.get('priority_lines1').value);
    this.newAgencyProfileObj.priority_lines2 = JSON.stringify(this.newAgencyProfileForm.get('priority_lines2').value);
    this.newAgencyProfileObj.follow_up = JSON.stringify(this.newAgencyProfileForm.get('follow_up').value);
    console.log("You shall not pass", this.newAgencyProfileObj);
    this.ProfileManagementService.NewAgencyProfile(this.newAgencyProfileObj).subscribe((results: any) => {
      console.log(results);
    })
  }

  updateNewAgencyProfile = () => {
    this.newAgencyProfileObj.agency_profile_id = this.agencyProfileId;
    this.newAgencyProfileObj.organisation_id = "";
    this.newAgencyProfileObj.created = "";
    this.newAgencyProfileObj.responsible_office = this.newAgencyProfileForm.get('responsible_office').value;
    this.newAgencyProfileObj.department_contact_name = this.newAgencyProfileForm.get('department_contact_name').value;
    this.newAgencyProfileObj.agent_contact_name = this.newAgencyProfileForm.get('agent_contact_name').value;
    this.newAgencyProfileObj.number = JSON.stringify(this.newAgencyProfileForm.get('number').value);
    this.newAgencyProfileObj.email = JSON.stringify(this.newAgencyProfileForm.get('email').value);
    this.newAgencyProfileObj.address = JSON.stringify(this.newAgencyProfileForm.get('address').value);
    this.newAgencyProfileObj.bank_accounts = JSON.stringify(this.newAgencyProfileForm.get('bank_accounts').value);
    this.newAgencyProfileObj.direct_debit_authorized = this.newAgencyProfileForm.get('direct_debit_authorized').value;
    this.newAgencyProfileObj.forms_of_payment = JSON.stringify(this.newAgencyProfileForm.get('forms_of_payment').value);
    this.newAgencyProfileObj.fare_price_override = JSON.stringify(this.newAgencyProfileForm.get('fare_price_override').value);
    this.newAgencyProfileObj.endorsements = JSON.stringify(this.newAgencyProfileForm.get('endorsements').value);
    this.newAgencyProfileObj.discounts = this.newAgencyProfileForm.get('discounts').value;
    this.newAgencyProfileObj.commissions = JSON.stringify(this.newAgencyProfileForm.get('commissions').value);
    this.newAgencyProfileObj.accounting = JSON.stringify(this.newAgencyProfileForm.get('accounting').value);
    this.newAgencyProfileObj.remarks = JSON.stringify(this.newAgencyProfileForm.get('remarks').value);
    this.newAgencyProfileObj.profile_notes = JSON.stringify(this.newAgencyProfileForm.get('profile_notes').value);
    this.newAgencyProfileObj.priority_lines1 = JSON.stringify(this.newAgencyProfileForm.get('priority_lines1').value);
    this.newAgencyProfileObj.priority_lines2 = JSON.stringify(this.newAgencyProfileForm.get('priority_lines2').value);
    this.newAgencyProfileObj.follow_up = JSON.stringify(this.newAgencyProfileForm.get('follow_up').value);
    console.log("You shall not pass", this.newAgencyProfileObj);
    this.ProfileManagementService.UpdateAgencyProfile(this.agencyProfileId, this.newAgencyProfileObj).subscribe((results: any) => {
      console.log(results);
    })
  }

  setDropDownType(value, type) {
    switch (type) {
      case 'profile_notes_category':
        this.newAgencyProfileForm.get('profile_notes_category').setValue(value);
        break;
      case 'Official':
        this.newAgencyProfileForm.get('Official').setValue(value);
        break;
      case 'addressList':
        this.newAgencyProfileForm.get('addressList').setValue(value);
        break;
      case 'home':
        this.newAgencyProfileForm.get('home').setValue(value);
        break;
      case 'remark_type':
        this.newAgencyProfileForm.get('remark_type').setValue(value);
        break;
      case 'remark_category':
        this.newAgencyProfileForm.get('remark_category').setValue(value);
        break;
      case 'profile_notes_information':
        this.newAgencyProfileForm.get('profile_notes_information').setValue(value);
        break;
    }
  }

}
