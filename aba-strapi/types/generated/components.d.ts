import type { Struct, Schema } from '@strapi/strapi';

export interface SharedLocation extends Struct.ComponentSchema {
  collectionName: 'components_shared_locations';
  info: {
    displayName: 'location';
  };
  attributes: {
    address: Schema.Attribute.String;
    city: Schema.Attribute.String;
    zipCode: Schema.Attribute.String;
    region: Schema.Attribute.String;
  };
}

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

export interface HomeHomePage extends Struct.ComponentSchema {
  collectionName: 'components_home_home_pages';
  info: {
    displayName: 'Hero Section';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    ctaButton: Schema.Attribute.Component<'cta.cta-text', false>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

export interface HomeHomeNews extends Struct.ComponentSchema {
  collectionName: 'components_home_home_news';
  info: {
    displayName: 'home News';
  };
  attributes: {
    sectionTitle: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    ctaButton: Schema.Attribute.Component<'cta.cta-text', false>;
  };
}

export interface HomeAbout2 extends Struct.ComponentSchema {
  collectionName: 'components_home_about2s';
  info: {
    displayName: 'About2';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ctaButton: Schema.Attribute.Component<'cta.cta-text', false>;
  };
}

export interface HomeAboutAb extends Struct.ComponentSchema {
  collectionName: 'components_home_about_abs';
  info: {
    displayName: 'AboutAB';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    ctaButton: Schema.Attribute.Component<'cta.cta-text', false>;
    sideImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    coreValues: Schema.Attribute.Relation<
      'oneToMany',
      'api::core-value.core-value'
    >;
  };
}

export interface CtaCtaText extends Struct.ComponentSchema {
  collectionName: 'components_cta_cta_texts';
  info: {
    displayName: 'CTA Button';
    description: '';
  };
  attributes: {
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.location': SharedLocation;
      'content-block.text': ContentBlockText;
      'content-block.image-block': ContentBlockImageBlock;
      'home.home-page': HomeHomePage;
      'home.home-news': HomeHomeNews;
      'home.about2': HomeAbout2;
      'home.about-ab': HomeAboutAb;
      'cta.cta-text': CtaCtaText;
    }
  }
}
