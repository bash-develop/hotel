import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./style.module.scss";
import { blur, translate } from "../../anim";
import { useLenis } from "@studio-freight/react-lenis";

export default function Body({
  links,
  selectedLink,
  setSelectedLink,
  clickOnLink,
}: {
  links: any[];
  selectedLink: any;
  setSelectedLink: any;
  clickOnLink: any;
}) {
  const getChars = (word: string) => {
    let chars: any = [];
    word.split("").forEach((char: string, i: number) => {
      chars.push(
        <motion.span
          custom={[i * 0.02, (word.length - i) * 0.01]}
          variants={translate}
          initial="initial"
          animate="enter"
          exit="exit"
          key={char + i}
        >
          {char}
        </motion.span>
      );
    });
    return chars;
  };
  const lenis = useLenis();
  return (
    <div className={styles.body}>
      {links.map((link, index) => {
        const { title, href } = link;
        console.log(selectedLink);
        return (
          <button key={`l_${index}`} onClick={() => clickOnLink(href)}>
            <motion.p
              onMouseOver={() => {
                setSelectedLink({ isActive: true, href, index });
              }}
              onMouseLeave={() => {
                setSelectedLink({ isActive: false, href, index });
              }}
              variants={blur}
              animate={
                selectedLink.isActive && selectedLink.index != index
                  ? "open"
                  : "closed"
              }
            >
              {getChars(title)}
            </motion.p>
          </button>
        );
      })}
    </div>
  );
}
