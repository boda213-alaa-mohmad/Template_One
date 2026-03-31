import styles from "./Portfolio.module.css";
import { Inter, Poppins, Roboto } from "next/font/google";
import Image from "next/image";

//fonts
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
});

interface Card {
  image: string;
  title: string;
  paragraph: string;
}

export default function Portfolio() {
  const cards: Card[] = [
    {
      image:
        "https://elzerowebschool.github.io/HTML_And_CSS_Template_One/images/portfolio-1.jpg",
      title: "Project Here",
      paragraph:
        "My creative ability is very difficult to measure because it can manifest in so many surprising and.",
    },
    {
      image:
        "https://elzerowebschool.github.io/HTML_And_CSS_Template_One/images/portfolio-2.jpg",
      title: "Project Here",
      paragraph:
        "My creative ability is very difficult to measure because it can manifest in so many surprising and.",
    },
    {
      image:
        "https://elzerowebschool.github.io/HTML_And_CSS_Template_One/images/portfolio-3.jpg",
      title: "Project Here",
      paragraph:
        "My creative ability is very difficult to measure because it can manifest in so many surprising and.",
    },
  ];

  return (
    <div id="portofolio" className={styles.portfolio}>
      <h2 className={poppins.className}>Portfolio</h2>
      <p className={inter.className}>
        If you do it right, it will last forever.
      </p>
      <div className={styles["card-container"]}>
        {cards.map(function (card, index) {
          return (
            <div className={styles.card} key={index}>
              <Image
                className={styles.img}
                src={card.image}
                alt=""
                width={350}
                height={400}
              />
              <div className={styles.info}>
                <h4 className={roboto.className}>{card.title}</h4>
                <p className={inter.className}>{card.paragraph}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
