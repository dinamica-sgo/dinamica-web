import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "../../material/material.module";

import { ProvidersComponent } from './providers/providers.component';
import { VendorsComponent } from './vendors/vendors.component';
import { PaymentsMethodComponent } from './method/method.component';
import { DebitsComponent } from './debits/debits.component';
import { RouterModule } from '@angular/router';
import { ProviderPaymentComponent } from './providers/provider-payment/provider-payment.component';



@NgModule({
  declarations: [
    ProvidersComponent, 
    VendorsComponent, 
    PaymentsMethodComponent, DebitsComponent, ProviderPaymentComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule
  ]
})
export class PayablesModule { }
