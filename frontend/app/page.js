// import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.home}>         
      <div className={styles.Chapter}>Associate Chapter at the University of Connecticut</div>
      <div className={styles.LPhiE}>LAMBDA PHI EPSILON</div>
      <div className={styles.Quote}>World's largest Asian-interest fraternity.</div>
      <div className={styles.Inc}>© 2024 by Lambda Phi Epsilon International Fraternity, Inc.</div>
      <a className={styles.interestForm} href="https://docs.google.com/forms/d/e/1FAIpQLScp075voh3flh157Bb8gAtXtfCuVWCb7P__WAJI2Ds8jObSHg/viewform?utm_source=ig&utm_medium=social&utm_content=link_in_bio">Rush Interest Form</a>
    </div>
  );
}
