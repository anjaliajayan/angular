import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'classfilter'
})
export class ClassfilterPipe implements PipeTransform {

  transform(car: any[],searchTerm: string): any[] {
    if (!car || !searchTerm) {
      return car;
    }
    return car.filter(carData => carData.carClass.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1
    );
  }


  }


