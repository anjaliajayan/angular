import { IurComponent } from './iur.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IurRoutingModule } from './iur-routing.module';


@NgModule({
  declarations: [IurComponent],
  imports: [
    CommonModule,
    IurRoutingModule
  ]
})
export class IurModule { }
