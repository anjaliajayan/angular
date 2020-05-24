import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonService } from 'src/app/shared/services/common.service';
import { PosService } from 'src/app/shared/services/pos-service/pos-service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from './../../../../environments/environment';

declare const moment: any;
declare const $: any;
@Component({
  selector: 'app-pos-basic-edit',
  templateUrl: './pos-basic-edit.component.html',
  styleUrls: ['./pos-basic-edit.component.scss']
})
export class PosBasicEditComponent implements OnInit {

  posBasicInfoForm: FormGroup;
  countries: string[] = [];
  currencies: string[] = [];
  timezones: string[] = [];
  airports: string[] = [];
  isSubmitted: boolean = false;
  posInfo: any = {};
  organisation_ID: any;
  isChecked: boolean = false;
  nego = {}
  destAirport = [];

  constructor(
    private fb: FormBuilder,
    private commonService: CommonService,
    private posService: PosService,
    private toastr: ToastrService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.organisation_ID = this.activeRoute.snapshot.params.id;
    this.getOrganisationInfo(this.organisation_ID);

    this.initInfoForm();
    this.getCountries();
    this.getCurrencies();
    this.getTimeZones();
    this.getAirportDetails();


  }
  initInfoForm() {
    this.posBasicInfoForm = this.fb.group({
      organisation_id: [''],
      corporate_type: ['', Validators.required],
      domain_url: ['', Validators.required],
      name: ['', Validators.required],
      country_id: ['', Validators.required],
      timezone_id: ['', Validators.required],
      payment_gateway: ['', Validators.required],
      currency_id: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      agent_code: ['', [Validators.pattern('[0-9]*')]],
      associated_office: [''],
      contact: [''],
      credit_limit: [''],
      business_id: [''],
      numberOfUsers: ['', [Validators.required, Validators.pattern('[0-9]*')]],
      iata_no: [''],
      domestictTaxCode: [''],
      domestictTaxPercentage: [''],
      domestictTaxCurrency: [''],
      domestictTaxAirport: [[]],
      amexCard: [false, []],
      queue: [false, []],
      internationalTaxPercentage: [''],
      nonAirlineTax: [''],
      tab: ['basic'],

      pos_negofares: this.fb.group({
        tourOperatorDeffered: [],
        bulkContract: [],
        marine: [],
        tourOperatorSemiDeffered: [],
        humanitarian: [],
        publishedOnly: [],
        privateOnly: [],
        publishedAndPrivate: [''],
        all: []

      }),


      contact_person_name: [''],
      contact_mobile_number: ['', Validators.pattern('[0-9]*')],
      contact_person_email: ['', Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
      address_1: [''],
      address_2: [''],
      city_id: [''],
      state_province: [''],
      zip: ['', Validators.pattern('[0-9]*')],
      contact_country_id: [''],
      active_suppliers: ['']

    })

    this.posBasicInfoForm.get('corporate_type').valueChanges.subscribe(val => {

      if (val == 'Agent') {
        this.setFormAsAgent();
      }
      if (val == 'B2C') {
        this.setFormAsB2C();
      }
      if (val == 'API') {
        this.setFormAsApiOut();
      }
      if (val == 'Mobile') {
        this.setFormAsMobile();
      }

    });


    this.posBasicInfoForm.get('amexCard').valueChanges.subscribe(val => {
      if (val && val == true) {
        this.posBasicInfoForm.addControl('amex_card', this.fb.group({
          cardHolderName: [null, Validators.required],
          cardHolderType: [null, Validators.required],
          cardnumber: [null, Validators.required],
          cardExpMonth: [null, Validators.required],
          cardExpYear: [null, Validators.required],
          cardcvv: [null, Validators.required]
        }))
        this.ngAfterViewInit();
      }
      else {
        this.posBasicInfoForm.removeControl('amex_card')
      }
    });

    this.posBasicInfoForm.get('queue').valueChanges.subscribe(val => {
      if (val && val == true) {
        this.posBasicInfoForm.addControl('queue_service', this.fb.group({
          queue1: [null],
          queue2: [null],
          queue3: [null]
        }))
        this.ngAfterViewInit();
      }
      else {
        this.posBasicInfoForm.removeControl('queue_service')
      }
    });
  }

  setFormAsAgent() {
    this.posBasicInfoForm.addControl('credit_limit', this.fb.control(''));
    this.posBasicInfoForm.addControl('numberOfUsers', this.fb.control(''));
    this.posBasicInfoForm.removeControl('domain_url');
  }

  setFormAsB2C() {
    this.posBasicInfoForm.addControl('domain_url', this.fb.control(''));
    this.posBasicInfoForm.removeControl('credit_limit');
    this.posBasicInfoForm.removeControl('numberOfUsers');
  }

  setFormAsMobile() {
    this.posBasicInfoForm.removeControl('credit_limit');
    this.posBasicInfoForm.removeControl('numberOfUsers');
    this.posBasicInfoForm.removeControl('domain_url');
  }

  setFormAsApiOut() {
    this.posBasicInfoForm.addControl('credit_limit', this.fb.control(''));
    this.posBasicInfoForm.addControl('numberOfUsers', this.fb.control(''));
    this.posBasicInfoForm.removeControl('domain_url');
  }

  ngAfterViewInit() {
    $('.ui.dropdown').dropdown();
    $('.ui.dropdownThree').dropdown('refresh');
    // $(document).ready(function () {
    //   $('.ui.dropdown').dropdown();

    //   $('.ui.checkbox').checkbox();
    //   $('.ui.dropdownThree').dropdown();
    //   $(document).ready(function () {
    //     this._globals = localStorage.getItem('_globals');
    //     let token = JSON.parse(this._globals).token;

    //     $('.dropdownThree').dropdown({
    //       type: 'category',
    //       minCharacters: 2,
    //       maxCharacters: 3,
    //       responseAsync: true,
    //       apiSettings: {
    //         url: environment.serverURL + '/api/get-airports-cache/{query}',
    //         beforeXHR: function (xhr) {
    //           xhr.setRequestHeader('Authorization', token);
    //           return xhr;
    //         },
    //         onResponse: function (response) {
    //           const result = { success: true, results: [] };
    //           $.each(response.result, function (index, item) {
    //             result['results'].push({
    //               name: item.AirportCode,
    //               value: item.AirportCode
    //             })
    //           });
    //           console.log("res:::::",result)
    //           return result;
    //         },
    //       },
    //     });

    //   });

    // })
  }

  getCountries() {
    this.commonService.getCountryList().subscribe((result: any) => {
      this.countries = result.countries;
    });
  }

  getCurrencies() {
    this.commonService.getCurrencyList().subscribe((result: any) => {
      this.currencies = result.currencies;
    })
  }

  getTimeZones() {
    this.commonService.getTimeZones().subscribe((result: any) => {
      this.timezones = result.timeZones;
    });
  }

  getAirportDetails = () => {
    this.commonService.getAirportsList()
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

  get gfc() { return this.posBasicInfoForm.controls };

  getOrganisationInfo(organisation_ID: number) {

    this.posService.getPosDetails(organisation_ID).subscribe((result: any) => {
      if (result.status) {
        this.posInfo = result.result;
        if (this.posInfo.corporate_type && this.posInfo.corporate_type != null && this.posInfo.corporate_type != '')
          // this.disableCorporateChange = true;
          if (this.posInfo.corporate_type == 'Agent')
            this.setFormAsAgent();
        if (this.posInfo.corporate_type == 'B2C')
          this.setFormAsB2C();
        if (this.posInfo.corporate_type == 'API')
          this.setFormAsApiOut();
        if (this.posInfo.corporate_type == 'Mobile')
          this.setFormAsMobile();
        if (this.posInfo.queue_service) {
          this.posBasicInfoForm.patchValue({
            queue: true
          })
        }
        if (this.posInfo.amex_card) {
          this.posBasicInfoForm.patchValue({
            amexCard: true
          })
        }


        let numberOfUsers = this.posInfo.numberOfUsers;
        this.posBasicInfoForm.patchValue({

          organisation_id: this.posInfo.organisation_id,
          agent_code: this.posInfo.agent_code,
          corporate_type: this.posInfo.corporate_type,
          domain_url: this.posInfo.domain_url,
          name: this.posInfo.name,
          associated_office: this.posInfo.associated_office,
          email: this.posInfo.email,
          contact: this.posInfo.contact,
          payment_gateway: this.posInfo.payment_gateway,
          currency_id: this.posInfo.currency_id,
          credit_limit: this.posInfo.credit_limit,
          country_id: this.posInfo.country_id,
          timezone_id: this.posInfo.timezone_id,
          business_id: this.posInfo.business_id,
          numberOfUsers: numberOfUsers,
          iata_no: this.posInfo.iata_no,
          domestictTaxCode: this.posInfo.domestictTaxCode,
          domestictTaxPercentage: this.posInfo.domestictTaxPercentage,
          domestictTaxCurrency: this.posInfo.domestictTaxCurrency,
          domestictTaxAirport:JSON.parse(this.posInfo.domestictTaxAirport),
          internationalTaxPercentage: this.posInfo.internationalTaxPercentage,
          nonAirlineTax: this.posInfo.nonAirlineTax,

          queues: this.posInfo.queue_service ? JSON.parse(this.posInfo.queue_service) : {},
          amexCardDetails: this.posInfo.amex_card ? JSON.parse(this.posInfo.amex_card) : {},
          pos_negofares: this.posInfo.pos_negofares ? JSON.parse(this.posInfo.pos_negofares) : {},
          terms_conditions: this.posInfo.terms_conditions,


          address_1: this.posInfo.address_1 != null ? this.posInfo.address_1 :'',
          address_2: this.posInfo.address_2 != null ?  this.posInfo.address_2 :'',
          city_id: this.posInfo.city_id != null ? this.posInfo.city_id :'',
          state_province: this.posInfo.state_province != null ? this.posInfo.state_province :'',
          zip: this.posInfo.zip != null ? this.posInfo.zip :'',
          contact_country_id: this.posInfo.contact_country_id != null ? this.posInfo.contact_country_id :'',
          active_suppliers: this.posInfo.active_suppliers != "null" ? JSON.parse(this.posInfo.active_suppliers) :''
 

        })
        this.ngAfterViewInit();
      }
    });
  }

  updatePosBasicInfo() {

    this.posBasicInfoForm.patchValue({
      organisation_id: this.posInfo.organisation_id
    });

    this.posService.updatePosDetails(this.posBasicInfoForm.value).subscribe((result: any) => {
      if (result.status) {
        this.toastr.success(`${result.message}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-top-right'
        });
        this.router.navigate(['/pos/pos-read/']);
      }
      else {
        this.toastr.error(`${result.message}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-top-right'
        });
      }
    });
  }

  checkAllnego() {
    this.isChecked = !this.isChecked;
    if (this.isChecked == true) {
      this.nego = {
        "tourOperatorDeffered": true, "bulkContract": true, "marine": true,
        "tourOperatorSemiDeffered": true, "publishedAndPrivate": true, "humanitarian": true,
        "publishedOnly": true, "privateOnly": true
      }
      this.posBasicInfoForm.patchValue({
        pos_negofares: this.nego
      })
    } else {
      this.nego = {
        "tourOperatorDeffered": false, "bulkContract": false, "marine": false,
        "tourOperatorSemiDeffered": false, "publishedAndPrivate": false, "humanitarian": false,
        "publishedOnly": false, "privateOnly": false
      }
      this.posBasicInfoForm.patchValue({
        pos_negofares: this.nego
      })
    }

  }
}
