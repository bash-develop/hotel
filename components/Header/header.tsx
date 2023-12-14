"use client";

import styles from "./header.module.scss";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { opacity, background } from "./anim";
import Nav from "./nav";
import { useLenis } from "@studio-freight/react-lenis";

export default function Index() {
  const [isActive, setIsActive] = useState(false);
  const lenis = useLenis();
  const clickOnLink = (href: string) => {
    setIsActive(false);
    lenis.scrollTo(href);
  };
  return (
    <div className={styles.header}>
      <div className={styles.bar}>
        <button onClick={() => clickOnLink("#home")}>Отель София</button>
        <div
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={styles.el}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
          <div className={styles.label}>
            <motion.p
              variants={opacity}
              animate={!isActive ? "open" : "closed"}
            >
              Меню
            </motion.p>
            <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>
              Закрыть
            </motion.p>
          </div>
        </div>
      </div>
      <motion.div
        variants={background}
        initial="initial"
        animate={isActive ? "open" : "closed"}
        className={styles.background}
      ></motion.div>
      <AnimatePresence mode="wait">
        {isActive && <Nav clickOnLink={clickOnLink} />}
      </AnimatePresence>
    </div>
  );
}
