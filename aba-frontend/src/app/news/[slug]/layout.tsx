import React from 'react';
import {prefetchQueries} from "@/lib/utils/queryHelpers";
import {getArticle} from "@/api/newsApi";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";

const Layout = async ({params: {slug}, children}: {params: {slug: string}, children: React.ReactNode}) => {
	const qc = await prefetchQueries([{key: ['article', slug], fetchFn:()=> getArticle(slug)}])
	return (
		<HydrationBoundary state={dehydrate(qc)}>
			{children}
		</HydrationBoundary>
	);
};

export default Layout;