import { ContentBlockMedia, ContentBlockText } from "@/models/shared/blocks";
import { Media } from "@/models/shared/media";
import { Meta } from "@/models/shared/meta";

export interface ArticleResponse {
  data: Article[];
  meta: Meta;
}

export interface Article {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  Excerpt: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string | null;
  previewImage: Media;
  newsCategories: NewsCategory[];
  content: (ContentBlockText | ContentBlockMedia)[];
}

export interface NewsCategory {
  id: number;
  name: string;
}
