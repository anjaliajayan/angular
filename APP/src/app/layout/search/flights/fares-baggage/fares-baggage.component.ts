import { FlightSearchService } from './../../../../shared/services/flight-search.service';
import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as _ from 'lodash';

@Component({
  selector: 'app-fares-baggage',
  templateUrl: './fares-baggage.component.html',
  styleUrls: [
    './../dynamic-search-results/dynamic-search-results.component.scss',
    './fares-baggage.component.scss']
})
export class FaresBaggageComponent implements OnInit {
  @Input('fareBaggageArr') fareBaggageArr;
  @Input('objSlctdFlghtForFareRules') objSlctdFlghtForFareRules;
  tabType: string = 'fare';
  fareRules: any = null;
  fareRulesLoader: boolean = true;
  fareRulesJsonFromSearch: any = [];
  airlineOffer: any = [];
  offerPrice: any = [];
  fareAndBaggage: any = [];
   selectedSeg:string = '';
   airlineOfferStr;
   airlineOfferStrCode;
   pricedOffer;
   flightSegList:any = {}
   fltMiniFareRuleObj:any = {}

  constructor(
    private flightSearchService: FlightSearchService,
    private toastr: ToastrService) {

  }



  ngOnInit() {
    
    console.log("objSlctdFlghtForFareRules",this.objSlctdFlghtForFareRules)
    if (this.fareBaggageArr == undefined) {
      this.fareRulesLoader = true;
    } else if (this.fareBaggageArr) {
      //this.fareRulesJsonFromSearch = localStorage.get('fareBaggageJson');
      console.log("FARE RULES", this.fareRulesJsonFromSearch['result']);
    }
  }

  ngAfterContentChecked() {
    this.fareAndBaggageLoop();
  }

  fareAndBaggageLoop() {
    
    if (this.fareBaggageArr !== undefined && this.fareBaggageArr.length > 0) {
      //  let AirlineOffer = this.fareBaggageArr['result']
      let fareandbaggagearr = this.fareBaggageArr[0]
      let AirlineOffer = _.values(fareandbaggagearr.result.AirlineOffer);
      if (fareandbaggagearr && fareandbaggagearr.result && fareandbaggagearr.result.AirlineOffer) {
        this.fareAndBaggage = fareandbaggagearr.result;
         AirlineOffer = _.values(fareandbaggagearr.result.AirlineOffer);
        let pricedOffer = _.values(AirlineOffer[0].PricedOffer.OfferPrice);
        this.pricedOffer = pricedOffer;
        this.airlineOfferStr = AirlineOffer[0].TotalPrice.DetailCurrencyPrice.Total.text;
        this.airlineOfferStrCode = AirlineOffer[0].TotalPrice.DetailCurrencyPrice.Total.attributes.Code;
        AirlineOffer.forEach(element => {
          this.airlineOffer = element;
          this.airlineOffer.PricedOffer.OfferPrice.forEach(element => {
            console.log(element)
            this.offerPrice = element;
          });

        });
      }
      //For Fare Rules
      if(fareandbaggagearr.result.DataLists.FlightSegmentList){
        this.flightSegList = {}
        this.flightSegList = fareandbaggagearr.result.DataLists.FlightSegmentList
      }

      if(AirlineOffer[0].Penalty && AirlineOffer[0].Penalty != null && AirlineOffer[0].Penalty != undefined){
          this.fltMiniFareRuleObj = AirlineOffer[0].Penalty
      }

    }

  }

  checkArray(arr) {
    if (Array.isArray(arr)) {
      return arr;
    } else {
      return [arr];
    }
  }

  activateTab(type) {
    switch (type) {
      case 'fare':
        this.tabType = type;
        break;
      case 'baggage':
        this.tabType = type;
        break;
      case 'rules':
        this.tabType = type;
        break;
    }
  }

  fetchFareRules(fare: any) {
    
    let rulesObj: any = {};
    this.fareRulesLoader = true;
    let reqObj:any = {}
    reqObj = {
    'Departure': {
      'AirportCode': fare.Departure.AirportCode.text,
      'Date': fare.Departure.Date.text,
      'Time': fare.Departure.Time.text,
    },
    'Arrival': {
      'AirportCode': fare.Arrival.AirportCode.text,
      'Date': fare.Arrival.Date.text,
      'Time': fare.Arrival.Time.text,
    },
    'MarketingCarrier': {
      'AirlineID': fare.MarketingCarrier.AirlineID.text
    }
  }
  
  let airlineOffer = _.values(this.fareBaggageArr[0].result.AirlineOffer);
    if(airlineOffer.length > 0){ // check the index 0

      let fareComponentArr = airlineOffer[0].PricedOffer.OfferPrice[0].FareDetail.FareComponent
      reqObj.SpecialFare = {}  
      reqObj.SpecialFare = {
        'AirlineID':fare.MarketingCarrier.AirlineID.text,
        'CompanyIndex':airlineOffer[0].OfferID.attributes.Owner
      }
      for(let i = 0; i < fareComponentArr.length; i++){
        if(fareComponentArr[i].SegmentReference.text == fare.attributes.SegmentKey){
          reqObj.FareReferenceKey =  fareComponentArr[i].attributes.refs
        }
      }

      if(reqObj.FareReferenceKey != undefined && reqObj.FareReferenceKey != null && reqObj.FareReferenceKey != ''){
        reqObj.FareBasisCode = {}
        reqObj.FareBasisCode = {
          'Code':this.fareBaggageArr[0].result.DataLists.FareList[reqObj.FareReferenceKey].FareBasisCode.Code,
          'Application':null
        }
      }
    }
    reqObj.echoToken = localStorage.getItem('ECK_TOKEN');
    
    this.flightSearchService.fareRulesRequest(reqObj)
      .subscribe((res: any) => {
        
       

        if (res.result != "" && res.result.Rules && res.result.Rules != undefined && res.result.Rules != "" && res.result.Rules != null) {
          this.fareRules = res.result.Rules;
          this.fareRulesLoader = false;
          // if(this.flightSegList[fare.Departure.AirportCode.text+'-'+fare.Arrival.AirportCode.text] == undefined){
          //   this.flightSegList[fare.Departure.AirportCode.text+'-'+fare.Arrival.AirportCode.text] = []
          // }
          // this.flightSegList[fare.Departure.AirportCode.text+'-'+fare.Arrival.AirportCode.text] = this.fareRules
          console.log("fr res",res.result.Rules)
        } else {
          this.toastr.error('Oops! We\'re unable to find Fare Rules for current Flight Segment.', 'No Fare Rules', {
            timeOut: 10000,
            progressBar: false,

            positionClass: 'toast-bottom-right'
          });
        }
      }, (err: any) => {
        this.toastr.error('Oops! We\'re unable to find Fare Rules for current Flight Segment.', 'No Fare Rules', {
          timeOut: 10000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
      })
  }

  
}
