'use client'

import React, {useEffect, useState} from 'react';
import {useQuery} from "@tanstack/react-query";
import {getHeader} from "@/api/layoutApi";
import {NavigationMenu, NavigationMenuList} from "@/components/ui/navigation-menu";
import NavItem from "@/components/header/NavItem";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import SubHeader from "@/components/header/SubHeader";

const Header = () => {
	const [isSticky, setIsSticky] = useState(false);
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

	if(!data) return null

	return (
		<div className={``}>
			<SubHeader data={data}/>
			<div
				className={`bg-[url('/placeholders/parallelogram.svg')] bg-no-repeat bg-cover absolute top-0 left-0 h-[108px] w-[255px] z-10 flex items-center pl-5 transition-all duration-200 ${isSticky ? '-translate-y-full' : 'translate-y-0'}`}>
				<Image src={getImageUrl(data.largeLogo.url)} alt={'logo'} width={180} height={80} className={'h-20 w-auto'}/>
			</div>
			<div className={`bg-primary px-8 py-2 h-[60px] flex justify-between items-center gap-8 w-full ${isSticky ? 'fixed top-0' : ''} transition-all duration-300`}>
				<Image src={getImageUrl(data?.smallLogo.url)} alt={data?.smallLogo.name || 'logo'} width={100} height={30}
							 className={`h-8 w-auto ${isSticky ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}/>
				<NavigationMenu className={"bg-primary hidden md:block"}>
					<NavigationMenuList>
						{data?.primaryLinks.map((link) => (
							<NavItem link={link} key={link.id}/>
						))}
					</NavigationMenuList>
				</NavigationMenu>
			</div>
		</div>
	);
};

export default Header;