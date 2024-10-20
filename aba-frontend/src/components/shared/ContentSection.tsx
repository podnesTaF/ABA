import React from 'react';
import {InfoSection} from "@/models/shared/infoSection";
import {ParseContent} from "@/components/shared/Hero";
import {cn} from "@/lib/utils";

const ContentSection = ({content, children, containerClass, secondaryTitleClassName}: {content: Partial<InfoSection>, children?: React.ReactNode, containerClass?: string,secondaryTitleClassName?:string}) => {
	return (
		<div className={'flex flex-col lg:flex-row gap-5'}>
			<h4 className={'text-lg md:text-xl font-bold lg:w-[150px] relative lg:sticky capitalize lg:top-20 h-fit'}>
				{content.title}
			</h4>
			<div className={cn('flex-1', containerClass)}>
				{content.description && (
					<ParseContent text={content.description} mainTitleClassName={'font-bold text-xl md:text-2xl my-2'} secondaryTitleClassName={cn('text-base md:text-lg lg:text-xl mb-4 font-medium ulist-base',secondaryTitleClassName)} />
				)}
				{children}
			</div>
		</div>
	);
};

export default ContentSection;