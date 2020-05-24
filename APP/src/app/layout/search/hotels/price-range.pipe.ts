import { Pipe, PipeTransform } from '@angular/core';
import { max } from 'rxjs/operators';

@Pipe({
  name: 'priceRange'
})
export class PriceRangePipe implements PipeTransform {
  transform(hotelList: any[], minPrice: number, maxPrice: number): any[] {

    if (!hotelList || (!minPrice && !maxPrice)) {
      return hotelList;
    }
    return hotelList.filter(hotel => Number(hotel.markup_price) > minPrice && Number(hotel.markup_price) < maxPrice
    );
  }

}
