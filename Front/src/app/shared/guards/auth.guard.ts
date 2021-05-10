import { tap, mergeMap, map } from 'rxjs/operators';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { UsersService } from './../../core/backend/services/users.service';

@Injectable()
export class AuthGuard implements CanActivate {
  user: any = {};

  constructor(
    private readonly authService: NbAuthService,
    private readonly router: Router,
    private usersService: UsersService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.authService.isAuthenticated().pipe(
      mergeMap((authenticated) => {
        if (!authenticated) {
          return from(this.router.navigate(['auth/login']));
        } else {
          if (!this.usersService.connectedUser) {
            return this.authService.getToken().pipe(
              tap((token) => console.log(token)),
              mergeMap((token: NbAuthJWTToken) => {
                this.user = token.getPayload();
                if (this.user) {
                  return this.usersService.getOneUser(this.user.id).pipe(
                    map((user) => {
                      this.usersService.connectedUser = user;
                      return true;
                    })
                  );
                } else {
                  return from(this.router.navigate(['auth/login']));
                }
              })
            );
          } else {
            return of(true);
          }
        }
      })
    );
  }
}
