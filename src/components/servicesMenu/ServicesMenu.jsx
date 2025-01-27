const { default: Image } = require("next/image");
const { default: Link } = require("next/link");
import styles from "./servicesMenu.module.css";

const ServicesMenu = () => {
  return (
    <div className={styles.items}>
      <Link href="/services/leak-detection" className={styles.item}>
        <div className={styles.imageContainer}>
          <Image
            src="/cardImages/leak-detection.png"
            alt="leak detection"
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.maintenance}`}>
            Maintenance
          </span>
          <h3 className={styles.postTitle}>Professional Leak Detection</h3>
          <div className={styles.detail}>
            <span className={styles.author}>Click for more details</span>
          </div>
        </div>
      </Link>
      <Link href="/services/siphoning" className={styles.item}>
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
          <span className={`${styles.category} ${styles.maintenance}`}>
            Maintenance
          </span>
          <h3 className={styles.postTitle}>Siphoning</h3>
          <div className={styles.detail}>
            <span className={styles.author}>Click for more details</span>
          </div>
        </div>
      </Link>
      <Link href="/services/declogging-of-floor-drain" className={styles.item}>
        <div className={styles.imageContainer}>
          <Image
            src="/cardImages/floor-drain.png"
            alt="declogging of floor drain"
            fill
            sizes=""
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.declogging}`}>
            Declogging
          </span>
          <h3 className={styles.postTitle}>Declogging of Floor Drain</h3>
          <div className={styles.detail}>
            <span className={styles.author}>Click for more details</span>
          </div>
        </div>
      </Link>
      <Link href="/services/repiping" className={styles.item}>
        <div className={styles.imageContainer}>
          <Image
            src="/cardImages/repiping.png"
            alt="repipe"
            sizes=""
            fill
            className={styles.image}
          />
        </div>
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fixtures}`}>
            Fixtures
          </span>
          <h3 className={styles.postTitle}>Repiping</h3>
          <div className={styles.detail}>
            <span className={styles.author}>Click for more details</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ServicesMenu;
