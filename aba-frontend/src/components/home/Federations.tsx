import React from 'react';
import {FederationsHome} from "@/models/pages/home";
import {Federation} from "@/models/shared/federation";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import FederationCard from "@/components/shared/FederationCard";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import {ParseContent} from "@/components/shared/Hero";
import Section from "@/components/layout/Section";

const Federations = ({content, federations}: {content: FederationsHome, federations: Federation[]}) => {
	return (
			<Section className={'gap-4 pt-0 lg:pt-0'}>
				<div className={'flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-5 mb-5 lg:mb-8'}>
					<h3 className={'uppercase text-xl md:text-2xl xl:text-3xl font-bold'}>
						{content.title}
					</h3>
					<Button hideIcon variant={'ghost'}>
						<Link href={content.ctaButton.link} className={'text-secondary'}>
							{content.ctaButton.title}
						</Link>
					</Button>
				</div>
				<div className={'flex gap-4 flex-col-reverse md:flex-row'}>
					<div className={'flex-[2] grid grid-cols-1 sm:grid-cols-2 gap-4'}>
						{federations.map((f) => (
							<FederationCard key={f.id} federation={f} />
						))}
					</div>
					<div className={'bg-primary flex-1 h-auto p-5 rounded-3xl flex flex-col items-center justify-center gap-5'}>
						<Image  src={getImageUrl(content.associationMedia.url)} alt={content.associationMedia.name} width={300} height={110} className={'object-contain object-center'} />
						<ParseContent text={content.associationDescription} secondaryTitleClassName={'text-white'} />
						<Button variant={'light'}>
							<Link href={content.ctaButton.link} >
								{content.ctaButton.title}
							</Link>
						</Button>
					</div>
				</div>
			</Section>
	);
};

export default Federations;