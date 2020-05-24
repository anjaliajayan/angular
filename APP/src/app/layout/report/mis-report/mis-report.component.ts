import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './../../../../assets/vendor/canvasjs/canvasjs.min.js';
import { ReportService } from 'src/app/shared/services/report/report.service.js';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mis-report',
  templateUrl: './mis-report.component.html',
  styleUrls: ['./mis-report.component.scss'],
})
export class MISReportComponent implements OnInit {
  newPieObj: any = {};
  newAreaChartObj: any = {};
  labelName: string;

  constructor(
    public newReportService: ReportService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.fetchAllFlightPlatforms();
    this.fetchAllMonthlyReport();
  }

  fetchAllFlightPlatforms() {
    this.newReportService.GetAllFlightPlatforms()
      .subscribe((res: any) => {
        if (res.status == 200) {
          if (res.FlightSearchLog.length != 0) {
            this.newPieObj = JSON.stringify(res);
            this.renderMISPieChart();
          }
          else {
            this.toastr.info(`There is no data available`, ``, {
              timeOut: 2000,
              progressBar: false,

              positionClass: 'toast-bottom-right'
            });
          }
        }
        else {
          this.toastr.error(`${res.msg}`, `${res.msg}`, {
            timeOut: 2000,
            progressBar: false,

            positionClass: 'toast-bottom-right'
          });
        }
      });
  }

  fetchAllMonthlyReport() {
    this.newReportService.GetAllFlightMonthlyReport()
      .subscribe((res: any) => {
        if (res.status == 200) {
          this.newAreaChartObj = JSON.stringify(res);
          this.renderMISAreaChart();
        }
        else {
          this.toastr.error(`${res.msg}`, `${res.msg}`, {
            timeOut: 2000,
            progressBar: false,

            positionClass: 'toast-bottom-right'
          });
        }
      });
  }

  renderMISPieChart = () => {
    var datapoints = [];
    var data = JSON.parse(this.newPieObj)
    for (var i in data.FlightSearchLog) {
      datapoints.push({ y: data.FlightSearchLog[i].count, name: data.FlightSearchLog[i].platform });
    }
    let pieChart = new CanvasJS.Chart("chartMISPie", {
      theme: "light2",
      animationEnabled: true,
      exportEnabled: true,
      title: {
        fontFamily: "Ubuntu",
        text: "Search Log Report"
      },
      data: [{
        type: "pie",
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        dataPoints: datapoints
      }]
    });

    pieChart.render();
  }

  renderMISAreaChart = () => {
    var bookingData = [];
    var searchData = [];
    var ticketData = [];
    var data = JSON.parse(this.newAreaChartObj)

    for (var i in data.FlightSearchLog.book) {
      bookingData.push({ x: data.FlightSearchLog.book[i].month, y: data.FlightSearchLog.book[i].count });
    }

    for (var i in data.FlightSearchLog.ticket) {
      ticketData.push({ x: data.FlightSearchLog.ticket[i].month, y: data.FlightSearchLog.ticket[i].count });
    }
 
    for (var i in data.FlightSearchLog.search) {
      searchData.push({ x: data.FlightSearchLog.search[i].month, y: data.FlightSearchLog.search[i].count });
    }

    let areaChart = new CanvasJS.Chart("chartMISArea", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        fontFamily: "Ubuntu",
        text: "Current Year Search Log Report"
      },
      axisY: {
        title: "Count"
      },
      axisX: {
        title: "Month"
      },
      toolTip: {
        shared: true
      },
      data: [{
        type: "stackedArea",
        showInLegend: true,
        toolTipContent: "<span style=\"color:#4F81BC\"><strong>{name}: </strong></span> {y}",
        name: "Book",
        dataPoints: bookingData

      },
      {
        type: "stackedArea",
        name: "ticket",
        toolTipContent: "<span style=\"color:#C0504E\"><strong>{name}: </strong></span> {y}<br><b>Total:<b> #total",
        showInLegend: true,
        dataPoints: ticketData
      },
      {
        type: "stackedArea",
        name: "Search",
        toolTipContent: "<span style=\"color:#C0504E\"><strong>{name}: </strong></span> {y}<br><b>Total:<b> #total",
        showInLegend: true,
        dataPoints: searchData
      },
      ]
    });
    areaChart.render();
  }

}
