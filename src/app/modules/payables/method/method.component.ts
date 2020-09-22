import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './method.component.html',
  styleUrls: ['./method.component.scss']
})
export class PaymentsMethodComponent implements OnInit {

  amount: number;
  constructor() { }

  ngOnInit(): void {
  }

}
