"use client";
import styles from "./footer.module.scss";
import ContentFuture from "../ContentFuture/Index";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <div
      className={styles.footer}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className={styles.content}>
        <ContentFuture />
      </div>
    </div>
  );
}
