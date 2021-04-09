import { ChangeDetectorRef, Component, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  NbAuthResult,
  NbAuthService,
  NbLoginComponent,
  NB_AUTH_OPTIONS,
} from '@nebular/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class AppLoginComponent extends NbLoginComponent {}
