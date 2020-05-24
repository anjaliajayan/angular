import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivitySearchService } from './../../../../shared/services/activity.service';
import {ToastrService} from "ngx-toastr";
import { Router, ActivatedRoute } from '@angular/router';
const Entities = require('html-entities').AllHtmlEntities;
declare const $: any;
declare const moment: any;

@Component({
  selector: 'app-activity-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() activity;
  @Input() ActivitySearchCriteria;

  showDetailsTab: boolean = false;
  selectedActivity: any = null;
  activityDetailsResult = {};
  showDetailsDisabled: boolean = false;
  blockLoader: boolean = false;
  searchBoxCard: boolean = true;
  detailsActivitySpinner: boolean = false;
  bookActivitySpinner: boolean = false;
  activityDetailsObj: any = {};
  currentActivityBlock: any = null;
  currentShowActivityBlock: any = null;
  activitysearch: any = {};
  blockActivity : any = [];
  activityblockList : any;
  searchLoader: boolean = false;
  activityNamefilter:string;
  showfurtherDetails : boolean = false;
  markupPrice : any;
  getUserInfo: boolean = false;
  selectedDateBlock : any ;
  selectedDateBook : any ;

  constructor(
    private fb: FormBuilder,
    private activitySearchService: ActivitySearchService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  activityBookForm = this.fb.group({
    sel_date: [''],
    ageBandCount0:[''],
    ageBandCount1:[''],
    ageBandCount2:[''],
    ageBandCount3:[''],
    ageBandCount4:[''],
    ageBandCount5:[''],
  })

  ngOnInit() {
    this.loadConfig();
  }
  clearFilter(){
    this.activityNamefilter = '';
  }
  convertToString(str){
    const entities = new Entities();
    const string = str.toString();
    const htmlout = entities.decode(string)
    return htmlout;
  }
  getSlice(str){
    let setStrYear = str.toString().slice(0,4);
    let setStrMonth = str.toString().slice(4,6);
    let setStrDate = str.toString().slice(6,8);
    let newDate = setStrDate+'/'+setStrMonth+'/'+setStrYear;
    return newDate;
  }
  modifySearch(){
    window.location.reload();
    }

  ShowActivityDetails(activityData,ActivitySearchCriteria) {
    this.detailsActivitySpinner = true;
    this.getUserInfo = false;
    this.showfurtherDetails = false;
    this.showfurtherDetails = !this.showfurtherDetails;
    let toastrTitle = `No Activity`;
    let toastrMessage = `Oops! We're unable to find activity for searched parameters. Try again with different search criteria.`;
    this.showDetailsDisabled = true;
    this.activitysearch['Activitysearch']= ActivitySearchCriteria;
    this.activitysearch['ActivityDetails']= activityData;

    this.currentShowActivityBlock = activityData.activityCode;
    var third = Object.assign(this.activitysearch);

    this.activityDetailsObj = third;
    console.log(this.activityDetailsObj);
    this.activitySearchService.activityDetails(this.activityDetailsObj)
      .subscribe((response: any) => {
          if (response.status) {

            this.currentActivityBlock = activityData.activityCode;
            this.detailsActivitySpinner = false;
            this.activityDetailsResult = response.result.ActivityResult
            this.blockActivity =  response.result.ActivityResult['Activity'];
            this.markupPrice = response.result.ActivityResult['Activity'].markupPrice
            if(! Array.isArray(this.blockActivity.ticketAvailabilityModes.ticketAvailabilityMode) ){
              this.blockActivity.ticketAvailabilityModes.ticketAvailabilityMode = [this.blockActivity.ticketAvailabilityModes.ticketAvailabilityMode]
          }
          this.toastr.success(`Details fetch Successfully`, `For Activity`, {
            timeOut: 5000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
            console.log(this.activityDetailsResult);
          } else {
            this.buildError(toastrMessage, toastrTitle);
          }
        },
        (httpErrorResponse) => {
          this.buildError(toastrMessage, toastrTitle);
        });
  }
  buildError(title, message) {
    this.searchLoader = false;
    this.searchBoxCard = true;
    this.toastr.info(message, title, {timeOut: 10000, progressBar: false, positionClass: 'toast-bottom-right'});
  }
  loadConfig() {
    $(document).ready(function() {
      $('.tabular.menu .item').tab();
    });
    this.selectedDate();
  }

  summaryTab(id){
    $('#summary-tab-'+id).attr('class','item active');
    $('#tab-summary-'+id).attr('class','ui bottom attached tab segment active');
    $('#photos-tab-'+id).attr('class','item');
    $('#tab-photos-'+id).attr('class','ui bottom attached tab segment') ;
    $('#activity-tab-'+id).attr('class','item');
    $('#tab-activity-'+id).attr('class','ui bottom attached tab segment');

  }
  photosTab(id){
    $('#summary-tab-'+id).attr('class','item');
    $('#tab-summary-'+id).attr('class','ui bottom attached tab segment');
    $('#photos-tab-'+id).attr('class','item active');
    $('#tab-photos-'+id).attr('class','ui bottom attached tab segment active') ;
    $('#activity-tab-'+id).attr('class','item');
    $('#tab-activity-'+id).attr('class','ui bottom attached tab segment');

  }
  activityTab(id){
    $('#summary-tab-'+id).attr('class','item');
    $('#tab-summary-'+id).attr('class','ui bottom attached tab segment');
    $('#photos-tab-'+id).attr('class','item');
    $('#tab-photos-'+id).attr('class','ui bottom attached tab segment ') ;
    $('#activity-tab-'+id).attr('class','item active');
    $('#tab-activity-'+id).attr('class','ui bottom attached tab segment active');

  }
  dateFormat(date){
    var fotmatted_date='';
      if(date) {
          var yr = date.slice(0,4);
          var month = date.slice(4,6);
          var date = date.slice(6,8);
          fotmatted_date= date+"/"+month+"/"+yr;
      }
        return fotmatted_date;
  }
  selectedDate() {
    var scope = this;
    $(function () {
      $('input[name="sel_date"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        autoUpdateInput: false,
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.activityBookForm.patchValue({'sel_date': moment(start).format('DD/MM/YYYY')});
      });
    });
  }
  updateCheckedOptions(option, event,params,selectedcode){
    console.log(option);
    console.log(event);

    this.selectedDateBlock = event.target.value;
    this.selectedDateBook = option;
    this.bookActivitySpinner = true;
    this.blockLoader = true;
    console.log('activityBookForm',this.activityBookForm.value)
    const data = {
      sc: this.activityDetailsResult,
      bi: params,
      sec:selectedcode,
      secd: this.selectedDateBlock,
      fval:this.activityBookForm.value
    }
    this.activitySearchService.BlockRequest(data).subscribe((respt: any) => {
      if (respt.status) {
        this.blockLoader = false;
        this.bookActivitySpinner = false;
        this.activityblockList =respt;
        this.markupPrice = this.activityblockList.result.ActivityResult['Activity'].markupPrice
      }
    });
  }
	activityBlocking(params,selectedcode) {
    this.bookActivitySpinner = true;
    this.blockLoader = true;
    const data = {
      sc: this.activityDetailsResult,
      bi: params,
      sec:selectedcode,
      secd: this.selectedDateBlock

    }
   console.log(this.activityBookForm);
		this.activitySearchService.BlockRequest(data).subscribe((respt: any) => {
			 if (respt.status) {
        this.blockLoader = false;
        this.bookActivitySpinner = false;
        this.activityblockList =respt;
        this.router.navigateByUrl('search/activities/block' , { state: this.activityblockList });
			 }
    });

	}


}
