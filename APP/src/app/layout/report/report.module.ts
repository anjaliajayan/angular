import { ReportComponent } from './report.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { ReactiveFormsModule, FormsModule } from '@angular/forms';
 import { ReportRoutingModule } from './report-routing.module';

@NgModule({
  declarations: [ReportComponent],
  imports: [
    CommonModule,
     ReportRoutingModule,
     ReactiveFormsModule,
  ]
})
export class ReportModule { }
