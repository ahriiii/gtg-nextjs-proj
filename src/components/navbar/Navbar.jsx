"use client";

import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Link href={"https://web.facebook.com/GTGMalabanan"}>
          {" "}
          <Image
            src="/facebook.png"
            alt="facebook"
            height={24}
            width={24}
          />{" "}
        </Link>
        <Image src="/instagram.png" alt="instagram" height={24} width={24} />
        <Image src="/youtube.png" alt="youtube" height={24} width={24} />
      </div>
      <div className={styles.logo}>GTG Plumbing Expert</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/about" className={styles.link}>
          About
        </Link>
        <Link href="/services" className={styles.link}>
          Services
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
