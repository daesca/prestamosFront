import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterUserComponent } from './register-user/register-user/register-user.component';
import { BankLoanComponent } from './bank-loan/bank-loan/bank-loan.component';

const routes: Routes = [
  {
    path: 'loan', 
    component: BankLoanComponent,
    data :{
      title: 'Formulario de prestamos'
    }
  },
  {
    path: 'register', 
    component: RegisterUserComponent,
    data :{
      title: 'Formulario de registro'
    },
    // outlet: 'register'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
