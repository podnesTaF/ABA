import {Media} from "@/models/shared/media";

export type ContentBlockText = {
	__component: string;
	id: number;
	Text: string;
};

export type ContentBlockMedia = {
	__component: string;
	id: number;
	Image: Media;
}