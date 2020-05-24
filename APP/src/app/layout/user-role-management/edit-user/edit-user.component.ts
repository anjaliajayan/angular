import { Component, OnInit } from '@angular/core';
import { UserRoleService } from 'src/app/shared/services/user-role.service';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';
import { saluteNames, statusRow } from '../../../shared/utils/common';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";

declare const moment: any;
declare const $: any;

export interface Country {
  Country: string;
  Alpha_2: string;
  Alpha_3: string;
  Numeric_code: string;
  Latitude: string;
  Longitude: string;
}

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  editBusinessForm: FormGroup;
  submitted: any = false;
  countries: Country[] = [];
  settings: any;
  yearList: any;
  saluteNames: any = saluteNames;
  statusRow: any = statusRow;
  rolePermissions: any = [];
  userInfo: any = {};
  agents: any;
  filteredCountry: Observable<Country[]>;

  constructor(private activeRoute: ActivatedRoute,
    private toastr: ToastrService,
    private userRoleService: UserRoleService,
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private router: Router) {
    // get user id
    let userId = this.activeRoute.snapshot.params.id;
    // Get country list
    this.getUserInfo(userId);
    const selectAllControl = new FormControl(false);

    // business user form
    this.editBusinessForm = this.formBuilder.group({
      id: [''],
      salute: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      sex: ['', [Validators.required]],
      initial: [''],
      mobile: ['', [Validators.required]],
      email: [{ value: this.userInfo.email, disabled: true }],
      password: ['', Validators.required],
      password_confirmation: [''],
      username: [{ value: this.userInfo.username, disabled: true }],
      address_1: ['', [Validators.required]],
      address_2: [''],
      country_id: [this.userInfo.country_id, [Validators.required]],
      menu_permission: new FormArray([]),
      selected_permissions: [''],
      organisation_id: [''],
      is_active: [this.userInfo.is_active],
      selectAll: selectAllControl,
      skills: this.formBuilder.array([
        //this.getSkillFormGroup()
      ])

    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.editBusinessForm.controls; }
  get password() { return this.editBusinessForm.get('password'); }
  get password_confirmation() { return this.editBusinessForm.get('password_confirmation'); }

  ngOnInit() {
    this.countryList();
    this.agentsList();
    this.getYearList();
    this.onChanges();
  }

  // get current logedin user info and update profile
  getUserInfo(userId: Number) {
    this.userRoleService.getUser(userId).subscribe((result: any) => {

      if (result.type != 'error') {
        this.userInfo = result.data;
        const { salute, first_name, last_name, initial, email, address_1, address_2, country_id, mobile, username, organisation_id, menu_permission, sex, is_active, target_amount } = this.userInfo;

        this.editBusinessForm.patchValue({
          id: userId,
          salute,
          initial,
          first_name,
          last_name,
          email,
          address_1,
          address_2,
          country_id,
          mobile,
          username,
          organisation_id,
          // is_active:this.userInfo.is_active,
          is_active,
          sex,
        });

        let targetAmountArray = JSON.parse(this.userInfo.target_amount);
        if (targetAmountArray) {
          for (let line = 0; line < targetAmountArray.length; line++) {
            this.skill.push(this.formBuilder.group(targetAmountArray[line]));
          }
        } else {
          this.addSkill();
        }
        // set role and permissions
        // this.getSettings();

        this.rolePermissions = {
          data: JSON.parse(menu_permission),
          keys: Object.keys(JSON.parse(menu_permission))
        }

      } else {
        this.toastr.error(`${result.msg}`, `${result.msg}`, {
          timeOut: 1000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });

        this.router.navigate(['user-role-management/list-user']);
      }
    });
  }

  getYearList() {
    let list = [];
    var d = new Date();
    var getFullYear = d.getFullYear();
    for (var i = getFullYear; i <= getFullYear + 10; i++) {
      list.push(i);
    }
    this.yearList = list;
  }

  // Skills start here
  get skill(): any {
    return this.editBusinessForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skill.push(this.getSkillFormGroup());
  }


  getSkillFormGroup() {
    return this.formBuilder.group({
      year: [''],
      month: [''],
      target_amount: ['']
    })
  }

  removeSkill(index) {
    if (index > 0) this.skill.removeAt(index);
  }

  onChanges(): void {
    // Subscribe to changes on the selectAll checkbox
    // this.editBusinessForm.get('selectAll').valueChanges.subscribe(bool => {
    //   this.editBusinessForm
    //     .get('menu_permission')
    //     .patchValue(Array(this.rolePermissions.length).fill(bool), { emitEvent: false });
    // });

    // Subscribe to changes on the preference checkboxes
    // this.editBusinessForm.get('menu_permission').valueChanges.subscribe(val => {
    //   const allSelected = val.every(bool => bool);
    //   if (this.editBusinessForm.get('selectAll').value !== allSelected) {
    //     this.editBusinessForm.get('selectAll').patchValue(allSelected, { emitEvent: false });
    //   }
    // });
  }

  // get country list
  countryList() {
    this.commonService.getCountryList().subscribe((result: any) => {
      this.countries = result.countries;
    });
  }

  // get agents
  agentsList() {
    this.commonService.getAgentsList().subscribe((result: any) => {
      this.agents = result.listData;
    });
  }

  getSettings() {
    let permArr = { "name": ['RolePermissions'] };
    let existsPerm: any;
    existsPerm = JSON.parse(this.userInfo.menu_permission);

    this.commonService.getSettingList(permArr).subscribe((result: any) => {
      this.settings = result.listData;
      var rolesObj = JSON.parse(result.listData.find(list => list.name == 'RolePermissions').value);
      this.rolePermissions = Object.entries(rolesObj).map(([key, value]) => ({ key, value }));

      this.rolePermissions.forEach((element, i) => {

        let trueFalse = false;
        let keyOfRole = element.key;

        if (typeof existsPerm[keyOfRole] != undefined) {
          if (existsPerm[keyOfRole] == 1) {
            trueFalse = true;
          }
        }
        const control = new FormControl(trueFalse);
        (this.editBusinessForm.controls.menu_permission as FormArray).push(control);
      });
    })
  }

  updateBussiessUser() {
    this.submitted = true;
    // console.log("--this.editBusinessForm", this.editBusinessForm)

    if (this.editBusinessForm.invalid) {
      return;
    }

    // Filter out the unselected ids of role permissions
    let keys = this.rolePermissions.keys;
    for (let ind = 0; ind < keys.length; ind++) {
      const _key = keys[ind];
      let obj = this.rolePermissions.data[_key];
      let trueFalse = (obj.checked) ? 1 : 0;
      obj.allowed = trueFalse;

      for (let ind2 = 0; ind2 < obj.accessType.length; ind2++) {
        const accType = obj.accessType[ind2];
        let chTrueFal = (accType.checked) ? 1 : 0;
        accType.allowed = chTrueFal;
        if (accType.accessType != undefined) {
          for (let ind3 = 0; ind3 < accType.accessType.length; ind3++) {
            const accTypeChl = accType.accessType[ind3];
            let chTrueFal = (accTypeChl.checked) ? 1 : 0;
            accTypeChl.allowed = chTrueFal;
          }
        }
      }
    }

    let updateForm: any;
    updateForm = this.editBusinessForm.value;
    updateForm.selected_permissions = this.rolePermissions.data;

    this.userRoleService.updateUser(updateForm).subscribe((result: any) => {
      if (result.type == 'error') {
        this.toastr.error(`${result.msg}`, `${result.msg}`, {
          timeOut: 1000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
      } else {
        this.toastr.info(`${result.msg}`, `${result.msg}`, {
          timeOut: 1000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
        this.router.navigate(['user-role-management/list-user'])
      }
    })

  }

  validatePassword() {
    const { password, password_confirmation } = this;
    if (!password_confirmation.dirty && !password.dirty) {
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

  checkAllChild(event: any, index: any) {
    let trueFalse = event.target.checked;
    index.checked = trueFalse;
    if (trueFalse == false) {
      index.accessType.map((ele, ind) => {
        ele.checked = trueFalse;

        if (ele.accessType != undefined) {
          ele.accessType.map((eleCh, ind) => {
            eleCh.checked = trueFalse;
          });
        }
      });
    }
  }

  checkChild(event: any, obj: any, ch?: boolean) {
    let trueFalse = event.target.checked;
    obj.checked = trueFalse;
    if (ch) {
      if (obj.accessType != undefined) {
        obj.accessType.map((ele, ind) => {
          ele.checked = trueFalse;
        });
      }
    }
  }

  ngAfterViewInit() {
    var scope = this;
    $(document).ready(function () {
      <any>($('.menu .item')).tab();
      <any>($('.ui.checkbox')).checkbox();
      <any>($('.ui.dropdown')).dropdown();
    });

    // console.log("this.rolePermissions");
    // console.log(this.rolePermissions);
  }

}
