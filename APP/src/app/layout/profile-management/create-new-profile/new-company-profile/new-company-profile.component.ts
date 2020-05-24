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
  selector: 'app-new-company-profile',
  templateUrl: './new-company-profile.component.html',
  styleUrls: ['./new-company-profile.component.scss', './../create-new-profile.component.scss']
})
export class NewCompanyProfileComponent implements OnInit {

  newCompanyProfileObj: any = {};
  companyProfileId;
  newCompanyProfileId;
  @ViewChild('tab', { static: false }) tab: ElementRef;
  @ViewChild('tabContent', { static: false }) tabContent: ElementRef;

  constructor(
    private route: ActivatedRoute,
    public ProfileManagementService: ProfileManagementService,
    private fb: FormBuilder
  ) {

    let uniqueProfileID = Math.random().toString(36).substring(7);
    console.log(uniqueProfileID);
    this.newCompanyProfileId = uniqueProfileID + "Amedius";

    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.companyProfileId = params.company_profile_id;
      this.newCompanyProfileForm.patchValue({
        company_profile_id: params.company_profile_id,
        organisation_id: params.organisation_id,
        group_name: params.group_name,
        group_description: params.group_description,
        group_index: params.group_index,
        languages: params.languages,
        shadow_destination: params.shadow_destination,
        default_home_airport: params.default_home_airport,
        default_arrival_ariport: params.default_arrival_ariport,
        dep_contact_name: params.dep_contact_name,
        agent_contact_name: params.agent_contact_name,
        delivery_method: params.delivery_method,
        policy_override_authorization: params.policy_override_authorization,
        prepaid_ticket_authorization: params.prepaid_ticket_authorization,
        direct_debit_authorized: params.direct_debit_authorized,
        discounts: params.discounts,

      });
      let number = this.parsingArrayParams(params.number, this.number);
      let email = this.parsingArrayParams(params.email, this.email);
      let address = this.parsingArrayParams(params.address, this.address);
      let specialNeeds = this.parsingArrayParams(params.special_needs, this.special_needs);
      let miscellaneousTicketing = this.parsingArrayParams(params.misc_ticketing, this.misc_ticketing);
      let tourCode = this.parsingArrayParams(params.tour_code, this.tour_code);
      let ticketingArrangememt = this.parsingArrayParams(params.ticketing_arrangement, this.ticketing_arrangements);
      let originalIssue = this.parsingArrayParams(params.original_issue, this.original_issue);
      let keywords = this.parsingArrayParams(params.keywords, this.keywords);
      let bankAccounts = this.parsingArrayParams(params.bank_accounts, this.bank_accounts);
      let formsOfPayment = this.parsingArrayParams(params.forms_of_payment, this.forms_of_payment);
      let farePriceOverride = this.parsingArrayParams(params.fare_price_override, this.fare_price_override);
      let endorsements = this.parsingArrayParams(params.endorsements, this.endorsements);
      let commission = this.parsingArrayParams(params.commission, this.commission);
      let accounting = this.parsingArrayParams(params.accounting, this.accounting);
      let remarks = this.parsingArrayParams(params.remarks, this.remarks);
      let profileNotes = this.parsingArrayParams(params.profile_notes, this.profile_notes);
      let priority_lines1 = this.parsingArrayParams(params.priority_lines1, this.priority_lines1);
      let priorityLines2 = this.parsingArrayParams(params.priority_lines2, this.priority_lines2);
      let followUP = this.parsingArrayParams(params.follow_up, this.follow_up);
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

  newCompanyProfileForm = this.fb.group({
    company_profile_id: [''],
    organisation_id: [''],
    group_name: [''],
    group_description: [''],
    group_index: [''],
    languages: [''],
    home: [''],
    Official: [''],
    addressList: [''],
    countryList: [''],
    specialNeedsType: [''],
    specialNeedsDesc: [''],
    number: this.fb.array([this.fb.group(this.initNumber())]),
    email: this.fb.array([this.fb.group(this.initAddEmail())]),
    address: this.fb.array([this.fb.group(this.initAddress())]),
    special_needs: this.fb.array([this.fb.group(this.initSpecial_needs())]),
    miscellaneous_ticketing: this.fb.array([this.fb.group(this.initMisc_ticketing())]),
    tour_code: this.fb.array([this.fb.group(this.initTour_code())]),
    ticketing_arrangement: this.fb.array([this.fb.group(this.initTicketing_arrangements())]),
    validating_carrier: this.fb.array([this.fb.group(this.initValidatingCarrier())]),
    original_issue: this.fb.array([this.fb.group(this.initOriginalIssue())]),
    shadow_destination: [''],
    keywords: this.fb.array([this.fb.group(this.initKeywords())]),
    default_home_airport: [''],
    default_arrival_ariport: [''],
    dep_contact_name: [''],
    agent_contact_name: [''],
    delivery_method: [''],
    policy_override_authorization: [''],
    prepaid_ticket_authorization: [''],
    bank_accounts: this.fb.array([this.fb.group(this.initBank_accounts())]),
    direct_debit_authorized: [''],
    forms_of_payment: this.fb.array([this.fb.group(this.initForms_of_payment())]),
    fare_price_override: this.fb.array([this.fb.group(this.initFare_price_override())]),
    endorsements: this.fb.array([this.fb.group(this.initEndorsements())]),
    discounts: [''],
    commissions: this.fb.array([this.fb.group(this.initComission())]),
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

  initSpecial_needs() {
    return {
      explosionIndicator: [''],
      specialNeedsType: [''],
      specialNeedsDesc: [''],
      specialNeedsFreeText: [''],
      specialNeedsAirlineCode: [''],
      specialNeedsFlightType: ['']
    }
  }

  initMisc_ticketing() {
    return {
      miscellaneous_text: [''],
      miscellaneous_provider: ['']
    }
  }

  initTour_code() {
    return {
      tourCode_text: [''],
      tourCode_provider: ['']
    }
  }

  initTicketing_arrangements() {
    return {
      ticketingArrangement_provider: [''],
      validatingCarrier_provider: ['']
    }

  }

  initValidatingCarrier() {
    return {
      validatingCarrier_provider: ['']
    }
  }

  initOriginalIssue() {
    return {
      originalIssue_text: ['']
    }
  }

  initKeywords() {
    return {
      keywords: [''],
      airline: [''],
      keywordText: [''],
      statusCode: [''],
      numberParty: ['']
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

  initComission() {
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
    return this.newCompanyProfileForm.get('number') as FormArray;
  }

  get email(): FormArray {
    return this.newCompanyProfileForm.get('email') as FormArray;
  }

  get address(): FormArray {
    return this.newCompanyProfileForm.get('address') as FormArray;
  }

  get special_needs(): FormArray {
    return this.newCompanyProfileForm.get('special_needs') as FormArray;
  }

  get misc_ticketing(): FormArray {
    return this.newCompanyProfileForm.get('miscellaneous_ticketing') as FormArray;
  }

  get ticketing_arrangements(): FormArray {
    return this.newCompanyProfileForm.get('ticketing_arrangement') as FormArray;
  }

  get validating_carrier(): FormArray {
    return this.newCompanyProfileForm.get('validating_carrier') as FormArray;
  }

  get tour_code(): FormArray {
    return this.newCompanyProfileForm.get('tour_code') as FormArray;
  }

  get original_issue(): FormArray {
    return this.newCompanyProfileForm.get('original_issue') as FormArray;
  }

  get keywords(): FormArray {
    return this.newCompanyProfileForm.get('keywords') as FormArray;
  }

  get bank_accounts(): FormArray {
    return this.newCompanyProfileForm.get('bank_accounts') as FormArray;
  }

  get forms_of_payment(): FormArray {
    return this.newCompanyProfileForm.get('forms_of_payment') as FormArray;
  }

  get fare_price_override(): FormArray {
    return this.newCompanyProfileForm.get('fare_price_override') as FormArray;
  }

  get endorsements(): FormArray {
    return this.newCompanyProfileForm.get('endorsements') as FormArray;
  }

  get commission(): FormArray {
    return this.newCompanyProfileForm.get('commissions') as FormArray;
  }

  get accounting(): FormArray {
    return this.newCompanyProfileForm.get('accounting') as FormArray;
  }

  get remarks(): FormArray {
    return this.newCompanyProfileForm.get('remarks') as FormArray;
  }

  get profile_notes(): FormArray {
    return this.newCompanyProfileForm.get('profile_notes') as FormArray;
  }

  get priority_lines1(): FormArray {
    return this.newCompanyProfileForm.get('priority_lines1') as FormArray;
  }

  get priority_lines2(): FormArray {
    return this.newCompanyProfileForm.get('priority_lines2') as FormArray;
  }

  get follow_up(): FormArray {
    return this.newCompanyProfileForm.get('follow_up') as FormArray;
  }

  addMoreNumbers() {
    this.number.push(this.fb.group(this.initNumber()));
  }

  // removeNumbers(index): void {
  //   this.number_details.removeAt(index);
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

  addMoreSpecialNeeds() {
    this.special_needs.push(this.fb.group(this.initSpecial_needs()));
  }

  removeSpecialNeeds(index) {
    this.special_needs.removeAt(index)
  }

  addMoremisc_ticketing() {
    this.misc_ticketing.push(this.fb.group(this.initMisc_ticketing()));
  }

  removeMisc_ticketing(index) {
    this.misc_ticketing.removeAt(index)
  }

  addMoreTicketing_arrangements() {
    this.ticketing_arrangements.push(this.fb.group(this.initTicketing_arrangements()));
  }

  removeTicketing_arrangement(index) {
    this.ticketing_arrangements.removeAt(index)
  }

  addMoreValidatingCarrier() {
    this.validating_carrier.push(this.fb.group(this.initValidatingCarrier()));
  }

  removeValidatingCarrier(index) {
    this.validating_carrier.removeAt(index)
  }

  addMoreOriginal_issue() {
    this.original_issue.push(this.fb.group(this.initOriginalIssue()));
  }

  removeOriginalIssues(index) {
    this.original_issue.removeAt(index)
  }

  addMoreTour_code() {
    this.tour_code.push(this.fb.group(this.initTour_code()));
  }

  removeTourCode(index) {
    this.tour_code.removeAt(index)
  }

  addMoreKeywords() {
    this.keywords.push(this.fb.group(this.initKeywords()));
  }

  removeKeywords(index) {
    this.keywords.removeAt(index)
  }



  addMoreForms_of_payment() {
    this.forms_of_payment.push(this.fb.group(this.initForms_of_payment()));
  }

  removeForm_of_payment(index) {
    this.forms_of_payment.removeAt(index)
  }

  addMoreFair_price_override() {
    this.fare_price_override.push(this.fb.group(this.initFare_price_override()));
  }

  removeFair_price_override() {
    this.fare_price_override
  }

  addMoreEndorsements() {
    this.endorsements.push(this.fb.group(this.initEndorsements()));
  }

  removeEndorsements(index) {
    this.endorsements.removeAt(index)
  }

  addMoreComission() {
    this.commission.push(this.fb.group(this.initComission()));
  }

  removeComission(index) {
    this.commission.removeAt(index)
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
    $('.menu .item').tab();
    $('.ui.dropdown').dropdown();
  }

  createNewCompanyProfile = () => {
    this.newCompanyProfileObj.company_profile_id = this.newCompanyProfileId;
    this.newCompanyProfileObj.organisation_id = "";
    this.newCompanyProfileObj.group_name = this.newCompanyProfileForm.get('group_name').value;
    this.newCompanyProfileObj.group_description = this.newCompanyProfileForm.get('group_description').value;
    this.newCompanyProfileObj.group_index = this.newCompanyProfileForm.get('group_index').value;
    this.newCompanyProfileObj.languages = this.newCompanyProfileForm.get('languages').value;
    this.newCompanyProfileObj.home = this.newCompanyProfileForm.get('home').value;
    this.newCompanyProfileObj.number = JSON.stringify(this.newCompanyProfileForm.get('number').value);
    this.newCompanyProfileObj.email = JSON.stringify(this.newCompanyProfileForm.get('email').value);
    this.newCompanyProfileObj.address = JSON.stringify(this.newCompanyProfileForm.get('address').value);
    this.newCompanyProfileObj.special_needs = JSON.stringify(this.newCompanyProfileForm.get('special_needs').value);
    this.newCompanyProfileObj.miscellaneous_ticketing = JSON.stringify(this.newCompanyProfileForm.get('miscellaneous_ticketing').value);
    this.newCompanyProfileObj.tour_code = JSON.stringify(this.newCompanyProfileForm.get('tour_code').value);
    this.newCompanyProfileObj.ticketing_arrangement = JSON.stringify(this.newCompanyProfileForm.get('ticketing_arrangement').value);
    this.newCompanyProfileObj.validating_carrier = JSON.stringify(this.newCompanyProfileForm.get('validating_carrier').value);
    this.newCompanyProfileObj.original_issue = JSON.stringify(this.newCompanyProfileForm.get('original_issue').value); //here
    this.newCompanyProfileObj.shadow_destination = this.newCompanyProfileForm.get('shadow_destination').value;
    this.newCompanyProfileObj.keywords = JSON.stringify(this.newCompanyProfileForm.get('keywords').value);
    this.newCompanyProfileObj.default_home_airport = this.newCompanyProfileForm.get('default_home_airport').value;
    this.newCompanyProfileObj.default_arrival_ariport = this.newCompanyProfileForm.get('default_arrival_ariport').value;
    this.newCompanyProfileObj.dep_contact_name = this.newCompanyProfileForm.get('dep_contact_name').value;
    this.newCompanyProfileObj.agent_contact_name = this.newCompanyProfileForm.get('agent_contact_name').value;
    this.newCompanyProfileObj.delivery_method = this.newCompanyProfileForm.get('delivery_method').value;
    this.newCompanyProfileObj.policy_override_authorization = this.newCompanyProfileForm.get('policy_override_authorization').value;
    this.newCompanyProfileObj.prepaid_ticket_authorization = this.newCompanyProfileForm.get('prepaid_ticket_authorization').value;
    this.newCompanyProfileObj.bank_accounts = JSON.stringify(this.newCompanyProfileForm.get('bank_accounts').value);
    this.newCompanyProfileObj.direct_debit_authorized = this.newCompanyProfileForm.get('direct_debit_authorized').value;
    this.newCompanyProfileObj.forms_of_payment = JSON.stringify(this.newCompanyProfileForm.get('forms_of_payment').value);
    //this.newCompanyProfileObj.fare_price_override = JSON.stringify(this.newCompanyProfileForm.get('responsible_office').value);
    this.newCompanyProfileObj.endorsements = JSON.stringify(this.newCompanyProfileForm.get('endorsements').value);
    this.newCompanyProfileObj.discounts = this.newCompanyProfileForm.get('discounts').value;
    this.newCompanyProfileObj.commissions = JSON.stringify(this.newCompanyProfileForm.get('commissions').value);
    this.newCompanyProfileObj.accounting = JSON.stringify(this.newCompanyProfileForm.get('accounting').value);
    this.newCompanyProfileObj.remarks = JSON.stringify(this.newCompanyProfileForm.get('remarks').value);
    this.newCompanyProfileObj.profile_notes = JSON.stringify(this.newCompanyProfileForm.get('profile_notes').value);
    this.newCompanyProfileObj.priority_lines1 = JSON.stringify(this.newCompanyProfileForm.get('priority_lines1').value);
    this.newCompanyProfileObj.priority_lines2 = JSON.stringify(this.newCompanyProfileForm.get('priority_lines2').value);
    this.newCompanyProfileObj.follow_up = JSON.stringify(this.newCompanyProfileForm.get('follow_up').value);
    console.log("You shall not pass-----", this.newCompanyProfileObj.value);
    this.ProfileManagementService.NewCompanyProfile(this.newCompanyProfileObj).subscribe((results: any) => {
      console.log(results);
    })
  }

  updateNewCompanyProfile = () => {
    this.newCompanyProfileObj.company_profile_id = this.companyProfileId;
    this.newCompanyProfileObj.organisation_id = "";
    this.newCompanyProfileObj.group_name = this.newCompanyProfileForm.get('group_name').value;
    this.newCompanyProfileObj.group_description = this.newCompanyProfileForm.get('group_description').value;
    this.newCompanyProfileObj.group_index = this.newCompanyProfileForm.get('group_index').value;
    this.newCompanyProfileObj.languages = this.newCompanyProfileForm.get('languages').value;
    this.newCompanyProfileObj.number = JSON.stringify(this.newCompanyProfileForm.get('number').value);
    this.newCompanyProfileObj.email = JSON.stringify(this.newCompanyProfileForm.get('email').value);
    this.newCompanyProfileObj.address = JSON.stringify(this.newCompanyProfileForm.get('address').value);
    this.newCompanyProfileObj.special_needs = JSON.stringify(this.newCompanyProfileForm.get('special_needs').value);
    this.newCompanyProfileObj.miscellaneous_ticketing = JSON.stringify(this.newCompanyProfileForm.get('miscellaneous_ticketing').value);
    this.newCompanyProfileObj.tour_code = JSON.stringify(this.newCompanyProfileForm.get('tour_code').value);
    this.newCompanyProfileObj.ticketing_arrangement = JSON.stringify(this.newCompanyProfileForm.get('ticketing_arrangement').value);
    this.newCompanyProfileObj.validating_carrier = JSON.stringify(this.newCompanyProfileForm.get('validating_carrier').value);
    this.newCompanyProfileObj.original_issue = JSON.stringify(this.newCompanyProfileForm.get('original_issue').value); //here
    this.newCompanyProfileObj.shadow_destination = this.newCompanyProfileForm.get('shadow_destination').value;
    this.newCompanyProfileObj.keywords = JSON.stringify(this.newCompanyProfileForm.get('keywords').value);
    this.newCompanyProfileObj.default_home_airport = this.newCompanyProfileForm.get('default_home_airport').value;
    this.newCompanyProfileObj.default_arrival_ariport = this.newCompanyProfileForm.get('default_arrival_ariport').value;
    this.newCompanyProfileObj.dep_contact_name = this.newCompanyProfileForm.get('dep_contact_name').value;
    this.newCompanyProfileObj.agent_contact_name = this.newCompanyProfileForm.get('agent_contact_name').value;
    this.newCompanyProfileObj.delivery_method = this.newCompanyProfileForm.get('delivery_method').value;
    this.newCompanyProfileObj.policy_override_authorization = this.newCompanyProfileForm.get('policy_override_authorization').value;
    this.newCompanyProfileObj.prepaid_ticket_authorization = this.newCompanyProfileForm.get('prepaid_ticket_authorization').value;
    this.newCompanyProfileObj.bank_accounts = JSON.stringify(this.newCompanyProfileForm.get('bank_accounts').value);
    this.newCompanyProfileObj.direct_debit_authorized = this.newCompanyProfileForm.get('direct_debit_authorized').value;
    this.newCompanyProfileObj.forms_of_payment = JSON.stringify(this.newCompanyProfileForm.get('forms_of_payment').value);
    //this.newCompanyProfileObj.fare_price_override = JSON.stringify(this.newCompanyProfileForm.get('responsible_office').value);
    this.newCompanyProfileObj.endorsements = JSON.stringify(this.newCompanyProfileForm.get('endorsements').value);
    this.newCompanyProfileObj.discounts = this.newCompanyProfileForm.get('discounts').value;
    this.newCompanyProfileObj.commissions = JSON.stringify(this.newCompanyProfileForm.get('commissions').value);
    this.newCompanyProfileObj.accounting = JSON.stringify(this.newCompanyProfileForm.get('accounting').value);
    this.newCompanyProfileObj.remarks = JSON.stringify(this.newCompanyProfileForm.get('remarks').value);
    this.newCompanyProfileObj.profile_notes = JSON.stringify(this.newCompanyProfileForm.get('profile_notes').value);
    this.newCompanyProfileObj.priority_lines1 = JSON.stringify(this.newCompanyProfileForm.get('priority_lines1').value);
    this.newCompanyProfileObj.priority_lines2 = JSON.stringify(this.newCompanyProfileForm.get('priority_lines2').value);
    this.newCompanyProfileObj.follow_up = JSON.stringify(this.newCompanyProfileForm.get('follow_up').value);
    console.log("You shall not pass", this.newCompanyProfileObj);
    this.ProfileManagementService.UpdateCompanyProfile(this.companyProfileId, this.newCompanyProfileObj).subscribe((results: any) => {
      console.log(results);
    })
  }

  setDropDownType(value, type) {
    switch (type) {
      case 'languages':
        this.newCompanyProfileForm.get('languages').setValue(value);
        break;
      case 'home':
        this.newCompanyProfileForm.get('home').setValue(value);
        break;
      case 'Official':
        this.newCompanyProfileForm.get('Official').setValue(value);
        break;
      case 'addressList':
        this.newCompanyProfileForm.get('addressList').setValue(value);
        break;
      case 'countryList':
        this.newCompanyProfileForm.get('countryList').setValue(value);
        break;
      case 'specialNeedsType':
        this.newCompanyProfileForm.get('specialNeedsType').setValue(value);
        break;
      case 'specialNeedsDesc':
        this.newCompanyProfileForm.get('specialNeedsDesc').setValue(value);
        break;
      case 'specialNeedsFlightType':
        this.newCompanyProfileForm.get('specialNeedsFlightType').setValue(value);
        break;
      case 'remark_type':
        this.newCompanyProfileForm.get('remark_type').setValue(value);
        break;
      case 'remark_category':
        this.newCompanyProfileForm.get('remark_category').setValue(value);
        break;
      case 'delivery_method':
        this.newCompanyProfileForm.get('delivery_method').setValue(value);
        break;
      case 'profile_notes_category':
        this.newCompanyProfileForm.get('profile_notes_category').setValue(value);
        break;
    }
  }

}
