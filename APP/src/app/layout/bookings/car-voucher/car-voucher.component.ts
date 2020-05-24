import {Component, Input, OnInit} from '@angular/core';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';
import {prepareGlobals} from '../../../shared/utils/common';
import { BookingsService } from 'src/app/shared/services';
import {Globals} from '../../../shared/utils/globals';

@Component({
  selector: 'app-car-voucher',
  templateUrl: './car-voucher.component.html',
  styleUrls: ['./car-voucher.component.scss']
})
export class CarVoucherComponent implements OnInit {

  voucherDetails;
  constructor(private BookingsService: BookingsService) {}
  @Input() bookingTrip_id;
  @Input() displayVoucherWithoutPrice;
  globals: Globals;
  carInfo;
  searchCriteria= [];
  carBookingInfo= [];
  userInfo;
  cancelPolicy;
  carAC: string;

  ngOnInit(): void {
    this.globals = prepareGlobals();
    this.userInfo = this.globals.getUser();


    this.BookingsService.fetchBookingDetailById(this.bookingTrip_id).subscribe(
      (res : any) => {
        this.voucherDetails = res.data;
        console.log('res.data', this.voucherDetails);
        const carInfo = JSON.parse(this.voucherDetails.car_details[0].room_info);
        this.carBookingInfo = this.voucherDetails.car_details[0];
        this.carInfo = carInfo.Cars;
        if(this.carInfo.ac){
          this.carAC = 'Yes';
        }else{
          this.carAC = 'No';
        }
        const searchCriteria = JSON.parse(this.voucherDetails.car_details[0].search_criteria);
        this.searchCriteria = searchCriteria;
        const cancelPolicy =  '';
        console.log(cancelPolicy)
        this.cancelPolicy = cancelPolicy
        console.log('This is cancel policy',this.cancelPolicy)
      }
    );
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
