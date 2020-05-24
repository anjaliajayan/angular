import { ListClientComponent } from './list-client.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListClientRoutingModule } from './list-client-routing.module';


@NgModule({
  declarations: [ListClientComponent],
  imports: [
    CommonModule,
    ListClientRoutingModule
  ]
})
export class ListClientModule { }
