import { Component, OnInit } from '@angular/core';
import { UserRoleService } from 'src/app/shared/services/user-role.service';
import { UserRole } from "src/app/shared/models/user-role.interface";
import { CommonService } from 'src/app/shared/services/common.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ExcelService } from 'src/app/shared/services/excel.service';
declare const $: any;

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  filterForm: FormGroup;
  userLoader: boolean = false;

  constructor(private UserRoleService: UserRoleService,
    private commonService: CommonService,
    private router: Router,
    private fb: FormBuilder, private toastr: ToastrService, private excelService: ExcelService) {
    this.filterForm = this.fb.group({ organisation_id: ['all'], usernameAndAgentCode: [''] })
  }

  limit: number = 10;
  page: number = 0;
  users: Array<UserRole[]> = [];
  organizations: any = [];
  totalUsers: number = 0;
  pages: number = 0;
  toggleObj: any = {};
  filterParams: any = {
    page: this.page,
    roleType: '',
    organisation_id: '',
    usernameAndAgentCode: ''
  }

  ngOnInit() {
    this.getUsers(this.filterParams);
    this.organizationList();
  }
  // get organization list
  organizationList() {
    this.commonService.getOrganizationList().subscribe((result: any) => {
      this.organizations = result.listData.filter(data => data.name != null);
      this.organizations = this.organizations.filter(data => data.name !== "");
    });
  }
  // Hit on data filtering
  filterUserRoles() {
    let filterArg = {
      page: this.page,
      roleType: String,
      organization: String,
      keyword: String,
      awatingApp: Boolean
    }
    this.getUsers(filterArg);
  }

  // get User role list
  getUsers(searchData: any): void {
    this.userLoader = true;
    this.UserRoleService.getList(searchData).subscribe((result: any) => {

      if (result.type != 'error') {

        result.users.map(user => {
          if (user.admin) {
            user.role = 'Admin';
          } else if (user.agent) {
            user.role = 'Agent';
          } else if (user.corporate) {
            user.role = 'Corporate';
          }
          user.name = user.first_name + ' ' + user.last_name;

        });
        this.userLoader = false;
        this.users = result.users;
        this.totalUsers = result.totalUsers;
        this.page = result.page;
      }
      else {
        Swal.fire('Oops!', `There was an error performing the request. please try again.`, 'error')
      }
    })
  }

  resetFilter(form: FormGroup) {
    // filter results by organization

  }

  filterFormSubmit() {
    this.filterParams.page = 0;
    this.filterParams.organisation_id = this.filterForm.value.organisation_id;
    const usernameAndAgentCode = this.filterForm.value.usernameAndAgentCode.trim();
    this.filterParams.usernameAndAgentCode = usernameAndAgentCode;
    this.getUsers(this.filterParams);
  }

  editUser(valObj: any) {
    this.router.navigate(['user-role-management/edit-user/' + valObj.users_id])
  }

  viewUser(valObj: any) {
    this.router.navigate(['user-role-management/view-user/' + valObj.users_id]);
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

        // delete record api
        this.UserRoleService.deleteUser(valObj.users_id).subscribe((result: any) => {
          if (result.type == 'error') {
            Swal.fire(
              'Oops!',
              `${result.msg}`,
              'error'
            )
          } else {

            // delete this.users[valObj.users_id];
            // console.log(this.users[valObj.users_id])

            this.users.filter(function (user, i, users) {

              if (parseInt(user['users_id']) === parseInt(valObj.users_id)) {
                users.splice(i, 1);
              }
              
            });

            Swal.fire(
              'Deleted!',
              `${result.msg}`,
              'success'
            )
          }
        })

        this.getUsers(this.filterParams);
      }
    })
  }

  pageCallback(event: any) {
    let offset = event.offset;
    this.filterParams.page = offset;
    this.getUsers(this.filterParams);
  }

  exportData() {
    this.UserRoleService.exportUser(this.filterForm.value).subscribe((result: any) => {
      if (result.type != 'error') {
        let exportResult = result.data;
        this.excelService.exportAsExcelFile(exportResult, 'business_users');
      } else {
        this.toastr.error(`${result.msg}`, `${result.msg}`, {
          timeOut: 10000,
          progressBar: false,
          positionClass: 'toast-bottom-right'
        });
      }
    });
  }

  filterFormReset() {
    this.filterForm.patchValue({
      usernameAndAgentCode: '',
      organisation_id: 'all'
    })
    $('.ui.dropdown').dropdown();
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $('.menu .item').tab();
      $('.ui.checkbox').checkbox();
      $('.ui.dropdown').dropdown();

    });
  }


  statusToggle(data: any) {
    this.toggleObj.id = data.users_id;
    this.toggleObj.status = data.is_active;
    this.toggleObj.table = "users";
    this.UserRoleService.onStatusToggle(this.toggleObj)
      .subscribe((res: any) => {
        if (res.status == 200) {

          this.getUsers(this.filterParams);
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
}

