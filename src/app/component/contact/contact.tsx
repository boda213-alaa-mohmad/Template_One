import styles from "./contact.module.css";
import { Inter, Poppins } from "next/font/google";
import { Roboto } from "next/font/google";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const roboto = Roboto({
  subsets: ["latin"], // لتدعيم الأحرف اللاتينية
  weight: ["400", "500", "700"], // العادية، المتوسطة، الغامقة
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["800", "900"],
});

const inter = Inter({
  subsets: ["latin"],
});

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={poppins.className}>Contact</h2>
      <p className={inter.className}>We are born to create</p>

      <div className={styles.info}>
        <p className={`${styles.text} ${poppins.className}`}>
          Feel free to drop us a line at:
        </p>
        <a href="mailto:leonagency@mail.com" className={poppins.className}>
          leonagency@mail.com
        </a>
        <div className={styles["social-media"]}>
          <p className={roboto.className}>Find Us On Social Networks:</p>
          <div className={styles.icons}>
            <FontAwesomeIcon icon={faYoutube} className={styles.youtube} />
            <FontAwesomeIcon icon={faFacebook} className={styles.facebook} />
            <FontAwesomeIcon icon={faTwitter} className={styles.twitter} />
          </div>
        </div>
      </div>
    </section>
  );
}
