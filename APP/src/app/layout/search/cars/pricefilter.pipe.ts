import { Pipe, PipeTransform } from '@angular/core';
import { max } from 'rxjs/operators';

@Pipe({
  name: 'pricefilter'
})
export class PricefilterPipe implements PipeTransform {
  transform(car: any[], minPrice: number, maxPrice: number): any[] {

    if (!car || (!minPrice && !maxPrice)) {
      return car;
    }
    return car.filter(carData => Number(carData.markupPrice) > minPrice && Number(carData.markupPrice) < maxPrice
    );
  }

}
