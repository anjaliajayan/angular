import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ModalService } from '../../_modal';

@Component({
    selector: 'app-meal-service',
    templateUrl: './meal-service.component.html',
    styleUrls: [
        './../ancillary-service.component.scss',
        './meal-service.component.scss'
    ]
})
export class MealServiceComponent implements OnInit {

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() {
  }
  
  closeModal(modalId: any) {
    this.modalService.close(modalId);
  }

}