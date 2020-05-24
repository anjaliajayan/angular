import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { UserService } from '../../../shared/services/user.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { ToastrService } from 'ngx-toastr';
import { saluteNames, statusRow } from '../../../shared/utils/common';

declare const moment: any;
declare const $: any;

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  editUserForm: FormGroup

  formIsSubmitted: boolean = false;
  displayTargets: boolean = false;
  displayPermissions: boolean = false;
  saluteNames: any = saluteNames;
  statusRow: any = statusRow;

  userId: Number = 0;
  userData: any = {};
  userRoles: any = [];
  organizations: any = [];
  organizationBranches: any = [];
  branches: any = [];
  countries: any = [];

  constructor(private activeRoute: ActivatedRoute, private router: Router,
     private _fb: FormBuilder, private userService: UserService, private commonService: CommonService,
      private toastr: ToastrService) { }

  ngOnInit() {
    this.editUserForm = this.createUserForm(null);
    this.userId = this.activeRoute.snapshot.params.id;
    this.getUser(this.userId);
    this.getCountries();    
    this.getRoles();
    this.getOrganizations();
  }

  ngAfterViewInit() {
    $(document).ready(function(){
      (<any>$('.ui.dropdown')).dropdown();
    });
  }

  btnSubmitHandler() {
    this.formIsSubmitted = true;

    if (this.editUserForm.invalid) {
      this.buildError('Please fill all the required fields.');
      return;
    }

    const data = {
      id: this.userId,
      salute: this.gfc.salute.value,
      first_name: this.gfc.first_name.value,
      last_name: this.gfc.last_name.value,
      sex: this.gfc.gender.value,
      password: this.gfc.password.value,
      initial: this.gfc.initial.value,
      mobile: this.gfc.contact.value,
      email: this.gfc.email.value,
      username: this.gfc.username.value,
      address_1: this.gfc.address1.value,
      address_2: this.gfc.address2.value,
      country_id: this.gfc.country_id.value,
      organisation_id: this.gfc.organisation_id.value || 0,
      selected_permissions: '',
      skills: '',
      is_active: this.gfc.status.value,
      role_id: this.gfc.role_id.value,
      branch_id: this.gfc.branch_id.value,
    };

    this.userService.updateUser(data).subscribe(r => {
      if (r.status) {
        this.displayTargets = true;
        this.userData = r.data;
        this.formIsSubmitted = false;
        
        this.toastr.success('Profile updated successfully.', 'Success !', {
          disableTimeOut: false,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
        this.router.navigate(['users']);
      }

      else {
        // this.buildError(r.msg)
        this.toastr.error(`${r.message}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      }
    }, (apiError: HttpErrorResponse) => {
      this.buildError(apiError.error.message)
    });

  }

  createUserForm(userData) {
    console.log("userdata::::",userData)
    return this._fb.group({
      salute: [userData ? userData.salute : null, Validators.required], // this.saluteNames[userData.salute]
      first_name: [userData ? userData.first_name : null, Validators.required],
      last_name: [userData ? userData.last_name : null, Validators.required],
      role_id: [userData ? userData.role_id : null, Validators.required],
      mobile: [userData ? userData.mobile : null, Validators.required],
      initial: [userData ? userData.initial: null],
      sex: [userData ? userData.sex : null, Validators.required],
      status: [userData ? userData.is_active : null, Validators.required],
      address_1: [userData ? userData.address_1: null],
      address_2: [userData ? userData.address_2: null],
      country_id: [userData ? userData.country_id : null, Validators.required],
      organisation_id: [userData ? userData.organisation_id: null],
      branch_id: [userData ? userData.branch_id: null],
      username: [userData ? userData.username : null, Validators.required],
      email: [userData ? userData.email: null, [Validators.required, Validators.email]],
      password: [null, [Validators.minLength(6)]],
      cpassword: [null, ],
    }, {
      validator: this.passwordMatchValidator
    });
  }


  get gfc() { return this.editUserForm.controls };

  passwordMatchValidator(control: AbstractControl) {
    const password: string = control.get('password').value; // get password from our password form control
    const confirmPassword: string = control.get('cpassword').value; // get password from our confirmPassword form control
    // compare is the password math
    if (password !== confirmPassword) {
      // if they don't match, set an error in our confirmPassword form control
      control.get('cpassword').setErrors({ NoPassswordMatch: true });
    }
  }

  buildError(message) {
    this.toastr.error(message, 'Server Error !', {
      disableTimeOut: false,
      progressBar: false,
      positionClass: 'toast-bottom-right'
    });
  }

  getUser(userId) {
  
    this.userService.fetchUser(userId).subscribe(r => {
      if (r.status == 200) {
        this.userData = r.data;
        
        this.getOrgBranches(this.userData.organisation_id);

        this.editUserForm = this.createUserForm(this.userData);
        // console.log(this.userData)
      }
      else {
        this.buildError(r.msg)
      }
    }, (apiError: HttpErrorResponse) => {
      this.buildError(apiError.error.message)
    });
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
        // console.log(r.Organization);

        // r.Organization.forEach( org => {
        //   this.organizations.push(org);

        //   org.branches.forEach( (branch, i) => {
        //     this.branches[org.organisation_id].push(branch);
        //   })

        // })
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
    this.organizationBranches = null;
    
    this.commonService.getOrgBranches(id).subscribe((r:any) => {
      if( r.type == 'data' ) {
          this.organizationBranches = r.Organization;
      }

    })
  }

  loadTargets() {
    this.router.navigate(['users/targets', this.userId]);
  }
  loadPermission() {
    this.router.navigate(['users/permissions', this.userId]);
  }
  cancel(){
    this.router.navigateByUrl('users');
  }

}