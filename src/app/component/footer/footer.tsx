import styles from "./footer.module.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={inter.className}>
        © 2021 <span className={styles.span}>Leon</span> All Right Reserved
      </p>
    </footer>
  );
}
