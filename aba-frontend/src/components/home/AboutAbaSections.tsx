import React from 'react';
import {AboutABA} from "@/models/pages/home";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Media} from "@/models/shared/media";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import {ParseContent} from "@/components/shared/Hero";

const AboutAbaSections = ({content}: {content: AboutABA[]}) => {
	return (
		<div className={'w-full justify-center items-center py-12 px-4'}>
			<div className={'max-w-7xl mx-auto'}>
				{content.map((section, i) => (
					<div key={section.id} className={'flex flex-col md:flex-row relative justify-center items-end'}>
						<div className={'flex-1 pt-10 flex justify-end'}>
							{i % 2 !== 0 ? (
								<ContentSection textAlign={'text-right'} content={section}/>
							) : (
								<MediaSection media={section.media}/>
							)}
						</div>
						<div className={'w-[0.5px] bg-gray-200 absolute top-0 bottom-0 right-0 md:left-1/2'}/>
						<div className={'flex-1 w-full pt-5 flex justify-start relative'}>
							{i % 2 === 0 ? (
								<ContentSection textAlign={'text-left'} content={section}/>
							) : (
								<MediaSection media={section.media}/>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};


const ContentSection = ({content, textAlign}: { content: AboutABA, textAlign: 'text-left' | "text-right"}) => {
	return (
		<div className={'flex flex-col gap-4 p-5 max-w-lg items-end'}>
			<h2 className={`font-bold uppercase text-lg md:text-xl lg:text-2xl xl:text-3xl text-right ${textAlign === "text-right" ? "md:text-right" : "md:text-left"}`}>
				{content.title}
			</h2>
			<ParseContent text={content.description} secondaryTitleClassName={`text-right ${ "md:" +textAlign}`} />
			<div>
				<Button className={'text-white bg-secondary hover:bg-secondary/80 rounded-full capitalize'}>
					<Link href={content.ctaButton.link}>
						{content.ctaButton.title}
					</Link>
				</Button>
			</div>
		</div>
	)
}

const MediaSection = ({media}: {media: Media}) => {
	return (
		<Image src={getImageUrl(media?.url)} alt={media?.name} width={600} height={400} className={'object-cover md:object-contain w-full md:max-h-[400px]'} />
	)
}

export default AboutAbaSections;