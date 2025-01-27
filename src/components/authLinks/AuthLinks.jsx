"use client";

import React, { useState } from "react";
import styles from "./authLinks.module.css";
import Link from "next/link";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  //Temporary
  const status = "notauthenticated";
  return (
    <>
      {/* {status === "notauthenticated" ? (
        <Link href="/login" className={styles.link}>Login</Link>
      ) : (
        <>
          <Link href="/rate" className={styles.link}>rate</Link>
          <span className={styles.links}>Logout</span>
        </>
      )} */}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
          {/* {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/rate">rate</Link>
              <span className={styles.links}>Logout</span>
            </>
          )} */}
        </div>
      )}
    </>
  );
};

export default AuthLinks;
