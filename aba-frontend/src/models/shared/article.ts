import {Media} from "@/models/shared/media";
import {Meta} from "@/models/shared/meta";

export interface ArticleResponse {
	data: Article[];
	meta: Meta;
}

export interface Article {
	id: number;
	documentId: string;
	title: string;
	Excerpt: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string | null;
	previewImage: Media;
	newsCategories: NewsCategory[];
}


export interface NewsCategory {
	id: number;
	title: string;
	slug: string;
}

