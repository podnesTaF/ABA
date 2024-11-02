import {Hero} from "@/models/shared/hero";
import {InfoSection} from "@/models/shared/infoSection";
import {CoreValue} from "@/models/shared/coreValue";
import {Media} from "@/models/shared/media";
import {Person} from "@/models/shared/person";
import {Meta} from "@/models/shared/meta";
import {Form} from "@/models/shared/form";
import {ContentBlockMedia, ContentBlockText} from "@/models/shared/blocks";

export type AboutResponse = {
	data: AboutPage,
	meta: Meta
}

export type AboutPage = {
		id: number;
		documentId: string;
		title: string;
		link: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		locale: string | null;
		hero: Hero;
		about: (ContentBlockText | ContentBlockMedia)[]
		missions: InfoSection[];
		values: SectionValues;
		differences: InfoSection;
		history: InfoSection;
		structure: Structure;
		legal: Legal;
		contact: Form
};


export type Legal = {
	id: number;
	title: string;
	description: string;
	documents: Media[];
};

export type Structure = {
	id: number;
	title: string;
	people: Person[];
};

export type SectionValues = {
	id: number;
	title: string;
	coreValues: CoreValue[]
}