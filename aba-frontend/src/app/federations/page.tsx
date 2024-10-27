'use client'
import React, {useState} from 'react';
import {useQuery} from "@tanstack/react-query";
import {getFederations, getFederationsPage} from "@/api/federationApi";
import Hero, {ParseContent} from "@/components/shared/Hero";
import ContentSection from "@/components/shared/ContentSection";
import {SearchIcon} from "lucide-react";
import ControlledInput from "@/components/form/ControlledInput";
import FederationCard from "@/components/shared/FederationCard";
import {useDebounce} from "@/lib/hooks/useDebounce";
import {Skeleton} from "@/components/ui/skeleton";
import Section from "@/components/layout/Section";
import Image from "next/image";

const FederationsPage = () => {
	const [name, setName] = useState("")
	const debouncedName = useDebounce(name, 500)
	const {data, isLoading} = useQuery({
		queryKey: ['federations', debouncedName],
		queryFn: () => getFederations({name: debouncedName}),
	})

	const {data: pageData} = useQuery({
		queryKey: ['federations-page'],
		queryFn: () => getFederationsPage()
	})

	if(!pageData) return null


	return (
		<div>
			<Hero content={pageData?.hero} />
			<div className={'-translate-y-10 rounded-3xl bg-white'}>
				<Section className={'relative'}>
						<ContentSection containerClass={'flex gap-4 flex-col lg:flex-row items-start'} content={pageData.aboutABA} secondaryTitleClassName={'flex flex-row-reverse items-center gap-2'}>
							{pageData.aboutABA.media?.url && <Image src={pageData.aboutABA.media.url} alt={pageData.aboutABA.media.name} width={400} height={350} /> }
						</ContentSection>
					<div className={'flex flex-col lg:flex-row gap-5 pt-20 lg:pt-24'}>
						<ParseContent text={pageData.federationHead.description!} mainTitleClassName={'font-bold text-2xl my-2'} secondaryTitleClassName={'text-xl font-medium ulist-base'} />
						<div className={"flex flex-col gap-12 flex-1 min-h-96"}>
							<div className={'flex justify-end'}>
								<div className={'max-w-sm w-full'}>
									<ControlledInput value={name} onChange={(t) => setName(t)} placeholder={'Search'} icon={
										<SearchIcon color={'black'} size={24}/>
									}/>
								</div>
							</div>
							<div className={'grid grid-cols-1 md:grid-cols-2 gap-8 w-full'}>
								{isLoading ? (
									Array.from({length: 4}).map((_,i) => (
										<Skeleton className={'h-64'} key={i} />
									))
								) : !data?.data?.length ? (
									<div className={'flex justify-center items-center'}>
										<h3>Not Found</h3>
									</div>
								) : data?.data.map(f => (
									<FederationCard federation={f} key={f.id}/>
								))}
							</div>
						</div>
					</div>
				</Section>
			</div>
		</div>
	);
};

export default FederationsPage;