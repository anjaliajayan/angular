import { SetupConfigurationComponent } from './setup-configuration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetupConfigurationRoutingModule } from './setup-configuration-routing.module';
import { RolesComponent } from './roles/roles.component';



@NgModule({
  declarations: [SetupConfigurationComponent],
  imports: [
    CommonModule,
    SetupConfigurationRoutingModule,
  ]
})
export class SetupConfigurationModule { }
