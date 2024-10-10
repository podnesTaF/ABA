import api from "@/api/apiInstance";
import {HomePageData, RequestHomePageData} from "@/models/pages/home";

export const getHomeContent = async (): Promise<HomePageData> => {
	const {data} = await api.get<RequestHomePageData>(`/home-page?populate[hero][populate]=*&populate[aboutAB][populate]=*&populate[federations][populate]=*&populate[federations][ctaButton][populate]&populate[recentNews][populate]=*&populate[aboutABA][populate]=*`);

	return data.data
}