import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { InsurancesRoutingModule } from './insurances-routing.module';
import { InsurancesComponent } from './insurances.component';
import { InsuranceListComponent } from './insurance-list/insurance-list.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { InsuranceBlockComponent } from './insurance-block/insurance-block.component';
  import { insurancefilterPipe } from '../../../shared/pipes/insurance-list.pipe';
  import { LowestPricePipe } from '../../../shared/pipes/lowest-insurance.pipe';

  //import { StripHtmlPipe } from '../../../shared/pipes/insurance-html-strip.pipe';

@NgModule({
  declarations: [InsurancesComponent, InsuranceListComponent, InsuranceBlockComponent,insurancefilterPipe, LowestPricePipe
  //  StripHtmlPipe
  ],
  imports: [
    CommonModule,
    InsurancesRoutingModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    FormsModule
  ]
})
export class InsurancesModule { }
