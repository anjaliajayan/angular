import { ToastrService } from 'ngx-toastr';
import { CarSearchService } from './../../../shared/services/car.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BookingsService } from 'src/app/shared/services';
import { convertToArray } from 'src/app/shared/utils/array.helper';
import { ModalService } from '../../_modal';


@Component({
  selector: 'app-car-booking-details',
  templateUrl: './car-booking-details.component.html',
  styleUrls: ['./car-booking-details.component.scss']
})
export class CarBookingDetailsComponent implements OnInit {
  @ViewChild('myTable') table;
  bookingTrip_id: any;
  bookingDetailsLoader: boolean = false;
  bookUsername: any;
  supplierName: any;
  cancellation_policy: any;
  newTravellerData: any = [];
  newContactDetailData: any = [];
  newTransactionData: any = [];
  transactionsData: any = [];
  carDetail: any = [];
  allBookingDetails: any = [];
  onCancelTicket:boolean = false;
  onOrderReterive:boolean = false;
  allUserDetails: any = [];
  issueTicketLoader: boolean = false;
  airDocReIssueTicketLoader: boolean = false;
  remarks: any = [];
  hotelFlightFlag:boolean = false;
  displayVoucher: boolean = false;
  cancelBookingLoader: boolean = false;
  voucherForm:FormGroup;
  voucher:boolean = false;
  displayInvoice: boolean = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    public bookingService: BookingsService,
    private carSearchService: CarSearchService,
    private toastr: ToastrService,
    private modalService: ModalService) {
      this.route.params.subscribe(params => {
       // console.log("params::::::", params);
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
        console.log(this.allBookingDetails);
        // console.log(this.allBookingDetails.bookings_hotel);
        let carDetail = this.allBookingDetails.car_details;
        let status = this.allBookingDetails.booking_status;
        let tripIid = this.allBookingDetails.trip_id;
        let agent_ref = this.allBookingDetails.agent_reference;
        let username = res.userDetails.username;
        let total_sale = this.allBookingDetails.markup_price;
        let booking_currency = this.allBookingDetails.booking_currency;
        let supplier_price = this.allBookingDetails.supplier_price;

        let room_info = JSON.parse(this.allBookingDetails.car_details[0].room_info);
        let searchCriteria = JSON.parse(this.allBookingDetails.car_details[0].search_criteria);
        console.log("room_info",room_info);
        let cancelPolicy = room_info.Cars.Programs.Program.cancellationPolicies.cancellationPolicy;
        this.carDetail= !Array.isArray(carDetail)? convertToArray(carDetail):carDetail;
        this.cancellation_policy =Array.isArray(cancelPolicy)? convertToArray(cancelPolicy[0]): convertToArray(cancelPolicy);
        let currency = room_info.Cars.bookingcurrency;
        let supplier = room_info.Cars.supplier_code;
        let sale_amount = room_info.Cars.markupPrice;
        let due_amount = room_info.Cars.markupPrice;

        let booking_email = this.allBookingDetails.booking_email;
        if(res.data.booking_status === 'void'){
          this.onCancelTicket = true;
          this.onOrderReterive = true;
        }else{
          this.onCancelTicket = false;
        }
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

        console.log(room_info);

        let pax_name = room_info.Cars.carOccupancy.first_name;


        let traveller_data = {
          'name': pax_name,
          "phone":'999999999',
          "email":booking_email,
          'adults':searchCriteria.adultCount,
          "child":searchCriteria.childCount

        }

        let transaction_data = {
          confimation_no:
            room_info.Cars.carName + " " + room_info.Cars.carCode,
          sale_amount: currency + " " + sale_amount,
          due_net_amount: currency + " " + due_amount,
          supplier: supplier,
          booking_status: status,
          currency: currency
        };


        let car_data = {
          'carName': room_info.Cars.carName,
          "plan":room_info.Cars.car_company_id,
          "startDate":searchCriteria.startDate,
          "startTime":searchCriteria.startTime,
          'endDate':searchCriteria.endDate,
          'endTime':searchCriteria.endTime,
          "cancellation_policy":room_info.Cars.cancellationPolicies

        }

        this.newTravellerData = convertToArray(traveller_data);
        this.carDetail = convertToArray(car_data);
        this.transactionsData = convertToArray(transaction_data);


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
    ticket.car = JSON.parse(this.allBookingDetails.car_details[0].room_info);
    ticket.carSearchCriteria = JSON.parse(this.allBookingDetails.car_details[0].search_criteria);
    ticket.tripId = this.allBookingDetails.trip_id;
    this.cancelBookingLoader = true;

    this.carSearchService.orderCancelRequest(ticket)
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
    ticket.cars = JSON.parse(this.allBookingDetails.car_details[0].room_info);
    ticket.carsSearchCriteria = JSON.parse(this.allBookingDetails.car_details[0].search_criteria);
    ticket.tripId = this.allBookingDetails.trip_id;
    this.cancelBookingLoader = true;

    this.carSearchService.orderReteriveRequest(ticket)
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
    this.carSearchService.carSendVoucher(datas).subscribe( (resps: any) =>
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
