/**
 * Generated by '@kontent-ai/model-generator@5.9.0'
 *
 * Project name: 🧘‍♀️Bianca
 * Environment: Production
 * Project Id: 861513d3-9aaa-00c6-aa47-2317ade87596
 */
export const contentTypes = {
  /**
   * Certification
   */
  certification: {
    codename: 'certification',
    id: '00611e0a-efaf-46ff-9e81-aa3bd1891957',
    externalId: undefined,
    name: 'Certification',
    elements: {
      /**
       * Date Earned (date_time)
       */
      date_earned: {
        codename: 'date_earned',
        id: 'b640bb02-46e1-4f30-8f4b-2898b629c193',
        externalId: undefined,
        name: 'Date Earned',
        required: true,
        type: 'date_time',
        snippetCodename: undefined,
      },

      /**
       * Description (rich_text)
       */
      description: {
        codename: 'description',
        id: 'e44ca727-9bb6-428e-b21e-8792c7e4f453',
        externalId: undefined,
        name: 'Description',
        required: false,
        type: 'rich_text',
        snippetCodename: undefined,
      },

      /**
       * Issued By (modular_content)
       */
      issued_by: {
        codename: 'issued_by',
        id: 'bebf93a4-56f0-4ef1-9e23-f18eb0408f09',
        externalId: undefined,
        name: 'Issued By',
        required: true,
        type: 'modular_content',
        snippetCodename: undefined,
      },

      /**
       * Name (text)
       */
      name: {
        codename: 'name',
        id: '9a47c698-ad47-4299-b2fc-f02f8800a4b3',
        externalId: undefined,
        name: 'Name',
        required: true,
        type: 'text',
        snippetCodename: undefined,
      },
    },
  },

  /**
   * Contact
   */
  contact: {
    codename: 'contact',
    id: 'e4104851-a3e2-4bee-82cd-2b82dfc04ed7',
    externalId: undefined,
    name: 'Contact',
    elements: {
      /**
       * Calendly Link (text)
       */
      calendly_link: {
        codename: 'calendly_link',
        id: '98734fb6-e2f1-482b-b924-688062c6ff41',
        externalId: undefined,
        name: 'Calendly Link',
        required: false,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Email (text)
       */
      email: {
        codename: 'email',
        id: '790e8376-a6ff-4efb-9559-9d6806a7b055',
        externalId: undefined,
        name: 'Email',
        required: false,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Person (modular_content)
       */
      person: {
        codename: 'person',
        id: 'e20d6555-b30d-49d9-9088-f9fe28a4f2ac',
        externalId: undefined,
        name: 'Person',
        required: false,
        type: 'modular_content',
        snippetCodename: undefined,
      },

      /**
       * Phone (text)
       */
      phone: {
        codename: 'phone',
        id: 'a5110a81-49ca-45b6-a59d-3add67a60ff8',
        externalId: undefined,
        name: 'Phone',
        required: false,
        type: 'text',
        snippetCodename: undefined,
      },
    },
  },

  /**
   * Content Block
   */
  content_block: {
    codename: 'content_block',
    id: '7cdb3d15-6e8b-4256-aeae-66627a0931fd',
    externalId: undefined,
    name: 'Content Block',
    elements: {
      /**
       * Body (rich_text)
       */
      body: {
        codename: 'body',
        id: 'cc614d08-feb7-433a-9d03-3f3205b88118',
        externalId: undefined,
        name: 'Body',
        required: false,
        type: 'rich_text',
        snippetCodename: undefined,
      },

      /**
       * Headline (text)
       */
      headline: {
        codename: 'headline',
        id: 'fd2c3fce-1926-4fbf-88ee-26c19a4d916f',
        externalId: undefined,
        name: 'Headline',
        required: false,
        type: 'text',
        snippetCodename: undefined,
      },
    },
  },

  /**
   * Event
   */
  event: {
    codename: 'event',
    id: 'aad6af9a-6d54-4e63-931b-607f5bc2e0e7',
    externalId: undefined,
    name: 'Event',
    elements: {
      /**
       * Contact (modular_content)
       */
      contact: {
        codename: 'contact',
        id: 'd596ec64-4153-465a-8862-3c4f096b87be',
        externalId: undefined,
        name: 'Contact',
        required: false,
        type: 'modular_content',
        snippetCodename: undefined,
      },

      /**
       * Description (rich_text)
       */
      description: {
        codename: 'description',
        id: '3b7b74e2-876f-48d8-a340-071a060c3bd8',
        externalId: undefined,
        name: 'Description',
        required: true,
        type: 'rich_text',
        snippetCodename: undefined,
      },

      /**
       * End Date (date_time)
       */
      end_date: {
        codename: 'end_date',
        id: '29e62336-235b-4f5a-a26c-fb94c8d07435',
        externalId: undefined,
        name: 'End Date',
        required: true,
        type: 'date_time',
        snippetCodename: undefined,
      },

      /**
       * Image (asset)
       */
      image: {
        codename: 'image',
        id: '0a6d08f6-f55d-41c5-b61c-63ac1620286a',
        externalId: undefined,
        name: 'Image',
        required: false,
        type: 'asset',
        snippetCodename: undefined,
      },

      /**
       * Maximum Occupancy (number)
       */
      maximum_occupancy: {
        codename: 'maximum_occupancy',
        id: '24006848-f463-430c-84ff-2a741d89fdcb',
        externalId: undefined,
        name: 'Maximum Occupancy',
        required: false,
        type: 'number',
        snippetCodename: undefined,
      },

      /**
       * Name (text)
       */
      name: {
        codename: 'name',
        id: 'bd58d467-5b91-48ad-b298-26f67e9cadaa',
        externalId: undefined,
        name: 'Name',
        required: true,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Start Date (date_time)
       */
      start_date: {
        codename: 'start_date',
        id: '6c3e9c32-f304-4b0d-9b46-5cad3fe84226',
        externalId: undefined,
        name: 'Start Date',
        required: true,
        type: 'date_time',
        snippetCodename: undefined,
      },
    },
  },

  /**
   * Feature
   */
  feature: {
    codename: 'feature',
    id: 'db521a37-38fc-4e3e-b0fe-3f36c96733e4',
    externalId: undefined,
    name: 'Feature',
    elements: {
      /**
       * Description (rich_text)
       */
      description: {
        codename: 'description',
        id: 'a3b00a66-f472-432c-af6d-787c27b6a6b9',
        externalId: undefined,
        name: 'Description',
        required: false,
        type: 'rich_text',
        snippetCodename: undefined,
      },

      /**
       * Name (text)
       */
      name: {
        codename: 'name',
        id: 'b2ad6d9d-ea77-4ae3-bc23-62e4a5e8d8a2',
        externalId: undefined,
        name: 'Name',
        required: true,
        type: 'text',
        snippetCodename: undefined,
      },
    },
  },

  /**
   * Homepage
   */
  homepage: {
    codename: 'homepage',
    id: '6e8dacb9-5fe7-4d22-8028-b70ece4cc713',
    externalId: undefined,
    name: 'Homepage',
    elements: {
      /**
       * Carousel (asset)
       */
      carousel: {
        codename: 'carousel',
        id: '922ec97c-9e60-4edd-bc69-1ab1ef00b8f8',
        externalId: undefined,
        name: 'Carousel',
        required: true,
        type: 'asset',
        snippetCodename: undefined,
      },

      /**
       * Content (modular_content)
       */
      content: {
        codename: 'content',
        id: 'c0a816ba-86fa-470a-97bb-85033e647057',
        externalId: undefined,
        name: 'Content',
        required: false,
        type: 'modular_content',
        snippetCodename: undefined,
      },

      /**
       * Featured Content (modular_content)
       */
      featured_content: {
        codename: 'featured_content',
        id: '634d629f-0a07-419a-89d2-cf65b1233bb7',
        externalId: undefined,
        name: 'Featured Content',
        required: false,
        type: 'modular_content',
        snippetCodename: undefined,
      },

      /**
       * Subpages (subpages)
       */
      subpages: {
        codename: 'subpages',
        id: '18b3f10a-0dfd-440e-9d9e-1a0002568aa7',
        externalId: undefined,
        name: 'Subpages',
        required: false,
        type: 'subpages',
        snippetCodename: undefined,
      },

      /**
       * Title (text)
       */
      title: {
        codename: 'title',
        id: 'c70b536e-7c95-4d93-81ca-aa1197ca5186',
        externalId: undefined,
        name: 'Title',
        required: false,
        type: 'text',
        snippetCodename: undefined,
      },
    },
  },

  /**
   * Organization
   */
  organization: {
    codename: 'organization',
    id: '03d4d525-3e70-4006-a33f-2e21e93c8850',
    externalId: undefined,
    name: 'Organization',
    elements: {
      /**
       * Description (rich_text)
       */
      description: {
        codename: 'description',
        id: 'f4ff9266-6803-47e5-8257-f11e9be1b788',
        externalId: undefined,
        name: 'Description',
        required: false,
        type: 'rich_text',
        snippetCodename: undefined,
      },

      /**
       * Name (text)
       */
      name: {
        codename: 'name',
        id: '6e8c26e6-3e3c-4462-b1cc-8725a32367e4',
        externalId: undefined,
        name: 'Name',
        required: true,
        type: 'text',
        snippetCodename: undefined,
      },
    },
  },

  /**
   * Page
   */
  page: {
    codename: 'page',
    id: '15f22899-b65b-46d9-a037-eee241aabdbc',
    externalId: undefined,
    name: 'Page',
    elements: {
      /**
       * Banner (asset)
       */
      banner: {
        codename: 'banner',
        id: 'a67d3a11-a581-4bc7-a780-48eed1d0feb5',
        externalId: undefined,
        name: 'Banner',
        required: true,
        type: 'asset',
        snippetCodename: undefined,
      },

      /**
       * Content (modular_content)
       */
      content: {
        codename: 'content',
        id: '6667a33b-8ef4-4a2d-98df-09f657cb26c7',
        externalId: undefined,
        name: 'Content',
        required: false,
        type: 'modular_content',
        snippetCodename: undefined,
      },

      /**
       * Show in navigation (multiple_choice)
       */
      show_in_navigation: {
        codename: 'show_in_navigation',
        id: 'b678f21c-cf98-462d-9a91-bcf191e1d639',
        externalId: undefined,
        name: 'Show in navigation',
        required: true,
        type: 'multiple_choice',
        snippetCodename: undefined,
      },

      /**
       * Subpages (subpages)
       */
      subpages: {
        codename: 'subpages',
        id: 'a5ae556e-fdbe-423d-b0bd-3d5099d3a573',
        externalId: undefined,
        name: 'Subpages',
        required: false,
        type: 'subpages',
        snippetCodename: undefined,
      },

      /**
       * Title (text)
       */
      title: {
        codename: 'title',
        id: 'e3dce93e-d4ef-47d7-ab59-4d6571efdb4a',
        externalId: undefined,
        name: 'Title',
        required: true,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * URL (url_slug)
       */
      url: {
        codename: 'url',
        id: '6af08ca0-8a0a-42b2-bd72-25404dbd5c88',
        externalId: undefined,
        name: 'URL',
        required: true,
        type: 'url_slug',
        snippetCodename: undefined,
      },
    },
  },

  /**
   * Person
   */
  person: {
    codename: 'person',
    id: '85da5d42-f39f-4bc2-9583-3c1f1a49d228',
    externalId: undefined,
    name: 'Person',
    elements: {
      /**
       * Bio (rich_text)
       */
      bio: {
        codename: 'bio',
        id: 'd0e4561f-fe52-4e4e-95dd-02bd9f24e127',
        externalId: undefined,
        name: 'Bio',
        required: false,
        type: 'rich_text',
        snippetCodename: undefined,
      },

      /**
       * First Name (text)
       */
      first_name: {
        codename: 'first_name',
        id: '57513cbd-0bf5-40bf-ac4f-f3045f32f139',
        externalId: undefined,
        name: 'First Name',
        required: true,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Last Name (text)
       */
      last_name: {
        codename: 'last_name',
        id: 'af4a9559-da58-415a-b211-6d91297e5d3c',
        externalId: undefined,
        name: 'Last Name',
        required: true,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Photo (asset)
       */
      photo: {
        codename: 'photo',
        id: 'd837a85d-e2b4-4151-b1a3-1464f8552e85',
        externalId: undefined,
        name: 'Photo',
        required: false,
        type: 'asset',
        snippetCodename: undefined,
      },

      /**
       * Title (text)
       */
      title: {
        codename: 'title',
        id: 'eed6aa3d-696a-49d6-bd6a-4c80ea3cc3cf',
        externalId: undefined,
        name: 'Title',
        required: false,
        type: 'text',
        snippetCodename: undefined,
      },
    },
  },

  /**
   * Post
   */
  post: {
    codename: 'post',
    id: '12423a46-42eb-4efe-9556-ba4e56b29b0c',
    externalId: undefined,
    name: 'Post',
    elements: {
      /**
       * Author (modular_content)
       */
      author: {
        codename: 'author',
        id: 'df669d78-1a6b-4721-9adb-b67bdc458fac',
        externalId: undefined,
        name: 'Author',
        required: true,
        type: 'modular_content',
        snippetCodename: undefined,
      },

      /**
       * Body (rich_text)
       */
      body: {
        codename: 'body',
        id: '6488d1eb-a975-42dd-bc15-84082b4d9311',
        externalId: undefined,
        name: 'Body',
        required: true,
        type: 'rich_text',
        snippetCodename: undefined,
      },

      /**
       * Image (asset)
       */
      image: {
        codename: 'image',
        id: '51daa882-ad1f-4ee0-99ed-9124080680b4',
        externalId: undefined,
        name: 'Image',
        required: true,
        type: 'asset',
        snippetCodename: undefined,
      },

      /**
       * Related Posts (modular_content)
       */
      related_posts: {
        codename: 'related_posts',
        id: 'e6037a04-af99-4268-864e-5a27193062c1',
        externalId: undefined,
        name: 'Related Posts',
        required: false,
        type: 'modular_content',
        snippetCodename: undefined,
      },

      /**
       * Title (text)
       */
      title: {
        codename: 'title',
        id: '9190e7f2-ca0d-48a3-90c9-5703620a5f1a',
        externalId: undefined,
        name: 'Title',
        required: true,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * URL (url_slug)
       */
      url: {
        codename: 'url',
        id: '8ed312e9-9142-47c3-afe2-12dbfd5b60d4',
        externalId: undefined,
        name: 'URL',
        required: true,
        type: 'url_slug',
        snippetCodename: undefined,
      },
    },
  },

  /**
   * Service
   */
  service: {
    codename: 'service',
    id: '7ea8b19f-a223-41b1-a549-653ab273d46a',
    externalId: undefined,
    name: 'Service',
    elements: {
      /**
       * Description (rich_text)
       */
      description: {
        codename: 'description',
        id: '980f572a-13d7-4ead-b8a3-97f2ced7f48d',
        externalId: undefined,
        name: 'Description',
        required: false,
        type: 'rich_text',
        snippetCodename: undefined,
      },

      /**
       * Features (modular_content)
       */
      features: {
        codename: 'features',
        id: '0e98b588-1ac0-4d6e-9abf-7b4e629a6da8',
        externalId: undefined,
        name: 'Features',
        required: false,
        type: 'modular_content',
        snippetCodename: undefined,
      },

      /**
       * Name (text)
       */
      name: {
        codename: 'name',
        id: '782f6e16-52c3-47ed-b5da-983b3b84f225',
        externalId: undefined,
        name: 'Name',
        required: true,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Price (number)
       */
      price: {
        codename: 'price',
        id: 'a60fd5c4-d6ef-45a5-a4d3-ec1fe5e30f2c',
        externalId: undefined,
        name: 'Price',
        required: true,
        type: 'number',
        snippetCodename: undefined,
      },
    },
  },

  /**
   * Video
   */
  video: {
    codename: 'video',
    id: '2c1b7988-a914-45c4-9ace-fb459c417bce',
    externalId: undefined,
    name: 'Video',
    elements: {
      /**
       * Caption (text)
       */
      caption: {
        codename: 'caption',
        id: '4cf1300a-d906-41ca-b918-afaf512baab9',
        externalId: undefined,
        name: 'Caption',
        required: false,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Video ID (text)
       */
      video_id: {
        codename: 'video_id',
        id: '5ce9e6a0-57dc-4c22-b499-ac97e8f1a597',
        externalId: undefined,
        name: 'Video ID',
        required: true,
        type: 'text',
        snippetCodename: undefined,
      },

      /**
       * Video Service (multiple_choice)
       */
      video_service: {
        codename: 'video_service',
        id: 'd866d1f1-9200-4ef6-bced-5332974b56d5',
        externalId: undefined,
        name: 'Video Service',
        required: true,
        type: 'multiple_choice',
        snippetCodename: undefined,
      },
    },
  },
} as const;