import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from "./layouts/default/default.component";
import { HomeComponent } from "./modules/home/home.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";

import { AddressComponent } from "./modules/account/address/address.component";
import { BranchesComponent } from "./modules/account/branches/branches.component";
import { BusinessProfileComponent } from "./modules/account/business-profile/business-profile.component";
import { MyProfileComponent } from "./modules/account/my-profile/my-profile.component";
import { TransactionsComponent } from "./modules/account/transactions/transactions.component";
import { LendingComponent } from "./modules/availables/lending/lending.component";
import { PendingComponent } from "./modules/availables/pending/pending.component";
import { WalletComponent } from "./modules/availables/wallet/wallet.component";
import { ProvidersComponent } from "./modules/payables/providers/providers.component";
import { VendorsComponent } from "./modules/payables/vendors/vendors.component";
import { AmountComponent } from "./modules/receivables/amount/amount.component";
import { CodeComponent } from "./modules/receivables/code/code.component";
import { LinkComponent } from "./modules/receivables/link/link.component";
import { QrComponent } from "./modules/receivables/qr/qr.component";
import { CashInComponent } from "./modules/transfers/cash-in/cash-in.component";
import { CashOutComponent } from "./modules/transfers/cash-out/cash-out.component";
import { MoneyRequestComponent } from "./modules/transfers/money-request/money-request.component";
import { MoneyShippingComponent } from "./modules/transfers/money-shipping/money-shipping.component";
import { BankAccountComponent } from './modules/transfers/cash-in/bank-account/bank-account.component';
import { CashInAmountComponent } from './modules/transfers/cash-in/cash-in-amount/cash-in-amount.component';
import { RapiCashComponent } from './modules/transfers/cash-in/rapi-cash/rapi-cash.component';
import { ReceivablesComponent } from './modules/receivables/receivables/receivables.component';
import { RapiCashOutComponent } from './modules/transfers/cash-out/rapi-cash-out/rapi-cash-out.component';
import { BankAccountOutComponent } from './modules/transfers/cash-out/bank-account-out/bank-account-out.component';
import { FinishTransferComponent } from './modules/transfers/cash-out/finish-transfer/finish-transfer.component';
import { ReceivablesMethodComponent } from './modules/receivables/method/method.component';
import { CodeValidationComponent } from './modules/receivables/code/code-validation/code-validation.component';
import { CodeApproveComponent } from './modules/receivables/code/code-approve/code-approve.component';
import { PhoneComponent } from './modules/receivables/phone/phone.component';
import { PhoneValidationComponent } from './modules/receivables/phone/phone-validation/phone-validation.component';
import { PhoneApproveComponent } from './modules/receivables/phone/phone-approve/phone-approve.component';
import { LinkApprovedComponent } from './modules/receivables/link/link-approved/link-approved.component';
import { QrApprovedComponent } from './modules/receivables/qr/qr-approved/qr-approved.component';
import { PaymentsMethodComponent } from './modules/payables/method/method.component';
import { DebitsComponent } from './modules/payables/debits/debits.component';
import { CompaniesComponent } from './modules/companies/companies.component';


const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [{
      path: '',
      component: HomeComponent
    },{
      path: 'domicilio',
      component: AddressComponent
    },{
      path: 'sucursales',
      component: BranchesComponent
    }, {
      path: 'mi-negocio',
      component: BusinessProfileComponent
    }, {
      path: 'mi-perfil',
      component: MyProfileComponent
    }, {
      path: 'actividad',
      component: TransactionsComponent
    }, {
      path: 'credito',
      component: LendingComponent
    }, {
      path: 'pendiente',
      component: PendingComponent
    }, {
      path: 'billetera',
      component: WalletComponent
    }, {
      path: 'pagar',
      component: PaymentsMethodComponent
    }, {
      path: 'pagar/servicios',
      component: ProvidersComponent
    }, {
      path: 'pagar/prestadores',
      component: VendorsComponent
    }, {
      path: 'pagar/debitos',
      component: DebitsComponent
    }, {
      path: 'metodo/venta',
      component: ReceivablesMethodComponent
    }, {
      path: 'venta/qr',
      component: QrComponent
    }, {
      path: 'venta/qr/aprobada',
      component: QrApprovedComponent
    }, {
      path: 'venta/link',
      component: LinkComponent
    }, {
      path: 'venta/link/aprobada',
      component: LinkApprovedComponent
    }, {
      path: 'venta/SMS',
      component: CodeComponent
    }, {
      path: 'venta/SMS/validacion',
      component: CodeValidationComponent
    }, {
      path: 'venta/SMS/aprobada',
      component: CodeApproveComponent
    }, {
      path: 'venta/tradicional',
      component: PhoneComponent
    }, {
      path: 'venta/tradicional/validacion',
      component: PhoneValidationComponent
    }, {
      path: 'venta/tradicional/aprobada',
      component: PhoneApproveComponent
    }, {
      path: 'ingresar-dinero',
      component: CashInComponent
    }, {
      path: 'transferir-dinero',
      component: CashOutComponent
    }, {
      path: 'solicitar-dinero',
      component: MoneyRequestComponent
    }, {
      path: 'enviar-dinero',
      component: MoneyShippingComponent
    }, {
      path: 'ingresar-dinero-monto',
      component: CashInAmountComponent
    }, {
      path: 'ingresar-dinero-banco',
      component: BankAccountComponent
    }, {
      path: 'ingresar-dinero-rapi',
      component: RapiCashComponent
    }, {
      path: 'mis-ventas',
      component: ReceivablesComponent
    }, {
      path: 'retirar-efectivo',
      component: RapiCashOutComponent
    }, {
      path: 'transferir-banco',
      component: BankAccountOutComponent
    }, {
      path: 'confirmar-transfer',
      component: FinishTransferComponent
    }, {
      path: 'prestamos',
      component: LendingComponent
    }, {
      path: 'prestadores',
      component: CompaniesComponent
    }


  ]
  }, {
      path: 'login',
      component: LoginComponent
    }, {
      path: 'register',
      component: RegisterComponent
    }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
