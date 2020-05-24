import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'FlightTimeParser'
})
export class FlightTimeParser implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let duration = value;
    let totalMinutes = null;
    duration = duration.replace('PT', '');
    duration = duration.replace('H', ' ');
    duration = duration.replace('M', '');
    duration = duration.split(' ');
    let hours = parseInt(duration[0] != '' ? duration[0] : 0);
    let minutes = parseInt(duration[1] != '' ? duration[1] : 0);
    totalMinutes += (hours * 60) + minutes;
    return `${hours} ${hours > 1 ? 'hours' : 'hour'} ${minutes} mins`;
  }

}
