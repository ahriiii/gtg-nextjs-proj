"use client";

import Image from "next/image";
import styles from "./contactLogo.module.css";
import { useState, useEffect } from "react";

const Contact = () => {
    const [consentGiven, setConsentGiven] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('consentGiven');
        if (consent === 'true') {
            setConsentGiven(true);
        }

        // Listen for custom consentGiven event
        const handleConsentGiven = () => {
            setConsentGiven(true);
        };

        window.addEventListener('consentGiven', handleConsentGiven);

        return () => {
            window.removeEventListener('consentGiven', handleConsentGiven);
        };
    }, []);

    useEffect(() => {
        if (consentGiven) {
            window.gtag('consent', 'update', {
                'ad_storage': 'granted',
                'analytics_storage': 'granted'
            });
        }
    }, [consentGiven]);

    const handleCallClick = (url) => {
        console.log("handleCallClick called with URL:", url);
        console.log("gtag_report_conversion:", typeof window.gtag_report_conversion);
        const retryGtag = (retries) => {
            if (typeof window.gtag_report_conversion === 'function') {
                console.log("gtag_report_conversion is defined");
                window.gtag_report_conversion(url);
            } else if (retries > 0) {
                console.log(`gtag_report_conversion is not defined, retrying... (${retries} retries left)`);
                setTimeout(() => retryGtag(retries - 1), 2000); // Increased retry interval to 2000ms
            } else {
                console.log("gtag_report_conversion is not defined after retries");
            }
        };
        retryGtag(15); // Increased retries to 15
    };

    return (
        <div className={styles.container}>
            <div className={styles.items}>
                <div className={styles.globe}>
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.img}
                            src="/icons/globe.svg"
                            alt="globe philippines"
                            height={100}
                            width={200}
                        />
                    </div>
                    {consentGiven ? (
                        <a
                            href="tel:09659773170"
                            className={styles.callBtn}
                            onClick={() => handleCallClick('tel:09659773170')}
                        >
                            Call Us
                        </a>
                    ) : (
                        <button className={styles.csntBtn} disabled>
                            Consent Required
                        </button>
                    )}
                </div>
                <div className={styles.smart}>
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.img}
                            src="/icons/smart.svg"
                            alt="smart philippines"
                            height={100}
                            width={200}
                        />
                    </div>
                    {consentGiven ? (
                        <a
                            href="tel:09501379368"
                            className={styles.callBtn}
                            onClick={() => handleCallClick('tel:09501379368')}
                        >
                            Call Us
                        </a>
                    ) : (
                        <button className={styles.csntBtn} disabled>
                            Consent Required
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;