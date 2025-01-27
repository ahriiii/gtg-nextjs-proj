import React from "react";
import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = (props) => {
  const { post } = props;

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={post?.image} alt={post?.alt} fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.details} style={{ backgroundColor: "#" + `${post?.catBgColor}` }}>
          <span className={styles.category} >{post?.category}</span>
        </div>
        <Link href="/details">
          <h3 className={styles.title}>
            {post?.cardTitle}
          </h3>
        </Link>
        <p className={styles.description}>
          {post?.cardDescription}
        </p>
        <Link href={`/services/${post?.slug}`} className={styles.link}>Read More</Link>
      </div>
    </div>
  );
};

export default Card;
