import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.serverURL;

  constructor(private http: HttpClient) {}

  getAllUsersByOrganizationId(orgID: string = '') {
    return this.http.post(`${this.url}/api/fetch-all-users/`, {
      organisation_id: orgID,
      page: 0,
      limit: 1000
    });
  }


  // getPermissions(): Observable<any> {
    
  //   return this.http.get(`${this.url}/api/permissions`).pipe(
  //     tap(async (response: any) => {
  //       return response;
  //     })
  //   );
  // }

}

