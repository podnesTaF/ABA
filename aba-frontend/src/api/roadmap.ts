import api from "@/api/apiInstance";
import {Roadmap} from "@/models/pages/roadmap";

export const getRoadmap = async (): Promise<Roadmap> => {
	const {data} = await api.get<{data:Roadmap}>('/roadmap?populate[milestones][populate]=*&populate[hero][populate]=*')
	return data.data
}