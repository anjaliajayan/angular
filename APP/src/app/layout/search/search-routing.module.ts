import { SearchComponent } from './search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightsComponent } from './flights/flights.component';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
    children: [
      { path: '', redirectTo: 'flights', pathMatch: 'prefix' },
      { path: 'flights', loadChildren: () => import('./flights/flights.module').then(m => m.FlightsModule) },
      { path: 'activities', loadChildren: () => import('./activities/activities.module').then(m => m.ActivitiesModule) },
      { path: 'cars', loadChildren: () => import('./cars/cars.module').then(m => m.CarsModule) },
      { path: 'holidays', loadChildren: () => import('./holidays/holidays.module').then(m => m.HolidaysModule) },
      { path: 'hotels', loadChildren: () => import('./hotels/hotels.module').then(m => m.HotelsModule) },
      { path: 'insurances', loadChildren: () => import('./insurances/insurances.module').then(m => m.InsurancesModule) },
      { path: 'transfers', loadChildren: () => import('./transfers/transfers.module').then(m => m.TransfersModule) },
      { path: 'seat-map', loadChildren: () => import('./seat-map/seat-map.module').then(m => m.SeatMapModule) },
    
    ]
  },

  { path:'flights/:id',component: FlightsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
