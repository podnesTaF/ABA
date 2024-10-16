'use client'

import React, {useState} from 'react';
import {useQuery} from "@tanstack/react-query";
import {getNewsPage, getNewsPreviews} from "@/api/newsApi";
import Hero from "@/components/shared/Hero";
import NewsPreview from "@/components/shared/NewsPreview";
import {Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs';
import ControlledInput from "@/components/form/ControlledInput";
import {SearchIcon} from "lucide-react";

const NewsPage = () => {
	const [category, setCategory] = useState<string>("")
	const [title, setTitle] = useState('')
	const {data: news} = useQuery({
		queryKey: ['news'],
		queryFn: () => getNewsPreviews()
	})

	const {data: page} = useQuery({
		queryKey: ['newsPage'],
		queryFn: () => getNewsPage()
	})

	if(!page || !news) return null;

	return (
		<div>
			<Hero content={page.hero} />
			<div className={'w-full bg-white -translate-y-10 rounded-t-2xl'}>
				<div className={'max-w-[1440px] mx-auto px-4 py-8'}>
					<div className={'flex gap-5 items-center mb-8 w-full justify-between'}>
						<Tabs value={category}>
							<TabsList className="flex w-full">
								<TabsTrigger className={'flex-1'} onClick={() => setCategory('')} value={""}>All News</TabsTrigger>
								{page.categories.map((c) => (
									<TabsTrigger  className={'flex-1'} onClick={() => setCategory(c.name)} value={c.name} key={c.id}>{c.name}</TabsTrigger>
								))}
							</TabsList>
						</Tabs>
						<div className={'xl:min-w-80'}>
							<ControlledInput icon={
								<SearchIcon className={'text-primary'} size={24} />
							} placeholder={'Search'} onChange={(t) => setTitle(t)} value={title} />
						</div>
					</div>
					<div className={'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'}>
						{news.data.map((n) => (
							<NewsPreview key={n.id} preview={n} variant={'dark'} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsPage;