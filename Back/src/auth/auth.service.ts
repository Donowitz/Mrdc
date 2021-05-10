import { UserDto } from '../shared/models/dto/usersDto';
import { UsersService } from '../users/users.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.getUserByEmail(email);
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
    const user = await this.usersService.getUserByEmail(userQuery.email);
    const { password, ...userWithoutPass } = user;
    const payload = { ...userWithoutPass };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
