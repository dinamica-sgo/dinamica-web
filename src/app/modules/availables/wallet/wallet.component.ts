import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observer } from 'rxjs';
import { Transaction } from 'src/app/model/Transaction';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {

  cash: number;
  available: number;
  loan: number;
  transactions: Transaction[] = [];
  dataSource = new MatTableDataSource(this.transactions);
  displayedColumns: string[] = ['transactionId', 'transactionDate', 'transactionType', 'customer', 'amount'];

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.getCash();
    this.getAvailable();
    this.getLoan();
    this.getTransaction();
  }

  getCash() {
    this.cash = this.transactionService.getCash();
  }

  getAvailable() {
    this.available = this.transactionService.getAvailable();
  }

  getLoan() {
    this.loan = this.transactionService.getLoan();
  }

  getTransaction() {
    let resp = this.transactionService.findAll();
    resp.subscribe(report=> this.dataSource.data = report as Transaction[])
  }

}
