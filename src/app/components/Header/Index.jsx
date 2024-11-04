"use client";
import Image from "next/image";
import styles from "./header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src={"logofest.svg"}
            alt="festival logo"
            height={32}
            width={32}
          />
        </Link>
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
