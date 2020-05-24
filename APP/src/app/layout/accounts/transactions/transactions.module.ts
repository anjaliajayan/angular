import { TransactionsComponent } from './transactions.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// import { MomentModule } from 'ngx-moment';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalModule } from '../../_modal';
import { ExcelService } from 'src/app/shared/services/excel.service';
import { ApplicationAccess } from 'src/app/access.module';


@NgModule({
  declarations: [TransactionsComponent],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    NgxDatatableModule,
    FormsModule, 
    ReactiveFormsModule, 
    ModalModule, 
    ApplicationAccess
  ],
  providers: [ExcelService]
})
export class TransactionsModule { }
