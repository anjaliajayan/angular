import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { UserRoleService } from 'src/app/shared/services/user-role.service';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';
import { preferedService, prepareGlobals } from '../../../shared/utils/common';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { OrganizationHierarchyService } from 'src/app/shared/services/organization/organization-hierarchy.service';
import { Globals } from 'src/app/shared/utils/globals';

declare const moment: any;
declare const $: any;

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  addBusinessForm: FormGroup;
  addCorporateForm: FormGroup;
  submitted: any = false;
  submittedCorp: any = false;
  countries: any;
  organizationHierarchy: any;
  organizationHierarchyTemplate: any;
  listDataCorpBusiness: any;
  settings: any;
  childOrganisations: any;
  airlinesList: any;
  rficDatas: any;
  yearList: any;
  // seatPreference: any = seatPreference;
  // hotelLoyalty: any = hotelLoyalty;
  // preferredClass: any = preferredClass;
  // saluteNames: any = saluteNames;
  // statusRow: any = statusRow;
  preferedService: any = preferedService;
  rolePermissions: any = [];
  preferredServiceConference: any = false;
  preferredServiceHotel: any = false;
  preferredServiceInsurances: any = false;
  emailCheck: boolean = false;
  userCheck: boolean = false;

  // multiple selection box
  dropdownSettings = {};
  isAdmin: any = false;
  currentOrgId: any;
  globals: Globals;
  constructor(private cd: ChangeDetectorRef, private toastr: ToastrService, private userRoleService: UserRoleService, private formBuilder: FormBuilder, private commonService: CommonService, private router: Router, private orgHierarchyService: OrganizationHierarchyService) {
    this.globals = prepareGlobals();
    // get from storeage then 
    this.isAdmin = this.globals.getUserAdmin();
    this.currentOrgId = this.globals.getOrganisationID();

    const selectAllControl = new FormControl(false);
    const showFlights = new FormControl(false);
    const showHotels = new FormControl(false);
    // business user form
    this.addBusinessForm = this.formBuilder.group({
      user_type: [1],
      salute: [''],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      sex: [''],
      initial: [''],
      mobile: ['', [Validators.required]],
      email: ['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
// Minimum eight characters, at least one letter and one number:
      password: ['', [Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password_confirmation: ['', [Validators.required]],
      username: ['', [Validators.required]],
      address_1: ['', [Validators.required]],
      address_2: [''],
      country_id: ['', [Validators.required]],
      menu_permission: new FormArray([]),
      selected_permissions: [''],
      organisation_id: ['', [Validators.required]],
      is_active: [''],
      selectAll: selectAllControl,
      skills: this.formBuilder.array([
        this.getSkillFormGroup()
      ])
    });

    // corporate user form
    this.addCorporateForm = this.formBuilder.group({
      user_type: [2],
      salute: [''],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', [Validators.required]],
      confirmPassword: ['', Validators.required],
      username: ['', Validators.required],
      dob: [''],
      cost_center: [''],

      passport_country_id: ['', Validators.required],
      is_active: ['', Validators.required],
      corporate_id: [''],
      corporate_hierarchy: [''],
      employee_id: ['', Validators.required],
      company_name: [''],
      business_unit: [''],
      company_code: [''],
      bussiness_unit: [''],
      uploadPhoto: [''],
      travel_arranger: [''],
      passport_number: ['', Validators.required],
      issue_date: [''],
      expiry_date: [''],
      passport_copy: [''],
      passport_country: [''],
      prefered_services: this.formBuilder.array(this.preferedService.map(x => !1)),
      multi_flights: this.formBuilder.array([this.initMultiFlights()]),
      multi_hotels: this.formBuilder.array([this.initMultiHotels()]),
      super_travel_arranger: [''],
      profile_image: [''],
      // approval_hierarchy:this.formBuilder.array([])
      approval_hierarchy: new FormArray([]),
      checkFlights: showFlights,
      checkHotels: showHotels
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.addBusinessForm.controls; }
  get fC() { return this.addCorporateForm.controls; }

  get password() { return this.addBusinessForm.get('password'); }
  get password_confirmation() { return this.addBusinessForm.get('password_confirmation'); }

  ngOnInit() {
    this.getUserInfo();
    // Get country list
    this.countryList();
    this.getSettings();

    // this.getRficDetails();
    // this.getAirlines();
    this.getYearList();

    this.onChanges();
    this.childOrganisationsList();

    // Multiple selection 
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'sub_code',
      textField: 'commercial_name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

  }

  // get current logedin user info and update profile
  getUserInfo() {
    this.userRoleService.getLogedInUser().subscribe((result: any) => {
      const { organisation_id } = result.data;
      this.addBusinessForm.patchValue({
        organisation_id
      });
    });
  }

  initMultiFlights() {
    return this.formBuilder.group({
      frequent_flyer_type: [''],
      frequent_flyer: [''],
      meal_preference: [''],
      seat_preference: ['']
    });
  }

  initMultiHotels() {
    return this.formBuilder.group({
      loyality_program: [''],
      loyality_number: ['']
    });
  }

  get multiFlights(): any {
    return this.addCorporateForm.get('multi_flights') as FormArray;
  }

  get multiHotels(): any {
    return this.addCorporateForm.get("multi_hotels") as FormArray;
  }


  addMultiFlights() {
    this.multiFlights.push(this.initMultiFlights());
  }

  addMultiHotels() {
    this.multiHotels.push(this.initMultiHotels());
  }

  removeMultiFlights(index) {
    if (index > 0) this.multiFlights.removeAt(index);
  }

  removeMultiHotels(index) {
    if (index > 0) this.multiHotels.removeAt(index);
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
    return this.addBusinessForm.get('skills') as FormArray;
  }
  addSkill() {
    let skillsArray = <FormArray>this.addBusinessForm.controls.skills;
    if (skillsArray.status == 'INVALID') {
      Swal.fire('Oops', `Please select all required fields.`, 'error');
      return;
    }
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
    this.addBusinessForm.get('selectAll').valueChanges.subscribe(bool => {
      this.addBusinessForm
        .get('menu_permission')
        .patchValue(Array(this.rolePermissions.length).fill(bool), { emitEvent: false });
    });

    this.addCorporateForm.get('checkFlights').valueChanges.subscribe(bool => {
      if (bool) {
        // 
      }
    });

    this.addCorporateForm.get('checkHotels').valueChanges.subscribe(bool => {
      if (bool) {
        //
      }
    });

    // Subscribe to changes on the preference checkboxes
    this.addBusinessForm.get('menu_permission').valueChanges.subscribe(val => {
      const allSelected = val.every(bool => bool);
      if (this.addBusinessForm.get('selectAll').value !== allSelected) {
        this.addBusinessForm.get('selectAll').patchValue(allSelected, { emitEvent: false });
      }
    });
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

  // get country list
  countryList() {
    this.commonService.getCountryList().subscribe((result: any) => {
      this.countries = result.countries;
      console.log("this.countries::::::: ",this.countries)
    });
  }

  // get agents
  childOrganisationsList() {
    this.orgHierarchyService.GetAllOrganizationHierarchy().subscribe((result: any) => {
      this.childOrganisations = result.childs;

      // selected default current organization
      this.addBusinessForm.patchValue({ organisation_id: this.currentOrgId });
      this.changePermissions(this.currentOrgId);
    });
  }

  getSettings() {
    let permArr = { "name": ['ParentOrgnisation', 'DisplayField'] };
    this.commonService.getSettingList(permArr).subscribe((result: any) => {
      this.settings = result.listData;
      var displayField = JSON.parse(result.listData.find(list => list.name == 'DisplayField').value);
      this.preferredServiceConference = displayField.Corporate.Conference;
      this.preferredServiceHotel = displayField.Corporate.Hotel.Active;
      // this.preferredServiceInsurances = displayField.Corporate.Insurances.Active;
    })
  }

  getRficDetails() {
    this.commonService.getRficDetails().subscribe((result: any) => {
      this.rficDatas = result.listData;
    })
  }
  // Get airlines data from json files
  getAirlines() {
    this.commonService.getAirlines().subscribe((result: any) => {
      this.airlinesList = result.airlines;
    })
  }
  // On change organization get its hierarchy
  getHierarchy(event: any) {
    let id = event.target.value;
    this.commonService.getHierarchyByOrg(id).subscribe((result: any) => {
      this.organizationHierarchy = result.listData;
      this.listDataCorpBusiness = result.listDataCorpBusiness;
    });
  }

  // get getHierarchyLevel
  showHierarcy: any = false;
  getHierarchyLevel(event: any) {
    let id = event.target.value;
    this.commonService.getHierarchyByApproval(id).subscribe((result: any) => {
      this.organizationHierarchyTemplate = JSON.parse(JSON.stringify(result.listData.template_value));
      this.showHierarcy = true;
    })
  }

  isTraveler: any = false;
  checkSuperTravel(event: any) {
    if (event.target.checked) {
      return this.isTraveler = true;
    }
    return this.isTraveler = false;
  }

  // Pur username accroding to employee code
  autoCreateUsername(event: Event) {
    let username = (event.target as HTMLInputElement).value;
    this.addCorporateForm.patchValue({
      username: username
    });
  }

  getBranchDetail(event: Event) {
    let branchId = (event.target as HTMLInputElement).value;
    const getBranchData = this.listDataCorpBusiness.find(element => element.id = branchId);
    this.addCorporateForm.patchValue({
      company_code: getBranchData.company_code,
      business_unit: getBranchData.business_unit
    });
  }
  get demoArray() {
    return this.addBusinessForm.get('menu_permission') as FormArray;
  }
  // get role and permission according to agent
  changePermissions(agentId: any) {
    // getRolePermissions
    this.userRoleService.getRolePermissionsNew(agentId).subscribe((result: any) => {
      this.rolePermissions = {
        data: result.data,
        keys: Object.keys(result.data)
      }
    })
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

  addBussiessUser() {
    this.submitted = true;
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

    if (this.addBusinessForm.invalid) {
      return;
    }
    this.addBusinessForm.patchValue({
      selected_permissions: this.rolePermissions.data
    });
    this.userRoleService.addBusinessUser(this.addBusinessForm.value).subscribe((result: any) => {
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

  // Submit corporated user data
  addCorporateUser() {
    this.submittedCorp = true;

    if (this.addCorporateForm.invalid) {
      return;
    }
    // const formData = new FormData();
    // formData.append('file', this.addCorporateForm.get('profile').value);
    this.userRoleService.addCorporateUser(this.addCorporateForm.value).subscribe((result: any) => {
      console.log("result---", result);
    })
  }

  get email() { return this.addBusinessForm.get('email'); }

  checkEmail() {
    const email = this;
    if (!email.email.dirty) {
      return;
    }
    const emailVal = email.email.value;
    this.userRoleService.isUniqueEmail(emailVal).subscribe((res: any) => {

      if (res.status == 400) {
        this.emailCheck = true
      } else {
        this.emailCheck = false;
      }
    })
    //this.emailCheck = false;
  }

  get userName() { return this.addBusinessForm.get('username'); }
  get username() { return this.addBusinessForm.get('username'); }
  get first_name() { return this.addBusinessForm.get('first_name'); }
  get last_name() { return this.addBusinessForm.get('last_name'); }
  get mobile() { return this.addBusinessForm.get('mobile'); }
  get address_1() { return this.addBusinessForm.get('address_1'); }


  checkUser() {
    const userName = this;
    if (!userName.userName.dirty) {
      return;
    }
    const userNameVal = userName.userName.value;
    this.userRoleService.isUniqueUsername(userNameVal).subscribe((res: any) => {
      if (res.status == 400) {
        this.userCheck = true
      } else {
        this.userCheck = false;
      }
    })
    //this.userCheck = false;
  }

  checkPasswordCorp(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.get('password_corp').value;
    let confirmPass = group.get('confirmPassword_corp').value;

    return pass === confirmPass ? null : { notSame: true }
  }

  ngAfterViewInit() {
    var scope = this;
    $(document).ready(function () {
      $('.menu .item').tab();
      $('.ui.checkbox').checkbox();
      $('.ui.dropdown').dropdown();

      $(function () {

        $('input[name="issue_date"]').daterangepicker({
          singleDatePicker: true,
          showDropdowns: true,
          minYear: 1901,
          maxYear: parseInt(moment().format('YYYY'), 10),
        }, function (start, end, label) {
          var years = moment().diff(start, 'years');
          scope.addCorporateForm.patchValue({ 'issue_date': moment(start).format('YYYY-MM-DD') });
        });
        $('input[name="expiry_date"]').daterangepicker({
          singleDatePicker: true,
          showDropdowns: true,
          minYear: 1901,
          maxYear: parseInt(moment().format('YYYY'), 10),
        }, function (start, end, label) {
          var years = moment().diff(start, 'years');
          scope.addCorporateForm.patchValue({ 'expiry_date': moment(start).format('YYYY-MM-DD') });
        });
        $('input[name="dob"]').daterangepicker({
          singleDatePicker: true,
          showDropdowns: true,
          minYear: 1901,
          maxDate: new Date,
          maxYear: parseInt(moment().format('YYYY'), 10)
        }, function (start, end, label) {
          var years = moment().diff(start, 'years');
          scope.addCorporateForm.patchValue({ 'dob': moment(start).format('YYYY-MM-DD') });
        });

        $('.multiTaginput').dropdown({
          allowAdditions: true,
        });
        // $('.ui.dropdown').dropdown({
        //   allowAdditions: true,
        // });

        $(".checkFlights").on("change", function (event) {
          $('.multiTaginput').dropdown({
            allowAdditions: true,
          });
          $('.ui.dropdown').dropdown({
            allowAdditions: true,
          });
        })
      });
    });
  }
}
