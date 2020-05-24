import { ToastrService } from 'ngx-toastr';
import { ActivitySearchService } from './../../../shared/services/activity.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BookingsService } from 'src/app/shared/services';
import { convertToArray } from 'src/app/shared/utils/array.helper';
import { ModalService } from '../../_modal';


@Component({
  selector: 'app-activity-booking-details',
  templateUrl: './activity-booking-details.component.html',
  styleUrls: ['./activity-booking-details.component.scss']
})
export class ActivityBookingDetailsComponent implements OnInit {
  @ViewChild('myTable') table;
  bookingTripId: any;
  bookingTrip_id: any;
  bookingDetailsLoader: boolean = false;
  bookUsername: any;
  supplierName: any;
  newTravellerData: any = [];
  newContactDetailData: any = [];
  newTransactionData: any = [];
  transactionsData: any = [];
  allBookingDetails: any = [];
  allUserDetails: any = [];
  activityDetail: any = [];
  onCancelTicket:boolean = false;
  onOrderReterive:boolean = false;

  issueTicketLoader: boolean = false;
  airDocReIssueTicketLoader: boolean = false;
  remarks: any = [];
  hotelFlightFlag:boolean = false;
  displayVoucher: boolean = false;
  cancellation_policy:any;
  cancelBookingLoader: boolean = false;
  voucherForm:FormGroup;
  voucher:boolean = false;
  displayInvoice: boolean = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public bookingService: BookingsService,
    private activitySearchService: ActivitySearchService,
    private toastr: ToastrService,
    private modalService: ModalService) {
      this.route.params.subscribe(params => {
       console.log("params::::::", params);
       this.bookingTrip_id = params.id;
      });

    }

  bookingDetailForm = this.fb.group({
    trip_id: [''],
    booked_date: [''],
    reference: [''],
    total_sale: [''],
    booking_currency: [''],
    net_amount: [''],
    ticket_deadline: [''],
    bookedByUser: [''],
    trip_status: [''],
    ticket_limit: [''],
    booking_type: ['Online'], //make it dynamic when there is different kind of booking
    ticket_user: [''],
    status : ''
  });

  ngOnInit(): void {
    this.voucherForm = this.fb.group({
      userEmail: ['',Validators.required],
      message:[''],
      voucherStatus: [''],
    });
    this.fetchBookingDetail();
  }

  fetchBookingDetail = () => {

    this.bookingDetailsLoader = true;
    this.bookingService.fetchBookingDetailById(this.bookingTrip_id)
      .subscribe((res: any) => {
        console.log("BookingDetails::fetchBookingDetailById");
        this.allBookingDetails = res.data;
        this.allUserDetails = res.userDetails;
        let room_info = JSON.parse(this.allBookingDetails.activity_details[0].room_info);
        let searchCriteria = JSON.parse(this.allBookingDetails.activity_details[0].search_criteria);

        let booking_email = this.allBookingDetails.booking_email;
        let currency = this.allBookingDetails.booking_currency;
        let status = this.allBookingDetails.booking_status;
        let supplier = this.allBookingDetails.supplier;
        let sale_amount = this.allBookingDetails.markup_price;
        let due_amount = this.allBookingDetails.markup_price;
        if(res.data.booking_status === 'void'){
          this.onCancelTicket = true;
          this.onOrderReterive = true;
        }else{
          this.onCancelTicket = false;
        }
        console.log(room_info);
        let pax_name = room_info.Activity.activityOccupancy.first_name;

        let traveller_data = {
          'name': pax_name,
          "phone":'999999999',
          "email":booking_email,
          'adults':searchCriteria.adultCount,
          "child":searchCriteria.childCount

        }
        let transaction_data = {
          confimation_no:
            room_info.Activity.activityName + " " + room_info.Activity.activityCode,
          sale_amount: currency + " " + sale_amount,
          due_net_amount: currency + " " + due_amount,
          supplier: supplier,
          booking_status: status,
          currency: currency
        };


        let activity_data = {
          'activityName': room_info.Activity.activityName,
          "plan":room_info.Activity.activityCode,
          "startDate":searchCriteria.startDate,
          'endDate':searchCriteria.endDate,

        }


        this.newTravellerData = convertToArray(traveller_data);
        this.activityDetail = convertToArray(activity_data);
        this.transactionsData = convertToArray(transaction_data);
        this.cancellation_policy = Array.isArray(room_info.Activity.cancellationPolicies.cancellationPolicy)
          ? convertToArray(room_info.Activity.cancellationPolicies.cancellationPolicy[0])
          : convertToArray(room_info.Activity.cancellationPolicies.cancellationPolicy);

        console.log('cancel',this.cancellation_policy.length);
        console.log('canceldata',this.cancellation_policy);

        let tripIid = this.allBookingDetails.trip_id;
        let agent_ref = this.allBookingDetails.agent_reference;
        let username = res.userDetails.username;
        let total_sale = this.allBookingDetails.markup_price;
        let booking_currency = this.allBookingDetails.booking_currency;
        let supplier_price = this.allBookingDetails.supplier_price;

        this.bookingDetailForm.patchValue({
          trip_id: tripIid,
          booked_date: res.data.created,
          reference:agent_ref,
          total_sale:total_sale,
          booking_currency:booking_currency,
          net_amount:supplier_price,
          trip_status:status,
          ticket_user:username,
        });



      })
    }
  sendVoucherMail(modalId: any) {
    this.modalService.open(modalId);
  }
  closeModal(modalId: any) {
    this.modalService.close(modalId);
  }
  showVoucher() {
    this.displayVoucher = true;
  }
  showInvoice() {
    this.displayInvoice = true;
  }
  cancelTicket = () => {
    let ticket: any = {};
    ticket.activity = JSON.parse(this.allBookingDetails.activity_details[0].room_info);
    ticket.activitySearchCriteria = JSON.parse(this.allBookingDetails.activity_details[0].search_criteria);
    ticket.tripId = this.allBookingDetails.trip_id;
    this.cancelBookingLoader = true;

    this.activitySearchService.orderCancelRequest(ticket)
      .subscribe((order: any) => {
        if (order.hasOwnProperty("type") && order.type === "error") {
          this.toastr.error(`Something went wrong at our end. Err: ${order.msg}`, `Oops!`, {
            timeOut: 10000,
            progressBar: false,

            positionClass: 'toast-bottom-right'
          });
          this.cancelBookingLoader = false;
        } else {
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
    let ticket: any = {};
    ticket.activity = JSON.parse(this.allBookingDetails.activity_details[0].room_info);
    ticket.activitySearchCriteria = JSON.parse(this.allBookingDetails.activity_details[0].search_criteria);
    ticket.tripId = this.allBookingDetails.trip_id;
    this.cancelBookingLoader = true;

    this.activitySearchService.orderReteriveRequest(ticket)
      .subscribe((order: any) => {
        if (order.hasOwnProperty("type") && order.type === "error") {
          this.toastr.error(`Something went wrong at our end. Err: ${order.msg}`, `Oops!`, {
            timeOut: 10000,
            progressBar: false,

            positionClass: 'toast-bottom-right'
          });
          this.cancelBookingLoader = false;
        } else {
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
    this.activitySearchService.activitySendVoucher(datas).subscribe( (resps: any) =>
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
