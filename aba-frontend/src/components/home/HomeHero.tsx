import React from 'react';
import {HomeHero as HomeHeroContent} from "@/models/pages/home";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import {Button} from "@/components/ui/button";
import Link from 'next/link';

const HomeHero = ({content}: {content: HomeHeroContent}) => {
	return (
		<div className={'w-full relative flex py-28 2xl:py-[10%]'}>
			<Image src={getImageUrl(content.backgroundImage.url)} alt={content.backgroundImage.name} width={1440} height={800} className={'absolute left-0 right-0 bottom-0 top-0 w-full h-full z-[0] object-cover'} />
			<div className={'flex flex-col justify-center px-[10%] gap-4 md:gap-6 lg:gap-8 z-[1]  xl:max-w-2xl 2xl:max-w-4xl'}>
				<h1 className={'text-2xl md:text-3xl lg:text-6xl 2xl:text-8xl text-white font-bold xl:leading-[80px] 2xl:leading-[108px]'}>
					{content.title}
				</h1>
				<div className={'text-white text-base md:text-lg lg:text-xl'} dangerouslySetInnerHTML={{__html: content.description}}>
				</div>
				<Button className={'rounded-full bg-white text-secondary w-32'}>
					<Link href={content.ctaButton.link}>
						{content.ctaButton.title}
					</Link>
				</Button>
			</div>
		</div>
	);
};

export default HomeHero;