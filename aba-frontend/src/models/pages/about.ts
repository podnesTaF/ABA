import {Hero} from "@/models/shared/hero";
import {InfoSection} from "@/models/shared/infoSection";
import {CoreValue} from "@/models/shared/coreValue";
import {Media} from "@/models/shared/media";
import {Person} from "@/models/shared/person";
import {Meta} from "@/models/shared/meta";

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
		missions: InfoSection[];
		values: CoreValue[];
		differences: InfoSection;
		history: InfoSection;
		structure: Structure;
		legal: Legal;
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