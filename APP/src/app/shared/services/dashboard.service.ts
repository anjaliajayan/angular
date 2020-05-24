import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  url = environment.serverURL;
  
  constructor(private http: HttpClient) { }

  fetchBookingsInformation( params ) {
    return this.http.get(`${this.url}/api/fetch-bookings-information?${ this.serialize(params)}`);
  }

  fetchPresetInformation(params) {
    return this.http.get(`${this.url}/api/fetch-preset-information?${ this.serialize(params)}`);
  }
  fetchFlightInformation(airport?) {
    return this.http.get(`${this.url}/api/fetch-flights-information?month=8`);
  }
  fetchProductivityInformation(params){
    return this.http.get(`${this.url}/api/fetch-productivity-information?${ this.serialize(params)}`);
  }
  fetchPerformaceInformation(params){
    return this.http.get(`${this.url}/api/fetch-performance-information?${ this.serialize(params)}`);
  }
  serialize(obj) {
    var str = [];
    for(var p in obj)
       str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    return str.join("&");
  }
  
  
}
