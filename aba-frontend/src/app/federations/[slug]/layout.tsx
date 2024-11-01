import React, {ReactNode} from 'react';
import {prefetchQueries} from "@/lib/utils/queryHelpers";
import {getFederation} from "@/api/federationApi";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";

export async function generateMetadata({ params }) {
	const title = params.slug.replace('-', ' ').toUpperCase()
	return {
		title: `${title} Federation - Ace Battle Association`,
		description: `Explore the ${title} Federation within the Ace Battle Association. Discover its role in fostering competitive team running, promoting sportsmanship, and building an inclusive community for athletes of all levels.`,
	};
}

const Layout = async ({children, params: {slug}}: {children: ReactNode,params: {slug: string}}) => {
	const queryClient = await prefetchQueries([{key: ["federation", slug], fetchFn: () => getFederation(slug)}])

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			{children}
		</HydrationBoundary>
	);
};

export default Layout;