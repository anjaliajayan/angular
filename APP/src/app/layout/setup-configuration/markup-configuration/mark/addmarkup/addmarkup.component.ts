
import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { SetupConfigService } from 'src/app/shared/services/setup-config/setup-config.service';
import { POSService } from 'src/app/shared/services/pointsale.service';
import { GroupSeasonality } from 'src/app/shared/models/setup-config/group_seasonality';
import { ListOfSupplers } from 'src/app/shared/models/setup-config//list-of-supplier';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { CommonService } from 'src/app/shared/services/common.service';
import { environment } from './../../../../../../environments/environment';
declare const moment: any;
declare const $: any;

@Component({
  selector: 'app-add-markup',
  templateUrl: './addmarkup.component.html',
  styleUrls: ['./addmarkup.component.scss']
})
export class AddMarkupComponent implements OnInit {

  @Input() groupId: number;
  addMarkupForm: FormGroup;
  allSuppliers: Array<ListOfSupplers> = []
  filteredSuppliers: Array<ListOfSupplers> = []
  allGroups: Array<[GroupSeasonality]> = [];
  isSubmitted: boolean = false;
  is_all: boolean;
  is_child: boolean;
  is_adult: boolean;
  is_infant: boolean;
  orgin_airport: any;
  destination_airport: any;
  marketing_carriers: any;
  showUpdateButton:boolean;
  showSaveButton:boolean;
  service_class: any;
  orgArr = [];
  destArr = [];
  carrierArr = [];
  serviceArr = [];
  pax = [];
  airports: string[] = [];

  filterGroup: any = {
    limit:1500,
  }

  @Output()
  change: EventEmitter<any> = new EventEmitter<any>();
  @Output() dataToParent = new EventEmitter<string>();
  @Input('mark') row: any;
  @Input('groupData') allGroupdatas: any;
  @Input('supplierData') allSupplierDatas: any;
  @Input('flag') flagOnAdd:any;
  @Input('flagEdit') flagOnEdit:any;

  // for chips
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  // for chips
  suppliersList = [];
  supplierId: Number;
  saleId: Number;
  constructor(
    public MarkupConfigurationService: SetupConfigService,
    public posService: POSService,
    private _formBuilder: FormBuilder,
    private toastr: ToastrService,
    private CommonService: CommonService
  ) { }

  ngOnInit() {


    this.initMarkupForm();
    this.fetchAllGroups(this.filterGroup);
    this.fetchAllSuppliers({});
    this.onEditMarkUpRow(this.row);
    this.getAirportDetails();
    if(this.flagOnAdd == true && this.flagOnEdit == false){
      this.showSaveButton=true;
      this.showUpdateButton=false;
      this.fetchAllGroups(this.filterGroup);
      this.addMarkupForm.reset();
     }else{
      this.showUpdateButton=true;
      this.showSaveButton=false;
     }
  }

  initMarkupForm() {
    this.addMarkupForm = this._formBuilder.group({
      supplier_id: ['', Validators.required],
      sale_id: ['', Validators.required],
      title: ['', Validators.required],
      is_active: ['', Validators.required],
      priority: ['', Validators.required],
      markup_id: [''],
      markup_flight_id: ['']
    });
  }

  addFlightMarkupFormGroup() {
    this.addMarkupForm.addControl('flightsMarkup', this._formBuilder.group({
      markup_mode: ['',[Validators.required]],
      markup: ['', [Validators.required]],
      calculation_basis: ['', [Validators.required]],
      calculation_type: ['', [Validators.required]],
      itinerary_type: ['', [Validators.required]],
      orgin_airport: [[]],
      destination_airport: [[]],
      marketing_carriers: [[]],
      service_class: [[]],
      is_adult: [''],
      is_infant: [''],
      is_child: [''],
      is_all: [''],
      markup_id: [''],
      markup_flight_id: [''],
      pax_types: [''],
      org_airport:[''],
      dest_airport:[''],
      mode:['']
    }))
    this.makeJqueryFields();
  }
  removeFlightMarkupFormGroup() {
    this.addMarkupForm.removeControl('flightsMarkup');
  }

  addHotelMarkupFormGroup() {
    this.addMarkupForm.addControl('hotelsMarkup', this._formBuilder.group({
      markup_hotel_id:[''],
      markup:[''],
      markup_mode:[''],
      min_markup:[''],
      max_markup:['']
    }))
    this.makeJqueryFields();
  }
  removeHotelMarkupFormGroup() {
    this.addMarkupForm.removeControl('hotelsMarkup');
  }

  addActivitiesMarkupFormGroup() {
    this.addMarkupForm.addControl('activitiesMarkup', this._formBuilder.group({
      markup_activitie_id:[''],
      markup:[''],
      markup_mode:[''],
      min_markup:[''],
      max_markup:['']
    }))
    this.makeJqueryFields();
  }

  removeActivitiesMarkupFormGroup() {
    this.addMarkupForm.removeControl('activitiesMarkup');
  }

  addCarsMarkupFormGroup() {
    this.addMarkupForm.addControl('carsMarkup', this._formBuilder.group({
      markup_car_id:[''],
      markup:[''],
      markup_mode:[''],
      min_markup:[''],
      max_markup:['']
    }))
    this.makeJqueryFields();
  }
  removeCarsMarkupFormGroup() {
    this.addMarkupForm.removeControl('carsMarkup');
  }

  addTransfersMarkupFormGroup() {
    this.addMarkupForm.addControl('transfersMarkup', this._formBuilder.group({
      markup_transfer_id:[''],
      markup:[''],
      markup_mode:[''],
      min_markup:[''],
      max_markup:['']
    }))
    this.makeJqueryFields();
  }
  removeTransfersMarkupFormGroup() {
    this.addMarkupForm.removeControl('transfersMarkup');
  }

  addInsuranceMarkupFormGroup() {
    this.addMarkupForm.addControl('insurancesMarkup', this._formBuilder.group({
      markup_insurance_id:[''],
      markup:[''],
      markup_mode:[''],
      min_markup:[''],
      max_markup:['']
    }))
    this.makeJqueryFields();
  }
  removeInsuranceMarkupFormGroup() {
    this.addMarkupForm.removeControl('insurancesMarkup');
  }

  addCruisesMarkupFormGroup() {
    this.addMarkupForm.addControl('cruisesMarkup', this._formBuilder.group({
      markup_cruise_id:[''],
      markup:[''],
      markup_mode:[''],
      min_markup:[''],
      max_markup:['']
    }))
    this.makeJqueryFields();
  }

  removeCruisesMarkupFormGroup() {
    this.addMarkupForm.removeControl('cruisesMarkup');
  }


  addMark(data:any) {
    this.isSubmitted = true;
    var flightsData = {};
    var hotelsData = {};
    var activityData = {};
    var transfersData = {};
    var carsData={};
    var cruisesData={};
    var insurancesData={};

    if (this.addMarkupForm.controls.flightsMarkup){
      flightsData = this.addMarkupForm.controls.flightsMarkup.value;
      flightsData=this.convertFlightsData(flightsData);
    }else{
      flightsData ='';
    }

    if (this.addMarkupForm.controls.hotelsMarkup)
    hotelsData = this.addMarkupForm.controls.hotelsMarkup.value || false;

    if (this.addMarkupForm.controls.activitiesMarkup)
     activityData=this.addMarkupForm.controls.activitiesMarkup.value || false;

    if (this.addMarkupForm.controls.transfersMarkup)
    transfersData =this.addMarkupForm.controls.transfersMarkup.value|| false;

    if (this.addMarkupForm.controls.carsMarkup)
    carsData =this.addMarkupForm.controls.carsMarkup.value || false;

    if (this.addMarkupForm.controls.cruisesMarkup)
    cruisesData =this.addMarkupForm.controls.cruisesMarkup.value || false;

    if (this.addMarkupForm.controls.insurancesMarkup)
    insurancesData =this.addMarkupForm.controls.insurancesMarkup.value|| false;

    this.MarkupConfigurationService.AddMarkup({
      markup: {
        supplier_id: this.addMarkupForm.controls.supplier_id.value,
        sale_id: this.addMarkupForm.controls.sale_id.value,
        title: this.addMarkupForm.controls.title.value,
        is_active: this.addMarkupForm.controls.is_active.value,
        priority: this.addMarkupForm.controls.priority.value,
        markup_id:'',
        mode:"Add"
      },
      editions: {
        hotels:hotelsData,
        flights:flightsData,
        activities:activityData,
        cars:carsData,
        transfers:transfersData,
        insurances:insurancesData,
        cruises:cruisesData,
      }
    })
      .subscribe((res: any) => {
        if (res.status) {
          var markup = res.result;
          this.dataToParent.emit(data);
          this.toastr.success(`${res.message}`, `Success `, {
            timeOut: 10000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
          this.change.emit({ component: 'markup', action: 'add', markup: markup });
        }
        else {
          this.toastr.error(`${res.message}`, ` `, {
            timeOut: 10000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          })
        }
      });
  }

  fetchAllSuppliers(params) {
    this.MarkupConfigurationService.FetchAllSuppliers(params)
      .subscribe((res: any) => {
        if (res.status) {
          this.allSuppliers = res.result;
          this.filteredSuppliers = this.allSuppliers;
        }
      }, err => {
        console.log('erer ', err)
      });
  }

  fetchAllGroups(filterGroup: any) {
    this.MarkupConfigurationService.GetAllGroups(this.filterGroup)
      .subscribe((res: any) => {
        if (res.status) {
          var myArray = res.result.data.filter(function( obj ) { 
            return obj.status !=1;
        });
       this.allGroups =myArray;
       console.log("===fetchAllGroups====",this.allGroups);
        }
      }, err => {
        console.log('erer ', err)
      });
  }

  groupChanged(sale_id) {
    var suppliers = this.allSuppliers;
    this.addMarkupForm.patchValue({ supplier_id: '' });
    this.makeJqueryFields();
    var saleObj = this.allGroups.filter(obj => obj['sale_id'] == Number(sale_id))

    if (saleObj.length) {
      var tmpSale = saleObj[0];
      var filteredSuppliers = suppliers.filter(obj => {
        if (tmpSale['is_activities'] && !obj.is_activities)
          return false
        if (tmpSale['is_flight'] && !obj.is_flight)
          return false
        if (tmpSale['is_car'] && !obj.is_car)
          return false
        if (tmpSale['is_cruises'] && !obj.is_cruises)
          return false
        if (tmpSale['is_holidays'] && !obj.is_holidays)
          return false
        if (tmpSale['is_hotel'] && !obj.is_hotel)
          return false
        if (tmpSale['is_insurance'] && !obj.is_insurance)
          return false
        if (tmpSale['is_transfers'] && !obj.is_transfers)
          return false
        if (tmpSale['is_visa'] && !obj.is_visa)
          return false
        return true;

      })
   
      this.filteredSuppliers = filteredSuppliers;

      return;
    }
  }

  supplierChanged(supplier_id) {
    var sale_id = this.addMarkupForm.controls.sale_id.value;
    if (supplier_id && sale_id) {
      var saleObj_filter = this.allGroups.filter(obj => obj['sale_id'] == Number(sale_id));
      var supplierObj_filter = this.allSuppliers.filter(obj => obj['supplier_id'] == Number(supplier_id));
      if (saleObj_filter.length && supplierObj_filter.length) {
        var saleObj = saleObj_filter[0];
        var supplierObj = supplierObj_filter[0];
        if (saleObj['is_flight'] && supplierObj.is_flight) {
          this.addFlightMarkupFormGroup();
        } else {
          this.addMarkupForm.removeControl('flightsMarkup');
        }

        if (saleObj['is_hotel'] && supplierObj.is_hotel) {
          this.addHotelMarkupFormGroup();
        } else {
          this.addMarkupForm.removeControl('hotelsMarkup');
        }

        if (saleObj['is_car'] && supplierObj.is_car) {
          this.addCarsMarkupFormGroup();
        } else {
          this.addMarkupForm.removeControl('carsMarkup');
        }
      
        if (saleObj['is_activities'] && supplierObj.is_activities) {
          this.addActivitiesMarkupFormGroup();
        } else {
          this.addMarkupForm.removeControl('activitiesMarkup');
        }

        if (saleObj['is_transfers'] && supplierObj.is_transfers) {
          this.addTransfersMarkupFormGroup();
        } else {
          this.addMarkupForm.removeControl('transfersMarkup');
        }

        if (saleObj['is_cruises'] && supplierObj.is_cruises) {
          this.addCruisesMarkupFormGroup();
        } else {
          this.addMarkupForm.removeControl('cruisesMarkup');
        }

        if (saleObj['is_insurance'] && supplierObj.is_insurance) {
          this.addInsuranceMarkupFormGroup();
        } else {
          this.addMarkupForm.removeControl('insurancesMarkup');
        }

      }
    }
  }

  // showEditions(block) {
  //   var supplier = this.addMarkupForm.controls.supplier_id.value;
  //   var sale = this.addMarkupForm.controls.sale_id.value;
  //   if (supplier != '-1' && sale != '-1') {
  //     var tmp_sale_id = sale;
  //     var tmp_supplier_id = supplier;

  //     var saleObj = this.allGroups.filter(obj => obj['sale_id'] == Number(tmp_sale_id))
  //     var supplierObj = this.allSuppliers.filter(obj => obj.supplier_id == Number(tmp_supplier_id))
  //     if (saleObj.length > 0 && supplierObj.length > 0) {
  //       if (block == 'flight' && saleObj[0]['is_flight'] && supplierObj[0].is_flight)
  //       return true;
  //       if (block == 'hotel' && saleObj[0]['is_hotel'] && supplierObj[0].is_hotel)
  //         return true;
  //       // if (block == 'holiday' && saleObj[0]['is_holidays'] && supplierObj[0].is_holidays)
  //       //   return true;    
  //       if (block == 'activity' && saleObj[0]['is_activities'] && supplierObj[0].is_activities)
  //         return true;
  //       if (block == 'car' && saleObj[0]['is_car'] && supplierObj[0].is_car)
  //         return true;
  //       if (block == 'transfer' && saleObj[0]['is_transfers'] && supplierObj[0].is_transfers)
  //         return true;
  //       if (block == 'insurance' && saleObj[0]['is_insurance'] && supplierObj[0].is_insurance)
  //         return true;
  //       if (block == 'cruise' && saleObj[0]['is_cruises'] && supplierObj[0].is_cruises)
  //         return true;
  //     }

  //     return false;

  //   }
  //   return false;
  // }

  add(event: MatChipInputEvent, chk): void {
    const input = event.input;
    const value = event.value;
    if ((value || '').trim()) {
      if (chk == 1)
        this.addMarkupForm.controls.flightsMarkup.value.orgin_airport.push({ name: value.trim() })
      if (chk == 2)
        this.addMarkupForm.controls.flightsMarkup.value.destination_airport.push({ name: value.trim() });
      if (chk == 3)
        this.addMarkupForm.controls.flightsMarkup.value.marketing_carriers.push({ name: value.trim() });
      if (chk == 4)
        this.addMarkupForm.controls.flightsMarkup.value.service_class.push({ name: value.trim() });
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(val: any, chk): void {
    const index1 = this.addMarkupForm.controls.flightsMarkup.value.orgin_airport.indexOf(val);
    const index2 = this.addMarkupForm.controls.flightsMarkup.value.destination_airport.indexOf(val);
    const index3 = this.addMarkupForm.controls.flightsMarkup.value.marketing_carriers.indexOf(val);
    const index4 = this.addMarkupForm.controls.flightsMarkup.value.service_class.indexOf(val);

    if (true) {
      if (chk == 1)
        this.addMarkupForm.controls.flightsMarkup.value.orgin_airport.splice(index1, 1);
      if (chk == 2)
        this.addMarkupForm.controls.flightsMarkup.value.destination_airport.splice(index2, 1);
      if (chk == 3)
        this.addMarkupForm.controls.flightsMarkup.value.marketing_carriers.splice(index3, 1);
      if (chk == 4)
        this.addMarkupForm.controls.flightsMarkup.value.service_class.splice(index4, 1);
    }
  }

  convertFlightsData(flightsData) {
    if(flightsData != '')
    var tmp = Object.assign({}, flightsData);
    tmp.orgin_airport = (tmp.orgin_airport.map(obj => obj.name)).join();
    tmp.destination_airport = (tmp.destination_airport.map(obj => obj.name)).join();
    tmp.marketing_carriers = (tmp.marketing_carriers.map(obj => obj.name)).join();
    tmp.service_class = (tmp.service_class.map(obj => obj.name)).join();

    if (tmp.is_all)
      tmp.pax_types = 'ALL'
    else {
      var tmp_pax_types = '';
      if (tmp.is_child)
        tmp_pax_types += 'CHD,'
      if (tmp.is_adult)
        tmp_pax_types += 'ADT,'
      if (tmp.is_infant)
        tmp_pax_types += 'INF,'
      if (tmp_pax_types.length > 0)
        tmp_pax_types = tmp_pax_types.substring(0, tmp_pax_types.length - 1);
      tmp.pax_types = tmp_pax_types;

    }
    return tmp;
  }

  ngAfterViewInit() {
    let THIS = this;
    THIS.makeJqueryFields()

  }

  makeJqueryFields(){

    $('.ui.dropdown-group').dropdown();
    $('.ui.dropdown').dropdown();
    $(document).ready(function () {
      $('.ui.dropdown').dropdown();
      $('.ui.dropdown').dropdown('refresh');
      $('.ui.checkbox').checkbox();
      $('.ui.dropdownThree').dropdown();
      $(document).ready(function () {
        this._globals=localStorage.getItem('_globals');
        let token=JSON.parse(this._globals).token;
        $('.dropdown1').dropdown({
          type: 'category',
          minCharacters : 2,
          maxCharacters : 3,
          responseAsync: true,
          apiSettings: {
            url: environment.serverURL + '/api/get-airports-cache/{query}',
            beforeXHR: function (xhr) {
              xhr.setRequestHeader('Authorization',token);
              return xhr;
            },
            onResponse: function (response) {
              const result = { success: true, results: [] };
              $.each(response.result, function (index, item) {
                result['results'].push({
                  name: item.AirportCode, 
                  value: item.AirportCode
                })
              });
              return result;
            },
          },
        });
    
      });
    });
  }

  onEditMarkUpRow(group) {
    console.log("group::::::",group);

    console.log("allGroupdatas::::::::::::",this.allGroupdatas)
  if(group.length !=0){
    this.supplierId = group.supplier_id;
    this.saleId = group.sale_id;
    if(group.markup_flight != null){
      let tmp = group.markup_flight.pax_types.split(",");
   
    if (tmp.length) {
      this.is_all = false;
          this.is_child = false;
          this.is_infant = false;
          this.is_adult = false;

      tmp.forEach(element => {
        if (element == 'ALL') {
          this.is_all = true;
          this.is_child = true;
          this.is_infant = true;
          this.is_adult = true;
        } else {
          this.is_all = false;
          if (element == 'CHD') {
            this.is_child = true;
          }
          if (element == 'INF') {
            this.is_infant = true;
          }
          if (element == 'ADT') {
            this.is_adult = true;
          }
        }
      });
    }
    if (group.markup_flight.orgin_airport != null) {
      let txt = group.markup_flight.orgin_airport;
      txt = txt.split(',');
      txt.forEach(element => {
        this.orgArr.push({ name: element });
      });
    }
    console.log("this.orgArr::::::",this.orgArr);
    if (group.markup_flight.destination_airport != null) {
      let txt = group.markup_flight.destination_airport;
      txt = txt.split(',');
      txt.forEach(element => {
        this.destArr.push({ name: element });
      });
    }

    if (group.markup_flight.marketing_carriers != null) {
      let txt = group.markup_flight.marketing_carriers;
      txt = txt.split(',');
      txt.forEach(element => {
        this.carrierArr.push({ name: element });
      });
    }

    if (group.markup_flight.service_class != null) {
      let txt = group.markup_flight.service_class;
      txt = txt.split(',');
      txt.forEach(element => {
        this.serviceArr.push({ name: element });
      });   
    }
  }
    if (this.supplierId && this.saleId) {
      this.groupChanged(this.saleId);
      this.supplierChanged(this.supplierId);

      var saleObj_filter = this.allGroupdatas.filter(obj => obj['sale_id'] == Number(this.saleId));
      if(this.allSupplierDatas.length != 0){
        var supplierObj_filter = this.allSupplierDatas.filter(obj => obj['supplier_id'] == Number(this.supplierId));
      }

      if (saleObj_filter.length && supplierObj_filter.length) {
        var saleObj = saleObj_filter[0];
        var supplierObj = supplierObj_filter[0];

        if(group.markup_flight != null)
          if (saleObj['is_flight'] && supplierObj.is_flight) {
            this.addFlightMarkupFormGroup();
            this.addMarkupForm.controls.flightsMarkup.patchValue({
              markup_mode: group.markup_flight.markup_mode || "",
              markup: group.markup_flight.markup || "",
              calculation_basis: group.markup_flight.calculation_basis ||"",
              calculation_type: group.markup_flight.calculation_type ||"",
              itinerary_type: group.markup_flight.itinerary_type ||"",
              orgin_airport:this.orgArr ||"",
              destination_airport:this.destArr ||"",
              marketing_carriers:this.carrierArr ||"",
              service_class: this.serviceArr ||"",
              is_adult:this.is_adult ||"",
              is_infant:this.is_infant ||"",
              is_child:this.is_child ||"",
              is_all:this.is_all ||"",
              markup_id: group.markup_flight.markup_id ||"",
              markup_flight_id: group.markup_flight.markup_flight_id ||"",
              pax_types: group.markup_flight.pax_types ||""
            })
          }
          else {
            this.addMarkupForm.removeControl('flightsMarkup');
          }
        
         
        if(group.markup_hotel != null)
        if (saleObj['is_hotel'] && supplierObj.is_hotel) {
          this.addHotelMarkupFormGroup();
          this.addMarkupForm.controls.hotelsMarkup.patchValue({
            markup_hotel_id:group.markup_hotel.markup_hotel_id,
            markup_mode: group.markup_hotel.markup_mode,
            markup:group.markup_hotel.markup,
            min_markup:group.markup_hotel.min_markup,
            max_markup:group.markup_hotel.max_markup
          })
        }
        else {
          this.addMarkupForm.removeControl('hotelsMarkup');
        }

        if(group.markup_activity != null)
        if (saleObj['is_activities'] && supplierObj.is_activities) {
          this.addActivitiesMarkupFormGroup();
          this.addMarkupForm.controls.activitiesMarkup.patchValue({
            markup_activitie_id:group.markup_activity.markup_activitie_id,
            markup_mode:group.markup_activity.markup_mode,
            markup:group.markup_activity.markup,
            min_markup:group.markup_activity.min_markup,
            max_markup:group.markup_activity.max_markup
          })
        }
        else {
          this.addMarkupForm.removeControl('activitiesMarkup');
        }

        if(group.markup_car != null)
        if (saleObj['is_car'] && supplierObj.is_car) {
          this.addCarsMarkupFormGroup();
          this.addMarkupForm.controls.carsMarkup.patchValue({
            markup_car_id:group.markup_car.markup_car_id,
            markup_mode:group.markup_car.markup_mode,
            markup:group.markup_car.markup,
            min_markup:group.markup_car.min_markup,
            max_markup:group.markup_car.max_markup
          })
        }
        else {
          this.addMarkupForm.removeControl('carsMarkup');
        }

        if(group.markup_transfer != null)
        if (saleObj['is_transfers'] && supplierObj.is_transfers) {
          this.addTransfersMarkupFormGroup();
          this.addMarkupForm.controls.transfersMarkup.patchValue({
            markup_transfer_id:group.markup_transfer.markup_transfer_id,
            markup_mode: group.markup_transfer.markup_mode,
            markup:group.markup_transfer.markup,
            min_markup:group.markup_transfer.min_markup,
            max_markup:group.markup_transfer.max_markup
          });
        }
        else {
          this.addMarkupForm.removeControl('transfersMarkup');
        }
   
        if(group.markup_insurance != null)
        if (saleObj['is_insurance'] && supplierObj.is_insurance) {
          this.addInsuranceMarkupFormGroup();
          this.addMarkupForm.controls.insurancesMarkup.patchValue({
            markup_insurance_id:group.markup_insurance.markup_insurance_id,
            markup_mode: group.markup_insurance.markup_mode,
            markup:group.markup_insurance.markup,
            min_markup:group.markup_insurance.min_markup,
            max_markup:group.markup_insurance.max_markup
          });
        }
        else {
          this.addMarkupForm.removeControl('insurancesMarkup');
        }
         
        if(group.markup_cruise != null)
        if (saleObj['is_cruises'] && supplierObj.is_cruises) {
          this.addCruisesMarkupFormGroup();
          this.addMarkupForm.controls.cruisesMarkup.patchValue({
            markup_cruise_id:group.cruisesMarkup.markup_cruise_id,
            markup_mode: group.markup_cruise.markup_mode,
            markup:group.markup_cruise.markup,
            min_markup:group.markup_cruise.min_markup,
            max_markup:group.markup_cruise.max_markup
          });
        }
        else {
          this.addMarkupForm.removeControl('cruisesMarkup');
        }

      }
    }

    this.addMarkupForm.patchValue({
      supplier_id: group.supplier_id,
      sale_id: group.sale_id,
      title: group.title,
      is_active: group.is_active,
      priority: group.priority,
      markup_id: group.markup_id,
      markup_flight_id: (group.markup_flight != null) ? group.markup_flight.markup_flight_id : ""
    })
  }
  }

  onUpdateMarkup(data) {
    this.isSubmitted = true;

    var flightsData = {};
    var hotelsData = {};
    var activityData = {};
    var transfersData = {};
    var carsData={};
    var cruisesData={};
    var insurancesData={};
 
    if (this.addMarkupForm.controls.flightsMarkup){
      flightsData = this.addMarkupForm.controls.flightsMarkup.value;
      flightsData=this.convertFlightsData(flightsData);
    }else{
      flightsData ='';
    }

    if (this.addMarkupForm.controls.hotelsMarkup)
    hotelsData = this.addMarkupForm.controls.hotelsMarkup.value || false;

    if (this.addMarkupForm.controls.activitiesMarkup)
     activityData=this.addMarkupForm.controls.activitiesMarkup.value || false;

    if (this.addMarkupForm.controls.transfersMarkup)
    transfersData =this.addMarkupForm.controls.transfersMarkup.value|| false;

    if (this.addMarkupForm.controls.carsMarkup)
    carsData =this.addMarkupForm.controls.carsMarkup.value || false;


    if (this.addMarkupForm.controls.cruisesMarkup)
    cruisesData =this.addMarkupForm.controls.cruisesMarkup.value || false;

    if (this.addMarkupForm.controls.insurancesMarkup)
    insurancesData =this.addMarkupForm.controls.insurancesMarkup.value|| false;

    this.MarkupConfigurationService.editMarkup({
      markup: {
        supplier_id: this.addMarkupForm.controls.supplier_id.value,
        sale_id: this.addMarkupForm.controls.sale_id.value,
        title: this.addMarkupForm.controls.title.value,
        is_active: this.addMarkupForm.controls.is_active.value,
        priority: this.addMarkupForm.controls.priority.value,
        markup_id: this.addMarkupForm.value.markup_id,
        mode:"Update"
      },
      editions: {
        hotels:hotelsData,
        flights:flightsData,
        activities:activityData,
        cars:carsData,
        transfers:transfersData,
        insurances:insurancesData,
        cruises:cruisesData,
      }
    })
      .subscribe((res: any) => {
        if (res.status) {
          var markup = res.result;
          this.dataToParent.emit(data);
          this.toastr.success(`${res.message}`, `Success `, {
            timeOut: 10000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
          this.change.emit({ component: 'markup', action: 'update', markup: markup });
        }
        else {
          this.toastr.error(`${res.message}`, ` `, {
            timeOut: 10000,
            progressBar: false,

            positionClass: 'toast-bottom-right'
          })
        }
      }, err => {
        console.log('er ', err)
      });

  }
  
  getAirportDetails = () => {
    this.CommonService.getAirportsList()
      .subscribe((res: any) => {
        if (res.status) {
          this.airports = res.result;
        }
        else {
          this.toastr.error(`${res.message}`, ``, {
            timeOut: 1000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          });
        }
      })
  }
}