import { TeamsDto } from '../shared/models/dto/teamsDto';
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

  // getOffice(officeId: string): Promise<Office> {
  //   return this.officeRepository.findOne(officeId);
  // }

  getAllTeams(): Promise<Teams[]> {
    return this.teamRepository.find();
  }

  // createOffice(office: CreateOfficeDto): Promise<Office> {
  //   return this.officeRepository.save(office);
  // }

  // updateOffice(officeId: string, office: OfficeDto): Promise<UpdateResult> {
  //   return this.officeRepository.update(officeId, office);
  // }

  // deleteOffice(officeId: string): Promise<DeleteResult> {
  //   return this.officeRepository.delete(officeId);
  // }
}
