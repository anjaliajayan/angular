import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReportService } from 'src/app/shared/services/report/report.service';
import { ModalService } from '../../_modal';
import { ToastrService } from 'ngx-toastr';
import { ExcelService } from 'src/app/shared/services/excel.service';


declare const moment: any;
declare const $: any;

@Component({
  selector: 'app-booking-report',
  templateUrl: './booking-report.component.html',
  styleUrls: ['./booking-report.component.scss'],
})
export class BookingReportComponent implements OnInit {

  agents: string[] = [];
  products: string[] = [];
  suppliers: string[] = [];
  newBookingReportObj: any = {};
  showDynamicReport: boolean = false;
  disable: boolean = true;
  dropdownSettings = {};
  FilteredBookingReport = [];
  allBookings: any = [];
  reports:any=[];
  getInfo: any;
  allBookingInfo: any;
  suppliersNames: any;
  newFilteredData: any = [];
  tickets: string[] = [];
  supplierNames: string[] = [];
  emdDetails: string[] = [];
  showEMDtable: boolean;
  submitted: any = false;
  showDetailModal: Boolean = false;
  bookingsLoader: any = false;


  constructor(private fb: FormBuilder,
    public ReportService: ReportService,
    private modalService: ModalService, 
    private toastr: ToastrService,
    private excelService: ExcelService
    
    
    ) {
    // Multiple selection 
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'sub_code',
      textField: 'commercial_name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  bookingReportForm = this.fb.group({
    selectAgent: [''],
    selectProduct: ['', [Validators.required]],
    selectSupplier: [''],
    bookingStartDate: ['', [Validators.required]],
    bookingEndDate: ['', [Validators.required]]
  });

  // convenience getter for easy access to form fields
  get f() { return this.bookingReportForm.controls; }

  ngOnInit() {
    this.fetchAllAgents();
    this.fetchAllProducts();
    this.fetchAllSuppliers();
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $('.menu .item').tab();
      $('.ui.dropdown').dropdown();
      $('.dropdownOne').dropdown({ placeholder: 'Choose agents' });
    });

    this.loadEndDate();
    this.loadStartDate();
  }

  loadStartDate() {
    var scope = this;
    $(function () {
      $('input[name="bookingStartDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1980,
        startDate: moment(),
        maxDate: moment(),
        autoUpdateInput: false,
        // maxYear: parseInt(moment().format('YYYY'), 10)
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.bookingReportForm.get('bookingStartDate').setValue(moment(start).format('YYYY-MM-DD'));
      });
    });
  }

  loadEndDate() {
    var scope = this;
    $(function () {
      $('input[name="bookingEndDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment(),
        // minDate: moment(),
        autoUpdateInput: false,
        // maxYear: parseInt(moment().format('YYYY'), 10)
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.bookingReportForm.get('bookingEndDate').setValue(moment(start).format('YYYY-MM-DD'));
      });
      
    });
  }

  fetchAllAgents() {
    this.bookingsLoader = true;
    this.ReportService.GetAllAgents().subscribe((res: any) => {
      if (res.type != 'error') {
        if (res.Organization.length != 0) {
          this.agents = res.Organization;
          this.bookingsLoader = false;
        }
        else {
          this.bookingsLoader = false;
          this.toastr.info(`There is no agents available`, ``, {
            timeOut: 1000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
        }
      } else {
        this.toastr.error(`${res.msg}`, `${res.msg}`, {
          timeOut: 1000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
      }
    })
  }

  fetchAllProducts() {
    this.bookingsLoader = true;
    this.ReportService.GetAllProducts().subscribe((res: any) => {
      if (res.type != 'error') {
        this.bookingsLoader = false;
        if (res.Data.length != 0) {
          var dataoutput = res.Data;
          var keys = Object.keys(res.Data);
          for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (dataoutput[key] == 1)
              this.products.push(key)
          }
        }
        else {
          this.bookingsLoader = false;
          this.toastr.info(`There is no products available `, ``, {
            timeOut: 1000,
            progressBar: false,

            positionClass: 'toast-bottom-right'
          });
        }
      } else {
        this.toastr.error(`${res.msg}`, `${res.msg}`, {
          timeOut: 1000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
      }

    })
  }

  fetchAllSuppliers() {
    this.bookingsLoader = true;
    this.ReportService.GetAllSuppliers().subscribe((res: any) => {
      if (res.status) {
        this.bookingsLoader = false;
        if (res.result.length != 0) {
          this.suppliers = res.result.filter(data => data.name !== ""); 
          this.suppliers = res.result;
        }
        else {
          this.bookingsLoader = false;
          this.toastr.info(`There is no suppliers`, ``, {
            timeOut: 1000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
        }
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

  viewReport = () => {
    this.bookingsLoader = true;
    this.submitted = true;
    if (this.bookingReportForm.invalid) {
      this.bookingsLoader = false;
      return;
    }
    this.showDynamicReport = true;
    this.newBookingReportObj.agent_codes = this.bookingReportForm.get('selectAgent').value;
    this.newBookingReportObj.product = this.bookingReportForm.get('selectProduct').value;
    this.newBookingReportObj.supplier_id = this.bookingReportForm.get('selectSupplier').value;
    this.newBookingReportObj.start_date = this.bookingReportForm.get('bookingStartDate').value;
    this.newBookingReportObj.end_date = this.bookingReportForm.get('bookingEndDate').value;
    this.ReportService.searchReportBooking(this.newBookingReportObj).subscribe((results: any) => {
      if (results.type == 'data') {
        this.bookingsLoader = false;
        if (results.Data.length != 0) {
          this.allBookings = results.Data;
        }
        else {
          this.bookingsLoader = false;
          this.toastr.info(`Sorry!!`, `There is no data available to display`, {
            timeOut: 1000,
            progressBar: false,

            positionClass: 'toast-bottom-right'
          });
        }
      }
      else {
        this.bookingsLoader = false;
        this.toastr.error(`${results.msg}`, `${results.msg}`, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      }
    })
  }

  getBookingRefereceDetails(valObj: any, modalId: any) {
    this.ReportService.getFlightBookingDetails(valObj.trip_id).subscribe((result: any) => {
      if (result.type != 'error') {
        this.getInfo = result;
        this.newFilteredData = result.bookings_flights;
        if (this.newFilteredData.length) {
          this.newFilteredData.map((filterdEle, key) => {
            if (result.bookings_flights[key] != null) {
  
              filterdEle.service_name = result.bookings_flights[key].supplier.name;
              filterdEle.trip_id = result.trip_id;
              if (result.bookings_flights[key].flight_tickets[key] != null) {
                filterdEle.ticket_number = result.bookings_flights[key].flight_tickets[key].ticket_number;
              }
            }
          })
        }
        this.showDetailModal = true;
        this.modalService.open(modalId);
      } else {
        this.toastr.error(`${result.msg}`, `${result.msg}`, {
          timeOut: 10000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      }
    })
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  resetReport = () => {
    this.bookingReportForm.reset();
    $(".ui.dropdown").dropdown("clear");
    this.showDynamicReport=false;
    this.bookingsLoader = false;
  }

  exportData(){
    console.log(this.newBookingReportObj);
    this.ReportService.exportBooking(this.newBookingReportObj).subscribe((result: any) => {
      if (result.type != 'error') {
        this.excelService.exportAsExcelFile(result.data, 'bookings');
      } else {
        this.toastr.error(`${result.msg}`, `${result.msg}`, {
          timeOut: 10000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      }
    });
  }
}
