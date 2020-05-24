import { Pipe, PipeTransform } from '@angular/core';
import { HotelService } from './../../../shared/services/hotels.service';

@Pipe({
  name: 'nearByPlaces'
})
export class NearByPlacesPipe implements PipeTransform {
  constructor(private HotelService: HotelService) { }
  transform(hotelList: any[], place: any, placeLat: any): any[] {
    let count = 0;
    console.log("place", place);
    if (!hotelList || !placeLat || !place ) {
      return hotelList;
    } else{
      var loclat = place.latitude;
      var loclong = place.longitude;
      var random = Math.floor(Math.random() * 90) + 10;
      //obj to pass
      var obj = {
        loclat: loclat,
        loclong: loclong,
        random: random
      }
      let filteredResults: any = [];
      this.HotelService.getPopLocations(obj).subscribe((locations: any) => {
        locations = locations.result;        
        hotelList.filter(hotel => {
          locations.forEach(location => {
            if (hotel.address == location.address) {
              if (count != 1) {
                if (filteredResults.indexOf(hotel) < 0) {
                  filteredResults.push(hotel);
                }
              } else {
                filteredResults.push(hotel);
              }
            }
          });
        });
       
      });
      return filteredResults;
    }

  }

  //get nearby locations
  async getNearbyLocations(params) {
    let loctions: any;
    this.HotelService.getPopLocations(params).subscribe((locations: any) => {
      locations = locations.result;
    });
    return loctions;
  }


}
