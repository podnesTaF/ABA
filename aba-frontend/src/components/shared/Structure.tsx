'use client'
import React, {useState} from 'react';
import type {Structure} from "@/models/pages/about";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import Link from "next/link";
import {ArrowRight} from "lucide-react";

	const Structure = ({content}:{content: Structure}) => {
		const [activePerson, setActivePerson] = useState(content.people[0])
	return (
		<div className={'max-w-7xl mx-auto px-4 relative'}>
			<h3 className={'font-bold text-xl mb-4'}>{content.title}</h3>
			<div className={'flex flex-col md:flex-row gap-5 lg:gap-8'}>
				<div className={'rounded-xl overflow-hidden bg-primary w-full sm:w-1/2 md:w-1/3 h-fit md:sticky md:top-20'}>
					{content.people.map((p => (
						<div onClick={() => setActivePerson(p)} key={p.id} className={`flex gap-5 justify-between items-center py-3 px-4 rounded-xl text-white ${p.id === activePerson.id ? "bg-secondary" : "bg-primary"} cursor-pointer hover:opacity-90`}>
							<p className={'font-bold text-lg md:text-xl'}>
								{p.role}
							</p>
							<ArrowRight size={32} color={'white'} />
						</div>
					)))}
				</div>
				{activePerson && (
					<div className={'relative flex-1 rounded-2xl overflow-hidden'}>
						<Image src={getImageUrl(activePerson.image.url)} alt={activePerson.image.name} height={500} width={350} className={'w-full h-auto'} />
						<div className={'absolute bottom-0 left-0 w-full backdrop-blur-lg p-3 text-white font-bold'}>
								<h4 className={'text-base md:text-lg'}>
									{activePerson.role}
								</h4>
							<h3 className={'text-lg md:text-xl'}>
								{activePerson.fullName}
							</h3>
							<div className={'flex gap-3 items-center mt-3'}>
								{activePerson.links.map(l => (
								<div key={l.id}>
									<Link href={l.link} target={"_blank"}>
										<Image src={getImageUrl(l.icon.url)} alt={l.icon.name} width={40} height={40} />
									</Link>
								</div>
								))}
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
	};

export default Structure;