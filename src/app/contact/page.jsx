import Image from "next/image";
import styles from "./contact.module.css";
import Contact from "@/components/contact/Contact";
import Menu from "@/components/menu/Menu";

const contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Get in Touch with Your Plumbing Pros!</h1>
            <div className={styles.contentContainer}>
                <div className={styles.content}>
                    <div className={styles.imageContainer}>
                        <Image
                            className={styles.img}
                            src={"/sectionImages/contactUs.png"}
                            alt="Contact Plumbing in Metro Manila"
                            fill
                        />
                    </div>
                    <h2 className={styles.subtitle}>Mobile Numbers</h2>
                    <Contact />
                </div>
                <Menu />
            </div>
        </div>
    );
};

export default contact;
