"use client";
import styles from "./style.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./Body";
import Footer from "./Footer";

export const links = [
  {
    title: "Домой",
    href: "#home",
  },
  {
    title: "Сервисы",
    href: "#servise",
  },
  {
    title: "Комнаты",
    href: "#rooms",
  },
  {
    title: "О нас",
    href: "#about",
  },
  {
    title: "Контакты",
    href: "#contacts",
  },
];

export default function Index({ clickOnLink }: { clickOnLink: any }) {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    href: "#home",
    index: 0,
  });

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Body
            clickOnLink={clickOnLink}
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />
          <Footer />
        </div>
      </div>
    </motion.div>
  );
}
