import { TeamDto, CreateTeamDto } from '../shared/models/dto/teamsDto';
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
import { TeamsService } from './teams.service';
import { Observable } from 'rxjs';
import { UpdateResult } from 'typeorm';

@Controller('teams')
export class TeamsController {
  constructor(private teamsService: TeamsService) {}

  @Get()
  async getAllTeams(): Promise<TeamDto[]> {
    return this.teamsService.getAllTeams();
  }

  @Get()
  getOneTeam(@Query('teamId') teamId: string): Promise<TeamDto> {
    return this.teamsService.getOneTeam(teamId);
  }

  @Post()
  async createTeam(@Body() team: CreateTeamDto): Promise<TeamDto> {
    return this.teamsService.createTeam(team);
  }

  @Put(':teamId')
  updateTeam(
    @Param('teamId') teamId: string,
    @Body() team: CreateTeamDto,
  ): Promise<UpdateResult> {
    return this.teamsService.updateTeam(teamId, team);
  }

  @Delete(':teamId')
  deleteTeam(@Param('teamId') teamId: string) {
    this.teamsService.deleteTeam(teamId);
  }
}
