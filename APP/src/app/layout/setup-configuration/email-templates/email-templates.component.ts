import { Component, OnInit } from '@angular/core';
import { EmailTemplates } from 'src/app/shared/models/setup-config/email-template';
import { SetupConfigService } from 'src/app/shared/services/setup-config/setup-config.service';
import Swal from 'sweetalert2';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ModalService } from '../../_modal';
import { CKEditorModule } from 'ckeditor4-angular';

@Component({
  selector: 'app-email-templates',
  templateUrl: './email-templates.component.html',
  styleUrls: ['./email-templates.component.scss']
})
export class EmailTemplatesComponent implements OnInit {
  templateForm: FormGroup;
  limit: number = 15;
  pageIndex: number = 1;
  NewListOfEmails: Array<[EmailTemplates]> = [];
  totalListOfEmails: number = 0;
  pages: number = 0;
  submitted: Boolean = false;
  showDetailModal: Boolean = false;
  getInfo: any;

  constructor(
    public ListOfEmailrService: SetupConfigService,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.fetchAllListOfEmails(this.limit, this.pageIndex);
    this.templateForm = this.fb.group({
      email_template_id: ['', [Validators.required]],
      email_template_name: ['', [Validators.required]],
      email_template_description: ['', [Validators.required]]
    })
  }
  get f() { return this.templateForm.controls; }

  fetchAllListOfEmails(limit: number, pageIndex: number) {
    this.ListOfEmailrService.GetAllEmails(0, limit, pageIndex)
      .subscribe((res: any) => {
        if (res.status == 200) {
          if (res.email.length != 0) {
            this.totalListOfEmails = res.email;
            this.pages = this.totalListOfEmails / this.limit;
            this.NewListOfEmails = res.email;
          }
          else {
            this.toastr.info(`There is no data available to display`, ``, {
              timeOut: 1000,
              progressBar: false,

              positionClass: 'toast-bottom-right'
            });
          }
        }
        else {
          this.toastr.error(`${res.msg}`, `${res.msg}`, {
            timeOut: 1000,
            progressBar: false,

            positionClass: 'toast-bottom-right'
          });
        }
      });
  }

  editTemplate(id: any, modalId: any) {
    this.submitted = false;
    this.ListOfEmailrService.getEmailInfo(id).subscribe((result: any) => {
      if (result.type != 'error') {
        this.getInfo = result.data;
        this.showDetailModal = true;
        this.templateForm.patchValue({
          email_template_id: result.data.email_template_id,
          email_template_name: result.data.email_template_name,
          email_template_description: result.data.email_template_description
        })
        this.modalService.open(modalId);
      } else {
        this.toastr.error(`${result.msg}`, `${result.msg}`, {
          timeOut: 10000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
      }
    })
  }

  updateTemplate(modelId) {
    this.submitted = true;

    if (this.templateForm.invalid) {
      return;
    }
    this.ListOfEmailrService.updateTemplate(this.templateForm.value).subscribe((result: any) => {
      if (result.type == 'error') {
        this.toastr.error(`${result.msg}`, `${result.msg}`, {
          timeOut: 1000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
      } else {
        this.toastr.info(`${result.msg}`, `${result.msg}`, {
          timeOut: 1000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
        this.fetchAllListOfEmails(this.limit, this.pageIndex);
        this.modalService.close(modelId);
      }
    })

  }

  closeModal(modalId: any) {
    this.modalService.close(modalId);
  }

}
