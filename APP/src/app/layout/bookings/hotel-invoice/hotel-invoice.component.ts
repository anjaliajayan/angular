import { Component, OnInit, Input } from '@angular/core';
import { BookingsService } from 'src/app/shared/services';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-hotel-invoice',
  templateUrl: './hotel-invoice.component.html',
  styleUrls: ['./hotel-invoice.component.scss']
})
export class HotelInvoiceComponent implements OnInit {
  invoiceData: any;
  roomInfo: any;
  toDate: any;
  fromDate: any;
  nights: any;
  userData: any;

  constructor(private bookingService:BookingsService) { }
@Input () bookingTrip_id; 
  ngOnInit(): void {
    console.log("this.bookingTrip_id",this.bookingTrip_id)
    this.bookingService.fetchBookingDetailById(this.bookingTrip_id).subscribe((res:any)=>{
      console.log("this is  the response",res);
      this.invoiceData = res.data;
      console.log(res.data)
      this.userData = res.userDetails
      this.roomInfo = JSON.parse(this.invoiceData.bookings_hotel.room_info);
      this.roomInfo = Array.isArray(this.roomInfo) ? this.roomInfo : [this.roomInfo]
      console.log("this.roomInfo",this.roomInfo)
      //getting the checkin and checkout time in unix form to be passed in the getNights method
      let searchCriteria = JSON.parse(this.invoiceData.bookings_hotel.search_criteria)
      this.toDate = searchCriteria.checkInUnix;
      this.fromDate = searchCriteria.checkOutUnix
      this.nights = this.getNights(this.toDate,this.fromDate);
      
    })
  }
  getNights(check_in, check_out) {
    var checkInDate = new Date(check_in * 1000);
    var checkOutDate = new Date(check_out * 1000);
    var diff_in_time = checkOutDate.getTime() - checkInDate.getTime();
    var diff_in_days = diff_in_time / (1000 * 3600 * 24);   
    return isNaN(diff_in_days) || diff_in_days < 0 ? 0 : diff_in_days;
  
  }
  exportToPdf(){
    const data = document.getElementById('content');
    console.log(data)
    html2canvas(data).then(canvas => {
      console.log()
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
     pdf.save(`Voucher-${this.bookingTrip_id}`);
     })
    }
}


