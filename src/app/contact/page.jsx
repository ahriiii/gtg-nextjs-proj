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
                    <div className={styles.textContainer}>
                        <p className={styles.text}>
                            We’re here to help with all your plumbing needs! Whether you have
                            a leaky faucet, a clogged drain, or need a complete plumbing
                            overhaul, our team of experienced professionals is just a message
                            away.
                        </p>
                        <h2>Why Contact Us?</h2>
                        <ul>
                            <li className={styles.text}>
                                <strong>Fast Response Times:</strong> We understand that
                                plumbing issues can’t wait! Reach out, and we’ll get back to you
                                quickly.
                            </li>
                            <li className={styles.text}>
                                <strong>Expert Advice:</strong>Not sure what the problem is? Our
                                knowledgeable staff is ready to provide guidance and solutions.
                            </li>
                            <li className={styles.text}>
                                <strong>Free Estimates:</strong>
                                We offer free, no-obligation estimates so you can plan your
                                plumbing projects without any surprises.
                            </li>
                        </ul>
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
