import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ModalService } from '../../_modal';

@Component({
    selector: 'app-baggage-service',
    templateUrl: './baggage-service.component.html',
    styleUrls: [
        './../ancillary-service.component.scss',
        './baggage-service.component.scss'
    ]
})
export class BaggageServiceComponent implements OnInit {
    
    bagDesc: boolean = false;
    baggageCount = 0;

    constructor(
        private modalService: ModalService
    ) { }

    ngOnInit() {
    }

    showBaggageDesc() {
        this.bagDesc = !this.bagDesc;
    }

    incrementBaggageCount() {
        this.baggageCount = this.baggageCount + 1;
    }

    decrementBaggageCount() {
        this.baggageCount = this.baggageCount - 1;
    }
  
    closeModal(modalId: any) {
      this.modalService.close(modalId);
    }

}