import {Component, Input, OnInit, Output} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {CarSearchService} from "../../../../shared/services/car.service";
import {ToastrService} from "ngx-toastr";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  @Input() car;
  @Input() CarSearchCriteria;

  selectedCar: any = null;
  disableButton: boolean = true;

  carDetailsResult = {};
  detailsCarSpinner: boolean = false;
  bookCarSpinner: boolean = false;
  searchBoxCard: boolean = true;
  carDetailsObj: any = {};
  currentCarBlock: any = null;
  currentShowCarBlock: any = null;
  carsearch: any = {};
  CarRules : any = [];
  carblockList : any ;
  showfurtherDetails : boolean = false;
  showDetailsDisabled: boolean = false;
  classNamefilter:string;
  carNamefilter:string;
  lhPrice: string = '';
  transmissionfilter: string = '';
  lhString : string = 'Price: Low to High'
  minPrice:number;
  maxPrice:number;

  getUserInfo: boolean = false;


  constructor(
    private fb : FormBuilder,
    private carSearchService : CarSearchService,
    private toastr: ToastrService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  rangeFilter(){
    this.minPrice = 0, this.maxPrice = 0;
    }
    nameClear(){
      this.carNamefilter = '';
    }
  classClear(){
    this.classNamefilter = '';
  }

  clearallfilter(){
    this.minPrice = 0, this.maxPrice = 0;
    this.carNamefilter = '';
    this.classNamefilter = '';
  }

  priceFilter(event){
    if(event.type === 'click'){

      if(this.lhPrice.toString() === ''){
        this.lhPrice = 'LH';
      }else if(this.lhPrice.toString() === 'LH'){
        this.lhString = "Price: High to Low"
        this.lhPrice = 'HL';
      }else{
        this.lhString = "Price: Low to High"
        this.lhPrice = 'LH';
      }
    }

  }
  modifySearch(){
    window.location.reload();
    }


  ShowcarDetails(carData,CarSearchCriteria) {
    this.disableButton = true;
    this.detailsCarSpinner = true;
    this.showfurtherDetails = false;
    this.getUserInfo = false;
    this.currentShowCarBlock = carData.car_id;
    this.showDetailsDisabled = true;
    console.log('--------------------')
    this.showfurtherDetails = !this.showfurtherDetails;
    let toastrTitle = `No Cars`;
    let toastrMessage = `Oops! We're unable to find cars for searched parameters. Try again with different search criteria.`;
    this.carsearch['Carsearch']= CarSearchCriteria;
    this.carsearch['CarDetails']= carData;

    var third = Object.assign(this.carsearch);

    this.carDetailsObj = third;
    console.log(this.carDetailsObj);
    this.carSearchService.carDetails(this.carDetailsObj)
      .subscribe((response: any) => {
          if (response.status) {
            this.currentCarBlock = carData.car_id;
            this.detailsCarSpinner = false;
            this.disableButton = false;
            // console.log(response.result.CarsResult);
            this.carDetailsResult = response.result.CarsResult
            this.CarRules =  response.result.CarsResult['Cars']['CarRules']['rule'];
            if(this.CarRules){
              this.CarRules =this.CarRules;
            }else{
              this.CarRules ='';
            }
          } else {
            this.buildError(toastrMessage, toastrTitle);
          }
        },
        (httpErrorResponse) => {
          this.buildError(toastrMessage, toastrTitle);
        });
  }


  getUserInfoForm(car, search) {

    this.selectedCar = { carData: car, searchData: search }
    this.getUserInfo = true;


  }
  carBookForm = this.fb.group({
    sel_date: ['']
  })
  transmissionfilters(value=null){
    this.transmissionfilter = value;
  }

  buildError(title, message) {
    this.searchBoxCard = true;
    this.toastr.info(message, title, {timeOut: 10000, progressBar: false, positionClass: 'toast-top-right'});
  }
  carBlocking(params,selectedcode) {
    this.bookCarSpinner = true;
    const data = {
      sc: this.carDetailsResult,
      bi: params,
      sec:selectedcode
    }
		this.carSearchService.BlockRequest(data).subscribe((respt: any) => {
			 if (respt.status) {
        this.bookCarSpinner = false;
        this.carblockList =respt;
        this.router.navigateByUrl('search/cars/block' , { state: this.carblockList });
			 }
    });

	}
}




