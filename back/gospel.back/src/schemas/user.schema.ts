import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

@Schema()
export class User {
  _id: number;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  confirmToken: string;

  @Prop({ required: true, default: false })
  active: boolean;

  comparePassword: (candidatePassword: string) => boolean;
}

export type UserDocument = User & mongoose.Document;

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.index({ email: 1 });

UserSchema.pre('save', async function (next: any) {
  let user = this as UserDocument;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) {
    return next();
  }

  // Random additional data
  const salt = await bcrypt.genSalt(10);

  const hash = await bcrypt.hashSync(user.password, salt);

  // Replace the password with the hash
  user.password = hash;

  return next();
});

UserSchema.methods.comparePassword = async function (
    candidatePassword: string,
  ) {
    const user = this as UserDocument;
  
    return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
  };