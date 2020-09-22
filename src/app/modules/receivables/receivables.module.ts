import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "../../material/material.module";
import { RouterModule } from "@angular/router";
import { QRCodeModule } from 'angularx-qrcode';
import { FormsModule } from '@angular/forms';

import { AmountComponent } from './amount/amount.component';
import { QrComponent } from './qr/qr.component';
import { LinkComponent } from './link/link.component';
import { CodeComponent } from './code/code.component';
import { ReceivablesComponent } from './receivables/receivables.component';
import { ReceivablesMethodComponent } from './method/method.component';
import { CodeValidationComponent } from './code/code-validation/code-validation.component';
import { CodeApproveComponent } from './code/code-approve/code-approve.component';
import { PhoneComponent } from './phone/phone.component';
import { PhoneValidationComponent } from './phone/phone-validation/phone-validation.component';
import { PhoneApproveComponent } from './phone/phone-approve/phone-approve.component';
import { QrApprovedComponent } from './qr/qr-approved/qr-approved.component';
import { LinkApprovedComponent } from './link/link-approved/link-approved.component';



@NgModule({
  declarations: [
    AmountComponent, 
    QrComponent, 
    LinkComponent, 
    CodeComponent, 
    ReceivablesComponent, 
    ReceivablesMethodComponent, 
    CodeValidationComponent, 
    CodeApproveComponent, 
    PhoneComponent, 
    PhoneValidationComponent, 
    PhoneApproveComponent, 
    QrApprovedComponent, 
    LinkApprovedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    QRCodeModule,
    FormsModule
  ]
})
export class ReceivablesModule { }
