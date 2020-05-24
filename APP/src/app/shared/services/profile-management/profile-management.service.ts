import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NewTravellerProfile } from './../../models/profile-management/new-traveller-profile';
import { NewGroupProfile } from './../../models/profile-management/new-group-profile';
import { NewCompanyProfile } from './../../models/profile-management/new-company-profile';
import { NewAgencyProfile } from './../../models/profile-management/new-agency-profile';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from './../../../../environments/environment';
import {CreateNewProfile } from './../../models/profile-management/create-new-profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileManagementService {
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

  // POST
  NewTravellerProfile(data): Observable<NewTravellerProfile> {
    return this.http.post<NewTravellerProfile>(`${this.url}/api/create-new-traveller-profile`, data);
  }

  NewGroupProfile(data): Observable<NewGroupProfile> {
    return this.http.post<NewGroupProfile>(`${this.url}/api/create-new-group-profile`, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  NewCompanyProfile(data): Observable<NewCompanyProfile> {
    return this.http.post<NewCompanyProfile>(`${this.url}/api/create-new-company-profile`, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  NewAgencyProfile(data): Observable<NewAgencyProfile> {
    return this.http.post<NewAgencyProfile>(`${this.url}/api/create-new-agency-profile`, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  profileSearch(filterData: any) {
    return this.http.post(`${this.url}/api/search-traveller`, filterData);
}


  UpdateCreateProfile(data): Observable<CreateNewProfile> {
  return this.http.post<CreateNewProfile>(`${this.url}/api/update-new-traveller-profile`, data);
  }
  // GetTravellerById(id): Observable<NewTravellerProfile> {
  //   // return this.http.get<NewTravellerProfile>(`${this.url}/api/fetch-new-traveller-profile` + id)
  //   //   .pipe(
  //   //     retry(1),
  //   //     catchError(this.errorHandl)
  //   //   )

      
  
     
  
  // }




  GetAllTraveller(travellID?, limit?, pageIndex?): Observable<NewTravellerProfile> {
    return this.http.get<NewTravellerProfile>(`${this.url}/api/fetch-all-traveller-profile`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }


  GetAllCompanies(travellID?, limit?, pageIndex?): Observable<NewCompanyProfile> {
    return this.http.get<NewCompanyProfile>(`${this.url}/api/fetch-all-company-profile`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  GetAllAgencies(travellID?, limit?, pageIndex?): Observable<NewAgencyProfile> {
    return this.http.get<NewAgencyProfile>(`${this.url}/api/fetch-all-agency-profile`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  GetAllGroups(travellID?, limit?, pageIndex?): Observable<NewGroupProfile> {
    return this.http.get<NewGroupProfile>(`${this.url}/api/fetch-all-group-profile`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // PUT
  UpdateTravellerProfile(id, data): Observable<NewTravellerProfile> {
    return this.http.post<NewTravellerProfile>(`${this.url}/api/update-new-traveller-profile?traveller_profile_id=` + id, JSON.stringify(data), this.httpOptions)
      //return this.http.put<NewTravellerProfile>(`${this.url}/api/update-new-traveller-profile` + id, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  updateProfile(data: any){
    console.log("data::::",data)
    return this.http.post(`${this.url}/api/update-new-traveller-profile`,data);
}

  UpdateGroupProfile(id, data): Observable<NewGroupProfile> {
    return this.http.put<NewGroupProfile>(`${this.url}/api/update-new-group-profile?group_profile_id=` + id, JSON.stringify(data), this.httpOptions)
      //return this.http.put<NewTravellerProfile>(`${this.url}/api/update-new-traveller-profile` + id, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  UpdateAgencyProfile(id, data): Observable<NewAgencyProfile> {
    return this.http.put<NewAgencyProfile>(`${this.url}/api/update-new-agency-profile?agency_profile_id=` + id, JSON.stringify(data), this.httpOptions)
      //return this.http.put<NewTravellerProfile>(`${this.url}/api/update-new-traveller-profile` + id, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  UpdateCompanyProfile(id, data): Observable<NewCompanyProfile> {
    return this.http.put<NewCompanyProfile>(`${this.url}/api/update-new-company-profile?company_profile_id=` + id, JSON.stringify(data), this.httpOptions)
      //return this.http.put<NewTravellerProfile>(`${this.url}/api/update-new-traveller-profile` + id, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // DELETE
  DeleteTravellerById(id) {
    return this.http.post<NewTravellerProfile>(`${this.url}/api/remove-traveller-profile`, JSON.stringify(id), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  DeleteCompanyById(id) {
    return this.http.delete<NewCompanyProfile>(`${this.url}/api/remove-company-profile?company_profile_id=` + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  DeleteAgencyById(id) {
    return this.http.delete<NewAgencyProfile>(`${this.url}/api/remove-agency-profile?agency_profile_id=` + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  DeleteGroupById(id) {
    return this.http.delete<NewGroupProfile>(`${this.url}/api/remove-group-profile?group_profile_id=` + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  ReteriveProfileData(options) {
    return this.http.post(`${this.url}/api/retrive-all-profiles-data`, options, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )

      
  }

  GetTravellerById(id: any) {
    return this.http.get(`${this.url}/api/fetch-new-traveller-profile/${id}`);
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
