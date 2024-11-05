"use client";
import styles from "./page.module.scss";
import Index from "./components/Index/Index";
import Foreword from "./components/Foreword/Index";
import Watak from "./components/Watak/Index";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <Index />
        <Foreword />
        <Watak />
      </section>
    </main>
  );
}
