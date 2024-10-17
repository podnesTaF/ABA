'use client'

import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getFederation} from "@/api/federationApi";
import Hero, {ParseContent} from "@/components/shared/Hero";
import FederationInfoCard from "@/components/shared/FederationInfoCard";
import ContentSection from "@/components/shared/ContentSection";
import DocumentView from "@/components/shared/DocumentView";

const FederationPage = ({params: {slug}}: { params: { slug: string } }) => {

	const {data} = useQuery({
		queryKey: ['federation', slug],
		queryFn: () => getFederation(slug)
	})

	console.log(data)
	if (!data) return null

	return (
		<>
			<div className={'z-[3] rounded-b-3xl overflow-hidden'}>
				<Hero content={data.hero}/>
			</div>
			<div className={'flex flex-col-reverse lg:flex-row gap-8 lg:gap-4 xl:gap-10 mx-auto max-w-7xl px-4'}>
				<div className={'py-12 max-w-5xl flex-1 flex flex-col gap-8'}>
					<div className={'flex gap-6 flex-col'}>
						{data.about.map((content) => (
							<ParseContent text={content.text} key={content.id} mainTitleClassName={'text-xl mt-5 mb-3'} secondaryTitleClassName={'ulist-base'}/>
						))}
					</div>
					{data.history.description && <div>
              <h3 className={'font-bold text-xl xl:text-2xl mb-2'}>{data.history.title}</h3>
              <div className={'bg-muted rounded-lg overflow-hidden border-l-2 border-l-secondary px-4 py-6'}>
                  <ParseContent  mainTitleClassName={'text-xl mt-5 mb-3'} text={data.history.description}/>
              </div>
          </div>}
					<div>
						<ParseContent text={data.structure.title} mainTitleClassName={'font-bold text-xl xl:text-2xl mb-6'}/>
						<div className={'flex flex-wrap gap-8 justify-between'}>
							{data.structure.people.map(p => (
								<div key={p.id}>
									<h4 className={'font-bold text-2xl mb-5'}>
										{p.fullName}
									</h4>
									<p>{p.role}</p>
								</div>
							))}
						</div>
					</div>
					<div id={'documentation'}>
						<h3 className={'font-bold text-xl xl:text-2xl mb-2'}>{data.documentSection.title}</h3>
						<div className={'my-5'}>
							{data.documentSection.documents.map((
								d
							) => (
								<DocumentView doc={d} key={d.id}/>
							))}
						</div>
					</div>
				</div>
				<div className={'z-[5] lg:sticky mt-5 lg:mt-0 lg:-translate-y-20 lg:top-40 h-fit'}>
				<FederationInfoCard details={data.details} logo={data.logo}/>
				</div>
			</div>
		</>
	);
};

export default FederationPage;