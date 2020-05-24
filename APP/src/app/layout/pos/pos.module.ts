import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { AddPosRoutingModule } from './pos-routing.module';
import { PosComponent } from './pos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AirlineRbdComponent } from './airline-rbd/airline-rbd.component';
import { PosBasicEditComponent } from './pos-basic-edit/pos-basic-edit.component';
import { PosOfficeDetailsComponent } from './pos-office-details/pos-office-details.component';
import { BrandingInfoComponent } from './branding-info/branding-info.component';
import { MonthlyTargetComponent } from './monthly-target/monthly-target.component';
import { ActiveSuppliersComponent } from './active-suppliers/active-suppliers.component';
import { PosReadComponent } from './pos-read/pos-read.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PosBranchComponent } from './pos-branch/pos-branch.component';
import { CountryListModule } from '../country-list/country-list.module';
import { PosEditButtonComponent } from './pos-edit-button/pos-edit-button.component';



@NgModule({
  declarations: [PosComponent,BasicInfoComponent, AirlineRbdComponent, 
    PosBasicEditComponent, PosOfficeDetailsComponent, BrandingInfoComponent, 
    MonthlyTargetComponent, ActiveSuppliersComponent, PosReadComponent, PosBranchComponent, PosEditButtonComponent],
  imports: [
    CommonModule,
    AddPosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    CountryListModule

  ]
})
export class PosModule { }
