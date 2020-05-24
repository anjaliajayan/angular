import { Component, OnInit } from '@angular/core';
import { InsuranceSearchLog } from 'src/app/shared/models/report/insurance-log';
import { FormBuilder, Validators } from '@angular/forms';
import { ReportService } from 'src/app/shared/services/report/report.service';
import { ToastrService } from 'ngx-toastr';
declare const moment: any;
declare const $: any;
@Component({
  selector: 'app-search-insurance',
  templateUrl: './search-insurance.component.html',
  styleUrls: ['./search-insurance.component.scss']
})
export class SearchInsuranceComponent implements OnInit {

  NewInsuranceSearchLog: Array<[InsuranceSearchLog]> = [];
  totalInsuranceSearchLog: number = 0;
  submitted: any = false;
  pages: number = 0;
  orgNames: string[] = [];
  pageSearch: number = 0;
  searchInsuranceForm: any = {
    page: this.pageSearch
  }
  insuranceSearchPage = 0;


  constructor(private fb: FormBuilder,
    public newReportService: ReportService,
    private toastr: ToastrService) { }

    searchInsuranceLogForm = this.fb.group({
    organisation_id:[''],
    startDate: ['', [Validators.required]],
    endDate: ['', [Validators.required]]
  });


  get f() { return this.searchInsuranceLogForm.controls; }

  ngOnInit() {
    this.fetchAllOrgNames();
    this.fetchAllInsuranceLogs();
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
      $('input[name="startDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment(),
        maxDate: moment(),
        autoUpdateInput: false,
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.searchInsuranceLogForm.get('startDate').setValue(moment(start).format('DD/MM/YYYY'));
      });
    });
  }

  loadEndDate = () => {
    var scope = this;
    $(function () {
      $('input[name="endDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment(),
        minDate: moment(),
        autoUpdateInput: false,
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.searchInsuranceLogForm.get('endDate').setValue(moment(start).format('DD/MM/YYYY'));
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
  

  fetchAllInsuranceLogs() {

    this.newReportService.GetAllInsuranceLogs(this.searchInsuranceForm)
      .subscribe((res: any) => {
        if (res.status) {
          this.totalInsuranceSearchLog = res.totalResult;
          this.insuranceSearchPage = res.page;
          this.NewInsuranceSearchLog = res.result;
        }
      });
  }
  pageCallback(event: any) {
    let offset = event.offset;
    this.searchInsuranceForm.page = offset;
    this.fetchAllInsuranceLogs();
  }

  insuranceSearchLog(){
    this.submitted = true;
    if (this.searchInsuranceLogForm.invalid) {
      return;
    }
    this.newReportService.GetAllInsuranceLogs(this.searchInsuranceLogForm.value)
    .subscribe((res: any) => {
      if (res.status) {
        if(res.result.length){
          this.totalInsuranceSearchLog = res.totalResult;
          this.insuranceSearchPage = res.page;
          this.NewInsuranceSearchLog = res.result;
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
    this.searchInsuranceLogForm.reset();
  }

}
