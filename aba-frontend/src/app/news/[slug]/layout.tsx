import React from 'react';
import {prefetchQueries} from "@/lib/utils/queryHelpers";
import {getArticle} from "@/api/newsApi";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";

export async function generateMetadata({ params }) {
	return {
		title: `${params.slug} - Ace Battle Mile`,
		description: `Learn about ${params.slug} in the Ace Battle Association.`,
	};
}

const Layout = async ({params: {slug}, children}: {params: {slug: string}, children: React.ReactNode}) => {
	const qc = await prefetchQueries([{key: ['article', slug], fetchFn:()=> getArticle(slug)}])
	return (
		<HydrationBoundary state={dehydrate(qc)}>
			{children}
		</HydrationBoundary>
	);
};

export default Layout;