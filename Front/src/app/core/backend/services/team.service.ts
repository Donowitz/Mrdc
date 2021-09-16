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
export class TeamService {
  constructor(private readonly api: HttpService) {}

  private readonly apiController = 'team';

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

  uploadImage(file: any, teamId: string, type: string = '') {
    let params = new HttpParams();
    params = params.append('type', type);
    const formData: FormData = new FormData();
    formData.append('img', file);
    return this.api.post(`${this.apiController}/team/${teamId}`, formData, {
      params,
    });
  }

  deleteTeam(teamId: string): Observable<any> {
    return this.api.delete(`${this.apiController}/${teamId}`);
  }
}
