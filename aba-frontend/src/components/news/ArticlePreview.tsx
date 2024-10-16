import React from 'react';
import {Article} from "@/models/pages/article";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import {Button} from "@/components/ui/button";
import {ArrowDownRightIcon} from "lucide-react";
import Link from "next/link";

const ArticlePreview = ({article, large}: {article: Article, large?: boolean}) => {
	return (
		<div className={`flex p-3 rounded-xl ${large ? 'bg-secondary flex-col' : "bg-muted flex-row"} gap-4 items-center`}>
			<Image src={getImageUrl(article.previewImage.url)} alt={article.previewImage.name} width={large ? 500 : 200} height={large ? 300 : 100}  className={`${large ? 'flex-1 w-full h-auto object-cover' : "w-48 h-auto object-cover"} max-h-80 rounded-xl`} />
			<div className={`${large ? 'text-white' : "text-primary"}`}>
				<h5 className={'font-bold text-lg lg:text-xl mb-4'}>
					{article.title}
				</h5>
				<div className={'flex justify-between gap-5 items-center'}>
					<p className={'text-sm'}>{article.Excerpt}</p>
					<Button className={`rounded-full ${large ? "bg-white" : "bg-primary"}`}>
						<Link href={`/news/${article.slug}`}>
							<ArrowDownRightIcon className={`${!large ? "text-white" : "text-primary"}`} size={24} />
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ArticlePreview;