import { SearchLogReportComponent } from './search-log-report.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
// import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { SearchFlightLogComponent } from './search-flight-log/search-flight-log.component';
import { SearchCarComponent } from './search-car/search-car.component';
import { SearchTransfersComponent } from './search-transfers/search-transfers.component';
import { SearchActivityComponent } from './search-activity/search-activity.component';
import { SearchInsuranceComponent } from './search-insurance/search-insurance.component';

const routes: Routes = [
  { path: '', component: SearchLogReportComponent,
children:[
  { path: '',redirectTo:'flight-view',pathMatch:'prefix'},
  {path:'flight-view',component:SearchFlightLogComponent},
  // {path:'hotel-view',component:SearchHotelComponent},
  {path:'car-view',component:SearchCarComponent},
  {path:'transfer-view',component:SearchTransfersComponent},
  {path:'activity-view',component:SearchActivityComponent},
]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchLogReportRoutingModule { }
