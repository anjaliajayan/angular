import { MainComponent } from './main/main.component';
import { BookingsComponent } from './bookings.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { HoteleBookingDetailsComponent } from './hotele-booking-details/hotele-booking-details.component';
import { InsuranceBookDetailsComponent } from './insurance-book-details/insurance-book-details.component';
import { ActivityBookingDetailsComponent } from './activity-booking-details/activity-booking-details.component';
import { CarBookingDetailsComponent } from './car-booking-details/car-booking-details.component';


const routes: Routes = [
  {
    path: '',
    component: BookingsComponent,
    children: [
      { path: '', component: MainComponent},
      { path: 'booking-details/:id', component: BookingDetailsComponent },
      { path: 'hotel-booking-details/:id', component: HoteleBookingDetailsComponent },
      { path: 'insurance-book-details/:id', component: InsuranceBookDetailsComponent },
      { path: 'activity-booking-details/:id', component: ActivityBookingDetailsComponent },
      { path: 'car-booking-details/:id', component: CarBookingDetailsComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingsRoutingModule { }
