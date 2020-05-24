import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeatMapComponent } from './seat-map.component';
import { SeatMapRoutingModule } from './seat-map-routing.module';
import { ModalService } from '../../_modal/modal.service';



@NgModule({
  declarations: [SeatMapComponent],
  imports: [CommonModule],
  exports:[SeatMapComponent]
})
export class SeatMapModule { 
  static forRoot(){
    return {
      NgModule:SeatMapModule,
      providers:[ModalService]
    }
  }
}
