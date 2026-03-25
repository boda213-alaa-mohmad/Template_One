import Image from "next/image";
import styles from "./header.module.css";
import Link from "next/link";
export default function Header() {
  const menu = ["Features", "Services", "Portofolio", "About", "Contact"];

  return (
    <header className={`${styles.header}`}>
      <div className={`${styles["header-container"]}`}>
        <Image
          src={
            "https://elzerowebschool.github.io/HTML_And_CSS_Template_One/images/logo.png"
          }
          alt="logo"
          width={60}
          height={24}
          style={{
            cursor: "pointer",
          }}
        />
        <div className={`${styles["burger-menu"]}`}>
          <div className="first"></div>
          <div className={styles.middle}></div>
          <div className="last"></div>

          {/* <span className={styles.test}></span> */}
          <span className={styles.menu}>
            <span className={styles["up-arrow"]}></span>
            {menu.map(function (item, index) {
              return (
                <Link key={index} href={`#${item.toLowerCase()}`}>
                  <li>{item}</li>
                </Link>
              );
            })}
          </span>
        </div>
      </div>
    </header>
  );
}
