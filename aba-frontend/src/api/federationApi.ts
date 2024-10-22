import api from "@/api/apiInstance";
import {createMediaBriefQuery} from "@/lib/utils/queryHelpers";
import { FederationResponse} from "@/models/shared/federation";
import {FederationsPage} from "@/models/pages/federations";
import {Meta} from "@/models/shared/meta";

export const getFederations = async ({ count, name }: { count?: number, name?: string }): Promise<FederationResponse> => {
	const queryParams: string[]  = [];

	if (count) {
		queryParams.push(`pagination[pageSize]=${count}`);
	}

	if (name) {
		queryParams.push(`filters[$or][0][name][$contains]=${encodeURIComponent(name)}`);
		queryParams.push(`filters[$or][1][region][name][$contains]=${encodeURIComponent(name)}`);
	}

	const queryString = queryParams.length > 0 ? `&${queryParams.join('&')}` : '';

	const { data } = await api.get<FederationResponse>(
		`/federations?populate[region][populate]=flag&${createMediaBriefQuery("logo")}${queryString}`
	);

	return data;
};


export const getFederationsPage = async () => {
	const {data} = await api.get<{data: FederationsPage, meta: Meta}>("/federations-page?populate[hero][populate]=*&populate[aboutABA][populate]=*&populate[federationHead][populate]=*")

	return data.data
}

export const getFederation = async (slug: string) => {
		const {data} = await api.get<FederationResponse>(`/federations?filters[slug][$eq]=${slug}&populate[hero][populate]=*&populate[region][populate]=flag&${createMediaBriefQuery('logo')}&populate[about]=&populate[history][populate]=*&populate[structure][populate]=*&populate[documentSection][populate]=*&populate[details][populate]`)

	return data.data?.[0]
}