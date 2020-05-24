import { CarsComponent } from './cars.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarsRoutingModule } from './cars-routing.module';
import { DetailsComponent } from './details/details.component';
import { BlockComponent } from './block/block.component';
import { CancelComponent } from './cancel/cancel.component';
import { OrderretrieveComponent } from './orderretrieve/orderretrieve.component';
import {ReactiveFormsModule,FormsModule} from "@angular/forms";
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
// import { MatIconModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CarPassengersDetailsComponent } from './car-passengers-details/car-passengers-details.component';
import { NamefilterPipe } from './namefilter.pipe';
import { ClassfilterPipe } from './classfilter.pipe';
import { PricefilterPipe } from './pricefilter.pipe';
import { NearbyfilterPipe } from './nearbyfilter.pipe';
import { LowestPricePipe } from './lowest-price.pipe';
import { TransmissionPipe } from './transmission.pipe';


@NgModule({
  declarations: [CarsComponent, DetailsComponent, BlockComponent, CancelComponent, OrderretrieveComponent,
  CarPassengersDetailsComponent,
  NamefilterPipe,
  ClassfilterPipe,
  PricefilterPipe,
  NearbyfilterPipe,
  LowestPricePipe,
  TransmissionPipe],
  imports: [
    CommonModule,
    CarsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatTabsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    MatSelectModule,
    MatListModule,
    MatCheckboxModule

  ]
})
export class CarsModule { }
