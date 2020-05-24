import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  @Input() selected_panel:any;
  @Input() hotel:any;
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();
  @Input() searchingRoom:boolean=false;
  title:string;
  panel_id;
  opened:boolean = true;
  constructor() { }

  ngOnInit() {
  this.title = this.hotel.hotel_name; 
  this.panel_id = this.hotel.hotel_id;
  }



}
