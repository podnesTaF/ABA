import React from 'react';
import {HeaderData} from "@/models/layout/header";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import LanguagePicker from "@/components/header/LanguagePicker";

const SubHeader = ({data}: {data: HeaderData}) => {
	return (
		<div className={"hidden md:flex w-full h-12 px-4 justify-end items-center gap-4 bg-background border-b-4 border-b-secondary"}>
			{data.socialMedias.map(link => (
				<a href={link.link} target={"_blank"} key={link.id}>
					<Image src={getImageUrl(link.icon.url)} alt={link.name} height={30} width={30} />
				</a>
			))}
			<LanguagePicker />
		</div>
	);
};

export default SubHeader;