import {Media} from "@/models/shared/media";
import {CTAButton} from "@/models/shared/cta";
import {CoreValue} from "@/models/shared/coreValue";
import {Federations} from "@/models/shared/federation";

export interface RequestHomePageData {
	data: HomePageData;
	meta: Record<string, unknown>;
}

export interface HomePageData {
	id: number;
	documentId: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string | null;
	hero: HomeHero;
	aboutAB: AboutAB;
	federations: Federations;
	recentNews: RecentNews;
	aboutABA: AboutABA[];
}

export interface HomeHero {
	id: number;
	title: string;
	description: string;
	backgroundImage: Media;
	ctaButton: CTAButton;
}

export interface AboutAB {
	id: number;
	title: string;
	description: string;
	sectionTitle: string;
	ctaButton: CTAButton;
	sideImage: Media;
	coreValues: CoreValue[];
}

export interface RecentNews {
	id: number;
	sectionTitle: string;
	media: Media
}

export interface AboutABA {
	id: number;
	title: string;
	description: string;
	media: Media;
	ctaButton: CTAButton;
}

export interface FederationsHome {
	id: number;
	title: string;
	associationDescription: string;
	associationMedia: Media;
	ctaButton: CTAButton
}