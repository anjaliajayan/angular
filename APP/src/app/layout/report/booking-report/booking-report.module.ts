import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingReportComponent } from './booking-report.component';
import { ReportService } from 'src/app/shared/services/report/report.service';

import { BookingReportRoutingModule } from './booking-report-routing.module'
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ModalModule } from '../../_modal';
import { ApplicationAccess } from 'src/app/access.module';
import { ExcelService } from 'src/app/shared/services/excel.service';
@NgModule({
  declarations: [ BookingReportComponent ],
  imports: [
    CommonModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    BookingReportRoutingModule,
    ModalModule,
    ApplicationAccess
  ],
  providers: [ExcelService]
})
export class BookingReportModule {


  constructor(private reportService: ReportService) {}

  ngOnInit() {

  }
  
}
