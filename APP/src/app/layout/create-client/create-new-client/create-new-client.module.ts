import { CreateNewClientComponent } from './create-new-client.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateNewClientRoutingModule } from './create-new-client-routing.module';


@NgModule({
  declarations: [CreateNewClientComponent],
  imports: [
    CommonModule,
    CreateNewClientRoutingModule
  ]
})
export class CreateNewClientModule { }
