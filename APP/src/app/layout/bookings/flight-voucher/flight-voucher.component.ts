import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { BookingsService } from '../../../shared/services/bookings.service'
import { CorporatesModule } from '../../corporates/corporates.module';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { id } from '@swimlane/ngx-datatable';
import *  as jsPDF from 'jspdf'
import html2PDF from 'jspdf-html2canvas';
import html2canvas from 'html2canvas';
import { convertToArray } from 'src/app/shared/utils/array.helper';
// import {FlightTimeParser} from '../../../shared/pipes/flight-time-parser.pipe'
@Component({
  selector: 'app-flight-voucher',
  templateUrl: './flight-voucher.component.html',
  styleUrls: ['./flight-voucher.component.scss']
})
export class FlightVoucherComponent implements OnInit {

  @Input() bookingTrip_id;
  @Input() displayVoucherWithoutPrice;
  ticketDocInfo: any;
  baseFare: any;
  tax: any;
  passPaxInfo = [];
  priceArray = [];
  PriceDetails = [];
  VoucherWithoutPrice = this.displayVoucherWithoutPrice;
  airlinePnr;
  classOfService = [];
  // voucherDetails: any;

  constructor(
    private BookingsService: BookingsService
  ) {
  }
  ticketNumber = []
  ffNum = [];
  confirmTicketNumber = '';
  bookingFlights = []
  NameofTheCandidate = [];
  SupplierCodeImage: String = ""
  passengerDetails = [];
  arrivalTime = [];
  FlightTimeArray = []
  name = [];
  ticket = [];
  voucherDetails: any;
  name_ticket = [];

  ngOnInit(): void {

    this.BookingsService.bookingVoucherPrint(this.bookingTrip_id).subscribe((res: any) => {
      console.log("res", res);
      this.voucherDetails = res.data;
      let myTicketContact = this.voucherDetails.bookings_flights[0].TicketContact;
      if (myTicketContact.hasOwnProperty("Response")) {
        myTicketContact = myTicketContact.Response;
      }
      let classOfService = myTicketContact.DataLists.FlightSegmentList.FlightSegment;
      classOfService = Array.isArray(classOfService) ? classOfService : [classOfService]
      classOfService.map(cos => {
        cos.ClassOfService.MarketingName.hasOwnProperty('#text') ?
          this.classOfService.push(cos.ClassOfService.MarketingName['#text']) :
          this.classOfService.push(cos.ClassOfService.MarketingName)
          ;
      })
      console.log("res.data", res.data)
      this.airlinePnr = this.voucherDetails.bookings_flights[0].airline_pnr_no
      // const airDoc = JSON.parse(res.data.bookings_flights[0].airDocIssue);
      // console.log("airDic",airDoc)
      //   if(this.voucherDetails.supplier != "1A"){
      //   this.airlinePnr = this.voucherDetails.bookings_flights[0].airline_pnr_no;
      // }
      // if(this.voucherDetails.supplier != "1S"){
      //   this.airlinePnr = this.voucherDetails.bookings_flights[0].airline_pnr_no;
      // }
      // if(this.voucherDetails.supplier != "1G"){
      //   this.airlinePnr = this.voucherDetails.bookings_flights[0].airline_pnr_no;
      // }
      // else{
      //   this.airlinePnr =  this.voucherDetails.bookings_flights[0].airline_pnr_no;
      //   }




      // this.passengerDetails = ;
      //if the ticket is confirm then storing the ticket number 

      const bookingFlights = this.voucherDetails.bookings_flights;

      //extracting the orderItem from ticketDocInfos and if it is not an array then converting it into an array
      //this is useful for displaying the pricing details when the ticket status is on hold
      const orderItemArray = convertToArray(myTicketContact.Order.OrderItems.OrderItem);
      // console.log("orderItemArray",orderItemArray)

      const passengersArray = convertToArray(myTicketContact.Passengers.Passenger);
      passengersArray.forEach(passInfo => {

        const paxId = passInfo['@ObjectKey'];
        const paxType = passInfo.PTC['#text'];

        const Paxobj = {
          paxId: paxId,
          paxType: paxType
        }
        this.passPaxInfo.push(Paxobj);
      })
      //  console.log("this.passPaxInfo",this.passPaxInfo)
      //extracting paxId and baseFare and tax from orderItemArray and storing it in an array of object => this.priceArray

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
      // console.log("this.priceArray",this.priceArray)

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
      if (res.data) {
        const bookings_flights = this.voucherDetails.bookings_flights
        bookings_flights.forEach(bookings_flight => {
          let myTmpTicketContact = bookings_flight.TicketDocInfos;
          if (myTmpTicketContact.hasOwnProperty("Response")) {
            myTmpTicketContact = myTmpTicketContact.Response;
          }
          const flight_tickets = bookings_flight.flight_tickets
          this.ticketNumber = flight_tickets
          this.SupplierCodeImage = myTmpTicketContact.Order.BookingReferences.BookingReference.AirlineID;
        });
      }

      res.passenger_details


      // console.log("this.ticketNumber", this.ticketNumber);

      this.voucherDetails.passenger_details.map(ffNumber => {
        this.ffNum.push(ffNumber.pax_frequentFlyerNumber);
      })

      // this.voucherDetails.trip_detail.segment_details.forEach(pax => {
      //   const ffNum = pax.segment_frequentflair_number;
      //   this.ffNum = ffNum;
      //   console.log("this is FF number",this.ffNum)
      // const name = pax.pax_first_name;
      // this.NameofTheCandidate = name;
      // console.log("**************************************", this.NameofTheCandidate);
      // });

      if (res.data.booking_status === 'confirm') {
        // console.log(this.voucherDetails.booking_status)
        this.ticketNumber.forEach(ticket => {
          this.confirmTicketNumber = ticket.ticket_number;
          // console.log(ticket.ticket_number)
        })
      }
      else {
        this.confirmTicketNumber = "No Ticket "
        // console.log(this.confirmTicketNumber)
      }

      // //putting ticketNumber and name in the same array



      // this.ticketNumber.forEach(ticketInfo => {
      //   const obj = {
      //     ticket_no: ticketInfo.ticket_number,

      //     paxId: ticketInfo.ticket_pax_ref_key
      //   }

      //   this.ticket.push(obj);

      // })

      // res.data.passenger_details.forEach(passInfo => {
      //   const obj = {
      //     name: passInfo.pax_first_name,
      //     paxId: passInfo.pax_ref_key

      //   }
      //   this.name.push(obj)
      // })
      // console.log("this is the name array", this.name)
      // console.log("this is the ticket array", this.ticket)

      this.voucherDetails.bookings_flights.forEach(flight => {
        let myTmpTicketContact = flight.TicketContact;
        if (flight.TicketContact.hasOwnProperty("Response")) {
          myTmpTicketContact = flight.TicketContact.Response;
        }
        if (myTmpTicketContact.Order.OrderItems.OrderItem.FlightItem && myTmpTicketContact.Order.OrderItems.OrderItem.FlightItem.Price) {
          const baseFare = myTmpTicketContact.Order.OrderItems.OrderItem.FlightItem.Price.BaseAmount;
          // console.log("BaseAmount",baseFare['#text'])
          // this.baseFare = baseFare

          const tax = myTmpTicketContact.Order.OrderItems.OrderItem.FlightItem.Price.Taxes.Total;
          // console.log("Tax",tax['#text'])
        }
        const passType = myTmpTicketContact.Passengers.Passenger.PTC;
        // console.log("PassType",passType['#text'])
        const totalPrice = myTmpTicketContact.Order.TotalOrderPrice.DetailCurrencyPrice.Total;
        // console.log("TotalPrice",totalPrice['#text'])
      })
    });
  }


  exportToPdf() {
    const data = document.getElementById('content');
    html2canvas(data).then(canvas => {
      const imgWidth = 210;

      const pageHeight = 290;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm');
      let position = 0;
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        pdf.addPage();
        heightLeft -= pageHeight
      }
      var pageCount = pdf.internal.getNumberOfPages();
      pdf.deletePage(pageCount)
      pdf.save(`Voucher-${this.bookingTrip_id}`);
    })

  }
  back() {
    window.location.reload();
  }
}
