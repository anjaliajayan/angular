import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReportService } from 'src/app/shared/services/report/report.service';
import { AuditTrail } from 'src/app/shared/models/report/audit-trail';
import { ToastrService } from 'ngx-toastr';

declare const moment: any;
declare const $: any;

@Component({
  selector: 'app-audit-report',
  templateUrl: './audit-report.component.html',
  styleUrls: ['./audit-report.component.scss']
})
export class AuditReportComponent implements OnInit {


  NewAuditTrail: Array<[AuditTrail]> = [];
  totalAuditTrail: number = 0;
  platforms: string[] = [];
  modules: string[] = [];
  events: string[] = [];
  pages: number = 0;
  limit: number = 15;
  pageIndex: number = 1;
  showAuditReportTable: boolean = false;
  submitted: any = false;
  newAuditObj: any = {};
  bookingsLoader:boolean=false;

  constructor(private fb: FormBuilder,
    public newReportService: ReportService,
    private toastr: ToastrService) { }

  auditTrailForm = this.fb.group({
    selectPlatform: [''],
    selectModule: [''],
    selectEvent: [''],
    auditEndDate: ['', [Validators.required]],
    auditStartDate: ['', [Validators.required]]
  });

  // convenience getter for easy access to form fields
  get f() { return this.auditTrailForm.controls; }

  ngOnInit() {
    this.fetchAllAuditTrail();
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
      $('input[name="auditStartDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment(),
        maxDate: moment(),
        autoUpdateInput: false,
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.auditTrailForm.get('auditStartDate').setValue(moment(start).format('YYYY-MM-DD'));
      });
    });
  }

  loadEndDate = () => {
    var scope = this;
    $(function () {
      $('input[name="auditEndDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment(),
        minDate: moment(),
        autoUpdateInput: false,
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.auditTrailForm.get('auditEndDate').setValue(moment(start).format('YYYY-MM-DD'));
      });
    });
  }

  fetchAllAuditTrail() {
    this.bookingsLoader=true;
    this.newReportService.GetAllAuditTrail({page:0})
      .subscribe((res: any) => {
        this.bookingsLoader=false;
        this.NewAuditTrail = res.result;
        if (res.status) {
          if (res.result.length != 0) {
            res.result.forEach(element => {
              if (element.platform != null) {
                let checkplatform = this.platforms.findIndex(p => p == element.platform)
                let checkmodule = this.modules.findIndex(p => p == element.module)
                let checkevent = this.events.findIndex(p => p == element.event)
                if (checkplatform == -1) {
                  this.platforms.push(element.platform);
                }
                if (checkmodule == -1) {
                  this.modules.push(element.module);
                } if (checkevent == -1) {
                  this.events.push(element.event);
                }
              }
            });
          } else {
            this.bookingsLoader=false;
            this.toastr.info(`There is no data available`, ``, {
              timeOut: 5000,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });
          }
        }
        else {
          this.bookingsLoader=false;
          this.toastr.error(`${res.message}`, ``, {
            timeOut: 5000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
        }
      });
  }

  auditReportView = () => {
    this.bookingsLoader=true;
    this.submitted = true;
    if (this.auditTrailForm.invalid) {
      return;
    }
    this.newAuditObj.platform = this.auditTrailForm.get('selectPlatform').value;
    this.newAuditObj.module = this.auditTrailForm.get('selectModule').value;
    this.newAuditObj.event = this.auditTrailForm.get('selectEvent').value;
    this.newAuditObj.start_date = this.auditTrailForm.get('auditStartDate').value;
    this.newAuditObj.end_date = this.auditTrailForm.get('auditEndDate').value;
    this.newReportService.GetAllAuditTrail(this.newAuditObj).subscribe((results: any) => {
      if (results.status) {
        this.bookingsLoader=false;
        this.NewAuditTrail = results.result;
        if (results.result.length != 0) {
          this.NewAuditTrail = results.result;
          this.showAuditReportTable = true;
        }
        else {
          this.bookingsLoader=false;
          this.toastr.info(`There is no data Available to display`, `${results.message}`, {
            timeOut: 2000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });  
        }
      }
      else {
  
        this.toastr.error(`${results.message}`, ``, {
          timeOut: 2000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      }
    });
  }

  reset = () => {
    this.bookingsLoader=false;
    this.auditTrailForm.reset();
    $(".ui.dropdown").dropdown("clear");
    this.showAuditReportTable = false;
  }
}

