'use client'
import React from 'react';
import {Hero as HeroType} from "@/models/shared/hero";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import parse, {domToReact, HTMLReactParserOptions} from 'html-react-parser';
import Link from "next/link";

const Hero = ({content}: {content: HeroType}) => {

	const withLinks = !!content.links.length

	return (
		<div className={'w-full relative py-20 md:pt-[10%] pb-16'}>
			<Image src={getImageUrl(content.backgroundImage.url)} alt={content.backgroundImage.name} width={1440} height={600} className={'w-full h-full object-cover object-center absolute left-0 top-0'} />
			<div className={'absolute left-0 top-0 bottom-0 right-0 bg-primary/50'} />
			<div className={'mx-auto max-w-7xl px-4 z-10 relative'}>
				<ParseContent text={content.title} mainTitleClassName={'text-xl font-bold text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl 2xl:text-7xl'} />
				{withLinks &&
						<div className={'flex flex-col md:flex-row gap-2'}>
					{content.links.map((l, index) => (
						<div key={l.id} className={`px-3 py-1 border-b-secondary ${index === 0 ? "border-b-2" : "border-b-0"} hover:opacity-90`}>
							<Link href={l.link}>
								<h4 className={`${index === 0 ? "text-secondary" : "text-white"} text-base font-semibold`}>
									{l.title}
								</h4>
							</Link>
						</div>
					))}
            </div>}
			</div>
		</div>
	);
};

export const ParseContent = ({ text, mainTitleClassName, secondaryTitleClassName}: {text: string, mainTitleClassName?:string, secondaryTitleClassName?: string}) => {
	const options: HTMLReactParserOptions = {
		replace: (domNode: any) => {
			if (domNode.type === 'tag') {
				if (domNode.name.match(/^h[1-6]$/)) {
					const Tag = domNode.name as keyof JSX.IntrinsicElements;
					return (
						<Tag className={mainTitleClassName}>
							{domToReact(domNode.children)}
						</Tag>
					);
				}
				const Tag = domNode.name as keyof JSX.IntrinsicElements;
				return (
					<Tag className={secondaryTitleClassName}>
						{domToReact(domNode.children)}
					</Tag>
				);
			}
		},
	};

	return <div>{parse(text, options)}</div>;
};

export default Hero;