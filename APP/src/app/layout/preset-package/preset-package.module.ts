import { PresetPackageComponent } from './preset-package.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresetPackageRoutingModule } from './preset-package-routing.module';


@NgModule({
  declarations: [PresetPackageComponent],
  imports: [
    CommonModule,
    PresetPackageRoutingModule
  ]
})
export class PresetPackageModule { }
