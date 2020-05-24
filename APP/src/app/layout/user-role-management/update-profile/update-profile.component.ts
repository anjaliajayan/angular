import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';
import { UserRoleService } from 'src/app/shared/services/user-role.service';
import { saluteNames } from '../../../shared/utils/common';
import { CommonService } from 'src/app/shared/services/common.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

declare const $: any;

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  updateProfileForm: FormGroup;
  submitted: any = false;
  userInfo: any = {};
  saluteNames: any = saluteNames;
  countries: any[];

  constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router, private userRoleService: UserRoleService, private commonService: CommonService) {

  }

  createForm() {
    this.updateProfileForm = this.fb.group({
      salute: ['Mr.'],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      mobile:['', [Validators.required, Validators.pattern('[0-9]*')]],
      email: ['',[Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      old_password: [''],//this.asyncValidators.isPasswordMatch
      password: ['',],
      password_confirmation: [''],
      address_1: ['', Validators.required],
      address_2: [''],
      country_id: ['', Validators.required]
    }, {
      // validator: this.checkPasswords
    });
  }
  get f() { return this.updateProfileForm.controls; }

  validateEmailNotTaken(control: AbstractControl) {
    return this.userRoleService.matchOldPassword(control.value).subscribe(resultForm => {
      console.log("---res---", resultForm);
      return resultForm ? null : { emailTaken: true };
    });
  }

  // get country list
  countryList() {
    this.commonService.getCountryList().subscribe((result: any) => {
      this.countries = result.countries;
    });
  }

  ngOnInit() {
    // Get country list
    this.getUserInfo();
    this.countryList();
    this.createForm();
  }
  // get current logedin user info and update profile
  getUserInfo() {
    this.userRoleService.getLogedInUser().subscribe((result: any) => {
      this.userInfo = result.data;
      console.log("---this.userInfo-----", this.userInfo)
      const { salute, first_name, last_name, email, address_1, address_2, country_id, mobile } = this.userInfo;
      this.updateProfileForm.patchValue({
        salute,
        first_name,
        last_name,
        email,
        address_1,
        address_2,
        country_id,
        mobile
      });

    });
  }

  //isUniqueEmail
  checkPasswords(group: FormGroup, userService: UserRoleService) { // here we have the 'passwords' group
    let pass = group.get('password').value;
    let oldPass = group.get('old_password').value;
    if (oldPass != undefined && pass != undefined) {
      let confirmPass = group.get('password_confirmation').value;
      // check user old password is matched or not
      this.userRoleService.matchOldPassword(oldPass).subscribe((matchPass: any) => {
        console.log("---matchPass", matchPass);
      })
      return pass === confirmPass ? null : { notSame: true }
    }
    return null;
  }


  onSubmit() {
    this.submitted = true;
    if (this.updateProfileForm.invalid) {
      return;
    }

    this.userRoleService.updateLogedInUser(this.updateProfileForm.value).subscribe((result: any) => {
      if (result.type == 'error') {
        this.toastr.error(`${result.msg}`, `${result.msg}`, {
          timeOut: 10000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
      } else {
        this.toastr.info(`${result.msg}`, `${result.msg}`, {
          timeOut: 10000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
        this.router.navigate(['user-role-management/list-user'])
      }

    });


  }

  get old_password() { return this.updateProfileForm.get('old_password'); }
  get password() { return this.updateProfileForm.get('password'); }
  get password_confirmation() { return this.updateProfileForm.get('password_confirmation'); }
  get first_name() { return this.updateProfileForm.get('first_name'); }
  get last_name() { return this.updateProfileForm.get('last_name'); }
  get mobile() { return this.updateProfileForm.get('mobile'); }
  get address_1() { return this.updateProfileForm.get('address_1'); }
  
  requiredPassword() {
    const { old_password, password, password_confirmation } = this;
    if (!old_password.dirty) {
      return;
    }
    if (old_password.value) {
      password.setErrors({ required: true });
      password_confirmation.setErrors({ required: true });
    } else {
      password.setErrors(null);
      password_confirmation.setErrors(null);
    }
  }

  validatePassword() {
    const { password, password_confirmation } = this;
    if (!password_confirmation.dirty) {
      return;
    }
    const hasError = password.value !== password_confirmation.value;
    if (password_confirmation.errors) {
      if (hasError) {
        password_confirmation.errors.unmatched = true;
      } else {
        delete password_confirmation.errors.unmatched;
        if (Object.keys(password_confirmation.errors).length === 0) {
          password_confirmation.setErrors(null);
        }
      }
    } else if (hasError) {
      password_confirmation.setErrors({ unmatched: true });
    }
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $('.ui.dropdown').dropdown();
      $('.test.checkbox').checkbox('attach events', '.toggle.button');
    });
  }

}
