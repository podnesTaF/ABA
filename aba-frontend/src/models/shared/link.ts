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

export type HeaderData = {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
    primaryLinks: PrimaryLink[];
};

export type HeaderResponse = {
    data: HeaderData;
    meta: Record<string, unknown>;
};