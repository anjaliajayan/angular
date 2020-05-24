import { FloatingDepositsComponent } from './floating-deposits.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FloatingDepositsRoutingModule } from './floating-deposits-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FloatingDepositsComponent],
  imports: [
    CommonModule,
    FloatingDepositsRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FloatingDepositsModule { }
