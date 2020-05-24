import { CreateNewProfileComponent } from './create-new-profile.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'new-traveller-profile', pathMatch: 'prefix' },
      { path: 'new-agency-profile', loadChildren: () => import('./new-agency-profile/new-agency-profile.module').then(m => m.NewAgencyProfileModule) },
      { path: 'new-company-profile', loadChildren: () => import('./new-company-profile/new-company-profile.module').then(m => m.NewCompanyProfileModule) },
      { path: 'new-group-profile', loadChildren: () => import('./new-group-profile/new-group-profile.module').then(m => m.NewGroupProfileModule) },
      { path: 'new-traveller-profile', loadChildren: () => import('./new-traveller-profile/new-traveller-profile.module').then(m => m.NewTravellerProfileModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateNewProfileRoutingModule { }
