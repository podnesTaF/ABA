import {Link} from "@/models/shared/link";
import {Article} from "@/models/shared/article";
import {Media} from "@/models/shared/media";

export type Hero = {
	id: number;
	title: string;
	backgroundImage: Media;
	links: Link[];
	articles: Article[];
};