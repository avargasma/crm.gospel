import { Module } from '@nestjs/common';
import { RedisProviderModule } from './config/cache/redis/config.module';
import { MongoProviderModule } from './config/database/mongo/config.module';
import { AuthModule } from './modules/auth/auth.module';
import { TextModule } from './modules/text/text.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    RedisProviderModule,
    MongoProviderModule,
    AuthModule,
    UserModule,
    TextModule,
  ],
})
export class AppModule {}
