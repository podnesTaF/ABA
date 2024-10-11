import {Race, RacesPageResponse} from "@/models/pages/race";
import api from "@/api/apiInstance";

export const getRacesPage = async(): Promise<RacesPageResponse> => {
	const {data} = await api.get<RacesPageResponse>("/races-page?populate[races][populate][hero][populate]=backgroundImage&populate[hero][populate]=*")
	return data
}

export const getRace = async (slug: string) => {
	const {data} = await api.get<{data: Race[]}>(`/races?filters[slug][$eq]=${slug}&populate[hero][populate]=*&populate[rules][populate]=*&populate[categoryPreview][populate]=*&populate[categories][populate]=*&populate[ranking][populate]=*`)

	return data?.data[0]
}
