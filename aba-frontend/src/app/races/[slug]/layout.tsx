import React from 'react';
import {prefetchQueries} from "@/lib/utils/queryHelpers";
import {getRace} from "@/api/racesApi";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";

export async function generateMetadata({ params }) {
	const decodedTitle = decodeURIComponent(params.slug).replace('-', ' ');
	const capitalizedTitle = decodedTitle
		.split(' ')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		.join(' ');
	return {
		title: `${capitalizedTitle} | News - Ace Battle Association`,
		description: `Get the latest insights on ${capitalizedTitle} from the Ace Battle Association. Stay updated with current events, team highlights, and exclusive news in the world of competitive team running.`,
	};
}

const Layout = async ({params, children}: {params: {slug: string}, children: React.ReactNode}) => {
	const queryClient = await prefetchQueries([{key: ['races', params.slug], fetchFn:() => getRace(params.slug)}])

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			{children}
		</HydrationBoundary>
	);
};

export default Layout;