import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PosService } from 'src/app/shared/services/pos-service/pos-service';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { AuditTrail } from 'src/app/shared/models/report/audit-trail';
import { Branch } from 'src/app/shared/models/branch.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pos-branch',
  templateUrl: './pos-branch.component.html',
  styleUrls: ['./pos-branch.component.scss']
})
export class PosBranchComponent implements OnInit {
  branchForm:FormGroup;
  organisation_ID:any
  branchesdata: Array<[Branch]> = [];
  isSubmitted:boolean=false;
  showUpdate:boolean=false;
  constructor(private fb:FormBuilder,
    private posService:PosService,
    private toastr:ToastrService,
    private router:Router,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.organisation_ID = this.activeRoute.snapshot.params.id;

    this.branchForm=this.fb.group({
      organisation_id:this.organisation_ID,
      id:[''],
      name:['',Validators.required],
      email:['',[Validators.required,Validators.pattern('^[a-z0-9._&%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      branch_code:['',[Validators.required,Validators.pattern('^[a-zA-Z0-9]+$')]],
      address_1:[''],
      address_2:[''],
      tab:['branch'],
    });
    this.fetchAllBranches();
    
  }

  get gfc() { return this.branchForm.controls };
  fetchAllBranches(){

    this.posService.fetchAllBranches(this.organisation_ID).subscribe((result: any) => {
      if(result.status){
        this.branchesdata=result.result.data;

       }else{
        this.toastr.error(`${result.message}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-top-right'
        });
       }
  });

  }

  saveBraches(){
    this.isSubmitted=true;
    if (this.branchForm.invalid) {
      this.toastr.warning(`Please fill all mandatory fields`, `Error `, {
        timeOut: 10000,
        progressBar: false,
        positionClass: 'toast-bottom-right'
      })
      return;
    }
    this.posService.createBranch(this.branchForm.value).subscribe((result: any) => {
      if(result.status){
        this.toastr.success(`${result.message}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-top-right'
        });

        this.fetchAllBranches();
        this.branchForm.reset();
        this.branchForm.patchValue({
          organisation_id:this.organisation_ID,
          tab:'branch'
        })
       }else{
        this.toastr.error(`${result.message}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-top-right'
        });
       }
  });
}

deleteTourCode(row:any){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.value) {
      this.posService.deleteBranch({"id":row.id}).subscribe((result: any) => {
        if (result.status == false) {
          this.toastr.error(`${result.message}`, ``, {
            timeOut: 10000,
            progressBar: false,
            positionClass: 'toast-top-right'
          });
        } else {
          this.toastr.success(`${result.message}`, ``, {
            timeOut: 10000,
            progressBar: false,
            positionClass: 'toast-top-right'
          });

       this.fetchAllBranches()
        }
      })

    }
  })
}

cancelOfficeDetails() {
  this.router.navigate(['/pos/basic-edit/',this.organisation_ID])
}
createBranch(){
  this.router.navigate(['/pos/branch-add/',this.organisation_ID])
}
editbranch(data){
  this.posService.editbranch(data.id).subscribe((result: any) => {
    if(result.status){
   this.showUpdate=true;
      this.branchForm.patchValue({
        organisation_id:this.organisation_ID,
        id:data.id,
        name:result.result.name,
        email:result.result.email,
        branch_code:result.result.branch_code,
        address_1:result.result.address_1,
        address_2:result.result.address_2,
        tab:'branch',
      })
     }
}); 
}

updateBranch(){
  this.isSubmitted=true;
  if (this.branchForm.invalid) {
    this.toastr.warning(`Please fill all mandatory fields`, `Error `, {
      timeOut: 10000,
      progressBar: false,
      positionClass: 'toast-bottom-right'
    })
    return;
  }

  this.posService.updateBranch(this.branchForm.value).subscribe((result: any) => {
    if(result.status){
      this.toastr.success(`${result.message}`, ``, {
        timeOut: 1000,
        progressBar: false,
        positionClass: 'toast-top-right'
      });

      this.fetchAllBranches();
      this.branchForm.reset();
      this.branchForm.patchValue({
        organisation_id:this.organisation_ID,
        tab:'branch'
      })
      this.showUpdate=false;
     }else{
      this.toastr.error(`${result.message}`, ``, {
        timeOut: 1000,
        progressBar: false,
        positionClass: 'toast-top-right'
      });
     }
});
}
}
