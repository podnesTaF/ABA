import React from 'react';
import {InfoSection} from "@/models/shared/infoSection";
import {ParseContent} from "@/components/shared/Hero";

const ContentSection = ({content, children}: {content: Partial<InfoSection>, children?: React.ReactNode}) => {
	return (
		<div className={'flex flex-col lg:flex-row gap-5'}>
			<h4 className={'text-lg md:text-xl font-bold lg:w-[150px] relative lg:sticky capitalize lg:top-20 h-fit'}>
				{content.title}
			</h4>
			<div className={'flex-1'}>
				{content.description && (
					<ParseContent text={content.description} mainTitleClassName={'font-bold text-2xl my-2'} secondaryTitleClassName={'text-xl font-medium ulist-base'} />
				)}
				{children}
			</div>
		</div>
	);
};

export default ContentSection;