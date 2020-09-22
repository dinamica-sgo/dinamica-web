import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receivables-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.scss']
})
export class ReceivablesMethodComponent implements OnInit {

  paymentMethod: string;
  amount: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
