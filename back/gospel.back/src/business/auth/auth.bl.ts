import { Injectable } from '@nestjs/common';
import { AuthProvider } from 'src/providers/auth/auth.provider';

@Injectable()
export class AuthBusiness {
    constructor(private readonly provider: AuthProvider) {}

  getHello(): string {
    return this.provider.getHello();
  }
  
}
