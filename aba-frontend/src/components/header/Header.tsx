'use client'

import React, {useEffect, useRef, useState} from 'react';
import {useQuery} from "@tanstack/react-query";
import {getHeader} from "@/api/layoutApi";
import {NavigationMenu, NavigationMenuList} from "@/components/ui/navigation-menu";
import NavItem from "@/components/header/NavItem";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import SubHeader from "@/components/header/SubHeader";
import MobileNav from "@/components/header/MobileNav";
import Link from "next/link";
import {Menubar, MenubarMenu, MenubarTrigger} from "@/components/ui/menubar";

const Header = () => {
	const [isSticky, setIsSticky] = useState(false);
	const trigger = useRef<any>()
	const {data} = useQuery({
		queryKey: ['header'],
		queryFn: getHeader,
	})

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 48) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	useEffect(() => {
		if(trigger.current) {
			console.log('click')
			trigger.current.click()
		}
	}, [trigger]);

	if(!data) return null

	return (
		<div className={`z-20 ${isSticky ? 'md:sticky md:-top-12' : 'md:relative'}`}>
			<SubHeader data={data}/>
			<div
				className={`hidden md:flex bg-[url('/placeholders/parallelogram.svg')] bg-no-repeat bg-cover absolute top-0 left-0 h-[108px] w-[255px] z-30 items-center pl-5 transition-all duration-200 ${isSticky ? '-translate-y-full' : 'translate-y-0'}`}>
				<Link href={'/'}>
					<Image src={getImageUrl(data.largeLogo.url)} alt={'logo'} width={180} height={80} className={'h-20 w-auto'}/>
				</Link>
			</div>
			<div className={`bg-primary pl-8 z-20 lg:px-8 lg:py-2 h-[60px] flex justify-between items-center gap-8 w-full fixed md:relative transition-all duration-300`}>
				<Image src={getImageUrl(data?.smallLogo.url)} alt={data?.smallLogo.name || 'logo'} width={100} height={30}
							 className={`h-8 w-auto opacity-100 ${isSticky ? 'md:opacity-100' : 'md:opacity-0'}   transition-opacity duration-300`}/>
				<Menubar ref={trigger} className={"bg-primary hidden lg:flex px-12"}>
						{data?.primaryLinks.map((link) => (
							<NavItem link={link} key={link.id}/>
						))}
				</Menubar>
				<MobileNav data={data} />
			</div>
		</div>
	);
};

export default Header;