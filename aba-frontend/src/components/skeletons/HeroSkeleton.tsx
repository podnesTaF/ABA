import React from 'react';
import {Skeleton} from "@/components/ui/skeleton";

const HeroSkeleton = () => {
	return (
		<div className={'w-full relative'}>
			<Skeleton className="w-full h-96"/>
			<div className={'absolute bottom-20 left-20 max-w-7xl px-4 mx-auto'}>
				<Skeleton className={'w-1/2 h-20 mb-5'} />
				<div className={'flex gap-5'}>
					<Skeleton className={'w-20 h-12'} />
					<Skeleton className={'w-20 h-12'} />
					<Skeleton className={'w-20 h-12'} />
				</div>
			</div>
		</div>
	);
};

export default HeroSkeleton;