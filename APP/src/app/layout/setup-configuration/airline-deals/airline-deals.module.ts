import { AirlineDealsComponent } from './airline-deals.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AirlineDealsRoutingModule } from './airline-deals-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TourcodeComponent } from './tourcode/tourcode.component';
import { CommissionComponent } from './commission/commission.component';
import { ApplicationAccess } from 'src/app/access.module';
import { AirlineRoutesComponent } from './airline-routes/airline-routes.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [AirlineDealsComponent, TourcodeComponent, CommissionComponent, AirlineRoutesComponent],
  imports: [
    CommonModule,
    AirlineDealsRoutingModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    ApplicationAccess,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule
  ],
  providers: [
 
  ]
})
export class AirlineDealsModule { }
