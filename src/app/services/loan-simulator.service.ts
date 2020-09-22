import { Injectable } from '@angular/core';
import { Loan } from "../model/Loan";

@Injectable({
  providedIn: 'root'
})
export class LoanSimulatorService {

  private loanUrl: string;
  loans: Loan[] = [];

  constructor() { }

  getLoans(): Loan[] {
    return this.loans = this.LOANS;
  }

  LOANS: Loan[] = [
    {
      quotas: 1, descrip: '1 Cuota', amount: 1.09, total: 0
    },
    {
      quotas: 3, descrip: '3 Cuota', amount: 1.09, total: 0
    },
    {
      quotas: 6, descrip: '6 Cuota', amount: 1.09, total: 0
    },
    {
      quotas: 9, descrip: '9 Cuota', amount: 1.09, total: 0
    },
    {
      quotas: 12, descrip: '12 Cuota', amount: 1.09, total: 0
    }
  ];
}
