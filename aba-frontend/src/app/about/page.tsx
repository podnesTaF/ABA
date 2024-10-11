'use client'

import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getAboutPage} from "@/api/aboutApi";
import Hero from "@/components/shared/Hero";
import Mission from "@/components/about/Mission";
import Values from "@/components/about/Values";
import ContentSection from "@/components/shared/ContentSection";
import History from "@/components/about/History";
import Structure from "@/components/shared/Structure";
import DocumentView from "@/components/shared/DocumentView";
import Contact from "@/components/about/Contact";

const AboutPage = () => {
	const {data} = useQuery({
		queryKey: ['about'],
		queryFn: getAboutPage
	})

	if(!data) return null

	return (
		<div className={'w-full'}>
			<Hero content={data.hero} />
			<Mission content={data.missions}/>
			<Values content={data.values} />
			<div id={'how-we-are-different'} className={'px-4 max-w-7xl mx-auto relative py-20'}>
				<ContentSection content={data.differences} />
			</div>
			<History  content={data.history} />
			<div id={'structure'} className={'my-16'}>
				<Structure  content={data.structure} />
			</div>
			<div id={'documentation'} className={"my-10 mx-auto max-w-7xl"}>
				<ContentSection content={data.legal}>
					<div className={'my-5'}>
						{data.legal.documents.map((
							d
						)=> (
							<DocumentView doc={d} key={d.id} />
						))}
					</div>
				</ContentSection>
			</div>
			<Contact  content={data.contact} />
		</div>
	);
};

export default AboutPage;