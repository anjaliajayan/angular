import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namefilter'
})
export class NamefilterPipe implements PipeTransform {

  transform(car: any[],searchTerm: string): any[] {
    if (!car || !searchTerm) {
      return car;
    }
    return car.filter(carData => carData.carName.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1
    );
  }


  }

