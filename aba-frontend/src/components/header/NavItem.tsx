'use client'

import React, {useState} from 'react';
import {PrimaryLink} from "@/models/shared/link";
import {
	NavigationMenuContent,
	NavigationMenuItem, NavigationMenuLink,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle, NavigationMenuViewport
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger} from "@/components/ui/menubar";

interface NavItemProps {
	link: PrimaryLink
	isActive?: boolean
}

const NavItem = ({link, isActive}: NavItemProps) => {
	const single = link.secondaryLinks.length === 0
	return (
		<MenubarMenu>
			{single ? (
					<Link href={link.link} className={cn(navigationMenuTriggerStyle(), 'bg-transparent text-white text-base font-semibold capitalize')}>
						{link.title}
					</Link>
			) : (
				<div className={'relative'}>
					<MenubarTrigger className={"py-0 px-5 text-white text-base font-semibold capitalize"}>
						<Link href={link.link}>
							{link.title}
							<div
								className={"absolute bottom-0 right-0 h-2 w-2 bg-white transition-all duration-100 group-data-[state=open]:bg-gray-200 triangle"}>
							</div>
						</Link>
					</MenubarTrigger>
					<MenubarContent>
							{link.secondaryLinks.map(l => (
								<MenubarItem className={"px-3 py-1"} key={l.id}>
										<Link href={l.link}>
											<p className={'font-bold !capitalize'}>
												{l.title}
											</p>
										</Link>
								</MenubarItem>
							))}
					</MenubarContent>
				</div>
			)}
		</MenubarMenu>
	);
};

export default NavItem;