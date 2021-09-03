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
import { TeamService } from './team.service';
import { Observable } from 'rxjs';
import { UpdateResult } from 'typeorm';
import { Team } from './team.entity';

@Controller('team')
export class TeamController {
  constructor(private teamService: TeamService) {}

  @Get()
  async getAllTeams(): Promise<Team[]> {
    return this.teamService.getAllTeams();
  }

  @Get(':teamId')
  getOneTeam(@Param('teamId') teamId: string): Promise<Team> {
    return this.teamService.getOneTeam(teamId);
  }

  @Post()
  async createTeam(@Body() team: CreateTeamDto): Promise<Team> {
    return this.teamService.createTeam(team);
  }

  @Put(':teamId')
  updateTeam(
    @Param('teamId') teamId: string,
    @Body() team: CreateTeamDto,
  ): Promise<UpdateResult> {
    return this.teamService.updateTeam(teamId, team);
  }

  @Delete(':teamId')
  deleteTeam(@Param('teamId') teamId: string) {
    this.teamService.deleteTeam(teamId);
  }
}
