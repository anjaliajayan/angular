import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { organizationH } from '../models/organization/organizaiton';

@Injectable({
  providedIn: 'root'
})
export class FlightSearchService {
  url = environment.serverURL + '/api/flights/';
  url1=environment.serverURL + '/api/pos/';
  url2=environment.serverURL + '/api/';
  searchResults = {};
  constructor(private http: HttpClient) { }

  airportsListing(airport?: any) {
    return this.http.get(`${this.url}fetch-airports`);
  }

  searchFlight(searchData?: any) {
    return this.http.post(`${this.url}air-shopping`, searchData);
  }

  searchFlightStatic(searchData?: any) {

    return this.http.post(`${this.url}air-shoppingStatic`, searchData);
  }

  flightPriceRequest(selectedOfferData?: any) {
    return this.http.post(`${this.url}flight-price`, selectedOfferData);
  }

  fetchFareBaggageDetails(fareReq?: any) {
    return this.http.post(`${this.url}flight-price`, { farePayload: fareReq });
  }

  /*fetchPAXDetails(paxType?: any) {
    return this.http.get(`${this.url}all-pax-types`, {
      params: { paxType }
    });
  }*/

  /*fetchServicesGroups(type?: any) {
    return this.http.get(`${this.url}all-services-groups`, {
      params: { type }
    });
  }*/

  orderCreateRequest(order?: any) {
    return this.http.post(`${this.url}order-create`, order);
  }

  orderRetrieveRequest(_tripId?: any) {
    return this.http.get(`${this.url}order-retrieve/${_tripId}`);
  }

  issueTicketRequest(ticket?: any) {
    return this.http.post(`${this.url}air-doc-issue`, ticket);
  }

  cancelTicketRequest(_tripId: string, _serviceFee: number) {
    return this.http.post(`${this.url}booking-cancel`, {
      tripId: _tripId,
      serviceFee: _serviceFee
    });
  }

  voidTicketRequest(tripId: string) {
    return this.http.get(`${this.url}booking-void/${tripId}`);
  }

  bookingRefundConfirmRequest(tripId: string) {
    return this.http.get(`${this.url}refund_confirm/${tripId}`);
  }

  refundTicketRequest(_tripId: string, amountToRefund: number, _serviceFee: number) {
    return this.http.post(`${this.url}refund`, {
      tripId: _tripId, amount: amountToRefund, serviceFee: _serviceFee
    });
  }

  fareRulesRequest(fare?: any) {
    
    return this.http.post(`${this.url}fare-rules`, fare);
  }

  itinReissueFlight(initReissueData?: any) {
    return this.http.post(`${this.url}itin-reissue`, initReissueData);
  }

  itinReissueFlightRepriceOnly(repriceData?: any) {
    return this.http.post(`${this.url}itin-reissue-reprice`, repriceData);
  }

  itinReissueFlightOrderChange(repriceData?: any) {
    return this.http.post(`${this.url}itin-reissue-order-change`, repriceData);
  }

  fetchAllPos():Observable<organizationH> {
      return this.http.get<organizationH>(`${this.url1}fetch-active-pos`)
  }

  fetchAllChildPos():Observable<organizationH> {
    return this.http.get<organizationH>(`${this.url2}get-orgranisation-child-list`)
  }
  fetchPosById(orgId):Observable<organizationH> {
    return this.http.get<organizationH>(`${this.url2}get-orgranisation-by-id/${orgId}`)
  }

  itinReissueFlightOrderChangeDB(
    segmentListToUpdate?: any,
    passengerListToUpdate?: any,
    ticketListToUpdate?: any,
    ticketListToCreate?: any,
    ticketEmdListToCreate?: any,
    bookingsListToUpdate?: any,
    bookingsFlightListToUpdate?: any
  ) {
    return this.http.post(`${this.url}itin-reissue-order-change-db`, {
      updateSegmentList: segmentListToUpdate,
      updatePassengerList: passengerListToUpdate,
      updateTicketList: ticketListToUpdate,
      createTicketList: ticketListToCreate,
      createTicketEmdList: ticketEmdListToCreate,
      updateBookingsList: bookingsListToUpdate,
      updateBookingsFlightList: bookingsFlightListToUpdate
    });
  }
}
