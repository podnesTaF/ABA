import {InfoSection} from "@/models/shared/infoSection";
import {Link} from "@/models/shared/link";
import {Meta} from "@/models/shared/meta";

export type Footer = {
	id: number;
	documentId: string;
	copyright: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string | null;
	contactDetails: InfoSection[];
	links: Link[];
}

export type FooterResponse = {
	data: Footer,
	meta: Meta
}