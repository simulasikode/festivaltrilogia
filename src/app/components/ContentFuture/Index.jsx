import styles from "./contentfuture.module.scss";
import React from "react";

export default function ContentFuture() {
  return (
    <div className={styles.content}>
      <Section1 />
      <Section2 />
    </div>
  );
}

const Section1 = () => {
  return (
    <div>
      <Nav />
    </div>
  );
};

const Section2 = () => {
  return (
    <div className={styles.section2}>
      <p>Orgenize by</p>
      <p>©2024</p>
    </div>
  );
};

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div>
        <h3>About</h3>
        <p>Home</p>
        <p>Projects</p>
        <p>Our Mission</p>
        <p>Contact Us</p>
      </div>

      <div>
        <h3>Education</h3>
        <p>News</p>
        <p>Learn</p>
        <p>Certification</p>
        <p>Publications</p>
      </div>
    </div>
  );
};
