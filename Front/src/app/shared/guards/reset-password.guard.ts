import { map, tap, mergeMap } from 'rxjs/operators';
import { NbAuthService } from '@nebular/auth';
import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../core/backend/services/auth.service';

@Injectable()
export class ResetPasswordGuard implements CanActivate {
  constructor(
    private readonly router: ActivatedRoute,
    private readonly authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.authService.canResetPassword(
      route.queryParams.id,
      route.queryParams.blob
    );
  }
}
