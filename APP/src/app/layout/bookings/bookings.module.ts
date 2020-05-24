import { BookingsService } from './../../shared/services/index';
import { BookingsComponent } from './bookings.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingsRoutingModule } from './bookings-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { MainComponent } from './main/main.component';
import { ExcelService } from 'src/app/shared/services/excel.service';
import { ApplicationAccess } from 'src/app/access.module';
import { ModalModule } from '../_modal';

import { FlightVoucherComponent } from './flight-voucher/flight-voucher.component';
import { HotelVoucherComponent } from './hotel-voucher/hotel-voucher.component';
import { SeatMapModule } from '../search/seat-map/seat-map.module';
import { HoteleBookingDetailsComponent } from './hotele-booking-details/hotele-booking-details.component';
import { ActivityBookingDetailsComponent } from './activity-booking-details/activity-booking-details.component';
import { CarBookingDetailsComponent } from './car-booking-details/car-booking-details.component';
import { CarVoucherComponent } from './car-voucher/car-voucher.component';
import { InsuranceVoucherComponent } from './insurance-voucher/insurance-voucher.component';
import { InsuranceInvoiceComponent } from './insurance-invoice/insurance-invoice.component';
import { InsuranceBookDetailsComponent } from './insurance-book-details/insurance-book-details.component';
import { HotelInvoiceComponent } from './hotel-invoice/hotel-invoice.component';
import { ActivityInvoiceComponent } from './activity-invoice/activity-invoice.component';
import { CarInvoiceComponent } from './car-invoice/car-invoice.component';
import { ActivityVoucherComponent } from './activity-voucher/activity-voucher.component';
import { FlightInvoiceComponent } from './flight-invoice/flight-invoice.component';
// import { MealServiceComponent } from './../ancillary-services/meal-service/meal-service.component';
// import { DisabilityServiceComponent } from './../ancillary-services/disability-service/disability-service.component';
// import { FlightTimeParser } from '../../shared/pipes/flight-time-parser.pipe'
// import { AncillaryServiceComponent } from '../ancillary-services/ancillary-service.component';

@NgModule({
  declarations: [
    BookingsComponent,
    BookingDetailsComponent,
    MainComponent,
    FlightVoucherComponent,
    HotelVoucherComponent,
    HoteleBookingDetailsComponent,
    CarVoucherComponent,
    // FlightTimeParser,
    CarBookingDetailsComponent,
    ActivityBookingDetailsComponent,
    InsuranceVoucherComponent,
    InsuranceInvoiceComponent,
    InsuranceBookDetailsComponent,
    HotelInvoiceComponent,
    ActivityInvoiceComponent,
    CarInvoiceComponent,
    ActivityVoucherComponent,
    FlightInvoiceComponent
    // AncillaryServiceComponent,
    // MealServiceComponent,
    // BaggageServiceComponent,
    // DisabilityServiceComponent,
  ],
  imports: [
    CommonModule,
    BookingsRoutingModule,
    SeatMapModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    FormsModule,
    ApplicationAccess,
    ModalModule
  ],
  providers: [
    BookingsService, ExcelService
  ]
})
export class BookingsModule { }
