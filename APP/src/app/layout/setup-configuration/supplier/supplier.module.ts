import { SupplierComponent } from './supplier.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SupplierRoutingModule } from './supplier-routing.module';
import { ApplicationAccess } from 'src/app/access.module';

@NgModule({
  declarations: [SupplierComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    SupplierRoutingModule,
    ApplicationAccess
  ]
})
export class SupplierModule { }
