'use client'
import React, {useRef, useState} from 'react';
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
	const timerRef = useRef<NodeJS.Timeout | null>(null)


	const handleMouseEnter = (newImageUrl: string) => {
		if (newImageUrl !== activeImageUrl) {
			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}
			setPreviousImageUrl(activeImageUrl);
			timerRef.current = setTimeout(() => {
				setActiveImageUrl(newImageUrl);
			}, 500)
		}
	};

	const handleMouseLeave = (e:  React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		e.stopPropagation()
		if (timerRef.current) {
			clearTimeout(timerRef.current);
			timerRef.current = null;
		}
	};


	if(!data) return null

	return (
		<div className={'min-h-screen py-[5%] relative -mb-4'}>
			<div className={'absolute left-0 top-0 bottom-0 right-0 w-full bg-primary z-0'}></div>
			<Image
				src={activeImageUrl}
				alt={'cover image'}
				width={1440}
				height={800}
				className={`absolute w-full object-cover h-full left-0 top-0 transition-all duration-500 ease-in-out ${
					previousImageUrl !== activeImageUrl ? 'opacity-100' : 'opacity-0'
				} z-[2]`}
				onTransitionEnd={() => setPreviousImageUrl(null)}
			/>
			<div className={'absolute left-0 top-0 bottom-0 right-0 w-full bg-black/60 z-[3]'} 	onMouseEnter={() => handleMouseEnter(defaultImageUrl)}></div>
			<div className={'md:mx-[5%] 2xl:mx-[8%] px-4 z-10 relative mt-[20%] md:mt-[5%]'}>
				{data.data.races.sort((a, b) => a.sequence - b.sequence).map(r => (
					<Link href={`/races/${r.slug}`} key={r.id}>
						<div key={r.id}
								 onMouseLeave={e => handleMouseLeave(e)}
								 onMouseEnter={() => handleMouseEnter(getImageUrl(r.hero.backgroundImage.formats?.large?.url))}
								 className={'flex cursor-pointer  transition-all duration-200 w-full border-b-[0.5px] hover:border-b-[3px] hover:border-b-secondary border-b-secondary/50 py-5 items-center justify-between gap-5'}>
							<ParseContent text={r.hero.title}
														mainTitleClassName={"text-4xl md:text-3xl xl:text-5xl font-bold text-white"}/>
							<ArrowRight color={'white'} size={40} className={"text-xl md:text-3xl xl:text-5xl font-bold text-white"}/>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Page;