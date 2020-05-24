import { RetrieveProfileComponent } from './retrieve-profile.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ProfileManagementService } from '../../../shared/services/profile-management/profile-management.service'
import { RetrieveProfileRoutingModule } from './retrieve-profile-routing.module'
import { NewTravellerProfileComponent } from '../create-new-profile/new-traveller-profile/new-traveller-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RetrieveProfileComponent],
  imports: [
    CommonModule,
    RetrieveProfileRoutingModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProfileManagementService,NewTravellerProfileComponent
  ]
})
export class RetrieveProfileModule { }
