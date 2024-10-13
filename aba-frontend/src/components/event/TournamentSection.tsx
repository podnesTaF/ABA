import React from 'react';
import {Tournament} from "@/models/pages/tournament";
import {ParseContent} from "@/components/shared/Hero";

const TournamentSection = ({content, index}: {content: Tournament, index: number}) => {
	return (
		<div className={'flex'}>
			<div className={'transform-y-20 text-right relative'}>

			</div>
		</div>
	);
};


const AboutSection = ({content, index}: {content: Tournament, index: number}) => {
	return (
		<div className={'flex flex-col gap-5'}>
			<h3 className={"mr-3 text-2xl lg:text-4xl 2xl:text-6xl font-bold max-w-md"}>
				{content.title}
			</h3>
			<ParseContent text={content.description} secondaryTitleClassName={'text-lg lg:text-xl font-medium'} />
			<div className={'flex flex-col gap-4'}>
				<h4 className={"mr-3 text-xl lg:text-2xl font-bold"}>{content.purpose.title}</h4>
				{content.purpose.links.map((l, index) => (
					<div className={'relative'} key={l.id}>
						<h5 className={'text-3xl lg:text-6xl font-bold text-gray-500/50 absolute left-0 -top-1/2'}>
							{index + 1}.
						</h5>
						<h5 className={'text-xl font-semibold'}>
							{l.title}
						</h5>
						<ParseContent text={l.description!} secondaryTitleClassName={'text-lg xl:text-xl'} />
					</div>
				))}
			</div>
		</div>
	)
}

export default TournamentSection;