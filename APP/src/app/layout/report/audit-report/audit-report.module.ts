import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuditReportComponent} from './audit-report.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import{AuditReportRoutingModule} from './audit-report-routing.module'

@NgModule({
  declarations: [AuditReportComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDatatableModule,
    AuditReportRoutingModule
  ]
})
export class AuditReportModule { }
