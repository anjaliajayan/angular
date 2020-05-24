import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarSearchService {
  url = environment.serverURL;
  searchResults = {};
  constructor(private http: HttpClient) { }

  airportsListing(airport?: any) {
    return this.http.get(`${this.url}/api/cars/fetch-airports`);
  }
  searchCar(searchData?: any) {
    return this.http.post(`${this.url}/api/cars`, searchData);
  }
  carDetails(details?: any) {
    return this.http.post(`${this.url}/api/cars/details`, details);
  }
  BlockRequest(block?: any) {
    return this.http.post(`${this.url}/api/cars/block`, block);
  }
  orderCreateRequest(book?: any) {
    return this.http.post(`${this.url}/api/cars/book`, book);
  }
  orderCancelRequest(cancel?: any) {
    return this.http.post(`${this.url}/api/cars/cancel`,cancel);
  }
  orderReteriveRequest(reterive?: any) {
    return this.http.post(`${this.url}/api/cars/orderreterive`,reterive);
  }
  carSendVoucher(voucher?:any){
    return this.http.post(`${this.url}/api/cars/booking-voucher-send`,voucher);
  }


}
