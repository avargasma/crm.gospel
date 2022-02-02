import { Controller, Get } from '@nestjs/common';
import { AuthBusiness } from 'src/business/auth/auth.bl';
import { AuthProvider } from 'src/providers/auth/auth.provider';

@Controller()
export class AuthController {
  constructor(private readonly authBusiness: AuthBusiness) {}

  @Get()
  getHello(): string {
    return this.authBusiness.getHello();
  }

}
