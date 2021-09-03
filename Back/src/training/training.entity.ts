import { TrainingDays } from 'src/shared/models/dto/trainingsDto';
import { Team } from 'src/team/team.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Training {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({
    type: 'enum',
    enum: TrainingDays,
  })
  public trainingDay: TrainingDays;

  @Column({
    nullable: false,
  })
  public trainingTime: string;

  @ManyToMany(() => Team, (team) => team.trainings)
  @JoinTable()
  public teams: Team[];
}
