import React from 'react';
import {InfoSection} from "@/models/shared/infoSection";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import {ParseContent} from "@/components/shared/Hero";

const Mission = ({content}: {content: InfoSection[]}) => {
	return (
		<div id={'mission-values'} className={'py-8 rounded-3xl w-full bg-white -mt-10 relative z-10'}>
			<div className={'px-3 mx-auto max-w-7xl'}>
				<h2 className={'font-bold text-3xl'}>
					{content[0]?.title || content[1]?.title}
				</h2>
				<div className={'flex flex-col gap-6'}>
					{content.map(((mission, index) => (
						<div className={`flex ${index % 2 ===0 ? 'flex-col md:flex-row' : 'flex-col-reverse md:flex-row-reverse'} justify-between gap-6 md:items-center`} key={mission.id}>
							{mission.description && (
								<div className={'relative max-w-xl'}>
									<h1 className={'text-8xl lg:text-[120px] 2xl:text-[150px] text-gray-400/50 absolute right-0 top-0'}>
										0{index + 1}
									</h1>
									<ParseContent text={mission.description} mainTitleClassName={"text-xl lg:text-2xl 2xl:text-3xl font-bold mb-3 max-w-sm"} />
								</div>
							)}
							<Image src={getImageUrl(mission.media.url)} alt={mission.media.name} width={500} height={400} className={'max-w-xl h-full w-full object-cover  rounded-xl'} />
						</div>
					)))}
				</div>
			</div>
		</div>
	);
};

export default Mission;