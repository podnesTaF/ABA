import React from 'react';
import {prefetchQueries} from "@/lib/utils/queryHelpers";
import {getAboutPage} from "@/api/aboutApi";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";

export const metadata = {
	title: "About Ace Battle Association",
	description: "Learn about Ace Battle Association, Our History, Mission and Values, Structure and Contact us",
};

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
