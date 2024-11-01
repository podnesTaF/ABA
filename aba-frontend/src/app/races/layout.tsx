import React from 'react';
import {prefetchQueries} from "@/lib/utils/queryHelpers";
import {getRacesPage} from "@/api/racesApi";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";


export const metadata = {
	title: "Races | Ace Battle Association ",
	description: "Ace Battle Association presents multiple type of team races.",
};

const Layout = async (
	{
		children
	}: {
		children: React.ReactNode
	}
) => {
	const queryClient = await prefetchQueries([{key: ['races'], fetchFn: getRacesPage}])



	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			{children}
		</HydrationBoundary>
	);
};

export default Layout;