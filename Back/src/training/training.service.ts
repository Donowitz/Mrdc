import { Team } from 'src/team/team.entity';
import { TrainingDto } from './../shared/models/dto/trainingsDto';
import { Training } from 'src/training/training.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
    let updatedTraining = { ...partialTraining };
    const training = await this.trainingRepository.findOne(id, {
      relations: ['teams'],
    });

    if (partialTraining.teams) {
      const removeArray = training.teams.filter(
        (oldTeam) => partialTraining.teams.indexOf(oldTeam) == -1,
      );

      const addArray = partialTraining.teams.filter(
        (newTeam) => training.teams.indexOf(newTeam as Team) == -1,
      );

      await removeArray.forEach(async (teamToRemove) => {
        await this.trainingRepository
          .createQueryBuilder()
          .relation(Training, 'teams')
          .of(id)
          .remove(teamToRemove);
      });

      await partialTraining.teams.forEach(async (teamToAdd) => {
        await this.trainingRepository
          .createQueryBuilder()
          .relation(Training, 'teams')
          .of(id)
          .add(teamToAdd);
      });
      delete updatedTraining.teams;
    }

    return this.trainingRepository.save(updatedTraining);
  }
}
