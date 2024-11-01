'use client'

import React, {useState} from 'react';
import {useQuery} from "@tanstack/react-query";
import {getNewsPage, getNewsPreviews} from "@/api/newsApi";
import Hero from "@/components/shared/Hero";
import NewsPreview from "@/components/shared/NewsPreview";
import ControlledInput from "@/components/form/ControlledInput";
import {SearchIcon} from "lucide-react";
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
			<div className={'w-full bg-white -translate-y-10 rounded-t-2xl z-10'}>
				<div className={'max-w-[1440px] mx-auto px-4 py-8'}>
					<div className={'flex flex-col-reverse md:flex-row gap-5 items-center mb-3 md:mb-8 w-full justify-between'}>
									<div className={'flex bg-gray-50 rounded-full max-w-full overflow-x-auto lg:max-w-xl xl:max-w-none scrollbar-hide'}>
										<div onClick={() => setCategory("")} className={`flex w-max cursor-pointer justify-center items-center  px-3 md:px-5 py-2 lg:py-4  rounded-full ${category === "" ? "bg-secondary text-white" : "bg-transparent text-primary"}`}>
											<p className={'font-semibold capitalize text-sm sm:text-base xl:text-lg'}>All News</p>
										</div>
										{page?.categories.map((c) => (
											<div
												key={c.id}
												onClick={() => setCategory(c.name)}
												className={`w-auto flex justify-center items-center px-3 md:px-5 cursor-pointer py-2 lg:py-4 rounded-full ${category === c.name ? "bg-secondary text-white" : "bg-transparent text-primary"}`}>
												<p className={'font-semibold capitalize text-sm sm:text-base xl:text-lg'}>{c.name}</p>
											</div>
										))}
									</div>
						<div className={'w-full md:w-auto xl:min-w-80'}>
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