import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/gtg-plumbing.png" alt="logo" width={50} height={50} style={{ borderRadius: "50%" }} />
          <h1 className={styles.logoText}>GTG Plumbing Solution</h1>
        </div>
        <p className={styles.description}>
          At GTG Plumbing Solution, we believe that quality plumbing is
          essential for a comfortable home or business. With over 6 years of
          experience in the plumbing industry, our skilled team is dedicated to
          providing top-notch services you can trust.
        </p>
        <div className={styles.social}>
          <Image src="/facebook.png" alt="facebook" height={18} width={18} />
          <Image src="/instagram.png" alt="instagram" height={18} width={18} />
          <Image src="/tiktok.png" alt="tiktok" height={18} width={18} />
          <Image src="/youtube.png" alt="youtube" height={18} width={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/category/repair">Repair</Link>
          <Link href="/category/installation">Installation</Link>
          <Link href="/category/maintenace">Maintenance</Link>
          <Link href="/category/Fixtures">Fixtures</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">Tiktok</Link>
          <Link href="/">Youtube</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
