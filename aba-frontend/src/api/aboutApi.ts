import api from "@/api/apiInstance";
import {AboutPage, AboutResponse} from "@/models/pages/about";
import {ContactSchema} from "@/models/pages/home";

export const getAboutPage = async (): Promise<AboutPage> => {
	const {data} = await api.get<AboutResponse>('/about-page?populate[hero][populate]=*&populate[missions][populate]=*&populate[values][populate][coreValues][populate]=*&populate[differences]=*&populate[history][populate]=*&populate[structure][populate][people][populate][links][populate]=*&populate[structure][populate][people][populate][image][populate]=*&populate[legal][populate]=*&populate[contact][populate]=*&&populate[about][on][content-block.text]=*&populate[about][on][content-block.image-block][populate][image][populate]=*')
	return data.data
}

export const contactRequest = async (dto: ContactSchema) => {
	const {data} = await api.post("/contact-requests", {data: dto})

	return data
}