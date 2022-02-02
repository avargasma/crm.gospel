import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthProvider {
  getHello(): string {
    return 'Hello World!';
  }
}
