import { UserRole } from 'src/shared/models/dto/usersDto';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column({
    nullable: false,
  })
  public pseudo: string;

  @Column({
    nullable: false,
  })
  public email: string;

  @Column({
    nullable: false,
    select: false,
  })
  public password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.collaborator,
  })
  public role: UserRole;
}
