'use client'

import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getArticle} from "@/api/newsApi";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList, BreadcrumbPage,
	BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {cutString} from "@/lib/utils/strHelpers";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import DynamicContent from "@/components/news/DynamicContent";

const ArticlePage = ({params: {slug}}: {params: {slug: string}}) => {
	const {data} = useQuery({
		queryKey: ['article', slug],
		queryFn: () => getArticle(slug),
		retryDelay: 10000
	})

	if(!data) return

	return (
		<div className={'py-6 lg:py-12 max-w-[1440px] mx-auto px-4'}>
			<div className={'flex flex-col gap-12 lg:flex-row'}>
				<div className={'h-fit lg:sticky lg:top-20'}>
					<Breadcrumb className={"mb-6 lg:mb-8"}>
						<BreadcrumbList>
							<BreadcrumbItem>
								<BreadcrumbLink href="/">Home</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbLink href="/news">News</BreadcrumbLink>
							</BreadcrumbItem>
							<BreadcrumbSeparator />
							<BreadcrumbItem>
								<BreadcrumbPage>{cutString(data.title, 40)}</BreadcrumbPage>
							</BreadcrumbItem>
						</BreadcrumbList>
					</Breadcrumb>
					<h1 className={'text-2xl xl:text-3xl font-bold my-2 lg:my-6'}>
						{data.title}
					</h1>
				</div>
				<div className={'flex-1 max-w-3xl flex flex-col gap-12'}>
					<Image src={getImageUrl(data.previewImage.url)} alt={data.previewImage.name} width={780} height={500} className={'w-full h-auto object-contain'} />
					{data.content.map((c) => (
						<DynamicContent item={c} key={c.id} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ArticlePage;