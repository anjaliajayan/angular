import { Component, OnInit } from '@angular/core';

import Swal from "sweetalert2";
import { ToastrService } from 'ngx-toastr';
import { SetupConfigRoleService } from 'src/app/shared/services/setup-config/roles-config.service';


@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {

  roles: [];
  loading: boolean = false;

  constructor(private roleService: SetupConfigRoleService, private toastr: ToastrService) { }

  ngOnInit() {
    this.fetchRoles();
  }

  fetchRoles() {
    this.loading = true;
    this.roleService.getRoles().subscribe((res: any) => {
      this.roles = res.data;

    }, (err: any) => {
      this.toasterMessage('error', err)
    });
  }

  delete(role) {
    

    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {

        this.roleService.deleteRole(role).subscribe((r: any) => {
          
          if( r.status ) {
            this.roles.filter(function (value, index, arr) {
              if (role === value['role_id']) {
                arr.splice(index, 1);
              }
            });
            this.toasterMessage('success', 'Role deleted successfully')
          }
          else {
            this.toasterMessage('error', r.msg)
          }

        }, (err: any) => {
          this.toasterMessage('error', err)
        });

      }
    })

  }


  toasterMessage(type = 'success', message) {
    if (type == 'success') {
      this.toastr.success(message, 'Success !', {
        disableTimeOut: false,
        progressBar: false,
        positionClass: 'toast-bottom-right'
      });
    }
    else if (type == 'error') {
      this.toastr.error(message, 'Server Error !', {
        disableTimeOut: false,
        progressBar: false,
        positionClass: 'toast-bottom-right'
      });
    }
    else {
      this.toastr.info(message, 'Information !', {
        disableTimeOut: false,
        progressBar: false,
        positionClass: 'toast-bottom-right'
      });
    }

  }
}
