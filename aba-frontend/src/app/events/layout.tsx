import React from 'react';
import {prefetchQueries} from "@/lib/utils/queryHelpers";
import {getTournamentsPage} from "@/api/tournaments";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import {getNewsPreviews} from "@/api/newsApi";

export const metadata = {
	title: "Events | Ace Battle Association",
	description: "Learn about different type of events within Ace Battle. Explore Ratings, Tournaments (Maces) and Leagues",
};

const Layout = async ({children}: {children: React.ReactNode}) => {
	const queryClient = await prefetchQueries([{key: ['tournaments'], fetchFn:getTournamentsPage},  {key: ['articles'], fetchFn: () => getNewsPreviews({count:3})}])

	return (
	<HydrationBoundary state={dehydrate(queryClient)}>
		{children}
		</HydrationBoundary>
	);
};

export default Layout;