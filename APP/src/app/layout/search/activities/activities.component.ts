import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

import { CommonService } from './../../../shared/services/common.service';
import { ActivitySearchService } from './../../../shared/services/activity.service';
import { ModalService } from '../../_modal';
import { environment } from './../../../../environments/environment';
declare const $: any;
declare const moment: any;
import * as listCities from '../hotels/cities.json';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {
  screenTitle: string = 'Activities';
  activitySearchObj: any = {};
  searchLoader: boolean = false;
  searchBoxCard: boolean = false;
  searchResultsCard: boolean = false;
  showSearchResult:boolean=true;
  modify: boolean = true;
  activityResults: any = [];
  activiy_childrens : any;
  searchActivitySpinner = false;
  activitySearchCriteria = {};
  searchActivitysResult: any = [];
  preSearchPersistentObj = {};
  clearallActiveChilderns : boolean = true;
  cities : any =[];
  _globals: any = [];
  allCities: any = (listCities as any).default;

  constructor(
    private activitySearchService: ActivitySearchService,
    private fb: FormBuilder,
    private router: Router,
    private commonService: CommonService,
    private toastr: ToastrService,
    private modalService: ModalService
  ) { }

  activitySearchForm = this.fb.group({
    currency: ['AED'],
    activiy_childrens:['0'],
    activity_child_one:['0'],
    activity_child_two:['0'],
    activity_child_three:['0'],
    activity_child_four:['0'],
    activity_child_five:['0'],
    pickUp: [''],
    destination: [''],
    destinationName : [''],
    startDate: [''],
    activity_adults : ['1'],
    endDate: [''],
    country: [''],
    markupValue: [0, [Validators.min(0)]],
    markupBy: [''],
  })



  ngOnInit() {
    this.loadConfig();
    this.pickUpDate();
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {

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
        scope.activitySearchForm.patchValue({
          startDate: moment(start).format('DD/MM/YYYY')
        });
        let dateString = scope.activitySearchForm.controls.startDate.value;
        let dateParts = dateString.split('/');
        let dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
        let inDate = new Date(dateObject);
        inDate.setDate(inDate.getDate() + 1);

        scope.activitySearchForm.patchValue({ endDate: moment(inDate).format('DD/MM/YYYY') });

        $('input[name="endDate"]').daterangepicker({
          singleDatePicker: true,
          dateFormat:'YYYY-MM-DD',
          minDate:scope.activitySearchForm.controls.endDate.value,
          startDate :scope.activitySearchForm.controls.endDate.value,
          locale: { format: 'DD/MM/YYYY'},
          // tslint:disable-next-line:only-arrow-functions no-shadowed-variable
        },function(checkout, end, label) {
          scope.activitySearchForm.patchValue({
            endDate: moment(checkout).format('DD/MM/YYYY')
          });
        });
      });
    });
  }
  loadConfig() {

    $(document).ready(function() {
      $('.tabular.menu .item').tab();
    });

    const url = environment.serverURL;
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
          url: url + '/api/activities/activity-get-city/{query}',
          beforeXHR: function (xhr) {
            xhr.setRequestHeader('Authorization', token);
            return xhr;
          },
          onResponse: function (response) {
            this.cities = response.result;
            //localStorage.setItem('allCities', JSON.stringify(this.cities));
            console.log("jquery cities", this.cities);
            const result = { success: true, results: [] };
            $.each(response.result, function (index, item) {
              result['results'].push({
                name: item.label,
                value: item.label+'~'+item.city_id
              });
            });
            //   console.log("result",result);
            return result;
          },
        },
      })
    });
  }
  clearActiveChilderns(){
    console.log(this.activiy_childrens);
      }
  onChange(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
    console.log(event);
    // this.dropoffvalue = newVal;
  }
  total_adults(){
    let adults = this.activitySearchForm.controls.activity_adults.value;
    return adults;
  }
  total_children(){
    let children = "";
    if(this.activitySearchForm.controls.activiy_childrens.value>0){
      children+= this.activitySearchForm.controls.activiy_childrens.value;
    }
    return children;
  }
  get_children_age(){
    let child_age = "";
    if(this.activitySearchForm.controls.activiy_childrens.value>0) {
      if(this.activitySearchForm.controls.activity_child_one.value>0){
        child_age="ca1="+this.activitySearchForm.controls.activity_child_one.value;
      }
      if(this.activitySearchForm.controls.activity_child_two.value>0){
        child_age +="&amp;ca1="+this.activitySearchForm.controls.activity_child_two.value;
      }
      if(this.activitySearchForm.controls.activity_child_three.value>0){
        child_age +="&amp;ca1="+ this.activitySearchForm.controls.activity_child_three.value;
      }
      if(this.activitySearchForm.controls.activity_child_four.value>0){
        child_age +="&amp;ca1="+ this.activitySearchForm.controls.activity_child_four.value;
      }
      if(this.activitySearchForm.controls.activity_child_five.value>0){
        child_age +="&amp;ca1="+this.activitySearchForm.controls.activity_child_five.value;
      }
    }

    return child_age;
    console.log("child_age",child_age);
  }

    searchActivity = () => {
      this.cities = this.allCities;
      this.searchActivitySpinner = true;
      // var city_id = this.activitySearchForm.controls.destination.value;
      let adults = this.total_adults();
      let children_activity = this.total_children();
      let child_age = this.get_children_age();
       this.cities = this.allCities;
    let activitydestinationvalue = this.activitySearchForm.controls.destination.value.split('~');
    this.activitySearchObj.destination = activitydestinationvalue[1];
    this.activitySearchObj.activity_children = children_activity;
    this.activitySearchObj.child_age = child_age;
    this.activitySearchObj.destinationName = activitydestinationvalue[0];
    this.activitySearchObj.adultCount = adults;
    this.activitySearchObj.country = this.activitySearchForm.controls.country.value;
    this.activitySearchObj.currency = this.activitySearchForm.controls.currency.value;
    this.activitySearchObj.startDate = this.activitySearchForm.controls.startDate.value;
    this.activitySearchObj.endDate = this.activitySearchForm.controls.endDate.value;
    this.activitySearchObj.markupValue = this.activitySearchForm.controls.markupValue.value;
    this.activitySearchObj.markupBy = this.activitySearchForm.controls.markupBy.value;

    this.searchBoxCard = true;
      if(this.activitySearchObj.destinationName!='') {
        if (this.activitySearchObj.startDate != '' && this.activitySearchObj.endDate != '') {
          let toastrTitle = `No activities`;
          let toastrMessage = `Oops! We're unable to find activities for searched parameters. Try again with different search criteria.`;
          this.activitySearchService.searchActivity(this.activitySearchObj)
            .subscribe((response: any) => {
                if (response.status) {
                  console.log(response);
                  this.activitySearchCriteria = response.result['ActivitySearchCriteria']
                  this.searchActivitysResult = response.result.Activities['Activity']
                  if (this.searchActivitysResult == undefined) {
                    this.searchActivitysResult = [];
                    this.buildError('No results found', 'Activity');
                    this.showSearchResult = false;
                  } else {
                    this.searchActivitysResult = this.searchActivitysResult;
                    this.toastr.success(this.searchActivitysResult.length + ' results found', `Activity`, {
                      timeOut: 5000,
                      progressBar: false,
                      positionClass: 'toast-bottom-right'
                    });
                  }
                  console.log(this.searchActivitysResult);
                  console.log(this.searchActivitysResult.length);
                } else {
                  this.buildError(toastrMessage, toastrTitle);
                }
                this.showSearchResult = false;
              },
              (httpErrorResponse) => {
                this.buildError(toastrMessage, toastrTitle);
              });
        } else {
          this.searchActivitySpinner = false;
          this.searchBoxCard = false;
          this.buildError('Dates Not Selected', 'Dates Not Selected');
        }
      }else{
        this.searchActivitySpinner = false;
        this.searchBoxCard = false;
        this.buildError('Please Select Destination', 'Please Select Destination');
      }

}

  buildError(title, message) {
    this.toastr.info(message, title, {timeOut: 10000, progressBar: false, positionClass: 'toast-bottom-right'});
  }

  showCancelModal(modalId: any) {
    this.modalService.open(modalId);
  }

  closeModal(modalId: any) {
    this.modalService.close(modalId);
  }


}
