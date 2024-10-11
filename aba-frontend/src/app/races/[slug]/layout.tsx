import React from 'react';
import {prefetchQueries} from "@/lib/utils/queryHelpers";
import {getRace} from "@/api/racesApi";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";

const Layout = async ({params, children}: {params: {slug: string}, children: React.ReactNode}) => {
	const queryClient = await prefetchQueries([{key: ['races', params.slug], fetchFn:() => getRace(params.slug)}])


	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			{children}
		</HydrationBoundary>
	);
};

export default Layout;