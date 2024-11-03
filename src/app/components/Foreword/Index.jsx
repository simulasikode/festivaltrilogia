import styles from "./foreword.module.scss";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Landing() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div className={styles.foreword}>
      <span>
        Festival Seni Cetak Grafis “Trilogia”: Seni Cetak yang Bergerak{" "}
      </span>
      <h2>
        <b>Festival Seni Cetak Grafis “Trilogia”</b> merupakan upaya Krack
        sebagai kelompok pegiat seni cetak grafis untuk merayakan praktik dan
        pengetahuan yang senantiasa berkembang luas dan terepresentasi dalam
        seni cetak grafis. Watak seni cetak grafis yang masal, distributif,
        repetitif dan kontekstual akan kami jadikan pintu masuk untuk
        membicarakan berbagai topik dalam dinamika sosial budaya masyarakat.
      </h2>
    </div>
  );
}
