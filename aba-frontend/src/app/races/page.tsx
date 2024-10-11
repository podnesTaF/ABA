'use client'
import React, {useState} from 'react';
import {useQuery} from "@tanstack/react-query";
import {getRacesPage} from "@/api/racesApi";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import {ParseContent} from "@/components/shared/Hero";
import {ArrowRight} from "lucide-react";
import Link from "next/link";

const Page = () => {
	const {data} = useQuery({
		queryKey: ['races'],
		queryFn: getRacesPage
	})

	const defaultImageUrl = getImageUrl(data?.data.hero.backgroundImage.formats?.large?.url || data?.data.hero.backgroundImage.url)
	const [activeImageUrl, setActiveImageUrl] = useState(defaultImageUrl)
	const [previousImageUrl, setPreviousImageUrl] = useState<string | null>(null);

	const handleMouseEnter = (newImageUrl: string) => {
		if (newImageUrl !== activeImageUrl) {
			setPreviousImageUrl(activeImageUrl);
			setActiveImageUrl(newImageUrl);
		}
	};

	if(!data) return null

	return (
		<div className={'min-h-screen py-[5%] relative -mb-20'}>
			<Image
				src={activeImageUrl}
				alt={'cover image'}
				width={1440}
				height={800}
				className={`absolute w-full object-cover h-full left-0 top-0 transition-all duration-500 ease-in-out ${previousImageUrl !== activeImageUrl ? "opacity-100" : 'opacity-0'} z-[2]`}
				onTransitionEnd={() => setPreviousImageUrl(null)}
			/>
			<div className={'absolute left-0 top-0 bottom-0 right-0 w-full bg-black/60 z-[3]'}></div>
			<div className={'max-w-7xl mx-auto px-4 z-10 relative'}>
				<ParseContent text={data.data.hero.title} mainTitleClassName={"text-2xl md:text-4xl xl:text-7xl font-bold text-white"} />
				{data.data.races.sort((a,b) => a.sequence - b.sequence).map(r => (
					<Link href={`/races/${r.slug}`}>
						<div key={r.id}
								 onMouseEnter={() => handleMouseEnter(getImageUrl(r.hero.backgroundImage.formats?.large?.url))}
								 className={'flex cursor-pointer hover:bg-primary/50 transition-all duration-200 w-full border-b border-b-secondary py-2 md:py-5 items-center justify-between gap-5'}>
							<ParseContent text={r.hero.title}
														mainTitleClassName={"text-xl md:text-3xl xl:text-5xl font-bold text-white"}/>
							<ArrowRight color={'white'} className={'"text-xl md:text-3xl xl:text-5xl font-bold text-white"'}/>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Page;