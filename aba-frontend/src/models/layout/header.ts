import {Media} from "@/models/shared/media";
import {ExternalLink, PrimaryLink} from "@/models/shared/link";

export type HeaderData = {
	id: number;
	documentId: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string | null;
	smallLogo: Media;
	largeLogo: Media;
	socialMedias: ExternalLink[];
	primaryLinks: PrimaryLink[];
};
