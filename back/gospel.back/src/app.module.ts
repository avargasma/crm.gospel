import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongoProviderModule } from './config/database/mongo/config.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    MongoProviderModule,
    AuthModule
  ],
})
export class AppModule {}
