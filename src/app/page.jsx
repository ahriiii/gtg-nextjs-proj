"use client";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import Card from "@/components/cardList/CardList";
import Menu from "@/components/menu/Menu";
import PixelTracker from "@/components/pixelTracker/PixelTracker";

export default function Home() {
  return (
    <div>
      <PixelTracker />
      <Featured />
      <div className={styles.content}>
        <Card />
        <Menu />
      </div>
    </div>
  );
}
