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
    icon: Media;
    description?: string
};

export type LinkSection = {
    id: number;
    title: string;
    links: Link[]
}

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
    lightIcon:Media;
    localizations: any[];
}