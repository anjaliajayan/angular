import { ProfileFollowUpComponent } from './profile-follow-up.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileFollowUpRoutingModule } from './profile-follow-up-routing.module'


@NgModule({
  declarations: [ProfileFollowUpComponent],
  imports: [
    CommonModule,
    ProfileFollowUpRoutingModule
  ]
})
export class ProfileFollowUpModule { }
