import type { Struct, Schema } from '@strapi/strapi';

export interface ContentBlockText extends Struct.ComponentSchema {
  collectionName: 'components_content_block_texts';
  info: {
    displayName: 'Text';
  };
  attributes: {
    Text: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

export interface ContentBlockImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_block_image_blocks';
  info: {
    displayName: 'Image Block';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content-block.text': ContentBlockText;
      'content-block.image-block': ContentBlockImageBlock;
    }
  }
}
