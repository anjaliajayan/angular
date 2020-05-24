import {Component, Input, OnInit} from '@angular/core';
import { BookingsService } from 'src/app/shared/services';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-activity-invoice',
  templateUrl: './activity-invoice.component.html',
  styleUrls: ['./activity-invoice.component.scss']
})
export class ActivityInvoiceComponent implements OnInit {
  invoiceData: any;
  activityInvoiceInfo: any;
  userData: any;
  searchCriteria: any;
  activityBookingInfo= [];

  constructor(private bookingService:BookingsService) { }
  @Input () bookingTrip_id;
  ngOnInit(): void {
    console.log("this.bookingTrip_id",this.bookingTrip_id)
    this.bookingService.fetchBookingDetailById(this.bookingTrip_id).subscribe((res:any)=>{
      console.log("this is  the response",res);
      let activityInfo = JSON.parse(this.invoiceData.activity_details[0].room_info);
      this.activityBookingInfo = this.invoiceData.activity_details[0];
      this.activityInvoiceInfo = activityInfo.Activity;
      this.userData = res.userDetails;
      console.log('this.userDetails',this.activityInvoiceInfo)
      const searchCriteria = JSON.parse(this.invoiceData.activity_details[0].search_criteria)
      this.searchCriteria = searchCriteria;

    })
  }
  getSlice(str){
    let setStrYear = str.toString().slice(0,4);
    let setStrMonth = str.toString().slice(4,6);
    let setStrDate = str.toString().slice(6,8);
    let newDate = setStrDate+'/'+setStrMonth+'/'+setStrYear;
    return newDate;
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


