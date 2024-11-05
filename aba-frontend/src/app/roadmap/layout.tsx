import React from 'react';
import {prefetchQueries} from "@/lib/utils/queryHelpers";
import {getRoadmap} from "@/api/roadmap";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";

const Layout = async ({children}: {children: React.ReactNode}) => {
	const qc = await prefetchQueries([{key: ['roadmap'], fetchFn: getRoadmap}])

	return (
		<HydrationBoundary state={dehydrate(qc)}>
			{children}
		</HydrationBoundary>
	);
};

export default Layout;