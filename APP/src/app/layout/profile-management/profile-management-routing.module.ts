import { ProfileManagementComponent } from './profile-management.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NewTravellerProfileComponent } from './create-new-profile/new-traveller-profile/new-traveller-profile.component';
import { RetrieveProfileComponent } from './retrieve-profile/retrieve-profile.component';
import { FlightsComponent } from '../search/flights/flights.component';

const routes: Routes = [
  {
    path: '',
    component: ProfileManagementComponent,
    children: [
      { path: '', redirectTo: 'create-new-profile', pathMatch: 'prefix' },
      { path: 'create-new-profile', loadChildren: () => import('./create-new-profile/create-new-profile.module').then(m => m.CreateNewProfileModule) },
      { path: 'profile-follow-up', loadChildren: () => import('./profile-follow-up/profile-follow-up.module').then(m => m.ProfileFollowUpModule) },
      { path: 'retrieve-profile', loadChildren: () => import('./retrieve-profile/retrieve-profile.module').then(m => m.RetrieveProfileModule) },
      { path: 'search-profile', loadChildren: () => import('./search-profile/search-profile.module').then(m => m.SearchProfileModule) },
    
    ]
    
  },

  { path:'create-new-profile/:id',component:NewTravellerProfileComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileManagementRoutingModule { }
