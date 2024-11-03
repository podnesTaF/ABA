import React from 'react';
import {InfoSection} from "@/models/shared/infoSection";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import {ParseContent} from "@/components/shared/Hero";
import Section from "@/components/layout/Section";

const History = ({content}: { content: InfoSection }) => {
	return (
		<div id={'history'} className={'relative'}>
			<Image src={getImageUrl(content.media.url)} alt={content.media.name} height={460} width={1440}
						 className={'w-full object-cover max-h-[600px] object-center rounded-[30px] z-[0]'}/>
			<div
				className={'dark-gradient shadow-lg w-full rounded-[30px] overflow-hidden relative z-10 max-w-7xl mx-auto -top-12 md:-top-32 p-8i md:p-12 lg:p-20'}>
				<Image src={'/vectors/black-track.svg'} alt={'stadium'} width={600} height={400}
								 className={'absolute max-w-md h-auto left-12 -top-96 -z-[1]'}/>
				<Image src={'/vectors/black-track.svg'} alt={'stadium'} width={600} height={400}
							 className={'absolute max-w-md h-auto right-12 -bottom-96 -z-[1]'}/>
				{content.description &&
            <ParseContent text={content.description}
                          mainTitleClassName={'text-2xl text-white md:text-3xl xl:text-4xl font-bold mb-4 md:mb-6 uppercase z-[1]'}
                          secondaryTitleClassName={'text-base font-medium ulist-base listitem-base text-white md:text-lg z-[1]'}/>
				}
			</div>
		</div>
	);
};

export default History;