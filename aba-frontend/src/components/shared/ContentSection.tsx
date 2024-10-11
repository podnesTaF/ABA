import React from 'react';
import {InfoSection} from "@/models/shared/infoSection";

const ContentSection = ({content, children}: {content: Partial<InfoSection>, children?: React.ReactNode}) => {
	return (
		<div className={'flex flex-col lg:flex-row gap-5'}>
			<h4 className={'text-lg md:text-xl font-bold lg:max-w-[150px] relative lg:sticky lg:top-20 h-fit'}>
				{content.title}
			</h4>
			<div className={'flex-1'}>
				{content.description && (
					<div style={{fontSize: 20, flex: 1}} dangerouslySetInnerHTML={{__html: content.description}} />
				)}
				{children}
			</div>
		</div>
	);
};

export default ContentSection;