import React from 'react';
import {InfoField} from "@/models/shared/infoField";
import {Media} from "@/models/shared/media";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import Link from "next/link";

const FederationInfoCard = ({details, logo}: {details:InfoField[], logo: Media} ) => {
	return (
		<div className={'max-w-md py-3 px-4 flex flex-col gap-3 items-center rounded-xl bg-muted'}>
			<Image src={getImageUrl(logo.url)} alt={logo.name} width={350} height={100} className={'w-4/5 h-auto'} />
			<div className={'flex flex-col gap-2 w-full flex-1'}>
				{details.map((d, i, a) => (
					<div key={d.id} className={`py-2 border-b-gray-300/50 flex justify-between items-center ${i !== a.length - 1 ? 'border-b' : 'border-b-0'}`}>
						<p className={'font-semibold text-lg'}>
							{d.name}
						</p>
						{d.link ? (
							<Link href={d.link || ''}>
								<p className={'font-medium text-lg'}>
									{d.value}
								</p>
							</Link>
						) : (
							<p className={'font-medium text-lg'}>
								{d.value}
							</p>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default FederationInfoCard;