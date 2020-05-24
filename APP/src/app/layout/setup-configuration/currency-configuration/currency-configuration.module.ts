import { CurrencyConfigurationComponent } from './currency-configuration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { CurrencyConfigurationRoutingModule } from './currency-configuration-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ApplicationAccess } from 'src/app/access.module';


@NgModule({
  declarations: [CurrencyConfigurationComponent],
  imports: [
    CommonModule,
    NgxDatatableModule,
    CurrencyConfigurationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ApplicationAccess
  ]
})
export class CurrencyConfigurationModule { }
