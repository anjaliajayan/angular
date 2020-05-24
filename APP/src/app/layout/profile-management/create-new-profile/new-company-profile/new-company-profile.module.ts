import { NewCompanyProfileComponent } from './new-company-profile.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NewCompanyProfileRoutingModule } from './new-company-profile-routing.module'

@NgModule({
  declarations: [NewCompanyProfileComponent],
  imports: [
    CommonModule,
    NewCompanyProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NewCompanyProfileModule { }
