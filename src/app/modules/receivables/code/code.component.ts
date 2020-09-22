import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransactionService } from 'src/app/services/transaction.service';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  casesForm: FormGroup;
  type: '';
  code: number = null;
  customer = '';
  amount: number = null;
  descrip = '';
  quota = '';
  typeList = ['DNI', 'CUIT'];
  quotaList = ['2 cuotas', '3 cuotas', '6 cuotas', '12 cuotas'];
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private api: TransactionService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.casesForm = this.formBuilder.group({
      type: [null],
      code: [null],
      customer: [null, Validators.required],
      amount: [null, Validators.required],
      descrip: [null, Validators.required],
      quota: [null, Validators.required]      
    });
  }

  onFormSubmit() {
    this.isLoadingResults = true;

    // this.api.addCases(this.casesForm.value)
    //   .subscribe((res: any) => {
    //     const id = res._id;
    //     this.isLoadingResults = false;
    //     this.router.navigate(['/cases-details', id]);
    //   }, (err: any) => {
    //     console.log(err);
    //     this.isLoadingResults = false;
    //   });
  }

}
