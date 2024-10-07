import {Media} from "@/models/shared/media";

export type PrimaryLink = {
    id: number;
    title: string;
    link: string;
    icon: string | null;
    secondaryLinks: Link[];
};

export type Link = {
    id: number;
    title: string;
    link: string;
    icon: string | null;
};

export interface ExternalLink {
    id: number;
    documentId: string;
    name: string;
    link: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
    icon: Media;
    localizations: any[];
}