import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingsService } from 'src/app/shared/services';
import { ToastrService } from 'ngx-toastr';
import { convertToArray } from 'src/app/shared/utils/array.helper';
import { ModalService } from '../../_modal';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insurance-book-details',
  templateUrl: './insurance-book-details.component.html',
  styleUrls: ['./insurance-book-details.component.scss']
})
export class InsuranceBookDetailsComponent implements OnInit {
  @ViewChild('myTable') table;
  tripdetails: any;
  bookingTrip_id: any;
  allBookingDetails: {};
  newTravellerData: any = [];
  insuranceData: any = [];
  transactData: any = [];
  allBookingDetails_tripid:{};
  data:{};
  allBookingDetails_agent_reference: any;
  allBookingDetails_created:any;
  allBookingDetails_markup_price:any;
  allBookingDetails_userDetails:any;
  first_name:any = [];
  email: any;
  Insurance_name: any;
  search_criteria: any=[];
  travlers: any;
  mailForm: FormGroup;
  Booking_form: FormGroup;
  displayVoucher: boolean = false;
  displayInvoice: boolean = false;
  currency: any;
  first_na: string;
  first_nam: any[];
  travaler_email: any;
  tra_email: any;
  // submitInsuranceSpinner: boolean = false;
  
  constructor(
    private route: ActivatedRoute, public bookingService: BookingsService,private toastr: ToastrService,private router: Router,private modalService: ModalService,private fb: FormBuilder,
  ) {
    this.route.params.subscribe(params => {
      //console.log("params::::::", params);
      this.bookingTrip_id = params.id;
    });
   }

  ngOnInit(): void {
    this.tripdetails=history.state;
    // console.log('tripdetails,,,,,,,,,,,,,,,,,,', this.tripdetails);
    this.fetchBookingDetail();

    this.mailForm = this.fb.group({
			mail: ['',Validators.required],
      message: [''],
      voucher_status:['']
		
    });
    // this.Booking_form = this.fb.group({
    //   Booking_form: ['']
    // });
    // this.addflight();
  }
  fetchBookingDetail = () => {
     console.log("bookingTrip_id:::::::::::",this.bookingTrip_id);
    
    this.bookingService.fetchBookingDetailById(this.bookingTrip_id)
      .subscribe((res: any) => {
        
        this.allBookingDetails = res;
        console.log("BookingDetails:::::::::",this.allBookingDetails);
        this.allBookingDetails_tripid= this.allBookingDetails['data'].trip_id;
        this.allBookingDetails_agent_reference= this.allBookingDetails['data'].agent_reference;
        this.allBookingDetails_created= this.allBookingDetails['data'].created;
        this.allBookingDetails_markup_price= this.allBookingDetails['data'].markup_price;
        this.allBookingDetails_userDetails=this.allBookingDetails['userDetails'].username;
        let room_info = JSON.parse(this.allBookingDetails['data'].insurance_details['0'].room_info);
       this.search_criteria = JSON.parse(this.allBookingDetails['data'].insurance_details['0'].search_criteria);
        this.Insurance_name = JSON.parse(this.allBookingDetails['data'].insurance_details['0'].hotel_name);
        this.travlers = JSON.parse(this.allBookingDetails['data'].insurance_details['0'].adult) +
        JSON.parse(this.allBookingDetails['data'].insurance_details['0'].child);
        this.currency =room_info.currencyCode;
         console.log("travlers:::::::::",room_info.insuranceOccupancy);
        this.travaler_email=Array.isArray(room_info.insuranceOccupancy)? room_info.insuranceOccupancy['0'].contact.email : convertToArray(room_info.insuranceOccupancy.contact.email);
    if(this.travaler_email==''){
      this.tra_email =this.allBookingDetails['data'].booking_email;
    }else{
      this.tra_email=  this.travaler_email;
    }



  let other = []; // your other array...
if( room_info.insuranceOccupancy.length){
  room_info.insuranceOccupancy.map(item => {
    return {
        first_namefor: item.first_name,
        last_namefor: item.last_name,
       
    }
}).forEach(item => other.push(item));

}
            

          //  console.log('testtt....',other);

     // this.cancellation_policy = Array.isArray(room_info.insuranceOccupancy)? convertToArray(room_info.insuranceOccupancy[0].first_name) : convertToArray(room_info.insuranceOccupancy.first_name);
      
     
      let traveller_data = {
        "category":"1",
        'name':  Array.isArray(room_info.insuranceOccupancy)? other : convertToArray(room_info.insuranceOccupancy.first_name +' '+room_info.insuranceOccupancy.last_name),  
        "email":this.tra_email,
       // "name":other,
        'adults':this.allBookingDetails['data'].insurance_details[0].adult,
        "child":this.allBookingDetails['data'].insurance_details[0].child
        }
      this.newTravellerData = convertToArray(traveller_data);
     
         let insuranceDatass = {
          "category":"1",
          'Insurance_name':   this.Insurance_name,  
          'plan': this.search_criteria.plan,
          "start_date":this.allBookingDetails['data'].insurance_details[0].start_date,
          'end_date':this.allBookingDetails['data'].insurance_details[0].end_date
         

         }  
          
      this.insuranceData = convertToArray(insuranceDatass);
      let transactionDatass = {
        "booking_ref":room_info.bookingDetail.bookingReference,
        'sale_amount':   this.currency + '&nbsp' +this.allBookingDetails_markup_price,  
        'net_amount':this.currency + '&nbsp' +  this.allBookingDetails_markup_price,
        "supplier":this.allBookingDetails['data'].supplier,
        'status':this.allBookingDetails['data'].booking_status
       

       }  
        
    this.transactData = convertToArray(transactionDatass);
       
      


      },
      //  err => {
      //   console.log("BookingDetails::fetchBookingDetailById - Error");
      //   console.log(err);
      //   this.toastr.error(`Something went wrong at our end. Err: ${err.error.msg}`, `Oops!`, {
      //     timeOut: 10000,
      //     progressBar: false,
      //     positionClass: 'toast-bottom-right'
      //   });
      // }
      )

      
    
}

// btnBooking_form(){
//   console.log('Booking_form',this.Booking_form.value);
// }


showVoucher() {
  this.displayVoucher = true;
}

showInvoice() {
  this.displayInvoice = true;
}



closeModal(modalId: any) {
  this.modalService.close(modalId);
}

sendVoucherMailpop(modalId: any) {
  this.modalService.open(modalId);
}
sendVoucherMail(){
 
  //console.log('mail...',this.mailForm.value);
  const datas = {
    Trip_id: this.bookingTrip_id,
    mailForm: this.mailForm.value,
   
  }
  if (this.mailForm.invalid) {
    this.toastr.warning(`Please Enter The Email Address`, `Error `, {
      timeOut: 10000,
      progressBar: false,
      positionClass: 'toast-bottom-right'
    })
    return;
  }
  console.log('mail...',datas);
  // this.submitInsuranceSpinner = true;
  this.bookingService.bookingVoucherSend(datas).subscribe((resps: any) =>
   {
    console.log("mail .....", resps);
    if (resps.status) {
      this.toastr.success(`${resps.message}`, ``, {
        timeOut: 4000,
        progressBar: false,
        positionClass: 'toast-bottom-right',
        
      });
      this.closeModal('send_voucher');
    }else{
      this.toastr.error(`Please try again`, `failed`, {
        timeOut: 4000,
        progressBar: false,
        positionClass: 'toast-bottom-right'
      });
    }
    
  });
  
}


}