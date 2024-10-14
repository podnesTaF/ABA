import {LinkSection} from "@/models/shared/link";
import {Hero} from "@/models/shared/hero";
import {Article} from "@/models/shared/article";
import {Media} from "@/models/shared/media";
import NewsPreview from "@/components/shared/NewsPreview";
import {RecentNews} from "@/models/pages/home";


export type TournamentsPage = {
	id: number;
	documentId: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string | null;
	hero: Hero;
	news?: RecentNews;
	tournaments: Tournament[];
}

export type Tournament = {
	id: number;
	documentId: string;

	about: {
		id: number;
		title: string;
		description: string
		media: Media
	}
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string | null;
	slug: string;
	features: LinkSection;
	purpose: LinkSection;
};