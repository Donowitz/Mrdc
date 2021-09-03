import {
  CreateUserDto,
  UserDto,
} from '../../../../../../Back/src/shared/models/dto/usersDto';
import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UserService {
  connectedUser: UserDto;

  constructor(private readonly api: HttpService) {}

  private readonly apiController = 'user';

  getAllUsers(): Observable<UserDto[]> {
    return this.api.get(`${this.apiController}`);
  }

  getOneUser(teamId: string): Observable<UserDto> {
    return this.api.get(`${this.apiController}/${teamId}`);
  }

  createTeam(team: CreateUserDto) {
    return this.api.post(`${this.apiController}`, team);
  }

  updateUser(
    teamId: string,
    partialTeam: Partial<CreateUserDto>
  ): Observable<any> {
    return this.api.put(`${this.apiController}/${teamId}`, partialTeam);
  }

  deleteUser(teamId: string): Observable<any> {
    return this.api.delete(teamId);
  }
}
