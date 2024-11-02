"use client";
import styles from "./page.module.scss";
import Landing from "./components/Landing/Index";
import Foreword from "./components/Foreword/Index";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <Landing />
        <Foreword />
      </section>
    </main>
  );
}
