import React from 'react';
import Image from "next/image";
import {Form} from "@/models/shared/form";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import {ParseContent} from "@/components/shared/Hero";
import ContactForm from "@/components/about/ContactForm";

const Contact = ({content}: {content: Form}) => {


	return (
		<div id={'contact'} className={'rounded-t-3xl bg-muted px-5 py-20 md:py-20 lg:py-24'}>
			<div className={'mx-auto max-w-7xl flex flex-col-reverse md:flex-row gap-6'}>
				<Image src={getImageUrl(content.sideMedia.url)} alt={content.sideMedia.name} className={'w-full md:w-1/3 h-auto object-cover object-right-bottom rounded-2xl'} width={400} height={600} />
				<div className={'flex-1 flex flex-col items-center py-4 md:py-12'}>
					<div className={'mb-8 md:mb-12'}>
						<ParseContent text={content.title} mainTitleClassName={'text-2xl md:text-3xl xl:text-3xl font-bold text-center'} secondaryTitleClassName={'text-center'} />
					</div>
					<ContactForm btn={content.submitBtn} fields={content.fields} />
				</div>
			</div>
		</div>
	);
};

export default Contact;