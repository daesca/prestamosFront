import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from './register-user/register-user.component';
import { FormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [RegisterUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    // RegisterUserRoutingModule
  ],

})
export class RegisterUserModule { }
