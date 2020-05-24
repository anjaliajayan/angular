import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MISReportRoutingModule } from './mis-report-routing.module';
import { MISReportComponent } from './mis-report.component';



@NgModule({
  declarations: [MISReportComponent],
  imports: [
    CommonModule,
    MISReportRoutingModule
  ]
})
export class MISReportModule { }
