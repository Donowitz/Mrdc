import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { CreateMediaDto, MediaDto } from 'src/shared/models/dto/mediasDto';
import { UpdateResult } from 'typeorm';
import { Medias } from './medias.entity';
import { MediasService } from './medias.service';

@Controller('medias')
export class MediasController {
  constructor(private mediasService: MediasService) {}

  @Get()
  async getAllMedias(): Promise<Medias[]> {
    return this.mediasService.getAllMedias();
  }

  @Post()
  async addMedia(@Body() media: CreateMediaDto): Promise<MediaDto> {
    return this.mediasService.addMedia(media);
  }
}
