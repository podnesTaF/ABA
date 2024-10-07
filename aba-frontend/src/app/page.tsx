import {getHeader} from "@/api/layoutApi";
import {dehydrate, HydrationBoundary} from "@tanstack/react-query";
import Header from "@/components/shared/Header";
import {prefetchQuery} from "@/lib/utils/queryHelpers";


export default async function Home() {
	const queryClient = await prefetchQuery(['header'], getHeader);

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Header />
		</HydrationBoundary>
	);
}
