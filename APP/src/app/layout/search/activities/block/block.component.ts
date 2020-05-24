import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivitySearchService } from './../../../../shared/services/activity.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

declare const moment: any;
declare const $: any;


@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  checkoutForm:FormGroup;
  destinations:string[]=[];
  activityBook: any;
  adtPax: any;
  chdPax: any;
  chdAges: any=[];
  isSearchCompleted: boolean = false;
  formIsSubmitted : boolean = true;
  @Input() activitySearchCriteria:any;
  activityblockList: any;
  activityOccupancy : any = [];
  ActivityChd: any = [];
  totalPax: number;
  searchCriteria: any;
  single:any;
  countries: any;
  constructor(
    private fb:FormBuilder,
    private ActivitySearchService: ActivitySearchService,
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private commonService: CommonService,
    private toastr: ToastrService,
    )
    {
      console.log(this.router.getCurrentNavigation().extras.state);
     }
     ngOnInit() {
       this.activityblockList=history.state;
      this.initForm();
       this.searchCriteria = this.activityblockList.result.ActivityResult.ActivitySearchCriteria
       const adts: String = this.searchCriteria.adultCount.toString();
       const chds: String = this.searchCriteria.childCount.toString();

       // console.log("blocked room hotel",this.blockedRoom);
       const chdAgeString = this.searchCriteria.childAges.toString();
       this.chdAges = chdAgeString.split('&amp;');
       // console.log("chdAges",this.chdAges);

       for(let j=0; j<=this.chdAges.length; j++){
         const ageVal = String(this.chdAges[j]);
         const checkStr = 'ca1';
         if(ageVal.indexOf('ca1')!==-1){
           this.ActivityChd.push(this.chdAges[j]);
         }
       }
       this.adtPax = (adts.indexOf(',') !== -1) ? adts.split(',') : adts;
       this.chdPax = (chds.indexOf(',') !== -1) ? chds.split(',') : chds;
       // tslint:disable-next-line:radix
       this.totalPax = (parseInt(this.adtPax[0]));

       console.log("this.totalPax",this.totalPax);
       console.log("this.chdAges",this.chdAges);

      this.single=this.activityblockList.result.ActivityResult.Activity;
      console.log(this.single);
    }
  // tslint:disable-next-line:use-lifecycle-interface
    ngAfterViewInit() {
      this.loadConfig();

    }
    initForm(){
      this.checkoutForm=this.fb.group({
        pax1_salutation: [null, Validators.required], pax1_firstName: [null, Validators.required],
        pax1_lastName: [null, Validators.required],

        pax2_salutation: [null, Validators.required], pax2_firstName: [null, Validators.required],
        pax2_lastName: [null, Validators.required],

        pax3_salutation: [null, Validators.required], pax3_firstName: [null, Validators.required],
        pax3_lastName: [null, Validators.required],

        pax4_salutation: [null, Validators.required], pax4_firstName: [null, Validators.required],
        pax4_lastName: [null, Validators.required],

        pax5_salutation: [null, Validators.required], pax5_firstName: [null, Validators.required],
        pax5_lastName: [null, Validators.required],

        pax6_salutation: [null, Validators.required], pax6_firstName: [null, Validators.required],
        pax6_lastName: [null, Validators.required],

        pax7_salutation: [null, Validators.required], pax7_firstName: [null, Validators.required],
        pax7_lastName: [null, Validators.required],

        pax8_salutation: [null, Validators.required], pax8_firstName: [null, Validators.required],
        pax8_lastName: [null, Validators.required],

        ch1_firstName: [null, Validators.required], ch1_lastName: [null, Validators.required],
        ch2_firstName: [null, Validators.required], ch2_lastName: [null, Validators.required],
        ch3_firstName: [null, Validators.required], ch3_lastName: [null, Validators.required],
        ch4_firstName: [null, Validators.required], ch4_lastName: [null, Validators.required],
        ch5_firstName: [null, Validators.required], ch5_lastName: [null, Validators.required],


        studentPlan:[''],
        agentReference:[''],
        arrivalairportcode:[''],
        bookingAmount:[''],
        bookingCode:[''],
        bookingComments:[''],
        bookingReference:['fgdfgdfgd3454'],
        bookingDate:[''],
        bookingEmail:[''],
        bookingCurrency:[''],
        bookingStatus:[''],
        departureairportcode:[''],
        booking_status:[''],
        is_blocked:[''],
        reserveCondition:[''],
        rulesCondition:[''],
        salution:[''],
        email:[''],
        passenger_type:[''],
        passport:[''],
      });
      this.getCountries();
      this.departureDate();
    }

  getAge(chpaxNo){
    console.log('chpaxNo',chpaxNo)
    const retAges=[];
    for(let i=0; i< this.chdAges.length; i++){
        const ageStr = 'ca'+i;
        const ageValue = this.chdAges[i];
        retAges.push(ageValue);
    }
    return (String(retAges[chpaxNo]).split('=')[1]) ;
  }
  get gfc() { return this.checkoutForm.controls };

    bookactivity() {

      let paxInfo: any;
        for (let pax = 1; pax <= this.totalPax; pax++) {
            if (pax === 1) {
              paxInfo = {
                age: 1,
                category: 'AD',
                first_name: this.checkoutForm.controls.pax1_firstName.value,
                last_name: this.checkoutForm.controls.pax1_lastName.value,
                salutation: this.checkoutForm.controls.pax1_salutation.value,

              };
              this.activityOccupancy.push(paxInfo);
            }
            if (pax === 2) {
              paxInfo = {
                age: 1,
                category: 'AD',
                first_name: this.checkoutForm.controls.pax2_firstName.value,
                last_name: this.checkoutForm.controls.pax2_lastName.value,
                salutation: this.checkoutForm.controls.pax2_salutation.value,

              };
              this.activityOccupancy.push(paxInfo);
            }
            if (pax === 3) {
              paxInfo = {
                age: 1,
                category: 'AD',
                first_name: this.checkoutForm.controls.pax3_firstName.value,
                last_name: this.checkoutForm.controls.pax3_lastName.value,
                salutation: this.checkoutForm.controls.pax3_salutation.value,

              };
              this.activityOccupancy.push(paxInfo);
            }
            if (pax === 4) {
              paxInfo = {
                age: 1,
                category: 'AD',
                first_name: this.checkoutForm.controls.pax4_firstName.value,
                last_name: this.checkoutForm.controls.pax4_lastName.value,
                salutation: this.checkoutForm.controls.pax4_salutation.value,

              };
              this.activityOccupancy.push(paxInfo);
            }
            if (pax === 5) {
              paxInfo = {
                age: 1,
                category: 'AD',
                first_name: this.checkoutForm.controls.pax5_firstName.value,
                last_name: this.checkoutForm.controls.pax5_lastName.value,
                salutation: this.checkoutForm.controls.pax5_salutation.value,

              };
              this.activityOccupancy.push(paxInfo);
            }
            if (pax === 6) {
              paxInfo = {
                age: 1,
                category: 'AD',
                first_name: this.checkoutForm.controls.pax6_firstName.value,
                last_name: this.checkoutForm.controls.pax6_lastName.value,
                salutation: this.checkoutForm.controls.pax6_salutation.value,

              };
              this.activityOccupancy.push(paxInfo);
            }
            if (pax === 7) {
              paxInfo = {
                age: 1,
                category: 'AD',
                first_name: this.checkoutForm.controls.pax7_firstName.value,
                last_name: this.checkoutForm.controls.pax7_lastName.value,
                salutation: this.checkoutForm.controls.pax7_salutation.value,

              };
              this.activityOccupancy.push(paxInfo);
            }
            if (pax === 8) {
              paxInfo = {
                age: 1,
                category: 'AD',
                first_name: this.checkoutForm.controls.pax8_firstName.value,
                last_name: this.checkoutForm.controls.pax8_lastName.value,
                salutation: this.checkoutForm.controls.pax8_salutation.value,

              };
              this.activityOccupancy.push(paxInfo);
            }
          }
        for(let chd=1; chd<=this.ActivityChd.length; chd++){
            if(chd === 1){
              paxInfo = {
                age:Number(this.getAge((chd-1))),
                category: 'CH',
                first_name: this.checkoutForm.controls.ch1_firstName.value,
                last_name: this.checkoutForm.controls.ch1_lastName.value,
                salutation: 'Master',


              };
              this.activityOccupancy.push(paxInfo);
            }
            if(chd === 2){
              paxInfo = {
                age: Number(this.getAge((chd-1))),
                category: 'CH',
                first_name: this.checkoutForm.controls.ch2_firstName.value,
                last_name: this.checkoutForm.controls.ch2_lastName.value,
                salutation: 'Master',


              };
              this.activityOccupancy.push(paxInfo);
            }
            if(chd === 3){
              paxInfo = {
                age: Number(this.getAge((chd-1))),
                category: 'CH',
                first_name: this.checkoutForm.controls.ch3_firstName.value,
                last_name: this.checkoutForm.controls.ch3_lastName.value,
                salutation: 'Master',


              };
              this.activityOccupancy.push(paxInfo);
            }
            if(chd === 4){
              paxInfo = {
                age:Number(this.getAge((chd-1))),
                category: 'CH',
                first_name: this.checkoutForm.controls.ch4_firstName.value,
                last_name: this.checkoutForm.controls.ch4_lastName.value,
                salutation: 'Master',


              };
              this.activityOccupancy.push(paxInfo);
            }
            if(chd === 5){
              paxInfo = {
                age:Number(this.getAge((chd-1))),
                category: 'CH',
                first_name: this.checkoutForm.controls.ch5_firstName.value,
                last_name: this.checkoutForm.controls.ch5_lastName.value,
                salutation: 'Master',
               };
              this.activityOccupancy.push(paxInfo);
            }
          }

      const datas = {
        cl: this.checkoutForm.value,
        il: this.activityblockList.result.ActivityResult.Activity,
        isc: this.activityblockList.result.ActivityResult.ActivitySearchCriteria,
        ocy: this.activityOccupancy

      }
      console.log("test....", datas);
      this.ActivitySearchService.orderCreateRequest(datas).subscribe((results: any) => {
        if ((results.result.TransactionLog.status === 'Failure' ) && (results.result.Activity.bookingDetail.tripID !== undefined)) {
          this.formIsSubmitted = false;
          this.toastr.error(`Error Code: ${results.result.TransactionLog.error.code} | ${results.result.TransactionLog.error.message}`, `Order Creation Failed`, {
            timeOut: 2000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });

        }else if((results.result.TransactionLog.status === 'Success' ) && (results.result.Activity.bookingDetail.tripID !== undefined)){
          this.formIsSubmitted = false;
          this.toastr.success(`Trip Id ${results.result.Activity.bookingDetail.tripID}`, `Order Creation Successfull`, {
            timeOut: 5000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
        //this.router.navigate(['bookings']);
          this.router.navigateByUrl(`/bookings/activity-booking-details/${results.result.Activity.bookingDetail.tripID}`);
        } else {
          this.formIsSubmitted = false;
          this.toastr.error(`Please try other Activity search`, ``, {
            timeOut: 2000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
        }

      });

    }

  getSlice(str){
    let setStrYear = str.toString().slice(0,4);
    let setStrMonth = str.toString().slice(4,6);
    let setStrDate = str.toString().slice(6,8);
    let newDate = setStrDate+'/'+setStrMonth+'/'+setStrYear;
    return newDate;
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
        $('input[name="birth_date"]').daterangepicker({
          singleDatePicker: true,
          showDropdowns: true,
          autoUpdateInput: false,
        }, function (start, end, label) {
          var years = moment().diff(start, 'years');
          scope.checkoutForm.patchValue({'birth_date': moment(start).format('YYYY-MM-DD')});
        });
      });
    }



}








