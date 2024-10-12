'use client'
import React, {useState} from 'react';
import {useQuery} from "@tanstack/react-query";
import {getRace} from "@/api/racesApi";
import Hero, {ParseContent} from "@/components/shared/Hero";
import ContentSection from "@/components/shared/ContentSection";
import Structure from "@/components/shared/Structure";
import {InfoSection} from "@/models/shared/infoSection";

const Page = ({params}: {params: {slug: string}}) => {

	const {data} = useQuery({
		queryKey: ['races', params.slug],
		queryFn: () => getRace(params.slug)
	})
	const [activeCategory, setActiveCategory] = useState<InfoSection | undefined>(data?.categories[0]);

	if(!data) return

	return (
		<div className={'w-full'}>
			<Hero content={data.hero}/>
			<div id={'rules'} className={'py-8 rounded-3xl w-full bg-white -mt-10 relative z-10'}>
				<div className={'px-4 max-w-7xl mx-auto relative py-5'}>
					<ContentSection content={data.rules} />
				</div>
			</div>
			<div id={'categories'} className={'px-4 max-w-7xl mx-auto relative py-20'}>
				<ContentSection content={data.categoryPreview}/>
				<Structure content={{title: '', items: data.categories}} onChange={(cat) => setActiveCategory(cat)}>
					{activeCategory?.description && (
						<ParseContent text={activeCategory.description} mainTitleClassName={'font-bold text-2xl my-2'} secondaryTitleClassName={'text-xl font-medium ulist-base'} />
					)}
				</Structure>
			</div>
			<div id={'ranking'} className={'px-4 max-w-7xl mx-auto relative py-20'}>
				<ContentSection content={data.ranking}/>
			</div>
		</div>
	);
};

export default Page;