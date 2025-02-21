import Image from "next/image";
import styles from "./contactLogo.module.css";

const Contact = () => {
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
                    <a href="tel:09659773170"><span className={styles.contactNumber}>09659773170</span></a>
                    <a href="tel:09659773170" className={styles.callBtn}>Call Us</a>
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
                    <a href="tel:09501379368"><span className={styles.contactNumber}>09501379368</span></a>
                    <a href="tel:09501379368" className={styles.callBtn}>Call Us</a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
