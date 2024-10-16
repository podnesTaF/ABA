import React from 'react';
import {Article} from "@/models/pages/article";
import ArticlePreview from "@/components/news/ArticlePreview";

const NewsGrid = ({news}: {news?: Article[]}) => {

	if(!news?.length) return null

	return (
		<div className={'grid grid-cols-1 md:grid-cols-2 gap-2'}>
			<div className={'flex-1'}>
				<ArticlePreview article={news[0]} large />
			</div>
			{news.length > 1 && (<div className={'flex-1 h-auto flex flex-col gap-4'}>
				{news.slice(1).map(n => (
					<div key={n.id} className={'w-full'}>
						<ArticlePreview article={n} />
					</div>
				))}
			</div>)}
		</div>
	);
};

export default NewsGrid;