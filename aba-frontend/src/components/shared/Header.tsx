'use client'
import React, {useEffect} from 'react';
import {useQuery} from "@tanstack/react-query";
import {getHeader} from "@/api/layoutApi";

const Header = () => {
	const {data} = useQuery({
		queryKey: ['header'],
		queryFn: getHeader,
	})

	return (
		<div>
			{JSON.stringify(data)}
		</div>
	);
};

export default Header;