'use client'

import React from 'react';
import {AboutABA} from "@/models/pages/home";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Media} from "@/models/shared/media";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import {ParseContent} from "@/components/shared/Hero";
import Section from "@/components/layout/Section";
import VideoCard from "@/components/shared/VideoCard";

const AboutAbaSections = ({content}: {content: AboutABA[]}) => {
	return (
		<div className={'w-full justify-center items-center px-4'}>
			<Section>
				{content.map((section, i) => (
					<div key={section.id} className={'flex flex-col md:flex-row relative justify-center items-end'}>
						<div className={'flex-1 w-full pt-10 flex justify-end'}>
							{i % 2 !== 0 ? (
								<ContentSection  content={section}/>
							) : (
								<MediaSection media={section.media} youtubeMediaId={section.youtubeMediaId}/>
							)}
						</div>
						<div className={'w-[0.5px] bg-gray-200 absolute top-0 bottom-0 right-0 md:left-1/2'}/>
						<div className={'flex-1 w-full pt-5 flex justify-start relative px-5'}>
							{i % 2 === 0 ? (
								<ContentSection  content={section}/>
							) : (
								<MediaSection media={section.media} youtubeMediaId={section.youtubeMediaId}/>
							)}
						</div>
					</div>
				))}
			</Section>
		</div>
	);
};


const ContentSection = ({content}: { content: AboutABA}) => {
	return (
		<div className={'flex flex-col gap-4 p-5 max-w-lg items-end'}>
			<h2 className={`font-bold uppercase text-lg md:text-xl lg:text-2xl xl:text-4xl`}>
				{content.title}
			</h2>
			<ParseContent text={content.description} secondaryTitleClassName={`text-base xl:text-lg leading-[160%]`} />
			<div>
				<Button className={'text-white bg-secondary hover:bg-secondary/80 rounded-full capitalize py-3 px-4 text-lg'}>
					<Link href={content.ctaButton.link}>
						{content.ctaButton.title}
					</Link>
				</Button>
			</div>
		</div>
	)
}

const MediaSection = ({media, youtubeMediaId}: {media?: Media, youtubeMediaId?: string}) => {
	return (
		media ? (
		<Image src={getImageUrl(media?.url)} alt={media?.name} width={600} height={400} className={'object-cover md:object-contain w-full md:max-h-[400px]'} />
		) : youtubeMediaId ? (
			<VideoCard videoId={youtubeMediaId} />
		) : null
	)
}

export default AboutAbaSections;