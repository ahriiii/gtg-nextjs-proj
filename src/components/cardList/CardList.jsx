import React from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Link from "next/link";
import Image from "next/image";

const cardList = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Services</h2>
      <div className={styles.posts}>
        <div className={styles.imageContainer}>
          <Image
            src="/cardImages/leak-detection.png"
            alt="leak detection"
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.details}>
            <span className={`${styles.category} ${styles.maintenance}`}>
              Maintenance
            </span>
          </div>
          <Link href="/services/leak-detection">
            <h3 className={styles.subtitle}>Leak Detection</h3>
          </Link>
          <p className={styles.description}>
            Locate Hidden Leaks! Our advanced leak detection services utilize
            cutting-edge technology to identify leaks in your plumbing system.
            Early detection prevents costly damage and water waste.
          </p>
          <Link href={`/services/leak-detection`} className={styles.link}>
            Read More
          </Link>
        </div>
      </div>
      <div className={styles.posts}>
        <div className={styles.imageContainer}>
          <Image
            src="/cardImages/siphoning.png"
            alt="siphoning"
            fill
            sizes=""
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.details}>
            <span className={`${styles.category} ${styles.maintenance}`}>
              Maintenance
            </span>
          </div>
          <Link href="/services/siphoning">
            <h3 className={styles.subtitle}>Siphoning</h3>
          </Link>
          <p className={styles.description}>
            Efficient Waste Removal! We provide siphoning services to remove
            waste from reservoirs and pools, maintaining hygiene and avoiding
            overflow problems.
          </p>
          <Link href={`/services/siphoning`} className={styles.link}>
            Read More
          </Link>
        </div>
      </div>
      <div className={styles.posts}>
        <div className={styles.imageContainer}>
          <Image
            src="/cardImages/repiping.png"
            alt="repiping"
            fill
            sizes=""
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.details}>
            <span className={`${styles.category} ${styles.fixtures}`}>
              Fixtures
            </span>
          </div>
          <Link href="/services/repiping">
            <h3 className={styles.subtitle}>Repiping</h3>
          </Link>
          <p className={styles.description}>
            Upgrade Your Plumbing! If your pipes are old or damaged, our
            repiping service replaces them with new, durable materials,
            enhancing water quality and flow throughout your home.
          </p>
          <Link href={`/services/repiping`} className={styles.link}>
            Read More
          </Link>
        </div>
      </div>
      <div className={styles.posts}>
        <div className={styles.imageContainer}>
          <Image src="/cardImages/toilet.png" alt="toilet" fill sizes="" className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <div className={styles.details}>
            <span className={`${styles.category} ${styles.declogging}`}>
              Declogging
            </span>
          </div>
          <Link href="/services/declogging-of-toilet">
            <h3 className={styles.subtitle}>Declogging of Toilet</h3>
          </Link>
          <p className={styles.description}>
            Flush Away Clogs! We provide expert toilet declogging services to
            tackle blockages, ensuring your toilet operates efficiently. Say
            goodbye to backups and enjoy hassle-free flushing!
          </p>
          <Link href={`/services/declogging-of-toilet`} className={styles.link}>
            Read More
          </Link>
        </div>
      </div>
      <div className={styles.showMore}>
        <Link href={`/services`} className={styles.show}>
          Show all services.
        </Link>
      </div>

    </div>
  );
};

export default cardList;
