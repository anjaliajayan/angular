import { HttpClient} from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  url = environment.serverURL;
  searchResults = {};
  countries:any;
  constructor(private http: HttpClient) { }

search(params?: any) {
    return this.http.post(`${this.url}/api/hotels`, params);
  }

searchRooms(params?: any) {
    return this.http.post(`${this.url}/api/hotels/rooms/search`, params);
  }
blockRoom(params?:any){
  return this.http.post(`${this.url}/api/hotels/rooms/block`, params);
}
bookRoom(params?:any){
  return this.http.post(`${this.url}/api/hotels/rooms/book`, params);
}
getCities(country:any = '') {
  return this.http.post(`${this.url}/api/hotels/hotel-get-city`, country);
}
getCityById(cityId:any = ''){
  return this.http.get(`${this.url}/api/hotels/hotel-get-citybyId/${cityId}`);
}
getHotelInfo(hotel){
  return this.http.post(`${this.url}/api/hotels/details`,hotel);
}

getPopularCities(params){
  return this.http.post(`${this.url}/api/hotels/places`,params);
}
getPopLocations(params){
  return this.http.post(`${this.url}/api/hotels/nearbylocations`,params);
}
orderCancelRequest(cancel?: any) {
    return this.http.post(`${this.url}/api/hotels/rooms/cancel`,cancel);
}
orderReteriveRequest(reterive?: any) {
    return this.http.post(`${this.url}/api/hotels/orderreterive`,reterive);
}
hotelSendVoucher(voucher?:any){
  return this.http.post(`${this.url}/api/hotels/booking-voucher-send`,voucher);
}


}
