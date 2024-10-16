'use client'

import React from 'react';
import {useQuery} from "@tanstack/react-query";
import {getArticle} from "@/api/newsApi";

const ArticlePage = ({params: {slug}}: {params: {slug: string}}) => {
	const {data} = useQuery({
		queryKey: ['article', slug],
		queryFn: () => getArticle(slug),
		retryDelay: 10000
	})

	console.log(data)

	if(!data) return

	return (
		<div>
			{data.title}
		</div>
	);
};

export default ArticlePage;