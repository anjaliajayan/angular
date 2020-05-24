import { Component, OnInit } from '@angular/core';
import { FlightSearchLog } from 'src/app/shared/models/report/flight-search';
import { FormBuilder, Validators } from '@angular/forms';
import { ReportService } from 'src/app/shared/services/report/report.service';
import { ToastrService } from 'ngx-toastr';
declare const moment: any;
declare const $: any;
@Component({
  selector: 'app-search-flight-log',
  templateUrl: './search-flight-log.component.html',
  styleUrls: ['./search-flight-log.component.scss']
})
export class SearchFlightLogComponent implements OnInit {

  NewFlightSearchLog: Array<[FlightSearchLog]> = [];
  totalFlightSearchLog: number = 0;
  submitted: any = false;
  pages: number = 0;
  orgNames: string[] = [];
  pageSearch: number = 0;
  searchFlightForm: any = {
    page: this.pageSearch,
    limit:30
  }
  flightSearchPage = 0;
  departure_details: any;
  arrival_details: any;



  constructor(private fb: FormBuilder,
    public newReportService: ReportService,
    private toastr: ToastrService) { }

    searchFlightLogForm = this.fb.group({
    organisation_id:[''],
    f_startDate: ['', [Validators.required]],
    f_endDate: ['', [Validators.required]]
  });


  get f() { return this.searchFlightLogForm.controls; }

  ngOnInit() {
    this.fetchAllOrgNames();
    this.fetchAllFlightLogs();
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
      $('input[name="f_startDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment(),
        autoUpdateInput: false,
        // maxYear: parseInt(moment().format('YYYY'), 10)
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.searchFlightLogForm.get('f_startDate').setValue(moment(start).format('DD/MM/YYYY'));
      });
    });
  }

  loadEndDate = () => {
    var scope = this;
    $(function () {
      $('input[name="f_endDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment(),
        minDate: moment(),
        autoUpdateInput: false,
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.searchFlightLogForm.get('f_endDate').setValue(moment(start).format('DD/MM/YYYY'));
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
  

  fetchAllFlightLogs() {
    this.newReportService.GetAllFlightLogs(this.searchFlightForm)
      .subscribe((res: any) => {
      this.totalFlightSearchLog = res.totalResult;
          this.flightSearchPage = res.page;
        if (res.status) {
          if (res.result.length != 0) {
    
            res.result.map((ele) => {
              ele.location_details = ele.stream.LocationsDetail;
              if (ele.location_details != null) {
                ele.location_details.forEach(filteredLoc => {
                  this.departure_details = filteredLoc.departure;
                  this.arrival_details = filteredLoc.arrival
                });
                ele.departure_airport_code = this.departure_details.airport_code;
                ele.arrival_airport_code = this.arrival_details.airport_code;
              }
            });
            this.NewFlightSearchLog = res.result;
          }
  
          else{
            this.toastr.info(`There is no data Available to display`, `${res.message}`, {
              timeOut: 2000,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            }); 
          }
        }
      });
  }
  pageCallback(event: any) {
    let offset = event.offset;
    this.searchFlightForm.page = offset;
    this.fetchAllFlightLogs();
  }

  flightSearchLog(){
    this.submitted = true;
    if (this.searchFlightLogForm.invalid) {
      return;
    }

    this.newReportService.GetAllFlightLogs(this.searchFlightLogForm.value)
    .subscribe((res: any) => {
      if (res.status) {
        // if(res.result.length){
        //   this.totalFlightSearchLog = res.totalResult;
        //   this.flightSearchPage = res.page;
        //   this.NewFlightSearchLog = res.result;


        // }
        if (res.result.length != 0) {
          res.result.map((ele) => {
            ele.location_details = ele.stream.LocationsDetail;
            if (ele.location_details != null) {
              ele.location_details.forEach(filteredLoc => {
                this.departure_details = filteredLoc.departure;
                this.arrival_details = filteredLoc.arrival
              });
              ele.departure_airport_code = this.departure_details.airport_code;
              ele.arrival_airport_code = this.arrival_details.airport_code;
            }
          });
          this.NewFlightSearchLog = res.result;

        }

        else{
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
    this.searchFlightLogForm.reset();
  }
}
