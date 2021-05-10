import { MediasController } from './medias.controller';
import { MediasService } from './medias.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medias } from './medias.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Medias])],
  controllers: [MediasController],
  providers: [MediasService],
  exports: [MediasService],
})
export class MediasModule {}
