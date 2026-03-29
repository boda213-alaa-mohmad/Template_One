import styles from "./Landing.module.css";
export default function Landing() {
  return (
    <section className={styles.landing} aria-label="Hero section">
      <div className={styles.container}>
        <h2>Hello There</h2>
        <p>We are Leon - Super Creative & Minimal Agency Web Template</p>
      </div>
    </section>
  );
}
