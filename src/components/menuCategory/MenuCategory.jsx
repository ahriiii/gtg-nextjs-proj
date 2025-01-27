import Link from "next/link";
import styles from "./menuCategory.module.css";
import React from "react";

const MenuCategory = () => {
  return (
    <div className={styles.categoryList}>
      <Link
        href="/category/installation"
        className={`${styles.categoryItem} ${styles.installation}`}
      >
        Installation
      </Link>
      <Link href="/category/repair" className={`${styles.categoryItem} ${styles.repair}`}>
        Repair
      </Link>
      <Link href="/category/maintenance" className={`${styles.categoryItem} ${styles.maintenance}`}>
        Maintenance
      </Link>
      <Link href="/category/fixtures" className={`${styles.categoryItem} ${styles.fixtures}`}>
        Fixtures
      </Link>
      <Link href="/category/declogging" className={`${styles.categoryItem} ${styles.declogging}`}>
        Declogging
      </Link>
      <Link href="/category/other" className={`${styles.categoryItem} ${styles.other}`}>
        Other
      </Link>
    </div>
  );
};

export default MenuCategory;
