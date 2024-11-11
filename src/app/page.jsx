"use client";
import styles from "./page.module.scss";
import Index from "./components/Index/Index";
import Foreword from "./components/Foreword/Index";
import Watak from "./components/Watak/Index";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
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
