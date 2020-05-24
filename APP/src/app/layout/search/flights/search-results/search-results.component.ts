import { FlightSearchService } from './../../../../shared/services/flight-search.service';
import { element } from 'protractor';
import { Component, OnInit, Output, EventEmitter, Input, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';

declare const $: any;
import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  activeTab: boolean = true;
  dispAncillary: boolean = false;
  @Output() dispAncillaryEmitter = new EventEmitter<boolean>();
  @Output() dispBookNowScreenEmitter = new EventEmitter<boolean>();
  @Output() emitTicketPaxDetails = new EventEmitter<any>();
  onwardTicket: any;
  onwardSelectedPkgType: string = '';
  onwardSelectedPkgIndex: number = -1;
  onwardSelectedOfferIndex: number = -1;
  returnTicket: any;
  returnSelectedPkgType: string = '';
  returnSelectedPkgIndex: number = -1;
  returnSelectedOfferIndex: number = -1;
  @Input() flightSearchResults;
  @Input() preSearchObj;
  ticket: any = [];
  nTickets: any = [];
  sortedTickets: any = [];
  fareBreakDownArr: any = [];
  fareBaggageArr: any = [];
  fareBaggageLoader: boolean = false;
  bookNowLoader: boolean = false;
  filteredFlightsArr: any = [];
  filterLoader: any = false;
  filterLabel = '';
  airlineSnapshots = [];
  showFaresModal = false;

  constructor(private el: ElementRef,
    private flightSearchService: FlightSearchService,
    private toastr: ToastrService,
    private ref: ChangeDetectorRef) {
    console.log(this.filteredFlightsArr.length);
  }

  filterFlightsDataListsByPrice(startPrice, endPrice) {
    this.filteredFlightsArr = [];
    this.filterLoader = true;
    this.filterLabel = `Price Range from ${startPrice} - ${endPrice}`;
    let onwardPrice = 0.0;
    let returnPrice = 0.0;
    this.flightSearchResults.ownerList.map(own => {
      own.flights.map(dtl => {
        dtl.ownerFlights.map((fl: any) => {
          onwardPrice = fl.flights.onwards[0].offers[0].offersArr[0].offer.TotalPrice.DetailCurrencyPrice.Total["#text"];
          returnPrice = fl.flights.returns[0].offers[0].offersArr[0].offer.TotalPrice.DetailCurrencyPrice.Total["#text"];
          console.log(`${startPrice} ${onwardPrice} ${endPrice} | ${startPrice} ${returnPrice} ${endPrice}`);
          if ((startPrice <= onwardPrice
            || onwardPrice <= endPrice) ||
            (startPrice <= returnPrice
              || returnPrice <= endPrice)) {
            this.filteredFlightsArr.push(own);
          }
        })
      })
    });

    console.log(this.filteredFlightsArr);
    this.ref.markForCheck();
    console.log('stateUpdated');
    //this.filterLoader = false;
    setTimeout(() => {
      this.loadCarousel();
    }, 200);
  }

  filterFlightsDataListsByStops(stops) {
    this.filteredFlightsArr = [];
    this.filterLoader = true;
    this.filterLabel = `via ${stops} Stops`;
    let onwardStops = 0;
    let returnStops = 0;
    this.flightSearchResults.map(own => {
      own.flights.map(dtl => {
        dtl.ownerFlights.map((fl: any) => {
          onwardStops = fl.flights.onwards[0].onwards.length - 1;
          returnStops = fl.flights.returns[0].returns.length - 1;
          console.log(`${stops} - ${onwardStops} | ${returnStops}`);
          if ((stops == onwardStops) ||
            (stops == returnStops) && stops < 3) {
            dtl.ownerFlights = [fl];
            if (this.filteredFlightsArr.length === 0) {
              this.filteredFlightsArr.push(own);
            } else {
              this.filteredFlightsArr.map(el => {
                if (el.owner == own.owner) {
                  this.filteredFlightsArr.push(own);
                }
              });
            }
          }
        });
      })
    });

    console.log(this.filteredFlightsArr);
    this.ref.markForCheck();
    console.log('stateUpdated');
    //this.filterLoader = false;
    setTimeout(() => {
      this.loadCarousel();
    }, 200);

  }

  filterFlightsDataListsByAirlines(airline, name) {
    this.filteredFlightsArr = [];
    this.filterLoader = true;
    this.filterLabel = `Based on ${name}`;
    this.flightSearchResults.ownerList.map((own, index) => {
      own.flights.map((dtl) => {
        if (airline == dtl.owner && dtl.ownerFlights.length !== 0) {
          own.flights = [dtl];
          this.filteredFlightsArr.push(own);
          console.log(own.flights)
        }
      })
    });

    console.log(this.filteredFlightsArr);
    this.ref.markForCheck();
    console.log('stateUpdated');
    //this.filterLoader = false;
    setTimeout(() => {
      this.loadCarousel();
    }, 200);

  }

  clearFilters() {
    this.filteredFlightsArr = [];
    this.loadCarousel();
  }

  ngOnInit() {
    this.airlineSnapshots = _.uniqBy(this.flightSearchResults.airlineOfferSnapshot, e => e.airlines[0].name);
  }

  checkEmptyObj(obj) {
    return Object.keys(obj).length === 0 ? true : false;
  }

  triggerTab() {
    if (this.activeTab) this.activeTab = false;
    else this.activeTab = true;

    this.loadConfig();
  }

  loadCarousel() {
    var scope = this;
    $(document).ready(function () {
      $('.owl-carousel').owlCarousel({
        loop: false,
        margin: 10,
        autoplay: true,
        nav: true,
        dots: false,
        navText: ['<img src="./assets/img/back.png" />', '<img src="./assets/img/next.png" />'],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      });
      $('.owl-carousel').owlCarousel('refresh');
      scope.filterLoader = false;
    });
  }

  ngAfterViewInit() {
    this.loadCarousel();
    this.organiseResults();
    this.sortMinFare();
    this.loadConfig();
  }

  organiseResults() {
    let offersArr: any = [];
    let offers: any = [];
  }

  sortMinFare() {
    let ticketsArr: any = _.mapValues(_.groupBy(this.ticket, 'poweredBy'), plist => plist.map(poweredBy => poweredBy));
    console.log(ticketsArr);
    let prices: any = [];
    let carriers = _.keys(ticketsArr);
    console.log(carriers);
    carriers.map(carrier => {
      ticketsArr[carrier].map(fare => {
        fare.offers.map(offer => {
          offer.offer.map(ofr => {
            prices.push({
              totalAmount: parseFloat(ofr.TotalPrice.DetailCurrencyPrice.Total['#text']),
              currency: ofr.TotalPrice.DetailCurrencyPrice.Total['@Code'],
              owner: carrier,
              ownerFullName: offer.flight.MarketingCarrier.Name
            });
          });
        });
      });
    });
    console.log(prices);
    prices = _.mapValues(_.groupBy(prices, 'owner'), plist => plist.map(owner => owner));
    carriers.map(carrier => {
      this.sortedTickets.push(_.minBy(prices[carrier], 'totalAmount'));
    });

    console.log(this.sortedTickets);
  }

  displayInnerTicket(index, type) {
    // console.log(`#_onwards_${oIndex}-tk_${iIndex}`);
    // console.log(this.el.nativeElement.querySelector(`#_onwards_${oIndex}-tk_${iIndex}`));
    //this.el.nativeElement.querySelector(`#_onwards_${oIndex}-tk_${iIndex}`).style.cssText = ";display: block !important;";

    $(document).ready(function () {
      for (let i = 1; i <= index; i++) {
        $(`#_${type}_${i}-tk`).transition('slide down');
      }
    })
  }

  showFaresBreakDown(oIndex) {
    $(document).ready(function () {
      $(`#tk-${oIndex}__fares-panel`).transition('slide down');
    });
  }

  parseFloatStr(val) { return parseFloat(val); }

  getEvents() {
    return [
      {
        id: 'E01',
        title: 'Meeting with BA',
        start: '27-10-2015 10:30:00',
        end: '27-10-2015 11:00:00',
        backgroundColor: '#443322',
        textColor: '#FFF'
      },
      {
        id: 'E01',
        title: 'Lunch',
        start: '27-10-2015 12:30:00',
        end: '27-10-2015 13:00:00',
        backgroundColor: '#12CA6B',
        textColor: '#FFF'
      },
      {
        id: 'E02',
        title: 'Customer Appointment',
        start: '29-10-2015 09:00:00',
        end: '29-10-2015 09:30:00',
        backgroundColor: '#34BB22',
        textColor: '#FFF'
      },
      {
        id: 'E03',
        title: 'Buddy Time',
        start: '30-10-2015 11:00:00',
        end: '30-10-2015 12:30:00',
        backgroundColor: '#AA3322',
        textColor: '#FFF'
      }
    ];
  }

  loadConfig() {
    var getEvents = this.getEvents();
    var scope = this;
    $(document).ready(function () {
      $("#slider-range").slider({
        range: true,
        min: 0,
        max: 1440,
        step: 15,
        values: [540, 1020],
        slide: function (e, ui) {
          let price1 = Math.floor(ui.values[0]);
          let price2 = Math.floor(ui.values[1]);
          $('.slider-price').val(price1);
          $('.slider-price2').val(price2);
          scope.filterFlightsDataListsByPrice(price1, price2);
        }
      });

      $("#slider-range2").slider({
        range: true,
        min: 0,
        max: 1440,
        step: 15,
        values: [540, 1020],
        slide: function (e, ui) {
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

      $("#tab-outbound-dep-slider").slider({
        range: true,
        min: 0,
        max: 1440,
        step: 15,
        values: [540, 1020],
        slide: function (e, ui) {
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



          $('.tab-outbound-dep-time').val(hours1 + ':' + minutes1);

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

          $('.tab-outbound-dep-time2').val(hours2 + ':' + minutes2);
        }
      });

      $("#tab-outbound-arr-slider").slider({
        range: true,
        min: 0,
        max: 1440,
        step: 15,
        values: [540, 1020],
        slide: function (e, ui) {
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

          $('.tab-outbound-arr-time').val(hours1 + ':' + minutes1);

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

          $('.tab-outbound-arr-time2').val(hours2 + ':' + minutes2);
        }
      });

      $("#tab-return-dep-slider").slider({
        range: true,
        min: 0,
        max: 1440,
        step: 15,
        values: [540, 1020],
        slide: function (e, ui) {
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

          $('.tab-return-dep-time').val(hours1 + ':' + minutes1);

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

          $('.tab-return-dep-time2').val(hours2 + ':' + minutes2);
        }
      });

      $("#tab-return-arr-slider").slider({
        range: true,
        min: 0,
        max: 1440,
        step: 15,
        values: [540, 1020],
        slide: function (e, ui) {
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

          $('.tab-return-arr-time').val(hours1 + ':' + minutes1);

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

          $('.tab-return-arr-time2').val(hours2 + ':' + minutes2);
        }
      });

      if ($('.flightsFaresCalendar').length > 0) {
        $('.flightsFaresCalendar').easycal({
          columnDateFormat: 'dddd, DD MMM',
          timeFormat: 'HH:mm',
          minTime: '08:00:00',
          maxTime: '19:00:00',
          slotDuration: 15, //in mins
          dayClick: null,
          eventClick: null,
          events: [
            {
              id: 'E01',
              title: 'Meeting with BA',
              start: '27-10-2015 10:30:00',
              end: '27-10-2015 11:00:00',
              backgroundColor: '#443322',
              textColor: '#FFF'
            },
            {
              id: 'E01',
              title: 'Lunch',
              start: '27-10-2015 12:30:00',
              end: '27-10-2015 13:00:00',
              backgroundColor: '#12CA6B',
              textColor: '#FFF'
            },
            {
              id: 'E02',
              title: 'Customer Appointment',
              start: '29-10-2015 09:00:00',
              end: '29-10-2015 09:30:00',
              backgroundColor: '#34BB22',
              textColor: '#FFF'
            },
            {
              id: 'E03',
              title: 'Buddy Time',
              start: '30-10-2015 11:00:00',
              end: '30-10-2015 12:30:00',
              backgroundColor: '#AA3322',
              textColor: '#FFF'
            }
          ],
          widgetHeaderClass: 'ec-day-header',
          widgetSlotClass: 'ec-slot',
          widgetTimeClass: 'ec-time'
        });
      }
    });
  }

  checkArr(Arr) {
    return Array.isArray(Arr);
  }

  loadPopups(type, oIndex) {
    var resizePopup = function () { $('.ui.popup').css('max-height', $(window).height()); };
    $(window).resize(function (e) {
      resizePopup();
    });
    switch (type) {
      case 'info-popup':
        $(document).ready(function () {
          $(`#tk-${oIndex}__info-popup-btn`)
            .popup({
              popup: $(`#tk-${oIndex}__info-popup`),
              lastResort: 'bottom right',
              on: 'click'
            });
        });
        break;
      case 'baggage-popup':
        $(document).ready(function () {
          $(`#tk-${oIndex}__baggage-popup-btn`)
            .popup({
              popup: $(`#tk-${oIndex}__baggage-popup`),
              lastResort: 'bottom right',
              on: 'click'
            });
        });
        break;
    }
  }

  bookNow() {
    let tk: any;
    if (this.onwardSelectedPkgType !== '') {
      tk = this.onwardTicket;
    }
    if (this.returnSelectedPkgType !== '') {
      tk = this.returnTicket;
    }
    this.showFareBaggageDetails(tk, 'book');
  }

  showAncillary() {
    this.dispAncillary = true;
    this.dispAncillaryEmitter.emit(this.dispAncillary);
  }

  onwardShowRBD = (tk: any, type: string, rowNumber: number, columnNumber: number) => {
    this.onwardTicket = tk;
    this.onwardSelectedPkgType = type;
    this.onwardSelectedPkgIndex = rowNumber;
    this.onwardSelectedOfferIndex = columnNumber;
  }

  returnShowRBD = (tk: any, type: string, rowNumber: number, columnNumber: number) => {
    this.returnTicket = tk;
    this.returnSelectedPkgType = type;
    this.returnSelectedPkgIndex = rowNumber;
    this.returnSelectedOfferIndex = columnNumber;
    /*if($('._onwards .ui.checkbox input[name="onwards-pkg-selection"]:checked').length > 0 || 
    $('._returns .ui.checkbox input[name="returns-pkg-selection"]:checked').length > 0) {
      this.selectedPkgType = type;
      this.selectedPkgIndex = rowNumber;
    }*/
  }

  changeRBD(offer, index, ticket, ind, type, rbd) {
    this.showFareBaggageDetails(ticket, 'rbd', index, rbd);
  }

  showFareBaggageDetails(ticket: any, type?, ofrIndex?, rbd?) {
    let echoToken = localStorage.getItem('_ecTk');
    //ticket = this.flightSearchResults[ownIndex].flights[index].ownerFlights;
    if (type == 'book') this.bookNowLoader = true;
    else this.fareBaggageLoader = true;
    this.fareBaggageArr = [];
    this.flightSearchService.fetchFareBaggageDetails({ echoToken, ticket, rbd: (rbd !== '') ? rbd : '' })
      .subscribe((res: any) => {
        if (res) {
          console.log(res);
          if (res.json['Errors']) {
            this.toastr.info(`Oops! We're unable to find Fare & Baggage Details for current Flight Segment. Err -
             ${ res.json['Errors']['Error']['#text']}`, 'No Fare & Baggage Details', {
              timeOut: 10000,
              progressBar: false,

              positionClass: 'toast-bottom-right'
            });
            if (type == 'book')
              this.bookNowLoader = false;
            else
              this.fareBaggageLoader = false;
            return;
          }
          this.fareBaggageArr.push(res);
          this.showFaresModal = true;
          //localStorage.setItem('_fpEcTk', `${res.json["@EchoToken"]}`);

          if (type == 'book') {
            this.emitTicketPaxDetails.emit({ ticket, fare: res });
            this.dispBookNowScreenEmitter.emit(true);
            this.bookNowLoader = false;
          } else if (type == 'rbd') {
            let offer = ticket.flights.onwards[0].offers[0].offersArr;
            console.log(res.json.AirlineOffers.AirlineOffer.TotalPrice.DetailCurrencyPrice.Total["#text"]);
            offer[ofrIndex].offer.TotalPrice.DetailCurrencyPrice.Total['#text'] = res.json.AirlineOffers.AirlineOffer.TotalPrice.DetailCurrencyPrice.Total["#text"];
            this.fareBaggageLoader = false;
          } else {
            $(document).ready(function () {
              $(`.ui.modal.fare_baggage_modal`).modal('show');
              $('.ui.accordion').accordion();
            });
            this.fareBaggageLoader = false;
          }
        } else {
          this.toastr.info('Oops! We\'re unable to find Fare & Baggage Details for current Flight Segment.', 'No Fare & Baggage Details', {
            timeOut: 10000,
            progressBar: false,

            positionClass: 'toast-bottom-right'
          });
        }
      }, (err: any) => {
        this.toastr.info(`Oops! We're unable to find Fare & Baggage Details for current Flight Segment. Err - ${err}`, 'No Fare & Baggage Details', {
          timeOut: 10000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
      });
  }
}
