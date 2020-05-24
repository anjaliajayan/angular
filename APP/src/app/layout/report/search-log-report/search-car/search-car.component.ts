import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReportService } from 'src/app/shared/services/report/report.service';
import { ToastrService } from 'ngx-toastr';
import { CarsSearchLog } from 'src/app/shared/models/report/car-log';
declare const moment: any;
declare const $: any;
@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.scss']
})
export class SearchCarComponent implements OnInit {

  NewCarSearchLog: Array<[CarsSearchLog]> = [];
  totalCarSearchLog: number = 0;
  submitted: any = false;
  pages: number = 0;
  orgNames: string[] = [];
  pageSearch: number = 0;
  searchCarForm: any = {
    page: this.pageSearch
  }
  carSearchPage = 0;


  constructor(private fb: FormBuilder,
    public newReportService: ReportService,
    private toastr: ToastrService) { }

    searchCarLogForm = this.fb.group({
    organisation_id:[''],
    c_startDate: ['', [Validators.required]],
    c_endDate: ['', [Validators.required]]
  });


  get f() { return this.searchCarLogForm.controls; }

  ngOnInit() {
    this.fetchAllOrgNames();
    this.fetchAllCarLogs();
  }
  ngAfterViewInit() {
    $(document).ready(function () {
      $('.menu .item').tab();
      $('.ui.dropdown').dropdown();
    });

    this.loadEndDate();
    this.loadStartDate();
  }

  loadStartDate = () => {
    var scope = this;
    $(function () {
      $('input[name="c_startDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment(),
        maxDate: moment(),
        autoUpdateInput: false,
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.searchCarLogForm.get('c_startDate').setValue(moment(start).format('DD/MM/YYYY'));
      });
    });
  }

  loadEndDate = () => {
    var scope = this;
    $(function () {
      $('input[name="c_endDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment(),
        minDate: moment(),
        autoUpdateInput: false,
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.searchCarLogForm.get('c_endDate').setValue(moment(start).format('DD/MM/YYYY'));
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
  

  fetchAllCarLogs() {
    this.newReportService.GetAllCarLogs(this.searchCarForm)
      .subscribe((res: any) => {
        if (res.status) {
          this.totalCarSearchLog = res.totalResult;
          this.carSearchPage = res.page;
          this.NewCarSearchLog = res.result;
        }
      });
  }
  pageCallback(event: any) {
    let offset = event.offset;
    this.searchCarForm.page = offset;
    this.fetchAllCarLogs();
  }

  carSearchLog(){
    this.submitted = true;
    if (this.searchCarLogForm.invalid) {
      return;
    }
    this.newReportService.GetAllCarLogs(this.searchCarLogForm.value)
    .subscribe((res: any) => {
      if (res.status) {
        if(res.result.length){
          this.totalCarSearchLog = res.totalResult;
          this.carSearchPage = res.page;
          this.NewCarSearchLog = res.result;
        }else{
          this.toastr.info(`There is no data Available to display`, `${res.message}`, {
            timeOut: 2000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          }); 
        }
  
      }else{
        this.NewCarSearchLog = [];
        this.toastr.error(`${res.message}`, ``, {
          timeOut: 2000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        }); 
      }
    });
  }
  reset(){
    this.searchCarLogForm.reset();
  }
}
