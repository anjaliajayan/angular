import {Component, Input, OnInit} from '@angular/core';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';
import {prepareGlobals} from '../../../shared/utils/common';
import { BookingsService } from 'src/app/shared/services';
import {Globals} from '../../../shared/utils/globals';

@Component({
  selector: 'app-activity-voucher',
  templateUrl: './activity-voucher.component.html',
  styleUrls: ['./activity-voucher.component.scss']
})
export class ActivityVoucherComponent implements OnInit {

  voucherDetails;
  toDate: any;
  fromDate: any;
  constructor(private BookingsService: BookingsService) {}
  @Input() bookingTrip_id;
  @Input() displayVoucherWithoutPrice;
  globals: Globals;
  activityInfo;
  searchCriteria= [];
  activityBookingInfo= [];
  activityOccupancy= [];
  inclusions= [];
  exclusions= [];
  userInfo;
  cancelPolicy;



  ngOnInit(): void {
    this.globals = prepareGlobals();
    this.userInfo = this.globals.getUser();
    console.log(
      "============user inforamtion ===========",
      this.userInfo
    );
    // console.log(this.bookingTrip_id, "booking trip id");


    this.BookingsService.fetchBookingDetailById(this.bookingTrip_id).subscribe(
      (res : any) => {
        this.voucherDetails = res.data;
        console.log('res.data', this.voucherDetails);
        const activityInfo = JSON.parse(this.voucherDetails.activity_details[0].room_info);
        this.activityBookingInfo = this.voucherDetails.activity_details[0];
        this.activityInfo = activityInfo.Activity;
        const searchCriteria = JSON.parse(this.voucherDetails.activity_details[0].search_criteria);
        this.activityOccupancy = Array.isArray(this.activityInfo.activityOccupancy) ? this.activityInfo.activityOccupancy : [this.activityInfo.activityOccupancy]
        this.inclusions = Array.isArray(this.activityInfo.Details.inclusions) ? this.activityInfo.Details.inclusions : [this.activityInfo.Details.inclusions]
        this.exclusions = Array.isArray(this.activityInfo.Details.exclusions) ? this.activityInfo.Details.exclusions : [this.activityInfo.Details.exclusions]
        this.searchCriteria = searchCriteria;
        const cancelPolicy =  '';
        console.log(cancelPolicy)
        this.cancelPolicy = cancelPolicy
        console.log('This is cancel policy',this.cancelPolicy)
      }
    );
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
      pdf.save(`Voucher-${this.bookingTrip_id}`);
    })

  }
}
