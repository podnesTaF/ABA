import React from 'react';
import type {RecentNews} from "@/models/pages/home";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import NewsPreview from "@/components/shared/NewsPreview";
import {Button} from "@/components/ui/button";
import {ParseContent} from "@/components/shared/Hero";
import {Article} from "@/models/pages/article";
import Link from "next/link";
import Section from "@/components/layout/Section";
import ParallaxImage from "@/components/shared/ParralaxImage";

const RecentNews = ({layout, news}: {layout: RecentNews, news: Article[]}) => {
	return (
		<div className={'relative'}>
			<ParallaxImage scrollSpeed={0.1} src={getImageUrl(layout.media.url)} alt={layout.media.name} width={1440} height={600} className={'w-full -z-10  object-cover object-top h-[480px] lg:h-[680px]'} />
			<div className={'bg-primary flex items-center justify-center z-[2] rounded-3xl relative -mt-56 lg:-mt-96'}>
				<Section className={'gap-4'}>
					<ParseContent text={layout.sectionTitle} secondaryTitleClassName={'font-medium text-white md:text-2xl mb-2'} mainTitleClassName={'text-white text-3xl md:text-4xl xl:text-5xl'} />
					<div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-12 justify-center'}>
						{news?.map((article) => (
							<NewsPreview variant={'light'} preview={article} key={article.id}/>
						))}
					</div>
					<Button className={'rounded-full w-32'} variant={'light'}>
						<Link href={'/news'}>
							View All
						</Link>
					</Button>
				</Section>
			</div>
		</div>
	);
};

export default RecentNews;