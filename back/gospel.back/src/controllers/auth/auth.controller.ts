import { Controller, Get } from '@nestjs/common';
import { AuthBusiness } from 'src/business/auth/auth.bl';

@Controller()
export class AuthController {
  constructor(private readonly authBusiness: AuthBusiness) {}

  @Get()
  async getHello() {
    return this.authBusiness.getHello();
  }

}
