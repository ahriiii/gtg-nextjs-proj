import React from "react";
import styles from "./menu.module.css";
import Employees from "../employees/Employees";
import ServicesMenu from "../servicesMenu/ServicesMenu";
import MenuCategory from "../menuCategory/MenuCategory";



const Menu = () => {


  return (
    <div className={styles.container}>
      {/* --- Team Start --- */}

      <h4 className={styles.subtitle}>{"Meet Our"}</h4>
      <h2 className={styles.title}>Team</h2>
      <Employees />
      {/* --- Team End --- */}

      {/* Categories Start */}

      <h4 className={styles.subtitle}>{"Discover by Topic"}</h4>
      <h2 className={styles.title}>Categories</h2>
      <MenuCategory />

      {/* Categories End */}

      {/* --- Most Popular Start --- */}

      <h4 className={styles.subtitle}>{"What's Hot?"}</h4>
      <h2 className={styles.title}>Most Popular</h2>
      <ServicesMenu />

      {/* Most Popular End */}
    </div>
  );
};

export default Menu;
