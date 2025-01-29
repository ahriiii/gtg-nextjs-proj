import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import Link from "next/link";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>GTG Plumbing Expert here!</b> Reliable Plumbing Solutions, Guaranteed
      </h1>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image src="/sectionImages/aboutUs.jpg" alt="siphoning services" fill className={styles.img} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>Your Trusted Plumbing Experts</h2>
          <p className={styles.postDescription}>
            At GTG Plumbing Expert, we believe that quality plumbing is
            essential for a comfortable home or business. With over 6 years of
            experience in the plumbing industry, our skilled team is dedicated
            to providing top-notch services you can trust.
          </p>
          <Link href='/about' className={styles.button}>Read More</Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
