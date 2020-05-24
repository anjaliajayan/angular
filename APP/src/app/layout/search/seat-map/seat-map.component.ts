import { Component, OnInit, Input } from '@angular/core';
import { ModalService } from './../../_modal';

declare const $: any;

@Component({
  selector: 'app-seat-map',
  templateUrl: './seat-map.component.html',
  styleUrls: ['./seat-map.component.scss']
})
export class SeatMapComponent implements OnInit {

  SeatData: any;
  seatColumn:string[];
  seatRow:string[];
  AllSeats:any;
  SeatMapdata:any = [];
  constructor(
    private modalService: ModalService
  ) { 
   
  }

  ngOnInit() {
    this.loadConfig();

    this.modalService.currentSeat.subscribe(data => {
      this.SeatMapdata = data;
      if (this.SeatMapdata.result) {
       this.AllSeats = this.SeatMapdata.result.AllSeats;
          this.seatColumn = []
          let groups = this.AllSeats["0"].Groups.join("-");
          this.SeatData = {}
          groups.split("").map(cols => { this.seatColumn.push(cols); });

          Object.keys(this.AllSeats["0"].RowWiseSeat).map(row => {
            this.SeatData[row] = {}
            let temporary = groups.split("").map(cols => {
              this.SeatData[row][cols] = "NotAvailable"
            })
            Object.keys(this.AllSeats["0"].RowWiseSeat[row]).map(update => {
              let ColID = this.AllSeats["0"].RowWiseSeat[row][update].ColumnID
              this.SeatData[row][ColID] = this.AllSeats["0"].RowWiseSeat[row][update].SeatCharacteristicCode;
            })
          })
          this.seatRow = Object.keys(this.SeatData);
      }
    })
  }

  onSelect(col: string, row: number, seatCharacteristic: []) {
    console.log(col, row, seatCharacteristic);
  }

  loadConfig() {
    $(document).ready(function () {
      $('.menu .item').tab();
    });
  }

  closeModal(modalId: any) {
    this.modalService.close(modalId);
  }

}
