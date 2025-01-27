import styles from "./goals.module.css";

const Goals = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.numberWrapper}>
          <span className={styles.number}>1</span>
        </div>
        <p className={styles.description}>
          Ensure that 100% of our customers are satisfied with our services,
          aiming to exceed their expectations at every opportunity.
        </p>
      </div>
      <div className={styles.item}>
        <div className={styles.numberWrapper}>
          <span className={styles.number}>2</span>
        </div>
        <p className={styles.description}>
          Implement strict quality control measures to guarantee that every job
          is completed to the highest standards of craftsmanship and safety.
        </p>
      </div>
      <div className={styles.item}>
        <div className={styles.numberWrapper}>
          <span className={styles.number}>3</span>
        </div>
        <p className={styles.description}>
          Invest in ongoing training and development for our team to stay
          updated with industry trends, ensuring that we provide innovative and
          effective solutions.
        </p>
      </div>
    </div>
  );
};

export default Goals;
