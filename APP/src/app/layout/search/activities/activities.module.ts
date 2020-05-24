import { ActivitiesComponent } from './activities.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivitiesRoutingModule } from './activities-routing.module';
import { ActivitiesSearchListComponent } from './activities-search-list/activities-search-list.component';
import { DetailsComponent } from './/details/details.component';
import { BlockComponent } from './block/block.component';

import { ModalModule } from './../../_modal';
import { NamefilterPipe } from './namefilter.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TruncatePipe } from './truncate.pipe';



@NgModule({
  declarations: [ActivitiesComponent, ActivitiesSearchListComponent, DetailsComponent, BlockComponent, NamefilterPipe, TruncatePipe],
  imports: [
    CommonModule,
    ActivitiesRoutingModule,
    ModalModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ActivitiesModule { }
