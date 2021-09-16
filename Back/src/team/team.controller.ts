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
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { TeamService } from './team.service';
import { Observable } from 'rxjs';
import { UpdateResult } from 'typeorm';
import { Team } from './team.entity';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('team')
export class TeamController {
  constructor(private teamService: TeamService) {}

  // GET
  @Get()
  async getAllTeams(): Promise<Team[]> {
    return this.teamService.getAllTeams();
  }

  @Get(':teamId')
  getOneTeam(@Param('teamId') teamId: string): Promise<Team> {
    return this.teamService.getOneTeam(teamId);
  }

  // CREATE
  @Post()
  async createTeam(@Body() team: CreateTeamDto): Promise<Team> {
    return this.teamService.createTeam(team);
  }

  // UPDATE
  @Put(':teamId')
  updateTeam(
    @Param('teamId') teamId: string,
    @Body() team: CreateTeamDto,
  ): Promise<UpdateResult> {
    return this.teamService.updateTeam(teamId, team);
  }

  @Post('team/:teamId')
  @UseInterceptors(FileInterceptor('img'))
  uploadImage(
    @UploadedFile() img: any,
    @Param('teamId') teamId: string,
    @Query('type') type: string,
  ): Promise<any> {
    return this.teamService.uploadImage(img, teamId, type);
  }

  // DELETE
  @Delete(':teamId')
  deleteTeam(@Param('teamId') teamId: string) {
    this.teamService.deleteTeam(teamId);
  }
}
