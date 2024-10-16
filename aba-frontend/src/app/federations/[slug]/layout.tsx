import React, {ReactNode} from 'react';
import {prefetchQueries} from "@/lib/utils/queryHelpers";
import {getFederation} from "@/api/federationApi";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";

const Layout = async ({children, params: {slug}}: {children: ReactNode,params: {slug: string}}) => {
	const queryClient = await prefetchQueries([{key: ["federation", slug], fetchFn: () => getFederation(slug)}])

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			{children}
		</HydrationBoundary>
	);
};

export default Layout;