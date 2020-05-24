import { CorporatesComponent } from './corporates.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporatesRoutingModule } from './corporates-routing.module';


@NgModule({
  declarations: [CorporatesComponent],
  imports: [
    CommonModule,
    CorporatesRoutingModule
  ]
})
export class CorporatesModule { }
