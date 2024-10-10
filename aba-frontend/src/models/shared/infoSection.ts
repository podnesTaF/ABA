import {ExternalLink} from "@/models/shared/link";
import {Media} from "@/models/shared/media";
import {CTAButton} from "@/models/shared/cta";

export type InfoSection = {
	id: number;
	title: string;
	description: string | null;
	media: Media;
	ctaButton: CTAButton
	externalLinks: ExternalLink[];
};
