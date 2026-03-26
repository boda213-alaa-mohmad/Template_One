import styles from "./about.module.css";
import { Inter, Poppins, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });
const roboto = Roboto({ subsets: ["latin"] });

import Image from "next/image";
export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={poppins.className}>About</h2>
      <p className={inter.className}>Less is more work</p>

      <div>
        <div className={styles["about-content"]}>
          <Image
            src="https://elzerowebschool.github.io/HTML_And_CSS_Template_One/images/about.jpg"
            alt="shelf"
            width={250}
            height={375}
          />
          <div className={styles.text}>
            <p className={roboto.className}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              nemo neque voluptate tempora velit cum non, fuga vitae architecto
              delectus sed maxime rerum impedit aliquam obcaecati, aut excepturi
              iusto laudantium!
            </p>
            <hr />

            <p className={inter.className}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              sapiente. Velit iure exercitationem dolores nesciunt dolore. Eum
              officiis dolorum hic voluptate quaerat minima, similique inventore
              esse, alias, sed quo officia?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
