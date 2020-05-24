import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InsurancesComponent } from './insurances.component';
import { InsuranceListComponent } from './insurance-list/insurance-list.component';
import { InsuranceBlockComponent } from './insurance-block/insurance-block.component';


const routes: Routes = [
  {
    path: '', 
    component: InsurancesComponent},
{
  path: 'insurance-list',
  children:[
  { path: '', component:InsuranceListComponent }
]
},
{
  path: 'insurance-Block',
  children:[
  { path: '', component:InsuranceBlockComponent }
]
}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InsurancesRoutingModule { }
