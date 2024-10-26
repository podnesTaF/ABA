'use client'
import React, {useState} from 'react';
import {useQuery} from "@tanstack/react-query";
import {getRace} from "@/api/racesApi";
import Hero, {ParseContent} from "@/components/shared/Hero";
import ContentSection from "@/components/shared/ContentSection";
import Structure from "@/components/shared/Structure";
import {InfoSection} from "@/models/shared/infoSection";
import Section from "@/components/layout/Section";

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
			<div id={'rules'} className={'rounded-3xl w-full bg-white -mt-10 relative z-10'}>
				<Section className={'relative py-5'}>
					<ContentSection content={data.rules} />
				</Section>
			</div>
			<div id={'categories'} className={'px-4 max-w-7xl mx-auto relative py-20'}>
				<ContentSection content={data.categoryPreview}/>
				<Structure content={{title: '', items: data.categories}} onChange={(cat) => setActiveCategory(cat)}>
					{activeCategory?.description && (
						<ParseContent text={activeCategory.description} mainTitleClassName={'font-bold text-xl sm:text-2xl my-2'} secondaryTitleClassName={'text-base md:text-xl font-medium ulist-base'} />
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