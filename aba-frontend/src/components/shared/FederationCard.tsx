import React from 'react';
import {Federation} from "@/models/shared/federation";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";

const FederationCard = ({federation}: {federation: Federation}) => {
	return (
		<div className={'rounded-xl bg-white shadow-md h-fit pt-5'}>
			<div className={'flex justify-center'}>
				<Image src={getImageUrl(federation.logo.url)} alt={federation.logo.name} width={450} height={240} className={'max-w-[250px] md:max-w-[350px] h-auto max-h-[100px] '} />
			</div>
			<div className={'flex justify-between gap-3 items-end p-4'}>
				<div className={'flex gap-3 items-center flex-[3] h-[70px]'}>
					<Image src={getImageUrl(federation.region.flag.url)} alt={federation.region.name} width={70} height={70} className={'rounded-lg w-12 h-12 md:w-16 md:h-16 object-cover'} />
					<h4 className={'text-secondary font-bold uppercase text-base md:text-lg'}>
						{federation.name}
					</h4>
				</div>
				<h4 className={'text-primary font-semibold text-lg'}>
					Soon...
				</h4>
				{/*<Button className={'bg-primary text-white flex-[1]'}>*/}
				{/*	<Link href={'/federations/' + federation.slug}>*/}
				{/*		Details*/}
				{/*	</Link>*/}
				{/*</Button>*/}
			</div>
		</div>
	);
};

export default FederationCard;