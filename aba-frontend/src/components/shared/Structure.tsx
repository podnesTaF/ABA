'use client'
import React, {useState} from 'react';
import {ArrowRight} from "lucide-react";



const Structure = ({content, children, onChange}: { content: {title: string, items: { id: number, title: string }[]}, onChange: (item: any) => void, children: React.ReactNode }) => {
	const [activeItem, setActiveItem] = useState(content.items[0])


	return (
		<div className={'max-w-7xl mx-auto w-full relative'}>
			<h3 className={'font-bold text-xl uppercase mb-4'}>{content.title}</h3>
			<div className={'flex flex-col md:flex-row gap-5 lg:gap-8'}>
				<div className={'rounded-xl bg-primary w-full flex flex-col md:w-96 h-fit md:sticky md:top-20'}>
					{content.items.map((p => (
						<div onClick={() => {
							onChange(p)
							setActiveItem(p)}
						} key={p.id}
								 className={`flex gap-5 w-full justify-between items-center py-3 px-4 rounded-xl text-white ${p.id === activeItem.id ? "bg-secondary" : "bg-primary"} cursor-pointer hover:opacity-90`}>
							<p className={'font-bold text-lg md:text-xl'}>
								{p.title}
							</p>
							<ArrowRight size={32} color={'white'}/>
						</div>
					)))}
				</div>
				{children}
			</div>
		</div>
	);
};

export default Structure;