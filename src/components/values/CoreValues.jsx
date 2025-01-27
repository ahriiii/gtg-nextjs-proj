import Image from "next/image";
import styles from "./coreValues.module.css";

const CoreValues = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            src="/icons/Integrity.svg"
            alt="Integrity"
            height={70}
            width={70}
          />
        </div>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Integrity</h2>
        </div>

        <p className={styles.description}>
          We believe in honesty and transparency in all our interactions. Our
          customers can trust us to provide accurate estimates and communicate
          openly throughout the service process.
        </p>
      </div>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            src="/icons/Quality.svg"
            alt="Quality"
            height={70}
            width={70}
          />
        </div>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Quality</h2>
        </div>
        <p className={styles.description}>
          We are dedicated to delivering high-quality workmanship. Our team is
          trained to use the best materials and techniques, ensuring that our
          services stand the test of time.
        </p>
      </div>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            src="/icons/CustomerSatisfaction.svg"
            alt="Customer Satisfaction"
            height={70}
            width={70}
          />
        </div>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Customer Satisfaction</h2>
        </div>
        <p className={styles.description}>
          Our customers are at the heart of everything we do. We prioritize your
          needs and strive to exceed your expectations with every job, big or
          small.
        </p>
      </div>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            src="/icons/Innovation.svg"
            alt="Innovation"
            height={70}
            width={70}
          />
        </div>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Innovation</h2>
        </div>
        <p className={styles.description}>
          We embrace new technologies and techniques in plumbing to provide
          efficient solutions for our customers. Staying updated with industry
          advancements allows us to serve you better.
        </p>
      </div>
    </div>
  );
};

export default CoreValues;
