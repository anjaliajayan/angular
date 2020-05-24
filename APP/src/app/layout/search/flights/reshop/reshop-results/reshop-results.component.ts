import { Component, OnInit, Input } from '@angular/core';
import { FlightSearchService } from 'src/app/shared/services';
import { ToastrService } from 'ngx-toastr';
import * as moment from 'moment';
import { convertToArray } from 'src/app/shared/utils/array.helper';
import { Router } from '@angular/router';
import { prepareBooking } from 'src/app/shared/utils/common';
import { Booking } from 'src/app/shared/utils/booking';

declare const $: any;

@Component({
  selector: 'app-reshop-results',
  templateUrl: './reshop-results.component.html',
  styleUrls: ['./reshop-results.component.scss']
})
export class ReshopResultsComponent implements OnInit {

  @Input() preReshopObj: any;
  repriceConditions: any = [];
  repriceObj: any = {
    Currency: '',
    Penalty: '',
    FareDiff: '',
    Total: '',
    Details: []
  };
  bookingInfo: any;
  booking: Booking;

  // Status for the buttons
  buttonStatusList: any = {
    details: false
  };

  constructor(
    private flightSearchService: FlightSearchService,
    private router: Router,
    private toastr: ToastrService) {
  }

  ngOnInit() {
    this.booking = prepareBooking();
    if (this.booking.getUserBookingInfo() !== null) {
      this.bookingInfo = JSON.parse(this.booking.getUserBookingInfo());
    }
  }

  isThereAnActionInProcess() {
    return this.buttonStatusList.details;
  }

  showLoader(state: string) {
    switch (state) {
      case 'details':
        return this.buttonStatusList.details;
      default:
        return false;
    }
  }

  showClassDropdown(journeyIndex: number, segmentIndex: number) {
    if (!$(`#_active-${journeyIndex}-${segmentIndex}`).hasClass('active'))
      $(`#_active-${journeyIndex}-${segmentIndex}`).addClass('active');
    else {
      $(`#_active-${journeyIndex}-${segmentIndex}`).removeClass('active');
      this.repriceObj = null;
    }
    $(`#ticket-dropdown_${journeyIndex}-${segmentIndex},.separator-tickets`).transition('slide down');
    $(`#flight-segment-dropdown_${journeyIndex}-${segmentIndex},.separator-segment`).transition('hide');
    $(`#_seg-active_${journeyIndex}-${segmentIndex}`).removeClass('active');
    $(`#_seg-active-icon_${journeyIndex}-${segmentIndex}`).removeClass('up');
    $(`#_seg-active-icon_${journeyIndex}-${segmentIndex}`).addClass('down');
  }

  showSegmentDropdown(journeyIndex: number, segmentIndex: number) {
    if (!$(`#_seg-active_${journeyIndex}-${segmentIndex}`).hasClass('active'))
      $(`#_seg-active_${journeyIndex}-${segmentIndex}`).addClass('active');
    else {
      $(`#_seg-active_${journeyIndex}-${segmentIndex}`).removeClass('active');
    }
    $(`#flight-segment-dropdown_${journeyIndex}-${segmentIndex},.separator-segment`).transition('slide down');
    $(`#ticket-dropdown_${journeyIndex}-${segmentIndex},.separator-tickets`).transition('hide');
    $(`#_active-${journeyIndex}-${segmentIndex}`).removeClass('active');
  }

  showStopsDropdown(journeyIndex: number, journeyDetailsIndex: number) {
    /*
    if (!$(`#_seg-active_${journeyIndex}-${segmentIndex}`).hasClass('active'))
      $(`#_seg-active_${journeyIndex}-${segmentIndex}`).addClass('active');
    else {
      $(`#_seg-active_${journeyIndex}-${segmentIndex}`).removeClass('active');
    }
    $(`#flight-segment-dropdown_${journeyIndex}-${segmentIndex},.separator-segment`).transition('slide down');
    $(`#ticket-dropdown_${journeyIndex}-${segmentIndex},.separator-tickets`).transition('hide');
    $(`#_active-${journeyIndex}-${segmentIndex}`).removeClass('active');
    */
  }

  repriceDetails(journeyItem, jouneyIndex: number) {
    this.buttonStatusList.details = true;
    // Before calling the server, verfiy that it is not cached;
    let list = this.repriceConditions.filter(e => e.JourneyID === journeyItem.ID);
    if (list.length === 1) {
      this.repriceObj = list[0].Reprice;
      this.buttonStatusList.details = false;
      this.showClassDropdown(jouneyIndex, 0);
      return;
    }

    let tmpFlightSegmentList = [];
    let tmpFareList = [];
    let tmpOriginDestination = [];
    journeyItem.Journey.map((journeyDetails) => {
      let tmpFlightItem = [];
      journeyDetails.SegmentList.map((segment) => {
        tmpFlightSegmentList.push(segment);
        if (this.preReshopObj.DataLists.FareList.length > 0) {
          let tmpRes = this.preReshopObj.DataLists.FareList.filter(e => e["@ListKey"] === segment.FareComponentRef);
          if (tmpRes && tmpRes.length > 0) {
            tmpFareList.push(tmpRes[0]);
          }
        }
        tmpFlightItem.push({
          OriginDestination: {
            Flight: {
              Departure: {
                AirportCode: segment.Flight.Departure.AirportCode,
                Date: segment.Flight.Departure.Date,
                Time: segment.Flight.Departure.Time
              },
              Arrival: {
                AirportCode: segment.Flight.Arrival.AirportCode,
                Date: segment.Flight.Arrival.Date,
                Time: segment.Flight.Arrival.Time
              },
              MarketingCarrier: {
                AirlineID: segment.Flight.MarketingCarrier.AirlineID,
                FlightNumber: segment.Flight.MarketingCarrier.FlightNumber
              },
              ClassOfService: {
                Code: segment.ClassCode,
                MarketingName: segment.ClassMarketingName
              }
            }
          }
        });
      });
      tmpOriginDestination.push({
        DepartureCode: journeyDetails.Departure,
        ArrivalCode: journeyDetails.Arrival,
        SegmentList: tmpFlightItem
      });
    });

    let ticketDocInfos = JSON.parse(this.bookingInfo.data.Flights[0].TicketDocInfos);
    if (ticketDocInfos.hasOwnProperty("Response")) {
      ticketDocInfos = ticketDocInfos.Response;
    }
    let myCurrency = '';
    let myDecimals = 2;

    let myMetadataList = convertToArray(this.preReshopObj.offers.Metadata.Other.OtherMetadata);
    let currencyToDisplay = myMetadataList.filter(e => e.CurrencyMetadatas.CurrencyMetadata["@MetadataKey"] === 'DisplayCurrency');

    if (currencyToDisplay.length > 0) {
      myDecimals = currencyToDisplay[0].CurrencyMetadatas.CurrencyMetadata.Decimals;
      myCurrency = currencyToDisplay[0].CurrencyMetadatas.CurrencyMetadata.Name;
    }

    let repriceRQ = {
      echoToken: this.preReshopObj.echoToken,
      TripID: this.bookingInfo.data.trip_id,
      Document: this.preReshopObj.Document,
      DataLists: ticketDocInfos.DataLists,
      currency: myCurrency,
      decimals: myDecimals,
      OrderItem: {
        ID: journeyItem.ID,
        Owner: this.preReshopObj.Order.OrderID['@Owner'],
        PNR: this.preReshopObj.Order.OrderID['#text'],
        OriginDestinationFlightItem: tmpOriginDestination
      }
    };
    repriceRQ.DataLists.FlightSegmentList = tmpFlightSegmentList;
    repriceRQ.DataLists.RecognizedTravelerList = this.preReshopObj.DataLists.RecognizedTravelerList;
    repriceRQ.DataLists.FareList = tmpFareList;
    this.flightSearchService.itinReissueFlightRepriceOnly(repriceRQ).subscribe((result: any) => {
      if (result.hasOwnProperty('Error')) {
        this.toastr.error(`${result.Error['#text']}`, `${result.Error['@Code']} - ${result.Error['@ShortText']}`, {
          timeOut: 10000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      } else {
        this.repriceConditions.push({
          JourneyID: journeyItem.ID,
          Reprice: result
        });
        this.repriceObj = result;
        this.showClassDropdown(jouneyIndex, 0);
      }
      this.buttonStatusList.details = false;
    }, (error) => {
      console.log(error);
      this.toastr.error(`Oops`, `Something bad happened at our end`, {
        timeOut: 10000,
        progressBar: false,
        positionClass: 'toast-bottom-right'
      });
      this.buttonStatusList.details = false;
    });
  }

  reissueLoader: boolean = false;
  actionReissue(journeyItem, currency: string, amount: number) {
    this.booking = prepareBooking();
    if (this.booking.getUserBookingInfo() !== null) {
      this.reissueLoader = true;
      let data = JSON.parse(this.booking.getUserBookingInfo());
      let bookingInfoFlight = data.data.Flights[0];
      let ticketDocInfos = JSON.parse(bookingInfoFlight.TicketDocInfos);
      if (ticketDocInfos.hasOwnProperty("Response")) {
        ticketDocInfos = ticketDocInfos.Response;
      }
      let tmpFlightSegmentList = [];
      let tmpFareList = [];
      let tmpOriginDestination = [];
      journeyItem.Journey.map((journeyDetails) => {
        let tmpFlightItem = [];
        journeyDetails.SegmentList.map((segment) => {
          tmpFlightSegmentList.push(segment);
          if (this.preReshopObj.DataLists.FareList.length > 0) {
            let tmpRes = this.preReshopObj.DataLists.FareList.filter(e => e["@ListKey"] === segment.FareComponentRef);
            if (tmpRes && tmpRes.length > 0) {
              tmpFareList.push(tmpRes[0]);
            }
          }
          let tmpFlight = segment.Flight;
          tmpFlightItem.push({
            OriginDestination: {
              Flight: {
                Departure: {
                  AirportCode: tmpFlight.Departure.AirportCode,
                  AirportName: tmpFlight.Departure.AirportName,
                  Date: moment(tmpFlight.Departure.Date).format('YYYY-MM-DD'),
                  Time: tmpFlight.Departure.Time,
                  Terminal: tmpFlight.Departure.hasOwnProperty('Terminal') ? {
                    Name: tmpFlight.Departure.Terminal.hasOwnProperty('Name') ? tmpFlight.Departure.Terminal.Name : ''
                  } : {}
                },
                Arrival: {
                  AirportCode: tmpFlight.Arrival.AirportCode,
                  AirportName: tmpFlight.Arrival.AirportName,
                  Date: moment(tmpFlight.Arrival.Date).format('YYYY-MM-DD'),
                  Time: tmpFlight.Arrival.Time,
                  Terminal: tmpFlight.Arrival.hasOwnProperty('Terminal') ? {
                    Name: tmpFlight.Arrival.Terminal.hasOwnProperty('Name') ? tmpFlight.Arrival.Terminal.Name : ''
                  } : {}
                },
                Equipment: {
                  AircraftCode: tmpFlight.Equipment.AircraftCode,
                  Name: tmpFlight.Equipment.Name
                },
                MarketingCarrier: {
                  AirlineID: tmpFlight.MarketingCarrier.AirlineID,
                  Name: tmpFlight.MarketingCarrier.Name,
                  FlightNumber: tmpFlight.MarketingCarrier.FlightNumber
                },
                OperatingCarrier: {
                  AirlineID: tmpFlight.OperatingCarrier.AirlineID,
                  Name: tmpFlight.OperatingCarrier.Name,
                  FlightNumber: tmpFlight.OperatingCarrier.FlightNumber
                },
                ClassOfService: {
                  Code: segment.ClassCode,
                  MarketingName: {
                    CabinDesignator: segment.ClassCode,
                    Title: segment.ClassMarketingName
                  }
                }
              }
            }
          });
        });
        tmpOriginDestination.push({
          DepartureCode: journeyDetails.Departure,
          ArrivalCode: journeyDetails.Arrival,
          SegmentList: tmpFlightItem
        });
      });
      let orderChangeObj = {
        echoToken: this.preReshopObj.echoToken,
        Document: this.preReshopObj.Document,
        Passengers: data.data.passenger_details,
        BookingReferences: ticketDocInfos.Order.BookingReferences,
        Metadata: ticketDocInfos.Metadata,
        DataLists: this.preReshopObj.DataLists,
        OrderItem: {
          ID: journeyItem.ID,
          Owner: this.preReshopObj.Order.OrderID['@Owner'],
          PNR: this.preReshopObj.Order.OrderID['#text'],
          CancelledOrder: tmpOriginDestination,
          CreatedOrder: journeyItem.Journey,
          Price: {
            Currency: this.repriceObj.Currency,
            TaxNew: this.repriceObj.TaxNew,
            Total: this.repriceObj.Total
          }
        },
        PaymentAmount: amount,
        PaymentCurrency: currency
      };
      orderChangeObj.DataLists.FlightSegmentList = tmpFlightSegmentList;
      orderChangeObj.DataLists.RecognizedTravelerList = this.preReshopObj.DataLists.RecognizedTravelerList;
      orderChangeObj.DataLists.FareList = tmpFareList;
      this.flightSearchService.itinReissueFlightOrderChange(orderChangeObj).subscribe((result: any) => {
        if (!result) {
          this.toastr.error(`Error in matching old & new reference for PAX on this trip`, `ERROR`, {
            timeOut: 10000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
          this.reissueLoader = false;
        } else if (result.hasOwnProperty('Error')) {
          this.toastr.error(`${result.Error['#text']}`, `${result.Error['@Code']} - ${result.Error['@ShortText']}`, {
            timeOut: 10000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
          this.reissueLoader = false;
        } else {
          let segmentListToUpdate = [];
          let passengerListToUpdate = [];
          let ticketListToUpdate = [];
          let ticketListToCreate = [];
          let ticketEmdListToCreate = [];
          let bookingsListToUpdate = [];
          let bookingsFlightListToUpdate = [];

          // Update passengers & Create Ticket & TicketEMD
          let myResult = result;
          if (result.hasOwnProperty("Response")) {
            myResult = result.Response;
          }
          let myPassengerList = convertToArray(myResult.Passengers.Passenger);
          let myTicketList = convertToArray(myResult.TicketDocInfos.TicketDocInfo);
          let myOrderItemList = convertToArray(myResult.Order.OrderItems.OrderItem);
          myPassengerList.map((pax, paxIndex) => {
            let passenger_details_item_db = {
              pax_booking_id: bookingInfoFlight.booking_id,
              bookings_flight_id: bookingInfoFlight.booking_flight_id,
              pax_ref_key: pax["@ObjectKey"],
              pax_type: pax.PTC["#text"],
              pax_dob: (pax.hasOwnProperty('Age') && pax.Age.hasOwnProperty('BirthDate')) ? pax.Age.BirthDate : undefined,
              pax_title: (pax.hasOwnProperty('Name') && pax.Name.hasOwnProperty('Title')) ? pax.Name.Title : undefined,
              pax_first_name: (pax.hasOwnProperty('Name') && pax.Name.hasOwnProperty('Given')) ? pax.Name.Given : undefined,
              pax_last_name: (pax.hasOwnProperty('Name') && pax.Name.hasOwnProperty('Surname')) ? pax.Name.Surname : undefined,
              pax_email: (pax.hasOwnProperty('Contacts') && pax.Contacts.hasOwnProperty('Contact') && pax.Contacts.Contact.hasOwnProperty('EmailContact') && pax.Contacts.Contact.EmailContact.hasOwnProperty('Address')) ? pax.Contacts.Contact.EmailContact.Address : undefined,
              pax_gender: pax.hasOwnProperty('Gender') ? pax.Gender : undefined
            }
            passengerListToUpdate.push(passenger_details_item_db);
            // Ticket & TicketEMD to create for this passenger
            let tmpTicket = myTicketList.filter(e => e.PassengerReference === pax["@ObjectKey"]);
            tmpTicket.map((tmpTicket, ticketIndex) => {
              let ticket = tmpTicket.TicketDocument;
              if (ticket.Type.Code === 'Y') {
                let couponInfoList = convertToArray(ticket.CouponInfo);
                couponInfoList.map((couponInfo, couponInfoIndex) => {
                  let flight_ticket_emd_item_db = {
                    booking_flight_id: bookingInfoFlight.booking_flight_id,
                    emd_number: ticket.TicketDocNbr,
                    reason_for_issuance_subcode: couponInfo.ReasonForIssuance.RFIC.Code,
                    remarks: couponInfo.ReasonForIssuance.RFIC.Definition,
                    amount: couponInfo.FiledFeeInfo.Amount["#text"],
                    code: couponInfo.FiledFeeInfo.Amount["@Code"]
                  };
                  ticketEmdListToCreate.push(flight_ticket_emd_item_db);
                });
              } else {
                let orderItems = myOrderItemList.filter(e => {
                  if (e.Associations.Passengers.hasOwnProperty("PassengerReferences")
                  && e.Associations.Passengers.PassengerReferences) {
                    e.Associations.Passengers.PassengerReferences.includes(pax["@ObjectKey"]);
                  } else {
                    return true;
                  }
                });

                let myBaseFare = 0;
                let myTax = 0;
                let myTotal = 0;
                if (orderItems.length > 0) {
                  myBaseFare = orderItems[0].FlightItem.Price.BaseAmount["#text"];
                  myTax = orderItems[0].FlightItem.Price.Taxes.Total["#text"];
                  myTotal = orderItems[0].FlightItem.Price.Fees.Total["#text"];
                }

                let couponInfoList = convertToArray(ticket.CouponInfo);
                couponInfoList.map((couponInfo, couponInfoIndex) => {
                  let flight_tickets_item_db = {
                    ticket_booking_id: bookingInfoFlight.booking_id,
                    bookings_flight_id: bookingInfoFlight.booking_flight_id,
                    ticket_pax_ref_key: pax["@ObjectKey"],
                    ticket_number: ticket.TicketDocNbr,
                    ticket_status: 'Open',
                    BaseFare: myBaseFare,
                    Tax: myTax,
                    Total: myTotal
                  };
                  ticketListToCreate.push(flight_tickets_item_db);
                });
              }
            });
          });
          // Update old tickets
          let flight_tickets_item_db = {
            ticket_booking_id: bookingInfoFlight.booking_id,
            ticket_status: "Exchange"
          };
          ticketListToUpdate.push(flight_tickets_item_db);
          // bookings & booking_flight
          let price = 0;
          let tmpPrice = myResult.Order.TotalOrderPrice;
          if (tmpPrice.hasOwnProperty("SimpleCurrencyPrice")) {
            price = tmpPrice.SimpleCurrencyPrice["#text"];
          } else if (tmpPrice.hasOwnProperty("DetailCurrencyPrice")
            && tmpPrice.DetailCurrencyPrice.hasOwnProperty("Total")
            && tmpPrice.DetailCurrencyPrice.hasOwnProperty("Taxes")
            && tmpPrice.DetailCurrencyPrice.Taxes.hasOwnProperty("Total")) {
            price = tmpPrice.DetailCurrencyPrice.Total["#text"] + tmpPrice.DetailCurrencyPrice.Taxes.Total["#text"];
          }
          let bookings_item_db = {
            booking_id: bookingInfoFlight.booking_id,
            markup_price: price,
            supplier_price: price
          };
          let bookings_flight_item_db = {
            booking_id: bookingInfoFlight.booking_id,
            markupPrice: price,
            supplierPrice: price
          };
          bookingsListToUpdate.push(bookings_item_db);
          bookingsFlightListToUpdate.push(bookings_flight_item_db);

          let segmentDetails = {
            segment_id: 0,
            trip_id: data.data.trip_id,
            segment_key: '',
            segment_departure_airport_code: '',
            segment_departure_airport_name: '',
            segment_departure_terminal: '',
            segment_departure_date: '',
            segment_departure_time: '',
            segment_arrival_airport_code: '',
            segment_arrival_airport_name: '',
            segment_arrival_terminal: '',
            segment_arrival_date: '',
            segment_arrival_time: '',
            segment_flight_duration: '',
            segment_aircraft_code: '',
            equipment_name: '',
            segment_airline_id: '',
            segment_operating_airline_id: '',
            segment_operating_airline_name: '',
            segment_operating_flight_number: '',
            segment_marketing_airline_id: '',
            segment_marketing_airline_name: '',
            segment_marketing_flight_number: '',
            segment_seatingClassCode: '',
            segment_seatingClass: '',
            segment_flight_number: ''
            //, segment_freequentflair_number: ''
          };
          journeyItem.Journey.map((tmpFlight, flightIndex) => {
            if (flightIndex < data.SegmentDetails.length) {
              tmpFlight.SegmentList.map((tmpFlight2, flightIndex2) => {
                let myFlight = tmpFlight2.Flight;
                segmentDetails.segment_id = data.SegmentDetails[flightIndex].segment_id;
                segmentDetails.segment_key = myFlight['@SegmentKey'];
                segmentDetails.segment_departure_airport_code = myFlight.Departure.AirportCode;
                segmentDetails.segment_departure_airport_name = myFlight.Departure.AirportName;
                segmentDetails.segment_departure_terminal = myFlight.Departure.hasOwnProperty('Terminal') ? myFlight.Departure.Terminal.Name : '';
                segmentDetails.segment_departure_date = myFlight.Departure.Date;
                segmentDetails.segment_departure_time = myFlight.Departure.Time;
                segmentDetails.segment_arrival_airport_code = myFlight.Arrival.AirportCode;
                segmentDetails.segment_arrival_airport_name = myFlight.Arrival.AirportName;
                segmentDetails.segment_arrival_terminal = myFlight.Arrival.hasOwnProperty('Terminal') ? myFlight.Arrival.Terminal.Name : '';
                segmentDetails.segment_arrival_date = myFlight.Arrival.Date;
                segmentDetails.segment_arrival_time = myFlight.Arrival.Time;
                segmentDetails.segment_flight_duration = myFlight.FlightDetail.FlightDuration.Value;
                segmentDetails.segment_aircraft_code = myFlight.Equipment.AircraftCode;
                segmentDetails.equipment_name = myFlight.Equipment.Name;
                segmentDetails.segment_airline_id = myFlight.MarketingCarrier.AirlineID;
                segmentDetails.segment_operating_airline_id = myFlight.OperatingCarrier.AirlineID;
                segmentDetails.segment_operating_airline_name = myFlight.OperatingCarrier.Name;
                segmentDetails.segment_operating_flight_number = myFlight.OperatingCarrier.FlightNumber;
                segmentDetails.segment_marketing_airline_id = myFlight.MarketingCarrier.AirlineID;
                segmentDetails.segment_marketing_airline_name = myFlight.MarketingCarrier.Name;
                segmentDetails.segment_marketing_flight_number = myFlight.MarketingCarrier.FlightNumber;
                segmentDetails.segment_seatingClassCode = tmpFlight.ClassCode;
                segmentDetails.segment_seatingClass = tmpFlight.ClassMarketingName;
                segmentDetails.segment_flight_number = myFlight.MarketingCarrier.FlightNumber;
                segmentListToUpdate.push(segmentDetails);
              });
            }
          });

          // console.log("");
          // console.log("");
          // console.log("=============== Booking Info Flight ========");
          // console.log(bookingInfoFlight);
          // console.log("=============== OrderChange ================");
          // console.log(result);
          // console.log("============================================");
          // console.log("");
          // console.log("=============== segmentListToUpdate ========");
          // console.log(segmentListToUpdate);
          // console.log("============================================");
          // console.log("");
          // console.log("=============== passengerListToUpdate ======");
          // console.log(passengerListToUpdate);
          // console.log("============================================");
          // console.log("");
          // console.log("=============== ticketListToUpdate =========");
          // console.log(ticketListToUpdate);
          // console.log("============================================");
          // console.log("");
          // console.log("=============== ticketListToCreate =========");
          // console.log(ticketListToCreate);
          // console.log("============================================");
          // console.log("");
          // console.log("=============== ticketEmdListToCreate ======");
          // console.log(ticketEmdListToCreate);
          // console.log("============================================");
          // console.log("");
          // console.log("=============== bookingsListToUpdate =======");
          // console.log(bookingsListToUpdate);
          // console.log("============================================");
          // console.log("");
          // console.log("=============== bookingsFlightListToUpdate =");
          // console.log(bookingsFlightListToUpdate);
          // console.log("============================================");
          // console.log("");

          this.flightSearchService.itinReissueFlightOrderChangeDB(
            segmentListToUpdate,
            passengerListToUpdate,
            ticketListToUpdate,
            ticketListToCreate,
            ticketEmdListToCreate,
            bookingsListToUpdate,
            bookingsFlightListToUpdate
          ).subscribe((result: any) => {
            if (result.success === true) {
              this.toastr.success(`Reissue has been successfully done!`, result.title, {
                timeOut: 10000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
              this.router.navigateByUrl(`/bookings/booking-details/${result.tripID}`);
            } else {
              this.toastr.error(result.message, result.title, {
                timeOut: 10000,
                progressBar: false,
                positionClass: 'toast-bottom-right'
              });
            }
            this.reissueLoader = false;
          }, (error) => {
            console.log(error);
            this.toastr.error(`Oops`, `Something bad happened at our end`, {
              timeOut: 10000,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            });
            this.reissueLoader = false;
          });
        }
      }, (error) => {
        console.log(error);
        this.toastr.error(`Oops`, `Something bad happened at our end`, {
          timeOut: 10000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
        this.reissueLoader = false;
      });
    }
  }
}
