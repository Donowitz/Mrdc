import { MediaDto } from 'src/shared/models/dto/mediasDto';
import { CreateMediaDto } from './../shared/models/dto/mediasDto';
import { Medias } from './medias.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class MediasService {
  constructor(
    @InjectRepository(Medias)
    private mediaRepository: Repository<Medias>,
  ) {}

  getAllMedias(): Promise<Medias[]> {
    return this.mediaRepository.find({
      order: {
        date: 'DESC',
      },
    });
  }

  addMedia(media: CreateMediaDto): Promise<MediaDto> {
    return this.mediaRepository.save(media);
  }
}
