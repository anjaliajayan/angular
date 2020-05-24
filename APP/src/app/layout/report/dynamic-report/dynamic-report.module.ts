import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DynamicReportComponent } from './dynamic-report.component';
import{DynamicReportRoutingModule} from './dynamic-report-routing.module'
import { ReactiveFormsModule} from '@angular/forms';
import { AngularDualListBoxModule } from 'angular-dual-listbox';



@NgModule({
  declarations: [DynamicReportComponent],
  imports: [
    CommonModule,
    // BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    DynamicReportRoutingModule,
    AngularDualListBoxModule
  ],
})
export class DynamicReportModule { }
