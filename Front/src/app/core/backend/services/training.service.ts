import { TrainingDto } from './../../../../../../Back/src/shared/models/dto/trainingsDto';
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
export class TrainingService {
  constructor(private readonly api: HttpService) {}

  private readonly apiController = 'training';

  getAllTrainings(): Observable<TrainingDto[]> {
    return this.api.get(`${this.apiController}`);
  }

  updateTraining(
    trainingId: string,
    partialTraining: Partial<TrainingDto>
  ): Observable<any> {
    return this.api.put(`${this.apiController}/${trainingId}`, partialTraining);
  }
}
