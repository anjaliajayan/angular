import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ReportService } from 'src/app/shared/services/report/report.service';
import { ExportReportService } from 'src/app/shared/services/report/export-report.service';
import { ToastrService } from 'ngx-toastr';

declare const moment: any;
declare const $: any;

@Component({
  selector: 'app-dynamic-report',
  templateUrl: './dynamic-report.component.html',
  styleUrls: ['./dynamic-report.component.scss']

})
export class DynamicReportComponent implements OnInit {

  selectedReports: string[] = [];
  choosedOrganisation: string[] = [];
  showChooseOrg: boolean = false;
  showExportButton: boolean = false;
  submitted: any = false;
  newOrganiseObj: any = {};
  source: string[] = [];
  confirmed: string[] = [];
  newDynamicReportObj: any = {};
  orginalOrganisationsResult;
  showReportResults: any = [];
  bookingsLoader:boolean=false;
  constructor(private fb: FormBuilder,
    public ReportService: ReportService,
    public exportReportService: ExportReportService,
    private toastr: ToastrService) { }

  dynamicReportForm = this.fb.group({
    reportBy: ['', [Validators.required]],
    reportType: [''],
    selectedOrg: [''],
    reportStartDate: ['', [Validators.required]],
    reportEndDate: ['', [Validators.required]]
  });

  // convenience getter for easy access to form fields
  get f() { return this.dynamicReportForm.controls; }

  ngOnInit() { }

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
      $('input[name="reportStartDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment().subtract(90, 'day'),
        autoUpdateInput: false,
        // maxYear: parseInt(moment().format('YYYY'), 10)
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.dynamicReportForm.get('reportStartDate').setValue(moment(start).format('DD-MM-YYYY'));
      });
    });
  }

  loadEndDate = () => {
    var scope = this;
    $(function () {
      $('input[name="reportEndDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment(),
        // minDate: moment(),
        autoUpdateInput: false,
        // maxYear: parseInt(moment().format('YYYY'), 10)
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.dynamicReportForm.get('reportEndDate').setValue(moment(start).format('DD-MM-YYYY'));
      });
    });
  }

  setReportType = (value) => {
    this.dynamicReportForm.get('reportType').setValue(value);
  }

  setReportBy = (value) => {
    if (value == 'option') {
      this.showChooseOrg = false;

    } else {
      this.showChooseOrg = true;
      this.fetchAllOrganization();
    }
    this.dynamicReportForm.get('reportBy').setValue(value);
  }


  fetchAllOrganization() {
    this.ReportService.GetAllOrganization().subscribe((res: any) => {
      if (res.status) {
        res.result.data.forEach(element => {
          if (element.name != null)
            this.source.push(element.name);
        });
        this.orginalOrganisationsResult = res.result.data;
      }
      else {

        this.toastr.error(`${res.message}`, ``, {
          timeOut: 1000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        })

      }
    })
  }

  showReport = () => {
this.bookingsLoader=true;
    this.submitted = true;
    if (this.dynamicReportForm.invalid) {
      return;
    }
    this.newDynamicReportObj.start_date = this.dynamicReportForm.get('reportStartDate').value;
    this.newDynamicReportObj.end_date = this.dynamicReportForm.get('reportEndDate').value;
    this.dynamicReportForm.get('selectedOrg').setValue(this.confirmed);
    this.dynamicReportForm.get('selectedOrg').setValue(this.MapNametoIds(this.confirmed));
    this.newDynamicReportObj.organisation_ids = this.dynamicReportForm.get('selectedOrg').value;
    this.ReportService.NewDynamicPivotTable(this.newDynamicReportObj).subscribe((results: any) => {

      if (results.type == 'result') {
      this.bookingsLoader=false;
        var arr = results.Output;
        if (arr.length != 0) {
          this.showReportResults = results.Output;
        }
        else{
          this.toastr.info(`There is no data available to show`, `Oops!!`, {
            timeOut: 3000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          })
        }
        this.pivotTable();
      }
      else {
        this.bookingsLoader=false;
        this.toastr.error(`${results.msg}`, `${results.msg}`, {
          timeOut: 10000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        })
      }
    })
  }
  pivotTable() {
    this.showExportButton = true;
    $.pivotUtilities.tipsData = this.showReportResults;
    var renderers = $.extend($.pivotUtilities.renderers,
      $.pivotUtilities.plotly_renderers);
    var derivers = $.pivotUtilities.derivers;
    $("#output").pivotUI(
      $.pivotUtilities.tipsData,
      { renderers: renderers, });
  };

  MapNametoIds(selected) {
    var original = this.orginalOrganisationsResult;
    var tmp = [];
    for (let i = 0; i < selected.length; i++) {
      const name_org = selected[i];
      var rest = original.filter(obj => obj.name == name_org)
      if (rest.length >= 0)
        tmp.push(rest[0].parent_id);
    }
    return tmp;

  }

  exportPivotData = () => {
    var d = new Date();
    var crntDate = d.getFullYear() + "_" + (d.getMonth() + 1) + "_" + d.getDate();
    $("#output").table2excel({
      exclude: ".noExl",
      name: "Report ",
      filename: "CustomReport" + crntDate //do not include extension
    });
  }
}
