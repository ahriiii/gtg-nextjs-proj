"use client";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import Card from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";

export default function Home() {
  return (
    <div>
      <Featured />
      <div className={styles.content}>
        <Card />
        <Menu />
      </div>
    </div>
  );
}
