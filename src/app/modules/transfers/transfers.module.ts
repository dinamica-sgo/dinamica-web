import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "../../material/material.module";
import { RouterModule } from "@angular/router";

import { CashInComponent } from './cash-in/cash-in.component';
import { CashOutComponent } from './cash-out/cash-out.component';
import { MoneyShippingComponent } from './money-shipping/money-shipping.component';
import { MoneyRequestComponent } from './money-request/money-request.component';
import { BankAccountComponent } from './cash-in/bank-account/bank-account.component';
import { CashInAmountComponent } from './cash-in/cash-in-amount/cash-in-amount.component';
import { RapiCashComponent } from './cash-in/rapi-cash/rapi-cash.component';
import { BankAccountOutComponent } from './cash-out/bank-account-out/bank-account-out.component';
import { RapiCashOutComponent } from './cash-out/rapi-cash-out/rapi-cash-out.component';
import { FinishTransferComponent } from './cash-out/finish-transfer/finish-transfer.component';



@NgModule({
  declarations: [
    CashInComponent, 
    CashOutComponent, 
    MoneyShippingComponent, 
    MoneyRequestComponent, 
    BankAccountComponent, 
    CashInAmountComponent, 
    RapiCashComponent, BankAccountOutComponent, RapiCashOutComponent, FinishTransferComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule
  ]
})
export class TransfersModule { }
