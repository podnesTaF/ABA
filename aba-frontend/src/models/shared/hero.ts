import {Link} from "@/models/shared/link";
import {Media} from "@/models/shared/media";
import {Article} from "@/models/pages/article";

export type Hero = {
	id: number;
	title: string;
	backgroundImage: Media;
	links: Link[];
	articles: Article[];
};