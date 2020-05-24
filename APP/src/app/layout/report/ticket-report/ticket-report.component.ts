import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReportService } from 'src/app/shared/services/report/report.service';
import { ToastrService } from 'ngx-toastr';
import { flatMap } from 'rxjs/operators';
import { ExcelService } from 'src/app/shared/services/excel.service';



declare const moment: any;
declare const $: any;
@Component({
  selector: 'app-ticket-report',
  templateUrl: './ticket-report.component.html',
  styleUrls: ['./ticket-report.component.scss']
})
export class TicketReportComponent implements OnInit {

  reportResults: any;
  agents: string[] = [];
  productLists: string[] = [];
  suppliers: string[] = [];
  ticketReportObj: any = {};
  originalTicketResult;
  showTicketReport: boolean = false;
  bookingsLoader:boolean=false;
  submitted: any = false;
  NewTicketReport: any;
  pages: number = 0;
  limit: number = 15;
  pageIndex: number = 1;


  constructor(private fb: FormBuilder,
     public reportService: ReportService, 
     private toastr: ToastrService,
     private excelService: ExcelService) { }

  ticketReportForm = this.fb.group({
    agentList: [''],
    productList: [''],
    supplierList: [''],
    ticketStartDate: ['', [Validators.required]],
    ticketEndDate: ['', [Validators.required]]

  });

  // convenience getter for easy access to form fields
  get f() { return this.ticketReportForm.controls; }

  ngOnInit() {
    this.fetchAllAgents();
    this.fetchAllProducts(this.limit, this.pageIndex);
    this.fetchAllSuppliers()
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $('.menu .item').tab();
      $('.ui.dropdown').dropdown();
      $('.dropdownFive').dropdown({ placeholder: 'Choose agents' });
    });

    this.loadStartDate();
    this.loadEndDate();
  }

  loadEndDate() {
    var scope = this;
    $(function () {
      $('input[name="ticketEndDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        // minDate: moment(),
        autoUpdateInput: false,
        // maxYear: parseInt(moment().format('YYYY'), 10)
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.ticketReportForm.get('ticketEndDate').setValue(moment(start).format('YYYY-MM-DD'));
      });
    });
  }

  loadStartDate() {
    var scope = this;
    $(function () {
      $('input[name="ticketStartDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        autoUpdateInput: false,
        // maxYear: parseInt(moment().format('YYYY'), 10)
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.ticketReportForm.get('ticketStartDate').setValue(moment(start).format('YYYY-MM-DD'));
      });
    });
  }

  fetchAllAgents() {
    this.bookingsLoader=true;
    this.reportService.GetAllAgents().subscribe((res: any) => {
      if (res.type == 'data') {
        this.bookingsLoader=false;
        if (res.Organization.length != 0) {
          this.agents = res.Organization;
        }
        else {
          this.toastr.info(`There is no agents to display`, `${res.msg}`, {
            timeOut: 1000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
        }
      }
      else {
        this.bookingsLoader=false;
        this.toastr.error(`${res.msg}`, `${res.msg}`, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      }
    })
  }

  fetchAllProducts(limit?, pageIndex?) {
    this.bookingsLoader=true;
    this.reportService.GetAllProducts(0, limit, pageIndex).subscribe((res: any) => {
      if (res.type == 'data') {
        this.bookingsLoader=false;
        if (res.Data.length != 0) {
          var dataoutput = res.Data;
          var keys = Object.keys(res.Data);
          for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            if (dataoutput[key] == 1)
              this.productLists.push(key)
          }
        }
        else {
          this.toastr.info(`There is no product to display`, `${res.msg}`, {
            timeOut: 1000,
            progressBar: false,

            positionClass: 'toast-bottom-right'
          });
        }

      } else {
        this.bookingsLoader=false;
        this.toastr.error(`${res.msg}`, `${res.msg}`, {
          timeOut: 1000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
      }
    })
  }

  fetchAllSuppliers() {
    this.bookingsLoader=true;
    this.reportService.GetAllSuppliers().subscribe((res: any) => {
      if (res.status) {
        this.bookingsLoader=false;
        if (res.result.length != 0) {
          this.suppliers = res.result;
        }
        else {
          this.toastr.info(`There is no suppliers available`, ``, {
            timeOut: 1000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
        }
      }
      else {
        this.bookingsLoader=false;
        this.toastr.error(`${res.messsage}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      }
    })

  }

  ticketSearch = () => {
    this.bookingsLoader=true;
    this.submitted = true;
    if (this.ticketReportForm.invalid) {
      return;
    }
    this.showTicketReport = true;
    this.ticketReportObj.product = this.ticketReportForm.get('productList').value;
    this.ticketReportObj.supplier_id = this.ticketReportForm.get('supplierList').value;
    this.ticketReportObj.agent_codes = this.ticketReportForm.get('agentList').value;
    this.ticketReportObj.start_date = this.ticketReportForm.get('ticketStartDate').value;
    this.ticketReportObj.end_date = this.ticketReportForm.get('ticketEndDate').value;
    this.reportService.searchTicketReport(this.ticketReportObj).subscribe((results: any) => {
      if (results.type == 'data') {
        this.bookingsLoader=false;
        if (results.Data.length != 0) {
          this.NewTicketReport = results.Data;
          this.NewTicketReport.map((element, key) => {
            if (element.booking != null) {
              element.trip_id = results.Data[key].booking.trip_id;
            } else {
              element.trip_id = "---";
            }
          })
          this.showTicketReport = true;
        }
        else {
          this.bookingsLoader=false;
          this.toastr.info(`there is no data available to display`, ``, {
            timeOut: 1000,
            progressBar: false,

            positionClass: 'toast-bottom-right'
          });
        }
      }
      else {
        this.bookingsLoader=false;
        this.toastr.error(`${results.msg}`, `${results.msg}`, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      }
    })
  }

  reset = () => {
    this.ticketReportForm.reset();
    $(".ui.dropdown").dropdown("clear");
    this.showTicketReport = false;
    this.bookingsLoader=false;
  }

  exportTicket(){
    
      this.reportService.exportTicket(this.ticketReportObj).subscribe((result: any) => {
        if (result.type != 'error') {
          this.excelService.exportAsExcelFile(result.Data, 'bookings');
        } else {
          this.toastr.error(`${result.message}`, `${result.message}`, {
            timeOut: 10000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
        }
      });


  }
}
