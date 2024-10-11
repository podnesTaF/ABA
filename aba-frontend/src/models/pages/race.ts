
import {Hero} from "@/models/shared/hero";
import type {InfoSection} from "@/models/shared/infoSection";
import {Meta} from "@/models/shared/meta";

export type RacesPageResponse = {
	data: RacesPage
	meta: Meta
}

export type RacesPage = {
	id: number;
	documentId: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string | null;
	races: Race[];
	hero: Hero;
}

export type Race = {
	id: number;
	documentId: string;
	slug: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string | null;
	sequence: number;
	hero: Hero;
	rules: InfoSection;
	categoryPreview: InfoSection;
	categories: InfoSection[];
	ranking: InfoSection;
}