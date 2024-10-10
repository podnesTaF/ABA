import api from "@/api/apiInstance";
import {AboutPage, AboutResponse} from "@/models/pages/about";

export const getAboutPage = async (): Promise<AboutPage> => {
	const {data} = await api.get<AboutResponse>('/about-page?populate[hero][populate]=*&populate[missions][populate]=*&populate[values][populate]=*&populate[differences]=*&populate[history][populate]=*&populate[structure][populate][people][populate]=*&&populate[legal][populate]=*')
	return data.data
}