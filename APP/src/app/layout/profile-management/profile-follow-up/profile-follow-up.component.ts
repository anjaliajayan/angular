import { Component, OnInit } from '@angular/core';

declare const moment: any;
declare const $: any;

@Component({
  selector: 'app-profile-follow-up',
  templateUrl: './profile-follow-up.component.html',
  styleUrls: ['./profile-follow-up.component.scss']
})
export class ProfileFollowUpComponent implements OnInit {
  public flag: boolean = true;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    $('.menu .item').tab();
    $('.ui.dropdown').dropdown();
  }
}
