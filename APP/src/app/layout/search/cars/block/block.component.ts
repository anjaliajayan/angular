import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarSearchService } from './../../../../shared/services/car.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from './../../../../../environments/environment';
import {convertToArray} from '../../../../shared/utils/array.helper';
import * as _ from 'lodash';

declare const moment: any;
declare const $: any;

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  carBookForm:FormGroup;
  destinations:string[]=[];
  CarBook: any;
  isSearchCompleted: boolean = false;
  bookCarSpinner: boolean = false;
  @Input() CarSearchCriteria:any;
  
  clickBookButton :boolean = true;
  CarblockList: any;
  cancelPolicy: any;
  single:any;
  carsearch:any;
  countries: any;
  constructor(
    private fb:FormBuilder,
    private CarSearchService: CarSearchService,
    private router: Router,
    private activatedRoute:ActivatedRoute,
    private commonService: CommonService,
    private toastr: ToastrService,
    )
    {
      console.log(this.router.getCurrentNavigation().extras.state);
     }
     ngOnInit() {
      this.initForm();
      //console.log('insuranceSearchCriteria',this.insuranceSearchCriteria);

      this.CarblockList=history.state;

      this.single=this.CarblockList.result.CarsResult.Cars;
      this.cancelPolicy = convertToArray(this.CarblockList.result.CarsResult.Cars.Programs.Program.cancellationPolicies.cancellationPolicy)
      this.carsearch=this.CarblockList.result.CarsResult.CarSearchCriteria;
      console.log(this.single);
    }
    ngAfterViewInit() {
      this.loadConfig();
    }
    initForm(){
      this.carBookForm=this.fb.group({


        studentPlan:[''],
        agentReference:[''],
        arrivalairportcode:[''],
        bookingAmount:[''],
        bookingCode:[''],
        bookingComments:[''],
        bookingReference:[''],
        bookingEmail:[''],
        bookingDate:[''],
        bookingCurrency:[''],
        bookingStatus:[''],
        booking_status:[''],
        city:[''],
        nationality:[''],
        birth_date:[''],
        email:[''],
        first_name:[null, Validators.required],
        gender:[''],
        last_name:[null, Validators.required],
        passenger_type:[''],
        passport:[''],
        phone:[''],
        rulesCondition:['',Validators.required],
        reserveCondition:['',Validators.required],
      });
      this.getCountries();
      this.departureDate();
    }

    get gfc() { return this.carBookForm.controls };

    carbook() {
      
      if (this.carBookForm.invalid) {
        return;
      }
      this.bookCarSpinner = true;
      // console.log('formmmmmmm',this.carBookForm.value);
      // console.log("Insurance list........",this.insuranceblockList.result.insurances.Insurance);
      // console.log("InsuranceSearchCriteria........",this.insuranceblockList.result.insurances.InsuranceSearchCriteria);

      const datas = {
        cl: this.carBookForm.value,
        il: this.single,
        isc:this.carsearch

      }
      console.log("test....", datas);
      this.CarSearchService.orderCreateRequest(datas).subscribe((results: any) => {
        if ((results.result.TransactionLog.status== 'Failure' ) && (results.result.Cars.bookingDetail.tripID != undefined)) {
          this.bookCarSpinner = false;
          this.clickBookButton = false;
          this.toastr.error(`Error Code: ${results.result.TransactionLog.error.code} | ${results.result.TransactionLog.error.message}`, `Order Creation Failed`, {
            timeOut: 2000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });

        }else if((results.result.TransactionLog.status== 'Success' ) && (results.result.Cars.bookingDetail.tripID != undefined)){
          this.bookCarSpinner = false;
          this.clickBookButton = false;
          this.toastr.success(`Trip Id ${results.result.Cars.bookingDetail.tripID}`, `Order Creation Successfull`, {
            timeOut: 5000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
          this.router.navigateByUrl(`/bookings/car-booking-details/${results.result.Cars.bookingDetail.tripID}`);
        // this.router.navigate(['bookings']);
        } else {
          this.bookCarSpinner = false;
          this.clickBookButton = false;
          this.toastr.error(`Please try other Car search`, ``, {
            timeOut: 2000,
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
        $('input[name="birth_date"]').daterangepicker({
          singleDatePicker: true,
          showDropdowns: true,
          autoUpdateInput: false,
        }, function (start, end, label) {
          var years = moment().diff(start, 'years');
          scope.carBookForm.patchValue({'birth_date': moment(start).format('YYYY-MM-DD')});
        });
      });
    }




}
