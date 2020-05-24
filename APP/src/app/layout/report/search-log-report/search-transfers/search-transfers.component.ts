import { Component, OnInit } from '@angular/core';
import { TransferSearchLog } from 'src/app/shared/models/report/transfer-log';
import { FormBuilder, Validators } from '@angular/forms';
import { ReportService } from 'src/app/shared/services/report/report.service';
import { ToastrService } from 'ngx-toastr';

declare const moment: any;
declare const $: any;
@Component({
  selector: 'app-search-transfers',
  templateUrl: './search-transfers.component.html',
  styleUrls: ['./search-transfers.component.scss']
})
export class SearchTransfersComponent implements OnInit {

  NewTransferSearchLog: Array<[TransferSearchLog]> = [];
  totalTransferSearchLog: number = 0;
  submitted: any = false;
  pages: number = 0;
  orgNames: string[] = [];
  pageSearch: number = 0;
  searchTransferForm: any = {
    page: this.pageSearch
  }
  transferSearchPage = 0;


  constructor(private fb: FormBuilder,
    public newReportService: ReportService,
    private toastr: ToastrService) { }

    searchTransferLogForm = this.fb.group({
    organisation_id:[''],
    t_startDate: ['', [Validators.required]],
    t_endDate: ['', [Validators.required]]
  });


  get f() { return this.searchTransferLogForm.controls; }

  ngOnInit() {
    this.fetchAllOrgNames();
    this.fetchAllTransferLogs();
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
      $('input[name="t_startDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment(),
        maxDate: moment(),
        autoUpdateInput: false,
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.searchTransferLogForm.get('t_startDate').setValue(moment(start).format('DD/MM/YYYY'));
      });
    });
  }

  loadEndDate = () => {
    var scope = this;
    $(function () {
      $('input[name="t_endDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment(),
        minDate: moment(),
        autoUpdateInput: false,
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.searchTransferLogForm.get('t_endDate').setValue(moment(start).format('DD/MM/YYYY'));
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
  

  fetchAllTransferLogs() {
    this.newReportService.GetAllTransferLogs(this.searchTransferForm)
      .subscribe((res: any) => {
        if (res.status) {
          this.totalTransferSearchLog = res.totalResult;
          this.transferSearchPage = res.page;
          this.NewTransferSearchLog = res.result;
        }
      });
  }
  pageCallback(event: any) {
    let offset = event.offset;
    this.searchTransferForm.page = offset;
    this.fetchAllTransferLogs();
  }

  transferSearchLog(){
    this.submitted = true;
    if (this.searchTransferLogForm.invalid) {
      return;
    }
    this.newReportService.GetAllTransferLogs(this.searchTransferLogForm.value)
    .subscribe((res: any) => {
      if (res.status) {
        if(res.result.length){
          this.totalTransferSearchLog = res.totalResult;
          this.transferSearchPage = res.page;
          this.NewTransferSearchLog = res.HotelSearchLog;
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
    this.searchTransferLogForm.reset();
  }
}
