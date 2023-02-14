import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type Contact } from './Contact';
import { type ContentBlock } from './ContentBlock';
import { type Event } from './Event';
import { type Page } from './Page';
import { type Post } from './Post';
import { type Service } from './Service';
import { type Video } from './Video';

/**
 * Generated by '@kontent-ai/model-generator@5.9.0'
 *
 * Homepage
 * Id: 6e8dacb9-5fe7-4d22-8028-b70ece4cc713
 * Codename: homepage
 */
export type Homepage = IContentItem<{
  /**
   * Carousel (asset)
   * Required: true
   * Id: 922ec97c-9e60-4edd-bc69-1ab1ef00b8f8
   * Codename: carousel
   */
  carousel: Elements.AssetsElement;

  /**
   * Content (modular_content)
   * Required: false
   * Id: c0a816ba-86fa-470a-97bb-85033e647057
   * Codename: content
   */
  content: Elements.LinkedItemsElement<
    Service | Video | Event | ContentBlock | Contact
  >;

  /**
   * Featured Content (modular_content)
   * Required: false
   * Id: 634d629f-0a07-419a-89d2-cf65b1233bb7
   * Codename: featured_content
   */
  featuredContent: Elements.LinkedItemsElement<
    ContentBlock | Event | Service | Post
  >;

  /**
   * Subpages (subpages)
   * Required: false
   * Id: 18b3f10a-0dfd-440e-9d9e-1a0002568aa7
   * Codename: subpages
   */
  subpages: Elements.LinkedItemsElement<Page>;

  /**
   * Title (text)
   * Required: false
   * Id: c70b536e-7c95-4d93-81ca-aa1197ca5186
   * Codename: title
   */
  title: Elements.TextElement;
}>;