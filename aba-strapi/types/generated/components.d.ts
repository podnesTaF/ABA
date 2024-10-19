import type { Struct, Schema } from '@strapi/strapi';

export interface TournamentsOverview extends Struct.ComponentSchema {
  collectionName: 'components_tournaments_overviews';
  info: {
    displayName: 'Overview';
  };
  attributes: {
    mainArticle: Schema.Attribute.Component<'shared.base-info-section', false>;
    features: Schema.Attribute.Component<'shared.base-info-section', true>;
    matters: Schema.Attribute.Component<'shared.base-info-section', true>;
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
    description: '';
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
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface HomeFederations extends Struct.ComponentSchema {
  collectionName: 'components_home_federations';
  info: {
    displayName: 'Federations';
  };
  attributes: {
    title: Schema.Attribute.String;
    ctaButton: Schema.Attribute.Component<'cta.cta-text', false>;
    associationMedia: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    associationDescription: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
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
    sectionTitle: Schema.Attribute.String;
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
    title: Schema.Attribute.String;
  };
}

export interface SharedTextField extends Struct.ComponentSchema {
  collectionName: 'components_shared_text_fields';
  info: {
    displayName: 'text field';
    description: '';
  };
  attributes: {
    label: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['email', 'password', 'text', 'number']>;
    multiline: Schema.Attribute.Boolean;
    name: Schema.Attribute.String;
  };
}

export interface SharedPrimaryLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_primary_links';
  info: {
    displayName: 'PrimaryLink';
  };
  attributes: {
    title: Schema.Attribute.String;
    link: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    secondaryLinks: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedLocation extends Struct.ComponentSchema {
  collectionName: 'components_shared_locations';
  info: {
    displayName: 'location';
    description: '';
  };
  attributes: {
    address: Schema.Attribute.String;
    city: Schema.Attribute.String;
    zipCode: Schema.Attribute.String;
    region: Schema.Attribute.Relation<'oneToOne', 'api::region.region'>;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    displayName: 'link';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    link: Schema.Attribute.String;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

export interface SharedLinkSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_link_sections';
  info: {
    displayName: 'Link Section';
  };
  attributes: {
    title: Schema.Attribute.String;
    links: Schema.Attribute.Component<'shared.link', true>;
  };
}

export interface SharedInfoField extends Struct.ComponentSchema {
  collectionName: 'components_shared_info_fields';
  info: {
    displayName: 'InfoField';
  };
  attributes: {
    name: Schema.Attribute.String;
    value: Schema.Attribute.String;
    link: Schema.Attribute.String;
  };
}

export interface SharedHero extends Struct.ComponentSchema {
  collectionName: 'components_shared_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    backgroundImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    links: Schema.Attribute.Component<'shared.link', true>;
    articles: Schema.Attribute.Relation<'oneToMany', 'api::article.article'>;
  };
}

export interface SharedForm extends Struct.ComponentSchema {
  collectionName: 'components_shared_forms';
  info: {
    displayName: 'form';
  };
  attributes: {
    title: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    fields: Schema.Attribute.Component<'shared.text-field', true>;
    submitBtn: Schema.Attribute.Component<'cta.cta-text', false>;
    sideMedia: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SharedFooter extends Struct.ComponentSchema {
  collectionName: 'components_shared_footers';
  info: {
    displayName: 'Footer';
  };
  attributes: {
    socialMedias: Schema.Attribute.Relation<
      'oneToMany',
      'api::external-link.external-link'
    >;
    contentDetails: Schema.Attribute.Component<
      'shared.base-info-section',
      true
    >;
    links: Schema.Attribute.Component<'cta.cta-text', true>;
    copyright: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
  };
}

export interface SharedDocumentSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_document_sections';
  info: {
    displayName: 'Document Section';
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
    documents: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedBaseInfoSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_base_info_sections';
  info: {
    displayName: 'baseInfoSection';
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
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    ctaButton: Schema.Attribute.Component<'cta.cta-text', false>;
    externalLinks: Schema.Attribute.Relation<
      'oneToMany',
      'api::external-link.external-link'
    >;
  };
}

export interface FedirationsStructure extends Struct.ComponentSchema {
  collectionName: 'components_fedirations_structures';
  info: {
    displayName: 'Structure';
  };
  attributes: {
    title: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    people: Schema.Attribute.Relation<'oneToMany', 'api::person.person'>;
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

export interface ContentBlockText extends Struct.ComponentSchema {
  collectionName: 'components_content_block_texts';
  info: {
    displayName: 'Text';
    description: '';
  };
  attributes: {
    text: Schema.Attribute.RichText &
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
    description: '';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface AboutValues extends Struct.ComponentSchema {
  collectionName: 'components_about_values';
  info: {
    displayName: 'Values';
  };
  attributes: {
    title: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'default';
        }
      >;
    coreValues: Schema.Attribute.Relation<
      'oneToMany',
      'api::core-value.core-value'
    >;
  };
}

export interface AboutStructure extends Struct.ComponentSchema {
  collectionName: 'components_about_structures';
  info: {
    displayName: 'Structure';
  };
  attributes: {
    title: Schema.Attribute.String;
    people: Schema.Attribute.Relation<'oneToMany', 'api::person.person'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'tournaments.overview': TournamentsOverview;
      'home.home-page': HomeHomePage;
      'home.home-news': HomeHomeNews;
      'home.federations': HomeFederations;
      'home.about2': HomeAbout2;
      'home.about-ab': HomeAboutAb;
      'shared.text-field': SharedTextField;
      'shared.primary-link': SharedPrimaryLink;
      'shared.location': SharedLocation;
      'shared.link': SharedLink;
      'shared.link-section': SharedLinkSection;
      'shared.info-field': SharedInfoField;
      'shared.hero': SharedHero;
      'shared.form': SharedForm;
      'shared.footer': SharedFooter;
      'shared.document-section': SharedDocumentSection;
      'shared.base-info-section': SharedBaseInfoSection;
      'fedirations.structure': FedirationsStructure;
      'cta.cta-text': CtaCtaText;
      'content-block.text': ContentBlockText;
      'content-block.image-block': ContentBlockImageBlock;
      'about.values': AboutValues;
      'about.structure': AboutStructure;
    }
  }
}
