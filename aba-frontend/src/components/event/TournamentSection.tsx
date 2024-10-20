import React from 'react';
import {Tournament} from "@/models/pages/tournament";
import {ParseContent} from "@/components/shared/Hero";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import {Button} from "@/components/ui/button";

const TournamentSection = ({content, index}: { content: Tournament, index: number }) => {
	return (
		<div className={'flex flex-col md:flex-row'} id={content.slug}>
			<div className={'sm:translate-y-20 text-right relative flex-1 pr-5 py-5'}>
				{index % 2 === 0 ? (
					<AboutSection content={content} index={index}/>
				) : (
					<FeaturesSection content={content} index={index}/>
				)}
			</div>
			<div className={'w-[1px] bg-primary/20 h-auto'}>
			</div>
			<div className={'text-left relative flex-1 pl-5 py-4'}>
				{index % 2 !== 0 ? (
					<AboutSection content={content} index={index}/>
				) : (
					<FeaturesSection content={content} index={index}/>
				)}
			</div>
		</div>
	);
};


const AboutSection = ({content, index}: { content: Tournament, index: number }) => {
	return (
		<div className={`flex flex-col gap-5 relative ${index % 2 === 0 ? "items-end" : "items-start"}`}>
			<div className={'max-w-md'}>
				<h3 className={"mr-3 text-2xl lg:text-4xl 2xl:text-6xl font-bold text-right"}>
					{content.about.title}
				</h3>
			</div>
			<h3 className={'text-3xl md:text-6xl xl:text-8xl font-bold text-gray-400/20 absolute right-5 -top-7'}>
				0{index + 1}
			</h3>
			<ParseContent text={content.about.description} secondaryTitleClassName={'text-base sm:text-lg lg:text-xl font-medium'}/>
			<div className={'flex flex-col gap-4'}>
				<h4 className={"mr-3 text-xl lg:text-2xl font-bold"}>{content.purpose.title}</h4>
				<div className={'flex flex-col gap-5'}>
					{content.purpose.links.map((l, index) => (
						<div className={'relative'} key={l.id}>
							<h5 className={'text-3xl lg:text-6xl font-bold text-gray-500/20 absolute left-0 -top-4'}>
								{index + 1}.
							</h5>
							<h5 className={'text-xl font-semibold'}>
								{l.title}
							</h5>
							<ParseContent text={l.description!} secondaryTitleClassName={'text-base sm:text-lg xl:text-xl'}/>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

const FeaturesSection = ({content, index}: { content: Tournament, index: number }) => {
	return (
		<div>
			<Image src={getImageUrl(content.about.media.url)} alt={content.about.media.name} width={500} height={400}
						 className={'w-full h-auto'}/>
			<div className={'relative p-3'}>
				<h4 className={'text-xl lg:text-2xl xl:text-3xl font-bold mb-4'}>
					{content.features.title}
				</h4>
				<div className={'flex flex-col gap-5'}>
					{content.features.links.map((l, i) => (
						<div className={'relative'} key={l.id}>
							{l.title && (
								<>
									<h5 className={'font-semibold text-lg md:text-xl xl:text-2xl mb-2'}>
										{l.title}
									</h5>
									<h5 className={`text-3xl lg:text-6xl font-bold text-gray-500/20 absolute ${index % 2 === 0 ? "right-0" : "left-0"} -top-5`}>
										{i + 1}.
									</h5>
								</>
							)
							}
							{l.description && <ParseContent text={l.description} secondaryTitleClassName={'text-base sm:text-lg md:text-lg'}/>}
							{l.link && (
								<div className={'flex justify-end mt-3 w-full'}>
									<Button className={'rounded-full'}>
										Read More
									</Button>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
export default TournamentSection;