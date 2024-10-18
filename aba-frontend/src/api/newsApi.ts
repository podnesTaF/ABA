import api from "@/api/apiInstance";
import {createMediaBriefQuery} from "@/lib/utils/queryHelpers";
import {TNewsPage} from "@/models/pages/news";
import {Article,ArticleResponse} from "@/models/pages/article";

export const getNewsPreviews = async (count?: number): Promise<ArticleResponse> => {
	const {data} = await api.get<ArticleResponse>(`/articles?${createMediaBriefQuery("previewImage")}&populate[newsCategories]=*&=*${count ? "pagination[pageSize]=" + count : ''}`)

	return data
}

export const getNewsPage = async (): Promise<TNewsPage> => {
	const {data} = await api.get<{data: TNewsPage}>('/news-page?populate[hero][populate][backgroundImage][populate]&populate[hero][populate][articles][populate]=*&populate[categories][populate]')
	return data.data
}

export const getArticle = async (slug: string): Promise<Article> => {
	const {data} = await api.get<{data: Article[]}>(`/articles?filters[slug][$eq]=${slug}&populate[previewImage][populate]=*&populate[newsCategories][populate]&populate[content][on][content-block.text]=&populate[content][on][content-block.image-block][populate][image][populate]=*`)

	return data.data[0]
}