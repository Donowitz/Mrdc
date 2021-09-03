import { TrainingDto } from './../shared/models/dto/trainingsDto';
import { Training } from 'src/training/training.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class TrainingService {
  constructor(
    @InjectRepository(Training)
    private trainingRepository: Repository<Training>,
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

  updateTraining(
    id: string,
    partialTraining: Partial<TrainingDto>,
  ): Promise<UpdateResult> {
    return this.trainingRepository.update(id, partialTraining);
  }
}
