import { InjectRedis, Redis } from '@nestjs-modules/ioredis';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RedisProvider {
  constructor(@InjectRedis() private readonly redis: Redis) {}

  async getData(key: string, callback: () => any) {
    let redisData = await this.redis.get(key);
    if (!redisData) {
      redisData = await callback();
      await this.redis.set(key, JSON.stringify(redisData), 'EX', 15);
    } else {
      return JSON.parse(redisData);
    }
    return redisData;
  }
}
