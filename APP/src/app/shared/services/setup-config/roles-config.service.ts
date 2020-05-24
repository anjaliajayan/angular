import { Injectable } from '@angular/core';
import { trigger } from '@angular/animations';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AirlineDeals } from '../../models/setup-config/airline-deals';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { AirlineCommission } from '../../models/setup-config/airline-commission';
import { ListOfSupplers } from '../../models/setup-config/list-of-supplier';
import { ContentManagement } from '../../models/setup-config/content-management';
import { EmailTemplates } from '../../models/setup-config/email-template';
import { CurrencyConfig } from '../../models/setup-config/currency-config';

import { Role } from "src/app/shared/models/setup-config/roles";

@Injectable({
  providedIn: 'root'
})
export class SetupConfigRoleService {
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

  // GET ALL Roles create by me
  getRoles() {
    return this.http.get(`${this.url}/api/roles/list`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  addRole(formData) {
    return this.http.post(`${this.url}/api/roles/add`, formData)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  getRole(role_id: any) {
    return this.http.get(`${this.url}/api/roles/get/${role_id}`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  updateRole(role_id: number, formData) {
    return this.http.put(`${this.url}/api/roles/update/${role_id}`, formData)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  deleteRole(role_id: any) {
    return this.http.post(`${this.url}/api/roles/delete/${role_id}`,"")
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }


  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}

