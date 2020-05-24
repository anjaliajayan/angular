import { environment } from './../../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserRoleService {
    url = environment.serverURL;
    permissionData;
    observablePermission;

    constructor(private http: HttpClient) {

    }

    // get logedin user info
    getLogedInUser() {
        return this.http.get(`${this.url}/api/logedin-user-info`);
    }
    // Modify LogedIn User
    updateLogedInUser(formData: any) {
        return this.http.post(`${this.url}/api/update-logedin-user`, formData);
    }

    // match old password
    matchOldPassword(passowrd: String) {
        return this.http.post(`${this.url}/api/match-old-password`, passowrd);
    }

    // check existing email 
    isUniqueEmail(email: String) {
        return this.http.post(`${this.url}/api/check-unique-email/` + email, email);
    }

    //check existing username
    isUniqueUsername(userName: String) {
        return this.http.post(`${this.url}/api/check-unique-userName/` + userName, userName);
    }

    // Get All users role list
    getList(searchData?: any) {
        return this.http.post(`${this.url}/api/fetch-all-users`, searchData);
    }
    // Export All users list
    exportUser(searchData?: any) {
        return this.http.post(`${this.url}/api/export-users`, searchData);
    }

    // Add New User role
    addBusinessUser(formData: any) {
        console.log("---formData-formData", formData);
        return this.http.post(`${this.url}/api/create-new-user`, formData, {
            headers: new HttpHeaders({
                'Content-Type': "application/json; charset=UTF-8"
            })
        });
    }

    addAdminUser(formData: any) {
        console.log("---formData-formData", formData);
        return this.http.post(`${this.url}/api/create-admin-user`, formData, {
            headers: new HttpHeaders({
                'Content-Type': "application/json; charset=UTF-8"
            })
        });
    }

    addCorporateUser(formData: any) {
        console.log("---formData-formData", formData);
        return this.http.post(`${this.url}/api/create-corporate-user`, formData, {
            headers: new HttpHeaders({
                'Content-Type': "application/json; charset=UTF-8"
            })
        });
    }

    // Get User role Details
    getUser(id: any) {
        return this.http.get(`${this.url}/api/fetch-new-user/${id}`);
    }

    // Modify User role
    updateUser(formData: any) {
        return this.http.put(`${this.url}/api/update-user`, formData);
    }

    // Delete user role
    deleteUser(id: any) {
        return this.http.delete(`${this.url}/api/remove-user/${id}`);
    }

    getRolePermissions(agentId: any) {
        return this.http.get(`${this.url}/api/get-role-permissions/${agentId}`);
    }

    getBookings(formData: any) {
        return this.http.post(`${this.url}/api/get-user-bookings`, formData)
    }

    getPermissions() {
        return this.http.get(`${this.url}/api/organization/fetch-permissions`);
    }

    getRolePermissionsNew(agentId: any) {
        return this.http.get(`${this.url}/api/organization/fetch-permissions-by-org/${agentId}`);
    }

    getMyPermissions() {
        return this.http.get(`${this.url}/api/organization/fetch-my-permissions`);
    }

    getAdminPermissions(org_id: any) {
        return this.http.get(`${this.url}/api/organization/fetch-admin-permissions/${org_id}`);
    }

    onStatusToggle(data:any){
        return this.http.post(`${this.url}/api/toggle-status`, data);
      }

    getNewRolePermissions() {
        if (this.permissionData) {
            console.log("--show permissionData")
            return of(this.permissionData);
        } else if (this.observablePermission) {
            console.log("--show observablePermission")
            return this.observablePermission;
        } else {
            console.log("--call-api");
            this.observablePermission = this.http.get(`${this.url}/api/organization/fetch-my-permissions`, {
                observe: 'response'
            }).pipe(
                map(response => {
                    this.observablePermission = null;
                    if (response.status === 400) {
                        return 'Request failed.';
                    } else if (response.status === 200) {
                        this.permissionData = response.body;
                        return this.permissionData;
                    }
                }),
                share());
            return this.observablePermission;
        }
    }


}