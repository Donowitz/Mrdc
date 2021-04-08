import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Teams {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({
    nullable: false,
  })
  public teamName: string;

  @Column({
    nullable: false,
  })
  public teamStory: string;

  // @Column()
  // public teamLogo: string;

  // @Column()
  // public teamPicture: string;

  @Column({
    nullable: false,
  })
  public flatTrackUrl: string;

  @Column({
    default: true,
    nullable: false,
  })
  public isActiveTeam: boolean;
}
