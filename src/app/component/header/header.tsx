"use client";
import Image from "next/image";
import styles from "./Header.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const menu = ["Features", "Services", "Portofolio", "About", "Contact"];
  const [isOpen, setIsOpen] = useState(false);

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
          <button
            className={styles.btn}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <div></div>
            <div className={styles.middle}></div>
            <div></div>
          </button>

          {isOpen ? (
            <span className={isOpen ? styles.menu : styles.hide}>
              <span className={styles["up-arrow"]}></span>
              {menu.map(function (item, index) {
                return (
                  <li key={index}>
                    <Link href={`#${item.toLowerCase()}`}>{item}</Link>
                  </li>
                );
              })}
            </span>
          ) : null}
        </div>

        <ul className={styles.navbar}>
          {menu.map(function (item, index) {
            return (
              <li key={index}>
                <Link href={`#${item.toLowerCase()}`}>{item}</Link>
              </li>
            );
          })}
        </ul>

        {/* <div className={`${styles["burger-menu"]}`}>
          <button className={styles.btn} onClick={() => {
          }}>
            <div></div>
            <div className={styles.middle}></div>
            <div></div>
          </button>

          <span className={styles.menu}>
            <span className={styles["up-arrow"]}></span>
            {menu.map(function (item, index) {
              return (
                <li key={index}>
                  <Link href={`#${item.toLowerCase()}`}>{item}</Link>
                </li>
              );
            })}
          </span>
        </div> */}
      </div>
    </header>
  );
}
