/**
 * Booking class to be accessed from the whole application.
 * It is initiated after the login and destroyed after logout.
 * 
 * @author Taleb DAHAN
 * @version 1.0
 */
import { Injectable } from '@angular/core';
import {Serialize, SerializeProperty, Serializable} from 'ts-serializer';

@Serialize({})
@Injectable({
  providedIn: 'root'
})
export class Booking extends Serializable {
  @SerializeProperty({map: 'userBookingInfo'})
  private userBookingInfo: any;

  init() { }

  getUserBookingInfo() {
    return this.userBookingInfo;
  }

  setUserBookingInfo(_bookingInfo: any) {
    this.userBookingInfo = _bookingInfo
  }
}