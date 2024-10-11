import React from 'react';
import {AboutAB} from "@/models/pages/home";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import {ParseContent} from "@/components/shared/Hero";

const AboutAb = ({content}: {content: AboutAB}) => {
	return (
		<div className={"bg-white -my-10 w-full  justify-center items-center -translate-y-10 rounded-3xl relative z-[2]"}>
			<div className={'p-[5%] max-w-7xl mx-auto flex flex-col gap-10'}>
				<div className={'flex gap-10 xl:gap-12 items-center flex-col md:flex-row'}>
					<div className={'flex flex-col gap-5 flex-1'}>
						<h3 className={'font-semibold'}>
							{content.sectionTitle}
						</h3>
						<div>
							<h2 className={'text-xl md:text-2xl xl:text-5xl font-bold'}>
								{content.title}
							</h2>
							<ParseContent text={content.description} secondaryTitleClassName={'text-lg md:text-xl xl:text-2xl'} />
						</div>
						<div>
							<Button className={'text-white bg-secondary hover:bg-secondary/80 rounded-full'}>
								<Link href={content.ctaButton.link}>
									{content.ctaButton.title}
								</Link>
							</Button>
						</div>
					</div>
					<div className={'flex-1'}>
						<Image src={getImageUrl(content.sideImage.url)} alt={content.sideImage.name} width={500} height={440}
									 className={'rounded-2xl'}/>
					</div>
				</div>
				<div
					className={'-mt-32 md:-mt-0 w-full flex justify-between gap-5 flex-col sm:flex-row flex-wrap lg:flex-nowrap rounded-[48px] p-10 md:p-6 lg:p-10 bg-primary z-[2]'}>
					{content.coreValues.map((value) => (
						<div key={value.id} className={"flex flex-col gap-3 w-full sm:w-1/2 md:w-1/4"}>
							<h4 className={'text-white text-xl font-bold italic'}>{value.title}</h4>
							<div className={'w-1/2 h-1 rounded-2xl bg-white'}></div>
							<ParseContent text={value.description} secondaryTitleClassName={'text-white text-base font-bold'} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default AboutAb;