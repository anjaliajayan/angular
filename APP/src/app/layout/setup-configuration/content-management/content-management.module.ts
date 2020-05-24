import { ContentManagementComponent } from './content-management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { ContentManagementRoutingModule } from './content-management-routing.module';


@NgModule({
  declarations: [ContentManagementComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    ContentManagementRoutingModule
  ]
})
export class ContentManagementModule { }
