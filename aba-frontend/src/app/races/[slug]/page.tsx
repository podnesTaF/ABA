'use client'
import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getRace} from "@/api/racesApi";
import Hero from "@/components/shared/Hero";
import ContentSection from "@/components/shared/ContentSection";

const Page = ({params}: {params: {slug: string}}) => {
	const {data} = useQuery({
		queryKey: ['races', params.slug],
		queryFn: () => getRace(params.slug)
	})

	if(!data) return

	return (
		<div className={'w-full'}>
			<Hero content={data.hero}/>
			<div id={'mission-values'} className={'py-8 rounded-3xl w-full bg-white -mt-10 relative z-10'}>
				<div id={'how-we-are-different'} className={'px-4 max-w-7xl mx-auto relative py-5'}>
					<ContentSection content={data.rules}/>
				</div>
			</div>
			<div id={'how-we-are-different'} className={'px-4 max-w-7xl mx-auto relative py-20'}>
				<ContentSection content={data.categoryPreview}/>
			</div>
			<div id={'how-we-are-different'} className={'px-4 max-w-7xl mx-auto relative py-20'}>
				<ContentSection content={data.ranking}/>
			</div>
		</div>
	);
};

export default Page;