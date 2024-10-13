'use client'

import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getTournamentsPage} from "@/api/tournaments";
import Hero from "@/components/shared/Hero";

const Page = () => {
	const {data} = useQuery({
		queryKey: ['tournaments'],
		queryFn: getTournamentsPage
	})

	if(!data) return null;

	return (
		<div className={'w-full'}>
			<Hero content={data.hero} />

		</div>
	);
};

export default Page;