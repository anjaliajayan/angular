import { environment } from '../../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RegistrationService {
    url = environment.serverURL;

    constructor(private http: HttpClient) {

    }
    // Get All users role list
    getList(filterData: any) {
        return this.http.get(`${this.url}/api/registration-list`, filterData);
    }

    // Get User role Details
    getUser(id: any) {
        return this.http.get(`${this.url}/api/registration-view/${id}`);
    }

    // Delete user role
    deleteUser(data) {
        return this.http.post(`${this.url}/api/registration-delete/`, data);
    }

}