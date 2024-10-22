import React from 'react';
import {prefetchQueries} from "@/lib/utils/queryHelpers";
import {getFederations, getFederationsPage} from "@/api/federationApi";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";

const Layout = async ({children}: {children: React.ReactNode}) => {
	const queryClient = await prefetchQueries([{key: ['federations-page'], fetchFn: getFederationsPage}, {key: ['federations', ""], fetchFn: () => getFederations({})}])


	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			{children}
		</HydrationBoundary>
	);
};

export default Layout;