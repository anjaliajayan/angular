import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FlightTimeToMinutesParser'
})
export class FlightTimeToMinutesParser implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let duration = value;
    duration = duration.replace('PT', '');
    duration = duration.replace('H', ' ');
    duration = duration.replace('M', '');
    duration = duration.split(' ');
    let hours = parseInt(duration[0] != '' ? duration[0] : 0);
    let minutes = parseInt(duration[1] != '' ? duration[1] : 0);
    return (hours * 60) + minutes;
  }

}
