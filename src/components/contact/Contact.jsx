"use client";

import Image from "next/image";
import styles from "./contactLogo.module.css";

const Contact = () => {
    const handleCallClick = (url) => {
        console.log("handleCallClick called with URL:", url);
        const retryGtag = (retries) => {
            if (typeof window.gtag_report_conversion === 'function') {
                console.log("gtag_report_conversion is defined");
                window.gtag_report_conversion(url);
            } else if (retries > 0) {
                console.log("gtag_report_conversion is not defined, retrying...");
                setTimeout(() => retryGtag(retries - 1), 500);
            } else {
                console.log("gtag_report_conversion is not defined after retries");
            }
        };
        retryGtag(5); // Retry up to 5 times
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
                    <a href="tel:09659773170" onClick={() => handleCallClick('tel:09659773170')}>
                        <span className={styles.contactNumber}>09659773170</span>
                    </a>
                    <a
                        href="tel:09659773170"
                        className={styles.callBtn}
                        onClick={() => handleCallClick('tel:09659773170')}
                    >
                        Call Us
                    </a>
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
                    <a href="tel:09501379368" onClick={() => handleCallClick('tel:09501379368')}>
                        <span className={styles.contactNumber}>09501379368</span>
                    </a>
                    <a
                        href="tel:09501379368"
                        className={styles.callBtn}
                        onClick={() => handleCallClick('tel:09501379368')}
                    >
                        Call Us
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;