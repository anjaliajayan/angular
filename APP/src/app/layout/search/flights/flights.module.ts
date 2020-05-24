import { FlightTimeParser } from './../../../shared/pipes/flight-time-parser.pipe';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsRoutingModule } from './flights-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';
import { FlightDataService } from '../../../shared/services/flight-data.service'
import { FlightSearchService } from './../../../shared/services/flight-search.service';
import { FlightsComponent } from './flights.component';
import { BookFlightsComponent, FarePriceConditionsSheet } from './book-flights/book-flights.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { PassengersComponent } from './passengers/passengers.component';
import { ReshopComponent } from './reshop/reshop.component';
import { FaresBaggageComponent } from './fares-baggage/fares-baggage.component';
import { ReshopResultsComponent } from './reshop/reshop-results/reshop-results.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DynamicSearchResultsComponent } from './dynamic-search-results/dynamic-search-results.component';
import { FlightTimeToMinutesParser } from 'src/app/shared/pipes/flight-time-to-minutes-parser.pipe';
import { TimeDisplayParser } from 'src/app/shared/pipes/time-display-parser.pipe';
import { MatSliderModule } from '@angular/material/slider';

import { MealServiceComponent } from './../../ancillary-services/meal-service/meal-service.component';
import { BaggageServiceComponent } from './../../ancillary-services/baggage-service/baggage-service.component';
import { DisabilityServiceComponent } from './../../ancillary-services/disability-service/disability-service.component';
import { AncillaryServiceComponent } from '../../ancillary-services/ancillary-service.component';
import { DatepickerMinMax } from './../../../layout/components/miscellaneous/datepicker-min-max/class';

import { ModalModule } from '../../_modal';
import { SeatMapComponent } from '../seat-map/seat-map.component';
import { SeatMapModule } from '../seat-map/seat-map.module';

// import {SeatMapService} from '../../../shared/services/seat-map.service'

import {TimerComponent} from './time-counter/time-counter.component'
import {MinuteCountComponent} from './time-counter/minute-counter/minute-count.component'

// import { CountdownTimerModule } from 'ngx-countdown-timer';

import { flightListingFilterPipe } from './../../../shared/pipes/flight-listing.pipe';
import { flightDynamicUpdatePipe } from './../../../shared/pipes/flight-dynamic-price.pipe';

import { CalendarSearchComponent } from './calendar-search/calendar-search.component';
import { StructureLoaderComponent } from './structure-loader/structure-loader.component';

@NgModule({
  entryComponents: [FarePriceConditionsSheet],
  declarations: [
    FlightsComponent,
    FarePriceConditionsSheet,
    BookFlightsComponent,
    SearchResultsComponent,

    PassengersComponent,
    FlightTimeParser,
    
    FlightTimeToMinutesParser,
    TimeDisplayParser,
    FaresBaggageComponent,
    ReshopComponent,
    ReshopResultsComponent,
    DynamicSearchResultsComponent,
    MealServiceComponent,
    BaggageServiceComponent,
    TimerComponent,
    MinuteCountComponent,
    DisabilityServiceComponent,
    AncillaryServiceComponent,
    DatepickerMinMax,
    flightListingFilterPipe,
    
    CalendarSearchComponent,
    flightDynamicUpdatePipe,
    StructureLoaderComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlightsRoutingModule,
    MatCardModule,
  
    MatTabsModule,
    SeatMapModule,
    MatFormFieldModule,
    // CountdownTimerModule.forRoot(),
    MatInputModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatGridListModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    MatBottomSheetModule,
    MatSelectModule,
    MatDatepickerModule,
    NgxDatatableModule,
    FlexLayoutModule,
    MatCheckboxModule,
    MatIconModule,
    RouterModule,
    ModalModule,
    MatSliderModule
  ],
  bootstrap: [DatepickerMinMax],
  providers: [
    FlightDataService,
    FlightSearchService
  ]
})
export class FlightsModule { }
