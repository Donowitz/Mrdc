import { NebularModule } from './../../shared/nebular.module';
import { AppLoginComponent } from './../../components/auth/login/login.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: '',
          login: {
            // ...
            endpoint: '/auth/login',
            method: 'post',
          },
          //       // redirect: {
          //       //   success: '', // welcome page path
          //       //   failure: null, // stay on the same page
          //       // },
        }),
      ],
      forms: {},
    }),
    NebularModule,
    ReactiveFormsModule,
  ],
  declarations: [AppLoginComponent],
  providers: [],
})
export class AuthModule {}
