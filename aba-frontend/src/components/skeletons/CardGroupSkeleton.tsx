import React from 'react';
import {Skeleton} from "@/components/ui/skeleton";
import {cn} from "@/lib/utils";

const CardGroupSkeleton = ({count = 1, itemClassName}: {count: number, itemClassName?: string}) => {
	return (
		<div className={'w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'}>
			{Array.from({length: count}).map((_, index) => (
				<Skeleton key={index} className={cn("w-full h-64", itemClassName)}/>
			))}
		</div>
	);
};

export default CardGroupSkeleton;