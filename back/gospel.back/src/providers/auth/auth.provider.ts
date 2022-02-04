import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users, UserDocument } from 'src/schemas/user.schema';
@Injectable()
export class AuthProvider {
  constructor(
    @InjectModel(Users.name) private authorModel: Model<UserDocument>,
  ) {}

  async getHello() {
    return this.authorModel.find();
  }
}
