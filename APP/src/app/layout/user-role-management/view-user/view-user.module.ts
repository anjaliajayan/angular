import { ViewUserComponent } from './view-user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewUserRoutingModule } from './view-user-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ViewUserComponent],
  imports: [
    CommonModule,
    ViewUserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ViewUserModule { }
