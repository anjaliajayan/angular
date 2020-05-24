import { FlightSearchService } from './../../../../shared/services/flight-search.service';
import { ProfileManagementService } from './../../../../shared/services/profile-management/profile-management.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output, Input,Inject } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
declare const $: any;
declare const moment: any;
import * as _ from 'lodash';
import { ModalService } from '../../../_modal';
import { CommonService } from 'src/app/shared/services/common.service';
import { convertToArray } from 'src/app/shared/utils/array.helper';
import { ToastrService } from 'ngx-toastr';

import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: [
    './../dynamic-search-results/dynamic-search-results.component.scss',
    './passengers.component.scss']
})
export class PassengersComponent implements OnInit {
  @Output() dispFlightSearchEmitter = new EventEmitter<boolean>();
  @Input('showAncModal') showAncModal;
  @Input('paxTicketDetails') paxTicketDetails;

  flightsArr = [];
  flightsList = [];
  offersArr = [];
  ownersOffersArr = [];
  airlineOfferSnapshot = [];
  fareGroup = [];
  tempFareKey = "";
  airlines = [];
  flightSegmentKey = "";
  onwardKeys = [];
  returnKeys = [];
  onwards = [];
  returns = [];
  onwardArr = [];
  returnArr = [];
  bookNowLoader:boolean = false;
  forTaleb: any;
  pageLoader: boolean = false;
  paxDetailsDisplay: any = [];
  countries: any;
  fprsDetails2: any = [''];

  retrieveProfileForm: FormGroup;

  orderCreateRQ: any;
  identifactionType: string = 'ID';
  showExpiryDate: boolean = false;
  flightHome: boolean = false;
  Pflag ;

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private fb: FormBuilder,
    private profileManagementService: ProfileManagementService,
    private flightSearchService: FlightSearchService,
    private router: Router,
    private modalService: ModalService,
    private commonService: CommonService,
    private toastr: ToastrService
  ) {
    this.pageLoader = true;
    let myJSON = JSON.parse(localStorage.getItem("MYJSON"));
    console.log(myJSON);
    this.flightSearchService.flightPriceRequest(myJSON).subscribe((response: any) => {
      if (response.result.hasOwnProperty("Errors") && response.result.Errors.hasOwnProperty("Error")) {
        let error = response.result.Errors.Error;
        this.toastr.error(error["#text"], `Oops!`, {
          timeOut: 10000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
        return;
      }
      this.paxDetailsDisplay = response;
      this.paxTicketDetails = response['result']
      this.pageLoader = false;

      let airlineOffer = convertToArray(_.values(this.paxDetailsDisplay.result.AirlineOffer));
      if (airlineOffer.length > 0) {
        airlineOffer[0].PricedOffer.OfferPrice.forEach(paxType => {
          console.log(paxType.RequestedDate.Associations)
          if (paxType.RequestedDate.Associations.length > 1) {
          } else {
            $('.dropdown').dropdown();
            let pax_type = paxType.RequestedDate.Associations[0].AssociatedTraveler.TravelerReferences.text;
            let pax_info = [];
            if (paxType.RequestedDate.Associations[0].AssociatedTraveler.TravelerReferences.text.split(" ").length > 1) {
              paxType.RequestedDate.Associations[0].AssociatedTraveler.TravelerReferences.text.split(" ").forEach(samePaxType => {
                pax_info = _.values(this.paxDetailsDisplay.result.DataLists.AnonymousTravelersList[samePaxType]);
                this.addMorePax(pax_info[1].text);
              });
            } else {
              pax_info = _.values(this.paxDetailsDisplay.result.DataLists.AnonymousTravelersList[pax_type]);
              this.addMorePax(pax_info[1].text)
            }
          }
        });
      }
    });

    this.loadDOBDate();
  }

  ngOnInit() {
    $(this).scrollTop(0);
    this.countryList();
    // this.loadConfig();
    $('.ui .dropdown').dropdown();
    this.loadDOBDate();
    this.loadExpDate();
    this.loadConfig();
    //console.log("THIS IS", this.paxTicketDetails);
    //this.sortFlights();

    if (this.showAncModal) {
      this.showAncillariesDropdown();
    }

  }

  countryList() {
    this.commonService.getCountryList().subscribe((result: any) => {
      this.countries = result.countries;
    });
  }

  paxProfileForm = this.fb.group({
    paxForm: this.fb.array([this.initItems('')]),
    address1: [''],
    address2: [''],
    address3: [''],
    country: [''],
    zip: [''],
    cust_email: ['',[Validators.required, Validators.email]],
    cust_origin_phone_code: [''],
    cust_origin_phone_number: [''],
    cust_dest_phone_code: [''],
    cust_dest_phone_number: [''],
    taxGst: [''],
    taxNumber: [''],
    taxEmail: [''],
    agentReference: [''],
    payAddress: [''],
    payStreetNameNo: [''],
    payPostalCode: [''],
    payCity: [''],
    payStateProvince: ['']
  })

  initItems(type) {
    $('.dropdown').dropdown();
    return this.fb.group({
      paxType: [type],
      salutation: ['Mr.'],
      firstName: [''],
      lastName: [''],
      middleName: [''],
      sex: ['Male'],
      email: [''],
      countryCode: [''],
      phone: [''],
      nationality: [''],
      passportNo: [''],
      issuingCountry: [''],
      country: [''],
      expiryDate: [''],
      address1: [''],
      address2: [''],
      address3: [''],
      zip: [''],
      accountNo: [''],
      identification: [''],
      freqFlyerType: [''],
      freqFlyerVendorCode: [''],
      dob: ['']
    })
  }

  get pax(): any {
    return this.paxProfileForm.get('paxForm') as FormArray;
  }

  addMorePax(type) {
    this.pax.push(this.initItems(type));
  }

  paxAdd() {
    this.pax.push(this.initItems(''));
  }

  setSalutation(salutation, index) {
    console.log("SALUTATION", salutation);
    this.pax.controls[index].controls.salutation.setValue(salutation);
  }

  setPaxNationality(nationality, index) {
    this.pax.controls[index].controls.nationality.setValue(nationality);
  }

  setIssuingCountry(country, index) {
    console.log(country)
    console.log(index)
    this.pax.controls[index].controls.issuingCountry.setValue(country);
  }

  setGender(sex, index) {
    this.pax.controls[index].controls.sex.setValue(sex);
  }

  setProfileCountry(country, index) {
    this.pax.controls[index].controls.country.setValue(country);
  }

  setPaymentForm(type) {
    this.paxProfileForm.get('paymentForm').setValue(type);
  }

  setBillingCountry(country) {
    this.paxProfileForm.get('payCountry').setValue(country);
  }

  setRecordLocator(type, record: any) {
    this.retrieveProfileForm.get('recordLocator').setValue(record);
  }

  setNationality(country) {
    this.retrieveProfileForm.get('nationality').setValue(country);
  }

  setProfileStatus(status) {
    this.retrieveProfileForm.get('profileStatus').setValue(status);
  }

  setTravellerCheckbox() {
    var scope = this;
    $(document).ready(() => {
      scope.retrieveProfileForm.get('traveller').setValue($("input[name='traveller']").is(":checked"));
    });
  }

  setAgencyCheckbox() {
    var scope = this;
    $(document).ready(() => {
      scope.retrieveProfileForm.get('agency').setValue($("input[name='agency']").is(":checked"));
    });
  }

  setCompanyCheckbox() {
    var scope = this;
    $(document).ready(() => {
      scope.retrieveProfileForm.get('company').setValue($("input[name='company']").is(":checked"));
    });
  }

  setGroupCheckbox() {
    var scope = this;
    $(document).ready(() => {
      scope.retrieveProfileForm.get('group').setValue($("input[name='group']").is(":checked"));
    });
  }

  retrieveProfile() {
    var scope = this;
    $(document).ready(() => {
      scope.retrieveProfileForm.get('traveller').setValue($("input[name='traveller']").is(":checked"));
      scope.retrieveProfileForm.get('agency').setValue($("input[name='agency']").is(":checked"));
      scope.retrieveProfileForm.get('group').setValue($("input[name='group']").is(":checked"));
      scope.retrieveProfileForm.get('company').setValue($("input[name='company']").is(":checked"));
    });

    console.log(this.retrieveProfileForm.value);

    this.profileManagementService.ReteriveProfileData(this.retrieveProfileForm.value).subscribe((res: any) => {
      if (res) {
        console.log(res);
      } else {
        Swal.fire('Oops...', res.result.msg, 'info');
      }
    }, (err: any) => {
      Swal.fire('Oops...', `Error: Something went wrong at our end. We apologise for inconvenience. ERR: ${err}`, 'error');
    });
  }

  sortFlights() {

    //fetchJsonFlightPriceResponse

    let dataList = this.paxTicketDetails.json;
    let orgDest = dataList.DataLists.OriginDestinationList.OriginDestination;
    if (orgDest[0].DepartureCode == 'DXB') {
      this.onwardKeys = orgDest[0]['@refs'].split(' ');
    }
    if (orgDest[1].DepartureCode == 'LHR') {
      this.returnKeys = orgDest[1]['@refs'].split(' ');
    }

    console.log(this.onwardKeys.length + ' ' + this.returnKeys.length);

    this.onwardKeys.map((onward, index) => {
      dataList.DataLists.FlightList.Flight.map((flight) => {
        let key = flight["@FlightKey"];
        let segmentRef = flight.SegmentReferences["#text"] ? flight.SegmentReferences["#text"].split(" ") : flight.SegmentReferences.split(" ");
        let origin = flight.SegmentReferences["@OnPoint"];
        let dest = flight.SegmentReferences["@OffPoint"];

        if (onward == key) {
          segmentRef.map(ref => {
            dataList.DataLists.FlightSegmentList.FlightSegment.map((seg, index) => {
              if (seg["@SegmentKey"] == ref) {
                this.onwards.push({ segmentKey: seg["@SegmentKey"], flight: seg, type: 'onwards' })
              }
            });
          });

          dataList.OffersGroup.AirlineOffers.map(ofrSnap => {
            if (Array.isArray(ofrSnap.AirlineOffer)) {
              ofrSnap.AirlineOffer.map(offer => {
                // console.log("-======-")
                // console.log(key)
                // console.log(offer.PricedOffer.Associations.ApplicableFlight.FlightReferences)
                // console.log("-======-")

                if (offer.PricedOffer.Associations.ApplicableFlight.FlightReferences.indexOf(key) !== -1) {
                  dataList.DataLists.PriceClassList.PriceClass.map(pclass => {
                    if (pclass["@ObjectKey"] == offer.PricedOffer.OfferPrice.FareDetail.PriceClassReference) {
                      dataList.DataLists.FareList.FareGroup.map(fare => {
                        if (Array.isArray(offer.PricedOffer.OfferPrice.FareDetail.FareComponent)) {
                          offer.PricedOffer.OfferPrice.FareDetail.FareComponent.map(group => {
                            if (fare["@ListKey"] == group["@refs"] && this.tempFareKey !== group["@refs"]) {
                              this.tempFareKey = group["@refs"];
                              this.fareGroup.push(fare)
                            }
                          });
                        } else {
                          let group = offer.PricedOffer.OfferPrice.FareDetail.FareComponent;
                          if (fare["@ListKey"] == group["@refs"] && this.tempFareKey !== group["@refs"]) {
                            this.tempFareKey = group["@refs"];
                            this.fareGroup.push(fare)
                          }
                        }
                      });
                      this.offersArr.push({ pclass, offer, fareGroup: this.fareGroup });
                      this.fareGroup = [];
                      this.tempFareKey = "";
                    }
                  });
                }
              });
              let offer = ofrSnap.AirlineOffer[0];
              if (Array.isArray(offer.PricedOffer.Associations.ApplicableFlight.FlightSegmentReference)) {
                offer.PricedOffer.Associations.ApplicableFlight.FlightSegmentReference.map(ref => {
                  dataList.DataLists.FlightSegmentList.FlightSegment.map(flg => {
                    if (ref["@ref"] == flg["@SegmentKey"] && this.flightSegmentKey !== flg["@SegmentKey"]) {
                      this.flightSegmentKey = flg["@SegmentKey"];
                      this.airlines.push({ id: flg.MarketingCarrier.AirlineID, name: flg.MarketingCarrier.Name })
                    }
                  });
                });
              } else {
                dataList.DataLists.FlightSegmentList.FlightSegment.map(flg => {
                  if (offer.PricedOffer.Associations.ApplicableFlight.FlightSegmentReference["@ref"] == flg["@SegmentKey"] && this.flightSegmentKey !== flg["@SegmentKey"]) {
                    this.flightSegmentKey = flg["@SegmentKey"];
                    this.airlines.push({ id: flg.MarketingCarrier.AirlineID, name: flg.MarketingCarrier.Name })
                  }
                });
              }
            } else {
              let offer = ofrSnap.AirlineOffer;
              console.log(offer.PricedOffer.Associations.ApplicableFlight.FlightReferences)
              if (offer.PricedOffer.Associations.ApplicableFlight.FlightReferences.indexOf(key) !== -1) {
                dataList.DataLists.PriceClassList.PriceClass.map(pclass => {
                  if (pclass["@ObjectKey"] == offer.PricedOffer.OfferPrice.FareDetail.PriceClassReference) {
                    dataList.DataLists.FareList.FareGroup.map(fare => {
                      if (Array.isArray(offer.PricedOffer.OfferPrice.FareDetail.FareComponent)) {
                        offer.PricedOffer.OfferPrice.FareDetail.FareComponent.map(group => {
                          if (fare["@ListKey"] == group["@refs"] && this.tempFareKey !== group["@refs"]) {
                            this.tempFareKey = group["@refs"];
                            this.fareGroup.push(fare)
                          }
                        });
                      } else {
                        let group = offer.PricedOffer.OfferPrice.FareDetail.FareComponent;
                        if (fare["@ListKey"] == group["@refs"] && this.tempFareKey !== group["@refs"]) {
                          this.tempFareKey = group["@refs"];
                          this.fareGroup.push(fare)
                        }
                      }
                    });
                    this.offersArr.push({ pclass, offer, fareGroup: this.fareGroup });
                    this.fareGroup = [];
                  }
                });
              }
              if (Array.isArray(offer.PricedOffer.Associations.ApplicableFlight.FlightSegmentReference)) {
                offer.PricedOffer.Associations.ApplicableFlight.FlightSegmentReference.map(ref => {
                  dataList.DataLists.FlightSegmentList.FlightSegment.map(flg => {
                    if (ref["@ref"] == flg["@SegmentKey"] && this.flightSegmentKey !== flg["@SegmentKey"]) {
                      this.flightSegmentKey = flg["@SegmentKey"];
                      this.airlines.push({ id: flg.MarketingCarrier.AirlineID, name: flg.MarketingCarrier.Name })
                    }
                  });
                });
              } else {
                dataList.DataLists.FlightSegmentList.FlightSegment.map(flg => {
                  if (offer.PricedOffer.Associations.ApplicableFlight.FlightSegmentReference["@ref"] == flg["@SegmentKey"] && this.flightSegmentKey !== flg["@SegmentKey"]) {
                    this.flightSegmentKey = flg["@SegmentKey"];
                    this.airlines.push({ id: flg.MarketingCarrier.AirlineID, name: flg.MarketingCarrier.Name })
                  }
                });
              }
            }
            this.airlineOfferSnapshot.push({
              owner: ofrSnap.Owner,
              snapshot: ofrSnap.AirlineOfferSnapshot,
              airlines: this.airlines
            });
            if (this.offersArr.length > 0) this.ownersOffersArr.push({ owner: ofrSnap.Owner, offersArr: this.offersArr, airlines: this.airlines });
            this.offersArr = [];
            this.airlines = [];
            this.flightSegmentKey = "";
          });

          this.onwardArr.push({ onwards: this.onwards, offers: this.ownersOffersArr });
          this.ownersOffersArr = [];
          this.onwards = [];
        }
        if (this.returnKeys[index] == key) {
          segmentRef.map(ref => {
            dataList.DataLists.FlightSegmentList.FlightSegment.map((seg, index) => {
              if (seg["@SegmentKey"] == ref) {
                this.returns.push({ segmentKey: seg["@SegmentKey"], flight: seg, type: 'returns' })
              }
            });
          });

          dataList.OffersGroup.AirlineOffers.map(ofrSnap => {
            if (Array.isArray(ofrSnap.AirlineOffer)) {
              ofrSnap.AirlineOffer.map(offer => {
                // console.log("-======-")
                // console.log(key)
                // console.log(offer.PricedOffer.Associations.ApplicableFlight.FlightReferences)
                // console.log("-======-")

                if (offer.PricedOffer.Associations.ApplicableFlight.FlightReferences.indexOf(key) !== -1) {
                  dataList.DataLists.PriceClassList.PriceClass.map(pclass => {
                    if (pclass["@ObjectKey"] == offer.PricedOffer.OfferPrice.FareDetail.PriceClassReference) {
                      dataList.DataLists.FareList.FareGroup.map(fare => {
                        if (Array.isArray(offer.PricedOffer.OfferPrice.FareDetail.FareComponent)) {
                          offer.PricedOffer.OfferPrice.FareDetail.FareComponent.map(group => {
                            if (fare["@ListKey"] == group["@refs"] && this.tempFareKey !== group["@refs"]) {
                              this.tempFareKey = group["@refs"];
                              this.fareGroup.push(fare)
                            }
                          });
                        } else {
                          let group = offer.PricedOffer.OfferPrice.FareDetail.FareComponent;
                          if (fare["@ListKey"] == group["@refs"] && this.tempFareKey !== group["@refs"]) {
                            this.tempFareKey = group["@refs"];
                            this.fareGroup.push(fare)
                          }
                        }
                      });
                      this.offersArr.push({ pclass, offer, fareGroup: this.fareGroup });
                      this.fareGroup = [];
                      this.tempFareKey = "";
                    }
                  });
                }
              });
              let offer = ofrSnap.AirlineOffer[0];
              if (Array.isArray(offer.PricedOffer.Associations.ApplicableFlight.FlightSegmentReference)) {
                offer.PricedOffer.Associations.ApplicableFlight.FlightSegmentReference.map(ref => {
                  dataList.DataLists.FlightSegmentList.FlightSegment.map(flg => {
                    if (ref["@ref"] == flg["@SegmentKey"] && this.flightSegmentKey !== flg["@SegmentKey"]) {
                      this.flightSegmentKey = flg["@SegmentKey"];
                      this.airlines.push({ id: flg.MarketingCarrier.AirlineID, name: flg.MarketingCarrier.Name })
                    }
                  });
                });
              } else {
                dataList.DataLists.FlightSegmentList.FlightSegment.map(flg => {
                  if (offer.PricedOffer.Associations.ApplicableFlight.FlightSegmentReference["@ref"] == flg["@SegmentKey"] && this.flightSegmentKey !== flg["@SegmentKey"]) {
                    this.flightSegmentKey = flg["@SegmentKey"];
                    this.airlines.push({ id: flg.MarketingCarrier.AirlineID, name: flg.MarketingCarrier.Name })
                  }
                });
              }
            } else {
              let offer = ofrSnap.AirlineOffer;
              console.log(offer.PricedOffer.Associations.ApplicableFlight.FlightReferences)
              if (offer.PricedOffer.Associations.ApplicableFlight.FlightReferences.indexOf(key) !== -1) {
                dataList.DataLists.PriceClassList.PriceClass.map(pclass => {
                  if (pclass["@ObjectKey"] == offer.PricedOffer.OfferPrice.FareDetail.PriceClassReference) {
                    dataList.DataLists.FareList.FareGroup.map(fare => {
                      if (Array.isArray(offer.PricedOffer.OfferPrice.FareDetail.FareComponent)) {
                        offer.PricedOffer.OfferPrice.FareDetail.FareComponent.map(group => {
                          if (fare["@ListKey"] == group["@refs"] && this.tempFareKey !== group["@refs"]) {
                            this.tempFareKey = group["@refs"];
                            this.fareGroup.push(fare)
                          }
                        });
                      } else {
                        let group = offer.PricedOffer.OfferPrice.FareDetail.FareComponent;
                        if (fare["@ListKey"] == group["@refs"] && this.tempFareKey !== group["@refs"]) {
                          this.tempFareKey = group["@refs"];
                          this.fareGroup.push(fare)
                        }
                      }
                    });
                    this.offersArr.push({ pclass, offer, fareGroup: this.fareGroup });
                    this.fareGroup = [];
                  }
                });
              }
              if (Array.isArray(offer.PricedOffer.Associations.ApplicableFlight.FlightSegmentReference)) {
                offer.PricedOffer.Associations.ApplicableFlight.FlightSegmentReference.map(ref => {
                  dataList.DataLists.FlightSegmentList.FlightSegment.map(flg => {
                    if (ref["@ref"] == flg["@SegmentKey"] && this.flightSegmentKey !== flg["@SegmentKey"]) {
                      this.flightSegmentKey = flg["@SegmentKey"];
                      this.airlines.push({ id: flg.MarketingCarrier.AirlineID, name: flg.MarketingCarrier.Name })
                    }
                  });
                });
              } else {
                dataList.DataLists.FlightSegmentList.FlightSegment.map(flg => {
                  if (offer.PricedOffer.Associations.ApplicableFlight.FlightSegmentReference["@ref"] == flg["@SegmentKey"] && this.flightSegmentKey !== flg["@SegmentKey"]) {
                    this.flightSegmentKey = flg["@SegmentKey"];
                    this.airlines.push({ id: flg.MarketingCarrier.AirlineID, name: flg.MarketingCarrier.Name })
                  }
                });
              }
            }
            this.airlineOfferSnapshot.push({
              owner: ofrSnap.Owner,
              snapshot: ofrSnap.AirlineOfferSnapshot,
              airlines: this.airlines
            });
            if (this.offersArr.length > 0) this.ownersOffersArr.push({ owner: ofrSnap.Owner, offersArr: this.offersArr, airlines: this.airlines });
            this.offersArr = [];
            this.airlines = [];
            this.flightSegmentKey = "";
          });
          this.returnArr.push({ returns: this.returns, offers: this.ownersOffersArr });
          this.ownersOffersArr = [];
          this.returns = [];
        }
      });
      this.flightsList.push({
        keys: { onwardsKey: onward, returnKey: this.returnKeys[index] },
        flights: { onwards: this.onwardArr, returns: this.returnArr }
      });
      this.onwardArr = [];
      this.returnArr = [];
      this.flightsArr = [];
      this.ownersOffersArr = [];
      this.airlines = [];
    });
    console.log(this.flightsArr);
  }

  parseFloatStr(val) { return parseFloat(val); }

  ngAfterViewInit() {
    $(document).ready(function () {
      $('.menu .item').tab();
      $('.ui.dropdown').dropdown();
      $('.dropdownOne').dropdown({ placeholder: 'Choose agents' });
    });

    this.loadDOBDate();
    if (this.showAncModal) {
      this.showAncillariesDropdown();
    }
  }

  loadDOBDate() {

    var scope = this;
    $(document).ready(() => {
      $(function () {
        $("input[name='dob']").daterangepicker({
          singleDatePicker: true,
          showDropdowns: true,
          // minYear: 1901,
          // startDate: moment(),
          autoUpdateInput: true,
          //minDate: moment(),
          // maxYear: parseInt(moment().format('YYYY'), 10)
        }, function (start, end, label) {
          var years = moment().diff(start, 'years');
          scope.paxProfileForm.patchValue({ 'dob': moment(start).format('DD/MM/YYYY') });
        });
        // $(function() {
        //   $('.calendar.right').show();
        // });
      });

    });


  }

  loadExpDate() {
    var scope = this;
    $(function () {
      $("input[name='expiryDate']").daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        // minYear: 1901,
        // startDate: moment(),
        autoUpdateInput: true,
        //minDate: moment(),
        // maxYear: parseInt(moment().format('YYYY'), 10)
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.paxProfileForm.patchValue({ 'expiryDate': moment(start).format('DD/MM/YYYY') });
      });
      $(function() {
        $('.calendar.right').show();
      });
    });
  }

  loadConfig() {
    $(document).ready(function () {
      $('.ui.dropdown').dropdown();
      $('.menu .item').tab();
      $('.ui.accordion').accordion()
      $('#dob').daterangepicker({
        singleDatePicker:true,
      })
    })
  }

  showFaresBreakDown() {
    this.paxTicketDetails

    console.log("FARES FARES")
    $(document).ready(function () {
      $('.fares-panel').transition('slide down');
    });
  }

  showAncillariesDropdown() {
    $(document).ready(function () {
      $('.ui.modal.ancillary_modal').modal('show');
    });
  }

  backToFlightSearch() {
    this.dispFlightSearchEmitter.emit(true);
  }

  profileFormSubmit() {
    console.log(":::::::::pro", this.paxProfileForm.value)
    Object.assign(this.paxTicketDetails, this.paxProfileForm.value)

    console.log("CHECK CHECK", this.paxTicketDetails.paxForm.slice(1));

    console.log("FORM FORM", this.paxProfileForm);
    console.log("THIS IS", this.paxProfileForm)

    this.bookNowLoader = true;
    console.log(this.paxProfileForm.value);
    this.forTaleb = this.paxProfileForm.value;
    let EchoToken = localStorage.getItem('ECK_TOKEN');
    let ShoppingId = "";
    if (localStorage.getItem('shopping_id') !== "") {
      ShoppingId = localStorage.getItem('shopping_id');
    }
    console.log("SHOPPING ID", ShoppingId);
    let myJSON = JSON.parse(localStorage.getItem("MYJSON"));
    console.log(myJSON);
    let bookingFor = myJSON.bookingFor;
    console.log('bookingFor',bookingFor);
    let DataLists = myJSON.DataLists;
    let AirlineOffer = this.paxTicketDetails.AirlineOffer;
    let Metadata = myJSON.Metadata;
    let PaxForms = this.paxProfileForm.value.paxForm.slice(1);
    let Payments = this.paxProfileForm.value;
    console.log("Traveller", this.paxTicketDetails.DataLists);
    console.log("FOR ORDER CREATE")
    let AnonymousTravelersListInfo = this.paxTicketDetails.DataLists.AnonymousTravelersList;
    console.log({ EchoToken, ShoppingId, DataLists, AirlineOffer, Metadata, PaxForms, Payments, AnonymousTravelersListInfo });
    // this.flightSearchService.orderCreateRequest()
    this.flightSearchService.orderCreateRequest({ EchoToken, bookingFor, DataLists, AirlineOffer, Metadata, PaxForms, Payments, AnonymousTravelersListInfo })
      .subscribe((res: any) => {
        if (res) {
          this.bookNowLoader = false;
          this.router.navigateByUrl(`/bookings/booking-details/${res.result.pnr.Order.BookingReferences.BookingReference.OtherID["#text"]}`);
          Swal.fire('Congratulations', `PNR Created Successfully. Your Trip ID is ${res.result.pnr.Order.BookingReferences.BookingReference.OtherID["#text"]}`, 'success');
        } else {
          this.bookNowLoader = false;
          Swal.fire('Oops...', 'Error: Something went wrong at our end. We apologise for inconvenience.', 'error');
        }
      }, (err: any) => {
        this.bookNowLoader = false;
        Swal.fire('Oops...', 'Error: Something went wrong at our end. We apologise for inconvenience.', 'error');
      })
  }

  showBrandDisclosure(modalId: any) {
    this.modalService.open(modalId);
  }

  showFareDetails(modalId: any) {
    this.modalService.open(modalId);
  }

  showMealModal(modalId: any) {
    this.modalService.open(modalId);
  }

  showBaggageModal(modalId: any) {
    this.modalService.open(modalId);
  }

  showDisabilityModal(modalId: any) {
    this.modalService.open(modalId);
  }

  closeModal(modalId: any) {
    this.modalService.close(modalId);
  }

  showSeatMapModal(modalId: any) {
    this.modalService.open(modalId);
  }
  passIdentification(type: string, index: number) {
    if (type === 'Passport') {
      this.Pflag = index
      this.identifactionType = "Passport";
      this.showExpiryDate = true;
    } else if (type === 'Resident ID') {
      this.Pflag = index
      this.identifactionType = 'Residential Identity';
      this.showExpiryDate = false;
    } else {
      this.Pflag = index
      this.identifactionType = 'National ID';
      this.showExpiryDate = false;
    }
    this.pax.controls[index].controls.identification.setValue(type);
  }

reset(){
  this.paxProfileForm.reset();
}

backToFlightHome() {
  this._document.defaultView.location.reload();
}

}
