import { UserDto, CreateUserDto } from '../shared/models/dto/usersDto';
import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateResult } from 'typeorm';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<UserDto[]> {
    return this.usersService.getAllUsers();
  }

  @Get(':userId')
  getOneUser(@Param(':userId') userId: string): Promise<UserDto> {
    return this.usersService.getOneUser(userId);
  }

  @Get('byMail/:email')
  async getUserByEmail(@Param('email') email): Promise<UserDto> {
    return this.usersService.getUserByEmail(email);
  }

  @Post()
  async createUser(@Body() user: CreateUserDto): Promise<UserDto> {
    return this.usersService.createUser(user);
  }

  @Put(':userId')
  updateUser(
    @Param('userId') userId: string,
    @Body() user: CreateUserDto,
  ): Promise<UpdateResult> {
    return this.usersService.updateUser(userId, user);
  }

  @Delete(':userId')
  deleteUser(@Param('userId') userId: string) {
    this.usersService.deleteUser(userId);
  }
}
