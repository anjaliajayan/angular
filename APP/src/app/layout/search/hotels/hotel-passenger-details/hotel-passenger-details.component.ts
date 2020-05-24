import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HotelService } from './../../../../shared/services/hotels.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { ToastrService } from 'ngx-toastr';
import { prepareGlobals } from 'src/app/shared/utils/common';
import { Globals } from 'src/app/shared/utils/globals';

declare const $: any;

@Component({
  selector: 'app-hotel-passenger-details',
  templateUrl: './hotel-passenger-details.component.html',
  styleUrls: ['./hotel-passenger-details.component.scss']
})
export class HotelPassengerDetailsComponent implements OnInit {
  @Input() showPassengerDetail: boolean;
  @Input() blockedRoom: any;
  @Input() selectedHotel:any;
  adtPax: any;
  chdPax: any;
  hotel: any;
  searchCriteria:any;
  hotelPassengerForm:FormGroup;
  firstRoomOccupancy:any = [];
  secondRoomOccupancy:any = [];
  thirdRoomOccupancy:any =[];
  fourthRoomOccupancy:any =[];
  fifthRoomOccupancy:any = [];
  sixthRoomOccupancy:any = [];
  seventhRoomOccupancy:any = [];
  eighthRoomOccupancy:any= [];

  firstRoomPax: number;
  secondRoomPax: number;
  thirdRoomPax: number;
  fourthRoomPax:number;
  fifthRoomPax:number;
  sixthRoomPax:number;
  seventhRoomPax:number;
  eighthRoomPax:number;

  roomsForPolicy:any;
  cancelPoicy:any;
  roomNo: any;
  roomOnChd: any = [];
  roomTwoChd: any = [];
  roomThirdChd: any = [];
  roomFourChd:any = [];
  roomFiveChd:any = [];
  roomSixChd:any = [];
  roomSevenChd:any = [];
  roomEightChd:any = [];
  chdAges: any=[];
  submitted=false;
  clickAble = true;
  bookHotelSpinner =false;
  // user and orgnization
  userInfo: any = {};
  globals: Globals;

  constructor(
    private HotelService: HotelService,
    private fb: FormBuilder,
    private router: Router,
    private CommonService: CommonService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
     // get current urer and orginization
     this.globals = prepareGlobals();
    //  this.userInfo = {
    //    username: this.globals.getUserUsername(),
    //    email: this.globals.getUserEmail()
    //  }
     console.log('User inforamtion',this.globals.getUser());


     $(".ui.dropdown").dropdown();

     // get search criteria and cancel policy to show
    this.searchCriteria = this.blockedRoom.result.search_criteria;
    this.hotel = this.blockedRoom.result.hotel;
    const policyRoom = this.hotel.room;
    const cancelPolicy = Array.isArray(policyRoom)? policyRoom[0].cancel_policy : policyRoom.cancel_policy;
    this.cancelPoicy = Array.isArray(cancelPolicy)? cancelPolicy: Array(cancelPolicy);
    this.roomsForPolicy = Array.isArray(this.blockedRoom.result.hotel.room)!=true? Array(this.blockedRoom.result.hotel.room) : this.blockedRoom.result.hotel.room;
    this.roomNo = this.searchCriteria.no_of_rooms;
    const adts: String = this.searchCriteria.adults_per_room.toString();
    const chds: String = this.searchCriteria.children_per_room.toString();

    // console.log("blocked room hotel",this.blockedRoom);
    const chdAgeString = this.searchCriteria.ca.toString();
    this.chdAges = chdAgeString.split('&amp;');
    // console.log("chdAges",this.chdAges);

      for(let j=0; j<=this.chdAges.length; j++){
        const ageVal = String(this.chdAges[j]);
        const checkStr = 'ca1';
        // console.log("ageVal",ageVal.indexOf(checkStr));

        if(ageVal.indexOf('ca1')!=-1){
          this.roomOnChd.push(this.chdAges[j]);
         }
         if(ageVal.indexOf('ca2')!=-1){
          this.roomTwoChd.push(this.chdAges[j]);
         }
         if(ageVal.indexOf('ca3')!=-1){
          this.roomThirdChd.push(this.chdAges[j]);
         }
         if(ageVal.indexOf('ca4')!=-1){
          this.roomFourChd.push(this.chdAges[j]);
         }
         if(ageVal.indexOf('ca5')!=-1){
          this.roomFiveChd.push(this.chdAges[j]);
         }
         if(ageVal.indexOf('ca6')!=-1){
          this.roomSixChd.push(this.chdAges[j]);
         }
         if(ageVal.indexOf('ca7')!=-1){
          this.roomSevenChd.push(this.chdAges[j]);
         }
         if(ageVal.indexOf('ca8')!=-1){
          this.roomEightChd.push(this.chdAges[j]);
         }
      }
    this.adtPax = (adts.indexOf(',') != -1) ? adts.split(',') : adts;
    this.chdPax = (chds.indexOf(',') != -1) ? chds.split(',') : chds;

    // console.log("adt", this.adtPax, "chdPax", this.chdPax);

    this.firstRoomPax = (parseInt(this.adtPax[0]));
    this.secondRoomPax = (parseInt(this.adtPax[1]));
    this.thirdRoomPax = (parseInt(this.adtPax[2]));
    this.fourthRoomPax = (parseInt(this.adtPax[3]));
    this.fifthRoomPax = (parseInt(this.adtPax[4]));
    this.sixthRoomPax = (parseInt(this.adtPax[5]));
    this.seventhRoomPax = (parseInt(this.adtPax[6]));
    this.eighthRoomPax = (parseInt(this.adtPax[7]));


    // console.log("blocked", this.blockedRoom);
    this.hotelPassengerForm = this.fb.group({
      r1_pax1_solutation: [''], r1_pax1_firstName: [''], r1_pax1_lastName: [''], r1_pax1_phone: [''], r1_pax1_email: [''],
      r1_pax2_solutation: [''], r1_pax2_firstName: [''], r1_pax2_lastName: [''], r1_pax2_phone: [''], r1_pax2_email: [''],
      r1_pax3_solutation: [''], r1_pax3_firstName: [''], r1_pax3_lastName: [''], r1_pax3_phone: [''], r1_pax3_email: [''],
      r1_pax4_solutation: [''], r1_pax4_firstName: [''], r1_pax4_lastName: [''], r1_pax4_phone: [''], r1_pax4_email: [''],
      r1_pax5_solutation: [''], r1_pax5_firstName: [''], r1_pax5_lastName: [''], r1_pax5_phone: [''], r1_pax5_email: [''],

      r1_ch1_solutation: [''], r1_ch1_firstName: [''], r1_ch1_lastName: [''], r1_ch1_phone: [''], r1_ch1_email: [''],r1_ch1_age:[''],
      r1_ch2_solutation: [''], r1_ch2_firstName: [''], r1_ch2_lastName: [''], r1_ch2_phone: [''], r1_ch2_email: [''],r1_ch2_age:[''],
      r1_ch3_solutation: [''], r1_ch3_firstName: [''], r1_ch3_lastName: [''], r1_ch3_phone: [''], r1_ch3_email: [''],r1_ch3_age:[''],
      r1_ch4_solutation: [''], r1_ch4_firstName: [''], r1_ch4_lastName: [''], r1_ch4_phone: [''], r1_ch4_email: [''],r1_ch4_age:[''],
      r1_ch5_solutation: [''], r1_ch5_firstName: [''], r1_ch5_lastName: [''], r1_ch5_phone: [''], r1_ch5_email: [''],r1_ch5_age:[''],

      r2_pax1_solutation: [''], r2_pax1_firstName: [''], r2_pax1_lastName: [''], r2_pax1_phone: [''], r2_pax1_email: [''],
      r2_pax2_solutation: [''], r2_pax2_firstName: [''], r2_pax2_lastName: [''], r2_pax2_phone: [''], r2_pax2_email: [''],
      r2_pax3_solutation: [''], r2_pax3_firstName: [''], r2_pax3_lastName: [''], r2_pax3_phone: [''], r2_pax3_email: [''],
      r2_pax4_solutation: [''], r2_pax4_firstName: [''], r2_pax4_lastName: [''], r2_pax4_phone: [''], r2_pax4_email: [''],
      r2_pax5_solutation: [''], r2_pax5_firstName: [''], r2_pax5_lastName: [''], r2_pax5_phone: [''], r2_pax5_email: [''],

      r2_ch1_solutation: [''], r2_ch1_firstName: [''], r2_ch1_lastName: [''], r2_ch1_phone: [''], r2_ch1_email: [''],r2_ch1_age:[''],
      r2_ch2_solutation: [''], r2_ch2_firstName: [''], r2_ch2_lastName: [''], r2_ch2_phone: [''], r2_ch2_email: [''],r2_ch2_age:[''],
      r2_ch3_solutation: [''], r2_ch3_firstName: [''], r2_ch3_lastName: [''], r2_ch3_phone: [''], r2_ch3_email: [''],r2_ch3_age:[''],
      r2_ch4_solutation: [''], r2_ch4_firstName: [''], r2_ch4_lastName: [''], r2_ch4_phone: [''], r2_ch4_email: [''],r2_ch4_age:[''],
      r2_ch5_solutation: [''], r2_ch5_firstName: [''], r2_ch5_lastName: [''], r2_ch5_phone: [''], r2_ch5_email: [''],r2_ch5_age:[''],
      // room 3
      r3_pax1_solutation: [''], r3_pax1_firstName: [''], r3_pax1_lastName: [''], r3_pax1_phone: [''], r3_pax1_email: [''],
      r3_pax2_solutation: [''], r3_pax2_firstName: [''], r3_pax2_lastName: [''], r3_pax2_phone: [''], r3_pax2_email: [''],
      r3_pax3_solutation: [''], r3_pax3_firstName: [''], r3_pax3_lastName: [''], r3_pax3_phone: [''], r3_pax3_email: [''],
      r3_pax4_solutation: [''], r3_pax4_firstName: [''], r3_pax4_lastName: [''], r3_pax4_phone: [''], r3_pax4_email: [''],
      r3_pax5_solutation: [''], r3_pax5_firstName: [''], r3_pax5_lastName: [''], r3_pax5_phone: [''], r3_pax5_email: [''],

      r3_ch1_solutation: [''], r3_ch1_firstName: [''], r3_ch1_lastName: [''], r3_ch1_phone: [''], r3_ch1_email: [''],r3_ch1_age:[''],
      r3_ch2_solutation: [''], r3_ch2_firstName: [''], r3_ch2_lastName: [''], r3_ch2_phone: [''], r3_ch2_email: [''],r3_ch2_age:[''],
      r3_ch3_solutation: [''], r3_ch3_firstName: [''], r3_ch3_lastName: [''], r3_ch3_phone: [''], r3_ch3_email: [''],r3_ch3_age:[''],
      r3_ch4_solutation: [''], r3_ch4_firstName: [''], r3_ch4_lastName: [''], r3_ch4_phone: [''], r3_ch4_email: [''],r3_ch4_age:[''],
      r3_ch5_solutation: [''], r3_ch5_firstName: [''], r3_ch5_lastName: [''], r3_ch5_phone: [''], r3_ch5_email: [''],r3_ch5_age:[''],
      // room 4
      r4_pax1_solutation: [''], r4_pax1_firstName: [''], r4_pax1_lastName: [''], r4_pax1_phone: [''], r4_pax1_email: [''],
      r4_pax2_solutation: [''], r4_pax2_firstName: [''], r4_pax2_lastName: [''], r4_pax2_phone: [''], r4_pax2_email: [''],
      r4_pax3_solutation: [''], r4_pax3_firstName: [''], r4_pax3_lastName: [''], r4_pax3_phone: [''], r4_pax3_email: [''],
      r4_pax4_solutation: [''], r4_pax4_firstName: [''], r4_pax4_lastName: [''], r4_pax4_phone: [''], r4_pax4_email: [''],
      r4_pax5_solutation: [''], r4_pax5_firstName: [''], r4_pax5_lastName: [''], r4_pax5_phone: [''], r4_pax5_email: [''],
      r4_ch1_solutation: [''], r4_ch1_firstName: [''], r4_ch1_lastName: [''], r4_ch1_phone: [''], r4_ch1_email: [''],r4_ch1_age:[''],
      r4_ch2_solutation: [''], r4_ch2_firstName: [''], r4_ch2_lastName: [''], r4_ch2_phone: [''], r4_ch2_email: [''],r4_ch2_age:[''],
      r4_ch3_solutation: [''], r4_ch3_firstName: [''], r4_ch3_lastName: [''], r4_ch3_phone: [''], r4_ch3_email: [''],r4_ch3_age:[''],
      r4_ch4_solutation: [''], r4_ch4_firstName: [''], r4_ch4_lastName: [''], r4_ch4_phone: [''], r4_ch4_email: [''],r4_ch4_age:[''],
      r4_ch5_solutation: [''], r4_ch5_firstName: [''], r4_ch5_lastName: [''], r4_ch5_phone: [''], r4_ch5_email: [''],r4_ch5_age:[''],
      // room 5
      r5_pax1_solutation: [''], r5_pax1_firstName: [''], r5_pax1_lastName: [''], r5_pax1_phone: [''], r5_pax1_email: [''],
      r5_pax2_solutation: [''], r5_pax2_firstName: [''], r5_pax2_lastName: [''], r5_pax2_phone: [''], r5_pax2_email: [''],
      r5_pax3_solutation: [''], r5_pax3_firstName: [''], r5_pax3_lastName: [''], r5_pax3_phone: [''], r5_pax3_email: [''],
      r5_pax4_solutation: [''], r5_pax4_firstName: [''], r5_pax4_lastName: [''], r5_pax4_phone: [''], r5_pax4_email: [''],
      r5_pax5_solutation: [''], r5_pax5_firstName: [''], r5_pax5_lastName: [''], r5_pax5_phone: [''], r5_pax5_email: [''],
      r5_ch1_solutation: [''], r5_ch1_firstName: [''], r5_ch1_lastName: [''], r5_ch1_phone: [''], r5_ch1_email: [''],r5_ch1_age:[''],
      r5_ch2_solutation: [''], r5_ch2_firstName: [''], r5_ch2_lastName: [''], r5_ch2_phone: [''], r5_ch2_email: [''],r5_ch2_age:[''],
      r5_ch3_solutation: [''], r5_ch3_firstName: [''], r5_ch3_lastName: [''], r5_ch3_phone: [''], r5_ch3_email: [''],r5_ch3_age:[''],
      r5_ch4_solutation: [''], r5_ch4_firstName: [''], r5_ch4_lastName: [''], r5_ch4_phone: [''], r5_ch4_email: [''],r5_ch4_age:[''],
      r5_ch5_solutation: [''], r5_ch5_firstName: [''], r5_ch5_lastName: [''], r5_ch5_phone: [''], r5_ch5_email: [''],r5_ch5_age:[''],
      // room 6
      r6_pax1_solutation: [''], r6_pax1_firstName: [''], r6_pax1_lastName: [''], r6_pax1_phone: [''], r6_pax1_email: [''],
      r6_pax2_solutation: [''], r6_pax2_firstName: [''], r6_pax2_lastName: [''], r6_pax2_phone: [''], r6_pax2_email: [''],
      r6_pax3_solutation: [''], r6_pax3_firstName: [''], r6_pax3_lastName: [''], r6_pax3_phone: [''], r6_pax3_email: [''],
      r6_pax4_solutation: [''], r6_pax4_firstName: [''], r6_pax4_lastName: [''], r6_pax4_phone: [''], r6_pax4_email: [''],
      r6_pax5_solutation: [''], r6_pax5_firstName: [''], r6_pax5_lastName: [''], r6_pax5_phone: [''], r6_pax5_email: [''],
      r6_ch1_solutation: [''], r6_ch1_firstName: [''], r6_ch1_lastName: [''], r6_ch1_phone: [''], r6_ch1_email: [''],r6_ch1_age:[''],
      r6_ch2_solutation: [''], r6_ch2_firstName: [''], r6_ch2_lastName: [''], r6_ch2_phone: [''], r6_ch2_email: [''],r6_ch2_age:[''],
      r6_ch3_solutation: [''], r6_ch3_firstName: [''], r6_ch3_lastName: [''], r6_ch3_phone: [''], r6_ch3_email: [''],r6_ch3_age:[''],
      r6_ch4_solutation: [''], r6_ch4_firstName: [''], r6_ch4_lastName: [''], r6_ch4_phone: [''], r6_ch4_email: [''],r6_ch4_age:[''],
      r6_ch5_solutation: [''], r6_ch5_firstName: [''], r6_ch5_lastName: [''], r6_ch5_phone: [''], r6_ch5_email: [''],r6_ch5_age:[''],
      // room 7
      r7_pax1_solutation: [''], r7_pax1_firstName: [''], r7_pax1_lastName: [''], r7_pax1_phone: [''], r7_pax1_email: [''],
      r7_pax2_solutation: [''], r7_pax2_firstName: [''], r7_pax2_lastName: [''], r7_pax2_phone: [''], r7_pax2_email: [''],
      r7_pax3_solutation: [''], r7_pax3_firstName: [''], r7_pax3_lastName: [''], r7_pax3_phone: [''], r7_pax3_email: [''],
      r7_pax4_solutation: [''], r7_pax4_firstName: [''], r7_pax4_lastName: [''], r7_pax4_phone: [''], r7_pax4_email: [''],
      r7_pax5_solutation: [''], r7_pax5_firstName: [''], r7_pax5_lastName: [''], r7_pax5_phone: [''], r7_pax5_email: [''],
      r7_ch1_solutation: [''], r7_ch1_firstName: [''], r7_ch1_lastName: [''], r7_ch1_phone: [''], r7_ch1_email: [''],r7_ch1_age:[''],
      r7_ch2_solutation: [''], r7_ch2_firstName: [''], r7_ch2_lastName: [''], r7_ch2_phone: [''], r7_ch2_email: [''],r7_ch2_age:[''],
      r7_ch3_solutation: [''], r7_ch3_firstName: [''], r7_ch3_lastName: [''], r7_ch3_phone: [''], r7_ch3_email: [''],r7_ch3_age:[''],
      r7_ch4_solutation: [''], r7_ch4_firstName: [''], r7_ch4_lastName: [''], r7_ch4_phone: [''], r7_ch4_email: [''],r7_ch4_age:[''],
      r7_ch5_solutation: [''], r7_ch5_firstName: [''], r7_ch5_lastName: [''], r7_ch5_phone: [''], r7_ch5_email: [''],r7_ch5_age:[''],
       // room 8
       r8_pax1_solutation: [''], r8_pax1_firstName: [''], r8_pax1_lastName: [''], r8_pax1_phone: [''], r8_pax1_email: [''],
       r8_pax2_solutation: [''], r8_pax2_firstName: [''], r8_pax2_lastName: [''], r8_pax2_phone: [''], r8_pax2_email: [''],
       r8_pax3_solutation: [''], r8_pax3_firstName: [''], r8_pax3_lastName: [''], r8_pax3_phone: [''], r8_pax3_email: [''],
       r8_pax4_solutation: [''], r8_pax4_firstName: [''], r8_pax4_lastName: [''], r8_pax4_phone: [''], r8_pax4_email: [''],
       r8_pax5_solutation: [''], r8_pax5_firstName: [''], r8_pax5_lastName: [''], r8_pax5_phone: [''], r8_pax5_email: [''],
       r8_ch1_solutation: [''], r8_ch1_firstName: [''], r8_ch1_lastName: [''], r8_ch1_phone: [''], r8_ch1_email: [''],r8_ch1_age:[''],
       r8_ch2_solutation: [''], r8_ch2_firstName: [''], r8_ch2_lastName: [''], r8_ch2_phone: [''], r8_ch2_email: [''],r8_ch2_age:[''],
       r8_ch3_solutation: [''], r8_ch3_firstName: [''], r8_ch3_lastName: [''], r8_ch3_phone: [''], r8_ch3_email: [''],r8_ch3_age:[''],
       r8_ch4_solutation: [''], r8_ch4_firstName: [''], r8_ch4_lastName: [''], r8_ch4_phone: [''], r8_ch4_email: [''],r8_ch4_age:[''],
       r8_ch5_solutation: [''], r8_ch5_firstName: [''], r8_ch5_lastName: [''], r8_ch5_phone: [''], r8_ch5_email: [''],r8_ch5_age:[''],


      email: ['',[Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      agentFirstName: [''],
      remarks: [''],
      rulesCondition: [''],
      reserveCondition: ['']
    });
  }
   // convenience getter for easy access to form fields
   get f() { return this.hotelPassengerForm.controls; }

  bookRoom() {
    this.submitted=true;     
    // stop here if form is invalid
    if (this.hotelPassengerForm.invalid) {
        return;
    }
    this.bookHotelSpinner=true;

    // add the user information
    this.blockedRoom.result.hotel.bookingEmail = this.hotelPassengerForm.controls.email.value;
    this.blockedRoom.result.hotel.agentReference = this.hotelPassengerForm.controls.agentFirstName.value;
    this.blockedRoom.result.hotel.bookingComment = this.hotelPassengerForm.controls.remarks.value;

    // console.log(this.blockedRoom.result.hotel);
    this.searchCriteria.hotel = this.blockedRoom.result.hotel;
    this.searchCriteria.hotel.details = this.selectedHotel;
    // adding passenger detail
    for (let i = 1; i <= this.roomNo; i++) {
      let paxInfo: any;
      if (i == 1) {
        for (let pax = 1; pax <= this.firstRoomPax; pax++) {
          if (pax == 1) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r1_pax1_firstName.value,
              last_name: this.hotelPassengerForm.controls.r1_pax1_lastName.value,
              salutation: this.hotelPassengerForm.controls.r1_pax1_solutation.value,
              phone: this.hotelPassengerForm.controls.r1_pax1_phone.value,
            };
            this.firstRoomOccupancy.push(paxInfo);
          }
          if (pax == 2) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r1_pax2_firstName.value,
              last_name: this.hotelPassengerForm.controls.r1_pax2_lastName.value,
              salutation: this.hotelPassengerForm.controls.r1_pax2_solutation.value,
              phone: this.hotelPassengerForm.controls.r1_pax2_phone.value,
            };
            this.firstRoomOccupancy.push(paxInfo);
          }
          if (pax == 3) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r1_pax3_firstName.value,
              last_name: this.hotelPassengerForm.controls.r1_pax3_lastName.value,
              salutation: this.hotelPassengerForm.controls.r1_pax3_solutation.value,
              phone: this.hotelPassengerForm.controls.r1_pax3_phone.value,
            };
            this.firstRoomOccupancy.push(paxInfo);
          }
          if (pax == 4) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r1_pax4_firstName.value,
              last_name: this.hotelPassengerForm.controls.r1_pax4_lastName.value,
              salutation: this.hotelPassengerForm.controls.r1_pax4_solutation.value,
              phone: this.hotelPassengerForm.controls.r1_pax4_phone.value,
            };
            this.firstRoomOccupancy.push(paxInfo);
          }
          if (pax == 5) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r1_pax5_firstName.value,
              last_name: this.hotelPassengerForm.controls.r1_pax5_lastName.value,
              salutation: this.hotelPassengerForm.controls.r1_pax5_solutation.value,
              phone: this.hotelPassengerForm.controls.r1_pax5_phone.value,
            };
            this.firstRoomOccupancy.push(paxInfo);
          }
        }

        for(let chd=1; chd<=this.roomOnChd.length; chd++){
          if(chd == 1){
            paxInfo = {
              age:Number(this.getAge(i,(chd-1))),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r1_ch1_firstName.value,
              last_name: this.hotelPassengerForm.controls.r1_ch1_lastName.value,
              salutation: this.hotelPassengerForm.controls.r1_ch1_solutation.value,
              phone: this.hotelPassengerForm.controls.r1_ch1_phone.value,
            };
            this.firstRoomOccupancy.push(paxInfo);
          }
          if(chd == 2){
            paxInfo = {
              age: Number(this.getAge(i,(chd-1))),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r1_ch2_firstName.value,
              last_name: this.hotelPassengerForm.controls.r1_ch2_lastName.value,
              salutation: this.hotelPassengerForm.controls.r1_ch2_solutation.value,
              phone: this.hotelPassengerForm.controls.r1_ch2_phone.value,
            };
            this.firstRoomOccupancy.push(paxInfo);
          }
          if(chd == 3){
            paxInfo = {
              age: Number(this.getAge(i,(chd-1))),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r1_ch3_firstName.value,
              last_name: this.hotelPassengerForm.controls.r1_ch3_lastName.value,
              salutation: this.hotelPassengerForm.controls.r1_ch3_solutation.value,
              phone: this.hotelPassengerForm.controls.r1_ch3_phone.value,
            };
            this.firstRoomOccupancy.push(paxInfo);
          }
          if(chd == 4){
            paxInfo = {
              age:Number(this.getAge(i,(chd-1))),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r1_ch4_firstName.value,
              last_name: this.hotelPassengerForm.controls.r1_ch4_lastName.value,
              salutation: this.hotelPassengerForm.controls.r1_ch4_solutation.value,
              phone: this.hotelPassengerForm.controls.r1_ch4_phone.value,
            };
            this.firstRoomOccupancy.push(paxInfo);
          }
          if(chd == 5){
            paxInfo = {
              age:Number(this.getAge(i,(chd-1))),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r1_ch5_firstName.value,
              last_name: this.hotelPassengerForm.controls.r1_ch5_lastName.value,
              salutation: this.hotelPassengerForm.controls.r1_ch5_solutation.value,
              phone: this.hotelPassengerForm.controls.r1_ch5_phone.value,
            };
            this.firstRoomOccupancy.push(paxInfo);
          }
        }

      }
      // second room
      if (i == 2) {
        for (let pax = 1; pax <= this.secondRoomPax; pax++) {
          if (pax == 1) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r2_pax1_firstName.value,
              last_name: this.hotelPassengerForm.controls.r2_pax1_lastName.value,
              salutation: this.hotelPassengerForm.controls.r2_pax1_solutation.value,
              phone: this.hotelPassengerForm.controls.r2_pax1_phone.value,
            };
            this.secondRoomOccupancy.push(paxInfo);
          }
          if (pax == 2) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r2_pax2_firstName.value,
              last_name: this.hotelPassengerForm.controls.r2_pax2_lastName.value,
              salutation: this.hotelPassengerForm.controls.r2_pax2_solutation.value,
              phone: this.hotelPassengerForm.controls.r2_pax2_phone.value,
            };
            this.secondRoomOccupancy.push(paxInfo);
          }
          if (pax == 3) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r2_pax3_firstName.value,
              last_name: this.hotelPassengerForm.controls.r2_pax3_lastName.value,
              salutation: this.hotelPassengerForm.controls.r2_pax3_solutation.value,
              phone: this.hotelPassengerForm.controls.r1_pax2_phone.value,
            };
            this.secondRoomOccupancy.push(paxInfo);
          }
          if (pax == 4) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r2_pax4_firstName.value,
              last_name: this.hotelPassengerForm.controls.r2_pax4_lastName.value,
              salutation: this.hotelPassengerForm.controls.r2_pax4_solutation.value,
              phone: this.hotelPassengerForm.controls.r2_pax4_phone.value,
            };
            this.secondRoomOccupancy.push(paxInfo);
          }
          if (pax == 5) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r2_pax5_firstName.value,
              last_name: this.hotelPassengerForm.controls.r2_pax5_lastName.value,
              salutation: this.hotelPassengerForm.controls.r2_pax5_solutation.value,
              phone: this.hotelPassengerForm.controls.r2_pax5_phone.value,
            };
            this.secondRoomOccupancy.push(paxInfo);
          }

        }
        for(let chd=0; chd<=this.roomTwoChd.length; chd++){
          if(chd == 1){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r2_ch1_firstName.value,
              last_name: this.hotelPassengerForm.controls.r2_ch1_lastName.value,
              salutation: this.hotelPassengerForm.controls.r2_ch1_solutation.value,
              phone: this.hotelPassengerForm.controls.r2_ch1_phone.value,
            };
            this.secondRoomOccupancy.push(paxInfo);
          }
          if(chd == 2){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r2_ch2_firstName.value,
              last_name: this.hotelPassengerForm.controls.r2_ch2_lastName.value,
              salutation: this.hotelPassengerForm.controls.r2_ch2_solutation.value,
              phone: this.hotelPassengerForm.controls.r2_ch2_phone.value,
            };
            this.secondRoomOccupancy.push(paxInfo);
          }
          if(chd == 3){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r2_ch3_firstName.value,
              last_name: this.hotelPassengerForm.controls.r2_ch3_lastName.value,
              salutation: this.hotelPassengerForm.controls.r2_ch3_solutation.value,
              phone: this.hotelPassengerForm.controls.r2_ch3_phone.value,
            };
            this.secondRoomOccupancy.push(paxInfo);
          }
          if(chd == 4){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r2_ch4_firstName.value,
              last_name: this.hotelPassengerForm.controls.r2_ch4_lastName.value,
              salutation: this.hotelPassengerForm.controls.r2_ch4_solutation.value,
              phone: this.hotelPassengerForm.controls.r2_ch4_phone.value,
            };
            this.secondRoomOccupancy.push(paxInfo);
          }
          if(chd == 5){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r2_ch5_firstName.value,
              last_name: this.hotelPassengerForm.controls.r2_ch5_lastName.value,
              salutation: this.hotelPassengerForm.controls.r2_ch5_solutation.value,
              phone: this.hotelPassengerForm.controls.r2_ch5_phone.value,
            };
            this.secondRoomOccupancy.push(paxInfo);
          }
        }
      }
      // third room
      if (i == 3) {
        for (let pax = 1; pax <= this.thirdRoomPax; pax++) {
          if (pax == 1) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r3_pax1_firstName.value,
              last_name: this.hotelPassengerForm.controls.r3_pax1_lastName.value,
              salutation: this.hotelPassengerForm.controls.r3_pax1_solutation.value,
              phone: this.hotelPassengerForm.controls.r3_pax1_phone.value,
            };
            this.thirdRoomOccupancy.push(paxInfo);
          }
          if (pax == 2) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r3_pax2_firstName.value,
              last_name: this.hotelPassengerForm.controls.r3_pax2_lastName.value,
              salutation: this.hotelPassengerForm.controls.r3_pax2_solutation.value,
              phone: this.hotelPassengerForm.controls.r3_pax2_phone.value,
            };
            this.thirdRoomOccupancy.push(paxInfo);
          }
          if (pax == 3) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r3_pax3_firstName.value,
              last_name: this.hotelPassengerForm.controls.r3_pax3_lastName.value,
              salutation: this.hotelPassengerForm.controls.r3_pax3_solutation.value,
              phone: this.hotelPassengerForm.controls.r3_pax2_phone.value,
            };
            this.thirdRoomOccupancy.push(paxInfo);
          }
          if (pax == 4) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r3_pax4_firstName.value,
              last_name: this.hotelPassengerForm.controls.r3_pax4_lastName.value,
              salutation: this.hotelPassengerForm.controls.r3_pax4_solutation.value,
              phone: this.hotelPassengerForm.controls.r3_pax4_phone.value,
            };
            this.thirdRoomOccupancy.push(paxInfo);
          }
          if (pax == 5) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r3_pax5_firstName.value,
              last_name: this.hotelPassengerForm.controls.r3_pax5_lastName.value,
              salutation: this.hotelPassengerForm.controls.r3_pax5_solutation.value,
              phone: this.hotelPassengerForm.controls.r3_pax5_phone.value,
            };
            this.thirdRoomOccupancy.push(paxInfo);
          }

        }
        for(let chd=0; chd<=this.roomTwoChd.length; chd++){
          if(chd == 1){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r3_ch1_firstName.value,
              last_name: this.hotelPassengerForm.controls.r3_ch1_lastName.value,
              salutation: this.hotelPassengerForm.controls.r3_ch1_solutation.value,
              phone: this.hotelPassengerForm.controls.r3_ch1_phone.value,
            };
            this.thirdRoomOccupancy.push(paxInfo);
          }
          if(chd == 2){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r3_ch2_firstName.value,
              last_name: this.hotelPassengerForm.controls.r3_ch2_lastName.value,
              salutation: this.hotelPassengerForm.controls.r3_ch2_solutation.value,
              phone: this.hotelPassengerForm.controls.r3_ch2_phone.value,
            };
            this.thirdRoomOccupancy.push(paxInfo);
          }
          if(chd == 3){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r3_ch3_firstName.value,
              last_name: this.hotelPassengerForm.controls.r3_ch3_lastName.value,
              salutation: this.hotelPassengerForm.controls.r3_ch3_solutation.value,
              phone: this.hotelPassengerForm.controls.r3_ch3_phone.value,
            };
            this.thirdRoomOccupancy.push(paxInfo);
          }
          if(chd == 4){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r3_ch4_firstName.value,
              last_name: this.hotelPassengerForm.controls.r3_ch4_lastName.value,
              salutation: this.hotelPassengerForm.controls.r3_ch4_solutation.value,
              phone: this.hotelPassengerForm.controls.r3_ch4_phone.value,
            };
            this.thirdRoomOccupancy.push(paxInfo);
          }
          if(chd == 5){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r3_ch5_firstName.value,
              last_name: this.hotelPassengerForm.controls.r3_ch5_lastName.value,
              salutation: this.hotelPassengerForm.controls.r3_ch5_solutation.value,
              phone: this.hotelPassengerForm.controls.r3_ch5_phone.value,
            };
            this.thirdRoomOccupancy.push(paxInfo);
          }
        }
      }
      // fourth room
      if (i == 4) {
        for (let pax = 1; pax <= this.fourthRoomPax; pax++) {
          if (pax == 1) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r4_pax1_firstName.value,
              last_name: this.hotelPassengerForm.controls.r4_pax1_lastName.value,
              salutation: this.hotelPassengerForm.controls.r4_pax1_solutation.value,
              phone: this.hotelPassengerForm.controls.r4_pax1_phone.value,
            };
            this.fourthRoomOccupancy.push(paxInfo);
          }
          if (pax == 2) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r4_pax2_firstName.value,
              last_name: this.hotelPassengerForm.controls.r4_pax2_lastName.value,
              salutation: this.hotelPassengerForm.controls.r4_pax2_solutation.value,
              phone: this.hotelPassengerForm.controls.r4_pax2_phone.value,
            };
            this.fourthRoomOccupancy.push(paxInfo);
          }
          if (pax == 3) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r4_pax3_firstName.value,
              last_name: this.hotelPassengerForm.controls.r4_pax3_lastName.value,
              salutation: this.hotelPassengerForm.controls.r4_pax3_solutation.value,
              phone: this.hotelPassengerForm.controls.r4_pax2_phone.value,
            };
            this.fourthRoomOccupancy.push(paxInfo);
          }
          if (pax == 4) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r4_pax4_firstName.value,
              last_name: this.hotelPassengerForm.controls.r4_pax4_lastName.value,
              salutation: this.hotelPassengerForm.controls.r4_pax4_solutation.value,
              phone: this.hotelPassengerForm.controls.r4_pax4_phone.value,
            };
            this.fourthRoomOccupancy.push(paxInfo);
          }
          if (pax == 5) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r4_pax5_firstName.value,
              last_name: this.hotelPassengerForm.controls.r4_pax5_lastName.value,
              salutation: this.hotelPassengerForm.controls.r4_pax5_solutation.value,
              phone: this.hotelPassengerForm.controls.r4_pax5_phone.value,
            };
            this.fourthRoomOccupancy.push(paxInfo);
          }

        }
        for(let chd=0; chd<=this.roomTwoChd.length; chd++){
          if(chd == 1){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r4_ch1_firstName.value,
              last_name: this.hotelPassengerForm.controls.r4_ch1_lastName.value,
              salutation: this.hotelPassengerForm.controls.r4_ch1_solutation.value,
              phone: this.hotelPassengerForm.controls.r4_ch1_phone.value,
            };
            this.fourthRoomOccupancy.push(paxInfo);
          }
          if(chd == 2){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r4_ch2_firstName.value,
              last_name: this.hotelPassengerForm.controls.r4_ch2_lastName.value,
              salutation: this.hotelPassengerForm.controls.r4_ch2_solutation.value,
              phone: this.hotelPassengerForm.controls.r4_ch2_phone.value,
            };
            this.fourthRoomOccupancy.push(paxInfo);
          }
          if(chd == 3){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r4_ch3_firstName.value,
              last_name: this.hotelPassengerForm.controls.r4_ch3_lastName.value,
              salutation: this.hotelPassengerForm.controls.r4_ch3_solutation.value,
              phone: this.hotelPassengerForm.controls.r4_ch3_phone.value,
            };
            this.fourthRoomOccupancy.push(paxInfo);
          }
          if(chd == 4){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r4_ch4_firstName.value,
              last_name: this.hotelPassengerForm.controls.r4_ch4_lastName.value,
              salutation: this.hotelPassengerForm.controls.r4_ch4_solutation.value,
              phone: this.hotelPassengerForm.controls.r4_ch4_phone.value,
            };
            this.fourthRoomOccupancy.push(paxInfo);
          }
          if(chd == 5){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r4_ch5_firstName.value,
              last_name: this.hotelPassengerForm.controls.r4_ch5_lastName.value,
              salutation: this.hotelPassengerForm.controls.r4_ch5_solutation.value,
              phone: this.hotelPassengerForm.controls.r4_ch5_phone.value,
            };
            this.fourthRoomOccupancy.push(paxInfo);
          }
        }
      }
      // fifth room
      if (i == 5) {
        for (let pax = 1; pax <= this.fifthRoomPax; pax++) {
          if (pax == 1) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r5_pax1_firstName.value,
              last_name: this.hotelPassengerForm.controls.r5_pax1_lastName.value,
              salutation: this.hotelPassengerForm.controls.r5_pax1_solutation.value,
              phone: this.hotelPassengerForm.controls.r5_pax1_phone.value,
            };
            this.fifthRoomOccupancy.push(paxInfo);
          }
          if (pax == 2) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r5_pax2_firstName.value,
              last_name: this.hotelPassengerForm.controls.r5_pax2_lastName.value,
              salutation: this.hotelPassengerForm.controls.r5_pax2_solutation.value,
              phone: this.hotelPassengerForm.controls.r5_pax2_phone.value,
            };
            this.fifthRoomOccupancy.push(paxInfo);
          }
          if (pax == 3) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r5_pax3_firstName.value,
              last_name: this.hotelPassengerForm.controls.r5_pax3_lastName.value,
              salutation: this.hotelPassengerForm.controls.r5_pax3_solutation.value,
              phone: this.hotelPassengerForm.controls.r5_pax2_phone.value,
            };
            this.fifthRoomOccupancy.push(paxInfo);
          }
          if (pax == 4) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r5_pax4_firstName.value,
              last_name: this.hotelPassengerForm.controls.r5_pax4_lastName.value,
              salutation: this.hotelPassengerForm.controls.r5_pax4_solutation.value,
              phone: this.hotelPassengerForm.controls.r5_pax4_phone.value,
            };
            this.fifthRoomOccupancy.push(paxInfo);
          }
          if (pax == 5) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r5_pax5_firstName.value,
              last_name: this.hotelPassengerForm.controls.r5_pax5_lastName.value,
              salutation: this.hotelPassengerForm.controls.r5_pax5_solutation.value,
              phone: this.hotelPassengerForm.controls.r5_pax5_phone.value,
            };
            this.fifthRoomOccupancy.push(paxInfo);
          }

        }
        for(let chd=0; chd<=this.roomTwoChd.length; chd++){
          if(chd == 1){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r5_ch1_firstName.value,
              last_name: this.hotelPassengerForm.controls.r5_ch1_lastName.value,
              salutation: this.hotelPassengerForm.controls.r5_ch1_solutation.value,
              phone: this.hotelPassengerForm.controls.r5_ch1_phone.value,
            };
            this.fifthRoomOccupancy.push(paxInfo);
          }
          if(chd == 2){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r5_ch2_firstName.value,
              last_name: this.hotelPassengerForm.controls.r5_ch2_lastName.value,
              salutation: this.hotelPassengerForm.controls.r5_ch2_solutation.value,
              phone: this.hotelPassengerForm.controls.r5_ch2_phone.value,
            };
            this.fifthRoomOccupancy.push(paxInfo);
          }
          if(chd == 3){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r5_ch3_firstName.value,
              last_name: this.hotelPassengerForm.controls.r5_ch3_lastName.value,
              salutation: this.hotelPassengerForm.controls.r5_ch3_solutation.value,
              phone: this.hotelPassengerForm.controls.r5_ch3_phone.value,
            };
            this.fifthRoomOccupancy.push(paxInfo);
          }
          if(chd == 4){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r5_ch4_firstName.value,
              last_name: this.hotelPassengerForm.controls.r5_ch4_lastName.value,
              salutation: this.hotelPassengerForm.controls.r5_ch4_solutation.value,
              phone: this.hotelPassengerForm.controls.r5_ch4_phone.value,
            };
            this.fifthRoomOccupancy.push(paxInfo);
          }
          if(chd == 5){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r5_ch5_firstName.value,
              last_name: this.hotelPassengerForm.controls.r5_ch5_lastName.value,
              salutation: this.hotelPassengerForm.controls.r5_ch5_solutation.value,
              phone: this.hotelPassengerForm.controls.r5_ch5_phone.value,
            };
            this.fifthRoomOccupancy.push(paxInfo);
          }
        }
      }
      // sixth room
      if (i == 6) {
        for (let pax = 1; pax <= this.sixthRoomPax; pax++) {
          if (pax == 1) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r6_pax1_firstName.value,
              last_name: this.hotelPassengerForm.controls.r6_pax1_lastName.value,
              salutation: this.hotelPassengerForm.controls.r6_pax1_solutation.value,
              phone: this.hotelPassengerForm.controls.r6_pax1_phone.value,
            };
            this.sixthRoomOccupancy.push(paxInfo);
          }
          if (pax == 2) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r6_pax2_firstName.value,
              last_name: this.hotelPassengerForm.controls.r6_pax2_lastName.value,
              salutation: this.hotelPassengerForm.controls.r6_pax2_solutation.value,
              phone: this.hotelPassengerForm.controls.r6_pax2_phone.value,
            };
            this.sixthRoomOccupancy.push(paxInfo);
          }
          if (pax == 3) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r6_pax3_firstName.value,
              last_name: this.hotelPassengerForm.controls.r6_pax3_lastName.value,
              salutation: this.hotelPassengerForm.controls.r6_pax3_solutation.value,
              phone: this.hotelPassengerForm.controls.r6_pax2_phone.value,
            };
            this.sixthRoomOccupancy.push(paxInfo);
          }
          if (pax == 4) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r6_pax4_firstName.value,
              last_name: this.hotelPassengerForm.controls.r6_pax4_lastName.value,
              salutation: this.hotelPassengerForm.controls.r6_pax4_solutation.value,
              phone: this.hotelPassengerForm.controls.r6_pax4_phone.value,
            };
            this.sixthRoomOccupancy.push(paxInfo);
          }
          if (pax == 5) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r6_pax5_firstName.value,
              last_name: this.hotelPassengerForm.controls.r6_pax5_lastName.value,
              salutation: this.hotelPassengerForm.controls.r6_pax5_solutation.value,
              phone: this.hotelPassengerForm.controls.r6_pax5_phone.value,
            };
            this.sixthRoomOccupancy.push(paxInfo);
          }

        }
        for(let chd=0; chd<=this.roomTwoChd.length; chd++){
          if(chd == 1){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r6_ch1_firstName.value,
              last_name: this.hotelPassengerForm.controls.r6_ch1_lastName.value,
              salutation: this.hotelPassengerForm.controls.r6_ch1_solutation.value,
              phone: this.hotelPassengerForm.controls.r6_ch1_phone.value,
            };
            this.sixthRoomOccupancy.push(paxInfo);
          }
          if(chd == 2){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r6_ch2_firstName.value,
              last_name: this.hotelPassengerForm.controls.r6_ch2_lastName.value,
              salutation: this.hotelPassengerForm.controls.r6_ch2_solutation.value,
              phone: this.hotelPassengerForm.controls.r6_ch2_phone.value,
            };
            this.sixthRoomOccupancy.push(paxInfo);
          }
          if(chd == 3){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r6_ch3_firstName.value,
              last_name: this.hotelPassengerForm.controls.r6_ch3_lastName.value,
              salutation: this.hotelPassengerForm.controls.r6_ch3_solutation.value,
              phone: this.hotelPassengerForm.controls.r6_ch3_phone.value,
            };
            this.sixthRoomOccupancy.push(paxInfo);
          }
          if(chd == 4){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r6_ch4_firstName.value,
              last_name: this.hotelPassengerForm.controls.r6_ch4_lastName.value,
              salutation: this.hotelPassengerForm.controls.r6_ch4_solutation.value,
              phone: this.hotelPassengerForm.controls.r6_ch4_phone.value,
            };
            this.sixthRoomOccupancy.push(paxInfo);
          }
          if(chd == 5){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r6_ch5_firstName.value,
              last_name: this.hotelPassengerForm.controls.r6_ch5_lastName.value,
              salutation: this.hotelPassengerForm.controls.r6_ch5_solutation.value,
              phone: this.hotelPassengerForm.controls.r6_ch5_phone.value,
            };
            this.sixthRoomOccupancy.push(paxInfo);
          }
        }
      }
      // seven room
      if (i == 7) {
        for (let pax = 1; pax <= this.seventhRoomPax; pax++) {
          if (pax == 1) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r7_pax1_firstName.value,
              last_name: this.hotelPassengerForm.controls.r7_pax1_lastName.value,
              salutation: this.hotelPassengerForm.controls.r7_pax1_solutation.value,
              phone: this.hotelPassengerForm.controls.r7_pax1_phone.value,
            };
            this.seventhRoomOccupancy.push(paxInfo);
          }
          if (pax == 2) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r7_pax2_firstName.value,
              last_name: this.hotelPassengerForm.controls.r7_pax2_lastName.value,
              salutation: this.hotelPassengerForm.controls.r7_pax2_solutation.value,
              phone: this.hotelPassengerForm.controls.r7_pax2_phone.value,
            };
            this.seventhRoomOccupancy.push(paxInfo);
          }
          if (pax == 3) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r7_pax3_firstName.value,
              last_name: this.hotelPassengerForm.controls.r7_pax3_lastName.value,
              salutation: this.hotelPassengerForm.controls.r7_pax3_solutation.value,
              phone: this.hotelPassengerForm.controls.r7_pax2_phone.value,
            };
            this.seventhRoomOccupancy.push(paxInfo);
          }
          if (pax == 4) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r7_pax4_firstName.value,
              last_name: this.hotelPassengerForm.controls.r7_pax4_lastName.value,
              salutation: this.hotelPassengerForm.controls.r7_pax4_solutation.value,
              phone: this.hotelPassengerForm.controls.r7_pax4_phone.value,
            };
            this.seventhRoomOccupancy.push(paxInfo);
          }
          if (pax == 5) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r7_pax5_firstName.value,
              last_name: this.hotelPassengerForm.controls.r7_pax5_lastName.value,
              salutation: this.hotelPassengerForm.controls.r7_pax5_solutation.value,
              phone: this.hotelPassengerForm.controls.r7_pax5_phone.value,
            };
            this.seventhRoomOccupancy.push(paxInfo);
          }

        }
        for(let chd=0; chd<=this.roomTwoChd.length; chd++){
          if(chd == 1){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r7_ch1_firstName.value,
              last_name: this.hotelPassengerForm.controls.r7_ch1_lastName.value,
              salutation: this.hotelPassengerForm.controls.r7_ch1_solutation.value,
              phone: this.hotelPassengerForm.controls.r7_ch1_phone.value,
            };
            this.seventhRoomOccupancy.push(paxInfo);
          }
          if(chd == 2){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r7_ch2_firstName.value,
              last_name: this.hotelPassengerForm.controls.r7_ch2_lastName.value,
              salutation: this.hotelPassengerForm.controls.r7_ch2_solutation.value,
              phone: this.hotelPassengerForm.controls.r7_ch2_phone.value,
            };
            this.seventhRoomOccupancy.push(paxInfo);
          }
          if(chd == 3){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r7_ch3_firstName.value,
              last_name: this.hotelPassengerForm.controls.r7_ch3_lastName.value,
              salutation: this.hotelPassengerForm.controls.r7_ch3_solutation.value,
              phone: this.hotelPassengerForm.controls.r7_ch3_phone.value,
            };
            this.seventhRoomOccupancy.push(paxInfo);
          }
          if(chd == 4){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r7_ch4_firstName.value,
              last_name: this.hotelPassengerForm.controls.r7_ch4_lastName.value,
              salutation: this.hotelPassengerForm.controls.r7_ch4_solutation.value,
              phone: this.hotelPassengerForm.controls.r7_ch4_phone.value,
            };
            this.seventhRoomOccupancy.push(paxInfo);
          }
          if(chd == 5){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r7_ch5_firstName.value,
              last_name: this.hotelPassengerForm.controls.r7_ch5_lastName.value,
              salutation: this.hotelPassengerForm.controls.r7_ch5_solutation.value,
              phone: this.hotelPassengerForm.controls.r7_ch5_phone.value,
            };
            this.seventhRoomOccupancy.push(paxInfo);
          }
        }
      }
      // eight room
      if (i == 8) {
        for (let pax = 1; pax <= this.eighthRoomPax; pax++) {
          if (pax == 1) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r8_pax1_firstName.value,
              last_name: this.hotelPassengerForm.controls.r8_pax1_lastName.value,
              salutation: this.hotelPassengerForm.controls.r8_pax1_solutation.value,
              phone: this.hotelPassengerForm.controls.r8_pax1_phone.value,
            };
            this.eighthRoomOccupancy.push(paxInfo);
          }
          if (pax == 2) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r8_pax2_firstName.value,
              last_name: this.hotelPassengerForm.controls.r8_pax2_lastName.value,
              salutation: this.hotelPassengerForm.controls.r8_pax2_solutation.value,
              phone: this.hotelPassengerForm.controls.r8_pax2_phone.value,
            };
            this.eighthRoomOccupancy.push(paxInfo);
          }
          if (pax == 3) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r8_pax3_firstName.value,
              last_name: this.hotelPassengerForm.controls.r8_pax3_lastName.value,
              salutation: this.hotelPassengerForm.controls.r8_pax3_solutation.value,
              phone: this.hotelPassengerForm.controls.r8_pax2_phone.value,
            };
            this.eighthRoomOccupancy.push(paxInfo);
          }
          if (pax == 4) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r8_pax4_firstName.value,
              last_name: this.hotelPassengerForm.controls.r8_pax4_lastName.value,
              salutation: this.hotelPassengerForm.controls.r8_pax4_solutation.value,
              phone: this.hotelPassengerForm.controls.r8_pax4_phone.value,
            };
            this.eighthRoomOccupancy.push(paxInfo);
          }
          if (pax == 5) {
            paxInfo = {
              age: 30,
              category: 'AD',
              first_name: this.hotelPassengerForm.controls.r8_pax5_firstName.value,
              last_name: this.hotelPassengerForm.controls.r8_pax5_lastName.value,
              salutation: this.hotelPassengerForm.controls.r8_pax5_solutation.value,
              phone: this.hotelPassengerForm.controls.r8_pax5_phone.value,
            };
            this.eighthRoomOccupancy.push(paxInfo);
          }

        }
        for(let chd=0; chd<=this.roomTwoChd.length; chd++){
          if(chd == 1){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r8_ch1_firstName.value,
              last_name: this.hotelPassengerForm.controls.r8_ch1_lastName.value,
              salutation: this.hotelPassengerForm.controls.r8_ch1_solutation.value,
              phone: this.hotelPassengerForm.controls.r8_ch1_phone.value,
            };
            this.eighthRoomOccupancy.push(paxInfo);
          }
          if(chd == 2){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r8_ch2_firstName.value,
              last_name: this.hotelPassengerForm.controls.r8_ch2_lastName.value,
              salutation: this.hotelPassengerForm.controls.r8_ch2_solutation.value,
              phone: this.hotelPassengerForm.controls.r8_ch2_phone.value,
            };
            this.eighthRoomOccupancy.push(paxInfo);
          }
          if(chd == 3){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r8_ch3_firstName.value,
              last_name: this.hotelPassengerForm.controls.r8_ch3_lastName.value,
              salutation: this.hotelPassengerForm.controls.r8_ch3_solutation.value,
              phone: this.hotelPassengerForm.controls.r8_ch3_phone.value,
            };
            this.eighthRoomOccupancy.push(paxInfo);
          }
          if(chd == 4){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r8_ch4_firstName.value,
              last_name: this.hotelPassengerForm.controls.r8_ch4_lastName.value,
              salutation: this.hotelPassengerForm.controls.r8_ch4_solutation.value,
              phone: this.hotelPassengerForm.controls.r8_ch4_phone.value,
            };
            this.eighthRoomOccupancy.push(paxInfo);
          }
          if(chd == 5){
            paxInfo = {
              age: this.getAge(i,(chd-1)),
              category: 'CH',
              first_name: this.hotelPassengerForm.controls.r8_ch5_firstName.value,
              last_name: this.hotelPassengerForm.controls.r8_ch5_lastName.value,
              salutation: this.hotelPassengerForm.controls.r8_ch5_solutation.value,
              phone: this.hotelPassengerForm.controls.r8_ch5_phone.value,
            };
            this.eighthRoomOccupancy.push(paxInfo);
          }
        }
      }


    }// roomLoop

    // adding occupancy for the room
    if(Array.isArray(this.searchCriteria.hotel.room)){

      if(this.searchCriteria.hotel.room[0] != undefined){
        this.searchCriteria.hotel.room[0].room_occupancy  = this.firstRoomOccupancy;
      }
      if(this.searchCriteria.hotel.room[1] != undefined){
        this.searchCriteria.hotel.room[1].room_occupancy  = this.secondRoomOccupancy;
      }
      if(this.searchCriteria.hotel.room[2] != undefined){
        this.searchCriteria.hotel.room[2].room_occupancy  = this.thirdRoomOccupancy;
      }
      if(this.searchCriteria.hotel.room[3] != undefined){
        this.searchCriteria.hotel.room[3].room_occupancy  = this.fourthRoomOccupancy;
      }
      if(this.searchCriteria.hotel.room[4] != undefined){
        this.searchCriteria.hotel.room[4].room_occupancy  = this.fifthRoomOccupancy;
      }
      if(this.searchCriteria.hotel.room[5] != undefined){
        this.searchCriteria.hotel.room[5].room_occupancy  = this.sixthRoomOccupancy;
      }
      if(this.searchCriteria.hotel.room[6] != undefined){
        this.searchCriteria.hotel.room[6].room_occupancy  = this.seventhRoomOccupancy;
      }
      if(this.searchCriteria.hotel.room[7] != undefined){
        this.searchCriteria.hotel.room[7].room_occupancy  =this.eighthRoomOccupancy;
      }

    }else{
      this.searchCriteria.hotel.room.room_occupancy  = this.firstRoomOccupancy;
    }
    this.HotelService.bookRoom(this.searchCriteria).subscribe((results: any) => {  
      console.log("book rs",results);
      this.clickAble = false;
      this.bookHotelSpinner=false; 
      if(results.result.hotel == undefined){
        this.bookHotelSpinner = false;
          this.clickAble = false; 
          this.toastr.error(`No response`, `Order Creation Failed`, {
            timeOut: 2000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
      }else if(results.result.hotel.status != "Booked"){
          this.bookHotelSpinner = false;
          this.clickAble = false; 
          this.toastr.error(`Error Code: ${results.result.transactionLog.error.code} | ${results.result.transactionLog.error.message}`, `Order Creation Failed`, {
            timeOut: 2000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
        }else if((results.result.hotel.status == "Booked" )  && (results.result.hotel.tripId != undefined)){
          this.clickAble = false;
          this.bookHotelSpinner=false;
          this.clickAble = false;
          this.toastr.success(`Trip Id ${results.result.hotel.tripId}`, `Order Creation Successfull`, {
            timeOut: 5000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
        // this.router.navigateByUrl('/bookings');
        this.router.navigateByUrl(`/bookings/hotel-booking-details/${results.result.hotel.tripId}`);
        } else {
          this.clickAble = false;
          this.toastr.error(`Please try other room`, ``, {
            timeOut: 2000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
        }
    
        
    });
    // console.log("book room req",this.hotelPassengerForm.value);
  }

  numberOfNights(checkin: number, checkout: number){
    // console.log("chekcin",checkin,"checkout",checkout);
     const checkInDate = new Date(checkin *1000);
     const checkOutDate = new Date(checkout *1000);
     // console.log("chekcin",checkInDate,"checkout",checkOutDate);
   const diff_in_time =Math.abs(checkOutDate.getTime() - checkInDate.getTime());
   const diff_in_days = Math.ceil(diff_in_time / (1000 * 3600 * 24));
   const nights = isNaN(diff_in_days) || diff_in_days < 0 ? 0 : diff_in_days;
   return nights;
   }
   getAge(room,chpaxNo){  
       const retAges=[];
      for(let i=0; i< this.chdAges.length; i++){
        if(i <= room){
              const ageStr = 'ca'+i;
                const ageValue = this.chdAges[i];
                retAges.push(ageValue);
            }
      }
      return (String(retAges[chpaxNo]).split('=')[1]) ;

    }
    boardType(type){
      let outParam:string;
      switch (type) {
        case 'BF':
          outParam = 'Breakfast';
            break;
        case 'FB':
          outParam = 'Full Board';
            break;
        case 'HB':
          outParam = 'Half Board';
            break;
        case 'AI':
          outParam = 'All Inclusive';
            break;
        case 'SC':
          outParam = 'Self Catering';
            break;
        default:
          outParam = 'Room Only';
      }
      return outParam;
    }



}
