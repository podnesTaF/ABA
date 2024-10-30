import React from 'react';
import {Media} from "@/models/shared/media";
import {FileSearch2} from "lucide-react";
import {getImageUrl} from "@/lib/utils/imageHelpers";

const DocumentView = ({doc}: {doc: Media}) => {
	return (
		<a href={getImageUrl(doc.url)} target={"_blank"} download>
			<div className={'w-full rounded-xl border-l-secondary border-l-2 px-3 py-4 flex flex-col sm:flex-row gap-5 items-center bg-muted relative'}>
				<div className={'w-16 h-16 flex justify-center items-center bg-primary rounded-xl'}>
					<FileSearch2 className={'text-muted w-8 h-10'}/>
				</div>
				<div className={'flex flex-col max-w-full'}>
					<h4 className={'text-lg md:text-xl font-bold'}>
						{doc.caption}
					</h4>
					<p className={'max-w-full'}>{doc.name}</p>
				</div>
			</div>
		</a>
	);
};

export default DocumentView;