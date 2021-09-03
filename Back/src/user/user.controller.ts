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
import { UserService } from './user.service';
import { UpdateResult } from 'typeorm';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<UserDto[]> {
    return this.userService.getAllUsers();
  }

  @Get(':userId')
  getOneUser(@Param(':userId') userId: string): Promise<UserDto> {
    return this.userService.getOneUser(userId);
  }

  @Get('byMail/:email')
  async getUserByEmail(@Param('email') email): Promise<UserDto> {
    return this.userService.getUserByEmail(email);
  }

  @Post()
  async createUser(@Body() user: CreateUserDto): Promise<UserDto> {
    return this.userService.createUser(user);
  }

  @Put(':userId')
  updateUser(
    @Param('userId') userId: string,
    @Body() user: CreateUserDto,
  ): Promise<UpdateResult> {
    return this.userService.updateUser(userId, user);
  }

  @Delete(':userId')
  deleteUser(@Param('userId') userId: string) {
    this.userService.deleteUser(userId);
  }
}
