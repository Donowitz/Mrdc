import { CreateTeamDto } from '../shared/models/dto/teamsDto';
import { Injectable } from '@nestjs/common';
import { Team } from './team.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import mkdirp = require('mkdirp');
import fs = require('fs');
import { from, Observable } from 'rxjs';

const imgPath = '../Files/teams';

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

  async getImgUrl(teamId: string): Promise<string> {
    return `${process.env.DOMAIN}/teams/${teamId}.jpg`;
  }

  async uploadImage(img: any, teamId: string, type?: string): Promise<any> {
    await mkdirp(`${imgPath}`);
    if (type) {
      return fs.writeFile(
        `${imgPath}/${type}_${teamId}.png`,
        img.buffer,
        'base64',
        (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log('File Saved');
          }
        },
      );
    } else {
      return fs.writeFile(
        `${imgPath}/${teamId}.jpg`,
        img.buffer,
        'base64',
        (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log('File Saved');
          }
        },
      );
    }
  }

  deleteTeam(teamId: string): Promise<DeleteResult> {
    return this.teamRepository.delete(teamId);
  }
}
function tap(arg0: () => void): import('rxjs').OperatorFunction<unknown, any> {
  throw new Error('Function not implemented.');
}
