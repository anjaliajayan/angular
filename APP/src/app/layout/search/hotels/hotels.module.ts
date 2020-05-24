import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsRoutingModule } from './hotels-routing.module';
import { HotelsComponent } from './hotels.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HotelsSearchResultsComponent } from './hotels-search-results/hotels-search-results.component';
import { HotelService } from 'src/app/shared/services/hotels.service';
import { PanelComponent } from './panel/panel.component';

import { ModalModule } from './../../_modal';
import { HotelPassengerDetailsComponent } from './hotel-passenger-details/hotel-passenger-details.component';
import { LowestPricePipe } from './lowest-price.pipe';
import { AgmCoreModule } from '@agm/core';
import { SearchByNamePipe } from './search-by-name.pipe';
import { SearchByRatingPipe } from './search-by-rating.pipe';
import { PriceRangePipe } from './price-range.pipe';
import { HighlightDirective } from './highlight.directive';
import { TripadvisorPipe } from './tripadvisor.pipe';
import { LabelFilterPipe } from './label-filter.pipe';
import { NearByPlacesPipe } from './near-by-places.pipe';
import { MealPlanFilterPipe } from './meal-plan-filter.pipe';
import { AncillariesPipePipe } from './ancillaries-pipe.pipe';
import { MapRatingFilterPipe } from './map-rating-filter.pipe'; 






@NgModule({
  declarations: [
    HotelsComponent,
    HotelsSearchResultsComponent,
    PanelComponent,
    HotelPassengerDetailsComponent,
    LowestPricePipe,
    SearchByNamePipe,
    SearchByRatingPipe,
    PriceRangePipe,
    HighlightDirective,
    TripadvisorPipe,
    LabelFilterPipe,
    NearByPlacesPipe,
    MealPlanFilterPipe,
    AncillariesPipePipe,
    MapRatingFilterPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HotelsRoutingModule,
    FormsModule,
    ModalModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAkERo3BglD0unOdGavsTyVl9ZRakMIBB4'
    }),
 

  ],
  providers: [
    HotelService
  ]})
export class HotelsModule { }
