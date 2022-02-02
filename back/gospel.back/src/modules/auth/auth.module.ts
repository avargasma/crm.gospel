import { Module } from '@nestjs/common';
import { AuthBusiness } from 'src/business/auth/auth.bl';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from 'src/controllers/auth/auth.controller';
import { AuthProvider } from 'src/providers/auth/auth.provider';
import { User, UserSchema } from 'src/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthProvider, AuthBusiness],
})
export class AuthModule {}
