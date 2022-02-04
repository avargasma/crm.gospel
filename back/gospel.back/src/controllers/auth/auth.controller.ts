import {
  Body,
  Controller,
  Get,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthBusiness } from 'src/business/auth/auth.bl';
import { LoginDTO } from 'src/schemas/auth/login.DTO';
@Controller('login')
export class AuthController {
  constructor(private readonly authBusiness: AuthBusiness) {}

  @Post()
  async login(@Body() loginDTO: LoginDTO): Promise<{ access_token: string }> {
    const { user, pass } = loginDTO;
    const valid = await this.authBusiness.validateUser(user, pass);
    if (!valid) {
      throw new UnauthorizedException();
    }
    return await this.authBusiness.generateAccessToken(user);
  }
}
