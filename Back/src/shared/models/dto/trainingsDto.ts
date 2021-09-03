import { TeamDto } from './teamsDto';

export class TrainingDto {
  public id: string;
  public trainingDay: TrainingDays;
  public trainingTime: string;
  public teams: TeamDto[];
}

export enum TrainingDays {
  lundi = 'Lundi',
  mardi = 'Mardi',
  mercredi = 'Mercredi',
  jeudi = 'Jeudi',
  vendredi = 'Vendredi',
  samedi = 'Samedi',
  dimanche = 'Dimanche',
}
