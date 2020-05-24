import { Component, OnInit } from '@angular/core';
import { RegistrationService } from 'src/app/shared/services/registration.service';
import { Router, NavigationExtras } from '@angular/router';
import { Registration } from "src/app/shared/models/registration.interface";
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

import { ModalService } from 'src/app/layout/_modal';
declare const $: any;
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(
    private registrationService: RegistrationService,
    private router: Router,
    private toastr: ToastrService,
    private modalService: ModalService) {
  }
  limit: number = 15;
  pageIndex: number = 1;
  registrations: Array<Registration[]> = [];
  totalRegistration: number = 0;
  pages: number = 0;
  filterParams: any = {
    page: 0,
  }
  getInfo: any;

  ngOnInit() {
    this.getList(this.filterParams);
  }

  getList(filterParams: any) {
    this.registrationService.getList(filterParams).subscribe((result: any) => {

      if (result.status) {
        if (result.result.total > 0) {
          this.registrations = result.result.data;
          this.totalRegistration = result.result.total;
        } else {
          this.toastr.info(`There is no data available to display`, `${result.message}`, {
            timeOut: 2000,
            progressBar: false,

            positionClass: 'toast-bottom-right'
          });
        }
      } else {
        this.toastr.error(`${result.message}`, `${result.message}`, {
          timeOut: 10000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
      }
    })
  }

  showDetailModal: Boolean = false;
  viewUser(valObj: any, modalId: any) {
    this.registrationService.getUser(valObj.registration_id).subscribe((result: any) => {
      if (result.status) {
        if (result.result.length != 0) {
          this.getInfo = result.result;
          this.showDetailModal = true;
          this.modalService.open(modalId);
        }
        else {
          this.toastr.info(`There is no data available`, `${result.message}`, {
            timeOut: 2000,
            progressBar: false,

            positionClass: 'toast-bottom-right'
          });
        }

      } else {
        this.toastr.error(`${result.message}`, `${result.message}`, {
          timeOut: 2000,
          progressBar: false,

          positionClass: 'toast-bottom-right'
        });
      }
    })
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
        this.registrationService.deleteUser({id:valObj.registration_id}).subscribe((result: any) => {
          if (result.status) {
            this.toastr.success(`${result.message}`, `${result.message}`, {
              timeOut: 10000,
              progressBar: false,

              positionClass: 'toast-bottom-right'
            });
            this.getList(this.filterParams);
          } else {
            this.toastr.info(`${result.message}`, `${result.message}`, {
              timeOut: 10000,
              progressBar: false,

              positionClass: 'toast-bottom-right'
            });
            
          }
        })

      }
    })

  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $('.menu .item').tab();
      $('.ui.checkbox').checkbox('attach events', '.toggle.button');
      $('.ui.dropdown').dropdown();
      // $('.ui.modal')
      //   .modal('show')
      //   ;
    });
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  // onCreateNewAgent(){
  //   this.router.navigate(["/point-sales-management/add-point-sale/pos-hierarchy"]);
  // }

}
