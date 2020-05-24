import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";

import { organizationH } from "../../models/organization/organizaiton";
import { organizationHeirarchy } from "../../models/organization/organizationHeierarchy";
import { supplier } from '../../models/supplier.interface';
import { organizationVat } from '../../models/organization/organizationVat'

@Injectable({
  providedIn: "root"
})

export class OrganizationHService {
  url = environment.serverURL;
  constructor(private http: HttpClient) { }
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }


  fetchOrganizationDetails(id): Observable<organizationH> {
    return this.http.get<organizationH>(`${this.url}/api/fetch-organization-details?hierarchy_id=` + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  CreateOrganization(data): Observable<organizationH> {
    return this.http.post<organizationH>(`${this.url}/api/create-organization`, data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }
  
  UpdateOrganization(data): Observable<organizationH> {
    return this.http.post<organizationH>(`${this.url}/api/update-organization`, data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }
  //Fetch all organization
  GetAllOrganization(tourID?, limit?, pageIndex?): Observable<organizationH> {
    return this.http
      .get<organizationH>(`${this.url}/api/fetch-all-organization`, {withCredentials: true})
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }
  //Fetch all organization
  GetAllOrganizationHierarchy(
    tourID?,
    limit?,
    pageIndex?
  ): Observable<organizationHeirarchy> {
    return this.http
      .get<organizationHeirarchy>(`${this.url}/api/fetch-all-Hierarchy`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }
  //update Organization Hierarchy
  UpdateOrganizationHierarchy(data): Observable<organizationHeirarchy> {
    return this.http.post<organizationHeirarchy>(`${this.url}/api/update-organization-heirarchy`, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }
  CreateOrganizationHierarchy(data): Observable<organizationHeirarchy> {
    return this.http.post<organizationHeirarchy>(`${this.url}/api/create-organization-hierarchy`, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }
  fetchActiveSuppliers(): Observable<supplier> {
    return this.http.get<supplier>(`${this.url}/api/fetch_supplier_pos`, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  updateOrganizationSupplier(data): Observable<supplier> {
    return this.http.post<supplier>(`${this.url}/api/organization_vat`, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  updateOrganizationVat(data): Observable<supplier> {
    return this.http.post<supplier>(`${this.url}/api/update_supplier_pos`, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // Error handling
  errorHandl(error) {
    let errorMessage = "";
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
