import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../../environments/environment';

@Injectable({
providedIn: 'root'
})

export class SeatMapService {

url = environment.serverURL;
pager = {};
pageOfItems = [];
constructor(private http: HttpClient) { }

// Http Headers
httpOptions = {
headers: new HttpHeaders({
'Content-Type': 'application/json'
})
}


getSeatMapResp(data:any) {
return this.http.post(`${this.url}/api/flights/seatmap`,data);
}


}