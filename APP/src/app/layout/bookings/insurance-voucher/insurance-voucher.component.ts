import { Component, OnInit, Input } from '@angular/core';
import { convertToArray } from 'src/app/shared/utils/array.helper';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-insurance-voucher',
  templateUrl: './insurance-voucher.component.html',
  styleUrls: ['./insurance-voucher.component.scss']
})
export class InsuranceVoucherComponent implements OnInit {
  allname: any;
  name: [];
  ticket = [];
  code: any;
  type: any;
  B_ref: any;
  allBookingDetails_tripid: any;
  currency: any;
  qname: any[];
  username: any;
  email: any;
  mobile: any;
  

  constructor() { }
  @Input() allBookingDetails:any;
  ngOnInit(): void {

    console.log("allBookingDetails:::::::::",this.allBookingDetails);
    this.allBookingDetails_tripid= this.allBookingDetails['data'].trip_id;

    let allname = JSON.parse(this.allBookingDetails['data'].insurance_details['0'].room_info);
  
    let other = []; // your other array...
    if(allname.insuranceOccupancy.length){
      allname.insuranceOccupancy.map(item => {
        return {
            first_namefor: item.first_name,
            last_namefor: item.last_name,
           
        }
    }).forEach(item => other.push(item));
    
    }


    this.qname=Array.isArray(allname.insuranceOccupancy)?other : convertToArray(allname.insuranceOccupancy.first_name +' '+allname.insuranceOccupancy.last_name);
   
    console.log("allname:::::::::",this.qname);
   
    let user_details =this.allBookingDetails.userDetails;
    // const allname = JSON.parse(this.allname);
   this.currency =allname.currencyCode;
   this.type = allname.policyType;
   this.code = allname.policyCode;
   this.B_ref = allname.bookingDetail.bookingReference;
  
   this.username = user_details.username;
   this.email = user_details.email;
   
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
                                   pdf.save(`Voucher-${this.allBookingDetails_tripid}`);
                                   })
                              
                                  }                            
  
 
  }


