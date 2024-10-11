import {Media} from "@/models/shared/media";

export interface CoreValue {
	id: number;
	documentId: string;
	title: string;
	description: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string | null;
	icon: Media
}