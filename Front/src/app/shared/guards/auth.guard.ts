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
import { UserService } from '../../core/backend/services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  user: any = {};

  constructor(
    private readonly authService: NbAuthService,
    private readonly router: Router,
    private userService: UserService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.authService.isAuthenticated().pipe(
      mergeMap((authenticated) => {
        if (!authenticated) {
          return of(true);
        } else {
          if (!this.userService.connectedUser) {
            return this.authService.getToken().pipe(
              //tap((token) => console.log(token)),
              mergeMap((token: NbAuthJWTToken) => {
                this.user = token.getPayload();
                if (this.user) {
                  return this.userService.getOneUser(this.user.id).pipe(
                    map((user) => {
                      this.userService.connectedUser = user;
                      return true;
                    })
                  );
                } else {
                  return of(true);
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
