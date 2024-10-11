import React from 'react';
import Image from "next/image";
import {Form} from "@/models/shared/form";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import {ParseContent} from "@/components/shared/Hero";
import ContactForm from "@/components/about/ContactForm";
import {Button} from "@/components/ui/button";

const Contact = ({content}: {content: Form}) => {


	return (
		<div id={'contact'} className={'mt-10 rounded-t-3xl bg-muted px-4 py-6 lg:py-12'}>
			<div className={'mx-auto max-w-7xl flex flex-col-reverse md:flex-row gap-6'}>
				<Image src={getImageUrl(content.sideMedia.url)} alt={content.sideMedia.name} className={'w-full md:w-1/3 h-auto object-cover rounded-2xl'} width={400} height={600} />
				<div className={'flex-1 flex flex-col items-center py-12'}>
					<div className={'mb-6'}>
						<ParseContent text={content.title} mainTitleClassName={'text-xl md:text-2xl xl:text-3xl font-bold text-center'} secondaryTitleClassName={'text-center'} />
					</div>
					<ContactForm btn={content.submitBtn} fields={content.fields} />
				</div>
			</div>
		</div>
	);
};

export default Contact;