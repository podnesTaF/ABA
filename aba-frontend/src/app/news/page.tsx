'use client'

import React, {useMemo, useState} from 'react';
import {useQuery} from "@tanstack/react-query";
import {getNewsPage, getNewsPreviews} from "@/api/newsApi";
import Hero from "@/components/shared/Hero";
import NewsPreview from "@/components/shared/NewsPreview";
import {Tabs, TabsList, TabsTrigger} from '@/components/ui/tabs';
import ControlledInput from "@/components/form/ControlledInput";
import {SearchIcon} from "lucide-react";
import {debounce} from 'lodash';
import {useDebounce} from "@/lib/hooks/useDebounce";
import CardGroupSkeleton from "@/components/skeletons/CardGroupSkeleton";

const NewsPage = () => {
	const [category, setCategory] = useState<string>("")
	const [title, setTitle] = useState('')
	const debouncedTitle = useDebounce(title, 500);

	const {data: news, isLoading: isNewsLoading} = useQuery({
		queryKey: ['news', category, debouncedTitle],
		queryFn: () => getNewsPreviews({category, name: debouncedTitle})
	})

	const {data: page, isLoading} = useQuery({
		queryKey: ['newsPage'],
		queryFn: () => getNewsPage()
	})


	return (
		<div>
			<Hero content={page?.hero} isLoading={isLoading}/>
			<div className={'w-full bg-white -translate-y-10 rounded-t-2xl'}>
				<div className={'max-w-[1440px] mx-auto px-4 py-8'}>
					<div className={'flex gap-5 items-center mb-8 w-full justify-between'}>
						<Tabs value={category}>
							<TabsList className="flex w-full">
								<TabsTrigger className={'flex-1'} onClick={() => setCategory('')} value={""}>All News</TabsTrigger>
								{page?.categories.map((c) => (
									<TabsTrigger className={'flex-1'} onClick={() => setCategory(c.name)} value={c.name}
															 key={c.id}>{c.name}</TabsTrigger>
								))}
							</TabsList>
						</Tabs>
						<div className={'xl:min-w-80'}>
							<ControlledInput icon={
								<SearchIcon className={'text-primary'} size={24}/>
							} placeholder={'Search'} onChange={(t) => setTitle(t)} value={title}/>
						</div>
					</div>
					<div className={'min-h-72'}>
						{isLoading || isNewsLoading ? (
							<CardGroupSkeleton count={3}/>
						) : news?.data?.length ? (
							<div className={'grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6'}>
								{news?.data.map((n) => (
									<NewsPreview key={n.id} preview={n} variant={'dark'}/>
								))}
							</div>
						) : (
							<div className={'h-full w-full flex justify-center items-center'}>
								<h3>
									No News Found
								</h3>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsPage;