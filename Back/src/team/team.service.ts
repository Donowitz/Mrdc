import { TeamDto, CreateTeamDto } from '../shared/models/dto/teamsDto';
import { Observable, from } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { Team } from './team.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {}

  getAllTeams(): Promise<Team[]> {
    return this.teamRepository.find({
      order: {
        order: 'ASC',
      },
    });
  }

  getOneTeam(teamId: string): Promise<Team> {
    return this.teamRepository.findOne(teamId);
  }

  createTeam(team: CreateTeamDto): Promise<Team> {
    return this.teamRepository.save(team);
  }

  updateTeam(teamId: string, team: CreateTeamDto): Promise<UpdateResult> {
    return this.teamRepository.update(teamId, team);
  }

  deleteTeam(teamId: string): Promise<DeleteResult> {
    return this.teamRepository.delete(teamId);
  }
}
