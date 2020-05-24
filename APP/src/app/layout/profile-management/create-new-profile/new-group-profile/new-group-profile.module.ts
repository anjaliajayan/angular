import { NewGroupProfileComponent } from './new-group-profile.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NewGroupProfileRoutingModule } from './new-group-profile-routing.module'


@NgModule({
  declarations: [NewGroupProfileComponent],
  imports: [
    CommonModule,
    NewGroupProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NewGroupProfileModule { }
