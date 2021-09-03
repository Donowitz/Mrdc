import { User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CreateUserDto } from 'src/shared/models/dto/usersDto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  getOneUser(userId: string): Promise<User> {
    return this.userRepository.findOne(userId);
  }

  getUserByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({
      where: { email },
      select: ['id', 'password', 'role'],
    });
  }

  createUser(user: CreateUserDto): Promise<User> {
    return this.userRepository.save(user);
  }

  updateUser(userId: string, user: CreateUserDto): Promise<UpdateResult> {
    return this.userRepository.update(userId, user);
  }

  deleteUser(userId: string): Promise<DeleteResult> {
    return this.userRepository.delete(userId);
  }
}
