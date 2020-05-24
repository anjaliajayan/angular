import { Component, OnInit } from '@angular/core';
import { Segment } from 'src/app/shared/models/report/segment';
import { FormBuilder, Validators } from '@angular/forms';
import { ReportService } from 'src/app/shared/services/report/report.service';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/shared/services/common.service';
import { environment } from './../../../../environments/environment';

declare const moment: any;
declare const $: any;
@Component({
  selector: 'app-segment-report',
  templateUrl: './segment-report.component.html',
  styleUrls: ['./segment-report.component.scss'],
})
export class SegmentReportComponent implements OnInit {

  NewSegment: Array<[Segment]> = [];
  airlines: string[] = [];
  departures: string[] = [];
  arrivals: string[] = [];
  newSegmentReportObj: any = {};
  totalSegment: number = 0;
  pages: number = 0;
  limit: number = 15;
  pageIndex: number = 1;
  showSegmentReport: boolean = false;
  bookingsLoader:boolean=false;
  submitted: any = false;
  
  constructor(private fb: FormBuilder,
    public commonService: CommonService,
    public newReportService: ReportService,
    private toastr: ToastrService
  ) { }

  segmentReportForm = this.fb.group({
    selectDeparture: [''],
    selectArrival: [''],
    selectAirline: ['', [Validators.required]],
    segmentStartDate: ['', [Validators.required]],
    segmentEndDate: ['', [Validators.required]]
  });


  // convenience getter for easy access to form fields
  get f() { return this.segmentReportForm.controls; }

  ngOnInit() {
    this.fetchAllAirlines();
    this.fetchAllAirportDetails();
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $('.menu .item').tab();
      $('.ui.dropdown').dropdown();
      $('.dropdownTwo').dropdown({ placeholder: 'choose Departures' });
      $('.dropdownThree').dropdown({ placeholder: 'choose Arrivals' });
    });

    this.loadEndDate();
    this.loadStartDate();
    $(document).ready(function () {
      this._globals=localStorage.getItem('_globals');
      let token=JSON.parse(this._globals).token;
      
      $('.multiple_search').dropdown({
        type: 'category',
        minCharacters : 2,
        maxCharacters : 3,
        responseAsync: true,
        apiSettings: {
          url: environment.serverURL + '/api/get-airports-cache/{query}',
          beforeXHR: function (xhr) {
            xhr.setRequestHeader('Authorization',token);
            return xhr;
          },
          onResponse: function (response) {
            const result = { success: true, results: [] };
            $.each(response.result, function (index, item) {
              result['results'].push({
                name: item.AirportCode, 
                value: item.AirportCode
              })
            });
            return result;
          },
        },
      });
  
    });
  }

  loadStartDate() {
    var scope = this;
    $(function () {
      $('input[name="segmentStartDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment(),
        autoUpdateInput: false,
        // maxYear: parseInt(moment().format('YYYY'), 10)
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.segmentReportForm.get('segmentStartDate').setValue(moment(start).format('DD-MM-YYYY'));
      });
    });
  }

  loadEndDate() {
    var scope = this;
    $(function () {
      $('input[name="segmentEndDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment(),
        // minDate: moment(),
        autoUpdateInput: false,
        // maxYear: parseInt(moment().format('YYYY'), 10)
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.segmentReportForm.get('segmentEndDate').setValue(moment(start).format('DD-MM-YYYY'));
      });
    });
  }

  fetchAllAirlines(limit?, pageIndex?) {
    this.bookingsLoader=true;
    this.commonService.getAirlines().subscribe((result: any) => {
      if (result.type == 'data') {
        this.bookingsLoader=false;
        this.airlines = result.airlines;
      }
      else {
        this.toastr.error(`${result.msg}`, `${result.msg}`, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      }
    })
  }

  fetchAllAirportDetails = () => {
    this.bookingsLoader=true;
    this.newReportService.GetAllAirportCode()
      .subscribe((res: any) => {
        if (res.status) {
          this.bookingsLoader=false;
          this.departures = res.result;
          this.arrivals = res.result;
        }
        else {
          this.toastr.error(`${res.message}`, ``, {
            timeOut: 1000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
        }
      })
  }

  segmentViewReport = () => {
    this.bookingsLoader=true;
    this.submitted = true;
    if (this.segmentReportForm.invalid) {
      return;
    }
    this.newSegmentReportObj.departures = this.segmentReportForm.get('selectDeparture').value;
    this.newSegmentReportObj.arrivals = this.segmentReportForm.get('selectArrival').value;
    this.newSegmentReportObj.airline = this.segmentReportForm.get('selectAirline').value;
    this.newSegmentReportObj.start_date = this.segmentReportForm.get('segmentStartDate').value;
    this.newSegmentReportObj.end_date = this.segmentReportForm.get('segmentEndDate').value;
    this.newReportService.GetSearchedSegmentReports(this.newSegmentReportObj).subscribe((results: any) => {
  
      if (results.status) {
        this.bookingsLoader=false;
        if (results.result.length != 0) {
          this.NewSegment = results.result;
          this.showSegmentReport = true;
        } else {
          this.bookingsLoader=false;
          this.toastr.info(`There is no data to display`, ``, {
            timeOut: 2000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
        }
      }
      else {
        this.bookingsLoader=false;
        this.toastr.error(`${results.message}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      }
    })
  }
  resetReport = () => {
    this.bookingsLoader=false;
    this.segmentReportForm.reset();
    $(".ui.dropdown").dropdown("clear");
    this.showSegmentReport = false;
  }
}
