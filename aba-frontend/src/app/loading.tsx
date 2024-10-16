'use client'

import NProgress from 'nprogress';
import { useEffect } from 'react';
import {Skeleton} from "@/components/ui/skeleton";
import HeroSkeleton from "@/components/skeletons/HeroSkeleton";

export default function Loading() {
	useEffect(() => {
		NProgress.start();
		return () => {
			NProgress.done();
		};
	}, []);

	return (
		<div className="space-y-4">
			<HeroSkeleton/>
			<Skeleton className="w-full h-96"/>
			<Skeleton className={'w-full h-[400px]'} />
		</div>
	);
}