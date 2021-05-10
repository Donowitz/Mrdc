import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Medias {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({
    nullable: false,
  })
  public magazine: string;

  @Column({
    nullable: false,
  })
  public articleTitle: string;

  @Column({
    nullable: false,
  })
  public url: string;

  @Column({
    type: 'date',
  })
  public date: Date;
}
