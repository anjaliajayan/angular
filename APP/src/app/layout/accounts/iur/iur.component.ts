import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

declare const $: any;

@Component({
  selector: 'app-iur',
  templateUrl: './iur.component.html',
  styleUrls: ['./iur.component.scss']
})
export class IurComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    $('.ui.dropdown').dropdown();
    $(document).ready(function () {
      $(function () {
        $('input[name="date"]').daterangepicker({
          singleDatePicker: true,
          showDropdowns: true,
          minYear: 1901,
          maxYear: parseInt(moment().format('YYYY'), 10)
        }, function (start, end, label) {
          var years = moment().diff(start, 'years');
        });
      });
    })
  }
}
