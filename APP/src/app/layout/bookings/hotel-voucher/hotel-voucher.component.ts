import { Component, OnInit,Input } from '@angular/core';
import {BookingsService} from '../../../shared/services/bookings.service';
import { Globals } from "src/app/shared/utils/globals";
import { prepareGlobals } from 'src/app/shared/utils/common';
import { indexOf } from 'lodash';
import { convertToArray } from 'src/app/shared/utils/array.helper';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: "app-hotel-voucher",
  templateUrl: "./hotel-voucher.component.html",
  styleUrls: ["./hotel-voucher.component.scss"]
})
export class HotelVoucherComponent implements OnInit {
  voucherDetails;
  toDate: any; 
  fromDate: any;
  constructor(private BookingsService: BookingsService) {}
  @Input() bookingTrip_id;
  @Input() displayVoucherWithoutPrice;
  globals: Globals;
  roomInfo;
  personData;
  nights;
  roomsData = []
  paxInfo = [];
  roomRow = [];
  userInfo;
  index // for storing the index value of room info because the array length is not constant
  roomDetails= [] ;
  cancelPolicy;
  Guests;
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
        console.log("res.data", this.voucherDetails);
        const roomInfo = JSON.parse(this.voucherDetails.bookings_hotel.room_info);
        this.roomInfo = roomInfo;
        this.roomInfo = Array.isArray(this.roomInfo) ? this.roomInfo : [this.roomInfo];
        console.log("=======this.roomInfo",this.roomInfo);
        this.roomInfo.room_occupancy = Array.isArray( this.roomInfo.room_occupancy) ?  this.roomInfo.room_occupancy : [ this.roomInfo.room_occupancy]
        let searchCriteria = JSON.parse(this.voucherDetails.bookings_hotel.search_criteria)
        this.toDate = searchCriteria.checkInUnix;
        this.fromDate = searchCriteria.checkOutUnix
        this.nights = this.getNights(this.toDate,this.fromDate);
      
      //  this.nights =  this.roomsData[0].pricePerDay.length
      const cancelPolicy =  Array.isArray(this.roomInfo[0].cancel_policy) ? this.roomInfo:[this.roomInfo[0].cancel_policy]
  console.log(cancelPolicy)
        this.cancelPolicy = cancelPolicy
        console.log("This is cancel policy",this.cancelPolicy)
      }
    );
    // this.nights= this.roomsData[0].pricePerDay.length;
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