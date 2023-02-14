import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
/**
 * Generated by '@kontent-ai/model-generator@5.9.0'
 *
 * Video
 * Id: 2c1b7988-a914-45c4-9ace-fb459c417bce
 * Codename: video
 */
export type Video = IContentItem<{
  /**
   * Caption (text)
   * Required: false
   * Id: 4cf1300a-d906-41ca-b918-afaf512baab9
   * Codename: caption
   */
  caption: Elements.TextElement;

  /**
   * Video ID (text)
   * Required: true
   * Id: 5ce9e6a0-57dc-4c22-b499-ac97e8f1a597
   * Codename: video_id
   */
  videoId: Elements.TextElement;

  /**
   * Video Service (multiple_choice)
   * Required: true
   * Id: d866d1f1-9200-4ef6-bced-5332974b56d5
   * Codename: video_service
   */
  videoService: Elements.MultipleChoiceElement;
}>;
