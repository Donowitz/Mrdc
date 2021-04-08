import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Teams } from './teams.entity';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Teams])],
  controllers: [TeamsController],
  providers: [TeamsService],
  exports: [TeamsService],
})
export class TeamsModule {}
