import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ReportService } from 'src/app/shared/services/report/report.service';
declare const moment: any;
declare const $: any;

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

 
  newReportForm = this.fb.group({
    selectTarget: ['']
  });

  constructor(private fb: FormBuilder, public newReportService: ReportService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $('.menu .item').tab();
    $('.ui.dropdown').dropdown();
  }

}
