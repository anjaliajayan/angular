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

export class OrganizationHierarchyService {
  url = environment.serverURL;
  constructor(private http: HttpClient) { }
  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  //Fetch all organization Hierarchy
  GetAllOrganizationHierarchy(): Observable<organizationHeirarchy> {
    return this.http
      .get<organizationHeirarchy>(`${this.url}/api/organization/fetch-childs`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }
  //Fetch all organization Hierarchy
  GetAllOrganizationHierarchyHierarchyWise(): Observable<organizationHeirarchy> {
    return this.http
      .get<organizationHeirarchy>(`${this.url}/api/organization/fetch-childs-with-hierarchy`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  //update Organization Hierarchy
  UpdateOrganizationHierarchyNotUsed(data): Observable<organizationHeirarchy> {
    return this.http.post<organizationHeirarchy>(`${this.url}/api/organization/create-agency`, data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

//creating new agency
  CreateOrganizationHierarchy(data): Observable<organizationHeirarchy> {
    return this.http.post<organizationHeirarchy>(`${this.url}/api/organization/create-agency`, data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  fetchOrganizationDetails(id): Observable<organizationH> {
    return this.http.get<organizationH>(`${this.url}/api/organization/fetch-hierarchy-details?hierarchy_id=` + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  //checkfororganizationname
  isUniqueOrganisation(orgName: String) {
    return this.http.post(`${this.url}/api/check-unique-orgName/` + orgName, orgName);
  }

  getPosDetails(id: any) {
    return this.http.get(`${this.url}/api/organization/fetch-pos/${id}`);
   }


   updatePosDetails(data): Observable<organizationH> {
    return this.http.post<organizationH>(`${this.url}/api/organization/update-agency`, data);
   
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
