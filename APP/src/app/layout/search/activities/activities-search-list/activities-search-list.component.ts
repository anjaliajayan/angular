import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

declare const $: any;
declare const moment: any;

@Component({
  selector: 'app-activities-search-list',
  templateUrl: './activities-search-list.component.html',
  styleUrls: ['./activities-search-list.component.scss']
})
export class ActivitiesSearchListComponent implements OnInit {

  showDetailsTab: boolean = false;

  constructor(
    private fb: FormBuilder
  ) { }

  activityBookForm = this.fb.group({
    sel_date: ['']
  })

  ngOnInit(): void {
    this.loadConfig();
  }

  showDetails() {
    this.showDetailsTab = !this.showDetailsTab;
  }

  loadConfig() {
    $(document).ready(function() {
      $('.tabular.menu .item').tab();
    });
    this.selectedDate();
  }

  selectedDate() {
    var scope = this;
    $(function () {
      $('input[name="sel_date"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        autoUpdateInput: false,
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.activityBookForm.patchValue({'sel_date': moment(start).format('DD/MM/YYYY')});
      });
    });
  }

}
