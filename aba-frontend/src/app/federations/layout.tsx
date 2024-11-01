import React from 'react';
import {prefetchQueries} from "@/lib/utils/queryHelpers";
import {getFederations, getFederationsPage} from "@/api/federationApi";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";

export const metadata = {
	title: "Ace Battle Federations - National Team Running Federations",
	description: "Discover the Ace Battle Federations, the driving force behind dynamic international team running events. Learn about our mission to unite athletes, foster teamwork, and host competitive races across global federations. Join a movement that celebrates resilience, inclusivity, and excellence in team running sports.",
};

const Layout = async ({children}: {children: React.ReactNode}) => {
	const queryClient = await prefetchQueries([{key: ['federations-page'], fetchFn: getFederationsPage}, {key: ['federations', ""], fetchFn: () => getFederations({})}])


	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			{children}
		</HydrationBoundary>
	);
};

export default Layout;