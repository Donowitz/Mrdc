import { NebularModule } from './../../shared/nebular.module';
import { AppLoginComponent } from './../../components/auth/login/login.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    AppAuthRoutingModule,
    NbAuthModule,
    NebularModule,
    ReactiveFormsModule,
  ],
  declarations: [AppLoginComponent],
  providers: [],
})
export class AuthModule {}
