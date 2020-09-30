import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code-validation',
  templateUrl: './code-validation.component.html',
  styleUrls: ['./code-validation.component.scss']
})
export class CodeValidationComponent implements OnInit {

  amount: number = 12000;
  customer: string = "Enrique Sisack";

  constructor() { }

  ngOnInit(): void {
  }

  
}
