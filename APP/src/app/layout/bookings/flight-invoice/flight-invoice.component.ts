import { Component, OnInit, Input } from '@angular/core';
import { BookingsService } from '../../../shared/services/bookings.service'
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas'
import { totalmem } from 'os';
import { prepareGlobals } from 'src/app/shared/utils/common';
import { Globals } from 'src/app/shared/utils/globals';
import { convertToArray } from 'src/app/shared/utils/array.helper';

@Component({
  selector: 'app-flight-invoice',
  templateUrl: './flight-invoice.component.html',
  styleUrls: ['./flight-invoice.component.scss']
})
export class FlightInvoiceComponent implements OnInit {
  invoiceData;
  SupplierCodeImage: any;
  ticketNumber: any;
  name = [];
  passPaxInfo = [];
  priceArray = [];
  PriceDetails = [];
  classOfService = []
  userInfo: any;
  constructor(private BookingsService: BookingsService) { }
  @Input() bookingTrip_id;
  globals: Globals;


  ngOnInit(): void {
    this.BookingsService.bookingVoucherPrint(this.bookingTrip_id).subscribe((res: any) => {
      this.invoiceData = res.data;

      this.globals = prepareGlobals();
      this.userInfo = this.globals.getUser();
      //setting class of service 
      console.log("this.invoivceData.bookings_flights", this.invoiceData)

      let myTicketContact = this.invoiceData.bookings_flights[0].TicketContact;
      if (myTicketContact.hasOwnProperty("Response")) {
        myTicketContact = myTicketContact.Response;
      }

      let classOfService = myTicketContact.DataLists.FlightSegmentList.FlightSegment;
      classOfService = Array.isArray(classOfService) ? classOfService : [classOfService];

      classOfService.map(cos => {
        cos.ClassOfService.MarketingName.hasOwnProperty('#text') ?
          this.classOfService.push(cos.ClassOfService.MarketingName['#text']) :
          this.classOfService.push(cos.ClassOfService.MarketingName)
          ;
      })

      const bookings_flights = this.invoiceData.bookings_flights
      bookings_flights.forEach(bookings_flight => {
        let myTmpTicketContact = bookings_flight.TicketDocInfos;
        if (myTmpTicketContact.hasOwnProperty("Response")) {
          myTmpTicketContact = myTmpTicketContact.Response;
        }
        const flight_tickets = bookings_flight.flight_tickets
        this.ticketNumber = flight_tickets
        this.SupplierCodeImage = myTmpTicketContact.Order.BookingReferences.BookingReference.AirlineID
      });

      this.invoiceData.passenger_details.forEach(passInfo => {
        const obj = {
          name: passInfo.pax_first_name,
          paxId: passInfo.pax_ref_key,
          paxType: passInfo.pax_type
        }
        this.name.push(obj)
      })

      const orderItemArray = convertToArray(myTicketContact.Order.OrderItems.OrderItem);

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
      console.log("this.passPaxInfo", this.passPaxInfo)
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
            tax: tax,
            total: `${+baseFare + +tax}`
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
    })

  }
  //download invoice as pdf
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
      pdf.save(`Invoice-${this.bookingTrip_id}`);
    })

  }


}
