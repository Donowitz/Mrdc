import {
  CreateTeamDto,
  TeamDto,
} from '../../../../../../Back/src/shared/models/dto/teamsDto';
import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class TeamsService {
  constructor(private readonly api: HttpService) {}

  private readonly apiController = 'teams';

  getAllTeams(): Observable<TeamDto[]> {
    return this.api.get(`${this.apiController}`);
  }

  getOneTeam(teamId: string): Observable<TeamDto> {
    return this.api.get(`${this.apiController}/${teamId}`);
  }

  createTeam(team: CreateTeamDto) {
    return this.api.post(`${this.apiController}`, team);
  }

  updateTeam(
    teamId: string,
    partialTeam: Partial<CreateTeamDto>
  ): Observable<any> {
    return this.api.put(`${this.apiController}/${teamId}`, partialTeam);
  }

  deleteTeam(teamId: string): Observable<any> {
    return this.api.delete(`${this.apiController}/${teamId}`);
  }
}
