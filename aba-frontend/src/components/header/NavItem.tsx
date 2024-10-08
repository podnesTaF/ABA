'use client'

import React, {useState} from 'react';
import {PrimaryLink} from "@/models/shared/link";
import {
	NavigationMenuContent, NavigationMenuIndicator,
	NavigationMenuItem, NavigationMenuLink,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle, NavigationMenuViewport
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {View} from "lucide-react";
import {cn} from "@/lib/utils";

interface NavItemProps {
	link: PrimaryLink
	isActive?: boolean
}

const NavItem = ({link, isActive}: NavItemProps) => {
	const [active, setActive] = useState(false)
	const single = link.secondaryLinks.length === 0
	return (
		<NavigationMenuItem>
			{single ? (
					<NavigationMenuLink href={link.link} className={cn(navigationMenuTriggerStyle(), 'bg-transparent text-white text-base font-semibold capitalize')}>
						{link.title}
					</NavigationMenuLink>
			) : (
				<div className={'relative'} onMouseEnter={() => setActive(true)} onMouseLeave={() => setActive(false)}>
					<NavigationMenuTrigger className={"py-0 px-5 text-white text-base font-semibold capitalize"}>
						{link.title}
						<div
							className={"absolute bottom-0 right-0 h-2 w-2 bg-white transition-all duration-100 group-data-[state=open]:bg-gray-200 triangle"}>

						</div>
					</NavigationMenuTrigger>
					<NavigationMenuContent>
						<ul className={"w-64 xl:w-72"}>
							{link.secondaryLinks.map(l => (
								<li className={"p-3"} key={l.id}>
									<Link href={l.link}>
										<p className={'font-bold uppercase'}>
											{l.title}
										</p>
									</Link>
								</li>
							))}
						</ul>
					</NavigationMenuContent>
					<NavigationMenuViewport className={`${active ? "block" : "hidden"} rounded-none rounded-b-2xl shadow-sm`}/>
				</div>
			)}
		</NavigationMenuItem>
	);
};

export default NavItem;