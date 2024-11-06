import {Media} from "@/models/shared/media";
import {Link} from "@/models/shared/link";

export type Person = {
	id: number;
	documentId: string;
	fullName: string;
	role: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string | null;
	image: Media;
	cite: string;
	description: string;
	links: Link[];
	localizations: any[];
};