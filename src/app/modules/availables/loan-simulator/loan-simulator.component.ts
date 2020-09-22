import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Loan } from 'src/app/model/Loan';
import { LoanSimulatorService } from "src/app/services/loan-simulator.service";


@Component({
  selector: 'app-loan-simulator',
  templateUrl: './loan-simulator.component.html',
  styleUrls: ['./loan-simulator.component.scss']
})
export class LoanSimulatorComponent implements OnInit {

  loans: Loan[] = [];
  dataSource = new MatTableDataSource<Loan>(this.loans);
  displayedColumns: string[] = ['quotas', 'descrip', 'amount', 'total'];

  constructor(private loanSimulatorService: LoanSimulatorService) { }

  ngOnInit(): void {
    this.getLoans();
    console.log(this.loans);
  }

  getLoans() {
    this.loans = this.loanSimulatorService.getLoans();
    this.dataSource.data = this.loans;
  
  }
}
