import { Component, OnInit } from '@angular/core';
import { ActivitySearchLog } from 'src/app/shared/models/report/activity-log';
import { FormBuilder, Validators } from '@angular/forms';
import { ReportService } from 'src/app/shared/services/report/report.service';
import { ToastrService } from 'ngx-toastr';
declare const moment: any;
declare const $: any;
@Component({
  selector: 'app-search-activity',
  templateUrl: './search-activity.component.html',
  styleUrls: ['./search-activity.component.scss']
})
export class SearchActivityComponent implements OnInit {

  NewActivitySearchLog: Array<[ActivitySearchLog]> = [];
  totalActivitySearchLog: number = 0;
  submitted: any = false;
  pages: number = 0;
  orgNames: string[] = [];
  pageSearch: number = 0;
  searchActivityForm: any = {
    page: this.pageSearch
  }
  
  offset: number = 0;
  activitySearchPage = 0;
  filterParams: any = {
    page: this.offset,
  }

  constructor(private fb: FormBuilder,
    public newReportService: ReportService,
    private toastr: ToastrService) { }

    searchActivityLogForm = this.fb.group({
    organisation_id:[''],
    start_date: ['', [Validators.required]],
    end_date: ['', [Validators.required]],
    page:0
  });


  get f() { return this.searchActivityLogForm.controls; }

  ngOnInit() {
    this.fetchAllOrgNames();
    this.fetchAllActivityLogs(this.searchActivityForm);
  }
  ngAfterViewInit() {
    $(document).ready(function () {
      $('.menu .item').tab();
      $('.ui.dropdown').dropdown();
    });

    this.loadEndDate();
    this.loadStartDate();
  }

  loadStartDate() {
    var scope = this;
    $(function () {
      $('input[name="start_date"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment(),
        autoUpdateInput: false,
        // maxYear: parseInt(moment().format('YYYY'), 10)
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.searchActivityLogForm.get('a_startDate').setValue(moment(start).format('DD/MM/YYYY'));
      });
    });
  }

  loadEndDate() {
    var scope = this;
    $(function () {
      $('input[name="end_date"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment(),
        minDate: moment(),
        autoUpdateInput: false,
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.searchActivityLogForm.get('a_endDate').setValue(moment(start).format('DD/MM/YYYY'));
      });
    });
  }


  fetchAllOrgNames(){
  this.newReportService.GetAllOrganization().subscribe((res: any) => {
    this.orgNames = res.result.data;
      if (res.status) {
        if (res.result.length != 0) {
          this.orgNames = res.result.data;
        } else {
          this.toastr.info(`There is no data available to display`, ``, {
            timeOut: 1000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
        }
      } else {
        this.toastr.error(`${res.message}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      }
    })
  }
  
  fetchAllActivityLogs(params) {
    this.newReportService.GetAllActivityLogs(params)
      .subscribe((res: any) => {
        if (res.status) {
          this.totalActivitySearchLog = res.totalResult;
          this.activitySearchPage = res.page;
          this.NewActivitySearchLog = res.result;
        }
      });
  }
  pageCallback(event: any) {
    let offset = event.offset;
    this.searchActivityForm.page = offset;
    this.fetchAllActivityLogs(this.searchActivityForm);
  }


  activitySearchLog(){
    this.submitted = true;
    if (this.searchActivityLogForm.invalid) {
      return;
    }
    this.newReportService.GetAllActivityLogs(this.searchActivityLogForm.value)
    .subscribe((res: any) => {
      if (res.status) {
        if(res.result.length){
          this.totalActivitySearchLog = res.totalResult;
          this.activitySearchPage = res.page;
          this.NewActivitySearchLog = res.result;
        }else{
          this.toastr.info(`There is no data Available to display`, `${res.message}`, {
            timeOut: 2000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          }); 
        }
  
      }else{
        this.toastr.error(`${res.message}`, ``, {
          timeOut: 2000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        }); 
      }
    });
  }

  reset(){
    this.searchActivityLogForm.reset();
  }
}
