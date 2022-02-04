import { Module } from '@nestjs/common';
import { MongoProviderModule } from './config/database/mongo/config.module';
import { AuthModule } from './modules/auth/auth.module';
@Module({
  imports: [MongoProviderModule, AuthModule],
})
export class AppModule {}
