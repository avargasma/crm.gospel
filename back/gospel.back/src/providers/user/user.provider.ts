import { InjectRedis, Redis } from '@nestjs-modules/ioredis';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { nanoid } from 'nanoid';
import { UserDTO } from 'src/schemas/user/user.DTO';
import { Users, UserDocument } from 'src/schemas/user/user.schema';

@Injectable()
export class UserProvider {
  constructor(
    @InjectRedis() private readonly redis: Redis,
    @InjectModel(Users.name) private userModel: Model<UserDocument>,
  ) {}

  async getAllUsers() {
    let redisData = await this.redis.get('getAllUsers');
    if (!redisData) {
      redisData = await this.userModel.find();
      await this.redis.set('getAllUsers', JSON.stringify(redisData));
    } else {
      return JSON.parse(redisData);
    }
    return redisData;
  }

  async getUserById(id: string) {
    return this.userModel.findById(id).lean();
  }

  async getUserByEmail(email: string) {
    return this.userModel.findOne({ email }).select('-__v -confirmToken');
  }

  async newUser(user: UserDTO) {
    const confirmToken = nanoid(32);
    return this.userModel.create({ ...user, confirmToken, active: true });
  }

  async updateUser(id: string, user: UserDTO) {
    return this.userModel.updateOne(
      {
        _id: id,
      },
      user,
    );
  }

  async deleteUser(id: string) {
    this.userModel.deleteOne({
      _id: id,
    });
  }
}
