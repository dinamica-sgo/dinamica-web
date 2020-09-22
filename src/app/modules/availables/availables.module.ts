import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "../../material/material.module";
import { WalletComponent } from './wallet/wallet.component';
import { LendingComponent } from './lending/lending.component';
import { PendingComponent } from './pending/pending.component';
import { RouterModule } from '@angular/router';
import { LoanSimulatorComponent } from './loan-simulator/loan-simulator.component';



@NgModule({
  declarations: [
    WalletComponent, 
    LendingComponent, 
    PendingComponent, LoanSimulatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class AvailablesModule { }
