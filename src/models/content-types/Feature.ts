import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.9.0'
 *
 * Feature
 * Id: db521a37-38fc-4e3e-b0fe-3f36c96733e4
 * Codename: feature
 */
export type Feature = IContentItem<{
  /**
   * Description (rich_text)
   * Required: false
   * Id: a3b00a66-f472-432c-af6d-787c27b6a6b9
   * Codename: description
   */
  description: Elements.RichTextElement;

  /**
   * Name (text)
   * Required: true
   * Id: b2ad6d9d-ea77-4ae3-bc23-62e4a5e8d8a2
   * Codename: name
   */
  name: Elements.TextElement;
}>;