import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {SetupConfigService} from 'src/app/shared/services/setup-config/setup-config.service';
import {POSService} from 'src/app/shared/services/pointsale.service';
import {PointOfSale} from 'src/app/shared/models/point-of-sale.interface'
// import Swal from 'sweetalert2';
import {ToastrService} from 'ngx-toastr';
import {environment} from './../../../../../../environments/environment';

import {FormBuilder, FormGroup, Validators} from '@angular/forms';


declare const moment: any;
declare const $: any;

@Component({
  selector: 'app-add-group',
  templateUrl: './addgroup.component.html',
  styleUrls: ['./addgroup.component.scss']
})
export class AddGroupComponent implements OnInit {

  allPos: string[] = [];
  addGroupForm: FormGroup;
  isSubmitted = false;
  is_active: string;
  preference: string;
  saleType: string;
  orgArr = [];
  freeSale:number;
  stopSale:number;
  showSaveButton: boolean;
  showUpdateButton: boolean;
  _globals: any;
  @Output() sendDataToParent = new EventEmitter<string>();
  @Input('change') editRow: any;
  @Input('flag') flagDet: any;
  @Input('flgEdit') flgEditDet: any;

  constructor(
    public MarkupConfigurationService: SetupConfigService,
    public posService: POSService,
    private _formBuilder: FormBuilder,
    private toastr: ToastrService
  ) {
    this.initGroupForm();
  }

  ngOnInit() {

    this.fetchAllPOS({limit: 1500, page: 0});
    this.onEditRow(this.editRow);
    if (this.flagDet == true && this.flgEditDet == false) {
      this.showSaveButton = true;
      this.showUpdateButton = false;
      this.addGroupForm.reset();
    } else {
      this.showUpdateButton = true;
      this.showSaveButton = false;
    }
  }

  initGroupForm() {

    this.addGroupForm = this._formBuilder.group({
      name: ['', Validators.required],
      organisation_id: [[], Validators.required],
      is_active: ['', Validators.required],
      preference: ['', Validators.required],
      start_date: [''],
      end_date: [''],
      is_stop_sale: [''],
      is_free_sale: [''],
      sale_type: [''],
      is_flight: [false],
      is_hotel: [false],
      is_car: [false],
      is_transfers: [false],
      is_activities: [false],
      is_insurance: [false],
      is_cruises: [false],
      sale_id: [''],
      mode: ['']
    });
  }

  addGroup(event: any) {
    this.isSubmitted = true;
    this.addGroupForm.patchValue({
      name: this.addGroupForm.value.name,
      organisation_id: this.addGroupForm.value.organisation_id,
      is_active: this.addGroupForm.value.is_active,
      preference: this.addGroupForm.value.preference,
      start_date: this.addGroupForm.value.start_date ? this.addGroupForm.value.start_date : '',
      end_date: this.addGroupForm.value.end_date ? this.addGroupForm.value.end_date : '',
      is_stop_sale: this.addGroupForm.value.is_stop_sale ? this.addGroupForm.value.is_stop_sale : '',
      is_free_sale: this.addGroupForm.value.is_free_sale ? this.addGroupForm.value.is_free_sale : '',
      // sale_type:this.addGroupForm.value.sale_type?this.addGroupForm.value.sale_type:"",
      is_flight: this.addGroupForm.value.is_flight ? this.addGroupForm.value.is_flight : false,
      is_hotel: this.addGroupForm.value.is_hotel ? this.addGroupForm.value.is_hotel : false,
      is_car: this.addGroupForm.value.end_date ? this.addGroupForm.value.is_car : false,
      is_transfers: this.addGroupForm.value.is_transfers ? this.addGroupForm.value.is_transfers : false,
      is_activities: this.addGroupForm.value.is_activities ? this.addGroupForm.value.is_activities : false,
      is_insurance: this.addGroupForm.value.is_insurance ? this.addGroupForm.value.is_insurance : false,
      is_cruises: this.addGroupForm.value.is_cruises ? this.addGroupForm.value.is_cruises : false,
      // sale_id:this.addGroupForm.value.sale_id?this.addGroupForm.value.sale_id:"",
      mode: 'Add',
    })
    var formParams = Object.assign({}, this.addGroupForm.value);

    if (formParams.sale_type == 'freesale') {
      formParams.is_stop_sale = false;
      formParams.is_free_sale = true
    } else {
      formParams.is_stop_sale = true;
      formParams.is_free_sale = false
    }

    this.MarkupConfigurationService.AddGroup(formParams)
      .subscribe((res: any) => {
        if (res.status == true) {
          var group = res.Sale;
          this.sendDataToParent.emit(event);
          this.toastr.success(`Group added successfully`, ` `, {
            timeOut: 10000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          })
        } else {
          if ((formParams.name || formParams.organisation_id || formParams.is_active || formParams.preference) === null) {
            this.toastr.error(`Fill the mandatory fields`, `Error `, {
              timeOut: 10000,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            })
          } else {
            this.toastr.error(`Something bad happened at our end.`, `Error `, {
              timeOut: 10000,
              progressBar: false,
              positionClass: 'toast-bottom-right'
            })
          }
        }
      }, err => {
        console.log('erer ', err)
        this.toastr.success(`Something bad happened at our end. ${err}`, `Error `, {
          timeOut: 10000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        })
      });
  }

  fetchAllPOS(data) {

    this.posService.fetchAllPointofSale(data)
      .subscribe((res: any) => {
        if (res.status) {
          this.allPos = res.Organization;
        }
      }, err => {
        console.log('erer ', err)
      });
  }

  resetAddGroupForm() {
    // this.addGroupForm.patchValue({
    //   name: '',
    //   organisation_id: [],
    //   is_active: '',
    //   preference: '',
    //   start_date: moment(),
    //   end_date: moment(),
    //   sale_type: 'stopsale',
    //   is_flight: true,
    //   is_hotel: false,
    //   is_car: false,
    //   is_transfers: false,
    //   is_activities: false,
    //   is_insurance: false,
    //   is_cruises: false
    // })
    // this.ngAfterViewInit();
  }

  ngAfterViewInit() {
    let THIS = this;
    THIS.makeJqueryFields()
    var scope = this;
    this.loadStartDate();
    this.loadEndDate();
  }

  loadStartDate() {
    var scope = this;
    $(function () {
      $('input[name="start_date"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1980,
        startDate: moment().subtract(90, 'day'),
        autoUpdateInput: false,
        maxYear: parseInt(moment().format('YYYY'), 10)
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.addGroupForm.get('start_date').setValue(moment(start).format('YYYY-MM-DD'));
      });
    });
  }

  loadEndDate() {
    var scope = this;
    $(function () {
      $('input[name="end_date"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment(),
        minDate: moment(),
        autoUpdateInput: false,
        maxYear: parseInt(moment().format('YYYY'), 10)
      }, function (start, end, label) {
        var years = moment().diff(start, 'years');
        scope.addGroupForm.get('end_date').setValue(moment(start).format('YYYY-MM-DD'));
      });
    });
  }

  onEditRow(group) {

    let endDate;
    let startDate;
    let is_flight: boolean;
    if (group.is_active != 0) {
      this.is_active = '1';
    } else {
      this.is_active = '0';
    }

    if (group.preference != null) {
      this.preference = group.preference;
    }

    if (group.organisation_id != null) {
      let txt = group.organisation_id;
      txt = txt.split(',');
      txt.forEach(element => {
        this.orgArr.push(element);
      });
    }

    if ((group.is_free_sale == 0) && (group.is_stop_sale == 1)) {
      this.saleType = 'stopsale';
      if (group.end_date != null || group.end_date != '') {
        endDate = group.end_date;
        endDate = endDate.split('T');
        endDate = endDate[0];
      }

      if (group.start_date != null || group.start_date != '') {
        startDate = group.start_date;
        startDate = startDate.split('T');
        startDate = startDate[0];
      }
    }

    if ((group.is_free_sale == 1) && (group.is_stop_sale == 0)) {
      this.saleType = 'freesale';
      endDate = '';
      startDate = '';
    }

    const uniqueOrgArr = new Set(this.orgArr);
    console.log("this.orgArr?????????",this.orgArr)
    this.addGroupForm.patchValue({
      name: group.name,
      organisation_id:this.orgArr,
      is_active: this.is_active,
      preference: this.preference,
      start_date: startDate,
      end_date: endDate,
      is_stop_sale: this.stopSale,
      is_free_sale: this.freeSale,
      is_flight: group.is_flight == 0 ? false : true,
      is_hotel: group.is_hotel == 0 ? false : true,
      is_car: group.is_car == 0 ? false : true,
      is_transfers: group.is_transfers == 0 ? false : true,
      is_activities: group.is_activities == 0 ? false : true,
      is_insurance: group.is_insurance == 0 ? false : true,
      is_cruises: group.is_cruises == 0 ? false : true,
      sale_type: this.saleType,
      sale_id: group.sale_id,
      mode: 'Update'
    })
    // this.makeJqueryFields();

  }

  onUpdateGroup(data) {

    var formParams = Object.assign({}, this.addGroupForm.value);

    if (formParams.sale_type == 'freesale') {
      formParams.is_stop_sale = false;
      formParams.is_free_sale = true
    } else {
      formParams.is_stop_sale = true;
      formParams.is_free_sale = false
    }

    this.MarkupConfigurationService.editGroup(formParams)
      .subscribe((res: any) => {
        if (res.status) {
          this.sendDataToParent.emit(data);
          this.toastr.success(`Group Updated Successfully`, ` `, {
            timeOut: 10000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          })
        } else {
          this.toastr.error(`Something bad happened at our end.`, `Error `, {
            timeOut: 10000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          })
        }
      }, err => {
        console.log('erer ', err)
        this.toastr.success(`Something bad happened at our end. ${err}`, `Error `, {
          timeOut: 10000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        })
      });
  }

  resetForm() {
    this.addGroupForm.reset();
  }

  makeJqueryFields() {
    $('.dropdownThree').dropdown('refresh');
    $('.dropdownThree').dropdown({placeholder: 'Select POS'});

    // $(document).ready(function () {
    //   this._globals = localStorage.getItem('_globals');
    //   let token = JSON.parse(this._globals).token;

   

    //   $('.dropdownThree').dropdown({
    //     type: 'category',
    //     minCharacters : 2,
    //     maxCharacters : 3,
    //     responseAsync: true,
    //     apiSettings: {
         
    //       url: environment.serverURL + '/api/pos/get-pos/{query}',
    //       beforeXHR: function (xhr) {
    //         xhr.setRequestHeader('Authorization', token);
    //         return xhr;
    //       },
    //       onResponse: function (response) {
    
    //         const result = { success: true, results: [] };
    //         $.each(response.result, function (index, item) {
    //           result['results'].push
    //           ({
    //             name: item.name,
    //             value: item.organisation_id
    //           })
    //         });
    //         return result;
    //       },
    //     },
    //   })
    // });
  }
}
