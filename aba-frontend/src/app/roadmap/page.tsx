'use client'
import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getRoadmap} from "@/api/roadmap";
import Hero, {ParseContent} from "@/components/shared/Hero";
import Section from "@/components/layout/Section";

const Page = () => {
	const {data, isLoading} = useQuery({
		queryKey: ['roadmap'],
		queryFn: getRoadmap
	})

	if(!data) return null;

	return (
		<>
			<Hero content={data.hero} isLoading={isLoading} />
			<div id={'mission-values'} className={'rounded-3xl w-full bg-white -mt-10 relative z-10'}>
				<Section className={'max-w-4xl'}>
					<div className={'relative flex flex-col px-7'}>
						{data.milestones.map((item, index, arr) => (
							<div key={item.id} className={`border-secondary/20 ${(index === 0 || index === arr.length - 1) ? "" : "border-l" }`}>
								<h3 className={`pl-5 md:pl-10 font-bold text-4xl pb-5 border-secondary/20 ${index === arr.length - 1 ? "border-l" : ""}`}>
									{item.title}
								</h3>
								<div className={'flex flex-col gap-5 md:gap-7'}>
									{item.items.map((item, i, array) => (
										<div className={`pl-5 md:pl-10 relative border-secondary/20 ${i === array.length - 1 ? "pb-8 lg:pb-12" : ""} ${index === 0 ? "border-l" : ""}`} key={item.id}>
											<div className={'bg-secondary w-8 h-4 rounded-full absolute -left-4 top-0'}></div>
											<ParseContent text={item.content} secondaryTitleClassName={'text-xl font-medium leading-[150%]'} />
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</Section>
			</div>
		</>
	);
};

export default Page;