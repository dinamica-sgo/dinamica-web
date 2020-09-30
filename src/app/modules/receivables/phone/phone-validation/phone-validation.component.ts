import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-validation',
  templateUrl: './phone-validation.component.html',
  styleUrls: ['./phone-validation.component.scss']
})
export class PhoneValidationComponent implements OnInit {

  amount: number = 12000;
  customer: string = "Enrique Sisack";
  
  constructor() { }

  ngOnInit(): void {
  }

}
