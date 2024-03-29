import { Observable } from 'rxjs';
import { HttpService } from './../http.service';
import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { NbTokenService } from '@nebular/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly apiController = 'auth';

  constructor(
    private readonly api: HttpService,
    private readonly nbTokenService: NbTokenService
  ) {}

  canResetPassword(userId: string, blob: string): Observable<boolean> {
    let params = new HttpParams();
    params = params.append('id', userId);
    params = params.append('blob', blob);
    return this.api.get(`${this.apiController}/request-password`, { params });
  }

  register(user: any) {
    return this.api.post(`${this.apiController}/register`, user);
  }

  logout() {
    this.nbTokenService.clear();
    localStorage.clear();
    window.location.reload();
  }
}
