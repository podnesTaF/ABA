import React from 'react';
import {Article} from "@/models/shared/article";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import {Calendar} from "lucide-react";
import {format} from "date-fns";

const NewsPreview = ({preview, variant}: {preview: Article, variant: "light" | 'dark'}) => {
	return (
		<div className={`rounded-lg overflow-hidden min-h-80 cursor-pointer ${variant === 'dark' ? "text-primary" : "text-white"}`}>
			<div className={'relative flex-1 rounded-lg overflow-hidden h-64'}>
				<Image src={getImageUrl(preview.previewImage.url)} alt={preview.previewImage.url} width={400} height={350} className={'w-full h-full object-cover hover:scale-105 transition-all duration-200'} />
				<div className={'backdrop-blur-lg px-3 py-2 flex gap-4 items-center absolute bottom-0 left-0 w-full z-10 rounded-lg'}>
					<Calendar className={'text-white w-4 h-4'} />
					<p>{format(preview.createdAt, 'dd/MM/yyyy')}</p>
				</div>
			</div>
			<div className={`py-4 flex flex-col`}>
				<h4 className={'font-bold text-lg hover:opacity-90'}>{preview.title}</h4>
				<p className={'text-base cursor-text'}>{preview.Excerpt}</p>
			</div>
		</div>
	);
};

export default NewsPreview;