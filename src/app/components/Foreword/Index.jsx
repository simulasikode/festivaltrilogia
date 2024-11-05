"use client";
import styles from "./foreword.module.scss";
import React, { useState, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Landing() {
  const container = useRef(null);
  const h2Container = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: h2Container.current,
      pin: true,
      start: "top-=120px",

      end: document.body.offsetHeight - window.innerHeight - 50,
    });
  }, []);

  return (
    <div ref={container} className={styles.foreword}>
      <p>Festival Seni Cetak Grafis “Trilogia”: Seni Cetak yang Bergerak</p>
      <h2 ref={h2Container}>
        <b>Festival Seni Cetak Grafis “Trilogia”</b> merupakan upaya Krack
        sebagai kelompok pegiat seni cetak grafis untuk merayakan praktik dan
        pengetahuan yang senantiasa berkembang luas dan terepresentasi dalam
        seni cetak grafis. Watak seni cetak grafis yang masal, distributif,
        repetitif dan kontekstual akan kami jadikan pintu masuk untuk
        membicarakan berbagai topik dalam dinamika sosial budaya masyarakat.
      </h2>
      <div className={styles.btn}>Baca Selengkapnya</div>
    </div>
  );
}
