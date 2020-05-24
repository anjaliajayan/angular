import { NewAgencyProfileComponent } from './new-agency-profile.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NewAgencyProfileRoutingModule } from './new-agency-profile-routing.module'

@NgModule({
  declarations: [NewAgencyProfileComponent],
  imports: [
    CommonModule,
    NewAgencyProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NewAgencyProfileModule { }
