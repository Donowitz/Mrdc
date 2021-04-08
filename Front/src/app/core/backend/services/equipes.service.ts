import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class TeamsService {
  constructor(private readonly api: HttpService) {}

  ///private readonly apiController = 'teams';

  // GET
  getAllTeams() {
    return this.api.get(`teams`);
  }
}
