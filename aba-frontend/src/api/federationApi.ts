import api from "@/api/apiInstance";
import {ArticleResponse} from "@/models/shared/article";
import {createMediaBriefQuery} from "@/lib/utils/queryHelpers";
import {FederationResponse} from "@/models/shared/federation";

export const getFederations = async (count: number): Promise<FederationResponse> => {
	const {data} = await api.get<FederationResponse>(`/federations?populate[location][populate][region][populate]=flag&${createMediaBriefQuery("flag")}&${count ? "pagination[pageSize]=" + count : ''}`)
	return data
}