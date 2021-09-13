import { TrainingDto } from './../shared/models/dto/trainingsDto';
import { Training } from 'src/training/training.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { TeamService } from 'src/team/team.service';

@Injectable()
export class TrainingService {
  constructor(
    @InjectRepository(Training)
    private trainingRepository: Repository<Training>,
    private teamService: TeamService,
  ) {}

  getAllTrainings(): Promise<Training[]> {
    return this.trainingRepository.find({
      relations: ['teams'],
      loadRelationIds: true,
      order: {
        trainingDay: 'ASC',
      },
    });
  }

  async updateTraining(id: string, partialTraining: Partial<TrainingDto>) {
    const training = await this.trainingRepository.findOne(id, {
      relations: ['teams'],
    });

    training.trainingDay = partialTraining.trainingDay;
    training.trainingTime = partialTraining.trainingTime;

    if ('teams' in partialTraining) {
      await training.teams.forEach((t) => {
        this.trainingRepository
          .createQueryBuilder()
          .relation(Training, 'teams')
          .of(id)
          .remove(t);
      });

      await partialTraining.teams.forEach((t) => {
        this.trainingRepository
          .createQueryBuilder()
          .relation(Training, 'teams')
          .of(id)
          .add(t);
      });
      delete training.teams;
    }

    return this.trainingRepository.save(training);
  }
}
