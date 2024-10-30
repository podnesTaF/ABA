'use client';

import React, { useState } from 'react';
import Footer from '@/components/footer/Footer';
import SmoothScrollWrapper from '@/components/shared/SmoothScrollWrapper';
import { Toaster } from '@/components/ui/sonner';

interface ClientLayoutProps {
	children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
	const [isSticky, setIsSticky] = useState(false);

	// Callback to handle the scroll position from SmoothScrollWrapper
	const handleScroll = (scrollY: number) => {
		setIsSticky(scrollY > 48);
	};

	return (
		<>
			{/* Fixed Header that can become sticky */}
			{/* SmoothScrollWrapper for the main content */}
			<SmoothScrollWrapper onScroll={handleScroll}>
				<div className="pt-[60px] md:pt-0">{children}</div>
				<Footer />
			</SmoothScrollWrapper>
			<Toaster />
		</>
	);
};

export default ClientLayout;