import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SegmentReportComponent} from './segment-report.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import{SegmentReportRoutingModule} from './segment-report-routing.module'

@NgModule({
  declarations: [SegmentReportComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDatatableModule,
    SegmentReportRoutingModule
  ]
})
export class SegmentReportModule { }
