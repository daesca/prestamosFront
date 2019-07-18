import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterUserModule } from './register-user/register-user.module';
import { BankLoanModule } from './bank-loan/bank-loan.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RegisterUserModule,
    BankLoanModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
