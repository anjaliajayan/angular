import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TicketReportComponent} from './ticket-report.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TicketReportRoutingModule } from './ticket-report-routing.module';
import { ExcelService } from 'src/app/shared/services/excel.service';



@NgModule({
  declarations: [TicketReportComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDatatableModule,
    TicketReportRoutingModule
  ],
  providers: [ExcelService]
})
export class TicketReportModule { }