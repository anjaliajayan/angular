import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ModalService } from '../../_modal';

@Component({
    selector: 'app-disability-service',
    templateUrl: './disability-service.component.html',
    styleUrls: [
        './../ancillary-service.component.scss',
        './disability-service.component.scss'
    ]
})
export class DisabilityServiceComponent implements OnInit {

    showWheelchair: boolean = false;

    constructor(
        private modalService: ModalService
    ) { }

    ngOnInit() {
    }

    showWheelchairDetails() {
      this.showWheelchair = !this.showWheelchair;
    }
  
    closeModal(modalId: any) {
      this.modalService.close(modalId);
    }

}