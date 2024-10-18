import {Media} from "@/models/shared/media";

export type ContentBlockText = {
	__component: string;
	id: number;
	text: string;
};

export type ContentBlockMedia = {
	__component: string;
	id: number;
	image: Media;
}
export type ContentBlock = ContentBlockMedia | ContentBlockText