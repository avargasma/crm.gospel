import { InjectRedis, Redis } from '@nestjs-modules/ioredis';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  GospelTextDocument,
  GospelTexts,
} from 'src/schemas/common/text.schema';

@Injectable()
export class TextProvider {
  constructor(
    @InjectRedis() private readonly redis: Redis,
    @InjectModel(GospelTexts.name) private textModel: Model<GospelTextDocument>,
  ) {}

  async getTexts(ids: string[]) {
    let redisData = await this.redis.get(JSON.stringify(ids));
    if (!redisData) {
      redisData = await this.textModel.find({ key: { $in: ids } }).clone();
      await this.redis.set(JSON.stringify(ids), JSON.stringify(redisData));
    } else {
      return JSON.parse(redisData);
    }
    return redisData;
  }
}
