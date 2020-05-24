import { environment } from '../../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PointOfSaleService {
    url = environment.serverURL;

    constructor(private http: HttpClient) {

    }
    // Get All users role list
    getList(filterData: any) {
        return this.http.post(`${this.url}/api/pos-list`, filterData);
    }

    // Get User role Details
    getPos(id: any) {
        return this.http.get(`${this.url}/api/pos-view/${id}`);
    }
    
    // Delete pos role
    deletePos(id: any) {
        return this.http.post(`${this.url}/api/organization/delete-pos/${id}`,"");
    }

    onStatusToggle(data:any){
        return this.http.post(`${this.url}/api/toggle-status`, data);
      }

}