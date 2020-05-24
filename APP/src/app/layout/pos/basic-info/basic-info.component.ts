import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/shared/services/common.service';
import { PosService } from 'src/app/shared/services/pos-service/pos-service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from './../../../../environments/environment';


declare const moment: any;
declare const $: any;

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

  posBasicInfoForm: FormGroup;
  countries:string[]=[];
  currencies:string[]=[];
  timezones:string[]=[];
  airports:string[]=[];
  isSubmitted:boolean=false;
  isChecked:boolean = false;
  nego={};
  parentID:number;

  constructor(
    private fb:FormBuilder,
    private commonService: CommonService,
    private posService:PosService,
    private toastr: ToastrService,
    private activeRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.parentID = this.activeRoute.snapshot.params.id?this.activeRoute.snapshot.params.id : '' ;
    this.initInfoForm();
    this.getCountries();
    this.getCurrencies();
    this.getTimeZones();
    this.getAirportDetails();
    this.setFormAsAgent();
 
  }
  initInfoForm(){
    this.posBasicInfoForm =this.fb.group({
      parent_id: this.parentID,
      corporate_type :['Agent',Validators.required],
      domain_url     :['',Validators.required],
      name           :['',Validators.required],
      country_id     :['',Validators.required],
      timezone_id    :['',Validators.required],
      payment_gateway:['',Validators.required],
      currency_id    :['',Validators.required],
      email          :['',[Validators.required,Validators.pattern('^[a-z0-9._&%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      agent_code            :['',[Validators.pattern('[0-9]*')]],
      associated_office     :[''],
      contact               :[''], 
      credit_limit          :['',[Validators.required,Validators.pattern('[0-9]*')]],
      business_id           :[''],
      numberOfUsers         :['',[Validators.required,Validators.pattern('[0-9]*')]],
      iata_no               :[''],
      domestictTaxCode      :[''],
      domestictTaxPercentage:[''],
      domestictTaxCurrency  :[''],
      domestictTaxAirport   :[''],
      amexCard              :[false,[]],
      queue                 :[false, []],
      internationalTaxPercentage: [''],
      nonAirlineTax: [''],

      pos_negofares: this.fb.group({
        tourOperatorDeffered: [false],
        bulkContract: [false],
        marine: [false],
        tourOperatorSemiDeffered: [false],
        humanitarian: [false],
        publishedOnly:[false],
        privateOnly:[false],
        publishedAndPrivate:[false],
        all:[false]
      }),
    })
  
  this.posBasicInfoForm.get('corporate_type').valueChanges.subscribe(val => {

    if (val == 'Agent') {
      this.setFormAsAgent();
    }
    if (val == 'B2C') {
      this.setFormAsB2C();
    }
    if (val == 'API') {
      this.setFormAsApiOut();
    }
    if (val == 'Mobile') {
      this.setFormAsMobile();
    }

  });

  
  this.posBasicInfoForm.get('amexCard').valueChanges.subscribe(val => {
    if (val && val == true) {
      this.posBasicInfoForm.addControl('amex_card', this.fb.group({
        cardHolderName: [null],
        cardHolderType: [null],
        cardnumber: [null],
        cardExpMonth: [null],
        cardExpYear: [null],
        cardcvv: [null]
      }))
      this.ngAfterViewInit();
    }
    else {
      this.posBasicInfoForm.removeControl('amex_card')
    }
  });

  this.posBasicInfoForm.get('queue').valueChanges.subscribe(val => {
    if (val && val == true) {
      this.posBasicInfoForm.addControl('queue_service', this.fb.group({
        queue1: [null],
        queue2: [null],
        queue3: [null]
      }))
      this.ngAfterViewInit();
    }
    else {
      this.posBasicInfoForm.removeControl('queue_service')
    }
  });
  }

  setFormAsAgent() {
    this.posBasicInfoForm.addControl('credit_limit', this.fb.control(''));
    this.posBasicInfoForm.addControl('numberOfUsers', this.fb.control(''));
    this.posBasicInfoForm.removeControl('domain_url');
  }

  setFormAsB2C() {
    this.posBasicInfoForm.addControl('domain_url', this.fb.control(''));
    this.posBasicInfoForm.removeControl('credit_limit');
    this.posBasicInfoForm.removeControl('numberOfUsers');
  }

  setFormAsMobile() {
    this.posBasicInfoForm.removeControl('credit_limit');
    this.posBasicInfoForm.removeControl('numberOfUsers');
    this.posBasicInfoForm.removeControl('domain_url');
  }

  setFormAsApiOut() {
    this.posBasicInfoForm.addControl('credit_limit', this.fb.control(''));
    this.posBasicInfoForm.addControl('numberOfUsers', this.fb.control(''));
    this.posBasicInfoForm.removeControl('domain_url');
  }

  ngAfterViewInit() {
    $('.ui.dropdown').dropdown();
    $('.dropdownThree').dropdown({placeholder:"Choose Airport"});
//     $(document).ready(function () {
//       $('.ui.dropdown').dropdown();
//       $('.ui.dropdown').dropdown('refresh');
//       $('.ui.checkbox').checkbox();
//       $('.ui.dropdownThree').dropdown();
//  console.log("resulyttttttt")
//       $(document).ready(function () {
//         this._globals=localStorage.getItem('_globals');
//         let token=JSON.parse(this._globals).token;
//         $('.dropdownThree').dropdown({
//           type: 'category',
//           minCharacters : 2,
//           maxCharacters : 3,
//           responseAsync: true,
//           apiSettings: {
//             url: environment.serverURL + '/api/get-airports-cache/{query}',
//             beforeXHR: function (xhr) {
//               xhr.setRequestHeader('Authorization',token);
//               return xhr;
//             },
//             onResponse: function (response) {
//               const result = { success: true, results: [] };
//               $.each(response.result, function (index, item) {
//                 result['results'].push({
//                   AirportCode: item.AirportCode, 
//                   // value: item.AirportCode
//                 })
//               });
//               return result;
//             },
//           },
//         });
    
//       });
//     });

  }
  
  getCountries() {
    this.commonService.getCountryList().subscribe((result: any) => {
      this.countries=result.countries;
    });
  }

  getCurrencies() {
    this.commonService.getCurrencyList().subscribe((result: any) => {
      this.currencies = result.currencies;
    })
  }

  getTimeZones() {
    this.commonService.getTimeZones().subscribe((result: any) => {
      this.timezones = result.timeZones;
    });
  }

  getAirportDetails = () => {
    this.commonService.getAirportsList()
      .subscribe((res: any) => {
        if (res.status) {
          this.airports = res.result;

        }
        else {
          this.toastr.error(`${res.msg}`, `${res.msg}`, {
            timeOut: 1000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
        }
      })
  }

  get gfc() { return this.posBasicInfoForm.controls };

  savePosBasicInfo(){
    this.isSubmitted=true;
    if (this.posBasicInfoForm.invalid) {
      this.toastr.warning(`Please fill all mandatory fields`, `Error `, {
        timeOut: 10000,
        progressBar: false,
        positionClass: 'toast-bottom-right'
      })
      return;
    }



    this.posService.createNewPosUsingBasicInfo(this.posBasicInfoForm.value).subscribe((result: any) => {
    if(result.status){
      this.toastr.success(`${result.message}`, ` `, {
        timeOut: 10000,
        progressBar: false,
        positionClass: 'toast-bottom-right'
      });
      this.router.navigate(['/pos/pos-read/']);
    }else{
      this.toastr.error(`${result.message}`, ` `, {
        timeOut: 10000,
        progressBar: false,
        positionClass: 'toast-bottom-right'
      })
    }

    });
  }

  checkAllnego(){
    this.isChecked = !this.isChecked;
   if(this.isChecked == true){
    this.nego={"tourOperatorDeffered":true,"bulkContract":true,"marine":true,
    "tourOperatorSemiDeffered":true,"publishedAndPrivate":true,"humanitarian":true,
    "publishedOnly":true,"privateOnly":true}
    this.posBasicInfoForm.patchValue({
      pos_negofares:this.nego 
    })
   }else{
    this.nego={"tourOperatorDeffered":false,"bulkContract":false,"marine":false,
    "tourOperatorSemiDeffered":false,"publishedAndPrivate":false,"humanitarian":false,
    "publishedOnly":false,"privateOnly":false}
    this.posBasicInfoForm.patchValue({
      pos_negofares:this.nego 
    })
   }

 

  }
}
