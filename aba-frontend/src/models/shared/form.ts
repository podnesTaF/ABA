import {CTAButton} from "@/models/shared/cta";
import {Media} from "@/models/shared/media";

export type Form = {
	id: number;
	title: string;
	fields: FormField[]
	submitBtn: CTAButton;
	sideMedia: Media
}


export type FormField = {
		id: number;
		name: string;
		label: string;
		placeholder: string;
		type: string;
		multiline: boolean | null;
}