import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  SimpleChange,
  Output,
  EventEmitter
} from "@angular/core";
import { ModalService } from "src/app/layout/_modal";
import { FlightSearchService } from "../../../../shared/services/flight-search.service";
import JsonFind from "json-find";
import * as _ from "lodash";
import { __values } from "tslib";
import { select, Store } from "@ngrx/store";
import { selectFlightSearchData } from "src/app/reducers";
import { take } from "rxjs/operators";
import { LoadFlightSearchResult } from "src/app/reducers/flight-search.actions";
import { TimeOutService } from "src/app/shared/services/time-out.service";
import { SeatMapService } from "../../../../shared/services/seat-map.service";
import { ToastrService } from 'ngx-toastr';
import { element } from "protractor";
import { isNumber } from 'util';
import { Globals } from "src/app/shared/utils/globals";
import { prepareGlobals } from 'src/app/shared/utils/common';
// import {TimerComponent} from '../../../../shared/time-counter/time-counter.component';
declare const $: any;

@Component({
  selector: "app-dynamic-search-results",
  templateUrl: "./dynamic-search-results.component.html",
  styleUrls: [
    "./../reshop/reshop-results/reshop-results.component.scss",
    "./dynamic-search-results.component.scss"
  ]
})
export class DynamicSearchResultsComponent implements OnInit {
  // @Input() flightSearchResults;

  //   flightSearchResults: any;

  @Input() preSearchObj;
  @Output() dispBookNowScreenEmitter = new EventEmitter<boolean>();
  // @Output() fareBaggage = new EventEmitter<boolean>();
  @Output() emitTicketPaxDetails = new EventEmitter<any>();
  globals: Globals;
  flightSearchResults_Z: any;
  flightSearchResults_ZRM: any;
  currency: string = "";
  totalFare: number = 0;
  departureDetails: any;
  journey: any;
  hour: any;
  min: any;
  //   selectedFlight :any = "FL-SEG-SU523-SU523-202001190855-202001191335-OSEG-SU2584-SU2584-202001191945-202001192105-O";
  //   selectedOffer : any = "1G_TVE9PV8wU1ZPTEhSLU5OQjswRFdDU1ZPLU5OQg==";
  // selectedFlight: any = "";
  // selectedOffer: any = "";
  selectedFlight: any = [];
  selectedOffer: any = [];
  offer: any;
  finalJSON12: any = [];
  flagShow: boolean = false;
  flagShow12: any;
  OfferGroup123: any = [];
  totalPrice: any = [];
  totalFlight: any = [];
  offerArr: any = [];
  flightArr: any = [];
  myJSON: any = [];
  lowestFareChange: any = "";
  priceChangeFlag: boolean = false;

  showtimingBlock: boolean = false;
  showDurr: boolean = false;
  airlineFilter: boolean = false;
  airportFilter: boolean = false;
  nearByFilter: boolean = false;
  layoverFilter: boolean = false;
  stopFilter: boolean = false;
  showPrice: boolean = false;
  fare_baggage_flag: boolean = false;

  flightInfoOpen: boolean = false;

  flightSearchResults: any;

  clickedOffer: boolean = false;
  displayFareBreakdown: boolean = false;

  activeCarousel: boolean = false;

  filterArr: any = {
    'airline': [],
    'airport': []
  };

  selectedAirlineValue: string;
  selectedAirportValue: string;
  selectedStoptValue: string;

  selectedAirportValueArr: any = [];

  airlineFltrData: any = []
  airportFltrData: any = {
    'departure': [],
    'arrival': {}
  }
  stopFltrData: any = {
    '0_Stops': {
      'isChecked': false,
    },
    '1_Stops': {
      'isChecked': false,
    },
    '2+_Stops': {
      'isChecked': false,
    }
  }




  filterObj: any = {
    airline: [{
      'name': 'Turkish',
      'ischecked': false,
      'code': 'TK'
    },
    {
      'name': 'Suuuu',
      'ischecked': false,
      'code': 'SU'
    }],
    isAirlineFilter: false

  }

  flightSearchResultsOg: any = {};
  numberOfResults = 0;

  slctdFlghtForFareRules: any = {}
  objSlctdFlghtForFareRules: any = {}

  dynamicPriceObj: any = []
  flightIndexObj: any = {}
  fareBaggageArr:any = []
  objectKeys = Object.keys;

  constructor(
    private modalService: ModalService,
    private FlightSearchService: FlightSearchService,
    private seatMapService: SeatMapService,
    private store: Store<{ airShoppingResponse: any }>,
    private toastr: ToastrService,
    //private Globals: Globals,
  ) { }

  counter(flight) {
    return this.flightSearchResults_Z.filter(e => e.DataLists !== null);
  }

  startDate: any;
  ngOnInit() {
    // console.log("GLOBAL VARIABLE",this.Globals.getOrganisationCreditLimit())
    let data: any = select(selectFlightSearchData);
    this.store.pipe(data, take(1)).subscribe((data: any) => {
      this.flightSearchResults = data.response;
      this.lowestFare();
      this.loadCarousel();
      $(".menu .item").tab();
      this.startDate = Date.now();
      console.log("DynamicSearch - Render Started");
    });

    this.flightSearchResultsOg = this.flightSearchResults;
    console.log("=======*******this.preSearchObj============", this.preSearchObj);
    this.buildFilterObject()
    this.globals = prepareGlobals();

  }

  ngAfterViewInit(): void {
    let milisecondsDiff = Date.now() - this.startDate;
    let time =
      Math.floor(milisecondsDiff / (1000 * 60 * 60)).toLocaleString(undefined, {
        minimumIntegerDigits: 2
      }) +
      ":" +
      (Math.floor(milisecondsDiff / (1000 * 60)) % 60).toLocaleString(
        undefined,
        { minimumIntegerDigits: 2 }
      ) +
      ":" +
      (Math.floor(milisecondsDiff / 1000) % 60).toLocaleString(undefined, {
        minimumIntegerDigits: 2
      });
    console.log("Render Time: " + time);

    $(document).mouseup(function(e) {
      console.log('mouse')
      var container = $(".timing-block");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
        this.showtimingBlock = false;
        this.showDurr = false;
        this.airlineFilter = false;
        this.airportFilter = false;
        this.nearByFilter = false;
        this.layoverFilter = false;
        this.stopFilter = false;
        this.showPrice = false;
      }
    });
  }

 /**
  * @ Mahin Anas Changes For Dynamic Price Change - Round Trip
  * Input: Get slected flight index and offer key index and required data
  * Output: updated price will get from for booking 
  * function call: forBooking_new() - To get JSON and Response
  * Start
  **/

  buildFilterObject() {
    if (this.flightSearchResultsOg.result.FlightOffer != undefined && this.flightSearchResultsOg.result.Errors == undefined) {

      let flightOffer = this.flightSearchResultsOg.result.FlightOffer
      this.dynamicPriceObj = []
      
      for (let i = 0; i < flightOffer.length; i++) {

        //AirLine Filter Obj
        this.airlineFltrData.push({
          'code': this.getAirlineCodeFn(this.flightSearchResultsOg.result.FlightOffer[i], this.flightSearchResultsOg.result),
          'name': this.getAirlineNameFn(this.flightSearchResultsOg.result.FlightOffer[i], this.flightSearchResultsOg.result),
          'cur': this.getCurCode(i, this.flightSearchResultsOg.result),
          'amt': this.getAmt(i, this.flightSearchResultsOg.result),
          'ischecked': false
        })

        //Stop Over Filter Obj
        for (let j = 0; j < this.flightSearchResultsOg.result.FlightOffer[i][Object.keys(this.flightSearchResultsOg.result.FlightOffer[i])[0]].length; j++) {
          let flightKey = this.flightSearchResultsOg.result.FlightOffer[i][Object.keys(this.flightSearchResultsOg.result.FlightOffer[i])[0]][j].flight
          let segLength = this.flightSearchResultsOg.result.FlightOffer[i][Object.keys(this.flightSearchResultsOg.result.FlightOffer[i])[0]][j][flightKey].segment[0].length

          if (segLength == 1) {

            if (this.stopFltrData['0_Stops'].Indexes == undefined) {
              this.stopFltrData['0_Stops'].Indexes = []
            }
            this.stopFltrData['0_Stops'].Indexes.push(i)
          } else if (segLength == 2) {

            if (this.stopFltrData['1_Stops'].Indexes == undefined) {
              this.stopFltrData['1_Stops'].Indexes = []
            }
            this.stopFltrData['1_Stops'].Indexes.push(i)
          } else if (segLength > 2) {

            if (this.stopFltrData['2+_Stops'].Indexes == undefined) {
              this.stopFltrData['2+_Stops'].Indexes = []
            }
            this.stopFltrData['2+_Stops'].Indexes.push(i)
          }
        }


        //build object for dynamic price change

        let flightObj = {}

        for (let m = 0; m < Object.keys(flightOffer[i]).length; m++) {
          if (flightObj[Object.keys(flightOffer[i])[m]] == undefined) {
            flightObj[Object.keys(flightOffer[i])[m]] = []
          }
          let segObjKey = Object.keys(flightOffer[i])[m];
          let segObj = flightOffer[i][segObjKey]

          for (let n = 0; n < segObj.length; n++) {
            let flightKey = segObj[n].flight
            let offersArr = segObj[n][flightKey].offers
            let tempSeg = []

            for (let p = 0; p < offersArr.length; p++) {

              let temp = {}

              if (p == 0) {
                temp[offersArr[p]] = true

              } else {
                temp[offersArr[p]] = false
              }

              if (flightObj[segObjKey][n] == undefined) {
                flightObj[segObjKey][n] = []
                if (n == 0) {
                  if (flightObj[segObjKey][n]['flightKey'] == undefined) flightObj[segObjKey][n]['flightKey'] = {}
                  flightObj[segObjKey][n]['flightKey'][flightKey] = true
                } else {
                  if (flightObj[segObjKey][n]['flightKey'] == undefined) flightObj[segObjKey][n]['flightKey'] = {}
                  flightObj[segObjKey][n]['flightKey'][flightKey] = false
                }

              }
              flightObj[segObjKey][n].push(temp)

            }
          }
        }

        this.dynamicPriceObj.push(flightObj)



        // }



      }

      this.airlineFltrData = _.uniqBy(this.airlineFltrData, 'code');
      this.stopFltrData['0_Stops'].Indexes = _.uniq(this.stopFltrData['0_Stops'].Indexes);
      this.stopFltrData['1_Stops'].Indexes = _.uniq(this.stopFltrData['1_Stops'].Indexes);
      this.stopFltrData['2+_Stops'].Indexes = _.uniq(this.stopFltrData['2+_Stops'].Indexes);
      console.log("this.airlineFltrData", this.airlineFltrData)
      console.log("this.stopFltrData", this.stopFltrData)


      _.forEach(this.flightSearchResultsOg.result.DataLists.FlightList, (v, k) => {

        if (this.airportFltrData.departure[v.SegmentReferences.attributes.OnPoint] == undefined) {
          if (v.SegmentReferences.attributes.OnPoint != undefined) {
            this.airportFltrData.departure[v.SegmentReferences.attributes.OnPoint] = {}

            if (this.airportFltrData.departure[v.SegmentReferences.attributes.OnPoint].flightKeys == undefined) {
              this.airportFltrData.departure[v.SegmentReferences.attributes.OnPoint].flightKeys = []
              this.airportFltrData.departure[v.SegmentReferences.attributes.OnPoint].isChecked = false
            }
            this.airportFltrData.departure[v.SegmentReferences.attributes.OnPoint].flightKeys.push(k)
            //this.airportFltrData.departure[v.SegmentReferences.attributes.OnPoint].isChecked = false
            // this.airportFltrData.departure['ischecked_'+ v.SegmentReferences.attributes.OnPoint] = false
          }

        } else {
          if (v.SegmentReferences.attributes.OnPoint != undefined) {
            this.airportFltrData.departure[v.SegmentReferences.attributes.OnPoint].flightKeys.push(k)
          }
        }

        if (this.airportFltrData.arrival[v.SegmentReferences.attributes.OffPoint] == undefined) {
          if (v.SegmentReferences.attributes.OffPoint != undefined) {
            this.airportFltrData.arrival[v.SegmentReferences.attributes.OffPoint] = {}

            if (this.airportFltrData.arrival[v.SegmentReferences.attributes.OffPoint].flightKeys == undefined) {
              this.airportFltrData.arrival[v.SegmentReferences.attributes.OffPoint].flightKeys = []
              this.airportFltrData.arrival[v.SegmentReferences.attributes.OffPoint].isChecked = false
            }
            this.airportFltrData.arrival[v.SegmentReferences.attributes.OffPoint].flightKeys.push(k)
          }
        } else {
          if (v.SegmentReferences.attributes.OffPoint != undefined) {
            this.airportFltrData.arrival[v.SegmentReferences.attributes.OffPoint].flightKeys.push(k)
          }
        }

      })

      console.log("this.airportFltrData", this.airportFltrData)

    }

    console.log("this.dynamicPriceObj", this.dynamicPriceObj)



  }

  onAirlineCheckboxChange(option, event) {
    this.displayFareBreakdown = false
    if (event.target.checked) {
      this.selectedAirlineValue = event.target.value + "_" + Math.random();
    } else {
      this.selectedAirlineValue = event.target.value + "_uncheck" + Math.random();
    }
  }
  onAirlineCarChange(code, event) {

    this.activeCarousel = !this.activeCarousel;
    this.displayFareBreakdown = false
    this.airlineFltrData.forEach((v, k) => {
      if (v.code == code) {
        v.ischecked = !v.ischecked

        if (v.ischecked) {

          this.selectedAirlineValue = code + "_" + Math.random();
        } else {

          this.selectedAirlineValue = code + "_uncheck" + Math.random();

        }

      }
    })



  }

  onStopCheckboxChange(option, event) {
    this.displayFareBreakdown = false
    if (event.target.checked) {
      this.selectedStoptValue = event.target.value + "_" + Math.random();

    } else {

      this.selectedStoptValue = event.target.value + "_uncheck" + Math.random();
    }
  }

  onAirporytCheckboxChange(option, event) {
    this.displayFareBreakdown = false
    if (event.target.checked) {
      this.selectedAirportValue = event.target.value + "_" + Math.random()
    } else {
      this.selectedAirportValue = event.target.value + "_uncheck" + Math.random()
    }

  }

  getAirlineCodeFn(obj, result) {

    let segment = obj[Object.keys(obj)[0]][0][obj[Object.keys(obj)[0]][0].flight].segment[0][0]

    let getAirlineCode = result.DataLists.FlightSegmentList[segment].MarketingCarrier.AirlineID.text;

    return getAirlineCode

  }

  getAirlineNameFn(obj, result) {

    let segment = obj[Object.keys(obj)[0]][0][obj[Object.keys(obj)[0]][0].flight].segment[0][0]

    let getAirlineName = result.DataLists.FlightSegmentList[segment].MarketingCarrier.Name.text;

    return getAirlineName

  }

  getCurCode(index, result) {
    let cur = result.OffersGroup[index].AirlineOfferSnapshot.Lowest.EncodedCurrencyPrice.attributes.Code
    return cur;
  }

  getAmt(index, result) {
    // 
    let amt = parseFloat(result.OffersGroup[index].AirlineOfferSnapshot.Lowest.EncodedCurrencyPrice.text).toFixed(2)
    return amt;
  }

  filter(flterName, index, result, event: Event) {


    let obj = _.cloneDeep(this.flightSearchResultsOg)
    obj.result.FlightOffer = []
    obj.result.OffersGroup = []
    obj.result.FlightOffer.push(this.flightSearchResultsOg.result.FlightOffer[index])
    obj.result.OffersGroup.push(this.flightSearchResultsOg.result.OffersGroup[index])

    this.store.dispatch(new LoadFlightSearchResult({ data: obj }));

    let data: any = select(selectFlightSearchData);
    this.store.pipe(data, take(1)).subscribe((data: any) => {

      this.flightSearchResults = data;
    })



    switch (flterName) {
      case 'carsoAirLine':
        //saveFlightSearchResultIntoAppState()
        // this.flightSearchResults.result.FlightOffer = ogFlightOfferRes.FlightOffer[index];
        //this.flightSearchResults.result.OffersGroup = ogFlightOfferRes.OffersGroup[index];

        break;

    }




  }

  getDynamicPrice(type,$event, flightOfferIndx, ondKey, selectedFlightIndx, selectedFlightValue, offerKeyIndx, offerKey, ormIndx, sectors) {

    
    //alert(type)
    //type == 'offerChange'){
    //type == 'rbdChange'){
      if(type == 'rbdChange' && $event.target.value == ''){
        return
       // alert("empty")
      }
      // if($($event.target).hasClass('rbd-edit-input') || $($event.target).hasClass('rbd-btn')){
      //   return
      // }
      
    let sectLen = Object.keys(sectors.value).length
    
    if(sectLen == 1){
    let offerArr = this.dynamicPriceObj[flightOfferIndx][ondKey][selectedFlightIndx]
    let flightArr = this.dynamicPriceObj[flightOfferIndx][ondKey]

    _.forEach(offerArr, (obj, key) => {
      if (!key.toString().includes("flightKey")) {
        obj[Object.keys(obj)[0]] = false
      }
    })

    for (let fa = 0; fa < flightArr.length; fa++) {
      flightArr[fa]["flightKey"][Object.keys(flightArr[fa]["flightKey"])[0]] = false
    }
    this.dynamicPriceObj[flightOfferIndx][ondKey][selectedFlightIndx][offerKeyIndx][offerKey] = true
    this.dynamicPriceObj[flightOfferIndx][ondKey][selectedFlightIndx]['flightKey'][selectedFlightValue.flight] = true

    
    if(type == 'offerChange'){
      let priceObj:any  = this.flightSearchResults.result.OffersGroup[flightOfferIndx].Offer[offerKey].TotalPrice.DetailCurrencyPrice.Total
      $('._totalprice_txt_' + flightOfferIndx)[0].innerText = priceObj.attributes.Code +' '+ parseFloat(priceObj.text).toFixed(2)
      $('._bknwBtn_' + flightOfferIndx).attr('data-price', parseFloat(priceObj.text).toFixed(2))

    }else if(type == 'rbdChange'){

      
      
    }
    
      



    }else if (sectLen > 1){
    let offerArr = this.dynamicPriceObj[flightOfferIndx][ondKey][selectedFlightIndx]
    let flightArr = this.dynamicPriceObj[flightOfferIndx][ondKey]

    _.forEach(offerArr, (obj, key) => {
      if (!key.toString().includes("flightKey")) {
        obj[Object.keys(obj)[0]] = false
      }
    })

    for (let fa = 0; fa < flightArr.length; fa++) {
      flightArr[fa]["flightKey"][Object.keys(flightArr[fa]["flightKey"])[0]] = false
    }

    this.dynamicPriceObj[flightOfferIndx][ondKey][selectedFlightIndx][offerKeyIndx][offerKey] = true
    this.dynamicPriceObj[flightOfferIndx][ondKey][selectedFlightIndx]['flightKey'][selectedFlightValue.flight] = true
    let ogResult: any = _.cloneDeep(this.flightSearchResultsOg.result)

    let flightKeysArr: any = []
    let offerKeysArr: any = []
    flightKeysArr.push(Object.keys(this.dynamicPriceObj[flightOfferIndx][ondKey][selectedFlightIndx]['flightKey'])[0])
    offerKeysArr.push(offerKey)

    let otherIndexObj: any = {}
    for (let fOnd = 0; fOnd < Object.keys(this.dynamicPriceObj[flightOfferIndx]).length; fOnd++) {

      if (Object.keys(this.dynamicPriceObj[flightOfferIndx])[fOnd] != ondKey) {
        let tempFlight = this.dynamicPriceObj[flightOfferIndx][Object.keys(this.dynamicPriceObj[flightOfferIndx])[fOnd]]
        for (let f = 0; f < tempFlight.length; f++) {
          if (this.dynamicPriceObj[flightOfferIndx][Object.keys(this.dynamicPriceObj[flightOfferIndx])[fOnd]][f]['flightKey'][Object.keys(this.dynamicPriceObj[flightOfferIndx][Object.keys(this.dynamicPriceObj[flightOfferIndx])[fOnd]][f]['flightKey'])[0]]) {
            for (let of = 0; of < tempFlight[f].length; of++) {

              let offerObj = tempFlight[f][of]
              if (offerObj[Object.keys(offerObj)[0]]) {

                otherIndexObj = {
                  'flightIndex': f,
                  'flightKey': Object.keys(this.dynamicPriceObj[flightOfferIndx][Object.keys(this.dynamicPriceObj[flightOfferIndx])[fOnd]][f]['flightKey'])[0],
                  'ond': Object.keys(this.dynamicPriceObj[flightOfferIndx])[fOnd],
                  'offerKey': Object.keys(offerObj)[0]
                }
              }
            }

          }
        }

      }
    }

    flightKeysArr.push(otherIndexObj.flightKey)
    offerKeysArr.push(otherIndexObj.offerKey)

    
    if(type == 'offerChange'){
      let result = this.forBooking_new(flightOfferIndx, flightKeysArr, offerKeysArr, "twoWayDynamicPriceChange", '','');
    }else if(type == 'rbdChange'){
      
      let event = $event
      let slctdFlightKey = selectedFlightValue.flight 
      let segArr = selectedFlightValue[selectedFlightValue.flight].segment[0]
      this.forBookingRbd($event,flightOfferIndx, flightKeysArr, offerKeysArr,event.target.value,slctdFlightKey,segArr);
    }

    
    }
  }

  forBookingRbd($event,flightIndex, flightKeyArr, offerKeyArr,rbdValue,slctdFlightKey,segArr){
    
    this.myJSON = []

    let ormFlag = flightKeyArr.length

    if (ormFlag == 1) { //Oneway


      this.offerArr = offerKeyArr
      this.flightArr = flightKeyArr

      let doc = JsonFind(this.flightSearchResults);
      var selectedFlight_Z = this.flightArr;
      var selectedOffer_Z = this.offerArr;
      var selected1: any = [];
      selectedFlight_Z.forEach(element => {
        let tmp = doc.findValues(element);
        console.log("this is element", tmp);
        let segArr = tmp[element].SegmentReferences.text.split(" ")
        selected1.push(segArr)
        this.selectedFlight.push(tmp);
      });
      let OfferGroup: any = []
      selectedOffer_Z.forEach(element => {
        this.selectedOffer.push(doc.findValues(element));
        this.OfferGroup123.push(doc.findValues(element));
        OfferGroup.push(doc.findValues(element));
      });
      let segmentItself: any = [];
      selected1.forEach(element => {
        element.forEach(e => {
          segmentItself.push(doc.findValues(e))
        });

        // if (Array.isArray(element)) {
        //   element.forEach(e => {
        //     segmentItself.push()
        //   });
        // } else {
        //   doc.findValues(element);
        // }
      });
      let selectedOfferPrice: any = [];
      let selectedAssociation: any = [];
      this.OfferGroup123.forEach((element, index) => {
        selectedOfferPrice.push(_.values(element)[0].PricedOffer.OfferPrice);
        // selectedAssociation.push(_.values(element)[0].PricedOffer.Associations);
        selectedAssociation = (_.values(element)[0].PricedOffer.Associations);
      });
      let myOfferPriceList = [];
      let myAssociations: any = [];
      let myOfferPriceListOfferItemIDTmp = [];
      selected1.forEach(element => {
        selectedOfferPrice.forEach(e => {
          e.map(mySelectedOfferPrice => {
            console.log(mySelectedOfferPrice);
            mySelectedOfferPrice.FareDetail.FareComponent.forEach(mySelectedOfferPriceFareComponent => {
              let tmpText = mySelectedOfferPriceFareComponent.SegmentReference.text;
              console.log("TMPTEXT", tmpText);
              if (typeof tmpText == 'string') {
                // do thing
              } else {
                tmpText = tmpText["#text"];
              }
              // if (Array.isArray(element)) {
              //   element.forEach(element1 => {
              //     if (element1 == tmpText
              //       && myOfferPriceListOfferItemIDTmp.filter(e => e == mySelectedOfferPrice.attributes.OfferItemID).length == 0) {
              //       myOfferPriceList.push(mySelectedOfferPrice);
              //       myOfferPriceListOfferItemIDTmp.push(mySelectedOfferPrice.attributes.OfferItemID);
              //     }
              //   });
              // } else {
              if (element == tmpText
                && myOfferPriceListOfferItemIDTmp.filter(e => e == mySelectedOfferPrice.attributes.OfferItemID).length == 0) {
                myOfferPriceList.push(mySelectedOfferPrice);
                myOfferPriceListOfferItemIDTmp.push(mySelectedOfferPrice.attributes.OfferItemID);
              }
              // }
            });
          });
        });
      });
      console.log("OfferPriceList", myOfferPriceList);
      selectedAssociation.forEach(element => {
        // element.map(mySelectedAssociation => {
        element.ApplicableFlight.FlightReferences.forEach(mySelectedAssociationFlight => {
          selectedFlight_Z.forEach(e => {
            if (e == mySelectedAssociationFlight.text) {
              //myAssociations.push(mySelectedAssociation);
              myAssociations = element;
            }
          });
        })
        // });
      });
      console.log("My Association", myAssociations);
      let myFLightSegmentList: any = [];
      let myFLightSegmentListTmp: any = [];
      segmentItself.forEach(element => {
        myFLightSegmentListTmp.push(_.values(element))
      });
      console.log("My flight segment list 1", myFLightSegmentListTmp);

      myFLightSegmentListTmp.forEach(element => {
        element.map((flightSeg: any, flightSegIndex) => {
          //let newObject = { ClassOfService: myAssociations[0].ApplicableFlight.FlightSegmentReference[0].ClassOfService }
          let newObject = { ClassOfService: myAssociations.ApplicableFlight.FlightSegmentReference[0].ClassOfService }
          delete flightSeg.ClassOfService
          Object.assign(newObject, flightSeg)
          myFLightSegmentList = newObject
        })
      });
      console.log("My flight segment list 2", myFLightSegmentList);
      let Segment: any = [];
      let OriginDestinationList_FP: any = [];
      selectedFlight_Z.forEach(element => {
        Segment.push(this.flightSearchResults.result.DataLists.FlightList[element].SegmentReferences.text.split(" "));
        OriginDestinationList_FP.push(
          [{
            OnPoint: this.flightSearchResults.result.DataLists.FlightList[element].SegmentReferences.attributes.OnPoint,
            OffPoint: this.flightSearchResults.result.DataLists.FlightList[element].SegmentReferences.attributes.OffPoint,
            segment: Segment,
            flight: element
          }]
        )
      });
      console.log("SEGMENT", Segment);
      console.log("OND LIST", OriginDestinationList_FP);
      let OfferGroupOwner: any = [];
      let tmpObj: any = {};

      selectedOffer_Z.forEach(element => {
        OfferGroupOwner.push(this.flightSearchResults.result.OffersGroup.filter(e => e.Offer[element])[0]);
        Object.assign(tmpObj, doc.findValues(element));


      });
      let tmpObj2: any = { Owner: OfferGroupOwner[0].BOwner.text };
      //tmpObj2.push({ Owner: OfferGroupOwner[0].BOwner.text }) //OUT
      // console.log("--CHECK---")
      // console.log(tmpObj2);
      // console.log("TMP OBJJJJJJ", tmpObj2);
      Object.assign(tmpObj2, _.values(tmpObj));
      console.log("TEMP TEMP TEMP TEMP", _.values(tmpObj)[0].PricedOffer);
      let myPricedOffer = {
        OfferPrice: myOfferPriceList,
        Associations: myAssociations
      }
      console.log("temporary object 1", tmpObj);
      console.log("temporary object 2", tmpObj2);
      tmpObj2.PricedOffer = myPricedOffer;
      localStorage.setItem("ECK_TOKEN", this.flightSearchResults.result.AirShoppingRS.EchoToken);
      // console.log("THIS IS ", this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID);
      let ShoppingResponseID = "";
      if (this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID !== undefined) {
        ShoppingResponseID = this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID.ResponseID
        localStorage.setItem("shopping_id", this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID.ResponseID);
      } else if (this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID == undefined) {
        localStorage.setItem("shopping_id", "");
      }
      let myFareList = [];
      let listkeyt = [];
      for (const [key, value] of Object.entries(this.flightSearchResults.result.DataLists.FareList)) {
        let item: any = value;
        let newObject = {}
        // console.log("flight PRICE rq ITEM", item);
        if (!item.Fare.hasOwnProperty("FareDetail")) {
          OfferGroup.forEach(element => {
            let tmp = _.values(element)[0].PricedOffer.OfferPrice[0].FareDetail.FareComponent[0]
            // console.log("CHECK TMP-----------------------------------", tmp);
            if (tmp.attributes.refs == item.attributes.ListKey) {
              newObject = {
                attributes: item.attributes,
                FareBasisCode: item.FareBasisCode,
                Fare: {
                  FareCode: item.Fare.FareCode,
                  FareDetail: _.values(element)[0].PricedOffer.OfferPrice[0].FareDetail
                }
              }
              if (listkeyt.filter(e => e == item.attributes.ListKey).length == 0) {
                listkeyt.push(item.attributes.ListKey)
                myFareList.push(newObject)
              }
            }
          });
        } else {
          Object.assign(newObject, item)
          if (listkeyt.filter(e => e === item.attributes.ListKey).length === 0) {
            listkeyt.push(item.attributes.ListKey)
            myFareList.push(newObject)
          }
        }
      }
      // console.log("MY FARE LIST", myFareList)
      let flightlistvalue: any = [];
      selectedFlight_Z.forEach(element => {
        flightlistvalue.push(doc.findValues(element))
      });
      let myJSON = {
        EchoToken: this.flightSearchResults.result.AirShoppingRS.EchoToken,
        bookingFor : this.preSearchObj.onBehalfOf,
        ShoppingResponseID: ShoppingResponseID,
        DataLists: {
          FlightList: flightlistvalue,
          FlightSegmentList: myFLightSegmentList,
          OriginDestinationList: OriginDestinationList_FP,
          AnonymousTravellerList: this.preSearchObj.ACI,
          FareList: myFareList
        },
        OffersGroup: _.values(tmpObj),
        Owner: OfferGroupOwner[0].BOwner.text,
        PriceClassList: this.flightSearchResults.result.DataLists.PriceClassList,
        Metadata: this.flightSearchResults.result.Metadata
      }
      console.log("MY JSON", myJSON);
      this.myJSON = myJSON;

      
    } else if (ormFlag == 2) { //Round Trip
      
      this.offerArr = offerKeyArr
      this.flightArr = flightKeyArr

      let doc = JsonFind(this.flightSearchResults);
      var selectedFlight_Z = this.flightArr;
      var selectedOffer_Z = this.offerArr;
      var selected1: any = [];

      selectedFlight_Z.forEach(element => {
        let tmp = doc.findValues(element);
        console.log("----- FEQ : DIRECT BOOK : SegRef : BGN -----");
        console.log(tmp[element].SegmentReferences.text);
        console.log("----- FEQ : DIRECT BOOK : SegRef : END -----");
        let segArr = tmp[element].SegmentReferences.text.split(" ");
        selected1.push(segArr);
        this.selectedFlight.push(tmp);
      });
      let OfferGroup: any = [];
      selectedOffer_Z.forEach(element => {
        this.selectedOffer.push(doc.findValues(element));
        this.OfferGroup123.push(doc.findValues(element));
        OfferGroup.push(doc.findValues(element));
      });
      let segmentItself: any = [];
      selected1.forEach(element => {
        element.forEach(e => {
          segmentItself.push(doc.findValues(e));
        });

        // if (Array.isArray(element)) {
        //   element.forEach(e => {
        //     segmentItself.push()
        //   });
        // } else {
        //   doc.findValues(element);
        // }
      });
      let selectedOfferPrice: any = [];
      let selectedAssociation: any = [];
      this.OfferGroup123.forEach((element, index) => {
        selectedOfferPrice.push(_.values(element)[0].PricedOffer.OfferPrice);
        selectedAssociation.push(_.values(element)[0].PricedOffer.Associations);
      });
      let myOfferPriceList = [];
      let myAssociations = [];
      let myOfferPriceListOfferItemIDTmp = [];
      selected1.forEach(element => {
        selectedOfferPrice.forEach(e => {
          e.map(mySelectedOfferPrice => {
            console.log(mySelectedOfferPrice);
            mySelectedOfferPrice.FareDetail.FareComponent.forEach(
              mySelectedOfferPriceFareComponent => {
                let tmpText =
                  mySelectedOfferPriceFareComponent.SegmentReference.text;
                console.log("TMPTEXT", tmpText);
                if (typeof tmpText == "string") {
                  // do thing
                } else {
                  tmpText = tmpText["#text"];
                }
                // if (Array.isArray(element)) {
                //   element.forEach(element1 => {
                //     if (element1 == tmpText
                //       && myOfferPriceListOfferItemIDTmp.filter(e => e == mySelectedOfferPrice.attributes.OfferItemID).length == 0) {
                //       myOfferPriceList.push(mySelectedOfferPrice);
                //       myOfferPriceListOfferItemIDTmp.push(mySelectedOfferPrice.attributes.OfferItemID);
                //     }
                //   });
                // } else {
                if (
                  element == tmpText &&
                  myOfferPriceListOfferItemIDTmp.filter(
                    e => e == mySelectedOfferPrice.attributes.OfferItemID
                  ).length == 0
                ) {
                  myOfferPriceList.push(mySelectedOfferPrice);
                  myOfferPriceListOfferItemIDTmp.push(
                    mySelectedOfferPrice.attributes.OfferItemID
                  );
                }
                // }
              }
            );
          });
        });
      });
      console.log("OfferPriceList", myOfferPriceList);
      selectedAssociation.forEach(element => {
        element.map(mySelectedAssociation => {
          mySelectedAssociation.ApplicableFlight.FlightReferences.forEach(
            mySelectedAssociationFlight => {
              selectedFlight_Z.forEach(e => {
                if (e == mySelectedAssociationFlight.text) {
                  myAssociations.push(mySelectedAssociation);
                }
              });
            }
          );
        });
      });
      console.log("My Association", myAssociations);
      let myFLightSegmentList = [];
      let myFLightSegmentListTmp: any = [];
      segmentItself.forEach(element => {
        myFLightSegmentListTmp.push(_.values(element));
      });
      console.log("My flight segment list 1", myFLightSegmentListTmp);

      myFLightSegmentListTmp.forEach(element => {
        element.map((flightSeg: any, flightSegIndex) => {
          let newObject = {
            ClassOfService:
              myAssociations[0].ApplicableFlight.FlightSegmentReference[0]
                .ClassOfService
          };
          Object.assign(newObject, flightSeg);
          myFLightSegmentList.push(newObject);
        });
      });
      console.log("My flight segment list 2", myFLightSegmentList);
      let Segment: any = [];
      let OriginDestinationList_FP: any = [];
      selectedFlight_Z.forEach(element => {
        Segment.push(
          this.flightSearchResults.result.DataLists.FlightList[
            element
          ].SegmentReferences.text.split(" ")
        );
        OriginDestinationList_FP.push([
          {
            OnPoint: this.flightSearchResults.result.DataLists.FlightList[element]
              .SegmentReferences.attributes.OnPoint,
            OffPoint: this.flightSearchResults.result.DataLists.FlightList[
              element
            ].SegmentReferences.attributes.OffPoint,
            segment: Segment,
            flight: element
          }
        ]);
      });
      console.log("SEGMENT", Segment);
      console.log("OND LIST", OriginDestinationList_FP);
      let OfferGroupOwner: any = [];
      let tmpObj: any = {};

      selectedOffer_Z.forEach(element => {
        OfferGroupOwner.push(
          this.flightSearchResults.result.OffersGroup.filter(
            e => e.Offer[element]
          )[0]
        );
        Object.assign(tmpObj, doc.findValues(element));
      });
      let tmpObj2: any = { Owner: OfferGroupOwner[0].BOwner.text };
      //tmpObj2.push({ Owner: OfferGroupOwner[0].BOwner.text }) //OUT
      // console.log("--CHECK---")
      // console.log(tmpObj2);
      // console.log("TMP OBJJJJJJ", tmpObj2);
      Object.assign(tmpObj2, _.values(tmpObj));
      console.log("TEMP TEMP TEMP TEMP", _.values(tmpObj)[0].PricedOffer);
      let myPricedOffer = {
        OfferPrice: myOfferPriceList,
        Associations: myAssociations
      };
      console.log("temporary object 1", tmpObj);
      console.log("temporary object 2", tmpObj2);
      tmpObj2.PricedOffer = myPricedOffer;
      localStorage.setItem(
        "ECK_TOKEN",
        this.flightSearchResults.result.AirShoppingRS.EchoToken
      );
      console.log(
        "THIS IS ",
        this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID
      );
      let ShoppingResponseID = "";
      if (
        this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID !==
        undefined
      ) {
        ShoppingResponseID = this.flightSearchResults.result.AirShoppingRS
          .ShoppingResponseID.ResponseID;
        localStorage.setItem(
          "shopping_id",
          this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID
            .ResponseID
        );
      } else if (
        this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID ==
        undefined
      ) {
        localStorage.setItem("shopping_id", "");
      }
      let myFareList = [];
      let listkeyt = [];
      for (const [key, value] of Object.entries(
        this.flightSearchResults.result.DataLists.FareList
      )) {
        let item: any = value;
        let newObject = {};
        console.log("flight PRICE rq ITEM", item);
        if (!item.Fare.hasOwnProperty("FareDetail")) {
          OfferGroup.forEach(element => {
            let tmp = _.values(element)[0].PricedOffer.OfferPrice[0].FareDetail
              .FareComponent[0];
            // console.log("CHECK TMP-----------------------------------", tmp);
            if (tmp.attributes.refs == item.attributes.ListKey) {
              newObject = {
                attributes: item.attributes,
                FareBasisCode: item.FareBasisCode,
                Fare: {
                  FareCode: item.Fare.FareCode,
                  FareDetail: _.values(element)[0].PricedOffer.OfferPrice[0]
                    .FareDetail
                }
              };
              if (
                listkeyt.filter(e => e == item.attributes.ListKey).length == 0
              ) {
                listkeyt.push(item.attributes.ListKey);
                myFareList.push(newObject);
              }
            }
          });
        } else {
          Object.assign(newObject, item);
          if (listkeyt.filter(e => e === item.attributes.ListKey).length === 0) {
            listkeyt.push(item.attributes.ListKey);
            myFareList.push(newObject);
          }
        }
      }
      // console.log("MY FARE LIST", myFareList)
      let flightlistvalue: any = [];
      selectedFlight_Z.forEach(element => {
        flightlistvalue.push(doc.findValues(element));
      });
      let myJSON = {
        EchoToken: this.flightSearchResults.result.AirShoppingRS.EchoToken,
        bookingFor : this.preSearchObj.onBehalfOf,
        ShoppingResponseID: ShoppingResponseID,
        DataLists: {
          FlightList: flightlistvalue,
          FlightSegmentList: myFLightSegmentList,
          OriginDestinationList: OriginDestinationList_FP,
          AnonymousTravellerList: this.preSearchObj.ACI,
          FareList: myFareList
        },
        OffersGroup: _.values(tmpObj),
        Owner: OfferGroupOwner[0].BOwner.text,
        PriceClassList: this.flightSearchResults.result.DataLists.PriceClassList,
        Metadata: this.flightSearchResults.result.Metadata
      };
      console.log("MY JSON", myJSON);
      this.myJSON = myJSON;


      
    }
    
    console.log(this.myJSON)
    let myJSONTemp  = _.cloneDeep(this.myJSON)
    for(let seg = 0; seg < segArr.length; seg++){
      if(myJSONTemp.DataLists.FlightSegmentList[seg].attributes.SegmentKey == segArr[seg]){
        if(myJSONTemp.DataLists.FlightSegmentList[seg].ClassOfService.Code.text['#text'] != undefined && myJSONTemp.DataLists.FlightSegmentList[seg].ClassOfService.Code.text['#text'] != null){
          myJSONTemp.DataLists.FlightSegmentList[seg].ClassOfService.Code.text['#text'] = rbdValue.toUpperCase()
        }else if(myJSONTemp.DataLists.FlightSegmentList[seg].ClassOfService.Code.text != undefined && myJSONTemp.DataLists.FlightSegmentList[seg].ClassOfService.Code.text != null){
          myJSONTemp.DataLists.FlightSegmentList[seg].ClassOfService.Code.text = rbdValue.toUpperCase()
        }
      }

    }

    
    this.FlightSearchService.flightPriceRequest(myJSONTemp).subscribe(results => {
      
      let flightPricePriceChange: any = results['result']
        if(flightPricePriceChange.Errors == undefined){

        if (!this.fare_baggage_flag) {
        
          let priceUpdateValue = _.values(flightPricePriceChange.AirlineOffer)[0].TotalPrice.DetailCurrencyPrice.Total.text;
          console.log("TALEB", results);
          localStorage.setItem("fPJson", JSON.stringify(results));
          $('._totalprice_txt_' + flightIndex)[0].innerText = "GBP " + parseFloat(priceUpdateValue).toFixed(2)
          $('._bknwBtn_' + flightIndex).attr('data-price', parseFloat(priceUpdateValue).toFixed(2))
          
          $($event.target).parent().parent().find('.rbd-btn').text(rbdValue)
          $($event.target).parent().parent().find('._editRbdDiv').addClass('none')
          $($event.target).parent().parent().find('.rbd-btn').removeClass('none')
        } else {
          localStorage.setItem("fareBaggageJson", JSON.stringify(results));
          console.log("fare and baggage results", results);

          return results;
        }
      }else{

        let errorText:string  = flightPricePriceChange.Errors.Error["#text"]
        this.toastr.error(errorText,'Flight Price Error', {
          timeOut: 3000,
        positionClass: 'toast-bottom-right'
      });
        
      }
     
    }); 
    


  }

  getFareDetails(modalId: any,$event, flightKeyValueObj) {

    let flightIndx = flightKeyValueObj.key;
    let tempResMapedObj: any = this.dynamicPriceObj
    this.fareBaggageArr = []
    let ormFlag = Object.keys(flightKeyValueObj.value).length; // get oneway/roundtrip/multiway
    let flightKeysArr: any = []
    let offerKeysArr: any = []
    
    _.forEach(tempResMapedObj[flightIndx], (v, k) => {
      for (let i = 0; i < v.length; i++) { //v[i] -- get no of flights
        if (v[i].flightKey[Object.keys(v[i].flightKey)[0]]) { // Flight Key - true
          for (let j = 0; j < v[i].length; j++) {
            if (v[i][j][Object.keys(v[i][j])[0]]) {
              flightKeysArr.push(Object.keys(v[i].flightKey)[0])
              offerKeysArr.push(Object.keys(v[i][j])[0])
            }
          }
        }
      }
    })

    if(modalId == 'fare_details'){
      this.forBooking_new(flightIndx, flightKeysArr, offerKeysArr, "fareDetails", ormFlag, modalId);
    }else if(modalId == 'Book_Now'){
      this.forBooking_new(flightIndx, flightKeysArr, offerKeysArr, "bookNowButton", ormFlag, modalId);
    }

  }

  forBooking_new(flightIndex, flightKeyArr, offerKeyArr, bookFlag, ormFlag, modalId) {
    this.myJSON = []
  //Using for dynamic price change for Round Trip
    if (bookFlag == 'twoWayDynamicPriceChange') {
      this.flightArr = flightKeyArr;
      this.offerArr = offerKeyArr;
      let doc = JsonFind(this.flightSearchResults);
      var selectedFlight_Z = this.flightArr;
      var selectedOffer_Z = this.offerArr;
      var selected1: any = [];
      selectedFlight_Z.forEach(element => {
        let tmp = doc.findValues(element);
        console.log("----- FEQ : DIRECT BOOK : SegRef : BGN -----");
        console.log(tmp[element].SegmentReferences.text);
        console.log("----- FEQ : DIRECT BOOK : SegRef : END -----");
        let segArr = tmp[element].SegmentReferences.text.split(" ");
        selected1.push(segArr);
        this.selectedFlight.push(tmp);
      });
      let OfferGroup: any = [];
      selectedOffer_Z.forEach(element => {
        this.selectedOffer.push(doc.findValues(element));
        this.OfferGroup123.push(doc.findValues(element));
        OfferGroup.push(doc.findValues(element));
      });
      let segmentItself: any = [];
      selected1.forEach(element => {
        element.forEach(e => {
          segmentItself.push(doc.findValues(e));
        });

        // if (Array.isArray(element)) {
        //   element.forEach(e => {
        //     segmentItself.push()
        //   });
        // } else {
        //   doc.findValues(element);
        // }
      });
      let selectedOfferPrice: any = [];
      let selectedAssociation: any = [];
      this.OfferGroup123.forEach((element, index) => {
        selectedOfferPrice.push(_.values(element)[0].PricedOffer.OfferPrice);
        selectedAssociation.push(_.values(element)[0].PricedOffer.Associations);
      });
      let myOfferPriceList = [];
      let myAssociations = [];
      let myOfferPriceListOfferItemIDTmp = [];
      selected1.forEach(element => {
        selectedOfferPrice.forEach(e => {
          e.map(mySelectedOfferPrice => {
            console.log(mySelectedOfferPrice);
            mySelectedOfferPrice.FareDetail.FareComponent.forEach(
              mySelectedOfferPriceFareComponent => {
                let tmpText =
                  mySelectedOfferPriceFareComponent.SegmentReference.text;
                console.log("TMPTEXT", tmpText);
                if (typeof tmpText == "string") {
                  // do thing
                } else {
                  tmpText = tmpText["#text"];
                }
                // if (Array.isArray(element)) {
                //   element.forEach(element1 => {
                //     if (element1 == tmpText
                //       && myOfferPriceListOfferItemIDTmp.filter(e => e == mySelectedOfferPrice.attributes.OfferItemID).length == 0) {
                //       myOfferPriceList.push(mySelectedOfferPrice);
                //       myOfferPriceListOfferItemIDTmp.push(mySelectedOfferPrice.attributes.OfferItemID);
                //     }
                //   });
                // } else {
                if (
                  element == tmpText &&
                  myOfferPriceListOfferItemIDTmp.filter(
                    e => e == mySelectedOfferPrice.attributes.OfferItemID
                  ).length == 0
                ) {
                  myOfferPriceList.push(mySelectedOfferPrice);
                  myOfferPriceListOfferItemIDTmp.push(
                    mySelectedOfferPrice.attributes.OfferItemID
                  );
                }
                // }
              }
            );
          });
        });
      });
      console.log("OfferPriceList", myOfferPriceList);
      selectedAssociation.forEach(element => {
        element.map(mySelectedAssociation => {
          mySelectedAssociation.ApplicableFlight.FlightReferences.forEach(
            mySelectedAssociationFlight => {
              selectedFlight_Z.forEach(e => {
                if (e == mySelectedAssociationFlight.text) {
                  myAssociations.push(mySelectedAssociation);
                }
              });
            }
          );
        });
      });
      console.log("My Association", myAssociations);
      let myFLightSegmentList = [];
      let myFLightSegmentListTmp: any = [];
      segmentItself.forEach(element => {
        myFLightSegmentListTmp.push(_.values(element));
      });
      console.log("My flight segment list 1", myFLightSegmentListTmp);

      myFLightSegmentListTmp.forEach(element => {
        element.map((flightSeg: any, flightSegIndex) => {
          let newObject = {
            ClassOfService:
              myAssociations[0].ApplicableFlight.FlightSegmentReference[0]
                .ClassOfService
          };
          Object.assign(newObject, flightSeg);
          myFLightSegmentList.push(newObject);
        });
      });
      console.log("My flight segment list 2", myFLightSegmentList);
      let Segment: any = [];
      let OriginDestinationList_FP: any = [];
      selectedFlight_Z.forEach(element => {
        Segment.push(
          this.flightSearchResults.result.DataLists.FlightList[
            element
          ].SegmentReferences.text.split(" ")
        );
        OriginDestinationList_FP.push([
          {
            OnPoint: this.flightSearchResults.result.DataLists.FlightList[element]
              .SegmentReferences.attributes.OnPoint,
            OffPoint: this.flightSearchResults.result.DataLists.FlightList[
              element
            ].SegmentReferences.attributes.OffPoint,
            segment: Segment,
            flight: element
          }
        ]);
      });
      console.log("SEGMENT", Segment);
      console.log("OND LIST", OriginDestinationList_FP);
      let OfferGroupOwner: any = [];
      let tmpObj: any = {};

      selectedOffer_Z.forEach(element => {
        OfferGroupOwner.push(
          this.flightSearchResults.result.OffersGroup.filter(
            e => e.Offer[element]
          )[0]
        );
        Object.assign(tmpObj, doc.findValues(element));
      });
      let tmpObj2: any = { Owner: OfferGroupOwner[0].BOwner.text };
      //tmpObj2.push({ Owner: OfferGroupOwner[0].BOwner.text }) //OUT
      // console.log("--CHECK---")
      // console.log(tmpObj2);
      // console.log("TMP OBJJJJJJ", tmpObj2);
      Object.assign(tmpObj2, _.values(tmpObj));
      console.log("TEMP TEMP TEMP TEMP", _.values(tmpObj)[0].PricedOffer);
      let myPricedOffer = {
        OfferPrice: myOfferPriceList,
        Associations: myAssociations
      };
      console.log("temporary object 1", tmpObj);
      console.log("temporary object 2", tmpObj2);
      tmpObj2.PricedOffer = myPricedOffer;
      localStorage.setItem(
        "ECK_TOKEN",
        this.flightSearchResults.result.AirShoppingRS.EchoToken
      );
      console.log(
        "THIS IS ",
        this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID
      );
      let ShoppingResponseID = "";
      if (
        this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID !==
        undefined
      ) {
        ShoppingResponseID = this.flightSearchResults.result.AirShoppingRS
          .ShoppingResponseID.ResponseID;
        localStorage.setItem(
          "shopping_id",
          this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID
            .ResponseID
        );
      } else if (
        this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID ==
        undefined
      ) {
        localStorage.setItem("shopping_id", "");
      }
      let myFareList = [];
      let listkeyt = [];
      for (const [key, value] of Object.entries(
        this.flightSearchResults.result.DataLists.FareList
      )) {
        let item: any = value;
        let newObject = {};
        console.log("flight PRICE rq ITEM", item);
        if (!item.Fare.hasOwnProperty("FareDetail")) {
          OfferGroup.forEach(element => {
            let tmp = _.values(element)[0].PricedOffer.OfferPrice[0].FareDetail
              .FareComponent[0];
            if (tmp.attributes.refs == item.attributes.ListKey) {
              newObject = {
                attributes: item.attributes,
                FareBasisCode: item.FareBasisCode,
                Fare: {
                  FareCode: item.Fare.FareCode,
                  FareDetail: _.values(element)[0].PricedOffer.OfferPrice[0]
                    .FareDetail
                }
              };
              if (
                listkeyt.filter(e => e == item.attributes.ListKey).length == 0
              ) {
                listkeyt.push(item.attributes.ListKey);
                myFareList.push(newObject);
              }
            }
          });
        } else {
          Object.assign(newObject, item);
          if (listkeyt.filter(e => e === item.attributes.ListKey).length === 0) {
            listkeyt.push(item.attributes.ListKey);
            myFareList.push(newObject);
          }
        }
      }
      // console.log("MY FARE LIST", myFareList)
      let flightlistvalue: any = [];
      selectedFlight_Z.forEach(element => {
        flightlistvalue.push(doc.findValues(element));
      });
      let myJSON = {
        EchoToken: this.flightSearchResults.result.AirShoppingRS.EchoToken,
        ShoppingResponseID: ShoppingResponseID,
        bookingFor : this.preSearchObj.onBehalfOf,
        DataLists: {
          FlightList: flightlistvalue,
          FlightSegmentList: myFLightSegmentList,
          OriginDestinationList: OriginDestinationList_FP,
          AnonymousTravellerList: this.preSearchObj.ACI,
          FareList: myFareList
        },
        OffersGroup: _.values(tmpObj),
        Owner: OfferGroupOwner[0].BOwner.text,
        PriceClassList: this.flightSearchResults.result.DataLists.PriceClassList,
        Metadata: this.flightSearchResults.result.Metadata
      };
      console.log("MY JSON", myJSON);
      this.myJSON = myJSON;

      this.FlightSearchService.flightPriceRequest(myJSON).subscribe(results => {
        console.log(results);

        let flightPricePriceChange: any = results['result']
        if(flightPricePriceChange.Errors == undefined){

        if (!this.fare_baggage_flag) {
        
          let priceUpdateValue = _.values(flightPricePriceChange.AirlineOffer)[0].TotalPrice.DetailCurrencyPrice.Total.text;
          console.log("TALEB", results);
          localStorage.setItem("fPJson", JSON.stringify(results));
          $('._totalprice_txt_' + flightIndex)[0].innerText = "GBP " + parseFloat(priceUpdateValue).toFixed(2)
          $('._bknwBtn_' + flightIndex).attr('data-price', parseFloat(priceUpdateValue).toFixed(2))

        } else {
          localStorage.setItem("fareBaggageJson", JSON.stringify(results));
          console.log("fare and baggage results", results);
          return results;
        }
      }else{

        let errorText:string  = flightPricePriceChange.Errors.Error["#text"]
        this.toastr.error(errorText,'Flight Price Error', {
          timeOut: 3000,
        positionClass: 'toast-bottom-right'
      });
        
      }
      });



    }
    //Fare Details
    if (bookFlag == 'fareDetails') {
      console.log("FARE PRICE BAGGAGE")
      if (ormFlag == 1) { //Oneway


        this.offerArr = offerKeyArr
        this.flightArr = flightKeyArr

        let doc = JsonFind(this.flightSearchResults);
        var selectedFlight_Z = this.flightArr;
        var selectedOffer_Z = this.offerArr;
        var selected1: any = [];
        selectedFlight_Z.forEach(element => {
          let tmp = doc.findValues(element);
          console.log("this is element", tmp);
          let segArr = tmp[element].SegmentReferences.text.split(" ")
          selected1.push(segArr)
          this.selectedFlight.push(tmp);
        });
        let OfferGroup: any = []
        selectedOffer_Z.forEach(element => {
          this.selectedOffer.push(doc.findValues(element));
          this.OfferGroup123.push(doc.findValues(element));
          OfferGroup.push(doc.findValues(element));
        });
        let segmentItself: any = [];
        selected1.forEach(element => {
          element.forEach(e => {
            segmentItself.push(doc.findValues(e))
          });

          // if (Array.isArray(element)) {
          //   element.forEach(e => {
          //     segmentItself.push()
          //   });
          // } else {
          //   doc.findValues(element);
          // }
        });
        let selectedOfferPrice: any = [];
        let selectedAssociation: any = [];
        this.OfferGroup123.forEach((element, index) => {
          selectedOfferPrice.push(_.values(element)[0].PricedOffer.OfferPrice);
          // selectedAssociation.push(_.values(element)[0].PricedOffer.Associations);
          selectedAssociation = (_.values(element)[0].PricedOffer.Associations);
        });
        let myOfferPriceList = [];
        let myAssociations: any = [];
        let myOfferPriceListOfferItemIDTmp = [];
        selected1.forEach(element => {
          selectedOfferPrice.forEach(e => {
            e.map(mySelectedOfferPrice => {
              console.log(mySelectedOfferPrice);
              mySelectedOfferPrice.FareDetail.FareComponent.forEach(mySelectedOfferPriceFareComponent => {
                let tmpText = mySelectedOfferPriceFareComponent.SegmentReference.text;
                console.log("TMPTEXT", tmpText);
                if (typeof tmpText == 'string') {
                  // do thing
                } else {
                  tmpText = tmpText["#text"];
                }
                // if (Array.isArray(element)) {
                //   element.forEach(element1 => {
                //     if (element1 == tmpText
                //       && myOfferPriceListOfferItemIDTmp.filter(e => e == mySelectedOfferPrice.attributes.OfferItemID).length == 0) {
                //       myOfferPriceList.push(mySelectedOfferPrice);
                //       myOfferPriceListOfferItemIDTmp.push(mySelectedOfferPrice.attributes.OfferItemID);
                //     }
                //   });
                // } else {
                if (element == tmpText
                  && myOfferPriceListOfferItemIDTmp.filter(e => e == mySelectedOfferPrice.attributes.OfferItemID).length == 0) {
                  myOfferPriceList.push(mySelectedOfferPrice);
                  myOfferPriceListOfferItemIDTmp.push(mySelectedOfferPrice.attributes.OfferItemID);
                }
                // }
              });
            });
          });
        });
        console.log("OfferPriceList", myOfferPriceList);
        selectedAssociation.forEach(element => {
          // element.map(mySelectedAssociation => {
          element.ApplicableFlight.FlightReferences.forEach(mySelectedAssociationFlight => {
            selectedFlight_Z.forEach(e => {
              if (e == mySelectedAssociationFlight.text) {
                //myAssociations.push(mySelectedAssociation);
                myAssociations = element;
              }
            });
          })
          // });
        });
        console.log("My Association", myAssociations);
        let myFLightSegmentList: any = [];
        let myFLightSegmentListTmp: any = [];
        segmentItself.forEach(element => {
          myFLightSegmentListTmp.push(_.values(element))
        });
        console.log("My flight segment list 1", myFLightSegmentListTmp);

        myFLightSegmentListTmp.forEach(element => {
          element.map((flightSeg: any, flightSegIndex) => {
            //let newObject = { ClassOfService: myAssociations[0].ApplicableFlight.FlightSegmentReference[0].ClassOfService }
            let newObject = { ClassOfService: myAssociations.ApplicableFlight.FlightSegmentReference[0].ClassOfService }
            delete flightSeg.ClassOfService
            Object.assign(newObject, flightSeg)
            myFLightSegmentList = newObject
          })
        });
        console.log("My flight segment list 2", myFLightSegmentList);
        let Segment: any = [];
        let OriginDestinationList_FP: any = [];
        selectedFlight_Z.forEach(element => {
          Segment.push(this.flightSearchResults.result.DataLists.FlightList[element].SegmentReferences.text.split(" "));
          OriginDestinationList_FP.push(
            [{
              OnPoint: this.flightSearchResults.result.DataLists.FlightList[element].SegmentReferences.attributes.OnPoint,
              OffPoint: this.flightSearchResults.result.DataLists.FlightList[element].SegmentReferences.attributes.OffPoint,
              segment: Segment,
              flight: element
            }]
          )
        });
        console.log("SEGMENT", Segment);
        console.log("OND LIST", OriginDestinationList_FP);
        let OfferGroupOwner: any = [];
        let tmpObj: any = {};

        selectedOffer_Z.forEach(element => {
          OfferGroupOwner.push(this.flightSearchResults.result.OffersGroup.filter(e => e.Offer[element])[0]);
          Object.assign(tmpObj, doc.findValues(element));


        });
        let tmpObj2: any = { Owner: OfferGroupOwner[0].BOwner.text };
        //tmpObj2.push({ Owner: OfferGroupOwner[0].BOwner.text }) //OUT
        // console.log("--CHECK---")
        // console.log(tmpObj2);
        // console.log("TMP OBJJJJJJ", tmpObj2);
        Object.assign(tmpObj2, _.values(tmpObj));
        console.log("TEMP TEMP TEMP TEMP", _.values(tmpObj)[0].PricedOffer);
        let myPricedOffer = {
          OfferPrice: myOfferPriceList,
          Associations: myAssociations
        }
        console.log("temporary object 1", tmpObj);
        console.log("temporary object 2", tmpObj2);
        tmpObj2.PricedOffer = myPricedOffer;
        localStorage.setItem("ECK_TOKEN", this.flightSearchResults.result.AirShoppingRS.EchoToken);
        // console.log("THIS IS ", this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID);
        let ShoppingResponseID = "";
        if (this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID !== undefined) {
          ShoppingResponseID = this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID.ResponseID
          localStorage.setItem("shopping_id", this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID.ResponseID);
        } else if (this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID == undefined) {
          localStorage.setItem("shopping_id", "");
        }
        let myFareList = [];
        let listkeyt = [];
        for (const [key, value] of Object.entries(this.flightSearchResults.result.DataLists.FareList)) {
          let item: any = value;
          let newObject = {}
          // console.log("flight PRICE rq ITEM", item);
          if (!item.Fare.hasOwnProperty("FareDetail")) {
            OfferGroup.forEach(element => {
              let tmp = _.values(element)[0].PricedOffer.OfferPrice[0].FareDetail.FareComponent[0]
              // console.log("CHECK TMP-----------------------------------", tmp);
              if (tmp.attributes.refs == item.attributes.ListKey) {
                newObject = {
                  attributes: item.attributes,
                  FareBasisCode: item.FareBasisCode,
                  Fare: {
                    FareCode: item.Fare.FareCode,
                    FareDetail: _.values(element)[0].PricedOffer.OfferPrice[0].FareDetail
                  }
                }
                if (listkeyt.filter(e => e == item.attributes.ListKey).length == 0) {
                  listkeyt.push(item.attributes.ListKey)
                  myFareList.push(newObject)
                }
              }
            });
          } else {
            Object.assign(newObject, item)
            if (listkeyt.filter(e => e === item.attributes.ListKey).length === 0) {
              listkeyt.push(item.attributes.ListKey)
              myFareList.push(newObject)
            }
          }
        }
        // console.log("MY FARE LIST", myFareList)
        let flightlistvalue: any = [];
        selectedFlight_Z.forEach(element => {
          flightlistvalue.push(doc.findValues(element))
        });
        let myJSON = {
          EchoToken: this.flightSearchResults.result.AirShoppingRS.EchoToken,
          ShoppingResponseID: ShoppingResponseID,
          bookingFor : this.preSearchObj.onBehalfOf,
          DataLists: {
            FlightList: flightlistvalue,
            FlightSegmentList: myFLightSegmentList,
            OriginDestinationList: OriginDestinationList_FP,
            AnonymousTravellerList: this.preSearchObj.ACI,
            FareList: myFareList
          },
          OffersGroup: _.values(tmpObj),
          Owner: OfferGroupOwner[0].BOwner.text,
          PriceClassList: this.flightSearchResults.result.DataLists.PriceClassList,
          Metadata: this.flightSearchResults.result.Metadata
        }
        console.log("MY JSON", myJSON);
        this.myJSON = myJSON;

        
      } else if (ormFlag == 2) { //Round Trip
        
        this.offerArr = offerKeyArr
        this.flightArr = flightKeyArr

        let doc = JsonFind(this.flightSearchResults);
        var selectedFlight_Z = this.flightArr;
        var selectedOffer_Z = this.offerArr;
        var selected1: any = [];

        selectedFlight_Z.forEach(element => {
          let tmp = doc.findValues(element);
          console.log("----- FEQ : DIRECT BOOK : SegRef : BGN -----");
          console.log(tmp[element].SegmentReferences.text);
          console.log("----- FEQ : DIRECT BOOK : SegRef : END -----");
          let segArr = tmp[element].SegmentReferences.text.split(" ");
          selected1.push(segArr);
          this.selectedFlight.push(tmp);
        });
        let OfferGroup: any = [];
        selectedOffer_Z.forEach(element => {
          this.selectedOffer.push(doc.findValues(element));
          this.OfferGroup123.push(doc.findValues(element));
          OfferGroup.push(doc.findValues(element));
        });
        let segmentItself: any = [];
        selected1.forEach(element => {
          element.forEach(e => {
            segmentItself.push(doc.findValues(e));
          });

          // if (Array.isArray(element)) {
          //   element.forEach(e => {
          //     segmentItself.push()
          //   });
          // } else {
          //   doc.findValues(element);
          // }
        });
        let selectedOfferPrice: any = [];
        let selectedAssociation: any = [];
        this.OfferGroup123.forEach((element, index) => {
          selectedOfferPrice.push(_.values(element)[0].PricedOffer.OfferPrice);
          selectedAssociation.push(_.values(element)[0].PricedOffer.Associations);
        });
        let myOfferPriceList = [];
        let myAssociations = [];
        let myOfferPriceListOfferItemIDTmp = [];
        selected1.forEach(element => {
          selectedOfferPrice.forEach(e => {
            e.map(mySelectedOfferPrice => {
              console.log(mySelectedOfferPrice);
              mySelectedOfferPrice.FareDetail.FareComponent.forEach(
                mySelectedOfferPriceFareComponent => {
                  let tmpText =
                    mySelectedOfferPriceFareComponent.SegmentReference.text;
                  console.log("TMPTEXT", tmpText);
                  if (typeof tmpText == "string") {
                    // do thing
                  } else {
                    tmpText = tmpText["#text"];
                  }
                  // if (Array.isArray(element)) {
                  //   element.forEach(element1 => {
                  //     if (element1 == tmpText
                  //       && myOfferPriceListOfferItemIDTmp.filter(e => e == mySelectedOfferPrice.attributes.OfferItemID).length == 0) {
                  //       myOfferPriceList.push(mySelectedOfferPrice);
                  //       myOfferPriceListOfferItemIDTmp.push(mySelectedOfferPrice.attributes.OfferItemID);
                  //     }
                  //   });
                  // } else {
                  if (
                    element == tmpText &&
                    myOfferPriceListOfferItemIDTmp.filter(
                      e => e == mySelectedOfferPrice.attributes.OfferItemID
                    ).length == 0
                  ) {
                    myOfferPriceList.push(mySelectedOfferPrice);
                    myOfferPriceListOfferItemIDTmp.push(
                      mySelectedOfferPrice.attributes.OfferItemID
                    );
                  }
                  // }
                }
              );
            });
          });
        });
        console.log("OfferPriceList", myOfferPriceList);
        selectedAssociation.forEach(element => {
          element.map(mySelectedAssociation => {
            mySelectedAssociation.ApplicableFlight.FlightReferences.forEach(
              mySelectedAssociationFlight => {
                selectedFlight_Z.forEach(e => {
                  if (e == mySelectedAssociationFlight.text) {
                    myAssociations.push(mySelectedAssociation);
                  }
                });
              }
            );
          });
        });
        console.log("My Association", myAssociations);
        let myFLightSegmentList = [];
        let myFLightSegmentListTmp: any = [];
        segmentItself.forEach(element => {
          myFLightSegmentListTmp.push(_.values(element));
        });
        console.log("My flight segment list 1", myFLightSegmentListTmp);

        myFLightSegmentListTmp.forEach(element => {
          element.map((flightSeg: any, flightSegIndex) => {
            let newObject = {
              ClassOfService:
                myAssociations[0].ApplicableFlight.FlightSegmentReference[0]
                  .ClassOfService
            };
            Object.assign(newObject, flightSeg);
            myFLightSegmentList.push(newObject);
          });
        });
        console.log("My flight segment list 2", myFLightSegmentList);
        let Segment: any = [];
        let OriginDestinationList_FP: any = [];
        selectedFlight_Z.forEach(element => {
          Segment.push(
            this.flightSearchResults.result.DataLists.FlightList[
              element
            ].SegmentReferences.text.split(" ")
          );
          OriginDestinationList_FP.push([
            {
              OnPoint: this.flightSearchResults.result.DataLists.FlightList[element]
                .SegmentReferences.attributes.OnPoint,
              OffPoint: this.flightSearchResults.result.DataLists.FlightList[
                element
              ].SegmentReferences.attributes.OffPoint,
              segment: Segment,
              flight: element
            }
          ]);
        });
        console.log("SEGMENT", Segment);
        console.log("OND LIST", OriginDestinationList_FP);
        let OfferGroupOwner: any = [];
        let tmpObj: any = {};

        selectedOffer_Z.forEach(element => {
          OfferGroupOwner.push(
            this.flightSearchResults.result.OffersGroup.filter(
              e => e.Offer[element]
            )[0]
          );
          Object.assign(tmpObj, doc.findValues(element));
        });
        let tmpObj2: any = { Owner: OfferGroupOwner[0].BOwner.text };
        //tmpObj2.push({ Owner: OfferGroupOwner[0].BOwner.text }) //OUT
        // console.log("--CHECK---")
        // console.log(tmpObj2);
        // console.log("TMP OBJJJJJJ", tmpObj2);
        Object.assign(tmpObj2, _.values(tmpObj));
        console.log("TEMP TEMP TEMP TEMP", _.values(tmpObj)[0].PricedOffer);
        let myPricedOffer = {
          OfferPrice: myOfferPriceList,
          Associations: myAssociations
        };
        console.log("temporary object 1", tmpObj);
        console.log("temporary object 2", tmpObj2);
        tmpObj2.PricedOffer = myPricedOffer;
        localStorage.setItem(
          "ECK_TOKEN",
          this.flightSearchResults.result.AirShoppingRS.EchoToken
        );
        console.log(
          "THIS IS ",
          this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID
        );
        let ShoppingResponseID = "";
        if (
          this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID !==
          undefined
        ) {
          ShoppingResponseID = this.flightSearchResults.result.AirShoppingRS
            .ShoppingResponseID.ResponseID;
          localStorage.setItem(
            "shopping_id",
            this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID
              .ResponseID
          );
        } else if (
          this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID ==
          undefined
        ) {
          localStorage.setItem("shopping_id", "");
        }
        let myFareList = [];
        let listkeyt = [];
        for (const [key, value] of Object.entries(
          this.flightSearchResults.result.DataLists.FareList
        )) {
          let item: any = value;
          let newObject = {};
          console.log("flight PRICE rq ITEM", item);
          if (!item.Fare.hasOwnProperty("FareDetail")) {
            OfferGroup.forEach(element => {
              let tmp = _.values(element)[0].PricedOffer.OfferPrice[0].FareDetail
                .FareComponent[0];
              // console.log("CHECK TMP-----------------------------------", tmp);
              if (tmp.attributes.refs == item.attributes.ListKey) {
                newObject = {
                  attributes: item.attributes,
                  FareBasisCode: item.FareBasisCode,
                  Fare: {
                    FareCode: item.Fare.FareCode,
                    FareDetail: _.values(element)[0].PricedOffer.OfferPrice[0]
                      .FareDetail
                  }
                };
                if (
                  listkeyt.filter(e => e == item.attributes.ListKey).length == 0
                ) {
                  listkeyt.push(item.attributes.ListKey);
                  myFareList.push(newObject);
                }
              }
            });
          } else {
            Object.assign(newObject, item);
            if (listkeyt.filter(e => e === item.attributes.ListKey).length === 0) {
              listkeyt.push(item.attributes.ListKey);
              myFareList.push(newObject);
            }
          }
        }
        // console.log("MY FARE LIST", myFareList)
        let flightlistvalue: any = [];
        selectedFlight_Z.forEach(element => {
          flightlistvalue.push(doc.findValues(element));
        });
        let myJSON = {
          EchoToken: this.flightSearchResults.result.AirShoppingRS.EchoToken,
          bookingFor : this.preSearchObj.onBehalfOf,
          ShoppingResponseID: ShoppingResponseID,
          DataLists: {
            FlightList: flightlistvalue,
            FlightSegmentList: myFLightSegmentList,
            OriginDestinationList: OriginDestinationList_FP,
            AnonymousTravellerList: this.preSearchObj.ACI,
            FareList: myFareList
          },
          OffersGroup: _.values(tmpObj),
          Owner: OfferGroupOwner[0].BOwner.text,
          PriceClassList: this.flightSearchResults.result.DataLists.PriceClassList,
          Metadata: this.flightSearchResults.result.Metadata
        };
        console.log("MY JSON", myJSON);
        this.myJSON = myJSON;



      }

      this.FlightSearchService.flightPriceRequest(this.myJSON).subscribe(results => {
        console.log(results);
        let flightPricePriceChange: any = results['result']

        if (flightPricePriceChange.Errors == undefined) {
          if (!this.fare_baggage_flag) {
            this.fareBaggageArr.push(results);

            let priceUpdateValue = _.values(flightPricePriceChange.AirlineOffer)[0].TotalPrice.DetailCurrencyPrice.Total.text;
            console.log("TALEB", results);
            localStorage.setItem("fPJson", JSON.stringify(results));
            $('._totalprice_txt_' + flightIndex)[0].innerText = "GBP " + parseFloat(priceUpdateValue).toFixed(2)
            $('._bknwBtn_' + flightIndex).attr('data-price', parseFloat(priceUpdateValue).toFixed(2))
            this.modalService.open(modalId);
          } else {
            localStorage.setItem("fareBaggageJson", JSON.stringify(results));
            console.log("fare and baggage results", results);
            return results;
          }

        } else {

          //Error
          let errorText: string = flightPricePriceChange.Errors.Error["#text"]
          this.toastr.error(errorText, 'Flight Price Error', {
            timeOut: 3000,
            positionClass: 'toast-bottom-right'
          });
        }

      });

    }

    if (bookFlag == 'bookNowButton') {
      if (ormFlag == 1) { //Oneway


        this.offerArr = offerKeyArr
        this.flightArr = flightKeyArr

        let doc = JsonFind(this.flightSearchResults);
        var selectedFlight_Z = this.flightArr;
        var selectedOffer_Z = this.offerArr;
        var selected1: any = [];
        selectedFlight_Z.forEach(element => {
          let tmp = doc.findValues(element);
          console.log("this is element", tmp);
          let segArr = tmp[element].SegmentReferences.text.split(" ")
          selected1.push(segArr)
          this.selectedFlight.push(tmp);
        });
        let OfferGroup: any = []
        selectedOffer_Z.forEach(element => {
          this.selectedOffer.push(doc.findValues(element));
          this.OfferGroup123.push(doc.findValues(element));
          OfferGroup.push(doc.findValues(element));
        });
        let segmentItself: any = [];
        selected1.forEach(element => {
          element.forEach(e => {
            segmentItself.push(doc.findValues(e))
          });

          // if (Array.isArray(element)) {
          //   element.forEach(e => {
          //     segmentItself.push()
          //   });
          // } else {
          //   doc.findValues(element);
          // }
        });
        let selectedOfferPrice: any = [];
        let selectedAssociation: any = [];
        this.OfferGroup123.forEach((element, index) => {
          selectedOfferPrice.push(_.values(element)[0].PricedOffer.OfferPrice);
          // selectedAssociation.push(_.values(element)[0].PricedOffer.Associations);
          selectedAssociation = (_.values(element)[0].PricedOffer.Associations);
        });
        let myOfferPriceList = [];
        let myAssociations: any = [];
        let myOfferPriceListOfferItemIDTmp = [];
        selected1.forEach(element => {
          selectedOfferPrice.forEach(e => {
            e.map(mySelectedOfferPrice => {
              console.log(mySelectedOfferPrice);
              mySelectedOfferPrice.FareDetail.FareComponent.forEach(mySelectedOfferPriceFareComponent => {
                let tmpText = mySelectedOfferPriceFareComponent.SegmentReference.text;
                console.log("TMPTEXT", tmpText);
                if (typeof tmpText == 'string') {
                  // do thing
                } else {
                  tmpText = tmpText["#text"];
                }
                // if (Array.isArray(element)) {
                //   element.forEach(element1 => {
                //     if (element1 == tmpText
                //       && myOfferPriceListOfferItemIDTmp.filter(e => e == mySelectedOfferPrice.attributes.OfferItemID).length == 0) {
                //       myOfferPriceList.push(mySelectedOfferPrice);
                //       myOfferPriceListOfferItemIDTmp.push(mySelectedOfferPrice.attributes.OfferItemID);
                //     }
                //   });
                // } else {
                if (element == tmpText
                  && myOfferPriceListOfferItemIDTmp.filter(e => e == mySelectedOfferPrice.attributes.OfferItemID).length == 0) {
                  myOfferPriceList.push(mySelectedOfferPrice);
                  myOfferPriceListOfferItemIDTmp.push(mySelectedOfferPrice.attributes.OfferItemID);
                }
                // }
              });
            });
          });
        });
        console.log("OfferPriceList", myOfferPriceList);
        selectedAssociation.forEach(element => {
          // element.map(mySelectedAssociation => {
          element.ApplicableFlight.FlightReferences.forEach(mySelectedAssociationFlight => {
            selectedFlight_Z.forEach(e => {
              if (e == mySelectedAssociationFlight.text) {
                //myAssociations.push(mySelectedAssociation);
                myAssociations = element;
              }
            });
          })
          // });
        });
        console.log("My Association", myAssociations);
        let myFLightSegmentList: any = [];
        let myFLightSegmentListTmp: any = [];
        segmentItself.forEach(element => {
          myFLightSegmentListTmp.push(_.values(element))
        });
        console.log("My flight segment list 1", myFLightSegmentListTmp);

        myFLightSegmentListTmp.forEach(element => {
          element.map((flightSeg: any, flightSegIndex) => {
            //let newObject = { ClassOfService: myAssociations[0].ApplicableFlight.FlightSegmentReference[0].ClassOfService }
            let newObject = { ClassOfService: myAssociations.ApplicableFlight.FlightSegmentReference[0].ClassOfService }
            delete flightSeg.ClassOfService
            Object.assign(newObject, flightSeg)
            myFLightSegmentList = newObject
          })
        });
        console.log("My flight segment list 2", myFLightSegmentList);
        let Segment: any = [];
        let OriginDestinationList_FP: any = [];
        selectedFlight_Z.forEach(element => {
          Segment.push(this.flightSearchResults.result.DataLists.FlightList[element].SegmentReferences.text.split(" "));
          OriginDestinationList_FP.push(
            [{
              OnPoint: this.flightSearchResults.result.DataLists.FlightList[element].SegmentReferences.attributes.OnPoint,
              OffPoint: this.flightSearchResults.result.DataLists.FlightList[element].SegmentReferences.attributes.OffPoint,
              segment: Segment,
              flight: element
            }]
          )
        });
        console.log("SEGMENT", Segment);
        console.log("OND LIST", OriginDestinationList_FP);
        let OfferGroupOwner: any = [];
        let tmpObj: any = {};

        selectedOffer_Z.forEach(element => {
          OfferGroupOwner.push(this.flightSearchResults.result.OffersGroup.filter(e => e.Offer[element])[0]);
          Object.assign(tmpObj, doc.findValues(element));


        });
        let tmpObj2: any = { Owner: OfferGroupOwner[0].BOwner.text };
        //tmpObj2.push({ Owner: OfferGroupOwner[0].BOwner.text }) //OUT
        // console.log("--CHECK---")
        // console.log(tmpObj2);
        // console.log("TMP OBJJJJJJ", tmpObj2);
        Object.assign(tmpObj2, _.values(tmpObj));
        console.log("TEMP TEMP TEMP TEMP", _.values(tmpObj)[0].PricedOffer);
        let myPricedOffer = {
          OfferPrice: myOfferPriceList,
          Associations: myAssociations
        }
        console.log("temporary object 1", tmpObj);
        console.log("temporary object 2", tmpObj2);
        tmpObj2.PricedOffer = myPricedOffer;
        localStorage.setItem("ECK_TOKEN", this.flightSearchResults.result.AirShoppingRS.EchoToken);
        // console.log("THIS IS ", this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID);
        let ShoppingResponseID = "";
        if (this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID !== undefined) {
          ShoppingResponseID = this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID.ResponseID
          localStorage.setItem("shopping_id", this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID.ResponseID);
        } else if (this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID == undefined) {
          localStorage.setItem("shopping_id", "");
        }
        let myFareList = [];
        let listkeyt = [];
        for (const [key, value] of Object.entries(this.flightSearchResults.result.DataLists.FareList)) {
          let item: any = value;
          let newObject = {}
          // console.log("flight PRICE rq ITEM", item);
          if (!item.Fare.hasOwnProperty("FareDetail")) {
            OfferGroup.forEach(element => {
              let tmp = _.values(element)[0].PricedOffer.OfferPrice[0].FareDetail.FareComponent[0]
              // console.log("CHECK TMP-----------------------------------", tmp);
              if (tmp.attributes.refs == item.attributes.ListKey) {
                newObject = {
                  attributes: item.attributes,
                  FareBasisCode: item.FareBasisCode,
                  Fare: {
                    FareCode: item.Fare.FareCode,
                    FareDetail: _.values(element)[0].PricedOffer.OfferPrice[0].FareDetail
                  }
                }
                if (listkeyt.filter(e => e == item.attributes.ListKey).length == 0) {
                  listkeyt.push(item.attributes.ListKey)
                  myFareList.push(newObject)
                }
              }
            });
          } else {
            Object.assign(newObject, item)
            if (listkeyt.filter(e => e === item.attributes.ListKey).length === 0) {
              listkeyt.push(item.attributes.ListKey)
              myFareList.push(newObject)
            }
          }
        }
        // console.log("MY FARE LIST", myFareList)
        let flightlistvalue: any = [];
        selectedFlight_Z.forEach(element => {
          flightlistvalue.push(doc.findValues(element))
        });
        let myJSON = {
          EchoToken: this.flightSearchResults.result.AirShoppingRS.EchoToken,
          bookingFor : this.preSearchObj.onBehalfOf,
          ShoppingResponseID: ShoppingResponseID,
          DataLists: {
            FlightList: flightlistvalue,
            FlightSegmentList: myFLightSegmentList,
            OriginDestinationList: OriginDestinationList_FP,
            AnonymousTravellerList: this.preSearchObj.ACI,
            FareList: myFareList
          },
          OffersGroup: _.values(tmpObj),
          Owner: OfferGroupOwner[0].BOwner.text,
          PriceClassList: this.flightSearchResults.result.DataLists.PriceClassList,
          Metadata: this.flightSearchResults.result.Metadata
        }
        console.log("MY JSON", myJSON);
        this.myJSON = myJSON;


      } else if (ormFlag == 2) { //Round Trip

        this.offerArr = offerKeyArr
        this.flightArr = flightKeyArr

        let doc = JsonFind(this.flightSearchResults);
        var selectedFlight_Z = this.flightArr;
        var selectedOffer_Z = this.offerArr;
        var selected1: any = [];

        selectedFlight_Z.forEach(element => {
          let tmp = doc.findValues(element);
          let segArr = tmp[element].SegmentReferences.text.split(" ");
          selected1.push(segArr);
          this.selectedFlight.push(tmp);
        });
        let OfferGroup: any = [];
        selectedOffer_Z.forEach(element => {
          this.selectedOffer.push(doc.findValues(element));
          this.OfferGroup123.push(doc.findValues(element));
          OfferGroup.push(doc.findValues(element));
        });
        let segmentItself: any = [];
        selected1.forEach(element => {
          element.forEach(e => {
            segmentItself.push(doc.findValues(e));
          });
        });
        let selectedOfferPrice: any = [];
        let selectedAssociation: any = [];
        this.OfferGroup123.forEach((element, index) => {
          selectedOfferPrice.push(_.values(element)[0].PricedOffer.OfferPrice);
          selectedAssociation.push(_.values(element)[0].PricedOffer.Associations);
        });
        let myOfferPriceList = [];
        let myAssociations = [];
        let myOfferPriceListOfferItemIDTmp = [];
        selected1.forEach(element => {
          selectedOfferPrice.forEach(e => {
            e.map(mySelectedOfferPrice => {
              console.log(mySelectedOfferPrice);
              mySelectedOfferPrice.FareDetail.FareComponent.forEach(
                mySelectedOfferPriceFareComponent => {
                  let tmpText =
                    mySelectedOfferPriceFareComponent.SegmentReference.text;
                  if (typeof tmpText == "string") {
                    // do thing
                  } else {
                    tmpText = tmpText["#text"];
                  }
                  if (
                    element == tmpText &&
                    myOfferPriceListOfferItemIDTmp.filter(
                      e => e == mySelectedOfferPrice.attributes.OfferItemID
                    ).length == 0
                  ) {
                    myOfferPriceList.push(mySelectedOfferPrice);
                    myOfferPriceListOfferItemIDTmp.push(
                      mySelectedOfferPrice.attributes.OfferItemID
                    );
                  }
                  // }
                }
              );
            });
          });
        });
        selectedAssociation.forEach(element => {
          element.map(mySelectedAssociation => {
            mySelectedAssociation.ApplicableFlight.FlightReferences.forEach(
              mySelectedAssociationFlight => {
                selectedFlight_Z.forEach(e => {
                  if (e == mySelectedAssociationFlight.text) {
                    myAssociations.push(mySelectedAssociation);
                  }
                });
              }
            );
          });
        });
        let myFLightSegmentList = [];
        let myFLightSegmentListTmp: any = [];
        segmentItself.forEach(element => {
          myFLightSegmentListTmp.push(_.values(element));
        });

        myFLightSegmentListTmp.forEach(element => {
          element.map((flightSeg: any, flightSegIndex) => {
            let newObject = {
              ClassOfService:
                myAssociations[0].ApplicableFlight.FlightSegmentReference[0]
                  .ClassOfService
            };
            Object.assign(newObject, flightSeg);
            myFLightSegmentList.push(newObject);
          });
        });
        let Segment: any = [];
        let OriginDestinationList_FP: any = [];
        selectedFlight_Z.forEach(element => {
          Segment.push(
            this.flightSearchResults.result.DataLists.FlightList[
              element
            ].SegmentReferences.text.split(" ")
          );
          OriginDestinationList_FP.push([
            {
              OnPoint: this.flightSearchResults.result.DataLists.FlightList[element]
                .SegmentReferences.attributes.OnPoint,
              OffPoint: this.flightSearchResults.result.DataLists.FlightList[
                element
              ].SegmentReferences.attributes.OffPoint,
              segment: Segment,
              flight: element
            }
          ]);
        });
        let OfferGroupOwner: any = [];
        let tmpObj: any = {};

        selectedOffer_Z.forEach(element => {
          OfferGroupOwner.push(
            this.flightSearchResults.result.OffersGroup.filter(
              e => e.Offer[element]
            )[0]
          );
          Object.assign(tmpObj, doc.findValues(element));
        });
        let tmpObj2: any = { Owner: OfferGroupOwner[0].BOwner.text };
        Object.assign(tmpObj2, _.values(tmpObj));
        let myPricedOffer = {
          OfferPrice: myOfferPriceList,
          Associations: myAssociations
        };
        tmpObj2.PricedOffer = myPricedOffer;
        localStorage.setItem(
          "ECK_TOKEN",
          this.flightSearchResults.result.AirShoppingRS.EchoToken
        );
        console.log(
          "THIS IS ",
          this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID
        );
        let ShoppingResponseID = "";
        if (
          this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID !==
          undefined
        ) {
          ShoppingResponseID = this.flightSearchResults.result.AirShoppingRS
            .ShoppingResponseID.ResponseID;
          localStorage.setItem(
            "shopping_id",
            this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID
              .ResponseID
          );
        } else if (
          this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID ==
          undefined
        ) {
          localStorage.setItem("shopping_id", "");
        }
        let myFareList = [];
        let listkeyt = [];
        for (const [key, value] of Object.entries(
          this.flightSearchResults.result.DataLists.FareList
        )) {
          let item: any = value;
          let newObject = {};
          if (!item.Fare.hasOwnProperty("FareDetail")) {
            OfferGroup.forEach(element => {
              let tmp = _.values(element)[0].PricedOffer.OfferPrice[0].FareDetail
                .FareComponent[0];
              if (tmp.attributes.refs == item.attributes.ListKey) {
                newObject = {
                  attributes: item.attributes,
                  FareBasisCode: item.FareBasisCode,
                  Fare: {
                    FareCode: item.Fare.FareCode,
                    FareDetail: _.values(element)[0].PricedOffer.OfferPrice[0]
                      .FareDetail
                  }
                };
                if (
                  listkeyt.filter(e => e == item.attributes.ListKey).length == 0
                ) {
                  listkeyt.push(item.attributes.ListKey);
                  myFareList.push(newObject);
                }
              }
            });
          } else {
            Object.assign(newObject, item);
            if (listkeyt.filter(e => e === item.attributes.ListKey).length === 0) {
              listkeyt.push(item.attributes.ListKey);
              myFareList.push(newObject);
            }
          }
        }
        // console.log("MY FARE LIST", myFareList)
        let flightlistvalue: any = [];
        selectedFlight_Z.forEach(element => {
          flightlistvalue.push(doc.findValues(element));
        });
        let myJSON = {
          EchoToken: this.flightSearchResults.result.AirShoppingRS.EchoToken,
          ShoppingResponseID: ShoppingResponseID,
          bookingFor : this.preSearchObj.onBehalfOf,
          DataLists: {
            FlightList: flightlistvalue,
            FlightSegmentList: myFLightSegmentList,
            OriginDestinationList: OriginDestinationList_FP,
            AnonymousTravellerList: this.preSearchObj.ACI,
            FareList: myFareList
          },
          OffersGroup: _.values(tmpObj),
          Owner: OfferGroupOwner[0].BOwner.text,
          PriceClassList: this.flightSearchResults.result.DataLists.PriceClassList,
          Metadata: this.flightSearchResults.result.Metadata
        };
        console.log("MY JSON", myJSON);
        this.myJSON = myJSON;


        
      }
      
      this.FlightSearchService.flightPriceRequest(this.myJSON).subscribe(results => {

        let flightPricePriceChange: any = results['result']
        
        if(bookFlag == 'bookNowButton'){
          if(flightPricePriceChange.Errors == undefined){
            localStorage.setItem("fPJson", JSON.stringify(results));
            localStorage.setItem("MYJSON", JSON.stringify(this.myJSON));
            if (results) {
              this.dispBookNowScreenEmitter.emit(true);
              return results;
            }
          }else{
            let errorText:string  = flightPricePriceChange.Errors.Error["#text"]
            this.toastr.error(errorText,'Flight Price Error', {
              timeOut: 3000,
            positionClass: 'toast-bottom-right'
          });
          }

          
        }else{
          if(flightPricePriceChange.Errors == undefined){
            if (!this.fare_baggage_flag) {
              this.fareBaggageArr.push(results);
          
              let priceUpdateValue = _.values(flightPricePriceChange.AirlineOffer)[0].TotalPrice.DetailCurrencyPrice.Total.text;
              console.log("TALEB", results);
              localStorage.setItem("fPJson", JSON.stringify(results));
              $('._totalprice_txt_' + flightIndex)[0].innerText = "GBP " + parseFloat(priceUpdateValue).toFixed(2)
              $('._bknwBtn_' + flightIndex).attr('data-price', parseFloat(priceUpdateValue).toFixed(2))
              this.modalService.open(modalId);
            } else {
              localStorage.setItem("fareBaggageJson", JSON.stringify(results));
              console.log("fare and baggage results", results);
              return results;
            }

          }else{
            //Error
            let errorText:string  = flightPricePriceChange.Errors.Error["#text"]
              this.toastr.error(errorText,'Flight Price Error', {
                timeOut: 3000,
              positionClass: 'toast-bottom-right'
            });
          }
        }
       
      });  

    }
  }

  eidtRbd($event){
    
    if($($($event.target)[0].nextElementSibling).hasClass('none')){
      $($($event.target)[0].nextElementSibling).removeClass('none')
     //Add class none to RBD Button
      $($event.target).addClass('none')
      $event.stopPropagation();
    }
    
  }

  closeEditRbd($event){
    
    if(!$($event.target).parent().hasClass('none')){
      $($event.target).parent().addClass('none')
    }
    //Remove none class from RBD Button
    $($event.target).parent().parent().find('.rbd-btn').removeClass('none')
    $event.stopPropagation();

  }
  rbdClick($event){
    
    let $this = $(this)
    $this.focus()
    $event.stopPropagation();
  //  return true

  }


  
  // Anas Changes End



  lowestFare() {
    let lowestOffer = this.flightSearchResults.result.FlightOffer;
    console.log("------FOR lowest FARE------");
    console.log(document.getElementsByClassName("booking-class_item _active-0"))
  }

  reset() {

    this.store.dispatch(new LoadFlightSearchResult({ data: this.flightSearchResultsOg }));

    let data: any = select(selectFlightSearchData);
    this.store.pipe(data, take(1)).subscribe((data: any) => {

      this.flightSearchResults = data;
    })

  }

  forBooking(_ond, _flight, _offer, bookFlag) {

    console.log(_ond);
    if (!this.priceChangeFlag) {
      if (this.totalPrice.length == 0) {
        this.totalPrice.push({ ond: _ond, offer: [_offer] });
      } else {
        this.totalPrice.filter(e => e.ond == _ond)[0].offer.push(_offer);
      }
      this.offerArr = this.totalPrice[0].offer.filter(
        (item, i, ar) => ar.indexOf(item) === i
      );
      console.log("----- FEQ : DIRECT BOOK : Offer Array : BGN -----");
      console.log(this.offerArr);
      console.log("----- FEQ : DIRECT BOOK : Offer Array : END -----");
      if (this.totalFlight.length == 0) {
        this.totalFlight.push({ ond: _ond, flight: [_flight] });
      } else {
        this.totalFlight.filter(e => e.ond == _ond)[0].flight.push(_flight);
      }
      this.flightArr = this.totalFlight[0].flight.filter(
        (item, i, ar) => ar.indexOf(item) === i
      );
      console.log("----- FEQ : DIRECT BOOK : Flight Array : BGN -----");
      console.log(this.flightArr);
      console.log("----- FEQ : DIRECT BOOK : Flight Array : END -----");
    }
    let doc = JsonFind(this.flightSearchResults);
    var selectedFlight_Z = this.flightArr;
    var selectedOffer_Z = this.offerArr;
    var selected1: any = [];
    selectedFlight_Z.forEach(element => {
      let tmp = doc.findValues(element);
      console.log("----- FEQ : DIRECT BOOK : SegRef : BGN -----");
      console.log(tmp[element].SegmentReferences.text);
      console.log("----- FEQ : DIRECT BOOK : SegRef : END -----");
      let segArr = tmp[element].SegmentReferences.text.split(" ");
      selected1.push(segArr);
      this.selectedFlight.push(tmp);
    });
    let OfferGroup: any = [];
    selectedOffer_Z.forEach(element => {
      this.selectedOffer.push(doc.findValues(element));
      this.OfferGroup123.push(doc.findValues(element));
      OfferGroup.push(doc.findValues(element));
    });
    let segmentItself: any = [];
    selected1.forEach(element => {
      element.forEach(e => {
        segmentItself.push(doc.findValues(e));
      });

      // if (Array.isArray(element)) {
      //   element.forEach(e => {
      //     segmentItself.push()
      //   });
      // } else {
      //   doc.findValues(element);
      // }
    });
    let selectedOfferPrice: any = [];
    let selectedAssociation: any = [];
    this.OfferGroup123.forEach((element, index) => {
      selectedOfferPrice.push(_.values(element)[0].PricedOffer.OfferPrice);
      selectedAssociation.push(_.values(element)[0].PricedOffer.Associations);
    });
    let myOfferPriceList = [];
    let myAssociations = [];
    let myOfferPriceListOfferItemIDTmp = [];
    selected1.forEach(element => {
      selectedOfferPrice.forEach(e => {
        e.map(mySelectedOfferPrice => {
          console.log(mySelectedOfferPrice);
          mySelectedOfferPrice.FareDetail.FareComponent.forEach(
            mySelectedOfferPriceFareComponent => {
              let tmpText =
                mySelectedOfferPriceFareComponent.SegmentReference.text;
              console.log("TMPTEXT", tmpText);
              if (typeof tmpText == "string") {
                // do thing
              } else {
                tmpText = tmpText["#text"];
              }
              // if (Array.isArray(element)) {
              //   element.forEach(element1 => {
              //     if (element1 == tmpText
              //       && myOfferPriceListOfferItemIDTmp.filter(e => e == mySelectedOfferPrice.attributes.OfferItemID).length == 0) {
              //       myOfferPriceList.push(mySelectedOfferPrice);
              //       myOfferPriceListOfferItemIDTmp.push(mySelectedOfferPrice.attributes.OfferItemID);
              //     }
              //   });
              // } else {
              if (
                element == tmpText &&
                myOfferPriceListOfferItemIDTmp.filter(
                  e => e == mySelectedOfferPrice.attributes.OfferItemID
                ).length == 0
              ) {
                myOfferPriceList.push(mySelectedOfferPrice);
                myOfferPriceListOfferItemIDTmp.push(
                  mySelectedOfferPrice.attributes.OfferItemID
                );
              }
              // }
            }
          );
        });
      });
    });
    console.log("OfferPriceList", myOfferPriceList);
    selectedAssociation.forEach(element => {
      element.map(mySelectedAssociation => {
        mySelectedAssociation.ApplicableFlight.FlightReferences.forEach(
          mySelectedAssociationFlight => {
            selectedFlight_Z.forEach(e => {
              if (e == mySelectedAssociationFlight.text) {
                myAssociations.push(mySelectedAssociation);
              }
            });
          }
        );
      });
    });
    console.log("My Association", myAssociations);
    let myFLightSegmentList = [];
    let myFLightSegmentListTmp: any = [];
    segmentItself.forEach(element => {
      myFLightSegmentListTmp.push(_.values(element));
    });
    console.log("My flight segment list 1", myFLightSegmentListTmp);

    myFLightSegmentListTmp.forEach(element => {
      element.map((flightSeg: any, flightSegIndex) => {
        let newObject = {
          ClassOfService:
            myAssociations[0].ApplicableFlight.FlightSegmentReference[0]
              .ClassOfService
        };
        Object.assign(newObject, flightSeg);
        myFLightSegmentList.push(newObject);
      });
    });
    console.log("My flight segment list 2", myFLightSegmentList);
    let Segment: any = [];
    let OriginDestinationList_FP: any = [];
    selectedFlight_Z.forEach(element => {
      Segment.push(
        this.flightSearchResults.result.DataLists.FlightList[
          element
        ].SegmentReferences.text.split(" ")
      );
      OriginDestinationList_FP.push([
        {
          OnPoint: this.flightSearchResults.result.DataLists.FlightList[element]
            .SegmentReferences.attributes.OnPoint,
          OffPoint: this.flightSearchResults.result.DataLists.FlightList[
            element
          ].SegmentReferences.attributes.OffPoint,
          segment: Segment,
          flight: element
        }
      ]);
    });
    console.log("SEGMENT", Segment);
    console.log("OND LIST", OriginDestinationList_FP);
    let OfferGroupOwner: any = [];
    let tmpObj: any = {};

    selectedOffer_Z.forEach(element => {
      OfferGroupOwner.push(
        this.flightSearchResults.result.OffersGroup.filter(
          e => e.Offer[element]
        )[0]
      );
      Object.assign(tmpObj, doc.findValues(element));
    });
    let tmpObj2: any = { Owner: OfferGroupOwner[0].BOwner.text };
    //tmpObj2.push({ Owner: OfferGroupOwner[0].BOwner.text }) //OUT
    // console.log("--CHECK---")
    // console.log(tmpObj2);
    // console.log("TMP OBJJJJJJ", tmpObj2);
    Object.assign(tmpObj2, _.values(tmpObj));
    console.log("TEMP TEMP TEMP TEMP", _.values(tmpObj)[0].PricedOffer);
    let myPricedOffer = {
      OfferPrice: myOfferPriceList,
      Associations: myAssociations
    };
    console.log("temporary object 1", tmpObj);
    console.log("temporary object 2", tmpObj2);
    tmpObj2.PricedOffer = myPricedOffer;
    localStorage.setItem(
      "ECK_TOKEN",
      this.flightSearchResults.result.AirShoppingRS.EchoToken
    );
    console.log(
      "THIS IS ",
      this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID
    );
    let ShoppingResponseID = "";
    if (
      this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID !==
      undefined
    ) {
      ShoppingResponseID = this.flightSearchResults.result.AirShoppingRS
        .ShoppingResponseID.ResponseID;
      localStorage.setItem(
        "shopping_id",
        this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID
          .ResponseID
      );
    } else if (
      this.flightSearchResults.result.AirShoppingRS.ShoppingResponseID ==
      undefined
    ) {
      localStorage.setItem("shopping_id", "");
    }
    let myFareList = [];
    let listkeyt = [];
    for (const [key, value] of Object.entries(
      this.flightSearchResults.result.DataLists.FareList
    )) {
      let item: any = value;
      let newObject = {};
      console.log("flight PRICE rq ITEM", item);
      if (!item.Fare.hasOwnProperty("FareDetail")) {
        OfferGroup.forEach(element => {
          let tmp = _.values(element)[0].PricedOffer.OfferPrice[0].FareDetail
            .FareComponent[0];
          // console.log("CHECK TMP-----------------------------------", tmp);
          if (tmp.attributes.refs == item.attributes.ListKey) {
            newObject = {
              attributes: item.attributes,
              FareBasisCode: item.FareBasisCode,
              Fare: {
                FareCode: item.Fare.FareCode,
                FareDetail: _.values(element)[0].PricedOffer.OfferPrice[0]
                  .FareDetail
              }
            };
            if (
              listkeyt.filter(e => e == item.attributes.ListKey).length == 0
            ) {
              listkeyt.push(item.attributes.ListKey);
              myFareList.push(newObject);
            }
          }
        });
      } else {
        Object.assign(newObject, item);
        if (listkeyt.filter(e => e === item.attributes.ListKey).length === 0) {
          listkeyt.push(item.attributes.ListKey);
          myFareList.push(newObject);
        }
      }
    }
    // console.log("MY FARE LIST", myFareList)
    let flightlistvalue: any = [];
    selectedFlight_Z.forEach(element => {
      flightlistvalue.push(doc.findValues(element));
    });
    let myJSON = {
      EchoToken: this.flightSearchResults.result.AirShoppingRS.EchoToken,
      ShoppingResponseID: ShoppingResponseID,
      bookingFor : this.preSearchObj.onBehalfOf,
      DataLists: {
        FlightList: flightlistvalue,
        FlightSegmentList: myFLightSegmentList,
        OriginDestinationList: OriginDestinationList_FP,
        AnonymousTravellerList: this.preSearchObj.ACI,
        FareList: myFareList
      },
      OffersGroup: _.values(tmpObj),
      Owner: OfferGroupOwner[0].BOwner.text,
      PriceClassList: this.flightSearchResults.result.DataLists.PriceClassList,
      Metadata: this.flightSearchResults.result.Metadata
    };
    console.log("MY JSON", myJSON);
    this.myJSON = myJSON;

    this.FlightSearchService.flightPriceRequest(myJSON).subscribe(results => {
      if (!this.fare_baggage_flag) {
        console.log("TALEB", results);
        localStorage.setItem("fPJson", JSON.stringify(results));
        if (results) {
          this.dispBookNowScreenEmitter.emit(true);
          return results;
        }
      } else {
        localStorage.setItem("fareBaggageJson", JSON.stringify(results));
        console.log("fare and baggage results", results);
        return results;
      }
    });

    localStorage.setItem("MYJSON", JSON.stringify(myJSON));
  }

  selectPrice(_ond, _flight, _offer, _flightValue, type) {


    this.priceChangeFlag = true;

    //@ Anas Changes For Fare Rules
    if (type == 'onward') {
      this.slctdFlghtForFareRules = {
        'onward': {
          'flightKey': _flight,
          'offerKey': _offer,
          '_ond': _ond,
          '_flightValue': _flightValue
        }
      }
    } else {
      this.slctdFlghtForFareRules = {
        'return': {
          'flightKey': _flight,
          'offerKey': _offer,
          '_ond': _ond,
          '_flightValue': _flightValue
        }
      }
    }


    if (this.totalPrice.length == 0) {
      this.totalPrice.push({ ond: _ond, offer: [_offer] });
    } else {
      this.totalPrice.filter(e => e.ond == _ond)[0].offer.push(_offer);
    }
    this.offerArr = this.totalPrice[0].offer.filter(
      (item, i, ar) => ar.indexOf(item) === i
    );
    console.log("-------");
    console.log(this.offerArr);
    console.log("-------");
    if (this.totalFlight.length == 0) {
      this.totalFlight.push({ ond: _ond, flight: [_flight] });
    } else {
      this.totalFlight.filter(e => e.ond == _ond)[0].flight.push(_flight);
    }
    this.flightArr = this.totalFlight[0].flight.filter(
      (item, i, ar) => ar.indexOf(item) === i
    );
    console.log("-------");
    console.log(this.flightArr);
    console.log("-------");
  }

 
  //End
  selectPrice_new1(_ond, _flight, _offer, _flightValue, type) {
    this.priceChangeFlag = true;
    //@ Anas Changes For Fare Rules
    if (type == 'onward') {
      this.slctdFlghtForFareRules = {
        'onward': {
          'flightKey': _flight,
          'offerKey': _offer,
          '_ond': _ond,
          '_flightValue': _flightValue
        }
      }
    } else {
      this.slctdFlghtForFareRules = {
        'return': {
          'flightKey': _flight,
          'offerKey': _offer,
          '_ond': _ond,
          '_flightValue': _flightValue
        }
      }
    }


    if (this.totalPrice.length == 0) {
      this.totalPrice.push({ ond: _ond, offer: [_offer] });
    } else {
      this.totalPrice.filter(e => e.ond == _ond)[0].offer.push(_offer);
    }
    this.offerArr = this.totalPrice[0].offer.filter(
      (item, i, ar) => ar.indexOf(item) === i
    );
    console.log("-------");
    console.log(this.offerArr);
    console.log("-------");
    if (this.totalFlight.length == 0) {
      this.totalFlight.push({ ond: _ond, flight: [_flight] });
    } else {
      this.totalFlight.filter(e => e.ond == _ond)[0].flight.push(_flight);
    }
    this.flightArr = this.totalFlight[0].flight.filter(
      (item, i, ar) => ar.indexOf(item) === i
    );
    console.log("-------");
    console.log(this.flightArr);
    console.log("-------");
  }

  flightDetails(modalId, flightData, journeyTime) {
    console.log(modalId);
    console.log(flightData);
  }

  showSegmentDropdown(index) {
    // qwerty

    this.flightInfoOpen = !this.flightInfoOpen;
    console.log(this.flightInfoOpen);

    if (!$(`#_seg-active_${index}`).hasClass("active")) {
      $(`#_seg-active-icon_${index}`).removeClass("down");
      $(`#_seg-active-icon_${index}`).addClass("up");
      $(`#_seg-active_${index}`).addClass("active");
    } else {
      $(`#_seg-active-icon_${index}`).addClass("down");
      $(`#_seg-active-icon_${index}`).removeClass("up");
      $(`#_seg-active_${index}`).removeClass("active");
    }
    $(`#flight-segment-dropdown_${index},.separator-segment`).transition(
      "slide down"
    );
    $(`#ticket-dropdown_${index}`).transition("hide");
    $(`._active-${index}`).removeClass("active");
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  offerChanged(resultInd, orgInd, flightInd, offerindex) {
    if (
      this.flightSearchResults.result[resultInd]["OriginDestination"][orgInd][
        "flights"
      ][flightInd]["AirlineOffers"][offerindex].selected
    ) {
      this.flightSearchResults.result[resultInd]["OriginDestination"][orgInd][
        "flights"
      ].map((flight, fl_index) => {
        flight["AirlineOffers"].map((offer, of_index) => {
          offer.selected = false;
          console.log("offer is ", offer);
          // this.flightSearchResults.result[resultInd]["OriginDestination"][orgInd]["flights"][fl_index]["AirlineOffers"][of_index].selected = false;
        });
      });
      this.flightSearchResults.result[resultInd]["OriginDestination"][orgInd][
        "flights"
      ][flightInd]["AirlineOffers"][offerindex].selected = true;
    }

    this.calculateFare();
  }

  uncheckAllOfferFlight(flight) {
    flight["AirlineOffers"].map((offer, index) => {
      offer.selected = false;
    });
  }

  checkFirstOfferFlight(flight) {
    flight["AirlineOffers"][0].selected = true;
  }

  setFirstFlightandOfferTrue() {
    console.log(this.flightSearchResults);
    console.log("Zeba should put her work here");
    /*this.flightSearchResults.result.map(obj=> {
        obj.OriginDestination.map(origindestination => {
          origindestination.showall = false;

          origindestination.flights[0].selected = true;
          origindestination.flights[0]["AirlineOffers"][0].selected = true;

        })
    })*/
    this.calculateFare();
  }

  calculateFare() {
    this.currency = "";
    this.totalFare = 0;
    let selectedOffers = [];
    console.log("Zeba should put her work here");
    /*this.flightSearchResults.result.map(obj => {
        obj.OriginDestination.map(origindestination => {
            origindestination.flights.map(flight => {
                flight.AirlineOffers.map(offer => {
                    if(offer.selected)
                        selectedOffers.push( offer.TotalPrice )
                })
            })
        });
    });*/

    selectedOffers.map(offer => {
      if (offer["@Code"]) this.currency = offer["@Code"];
      if (offer["#text"]) this.totalFare += Number(offer["#text"]);
    });
    console.log("currenct ", this.currency);
    console.log("total ", this.totalFare);
  }

  setShowAll(flag, resultIndex, segInd, trackBy) {
    console.log(flag);
    console.log(resultIndex);
    console.log(segInd);
    console.log(trackBy);
    if (flag == "show") {
      this.flagShow = true;
      this.flagShow12 = "" + trackBy + resultIndex;
      console.log(this.flagShow12);
    } else if (flag == "hide") {
      this.flagShow = false;
    }
  }

  //   setShowAll(resultIndex, OrgIndex,segInd){
  //     $(`#flight_ticket_Z_${segInd}`).addClass('active');
  //     //this.flightSearchResults_Z.data[resultIndex]["OriginDestination"][OrgIndex].showall = !this.flightSearchResults_Z.data[resultIndex]["OriginDestination"][OrgIndex].showall;
  //   }

  ngOnChanges(changes: SimpleChanges) {
    const flightSearchResultsdata: SimpleChange = changes.flightSearchResults;

    if (flightSearchResultsdata) {
      this.setFirstFlightandOfferTrue();
    }
  }

  bookNow() {
    let doc = JsonFind(this.flightSearchResults);

    console.log("JUST DOC", doc);
    console.log("Selected Flight", doc.findValues(this.selectedFlight));
    console.log("Selected Offer", doc.findValues(this.selectedOffer));
    let selectedSegment = doc.findValues(this.selectedFlight);
    let segmentItself = "";
    let selected1 = selectedSegment[
      this.selectedFlight
    ].SegmentReferences.text.split(" ");
    selected1.forEach(element => {
      segmentItself = doc.findValues(element);
    });

    this.OfferGroup123 = doc.findValues(this.selectedOffer);
    let OfferGroup = doc.findValues(this.selectedOffer);

    let selectedOfferPrice = _.values(OfferGroup)[0].PricedOffer.OfferPrice;
    let selectedAssociation = _.values(OfferGroup)[0].PricedOffer.Associations;
    let myOfferPriceList = [];
    let myAssociations = [];
    let myOfferPriceListOfferItemIDTmp = [];

    selected1.forEach(element => {
      selectedOfferPrice.map(mySelectedOfferPrice => {
        mySelectedOfferPrice.FareDetail.FareComponent.forEach(
          mySelectedOfferPriceFareComponent => {
            let tmpText =
              mySelectedOfferPriceFareComponent.SegmentReference.text;
            if (typeof tmpText == "string") {
              // do thing
            } else {
              tmpText = tmpText["#text"];
            }
            if (
              element == tmpText &&
              myOfferPriceListOfferItemIDTmp.filter(
                e => e == mySelectedOfferPrice.attributes.OfferItemID
              ).length == 0
            ) {
              myOfferPriceList.push(mySelectedOfferPrice);
              myOfferPriceListOfferItemIDTmp.push(
                mySelectedOfferPrice.attributes.OfferItemID
              );
            }
          }
        );
      });
    });
    selectedAssociation.map(mySelectedAssociation => {
      mySelectedAssociation.ApplicableFlight.FlightReferences.forEach(
        mySelectedAssociationFlight => {
          if (this.selectedFlight == mySelectedAssociationFlight.text) {
            myAssociations.push(mySelectedAssociation);
          }
        }
      );
    });

    console.log(
      "Offer group",
      _.values(OfferGroup)[0].PricedOffer.OfferPrice[0].FareDetail
    );

    let myFLightSegmentList = [];
    let myFLightSegmentListTmp = _.values(segmentItself);
    myFLightSegmentListTmp.map((flightSeg: any, flightSegIndex) => {
      let newObject = {
        ClassOfService:
          myAssociations[0].ApplicableFlight.FlightSegmentReference[0]
            .ClassOfService
      };
      Object.assign(newObject, myFLightSegmentListTmp[flightSegIndex]);
      myFLightSegmentList.push(newObject);
    });

    let Segment = this.flightSearchResults.result.DataLists.FlightList[
      this.selectedFlight
    ].SegmentReferences.text.split(" ");
    let OriginDestinationList_FP = [
      {
        OnPoint: this.flightSearchResults.result.DataLists.FlightList[
          this.selectedFlight
        ].SegmentReferences.attributes.OnPoint,
        OffPoint: this.flightSearchResults.result.DataLists.FlightList[
          this.selectedFlight
        ].SegmentReferences.attributes.OffPoint,
        segment: Segment,
        flight: this.selectedFlight
      }
    ];
    let OfferGroupOwner = this.flightSearchResults.result.OffersGroup.filter(
      e => e.Offer[this.selectedOffer]
    )[0];
    let tmpObj: any = {};
    Object.assign(tmpObj, doc.findValues(this.selectedOffer));
    console.log(_.values(tmpObj)[0].PricedOffer);

    let myPricedOffer = {
      OfferPrice: myOfferPriceList,
      Associations: myAssociations
    };

    console.log("OWNER", OfferGroupOwner.BOwner.text);
    let tmpObj2: any = { Owner: OfferGroupOwner.BOwner.text };
    console.log("first", _.values(tmpObj)[0]);
    Object.assign(tmpObj2, _.values(tmpObj)[0]);
    tmpObj2.PricedOffer = myPricedOffer;
    localStorage.setItem(
      "ECK_TOKEN",
      this.flightSearchResults.result.AirShoppingRS.EchoToken
    );
    let myFareList = [];
    let listkeyt = [];

    for (const [key, value] of Object.entries(
      this.flightSearchResults.result.DataLists.FareList
    )) {
      let item: any = value;
      let newObject = {};
      console.log("flight PRICE rq ITEM", item);

      // if (item.hasOwnProperty("SegmentReference")) {
      if (!item.Fare.hasOwnProperty("FareDetail")) {
        let tmp = _.values(OfferGroup)[0].PricedOffer.OfferPrice[0].FareDetail
          .FareComponent[0];

        if (tmp.attributes.refs == item.attributes.ListKey) {
          newObject = {
            attributes: item.attributes,
            FareBasisCode: item.FareBasisCode,
            Fare: {
              FareCode: item.Fare.FareCode,
              FareDetail: _.values(OfferGroup)[0].PricedOffer.OfferPrice[0]
                .FareDetail
            }
          };

          if (listkeyt.filter(e => e == item.attributes.ListKey).length == 0) {
            listkeyt.push(item.attributes.ListKey);

            myFareList.push(newObject);
          }
        }

        // this.flightSearchResults.result.OffersGroup.map((elem, elemIndex) => {
        //   for (const [key2, value2] of Object.entries(elem.Offer)) {
        //     let myOffer: any = value2;
        //     let tmpFareComponent = myOffer.PricedOffer.OfferPrice[0].FareDetail.FareComponent;

        //     tmpFareComponent.map((tmp, tmpIndex) => {
        //       if (tmp.attributes.refs == item.attributes.ListKey) {

        //         newObject = {
        //           attributes: item.attributes,
        //           FareBasisCode: item.FareBasisCode,
        //           Fare: {
        //             FareCode: item.Fare.FareCode,
        //             FareDetail: myOffer.PricedOffer.OfferPrice[0].FareDetail
        //           }
        //         }

        //         if (listkeyt.filter(e => e == item.attributes.ListKey).length == 0) {
        //           listkeyt.push(item.attributes.ListKey)

        //           myFareList.push(newObject)

        //         }

        //       }
        //     })
        //   }
        // })
      } else {
        Object.assign(newObject, item);
        if (listkeyt.filter(e => e === item.attributes.ListKey).length === 0) {
          listkeyt.push(item.attributes.ListKey);
          myFareList.push(newObject);
        }
      }
      // }
    }

    console.log(myFareList);

    let myJSON = {
      EchoToken: this.flightSearchResults.result.AirShoppingRS.EchoToken,
      bookingFor : this.preSearchObj.onBehalfOf,
      DataLists: {
        FlightList: doc.findValues(this.selectedFlight),
        FlightSegmentList: myFLightSegmentList,
        OriginDestinationList: OriginDestinationList_FP,
        AnonymousTravellerList: this.preSearchObj.ACI,
        FareList: myFareList
      },
      OffersGroup: [tmpObj2],
      PriceClassList: this.flightSearchResults.result.DataLists.PriceClassList,
      Metadata: this.flightSearchResults.result.Metadata
    };

    console.log("MY JSON", myJSON);

    this.FlightSearchService.flightPriceRequest(myJSON).subscribe(results => {
      console.log("TALEB", results);
      localStorage.setItem("fPJson", JSON.stringify(results));
      if (results) {

        console.log("GLOBAL VARIABLE", this.globals.getOrganisationCreditLimit())

        this.dispBookNowScreenEmitter.emit(true);
        return results;
      }
    });

    localStorage.setItem("MYJSON", JSON.stringify(myJSON));

    // console.log("ORIGIN DEST ============", OriginDestinationList_FP);
  }

  offer12(id, flightkey) {
    this.selectedFlight = flightkey;
    this.selectedOffer = id;
    console.log("ID IS---", this.selectedOffer);
    console.log("flight key is----", this.selectedFlight);
  }

  generateNum(index, f3) {
    // let date = + new Date()
    //console.log("TIME NOW", f3.value.flight);
    return f3.value.flight;
  }

  loadConfig() {
    var scope = this;
    $(document).ready(function () {
      $(".ui.dropdown").dropdown();
      $(".menu .item").tab();
      $(".ui.accordion").accordion();

      $("#slider-range2").slider({
        range: true,
        min: 0,
        max: 1440,
        step: 15,
        values: [540, 1020],
        slide: function (e, ui) {
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

      $("#slider-range3").slider({
        range: true,
        min: 0,
        max: 1440,
        step: 15,
        values: [540, 1020]
        // slide: function (e, ui) {
        //   let hours1: any = Math.floor(ui.values[0] / 60);
        //   let minutes1: any = ui.values[0] - (hours1 * 60);

        //   if (hours1.length == 1) hours1 = '0' + hours1;
        //   if (minutes1.length == 1) minutes1 = '0' + minutes1;
        //   if (minutes1 == 0) minutes1 = '00';
        //   if (hours1 >= 12) {
        //     if (hours1 == 12) {
        //       hours1 = hours1;
        //       minutes1 = minutes1 + " PM";
        //     } else {
        //       hours1 = hours1 - 12;
        //       minutes1 = minutes1 + " PM";
        //     }
        //   } else {
        //     hours1 = hours1;
        //     minutes1 = minutes1 + " AM";
        //   }
        //   if (hours1 == 0) {
        //     hours1 = 12;
        //     minutes1 = minutes1;
        //   }
        //   $('.arrival-slider-time').val(hours1 + ':' + minutes1);

        //   let hours2: any = Math.floor(ui.values[1] / 60);
        //   let minutes2: any = ui.values[1] - (hours2 * 60);

        //   if (hours2.length == 1) hours2 = '0' + hours2;
        //   if (minutes2.length == 1) minutes2 = '0' + minutes2;
        //   if (minutes2 == 0) minutes2 = '00';
        //   if (hours2 >= 12) {
        //     if (hours2 == 12) {
        //       hours2 = hours2;
        //       minutes2 = minutes2 + " PM";
        //     } else if (hours2 == 24) {
        //       hours2 = 11;
        //       minutes2 = "59 PM";
        //     } else {
        //       hours2 = hours2 - 12;
        //       minutes2 = minutes2 + " PM";
        //     }
        //   } else {
        //     hours2 = hours2;
        //     minutes2 = minutes2 + " AM";
        //   }

        //   $('.arrival-slider-time2').val(hours2 + ':' + minutes2);
        // }
      });

      // $('.owl-carousel').owlCarousel({
      //   loop: true,
      //   margin: 10,
      //   nav: true,
      //   navText: [
      //     "<i class='fa fa-caret-left'></i>",
      //     "<i class='fa fa-caret-right'></i>"
      //   ],
      //   autoplay: true,
      //   autoplayHoverPause: true,
      //   responsive: {
      //     0: {
      //       items: 1
      //     },
      //     600: {
      //       items: 3
      //     },
      //     1000: {
      //       items: 5
      //     }
      //   }
      // });
    });
  }

  loadCarousel() {
    var scope = this;
    $(document).ready(function () {
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 8,
        autoplay: false,
        nav: true,
        dots: false,
        navText: [
          '<img src="./assets/img/back.png" />',
          '<img src="./assets/img/next.png" />'
        ],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          },
          1400: {
            items: 7
          }
        }
      });
      $(".owl-carousel").owlCarousel("refresh");
    });
  }

  showTimingBlock() {
    this.showtimingBlock = !this.showtimingBlock;
    this.airportFilter = false;
    this.airlineFilter = false;
    this.showDurr = false;
    this.nearByFilter = false;
    this.layoverFilter = false;
    this.airlineFilter = false;
    this.stopFilter = false;
    this.showPrice = false;
  }

  showDurationBlock() {
    this.showDurr = !this.showDurr;
    this.showtimingBlock = false;
    this.airportFilter = false;
    this.airlineFilter = false;
    this.nearByFilter = false;
    this.layoverFilter = false;
    this.airlineFilter = false;
    this.stopFilter = false;
    this.showPrice = false;
  }

  showAirlineFilter() {
    console.log('innnn');
    this.airlineFilter = !this.airlineFilter;
    this.airportFilter = false;
    this.showtimingBlock = false;
    this.showDurr = false;
    this.nearByFilter = false;
    this.layoverFilter = false;
    this.stopFilter = false;
    this.showPrice = false;
  }

  showAirportFilter() {
    $(".airport-tab .item").tab();
    this.airportFilter = !this.airportFilter;
    this.airlineFilter = false;
    this.showtimingBlock = false;
    this.showDurr = false;
    this.nearByFilter = false;
    this.layoverFilter = false;
    this.airlineFilter = false;
    this.stopFilter = false;
    this.showPrice = false;
  }

  showNearbyAirport() {
    this.nearByFilter = !this.nearByFilter;
    this.showDurr = false;
    this.showtimingBlock = false;
    this.airportFilter = false;
    this.airlineFilter = false;
    this.layoverFilter = false;
    this.airlineFilter = false;
    this.stopFilter = false;
    this.showPrice = false;
  }

  showLayoverAirport() {
    this.layoverFilter = !this.layoverFilter;
    this.nearByFilter = false;
    this.showDurr = false;
    this.showtimingBlock = false;
    this.airportFilter = false;
    this.airlineFilter = false;
    this.stopFilter = false;
    this.showPrice = false;
  }

  showStopFilter() {
    this.stopFilter = !this.stopFilter;
    this.layoverFilter = false;
    this.nearByFilter = false;
    this.showDurr = false;
    this.showtimingBlock = false;
    this.airportFilter = false;
    this.airlineFilter = false;
    this.showPrice = false;
  }

  showPriceBlock() {
    this.showPrice = !this.showPrice;
    this.stopFilter = false;
    this.layoverFilter = false;
    this.nearByFilter = false;
    this.showDurr = false;
    this.showtimingBlock = false;
    this.airportFilter = false;
    this.airlineFilter = false;
  }

  showFareDetails(modalId: any, _ond, _flight, _offer) {

    $(".menu .item").tab();
    this.fare_baggage_flag = true;
    //this.forBooking(_ond, _flight, _offer);
    this.modalService.open(modalId);

  }


  showFareDetails_new(modalId: any, mainObj, DataLists, slctdFlghtForFareRules, cur, amt) {

    let offerSelectFlag = false
    this.objSlctdFlghtForFareRules = {}
    $(".menu .item").tab();
    this.fare_baggage_flag = true;
    this.modalService.open(modalId);
    this.objSlctdFlghtForFareRules = {}
    this.objSlctdFlghtForFareRules = {
      'mainObj': mainObj,
      'DataLists': DataLists,
      'slctdFlghtForFareRules': slctdFlghtForFareRules,
      'echoToken': this.flightSearchResults.result.AirShoppingRS.EchoToken,
      'price': cur + ' ' + parseFloat(amt).toFixed(2)

    }
    let offerGrpArr = this.flightSearchResultsOg.result.OffersGroup

    //For Check  slctdFlghtForFareRules is same or not
    if (slctdFlghtForFareRules.onward != undefined) {
      offerSelectFlag = true
    } else {
      offerSelectFlag = false
    }

    // fareBasisCode = DataLists.FareList[offerId].FareBasisCode.Code
    if (Object.keys(slctdFlghtForFareRules).length > 0 && slctdFlghtForFareRules.onward != undefined) {
      let segObj = {}
      let offerId = this.flightSearchResultsOg.result.OffersGroup[mainObj.key].Offer[this.objSlctdFlghtForFareRules.slctdFlghtForFareRules.onward.offerKey].PricedOffer.OfferPrice[0].attributes.OfferItemID


      let fareBasisCode: string;
      let offerItems = _.pickBy(DataLists.FareList, function (i, key) {
        if (key == offerId) {
          fareBasisCode = i.FareBasisCode.Code
          return i.FareBasisCode.Code
        }

      });

      for (let mn = 0; mn < Object.keys(mainObj.value).length; mn++) {
        let depArr = mainObj.value[Object.keys(mainObj.value)[mn]]
        let segArr = depArr[this.objSlctdFlghtForFareRules.slctdFlghtForFareRules.onward._ond][depArr[this.objSlctdFlghtForFareRules.slctdFlghtForFareRules.onward._ond].flight].segment

        for (let i = 0; i < segArr.length; i++) {
          for (let j = 0; j < segArr[i].length; j++) {
            let seg = segArr[i][j];
            let dep = this.objSlctdFlghtForFareRules.DataLists.FlightSegmentList[seg].Departure.AirportCode.text
            let arr = this.objSlctdFlghtForFareRules.DataLists.FlightSegmentList[seg].Arrival.AirportCode.text
            segObj[dep + '-' + arr] = {
              'segArr': segArr,
              // 'segArrDtls':[]
            }

            if (segObj[dep + '-' + arr].segArrDtls == undefined) {
              segObj[dep + '-' + arr].segArrDtls = []
              //segObj[dep+'-'+arr].segArrDtls[seg] = []
            }
            segObj[dep + '-' + arr].segArrDtls = {
              'Departure': {
                'AirportCode': dep,
                'Date': this.objSlctdFlghtForFareRules.DataLists.FlightSegmentList[seg].Departure.Date.text,
                'Time': this.objSlctdFlghtForFareRules.DataLists.FlightSegmentList[seg].Departure.Time.text,
              },
              'Arrival': {
                'AirportCode': arr,
                'Date': this.objSlctdFlghtForFareRules.DataLists.FlightSegmentList[seg].Arrival.Date.text,
                'Time': this.objSlctdFlghtForFareRules.DataLists.FlightSegmentList[seg].Arrival.Time.text,
              },
              'MarketingCarrier': {
                'AirlineID': this.objSlctdFlghtForFareRules.DataLists.FlightSegmentList[seg].MarketingCarrier.AirlineID.text
              },
              'fareBasisCode': fareBasisCode,
              'owner': depArr[0][depArr[0].flight].owner

            }
          }
        }
      }
      this.objSlctdFlghtForFareRules.slctdFlghtForFareRules.segObj = segObj

    } else {

      let segObj = {}
      let offerId = this.flightSearchResultsOg.result.OffersGroup[mainObj.key].Offer[Object.keys(this.flightSearchResultsOg.result.OffersGroup[mainObj.key].Offer)[0]].PricedOffer.OfferPrice[0].attributes.OfferItemID


      let fareBasisCode: string;
      let offerItems = _.pickBy(DataLists.FareList, function (i, key) {
        if (key == offerId) {
          fareBasisCode = i.FareBasisCode.Code
          return i.FareBasisCode.Code
        }

      });

      for (let mn = 0; mn < Object.keys(mainObj.value).length; mn++) {
        let depArr = mainObj.value[Object.keys(mainObj.value)[mn]]
        for (let k = 0; k < depArr.length; k++) {
          let segArr = depArr[k][depArr[k].flight].segment
          for (let i = 0; i < segArr.length; i++) {
            for (let j = 0; j < segArr[i].length; j++) {
              let seg = segArr[i][j];
              let dep = this.objSlctdFlghtForFareRules.DataLists.FlightSegmentList[seg].Departure.AirportCode.text
              let arr = this.objSlctdFlghtForFareRules.DataLists.FlightSegmentList[seg].Arrival.AirportCode.text
              segObj[dep + '-' + arr] = {
                'segArr': segArr,
              }

              if (segObj[dep + '-' + arr].segArrDtls == undefined) {
                segObj[dep + '-' + arr].segArrDtls = []
                //segObj[dep+'-'+arr].segArrDtls[seg] = []
              }
              segObj[dep + '-' + arr].segArrDtls = {
                'Departure': {
                  'AirportCode': dep,
                  'Date': this.objSlctdFlghtForFareRules.DataLists.FlightSegmentList[seg].Departure.Date.text,
                  'Time': this.objSlctdFlghtForFareRules.DataLists.FlightSegmentList[seg].Departure.Time.text,
                },
                'Arrival': {
                  'AirportCode': arr,
                  'Date': this.objSlctdFlghtForFareRules.DataLists.FlightSegmentList[seg].Arrival.Date.text,
                  'Time': this.objSlctdFlghtForFareRules.DataLists.FlightSegmentList[seg].Arrival.Time.text,
                },
                'MarketingCarrier': {
                  'AirlineID': this.objSlctdFlghtForFareRules.DataLists.FlightSegmentList[seg].MarketingCarrier.AirlineID.text
                },
                'fareBasisCode': fareBasisCode,
                'owner': depArr[0][depArr[0].flight].owner

              }
            }
          }
        }

      }

      this.objSlctdFlghtForFareRules.slctdFlghtForFareRules.segObj = segObj

      //Write for if no data selected
    }



  }
  showTaxBreakup(modalId: any) {
    this.modalService.open(modalId);
  }

  showBrandDisclosure(modalId: any) {
    this.modalService.open(modalId);
  }

  showSeatMapModal(modalId: any, segmentIdSeatMap: any, offerIdSeatMap: any) {
    let currentOfferID = offerIdSeatMap;
    let AirlineOwner = "";
    let SupplierOwner = "";
    let ClassOfService = "";
    const EchoToken = this.flightSearchResults.result.AirShoppingRS.EchoToken;
    this.flightSearchResults.result.OffersGroup.forEach(element => {
      if (element.Offer[offerIdSeatMap]) {
        AirlineOwner = element.Offer[offerIdSeatMap].OfferID.attributes.Owner;
        SupplierOwner = element.BOwner;
        ClassOfService =
          element.Offer[offerIdSeatMap].PricedOffer.Associations[0]
            .ApplicableFlight.FlightSegmentReference[0].ClassOfService;
      }
    });
    const dataList = this.flightSearchResults.result.DataLists
      .FlightSegmentList[segmentIdSeatMap];
    this.seatMapService
      .getSeatMapResp({
        currentOfferID: currentOfferID,
        Owner: AirlineOwner,
        ClassOfService: ClassOfService,
        SupplierOwner: SupplierOwner,
        dataList: dataList,
        EchoToken: EchoToken
      })
      .subscribe((result: any) => {
        this.modalService.seat(modalId, result);
      });
  }

  selectedOfferBlock(offer) {
    this.clickedOffer = true;
  }

  // formatDurSliderLabel(value: number) {
  //   return 'Less than '+value+'hrs';
  // }

  showFareBreakdown(index) {

    if (!this.displayFareBreakdown) this.displayFareBreakdown = true;
    $('._brandDisclosure').hide()
    if (!$(`#brand-disclosure_${index}`).hasClass("down")) {
      $(`#brand-disclosure_${index}`).addClass("down")
      $(`#brand-disclosure_${index}`).removeClass("up")
      $(`#brand-disclosure_${index}`).show()

    } else {
      $(`#brand-disclosure_${index}`).addClass("up")
      $(`#brand-disclosure_${index}`).removeClass("down")
      $(`#brand-disclosure_${index}`).hide()
    }
  }

}
