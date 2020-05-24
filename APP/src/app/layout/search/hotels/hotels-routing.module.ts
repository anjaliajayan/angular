import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HotelsComponent } from './hotels.component';
import { HotelsSearchResultsComponent } from './hotels-search-results/hotels-search-results.component';
import { HotelPassengerDetailsComponent } from './hotel-passenger-details/hotel-passenger-details.component';


const routes: Routes = [
  {
    path:'', component: HotelsComponent,pathMatch: 'prefix',
    children: [
          {
            path: 'results',
            component: HotelsSearchResultsComponent
          },
          {
            path: 'passengers',
            component: HotelPassengerDetailsComponent
          }
      ]
  }
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HotelsRoutingModule { }
