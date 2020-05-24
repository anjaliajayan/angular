import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchByName'
})
export class SearchByNamePipe implements PipeTransform {

  transform(hotelList: any[], searchTerm: string): any[] {

    if (!hotelList || !searchTerm) {
      return hotelList;
    }
    return hotelList.filter(hotel => hotel.hotel_name.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) != -1
    );
  }

}
