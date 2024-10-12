import api from "@/api/apiInstance";
import {createMediaBriefQuery} from "@/lib/utils/queryHelpers";
import {HeaderData} from "@/models/layout/header";
import {Footer, FooterResponse} from "@/models/layout/footer";

export type HeaderResponse = {
    data: HeaderData;
    meta: Record<string, unknown>;
};

export const getHeader = async (): Promise<HeaderData> => {
    const {data} = await api.get<HeaderResponse>(`/header?populate[socialMedias][populate]=*&populate[primaryLinks][populate]=*&${createMediaBriefQuery("largeLogo")}&${createMediaBriefQuery("smallLogo")}`)

    return data.data
}

export const getFooter = async (): Promise<Footer> => {
    const {data} = await api.get<FooterResponse>(`/footer?populate[contactDetails][populate][externalLinks][populate]=icon&populate[links][populate]=*`);

    return data.data
}