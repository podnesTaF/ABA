'use client'

import React, {useEffect, useState} from 'react';
import {useQuery} from "@tanstack/react-query";
import {getHeader} from "@/api/layoutApi";
import NavItem from "@/components/header/NavItem";
import Image from "next/image";
import {getImageUrl} from "@/lib/utils/imageHelpers";
import SubHeader from "@/components/header/SubHeader";
import MobileNav from "@/components/header/MobileNav";
import Link from "next/link";
import { motion, useAnimation } from 'framer-motion';

const Header = () => {
	const [lastScrollTop, setLastScrollTop] = useState(0); // Track previous scroll position
	const [isLogoVisible, setIsLogoVisible] = useState(false); // Track large logo visibility
	const { data } = useQuery({
		queryKey: ['header'],
		queryFn: getHeader,
	});

	const controls = useAnimation();

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;

			// Check if the scroll is past 48px to show/hide the large logo
			if (scrollTop > 48) {
				setIsLogoVisible(true);
			} else {
				setIsLogoVisible(false);
			}

			// Check scroll direction for applying blur
			if (scrollTop > lastScrollTop && scrollTop > 100) {
				controls.start({
					backdropFilter: 'blur(3px)',
					backgroundColor: 'rgba(0, 0, 0, 0.2)',
					transition: { duration: 0},
				});
			} else {
				controls.start({
					backdropFilter: 'blur(0px)',
					backgroundColor: '#1f1d20',
					transition: { duration: 0 },
				});
			}

			setLastScrollTop(scrollTop);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [lastScrollTop, controls]);


	if(!data) return null

	return (
		<div className={`z-20 ${isLogoVisible ? 'md:sticky md:-top-12' : 'md:relative'}`}>
			<SubHeader data={data}/>
			<div
				className={`hidden md:flex bg-[url('/placeholders/parallelogram.svg')] bg-no-repeat bg-cover absolute top-0 left-0 h-[108px] w-[255px] z-30 items-center pl-5 transition-all duration-200 ${isLogoVisible ? '-translate-y-full' : 'translate-y-0'}`}
			>
				<Link href={'/'}>
					<Image src={getImageUrl(data.largeLogo.url)} alt={'logo'} width={180} height={80} className={'h-20 w-auto'}/>
				</Link>
			</div>
			<motion.div animate={controls}
									className={`bg-primary pl-8 z-20 lg:px-8 lg:py-2 h-[60px] flex justify-between items-center gap-8 w-full fixed md:relative transition-all duration-300`}>
				<Link href={'/'}>
					<Image src={getImageUrl(data?.smallLogo.url)} alt={data?.smallLogo.name || 'logo'} width={100} height={30}
								 className={`h-8 w-auto opacity-100 ${isLogoVisible ? 'md:opacity-100' : 'md:opacity-0'}   transition-opacity duration-300`}/>
				</Link>
				<div className={"hidden lg:flex"}>
					{data?.primaryLinks.map((link, index, arr) => (
						<NavItem link={link} key={link.id} isLastWithItems={index === arr.length - 1 || index === arr.length - 2}/>
					))}
				</div>
				<MobileNav data={data}/>
			</motion.div>
		</div>
	);
};

export default Header;