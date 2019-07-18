import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankLoanComponent } from './bank-loan/bank-loan.component';
import { FormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [BankLoanComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class BankLoanModule { }
