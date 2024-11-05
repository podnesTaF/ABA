'use client'

import React, {useRef, useState} from 'react';
import {PrimaryLink} from "@/models/shared/link";
import {
	navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import {cn} from "@/lib/utils";

interface NavItemProps {
	link: PrimaryLink
	isActive?: boolean
	isLastWithItems: boolean
}

const NavItem = ({link, isActive, isLastWithItems}: NavItemProps) => {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null); // Reference to the dropdown
	const single = link.secondaryLinks.length === 0;
	const mouseLeaveTimeout = useRef<NodeJS.Timeout | null>(null); // To debounce mouse leave


	const handleMouseEnter = () => {
		setDropdownOpen(true); // Open the dropdown
		if (mouseLeaveTimeout.current) {
			clearTimeout(mouseLeaveTimeout.current); // Clear any pending close timeout
		}
	};

	// Close the dropdown with a slight delay to prevent flicker
	const handleMouseLeave = () => {
		mouseLeaveTimeout.current = setTimeout(() => {
			setDropdownOpen(false);
		}, 100); // 100ms delay to prevent flicker when moving the mouse
	};


	return (
		<div className="relative group bg-transparent"
				 onMouseEnter={handleMouseEnter}
				 onMouseLeave={handleMouseLeave}
		>
			{single ? (
				<Link href={link.link}
							className={cn(navigationMenuTriggerStyle(), 'bg-transparent text-white text-base font-semibold capitalize')}>
					{link.title}
				</Link>
			) : (
				<div
					className="relative"
				>
					{/* Trigger for Dropdown */}
					<Link href={link.link}>
						<div
							className={cn(
								'cursor-pointer text-white text-base font-semibold capitalize py-2 px-5 transition-colors duration-200 hover:bg-primary/20',
								isActive && 'bg-primary/50'
							)}
						>
							{link.title}
							<div
								className={"absolute bottom-0 right-0 h-2 w-2 bg-white transition-all duration-100 group-data-[state=open]:bg-gray-200 triangle"}>
							</div>
						</div>
					</Link>
					{/* Dropdown Menu */}
					<div
						ref={dropdownRef}
						className={cn(
							`absolute mt-2 w-64 border-t-2 border-t-secondary left-0 shadow-lg transition-transform duration-100 ease-out origin-top `,
							dropdownOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
							isLastWithItems ? "-translate-x-32" : "translate-x-0"
						)}
					>
						<div className={`h-3 w-3 bg-secondary rotate-45 translate-y-1.5 absolute z-[0] -top-3 ${
							isLastWithItems ? "right-5":"left-5"
						}`}>
						</div>
					<div className={'bg-white rounded-b-xl relative overflow-hidden'}>
						{link.secondaryLinks.map((l) => (
							<div key={l.id} className="px-4 py-2 hover:bg-gray-200">
								<Link href={l.link}>
									<p className="font-bold text-black capitalize">{l.title}</p>
								</Link>
							</div>
						))}
					</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default NavItem;