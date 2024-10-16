import {Hero} from "@/models/shared/hero";

export type TNewsPage = {
	id: number;
	documentId: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string | null;
	sequence: number;
	hero: Hero;
	categories: NewsCategory[]
}

export type NewsCategory = {
	id: number;
	name: string
}