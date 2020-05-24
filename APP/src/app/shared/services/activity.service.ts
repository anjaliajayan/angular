import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ActivitySearchService {
  url = environment.serverURL;
  searchResults = {};
  constructor(private http: HttpClient) { }

  searchActivity(searchData?: any) {
    return this.http.post(`${this.url}/api/activities`, searchData);
  }
  activityDetails(details?: any) {
    return this.http.post(`${this.url}/api/activities/details`, details);
  }
  BlockRequest(block?: any) {
    return this.http.post(`${this.url}/api/activities/block`, block);
  }
  orderCreateRequest(book?: any) {
    return this.http.post(`${this.url}/api/activities/book`, book);
  }
  orderCancelRequest(cancel?: any) {
    return this.http.post(`${this.url}/api/activities/cancel`,cancel);
  }
  orderReteriveRequest(reterive?: any) {
    return this.http.post(`${this.url}/api/activities/orderreterive`,reterive);
  }
  activitySendVoucher(voucher?:any){
    return this.http.post(`${this.url}/api/activities/booking-voucher-send`,voucher);
  }

}
