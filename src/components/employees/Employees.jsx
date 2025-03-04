import Image from "next/image";
import React from "react";
import styles from "./employees.module.css";

const Employees = () => {
  return (
    // --- Team Start ---
    <div className={styles.items}>
      <div className={styles.item}>
        <div className={styles.imageContainer}>
          <Image
            src="/avatar/gilbert.png"
            alt=""
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.projManager}`}>
            Project Manager
          </span>
          <h3 className={styles.postTitle}>
            Innovative plumbing for modern living
          </h3>
          <div className={styles.detail}>
            <span className={styles.employee}>Gilbert Gachitorena Jr.</span>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.imageContainer}>
          <Image src="/avatar/pfp.png" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.headPlumber}`}>
            Head Plumber
          </span>
          <h3 className={styles.postTitle}>
            We repair what your husband fixed
          </h3>
          <div className={styles.detail}>
            <span className={styles.author}>Ariel Gachitorena</span>
          </div>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.imageContainer}>
          <Image src="/avatar/pfp.png" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.headPlumber}`}>
            Head Plumber
          </span>
          <h3 className={styles.postTitle}>
            If water runs through it, we do it!
          </h3>
          <div className={styles.detail}>
            <span className={styles.author}>Isidro Gachitorena</span>
          </div>
        </div>
      </div>
    </div>
    // --- Team End ---
  );
};

export default Employees;
