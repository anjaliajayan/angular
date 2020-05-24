import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { PosService } from 'src/app/shared/services/pos-service/pos-service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';
declare const moment: any;
declare const $: any;
@Component({
  selector: 'app-pos-office-details',
  templateUrl: './pos-office-details.component.html',
  styleUrls: ['./pos-office-details.component.scss']
})
export class PosOfficeDetailsComponent implements OnInit {
  officeAddressForm: FormGroup;
  isSubmitted: boolean = false;
  organisation_ID: any;
  countries: Array<any> = [];
  cities: Array<any> = [];
  posInfo:any={};


  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private posService: PosService,
    private router:Router,
    private activeRoute: ActivatedRoute,
    private CommonService: CommonService,

  ) {
    this.initInfoForm();
  }

  ngOnInit() {
    this.getCountries();
    this.organisation_ID = this.activeRoute.snapshot.params.id;
    this.getOrganisationInfo(this.organisation_ID);  

  }

  ngAfterViewInit() {

    $(document).ready(function () {
      $('.ui.dropdown').dropdown();
      $('.ui.dropdown').dropdown('refresh');
      $('.ui.checkbox').checkbox();
    })
  }

  initInfoForm() {

    this.officeAddressForm = this.fb.group({
        organisation_id: [''],
        payment_gateway:[''],
        currency_id:[''],
        numberOfUsers:[''],
        credit_limit:[''],
        name :[''],
        email :[''],
        country_id :[''],
        contact :[''],
        corporate_type:[''],
        timezone_id:[''],
        active_suppliers :[''],
        contact_person_name: [''],
        contact_mobile_number: ['', Validators.pattern('[0-9]*')],
        contact_person_email: ['', Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
        address_1: [''],
        address_2: [''],
        city_id: [''],
        state_province: [''],
        zip: ['', Validators.pattern('[0-9]*')],
        contact_country_id: [''],
        tab:['address'],

    });

  }
  getOrganisationInfo(organisation_ID:number){
    this.posService.getPosDetails(organisation_ID).subscribe((result: any) => {
      if(result.status)

      this.posInfo = result.result; 
     
       this.officeAddressForm.patchValue({
        
        organisation_id:this.organisation_ID, 
        name :this.posInfo.name,
        email :this.posInfo.email,
        country_id :this.posInfo.country_id,
        currency_id:this.posInfo.currency_id,
        numberOfUsers:this.posInfo.numberOfUsers,
        credit_limit: this.posInfo.credit_limit,
        contact :this.posInfo.contact,
        payment_gateway:this.posInfo.payment_gateway,
        corporate_type:this.posInfo.corporate_type,
        timezone_id:this.posInfo.timezone_id,
        active_suppliers :JSON.parse(this.posInfo.active_suppliers),
        contact_person_name:this.posInfo.contact_person_name,
        contact_mobile_number:this.posInfo.contact_mobile_number,
        contact_person_email:this.posInfo.contact_person_email,
        address_1:this.posInfo.address_1,
        address_2:this.posInfo.address_2,
        city_id:this.posInfo.city_id,
        state_province:this.posInfo.state_province,
        zip:this.posInfo.zip,
        contact_country_id:this.posInfo.contact_country_id,
        currency:this.posInfo.currency_id
 
    })
    this.ngAfterViewInit();
   
 });
}

  reset() {
    this.officeAddressForm.reset();
  }

  storeOfficeAddress() {
  
    this.posService.updatePosDetails(this.officeAddressForm.value).subscribe((res: any) => {

      if (res.status) {
        this.toastr.success(`${res.message}`, `Error `, {
          timeOut:1000,
          progressBar: true,
          progressAnimation: 'decreasing',
          positionClass: 'toast-top-right'
        });
        this.router.navigate(['/pos/basic-edit/'+this.organisation_ID])
      } else {
        this.toastr.error(`${res.message}`, `Success `, {
          timeOut: 1000,
          progressBar: true,
          progressAnimation: 'decreasing',
          positionClass: 'toast-top-right'
        });

      }
    })
    return;
  };

  getCountries() {
    this.CommonService.getCountryList().subscribe((result: any) => {
      this.countries=result.countries;
    });
  }

  passCountryId(val:any){
    this.CommonService.getCityList(val).subscribe((result: any) => {
      this.cities=result.cities;
    });
  }

  cancelOfficeDetails() {
    this.router.navigate(['/pos/basic-edit/',this.organisation_ID])
  }

}
