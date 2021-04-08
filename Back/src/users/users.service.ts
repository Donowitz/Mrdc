import { Users } from './users.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from 'src/shared/models/dto/usersDto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private userRepository: Repository<Users>,
  ) {}

  getAllUsers(): Promise<Users[]> {
    return this.userRepository.find();
  }

  getOneUser(userId: string): Promise<Users> {
    return this.userRepository.findOne(userId);
  }

  createUser(user: CreateUserDto): Promise<Users> {
    return this.userRepository.save(user);
  }

  updateUser(userId: string, user: CreateUserDto): Promise<UpdateResult> {
    return this.userRepository.update(userId, user);
  }

  deleteUser(userId: string): Promise<DeleteResult> {
    return this.userRepository.delete(userId);
  }
}
