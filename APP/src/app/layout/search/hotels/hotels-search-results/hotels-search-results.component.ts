import { Component, OnInit, Input, Output, ElementRef, ViewChild, HostListener } from '@angular/core';
import { HotelService } from './../../../../shared/services/hotels.service';
import { ModalService } from './../../../_modal';
import { ToastrService } from 'ngx-toastr';
import { MouseEvent } from '@agm/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as listOfHotels from '../hotels.json';
import { reverse } from 'dns';
import { max } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';
import { convertToArray } from 'src/app/shared/utils/array.helper';
import { isInteger, isUndefined } from 'lodash';
//import { TripadvisorPipe } from '../tripadvisor.pipe';



declare const $: any;

@Component({
  selector: 'app-hotels-search-results',
  templateUrl: './hotels-search-results.component.html',
  styleUrls: ['./hotels-search-results.component.scss']
})
export class HotelsSearchResultsComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  @Input() searchCriteria: any;
  @Input() hotelList;
  @Output() isOpened = true;
  @Output() blockedRoom: any;
  @Input() nearbyCityObj: any;
  @Input() parentRatings: any;
  @Input() hotel_name:any;
  showSearchResult: boolean = true;
  agmMap: any;
  labelSearch: any;
  selected_panel: any;
  searchingRoom: boolean;  
  showfurtherDetails: boolean = false;
  searchedCriteria: any;
  ListOfRooms: any;
  roomToShow:number = 5;
  hotelToShow:number = 100;
  roomBtnShow:boolean =true;
  hotelBtnShow:boolean=true;
  showRoomSpinner: boolean = false;
  response_key: any;
  ratePolicyRoom: any;
  blockRoomSpinner: boolean = false;
  showRoomDisabled: boolean = false;
  showPassengerDetail: boolean = false;
  starFilter: boolean = false;
  selectedHotel: any;
  price: any;
  hotelName: string;
  popPlaces: any;
  nearbyLoc: any;
  placeLat: any;
  isNearBy: boolean;
  //hotel_description
  hotel_desription;
  blockRoomId: number;
  selectedRating: any;
  //filter vars
  minPrice: number;
  maxPrice: number;
  lhPrice: string = '';
  selectedPrice:any;
  ratings:any;
  ancillarie = [{
      label: "Restaurant",
      value: 'REST',
      selected: true
    },
    {
      label: "Parking",
      value: 'ACPK',
      selected: true
    },
    {
      label: "Pool",
      value: 'SWOT',
      selected: true
    },
    {
      label: "Wifi",
      value: 'FRWF',
      selected: true
    },
    {
      label: "Bar",
      value: 'BALG',
      selected: true
    },
    {
      label: "Gym",
      value: 'UNFC',
      selected: true
    }];
  ratingAll: any = true;
  //board type ratings
  boardTypeArray = [
    {
      label: "Room Only",
      value: 'RO',
      selected: true
    },
    {
      label: "Breakfast",
      value: 'BF',
      selected: true
    },
    {
      label: "Half Board",
      value: 'HB',
      selected: true
    },
    {
      label: "Full Board",
      value: 'FB',
      selected: true
    },
    {
      label: "All Inclusive",
      value: 'AI',
      selected: true
    },
    {
      label: "Self Catering",
      value: 'SC',
      selected: true
    }
  ];
  selectedBoardType: any;
  selectRoomAll: boolean = true;
  //add google map vars
  zoom: number = 8;
  // initial center position for the map
  lat: number;
  lng: number;
  markers: marker[];
  roomDates: any;

  //topBar Search
  searchObj: any;  
  selectedAnc: any;
  ancAll: boolean= true;
  totalResult: any;
  isNearBottom: any;

  constructor(
    private HotelService: HotelService,
    private modalService: ModalService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer,
  ) { }
  ngOnChanges() {
    this.ratings = this.parentRatings;
    if(!isUndefined(this.hotel_name)){
      this.hotelName = this.hotel_name;
     }
  }
  ngOnInit() {

    //setting all the rating true
    this.ratings = this.parentRatings;
    for (let i = 0; i <= 5; i++) {
      if(this.ratings[i].selected == false){
        this.ratingAll = false;
      }
     }     
     
    //get the pop places
    const obj = {
      "loclat": this.nearbyCityObj[0].latitude,
      "loclong": this.nearbyCityObj[0].longitude,
      "usLocation": 1583135952468
    }
    this.getPopPlaces(obj);
    //static hotels
    //this.hotelList = (listOfHotels as any).default;
    let hotel_array = [];
    if (this.hotelList.length > 0) {
      this.lat = this.hotelList[0].latitute;
      this.lng = this.hotelList[0].longitute;
    }
    this.hotelList.map((hotel) => {
      hotel_array.push(
        {
          lat: hotel.latitute,
          lng: hotel.longitute,
          label: hotel.hotel_name,
          price: hotel.markup_price,
          currency: hotel.rate_info.currency,
          rating: hotel.star_rating,
          draggable: true
        }
      );
    });

    this.markers = hotel_array;

    this.ratePolicyRoom = {
      "room_code": "SGL.DX",
      "room_type_code": "DLX-SGL",
      "room_description": "SINGLE DELUXE",
      "booking_code": "20200421|20200422|W|270|102893|SGL.DX|GR-ALL|BB||1~1~0||N@03~~22227~1168539358~N~E1CD44D0397E4AE158167341039700PAUK0660001000000000522227",
      "currency_code": "INR",
      "base_rate": "1",
      "supplier_price": "2905.80",
      "adult_max": "1",
      "child_max": "0",
      "extra_bed": "0",
      "adult": "1",
      "child": "0",
      "beds": "0",
      "quantity": "1",
      "timezone": "Asia/Calcutta",
      "booking_hotel_id": "0",
      "variables": {
        "entry": [
          {
            "key": "RoomSplit",
            "value": "{\"Room1\":{\"roomName\":\"SINGLE DELUXE\",\"roomCategory\":\"SINGLE DELUXE\",\"boardType\":\"BF\",\"totalPrice\":\"2905.80\",\"tax\":null,\"totalSupplierPrice\":\"2905.80\",\"totalMarkupPrice\":\"2905.80\",\"discountedPrice\":null,\"childRate\":null,\"pricePerDay\":[\"21-Apr-2020:Tue-2905.80\"],\"childAge\":null,\"additionalCharges\":null,\"inclusiveFees\":{},\"exclusiveFees\":{}}}"
          },
          {
            "key": "supplierClientCurrencyRate",
            "value": "73.8637"
          },
          {
            "key": "Bookable",
            "value": "true"
          }
        ]
      },
      "originalSupplierRoomPrice": "39.34",
      "dynamicMarkup": "0.00",
      "sPSupplierCurrency": "39.34",
      "sCsupplierCurrency": "EUR",
      "board_type": "BF",
      "cancel_policy": [
        {
          "currencyCode": "INR",
          "dynamicMarkUp": "0.0",
          "fromUnix": "1581673410",
          "markup_price": "0.00",
          "original_cancellation_supplier_price": "0.00",
          "supplier_price": "0.00",
          "toUnix": "1587148140"
        },
        {
          "cancel_restriction": "false",
          "currencyCode": "INR",
          "dynamicMarkUp": "0.0",
          "fromUnix": "1587148140",
          "markup_price": "2905.80",
          "original_cancellation_supplier_price": "39.34",
          "SCSupplierCurrency": "EUR",
          "SPriceSupplierCurrency": "39.34",
          "supplier_price": "2905.80",
          "toUnix": "1587407400"
        }
      ],
      "inclusion": "inclusion",
      "hotel_name": "TRAVANCORE COURT By Spree, Cochin",
      "hotel_id": "102893",
      "supplier_name": "apitude",
      "markup_price": "2905.80"
    }
    // console.log("No of hotels", this.hotelList.length);
    //searched topbar
    let checkin = new Date(this.searchCriteria.checkInUnix * 1000);
    let checkout = new Date(this.searchCriteria.checkOutUnix * 1000);
    this.searchObj = {
      destination: this.searchCriteria.city,
      checkin: checkin.toDateString(),
      checkout: checkout.toDateString(),
      totalRooms: this.searchCriteria.no_of_rooms,
      Nights: this.getNights(this.searchCriteria.checkInUnix, this.searchCriteria.checkOutUnix),
      adults: this.searchCriteria.adults_per_room,
      child: this.searchCriteria.children_per_room,
      totalHotels: this.hotelList.length,
    }
    //change the total result
    this.totalResult = this.searchObj.totalHotels;
   
    
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $('.menu .item').tab();
    }); 
  }
  /**********************************************/

  @HostListener('window:scroll', ['$event']) 
  scrollHandler(event) {
    console.debug("event",event);
  }
/*************************/
  displayAllRooms(total){
    this.roomToShow = total;
    this.roomBtnShow=false;
    console.log("total===============",total);
  }
  displayLessRooms(total){
  this.roomToShow = 5;
  this.roomBtnShow=true;
  }

  //google map methods
  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }


  getHotel(hotel) {
    this.HotelService.getHotelInfo(hotel).subscribe((results: any) => {
      this.hotel_desription = results.result;
    });
  }

  onToggle(hotel) {
    this.searchingRoom = !this.searchingRoom;
  }

  modifySearch() {
  
    window.location.reload();

  }

  showFurtherDetails(hotel) { //getting rooms for the hotel
    this.showRoomSpinner = true;
    this.showfurtherDetails = false;
    this.selected_panel = hotel.supplier_hotel_id;
    this.showRoomDisabled = true;

    //set default value to show rooms
    this.roomToShow=5;
    this.roomBtnShow=true;
    //add hotel to view on the passanger page
    this.selectedHotel = hotel;
    this.getHotel(hotel);

    // return false;
    //adding the hotel detail
    this.searchCriteria.hotel = {
      "supplier_code": hotel.supplier_code,
      "hotel_id": (hotel.hotel_id != undefined) ? hotel.hotel_id : hotel.supplier_hotel_id ,
      "hotel_phone": hotel.phone
    };

    this.searchCriteria.hotel.details = hotel; 
    //  return false;
    this.selected_panel = hotel.supplier_hotel_id;
    //getting the rooms
    this.HotelService.searchRooms(this.searchCriteria).subscribe((results: any) => {
      //console.log("search Room Result",results);
      //adding the response key 
      this.response_key = results.result.response_key;
      if (results.result.hotel != undefined && results.result.hotel.room != undefined) {
        this.ListOfRooms = Array.isArray(results.result.hotel.room) ? results.result.hotel.room : Array(results.result.hotel.room);
        //console.log("List of Rooms",this.ListOfRooms);
        this.showfurtherDetails = true;
        this.toastr.success(`${results.message}`, ``, {
          timeOut: 2000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
        this.showRoomSpinner = false;
        this.isOpened = true;

      } else {
        this.showRoomSpinner = false;
        this.showfurtherDetails = false;
        this.toastr.error(`${results.message}`, ``, {
          timeOut: 2000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
        this.showRoomSpinner = false;
        this.showfurtherDetails = false;
      }
    });
  }
  async blockRoom(room) {
    // console.log("Room Block Request", room.booking_code);
    this.searchCriteria.response_key = this.response_key;
    //override the hote tag
    this.searchCriteria.hotel.room = room;
    this.blockRoomSpinner = true;
    this.blockRoomId = room.booking_code;
    await this.HotelService.blockRoom(this.searchCriteria).subscribe((results: any) => {
      // console.log("blocked result",results);
      if (results.result.nil || results.result.hotel == undefined) {
        this.toastr.error(`Please try other room`, ``, {
          timeOut: 2000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
        this.blockRoomSpinner = false;
        //this.router.navigate(['results'],{relativeTo: this.activatedRoute});
      } else {
        this.blockedRoom = results;
        this.toastr.success(`${results.message}`, ``, {
          timeOut: 2000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
        this.showSearchResult = false;
        this.showPassengerDetail = true;        
      }
    });
   
  }

  showMapView(modalId: any) {
    // this.ratePolicyRoom
    this.modalService.open(modalId);
  }

  showRateModal(modalId: any, room) {
    if (room.cancel_policy) {
      this.ratePolicyRoom = room;
      this.ratePolicyRoom.cancel_policy = !Array.isArray(room.cancel_policy) ? Array(room.cancel_policy) : room.cancel_policy;
      this.ratePolicyRoom.inclusion = convertToArray(this.ratePolicyRoom.inclusion);
      let roomSplit = [];
      let roomsplits: any;
      room.variables.entry.map((values, keys) => {
        if (values.key == 'RoomSplit') {
          roomsplits = convertToArray(JSON.parse(values.value));
          var total = 0;
          roomsplits.map((room, key) => {
            if (room.roomCategory != "Child") {
              ////console.log(room);
              //////console.log(Object.keys(room.roomPriceRange).length +1);
              roomSplit.push(room);
              //hotel.length.push(Object.keys(room.pricePerDay).length +1);
              total = +total + +room.totalPrice;
            }
          });
        }
        //$scope.hotel.rowLength = Math.max.apply(null,hotel.length);
        // $scope.hotel.total = parseFloat(total).toFixed(2);
      });
      // console.log(roomSplit);
      roomSplit = roomSplit[0];
      let newRoom: any = []
      for (const [key, value] of Object.entries(roomSplit)) {
        newRoom.push(value)
      }
      // console.log("newRoom", newRoom)
      this.ratePolicyRoom.splitRoom = convertToArray(newRoom);

      //get the dates
      this.roomDates = Array.isArray(newRoom) ? newRoom[0].pricePerDay : newRoom.pricePerDay;
      // console.log("roomDates", this.roomDates)
      this.modalService.open(modalId);
    } else {
      this.toastr.error(`Rate policy not found`, `Rate policy not found`, {
        timeOut: 2000,
        progressBar: false,
        positionClass: 'toast-bottom-right'
      });
    }
  }

  showCancelPolicy(modalId: any, room) {
    //  console.log("showCancelPolicy",room.cancel_policy);
    if (room.cancel_policy) {
      this.ratePolicyRoom = room;
      this.ratePolicyRoom.cancel_policy = convertToArray(this.ratePolicyRoom.cancel_policy);
      this.ratePolicyRoom.inclusion = convertToArray(this.ratePolicyRoom.inclusion);
      // console.log("this.ratePolicyRoom.inclusion", this.ratePolicyRoom.inclusion);
      this.modalService.open(modalId);
    }
    else {
      this.toastr.error(`Cancel policy not found`, `Cancel policy not found`, {
        timeOut: 2000,
        progressBar: false,
        positionClass: 'toast-bottom-right'
      });
    }
  }

  closeModal(modalId: any) {
    this.modalService.close(modalId);
  }
  numberOfNights(checkin, checkout) {
    // console.log("chekcin",checkin,"checkout",checkout);
    var checkInDate = new Date(checkin * 1000);
    var checkOutDate = new Date(checkout * 1000);
    // console.log("chekcin",checkInDate,"checkout",checkOutDate);
    var diff_in_time = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
    var diff_in_days = Math.ceil(diff_in_time / (1000 * 3600 * 24));
    let nights = isNaN(diff_in_days) || diff_in_days < 0 ? 0 : diff_in_days;
    return nights;
  }
  roomDetailsTab(id) {
    $('#room-tab-' + id).attr('class', 'item active');
    $('#tab-room-' + id).attr('class', 'ui bottom attached tab segment active');
    $('#desc-tab-' + id).attr('class', 'item');
    $('#tab-desc-' + id).attr('class', 'ui bottom attached tab segment');
    $('#review-tab-' + id).attr('class', 'item');
    $('#tab-review-' + id).attr('class', 'ui bottom attached tab segment');
    $('#map-tab-' + id).attr('class', 'item');
    $('#tab-map-' + id).attr('class', 'ui bottom attached tab segment');
    $('#photo-tab-' + id).attr('class', 'item');
    $('#tab-photo-' + id).attr('class', 'ui bottom attached tab segment');

  }
  DescriptionTab(id) {
    $('#room-tab-' + id).attr('class', 'item');
    $('#tab-room-' + id).attr('class', 'ui bottom attached tab segment');
    $('#desc-tab-' + id).attr('class', 'item active');
    $('#tab-desc-' + id).attr('class', 'ui bottom attached tab segment active');
    $('#review-tab-' + id).attr('class', 'item');
    $('#tab-review-' + id).attr('class', 'ui bottom attached tab segment');
    $('#map-tab-' + id).attr('class', 'item');
    $('#tab-map-' + id).attr('class', 'ui bottom attached tab segment');
    $('#photo-tab-' + id).attr('class', 'item');
    $('#tab-photo-' + id).attr('class', 'ui bottom attached tab segment');

  }
  ReviewsTab(id) {
    $('#room-tab-' + id).attr('class', 'item');
    $('#tab-room-' + id).attr('class', 'ui bottom attached tab segment');
    $('#desc-tab-' + id).attr('class', 'item');
    $('#tab-desc-' + id).attr('class', 'ui bottom attached tab segment');
    $('#review-tab-' + id).attr('class', 'item active');
    $('#tab-review-' + id).attr('class', 'ui bottom attached tab segment active');
    $('#map-tab-' + id).attr('class', 'item');
    $('#tab-map-' + id).attr('class', 'ui bottom attached tab segment');
    $('#photo-tab-' + id).attr('class', 'item');
    $('#tab-photo-' + id).attr('class', 'ui bottom attached tab segment');

  }
  MapsTab(id) {
    $('#room-tab-' + id).attr('class', 'item');
    $('#tab-room-' + id).attr('class', 'ui bottom attached tab segment');
    $('#desc-tab-' + id).attr('class', 'item');
    $('#tab-desc-' + id).attr('class', 'ui bottom attached tab segment');
    $('#review-tab-' + id).attr('class', 'item');
    $('#tab-review-' + id).attr('class', 'ui bottom attached tab segment');
    $('#map-tab-' + id).attr('class', 'item active');
    $('#tab-map-' + id).attr('class', 'ui bottom attached tab segment active');
    $('#photo-tab-' + id).attr('class', 'item');
    $('#tab-photo-' + id).attr('class', 'ui bottom attached tab segment');
  }
  PhotosTab(id) {
    $('#room-tab-' + id).attr('class', 'item');
    $('#tab-room-' + id).attr('class', 'ui bottom attached tab segment');
    $('#desc-tab-' + id).attr('class', 'item');
    $('#tab-desc-' + id).attr('class', 'ui bottom attached tab segment');
    $('#review-tab-' + id).attr('class', 'item');
    $('#tab-review-' + id).attr('class', 'ui bottom attached tab segment');
    $('#map-tab-' + id).attr('class', 'item');
    $('#tab-map-' + id).attr('class', 'ui bottom attached tab segment');
    $('#photo-tab-' + id).attr('class', 'item active');
    $('#tab-photo-' + id).attr('class', 'ui bottom attached tab segment active');
  }

  //adding filters
  priceFilter(event) {
    if (event.type == 'click') {
      if (this.lhPrice.toString() == '') {
        this.lhPrice = 'HL';
      } else {
       this.lhPrice =  this.lhPrice.split("").reverse().join(""); 
        
        
      }
    }
    this.selectedPrice = Math.floor((Math.random() * 100) + 1);
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
  selecttAll() {
    for (let i = 0; i <= 5; i++) {
      this.ratings[i].selected = true;
    }
  }
  deselectAll() {
    for (let i = 0; i <= 5; i++) {
      this.ratings[i].selected = false;
    }
  }
  rangeFilter() {
    this.minPrice = 0, this.maxPrice = 0;
  }
  setAncel(id){
    this.ancillarie[id].selected = !this.ancillarie[id].selected;
    this.ancAll = false;
    this.selectedAnc = Math.floor((Math.random() * 100) + 1);
    console.log("ance sel",this.ancillarie);
  }
  selectAnceType() {
    if (this.ancAll) {
      for (let i = 0; i <= 5; i++) {
        this.ancillarie[i].selected = false;
      }
      this.ancAll = false;
    } else {
      for (let i = 0; i <= 5; i++) {
        this.ancillarie[i].selected = true;
      }
      this.ancAll = true;
    }
    this.selectedAnc = Math.floor((Math.random() * 100) + 1);
    console.log("ance",this.ancillarie);   
  }
  //set rating value
  setRating(id) {
    console.log("id================",id);
    this.ratings[id].selected = !this.ratings[id].selected;
    this.ratingAll = false;
    this.selectedRating = Math.floor((Math.random() * 100) + 1);
    console.log("ratings", this.ratings);
  }
  setBoardType(id) {
    this.boardTypeArray[id].selected = !this.boardTypeArray[id].selected;
    this.selectRoomAll = false;
    //need to trigger  
    // console.log(this.boardTypeArray);
    this.selectedBoardType = Math.floor((Math.random() * 100) + 1);
  }
  selectBoardType() {
    if (this.selectRoomAll) {
      for (let i = 0; i <= 5; i++) {
        this.boardTypeArray[i].selected = false;
      }
      this.selectRoomAll = false;
    } else {
      for (let i = 0; i <= 5; i++) {
        this.boardTypeArray[i].selected = true;
      }
      this.selectRoomAll = true;
    }
    // console.log(this.boardTypeArray);
  }

  showStarFilter() {
    this.starFilter = !this.starFilter;
  }

  getPopPlaces(params) {
    this.HotelService.getPopularCities(params).subscribe((cities: any) => {
      this.popPlaces = cities.result;
    });
  }
  //nearby places filter event
  nearbyPlace(place=null) {
    if(place !=null){
      this.nearbyLoc = place;
      this.placeLat = place.latitude; 
    }else{
      this.nearbyLoc='';
      this.placeLat = Math.floor((Math.random() * 100) + 1);
    }
   
  }
  boardType(type) {
    let outParam: string;
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
  getDay(rate) {
    var res = rate.split(":");
    var resDate = res[0];
    var resDay = res[1];
    var dayName = resDay.split("-");
    var dayPrice = dayName[1];
    return dayName[0];

  }
  getDate(rate) {
    var res = rate.split(":");
    var resDate = res[0];
    var resDay = res[1];
    var dayName = resDay.split("-");
    var dayPrice = dayName[1];
    return resDate;

  }
  getPrice(rate) {
    var res = rate.split(":");
    var resDate = res[0];
    var resDay = res[1];
    var dayName = resDay.split("-");
    var dayPrice = dayName[1];
    return dayPrice;
  }
  getNights(check_in, check_out) {
    var checkInDate = new Date(check_in * 1000);
    var checkOutDate = new Date(check_out * 1000);
    var diff_in_time = checkOutDate.getTime() - checkInDate.getTime();
    var diff_in_days = diff_in_time / (1000 * 3600 * 24);   
    return isNaN(diff_in_days) || diff_in_days < 0 ? 0 : diff_in_days;
  }
  tripRating(hotel){
    let wholePart, deciPart;
    let parts = isInteger(hotel.tripAdvisorRating)? hotel.tripAdvisorRating : hotel.tripAdvisorRating.toString().split('.');
    wholePart = Array.isArray(parts)? parts[0]:parts;
    deciPart = Array.isArray(parts)?parts[1]:0;
    let rating ='<img src="./../../../../../assets/icons/tripadv-icon.svg" class="tripadvicon" [alt]="${hotel.tripAdvisorRating}"/>';
    if(wholePart != 0){
      for(let i=1; i<= wholePart; i++){
        rating+='<img src="./../../../../../assets/icons/green-check.svg" />';
      } 
    }else{
      rating+='<img src="./../../../../../assets/icons/green-uncheck.svg" />';
    }
    if(deciPart>0 && deciPart < 5){
      rating +='<img src="./../../../../../assets/icons/half.svg" />'; 
    }     
    return rating;
  }
  printRating(hotel){
    let tripRating ="";
    for(let i=1; i<= hotel.star_rating; i++){
      tripRating+=`<img src="./../../../../../assets/icons/rating-star-yellow.svg" [alt]="${hotel.star_rating}"/>`;
    }
    return tripRating;
  }
  resultCount(count){
    this.totalResult = count;    
  }
  displayAllHotels(count){
    console.log("=======count============",count);
    if(count < 100){
      this.hotelToShow = count;
      this.hotelBtnShow = false;
    }else{
      this.hotelToShow+=100;
      console.log("total hotels===============",count);
    }
  
  }

}

// just an interface for type safety.
interface marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}
