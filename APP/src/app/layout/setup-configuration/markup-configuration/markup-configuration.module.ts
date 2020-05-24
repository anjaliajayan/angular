import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms'

import { MarkupConfigurationRoutingModule } from './markup-configuration-routing.module';
import { MarkupConfigurationComponent } from './markup-configuration.component';
import { FormsModule } from '@angular/forms';
import { MarkComponent } from './mark/mark.component';
import { SaleComponent } from './sale/sale.component';
import { AddGroupComponent } from './sale/addgroup/addgroup.component';
import { AddMarkupComponent } from './mark/addmarkup/addmarkup.component'

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@NgModule({
  declarations: [MarkupConfigurationComponent, MarkComponent, SaleComponent, AddGroupComponent, AddMarkupComponent],
  imports: [
    CommonModule,
    MarkupConfigurationRoutingModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule
  ]
})
export class MarkupConfigurationModule { }
