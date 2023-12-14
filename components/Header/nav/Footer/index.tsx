import styles from "./style.module.scss";
import { translate } from "../../anim";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>Отель София</span> {new Date().getFullYear()}, Официальный сайт
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>Адрес:</span> улица Железноводская, д.14
        </motion.li>
      </ul>
      <ul>
        <motion.li
          custom={[0.3, 0]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          <span>Создано:</span>Shankin Dev
        </motion.li>
      </ul>
    </div>
  );
}
