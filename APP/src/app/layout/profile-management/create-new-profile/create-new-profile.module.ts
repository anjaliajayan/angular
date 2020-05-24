import { CreateNewProfileComponent } from './create-new-profile.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateNewProfileRoutingModule } from './create-new-profile-routing.module';
import { NewTravellerProfileComponent } from './new-traveller-profile/new-traveller-profile.component';
// import { NewTravellerProfileComponent } from './new-traveller-profile/new-traveller-profile.component';
// import { NewGroupProfileComponent } from './new-group-profile/new-group-profile.component';
// import { NewAgencyProfileComponent } from './new-agency-profile/new-agency-profile.component';
// import { NewCompanyProfileComponent } from './new-company-profile/new-company-profile.component'


@NgModule({
  declarations: [CreateNewProfileComponent],
  imports: [
    CommonModule,
    CreateNewProfileRoutingModule
  ]
})
export class CreateNewProfileModule { }
