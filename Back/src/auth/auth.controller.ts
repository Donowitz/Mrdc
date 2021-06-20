import { UserDto } from '../shared/models/dto/usersDto';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guard/local-auth.guard';
import { Controller, Post, UseGuards, Get, Body, Query } from '@nestjs/common';

var uuid = require('uuid');

import cacheManager = require('cache-manager');

@Controller('auth')
export class AuthController {
  memoryCache;

  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService, // private readonly mailService: MailerService, // private readonly officeSevice: OfficeService,
  ) {
    this.memoryCache = cacheManager.caching({
      store: 'memory',
      max: 100,
      ttl: 900,
    });
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Body() user: UserDto) {
    return this.authService.login(user);
  }

  // @Post('register')
  // async createAdminUser(@Body() body: CreateUserDto): Promise<UserDto> {
  //   const office = await this.officeSevice.createOffice({
  //     name: body.officeName,
  //   });
  //   const hash = await bcrypt.hash(body.password, 10);
  //   body.role = UserRole.admin;
  //   body.password = hash;
  //   return this.userService.createUser(body, office.id);
  // }

  // @Post('reset-password')
  // async resetPassword(@Body() body: ResetPasswordDto): Promise<UpdateResult> {
  //   const hash = await bcrypt.hash(body.password, 10);
  //   body.password = hash;
  //   return this.userService.updateUser(body.id, body);
  // }

  // @Post('request-password')
  // async requestPassword(@Body() body: any): Promise<any> {
  //   const user = await this.userService.getUserByEmail(body.email);
  //   if (user) {
  //     // const blob = uuid.v4()
  //     // this.memoryCache.set(`request-password-${user.id}`, blob, 900);
  //     return this.mailService.sendMail({
  //       to: 'carbo20@hotmail.fr',
  //       from: 'noreply@dazzboard.fr',
  //       subject: 'Reset Password',
  //       html: `http://localhost:4200/auth/reset-password?id=${user.id}&blob=${undefined}`,
  //     });
  //   }
  //   return null;
  // }

  // @Get('request-password')
  // async canResetPassword(
  //   @Query('id') id: string,
  //   @Query('blob') blob: string,
  // ): Promise<boolean> {
  //   const cacheBlob = await this.memoryCache.get(`request-password-${id}`);
  //   if (blob === cacheBlob) {
  //     return true;
  //   }
  //   return false;
  // }
}
