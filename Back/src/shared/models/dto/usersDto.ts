import { Exclude } from 'class-transformer';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class UserDto {
  public id: string;
  public pseudo: string;
  public email: string;
  @Exclude()
  public password: string;
}

export class CreateUserDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  pseudo: string;
  @IsNotEmpty()
  password: string;
  role: UserRole;
}

export enum UserRole {
  admin = 'admin',
  collaborator = 'collaborator',
}
