import api from "@/api/apiInstance";
import {createMediaBriefQuery} from "@/lib/utils/queryHelpers";
import {HeaderData} from "@/models/layout/header";
export type HeaderResponse = {
    data: HeaderData;
    meta: Record<string, unknown>;
};

export const getHeader = async (): Promise<HeaderData> => {
    const {data} = await api.get<HeaderResponse>(`/header?populate[socialMedias][populate]=*&populate[primaryLinks][populate]=*&${createMediaBriefQuery("largeLogo")}&${createMediaBriefQuery("smallLogo")}`)

    return data.data
}