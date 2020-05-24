import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import * as data from '../permissions.json';
import { ToastrService } from 'ngx-toastr';
import { SetupConfigRoleService } from 'src/app/shared/services/setup-config/roles-config.service';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.scss']
})
export class CreateRoleComponent implements OnInit {

  allPermissions: any = (data as any).default;
  rolePermissionForm: FormGroup;
  isSubmitted: boolean = false

  constructor(private _fb: FormBuilder, private toastr: ToastrService, private roleService: SetupConfigRoleService, private router: Router) { }

  ngOnInit() {
    this.createRolePermissionForm();
  }

  btnSubmitHandler() {
    this.isSubmitted = true;
    
    if( this.rolePermissionForm.invalid ) {
      this.toasterMessage('error', 'Role Name & code is required.');
      return ;
    }

    const mapped = Object.keys(this.gfc).map(key => ({ name: key, data: this.gfc[key], endpoint: this.gfc[key].value }));
    
    let prmsn = [];
    mapped.forEach( cp => {
      const v = !!cp.data.value;
      const k = cp.name;
      
      if( k == 'name' || k == 'code' ) {}
      else {
        prmsn.push({ [k]: v });
      }
    });

    const data = {
      name: this.gfc.name.value,
      code: this.gfc.code.value,
      permissions: prmsn
    };

    this.roleService.addRole(data).subscribe( (r:any) => {
      if( r.status ) {
        this.toasterMessage('success', r.message);
        this.rolePermissionForm.reset();
        this.router.navigateByUrl('setup-configuration/roles');
      }
      else {
        this.toasterMessage('error', r.message);
      }
    });

  }

  createRolePermissionForm() {
    this.rolePermissionForm = this._fb.group({
      name: [null, Validators.required],
      code: [null, Validators.required],
    });
    this.createPermissions();
  }

  createPermissions() {
    for(let formModule of this.allPermissions) {
      for(let formModuleKey of formModule.permissions) {
        const dsKey = formModuleKey.allow[0];
        this.rolePermissionForm.addControl( dsKey, new FormControl(false) );
      }
    }
  }

  get gfc() { return this.rolePermissionForm.controls }

  toasterMessage(type='success', message) {
    if(type == 'success') {
      this.toastr.success(message, 'Success !', {
        disableTimeOut: false,
        progressBar: false,
        positionClass: 'toast-bottom-right'
      });
    }
    else if(type == 'error') {
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
