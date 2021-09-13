import {
  MediaDto,
  CreateMediaDto,
} from '../../../../../../Back/src/shared/models/dto/mediasDto';
import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';

import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class MediaService {
  constructor(private readonly api: HttpService) {}

  private readonly apiController = 'media';

  getAllMedias(): Observable<MediaDto[]> {
    return this.api.get(`${this.apiController}`);
  }

  addMedia(media: CreateMediaDto) {
    return this.api.post(`${this.apiController}`, media);
  }
}
