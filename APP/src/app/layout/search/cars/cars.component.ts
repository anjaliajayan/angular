import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

import { CommonService } from './../../../shared/services/common.service';
import { CarSearchService } from './../../../shared/services/car.service';
import { environment } from './../../../../environments/environment';
declare const $: any;
declare const moment: any;

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  screenTitle: string = 'Car Search';
  carSearchObj: any = {};
  searchLoader: boolean = false;
  searchBoxCard: boolean = true;
  searchResultsCard: boolean = false;
  searchCarSpinner: boolean = false;
  showSearchResult:boolean=true;
  carsearching : boolean = false;
  modify: boolean = false;
  cities : any =[];
  _globals: any = [];
  carResults: any = [];
  CarSearchCriteria = {};
  searchCarsResult: any = [];
  preSearchPersistentObj = {};
  savedSearches:any;
  dropoffvalue: any;

  constructor(
    private carSearchService: CarSearchService,
    private fb: FormBuilder,
    private router: Router,
    private commonService: CommonService,
    private toastr: ToastrService
  ) {
  }

  carSearchForm = this.fb.group({
    currency: ['AED'],
    pickUp: [''],
    dropOff: [''],
    pickUpLocation: [''],
    dropOffLocation: [''],
    startDate: [''],
    endDate: [''],
    startTime: [''],
    endTime: [''],
    country: ['ae'],
    tripType: ['out'],
    adultCount: 1,
    childCount: 0,
    markupValue: [0, [Validators.min(0)]],
    markupBy: ['by_amount'],

  });

  ngOnInit() {
    this.savedSearches= this.getLocalStorageSearches();
    this.pickUpDate();
  }

  searchCars = () => {
    this.carsearching = true;
    if(this.carSearchForm.controls.pickUp.value!=='' && this.carSearchForm.controls.dropOff.value!=='') {
      if(this.carSearchForm.controls.startDate.value!=='' && this.carSearchForm.controls.endDate.value!=='') {
        if(this.carSearchForm.controls.startTime.value!=='' && this.carSearchForm.controls.endTime.value!=='') {
          this.searchCarSpinner = true;
        console.log(this.carSearchForm.controls.pickUp.value);
        console.log(this.carSearchForm.controls.dropOff.value);
        console.log(this.carSearchForm.controls.endDate.value);
        console.log(this.carSearchForm.controls.startDate.value);
        console.log(this.carSearchForm.controls.startTime.value);
        console.log(this.carSearchForm.controls.endTime.value);

        let carpickUpvalue = this.carSearchForm.controls.pickUp.value.split('~');
        let cardropOffvalue = this.carSearchForm.controls.dropOff.value.split('~');
        this.carSearchObj.pickUp = carpickUpvalue[0];
        this.carSearchObj.dropOff = cardropOffvalue[0];
        this.carSearchObj.pickUpLocation = carpickUpvalue[1];
        this.carSearchObj.dropOffLocation = cardropOffvalue[1];
        this.carSearchObj.country = this.carSearchForm.controls.country.value;
        this.carSearchObj.currency = this.carSearchForm.controls.currency.value;
        this.carSearchObj.startDate = this.carSearchForm.controls.startDate.value;
        this.carSearchObj.endDate = this.carSearchForm.controls.endDate.value;
        this.carSearchObj.startTime = this.carSearchForm.controls.startTime.value;
        this.carSearchObj.endTime = this.carSearchForm.controls.endTime.value;
        this.carSearchObj.tripType = this.carSearchForm.controls.tripType.value;
        this.carSearchObj.markupValue = this.carSearchForm.controls.markupValue.value;
        this.carSearchObj.markupBy = this.carSearchForm.controls.markupBy.value;

        this.searchLoader = true;
        this.searchBoxCard = false;

        let toastrTitle = `No Cars`;
        let toastrMessage = `Oops! We're unable to find cars for searched parameters. Try again with different search criteria.`;
        this.carSearchService.searchCar(this.carSearchObj)
          .subscribe((response: any) => {

              if (response.status) {
                console.log(response);
                this.CarSearchCriteria = response.result.CarsResult['CarSearchCriteria']
                this.searchCarsResult = response.result.CarsResult.Cars['Car']
                if (this.searchCarsResult === undefined) {
                  this.searchCarsResult = [];
                  this.showSearchResult = true;
                  this.buildError('No results found for the search criteria', 'Cars');
                  this.searchCarSpinner = false;
                } else {
                  this.showSearchResult = false;
                  this.searchCarsResult = this.searchCarsResult;
                  this.toastr.success(this.searchCarsResult.length + ' results found', `Cars`, {
                    timeOut: 5000,
                    progressBar: false,
                    positionClass: 'toast-bottom-right'
                  });
                }
                console.log(this.searchCarsResult);
              } else {

                this.buildError(toastrMessage, toastrTitle);
              }
            },
            (httpErrorResponse) => {
              this.buildError(toastrMessage, toastrTitle);
            });
      }else{
        this.buildError('Please select Time', 'Please select Time');
      }
      }else{
        this.buildError('Please select Dates', 'Please select Dates');
      }
    }else{
      this.buildError('Please select Destinations', 'Please select Destinations');
    }
  }


  buildError(title, message) {
    this.searchLoader = false;
    this.searchBoxCard = true;
    this.toastr.info(message, title, {timeOut: 10000, progressBar: false, positionClass: 'toast-bottom-right'});
  }


  modifySearch() {
    this.modify = true;
  }

  ngAfterViewInit() {
    this.loadConfig();
    this.pickUpTime();
    this.dropOffTime();

  }

  onChange(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
    console.log(event);
    this.dropoffvalue = newVal;
  }



  loadConfig(){
    const url = environment.serverURL;
    this.carSearchService.airportsListing();
    $(document).ready(function () {
      // $('.ui.dropdownCity').dropdown({ placeholder: "Choose Destination"});
      console.log("method called");
      this._globals = localStorage.getItem('_globals');
      let token = JSON.parse(this._globals).token;
      $('.ui.dropdownCity').dropdown({
        type: 'category',
        minCharacters: 1,
        maxCharacters: 3,
        responseAsync: false,
        apiSettings: {
          url: url + '/api/cars/car-get-city/{query}',
          beforeXHR: function (xhr) {
            xhr.setRequestHeader('Authorization', token);
            return xhr;
          },
          onResponse: function (response) {
            this.cities = response.result;
            console.log("jquery cities", this.cities);
            const result = { success: true, results: [] };
            $.each(response.result, function (index, item) {
              result['results'].push({
                name: item.label,
                value: item.label +'~'+ item.airport_code,
                code:item.airport_code
              });
            });
            return result;
          },
        },
      })
    });
    }

  pickUpTime() {
    var scope = this;
    $(function () {
      $('input[name="startTimes"]').daterangepicker({
        timePicker: true,
        timePickerIncrement: 60,
        timePicker24Hour: true,
        locale: {
          format: 'hh:mm'
        }
      }, function (start, end, label) {
        start = start.format('HH:mm');
        end = end.format('HH:mm');
      }).on('show.daterangepicker', function (ev, picker) {
        picker.container.find(".calendar-table").hide(); //Hide calendar
      });
    });
  }

  dropOffTime() {
    var scope = this;
    $(function () {
      $('input[name="endTimes"]').daterangepicker({
        timePicker: true,
        timePickerIncrement: 60,
        locale: {
          format: 'hh:mm'
        }
      }, function (start, end, label) {
        start = start.format('HH:mm');
        end = end.format('HH:mm');
      }).on('show.daterangepicker', function (ev, picker) {
        picker.container.find(".calendar-table").hide(); //Hide calendar
      });
    });
  }
  pickUpDate() {
    var scope = this;
    // tslint:disable-next-line:only-arrow-functions
    $(function () {
      $('input[name="startDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        dateFormat:'YYYY-MM-DD',
        minDate: moment().startOf('hour'),
        startDate: moment().startOf('hour'),
        autoUpdateInput: false,
      }, function (start, end, label) {
        // tslint:disable-next-line:prefer-const
        let years = moment().diff(start, 'years');
        scope.carSearchForm.patchValue({
          startDate: moment(start).format('DD/MM/YYYY')
        });
        let dateString = scope.carSearchForm.controls.startDate.value;
        let dateParts = dateString.split('/');
        let dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
        let inDate = new Date(dateObject);

        scope.carSearchForm.patchValue({ endDate: moment(inDate).format('DD/MM/YYYY') });

        $('input[name="endDate"]').daterangepicker({
          singleDatePicker: true,
          dateFormat:'YYYY-MM-DD',
          minDate:scope.carSearchForm.controls.endDate.value,
          startDate :scope.carSearchForm.controls.endDate.value,
          locale: { format: 'DD/MM/YYYY'},
          // tslint:disable-next-line:only-arrow-functions no-shadowed-variable
        },function(checkout, end, label) {
          scope.carSearchForm.patchValue({
            endDate: moment(checkout).format('DD/MM/YYYY')
          });
        });
      });
    });
  }
  localStorageSearches(search){
    this.savedSearches.push(search);
    localStorage.setItem("searchArray", JSON.stringify(this.savedSearches));
  }
  getLocalStorageSearches(){
    return JSON.parse(localStorage.getItem("searchArray"));
  }

}
