import { ToastrService } from 'ngx-toastr';
import { HotelService } from './../../../shared/services/hotels.service';
import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingsService } from 'src/app/shared/services';
import { convertToArray } from 'src/app/shared/utils/array.helper';
import { ModalService } from '../../_modal';


@Component({
  selector: "app-hotele-booking-details",
  templateUrl: "./hotele-booking-details.component.html",
  styleUrls: ["./hotele-booking-details.component.scss"]
})
export class HoteleBookingDetailsComponent implements OnInit {
  @ViewChild("myTable") table;
  bookingTripId: any;
  bookingTrip_id: any;
  bookingDetailsLoader: boolean = false;
  bookUsername: any;
  supplierName: any;
  newTravellerData: any = [];
  hotelDetail: any = [];
  newTransactionData: any = [];
  transactionsData: any = [];
  allBookingDetails: any = [];
  cancellationData: any = [];
  issueTicketLoader: boolean = false;
  airDocReIssueTicketLoader: boolean = false;
  remarks: any = [];
  hotelFlightFlag: boolean = false;
  displayVoucher: boolean = false;
  cancelBookingLoader: boolean = false;
  cancellation_policy:any;
  voucherForm:FormGroup;
//booking status
  bookingStatus:string;
  btnSpinner=false;
  
  voucher: boolean = false;
  displayInvoice: boolean = false;
  
  displayVoucherWithoutPrice:boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public bookingService: BookingsService,
    private hotelService: HotelService,
    private toastr: ToastrService,
    private modalService: ModalService
  ) {
    this.route.params.subscribe(params => {
      this.bookingTrip_id = params.id;
    });
  }

  rooms = [];

  bookingDetailForm = this.fb.group({
    trip_id: [""],
    booked_date: [""],
    reference: [""],
    total_sale: [""],
    booking_currency: [""],
    net_amount: [""],
    ticket_deadline: [""],
    bookedByUser: [""],
    trip_status: [""],
    ticket_limit: [""],
    booking_type: ["Online"], //make it dynamic when there is different kind of booking
    ticket_user: [""],
    status: ""
  });
  

  ngOnInit(): void {
    //making form for voucher to get
    this.voucherForm = this.fb.group({     
      userEmail: ["",Validators.required],
      message:[""],    
      voucherStatus: [""], 
    });
    
    this.fetchBookingDetail();
  }

  fetchBookingDetail = () => {
    this.bookingDetailsLoader = true;
    this.bookingService
      .fetchBookingDetailById(this.bookingTrip_id)
      .subscribe((res: any) => {
        this.allBookingDetails = res.data;
        this.cancellationData = res.data;
        //adding status
        this.bookingStatus = this.allBookingDetails.bookings_hotel.booking_status;        
        console.log("bookingStatus",this.bookingStatus);
        let room_info = JSON.parse(
          this.allBookingDetails.bookings_hotel.room_info
        );
        let hotelDetail = this.allBookingDetails.bookings_hotel;
        let searchCriteria = JSON.parse(
          this.allBookingDetails.bookings_hotel.search_criteria
        );
        let currency = this.allBookingDetails.booking_currency;
        let status = this.allBookingDetails.booking_status;
        let supplier = this.allBookingDetails.supplier;
        let sale_amount = this.allBookingDetails.markup_price;
        let due_amount = this.allBookingDetails.markup_price;
        let booking_email = this.allBookingDetails.booking_email;
        // console.log("searchCriteria",searchCriteria);
        let rooms = JSON.parse(hotelDetail.room_info);
        // console.log("hotel detail",hotelDetail);
        hotelDetail.roominfo  =Array.isArray(room_info)? room_info[0].room_description : room_info.room_description;

        hotelDetail.cancel_policy = rooms.cancellation_policy;
        let transaction_data: any;
        // console.log(hotelDetail.hotel_name +" "+hotelDetail.reference_number);
        transaction_data = {
          confimation_no:
            hotelDetail.hotel_name + " " + hotelDetail.reference_number,
          sale_amount: currency + " " + sale_amount,
          due_net_amount: currency + " " + due_amount,
          supplier: supplier,
          booking_status: status,
          currency: currency
        };

        this.rooms = rooms;

        //get all rooms
        let room_occupancy = Array.isArray(rooms) ? rooms[0].room_occupancy : rooms.room_occupancy;

        let category = hotelDetail.hotel_name;
        let no_of_rooms = searchCriteria.no_of_rooms;
        let pax_name = room_occupancy[0].first_name;

        //make newTravellerData
        let traveller_data = {
          category: category + "-Total Room " + no_of_rooms,
          name: pax_name,
          room_info: room_info.room_description,
          phone: "342234324",
          email: booking_email,
          adults: searchCriteria.adults_per_room,
          child: searchCriteria.children_per_room
        };

        this.newTravellerData = convertToArray(traveller_data);
        this.transactionsData = convertToArray(transaction_data); // confirmation_no, sale_amount, due_net_amount,supplier,booking_status,
        this.cancellation_policy = Array.isArray(rooms)
          ? convertToArray(rooms[0].cancel_policy)
          : convertToArray(rooms.cancel_policy);

        let tripIid = this.allBookingDetails.trip_id;
        let agent_ref = res.data.agent_reference;
        let username = res.userDetails.username;
        let total_sale = this.allBookingDetails.markup_price;
        let booking_currency = this.allBookingDetails.booking_currency;
        let supplier_price = this.allBookingDetails.supplier_price;
        this.hotelDetail = !Array.isArray(hotelDetail)
          ? convertToArray(hotelDetail)
          : hotelDetail;

 this.bookingDetailForm.patchValue({
   trip_id: res.data.trip_id,
   booked_date: res.data.created,
   reference: res.data.agent_reference,
   total_sale: res.data.markup_price,
   booking_currency: res.data.booking_currency,
   net_amount: res.data.supplier_price,

   trip_status: res.data.booking_status
 });
 this.bookUsername = "";
 if (res.userDetails && res.userDetails.username) {
   this.bookUsername = res.userDetails.username;
 }
 console.log(this.bookingDetailForm,"This is the booking detail form control  ")



      });
  };
  sendVoucherMail(modalId: any) {
    this.modalService.open(modalId);
  }
  closeModal(modalId: any) {
    this.modalService.close(modalId);
  }
  showVoucher() {
    this.displayVoucher = true;
  }
  showVoucherWithoutPrice(){
    this.displayVoucher = true;
    this.displayVoucherWithoutPrice= true;
  }
  showInvoice() {
    this.displayInvoice = true;
  }
  cancelTicket = () => {
    let ticket: any = {};
    ticket.tripId = this.allBookingDetails.trip_id;
    ticket.hotel = this.cancellationData;
    this.cancelBookingLoader = true;
    // console.log("===============================",ticket.hotel);
    // return false;
    this.hotelService.orderCancelRequest(ticket)
      .subscribe((order: any) => {
        if (order.hasOwnProperty("type") && order.type === "error") {
          this.cancelBookingLoader = false;
          this.toastr.error(`Something went wrong at our end. Err: ${order.msg}`, `Oops!`, {
            timeOut: 10000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
          this.cancelBookingLoader = false;
        } else {
          this.cancelBookingLoader = false;      
          this.toastr.info(`You ticket has been Cancelled.`, `Congrats!`, {
            timeOut: 10000,
            progressBar: false,

            positionClass: 'toast-bottom-right'
          });
          this.cancelBookingLoader = false;
          this.router.navigateByUrl('/bookings');
        }
      }, (err: any) => {
        this.toastr.error(`Something went wrong at our end. Err: ${err.error.msg}`, `Oops!`, {
          timeOut: 10000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        }); 
        this.cancelBookingLoader = false;
      });
  }
  orderRetrieve = () => {
    this.btnSpinner=true;
    let ticket: any = {};
    ticket.echoToken = this.allBookingDetails.data.echoToken;
    ticket.tripId = this.allBookingDetails.data.trip_id;
    ticket.ownerId = this.allBookingDetails.data.supplier;
    ticket.ownerPNR = this.allBookingDetails.data.Flights[0].pnr_no.split('-')[1];
    this.cancelBookingLoader = true;

    this.hotelService.orderReteriveRequest(ticket)
      .subscribe((order: any) => {
        this.btnSpinner=false;
        if (order.hasOwnProperty("type") && order.type === "error") {
          this.toastr.error(`Something went wrong at our end. Err: ${order.msg}`, `Oops!`, {
            timeOut: 10000,
            progressBar: false,

            positionClass: 'toast-bottom-right'
          });
          this.btnSpinner=false;
        } else {
          this.toastr.info(`You ticket has been Cancelled.`, `Congrats!`, {
            timeOut: 10000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
          this.btnSpinner=false;
          this.router.navigateByUrl('/bookings');
        }
      }, (err: any) => {
        this.toastr.error(`Something went wrong at our end. Err: ${err.error.msg}`, `Oops!`, {
          timeOut: 10000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
        this.btnSpinner=false;
      });
  }
  //send voucher in email
  sendVoucher(){    
  const datas = {
    Trip_id: this.bookingTrip_id,
    mailForm: this.voucherForm.value,   
  }

  if (this.voucherForm.invalid) {
    this.toastr.warning(`Please Enter The Email Address`, `Error `, {
      timeOut: 10000,
      progressBar: false,
      positionClass: 'toast-bottom-right'
    })
    return;
  }

  // this.submitInsuranceSpinner = true;
    this.hotelService.hotelSendVoucher(datas).subscribe( (resps: any) =>
    {     
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
