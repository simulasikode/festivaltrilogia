"use client";
import styles from "./watak.module.scss";
import Image from "next/image";

export default function Watak() {
  return (
    <div className={styles.watak}>
      <div className={styles.container}>
        <div>
          <span>Watak</span>
          <p>
            <mark>“Watak”</mark> adalah tema dari festival ini. Tujuan dari
            pemilihan tema tersebut adalah untuk menelusuri dan memeriksa
            kembali perkembangan cara berpikir dan sifat dari praktik seni cetak
            grafis. Berdasarkan riset Rintisan Sejarah Seni Cetak Grafis yang
            dikerjakan sepanjang 2022-2023 cara berpikir seni cetak grafis telah
            memproduksi berbagai pengetahuan yang berkaitan dengan berbagai
            respon, kritik hingga strategi resiliensi masyarakat yang secara
            politis dimunculkan dalam kehidupan sehari-hari.
          </p>
          <p>
            Berangkat dari hasil riset tersebut, festival ini akan menempatkan
            <mark>“Watak”</mark> seni cetak grafis di Indonesia sebagai sesuatu
            yang terus-menerus mengalami rekontekstualisasi seiring perubahan
            zaman dalam lintasan historis dari era kolonial hingga hari ini.
            <mark>“Watak”</mark> seni cetak grafis yang dimaksud berkaitan
            dengan beberapa prinsip dasar praktiknya, yaitu distributif,
            repetitif, dan reproduktif.
          </p>
        </div>
        <div>
          <Image
            src={"himen.png"}
            alt="festival logo"
            height={510}
            width={454}
          />
        </div>
      </div>
    </div>
  );
}
