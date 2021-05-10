import { TeamDto, CreateTeamDto } from '../shared/models/dto/teamsDto';
import { Observable, from } from 'rxjs';
import { Injectable } from '@nestjs/common';
import { Teams } from './teams.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class TeamsService {
  constructor(
    @InjectRepository(Teams)
    private teamRepository: Repository<Teams>,
  ) {}

  getAllTeams(): Promise<Teams[]> {
    return this.teamRepository.find({
      order: {
        order: 'ASC',
      },
    });
  }

  getOneTeam(teamId: string): Promise<Teams> {
    return this.teamRepository.findOne(teamId);
  }

  createTeam(team: CreateTeamDto): Promise<Teams> {
    return this.teamRepository.save(team);
  }

  updateTeam(teamId: string, team: CreateTeamDto): Promise<UpdateResult> {
    return this.teamRepository.update(teamId, team);
  }

  deleteTeam(teamId: string): Promise<DeleteResult> {
    return this.teamRepository.delete(teamId);
  }
}
