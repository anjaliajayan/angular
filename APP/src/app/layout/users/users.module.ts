import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { UsersRoutingModule } from './users-routing.module';

import { UsersComponent } from './users.component';
import { UserNewComponent } from './user-new/user-new.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserTargetsComponent } from './user-targets/user-targets.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';



@NgModule({
  declarations: [UsersComponent, UserNewComponent, UserEditComponent, UserTargetsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
  ]
})
export class UsersModule { }
