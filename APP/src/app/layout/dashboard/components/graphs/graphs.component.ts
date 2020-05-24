import { BookingsInfo, PerformanceInfo, MarginInfo, PresetInfo } from './../../../../shared/models/index';
import { DashboardService } from './../../../../shared/services/dashboard.service';
import { POSService } from './../../../../shared/services/pointsale.service';
import { Component, OnInit, Input, SimpleChanges, SimpleChange } from '@angular/core';
import Swal from 'sweetalert2';

declare var $: any;
declare var Chartist: any;


@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.scss']
})
export class GraphsComponent implements OnInit {

  @Input() bookings: BookingsInfo;
  @Input() presetInfo: PresetInfo;
  @Input() performanceInfo: PerformanceInfo;
  @Input() marginInfo: MarginInfo;
  @Input("bookingsLoader") bookingsLoader: boolean = true;
  @Input("organisationLoader") organisationLoader: boolean = true;
  performance_type = false;

  // presetInfo: any = {
  //   active: 0,
  //   inactive: 0,
  //   subagents: 0,
  //   total: 0,
  //   websites: 0,
  //   corporates: 0
  // }
  flightsInfo: any = {
    keys: [],
    searches: [],
    tickets: []
  }

  constructor(private dashboardService: DashboardService, private posService: POSService) { }

  ngOnInit() {
    // this.dashboardService.fetchBookingsInformation({})
    // .subscribe((res:any) => {
    //   if(res.status == 200) {
    //     this.bookingsInfo = res.bookings_info;
    //   }
    // }, err => {
    //   Swal.fire('Oops', `Something bad happened at our end. ${err}`, 'error');
    // })

    // this.dashboardService.fetchPresetInformation({})
    // .subscribe((res:any) => {
    //   if(res.status == 200) {
    //     this.presetInfo = res.Stats;
    //     this.displayPresetCharts();
    //   }
    // }, err => {
    //   Swal.fire('Oops', `Something bad happened at our end. ${err}`, 'error');
    // })

    this.dashboardService.fetchFlightInformation()
    .subscribe((res:any) => {
      if(res.status == 200) {
        this.flightsInfo = res.Stats;
        this.displaySearchLogChart();
      }
    }, err => {
      Swal.fire('Oops', `Something bad happened at our end. ${err}`, 'error');
    })

    // this.posService.fetchAllPointofSale()
    // .subscribe((res:any) => {
    //   if(res.status == 200) {
    //     this.POS = res.POS;
    //   }
    // }, err => {
    //   Swal.fire('Oops', `Something bad happened at our end. ${err}`, 'error');
    // })


    // this.fetchProductivityChartData(null);

    // this.fetchPerformanceChartData(null);



  }

  ngAfterViewInit() {
    var scope = this;
    this.displayPerformanceChart();
    // this.displayPresetChart();
    // this.displayPresetCharts();
    this.displayProductivityChart();
    // this.displaySearchLogChart();

  }

  ngOnChanges(changes: SimpleChanges) {
    const bookings: SimpleChange = changes.bookings;
    const performanceInfo: SimpleChange = changes.performanceInfo;
    const marginInfo: SimpleChange = changes.marginInfo;
    const presetInfo: SimpleChange = changes.presetInfo;

    if (bookings) {
      console.log('boking update')
      this.displayBookingBars(bookings.firstChange);
    }
    if (performanceInfo) {
      this.displayPerformanceChart()
    }
    if (presetInfo) {
      console.log("presetInfo changes", presetInfo)
      this.displayPresetCharts()
    }
    if (marginInfo) {
      // if(!marginInfo.firstChange)
      this.displayProductivityChart();
    }

  }
  // Bookings
  displayBookingBars(firstTime) {
    var bookings = this.bookings;
    var keys = Object.keys(bookings)
    for (let index = 0; index < keys.length; index++) {
      const element = keys[index];
      if (bookings.total < bookings[element])
        bookings.total = bookings[element];
    }
    this.bookings.total = bookings.total + 100;
  }
  // not using
  displayPresetChart() {
    var chart = new Chartist.Pie('.ct-charts', {
      series: [40, 60],
      labels: [1, 2]
    }, {
      donut: true,
      donutWidth: 28,
      showLabel: false
    });

    chart.on('draw', function (data) {
      if (data.type === 'slice') {
        // Get the total path length in order to use for dash array animation
        var pathLength = data.element._node.getTotalLength();

        // Set a dasharray that matches the path length as prerequisite to animate dashoffset
        data.element.attr({
          'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
        });

        // Create animation definition while also assigning an ID to the animation for later sync usage
        let animationDefinition: any = {
          'stroke-dashoffset': {
            id: 'anim' + data.index,
            dur: 1000,
            from: -pathLength + 'px',
            to: '0px',
            easing: Chartist.Svg.Easing.easeOutQuint,
            // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
            fill: 'freeze'
          }
        };

        // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
        if (data.index !== 0) {
          animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
        }

        // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
        data.element.attr({
          'stroke-dashoffset': -pathLength + 'px'
        });

        // We can't use guided mode as the animations need to rely on setting begin manually
        // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
        data.element.animate(animationDefinition, false);
      }
    });
  }
  // Preset
  displayPresetCharts(){
    console.log("presetInfo", this.presetInfo)
    var chart = new Chartist.Pie('.ct-chart', {
      labels: ['Subagents', 'Websites', 'Corporates', 'Active', 'Inactive'],
      series: [
        { "name":"Active", "data":this.presetInfo.active + 5},
        { "name":"Inactive", "data":this.presetInfo.inactive + 10},
      ],
    }, {
      donut: true,
      donutWidth: 30,
      donutSolid: true,
      startAngle: 270,
      showLabel: false,
      showArea: true,
      // showPoint: false,
      // fullWidth: true,
      
      
    });

    chart.on('draw', function (data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 2000 * data.index,
            dur: 2000,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      }
    });
  }
  // not using
  displayProductivityChart() {

    var data = this.marginInfo;
    var chart = new Chartist.Line('.ct-margin-chart', {
      labels: data.tags,
      series: [data.margin]
    }, {
      low: 0,
      showArea: true,
      showPoint: false,
      fullWidth: true
    });

    chart.on('draw', function (data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 2000 * data.index,
            dur: 2000,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      }
    });
  }
  // Performance
  displayPerformanceChart() {
    var series = [];
    var data = this.performanceInfo;
    console.log('Perforamce info is => ', data)
    if (this.performance_type) {
      series = [
        data.supplier_price,
        data.markup_price,
        data.total_achieved

      ]
    }
    else {
      series = [

        data.total_achieved

      ]
    }

    // return ;
    let barChart = new Chartist.Bar('.ct-performance-chart', {
      labels: data.tags,
      series: series
    }, {
      seriesBarDistance: 10,
      axisX: {
        offset: 60
      },
      axisY: {
        offset: 80,
        labelInterpolationFnc: function (value) {
          return value;
        },
        scaleMinSpace: 15
      }
    });

  }
  // Tickets & Search Logs
  displaySearchLogChart() {

    var chart = new Chartist.Line('.ct-logs-chart', {
      labels: this.flightsInfo.keys,
      series: [
        this.flightsInfo.searches,
        this.flightsInfo.tickets
      ]
    }, {
      low: 0,
      showArea: true,
      // showPoint: false,
      fullWidth: true
    });

    chart.on('draw', function (data) {
      if (data.type === 'line' || data.type === 'area') {
        data.element.animate({
          d: {
            begin: 2000 * data.index,
            dur: 2000,
            from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      }
    });
  }

  getWidth(total, present) {
    var perc = (present / total) * 100
    return perc + '%';
  }

}
