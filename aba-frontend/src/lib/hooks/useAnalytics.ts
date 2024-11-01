import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useAnalytics = () => {
	const router = useRouter();

	useEffect(() => {
		if (document.cookie.includes('analyticsConsent=true')) {
			// Load analytics scripts here
			// e.g., Facebook Pixel initialization
		}
	}, [router.pathname]);
};

export default useAnalytics;