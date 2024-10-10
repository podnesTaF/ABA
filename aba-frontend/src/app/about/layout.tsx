import React from 'react';
import {prefetchQueries} from "@/lib/utils/queryHelpers";
import {getAboutPage} from "@/api/aboutApi";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";

export default async function Layout({
									children,
								}: Readonly<{
	children: React.ReactNode;
}>){
	const queryClient = await prefetchQueries([{key: ['about'], fetchFn: getAboutPage}])

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			{children}
		</HydrationBoundary>
	);
};
