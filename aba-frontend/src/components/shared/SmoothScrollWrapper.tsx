'use client'

import { motion, useScroll, useTransform } from 'framer-motion';

import React, {ReactNode, useEffect, useRef} from 'react';

interface SmoothScrollWrapperProps {
	children: ReactNode;
	onScroll?: (scrollY: number) => void;
}

const SmoothScrollWrapper: React.FC<SmoothScrollWrapperProps> = ({ children, onScroll }) => {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollY } = useScroll({ container: ref });

	const y = useTransform(scrollY, [0, 1], [0, -100]);

	useEffect(() => {
		return scrollY.onChange((latestY) => {
			onScroll?.(latestY);
		});
	}, [scrollY, onScroll]);

	return (
		<div ref={ref} style={{ overflowY: 'scroll', height: '100vh' }}>
			<motion.div style={{ y }}>
				{children}
			</motion.div>
		</div>
	);
};

export default SmoothScrollWrapper;