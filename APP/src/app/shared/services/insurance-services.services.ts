
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class InsuranceService {

    url = environment.serverURL;
    searchResults = {};
    constructor(private http: HttpClient) { }

    searchInsurance(params?: any) {
        return this.http.post(`${this.url}/api/insurance/search`, params);
      }

    blockInsurance(params?: any) {
        return this.http.post(`${this.url}/api/insurance/block`, params);
      }   
    
      bookInsurance(params?: any) {
        return this.http.post(`${this.url}/api/insurance/book`, params);
      }   

  

}