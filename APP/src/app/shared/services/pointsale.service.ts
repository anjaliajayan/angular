import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class POSService {
  url = environment.serverURL;
  
  constructor(private http: HttpClient) { }

  fetchAllPointofSale(data) {
    return this.http.get(`${this.url}/api/fetch-all-organization`);
  }  
}
