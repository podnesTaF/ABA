'use client'

import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getAboutPage} from "@/api/aboutApi";
import Hero from "@/components/shared/Hero";
import Mission from "@/components/About/Mission";

const AboutPage = () => {
	const {data} = useQuery({
		queryKey: ['about'],
		queryFn: getAboutPage
	})

	if(!data) return null

	return (
		<div className={'w-full'}>
			<Hero content={data.hero} />
			<Mission content={data.missions}/>
		</div>
	);
};

export default AboutPage;