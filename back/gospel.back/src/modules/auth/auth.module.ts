import { Module } from '@nestjs/common';
import { AuthBusiness } from 'src/business/auth/auth.bl';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthController } from 'src/controllers/auth/auth.controller';
import { AuthProvider } from 'src/providers/auth/auth.provider';
import { Users, UserSchema } from 'src/schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Users.name, schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthBusiness, AuthProvider],
})
export class AuthModule {}
