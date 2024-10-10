import {Media} from "@/models/shared/media";
import {Pagination} from "@/models/shared/meta";

export type Location = {
	id: number;
	address: string;
	city: string;
	zipCode: string;
	region: Region;
};

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
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string | null;
	location: Location;
	flag: Media;
};