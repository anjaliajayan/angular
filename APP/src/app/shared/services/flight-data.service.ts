import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
@Injectable()
export class FlightDataService {


  submitFromUrl: string = "http://uatadmin7.tpconnects.online/flights/flights/airShopping";
  object: any = { "trip_type": "oneway", "adt": 1, "chd": 0, "inf": 0, "cabinPreferences": "Y", "airlinePreferences": "all", "nostop": false, "refundablebyopt": false, "privatefare": "On", "origin_dest": [{ "departure": { "airport_code": "BOM", "flag": "in", "label": "Mumbai, India (BOM-Chhatrapati Shivaji Intl.)", "latitude": "19.093916", "longitude": "72.875404", "maincityid": null, "parentregionid": "6049939", "regionid": "6050062" }, "arrival": { "airport_code": "DXB", "flag": "ae", "label": "Dubai, United Arab Emirates (DXB-Dubai Intl.)", "latitude": "25.249077", "longitude": "55.352795", "maincityid": null, "parentregionid": "1079", "regionid": "6053839" }, "departure_date": "20/08/2019", "arrival_date": "20/08/2019" }] }
  baseUrl: string = "https://elasticsearch.tpconnects.com/airport.php?term=";
  
  submitted=[false,false,false,false,false,false];
  constructor(private httpClient: HttpClient,private router: Router,private r: ActivatedRoute) { }
  public FlightDataPost(_obj,tabNumber:number) {
    console.log(tabNumber);
    this.submitted[tabNumber]=true;
    console.log(this.submitted);
    //this.router.navigate([`search/flights/submit`], { relativeTo: r ,skipLocationChange: true });
    return this.httpClient.post(this.submitFromUrl, this.object, {
      headers: new HttpHeaders({
        'Content-Type': "application/json; charset=UTF-8",
        'Cookie': 'PHPSESSID=12e7eb6b2a848550e0a090b03cb98ade'
      })
    }).pipe(map(data =>
      (console.log(data))));
  }

  public getDropDown(_value: string) {
    return this.httpClient.get(`${this.baseUrl}${_value}`);

  }
}
