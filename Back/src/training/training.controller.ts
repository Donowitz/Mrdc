import { TrainingDto } from './../shared/models/dto/trainingsDto';
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import { TrainingService } from './training.service';
import { Training } from './training.entity';

@Controller('training')
export class TrainingController {
  constructor(private trainingService: TrainingService) {}

  @Get()
  async getAllTrainings(): Promise<Training[]> {
    return this.trainingService.getAllTrainings();
  }

  //   @Post()
  //   async createTeam(@Body() team: CreateTeamDto): Promise<TeamDto> {
  //     return this.trainingService.createTeam(team);
  //   }

  @Put(':id')
  updateTraining(
    @Param('id') id: string,
    @Body() partialTraining: Partial<TrainingDto>,
  ): Promise<UpdateResult> {
    return this.trainingService.updateTraining(id, partialTraining);
  }

  //   @Delete(':teamId')
  //   deleteTeam(@Param('teamId') teamId: string) {
  //     this.teamService.deleteTeam(teamId);
  //   }
}
