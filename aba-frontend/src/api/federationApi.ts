import api from "@/api/apiInstance";
import {ArticleResponse} from "@/models/shared/article";
import {createMediaBriefQuery} from "@/lib/utils/queryHelpers";
import {FederationResponse} from "@/models/shared/federation";
import {FederationsPage} from "@/models/pages/federations";
import {Meta} from "@/models/shared/meta";

export const getFederations = async (count?: number): Promise<FederationResponse> => {
	const {data} = await api.get<FederationResponse>(`/federations?populate[location][populate][region][populate]=flag&${createMediaBriefQuery("flag")}&${count ? "pagination[pageSize]=" + count : ''}`)
	return data
}

export const getFederationsPage = async () => {
	const {data} = await api.get<{data: FederationsPage, meta: Meta}>("/federations-page?populate[hero][populate]=*&populate[aboutABA][populate]=*&populate[federationHead][populate]=*")

	return data.data
}