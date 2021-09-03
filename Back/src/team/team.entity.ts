import { Training } from 'src/training/training.entity';
import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Team {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({
    nullable: false,
  })
  public teamName: string;

  @Column({
    nullable: true,
    length: 500,
  })
  public teamStory: string;

  // @Column()
  // public teamLogo: string;

  // @Column()
  // public teamPicture: string;
  @Column({ type: 'int' })
  public order: number;

  @Column({
    nullable: false,
  })
  public flatTrackUrl: string;

  @Column({
    default: true,
    nullable: false,
  })
  public isActiveTeam: boolean;

  @ManyToMany((type) => Training, (training) => training.teams)
  public trainings: Training[];
}
