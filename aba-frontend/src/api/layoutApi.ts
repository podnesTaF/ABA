import api from "@/api/apiInstance";
import {HeaderData, HeaderResponse} from "@/models/shared/link";
import {createMediaBriefQuery} from "@/lib/utils/queryHelpers";

export const getHeader = async (): Promise<HeaderData> => {
    const {data} = await api.get<HeaderResponse>(`/header?populate[socialMedias][populate]=*&populate[primaryLinks][populate]=*&${createMediaBriefQuery("largeLogo")}&${createMediaBriefQuery("smallLogo")}`)

    return data.data
}