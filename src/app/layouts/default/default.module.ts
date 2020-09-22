import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SharedModule } from '../../shared/shared.module';
import { AccountModule } from "../../modules/account/account.module";
import { DefaultComponent } from "./default.component";
import { MaterialModule } from "../../material/material.module";


@NgModule({
  declarations: [
    DefaultComponent
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    AccountModule,
    MaterialModule
  ]
})
export class DefaultModule { }

