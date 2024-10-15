'use client'
import React, {useState} from 'react';
import {useQuery} from "@tanstack/react-query";
import {getFederations, getFederationsPage} from "@/api/federationApi";
import Hero, {ParseContent} from "@/components/shared/Hero";
import ContentSection from "@/components/shared/ContentSection";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import {FormInput, SearchIcon} from "lucide-react";
import ControlledInput from "@/components/form/ControlledInput";
import FederationCard from "@/components/shared/FederationCard";
import {cn} from "@/lib/utils";

const FederationsPage = () => {
	const [name, setName] = useState("")
	const {data} = useQuery({
		queryKey: ['federations', name],
		queryFn: () => getFederations(),
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
				<div className={"max-w-7xl px-4 mx-auto py-12 flex flex-col gap-12"}>
					<ContentSection content={pageData.aboutABA} secondaryTitleClassName={'flex flex-row-reverse items-center gap-2'} />
					<div className={'flex flex-col lg:flex-row gap-5'}>
						<ParseContent text={pageData.federationHead.description!} mainTitleClassName={'font-bold text-2xl my-2'} secondaryTitleClassName={'text-xl font-medium ulist-base'} />
						<div className={"flex flex-col gap-12"}>
							<div className={'flex justify-end'}>
								<div className={'max-w-sm w-full'}>
									<ControlledInput value={name} onChange={(t) => setName(t)} placeholder={'Search'} icon={
										<SearchIcon color={'black'} size={24}/>
									}/>
								</div>
							</div>
							<div className={'grid grid-cols-1 md:grid-cols-2 gap-8'}>
								{data?.data.map(f => (
									<FederationCard federation={f} key={f.id}/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FederationsPage;