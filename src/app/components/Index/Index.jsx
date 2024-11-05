"use client";
import Image from "next/image";
import styles from "./landing.module.scss";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Index() {
  const background = useRef(null);
  const introImage = useRef(null);
  const homeHeader = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: true,
        start: "top",
        end: "+=8920px",
      },
    });

    timeline

      .from(background.current, { height: "130px" })

      .to(introImage.current, { clipPath: `inset(15%)` }, 0);
  }, []);

  return (
    <div ref={introImage} className={styles.landing}>
      <div ref={homeHeader}>
        <p>Festival Seni Cetak Grafis: Trilogia</p>
        <h1>Seni Cetak Grafis yang Bergerak</h1>
      </div>
      <div ref={background} className={styles.lari}>
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
