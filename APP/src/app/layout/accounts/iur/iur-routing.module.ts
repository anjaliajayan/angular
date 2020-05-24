import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IurComponent } from './iur.component';


const routes: Routes = [
  {path:'', component: IurComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IurRoutingModule { }
