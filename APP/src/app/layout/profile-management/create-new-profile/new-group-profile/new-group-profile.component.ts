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
  selector: 'app-new-group-profile',
  templateUrl: './new-group-profile.component.html',
  styleUrls: ['./new-group-profile.component.scss', './../create-new-profile.component.scss']
})
export class NewGroupProfileComponent implements OnInit {

  newGroupProfileObj: any = {}
  groupProfileId
  newGroupProfileId;
  @ViewChild('tab', { static: false }) tab: ElementRef;
  @ViewChild('tabContent', { static: false }) tabContent: ElementRef;

  constructor(
    private route: ActivatedRoute,
    public ProfileManagementService: ProfileManagementService,
    private fb: FormBuilder
  ) {
    let uniqueProfileID = Math.random().toString(36).substring(7);
    console.log(uniqueProfileID);
    this.newGroupProfileId = uniqueProfileID + "Amedius";
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.groupProfileId = params.group_profile_id;
      this.newGroupProfileForm.patchValue({
        group_profile_id: params.group_profile_id,
        organisation_id: params.organisation_id,
        group_name: params.group_name,
        group_description: params.group_description,
        group_index: params.group_index,
        languages: params.languages,
        responsible_office: params.responsible_office,
        department_contact_name: params.department_contact_name,
        agent_contact_name: params.agent_contact_name,
        member1: params.member1,
      });
      let number = this.parsingArrayParams(params.number, this.number);
      let email = this.parsingArrayParams(params.email, this.email);
      let address = this.parsingArrayParams(params.address, this.address);
      let groupMembers = this.parsingArrayParams(params.group_members, this.group_members);
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

  newGroupProfileForm = this.fb.group({
    group_profile_id: [''],
    organisation_id: [''],
    group_name: [''],
    group_description: [''],
    group_index: [''],
    languages: [''],
    number: this.fb.array([this.fb.group(this.initNumber())]),
    email: this.fb.array([this.fb.group(this.initEmail())]),
    address: this.fb.array([this.fb.group(this.initAddress())]),
    responsible_office: [''],
    department_contact_name: [''],
    agent_contact_name: [''],
    member1: [''],
    group_members: this.fb.array([this.fb.group(this.initGroup_members())]),
    remarks: this.fb.array([this.fb.group(this.initRemarks())]),
    profile_notes: this.fb.array([this.fb.group(this.initProfile_notes())]),
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

  initEmail() {
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

  initGroup_members() {
    return {
      group_name: [''],
      group_description: [''],
      group_index: [''],
      languages: ['']
    }
  }

  initRemarks() {
    return {
      remark_type: [''],
      remark_category: [''],
      remark: ['']
    }
  }

  initProfile_notes() {
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
    return this.newGroupProfileForm.get('number') as FormArray;
  }

  get email(): FormArray {
    return this.newGroupProfileForm.get('email') as FormArray;
  }

  get address(): FormArray {
    return this.newGroupProfileForm.get('address') as FormArray;
  }

  get group_members(): FormArray {
    return this.newGroupProfileForm.get('group_members') as FormArray;
  }

  get remarks(): FormArray {
    return this.newGroupProfileForm.get('remarks') as FormArray;
  }

  get profile_notes(): FormArray {
    return this.newGroupProfileForm.get('profile_notes') as FormArray;
  }

  get priority_lines1(): FormArray {
    return this.newGroupProfileForm.get('priority_lines1') as FormArray;
  }

  get priority_lines2(): FormArray {
    return this.newGroupProfileForm.get('priority_lines2') as FormArray;
  }

  get follow_up(): FormArray {
    return this.newGroupProfileForm.get('follow_up') as FormArray;
  }

  addMoreNumber() {
    this.number.push(this.fb.group(this.initNumber()));
  }

  addMoreEmail() {
    this.email.push(this.fb.group(this.initEmail()));
  }

  addMoreAddress() {
    this.address.push(this.fb.group(this.initAddress()));
  }

  addMoreGroup_members() {
    this.group_members.push(this.fb.group(this.initGroup_members()));
  }

  addMoreRemarks() {
    this.remarks.push(this.fb.group(this.initRemarks()));
  }

  addMoreProfile_notes() {
    this.profile_notes.push(this.fb.group(this.initProfile_notes()));
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

  createNewGroupProfile = () => {
    this.newGroupProfileObj.group_profile_id = this.newGroupProfileId;
    this.newGroupProfileObj.organisation_id = "";
    this.newGroupProfileObj.created = "";
    this.newGroupProfileObj.group_name = this.newGroupProfileForm.get('group_name').value;
    this.newGroupProfileObj.group_description = this.newGroupProfileForm.get('group_description').value;
    this.newGroupProfileObj.group_index = this.newGroupProfileForm.get('group_index').value;
    this.newGroupProfileObj.languages = this.newGroupProfileForm.get('languages').value;
    this.newGroupProfileObj.number = JSON.stringify(this.newGroupProfileForm.get('number').value);
    this.newGroupProfileObj.email = JSON.stringify(this.newGroupProfileForm.get('email').value);
    this.newGroupProfileObj.address = JSON.stringify(this.newGroupProfileForm.get('address').value);
    this.newGroupProfileObj.responsible_office = this.newGroupProfileForm.get('responsible_office').value;
    this.newGroupProfileObj.department_contact_name = this.newGroupProfileForm.get('department_contact_name').value;
    this.newGroupProfileObj.agent_contact_name = this.newGroupProfileForm.get('agent_contact_name').value;
    this.newGroupProfileObj.member1 = this.newGroupProfileForm.get('member1').value;
    this.newGroupProfileObj.group_members = JSON.stringify(this.newGroupProfileForm.get('group_members').value);
    this.newGroupProfileObj.remarks = JSON.stringify(this.newGroupProfileForm.get('remarks').value);
    this.newGroupProfileObj.profile_notes = JSON.stringify(this.newGroupProfileForm.get('profile_notes').value);
    this.newGroupProfileObj.priority_lines1 = JSON.stringify(this.newGroupProfileForm.get('priority_lines1').value);
    this.newGroupProfileObj.priority_lines2 = JSON.stringify(this.newGroupProfileForm.get('priority_lines2').value);
    this.newGroupProfileObj.follow_up = JSON.stringify(this.newGroupProfileForm.get('follow_up').value);
    console.log("You shall not pass", this.newGroupProfileObj);
    this.ProfileManagementService.NewGroupProfile(this.newGroupProfileObj).subscribe((results: any) => {
      console.log(results);
    })
  }

  updateNewGroupProfile = () => {
    this.newGroupProfileObj.group_profile_id = this.groupProfileId;
    this.newGroupProfileObj.organisation_id = "";
    this.newGroupProfileObj.created = "";
    this.newGroupProfileObj.group_name = this.newGroupProfileForm.get('group_name').value;
    this.newGroupProfileObj.group_description = this.newGroupProfileForm.get('group_description').value;
    this.newGroupProfileObj.group_index = this.newGroupProfileForm.get('group_index').value;
    this.newGroupProfileObj.languages = this.newGroupProfileForm.get('languages').value;
    this.newGroupProfileObj.number = JSON.stringify(this.newGroupProfileForm.get('number').value);
    this.newGroupProfileObj.email = JSON.stringify(this.newGroupProfileForm.get('email').value);
    this.newGroupProfileObj.address = JSON.stringify(this.newGroupProfileForm.get('address').value);
    this.newGroupProfileObj.responsible_office = this.newGroupProfileForm.get('responsible_office').value;
    this.newGroupProfileObj.department_contact_name = this.newGroupProfileForm.get('department_contact_name').value;
    this.newGroupProfileObj.agent_contact_name = this.newGroupProfileForm.get('agent_contact_name').value;
    this.newGroupProfileObj.member1 = this.newGroupProfileForm.get('member1').value;
    this.newGroupProfileObj.group_members = JSON.stringify(this.newGroupProfileForm.get('group_members').value);
    this.newGroupProfileObj.remarks = JSON.stringify(this.newGroupProfileForm.get('remarks').value);
    this.newGroupProfileObj.profile_notes = JSON.stringify(this.newGroupProfileForm.get('profile_notes').value);
    this.newGroupProfileObj.priority_lines1 = JSON.stringify(this.newGroupProfileForm.get('priority_lines1').value);
    this.newGroupProfileObj.priority_lines2 = JSON.stringify(this.newGroupProfileForm.get('priority_lines2').value);
    this.newGroupProfileObj.follow_up = JSON.stringify(this.newGroupProfileForm.get('follow_up').value);
    console.log("You shall not pass", this.newGroupProfileObj);
    this.ProfileManagementService.UpdateGroupProfile(this.groupProfileId, this.newGroupProfileObj).subscribe((results: any) => {
      console.log(results);
    })
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

  setDropDownType(value, type) {
    switch (type) {
      case 'languages':
        this.newGroupProfileForm.get('languages').setValue(value);
        break;
      case 'home':
        this.newGroupProfileForm.get('home').setValue(value);
        break;
      case 'Official':
        this.newGroupProfileForm.get('Official').setValue(value);
        break;
      case 'addressList':
        this.newGroupProfileForm.get('addressList').setValue(value);
        break;
      case 'countryList':
        this.newGroupProfileForm.get('countryList').setValue(value);
        break;
      case 'remark_type':
        this.newGroupProfileForm.get('remark_type').setValue(value);
        break;
      case 'remark_category':
        this.newGroupProfileForm.get('remark_category').setValue(value);
        break;
      case 'profile_notes_category':
        this.newGroupProfileForm.get('profile_notes_category').setValue(value);
        break;
    }
  }

}
