import { UserRoleManagementComponent } from './user-role-management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoleManagementRoutingModule } from './user-role-management-routing.module';


@NgModule({
  declarations: [UserRoleManagementComponent],
  imports: [
    CommonModule,
    UserRoleManagementRoutingModule
  ]
})
export class UserRoleManagementModule { }
