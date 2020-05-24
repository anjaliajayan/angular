import { trigger } from '@angular/animations';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingsService {
  url = environment.serverURL;

  constructor(private http: HttpClient) { }

  fetchBookings(formData: any) {
    return this.http.post(`${this.url}/api/fetch-all-bookings`, formData);
  }

  // GET ALL
  fetchBookingDetailById(id) {
    return this.http.get(`${this.url}/api/fetch_value/${id}`);
  }

  exportBooking(formData: any) {
    return this.http.post(`${this.url}/api/export-bookings`, formData);
  }

  // bookingVoucherPrint(trip_id){
  //   return this.http.get(`${this.url}/api/booking-voucher-print/${trip_id}`, { responseType: 'blob'});
  // }

  bookingVoucherPrint(trip_id) {
    return this.http.get(`${this.url}/api/booking-voucher-print/${trip_id}`);
  }

  bookingPrintPdf(trip_id) {
    return this.http.get(`${this.url}/api/booking-print-invoice/${trip_id}`, { responseType: 'blob' });
  }

  splitPNR(data:any) {
    console.log(`${this.url}/api/flights/split-pnr`);
    return this.http.post(`${this.url}/api/flights/split-pnr`, data);
  }

  ancillariesServiceListRequest(ticket?: any) {
    return this.http.post(`${this.url}/api/ancillaries-service-list`, ticket);
  }
  bookingVoucherSend(formData: any) {
    return this.http.post(`${this.url}/api/booking-voucher-send`, formData);
  }

}
