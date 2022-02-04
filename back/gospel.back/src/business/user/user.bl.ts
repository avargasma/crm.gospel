import { Injectable } from '@nestjs/common';
import { UserProvider } from 'src/providers/user/user.provider';
import { UserDTO } from 'src/schemas/user/user.DTO';
import { Users } from 'src/schemas/user/user.schema';

@Injectable()
export class UserBusiness {
  constructor(private readonly provider: UserProvider) {}

  async getAllUsers(): Promise<Users[]> {
    return this.provider.getAllUsers() as unknown as Promise<Users[]>;
  }

  async getUserById(id: string): Promise<Users> {
    return this.provider.getUserById(id) as unknown as Promise<Users>;
  }

  async newUser(user: UserDTO): Promise<Users> {
    return this.provider.newUser(user) as unknown as Promise<Users>;
  }

  async updateUser(id: string, user: UserDTO): Promise<Users> {
    return this.provider.updateUser(id, user) as unknown as Promise<Users>;
  }

  async deleteUser(id: string): Promise<void> {
    this.provider.deleteUser(id);
  }
}
