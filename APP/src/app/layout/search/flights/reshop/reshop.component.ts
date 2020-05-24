import { CommonService } from './../../../../shared/services/common.service';
import { FlightSearchService } from './../../../../shared/services/flight-search.service';
import { Component, AfterViewInit, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ReshopResultsComponent } from './reshop-results/reshop-results.component';
import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';
import { convertToArray } from 'src/app/shared/utils/array.helper';
import { Booking } from 'src/app/shared/utils/booking';
import { prepareBooking, saveBooking, commonGetCabinType } from 'src/app/shared/utils/common';

declare const $: any;

@Component({
  selector: 'app-reshop',
  templateUrl: './reshop.component.html',
  styleUrls: ['./reshop.component.scss']
})
export class ReshopComponent implements AfterViewInit {

  isSubmitted: boolean = false;
  displayReshopResult: boolean = false;

  tabsArray = [];
  airportsArray: any = [];
  reshopLoader: boolean = false;
  searchBoxCard: boolean = true;
  searchResultsCard: boolean = false;
  // flightSearchObj: any = {};
  minDate = new Date();
  reshopResultsMsg = '';
  airportsLoader = false;
  bookFlights = false;
  flightsContainer: boolean = true;
  displayBookScreen: boolean = false;
  screenTitle: string = 'Flight Reshop';
  @ViewChildren(ReshopResultsComponent) reshopResults: any;
  preReshopPersistentObj = {};
  ondIndex = 0;
  paxTicketDetails = [];
  airlinesArr = [];
  negoFareCheck = false;
  echoToken: string = '';
  tripID: string = '';

  depPlaceHolder: string = "Departure Airport, City";
  arrPlaceHolder: string = "Arrival Airport, City";

  filteredDepartures: Observable<any>;
  filteredArrivals: Observable<any>;

  prevBookingList: any = [];
  newBookingListTmp: any = [];
  newBookingList: any = [];
  booking: Booking;

  constructor(
    private flightSearchService: FlightSearchService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private commonService: CommonService
  ) {
    if (history.state.data !== undefined) {
      this.booking = prepareBooking();
      this.booking.setUserBookingInfo(JSON.stringify(history.state.data));
      saveBooking(this.booking);
    }
  }

  ngOnInit() {
    this.addTab();
    this.fetchCabinTypeList();

    combineLatest(
      this.flightSearchService.airportsListing()
    ).subscribe((_result: any) => {
      this.airportsArray = _.mapValues(
        _.groupBy(_.sortBy(_result[0].airports, c => c.airportcode), "airportcode"),
        clist => clist.map(airportcode => airportcode)
      );
      this.renderBookingData();
    });

    setTimeout(() => {
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 4
          }
        }
      });
    }, 1200);
  }

  filterDepartures(index: number) {
    this.filteredDepartures = this.ondArray.controls[index].controls.departure.valueChanges.pipe(
      startWith(""),
      map((value: any) => this._filter(value, true))
    );
    console.log("=========================================");
    console.log(this.filteredDepartures);
    console.log("=========================================");
  }

  filterArrivals(index: number) {
    this.filteredArrivals = this.ondArray.controls[
      index
    ].controls.arrival.valueChanges.pipe(
      startWith(""),
      map((value: any) => this._filter(value, true))
    );
  }

  renderBookingData() {
    this.booking = prepareBooking();
    if (this.booking.getUserBookingInfo() !== null) {
      let data = JSON.parse(this.booking.getUserBookingInfo());
      // If for any reason, SegmentDetails list is empty, no need to continue
      let ticketDocInfos = JSON.parse(data.data.Flights[0].TicketDocInfos);
      if (ticketDocInfos.hasOwnProperty("Response")) {
        ticketDocInfos = ticketDocInfos.Response;
      }
      let mySegmentDetails = convertToArray(ticketDocInfos.DataLists.FlightSegmentList.FlightSegment);
      if (mySegmentDetails.length > 0) {
        // First I should get the trip details:
        let myOriginAndDestinationList = convertToArray(ticketDocInfos.DataLists.OriginDestinationList.OriginDestination);
        let myFlightList = convertToArray(ticketDocInfos.DataLists.FlightList.Flight);
        if (myOriginAndDestinationList.length > 0) {
          myOriginAndDestinationList.map((ond: any, ondIndex) => {
            ond.FlightReferences;
            let myFlight = myFlightList.filter(e => e["@FlightKey"] === ond.FlightReferences)[0];
            let mySegRef = myFlight.SegmentReferences;
            if (myFlight.SegmentReferences.hasOwnProperty("#text")) {
              mySegRef = myFlight.SegmentReferences["#text"];
            }
            let mySegmentKeyList = mySegRef.split(" ");
            let mySegmentDetailsList = [];
            mySegmentKeyList.map((key: string) => {
              let element = mySegmentDetails.filter((e) => e["@SegmentKey"] === key)[0];
              element.logo = '';
              element.className = '';
              element.classCode = '';
              if (element.OperatingCarrier.AirlineID) {
                if (element.OperatingCarrier.AirlineID.hasOwnProperty("#text")) {
                  element.logo = element.OperatingCarrier.AirlineID["#text"];
                } else {
                  element.logo = element.OperatingCarrier.AirlineID;
                }
              }
              if (element.logo) {
                if (element.MarketingCarrier.AirlineID) {
                  if (element.MarketingCarrier.AirlineID.hasOwnProperty("#text")) {
                    element.logo = element.MarketingCarrier.AirlineID["#text"];
                  } else {
                    element.logo = element.MarketingCarrier.AirlineID;
                  }
                }
              }
              if (element.ClassOfService.MarketingName.hasOwnProperty('#text')) {
                element.className = element.ClassOfService.MarketingName["#text"];
              } else {
                element.className = element.ClassOfService.MarketingName;
              }
              if (element.ClassOfService.Code.hasOwnProperty('#text')) {
                element.classCode = element.ClassOfService.Code["#text"];
              } else {
                element.classCode = element.ClassOfService.Code;
              }

              if ((element.className === '' || element.className === 'undefined') && element.classCode != '') {
                element.className = commonGetCabinType(element.classCode);
              }
              if (element.logo.hasOwnProperty("@")) {
                element.logo = element.logo["@"];
              }
              mySegmentDetailsList.push(element);
            });
            this.prevBookingList.push({
              DepartureCode: ond.DepartureCode,
              ArrivalCode: ond.ArrivalCode,
              SegmentList: mySegmentDetailsList,
              checked: false,
              TmpID: ondIndex
            });
            this.newBookingListTmp.push({
              Key: mySegmentDetailsList[0]["@SegmentKey"],
              DepartureCode: mySegmentDetailsList[0].Departure.AirportCode,
              DepartureAirportName: mySegmentDetailsList[0].Departure.AirportName,
              ArrivalCode: mySegmentDetailsList[mySegmentDetailsList.length - 1].Arrival.AirportCode,
              ArrivalAirportName: mySegmentDetailsList[mySegmentDetailsList.length - 1].Arrival.AirportName,
              date: mySegmentDetailsList[0].Departure.Date,
              cabin: mySegmentDetailsList[0].ClassOfService.Code.hasOwnProperty("#text") ? mySegmentDetailsList[0].ClassOfService.Code["#text"] : mySegmentDetailsList[0].ClassOfService.Code,
              visible: false,
              TmpID: ondIndex
            });
          });
        }

        this.echoToken = data.data.echoToken;
        this.tripID = data.data.trip_id;
        $('.dropdown').dropdown();
      }
    }
  }

  toggleSelection(objList: any) {
    objList.map((obj, obgIndex) => {
      obj.checked = !obj.checked;
      this.newBookingListTmp.filter((e: { TmpID: number; }) => e.TmpID === obj.TmpID)[0].visible = obj.checked;
      this.newBookingList = this.newBookingListTmp.filter((e: { visible: boolean; }) => e.visible === true);
      // Now we should prepare the ondArray to be displayed.
      if (this.newBookingList.length > 0) {
        this.ondArray.clear();
        this.newBookingList.map((ond) => {
          if (this.ondArray.length <= this.newBookingList.length) {
            this.ondArray.push(this.initOndArr());
          }
          let res = [];
          res = this._filter(ond.DepartureCode, false);
          if (res.length === 0) {
            res.push({
              airportcode: ond.DepartureCode,
              airportid: 0,
              airportname: ond.DepartureAirportName,
              airportname_ar: '',
              countrycode: '',
              latitude: '',
              longitude: '',
              parentregionid: '',
              regionid: '',
              timestamp: '',
              '@timestamp': '',
              '@version': ''
            });
          }
          this.ondArray.controls[this.ondArray.length - 1].controls.departure.value = res[0];
          res = this._filter(ond.ArrivalCode, false);
          if (res.length === 0) {
            res.push({
              airportcode: ond.ArrivalCode,
              airportid: 0,
              airportname: ond.ArrivalAirportName,
              airportname_ar: '',
              countrycode: '',
              latitude: '',
              longitude: '',
              parentregionid: '',
              regionid: '',
              timestamp: '',
              '@timestamp': '',
              '@version': ''
            });
          }
          this.ondArray.controls[this.ondArray.length - 1].controls.arrival.value = res[0];
          if (this.ondArray.length === 1) {
            this.ondArray.controls[this.ondArray.length - 1].controls.flightDate.value = moment().add(1, 'days').format('YYYY-MM-DD');
          } else {
            this.ondArray.controls[this.ondArray.length - 1].controls.flightDate.value = moment().add(40, 'days').format('YYYY-MM-DD');
          }
          let flightDeparture = this.prevBookingList.filter((e: { DepartureCode: any; }) => (ond.DepartureCode === e.DepartureCode))[0].SegmentList;
          this.ondArray.controls[this.ondArray.length - 1].controls.segmentKey.value = flightDeparture[0]["@SegmentKey"];
          let tmpSegmentSeatingClassMarketingName = 'economy';
          if (flightDeparture[0].ClassOfService && flightDeparture[0].ClassOfService.MarketingName) {
            if (flightDeparture[0].ClassOfService.MarketingName.hasOwnProperty("#text")) {
              tmpSegmentSeatingClassMarketingName = flightDeparture[0].ClassOfService.MarketingName["#text"].toLowerCase();
            } else {
              tmpSegmentSeatingClassMarketingName = flightDeparture[0].ClassOfService.MarketingName.toLowerCase();
            }
          }
          let tmpCabinType = 'Y';
          if (tmpSegmentSeatingClassMarketingName.indexOf('economy') > -1) {
            tmpCabinType = 'Y';
          } else if (tmpSegmentSeatingClassMarketingName.indexOf('first') > -1) {
            tmpCabinType = 'F';
          } else if (tmpSegmentSeatingClassMarketingName.indexOf('business') > -1) {
            tmpCabinType = 'C';
          } else if (tmpSegmentSeatingClassMarketingName.indexOf('club') > -1) {
            tmpCabinType = 'I';
          } else if (tmpSegmentSeatingClassMarketingName.indexOf('premium') > -1) {
            tmpCabinType = 'W';
          } else if (tmpSegmentSeatingClassMarketingName.indexOf('euro') > -1) {
            tmpCabinType = 'O';
          }
          this.ondArray.controls[this.ondArray.length - 1].controls.cabinType.value = tmpCabinType;
        });
        let firstSemgentInFirstBooking = this.prevBookingList[0].SegmentList[0];
        let airlineID = '';
        if (firstSemgentInFirstBooking.OperatingCarrier.AirlineID) {
          if (firstSemgentInFirstBooking.OperatingCarrier.AirlineID.hasOwnProperty("#text")) {
            airlineID = firstSemgentInFirstBooking.OperatingCarrier.AirlineID["#text"];
          } else {
            airlineID = firstSemgentInFirstBooking.OperatingCarrier.AirlineID;
          }
        } else if (firstSemgentInFirstBooking.MarketingCarrier.AirlineID) {
          if (firstSemgentInFirstBooking.MarketingCarrier.AirlineID.hasOwnProperty("#text")) {
            airlineID = firstSemgentInFirstBooking.MarketingCarrier.AirlineID["#text"];
          } else {
            airlineID = firstSemgentInFirstBooking.MarketingCarrier.AirlineID;
          }
        }
        this.reshopFlightSearchForm.patchValue({
          airlinePreference: airlineID
        });
        this.loadConfig();
      }
    });
  }

  reshopFlightSearchForm = this.fb.group({
    ondArr: this.fb.array([this.initOndArr()])
  });

  cabinTypeArr = [];
  fetchCabinTypeList() {
    this.cabinTypeArr.push({ value: 'all', label: 'All' });
    this.cabinTypeArr.push({ value: 'Y', label: 'Economy/Coach' });
    this.cabinTypeArr.push({ value: 'W', label: 'Premium Economy' });
    this.cabinTypeArr.push({ value: 'C', label: 'Business' });
    this.cabinTypeArr.push({ value: 'F', label: 'First Class' });
    this.cabinTypeArr.push({ value: 'I', label: 'Club World' });
  }

  options: any = [{ code: '', label: '' }];

  initOndArr() {
    return this.fb.group({
      segmentKey: ['', [Validators.required]],
      departure: ['', [Validators.required]],
      arrival: ['', [Validators.required]],
      flightDate: [moment().add(1, 'days').format('YYYY-MM-DD'), [Validators.required]],
      cabinType: ['Y', [Validators.required]]
    });
  }

  get ondArray(): any {
    return this.reshopFlightSearchForm.get('ondArr') as FormArray;
  }

  addOndArr() {
    this.ondArray.push(this.initOndArr());
    this.loadConfig();
    if (this.ondArray.length > 1) {
      this.ondArray.controls[this.ondArray.length - 1].controls.segmentKey.value = this.ondArray.controls[0].controls.segmentKey.value;
      this.ondArray.controls[this.ondArray.length - 1].controls.departure.value = this.ondArray.controls[0].controls.arrival.value;
      this.ondArray.controls[this.ondArray.length - 1].controls.arrival.value = this.ondArray.controls[0].controls.departure.value;
      this.ondArray.controls[this.ondArray.length - 1].controls.flightDate.value = this.ondArray.controls[0].controls.flightDate.value;
      this.ondArray.controls[this.ondArray.length - 1].controls.cabinType.value = this.ondArray.controls[0].controls.cabinType.value;
    }
  }

  removeOndArr(index: number) {
    if (index > 0) this.ondArray.removeAt(index);
  }

  searchFlights = () => {
    let departure = this.ondArray.controls[0].controls.departure.value;
    let arrival = this.ondArray.controls[0].controls.arrival.value;
    if (departure === undefined || arrival === undefined) {
      Swal.fire('Oops...', 'Departure or Arrival should never be emtpy', 'error');
      return;
    }

    let destinations = [];
    this.ondArray.value.map((obj: { segmentKey: string, departure: { airportcode: string; }; arrival: { airportcode: string; }; flightDate: string; cabinType: string }) => {
      destinations.push({
        segmentKey: obj.segmentKey,
        departure: obj.departure ? obj.departure.airportcode : '',
        arrival: obj.arrival ? obj.arrival.airportcode : '',
        flightDate: obj.flightDate,
        cabinTypeCode: obj.cabinType,
        cabinTypeMarketingName: commonGetCabinType(obj.cabinType)
      });
    });

    this.reshopLoader = true;
    this.searchBoxCard = false;

    this.booking = prepareBooking();
    if (this.booking.getUserBookingInfo() !== null) {
      this.itinReshop(destinations);
    }
  }

  displayAirportName(airport?: { airportname: string; }): string | undefined {
    return airport ? airport.airportname : undefined;
  }

  private _filter(value: string, allowSearchByName: boolean): string[] {
    if (value !== undefined && value.length > 2) {
      const filterValue = value.toLowerCase();
      let result = [];
      let resultToReturn = [];
      if (allowSearchByName) {
        result = _.filter(this.airportsArray, (tmpValue, key) => {
          tmpValue = tmpValue.filter(
            obj =>
              obj.airportcode &&
              (obj.airportcode.toLowerCase() === filterValue ||
                obj.airportname.toLowerCase().includes(filterValue))
          );
          if (tmpValue.length > 0) {
            resultToReturn.push(tmpValue[0]);
            return true;
          }
          return false;
        });
      } else {
        result = _.filter(this.airportsArray, (tmpValue, key) => {
          tmpValue = tmpValue.filter(
            obj =>
              obj.airportcode && obj.airportcode.toLowerCase() === filterValue
          );
          if (tmpValue.length > 0) {
            resultToReturn.push(tmpValue[0]);
            return true;
          }
          return false;
        });
      }
      return resultToReturn;
    }
  }

  tabNumber = 0;
  submitted = [];

  addTab() { this.tabsArray.push({ name: 'Search Flights', label: this.tabNumber, icon: 'clear' }) }

  removeTab(index: number) {
    if (index > 0)
      this.tabsArray.splice(index, 1);
    return;
  }

  selectTab($event: any) { this.tabNumber++; }

  loadFlightDate(index: number) {
    let minDate = moment();
    let val = $(`input[name="flightDate_${index - 1}"]`).val();
    let startDate: moment.Moment;
    if ($(`input[name="flightDate_${index}"]`).val() && $(`input[name="flightDate_${index}"]`).val() != '')
      startDate = moment($(`input[name="flightDate_${index}"]`).val());
    if (val)
      minDate = moment(val)
    var scope = this;

    $(function () {
      $(`input[name="flightDate_${index}"]`).daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        maxYear: parseInt(moment().format('YYYY'), 10),
        startDate: startDate,
        minDate: minDate,
        autoUpdateInput: false
      }, function (start: moment.MomentInput, end: any, label: any) {
        scope.ondArray.controls[index].patchValue({ 'flightDate': moment(start).format('YYYY-MM-DD') });
        scope.loadDatePickers()
      });
    });
  }

  loadConfig() {
    var scope = this;
    $(document).ready(function () {
      $('.ui.dropdown').dropdown();
      $('.ui.accordion').accordion();
      scope.loadDatePickers();
      $("#slider-range").slider({
        range: true,
        min: 0,
        max: 1440,
        step: 15,
        values: [540, 1020],
        slide: function (e: any, ui: { values: number[]; }) {
          let hours1: any = Math.floor(ui.values[0] / 60);
          let minutes1: any = ui.values[0] - (hours1 * 60);

          if (hours1.length == 1) hours1 = '0' + hours1;
          if (minutes1.length == 1) minutes1 = '0' + minutes1;
          if (minutes1 == 0) minutes1 = '00';
          if (hours1 >= 12) {
            if (hours1 == 12) {
              hours1 = hours1;
              minutes1 = minutes1 + " PM";
            } else {
              hours1 = hours1 - 12;
              minutes1 = minutes1 + " PM";
            }
          } else {
            hours1 = hours1;
            minutes1 = minutes1 + " AM";
          }
          if (hours1 == 0) {
            hours1 = 12;
            minutes1 = minutes1;
          }



          $('.slider-time').val(hours1 + ':' + minutes1);

          let hours2: any = Math.floor(ui.values[1] / 60);
          let minutes2: any = ui.values[1] - (hours2 * 60);

          if (hours2.length == 1) hours2 = '0' + hours2;
          if (minutes2.length == 1) minutes2 = '0' + minutes2;
          if (minutes2 == 0) minutes2 = '00';
          if (hours2 >= 12) {
            if (hours2 == 12) {
              hours2 = hours2;
              minutes2 = minutes2 + " PM";
            } else if (hours2 == 24) {
              hours2 = 11;
              minutes2 = "59 PM";
            } else {
              hours2 = hours2 - 12;
              minutes2 = minutes2 + " PM";
            }
          } else {
            hours2 = hours2;
            minutes2 = minutes2 + " AM";
          }

          $('.slider-time2').val(hours2 + ':' + minutes2);
        }
      });

      $("#slider-range2").slider({
        range: true,
        min: 0,
        max: 1440,
        step: 15,
        values: [540, 1020],
        slide: function (e: any, ui: { values: number[]; }) {
          let hours1: any = Math.floor(ui.values[0] / 60);
          let minutes1: any = ui.values[0] - (hours1 * 60);

          if (hours1.length == 1) hours1 = '0' + hours1;
          if (minutes1.length == 1) minutes1 = '0' + minutes1;
          if (minutes1 == 0) minutes1 = '00';
          if (hours1 >= 12) {
            if (hours1 == 12) {
              hours1 = hours1;
              minutes1 = minutes1 + " PM";
            } else {
              hours1 = hours1 - 12;
              minutes1 = minutes1 + " PM";
            }
          } else {
            hours1 = hours1;
            minutes1 = minutes1 + " AM";
          }
          if (hours1 == 0) {
            hours1 = 12;
            minutes1 = minutes1;
          }
          $('.arrival-slider-time').val(hours1 + ':' + minutes1);

          let hours2: any = Math.floor(ui.values[1] / 60);
          let minutes2: any = ui.values[1] - (hours2 * 60);

          if (hours2.length == 1) hours2 = '0' + hours2;
          if (minutes2.length == 1) minutes2 = '0' + minutes2;
          if (minutes2 == 0) minutes2 = '00';
          if (hours2 >= 12) {
            if (hours2 == 12) {
              hours2 = hours2;
              minutes2 = minutes2 + " PM";
            } else if (hours2 == 24) {
              hours2 = 11;
              minutes2 = "59 PM";
            } else {
              hours2 = hours2 - 12;
              minutes2 = minutes2 + " PM";
            }
          } else {
            hours2 = hours2;
            minutes2 = minutes2 + " AM";
          }

          $('.arrival-slider-time2').val(hours2 + ':' + minutes2);
        }
      });

      var resizePopup = function () { $('.ui.popup').css('max-height', $(window).height()); };

      $(window).resize(function (e: any) {
        resizePopup();
      });

      $('.flights_chck-grid__more-opt')
        .popup({
          popup: $('.flights_chck-grid__popup'),
          lastResort: 'bottom right',
          on: 'click'
        });
    });
  }

  loadDatePickers() {
    var scope = this
    $(document).ready(function () {
      scope.ondArray.controls.map((el: any, index: any) => {
        scope.loadFlightDate(index);
        // if (index == 0 || index < (scope.ondArray.controls.length - 1))
        //   scope.loadDepartureDate(index);
        // else scope.loadReturnDate(index);
      });
    });
  }

  ngAfterViewInit() {
    this.loadConfig();
  }

  setBookScreen(bookScreen: boolean) {
    this.screenTitle = "Passengers";
    this.displayBookScreen = bookScreen;
    this.flightsContainer = false;
  }

  checkPlaceHolderDeparture(e) {
    if (e === "") {
      if (this.depPlaceHolder) {
        this.depPlaceHolder = null;
      } else {
        this.depPlaceHolder = "Departure Airport, City";
      }
    } else {
      this.depPlaceHolder = null;
    }
    return;
  }

  checkPlaceHolderArrival(e) {
    if (e === "") {
      if (this.arrPlaceHolder) {
        this.arrPlaceHolder = null;
      } else {
        this.arrPlaceHolder = "Arrival Airport, City";
      }
    } else {
      this.arrPlaceHolder = null;
    }
    return;
  }

  // FEQ - Login in case of reissue
  flightInitReshopObj: any = {};
  itinReshop = (_destinations?: any) => {
    this.booking = prepareBooking();
    if (this.booking.getUserBookingInfo() !== null) {
      let data = JSON.parse(this.booking.getUserBookingInfo());
      let flight = data.data.Flights[0];
      let ticketDocInfos = JSON.parse(flight.TicketDocInfos);
      if (ticketDocInfos.hasOwnProperty("Response")) {
        ticketDocInfos = ticketDocInfos.Response;
      }
      let order = ticketDocInfos.Order;

      // CreatedFlight
      let tmpCreatedFlightItemList = [];

      _destinations.map((obj) => {
        tmpCreatedFlightItemList.push({
          Departure: {
            AirportCode: obj.departure,
            Date: obj.flightDate
          },
          Arrival: {
            AirportCode: obj.arrival,
            Date: obj.flightDate
          },
          ClassOfService: {
            Code: obj.cabinTypeCode,
            MarketingName: {
              Title: obj.cabinTypeMarketingName
            }
          },
          SegmentKey: obj.segmentKey
        });
      });

      let myOwner: string = '';
      let myPNR: string = '';
      let myPNRList = order.OrderID["#text"].split("-");
      if (myPNRList.length === 2) {
        myOwner = myPNRList[0];
        myPNR = myPNRList[1];
      }
      this.flightInitReshopObj = {
        echoToken: this.echoToken,
        owner: myOwner,
        pnr_no: myPNR,
        tripId: this.tripID,
        currency: {
          booking: data.data.booking_currency,
          user: data.data.user_currency
        },
        BookingReferences: order.BookingReferences,
        SegmentDetails: data.SegmentDetails,
        PrevBookingList: this.prevBookingList,
        FlightItemList: tmpCreatedFlightItemList
      };
      this.flightSearchService.itinReissueFlight(this.flightInitReshopObj).subscribe((results: any) => {
        if (results && results.JourneyList && results.JourneyList.length > 0) {
          this.searchResultsCard = true;
          this.reshopLoader = false;
          this.searchBoxCard = true;
          this.reshopResultsMsg = '';
          this.preReshopPersistentObj = results
          // Display Results
          this.displayReshopResult = true;
          this.loadConfig();
        } else {
          this.loadConfig();
          let myTitle = 'No Reshop Flights';
          let myMessage = 'Oops! We\'re unable to find reshop flights for searched parameters. Try again with different search criteria.'
          if (results.hasOwnProperty("Error") && results.Error) {
            if (results.Error["@ShortText"]) {
              myTitle = results.Error["@ShortText"];
            }
            if (results.Error["#text"]) {
              myMessage = results.Error["#text"];
            }
          }
          this.toastr.error(myMessage, myTitle, {
            timeOut: 10000,
            progressBar: true,
            progressAnimation: 'decreasing',
            positionClass: 'toast-bottom-right'
          });
          this.reshopResultsMsg = myMessage;
          this.reshopLoader = false;
          this.searchBoxCard = true;
        }
      }, (error) => {
        this.loadConfig();
        this.toastr.error('Oops! We\'re unable to find reshop flights for searched parameters. Try again with different search criteria.', 'No Reshop Flights', {
          timeOut: 10000,
          progressBar: true,
          progressAnimation: 'decreasing',
          positionClass: 'toast-bottom-right'
        });
        this.reshopResultsMsg = error;
        this.reshopLoader = false;
        this.searchBoxCard = true;
      });
    }
  }

  OndAirport = [
    {
      departure: "",
      arrival: "",
      date: ""
    },
    {
      departure: "",
      arrival: "",
      date: ""
    },
    {
      departure: "",
      arrival: "",
      date: ""
    },
    {
      departure: "",
      arrival: "",
      date: ""
    },
    {
      departure: "",
      arrival: "",
      date: ""
    },
    {
      departure: "",
      arrival: "",
      date: ""
    }
  ];

  airportChanged(i) {
    let departure = this.ondArray.controls[i].value.departure;
    let arrival = this.ondArray.controls[i].value.arrival;

    if (i > 2) {
      this.OndAirport[i].arrival = "";
      //  console.log(event);
      this.OndAirport[i].departure = departure;
    } else {
      this.OndAirport[i].arrival = arrival;

      this.OndAirport[i].departure = departure;
    }
  }
}
