import { Training } from 'src/training/training.entity';
import {
  AfterLoad,
  Column,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as fs from 'fs';

@Entity()
export class Team {
  @AfterLoad()
  getTeamImages() {
    this.teamLogo = `${process.env.DOMAIN}/teams/logo_${this.id}.png`;
    this.teamPicture = `${process.env.DOMAIN}/teams/${this.id}.jpg`;
  }

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

  @Column()
  public teamLogo: string;

  @Column()
  public teamPicture: string;

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
