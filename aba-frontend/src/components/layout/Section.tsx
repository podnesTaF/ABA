import React from 'react';
import {cn} from "@/lib/utils";

interface SectionProps  extends  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
	children: React.ReactNode
}

const Section = ({children, ...props}: SectionProps) => {
	return (
		<div {...props} className={cn('py-[80px] lg:py-[120px] max-w-7xl mx-auto flex flex-col gap-10 px-4 2xl:px-0', props.className)}>
			{children}
		</div>
	);
};

export default Section;