import React from 'react';
import {prefetchQueries} from "@/lib/utils/queryHelpers";
import {getNewsPage, getNewsPreviews} from "@/api/newsApi";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";

export const metadata = {
	title: "News & Updates | Ace Battle Association",
	description: "Stay informed with the latest news, event updates, and announcements from the Ace Battle Association. Get insights into upcoming team running events, federation highlights, and key developments in competitive sports.",
};

const Layout = async ({children}: {children: React.ReactNode}) => {
	const qc = await prefetchQueries([{key: ['news'], fetchFn:() => getNewsPreviews({})}, {key:['newsPage'], fetchFn: getNewsPage}])

	return (
		<HydrationBoundary state={dehydrate(qc)}>
			{children}
		</HydrationBoundary>
	);
};

export default Layout;