import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from '../cars/details/details.component';
import { BlockComponent } from '../cars/block/block.component';
import { CarsComponent } from './cars.component';
import {CarBookingDetailsComponent} from '../../bookings/car-booking-details/car-booking-details.component';

const routes: Routes = [
  {path: '', component: CarsComponent},
  {
    path: 'details',
    children:[
    { path: '', component:DetailsComponent }
  ]
  },
  {
    path: 'modify',
    children:[
      { path: '', component:CarsComponent }
    ]
  },
  {
    path: 'block',
    children:[
    { path: '', component:BlockComponent }
  ]
  },
  {
    path: 'car-booking-details/:id',
    children:[
      { path: 'car-booking-details/:id', component:CarBookingDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule { }
