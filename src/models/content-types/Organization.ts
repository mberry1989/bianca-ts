import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.9.0'
 *
 * Organization
 * Id: 03d4d525-3e70-4006-a33f-2e21e93c8850
 * Codename: organization
 */
export type Organization = IContentItem<{
  /**
   * Description (rich_text)
   * Required: false
   * Id: f4ff9266-6803-47e5-8257-f11e9be1b788
   * Codename: description
   */
  description: Elements.RichTextElement;

  /**
   * Name (text)
   * Required: true
   * Id: 6e8c26e6-3e3c-4462-b1cc-8725a32367e4
   * Codename: name
   */
  name: Elements.TextElement;
}>;
