"use client"

import { useState } from 'react';

const ConsentBanner = () => {
    const [consentGiven, setConsentGiven] = useState(false);

    const handleAccept = () => {
        setConsentGiven(true);
        window.gtag('consent', 'update', {
            'ad_storage': 'granted',
            'analytics_storage': 'granted'
        });
    };

    if (consentGiven) {
        return null;
    }

    return (
        <div className="consent-banner">
            <p>We use cookies to improve your experience. By using our site, you agree to our use of cookies.</p>
            <button onClick={handleAccept}>Accept</button>
        </div>
    );
};

export default ConsentBanner;