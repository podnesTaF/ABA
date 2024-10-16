import React from 'react';
import {prefetchQueries} from "@/lib/utils/queryHelpers";
import {getNewsPage, getNewsPreviews} from "@/api/newsApi";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";

const Layout = async ({children}: {children: React.ReactNode}) => {
	const qc = await prefetchQueries([{key: ['news'], fetchFn: getNewsPreviews}, {key:['newsPage'], fetchFn: getNewsPage}])

	return (
		<HydrationBoundary state={dehydrate(qc)}>
			{children}
		</HydrationBoundary>
	);
};

export default Layout;