import React from 'react';
import {HomeHero as HomeHeroContent} from "@/models/pages/home";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import {Button} from "@/components/ui/button";
import Link from 'next/link';
import {ParseContent} from "@/components/shared/Hero";
import {ParallaxImage} from "@/components/shared/ParralaxImage";

const HomeHero = ({content}: {content: HomeHeroContent}) => {
	return (
		<div className={'w-full relative flex justify-center items-center bg-primary pb-12'}>
			<ParallaxImage src={getImageUrl(content.backgroundImage.url)} alt={content.backgroundImage.name} width={1800} height={1200} className={'absolute left-0 top-0 w-full h-[110%] object-cover'}  />
			<div className={"h-[700px] 2xl:h-[680px] mx-auto py-24 px-5 flex items-center flex-col heroElem z-[1] bg-[url('/vectors/transparent-track.svg')] bg-no-repeat bg-center bg-cover md:bg-contain"}>
				<div className={'flex-1 flex flex-col gap-5 xl:gap-8 items-center justify-center max-w-5xl mx-0 lg:mx-6 xl:mx-12 '}>
					<Image src={getImageUrl(content.logo.url)} alt={'track'} width={240} height={100} className={'object-cover object-center h-auto'} />
					{content.title && <h1 className={'text-5xl xl:text-7xl font-extrabold text-center uppercase text-white gradient-title'}>
						{content.title}
					</h1>}
					<ParseContent text={content.description}  secondaryTitleClassName={'text-center max-w-3xl text-base xl:text-lg font-medium text-gray-100'}/>
				</div>
				<div>
					<Link href={content.ctaButton.link}>
						<Button variant={'light'}>
							{content.ctaButton.title}
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default HomeHero;