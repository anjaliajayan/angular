import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ModalService } from '../_modal';

@Component({
    selector: 'app-ancillary-service',
    templateUrl: './ancillary-service.component.html',
    styleUrls: ['./ancillary-service.component.scss']
})
export class AncillaryServiceComponent implements OnInit {

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() {
  }
  
  closeModal(modalId: any) {
    this.modalService.close(modalId);
  }

}