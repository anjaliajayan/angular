import { ToastrService } from 'ngx-toastr';
import { FlightSearchService } from './../../../shared/services/flight-search.service';
import { Component, OnInit, AfterViewInit, AfterViewChecked, AfterContentChecked } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormArray, Validators } from '@angular/forms';
import { BookingsService } from 'src/app/shared/services';
import { convertToArray } from 'src/app/shared/utils/array.helper';
import { ModalService } from '../../_modal';
import { commonGetCabinType } from 'src/app/shared/utils/common';
import * as moment from 'moment';
import { Observable } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit, AfterContentChecked {

  bookingTripId: any;
  bookingTrip_id: any;
  bookingDetailsLoader: boolean = false;
  flightPnrNo: any = {};
  bookUsername: any;
  supplierName: any;
  newTravellerData: any = [];
  newContactDetailData: any = [];
  newItineraryByData: any = [];
  newTransactionData: any = [];
  transactionsData: any = [];
  allBookingDetails: any = [];
  ancillariesList: any = [];
  remarks: any = [];
  editable: boolean = false;
  bagDesc: boolean = false;
  baggageCount = 0;
  showWheelchair: boolean = false;
  priceDetailsData = [];
  emdData: any = [];
  hotelFlightFlag: boolean = false;
  displayVoucher: boolean = false;
  displayInvoice: boolean = false;
  editTraveller: boolean = false;
  editContact: boolean = false;
  refundConfirmation: any = { cancel_supplier_price: '0', refund_service_amount: '0', refund_penalty_amount: '0' };
  identifactionType: string = 'ID';
  showExpiryDate: boolean = false;
  voucher: boolean = false;

  status: boolean = false;

  bookingStatus = '';
  bookingText = '';
  popupSplitPNRLoader: boolean = false;
  onVoidTicket: boolean = false;
  onCancelTicket: boolean = false;
  onReshopTicket: boolean = false;
  onRefundTicket: boolean = false;
  displayVoucherWithoutPrice: boolean = false;

  // Status for the buttons
  buttonStatusList: any = {
    cancel: false,
    issue: false,
    void: false,
    refund: false,
    reIssue: false,
    pnrSplit: false,
    pnrUpdate: false
  };

  agree: boolean = false;
  agreeServiceFee: boolean = false;
  cancelForm = this.fb.group({
    serviceFee: [0, [Validators.required]],
    cbAgree: this.agree,
    cbAgreeServiceFee: this.agreeServiceFee
  });
  bookingDetails: any;
  passPaxInfo = [];
  priceArray = [];
  PriceDetails: any = [];
  priceDetails: any[];

  setAgree() {
    this.agree = !this.agree
  }

  setAgreeServiceFee() {
    this.agreeServiceFee = !this.agreeServiceFee
  }

  isThereAnActionInProcess() {
    return this.buttonStatusList.cancel
      || this.buttonStatusList.issue
      || this.buttonStatusList.void
      || this.buttonStatusList.refund
      || this.buttonStatusList.reIssue
      || this.buttonStatusList.pnrSplit
      || this.buttonStatusList.pnrUpdate;
  }

  showLoader(state: string) {
    switch (state) {
      case 'cancel':
        return this.buttonStatusList.cancel;
      case 'issue':
        return this.buttonStatusList.issue;
      case 'void':
        return this.buttonStatusList.void;
      case 'refund':
        return this.buttonStatusList.refund;
      case 'reIssue':
        return this.buttonStatusList.reIssue
      case 'pnrSplit':
        return this.buttonStatusList.pnrSplit;
      case 'pnrUpdate':
        return this.buttonStatusList.pnrUpdate;
      default:
        return false;
    }
  }

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public bookingService: BookingsService,
    private flightSearchService: FlightSearchService,
    private toastr: ToastrService,
    private modalService: ModalService
  ) {
    this.route.params.subscribe(params => {
      this.bookingTrip_id = params.id;
    });
  }

  paxProfileForm = this.fb.group({
    paxForm: this.fb.array([this.initItems('')]),
    address1: [''],
    address2: [''],
    address3: [''],
    country: [''],
    zip: [''],
    cust_email: ['', [Validators.required, Validators.email]],
    cust_origin_phone_code: [''],
    cust_origin_phone_number: [''],
    cust_dest_phone_code: [''],
    cust_dest_phone_number: [''],
    taxGst: [''],
    taxNumber: [''],
    taxEmail: [''],
    agentReference: [''],
    payAddress: [''],
    payStreetNameNo: [''],
    payPostalCode: [''],
    payCity: [''],
    payStateProvince: ['']
  })

  initItems(type) {
    $('.dropdown').dropdown();
    return this.fb.group({
      paxType: [type],
      salutation: ['Mr.'],
      firstName: [''],
      lastName: [''],
      middleName: [''],
      sex: ['Male'],
      email: [''],
      countryCode: [''],
      phone: [''],
      nationality: [''],
      passportNo: [''],
      issuingCountry: [''],
      country: [''],
      expiryDate: [''],
      address1: [''],
      address2: [''],
      address3: [''],
      zip: [''],
      accountNo: [''],
      identification: [''],
      freqFlyerType: [''],
      freqFlyerVendorCode: [''],
      dob: ['']
    })
  }

  get pax(): any {
    return this.paxProfileForm.get('paxForm') as FormArray;
  }

  convertArray(value) {
    return convertToArray(value);
  }

  bookingDetailForm = this.fb.group({
    trip_id: [''],
    booked_date: [''],
    reference: [''],
    total_sale: [''],
    booking_currency: [''],
    net_amount: [''],
    ticket_deadline: [''],
    bookedByUser: [''],
    trip_status: [''],
    ticket_limit: [''],
    booking_type: ['Online'], //make it dynamic when there is different kind of booking
    ticket_user: [''],
    pnr_no: [''],
    airline_ref_num: [''],
    status: '',
    supplier: '',
    service_charge_cancel: 0,
    service_charge_create: 0,
    service_charge_refund: 0
  });

  // @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;

  ngOnInit() {
    this.fetchBookingDetail();
    $(document).ready(function () {
      $('.ui.dropdown').dropdown();
      $('.menu .item').tab();
      $('.ui.accordion').accordion();
    })

  }
  ngAfterContentChecked() {
    //console.log("DATE DATE",this.bookingDetails.created);
  }
  fetchBookingDetail = () => {
    // console.log("BookingDetails::fetchBookingDetail - Begin");
    this.bookingDetailsLoader = true;
    this.bookingService.fetchBookingDetailById(this.bookingTrip_id)
      .subscribe((res: any) => {
        this.allBookingDetails = res;
        this.bookingDetails = res.data;
        this.bookingDetailForm.patchValue({
          supplier: this.bookingDetails.supplier
        })
        if (this.bookingDetails.supplier == '1A') {
          this.bookingDetailForm.patchValue({
            supplier: 'Amadeus'
          })
        }
        if (this.bookingDetails.supplier == '1G') {
          this.bookingDetailForm.patchValue({
            supplier: 'Galileo(Travelport)'
          })
        }
        if (this.bookingDetails.supplier == '1S') {
          this.bookingDetailForm.patchValue({
            supplier: 'Saber'
          })
        }

        //if the supplier is direct then the PNR will be same
        //checking for the supplier who have both the PNR same
        this.bookingDetailForm.patchValue({
          airline_ref_num: this.bookingDetails.Flights[0].pnr_no
        })
        if (this.bookingDetails.supplier == "1A") {
          this.bookingDetailForm.patchValue({
            airline_ref_num: ''
          })
        }
        if (this.bookingDetails.supplier == "1S") {
          this.bookingDetailForm.patchValue({
            airline_ref_num: ''
          })
        }
        if (this.bookingDetails.supplier == "1G") {
          this.bookingDetailForm.patchValue({
            airline_ref_num: ''
          })
        }



        //checkig the status of the bookings
        if (res.data.booking_status === 'confirm' || res.data.booking_status === 'void') {
          this.status = true;
        }
        // console.log("this.bookingDetails.Flights.TicketContact",this.bookingDetails.Flights.TicketContact)
        let TicketContact = JSON.parse(this.bookingDetails.Flights[0].TicketContact);
        if (TicketContact.hasOwnProperty("Response")) {
          TicketContact = TicketContact.Response;
        }
        //extracting the orderItem from ticketDocInfos and if it is not an array then converting it into an array
        //this is useful for displaying the pricing details when the ticket status is on hold

        const orderItemArray = convertToArray(TicketContact.Order.OrderItems.OrderItem);

        let TicketDocInfos = JSON.parse(this.bookingDetails.Flights[0].TicketDocInfos);
        if (TicketDocInfos.hasOwnProperty("Response")) {
          TicketDocInfos = TicketDocInfos.Response;
        }
        const passengerArray = convertToArray(TicketDocInfos.Passengers);

        //extracting paxId and paxtype from passengerArray and storing it in an array of object => this.passPaxInfo
        const passengersArray = convertToArray(passengerArray[0].Passenger);
        passengersArray.forEach(passInfo => {

          const paxId = passInfo['@ObjectKey'];
          const paxType = passInfo.PTC['#text'];

          const Paxobj = {
            paxId: paxId,
            paxType: paxType
          }
          this.passPaxInfo.push(Paxobj);
        })

        orderItemArray.forEach(priceInfo => {
          const paxId = priceInfo.Associations.Passengers.PassengerReferences.split(" ")
          const baseFare = priceInfo.FlightItem.Price.BaseAmount['#text'];
          const tax = priceInfo.FlightItem.Price.Taxes.Total['#text'];
          if (paxId.length > 1) {
            paxId.map(id => {
              const priceData = {
                paxId: id,
                baseFare: baseFare,
                tax: tax
              }
              this.priceArray.push(priceData)
            })
          }
          if (paxId.length == 1) {
            const priceData = {
              paxId: paxId[0],
              baseFare: baseFare,
              tax: tax
            }
            this.priceArray.push(priceData)
          }
          //  console.log(paxId);
        })
        console.log("this.priceArray", this.priceArray)

        //merging the two array of objects =>( this.passPaxInfo and this.priceArray) based on paxId

        for (let i = 0; i < this.priceArray.length; i++) {
          if (this.priceArray[i].paxId == this.passPaxInfo[i].paxId) {
            const total = +this.priceArray[i].baseFare + +this.priceArray[i].tax
            const obj = {
              paxType: this.passPaxInfo[i].paxType,
              baseFare: this.priceArray[i].baseFare,
              tax: this.priceArray[i].tax,
              total: total
            }
            this.PriceDetails.push(obj)
          }
        }
        this.priceDetails = convertToArray(this.PriceDetails);
        let myPassengerDetails = res.data.passenger_details || [];
        this.newTravellerData = res.data.passenger_details || [];
        this.transactionsData = res.data.passenger_details || [];
        let myPNR = '';
        let phoneNo = '';
        let destPhoneNo = '';
        if (myPassengerDetails && myPassengerDetails.length > 0) {
          myPNR = res.data.passenger_details[0].pnr_no;
          if (res.data.passenger_details[0].pax_mobile) {
            let tmpNumbers = res.data.passenger_details[0].pax_mobile.split(',');
            if (tmpNumbers.length === 2) {
              phoneNo = tmpNumbers[0];
              destPhoneNo = tmpNumbers[1];
            } else {
              phoneNo = res.data.passenger_details[0].pax_mobile;
            }
          }
        }
        let travellerNo = 0;
        if (this.newTravellerData && this.newTravellerData.length > 0) {
          travellerNo = this.newTravellerData.length;
        }
        let PNR_NO1 = res.data.Flights[0].pnr_no.split('-')[1]
        if (res.data.booking_status == 'confirm' || res.data.booking_status == 'hold') {
          this.hotelFlightFlag = true;
        } else {
          this.hotelFlightFlag = false;
        }

        this.bookingDetailForm.patchValue({
          trip_id: res.data.trip_id,
          booked_date: res.data.created,
          reference: res.data.agent_reference,
          total_sale: res.data.markup_price,
          booking_currency: res.data.booking_currency,
          net_amount: res.data.supplier_price,
          pnr_no: PNR_NO1,
          trip_status: res.data.booking_status,
          ticket_user: res.userDetails.username,
          service_charge_cancel: res.data.service_charge_cancel,
          service_charge_create: res.data.service_charge_create,
          service_charge_refund: res.data.service_charge_refund
        });
        this.bookUsername = '';
        if (res.userDetails && res.userDetails.username) {
          this.bookUsername = res.userDetails.username;
        }
        // this.supplierName=res.SupplierDetails.name;

        console.log("This is data", res.data.Flights);
        console.log("This is bookingDetailForm", res.bookingDetailForm.controls);
        this.newTravellerData.map((el, key) => {
          if (res.data.Flights.pnr_no) {
            let tmpPNR = res.data.Flights.pnr_no.split("-");
            if (tmpPNR.length === 2) {
              el.pnr_no = tmpPNR[1];
            }
          }
        });

        this.remarks = res.data.remarks;

        if (res.data.flight_ticket && (res.data.flight_ticket.length > 0)) {
          this.transactionsData.map((element, key) => {
            if (element.pax_mobile === null) {
              element.pax_mobile = "";
            }
            if (element.pax_frequentFlyer === null) {
              element.pax_frequentFlyer = "";
            }
            if (element.pax_frequentFlyerNumber === null) {
              element.pax_frequentFlyerNumber = "";
            }

            if (res.data.Flights.pnr_no) {
              let tmpPNR = res.data.Flights.pnr_no.split("-");
              if (tmpPNR.length === 2) {
                element.pnr_no = tmpPNR[1];
              }
            }
            element.ticket_number = res.data.flight_ticket[key].ticket_number;
            element.ticket_status = res.data.flight_ticket[key].ticket_status;
            element.price = res.data.flight_ticket[key].Total;
          })
          console.log("this.newTravellerData", this.newTravellerData)
        }
        else {
          this.transactionsData[0].ticket_status = this.allBookingDetails.data.booking_status;
          this.transactionsData[0].ticket_number = "No Ticket is Available"
        }
        let bookingEmail = res.data.booking_email;
        this.newContactDetailData = res.data.Flights;
        console.log(this.transactionsData, "#################------------")

        if (this.newContactDetailData && this.newContactDetailData.length) {
          this.newContactDetailData.map((element, key) => {
            element.phone_contacts = phoneNo;
            element.dest_phone_contacts = destPhoneNo;
            element.booking_email = bookingEmail;
            element.traveler_no = travellerNo;
            element.traveller_name = '';
            if (res.data.passenger_details && res.data.passenger_details[key]) {
              element.traveller_name = res.data.passenger_details[key].pax_first_name + " " + res.data.passenger_details[key].pax_middle_name + " " + res.data.passenger_details[key].pax_last_name;
            }
          });
        }
        // let img_url = "https://s3-us-west-2.amazonaws.com/tpconnects-property/airline/";
        let ticketDocInfos = JSON.parse(this.allBookingDetails.data.Flights[0].TicketDocInfos);
        if (ticketDocInfos.hasOwnProperty("Response")) {
          ticketDocInfos = ticketDocInfos.Response;
        }
        this.newItineraryByData = convertToArray(ticketDocInfos.DataLists.FlightSegmentList.FlightSegment);//res.SegmentDetails;
        if (this.newItineraryByData && this.newItineraryByData.length) {
          this.newItineraryByData.map((element) => {
            element.logo = '';
            element.className = '';
            element.classCode = '';
            if (element.MarketingCarrier.AirlineID) {
              if (element.MarketingCarrier.AirlineID.hasOwnProperty("#text")) {
                element.logo = element.MarketingCarrier.AirlineID["#text"];
              } else if (element.MarketingCarrier.AirlineID.hasOwnProperty("@")) {
                element.logo = element.MarketingCarrier.AirlineID["@"];
              } else {
                element.logo = element.MarketingCarrier.AirlineID;
              }
            }
            if (element.logo == '') {
              if (element.OperatingCarrier.AirlineID) {
                if (element.OperatingCarrier.AirlineID.hasOwnProperty("#text")) {
                  element.logo = element.OperatingCarrier.AirlineID["#text"];
                } else if (element.OperatingCarrier.AirlineID.hasOwnProperty("@")) {
                  element.logo = element.OperatingCarrier.AirlineID["@"];
                } else {
                  element.logo = element.OperatingCarrier.AirlineID;
                }
              }
            }
            if (element.ClassOfService.MarketingName.hasOwnProperty('#text')) {
              element.className = element.ClassOfService.MarketingName["#text"];
            } else {
              element.className = element.ClassOfService.MarketingName;
            }
            if (element.ClassOfService.Code.hasOwnProperty('#text')) {
              element.classCode = element.ClassOfService.Code["#text"];
            } else {
              element.classCode = element.ClassOfService.Code;
            }
            if ((element.className === '' || element.className === 'undefined') && element.classCode != '') {
              element.className = commonGetCabinType(element.classCode);
            }
          })
        }

        //This is for the fare details (do reference with the tag)
        let myPriceDetailsData: any = convertToArray(ticketDocInfos);
        if (Array.isArray(myPriceDetailsData) && myPriceDetailsData.length > 0) {
          if (myPriceDetailsData[0].Order && myPriceDetailsData[0].Order.OrderItems && myPriceDetailsData[0].Order.OrderItems.OrderItem) {
            this.priceDetailsData = convertToArray(myPriceDetailsData[0].Order.OrderItems.OrderItem);
          }
        }

        // this.priceDetailsData.map(element => {
        //   if (element.DetailCurrencyPrice) {
        //     element.base_fare = element.DetailCurrencyPrice.Total['#text'];
        //     element.tax = element.DetailCurrencyPrice.Taxes.Total['#text']
        //   }
        // })


        this.priceDetailsData = res.data.flight_ticket;
        console.log("*********************THIS IS THE priceDetailsData", this.priceDetailsData)

        //voidable ticket date check
        const today = new Date();
        console.log("this is the current date", today)


        console.log("New Itinerary By Data", this.newItineraryByData);

        console.log("DATE DATE", this.bookingDetails.created);

        // Month Day, Year Hour:Minute:Second, id-of-element-container
        console.log("DATE DATE", this.bookingDetails.created);
        countUpFromTime(this.bookingDetails.created, 'countup1'); // ****** Change this line!
        function countUpFromTime(countFromDate, id) {
          countFromDate = new Date(countFromDate).getTime();
          var now: any = new Date();
          let countFrom: any = new Date(countFromDate),
            timeDifference = (now - countFrom);

          var secondsInADay = 60 * 60 * 1000 * 24,
            secondsInAHour = 60 * 60 * 1000;

          let days = Math.floor(timeDifference / (secondsInADay) * 1);
          let hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
          let mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
          let secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

          var idEl: any = document.getElementById(id);
          idEl.getElementsByClassName('days')[0].innerHTML = days;
          idEl.getElementsByClassName('hours')[0].innerHTML = hours;
          idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
          idEl.getElementsByClassName('seconds')[0].innerHTML = secs;

          clearTimeout();
          setTimeout(() => { countUpFromTime(countFromDate, id); }, 1000);
        }

        this.bookingDetailsLoader = false;
      }, err => {
        console.log("BookingDetails::fetchBookingDetailById - Error");
        console.log(err);
        this.toastr.error(`Something went wrong at our end. Err: ${err.error.msg}`, `Oops!`, {
          timeOut: 10000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      })
  }

  getTicketColorBoxBasedOnBookingStatus(code: string) {
    switch (code) {
      case 'cancel':
        return "C";
      case 'hold':
        return "H";
      case 'void':
        return "V";
      case 'refund':
        return "R";
      case 'confirm':
        return "O";
      case 'exchanged':
        return "Ex";
      default:
        return "";
    }
  }

  paxTypeCountList: {
    ADT: 0,
    CHD: 0,
    INF: 0
  };
  showBookingSplitPNR(modalId: string) {
    this.buttonStatusList.splitPNR = false;

    // Build a structure for the available pax types
    // this.newTravellerData.map((pax, paxIndex) => {
    //   this.paxTypeCountList[pax.pax_type]++;
    // });
    // console.log(this.paxTypeCountList);
    this.modalService.open(modalId);
    this.buttonStatusList.splitPNR = true;
  }

  bookPNRTableOnActivate(event: {
    type: string, event: MouseEvent, row: {
      pax_id: number,
      pax_booking_id: number,
      pax_ref_key: string,
      pax_title: string,
      pax_first_name: string,
      pax_middle_name: string,
      pax_last_name: string,
      pax_dob: string,
      pax_gender: string,
      pax_resi_country: string,
      pax_mobile: string,
      pax_email: string,
      pax_ID_type: string,
      pax_passport_number: string,
      pax_passport_experiration: string,
      pax_passport_country: string,
      pax_type: string,
      pax_frequentFlyer: string,
      pax_frequentFlyerNumber: string,
      bookings_flight_id: number,
      ticket_number: string,
      ticket_status: string,
      price: string
    }, rowElement: HTMLElement
  }) {
    // Nothing to do ...
  }

  bookPNRTableOnSelect(event: { selected: [] }) {
    this.selectedPaxForSplitPNR = event.selected;
  }

  index: boolean;

  bookPNRTableCheckboxOnSelect($event, row) {
    if ($event.source.checked) {
      this.index = this.newTravellerData.indexOf(row);
    }
  }

  selectedPaxForSplitPNR = [];
  bookingSplitPNR = () => {
    if (this.selectedPaxForSplitPNR.length > 0) {
      this.popupSplitPNRLoader = true;
      // Fill needed data
      let ticketDocInfos = JSON.parse(this.allBookingDetails.data.Flights[0].TicketDocInfos);
      if (ticketDocInfos.hasOwnProperty("Response")) {
        ticketDocInfos = ticketDocInfos.Response;
      }
      let myOwner = '';
      let myPNR = '';
      let myCurrency = '';
      let myDecimals = 2;

      let pnrArray = this.allBookingDetails.data.Flights[0].pnr_no.split('-');
      if (pnrArray.length === 2) {
        myOwner = pnrArray[0];
        myPNR = pnrArray[1];
      }
      let myMetadataList = convertToArray(ticketDocInfos.Metadata.Other.OtherMetadata);
      let currencyToDisplay = myMetadataList.filter(e => e.CurrencyMetadatas.CurrencyMetadata["@MetadataKey"] === 'DisplayCurrency');

      if (currencyToDisplay.length === 1) {
        myDecimals = currencyToDisplay[0].CurrencyMetadatas.CurrencyMetadata.Decimals;
        myCurrency = currencyToDisplay[0].CurrencyMetadatas.CurrencyMetadata.Name;
      }
      console.log(ticketDocInfos);
      let dataToBuildXML = {
        echoToken: this.allBookingDetails.data.echoToken,
        owner: myOwner,
        pnr_no: myPNR,
        selected: this.selectedPaxForSplitPNR,
        trip_id: ticketDocInfos.Order.BookingReferences.BookingReference.OtherID["#text"],
        currency: myCurrency,
        decimals: myDecimals,
        passengers: ticketDocInfos.Passengers
      };
      this.bookingService.splitPNR(dataToBuildXML).subscribe((response: any) => {
      });
    }
  }

  showAncillariesDropdown() {
    console.log("THIS IS AIR DOC")
    console.log(this.allBookingDetails)
    // Fill needed data
    let ticketDocInfos = JSON.parse(this.allBookingDetails.data.Flights[0].TicketDocInfos);

    let myPNRList = this.allBookingDetails.data.Flights[0].pnr_no.split('-');
    let myPNR = '';
    if (myPNRList.length === 2) {
      myPNR = myPNRList[1];
    }

    let tmpPrevBookingList = [];

    let myOriginAndDestinationList = convertToArray(ticketDocInfos.DataLists.OriginDestinationList.OriginDestination);
    let myFlightList = convertToArray(ticketDocInfos.DataLists.FlightList.Flight);
    if (myOriginAndDestinationList.length > 0) {
      myOriginAndDestinationList.map((ond: any, ondIndex) => {
        ond.FlightReferences;
        let myFlight = myFlightList.filter(e => e["@FlightKey"] === ond.FlightReferences)[0];
        let mySegmentKeyList = myFlight.SegmentReferences.split(" ");
        let mySegmentDetailsList = [];
        mySegmentKeyList.map((key: string) => {
          let segmentDetails = this.allBookingDetails.SegmentDetails.filter((e: { segment_key: string; }) => e.segment_key === key)[0];
          if (segmentDetails.segment_marketing_airline_id != null) {
            segmentDetails.logo = segmentDetails.segment_marketing_airline_id;
          } else {
            segmentDetails.logo = segmentDetails.segment_operating_airline_id;
          }
          mySegmentDetailsList.push(segmentDetails);
        });
        tmpPrevBookingList.push({
          DepartureCode: ond.DepartureCode,
          ArrivalCode: ond.ArrivalCode,
          SegmentList: mySegmentDetailsList,
          checked: false,
          TmpID: ondIndex
        });
      });
    }

    let dataToBuildXML = {
      echoToken: this.allBookingDetails.data.echoToken,
      OrderID: {
        PNR: myPNR,
        Owner: ticketDocInfos.Order.OrderID["@Owner"]
      },
      Passengers: this.allBookingDetails.data.passenger_details,
      BookingReferences: ticketDocInfos.Order.BookingReferences,
      PrevBookingList: tmpPrevBookingList,
      Metadata: ticketDocInfos.Metadata
    };
    this.bookingService.ancillariesServiceListRequest(dataToBuildXML).subscribe((response: any) => {
      if (response === "") {
        this.toastr.error(`Empty response received from calling ancillaries service list`, `Oops!`, {
          timeOut: 10000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
        return;
      }
      if (response.hasOwnProperty("Errors") && response.Errors.hasOwnProperty("Error")) {
        let error = response.Errors.Error;
        this.toastr.error(error["#text"], `Oops!`, {
          timeOut: 10000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
        return;
      }
      if (!response.hasOwnProperty("DataLists")
        || !response.DataLists.hasOwnProperty("DisclosureList")
        || !response.DataLists.DisclosureList.hasOwnProperty("Disclosures")) {
        this.toastr.error(`Wrong response received from calling ancillaries service list`, `Oops!`, {
          timeOut: 10000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
        return;
      }
      this.ancillariesList = [];
      let myDisclosureList = convertToArray(response.DataLists.DisclosureList.Disclosures);
      let myServiceList = convertToArray(response.Services.Service);
      let paxList = this.allBookingDetails.data.passenger_details;
      paxList.map((pax: any, paxIndex: number) => {
        let servicesPerPax = myServiceList.filter(e => e.Associations.Traveler.TravelerReferences.includes(pax.pax_ref_key));
        let tmpAncillariesList = [];
        myDisclosureList.map((disclosure, disclosureIndex) => {
          if (disclosure["@ListKey"] !== "Meal_Terms_and_Conditions") {
            let tmpServices = servicesPerPax.filter(e => e["@ObjectKey"].toLowerCase().includes(disclosure["@ListKey"].toLowerCase()));
            tmpAncillariesList.push({
              Key: disclosure["@ListKey"],
              Description: {
                Text: disclosure.Description.Text,
                MediaLink: disclosure.Description.Media.MediaLink
              },
              ServiceList: tmpServices
            });
          }
        });
        this.ancillariesList.push({
          Passenger: pax,
          Services: tmpAncillariesList
        });
      });
      console.log(this.ancillariesList);
      if (this.ancillariesList.length > 0) {
        $('#context1 .menu .item').tab({ context: 'parent' });
        $(document).ready(function () {
          $('.ui.modal').modal('show');
        });
      }
    });
  }

  issueTicket = () => {
    let ticketDoc = this.allBookingDetails.data.Flights[0].TicketDocInfos;
    ticketDoc = ticketDoc.replace(/^"(.*)"$/, '$1');
    ticketDoc = JSON.parse(ticketDoc);
    ticketDoc.bookingFor = JSON.parse(localStorage.getItem("MYJSON")).bookingFor;
    ticketDoc.echoToken = this.allBookingDetails.data.echoToken;
    ticketDoc.tripId = this.allBookingDetails.data.trip_id
    ticketDoc.bookingId = this.allBookingDetails.data.booking_id;
    ticketDoc.paxRefkey = this.allBookingDetails.data.passenger_details[0].pax_ref_key;
    ticketDoc.bookingsFlightId = this.allBookingDetails.data.Flights[0].booking_flight_id;
    this.buttonStatusList.issue = true;
    this.flightSearchService.issueTicketRequest(ticketDoc)
      .subscribe((order: any) => {
        if (order.result && order.result.hasOwnProperty("Errors") && order.result.Errors.hasOwnProperty("Error")) {
          let error = order.result.Errors.Error;
          this.toastr.error(error["#text"], `Oops!`, {
            timeOut: 10000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
          this.buttonStatusList.issue = false;
        } else {
          this.toastr.info(`You ticket has been issued.`, `Congrats!`, {
            timeOut: 10000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
          this.buttonStatusList.issue = false;
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.navigateByUrl(`/bookings/booking-details/${this.allBookingDetails.data.trip_id}`);
        }
      }, (err: any) => {
        this.toastr.error(`Something went wrong at our end. Err: ${err.error.msg}`, `Oops!`, {
          timeOut: 10000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
        this.buttonStatusList.issue = false;
      });
  }

  numberOnly(event: KeyboardEvent): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  cancelTicket = () => {
    // let ticket: any = {};
    // ticket.echoToken = this.allBookingDetails.data.echoToken;
    // ticket.tripId = this.allBookingDetails.data.trip_id;
    // ticket.ownerId = this.allBookingDetails.data.supplier;
    // ticket.ownerPNR = this.allBookingDetails.data.Flights[0].pnr_no.split('-')[1];
    this.buttonStatusList.cancel = true;
    let myServiceFee = 0;
    if (this.cancelForm.controls.serviceFee && this.cancelForm.controls.serviceFee.value) {
      myServiceFee = this.cancelForm.controls.serviceFee.value;
    }
    this.flightSearchService.cancelTicketRequest(this.allBookingDetails.data.trip_id, myServiceFee)
      .subscribe((order: any) => {
        if (order.hasOwnProperty("type") && order.type === "error") {
          this.toastr.error(`Your booking cancellation is unsuccessful, kindly perform cancellation from the supplier.`, `Oops!`, {
            timeOut: 10000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
          this.buttonStatusList.cancel = false;
        } else {
          this.toastr.info(`Your booking has been cancelled successfully!`, `Congrats!`, {
            timeOut: 10000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
          this.buttonStatusList.cancel = false;
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.navigateByUrl(`/bookings/booking-details/${this.allBookingDetails.data.trip_id}`);
        }
      }, (err: any) => {
        // ${err.error.msg}
        this.toastr.error(`Your booking cancellation is unsuccessful, kindly perform cancellation from the supplier.`, `Oops!`, {
          timeOut: 10000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
        this.buttonStatusList.cancel = false;
      });
  }

  toggleSelection(cardID: string) {
    $('.card').removeClass('selected');
    $("div[id='" + cardID + "']").addClass('selected');
  }

  voidTicket = () => {
    // let ticket: any = {};
    // ticket.echoToken = this.allBookingDetails.data.echoToken;
    // ticket.tripId = this.allBookingDetails.data.trip_id;
    // ticket.ticketNumber = this.allBookingDetails.data.flight_ticket[0].ticket_number;
    // ticket.ownerPNR = this.allBookingDetails.data.Flights[0].pnr_no.split('-')[1];
    // console.log(ticket);
    this.buttonStatusList.void = true;
    this.flightSearchService.voidTicketRequest(this.allBookingDetails.data.trip_id)
      .subscribe((order: any) => {
        if (order.hasOwnProperty("type") && order.type === "error") {
          this.toastr.error(`Your booking failed to be voided!. Kindly perform the void from the supplier.`, `Oops!`, {
            timeOut: 10000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
          this.buttonStatusList.void = false;
        } else {
          this.toastr.info(`Your booking has been voided successfully!`, `Congrats!`, {
            timeOut: 10000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
          this.buttonStatusList.void = false;
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.navigateByUrl(`/bookings/booking-details/${this.allBookingDetails.data.trip_id}`);
        }
      }, (err: any) => {
        // ${err.error.msg}
        this.toastr.error(`Your booking failed to be voided!. Kindly perform the void from the supplier.`, `Oops!`, {
          timeOut: 10000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
        this.buttonStatusList.void = false;
      });
  }

  refundTicket = () => {
    // let ticket: any = {};
    // ticket.echoToken = this.allBookingDetails.data.echoToken;
    // ticket.tripId = this.allBookingDetails.data.trip_id;
    // ticket.ownerId = this.allBookingDetails.data.supplier;
    // ticket.ownerPNR = this.allBookingDetails.data.Flights[0].pnr_no.split('-')[1];
    // this.refundTicketLoader = true;
    // console.log(ticket);
    this.buttonStatusList.refund = true;
    let myServiceFee = 0;
    if (this.cancelForm.controls.serviceFee && this.cancelForm.controls.serviceFee.value) {
      myServiceFee = this.cancelForm.controls.serviceFee.value;
    }
    this.flightSearchService.refundTicketRequest(this.allBookingDetails.data.trip_id, this.amountToRefund, myServiceFee)
      .subscribe((order: any) => {
        if (order.hasOwnProperty("Error")) {
          console.log(`ERROR Code ${order.Error["@Code"]}: ${order.Error["#text"]}`);
          this.toastr.error(`Your booking failed to be refunded! Kindly perform the refund from the supplier.`, `Oops!`, {
            timeOut: 10000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
          this.buttonStatusList.refund = false;
        } else {
          this.toastr.info(`Your booking has been refunded successfully!`, `Congrats!`, {
            timeOut: 10000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
          this.buttonStatusList.refund = false;
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.navigateByUrl(`/bookings/booking-details/${this.allBookingDetails.data.trip_id}`);
        }
      }, (err: any) => {
        // ${err.error.msg}
        this.toastr.error(`Your booking failed to be refunded! Kindly perform the refund from the supplier.`, `Oops!`, {
          timeOut: 10000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
        this.buttonStatusList.refund = false;
      });
  }

  reshopTicket = () => {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigate(['/search/flights/reshop'], { state: { data: this.allBookingDetails } });
  }

  bookingVoucher(trip_id: any) {
    this.bookingService.bookingVoucherPrint(trip_id).subscribe((result: any) => {
      let pdfRes: any = result;
      var newBlob = new Blob([pdfRes], { type: "application/pdf" });

      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
      }
      const data = window.URL.createObjectURL(newBlob);
      var link = document.createElement('a');
      link.href = data;
      link.download = "invoice.pdf";

      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

      setTimeout(function () {
        // For Firefox it is necessary to delay revoking the ObjectURL
        window.URL.revokeObjectURL(data);
      }, 100);

    })
  }
  // Print a pdf file for booking
  bookingPrint(trip_id: any) {
    this.bookingService.bookingPrintPdf(trip_id).subscribe((result: any) => {
      let pdfRes: any = result;
      var newBlob = new Blob([pdfRes], { type: "application/pdf" });

      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob);
        return;
      }
      const data = window.URL.createObjectURL(newBlob);
      var link = document.createElement('a');
      link.href = data;
      link.download = "invoice_print.pdf";

      link.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));

      setTimeout(function () {
        // For Firefox it is necessary to delay revoking the ObjectURL
        window.URL.revokeObjectURL(data);
      }, 100);

    })
  }

  showMealModal(modalId: any) {
    this.modalService.open(modalId);
  }

  showBaggageModal(modalId: any) {
    this.modalService.open(modalId);
  }

  showDisabilityModal(modalId: any) {
    this.modalService.open(modalId);
  }

  editBookingDetails() {
    this.editable = !this.editable;
  }

  retrieveBookingDetails() {
    this.buttonStatusList.pnrUpdate = true;
    this.flightSearchService.orderRetrieveRequest(this.allBookingDetails.data.trip_id).subscribe((response: any) => {
      if (response && response.result && response.result.hasOwnProperty("Errors") && response.result.Errors.hasOwnProperty("Error")) {
        let error = response.result.Errors.Error;
        this.toastr.error(error["#text"], `Oops!`, {
          timeOut: 10000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      } else {
        this.toastr.info(`Your order hasbeen retrieved.`, `Congrats!`, {
          timeOut: 10000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      }
      this.buttonStatusList.pnrUpdate = false;
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
      this.router.navigateByUrl(`/bookings/booking-details/${this.allBookingDetails.data.trip_id}`);
    }, (err: any) => {
      this.toastr.error(`Something went wrong at our end. Err: ${err.error ? err.error.msg : ''}`, `Oops!`, {
        timeOut: 10000,
        progressBar: false,
        positionClass: 'toast-bottom-right'
      });
      this.buttonStatusList.pnrUpdate = false;
    });
  }

  saveBookingDetails() {
    this.editable = !this.editable;
  }

  sendVoucherMail(modalId: any) {
    this.modalService.open(modalId);
  }

  viewHistoryModal(modalId: any) {
    this.modalService.open(modalId);
  }

  showFareDetails(modalId: any) {
    this.modalService.open(modalId);
  }

  showBookingCancelDetails(modalId: any) {
    this.modalService.open(modalId);
  }

  renderVoidButton() {
    let strDateNow = moment(new Date()).format("YYYY-MM-DD");
    let strDateBook = moment(this.allBookingDetails.data.Flights[0].created).format("YYYY-MM-DD");
    if (strDateNow === strDateBook) {
      return true;
    } else {
      return false;
    }
  }

  renderSplitPNRButton() {
    let infCount = this.allBookingDetails.data.passenger_details.filter(pax => pax.pax_type === 'INF').length;
    let supplier = this.allBookingDetails.data.supplier;
    if ((supplier === '1A' || supplier === '1S' || supplier === '1G') && infCount) {
      return false;
    } else {
      return true;
    }
  }

  showBookingRefundDetails(modalId: string) {
    this.buttonStatusList.refund = true;
    this.flightSearchService.bookingRefundConfirmRequest(this.allBookingDetails.data.trip_id)
      .subscribe((order: any) => {
        if (order.hasOwnProperty("Error")) {
          this.toastr.error(`ERROR Code ${order.Error["@Code"]}: ${order.Error["#text"]}`, `Oops!`, {
            timeOut: 10000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
          this.buttonStatusList.refund = false;
        } else {
          let result = order.result;
          if (result) {
            if (result.cancel_supplier_price) {
              if (result.cancel_supplier_price.hasOwnProperty("#text")) {
                this.refundConfirmation.cancel_supplier_price = result.cancel_supplier_price["#text"];
              } else {
                this.refundConfirmation.cancel_supplier_price = result.cancel_supplier_price;
              }
            }
            if (result.refund_service_amount) {
              if (result.refund_service_amount.hasOwnProperty("#text")) {
                this.refundConfirmation.refund_service_amount = result.refund_service_amount["#text"];
              } else {
                this.refundConfirmation.refund_service_amount = result.refund_service_amount;
              }
            }
            if (result.refund_penalty_amount) {
              if (result.refund_penalty_amount.hasOwnProperty("#text")) {
                this.refundConfirmation.refund_penalty_amount = result.refund_penalty_amount["#text"];
              } else {
                this.refundConfirmation.refund_penalty_amount = result.refund_penalty_amount;
              }
            }
            if (typeof this.refundConfirmation.cancel_supplier_price == 'string') {
              if (this.refundConfirmation.cancel_supplier_price.endsWith('.')) {
                this.refundConfirmation.cancel_supplier_price = this.refundConfirmation.cancel_supplier_price.slice(0, -1);
              }
            }
            if (typeof this.refundConfirmation.refund_service_amount == 'string') {
              if (this.refundConfirmation.refund_service_amount.endsWith('.')) {
                this.refundConfirmation.refund_service_amount = this.refundConfirmation.refund_service_amount.slice(0, -1);
              }
            }
            if (typeof this.refundConfirmation.refund_penalty_amount == 'string') {
              if (this.refundConfirmation.refund_penalty_amount.endsWith('.')) {
                this.refundConfirmation.refund_penalty_amount = this.refundConfirmation.refund_penalty_amount.slice(0, -1);
              }
            }
          }
          this.calculateRefund(this.allBookingDetails.data.amount, this.refundConfirmation.cancel_supplier_price,
            this.refundConfirmation.refund_service_amount,
            this.refundConfirmation.refund_penalty_amount);
          this.buttonStatusList.refund = false;
          this.modalService.open(modalId);
        }
      }, (err: any) => {
        this.toastr.error(`Something went wrong at our end. Err: ${err.error.msg}`, `Oops!`, {
          timeOut: 10000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
        this.buttonStatusList.refund = false;
      });
  }


  passIdentification(type: string, index: number) {
    if (type === 'Passport') {
      this.identifactionType = "Passport";
      this.showExpiryDate = true;
    } else if (type === 'Resident ID') {
      this.identifactionType = 'Residential Identity';
      this.showExpiryDate = false;
    } else {
      this.identifactionType = 'National ID';
      this.showExpiryDate = false;
    }
    this.pax.controls[index].controls.identification.setValue(type);
  }

  amountToRefund: number = 0;
  calculateRefund(amount: string, cancel_supplier_price: string, refund_service_amount: string, refund_penalty_amount: string) {
    this.amountToRefund = parseFloat(amount) - (parseFloat(cancel_supplier_price) + parseFloat(refund_service_amount) + parseFloat(refund_penalty_amount));
    return this.amountToRefund;
  }

  showTaxBreakup(modalId: any) {
    this.modalService.open(modalId);
  }

  closeModal(modalId: any) {
    this.modalService.close(modalId);
  }

  showBaggageDesc() {
    this.bagDesc = !this.bagDesc;
  }

  incrementBaggageCount() {
    this.baggageCount = this.baggageCount + 1;
  }

  decrementBaggageCount() {
    this.baggageCount = this.baggageCount - 1;
  }

  showWheelchairDetails() {
    this.showWheelchair = !this.showWheelchair;
  }

  // downloadAsPDF() {

  //  this.displayVoucher = true;

  //   const doc = new jsPDF();

  //   const specialElementHandlers = {
  //     '#editor': function (element, renderer) {
  //       return true;
  //     }
  //   };

  //   const pdfTable = this.pdfTable.nativeElement;

  //   doc.fromHTML(pdfTable.innerHTML, 15, 15, {
  //     width: 190,
  //     'elementHandlers': specialElementHandlers
  //   });

  //   doc.save('tableToPdf.pdf');

  // }

  showVoucher() {
    this.displayVoucher = true;
  }

  showVoucherWithoutPrice() {
    this.displayVoucher = true;
    this.displayVoucherWithoutPrice = true
  }

  showInvoice() {
    this.displayInvoice = true;
  }

  showTravellerEdit(modalId: any) {
    this.editTraveller = !this.editTraveller;
    this.modalService.open(modalId);
  }

  showContactEdit(modalId: any) {
    this.editContact = !this.editContact;
    this.modalService.open(modalId);
  }

  showSeatMapModal(modalId: any) {
    this.modalService.open(modalId);
  }

  //  countUpFromTime(countFrom, id) {
  //   countFrom = new Date(countFrom).getTime();
  //   var now = new Date(),
  //       countFrom = new Date(countFrom),
  //       timeDifference = (now - countFrom);

  //   var secondsInADay = 60 * 60 * 1000 * 24,
  //       secondsInAHour = 60 * 60 * 1000;

  //    let days = Math.floor(timeDifference / (secondsInADay) * 1);
  //    let hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
  //    let mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
  //    let secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

  //   var idEl = document.getElementById(id);
  //   idEl.getElementsByClassName('days')[0].innerHTML = days;
  //   idEl.getElementsByClassName('hours')[0].innerHTML = hours;
  //   idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
  //   idEl.getElementsByClassName('seconds')[0].innerHTML = secs;

  //   clearTimeout(countUpFromTime.interval);
  //   countUpFromTime.interval = setTimeout(()=>{ countUpFromTime(countFrom, id); }, 1000);
  // }
  dhms(difference) {
    var days, hours, mins, secs;
    days = Math.floor(difference / (60 * 60 * 1000 * 24) * 1);
    hours = Math.floor((difference % (60 * 60 * 1000 * 24)) / (60 * 60 * 1000) * 1);
    mins = Math.floor(((difference % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) / (60 * 1000) * 1);
    secs = Math.floor((((difference % (60 * 60 * 1000 * 24)) % (60 * 60 * 1000)) % (60 * 1000)) / 1000 * 1);

    return [
      days + 'd',
      hours + 'h',
      mins + 'm',
      secs + 's'
    ].join(' ');
  }
}
