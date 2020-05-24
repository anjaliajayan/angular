import {Component, Input, OnInit} from '@angular/core';
import { BookingsService } from 'src/app/shared/services';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-car-invoice',
  templateUrl: './car-invoice.component.html',
  styleUrls: ['./car-invoice.component.scss']
})
export class CarInvoiceComponent implements OnInit {
  invoiceData: any;
  carInvoiceInfo: any;
  userData: any;
  searchCriteria: any;
  carBookingInfo= [];

  constructor(private bookingService:BookingsService) { }
  @Input () bookingTrip_id;

  ngOnInit(): void {
    this.bookingService.fetchBookingDetailById(this.bookingTrip_id).subscribe((res:any)=>{
      console.log('this is  the response',res);
      this.invoiceData = res.data;
      let carInfo = JSON.parse(this.invoiceData.car_details[0].room_info);
      this.carBookingInfo = this.invoiceData.car_details[0];
      this.carInvoiceInfo = carInfo.Cars;
      this.userData = res.userDetails;
      console.log('this.userDetails',this.carInvoiceInfo)
      const searchCriteria = JSON.parse(this.invoiceData.car_details[0].search_criteria)
      this.searchCriteria = searchCriteria;

    })
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
      const pageCount = pdf.internal.getNumberOfPages();
      pdf.deletePage(pageCount)
      pdf.save(`Voucher-${this.bookingTrip_id}`);
    })
  }

}
