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
import { Media } from './media.entity';
import { MediaService } from './media.service';

@Controller('media')
export class MediaController {
  constructor(private mediaService: MediaService) {}

  @Get()
  async getAllMedias(): Promise<Media[]> {
    return this.mediaService.getAllMedias();
  }

  @Post()
  async addMedia(@Body() media: CreateMediaDto): Promise<MediaDto> {
    return this.mediaService.addMedia(media);
  }
}
