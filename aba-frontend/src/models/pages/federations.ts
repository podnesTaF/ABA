import {Hero} from "@/models/shared/hero";
import {InfoSection} from "@/models/shared/infoSection";

export type FederationsPage = {
	id: number;
	documentId: string;
	title: string;
	link: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string | null;
	hero: Hero;
	aboutABA: InfoSection;
	federationHead: InfoSection;
}