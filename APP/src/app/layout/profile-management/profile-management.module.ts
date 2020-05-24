import { ProfileManagementComponent } from './profile-management.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileManagementRoutingModule } from './profile-management-routing.module'


@NgModule({
  declarations: [ProfileManagementComponent],
  imports: [
    CommonModule,
    ProfileManagementRoutingModule
  ]
})
export class ProfileManagementModule { }
