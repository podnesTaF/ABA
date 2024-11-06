import {Media} from "@/models/shared/media";
import {Pagination} from "@/models/shared/meta";
import {ContentBlockText} from "@/models/shared/blocks";
import {InfoSection} from "@/models/shared/infoSection";
import {Legal, Structure} from "@/models/pages/about";
import {Hero} from "@/models/shared/hero";
import {InfoField} from "@/models/shared/infoField";

export type Region = {
	id: number;
	name: string;
	flag: Media
}

export type FederationResponse = {
	data: Federation[];
	meta: Pagination
}

export type Federation = {
	id: number;
	documentId: string;
	name: string;
	hero: Hero;
	createdAt: string;
	slug: string;
	updatedAt: string;
	publishedAt: string;
	locale: string | null;
	region: Region;
	details: InfoField[];
	logo: Media;
	about?: ContentBlockText[];
	history?: InfoSection;
	structure?: Structure;
	documentSection?: Legal;
	active: boolean;
};
