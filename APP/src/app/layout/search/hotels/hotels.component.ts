import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from './../../../../environments/environment';
import { HotelService } from './../../../shared/services/hotels.service';
import { CommonService } from 'src/app/shared/services/common.service';
import { ToastrService } from 'ngx-toastr';
import { prepareGlobals } from "src/app/shared/utils/common";
import { Globals } from 'src/app/shared/utils/globals';

import * as listCities from './cities.json';
import { AnyMxRecord } from 'dns';

declare const moment: any;
declare const $: any;

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})

export class HotelsComponent implements OnInit {
  searchArray:any=[];
  screenTitle: string = 'Hotel Search';
  hotelSearchForm: FormGroup;
  countries: any = [];
  cities: any = [];
  number_of_nights: number;
  total_rooms: number = 1;
  country_code: string;
  country_no: number;
  hotelList: any = [];
  _globals: any = [];
  searchCriteria = [];
  searchedHotel: any = [];
  showSearchResult: boolean = false;
  nearbyCityObj:any;
  //hotel result and form hide and show
  showForm: boolean = true;
  showResult: boolean = false;
  selectedCity: any = null;
  submitted = false;
  searchHotelSpinner:boolean = false;
  //loading...
  searchLoader: boolean = false;
  allCities: any = (listCities as any).default;
  hotel_name:any;

  //rooms hide and show
  room_1_show: boolean = true;
  room_2_show: boolean = false;
  room_3_show: boolean = false;
  room_4_show: boolean = false;
  room_5_show: boolean = false;
  room_6_show: boolean = false;
  room_7_show: boolean = false;
  room_8_show: boolean = false;

  searchObject:any;
  savedSearches:any= new Array<Object>(10);
  room_one_children:any;
  room_two_children:any;

  //rating
  ratings = [{
    label: "1 Star",
    value: 0,
    selected: true
  },
  {
    label: "1 Star",
    value: 1,
    selected: true
  },
  {
    label: "2 Star",
    value: 2,
    selected: true
  },
  {
    label: "3 Star",
    value: 3,
    selected: true
  },
  {
    label: "4 Star",
    value: 4,
    selected: true
  },
  {
    label: "5 Star",
    value: 5,
    selected: true
  }];
  ratingAll:any = true;
  selectRoomAll = true;
  //user vars
  userInfo: any = {};
  globals: Globals;

  constructor(
    private HotelService: HotelService,
    private fb: FormBuilder,
    private router: Router,
    private CommonService: CommonService,
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
  //get current urer and orginization
  this.globals = prepareGlobals();
  let userInfo = this.globals.getUser();
  console.log("=====Orgnization detail============", userInfo);

   this.savedSearches= this.getLocalStorageSearches();
    this.hotelSearchForm = this.fb.group({
      room_one_adults: ["2"], room_two_adults:["2"], room_three_adults: ["2"], room_four_adults:["2"],room_five_adults: ["2"],room_six_adults:["2"],
      room_seven_adults:["2"],room_eight_adults:["2"],
      room_one_children:["zero"],r_one_ch_one:["0"],r_one_ch_two:["0"],r_one_ch_three:["0"],r_one_ch_four:["0"],r_one_ch_five:["0"], 
      room_two_children:["0"],r_two_ch_one:["0"],r_two_ch_two:["0"],r_two_ch_three:["0"],r_two_ch_four:["0"],r_two_ch_five:["0"], 
      room_three_children:["0"],r_three_ch_one:["0"],r_three_ch_two:["0"],r_three_ch_three:["0"],r_three_ch_four:["0"],r_three_ch_five:["0"], 
      room_four_children:["0"],r_four_ch_one:["0"],r_four_ch_two:["0"],r_four_ch_three:["0"],r_four_ch_four:["0"],r_four_ch_five:["0"], 
      room_five_children:["0"],r_five_ch_one:["0"],r_five_ch_two:["0"],r_five_ch_three:["0"],r_five_ch_four:["0"],r_five_ch_five:["0"], 
      room_six_children:["0"],r_six_ch_one:["0"],r_six_ch_two:["0"],r_six_ch_three:["0"],r_six_ch_four:["0"],r_six_ch_five:["0"], 
      room_seven_children:["0"],r_seven_ch_one:["0"],r_seven_ch_two:["0"],r_seven_ch_three:["0"],r_seven_ch_four:["0"],r_seven_ch_five:["0"], 
      room_eight_children:["0"],r_eight_ch_one:["0"],r_eight_ch_two:["0"],r_eight_ch_three:["0"],r_eight_ch_four:["0"],r_eight_ch_five:["0"], 
      no_of_rooms: [1],
      extra_bed: ['0'],
      check_in: ['', Validators.required],
      check_out: ['',Validators.required],
      nights: ['', Validators.required],
      city: ['', Validators.required],
      city_code: [''],
      country: [""],
      currency: ["INR"],
      nationality: ["AE"],
      resident: ["AE"],
      markupvalue: [''],
      markupBy: [null],
      hotel_name: [""],
      behal_of: [""],
      client_list: [""]
    });
    this.getCountries();
  }


  ngAfterViewInit() {
    this.loadConfig();
    this.checkInDate();
    $(document).ready(function () {
      <any>($('.menu .item')).tab();
    });

  }
    // convenience getter for easy access to form fields
  get f() { return this.hotelSearchForm.controls; }


  loadConfig() {
    var scope = this;
    const url = environment.serverURL;
    $(document).ready(function () {
      // $('.ui.dropdownCity').dropdown({ placeholder: "Choose Destination"});
      this._globals = localStorage.getItem('_globals');
      let token = JSON.parse(this._globals).token;
      $('.ui.dropdownCity').dropdown({
        type: 'category',
        minCharacters: 2,
        maxCharacters: 5,
        responseAsync: true,
        apiSettings: {
          url: url + '/api/hotels/hotel-get-city/{query}',
          cache: false,
          beforeXHR: function (xhr) {
            xhr.setRequestHeader('Authorization', token);
            return xhr;
          },
          onResponse: function (response) {
            const result = { success: true, results: [] };
            $.each(response.result, function (index, item) {
              scope.cities.push(item);
              result['results'].push({
                name: item.label,
                value: item.city_id
              });
            });
            this.cities = scope.cities;
            return result;
          },
        },
      })
    });

  }
  //for datepickers
  checkInDate() {
    var scope = this;
    $(function () {
      $('input[name="check_in"]').daterangepicker({
        // singleDatePicker: true,
        "autoApply": true,
        showDropdowns: true,
        minDate: moment().startOf('hour'),
        startDate: moment().startOf('hour'),
        autoUpdateInput: false,
      }, function (start, end, label) {
        console.log("end date",moment(end).format('YYYY-MM-DD'));
        var years = moment().diff(start, 'years');
        scope.hotelSearchForm.patchValue({
          'check_in': moment(start).format('YYYY-MM-DD')
        });
        scope.hotelSearchForm.patchValue({ 'check_out': moment(end).format('YYYY-MM-DD') });  
        scope.hotelSearchForm.patchValue({ 'nights':Math.floor(((new Date(end)).getTime() - (new Date(start)).getTime()) / (1000 * 3600 * 24)) });  
        //for checkout 
        // console.log("check out", scope.hotelSearchForm.controls.check_out.value );
        $('input[name="check_out"]').daterangepicker({
          singleDatePicker: true,        
          minDate:scope.hotelSearchForm.controls.check_out.value,
          startDate :scope.hotelSearchForm.controls.check_out.value,
          locale: { format: "YYYY-MM-DD"},
        },function(checkout, end, label) {
        // console.log("checkin",moment(start).format('YYYY-MM-DD'),"checkout ",moment(checkout).format('YYYY-MM-DD'));
        console.log("end date",end);
        scope.hotelSearchForm.patchValue({ 'nights':Math.floor(((new Date(checkout)).getTime() - (new Date(start)).getTime()) / (1000 * 3600 * 24) ) });
        scope.hotelSearchForm.patchValue({
          'check_out': moment(checkout).format('YYYY-MM-DD')
        });
       });       
      });
    });
  }

 

  onChangeCity(city_id: string) {
    this.cities = this.getCityById(city_id);
   // console.log("==================== city id", this.cities)
  }

  
  total_adults(){
  let adults = this.hotelSearchForm.controls.room_one_adults.value;
    if(this.total_rooms >1 ){
      adults+= ","+this.hotelSearchForm.controls.room_two_adults.value;
    }
    if(this.total_rooms >2 ){
      adults+= ","+this.hotelSearchForm.controls.room_three_adults.value;
    }
    if(this.total_rooms >3 ){
      adults+= ","+this.hotelSearchForm.controls.room_four_adults.value;
    }
    if(this.total_rooms >4 ){
      adults+= ","+this.hotelSearchForm.controls.room_five_adults.value;
    }
    if(this.total_rooms >5){
      adults+= ","+this.hotelSearchForm.controls.room_six_adults.value;
    }
    if(this.total_rooms >6 ){
      adults+= ","+this.hotelSearchForm.controls.room_seven_adults.value;
    }
    if(this.total_rooms > 7 ){
      adults+= ","+this.hotelSearchForm.controls.room_eight_adults.value;
    }    
    return adults;
  }
 
  total_children(){
    let children = this.hotelSearchForm.controls.room_one_children.value >0? this.hotelSearchForm.controls.room_one_children.value: 0 ;
    if(this.total_rooms >1 ){
      let child =  this.hotelSearchForm.controls.room_two_children.value >0? this.hotelSearchForm.controls.room_two_children.value : 0;
      children+=","+ child;
    }
    if(this.total_rooms >2 ){
      let child = this.hotelSearchForm.controls.room_three_children.value > 0 ? this.hotelSearchForm.controls.room_three_children.value : 0 ;
      children+= ","+child;
    }
    if(this.total_rooms >3 ){
      let child = this.hotelSearchForm.controls.room_four_children.value > 0? this.hotelSearchForm.controls.room_four_children.value : 0; 
      children+= ","+child;
    }
    if(this.total_rooms >4 ){
      let child = this.hotelSearchForm.controls.room_five_children.value >0? this.hotelSearchForm.controls.room_five_children.value: 0 ;
      children+= ","+child;
    }
    if(this.total_rooms >5 ){
      let child = this.hotelSearchForm.controls.room_six_children.value >0 ? this.hotelSearchForm.controls.room_six_children.value : 0 ;
      children+= ","+child;
    }
    if(this.total_rooms >6){
      let child = this.hotelSearchForm.controls.room_seven_children.value >0 ? this.hotelSearchForm.controls.room_seven_children.value : 0;
      children+= ","+ child;
    }
    if(this.total_rooms >7 ){
      let child = this.hotelSearchForm.controls.room_eight_children.value >0 ? this.hotelSearchForm.controls.room_eight_children.value : 0;
      children+= ","+child;
    }   
    return children;
  }
  get_children_age(){
    let child_age = "";
    if(this.hotelSearchForm.controls.room_one_children.value>0) {
        if(this.hotelSearchForm.controls.r_one_ch_one.value>0){
          child_age="ca1="+this.hotelSearchForm.controls.r_one_ch_one.value;
        }
        if(this.hotelSearchForm.controls.r_one_ch_two.value>0){
          if(child_age !=""){
            child_age +="&amp;ca1="+this.hotelSearchForm.controls.r_one_ch_two.value;
          }else{
            child_age +="ca1="+this.hotelSearchForm.controls.r_one_ch_two.value;
          }        
        }       
        if(this.hotelSearchForm.controls.r_one_ch_three.value>0){
          if(child_age !=""){
            child_age +="&amp;ca1="+ this.hotelSearchForm.controls.r_one_ch_three.value;
          }else{
            child_age +="ca1="+ this.hotelSearchForm.controls.r_one_ch_three.value;
          }
          
        }
        if(this.hotelSearchForm.controls.r_one_ch_four.value>0){
          if(child_age !=""){
          child_age +="&amp;ca1="+ this.hotelSearchForm.controls.r_one_ch_four.value;
          }else{
            child_age +="ca1="+ this.hotelSearchForm.controls.r_one_ch_four.value;
          }
        }
        if(this.hotelSearchForm.controls.r_one_ch_five.value>0){
          if(child_age !=""){
          child_age +="&amp;ca1="+this.hotelSearchForm.controls.r_one_ch_five.value;
          }else{
            child_age +="ca1="+this.hotelSearchForm.controls.r_one_ch_five.value;
          }
        }
    }
      //second rooom
      if(this.hotelSearchForm.controls.room_two_children.value>0) {
        if(this.hotelSearchForm.controls.r_two_ch_one.value>0){
          if(child_age != ""){
          child_age +="&amp;ca2="+this.hotelSearchForm.controls.r_two_ch_one.value;
          }else{
            child_age +="ca2="+this.hotelSearchForm.controls.r_two_ch_one.value;
          }
        }
        if(this.hotelSearchForm.controls.r_two_ch_two.value>0){
          if(child_age !=""){
          child_age +="&amp;ca2="+this.hotelSearchForm.controls.r_two_ch_two.value;
          }else{
            child_age +="ca2="+this.hotelSearchForm.controls.r_two_ch_two.value;
          }
        }
        if(this.hotelSearchForm.controls.r_two_ch_three.value>0){
          if(child_age !=""){
          child_age +="&amp;ca2="+ this.hotelSearchForm.controls.r_two_ch_three.value;
          }else{
            child_age +="ca2="+ this.hotelSearchForm.controls.r_two_ch_three.value;
          }
        }
        if(this.hotelSearchForm.controls.r_two_ch_four.value>0){
          if(child_age!=""){
          child_age +="&amp;ca2="+ this.hotelSearchForm.controls.r_two_ch_four.value;
          }else{
            child_age +="ca2="+ this.hotelSearchForm.controls.r_two_ch_four.value;
          }
        }
        if(this.hotelSearchForm.controls.r_two_ch_five.value>0){
          if(child_age != null){
          child_age +="&amp;ca2="+ this.hotelSearchForm.controls.r_two_ch_five.value;
          }else{
            child_age +="ca2="+ this.hotelSearchForm.controls.r_two_ch_five.value;
          }
        }
    }
    //third room  
      if(this.hotelSearchForm.controls.room_three_children.value>0) {
        if(this.hotelSearchForm.controls.r_three_ch_one.value>0){
          if(child_age != ""){
          child_age +="&amp;ca3="+this.hotelSearchForm.controls.r_three_ch_one.value;
          }else{
            child_age +="ca3="+this.hotelSearchForm.controls.r_three_ch_one.value;
          }
        }
        if(this.hotelSearchForm.controls.r_three_ch_two.value>0){
          if(child_age !=""){
          child_age +="&amp;ca3="+this.hotelSearchForm.controls.r_three_ch_two.value;
          }else{
            child_age +="ca3="+this.hotelSearchForm.controls.r_three_ch_two.value;
          }
        }
        if(this.hotelSearchForm.controls.r_three_ch_three.value>0){
          if(child_age !=""){
          child_age +="&amp;ca3="+ this.hotelSearchForm.controls.r_three_ch_three.value;
          }else{
            child_age +="ca3="+ this.hotelSearchForm.controls.r_three_ch_three.value;
          }
        }
        if(this.hotelSearchForm.controls.r_three_ch_four.value>0){
          if(child_age!=""){
          child_age +="&amp;ca3="+ this.hotelSearchForm.controls.r_three_ch_four.value;
          }else{
            child_age +="ca3="+ this.hotelSearchForm.controls.r_three_ch_four.value;
          }
        }
        if(this.hotelSearchForm.controls.r_three_ch_five.value>0){
          if(child_age != null){
          child_age +="&amp;ca3="+ this.hotelSearchForm.controls.r_three_ch_five.value;
          }else{
            child_age +="ca3="+ this.hotelSearchForm.controls.r_three_ch_five.value;
          }
        }
    }
    //fourth room    
    if(this.hotelSearchForm.controls.room_four_children.value>0) {
      if(this.hotelSearchForm.controls.r_four_ch_one.value>0){
        if(child_age != ""){
        child_age +="&amp;ca4="+this.hotelSearchForm.controls.r_four_ch_one.value;
        }else{
          child_age +="ca4="+this.hotelSearchForm.controls.r_four_ch_one.value;
        }
      }
      if(this.hotelSearchForm.controls.r_four_ch_two.value>0){
        if(child_age !=""){
        child_age +="&amp;ca4="+this.hotelSearchForm.controls.r_four_ch_two.value;
        }else{
          child_age +="ca4="+this.hotelSearchForm.controls.r_four_ch_two.value;
        }
      }
      if(this.hotelSearchForm.controls.r_four_ch_three.value>0){
        if(child_age !=""){
        child_age +="&amp;ca4="+ this.hotelSearchForm.controls.r_four_ch_three.value;
        }else{
          child_age +="ca4="+ this.hotelSearchForm.controls.r_four_ch_three.value;
        }
      }
      if(this.hotelSearchForm.controls.r_four_ch_four.value>0){
        if(child_age!=""){
        child_age +="&amp;ca4="+ this.hotelSearchForm.controls.r_four_ch_four.value;
        }else{
          child_age +="ca4="+ this.hotelSearchForm.controls.r_four_ch_four.value;
        }
      }
      if(this.hotelSearchForm.controls.r_four_ch_five.value>0){
        if(child_age != null){
        child_age +="&amp;ca4="+ this.hotelSearchForm.controls.r_four_ch_five.value;
        }else{
          child_age +="ca4="+ this.hotelSearchForm.controls.r_four_ch_five.value;
        }
      }
  }
    //fifth room
    if(this.hotelSearchForm.controls.room_five_children.value>0) {
    if(this.hotelSearchForm.controls.r_five_ch_one.value>0){
      if(child_age != ""){
      child_age +="&amp;ca5="+this.hotelSearchForm.controls.r_five_ch_one.value;
      }else{
        child_age +="ca5="+this.hotelSearchForm.controls.r_five_ch_one.value;
      }
    }
    if(this.hotelSearchForm.controls.r_five_ch_two.value>0){
      if(child_age !=""){
      child_age +="&amp;ca5="+this.hotelSearchForm.controls.r_five_ch_two.value;
      }else{
        child_age +="ca5="+this.hotelSearchForm.controls.r_five_ch_two.value;
      }
    }
    if(this.hotelSearchForm.controls.r_five_ch_three.value>0){
      if(child_age !=""){
      child_age +="&amp;ca5="+ this.hotelSearchForm.controls.r_five_ch_three.value;
      }else{
        child_age +="ca5="+ this.hotelSearchForm.controls.r_five_ch_three.value;
      }
    }
    if(this.hotelSearchForm.controls.r_five_ch_four.value>0){
      if(child_age!=""){
      child_age +="&amp;ca5="+ this.hotelSearchForm.controls.r_five_ch_four.value;
      }else{
        child_age +="ca5="+ this.hotelSearchForm.controls.r_five_ch_four.value;
      }
    }
    if(this.hotelSearchForm.controls.r_five_ch_five.value>0){
      if(child_age != null){
      child_age +="&amp;ca5="+ this.hotelSearchForm.controls.r_five_ch_five.value;
      }else{
        child_age +="ca5="+ this.hotelSearchForm.controls.r_five_ch_five.value;
      }
    }
    }
    //sixth room
    if(this.hotelSearchForm.controls.room_six_children.value>0) {
      if(this.hotelSearchForm.controls.r_six_ch_one.value>0){
        if(child_age != ""){
        child_age +="&amp;ca6="+this.hotelSearchForm.controls.r_six_ch_one.value;
        }else{
          child_age +="ca6="+this.hotelSearchForm.controls.r_six_ch_one.value;
        }
      }
      if(this.hotelSearchForm.controls.r_six_ch_two.value>0){
        if(child_age !=""){
        child_age +="&amp;ca6="+this.hotelSearchForm.controls.r_six_ch_two.value;
        }else{
          child_age +="ca6="+this.hotelSearchForm.controls.r_six_ch_two.value;
        }
      }
      if(this.hotelSearchForm.controls.r_six_ch_three.value>0){
        if(child_age !=""){
        child_age +="&amp;ca6="+ this.hotelSearchForm.controls.r_six_ch_three.value;
        }else{
          child_age +="ca6="+ this.hotelSearchForm.controls.r_six_ch_three.value;
        }
      }
      if(this.hotelSearchForm.controls.r_six_ch_four.value>0){
        if(child_age!=""){
        child_age +="&amp;ca6="+ this.hotelSearchForm.controls.r_six_ch_four.value;
        }else{
          child_age +="ca6="+ this.hotelSearchForm.controls.r_six_ch_four.value;
        }
      }
      if(this.hotelSearchForm.controls.r_six_ch_five.value>0){
        if(child_age != null){
        child_age +="&amp;ca6="+ this.hotelSearchForm.controls.r_six_ch_five.value;
        }else{
          child_age +="ca6="+ this.hotelSearchForm.controls.r_six_ch_five.value;
        }
      }
    }
    //seventh room
    if(this.hotelSearchForm.controls.room_seven_children.value>0) {
      if(this.hotelSearchForm.controls.r_seven_ch_one.value>0){
        if(child_age != ""){
        child_age +="&amp;ca7="+this.hotelSearchForm.controls.r_seven_ch_one.value;
        }else{
          child_age +="ca7="+this.hotelSearchForm.controls.r_seven_ch_one.value;
        }
      }
      if(this.hotelSearchForm.controls.r_seven_ch_two.value>0){
        if(child_age !=""){
        child_age +="&amp;ca7="+this.hotelSearchForm.controls.r_seven_ch_two.value;
        }else{
          child_age +="ca7="+this.hotelSearchForm.controls.r_seven_ch_two.value;
        }
      }
      if(this.hotelSearchForm.controls.r_seven_ch_three.value>0){
        if(child_age !=""){
        child_age +="&amp;ca7="+ this.hotelSearchForm.controls.r_seven_ch_three.value;
        }else{
          child_age +="ca7="+ this.hotelSearchForm.controls.r_seven_ch_three.value;
        }
      }
      if(this.hotelSearchForm.controls.r_seven_ch_four.value>0){
        if(child_age!=""){
        child_age +="&amp;ca7="+ this.hotelSearchForm.controls.r_seven_ch_four.value;
        }else{
          child_age +="ca7="+ this.hotelSearchForm.controls.r_seven_ch_four.value;
        }
      }
      if(this.hotelSearchForm.controls.r_seven_ch_five.value>0){
        if(child_age != null){
        child_age +="&amp;ca7="+ this.hotelSearchForm.controls.r_seven_ch_five.value;
        }else{
          child_age +="ca7="+ this.hotelSearchForm.controls.r_seven_ch_five.value;
        }
      }
    }
    //eight room 
    if(this.hotelSearchForm.controls.room_eight_children.value>0) {
      if(this.hotelSearchForm.controls.r_eight_ch_one.value>0){
        if(child_age != ""){
        child_age +="&amp;ca8="+this.hotelSearchForm.controls.r_eight_ch_one.value;
        }else{
          child_age +="ca8="+this.hotelSearchForm.controls.r_eight_ch_one.value;
        }
      }
      if(this.hotelSearchForm.controls.r_eight_ch_two.value>0){
        if(child_age !=""){
        child_age +="&amp;ca8="+this.hotelSearchForm.controls.r_eight_ch_two.value;
        }else{
          child_age +="ca8="+this.hotelSearchForm.controls.r_eight_ch_two.value;
        }
      }
      if(this.hotelSearchForm.controls.r_eight_ch_three.value>0){
        if(child_age !=""){
        child_age +="&amp;ca8="+ this.hotelSearchForm.controls.r_eight_ch_three.value;
        }else{
          child_age +="ca8="+ this.hotelSearchForm.controls.r_eight_ch_three.value;
        }
      }
      if(this.hotelSearchForm.controls.r_eight_ch_four.value>0){
        if(child_age!=""){
        child_age +="&amp;ca8="+ this.hotelSearchForm.controls.r_eight_ch_four.value;
        }else{
          child_age +="ca8="+ this.hotelSearchForm.controls.r_eight_ch_four.value;
        }
      }
      if(this.hotelSearchForm.controls.r_eight_ch_five.value>0){
        if(child_age != null){
        child_age +="&amp;ca8="+ this.hotelSearchForm.controls.r_eight_ch_five.value;
        }else{
          child_age +="ca8="+ this.hotelSearchForm.controls.r_eight_ch_five.value;
        }
      }
    }
 
    return child_age;
  }
  async searchHandler() {
    this.submitted = true;
    // stop here if form is invalid
    if(this.hotelSearchForm.invalid) {
      return;
    }
    //if hotel name is given
    if(this.hotelSearchForm.controls.hotel_name.value != null){
      this.hotel_name = this.hotelSearchForm.controls.hotel_name.value;
    
    }
      let adults_per_room = this.total_adults();
      let children_per_room = this.total_children();
      let child_age = this.get_children_age(); 
      // console.log("pax detail", adults_per_room,"pax children", children_per_room , child_age);
    this.searchLoader = true;
   this.searchHotelSpinner = true;

    //city info
    var city_id = this.hotelSearchForm.controls.city;
    var city = this.cities.filter((city) => {
      if (city_id.value == city.city_id) {
        return city;
      }
    });

    this.nearbyCityObj = city;
    //replacing values in request  
    this.hotelSearchForm.value.country = (city[0].flag).toUpperCase();
    this.hotelSearchForm.value.city = city[0].label;
    this.hotelSearchForm.value.city_code = city[0].city_id;
  
    this.searchObject= {
      "adults_per_room": adults_per_room,
      "children_per_room":children_per_room,
      "no_of_rooms":this.hotelSearchForm.controls.no_of_rooms.value,
      "child_age":child_age,
      "extra_bed": 0,
      "check_in": this.hotelSearchForm.controls.check_in.value ,
      "check_out": this.hotelSearchForm.controls.check_out.value,
      "nights":this.number_of_nights,
      "city": city[0].label,
      "city_code": this.hotelSearchForm.controls.city.value,
      "country": this.hotelSearchForm.value.country,
      "currency": "AED", //need add the org currency
      "markupBy": this.hotelSearchForm.controls.markupBy.value ,
      "nationality": "AE",
      "resident": "AE"
      };

    //adding data to local storage
    this.localStorageSearches(this.searchObject);

    // this.hotelSearchForm.value.nights = this.number_of_nights;
    // console.log("form Values", this.hotelSearchForm.value);
    this.HotelService.search(this.searchObject).subscribe((results: any) => {
      this.submitted=false;
      this.searchHotelSpinner=false;
      //console.log("result", results);
      if (results) {
        this.searchLoader = false;
        this.searchCriteria = results.result.search_criteria;
        this.hotelList = results.result.hotel;

        // console.log("hotels:::", this.hotelList );
        if (this.hotelList != null) {       
          this.searchLoader = false;
          this.showSearchResult = true;
          this.showForm = false;

          //adding key for filters
          this.hotelList.hasLowestPrice=true;
          this.hotelList = Array.isArray(this.hotelList) ? this.hotelList : Array(this.hotelList);      
          // this.router.navigate(['results'], { relativeTo: this.activatedRoute });
        } else {
          this.getCountries();
          this.toastr.error(`${results.message}`, ``, {
            timeOut: 2000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });

        }
      }
      //this.router.navigateByUrl('pages');
    });

    return false;

  }

  getCountries() {
    this.CommonService.getCountryList().subscribe((result: any) => {
      this.countries = result.countries;
      //console.log("countries",result.countries);
    });
  }

  getCities(city = '') {
    var term = { "city_name": city };
    this.HotelService.getCities(term).subscribe((result: any) => {
    });
  }

  getCityById(city = '') {
    this.HotelService.getCityById(city).subscribe((result: any) => {
    });
  }

  getNights() {
    var checkInDate = new Date(this.hotelSearchForm.controls.check_in.value);
    var checkOutDate = new Date(this.hotelSearchForm.controls.check_out.value);
    var diff_in_time = checkOutDate.getTime() - checkInDate.getTime();
    var diff_in_days = diff_in_time / (1000 * 3600 * 24);
    this.number_of_nights = isNaN(diff_in_days) || diff_in_days < 0 ? 0 : diff_in_days;

  }
  decreaseRoom() {
    if (this.total_rooms > 1) {
      this.total_rooms--;
    }
    this.showRoomsDefault();
    for (let i = 2; i <= this.total_rooms; i++) {
      if (i == 2) {
        this.room_2_show = true;
      }
      if (i == 3) {
        this.room_3_show = true;
      }
      if (i == 4) {
        this.room_4_show = true;
      }
      if (i == 5) {
        this.room_5_show = true;
      }
      if (i == 6) {
        this.room_6_show = true;
      }
      if (i == 7) {
        this.room_7_show = true;
      }
      if (i == 8) {
        this.room_8_show = true;
      }
    }
  }
  increaseRoom() {
    if(this.total_rooms < 8){
      this.total_rooms++;
    }   
    for (let i = 2; i <= this.total_rooms; i++) {
      if (i == 2) {
        this.room_2_show = true;
      }
      if (i == 3) {
        this.room_3_show = true;
      }
      if (i == 4) {
        this.room_4_show = true;
      }
      if (i == 5) {
        this.room_5_show = true;
      }
      if (i == 6) {
        this.room_6_show = true;
      }
      if (i == 7) {
        this.room_7_show = true;
      }
      if (i == 8) {
        this.room_8_show = true;
      }
    }
  }
  showRoomsDefault() {
    this.room_2_show = false;
    this.room_3_show = false;
    this.room_4_show = false;
    this.room_5_show = false;
    this.room_6_show = false;
    this.room_7_show = false;
    this.room_8_show = false;
    
  }
  //add search in local storage
  localStorageSearches(search){
    console.log("searches",this.savedSearches);
    if(this.savedSearches == null){
      this.savedSearches = [];
    }
    this.savedSearches.unshift(search);
    localStorage.setItem("searchArray", JSON.stringify(this.savedSearches));
       
  }
  getLocalStorageSearches(){
    return JSON.parse(localStorage.getItem("searchArray"));
  }
 //add ratings
 selectRatings() {  
  if (!this.ratingAll) {
    this.selecttAll();    
  }
  if(this.ratingAll){
    this.deselectAll();
    
  }  
}
      //set rating value
  setRating(id) {  
    this.ratings[id].selected = !this.ratings[id].selected;
    this.ratingAll = false;   
    console.log("ratings", this.ratings);
  }
  selecttAll(){
    for (let i = 0; i <= 5; i++) {
        this.ratings[i].selected = true;
       }
  }
  deselectAll(){
    for (let i = 0; i <= 5; i++) {
      this.ratings[i].selected = false;
     }
  }
  
}
