import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.scss']
})
export class PaymentListComponent implements OnInit {
  paymentList : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  
showPaymentList(){
  this.paymentList = !this.paymentList;
}

}
