import Image from "next/image";
import styles from "./about.module.css";
import Menu from "@/components/menu/Menu";
import CoreValues from "@/components/values/CoreValues";
import Goals from "@/components/goals/Goals";
import MenuCategory from "@/components/menuCategory/MenuCategory";
import Employees from "@/components/employees/Employees";

const page = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>GTG Soltion:</b> Your Local Plumbing Experts in Metro Manila and
        neighboring provinces.
      </h1>
      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <Image
              src="/sectionImages/aboutUs.png"
              alt="Pumbing Services"
              fill
            />
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.subtitle}>{"About Us"}</h2>
            <p className={styles.text}>
              At GTG Plumbing Services, we believe that quality plumbing is
              essential for a comfortable home or business. With over 6 years of
              experience in the plumbing industry, our skilled team is dedicated
              to providing top-notch services you can trust.
            </p>
          </div>
          <div className={styles.missionContainer}>
            <h2 className={styles.subtitle}>{"Our Mission"}</h2>
            <p className={styles.text}>
              Our mission is to deliver exceptional plumbing solutions tailored
              to meet the unique needs of our customers. We strive to ensure
              your plumbing systems operate efficiently and effectively, giving
              you peace of mind.
            </p>
          </div>
          <div className={styles.visonContainer}>
            <h2 className={styles.subtitle}>{"Our Vission"}</h2>
            <p className={styles.text}>
              At GTG Plumbing Services, our vision is to be the leading plumbing
              service provider in our community, recognized for our commitment
              to excellence, innovation, and customer care.
            </p>
          </div>
          <div className={styles.valuesContainer}>
            <h2 className={styles.subtitle}>{"Our Core Values"}</h2>
            <CoreValues />
          </div>
          <div className={styles.goalContainer}>
            <h2 className={styles.subtitle}>{"Our Goals"}</h2>
            <Goals />
          </div>
        </div>
        <div className={styles.aside}>
          <Menu />
          <MenuCategory />
          <Employees />
        </div>
      </div>
    </div>
  );
};

export default page;
