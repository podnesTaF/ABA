import React from 'react';
import {InfoSection} from "@/models/shared/infoSection";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import {ParseContent} from "@/components/shared/Hero";

const History = ({content}: {content: InfoSection}) => {
	return (
		<div id={'history'} className={'relative mt-[200px] md:mt-[400px]'}>
			<Image src={getImageUrl(content.media.url)} alt={content.media.name} height={460} width={1440} className={'w-full object-cover max-h-[450px] object-center absolute -top-[200px] lg:-top-[400px] z-[0]'} />
			<div className={'bg-gray-200 w-full rounded-3xl px-5 py-8 relative z-10'}>
				<div className={'max-w-7xl mx-auto'}>
					<h3 className={'text-base sm:text-lg md:text-xl font-bold'}>The origins of AceBattle</h3>
					{content.description &&
						<ParseContent text={content.description} mainTitleClassName={'text-2xl md:text-3xl xl:text-4xl font-bold mb-4 md:mb-6'} secondaryTitleClassName={'text-base md:text-lg xl:text-xl font-medium'} />
 					}
				</div>
			</div>
		</div>
	);
};

export default History;