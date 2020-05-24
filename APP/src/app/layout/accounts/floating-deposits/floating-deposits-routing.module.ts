import { FloatingDepositsComponent } from './floating-deposits.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: FloatingDepositsComponent},
  // {path: ':id', component: FloatingDepositsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FloatingDepositsRoutingModule { }
