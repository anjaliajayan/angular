import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nearbyfilter'
})
export class NearbyfilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
