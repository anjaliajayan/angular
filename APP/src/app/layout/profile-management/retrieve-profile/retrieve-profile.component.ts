import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { ProfileManagementService } from './../../../shared/services/profile-management/profile-management.service';
import { NewTravellerProfile } from './../../../shared/models/profile-management/new-traveller-profile';
import { NewCompanyProfile } from 'src/app/shared/models/profile-management/new-company-profile';
import { NewAgencyProfile } from 'src/app/shared/models/profile-management/new-agency-profile';
import { NewGroupProfile } from 'src/app/shared/models/profile-management/new-group-profile';

import { ToastrService } from 'ngx-toastr';

import Swal from 'sweetalert2';
import { Router, NavigationExtras } from '@angular/router'
import { element } from 'protractor';
import { FormGroup, FormBuilder } from '@angular/forms';
declare const $: any;

@Component({
  selector: 'app-retrieve-profile',
  templateUrl: './retrieve-profile.component.html',
  styleUrls: ['./retrieve-profile.component.scss']
})
export class RetrieveProfileComponent implements OnInit {

  // @ViewChild('sampleT', { static: true }) public sampleT: TemplateRef<any>;
  // @ViewChild('sampleT1', { static: true }) public sampleT1: TemplateRef<any>;
  // rows = [];

  // columns = [
  //   {
  //     prop: 'name',
  //     cellTemplate: this.sampleT
  //   },
  //   { name: 'Gender' },
  //   { name: 'Company' }
  // ];
  filterForm: FormGroup;
  createdDate:any;
  limit: number = 15;
  pageIndex: number = 1;
  NewTravellerProfile : Array<NewTravellerProfile[]> = [];
  NewCompanyProfile: Array<NewCompanyProfile[]> = [];
  NewGroupProfile: Array<NewGroupProfile[]> = [];
  NewAgencyProfile: Array<NewAgencyProfile[]> = [];


  //data for airline_details ngx table
  airlineData ; 

  filterParams: any = {
    limit: 1500,
    page: 0,
    filter_type: 'all',
    search_request: ''
  }
  
  totalTravellerProfile: number = 0;
  totalCompanyProfile: number = 0;
  totalGroupProfile: number = 0;
  totalAgencyProfile: number = 0;

  pages: number = 0;

  constructor(
    public ProfileManagementService: ProfileManagementService,
    private router: Router,
    private toastr: ToastrService,
    private fb: FormBuilder
  ) { this.filterForm = this.fb.group({ filter_type: ['all'], search_request: [''] })}


  filterFormSubmit() {
    
    this.filterParams.filter_type = this.filterForm.value.filter_type;
    this.filterParams.keywords = this.filterForm.value.search_request;
    this.getList(this.filterParams);
  }


  getList(filterParams: any) {

    this.ProfileManagementService.profileSearch(filterParams).subscribe((result: any) => {
      const response = result.traveller.data;
      response.forEach(data => {
        const airlineDetails = data.airline_details;
        this.airlineData = airlineDetails;
      });
      this.NewTravellerProfile = result.traveller.data;
      this.totalTravellerProfile = result.total;
     
    })
  }
  
  resetFilter() {
    
    this.filterForm.reset({})
    this.filterParams.keywords="";
    this.getList(this.filterParams);
  }
  viewCourseTrainings(valObj: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: valObj
    }
   
    this.router.navigate(['/profile-management/create-new-profile/'+ valObj.id]);
   
  }


  viewBookingPage(valObj) {
 
    let navigationExtras: NavigationExtras = {
      queryParams: valObj
    }

    this.router.navigate(['/search/flights/'+ valObj.id]);
   
   
  }


  // fetchAllTravellerProfile(limit?, pageIndex?) {
  //   this.ProfileManagementService.GetAllTraveller(0, limit, pageIndex)
  //     .subscribe((res: any) => {
  //       if (res.status == 200) {
  //         this.totalTravellerProfile = res.traveller;
  //         this.pages = this.totalTravellerProfile / this.limit;
  //         this.NewTravellerProfile = res.traveller;
  //         this.NewTravellerProfile.map((element,key)=>{
       
  //         })
  //         console.log("Check this data totalTravellerProfile", this.NewTravellerProfile);   
  //       }
  //     }, err => {
  //       Swal.fire('Oops', `Something bad happened at our end. ${err}`, 'error');
  //     });
  // }

  Delete(valObj: any) {

    // alert(valObj.traveller_profile_id);
    this.ProfileManagementService.DeleteTravellerById(valObj.traveller_profile_id).subscribe((res: any) => {
      if (res.status == 200) {
        console.log("This is the response" + JSON.stringify(res));
      }
    }, err => {
      Swal.fire('Oops', `Something bad happened at our end. ${err}`, 'error');
    });
  }


  deleteUser(valObj: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
      console.log(valObj.id)
        // delete record api
        this.ProfileManagementService.DeleteTravellerById({id:valObj.id}).subscribe((result: any) => {
          if (result.status == false) {
            this.toastr.error(`${result.msg}`, ``, {
              timeOut: 10000,
              progressBar: false,
              positionClass: 'toast-top-right'
            });
          } else {
            this.toastr.success(`${result.msg}`, ``, {
              timeOut: 10000,
              progressBar: false,
              positionClass: 'toast-top-right'
            });
            this.getList(this.filterParams);
          }
        })

      }
    })

  }
  

  ngOnInit() {
    this.getList(this.filterParams);
   
  }

  ngAfterViewInit() {
    $('.menu .item').tab();
    $('.ui.dropdown').dropdown();
  }
  test = [];
     addressData = [];
  

 
}
