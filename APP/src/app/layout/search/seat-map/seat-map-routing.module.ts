import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeatMapComponent } from './seat-map.component';



const routes: Routes = [
  {path: '', component:SeatMapComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeatMapRoutingModule { }