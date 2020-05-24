import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ListUserRoutingModule } from './list-user-routing.module';
import { ListUserComponent } from './list-user.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ExcelService } from 'src/app/shared/services/excel.service';
import { ApplicationAccess } from 'src/app/access.module';

@NgModule({
  declarations: [ListUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ListUserRoutingModule,
    FormsModule,
    NgxDatatableModule,
    ApplicationAccess 
  ],
  providers:[ExcelService]
})
export class ListUserModule { }
