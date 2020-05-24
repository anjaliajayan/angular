import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { NgxUiLoaderModule } from  'ngx-ui-loader';

import { RolesRoutingModule } from './roles-routing.module';

import { RolesComponent } from './roles.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { EditRoleComponent } from './edit-role/edit-role.component';


@NgModule({
  declarations: [RolesComponent, CreateRoleComponent, EditRoleComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RolesRoutingModule,
    NgxUiLoaderModule
  ]
})
export class RolesModule { }
