import {ProfileManagementService} from './../../../../shared/services/profile-management/profile-management.service';
import {Component,OnInit,ViewChild,ElementRef,Output,EventEmitter} from '@angular/core';
import {FormArray, FormBuilder, Validators, Form} from '@angular/forms';
import {Router, ActivatedRoute} from '@angular/router';

import * as _ from 'lodash';
import {ToastrService} from 'ngx-toastr';
import {CommonService} from '../../../../shared/services/common.service';
import { ModalService } from 'src/app/layout/_modal';

declare const moment: any;
declare const $: any;

@Component({
  selector: 'app-new-traveller-profile',
  templateUrl: './new-traveller-profile.component.html',
  styleUrls: ['./new-traveller-profile.component.scss']
})
export class NewTravellerProfileComponent implements OnInit {


  newTravellerProfileObj: any = {};
  countries: Array<any> = [];
  cities: Array<any> = [];
  airlinesArr :Array<any> = [];
  travellerProfileId;
  newTravellerProfileId;
  @Output() sendDataToParent = new EventEmitter<string>();
  @ViewChild('tab', {static: false}) tab: ElementRef;
  @ViewChild('tabContent', {static: false}) tabContent: ElementRef;
  showAddAirlines: boolean = false;
  showAddHotels: boolean = false;
  showCompanyid: boolean = false;
  showDeleteIcon: boolean = false;
  showProfileId: boolean = false;
  public message: string;
  public imagePath;
  public imagePath2;
  public imagePath3;
  imgURL: any;
  imgURL2: any;
  imgURL3: any;
  profileID:any;
  completeURL:any=window.location.origin;
  openhref:any;
  isSubmitted:boolean=false;
  newTravellerResp:any;

  constructor(
    private router: Router,
    private CommonService: CommonService,
    private route: ActivatedRoute,
    public ProfileManagementService: ProfileManagementService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private el: ElementRef,
    private modalService: ModalService,
    private activeRoute: ActivatedRoute,
  ) {

    // let uniqueProfileID = Math.random().toString(36).substring(7);
    // this.newTravellerProfileId = uniqueProfileID;

    // this.route.queryParams.subscribe(params => {

    //   this.newTravellerProfileForm.patchValue({
    //     profile_id:params.profile_id,
    //     salutation: params.salutation,
    //     first_name: params.first_name,
    //     status:0,
    //     last_name: params.last_name,
    //     a_dob: params.a_dob,
    //     gender: params.gender,
    //     passengerType: params.passengerType,
    //     companyName: params.companyName,
    //     marital_status: params.marital_status,
    //     nationality: params.nationality,
    //     address: params.address,
    //     dob: params.dob,
    //     list_country: params.list_country,
    //     postal_code: params.postal_code,
    //     state: params.state,
    //     city_id: params.city_id,
    //     street: params.street,
    //     mobile_number: params.mobile_number,
    //     emergency_contact: params.emergency_contact,
    //     email_address1: params.email_address1,
    //     email_address2: params.email_address2,
    //     relationship: params.relationship,
    //     associate_profile: params.associate_profile,
    //     document1: params.document1,
    //     document2: params.document2,
    //     document3: params.document3,
    //     national_id: params.national_id,
    //     image1: params.image1,
    //     passport: params.passport,
    //     image2: params.image2,
    //     driving_licence: params.driving_licence,
    //     image3: params.image3,
    //     national_id_issueDate: params.national_id_issueDate,
    //     national_id_expiryDate: params.national_id_expiryDate,
    //     passport_issueDate: params.passport_issueDate,
    //     passport_expiryDate: params.passport_expiryDate,
    //     driving_licence_issueDate: params.driving_licence_issueDate,
    //     driving_licence_expiryDate: params.driving_licence_expiryDate,
    //     national_id_placeofissue: params.national_id_placeofissue,
    //     passport_placeofissue: params.passport_placeofissue,
    //     driving_licence_placeofissue: params.driving_licence_placeofissue,
    //     passenger_type: params.passenger_type,
    //     company_name: params.company_name,
    //     designation: params.designation,
    //     traveller_type: params.traveller_type,
    //     company_emailid: params.company_emailid,
    //     traveller_remarks: params.traveller_remarks,
    //     other_remarks: params.other_remarks,
    //     company_address: params.company_address,
    //     employeeId: params.employeeId,
    //     department: params.department,
    //     company_number: params.company_number,
    //     cabin_class: params.cabin_class,
    //     meal_type: params.meal_type,
    //     meal_type2: params.meal_type2,
        
    //     classification: params.classification,
    //     airline_details:params.airline_details,
    //     corporate: params.corporate,
    //     corporate_code: params.corporate_code,
    //     airlinePreference: params.airlinePreference,
    //     seat_preference:params.seat_preference,
    //     country_code:params.country_code,
    //     corporate_profileid:params.corporate_profileid,
    //     corporate_supplierid:params.corporate_supplierid,
    //     country_id:params.country_id
    //   });

    //   let airlineDetails = this.parsingArrayParams(params.airline_details, this.airline_details);
    //   let corporateCode = this.parsingArrayParams(params.corporate_code, this.corporate_code);
    //   let corporate_profileid = this.parsingArrayParams(params.corporate_profileid, this.corporate_profileid);
    //   let corporate_supplierid = this.parsingArrayParams(params.corporate_supplierid, this.corporate_supplierid);
    // });

    $(document).ready(() => {
      $('.ui.rating').rating();
    })
  }


  ngOnInit() {
    this.profileID= this.activeRoute.snapshot.params.id;
    this.fetchTravellerProfile(this.profileID)
    this.getCountries() ;
     this.searchAirline();
     this.showSaveButton()
     this.getTargetFormGroup()
    
  }

  ngAfterViewInit() {
    $('.menu .item').tab();
    this.loadEndDate();
    this.loadStartDate();
    $('checkbox').checkbox();
    $(document).ready(function () {
      $('.ui.dropdown').dropdown();
      $('.ui.dropdown').dropdown('refresh');
      $('.dropdownThree').dropdown({ placeholder: 'Preferred airline' });
      $('.ui.checkbox').checkbox();
    
    })
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
        console.log('There is something wrong with the passing of arrays')
      }
    }
  }

 
  newTravellerProfileForm = this.fb.group({
    id: [''],
    salutation: ['', Validators.required],
    first_name: ['', Validators.required],
    middle_name:[''],
    last_name: ['' , Validators.required],
    a_dob: ['' , Validators.required],
    status:[''],
    gender: ['', Validators.required],
    marital_status: [''],
    nationality: ['', Validators.required],
    passengerType: [''],
    address: [''],
    list_country: [''],
    postal_code: ['', Validators.pattern('[0-9]*')],
    state: [''],
    city_id: [''],
    street: [''],
    mobile_number: ['', Validators.pattern('[0-9]*')],
    emergency_contact: ['', Validators.pattern('[0-9]*')],
    email_address1: ['',[ Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    email_address2: ['',[ Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    relationship: [''],
    associate_profile: [''],
    document1: [''],
    image1: [''],
    document2: [''],
    image2: [''],
    document3: [''],
    image3: [''],
    national_id: [''],
    passport: [''],
    driving_licence: [''],
    national_id_issueDate: [''],
    national_id_expiryDate: [''],
    passport_issueDate: [''],
    passport_expiryDate: [''],
    driving_licence_issueDate: [''],
    driving_licence_expiryDate: [''],
    national_id_placeofissue: [''],
    passport_placeofissue: [''],
    driving_licence_placeofissue: [''],
    passenger_type: ['' ],
    company_name: [''],
    designation: [''],
    traveller_type: [''],
    company_emailid: [''],
    traveller_remarks: [''],
    other_remarks: [''],
    company_address: [''],
    employeeId: [''],
    department: [''],
    company_number: [''],
    cabin_class: [''],
    meal_type: [''],
    meal_type2: [''],
    classification: [''],
    corporate: [''],
    country_id: [''],
    seat_preference:[''],
    country_code:[''],
    airline_id:[''],
    airline_details: this.fb.array([this.fb.group(this.initAirlineDetails())]),
    corporate_code:this.fb.array([this.fb.group(this.initCorporateCode())]),
    airlinePreferences: this.fb.array([this.initAirlinePreferences()]),
    corporate_profileid:this.fb.array([this.fb.group(this.initCorporateProfileId())]),
    corporate_supplierid:this.fb.array([this.fb.group(this.initCorporateSupplierId())]),
    nationalID_doc:['National ID'],
    passport_doc:['Passport ID'],
    driving_doc:['Driving License']
    

  });

  uploadImage(files, field) {
    var file_size = files[0].size;
    console.log("file_size::::",file_size);

    if (files.length === 0)
      return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.toastr.error(`Invalid image format`, `Error `, {
        timeOut: 5000,
        progressBar: false,

        positionClass: 'toast-top-right'
      })
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.CommonService.uploadImagetoAWS(reader.result).subscribe((result: any) => {
        if (field == 'imageFile') {
          this.newTravellerProfileForm.patchValue({
            image1: result.image
          });
        }
      }, err => {
        this.toastr.error(`Error uploading image, Try any other image`, `Error `, {
          timeOut: 5000,
          progressBar: false,

          positionClass: 'toast-top-right'
        })
      });
    }
  }



  uploadImage2(files, field) {
    if (files.length === 0)
      return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.toastr.error(`Invalid image format`, `Error `, {
        timeOut: 5000,
        progressBar: false,

        positionClass: 'toast-top-right'
      })
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.CommonService.uploadImagetoAWS(reader.result).subscribe((result: any) => {

        if (field == 'imageFile2') {
          this.newTravellerProfileForm.patchValue({
            image2: result.image
          });
        }
      }, err => {
        this.toastr.error(`Error uploading image, Try any other image`, `Error `, {
          timeOut: 5000,
          progressBar: false,

          positionClass: 'toast-top-right'
        })
      });
    }
  }

  uploadImage3(files, field) {
    if (files.length === 0)
      return;
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.toastr.error(`Invalid image format`, `Error `, {
        timeOut: 5000,
        progressBar: false,
        positionClass: 'toast-top-right'
      })
      return;
    }
    
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.CommonService.uploadImagetoAWS(reader.result).subscribe((result: any) => {
        if (field == 'imageFile3') {
          this.newTravellerProfileForm.patchValue({
            image3: result.image
          });
        }
      }, err => {
        this.toastr.error(`Error uploading image, Try any other image`, `Error `, {
          timeOut: 5000,
          progressBar: false,

          positionClass: 'toast-top-right'
        })
      });
    }
  }


  showDetailModal: Boolean = false;
  viewUser(modalId:any){
    this.showDetailModal = true;
   // window.location.href = '{{ newTravellerProfileForm.controls.image1.value }}';
 //href="{{ newTravellerProfileForm.controls.image1.value }}"
    this.modalService.open(modalId);

  }


  closeModal(modalId: string) {
    this.modalService.close(modalId);
  }

  getCountries() {
    this.CommonService.getCountryList().subscribe((result: any) => {
      this.countries=result.countries;
    });
  }

  searchAirline() {

    this.CommonService.getAirlines().subscribe((_result: any) => {
      this.airlinesArr = _result.airlines;
    });
  }

  
  passCountryId(val:any) {
      $(".renew-city .text").text('');
      $(".renew-city .text").addClass('default');
      $(".renew-city .default.text").text('City');
      this.CommonService.getCityList(val).subscribe((result: any) => {
        this.cities=result.cities;
      });
  }

  get gfc() { return this.newTravellerProfileForm.controls };
  
  onSubmit(data) {
     console.log("this.newTravellerProfileForm::::::::",this.newTravellerProfileForm.value)
    this.isSubmitted=true;
    if (this.newTravellerProfileForm.invalid) {
      this.toastr.warning(`Please fill all mandatory fields`, `Error `, {
        timeOut: 10000,
        progressBar: false,
        positionClass: 'toast-bottom-right'
      })
      return;
    }

  this.ProfileManagementService.NewTravellerProfile(data).subscribe((result: any) => {
    if(result.status == 200){

      console.log("traveller prfile saved data::",result.traveller);
      this.newTravellerResp=result.traveller;
      this.toastr.success(`${result.msg}`, ` `, {
        timeOut: 10000,
        progressBar: false,
        positionClass: 'toast-bottom-right'
      });
      this.router.navigate(['/profile-management/retrieve-profile'])
    }else{
      this.toastr.error(`${result.msg}`, ` `, {
        timeOut: 10000,
        progressBar: false,
        positionClass: 'toast-bottom-right'
      })
    }

    });
  }
 

  showAirlines() {
    this.showAddAirlines = !this.showAddAirlines;
  }

  showHotels() {
    this.showAddHotels = !this.showAddHotels;
  }

  showCompany() {
    this.showCompanyid = !this.showCompanyid;
  }

  showSaveButton(){
    // this.profileID = this.activeRoute.snapshot.params.id;
    if(this.profileID === null||this.profileID === undefined )
  {
    this.showProfileId=!this.showProfileId

  }
    
   }


  initAirlinePreferences() {
    return this.fb.group({
      airlinePreference: ""
    })
  }


  initAirlineDetails() {
    return {
      airline_option: [''],
      frequent_flyersoption: ['']

    }
  }

  initCorporateCode() {
    return {
     corporate_code:  ['']

    }
  }

  initCorporateProfileId() {
    return {
      corporate_profileid:  ['']
 
     }

  }

  initCorporateSupplierId(){
    return {
      corporate_supplierid:  ['']
 
     }

  }

  initHotelDetails() {
    return {
      airline_option2: [''],
      frequent_flyersoption2: ['']

    }
  }


  loadStartDate() {

    var scope = this;
    $(function () {
      $('input[name="a_dob"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        // minYear: 1901,
        // startDate: moment(),
        maxDate: moment(),
        // autoUpdateInput: false,
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.newTravellerProfileForm.get('a_dob').setValue(moment(start).format('DD-MM-YYYY'));
      });
    });

    var scope = this;
    $(function () {
      $('input[name="national_id_issueDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment(),
        maxDate: moment(),
        autoUpdateInput: false,
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.newTravellerProfileForm.get('national_id_issueDate').setValue(moment(start).format('DD-MM-YYYY'));
      });
    });

    var scope = this;
    $(function () {
      $('input[name="passport_issueDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment(),
        maxDate: moment(),
        autoUpdateInput: false,
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.newTravellerProfileForm.get('passport_issueDate').setValue(moment(start).format('DD-MM-YYYY'));
      });
    });

    var scope = this;
    $(function () {
      $('input[name="driving_licence_issueDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment(),
        maxDate: moment(),
        autoUpdateInput: false,
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.newTravellerProfileForm.get('driving_licence_issueDate').setValue(moment(start).format('DD-MM-YYYY'));
      });
    });
  }

  loadEndDate() {
    var scope = this;
    $(function () {
      $('input[name="national_id_expiryDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment(),
        minDate: moment(),
        autoUpdateInput: false,
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.newTravellerProfileForm.get('national_id_expiryDate').setValue(moment(start).format('DD-MM-YYYY'));
      });
    });

    var scope = this;
    $(function () {
      $('input[name="passport_expiryDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment(),
        minDate: moment(),
        autoUpdateInput: false,
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.newTravellerProfileForm.get('passport_expiryDate').setValue(moment(start).format('DD-MM-YYYY'));
      });
    });

    var scope = this;
    $(function () {
      $('input[name="driving_licence_expiryDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment(),
        minDate: moment(),
        autoUpdateInput: false,
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.newTravellerProfileForm.get('driving_licence_expiryDate').setValue(moment(start).format('DD-MM-YYYY'));
      });
    });
  }


  get airline_details(): FormArray {
    return this.newTravellerProfileForm.get('airline_details') as FormArray;
  }

 

  
  get corporate_code(): FormArray {
    return this.newTravellerProfileForm.get('corporate_code') as FormArray;
  }
  get airlinePreference(): FormArray {
    return this.newTravellerProfileForm.get('airlinePreference') as FormArray;
  }

  get corporate_profileid(): FormArray {
    return this.newTravellerProfileForm.get('corporate_profileid') as FormArray;
  }


  get corporate_supplierid(): FormArray {
    return this.newTravellerProfileForm.get('corporate_supplierid') as FormArray;
  }
  
  removeMoreAirlines(index) {
    if (index > 0) this.airline_details.removeAt(index);
  }





  addMoreAirlines() {
    this.airline_details.push(this.fb.group(this.initAirlineDetails()));
  }

  addCorporateCode() : void{
    
    this.corporate_code.push(this.fb.group(this.initCorporateCode()));
    this.corporate_profileid.push(this.fb.group(this.initCorporateProfileId()));
    this.corporate_supplierid.push(this.fb.group(this.initCorporateSupplierId()));

  }



  removeItem(index) {
     this.corporate_code.removeAt(index);
     this.corporate_profileid.removeAt(index);
     this.corporate_supplierid.removeAt(index);
  }

  removeCorporateCode(index): void {

  

  this.getItemArray.removeAt(index);
    // if (index > 0) this.getItemArray.removeAt(index);
    console.log("dfsdfsfdfsd")
   }
   get getItemArray() {
    return this.newTravellerProfileForm.get('corporate_code') as FormArray;
  }

  delInput(index: number): void {
    const arrayControl = <FormArray>this.newTravellerProfileForm.controls['corporate_code'];
    arrayControl.removeAt(index);
}
 
  getTargetFormGroup() {
    return this.fb.group({
    
      corporate_code: [null]
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
    console.log(this.el.nativeElement);
    window.document.querySelector('.scrollable-pusher').scrollTo({top: 0, behavior: 'smooth'});
  }

 generatePreference() {

    window.location.href = window.location.href.split('#')[0]+'#DivIdToScroll';
  }

  generateCompany() {
    window.location.href = window.location.href.split('#')[0]+'#company';

  }
  
 generateDocuments() {

    window.location.href = window.location.href.split('#')[0]+'#goToDocuments';
  }

  generatePersonal() {

    window.location.href = window.location.href.split('#')[0]+'#personal';
  }

  setDropDownType(value, type) {

    switch (type) {

      case 'gender':
        this.newTravellerProfileForm.get('gender').setValue(value);
        break;

      case 'nationality':
        this.newTravellerProfileForm.get('nationality').setValue(value);
        console.log(this.newTravellerProfileForm.get('nationality').setValue(value))
        break;
      case 'home':
        this.newTravellerProfileForm.get('home').setValue(value);
        break;
      case 'Official':
        this.newTravellerProfileForm.get('Official').setValue(value);
        break;
      case 'addressList':
        this.newTravellerProfileForm.get('addressList').setValue(value);
        break;
      case 'list_country':
        this.newTravellerProfileForm.get('list_country').setValue(value);
        break;
        case 'relationship':
        this.newTravellerProfileForm.get('relationship').setValue(value);
        break;
      case 'document1':
        this.newTravellerProfileForm.get('document1').setValue(value);
        console.log(this.newTravellerProfileForm.get('document1').setValue(value))
        break;
      case 'document2':
        this.newTravellerProfileForm.get('document2').setValue(value);
        break;
      case 'document3':
        this.newTravellerProfileForm.get('document3').setValue(value);
        break;
      case 'marital_status':
        this.newTravellerProfileForm.get('marital_status').setValue(value);
        break;
      case 'passenger_type':
        this.newTravellerProfileForm.get('passenger_type').setValue(value);
        break;
      case 'traveller_type':
        this.newTravellerProfileForm.get('traveller_type').setValue(value);
        break;
      case 'cabin_class':
        this.newTravellerProfileForm.get('cabin_class').setValue(value);
        break;
      case 'classification':
        this.newTravellerProfileForm.get('classification').setValue(value);
        break;
      case 'meal_type':
        this.newTravellerProfileForm.get('meal_type').setValue(value);
        break;
      case 'meal_type2':
        this.newTravellerProfileForm.get('meal_type2').setValue(value);
        break;
      case 'airline_option':
        this.newTravellerProfileForm.get('airline_option').setValue(value);
        break;
      case 'airline_option2':
        this.newTravellerProfileForm.get('airline_option2').setValue(value);
        break;
      case 'frequent_flyersoption':
        this.newTravellerProfileForm.get('frequent_flyersoption').setValue(value);
        break;
      case 'frequent_flyersoption2':
        this.newTravellerProfileForm.get('frequent_flyersoption2').setValue(value);
        break;
        case 'seat_preference':
          this.newTravellerProfileForm.get('seat_preference').setValue(value);
          break;

          case 'airlinePreference':
          this.newTravellerProfileObj.airlinePreference = this.newTravellerProfileForm.get('airlinePreferences').value;
          break;
    }
  }
  

  updateTravllerProfile() {
    
    this.newTravellerProfileForm.patchValue({

    id:this.profileID,
    });
 
    console.log(this.newTravellerProfileForm.value)
    this.ProfileManagementService.updateProfile(this.newTravellerProfileForm.value).subscribe((result: any) => {
      if (result.status) {
        this.toastr.success(`${result.msg}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-top-right'
        });
        this.router.navigate(['/profile-management/retrieve-profile/']);
      }
      else {
        this.toastr.error(`${result.msg}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-top-right'
        });
      }
    });

   
  }

  fetchTravellerProfile(profile_id: number) {
    this.ProfileManagementService.GetTravellerById(profile_id).subscribe((result: any) => {
      console.log(result)
      if (result.status) {
    
        this.newTravellerProfileObj = result.traveller;
        console.log("result.traveller::::::",  this.newTravellerProfileObj.salutation )
      
        this.newTravellerProfileForm.patchValue({
   
        profile_id:this.newTravellerProfileObj.profile_id,
        salutation: 'Master',
        first_name:  this.newTravellerProfileObj.first_name,
        status:0,
        last_name:  this.newTravellerProfileObj.last_name,
        a_dob:  this.newTravellerProfileObj.a_dob,
        gender:  this.newTravellerProfileObj.gender,
        passengerType:  this.newTravellerProfileObj.passengerType,
        companyName:  this.newTravellerProfileObj.companyName,
        marital_status:  this.newTravellerProfileObj.marital_status,
        nationality:  this.newTravellerProfileObj.nationality,
        address:  this.newTravellerProfileObj.address,
        dob:  this.newTravellerProfileObj.dob,
        list_country:  this.newTravellerProfileObj.list_country,
        postal_code:  this.newTravellerProfileObj.postal_code,
        state:  this.newTravellerProfileObj.state,
        city_id:  this.newTravellerProfileObj.city_id,
        street:  this.newTravellerProfileObj.street,
        mobile_number:  this.newTravellerProfileObj.mobile_number,
        emergency_contact:  this.newTravellerProfileObj.emergency_contact,
        email_address1: this.newTravellerProfileObj.email_address1,
        email_address2: this.newTravellerProfileObj.email_address2,
        relationship: this.newTravellerProfileObj.relationship,
        associate_profile: this.newTravellerProfileObj.associate_profile,
        document1: this.newTravellerProfileObj.document1,
        document2: this.newTravellerProfileObj.document2,
        document3: this.newTravellerProfileObj.document3,
        national_id: this.newTravellerProfileObj.national_id,
        image1: this.newTravellerProfileObj.image1,
        passport: this.newTravellerProfileObj.passport,
        image2: this.newTravellerProfileObj.image2,
        driving_licence: this.newTravellerProfileObj.driving_licence,
        image3: this.newTravellerProfileObj.image3,
        national_id_issueDate: this.newTravellerProfileObj.national_id_issueDate,
        national_id_expiryDate: this.newTravellerProfileObj.national_id_expiryDate,
        passport_issueDate: this.newTravellerProfileObj.passport_issueDate,
        passport_expiryDate: this.newTravellerProfileObj.passport_expiryDate,
        driving_licence_issueDate: this.newTravellerProfileObj.driving_licence_issueDate,
        driving_licence_expiryDate: this.newTravellerProfileObj.driving_licence_expiryDate,
        national_id_placeofissue: this.newTravellerProfileObj.national_id_placeofissue,
        passport_placeofissue: this.newTravellerProfileObj.passport_placeofissue,
        driving_licence_placeofissue: this.newTravellerProfileObj.driving_licence_placeofissue,
        passenger_type: this.newTravellerProfileObj.passenger_type,
        company_name: this.newTravellerProfileObj.company_name,
        designation: this.newTravellerProfileObj.designation,
        traveller_type: this.newTravellerProfileObj.traveller_type,
        company_emailid: this.newTravellerProfileObj.company_emailid,
        traveller_remarks: this.newTravellerProfileObj.traveller_remarks,
        other_remarks: this.newTravellerProfileObj.other_remarks,
        company_address: this.newTravellerProfileObj.company_address,
        employeeId: this.newTravellerProfileObj.employeeId,
        department: this.newTravellerProfileObj.department,
        company_number: this.newTravellerProfileObj.company_number,
        cabin_class: this.newTravellerProfileObj.cabin_class,
        meal_type: this.newTravellerProfileObj.meal_type,
        meal_type2: this.newTravellerProfileObj.meal_type2,
        classification: this.newTravellerProfileObj.classification,
        airline_details:this.newTravellerProfileObj.airline_details,
        corporate_code:this.newTravellerProfileObj.corporate_code,
        corporate: this.newTravellerProfileObj.corporate,
        country_id:this.newTravellerProfileObj.country_id,
        seat_preference:this.newTravellerProfileObj.seat_preference,
        country_code:this.newTravellerProfileObj.country_code,
        airline_id:this.newTravellerProfileObj.airline_id,
        corporate_profileid:this.newTravellerProfileObj.corporate_profileid,
        corporate_supplierid:this.newTravellerProfileObj.corporate_supplierid,
        airlinePreference:this.newTravellerProfileObj.airlinePreference,

        })
        this.ngAfterViewInit();
      }
    });
  }


}
