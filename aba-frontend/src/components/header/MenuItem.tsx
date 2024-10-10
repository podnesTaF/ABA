import React, {useState} from 'react';
import {PrimaryLink} from "@/models/shared/link";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ChevronRight} from "lucide-react";

const MenuItem = ({link, last}: {link: PrimaryLink, last: boolean}) => {
	const [isExpanded, setIsExpanded] = useState(false)
	const single = link.secondaryLinks.length < 1;
	return (
		<div className={`py-2 border-b border-b-secondary ${last && 'border-b-0'}`}>
			<div className={'flex justify-between'}>
				<Link href={link.link} className={'text-lg font-semibold flex-1 capitalize leading-8'}>
					{link.title}
				</Link>
				{!single && <Button variant={'ghost'} onClick={() => setIsExpanded(prev => !prev)}>
					<ChevronRight className={`${isExpanded ? 'rotate-90' : "rotate-0"} transition-all duration-200 text-2xl`}/>
				</Button>}
			</div>
			{!single && (
				<div className={`transition-all overflow-hidden ${isExpanded ? 'h-auto' : "h-0"}`}>
					<div
						className={`px-[10%] py-4 flex flex-col gap-3`}>
						{link.secondaryLinks.map((l) => (
							<div key={l.id}>
								<Link href={l.title} className={"text-gray-300 capitalize"}>
									{l.title}
								</Link>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default MenuItem;