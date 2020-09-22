import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MaterialModule } from "../../material/material.module";
import { MyProfileComponent } from './my-profile/my-profile.component';
import { BusinessProfileComponent } from './business-profile/business-profile.component';
import { AddressComponent } from './address/address.component';
import { BranchesComponent } from './branches/branches.component';
import { TransactionsComponent } from './transactions/transactions.component';



@NgModule({
  declarations: [
    MyProfileComponent, 
    BusinessProfileComponent, 
    AddressComponent, 
    BranchesComponent, 
    TransactionsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class AccountModule { }
