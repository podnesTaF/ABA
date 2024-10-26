import React from 'react';
import {SectionValues} from "@/models/pages/about";
import {ParseContent} from "@/components/shared/Hero";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import Section from "@/components/layout/Section";

const Values = ({content}: {content: SectionValues}) => {
	return (
		<div className={'w-full my-5'}>
			<Section className={'pt-0 lg:pt-0'}>
				<div className={'mb-4'}>
					<ParseContent text={content.title} secondaryTitleClassName={'text-base md:text-xl font-medium'} mainTitleClassName={'text-xl md:text-3xl font-bold uppercase'} />
				</div>
				<div className={'flex justify-around flex-wrap items-center gap-16'}>
					{content.coreValues.map((v) => (
						<div key={v.id} className={'flex flex-col gap-4 items-center w-1/4'}>
							<Image src={getImageUrl(v.icon?.url)} alt={v.icon?.name || 'value'} width={50} height={50} className={'w-8 h-8 md:h-10 md:w-10 xl:w-12 xl:h-12'} />
							<h3 className={'text-xl md:text-2xl xl:text-3xl font-bold'}>
								{v.title}
							</h3>
						</div>
					))}
				</div>
			</Section>
		</div>
	);
};

export default Values;