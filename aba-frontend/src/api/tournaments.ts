import api from "@/api/apiInstance";
import {TournamentsPage} from "@/models/pages/tournament";

export const getTournamentsPage = async () => {
	const {data} = await api.get<{data: TournamentsPage}>("/tournaments-page?populate[hero][populate]=*&populate[news][populate]=*&populate[tournaments][populate][features][populate]=*&populate[tournaments][populate][purpose][populate]=*&populate[tournaments][populate][about][populate]=*")

	return data.data
}