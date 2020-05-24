import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { InsuranceService } from './../../../shared/services/insurance-services.services';
import { CommonService } from 'src/app/shared/services/common.service';
import { JsonPipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

declare const $: any;
declare const moment: any;

@Component({
	selector: 'app-insurances',
	templateUrl: './insurances.component.html',
	styleUrls: [ './insurances.component.scss' ]
})
export class InsurancesComponent implements OnInit {
	isSearchCompleted: boolean = false;
  insurancesearchcr: any;
	insuranceList: any;
  insuranceBlock: any;
  isSubmitted:boolean=false;
	pageData: any = [];
	searchForm: FormGroup;
  countries: any[] = [];
  insuranceSearchCriteria: any;
  searchInsuranceSpinner:boolean = false;
	constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		private InsuranceService: InsuranceService,
		private fb: FormBuilder,
    private commonService: CommonService,
    private toastr: ToastrService,
	) {}

	ngOnInit() {
		this.searchForm = this.fb.group({
			country: ['',Validators.required],
			depart_country: ['',Validators.required],
			//startDate: [''],
			// endDate:[''],
			//birthDate:[''],
			startDate: ['',Validators.required],
			endDate: ['',Validators.required],
			birthDate: ['',Validators.required],
			markupvalue: [ '' ],
			markupby: [ '' ],
      adult: [ '' ],
      child:[''],
      infant:[''],
		
      Behalf: [ '' ],
      product: [''],
			plan:[''],
			benefit: [ '' ],
			currency: [ '' ],
			responseKey: [ '' ]
		});
		this.getCountries();

		//this.blockForm = this.
	}
  get gfc() { return this.searchForm.controls };
	btnSearchHandler() {
    this.isSubmitted=true;
    console.log('formmmmmmm',this.searchForm.value);
    if(this.searchForm.value.child === ""){
      this.searchForm.value.child = 0 
    }
    if(this.searchForm.value.adult === ""){
      this.searchForm.value.adult = 1 
    }
    if(this.searchForm.value.infant === ""){
      this.searchForm.value.infant = 0 
    }
    if(this.searchForm.value.plan === ""){
      this.searchForm.value.plan = "SHWALL" 
    }
    if(this.searchForm.value.product === ""){
      this.searchForm.value.product = "020107" 
    }
    
  
    
    
    if (this.searchForm.invalid) {
      this.toastr.warning(`Please fill all mandatory fields`, `Error `, {
        timeOut: 10000,
        progressBar: false,
        positionClass: 'toast-bottom-right'
      })
      return;
    }

    this.searchInsuranceSpinner = true;


		this.InsuranceService.searchInsurance(this.searchForm.value).subscribe((resp: any) => {
			if (resp.status) {
        this.isSearchCompleted = true;
     
        this.insuranceList = resp['result'].insurances;
        this.insuranceSearchCriteria = resp['result'].insurances.InsuranceSearchCriteria;
         console.log('server response....',this.insuranceList);
         console.log('insuranceSearchCriteria response....',this.insuranceSearchCriteria);
       // alert('request to server has been sent');
        // resp.result.insurances.Insurances.Insurance.map(ele => {
     
        //   ele.insuraceSearchCriteria=resp.result.insurances.InsuranceSearchCriteria;
        //   this.insuranceList = resp.result.insurances.Insurances.Insurance;
        //  // console.log("----------", resp.result.insurances.Insurances.Insurance)
        // }
        // )

        // this.router.navigateByUrl('search/insurances/insurance-list' , { state: this.insuranceSearchCriteria });
        //this.router.navigateByUrl('search/insurances/insurance-list');
			}
    });
   
	
}
  


  // insuranceSearchForm = this.fb.group({
  //   pickupDate: [''],
  //   pickUpTime: [''],
  //   dropOffDate: [''],
  //   dropOffTime: [''],
  //   dob: ['']
  // })


	getCountries() {
		this.commonService.getCountryList().subscribe((result: any) => {
			//console.log(result)
			this.countries = result.countries;
		});
	}
  ngAfterViewInit() {
    this.departureDate();
    //this.returnDate();
    this.loadDOBDate();
    this.loadConfig();
  }

  loadConfig() {
    $(document).ready(function() {
      $(".ui.dropdown").dropdown();
      $('.dropdownThree').dropdown({ placeholder: 'Select option' });
    })
  }

  // departureDate() {
  //   var scope = this;
  //   $(function () {
  //     $('input[name="startDate"]').daterangepicker({
  //       singleDatePicker: true,
  //       showDropdowns: true,
  //       autoUpdateInput: false,
  //     }, function (start, end, label) {
  //       var years = moment().diff(start, 'years');
  //       scope.searchForm.patchValue({'startDate': moment(start).format('YYYY-MM-DD')});
  //     });
  //   });
  // }

  // returnDate() {
  //   var scope = this;
  //   $(function () {
  //     $('input[name="endDate"]').daterangepicker({
  //       singleDatePicker: true,
  //       showDropdowns: true,
  //       autoUpdateInput: false,
  //     }, function (start, end, label) {
  //       var years = moment().diff(start, 'years');
  //       scope.searchForm.patchValue({'endDate': moment(start).format('YYYY-MM-DD')});
       
  //     });
  //   });
  // }
  departureDate() {

  var scope = this;
  $(function () {
    $('input[name="startDate"]').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      minDate: moment().startOf('hour'),
      startDate: moment().startOf('hour'),
      autoUpdateInput: false,
    }, function (start, end, label) {
      var years = moment().diff(start, 'years');
      scope.searchForm.patchValue({
        'startDate': moment(start).format('YYYY-MM-DD')
      });
      var inDate = new Date(scope.searchForm.controls.startDate.value);
      scope.searchForm.patchValue({ 'endDate': moment(inDate).format('YYYY-MM-DD') });
      //for checkout 
      $('input[name="endDate"]').daterangepicker({
        singleDatePicker: true,
        minDate:scope.searchForm.controls.endDate.value,
        startDate :scope.searchForm.controls.endDate.value,
        locale: { format: "YYYY-MM-DD"},
      },function(endDate, end, label) {
      scope.searchForm.patchValue({
        'endDate': moment(endDate).format('YYYY-MM-DD')
      });
     });       
    });
  });

}













  loadDOBDate() {
    var scope = this;
    $(function () {

      
      $('input[name="birthDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        autoUpdateInput: false,
       
        startDate: moment().subtract(18, 'years'),
        maxDate:moment().subtract(18, 'years')
      },
     function (start, end, label) {
        var years = moment().diff(start, 'years');
       
        scope.searchForm.patchValue({ 'birthDate': moment(start).format('YYYY-MM-DD') });
      });
    });
  }


}
