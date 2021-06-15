import { SharedModule } from './shared/shared.module';
import { NousRejoindreComponent } from './pages/nous-rejoindre/nous-rejoindre.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PartenariatComponent } from './pages/partenariat/partenariat.component';
import { MediasComponent } from './pages/medias/medias.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TeamsComponent } from './pages/teams/teams.component';
import { AppLoginComponent } from './components/auth/login/login.component';
import { NbAuthComponent } from '@nebular/auth';
import { QuezakoComponent } from './pages/quezako/quezako.component';
import { ClubComponent } from './pages/club/club.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'quezako',
        component: QuezakoComponent,
      },
      {
        path: 'le-club',
        component: ClubComponent,
      },
      {
        path: 'nos-equipes',
        component: TeamsComponent,
      },
      {
        path: 'nous-rejoindre',
        component: NousRejoindreComponent,
      },
      {
        path: 'partenariat',
        component: PartenariatComponent,
      },
      {
        path: 'medias',
        component: MediasComponent,
      },
      {
        path: 'contact',
        component: ContactComponent,
      },
    ],
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: 'login',
        component: AppLoginComponent,
      },
      // {
      //   path: 'register',
      //   component: AppSignupComponent,
      // },
      // {
      //   path: 'request-password',
      //   component: AppRequestPasswordComponent,
      // },
      // {
      //   path: 'reset-password',
      //   component: AppResetPasswordComponent,
      //   canActivate: [ResetPasswordGuard],
      // },
    ],
  },
  // {
  //   path: 'admin',
  //   canActivate: [AuthGuard],
  //   children: [{ path: '' }],
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    SharedModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
