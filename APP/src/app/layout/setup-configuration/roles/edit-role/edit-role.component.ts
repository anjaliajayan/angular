import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import * as data from '../permissions.json';
import { ToastrService } from 'ngx-toastr';
import { SetupConfigRoleService } from 'src/app/shared/services/setup-config/roles-config.service';

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss']
})
export class EditRoleComponent implements OnInit {

  allPermissions: any = (data as any).default;
  rolePermissionForm: FormGroup;
  isSubmitted: boolean = false;
  selectedRoleId: number = null;
  selectedRole: any = null;

  constructor(private _fb: FormBuilder, private toastr: ToastrService, private roleService: SetupConfigRoleService, private router: Router, private activatedRole: ActivatedRoute) { }

  ngOnInit() {
    this.createRolePermissionForm(null, null, null);

    this.selectedRoleId = this.activatedRole.snapshot.params.id;
    this.roleService.getRole(this.selectedRoleId).subscribe( (r:any) => {
      if(r.status) {
        this.selectedRole = r.data
        this.createRolePermissionForm(r.data.code, r.data.name, r.data.permissions);
      }
      else {
      this.toasterMessage('error', 'Role Name & code is required.');  
      }
      
    });

    
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

    this.roleService.updateRole(this.selectedRoleId, data).subscribe( (r:any) => {
      if( r.status ) {
        this.toasterMessage('success', r.msg);
        this.rolePermissionForm.reset();
        this.router.navigateByUrl('setup-configuration/roles');
      }
      else {
        this.toasterMessage('error', r.message);
      }
    });

  }

  createRolePermissionForm(code, name, permissions) {
    this.rolePermissionForm = this._fb.group({
      name: [name, Validators.required],
      code: [code, Validators.required],
    });
    this.createPermissions(permissions);
  }

  createPermissions(permissions) {
    permissions = JSON.parse(permissions);
    for(let formModule of this.allPermissions) {
      for(let formModuleKey of formModule.permissions) {
        let isAllowed = false;
        const dsKey = formModuleKey.allow[0];

        if( permissions ) {
          isAllowed = permissions.filter(elem => elem.hasOwnProperty(dsKey) )[0] || false;
        }
        
        this.rolePermissionForm.addControl( dsKey, new FormControl(isAllowed[dsKey]) );
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
