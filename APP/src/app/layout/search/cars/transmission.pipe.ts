import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transmission'
})
export class TransmissionPipe implements PipeTransform {

  transform(car: any[], transmission: string): unknown {
    if (!car || !transmission) {
      return car;
    }
    return car.filter(carData => carData.transmission.indexOf(transmission) !== -1
    );
  }

}
