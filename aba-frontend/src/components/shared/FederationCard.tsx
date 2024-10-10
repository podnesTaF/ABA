import React from 'react';
import {Federation} from "@/models/shared/federation";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import {Button} from "@/components/ui/button";

const FederationCard = ({federation}: {federation: Federation}) => {
	return (
		<div className={'rounded-xl bg-white shadow-md'}>
			<Image src={getImageUrl(federation.flag.url)} alt={federation.flag.name} width={450} height={240} className={'w-full h-auto'} />
			<div className={'flex justify-between gap-3 items-end p-4'}>
				<div className={'flex gap-3 items-center flex-[3] h-[70px]'}>
					<Image src={getImageUrl(federation.location.region.flag.url)} alt={federation.name} width={70} height={70} className={'rounded-lg w-16 h-16 object-cover'} />
					<h4 className={'text-secondary font-bold uppercase text-lg'}>
						{federation.name}
					</h4>
				</div>
				<Button className={'bg-primary text-white flex-[1]'}>
					Details
				</Button>
			</div>
		</div>
	);
};

export default FederationCard;