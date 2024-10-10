import api from "@/api/apiInstance";
import {createMediaBriefQuery} from "@/lib/utils/queryHelpers";
import {ArticleResponse} from "@/models/shared/article";

export const getNewsPreviews = async (count?: number): Promise<ArticleResponse> => {
	const {data} = await api.get<ArticleResponse>(`/articles?${createMediaBriefQuery("previewImage")}&populate[newsCategories]=*&=*${count ? "pagination[pageSize]=" + count : ''}`)

	return data
}