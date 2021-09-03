import { UserDto } from '../shared/models/dto/usersDto';
import { UserService } from '../user/user.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.getUserByEmail(email);
    if (user) {
      const isRightPass = await bcrypt.compareSync(pass, user.password);
      if (isRightPass) {
        const { password, ...result } = user;
        return result;
      }
    }
    return null;
  }

  async login(userQuery: UserDto) {
    const user = await this.userService.getUserByEmail(userQuery.email);
    const { password, ...userWithoutPass } = user;
    const payload = { ...userWithoutPass };
    console.log(user);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
