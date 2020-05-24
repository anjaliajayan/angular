import { SearchProfileComponent } from './search-profile.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchProfileRoutingModule } from './search-profile-routing.module'
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ProfileManagementService } from '../../../shared/services/profile-management/profile-management.service'

import { NewTravellerProfileComponent } from '../create-new-profile/new-traveller-profile/new-traveller-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchProfileComponent],
  imports: [
    CommonModule,
    SearchProfileRoutingModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule
  ]


})
export class SearchProfileModule { }
