import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { UserService } from '../../../shared/services/user.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { ToastrService } from 'ngx-toastr';
import { saluteNames, statusRow } from '../../../shared/utils/common';
import { PosService } from 'src/app/shared/services/pos-service/pos-service';

// import * as $ from 'jquery';
declare const $: any;

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.scss']
})

export class UserNewComponent implements OnInit {

  newUserForm: FormGroup

  userRoles: any = [];
  organizations: any = [];
  organizationBranches: any = [];
  countries: any = [];
  branches:any=[];
  formIsSubmitted: boolean = false;
  saluteNames: any = saluteNames;
  statusRow: any = statusRow;

  constructor(private router: Router,
     private _fb: FormBuilder, 
     private userService: UserService,
      private commonService: CommonService, 
      private toastr: ToastrService,
      private posService:PosService,) { }

  ngOnInit() {
    this.newUserForm = this.createUserForm();
    this.getCountries();    
    this.getRoles();
    this.getOrganizations();
  }

  ngAfterViewInit() {
    $(document).ready(function(){
      <any>($('.ui.dropdown')).dropdown();
    });
  }

  btnSubmitHandler() {
    this.formIsSubmitted = true;
    if (this.newUserForm.invalid) {
      return;
    }

    // const data = {
    //   saluation: this.gfc.saluation.value,
    //   first_name: this.gfc.first_name.value,
    //   last_name: this.gfc.last_name.value,
    //   sex: this.gfc.gender.value,
    //   password: this.gfc.password.value,
    //   initial: this.gfc.initial.value,
    //   mobile: this.gfc.contact.value,
    //   email: this.gfc.email.value,
    //   username: this.gfc.username.value,
    //   address_1: this.gfc.address1.value,
    //   address_2: this.gfc.address2.value,
    //   country_id: this.gfc.country_id.value,
    //   organisation_id: this.gfc.organisation_id.value || 0,
    //   selected_permissions: '',
    //   skills: '',
    //   is_active: this.gfc.status.value,
    //   role_id: this.gfc.role_id.value,
    //   branch_id: this.gfc.branch_id.value,
    // };

    this.userService.createUser(this.newUserForm.value).subscribe(r => {
      if (r.status) {
        this.toastr.success(r.msg, '', {
          disableTimeOut: false,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
        this.formIsSubmitted = false;
        this.router.navigate(['users']);
      }
      else {
        // this.buildError(r.msg);
        this.toastr.error(`${r.message}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      }
    }, (apiError: HttpErrorResponse) => {
      this.buildError(apiError.error.message);
    });

  }

  createUserForm() {
    return this._fb.group({
      saluation: ['Mr.'],
      first_name: [null, Validators.required],
      last_name: [null, Validators.required],
      role_id: ['',Validators.required],
      mobile: [null, Validators.required],
      initial: [null],
      sex: [''],
      is_active: ['', Validators.required],
      address_1: [null],
      address_2: [null],
      country_id: ['', Validators.required],
      organisation_id: ['', null],
      username: [null, [Validators.required,Validators.pattern('^[a-zA-Z0-9]+$')]],
      email: [null, [Validators.required, Validators.pattern('^[a-z0-9._&%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      // password: [null, [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: [null, [Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&]{6,}$')]],
      cpassword: [null, Validators.required],
      branch_id: [null],
    }, {
      validator: this.passwordMatchValidator
    });
  }


  get gfc() { return this.newUserForm.controls };
  get password() { return this.newUserForm.get('password'); }
  get cpassword() { return this.newUserForm.get('cpassword'); }

  passwordMatchValidator(control: AbstractControl) {
    const password: string = control.get('password').value; // get password from our password form control
    const confirmPassword: string = control.get('cpassword').value; // get password from our confirmPassword form control
    // compare is the password math
    if (password !== confirmPassword) {
      // if they don't match, set an error in our confirmPassword form control
      control.get('cpassword').setErrors({ NoPassswordMatch: true });
    }
  }

  getCountries() {
    this.commonService.getCountryList().subscribe((result: any) => {
      this.countries = result.countries;
    });
  }

  getRoles() {
    this.userService.fetchRoles().subscribe(r => {
      if (r.status == 200) {
        this.userRoles = r.data;
      }
      else {
        this.buildError(r.msg)
      }
    }, (apiError: HttpErrorResponse) => {
      this.buildError(apiError.error.message)
    });
  }

  getOrganizations() {
    this.userService.fetchOrganizations().subscribe(r => {
      if (r.status == 200) {
        this.organizations = r.Organization;
      }
      else {
        this.buildError(r.msg)
      }
    }, (apiError: HttpErrorResponse) => {
      this.buildError(apiError.error.message)
    });
  }

  getOrgBranches(id) {

    this.posService.fetchAllBranches(id).subscribe((result: any) => {
      if(result.status){
        this.branches=result.result.data;

       }else{
        this.toastr.error(`${result.message}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-top-right'
        });
       }
  });
  }

  validatePassword() {
    const { password, cpassword } = this;


    if (!cpassword.dirty) {
      return;
    }
    const hasError = password.value !== cpassword.value;
    if (cpassword.errors) {
      if (hasError) {
        cpassword.errors.unmatched = true;
      } else {
        delete cpassword.errors.unmatched;
        if (Object.keys(cpassword.errors).length === 0) {
          cpassword.setErrors(null);
        }
      }
    } else if (hasError) {
      cpassword.setErrors({ unmatched: true });
    }
  }


  buildError(message) {
    this.toastr.error(message, 'Server Error !', {
      disableTimeOut: false,
      progressBar: false,
      positionClass: 'toast-bottom-right'
    });
  }
}
