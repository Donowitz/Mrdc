import { NousRejoindreComponent } from './pages/nous-rejoindre/nous-rejoindre.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    children: [
      // {
      //   path: '',
      //   component: HomeComponent,
      // },
      // {
      //   path: 'quezako',
      //   component: QuezakoComponent,
      // },
      // {
      //   path: 'le-club',
      //   component: ClubComponent,
      // },
      // {
      //   path: 'nos-equipes',
      //   component: EquipesComponent,
      // },
      {
        path: 'nous-rejoindre',
        component: NousRejoindreComponent,
      },
      // {
      //   path: 'partenariat',
      //   component: PartenariatComponent,
      // },
      // {
      //   path: 'medias',
      //   component: MediasComponent,
      // },
      // {
      //   path: 'contact',
      //   component: ContactComponent,
      // },
    ],
  },
  // {
  //   path: 'admin',
  //   component: NbAuthComponent,
  //   children: [
  //     {
  //       path: 'login',
  //       component: AppLoginComponent,
  //     },
  //     {
  //       path: 'register',
  //       component: AppSignupComponent,
  //     },
  //     {
  //       path: 'logout',
  //       component: NbLogoutComponent,
  //     },
  //     {
  //       path: 'request-password',
  //       component: AppRequestPasswordComponent,
  //     },
  //     {
  //       path: 'reset-password',
  //       component: AppResetPasswordComponent,
  //       canActivate: [ResetPasswordGuard],
  //     },
  //   ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
