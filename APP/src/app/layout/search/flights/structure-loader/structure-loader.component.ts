import { Component, OnInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-structure-loader',
  templateUrl: './structure-loader.component.html',
  styleUrls: [
    './../reshop/reshop-results/reshop-results.component.scss',
    './structure-loader.component.scss']
})
export class StructureLoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadCarousel();
  }

  loadCarousel() {
    var scope = this;
    $(document).ready(function () {
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 8,
        autoplay: false,
        nav: true,
        dots: false,
        navText: [
          '<img src="./assets/img/back.png" />',
          '<img src="./assets/img/next.png" />'
        ],
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          },
          1400: {
            items: 7
          }
        }
      });
      $(".owl-carousel").owlCarousel("refresh");
    });
  }

}          
