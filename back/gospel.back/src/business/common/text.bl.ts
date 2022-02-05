import { Injectable } from '@nestjs/common';
import { TextProvider } from 'src/providers/common/text.provider';
import { GospelTexts } from 'src/schemas/common/text.schema';

@Injectable()
export class TextBusiness {
  constructor(private readonly provider: TextProvider) {}

  async getTexts(ids: string[]): Promise<GospelTexts[]> {
    return this.provider.getTexts(ids) as unknown as Promise<GospelTexts[]>;
  }
}
