import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-search',
  templateUrl: './calendar-search.component.html',
  styleUrls: ['./calendar-search.component.scss']
})
export class CalendarSearchComponent implements OnInit {

  flightRateInfo: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showFlightRateInfo() {
    this.flightRateInfo = !this.flightRateInfo;
  }

}
