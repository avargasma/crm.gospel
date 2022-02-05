import { RedisModule } from '@nestjs-modules/ioredis';
import { Module } from '@nestjs/common';
import { MongoProviderModule } from './config/database/mongo/config.module';
import { AuthModule } from './modules/auth/auth.module';
import { TextModule } from './modules/text/text.module';
import { UserModule } from './modules/user/user.module';
@Module({
  imports: [
    RedisModule.forRoot({
      config: {
        url: 'redis://localhost:6379',
      },
    }),
    MongoProviderModule,
    AuthModule,
    UserModule,
    TextModule,
  ],
})
export class AppModule {}
