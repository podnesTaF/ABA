import React from 'react';
import {prefetchQueries} from "@/lib/utils/queryHelpers";
import {getTournamentsPage} from "@/api/tournaments";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";

const Layout = async ({children}: {children: React.ReactNode}) => {
	const queryClient = await prefetchQueries([{key: ['tournaments'], fetchFn:getTournamentsPage}])

	return (
	<HydrationBoundary state={dehydrate(queryClient)}>
		{children}
		</HydrationBoundary>
	);
};

export default Layout;