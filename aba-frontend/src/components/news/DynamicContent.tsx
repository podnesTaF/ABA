import React from 'react';
import {ContentBlock, ContentBlockMedia, ContentBlockText} from "@/models/shared/blocks";
import {ParseContent} from "@/components/shared/Hero";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";

interface DynamicContentProps {
	item: ContentBlock
}

const isMediaBlock = (block: ContentBlock): block is ContentBlockMedia => {
	return 'image' in block;
};

const isTextBlock = (block: ContentBlock): block is ContentBlockText => {
	return 'text' in block;
};

const DynamicContent = ({item}:DynamicContentProps) => {
	return (
		<div>
			{isTextBlock(item) ? (
				<ParseContent text={item.text} key={item.id} mainTitleClassName={'text-xl md:text-2xl xl:text-3xl font-bold my-4'} secondaryTitleClassName={"ulist-base listitem-base olist-base text-base md:text-lg"}/>
			) : isMediaBlock(item) && (
				<div className={'w-full flex flex-col gap-4'}>
					<Image src={getImageUrl(item.image.url)} alt={item.image.name} width={780} height={500} className={'w-full max-h-[600px] h-auto object-contain'} />
					{item.image.caption && (
						<div className={'py-5 px-4 border-l-secondary border-l-2'}>
							{item.image.caption}
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default DynamicContent;