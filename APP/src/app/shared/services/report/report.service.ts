import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FlightSearchLog } from '../../models/report/flight-search';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { HotelSearchLog } from '../../models/report/hotel-log';
import { CarsSearchLog } from '../../models/report/car-log';
import { ActivitySearchLog } from '../../models/report/activity-log';
import { TransferSearchLog } from '../../models/report/transfer-log';
import { InsuranceSearchLog } from '../../models/report/insurance-log';
import { AuditTrail } from '../../models/report/audit-trail';
import { Segment } from '../../models/report/segment';
import { organizationH } from '../../models/organization/organizaiton';
import { DynamicReportParam } from '../../models/report/dynamic-report';
import { ListOfSupplers } from '../../models/setup-config/list-of-supplier';
import { PlatformCount } from '../../models/report/flight-platform-count';


@Injectable({
  providedIn: 'root'
})
export class ReportService {
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

  // GET ALL FLIGHTS
  GetAllFlightLogs(data:any): Observable<FlightSearchLog> {
    return this.http.post<FlightSearchLog>(`${this.url}/api/fetch-all-Flight-Search-Log`,data)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // GET ALL HOTELS
  GetAllHotelLogs(data:any): Observable<HotelSearchLog> {
    return this.http.post<HotelSearchLog>(`${this.url}/api/fetch-all-Hotel-Search-Log`,data)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // GET ALL CARS
  GetAllCarLogs(data:any): Observable<CarsSearchLog> {
    return this.http.post<CarsSearchLog>(`${this.url}/api/fetch-all-Car-Search-Log`,data)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // GET ALL ACTIVITY
  GetAllActivityLogs(data:any): Observable<ActivitySearchLog> {
    return this.http.post<ActivitySearchLog>(`${this.url}/api/fetch-all-Activities-Search-Log`,data)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // GET ALL TRANSFER
  GetAllTransferLogs(data:any): Observable<TransferSearchLog> {
    return this.http.post<TransferSearchLog>(`${this.url}/api/fetch-all-Transfer-Search-Log`,data)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // GET ALL INSURANCE
  GetAllInsuranceLogs(data:any): Observable<InsuranceSearchLog> {
    return this.http.post<InsuranceSearchLog>(`${this.url}/api/fetch-all-Insurance-Search-Log`,data)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // GET ALL AUDIT TRAIL
  GetAllAuditTrail(data:any): Observable<AuditTrail> {
    return this.http.post<AuditTrail>(`${this.url}/api/fetch-all-Audit-Trail`,data)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // GET ALL SEGMENTS
  GetAllSegments(tourID?, limit?, pageIndex?): Observable<Segment> {
    return this.http.get<Segment>(`${this.url}/api/fetch-all-segment-details`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  //Fetch all organization
  GetAllOrganization(): Observable<organizationH> {
    return this.http.get<organizationH>(`${this.url}/api/pos/fetch-active-pos`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  //POST
  NewDynamicPivotTable(data): Observable<DynamicReportParam> {
    return this.http.post<DynamicReportParam>(`${this.url}/api/dynamic-report-data`, data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  searchReportBooking(data: any) {
    return this.http.post(`${this.url}/api/search-bookings-by-organisation`, data);
  }

  //search tickets
  searchTicketReport(data: any) {
    return this.http.post(`${this.url}/api/search-tickets-new`, data);
  }

  // GET audit trail search
  GetAllAuditSearchReport(params): Observable<AuditTrail> {
    var queryString = Object.keys(params).map(function (key) {
      return key + '=' + params[key]
    }).join('&');
    return this.http.get<AuditTrail>(`${this.url}/api/get-audit-trails?${queryString}`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }
  //Fetch all agents
  GetAllAgents(): Observable<organizationH> {
    return this.http.get<organizationH>(`${this.url}/api/fetch-all-organization`, {withCredentials: true})
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  //Fetch all products
  GetAllProducts(tourID?, limit?, pageIndex?): Observable<DynamicReportParam> {
    return this.http.get<DynamicReportParam>(`${this.url}/api/get-active-products`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  //Fetch all suppliers
  GetAllSuppliers(tourID?, limit?, pageIndex?): Observable<ListOfSupplers> {
    return this.http.get<ListOfSupplers>(`${this.url}/api/fetch-all-supplier`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  //Fetch all flight search platforms
  GetAllFlightPlatforms(): Observable<PlatformCount> {
    return this.http.get<PlatformCount>(`${this.url}/api/Flight-Search-Log/count`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }
  //Fetch all flight search platforms
  GetAllFlightMonthlyReport(): Observable<FlightSearchLog> {
    return this.http.get<FlightSearchLog>(`${this.url}/api/Flight-Search-Log/monthlwise`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  //fetch all airport details
  GetAllAirportCode(): Observable<DynamicReportParam> {
    return this.http.get<DynamicReportParam>(`${this.url}/api/get-airports-cache`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  getAllBookingDetails(): Observable<DynamicReportParam> {
    return this.http.get<DynamicReportParam>(`${this.url}/api/fetch_value/:id`)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // Get User role Details
  getFlightBookingDetails(id: any) {
    return this.http.get(`${this.url}/api/booking/${id}`);
  }

  GetSearchedSegmentReports(params){
    let headers = new HttpHeaders();
     headers.append('Content-Type','application/json');
    return this.http.post<Segment>(`${this.url}/api/search-segments`, params,{ headers: headers})
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
  }

  GetFilteredFlightSearch(params): Observable<FlightSearchLog> {

    return this.http.post<FlightSearchLog>(`${this.url}/api/fetch-all-Flight-Search-Log`,params)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  exportBooking(data:any) {
    return this.http.post(`${this.url}/api/export-booking-report`,data);
  }

  exportSearchLog(data:any){
    return this.http.post(`${this.url}/api/export-search-log-report`,data);
  }

  exportTicket(data:any){
    return this.http.post(`${this.url}/api/export-tickets-report`,data);
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
