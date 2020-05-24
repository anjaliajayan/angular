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

import { GroupSeasonality } from '../../models/setup-config/group_seasonality';
import { Markups } from '../../models/setup-config/markups';
import { AirlineRoutes } from '../../models/setup-config/airline-routes';

@Injectable({
  providedIn: 'root'
})
export class SetupConfigService {
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

  // GET ALL
  GetAllAirlines(formData: any): Observable<AirlineDeals> {

    return this.http.post<AirlineDeals>(`${this.url}/api/fetch-all-tourcodes`, formData)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // read all commissions
  GetAllAirCommissions(formData: any): Observable<AirlineCommission> {
    return this.http.post<AirlineCommission>(`${this.url}/api/fetch-all-commissions`, formData)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

    // GET ALL SUPPLIERS
    FetchAllSuppliers(formData: any): Observable<ListOfSupplers> {
      return this.http.get<ListOfSupplers>(`${this.url}/api/fetch-all-supplier`)
        .pipe(
          retry(1),
          catchError(this.errorHandl)
        )
    }
  

  // GET ALL SUPPLIERS
  GetAllSuppliers(formData: any): Observable<ListOfSupplers> {
    console.log("formData::::",formData);
    return this.http.post<ListOfSupplers>(`${this.url}/api/read-all-supplier`,formData)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // GET ALL
  GetAllHotels(tourID?, limit?, pageIndex?): Observable<ContentManagement> {
    return this.http.get<ContentManagement>(`${this.url}/api/fetch-all-content`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // GET ALL
  GetAllEmails(tourID?, limit?, pageIndex?): Observable<EmailTemplates> {
    return this.http.get<EmailTemplates>(`${this.url}/api/fetch-all-email-template`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // GET ALL
  GetAllCurrencies(formData: any): Observable<CurrencyConfig> {

    return this.http.post<CurrencyConfig>(`${this.url}/api/fetch-all-currency`,formData)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }
  // GET ALL
  GetAllMarkups(params): Observable<Markups> {
    return this.http.post<Markups>(`${this.url}/api/fetch-all-markups`, params)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }
  // GET ALL
  GetAllGroups(params): Observable<GroupSeasonality> {
    return this.http.post<GroupSeasonality>(`${this.url}/api/fetch-all-sales`, params)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // Add Group/ Sale
  AddGroup(params): Observable<GroupSeasonality> {
    return this.http.post<GroupSeasonality>(`${this.url}/api/add-sale`, params)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  deleteGroup(id): Observable<GroupSeasonality> {
    return this.http.post<GroupSeasonality>(`${this.url}/api/delete-sale/${id}`,{})
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // Add Markup
  AddMarkup(params): Observable<Markups> {

    return this.http.post<Markups>(`${this.url}/api/add-markup`, params)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }
  deleteMarkup(id): Observable<GroupSeasonality> {
    return this.http.post<GroupSeasonality>(`${this.url}/api/delete-markup/${id}`, {})
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  getEmailInfo(id: any): Observable<EmailTemplates> {
    return this.http.get<EmailTemplates>(`${this.url}/api/fetch-email-template/${id}`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  updateTemplate(formData: EmailTemplates): Observable<EmailTemplates> {
    return this.http.post<EmailTemplates>(`${this.url}/api/update-email-template`, formData)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // Add New tourcode
  addTourCodeSupplier(formData: any): Observable<AirlineDeals> {
    return this.http.post<AirlineDeals>(`${this.url}/api/create-new-tourcode`, formData,
      {
        headers: new HttpHeaders({
          'Content-Type': "application/json; charset=UTF-8"
        })
      })

  }

  // Delete tour code user
  deleteTourcode(data: any) {
    return this.http.post(`${this.url}/api/remove-tourcode`,data,
    {
      headers: new HttpHeaders({
        'Content-Type': "application/json; charset=UTF-8"
      })
    });
  }

  //updating tour code user details
  getUpdateTourCode(id: any, obj: any) {
    return this.http.post(`${this.url}/api/update-tourcode/${id}`, obj);

  }

  //create new commission
  addCommission(formData: any): Observable<AirlineCommission> {
    return this.http.post<AirlineCommission>(`${this.url}/api/create-new-commission`, formData,
      {
        headers: new HttpHeaders({
          'Content-Type': "application/json; charset=UTF-8"
        })
      })
  }

  //update commission  details
  getUpdateCommission(id: any, obj: any) {
    return this.http.post(`${this.url}/api/update-commission/${id}`, obj);
  }

  //delete commission
  deleteCommission(id: any) {
    return this.http.delete(`${this.url}/api/remove-commission/${id}`);
  }
  
  deleteCurrency(id:any){
    return this.http.post(`${this.url}/api/remove-currency/${id}`,"");
  }

  addCurrency(formData: any):Observable<CurrencyConfig>{
    return this.http.post<CurrencyConfig>(`${this.url}/api/create-new-currency`, formData,
    {
      headers: new HttpHeaders({
        'Content-Type': "application/json; charset=UTF-8"
      })
    })
  }

  getUpdateCurrency(id: any, obj: any){
    return this.http.put(`${this.url}/api/update-currency/${id}`, obj);
  }

  //fetch all countries
  GetAllCountries(){
    return this.http.get(`${this.url}/api/get-country-list-db`)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  //fetch supplier by id
  getSupplier(id: any){
    return this.http.get(`${this.url}/api/fetch-supplier/${id}`);
  }

  updateSupplier(id: any, obj: any){
    return this.http.post(`${this.url}/api/update-supplier/${id}`, obj);
  }

  editGroup(params): Observable<GroupSeasonality> {
    return this.http.post<GroupSeasonality>(`${this.url}/api/add-sale`, params)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  editMarkup(params): Observable<Markups> {
    console.log("params---------",params)
    return this.http.post<Markups>(`${this.url}/api/add-markup`, params)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  searchMarkupByName(data:any){
    return this.http.post(`${this.url}/api/search-markups`, data);
  }

  searchGroupByName(data){
    return this.http.post(`${this.url}/api/search-sales` , data);
  }

  onStatusToggle(data:any){
    return this.http.post(`${this.url}/api/toggle-status`, data);
  }
  
  addAirlineRoutes(data:any){
    return this.http.post(`${this.url}/api/create-new-routes`, data);
  }

  deleteAirlineRoutes(data:any){
    return this.http.post(`${this.url}/api/remove-routes`, data);
  }

  getUpdateAirlineRoutes(obj: any){
    return this.http.post(`${this.url}/api/update-routes`, obj);
  }

  fetchAllPointofSale(data) {
    return this.http.post(`${this.url}/api/pos/fetch-pos`,data);
  } 
  searchByCurrencyData(data){
    return this.http.post(`${this.url}/api/search-currency`,data);
  }
 
  getAllAirlineRoutes(page:any){
    return this.http.post<AirlineRoutes>(`${this.url}/api/fetch-all-routes`,page)
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

    return throwError(errorMessage);
  }

}