"use client"
import styles from './consentBanner.module.css'
import { useState, useEffect } from 'react';

const ConsentBanner = () => {
    const [consentGiven, setConsentGiven] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('consentGiven');
        if (consent === 'true') {
            setConsentGiven(true);
            window.gtag('consent', 'update', {
                'ad_storage': 'granted',
                'analytics_storage': 'granted'
            });
        }
    }, []);

    const handleAccept = () => {
        setConsentGiven(true);
        localStorage.setItem('consentGiven', 'true');
        window.gtag('consent', 'update', {
            'ad_storage': 'granted',
            'analytics_storage': 'granted'
        });
        // Dispatch custom event
        window.dispatchEvent(new Event('consentGiven'));
    };

    if (consentGiven) {
        return null;
    }

    return (
        <div className={styles.banner}>
            <div className={styles.textContainer}>
                <p className={styles.text}>To enhance your experience and track conversions for our Google Ads, we use cookies on this website. Cookies help us understand how you interact with our site and allow us to improve our services.</p>
            </div>
            <button className={styles.btn} onClick={handleAccept}>Accept</button>
        </div>
    );
};

export default ConsentBanner;