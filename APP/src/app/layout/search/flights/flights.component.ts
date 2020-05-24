import { CommonService } from "./../../../shared/services/common.service";
import { FlightSearchService } from "./../../../shared/services/flight-search.service";
import { BehalfService } from './behalf.service';
import { Component, AfterViewInit, ViewChildren } from "@angular/core";
import { FormArray, FormBuilder, Validators } from "@angular/forms";
import { Observable, combineLatest } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { Router, ActivatedRoute } from "@angular/router";
import * as moment from "moment";
import { SearchResultsComponent } from "./search-results/search-results.component";
import * as _ from "lodash";
import { ToastrService } from "ngx-toastr";
import { Store } from "@ngrx/store";
import { FlightSearchData } from "src/app/reducers/models/flight-search-data";
import { LoadFlightSearchResult } from "src/app/reducers/flight-search.actions";
import { Globals } from "src/app/shared/utils/globals";
import { prepareGlobals } from "src/app/shared/utils/common";
import { ModalService } from "../../_modal";
import "jquery-ui/ui/widgets/datepicker";
import {HttpErrorResponse} from "@angular/common/http";

// import * as $ from 'jquery';

declare const $: any;

@Component({
  selector: "app-flights",
  templateUrl: "./flights.component.html",
  styleUrls: ["./flights.component.scss"]
})
export class FlightsComponent implements AfterViewInit {
  maxPersons: number = 9;
  isSubmitted = false;
  allPos: string[] = [];
  tabsArray = [];
  airportsArray: any = [];
  exlConArr: any = [];
  flightResults: any = [];
  organizations:Array<any>=[];
  searchLoader: boolean = false;
  searchBoxCard: boolean = true;
  searchResultsCard: boolean = false;
  flightSearchObj: any = {};
  minDate = new Date();
  airportsLoader = false;
  bookFlights = false;
  searchResult = false;
  flightsContainer: boolean = true;
  displayAncillary: boolean;
  displayBookScreen: boolean = false;
  screenTitle: string = "Flight Search";
  @ViewChildren(SearchResultsComponent) searchResults: any;
  preSearchPersistentObj = {};
  paxdetails = {};

  sameDayReturnDate = [];

  // paxCodesArr: any = [];
  // paxTypesArr: any = [];
  // serviceGroupsArr: any = [];
  // serviceSubGroupsArr: any = [];
  ondIndex = 0;
  paxTicketDetails = [];
  farePreference: any = {
    pref: {
      code: "759-0",
      name: "Lowest Fare"
    }
  };

  inputFlightArray = [
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

  airlinesArr = [];
  cabinTypeArr = [];
  negoFareCheck = false;
  newItineraryByData: any = [];
  defaultAirportStructure = {
    airportcode: "",
    airportid: 0,
    airportname: "",
    airportname_ar: "",
    countrycode: "",
    latitude: "",
    longitude: "",
    parentregionid: "",
    regionid: "",
    timestamp: "",
    "@timestamp": "",
    "@version": ""
  };

  numberOfStops = "Type";
  numberOfInput = 1;
  multiCityCheck = false;
  onewayCheck = true;
  twowayCheck = false;

  swappedArrival = [];
  swappedDept = [];
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

  optionStatus: boolean = false;
  optName: any;
  modify: boolean = true;
  modifySearchView: boolean = false;
  showAdvOption: boolean = false;
  depPlaceHolder: string = "Departure Airport, City";
  arrPlaceHolder: string = "Arrival Airport, City";
  addFlight: boolean = false;
  markupLabel: string = "Value";

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

  getOrganizations() {
    this.flightSearchService.fetchAllChildPos().subscribe(r => {
       console.log('+++++++++++++++++++++++++',r);
       this.organizations.push(r['listData']);
      // console.log('dsadsadsa',this.organizations[0]);
      this.organizations = this.organizations[0];
    }, (apiError: HttpErrorResponse) => {
      this.buildError(apiError.error.message)
    });
  }

  buildError(message) {
    this.toastr.error(message, 'Server Error !', {
      disableTimeOut: false,
      progressBar: false,
      positionClass: 'toast-bottom-right'
    });
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

  counter(i: any, addition: number) {
    let count = 0;
    if (i !== "") {
      count = parseInt(i);
    }
    return new Array(count + addition);
  }

  flightSearchData: FlightSearchData = new FlightSearchData();

  globals: Globals;
  sameDayReturnFlag: boolean = false;
  searchFlightsSpinner: boolean = false;

  // depPlaceHolder: string = 'Departure Airport, City';
  // arrPlaceHolder: string = 'Arrival Airport, City';

  departureHeader = "";
  arrivalHeader = "";
  credit_limit_change;

  constructor(
    private flightSearchService: FlightSearchService,
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private commonService: CommonService,
    private store: Store<{ airShoppingResponse: any }>,
    private activatedRouter: ActivatedRoute,
    private modalService: ModalService,
    private behalfService :BehalfService
  ) {
    this.globals = prepareGlobals();
   
  }

  flightSearchForm = this.fb.group({
    currency: ["AED"],
    calendarDays: false,
    quantityADT: 1,
    quantityCHD: 0,
    quantityINF: 0,
    cabinType: "Y",
    multiDestination: this.fb.array([]),
    travellersType: this.fb.array([this.initTravellersType()]),
    qualifiersArr: this.fb.array([this.initQualifiers()]),
    // servicesArr: this.fb.array([this.initServiceGroupsArr()]),
    ondArr: this.fb.array([this.initOndArr(this.defaultAirportStructure)]),
    qualifierCode: [""],
    airlinePreferences: this.fb.array([this.initAirlinePreferences()]),
    corporateCode: [""],
    markupValue: [0, [Validators.min(0)]],
    markupBy: [""],
    nonStop: [false],
    bookingFor:[''],
    negoFarePreference: [""],
    onBehalfOf: [""],
    kilometerDeparture: [""],
    kilometerArrival: [""]
  });

  options: any = [{ code: "", label: "" }];
  filteredDepartures: Observable<any>;
  filteredArrivals: Observable<any>;

  setPaxTicket(value) {
    this.paxTicketDetails = value;
  }

  setStops(_stop: string) {
    console.log(_stop);
    this.numberOfStops = _stop;
    if (_stop === "All") this.flightSearchForm.get("nonStop").setValue(false);
    if (_stop === "non-stop")
      this.flightSearchForm.get("nonStop").setValue(true);
    if (_stop === "multi") this.flightSearchForm.get("nonStop").setValue(false);
  }

  setMarkup(type: string) {
    if (type === "amount") {
      this.markupLabel = "Value";
    } else {
      this.markupLabel = "Percentage";
    }
    if (type === "amount")
      this.flightSearchForm.get("markupBy").setValue("amount");
    else this.flightSearchForm.get("markupBy").setValue("percentage");
  }

  setNegoFare(code: string, name: string) {
    this.farePreference.negoFare = { code, name };
  }

  // setNegoFare(negoFarePreference){
  //   this.flightSearchForm.get().setValue()
  // }

  //setPreferredAirline(airlineID) {
  //  this.flightSearchForm.get('airlinePreference').setValue(airlineID);
  //}

  //setCabinType(cabin) {
  //  this.flightSearchForm.get('cabinType').setValue(cabin);
  //}

  // FEQ - Added to complete the form
  setQuantity(type: number, count: number) {
    if (type === 1) {
      this.flightSearchForm.get("quantityADT").setValue(count);
    } else if (type === 2) {
      this.flightSearchForm.get("quantityCHD").setValue(count);
    } else {
      this.flightSearchForm.get("quantityINF").setValue(count);
    }
  }

  getQuantity(type: number) {
    if (type === 1) {
      this.flightSearchForm.get("quantityADT").value;
    } else if (type === 2) {
      this.flightSearchForm.get("quantityCHD").value;
    } else {
      this.flightSearchForm.get("quantityINF").value;
    }
  }

  checkNegoFare(event: any) {
    if (event.target.checked) {
      this.negoFareCheck = true;
    } else {
      this.negoFareCheck = false;
    }
  }

  setFarePref(code: string, name: string) {
    this.farePreference.pref = { code, name };
  }

  initOndArr(_arrival: any) {
    console.log("this is the _arrival", _arrival);
    console.log("this is the default arrival", this.defaultAirportStructure);

    return this.fb.group({
      departure: ["", [Validators.required]],
      arrival: ["", [Validators.required]],

      flightDate: ["", [Validators.required]]
    });
  }

  initAirlinePreferences() {
    return this.fb.group({
      airlinePreference: ""
    });
  }

  initMultiDestinations() {
    return this.fb.group({
      departure: [""],
      departureDate: [""],
      arrival: [""]
    });
  }

  initTravellersType() {
    return this.fb.group({
      type: [""],
      count: [""]
    });
  }

  initQualifiers() {
    return this.fb.group({
      type: [""],
      code: [""],
      name: [""],
      airlines: [""]
    });
  }

  /*initServiceGroupsArr() {
    return this.fb.group({
      group: [''],
      sub_group: ['']
    })
  }*/

  get airlinePreference(): FormArray {
    return this.flightSearchForm.get("airlinePreference") as FormArray;
  }

  get travellersType(): FormArray {
    return this.flightSearchForm.get("travellersType") as FormArray;
  }

  get qualifiers(): FormArray {
    return this.flightSearchForm.get("qualifiersArr") as FormArray;
  }

  get servicesGroups(): FormArray {
    return this.flightSearchForm.get("servicesArr") as FormArray;
  }

  get ondArray(): any {
    return this.flightSearchForm.get("ondArr") as FormArray;
  }

  addOndArr() {
    // console.log("this.multiCityCheck", this.multiCityCheck);


    //check for sameday return
    if(this.sameDayReturnFlag && this.numberOfInput == 2 && this.twowayCheck){
 this.ondArray.controls[
   this.ondArray.length - 1
 ].controls.departure.value = this.ondArray.controls[0].controls.arrival.value;
 this.ondArray.controls[
   this.ondArray.length - 1
 ].controls.arrival.value = this.ondArray.controls[0].controls.departure.value;
 this.ondArray.controls[
   this.ondArray.length - 1
 ].controls.flightDate.value = this.ondArray.controls[0].controls.flightDate.value;

 return;
    }
    this.ondArray.push(this.initOndArr(this.defaultAirportStructure));
    this.numberOfInput += 1;
    this.loadConfig();


    //check for round trip
if (this.ondArray.length > 1 && this.twowayCheck) {
  this.ondArray.controls[
    this.ondArray.length - 1
  ].controls.departure.value = this.ondArray.controls[0].controls.arrival.value;
  this.ondArray.controls[
    this.ondArray.length - 1
  ].controls.arrival.value = this.ondArray.controls[0].controls.departure.value;
}
    console.log("this.ondArray.length", this.ondArray);

    //
    if (this.ondArray.length > 1 && this.multiCityCheck) {
      this.ondArray.controls.map((element, i) => {
        console.log("element.controls.departure", i, element);
        if (i > 0) {
          element.controls.departure.value = this.ondArray.controls[
            i - 1
          ].controls.arrival.value;
          // element.controls.arrival.value = "";
        }
      });
      console.log("this.ondArray.controls", this.ondArray.controls);
      // this.ondArray.controls[this.ondArray.length - 1].controls.departure.value = this.ondArray.controls[0].controls.arrival.value;
      // this.ondArray.controls[this.ondArray.length - 1].controls.arrival.value ="";
    }
  }

  //this will remove the dept and arr inputs added in the search
  //index is the numnber of inputs to be deleted  and type is how many inputs should be left
  removeOndArr(index, type) {
    if (this.numberOfInput < 6 && this.multiCityCheck == true) {
      this.addFlight = true;
    }
    for (let i = index; i >= type; i--) {
      this.numberOfInput = i;
      this.ondArray.removeAt(i);
    }
  }

  oneWay() {
    this.onewayCheck = true;
    this.multiCityCheck = false;
    //if the one way is selected then same day return is unchecked
    $("#one-way").change(function() {
      if (this.checked) {
        $("#same-day").prop("checked", false);
      }
    });

    this.addFlight = false;
    this.sameDayReturnFlag = false;
    //check if the numberofInput is 1 if it is one then no need to do anything just return
    if (this.numberOfInput == 1) {
      return;
    } else {
      //if the numnberOfInputs are more than one then remove it till only one input left
      this.removeOndArr(this.numberOfInput, 1);
    }
  }
  addOneFlight() {
    if (this.numberOfInput == 6) {
      this.addFlight = false;
    } else {
      this.addOndArr();
    }
  }
  twoWay() {
    //making the correct current type
    this.onewayCheck = false;
    this.twowayCheck = true;
    this.multiCityCheck = false;

    this.addFlight = false;
    this.sameDayReturnFlag = false;
    //check if the numberOfInputs are 2 if it is then return
    if (this.numberOfInput == 2) {
      return;
      //if numberOfInputs are more than two then remove the inputs till two left
    } else if (this.numberOfInput > 2) {
      this.removeOndArr(this.numberOfInput, 2);
    }
    //if the numberOfInputs are less than two the add one
    else if (this.numberOfInput < 2) this.addOndArr();
  }

  multiCity() {
    this.multiCityCheck = true;
    this.twowayCheck = false;
    this.addFlight = true;
    this.sameDayReturnFlag = false;
    if (this.multiCityCheck) {
      this.OndAirport[this.numberOfInput - 1].arrival = "";
      console.log(this.ondArray);
    }
  }

  addTravellerType() {
    this.travellersType.push(this.initTravellersType());
    this.loadConfig();
  }

  removeTravellerType(index) {
    if (index > 0) this.travellersType.removeAt(index);
  }

  addQualifiers() {
    this.qualifiers.push(this.initQualifiers());
    this.loadConfig();
  }

  removeQualifiers(index) {
    if (index > 0) this.qualifiers.removeAt(index);
  }

  addServicesGroups() {
    this.servicesGroups.push(this.initQualifiers());
    this.loadConfig();
  }

  removeServicesGroups(index) {
    if (index > 0) this.servicesGroups.removeAt(index);
  }

  get multiDest(): any {
    return this.flightSearchForm.get("multiDestination") as FormArray;
  }

  addMultiDest() {
    this.multiDest.push(this.initMultiDestinations());
  }

  removeMultiDest(index) {
    if (index > 0) this.multiDest.removeAt(index);
  }

  removeAllMultiDest() {
    this.flightSearchForm.get("multiDestination").patchValue(this.fb.array([]));
  }

  bookFlight() {
    this.bookFlights = true;
    this.searchResultsCard = false;
  }

  filterDepartures(index: number) {
    this.filteredDepartures = this.ondArray.controls[
      index
    ].controls.departure.valueChanges.pipe(
      startWith(""),
      map((value: any) => this._filter(value, true))
    );
  }

  filterArrivals(index: number) {
    this.filteredArrivals = this.ondArray.controls[
      index
    ].controls.arrival.valueChanges.pipe(
      startWith(""),
      map((value: any) => this._filter(value, true))
    );
  }

  ngOnInit() {
    this.addTab();
    this.fetchCabinTypeList();
    this.getOrganizations();

    combineLatest(
      this.commonService.getAirlines(),
      this.flightSearchService.airportsListing(),
      this.commonService.getSettingList({ name: ["DefaultAirportCode"] })
      /*this.flightSearchService.fetchPAXDetails('codes'),
      this.flightSearchService.fetchPAXDetails('types'),
      this.flightSearchService.fetchServicesGroups('groups'),
      this.flightSearchService.fetchServicesGroups('sub-groups')*/
    ).subscribe((_result: any) => {
      console.log("For exclude airport connections", _result);
      this.airlinesArr = _.sortBy(_result[0].airlines, c => c.name);
      this.airportsArray = _.mapValues(
        _.groupBy(
          _.sortBy(_result[1].airports, c => c.airportcode),
          "airportcode"
        ),
        clist => clist.map(airportcode => airportcode)
      );
      this.exlConArr = _.sortBy(_result[1].airports, c => c.airport);
      console.log(this.exlConArr);
      let _res = _result[2].listData.find(
        (list: {
          settings_id: number;
          name: string;
          value: string;
          status: string;
        }) => list.name === "DefaultAirportCode"
      );
      if (_res && _res.value) {
        this.ondArray.clear();
        this.ondArray.push(this.initOndArr(this._filter(_res.value, false)[0]));
        console.log("this is the _filter", this.ondArray);
      }
      setTimeout(() => {
        $(".owl-carousel").owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          responsive: { 0: { items: 1 }, 600: { items: 3 }, 1000: { items: 4 } }
        });
      }, 2000);
      this.loadConfig();
      /*this.paxCodesArr = _result[3].pax;
      this.paxTypesArr = _result[4].pax;
      this.serviceGroupsArr = _result[5].group;
      this.serviceSubGroupsArr = _result[6].group;*/
    });
    this.behalfService.currentlimit.subscribe(credit_limit_change => this.credit_limit_change = credit_limit_change)
  }

  ngOnChange() {}

  onbehalfchange(event){
    console.log("THIS IS THE CHANGE EVENT",event.target.value)
   
    this.flightSearchService.fetchPosById(event.target.value).subscribe(data => {
      var credit_limit = data;
      console.log("Credit limit",credit_limit['listData'].credit_limit)
      this.behalfService.newcreditlimit = credit_limit['listData'].credit_limit;
      
      // this.organizations = r['listData'];
      // console.log(this.organizations);
      // let credit_limit = this.organizations.credit_limit
      // console.log('this.organizations.credit_limit',this.organizations.credit_limit)
      //this.behalfService.newcreditlimit('dsdsasa');

    }, (apiError: HttpErrorResponse) => {
      this.buildError(apiError.error.message)
    });
  }

  searchFlights = () => {
    
    this.searchFlightsSpinner =true;
    let departure = this.ondArray.controls[0].controls.departure.value;
    console.log("DEPARTUEW", departure.airportcode);
    this.departureHeader = departure.airportcode;
    let arrival = this.ondArray.controls[0].controls.arrival.value;
    console.log("DEPARTUEW", arrival.airportcode);
    this.arrivalHeader = arrival.airportcode;
    if (departure === undefined || arrival === undefined) {
      return this.toastr.error(
        "Departure or Arrival should never be emtpy.",
        "Oops...",
        {
          timeOut: 10000,
          progressBar: false,
          positionClass: "toast-bottom-right"
        }
      );
    }
    this.flightSearchObj.destinations = [];
    this.ondArray.value.map(
      (obj: {
        arrival: { airportcode: string };
        departure: { airportcode: string };
        flightDate: string;
        calendarDays: boolean;
      }) => {
        this.flightSearchObj.destinations.push({
          flightDate: obj.flightDate,
          departure: obj.departure ? obj.departure.airportcode : "",
          arrival: obj.arrival ? obj.arrival.airportcode : "",
          calendarDays: obj.calendarDays
        });
        console.log("SECOND ----", this.flightSearchObj);
        // if (this.sameDayReturn) {
        //   this.flightSearchObj.destinations.push({
        //     flightDate: obj.flightDate,
        //     departure: obj.arrival ? obj.arrival.airport_code : '',
        //     arrival: obj.departure ? obj.departure.airport_code : ''
        //   })
        // }
      }
    );
    console.log("THIS IS THE KIMLOMETER VALUE", this.flightSearchForm);
    this.flightSearchObj.kilometerDeparture = this.flightSearchForm.get(
      "kilometerDeparture"
    ).value;
    this.flightSearchObj.kilometerArrival = this.flightSearchForm.get(
      "kilometerArrival"
    ).value;
    this.flightSearchObj.calendarDates = this.flightSearchForm.get(
      "calendarDays"
    ).value;
    this.flightSearchObj.currency = this.globals.getCurrencyCode();
    this.flightSearchObj.quantityADT = parseInt(
      this.flightSearchForm.controls.quantityADT.value
    );
    this.flightSearchObj.bookingFor = parseInt(
      this.flightSearchForm.controls.bookingFor.value
    );
    this.flightSearchObj.quantityCHD = parseInt(
      this.flightSearchForm.controls.quantityCHD.value
    );
    this.flightSearchObj.quantityINF = parseInt(
      this.flightSearchForm.controls.quantityINF.value
    );
    this.flightSearchObj.cabinType = this.flightSearchForm.get(
      "cabinType"
    ).value;
    this.flightSearchObj.nonStop = this.flightSearchForm.get("nonStop").value;
    if (this.flightSearchForm.get("corporateCode").value !== "")
      this.flightSearchObj.corporateCode = this.flightSearchForm.get(
        "corporateCode"
      ).value;
    if (this.flightSearchForm.get("airlinePreferences").value !== "")
      this.flightSearchObj.airlinePreference = this.flightSearchForm.get(
        "airlinePreferences"
      ).value;
    // JSON.stringify(this.flightSearchForm.get('number_details').value)
    if (this.flightSearchForm.get("markupBy").value !== "")
      this.flightSearchObj.markupBy = this.flightSearchForm.get(
        "markupBy"
      ).value;
    if (this.flightSearchForm.get("markupValue").value > 0)
      this.flightSearchObj.markupValue = this.flightSearchForm.get(
        "markupValue"
      ).value;
    if (this.flightSearchForm.get("qualifierCode").value !== "")
      this.flightSearchObj.qualifierCode = this.flightSearchForm.get(
        "qualifierCode"
      ).value;
    this.flightSearchObj.farePreferences = this.farePreference;
    if (this.flightSearchForm.get("negoFarePreference").value !== "")
      this.flightSearchObj.negoFarePreference = this.flightSearchForm.get(
        "negoFarePreference"
      ).value;

    this.searchLoader = true;
    this.searchBoxCard = false;

    let toastrTitle = `No Flights`;
    let toastrMessage = `Oops! We're unable to find flights for searched parameters. Try again with different search criteria.`;

    let startDate = Date.now();
    
    this.flightSearchService.searchFlight(this.flightSearchObj).subscribe(
      (response: any) => {
        let milisecondsDiff = Date.now() - startDate;
        let time =
          Math.floor(
            milisecondsDiff / (1000 * 60 * 60)
          ).toLocaleString(undefined, { minimumIntegerDigits: 2 }) +
          ":" +
          (
            Math.floor(milisecondsDiff / (1000 * 60)) % 60
          ).toLocaleString(undefined, { minimumIntegerDigits: 2 }) +
          ":" +
          (Math.floor(milisecondsDiff / 1000) % 60).toLocaleString(undefined, {
            minimumIntegerDigits: 2
          });
        //console.log("Request takes: " + time);
        this.paxdetails = this.flightSearchObj;
        this.modify = false;

        if (
          response.hasOwnProperty("Warnings") &&
          response.Warnings.hasOwnProperty("Warning")
        ) {
          this.loadConfig();
          this.searchLoader = false;
          this.searchBoxCard = true;
          toastrMessage = response.Warnings.Warning;
          return this.toastr.warning(toastrMessage, toastrTitle, {
            timeOut: 10000,
            progressBar: false,
            positionClass: "toast-bottom-right"
          });
        } else if (
          response.hasOwnProperty("Errors") &&
          response.Errors.hasOwnProperty("Error")
        ) {
          this.loadConfig();
          this.searchLoader = false;
          this.searchBoxCard = true;
          toastrMessage = response.Errors.Error["#text"];
          return this.toastr.error(toastrMessage, toastrTitle, {
            timeOut: 10000,
            progressBar: false,
            positionClass: "toast-bottom-right"
          });
        }
        if (response) {
          this.saveFlightSearchResultIntoAppState(response);
          this.flightResults = response;
          this.searchResultsCard = true;
          this.searchLoader = false;
          this.searchBoxCard = true;
          this.preSearchPersistentObj = {
            onBehalfOf:this.flightSearchForm.controls.bookingFor.value,
            totalResults: this.flightResults.length,
            ACI: {
              adult: parseInt(this.flightSearchForm.controls.quantityADT.value),
              child: parseInt(this.flightSearchForm.controls.quantityCHD.value),
              infant: parseInt(this.flightSearchForm.controls.quantityINF.value)
            },
            departureDate: this.flightSearchObj.departureDate,
            from: this.ondArray.controls[0].controls.departure.value.city,
            to: this.ondArray.controls[this.ondArray.length - 1].controls
              .departure.value.city,
            fromAirportName: this.ondArray.controls[0].controls.departure.value
              .airport,
            fromAirportCode: this.ondArray.controls[0].controls.departure.value
              .airport_code,
            toAirportName: this.ondArray.controls[this.ondArray.length - 1]
              .controls.departure.value.airport,
            toAirportCode: this.ondArray.controls[this.ondArray.length - 1]
              .controls.departure.value.airport_code,
            flightSearchType: this.ondArray.length === 1 ? "oneway" : "multiway"
            //capture fare preferences
          };
          // Display Results
          this.searchResult = true;
          this.loadConfig();
        } else {
          this.loadConfig();
          this.toastr.info(
            "Oops! We're unable to find flights for searched parameters. Try again with different search criteria.",
            "No Flights",
            {
              timeOut: 10000,
              progressBar: false,

              positionClass: "toast-bottom-right"
            }
          );
          this.searchLoader = false;
          this.searchBoxCard = true;
        }
      },
      httpErrorResponse => {
        this.loadConfig();
        this.searchLoader = false;
        this.searchBoxCard = true;
        this.toastr.info(toastrMessage, toastrTitle, {
          timeOut: 10000,
          progressBar: false,
          positionClass: "toast-bottom-right"
        });
      }
    );
  };

  saveFlightSearchResultIntoAppState(response) {
    this.flightSearchData.response = response;
    this.store.dispatch(
      new LoadFlightSearchResult({ data: this.flightSearchData })
    );
  }

  displayAirportName(airport?): string | undefined {
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

  addTab() {
    this.tabsArray.push({
      name: "Search Flights",
      label: this.tabNumber,
      icon: "clear"
    });
  }

  fetchCabinTypeList() {
    this.cabinTypeArr.push({ value: "all", label: "All" });
    this.cabinTypeArr.push({ value: "Y", label: "Economy" });
    this.cabinTypeArr.push({ value: "W", label: "Premium Economy" });
    this.cabinTypeArr.push({ value: "C", label: "Business Class" });
    this.cabinTypeArr.push({ value: "F", label: "First Class" });
  }

  removeTab(index) {
    if (index > 0) this.tabsArray.splice(index, 1);
    return;
  }

  selectTab($event) {
    this.tabNumber++;
  }

  loadFlightDate(index) {
    let minDate = moment();
    let val = $(`input[name="flightDate_name_${index - 1}"]`).val();
    let startDate;
    if (
      $(`input[name="flightDate_name_${index}"]`).val() &&
      $(`input[name="flightDate_name_${index}"]`).val() != ""
    )
      startDate = moment($(`input[name="flightDate_name_${index}"]`).val());
    if (val) minDate = moment(val);
    var scope = this;

    $(function() {
      $(`input[name="flightDate_name_${index}"]`).daterangepicker(
        {
          singleDatePicker: false,
          numberOfMonths: 2,
          showDropdowns: true,
          minYear: 1901,
          autoApply: true,

          maxYear: parseInt(moment().format("YYYY"), 10),
          startDate: startDate,
          minDate: minDate,
          autoUpdateInput: false
        },
        function(start, end, label) {
          scope.ondArray.controls[index].patchValue({
            flightDate: moment(start).format("YYYY-MM-DD")
          });
          scope.loadDatePickers();
        }
      );
      $(function() {
        $(".calendar.right").show();
      });
    });
  }

  // TwoMonthDatePicker(){
  //   $(document).ready(function () {
  //     console.log("WE ARE");
  //     $('#towMonthsCal').daterangepicker({numberOfMonths:2,
  //     singleDatePicker:true,
  //   range:false})
  //   });
  // }
  loadConfig_new() {


  }

  loadConfig() {
    
    var scope = this;
    $(document).ready(function() {
      // scope.TwoMonthDatePicker();
      // var nowDate = new Date();
      // var today = new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);
      // var maxLimitDate = new Date(nowDate.getFullYear() + 1, nowDate.getMonth(), nowDate.getDate(), 0, 0, 0, 0);

      // $('input[name="tripOne"]').daterangepicker({
      //
      // "singleDatePicker": false,
      // "numberOfMonths":2,
      // "minDate": today,
      // "maxDate": maxLimitDate,
      // "opens": "left",
      // "locale": {
      //     format: 'DD MMM YYYY'
      //   }
      // }, function (start, end) {
      //   $("#tripOne").val(start.format('DD MMM YYYY'));
      //   $('#tripOne').parent().parent().removeClass('has-error');
      // });

      $(".ui.dropdown").dropdown();
      $(".ui.accordion").accordion();
      scope.loadDatePickers();
      $("#slider-range").slider({
        range: true,
        min: 0,
        max: 1440,
        step: 15,
        values: [540, 1020]
        
      });

      $("#slider-range2").slider({
        range: true,
        min: 0,
        max: 1440,
        step: 15,
        values: [540, 1020],
        slide: function(e, ui) {
          let hours1: any = Math.floor(ui.values[0] / 60);
          let minutes1: any = ui.values[0] - hours1 * 60;

          if (hours1.length == 1) hours1 = "0" + hours1;
          if (minutes1.length == 1) minutes1 = "0" + minutes1;
          if (minutes1 == 0) minutes1 = "00";
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
          $(".arrival-slider-time").val(hours1 + ":" + minutes1);

          let hours2: any = Math.floor(ui.values[1] / 60);
          let minutes2: any = ui.values[1] - hours2 * 60;

          if (hours2.length == 1) hours2 = "0" + hours2;
          if (minutes2.length == 1) minutes2 = "0" + minutes2;
          if (minutes2 == 0) minutes2 = "00";
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

          $(".arrival-slider-time2").val(hours2 + ":" + minutes2);
        }
      });

      var resizePopup = function() {
        $(".ui.popup").css("max-height", $(window).height());
      };

      $(window).resize(function(e) {
        resizePopup();
      });

      $(".flights_chck-grid__more-opt").popup({
        popup: $(".flights_chck-grid__popup"),
        lastResort: "bottom center",
        position: "bottom center",
        on: "click"
      });
    });
  }

  loadDatePickers() {
    var scope = this;
    $(document).ready(function() {
      scope.ondArray.controls.map((el, index) => {
        scope.loadFlightDate(index);
        // if (index == 0 || index < (scope.ondArray.controls.length - 1))
        //   scope.loadDepartureDate(index);
        // else scope.loadReturnDate(index);
      });
    });
  }

  ngAfterViewInit() {
    this.loadConfig();
    this.displayAncillary = this.searchResults.dispAncillary;
  }

  updateAncillary(anc: boolean) {
    this.screenTitle = "Passengers";
    this.displayAncillary = anc;
    this.flightsContainer = false;
  }

  setSearchResult(searchResult: boolean) {
    this.displayAncillary = false;
    this.searchResult = !searchResult;
    this.flightsContainer = searchResult;
    this.loadConfig();
  }

  setBookScreen(bookScreen: boolean) {
    this.screenTitle = "Passengers";
    this.displayBookScreen = bookScreen;
    this.flightsContainer = false;
  }

  activeOption(opt) {
    this.optionStatus = false;
    switch (opt) {
      case "price-option":
        this.optionStatus = !this.optionStatus;
        this.optName = opt;
        break;
      case "fareQuote-option":
        this.optionStatus = !this.optionStatus;
        this.optName = opt;
        break;
      case "travel-option":
        this.optionStatus = !this.optionStatus;
        this.optName = opt;
        break;
      case "fareSel-option":
        this.optionStatus = !this.optionStatus;
        this.optName = opt;
        break;
      case "qual-option":
        this.optionStatus = !this.optionStatus;
        this.optName = opt;
        break;
      case "tax-option":
        this.optionStatus = !this.optionStatus;
        this.optName = opt;
        break;
      case "service-option":
        this.optionStatus = !this.optionStatus;
        this.optName = opt;
        break;
    }
  }

  closeOption(opt) {
    switch (opt) {
      case "price-option":
        this.optionStatus = false;
        this.optName = opt;
        break;
      case "fareQuote-option":
        this.optionStatus = false;
        this.optName = opt;
        break;
      case "travel-option":
        this.optionStatus = false;
        this.optName = opt;
        break;
      case "fareSel-option":
        this.optionStatus = false;
        this.optName = opt;
        break;
      case "qual-option":
        this.optionStatus = false;
        this.optName = opt;
        break;
      case "tax-option":
        this.optionStatus = false;
        this.optName = opt;
        break;
      case "service-option":
        this.optionStatus = false;
        this.optName = opt;
        break;
    }
  }

  handleSelected($event) {
    console.log($event.target.checked);
    this.flightSearchForm.get("calendarDays").setValue($event.target.checked);
  }

  modifySearch() {
   
    this.modify = !this.modify;
    this.modifySearchView = true;
    console.log("Modifying search");
    if(this.modify){
      //this.loadConfig();
    }
    
    
  }

  showAdvanceOptions() {
    this.showAdvOption = !this.showAdvOption;
  }

  // checkPlaceHolder() {
  //   if (this.depPlaceHolder) {
  //     this.depPlaceHolder = null;
  //     return;
  //   } else {
  //     this.depPlaceHolder = 'Departure Airport, City, Mood';
  //     return
  //   }

  // }

  sameDayReturn() {
    this.twowayCheck = true;
    if (this.sameDayReturnFlag === false && this.numberOfInput == 1) {
      this.addOndArr();
    } else {
      this.removeOndArr(this.numberOfInput, 2);
    }
    // console.log(
    //   "ondArray.controls[i].flightDate.value",
    //   this.ondArray.controls[this.ondArray.length - 1]
    // );
    this.addFlight = false;
    this.sameDayReturnFlag = true;
    // console.log(this.numberOfInput);
    // if (this.sameDayReturnFlag && this.numberOfInput == 2) {
    //   console.log("I am inside of the sameday return");
    //   console.log(
    //     "this.ondArray.controls[0].value.flightDate",
    //     this.ondArray.controls[0].value.flightDate
    //   );
    //   this.ondArray.controls[1].value.flightDate = this.ondArray.controls[0].value.flightDate;
    //   console.log(
    //     "this.ondArray.controls[1].value.flightDate",
    //     this.ondArray.controls[1].value.flightDate
    //   );
 this.addOndArr();

    }
    // this.ondArray.value[1].flightDate = this.ondArray.value[0].flightDate;
    // this.OndAirport.push(this.ondArray.value[0].flightDate);
    // this.sameDayReturnDate.push(this.ondArray.value[0].flightDate);

    // this.sameDayReturnDate.push(this.ondArray.value[1].flightDate);


  showCalendarSearch(modalId: any) {
    this.modalService.open(modalId);
  }

  closeModal(modalId: any) {
    this.modalService.close(modalId);
  }

  // getFetchAllPos(){

  //   this.flightSearchService.fetchAllPos().subscribe((res: any) => {
  //     if (res.status) {

  //         this.allPos=res.result.data;
  //     }
  //     else {

  //       this.toastr.error(`${res.message}`, ``, {
  //         timeOut: 1000,
  //         progressBar: false,

  //         positionClass: 'toast-bottom-right'
  //       })

  //     }
  //   })
  // }

  // checkPlaceHolderDeparture(val) {
  //   if (val !== '') {
  //     this.depPlaceHolder = null;
  //     return;
  //   }
  //   if (this.depPlaceHolder) {
  //     this.depPlaceHolder = null;
  //     return;
  //   } else {
  //     this.depPlaceHolder = 'Departure Airport, City';
  //     return;
  //   }
  // }

  // checkPlaceHolderArrival(val) {
  //   if (val !== '') {
  //     this.arrPlaceHolder = null;
  //     return;
  //   }
  //   if (this.arrPlaceHolder) {
  //     this.arrPlaceHolder = null;
  //     return;
  //   } else {
  //     this.arrPlaceHolder = 'Arrival Airport, City';
  //     return;
  //   }
  // }
  swap(i) {
    //storing the departure value in a variable
    let departure = this.ondArray.controls[i].value.departure;
    //storing the arrival value in a variable
    let arrival = this.ondArray.controls[i].value.arrival;
    //swaping the values according to their index recieved as the parameter
    this.ondArray.controls[i].value.arrival = departure;
    this.ondArray.controls[i].value.departure = arrival;
    //assigning the swapped value to the from array
    (this.OndAirport[i].arrival = this.ondArray.controls[i].value.arrival),
      (this.OndAirport[i].departure = this.ondArray.controls[
        i
      ].value.departure);
  }

  airportChanged(i) {
    // console.log(event);
    //storing the departure value in a variable
    let departure = this.ondArray.controls[i].value.departure;
    //storing the arrival value in a variable
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
  display(val) {
    console.log(val);
  }
}
