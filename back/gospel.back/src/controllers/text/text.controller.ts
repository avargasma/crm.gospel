import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TextBusiness } from 'src/business/common/text.bl';
import { GospelTexts } from 'src/schemas/common/text.schema';

@ApiTags('Text')
@Controller('text')
export class TextController {
  constructor(private readonly textBl: TextBusiness) {}

  @Post('getTexts')
  async newUser(@Body() ids: string[]): Promise<GospelTexts[]> {
    return await this.textBl.getTexts(ids);
  }
}
