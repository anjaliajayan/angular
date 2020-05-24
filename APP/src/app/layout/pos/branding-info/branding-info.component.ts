import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from 'src/app/shared/services/common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PosService } from 'src/app/shared/services/pos-service/pos-service';

@Component({
  selector: 'app-branding-info',
  templateUrl: './branding-info.component.html',
  styleUrls: ['./branding-info.component.scss']
})
export class BrandingInfoComponent implements OnInit {

  brandingInfoForm: FormGroup;
  isSubmitted = false;
  organisation_ID: any;
  posInfo: any = {};
  corporate_type: any;

  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private CommonService: CommonService,
    private activeRoute: ActivatedRoute,
    private posService: PosService,
    private router: Router, ) { }

  ngOnInit() {
    this.brandingInfoForm = this.fb.group({

      organisation_id: [''],
      corporate_type: [''],

      image_website: [''],
      image_invoice: [''],
      image_email: [''],

      image_file1: [''],
      image_file2: [''],
      image_file3: [''],
      image_file4: [''],
      terms_conditions: [''],
      tab:['branding'],
    });
    this.organisation_ID = this.activeRoute.snapshot.params.id;
    this.getOrganisationInfo(this.organisation_ID);
  }

  storeBrandingInfo() {
    
    
    this.posService.updatePosDetails(this.brandingInfoForm.value).subscribe((result: any) => {
      if(result.status){
        this.toastr.success(`${result.message}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-top-right'
        });
        this.router.navigate(['/pos/basic-edit/'+this.organisation_ID])
       }else{
        this.toastr.error(`${result.message}`, ``, {
          timeOut: 1000,
          progressBar: false,
          positionClass: 'toast-top-right'
        });
       }

    });

  }

  uploadImage(files, field) {
 
    var mimeType = files[0].type;
    var file_size = files[0].size;

    if(file_size > 5e+6 ){
      this.toastr.error(`File size should not be more than 5 MB`, `Error `, {
        timeOut: 5000,
        progressBar: false,
        positionClass: 'toast-top-right'
      })
      return;
    }

    if (mimeType.match(/image\/*/) == null) {
      this.toastr.error(`Invalid image format`, `Error `, {
        timeOut: 5000,
        progressBar: false,

        positionClass: 'toast-top-right'
      })
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.CommonService.uploadImagetoAWS(reader.result).subscribe((result: any) => {
        if (field == 'officeLogo') {
          this.brandingInfoForm.patchValue({
            image_website: result.image
          });
        }
        if (field == 'brandingInvoice') {
          this.brandingInfoForm.patchValue({
            image_invoice: result.image
          });
        }
        if (field == 'brandingSignature') {
          this.brandingInfoForm.patchValue({
            image_email: result.image
          });
        }
      }, err => {
        this.toastr.error(`Error uploading image, Try any other image`, `Error `, {
          timeOut: 5000,
          progressBar: false,

          positionClass: 'toast-top-right'
        })
      });
    }
  }

  uploadPDF(files, field) {
    if (files.length === 0)
      return;
    var mimeType = files[0].type;
    var file_size = files[0].size;
    if(file_size > 5e+6 ){
      this.toastr.error(`File size should not be more than 5 MB`, `Error `, {
        timeOut: 5000,
        progressBar: false,
        positionClass: 'toast-top-right'
      })
      return;
    }

    if (mimeType.match(/pdf\/*/) == null) {
      this.toastr.error(`Invalid File format`, `Error `, {
        timeOut: 5000,
        progressBar: false,
        positionClass: 'toast-top-right'
      })
      return;
    }
    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.CommonService.uploadPDFtoAWS(reader.result).subscribe((result: any) => {
        if (field == 'image_file1') {
          this.brandingInfoForm.patchValue({
            image_file1: result.pdf
          })
        }
        if (field == 'image_file2') {
          this.brandingInfoForm.patchValue({
            image_file2: result.pdf
          })
        }
        if (field == 'image_file3') {
          this.brandingInfoForm.patchValue({
            image_file3: result.pdf
          })
        }
        if (field == 'image_file4') {
          this.brandingInfoForm.patchValue({
            image_file4: result.pdf
          })
        }

      }, err => {
        console.log('erer ', err)

      });
    }
  }

  getOrganisationInfo(organisation_ID: number) {
    this.posService.getPosDetails(organisation_ID).subscribe((result: any) => {

      if (result.status) {
        this.posInfo = result.result;
        if (this.posInfo.corporate_type && this.posInfo.corporate_type != null && this.posInfo.corporate_type != '')

          this.corporate_type = this.posInfo.corporate_type;

        this.brandingInfoForm.patchValue({

          organisation_id: this.organisation_ID,
          corporate_type: this.posInfo.corporate_type,

          image_website: this.posInfo.image_website,
          image_invoice: this.posInfo.image_invoice,
          image_email: this.posInfo.image_email,

          image_file1: this.posInfo.image_file1,
          image_file2: this.posInfo.image_file2,
          image_file3: this.posInfo.image_file3,
          image_file4: this.posInfo.image_file4,

          terms_conditions: this.posInfo.terms_conditions
        })

        // this.ngAfterViewInit();
      }

    });
  }

  cancelBranding() {
    this.router.navigate(['/pos/basic-edit/',this.organisation_ID])
  }

}
