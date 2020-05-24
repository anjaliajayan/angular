import { NewTravellerProfileComponent } from './new-traveller-profile.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { NewTravellerProfileRoutingModule } from './new-traveller-profile-routing.module';
import { ModalModule } from 'src/app/layout/_modal';




@NgModule({
  declarations: [NewTravellerProfileComponent],
  imports: [
    CommonModule,
    NewTravellerProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule
  ]
})
export class NewTravellerProfileModule {
  constructor() {
  }
}
