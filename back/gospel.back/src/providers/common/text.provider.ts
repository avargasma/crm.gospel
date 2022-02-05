import { InjectRedis } from '@nestjs-modules/ioredis';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  GospelTextDocument,
  GospelTexts,
} from 'src/schemas/common/text.schema';
import { RedisProvider } from '../redis/redis.provider';

@Injectable()
export class TextProvider {
  constructor(
    private readonly redis: RedisProvider,
    @InjectModel(GospelTexts.name) private textModel: Model<GospelTextDocument>,
  ) {}

  async getTexts(ids: string[]) {
    const key = JSON.stringify(ids);
    return this.redis.getData(key, () =>
      this.textModel.find({ key: { $in: ids } }).clone(),
    );
  }
}
