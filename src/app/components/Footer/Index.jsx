import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div
      className={styles.footer}
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <span>©2024 Krack! Studio</span>
      <div className={styles.social}>
        <p>Instagram</p>
        <p>Youtube</p>
      </div>
    </div>
  );
}
