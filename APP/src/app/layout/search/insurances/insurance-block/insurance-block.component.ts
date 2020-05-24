import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { InsuranceService } from '../../../../shared/services/insurance-services.services';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { stringify } from 'querystring';

declare const moment: any;
declare const $: any;
@Component({
  selector: 'app-insurance-block',
  templateUrl: './insurance-block.component.html',
  styleUrls: ['./insurance-block.component.scss']
})
export class InsuranceBlockComponent implements OnInit {

  checkoutForm:FormGroup;
  destinations:string[]=[];
  insuranceBook: any;
  isSearchCompleted: boolean = false;
  @Input() insuranceSearchCriteria:any;
  insuranceblockList: any;
  single:any;
  countries: any;
  submitInsuranceSpinner: boolean = false;
  occupancy: any = [];
  occupancies: any[];
  isSubmitted:boolean=false;
  insuranceOccup: any;
  clickAble: boolean = true; 
  constructor(
    private fb:FormBuilder,
    private InsuranceService: InsuranceService,
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private commonService: CommonService,
    private toastr: ToastrService,
    ) {
      console.log(this.router.getCurrentNavigation().extras.state);
     }

  ngOnInit() {
    this.initForm();
    //console.log('insuranceSearchCriteria',this.insuranceSearchCriteria);
   
    this.insuranceblockList=history.state;
    
    this.single=this.insuranceblockList.result.insurances.Insurance;
   this.occupancy =this.single.insuranceOccupancy;
   this.occupancies =Array.isArray(this.occupancy)? this.occupancy: Array(this.occupancy);
    console.log('occupancy,,,,,,,,,,,,,,,,,,', this.single);
    // this.occupancies.forEach(e => {
    // // console.log('occupancies,,',e.passenger_type);
    // // console.log('occupancies,,',e);
    // if(e.passenger_type=='ADT'){
    //  this.insuranceOccup.birth_date = e.birth_date;
    // }else{
    //   this.insuranceOccup.birth_date = "";
    // }
    //       });
   
    
  }
  ngAfterViewInit() {
    this.loadConfig();
    this.departureDate();

  }
      
  initForm(){
    this.checkoutForm=this.fb.group({
      

      studentPlan:[''],
      agent_reference:[''],
      arrivalairportcode:['',Validators.required],
      bookingAmount:[''],
      bookingCode:[''],
      booking_comments:[''],
      bookingReference:[''],
      bookingDate:[''],
      bookingCurrency:[''],
      bookingStatus:[''],
      booking_email:[''],
      departureairportcode:['',Validators.required],
      tripID:[''],
      booking_status:[''],
      is_blocked:[''],
      city:['',Validators.required],
      nationality:['',Validators.required],
      residence:['',Validators.required],
      street1:['',Validators.required],
      cnic:[''],
      email:['',Validators.required],
      relativeCity:[''],
      relativeName:[''],
      relativePhone:[''],
      relationship:[''],
      instituteName:[''],
      programName:[''],
      programDuration:[''],
      sponsorName:[''],
      sponsorContact:[''],
      sponsorAddress:[''],
      offerletterRef:[''],
      travelduration:[''],
      first_name:['',Validators.required],
      gender:[''],
      last_name:['',Validators.required],
      passenger_type:[''],
      passport:['',Validators.required],
      isBeneficiary:[''],
     // birth_date:[''],
      birth_date0:[''],
     
      birth_date1:[''],
      birth_date2:[''],
      birth_date3:[''],
      rulesCondition: ['',Validators.required],
      reserveCondition: ['',Validators.required]
      // first_name0:[''],gender0:[''],last_name0:[''], passenger_type0:[''],passport0:[''],birth_date0:[''],isBeneficiary0:[''],
      // first_name1:[''],gender1:[''],last_name1:[''], passenger_type1:[''],passport1:[''],birth_date1:[''],isBeneficiary1:[''],
      // first_name2:[''],gender2:[''],last_name2:[''], passenger_type2:[''],passport2:[''],birth_date2:[''],isBeneficiary2:[''],
      // first_name3:[''],gender3:[''],last_name3:[''], passenger_type3:[''],passport3:[''],birth_date3:[''],isBeneficiary3:['']
     

      
      
     
      
      
      

     // active_suppliers_flights: this.fb.array([]),
     
    });
    this.getCountries();
    //this.departureDate();
  }

  get gfc() { return this.checkoutForm.controls };

	btncheckoutHandler() {

    // console.log('formmmmmmm',this.checkoutForm.value);
    // console.log("Insurance list........",this.insuranceblockList.result.insurances.Insurance);
    // console.log("InsuranceSearchCriteria........",this.insuranceblockList.result.insurances.InsuranceSearchCriteria);
    this.isSubmitted=true;
    const datas = {
      cl: this.checkoutForm.value,
      il: this.insuranceblockList.result.insurances.Insurance,
      //ocup: this.insuranceblockList.result.insurances.Insurance.insuranceOccupancy,
      //bd: this.insuranceblockList.result.insurances.Insurance.bookingDetail.bookingEmail,
      isc:this.insuranceblockList.result.insurances.InsuranceSearchCriteria
     
    }
    console.log('dataas,,,,,,,,,,',datas);
    if (this.checkoutForm.invalid) {
      this.toastr.warning(`Please fill all mandatory fields`, `Error `, {
        timeOut: 10000,
        progressBar: false,
        positionClass: 'toast-bottom-right'
      })
      return;
    }



    this.submitInsuranceSpinner = true;
    console.log("datas ===================", datas)
		this.InsuranceService.bookInsurance(datas).subscribe((resp: any) => {
      console.log("testttt....1", resp);
			if (resp['result'].insurances.TransactionLog.status != "Failure") {
        this.clickAble = false;
        this.isSearchCompleted = true;

        console.log("test....", resp);
        this.insuranceBook = resp['result'].insurances;
        
        this.insuranceSearchCriteria = resp['result'].insurances.InsuranceSearchCriteria;
        console.log('booked plan-----------',this.insuranceBook);
        this.toastr.success(`${resp.message}`, ``, {
          timeOut: 4000,
          progressBar: false,
          positionClass: 'toast-bottom-right',
          
        });
      //  this.router.navigateByUrl('bookings/insurance-book-details/', { state: this.insuranceBook});
      console.log('server responsesssssssssssssssss....',resp['result'].insurances.Insurance.bookingDetail.tripID);
          this.router.navigateByUrl(`/bookings/insurance-book-details/${resp['result'].insurances.Insurance.bookingDetail.tripID}`);
          
          

        //  console.log('insuranceSearchCriteria response....',this.insuranceSearchCriteria);
       
        // resp.result.insurances.Insurances.Insurance.map(ele => {
     
        //   ele.insuraceSearchCriteria=resp.result.insurances.InsuranceSearchCriteria;
        //   this.insuranceList = resp.result.insurances.Insurances.Insurance;
        //  // console.log("----------", resp.result.insurances.Insurances.Insurance)
        // }
        // )
      }else{
          this.toastr.error(resp['result'].insurances.TransactionLog.error['message'], `failed booking`, {
          timeOut: 3000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
       }
      
    });
   
	}


  loadConfig() {
    var scope = this;

    $(document).ready(function () {
      $('.ui.dropdown').dropdown();
      $('.dropdown4').dropdown({ placeholder: "Choose origin airports",});
 
      this._globals=localStorage.getItem('_globals');
      let token=JSON.parse(this._globals).token;
      // console.log(token);
      $('.ui.dropdown4').dropdown({
        type: 'category',
        minCharacters : 2,
        maxCharacters : 3,
        responseAsync: true,
        apiSettings: {
          url: environment.serverURL + '/api/insurance/get-airports/{query}',
          beforeXHR: function (xhr) {
            xhr.setRequestHeader('Authorization',token);
            return xhr;
          },
          onResponse: function (response) {
            const result = { success: true, results: [] };
            $.each(response.result, function (index, item) {

              result['results'].push({
                name: item.AirportName, 
                value: item.AirportCode
              })
            });

            return result;
          },
        },
      })
    });
  }

	getCountries() {
		this.commonService.getCountryList().subscribe((result: any) => {
			//console.log(result)
			this.countries = result.countries;
		});
  }
  
  
    
  
 

  departureDate() {
    var scope = this;
    $(function () {
      $('input[name="birth_date0"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        autoUpdateInput: false,
        startDate: moment().subtract(18, 'years'),
        maxDate:moment().subtract(18, 'years')
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.checkoutForm.patchValue({'birth_date0': moment(start).format('YYYY-MM-DD')});
      });
    });
    $(function () {
      $('input[name="birth_date1"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        autoUpdateInput: false,
        
        startDate: moment().subtract(2, 'years'),
        maxDate:moment().subtract(2, 'years')
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.checkoutForm.patchValue({'birth_date1': moment(start).format('YYYY-MM-DD')});
      });
    });
    $(function () {
      $('input[name="birth_date2"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        autoUpdateInput: false,
        startDate: moment().subtract(12, 'years'),
        minDate:moment().subtract(12, 'years')
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.checkoutForm.patchValue({'birth_date2': moment(start).format('YYYY-MM-DD')});
      });
    });
    $(function () {
      $('input[name="birth_date3"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        autoUpdateInput: false,
        startDate: moment().subtract(12, 'years'),
        minDate:moment().subtract(12, 'years')
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.checkoutForm.patchValue({'birth_date3': moment(start).format('YYYY-MM-DD')});
      });
    });
  }



}
