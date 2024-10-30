import React from 'react';
import {Federation} from "@/models/shared/federation";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import {Button} from "@/components/ui/button";
import Link from "next/link";

const FederationCard = ({federation}: {federation: Federation}) => {
	return (
		<div className={'rounded-xl bg-white shadow-md h-fit'}>
			<Image src={getImageUrl(federation.logo.url)} alt={federation.logo.name} width={450} height={240} className={'max-w-[250px] md:max-w-none md:w-full h-auto'} />
			<div className={'flex justify-between gap-3 items-end p-4'}>
				<div className={'flex gap-3 items-center flex-[3] h-[70px]'}>
					<Image src={getImageUrl(federation.region.flag.url)} alt={federation.region.name} width={70} height={70} className={'rounded-lg w-12 h-12 md:w-16 md:h-16 object-cover'} />
					<h4 className={'text-secondary font-bold uppercase text-base md:text-lg'}>
						{federation.name}
					</h4>
				</div>
				<Button className={'bg-primary text-white flex-[1]'}>
					<Link href={'/federations/' + federation.slug}>
						Details
					</Link>
				</Button>
			</div>
		</div>
	);
};

export default FederationCard;