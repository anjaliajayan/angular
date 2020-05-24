import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { Router } from '@angular/router';

import { UserService } from '../../shared/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { UserRole } from 'src/app/shared/models/user-role.interface';
import Swal from 'sweetalert2';
import { CommonService } from 'src/app/shared/services/common.service';
declare const $: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  searchUserForm: FormGroup;
  formIsSubmitted: boolean = false;

  users: any = [];
  totalCount: number = 0;
  pages: number = 0;
  offset: number = 0;
  offsetEvent = {
    page: this.offset
  }
  pageUser: number = 0;
  userPage = 0;
  userConfigForm: any = {
    page: this.pageUser
  }
  toggleObj: any = {};
  totalListOfUsers: number = 0;
  usersList: Array<UserRole[]> = [];
  organizations: any = [];
  constructor(private router: Router, private _fb: FormBuilder, 
    private userService: UserService, private toastr: ToastrService,
    private commonService: CommonService) { }

  ngOnInit() {

    this.createSearchUserForm();
    this.fetchAllsUsers();
    this.organizationList();
  }
  ngAfterViewInit() {
    $(document).ready(function () {
      $('.ui.dropdown').dropdown();
      $('.dropdown2').dropdown({ placeholder: 'Choose Organisation'});
    });
  }

  fetchAllsUsers() {
    this.userService.GetAllUsers(this.userConfigForm)
      .subscribe((res: any) => {
        if (res.status) {
          this.totalListOfUsers = res.result.total;
          this.userPage = res.result.page;
          this.usersList = res.result.data;
        }
        else {
          this.toastr.error(`${res.msg}`, `${res.msg}`, {
            timeOut: 1000,
            progressBar: false,

            positionClass: 'toast-bottom-right'
          })
        }
      });
  }
  organizationList() {
    this.commonService.getOrganizationList().subscribe((result: any) => {
      this.organizations = result.listData.filter(data => data.name != null); 
      this.organizations = this.organizations.filter(data => data.name !== "");  
   
    });
  }

  searchFormSubmit() {
    this.formIsSubmitted = true;
console.log("searchUserForm::::::::::",this.searchUserForm.value)
// this.filterParams.page = 0;
// this.filterParams.organisation_id = this.filterForm.value.organisation_id;
// const usernameAndAgentCode = this.filterForm.value.usernameAndAgentCode.trim();
// this.filterParams.usernameAndAgentCode = usernameAndAgentCode;
// this.getUsers(this.filterParams);
    // if( !this.searchUserForm.valid ) {
    //   return ;
    // }

    // const data = {
    //   search: this.gfc.corporate_type.value,
    //   name: this.gfc.nameAndOfficeId.value,
    // }
    // this.formIsSubmitted = false;
    // return ;
  }

  addNewUser() {
    return this.router.navigateByUrl('users/new');
  }

  createSearchUserForm() {
    this.searchUserForm = this._fb.group({
      corporate_type: ['all'],
      nameAndOfficeId: ['']
    })
  }

  get gfc() { return this.searchUserForm.controls };

  statusToggle(data: any) {
    this.toggleObj.id = data.users_id;
    this.toggleObj.status = data.is_active;
    this.toggleObj.table = "users";
    this.userService.onStatusToggle(this.toggleObj)
      .subscribe((res: any) => {
        if (res.status == 200) {

          this.fetchAllsUsers();
        }
        else {
          this.toastr.error(`${res.msg}`, `${res.msg}`, {
            timeOut: 1000,
            progressBar: false,
            positionClass: 'toast-bottom-right'
          })
        }
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
        this.userService.deleteUser(valObj.users_id).subscribe((result: any) => {
          if (result.type == 'error') {
            this.toastr.error(`${result.msg}`, ``, {
              timeOut: 1000,
              progressBar: false,

              positionClass: 'toast-bottom-right'
            });
          } else {
            this.toastr.success(`${result.msg}`, ``, {
              timeOut: 1000,
              progressBar: false,

              positionClass: 'toast-bottom-right'
            });
            this.fetchAllsUsers();
          }
        })
      }
    })
  }

  

  pageCallback(event: any) {
    let offset = event.offset;
    this.userConfigForm.page = offset;
    this.fetchAllsUsers();
  }


}
