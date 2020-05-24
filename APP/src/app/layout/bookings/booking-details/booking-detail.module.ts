import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookingDetailsComponent} from '../booking-details/booking-details.component'
import { BookingsService } from './../../../shared/services/index';

import {BookingDetailRoutingModule} from '../booking-details/booking-detail-routing.module'
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApplicationAccess } from 'src/app/access.module';
import { SeatMapModule } from '../../search/seat-map/seat-map.module';
import { SeatMapComponent } from '../../search/seat-map/seat-map.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BookingDetailRoutingModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    FormsModule,
    ApplicationAccess
  ],
  providers:[BookingsService]
})
export class BookingDetailModule { }
