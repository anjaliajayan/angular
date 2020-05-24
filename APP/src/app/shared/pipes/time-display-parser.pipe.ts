import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TimeDisplayParser'
})
export class TimeDisplayParser implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let totalMinutes = value;
    let hours = Math.floor(totalMinutes / 60);          
    let minutes = totalMinutes % 60;
    return `${hours} ${hours > 1 ? 'hours' : 'hour'} ${minutes} mins`;
  }

}
