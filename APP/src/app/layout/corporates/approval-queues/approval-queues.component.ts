import { Component, OnInit } from '@angular/core';

declare const moment:any;
declare const $:any;
@Component({
  selector: 'app-approval-queues',
  templateUrl: './approval-queues.component.html',
  styleUrls: ['./approval-queues.component.scss']
})
export class ApprovalQueuesComponent implements OnInit {

  activeTab:boolean = true;
  tabName:string = "first-tab";

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(document).ready(function() {
      $('.menu .item').tab();
      $('.ui.dropdown').dropdown();

    $(function() {
      $('input[name="startDate"],input[name="endDate"]')
      .daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        maxYear: parseInt(moment().format('YYYY'),10)
      }, function(start, end, label) {
        var years = moment().diff(start, 'years');
      });
    });
    });
  }

  activateTab(name) {
    switch(name) {
      case 'first-tab':
        this.activeTab = true;
        this.tabName = name;
        break;
      case 'second-tab':
        this.activeTab = true;
        this.tabName = name;
        break;
      case 'third-tab':
        this.activeTab = true;
        this.tabName = name;
        break;
      case 'fourth-tab':
        this.activeTab = true;
        this.tabName = name;
        break;
      case 'five-tab':
        this.activeTab = true;
        this.tabName = name;
        break;
      default:
        this.activeTab = true;
        this.tabName = name;
        break;
    }
  }
}
