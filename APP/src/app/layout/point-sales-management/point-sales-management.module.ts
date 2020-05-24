import { PointSalesManagementComponent } from './point-sales-management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PointSalesManagementRoutingModule } from './point-sales-management-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [PointSalesManagementComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PointSalesManagementRoutingModule,
    DragDropModule,
    MatFormFieldModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatChipsModule,
  ]
})
export class PointSalesManagementModule { }
