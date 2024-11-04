import Image from "next/image";
import styles from "./landing.module.scss";

export default function Landing() {
  return (
    <div className={styles.landing}>
      <p>Festival Seni Cetak Grafis: Trilogia</p>
      <h1>Seni Cetak Grafis yang Bergerak</h1>
      <div className={styles.lari}>
        <span>
          <Image src={"01-lari.png"} alt="lari" width={340} height={355} />
          <Image src={"02-lari.png"} alt="lari" width={340} height={355} />
          <Image src={"03-lari.png"} alt="lari" width={340} height={355} />
          <span>
            <Image src={"01-merapi.png"} alt="lari" width={330} height={345} />
          </span>
        </span>
      </div>
    </div>
  );
}
