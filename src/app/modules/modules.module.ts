import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";

import { MaterialModule } from "../material/material.module";
import { HomeComponent } from './home/home.component';
import { AccountModule } from "./account/account.module";
import { AvailablesModule } from "./availables/availables.module";
import { PayablesModule } from "./payables/payables.module";
import { ReceivablesModule } from "./receivables/receivables.module";
import { TransfersModule } from "./transfers/transfers.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompaniesComponent } from './companies/companies.component';


@NgModule({
  declarations: [
    HomeComponent,
    CompaniesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    AccountModule,
    AvailablesModule,
    PayablesModule,
    ReceivablesModule,
    TransfersModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HomeComponent,
    FlexLayoutModule,
    MaterialModule,
    AccountModule,
    AvailablesModule,
    PayablesModule,
    ReceivablesModule,
    TransfersModule
  ]
})
export class ModulesModule { }
