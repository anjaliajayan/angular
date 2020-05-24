import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchLogReportComponent} from './search-log-report.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SearchLogReportRoutingModule } from './search-log-report-routing.module';
import { SearchCarComponent } from './search-car/search-car.component';
// import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { SearchTransfersComponent } from './search-transfers/search-transfers.component';
import { SearchActivityComponent } from './search-activity/search-activity.component';
import { SearchInsuranceComponent } from './search-insurance/search-insurance.component';
import { SearchFlightLogComponent } from './search-flight-log/search-flight-log.component';



@NgModule({
  declarations: [SearchLogReportComponent,
                SearchCarComponent, SearchTransfersComponent, 
                SearchActivityComponent, SearchInsuranceComponent, 
                SearchFlightLogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxDatatableModule,
    SearchLogReportRoutingModule
  ]
})
export class SearchLogReportModule { }
