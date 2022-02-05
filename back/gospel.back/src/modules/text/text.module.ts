import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GospelTexts, GospelTextSchema } from 'src/schemas/common/text.schema';
import { TextController } from 'src/controllers/text/text.controller';
import { TextBusiness } from 'src/business/common/text.bl';
import { TextProvider } from 'src/providers/common/text.provider';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: GospelTexts.name, schema: GospelTextSchema },
    ]),
  ],
  controllers: [TextController],
  providers: [TextBusiness, TextProvider],
})
export class TextModule {}
