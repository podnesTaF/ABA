import {QueryClient} from "@tanstack/react-query";

export function createMediaBriefQuery(mediaName: string): string {
	return `populate[${mediaName}][fields][0]=name&	populate[${mediaName}][fields][1]=url&populate[${mediaName}][fields][2]=caption&populate[${mediaName}][fields][3]=previewUrl&populate[${mediaName}][populate][fields][4]=formats`;
}

export const prefetchQuery = async (key: string[], fetchFn: () => Promise<any>) => {
	const queryClient = new QueryClient();
	await queryClient.prefetchQuery({
		queryKey: key,
		queryFn: fetchFn,
	});
	return queryClient;
};