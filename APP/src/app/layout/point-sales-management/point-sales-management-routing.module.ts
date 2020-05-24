import { PointSalesManagementComponent } from './point-sales-management.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    component: PointSalesManagementComponent,
    children: [
      { path: '', redirectTo: 'add-point-sale', pathMatch: 'prefix' },
      { path: 'registration', loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) },
 
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PointSalesManagementRoutingModule { }
