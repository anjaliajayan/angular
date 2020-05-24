import { Component, OnInit, Input } from '@angular/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-insurance-invoice',
  templateUrl: './insurance-invoice.component.html',
  styleUrls: ['./insurance-invoice.component.scss']
})
export class InsuranceInvoiceComponent implements OnInit {
  allname: any;
  name: [];
  ticket = [];
  code: any;
  type: any;
  B_ref: any;
  tripID: any;
  policy_name: any;
  booking_status: any;
  markupPrice: any;
  currency: any;
  bookingEmail: any;
  username: any;
  email: any;
  address1: any;
  address2: any;
  mobile: any;

  constructor() { }
  @Input() allBookingDetails:any;
  ngOnInit(): void {
    let allname = JSON.parse(this.allBookingDetails['data'].insurance_details['0'].room_info);
    let user_details =this.allBookingDetails.userDetails;
    // const allname = JSON.parse(this.allname);
    
    this.type = allname.policyType;
    this.policy_name = allname.policy_name;
    this.code = allname.code;
    this.B_ref = allname.bookingDetail.bookingReference;
    this.tripID = allname.bookingDetail.tripID;
    this.booking_status = allname.booking_status;
    this.markupPrice =allname.markupPrice;
    this.currency =allname.currencyCode;
    this.bookingEmail = allname.bookingEmail;
    console.log("invoice:::::::::",allname);
    this.username = user_details.username;
    this.email = user_details.email;
    this.address1 = user_details.address_1;
    this.address2 = user_details.address_2;
    this.mobile =user_details.mobile;

  }

  exportToPdf(){
    const data = document.getElementById('content');
    html2canvas(data).then(canvas => {
     const imgWidth = 210;
 
     const pageHeight = 290;
     const imgHeight = (canvas.height * imgWidth) / canvas.width;
     let heightLeft = imgHeight;
     const contentDataURL = canvas.toDataURL('image/png');
     const pdf = new jsPDF('p','mm');
     let position = 0;
     while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addImage(contentDataURL, 'PNG',0, position, imgWidth,imgHeight);
      pdf.addPage();
      heightLeft -= pageHeight
     }
     var pageCount = pdf.internal.getNumberOfPages();
     pdf.deletePage(pageCount)
     pdf.save(`Invoice-${this.tripID}`);
     })

    } 

}
