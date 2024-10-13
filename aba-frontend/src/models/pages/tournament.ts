import {LinkSection} from "@/models/shared/link";
import {Hero} from "@/models/shared/hero";
import {Article} from "@/models/shared/article";


export type TournamentsPage = {
	id: number;
	documentId: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string | null;
	hero: Hero;
	news?: Article[];
	tournaments: Tournament[];
}

export type Tournament = {
	id: number;
	documentId: string;
	title: string;
	description: string
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string | null;
	slug: string;
	features: LinkSection;
	purpose: LinkSection;
};