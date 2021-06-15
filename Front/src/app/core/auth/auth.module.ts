import { NebularModule } from './../../shared/nebular.module';
import { AppLoginComponent } from './../../components/auth/login/login.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  NbAuthJWTToken,
  NbAuthModule,
  NbPasswordAuthStrategy,
} from '@nebular/auth';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NebularModule,
    ReactiveFormsModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: '/api',
          token: {
            class: NbAuthJWTToken,
            key: 'access_token',
          },
          login: {
            defaultErrors: [
              `La combinaison email / mot de passe n'est pas valide`,
            ],
            method: 'post',
            requireValidToken: false,
            endpoint: '/auth/login',
            redirect: {
              success: '',
              failure: null,
            },
          },
          register: {
            method: 'post',
            requireValidToken: false,
            endpoint: '/auth/register',
          },
          requestPass: {
            defaultErrors: [`Cet email n'est pas valide`],
            defaultMessages: [`Un email de récupération vous à été envoyé`],
            method: 'post',
            requireValidToken: false,
            endpoint: '/auth/request-password',
          },
          resetPass: {
            defaultErrors: [`Une erreur est survenue`],
            method: 'post',
            requireValidToken: false,
            endpoint: '/auth/reset-password',
          },
        }),
      ],
      forms: {},
    }),
  ],
  declarations: [AppLoginComponent],
  providers: [],
})
export class AuthModule {}
