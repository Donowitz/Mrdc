import { MediaDto } from 'src/shared/models/dto/mediasDto';
import { CreateMediaDto } from '../shared/models/dto/mediasDto';
import { Media } from './media.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(Media)
    private mediaRepository: Repository<Media>,
  ) {}

  getAllMedias(): Promise<Media[]> {
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
