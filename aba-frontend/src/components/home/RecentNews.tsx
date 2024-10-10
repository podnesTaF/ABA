import React from 'react';
import {RecentNews} from "@/models/pages/home";
import {Article} from "@/models/shared/article";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import NewsPreview from "@/components/shared/NewsPreview";
import {Button} from "@/components/ui/button";

const RecentNews = ({layout, news}: {layout: RecentNews, news: Article[]}) => {
	return (
		<div className={'relative'}>
			<Image src={getImageUrl(layout.media.url)} alt={layout.media.name} width={1440} height={600} className={'w-full -z-10 -my-10 h-80 object-cover md:h-96 xl:h-[480px] -translate-y-5'} />
			<div className={'bg-primary flex items-center justify-center z-[2] rounded-3xl relative'}>
				<div className={'py-12 px-5 flex flex-col gap-7 max-w-7xl'}>
					<p className={'!text-white'} dangerouslySetInnerHTML={{__html: layout.sectionTitle}}>
					</p>
					<div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-12 justify-center'}>
						{news?.map((article) => (
							<NewsPreview preview={article} key={article.id}/>
						))}
					</div>
					<Button className={'rounded-full bg-white text-secondary w-32'}>
						View All
					</Button>
				</div>
			</div>
		</div>
	);
};

export default RecentNews;