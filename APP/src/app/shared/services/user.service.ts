import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UserService {

    private apiUrl = environment.serverURL;

    constructor(private http: HttpClient) { }

    createUser(data): Observable<any> {
        return this.http.post(`${this.apiUrl}/api/create-new-user`, data).pipe(
            tap(async (result: any) => {
            return result;
            })
        );
    }

    updateUser(data): Observable<any> {
        return this.http.put(`${this.apiUrl}/api/update-user`, data).pipe(
            tap(async (result: any) => {
            return result;
            })
        );
    }

    fetchUser(id): Observable<any> {
        return this.http.get(`${this.apiUrl}/api/fetch-new-user/${id}`).pipe(
            tap(async (result: any) => {
            return result;
            })
        );
    }

    fetchUsers(data): Observable<any> {
        return this.http.post(`${this.apiUrl}/api/fetch-all-users`, data).pipe(
            tap(async (result: any) => {
            return result;
            })
        );
    }
    
    fetchRoles(): Observable<any> {
        return this.http.get(`${this.apiUrl}/api/roles/list`).pipe(
            tap(async (result: any) => {
            return result;
            })
        );
    }
    
    fetchOrganizations(): Observable<any> {
        return this.http.get(`${this.apiUrl}/api/fetch-all-organization`).pipe(
            tap(async (result: any) => {
            return result;
            })
        );
    }

    savePermissions(data): Observable<any> {
        return this.http.post(`${this.apiUrl}/api/users/permission`, data).pipe(
            tap(async (result: any) => {
            return result;
            })
        );
    }
    
    fetchPermissions(): Observable<any> {
        return this.http.get(`${this.apiUrl}/api/users/permissions`).pipe(
            tap(async (result: any) => {
            return result;
            })
        );
    }

    saveTargets(data): Observable<any> {
        return this.http.post(`${this.apiUrl}/api/users/target`, data).pipe(
            tap(async (result: any) => {
                return result;
            })
        );
    }

    // Get All users role list
    GetAllUsers(searchData?: any) {
        return this.http.post(`${this.apiUrl}/api/fetch-all-users`, searchData);
    }
    onStatusToggle(data:any){
        return this.http.post(`${this.apiUrl}/api/toggle-status`, data);
      }
        // Delete user role
    deleteUser(id: any) {
        return this.http.delete(`${this.apiUrl}/api/remove-user/${id}`);
    }
    /*
    

    listUsers(): Observable<any> {
        return this.http.get(`${this.apiUrl}/api/users`).pipe(
            tap(async (result: any) => {
            return result;
            })
        );
    }

    fetchTargets(userId): Observable<any> {
        return this.http.get(`${this.apiUrl}/api/users/targets/${userId}`).pipe(
            tap(async (result: any) => {
            return result;
            })
        );
    }

    
    */

   
}
