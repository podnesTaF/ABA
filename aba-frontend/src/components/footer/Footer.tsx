'use client'
import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getFooter} from "@/api/layoutApi";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import Link from "next/link";
import {ParseContent} from "@/components/shared/Hero";

const Footer = () => {
	const {data} = useQuery({
		queryKey: ['footer'],
		queryFn: getFooter
	})

	return (
		<footer className={'text-white bg-primary rounded-t-2xl py-5 mt-auto'}>
			<div className={'max-w-7xl mx-auto px-5'}>
				<div className={'flex flex-col lg:flex-row justify-between gap-5'}>
					<div className={'flex flex-col lg:flex-row gap-5 lg:gap-16'}>
						{data?.contactDetails.map((info) => (
							<div key={info.id}>
								<h5 className={'uppercase text-xl mb-3 font-bold'}>{info.title}</h5>
								{info.description ? (
									<ParseContent text={info.description} secondaryTitleClassName={'text-white'} />
								) : (
									<div className={'flex items-center gap-3'}>
										{info.externalLinks.map(l => (
											<Link href={l.link} key={l.id} target={"_blank"}>
												<Image src={getImageUrl(l.icon.url)} alt={l.name} width={30} height={30} className={'text-white'} />
											</Link>
										))}
									</div>
								)}
							</div>
						))}
					</div>
					<div className={'h-auto flex flex-col justify-between items-start lg:items-end gap-5'}>
						<div className={'flex flex-col lg:flex-row gap-3 lg:gap-10'}>
							{data?.links.map(l => (
								<div key={l.id}>
									<Link href={l.link}  className={'text-white'}>
										{l.title}
									</Link>
								</div>
							))}
						</div>
						{data?.copyright && <div dangerouslySetInnerHTML={{__html: data?.copyright}}>
						</div>}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;