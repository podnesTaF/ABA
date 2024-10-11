import {prefetchQueries} from "@/lib/utils/queryHelpers";
import {getHomeContent} from "@/api/homeApi";
import {getNewsPreviews} from "@/api/newsApi";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import HomeHero from "@/components/home/HomeHero";
import {HomePageData} from "@/models/pages/home";
import { ArticleResponse} from "@/models/shared/article";
import AboutAb from "@/components/home/AboutAB";
import RecentNews from "@/components/home/RecentNews";
import AboutAbaSections from "@/components/home/AboutAbaSections";
import {FederationResponse} from "@/models/shared/federation";
import {getFederations} from "@/api/federationApi";
import Federations from "@/components/home/Federations";

export default async function Home() {
	const queryClient = await prefetchQueries([{key:['home'], fetchFn: getHomeContent }, {key: ['articles'], fetchFn: () => getNewsPreviews(3)}, {key: ['federations'], fetchFn: () => getFederations(4)}])

	const content: HomePageData | undefined = queryClient.getQueryData(['home'])

	const newsPreviews: ArticleResponse | undefined = queryClient.getQueryData(['articles'])

	const federations: FederationResponse | undefined = queryClient.getQueryData(['federations'])

	if(!content || !newsPreviews || !federations) return

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<HomeHero content={content.hero} />
			<AboutAb content={content.aboutAB}/>
			<RecentNews layout={content.recentNews} news={newsPreviews.data} />
			<AboutAbaSections content={content.aboutABA} />
			<Federations  content={content.federations} federations={federations.data} />
		</HydrationBoundary>
	)
}
