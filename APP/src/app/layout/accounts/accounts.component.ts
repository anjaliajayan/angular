import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/shared/services/accounts/transactions.service';
import { Router } from '@angular/router';
import { Transaction } from "src/app/shared/models/transaction.interface";
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {

  constructor(private transactionsService: TransactionsService) { }

  ngOnInit() {
  }

}
