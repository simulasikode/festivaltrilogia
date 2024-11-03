"use client";
import styles from "./header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <div>
        <Link href="/">Festival seni cetak grafis</Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/tentang">Tentang</Link>
          </li>
          <li>
            <Link href="/program">Program</Link>
          </li>
          <li>
            <Link href="/tim-kerja">Tim Kerja</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
