'use client'

import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getTournamentsPage} from "@/api/tournaments";
import Hero, {ParseContent} from "@/components/shared/Hero";
import TournamentSection from "@/components/event/TournamentSection";
import {getNewsPreviews} from "@/api/newsApi";
import NewsPreview from "@/components/shared/NewsPreview";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const Page = () => {
	const {data} = useQuery({
		queryKey: ['tournaments'],
		queryFn: getTournamentsPage
	})

	const {data: articles} = useQuery({
		queryKey: ['articles'],
		queryFn: () => getNewsPreviews({count:3})
	})

	if(!data?.news) return null;

	return (
		<div className={'w-full'}>
			<Hero content={data.hero}/>
			<div className={'py-8 rounded-3xl w-full bg-white -mt-10 relative z-10'}>
				<div className={'px-3 mx-auto max-w-7xl flex flex-col'}>
					{data.tournaments.map((t, i) => (
						<TournamentSection key={t.id} content={t} index={i}/>
					))}
				</div>
			</div>
			<div className={'bg-muted flex items-center justify-center z-[2] rounded-3xl relative'}>
				<div className={'py-12 px-5 flex flex-col gap-7 max-w-7xl'}>
					<div className={'flex items-center justify-between gap-5'}>
						<ParseContent text={data.news.sectionTitle} secondaryTitleClassName={'font-bold text-primary md:text-2xl'}
													mainTitleClassName={'font-bold text-primary text-2xl md:text-3xl xl:text-5xl'}/>
						<Button variant={'ghost'} >
							<Link href={data.news.ctaButton.link}>
								{data.news.ctaButton.title}
							</Link>
						</Button>
					</div>
					<div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 xl:gap-12 justify-center'}>
						{articles?.data?.map((article) => (
							<NewsPreview variant={'dark'} preview={article} key={article.id}/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Page;