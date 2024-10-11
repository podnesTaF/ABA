export type MediaFormat = {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	path: string | null;
	width: number;
	height: number;
	size: number;
	sizeInBytes: number;
	url: string;
};


export type Media = {
	id: number;
	documentId: string;
	name: string;
	alternativeText: string | null;
	caption: string | null;
	width: number;
	height: number;
	formats?: {
		thumbnail?: MediaFormat;
		large?: MediaFormat;
	};
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: string | null;
	provider: string;
	provider_metadata: Record<string, unknown> | null;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	locale: string | null;
};