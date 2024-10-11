import React from 'react';
import {prefetchQueries} from "@/lib/utils/queryHelpers";
import {getRacesPage} from "@/api/racesApi";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";

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